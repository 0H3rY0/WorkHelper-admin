const express = require("express");
const { addRemaining } = require("../controllers/remainingController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
} = require("../controllers/itemController");

const router = express.Router();

router.post("/remaining/add", addRemaining);

const tableName = "pozostale";

router.get("/pozostale/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
);
router.post("/pozostale/table-records", (req, res) =>
  getTableRecords({ ...req, params: { tableName } }, res)
);
router.get("/pozostale/:id", (req, res) =>
  getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
);
router.post("/pozostale/delete", (req, res) =>
  deleteRecord({ ...req, params: { tableName } }, res)
);

router.post("/pozostale/edit", (req, res) =>
  editItem({ ...req, params: { tableName } }, res)
);

module.exports = router;
