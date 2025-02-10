import { FaDatabase } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import ObjectsFilterSection from "../components/ObjectsFilterSection";
import ObjectDataTable from "../components/ObjectDataTable";

const ObjectPage = () => {
  const [objectFilters, setObjectFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [objectColumns, setObjectColumns] = useState([]);
  const [originalData, setOriginalData] = useState([]); // Pełne dane
  const [rowLimit, setRowLimit] = useState(5); // Domyślny limit wierszy

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

      setOriginalData(response.data); // Zapisujemy pełne dane
      setFilteredData(response.data.slice(0, rowLimit)); // Ograniczamy do domyślnego limitu
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  };

  const changeFilteredDataRowsLimit = (e) => {
    const limit = Number(e.target.value);
    setRowLimit(limit);
    setFilteredData(originalData.slice(0, limit));
  };

  return (
    <div className="w-full flex flex-col items-start">
      <ObjectsFilterSection
        objectFilters={objectFilters}
        setObjectFilters={setObjectFilters}
        objectColumns={objectColumns}
      />

      <div className="w-full font-semibold text-2xl text-slate-700 flex gap-2 mt-20 justify-between items-center px-7">
        <h2 className="flex gap-2">
          Dane <FaDatabase size={32} />
        </h2>
        <div className="flex items-center justify-start gap-10">
          <div className="flex items-center justify-center gap-2 text-[1rem]">
            <select
              className="bg-white hover:bg-slate-400 shadow-xl rounded-lg p-2 hover:scale-110 scale-transition"
              onChange={changeFilteredDataRowsLimit}
              value={rowLimit}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={50}>20</option>
            </select>
            <p>Liczba wyświetleń</p>
          </div>
          <button
            className="button bg-custom-blue text-white"
            onClick={() => getAllFilters()}
          >
            Pokaż
          </button>
        </div>
      </div>

      <ObjectDataTable
        objectColumns={objectColumns}
        setFilteredData={setFilteredData}
        filteredData={filteredData}
      />
      {/* <div className="w-full bg-dark-gray text-white p-4 text-end">liczba</div> */}
    </div>
  );
};

export default ObjectPage;
