// ===========================
// User Schema & Model
// ===========================

const mongoose = require("mongoose");

// Define schema (structure of documents)
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
      min: 10,
    },
  },
  { timestamps: true },
);

// Create model (used for DB operations)
const User = mongoose.model("User", userSchema);

module.exports = User;
