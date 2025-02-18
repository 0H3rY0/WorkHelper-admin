const express = require("express");
const {
  addAlarm,
  getColumns,
  getTableRecords,
  getAlarmById,
  deleteAlarmy,
  editAlarmy,
} = require("../controllers/alarmController");

const router = express.Router();

router.get("/alarmy/columns", getColumns);
router.post("/alarmy/table-records", getTableRecords);
router.get("/alarmy/:id", getAlarmById);

router.post("/alarmy/add", addAlarm);
router.post("/alarmy/edit", editAlarmy);
router.post("/alarmy/delete", deleteAlarmy);

module.exports = router;
