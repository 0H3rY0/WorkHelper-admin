const db = require("../config/db");

const addAntenna = (req, res) => {
  const {
    czasza,
    antena_dvbt,
    antena_radiowa,
    zwrotnica,
    ilosc_rozgaleznikow,
    uwagi,
    notatki,
    dataOD,
    dataDO,
  } = req.body;

  const sql = `
    INSERT INTO anteny (
      czasza, antena_dvbt, antena_radiowa, zwrotnica, ilosc_rozgaleznikow,
      uwagi, notatki, dataOD, dataDO
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    czasza,
    antena_dvbt || 0,
    antena_radiowa || 0,
    zwrotnica || 0,
    ilosc_rozgaleznikow || 0,
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
      message: "Antenna added successfully",
      antennaId: result.insertId,
    });
  });
};

module.exports = { addAntenna };
