const mogoose = require("mongoose");
const Schema = mogoose.Schema;

const visitor = new Schema({
  name: string,
  homePlanet: { type: Schema.Types.ObjectId, ref: "planet" },
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: "planet" }],
});

module.exports = mogoose.model("visitor", visitor);
