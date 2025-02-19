const db = require("../config/db");

const addLaptop = (req, res) => {
  const {
    nr_seryjny,
    model,
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
      INSERT INTO laptopy (
        nr_seryjny, model, podzial_uprawnien, system_operacyjny, rodzaj_dysku, 
        data_wymiany_dysku, ram, karta_graficzna, plyta_glowna, zasilacz, 
        program_zdalny, id_programu, uwagi, notatki, dataOD, dataDO
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  const values = [
    nr_seryjny,
    model,
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
      message: "Laptop added successfully",
      laptopId: result.insertId,
    });
  });
};

module.exports = {
  addLaptop,
};
