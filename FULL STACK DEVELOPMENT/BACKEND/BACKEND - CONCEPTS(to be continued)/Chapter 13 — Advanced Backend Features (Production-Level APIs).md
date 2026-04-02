# Chapter 13 — Advanced Backend Features (Production-Level APIs)

---

# 1. Problem (Why this chapter exists)

Till now:

- You can build APIs
- You can store data
- You can upload files

### ❌ But real apps need MORE:

```text
- User wants to change password
- User wants to delete old images
- API should return limited + sorted data
```

If not:

- App becomes slow
- Data becomes messy
- Security issues arise

---

# 2. What We Will Build

---

## 🧠 Features

```text
1. Change Password
2. Delete Image
3. Sorting
4. Pagination
```

---

# 3. CHANGE PASSWORD

---

# 🧠 Problem

User wants to update password securely

---

# 🧠 Steps

```text
1. Verify old password
2. Hash new password
3. Save new password
```

---

## 📄 Route

```javascript
// Change password
app.put("/change-password", async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  // Find user
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Verify old password
  const isMatch = await bcrypt.compare(oldPassword, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Wrong password" });
  }

  // Hash new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  user.password = hashedPassword;

  await user.save();

  res.json({ message: "Password updated" });
});
```

---

# 4. DELETE IMAGE (IMPORTANT)

---

# 🧠 Problem

When updating/deleting:

- Old image still exists on server

→ Memory waste

---

# 🧠 Solution

Delete file using `fs`

---

## 📄 Example

```javascript
const fs = require("fs");
const path = require("path");

// Delete image
function deleteImage(filename) {
  const filePath = path.join(__dirname, "uploads", filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.log("Error deleting file:", err);
    } else {
      console.log("File deleted");
    }
  });
}
```

---

## 📄 Use in route

```javascript
// Delete book with image
app.delete("/books/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book && book.image) {
    deleteImage(book.image);
  }

  await Book.findByIdAndDelete(req.params.id);

  res.json({ message: "Deleted" });
});
```

---

# 5. SORTING (VERY IMPORTANT)

---

# 🧠 Problem

User wants:

```text
- Price low to high
- Latest first
```

---

# 🧠 Solution

Use `.sort()`

---

## 📄 Example

```javascript
// Sorting books
app.get("/books", async (req, res) => {
  const sortBy = req.query.sortBy || "price";

  const books = await Book.find().sort(sortBy);

  res.json(books);
});
```

---

## 🌐 Example URL

```text
/books?sortBy=price
/books?sortBy=-price  (descending)
```

---

# 6. PAGINATION (VERY IMPORTANT)

---

# 🧠 Problem

```text
1000+ records → slow response
```

---

# 🧠 Solution

Return limited data

---

## 📄 Example

```javascript
app.get("/books", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;

  const skip = (page - 1) * limit;

  const books = await Book.find().skip(skip).limit(limit);

  res.json(books);
});
```

---

## 🌐 Example

```text
/books?page=1
/books?page=2
```

---

# 7. Combining Sorting + Pagination

---

## 📄 Example

```javascript
app.get("/books", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const sortBy = req.query.sortBy || "price";

  const skip = (page - 1) * limit;

  const books = await Book.find().sort(sortBy).skip(skip).limit(limit);

  res.json(books);
});
```

---

# 8. Real Backend Thinking

---

## 🧠 Flow

```text
Client → Query params → DB query → Filtered result
```

---

## 🧠 Industry Pattern

```text
Filtering → Sorting → Pagination
```

---

# 9. Mini Practice (DO THIS)

---

## Tasks:

- Add pagination to books API
- Add sorting
- Delete image when deleting book
- Implement change password

---

# 10. Common Mistakes

---

### ❌ Not validating query params

---

### ❌ Forgetting to delete file

---

### ❌ Not hashing new password

---

### ❌ Using wrong skip logic

---

# 11. Mental Model (VERY IMPORTANT)

```text
Data control = filtering + sorting + pagination
```

---

## 🧠 Backend Optimization

```text
Less data → faster API → better UX
```

---

# 12. Final File (Production Style Upgrade)

---

## 📄 `app.js`

```javascript
// ================================
// Chapter 13 - Advanced Features
// ================================

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());

// ================================
// DELETE IMAGE FUNCTION
// ================================

function deleteImage(filename) {
  const filePath = path.join(__dirname, "uploads", filename);

  fs.unlink(filePath, (err) => {
    if (err) console.log(err);
  });
}

// ================================
// SORT + PAGINATION
// ================================

app.get("/books", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const sortBy = req.query.sortBy || "price";

  const skip = (page - 1) * limit;

  const books = await Book.find().sort(sortBy).skip(skip).limit(limit);

  res.json(books);
});

// ================================
// CHANGE PASSWORD
// ================================

app.put("/change-password", async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  const user = await User.findOne({ email });

  const isMatch = await bcrypt.compare(oldPassword, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Wrong password" });
  }

  user.password = await bcrypt.hash(newPassword, 10);

  await user.save();

  res.json({ message: "Password updated" });
});
```

---

# 13. Interview Questions

1. What is pagination?
2. Why pagination is important?
3. What is sorting in DB?
4. How to implement skip & limit?
5. How to delete file in Node?
6. How to change password securely?
7. Why hashing is important?
8. What is query param?
9. How to optimize API performance?
10. What is filtering?

---

# ✅ Summary (Clear Thinking)

You upgraded backend to:

- Secure (change password)
- Clean (delete unused files)
- Fast (pagination)
- Flexible (sorting)

---
