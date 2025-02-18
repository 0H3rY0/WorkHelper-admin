const db = require("../config/db");
require("dotenv").config();

const DATABASE_NAME = process.env.DB_NAME;

const addAlarm = (req, res) => {
  const {
    model,
    ilosc_czujek,
    podzial_uprawnien,
    ilosc_klawiatur,
    ilosc_modulow,
    system_rozproszony,
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
    ilosc_czujek,
    podzial_uprawnien || 0,
    ilosc_klawiatur,
    ilosc_modulow,
    system_rozproszony || 0,
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

const editAlarmy = async (req, res) => {
  const {
    id,
    model,
    ilosc_czujek,
    podzial_uprawnien,
    ilosc_klawiatur,
    ilosc_modulow,
    system_rozproszony,
    uwagi,
    notatki,
    dataOD,
    dataDO,
  } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Brak ID alarmu do aktualizacji" });
  }

  try {
    const sql = `
      UPDATE alarmy
      SET 
          model = ?,
          ilosc_czujek = ?,
          podzial_uprawnien = ?,
          ilosc_klawiatur = ?,
          ilosc_modulow = ?,
          system_rozproszony = ?,
          uwagi = ?,
          notatki = ?,
          dataOD = ?,
          dataDO = ?
      WHERE id = ?
    `;

    const values = [
      model,
      ilosc_czujek,
      podzial_uprawnien,
      ilosc_klawiatur,
      ilosc_modulow,
      system_rozproszony,
      uwagi,
      notatki,
      dataOD,
      dataDO,
      id,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (result.affectedRows > 0) {
        return res.status(200).json({
          message: "Alarm zaktualizowany pomyślnie",
        });
      } else {
        return res.status(404).json({
          message: "Nie znaleziono alarmu o podanym ID",
        });
      }
    });
  } catch (error) {
    console.error("Błąd podczas aktualizacji alarmu:", error);
    res.status(500).json({ message: "Błąd serwera" });
  }
};

module.exports = {
  addAlarm,
  editAlarmy,
};
