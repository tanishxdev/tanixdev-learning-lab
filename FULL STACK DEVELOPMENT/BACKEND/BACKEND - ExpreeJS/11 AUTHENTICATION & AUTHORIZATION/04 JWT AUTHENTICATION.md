# JWT AUTHENTICATION — COMPLETE DEEP DIVE

---

# 1. WHAT IS JWT

## Definition

JWT stands for:

```
JSON Web Token
```

It is a **secure, compact token used to represent user identity**.

JWT allows **stateless authentication**.

Meaning:

```
Server does NOT store session
Token itself contains identity
```

---

# 2. WHY JWT EXISTS

Before JWT we had **session authentication**.

Problem with sessions:

```
Server must store session
Hard to scale across servers
```

JWT solves this.

```
Identity stored inside token
Server just verifies signature
No session storage needed
```

---

# 3. STATELESS AUTHENTICATION

JWT is **stateless**.

Meaning:

```
Server does not remember user state
Token carries user information
```

Example request:

```
GET /profile
Authorization: Bearer <JWT>
```

Server verifies token and extracts user.

---

# 4. JWT STRUCTURE

JWT has **three parts**.

```
Header.Payload.Signature
```

Example:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJ1c2VySWQiOjEsIm5hbWUiOiJUYW5pc2gifQ
.
signature
```

---

# 5. JWT PARTS EXPLAINED

## 1️⃣ Header

Contains metadata about the token.

Example:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

Meaning:

```
Algorithm: HMAC SHA256
Type: JWT
```

---

## 2️⃣ Payload

Contains **user data**.

Example:

```json
{
  "userId": 1,
  "email": "admin@test.com",
  "role": "admin"
}
```

Payload is **base64 encoded** but not encrypted.

Never store sensitive data.

---

## 3️⃣ Signature

Ensures token **has not been tampered**.

Generated using:

```
Header + Payload + Secret Key
```

Example:

```
HMACSHA256(
 base64(header) + "." + base64(payload),
 secretKey
)
```

---

# 6. JWT AUTHENTICATION FLOW

Complete login flow.

```
User login
      ↓
Server verifies credentials
      ↓
Server creates JWT
      ↓
Token sent to client
      ↓
Client stores token
      ↓
Client sends token in requests
      ↓
Server verifies token
      ↓
Access granted
```

---

# 7. INSTALL JWT LIBRARY

```
npm install jsonwebtoken
```

---

# 8. LOGIN WITH JWT

Example Express login route.

```javascript
const jwt = require("jsonwebtoken");

const SECRET = "supersecretkey";

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== "admin@test.com" || password !== "1234") {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const user = {
    id: 1,
    email,
    role: "admin",
  };

  const token = jwt.sign(user, SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});
```

---

# 9. TOKEN CREATED

Example JWT payload:

```
{
 "id":1,
 "email":"admin@test.com",
 "role":"admin",
 "iat": 1700000000,
 "exp": 1700003600
}
```

Fields:

```
iat → issued at
exp → expiration
```

---

# 10. CLIENT STORES TOKEN

Client may store token in:

```
localStorage
sessionStorage
HTTPOnly cookies
```

Best practice:

```
HTTPOnly cookies
```

---

# 11. AUTHORIZATION HEADER

Client sends token with request.

```
Authorization: Bearer <token>
```

Example:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

# 12. VERIFY TOKEN MIDDLEWARE

Express middleware to verify JWT.

```javascript
const jwt = require("jsonwebtoken");

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

# 13. PROTECTED ROUTE

```javascript
app.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "User profile",
    user: req.user,
  });
});
```

Now only authenticated users can access.

---

# 14. TOKEN EXPIRATION

Tokens must expire.

Example:

```javascript
expiresIn: "1h";
```

Meaning:

```
Token expires in 1 hour
```

Expired tokens cannot be used.

---

# 15. REFRESH TOKENS

Access tokens should be short-lived.

Example system:

```
Access Token → 15 minutes
Refresh Token → 7 days
```

Flow:

```
Access token expires
      ↓
Client sends refresh token
      ↓
Server issues new access token
```

---

# 16. REFRESH TOKEN EXAMPLE

Generate refresh token.

```javascript
const refreshToken = jwt.sign(user, REFRESH_SECRET, {
  expiresIn: "7d",
});
```

Endpoint:

```javascript
app.post("/refresh", (req, res) => {
  const { refreshToken } = req.body;

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET);

    const newAccessToken = jwt.sign({ id: decoded.id }, SECRET, {
      expiresIn: "15m",
    });

    res.json({ accessToken: newAccessToken });
  } catch {
    res.status(403).send("Invalid refresh token");
  }
});
```

---

# 17. ROLE-BASED AUTHORIZATION

JWT payload often includes role.

Example:

```json
{
  "userId": 1,
  "role": "admin"
}
```

Middleware:

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

Usage:

```javascript
app.delete("/users/:id", verifyToken, authorize("admin"), controller);
```

---

# 18. JWT SECURITY BEST PRACTICES

### Never store sensitive data in payload

Bad:

```
password
credit card
SSN
```

---

### Always use HTTPS

Tokens must never travel via HTTP.

---

### Short expiration times

```
Access token → short
Refresh token → longer
```

---

### Use strong secret keys

Example:

```
256-bit random secret
```

---

# 19. COMMON JWT ATTACKS

### Token theft

If token stolen attacker gains access.

Solution:

```
HTTPOnly cookies
HTTPS
```

---

### Token replay

Attacker reuses token.

Solution:

```
short expiration
```

---

### Signature attack

Weak secret keys.

Solution:

```
Strong secret
```

---

# 20. JWT VS SESSION

| Feature     | JWT       | Session         |
| ----------- | --------- | --------------- |
| State       | Stateless | Stateful        |
| Storage     | Client    | Server          |
| Scalability | High      | Lower           |
| Performance | Fast      | Slightly slower |

---

# 21. WHEN TO USE JWT

Best for:

```
REST APIs
Microservices
Mobile apps
Single Page Apps
Distributed systems
```

---

# 22. COMPLETE JWT AUTH FLOW

```
User login
      ↓
Server verifies credentials
      ↓
JWT generated
      ↓
Client stores token
      ↓
Client sends token in header
      ↓
Middleware verifies token
      ↓
Request allowed
```

---

# 23. INTERVIEW QUESTIONS

Basic

```
What is JWT?
What are its components?
```

Intermediate

```
How does JWT authentication work?
What is stateless authentication?
```

Advanced

```
What are refresh tokens?
How do you secure JWT tokens?
```

---

# PERFECT INTERVIEW ANSWER

JWT authentication uses signed tokens to represent user identity. After successful login the server generates a token containing user data and sends it to the client. The client includes this token in the Authorization header for future requests, and the server verifies it using a secret key without storing session data.

---

# FINAL BACKEND ENGINEER MINDSET

JWT enables:

```
Stateless authentication
High scalability
Secure identity verification
Distributed API systems
```

JWT is the **most common authentication method used in modern backend APIs**.
