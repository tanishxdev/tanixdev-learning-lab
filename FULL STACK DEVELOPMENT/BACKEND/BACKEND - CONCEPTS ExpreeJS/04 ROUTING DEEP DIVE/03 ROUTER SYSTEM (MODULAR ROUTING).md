# PHASE 4 — ROUTER SYSTEM (MODULAR ROUTING)

Goal: Build clean, modular APIs.

---

# 1. WHY ROUTER EXISTS?

Problem:

If you write everything in `app.js`:

```js
app.get('/users', ...)
app.post('/users', ...)
app.get('/products', ...)
app.post('/products', ...)
app.get('/orders', ...)
```

File becomes huge.

Hard to maintain.
Hard to scale.
Hard to test.

Solution:

Split routes into modules.

That is where:

```js
express.Router();
```

comes in.

---

# 2. MENTAL MODEL OF ROUTER

Think:

`app` = Main Application

`router` = Mini application

Router behaves like:

- Smaller version of app
- Has its own middleware stack
- Has its own routes

Then you mount router into app.

Flow:

```text
Request
   ↓
App Middleware
   ↓
Mounted Router
   ↓
Router Middleware
   ↓
Router Route Handler
   ↓
Response
```

---

# 3. express.Router()

Definition:

Creates a new router instance.

Syntax:

```js
const router = express.Router();
```

It returns:

A mini middleware + routing system.

---

# 4. BASIC MODULAR STRUCTURE

Project structure:

```
project/
│
├── server.js
├── app.js
├── routes/
│     ├── userRoutes.js
│     └── productRoutes.js
```

---

# 5. EXAMPLE — USER ROUTER

## routes/userRoutes.js

```js
// Import express
const express = require("express");

// Create router instance
const router = express.Router();

// GET all users
router.get("/", (req, res) => {
  res.send("All Users");
});

// POST create user
router.post("/", (req, res) => {
  res.send("User Created");
});

// Export router
module.exports = router;
```

---

## app.js

```js
const express = require("express");
const app = express();

// Import user router
const userRoutes = require("./routes/userRoutes");

// Mount router
app.use("/users", userRoutes);

module.exports = app;
```

---

Now:

```
GET /users       → router.get('/')
POST /users      → router.post('/')
```

Because router is mounted at `/users`.

---

# 6. router.METHOD()

Works same as app.METHOD().

Example:

```js
router.get();
router.post();
router.put();
router.delete();
```

Difference:

router handles routes inside module.

---

# 7. router.use()

Used to attach middleware to router only.

Example:

```js
router.use((req, res, next) => {
  console.log("Router-level middleware");
  next();
});
```

This middleware runs only for routes inside this router.

Not globally.

---

# 8. router.all()

Handles all HTTP methods for given path.

Example:

```js
router.all("/secret", (req, res, next) => {
  console.log("Checking auth");
  next();
});
```

Used for:

- Authentication
- Validation
- Logging specific route group

---

# 9. router.param()

Very powerful and interview-level.

Used for:

Pre-processing route parameters.

Example:

```js
router.param("id", (req, res, next, id) => {
  console.log("ID parameter detected:", id);

  // You can fetch user from DB here
  req.userId = id;

  next();
});
```

Now:

```js
router.get("/:id", (req, res) => {
  res.send(`User ID: ${req.userId}`);
});
```

If request:

```
GET /users/10
```

Flow:

1. router.param runs first
2. then route handler runs

Use case:

- Validate ID
- Fetch DB record
- Attach object to req

Very powerful pattern.

---

# 10. router.route()

Used for cleaner REST structure.

Instead of:

```js
router.get('/users', ...)
router.post('/users', ...)
router.put('/users', ...)
```

You write:

```js
router
  .route("/")
  .get((req, res) => {
    res.send("Get Users");
  })
  .post((req, res) => {
    res.send("Create User");
  });
```

Cleaner.
Grouped by resource.

Professional style.

---

# 11. MOUNT EVENT

Router emits:

```
mount
```

When mounted into app.

Example:

```js
router.on("mount", function (parent) {
  console.log("Router Mounted");
});
```

Rarely used.
Advanced-level.

Interview bonus point.

---

# 12. app.mountpath

If router mounted like:

```js
app.use("/users", userRoutes);
```

Inside router:

```js
console.log(req.baseUrl);
```

Returns:

```
/users
```

app.mountpath shows path where app/ router is mounted.

Useful for:

- Debugging
- Multi-tenant apps

---

# 13. COMPLETE PROFESSIONAL EXAMPLE

### routes/userRoutes.js

```js
const express = require("express");
const router = express.Router();

// Router-level middleware
router.use((req, res, next) => {
  console.log("User Router Middleware");
  next();
});

// Param middleware
router.param("id", (req, res, next, id) => {
  req.userId = id;
  next();
});

// Route grouping
router
  .route("/")
  .get((req, res) => {
    res.send("Get All Users");
  })
  .post((req, res) => {
    res.send("Create User");
  });

// Dynamic route
router.get("/:id", (req, res) => {
  res.send(`User ID: ${req.userId}`);
});

module.exports = router;
```

---

### app.js

```js
const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

app.listen(3000);
```

---

# 14. WHY THIS IS IMPORTANT IN ENTERPRISE?

In enterprise:

- Each feature has its own router
- Each router has its own middleware
- Controllers separated
- Services separated
- Clean structure

Example structure:

```
routes/
controllers/
services/
middlewares/
models/
```

This is scalable backend.

---

# 15. COMMON MISTAKES

1. Forgetting to export router
2. Forgetting app.use()
3. Wrong mount path
4. Using app.get instead of router.get inside module
5. Not understanding baseUrl

---

# 16. INTERVIEW QUESTIONS

Basic:

1. What is express.Router?
2. Difference between app.use and router.use?
3. What is router.param?

Intermediate:

4. Why modular routing?
5. How router.route improves code?
6. What is req.baseUrl?

Advanced:

7. How does Express internally mount router?
8. What is mount event?
9. Explain router middleware order.
10. How would you structure large Express app?

---

# 17. PERFECT INTERVIEW ANSWER

If asked:

Why use express.Router?

Answer:

express.Router allows modularization of routes into separate files. It acts as a mini-application with its own middleware and routing system. This improves scalability, maintainability, and separation of concerns in large applications.

---

# 18. ENGINEER MINDSET

Routing is not about:

“Making endpoints work.”

Routing is about:

- Grouping logic by resource
- Maintaining clean architecture
- Enforcing REST patterns
- Making code scalable
- Supporting large teams

---
