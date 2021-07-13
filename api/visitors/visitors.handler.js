const VisitorModel = require('../../models/VisitorModel')

async function query(params) {
  try {
    const queryBy = _queryBuilder(params);
    const visitors = await VisitorModel.find(queryBy);
    return visitors;
  } catch (err) {
    res.status(404).send(err);
  }
}

function _queryBuilder(params) {
  const query = {};
  if (params.visitorId) {
    query._id = params.visitorId;
  }
  return query
}

module.exports = {
  query,
};
