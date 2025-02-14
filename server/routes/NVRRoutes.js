const express = require("express");
const { addNvr } = require("../controllers/NVRController");

const router = express.Router();

router.post("/nvr/add", addNvr);

module.exports = router;
