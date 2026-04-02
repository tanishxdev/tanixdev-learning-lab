This phase connects everything you learned so far and turns it into **real backend API development**.

Now we move from:

Learning Express → **Building actual APIs used by frontend applications**

This phase focuses on **REST architecture**, **CRUD operations**, **status code correctness**, and **API response design**.

---

# PHASE 10 — REST API DEVELOPMENT

Goal: Build real backend APIs using Express.

---

# 1. WHAT IS A REST API?

REST stands for:

```text
Representational State Transfer
```

It is a **design style for building web APIs**.

A REST API exposes **resources** that clients can interact with using HTTP methods.

Example resource:

```text
Users
Products
Orders
Posts
```

Clients interact with resources using URLs.

Example:

```text
GET /users
POST /users
GET /users/1
PUT /users/1
DELETE /users/1
```

---

# 2. REST MENTAL MODEL

REST API design follows a resource-based structure.

Example resource:

```text
User
```

Possible operations:

```text
Create user
Read user
Update user
Delete user
```

These operations are known as **CRUD**.

---

# 3. CRUD OPERATIONS

CRUD stands for:

| Operation | HTTP Method | Example         |
| --------- | ----------- | --------------- |
| Create    | POST        | POST /users     |
| Read      | GET         | GET /users      |
| Update    | PUT/PATCH   | PUT /users/1    |
| Delete    | DELETE      | DELETE /users/1 |

---

# 4. REST API EXAMPLE USING EXPRESS

Example backend API for managing users.

---

## Complete Example

```js
const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mock database
let users = [
  { id: 1, name: "Tanish" },
  { id: 2, name: "Rahul" },
];

// GET all users
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

// GET single user
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

// CREATE user
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Name is required",
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    data: newUser,
  });
});

// UPDATE user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  user.name = req.body.name || user.name;

  res.status(200).json({
    success: true,
    data: user,
  });
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  users.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "User deleted",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

# 5. REST NAMING CONVENTIONS

Proper REST naming rules:

### Use plural nouns

Correct:

```text
/users
/products
/orders
```

Wrong:

```text
/getUsers
/createUser
```

---

### Use HTTP methods instead of verbs

Correct:

```text
POST /users
```

Wrong:

```text
POST /createUser
```

---

### Use resource identifiers

Example:

```text
GET /users/5
```

---

# 6. STATUS CODE BEST PRACTICES

Proper status codes make APIs predictable.

---

## Success Codes

| Code | Meaning          |
| ---- | ---------------- |
| 200  | OK               |
| 201  | Resource created |
| 204  | No content       |

Example:

```js
res.status(201).json(newUser);
```

---

## Client Error Codes

| Code | Meaning      |
| ---- | ------------ |
| 400  | Bad request  |
| 401  | Unauthorized |
| 403  | Forbidden    |
| 404  | Not found    |

Example:

```js
res.status(404).json({ message: "User not found" });
```

---

## Server Error Codes

| Code | Meaning               |
| ---- | --------------------- |
| 500  | Internal server error |

Example:

```js
res.status(500).json({ message: "Server error" });
```

---

# 7. RESPONSE FORMAT BEST PRACTICE

Consistent API response format improves maintainability.

Recommended format:

```json
{
  "success": true,
  "data": {...},
  "message": "optional message"
}
```

Error format:

```json
{
  "success": false,
  "error": "Invalid input"
}
```

---

# 8. TESTING CRUD USING POSTMAN

Use Postman to simulate frontend requests.

---

## Create user

Method:

```text
POST /users
```

Body:

```json
{
  "name": "Alex"
}
```

Expected response:

```json
{
  "success": true,
  "data": { "id": 3, "name": "Alex" }
}
```

---

## Fetch users

Request:

```text
GET /users
```

Response:

```json
{
 "success": true,
 "data": [...]
}
```

---

## Update user

```text
PUT /users/1
```

Body:

```json
{
  "name": "Updated Name"
}
```

---

## Delete user

```text
DELETE /users/1
```

---

# 9. COMMON API DESIGN MISTAKES

### Using verbs in URLs

Wrong:

```text
/createUser
```

Correct:

```text
POST /users
```

---

### Returning inconsistent responses

Bad:

```json
{ "message": "ok" }
```

Better:

```json
{
 "success": true,
 "data": {...}
}
```

---

### Ignoring status codes

Always set correct HTTP status.

---

# 10. REAL WORLD API STRUCTURE

Production APIs are modular.

Example structure:

```text
project
│
controllers
   userController.js

routes
   userRoutes.js

middlewares
   authMiddleware.js

models
   userModel.js

app.js
server.js
```

Routes file:

```js
router.get("/users", getUsers);
router.post("/users", createUser);
```

---

# 11. INTERVIEW QUESTIONS

Basic:

1. What is REST API?
2. What does CRUD stand for?
3. Difference between PUT and PATCH?

Intermediate:

4. Why use plural nouns in REST?
5. When to return 201 status code?
6. What is idempotent method?

Advanced:

7. Design a REST API for products.
8. How would you version APIs?
9. How do you handle pagination?

---

# PERFECT INTERVIEW ANSWER

Question:

What is REST API?

Answer:

A REST API is an architectural style for building web services where resources are exposed through URLs and manipulated using standard HTTP methods like GET, POST, PUT, and DELETE. REST APIs are stateless, resource-based, and typically exchange data using JSON.

---

# FINAL ENGINEER MINDSET

A good REST API should always be:

```text
Predictable
Consistent
Stateless
Resource-based
HTTP standard compliant
```

---

Next phase in your roadmap:

# PHASE 11 — Authentication & Security

Topics:

- JWT authentication
- Login system
- Protecting routes
- Session vs JWT

Say:

**Continue Phase 11.**
