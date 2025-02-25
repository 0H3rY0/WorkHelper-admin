import RaportsList from "../components/RaportsList";
import BackButton from "../components/ui/BackButton";
import { IoIosNotifications } from "react-icons/io";

const MyRaportsPage = () => {
  return (
    <div className="w-full flex flex-col items-start md:p-14 p-3">
      <div className="w-full flex justify-between items-center mb-14">
        <h2 className="text-2xl font-bold text-custom-blue flex items-center gap-2">
          Moje Zgłoszenia <IoIosNotifications size={32} />
        </h2>
        <BackButton path="/" />
      </div>

      <RaportsList />
    </div>
  );
};

export default MyRaportsPage;
