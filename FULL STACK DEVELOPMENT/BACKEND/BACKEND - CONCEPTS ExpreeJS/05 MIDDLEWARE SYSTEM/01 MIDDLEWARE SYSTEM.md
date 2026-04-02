# PHASE 5 — MIDDLEWARE SYSTEM (VERY IMPORTANT)

---

# 8. WHAT IS MIDDLEWARE?

## ![](https://miro.medium.com/1*DY54ObAx1cxCk2ZTPQ7IyQ.png)

## Clear Definition

Middleware is a function that runs:

```text
Between Request and Response
```

It has access to:

```js
(req, res, next);
```

And can:

- Read request
- Modify request
- Modify response
- End response
- Pass control to next middleware

---

## Mental Model

Think of middleware like a pipeline:

```text
Client
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

Each layer decides:

- Continue → next()
- Stop → send response

---

# USE OF next()

---

## What is next()?

next() is a function that tells Express:

```text
"Move to the next middleware in the stack."
```

If next() is not called and response is not sent:

The request hangs.

---

## Example

```js
const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log("Middleware executed");

  next(); // passes control forward
});

// Route
app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(3000);
```

Execution order:

1. Middleware runs
2. next() called
3. Route runs
4. Response sent

---

## What if next() is removed?

```js
app.use((req, res, next) => {
  console.log("Middleware executed");
  // no next()
});
```

Now request never reaches route.

Browser keeps loading.

Important interview question.

---

# FLOW CONTROL

Middleware controls flow like:

```text
If condition passes → next()
If fails → res.status().send()
```

Example (Auth middleware):

```js
function auth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized");
  }

  next();
}
```

Used as:

```js
app.get("/dashboard", auth, (req, res) => {
  res.send("Dashboard");
});
```

---

# INTERNAL WORKING (IMPORTANT)

Express maintains:

```js
app._router.stack;
```

Which stores all middleware and routes in order.

Pseudo logic:

```js
for each layer in stack:
    if path matches:
        execute layer
        if next() called:
            continue
        else:
            stop
```

This is stack-based execution.

Order matters.

---

# 9. TYPES OF MIDDLEWARE

---

## 1. BUILT-IN MIDDLEWARE

---

### express.json()

Used to parse JSON body.

Without this:

```js
req.body === undefined;
```

Example:

```js
app.use(express.json());
```

Now you can do:

```js
req.body.name;
```

---

### express.urlencoded()

Parses form data (application/x-www-form-urlencoded).

Used for HTML form submissions.

Example:

```js
app.use(express.urlencoded({ extended: true }));
```

---

### express.raw()

Parses raw buffer.

Used for:

- Webhooks
- Signature verification

Example:

```js
app.use(express.raw({ type: "application/octet-stream" }));
```

---

### express.text()

Parses plain text body.

Example:

```js
app.use(express.text());
```

---

### express.static()

Serves static files.

Example:

```js
app.use(express.static("public"));
```

If public contains index.html,
User can access:

```
http://localhost:3000/index.html
```

---

## 2. CUSTOM MIDDLEWARE

You write it yourself.

Example:

```js
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);

  next();
}

app.use(logger);
```

Reusable.

---

## 3. GLOBAL VS ROUTE-LEVEL MIDDLEWARE

---

### Global Middleware

Applies to all routes.

```js
app.use(logger);
```

Runs for every request.

---

### Route-Level Middleware

Applies to specific route.

```js
app.get("/admin", auth, (req, res) => {
  res.send("Admin Panel");
});
```

auth only runs for /admin.

---

## Order Example

```js
app.use(globalMiddleware);

app.get("/user", routeMiddleware, controller);
```

Execution:

global → routeMiddleware → controller

---

# 10. EXPRESS-SESSION MIDDLEWARE

Now production-level concept.

---

## What is Session?

Session is server-side storage of user data.

Instead of storing user data in browser,
We store it on server and only send session ID to client.

---

## How Session Works

Step 1:
User logs in.

Step 2:
Server creates session object.

Step 3:
Server sends session ID cookie to browser.

Step 4:
Browser sends session ID with every request.

Step 5:
Server retrieves session data using ID.

---

## Install express-session

```bash
npm install express-session
```

---

## Basic Session Setup

```js
const session = require("express-session");

app.use(
  session({
    secret: "secret-key",

    resave: false,

    saveUninitialized: false,

    cookie: {
      maxAge: 60000, // 1 minute
    },
  }),
);
```

Explanation:

- secret → signs session ID
- resave → don't save if unchanged
- saveUninitialized → don't save empty sessions
- maxAge → session expires in 1 minute

---

## Login Example

```js
app.post("/login", (req, res) => {
  req.session.user = "Tanish";

  res.send("Logged in");
});
```

---

## Protected Route

```js
app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("Unauthorized");
  }

  res.send("Welcome " + req.session.user);
});
```

---

# EXPIRE SESSION AFTER 1 MIN INACTIVITY

Use:

```js
cookie: {
  maxAge: 60000;
}
```

Each time user interacts,
session resets timer.

If inactive > 1 min → expires.

---

# REAL WORLD SESSION FLOW

```text
Login → Session Created
Cookie Sent → Browser stores session ID
Next Request → Cookie sent
Server checks session store
```

Production usually uses:

- Redis store
- Mongo store
- Not memory store

Because default memory store is not scalable.

Interview question.

---

# WHY MIDDLEWARE IS EXPRESS POWER

Because everything in Express is middleware:

- JSON parsing
- Static files
- Auth
- Logging
- Sessions
- Error handling
- Rate limiting

Express is basically:

Middleware engine.

---

# ADVANTAGES (+)

- Modular
- Clean
- Reusable
- Powerful flow control
- Production ready

---

# DISADVANTAGES (–)

– Order sensitive
– Hard to debug if poorly structured
– Performance overhead if too many layers

---

# INTERVIEW QUESTIONS

Basic:

1. What is middleware?
2. What does next() do?
3. Difference between global and route middleware?

Intermediate:

4. What is express.json?
5. Why use express.static?
6. What happens if next() not called?

Advanced:

7. How does Express internally execute middleware?
8. What is session?
9. Difference between session and JWT?
10. Why memory store not recommended for production?

---

# PERFECT INTERVIEW ANSWER

If asked:

Why is middleware important in Express?

Answer:

Middleware is central to Express architecture. It allows modular processing of requests through a stack-based execution model. Each middleware can inspect, modify, or terminate the request before passing control to the next layer. This enables clean implementation of logging, authentication, validation, session management, and error handling.

---

# FINAL ENGINEER SHIFT

If you understand middleware deeply:

You understand:

- Flow control
- Security
- Architecture
- Scaling
- Production readiness

Without middleware clarity,
Express is just syntax.

---
