const express = require("express");

const {
  getPlanets,
  // visitPlanet,
  getPlanetsByVisitorId,
} = require("./planets.controller");

const router = express.Router();

router.get("/:planetId?", getPlanets);

router.get("/visitor/:visitorId", getPlanetsByVisitorId);

// router.patch("/visit/:planetId/:visitorId", visitPlanet);

module.exports = router;
