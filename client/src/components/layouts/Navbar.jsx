import { BiObjectsVerticalBottom } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";
import DevicesNavigation from "../ui/DevicesNavigation";

const Navbar = () => {
  return (
    <div
      className="row-span-2 bg-gray-700 p-6 hidden md:block text-xl 
    text-slate-300 font-semibold "
    >
      <div className="flex flex-col justify-start gap-8 mt-5">
        <p className="flex items-center gap-2 cursor-pointer hover:text-slate-400">
          <BiObjectsVerticalBottom size={32} /> Obiekty
        </p>
        <p className="flex items-center gap-2 cursor-pointer hover:text-slate-400">
          <RiUserSearchLine size={32} /> Urzytkownicy
        </p>

        <hr className="rounded-lg border-2 border-slate-500" />
        <DevicesNavigation />
      </div>
    </div>
  );
};

export default Navbar;
