const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planet = new Schema({
  name: String,
  system: { type: Schema.Types.ObjectId, ref: "solarSystem" },
  visitors: {
    type: [{ type: Schema.Types.ObjectId, ref: "visitor" }],
    default: [],
  },
});

module.exports = mongoose.model("planet", planet);
