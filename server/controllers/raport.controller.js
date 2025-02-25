const db = require("../config/db");
require("dotenv").config();

const DATABASE_NAME = process.env.DB_NAME;

const getAllTickets = (req, res) => {
  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");

  const tableName = `ticket${month}${year}`;

  const sql = "SELECT * FROM ?? ";

  db.query(sql, [tableName], (err, result) => {
    if (err) {
      console.log("error in getAllTicketsByClientId");
      res.status(500).json({ success: false, message: `db error: ${err}` });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Downloaded all tickets by client id success!",
      tickets: result,
      tableName: tableName,
    });
  });
};

const getAllMessageByTicketId = (req, res) => {
  const { ticketId } = req.params;

  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");

  const tableName = `message${month}${year}`;

  const sql = "SELECT * FROM ?? WHERE id_ticket = ?";

  db.query(sql, [tableName, ticketId], (err, result) => {
    if (err) {
      console.log("error in getAllMessageByTicketId");
      res.status(500).json({ success: false, message: `db error: ${err}` });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Downloaded all messages by ticket id success!",
      messages: result,
      tableName: tableName,
    });
  });
};

const sendMessage = (req, res) => {
  const { id_ticket, id_klienta, tresc, data, godzina } = req.body;

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  // const date = today.toISOString().split("T")[0]; // YYYY-MM-DD
  // const time = today.toTimeString().split(" ")[0]; // HH:MM:SS

  const tableName = `message${month}${year}`;

  const sql = `
    INSERT INTO ?? (id_ticket, id_klienta, data, godzina, tresc)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [tableName, id_ticket, id_klienta, data, godzina, tresc],
    (err, result) => {
      if (err) {
        console.log("Error in sendMessage:", err);
        return res
          .status(500)
          .json({ success: false, message: `DB error: ${err}` });
      }

      res.status(200).json({
        success: true,
        message: "Message sent successfully!",
        messageId: result.insertId,
        tableName: tableName,
      });
    }
  );
};

const getUserByTicketId = (req, res) => {
  const { ticketId } = req.params;

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");

  const tableName = `message${month}${year}`;

  const sql1 = "SELECT id_klienta FROM ?? WHERE id_ticket = ?";

  db.query(sql1, [tableName, ticketId], (err, result) => {
    if (err) {
      console.error("Błąd w getUserByTicketId:", err);
      return res
        .status(500)
        .json({ success: false, message: `Błąd bazy danych: ${err}` });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Nie znaleziono klienta dla podanego ticketId.",
      });
    }

    const idKlienta = result[0].id_klienta;

    const sql2 = `
      SELECT 
        k.*, 
        u.imie, 
        u.nazwisko, 
        u.email 
      FROM klienci k
      JOIN uzytkownicy u ON k.id_user = u.id
      WHERE k.id = ?;
    `;

    db.query(sql2, [idKlienta], (err, userResult) => {
      if (err) {
        console.error("Błąd w pobieraniu użytkownika:", err);
        return res
          .status(500)
          .json({ success: false, message: `Błąd bazy danych: ${err}` });
      }

      if (userResult.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Nie znaleziono użytkownika dla podanego id_klienta.",
        });
      }

      res.status(200).json({
        success: true,
        message: "Pobrano użytkownika na podstawie ticketId!",
        user: userResult[0],
      });
    });
  });
};

const editRaport = (req, res) => {
  const { status, priority, ticketId } = req.body;

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");

  const tableName = `ticket${month}${year}`;

  const sql = `UPDATE ?? SET status = ?, priorytet = ? WHERE id = ?`;

  db.query(sql, [tableName, status, priority, ticketId], (err, result) => {
    if (err) {
      console.error("Error with editRaport:", err);
      return res
        .status(500)
        .json({ success: false, message: `DB error: ${err}` });
    }

    res.status(200).json({
      success: true,
      message: "Raport edited successfully",
      affectedRows: result.affectedRows,
    });
  });
};

module.exports = {
  getAllTickets,
  getAllMessageByTicketId,
  sendMessage,
  getUserByTicketId,
  editRaport,
};
