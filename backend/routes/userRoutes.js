const express = require("express");
const auth = require("../middleware/authMiddleware");
const Progress = require("../models/Progress");
const WorkoutLog = require("../models/WorkoutLog");
const NutritionLog = require("../models/NutritionLog");
const Appointment = require("../models/Appointment");
const Message = require("../models/Message");
const Payment = require("../models/Payment");
const WorkoutPlan = require("../models/WorkoutPlan");
const Feedback = require("../models/Feedback");

const router = express.Router();

// Progress
router.post("/progress", auth(), async (req, res) => {
  await Progress.create({ ...req.body, userId: req.user.id });
  res.json({ message: "Progress saved" });
});

// Workout log
router.post("/workout", auth(), async (req, res) => {
  await WorkoutLog.create({ ...req.body, userId: req.user.id });
  res.json({ message: "Workout saved" });
});

// Nutrition log
router.post("/nutrition", auth(), async (req, res) => {
  await NutritionLog.create({ ...req.body, userId: req.user.id });
  res.json({ message: "Nutrition saved" });
});

// Appointment
router.post("/appointment", auth(), async (req, res) => {
  await Appointment.create({ ...req.body, userId: req.user.id });
  res.json({ message: "Appointment booked" });
});

// Messaging
router.post("/message", auth(), async (req, res) => {
  await Message.create({ ...req.body, senderId: req.user.id });
  res.json({ message: "Message sent" });
});

// Payments
router.get("/payments", auth(), async (req, res) => {
  const payments = await Payment.find({ userId: req.user.id });
  res.json(payments);
});

// Workout plans
router.get("/workouts", auth(), async (req, res) => {
  const plans = await WorkoutPlan.find({ userId: req.user.id });
  res.json(plans);
});

// Feedback
router.post("/feedback", auth(), async (req, res) => {
  await Feedback.create({ ...req.body, userId: req.user.id });
  res.json({ message: "Feedback submitted" });
});

module.exports = router;

