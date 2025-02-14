import { FaDatabase, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import ObjectsFilterSection from "../components/ObjectsFilterSection";
import ObjectDataTable from "../components/ObjectDataTable";

const ObjectPage = () => {
  const [objectFilters, setObjectFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [objectColumns, setObjectColumns] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [rowLimit, setRowLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const getColumns = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/columns`);
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
      const response = await axios.post(`${BACKEND_URL}/api/objects`, {
        filters,
      });

      setOriginalData(response.data);
      const newTotalPages = Math.max(
        1,
        Math.ceil(response.data.length / rowLimit)
      );
      setTotalPages(newTotalPages);
      setCurrentPage(1);
      setFilteredData(response.data.slice(0, rowLimit));
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  };

  const changeFilteredDataRowsLimit = (e) => {
    const limit = Number(e.target.value);
    setRowLimit(limit);
    const newTotalPages = Math.max(1, Math.ceil(originalData.length / limit));
    setTotalPages(newTotalPages);
    setCurrentPage(1);
    setFilteredData(originalData.slice(0, limit));
  };

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const startIndex = (page - 1) * rowLimit;
    const endIndex = startIndex + rowLimit;
    setFilteredData(originalData.slice(startIndex, endIndex));
  };

  const renderPageNumbers = () => {
    if (totalPages <= 1) return null;

    let pageNumbers = [];
    const startPage = Math.max(1, currentPage - 3);
    const endPage = Math.min(totalPages, currentPage + 3);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-3 py-1 m-1 rounded-full ${
            i === currentPage ? "bg-custom-blue text-white" : "bg-gray-200"
          }`}
          onClick={() => changePage(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="w-full flex flex-col items-start">
      <ObjectsFilterSection
        objectFilters={objectFilters}
        setObjectFilters={setObjectFilters}
        objectColumns={objectColumns}
      />

      <div className="w-full font-semibold text-2xl text-slate-700 flex sm:flex-row flex-col gap-2 mt-20 sm:justify-between sm:items-center px-7">
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
              <option value={20}>20</option>
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

      {totalPages > 1 && (
        <div className="w-full flex justify-center items-center bg-dark-gray p-2">
          {currentPage > 1 && (
            <button
              onClick={() => changePage(currentPage - 1)}
              className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400"
            >
              <FaChevronLeft />
            </button>
          )}
          {renderPageNumbers()}
          {currentPage < totalPages && (
            <button
              onClick={() => changePage(currentPage + 1)}
              className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ObjectPage;
