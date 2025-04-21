const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      index: true, // Adding index on username for faster lookups
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true, // Adding index on email for faster lookups
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      index: true, // Adding index on role (if filtering by role is needed)
    },
    favourites: [
      {
        type: mongoose.Types.ObjectId,
        ref: "books",
      },
    ],
    cart: [
      {
        type: mongoose.Types.ObjectId,
        ref: "books",
      },
    ],
    orders: [
      {
        type: mongoose.Types.ObjectId,
        ref: "order",
      },
    ],
  },
  { timestamps: true }
);

// Optionally, you can create a compound index for username and role
userSchema.index({ username: 1, role: 1 }); // Compound index for faster search by both fields

module.exports = mongoose.model("user", userSchema);
