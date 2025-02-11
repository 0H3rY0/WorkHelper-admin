// import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
// import axios from "axios";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { alarmFields } from "../utils/deviceFormFilds/alarmFields";

const AddLaptopPage = () => {
  const initialAlarmState = {
    model: "",
    ilosc_czujek: 0,
    podzial_uprawnien: 0,
    ilosc_klawiatur: 0,
    ilosc_modulow: 0,
    system_rozproszony: 0,
    uwagi: "",
    notatki: "",
    dataOD: "",
    dataDO: "",
  };

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialAlarmState,
    "http://localhost:3000/api/laptop/add"
  );

  return (
    <div className="w-full p-7 flex flex-col items-start justify-start">
      <div className="w-full">
        <h2 className="h2 flex items-center gap-2 mb-10 text-xl md:text-2xl">
          Add Laptop <IoMdAdd size={32} />
        </h2>
        <AddDeviceForm
          handleSubmitForm={handleSubmit}
          fields={alarmFields}
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
