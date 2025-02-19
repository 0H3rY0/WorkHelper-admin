const express = require("express");
const { addGroup } = require("../controllers/groupController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
  getAllItems,
} = require("../controllers/itemController");

const router = express.Router();

router.post("/grupy/add", addGroup);

const tableName = "grupy";

router.get("/grupy/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
);
router.post("/grupy/table-records", (req, res) =>
  getTableRecords({ ...req, params: { tableName } }, res)
);

router.get("/grupy/all", (req, res) =>
  getAllItems({ ...req, params: { tableName } }, res)
);

router.get("/grupy/:id", (req, res) =>
  getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
);
router.post("/grupy/delete", (req, res) =>
  deleteRecord({ ...req, params: { tableName } }, res)
);

router.post("/grupy/edit", (req, res) =>
  editItem({ ...req, params: { tableName } }, res)
);

module.exports = router;
