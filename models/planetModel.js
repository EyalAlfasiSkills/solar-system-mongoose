const mongoose = require("mongoose");

const planet = new mongoose.Schema({
  name: string,
  system: { type: Schema.Types.ObjectId, ref: "solarSystem" },
});

module.exports = mongoose.model("planet", planet);
