# Chapter 8 — REST API Development (Core Backend Skill)

---

# 1. Problem (Why this chapter exists)

Till now:

- You built server (Express)
- You rendered UI (EJS)

### ❌ But real-world apps need:

Frontend (React / Mobile) does NOT use EJS
Instead it needs:

```text
Data (JSON) over APIs
```

Example:

```text
Instagram → fetch posts
Amazon → fetch products
Swiggy → fetch restaurants
```

---

# 2. Concept (Core Idea)

## 🧠 Definition — API

> API = way for frontend and backend to communicate

---

## 🧠 Definition — REST API

> REST = architectural style using HTTP methods to perform operations

---

## 🧠 Core Idea

```text
URL + HTTP Method = Action
```

---

# 3. REST Principles (Important)

---

## 🧠 Resource-Based Design

Everything is a **resource**

```text
/users
/products
/orders
```

---

## 🧠 HTTP Methods

| Method | Meaning        |
| ------ | -------------- |
| GET    | Read data      |
| POST   | Create data    |
| PUT    | Update full    |
| PATCH  | Update partial |
| DELETE | Remove         |

---

# 4. Example API Design

---

## 🧠 User API

| Action        | Method | Route      |
| ------------- | ------ | ---------- |
| Get all users | GET    | /users     |
| Get one user  | GET    | /users/:id |
| Create user   | POST   | /users     |
| Update user   | PUT    | /users/:id |
| Delete user   | DELETE | /users/:id |

---

# 5. Building First REST API

---

## 📄 `app.js`

```javascript
// ================================
// Chapter 8 - Basic REST API
// ================================

const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Fake database (array)
let users = [
  { id: 1, name: "Tanish" },
  { id: 2, name: "Aman" },
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET single user
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// POST create user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// PUT update user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name;

  res.json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  users = users.filter((u) => u.id !== id);

  res.json({ message: "User deleted" });
});

// Start server
app.listen(3000, () => {
  console.log("API running on port 3000");
});
```

---

# 6. Testing APIs (VERY IMPORTANT)

---

## 🧠 Tools

- Postman
- Thunder Client
- curl

---

## Example Requests

---

### GET all users

```bash
GET http://localhost:3000/users
```

---

### POST create user

```json
POST http://localhost:3000/users

{
  "name": "Rahul"
}
```

---

# 7. Status Codes (Important)

---

| Code | Meaning      |
| ---- | ------------ |
| 200  | OK           |
| 201  | Created      |
| 400  | Bad request  |
| 404  | Not found    |
| 500  | Server error |

---

# 8. Middleware in APIs

---

## 🧠 Example — Logger

```javascript
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
```

---

## 🧠 Example — Validation

```javascript
function validateUser(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ message: "Name required" });
  }

  next();
}

// Use it
app.post("/users", validateUser, (req, res) => {
  // logic
});
```

---

# 9. Real Backend Thinking

---

## 🧠 Flow

```text
Client → Request → Middleware → Controller → DB → Response
```

---

## 🧠 Industry Pattern

```text
Route → Controller → Service → Database
```

(Currently we are basic level)

---

# 10. Mini Practice (DO THIS)

---

## 📁 Same repo

---

## Task:

Build API for:

```text
/products
```

---

## Requirements:

- GET all products
- POST new product
- DELETE product

---

# 11. Common Mistakes

---

### ❌ Not parsing JSON

```js
req.body undefined ❌
```

✔ Fix:

```js
app.use(express.json());
```

---

### ❌ Not handling errors

Always:

```js
if (!data) return res.status(404);
```

---

### ❌ Using wrong HTTP method

---

# 12. Mental Model (VERY IMPORTANT)

```text
Frontend ↔ Backend via APIs
```

---

## 🧠 REST Thinking

```text
Resource → URL
Action → HTTP Method
```

---

# 13. Final File (Clean API)

---

## 📄 `app.js`

```javascript
// ================================
// Chapter 8 - Final REST API
// ================================

const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// In-memory DB
let users = [];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST create user
app.post("/users", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Name required" });
  }

  const user = {
    id: Date.now(),
    name: req.body.name,
  };

  users.push(user);

  res.status(201).json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  users = users.filter((u) => u.id !== id);

  res.json({ message: "Deleted" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running...");
});
```

---

# 14. Interview Questions

1. What is REST API?
2. Difference between GET and POST?
3. What is PUT vs PATCH?
4. What are status codes?
5. What is middleware in APIs?
6. What is req.body?
7. What is route parameter?
8. What is JSON?
9. What is stateless API?
10. REST vs GraphQL?

---

# ✅ Summary (Clear Thinking)

- Backend communicates via APIs
- REST = standard way
- Express makes API building easy

Now you can:

- Build CRUD APIs
- Connect frontend later
- Build real backend systems

---
