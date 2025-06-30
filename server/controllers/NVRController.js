const db = require("../config/db");

const addNvr = (req, res) => {
  const {
    id_obiektu,
    nr_seryjny,
    model,
    mac,
    podzial_uprawnien,
    model_dysku,
    wielkoscDysku,
    dataWymianyDysku,
    portHTTP,
    portDANE,
    iloscKamer,
    ipWewnetrzne,
    ipZewnetrzne,
    p2p,
    uwagi,
    notatki,
    dataOD,
    dataDO,
  } = req.body;

  const sql = `
      INSERT INTO nvr (
        id_obiektu, nr_seryjny, model, mac, podzial_uprawnien, model_dysku, 
        wielkoscDysku, dataWymianyDysku, portHTTP, portDANE, iloscKamer,
        ipWewnetrzne, ipZewnetrzne, p2p, uwagi, notatki, dataOD, dataDO
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  const values = [
    id_obiektu,
    nr_seryjny,
    model,
    mac,
    podzial_uprawnien,
    model_dysku,
    wielkoscDysku,
    dataWymianyDysku || null,
    portHTTP,
    portDANE,
    iloscKamer,
    ipWewnetrzne,
    ipZewnetrzne,
    p2p || 0,
    uwagi || null,
    notatki || null,
    dataOD || null,
    dataDO || null,
  ];

  if (values.length !== 17) {
    return res.status(400).json({
      error: "Number of values is not the same as in the table",
    });
  }

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      message: "NVR added successfully",
      nvrId: result.insertId,
    });
  });
};

module.exports = {
  addNvr,
};
