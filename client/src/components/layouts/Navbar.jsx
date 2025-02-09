import { useState } from "react";
import { BiObjectsVerticalBottom } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import DevicesNavigation from "../ui/DevicesNavigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Przycisk otwierający navbar na telefonach */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md shadow-md"
      >
        <FiMenu size={24} />
      </button>

      {/* NAVBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-700 p-6 text-xl text-slate-300 font-semibold transition-transform duration-300 z-50
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block`}
      >
        {/* Przycisk zamykania na telefonach */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-4 right-4 bg-gray-600 text-white p-2 rounded-md"
        >
          <FiX size={24} />
        </button>

        <div className="flex flex-col justify-start gap-8 mt-5">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-slate-400" : "")}
          >
            <p className="flex items-center gap-2 cursor-pointer hover:text-slate-400">
              <BiObjectsVerticalBottom size={32} /> Obiekty
            </p>
          </NavLink>

          <p className="flex items-center gap-2 cursor-pointer hover:text-slate-400">
            <RiUserSearchLine size={32} /> Użytkownicy
          </p>

          <hr className="rounded-lg border-2 border-slate-500" />
          <DevicesNavigation />
        </div>
      </div>

      {/* Overlay (ciemne tło przy otwartym menu) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
