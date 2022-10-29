const mongoose = require("mongoose");
import isEmail from "validator/lib/isEmail";
import { GENDER } from "../config/enums";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  address: {
    type: String,
  },
  phone: {
    type: String,
  },

  gender: {
    type: String,
    enum: GENDER,
  },

  email: {
    type: String,
    validate: [isEmail, "invalid email"],
    unique: true,
  },

  nationality: {
    type: String,
  },

  dateOfBirth: {
    type: Date,
    alias: "birthdate",
  },
  educationBackground: {
    type: String,
  },
});

const User = mongoose.model("user", UserSchema);

export default User;
