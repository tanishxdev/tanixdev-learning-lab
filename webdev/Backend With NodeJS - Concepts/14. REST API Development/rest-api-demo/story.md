# Mental Model First

Soch simple rakho:

> `app.js` = **brain (logic + routes + server)**
> `data/` = **storage (data source)**

Jaise real world me:

- app.js = company ka office
- data folder = godown / warehouse

---

# Folder Level Thinking

## `app.js`

**Role:**

> Server + API logic + request handling + response handling

Isme hota hai:

- Express setup
- Middleware
- Routes
- Business logic
- Server start

Matlab:

> “jo bhi HTTP request aaye, usko kaise handle karna hai → app.js”

---

## `data/users.json`

**Role:**

> Pure data storage

Isme:

- Sirf JSON data
- No logic
- No server
- No routes
- No functions

Matlab:

> “data ka source”

---

# Ab Code ko Mentally Break Karte Hain

## Current Problem in your code

Abhi tera code:

```js
let users = [
  { id: 1, name: "Tanish", email: "tanish@example.com" },
  { id: 2, name: "Ravi", email: "ravi@example.com" },
];
```

### Soch:

> “Data app.js ke andar hardcoded hai”

Issue:

- Data + Logic mixed
- Separation nahi
- Real system jaisa feel nahi
- File-based DB ka feel nahi aata

---

# Proper Breakdown Architecture

```
rest-api-demo/
│
├── app.js          → server + logic
└── data/
    └── users.json  → sirf data
```

---

# data/users.json

```json
[
  { "id": 1, "name": "Tanish", "email": "tanish@example.com" },
  { "id": 2, "name": "Ravi", "email": "ravi@example.com" }
]
```

### Soch:

> “Yeh meri database file hai (file-based DB)”

Isme:

- No JS
- No require
- No logic
- Sirf data

---

# app.js (Real Breakdown Style)

```js
const express = require("express");
const fs = require("fs"); // file system module
const path = require("path"); // path resolver
```

### Soch:

> “Data file se read/write karna hai → fs chahiye”
> “Path safe banane ke liye → path chahiye”

---

```js
const app = express();
app.use(express.json());
```

### Soch:

> “Server bana diya + JSON parsing ready”

---

```js
const dataPath = path.join(__dirname, "data", "users.json");
```

### Soch:

> “users.json ka full path banana”

Mentally:

> `__dirname` = current folder
> `data/users.json` = data file
> `join` = OS-safe path

---

```js
function readUsers() {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
}
```

### Soch:

> “Har request pe fresh data read karunga”

Flow:

1. File read
2. String aayi
3. JSON parse
4. JS array bana
5. return

---

```js
function writeUsers(users) {
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
}
```

### Soch:

> “Jab bhi data change ho → file me save karo”

`null, 2`:

> JSON.stringify() ka structure

```js
JSON.stringify(value, replacer, space);
```

> 3 parameters hote hain:

- value → kya convert karna hai
- replacer → filtering / transform function
- space → formatting (indentation / spacing)

> Mental Model

- null → koi filtering nahi
- 2 → 2 spaces formatting

---

# Routes = Brain Logic Layer

## GET all users

```js
app.get("/api/users", (req, res) => {
  const users = readUsers(); // data load
  res.status(200).json(users);
});
```

### Soch:

> “Request aayi → file se data uthao → client ko de do”

---

## GET by ID

```js
app.get('/api/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
```

### Soch:

> “Fresh data read → search → match id”

---

```js
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});
```

### Soch:

> “Nahi mila → error | mila → data”

---

## POST create user

```js
app.post('/api/users', (req, res) => {
  const users = readUsers();
```

### Soch:

> “Latest data read karo”

---

```js
const newUser = {
  id: Date.now(), // safer unique id
  ...req.body,
};
```

### Soch:

> “ID collision avoid karni hai → timestamp id”

---

```js
users.push(newUser); // memory update
writeUsers(users); // file update
```

### Soch:

> “RAM + file dono update”

---

```js
  res.status(201).json(newUser);
});
```

---

## PUT update

```js
app.put('/api/users/:id', (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
```

### Soch:

> “Index chahiye because overwrite karna hai”

---

```js
if (index === -1) return res.status(404).json({ message: "User not found" });
```

---

```js
users[index] = { ...users[index], ...req.body };
writeUsers(users);
```

### Soch:

> “Old data + new data merge → file save”

---

## DELETE

```js
app.delete('/api/users/:id', (req, res) => {
  const users = readUsers();
  const filtered = users.filter(u => u.id !== parseInt(req.params.id));
```

---

```js
  writeUsers(filtered);
  res.json({ message: 'User deleted' });
});
```

---

# Server Start

```js
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

---

# Real Developer Separation Logic

### data/

> Storage layer
> (Database role)

### app.js

> Application layer
> (Server + API brain)

---

# Architecture Thinking

Ab structure bana:

```
Client
  ↓
Express Routes (app.js)
  ↓
Business Logic
  ↓
File System (data/users.json)
```

Same pattern as:

```
Client
  ↓
Controller
  ↓
Service
  ↓
Database
```

Bas yaha DB = JSON file

---

# Why this breakdown matters

Agar kal MongoDB aaya:

- `data/users.json` replace hoga
- `readUsers/writeUsers` replace honge
- routes same rahenge

Architecture stable rahega
Storage layer change hoti rahegi

---

# Developer Rule

> ❌ Data + logic same file = beginner code
> ✅ Data layer + logic layer = engineer code

---

Structure:

```
rest-api-demo/
│
├── app.js
└── data/
    └── users.json
```

# `data/users.json`

```json
[
  {
    "id": 1,
    "name": "Tanish",
    "email": "tanish@example.com"
  },
  {
    "id": 2,
    "name": "Ravi",
    "email": "ravi@example.com"
  }
]
```

---

# `app.js`

```js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

/* =========================
   Middleware
========================= */
app.use(express.json());

/* =========================
   Data File Path
========================= */
const dataPath = path.join(__dirname, "data", "users.json");

/* =========================
   Helper Functions
========================= */

// Read users from file
function readUsers() {
  const data = fs.readFileSync(dataPath, "utf-8"); // file -> string
  return JSON.parse(data); // string -> JS array
}

// Write users to file
function writeUsers(users) {
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2)); // save formatted JSON
}

/* =========================
   Routes
========================= */

// GET all users
app.get("/api/users", (req, res) => {
  const users = readUsers(); // load data from file
  res.status(200).json(users); // send to client
});

// GET user by ID
app.get("/api/users/:id", (req, res) => {
  const users = readUsers(); // fresh data
  const user = users.find(
    (u) => u.id === parseInt(req.params.id), // id match
  );

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// POST create user
app.post("/api/users", (req, res) => {
  const users = readUsers(); // load current data

  const newUser = {
    id: Date.now(), // unique id
    ...req.body, // name, email from client
  };

  users.push(newUser); // add in memory
  writeUsers(users); // save in file

  res.status(201).json(newUser);
});

// PUT update user
app.put("/api/users/:id", (req, res) => {
  const users = readUsers();

  const index = users.findIndex((u) => u.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  // merge old + new data
  users[index] = { ...users[index], ...req.body };

  writeUsers(users); // persist in file

  res.json({ message: "User updated", user: users[index] });
});

// DELETE user
app.delete("/api/users/:id", (req, res) => {
  const users = readUsers();

  const filteredUsers = users.filter((u) => u.id !== parseInt(req.params.id));

  writeUsers(filteredUsers); // update file

  res.json({ message: "User deleted" });
});

/* =========================
   Start Server
========================= */

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

---

# Real Developer Mental Model (1 line)

> `app.js` = brain + logic + server
> `data/users.json` = storage + database role

---

## Flow:

Client → API → File Read → Logic → File Write → Response
