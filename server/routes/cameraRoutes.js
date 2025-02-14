const express = require("express");
const { addCamera } = require("../controllers/cameraController");

const router = express.Router();

router.post("/camera/add", addCamera);

module.exports = router;
