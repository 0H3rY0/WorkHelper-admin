import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";

const UsersNavigation = () => {
  const [openList, setOpenList] = useState(false);

  return (
    <div className="flex flex-col gap-2 ">
      <p
        className="flex items-center gap-2 cursor-pointer hover:text-slate-400"
        onClick={() => setOpenList((prev) => !prev)}
      >
        <FaRegUser size={32} /> Uzytkownicy
        {openList ? <FaArrowRight size={16} /> : <FaArrowDown size={16} />}
      </p>
      <ul
        className={`${openList ? "block" : "hidden"} flex flex-col gap-1 mt-2`}
      >
        <NavLink
          to="/uzytkownicy"
          className={({ isActive }) => (isActive ? "text-slate-500" : "")}
        >
          <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
            <FaUser size={16} /> Uzytkownik
          </li>
        </NavLink>

        <NavLink
          to="/grupy"
          className={({ isActive }) => (isActive ? "text-slate-500" : "")}
        >
          <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
            <MdGroup size={16} /> Grupa
          </li>
        </NavLink>
        <NavLink
          to="/klienci"
          className={({ isActive }) => (isActive ? "text-slate-500" : "")}
        >
          <li className="cursor-pointer ml-4 text-lg font-normal flex items-center gap-1 hover:text-slate-400">
            <FaBriefcase size={16} /> Klient
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default UsersNavigation;
