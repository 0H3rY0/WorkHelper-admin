const express = require("express");
const { addObject, editObject } = require("../controllers/objectsController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
  getAllItems,
} = require("../controllers/itemController");

const router = express.Router();

router.post("/obiekty/add", addObject);

const tableName = "obiekty";

router.get("/obiekty/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
);

router.get("/obiekty/all", (req, res) =>
  getAllItems({ ...req, params: { tableName } }, res)
);

router.post("/obiekty/table-records", (req, res) =>
  getTableRecords({ ...req, params: { tableName } }, res)
);
router.get("/obiekty/:id", (req, res) =>
  getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
);
router.post("/obiekty/delete", (req, res) =>
  deleteRecord({ ...req, params: { tableName } }, res)
);

router.post("/obiekty/edit", (req, res) =>
  editItem({ ...req, params: { tableName } }, res)
);

module.exports = router;
