// routes/obiektyRoutes.js

const express = require("express");
const {
  getObjects,
  getColumns,
  getObjectById,
  getUsersForObject,
  addObject,
  editObject,
} = require("../controllers/objectsController");

const router = express.Router();

router.post("/objects", getObjects);
router.get("/columns", getColumns);
router.get("/object/:id", getObjectById);
router.get("/object/users/:id", getUsersForObject);

router.post("/object/add", addObject);
router.post("/object/edit", editObject);

module.exports = router;
