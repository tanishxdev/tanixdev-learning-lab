# Backend Architecture

# Topic 4 — Repository Pattern (Deep Dive)

This is a **very important architecture pattern** used in professional backend systems.

Most scalable backends follow this chain:

```
Route → Controller → Service → Repository → Database
```

The **Repository Pattern** is responsible for the **data access layer**.

---

# 1. What is Repository Pattern?

## Simple Definition

Repository Pattern is a design pattern that **abstracts database operations behind a dedicated layer** called the repository.

It separates:

```
Business Logic
from
Database Logic
```

---

## Technical Definition

Repository acts as an **interface between service layer and database**.

It hides the database implementation.

Example:

```
Service → Repository → Database
```

Service does **not know**:

- SQL
- MongoDB queries
- ORM details

Repository handles that.

---

# 2. Why Repository Pattern Exists

Without repository layer, services directly access database.

Example:

```javascript
const users = await db.query("SELECT * FROM users");
```

Problems:

```
Service now depends on database technology
```

If you change database:

```
PostgreSQL → MongoDB
```

You must change **all services**.

Repository solves this.

---

# 3. Mental Model

Think of repository as **a librarian**.

```
Customer → Librarian → Library Database
```

Mapping:

```
Controller → Service → Repository → Database
```

Service asks repository:

```
getUserById()
```

Repository decides:

```
SQL query
Mongo query
ORM query
```

Service doesn't care.

---

# 4. Architecture Flow

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

Responsibilities:

| Layer      | Responsibility        |
| ---------- | --------------------- |
| Controller | HTTP request/response |
| Service    | Business logic        |
| Repository | Database access       |
| Database   | Data storage          |

---

# 5. Folder Structure

Example production structure:

```
src
│
├ controllers
├ services
├ repositories
├ models
├ routes
└ app.js
```

Repository layer sits between **service and database**.

---

# 6. Basic Example

Let's implement a **User API**.

---

# Step 1 — Route

routes/userRoutes.js

```javascript
const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

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

Handles HTTP request and response
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

---

# Step 3 — Service

services/userService.js

```javascript
const userRepository = require("../repositories/userRepository");

/*
Service layer

Handles business logic
*/

exports.getUsers = async () => {
  const users = await userRepository.findAllUsers();

  return users;
};
```

Service does **not contain database queries**.

---

# Step 4 — Repository

repositories/userRepository.js

```javascript
/*
Repository layer

Handles database operations
*/

exports.findAllUsers = async () => {
  return [
    { id: 1, name: "Tanish" },
    { id: 2, name: "Rahul" },
  ];
};
```

In real systems this would contain **database queries**.

---

# 7. Example with Database Query

Example with SQL:

```javascript
const db = require("../config/database");

exports.findAllUsers = async () => {
  const result = await db.query("SELECT * FROM users");

  return result.rows;
};
```

Service layer does not know **how database works**.

---

# 8. Repository Functions

Typical repository methods:

```
createUser()
findUserById()
findAllUsers()
updateUser()
deleteUser()
```

Example:

```javascript
exports.findUserById = async (id) => {
  return await db.users.findOne({ id });
};
```

---

# 9. Real World Example

Example: **E-commerce backend**

Request:

```
GET /products
```

Flow:

```
Route
 ↓
productController.getProducts()
 ↓
productService.getProducts()
 ↓
productRepository.findProducts()
 ↓
Database
```

Repository handles **actual queries**.

---

# 10. Advantages of Repository Pattern

### 1 Database abstraction

Application does not depend on database type.

---

### 2 Cleaner services

Services contain **only business logic**.

---

### 3 Easy database migration

Example:

```
MongoDB → PostgreSQL
```

Only repository changes.

---

### 4 Testability

Repositories can be **mocked in tests**.

---

### 5 Code organization

All queries in one place.

---

# 11. Disadvantages

### 1 Extra abstraction

Adds extra layer.

---

### 2 More files

Small apps may feel complex.

---

# 12. Repository vs Model

This confuses many developers.

### Model

Represents **data schema**.

Example:

```
User schema
Product schema
```

---

### Repository

Handles **data access operations**.

Example:

```
userRepository.findUserById()
```

---

# 13. Common Mistakes

### Mistake 1

Database queries inside service.

Wrong:

```
Service → DB
```

Correct:

```
Service → Repository → DB
```

---

### Mistake 2

Repository containing business logic.

Repository should only contain **data logic**.

---

### Mistake 3

Controller calling repository directly.

Wrong:

```
Controller → Repository
```

Correct:

```
Controller → Service → Repository
```

---

# 14. Interview Questions

### Basic

What is Repository Pattern?

Why is repository used?

---

### Intermediate

Difference between repository and service?

Why should services not access database directly?

---

### Advanced

How does repository pattern help in database migration?

How does repository pattern improve testing?

---

# 15. Interview Answer Template

What is Repository Pattern?

Answer:

The Repository Pattern is a design pattern that abstracts database operations behind a dedicated layer called the repository. It separates business logic from data access logic and provides a clean interface for interacting with the database. This improves maintainability, testability, and flexibility of the application.

---

# Final Mental Model

```
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
```

Controller → HTTP logic
Service → Business logic
Repository → Data access logic

---
