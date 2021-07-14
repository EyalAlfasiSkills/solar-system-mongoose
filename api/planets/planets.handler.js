const mongoose = require("mongoose");
const makeObjectId = mongoose.Types.ObjectId;
const PlanetModel = require("../../models/PlanetModel");
const SolarSystemModel = require("../../models/SolarSystemModel");
const VisitorModel = require("../../models/VisitorModel");

async function query(params) {
  try {
    const queryBy = _queryBuilder(params);
    const planets = await PlanetModel.find(queryBy);
    return planets;
  } catch (err) {
    throw err;
  }
}

async function getStarNameAndVisitors(planetId) {
  const data = await PlanetModel.aggregate([
    { $match: { _id: makeObjectId(planetId) } },
    {
      $lookup: {
        from: SolarSystemModel.collection.collectionName,
        localField: "system",
        foreignField: "_id",
        as: "system",
      },
    },
    {
      $lookup: {
        from: VisitorModel.collection.collectionName,
        localField: "visitors",
        foreignField: "_id",
        as: "visitors",
      },
    },
    { $unwind: "$system" },
    {
      $project: { starName: "$system.starName", visitors: "$visitors", _id: 0 },
    },
  ]);
  return data;
}

function _queryBuilder(params) {
  const query = {};
  if (params.planetId) {
    query._id = params.planetId;
  }
  if (params.visitorId) {
    query.visitors = params.visitorId;
  }
  return query;
}

module.exports = {
  query,
  getStarNameAndVisitors,
};
