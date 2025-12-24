const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Feedback",
  new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    trainerId: mongoose.Schema.Types.ObjectId,
    rating: Number,
    comment: String,
  })
);
