const { query, getStarName } = require("./visitors.handler");

async function getVisitors(req, res) {
  try {
    const { visitorId } = req.params;
    const visitors = await query({ visitorId });
    res.status(200).json(visitors);
  } catch (err) {
    res.status(404).send(err);
  }
}
async function getAllVisitorsByPlanetId(req, res) {
  try {
    const { planetId } = req.params;
    console.log({ planetId });
    const visitors = await query({ planetId });
    res.status(200).json(visitors);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function getHomePlanetStarName(req, res) {
  const { visitorId } = req.params;
  try {
    const visitors = await getStarName(visitorId);
    res.status(200).json(visitors);
  } catch (err) {
    res.status(404).send(err);
  }
}

module.exports = {
  getVisitors,
  getAllVisitorsByPlanetId,
  getHomePlanetStarName,
};
