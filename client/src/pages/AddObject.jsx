import { IoMdAdd } from "react-icons/io";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { objectFileds } from "../utils/deviceFormFilds/objectFields";
import { Link } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

const AddObject = () => {
  const initialObjectState = {
    nazwa: "",
    kod_pocztowy: "",
    miejscowosc: "",
    ul: "",
    nr_budynku: "",
    nr_lokalu: "",
    pietro: "",
    kod_domofonu: "",
    szerokosc_g: 0,
    dlugosc_g: 0,
    dataOD: new Date().toISOString().split("T")[0],
    dataDO: null,
    klient_wlasny: false,
    przekazany_p: "",
    uwagi: "",
  };

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialObjectState,
    `${BACKEND_URL}/api/obiekty/add`
  );

  return (
    <div className="w-full md:p-14 p-3 flex flex-col items-start justify-start">
      <div className="w-full">
        <div className="flex items-center justify-between mb-10">
          <h2 className="h2 flex items-center gap-2 text-xl md:text-2xl">
            Add Obiekt <IoMdAdd size={32} />
          </h2>
          <Link to={"/obiekty"}>
            <button className="button bg-custom-blue text-white flex items-center gap-2 hover:bg-custom-blue-light">
              <IoMdArrowRoundBack /> Wroc
            </button>
          </Link>
        </div>

        <AddDeviceForm
          handleSubmitForm={handleSubmit}
          fields={objectFileds}
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

export default AddObject;
