# Backend Architecture

# Topic 3 — Service Layer Pattern (Deep Dive)

This is **one of the most important backend architecture patterns** used in real production systems.

Large companies almost **never stop at MVC**.
They use **Service Layer Architecture**.

---

# 1. What is Service Layer Pattern?

## Simple Definition

Service Layer is a layer that **contains business logic of the application** and sits between the controller and the data access layer.

Architecture:

```
Route
 ↓
Controller
 ↓
Service
 ↓
Repository / Model
 ↓
Database
```

---

## Why Service Layer Exists

In MVC, controllers often become too large.

Example problem:

```
Controller
 ├ validation
 ├ business logic
 ├ database queries
 ├ external API calls
 └ response formatting
```

Controllers become **huge and messy**.

Service Layer fixes this.

---

# 2. Mental Model

Think of a **company structure**.

```
Customer → Reception → Manager → Worker → Database
```

Mapping:

```
Client → Controller → Service → Repository → Database
```

Controller receives request.

Service decides **what business logic should happen**.

Repository interacts with database.

---

# 3. Service Layer Responsibility

Service layer handles:

```
Business rules
Application logic
Workflow logic
Multiple database operations
External API calls
```

Example business logic:

```
User signup:
  check email exists
  hash password
  save user
  send welcome email
```

This belongs in **service**, not controller.

---

# 4. Architecture Flow

```
Client
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

Each layer has **single responsibility**.

Client → **Sends HTTP request (API call) to server**

Router → **Matches URL and HTTP method to the correct controller**

Controller → **Handles request and response (calls service)**

Service → **Executes business logic / application rules**

Repository → **Performs database queries and data access**

Database → **Stores and retrieves persistent data**

Response → **Server sends result back to client**

---

# 5. Folder Structure with Service Layer

Example Express project:

```
src
│
├ routes
│
├ controllers
│
├ services
│
├ repositories
│
├ models
│
└ app.js
```

---

# 6. Code Example

We build a **User API** with Service Layer.

---

# Step 1 — Route

routes/userRoutes.js

```javascript
const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

/*
Route layer

Only maps URL to controller
*/

router.get("/users", userController.getUsers);

module.exports = router;
```

---

# Step 2 — Controller

controllers/userController.js

```javascript
const userService = require("../services/userService");

/*
Controller layer

Responsibilities:
1 Receive request
2 Call service
3 Send response
*/

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};
```

Controller is now **very thin**.

---

# Step 3 — Service

services/userService.js

```javascript
const userRepository = require("../repositories/userRepository");

/*
Service layer

Responsible for:
Business logic
Application workflows
*/

exports.getUsers = async () => {
  const users = await userRepository.findAllUsers();

  return users;
};
```

Service contains **business logic**.

---

# Step 4 — Repository

repositories/userRepository.js

```javascript
/*
Repository layer

Responsible for database queries
*/

exports.findAllUsers = async () => {
  return [
    { id: 1, name: "Tanish" },
    { id: 2, name: "Rahul" },
  ];
};
```

Repository interacts with database.

---

# 7. Request Flow

Example request:

```
GET /api/users
```

Flow:

```
Client
 ↓
Route
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

# 8. Real World Example

Example: **User Signup**

Steps:

```
User sends signup request
 ↓
Controller receives request
 ↓
Service validates email
 ↓
Service hashes password
 ↓
Repository saves user
 ↓
Service sends welcome email
 ↓
Controller returns response
```

---

# Example Service Logic

services/authService.js

```javascript
const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");

exports.signup = async (userData) => {
  // check if user exists
  const existingUser = await userRepository.findByEmail(userData.email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  // hash password
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  userData.password = hashedPassword;

  // save user
  const user = await userRepository.createUser(userData);

  return user;
};
```

All **business rules live in service layer**.

---

# 9. Why Service Layer is Important

### 1 Separation of concerns

```
Controller → HTTP logic
Service → Business logic
Repository → Database logic
```

---

### 2 Testability

You can test **services without Express**.

---

### 3 Reusability

Services can be reused by:

```
HTTP APIs
Cron jobs
GraphQL
Message queues
```

---

### 4 Cleaner controllers

Controllers become very small.

---

# 10. Service Layer vs MVC

MVC:

```
Controller → Model → Database
```

Service Architecture:

```
Controller → Service → Repository → Database
```

Service layer **separates business logic from controller**.

---

# 11. Common Mistakes

### Mistake 1

Business logic inside controller.

Bad example:

```javascript
exports.signup = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(400).send("User exists");
  }
};
```

---

### Mistake 2

Database queries inside service.

Services should call **repositories**.

---

### Mistake 3

Services returning HTTP responses.

Services should return **data**, not Express responses.

---

# 12. Advantages

```
Clear architecture
Better maintainability
Easier testing
Better scalability
Reusable business logic
```

---

# 13. Disadvantages

```
More files
More abstraction
Slightly complex for small apps
```

---

# 14. Interview Questions

### Basic

What is service layer pattern?

Why is service layer used?

---

### Intermediate

Difference between controller and service?

Where should business logic exist?

---

### Advanced

Why do large systems use service layer architecture?

How does service layer improve testability?

---

# 15. Interview Answer Template

What is Service Layer?

Answer:

The Service Layer is an architectural pattern that separates business logic from controllers and data access logic. It sits between the controller and repository layers and handles application workflows and business rules, making the system more maintainable, testable, and scalable.

---

# Final Mental Model

```
Client
 ↓
Route
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
```

Controller = HTTP logic
Service = Business logic
Repository = Data logic

---
