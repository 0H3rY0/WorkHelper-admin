const express = require("express");
const {
  addAlarm,
  getColumns,
  getAlarm,
} = require("../controllers/alarmController");

const router = express.Router();

router.post("/alarm/add", addAlarm);
router.get("/alarm/columns", getColumns);
router.post("/alarm/get-alarm", getAlarm);

module.exports = router;
