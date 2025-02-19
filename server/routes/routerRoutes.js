const express = require("express");
const { addRouter } = require("../controllers/routerController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
} = require("../controllers/itemController");

const router = express.Router();

router.post("/router/add", addRouter);

const tableName = "routers";

router.get("/routers/columns", (req, res) =>
  getColumns({ ...req, params: { tableName } }, res)
);
router.post("/routers/table-records", (req, res) =>
  getTableRecords({ ...req, params: { tableName } }, res)
);
router.get("/routers/:id", (req, res) =>
  getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
);
router.post("/routers/delete", (req, res) =>
  deleteRecord({ ...req, params: { tableName } }, res)
);

router.post("/routers/edit", (req, res) =>
  editItem({ ...req, params: { tableName } }, res)
);

module.exports = router;
