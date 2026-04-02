# Chapter 6 — Express.js (Backend Framework)

---

# 1. Problem (Why this chapter exists)

In Chapter 3, you built a server using `http` module:

```js id="ex0h6o"
http.createServer((req, res) => {
  res.end("Hello");
});
```

### ❌ Problems with raw Node HTTP

- Routing is manual
- Hard to manage multiple APIs
- No middleware system
- Code becomes messy quickly

Example:

```js id="1h2h7x"
if (req.url === "/users") { ... }
else if (req.url === "/products") { ... }
```

This is **not scalable**

---

# 2. Concept (Core Idea)

## 🧠 Definition — Express.js

> Express is a **minimal web framework** built on top of Node.js to simplify backend development.

---

## 🧠 What Express provides

- Routing system
- Middleware system
- Cleaner API handling
- Faster development

---

# 3. Solution (Why Express)

Instead of:

```text id="2m3m4n"
Manual routing + manual headers + messy code
```

You get:

```text id="5q6w7e"
Clean routes + middleware + structured backend
```

---

# 4. Installing Express

---

## ▶️ Command

```bash id="p8z2mk"
npm install express
```

---

# 5. Basic Express Server

---

## 📄 `app.js`

```javascript id="y4m1ke"
// ================================
// Chapter 6 - Basic Express Server
// ================================

// Import express
const express = require("express");

// Create app
const app = express();

// Create route
app.get("/", (req, res) => {
  // Send response
  res.send("Hello from Express");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

## ▶️ Run

```bash id="0v6a4r"
node app.js
```

---

## 🌐 Open

```text id="6sl2n7"
http://localhost:3000
```

---

# 6. Understanding Routing

---

# 🧠 Concept

> Routing = handling different URLs

---

## 📄 Example

```javascript id="r3nhy7"
const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Users route
app.get("/users", (req, res) => {
  res.send("Users Page");
});

// Products route
app.get("/products", (req, res) => {
  res.send("Products Page");
});

app.listen(3000);
```

---

## 🧠 Flow

```text id="szs4w4"
/users → users handler
/products → products handler
```

---

# 7. Request & Response Object

---

## 🧠 req (request)

Contains:

- params
- query
- body
- headers

---

## 🧠 res (response)

Used to:

- send data
- send JSON
- set status

---

## 📄 Example

```javascript id="pbkz8h"
app.get("/user", (req, res) => {
  // Access query
  const name = req.query.name;

  res.send("Hello " + name);
});
```

---

## 🌐 URL

```text id="b0fyw2"
http://localhost:3000/user?name=Tanish
```

---

## Output

```text id="phj8ol"
Hello Tanish
```

---

# 8. Sending JSON (Important)

---

## 📄 Example

```javascript id="u6n4br"
app.get("/api", (req, res) => {
  res.json({
    name: "Tanish",
    role: "Developer",
  });
});
```

---

# 9. Middleware (MOST IMPORTANT)

---

# 🧠 Problem

You want to:

- Log requests
- Authenticate users
- Parse data

---

# 🧠 Definition — Middleware

> Function that runs **between request and response**

---

## 📄 Example

```javascript id="6y0o1p"
// Middleware
app.use((req, res, next) => {
  console.log("Request received:", req.url);

  // Pass control
  next();
});
```

---

## 🧠 Flow

```text id="grw8yy"
Request → Middleware → Route → Response
```

---

# 10. Multiple Middleware

---

## 📄 Example

```javascript id="d1i3v8"
app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});
```

---

# 11. Route Parameters

---

## 📄 Example

```javascript id="cb8j3r"
app.get("/user/:id", (req, res) => {
  const id = req.params.id;

  res.send("User ID: " + id);
});
```

---

## 🌐 URL

```text id="w6r09h"
http://localhost:3000/user/101
```

---

## Output

```text id="v4x5tq"
User ID: 101
```

---

# 12. Real Backend Thinking

---

## 🧠 Example

```text id="u0mnzt"
/login → authenticate
/products → fetch products
/orders → create order
```

---

## Express gives:

```text id="l7kqpo"
Clean API structure
```

---

# 13. Mini Practice (DO THIS)

---

## 📁 Same repo

Update `app.js`

---

## 📄 Code

```javascript id="4rqk0c"
// ================================
// Practice Express
// ================================

const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log("Incoming request:", req.url);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/user/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

// Start server
app.listen(3000, () => {
  console.log("Server running...");
});
```

---

# 14. Common Mistakes

---

### ❌ Forgetting next()

```js id="zhq1dw"
app.use((req, res) => {
  console.log("Hello");
});
```

→ Request will hang

---

### ❌ Wrong method

```js id="h3r6ro"
app.post("/") ❌ when using GET
```

---

### ❌ Not sending response

Always:

```js id="qbn1ju"
res.send() / res.json();
```

---

# 15. Mental Model (VERY IMPORTANT)

```text id="c5i0kj"
Express = Router + Middleware System
```

---

## 🧠 Backend Flow

```text id="zz5x9n"
Request → Middleware → Route → Response
```

---

# 16. Final File (Clean Production Style)

---

## 📄 `app.js`

```javascript id="rwuvl1"
// ================================
// Chapter 6 - Express Server
// ================================

// Import express
const express = require("express");

// Create app
const app = express();

// Global middleware (logs all requests)
app.use((req, res, next) => {
  console.log("Request:", req.method, req.url);
  next();
});

// Home route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// API route
app.get("/api/user", (req, res) => {
  res.json({
    name: "Tanish",
    role: "Backend Dev",
  });
});

// Dynamic route
app.get("/user/:id", (req, res) => {
  res.send("User ID: " + req.params.id);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

# 17. Interview Questions

1. What is Express.js?
2. Why use Express over http module?
3. What is middleware?
4. What is next()?
5. Difference between req and res?
6. What is routing?
7. What is REST API?
8. What is app.use()?
9. Difference between GET and POST?
10. How Express handles requests?

---

# ✅ Summary (Clear Thinking)

- Node HTTP → low-level
- Express → clean abstraction

You now have:

- Routing system
- Middleware system
- API creation capability

---
