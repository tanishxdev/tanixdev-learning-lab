# NodeJS Basics + First Application + REPL

(Engineering Mindset – Why → What → How → Code → Practice)

---

# 1. NodeJS Basics

---

## 1. Problem (WHY NodeJS?)

Before NodeJS:

- JavaScript worked only in browser.
- Backend required Java, PHP, Python.
- Frontend and backend used different languages.
- Handling many users required heavy multi-threading.

We needed:

- JavaScript on server
- Lightweight concurrency
- Real-time support
- Better I/O performance

NodeJS solves this.

---

## 2. What is NodeJS?

### Definition

NodeJS is a JavaScript runtime built on Chrome’s V8 engine.

It allows:

- Running JavaScript outside browser
- Creating servers
- Accessing file system
- Handling networking

It is not:

- A framework
- A library

It is a runtime environment.

---

## 3. Core Features

1. Non-blocking I/O
2. Event-driven architecture
3. Single-threaded event loop
4. NPM ecosystem
5. Cross-platform

---

## 4. Architecture (High-Level)

NodeJS works on:

Single-threaded Event Loop model.

Flow:

Client → Event Queue → Event Loop → Thread Pool (if needed) → Response

It is:

Single-threaded for JS
Multi-threaded internally for I/O

---

# 2. Setting Up NodeJS

---

## Step 1: Install

Download from:

[https://nodejs.org](https://nodejs.org)

Install based on OS.

---

## Step 2: Verify Installation

```bash
node -v
npm -v
```

---

## Step 3: Create Project

```bash
mkdir node-project
cd node-project
npm init -y
```

Creates:

package.json

---

# 3. First NodeJS Application (HTTP Server)

---

## Problem

We need:

- A server
- That listens to requests
- Sends response

---

## Concept

NodeJS provides built-in http module.

---

## Code (CommonJS Version)

```js
// Import HTTP module
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  // Send response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response body
  res.write("Hello World!");

  // End response
  res.end();
});

// Start server on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

## Run Application

```bash
node app.js
```

Visit:

[http://localhost:3000](http://localhost:3000)

---

## Explanation

- require('http') → imports module
- createServer() → creates server instance
- req → client request
- res → server response
- writeHead → sets status + headers
- listen → binds port

---

# 4. Console-Based Node Application (REPL)

---

## Problem

Sometimes we want:

- Quick testing
- No file creation
- Interactive coding

Node provides REPL.

---

# NodeJS REPL (Read-Eval-Print-Loop)

---

## 1. What is REPL?

REPL =

READ → Read input
EVAL → Execute
PRINT → Show result
LOOP → Wait for next input

---

## Start REPL

```bash
node
```

You see:

```
>
```

---

## Example

```js
> const x = 10
> const y = 20
> x + y
30
```

---

## Multi-Line Example

```js
> function add(a, b) {
... return a + b;
... }
> add(5, 10)
15
```

---

## Special Variable (\_)

Stores last result.

```js
> 3 + 3
6
> _ * 2
12
```

---

## Built-in REPL Commands

| Command | Purpose        |
| ------- | -------------- |
| .help   | List commands  |
| .clear  | Clear context  |
| .break  | Exit multiline |
| .exit   | Exit REPL      |

---

## Example: Load Core Module

```js
> const fs = require('fs')
> fs.readFileSync('test.txt', 'utf8')
```

---

## Why REPL is Useful?

- Quick debugging
- Learning environment
- Testing small logic
- Exploring modules

---

# 5. Creating a File-Based Application (Without Express)

---

## Problem

Serve file content via HTTP.

---

## Code (Modern ES Module Version)

```js
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create server
const server = http.createServer((req, res) => {
  // Define file path
  const filePath = path.join(__dirname, "message.txt");

  // Read file asynchronously
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading file");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    }
  });
});

// Start server
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

# 6. Core Modules in NodeJS

Common built-in modules:

| Module | Purpose           |
| ------ | ----------------- |
| http   | Create servers    |
| fs     | File system       |
| path   | Handle file paths |
| events | Event emitter     |
| crypto | Encryption        |
| dns    | DNS lookup        |

---

# 7. Engineering Advantages of NodeJS

1. High performance (V8)
2. Scalable event loop
3. Real-time friendly
4. Massive NPM ecosystem
5. Cross-platform

---

# 8. When to Use NodeJS

Good for:

- REST APIs
- Microservices
- Real-time apps
- Streaming apps

Avoid for:

- Heavy CPU calculations
- Scientific computing
- Video encoding

---

# 9. Mini Exercises

1. Create simple HTTP server on port 5000.
2. Use REPL to test math functions.
3. Build server that:
   - Reads JSON file
   - Sends JSON response.

4. Add error handling to server.

---

# 10. Interview Questions

1. What is NodeJS?
2. What is V8 engine?
3. Explain event loop.
4. What is REPL?
5. What is difference between require and import?
6. Why Node is single-threaded?
7. What is non-blocking I/O?
8. What is res.writeHead?
9. What happens if event loop blocks?
10. Why Node is good for real-time apps?

---

# Final Engineering Summary

NodeJS provides:

- JavaScript runtime
- Event-driven architecture
- Non-blocking I/O
- Single-threaded model
- High concurrency

REPL helps:

- Testing
- Learning
- Debugging

HTTP module allows:

- Building servers without frameworks

---
