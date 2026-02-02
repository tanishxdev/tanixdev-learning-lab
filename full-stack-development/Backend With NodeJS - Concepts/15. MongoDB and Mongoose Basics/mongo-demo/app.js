// ===========================
// CRUD with Mongoose
// ===========================

const dotenv = require("dotenv");
console.log("MONGO_URI =", process.env.MONGO_URI);

const path = require("path");
dotenv.config({ path: path.join(__dirname, ".env") });

const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userModel");

/* =========================
   Config
========================= */

const app = express();
app.use(express.json());

/* =========================
   DB Connection
========================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err.message));

/* =========================
   Routes
========================= */

// CREATE - Add new user
app.post("/api/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ - Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ - Get user by ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(400).json({ message: "Invalid user ID" });
  }
});

// UPDATE - Update user
app.put("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User updated", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - Remove user
app.delete("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ message: "Invalid user ID" });
  }
});

/* =========================
   Server
========================= */

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
