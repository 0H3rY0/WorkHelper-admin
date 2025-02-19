import { FaFilter } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import Filter from "./Filter";
import { v4 as uuidv4 } from "uuid";

const FilterSection = ({ objectFilters, setObjectFilters, objectColumns }) => {
  const addObjectFilter = () => {
    const newFilter = { id: uuidv4(), name: "new object" };
    setObjectFilters((prev) => [...prev, newFilter]);
  };

  return (
    <>
      <h2 className="font-semibold text-2xl text-slate-700 flex gap-2 ">
        Filtry <FaFilter size={32} />
      </h2>

      <div className="w-full flex flex-col  justify-center mt-5">
        {objectFilters.map((item) => {
          return (
            <Filter
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
    </>
  );
};

export default FilterSection;
