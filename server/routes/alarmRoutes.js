const express = require("express");
const { addAlarm, editAlarmy } = require("../controllers/alarmController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
} = require("../controllers/itemController");

const router = express.Router();

router.post("/alarmy/add", addAlarm);
// router.post("/alarmy/edit", editAlarmy);

const tableName = "alarmy";

router.get("/alarmy/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
);
router.post("/alarmy/table-records", (req, res) =>
  getTableRecords({ ...req, params: { tableName } }, res)
);
router.get("/alarmy/:id", (req, res) =>
  getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
);
router.post("/alarmy/delete", (req, res) =>
  deleteRecord({ ...req, params: { tableName } }, res)
);

router.post("/alarmy/edit", (req, res) =>
  editItem({ ...req, params: { tableName } }, res)
);

module.exports = router;
