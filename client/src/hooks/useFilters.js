import { useState, useEffect } from "react";
import axios from "axios";

const useFilters = (BACKEND_URL) => {
  const [objectFilters, setObjectFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [rowLimit, setRowLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

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
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  };

  const changeFilteredDataRowsLimit = (e) => {
    console.log("wykonuje");
    const limit = Number(e.target.value);
    setRowLimit(limit);
    setCurrentPage(1);
  };

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(originalData.length / rowLimit));
    setTotalPages(totalPages);

    const startIndex = (currentPage - 1) * rowLimit;
    const endIndex = startIndex + rowLimit;
    setFilteredData(originalData.slice(startIndex, endIndex));
  }, [originalData, rowLimit, currentPage]);

  return {
    objectFilters,
    setObjectFilters,
    filteredData,
    setFilteredData,
    originalData,
    setOriginalData,
    rowLimit,
    getAllFilters,
    changeFilteredDataRowsLimit,
    currentPage,
    setCurrentPage,
    totalPages,
  };
};

export default useFilters;
