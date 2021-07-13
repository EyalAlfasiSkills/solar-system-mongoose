const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitor = new Schema({
  name: String,
  homePlanet: { type: Schema.Types.ObjectId, ref: "planet" },
  visitedPlanets: {
    type: [{ type: Schema.Types.ObjectId, ref: "planet" }],
    default: [],
  },
});

module.exports = mongoose.model("visitor", visitor);
