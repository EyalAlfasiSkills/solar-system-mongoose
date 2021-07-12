const mongoose = require("mongoose");
const Schema = mogoose.Schema

const planet = new Schema({
  name: string,
  system: { type: Schema.Types.ObjectId, ref: "solarSystem" },
});

module.exports = mongoose.model("planet", planet);
