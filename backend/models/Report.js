const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    // Who generated the report (admin)
    generatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Type of report
    reportType: {
      type: String,
      enum: [
        "USER_ACTIVITY",
        "PROGRESS_REPORT",
        "PAYMENT_REPORT",
        "TRAINER_REPORT",
      ],
      required: true,
    },

    // Report data (flexible structure)
    data: {
      type: Object,
      required: true,
    },

    // Optional description
    description: {
      type: String,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

module.exports = mongoose.model("Report", reportSchema);
