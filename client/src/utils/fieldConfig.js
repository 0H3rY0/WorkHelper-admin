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
    { label: "Data OD", type: "date", name: "dataOD" },
    { label: "Data DO", type: "date", name: "dataDO" },
  ],

  pc: [
    { label: "Id", type: "number", name: "id", checked: true },
    { label: "Numer Seryjny", type: "text", name: "nr_seryjny", checked: true },
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
    {
      label: "Karta Graficzna",
      type: "select",
      name: "karta_graficzna",
      options: ["Zintegrowana", "Dedykowana"],
      checked: true,
    },
    {
      label: "Płyta Główna",
      type: "text",
      name: "plyta_glowna",
      checked: true,
    },
    { label: "Zasilacz", type: "text", name: "zasilacz", checked: true },
    { label: "Program Zdalny", type: "text", name: "program_zdalny" },
    { label: "ID Programu", type: "number", name: "id_programu" },
    { label: "Uwagi", type: "text", name: "uwagi" },
    { label: "Notatki", type: "text", name: "notatki" },
    { label: "Data OD", type: "date", name: "dataOD" },
    { label: "Data DO", type: "date", name: "dataDO" },
  ],

  kamery: [
    { label: "Id", type: "number", name: "id", checked: true },
    { label: "Numer Seryjny", type: "text", name: "nr_seryjny", checked: true },
    { label: "Adres MAC", type: "text", name: "mac", checked: true },
    { label: "Model", type: "text", name: "model", checked: true },
    { label: "Podział Uprawnień", type: "checkbox", name: "podzial_uprawnien" },
    { label: "Port HTTP", type: "number", name: "portHTTP" },
    { label: "Port Danych", type: "number", name: "portDANE" },
    { label: "IP Wewnętrzne", type: "text", name: "ipWewnetrzne" },
    { label: "Uwagi", type: "text", name: "uwagi" },
    { label: "Notatki", type: "text", name: "notatki" },
    { label: "Data OD", type: "date", name: "dataOD" },
    { label: "Data DO", type: "date", name: "dataDO" },
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

  anteny: [
    { label: "Id", type: "number", name: "id", checked: true },
    { label: "Czasza", type: "checkbox", name: "czasza", checked: true },
    {
      label: "Antena DVB-T",
      type: "checkbox",
      name: "antena_dvbt",
      checked: true,
    },
    {
      label: "Antena Radiowa",
      type: "checkbox",
      name: "antena_radiowa",
      checked: true,
    },
    { label: "Zwrotnica", type: "checkbox", name: "zwrotnica", checked: true },
    {
      label: "Ilość Rozgałęźników",
      type: "number",
      name: "ilosc_rozgaleznikow",
      checked: true,
    },
    { label: "Uwagi", type: "text", name: "uwagi" },
    { label: "Notatki", type: "text", name: "notatki" },
    { label: "Data OD", type: "date", name: "dataOD" },
    { label: "Data DO", type: "date", name: "dataDO" },
  ],

  oprogramowania: [
    { label: "Id", type: "number", name: "id", checked: true },
    { label: "Nazwa", type: "text", name: "nazwa", checked: true },
    { label: "Opis", type: "text", name: "opis" },
    { label: "Klucz", type: "text", name: "klucz" },
    {
      label: "Administrator",
      type: "checkbox",
      name: "administrator",
      checked: true,
    },
    { label: "Przypisany do", type: "text", name: "przypisany_do" },
    { label: "Data Aktywacji", type: "date", name: "data_aktywacji" },
    { label: "Data Ważności", type: "date", name: "data_waznosci" },
    { label: "Uwagi", type: "text", name: "uwagi" },
    { label: "Notatki", type: "text", name: "notatki" },
    { label: "Data OD", type: "date", name: "dataOD" },
    { label: "Data DO", type: "date", name: "dataDO" },
  ],

  routers: [
    { label: "Id", type: "number", name: "id", checked: true },
    { label: "Numer Seryjny", type: "text", name: "nr_seryjny", checked: true },
    { label: "Model", type: "text", name: "model" },
    { label: "MAC WAN", type: "text", name: "macWAN" },
    { label: "IP Wewnętrzne", type: "text", name: "ipwew" },
    { label: "IP Zewnętrzne", type: "text", name: "ipzew" },
    {
      label: "Podział Uprawnień",
      type: "checkbox",
      name: "podzial_uprawnien",
      checked: true,
    },
    { label: "Port HTTP", type: "number", name: "portHTTP" },
    { label: "Port DANE", type: "number", name: "portDANE" },
    { label: "VPN Klient", type: "checkbox", name: "VPNklien" },
    { label: "VPN Zarządzanie", type: "checkbox", name: "VPNzazadzanie" },
    { label: "Uwagi", type: "text", name: "uwagi" },
    { label: "Notatki", type: "text", name: "notatki" },
    { label: "Data OD", type: "date", name: "dataOD" },
    { label: "Data DO", type: "date", name: "dataDO" },
  ],

  nvr: [
    { label: "Id", type: "number", name: "id", checked: true },
    { label: "Numer Seryjny", type: "text", name: "nr_seryjny", checked: true },
    { label: "Model", type: "text", name: "model" },
    { label: "MAC", type: "text", name: "mac" },
    {
      label: "Podział Uprawnień",
      type: "checkbox",
      name: "podzial_uprawnien",
      checked: true,
    },
    { label: "Model Dysku", type: "text", name: "model_dysku" },
    { label: "Wielkość Dysku (GB)", type: "number", name: "wielkoscDysku" },
    { label: "Data Wymiany Dysku", type: "date", name: "dataWymianyDysku" },
    { label: "Port HTTP", type: "number", name: "portHTTP" },
    { label: "Port DANE", type: "number", name: "portDANE" },
    { label: "Ilość Kamer", type: "number", name: "iloscKamer" },
    { label: "IP Wewnętrzne", type: "text", name: "ipWewnetrzne" },
    { label: "IP Zewnętrzne", type: "text", name: "ipZewnetrzne" },
    { label: "P2P", type: "checkbox", name: "p2p" },
    { label: "Uwagi", type: "text", name: "uwagi" },
    { label: "Notatki", type: "text", name: "notatki" },
    { label: "Data OD", type: "date", name: "dataOD" },
    { label: "Data DO", type: "date", name: "dataDO" },
  ],

  pozostale: [
    { label: "Id", type: "number", name: "id", checked: true },
    { label: "Nazwa", type: "text", name: "nazwa", checked: true },
    { label: "Opis", type: "text", name: "opis" },
    { label: "Zasada Działania", type: "text", name: "zasadaDzialania" },
    { label: "Uwagi", type: "text", name: "uwagi" },
    { label: "Notatki", type: "text", name: "notatki" },
    { label: "Data OD", type: "date", name: "dataOD" },
    { label: "Data DO", type: "date", name: "dataDO" },
  ],

  uzytkownicy: [
    { label: "Id", type: "number", name: "id", checked: true },
    { label: "Imię", type: "text", name: "imie", checked: true },
    { label: "Nazwisko", type: "text", name: "nazwisko", checked: true },
    { label: "Email", type: "email", name: "email", checked: true },
    { label: "Hasło", type: "password", name: "haslo" },
    { label: "Klucz Szyfrujący", type: "text", name: "klucz_szyfrujacy" },
    {
      label: "Logowanie Dwuetapowe",
      type: "checkbox",
      name: "logowanie_dwuetapowe",
    },
    { label: "Data OD", type: "date", name: "dataOD" },
    { label: "Data DO", type: "date", name: "dataDO" },
  ],

  klienci: [
    { label: "Id", type: "number", name: "id", checked: true },
    { label: "Id Użytkownika", type: "number", name: "id_user", checked: true },
    { label: "Id Grupy", type: "number", name: "id_grupy", checked: true },
    { label: "Id Obiektu", type: "number", name: "id_obiektu", checked: true },
    { label: "Telefon", type: "text", name: "telefon" },
    { label: "Stanowisko", type: "text", name: "stanowisko" },
    { label: "Pomieszczenie", type: "text", name: "pomieszczenie" },
    { label: "Data OD", type: "date", name: "dataOD" },
    { label: "Data DO", type: "date", name: "dataDO" },
  ],

  grupy: [
    { label: "Id", type: "number", name: "id", checked: true },
    { label: "Nazwa", type: "text", name: "nazwa", checked: true },
    { label: "Zgłaszać", type: "checkbox", name: "zglaszac", checked: false },
    {
      label: "Weryfikować",
      type: "checkbox",
      name: "weryfikowac",
      checked: false,
    },
    { label: "Zamawiać", type: "checkbox", name: "zamawiac", checked: false },
    {
      label: "01 Wyświetlanie",
      type: "checkbox",
      name: "01_wyswietlanie",
      checked: false,
    },
    {
      label: "01 Dodawanie",
      type: "checkbox",
      name: "01_dodawanie",
      checked: false,
    },
    { label: "01 Edycja", type: "checkbox", name: "01_edycja", checked: false },
    {
      label: "02 Dodawanie",
      type: "checkbox",
      name: "02_dodawanie",
      checked: false,
    },
    { label: "02 Edycja", type: "checkbox", name: "02_edycja", checked: false },
    {
      label: "02 Wyświetlanie",
      type: "checkbox",
      name: "02_wyswietlanie",
      checked: false,
    },
    {
      label: "03 Dodawanie",
      type: "checkbox",
      name: "03_dodawanie",
      checked: false,
    },
    { label: "03 Edycja", type: "checkbox", name: "03_edycja", checked: false },
    {
      label: "03 Wyświetlanie",
      type: "checkbox",
      name: "03_wyswietlanie",
      checked: false,
    },
    {
      label: "04 Dodawanie",
      type: "checkbox",
      name: "04_dodawanie",
      checked: false,
    },
    { label: "04 Edycja", type: "checkbox", name: "04_edycja", checked: false },
    {
      label: "04 Wyświetlanie",
      type: "checkbox",
      name: "04_wyswietlanie",
      checked: false,
    },
    {
      label: "05 Dodawanie",
      type: "checkbox",
      name: "05_dodawanie",
      checked: false,
    },
    { label: "05 Edycja", type: "checkbox", name: "05_edycja", checked: false },
    {
      label: "05 Wyświetlanie",
      type: "checkbox",
      name: "05_wyswietlanie",
      checked: false,
    },
    {
      label: "06 Dodawanie",
      type: "checkbox",
      name: "06_dodawanie",
      checked: false,
    },
    { label: "06 Edycja", type: "checkbox", name: "06_edycja", checked: false },
    {
      label: "06 Wyświetlanie",
      type: "checkbox",
      name: "06_wyswietlanie",
      checked: false,
    },
    {
      label: "07 Dodawanie",
      type: "checkbox",
      name: "07_dodawanie",
      checked: false,
    },
    { label: "07 Edycja", type: "checkbox", name: "07_edycja", checked: false },
    {
      label: "07 Wyświetlanie",
      type: "checkbox",
      name: "07_wyswietlanie",
      checked: false,
    },
    {
      label: "08 Dodawanie",
      type: "checkbox",
      name: "08_dodawanie",
      checked: false,
    },
    { label: "08 Edycja", type: "checkbox", name: "08_edycja", checked: false },
    {
      label: "08 Wyświetlanie",
      type: "checkbox",
      name: "08_wyswietlanie",
      checked: false,
    },
    {
      label: "09 Dodawanie",
      type: "checkbox",
      name: "09_dodawanie",
      checked: false,
    },
    { label: "09 Edycja", type: "checkbox", name: "09_edycja", checked: false },
    {
      label: "09 Wyświetlanie",
      type: "checkbox",
      name: "09_wyswietlanie",
      checked: false,
    },
    {
      label: "Dodawanie użytkownika",
      type: "checkbox",
      name: "user_dodawanie",
      checked: false,
    },
    {
      label: "Usuwanie użytkownika",
      type: "checkbox",
      name: "user_usuwanie",
      checked: false,
    },
    {
      label: "Wyświetlanie użytkownika",
      type: "checkbox",
      name: "user_wyswietlanie",
      checked: false,
    },
    {
      label: "Dodawanie obiektu",
      type: "checkbox",
      name: "objekt_dodawanie",
      checked: false,
    },
    {
      label: "Usuwanie obiektu",
      type: "checkbox",
      name: "objekt_usuwanie",
      checked: false,
    },
    {
      label: "Edycja obiektu",
      type: "checkbox",
      name: "objekt_edycja",
      checked: false,
    },
  ],
};

export const getFieldConfig = (tableName) => {
  return fieldConfigs[tableName] || [];
};
