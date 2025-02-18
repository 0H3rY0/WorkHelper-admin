const { addRecord } = require("../controllers/itemController");

const addClient = (req, res) => {
  const {
    id_user,
    id_grupy,
    id_obiektu,
    telefon,
    stanowisko,
    pomieszczenie,
    dataOD,
    dataDO,
  } = req.body;

  const columns = [
    "id_user",
    "id_grupy",
    "id_obiektu",
    "telefon",
    "stanowisko",
    "pomieszczenie",
    "dataOD",
    "dataDO",
  ];
  const values = [
    id_user,
    id_grupy,
    id_obiektu,
    telefon || null,
    stanowisko || null,
    pomieszczenie || null,
    dataOD || null,
    dataDO || null,
  ];

  // Używamy uniwersalnej funkcji
  addRecord("klienci", columns, values, res);
};

module.exports = {
  addClient,
};
