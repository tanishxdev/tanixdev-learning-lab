# Chapter 12 — File Upload (Images / Files Handling)

---

# 1. Problem (Why this chapter exists)

Till now:

- You can store text data (MongoDB)
- You can build APIs

### ❌ But real apps need:

```text
- Upload profile images
- Upload product images
- Upload documents (PDF, etc.)
```

---

## ❌ Problem

Node **cannot handle file uploads directly using JSON**

```js
req.body ❌ (only text data)
```

---

# 2. Concept (Core Idea)

## 🧠 Definition — File Upload

> Sending files from client → server using **multipart/form-data**

---

## 🧠 Solution Tool

We use:

```text
multer (middleware)
```

---

## 🧠 What multer does

- Parses file from request
- Saves file on server
- Adds file info to `req.file`

---

# 3. Installing Multer

---

## ▶️ Command

```bash
npm install multer
```

---

# 4. Basic Setup

---

## 📄 `app.js`

```javascript
// ================================
// Chapter 12 - File Upload Setup
// ================================

const express = require("express");
const multer = require("multer");

const app = express();
```

---

# 5. Storage Configuration (VERY IMPORTANT)

---

# 🧠 Problem

Where to store uploaded files?

---

# 🧠 Solution

Configure storage using multer

---

## 📄 Code

```javascript
// Storage config
const storage = multer.diskStorage({
  // Destination folder
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  // File name
  filename: function (req, file, cb) {
    // unique file name
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Initialize upload
const upload = multer({ storage: storage });
```

---

# 6. Upload Single File

---

## 📄 Route

```javascript
// Upload route
app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    message: "File uploaded",
    file: req.file,
  });
});
```

---

## 🧠 Important

```text
"image" = field name from frontend
```

---

# 7. Upload Multiple Files

---

## 📄 Example

```javascript
app.post("/upload-multiple", upload.array("images", 3), (req, res) => {
  res.json({
    files: req.files,
  });
});
```

---

# 8. File Validation (IMPORTANT)

---

# 🧠 Problem

User may upload:

- malware
- wrong file type

---

# 🧠 Solution

Filter files

---

## 📄 Code

```javascript
const upload = multer({
  storage: storage,

  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Only images allowed"), false);
    }
  },
});
```

---

# 9. File Size Limit

---

## 📄 Code

```javascript
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024, // 1MB
  },
});
```

---

# 10. Real Backend Thinking

---

## 🧠 Flow

```text
Client → Upload file → Multer → Store in server → Save path in DB
```

---

## 🧠 Important Pattern

```text
File → uploads folder
Path → MongoDB
```

---

# 11. Integrating with MongoDB

---

## 📄 Example

```javascript
const Book = require("./models/book.model");

app.post("/books", upload.single("image"), async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
    image: req.file.filename, // save file name
  });

  await book.save();

  res.json(book);
});
```

---

# 12. Serving Uploaded Files

---

# 🧠 Problem

Uploaded files are not accessible in browser

---

# 🧠 Solution

Use static middleware

---

## 📄 Code

```javascript
app.use("/uploads", express.static("uploads"));
```

---

## 🌐 Access

```text
http://localhost:3000/uploads/filename.jpg
```

---

# 13. Mini Practice (DO THIS)

---

## 📁 Create

```text
uploads/
```

---

## Task:

- Upload image
- Save filename in DB
- Access image via URL

---

# 14. Common Mistakes

---

### ❌ Forgetting uploads folder

---

### ❌ Wrong field name

```text
upload.single("file") vs frontend "image"
```

---

### ❌ Not handling errors

---

### ❌ Not setting static folder

---

# 15. Mental Model (VERY IMPORTANT)

```text
File → Multer → Folder → DB → URL
```

---

## 🧠 Backend Flow

```text
Upload → Store → Save path → Serve file
```

---

# 16. Final File (Clean Setup)

---

## 📄 `app.js`

```javascript
// ================================
// Chapter 12 - File Upload System
// ================================

const express = require("express");
const multer = require("multer");

const app = express();

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Upload config
const upload = multer({ storage });

// Serve files
app.use("/uploads", express.static("uploads"));

// Upload route
app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    message: "File uploaded",
    file: req.file,
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running...");
});
```

---

# 17. Interview Questions

1. What is multer?
2. How file upload works in Node?
3. What is multipart/form-data?
4. Difference between req.body and req.file?
5. How to validate file type?
6. How to limit file size?
7. Where to store files?
8. How to serve static files?
9. What is diskStorage?
10. How to store file path in DB?

---

# ✅ Summary (Clear Thinking)

- JSON → text only
- Files → multer required
- Upload flow:

```text
Client → multer → server → DB → URL
```

Now you can:

- Upload images
- Store files
- Build real-world features

---
