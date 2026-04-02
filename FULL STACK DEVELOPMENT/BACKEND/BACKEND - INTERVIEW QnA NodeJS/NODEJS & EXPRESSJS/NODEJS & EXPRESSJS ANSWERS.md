# NODEJS

## Q1. What is Node.js and how does it differ from traditional server-side technologies?

### Concepts

- **Node.js** = JavaScript runtime built on **Chrome’s V8 engine** that runs JS **outside browser**
- Designed for **non-blocking, event-driven architecture**
- Traditional server-side (like Java, PHP, Python):
  - Usually **multi-threaded (thread per request)**
  - Blocking I/O is common

**Key Differences**

- Node.js:
  - Single-threaded (event loop)
  - Non-blocking I/O
  - High concurrency (good for I/O-heavy apps)

- Traditional:
  - Multi-threaded
  - Blocking I/O
  - Better for CPU-heavy workloads

### Code Example

```js
// Simple Node.js HTTP server

const http = require("http");

// create server
const server = http.createServer((req, res) => {
  res.write("Hello from Node.js");
  res.end();
});

// listen on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### Interview Ready Answer

Node.js is a JavaScript runtime built on the V8 engine that allows running JavaScript on the server side. Unlike traditional server-side technologies that use multi-threading and blocking I/O, Node.js uses a single-threaded event-driven model with non-blocking I/O, making it highly efficient for handling concurrent requests, especially for I/O-heavy applications.

---

## Q2. Explain the V8 JavaScript engine and its role in Node.js.

### Concepts

- **V8** = JavaScript engine developed by Google
- Used in:
  - Chrome browser
  - Node.js

**Role in Node.js**

- Converts JS → **Machine Code**
- Uses:
  - **JIT (Just-In-Time compilation)**

- Makes JS execution **fast and efficient**

### Code Example

```js
// JavaScript code executed by V8

function add(a, b) {
  return a + b;
}

console.log(add(5, 10));
```

Behind the scenes:

- JS → parsed → optimized → machine code → executed

### Interview Ready Answer

The V8 engine is Google’s high-performance JavaScript engine used in Node.js to execute JavaScript code. It compiles JavaScript directly into machine code using Just-In-Time compilation, which makes execution very fast. In Node.js, V8 is responsible for running all JavaScript logic efficiently.

---

## Q3. What is the event loop in Node.js? Explain its phases.

### Concepts

- Event loop = core mechanism that handles async operations
- Allows Node.js to be **non-blocking**

**Phases of Event Loop**

1. **Timers** → setTimeout, setInterval
2. **Pending Callbacks**
3. **Idle, Prepare**
4. **Poll** → I/O operations happen here
5. **Check** → setImmediate
6. **Close Callbacks**

### Code Example

```js
setTimeout(() => console.log("Timer"), 0);

setImmediate(() => console.log("Immediate"));

console.log("Sync");
```

### Dry Run / Output

```
Sync
Timer or Immediate (depends on phase timing)
```

### Interview Ready Answer

The event loop is a core part of Node.js that allows it to perform non-blocking operations using a single thread. It continuously checks different phases like timers, I/O callbacks, poll, and check, and executes callbacks accordingly. This mechanism enables Node.js to handle thousands of concurrent operations efficiently.

---

## Q4. How does Node.js handle asynchronous operations?

### Concepts

Node.js uses:

- **Callbacks**
- **Promises**
- **Async/Await**
- Backed by:
  - Event loop
  - libuv thread pool

### Code Example

#### Callback

```js
const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});
```

#### Promise

```js
const fs = require("fs").promises;

fs.readFile("file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

#### Async/Await

```js
async function readFileData() {
  try {
    const data = await fs.readFile("file.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

### Interview Ready Answer

Node.js handles asynchronous operations using callbacks, promises, and async/await. These operations are executed in the background using the event loop and libuv thread pool. When the operation completes, the callback is pushed to the event queue and executed, ensuring non-blocking execution.

---

## Q5. What is libuv and what role does it play in Node.js?

### Concepts

- **libuv** = C library used by Node.js
- Provides:
  - Event loop implementation
  - Thread pool
  - Async I/O handling

**Why needed?**

- JS is single-threaded
- libuv handles:
  - File system operations
  - Network operations
  - DNS

### Code Example (Indirect Usage)

```js
const fs = require("fs");

// This uses libuv internally
fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(data);
});
```

Behind the scenes:

- libuv thread pool executes file read
- callback pushed to event loop

### Interview Ready Answer

libuv is a C library that provides Node.js with its event loop and handles asynchronous operations like file system access, networking, and DNS using a thread pool. It enables Node.js to perform non-blocking I/O operations even though JavaScript itself runs on a single thread.

---

## Q6. Why is Node.js single-threaded? How does it handle concurrency?

### Concepts

**Why single-threaded?**

- Simplicity → no thread management, no race conditions
- Performance → avoids overhead of thread creation/switching
- Designed for **I/O-heavy workloads**

**But problem:**
Single thread ⇒ how handle multiple users?

**Solution: Event Loop + libuv**

- Main thread handles:
  - Execution
  - Event loop

- Background handled by:
  - **libuv thread pool**
  - OS kernel

**Concurrency Flow**

1. Request comes
2. If sync → executed immediately
3. If async → delegated to:
   - OS / libuv thread pool

4. Callback registered
5. Event loop executes callback when ready

### Code Example

```js
const fs = require("fs");

console.log("Start");

// async task → goes to libuv thread pool
fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log("File Read Done");
});

console.log("End");
```

### Dry Run / Output

```
Start
End
File Read Done
```

### Key Insight

- Main thread never blocks
- Work is offloaded
- Callback comes back via event loop

### Interview Ready Answer

Node.js is single-threaded to keep execution simple and efficient by avoiding thread management overhead. It handles concurrency using an event-driven architecture where asynchronous tasks are offloaded to the OS or libuv thread pool. Once completed, callbacks are queued and executed by the event loop, allowing Node.js to handle multiple operations concurrently despite having a single main thread.

---

## Q7. Differentiate between blocking and non-blocking I/O in Node.js.

### Concepts

| Feature      | Blocking I/O               | Non-Blocking I/O        |
| ------------ | -------------------------- | ----------------------- |
| Execution    | Waits for task to complete | Continues execution     |
| Thread usage | Blocks main thread         | Uses background workers |
| Performance  | Poor for concurrency       | Highly scalable         |
| Use case     | Rare in Node.js            | Default approach        |

### Code Example

#### Blocking (Synchronous)

```js
const fs = require("fs");

console.log("Start");

// blocks execution
const data = fs.readFileSync("file.txt", "utf-8");

console.log(data);
console.log("End");
```

**Output**

```
Start
(file content)
End
```

---

#### Non-Blocking (Asynchronous)

```js
const fs = require("fs");

console.log("Start");

// non-blocking
fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("End");
```

**Output**

```
Start
End
(file content)
```

### Key Insight

- Blocking = stops everything
- Non-blocking = delegates and continues

### Interview Ready Answer

Blocking I/O stops the execution of the program until the operation completes, which can reduce performance and scalability. Non-blocking I/O, which is the default in Node.js, allows the program to continue executing while the operation is handled asynchronously. Once the operation completes, the callback is executed via the event loop, enabling high concurrency.

---

## Q8. What is REPL in Node.js? How do you use it?

### Concepts

**REPL = Read Eval Print Loop**

- Read → user input
- Eval → execute JS
- Print → output
- Loop → repeat

Used for:

- Testing code quickly
- Debugging
- Learning JS

### How to Use

1. Open terminal
2. Run:

```bash
node
```

3. Start writing JS:

```js
> 2 + 2
4

> const name = "Tanish"
undefined

> name
'Tanish'
```

### Special Commands

- `.help` → list commands
- `.exit` → exit REPL
- `.clear` → clear context

### Code Example (Programmatic REPL)

```js
const repl = require("repl");

// start custom REPL
repl.start({
  prompt: "MyApp > ",
});
```

### Interview Ready Answer

REPL stands for Read-Eval-Print Loop and is an interactive shell provided by Node.js to execute JavaScript code line by line. It is commonly used for quick testing, debugging, and experimenting with code. You can start it by typing `node` in the terminal and exit using `.exit`.

---

# Q9. Node.js Runtime Architecture (Complete Clear Picture)

## Concepts (Start from ZERO — Problem → Solution Thinking)

### What is “Architecture”?

- Architecture = **how system is structured + how parts interact**
- In Node.js → how:
  - JS runs
  - async work happens
  - requests are handled

---

## Problem Node.js Solves

### Traditional Server Problem

- One request = one thread
- More users → more threads → **memory + slow**

### Node.js Solution

- Single thread + async handling
- **Do not wait → delegate work → continue**

---

## Full Architecture Diagram (Enhanced + Complete)

![Image](https://miro.medium.com/0%2AtKlj2lrXFPOPSXQr)

![Image](https://i.sstatic.net/PQTG9.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AU_zyHnKdlvjCdAQkoh0uuQ.png)

![Image](https://d14lhgoyljo1xt.cloudfront.net/assets/b2c610ff35_img-nodejs-architecture0.webp)

---

## Components (Clear Breakdown)

### 1. Call Stack (VERY IMPORTANT)

- Where **synchronous code executes**
- LIFO (Last In First Out)

```js
function a() {
  b();
}

function b() {
  console.log("Hello");
}

a();
```

Flow:

```
Call Stack:
a()
  b()
    console.log()
```

Then unwinds:

```
(empty)
```

---

### 2. V8 Engine

- Executes JS
- Converts → machine code
- Maintains:
  - Call stack
  - Memory heap

---

### 3. Node.js Bindings (Missing piece in most explanations)

- Bridge between:
  - JS (V8)
  - C++ (libuv, OS)

Think:

```
JS → (bindings) → C++ world
```

Example:

```js
fs.readFile();
```

- JS cannot directly talk to OS
- Node bindings convert it → C++ call

---

### 4. libuv (Core Engine of Async)

- Written in C
- Handles:
  - File system
  - Network
  - Timers

**Key role:**

- Offload heavy work from main thread

---

### 5. Thread Pool

- Inside libuv
- Default = 4 threads

Used for:

- File system
- DNS
- Crypto

---

### 6. Event Loop (Brain)

- Infinite loop
- Checks:
  - "Any completed task?"
  - "Execute callback"

---

### 7. Event Queue (Callback Queue)

- Stores completed async callbacks

---

## How Everything Connects (Step-by-Step Flow)

### Simple Example

```js
const fs = require("fs");

console.log("Start");

fs.readFile("file.txt", () => {
  console.log("File Done");
});

console.log("End");
```

---

## Step-by-Step Execution (Real Internal Flow)

### Step 1: Start Execution

```
Call Stack → console.log("Start")
Output → Start
```

---

### Step 2: Async Task Encountered

```
fs.readFile → goes to Node bindings
```

---

### Step 3: Node Bindings

```
Convert JS → C++ call
Send to libuv
```

---

### Step 4: libuv

```
Assign task to thread pool
(File reading happens here)
```

---

### Step 5: Continue Execution

```
console.log("End")
Output → End
```

---

### Step 6: Task Completion

```
Thread pool finishes file read
Callback → pushed to Event Queue
```

---

### Step 7: Event Loop

```
Checks:
- Call stack empty? YES
→ Takes callback
→ Executes it
```

---

### Final Output

```
Start
End
File Done
```

---

## Full Flow Diagram (Textual — Perfect Mental Model)

```
        ┌───────────────┐
        │   JS Code     │
        └──────┬────────┘
               ▼
        ┌───────────────┐
        │   V8 Engine   │
        │ (Call Stack)  │
        └──────┬────────┘
               │
     ┌─────────┴───────────┐
     │                     │
     ▼                     ▼
 Sync Execution      Async Operation
                          │
                          ▼
                 ┌───────────────┐
                 │ Node Bindings │
                 └──────┬────────┘
                        ▼
                 ┌───────────────┐
                 │     libuv     │
                 └──────┬────────┘
                        ▼
                ┌───────────────┐
                │ Thread Pool   │
                └──────┬────────┘
                        ▼
                Task Completed
                        ▼
                ┌───────────────┐
                │ Event Queue   │
                └──────┬────────┘
                        ▼
                ┌───────────────┐
                │ Event Loop    │
                └──────┬────────┘
                        ▼
                Execute Callback
```

---

## Key Terms (Clean Definitions)

### Call Stack

- Executes sync code
- Blocks if heavy task

### Event Loop

- Checks queue
- Runs callbacks

### Event Queue

- Stores completed async callbacks

### Node Bindings

- Bridge JS ↔ C++

### libuv

- Async engine (C library)

### Thread Pool

- Executes heavy tasks

---

## Where People Get Confused (Important)

### Myth: Node.js is fully single-threaded

Reality:

- JS thread = single
- libuv thread pool = multi-threaded

---

### Myth: Async runs magically

Reality:

- Goes through:
  - bindings → libuv → thread pool → queue → event loop

---

## Interview Ready Answer

Node.js runtime architecture consists of the V8 engine for executing JavaScript, a call stack for synchronous execution, and an event loop for handling asynchronous operations. When an async operation is encountered, it is passed through Node.js bindings to libuv, which either uses OS-level async APIs or a thread pool to execute the task. Once completed, the callback is placed in the event queue, and the event loop picks it up when the call stack is empty, enabling non-blocking and highly concurrent execution.

---

# Q10. How does Node.js's single-threaded model handle multiple requests?

## Concepts (Problem → Mental Model → Deep Understanding)

### Problem

- Single thread → **only one thing at a time**
- Then how can Node.js handle **1000+ users concurrently?**

---

## Core Idea (VERY IMPORTANT)

Node.js does NOT process everything itself.

Instead:

- **Handles only coordination (event loop)**
- **Delegates heavy work to libuv / OS**

---

## Mental Model (Real Understanding)

Think Node.js like:

- **1 Manager (Event Loop)**
- **Multiple Workers (Thread Pool / OS)**

Manager does:

- Assign tasks
- Check completed tasks
- Execute callbacks

Workers do:

- File reading
- Network requests
- Database calls

---

## Execution Flow Diagram

![Image](https://i.sstatic.net/awRTq.png)

![Image](https://static.wixstatic.com/media/1af9b8_29fb337cd2b3490996cb3be50a8892a9~mv2.jpg/v1/fill/w_568%2Ch_408%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/1af9b8_29fb337cd2b3490996cb3be50a8892a9~mv2.jpg)

![Image](https://miro.medium.com/0%2AtKlj2lrXFPOPSXQr)

![Image](https://miro.medium.com/1%2AVRYzIWkEeNnCco3UDdlo-w.png)

---

## Step-by-Step Example (Multiple Requests)

### Code

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/slow") {
    // simulate async work
    setTimeout(() => {
      res.end("Slow response");
    }, 3000);
  }

  if (req.url === "/fast") {
    res.end("Fast response");
  }
});

server.listen(3000);
```

---

## What Happens Internally

### Request 1 → `/slow`

1. Comes to event loop
2. `setTimeout` → goes to **libuv (timers)**
3. Event loop is now **FREE**

---

### Request 2 → `/fast`

1. Comes immediately
2. Executed directly
3. Response sent

---

### After 3 sec

1. Timer completes
2. Callback pushed to queue
3. Event loop executes it

---

## Output Behavior

```
User 1 → /slow   → waits
User 2 → /fast   → gets instant response
User 1 → finally gets response
```

---

## Why This Works

### Key Reasons

1. **Non-blocking I/O**
   - Node never waits

2. **Event Loop**
   - Keeps running continuously

3. **Delegation**
   - Work done outside main thread

---

## Where It Breaks (Critical Insight)

### CPU Blocking Example

```js
// BAD CODE
while (true) {}
```

- Blocks event loop
- No other request handled

---

## Solution for CPU Tasks

- Worker Threads
- Child Processes

---

## Deep Insight (Interview Gold)

Node.js achieves concurrency through:

- **Asynchronous I/O**
- **Event-driven architecture**
- **Delegation to libuv and OS**

NOT by:

- Multiple threads for JS execution

---

## Interview Ready Answer

Node.js handles multiple requests using a single-threaded event loop combined with non-blocking I/O. When a request involves asynchronous work like file or network operations, it is delegated to libuv or the OS. The event loop continues handling other requests, and once the async task completes, its callback is executed. This allows Node.js to efficiently handle thousands of concurrent requests without creating multiple threads.

---

# Q11. What is the difference between Node.js and browser JavaScript?

## Concepts (Foundation → Deep Differences)

### Common Base

Both use:

- **JavaScript language**
- **V8 Engine (in Chrome & Node)**

---

## Key Difference (Big Picture)

| Feature       | Node.js               | Browser JavaScript |
| ------------- | --------------------- | ------------------ |
| Environment   | Server-side           | Client-side        |
| Purpose       | Backend               | UI / Frontend      |
| APIs          | FS, OS, Network       | DOM, BOM           |
| Security      | Full system access    | Restricted         |
| Modules       | CommonJS / ES Modules | ES Modules         |
| Global Object | global                | window             |

---

## Architecture Difference Diagram

![Image](https://d3373sevsv1jc.cloudfront.net/uploads/communities_production/page_meta_tag/image/2722/2fc9a0b4-5f77-4110-bdac-710e9b02c41b.png)

![Image](https://razmjo.hashnode.dev/_next/image?q=75&url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1735574146387%2F086160ad-3c25-43e0-8b63-dcd961e68bac.png&w=3840)

![Image](https://miro.medium.com/1%2A13t_fITLmhxkWmp0HmZTnQ.png)

![Image](https://www.theknowledgeacademy.com/_files/images/Comparison_of_Node.js_vs_JavaScript.png)

---

## Deep Differences (Explain Clearly)

### 1. Environment

#### Node.js

- Runs on server
- Can:
  - Read files
  - Access OS
  - Create servers

#### Browser JS

- Runs inside browser
- Cannot access system directly

---

### 2. APIs

#### Node.js

```js
const fs = require("fs");
```

#### Browser

```js
document.getElementById("btn");
```

---

### 3. Global Objects

#### Node.js

```js
console.log(global);
```

#### Browser

```js
console.log(window);
```

---

### 4. Event Loop Difference (Advanced)

- Node.js:
  - libuv based
  - More complex phases

- Browser:
  - Simpler event loop
  - Managed by browser engine

---

### 5. Module System

#### Node.js

```js
const fs = require("fs");
```

#### Browser

```js
import { x } from "./file.js";
```

---

## Real-Life Example

### Same Language, Different Power

```js
// Node.js
const fs = require("fs");
fs.readFile("file.txt", () => {});
```

```js
// Browser (NOT possible)
fs.readFile(...) ❌
```

---

## Deep Insight

- JavaScript = language
- Node.js / Browser = environments

Same syntax, different capabilities

---

## Interview Ready Answer

Node.js and browser JavaScript both use the same JavaScript language and V8 engine, but they run in different environments. Node.js is a server-side runtime that provides APIs for file systems, networking, and OS-level operations, whereas browser JavaScript runs in the client environment and provides APIs like the DOM and BOM for interacting with web pages. Additionally, Node.js uses libuv for its event loop, while browsers have their own event loop implementation.

# EXPRESSJS

## Q1. What is Express.js and why is it used?

### Concepts

- **Express.js** = Minimal, flexible **web framework** built on top of Node.js
- Helps in building:
  - APIs (REST APIs)
  - Web servers
  - Backend applications

**Why use Express?**

- Simplifies Node.js server code
- Provides:
  - Routing
  - Middleware support
  - Request/Response handling

- Avoids writing low-level boilerplate (like raw HTTP module)

### Code Example

```js
// Express basic server

const express = require("express");
const app = express();

// route
app.get("/", (req, res) => {
  res.send("Hello from Express");
});

// server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### Interview Ready Answer

Express.js is a lightweight web framework built on top of Node.js that simplifies server-side development by providing features like routing, middleware, and easier request-response handling. It is used to build scalable APIs and web applications efficiently without dealing with low-level HTTP logic.

---

## Q2. Differentiate between Express.js and Node.js HTTP module.

### Concepts

| Feature         | Node.js HTTP Module | Express.js     |
| --------------- | ------------------- | -------------- |
| Level           | Low-level           | High-level     |
| Routing         | Manual              | Built-in       |
| Middleware      | Not available       | Supported      |
| Code complexity | More                | Less           |
| Flexibility     | High (but complex)  | High (simpler) |

### Code Example

#### Node.js HTTP

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Home Page");
  }
});

server.listen(3000);
```

#### Express.js

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000);
```

### Interview Ready Answer

The Node.js HTTP module is a low-level API that requires manual handling of routing and request-response logic, whereas Express.js is a high-level framework that simplifies development by providing built-in routing, middleware, and cleaner syntax. Express reduces boilerplate and improves developer productivity.

---

## Q3. What are the main features of Express.js?

### Concepts

Key features:

1. **Routing system**
   - Handles different URLs and methods (GET, POST, etc.)

2. **Middleware support**
   - Functions that run between request and response

3. **Request & Response handling**
   - Simplified APIs (req, res)

4. **Template engines support**
   - EJS, Pug, etc.

5. **Error handling**
   - Centralized error middleware

6. **Static file serving**
   - Serve images, CSS, JS

### Code Example

```js
const express = require("express");
const app = express();

// middleware
app.use(express.json());

// route
app.get("/user", (req, res) => {
  res.json({ name: "Tanish" });
});

// static files
app.use(express.static("public"));

app.listen(3000);
```

### Interview Ready Answer

Express.js provides features like routing, middleware support, simplified request-response handling, static file serving, template engine integration, and centralized error handling. These features make it easy to build scalable and maintainable backend applications.

---

## Q4. How do you create a basic Express.js application?

### Concepts

Steps:

1. Install Express
2. Import it
3. Create app instance
4. Define routes
5. Start server

### Code Example

```bash
npm init -y
npm install express
```

```js
// app.js

const express = require("express");

// create app
const app = express();

// route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### Interview Ready Answer

To create a basic Express application, first install Express using npm, then import it, create an app instance, define routes using methods like app.get(), and finally start the server using app.listen(). This sets up a working backend server quickly.

---

## Q5. What is the default port for Express.js applications?

### Concepts

- Express **does NOT have a fixed default port**
- Developer defines it manually

Common practice:

```js
const PORT = process.env.PORT || 3000;
```

Why?

- `process.env.PORT` → used in production (like cloud platforms)
- `3000` → local development fallback

### Code Example

```js
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Interview Ready Answer

Express.js does not have a default port. Developers explicitly define the port using app.listen(). Commonly, port 3000 is used for development, and process.env.PORT is used in production environments.

## Q6. What is routing in Express.js?

### Concept

- **Routing** = defining how application responds to different **URL + HTTP method**
- It maps:

  ```
  Request → Handler Function → Response
  ```

Example:

- `/users` → get users
- `/products` → get products

---

### Code

```js
const express = require("express");
const app = express();

// route definition
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000);
```

---

### Answer

Routing in Express.js refers to the mechanism of defining how an application responds to different client requests based on the URL and HTTP method. It allows mapping incoming requests to specific handler functions that process the request and send a response.

---

## Q7. How do you define routes in Express.js?

### Concept

Routes are defined using:

```
app.METHOD(PATH, HANDLER)
```

Where:

- METHOD → GET, POST, etc.
- PATH → URL
- HANDLER → function(req, res)

---

### Code

```js
const express = require("express");
const app = express();

// GET route
app.get("/user", (req, res) => {
  res.send("Get User");
});

// POST route
app.post("/user", (req, res) => {
  res.send("Create User");
});

app.listen(3000);
```

---

### Answer

Routes in Express.js are defined using methods like app.get(), app.post(), app.put(), and app.delete(), where you specify the path and a callback function to handle the request and response.

---

## Q8. What are route parameters and how do you use them?

### Concept

- Route params = dynamic values in URL
- Defined using `:paramName`

Example:

```
/user/:id
```

---

### Code

```js
const express = require("express");
const app = express();

// route with parameter
app.get("/user/:id", (req, res) => {
  const userId = req.params.id; // extract param
  res.send(`User ID is ${userId}`);
});

app.listen(3000);
```

---

### Output

```
GET /user/101 → "User ID is 101"
```

---

### Answer

Route parameters are dynamic segments in the URL defined using a colon (:) syntax. They allow passing values through the URL, which can be accessed using req.params in Express.js.

---

## Q9. How do you handle query parameters in Express.js?

### Concept

- Query params = key-value pairs in URL
- After `?`

Example:

```
/search?name=tanish&age=21
```

---

### Code

```js
const express = require("express");
const app = express();

app.get("/search", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;

  res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(3000);
```

---

### Output

```
/search?name=tanish&age=21
→ Name: tanish, Age: 21
```

---

### Answer

Query parameters are used to pass optional data in the URL using key-value pairs after a question mark. In Express.js, they can be accessed using req.query.

---

## Q10. What is the difference between `app.get()`, `app.post()`, `app.put()`, and `app.delete()`?

### Concept

| Method   | Purpose          | Example Use Case |
| -------- | ---------------- | ---------------- |
| `GET`    | Read data        | Fetch users      |
| `POST`   | Create data      | Create user      |
| `PUT`    | Update full data | Update user      |
| `DELETE` | Delete data      | Delete user      |

---

### Code

```js
const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send("Get User");
});

app.post("/user", (req, res) => {
  res.send("Create User");
});

app.put("/user", (req, res) => {
  res.send("Update User");
});

app.delete("/user", (req, res) => {
  res.send("Delete User");
});

app.listen(3000);
```

---

### Answer

These methods correspond to HTTP verbs. app.get() is used to retrieve data, app.post() to create data, app.put() to update existing data, and app.delete() to remove data. They define how the server should handle different types of requests.

---

## Q11. What is `app.route()` and when would you use it?

### Concept

- Used to group multiple HTTP methods for same route
- Cleaner code, avoids repetition

---

### Code

```js
const express = require("express");
const app = express();

app
  .route("/user")
  .get((req, res) => {
    res.send("Get User");
  })
  .post((req, res) => {
    res.send("Create User");
  })
  .put((req, res) => {
    res.send("Update User");
  });

app.listen(3000);
```

---

### Answer

app.route() is used to define multiple HTTP methods for the same route in a chained manner. It helps in organizing code better and reduces repetition when handling different operations on the same endpoint.

---

## Q12. What is dynamic routing in Express.js?

### Concept

- Dynamic routing = routes that change based on input
- Uses:
  - Route params
  - Patterns

---

### Code

```js
const express = require("express");
const app = express();

// dynamic route
app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;

  res.send(`Category: ${category}, Product ID: ${id}`);
});

app.listen(3000);
```

---

### Output

```
/product/electronics/101
→ Category: electronics, Product ID: 101
```

---

### Answer

Dynamic routing in Express.js allows handling routes with variable parts using parameters. It enables building flexible routes where values can change based on the request URL.

---

## Q13. How do you organize routes in a large application?

### Concept

In large apps:

- Do NOT write all routes in one file
- Use:
  - **Router**
  - **Separate files**
  - **Modular structure**

---

### Code

#### routes/userRoutes.js

```js
const express = require("express");
const router = express.Router();

// define routes
router.get("/", (req, res) => {
  res.send("All Users");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

module.exports = router;
```

---

#### app.js

```js
const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

// mount routes
app.use("/users", userRoutes);

app.listen(3000);
```

---

### Folder Structure

```
project/
│
├── routes/
│   └── userRoutes.js
│
├── controllers/
├── models/
├── app.js
```

---

### Answer

In large Express applications, routes are organized using the Express Router to separate them into different modules. Each feature or resource has its own route file, which is then imported and mounted in the main application. This improves scalability, readability, and maintainability.

## Q14. What is middleware in Express.js?

### Concept

- **Middleware** = function that runs **between request and response**
- It has access to:
  - `req` (request)
  - `res` (response)
  - `next` (next middleware)

Flow:

```
Request → Middleware → Middleware → Route → Response
```

Used for:

- Logging
- Authentication
- Validation
- Parsing JSON

---

### Code

```js
const express = require("express");
const app = express();

// middleware
app.use((req, res, next) => {
  console.log("Middleware executed");
  next(); // pass control
});

// route
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000);
```

---

### Answer

Middleware in Express.js are functions that execute during the request-response cycle. They can modify the request or response, perform operations like logging or authentication, and pass control to the next middleware or route handler using the next() function.

---

## Q15. Explain the middleware execution order.

### Concept

- Middleware executes **in the order they are defined**
- Top → Down flow

Important rules:

1. Order matters
2. If `next()` not called → request stops
3. Route-specific middleware runs only for that route

---

### Code

```js
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  console.log("Route Handler");
  res.send("Done");
});

app.listen(3000);
```

---

### Output

```
Middleware 1
Middleware 2
Route Handler
```

---

### Answer

Middleware in Express.js executes sequentially in the order they are defined in the code. Each middleware must call next() to pass control to the next middleware or route handler; otherwise, the request will hang.

---

## Q16. What is the purpose of the `next()` function?

### Concept

- `next()` = passes control to next middleware
- Without it:
  - request stops (no response)

---

### Code

```js
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Step 1");
  next(); // move forward
});

app.use((req, res) => {
  console.log("Step 2");
  res.send("Done");
});

app.listen(3000);
```

---

### Important Case (Error Passing)

```js
next(err); // triggers error middleware
```

---

### Answer

The next() function is used to pass control from the current middleware to the next middleware in the stack. If next() is not called, the request-response cycle stops. It can also be used to pass errors by calling next(err).

---

## Q17. How do you create custom middleware?

### Concept

- Just create a function with:

```js
(req, res, next);
```

---

### Code

```js
const express = require("express");
const app = express();

// custom middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

// use middleware
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(3000);
```

---

### Answer

Custom middleware in Express.js is created by defining a function that takes req, res, and next as parameters. It can perform any logic such as logging, authentication, or validation, and must call next() to pass control to the next middleware or route.

---

## Q18. What are error-handling middleware?

### Concept

- Special middleware for handling errors
- Signature:

```js
(err, req, res, next);
```

- Always defined **at the end**

---

### Code

```js
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  const error = new Error("Something went wrong");
  next(error); // pass error
});

// error middleware
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("Internal Server Error");
});

app.listen(3000);
```

---

### Answer

Error-handling middleware in Express.js are special middleware functions that take four parameters: err, req, res, and next. They are used to catch and handle errors in a centralized way and are typically defined at the end of the middleware stack.

---

## Q19. Differentiate between application-level and router-level middleware.

### Concept

| Feature       | Application-Level Middleware | Router-Level Middleware |
| ------------- | ---------------------------- | ----------------------- |
| Scope         | Entire app                   | Specific router         |
| Defined using | app.use()                    | router.use()            |
| Use case      | Global logic                 | Feature-specific logic  |

---

### Code

#### Application-Level

```js
app.use((req, res, next) => {
  console.log("Global Middleware");
  next();
});
```

#### Router-Level

```js
const router = express.Router();

router.use((req, res, next) => {
  console.log("User Router Middleware");
  next();
});
```

---

### Answer

Application-level middleware is applied to the entire Express application using app.use(), whereas router-level middleware is applied only to specific routes using an Express Router. Router-level middleware is useful for modular and feature-specific logic.

---

## Q20. What is the difference between `app.use()` and `app.all()`?

### Concept

| Feature       | app.use()              | app.all()     |
| ------------- | ---------------------- | ------------- |
| Purpose       | Middleware             | Route handler |
| HTTP methods  | All methods            | All methods   |
| Path matching | Partial match (prefix) | Exact match   |

---

### Code

```js
const express = require("express");
const app = express();

// app.use → middleware
app.use("/user", (req, res, next) => {
  console.log("Middleware for /user");
  next();
});

// app.all → route handler
app.all("/user", (req, res) => {
  res.send("Handles all methods for /user");
});

app.listen(3000);
```

---

### Answer

app.use() is used to define middleware that runs for all HTTP methods and matches path prefixes, whereas app.all() is used to define a route handler that responds to all HTTP methods for a specific path.

## Q21. How do you parse JSON request bodies?

### Concept

- Client sends JSON in request body
- Express does NOT parse it by default
- Need middleware: **`express.json()`**

Flow:

```
Incoming JSON → Middleware parses → req.body
```

---

### Code

```js
const express = require("express");
const app = express();

// middleware to parse JSON
app.use(express.json());

app.post("/user", (req, res) => {
  const data = req.body; // parsed JSON
  res.json({
    message: "Data received",
    data: data,
  });
});

app.listen(3000);
```

---

### Dry Run / Output

Request:

```json
POST /user
{
  "name": "Tanish",
  "age": 21
}
```

Response:

```json
{
  "message": "Data received",
  "data": {
    "name": "Tanish",
    "age": 21
  }
}
```

---

### Answer

JSON request bodies are parsed in Express.js using the built-in middleware `express.json()`. It reads incoming JSON data and makes it available in `req.body` for further processing.

---

## Q22. How do you parse URL-encoded data?

### Concept

- URL-encoded = form data
- Format:

```
name=tanish&age=21
```

- Middleware: **`express.urlencoded()`**

---

### Code

```js
const express = require("express");
const app = express();

// parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

app.post("/form", (req, res) => {
  const data = req.body;
  res.send(`Name: ${data.name}, Age: ${data.age}`);
});

app.listen(3000);
```

---

### Dry Run / Output

Request:

```
POST /form
Content-Type: application/x-www-form-urlencoded

name=Tanish&age=21
```

Response:

```
Name: Tanish, Age: 21
```

---

### Answer

URL-encoded data is parsed using `express.urlencoded()` middleware. It processes form data sent in key-value format and makes it accessible via `req.body`.

---

## Q23. What is the difference between `express.json()` and `body-parser`?

### Concept

- Both are used for parsing request bodies

---

### Key Difference Table

| Feature         | express.json()       | body-parser              |
| --------------- | -------------------- | ------------------------ |
| Built-in        | Yes (Express ≥ 4.16) | External package         |
| Installation    | Not required         | Required (`npm install`) |
| Usage           | Simple               | More configurable        |
| Modern practice | Preferred            | Mostly legacy now        |

---

### Code

#### Using express.json()

```js
app.use(express.json());
```

#### Using body-parser

```js
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```

---

### Key Insight

- `express.json()` internally uses body-parser
- No need to install body-parser separately in modern apps

---

### Answer

`express.json()` is a built-in middleware in Express used to parse JSON request bodies, while `body-parser` is an external library that was previously used for the same purpose. In modern Express applications, `express.json()` is preferred as it provides the same functionality without requiring additional installation.

---

## Q24. How do you handle multipart/form-data (file uploads)?

### Concept

- Used for:
  - File uploads

- NOT handled by:
  - `express.json()`
  - `express.urlencoded()`

- Requires middleware:
  - **multer**

---

### Install

```bash
npm install multer
```

---

### Code

```js
const express = require("express");
const multer = require("multer");

const app = express();

// storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// single file upload
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

app.listen(3000);
```

---

### Folder Structure

```
project/
│
├── uploads/
├── app.js
```

---

### Dry Run

- Request → form-data with file
- multer:
  - parses file
  - stores in uploads/
  - adds info to `req.file`

---

### Answer

Multipart/form-data is used for file uploads and cannot be handled by default Express middleware. It is handled using libraries like multer, which parses incoming files, stores them, and provides access through `req.file` or `req.files`.

## Q25. How do you serve static files in Express.js?

### Concept

- Static files = files that don’t change:
  - HTML, CSS, JS, Images

- Express provides built-in way using middleware

Flow:

```text
Request → static middleware → file served directly
```

---

### Code

```js
const express = require("express");
const app = express();

// serve static files from "public" folder
app.use(express.static("public"));

app.listen(3000);
```

---

### Folder Structure

```text
project/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── image.png
│
├── app.js
```

---

### Dry Run / Output

```
http://localhost:3000/index.html → serves file
http://localhost:3000/style.css → serves CSS
```

---

### Answer

Static files in Express.js are served using the `express.static()` middleware. It allows direct access to files like HTML, CSS, JavaScript, and images from a specified directory without defining separate routes.

---

## Q26. What is `express.static()` middleware?

### Concept

- Built-in middleware in Express
- Serves static files automatically
- No need to write routes manually

---

### Code

```js
app.use(express.static("public"));
```

---

### Key Points

- Looks inside given folder
- Matches URL with file name
- Sends file as response

Example:

```
/logo.png → public/logo.png
```

---

### Answer

`express.static()` is a built-in middleware in Express.js used to serve static files such as images, CSS, and JavaScript. It maps incoming requests to files in a specified directory and returns them directly without additional routing logic.

---

## Q27. How do you set up a public directory for static files?

### Concept

- Create a folder (usually named `public`)
- Store all static assets inside it
- Connect it using `express.static()`

---

### Code

```js
const express = require("express");
const path = require("path");

const app = express();

// set public directory
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000);
```

---

### Folder Structure

```text
project/
│
├── public/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       └── logo.png
│
├── app.js
```

---

### Answer

To set up a public directory, create a folder (commonly named `public`) to store static files and use `express.static()` middleware to expose it. This allows clients to access files directly via URL.

---

## Q28. What is CORS and why is it needed?

![](https://mediastroke.com/blog/wp-content/uploads/2018/12/origin.png)

### Concept

- **CORS = Cross-Origin Resource Sharing**

Problem:

- Browser blocks requests between:

  ```
  frontend (localhost:3000)
  backend (localhost:5000)
  ```

- Because:
  - Different origin (port/domain/protocol)

---

### Why Needed

- To allow secure communication between different origins
- Without CORS → request blocked by browser

---

### Example

```text
Frontend → http://localhost:3000
Backend → http://localhost:5000

Request blocked ❌ (no CORS)
Allowed ✅ (with CORS)
```

---

### Answer

CORS (Cross-Origin Resource Sharing) is a security mechanism that allows or restricts resources requested from another domain. It is needed because browsers block cross-origin requests by default to prevent security risks, and CORS enables controlled access between different origins.

---

## Q29. How do you enable CORS in Express.js?

### Concept

- Use middleware:
  - `cors` package

---

### Install

```bash
npm install cors
```

---

### Code (Basic)

```js
const express = require("express");
const cors = require("cors");

const app = express();

// enable CORS for all origins
app.use(cors());

app.get("/", (req, res) => {
  res.send("CORS enabled");
});

app.listen(3000);
```

---

### Code (Custom Config)

```js
app.use(
  cors({
    origin: "http://localhost:3000", // allow only this origin
    methods: ["GET", "POST"],
  }),
);
```

---

### Answer

CORS can be enabled in Express.js using the `cors` middleware. By applying `app.use(cors())`, the server allows cross-origin requests. It can also be configured to allow specific origins, methods, or headers for better security.

---

## Q30. What are preflight requests?

### Concept

- Preflight request = browser sends **OPTIONS request first**
- To check:
  - "Is this request allowed?"

---

### When it happens

- For:
  - PUT, DELETE
  - Custom headers
  - JSON content-type

---

### Flow

```text
1. Browser → OPTIONS request
2. Server → responds with allowed methods/headers
3. If allowed → actual request sent
```

---

### Example

```text
OPTIONS /api/user
→ server responds:
   Access-Control-Allow-Origin
   Access-Control-Allow-Methods
```

---

### Answer

Preflight requests are automatic OPTIONS requests sent by the browser before certain cross-origin requests. They check whether the server allows the actual request by verifying allowed methods and headers. If approved, the browser proceeds with the original request.

## Q31. How do you enable response compression?

### Concept

- Compression reduces response size → faster network transfer
- Works using algorithms like **gzip / brotli**
- Applied using middleware before sending response

Flow:

```text id="r7g3ab"
Request → Server → Compress Response → Send to client
```

---

### Code

```js id="k3h1jp"
const express = require("express");
const compression = require("compression");

const app = express();

// enable compression
app.use(compression());

app.get("/", (req, res) => {
  res.send("This response will be compressed");
});

app.listen(3000);
```

---

### Key Insight

- Automatically compresses:
  - HTML
  - JSON
  - CSS

- Skips very small responses

---

### Answer

Response compression in Express.js is enabled using the `compression` middleware. It compresses HTTP responses using algorithms like gzip, reducing response size and improving performance.

---

## Q32. What is the `compression` middleware?

### Concept

- Middleware for **compressing HTTP responses**

- Uses:
  - gzip
  - brotli (if supported)

- Improves:
  - Speed
  - Bandwidth usage

---

### Code

```js id="1vldkz"
const compression = require("compression");

// use middleware
app.use(compression());
```

---

### Custom Example

```js id="s9l2qx"
app.use(
  compression({
    threshold: 1024, // only compress responses > 1KB
  }),
);
```

---

### Answer

The `compression` middleware is an Express.js middleware used to compress HTTP responses before sending them to the client. It improves performance by reducing the size of data transferred over the network.

---

## Q33. What is Helmet.js and why should you use it?

### Concept

- **Helmet.js** = security middleware for Express
- Sets HTTP headers to protect app

---

### What it protects against

- XSS
- Clickjacking
- MIME sniffing
- Insecure headers

---

### Code

```js id="8yok2g"
const express = require("express");
const helmet = require("helmet");

const app = express();

// use helmet
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Secure App");
});

app.listen(3000);
```

---

### Key Headers Set

- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`

---

### Answer

Helmet.js is a middleware that helps secure Express applications by setting various HTTP headers. It protects against common vulnerabilities like XSS, clickjacking, and MIME sniffing, making applications more secure.

---

## Q34. How do you prevent XSS attacks in Express.js?

### Concept

- **XSS (Cross-Site Scripting)**:
  - Injecting malicious scripts into web pages

---

### Prevention Techniques

1. **Escape user input**
2. Use **Helmet (CSP)**
3. Use libraries like:
   - `xss-clean`

4. Avoid sending raw HTML

---

### Code

```js id="dr8q1t"
const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");

const app = express();

// security middleware
app.use(helmet());
app.use(xss());

// example route
app.post("/data", (req, res) => {
  res.send("Safe response");
});

app.listen(3000);
```

---

### Key Insight

- Never trust user input
- Always sanitize or escape it

---

### Answer

XSS attacks can be prevented in Express.js by sanitizing user input, escaping HTML content, using security middleware like Helmet for Content Security Policy, and avoiding rendering untrusted data directly in responses.

---

## Q35. How do you implement CSRF protection?

### Concept

- **CSRF (Cross-Site Request Forgery)**:
  - Tricks user into making unwanted requests

---

### Solution

- Use **CSRF tokens**
- Server generates token → client sends it back → server verifies

---

### Install

```bash id="6z1p9x"
npm install csurf
```

---

### Code

```js id="r0n8t5"
const express = require("express");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");

const app = express();

// required middlewares
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// CSRF protection
const csrfProtection = csrf({ cookie: true });

app.get("/form", csrfProtection, (req, res) => {
  // send token to frontend
  res.send(`<form method="POST" action="/process">
    <input type="hidden" name="_csrf" value="${req.csrfToken()}">
    <button type="submit">Submit</button>
  </form>`);
});

app.post("/process", csrfProtection, (req, res) => {
  res.send("Data processed safely");
});

app.listen(3000);
```

---

### Flow

```text id="hcmq5k"
1. Server → generates CSRF token
2. Client → sends token with request
3. Server → verifies token
4. If valid → request allowed
```

---

### Answer

CSRF protection in Express.js is implemented using middleware like `csurf`, which generates a unique token for each session. The client must send this token with requests, and the server validates it to ensure the request is legitimate, preventing unauthorized actions.
