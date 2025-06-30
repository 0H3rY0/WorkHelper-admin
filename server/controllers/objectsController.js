const db = require("../config/db");
require("dotenv").config();

const DATABASE_NAME = process.env.DB_NAME;

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
    return res.status(400).json({ message: "Not found id" });
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
    console.error("Error during updating object:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getUsersForObject,
  addObject,
  editObject,
};
