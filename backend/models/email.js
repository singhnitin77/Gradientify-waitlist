const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

exports.Email = mongoose.model("Email", emailSchema);