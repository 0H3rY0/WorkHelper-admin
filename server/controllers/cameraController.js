const db = require("../config/db");

const addCamera = (req, res) => {
  const {
    nr_seryjny,
    mac,
    model,
    podzial_uprawnien,
    portHTTP,
    portDANE,
    ipWewnetrzne,
    uwagi,
    notatki,
    dataOD,
    dataDO,
  } = req.body;

  const sql = `
    INSERT INTO kamery (
      nr_seryjny, mac, model, podzial_uprawnien, portHTTP, portDANE,
      ipWewnetrzne, uwagi, notatki, dataOD, dataDO
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    nr_seryjny,
    mac,
    model,
    podzial_uprawnien,
    portHTTP || null,
    portDANE || null,
    ipWewnetrzne || null,
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
      message: "Camera added successfully",
      cameraId: result.insertId,
    });
  });
};

module.exports = { addCamera };
