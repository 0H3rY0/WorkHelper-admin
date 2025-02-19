import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useDeleteItem = (tableName, id) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleDeleteItem = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/${tableName}/delete`, { date, id });

      toast.success("Usuniento prawidłowo!");
    } catch (error) {
      console.error("Błąd usuwania:", error);
    }
  };

  return { handleDeleteItem, date, setDate };
};

export default useDeleteItem;
