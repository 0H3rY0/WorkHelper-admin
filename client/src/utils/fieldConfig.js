// Konfiguracja pól dla różnych typów tabel
export const fieldConfigs = {
  object: [
    { label: "Id", type: "number", name: "id" },
    { label: "Nazwa", type: "text", name: "nazwa" },
    { label: "Kod Pocztowy", type: "text", name: "kod_pocztowy" },
    { label: "Miejscowość", type: "text", name: "miejscowosc" },
    { label: "Ulica", type: "text", name: "ul" },
    { label: "Numer Budynku", type: "text", name: "nr_budynku" },
    { label: "Numer Lokalu", type: "text", name: "nr_lokalu" },
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
