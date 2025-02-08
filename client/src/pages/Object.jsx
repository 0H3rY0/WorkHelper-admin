import { FaFilter } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";

const Object = () => {
  return (
    <div className="w-full flex flex-col items-start p-14 ">
      <h2 className="font-semibold text-2xl text-slate-700 flex gap-2">
        Filtry <FaFilter size={32} />
      </h2>
      <div className="w-full flex flex-col justify-center mt-5">
        <form className="w-full flex justify-center gap-4">
          <select name="" id="" className="input w-1/5">
            <option value="nazwa">nazwa</option>
            <option value="ulica">ulica</option>
            <option value="miejscowosc">miejscowosc</option>
          </select>

          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="checkConteins"
              className="font-bold text-md text-slate-700"
            >
              Niezawiera/Zawiera
            </label>
            <label className="inline-flex items-center cursor-pointer mt-1">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
            </label>
          </div>

          <input type="text" className="input w-1/5" />
        </form>
        <p type="submit" className="flex justify-center ">
          <CiCirclePlus
            size={45}
            className="text-slate-700 cursor-pointer mt-10 hover:text-slate-500 scale-transition"
          />
        </p>
      </div>
      <div className="w-full font-semibold text-2xl text-slate-700 flex gap-2 mt-20 justify-between items-center">
        <h2 className="flex gap-2">
          Dane <FaDatabase size={32} />
        </h2>
        <button className=" button ">Pokaz</button>
      </div>

      {/* table */}
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
