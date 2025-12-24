const mongoose = require("mongoose");

module.exports = mongoose.model(
  "WorkoutLog",
  new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    date: String,
    workout: String,
  })
);
