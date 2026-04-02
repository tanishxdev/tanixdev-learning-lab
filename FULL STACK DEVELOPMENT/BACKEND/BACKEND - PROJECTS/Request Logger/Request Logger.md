Good. You picked a **small but powerful module**:

> **Request Logger** — this is exactly how real backend systems start (observability first).

Now we will follow your framework strictly.

---

# PROJECT

Project Number: 1
Project Name: **Request Logger Middleware System**

---

# STEP 1 — PROJECT UNDERSTANDING

---

## 1.1 Understand the Project

### Simple Explanation

A **Request Logger** is a system that records every incoming request to your server.

Whenever a user hits your API:

```
GET /products
POST /login
DELETE /order/123
```

We log details like:

- Request method (GET, POST)
- URL
- Status code
- Response time
- User info (if available)
- IP address

---

### Real World Example

Think of:

- Amazon backend
- Banking system
- Payment gateway

Every request is logged because:

- Debugging issues
- Tracking user activity
- Security monitoring
- Performance analysis

---

### Who Uses This?

- Backend developers (debugging)
- DevOps engineers (monitoring)
- Security teams (audit logs)

---

## 1.2 Define the Problem Clearly

### Core Problem

Without logging:

- You don’t know what requests are coming
- You can’t debug production issues
- You can’t detect attacks
- You can’t analyze performance

---

### Real Pain Points

1. Bug happens in production
   → No logs → You’re blind

2. API is slow
   → No response time tracking

3. Suspicious activity
   → No request history

---

### Why Existing Solutions Are Not Enough?

Libraries like:

- `morgan`
- `winston`

are good…

But:

> You don’t understand what’s happening internally.

---

### Our Goal

Build a **custom production-grade logger** so you:

- Understand middleware deeply
- Control logging format
- Extend later (file logs, DB logs, monitoring tools)

---

### Success Looks Like

When:

- Every request is logged automatically
- Logs are structured and readable
- Logs include timing + metadata
- System is extendable

---

## 1.3 Possible Approaches

---

### Approach 1 — Use Morgan (Library)

#### How it works

```
app.use(morgan('dev'))
```

#### Advantages

- Very easy
- Fast setup

#### Disadvantages

- Black box
- Limited customization

#### When to use

- Small projects
- Quick setup

---

### Approach 2 — Custom Middleware (Recommended)

#### How it works

We create our own middleware:

```
(req, res, next) => {
   // log start
   // calculate time
   // log end
}
```

#### Advantages

- Full control
- Deep understanding
- Extendable (file logs, DB logs)

#### Disadvantages

- More code
- Need to handle edge cases

---

### Approach 3 — Production Logger (Winston/Pino)

#### How it works

Use structured logging libraries:

- JSON logs
- File storage
- Log rotation

#### Advantages

- Production ready
- Scalable

#### Disadvantages

- More complexity

---

### Final Decision

We choose:

> **Custom Middleware + Later Upgrade to Winston**

---

### Why?

Because:

1. You learn core backend flow
2. You understand middleware deeply
3. Then you upgrade like real engineers

---

## 1.4 Define the Scope

---

### What We WILL Build

- Custom request logger middleware
- Logs:
  - Method
  - URL
  - Status code
  - Response time
  - Timestamp

- Console logging (initial)
- Clean structured format
- Middleware integration in Express

---

### What We will NOT Build (Now)

- File-based logging
- Database logging
- Log aggregation tools (ELK, Datadog)
- Distributed tracing

---

# Mental Model (Very Important)

Understand this:

```
Request enters server
↓
Middleware runs FIRST
↓
Controller runs
↓
Response goes back
↓
We capture everything in between
```

---

# Before Moving to STEP 2

Make sure you understand:

- What is middleware?
- Why logging is needed?
- Where logging happens in request lifecycle?

---

# Next Step

If you're ready, say:

> **"Step 2"**

Then we will go into:

# SYSTEM DESIGN

- Architecture
- Request flow
- Logging lifecycle
- Middleware placement

And this is where things become **real engineering**.

Good. Now we move into the most important part:

> **This is where you become an engineer, not just a coder**

---

# STEP 2 — SYSTEM DESIGN

Project: **Request Logger Middleware System**

---

# 2.1 Requirements Gathering

---

## Functional Requirements (What system MUST do)

1. Log every incoming request

2. Capture:
   - HTTP Method (GET, POST…)
   - URL
   - Status Code
   - Response Time
   - Timestamp

3. Work automatically for ALL routes

4. Should not break request flow (`next()` must work)

---

## Non-Functional Requirements (How system should behave)

### 1. Performance

- Logging should be **lightweight**
- Must not slow down API significantly

---

### 2. Reliability

- Logger should never crash the server

---

### 3. Maintainability

- Clean, modular code
- Easy to extend (file logs, DB logs)

---

### 4. Scalability (Future Thinking)

- Can later plug into:
  - Winston
  - ELK stack
  - Cloud logging

---

# 2.2 High Level Architecture

---

## System Overview

```
Client (Postman / Frontend)
        ↓
Express Server
        ↓
Request Logger Middleware   ← (OUR FOCUS)
        ↓
Routes
        ↓
Controllers
        ↓
Response
```

---

## Responsibility of Each Layer

### Client

- Sends HTTP request

---

### Express Server

- Entry point
- Registers middleware

---

### Logger Middleware

- Intercepts request
- Tracks time
- Logs data

---

### Routes

- Define endpoints

---

### Controllers

- Business logic

---

# 2.3 Architecture Diagrams

---

## 1. System Flow Diagram

```
Request → Logger → Route → Controller → Response → Logger (end log)
```

---

## 2. Request Lifecycle Diagram (IMPORTANT)

```
Incoming Request
        ↓
Logger Middleware START
        ↓
Store startTime
        ↓
Call next()
        ↓
Controller executes
        ↓
Response sent
        ↓
Logger Middleware END (capture response time)
```

---

## Key Insight (VERY IMPORTANT)

> Middleware runs BEFORE and AFTER response

But how?

We use:

```js
res.on("finish", () => {
  // This runs AFTER response is sent
});
```

---

## 3. Component Diagram

```
logger.middleware.js
        ↓
Uses:
- Date (timestamp)
- process.hrtime / Date.now (timing)
        ↓
Outputs:
- console.log
```

---

# 2.4 Request Lifecycle (Step-by-Step Deep Dive)

---

## Step 1: Request Arrives

Example:

```
GET /products
```

---

## Step 2: Logger Middleware Starts

We capture:

```js
const startTime = Date.now();
```

---

## Step 3: Pass Control Forward

```js
next();
```

Now request goes to:

→ Route → Controller

---

## Step 4: Response is Generated

Controller sends:

```js
res.json({ data: "products" });
```

---

## Step 5: Logger Captures END Event

```js
res.on("finish", () => {
  // This runs AFTER response
});
```

---

## Step 6: Calculate Response Time

```js
const duration = Date.now() - startTime;
```

---

## Step 7: Log Everything

Example output:

```
[2026-03-24T10:30:00Z] GET /products 200 - 12ms
```

---

# 2.5 Technology Decisions

---

## 1. Framework → Express.js

### Why?

- Middleware-based architecture
- Industry standard
- Easy request interception

---

## 2. Logging Strategy → Custom Middleware

### Why?

- Learn internals
- Full control
- Extendable

---

## 3. Time Measurement → `Date.now()`

### Why?

- Simple
- Enough for ms precision

Alternative:

- `process.hrtime()` (more precise, but complex)

---

## 4. Event Hook → `res.on("finish")`

### Why?

- Ensures response is completed
- Gives accurate status code

---

# Critical Engineering Insight

---

## Why NOT log before response?

Wrong:

```js
console.log("Request done");
next();
```

Problem:

- You don’t know:
  - Status code
  - Actual duration

---

## Why `res.on("finish")` is correct?

Because:

> It runs AFTER response is fully sent

---

# Final Mental Model

```
START TIMER
↓
next()
↓
WAIT (controller runs)
↓
RESPONSE FINISHES
↓
LOG DATA
```

---

# Before Moving to Implementation

Make sure you deeply understand:

- Middleware flow
- `next()` importance
- `res.on("finish")`
- Why logging happens AFTER response

---

# Next Step

Say:

> **"Step 3"**

Now we will start **real production-level implementation**

- Folder structure
- Middleware file
- Server integration
- Clean code with comments

This is where things get practical.

Good. Now we enter **real engineering execution**.

> No shortcuts now — we build this like a production backend.

---

# STEP 3 — IMPLEMENTATION

Project: **Request Logger Middleware System**

---

# 3.1 Folder Structure

### Production-Grade Structure (Minimal but Clean)

```
backend/
│
├── src/
│   ├── middleware/
│   │   └── logger.middleware.js   ← (CORE FILE)
│   │
│   ├── routes/
│   │   └── sample.routes.js      ← (for testing)
│   │
│   ├── controllers/
│   │   └── sample.controller.js ← (dummy logic)
│   │
│   └── app.js                   ← (main server)
│
├── package.json
└── README.md
```

---

## Why This Structure?

- `middleware/` → reusable logic (logger lives here)
- `routes/` → endpoint definitions
- `controllers/` → business logic
- `app.js` → entry point

This is how real backend systems are organized.

---

# 3.2 Step-by-Step Implementation

We go in order:

---

# 1. Project Setup

### Commands

```bash
mkdir backend
cd backend
npm init -y
npm install express
```

---

# 2. Server Setup (`app.js`)

---

## Code (WITH COMMENTS)

```javascript
// src/app.js

// Import express framework
const express = require("express");

// Create app instance
const app = express();

// Middleware to parse JSON body
app.use(express.json());

/*
---------------------------------------
IMPORT LOGGER MIDDLEWARE
---------------------------------------
*/
const logger = require("./middleware/logger.middleware");

/*
---------------------------------------
USE LOGGER MIDDLEWARE (GLOBAL)
---------------------------------------
IMPORTANT:
- This runs for EVERY request
- Order matters → must be before routes
*/
app.use(logger);

/*
---------------------------------------
ROUTES
---------------------------------------
*/
const sampleRoutes = require("./routes/sample.routes");
app.use("/api", sampleRoutes);

/*
---------------------------------------
SERVER START
---------------------------------------
*/
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

# 3. Logger Middleware (CORE FILE)

This is the **heart of the system**

---

## Code (VERY DETAILED COMMENTS)

```javascript
// src/middleware/logger.middleware.js

/*
---------------------------------------------------
CUSTOM REQUEST LOGGER MIDDLEWARE
---------------------------------------------------

This middleware will:

1. Capture request start time
2. Wait until response is finished
3. Calculate response time
4. Log all important data
---------------------------------------------------
*/

const logger = (req, res, next) => {
  /*
  -----------------------------------------
  STEP 1: Capture start time
  -----------------------------------------
  We store when request entered the system
  */
  const startTime = Date.now();

  /*
  -----------------------------------------
  STEP 2: Attach listener to response
  -----------------------------------------
  'finish' event triggers AFTER response is sent
  */
  res.on("finish", () => {
    /*
    -----------------------------------------
    STEP 3: Calculate duration
    -----------------------------------------
    */
    const duration = Date.now() - startTime;

    /*
    -----------------------------------------
    STEP 4: Collect request details
    -----------------------------------------
    */
    const method = req.method; // GET, POST, etc
    const url = req.originalUrl; // full URL
    const status = res.statusCode; // 200, 404, etc
    const timestamp = new Date().toISOString(); // readable time

    /*
    -----------------------------------------
    STEP 5: Format log message
    -----------------------------------------
    */
    const log = `[${timestamp}] ${method} ${url} ${status} - ${duration}ms`;

    /*
    -----------------------------------------
    STEP 6: Output log
    -----------------------------------------
    */
    console.log(log);
  });

  /*
  -----------------------------------------
  STEP 7: Pass control to next middleware
  -----------------------------------------
  VERY IMPORTANT:
  Without next(), request will hang
  */
  next();
};

module.exports = logger;
```

---

# 4. Sample Controller

---

## Code

```javascript
// src/controllers/sample.controller.js

/*
Dummy controller to simulate real API
*/

exports.getData = (req, res) => {
  // Simulate processing delay (optional)
  setTimeout(() => {
    res.status(200).json({
      message: "Data fetched successfully",
    });
  }, 100);
};
```

---

# 5. Sample Routes

---

## Code

```javascript
// src/routes/sample.routes.js

const express = require("express");
const router = express.Router();

const { getData } = require("../controllers/sample.controller");

/*
Test Route:
GET /api/test
*/
router.get("/test", getData);

module.exports = router;
```

---

# 6. Run the Server

```bash
node src/app.js
```

---

# 7. Test the System

Open browser / Postman:

```
http://localhost:3000/api/test
```

---

# Expected Console Output

```
[2026-03-24T10:45:00.000Z] GET /api/test 200 - 102ms
```

---

# Deep Understanding (IMPORTANT)

---

## Why This Works

Because:

1. Middleware runs first
2. We start timer
3. Controller runs
4. Response finishes
5. `res.on("finish")` triggers
6. We log FINAL data

---

## Common Beginner Mistake

❌ Logging BEFORE response:

```javascript
console.log("Request received");
next();
```

→ No status, no duration → useless

---

## Real Engineering Insight

This pattern is used in:

- Express apps
- NestJS interceptors
- Production logging systems

---

# Clean Version (No Comments)

```javascript
const logger = (req, res, next) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime;
    const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`;
    console.log(log);
  });

  next();
};

module.exports = logger;
```

---

# What You Just Built

You didn’t build a small middleware.

You built:

> **Observability Layer (Level 1)**

This is the **foundation of debugging, monitoring, and scaling systems**.

---

# Next Step

Say:

> **"Step 4"**

Then I’ll teach you:

- How to explain this in interviews
- Advanced questions (very important)
- How to upgrade this to production (Winston, files, JSON logs)

This is where most people fail — you won’t.

Good. Now we move into the most underrated but **high-impact phase**:

> **STEP 4 — PROJECT EXPLANATION (Interview Mindset)**
> This is where you convert your work into **confidence + offers**.

---

# STEP 4 — PROJECT EXPLANATION

Project: **Request Logger Middleware System**

---

# 4.1 Architecture Explanation (How You Should Speak)

---

## Short Version (30–40 sec answer)

> “I built a custom request logging middleware in Express to track every incoming API request.
> It captures method, URL, status code, and response time by hooking into the response lifecycle using `res.on('finish')`.
> This ensures logs are recorded only after the response is completed, giving accurate timing and status.
> The middleware is globally applied, making it reusable and scalable for future integrations like file logging or monitoring systems.”

---

## Deep Version (Interviewer Impress Mode)

### Problem

> In backend systems, lack of logging leads to poor debugging, no performance insights, and weak observability.

---

### Solution

> I implemented a middleware-based logging system that intercepts requests at the entry point and logs them after completion.

---

### Key Design Decisions

#### 1. Middleware-based architecture

- Why?
  - Runs before every route
  - Centralized logic
  - No duplication

---

#### 2. Used `res.on("finish")`

- Why?
  - Ensures response is completed
  - Gives correct status code + timing

---

#### 3. Timer started before `next()`

- Why?
  - Captures full lifecycle (middleware → controller → response)

---

#### 4. Global middleware placement

- Why?
  - Covers all routes automatically

---

## Trade-offs

| Decision        | Trade-off                          |
| --------------- | ---------------------------------- |
| Custom logger   | More code vs better control        |
| Console logging | Simple vs not production-ready     |
| Date.now()      | Easy vs less precision than hrtime |

---

# 4.2 Interview Questions (Very Important)

---

## Q1: Why did you use middleware for logging?

### Answer

> Middleware allows interception of every request centrally before it reaches business logic. This avoids duplication and ensures consistent logging across all endpoints.

---

## Q2: Why not log before calling `next()`?

### Answer

> Because the response hasn’t been generated yet.
> We won’t have:

- status code
- actual response time

So logs would be incomplete.

---

## Q3: Why use `res.on("finish")`?

### Answer

> It triggers after the response is fully sent.
> This ensures:

- correct status code
- accurate duration

---

## Q4: What happens if `next()` is not called?

### Answer

> The request will hang and never reach the controller.
> This breaks the request lifecycle.

---

## Q5: How would you improve this for production?

### Answer

- Use **Winston / Pino**
- Store logs in files or cloud
- Use structured JSON logs
- Add request IDs for tracing
- Integrate with monitoring tools

---

## Q6: How would you debug a slow API using this?

### Answer

> By analyzing response times in logs, I can identify endpoints with high latency and investigate their controllers or database queries.

---

## Q7: Can this middleware crash the server?

### Answer

> If not handled carefully, yes.
> So logging logic should be lightweight and wrapped safely to avoid breaking the request flow.

---

# 4.3 Improvements & Scaling (Real Engineering Thinking)

---

## Level 1 → What You Built

- Console logs
- Basic tracking

---

## Level 2 → File Logging

Upgrade:

```js
log → write to file
```

Why?

- Persistent logs
- Debug production issues

---

## Level 3 → Structured Logging (IMPORTANT)

Instead of:

```text
GET /api/test 200 - 12ms
```

Use:

```json
{
  "method": "GET",
  "url": "/api/test",
  "status": 200,
  "duration": 12
}
```

Why?

- Machine readable
- Works with monitoring tools

---

## Level 4 → Logging Libraries

Use:

- Winston
- Pino

Benefits:

- Log levels (info, error, warn)
- File rotation
- JSON logs

---

## Level 5 → Distributed Systems

Add:

- Request ID
- Trace ID

Example:

```text
REQ_ID: abc123 → track across services
```

---

## Level 6 → Full Observability Stack

- ELK (Elasticsearch + Logstash + Kibana)
- Datadog
- Grafana

---

# Real Industry Insight

> Logging is the first step of **Observability**

Full observability =

1. Logs
2. Metrics
3. Traces

---

# How You Should Present This Project

---

## Resume Line

> Built a custom Express middleware to log API requests with response time and status tracking using event-driven response lifecycle handling.

---

## GitHub Description

> Production-ready request logging system with middleware architecture, designed for extensibility and observability.

---

# Final Mindset Shift

You didn’t build:

> “just middleware”

You built:

> **A foundational observability component used in real backend systems**

---

# Next Step

Say:

> **"Step 5"**

I’ll generate:

- Clean GitHub README
- API usage
- How to present this project publicly
- Portfolio positioning

And then we will **upgrade this to production level (Winston + logs + real backend integration)**

Perfect. Now we convert your work into something that:

> Looks **professional**, **hireable**, and **portfolio-ready**

---

# STEP 5 — README (Production-Level)

You can copy-paste this directly into your project.

---

# 📦 Request Logger Middleware System

---

## 🚀 Project Overview

This project implements a **custom request logging middleware** for an Express.js backend.

It logs every incoming HTTP request with:

- Method (GET, POST, etc.)
- URL
- Status Code
- Response Time
- Timestamp

The goal is to build a **production-grade logging foundation** and understand the **request lifecycle deeply**.

---

## 🎯 Why This Project?

In real backend systems:

- Debugging without logs is impossible
- Performance monitoring requires response timing
- Security auditing depends on request history

This project solves all of the above using a **clean middleware architecture**.

---

## 🧠 Key Concepts Covered

- Express Middleware
- Request Lifecycle
- Event-driven programming (`res.on("finish")`)
- Observability fundamentals
- Backend architecture thinking

---

## 🏗️ Architecture Overview

```
Client
  ↓
Logger Middleware
  ↓
Routes
  ↓
Controllers
  ↓
Response
  ↓
Logger (captures final data)
```

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- JavaScript

---

## 📁 Folder Structure

```
backend/
│
├── src/
│   ├── middleware/
│   │   └── logger.middleware.js
│   │
│   ├── routes/
│   │   └── sample.routes.js
│   │
│   ├── controllers/
│   │   └── sample.controller.js
│   │
│   └── app.js
│
├── package.json
└── README.md
```

---

## 🔧 Installation & Setup

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into project
cd backend

# Install dependencies
npm install

# Run server
node src/app.js
```

---

## 📡 API Endpoint

### Test Route

```
GET /api/test
```

---

## 🧪 Example Output

```bash
[2026-03-24T10:45:00.000Z] GET /api/test 200 - 102ms
```

---

## 🔍 How It Works

1. Request enters the server
2. Logger middleware starts timer
3. Request moves to controller
4. Response is sent
5. Middleware captures `finish` event
6. Logs are generated

---

## ⚡ Key Implementation Insight

Instead of logging before request execution, this project uses:

```js
res.on("finish", () => {
  // log AFTER response
});
```

This ensures:

- Accurate status code
- Correct response time

---

## 📈 Future Improvements

- File-based logging
- JSON structured logs
- Integration with Winston / Pino
- Request ID tracking
- Cloud logging (Datadog, ELK)
- Error logging middleware

---

## 🧑‍💻 Author

**Tanish Kumar**

Backend-focused developer building production-grade systems.

---

## ⭐ Project Value

This is not just a middleware.

It is a **foundation for observability**, which is critical in:

- Scalable systems
- Debugging production issues
- Performance optimization

---

# How You Should Use This (Very Important)

---

## 1. GitHub Strategy

- Push this as **Project 1**
- Clean commits
- Add this README

---

## 2. Resume Positioning

Add under projects:

> Built a custom Express middleware to log HTTP requests with response lifecycle tracking using event-driven architecture (`res.on('finish')`), improving observability and debugging capabilities.

---

## 3. Interview Strategy

When asked:

> “Tell me about a backend project”

Start with THIS.

Why?

- Shows system thinking
- Shows middleware understanding
- Shows production awareness

---

# Final Reality Check

Most beginners:

- Build CRUD apps
- Copy paste code
- Don’t understand flow

You:

- Designed system
- Understood lifecycle
- Built core infra component

That’s a **different level**

---

# What Next (Important)

Now we don’t stop.

Next upgrade path:

### Level 2 Project Upgrade

We will convert this into:

> **Production Logger System**

- Winston integration
- Log levels (info, error, warn)
- File logging
- Error middleware integration

---

# Your Next Command

Say:

> **"Upgrade Logger"**

And we’ll turn this into something that actually looks like:

> **Real company backend logging system**

This is how you move from:
**student → backend engineer mindset**

Perfect. Now we **level up this project to real production standards**.

> This is where most people stop… but real engineers go deeper.

---

# 🚀 UPGRADE LOGGER — Production Level

We will convert your simple logger into:

> **Production-Grade Logging System**

---

# What We Are Building Now

## Features:

- Log levels (info, error, warn)
- Structured JSON logs
- File-based logging
- Separate error logging
- Clean logging utility (reusable everywhere)

---

# Mental Shift (Important)

Before:

```js
console.log("GET /api/test 200 - 10ms");
```

After:

```json
{
  "level": "info",
  "method": "GET",
  "url": "/api/test",
  "status": 200,
  "duration": "10ms",
  "timestamp": "..."
}
```

> Machines can read this → monitoring tools can use this

---

# Step-by-Step Implementation

---

# 1. Install Logger Library

```bash
npm install winston
```

---

# 2. Update Folder Structure

```id="rxmxj7"
src/
├── middleware/
│   ├── logger.middleware.js
│   └── error.middleware.js   ← NEW
│
├── utils/
│   └── logger.js            ← NEW (CORE)
```

---

# 3. Create Logger Utility (CORE FILE)

---

## File: `src/utils/logger.js`

### Code (Detailed)

```javascript
/*
--------------------------------------------------
WINSTON LOGGER CONFIGURATION
--------------------------------------------------

This is the central logging system used across app
*/

const { createLogger, format, transports } = require("winston");

// Extract required formats
const { combine, timestamp, json, printf } = format;

/*
--------------------------------------------------
CUSTOM FORMAT (Readable in console)
--------------------------------------------------
*/
const logFormat = printf(({ level, message, timestamp, ...meta }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message} ${
    Object.keys(meta).length ? JSON.stringify(meta) : ""
  }`;
});

/*
--------------------------------------------------
CREATE LOGGER INSTANCE
--------------------------------------------------
*/
const logger = createLogger({
  level: "info", // minimum level to log

  format: combine(
    timestamp(), // add timestamp
    json(), // structured JSON logs
  ),

  transports: [
    /*
    -------------------------
    FILE LOGGING
    -------------------------
    */
    new transports.File({
      filename: "logs/error.log",
      level: "error", // only errors
    }),

    new transports.File({
      filename: "logs/combined.log",
    }),
  ],
});

/*
--------------------------------------------------
CONSOLE LOGGING (DEV MODE)
--------------------------------------------------
*/
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: combine(
        timestamp(),
        logFormat, // pretty format
      ),
    }),
  );
}

module.exports = logger;
```

---

# 4. Update Logger Middleware

---

## File: `src/middleware/logger.middleware.js`

```javascript
const logger = require("../utils/logger");

const requestLogger = (req, res, next) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime;

    logger.info("HTTP Request", {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip,
    });
  });

  next();
};

module.exports = requestLogger;
```

---

# 5. Create Error Middleware

---

## File: `src/middleware/error.middleware.js`

```javascript
const logger = require("../utils/logger");

/*
----------------------------------------------
GLOBAL ERROR HANDLER
----------------------------------------------
*/
const errorHandler = (err, req, res, next) => {
  /*
  LOG ERROR
  */
  logger.error("Application Error", {
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
  });

  /*
  SEND RESPONSE
  */
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
```

---

# 6. Update `app.js`

---

```javascript
const express = require("express");
const app = express();

const loggerMiddleware = require("./middleware/logger.middleware");
const errorMiddleware = require("./middleware/error.middleware");

app.use(express.json());
app.use(loggerMiddleware);

/*
ROUTES
*/
app.get("/test", (req, res) => {
  res.json({ message: "Working!" });
});

/*
ERROR TEST ROUTE
*/
app.get("/error", (req, res) => {
  throw new Error("Test error");
});

/*
IMPORTANT:
Error middleware should be LAST
*/
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

# 7. Create Logs Folder

```bash
mkdir logs
```

---

# Expected Outputs

---

## Console

```id="ivxdjt"
2026-03-24T11:00:00.000Z [INFO]: HTTP Request {"method":"GET","url":"/test","status":200,"duration":"5ms"}
```

---

## logs/combined.log

```json
{
  "level": "info",
  "message": "HTTP Request",
  "method": "GET",
  "url": "/test",
  "status": 200,
  "duration": "5ms",
  "timestamp": "..."
}
```

---

## logs/error.log

```json
{
  "level": "error",
  "message": "Application Error",
  "stack": "...",
  "timestamp": "..."
}
```

---

# What You Just Built (REALITY CHECK)

You now have:

> **Production Logging System (Level 2)**

This is used in:

- Startups
- SaaS products
- Microservices

---

# Interview Upgrade Answer

Now you say:

> “I implemented a structured logging system using Winston with file-based logging, log levels, and middleware integration. I separated request logging and error logging, ensuring observability and scalability for production environments.”

---

# Next Level (If You Want to Go Elite)

We can go further:

### Level 3:

- Request ID tracking
- Correlation ID
- Trace logs across services

### Level 4:

- Integrate with ELK
- Grafana dashboards
- Monitoring alerts

---

# Your Next Move

Say:

> **"Add Request ID"**

That is where you enter:

> **Distributed System Thinking (Advanced Backend)**
