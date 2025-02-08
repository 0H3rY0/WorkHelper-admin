import { BiObjectsVerticalBottom } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";
import { MdDevices } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { PiComputerTowerFill } from "react-icons/pi";
import { BsCameraVideoFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [openList, setOpenList] = useState(false);

  return (
    <div
      className="row-span-2 bg-gray-700 p-6 hidden md:block text-xl 
    text-slate-300 font-semibold "
    >
      <div className="flex flex-col justify-start gap-8 mt-10">
        <p className="flex items-center gap-2 cursor-pointer hover:text-slate-400">
          <BiObjectsVerticalBottom size={32} /> Obiekty
        </p>
        <p className="flex items-center gap-2 cursor-pointer hover:text-slate-400">
          <RiUserSearchLine size={32} /> Urzytkownicy
        </p>

        <hr className="rounded-lg border-2 border-slate-500" />

        <div className="flex flex-col gap-2 ">
          <p
            className="flex items-center gap-2 cursor-pointer hover:text-slate-400"
            onClick={() => setOpenList((prev) => !prev)}
          >
            <MdDevices size={32} /> Urzadzenia
            {openList ? <FaArrowRight size={16} /> : <FaArrowDown size={16} />}
          </p>
          <ul
            className={`${
              openList ? "block" : "hidden"
            } flex flex-col gap-1 mt-2`}
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
      </div>
    </div>
  );
};

export default Navbar;
