const express = require("express");

const {
  getPlanets,
  // visitPlanet,
  getPlanetsByVisitorId,
  getPlanetStarNameAndVisitors
} = require("./planets.controller");

const router = express.Router();

router.get("/:planetId?", getPlanets);

router.get("/visitor/:visitorId", getPlanetsByVisitorId);

router.get("/:planetId/starNameAndVisitors", getPlanetStarNameAndVisitors);

// router.patch("/visit/:planetId/:visitorId", visitPlanet);

module.exports = router;
