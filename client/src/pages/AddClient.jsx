import { IoMdAdd } from "react-icons/io";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { clientFields } from "../utils/deviceFormFilds/clientFields";
import { useNavigate } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

const AddLaptopPage = () => {
  const initialClientState = {
    id_user: 0,
    id_grupy: 0,
    id_obiektu: 0,
    telefon: "",
    stanowisko: "",
    pomieszczenie: "",
    dataOD: new Date().toISOString().split("T")[0],
    dataDO: "",
  };

  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialClientState,
    `${BACKEND_URL}/api/klienci/add`
  );

  return (
    <div className="w-full p-14 flex flex-col items-start justify-start">
      <div className="w-full">
        <div className="flex justify-between items-center mb-10">
          <h2 className="h2 flex items-center gap-2 text-xl md:text-2xl">
            Add Klient <IoMdAdd size={32} />
          </h2>
          <button
            className="button bg-custom-blue hover:bg-custom-blue-light text-white flex gap-2 items-center justify-center"
            onClick={() => navigate("/klienci")}
          >
            <IoMdArrowRoundBack /> Wroc
          </button>
        </div>
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
