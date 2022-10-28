const mongoose = require("mongoose");
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
  },

  email: {
    type: String,
  },

  nationality: {
    type: String,
  },

  dateOfBirth: {
    type: String,
  },
  educationBackground: {
    type: String,
  },
});

const User = mongoose.model("user", UserSchema);

export default User;
