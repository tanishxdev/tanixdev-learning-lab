# PHASE 11 — AUTHENTICATION & AUTHORIZATION

Goal:

```text
Identify the user → Verify identity → Control access to resources
```

---

# 1. AUTHENTICATION vs AUTHORIZATION

## Authentication

Authentication answers:

```text
Who are you?
```

Example:

```text
Login with email/password
OTP verification
Google login
JWT verification
Session validation
```

Example:

```text
User logs in → Server verifies credentials → Identity confirmed
```

---

## Authorization

Authorization answers:

```text
What are you allowed to do?
```

Example:

```text
Admin can delete users
User cannot delete users
```

Example:

```text
User authenticated → check role → allow/deny action
```

---

# SIMPLE DIFFERENCE

| Feature | Authentication  | Authorization        |
| ------- | --------------- | -------------------- |
| Purpose | Verify identity | Check permissions    |
| Example | Login           | Access control       |
| Occurs  | First           | After authentication |

---

# 2. AUTHENTICATION METHODS

Major methods used in production.

```text
Session Authentication
JWT Authentication
OAuth Authentication
API Key Authentication
Basic Authentication
```

We will cover **all**.

---

# 3. BASIC AUTHENTICATION

Basic authentication sends credentials in header.

Example request header:

```text
Authorization: Basic base64(username:password)
```

Example encoded:

```text
Authorization: Basic YWRtaW46MTIzNA==
```

Example Express implementation:

```javascript
const express = require("express");
const app = express();

function basicAuth(req, res, next) {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).send("Authorization required");
  }

  const encoded = header.split(" ")[1];

  const decoded = Buffer.from(encoded, "base64").toString();

  const [username, password] = decoded.split(":");

  if (username === "admin" && password === "1234") {
    next();
  } else {
    res.status(401).send("Invalid credentials");
  }
}

app.get("/secure", basicAuth, (req, res) => {
  res.send("Secure route");
});

app.listen(3000);
```

⚠ Used rarely in modern APIs.

---

# 4. SESSION AUTHENTICATION

Sessions store login state **on the server**.

---

## SESSION FLOW

```text
User logs in
      ↓
Server creates session
      ↓
Session ID stored in DB
      ↓
Cookie sent to browser
      ↓
Browser sends cookie with requests
      ↓
Server verifies session
```

---

## Install

```bash
npm install express-session
```

---

## Session Setup

```javascript
const session = require("express-session");

app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 600000,
    },
  }),
);
```

---

## Login Route

```javascript
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@test.com" && password === "1234") {
    req.session.user = {
      id: 1,
      email,
    };

    return res.send("Login successful");
  }

  res.status(401).send("Invalid credentials");
});
```

---

## Protected Route

```javascript
function sessionAuth(req, res, next) {
  if (!req.session.user) {
    return res.status(401).send("Unauthorized");
  }

  next();
}

app.get("/dashboard", sessionAuth, (req, res) => {
  res.send("Welcome to dashboard");
});
```

---

# SESSION EXPIRY

Set expiration:

```javascript
cookie: {
  maxAge: 60000;
}
```

Session expires after inactivity.

---

# SESSION LOGOUT

```javascript
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("Logged out");
  });
});
```

---

# 5. JWT AUTHENTICATION

JWT is **stateless authentication**.

Server does not store session.

---

# JWT STRUCTURE

```text
Header.Payload.Signature
```

Example:

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJ1c2VySWQiOjEsIm5hbWUiOiJUYW5pc2gifQ
.
signature
```

---

# INSTALL JWT

```bash
npm install jsonwebtoken
```

---

# JWT LOGIN

```javascript
const jwt = require("jsonwebtoken");

const SECRET = "secretkey";

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== "admin@test.com" || password !== "1234") {
    return res.status(401).send("Invalid credentials");
  }

  const user = {
    id: 1,
    email,
  };

  const token = jwt.sign(user, SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});
```

---

# JWT VERIFY MIDDLEWARE

```javascript
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send("Token required");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    res.status(403).send("Invalid token");
  }
}
```

---

# PROTECTED ROUTE

```javascript
app.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "User profile",
    user: req.user,
  });
});
```

---

# TOKEN REQUEST HEADER

```text
Authorization: Bearer <token>
```

---

# 6. REFRESH TOKENS

Short-lived tokens improve security.

Flow:

```text
Access Token (15 min)
Refresh Token (7 days)
```

If access token expires:

```text
Client sends refresh token
Server generates new access token
```

---

# 7. ROLE-BASED AUTHORIZATION

Authorization controls **permissions**.

Example roles:

```text
Admin
User
Manager
```

---

## Role Middleware

```javascript
function authorize(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).send("Forbidden");
    }

    next();
  };
}
```

---

## Route Example

```javascript
app.delete("/users/:id", verifyToken, authorize("admin"), (req, res) => {
  res.send("User deleted");
});
```

---

# 8. PERMISSION-BASED AUTHORIZATION

More granular than roles.

Example:

```text
canDeleteUser
canCreatePost
canEditPost
```

Example middleware:

```javascript
function checkPermission(permission) {
  return (req, res, next) => {
    if (!req.user.permissions.includes(permission)) {
      return res.status(403).send("Permission denied");
    }

    next();
  };
}
```

---

# 9. OAUTH AUTHENTICATION

OAuth allows login using:

```text
Google
Facebook
GitHub
Microsoft
```

Flow:

```text
User clicks Google login
      ↓
Redirect to Google
      ↓
Google authenticates user
      ↓
Google sends authorization code
      ↓
Server exchanges code for access token
```

Used in:

```text
Social login systems
```

Libraries:

```text
passport.js
google-auth-library
```

---

# 10. API KEY AUTHENTICATION

Used for:

```text
Public APIs
Third-party integrations
```

Client sends:

```text
x-api-key: abc123
```

Middleware example:

```javascript
function apiKeyAuth(req, res, next) {
  const key = req.headers["x-api-key"];

  if (key !== "secret123") {
    return res.status(401).send("Invalid API key");
  }

  next();
}
```

---

# 11. SECURITY BEST PRACTICES

### Password hashing

Never store raw passwords.

Use:

```bash
npm install bcrypt
```

Example:

```javascript
const bcrypt = require("bcrypt");

const hash = await bcrypt.hash(password, 10);
```

---

### Rate limiting

Prevent brute-force attacks.

```bash
npm install express-rate-limit
```

---

### HTTPS only

Tokens must never travel over HTTP.

---

### Token expiration

Always set expiration:

```javascript
expiresIn: "1h";
```

---

# 12. COMPLETE AUTH FLOW (PRODUCTION)

```text
Client login
      ↓
Server verifies credentials
      ↓
JWT issued
      ↓
Client stores token
      ↓
Client sends token in Authorization header
      ↓
Middleware verifies token
      ↓
Authorization middleware checks permissions
      ↓
Controller executes
      ↓
Response returned
```

---

# 13. INTERVIEW QUESTIONS

Basic

1. Authentication vs authorization
2. What is JWT
3. What is session

Intermediate

4. JWT structure
5. Stateless vs stateful authentication
6. Role based authorization

Advanced

7. How would you implement refresh tokens?
8. How do you secure JWT tokens?
9. OAuth authentication flow?

---

# PERFECT INTERVIEW ANSWER

**Authentication**

Authentication verifies user identity using credentials like passwords, tokens, or sessions.

**Authorization**

Authorization determines what actions an authenticated user is allowed to perform based on roles or permissions.

---

# FINAL ENGINEER MINDSET

Secure backend must ensure:

```text
Identity verification
Token validation
Permission control
Secure password storage
Proper session/token expiration
```

Authentication + authorization are **foundation of secure APIs**.

---
