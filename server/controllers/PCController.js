const db = require("../config/db");

const addPC = (req, res) => {
  const {
    id_obiektu,
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
    dataOD,
    dataDO,
  } = req.body;

  const sql = `
      INSERT INTO PC (
        id_obiektu, nr_seryjny, podzial_uprawnien, system_operacyjny, rodzaj_dysku, 
        data_wymiany_dysku, ram, karta_graficzna, plyta_glowna, zasilacz, 
        program_zdalny, id_programu, uwagi, notatki, dataOD, dataDO
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  const values = [
    id_obiektu,
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
    dataOD || null,
    dataDO || null,
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
