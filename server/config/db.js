const mongoose = require("mongoose");
require('dotenv').config();

mongoose.set('strictQuery', false);

const uri = process.env.url

mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
})


