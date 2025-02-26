export const remainingFields = [
  {
    id: "idObiekt",
    label: "ID Obiektu",
    type: "select",
    name: "id_obiektu",
    endpoint: "api/obiekty/all",
  },
  { id: "nazwa", label: "Nazwa", type: "text", name: "nazwa" },
  { id: "opis", label: "Opis", type: "text", name: "opis" },
  {
    id: "zasadaDzialania",
    label: "Zasada Działania",
    type: "text",
    name: "zasadaDzialania",
  },
  { id: "uwagi", label: "Uwagi", type: "text", name: "uwagi" },
  { id: "notatki", label: "Notatki", type: "text", name: "notatki" },
  { id: "dataOD", label: "Data OD", type: "date", name: "dataOD" },
];
