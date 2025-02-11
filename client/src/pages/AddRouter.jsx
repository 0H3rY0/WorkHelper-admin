// import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
// import axios from "axios";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { routerFields } from "../utils/deviceFormFilds/routerFields";

const AddRouterPage = () => {
  const initialRouterState = {
    nr_seryjny: "",
    model: "",
    macWAN: "",
    ipwew: "",
    ipzew: "",
    podzial_uprawnien: 0,
    portHTTP: 0,
    portDANE: 0,
    VPNklien: 0,
    VPNzazadzanie: 0,
    uwagi: "",
    notatki: "",
    dataOD: "",
    dataDO: "",
  };

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialRouterState,
    "http://localhost:3000/api/router/add"
  );

  return (
    <div className="w-full p-7 flex flex-col items-start justify-start">
      <div className="w-full">
        <h2 className="h2 flex items-center gap-2 mb-10 text-xl md:text-2xl">
          Add Router <IoMdAdd size={32} />
        </h2>
        <AddDeviceForm
          handleSubmitForm={handleSubmit}
          fields={routerFields}
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

export default AddRouterPage;
