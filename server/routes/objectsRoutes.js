// routes/obiektyRoutes.js

const express = require("express");
const { addObject, editObject } = require("../controllers/objectsController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
} = require("../controllers/itemController");

const router = express.Router();

// router.post("/objects", getObjects);
// router.get("/columns", getColumns);
// router.get("/object/:id", getObjectById);
// router.get("/object/users/:id", getUsersForObject);

// router.post("/object/add", addObject);
// router.post("/object/edit", editObject);
// router.post("/object/delete", deleteObject);

// router.post("/obiekty/table-records", getObjects);
// router.get("/obiekty/columns", getColumns);
// router.get("/obiekty/:id", getObjectById);

router.post("/obiekty/add", addObject);
// router.post("/obiekty/edit", editObject);
// router.post("/obiekty/delete", deleteObject);

const tableName = "obiekty";

router.get("/obiekty/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
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
