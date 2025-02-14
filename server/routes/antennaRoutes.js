const express = require("express");
const { addAntenna } = require("../controllers/antennaController");

const router = express.Router();

router.post("/antenna/add", addAntenna);

module.exports = router;
