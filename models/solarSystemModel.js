const mongoose = require("mongoose");
const Schema = mogoose.Schema;

const solarSystem = new Schema({
  starName: String,
  planets: [{ type: Schema.Types.ObjectId, ref: "planet" }],
});

module.exports = mongoose.model("solarSystem", solarSystem);
