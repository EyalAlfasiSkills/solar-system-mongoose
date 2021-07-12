const mongoose = require("mongoose");

const solarSystem = new mongoose.Schema({
  starName: String,
  planets: [{ type: Schema.Types.ObjectId, ref: "planet" }],
});

module.exports = mongoose.model("solarSystem", solarSystem);
