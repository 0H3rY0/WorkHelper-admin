import { FaRegUser } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";

const Header = () => (
  <div className="col-span-2 bg-slate-700 px-6 py-2 text-white flex itmes-center">
    <div className="w-full flex justify-between text-xl text-slate-300">
      <h1 className="flex items-center text-4xl">LOGO</h1>

      <div className="flex justify-center items-center gap-8 text-lg">
        <p className="cursor-pointer hover:text-slate-400 flex items-center gap-1">
          User <FaRegUser size={20} />
        </p>
        <p className="cursor-pointer hover:text-slate-400 flex items-center gap-1">
          Login <CgLogIn size={26} />
        </p>
      </div>
    </div>
  </div>
);

export default Header;
