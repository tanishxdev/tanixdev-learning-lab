# Backend Architecture

# Topic 6 — API Design Architecture (Deep Dive)

API Design is **one of the most important backend engineering skills**.

A backend engineer must know how to design **clean, scalable, predictable APIs**.

Companies care a lot about **API design quality**.

---

# 1. What is API Design Architecture?

## Simple Definition

API Design Architecture is the process of **structuring endpoints, request formats, response formats, and URL patterns so that APIs remain consistent, scalable, and maintainable**.

---

## What API Design Defines

API design determines:

```text
• URL structure
• HTTP methods
• request format
• response format
• status codes
• pagination
• filtering
• versioning
• error format
```

---

# 2. Mental Model

Think of API like a **contract between frontend and backend**.

Example:

```text
Frontend: GET /users
Backend: returns JSON
```

Once API is released, frontend **depends on it**.

Bad API design breaks clients.

---

# 3. REST Architecture

Most Express APIs follow **REST**.

REST = Representational State Transfer.

Core concept:

```text
Resources
```

Example resources:

```text
users
products
orders
posts
```

API operates on **resources**.

---

# 4. REST API Structure

Example API:

```text
GET /users
GET /users/1
POST /users
PUT /users/1
DELETE /users/1
```

Each endpoint operates on **user resource**.

---

# 5. HTTP Methods (REST Operations)

| Method | Purpose             |
| ------ | ------------------- |
| GET    | Read data           |
| POST   | Create data         |
| PUT    | Replace data        |
| PATCH  | Update partial data |
| DELETE | Remove data         |

---

## Example Express Code

```javascript
const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Tanish" }]);
});

app.post("/users", (req, res) => {
  res.send("User created");
});

app.put("/users/:id", (req, res) => {
  res.send("User updated");
});

app.delete("/users/:id", (req, res) => {
  res.send("User deleted");
});

app.listen(3000);
```

---

# 6. Resource Naming Rules

Good API naming is **very important**.

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
/deleteProduct
```

REST uses **nouns**, not verbs.

---

# 7. Nested Resources

Example:

```text
/users/1/orders
```

Meaning:

```text
Orders belonging to user 1
```

Express example:

```javascript
app.get("/users/:id/orders", (req, res) => {
  res.send("User orders");
});
```

---

# 8. API Versioning

APIs evolve over time.

To prevent breaking changes we version APIs.

Example:

```text
/api/v1/users
/api/v2/users
```

Express example:

```javascript
app.use("/api/v1/users", userRoutes);
```

---

# 9. Response Format Design

APIs should return **consistent response structure**.

Bad:

```json
[{ "id": 1 }]
```

Better:

```json
{
  "success": true,
  "data": [{ "id": 1, "name": "Tanish" }]
}
```

---

## Example Response Structure

Success response:

```json
{
  "success": true,
  "data": { "id": 1, "name": "Tanish" }
}
```

Error response:

```json
{
  "success": false,
  "error": "User not found"
}
```

---

# 10. HTTP Status Codes

Correct status codes improve API design.

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 201  | Created      |
| 400  | Bad request  |
| 401  | Unauthorized |
| 403  | Forbidden    |
| 404  | Not found    |
| 500  | Server error |

---

Example:

```javascript
res.status(404).json({
  message: "User not found",
});
```

---

# 11. Pagination

Large datasets must not be returned fully.

Bad:

```text
GET /users
```

Returning **1 million users**.

Instead use pagination.

Example:

```text
GET /users?page=1&limit=10
```

Express example:

```javascript
app.get("/users", (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;

  res.send(`page ${page} limit ${limit}`);
});
```

---

# 12. Filtering

Example:

```text
GET /products?category=electronics
```

Express example:

```javascript
app.get("/products", (req, res) => {
  const category = req.query.category;

  res.send(`Products in ${category}`);
});
```

---

# 13. Sorting

Example:

```text
GET /products?sort=price
```

Example response:

```text
Products sorted by price
```

---

# 14. Request Body Design

Example POST request:

```json
{
  "name": "Tanish",
  "email": "tanish@example.com"
}
```

Express parsing:

```javascript
app.use(express.json());

app.post("/users", (req, res) => {
  const user = req.body;

  res.json(user);
});
```

---

# 15. Real World Example

Example: **Instagram API**

Get posts:

```text
GET /api/v1/posts
```

Get user posts:

```text
GET /api/v1/users/123/posts
```

Create post:

```text
POST /api/v1/posts
```

Delete post:

```text
DELETE /api/v1/posts/5
```

---

# 16. API Design Best Practices

### 1 Use nouns not verbs

Correct:

```text
/users
```

Wrong:

```text
/getUsers
```

---

### 2 Use plural resources

Correct:

```text
/users
/products
```

---

### 3 Use HTTP methods properly

Bad:

```text
POST /deleteUser
```

Correct:

```text
DELETE /users/1
```

---

### 4 Consistent response structure

All APIs must return same format.

---

### 5 Version APIs

```text
/api/v1
```

---

# 17. Common API Design Mistakes

### Mistake 1

Using verbs in endpoints.

---

### Mistake 2

Returning inconsistent response formats.

---

### Mistake 3

Ignoring status codes.

---

### Mistake 4

Returning large data without pagination.

---

# 18. Example Complete Express API

```javascript
const express = require("express");

const app = express();

app.use(express.json());

// GET users
app.get("/api/v1/users", (req, res) => {
  res.json({
    success: true,
    data: [{ id: 1, name: "Tanish" }],
  });
});

// CREATE user
app.post("/api/v1/users", (req, res) => {
  const user = req.body;

  res.status(201).json({
    success: true,
    data: user,
  });
});

app.listen(3000);
```

---

# 19. Interview Questions

### Basic

What is REST API?

What are HTTP methods?

---

### Intermediate

What is API versioning?

Why use pagination?

---

### Advanced

How do you design scalable APIs?

What are REST principles?

---

# 20. Interview Answer Template

What is REST API?

Answer:

REST API is an architectural style for designing networked applications where resources are identified by URLs and manipulated using standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE.

---

# Final Mental Model

```text
Resource → Endpoint → HTTP Method → Response
```

Example:

```text
User → /users → GET → JSON response
```
