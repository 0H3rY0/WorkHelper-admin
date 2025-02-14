const db = require("../config/db");

const addPC = (req, res) => {
  const {
    nr_seryjny,
    podzial_uprawnien,
    system_operacyjny,
    rodzaj_dysku,
    data_wymiany_dysku,
    ram,
    karta_graficzna,
    plyta_glowna,
    zasilacz,
    program_zdalny,
    id_programu,
    uwagi,
    notatki,
    data_od,
    data_do,
  } = req.body;

  const sql = `
      INSERT INTO PC (
        nr_seryjny, podzial_uprawnien, system_operacyjny, rodzaj_dysku, 
        data_wymiany_dysku, ram, karta_graficzna, plyta_glowna, zasilacz, 
        program_zdalny, id_programu, uwagi, notatki, data_od, data_do
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  const values = [
    nr_seryjny,
    podzial_uprawnien,
    system_operacyjny,
    rodzaj_dysku,
    data_wymiany_dysku || null,
    ram,
    karta_graficzna,
    plyta_glowna,
    zasilacz,
    program_zdalny || null,
    id_programu || null,
    uwagi || null,
    notatki || null,
    data_od || null,
    data_do || null,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      message: "PC added successfully",
      pcId: result.insertId,
    });
  });
};

module.exports = {
  addPC,
};
