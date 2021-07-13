const express = require("express");
const { getVisitors } = require("./visitors.controller");
const router = express.Router();

router.get("/:visitorId?", getVisitors);

module.exports = router;
