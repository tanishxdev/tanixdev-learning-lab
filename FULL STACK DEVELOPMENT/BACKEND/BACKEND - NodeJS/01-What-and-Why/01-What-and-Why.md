# Node.js Introduction

(Structured for real engineering understanding)

---

## 1. Problem (WHY Node.js Exists)

Before Node.js:

- JavaScript worked only inside browser.
- Backend was written in Java, PHP, Python, etc.
- Frontend and backend used different languages.
- Handling many concurrent users was expensive (thread per request model).

### Real Engineering Problem

If 10,000 users hit your server at same time:

- Traditional servers create multiple threads.
- More threads = more memory.
- More memory = more cost.
- Context switching overhead increases.

We needed:

- Lightweight server
- Fast I/O handling
- One language everywhere
- High concurrency without heavy threads

Node.js solves this.

---

## 2. What is Node.js?

### Definition

Node.js is a **JavaScript runtime environment** that allows JavaScript to run outside the browser.

### Built On

- V8 Engine (Google Chrome engine)

### What It Means

You can now:

- Build backend servers
- Read/write files
- Connect to databases
- Create APIs
- Build CLI tools

All using JavaScript.

---

## 3. Mental Model

Think of Node.js as:

> A factory with one smart worker
> That never waits idle

Instead of:

- Waiting for one task to finish
- Then starting next

It:

- Starts task
- Moves to next task immediately
- Comes back when task finishes

This is called:

- Event-driven
- Non-blocking
- Single-threaded event loop

---

## 4. First Program (Hello World)

### Code

```js
// console.log prints output to terminal
console.log("Hello, World!");
```

### Run It

```
node filename.js
```

### Output

```
Hello, World!
```

No browser needed.

---

## 5. Core Features of Node.js

### 1. Server-Side JavaScript

Runs JS outside browser.

### 2. Non-Blocking I/O

Does not wait for file, DB, or network operations.

### 3. Single Threaded Event Loop

One thread handles multiple connections.

### 4. V8 Engine

Compiles JS to machine code.

### 5. NPM Ecosystem

Largest package ecosystem.

---

## 6. How Node.js Works Internally

### Step-by-step Flow

1. Client sends request
2. Event loop receives it
3. If I/O needed → offloaded to system
4. Node continues handling other requests
5. When I/O completes → callback executed

---

### Example: File Reading

```js
// Import file system module
const fs = require("fs");

// Asynchronously read file
fs.readFile("file.txt", "utf8", (err, data) => {
  // Error handling
  if (err) {
    console.error("Error occurred:", err);
    return;
  }

  // Print file data
  console.log("File Content:", data);
});

// This runs immediately (non-blocking)
console.log("Reading file...");
```

### Expected Output Order

```
Reading file...
File Content: (actual content)
```

Why?

Because readFile is asynchronous.

---

## 7. Core Architecture Components

### 1. V8 Engine

Converts JS → Machine code.

### 2. Event Loop

Manages async operations.

### 3. Libuv

Handles:

- File system
- Networking
- Thread pool
- Timers

### 4. Non-blocking I/O

Does not freeze main thread.

---

## 8. Where Node.js is Used

### 1. REST APIs

Backend services.

### 2. Real-time Apps

Chat, gaming, collaboration tools.

### 3. Microservices

Small independent services.

### 4. Streaming

Video/audio streaming.

### 5. IoT

Multiple device connections.

### 6. CLI Tools

Custom command line programs.

---

## 9. When NOT to Use Node.js

Avoid for:

- Heavy CPU computation
- Video encoding
- Image processing at large scale
- Scientific computing

Because:

Node is single-threaded for JS execution.

---

## 10. Node.js vs Other Backend

| Feature   | Node.js                    | Java               | Python                     |
| --------- | -------------------------- | ------------------ | -------------------------- |
| Type      | JS runtime                 | OOP language       | High-level language        |
| Threading | Single-threaded event loop | Multi-threaded     | Multi-threaded (GIL limit) |
| Best For  | I/O heavy apps             | Enterprise systems | ML, scripting              |
| Real-time | Excellent                  | Good               | Moderate                   |

---

## 11. Industry Usage Examples

### Tech

- Uber
- Netflix
- Trello

### Finance

- PayPal
- Intuit

### E-commerce

- Walmart
- eBay

### Media

- Spotify
- BBC

---

## 12. Exercises

1. Write a program that:
   - Prints your name
   - Prints current date
   - Prints process version

2. Create a file:
   - Read it using fs
   - Print content

3. Modify example:
   - Add custom error handling

---

## 13. Interview Questions

1. What is Node.js?
2. Why is Node single-threaded?
3. Explain event loop.
4. What is non-blocking I/O?
5. Difference between blocking and non-blocking?
6. What is V8 engine?
7. Why Node good for real-time apps?
8. When should you avoid Node?
9. How Node handles concurrency?
10. What is Libuv?

---

## 14. Summary (Engineering View)

Node.js is:

- A runtime
- Built on V8
- Event-driven
- Non-blocking
- Best for I/O heavy systems
- Not ideal for CPU heavy tasks

It solves:

- Scalability problem
- Concurrency problem
- Language duplication problem

---
