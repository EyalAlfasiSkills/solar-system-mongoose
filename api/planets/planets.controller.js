const mongoose = require("mongoose");
const PlanetModel = require("../../models/PlanetModel");
const VisitorModel = require("../../models/VisitorModel");
const { query } = require("./planets.handler");
const makeObjectId = mongoose.Types.ObjectId;

async function getPlanets(req, res) {
  try {
    const { planetId } = req.params;
    const planets = await query({ planetId });
    res.status(200).json(planets);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function getPlanetsByVisitorId(req, res) {
  try {
    const { visitorId } = req.params;
    const planets = await query({ visitorId });
    res.status(200).json(planets);
  } catch (err) {
    res.status(404).send(err);
  }
}

// async function visitPlanet(req, res) {
//   try {
//     const { planetId, visitorId } = req.params;
//     if (!planetId || !visitorId) {
//       res.status(400).send("Some parameters are missing.");
//     }
//     const planet = await PlanetModel.findById(planetId);
//     const visitor = await VisitorModel.findById(visitorId);
//     console.log({ planet, visitor });
//     const visitorIdx = planet.visitors.findIndex((aVisitor) => {
//       return aVisitor._id.toString() === visitorId;
//     });
//     if (visitorIdx === -1) {
//       planet.visitors.push(makeObjectId(visitorId));
//       visitor.visitedPlanets.push(makeObjectId(planetId));
//       planet.save();
//       visitor.save();
//       res.status(200).send({ msg: "Visit is successfull", planet, visitor });
//     }
//     res.status(400).send("Already visited.");
//   } catch (err) {
//     res
//       .status(422)
//       .send("Failed to proccess the visit request with error: " + err);
//   }
// }

module.exports = {
  getPlanets,
  getPlanetsByVisitorId,
  // visitPlanet,
};
