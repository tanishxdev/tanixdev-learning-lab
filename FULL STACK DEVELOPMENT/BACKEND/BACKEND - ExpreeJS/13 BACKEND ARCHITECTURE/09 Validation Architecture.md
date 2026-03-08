# Backend Architecture

# Topic 9 — Validation Architecture (Deep Dive)

Validation Architecture is **how a backend system verifies incoming data before executing business logic**.

Without proper validation:

```text
Invalid data → enters system → breaks logic → corrupts database
```

So **validation is a security + correctness layer**.

---

# 1. What is Validation?

## Simple Definition

Validation is the process of **checking whether incoming request data is correct, complete, and safe before processing it.**

---

## Example

User signup request:

```json
{
  "name": "Tanish",
  "email": "tanish@email.com",
  "password": "123456"
}
```

Validation checks:

```text
Name exists
Email format correct
Password length valid
```

---

# 2. Why Validation Architecture Exists

If validation is not handled properly:

Problems:

```text
Invalid data enters system
Database errors
Security vulnerabilities
Broken business logic
```

Example:

```json
{
  "email": "notanemail"
}
```

Without validation → system crashes later.

---

# 3. Validation Layer in Architecture

Correct backend architecture:

```text
Client
 ↓
Middleware
 ↓
Validation Layer
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
```

Validation should happen **before business logic**.

---

# 4. Mental Model

Think of validation like **airport baggage scanning**.

```text
Passenger
 ↓
Security scan
 ↓
Boarding
```

Mapping:

```text
Request
 ↓
Validation
 ↓
Controller
```

If validation fails → request rejected.

---

# 5. Where Validation Should Happen

Correct place:

```text
Middleware layer
```

Bad practice:

```text
Controller validation
```

Why?

Controllers should only handle:

```text
HTTP request
HTTP response
```

---

# 6. Basic Validation Example

Express example:

```javascript
const express = require("express");

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      error: "Name required",
    });
  }

  res.send("User created");
});
```

This works but **not scalable**.

---

# 7. Validation Middleware Example

Better approach:

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

Usage:

```javascript
app.post("/users", validateUser, controller);
```

Flow:

```text
Request
 ↓
validateUser middleware
 ↓
Controller
```

---

# 8. Validation Libraries

Professional backends use validation libraries.

Popular ones:

```text
Joi
Zod
Yup
express-validator
```

---

# 9. Validation Using Zod (Modern Approach)

Example schema:

```javascript
const { z } = require("zod");

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});
```

Validate request:

```javascript
const result = userSchema.safeParse(req.body);
```

If invalid:

```javascript
if (!result.success) {
  return res.status(400).json(result.error);
}
```

---

# 10. Validation Using express-validator

Install:

```bash
npm install express-validator
```

Example:

```javascript
const { body, validationResult } = require("express-validator");

app.post(
  "/users",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }

    res.send("User created");
  },
);
```

---

# 11. Schema Based Validation Architecture

Large projects create **validation schemas**.

Structure:

```text
validators
 ├ userValidator.js
 ├ authValidator.js
```

Example:

```javascript
const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});
```

Controller uses validation middleware.

---

# 12. Validation vs Sanitization

Difference:

| Concept      | Meaning                |
| ------------ | ---------------------- |
| Validation   | Check data correctness |
| Sanitization | Clean malicious input  |

Example sanitization:

```text
<script>alert()</script>
```

Sanitized to remove script.

---

# 13. Real World Example

User signup API:

```text
POST /api/v1/signup
```

Flow:

```text
Request
 ↓
Body parser middleware
 ↓
Validation middleware
 ↓
Controller
 ↓
Service
 ↓
Database
```

If validation fails:

```text
400 Bad Request
```

---

# 14. Validation Error Response Format

Professional APIs return consistent error structure.

Example:

```json
{
  "success": false,
  "errors": [{ "field": "email", "message": "Invalid email" }]
}
```

---

# 15. Example Production Validation Flow

Example login request:

```json
{
  "email": "test@email.com",
  "password": "123"
}
```

Flow:

```text
Request
 ↓
JSON parser
 ↓
Validation middleware
 ↓
Auth controller
 ↓
Auth service
 ↓
Database
```

Invalid password length → rejected early.

---

# 16. Common Validation Mistakes

### Mistake 1

Validation inside controllers.

---

### Mistake 2

No schema validation.

---

### Mistake 3

Returning inconsistent error formats.

---

### Mistake 4

Trusting frontend validation.

Frontend validation is **not secure**.

Always validate on backend.

---

# 17. Advantages of Validation Architecture

```text
Prevents invalid data
Improves security
Cleaner controllers
Better API reliability
```

---

# 18. Disadvantages

```text
Extra middleware layer
More setup code
```

But benefits outweigh disadvantages.

---

# 19. Interview Questions

### Basic

What is request validation?

---

### Intermediate

Where should validation happen in Express?

---

### Advanced

Difference between validation and sanitization?

Why should backend validate requests even if frontend validates?

---

# 20. Interview Answer Template

What is request validation?

Answer:

Request validation is the process of verifying incoming request data to ensure it meets the required format and constraints before it is processed by the application. It prevents invalid or malicious data from entering the system and is usually implemented using middleware or schema validation libraries.

---

# Final Mental Model

Always visualize:

```text
Request
 ↓
Body Parser
 ↓
Validation Layer
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
```

Validation acts as **a gatekeeper for the backend system**.
