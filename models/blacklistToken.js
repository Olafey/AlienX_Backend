const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
});

const BlacklistedToken = mongoose.model("blaclistedtoken", tokenSchema);

module.exports = BlacklistedToken;
