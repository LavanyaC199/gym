const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  trainerId: mongoose.Schema.Types.ObjectId,
  day: String,
  workout: String,
});

module.exports = mongoose.model("Workout", workoutSchema);
