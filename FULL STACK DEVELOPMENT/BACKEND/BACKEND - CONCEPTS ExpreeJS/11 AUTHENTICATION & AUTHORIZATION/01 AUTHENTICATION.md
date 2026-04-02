Authentication and security are **core backend responsibilities**.
Without proper authentication, your APIs are open to anyone.

This phase explains **how to identify users and protect APIs**.

We will cover two major approaches:

- **JWT-based authentication (stateless)**
- **Session-based authentication (stateful)**

Both are widely used in production systems.

---

# PHASE 11 — Authentication & Security

Goal: Secure backend routes and verify user identity.

---

# 1. WHAT IS AUTHENTICATION?

Authentication means:

```text
Verifying the identity of a user
```

Example:

```text
User → Login with email/password → Server verifies → Access granted
```

After authentication the server must **remember the user identity** for future requests.

This is done using:

```text
JWT tokens
Sessions
Cookies
```

---

# PART 1 — JWT AUTHENTICATION

---

# 2. WHAT IS JWT?

JWT stands for:

```text
JSON Web Token
```

It is a **secure token that represents user identity**.

A JWT contains encoded information about the user.

Example JWT:

```text
header.payload.signature
```

Example:

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJ1c2VySWQiOjEsIm5hbWUiOiJUYW5pc2gifQ
.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

---

# 3. JWT STRUCTURE

JWT has three parts.

---

## 1️⃣ Header

Contains algorithm info.

Example:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

---

## 2️⃣ Payload

Contains user data.

Example:

```json
{
  "userId": 1,
  "name": "Tanish"
}
```

---

## 3️⃣ Signature

Used to verify token integrity.

Created using:

```text
secret key + header + payload
```

This prevents token tampering.

---

# 4. JWT LOGIN FLOW

Typical authentication flow:

```text
User logs in
      ↓
Server verifies credentials
      ↓
Server creates JWT
      ↓
JWT sent to client
      ↓
Client stores token
      ↓
Client sends token with each request
      ↓
Server verifies token
      ↓
Access granted
```

---

# 5. INSTALL JWT LIBRARY

```bash
npm install jsonwebtoken
```

---

# 6. CREATE JWT TOKEN (LOGIN)

Example login route.

```js
const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Example user validation
  if (email !== "admin@test.com" || password !== "1234") {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const user = {
    id: 1,
    email: "admin@test.com",
  };

  // Create token
  const token = jwt.sign(user, SECRET, {
    expiresIn: "1h",
  });

  res.json({
    success: true,
    token,
  });
});
```

---

# 7. PROTECT ROUTES USING MIDDLEWARE

Middleware verifies token.

```js
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token required",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(403).json({
      message: "Invalid token",
    });
  }
}
```

---

# 8. PROTECTED ROUTE

```js
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to dashboard",
    user: req.user,
  });
});
```

Request must include:

```text
Authorization: Bearer <token>
```

---

# PART 2 — SESSION AUTHENTICATION

---

# 9. WHAT IS A SESSION?

Session means:

```text
Server stores user login state
```

Instead of storing identity in token, the server stores it in memory or database.

Client only stores **session ID cookie**.

---

# 10. SESSION LOGIN FLOW

```text
User logs in
      ↓
Server creates session
      ↓
Session ID stored on server
      ↓
Session ID cookie sent to browser
      ↓
Browser sends cookie with each request
      ↓
Server retrieves session
      ↓
User authenticated
```

---

# 11. INSTALL SESSION MIDDLEWARE

```bash
npm install express-session
```

---

# 12. SESSION CONFIGURATION

```js
const session = require("express-session");

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  }),
);
```

Meaning:

- secret → encrypt session ID
- resave → prevent unnecessary session saves
- saveUninitialized → avoid empty sessions
- maxAge → session expiry

---

# 13. LOGIN USING SESSION

```js
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

# 14. PROTECT ROUTE WITH SESSION

```js
app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("Unauthorized");
  }

  res.send("Welcome to dashboard");
});
```

---

# 15. SESSION EXPIRY HANDLING

Session expires using:

```js
cookie: {
  maxAge: 60000;
}
```

Meaning:

```text
Session expires after 1 minute
```

If user inactive → session destroyed.

---

# 16. SESSION VS JWT

| Feature     | JWT                      | Session                |
| ----------- | ------------------------ | ---------------------- |
| Storage     | Client                   | Server                 |
| State       | Stateless                | Stateful               |
| Scalability | High                     | Lower                  |
| Security    | Depends on token storage | Controlled server-side |
| Performance | Faster                   | Slightly slower        |

---

# 17. WHEN TO USE JWT?

JWT works best for:

```text
APIs
Microservices
Mobile apps
Single-page apps
```

---

# 18. WHEN TO USE SESSIONS?

Sessions work best for:

```text
Traditional web apps
Server-rendered websites
Admin dashboards
```

---

# 19. COMMON SECURITY MISTAKES

### Storing sensitive data inside JWT

Payload should only contain minimal information.

---

### Not setting token expiration

Always use:

```js
expiresIn: "1h";
```

---

### Not using HTTPS

Tokens and cookies must be transmitted securely.

---

# 20. INTERVIEW QUESTIONS

Basic:

1. What is JWT?
2. Difference between authentication and authorization?
3. What is a session?

Intermediate:

4. How does JWT authentication work?
5. What is the role of the secret key?
6. What is stateless authentication?

Advanced:

7. JWT vs session authentication?
8. How do you secure JWT tokens?
9. How do you implement refresh tokens?

---

# PERFECT INTERVIEW ANSWER

Question:

What is JWT authentication?

Answer:

JWT authentication uses a JSON Web Token to represent user identity. After a successful login, the server generates a signed token containing user information and sends it to the client. The client includes this token in future requests, and the server verifies it using a secret key to authenticate the user without storing session state.

---

# FINAL ENGINEER MINDSET

Authentication must ensure:

```text
User identity verified
Routes protected
Tokens securely validated
Sessions managed properly
```

Security mistakes can expose your entire backend.

---
