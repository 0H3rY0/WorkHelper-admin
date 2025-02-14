import { FaFilter } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import ObjectFilter from "../components/ObjectFilter";
import { v4 as uuidv4 } from "uuid";

const ObjectsFilterSection = ({
  objectFilters,
  setObjectFilters,
  objectColumns,
}) => {
  const addObjectFilter = () => {
    const newFilter = { id: uuidv4(), name: "new object" };
    setObjectFilters((prev) => [...prev, newFilter]);
  };

  return (
    <>
      <h2 className="font-semibold text-2xl text-slate-700 flex gap-2 p-7">
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
    </>
  );
};

export default ObjectsFilterSection;
