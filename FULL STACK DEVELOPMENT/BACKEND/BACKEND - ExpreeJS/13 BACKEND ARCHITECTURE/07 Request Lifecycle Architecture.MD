# Backend Architecture

# Topic 7 — Request Lifecycle Architecture (Express Deep Dive)

This is **one of the most important mental models in backend engineering**.

Every backend engineer must clearly understand:

```text
What happens after a client sends a request?
```

This is called the **Request Lifecycle**.

---

# 1. What is Request Lifecycle?

## Simple Definition

Request Lifecycle is the **complete journey of a request from the client to the server and back as a response**.

---

## Basic Flow

```text
Client
 ↓
Internet
 ↓
Server
 ↓
Express App
 ↓
Middleware
 ↓
Router
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
 ↓
Response
```

Then response goes back to the client.

---

# 2. Real Example

User visits:

```text
https://example.com/api/users
```

Browser sends:

```text
GET /api/users
```

Server processes request through **multiple layers**.

---

# 3. Request Lifecycle — High Level Flow

```text
1 Client sends HTTP request
2 Node server receives request
3 Express middleware runs
4 Router matches endpoint
5 Controller executes
6 Service handles business logic
7 Repository fetches data
8 Database returns data
9 Controller sends response
10 Response sent to client
```

---

# 4. Detailed Express Request Lifecycle

Let's understand the **exact steps**.

---

# Step 1 — Client Sends Request

Example request:

```text
GET /api/users
```

Request contains:

```text
HTTP method
URL
headers
body
query parameters
```

Example:

```text
GET /users?page=1
```

---

# Step 2 — Node HTTP Server Receives Request

Express internally runs on Node's HTTP server.

Example:

```javascript
const http = require("http");
const express = require("express");

const app = express();

http.createServer(app);
```

Node receives request first.

---

# Step 3 — Express App Receives Request

Express application is basically a **function that handles HTTP requests**.

Example:

```javascript
const app = express();
```

Internally:

```text
request → Express pipeline
```

---

# Step 4 — Global Middleware Runs

Middleware functions run **before routes**.

Example middleware:

```text
Logger
Authentication
Body parser
CORS
```

Example code:

```javascript
app.use((req, res, next) => {
  console.log("Request received");

  next();
});
```

`next()` moves request to next middleware.

---

# Step 5 — Route Matching

Express router checks:

```text
URL
HTTP method
```

Example:

```javascript
app.get("/users", controller);
```

Router checks:

```text
GET /users
```

If match found → route handler executed.

---

# Step 6 — Route Middleware

Route specific middleware may run.

Example:

```javascript
app.get("/users", authMiddleware, controller);
```

Flow:

```text
Request
 ↓
Auth middleware
 ↓
Controller
```

---

# Step 7 — Controller Executes

Controller receives:

```text
req object
res object
```

Example:

```javascript
exports.getUsers = async (req, res) => {
  const users = await userService.getUsers();

  res.json(users);
};
```

Controller handles:

```text
HTTP request
HTTP response
```

---

# Step 8 — Service Layer Runs

Service layer handles **business logic**.

Example:

```javascript
exports.getUsers = async () => {
  return userRepository.findAllUsers();
};
```

Service may:

```text
validate data
process workflows
call external APIs
```

---

# Step 9 — Repository Queries Database

Repository handles **data access**.

Example:

```javascript
exports.findAllUsers = async () => {
  return db.users.find();
};
```

Database executes query.

---

# Step 10 — Database Returns Data

Example data:

```json
[
  { "id": 1, "name": "Tanish" },
  { "id": 2, "name": "Rahul" }
]
```

Repository returns to service.

---

# Step 11 — Service Returns Result

Service returns processed data.

Example:

```javascript
return users;
```

---

# Step 12 — Controller Sends Response

Controller sends HTTP response.

Example:

```javascript
res.json(users);
```

Response travels back to client.

---

# 5. Visual Flow Diagram

Complete lifecycle:

```text
Client
 ↓
Node HTTP Server
 ↓
Express App
 ↓
Global Middleware
 ↓
Router
 ↓
Route Middleware
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
 ↓
Controller
 ↓
Response
```

---

# 6. Express Code Demonstration

Example:

```javascript
const express = require("express");

const app = express();

// Global middleware
app.use((req, res, next) => {
  console.log("Incoming request");

  next();
});

// Route
app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Tanish" }]);
});

app.listen(3000);
```

Flow:

```text
Request
 ↓
Middleware
 ↓
Route
 ↓
Response
```

---

# 7. Real World Example

Example: **Login request**

User logs in.

```text
POST /login
```

Flow:

```text
Client
 ↓
Logger middleware
 ↓
Rate limiter
 ↓
Validation middleware
 ↓
Auth controller
 ↓
Auth service
 ↓
User repository
 ↓
Database
 ↓
Response
```

---

# 8. Middleware Role in Lifecycle

Middleware is core part of Express request lifecycle.

Example middleware types:

```text
Logger middleware
Auth middleware
Validation middleware
Error middleware
```

Middleware pipeline:

```text
Request
 ↓
Middleware 1
 ↓
Middleware 2
 ↓
Middleware 3
 ↓
Route
```

---

# 9. Request Object

Express request object contains:

```text
req.body
req.params
req.query
req.headers
req.cookies
```

Example:

```javascript
req.params.id;
```

---

# 10. Response Object

Express response object sends response.

Example methods:

```text
res.send()
res.json()
res.status()
res.redirect()
```

Example:

```javascript
res.status(200).json(data);
```

---

# 11. Error Lifecycle

Errors propagate through middleware.

Example:

```javascript
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});
```

---

# 12. Why Understanding Lifecycle Matters

Backend engineers must know:

```text
Where validation should happen
Where authentication should happen
Where business logic should live
Where database queries should live
```

Lifecycle explains **where each responsibility belongs**.

---

# 13. Interview Questions

### Basic

What is request lifecycle?

What happens when a request reaches an Express server?

---

### Intermediate

How does Express route requests?

What role does middleware play in request lifecycle?

---

### Advanced

Explain request lifecycle in Express.

How does error handling work in lifecycle?

---

# 14. Interview Answer Template

What is Request Lifecycle?

Answer:

The request lifecycle refers to the sequence of steps that occur when a client sends an HTTP request to a server until the server sends back a response. In Express, the request flows through middleware, routing, controllers, services, and data access layers before generating a response.

---

# Final Mental Model

Always think like this:

```text
Request
 ↓
Middleware
 ↓
Router
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
 ↓
Response
```
