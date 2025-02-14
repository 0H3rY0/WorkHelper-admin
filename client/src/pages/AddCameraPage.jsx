import { IoMdAdd } from "react-icons/io";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { cameraFields } from "../utils/deviceFormFilds/cameraFields";

const AddLaptopPage = () => {
  const initialCameraState = {
    nr_seryjny: "",
    mac: "",
    model: "",
    podzial_uprawnien: 0,
    portHTTP: "",
    portDANE: "",
    ipWewnetrzne: "",
    uwagi: "",
    notatki: "",
    dataOD: "",
    dataDO: "",
  };

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialCameraState,
    `${BACKEND_URL}/api/camera/add`
  );

  return (
    <div className="w-full p-7 flex flex-col items-start justify-start">
      <div className="w-full">
        <h2 className="h2 flex items-center gap-2 mb-10 text-xl md:text-2xl">
          Add Kamera <IoMdAdd size={32} />
        </h2>
        <AddDeviceForm
          handleSubmitForm={handleSubmit}
          fields={cameraFields}
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
