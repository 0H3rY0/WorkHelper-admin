// Konfiguracja pól dla różnych typów tabel
export const fieldConfigs = {
  obiekty: [
    { label: "Id", type: "number", name: "id", checked: true },
    { label: "Nazwa", type: "text", name: "nazwa", checked: true },
    { label: "Kod Pocztowy", type: "text", name: "kod_pocztowy" },
    { label: "Miejscowość", type: "text", name: "miejscowosc", checked: true },
    { label: "Ulica", type: "text", name: "ul", checked: true },
    { label: "Numer Budynku", type: "text", name: "nr_budynku", checked: true },
    { label: "Numer Lokalu", type: "text", name: "nr_lokalu", checked: true },
    { label: "Piętro", type: "text", name: "pietro" },
    { label: "Kod Domofonu", type: "text", name: "kod_domofonu" },
    { label: "Szerokość Geograficzna", type: "number", name: "szerokosc_g" },
    { label: "Długość Geograficzna", type: "number", name: "dlugosc_g" },
    { label: "Data OD", type: "date", name: "dataOD" },
    { label: "Data DO", type: "date", name: "dataDO" },
    { label: "Klient Własny", type: "checkbox", name: "klient_wlasny" },
    { label: "Przekazany Personel", type: "text", name: "przekazany_p" },
    { label: "Uwagi", type: "text", name: "uwagi" },
  ],

  laptopy: [
    { label: "Id", type: "number", name: "id", checked: true },
    { label: "Nr Seryjny", type: "text", name: "nr_seryjny", checked: true },
    { label: "Model", type: "text", name: "model", checked: true },
    { label: "Podział Uprawnień", type: "checkbox", name: "podzial_uprawnien" },
    {
      label: "System Operacyjny",
      type: "text",
      name: "system_operacyjny",
      checked: true,
    },
    {
      label: "Rodzaj Dysku",
      type: "text",
      name: "rodzaj_dysku",
      checked: true,
    },
    { label: "Data Wymiany Dysku", type: "date", name: "data_wymiany_dysku" },
    { label: "RAM (GB)", type: "number", name: "ram", checked: true },
    { label: "Karta Graficzna", type: "checkbox", name: "karta_graficzna" },
    {
      label: "Płyta Główna",
      type: "text",
      name: "plyta_glowna",
      checked: true,
    },
    { label: "Zasilacz", type: "text", name: "zasilacz", checked: true },
    { label: "Program Zdalny", type: "text", name: "program_zdalny" },
    { label: "ID Programu", type: "text", name: "id_programu" },
    { label: "Uwagi", type: "text", name: "uwagi" },
    { label: "Notatki", type: "text", name: "notatki" },
    { label: "Data OD", type: "date", name: "data_od" },
    { label: "Data DO", type: "date", name: "data_do" },
  ],

  alarmy: [
    { label: "ID", type: "number", name: "id", checked: true },
    { label: "Model", type: "text", name: "model", checked: true },
    {
      label: "Ilość Czujek",
      type: "number",
      name: "ilosc_czujek",
      checked: true,
    },
    { label: "Podział Uprawnień", type: "checkbox", name: "podzial_uprawnien" },
    {
      label: "Ilość Klawiatur",
      type: "number",
      name: "ilosc_klawiatur",
      checked: true,
    },
    {
      label: "Ilość Modułów",
      type: "number",
      name: "ilosc_modulow",
      checked: true,
    },
    {
      label: "System Rozproszony",
      type: "checkbox",
      name: "system_rozproszony",
    },
    { label: "Uwagi", type: "text", name: "uwagi" },
    { label: "Notatki", type: "text", name: "notatki" },
    { label: "Data OD", type: "date", name: "dataOD" },
    { label: "Data DO", type: "date", name: "dataDO" },
  ],

  laptop: [
    { label: "Id", type: "number", name: "id" },
    { label: "Producent", type: "text", name: "producent" },
    { label: "Model", type: "text", name: "model" },
    { label: "Numer Seryjny", type: "text", name: "numer_seryjny" },
    { label: "Procesor", type: "text", name: "procesor" },
    { label: "RAM", type: "text", name: "ram" },
    { label: "Dysk", type: "text", name: "dysk" },
    { label: "System Operacyjny", type: "text", name: "system_operacyjny" },
    { label: "Status", type: "text", name: "status" },
  ],

  camera: [
    { label: "Id", type: "number", name: "id" },
    { label: "Producent", type: "text", name: "producent" },
    { label: "Model", type: "text", name: "model" },
    { label: "Rozdzielczość", type: "text", name: "rozdzielczosc" },
    { label: "Typ", type: "text", name: "typ" },
    { label: "Numer Seryjny", type: "text", name: "numer_seryjny" },
    { label: "Data instalacji", type: "date", name: "data_instalacji" },
    { label: "Status", type: "text", name: "status" },
  ],
};

// Funkcja do pobrania odpowiedniej konfiguracji na podstawie nazwy tabeli
export const getFieldConfig = (tableName) => {
  return fieldConfigs[tableName] || [];
};
