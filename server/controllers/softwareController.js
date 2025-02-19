const db = require("../config/db");

const addSoftware = (req, res) => {
  const {
    nazwa,
    opis,
    klucz,
    administrator,
    przypisany_do,
    data_aktywacji,
    data_waznosci,
    uwagi,
    notatki,
    dataOD,
    dataDO,
  } = req.body;

  const sql = `
    INSERT INTO oprogramowania (
      nazwa, opis, klucz, administrator, przypisany_do, data_aktywacji, 
      data_waznosci, uwagi, notatki, dataOD, dataDO
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    nazwa,
    opis || null,
    klucz || null,
    administrator || 0,
    przypisany_do || null,
    data_aktywacji || null,
    data_waznosci || null,
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
      message: "Software added successfully",
      softwareId: result.insertId,
    });
  });
};

module.exports = { addSoftware };
