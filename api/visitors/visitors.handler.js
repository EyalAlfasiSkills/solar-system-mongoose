const mongoose = require("mongoose");
const makeObjectId = mongoose.Types.ObjectId;
const PlanetModel = require("../../models/PlanetModel");
const VisitorModel = require("../../models/VisitorModel");
const SolarSystemModel = require("../../models/SolarSystemModel");

async function query(params) {
  try {
    const queryBy = _queryBuilder(params);
    const visitors = await VisitorModel.find(queryBy);
    return visitors;
  } catch (err) {
    throw err;
  }
}

async function getStarName(visitorId) {
  const starName = await VisitorModel.aggregate([
    { $match: { _id: makeObjectId(visitorId) } },
    {
      $lookup: {
        from: PlanetModel.collection.name,
        localField: "homePlanet",
        foreignField: "_id",
        as: "homePlanet",
      },
    },
    { $unwind: "$homePlanet" },
    {
      $lookup: {
        from: SolarSystemModel.collection.name,
        localField: "homePlanet.system",
        foreignField: "_id",
        as: "homePlanet.system",
      },
    },
    { $unwind: "$homePlanet.system" },
    { $replaceRoot: { newRoot: "$homePlanet.system" } },
    { $project: { _id: 0, planets: 0, __v: 0 } },
  ]);
  return starName;
}

function _queryBuilder(params) {
  const query = {};
  if (params.visitorId) {
    query._id = params.visitorId;
  }
  if (params.planetId) {
    query.visitedPlanets = params.planetId;
  }
  return query;
}

module.exports = {
  query,
  getStarName,
};
