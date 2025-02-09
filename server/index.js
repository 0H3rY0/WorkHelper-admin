const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/objects", (req, res) => {
  const { filters } = req.body;
  let sql = "SELECT * FROM obiekty";
  let params = [];

  if (filters && Object.keys(filters).length > 0) {
    const conditions = Object.keys(filters)
      .map((key) => {
        const filter = filters[key];
        if (typeof filter === "object" && filter.text !== undefined) {
          return filter.zawiera
            ? `${key} LIKE ?` // Jeśli zawiera: true → używamy LIKE
            : `${key} NOT LIKE ?`; // Jeśli zawiera: false → używamy NOT LIKE
        }
        return `${key} LIKE ?`; // Domyślnie LIKE dla normalnych wartości
      })
      .join(" AND "); // Łączymy operatorem AND, aby wszystkie warunki musiały być spełnione

    sql += ` WHERE ${conditions}`;

    params = Object.values(filters).map((filter) =>
      typeof filter === "object" && filter.text !== undefined
        ? `%${filter.text}%`
        : `%${filter}%`
    );
  }

  db.query(sql, params, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.listen(3000, () => console.log("app listen on port 3000"));
