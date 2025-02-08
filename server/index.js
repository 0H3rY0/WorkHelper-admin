const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/objects", (req, res) => {
  const { filters } = req.body; // Pobieramy obiekt filtrów z ciała zapytania

  let sql = "SELECT * FROM obiekty";
  let params = [];

  // Przykładowe sprawdzenie filtrów, możesz dostosować do swojego kodu
  if (filters) {
    const { nazwa, ulica, miejscowosc } = filters;
    sql += " WHERE nazwa LIKE ? OR adres LIKE ? OR miejscowosc LIKE ?";
    params = [`%${nazwa}%`, `%${ulica}%`, `%${miejscowosc}%`];
  }

  db.query(sql, params, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.listen(3000, () => console.log("app listen on port 3000"));
