const express = require("express");

const Test = require("../models/Test.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const test = await Test.create(req.body);

    res.status(201).json(test);
  } catch (e) {
    res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const test = await Test.find().lean().exec();

    res.status(200).json(test);
  } catch (e) {
    res.status(400).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
