export const clientFields = [
  // { id: "idUser", label: "ID Użytkownika", type: "number", name: "id_user" },
  {
    id: "idUser",
    label: "ID Użytkownika",
    type: "select",
    name: "id_user",
    endpoint: "api/uzytkownicy/all",
  },

  // { id: "idGrupy", label: "ID Grupy", type: "number", name: "id_grupy" },
  {
    id: "idGrupy",
    label: "ID Grupy",
    type: "select",
    name: "id_grupy",
    endpoint: "api/grupy/all",
  },

  // { id: "idObiektu", label: "ID Obiektu", type: "number", name: "id_obiektu" },
  {
    id: "idObiektu",
    label: "ID Obiektu",
    type: "select",
    name: "id_obiektu",
    endpoint: "api/obiekty/all",
  },

  { id: "telefon", label: "Telefon", type: "text", name: "telefon" },
  { id: "stanowisko", label: "Stanowisko", type: "text", name: "stanowisko" },
  {
    id: "pomieszczenie",
    label: "Pomieszczenie",
    type: "text",
    name: "pomieszczenie",
  },
  { id: "dataOD", label: "Data OD", type: "date", name: "dataOD" },
];
