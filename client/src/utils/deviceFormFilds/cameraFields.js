export const cameraFields = [
  {
    id: "idObiekt",
    label: "ID Obiektu",
    type: "select",
    name: "id_obiektu",
    endpoint: "api/obiekty/all",
  },
  { id: "nrSeryjny", label: "Nr Seryjny", type: "text", name: "nr_seryjny" },
  { id: "mac", label: "MAC", type: "text", name: "mac" },
  { id: "model", label: "Model", type: "text", name: "model" },
  {
    id: "uprawnienia",
    label: "Podział Uprawnień",
    type: "checkbox",
    name: "podzial_uprawnien",
  },
  { id: "portHTTP", label: "Port HTTP", type: "number", name: "portHTTP" },
  { id: "portDANE", label: "Port DANE", type: "number", name: "portDANE" },
  {
    id: "ipWewnetrzne",
    label: "IP Wewnętrzne",
    type: "text",
    name: "ipWewnetrzne",
  },
  { id: "uwagi", label: "Uwagi", type: "text", name: "uwagi" },
  { id: "notatki", label: "Notatki", type: "text", name: "notatki" },
  { id: "dataOD", label: "Data OD", type: "date", name: "dataOD" },
];
