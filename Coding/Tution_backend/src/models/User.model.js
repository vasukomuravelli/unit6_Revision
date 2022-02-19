const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    Name: { type: String, required: true },
    Gender: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Age: { type: Number, required: true },
    Password: { type: String, required: true },
    Role: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  if (!this.isModified("Password")) return next();
  bcrypt.hash(this.Password, 10, (err, hash) => {
    this.Password = hash;
    return next();
  });
});

UserSchema.methods.checkPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.Password, function (err, same) {
      if (err) return reject(err);
      return resolve(same);
    });
  });
};
module.exports = model("user", UserSchema);
