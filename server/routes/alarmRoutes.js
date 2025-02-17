const express = require("express");
const { addAlarm, getColumns } = require("../controllers/alarmController");

const router = express.Router();

router.post("/alarm/add", addAlarm);
router.get("/alarm/columns", getColumns);

module.exports = router;
