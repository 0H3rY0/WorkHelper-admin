const express = require("express");
const { addRouter } = require("../controllers/routerController");

const router = express.Router();

router.post("/router/add", addRouter);

module.exports = router;
