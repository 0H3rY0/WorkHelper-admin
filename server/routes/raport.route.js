const express = require("express");
const {
  addRaport,
  getAllTickets,
  getAllMessageByTicketId,
  sendMessage,
  getUserByTicketId,
  editRaport,
} = require("../controllers/raport.controller");

const router = express.Router();

router.post("/message/add", sendMessage);
router.post("/edit", editRaport);

router.get("/ticket/all", getAllTickets);
router.get("/all-message/ticket/:ticketId", getAllMessageByTicketId);

router.get("/user/:ticketId", getUserByTicketId);

module.exports = router;
