// import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
// import axios from "axios";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { clientFields } from "../utils/deviceFormFilds/clientFields";

const AddLaptopPage = () => {
  const initialClientState = {
    id_user: 0,
    id_grupy: 0,
    id_obiektu: 0,
    telefon: "",
    stanowisko: "",
    pomieszczenie: "",
    dataOD: "",
    dataDO: "",
  };

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialClientState,
    `${BACKEND_URL}/api/klienci/add`
  );

  return (
    <div className="w-full p-7 flex flex-col items-start justify-start">
      <div className="w-full">
        <h2 className="h2 flex items-center gap-2 mb-10 text-xl md:text-2xl">
          Add Klient <IoMdAdd size={32} />
        </h2>
        <AddDeviceForm
          handleSubmitForm={handleSubmit}
          fields={clientFields}
          onInputChange={handleChange}
          DeviceState={formState}
        />
        <p className="text-[1rem] text-red-400 mt-5 font-semibold">
          {error ? error : null}
        </p>
      </div>
    </div>
  );
};

export default AddLaptopPage;
