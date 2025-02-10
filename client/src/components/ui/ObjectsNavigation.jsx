import { BiObjectsVerticalBottom } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const ObjectsNavigation = () => {
  return (
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? "text-slate-400" : "")}
    >
      <p className="flex items-center gap-2 cursor-pointer hover:text-slate-400">
        <BiObjectsVerticalBottom size={32} /> Obiekty
      </p>
    </NavLink>
  );
};

export default ObjectsNavigation;
