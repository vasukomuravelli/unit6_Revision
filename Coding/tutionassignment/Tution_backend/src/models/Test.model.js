const { Schema, model } = require("mongoose");

const testSchema = new Schema(
  {
    Name: { type: "string", required: true },
    Subject: { type: "string", required: true },
    Marks: { type: "Number", required: true },
    Grade: { type: "String", required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("test", testSchema);
