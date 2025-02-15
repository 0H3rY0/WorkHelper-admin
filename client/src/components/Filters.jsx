import { FaDatabase } from "react-icons/fa";

const Filters = ({ getAllFilters, rowLimit, changeFilteredDataRowsLimit }) => {
  return (
    <div className="w-full font-semibold text-2xl text-slate-700 flex sm:flex-row flex-col gap-2 mt-20 sm:justify-between sm:items-center px-7">
      <h2 className="flex gap-2">
        Dane <FaDatabase size={32} />
      </h2>
      <div className="flex items-center justify-start gap-10">
        <div className="flex items-center justify-center gap-2 text-[1rem]">
          <select
            className="bg-white hover:bg-slate-400 shadow-xl rounded-lg p-2 hover:scale-110 scale-transition"
            onChange={(e) => changeFilteredDataRowsLimit(e)}
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
          onClick={getAllFilters}
        >
          Pokaż
        </button>
      </div>
    </div>
  );
};

export default Filters;
