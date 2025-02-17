import { useState, useEffect } from "react";
import useFilters from "../../hooks/useFilters";
import ObjectsFilterSection from "../../components/ObjectsFilterSection";
import ObjectDataTable from "../../components/ObjectDataTable";
import Filters from "../../components/Filters";
import Pagination from "../../components/Pagination";
import axios from "axios";
import SelectColumns from "../../components/SelectColumns";
import { ColumnsProvider } from "../../context/ColumnsContext";

const AlarmPage = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const {
    objectFilters,
    setObjectFilters,
    setFilteredData,
    paginatedData,
    rowLimit,
    getAllFilters,
    changeFilteredDataRowsLimit,
    currentPage,
    setCurrentPage,
    totalPages,
    searchTableRecord,
  } = useFilters(BACKEND_URL);

  const [objectColumns, setObjectColumns] = useState([]);

  useEffect(() => {
    const getColumns = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/alarm/columns`);
      setObjectColumns(response.data);
    };

    getColumns();
  }, []);

  const renderPageNumbers = () => {
    if (totalPages <= 1) return null;

    let pageNumbers = [];
    const startPage = Math.max(1, currentPage - 3);
    const endPage = Math.min(totalPages, currentPage + 3);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-3 py-1 m-1 rounded-full  ${
            i === currentPage ? "bg-custom-blue text-white" : "bg-gray-200"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="w-full flex flex-col items-start md:p-14 p-3">
      <ObjectsFilterSection
        objectFilters={objectFilters}
        setObjectFilters={setObjectFilters}
        objectColumns={objectColumns}
        tableName={"alarm"}
      />

      <ColumnsProvider>
        <SelectColumns />

        <Filters
          getAllFilters={getAllFilters}
          objectFilters={objectFilters}
          setObjectFilters={setObjectFilters}
          rowLimit={rowLimit}
          changeFilteredDataRowsLimit={changeFilteredDataRowsLimit}
          searchTableRecord={searchTableRecord}
        />

        <ObjectDataTable
          filteredData={paginatedData}
          setFilteredData={setFilteredData}
        />
      </ColumnsProvider>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={setCurrentPage}
        renderPageNumbers={renderPageNumbers}
      />
    </div>
  );
};

export default AlarmPage;
