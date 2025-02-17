const db = require("../config/db");
require("dotenv").config();

const DATABASE_NAME = process.env.DB_NAME;

const addAlarm = (req, res) => {
  const {
    model,
    ilosc_czujek,
    podzial_uprawnien,
    ilosc_klawiatur,
    ilosc_modulow,
    system_rozproszony, // Zmiana na 'system_rozproszony'
    uwagi,
    notatki,
    dataOD,
    dataDO,
  } = req.body;

  const sql = `
    INSERT INTO alarmy (
      model, ilosc_czujek, podzial_uprawnien, ilosc_klawiatur, ilosc_modulow,
      system_rozproszony, uwagi, notatki, dataOD, dataDO
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    model,
    ilosc_czujek, // Wartość dla 'ilosc_czujek'
    podzial_uprawnien || 0, // Domyślna wartość 0
    ilosc_klawiatur, // Wartość dla 'ilosc_klawiatur'
    ilosc_modulow, // Wartość dla 'ilosc_modulow'
    system_rozproszony || 0, // Domyślna wartość 0
    uwagi || null,
    notatki || null,
    dataOD || null,
    dataDO || null,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      message: "Alarm added successfully",
      alarmId: result.insertId,
    });
  });
};

const getColumns = (req, res) => {
  const sql = `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'alarmy' AND TABLE_SCHEMA = '${DATABASE_NAME}'`;

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const columnNames = results.map((row) => row.COLUMN_NAME);
    res.json(columnNames);
  });
};

const getAlarm = (req, res) => {
  const { filters } = req.body;
  let sql = "SELECT * FROM alarmy";
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

module.exports = { addAlarm, getColumns, getAlarm };
