const express = require("express");
const { addClient } = require("../controllers/clientController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
  getAllItems,
} = require("../controllers/itemController");

const router = express.Router();

router.post("/klienci/add", addClient);

const tableName = "klienci";

router.get("/klienci/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
);
router.post("/klienci/table-records", (req, res) =>
  getTableRecords({ ...req, params: { tableName } }, res)
);

router.get("/klienci/all", (req, res) =>
  getAllItems({ ...req, params: { tableName } }, res)
);

router.get("/klienci/:id", (req, res) =>
  getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
);
router.post("/klienci/delete", (req, res) =>
  deleteRecord({ ...req, params: { tableName } }, res)
);

router.post("/klienci/edit", (req, res) =>
  editItem({ ...req, params: { tableName } }, res)
);

module.exports = router;
