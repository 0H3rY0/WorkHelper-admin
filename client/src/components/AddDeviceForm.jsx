import { useState, useEffect } from "react";
import axios from "axios"; // Do pobierania danych z backendu

const AddDeviceForm = ({
  fields,
  handleSubmitForm,
  onInputChange,
  DeviceState,
}) => {
  const [inputModes, setInputModes] = useState(
    fields.reduce((acc, field) => {
      if (field.type === "select") acc[field.name] = "select";
      return acc;
    }, {})
  );

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [options, setOptions] = useState({}); // Przechowuje dane z bazy

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const responses = await Promise.all(
          fields
            .filter((field) => field.type === "select" && field.endpoint)
            .map((field) =>
              axios
                .get(`${BACKEND_URL}/${field.endpoint}`)
                .then((res) => ({ name: field.name, data: res.data }))
            )
        );

        const newOptions = responses.reduce((acc, { name, data }) => {
          acc[name] = data;
          return acc;
        }, {});

        setOptions(newOptions);
        console.log(newOptions);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    fetchOptions();
  }, [fields]);

  const handleModeChange = (fieldName, mode) => {
    setInputModes((prevModes) => ({ ...prevModes, [fieldName]: mode }));
  };

  return (
    <form onSubmit={handleSubmitForm} className="w-full flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-1">
            <label
              htmlFor={field.id}
              className="text-sm font-medium text-custom-blue"
            >
              {field.label}
            </label>

            {field.type === "select" ? (
              <>
                <select
                  id={field.id}
                  className="input p-2 border border-custom-blue rounded-md bg-dark-gray text-white focus:outline-none focus:ring-2 focus:ring-custom-blue"
                  name={field.name}
                  onChange={(e) => handleModeChange(field.name, e.target.value)}
                  value={inputModes[field.name]}
                >
                  <option value="select">Wybór z listy</option>
                  <option value="manual">Wpisanie ręczne</option>
                </select>

                {inputModes[field.name] === "select" ? (
                  <select
                    className="input p-2 border border-custom-blue rounded-md bg-dark-gray text-white focus:outline-none focus:ring-2 focus:ring-custom-blue"
                    name={field.name}
                    onChange={onInputChange}
                    value={DeviceState[field.name] || ""}
                  >
                    <option value="">Wybierz...</option>
                    {options[field.name]?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label ||
                          opt.name ||
                          opt.nazwa ||
                          opt.imie + " " + opt.nazwisko}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.id}
                    type="number"
                    name={field.name}
                    onChange={onInputChange}
                    value={DeviceState[field.name] || ""}
                    className="p-2 border border-custom-blue rounded-md bg-dark-gray text-white focus:outline-none focus:ring-2 focus:ring-custom-blue"
                  />
                )}
              </>
            ) : (
              <input
                value={DeviceState[field.name] || ""}
                id={field.id}
                type={field.type}
                name={field.name}
                onChange={onInputChange}
                className="p-2 border border-custom-blue rounded-md bg-dark-gray text-white focus:outline-none focus:ring-2 focus:ring-custom-blue"
              />
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="button bg-custom-blue text-white mt-10 w-1/6 min-w-32 hover:bg-custom-blue-light"
      >
        Add
      </button>
    </form>
  );
};

export default AddDeviceForm;
