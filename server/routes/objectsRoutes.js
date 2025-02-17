// routes/obiektyRoutes.js

const express = require("express");
const {
  getObjects,
  getColumns,
  getObjectById,
  // getUsersForObject,
  addObject,
  editObject,
  deleteObject,
} = require("../controllers/objectsController");

const router = express.Router();

// router.post("/objects", getObjects);
// router.get("/columns", getColumns);
// router.get("/object/:id", getObjectById);
// router.get("/object/users/:id", getUsersForObject);

// router.post("/object/add", addObject);
// router.post("/object/edit", editObject);
// router.post("/object/delete", deleteObject);

router.post("/obiekty/table-records", getObjects);
router.get("/obiekty/columns", getColumns);
router.get("/obiekty/:id", getObjectById);

router.post("/obiekty/add", addObject);
router.post("/obiekty/edit", editObject);
router.post("/obiekty/delete", deleteObject);

module.exports = router;
