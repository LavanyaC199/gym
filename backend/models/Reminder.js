const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  type: String, // workout / meal
  time: String,
});

module.exports = mongoose.model("Reminder", reminderSchema);
