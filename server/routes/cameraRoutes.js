const express = require("express");
const { addCamera } = require("../controllers/cameraController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
} = require("../controllers/itemController");

const router = express.Router();

router.post("/camera/add", addCamera);

const tableName = "kamery";

router.get("/kamery/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
);
router.post("/kamery/table-records", (req, res) =>
  getTableRecords({ ...req, params: { tableName } }, res)
);
router.get("/kamery/:id", (req, res) =>
  getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
);
router.post("/kamery/delete", (req, res) =>
  deleteRecord({ ...req, params: { tableName } }, res)
);

router.post("/kamery/edit", (req, res) =>
  editItem({ ...req, params: { tableName } }, res)
);

module.exports = router;
