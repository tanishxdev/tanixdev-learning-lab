# Chapter 7 — EJS Template Engine (Server-Side Rendering)

---

# 1. Problem (Why this chapter exists)

Till now with Express:

```js
res.send("Hello");
res.json({ name: "Tanish" });
```

### ❌ Problem

- You are only sending:
  - Plain text
  - JSON

But real apps need:

- Dynamic HTML pages
- Data rendered inside UI

Example:

```text
User profile page → name, email, posts (dynamic)
```

---

# 2. Concept (Core Idea)

## 🧠 Definition — Template Engine

> A tool that allows you to generate **dynamic HTML using data**

---

## 🧠 Definition — EJS

> **EJS = Embedded JavaScript Templates**

- Write HTML + JS together
- Render dynamic data

---

## 🧠 Why needed?

Without EJS:

```js
res.send("<h1>Hello " + name + "</h1>") ❌ messy
```

With EJS:

```ejs
<h1>Hello <%= name %></h1> ✅ clean
```

---

# 3. Solution (How EJS helps)

- Separate logic from UI
- Clean HTML structure
- Dynamic rendering

---

# 4. Setup EJS

---

## ▶️ Install

```bash
npm install ejs
```

---

## ▶️ Configure in Express

```javascript
app.set("view engine", "ejs");
```

---

## 📁 Folder Structure

```text
backend-learning/
│
├── app.js
├── views/
│   └── home.ejs
```

---

# 5. First EJS Example

---

## 📄 `views/home.ejs`

```ejs
<!-- ============================= -->
<!-- home.ejs -->
<!-- ============================= -->

<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>

    <!-- Dynamic data -->
    <h1>Hello <%= name %></h1>

</body>
</html>
```

---

## 📄 `app.js`

```javascript
// ================================
// Chapter 7 - EJS Setup
// ================================

const express = require("express");
const app = express();

// Set EJS as template engine
app.set("view engine", "ejs");

// Route
app.get("/", (req, res) => {
  // Send data to EJS
  res.render("home", { name: "Tanish" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running...");
});
```

---

## 🌐 Output

```html
Hello Tanish
```

---

# 6. EJS Syntax (VERY IMPORTANT)

---

## 🧠 Types of Tags

| Tag      | Meaning           |
| -------- | ----------------- |
| `<%= %>` | Output value      |
| `<% %>`  | Logic (no output) |
| `<%- %>` | Unescaped HTML    |

---

## 📄 Example

```ejs
<% if (isLoggedIn) { %>
    <h1>Welcome User</h1>
<% } else { %>
    <h1>Please Login</h1>
<% } %>
```

---

# 7. Looping in EJS

---

## 📄 Example

```ejs
<ul>
    <% users.forEach(user => { %>
        <li><%= user %></li>
    <% }) %>
</ul>
```

---

## 📄 Route

```js
app.get("/users", (req, res) => {
  res.render("home", {
    users: ["Tanish", "Rahul", "Aman"],
  });
});
```

---

# 8. Passing Multiple Data

---

## 📄 Example

```js
res.render("home", {
  name: "Tanish",
  age: 21,
  isLoggedIn: true,
});
```

---

## 📄 EJS

```ejs
<h1><%= name %></h1>
<p>Age: <%= age %></p>
```

---

# 9. Partials (Reusable Components)

---

# 🧠 Problem

You repeat:

- Navbar
- Footer

---

# 🧠 Solution

Use **partials**

---

## 📁 Structure

```text
views/
│
├── partials/
│   ├── header.ejs
│   └── footer.ejs
│
├── home.ejs
```

---

## 📄 header.ejs

```ejs
<header>
    <h1>My App</h1>
</header>
```

---

## 📄 home.ejs

```ejs
<%- include("partials/header") %>

<h2>Welcome <%= name %></h2>
```

---

# 10. Real Backend Thinking

---

## 🧠 Flow

```text
Client → Request → Express → EJS → HTML → Response
```

---

## 🧠 Use cases

- Dashboard
- Admin panel
- Server-side rendered apps

---

# 11. Mini Practice (DO THIS)

---

## 📁 Create

```text
views/home.ejs
```

---

## 📄 home.ejs

```ejs
<!DOCTYPE html>
<html>
<body>

    <h1>Users List</h1>

    <ul>
        <% users.forEach(user => { %>
            <li><%= user %></li>
        <% }) %>
    </ul>

</body>
</html>
```

---

## 📄 app.js

```javascript
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", {
    users: ["Tanish", "Aman", "Rahul"],
  });
});

app.listen(3000);
```

---

# 12. Common Mistakes

---

### ❌ Forgetting view engine

```js
app.set("view engine", "ejs"); ❌ missing
```

---

### ❌ Wrong folder

Views must be named:

```text
views/ ✅
```

---

### ❌ Using res.send instead of render

```js
res.send("home") ❌
```

✔ Correct:

```js
res.render("home");
```

---

# 13. Mental Model (VERY IMPORTANT)

```text
Backend = Data
EJS = UI generation
```

---

## 🧠 Flow

```text
Data → Template → HTML → Browser
```

---

# 14. Final File (Clean Setup)

---

## 📄 `app.js`

```javascript
// ================================
// Chapter 7 - EJS Final Setup
// ================================

const express = require("express");
const app = express();

// Set EJS
app.set("view engine", "ejs");

// Route
app.get("/", (req, res) => {
  const users = ["Tanish", "Aman", "Rahul"];

  res.render("home", { users });
});

// Start server
app.listen(3000, () => {
  console.log("Server running...");
});
```

---

## 📄 `views/home.ejs`

```ejs
<!DOCTYPE html>
<html>
<head>
    <title>Users</title>
</head>
<body>

    <h1>User List</h1>

    <ul>
        <% users.forEach(user => { %>
            <li><%= user %></li>
        <% }) %>
    </ul>

</body>
</html>
```

---

# 15. Interview Questions

1. What is EJS?
2. What is template engine?
3. Difference between res.send and res.render?
4. What are EJS tags?
5. How to pass data to EJS?
6. What are partials?
7. Can EJS run JS code?
8. What is server-side rendering?
9. Where is EJS used?
10. EJS vs React?

---

# ✅ Summary (Clear Thinking)

- Express → handles backend logic
- EJS → handles UI rendering

You now can:

- Render dynamic pages
- Build full-stack apps (SSR)

---
