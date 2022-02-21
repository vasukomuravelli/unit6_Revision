const jwt = require("jsonwebtoken");

const User = require("../models/User.model");

let newToken = (x) => {
  return jwt.sign({ user: x }, "12345");
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ Email: req.body.email }).lean().exec();
    if (user) {
      return res.status(400).json({
        status: "Failed",
        message: "Please use different email address",
      });
    }
    user = await User.create(req.body);

    const token = newToken(user);

    res.status(201).json({ user, token });
  } catch (e) {
    res.status(400).json({ status: "Failed", message: e.message });
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ Email: req.body.Email });
    if (!user) {
      return res.status(400).json({
        status: "Failed",
        message: "Please Enter a valid Email address or Password",
      });
    }
    const match = await user.checkPassword(req.body.Password);

    if (!match) {
      return res.status(400).json({
        status: "Failed",
        message: "Please Enter a valid Email address or Password",
      });
    }
    const token = newToken(user);

    res.status(200).json({ user, token });
  } catch (e) {
    res.status(400).json({ status: "Failed", message: e.message });
  }
};

module.exports = { register, login };
