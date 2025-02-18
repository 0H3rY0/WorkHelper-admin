const { addRecord } = require("../controllers/itemController");

const addGroup = (req, res) => {
  const {
    nazwa,
    zglaszac,
    weryfikowac,
    zamawiac,
    // inne kolumny grupy
  } = req.body;

  const columns = [
    "nazwa",
    "zglaszac",
    "weryfikowac",
    "zamawiac", // inne kolumny
  ];
  const values = [
    nazwa,
    zglaszac || 0,
    weryfikowac || 0,
    zamawiac || 0,
    // inne wartości
  ];

  // Używamy uniwersalnej funkcji
  addRecord("grupy", columns, values, res);
};

module.exports = {
  addGroup,
};
