import { IoMdAdd } from "react-icons/io";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { groupFields } from "../utils/deviceFormFilds/groupFields";
import { useNavigate } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

const AddSoftwarePage = () => {
  const initialGrupyState = {
    nazwa: "",
    zglaszac: 0,
    weryfikowac: 0,
    zamawiac: 0,
    "01_wyswietlanie": false,
    "01_dodawanie": false,
    "01_edycja": false,
    "02_dodawanie": 0,
    "02_edycja": 0,
    "02_wyswietlanie": 0,
    "03_dodawanie": 0,
    "03_edycja": 0,
    "03_wyswietlanie": 0,
    "04_dodawanie": 0,
    "04_edycja": 0,
    "04_wyswietlanie": 0,
    "05_dodawanie": 0,
    "05_edycja": 0,
    "05_wyswietlanie": 0,
    "06_dodawanie": 0,
    "06_edycja": 0,
    "06_wyswietlanie": 0,
    "07_dodawanie": 0,
    "07_edycja": 0,
    "07_wyswietlanie": 0,
    "08_dodawanie": 0,
    "08_edycja": 0,
    "08_wyswietlanie": 0,
    "09_dodawanie": 0,
    "09_edycja": 0,
    "09_wyswietlanie": 0,
    user_dodawanie: 0,
    user_usuwanie: 0,
    user_wyswietlanie: 0,
    objekt_dodawanie: 0,
    objekt_usuwanie: 0,
    objekt_edycja: 0,
  };

  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialGrupyState,
    `${BACKEND_URL}/api/grupy/add`
  );

  return (
    <div className="w-full p-14 flex flex-col items-start justify-start">
      <div className="w-full">
        <div className="flex justify-between items-center mb-10">
          <h2 className="h2 flex items-center gap-2 text-xl md:text-2xl">
            Add Grupa <IoMdAdd size={32} />
          </h2>
          <button
            className="button bg-custom-blue hover:bg-custom-blue-light text-white flex gap-2 items-center justify-center"
            onClick={() => navigate("/grupy")}
          >
            <IoMdArrowRoundBack /> Wroc
          </button>
        </div>
        <AddDeviceForm
          handleSubmitForm={handleSubmit}
          fields={groupFields}
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

export default AddSoftwarePage;
