# PHASE 3 — CORE ARCHITECTURE UNDERSTANDING

---

# 3. HTTP REQUEST & RESPONSE CYCLE (DEEP MENTAL MODEL)

---

## 1. WHAT HAPPENS WHEN CLIENT SENDS REQUEST?

Let’s say browser sends:

```
GET /users
```

Now think step-by-step.

---

## STEP 1 — TCP CONNECTION

- Browser creates TCP connection
- Connects to server IP + Port (e.g., 3000)

This is network layer.

---

## STEP 2 — NODE HTTP RECEIVES REQUEST

Node’s internal HTTP module:

```js
http.createServer(app);
```

When request arrives:

```js
app(req, res);
```

Important:

Express app itself is a function.

So Node calls:

```js
app(req, res);
```

---

## STEP 3 — EXPRESS TAKES CONTROL

Now Express starts processing.

Inside Express internally something like:

```js
function app(req, res) {
  executeMiddlewareStack(req, res);
}
```

---

# 2. HOW EXPRESS PROCESSES REQUEST?

![Route handling using express.js](https://media.licdn.com/dms/image/v2/D4D12AQF-1gV-XQQvfQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1685887238088?e=2147483647&v=beta&t=e0DNJuRTnv5eEQvD-4vtOWabNIW1KydeL4fLSexPV6A)

Express uses:

**Middleware Stack Architecture**

Think of it like this:

```
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

Each middleware decides:

- Continue?
- Stop?
- Send response?

---

## INTERNAL FLOW (SIMPLIFIED)

Internally Express stores something like:

```
[
  { path: '/', method: 'GET', handler: fn },
  { path: '/users', method: 'GET', handler: fn }
]
```

And also middleware stack:

```
[
  logger,
  bodyParser,
  authMiddleware
]
```

When request comes:

1. Loop through middleware stack
2. Execute one by one
3. If next() called → continue
4. If response sent → stop
5. After middleware → routing match
6. If route matches → handler executes

![](https://devopedia.org/images/article/157/3224.1551338491.png)

# 3. WHERE MIDDLEWARE FITS?

Middleware runs:

BEFORE route handler.

Example:

```js
app.use((req, res, next) => {
  console.log("Request received");
  next(); // passes control
});
```

If you remove `next()`:

Request stops there.

That is power of middleware.

---

## VISUAL FLOW

```
Client Request
   ↓
Global Middleware
   ↓
Route Middleware
   ↓
Route Handler
   ↓
Response
```

---

# 4. WHERE ROUTING HAPPENS?

Routing happens:

After middleware passes control.

Example:

```js
app.get("/users", handler);
```

Express checks:

- Is method GET?
- Is path '/users'?

If yes → execute handler.

If no → check next route.

If none matches → 404.

---

# COMPLETE FLOW DIAGRAM

```
Browser
   ↓
TCP
   ↓
Node HTTP Server
   ↓
Express App Function
   ↓
Global Middleware Stack
   ↓
Route Matching
   ↓
Route-Level Middleware
   ↓
Route Handler
   ↓
res.send()
   ↓
Response Back
```

---

# CODE DEMO — FULL CYCLE

```js
const express = require("express");
const app = express();

// Global middleware
app.use((req, res, next) => {
  console.log("Global Middleware Executed");

  next(); // without this, request stops
});

// Route
app.get("/users", (req, res) => {
  console.log("Route Handler Executed");

  res.send("Users List");
});

// Start server
app.listen(3000);
```

If you hit:

```
GET /users
```

Output order:

```
Global Middleware Executed
Route Handler Executed
```

This shows execution pipeline clearly.

---

# REAL WORLD CASE

Imagine:

- Logging middleware
- Authentication middleware
- Authorization middleware
- Rate limiter middleware

Flow:

```
Request
  ↓
Logger
  ↓
Auth Check
  ↓
Role Check
  ↓
Route Handler
```

This is how enterprise backend works.

---

# STRUCTURE MY APPLICATION IN EXPRESS

Now think like backend engineer.

Single file is not scalable.

---

# BASIC FOLDER STRUCTURE (SMALL PROJECT)

```
project/
│
├── server.js
├── app.js
├── routes/
│     └── userRoutes.js
├── controllers/
│     └── userController.js
├── middleware/
│     └── authMiddleware.js
└── package.json
```

---

# APP.JS VS SERVER.JS (VERY IMPORTANT)

Many beginners confuse this.

---

## server.js

Purpose:

Start the server.

Only responsibility:

```js
app.listen(PORT);
```

Nothing else.

---

## app.js

Purpose:

Configure application.

Includes:

- Middleware
- Routes
- Config
- Settings

---

# WHY KEEP THEM SEPARATE?

Because of:

1. Clean Architecture
2. Testability
3. Scalability
4. Separation of Concerns

---

## EXAMPLE

### app.js

```js
const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Home");
});

module.exports = app;
```

---

### server.js

```js
const app = require("./app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

# WHY THIS IS IMPORTANT FOR ENTERPRISE?

Because later:

- You may add database connection
- You may add testing
- You may run server differently in production

Example:

In testing:

```js
const app = require("./app");
```

You don’t start server automatically.

This makes testing easier.

---

# INTERVIEW LEVEL EXPLANATION

If interviewer asks:

Why separate app.js and server.js?

Answer:

Separating app and server improves modularity and testability. app.js defines application configuration such as middleware and routes, while server.js is responsible only for starting the HTTP server. This separation allows easier unit testing and cleaner architecture.

---

# COMMON MISTAKES

1. Writing everything in index.js
2. Not separating routes
3. Not using controllers
4. Sending response inside middleware unintentionally
5. Forgetting next()

---

# ENTERPRISE THINKING SHIFT

Tutorial mindset:

“I just want it working.”

Backend engineer mindset:

“How does request travel?”
“How do I scale this?”
“How do I isolate concerns?”
“How do I test this?”
“What happens if middleware fails?”

---

# ADVANTAGES OF PROPER STRUCTURE

- Maintainable
- Easy to debug
- Scalable
- Cleaner logic separation
- Testable
- Industry standard

---

# INTERVIEW QUESTIONS (PHASE 3 LEVEL)

### Basic

1. Explain request-response cycle in Express.
2. What is middleware?
3. What happens if next() is not called?

---

### Intermediate

4. Where does routing happen in Express?
5. What happens if no route matches?
6. Why separate app.js and server.js?

---

### Advanced

7. How does Express internally store middleware?
8. How does Express determine route match order?
9. What is execution order of middleware?
10. How would you design Express app for enterprise?

---

# FINAL GOAL CHECK

After Phase 3 you must clearly understand:

- Express = Middleware pipeline
- app is function called by Node HTTP
- Middleware runs in order
- Routing happens after middleware
- Proper folder structure matters
- Separation of concerns is critical
