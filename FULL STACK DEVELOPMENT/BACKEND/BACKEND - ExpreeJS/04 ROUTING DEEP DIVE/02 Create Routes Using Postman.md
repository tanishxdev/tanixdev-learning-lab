# PHASE 4 — Create Routes Using Postman

---

# 1. WHY WE NEED POSTMAN?

Browser can only send:

```text
GET requests (normally)
```

But real backend needs:

- GET
- POST
- PUT
- DELETE
- PATCH

Also needs:

- JSON body
- Headers
- Auth tokens
- Status code inspection

Postman allows:

- Full HTTP control
- Manual API testing
- Inspect response headers
- Inspect status codes
- Send JSON body

---

# 2. MENTAL MODEL OF API TESTING

When frontend talks to backend:

```text
Frontend → HTTP Request → Backend → HTTP Response → Frontend
```

Postman acts as:

```text
Fake Frontend
```

You simulate client manually.

---

# 3. SIMPLE API FOR TESTING

Let’s build test server first.

---

## Example API (Fully Commented)

```js
const express = require("express");
const app = express();

// Middleware to parse JSON body
// Without this, req.body will be undefined
app.use(express.json());

let users = [];

// GET all users
app.get("/users", (req, res) => {
  // Send status 200 automatically
  res.status(200).json(users);
});

// POST create user
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    // 400 = Bad Request
    return res.status(400).json({ error: "Name is required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);

  // 201 = Created
  res.status(201).json(newUser);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(userIndex, 1);

  res.status(200).json({ message: "User deleted" });
});

app.listen(3000);
```

---

# 4. TESTING IN POSTMAN (STEP BY STEP)

---

## 1️⃣ Test GET /users

In Postman:

Method: GET
URL:

```text
http://localhost:3000/users
```

Click Send.

Response:

```json
[]
```

Status Code:

```text
200 OK
```

Meaning:

Request successful.

---

## 2️⃣ Test POST /users

Method: POST
URL:

```text
http://localhost:3000/users
```

Go to:

Body → raw → JSON

Send:

```json
{
  "name": "Tanish"
}
```

Click Send.

Response:

```json
{
  "id": 1,
  "name": "Tanish"
}
```

Status Code:

```text
201 Created
```

---

## 3️⃣ Test Error Case (Missing Name)

Send empty body:

```json
{}
```

Response:

```json
{
  "error": "Name is required"
}
```

Status:

```text
400 Bad Request
```

This is proper API behavior.

---

## 4️⃣ Test DELETE /users/1

Method: DELETE
URL:

```text
http://localhost:3000/users/1
```

Response:

```json
{
  "message": "User deleted"
}
```

Status:

```text
200 OK
```

---

# 5. UNDERSTANDING STATUS CODES (VERY IMPORTANT)

Status codes are part of HTTP standard.

They communicate result of request.

---

## 1xx → Informational

Rarely used in APIs.

---

## 2xx → Success

| Code | Meaning    |
| ---- | ---------- |
| 200  | OK         |
| 201  | Created    |
| 204  | No Content |

Example:

```js
res.status(200).json(data);
res.status(201).json(newUser);
res.status(204).send();
```

---

## 3xx → Redirection

Rare in APIs.

Example:

```js
res.redirect("/login");
```

---

## 4xx → Client Error

| Code | Meaning      |
| ---- | ------------ |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 403  | Forbidden    |
| 404  | Not Found    |

Example:

```js
res.status(404).json({ error: "User not found" });
```

---

## 5xx → Server Error

| Code | Meaning               |
| ---- | --------------------- |
| 500  | Internal Server Error |

Example:

```js
res.status(500).json({ error: "Something broke" });
```

---

# 6. WHY STATUS CODES MATTER?

Frontend depends on them.

Example:

If status = 401
Frontend redirects to login.

If status = 404
Frontend shows "Not Found" page.

If status = 500
Frontend shows error message.

Without correct status codes:

Frontend logic breaks.

---

# 7. COMMON BEGINNER MISTAKE

Always sending:

```js
res.send("Error occurred");
```

with 200 status.

This is wrong.

Always set proper status code.

---

# 8. HOW EXPRESS HANDLES STATUS

If you don't set:

```js
res.status();
```

Default = 200.

---

Correct professional pattern:

```js
return res.status(400).json({
  success: false,
  message: "Validation failed",
});
```

Always return after sending response.

Prevents double-send errors.

---

# 9. REAL WORLD PRODUCTION RESPONSE FORMAT

Standard API response:

```json
{
  "success": true,
  "data": {...},
  "message": "User created"
}
```

Error format:

```json
{
  "success": false,
  "error": "Invalid credentials"
}
```

Consistency is important.

---

# 10. DEBUGGING WITH POSTMAN

Postman allows you to inspect:

- Status
- Headers
- Response body
- Time taken
- Request payload

Backend engineers use it daily.

---

# 11. INTERVIEW QUESTIONS

Basic:

1. Why use Postman?
2. What is 201 status code?
3. Difference between 400 and 500?

Intermediate:

4. What status code for login failure?
5. When to use 204?
6. What happens if no status is set?

Advanced:

7. Design proper REST response format.
8. How would you test APIs without frontend?
9. Why is consistent response structure important?

---

# 12. PERFECT INTERVIEW ANSWER

If asked:

How do you test Express APIs?

Answer:

I use Postman to manually send HTTP requests like GET, POST, PUT, and DELETE to the server. It allows me to inspect response body, headers, and status codes. I ensure proper status codes like 200, 201, 400, and 500 are returned based on the scenario, and I validate both success and error cases.

---

# 13. ENGINEER MINDSET SHIFT

Don’t think:

“I got response, so it's fine.”

Think:

- Is status correct?
- Is error structured?
- Is response consistent?
- Is validation done?
- Is failure case handled?

That is backend thinking.

---
