const mongoose = require("mongoose");
// const PlanetModel = require("../../models/PlanetModel");
const SolarSystemModel = require("../../models/SolarSystemModel");
const { query, getVisitors } = require("./solarSystems.handler");
// const makeObjectId = mongoose.Types.ObjectId;

async function getSolarSystems(req, res) {
  try {
    const { systemId } = req.params;
    const systems = await query({ systemId });
    res.status(200).json(systems);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function getSolarSystemVisitors(req, res) {
  const { systemId } = req.params;
  const visitors = await getVisitors(systemId);
  // console.log({ visitors });
  res.json(visitors)
}

// async function addPlanetToSolarSystem(req, res) {
//   try {
//     const { systemId, planetId } = req.params;
//     if (!systemId || !planetId) {
//       res.status(400).send("Some parameters are missing.");
//     }
//     const system = await SolarSystemModel.findById(systemId);
//     const planet = await PlanetModel.findById(planetId);
//     console.log({ system, planet });
//     system.planets.push(makeObjectId(planetId));
//     planet.system = makeObjectId(systemId);
//     system.save();
//     planet.save();
//     res.status(200).send({ msg: "successfull", system, planet });
//   } catch (err) {
//     res.status(422).send("Failed to proccess the request with error: " + err);
//   }
// }

module.exports = {
  getSolarSystems,
  getSolarSystemVisitors,
  // addPlanetToSolarSystem,
};
