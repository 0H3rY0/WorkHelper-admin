const db = require("../config/db");
require("dotenv").config();

const DATABASE_NAME = process.env.DB_NAME;

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
  const sql = `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'obiekty' AND TABLE_SCHEMA = '${DATABASE_NAME}'`;

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

const addObject = (req, res) => {
  const {
    nazwa,
    kod_pocztowy,
    miejscowosc,
    ul,
    nr_budynku,
    nr_lokalu,
    pietro,
    kod_domofonu,
    szerokosc_g,
    dlugosc_g,
    dataOD,
    dataDO,
    klient_wlasny,
    przekazany_p,
    uwagi,
  } = req.body;

  const sql = `
    INSERT INTO obiekty (
      nazwa, kod_pocztowy, miejscowosc, ul, nr_budynku, nr_lokalu, pietro,
      kod_domofonu, szerokosc_g, dlugosc_g, dataOD, dataDO, klient_wlasny,
      przekazany_p, uwagi
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    nazwa,
    kod_pocztowy,
    miejscowosc,
    ul,
    nr_budynku,
    nr_lokalu || null,
    pietro || null,
    kod_domofonu || null,
    szerokosc_g || null,
    dlugosc_g || null,
    dataOD || null,
    dataDO || null,
    klient_wlasny || false,
    przekazany_p || null,
    uwagi || null,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      message: "Object added successfully",
      objectId: result.insertId,
    });
  });
};

const editObject = async (req, res) => {
  const {
    id,
    nazwa,
    kod_pocztowy,
    miejscowosc,
    ul,
    nr_budynku,
    nr_lokalu,
    pietro,
    kod_domofonu,
    szerokosc_g,
    dlugosc_g,
    dataOD,
    dataDO,
    klient_wlasny,
    przekazany_p,
    uwagi,
  } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Brak ID obiektu do aktualizacji" });
  }

  try {
    const sql = `
      UPDATE obiekty
      SET 
          nazwa = ?,
          kod_pocztowy = ?,
          miejscowosc = ?,
          ul = ?,
          nr_budynku = ?,
          nr_lokalu = ?,
          pietro = ?,
          kod_domofonu = ?,
          szerokosc_g = ?,
          dlugosc_g = ?,
          dataOD = ?,
          dataDO = ?,
          klient_wlasny = ?,
          przekazany_p = ?,
          uwagi = ?
      WHERE id = ?
    `;

    const values = [
      nazwa,
      kod_pocztowy,
      miejscowosc,
      ul,
      nr_budynku,
      nr_lokalu,
      pietro,
      kod_domofonu,
      szerokosc_g,
      dlugosc_g,
      dataOD,
      dataDO,
      klient_wlasny,
      przekazany_p,
      uwagi,
      id,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.status(201).json({
        message: "Object added successfully",
        objectId: result.insertId,
      });
    });
  } catch (error) {
    console.error("Błąd podczas aktualizacji obiektu:", error);
    res.status(500).json({ message: "Błąd serwera" });
  }
};

const deleteObject = (req, res) => {
  const { todayDate, id } = req.body;
  console.log(todayDate, id);

  if (!id || !todayDate) {
    return res
      .status(400)
      .json({ success: false, message: "id or date not provided" });
  }

  const sql = `UPDATE obiekty SET dataDO = ? WHERE id = ?`;

  db.query(sql, [todayDate, id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Error with deleteObject",
          error: err,
        });
    }

    res.json({ success: true, message: "Object deleted successfully" });
  });
};

module.exports = {
  getObjects,
  getColumns,
  getObjectById,
  getUsersForObject,
  addObject,
  editObject,
  deleteObject,
};
