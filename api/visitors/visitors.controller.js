const { query } = require("./visitors.handler");

async function getVisitors(req, res) {
  try {
    const { visitorId } = req.params;
    const visitors = await query({ visitorId });
    res.status(200).json(visitors);
  } catch (err) {
    res.status(404).send(err);
  }
}

module.exports = {
  getVisitors,
};
