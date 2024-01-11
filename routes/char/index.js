const express = require("express");
const router = express.Router();

const ctrl = require("./char.ctrl");

router.get("/:name", ctrl);

module.exports = router;
