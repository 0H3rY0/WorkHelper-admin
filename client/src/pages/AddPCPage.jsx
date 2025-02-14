// import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
// import axios from "axios";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { PCFields } from "../utils/deviceFormFilds/PCsFields";

const AddLaptopPage = () => {
  const initialPCState = {
    nr_seryjny: "",
    podzial_uprawnien: 0,
    system_operacyjny: "",
    rodzaj_dysku: "",
    data_wymiany_dysku: "",
    ram: 0,
    karta_graficzna: 0,
    plyta_glowna: "",
    zasilacz: "",
    program_zdalny: "",
    id_programu: "",
    uwagi: "",
    notatki: "",
    data_od: "",
    data_do: "",
  };

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialPCState,
    "http://localhost:3000/api/PC/add"
  );

  return (
    <div className="w-full p-7 flex flex-col items-start justify-start">
      <div className="w-full">
        <h2 className="h2 flex items-center gap-2 mb-10 text-xl md:text-2xl">
          Add PC <IoMdAdd size={32} />
        </h2>
        <AddDeviceForm
          handleSubmitForm={handleSubmit}
          fields={PCFields}
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
