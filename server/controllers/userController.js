const { addRecord } = require("../controllers/itemController");

const addUser = (req, res) => {
  const {
    imie,
    nazwisko,
    email,
    haslo,
    klucz_szyfrujacy,
    logowanie_dwuetapowe,
    dataOD,
    dataDO,
  } = req.body;

  const columns = [
    "imie",
    "nazwisko",
    "email",
    "haslo",
    "klucz_szyfrujacy",
    "logowanie_dwuetapowe",
    "dataOD",
    "dataDO",
  ];

  const values = [
    imie,
    nazwisko,
    email,
    haslo,
    klucz_szyfrujacy || null,
    logowanie_dwuetapowe || 0,
    dataOD || null,
    dataDO || null,
  ];

  addRecord("uzytkownicy", columns, values, res);
};

module.exports = {
  addUser,
};
