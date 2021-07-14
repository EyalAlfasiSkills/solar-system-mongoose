const mongoose = require("mongoose");
const makeObjectId = mongoose.Types.ObjectId;
const SolarSystemModel = require("../../models/SolarSystemModel");
const PlanetModel = require("../../models/PlanetModel");
const VisitorModel = require("../../models/VisitorModel");

async function query(params) {
  try {
    const queryBy = _queryBuilder(params);
    const systems = await SolarSystemModel.find(queryBy);
    return systems;
  } catch (err) {
    throw err;
  }
}

async function getVisitors(systemId) {
  try {
    const visitors = await PlanetModel.aggregate([
      { $match: { system: makeObjectId(systemId) } },
      { $unwind: "$visitors" },
      {
        $lookup: {
          from: VisitorModel.collection.collectionName,
          localField: "visitors",
          foreignField: "_id",
          as: "visitor",
        },
      },
      { $unwind: "$visitor" },
      { $replaceRoot: { newRoot: "$visitor" } },
    ]);
    return visitors;
  } catch (err) {
    throw err;
  }
}

function _queryBuilder(params) {
  const query = {};
  if (params.systemId) {
    query._id = params.systemId;
  }
  return query;
}

module.exports = {
  query,
  getVisitors,
};
