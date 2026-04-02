# BACKEND ARCHITECTURE SERIES

We will cover:

1. Architecture Fundamentals
2. MVC Pattern
3. Service Layer Pattern
4. Repository Pattern
5. Dependency Injection
6. API Design Architecture
7. Request Lifecycle Architecture
8. Middleware Architecture
9. Validation Architecture
10. Error Handling Architecture
11. Configuration Architecture
12. Logging Architecture
13. Security Architecture
14. Data Access Architecture
15. Caching Architecture
16. Background Jobs Architecture
17. Testing Architecture
18. Scalability & Deployment Architecture

---

# TOPIC 1 — ARCHITECTURE FUNDAMENTALS

This is the **foundation of all backend systems**.

---

# 1. WHAT IS BACKEND ARCHITECTURE?

## Simple Definition

Backend architecture is **how backend code and components are organized so that the system remains scalable, maintainable, and testable.**

It defines:

- How requests flow
- How code is structured
- How modules communicate
- How database is accessed

---

## Mental Model

Think of backend like a **factory pipeline**.

```
Client Request
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

Each layer has **one responsibility**.

---

# 2. WHY ARCHITECTURE IS IMPORTANT

Without architecture:

```
routes → database → response
```

Everything in one file.

Problems:

- unmaintainable
- untestable
- tightly coupled
- impossible to scale

---

With architecture:

```
Routes
 ↓
Controllers
 ↓
Services
 ↓
Repositories
 ↓
Database
```

Benefits:

- clean code
- separation of concerns
- easier testing
- scalable systems

---

# 3. TYPES OF BACKEND ARCHITECTURE

There are several architecture styles.

---

# 3.1 Monolithic Architecture

Most Express apps start here.

Everything is in **one backend application**.

Example:

```
Express App
 ├ Routes
 ├ Controllers
 ├ Services
 ├ Models
 └ Database
```

---

## Example

```
Ecommerce Backend

Single Express App
 ├ User APIs
 ├ Product APIs
 ├ Order APIs
 └ Payment APIs
```

---

## Pros

- simple
- fast to build
- easy deployment

---

## Cons

- hard to scale
- large codebase
- tightly coupled modules

---

# 3.2 Layered Architecture

Most **Node production systems use this**.

Layers:

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

Each layer has **specific responsibility**.

---

# Code Example

### Route

```javascript
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route layer receives request
router.get("/users", userController.getUsers);

module.exports = router;
```

---

### Controller

```javascript
const userService = require("../services/userService");

// Controller handles request and response
exports.getUsers = async (req, res) => {
  const users = await userService.getUsers();

  res.json(users);
};
```

---

### Service

```javascript
const userRepository = require("../repositories/userRepository");

// Business logic layer
exports.getUsers = async () => {
  return await userRepository.findAllUsers();
};
```

---

### Repository

```javascript
// Data access layer
exports.findAllUsers = async () => {
  return [
    { id: 1, name: "Tanish" },
    { id: 2, name: "Rahul" },
  ];
};
```

---

# 3.3 Modular Architecture

Instead of separating by **layers**, we separate by **feature**.

Example:

```
src
 ├ user
 │   ├ controller
 │   ├ service
 │   ├ repository
 │   └ routes
 │
 ├ product
 │   ├ controller
 │   ├ service
 │   └ repository
```

Better for large apps.

---

# 3.4 Clean Architecture

Created by **Robert C. Martin (Uncle Bob)**.

Goal:

```
Business logic independent of frameworks
```

Structure:

```
Entities
 ↓
Use Cases
 ↓
Interface Adapters
 ↓
Frameworks
```

Express should only exist in **outer layer**.

---

# 3.5 Hexagonal Architecture

Also called **Ports and Adapters**.

Idea:

```
Core Business Logic
     ↑
Adapters
     ↑
Frameworks / DB
```

Example:

```
Controller → Service → Interface → Repository
```

---

# 4. REQUEST FLOW IN BACKEND SYSTEM

This is **most important mental model**.

```
Client
 ↓
Router
 ↓
Middleware
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

---

# Example Request

```
GET /users
```

Flow:

```
Router matches /users
 ↓
Middleware runs
 ↓
Controller executes
 ↓
Service runs logic
 ↓
Repository queries database
 ↓
Controller sends response
```

---

# 5. BAD ARCHITECTURE EXAMPLE

Many beginners do this:

```javascript
app.get("/users", async (req, res) => {
  const users = await db.query("SELECT * FROM users");

  res.json(users);
});
```

Problems:

- business logic inside route
- database tightly coupled
- no testing layer

---

# 6. GOOD ARCHITECTURE

```
Route → Controller → Service → Repository
```

Example:

```
GET /users
```

Controller:

```
getUsers()
```

Service:

```
getUsersService()
```

Repository:

```
findUsers()
```

---

# 7. REAL WORLD EXAMPLE

Example: **Instagram backend**

User profile request:

```
GET /users/123
```

Flow:

```
Router
 ↓
Auth middleware
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
```

---

# 8. FOLDER STRUCTURE EXAMPLE

Production Express architecture.

```
src
│
├ controllers
├ services
├ repositories
├ routes
├ middlewares
├ models
├ config
├ utils
└ app.js
```

---

# 9. WHY THIS ARCHITECTURE IS USED

Benefits:

### 1 Maintainability

Small modules easier to change.

---

### 2 Testability

You can test service without database.

---

### 3 Scalability

System grows without chaos.

---

### 4 Team collaboration

Different developers can work on different layers.

---

# 10. INTERVIEW QUESTIONS

### Basic

What is backend architecture?

Why is architecture important in backend systems?

What is layered architecture?

---

### Intermediate

Difference between layered and modular architecture?

What is monolithic architecture?

How does request flow through backend?

---

### Advanced

Explain Clean Architecture.

What is hexagonal architecture?

How do you structure large Node.js applications?

---

# FINAL MENTAL MODEL

Always think backend like this:

```
Client
 ↓
Routes
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
```

Each layer has **single responsibility**.

---
