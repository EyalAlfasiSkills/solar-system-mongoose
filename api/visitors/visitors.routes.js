const express = require("express");
const {
  getVisitors,
  getAllVisitorsByPlanetId,
  getHomePlanetStarName,
} = require("./visitors.controller");
const router = express.Router();

router.get("/:visitorId?", getVisitors);

router.get("/planet/:planetId", getAllVisitorsByPlanetId);
router.get("/:visitorId/home-planet", getHomePlanetStarName);

module.exports = router;
