const express = require("express");
const { addAntenna } = require("../controllers/antennaController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
} = require("../controllers/itemController");

const router = express.Router();

router.post("/antenna/add", addAntenna);

const tableName = "anteny";

router.get("/anteny/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
);
router.post("/anteny/table-records", (req, res) =>
  getTableRecords({ ...req, params: { tableName } }, res)
);
router.get("/anteny/:id", (req, res) =>
  getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
);
router.post("/anteny/delete", (req, res) =>
  deleteRecord({ ...req, params: { tableName } }, res)
);

router.post("/anteny/edit", (req, res) =>
  editItem({ ...req, params: { tableName } }, res)
);

module.exports = router;
