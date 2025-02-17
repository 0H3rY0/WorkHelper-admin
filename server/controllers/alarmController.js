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

const getTableRecords = (req, res) => {
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

const getAlarmById = (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM alarmy WHERE id = ?";

  db.query(sql, id, (err, result) => {
    if (err) {
      console.error("error: " + err);
    }
    res.json(result);
  });
};

const deleteAlarmy = (req, res) => {
  const { date, id } = req.body;

  if (!id || !date) {
    return res
      .status(400)
      .json({ success: false, message: "id or date not provided" });
  }

  const sql = `UPDATE alarmy SET dataDO = ? WHERE id = ?`;

  db.query(sql, [date, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error with deleteObject",
        error: err,
      });
    }

    res.json({ success: true, message: "Object deleted successfully" });
  });
};

const editAlarmy = async (req, res) => {
  const {
    id,
    model,
    ilosc_czujek,
    podzial_uprawnien,
    ilosc_klawiatur,
    ilosc_modulow,
    system_rozproszony,
    uwagi,
    notatki,
    dataOD,
    dataDO,
  } = req.body;

  // Sprawdzamy, czy id jest przekazane
  if (!id) {
    return res.status(400).json({ message: "Brak ID alarmu do aktualizacji" });
  }

  try {
    // Zaktualizowane zapytanie SQL do tabeli alarmy
    const sql = `
      UPDATE alarmy
      SET 
          model = ?,
          ilosc_czujek = ?,
          podzial_uprawnien = ?,
          ilosc_klawiatur = ?,
          ilosc_modulow = ?,
          system_rozproszony = ?,
          uwagi = ?,
          notatki = ?,
          dataOD = ?,
          dataDO = ?
      WHERE id = ?
    `;

    // Przekazywane wartości do zapytania
    const values = [
      model,
      ilosc_czujek,
      podzial_uprawnien,
      ilosc_klawiatur,
      ilosc_modulow,
      system_rozproszony,
      uwagi,
      notatki,
      dataOD,
      dataDO,
      id,
    ];

    // Wykonanie zapytania do bazy
    db.query(sql, values, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (result.affectedRows > 0) {
        return res.status(200).json({
          message: "Alarm zaktualizowany pomyślnie",
        });
      } else {
        return res.status(404).json({
          message: "Nie znaleziono alarmu o podanym ID",
        });
      }
    });
  } catch (error) {
    console.error("Błąd podczas aktualizacji alarmu:", error);
    res.status(500).json({ message: "Błąd serwera" });
  }
};

module.exports = {
  addAlarm,
  getColumns,
  getTableRecords,
  getAlarmById,
  deleteAlarmy,
  editAlarmy,
};
