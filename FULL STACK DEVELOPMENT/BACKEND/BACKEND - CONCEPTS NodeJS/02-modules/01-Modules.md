# Node.js Modules (Core + Third-Party + Custom)

Engineering Mindset — Why → What → How → Code → Practice

---

# 1. Problem (WHY Modules Exist?)

If entire backend code is in one file:

- Hard to read
- Hard to debug
- Hard to scale
- Hard to test
- Multiple developers conflict

We need:

- Separation of concerns
- Reusability
- Encapsulation
- Clean architecture

Modules solve this.

---

# 2. What is a Module?

### Definition

A module is a reusable, encapsulated unit of code.

It can export:

- Functions
- Objects
- Classes
- Constants

Node.js uses:

```js
require();
module.exports;
```

---

# 3. Types of Modules in Node.js

There are 3 types:

1. Core Modules
2. Third-Party Modules
3. Custom Modules

---

# 4. Core Modules

Core modules are built-in with Node.js.

No installation required.

Example:

```js
const fs = require("fs");
```

---

## Common Core Modules

| Module | Purpose                  |
| ------ | ------------------------ |
| fs     | File system operations   |
| http   | Create web servers       |
| path   | Handle file paths        |
| events | Event-driven programming |
| os     | OS information           |
| crypto | Hashing & encryption     |
| util   | Utility functions        |

---

## 4.1 fs Module (File System)

### Problem

We need to:

- Read files
- Write files
- Delete files

---

### Asynchronous Read (Recommended)

```js
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

Non-blocking.

---

### Synchronous Read (Blocking)

```js
const fs = require("fs");

const data = fs.readFileSync("file.txt", "utf8");
console.log(data);
```

Blocks event loop.

Avoid in production.

---

## 4.2 http Module

### Problem

We need to create server.

---

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(8080, () => {
  console.log("Server running on 8080");
});
```

---

## 4.3 events Module (EventEmitter)

Node is event-driven.

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", (msg) => {
  console.log(msg);
});

emitter.emit("greet", "Hello World");
```

Used in real-time systems.

---

## 4.4 path Module

```js
const path = require("path");

console.log(path.basename("/home/user/file.txt"));
```

Helps build OS-safe paths.

---

## 4.5 os Module

```js
const os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.freemem());
```

Useful for environment-aware apps.

---

## 4.6 crypto Module

```js
const crypto = require("crypto");

const hash = crypto.createHash("sha256").update("Hello").digest("hex");

console.log(hash);
```

Used for:

- Password hashing
- Tokens
- Encryption

---

# 5. Third-Party Modules

These are installed via NPM.

Example:

```bash
npm install express
```

Example usage:

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000);
```

---

## Popular Third-Party Modules

| Module       | Purpose             |
| ------------ | ------------------- |
| Express      | Web framework       |
| Mongoose     | MongoDB ODM         |
| Axios        | HTTP requests       |
| Lodash       | Utility functions   |
| dotenv       | Env variables       |
| jsonwebtoken | Authentication      |
| Nodemon      | Auto-restart server |

---

# 6. Custom Modules

These are user-created modules.

---

## Problem

Business logic must be separated.

Example:

math operations in one file.

---

## Step 1: Create Module

math-utils.js

```js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  multiply,
};
```

---

## Step 2: Use Module

app.js

```js
const math = require("./math-utils");

console.log(math.add(5, 3));
console.log(math.multiply(5, 3));
```

Output:

8
15

---

# 7. module.exports vs exports

Both export values.

But:

Correct:

```js
exports.add = add;
```

Wrong:

```js
exports = { add }; // This breaks reference
```

If exporting single function:

```js
module.exports = add;
```

---

# 8. Engineering Benefits of Modules

1. Encapsulation
2. Clean architecture
3. Scalability
4. Team collaboration
5. Testability
6. Reusability

---

# 9. Real Project Structure Example

```
project/
│
├── controllers/
├── services/
├── routes/
├── utils/
├── config/
├── app.js
└── package.json
```

Each folder = module layer.

---

# 10. Best Practices

1. One responsibility per module
2. Keep modules small
3. Avoid circular dependencies
4. Export only necessary items
5. Separate config and logic

---

# 11. Mini Exercises

1. Create custom module:
   - subtract
   - divide

2. Create event emitter module.
3. Build file service module.
4. Build hash utility module using crypto.

---

# 12. Interview Questions

1. What is a module in Node.js?
2. Types of modules?
3. Difference between require and import?
4. What is module.exports?
5. What is circular dependency?
6. Explain core vs third-party module.
7. Why modular architecture important?
8. What is EventEmitter?
9. Difference between sync and async fs?
10. How to structure large Node app?

---

# Final Engineering Summary

Modules are foundation of Node.js architecture.

Core modules → Built-in tools
Third-party modules → Community solutions
Custom modules → Your business logic

Without modules:

Node.js applications are not scalable.

---
