const express = require("express");
const { addPC } = require("../controllers/PCController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
} = require("../controllers/itemController");

const router = express.Router();

router.post("/PC/add", addPC);

const tableName = "pc";

router.get("/pc/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
);
router.post("/pc/table-records", (req, res) =>
  getTableRecords({ ...req, params: { tableName } }, res)
);
router.get("/pc/:id", (req, res) =>
  getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
);
router.post("/pc/delete", (req, res) =>
  deleteRecord({ ...req, params: { tableName } }, res)
);

router.post("/pc/edit", (req, res) =>
  editItem({ ...req, params: { tableName } }, res)
);

module.exports = router;
