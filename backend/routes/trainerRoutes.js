const express = require("express");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/workouts/:userId", auth("trainer"), async (req, res) => {
  res.json({
    message: "Trainer workouts fetched",
    userId: req.params.userId,
  });
});

module.exports = router;
