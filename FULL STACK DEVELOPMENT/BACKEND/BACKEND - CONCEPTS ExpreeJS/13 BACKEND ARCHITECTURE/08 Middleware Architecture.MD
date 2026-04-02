# Backend Architecture

# Topic 8 — Middleware Architecture (Express Deep Dive)

Middleware is **the core architectural idea behind Express**.
Without middleware, Express would just be a simple HTTP router.

Understanding middleware deeply gives you **full control over request processing**.

---

# 1. What is Middleware?

## Simple Definition

Middleware is a function that **runs between receiving a request and sending a response**.

It can:

- read request
- modify request
- modify response
- stop request
- pass request to next layer

---

## Basic Signature

In Express a middleware function looks like:

```javascript
function middleware(req, res, next) {
  // logic
  next();
}
```

Parameters:

| Parameter | Meaning                                         |
| --------- | ----------------------------------------------- |
| req       | request object                                  |
| res       | response object                                 |
| next      | function that passes control to next middleware |

---

# 2. Middleware Mental Model

Think of middleware like **security checkpoints at an airport**.

```text
Passenger
 ↓
Security check
 ↓
Passport check
 ↓
Boarding gate
```

Mapping:

```text
Request
 ↓
Logger middleware
 ↓
Authentication middleware
 ↓
Validation middleware
 ↓
Controller
 ↓
Response
```

---

# 3. Middleware Pipeline

Express executes middleware **in order**.

Pipeline example:

```text
Request
 ↓
Middleware 1
 ↓
Middleware 2
 ↓
Middleware 3
 ↓
Route Handler
 ↓
Response
```

Each middleware must call:

```javascript
next();
```

Otherwise request stops.

---

# 4. Simple Middleware Example

```javascript
const express = require("express");

const app = express();

// middleware
app.use((req, res, next) => {
  console.log("Middleware executed");

  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000);
```

Flow:

```text
Request
 ↓
Middleware
 ↓
Route
 ↓
Response
```

---

# 5. Why Middleware Exists

Middleware solves many backend concerns:

```text
Logging
Authentication
Authorization
Validation
Error handling
Rate limiting
Security
```

Without middleware these concerns would live inside controllers.

That would create **huge messy controllers**.

---

# 6. Types of Middleware

Express has **five types of middleware**.

---

# 6.1 Application-Level Middleware

Runs for **all routes**.

Example:

```javascript
app.use((req, res, next) => {
  console.log("Application middleware");

  next();
});
```

Runs on every request.

---

# 6.2 Route-Level Middleware

Runs only for **specific route**.

Example:

```javascript
app.get("/users", authMiddleware, controller);
```

Flow:

```text
Request
 ↓
authMiddleware
 ↓
Controller
```

---

# 6.3 Built-in Middleware

Express provides built-in middleware.

Examples:

```text
express.json()
express.urlencoded()
express.static()
```

Example:

```javascript
app.use(express.json());
```

This middleware parses **JSON request body**.

---

# 6.4 Third-Party Middleware

External packages.

Examples:

```text
cors
helmet
morgan
cookie-parser
express-rate-limit
```

Example:

```javascript
const cors = require("cors");

app.use(cors());
```

---

# 6.5 Error Middleware

Handles errors.

Signature:

```javascript
function(err, req, res, next)
```

Example:

```javascript
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  });
});
```

---

# 7. Middleware Execution Order

Order matters.

Example:

```javascript
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
```

Execution order:

```text
middleware1
middleware2
middleware3
```

---

# Example Code

```javascript
app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});
```

Output:

```text
First middleware
Second middleware
```

---

# 8. Middleware with Express Router

Example:

```javascript
const router = express.Router();

router.use(authMiddleware);

router.get("/profile", controller);
```

Flow:

```text
Request
 ↓
Router middleware
 ↓
Route handler
```

---

# 9. Custom Middleware Example

Example: **Logger middleware**

```javascript
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);

  next();
}
```

Usage:

```javascript
app.use(logger);
```

Every request will log:

```text
GET /users
POST /login
```

---

# 10. Authentication Middleware Example

```javascript
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
}
```

Used for protected routes.

---

# 11. Validation Middleware Example

```javascript
function validateUser(req, res, next) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "Name required",
    });
  }

  next();
}
```

---

# 12. Real World Middleware Pipeline

Example: **Login request**

```text
POST /login
```

Pipeline:

```text
Request
 ↓
Logger middleware
 ↓
Rate limiter
 ↓
Body parser
 ↓
Validation middleware
 ↓
Authentication middleware
 ↓
Controller
 ↓
Response
```

---

# 13. Middleware vs Controller

Difference:

| Layer      | Responsibility           |
| ---------- | ------------------------ |
| Middleware | Pre-processing           |
| Controller | Business logic execution |

Example responsibilities:

Middleware:

```text
logging
authentication
validation
```

Controller:

```text
handle request
call service
return response
```

---

# 14. Common Middleware Patterns

Important middleware patterns:

```text
Logger middleware
Auth middleware
Validation middleware
Error middleware
Rate limit middleware
Security middleware
```

---

# 15. Common Middleware Mistakes

### Mistake 1

Forgetting `next()`.

Request will hang.

---

### Mistake 2

Putting business logic in middleware.

Business logic belongs in **service layer**.

---

### Mistake 3

Wrong middleware order.

Example:

```text
Validation before body parser
```

This will fail.

---

# 16. Advantages of Middleware Architecture

```text
Modular request processing
Reusable logic
Cleaner controllers
Centralized logic
Flexible pipeline
```

---

# 17. Disadvantages

```text
Hard to debug large middleware chains
Order-sensitive execution
```

---

# 18. Interview Questions

### Basic

What is middleware in Express?

---

### Intermediate

What does next() do?

Difference between app.use and app.get middleware?

---

### Advanced

Explain middleware execution order.

What are different types of middleware?

---

# 19. Interview Answer Template

What is Middleware?

Answer:

Middleware is a function in Express that executes during the request-response cycle. It has access to the request and response objects and can modify them, perform operations, or pass control to the next middleware using the next() function.

---

# Final Mental Model

Always visualize:

```text
Request
 ↓
Middleware 1
 ↓
Middleware 2
 ↓
Middleware 3
 ↓
Route Handler
 ↓
Response
```

Middleware is **a processing pipeline for requests**.

---
