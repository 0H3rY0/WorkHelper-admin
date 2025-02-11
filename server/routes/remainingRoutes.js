const express = require("express");
const { addRemaining } = require("../controllers/remainingController");

const router = express.Router();

router.post("/remaining/add", addRemaining);

module.exports = router;
