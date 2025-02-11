const express = require("express");
const { addAlarm } = require("../controllers/alarmController");

const router = express.Router();

router.post("/alarm/add", addAlarm);

module.exports = router;
