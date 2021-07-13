const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const solarSystem = new Schema({
  starName: String,
  planets: {
    type: [{ type: Schema.Types.ObjectId, ref: "planet" }],
    default: [],
  },
});

module.exports = mongoose.model("solarSystem", solarSystem);
