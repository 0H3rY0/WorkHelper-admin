import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const ObjectFilter = ({ id = 0, setObjectFilters, objectColumns }) => {
  const handleRemoveObjectFilter = (e) => {
    e.preventDefault();
    setObjectFilters((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const [selectedValue, setSelectedValue] = useState("id");
  const [textInputValue, setTextInputValue] = useState("");
  const [isSwitch, setIsSwitch] = useState(false);

  const onSelectValue = (e) => {
    setSelectedValue(e.target.value);
  };

  const onSwitch = () => {
    setIsSwitch((prevIsSwitch) => !prevIsSwitch);

    setObjectFilters((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              name: {
                ...item.name,
                [selectedValue]: {
                  ...(item.name?.[selectedValue] || {}),
                  zawiera: !isSwitch,
                },
              },
            }
          : item
      )
    );
  };

  const onTextInputChange = (e) => {
    setObjectFilters((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              name: {
                [selectedValue]: {
                  text: e.target.value,
                  zawiera: isSwitch,
                },
              },
            }
          : item
      )
    );
    setTextInputValue(e.target.value);
  };

  return (
    <form
      className="w-full flex md:flex-row flex-col items-center justify-center md:gap-4 gap-2  mt-4 md:mb-0 mb-10"
      id={id}
    >
      <select className="input md:w-1/5 w-full" onChange={onSelectValue}>
        {objectColumns.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <div className="flex flex-col justify-center items-center">
        <label
          htmlFor="checkConteins"
          className="font-bold text-md text-slate-700"
        >
          Niezawiera/Zawiera
        </label>
        <label className="inline-flex items-center cursor-pointer mt-1">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={onSwitch}
          />
          <div className="relative w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
        </label>
      </div>

      <input
        type="text"
        className="input md:w-1/5 w-full"
        value={textInputValue}
        onChange={onTextInputChange}
      />

      <button
        type="button"
        onClick={handleRemoveObjectFilter}
        className="button text-white bg-custom-gray md:w-1/12 md:min-w-20 w-1/2 flex items-center justify-center"
      >
        <MdDeleteForever size={32} />
      </button>
    </form>
  );
};

export default ObjectFilter;
