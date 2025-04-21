const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, index: true }, // Index on email field
    otp: { type: String, required: true, index: true }, // Index on otp field
    createdAt: { type: Date, default: Date.now, expires: 300 }, // Expires after 5 minutes
  },
  { timestamps: true }
);

// Optionally, create a compound index on email and otp
otpSchema.index({ email: 1, otp: 1 });

module.exports = mongoose.model("Otp", otpSchema);
