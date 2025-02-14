const express = require("express");
const { addPC } = require("../controllers/PCController");

const router = express.Router();

router.post("/PC/add", addPC);

module.exports = router;
