
# Topic 7 HTTP Module

---

### **Concept**

**What is the HTTP Module?**

* The **`http` module** is a **built-in Node.js core module** used to create **web servers** and handle **HTTP requests and responses**.
* It allows Node.js to:

  * listen for incoming network requests
  * understand HTTP protocol (methods, headers, status codes)
  * send structured responses back to clients (browser, mobile, other servers)

Important backend clarification:

* Node.js does **not** magically understand HTTP
* The `http` module implements:

  * TCP socket handling
  * HTTP parsing
  * request–response lifecycle

Core backend mental model:

```
Client (Browser / Postman)
        ↓ HTTP Request
Node HTTP Server
        ↓
Request Handler (req, res)
        ↓
HTTP Response
        ↓
Client
```

---

### **Why HTTP Module?**

| Purpose                      | Explanation                                     |
| ---------------------------- | ----------------------------------------------- |
| **Serve Web Pages**          | Send HTML, JSON, or text responses to browsers. |
| **Create APIs**              | Build REST APIs without any external library.   |
| **Handle Requests**          | Detect routes, methods, and query parameters.   |
| **Foundation of Express.js** | Express internally uses this module.            |

Backend reality expansion:

* Every Node backend framework ultimately uses `http`
* Express, Fastify, NestJS are **abstractions**
* Understanding `http` means:

  * you understand what frameworks hide
  * debugging becomes easier
  * interviews become simpler

Interview framing:

> “The `http` module is the lowest-level way to build servers in Node.js.”

---

### **How It Works**

1. Import `http` module.
2. Call `http.createServer()`:

   * This creates a **server object**
3. The callback `(req, res)` runs **for every incoming request**
4. You inspect:

   * `req.url`
   * `req.method`
   * `req.headers`
5. You respond using:

   * `res.writeHead()` / `res.setHeader()`
   * `res.end()`
6. `server.listen(port)` binds the server to a network port.

Important internal insight:

* Node uses an **event loop**
* Each request is handled asynchronously
* One server can handle **many clients concurrently**

---

### **Folder Setup**

```
http-demo/
│
└── server.js
```

Design reasoning:

* Single entry file
* Clear starting point
* Mirrors real backend servers (`index.js`, `server.js`)

---

### **Code Example 1: Basic HTTP Server**

**File:** `server.js`

```js
const http = require('http');
```

* Loads Node’s HTTP engine
* No external dependencies

```js
const server = http.createServer((req, res) => {
```

Key concept:

* This callback runs **on every request**
* `req` → incoming data
* `res` → outgoing response

```js
  res.writeHead(200, { 'Content-Type': 'text/plain' });
```

Why headers matter:

* Browser needs metadata
* Content-Type tells client **how to interpret response**

```js
  res.end('Hello from Node.js HTTP Server!');
});
```

* `res.end()` sends response and closes connection
* No response is sent until `end()` is called

```js
server.listen(PORT, () => {
```

* Server starts listening on a TCP port
* Process stays alive

---

### **Code Example 2: Routing with HTTP Module**

**Key backend concept: Manual Routing**

* No router exists by default
* You must inspect:

  * `req.url`
  * `req.method`

```js
if (req.url === '/' && req.method === 'GET') {
```

This is **manual routing**, which leads to:

* repetitive code
* hard-to-maintain logic

This pain point is **why Express exists**.

---

```js
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify({ message: 'Hello from API', success: true }));
```

Important backend rules:

* JSON responses must be stringified
* Always set correct `Content-Type`

Interview trap:

**Q:** Why do we use `JSON.stringify()`?
**A:** Because HTTP responses must be strings or buffers, not objects.

---

### **Code Example 3: Serving HTML Files**

Here backend meets file system.

```js
const fs = require('fs');
const path = require('path');
```

Why both:

* `http` → network
* `fs` → disk
* `path` → safe file paths

---

```js
filePath = path.join(__dirname, 'pages', 'index.html');
```

Important rule reinforcement:

* Never hardcode paths
* Always anchor with `__dirname`

---

```js
fs.readFile(filePath, (err, content) => {
```

What happens internally:

* Disk I/O runs in background
* Event loop stays free
* Callback executes when data is ready

---

```js
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(content);
```

* HTML is sent as-is
* Browser renders it automatically

---

### **Mini Project: Simple REST API (without Express)**

**Goal:** Understand how APIs work **under the hood**, without magic.

Backend learning objectives:

* HTTP methods
* request body handling
* in-memory state
* status codes

---

```js
req.on('data', chunk => (body += chunk));
```

Important backend concept:

* Request body arrives **in chunks**
* Network data is streamed
* Node does not buffer entire body automatically

---

```js
req.on('end', () => {
```

* Fired when request body is fully received
* Safe point to parse JSON

---

```js
books.push({ id: books.length + 1, ...newBook });
```

Reality check:

* This data is **in memory**
* Server restart = data lost
* This is why databases exist

---

### **Dependencies**

* No external dependencies — uses built-in `http` and `fs`.

Meaning:

* Lightweight
* Fast startup
* Full control

---

### **Notes**

* HTTP servers in Node.js are **event-driven**.
* One thread handles many connections using async I/O.
* Always:

  * set status codes
  * set content type
  * end the response
* Express simplifies:

  * routing
  * body parsing
  * middleware
  * error handling

Backend-level takeaway:

> The `http` module exposes the raw mechanics of how web servers work in Node.js, and mastering it makes higher-level frameworks intuitive instead of magical.

---

## ✅ `server.js` — COMPLETE HTTP MODULE EXAMPLE

```js
// ===================================================
// Topic 7: HTTP Module – Complete Working Server
// ===================================================

// 1. Import core Node.js modules
const http = require("http");   // Handles HTTP protocol
const fs = require("fs");       // Handles file system
const path = require("path");   // Handles file paths safely

// ---------------------------------------------------
// 2. In-memory data (simulating a database)
// ---------------------------------------------------
let books = [
  { id: 1, title: "Learn Node.js", author: "Tanish" },
  { id: 2, title: "Master HTTP", author: "Ryan" }
];

// ---------------------------------------------------
// 3. Create HTTP Server
// ---------------------------------------------------
const server = http.createServer((req, res) => {
  // Log every incoming request (debugging / learning)
  console.log(`${req.method} ${req.url}`);

  // -------------------------------
  // ROUTE: HOME PAGE (HTML)
  // -------------------------------
  if (req.url === "/" && req.method === "GET") {
    const filePath = path.join(__dirname, "pages", "index.html");

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });

  // -------------------------------
  // ROUTE: ABOUT PAGE (HTML)
  // -------------------------------
  } else if (req.url === "/about" && req.method === "GET") {
    const filePath = path.join(__dirname, "pages", "about.html");

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });

  // -------------------------------
  // ROUTE: GET ALL BOOKS (API)
  // -------------------------------
  } else if (req.url === "/books" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(books));

  // -------------------------------
  // ROUTE: ADD NEW BOOK (API)
  // -------------------------------
  } else if (req.url === "/books" && req.method === "POST") {
    let body = "";

    // Receive request body in chunks
    req.on("data", chunk => {
      body += chunk.toString();
    });

    // When all data is received
    req.on("end", () => {
      try {
        const newBook = JSON.parse(body);

        const book = {
          id: books.length + 1,
          title: newBook.title,
          author: newBook.author
        };

        books.push(book);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Book added", book }));
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Invalid JSON" }));
      }
    });

  // -------------------------------
  // ROUTE: DELETE BOOK BY ID (API)
  // -------------------------------
  } else if (req.url.startsWith("/books/") && req.method === "DELETE") {
    const id = parseInt(req.url.split("/")[2]);

    const initialLength = books.length;
    books = books.filter(book => book.id !== id);

    if (books.length === initialLength) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Book not found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Book deleted" }));
    }

  // -------------------------------
  // FALLBACK: 404 NOT FOUND
  // -------------------------------
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Route Not Found");
  }
});

// ---------------------------------------------------
// 4. Start Server
// ---------------------------------------------------
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

---

## 📁 Required Folder Structure (for HTML routes)

```
http-demo/
│
├── server.js
└── pages/
    ├── index.html
    └── about.html
```

### `pages/index.html`

```html
<h1>Home Page</h1>
<p>Welcome to the Node.js HTTP Server</p>
```

### `pages/about.html`

```html
<h1>About Page</h1>
<p>This page is served using http + fs + path</p>
```

---

## 🧠 What This One File Teaches (Very Important)

* how Node handles HTTP requests
* how routing works internally
* how Express is built on top of this
* how request bodies are streamed
* how HTML + JSON are served
* how fs + path integrate with http
* how status codes & headers work

---

## 🎯 Interview One-Liner (Strong)

> “I understand the Node.js `http` module at a low level — routing, request parsing, headers, status codes, and how frameworks like Express abstract this.”

