import { FaFilter } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import ObjectFilter from "../components/ObjectFilter";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const ObjectPage = () => {
  const [objectFilters, setObjectFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [objectColumns, setObjectColumns] = useState([]);
  const navigate = useNavigate();

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

    const response = await axios.post("http://localhost:3000/objects", {
      filters,
    });

    setFilteredData(response.data);
  };

  return (
    <div className="w-full flex flex-col items-start md:p-14 p-5 ">
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
        <button
          className="button bg-custom-blue text-white"
          onClick={() => getAllFilters()}
        >
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
              <tr key={item.id} onClick={() => navigate(`object/${item.id}`)}>
                {objectColumns.map((col, index) => (
                  <td key={index} data-label={col}>
                    {item[col]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="sm:text-center no-results">
              <td colSpan="100%">No results</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ObjectPage;
