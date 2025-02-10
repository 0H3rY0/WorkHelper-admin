import { FaDatabase } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import ObjectsFilterSection from "../components/ObjectsFilterSection";
import ObjectDataTable from "../components/ObjectDataTable";

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

  const getAllFilters = async () => {
    const filters = objectFilters?.length
      ? objectFilters
          .map((item) => item.name)
          .reduce((acc, item) => ({ ...acc, ...item }), {})
      : {};

    try {
      const response = await axios.post("http://localhost:3000/objects", {
        filters,
      });

      setFilteredData(response.data);
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-start ">
      <ObjectsFilterSection
        objectFilters={objectFilters}
        setObjectFilters={setObjectFilters}
        objectColumns={objectColumns}
      />

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

      <ObjectDataTable
        objectColumns={objectColumns}
        setFilteredData={setFilteredData}
        filteredData={filteredData}
      />
    </div>
  );
};

export default ObjectPage;
