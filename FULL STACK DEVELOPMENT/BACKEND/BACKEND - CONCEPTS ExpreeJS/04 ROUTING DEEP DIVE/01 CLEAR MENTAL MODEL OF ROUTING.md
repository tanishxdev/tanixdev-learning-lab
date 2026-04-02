# PHASE 4 — ROUTING DEEP DIVE

---

# 1. CLEAR MENTAL MODEL OF ROUTING

Routing means:

Mapping a combination of:

```
HTTP Method + URL Path
```

to a specific function.

Think of it like:

```
(GET, /users) → handler1
(POST, /users) → handler2
(PUT, /users/1) → handler3
```

It is not just path.
It is METHOD + PATH.

---

# 2. WHAT IS app.get() ?

Definition:

Registers a route handler for HTTP GET requests.

Syntax:

```js
app.get(path, callback);
```

---

## Why GET?

GET is used for:

- Fetching data
- Reading data
- No side-effects ideally

Example:

```js
app.get("/users", (req, res) => {
  res.send("List of users");
});
```

---

## Internally What Happens?

When you write:

```js
app.get("/users", handler);
```

Express internally pushes something into routing stack:

Pseudo structure:

```js
{
  method: 'GET',
  path: '/users',
  handler: handler
}
```

Stored in:

```
app._router.stack
```

When request comes:

Express checks:

- req.method === 'GET' ?
- req.path === '/users' ?

If yes → execute handler.

---

# 3. app.post()

Used when:

Client sends data to server.

Example:

- Login
- Signup
- Create resource

Example:

```js
app.post("/users", (req, res) => {
  res.send("User created");
});
```

Difference from GET:

GET → retrieve
POST → create

---

# 4. app.put()

Used for:

Updating existing resource completely.

Example:

```js
app.put("/users/:id", (req, res) => {
  res.send("User updated");
});
```

PUT is idempotent.

Meaning:
Calling it multiple times → same result.

---

# 5. app.delete()

Used for:

Deleting resource.

Example:

```js
app.delete("/users/:id", (req, res) => {
  res.send("User deleted");
});
```

---

# 6. app.all()

This is special.

Handles all HTTP methods.

Example:

```js
app.all("/secret", (req, res) => {
  res.send("This runs for GET, POST, PUT, DELETE");
});
```

Use case:

- Authentication check
- Global route validation

---

# 7. FULL CODE DEMO (WITH COMMENTS)

```js
const express = require("express");
const app = express();

// GET route
app.get("/users", (req, res) => {
  // Used to fetch data
  res.send("Fetching users");
});

// POST route
app.post("/users", (req, res) => {
  // Used to create data
  res.send("Creating user");
});

// PUT route
app.put("/users/:id", (req, res) => {
  // Updating user
  res.send(`Updating user ${req.params.id}`);
});

// DELETE route
app.delete("/users/:id", (req, res) => {
  // Deleting user
  res.send(`Deleting user ${req.params.id}`);
});

// ALL method
app.all("/health", (req, res) => {
  res.send("Server healthy");
});

app.listen(3000);
```

---

# 8. ROUTE MATCHING ORDER (VERY IMPORTANT)

Express checks routes in order they are defined.

Top to bottom.

Example:

```js
app.get("/users", handler1);
app.get("/users", handler2);
```

Only handler1 runs.

Because first match wins.

---

## Dangerous Case

```js
app.get("/:id", handler1);
app.get("/users", handler2);
```

If you hit:

```
/users
```

It will match `/:id` first.

Because order matters.

Important interview point.

---

# 9. HOW EXPRESS MATCHES ROUTES INTERNALLY

Express uses:

`path-to-regexp` library internally.

Every route path becomes a regular expression.

Example:

```js
app.get("/users/:id");
```

Internally converted to regex:

```
^\/users\/([^\/]+?)\/?$
```

That is how dynamic params work.

---

# 10. ROUTE PARAMETERS

Example:

```js
app.get("/users/:id", (req, res) => {
  console.log(req.params.id);

  res.send("User ID received");
});
```

If request:

```
GET /users/10
```

req.params.id = 10

---

# 11. QUERY PARAMETERS

Example:

```
GET /users?age=20
```

Access using:

```js
req.query.age;
```

---

# 12. DIFFERENCE BETWEEN PATH PARAM & QUERY PARAM

| Feature  | Path Param        | Query Param   |
| -------- | ----------------- | ------------- |
| Location | In URL path       | After ?       |
| Usage    | Identify resource | Filter data   |
| Example  | /users/10         | /users?age=20 |

---

# 13. REAL WORLD REST STRUCTURE

Correct API structure:

```
GET     /users        → get all users
GET     /users/:id    → get one user
POST    /users        → create user
PUT     /users/:id    → update user
DELETE  /users/:id    → delete user
```

This is REST standard.

Interview expectation.

---

# 14. WHY EXPRESS ROUTING IS POWERFUL?

Because:

- Supports dynamic params
- Supports regex routes
- Supports middleware chaining
- Supports modular routers
- Supports route grouping

---

# 15. COMMON MISTAKES

1. Wrong route order
2. Using GET for everything
3. Not understanding idempotency
4. Forgetting express.json() for POST
5. Confusing params and query

---

# 16. INTERVIEW QUESTIONS

Basic:

1. Difference between GET and POST?
2. What is app.all()?
3. How to define dynamic route?

Intermediate:

4. How Express matches routes?
5. What happens if two routes match?
6. What is idempotent method?

Advanced:

7. How are routes stored internally?
8. Why route order matters?
9. How does Express handle route parameters?
10. How would you design RESTful API?

---

# 17. PERFECT INTERVIEW ANSWER

If asked:

How does Express handle routing?

Answer:

Express maintains an internal routing stack where each route is stored along with its HTTP method and path pattern. When a request arrives, Express iterates through this stack sequentially and checks for method and path match. If a match is found, the corresponding handler is executed. Route matching order is important because Express follows a top-to-bottom execution strategy.

---

# 18. ADVANTAGES (+)

- Clear separation by method
- REST-friendly
- Dynamic routing
- Modular architecture
- Easy scaling

---

# 19. LIMITATIONS (–)

– Order sensitive
– Can become messy without Router module
– No automatic REST enforcement

---

# 20. FINAL ENGINEER MINDSET

Routing is not:

“app.get and done.”

Routing is:

Mapping business logic to HTTP semantics.

Backend engineer thinks:

- Is this GET or POST?
- Is it idempotent?
- Is this resource-based?
- Is path consistent?
- Is it RESTful?

---
