const { addRecord } = require("../controllers/itemController");

const addClient = (req, res) => {
  const {
    id_user,
    id_grupy,
    id_obiektu,
    telefon,
    stanowisko,
    pomieszczenie,
    data_od,
    data_do,
  } = req.body;

  const columns = [
    "id_user",
    "id_grupy",
    "id_obiektu",
    "telefon",
    "stanowisko",
    "pomieszczenie",
    "data_od",
    "data_do",
  ];
  const values = [
    id_user,
    id_grupy,
    id_obiektu,
    telefon || null,
    stanowisko || null,
    pomieszczenie || null,
    data_od || null,
    data_do || null,
  ];

  // Używamy uniwersalnej funkcji
  addRecord("klienci", columns, values, res);
};

module.exports = {
  addClient,
};
