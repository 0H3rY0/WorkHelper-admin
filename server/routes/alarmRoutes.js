const express = require("express");
const {
  addAlarm,
  getColumns,
  getTableRecords,
  getAlarmById,
} = require("../controllers/alarmController");

const router = express.Router();

router.post("/alarmy/add", addAlarm);
router.get("/alarmy/columns", getColumns);
router.post("/alarmy/table-records", getTableRecords);
router.get("/alarmy/:id", getAlarmById);

module.exports = router;
