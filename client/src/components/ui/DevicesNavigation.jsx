import { MdDevices } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { PiComputerTowerFill } from "react-icons/pi";
import { BsCameraVideoFill } from "react-icons/bs";
import { useState } from "react";

const DevicesNavigation = () => {
  const [openList, setOpenList] = useState(false);

  return (
    <div className="flex flex-col gap-2 ">
      <p
        className="flex items-center gap-2 cursor-pointer hover:text-slate-400"
        onClick={() => setOpenList((prev) => !prev)}
      >
        <MdDevices size={32} /> Urzadzenia
        {openList ? <FaArrowRight size={16} /> : <FaArrowDown size={16} />}
      </p>
      <ul
        className={`${openList ? "block" : "hidden"} flex flex-col gap-1 mt-2`}
      >
        <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
          <FaLaptop size={16} /> Laptopy
        </li>
        <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
          <PiComputerTowerFill size={16} /> PC
        </li>
        <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
          <BsCameraVideoFill size={16} /> Kamery
        </li>
      </ul>
    </div>
  );
};

export default DevicesNavigation;
