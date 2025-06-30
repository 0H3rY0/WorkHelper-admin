import { IoMdAdd } from "react-icons/io";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { antennaFields } from "../utils/deviceFormFilds/antennaFields";
import { useNavigate } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

const AddLaptopPage = () => {
  const initialAntennaState = {
    czasza: 0,
    antena_dvbt: 0,
    antena_radiowa: 0,
    zwrotnica: 0,
    ilosc_rozgaleznikow: 0,
    uwagi: "",
    notatki: "",
    dataOD: new Date().toISOString().split("T")[0],
    dataDO: "",
  };

  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialAntennaState,
    `${BACKEND_URL}/api/antenna/add`
  );

  return (
    <div className="w-full p-14 flex flex-col items-start justify-start">
      <div className="w-full">
        <div className="flex justify-between items-center mb-10">
          <h2 className="h2 flex items-center gap-2 text-xl md:text-2xl">
            Add Antena <IoMdAdd size={32} />
          </h2>
          <button
            className="button bg-custom-blue hover:bg-custom-blue-light text-white flex gap-2 items-center justify-center"
            onClick={() => navigate("/anteny")}
          >
            <IoMdArrowRoundBack /> Wroc
          </button>
        </div>
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
