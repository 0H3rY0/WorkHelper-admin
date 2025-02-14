const db = require("../config/db");

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

module.exports = { addAlarm };
