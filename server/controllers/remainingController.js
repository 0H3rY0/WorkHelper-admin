const db = require("../config/db");

const addRemaining = (req, res) => {
  const { nazwa, opis, zasadaDzialania, uwagi, notatki, dataOD, dataDO } =
    req.body;

  const sql = `
    INSERT INTO pozostale (
      nazwa, opis, zasadaDzialania, uwagi, notatki, dataOD, dataDO
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    nazwa,
    opis,
    zasadaDzialania,
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
      message: "Record added successfully to 'pozostale'",
      pozostaleId: result.insertId,
    });
  });
};

module.exports = { addRemaining };
