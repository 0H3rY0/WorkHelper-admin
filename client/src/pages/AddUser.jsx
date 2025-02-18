// import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
// import axios from "axios";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { userFields } from "../utils/deviceFormFilds/userFields";

const AddLaptopPage = () => {
  const initialUserState = {
    imie: "",
    nazwisko: "",
    email: "",
    haslo: "",
    klucz_szyfrujacy: "",
    logowanie_dwuetapowe: 0,
    dataOD: "",
    dataDO: "",
  };

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialUserState,
    `${BACKEND_URL}/api/uzytkownicy/add`
  );

  return (
    <div className="w-full p-7 flex flex-col items-start justify-start">
      <div className="w-full">
        <h2 className="h2 flex items-center gap-2 mb-10 text-xl md:text-2xl">
          Add Uzytkownik <IoMdAdd size={32} />
        </h2>
        <AddDeviceForm
          handleSubmitForm={handleSubmit}
          fields={userFields}
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
