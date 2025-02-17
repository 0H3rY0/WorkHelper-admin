import { createContext, useContext, useState } from "react";
import { getFieldConfig } from "../utils/fieldConfig";

const ColumnsContext = createContext();

export const ColumnsProvider = ({ children, tableName }) => {
  const allFields = getFieldConfig(tableName);

  const [columns, setColumns] = useState(
    allFields.filter((field) => field.checked).map((field) => field.name)
  );

  const handleChangeColumnsState = (e) => {
    setColumns((prev) =>
      e.target.checked
        ? [...prev, e.target.name]
        : prev.filter((col) => col !== e.target.name)
    );

    console.log(columns);
  };

  return (
    <ColumnsContext.Provider
      value={{ columns, handleChangeColumnsState, allFields }}
    >
      {children}
    </ColumnsContext.Provider>
  );
};

export const useColumnsContext = () => useContext(ColumnsContext);
