const db = require("../config/db");

const addRouter = (req, res) => {
  const {
    nr_seryjny,
    model,
    macWAN,
    ipwew,
    ipzew,
    podzial_uprawnien,
    portHTTP,
    portDANE,
    VPNklien,
    VPNzazadzanie,
    uwagi,
    notatki,
    dataOD,
    dataDO,
  } = req.body;

  const sql = `
    INSERT INTO routers (
      nr_seryjny, model, macWAN, ipwew, ipzew, podzial_uprawnien,
      portHTTP, portDANE, VPNklien, VPNzazadzanie, uwagi, notatki,
      dataOD, dataDO
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    nr_seryjny,
    model,
    macWAN,
    ipwew,
    ipzew,
    podzial_uprawnien,
    portHTTP,
    portDANE,
    VPNklien,
    VPNzazadzanie,
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
      message: "Router added successfully",
      routerId: result.insertId,
    });
  });
};

module.exports = { addRouter };
