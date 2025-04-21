const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      index: true, // Index on user field to optimize queries
    },
    book: {
      type: mongoose.Types.ObjectId,
      ref: "books",
      index: true, // Index on book field for fast search
    },
    status: {
      type: String,
      default: "Order Placed",
      enum: ["Order Placed", "Out for delivery", "Delivered", "Canceled"],
      index: true, // Index on status for optimizing query performance
    },
    date: {
      type: Date,
      default: Date.now,
    },
    updatedDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Compound Index for user and status fields to optimize searches by user and order status
orderSchema.index({ user: 1, status: 1 });

// You can also create an index for the book and date fields if necessary
orderSchema.index({ book: 1, date: -1 }); // Orders by book and date (newest first)

module.exports = mongoose.model("order", orderSchema);
