const express = require("express");
const { addUser } = require("../controllers/userController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
  getAllItems,
} = require("../controllers/itemController");

const router = express.Router();

router.post("/uzytkownicy/add", addUser);

const tableName = "uzytkownicy";

router.get("/uzytkownicy/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
);
router.post("/uzytkownicy/table-records", (req, res) =>
  getTableRecords({ ...req, params: { tableName } }, res)
);

router.get("/uzytkownicy/all", (req, res) =>
  getAllItems({ ...req, params: { tableName } }, res)
);

router.get("/uzytkownicy/:id", (req, res) =>
  getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
);
router.post("/uzytkownicy/delete", (req, res) =>
  deleteRecord({ ...req, params: { tableName } }, res)
);

router.post("/uzytkownicy/edit", (req, res) =>
  editItem({ ...req, params: { tableName } }, res)
);

module.exports = router;
