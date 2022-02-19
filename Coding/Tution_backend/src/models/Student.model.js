const { Schema, model } = require("mongoose");

const User = require("./User.model");

const studentSchema = new Schema(
  {
    Name: { type: "string", required: true },
    Grade: { type: "String", required: true },
    Age: { type: "Number", required: true },
    Gender: { type: "String", required: true },
    Teacher: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    Test: [
      {
        type: Schema.Types.ObjectId,
        ref: "test",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("student", studentSchema);
