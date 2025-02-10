const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// downloading object with filters

app.post("/objects", (req, res) => {
  const { filters } = req.body;
  let sql = "SELECT * FROM obiekty";
  let params = [];

  if (filters && Object.keys(filters).length > 0) {
    const conditions = Object.keys(filters)
      .map((key) => {
        const filter = filters[key];
        if (typeof filter === "object" && filter.text !== undefined) {
          return filter.zawiera ? `${key} LIKE ?` : `${key} NOT LIKE ?`;
        }
        return `${key} LIKE ?`;
      })
      .join(" AND ");

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

// ---------------------------------------------------------------

// downloading culmns in objects

app.get("/columns", (req, res) => {
  const sql =
    "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'obiekty' AND TABLE_SCHEMA = 'workhelper'";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const columnNames = results.map((row) => row.COLUMN_NAME);
    res.json(columnNames);
  });
});

// -----------------------------------------------------------------

// downloading single object
app.get("/object/:id", (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM obiekty WHERE id = ?";

  db.query(sql, id, (err, result) => {
    if (err) {
      console.error("error: " + err);
    }

    res.json(result);
  });
});

app.listen(3000, () => console.log("app listen on port 3000"));
