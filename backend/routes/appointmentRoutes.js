const express = require("express");
const auth = require("../middleware/authMiddleware");

const Availability = require("../models/Availability");
const Appointment = require("../models/Appointment");
const Notification = require("../models/Notification");
const Message = require("../models/Message");

const router = express.Router();

/* 👤 CLIENT: View trainer availability */
router.get("/availability/:trainerId", auth(), async (req, res) => {
  const slots = await Availability.find({ trainerId: req.params.trainerId });
  res.json(slots);
});

/* 👤 CLIENT: Book appointment */
router.post("/book", auth(), async (req, res) => {
  const appt = await Appointment.create({
    userId: req.user.id,
    ...req.body,
  });

  await Notification.create({
    userId: req.body.trainerId,
    message: "New appointment request received",
  });

  res.json({ message: "Appointment requested", appt });
});

/* 👨‍🏫 TRAINER: View requests */
router.get("/trainer/requests", auth("trainer"), async (req, res) => {
  const requests = await Appointment.find({
    trainerId: req.user.id,
    status: "Pending",
  });
  res.json(requests);
});

/* 👨‍🏫 TRAINER: Accept / Reject */
router.put("/trainer/update/:id", auth("trainer"), async (req, res) => {
  const { status } = req.body;

  const appt = await Appointment.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  await Notification.create({
    userId: appt.userId,
    message: `Your appointment was ${status}`,
  });

  res.json(appt);
});

/* 🔔 Notifications */
router.get("/notifications", auth(), async (req, res) => {
  const notes = await Notification.find({ userId: req.user.id });
  res.json(notes);
});

/* 💬 Messaging */
router.post("/message", auth(), async (req, res) => {
  await Message.create({
    senderId: req.user.id,
    ...req.body,
  });


  
  res.json({ message: "Message sent" });
});

module.exports = router;
