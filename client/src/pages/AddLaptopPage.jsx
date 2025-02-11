import { IoMdAdd } from "react-icons/io";

const AddLaptopPage = () => {
  return (
    <div className="w-full p-7 flex flex-col items-start justify-start">
      <div className="w-full">
        <h2 className="h2 flex items-center gap-2 mb-10 text-xl md:text-2xl">
          Add Laptop <IoMdAdd size={32} />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
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
                    className="p-2 border border-custom-blue rounded-md bg-dark-gray text-white focus:outline-none focus:ring-2 focus:ring-custom-blue"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const fields = [
  [
    { id: "nrSeryjny", label: "Nr Seryjny", type: "text" },
    { id: "model", label: "Model", type: "text" },
    { id: "uprawnienia", label: "Uprawnienia", type: "checkbox" },
    { id: "system", label: "System Operacyjny", type: "text" },
    { id: "rodzajDysku", label: "Rodzaj Dysku", type: "text" },
  ],
  [
    { id: "dataWymianyDysku", label: "Data Wymiany Dysku", type: "date" },
    { id: "ram", label: "RAM", type: "number" },
    { id: "kartaGraficzna", label: "Karta Graficzna", type: "checkbox" },
    { id: "plytaGlowna", label: "Płyta Główna", type: "text" },
    { id: "zasilacz", label: "Zasilacz", type: "text" },
  ],
  [
    { id: "programZdalny", label: "Program Zdalny", type: "text" },
    { id: "idProgramu", label: "ID Programu", type: "text" },
    { id: "uwagi", label: "Uwagi", type: "text" },
    { id: "notatki", label: "Notatki", type: "text" },
    { id: "dataDo", label: "Data od", type: "date" },
  ],
  [{ id: "dataOd", label: "Data do", type: "date" }],
];

export default AddLaptopPage;
