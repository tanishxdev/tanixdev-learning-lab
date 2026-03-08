# Backend Architecture

# Topic 13 — Security Architecture (Deep Dive)

Security Architecture defines **how a backend system protects data, APIs, and infrastructure from unauthorized access and attacks**.

Every production backend must implement **multiple security layers**.

---

# 1. What is Security Architecture?

## Simple Definition

Security Architecture is the **design of mechanisms that protect backend systems from threats, attacks, and unauthorized access.**

It includes:

```text
Authentication
Authorization
Input validation
Rate limiting
Secure headers
Encryption
```

---

# 2. Mental Model

Think of backend security like **a building security system**.

```text
Visitor
 ↓
Security gate
 ↓
Identity verification
 ↓
Access control
 ↓
Room access
```

Mapping to backend:

```text
Client
 ↓
Rate limiter
 ↓
Authentication
 ↓
Authorization
 ↓
API access
```

Each layer protects the system.

---

# 3. Security Layers in Backend

Professional backend security has **multiple layers**.

```text
Client Request
 ↓
HTTPS
 ↓
Rate Limiting
 ↓
Input Validation
 ↓
Authentication
 ↓
Authorization
 ↓
Controller
 ↓
Database
```

If any layer fails → request rejected.

---

# 4. Authentication

Authentication answers:

```text
Who is the user?
```

Common methods:

```text
JWT authentication
Session authentication
OAuth
API keys
```

---

## JWT Authentication Example

Install library:

```bash
npm install jsonwebtoken
```

Generate token:

```javascript
const jwt = require("jsonwebtoken");

const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, {
  expiresIn: "1h",
});
```

---

## Verify Token Middleware

```javascript
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
}
```

Usage:

```javascript
app.get("/profile", authMiddleware, controller);
```

---

# 5. Authorization

Authorization answers:

```text
What is the user allowed to do?
```

Example roles:

```text
admin
user
moderator
```

---

## Authorization Middleware Example

```javascript
function adminOnly(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Forbidden",
    });
  }

  next();
}
```

Usage:

```javascript
app.delete("/users/:id", authMiddleware, adminOnly, controller);
```

---

# 6. Input Validation

Validation protects against malicious input.

Example attack:

```text
SQL Injection
```

Bad input:

```text
' OR 1=1 --
```

Validation prevents such inputs.

Example validation middleware:

```javascript
if (!req.body.email) {
  return res.status(400).json({
    message: "Email required",
  });
}
```

---

# 7. Rate Limiting

Rate limiting prevents **API abuse**.

Example:

```text
100 requests per minute per IP
```

Install:

```bash
npm install express-rate-limit
```

Example:

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
});

app.use(limiter);
```

If limit exceeded → request blocked.

---

# 8. CORS (Cross-Origin Resource Sharing)

Browsers restrict cross-origin requests.

Example:

Frontend:

```text
http://frontend.com
```

Backend:

```text
http://api.com
```

CORS middleware allows access.

Install:

```bash
npm install cors
```

Example:

```javascript
const cors = require("cors");

app.use(cors());
```

---

# 9. Secure HTTP Headers

Use **Helmet** to secure headers.

Install:

```bash
npm install helmet
```

Example:

```javascript
const helmet = require("helmet");

app.use(helmet());
```

Helmet protects against:

```text
XSS attacks
Clickjacking
MIME sniffing
```

---

# 10. Password Security

Passwords must **never be stored in plain text**.

Use hashing.

Install:

```bash
npm install bcrypt
```

Example:

```javascript
const bcrypt = require("bcrypt");

const hashedPassword = await bcrypt.hash(password, 10);
```

Verify password:

```javascript
const valid = await bcrypt.compare(password, hashedPassword);
```

---

# 11. HTTPS

Always use HTTPS in production.

HTTPS provides:

```text
Encryption
Data integrity
Secure communication
```

Without HTTPS:

```text
Passwords can be intercepted
```

---

# 12. CSRF Protection

CSRF = Cross Site Request Forgery.

Attack example:

User logged in → malicious site sends request on behalf of user.

Solution:

```text
CSRF tokens
SameSite cookies
```

Library:

```text
csurf
```

---

# 13. Security Middleware Pipeline

Example security pipeline:

```text
Request
 ↓
Rate limiter
 ↓
CORS middleware
 ↓
Helmet security headers
 ↓
Validation middleware
 ↓
Authentication middleware
 ↓
Authorization middleware
 ↓
Controller
```

Each layer protects system.

---

# 14. Real World Example

Example login API:

```text
POST /login
```

Security flow:

```text
Request
 ↓
Rate limiter
 ↓
Validation
 ↓
Password hash comparison
 ↓
JWT token generation
 ↓
Response
```

---

# 15. Common Backend Attacks

Security architecture must protect against:

```text
SQL Injection
Cross-Site Scripting (XSS)
CSRF
Brute force attacks
API abuse
Token theft
```

Security layers mitigate these risks.

---

# 16. Security Best Practices

### 1 Use HTTPS

---

### 2 Never store plain passwords

---

### 3 Use rate limiting

---

### 4 Validate all inputs

---

### 5 Use secure headers

---

### 6 Store secrets in environment variables

---

### 7 Implement authentication + authorization

---

# 17. Common Security Mistakes

### Mistake 1

Hardcoding secrets.

---

### Mistake 2

No rate limiting.

---

### Mistake 3

Trusting frontend validation.

---

### Mistake 4

Returning sensitive data in errors.

---

# 18. Advantages of Security Architecture

```text
Protects sensitive data
Prevents attacks
Improves system reliability
Builds user trust
```

---

# 19. Interview Questions

### Basic

What is authentication?

What is authorization?

---

### Intermediate

Difference between authentication and authorization?

---

### Advanced

How do you secure REST APIs?

What is rate limiting?

How does JWT authentication work?

---

# 20. Interview Answer Template

What is authentication?

Answer:

Authentication is the process of verifying the identity of a user or system attempting to access a resource. It ensures that the user is who they claim to be, usually through credentials such as passwords, tokens, or certificates.

---

# Final Mental Model

Always visualize backend security like this:

```text
Client
 ↓
HTTPS
 ↓
Rate Limiter
 ↓
Validation
 ↓
Authentication
 ↓
Authorization
 ↓
Controller
 ↓
Database
```

Security is **a layered defense system for backend applications**.

---
