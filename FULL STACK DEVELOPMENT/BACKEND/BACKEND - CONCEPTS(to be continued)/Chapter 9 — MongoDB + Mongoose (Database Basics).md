# Chapter 9 — MongoDB + Mongoose (Database Basics)

---

# 1. Problem (Why this chapter exists)

Till now in Chapter 8:

```js id="m6d8jw"
let users = [];
```

### ❌ Problems

- Data is stored in **memory**
- Server restart → data lost
- Not scalable
- Not real-world

---

# 2. Concept (Core Idea)

## 🧠 Definition — Database

> A system to **store, manage, and retrieve data permanently**

---

## 🧠 Definition — MongoDB

> A **NoSQL database** that stores data in **JSON-like documents**

---

## 🧠 Definition — Mongoose

> A library (ODM) that helps interact with MongoDB using **models & schemas**

---

# 3. SQL vs NoSQL (Clear Thinking)

| Feature   | SQL    | MongoDB   |
| --------- | ------ | --------- |
| Structure | Tables | Documents |
| Schema    | Fixed  | Flexible  |
| Example   | MySQL  | MongoDB   |

---

# 4. MongoDB Data Structure

---

## 🧠 Structure

```text id="q39mre"
Database
   ↓
Collection (like table)
   ↓
Document (like row)
```

---

## 📄 Example Document

```json id="8p0o1k"
{
  "name": "Tanish",
  "age": 21
}
```

---

# 5. Installing MongoDB

---

## Options:

- Local install (MongoDB Compass)
- OR MongoDB Atlas (cloud)

---

## 🧠 We’ll use (recommended):

👉 MongoDB Atlas (cloud DB)

---

# 6. Installing Mongoose

---

## ▶️ Command

```bash id="0o2m0n"
npm install mongoose
```

---

# 7. Connecting to MongoDB

---

## 📄 `db.js`

```javascript id="3v8z4u"
// ================================
// Database connection
// ================================

const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/backendDB")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Connection Error:", err);
  });
```

---

## 🧠 Important

- `backendDB` → database name
- Auto-created if not exists

---

# 8. Schema & Model (VERY IMPORTANT)

---

# 🧠 Problem

MongoDB is flexible → but we need structure

---

# 🧠 Solution

Use **Schema**

---

## 🧠 Definition — Schema

> Defines structure of data

---

## 🧠 Definition — Model

> Interface to interact with collection

---

## 📄 Example

```javascript id="ozbj4z"
// ================================
// user.model.js
// ================================

const mongoose = require("mongoose");

// Define schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
  },
});

// Create model
const User = mongoose.model("User", userSchema);

// Export model
module.exports = User;
```

---

# 9. CRUD Operations with Mongoose

---

# 🧠 CREATE

---

## 📄 Example

```javascript id="aq7eug"
const User = require("./user.model");

async function createUser() {
  const user = new User({
    name: "Tanish",
    age: 21,
  });

  await user.save();

  console.log("User saved");
}
```

---

# 🧠 READ

---

## 📄 Example

```javascript id="a5rqvo"
const users = await User.find();

console.log(users);
```

---

# 🧠 UPDATE

---

## 📄 Example

```javascript id="9r4npa"
await User.findByIdAndUpdate(id, {
  name: "Updated Name",
});
```

---

# 🧠 DELETE

---

## 📄 Example

```javascript id="g1emva"
await User.findByIdAndDelete(id);
```

---

# 10. Integrating with Express

---

## 📄 `app.js`

```javascript id="srlty6"
// ================================
// Express + MongoDB
// ================================

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/backendDB");

// Schema
const userSchema = new mongoose.Schema({
  name: String,
});

// Model
const User = mongoose.model("User", userSchema);

// Create user
app.post("/users", async (req, res) => {
  const user = new User(req.body);

  await user.save();

  res.json(user);
});

// Get users
app.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});

// Start server
app.listen(3000, () => {
  console.log("Server running...");
});
```

---

# 11. Real Backend Thinking

---

## 🧠 Flow

```text id="kl22ji"
Client → API → Mongoose → MongoDB → Data
```

---

## 🧠 Industry Pattern

```text id="m9ktol"
Route → Controller → Model → Database
```

---

# 12. Mini Practice (DO THIS)

---

## 📁 Same repo

---

## Task:

Build:

```text id="80h2ey"
/products API with MongoDB
```

---

## Fields:

```json id="k3id7y"
{
  "name": "Product",
  "price": 100
}
```

---

# 13. Common Mistakes

---

### ❌ Not awaiting DB calls

```js id="g2mrx4"
User.find() ❌
```

✔

```js id="67g4sy"
await User.find() ✅
```

---

### ❌ Not handling errors

Always use try-catch

---

### ❌ Wrong connection string

---

# 14. Mental Model (VERY IMPORTANT)

```text id="z9f1q6"
Schema → defines structure
Model → talks to DB
```

---

## 🧠 Flow

```text id="3d2c44"
Request → Model → DB → Response
```

---

# 15. Final File (Clean Setup)

---

## 📄 `app.js`

```javascript id="o3ff0r"
// ================================
// Chapter 9 - MongoDB Setup
// ================================

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// Connect DB
mongoose
  .connect("mongodb://127.0.0.1:27017/backendDB")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Model
const User = mongoose.model("User", userSchema);

// Routes

// Create
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Delete
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running...");
});
```

---

# 16. Interview Questions

1. What is MongoDB?
2. What is NoSQL?
3. What is schema?
4. What is model?
5. What is Mongoose?
6. Difference between SQL and MongoDB?
7. What is document?
8. How to connect MongoDB?
9. What is CRUD?
10. What is ODM?

---

# ✅ Summary (Clear Thinking)

- Arrays → temporary
- MongoDB → permanent storage
- Mongoose → structured interaction

Now you can:

- Store real data
- Build real backend
- Scale your APIs

---
