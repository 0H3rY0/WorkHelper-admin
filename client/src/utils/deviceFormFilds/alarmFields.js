export const alarmFields = [
  { id: "model", label: "Model", type: "text", name: "model" },
  {
    id: "iloscCzujek",
    label: "Ilość Czujek",
    type: "number",
    name: "ilosc_czujek",
  },
  {
    id: "podzialUprawnien",
    label: "Podział Uprawnień",
    type: "checkbox",
    name: "podzial_uprawnien",
  },
  {
    id: "iloscKlawiatur",
    label: "Ilość Klawiatur",
    type: "number",
    name: "ilosc_klawiatur",
  },
  {
    id: "iloscModulow",
    label: "Ilość Modułów",
    type: "number",
    name: "ilosc_modulow",
  },
  {
    id: "systemRozproszony",
    label: "System Rozproszony",
    type: "checkbox",
    name: "system_rozproszony",
  },
  { id: "uwagi", label: "Uwagi", type: "text", name: "uwagi" },
  { id: "notatki", label: "Notatki", type: "text", name: "notatki" },
  {
    id: "dataOD",
    label: "Data OD",
    type: "date",
    name: "dataOD",
    value: new Date().toISOString().split("T")[0],
  },
];
