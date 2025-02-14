// controllers/obiektyController.js

const db = require("../config/db");

const getObjects = (req, res) => {
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
};

const getColumns = (req, res) => {
  const sql =
    "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'obiekty' AND TABLE_SCHEMA = 'workhelper4'";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const columnNames = results.map((row) => row.COLUMN_NAME);
    res.json(columnNames);
  });
};

const getObjectById = (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM obiekty WHERE id = ?";

  db.query(sql, id, (err, result) => {
    if (err) {
      console.error("error: " + err);
    }
    res.json(result);
  });
};

const getUsersForObject = (req, res) => {
  const { id } = req.params;

  const sql =
    "SELECT u.* FROM obiekty o JOIN obiekty_uzytkownicy ou ON o.id = ou.obiekt_id JOIN uzytkownicy u ON ou.uzytkownik_id = u.id WHERE o.id = ?";

  db.query(sql, id, (err, result) => {
    if (err) {
      console.error("error: " + err);
    }
    res.json(result);
  });
};

module.exports = {
  getObjects,
  getColumns,
  getObjectById,
  getUsersForObject,
};
