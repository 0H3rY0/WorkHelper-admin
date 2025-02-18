const express = require("express");
const { addNvr } = require("../controllers/NVRController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
} = require("../controllers/itemController");

const router = express.Router();

router.post("/nvr/add", addNvr);

const tableName = "nvr";

router.get("/nvr/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
);
router.post("/nvr/table-records", (req, res) =>
  getTableRecords({ ...req, params: { tableName } }, res)
);
router.get("/nvr/:id", (req, res) =>
  getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
);
router.post("/nvr/delete", (req, res) =>
  deleteRecord({ ...req, params: { tableName } }, res)
);

router.post("/nvr/edit", (req, res) =>
  editItem({ ...req, params: { tableName } }, res)
);

module.exports = router;
