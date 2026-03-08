# Backend Architecture

# Topic 12 — Logging Architecture (Deep Dive)

Logging is **a critical component of production backend systems**.
Without proper logging, debugging production issues becomes extremely difficult.

Logging Architecture defines **how applications record events, errors, and system activity**.

---

# 1. What is Logging?

## Simple Definition

Logging is the process of **recording events and system behavior during application execution**.

Logs help developers:

```text
Debug errors
Monitor application behavior
Track user activity
Diagnose production issues
Audit system events
```

---

# 2. Why Logging Architecture Exists

Without logging:

```text
System crashes → No information why
Production issue → Impossible to reproduce
User reports bug → No trace
```

Logging provides **visibility into system behavior**.

---

# 3. Mental Model

Think of logging like a **flight recorder (black box) in an airplane**.

```text
Flight events recorded
↓
Crash occurs
↓
Engineers analyze logs
```

Backend mapping:

```text
Application events recorded
↓
Bug occurs
↓
Developers analyze logs
```

Logs help answer:

```text
What happened?
When did it happen?
Why did it happen?
```

---

# 4. Logging in Backend Architecture

Logging occurs at multiple layers.

```text
Client Request
 ↓
Request Logger
 ↓
Controller Logs
 ↓
Service Logs
 ↓
Database Logs
 ↓
Error Logs
```

Logs are collected throughout the **request lifecycle**.

---

# 5. Types of Logs

Backend systems typically produce several log types.

---

## 5.1 Request Logs

Record incoming HTTP requests.

Example:

```text
GET /users 200 12ms
```

Helps track API usage.

---

## 5.2 Error Logs

Capture system errors.

Example:

```text
Error: Database connection failed
```

Critical for debugging.

---

## 5.3 Application Logs

Record important events.

Example:

```text
User 123 created order 456
```

Useful for system auditing.

---

## 5.4 Security Logs

Track security events.

Example:

```text
Unauthorized login attempt
```

Used for security monitoring.

---

# 6. Logging Levels

Professional systems categorize logs by severity.

| Level | Purpose                    |
| ----- | -------------------------- |
| info  | normal application events  |
| warn  | potential issues           |
| error | errors that need attention |
| debug | detailed development logs  |

Example:

```text
INFO: User login successful
WARN: API rate limit approaching
ERROR: Database connection failed
```

---

# 7. Basic Logging Example

Simple Node logging:

```javascript
console.log("Server started");
```

But `console.log` is **not suitable for production**.

Why?

```text
No log levels
No structured format
Hard to manage large logs
```

Professional systems use **logging libraries**.

---

# 8. Popular Logging Libraries

Common logging tools for Node.js:

```text
Winston
Pino
Morgan
Bunyan
```

Each provides structured logging.

---

# 9. Request Logging with Morgan

Morgan logs HTTP requests.

Install:

```bash
npm install morgan
```

Example:

```javascript
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/users", (req, res) => {
  res.json({ message: "Users API" });
});

app.listen(3000);
```

Example output:

```text
GET /users 200 5.3 ms
```

---

# 10. Application Logging with Winston

Install:

```bash
npm install winston
```

Basic example:

```javascript
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()],
});

logger.info("Server started");
logger.error("Database connection failed");
```

---

# 11. Structured Logging

Professional systems use **structured logs**.

Example JSON log:

```json
{
  "level": "info",
  "message": "User login",
  "userId": 123,
  "timestamp": "2025-01-01T10:00:00"
}
```

Benefits:

```text
Machine readable
Easy log analysis
Better monitoring
```

---

# 12. Logging Middleware

You can implement custom logging middleware.

Example:

```javascript
function requestLogger(req, res, next) {
  console.log(`${req.method} ${req.url}`);

  next();
}
```

Use:

```javascript
app.use(requestLogger);
```

Logs every request.

---

# 13. Logging Architecture Flow

Example request lifecycle with logs:

```text
Request received
 ↓
Request log
 ↓
Controller log
 ↓
Service log
 ↓
Database query log
 ↓
Error log (if occurs)
```

Logs capture **complete request journey**.

---

# 14. Log Storage

Logs must be stored somewhere.

Common storage options:

```text
Local files
Log servers
Cloud logging systems
```

Popular tools:

```text
Elastic Stack (ELK)
Datadog
Splunk
AWS CloudWatch
```

---

# 15. Real World Logging Example

Example login request:

```text
POST /login
```

Logs generated:

```text
INFO Request received
INFO User authentication started
WARN Invalid password attempt
ERROR Login failed
```

These logs help trace **what happened**.

---

# 16. Logging Best Practices

### 1 Log meaningful events

Example:

```text
User registered
Order placed
Payment processed
```

---

### 2 Avoid logging sensitive data

Do not log:

```text
Passwords
Credit card numbers
Tokens
```

---

### 3 Use log levels properly

Example:

```text
info → normal operation
warn → unusual behavior
error → system failure
```

---

### 4 Use structured logging

Prefer JSON logs.

---

### 5 Centralize logging

All services should log consistently.

---

# 17. Common Logging Mistakes

### Mistake 1

Using only `console.log`.

---

### Mistake 2

Logging sensitive information.

---

### Mistake 3

No log levels.

---

### Mistake 4

Logging too much unnecessary data.

---

# 18. Advantages of Logging Architecture

```text
Easier debugging
Better system monitoring
Improved security tracking
Faster incident investigation
```

---

# 19. Interview Questions

### Basic

What is logging in backend systems?

---

### Intermediate

Why is logging important in production?

---

### Advanced

Difference between structured and unstructured logging?

How do you design a logging system for microservices?

---

# 20. Interview Answer Template

What is logging?

Answer:

Logging is the process of recording application events during execution. It helps developers monitor system behavior, debug errors, track user activity, and analyze system performance.

---

# Final Mental Model

```text
Request
 ↓
Request Logger
 ↓
Controller Logs
 ↓
Service Logs
 ↓
Error Logs
 ↓
Log Storage
```

Logging acts as **the observability layer of the backend system**.
