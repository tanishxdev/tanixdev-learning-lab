# Chapter 10 — Project: Book Store API (Full Backend Integration)

---

# 1. Problem (Why this chapter exists)

Till now you learned:

- Express (routes)
- REST API (CRUD)
- MongoDB + Mongoose (database)

### ❌ Problem

Everything is separate knowledge.

But in real world:

```text
You don’t write isolated code
You build COMPLETE backend systems
```

---

# 2. Goal of This Chapter

Build a **real backend project**:

```text
📚 Book Store API
```

---

## 🧠 What we will implement

- Create book
- Get all books
- Get single book
- Update book
- Delete book

---

# 3. Project Thinking (VERY IMPORTANT)

---

## 🧠 Real Backend Structure

```text
Request
  ↓
Route
  ↓
Controller (logic)
  ↓
Model (DB)
  ↓
Response
```

---

## ❗ Important

We will still keep it **simple (phase 1)**
(No controllers folder yet, but mindset same)

---

# 4. Project Setup (Same Repo)

---

## 📁 Structure

```text
backend-learning/
│
├── app.js
├── models/
│   └── book.model.js
```

---

# 5. Step 1 — Create Book Model

---

## 📄 `models/book.model.js`

```javascript
// ================================
// Book Model (Mongoose)
// ================================

const mongoose = require("mongoose");

// Define schema
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // auto add createdAt, updatedAt
  },
);

// Create model
const Book = mongoose.model("Book", bookSchema);

// Export
module.exports = Book;
```

---

# 6. Step 2 — Setup Server

---

## 📄 `app.js`

```javascript
// ================================
// Chapter 10 - Book Store API
// ================================

const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/book.model");

const app = express();

// Middleware
app.use(express.json());

// Connect DB
mongoose
  .connect("mongodb://127.0.0.1:27017/bookDB")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));
```

---

# 7. Step 3 — Create Book (POST)

---

## 🧠 Problem

User wants to add a book

---

## 📄 Route

```javascript
// Create book
app.post("/books", async (req, res) => {
  try {
    const book = new Book(req.body);

    await book.save();

    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

---

# 8. Step 4 — Get All Books (GET)

---

```javascript
// Get all books
app.get("/books", async (req, res) => {
  const books = await Book.find();

  res.json(books);
});
```

---

# 9. Step 5 — Get Single Book

---

```javascript
// Get one book
app.get("/books/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
});
```

---

# 10. Step 6 — Update Book

---

```javascript
// Update book
app.put("/books/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }, // return updated doc
  );

  res.json(book);
});
```

---

# 11. Step 7 — Delete Book

---

```javascript
// Delete book
app.delete("/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);

  res.json({ message: "Book deleted" });
});
```

---

# 12. Final Server Start

---

```javascript
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

# 13. Full Final File (IMPORTANT — SAVE THIS)

---

## 📄 `app.js`

```javascript
// ================================
// Chapter 10 - Book Store API
// ================================

const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/book.model");

const app = express();

// Middleware
app.use(express.json());

// DB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/bookDB")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// ================================
// ROUTES
// ================================

// CREATE BOOK
app.post("/books", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL BOOKS
app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// GET ONE BOOK
app.get("/books/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
});

// UPDATE BOOK
app.put("/books/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(book);
});

// DELETE BOOK
app.delete("/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
});

// START SERVER
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

# 14. Testing APIs

---

## 🧠 Example Request

### POST

```json
{
  "title": "Node Basics",
  "author": "Tanish",
  "price": 499
}
```

---

# 15. Real Backend Thinking

---

## 🧠 What you just built

```text
Full CRUD Backend API
```

This is:

- Real project
- Portfolio ready
- Interview ready

---

# 16. Common Mistakes

---

### ❌ Not using try-catch

---

### ❌ Not validating input

---

### ❌ Not checking null

---

# 17. Mental Model (VERY IMPORTANT)

```text
Model = Data structure
Route = API endpoint
DB = storage
```

---

## 🧠 Flow

```text
Client → API → Model → DB → Response
```

---

# 18. Interview Questions

1. How to design REST API?
2. What is CRUD?
3. What is Mongoose model?
4. What is schema validation?
5. How to update data?
6. How to handle errors?
7. What is MVC pattern?
8. What is REST structure?
9. How to structure backend project?
10. How to connect DB?

---

# ✅ Summary (Clear Thinking)

You combined:

- Express
- REST API
- MongoDB

Now you can:

- Build real backend APIs
- Handle database
- Structure project

---
