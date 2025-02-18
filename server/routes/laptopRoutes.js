const express = require("express");
const { addLaptop } = require("../controllers/laptopController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
} = require("../controllers/itemController");

const router = express.Router();

router.post("/laptop/add", addLaptop);

const tableName = "laptopy";

router.get("/laptopy/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
);
router.post("/laptopy/table-records", (req, res) =>
  getTableRecords({ ...req, params: { tableName } }, res)
);
router.get("/laptopy/:id", (req, res) =>
  getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
);
router.post("/laptopy/delete", (req, res) =>
  deleteRecord({ ...req, params: { tableName } }, res)
);

router.post("/laptopy/edit", (req, res) =>
  editItem({ ...req, params: { tableName } }, res)
);

module.exports = router;
