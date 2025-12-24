const express = require("express");
const auth = require("../middleware/authMiddleware");
const User = require("../models/User");
const WorkoutPlan = require("../models/WorkoutPlan");
const Progress = require("../models/Progress");
const Payment = require("../models/Payment");
const TrainerVerification = require("../models/TrainerVerification");
const Dispute = require("../models/Dispute");
const Report = require("../models/Report");

const router = express.Router();

/* 💳 Add payment (admin only) */
router.post("/payment", auth("admin"), async (req, res) => {
  await Payment.create(req.body);
  res.json({ message: "Payment added" });
});

/* 👤 Manage Users */
router.get("/users", auth("admin"), async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

router.delete("/user/:id", auth("admin"), async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

/* 🏋️ Manage Fitness Programs */
router.get("/programs", auth("admin"), async (req, res) => {
  const programs = await WorkoutPlan.find();
  res.json(programs);
});

/* 📈 Monitor Progress */
router.get("/progress", auth("admin"), async (req, res) => {
  const progress = await Progress.find();
  res.json(progress);
});

/* ✅ Trainer Approvals */
router.get("/trainer-requests", auth("admin"), async (req, res) => {
  const requests = await TrainerVerification.find({ status: "Pending" });
  res.json(requests);
});

router.put("/approve-trainer/:id", auth("admin"), async (req, res) => {
  await TrainerVerification.findByIdAndUpdate(req.params.id, {
    status: "Approved",
  });
  res.json({ message: "Trainer approved" });
});

/* ⚠️ Disputes */
router.get("/disputes", auth("admin"), async (req, res) => {
  const disputes = await Dispute.find();
  res.json(disputes);
});

router.put("/dispute/:id", auth("admin"), async (req, res) => {
  await Dispute.findByIdAndUpdate(req.params.id, {
    status: "Resolved",
  });
  res.json({ message: "Dispute resolved" });
});

/* 📊 Admin Summary Report */
router.get("/reports", auth("admin"), async (req, res) => {
  const totalUsers = await User.countDocuments();
  const payments = await Payment.find();
  const totalRevenue = payments.reduce((sum, p) => sum + p.amount, 0);

  res.json({
    totalUsers,
    totalTransactions: payments.length,
    totalRevenue,
  });
});

/* 🧾 Generate Detailed Report */
router.post("/generate-report", auth("admin"), async (req, res) => {
  const report = await Report.create({
    generatedBy: req.user.id,
    reportType: req.body.reportType,
    data: req.body.data,
    description: req.body.description,
  });

  res.json(report);
});

module.exports = router;
