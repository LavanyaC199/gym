const mongoose = require("mongoose");

module.exports = mongoose.model(
  "TrainerVerification",
  new mongoose.Schema({
    trainerId: mongoose.Schema.Types.ObjectId,
    documentName: String,
    status: { type: String, default: "Pending" },
  })
);
