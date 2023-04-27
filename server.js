const express = require("express");
const { connect } = require("./config/connectDB");
const User = require("./models/User");
require("dotenv").config({ path: "./config/.env" });
var app = express();
app.use(express.json());
connect();
app.post("/add", async (req, res) => {
  const { fullName, email, phone } = req.body;
  try {
    const newUser = new User({ fullName, email, phone });
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
});
app.get("/get", async (req, res) => {
  const users = await User.find();
  res.send(users);
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on port ${PORT}`)
);
//get specific
//findby id
//update by id
