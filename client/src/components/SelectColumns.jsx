import { AiOutlineSelect } from "react-icons/ai";
import { getFieldConfig } from "../utils/fieldConfig";
import { useState } from "react";
// import { useParams } from "react-router";

const SelectColumns = () => {
  const allFields = getFieldConfig("object");

  console.log(allFields);

  // { label: "Nazwa", type: "text", name: "nazwa" },
  // { label: "Kod Pocztowy", type: "text", name: "kod_pocztowy" },
  // { label: "Miejscowość", type: "text", name: "miejscowosc" },
  // { label: "Ulica", type: "text", name: "ul" },
  // { label: "Numer Budynku", type: "text", name: "nr_budynku" },
  // { label: "Numer Lokalu", type: "text", name: "nr_lokalu" },
  // { label: "Piętro", type: "text", name: "pietro" },
  // { label: "Kod Domofonu", type: "text", name: "kod_domofonu" },
  // { label: "Szerokość Geograficzna", type: "number", name: "szerokosc_g" },
  // { label: "Długość Geograficzna", type: "number", name: "dlugosc_g" },
  // { label: "Data OD", type: "date", name: "dataOD" },
  // { label: "Data DO", type: "date", name: "dataDO" },
  // { label: "Klient Własny", type: "checkbox", name: "klient_wlasny" },
  // { label: "Przekazany Personel", type: "text", name: "przekazany_p" },
  // { label: "Uwagi", type: "text", name: "uwagi" },

  const initialColumnsState = {
    id: true,
    nazwa: true,
    miejscowosc: true,
    nr_lokalu: false,
  };

  const [columnsState, setColumnsState] = useState(initialColumnsState);

  const handleChangeColumnsState = () => {};

  return (
    <div className="w-full font-semibold text-2xl text-slate-700 flex flex-col mt-20 gap-10 md:items-start items-center">
      <h2 className="flex gap-2">
        Wybior kolumn <AiOutlineSelect size={32} />
      </h2>
      <div>
        <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-4 md:text-start text-center">
          {allFields.map((item) => (
            <li
              key={item.label}
              className="flex flex-col md:items-start items-center md:mx-10 mx-5 text-nowrap"
            >
              <p className="text-sm">{item.label}</p>
              <input type="checkbox" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectColumns;
