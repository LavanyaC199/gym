const mongoose = require("mongoose");

module.exports = mongoose.model(
  "NutritionLog",
  new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    date: String,
    calories: Number,
  })
);
