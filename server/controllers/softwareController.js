const db = require("../config/db");

const addSoftware = (req, res) => {
  const {
    nazwa,
    opis,
    klucz,
    administrator,
    przypisany_do, // zmiana na 'przypisany_do'
    data_aktywacji, // zmiana na 'data_aktywacji'
    data_waznosci, // zmiana na 'data_waznosci'
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
    przypisany_do || null, // zmiana na 'przypisany_do'
    data_aktywacji || null, // zmiana na 'data_aktywacji'
    data_waznosci || null, // zmiana na 'data_waznosci'
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
