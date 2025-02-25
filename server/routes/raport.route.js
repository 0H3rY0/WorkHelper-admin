const express = require("express");
const {
  addRaport,
  getAllTickets,
  getAllMessageByTicketId,
  sendMessage,
  getUserByTicketId,
} = require("../controllers/raport.controller");

const router = express.Router();

// router.post("/add", addRaport);
router.post("/message/add", sendMessage);

router.get("/ticket/all", getAllTickets);
router.get("/all-message/ticket/:ticketId", getAllMessageByTicketId);

router.get("/user/:ticketId", getUserByTicketId);

module.exports = router;
