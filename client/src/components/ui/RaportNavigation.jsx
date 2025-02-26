import { NavLink } from "react-router";
import { IoIosNotifications } from "react-icons/io";

const RaportNavigation = () => {
  return (
    <NavLink
      to="/raports"
      className={({ isActive }) => (isActive ? "text-slate-400" : "")}
    >
      <p className="flex items-center gap-2 cursor-pointer hover:text-slate-400">
        <IoIosNotifications size={32} /> Zgłoszenia
      </p>
    </NavLink>
  );
};

export default RaportNavigation;
