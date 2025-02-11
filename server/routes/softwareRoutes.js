const express = require("express");
const { addSoftware } = require("../controllers/softwareController");

const router = express.Router();

router.post("/software/add", addSoftware);

module.exports = router;
