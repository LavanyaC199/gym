const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Appointment",
  new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    trainerId: mongoose.Schema.Types.ObjectId,
    date: String,
    status: { type: String, default: "Pending" },
  })
);
