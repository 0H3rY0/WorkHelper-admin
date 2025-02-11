// routes/obiektyRoutes.js

const express = require("express");
const { addLaptop } = require("../controllers/laptopController");

const router = express.Router();

router.post("/laptop/add", addLaptop);

module.exports = router;
