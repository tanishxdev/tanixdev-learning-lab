# Topic 15 MongoDB and Mongoose Basics

---

### **Concept**

**What is MongoDB?**

* **MongoDB** is a **NoSQL document-oriented database** that stores data in **JSON-like objects** (BSON format).
* Instead of tables and rows (like SQL), MongoDB uses:

  * **Database** → contains multiple collections
  * **Collection** → similar to a table
  * **Document** → JSON record (key-value pairs)

---

**What is Mongoose?**

* **Mongoose** is an **ODM (Object Data Modeling)** library for Node.js and MongoDB.
* It simplifies:

  * Connecting to MongoDB
  * Defining **schemas**
  * Performing **CRUD operations**
  * Validating data

---

### **Why MongoDB + Mongoose?**

| Need               | MongoDB Solution                           |
| ------------------ | ------------------------------------------ |
| Flexible schema    | No fixed columns, stores variable fields   |
| Easy scaling       | Horizontally scalable via sharding         |
| JSON-based         | Directly compatible with JavaScript        |
| Simple integration | Works seamlessly with Express via Mongoose |

---

### **How It Works**

1. Connect Node.js app to MongoDB using `mongoose.connect()`.
2. Define a **Schema** (structure of documents).
3. Create a **Model** (interface to interact with the database).
4. Perform CRUD operations.

### Concept: Schema vs Model
| Term       | Meaning                                 | Purpose                                                                      |
| ---------- | --------------------------------------- | ---------------------------------------------------------------------------- |
| **Schema** | Structure/blueprint of documents        | Defines *what fields* a document will have (like a table structure)          |
| **Model**  | A constructor (class) built from schema | Used to *create*, *read*, *update*, and *delete* documents in the collection |

---
### **Folder Setup**

```
mongo-demo/
│
├── app.js
└── models/
    └── userModel.js
```

---

### **Step 1: Install Packages**

```bash
npm install express mongoose
```

---

### **Code Example 1: Connect to MongoDB**

**File:** `app.js`

```js
// ===========================
// Example: MongoDB Connection
// ===========================

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/userDB')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.log('Connection Error:', err));

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

---

### **Code Example 2: Defining Schema & Model**

**File:** `models/userModel.js`

```js
// ===========================
// User Schema & Model
// ===========================

const mongoose = require('mongoose');

// Define schema (structure of documents)
const userSchema = new mongoose.Schema({
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
}, { timestamps: true });

// Create model (used for DB operations)
const User = mongoose.model('User', userSchema);

module.exports = User;
```

---

### **Code Example 3: CRUD Operations with Mongoose**

**File:** `app.js`

```js
// ===========================
// CRUD with Mongoose
// ===========================

const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');

const app = express();
app.use(express.json());

// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/userDB')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('Error:', err));

// CREATE - Add new user
app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ - Get all users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// READ - Get user by ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID' });
  }
});

// UPDATE - Update user
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'User updated', user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - Remove user
app.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

app.listen(4000, () => console.log('API running at http://localhost:4000'));
```

---

### **Code Example 4: Query & Filter Data**

**Common Mongoose Queries:**

```js
await User.find({ age: { $gte: 18 } });     // Filter users age ≥ 18
await User.find().sort({ name: 1 });        // Sort by name (ascending)
await User.find().limit(5);                 // Limit results
await User.findOne({ email: 'abc@example.com' }); // Find single record
```

---

### **Mini Project: Simple Book Store API**

**Goal:** Create a CRUD REST API for managing books in MongoDB.

**Folder:**

```
bookstore-api/
│
├── app.js
└── models/
    └── bookModel.js
```

**File:** `models/bookModel.js`

```js
// ===========================
// Book Model
// ===========================

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  price: { type: Number, min: 0 },
  inStock: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
```

**File:** `app.js`

```js
// ===========================
// Mini Project: Book Store API
// ===========================

const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/bookStore')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('DB Error:', err));

// GET all books
app.get('/api/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// POST new book
app.post('/api/books', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE book
app.put('/api/books/:id', async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedBook);
});

// DELETE book
app.delete('/api/books/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted' });
});

app.listen(5000, () => console.log('Book API running on http://localhost:5000'));
```

---

### **Dependencies**

| Package      | Purpose                 |
| ------------ | ----------------------- |
| **express**  | API creation            |
| **mongoose** | MongoDB object modeling |
| **mongodb**  | Database engine         |

---

### **Notes**

* MongoDB stores flexible JSON-like documents — no fixed schema required.
* Mongoose adds structure and validation through schemas.
* Common methods:

  * `.find()`, `.findById()`, `.create()`, `.updateOne()`, `.deleteOne()`
* `mongoose.connect()` returns a promise — always handle with `.then()` or `async/await`.
* For cloud use, connect via **MongoDB Atlas** connection string.
