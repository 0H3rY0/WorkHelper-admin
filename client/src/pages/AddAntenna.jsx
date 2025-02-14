// import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
// import axios from "axios";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { antennaFields } from "../utils/deviceFormFilds/antennaFields";

const AddLaptopPage = () => {
  const initialAntennaState = {
    czasza: 0,
    antena_dvbt: 0,
    antena_radiowa: 0,
    zwrotnica: 0,
    ilosc_rozgaleznikow: 0,
    uwagi: "",
    notatki: "",
    dataOD: "",
    dataDO: "",
  };

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialAntennaState,
    `${BACKEND_URL}/api/antenna/add`
  );

  return (
    <div className="w-full p-7 flex flex-col items-start justify-start">
      <div className="w-full">
        <h2 className="h2 flex items-center gap-2 mb-10 text-xl md:text-2xl">
          Add Antena <IoMdAdd size={32} />
        </h2>
        <AddDeviceForm
          handleSubmitForm={handleSubmit}
          fields={antennaFields}
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
