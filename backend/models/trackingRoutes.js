const express = require("express");
const auth = require("../middleware/authMiddleware");
const WorkoutLog = require("../models/WorkoutLog");
const NutritionLog = require("../models/NutritionLog");
const Reminder = require("../models/Reminder");

const router = express.Router();

/* 🏋️ Save Workout */
router.post("/workout", auth(), async (req, res) => {
  await WorkoutLog.create({
    ...req.body,
    userId: req.user.id,
  });
  res.json({ message: "Workout saved" });
});

/* 🍽 Save Nutrition */
router.post("/nutrition", auth(), async (req, res) => {
  await NutritionLog.create({
    ...req.body,
    userId: req.user.id,
  });
  res.json({ message: "Nutrition saved" });
});

/* 📊 Get Recommendations */
router.get("/recommendation", auth(), async (req, res) => {
  const goal = req.query.goal;

  let recommendation = "";

  if (goal === "weight loss") {
    recommendation =
      "Focus on calorie deficit, cardio workouts, and high protein intake.";
  } else if (goal === "muscle gain") {
    recommendation =
      "Increase protein intake, strength training, and progressive overload.";
  } else {
    recommendation = "Maintain balanced workouts and healthy diet.";
  }

  res.json({ recommendation });
});

/* ⏰ Save Reminder */
router.post("/reminder", auth(), async (req, res) => {
  await Reminder.create({
    ...req.body,
    userId: req.user.id,
  });
  res.json({ message: "Reminder set" });
});

module.exports = router;
