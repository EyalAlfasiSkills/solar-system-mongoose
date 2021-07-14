const express = require("express");
const router = express.Router();
// const SolarSystemModel = require("../../models/SolarSystemModel");
// const PlanetModel = require("../../models/PlanetModel");
// const VisitorModel = require("../../models/VisitorModel");
const {
  getSolarSystems,
  getSolarSystemVisitors
  // addPlanetToSolarSystem,
} = require("./solarSystems.controller");

// router.get("/seed", async (req, res) => {
//   const solarSystems = [
//     { starName: "Alfasi star" },
//     { starName: "Patrick star" },
//   ];

//   const planets = [
//     { name: "Pluto" },
//     { name: "Party planet" },
//     { name: "Cookies planet" },
//     { name: "Planet of the apes" },
//     { name: "Kochav nolad" },
//   ];

//   const visitors = [
//     { name: "Eyal Alfasi" },
//     { name: "Roger Federer" },
//     { name: "Mr Poopy Butthole" },
//   ];

//   const newSolarSystems = await SolarSystemModel.create(solarSystems);
//   const newPlanets = await PlanetModel.create(planets);
//   const newVisitors = await VisitorModel.create(visitors);

//   res.send({
//     solarSystems: newSolarSystems,
//     planets: newPlanets,
//     visitors: newVisitors,
//   });
// });

router.get("/:systemId?", getSolarSystems);
router.get("/:systemId?/visitors", getSolarSystemVisitors);

// router.patch("/add/:systemId/:planetId", addPlanetToSolarSystem);

module.exports = router;
