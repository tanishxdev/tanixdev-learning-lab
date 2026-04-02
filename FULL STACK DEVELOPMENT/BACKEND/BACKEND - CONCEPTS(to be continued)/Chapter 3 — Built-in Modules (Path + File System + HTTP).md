# Chapter 3 — Built-in Modules (Path + File System + HTTP)

---

# 1. Problem (Why this chapter exists)

Till now:

- You can run JS
- You can split code into modules

### ❌ But real backend needs:

- Work with **file paths**
- Read/write **files (logs, DB, uploads)**
- Create a **server**

Without this → backend is incomplete

---

# 2. Concept (Core Idea)

## 🧠 Definition — Built-in Modules

> Node.js provides **pre-built modules** that allow direct access to system-level features.

No installation needed.

---

## 🧠 Core Modules we will learn

| Module | Purpose                  |
| ------ | ------------------------ |
| path   | Handle file paths safely |
| fs     | File system operations   |
| http   | Create server            |

---

# 3. PATH MODULE

---

# 🧠 Problem

Paths differ across OS:

```text
Windows → C:\users\tanish\file.txt
Linux → /users/tanish/file.txt
```

Hardcoding paths → risky

---

# 🧠 Solution

Use **path module** to handle paths safely

---

## 📄 Example

```javascript
// ================================
// path-example.js
// ================================

// Import path module
const path = require("path");

// Get file name
console.log(path.basename(__filename));

// Get directory name
console.log(path.dirname(__filename));

// Join paths safely
const filePath = path.join(__dirname, "files", "data.txt");

console.log(filePath);
```

---

## ▶️ Output (example)

```
path-example.js
/backend-learning
/backend-learning/files/data.txt
```

---

## 🧠 Important Methods

| Method     | Use                |
| ---------- | ------------------ |
| basename() | file name          |
| dirname()  | folder             |
| join()     | safe path creation |
| extname()  | file extension     |

---

# 4. FILE SYSTEM (fs MODULE)

---

# 🧠 Problem

Backend needs:

- Save data
- Read logs
- Handle uploads

---

# 🧠 Solution

`fs` module allows:

- Read files
- Write files
- Delete files

---

## ⚠️ Two Types

| Type  | Behavior                 |
| ----- | ------------------------ |
| Sync  | Blocking                 |
| Async | Non-blocking (preferred) |

---

# 🧠 Example 1 — Read File (Async)

---

## 📄 `read.js`

```javascript
// ================================
// read.js
// ================================

// Import fs module
const fs = require("fs");

// Read file asynchronously
fs.readFile("data.txt", "utf-8", (err, data) => {
  // Handle error
  if (err) {
    console.log("Error:", err);
    return;
  }

  // Print file content
  console.log("File Data:", data);
});
```

---

# 🧠 Example 2 — Write File

---

## 📄 `write.js`

```javascript
// ================================
// write.js
// ================================

const fs = require("fs");

// Write data into file
fs.writeFile("data.txt", "Hello Backend", (err) => {
  if (err) {
    console.log("Error:", err);
    return;
  }

  console.log("File written successfully");
});
```

---

# 🧠 Example 3 — Append File

```javascript
const fs = require("fs");

// Append data
fs.appendFile("data.txt", "\nNew Line Added", (err) => {
  if (err) throw err;

  console.log("Data appended");
});
```

---

# 🧠 Sync Example (Blocking)

```javascript
const fs = require("fs");

// Blocking code
const data = fs.readFileSync("data.txt", "utf-8");

console.log(data);
```

---

## 🧠 Key Insight

```text
Sync → blocks everything ❌
Async → non-blocking ✅ (Node strength)
```

---

# 5. HTTP MODULE (SERVER CREATION)

---

# 🧠 Problem

Backend needs:

- Accept requests
- Send responses

---

# 🧠 Solution

Node provides **http module**

---

## 📄 Example — Basic Server

```javascript
// ================================
// server.js
// ================================

// Import http module
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  // Request received
  console.log("Request received");

  // Set response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response
  res.end("Hello from Server");
});

// Start server
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

## ▶️ Run

```bash
node server.js
```

---

## 🌐 Open Browser

```
http://localhost:3000
```

---

## 🧠 Flow

```text
Browser → Request → Server → Response
```

---

# 6. Behind the Scenes (VERY IMPORTANT)

When request comes:

```text
1. Client sends HTTP request
2. Node receives it
3. createServer callback runs
4. You handle req/res
5. Response sent back
```

---

# 7. Combining Everything (Mini Backend Thinking)

---

## 📄 Example

```javascript
// ================================
// app.js
// ================================

const http = require("http");
const fs = require("fs");
const path = require("path");

// Create server
const server = http.createServer((req, res) => {
  // Create file path
  const filePath = path.join(__dirname, "data.txt");

  // Read file
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.end("Error reading file");
      return;
    }

    // Send file content as response
    res.end(data);
  });
});

// Start server
server.listen(3000, () => {
  console.log("Server started at 3000");
});
```

---

# 8. Mini Practice (DO THIS)

---

## 📁 Structure (same repo)

```
backend-learning/
│
├── app.js
├── data.txt
```

---

## 📄 data.txt

```
Hello from file system
```

---

## ▶️ Task

- Create server
- Read file
- Send response

---

# 9. Common Mistakes

---

### ❌ Using sync everywhere

```js
fs.readFileSync() ❌
```

✔ Use async:

```js
fs.readFile() ✅
```

---

### ❌ Not handling errors

Always:

```js
if (err) return;
```

---

### ❌ Wrong path

```js
"data.txt" ❌
```

✔ Use:

```js
path.join(__dirname, "data.txt") ✅
```

---

# 10. Mental Model (VERY IMPORTANT)

```text
path → handles file location
fs → reads/writes files
http → handles requests
```

Together:

```text
Client → HTTP → Server
                 ↓
              FS + Path
                 ↓
             Response
```

---

# 11. Final File (Production Style Basic Server)

---

## 📄 `app.js`

```javascript
// ================================
// Chapter 3 - Core Backend Server
// ================================

// Import modules
const http = require("http");
const fs = require("fs");
const path = require("path");

// Create server
const server = http.createServer((req, res) => {
  // Create file path safely
  const filePath = path.join(__dirname, "data.txt");

  // Read file asynchronously
  fs.readFile(filePath, "utf-8", (err, data) => {
    // Handle error
    if (err) {
      res.writeHead(500);
      res.end("Internal Server Error");
      return;
    }

    // Send success response
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(data);
  });
});

// Start server
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

---

# 12. Interview Questions

1. What is fs module?
2. Difference between sync and async?
3. Why async is important in Node?
4. What is path module?
5. Why use path.join?
6. How http module works?
7. What is req and res?
8. What is event loop?
9. How Node handles multiple requests?
10. Why Node is non-blocking?

---

# ✅ Summary (Clear Thinking)

- Backend = system + server
- Node gives:
  - path → safe file handling
  - fs → data handling
  - http → server creation

Now you can:

- Build a basic backend server
- Handle real file data

---
