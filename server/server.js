const express = require("express");
// import mongoose from 'mongoose';
// import jwt from 'jsonwebtoken';
const userRouter = require("./routes/user-routes");
const foodRouter = require("./routes/food-routes");
const claimedRouter = require("./routes/claimed-routes");
require("./config/db");
const cors = require("cors");

const app = express();

app.use(cors());

app.set("view engine", "ejs");
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/donate", foodRouter);
app.use("/api/cliam", claimedRouter);

app.use("/api", (req, res, next) => {
  res.send("hello");
});

//define port

app.listen(5001, () => console.log("app started at 5001..."));
