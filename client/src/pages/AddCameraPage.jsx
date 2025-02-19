import { IoMdAdd } from "react-icons/io";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { cameraFields } from "../utils/deviceFormFilds/cameraFields";
import { useNavigate } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

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

  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialCameraState,
    `${BACKEND_URL}/api/camera/add`
  );

  return (
    <div className="w-full p-14 flex flex-col items-start justify-start">
      <div className="w-full">
        <div className="flex justify-between items-center mb-10">
          <h2 className="h2 flex items-center gap-2 text-xl md:text-2xl">
            Add Kamera <IoMdAdd size={32} />
          </h2>
          <button
            className="button bg-custom-blue hover:bg-custom-blue-light text-white flex gap-2 items-center justify-center"
            onClick={() => navigate("/kamery")}
          >
            <IoMdArrowRoundBack /> Wroc
          </button>
        </div>
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
