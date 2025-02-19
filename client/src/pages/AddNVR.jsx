// import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
// import axios from "axios";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { nvrFields } from "../utils/deviceFormFilds/nvrFields";
import { useNavigate } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

const AddNVRPage = () => {
  const initialNVRState = {
    nr_seryjny: "",
    model: "",
    mac: "",
    podzial_uprawnien: 0,
    model_dysku: "",
    wielkoscDysku: 0,
    dataWymianyDysku: "",
    portHTTP: 0,
    portDANE: 0,
    iloscKamer: 0,
    ipWewnetrzne: "",
    ipZewnetrzne: "",
    p2p: 0,
    uwagi: "",
    notatki: "",
    dataOD: new Date().toISOString().split("T")[0],
    dataDO: "",
  };

  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialNVRState,
    `${BACKEND_URL}/api/nvr/add`
  );

  return (
    <div className="w-full p-14 flex flex-col items-start justify-start">
      <div className="w-full">
        <div className="flex justify-between items-center mb-10">
          <h2 className="h2 flex items-center gap-2 text-xl md:text-2xl">
            Add NVR <IoMdAdd size={32} />
          </h2>
          <button
            className="button bg-custom-blue hover:bg-custom-blue-light text-white flex gap-2 items-center justify-center"
            onClick={() => navigate("/nvr")}
          >
            <IoMdArrowRoundBack /> Wroc
          </button>
        </div>
        <AddDeviceForm
          handleSubmitForm={handleSubmit}
          fields={nvrFields}
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

export default AddNVRPage;
