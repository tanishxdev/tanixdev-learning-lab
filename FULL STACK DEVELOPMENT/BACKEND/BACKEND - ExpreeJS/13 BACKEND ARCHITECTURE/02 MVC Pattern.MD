# Backend Architecture

# Topic 2 — MVC Pattern (Deep Dive)

This is **one of the most asked backend architecture concepts in interviews**.

We will cover:

1. Definition
2. Why MVC exists
3. Mental model
4. Architecture flow
5. Express MVC implementation
6. Folder structure
7. Code example
8. Real-world example
9. Advantages / disadvantages
10. Interview questions

---

# 1. What is MVC?

## Simple Definition

MVC stands for:

```
Model
View
Controller
```

It is a **software architecture pattern used to separate application logic into three layers**.

Purpose:

```
Separate responsibilities
```

---

## Formal Definition

MVC is a design pattern that separates an application into:

| Layer      | Responsibility                         |
| ---------- | -------------------------------------- |
| Model      | Data and database logic                |
| View       | User interface                         |
| Controller | Request handling and application logic |

---

# 2. Why MVC Exists

Before MVC, applications looked like this:

```
Route
 ├ Database logic
 ├ Business logic
 ├ Response formatting
 └ Validation
```

Everything inside one place.

Example (Bad Code):

```javascript
app.get("/users", async (req, res) => {
  const users = await db.query("SELECT * FROM users");

  res.json(users);
});
```

Problems:

- Hard to maintain
- Hard to test
- Hard to scale
- Business logic mixed with routing

---

MVC solves this by **separating responsibilities**.

---

# 3. MVC Mental Model

Think of MVC like a **restaurant system**.

```
Customer → Waiter → Chef → Kitchen
```

Mapping:

```
Client → Controller → Model → Database
```

Flow:

```
Client Request
      ↓
Controller
      ↓
Model
      ↓
Database
      ↓
Controller
      ↓
Response
```

---

# 4. MVC Architecture Flow

```
Client
 ↓
Route
 ↓
Controller
 ↓
Model
 ↓
Database
 ↓
Controller
 ↓
Response
```

---

# 5. MVC Layers Explained

---

# Controller

Controller handles:

- HTTP request
- HTTP response
- calling models

Responsibilities:

```
Receive request
Call model
Send response
```

Example:

```javascript
exports.getUsers = async (req, res) => {
  const users = await User.getAllUsers();

  res.json(users);
};
```

---

# Model

Model represents **data layer**.

Handles:

```
Database queries
Data validation
Schema definition
```

Example:

```javascript
exports.getAllUsers = async () => {
  return [
    { id: 1, name: "Tanish" },
    { id: 2, name: "Rahul" },
  ];
};
```

---

# View

View is **UI layer**.

Used in:

```
Server-side rendering
```

Examples:

```
EJS
Handlebars
Pug
```

But for **REST APIs**, view layer is usually not used.

Response is usually:

```
JSON
```

---

# 6. MVC in Express

Express implements MVC like this:

```
Routes
 ↓
Controllers
 ↓
Models
 ↓
Database
```

---

# Example Folder Structure

```
src
│
├ routes
│   userRoutes.js
│
├ controllers
│   userController.js
│
├ models
│   userModel.js
│
└ app.js
```

---

# 7. MVC Code Example

We will build a **User API**.

---

# Step 1 — Route

routes/userRoutes.js

```javascript
const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

/*
Route layer

Responsible for mapping URL to controller
*/

router.get("/users", userController.getUsers);

module.exports = router;
```

---

# Step 2 — Controller

controllers/userController.js

```javascript
const userModel = require("../models/userModel");

/*
Controller layer

Responsibilities:
1 Receive request
2 Call model
3 Send response
*/

exports.getUsers = async (req, res) => {
  try {
    // call model
    const users = await userModel.getAllUsers();

    // send response
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};
```

---

# Step 3 — Model

models/userModel.js

```javascript
/*
Model layer

Responsible for data operations
Usually interacts with database
*/

exports.getAllUsers = async () => {
  return [
    { id: 1, name: "Tanish" },
    { id: 2, name: "Rahul" },
  ];
};
```

---

# Step 4 — App Setup

app.js

```javascript
const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");

// register routes
app.use("/api", userRoutes);

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

# 8. Request Flow Example

Client sends:

```
GET /api/users
```

Flow:

```
Client
 ↓
Express Router
 ↓
Controller
 ↓
Model
 ↓
Database
 ↓
Controller
 ↓
Response
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
productModel.getProducts()
 ↓
Database
```

---

# 10. Advantages of MVC

### 1 Separation of concerns

Each layer has one responsibility.

---

### 2 Maintainability

Code easier to modify.

---

### 3 Reusability

Models reusable across controllers.

---

### 4 Team collaboration

Frontend + backend developers can work separately.

---

# 11. Disadvantages of MVC

### 1 Controllers become large

Controllers may contain:

```
validation
business logic
database logic
```

Bad practice.

---

### 2 Tight coupling

Controller directly uses model.

Better approach:

```
Controller → Service → Repository
```

Which we will cover next.

---

# 12. MVC vs Service Architecture

MVC basic flow:

```
Route
 ↓
Controller
 ↓
Model
 ↓
Database
```

Service architecture:

```
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

Modern systems prefer **Service Layer Architecture**.

---

# 13. Common MVC Mistakes

### 1 Business logic in controller

Bad:

```
controller
 ├ validation
 ├ business logic
 └ database queries
```

---

### 2 Database calls in routes

Bad example:

```javascript
app.get("/users", async (req, res) => {
  const users = await db.query("SELECT * FROM users");
});
```

---

### 3 Huge controller files

Controllers should stay thin.

---

# 14. Interview Questions

### Basic

What is MVC architecture?

What does each layer represent?

---

### Intermediate

Why is MVC used?

What problems does MVC solve?

---

### Advanced

Why MVC is not enough for large applications?

What architecture replaces MVC in modern systems?

Answer:

```
Service Layer Architecture
```

---

# 15. Interview Answer Template

What is MVC?

Answer:

MVC is a software architecture pattern that separates an application into three layers: Model, View, and Controller. The Model manages data and database logic, the View handles user interface, and the Controller processes requests and coordinates between the Model and View. This separation improves maintainability, scalability, and code organization.

---

# Final Mental Model

```
Route
 ↓
Controller
 ↓
Model
 ↓
Database
```

MVC = **separation of concerns**.
