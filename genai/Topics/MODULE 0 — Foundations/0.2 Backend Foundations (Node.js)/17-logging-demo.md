# MODULE 0 → 0.2 Backend Foundations (Node.js)

# Topic 17 — Logging (Backend Logging System)

Logging is one of the **most critical components** of a GenAI backend.
Without proper logging, your entire AI system becomes impossible to debug or monitor.

This topic will teach you:

* how to log safely
* how to structure logs
* how to avoid leaking secrets
* how to create a reusable logger module
* how to log model requests, responses, agent steps, tool calls
* how real GenAI companies do logging

Let’s begin.

---

# Topic 17 — LOGGING SYSTEM (Node.js)

---

# 1. CONCEPT SUMMARY

Logging helps you keep track of:

* errors
* warnings
* request flow
* internal state
* LLM inputs/outputs
* tool usage
* retries
* performance (execution time)
* rate limits
* user actions

A good logging system has:

1. **Log levels** (info, warn, error, debug)
2. **Timestamped logs**
3. **File-based logging**
4. **Console logging for development**
5. **Structured logs (JSON)**
6. **Separation of concerns** → logging lives in `utils/logger.js`
7. **No secret exposure** (API keys must be masked)

---

# 2. WHY LOGGING MATTERS IN GENAI ENGINEERING

Your GenAI backend will handle:

* multiple agents
* tool calls
* vector search
* streaming
* cross-model workflows
* retries
* failure scenarios
* partial outputs
* rate limit spikes

You must log everything because:

### Without proper logs:

* you cannot debug agent behaviour
* you cannot debug RAG accuracy
* you cannot fix hallucinations
* you cannot optimize cost
* you cannot scale the system

### With proper logs:

* you know exactly what happened
* you can replay model inputs
* you can detect failures in tools
* you can monitor system health
* you can build dashboards later

Logging is the spine of GenAI observability.

---

# 3. THEORY (Simple + Deep)

There are 3 main types of logs:

---

## 3.1 Console Logs (development)

Example:

```js
console.log("Server running");
```

Useful for development.
Not enough for production.

---

## 3.2 File Logs (production safe)

Logs stored inside:

```
logs/app.log
logs/errors.log
logs/requests.log
```

Using:

```
fs.appendFile()
```

---

## 3.3 Structured JSON Logs

Essential for AI systems:

```json
{
  "timestamp": 171234567,
  "level": "info",
  "event": "gemini_call",
  "prompt_length": 120,
  "response_time": 340
}
```

These logs can later be used for dashboards.

---

# 4. CODE (Your Logger Module)

Create file:

```
GenAI/src/utils/logger.js
```

Add:

```js
/*
   Logger Utility
   Purpose: Central logging system for GenAI backend.
*/

import fs from "fs";
import path from "path";

const logDir = path.resolve("logs");

// Ensure logs directory exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Append log to file
function writeLog(filename, message) {
  const fullPath = path.join(logDir, filename);
  fs.appendFile(fullPath, message + "\n", () => {});
}

// Timestamp
function timestamp() {
  return new Date().toISOString();
}

// Mask secrets
function sanitize(obj) {
  const clone = { ...obj };
  if (clone.apiKey) clone.apiKey = "***MASKED***";
  return clone;
}

export const logger = {
  info(msg, data = {}) {
    const log = {
      time: timestamp(),
      level: "INFO",
      msg,
      data: sanitize(data)
    };

    console.log(log);
    writeLog("app.log", JSON.stringify(log));
  },

  warn(msg, data = {}) {
    const log = {
      time: timestamp(),
      level: "WARN",
      msg,
      data: sanitize(data)
    };

    console.warn(log);
    writeLog("app.log", JSON.stringify(log));
  },

  error(msg, error = {}) {
    const log = {
      time: timestamp(),
      level: "ERROR",
      msg,
      error: {
        message: error.message,
        stack: error.stack
      }
    };

    console.error(log);
    writeLog("errors.log", JSON.stringify(log));
  }
};
```

---

# 5. USE LOGGER IN A ROUTE

Create:

```
src/module0-backend/17-logging-demo.js
```

```js
import express from "express";
import { logger } from "../../utils/logger.js";

const app = express();
app.use(express.json());

app.post("/ask", (req, res) => {
  const { prompt } = req.body;

  logger.info("Received prompt", { prompt });

  if (!prompt) {
    logger.warn("Missing prompt in request");
    return res.status(400).json({ error: "Prompt required" });
  }

  const answer = `AI Response to: ${prompt}`;

  logger.info("AI response generated", { answer });

  res.json({ answer });
});

app.listen(3005, () => {
  logger.info("Server started on port 3005");
});
```

---

# 6. REAL GENAI LOGGING EXAMPLES

### Example 1 — Log model calls

```js
logger.info("Gemini call", {
  model: "gemini-pro",
  characters: prompt.length
});
```

---

### Example 2 — Log RAG retrieval

```js
logger.info("RAG search", {
  query,
  vectorMatches: result.length
});
```

---

### Example 3 — Log tool usage

```js
logger.info("Tool executed", {
  tool: "web_search",
  input: query
});
```

---

### Example 4 — Log failures

```js
logger.error("LLM API failed", err);
```

---

# 7. INTUITION SUMMARY

A backend without logging = blind system.
A GenAI backend without logging = impossible to debug.

Your logger module:

* masks secrets
* logs to console
* logs to files
* handles error logs separately
* provides structure for future dashboards

This prepares you for:

* Agents
* RAG
* Multi-model pipelines
* LangChainJS
* LangGraph
* MCP Tools
* Observability systems

---

# 8. PRACTICE QUESTIONS

1. Why should API keys be masked in logs?
2. Why use separate logs for errors and normal activity?
3. What is structured logging?
4. How would you improve logger with log levels from ENV?
5. How would you log response time of each AI call?

---
