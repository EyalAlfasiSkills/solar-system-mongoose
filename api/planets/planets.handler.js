const PlanetModel = require("../../models/PlanetModel");

async function query(params) {
  try {
    const queryBy = _queryBuilder(params);
    const planets = await PlanetModel.find(queryBy);
    return planets;
  } catch (err) {
    res.status(404).send(err);
  }
}

function _queryBuilder(params) {
  const query = {};
  if (params.planetId) {
    query._id = params.planetId;
  }
  if (params.visitorId) {
    query.visitors = params.visitorId;
  }
  return query
}

module.exports = {
  query,
};
