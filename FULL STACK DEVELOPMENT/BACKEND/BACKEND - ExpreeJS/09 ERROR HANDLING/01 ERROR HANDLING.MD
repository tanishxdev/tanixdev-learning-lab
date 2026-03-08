# PHASE 9 — Error Handling (Critical for Real Projects)

Goal: Build a **production-ready error handling architecture**.

---

# 1. WHAT IS ERROR HANDLING?

Error handling means:

```text
Detect → Capture → Process → Respond
```

If something fails in the server:

- Database failure
- Invalid user input
- Missing route
- Server crash
- Unauthorized access

The server must respond with a **structured error response** instead of crashing.

---

# 2. DEFAULT EXPRESS ERROR HANDLER

Express has a built-in error handler.

If an error occurs and you call:

```js
next(error);
```

Express automatically sends a response.

Example:

```js
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  const error = new Error("Something went wrong");

  next(error);
});

app.listen(3000);
```

Response:

```text
Error: Something went wrong
```

In development mode, Express shows stack trace.

In production, it hides stack details.

---

# 3. ERROR PROPAGATION (HOW ERRORS TRAVEL)

Express middleware chain:

```text
Request
  ↓
Middleware
  ↓
Route Handler
  ↓
Error Middleware
  ↓
Response
```

If `next(error)` is called:

Express **skips normal middleware** and jumps to **error middleware**.

---

# 4. CUSTOM ERROR MIDDLEWARE

Custom error middleware allows you to define **your own error response format**.

Error middleware has **four parameters**.

Signature:

```js
(err, req, res, next);
```

The presence of `err` tells Express this is an error handler.

---

## Example

```js
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  const error = new Error("Database failed");

  next(error);
});

// Custom error middleware
app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    success: false,
    message: err.message,
  });
});

app.listen(3000);
```

Response:

```json
{
  "success": false,
  "message": "Database failed"
}
```

---

# 5. 404 HANDLER

404 error means:

```text
Requested route does not exist
```

Express does not automatically send JSON for 404.

You must define it manually.

---

## Example

```js
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
```

This middleware should be placed **after all routes**.

---

# 6. CENTRALIZED ERROR HANDLING PATTERN

Large applications use **centralized error handling**.

Structure:

```text
routes
  ↓
controllers
  ↓
services
  ↓
throw error
  ↓
error middleware
```

Example architecture:

```text
controllers/
middlewares/
utils/
app.js
```

---

## Example Centralized Error Flow

Controller:

```js
app.get("/user", (req, res, next) => {
  try {
    throw new Error("User not found");
  } catch (err) {
    next(err);
  }
});
```

Error Middleware:

```js
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    error: err.message,
  });
});
```

Now all errors are handled in **one place**.

---

# 7. PRODUCTION ERROR RESPONSE STRUCTURE

Production APIs should never return raw stack traces.

Proper format:

```json
{
  "success": false,
  "error": "Invalid credentials"
}
```

Or:

```json
{
  "status": "error",
  "message": "User not found"
}
```

Consistency is critical.

---

# 8. HANDLING ASYNC ERRORS

Async code often throws errors outside try/catch.

Example:

```js
app.get("/data", async (req, res, next) => {
  try {
    const data = await databaseCall();

    res.json(data);
  } catch (err) {
    next(err);
  }
});
```

Without try/catch:

Server may crash.

---

# 9. GLOBAL ERROR HANDLER EXAMPLE (PRODUCTION)

```js
app.use((err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});
```

This ensures:

- consistent response
- no server crash
- proper logging

---

# 10. COMPLETE ERROR HANDLING FLOW

```text
Client Request
      ↓
Route Handler
      ↓
Error Occurs
      ↓
next(error)
      ↓
Error Middleware
      ↓
Structured Response
```

---

# 11. REAL WORLD EXAMPLE

Login API:

```js
app.post("/login", (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    const error = new Error("Email required");
    error.statusCode = 400;

    return next(error);
  }

  res.send("Login success");
});
```

Error middleware:

```js
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
  });
});
```

---

# 12. COMMON MISTAKES

### 1. Not using next(error)

Error will not reach middleware.

---

### 2. Sending response and then calling next

Wrong:

```js
res.send("Error");
next(err);
```

Response already sent.

---

### 3. Placing error middleware before routes

Order matters.

Error middleware should be **last**.

---

# 13. INTERVIEW QUESTIONS

Basic:

1. What is error middleware in Express?
2. Why does error middleware have four parameters?
3. What is 404 handler?

Intermediate:

4. How does Express propagate errors?
5. What happens when `next(error)` is called?
6. How do you handle async errors?

Advanced:

7. How would you design centralized error handling?
8. How do production APIs hide stack traces?
9. How would you log errors in production?

---

# PERFECT INTERVIEW ANSWER

Question:

How does Express handle errors?

Answer:

Express uses middleware-based error handling. When an error occurs, it can be passed to the next middleware using `next(error)`. Express then skips all regular middleware and invokes error-handling middleware functions that have four parameters `(err, req, res, next)`. This allows centralized error handling and consistent error responses across the application.

---

# FINAL ENGINEER MINDSET

Error handling should ensure:

```text
Server does not crash
Client receives meaningful response
Errors are logged
Sensitive information is hidden
```

A production backend must always have **centralized error handling**.

---
