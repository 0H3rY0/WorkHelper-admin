const express = require("express");
const { addSoftware } = require("../controllers/softwareController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
} = require("../controllers/itemController");

const router = express.Router();

const tableName = "oprogramowania";

router.post("/software/add", addSoftware);

router.get("/oprogramowania/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
);
router.post("/oprogramowania/table-records", (req, res) =>
  getTableRecords({ ...req, params: { tableName } }, res)
);
router.get("/oprogramowania/:id", (req, res) =>
  getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
);
router.post("/oprogramowania/delete", (req, res) =>
  deleteRecord({ ...req, params: { tableName } }, res)
);

router.post("/oprogramowania/edit", (req, res) =>
  editItem({ ...req, params: { tableName } }, res)
);

module.exports = router;
