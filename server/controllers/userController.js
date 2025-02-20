const { addRecord } = require("../controllers/itemController");
const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
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

  const hashedPassword = await bcrypt.hash(haslo, 10);

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
    hashedPassword,
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
