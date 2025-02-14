import { RiUserSearchLine } from "react-icons/ri";

const UsersNavigation = () => {
  return (
    <p className="flex items-center gap-2 cursor-pointer hover:text-slate-400">
      <RiUserSearchLine size={32} /> Użytkownicy
    </p>
  );
};

export default UsersNavigation;
