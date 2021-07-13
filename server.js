const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./env-config");
const solarSystemsRoutes = require("./api/solar-systems/solarSystem.routes");
const planetsRoutes = require("./api/planets/planets.routes");
const visitorsRoutes = require("./api/visitors/visitors.routes");

app.use(express.json());

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(config.dbURL, mongooseOptions, (err) => {
  if (err) {
    throw new Error("Failed connection to mongoDB with error: ", err);
  } else {
    console.log("Connected successfully to mongoDB!");
  }
});

app.use("/api/solar-system", solarSystemsRoutes);
app.use("/api/planet", planetsRoutes);
app.use("/api/visitor", visitorsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
