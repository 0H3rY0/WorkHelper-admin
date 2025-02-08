import { FaFilter } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid"; // Importujemy uuid
import ObjectFilter from "../components/ObjectFilter";
import { useState } from "react";

const Object = () => {
  const [objectFilters, setObjectFilters] = useState([]);

  const addObjectFilter = () => {
    const newFilter = { id: uuidv4(), name: "new object" };
    setObjectFilters((prev) => [...prev, newFilter]);
  };

  return (
    <div className="w-full flex flex-col items-start p-14 ">
      <h2 className="font-semibold text-2xl text-slate-700 flex gap-2">
        Filtry <FaFilter size={32} />
      </h2>
      <div className="w-full flex flex-col  justify-center mt-5">
        {objectFilters.map((item) => {
          return (
            <ObjectFilter
              key={item.id}
              id={item.id}
              setObjectFilters={setObjectFilters}
            />
          );
        })}

        <p type="submit" className="flex justify-center">
          <CiCirclePlus
            size={45}
            className="text-slate-700 cursor-pointer mt-10 hover:text-slate-500 scale-transition"
            onClick={addObjectFilter}
          />
        </p>
      </div>

      <div className="w-full font-semibold text-2xl text-slate-700 flex gap-2 mt-20 justify-between items-center">
        <h2 className="flex gap-2">
          Dane <FaDatabase size={32} />
        </h2>
        <button className="button">Pokaz</button>
      </div>

      {/* Tabela */}
      <table className="table mt-7">
        <thead>
          <tr>
            <th>#</th>
            <th>Nazwa</th>
            <th>Ulica</th>
            <th>Miejscowosc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jan Kowalski</td>
            <td>28</td>
            <td>Warszawa</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Anna Nowak</td>
            <td>34</td>
            <td>Kraków</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Piotr Zieliński</td>
            <td>22</td>
            <td>Wrocław</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Maria Wiśniewska</td>
            <td>40</td>
            <td>Gdańsk</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Object;
