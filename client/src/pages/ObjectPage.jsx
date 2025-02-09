import { FaFilter } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import ObjectFilter from "../components/ObjectFilter";
import { useState, useEffect } from "react";
import axios from "axios";

const ObjectPage = () => {
  const [objectFilters, setObjectFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [objectColumns, setObjectColumns] = useState([]);

  useEffect(() => {
    const getColumns = async () => {
      const response = await axios.get("http://localhost:3000/columns");
      setObjectColumns(response.data);
    };

    getColumns();
  }, []);

  const addObjectFilter = () => {
    const newFilter = { id: uuidv4(), name: "new object" };
    setObjectFilters((prev) => [...prev, newFilter]);
  };

  const getAllFilters = async () => {
    const filters = objectFilters
      .map((item) => item.name)
      .reduce((acc, item) => {
        return { ...acc, ...item };
      });

    console.log(filters);

    const response = await axios.post("http://localhost:3000/objects", {
      filters,
    });

    setFilteredData(response.data);
  };

  return (
    <div className="w-full flex flex-col items-start p-14 ">
      <h2 className="font-semibold text-2xl text-slate-700 flex gap-2">
        Filtry <FaFilter size={32} />
      </h2>
      <div className="w-full flex flex-col  justify-center mt-5">
        {objectFilters.map((item) => {
          return (
            <ObjectFilter
              key={item.id}
              id={item.id}
              setObjectFilters={setObjectFilters}
              objectColumns={objectColumns}
            />
          );
        })}

        <p type="submit" className="flex justify-center">
          <CiCirclePlus
            size={45}
            className="text-slate-700 cursor-pointer mt-10 hover:text-slate-500 scale-transition"
            onClick={addObjectFilter}
          />
        </p>
      </div>

      <div className="w-full font-semibold text-2xl text-slate-700 flex gap-2 mt-20 justify-between items-center">
        <h2 className="flex gap-2">
          Dane <FaDatabase size={32} />
        </h2>
        <button className="button" onClick={() => getAllFilters()}>
          Pokaz
        </button>
      </div>

      <table className="table mt-7">
        <thead>
          <tr>
            {objectColumns.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No results
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ObjectPage;
