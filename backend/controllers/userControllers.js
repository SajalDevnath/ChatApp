const asyncHandler = require("express-async-handler");
const UserModel = require("../models/userModel");
const generateToken = require("../config/generateToken");

async function registerUser(req, res) {
  var { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.send("All Fields Are Required");
  }
  var userExists = await UserModel.findOne({ email });
  if (userExists) {
    res.send("User Already Exists");
  }
  var user = new UserModel({
    name: name,
    email: email,
    password: password,
  });
  user.save(function (err, user) {
    if (err) {
      res.send(err);
    }
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  });
}

module.exports = { registerUser };
