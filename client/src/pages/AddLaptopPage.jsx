import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";

const AddLaptopPage = () => {
  const initialLaptopState = {
    // id: null,
    nr_seryjny: "",
    model: "",
    podzial_uprawnien: 0,
    system_operacyjny: "",
    rodzaj_dysku: "",
    data_wymiany_dysku: null,
    ram: 0,
    karta_graficzna: 0,
    plyta_glowna: "",
    zasilacz: "",
    program_zdalny: null,
    id_programu: null,
    uwagi: null,
    notatki: null,
    data_od: null,
    data_do: null,
  };

  const [laptopState, setLaptopState] = useState(initialLaptopState);
  const [error, setError] = useState(null);

  const onInputChange = (e) => {
    const { name, type, checked, value } = e.target;

    setLaptopState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    }));

    console.log(laptopState);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/laptop/add",
        laptopState
      );

      console.log(response);
    } catch (error) {
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="w-full p-7 flex flex-col items-start justify-start">
      <div className="w-full">
        <h2 className="h2 flex items-center gap-2 mb-10 text-xl md:text-2xl">
          Add Laptop <IoMdAdd size={32} />
        </h2>

        <form
          onSubmit={(e) => handleSubmitForm(e)}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
        >
          {fields.map((column, index) => (
            <div key={index} className="flex flex-col gap-6">
              {column.map((field) => (
                <div key={field.id} className="flex flex-col gap-1">
                  <label
                    htmlFor={field.id}
                    className="text-sm font-medium text-custom-blue"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    name={field.name}
                    onChange={onInputChange}
                    className="p-2 border border-custom-blue rounded-md bg-dark-gray text-white focus:outline-none focus:ring-2 focus:ring-custom-blue"
                  />
                </div>
              ))}
            </div>
          ))}
          <button
            type="submit"
            className="button bg-custom-blue text-white mt-10 w-full"
          >
            Add
          </button>
        </form>
        <p className="text-[1rem] text-red-400 mt-5 font-semibold">
          {error ? error : null}
        </p>
      </div>
    </div>
  );
};

const fields = [
  [
    { id: "nrSeryjny", label: "Nr Seryjny", type: "text", name: "nr_seryjny" },
    { id: "model", label: "Model", type: "text", name: "model" },
    {
      id: "uprawnienia",
      label: "Uprawnienia",
      type: "checkbox",
      name: "podzial_uprawnien",
    },
    {
      id: "system",
      label: "System Operacyjny",
      type: "text",
      name: "system_operacyjny",
    },
    {
      id: "rodzajDysku",
      label: "Rodzaj Dysku",
      type: "text",
      name: "rodzaj_dysku",
    },
  ],
  [
    {
      id: "dataWymianyDysku",
      label: "Data Wymiany Dysku",
      type: "date",
      name: "data_wymiany_dysku",
    },
    { id: "ram", label: "RAM", type: "number", name: "ram" },
    {
      id: "kartaGraficzna",
      label: "Karta Graficzna (zintegrowana)",
      type: "checkbox",
      name: "karta_graficzna",
    },
    {
      id: "plytaGlowna",
      label: "Płyta Główna",
      type: "text",
      name: "plyta_glowna",
    },
    { id: "zasilacz", label: "Zasilacz", type: "text", name: "zasilacz" },
  ],
  [
    {
      id: "programZdalny",
      label: "Program Zdalny",
      type: "text",
      name: "program_zdalny",
    },
    {
      id: "idProgramu",
      label: "ID Programu",
      type: "text",
      name: "id_programu",
    },
    { id: "uwagi", label: "Uwagi", type: "text", name: "uwagi" },
    { id: "notatki", label: "Notatki", type: "text", name: "notatki" },
    { id: "dataDo", label: "Data od", type: "date", name: "data_do" },
  ],
  [{ id: "dataOd", label: "Data do", type: "date", name: "data_od" }],
];

export default AddLaptopPage;
