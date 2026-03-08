

# SESSION AUTHENTICATION — COMPLETE DEEP DIVE

---

# 1. WHAT IS SESSION AUTHENTICATION

## Definition

Session authentication is a **stateful authentication system** where the server stores user login state.

Instead of storing identity in the client, the **server stores user data in a session store** and sends only a **session ID to the client**.

---

## Simple Explanation

After login:

```text
Server creates session
Server stores session data
Server sends session ID cookie
Browser sends cookie with every request
Server reads session data using ID
```

---

# 2. SESSION AUTHENTICATION MENTAL MODEL

Think of a **cloakroom ticket system**.

Example:

```text
You give bag → attendant stores it
You receive ticket
Later you show ticket → attendant retrieves bag
```

Mapping:

| Real Life | Session Auth  |
| --------- | ------------- |
| Ticket    | Session ID    |
| Cloakroom | Session Store |
| Bag       | User data     |

---

# 3. SESSION AUTHENTICATION FLOW

Complete lifecycle:

```text
User login
     ↓
Server verifies credentials
     ↓
Server creates session
     ↓
Session stored in session store
     ↓
Server sends session ID cookie
     ↓
Browser stores cookie
     ↓
Browser sends cookie with each request
     ↓
Server retrieves session
     ↓
User authenticated
```

---

# 4. STATEFUL AUTHENTICATION

Sessions are **stateful**.

Meaning:

```text
Server remembers user state
```

Example session data stored on server:

```json
{
  "sessionId": "abc123",
  "userId": 1,
  "email": "user@test.com",
  "loginTime": "2025-03-10"
}
```

---

# 5. WHAT IS A SESSION ID

Session ID is a **unique identifier for a session**.

Example:

```text
sid = s%3A7FJd92LJk...
```

This ID is stored inside a cookie.

Example header:

```text
Set-Cookie: connect.sid=s%3A7FJd92LJk...
```

---

# 6. EXPRESS SESSION MIDDLEWARE

Library used:

```bash
npm install express-session
```

---

# 7. BASIC SESSION SETUP

```javascript
const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 600000,
    },
  }),
);

app.listen(3000);
```

---

# 8. SESSION CONFIGURATION OPTIONS

### secret

Used to sign session ID cookie.

```javascript
secret: "mysecretkey";
```

---

### resave

Controls session saving behavior.

```javascript
resave: false;
```

Prevents unnecessary session writes.

---

### saveUninitialized

Prevents empty sessions from being saved.

```javascript
saveUninitialized: false;
```

---

### cookie

Cookie configuration.

Example:

```javascript
cookie: {
  maxAge: 60000;
}
```

Session expires after 1 minute.

---

# 9. LOGIN WITH SESSION

Example login route.

```javascript
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@test.com" && password === "1234") {
    req.session.user = {
      id: 1,
      email,
    };

    res.send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
});
```

---

# 10. WHAT HAPPENS INTERNALLY

When login succeeds:

```text
Session created
Session stored in memory store
Session ID cookie sent
```

Example stored session:

```json
{
  "sid": "abc123",
  "user": {
    "id": 1,
    "email": "admin@test.com"
  }
}
```

---

# 11. COOKIE SENT TO CLIENT

Server sends header:

```text
Set-Cookie: connect.sid=s%3Aabc123...
```

Browser stores cookie.

---

# 12. CLIENT REQUEST WITH SESSION

Next request:

```text
GET /dashboard
Cookie: connect.sid=s%3Aabc123...
```

Server reads session store using ID.

---

# 13. PROTECTING ROUTES

Middleware example:

```javascript
function authMiddleware(req, res, next) {
  if (!req.session.user) {
    return res.status(401).send("Unauthorized");
  }

  next();
}
```

Usage:

```javascript
app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to dashboard");
});
```

---

# 14. SESSION LOGOUT

Destroy session.

```javascript
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("Logged out");
  });
});
```

---

# 15. SESSION STORE TYPES

By default Express uses **MemoryStore**.

But this is NOT suitable for production.

Production stores:

```text
Redis
MongoDB
PostgreSQL
MySQL
```

---

# Example Redis Session Store

```bash
npm install connect-redis redis
```

Example:

```javascript
const RedisStore = require("connect-redis")(session);
```

Redis stores sessions across servers.

---

# 16. SESSION STORAGE STRUCTURE

Example Redis session:

```json
{
  "session:abc123": {
    "userId": 1,
    "email": "admin@test.com"
  }
}
```

---

# 17. SESSION EXPIRATION

Sessions can expire using:

```javascript
cookie: {
  maxAge: 60000;
}
```

Example:

```text
Session expires after 60 seconds
```

---

# 18. SESSION RENEWAL

Each request can reset expiration.

Example:

```javascript
req.session.touch();
```

Used to keep session alive.

---

# 19. SESSION SECURITY BEST PRACTICES

### HTTPOnly Cookies

Prevent JavaScript access.

```javascript
cookie: {
  httpOnly: true;
}
```

---

### Secure Cookies

Only sent via HTTPS.

```javascript
cookie: {
  secure: true;
}
```

---

### SameSite Cookies

Prevent CSRF attacks.

```javascript
cookie: {
  sameSite: "strict";
}
```

---

# 20. SESSION ATTACKS

Common attacks:

```text
Session hijacking
Session fixation
CSRF
```

Mitigation:

```text
Regenerate session after login
Use secure cookies
Use CSRF tokens
```

---

# 21. SESSION REGENERATION

After login:

```javascript
req.session.regenerate((err) => {
  req.session.user = user;
});
```

Prevents session fixation.

---

# 22. SESSION VS JWT

| Feature     | Session  | JWT                      |
| ----------- | -------- | ------------------------ |
| State       | Stateful | Stateless                |
| Storage     | Server   | Client                   |
| Scalability | Lower    | Higher                   |
| Security    | Strong   | Depends on token storage |

---

# 23. WHEN TO USE SESSIONS

Best for:

```text
Server rendered apps
Admin dashboards
Traditional websites
```

---

# 24. COMPLETE SESSION AUTH FLOW

```text
User login
     ↓
Server verifies credentials
     ↓
Session created
     ↓
Session ID cookie sent
     ↓
Browser sends cookie with requests
     ↓
Server reads session store
     ↓
User authenticated
```

---

# 25. INTERVIEW QUESTIONS

Basic

What is session authentication?

Intermediate

How does express-session work?

Advanced

Why is MemoryStore not recommended in production?

---

# PERFECT INTERVIEW ANSWER

Session authentication is a stateful authentication mechanism where the server stores user session data and sends a unique session ID to the client via cookies. The client sends this session ID with every request, allowing the server to retrieve session data and authenticate the user.

---

# FINAL BACKEND ENGINEER MINDSET

Sessions provide:

```text
Stateful authentication
Server controlled login state
Strong security control
```

But they require **session storage infrastructure**.
