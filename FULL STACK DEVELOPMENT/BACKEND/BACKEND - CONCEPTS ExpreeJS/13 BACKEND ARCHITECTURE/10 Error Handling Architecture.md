# Backend Architecture

# Topic 10 — Error Handling Architecture (Deep Dive)

Error handling is **one of the most important aspects of production backend systems**.

A professional backend must:

- detect errors
- propagate errors
- format errors
- log errors
- respond safely to the client

Without proper error architecture, systems become **unpredictable and insecure**.

---

# 1. What is Error Handling Architecture?

## Simple Definition

Error Handling Architecture is the **systematic way a backend detects, propagates, processes, and responds to errors.**

It ensures:

```text
Errors are handled consistently
System does not crash
Clients receive meaningful responses
Sensitive information is not leaked
```

---

# 2. Mental Model

Think of error handling like **a hospital emergency system**.

```text
Patient problem
 ↓
Emergency room
 ↓
Doctor diagnosis
 ↓
Treatment
```

Backend mapping:

```text
Error occurs
 ↓
Error thrown
 ↓
Error propagated
 ↓
Error middleware
 ↓
Error response
```

---

# 3. Types of Errors in Backend

Backend systems usually deal with three types of errors.

---

# 3.1 Operational Errors

Expected errors that happen during normal operation.

Examples:

```text
User not found
Invalid input
Unauthorized access
Database timeout
```

These must be **handled gracefully**.

---

# 3.2 Programmer Errors

Mistakes in code.

Examples:

```text
Undefined variable
Incorrect logic
Syntax errors
```

These are **bugs**.

---

# 3.3 System Errors

Infrastructure failures.

Examples:

```text
Database connection failure
Disk failure
Network failure
```

---

# 4. Error Handling Flow

Proper architecture:

```text
Request
 ↓
Middleware
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Error occurs
 ↓
Error middleware
 ↓
Response
```

All errors should eventually reach a **central error handler**.

---

# 5. Bad Error Handling Example

Many beginners do this:

```javascript
app.get("/users", async (req, res) => {
  try {
    const users = await db.query("SELECT * FROM users");

    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
```

Problems:

```text
Duplicated try/catch everywhere
Inconsistent responses
Hard to maintain
```

---

# 6. Correct Error Architecture

Correct design:

```text
Controller throws error
 ↓
Error middleware catches error
 ↓
Centralized response
```

---

# 7. Express Error Middleware

Express provides a special middleware for errors.

Signature:

```javascript
function(err, req, res, next)
```

Example:

```javascript
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});
```

This middleware catches errors.

---

# 8. Example Express Error Handling

```javascript
const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  throw new Error("Something went wrong");
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(3000);
```

Flow:

```text
Request
 ↓
Route
 ↓
Error thrown
 ↓
Error middleware
 ↓
Response
```

---

# 9. Custom Error Classes

Large systems create **custom error classes**.

Example:

```javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
  }
}
```

Usage:

```javascript
throw new AppError("User not found", 404);
```

---

# 10. Example Production Error Handler

Example middleware:

```javascript
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;

  res.status(status).json({
    success: false,
    message: err.message || "Internal server error",
  });
});
```

---

# 11. Error Propagation

Errors propagate upward.

Example:

```text
Repository
 ↓
Service
 ↓
Controller
 ↓
Error middleware
```

Example code:

```javascript
exports.getUser = async (id) => {
  const user = await repository.findUser(id);

  if (!user) {
    throw new Error("User not found");
  }
};
```

Service throws error → controller passes error.

---

# 12. Async Error Handling Problem

Express does not automatically catch async errors.

Example problem:

```javascript
app.get("/users", async (req, res) => {
  throw new Error("Error");
});
```

This can crash server.

Solution:

Use async wrapper.

---

# 13. Async Wrapper Example

```javascript
function asyncHandler(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
```

Usage:

```javascript
app.get(
  "/users",
  asyncHandler(async (req, res) => {
    throw new Error("Error");
  }),
);
```

Now error goes to middleware.

---

# 14. Error Response Structure

Professional APIs use consistent error responses.

Example:

```json
{
  "success": false,
  "error": {
    "message": "User not found",
    "code": 404
  }
}
```

---

# 15. Real World Example

Example: **User login**

```text
POST /login
```

Possible errors:

```text
Invalid credentials
User not found
Password incorrect
Database failure
```

Flow:

```text
Controller
 ↓
Service
 ↓
Error thrown
 ↓
Error middleware
 ↓
Response
```

---

# 16. Logging Errors

Errors should be logged.

Example tools:

```text
Winston
Pino
Sentry
Datadog
```

Example:

```javascript
console.error(err);
```

Production apps log errors **for debugging**.

---

# 17. Common Error Handling Mistakes

### Mistake 1

Sending raw error to client.

Bad:

```javascript
res.send(error);
```

This leaks sensitive info.

---

### Mistake 2

No centralized error handler.

---

### Mistake 3

Not distinguishing error types.

---

### Mistake 4

Not logging errors.

---

# 18. Advantages of Error Handling Architecture

```text
Consistent error responses
Better debugging
Improved security
Cleaner controllers
Better user experience
```

---

# 19. Interview Questions

### Basic

What is error handling in Express?

---

### Intermediate

What is error middleware?

---

### Advanced

How do you handle async errors in Express?

What is centralized error handling?

---

# 20. Interview Answer Template

What is centralized error handling?

Answer:

Centralized error handling is an architectural pattern where all application errors are passed to a single error handling middleware that processes the error and sends a consistent response to the client.

---

# Final Mental Model

Always visualize:

```text
Request
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Error occurs
 ↓
Error middleware
 ↓
Response
```

Error middleware acts as **the global error handler of the application**.

---
