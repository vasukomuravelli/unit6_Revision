const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/authenticate");

const authorize = require("../middlewares/authorize");

const Student = require("../models/Student.model");

router.post("/", authenticate, authorize("admin"), async (req, res) => {
  try {
    const student = await Student.create({
      Name: req.body.Name,
      Grade: req.body.Grade,
      Age: req.body.Age,
      Gender: req.body.Gender,
      Teacher: req.user.user._id,
      Test: req.body.Test,
    });

    res.status(201).json(student);
  } catch (e) {
    res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", authenticate, async (req, res) => {
  try {
    let page = req.query.page || 1;
    let size = req.query.size || 5;
    let sort = req.query.sort || 1;
    let offset = (page - 1) * size;
    console.log(req.query.sort, sort);
    const student = await Student.find()
      .sort({ Age: sort })
      .populate({ path: "Teacher", select: { Name: 1 } })
      .populate({ path: "Test", select: { Subject: 1, Marks: 1 } })
      .skip(offset)
      .limit(size)
      .lean()
      .exec();

    const totalPages = Math.ceil(
      (await Student.find().countDocuments()) / size
    );

    res.status(200).json({ student, totalPages });
  } catch (e) {
    res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.get("/:id", authenticate, async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .populate({ path: "Teacher", select: { Name: 1 } })
      .populate({
        path: "Test",
        select: { Subject: 1, Marks: 1, Name: 1, Grade: 1 },
      })
      .lean()
      .exec();

    res.status(200).json({ student });
  } catch (e) {
    res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.get("/gender/:id", authenticate, async (req, res) => {
  try {
    const student = await Student.find({ Gender: req.params.id })
      .populate({ path: "Teacher", select: { Name: 1 } })
      .populate({
        path: "Test",
        select: { Subject: 1, Marks: 1, Name: 1, Grade: 1 },
      })
      .lean()
      .exec();

    res.status(200).json({ student });
  } catch (e) {
    res.status(400).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
