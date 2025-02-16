import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { objectFileds } from "../../utils/deviceFormFilds/objectFields";
import { GrOverview } from "react-icons/gr";
import { Link } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

const SingleObjectPage = () => {
  const { id } = useParams();
  const [objectData, setObjectData] = useState({});
  // const [objectState, setObjectState] = useState({});
  const [editMode, setEditMode] = useState(null);
  const inputRefs = useRef({});

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const getSingleObject = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/object/${id}`);
      // setObjectState(response.data[0]);
      setObjectData(response.data[0]);
    };

    getSingleObject();
  }, [id]);

  const handleCheckObjectState = (e) => {
    const name = e.target.dataset.name;
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
        {objectFileds.map((item) => (
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

              <p
                data-name={item.name}
                className="md:mr-14 mr-0 underline tracking-widest cursor-pointer hover:scale-125 scale-transition
                hover:text-slate-600 underline-offset-4"
                onClick={handleCheckObjectState}
              >
                {editMode === item.name ? "Save" : "Edit"}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button className="button bg-red-500 text-white mt-16 min-w-44 hover:bg-red-400 hover:border-red-400">
        Usun
      </button>
    </div>
  );
};

export default SingleObjectPage;
