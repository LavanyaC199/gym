const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Dispute",
  new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    trainerId: mongoose.Schema.Types.ObjectId,
    issue: String,
    status: { type: String, default: "Open" },
  })
);
