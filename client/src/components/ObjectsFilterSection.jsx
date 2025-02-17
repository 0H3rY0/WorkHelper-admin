import { FaFilter } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import ObjectFilter from "../components/ObjectFilter";
import { v4 as uuidv4 } from "uuid";
import { MdAddToPhotos } from "react-icons/md";
import { Link } from "react-router";

const ObjectsFilterSection = ({
  objectFilters,
  setObjectFilters,
  objectColumns,
  tableName,
}) => {
  const addObjectFilter = () => {
    const newFilter = { id: uuidv4(), name: "new object" };
    setObjectFilters((prev) => [...prev, newFilter]);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-slate-700 flex gap-2 ">
          Filtry <FaFilter size={32} />
        </h2>
        {/* <Link to="object/add">
          <button className="button bg-custom-blue text-white flex items-center gap-2 hover:bg-custom-blue-light">
            Add {tableName} <MdAddToPhotos />
          </button>
        </Link> */}
      </div>

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
