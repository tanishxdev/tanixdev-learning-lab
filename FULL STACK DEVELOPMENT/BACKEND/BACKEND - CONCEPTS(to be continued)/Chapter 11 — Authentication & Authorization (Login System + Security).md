# Chapter 11 — Authentication & Authorization (Login System + Security)

---

# 1. Problem (Why this chapter exists)

Till now:

- You built APIs
- Anyone can access them

### ❌ Problem

```text
Anyone can:
- Create books
- Delete books
- Access data
```

No restriction = **insecure backend**

---

# 2. Concept (Core Idea)

---

## 🧠 Definition — Authentication

> Verifying **who the user is**

Example:

```text
Login → email + password
```

---

## 🧠 Definition — Authorization

> What user is **allowed to do**

Example:

```text
Admin → delete
User → only view
```

---

## 🧠 Flow

```text
User → Login → Verify → Token → Access APIs
```

---

# 3. Solution Overview

We will use:

- **bcrypt** → password hashing
- **JWT (JSON Web Token)** → authentication

---

# 4. Installing Dependencies

---

## ▶️ Commands

```bash
npm install bcrypt jsonwebtoken
```

---

# 5. Step 1 — User Model

---

## 📄 `models/user.model.js`

```javascript
// ================================
// User Model
// ================================

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

// Create model
const User = mongoose.model("User", userSchema);

module.exports = User;
```

---

# 6. Step 2 — Register (Signup)

---

# 🧠 Problem

We should NOT store plain passwords

---

# 🧠 Solution

Hash passwords using bcrypt

---

## 📄 Code

```javascript
const bcrypt = require("bcrypt");
const User = require("./models/user.model");

// Register
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();

    res.json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

---

# 7. Step 3 — Login

---

# 🧠 Problem

Need to verify password

---

# 🧠 Solution

Use bcrypt compare

---

## 📄 Code

```javascript
const jwt = require("jsonwebtoken");

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Create token
  const token = jwt.sign({ userId: user._id }, "secretKey", {
    expiresIn: "1h",
  });

  res.json({ token });
});
```

---

# 8. Step 4 — Authentication Middleware

---

# 🧠 Problem

Protect routes

---

# 🧠 Solution

Verify JWT

---

## 📄 Code

```javascript
// ================================
// Auth Middleware
// ================================

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, "secretKey");

    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}
```

---

# 9. Step 5 — Protect Routes

---

## 📄 Example

```javascript
// Protected route
app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome user",
    user: req.user,
  });
});
```

---

# 10. Real Backend Flow

---

## 🧠 Full Flow

```text
Register → Save user
Login → Verify → Generate JWT
Request → Send token → Verify → Allow access
```

---

# 11. Mini Practice (DO THIS)

---

## Tasks:

- Register user
- Login user
- Access protected route

---

## Test flow:

```text
1. POST /register
2. POST /login → get token
3. GET /profile (with token)
```

---

# 12. Common Mistakes

---

### ❌ Storing plain password

---

### ❌ Not hashing password

---

### ❌ Not verifying token

---

### ❌ Hardcoding secret in production

---

# 13. Mental Model (VERY IMPORTANT)

```text
Password → hash → store
Login → verify → generate token
Token → verify → allow access
```

---

# 14. Final File (Clean Setup)

---

## 📄 `app.js`

```javascript
// ================================
// Chapter 11 - Auth System
// ================================

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/user.model");

const app = express();

app.use(express.json());

// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/authDB");

// ================================
// REGISTER
// ================================

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashedPassword,
  });

  await user.save();

  res.json({ message: "Registered" });
});

// ================================
// LOGIN
// ================================

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign({ userId: user._id }, "secretKey");

  res.json({ token });
});

// ================================
// AUTH MIDDLEWARE
// ================================

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, "secretKey");
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}

// ================================
// PROTECTED ROUTE
// ================================

app.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Protected data", user: req.user });
});

// START SERVER
app.listen(3000, () => {
  console.log("Server running...");
});
```

---

# 15. Interview Questions

1. What is authentication vs authorization?
2. What is JWT?
3. How JWT works?
4. Why hash passwords?
5. What is bcrypt?
6. What is middleware in auth?
7. What is token expiration?
8. Where to store token?
9. What is stateless auth?
10. How to secure APIs?

---

# ✅ Summary (Clear Thinking)

- Auth = identity
- Authorization = permission
- JWT = secure communication

Now you can:

- Build secure APIs
- Protect routes
- Handle login systems

---
