import { useEffect, useState } from "react";
import axios from "axios";
import Ticket from "./ui/Ticket";

const RaportsList = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [tickets, setTickets] = useState([]);
  const [tableName, setTableName] = useState(null);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/raport/ticket/all`
        );
        setTickets(response.data.tickets);
        setTableName(response.data.tableName);
      } catch (err) {
        console.log("Error fetching tickets:", err);
      } finally {
        // setLoading(false);
      }
    };

    getTickets();
  }, []);

  return (
    <div className="w-full flex flex-col gap-5">
      <ul className="w-full flex flex-col gap-3">
        <li
          key={0}
          className="w-full text-custom-gray px-3 md:px-5 py-2 
          grid grid-cols-6 md:grid-cols-8 gap-2 md:gap-5 text-xs md:text-sm lg:text-base font-bold 
          text-center rounded-sm bg-gray-200"
        >
          <h2 className="col-span-2 text-start truncate">Tytuł</h2>
          <p className="col-span-2 text-start truncate">Numer zgłoszenia</p>
          <p className="text-center">Status</p>
          <p className="text-center">Priorytet</p>
          <p className="text-end md:hidden whitespace-nowrap">Data i godz.</p>
          <p className="hidden md:block text-end whitespace-nowrap">Data</p>
          <p className="hidden md:block text-end whitespace-nowrap">Godzina</p>
        </li>

        {tickets.map((item) => (
          <Ticket key={item.id} item={item} tableName={tableName} />
        ))}
      </ul>
    </div>
  );
};

export default RaportsList;
