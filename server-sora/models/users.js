const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
      unique: false,
    },
    lastname: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password1: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { collection: "users" }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password1")) {
    return next();
  }

  try {
    // Hacher le mot de passe avec bcrypt
    const hashedPassword = await bcrypt.hash(this.password1, 10);
    this.password1 = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { userSchema, UserModel };