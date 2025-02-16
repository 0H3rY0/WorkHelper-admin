import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { data, useParams } from "react-router";
// import { objectFileds } from "../../utils/deviceFormFilds/objectFields";
import { objectViewConfig } from "../../utils/showFields.config/object.view.config";
import { GrOverview } from "react-icons/gr";
import { Link } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";
import CheckAgreementModal from "../../components/modals/CheckAgreementModal";
import DeleteModal from "../../components/modals/DeleteModal";
import { toast } from "react-toastify";

const SingleObjectPage = () => {
  const { id } = useParams();
  const [objectData, setObjectData] = useState({});
  const [editMode, setEditMode] = useState(null);

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const inputRefs = useRef({});

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const getSingleObject = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/object/${id}`);
      setObjectData(response.data[0]);
    };

    getSingleObject();
  }, [id]);

  const handleCheckObjectState = (e) => {
    const name = e.currentTarget.dataset.name;
    console.log(name);
    setEditMode(name);

    if (inputRefs.current[name]) {
      inputRefs.current[name].focus();
      const length = inputRefs.current[name].value.length;
      inputRefs.current[name].setSelectionRange(length, length);
    }
  };

  const handleChangeObjectState = (e) => {
    console.log("wykonuje");
    setObjectData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    console.log(objectData);
  };

  const handleEditField = async () => {
    const newObjectData = {
      id,
      ...objectData,
    };

    try {
      await axios.post(`${BACKEND_URL}/api/object/edit`, newObjectData);

      setEditMode(null);
      toast.success("Operacja zakonczona sukcesem!");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteObject = () => {
    console.log(date);

    try {
      const response = axios.post(`${BACKEND_URL}/api/object/delete`, {
        date,
        id,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-start md:p-14 p-3">
      <div className="w-full flex items-center justify-between mb-10">
        <h2 className="h2 flex items-center gap-2 text-xl md:text-2xl">
          Przeglad Obiektu <GrOverview size={32} />
        </h2>
        <Link to={"/"}>
          <button className="button bg-custom-blue text-white flex items-center gap-2 hover:bg-custom-blue-light">
            <IoMdArrowRoundBack /> Wroc
          </button>
        </Link>
      </div>

      <ul className="w-full flex flex-col md:gap-6 gap-8">
        {objectViewConfig.map((item) => (
          <li
            key={item.id}
            className="w-full flex flex-col items-start justify-center"
          >
            <label
              htmlFor={item.label}
              className="text-2xl text-dark-gray font-bold"
            >
              {item.label}:
            </label>
            <div className="w-full flex items-center justify-between text-xl">
              <input
                type="text"
                name={item.name}
                defaultValue={objectData[item.name]}
                className="w-full border-none bg-transparent p-0 m-0 text-inherit outline-none focus:outline-none focus:ring-0 
                focus:border-none focus:shadow-none appearance-none min-h-0 text-lg"
                ref={(el) => (inputRefs.current[item.name] = el)}
                readOnly={editMode !== item.name}
                onChange={handleChangeObjectState}
              />

              {}

              <div
                data-name={item.name}
                className="md:mr-14 mr-0 underline tracking-widest cursor-pointer
                 underline-offset-4 flex gap-5"
                onClick={handleCheckObjectState}
              >
                {editMode === item.name ? (
                  <>
                    <CheckAgreementModal
                      text={`Czy jesetes pewny ze chcesz edytowac pole ${
                        item.label
                      } wartoscia ${objectData[item.name]} ?`}
                      btnText={"Edit"}
                      func={handleEditField}
                    >
                      <p className="hover:scale-125 scale-transition underline underline-offset-4 hover:text-slate-600">
                        Save
                      </p>
                    </CheckAgreementModal>

                    <p
                      className="hover:scale-125 scale-transition hover:text-slate-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditMode(null);
                      }}
                    >
                      Cancel
                    </p>
                  </>
                ) : (
                  <p className="hover:scale-125 scale-transition hover:text-slate-600">
                    Edit
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <DeleteModal
        text={"Czy jestes pewny ze chcesz usunac ten obiekt z data:"}
        date={new Date().toISOString().split("T")[0]}
        func={handleDeleteObject}
        func2={setDate}
      ></DeleteModal>
      {/* <button
        className="button bg-red-500 text-white mt-16 min-w-44 hover:bg-red-400 hover:border-red-400"
        onClick={handleDeleteObject}
      >
        Usun
      </button> */}
    </div>
  );
};

export default SingleObjectPage;
