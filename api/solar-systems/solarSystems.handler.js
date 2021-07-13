const SolarSystemModel = require("../../models/SolarSystemModel");

async function query(params) {
  try {
    const queryBy = _queryBuilder(params);
    const systems = await SolarSystemModel.find(queryBy);
    return systems;
  } catch (err) {
    res.status(404).send(err);
  }
}

function _queryBuilder(params) {
  const query = {};
  if (params.systemId) {
    query._id = params.systemId;
  }
  return query
}

module.exports = {
  query,
};
