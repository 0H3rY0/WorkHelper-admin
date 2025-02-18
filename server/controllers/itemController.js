const db = require("../config/db"); // Importuj konfigurację bazy danych
require("dotenv").config();

const DATABASE_NAME = process.env.DB_NAME;

const getColumns = (req, res) => {
  const { tableName } = req.params;

  const sql = `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = ? AND TABLE_SCHEMA = '${DATABASE_NAME}'`;

  db.query(sql, [tableName], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results.map((row) => row.COLUMN_NAME));
  });
};

const getTableRecords = (req, res) => {
  const { filters } = req.body;
  const { tableName } = req.params;

  let sql = `SELECT * FROM ${tableName}`;
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

const getRecordById = (req, res) => {
  const { tableName, id } = req.params;
  const sql = `SELECT * FROM ${tableName} WHERE id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

const deleteRecord = (req, res) => {
  const { tableName } = req.params;
  const { date, id } = req.body;

  if (!id || !date) {
    return res.status(400).json({ message: "id or date not provided" });
  }

  const sql = `UPDATE ${tableName} SET dataDO = ? WHERE id = ?`;

  db.query(sql, [date, id], (err) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error deleting record", error: err });
    }
    res.json({ message: "Record deleted successfully" });
  });
};

module.exports = { getColumns, getTableRecords, getRecordById, deleteRecord };
