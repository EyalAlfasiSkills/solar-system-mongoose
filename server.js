const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./env-config");
const router = require("./api/solarSystem.routes");

app.use(express.json());

mongoose.connect(config.dbURL, { useNewUrlParser: true }, (err) => {
  if (err) {
    throw new Error("Failed connection to mongoDB with error: ", err);
  } else {
    console.log("Connected successfully to mongoDB!");
  }
});

app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
