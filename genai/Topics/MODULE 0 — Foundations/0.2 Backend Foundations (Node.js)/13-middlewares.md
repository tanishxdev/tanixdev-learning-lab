# MODULE 0 → 0.2 Backend Foundations (Node.js)

# Topic 13 — Middlewares

Middlewares are the **heart** of any Node.js backend.
For GenAI engineering, they are even more important because your system needs:

* request validation
* rate limiting
* logging
* safe prompt handling
* tool-call authorization
* model output sanitization
* error tracking
* cost tracking
* observability

Without middlewares, your AI backend becomes unsafe and unscalable.

We go step-by-step.

---

# Topic 13 — MIDDLEWARES (Express.js)

---

# 1. CONCEPT SUMMARY

A middleware is a function that runs **between** the request and the response.

It has access to:

```
req → request object  
res → response object  
next → function to call next middleware
```

Middleware chain looks like:

```
Request → middleware1 → middleware2 → middleware3 → Route Handler → Response
```

They help you:

* preprocess requests
* check authentication
* validate input
* log incoming data
* modify request
* handle errors
* catch exceptions
* sanitize unsafe user inputs

Middlewares make backend code clean and layered.

---

# 2. WHY MIDDLEWARE MATTERS IN GENAI ENGINEERING

Because GenAI backends need:

### 1. **Logging Middleware**

LLM usage logs
Prompt logs
Tool logs
Error logs

### 2. **Validation Middleware**

Ensures:

* prompt is present
* user input is clean
* model or vector DB isn’t called with invalid data

### 3. **Rate Limit Middleware**

Prevent:

* API spam
* model overuse
* token consumption explosion

### 4. **Safety Middleware**

Check for:

* unsafe text
* harmful requests
* jailbreak attempts

### 5. **Error Handling Middleware**

LLM API errors
Timeouts
Network failures

### 6. **Auth Middleware**

Protect endpoints used by agents or dashboards.

This makes middlewares one of the most important patterns in GenAI backends.

---

# 3. THEORY (Simple + Deep)

---

## 3.1 Structure of a Middleware

```js
function myMiddleware(req, res, next) {
  console.log("Middleware triggered");

  next(); // Send request to next step
}
```

You apply it like:

```
app.use(myMiddleware);
```

---

## 3.2 Route-level Middleware

Runs only for specific routes:

```
app.post("/ask", myMiddleware, (req, res) => {
  res.send("done");
});
```

---

## 3.3 Built-in Middlewares

Already seen:

```
app.use(express.json());
```

Others include:

```
express.urlencoded()
express.static()
```

---

## 3.4 Error-Handling Middleware

Special middleware with **4 arguments**:

```js
function errorHandler(err, req, res, next) {
  res.status(500).json({ error: err.message });
}
```

IMPORTANT:
This must be at the bottom of Express config.

---

# 4. CODE EXAMPLES

Create:

```
GenAI/src/module0-foundations/node/13-middlewares.js
```

Put:

```js
/*
   Topic: Middlewares in Express
   Purpose: Build structured, safe, production-ready GenAI backend.
*/

import express from "express";

const app = express();
app.use(express.json());

// ----------------------------------------------
// 1. Logging middleware
// ----------------------------------------------
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);

// ----------------------------------------------
// 2. Request validation middleware
// ----------------------------------------------
function requirePrompt(req, res, next) {
  const { prompt } = req.body || {};
  if (!prompt) {
    return res.status(400).json({ error: "Missing 'prompt' in request body" });
  }
  next();
}

// ----------------------------------------------
// 3. Example route using middleware
// ----------------------------------------------
app.post("/ask", requirePrompt, (req, res) => {
  const { prompt } = req.body;
  return res.json({
    answer: `Echo from middleware-protected route: ${prompt}`
  });
});

// ----------------------------------------------
// 4. Error-handling middleware (must be last)
// ----------------------------------------------
function errorHandler(err, req, res, next) {
  console.error("Error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
}

app.use(errorHandler);

// ----------------------------------------------
app.listen(3002, () => {
  console.log("Server running on port 3002");
});
```

---

# 5. REAL GENAI EXAMPLES

## Example 1 — Safety Middleware (text check)

```js
function safetyCheck(req, res, next) {
  if (req.body.prompt.includes("harm")) {
    return res.status(400).json({ error: "Unsafe content detected" });
  }
  next();
}
```

---

## Example 2 — Cost Logging Middleware

```js
function costLogger(req, res, next) {
  req.startTime = Date.now();
  
  res.on("finish", () => {
    const duration = Date.now() - req.startTime;
    console.log(`Request cost time: ${duration}ms`);
  });

  next();
}
```

---

## Example 3 — RAG Upload Validation

```js
function validateFile(req, res, next) {
  if (!req.file) return res.status(400).send("File missing");
  next();
}
```

---

# 6. INTUITION SUMMARY

Middlewares create a **pipeline** for every request.

Instead of writing validation and logging in every route, you build **layers**:

```
auth → log → validate → sanitize → route → error-handler
```

This makes your backend:

* clean
* modular
* secure
* scalable

Exactly what a real AI backend needs.

---

# 7. PRACTICE QUESTIONS

1. What is a middleware?
2. Why does Express send `req.body` as undefined without `express.json()`?
3. How do you add middleware to a single route?
4. Why must error-handling middleware be added last?
5. Build a middleware that logs: method, url, and timestamp.

---

# THUNDER CLIENT TESTING GUIDE

(For your middleware-protected Express server)

Your server is listening on:

```
http://localhost:3002
```

---

# 1. Test GET route (quick check)

### Steps:

1. Open Thunder Client
2. New Request
3. Method → `GET`
4. URL → `http://localhost:3002/`
5. Hit Send

### Expected response:

```json
{
  "message": "GenAI Backend Running"
}
```

If this works → server is running correctly.

---

# 2. Test POST /ask WITHOUT BODY

(This tests your validation middleware)

### Steps:

1. Thunder Client
2. New Request
3. Method → `POST`
4. URL → `http://localhost:3002/ask`
5. Body → choose **"JSON"**, but leave empty `{}`
6. Hit Send

### Expected output:

```json
{
  "error": "Missing 'prompt' in request body"
}
```

If you get this →
your `requirePrompt` middleware is working correctly.

---

# 3. Test POST /ask WITH VALID JSON

(This tests full middleware chain + route logic)

### Steps:

1. Thunder Client
2. New Request
3. Method: `POST`
4. URL: `http://localhost:3002/ask`
5. Body → JSON → enter:

```json
{
  "prompt": "Hello AI"
}
```

6. Hit Send

### Expected response:

```json
{
  "answer": "Echo from middleware-protected route: Hello AI"
}
```

If this appears →
your middleware and route handler are functioning perfectly.

---

# 4. Test Logging Middleware (Console Output)

Every request will show in your terminal:

```
POST /ask
GET /
POST /ask
```

This confirms:

```js
app.use(logger);
```

is working.

---

# 5. Test Error-Handling Middleware (Manual Trigger)

To test your error middleware, temporarily edit your route:

```js
app.post("/ask", requirePrompt, (req, res) => {
  throw new Error("Manual test error");
});
```

Now send:

```json
{
  "prompt": "Test"
}
```

Expected API response:

```json
{
  "error": "Internal Server Error"
}
```

Expected console output:

```
Error: Manual test error
    at ...
```

This confirms your error middleware is correctly configured:

```js
app.use(errorHandler);
```

---

# 6. Full Thunder Client Configuration (Snapshot in words)

### A) Headers

Thunder auto-applies:

```
Content-Type: application/json
```

If not:

1. Tabs → Headers
2. Add:

   ```
   Key: Content-Type
   Value: application/json
   ```

### B) Body

Always choose:

```
Body → JSON → Raw JSON
```

---

# 7. Troubleshooting Checklist

If `req.body` becomes undefined:

1. Ensure middleware is above routes:

```js
app.use(express.json());
```

2. Ensure Thunder Client uses JSON mode
3. Ensure the JSON body is valid
4. Server restarted after file edits

---
