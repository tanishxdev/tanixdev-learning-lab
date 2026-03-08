# MODULE 0 → 0.2 Backend Foundations (Node.js)

# Topic 19 — Rate Limiting

(Protecting Backend + Preventing Model Overuse)

Rate limiting is **absolutely essential** in GenAI backends.

Without rate limiting:

* A bug can spam Gemini/OpenAI → huge bill
* A frontend loop can crash your backend
* Agents can recursively call tools infinitely
* Attackers can send 1,000 req/sec → denial of service
* RAG uploads can flood your pipeline
* Streams can overwhelm your server

This topic teaches how to **protect the system**.

---

# Topic 19 — RATE LIMITING

---

# 1. CONCEPT SUMMARY

Rate limiting controls:

1. How many requests a user can make
2. How fast agents/tools can call APIs
3. How often your server calls external APIs
4. How to prevent token overuse
5. How to stop accidental overload

We use two types:

---

## 1) **Request-based rate limiting**

Limits API calls per IP:

```
max 100 requests per 15 minutes
```

Used for:

* /ask
* /rag/query
* /embed

---

## 2) **Token/Cost-based rate limiting**

Limits model API usage:

```
max 10,000 tokens per user per day
```

(You will implement this later in GenAI modules.)

---

Right now we learn **Express request rate limiting**.

We use:

```
express-rate-limit
```

---

# 2. INSTALL

```
npm install express-rate-limit
```

---

# 3. SIMPLE RATE LIMITER

Example:

```js
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20              // allow 20 requests per minute
});
```

Attach to the app:

```js
app.use(limiter);
```

Now every route has protection.

---

# 4. RAG / AI BACKEND STYLE RATE LIMITING

We create granular limiters:

### 1. Global limiter

Protects entire backend.

### 2. LLM endpoint limiter

Protects expensive API usage.

### 3. RAG upload limiter

Protects expensive ingestion.

### 4. Tool limiter

Prevents tool abuse.

---

# 5. CODE EXAMPLE (Clean + Modular)

Create:

```
GenAI/src/module0-backend/rate-limiter/19-rate-limit.js
```

Add:

```js
/*
   Topic: Rate Limiting
   Purpose: Protect GenAI backend from overload and abuse.
*/

import express from "express";
import rateLimit from "express-rate-limit";

const app = express();
app.use(express.json());

// ----------------------------------------------
// 1) Global rate limiter
// ----------------------------------------------
const globalLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 50,             // allow 50 requests/minute
  message: {
    error: "Too many requests. Please slow down."
  }
});

app.use(globalLimiter);

// ----------------------------------------------
// 2) AI route limiter (stricter)
// ----------------------------------------------
const aiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,            // limit AI requests to 10/min
  message: {
    error: "AI rate limit exceeded."
  }
});

// Example AI route
app.post("/ask", aiLimiter, (req, res) => {
  const { prompt } = req.body || {};

  if (!prompt) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  const answer = `AI Response: ${prompt}`;
  res.json({ answer });
});

// ----------------------------------------------
app.listen(3007, () => {
  console.log("Rate limiter server running on 3007");
});
```

---

# 6. REAL GENAI USE CASES

---

## A) Protecting Gemini/OpenAI API Usage

```js
const modelLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5                    // 5 model calls per 15 mins
});
```

Attach to LLM route:

```js
app.post("/gemini", modelLimiter, handler);
```

Prevents accidental bankruptcy.

---

## B) RAG Ingestion

File upload should be limited:

```js
const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5                    // max 5 uploads/hour
});
```

---

## C) Agent Tool Protection

Agents sometimes loop aggressively.

Limiter prevents infinite loops:

```js
app.post("/agent/tool", aiLimiter);
```

---

## D) User-based Token Limits (Later Topic)

You’ll implement:

```
daily_token_limit = 10k
```

Tracking:

* total tokens used
* cost
* session-level limits

---

# 7. LOGGING RATE LIMIT EVENTS

Integrate with previous topic:

```js
import { logger } from "../../utils/logger.js";

const aiLimiter = rateLimit({
  windowMs: 60000,
  max: 10,
  handler: (req, res /* , next */) => {
    logger.warn("Rate limit exceeded", { ip: req.ip });
    res.status(429).json({ error: "AI rate limit exceeded" });
  }
});
```

---

# 8. INTUITION SUMMARY

Rate limiting protects:

* backend stability
* LLM cost
* RAG resources
* agent loops
* system integrity
* user fairness

It is a **non-negotiable** feature in production GenAI backends.

Your system should not crash because someone spammed 2000 requests.

---

# 9. PRACTICE QUESTIONS

1. Why is rate limiting essential for GenAI backends?
2. Difference between global limiter and route-specific limiter?
3. How do you handle rate-limit logs?
4. What happens if limiter is put before JSON parser?
5. How would you design limits for:

   * /ask
   * /rag/upload
   * /embed

---
