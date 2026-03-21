# PART 1: NODE.JS INTERVIEW QUESTIONS

## I. NODE.JS FUNDAMENTALS

---

# 1. What is Node.js and how does it differ from traditional server-side technologies?

## Concepts

### What is Node.js?

- Node.js is a **JavaScript runtime environment**
- Built on **Google Chrome’s V8 engine**
- Allows JavaScript to run **outside the browser**
- Used mainly for building:
  - Backend APIs
  - Real-time apps
  - Microservices
  - Streaming services

### Key Characteristics

1. Single-threaded
2. Event-driven
3. Non-blocking I/O
4. Asynchronous by default

---

### Traditional Server-Side Technologies

Examples:

- PHP
- Java (Servlets, Spring)
- .NET
- Ruby

Traditional model:

- Multi-threaded
- Blocking I/O
- Thread-per-request architecture

---

### Core Differences

| Feature     | Node.js              | Traditional Servers |
| ----------- | -------------------- | ------------------- |
| Threading   | Single-threaded      | Multi-threaded      |
| I/O         | Non-blocking         | Blocking            |
| Concurrency | Event Loop           | Thread Pool         |
| Performance | High for I/O tasks   | Good for CPU-heavy  |
| Use Case    | APIs, Real-time apps | Enterprise apps     |

---

## Code Examples

### Example 1: Simple HTTP Server (Node.js)

```js
// Import built-in http module
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  // This callback runs for every request
  res.write("Hello from Node.js");
  res.end();
});

// Start server on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Explanation:

- `require("http")` loads Node core module
- `createServer()` registers request handler
- Single thread handles multiple requests using event loop

---

### Example 2: Blocking vs Non-blocking

```js
const fs = require("fs");

// Blocking (synchronous)
const data = fs.readFileSync("file.txt");
console.log(data.toString());

// Non-blocking (asynchronous)
fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
```

Explanation:

- `readFileSync()` blocks execution
- `readFile()` allows event loop to continue
- Node prefers non-blocking for scalability

---

## Interview Ready Answer

Node.js is a JavaScript runtime built on the V8 engine that allows JavaScript to run outside the browser. It follows a single-threaded, event-driven, non-blocking I/O model, which makes it highly efficient for I/O-intensive applications like APIs and real-time systems.

Unlike traditional multi-threaded server technologies that use one thread per request and blocking I/O, Node.js uses an event loop and asynchronous operations to handle thousands of concurrent connections efficiently without creating multiple threads.

It is best suited for I/O-heavy workloads rather than CPU-intensive tasks.

---

# 2. Explain the V8 JavaScript engine and its role in Node.js.

## Concepts

### What is V8?

- V8 is Google’s open-source JavaScript engine
- Written in C++
- Used in:
  - Google Chrome
  - Node.js

---

![](https://assets.digitalocean.com/articles/alligator/js/v8-engine/javascript_journey.png)

### Role in Node.js

1. Converts JavaScript → Machine Code
2. Uses Just-In-Time (JIT) compilation
3. Manages memory (Garbage Collection)

---

### Execution Flow

JavaScript Code
→ V8 parses code
→ Compiles to machine code
→ Executes

---

### Why V8 is Important

- High performance
- Optimized compilation
- Efficient memory management
- Enables Node.js speed

---

## Code Example

```js
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
```

Explanation:

- V8 compiles `add()` into optimized machine code
- Frequently used functions are optimized further
- Garbage collector cleans unused memory

---

## Interview Ready Answer

V8 is Google’s high-performance JavaScript engine written in C++. It compiles JavaScript directly into optimized machine code using Just-In-Time compilation. In Node.js, V8 is responsible for executing JavaScript code efficiently and managing memory via garbage collection. Node.js uses V8 to achieve high execution speed and performance.

---

# 3. What is the event loop in Node.js? Explain its phases.

![](https://miro.medium.com/0*6T6KIVRkN9nWb3QU.gif)

## Concepts

### What is Event Loop?

The event loop is the mechanism that allows Node.js to:

- Handle asynchronous operations
- Manage concurrency
- Execute callbacks

Node.js is single-threaded but achieves concurrency through the event loop.

---

### Event Loop Phases

1. Timers
2. Pending Callbacks
3. Idle / Prepare
4. Poll
5. Check
6. Close Callbacks

---

### Important Queues

- Callback Queue
- Microtask Queue
  - Promise callbacks
  - process.nextTick()

---

### Execution Order

1. Synchronous code
2. process.nextTick()
3. Promises (microtasks)
4. Timers
5. I/O callbacks
6. setImmediate()

---

## Code Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

process.nextTick(() => {
  console.log("Next Tick");
});

console.log("End");
```

Expected Output:

Start
End
Next Tick
Promise
Timeout

Explanation:

- Synchronous runs first
- nextTick queue runs before promise
- Promise (microtask)
- Timer callback

---

## Interview Ready Answer

The event loop is the core mechanism that enables Node.js to perform non-blocking I/O despite being single-threaded. It continuously checks different phases like timers, poll, check, and executes queued callbacks. Microtasks such as process.nextTick and Promises are executed before moving to the next phase. This architecture allows Node.js to handle thousands of concurrent requests efficiently.

---

# 4. How does Node.js handle asynchronous operations?

![](https://miro.medium.com/v2/da:true/resize:fit:1200/0*8NUhlzZCQALRYaQp)
![](https://www.freecodecamp.org/news/content/images/2023/05/asynchronous-javascript---Page-2--5-.png)
![](https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/190741/image-1582215000590-ffa807c19d5f6959de485fc66664e123.png)

## Concepts

Node.js uses:

1. Event Loop
2. Callback Queue
3. Thread Pool (libuv)
4. Promises & Async/Await

---

### Mechanism

- I/O task sent to OS or thread pool
- Node continues execution
- When task completes → callback added to queue
- Event loop executes callback

---

## Code Example (Callback)

```js
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("File reading started...");
```

---

## Code Example (Async/Await)

```js
const fs = require("fs").promises;

async function readFile() {
  try {
    const data = await fs.readFile("file.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();
```

---

## Interview Ready Answer

Node.js handles asynchronous operations using the event loop and libuv thread pool. When an async task like file I/O is initiated, Node delegates it to the OS or thread pool and continues executing other code. Once completed, the callback is pushed to the queue and executed by the event loop. Promises and async/await provide a cleaner abstraction over this mechanism.

---

# 5. What is libuv and what role does it play in Node.js?

![](https://miro.medium.com/0*tKlj2lrXFPOPSXQr)
![](https://miro.medium.com/1*o60tEVVfSNI3oHwqhgN2iQ.jpeg)

## Concepts

### What is libuv?

- A C library used by Node.js
- Handles:
  - Event loop
  - Thread pool
  - Async I/O
  - File system
  - Networking

---

### Why Needed?

JavaScript itself cannot perform system-level operations.
libuv provides:

- OS abstraction
- Cross-platform compatibility
- Non-blocking I/O

---

### Thread Pool

Default size: 4 threads
Used for:

- File system
- DNS
- Crypto
- Compression

---

## Code Example (Thread Pool Example)

```js
const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
  console.log("Hash generated");
});

console.log("Processing...");
```

Explanation:

- pbkdf2 runs in thread pool
- Main thread not blocked
- Callback executed after completion

---

## Interview Ready Answer

libuv is a C library used by Node.js to implement the event loop and provide asynchronous I/O capabilities. It abstracts OS-level operations and provides a thread pool for tasks like file system operations, DNS lookups, and cryptography. It enables Node.js to perform non-blocking I/O and handle concurrency efficiently despite being single-threaded.

---

# 6. Why is Node.js single-threaded? How does it handle concurrency?

![](https://media.licdn.com/dms/image/v2/D5612AQFKkQnKhmgNtw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1735634599257?e=2147483647&v=beta&t=TZojRXiNoKVgX9m0VQ_UfBMqkw7iKZo-EMrDDX4Qi3k)

## Concepts

### Why Single-Threaded?

Node.js was designed to:

- Avoid thread overhead
- Avoid context switching cost
- Avoid race conditions
- Keep architecture simple

Traditional servers:

- Create one thread per request
- High memory usage
- Complex synchronization

Node.js:

- One main thread
- Event loop for concurrency
- Offloads heavy work to OS / thread pool

---

### How Node.js Handles Concurrency

Node.js uses:

1. Event Loop
2. Callback Queue
3. Microtask Queue
4. libuv Thread Pool

Concurrency model:

Request arrives
→ Non-blocking task delegated
→ Event loop continues
→ Callback queued
→ Event loop executes callback

---

### When Threads Are Used?

Thread pool (libuv) handles:

- File system
- DNS
- Crypto
- Compression

Default size: 4 threads (configurable via UV_THREADPOOL_SIZE)

---

## Code Example

```js
const fs = require("fs");

console.log("Start");

// Asynchronous file read
fs.readFile("file.txt", () => {
  console.log("File Read Complete");
});

console.log("End");
```

Expected Output:

Start
End
File Read Complete

Explanation:

- Single thread executes synchronous code
- File I/O delegated
- Event loop executes callback later

---

## Interview Ready Answer

Node.js is single-threaded to simplify concurrency and avoid thread management overhead. Instead of creating multiple threads, it uses an event loop and non-blocking I/O. When asynchronous tasks are initiated, they are delegated to the OS or libuv thread pool, and the main thread continues execution. Once completed, callbacks are queued and executed by the event loop, allowing Node.js to handle thousands of concurrent connections efficiently.

---

# 7. Differentiate between blocking and non-blocking I/O in Node.js.

![](https://media.geeksforgeeks.org/wp-content/uploads/20220208171854/resizedimagePromo1-660x371.jpeg)

## Concepts

### Blocking I/O

- Execution waits for operation to complete
- Stops entire thread
- Reduces scalability

Example: `fs.readFileSync()`

---

### Non-Blocking I/O

- Operation runs in background
- Does not block execution
- Callback executed when complete

Example: `fs.readFile()`

---

### Comparison Table

| Feature     | Blocking              | Non-Blocking    |
| ----------- | --------------------- | --------------- |
| Execution   | Stops thread          | Continues       |
| Performance | Poor for high traffic | High            |
| Use Case    | Simple scripts        | Production apps |

---

## Code Example

```js
const fs = require("fs");

// Blocking
const data = fs.readFileSync("file.txt");
console.log("Blocking done");

// Non-blocking
fs.readFile("file.txt", () => {
  console.log("Non-blocking done");
});

console.log("Program continues");
```

---

## Interview Ready Answer

Blocking I/O halts execution until the operation completes, which reduces scalability. Non-blocking I/O delegates the operation and allows the program to continue execution, executing the callback later. Node.js is built around non-blocking I/O to support high concurrency and performance.

---

# 8. What is REPL in Node.js? How do you use it?

## Concepts

REPL = Read → Evaluate → Print → Loop

Interactive Node.js shell for:

- Testing code
- Debugging
- Quick experiments

---

### How to Start

```bash
node
```

Exit:

```bash
.exit
```

---

## Code Example (Inside REPL)

```js
> 2 + 3
5

> const name = "Node"
undefined

> name
'Node'
```

---

## Interview Ready Answer

REPL stands for Read-Evaluate-Print-Loop. It is an interactive shell provided by Node.js to execute JavaScript statements directly. It is useful for quick testing, debugging, and experimentation without creating a file. It can be started by typing `node` in the terminal.

---

# 9. Explain the Node.js runtime architecture.

## Concepts

Node.js Architecture Components:

1. V8 Engine
2. Event Loop
3. libuv
4. Thread Pool
5. OS

---

### Flow

JavaScript Code
→ V8 executes
→ Async task delegated to libuv
→ Event loop monitors
→ Callback executed

---

### Architecture Layers

Application Layer
Node Core APIs
V8 Engine
libuv
Operating System

---

## Code Example

```js
setTimeout(() => {
  console.log("Timer executed");
}, 1000);
```

Explanation:

- Timer registered
- Event loop monitors timers phase
- Callback executed after 1 second

---

## Interview Ready Answer

Node.js runtime architecture consists of the V8 engine for executing JavaScript, libuv for handling asynchronous I/O and the event loop, and a thread pool for offloading blocking tasks. When an async operation is initiated, it is delegated to libuv or the OS, and the event loop ensures the callback executes once the task completes.

---

# 10. How does Node.js's single-threaded model handle multiple requests?

## Concepts

Single thread does not mean single request.

Node.js:

- Handles multiple connections
- Uses event loop
- Delegates heavy tasks

---

### Request Handling Flow

Client Request
→ Event loop registers callback
→ Non-blocking operations
→ Response returned

---

## Code Example

```js
const http = require("http");

http
  .createServer((req, res) => {
    res.end("Response");
  })
  .listen(3000);
```

- Single thread
- Thousands of requests handled via event loop

---

## Interview Ready Answer

Although Node.js runs on a single thread, it can handle multiple concurrent requests using non-blocking I/O and the event loop. When a request requires I/O, it delegates the task and continues processing other requests. This architecture allows high scalability for I/O-bound applications.

---

# 11. What is the difference between Node.js and browser JavaScript?

## Concepts

| Feature       | Node.js      | Browser JS |
| ------------- | ------------ | ---------- |
| Environment   | Server       | Client     |
| Modules       | CommonJS/ESM | ES Modules |
| DOM Access    | No           | Yes        |
| Global Object | global       | window     |
| APIs          | fs, http     | fetch, DOM |

---

## Code Example

Browser:

```js
document.getElementById("id");
```

Node:

```js
const fs = require("fs");
```

---

## Interview Ready Answer

Browser JavaScript runs in the browser environment and has access to DOM and Web APIs, while Node.js runs on the server and provides access to system-level APIs like file system and networking. Node.js does not have DOM access and uses different global objects and module systems.

---

# 12. How does Node.js communicate with external services?

## Concepts

Node.js communicates via:

1. HTTP/HTTPS
2. TCP/UDP (net module)
3. WebSockets
4. Third-party libraries (axios, fetch)

---

## Code Example

```js
const https = require("https");

https.get("https://api.github.com", (res) => {
  res.on("data", (chunk) => {
    console.log(chunk.toString());
  });
});
```

---

## Interview Ready Answer

Node.js communicates with external services using HTTP/HTTPS modules, TCP/UDP sockets, or third-party libraries like axios and fetch. It can act both as a server and as a client to consume APIs or connect to databases and microservices.

---

# 13. Explain the reactor pattern in Node.js.

## Concepts

Reactor Pattern:

- Wait for events
- Dispatch handlers
- Event-driven architecture

Components:

1. Event demultiplexer
2. Event loop
3. Event handlers

Node.js uses reactor pattern via event loop.

---

## Code Example

```js
const fs = require("fs");

fs.readFile("file.txt", () => {
  console.log("File Read");
});
```

- Event registered
- Event loop waits
- Callback executed when ready

---

## Interview Ready Answer

The reactor pattern is a design pattern where a single thread waits for events and dispatches handlers when events occur. Node.js implements this pattern through its event loop and non-blocking I/O system, enabling efficient handling of concurrent operations

- The Reactor pattern is the fundamental architectural pattern that powers the asynchronous, non-blocking I/O model of Node.js. It allows Node.js to handle a high volume of concurrent I/O operations (like network requests or file access) efficiently on a single main thread, preventing the application from blocking

---

# 14. What is a module in Node.js? Explain different types of modules.

## Concepts

Module = reusable block of code.

Types:

1. Core Modules (fs, http)
2. Local Modules
3. Third-party Modules (npm)

---

## Code Example

```js
// math.js
exports.add = (a, b) => a + b;

// app.js
const math = require("./math");
console.log(math.add(2, 3));
```

---

## Interview Ready Answer

A module in Node.js is a reusable piece of code encapsulated in a file. Node supports core modules, local modules, and third-party modules installed via npm. Modules promote code organization and reusability.

---

# 15. How does require() work? Explain module caching.

## Concepts

require():

1. Resolves path
2. Loads file
3. Wraps module
4. Executes
5. Caches result

Caching:

- Module loaded once
- Stored in require.cache
- Subsequent require returns cached version

---

## Code Example

```js
// counter.js
let count = 0;
count++;
module.exports = count;
```

```js
const c1 = require("./counter");
const c2 = require("./counter");

console.log(c1);
console.log(c2);
```

Output:

1
1

---

## Interview Ready Answer

When require() is called, Node resolves the module path, loads and executes it inside a wrapper function, and then caches the result. Subsequent calls return the cached module instead of re-executing the file, improving performance.

---

# 16. What is the difference between `exports` and `module.exports`?

---

# Concepts

In **Node.js (CommonJS modules)** every file is treated as a **module**.

Node internally creates an object called:

```
module
```

Inside this object there is a property:

```
module.exports
```

This property is what **gets returned when another file requires the module**.

Example:

```js
const math = require("./math");
```

The variable `math` receives whatever is inside:

```
module.exports
```

---

## Important Relationship

`exports` is simply a **reference (shortcut)** to `module.exports`.

Internally Node does something like:

```js
var exports = module.exports;
```

So initially:

```
exports === module.exports
```

Both point to the **same object in memory**.

---

# Correct Usage

When you want to **add properties** to exports.

Example:

```js
exports.add = (a, b) => a + b;
```

This works because we are **modifying the same object**.

Equivalent to:

```js
module.exports.add = (a, b) => a + b;
```

Both modify the same export object.

---

# Wrong Usage

This breaks the reference:

```js
exports = function () {};
```

Why?

Because now `exports` points to a **new object**, while `module.exports` still points to the old one.

So Node will export:

```
module.exports
```

not the reassigned `exports`.

Result:

```
Your function will NOT be exported
```

---

# Correct Way to Export a Function

When exporting **one function or object**, use:

```js
module.exports = function () {
  console.log("Hello");
};
```

or

```js
module.exports = {
  add,
  subtract,
};
```

This replaces the whole export object.

---

# Code Example

### math.js

```js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

---

### app.js

```js
const math = require("./math");

console.log(math.add(5, 3));
```

---

### Output

```
8
```

---

## Internal Working (Mental Model)

Node wraps every module like this:

```js
(function (exports, require, module, __filename, __dirname) {});
```

Inside the wrapper:

```
exports → reference to module.exports
```

So when you modify `exports`, you are modifying `module.exports`.

But when you **reassign exports**, you break the link.

---

## Visual Explanation

Initial state:

```
exports  ──┐
           │
           ▼
       module.exports
           │
           ▼
        {}
```

After property assignment:

```
exports.add = fn

exports  ──┐
           │
           ▼
       module.exports
           │
           ▼
       { add: fn }
```

After reassignment:

```
exports = fn

exports → fn

module.exports → {}
```

Node returns:

```
module.exports
```

So your function is lost.

---

## When to Use Each

Use **exports** when exporting **multiple properties**:

```js
exports.login = login;
exports.logout = logout;
```

Use **module.exports** when exporting **one thing**:

```js
module.exports = UserService;
```

---

## Common Pattern in Real Projects

Multiple exports:

```js
exports.createUser = createUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
```

Single export:

```js
module.exports = UserController;
```

---

## Interview Ready Answer

`exports` is simply a reference to `module.exports`. Both initially point to the same object. When we add properties to `exports`, they are added to `module.exports`. However, if we reassign `exports`, the reference breaks and Node will still export `module.exports`. Therefore, to export a function or object directly, we should use `module.exports`.

---

# 17. How does Node.js resolve modules?

## Concepts

Resolution Order:

1. Core module
2. File path
3. node_modules folder
4. Parent directories

File extensions tried:

.js
.json
.node

---

## Interview Ready Answer

Node.js resolves modules by first checking if it is a core module, then resolving relative or absolute paths, and finally searching in the node_modules directory recursively up the folder hierarchy.

---

# 18. What is the purpose of `require.resolve()`?

---

# Concepts

In **Node.js**, `require.resolve()` is used to:

```text
Find the exact file path Node.js will use for a module
```

Important points:

- Returns **absolute path**
- Uses **Node's module resolution algorithm**
- **Does NOT load or execute the module**

So unlike `require()`, it **only resolves the path**.

---

## Why It Exists

Normally when we write:

```js
require("express");
```

Node searches for the module using its **module resolution system**:

```
Current folder
↓
node_modules
↓
Parent folder node_modules
↓
Global modules
```

But sometimes we want to know:

```
Which file Node actually resolved?
```

That is where `require.resolve()` helps.

---

# Code Example

```js
console.log(require.resolve("fs"));
```

Output example:

```text
fs
```

Why?

Because `fs` is a **core module**, not a file path.

---

### Example with a local module

Project structure:

```
project
 ├ app.js
 └ math.js
```

### math.js

```js
exports.add = (a, b) => a + b;
```

---

### app.js

```js
console.log(require.resolve("./math"));
```

Output:

```
/Users/tanish/project/math.js
```

This is the **absolute path Node resolved**.

---

# Difference Between `require()` and `require.resolve()`

| Feature       | require()      | require.resolve()  |
| ------------- | -------------- | ------------------ |
| Loads module  | Yes            | No                 |
| Executes code | Yes            | No                 |
| Returns       | module exports | resolved file path |
| Purpose       | use module     | find module path   |

Example:

```js
require("./math");
```

returns:

```
{ add: [Function] }
```

But:

```js
require.resolve("./math");
```

returns:

```
/project/math.js
```

---

# Real Use Cases

### 1. Debugging module resolution

If a module cannot be found:

```
Cannot find module 'xyz'
```

You can test:

```js
require.resolve("xyz");
```

This helps debug **where Node is looking**.

---

### 2. Clearing module cache

Node caches modules in:

```
require.cache
```

Example:

```js
delete require.cache[require.resolve("./config")];
```

This forces Node to **reload the module next time**.

---

### 3. Finding module location

Sometimes libraries want to know **where another package is installed**.

Example:

```js
const path = require.resolve("express");
```

---

# Internal Mental Model

Node does this when resolving modules:

```
require("module")
↓
resolve module path
↓
check cache
↓
load module
↓
execute module
↓
return exports
```

But `require.resolve()` stops early:

```
resolve module path
↓
return path
```

No execution happens.

---

# Visual Flow

### require()

```
Find module
↓
Resolve path
↓
Load module
↓
Execute module
↓
Return exports
```

---

### require.resolve()

```
Find module
↓
Resolve path
↓
Return absolute path
```

---

# Interview Ready Answer

`require.resolve()` returns the absolute path that Node.js resolves for a module using its module resolution algorithm. Unlike `require()`, it does not load or execute the module. It is mainly used for debugging module paths or interacting with the module cache.

---

# 19. Explain the Module Wrapper Function in Node.js

---

# Concepts

In **Node.js**, every file is treated as a **module**.

Before Node executes your file, it **wraps the entire code inside a function**.

The wrapper looks like this:

```js
(function (exports, require, module, __filename, __dirname) {
  // Your module code is placed here
});
```

This is called the **Module Wrapper Function**.

Node automatically applies this wrapper to every file.

---

# Why Node Uses the Wrapper

The wrapper function exists for **three important reasons**:

```
Encapsulation
Local variables
Avoid global pollution
```

---

## 1. Encapsulation

Encapsulation means:

```
Each file runs in its own scope
```

Variables inside a module **do not leak to other files**.

Example:

### file1.js

```js
const name = "Tanish";
```

### file2.js

```js
console.log(name);
```

Result:

```
ReferenceError: name is not defined
```

Why?

Because each file runs inside its **own wrapper function scope**.

---

## 2. Provides Useful Local Variables

The wrapper injects **five important variables**.

```
exports
require
module
__filename
__dirname
```

These are **not global variables**.
They are provided by the wrapper.

---

### exports

Used to **export functions or objects** from the module.

Example:

```js
exports.add = (a, b) => a + b;
```

---

### require

Used to **import other modules**.

Example:

```js
const math = require("./math");
```

---

### module

Represents the current module.

Example:

```js
module.exports = function () {};
```

---

### \_\_filename

Gives the **absolute path of the current file**.

Example:

```js
console.log(__filename);
```

Output example:

```
/Users/tanish/project/app.js
```

---

### \_\_dirname

Gives the **directory path of the current file**.

Example:

```js
console.log(__dirname);
```

Output example:

```
/Users/tanish/project
```

---

# Example of Module Wrapper Behavior

Your code:

```js
const name = "Node";
console.log(name);
```

Node internally executes it like this:

```js
(function (exports, require, module, __filename, __dirname) {
  const name = "Node";
  console.log(name);
});
```

This is **invisible to developers**, but it always happens.

---

# How This Prevents Global Pollution

Without wrapper:

```
All variables would go into global scope
```

With wrapper:

```
Variables remain inside module scope
```

Example:

```
Module A → variable a
Module B → variable a
```

No conflict occurs.

---

# Visual Mental Model

Without wrapper:

```
Global Scope
 ├ file1 variables
 ├ file2 variables
 ├ file3 variables
```

With wrapper:

```
Module 1
 (function scope)

Module 2
 (function scope)

Module 3
 (function scope)
```

Each module is **isolated**.

---

# Internal Execution Flow

When Node runs a file:

```
Read file
↓
Wrap inside module function
↓
Compile module
↓
Execute module
↓
Return module.exports
```

---

# Why This Design Is Powerful

The module wrapper enables:

```
Module isolation
Reusable code
Dependency management
Cleaner architecture
```

This is the **foundation of Node.js module system**.

---

# Interview Ready Answer

Node.js wraps every module inside a function called the **module wrapper function** before executing it. The wrapper looks like `(function(exports, require, module, __filename, __dirname) { ... })`. This provides local variables like `exports`, `require`, `module`, `__filename`, and `__dirname`, ensures module-level scope, and prevents global namespace pollution.

---

# 20. How do you use ES Modules in Node.js?

## Concepts

Ways:

1. Add `"type": "module"` in package.json
2. Use .mjs extension

---

## Code Example

```js
// math.js
export function add(a, b) {
  return a + b;
}
```

```js
// app.js
import { add } from "./math.js";
console.log(add(2, 3));
```

---

## Interview Ready Answer

ES Modules in Node.js can be enabled by adding `"type": "module"` in package.json or using the .mjs extension. They use import and export syntax instead of require and module.exports. ES Modules support static analysis and are the standardized module system in JavaScript.
Source:

---

# 21. What is the difference between CommonJS and ES Modules?

## Concepts

### CommonJS (CJS)

- Default module system in Node.js (older)
- Uses:
  - `require()`
  - `module.exports`

- Loaded synchronously
- Dynamic imports possible
- Runtime resolution

---

### ES Modules (ESM)

- Standard JavaScript module system
- Uses:
  - `import`
  - `export`

- Static analysis
- Loaded asynchronously
- Supports tree-shaking

---

### Key Differences

| Feature         | CommonJS       | ES Modules   |
| --------------- | -------------- | ------------ |
| Syntax          | require        | import       |
| Export          | module.exports | export       |
| Loading         | Synchronous    | Asynchronous |
| Static Analysis | No             | Yes          |
| Top-level await | No             | Yes          |

---

## Code Examples

### CommonJS

```js
// math.js
module.exports.add = (a, b) => a + b;

// app.js
const math = require("./math");
console.log(math.add(2, 3));
```

---

### ES Module

```js
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
console.log(add(2, 3));
```

---

## Interview Ready Answer

CommonJS is the traditional Node.js module system using require() and module.exports, loaded synchronously at runtime. ES Modules use standardized import/export syntax, support static analysis, and allow features like tree-shaking and top-level await. ES Modules are the modern recommended approach.

---

# 22. How do you enable ES Modules in a Node.js project?

## Concepts

Two ways:

1. Add in package.json:

```json
{
  "type": "module"
}
```

2. Use `.mjs` extension

---

### Important Rules

- Must use full file extensions
- Cannot use require()
- Use import/export

---

## Code Example

package.json:

```json
{
  "type": "module"
}
```

app.js:

```js
import fs from "fs";
console.log("ES Module enabled");
```

---

## Interview Ready Answer

ES Modules can be enabled by setting `"type": "module"` in package.json or by using the .mjs file extension. Once enabled, import/export syntax must be used instead of require/module.exports.

---

# 23. What are the challenges of mixing CommonJS and ES Modules?

## Concepts

### Problems

1. Default export differences
2. require() not available in ESM
3. import not supported in CJS
4. Interoperability complexity

---

### Example Problem

CJS exporting:

```js
module.exports = function () {};
```

ESM importing:

```js
import fn from "./file.js"; // May behave differently
```

Sometimes need:

```js
import pkg from "./file.js";
pkg.default();
```

---

## Interview Ready Answer

Mixing CommonJS and ES Modules can lead to interoperability issues, especially around default exports and dynamic imports. CommonJS does not support static import syntax, and ES Modules cannot directly use require(). Proper configuration and understanding of export formats are required.

---

# 24. What is NPM and what is its purpose?

## Concepts

NPM = Node Package Manager

Functions:

1. Install packages
2. Manage dependencies
3. Version control
4. Run scripts
5. Publish packages

---

### Components

- npm CLI
- npm registry
- package.json

---

## Code Example

Install package:

```bash
npm install express
```

Initialize project:

```bash
npm init -y
```

---

## Interview Ready Answer

NPM is the default package manager for Node.js. It is used to install, manage, and publish packages. It maintains dependency versions through package.json and connects to the npm registry to download packages.

---

# 25. Explain the package.json file structure.

## Concepts

package.json contains:

1. name
2. version
3. description
4. main
5. scripts
6. dependencies
7. devDependencies
8. type

---

## Example

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

---

## Interview Ready Answer

package.json is the metadata file for a Node.js project. It defines project information, dependencies, scripts, module type, and versioning details. It ensures consistent dependency management and project configuration.

---

# 26. What is the difference between dependencies and devDependencies?

## Concepts

dependencies:

- Required in production
- Installed with npm install

devDependencies:

- Needed only during development
- Testing tools
- Build tools

---

## Example

```json
{
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

---

## Interview Ready Answer

dependencies are packages required for the application to run in production, while devDependencies are only required during development, such as testing or build tools. Production deployments typically exclude devDependencies.

---

# 27. Explain semantic versioning (semver) in NPM.

## Concepts

Format:

MAJOR.MINOR.PATCH

Example:

1.2.3

- MAJOR: Breaking changes
- MINOR: Backward-compatible features
- PATCH: Bug fixes

---

### Version Prefixes

^1.2.3 → compatible minor updates
~1.2.3 → only patch updates
1.2.3 → exact version

---

## Interview Ready Answer

Semantic versioning follows the format MAJOR.MINOR.PATCH. Major updates introduce breaking changes, minor updates add backward-compatible features, and patch updates fix bugs. Prefixes like ^ and ~ control how updates are applied during installation.

---

# 28. How do you install, update, and delete dependencies?

## Concepts

Install:

```bash
npm install express
```

Install dev:

```bash
npm install nodemon --save-dev
```

Update:

```bash
npm update
```

Uninstall:

```bash
npm uninstall express
```

---

## Interview Ready Answer

Dependencies can be installed using npm install, updated using npm update, and removed using npm uninstall. Dev dependencies are installed with the --save-dev flag.

---

# 29. What is the node_modules folder and how does it work?

## Concepts

node_modules:

- Contains installed packages
- Contains nested dependencies
- Created by npm install

Structure:

node_modules
├── express
├── lodash

---

### Important Points

- Can be very large
- Should not be committed to Git
- Recreated using package.json

---

## Interview Ready Answer

The node_modules folder contains all installed dependencies and their sub-dependencies. It is automatically generated by npm install and should not be committed to version control. It ensures all required packages are available for the application.

---

# 30. What is package-lock.json and why is it important?

## Concepts

package-lock.json:

- Auto-generated file
- Locks exact dependency versions
- Ensures consistent installs

---

### Why Important?

Without lock file:

- Different versions may install
- Environment inconsistency

With lock file:

- Deterministic builds
- Same dependency tree

---

## Interview Ready Answer

package-lock.json records the exact versions of all installed dependencies and their sub-dependencies. It ensures consistent installations across different environments by locking the dependency tree, preventing unexpected version changes.

# 31. Differentiate between local and global package installation.

## Concepts

### Local Installation

Installed using:

```bash
npm install package-name
```

- Installed inside `node_modules` folder
- Saved in `package.json` (dependencies or devDependencies)
- Used only within that project
- Accessed via `require()` or `import`

Example:

```bash
npm install express
```

Used inside project:

```js
const express = require("express");
```

---

### Global Installation

Installed using:

```bash
npm install -g package-name
```

- Installed globally on system
- Not saved in project `package.json`
- Available as CLI tool in terminal
- Used across all projects

Example:

```bash
npm install -g nodemon
```

Run in terminal:

```bash
nodemon app.js
```

---

### Key Differences

| Feature       | Local Installation      | Global Installation   |
| ------------- | ----------------------- | --------------------- |
| Location      | node_modules in project | System-wide directory |
| Saved in JSON | Yes                     | No                    |
| Usage         | Inside project code     | CLI tools             |
| Scope         | Project-specific        | Available everywhere  |
| Example       | express                 | nodemon               |

---

## Interview Ready Answer

Local packages are installed inside a project’s node_modules folder and are saved in package.json. They are used as dependencies within that specific project. Global packages are installed system-wide and are mainly used as command-line tools available across all projects. For example, express is typically installed locally, while nodemon is often installed globally for development convenience.

---

# 32. What are npm scripts and how do you use them?

## Concepts

npm scripts are custom command shortcuts defined inside `package.json`.

They allow you to:

- Run application
- Start server
- Build project
- Run tests
- Automate tasks

---

### Where Defined?

Inside `package.json` under the `scripts` section.

Example:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  }
}
```

---

### How to Run Scripts

Use:

```bash
npm run script-name
```

Examples:

```bash
npm run dev
npm run test
```

Special case:

```bash
npm start
```

(`start` can run without `run` keyword)

---

### Why npm Scripts Are Useful

- Standardized commands
- Avoid long CLI commands
- Improve team consistency
- Used in CI/CD pipelines

---

## Code Example

package.json:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```

Run:

```bash
npm run dev
```

---

## Interview Ready Answer

npm scripts are custom command aliases defined inside the scripts section of package.json. They allow developers to automate tasks such as starting servers, running tests, building applications, and more. Scripts are executed using npm run script-name. They improve project consistency and simplify development workflows.

# 33. How do you read and write files in Node.js?

## Concepts

In Node.js, file operations are handled using the **`fs` (File System) module**.

There are two main ways to read/write files:

1. Asynchronous (Non-blocking) – Recommended
2. Synchronous (Blocking)

Common Methods:

- `fs.readFile()`
- `fs.readFileSync()`
- `fs.writeFile()`
- `fs.writeFileSync()`
- `fs.appendFile()`

Node prefers asynchronous methods for scalability.

---

### Reading a File (Asynchronous)

```js
const fs = require("fs");

// Read file asynchronously
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("File Content:");
  console.log(data);
});

console.log("Reading started...");
```

Explanation:

- File read delegated to libuv thread pool
- Main thread continues execution
- Callback executes after file read completes

---

### Writing a File (Asynchronous)

```js
const fs = require("fs");

// Write file asynchronously
fs.writeFile("data.txt", "Hello Node.js", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }

  console.log("File written successfully");
});
```

---

### Using Promises (Modern Way)

```js
const fs = require("fs").promises;

async function fileOperations() {
  try {
    await fs.writeFile("data.txt", "Async/Await example");
    const content = await fs.readFile("data.txt", "utf8");
    console.log(content);
  } catch (err) {
    console.error(err);
  }
}

fileOperations();
```

---

## Interview Ready Answer

In Node.js, file operations are handled using the built-in `fs` module. Files can be read and written using both synchronous and asynchronous methods. Asynchronous methods like `fs.readFile()` and `fs.writeFile()` are preferred because they do not block the event loop. Node delegates file operations to libuv’s thread pool, and once completed, the callback is executed. Modern applications often use the Promise-based API with async/await for cleaner and more readable code.

---

# 34. Differentiate between synchronous and asynchronous file operations.

## Concepts

### Synchronous Operations

- Block the event loop
- Execution stops until operation completes
- Use methods ending with `Sync`

Example:

```js
const fs = require("fs");

const data = fs.readFileSync("data.txt", "utf8");
console.log(data);
console.log("Done");
```

Here:

- Program waits until file is read
- No other code runs during that time

---

### Asynchronous Operations

- Non-blocking
- Delegated to thread pool
- Callback executed later

Example:

```js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Done");
```

Execution Order:

Done
(File content printed later)

---

### Comparison Table

| Feature     | Synchronous      | Asynchronous    |
| ----------- | ---------------- | --------------- |
| Blocking    | Yes              | No              |
| Performance | Poor for scaling | Scalable        |
| Use Case    | Small scripts    | Production apps |
| Event Loop  | Blocked          | Not blocked     |

---

## Interview Ready Answer

Synchronous file operations block the event loop until completion, which can reduce scalability and performance. Asynchronous file operations delegate work to the thread pool and execute a callback once complete, allowing the event loop to continue processing other tasks. In production systems, asynchronous operations are preferred for better scalability and performance.

---

# 35. What are streams in Node.js? Explain different types of streams.

## Concepts

Streams are objects that allow reading or writing data in chunks instead of loading the entire file into memory.

Why important?

- Efficient for large files
- Memory optimized
- Used for real-time processing

---

### Types of Streams

1. Readable Stream
   → Used to read data

2. Writable Stream
   → Used to write data

3. Duplex Stream
   → Read and write both

4. Transform Stream
   → Modify data while passing

---

### Example: Readable Stream

```js
const fs = require("fs");

const readableStream = fs.createReadStream("large.txt", "utf8");

readableStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});

readableStream.on("end", () => {
  console.log("Reading complete");
});
```

Explanation:

- File read in chunks
- Each chunk triggers "data" event
- No full file loaded in memory

---

### Example: Writable Stream

```js
const fs = require("fs");

const writableStream = fs.createWriteStream("output.txt");

writableStream.write("Hello ");
writableStream.write("World");
writableStream.end();
```

---

## Interview Ready Answer

Streams in Node.js are objects used to handle data in chunks rather than loading entire data into memory. They are useful for handling large files and real-time data processing. There are four types of streams: Readable, Writable, Duplex, and Transform. Streams improve memory efficiency and performance, especially for large datasets.

---

# 36. How do you handle large files efficiently in Node.js?

## Concepts

Large files should NOT be handled using:

```js
fs.readFile();
```

Because:

- Loads entire file into memory
- High memory usage
- Risk of crash for very large files

Correct Approach:

Use Streams

---

### Efficient Handling with Streams

```js
const fs = require("fs");

const readStream = fs.createReadStream("large.txt", "utf8");
const writeStream = fs.createWriteStream("copy.txt");

readStream.pipe(writeStream);

readStream.on("end", () => {
  console.log("File copied efficiently");
});
```

---

### Why Streams Are Better

- Chunk-based processing
- Low memory footprint
- Backpressure handling
- Suitable for large video/files

---

### Real-World Use Cases

- Video streaming
- File uploads/downloads
- Log processing
- Data transformation pipelines

---

## Interview Ready Answer

Large files should be handled using streams instead of loading them entirely into memory. The `createReadStream()` and `createWriteStream()` methods allow processing data in chunks. This improves memory efficiency and performance, and supports backpressure handling. Streams are ideal for large files, media streaming, and real-time data processing.

---

# 37. What is piping in Node.js?

## Concepts

Piping connects:

Readable Stream → Writable Stream

Data flows automatically from source to destination.

Without pipe:

- Manually handle "data" event
- Write chunk manually

With pipe:

- Automatic data flow
- Handles backpressure internally

---

### Example Without Pipe

```js
const fs = require("fs");

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});
```

---

### Example With Pipe

```js
const fs = require("fs");

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);
```

---

### Advantages of Pipe

- Cleaner code
- Automatic flow control
- Better performance
- Handles backpressure

---

## Interview Ready Answer

Piping in Node.js is a mechanism to connect a readable stream directly to a writable stream using the `pipe()` method. It allows automatic data transfer between streams and internally manages backpressure. Piping simplifies stream handling and is commonly used for file copying and data transformation.

---

# 38. How do you watch for file changes using the fs module?

## Concepts

Node.js provides:

- `fs.watch()`
- `fs.watchFile()`

Used to monitor file or directory changes.

Common Use Cases:

- Auto reload
- Logging changes
- Development tools (like nodemon)

---

### Using fs.watch()

```js
const fs = require("fs");

fs.watch("data.txt", (eventType, filename) => {
  console.log(`Event: ${eventType}`);
  console.log(`File changed: ${filename}`);
});
```

Explanation:

- `eventType` → "rename" or "change"
- Triggered when file is modified
- Non-blocking

---

### Using fs.watchFile()

```js
const fs = require("fs");

fs.watchFile("data.txt", (curr, prev) => {
  console.log("File modified");
  console.log("Previous modified time:", prev.mtime);
  console.log("Current modified time:", curr.mtime);
});
```

Difference:

- `watch()` → Event-based (more efficient)
- `watchFile()` → Polling-based

---

## Interview Ready Answer

File changes can be monitored using `fs.watch()` or `fs.watchFile()`. `fs.watch()` uses the underlying OS file system events and is more efficient, while `fs.watchFile()` uses polling. These methods are commonly used in development tools for detecting file updates and triggering actions like auto-restarts.

---

# 39. How do you create an HTTP server in Node.js?

## Concepts

Node.js provides the built-in `http` module.

Steps:

1. Import http module
2. Create server using `createServer()`
3. Handle request & response
4. Listen on a port

---

## Code Example

```js
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello from Node.js Server");
  res.end();
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Explanation:

- `req` → Incoming request object
- `res` → Response object
- `writeHead()` → Set status & headers
- `listen()` → Start server

---

## Interview Ready Answer

An HTTP server in Node.js is created using the built-in `http` module. The `createServer()` method registers a request handler callback that receives request and response objects. The server is started using `listen()` on a specific port. This allows Node.js to handle incoming HTTP requests.

---

# 40. Explain the HTTP request and response objects.

## Concepts

When a client sends a request:

- Node provides:
  - `req` → IncomingMessage object
  - `res` → ServerResponse object

---

### Request Object (`req`)

Contains:

- `req.method` → HTTP method
- `req.url` → Requested URL
- `req.headers` → Request headers
- `req.on("data")` → Receive body data

Example:

```js
const http = require("http");

http
  .createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Headers:", req.headers);

    res.end("Check console");
  })
  .listen(3000);
```

---

### Response Object (`res`)

Used to send response.

Common methods:

- `res.write()`
- `res.end()`
- `res.writeHead()`
- `res.setHeader()`

Example:

```js
res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify({ message: "Success" }));
```

---

## Interview Ready Answer

In Node.js, the request object (`req`) represents the incoming HTTP request and provides access to properties like method, URL, headers, and body data. The response object (`res`) is used to send data back to the client using methods like `write()`, `setHeader()`, and `end()`. Together, they allow handling and responding to HTTP requests.

---

# 41. How do you handle different HTTP methods (GET, POST, PUT, DELETE)?

## Concepts

You check:

```js
req.method;
```

Common Methods:

- GET → Retrieve data
- POST → Create data
- PUT → Update data
- DELETE → Remove data

---

## Code Example

```js
const http = require("http");

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      res.end("GET request received");
    } else if (req.method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        res.end("POST data received: " + body);
      });
    } else if (req.method === "PUT") {
      res.end("PUT request received");
    } else if (req.method === "DELETE") {
      res.end("DELETE request received");
    } else {
      res.writeHead(405);
      res.end("Method Not Allowed");
    }
  })
  .listen(3000);
```

---

## Interview Ready Answer

Different HTTP methods are handled by checking `req.method` inside the request handler. Based on the method (GET, POST, PUT, DELETE), different logic is executed. For POST requests, the request body is received through data events. This allows implementing RESTful APIs using the core HTTP module.

---

# 42. What is the difference between http and https modules?

## Concepts

Both modules are used to create servers.

### http Module

- Unencrypted communication
- Uses port 80 by default
- Less secure

### https Module

- Encrypted communication (SSL/TLS)
- Uses port 443 by default
- Requires certificate

---

## Code Example (HTTPS)

```js
const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

https
  .createServer(options, (req, res) => {
    res.end("Secure Server");
  })
  .listen(443);
```

---

### Key Differences

| Feature     | http       | https     |
| ----------- | ---------- | --------- |
| Encryption  | No         | Yes (SSL) |
| Port        | 80         | 443       |
| Security    | Low        | High      |
| Certificate | Not needed | Required  |

---

## Interview Ready Answer

The `http` module creates servers that communicate over unencrypted connections, typically on port 80. The `https` module provides secure communication using SSL/TLS encryption and runs on port 443. HTTPS requires a certificate and is used for secure data transmission in production applications.

---

# 43. How do you make HTTP requests from Node.js?

## Concepts

Node.js can make HTTP requests using:

1. Built-in `http` module
2. Built-in `https` module
3. Third-party libraries:
   - axios
   - node-fetch
   - got

---

### When to Use What?

- `http` → Basic requests
- `https` → Secure requests
- axios → Cleaner API, production use

---

## Code Examples

### Example 1: Using https module

```js
const https = require("https");

https.get("https://api.github.com", (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log(JSON.parse(data));
  });
});
```

Explanation:

- `https.get()` sends GET request
- `data` event collects chunks
- `end` event fires after full response

---

### Example 2: Using axios

```js
const axios = require("axios");

axios
  .get("https://api.github.com")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

Explanation:

- axios returns Promise
- Cleaner syntax
- Automatically parses JSON

---

## Interview Ready Answer

HTTP requests in Node.js can be made using built-in `http` or `https` modules, or third-party libraries like axios. The built-in modules require manual handling of response streams, while libraries like axios provide a simpler Promise-based API and automatic JSON parsing.

---

# 44. What is the purpose of the `path` module?

## Concepts

The `path` module:

- Handles file and directory paths
- Provides cross-platform compatibility
- Avoids manual string concatenation

---

### Why Needed?

Windows uses:

```
C:\folder\file.txt
```

Linux uses:

```
/folder/file.txt
```

`path` ensures correct formatting across OS.

---

## Code Example

```js
const path = require("path");

const filePath = path.join(__dirname, "folder", "file.txt");

console.log(filePath);
```

Explanation:

- `path.join()` combines segments
- Automatically adds correct separators

---

## Interview Ready Answer

The `path` module is used to work with file and directory paths in a cross-platform manner. It provides utilities like `join()`, `resolve()`, and `basename()` to safely manipulate paths without worrying about OS-specific separators.

---

# 45. Differentiate between `path.join()`, `path.resolve()`, and `path.normalize()`.

## Concepts

### 1. path.join()

- Combines multiple path segments
- Normalizes result
- Relative paths preserved

### 2. path.resolve()

- Resolves to absolute path
- Starts from right to left
- Stops at first absolute path

### 3. path.normalize()

- Cleans up path
- Removes `..` and duplicate slashes

---

## Comparison Table

| Method      | Returns Absolute? | Purpose       |
| ----------- | ----------------- | ------------- |
| join()      | No                | Combine paths |
| resolve()   | Yes               | Absolute path |
| normalize() | No                | Clean path    |

---

## Code Example

```js
const path = require("path");

console.log(path.join("folder", "file.txt"));
console.log(path.resolve("folder", "file.txt"));
console.log(path.normalize("/test//folder/../file.txt"));
```

---

## Interview Ready Answer

`path.join()` combines path segments, `path.resolve()` converts them into an absolute path, and `path.normalize()` cleans up redundant separators and relative references like `..`. Resolve always returns an absolute path, while join and normalize may return relative paths.

---

# 46. How do you extract filename, extension, or directory from a path?

## Concepts

Path module provides:

- `basename()` → filename
- `extname()` → extension
- `dirname()` → directory

---

## Code Example

```js
const path = require("path");

const filePath = "/home/user/file.txt";

console.log(path.basename(filePath));
console.log(path.extname(filePath));
console.log(path.dirname(filePath));
```

Output:

```
file.txt
.txt
/home/user
```

---

## Interview Ready Answer

You can extract components of a path using the `path` module. `basename()` returns the file name, `extname()` returns the extension, and `dirname()` returns the directory path. These methods ensure consistent behavior across different operating systems.

---

# 47. What information can you get from the `os` module?

## Concepts

The `os` module provides system-level information:

1. CPU information
2. Memory usage
3. Hostname
4. Platform
5. Uptime
6. Network interfaces

---

### Common Methods

- `os.cpus()`
- `os.totalmem()`
- `os.freemem()`
- `os.hostname()`
- `os.platform()`
- `os.uptime()`

---

## Code Example

```js
const os = require("os");

console.log("Platform:", os.platform());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
```

---

## Interview Ready Answer

The `os` module provides information about the operating system, including CPU details, memory usage, hostname, platform, uptime, and network interfaces. It is useful for monitoring system health and environment-specific configurations in Node.js applications.

---

# 48. How do you check system information using the os module?

## Concepts

Node.js provides the built-in `os` module to retrieve system-level information.

Common methods:

- `os.platform()`
- `os.arch()`
- `os.cpus()`
- `os.totalmem()`
- `os.freemem()`
- `os.uptime()`
- `os.hostname()`

Used for:

- Monitoring
- Debugging
- Environment-specific logic
- Performance tracking

---

### Code Example

```js
const os = require("os");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Info:", os.cpus().length);
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("System Uptime:", os.uptime());
console.log("Hostname:", os.hostname());
```

---

## Interview Ready Answer

The `os` module in Node.js provides information about the operating system such as platform, CPU architecture, memory usage, uptime, and hostname. It is useful for monitoring system resources and writing environment-aware applications. Methods like `os.totalmem()`, `os.cpus()`, and `os.platform()` help retrieve system-level details.

---

# 49. What is the EventEmitter class?

## Concepts

`EventEmitter` is a core class in Node.js from the `events` module.

It enables:

- Event-driven programming
- Custom event creation
- Listener registration

Many Node core modules are built on EventEmitter.

Key Methods:

- `on()` → register listener
- `emit()` → trigger event
- `once()` → execute once
- `removeListener()` → remove listener

---

### Code Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

// Register event listener
emitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

// Emit event
emitter.emit("greet", "Tanish");
```

Output:

Hello Tanish

---

## Interview Ready Answer

The EventEmitter class in Node.js enables event-driven programming. It allows objects to emit named events and register listeners for those events. Core modules like streams and HTTP are built using EventEmitter. Methods like `on()`, `emit()`, and `once()` are used to manage events.

---

# 50. How do you create custom events?

## Concepts

Custom events are created using:

1. Create EventEmitter instance
2. Register listener
3. Emit event

Flow:

Register → Emit → Listener Executes

---

### Code Example

```js
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Register custom event
myEmitter.on("login", (user) => {
  console.log(`${user} logged in`);
});

// Emit custom event
myEmitter.emit("login", "Tanish");
```

---

## Interview Ready Answer

Custom events in Node.js are created using the EventEmitter class. You create an instance, register listeners using `on()`, and trigger events using `emit()`. This enables modular, event-driven application design.

---

# 51. Differentiate between `on()`, `once()`, and `emit()` methods.

## Concepts

### `on()`

- Registers event listener
- Executes every time event is emitted

### `once()`

- Executes only first time
- Listener removed automatically after execution

### `emit()`

- Triggers the event
- Calls all registered listeners

---

### Code Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("event", () => {
  console.log("on triggered");
});

emitter.once("event", () => {
  console.log("once triggered");
});

emitter.emit("event");
emitter.emit("event");
```

Output:

on triggered
once triggered
on triggered

---

## Interview Ready Answer

`on()` registers a persistent event listener that executes every time the event is emitted. `once()` registers a listener that runs only once and is automatically removed after execution. `emit()` triggers the event and executes all associated listeners.

---

# 52. What is event-driven programming in Node.js?

## Concepts

Event-driven programming is a paradigm where:

- Execution flow is determined by events
- Events trigger callbacks
- System reacts to external actions

In Node.js:

- Built on EventEmitter
- Used heavily in streams, HTTP, and async I/O

Example Events:

- HTTP request received
- File read completed
- Timer expired

---

### Code Example

```js
const fs = require("fs");

fs.readFile("data.txt", () => {
  console.log("File Read Completed");
});
```

Here:

- File read completion triggers callback
- Event loop handles event

---

## Interview Ready Answer

Event-driven programming in Node.js is a model where the application flow is controlled by events and their associated callbacks. Node.js uses EventEmitter and the event loop to handle asynchronous operations efficiently. This model allows high scalability and non-blocking behavior.

---

# 53. What is the `process` object in Node.js?

## Concepts

`process` is a global object that provides information about the current Node.js process.

Common Uses:

- Environment variables
- Command-line arguments
- Exit codes
- Process events
- Memory usage

Important Properties:

- `process.env`
- `process.argv`
- `process.exit()`
- `process.pid`
- `process.cwd()`

---

### Code Example

```js
console.log("Process ID:", process.pid);
console.log("Current Working Directory:", process.cwd());
console.log("Environment Variables:", process.env.NODE_ENV);
```

---

## Interview Ready Answer

The `process` object is a global object in Node.js that provides information and control over the current running process. It allows access to environment variables, command-line arguments, process ID, working directory, and exit handling.

---

# 54. How do you access environment variables?

## Concepts

Environment variables are accessed using:

```
process.env
```

Common practice:

Use `.env` file with dotenv package.

---

### Code Example

Using environment variable directly:

```js
console.log(process.env.PORT);
```

Using dotenv:

```js
require("dotenv").config();

console.log(process.env.PORT);
```

`.env` file:

```
PORT=5000
```

---

## Interview Ready Answer

Environment variables in Node.js are accessed using `process.env`. They are commonly used to store configuration such as database URLs, API keys, and ports. In development, the dotenv package is often used to load variables from a `.env` file into `process.env`.

---

# 55. What is `process.nextTick()` and how does it differ from `setImmediate()`?

## Concepts

Both are used to schedule callbacks.

### `process.nextTick()`

- Executes after current operation
- Runs before event loop continues
- Microtask queue

### `setImmediate()`

- Executes in the check phase
- After I/O callbacks
- Macrotask queue

Execution Order:

1. Synchronous code
2. process.nextTick()
3. Promise callbacks
4. setImmediate()

---

### Code Example

```js
console.log("Start");

setImmediate(() => {
  console.log("setImmediate");
});

process.nextTick(() => {
  console.log("nextTick");
});

console.log("End");
```

Output:

Start
End
nextTick
setImmediate

---

## Interview Ready Answer

`process.nextTick()` schedules a callback to run immediately after the current operation completes, before the event loop continues. It is part of the microtask queue. `setImmediate()` schedules a callback in the check phase of the event loop, after I/O events. Therefore, `process.nextTick()` executes before `setImmediate()`.

---

# 56. How do you handle process signals?

## Concepts

Process signals are system-level notifications sent to a Node.js process.

Common Signals:

- `SIGINT` → Interrupt signal (Ctrl + C)
- `SIGTERM` → Termination signal
- `SIGHUP` → Terminal closed
- `SIGUSR1`, `SIGUSR2` → Custom signals

Used for:

- Graceful shutdown
- Cleaning resources
- Closing database connections
- Stopping servers safely

Node.js listens to signals using:

```js
process.on("SIGNAL_NAME", callback);
```

---

### Example: Handling SIGINT (Ctrl + C)

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Server Running");
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});

// Handle Ctrl + C
process.on("SIGINT", () => {
  console.log("SIGINT received. Shutting down gracefully...");

  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});
```

Explanation:

- User presses Ctrl + C
- `SIGINT` signal received
- Server closed properly
- Process exits safely

---

### Graceful Shutdown Best Practice

In production:

- Close HTTP server
- Close DB connections
- Clear timers
- Flush logs
- Then exit process

---

## Interview Ready Answer

Process signals are OS-level notifications sent to a Node.js process. They can be handled using `process.on("SIGNAL", callback)`. Common signals include `SIGINT` and `SIGTERM`. These are typically used for graceful shutdown, where the server stops accepting new requests, closes database connections, and then exits cleanly.

---

# 57. What is `process.argv` and how do you use it?

## Concepts

`process.argv` is an array containing command-line arguments passed to a Node.js application.

Structure:

```
[
  path_to_node,
  path_to_script,
  argument1,
  argument2,
  ...
]
```

Example Command:

```bash
node app.js hello 123
```

`process.argv` becomes:

```js
["/usr/local/bin/node", "/project/app.js", "hello", "123"];
```

---

### Code Example

```js
// app.js
console.log("All arguments:", process.argv);

const name = process.argv[2];
console.log("Hello", name);
```

Run:

```bash
node app.js Tanish
```

Output:

Hello Tanish

---

### Real Use Cases

- CLI tools
- Passing environment configs
- Script automation
- Custom build tools

---

## Interview Ready Answer

`process.argv` is an array that contains command-line arguments passed to a Node.js application. The first element is the Node executable path, the second is the script path, and the remaining elements are user-provided arguments. It is commonly used for building CLI tools and passing runtime parameters to applications.

---

# 12. Buffer & Streams

---

# 58. What is a Buffer in Node.js and when would you use it?

## Concepts

### What is a Buffer?

A Buffer in Node.js is a raw binary data container.

- Used to handle:
  - Binary data
  - File data
  - Network packets
  - Streams

Important:

JavaScript does not handle binary data directly.

Node.js introduced Buffer to deal with:

- TCP streams
- File system data
- HTTP responses

---

### Why Buffer Exists

When Node receives data:

- It comes as raw bytes
- Not as JavaScript string
- Buffer stores those bytes

Example situations:

- Reading image files
- Receiving file upload
- Streaming video
- Working with crypto hashes

---

### Creating a Buffer

```js
// Create buffer from string
const buffer = Buffer.from("Hello");

console.log(buffer);
```

Output:

```
<Buffer 48 65 6c 6c 6f>
```

Explanation:

- "H" → 48
- "e" → 65
- These are hexadecimal representations

---

### Accessing Buffer Data

```js
const buffer = Buffer.from("Node");

console.log(buffer[0]); // ASCII code
console.log(buffer.toString()); // Convert back to string
```

---

## When Would You Use Buffer?

1. File handling
2. Network communication
3. Streaming
4. Cryptography
5. Binary protocol parsing

Example: Reading file as Buffer

```js
const fs = require("fs");

fs.readFile("image.png", (err, data) => {
  console.log(data); // Buffer
});
```

---

## Interview Ready Answer

A Buffer in Node.js is a global class used to handle raw binary data. Since JavaScript does not natively support binary data, Node introduced Buffer to work with data coming from file systems, network sockets, and streams. It stores fixed-length raw bytes and is commonly used in file handling, streaming, and cryptographic operations.

---

# 59. How do you convert between buffers and strings?

## Concepts

Conversion is very common in Node.js.

### String → Buffer

```js
const buffer = Buffer.from("Hello World", "utf8");
```

Encoding types:

- utf8 (default)
- ascii
- base64
- hex

---

### Buffer → String

```js
const buffer = Buffer.from("Hello");

const str = buffer.toString("utf8");
console.log(str);
```

---

### Example with Base64

```js
const buffer = Buffer.from("NodeJS");

const base64 = buffer.toString("base64");
console.log(base64);

const original = Buffer.from(base64, "base64").toString("utf8");
console.log(original);
```

---

## Interview Ready Answer

You can convert a string to a buffer using `Buffer.from(string, encoding)`. To convert a buffer back to a string, use `buffer.toString(encoding)`. Node supports multiple encodings such as utf8, ascii, hex, and base64. This conversion is common when handling file data, HTTP payloads, and encoded content.

---

# 60. Explain the different types of streams: Readable, Writable, Duplex, Transform.

## Concepts

Streams process data in chunks.

Instead of:

- Loading entire file into memory

They:

- Process piece by piece

---

## 1. Readable Stream

Used to read data.

Examples:

- fs.createReadStream()
- HTTP request

```js
const fs = require("fs");

const readStream = fs.createReadStream("large.txt");

readStream.on("data", (chunk) => {
  console.log("Chunk received:", chunk.length);
});
```

---

## 2. Writable Stream

Used to write data.

Examples:

- fs.createWriteStream()
- HTTP response

```js
const fs = require("fs");

const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello");
writeStream.end();
```

---

## 3. Duplex Stream

Can read and write.

Example:

- TCP socket

```js
const { Duplex } = require("stream");

const duplex = new Duplex({
  read(size) {},
  write(chunk, encoding, callback) {
    console.log("Writing:", chunk.toString());
    callback();
  },
});
```

---

## 4. Transform Stream

Special type of Duplex.

- Modifies data while passing through

Example:

- zlib compression
- Crypto hashing

```js
const { Transform } = require("stream");

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});
```

---

### Summary Table

| Type      | Read | Write | Modify Data |
| --------- | ---- | ----- | ----------- |
| Readable  | Yes  | No    | No          |
| Writable  | No   | Yes   | No          |
| Duplex    | Yes  | Yes   | No          |
| Transform | Yes  | Yes   | Yes         |

---

## Interview Ready Answer

Node.js streams allow processing data in chunks to improve memory efficiency. There are four types: Readable streams for reading data, Writable streams for writing data, Duplex streams that support both reading and writing, and Transform streams that modify data while passing it through. Streams are widely used in file processing, networking, compression, and real-time data handling.

---

# 61. How do you handle backpressure in streams?

## Concepts

Backpressure happens when:

Writable stream is slower than Readable stream.

Problem:

- Memory overflow
- Application crash

---

### How Node Handles It

Using:

- `stream.pipe()`
- `write()` return value
- `drain` event

---

### Example Without Handling

```js
readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});
```

Problem:

- No control if write is slow

---

### Correct Way (Using pipe)

```js
readStream.pipe(writeStream);
```

Why?

- Automatically pauses readable
- Resumes when writable ready
- Built-in flow control

---

### Manual Backpressure Handling

```js
readStream.on("data", (chunk) => {
  const canWrite = writeStream.write(chunk);

  if (!canWrite) {
    readStream.pause();
  }
});

writeStream.on("drain", () => {
  readStream.resume();
});
```

---

## Interview Ready Answer

Backpressure occurs when a writable stream cannot process data as fast as a readable stream produces it. Node.js handles backpressure automatically when using `pipe()`, which manages flow control internally. When handling manually, the return value of `write()` should be checked, and the readable stream should be paused until the `drain` event is emitted.

---

# 62. What is object mode in streams?

## Concepts

By default:

Streams handle:

- Buffer
- String

Object mode allows:

- JavaScript objects
- Not just binary data

---

### Enabling Object Mode

```js
const { Readable } = require("stream");

const readable = new Readable({
  objectMode: true,
  read() {
    this.push({ name: "Tanish" });
    this.push(null);
  },
});

readable.on("data", (obj) => {
  console.log(obj);
});
```

---

### Why Use Object Mode?

Useful for:

- Processing database rows
- Working with JSON objects
- Data transformation pipelines
- ETL systems

---

### Difference

Normal mode:

- Processes bytes

Object mode:

- Processes JavaScript objects

---

## Interview Ready Answer

Object mode in Node.js streams allows the stream to work with JavaScript objects instead of raw binary buffers or strings. By setting `objectMode: true`, the stream can push and receive objects directly. This is useful in data processing pipelines, ETL systems, and when streaming structured data like database records.

---

# 63. How do you hash passwords using the crypto module?

## Concepts

Password hashing is the process of converting a password into a fixed-length string using a **cryptographic hash function**.

Important properties of hashing:

- **One-way function** → cannot reverse the hash to get the password
- **Deterministic** → same input produces same output
- **Fixed length output**
- **Used for secure password storage**

Instead of storing passwords directly in the database, we store **hashed passwords**.

If a database leak happens:

- attacker only sees hashes
- not actual passwords

---

### Hashing vs Encryption

| Feature    | Hashing          | Encryption        |
| ---------- | ---------------- | ----------------- |
| Reversible | No               | Yes               |
| Use case   | Password storage | Data transmission |
| Key needed | No               | Yes               |

---

### Important Security Concept: Salt

Salt = random value added to password before hashing.

Why?

Without salt:

```
password123 → same hash everywhere
```

Attackers can use **rainbow tables**.

With salt:

```
password123 + randomSalt → unique hash
```

Each user gets different hash.

---

## Hashing Password Using crypto

Node.js provides hashing via the **crypto module**.

Common algorithm:

- SHA256
- SHA512

Example:

```js
const crypto = require("crypto");

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

const password = "myPassword123";

const hashed = hashPassword(password);

console.log("Hashed Password:", hashed);
```

Explanation:

1. `createHash()` creates hashing instance
2. `update()` adds data to hash
3. `digest()` returns final hash

Output:

```
a3f5c8a1...
```

---

## Hashing with Salt

```js
const crypto = require("crypto");

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");

  const hash = crypto
    .createHash("sha256")
    .update(password + salt)
    .digest("hex");

  return { salt, hash };
}

const result = hashPassword("mypassword");

console.log(result);
```

Output example:

```
{
  salt: "4c1a3b7f...",
  hash: "a8c72f..."
}
```

Stored in database:

```
password_hash
salt
```

---

## Password Verification

When user logs in:

1. Get stored **salt**
2. Hash entered password with same salt
3. Compare hashes

Example:

```js
function verifyPassword(inputPassword, storedSalt, storedHash) {
  const hash = crypto
    .createHash("sha256")
    .update(inputPassword + storedSalt)
    .digest("hex");

  return hash === storedHash;
}
```

---

## Important Real-World Practice

In production systems we **do NOT use raw crypto hashing for passwords**.

Better algorithms:

- bcrypt
- scrypt
- argon2

Why?

They are **slow hashing algorithms** designed to prevent brute-force attacks.

Example (bcrypt):

```js
const bcrypt = require("bcrypt");

const password = "mypassword";

bcrypt.hash(password, 10).then((hash) => {
  console.log(hash);
});
```

---

## Interview Ready Answer

Password hashing in Node.js can be implemented using the `crypto` module, which provides cryptographic hashing functions like SHA256 or SHA512. Hashing converts a password into a fixed-length irreversible value so that the original password is never stored in the database. Typically, a random salt is added before hashing to prevent rainbow table attacks. During login, the input password is hashed again with the stored salt and compared with the stored hash. In production systems, specialized algorithms like bcrypt, scrypt, or argon2 are preferred because they are designed to resist brute-force attacks.

# 64. What is encryption and decryption in Node.js?

## Concepts

### What is Encryption?

Encryption is the process of converting **plain readable data (plaintext)** into **unreadable data (ciphertext)** using an **encryption algorithm and key**.

Purpose:

- Protect sensitive information
- Prevent unauthorized access
- Secure data transmission

Example data that should be encrypted:

- API keys
- Payment data
- Tokens
- Sensitive user information

---

### What is Decryption?

Decryption is the reverse process of encryption.

It converts **ciphertext → original plaintext** using the **same key (or corresponding key)**.

Flow:

```
Plaintext
   ↓
Encryption + Key
   ↓
Ciphertext
   ↓
Decryption + Key
   ↓
Original Plaintext
```

---

### Encryption vs Hashing

| Feature      | Encryption           | Hashing          |
| ------------ | -------------------- | ---------------- |
| Reversible   | Yes                  | No               |
| Key required | Yes                  | No               |
| Use case     | Secure data transfer | Password storage |
| Example      | AES                  | SHA256           |

---

## Encryption in Node.js (crypto module)

Node.js provides encryption utilities through the **crypto module**.

Common algorithms:

- AES (Advanced Encryption Standard)
- RSA
- ChaCha20

Most commonly used:

**AES-256**

---

## Example: Encrypt Data

```js
const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  return encrypted;
}

const encryptedData = encrypt("Sensitive Data");

console.log("Encrypted:", encryptedData);
```

Explanation:

- `createCipheriv()` creates encryption instance
- `update()` processes data
- `final()` completes encryption

Output example:

```
a6c9b38e8f2d4...
```

---

## Example: Decrypt Data

```js
function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}

const decryptedData = decrypt(encryptedData);

console.log("Decrypted:", decryptedData);
```

Output:

```
Sensitive Data
```

---

## Important Components in Encryption

### Key

Secret value used for encryption/decryption.

Example:

```
256-bit key
```

---

### IV (Initialization Vector)

Random value used to ensure:

- same plaintext produces different ciphertext
- improves security

---

## Real-World Use Cases

Encryption is used for:

- Secure API tokens
- Payment data protection
- Secure messaging
- Database sensitive fields
- HTTPS communication

Example:

```
Browser → HTTPS → Server
```

Data is encrypted using TLS.

---

## Interview Ready Answer

Encryption is the process of converting readable plaintext into unreadable ciphertext using a cryptographic algorithm and a secret key, ensuring that only authorized parties can access the data. Decryption is the reverse process, where ciphertext is converted back into the original plaintext using the same or corresponding key. In Node.js, encryption and decryption can be implemented using the built-in `crypto` module with algorithms such as AES. Encryption is commonly used for securing sensitive data, protecting tokens, and enabling secure communication such as HTTPS.

# 65. How do you generate secure random numbers?

## Concepts

Secure random numbers are required for **cryptographic operations** where predictability must be avoided.

Examples:

- Password reset tokens
- Session IDs
- API keys
- Encryption keys
- CSRF tokens

Using normal JavaScript random generator:

```js
Math.random();
```

is **NOT secure** because it is **predictable**.

Instead, Node.js provides **cryptographically secure random number generators** through the **crypto module**.

---

## Secure Random Numbers in Node.js

Node.js uses the **crypto module**, which relies on the **operating system’s cryptographic random source**.

Methods used:

- `crypto.randomBytes()`
- `crypto.randomInt()`
- `crypto.randomUUID()`

These methods generate **cryptographically strong random values**.

---

## 1. Generating Random Bytes

Most common method.

```js
const crypto = require("crypto");

const randomBytes = crypto.randomBytes(16);

console.log(randomBytes);
```

Output example:

```
<Buffer a3 9f 1b 7c ... >
```

Convert to string:

```js
const token = crypto.randomBytes(16).toString("hex");

console.log(token);
```

Example output:

```
f9a8c7d1b4e6a3c5
```

Used for:

- API tokens
- password reset links
- session IDs

---

## 2. Generating Random Integers

```js
const crypto = require("crypto");

const randomNumber = crypto.randomInt(1, 100);

console.log(randomNumber);
```

Explanation:

- Generates secure random integer
- Range: 1 → 100

---

## 3. Generating UUIDs

Node.js also supports generating secure **UUIDs**.

```js
const crypto = require("crypto");

const id = crypto.randomUUID();

console.log(id);
```

Output example:

```
c1c0e7a2-2f3a-4f6e-b98b-1c7f9c1e4c45
```

Used for:

- user IDs
- resource identifiers
- distributed systems

---

## Example: Generating Password Reset Token

```js
const crypto = require("crypto");

function generateResetToken() {
  return crypto.randomBytes(32).toString("hex");
}

console.log(generateResetToken());
```

Output example:

```
9b8f8c9f7d7a5c2e6a3b...
```

---

## Why crypto.randomBytes() is Secure

Because it uses:

- OS-level entropy
- hardware randomness
- cryptographically secure PRNG

Sources:

- `/dev/urandom` (Linux)
- Windows CryptGenRandom
- OS entropy pool

---

## Interview Ready Answer

Secure random numbers in Node.js are generated using the `crypto` module, which provides cryptographically strong randomness based on the operating system’s entropy source. Methods like `crypto.randomBytes()`, `crypto.randomInt()`, and `crypto.randomUUID()` are commonly used to generate secure tokens, keys, and identifiers. These are preferred over `Math.random()` because they are unpredictable and suitable for security-sensitive operations such as authentication tokens and session IDs.

# 66. What are HMAC and digital signatures?

## Concepts

HMAC and digital signatures are **cryptographic techniques used to verify data integrity and authenticity**.

They ensure that:

- Data has **not been tampered with**
- Data comes from a **trusted source**

---

## What is HMAC?

HMAC stands for:

**Hash-based Message Authentication Code**

It combines:

- A **cryptographic hash function** (SHA256, SHA512, etc.)
- A **secret key**

Purpose:

- Verify message integrity
- Verify sender authenticity

Flow:

```
Message + Secret Key
        ↓
    Hash Function
        ↓
        HMAC
```

Only someone who knows the **secret key** can generate the correct HMAC.

---

## HMAC in Node.js

Node.js provides HMAC functionality using the **crypto module**.

Example:

```js
const crypto = require("crypto");

const secret = "mySecretKey";
const message = "Hello NodeJS";

const hmac = crypto.createHmac("sha256", secret).update(message).digest("hex");

console.log("HMAC:", hmac);
```

Explanation:

- `createHmac()` creates HMAC generator
- `update()` adds data
- `digest()` produces final hash

Output example:

```
HMAC: 9d5a7c2f...
```

---

## Verifying HMAC

To verify:

1. Receiver recomputes HMAC using same key
2. Compares it with received HMAC

Example:

```js
function verifyHmac(message, receivedHmac, secret) {
  const newHmac = crypto
    .createHmac("sha256", secret)
    .update(message)
    .digest("hex");

  return newHmac === receivedHmac;
}
```

---

## Real-World Use Cases of HMAC

Used in:

- API request authentication
- Webhook verification (GitHub, Stripe)
- JWT token signing
- Secure message verification

Example:

```
Stripe Webhook → Server verifies HMAC
```

---

## What are Digital Signatures?

Digital signatures use **public-key cryptography** to verify authenticity.

Unlike HMAC:

- HMAC uses **one shared secret key**
- Digital signatures use **two keys**

Keys:

```
Private Key → used to sign
Public Key → used to verify
```

Flow:

```
Message
   ↓
Private Key signs message
   ↓
Digital Signature
   ↓
Receiver verifies using Public Key
```

This ensures:

- authenticity
- integrity
- non-repudiation

---

## Digital Signature Example in Node.js

```js
const crypto = require("crypto");

// Generate key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

// Sign data
const sign = crypto.createSign("SHA256");
sign.update("Important Data");

const signature = sign.sign(privateKey, "hex");

console.log("Signature:", signature);
```

---

## Verifying Signature

```js
const verify = crypto.createVerify("SHA256");

verify.update("Important Data");

const isValid = verify.verify(publicKey, signature, "hex");

console.log("Valid Signature:", isValid);
```

Output:

```
Valid Signature: true
```

---

## HMAC vs Digital Signature

| Feature   | HMAC              | Digital Signature       |
| --------- | ----------------- | ----------------------- |
| Keys      | Single shared key | Public + Private keys   |
| Algorithm | Hash-based        | Public key cryptography |
| Use case  | API verification  | Secure communication    |
| Example   | JWT signing       | HTTPS certificates      |

---

## Interview Ready Answer

HMAC (Hash-based Message Authentication Code) is a cryptographic technique that combines a secret key with a hash function to generate a message authentication code. It ensures both data integrity and authenticity because only parties with the shared secret key can generate or verify the HMAC. Digital signatures, on the other hand, use asymmetric cryptography with a private key for signing and a public key for verification. They provide stronger guarantees such as authenticity, integrity, and non-repudiation and are commonly used in systems like HTTPS, secure emails, and software signing.

# 67. What is the purpose of the child process module?

## Concepts

The **child_process module** in Node.js allows the application to **create and manage new processes (child processes)** from the main Node.js process.

Purpose:

- Execute system commands
- Run other programs
- Offload CPU-intensive tasks
- Run parallel processes

Node.js is **single-threaded**, so CPU-heavy tasks can block the event loop.

Child processes allow Node.js to **delegate heavy work to separate processes**, preventing the main thread from blocking.

---

## Why Child Processes Are Needed

Node.js is optimized for **I/O operations**, but not ideal for **CPU-intensive tasks**.

Examples of CPU-heavy tasks:

- Image processing
- Video encoding
- Large data processing
- Compression
- Cryptographic calculations

Instead of blocking the event loop:

```id="6r9b0h"
Main Thread → Create Child Process → Execute Task
```

This keeps the server responsive.

---

## Example: Running a System Command

Using the child_process module:

```js
const { exec } = require("child_process");

exec("ls", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  console.log("Output:");
  console.log(stdout);
});
```

Explanation:

- `exec()` runs a shell command
- `stdout` contains command output
- `stderr` contains errors

---

## Example: Spawning a Process

```js
const { spawn } = require("child_process");

const child = spawn("node", ["--version"]);

child.stdout.on("data", (data) => {
  console.log(`Node version: ${data}`);
});
```

Explanation:

- `spawn()` launches a new process
- Streams output in chunks
- Useful for large data

---

## Parent → Child Communication

Node.js allows communication between processes.

Example:

```js
const { fork } = require("child_process");

const child = fork("./child.js");

child.send("Hello Child Process");

child.on("message", (msg) => {
  console.log("Message from child:", msg);
});
```

child.js:

```js
process.on("message", (msg) => {
  console.log("Received:", msg);

  process.send("Hello Parent");
});
```

---

## Real-World Use Cases

Child processes are used for:

- Running shell commands
- Image/video processing
- Background jobs
- Data compression
- Running Python scripts
- Machine learning tasks

Example:

```id="52mxg1"
Node.js API → Spawn Python ML model
```

---

## Interview Ready Answer

The `child_process` module in Node.js allows the main Node.js application to create and manage separate processes to execute system commands or perform CPU-intensive tasks. Since Node.js runs on a single-threaded event loop, heavy computations can block the server. Child processes allow these tasks to run in parallel processes, keeping the main application responsive. Common methods include `spawn()`, `exec()`, `execFile()`, and `fork()` for creating and managing child processes.

# 68. Differentiate between `spawn()`, `exec()`, `execFile()`, and `fork()`

## Concepts

The **child_process module** provides different methods to create child processes.

Each method is designed for **different use cases**.

Main methods:

- `spawn()`
- `exec()`
- `execFile()`
- `fork()`

---

## 1. spawn()

Used to run **long-running processes** or programs that produce **large output streams**.

Characteristics:

- Returns streams
- Does **not buffer entire output**
- Efficient for large data

Example:

```js
const { spawn } = require("child_process");

const child = spawn("node", ["--version"]);

child.stdout.on("data", (data) => {
  console.log(`Output: ${data}`);
});
```

Use cases:

- Video processing
- File streaming
- Continuous processes

---

## 2. exec()

Runs a command inside a **shell**.

Characteristics:

- Buffers entire output
- Simpler API
- Limited buffer size

Example:

```js
const { exec } = require("child_process");

exec("ls", (error, stdout, stderr) => {
  console.log(stdout);
});
```

Use cases:

- Running small shell commands
- Quick scripts

Risk:

- Vulnerable to **shell injection** if input is not sanitized.

---

## 3. execFile()

Similar to `exec()` but **does not spawn a shell**.

Advantages:

- More secure
- Slightly faster
- Avoids shell injection risks

Example:

```js
const { execFile } = require("child_process");

execFile("node", ["--version"], (error, stdout) => {
  console.log(stdout);
});
```

Use cases:

- Running executable programs directly.

---

## 4. fork()

Specialized method for **running Node.js scripts**.

Features:

- Creates a new Node process
- Enables **IPC communication**
- Used for microservices or background workers

Example:

```js
const { fork } = require("child_process");

const child = fork("./worker.js");

child.send("Hello Child");

child.on("message", (msg) => {
  console.log(msg);
});
```

---

## Comparison Table

| Method     | Shell Used | Output Type   | Best For         |
| ---------- | ---------- | ------------- | ---------------- |
| spawn()    | No         | Stream        | Large data       |
| exec()     | Yes        | Buffered      | Small commands   |
| execFile() | No         | Buffered      | Secure execution |
| fork()     | No         | IPC messaging | Node scripts     |

---

## Interview Ready Answer

The child_process module provides multiple ways to create child processes. `spawn()` is used for long-running processes and streams data efficiently. `exec()` runs commands inside a shell and buffers the output, making it suitable for small tasks. `execFile()` executes a file directly without a shell, making it more secure and efficient. `fork()` is specifically designed for running Node.js scripts and enables communication between parent and child processes using IPC.

---

# 69. When would you use worker threads instead of child processes?

## Concepts

Both **worker threads** and **child processes** are used for **parallel processing**, but they differ in architecture.

---

## Child Processes

Characteristics:

- Separate memory space
- Separate Node.js instance
- Inter-process communication required
- Higher overhead

Example architecture:

```id="mshgdy"
Main Process
     │
     ├── Child Process 1
     ├── Child Process 2
```

---

## Worker Threads

Introduced in Node.js for **CPU-intensive tasks**.

Characteristics:

- Share memory with main thread
- Faster communication
- Lower overhead

Example architecture:

```id="u0eh4f"
Main Thread
     │
     ├── Worker Thread
```

---

## Example: Worker Thread

```js
const { Worker } = require("worker_threads");

const worker = new Worker("./worker.js");

worker.on("message", (msg) => {
  console.log("Result:", msg);
});
```

---

## When to Use Each

### Use Worker Threads

When:

- CPU-heavy calculations
- Data processing
- Mathematical computations

Examples:

- Image processing
- Machine learning inference
- Encryption tasks

---

### Use Child Processes

When:

- Running external programs
- Executing shell commands
- Running separate services

Examples:

- Running Python scripts
- CLI commands
- Video encoding

---

## Comparison Table

| Feature       | Worker Threads | Child Processes |
| ------------- | -------------- | --------------- |
| Memory        | Shared         | Separate        |
| Performance   | Faster         | Slower          |
| Isolation     | Low            | High            |
| Communication | Faster         | Slower          |

---

## Interview Ready Answer

Worker threads and child processes are both used for parallel execution in Node.js. Worker threads run within the same process and share memory, making communication faster and more efficient for CPU-intensive tasks. Child processes run as separate processes with independent memory spaces, which provides better isolation but higher overhead. Worker threads are preferred for heavy computations, while child processes are better suited for executing external programs or running independent services.

---

# 70. How do you communicate between parent and child processes?

## Concepts

Parent and child processes communicate using **IPC (Inter-Process Communication)**.

Node.js provides communication via:

- `process.send()`
- `child.send()`
- `message` events

This works when using **fork()**.

---

## Communication Flow

```id="jaj9o5"
Parent Process
      │
 child.send()
      │
Child Process
      │
process.send()
      │
Parent Process
```

---

## Example: Parent Process

```js
const { fork } = require("child_process");

const child = fork("./child.js");

child.send({ msg: "Hello Child" });

child.on("message", (data) => {
  console.log("From Child:", data);
});
```

---

## Example: Child Process

```js
process.on("message", (data) => {
  console.log("Received:", data);

  process.send({ msg: "Hello Parent" });
});
```

---

## Real Use Cases

IPC is used in:

- Worker services
- Task queues
- Microservices communication
- Background jobs

Example architecture:

```id="iwvyuh"
API Server
   │
   ├── Worker Process (Email service)
   ├── Worker Process (Image processing)
```

---

## Interview Ready Answer

Parent and child processes communicate using inter-process communication (IPC). In Node.js, when using the `fork()` method, the parent can send messages to the child using `child.send()`, and the child can respond using `process.send()`. Both processes listen for messages using the `message` event. This allows structured data to be exchanged between processes for coordination and task delegation.

---

# 71. What are the security considerations when using child processes?

## Concepts

Using child processes can introduce **security risks**, especially when executing external commands.

Key concerns:

- Command injection
- Privilege escalation
- Resource exhaustion
- Untrusted input execution

---

## 1. Command Injection

Dangerous example:

```js
exec(`ls ${userInput}`);
```

If attacker inputs:

```id="3d7xzo"
; rm -rf /
```

System command becomes:

```id="q8i86n"
ls ; rm -rf /
```

This could delete files.

---

## Safe Approach

Use:

```js
spawn("ls", [userInput]);
```

Arguments are passed safely.

---

## 2. Avoid Using Shell When Possible

Prefer:

- `spawn()`
- `execFile()`

Avoid:

```id="bln7gu"
exec()
```

when handling user input.

---

## 3. Validate User Input

Always sanitize inputs before passing them to commands.

Example:

```js
if (!/^[a-zA-Z0-9_-]+$/.test(userInput)) {
  throw new Error("Invalid input");
}
```

---

## 4. Limit Resource Usage

Child processes can consume:

- CPU
- Memory

Limit:

- process count
- execution time

---

## 5. Use Least Privilege

Run processes with minimal permissions.

Example:

```id="8tyrbv"
Node server user ≠ root
```

---

## Interview Ready Answer

Security considerations when using child processes include preventing command injection, validating user input, avoiding unnecessary shell execution, and limiting resource usage. Methods like `spawn()` and `execFile()` are safer than `exec()` because they avoid shell interpretation. Additionally, child processes should run with minimal privileges and inputs should always be sanitized to prevent malicious command execution.

# 15. Cluster Module

---

# 72. What is clustering in Node.js and why is it used?

## Concepts

### What is Clustering?

Clustering in Node.js allows you to create **multiple Node.js processes (workers)** that share the **same server port**.

Why needed?

Node.js is **single-threaded**, meaning:

- One process uses **only one CPU core**

Modern servers have **multiple CPU cores**.

Clustering allows Node.js to:

- Use **all CPU cores**
- Improve **throughput**
- Increase **fault tolerance**

---

### Example Scenario

Server has **8 CPU cores**

Without cluster:

- Node uses **1 core**

With cluster:

- Node creates **8 worker processes**
- Each worker handles requests

---

### Benefits

1. Better CPU utilization
2. Higher request throughput
3. Improved reliability
4. Load distribution across processes

---

## Code Example

```js
const cluster = require("cluster");
const http = require("http");
const os = require("os");

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      res.end(`Handled by worker ${process.pid}`);
    })
    .listen(3000);
}
```

Explanation:

- Master process creates workers
- Workers handle HTTP requests
- All share the same port

---

## Interview Ready Answer

Clustering in Node.js allows running multiple instances of a Node.js application across multiple CPU cores. Since Node.js is single-threaded, clustering enables better CPU utilization by spawning worker processes that share the same server port. This improves scalability, performance, and fault tolerance for high-traffic applications.

---

# 73. How does the cluster module work?

## Concepts

The cluster module works by creating:

- **One master process**
- **Multiple worker processes**

All workers:

- Run the same application
- Share the same server port

---

### Flow

Client Request
→ OS accepts connection
→ Master distributes request
→ Worker processes request
→ Response returned

---

### Key Components

Master Process:

- Manages workers
- Forks new workers
- Restarts crashed workers

Worker Processes:

- Handle actual HTTP requests
- Run application logic

---

## Code Example

```js
const cluster = require("cluster");

if (cluster.isMaster) {
  const worker = cluster.fork();

  worker.on("online", () => {
    console.log("Worker started");
  });
} else {
  console.log("Worker process running");
}
```

---

### Worker Restart Example

```js
cluster.on("exit", (worker) => {
  console.log(`Worker ${worker.process.pid} died`);
  cluster.fork(); // restart worker
});
```

---

## Interview Ready Answer

The cluster module works by creating a master process that forks multiple worker processes using the child_process module. Each worker runs an instance of the application and shares the same server port. Incoming connections are distributed among workers, allowing the application to utilize multiple CPU cores and handle more concurrent requests.

---

# 74. Explain master-worker architecture in clustering.

## Concepts

Cluster architecture follows the **Master–Worker model**.

### Master Process

Responsibilities:

- Spawns workers
- Manages workers
- Distributes connections
- Monitors worker health

Master does **not handle requests directly**.

---

### Worker Processes

Responsibilities:

- Handle HTTP requests
- Execute application logic
- Send responses

Each worker runs its **own event loop and memory space**.

---

### Architecture Diagram

```
Client Requests
       |
       v
    Master
   /  |  \
Worker Worker Worker
```

Each worker:

- Independent Node.js process
- Own memory
- Own event loop

---

### Fault Tolerance

If worker crashes:

- Master can restart it

---

## Code Example

```js
const cluster = require("cluster");

if (cluster.isMaster) {
  console.log("Master process running");

  const worker = cluster.fork();

  worker.on("message", (msg) => {
    console.log("Message from worker:", msg);
  });
} else {
  process.send("Worker started");
}
```

---

## Interview Ready Answer

In Node.js clustering, the master-worker architecture consists of a master process that manages multiple worker processes. The master is responsible for spawning workers and distributing incoming connections, while workers handle the actual request processing. Each worker runs independently with its own event loop and memory space, which improves scalability and fault isolation.

---

# 75. How do you handle shared state in a clustered application?

## Concepts

Important rule:

Workers **do NOT share memory**.

Each worker has:

- Separate process
- Separate memory

This creates a challenge for **shared state**.

Example problems:

- Session storage
- Cache data
- Authentication tokens

---

### Common Solutions

1. **External Databases**

Examples:

- PostgreSQL
- MongoDB

Used for persistent shared data.

---

2. **Redis**

Most common for:

- Session storage
- Distributed cache
- Rate limiting

Example:

```
Express Session
→ Redis Store
→ Shared across workers
```

---

3. **Message Queues**

Examples:

- RabbitMQ
- Kafka

Used for event-based communication.

---

4. **IPC (Inter-Process Communication)**

Workers communicate with master using:

```
process.send()
```

---

## Code Example

Worker sending message:

```js
process.send({ type: "log", message: "Worker started" });
```

Master receiving message:

```js
cluster.on("message", (worker, msg) => {
  console.log(msg);
});
```

---

## Interview Ready Answer

Since worker processes in Node.js clustering do not share memory, shared state must be managed using external systems. Common approaches include using databases for persistent data, Redis for distributed caching or session storage, message queues for inter-service communication, and IPC messaging between master and workers. This ensures consistency across multiple processes.

---

# 16. Other Core Modules

---

# 76. What is the purpose of the `util` module?

## Concepts

The `util` module provides **utility functions for Node.js applications**.

Common use cases:

- Debugging
- Object inspection
- Promisifying callbacks

---

### Common Methods

- `util.promisify()`
- `util.inspect()`
- `util.format()`
- `util.types`

---

### Example: Promisify

Convert callback API → Promise API.

```js
const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);

async function read() {
  const data = await readFile("file.txt", "utf8");
  console.log(data);
}
```

---

### Object Inspection

```js
const util = require("util");

const obj = { name: "Node", version: 20 };

console.log(util.inspect(obj));
```

---

## Interview Ready Answer

The util module provides helper utilities for Node.js applications. It includes functions like util.promisify to convert callback-based APIs into promise-based ones, util.inspect for debugging objects, and util.format for string formatting. It is mainly used to improve debugging and modernize older APIs.

---

# 77. How do you use the `url` module?

## Concepts

The `url` module helps with:

- Parsing URLs
- Resolving URLs
- Formatting URLs

Modern Node uses the **WHATWG URL API**.

---

### Example: Parsing URL

```js
const url = require("url");

const myUrl = new URL("https://example.com:8080/path?name=node#hash");

console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.searchParams.get("name"));
```

---

### URL Components

Example URL:

```
https://example.com:8080/blog?id=10#section
```

Parts:

- Protocol → https
- Host → example.com
- Port → 8080
- Path → /blog
- Query → id=10
- Fragment → section

---

## Interview Ready Answer

The url module is used to parse, construct, and manipulate URLs in Node.js. It allows extracting components such as hostname, pathname, query parameters, and protocol. Modern Node.js uses the WHATWG URL API, which provides a standardized way to work with URLs.

---

# 78. What is the `querystring` module used for?

## Concepts

The `querystring` module helps parse and format **URL query parameters**.

Example query:

```
?name=node&version=20
```

---

### Parsing Query String

```js
const querystring = require("querystring");

const parsed = querystring.parse("name=node&version=20");

console.log(parsed);
```

Output:

```
{ name: 'node', version: '20' }
```

---

### Stringifying Object

```js
const querystring = require("querystring");

const str = querystring.stringify({
  name: "node",
  version: "20",
});

console.log(str);
```

Output:

```
name=node&version=20
```

---

## Interview Ready Answer

The querystring module is used to parse and stringify URL query parameters. It converts query strings into JavaScript objects and vice versa. Although still supported, modern Node.js often uses the URLSearchParams API instead.

---

# 79. Explain the `dns` module.

## Concepts

The `dns` module provides **DNS resolution functions**.

Used for:

- Domain lookup
- IP address resolution
- Reverse DNS lookup

---

### Example: Resolve Domain

```js
const dns = require("dns");

dns.lookup("google.com", (err, address) => {
  console.log("IP Address:", address);
});
```

---

### Reverse Lookup

```js
dns.reverse("8.8.8.8", (err, hostnames) => {
  console.log(hostnames);
});
```

---

### Common Methods

- `dns.lookup()`
- `dns.resolve()`
- `dns.reverse()`

---

## Interview Ready Answer

The dns module provides functions for DNS name resolution in Node.js. It can translate domain names into IP addresses using dns.lookup or dns.resolve, and perform reverse DNS lookups using dns.reverse. It is useful in networking applications and service discovery.

---

# 80. What is the `net` module used for?

## Concepts

The `net` module is used to create **TCP servers and clients**.

It works at a **lower level than HTTP**.

Used for:

- TCP communication
- Custom protocols
- Socket programming

---

### Example: TCP Server

```js
const net = require("net");

const server = net.createServer((socket) => {
  socket.write("Hello Client\n");

  socket.on("data", (data) => {
    console.log("Received:", data.toString());
  });
});

server.listen(4000);
```

---

### TCP Client

```js
const net = require("net");

const client = net.createConnection({ port: 4000 });

client.on("data", (data) => {
  console.log(data.toString());
});
```

---

## Interview Ready Answer

The net module in Node.js is used to build TCP-based networking applications. It provides APIs to create TCP servers and clients using sockets. It operates at a lower level than HTTP and is commonly used for building custom network protocols and real-time communication systems.

## IV. ASYNCHRONOUS PROGRAMMING

---

# 81. What are callback functions?

## Concepts

### What is a Callback?

A callback function is a function that is **passed as an argument to another function** and is executed **after a task completes**.

Node.js uses callbacks heavily because most operations are **asynchronous**, such as:

- File system operations
- Database queries
- Network requests
- Timers

Instead of blocking execution, Node registers a callback that runs **when the operation finishes**.

---

### Why Callbacks Are Used

Node.js follows a **non-blocking I/O model**.

Instead of waiting for a task:

1. Task is delegated
2. Program continues running
3. Callback executes when result is ready

This enables **high concurrency**.

---

## Code Example

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

Explanation:

- `fetchData()` receives a callback
- `setTimeout` simulates async operation
- After 1 second, callback executes

Output:

```
Data received
```

---

## Interview Ready Answer

A callback function is a function passed as an argument to another function and executed after an asynchronous operation completes. Node.js uses callbacks extensively for non-blocking operations like file reading, database queries, and HTTP requests. This approach allows the event loop to continue executing other tasks while waiting for the operation to finish.

---

# 82. What is callback hell and how do you avoid it?

## Concepts

### What is Callback Hell?

Callback hell occurs when multiple asynchronous operations are nested inside callbacks, leading to deeply nested code that is hard to read and maintain.

Example pattern:

```
callback → callback → callback → callback
```

This makes code:

- Hard to debug
- Hard to maintain
- Difficult to handle errors

---

## Example of Callback Hell

```js
const fs = require("fs");

fs.readFile("file1.txt", "utf8", (err, data1) => {
  if (err) throw err;

  fs.readFile("file2.txt", "utf8", (err, data2) => {
    if (err) throw err;

    fs.readFile("file3.txt", "utf8", (err, data3) => {
      if (err) throw err;

      console.log(data1, data2, data3);
    });
  });
});
```

This nested structure is called **callback hell**.

---

## How to Avoid Callback Hell

### 1. Use Promises

```js
fs.promises
  .readFile("file1.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

---

### 2. Use Async/Await

```js
const fs = require("fs").promises;

async function readFiles() {
  const data1 = await fs.readFile("file1.txt", "utf8");
  const data2 = await fs.readFile("file2.txt", "utf8");

  console.log(data1, data2);
}

readFiles();
```

---

### 3. Modularize Code

Break operations into smaller functions.

---

## Interview Ready Answer

Callback hell refers to deeply nested callback functions that make asynchronous code difficult to read and maintain. It typically occurs when multiple async operations depend on each other. It can be avoided using Promises, async/await, or by modularizing code into smaller reusable functions, which results in cleaner and more maintainable code.

---

# 83. What is an error-first callback pattern?

## Concepts

Node.js follows a standard callback pattern called **error-first callbacks**.

Structure:

```
callback(error, result)
```

Rules:

1. First argument → error
2. Second argument → success result
3. If error occurs → error object returned
4. If success → error is `null`

This standard ensures **consistent error handling across Node APIs**.

---

## Code Example

```js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error:", err);
    return;
  }

  console.log("File content:", data);
});
```

Explanation:

- `err` → error object
- `data` → result

---

### Custom Error-First Callback Example

```js
function divide(a, b, callback) {
  if (b === 0) {
    return callback(new Error("Division by zero"));
  }

  callback(null, a / b);
}

divide(10, 2, (err, result) => {
  if (err) return console.error(err);

  console.log(result);
});
```

---

## Interview Ready Answer

The error-first callback pattern is a standard convention in Node.js where the first argument of the callback represents an error and the second argument contains the result. If an error occurs, the error object is passed as the first argument and the result is ignored. If the operation succeeds, the error argument is set to null and the result is returned. This pattern provides a consistent way to handle asynchronous errors in Node.js APIs.

---

# 84. What are Promises in Node.js?

## Concepts

A Promise represents the **eventual completion or failure of an asynchronous operation**.

It provides a cleaner alternative to callbacks.

A Promise has three states:

1. Pending
2. Fulfilled
3. Rejected

---

### Promise Lifecycle

```
Pending
   ↓
Fulfilled → .then()
Rejected  → .catch()
```

---

## Code Example

```js
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

---

## Interview Ready Answer

A Promise in Node.js is an object that represents the eventual completion or failure of an asynchronous operation. It allows handling async operations using methods like `.then()` and `.catch()` instead of nested callbacks. Promises improve readability, error handling, and maintainability of asynchronous code.

---

# 85. How do you create and consume promises?

## Concepts

### Creating a Promise

Using the `Promise` constructor.

```js
new Promise((resolve, reject) => {});
```

- `resolve()` → success
- `reject()` → failure

---

## Code Example

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}
```

---

### Consuming a Promise

Using `.then()` and `.catch()`.

```js
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
```

---

### Using Async/Await

```js
async function run() {
  const data = await fetchData();
  console.log(data);
}

run();
```

---

## Interview Ready Answer

Promises are created using the Promise constructor which accepts a function with resolve and reject callbacks. The resolve function is called when the operation succeeds, while reject is used for errors. Promises are consumed using `.then()` for success handling and `.catch()` for error handling, or using async/await for cleaner syntax.

---

# 86. Explain Promise chaining.

## Concepts

Promise chaining allows **multiple asynchronous operations to run sequentially**.

Each `.then()` returns a new promise.

The output of one promise becomes the input of the next.

---

## Code Example

```js
function step1() {
  return Promise.resolve("Step 1 done");
}

function step2() {
  return Promise.resolve("Step 2 done");
}

step1()
  .then((result) => {
    console.log(result);
    return step2();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.error(err));
```

Output:

```
Step 1 done
Step 2 done
```

---

## Benefits

- Avoid callback nesting
- Maintain sequential flow
- Centralized error handling

---

## Interview Ready Answer

Promise chaining allows multiple asynchronous operations to be executed sequentially by returning promises from `.then()` handlers. Each `.then()` receives the result of the previous promise. This approach avoids nested callbacks and provides better readability and centralized error handling using `.catch()`.

---

# 87. What are `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, and `Promise.any()`?

## Concepts

These methods handle **multiple promises simultaneously**.

---

### Promise.all()

Runs promises in parallel.

Returns when **all succeed**.

Fails if **any promise fails**.

```js
Promise.all([Promise.resolve(1), Promise.resolve(2)]).then(console.log);
```

Output:

```
[1, 2]
```

---

### Promise.race()

Returns result of **first completed promise**.

```js
Promise.race([
  new Promise((res) => setTimeout(() => res("A"), 100)),
  new Promise((res) => setTimeout(() => res("B"), 200)),
]).then(console.log);
```

Output:

```
A
```

---

### Promise.allSettled()

Waits for **all promises to complete**.

Returns status of each promise.

```js
Promise.allSettled([Promise.resolve("Success"), Promise.reject("Error")]).then(
  console.log,
);
```

---

### Promise.any()

Returns **first successful promise**.

Ignores rejected promises.

```js
Promise.any([Promise.reject("Fail"), Promise.resolve("Success")]).then(
  console.log,
);
```

Output:

```
Success
```

---

## Interview Ready Answer

`Promise.all()` runs multiple promises in parallel and resolves only if all succeed. `Promise.race()` returns the result of the first completed promise. `Promise.allSettled()` waits for all promises to complete and returns their status regardless of success or failure. `Promise.any()` resolves with the first successfully fulfilled promise and ignores rejected ones.

---

# 88. How do you handle errors in promises?

## Concepts

Errors in promises can be handled using:

1. `.catch()`
2. `try/catch` with async/await

---

### Using `.catch()`

```js
fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

---

### Using Async/Await

```js
async function run() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

---

### Global Promise Error

Node provides:

```
process.on('unhandledRejection')
```

---

## Interview Ready Answer

Errors in promises can be handled using the `.catch()` method, which catches rejected promises in a chain. When using async/await, errors are handled with try/catch blocks. Proper error handling ensures that rejected promises do not crash the application and allows graceful error management.

## IV. ASYNCHRONOUS PROGRAMMING

---

# 89. What is async/await and how does it work?

## Concepts

### What is async/await?

`async/await` is a modern syntax in JavaScript used to handle **asynchronous operations more cleanly than Promises**.

It is built **on top of Promises**.

Key rules:

- `async` functions always return a **Promise**
- `await` pauses execution until the Promise resolves

This makes asynchronous code look **synchronous and easier to read**.

---

### How It Works Internally

When `await` is used:

1. JavaScript pauses execution of that function
2. Event loop continues running other tasks
3. When Promise resolves → execution resumes

Important:

It **does not block the event loop**.

---

## Code Example

### Using Promises

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

fetchData().then((data) => console.log(data));
```

---

### Using async/await

```js
async function run() {
  const data = await fetchData();
  console.log(data);
}

run();
```

Explanation:

- `await` waits for promise
- Cleaner syntax
- No `.then()` chaining

---

## Interview Ready Answer

Async/await is a syntactic feature in JavaScript that simplifies working with Promises. An `async` function automatically returns a Promise, and the `await` keyword pauses execution until the Promise resolves. This makes asynchronous code easier to read and maintain while still being non-blocking and handled by the event loop.

---

# 90. How do you handle errors with async/await?

## Concepts

Errors in async functions can be handled using:

1. **try/catch blocks**
2. `.catch()` on returned promise

Most common method: **try/catch**

---

## Code Example

### Using try/catch

```js
async function fetchData() {
  throw new Error("Something went wrong");
}

async function run() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

run();
```

---

### Using `.catch()`

```js
async function run() {
  const data = await fetchData();
  console.log(data);
}

run().catch((err) => console.error(err));
```

---

### Best Practice

Handle errors **inside the async function** using try/catch.

---

## Interview Ready Answer

Errors in async/await are handled using try/catch blocks because `await` throws an exception if the promise is rejected. The async function can also return a rejected promise which can be caught using `.catch()` when the function is called. Using try/catch is the most common and readable pattern for handling asynchronous errors.

---

# 91. What are the performance considerations of async/await?

## Concepts

Although async/await improves readability, it can introduce **performance issues if used incorrectly**.

The main issue is **sequential execution**.

---

### Sequential Execution (Slow)

```js
const user = await getUser();
const posts = await getPosts();
const comments = await getComments();
```

Problem:

Each task waits for previous one to finish.

Execution:

```
Task1 → Task2 → Task3
```

Total time = sum of all operations.

---

### Parallel Execution (Better)

```js
const [user, posts, comments] = await Promise.all([
  getUser(),
  getPosts(),
  getComments(),
]);
```

Execution:

```
Task1
Task2
Task3
run simultaneously
```

Total time = longest operation.

---

### When async/await is Ideal

- Dependent operations
- Sequential workflows
- Clean code readability

---

### When It Can Hurt Performance

- Independent tasks executed sequentially
- Heavy CPU tasks

---

## Interview Ready Answer

Async/await improves readability but may introduce performance issues if asynchronous operations are executed sequentially when they could run in parallel. Independent operations should be executed using Promise.all() to improve performance. Async/await should be used for dependent operations while parallel tasks should use Promise utilities.

---

# 92. How do you run async operations in parallel?

## Concepts

When async tasks are **independent**, they should run in parallel.

Common methods:

1. `Promise.all()`
2. `Promise.allSettled()`
3. `Promise.any()`

---

### Using Promise.all()

```js
async function run() {
  const [user, posts] = await Promise.all([getUser(), getPosts()]);

  console.log(user, posts);
}
```

Both requests execute simultaneously.

---

### Using Promise.allSettled()

Useful when tasks may fail but you still want results.

```js
const results = await Promise.allSettled([getUser(), getPosts()]);

console.log(results);
```

---

### Real Example (API Requests)

```js
async function loadData() {
  const [users, posts, comments] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments(),
  ]);

  return { users, posts, comments };
}
```

---

## Interview Ready Answer

Async operations can run in parallel using Promise utilities like Promise.all(). Instead of awaiting each operation sequentially, multiple promises are created first and awaited together. This allows independent operations to execute simultaneously, improving overall performance.

---

# 93. Explain the phases of the event loop.

## Concepts

The **event loop** is the mechanism that allows Node.js to handle asynchronous operations.

It continuously runs and processes different queues.

Event loop phases:

1. Timers
2. Pending Callbacks
3. Idle / Prepare
4. Poll
5. Check
6. Close Callbacks

---

## Event Loop Flow

```
Timers
 ↓
Pending Callbacks
 ↓
Idle / Prepare
 ↓
Poll
 ↓
Check
 ↓
Close Callbacks
```

---

### 1. Timers Phase

Executes callbacks scheduled by:

- `setTimeout()`
- `setInterval()`

Example:

```js
setTimeout(() => {
  console.log("Timer executed");
}, 1000);
```

---

### 2. Pending Callbacks Phase

Handles callbacks from:

- TCP errors
- Some system operations

Rarely used directly by developers.

---

### 3. Idle / Prepare

Internal Node.js phase.

Used internally by libuv.

---

### 4. Poll Phase

Most important phase.

Handles:

- Incoming I/O
- File system callbacks
- Network events

Example:

```
fs.readFile()
HTTP requests
```

---

### 5. Check Phase

Executes:

```
setImmediate()
```

Example:

```js
setImmediate(() => {
  console.log("Immediate executed");
});
```

---

### 6. Close Callbacks Phase

Handles cleanup operations.

Example:

```
socket.on('close')
```

---

## Interview Ready Answer

The Node.js event loop consists of multiple phases including timers, pending callbacks, idle/prepare, poll, check, and close callbacks. Each phase processes its own callback queue. Timers execute setTimeout callbacks, the poll phase handles I/O events, the check phase executes setImmediate callbacks, and the close phase handles cleanup events. This architecture allows Node.js to process asynchronous operations efficiently.

---

# 94. What is the difference between `setImmediate()` and `setTimeout(fn, 0)`?

## Concepts

Both schedule asynchronous callbacks.

However they run in **different event loop phases**.

| Function         | Phase        |
| ---------------- | ------------ |
| setTimeout(fn,0) | Timers phase |
| setImmediate()   | Check phase  |

---

### Example

```js
setTimeout(() => {
  console.log("Timeout");
}, 0);

setImmediate(() => {
  console.log("Immediate");
});
```

Order may vary depending on environment.

---

### Key Difference

`setImmediate()` executes **after the poll phase**.

`setTimeout()` executes in **timers phase**.

---

## Interview Ready Answer

setTimeout(fn, 0) schedules a callback in the timers phase of the event loop, while setImmediate() schedules it in the check phase. Because of the different phases, their execution order can vary depending on the context, but setImmediate typically executes after I/O events while setTimeout runs based on timer scheduling.

---

# 95. What is `process.nextTick()` and where does it fit in the event loop?

## Concepts

`process.nextTick()` schedules a callback to run **immediately after the current operation completes**, before the event loop continues.

It runs **before all event loop phases**.

---

### Execution Priority

Order:

```
Synchronous code
process.nextTick()
Promise microtasks
Event Loop Phases
```

---

## Code Example

```js
console.log("Start");

process.nextTick(() => {
  console.log("Next Tick");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

Output:

```
Start
End
Next Tick
Timeout
```

---

## Interview Ready Answer

process.nextTick() schedules a callback to execute immediately after the current operation completes, before the event loop continues to the next phase. It runs before timers, I/O callbacks, and setImmediate. Because of its high priority, excessive use can starve the event loop and delay other asynchronous operations.

---

# 96. What is the microtask queue vs macrotask queue?

## Concepts

JavaScript runtime uses two queues for async tasks.

1. **Microtask Queue**
2. **Macrotask Queue**

---

### Microtask Queue

Higher priority.

Includes:

- Promise callbacks
- process.nextTick()
- queueMicrotask()

Executed **before event loop continues**.

---

### Macrotask Queue

Lower priority.

Includes:

- setTimeout
- setInterval
- setImmediate
- I/O callbacks

Executed in **event loop phases**.

---

### Execution Order

```
Synchronous Code
↓
Microtasks
↓
Macrotasks
```

---

## Code Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

Output:

```
Start
End
Promise
Timeout
```

---

## Interview Ready Answer

The microtask queue contains high-priority asynchronous tasks such as Promise callbacks and process.nextTick. These tasks execute immediately after the current synchronous code finishes and before the event loop proceeds to the next phase. The macrotask queue contains tasks such as setTimeout, setInterval, and I/O callbacks, which are executed during the event loop phases. Microtasks always run before macrotasks.

# V. ERROR HANDLING & DEBUGGING

---

# 97. How do you handle errors in synchronous code?

## Concepts

Synchronous code runs sequentially.

If an error occurs:

- Execution stops immediately
- The error must be caught using **try...catch**

Node.js uses the standard JavaScript error handling mechanism for synchronous operations.

---

### Using try...catch

```js
try {
  const data = JSON.parse("invalid json");
  console.log(data);
} catch (error) {
  console.error("Error occurred:", error.message);
}
```

Explanation:

- If `JSON.parse()` fails
- Control moves to the `catch` block
- Program does not crash

---

### Throwing Errors

You can manually throw errors.

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }

  return a / b;
}

try {
  divide(10, 0);
} catch (err) {
  console.log(err.message);
}
```

---

## Interview Ready Answer

Errors in synchronous Node.js code are handled using `try...catch` blocks. When an error occurs, it is thrown and immediately caught by the nearest catch block. Developers can also throw custom errors using the `throw` keyword. This mechanism prevents the application from crashing and allows graceful error handling.

---

# 98. How do you handle errors in asynchronous code?

## Concepts

Asynchronous code errors cannot be caught with `try...catch` directly when using callbacks.

Different approaches exist depending on the async pattern:

1. Error-first callbacks
2. Promise `.catch()`
3. `async/await` with try...catch

---

### Error-first Callback Pattern

Common Node.js convention.

```js
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log(data.toString());
});
```

Rule:

First argument of callback → error.

---

### Handling Errors with Promises

```js
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

---

### Using async/await

```js
async function readFile() {
  try {
    const data = await fs.promises.readFile("file.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}
```

---

## Interview Ready Answer

Asynchronous errors in Node.js are handled using different mechanisms depending on the pattern used. In callback-based code, the error-first callback pattern is used. For promises, errors are handled using `.catch()`. With async/await, errors can be handled using `try...catch`. These approaches ensure asynchronous operations fail gracefully without crashing the application.

---

# 99. What are uncaught exceptions and unhandled promise rejections?

## Concepts

### Uncaught Exception

Occurs when:

- A synchronous error is thrown
- No `try...catch` handles it

Example:

```js
throw new Error("Crash");
```

Result:

Node.js process crashes.

---

### Handling Uncaught Exceptions

Node provides a global handler.

```js
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});
```

However:

Best practice → **log and exit process safely**.

---

### Unhandled Promise Rejection

Occurs when:

- A promise rejects
- No `.catch()` handles it

Example:

```js
Promise.reject("Error occurred");
```

---

### Handling Unhandled Rejections

```js
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
});
```

---

### Best Practice

Never ignore errors.

Always:

- Handle promise rejections
- Log errors
- Gracefully restart application

---

## Interview Ready Answer

An uncaught exception occurs when a synchronous error is thrown and not caught by any try-catch block, causing the Node.js process to crash. An unhandled promise rejection occurs when a promise is rejected but no catch handler processes it. Node.js provides global handlers like `process.on("uncaughtException")` and `process.on("unhandledRejection")`, but production systems should log the error and perform a graceful shutdown.

---

# 100. How do you create custom error types?

## Concepts

Custom errors help:

- Improve error clarity
- Differentiate error types
- Implement better error handling

In Node.js, custom errors extend the built-in `Error` class.

---

### Creating Custom Error Class

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
```

---

### Using Custom Error

```js
function registerUser(user) {
  if (!user.email) {
    throw new ValidationError("Email is required");
  }
}

try {
  registerUser({});
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Validation failed:", err.message);
  }
}
```

---

### Real Backend Example

API validation:

```js
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}
```

---

## Interview Ready Answer

Custom error types in Node.js are created by extending the built-in `Error` class. This allows developers to define specific error types like ValidationError or NotFoundError. Custom errors improve clarity, enable structured error handling, and are commonly used in backend APIs for returning meaningful responses.

---

# 101. What is domain-based error handling (deprecated)?

## Concepts

The **domain module** was an older Node.js mechanism for handling errors across asynchronous operations.

Purpose:

- Catch errors across multiple async operations
- Prevent application crashes

However:

The module is **deprecated**.

Reason:

- Complexity
- Unpredictable behavior
- Better alternatives exist.

---

### Example (Deprecated)

```js
const domain = require("domain");

const d = domain.create();

d.on("error", (err) => {
  console.log("Domain caught error:", err);
});

d.run(() => {
  throw new Error("Something went wrong");
});
```

---

### Modern Alternatives

Instead of domains:

Use:

- `try/catch` with async/await
- centralized error middleware (Express)
- process-level handlers

---

## Interview Ready Answer

Domain-based error handling was an older Node.js feature used to capture errors across asynchronous operations using the domain module. However, it is now deprecated due to complexity and unreliable behavior. Modern Node.js applications use structured error handling with try-catch, promises, async/await, and centralized middleware.

---

# 102. How do you debug a Node.js application?

## Concepts

Debugging is the process of:

- Identifying bugs
- Inspecting runtime behavior
- Analyzing stack traces

Node.js supports debugging through built-in tools and external debuggers.

---

### Basic Debugging with console

```js
console.log("Value:", value);
console.error("Error:", err);
```

---

### Using Node Debugger

Run application in debug mode.

```bash
node inspect app.js
```

This opens an interactive debugger.

---

### Using Chrome DevTools

Run:

```bash
node --inspect app.js
```

Then open:

```
chrome://inspect
```

Features:

- Breakpoints
- Step execution
- Memory inspection

---

## Interview Ready Answer

Node.js applications can be debugged using console logging, the built-in Node inspector, or browser-based debugging tools. Running a program with `node --inspect` enables Chrome DevTools integration, allowing developers to set breakpoints, inspect variables, and analyze execution flow.

---

# 103. What tools do you use for debugging Node.js?

## Concepts

Several tools exist for debugging Node.js.

---

### Common Debugging Tools

1. **Chrome DevTools**

- Breakpoints
- Memory inspection
- Performance analysis

---

2. **VS Code Debugger**

Most commonly used.

Features:

- Breakpoints
- Variable inspection
- Call stack view

---

3. **Node Inspector**

Command:

```
node --inspect
```

Allows remote debugging.

---

4. **Nodemon**

Automatically restarts server.

```
nodemon app.js
```

---

5. **Logging Libraries**

Examples:

- Winston
- Pino
- Morgan

Used for production debugging.

---

## Interview Ready Answer

Common debugging tools for Node.js include Chrome DevTools, the built-in Node inspector, and IDE debuggers like VS Code. Developers also use nodemon for auto-restart during development and structured logging libraries such as Winston or Pino for debugging production systems.

---

# 104. How do you write unit tests for Node.js applications?

## Concepts

Unit testing means testing **individual functions or modules** independently.

Goal:

Ensure each component works correctly.

---

### Common Testing Frameworks

- Jest
- Mocha
- Chai
- Supertest

---

### Example Using Jest

Install:

```bash
npm install jest --save-dev
```

---

### Function to Test

```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

---

### Test File

```js
const add = require("./add");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```

Run:

```bash
npm test
```

---

### Testing API Endpoints

Using **Supertest**.

```js
const request = require("supertest");
const app = require("../app");

test("GET /users", async () => {
  const res = await request(app).get("/users");

  expect(res.statusCode).toBe(200);
});
```

---

## Interview Ready Answer

Unit tests in Node.js are written using frameworks like Jest or Mocha. A unit test verifies the behavior of a single function or module in isolation. Test files define test cases that assert expected outputs. For API testing, tools like Supertest are commonly used to simulate HTTP requests and verify responses.

---

# 105. What is the Test Pyramid?

## Concepts

The Test Pyramid is a testing strategy that defines the ideal distribution of tests.

It has three levels.

---

### 1. Unit Tests (Bottom Layer)

Most numerous.

- Test individual functions
- Fast execution
- Isolated

Example:

```
add() function test
```

---

### 2. Integration Tests

Test interactions between modules.

Example:

```
API + Database
```

---

### 3. End-to-End Tests (Top Layer)

Test full system behavior.

Example:

```
User login → dashboard
```

---

### Pyramid Representation

```
      E2E Tests
   Integration Tests
 Unit Tests (Most)
```

---

## Interview Ready Answer

The Test Pyramid is a testing strategy that emphasizes writing many unit tests, fewer integration tests, and a small number of end-to-end tests. Unit tests verify individual functions, integration tests check interactions between components, and end-to-end tests validate the complete system workflow.

---

# 106. How do you profile and optimize Node.js applications?

## Concepts

Profiling means analyzing performance to identify bottlenecks.

Optimization focuses on improving:

- CPU usage
- Memory usage
- Response time

---

### Node Profiling Tools

1. **Node Profiler**

```bash
node --prof app.js
```

Generates V8 performance logs.

---

2. **Chrome DevTools Performance Tab**

Use:

```
node --inspect
```

Then analyze:

- CPU usage
- Memory usage
- Execution timeline

---

3. **Clinic.js**

Popular performance toolkit.

```
npm install clinic
clinic doctor -- node app.js
```

---

4. **APM Tools**

Production monitoring tools.

Examples:

- New Relic
- Datadog
- AppDynamics

---

### Common Optimization Techniques

1. Avoid blocking code
2. Use streams for large data
3. Cache results (Redis)
4. Optimize database queries
5. Use clustering

---

## Interview Ready Answer

Profiling a Node.js application involves analyzing CPU usage, memory consumption, and execution time to identify performance bottlenecks. Tools like the Node profiler, Chrome DevTools, and Clinic.js help analyze performance. Optimization techniques include avoiding blocking operations, using streams, implementing caching, optimizing database queries, and scaling using clustering.

## VI. PERFORMANCE & OPTIMIZATION

---

# 107. How do you optimize Node.js application performance?

## Concepts

Optimizing Node.js performance focuses on improving:

- Response time
- Throughput
- Resource utilization
- Scalability

Because Node.js is **single-threaded**, blocking operations and inefficient code can significantly impact performance.

---

### Key Optimization Techniques

#### 1. Use Asynchronous Operations

Avoid blocking the event loop.

Bad (blocking):

```js
fs.readFileSync("file.txt");
```

Good (non-blocking):

```js
fs.readFile("file.txt", (err, data) => {
  console.log(data);
});
```

---

#### 2. Use Streams for Large Data

Instead of loading entire data into memory.

```js
const fs = require("fs");

const readStream = fs.createReadStream("largeFile.txt");
readStream.pipe(process.stdout);
```

---

#### 3. Implement Caching

Avoid repeated expensive computations or database queries.

Example:

- Redis
- In-memory caching

---

#### 4. Optimize Database Queries

Techniques:

- Indexing
- Query optimization
- Connection pooling

Example:

```sql
CREATE INDEX idx_email ON users(email);
```

---

#### 5. Use Load Balancing

Run multiple Node processes to utilize CPU cores.

Example tools:

- PM2
- Nginx
- Docker containers

---

#### 6. Avoid Blocking Code

CPU-heavy tasks block the event loop.

Use:

- Worker Threads
- Background jobs

---

#### 7. Use Compression

Reduce response size.

Example:

```js
const compression = require("compression");
app.use(compression());
```

---

## Interview Ready Answer

To optimize Node.js application performance, several strategies can be used. These include avoiding blocking operations, using asynchronous APIs, implementing caching mechanisms, optimizing database queries, using streams for large data processing, enabling compression, and scaling the application using clustering or load balancing. Since Node.js is single-threaded, minimizing event loop blocking is critical for maintaining high throughput and scalability.

---

# 108. What are common performance bottlenecks in Node.js?

## Concepts

Performance bottlenecks are factors that limit application performance.

---

### 1. Blocking the Event Loop

Heavy synchronous operations block all requests.

Example:

```js
while (true) {}
```

---

### 2. CPU-Intensive Computations

Examples:

- Image processing
- Encryption
- Complex algorithms

These block the main thread.

---

### 3. Slow Database Queries

Causes:

- Missing indexes
- Inefficient joins
- Large result sets

---

### 4. Memory Leaks

Unused objects remain in memory.

Leads to:

- Increased memory usage
- Application crashes

---

### 5. Excessive Logging

Writing logs synchronously can slow down the system.

---

### 6. Too Many External API Calls

Latency increases response time.

---

### 7. Large Payloads

Sending very large JSON responses slows network performance.

---

## Interview Ready Answer

Common performance bottlenecks in Node.js include blocking the event loop with synchronous operations, CPU-intensive tasks, slow database queries, memory leaks, excessive logging, large payload sizes, and slow external API calls. Since Node.js runs on a single thread, blocking operations can affect all incoming requests, making efficient asynchronous design essential.

---

# 109. How do you handle CPU-intensive tasks in Node.js?

## Concepts

CPU-intensive tasks block the event loop.

Examples:

- Image processing
- Cryptography
- Data analysis
- Large calculations

---

### Solution 1: Worker Threads

Worker threads run tasks in separate threads.

Example:

```js
const { Worker } = require("worker_threads");

new Worker("./worker.js");
```

worker.js:

```js
const { parentPort } = require("worker_threads");

let sum = 0;
for (let i = 0; i < 1e9; i++) {
  sum += i;
}

parentPort.postMessage(sum);
```

---

### Solution 2: Child Processes

Spawn separate processes.

```js
const { fork } = require("child_process");

const child = fork("worker.js");
```

---

### Solution 3: Background Job Queues

Use queue systems like:

- Bull
- RabbitMQ
- Kafka

Example tasks:

- Email sending
- Image resizing
- Video processing

---

## Interview Ready Answer

CPU-intensive tasks block the Node.js event loop and degrade performance. To handle them efficiently, they should be offloaded to worker threads, child processes, or background job queues. Worker threads allow parallel execution without blocking the main event loop, making them suitable for computationally expensive tasks.

---

# 110. What is memory leak and how do you detect it?

## Concepts

A memory leak occurs when:

- Memory is allocated
- But never released

Over time:

- Memory usage increases
- Application may crash

---

### Common Causes

1. Global variables
2. Unclosed database connections
3. Event listeners not removed
4. Large objects stored in memory
5. Improper caching

---

### Example of Memory Leak

```js
const arr = [];

setInterval(() => {
  arr.push(new Array(1000000).fill("data"));
}, 1000);
```

Memory grows continuously.

---

### Detection Tools

1. Chrome DevTools
2. Node.js Inspector
3. Heap snapshots
4. `process.memoryUsage()`
5. Clinic.js
6. Heapdump

Example:

```js
console.log(process.memoryUsage());
```

---

## Interview Ready Answer

A memory leak occurs when allocated memory is not released after it is no longer needed. This causes memory usage to grow over time, potentially crashing the application. Memory leaks can be detected using tools such as Node.js inspector, heap snapshots, Chrome DevTools, and process.memoryUsage(). Common causes include global variables, unremoved event listeners, and improperly managed caches.

---

# 111. How do you use the `--inspect` flag for debugging?

## Concepts

The `--inspect` flag enables the **Node.js debugger**.

It allows:

- Remote debugging
- Breakpoints
- Memory inspection
- Performance profiling

---

### Start Node with Debugging

```bash
node --inspect app.js
```

Output:

```
Debugger listening on ws://127.0.0.1:9229
```

---

### Open Chrome DevTools

Visit:

```
chrome://inspect
```

Then click **Inspect**.

---

### Features

You can:

- Set breakpoints
- Inspect variables
- Step through code
- Capture heap snapshots
- Analyze CPU usage

---

## Interview Ready Answer

The `--inspect` flag starts Node.js in debugging mode, allowing developers to connect debugging tools such as Chrome DevTools. It enables features like breakpoints, step execution, memory inspection, and performance profiling. Developers can start debugging using `node --inspect app.js` and connect through the Chrome `chrome://inspect` interface.

---

# 112. What are different caching strategies in Node.js?

## Concepts

Caching stores frequently accessed data temporarily to reduce expensive operations.

---

### Common Caching Strategies

1. In-memory caching
2. Distributed caching
3. HTTP caching
4. Database query caching
5. CDN caching

---

### Example: In-Memory Cache

```js
const cache = {};

function getUser(id) {
  if (cache[id]) return cache[id];

  const user = db.findUser(id);
  cache[id] = user;

  return user;
}
```

---

### Cache Types

| Cache Type      | Example      |
| --------------- | ------------ |
| In-memory       | Node memory  |
| Distributed     | Redis        |
| Edge caching    | CDN          |
| Browser caching | HTTP headers |

---

## Interview Ready Answer

Caching strategies in Node.js include in-memory caching, distributed caching using tools like Redis, HTTP caching with cache headers, database query caching, and CDN caching. Caching improves performance by reducing repeated computations and database calls.

---

# 113. How do you implement in-memory caching?

## Concepts

In-memory caching stores data inside the application's memory.

Advantages:

- Extremely fast
- No network latency

Disadvantages:

- Data lost on restart
- Not suitable for multiple instances

---

### Example Implementation

```js
const cache = new Map();

function getData(key) {
  if (cache.has(key)) {
    return cache.get(key);
  }

  const data = expensiveOperation();

  cache.set(key, data);

  return data;
}
```

---

### Using Libraries

Popular packages:

- node-cache
- lru-cache

Example:

```js
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 60 });

cache.set("user", { name: "Tanish" });
console.log(cache.get("user"));
```

---

## Interview Ready Answer

In-memory caching stores frequently accessed data directly in the application’s memory using objects, Maps, or caching libraries like node-cache or lru-cache. It significantly improves response time by avoiding repeated database queries. However, it is not suitable for distributed systems because the cache is lost if the application restarts.

---

# 114. When would you use Redis for caching?

## Concepts

Redis is an **in-memory data store** used for:

- Caching
- Message queues
- Session storage
- Pub/Sub systems

---

### When Redis is Useful

1. Multiple server instances
2. Shared cache across services
3. Session storage
4. Rate limiting
5. Real-time analytics

---

### Example Redis Cache

```js
const redis = require("redis");

const client = redis.createClient();

client.set("user:1", JSON.stringify({ name: "Tanish" }));

client.get("user:1", (err, data) => {
  console.log(JSON.parse(data));
});
```

---

## Interview Ready Answer

Redis is used for caching when multiple application instances need to share cached data. Unlike in-memory caching, Redis provides a centralized distributed cache that persists independently of the application process. It is commonly used for session storage, rate limiting, API caching, and real-time analytics.

---

# 115. How do you scale Node.js applications?

## Concepts

Scaling means increasing system capacity to handle more users.

Two approaches:

1. Vertical scaling
2. Horizontal scaling

---

### Vertical Scaling

Increase server resources.

Example:

- More CPU
- More RAM

---

### Horizontal Scaling

Run multiple instances.

Example architecture:

Client
↓
Load Balancer
↓
Node Instance 1
Node Instance 2
Node Instance 3

---

### Node Clustering

```js
const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  const cpuCount = os.cpus().length;

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
}
```

---

## Interview Ready Answer

Node.js applications can be scaled using vertical scaling by increasing server resources or horizontal scaling by running multiple instances behind a load balancer. Horizontal scaling is more common in production and can be implemented using clustering, container orchestration, or cloud auto-scaling systems.

---

# 116. What is load balancing and how do you implement it?

## Concepts

Load balancing distributes incoming requests across multiple servers.

Benefits:

- High availability
- Better performance
- Fault tolerance

---

### Load Balancer Flow

Client
↓
Load Balancer
↓
Server 1
Server 2
Server 3

---

### Implementation Options

1. Nginx
2. HAProxy
3. Cloud Load Balancers
4. Node cluster module

---

### Example Nginx Configuration

```
upstream node_app {
  server localhost:3000;
  server localhost:3001;
}

server {
  listen 80;

  location / {
    proxy_pass http://node_app;
  }
}
```

---

## Interview Ready Answer

Load balancing distributes incoming traffic across multiple server instances to improve performance and reliability. It can be implemented using tools such as Nginx, HAProxy, cloud load balancers, or Node.js clustering. The load balancer ensures no single server becomes overloaded.

---

# 117. How do you handle sessions in a scaled application?

## Concepts

Problem:

If multiple servers exist:

Request 1 → Server A
Request 2 → Server B

Session stored in Server A memory becomes inaccessible.

---

### Solutions

1. Centralized Session Store
2. Sticky Sessions
3. Token-Based Authentication

---

### Redis Session Store Example

```js
const session = require("express-session");
const RedisStore = require("connect-redis")(session);

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "secret",
  }),
);
```

---

### JWT-Based Authentication

Instead of sessions:

- Use tokens
- No server memory storage needed

---

## Interview Ready Answer

In a scaled Node.js application, sessions cannot be stored in local server memory because requests may reach different servers. To solve this, sessions are stored in a centralized store such as Redis, or sticky sessions are used at the load balancer level. Alternatively, token-based authentication like JWT eliminates server-side session storage altogether.

# VII. SECURITY

---

# 118. What are common security vulnerabilities in Node.js?

## Concepts

Node.js applications face many common web security risks. Most vulnerabilities come from **improper input validation, insecure dependencies, and poor authentication practices**.

---

### Common Security Vulnerabilities

#### 1. SQL Injection

Occurs when user input is directly inserted into SQL queries.

Example (vulnerable):

```js
const query = "SELECT * FROM users WHERE email = '" + req.body.email + "'";
```

Attackers can inject malicious SQL.

---

#### 2. Cross-Site Scripting (XSS)

Occurs when malicious scripts are injected into webpages and executed in the user’s browser.

Example:

```
<script>alert("hacked")</script>
```

---

#### 3. Cross-Site Request Forgery (CSRF)

A malicious website forces a logged-in user to perform unwanted actions on another site.

Example:

- Transfer money
- Change password

---

#### 4. Insecure Dependencies

Node projects rely heavily on npm packages.

Risks:

- Outdated libraries
- Vulnerable dependencies

Check using:

```
npm audit
```

---

#### 5. Sensitive Data Exposure

Examples:

- API keys in code
- Passwords in logs
- Secrets in GitHub

---

#### 6. Denial of Service (DoS)

Attackers send massive requests to overwhelm the server.

Example:

- Large payloads
- Request floods

---

### Best Security Practices

- Validate input
- Use HTTPS
- Sanitize user data
- Secure cookies
- Use environment variables
- Implement rate limiting

---

## Interview Ready Answer

Common security vulnerabilities in Node.js include SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), insecure dependencies, sensitive data exposure, and denial-of-service attacks. These vulnerabilities typically occur due to improper input validation, insecure package usage, and weak authentication mechanisms. Best practices include input validation, using HTTPS, dependency scanning, secure environment variables, and rate limiting.

---

# 119. How do you prevent SQL injection?

## Concepts

SQL Injection happens when **user input manipulates SQL queries**.

Example attack:

```
' OR 1=1 --
```

This may bypass authentication.

---

### Wrong Approach (Vulnerable)

```js
const query = "SELECT * FROM users WHERE email = '" + email + "'";
```

User input directly modifies SQL.

---

### Correct Approach: Parameterized Queries

Example using **PostgreSQL**

```js
const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
```

Here:

- Query structure fixed
- Input treated as data

---

### Using ORM / Query Builders

Example with Prisma:

```js
const user = await prisma.user.findUnique({
  where: { email: email },
});
```

ORM handles escaping automatically.

---

### Additional Security Practices

- Validate inputs
- Limit query permissions
- Use prepared statements
- Use ORM frameworks

---

## Interview Ready Answer

SQL injection can be prevented by using parameterized queries or prepared statements instead of directly concatenating user input into SQL queries. ORMs such as Prisma or Sequelize also help prevent SQL injection by automatically escaping inputs. Additionally, input validation and limiting database permissions further improve security.

---

# 120. How do you prevent XSS attacks?

## Concepts

XSS occurs when **malicious scripts are injected into web pages**.

Attack example:

```
<script>alert("hacked")</script>
```

If rendered in HTML, it executes in the browser.

---

### Types of XSS

1. Stored XSS
2. Reflected XSS
3. DOM-based XSS

---

### Prevention Techniques

#### 1. Input Sanitization

Remove malicious scripts.

Example using DOMPurify:

```js
const sanitize = require("sanitize-html");

const clean = sanitize(userInput);
```

---

#### 2. Output Escaping

Convert HTML characters.

Example:

```
< → &lt;
> → &gt;
```

---

#### 3. Use Helmet Middleware

Helmet secures HTTP headers.

```js
const helmet = require("helmet");

app.use(helmet());
```

---

#### 4. Content Security Policy (CSP)

Restricts script sources.

Example header:

```
Content-Security-Policy: default-src 'self'
```

---

## Interview Ready Answer

XSS attacks occur when malicious scripts are injected into web pages and executed in the user's browser. Prevention techniques include sanitizing user inputs, escaping output before rendering HTML, using security headers with Helmet middleware, and implementing Content Security Policy. These measures prevent malicious scripts from executing in the browser.

---

# 121. What is CSRF and how do you prevent it?

## Concepts

CSRF (Cross-Site Request Forgery) tricks a user’s browser into sending **unauthorized requests** to a trusted application.

Example:

User logged into bank → visits malicious site → site triggers transfer request.

---

### How CSRF Works

1. User logged into website
2. Browser stores session cookies
3. Malicious site sends request
4. Browser automatically attaches cookies

Server thinks request is valid.

---

### Prevention Methods

#### 1. CSRF Tokens

Server generates unique token.

Example:

```js
const csrf = require("csurf");

app.use(csrf());
```

Token must match request.

---

#### 2. SameSite Cookies

Prevent cross-site cookie sending.

```
Set-Cookie: SameSite=Strict
```

---

#### 3. Check Origin / Referer Headers

Verify request source.

---

## Interview Ready Answer

CSRF is an attack where a malicious site tricks a user’s browser into sending unauthorized requests to a trusted application. It happens because browsers automatically include cookies in requests. Prevention techniques include using CSRF tokens, enabling SameSite cookies, and validating request origin headers.

---

# 122. How do you secure environment variables?

## Concepts

Environment variables store sensitive configuration such as:

- API keys
- Database credentials
- JWT secrets

Example:

```
DB_PASSWORD=mysecret
JWT_SECRET=supersecret
```

---

### Best Practices

#### 1. Use `.env` Files

Example:

```
PORT=5000
DB_URL=mongodb://localhost:27017/app
```

Load with dotenv:

```js
require("dotenv").config();
```

---

#### 2. Do Not Commit `.env` to Git

Add to `.gitignore`

```
.env
```

---

#### 3. Use Secret Managers (Production)

Examples:

- AWS Secrets Manager
- HashiCorp Vault
- Docker secrets

---

#### 4. Limit Access

Only backend services should access secrets.

---

## Interview Ready Answer

Environment variables are used to store sensitive configuration such as API keys, database credentials, and JWT secrets. They should be stored in `.env` files during development and managed through secure secret management systems in production. The `.env` file should never be committed to version control, and access to environment variables should be restricted to the server environment.

---

# 123. How do you implement rate limiting?

## Concepts

Rate limiting restricts the **number of requests a client can make within a time window**.

Purpose:

- Prevent DDoS
- Prevent brute-force login attacks
- Protect APIs

Example rule:

```
100 requests per 15 minutes
```

---

### Implementing Rate Limiting (Express)

Using `express-rate-limit`

```js
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);
```

---

### Advanced Approach (Redis)

For distributed systems:

- Use Redis
- Store request counters

---

### Example Use Cases

- Login endpoints
- Public APIs
- Authentication endpoints

---

## Interview Ready Answer

Rate limiting restricts how many requests a client can send within a specified time window. It helps prevent denial-of-service attacks and brute-force login attempts. In Express.js, rate limiting can be implemented using middleware like `express-rate-limit`. In distributed systems, Redis is often used to store request counters across multiple servers.

---

# 124. How do you implement authentication in Node.js?

## Concepts

Authentication verifies **who the user is**.

Common methods:

1. JWT authentication
2. Session-based authentication
3. OAuth
4. API keys

---

### Example JWT Authentication Flow

1. User logs in
2. Server verifies credentials
3. Server generates token
4. Client sends token with requests

---

### Example Implementation

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
  expiresIn: "1h",
});
```

Middleware verification:

```js
jwt.verify(token, process.env.JWT_SECRET);
```

---

## Interview Ready Answer

Authentication in Node.js verifies a user’s identity before granting access to protected resources. Common approaches include JWT-based authentication, session-based authentication, and OAuth. Typically, the server validates credentials and generates a token or session that the client sends with future requests for verification.

---

# 125. What is JWT and how do you use it?

## Concepts

JWT = JSON Web Token

Used for **stateless authentication**.

Structure:

```
HEADER.PAYLOAD.SIGNATURE
```

Example:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

### How JWT Works

1. User logs in
2. Server creates token
3. Client stores token
4. Client sends token in request header

Example:

```
Authorization: Bearer token
```

---

### Code Example

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
  expiresIn: "1h",
});
```

Verify token:

```js
jwt.verify(token, process.env.JWT_SECRET);
```

---

## Interview Ready Answer

JWT is a compact, self-contained token used for stateless authentication. It contains encoded user information and is signed using a secret key. After login, the server issues a JWT, and the client includes it in the Authorization header for protected requests. The server verifies the token signature to authenticate the user.

---

# 126. How do you handle sessions?

## Concepts

Sessions store user state **on the server**.

Client stores only:

- Session ID

---

### Express Session Example

```js
const session = require("express-session");

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  }),
);
```

---

### Storing Sessions in Redis

Recommended for scaling.

```js
connect - redis;
```

---

### Session Flow

1. User logs in
2. Server creates session
3. Session ID stored in cookie
4. Server retrieves session on request

---

## Interview Ready Answer

Sessions maintain user state on the server by storing session data associated with a unique session ID. The session ID is stored in the user's browser cookie and sent with each request. On the server, session data can be stored in memory or external stores like Redis for scalability.

---

# 127. What is OAuth and how do you implement it?

## Concepts

OAuth allows users to **log in using third-party providers**.

Examples:

- Google Login
- GitHub Login
- Facebook Login

---

### OAuth Flow

1. User clicks "Login with Google"
2. Redirect to Google
3. User grants permission
4. Google returns authorization code
5. Server exchanges code for access token

---

### Implementation (Passport.js)

Example:

```js
passport.use(
  new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  }),
);
```

---

## Interview Ready Answer

OAuth is an authorization framework that allows users to log in using third-party identity providers like Google or GitHub. The user is redirected to the provider for authentication, and the provider returns an authorization code that the server exchanges for an access token. Libraries like Passport.js simplify OAuth implementation in Node.js.

---

# 128. How do you hash and salt passwords?

## Concepts

Passwords must **never be stored as plain text**.

Instead use:

- Hashing
- Salting

---

### Hashing

Transforms password → fixed-length string.

Example:

```
password123 → hashed value
```

---

### Salting

Adds random value before hashing.

Purpose:

- Prevent rainbow table attacks

---

### Implementation Using bcrypt

```js
const bcrypt = require("bcrypt");

const hashedPassword = await bcrypt.hash(password, 10);
```

Verify password:

```js
const isValid = await bcrypt.compare(password, storedHash);
```

---

### Why bcrypt?

- Built-in salting
- Slow hashing (security)
- Resistant to brute-force attacks

---

## Interview Ready Answer

Passwords should be securely stored using hashing algorithms such as bcrypt. Hashing converts the password into an irreversible fixed-length value, while salting adds a random value before hashing to prevent rainbow table attacks. During login, the entered password is hashed and compared with the stored hash using bcrypt’s compare function.

# VIII. DATABASE INTEGRATION

---

# 129. How do you connect Node.js to databases?

## Concepts

Node.js connects to databases using **database drivers or ORMs/ODMs**.

Common databases used with Node.js:

- MongoDB
- PostgreSQL
- MySQL
- Redis

Connection usually happens when the **application starts**, and the connection instance is reused across the app.

---

### Common Approaches

1. Native database drivers
2. ORMs / ODMs
3. Connection pools

---

### Example: MongoDB Connection (Mongoose)

```js
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});
```

---

### Example: PostgreSQL Connection

```js
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

pool.query("SELECT NOW()", (err, res) => {
  console.log(res.rows);
});
```

---

### Best Practices

- Store credentials in environment variables
- Use connection pooling
- Handle connection errors
- Reuse database connection across requests

---

## Interview Ready Answer

Node.js connects to databases using database drivers or ORMs/ODMs. For example, MongoDB is commonly connected using Mongoose, while SQL databases like PostgreSQL use libraries such as `pg`. The connection is usually established during application startup and reused across the application. Best practices include using environment variables for credentials, enabling connection pooling, and handling connection errors properly.

---

# 130. What is connection pooling and why is it important?

## Concepts

Connection pooling means **maintaining a pool of reusable database connections instead of creating a new one for each request**.

Without pooling:

Every request creates a new DB connection → expensive.

With pooling:

Connections are reused.

---

### How It Works

Request arrives
→ Connection taken from pool
→ Query executed
→ Connection returned to pool

---

### Example (PostgreSQL Pool)

```js
const { Pool } = require("pg");

const pool = new Pool({
  max: 10,
  connectionString: process.env.DB_URL,
});

async function getUsers() {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
}
```

---

### Benefits

1. Improves performance
2. Reduces connection overhead
3. Prevents database overload
4. Supports concurrent requests

---

### Typical Pool Size

Common range:

```
5 – 20 connections
```

Depends on:

- server resources
- DB capacity
- traffic

---

## Interview Ready Answer

Connection pooling is a technique where a pool of reusable database connections is maintained instead of creating a new connection for every request. When a request needs to interact with the database, it uses a connection from the pool and returns it afterward. This improves performance, reduces connection overhead, and prevents the database from being overwhelmed by too many connection requests.

---

# 131. How do you handle database migrations?

## Concepts

Database migrations are used to **manage schema changes over time**.

Examples:

- Creating tables
- Adding columns
- Updating indexes
- Modifying constraints

Migrations help maintain **version control for database schema**.

---

### Migration Workflow

1. Create migration file
2. Define schema change
3. Run migration
4. Database schema updated

---

### Example Tools

- Prisma Migrate
- Sequelize CLI
- Knex migrations
- Flyway

---

### Example (Prisma Migration)

Create migration:

```bash
npx prisma migrate dev --name add_users_table
```

Example schema change:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
```

Run migration:

```
Database updated automatically
```

---

### Why Migrations Are Important

- Track schema changes
- Maintain consistency across environments
- Support team collaboration
- Enable rollback

---

## Interview Ready Answer

Database migrations are used to manage and version-control schema changes such as creating tables, adding columns, or modifying indexes. Migration tools like Prisma Migrate, Sequelize CLI, or Knex allow developers to define schema updates in migration files and apply them to the database in a controlled and repeatable way. This ensures consistency across development, staging, and production environments.

---

# 132. How do you use Mongoose with MongoDB?

## Concepts

Mongoose is an **ODM (Object Data Modeling library)** for MongoDB.

It provides:

- Schema definitions
- Model-based interaction
- Validation
- Middleware
- Query helpers

---

### Installation

```bash
npm install mongoose
```

---

### Basic Workflow

1. Connect to MongoDB
2. Define schema
3. Create model
4. Perform CRUD operations

---

### Example

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/app");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

const user = new User({
  name: "Tanish",
  email: "tanish@email.com",
});

user.save();
```

---

### Query Example

```js
const users = await User.find();
```

---

## Interview Ready Answer

Mongoose is an ODM library that provides a structured way to interact with MongoDB in Node.js applications. It allows developers to define schemas for data models, apply validation rules, and perform CRUD operations using models. Mongoose simplifies MongoDB interactions and adds features like middleware, query helpers, and schema-based validation.

---

# 133. What are schemas and models in Mongoose?

## Concepts

### Schema

A schema defines **the structure of documents in a MongoDB collection**.

It specifies:

- fields
- data types
- validation rules
- default values

---

### Example Schema

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
});
```

---

### Model

A model is a **constructor compiled from a schema**.

Used to interact with the database.

Example:

```js
const User = mongoose.model("User", userSchema);
```

---

### Using the Model

```js
const user = new User({
  name: "John",
  email: "john@email.com",
});

await user.save();
```

---

### Relationship

```
Schema → Defines structure
Model → Interface to database
```

---

## Interview Ready Answer

In Mongoose, a schema defines the structure and validation rules of documents within a MongoDB collection. A model is created from a schema and provides an interface for interacting with the database. Using models, developers can create, read, update, and delete documents while ensuring they follow the defined schema.

---

# 134. How do you handle relationships in MongoDB?

## Concepts

MongoDB supports relationships using two main approaches.

---

### 1. Embedding (Denormalization)

Related data stored inside the same document.

Example:

```js
{
  name: "John",
  orders: [
    { product: "Laptop", price: 1000 },
    { product: "Mouse", price: 20 }
  ]
}
```

Advantages:

- Faster reads
- Single query

---

### 2. Referencing (Normalization)

Store reference IDs.

Example:

User document:

```js
{
  name: "John";
}
```

Order document:

```js
{
  userId: "123",
  product: "Laptop"
}
```

---

### Mongoose Population Example

```js
const Order = await Order.find().populate("userId");
```

---

### When to Use What

Embedding:

- Small related data
- One-to-few relationships

Referencing:

- Large datasets
- Many-to-many relationships

---

## Interview Ready Answer

Relationships in MongoDB can be handled using embedding or referencing. Embedding stores related data within the same document, which improves read performance for small related datasets. Referencing stores document IDs and links related collections, similar to foreign keys in relational databases. Mongoose provides the `populate()` method to retrieve referenced documents.

---

# 135. What are middleware in Mongoose?

## Concepts

Middleware are functions executed **before or after certain operations**.

They are also called **hooks**.

Used for:

- validation
- logging
- hashing passwords
- modifying data

---

### Types of Middleware

1. Pre middleware
2. Post middleware

---

### Example: Pre Save Hook

```js
userSchema.pre("save", async function (next) {
  console.log("Before saving user");
  next();
});
```

---

### Example: Password Hashing

```js
const bcrypt = require("bcrypt");

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});
```

---

## Interview Ready Answer

Middleware in Mongoose are functions that run before or after database operations such as saving, updating, or deleting documents. They are commonly used for tasks like validation, logging, and password hashing. Pre middleware runs before an operation, while post middleware runs after the operation completes.

---

# 136. How do you connect to SQL databases from Node.js?

## Concepts

Node.js connects to SQL databases using database drivers or ORMs.

Common SQL databases:

- PostgreSQL
- MySQL
- SQLite
- SQL Server

---

### Using PostgreSQL Driver

```js
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

const result = await pool.query("SELECT * FROM users");
console.log(result.rows);
```

---

### Using MySQL

```js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
});
```

---

### Using ORMs

- Prisma
- Sequelize
- TypeORM
- Knex

---

## Interview Ready Answer

Node.js connects to SQL databases using database drivers such as `pg` for PostgreSQL or `mysql2` for MySQL. These drivers allow executing SQL queries and managing database connections. ORMs like Prisma or Sequelize provide higher-level abstractions that simplify database interactions and schema management.

---

# 137. What are ORMs and how do you use them?

## Concepts

ORM = Object Relational Mapping.

ORMs map **database tables → JavaScript objects**.

Instead of writing SQL queries, developers interact with objects.

---

### Example Without ORM

```sql
SELECT * FROM users WHERE email = 'test@email.com'
```

---

### Example With ORM

```js
const user = await prisma.user.findUnique({
  where: { email: "test@email.com" },
});
```

---

### Popular ORMs

- Prisma
- Sequelize
- TypeORM
- Objection.js

---

### Benefits

- Simplifies queries
- Prevents SQL injection
- Provides schema management
- Improves developer productivity

---

## Interview Ready Answer

ORM stands for Object Relational Mapping. It allows developers to interact with relational databases using programming language objects instead of writing raw SQL queries. ORMs like Prisma, Sequelize, and TypeORM map database tables to application models, simplifying CRUD operations and improving maintainability.

---

# 138. How do you prevent SQL injection?

## Concepts

SQL injection happens when **malicious input modifies database queries**.

Example attack:

```
' OR 1=1 --
```

---

### Prevention Methods

1. Parameterized queries
2. Prepared statements
3. ORM frameworks
4. Input validation

---

### Example Using Parameterized Query

```js
const result = await pool.query("SELECT * FROM users WHERE email = $1", [
  email,
]);
```

---

### Example Using ORM

```js
const user = await prisma.user.findUnique({
  where: { email },
});
```

ORM automatically escapes inputs.

---

## Interview Ready Answer

SQL injection can be prevented by using parameterized queries or prepared statements instead of concatenating user input directly into SQL queries. ORMs like Prisma or Sequelize also help prevent injection by safely handling query parameters. Additionally, validating user input and limiting database permissions further improves security.

---

## **PART 2: EXPRESS.JS INTERVIEW QUESTIONS**

---

# 1. What is Express.js and why is it used?

## Concepts

### What is Express.js?

- Express.js is a **minimal and flexible web framework for Node.js**
- It is built on top of Node’s **http module**
- Used for building:
  - REST APIs
  - Web applications
  - Backend services
  - Microservices

Express simplifies server development by providing **higher-level abstractions** over the Node.js HTTP module.

---

### Why Express.js is Used

Using only the Node.js `http` module requires writing a lot of repetitive code for:

- Routing
- Request parsing
- Middleware
- Error handling
- API structure

Express solves these problems by providing:

1. **Simple routing system**
2. **Middleware architecture**
3. **Easy request and response handling**
4. **Integration with databases**
5. **Large ecosystem of plugins**

---

### Example Use Cases

Express is commonly used for:

- REST API servers
- Backend for SPAs (React, Next.js, Angular)
- Authentication systems
- Microservices architecture

---

## Code Example

### Basic Express Server

```js
const express = require("express");

const app = express();

// Route
app.get("/", (req, res) => {
  res.send("Hello from Express");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Explanation:

- `express()` creates an application instance
- `app.get()` defines a route
- `req` represents the request
- `res` sends the response
- `app.listen()` starts the server

---

## Interview Ready Answer

Express.js is a minimal and flexible web framework built on top of Node.js. It simplifies backend development by providing features such as routing, middleware, and simplified request and response handling. Instead of manually managing HTTP requests using the core Node.js http module, Express provides a structured and scalable way to build APIs and web applications. It is widely used for building RESTful APIs and backend services in modern JavaScript applications.

---

# 2. Differentiate between Express.js and Node.js HTTP module.

## Concepts

### Node.js HTTP Module

The `http` module is a **built-in module in Node.js** used to create web servers.

Characteristics:

- Low-level API
- Manual routing
- Manual request parsing
- No middleware support
- More boilerplate code

Example:

```js
const http = require("http");

http
  .createServer((req, res) => {
    res.end("Hello World");
  })
  .listen(3000);
```

---

### Express.js

Express is a **framework built on top of the Node.js http module**.

Characteristics:

- Higher-level abstraction
- Built-in routing
- Middleware support
- Simplified API handling
- Large ecosystem

Example:

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
```

---

### Key Differences

| Feature           | Node.js HTTP Module | Express.js           |
| ----------------- | ------------------- | -------------------- |
| Level             | Low-level API       | High-level framework |
| Routing           | Manual              | Built-in routing     |
| Middleware        | Not available       | Supported            |
| Code complexity   | More boilerplate    | Cleaner code         |
| Development speed | Slower              | Faster               |

---

## Code Example

### HTTP Module Routing (Manual)

```js
const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/users" && req.method === "GET") {
      res.end("Users List");
    } else {
      res.end("Not Found");
    }
  })
  .listen(3000);
```

---

### Express Routing

```js
const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.send("Users List");
});

app.listen(3000);
```

---

## Interview Ready Answer

The Node.js HTTP module is a low-level module used to create web servers and handle HTTP requests manually. It requires writing more boilerplate code for routing, request parsing, and middleware handling. Express.js is a higher-level framework built on top of the HTTP module that simplifies server development by providing built-in routing, middleware support, and cleaner APIs. As a result, Express significantly improves developer productivity when building APIs and web applications.

---

# 3. What are the main features of Express.js?

## Concepts

Express.js provides several features that simplify backend development.

---

### 1. Routing

Express provides a powerful routing system to handle different HTTP methods and endpoints.

Example:

```js
app.get("/users", handler);
app.post("/users", handler);
```

---

### 2. Middleware Support

Middleware functions process requests before sending responses.

Examples:

- Logging
- Authentication
- Request validation

Example:

```js
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
```

---

### 3. Request and Response Handling

Express simplifies request and response management.

Example:

```js
req.params;
req.query;
req.body;
res.json();
res.send();
```

---

### 4. Static File Serving

Express can serve static assets such as images, CSS, and JavaScript.

Example:

```js
app.use(express.static("public"));
```

---

### 5. Third-party Middleware Integration

Express supports many middleware libraries like:

- body-parser
- cors
- helmet
- morgan
- express-validator

---

### 6. Template Engine Support

Express can render dynamic HTML using template engines such as:

- EJS
- Pug
- Handlebars

---

## Code Example

```js
const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Route
app.get("/api", (req, res) => {
  res.json({ message: "API working" });
});

app.listen(3000);
```

Explanation:

- `express.json()` parses JSON request bodies
- `res.json()` sends JSON responses

---

## Interview Ready Answer

Express.js provides several features that simplify backend development, including a powerful routing system, middleware architecture, simplified request and response handling, static file serving, and integration with third-party middleware. These features allow developers to build scalable APIs and web applications quickly while keeping the codebase clean and maintainable.

---

# 4. How do you create a basic Express.js application?

## Concepts

Steps to create a basic Express application:

1. Install Express
2. Import Express
3. Create application instance
4. Define routes
5. Start server

---

### Step 1: Install Express

```bash
npm install express
```

---

### Step 2: Import Express

```js
const express = require("express");
```

---

### Step 3: Create App Instance

```js
const app = express();
```

---

### Step 4: Define Routes

Routes define how the server responds to requests.

```js
app.get("/", (req, res) => {
  res.send("Welcome to Express");
});
```

---

### Step 5: Start Server

```js
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

## Code Example

```js
const express = require("express");

const app = express();

// Route
app.get("/", (req, res) => {
  res.send("Hello Express App");
});

// Server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
```

---

## Interview Ready Answer

A basic Express.js application is created by first installing the Express package, then importing it into the application. Next, an Express application instance is created using `express()`. Routes are defined using methods such as `app.get()` or `app.post()`, and finally the server is started using `app.listen()` to listen for incoming requests on a specified port.

---

# 5. What is the default port for Express.js applications?

## Concepts

Express.js itself **does not enforce a fixed default port**.

However, by convention:

- Developers commonly use **port 3000** during development.

Production environments often use:

- 80 → HTTP
- 443 → HTTPS

---

### Why Port 3000?

- Avoids conflicts with system services
- Standard development convention
- Used by many Node.js frameworks

---

### Environment Variable Usage

In production, the port is usually defined using an environment variable.

Example:

```js
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Explanation:

- Uses environment variable if available
- Falls back to port 3000

---

## Code Example

```js
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
```

---

## Interview Ready Answer

Express.js does not enforce a fixed default port, but port 3000 is commonly used during development. In production environments, the port is usually defined through environment variables such as `process.env.PORT`, allowing flexible deployment across different systems and hosting platforms.

# 6. What is routing in Express.js?

## Concepts

### What is Routing?

Routing in Express.js refers to **mapping incoming HTTP requests to specific handler functions**.

A route is defined by:

- **HTTP Method** (GET, POST, PUT, DELETE)
- **URL Path**
- **Callback Handler**

Flow:

Client Request
→ Express Router
→ Matching Route
→ Handler Function
→ Response

---

### Example Routes

Examples:

```
GET /users
POST /users
GET /users/:id
```

Each route executes different logic based on the path and method.

---

### Why Routing is Important

Routing allows the server to:

- Handle different endpoints
- Separate API logic
- Build REST APIs
- Organize application structure

---

## Code Example

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", (req, res) => {
  res.send("Users List");
});

app.post("/users", (req, res) => {
  res.send("User Created");
});

app.listen(3000);
```

Explanation:

- `/` handles homepage
- `/users` handles user resource
- Different HTTP methods map to different logic

---

## Interview Ready Answer

Routing in Express.js is the mechanism used to define how an application responds to client requests for specific endpoints and HTTP methods. A route consists of a URL path, an HTTP method, and a handler function that processes the request and sends a response. Routing enables building structured APIs and organizing server logic effectively.

---

# 7. How do you define routes in Express.js?

## Concepts

Routes are defined using the **Express application object (`app`)**.

Syntax:

```
app.METHOD(PATH, HANDLER)
```

Where:

- METHOD → HTTP method
- PATH → Endpoint URL
- HANDLER → Function executed when route is matched

---

### Common HTTP Methods

- `app.get()` → Retrieve data
- `app.post()` → Create data
- `app.put()` → Update data
- `app.delete()` → Delete data

---

### Route Handler Function

The handler receives:

- `req` → request object
- `res` → response object

---

## Code Example

```js
const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  res.send("List of products");
});

app.post("/products", (req, res) => {
  res.send("Product created");
});

app.put("/products/1", (req, res) => {
  res.send("Product updated");
});

app.delete("/products/1", (req, res) => {
  res.send("Product deleted");
});

app.listen(3000);
```

Explanation:

- Each HTTP method maps to a different action
- Express automatically matches incoming requests

---

## Interview Ready Answer

Routes in Express.js are defined using methods like `app.get()`, `app.post()`, `app.put()`, and `app.delete()`. Each route specifies a URL path and a handler function that processes the request and returns a response. This approach allows building RESTful APIs by mapping HTTP methods to specific operations on resources.

---

# 8. What are route parameters and how do you use them?

## Concepts

Route parameters allow **dynamic values in URL paths**.

Syntax:

```
/route/:parameterName
```

Express extracts parameters from the URL and stores them in:

```
req.params
```

---

### Example URL

```
GET /users/123
```

Route:

```
/users/:id
```

Here:

- `id` is a route parameter
- Value = `123`

---

### Accessing Parameters

Use:

```
req.params.parameterName
```

---

## Code Example

```js
const express = require("express");

const app = express();

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.send(`User ID: ${userId}`);
});

app.listen(3000);
```

Example request:

```
GET /users/42
```

Response:

```
User ID: 42
```

---

## Interview Ready Answer

Route parameters are dynamic values embedded within a URL path that allow handling variable data in routes. They are defined using a colon syntax like `/users/:id`. Express automatically extracts these parameters and makes them available in the `req.params` object, allowing the server to process requests for specific resources.

---

# 9. How do you handle query parameters in Express.js?

## Concepts

Query parameters are values passed **after the `?` in a URL**.

Example:

```
/products?category=books&page=2
```

Query parameters are accessed using:

```
req.query
```

---

### Characteristics

- Optional parameters
- Used for filtering
- Used for pagination
- Used for search queries

---

### Example URL

```
GET /products?category=electronics&sort=price
```

Query object:

```js
{
  category: "electronics",
  sort: "price"
}
```

---

## Code Example

```js
const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  const category = req.query.category;
  const page = req.query.page;

  res.send(`Category: ${category}, Page: ${page}`);
});

app.listen(3000);
```

Example request:

```
/products?category=books&page=2
```

---

## Interview Ready Answer

Query parameters are values included in the URL after a question mark and are commonly used for filtering, pagination, and searching. In Express.js, query parameters are automatically parsed and available in the `req.query` object. This allows applications to dynamically process requests based on optional parameters.

---

# 10. What is the difference between `app.get()`, `app.post()`, `app.put()`, and `app.delete()`?

## Concepts

These methods define routes for **different HTTP methods**.

Each method corresponds to a specific **CRUD operation**.

---

### HTTP Methods Mapping

| Method | Purpose         | CRUD Operation |
| ------ | --------------- | -------------- |
| GET    | Retrieve data   | Read           |
| POST   | Create resource | Create         |
| PUT    | Update resource | Update         |
| DELETE | Remove resource | Delete         |

---

### Example API

```
GET /users
POST /users
PUT /users/1
DELETE /users/1
```

---

## Code Example

```js
const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.send("Get all users");
});

app.post("/users", (req, res) => {
  res.send("Create new user");
});

app.put("/users/:id", (req, res) => {
  res.send("Update user");
});

app.delete("/users/:id", (req, res) => {
  res.send("Delete user");
});

app.listen(3000);
```

---

## Interview Ready Answer

`app.get()`, `app.post()`, `app.put()`, and `app.delete()` are Express methods used to handle different HTTP request types. GET retrieves data, POST creates a new resource, PUT updates an existing resource, and DELETE removes a resource. These methods help implement RESTful APIs by mapping HTTP verbs to CRUD operations.

---

# 11. What is `app.route()` and when would you use it?

## Concepts

`app.route()` allows **defining multiple HTTP methods for the same route in a single chain**.

Instead of repeating the path multiple times, you can chain handlers.

---

### Without app.route()

```js
app.get("/users", handler);
app.post("/users", handler);
app.put("/users", handler);
```

---

### With app.route()

Cleaner and more maintainable.

---

## Code Example

```js
const express = require("express");

const app = express();

app
  .route("/users")
  .get((req, res) => {
    res.send("Get Users");
  })
  .post((req, res) => {
    res.send("Create User");
  })
  .put((req, res) => {
    res.send("Update Users");
  });

app.listen(3000);
```

---

## Interview Ready Answer

`app.route()` is used to define multiple HTTP method handlers for the same endpoint in a chained manner. It improves code readability and avoids repeating the same route path multiple times. This approach is useful when multiple operations are performed on the same resource endpoint.

---

# 12. What is dynamic routing in Express.js?

## Concepts

Dynamic routing means **routes that contain variable segments**.

These segments are replaced with actual values when the request is made.

Dynamic values are defined using:

```
:parameterName
```

---

### Example

Route:

```
/products/:id
```

Requests handled:

```
/products/1
/products/20
/products/500
```

---

### Dynamic Segments

Express extracts the values using:

```
req.params
```

---

## Code Example

```js
const express = require("express");

const app = express();

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;

  res.send(`Product ID: ${productId}`);
});

app.listen(3000);
```

---

## Interview Ready Answer

Dynamic routing in Express.js allows routes to include variable segments using parameters such as `/products/:id`. These parameters allow the server to handle multiple requests with different values using the same route definition. Express automatically extracts the parameter values and makes them available through `req.params`.

---

# 13. How do you organize routes in a large application?

## Concepts

In large applications, defining all routes in a single file becomes difficult to maintain.

Best practice is to **separate routes using Express Router**.

Structure example:

```
project
│
├── routes
│   ├── userRoutes.js
│   ├── productRoutes.js
│
├── controllers
├── services
├── app.js
```

---

### Express Router

Express provides `express.Router()` to create modular route handlers.

---

## Code Example

### userRoutes.js

```js
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users list");
});

router.post("/", (req, res) => {
  res.send("Create user");
});

module.exports = router;
```

---

### app.js

```js
const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

app.listen(3000);
```

---

## Interview Ready Answer

In large Express.js applications, routes are organized using the `express.Router()` module to create modular route files. Each resource such as users, products, or orders can have its own route file, which is then mounted in the main application using `app.use()`. This modular approach improves code maintainability, readability, and scalability.

# 14. What is middleware in Express.js?

## Concepts

### What is Middleware?

Middleware in Express.js are **functions that execute during the request–response cycle**.

They sit **between the incoming request and the final response**.

Flow:

Client Request
→ Middleware
→ Middleware
→ Route Handler
→ Response

Middleware functions have access to:

- `req` → request object
- `res` → response object
- `next` → function to pass control to next middleware

---

### What Middleware Can Do

Middleware can:

1. Execute code
2. Modify request or response
3. End the request-response cycle
4. Call the next middleware

Common middleware tasks:

- Authentication
- Logging
- Request validation
- Parsing JSON
- Error handling

---

## Code Example

```js
const express = require("express");

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

// Route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
```

Explanation:

- Middleware runs before the route handler
- `next()` passes control to the next function

---

## Interview Ready Answer

Middleware in Express.js are functions that run during the request–response cycle. They have access to the request object, response object, and the next function. Middleware can modify requests, execute logic such as authentication or logging, and either send a response or pass control to the next middleware in the pipeline.

---

# 15. Explain the middleware execution order.

## Concepts

Middleware executes **in the order they are registered in the application**.

Express processes middleware **top → bottom**.

Order matters because each middleware decides whether to:

- pass control (`next()`)
- or send a response

---

### Execution Flow

Example pipeline:

Request
→ Logger middleware
→ Authentication middleware
→ Route handler
→ Response

If a middleware **does not call `next()`**, the request stops there.

---

## Code Example

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
  res.send("Route handler");
});

app.listen(3000);
```

Output:

Middleware 1
Middleware 2
Route handler

---

## Interview Ready Answer

Middleware in Express executes sequentially in the order they are defined in the application. When a request arrives, Express passes it through each middleware function until a response is sent or the next middleware is called using `next()`. If a middleware does not call `next()` or send a response, the request will remain pending.

---

# 16. What is the purpose of the `next()` function?

## Concepts

`next()` is used to **pass control to the next middleware function** in the stack.

Without calling `next()`, the request will **not move forward**.

---

### Two Uses of next()

1. Continue request processing
2. Trigger error handling middleware

---

### Example Flow

Request
→ Middleware 1
→ `next()`
→ Middleware 2
→ Route Handler

---

## Code Example

```js
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Final response");
});

app.listen(3000);
```

Explanation:

- Middleware logs message
- `next()` passes control to route handler

---

## Interview Ready Answer

The `next()` function in Express is used to pass control to the next middleware function in the stack. If `next()` is not called and the middleware does not send a response, the request will remain unresolved. It is also used to forward errors to error-handling middleware by calling `next(error)`.

---

# 17. How do you create custom middleware?

## Concepts

Custom middleware is simply a **function that follows the middleware signature**:

```
(req, res, next)
```

Steps:

1. Define middleware function
2. Register it using `app.use()` or on a specific route
3. Call `next()` to continue processing

---

### Common Use Cases

- Authentication
- Logging
- Rate limiting
- Request validation

---

## Code Example

### Custom Logging Middleware

```js
const express = require("express");

const app = express();

// Custom middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home route");
});

app.listen(3000);
```

Explanation:

- `logger` runs for every request
- Logs request method and URL

---

## Interview Ready Answer

Custom middleware in Express is created by defining a function that accepts `req`, `res`, and `next` parameters. This function performs some operation such as logging or authentication and then calls `next()` to pass control to the next middleware or route handler. Custom middleware can be applied globally using `app.use()` or attached to specific routes.

---

# 18. What are error-handling middleware?

## Concepts

Error-handling middleware are used to **catch and process errors in Express applications**.

They have a **special function signature**:

```
(err, req, res, next)
```

Difference:

- Normal middleware → `(req, res, next)`
- Error middleware → `(err, req, res, next)`

---

### When They Are Triggered

Error middleware runs when:

- `next(error)` is called
- An error occurs in middleware or route handlers

---

## Code Example

```js
const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  const error = new Error("Something went wrong");
  next(error);
});

// Error middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Internal Server Error");
});

app.listen(3000);
```

Explanation:

- Route triggers error
- Express forwards it to error middleware

---

## Interview Ready Answer

Error-handling middleware in Express are specialized middleware functions used to catch and handle errors in the application. They have four parameters: `err`, `req`, `res`, and `next`. When `next(error)` is called or an error occurs, Express skips normal middleware and executes the error-handling middleware to send an appropriate response.

---

# 19. Differentiate between application-level and router-level middleware.

## Concepts

Express provides two types of middleware scopes.

---

### Application-Level Middleware

Applied to the **entire application**.

Defined using:

```
app.use()
app.METHOD()
```

Runs for **all routes** or matching paths.

Example:

```js
app.use((req, res, next) => {
  console.log("Global middleware");
  next();
});
```

---

### Router-Level Middleware

Applied only to a **specific router instance**.

Defined using:

```
router.use()
```

Useful for modular route structure.

Example:

```js
const router = express.Router();

router.use((req, res, next) => {
  console.log("Router middleware");
  next();
});

router.get("/users", (req, res) => {
  res.send("Users route");
});
```

---

### Key Differences

| Feature       | Application-Level | Router-Level               |
| ------------- | ----------------- | -------------------------- |
| Scope         | Entire app        | Specific router            |
| Defined using | `app.use()`       | `router.use()`             |
| Use case      | Global middleware | Module-specific middleware |

---

## Interview Ready Answer

Application-level middleware is applied to the entire Express application using `app.use()` or route methods, meaning it runs for all matching routes. Router-level middleware is applied to specific router instances using `router.use()`, allowing middleware to be scoped to particular route groups. Router-level middleware helps organize large applications into modular components.

---

# 20. What is the difference between `app.use()` and `app.all()`?

## Concepts

Both methods register middleware but behave differently.

---

### `app.use()`

- Used to register middleware
- Works for **all HTTP methods**
- Can run **before routes**
- Can apply to specific path

Example:

```js
app.use("/api", middleware);
```

Runs for:

GET /api
POST /api
PUT /api

---

### `app.all()`

- Handles **all HTTP methods**
- Used for **route handlers**
- Executes when path matches

Example:

```js
app.all("/user", (req, res) => {
  res.send("Handles all methods");
});
```

---

### Key Differences

| Feature      | app.use()     | app.all()               |
| ------------ | ------------- | ----------------------- |
| Purpose      | Middleware    | Route handler           |
| HTTP methods | All           | All                     |
| Execution    | Before routes | Acts like route         |
| Use case     | Logging, auth | Universal route handler |

---

## Code Example

```js
const express = require("express");

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

// Route for all methods
app.all("/user", (req, res) => {
  res.send("User route");
});

app.listen(3000);
```

---

## Interview Ready Answer

`app.use()` is primarily used to register middleware functions that execute for incoming requests, regardless of HTTP method. It is commonly used for tasks like logging, authentication, and parsing request bodies. `app.all()` is used to define a route handler that responds to all HTTP methods for a specific path. While both apply to all methods, `app.use()` is middleware-focused, whereas `app.all()` behaves like a route handler.

# 21. How do you parse JSON request bodies?

## Concepts

When a client sends JSON data in an HTTP request body, Express must **parse the raw request body into a JavaScript object**.

Example client request:

```json
{
  "name": "Tanish",
  "email": "tanish@email.com"
}
```

Without parsing middleware:

- `req.body` will be **undefined**

Express provides built-in middleware:

```
express.json()
```

Purpose:

- Parses incoming JSON requests
- Converts JSON → JavaScript object
- Stores result in `req.body`

---

### When It Is Needed

Used mainly for:

- POST requests
- PUT requests
- PATCH requests
- REST APIs

Client must send header:

```
Content-Type: application/json
```

---

## Code Example

```js
const express = require("express");

const app = express();

// JSON body parser middleware
app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);

  res.json({
    message: "User received",
    data: req.body,
  });
});

app.listen(3000);
```

Example request body:

```json
{
  "name": "Tanish"
}
```

Output:

```
{ name: "Tanish" }
```

---

## Interview Ready Answer

JSON request bodies in Express.js are parsed using the built-in `express.json()` middleware. This middleware reads incoming requests with the `Content-Type: application/json` header and converts the JSON payload into a JavaScript object available in `req.body`. It is commonly used in REST APIs for handling POST and PUT requests.

---

# 22. How do you parse URL-encoded data?

## Concepts

URL-encoded data is typically sent by **HTML forms**.

Example request body:

```
name=Tanish&email=test@email.com
```

This format is called:

```
application/x-www-form-urlencoded
```

Express parses this using middleware:

```
express.urlencoded()
```

---

### Two Modes

```
express.urlencoded({ extended: false })
```

Uses Node's **querystring library**

```
express.urlencoded({ extended: true })
```

Uses **qs library**

Supports nested objects.

Example nested body:

```
user[name]=Tanish
```

---

## Code Example

```js
const express = require("express");

const app = express();

// Parse URL encoded data
app.use(express.urlencoded({ extended: true }));

app.post("/form", (req, res) => {
  console.log(req.body);

  res.send("Form submitted");
});

app.listen(3000);
```

Example request:

```
name=Tanish&age=22
```

Parsed output:

```
{ name: "Tanish", age: "22" }
```

---

## Interview Ready Answer

URL-encoded request bodies are parsed in Express using the `express.urlencoded()` middleware. This middleware processes data sent with the `application/x-www-form-urlencoded` content type, which is commonly used by HTML forms. The parsed data becomes available in `req.body`.

---

# 23. What is the difference between `express.json()` and `body-parser`?

## Concepts

Historically, Express used the **body-parser** package to parse request bodies.

Example:

```
npm install body-parser
```

Usage:

```js
const bodyParser = require("body-parser");

app.use(bodyParser.json());
```

---

### Modern Express

Starting from **Express 4.16+**, body parsing features were built directly into Express.

Built-in alternatives:

```
express.json()
express.urlencoded()
```

Therefore installing body-parser separately is usually unnecessary.

---

### Key Differences

| Feature      | express.json()       | body-parser             |
| ------------ | -------------------- | ----------------------- |
| Built-in     | Yes                  | No                      |
| Installation | Not required         | Required                |
| JSON parsing | Yes                  | Yes                     |
| URL encoding | express.urlencoded() | bodyParser.urlencoded() |

---

## Code Example

### Old Method

```js
const bodyParser = require("body-parser");

app.use(bodyParser.json());
```

### Modern Method

```js
app.use(express.json());
```

---

## Interview Ready Answer

`body-parser` is a middleware package previously used to parse request bodies in Express applications. Since Express version 4.16, the functionality of body-parser has been built directly into Express through `express.json()` and `express.urlencoded()`. Therefore modern Express applications typically use these built-in middlewares instead of installing body-parser separately.

---

# 24. How do you handle multipart/form-data (file uploads)?

## Concepts

When uploading files, the request body uses the content type:

```
multipart/form-data
```

Example use cases:

- Profile picture uploads
- Document uploads
- Image uploads
- Media uploads

Standard body parsers **cannot handle multipart data**.

Therefore specialized middleware is required.

Popular libraries:

1. **multer**
2. **busboy**
3. **formidable**

Most commonly used:

```
multer
```

---

### How Multer Works

Steps:

1. Client sends file
2. Multer parses multipart data
3. File stored in memory or disk
4. File info available in `req.file` or `req.files`

---

## Code Example

### Install Multer

```
npm install multer
```

---

### Example File Upload

```js
const express = require("express");
const multer = require("multer");

const app = express();

// Storage configuration
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);

  res.send("File uploaded successfully");
});

app.listen(3000);
```

Explanation:

```
upload.single("file")
```

means:

- Expect single file
- field name = `file`

Uploaded file metadata available in:

```
req.file
```

---

### Example Request

Form input:

```
<input type="file" name="file" />
```

---

## Interview Ready Answer

Multipart form data, typically used for file uploads, cannot be parsed using standard JSON or URL-encoded parsers. In Express, this is usually handled using middleware such as Multer. Multer processes multipart/form-data requests, stores uploaded files either in memory or on disk, and makes file metadata available in `req.file` or `req.files`. It is widely used for implementing file upload functionality in Node.js applications.

# 25. How do you serve static files in Express.js?

## Concepts

Static files are files that **do not change dynamically** and are served directly to the client.

Examples:

- Images
- CSS files
- JavaScript files
- HTML files
- Fonts

Express provides built-in middleware to serve static files:

```
express.static()
```

This middleware maps a **folder on the server** to **accessible URLs**.

Example:

```
project
 ├── public
 │    ├── index.html
 │    ├── style.css
 │    └── image.png
 └── server.js
```

Client request:

```
GET /image.png
```

Server response:

```
public/image.png
```

---

## Code Example

```js
const express = require("express");

const app = express();

// Serve static files
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running");
});
```

Access file:

```
http://localhost:3000/image.png
```

---

## Interview Ready Answer

Static files in Express.js are served using the built-in `express.static()` middleware. This middleware maps a directory on the server to publicly accessible URLs so that files like images, CSS, and JavaScript can be served directly to the client without creating explicit route handlers.

---

# 26. What is `express.static()` middleware?

## Concepts

`express.static()` is a **built-in middleware function** used to serve static assets.

It:

- Reads files from a specified directory
- Automatically responds with the requested file
- Handles caching and headers

Common assets served:

- CSS
- JavaScript
- Images
- Fonts

---

### How It Works

Client request:

```
GET /style.css
```

Express searches inside configured static directory:

```
public/style.css
```

If file exists → returned to client.

---

## Code Example

```js
const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(3000);
```

Example folder:

```
public/
  index.html
  style.css
```

Access:

```
http://localhost:3000/index.html
```

---

## Interview Ready Answer

`express.static()` is built-in middleware used to serve static assets like images, CSS, JavaScript, and HTML files. It maps a directory on the server to publicly accessible URLs so that clients can directly request files without defining route handlers.

---

# 27. How do you set up a public directory for static files?

## Concepts

A **public directory** is commonly used to store static assets.

Example project structure:

```
project
 ├── public
 │    ├── css
 │    ├── js
 │    └── images
 └── server.js
```

Express exposes this directory using:

```
express.static()
```

---

### Optional URL Prefix

You can mount static files under a specific path.

Example:

```
/static/image.png
```

Instead of:

```
/image.png
```

---

## Code Example

```js
const express = require("express");

const app = express();

// Public folder
app.use(express.static("public"));

app.listen(3000);
```

Example folder:

```
public/
   css/style.css
   js/app.js
   images/logo.png
```

Access:

```
http://localhost:3000/css/style.css
```

---

## Interview Ready Answer

To set up a public directory for static files in Express, you create a folder such as `public` and use the `express.static()` middleware to expose it. This allows files inside that directory to be served directly through HTTP requests without creating explicit route handlers.

---

# 28. What is CORS and why is it needed?

## Concepts

CORS stands for:

```
Cross-Origin Resource Sharing
```

Browsers enforce a **same-origin policy**.

Same origin means:

```
protocol + domain + port
```

Example:

```
Frontend: http://localhost:3000
Backend:  http://localhost:5000
```

Different port → different origin.

Browser blocks requests unless the server allows them.

---

### Why CORS Is Needed

Without CORS:

Frontend cannot call backend APIs from different origin.

Example scenario:

```
React app → API server
```

CORS allows server to **explicitly permit cross-origin requests**.

---

## Code Example

Server response header:

```
Access-Control-Allow-Origin: *
```

Allows requests from all origins.

---

## Interview Ready Answer

CORS stands for Cross-Origin Resource Sharing and is a browser security mechanism that restricts web pages from making requests to a different origin than the one that served the page. It is needed when a frontend application and backend API are hosted on different domains or ports. The server must explicitly allow cross-origin requests by sending appropriate CORS headers.

---

# 29. How do you enable CORS in Express.js?

## Concepts

CORS can be enabled in two ways:

1. Manually setting headers
2. Using the **cors middleware**

Most common approach:

```
cors package
```

Install:

```
npm install cors
```

---

### What the Middleware Does

It sets headers such as:

```
Access-Control-Allow-Origin
Access-Control-Allow-Methods
Access-Control-Allow-Headers
```

---

## Code Example

```js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "CORS enabled" });
});

app.listen(3000);
```

---

### Allow Specific Origin

```js
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
```

---

## Interview Ready Answer

CORS can be enabled in Express.js using the `cors` middleware package. After installing it, you register it using `app.use(cors())`. This middleware automatically adds the necessary CORS headers such as `Access-Control-Allow-Origin` to allow cross-origin requests between the frontend and backend.

---

# 30. What are preflight requests?

## Concepts

A **preflight request** is a browser request sent before the actual request to check whether the server allows it.

It uses the HTTP method:

```
OPTIONS
```

---

### When Preflight Happens

Preflight occurs when:

- Request method is not GET/POST
- Custom headers are used
- Content-Type is not simple

Example:

```
PUT /api/users
```

Browser sends first:

```
OPTIONS /api/users
```

---

### Purpose

The browser asks the server:

```
Is this request allowed?
```

Server responds with headers:

```
Access-Control-Allow-Origin
Access-Control-Allow-Methods
Access-Control-Allow-Headers
```

If allowed → browser sends real request.

---

## Code Example

Express automatically handles preflight if using CORS middleware.

```js
app.use(cors());
```

---

## Interview Ready Answer

Preflight requests are HTTP OPTIONS requests automatically sent by the browser before certain cross-origin requests. Their purpose is to check whether the server allows the requested method, headers, and origin. If the server responds with the appropriate CORS headers, the browser proceeds with the actual request.

---

# 31. How do you enable response compression?

## Concepts

Response compression reduces **response size** before sending it to the client.

Benefits:

- Faster response times
- Reduced bandwidth usage
- Improved performance

Compression types:

- Gzip
- Brotli

In Express, compression is enabled using:

```
compression middleware
```

---

### Install

```
npm install compression
```

---

## Code Example

```js
const express = require("express");
const compression = require("compression");

const app = express();

app.use(compression());

app.get("/", (req, res) => {
  res.send("Large response compressed");
});

app.listen(3000);
```

---

## Interview Ready Answer

Response compression in Express.js is enabled using the `compression` middleware. This middleware compresses HTTP responses using algorithms such as gzip or brotli before sending them to the client. Compression reduces bandwidth usage and improves performance, especially for large responses.

---

# 32. What is the `compression` middleware?

## Concepts

`compression` is a middleware used to **compress HTTP responses**.

It automatically compresses responses when:

- Client supports compression
- Response size is large enough

Supported encodings:

```
gzip
brotli
```

Browser sends header:

```
Accept-Encoding: gzip
```

Server responds with:

```
Content-Encoding: gzip
```

---

## Code Example

```js
const express = require("express");
const compression = require("compression");

const app = express();

app.use(compression());

app.get("/data", (req, res) => {
  res.json({ message: "Compressed response" });
});

app.listen(3000);
```

---

## Interview Ready Answer

The `compression` middleware in Express.js automatically compresses HTTP responses using algorithms like gzip or brotli. It improves application performance by reducing response size and bandwidth usage, especially for large payloads such as JSON responses or static assets.

---

# 33. What is Helmet.js and why should you use it?

## Concepts

Helmet.js is a **security middleware for Express.js**.

It helps secure applications by setting **HTTP security headers**.

Install:

```
npm install helmet
```

---

### Security Headers Added

Helmet sets headers such as:

- `X-Content-Type-Options`
- `X-Frame-Options`
- `Strict-Transport-Security`
- `Content-Security-Policy`

These protect against:

- XSS attacks
- Clickjacking
- MIME sniffing
- Insecure connections

---

## Code Example

```js
const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());

app.get("/", (req, res) => {
  res.send("Secure server");
});

app.listen(3000);
```

---

## Interview Ready Answer

Helmet.js is a middleware used to secure Express applications by setting various HTTP security headers. These headers protect the application from common vulnerabilities such as cross-site scripting, clickjacking, and MIME-type sniffing attacks. It is commonly used as a basic security layer in production Node.js applications.

---

# 34. How do you prevent XSS attacks in Express.js?

## Concepts

XSS stands for:

```
Cross-Site Scripting
```

It occurs when malicious scripts are injected into web pages.

Example:

```
<script>alert("Hacked")</script>
```

If user input is not sanitized, attackers can execute scripts in browsers.

---

### Prevention Techniques

1. Input validation
2. Input sanitization
3. Escaping output
4. Content Security Policy
5. Using Helmet middleware

---

## Code Example

Sanitize input:

```js
const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(express.json());

app.post("/comment", (req, res) => {
  const comment = req.body.comment;

  res.send(`Comment received: ${comment}`);
});

app.listen(3000);
```

---

## Interview Ready Answer

XSS attacks can be prevented in Express.js by validating and sanitizing user input, escaping output before rendering, and using security middleware such as Helmet. Implementing a strong Content Security Policy and avoiding direct insertion of untrusted input into HTML also helps prevent cross-site scripting vulnerabilities.

---

# 35. How do you implement CSRF protection?

## Concepts

CSRF stands for:

```
Cross-Site Request Forgery
```

It occurs when a malicious website tricks a user into performing actions on another website where they are authenticated.

Example attack:

User logged into banking site → malicious page triggers transfer request.

---

### Solution: CSRF Tokens

Each form request includes a **unique token**.

Server verifies the token before processing the request.

Popular middleware:

```
csurf
```

---

## Code Example

Install:

```
npm install csurf
```

Example:

```js
const express = require("express");
const csrf = require("csurf");

const app = express();

const csrfProtection = csrf({ cookie: true });

app.get("/form", csrfProtection, (req, res) => {
  res.send(`CSRF Token: ${req.csrfToken()}`);
});

app.listen(3000);
```

---

## Interview Ready Answerg

CSRF protection in Express.js is typically implemented using CSRF tokens. A unique token is generated on the server and included in forms or requests. When the request is submitted, the server validates the token to ensure the request originated from the legitimate client. Middleware such as `csurf` is commonly used to implement CSRF protection in Express applications.

# 36. How do you implement authentication with Passport.js?

## Concepts

Passport.js is a popular **authentication middleware for Node.js and Express**.

It provides a flexible way to implement authentication using different strategies like:

- Local authentication (username/password)
- JWT authentication
- OAuth (Google, Facebook, GitHub)
- Session-based authentication

Passport itself does not handle authentication logic. Instead, it uses **strategies** that define how authentication should work.

Authentication Flow:

Client Login Request
→ Passport Middleware
→ Strategy verifies credentials
→ If valid → user authenticated
→ If invalid → authentication failed

Passport works with:

- Sessions
- JWT tokens
- OAuth providers

---

### Steps to Implement Passport Authentication

1. Install dependencies

```bash
npm install passport passport-local express-session
```

---

2. Configure Passport

```js
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy((username, password, done) => {
    const user = { id: 1, username: "admin", password: "1234" };

    if (username === user.username && password === user.password) {
      return done(null, user);
    } else {
      return done(null, false, { message: "Invalid credentials" });
    }
  }),
);
```

---

3. Serialize and Deserialize User

```js
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = { id: 1, username: "admin" };
  done(null, user);
});
```

---

4. Use Passport Middleware

```js
app.use(passport.initialize());
app.use(passport.session());
```

---

5. Protect Routes

```js
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  }),
);
```

---

## Interview Ready Answer

Passport.js is an authentication middleware for Node.js that simplifies implementing authentication in Express applications. It works using strategies such as local authentication, OAuth, or JWT. Passport handles authentication by verifying credentials through a strategy and attaching the authenticated user to the request object. It also supports session-based authentication through serialization and deserialization of user data.

---

# 37. What are Passport strategies?

## Concepts

Passport strategies define **how authentication is performed**.

A strategy is a **plugin** that tells Passport how to verify user identity.

Different applications use different strategies depending on the authentication method.

---

### Common Passport Strategies

| Strategy                | Purpose                          |
| ----------------------- | -------------------------------- |
| passport-local          | Username/password authentication |
| passport-jwt            | Token-based authentication       |
| passport-google-oauth20 | Google OAuth login               |
| passport-facebook       | Facebook login                   |
| passport-github         | GitHub authentication            |

---

### Example: Local Strategy

```js
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy((username, password, done) => {
    if (username === "admin" && password === "1234") {
      return done(null, { id: 1, username: "admin" });
    }

    return done(null, false);
  }),
);
```

Explanation:

- Strategy receives credentials
- Verifies them against database
- Calls `done()` with result

---

### Strategy Execution Flow

Login Request
→ Passport Strategy
→ Verify credentials
→ Success → authenticated user
→ Failure → authentication error

---

## Interview Ready Answer

Passport strategies define the mechanism used to authenticate users. Each strategy implements a specific authentication method such as username-password authentication, JWT-based authentication, or OAuth login with providers like Google or GitHub. Passport delegates the authentication logic to these strategies, making it flexible and modular.

---

# 38. How do you use JWT with Express.js?

## Concepts

JWT (JSON Web Token) is used for **stateless authentication**.

Instead of storing sessions on the server, authentication information is stored inside a token.

JWT Structure:

Header
Payload
Signature

Flow:

User Login
→ Server verifies credentials
→ Server generates JWT
→ Client stores token
→ Client sends token in Authorization header
→ Server verifies token for protected routes

---

### Install Packages

```bash
npm install jsonwebtoken
```

---

### Generate Token

```js
const jwt = require("jsonwebtoken");

app.post("/login", (req, res) => {
  const user = { id: 1, username: "admin" };

  const token = jwt.sign(user, "secretKey", {
    expiresIn: "1h",
  });

  res.json({ token });
});
```

---

### Middleware to Verify Token

```js
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, "secretKey", (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}
```

---

### Protect Route

```js
app.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: "Protected data", user: req.user });
});
```

---

## Interview Ready Answer

JWT authentication in Express.js involves generating a signed token after verifying user credentials. The token is sent to the client and stored on the client side. For subsequent requests, the client sends the token in the Authorization header. The server verifies the token using middleware and allows access to protected routes if the token is valid.

---

# 39. How do you handle sessions in Express.js?

## Concepts

Sessions allow the server to **store user state between requests**.

Instead of sending user data on every request, the server stores session data and sends a **session ID cookie** to the client.

Session Flow:

User Login
→ Server creates session
→ Session ID stored in cookie
→ Client sends cookie on each request
→ Server retrieves session data

---

### Install Middleware

```bash
npm install express-session
```

---

### Example Implementation

```js
const session = require("express-session");

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  }),
);

app.get("/login", (req, res) => {
  req.session.user = { id: 1, username: "admin" };
  res.send("Logged in");
});

app.get("/profile", (req, res) => {
  if (req.session.user) {
    res.send("Welcome " + req.session.user.username);
  } else {
    res.send("Not authenticated");
  }
});
```

---

## Interview Ready Answer

Sessions in Express.js allow the server to maintain user state between HTTP requests. Using middleware like express-session, the server stores session data and sends a session ID to the client via cookies. On subsequent requests, the session ID is used to retrieve user session data, enabling authentication and state management.

---

# 40. What is `express-session` middleware?

## Concepts

`express-session` is middleware used to manage **server-side sessions** in Express applications.

It stores session data on the server and sends a **session ID cookie** to the client.

Important Options:

| Option            | Purpose                  |
| ----------------- | ------------------------ |
| secret            | Used to sign session ID  |
| resave            | Forces session save      |
| saveUninitialized | Save empty sessions      |
| cookie            | Configure session cookie |

---

### Example

```js
const session = require("express-session");

app.use(
  session({
    secret: "keyboard-cat",
    resave: false,
    saveUninitialized: false,
  }),
);
```

---

### Session Data Example

```js
req.session.user = {
  id: 1,
  username: "Tanish",
};
```

---

## Interview Ready Answer

express-session is middleware used to create and manage server-side sessions in Express.js applications. It stores session data on the server and sends a session ID cookie to the client. This allows the server to identify users across multiple requests.

---

# 41. How do you store sessions in Redis?

## Concepts

By default, `express-session` stores sessions in **memory**, which is not suitable for production.

Problems with memory store:

- Not scalable
- Sessions lost on server restart
- Not suitable for distributed systems

Solution:

Use **Redis as session store**.

Redis provides:

- Fast in-memory storage
- Shared session storage across servers
- Persistence options

---

### Install Packages

```bash
npm install connect-redis redis express-session
```

---

### Example Implementation

```js
const session = require("express-session");
const RedisStore = require("connect-redis").default;
const { createClient } = require("redis");

const redisClient = createClient();

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  }),
);
```

---

## Interview Ready Answer

Sessions can be stored in Redis using the connect-redis package with express-session. Redis acts as a centralized session store, allowing multiple servers to share session data. This improves scalability and reliability compared to the default in-memory session store.

---

# 42. Differentiate between session-based and token-based authentication.

## Concepts

Authentication systems generally use two approaches:

1. Session-based authentication
2. Token-based authentication

---

### Session-Based Authentication

Flow:

Login
→ Server creates session
→ Session ID stored in cookie
→ Server stores session data

Characteristics:

- Stateful
- Server stores session data
- Requires session store

---

### Token-Based Authentication

Flow:

Login
→ Server generates token (JWT)
→ Client stores token
→ Token sent with each request

Characteristics:

- Stateless
- No session storage
- Suitable for APIs

---

### Comparison Table

| Feature     | Session Auth | Token Auth           |
| ----------- | ------------ | -------------------- |
| State       | Stateful     | Stateless            |
| Storage     | Server       | Client               |
| Scalability | Harder       | Easier               |
| Usage       | Web apps     | APIs / Microservices |

---

## Interview Ready Answer

Session-based authentication stores user session data on the server and sends a session ID cookie to the client. Token-based authentication, such as JWT, stores authentication information inside a signed token that the client sends with each request. Session authentication is stateful, while token authentication is stateless and better suited for APIs and distributed systems.

---

# 43. How do you implement logging in Express.js?

## Concepts

Logging is important for:

- Debugging
- Monitoring
- Security auditing
- Performance analysis

In Express.js, logging is typically implemented using middleware.

Common logging tools:

- Morgan
- Winston
- Pino

---

### Example: Simple Logging Middleware

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

---

### Example Using Morgan

```js
const morgan = require("morgan");

app.use(morgan("combined"));
```

---

## Interview Ready Answer

Logging in Express.js is implemented using middleware that records request and response information. Tools like Morgan provide HTTP request logging, while libraries like Winston or Pino provide advanced logging features such as log levels, file logging, and structured logs for production environments.

---

# 44. What is Morgan middleware?

## Concepts

Morgan is an **HTTP request logger middleware** for Node.js.

It logs information about incoming requests such as:

- HTTP method
- URL
- Status code
- Response time
- IP address

Useful for:

- Debugging
- API monitoring
- Development logging

---

### Install Morgan

```bash
npm install morgan
```

---

### Example

```js
const morgan = require("morgan");

app.use(morgan("dev"));
```

Output Example:

```
GET /api/users 200 15ms
```

---

### Morgan Formats

| Format   | Description              |
| -------- | ------------------------ |
| dev      | Colored development logs |
| combined | Standard Apache format   |
| tiny     | Minimal logs             |

---

## Interview Ready Answer

Morgan is middleware used in Express.js to log HTTP requests. It records details such as request method, URL, response status, and response time. It is commonly used during development and monitoring to track incoming requests.

---

# 45. How do you use Winston for logging?

## Concepts

Winston is a **powerful logging library for Node.js**.

Features:

- Multiple log levels
- Log files
- JSON structured logs
- Transport system
- Production monitoring

Log Levels:

error
warn
info
http
verbose
debug

---

### Install Winston

```bash
npm install winston
```

---

### Example Implementation

```js
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log" }),
  ],
});

logger.info("Server started");
logger.error("Something went wrong");
```

---

### Express Integration

```js
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});
```

---

## Interview Ready Answer

Winston is a logging library used in Node.js applications to implement structured and configurable logging. It supports multiple log levels and transports such as console or file logging. In Express.js applications, Winston is often used for production logging and monitoring.

---

# 46. How do you validate request data?

## Concepts

Request validation ensures that incoming data is:

- Correct format
- Required fields present
- Secure

Validation prevents:

- Invalid data
- Security vulnerabilities
- Application crashes

Common Tools:

- express-validator
- Joi
- Zod
- Yup

---

### Example Using express-validator

```js
const { body, validationResult } = require("express-validator");

app.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    res.send("Valid data");
  },
);
```

---

## Interview Ready Answer

Request validation in Express.js ensures that incoming data meets expected formats and constraints. Middleware libraries like express-validator allow defining validation rules for request fields. If validation fails, the server returns an error response before processing the request further.

---

# 47. What is `express-validator`?

## Concepts

express-validator is a middleware library used to **validate and sanitize request data** in Express applications.

It works by:

- Defining validation rules
- Checking request fields
- Returning validation errors

---

### Install

```bash
npm install express-validator
```

---

### Example

```js
const { body, validationResult } = require("express-validator");

app.post(
  "/user",
  body("email").isEmail(),
  body("age").isInt({ min: 18 }),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    res.send("User created");
  },
);
```

---

## Interview Ready Answer

express-validator is middleware used in Express.js to validate and sanitize incoming request data. It provides a set of validation rules that can be applied to request parameters, body fields, and query strings. If validation fails, it returns structured error messages to the client.

---

# 48. How do you sanitize user input?

## Concepts

Sanitization removes or escapes **malicious or unsafe input**.

Purpose:

- Prevent XSS
- Prevent injection attacks
- Ensure clean data

Sanitization techniques:

- Escaping HTML
- Trimming whitespace
- Normalizing emails
- Removing scripts

---

### Example Using express-validator

```js
const { body } = require("express-validator");

app.post(
  "/register",
  body("email").isEmail().normalizeEmail(),
  body("name").trim().escape(),
  (req, res) => {
    res.send("Sanitized input");
  },
);
```

---

## Interview Ready Answer

User input sanitization ensures that incoming data is cleaned and safe before processing or storing it. Libraries like express-validator provide sanitization methods such as trim(), escape(), and normalizeEmail() to remove harmful characters and prevent security vulnerabilities like XSS attacks.

---

# 49. How do you implement rate limiting in Express.js?

## Concepts

Rate limiting restricts how many requests a client can make within a specific time window.

Purpose:

- Prevent brute-force attacks
- Protect APIs
- Avoid server overload

Rate limiting is usually implemented using middleware.

---

### Install

```bash
npm install express-rate-limit
```

---

### Example

```js
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use("/api", limiter);
```

Explanation:

- `windowMs` → time window
- `max` → allowed requests

---

## Interview Ready Answer

Rate limiting in Express.js is implemented using middleware such as express-rate-limit. It restricts the number of requests a client can make within a specified time window. This helps protect APIs from abuse, brute-force attacks, and excessive traffic.

---

# 50. What is `express-rate-limit` middleware?

## Concepts

`express-rate-limit` is middleware used to **limit repeated requests** to APIs.

It works by:

- Tracking request counts
- Blocking requests after limit exceeded

---

### Example

```js
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 50,
  message: "Too many requests, try again later.",
});

app.use(limiter);
```

---

### Production Setup

Often combined with:

- Redis
- IP-based limiting
- User-based limiting

---

## Interview Ready Answer

express-rate-limit is middleware for Express.js that limits the number of requests a client can make within a defined time window. It helps prevent abuse, brute-force attacks, and excessive traffic by automatically blocking requests that exceed the configured limit.

# 51. How do you handle errors in Express.js?

## Concepts

Error handling in Express.js is done using **middleware**.

Types of error handling:

1. **Synchronous Errors**
2. **Asynchronous Errors**
3. **Error-handling middleware**

Express captures errors when:

- `next(error)` is called
- An exception occurs in synchronous code

For async code, errors must be **forwarded to middleware**.

Typical flow:

Request → Route Handler → Error occurs → `next(error)` → Error Middleware → Response sent

---

### Best Practices

- Use **centralized error middleware**
- Avoid sending raw stack traces in production
- Use **custom error classes**
- Log errors before responding

---

## Code Example

Basic error handling in Express:

```js
const express = require("express");

const app = express();

app.get("/user", (req, res, next) => {
  try {
    throw new Error("User not found");
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(3000);
```

Explanation:

- Error thrown inside route
- Passed to middleware using `next(err)`
- Middleware sends error response

---

## Interview Ready Answer

Errors in Express.js are handled using error-handling middleware. When an error occurs, it can be passed to the middleware using `next(error)`. Express then skips normal middleware and executes the error-handling middleware, which logs the error and sends an appropriate response to the client. Centralized error handling improves maintainability and consistency across the application.

---

# 52. What is the error-handling middleware signature?

## Concepts

Express middleware normally has the signature:

```
(req, res, next)
```

Error-handling middleware has **four parameters**:

```
(err, req, res, next)
```

The presence of **`err` as the first parameter** tells Express that it is an error middleware.

Execution order:

Route Handler
→ `next(error)`
→ Error Middleware

Express automatically routes errors to middleware with **4 arguments**.

---

## Code Example

```js
const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  next(new Error("Something went wrong"));
});

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    error: err.message,
  });
});

app.listen(3000);
```

Explanation:

- `next()` passes error to middleware
- Express detects 4-argument middleware
- Sends error response

---

## Interview Ready Answer

Error-handling middleware in Express has the signature `(err, req, res, next)`. The presence of the `err` parameter tells Express that this middleware handles errors. When `next(error)` is called inside a route or middleware, Express skips normal middleware and executes the error-handling middleware to process the error and send a response.

---

# 53. How do you create custom error classes?

## Concepts

Custom error classes help:

- Standardize error structure
- Add status codes
- Improve error clarity
- Separate business errors from system errors

Custom errors typically extend the **JavaScript `Error` class**.

Benefits:

- Consistent error responses
- Easier debugging
- Better API error design

---

## Code Example

Create custom error class:

```js
class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);

    this.statusCode = statusCode;
    this.status = "error";
  }
}

module.exports = ApiError;
```

Using custom error:

```js
const ApiError = require("./ApiError");

app.get("/user", (req, res, next) => {
  return next(new ApiError(404, "User not found"));
});
```

Error middleware:

```js
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    message: err.message,
  });
});
```

---

## Interview Ready Answer

Custom error classes are created by extending the built-in JavaScript `Error` class. They allow attaching additional information such as HTTP status codes and error types. This helps standardize API error responses and makes error handling more structured and maintainable in Express applications.

---

# 54. How do you handle async errors in Express.js?

## Concepts

Async errors occur when using:

- Promises
- async/await
- Database queries
- API calls

Express **does not automatically catch async errors**.

Without handling:

Unhandled Promise Rejection may occur.

Solutions:

1. Try/Catch inside async functions
2. Use async wrapper
3. Use libraries like `express-async-handler`

---

## Code Example

### Method 1: Try/Catch

```js
app.get("/users", async (req, res, next) => {
  try {
    const users = await getUsersFromDB();
    res.json(users);
  } catch (err) {
    next(err);
  }
});
```

---

### Method 2: Async Wrapper

```js
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

app.get(
  "/users",
  asyncHandler(async (req, res) => {
    const users = await getUsersFromDB();
    res.json(users);
  }),
);
```

---

## Interview Ready Answer

Async errors in Express must be handled manually because Express does not automatically catch rejected promises. Typically, async routes are wrapped in try/catch blocks and errors are passed to `next(error)`. A common pattern is using an async wrapper function that automatically catches promise rejections and forwards them to the global error middleware.

---

# 55. How do you handle 404 errors?

## Concepts

A **404 error** occurs when:

- No route matches the request

In Express:

404 handling is implemented using **middleware placed after all routes**.

Flow:

Routes checked
→ No match
→ 404 middleware executes

---

## Code Example

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(3000);
```

---

## Interview Ready Answer

404 errors are handled in Express by defining middleware after all route definitions. If no route matches the request, this middleware executes and returns a 404 response indicating that the requested resource was not found.

---

# 56. How do you implement global error handling?

## Concepts

Global error handling centralizes all error responses.

Benefits:

- Consistent responses
- Clean route handlers
- Easier debugging
- Security (hide internal errors)

Flow:

Route → Error occurs → `next(error)` → Global Error Middleware

---

## Code Example

```js
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});
```

Key points:

- Placed **after all routes**
- Handles every error in app

---

## Interview Ready Answer

Global error handling in Express is implemented using a centralized error-handling middleware placed after all routes. When `next(error)` is called, Express forwards the error to this middleware, which logs the error and sends a standardized response to the client.

---

# 57. How do you log errors in production?

## Concepts

Production logging should:

- Persist logs
- Structure logs
- Avoid console-only logging

Popular logging tools:

- **Winston**
- **Pino**
- **Bunyan**
- **Morgan** (HTTP logging)

Logs should include:

- Timestamp
- Error message
- Stack trace
- Request info

Logs are often sent to:

- Log files
- Cloud logging systems
- Monitoring tools

---

## Code Example

Using Winston logger:

```js
const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  transports: [new winston.transports.Console()],
});

app.use((err, req, res, next) => {
  logger.error(err.stack);

  res.status(500).json({
    message: "Internal Server Error",
  });
});
```

---

## Interview Ready Answer

In production, errors should be logged using structured logging libraries like Winston or Pino instead of console logs. These tools allow storing logs in files or external monitoring systems and include metadata such as timestamps, stack traces, and request information for debugging and observability.

---

# 58. How do you send appropriate error responses to clients?

## Concepts

Error responses should follow a **consistent API format**.

Important elements:

- HTTP status code
- Error message
- Error type
- Optional details

Avoid exposing:

- Stack traces
- Internal implementation details

---

### Standard Error Response Structure

```
{
  "status": "error",
  "message": "User not found"
}
```

Possible status codes:

- 400 → Bad Request
- 401 → Unauthorized
- 403 → Forbidden
- 404 → Not Found
- 500 → Server Error

---

## Code Example

```js
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});
```

---

## Interview Ready Answer

Appropriate error responses should include the correct HTTP status code and a clear error message while avoiding exposure of internal details. A consistent JSON structure should be used across the API so that clients can reliably handle errors. Centralized error middleware is typically used to standardize these responses.

# 59. What are template engines in Express.js?

## Concepts

Template engines allow you to generate **dynamic HTML pages on the server**.

Instead of sending static HTML, the server can **inject data into templates** before sending them to the client.

Template engines combine:

HTML + Data → Final HTML page

Express integrates with template engines to render **views dynamically**.

---

### Why Template Engines Are Used

- Dynamic content rendering
- Server-side rendering (SSR)
- Reusable layouts
- Cleaner separation of logic and presentation

---

### How They Work

Flow:

Request → Express Route
→ Render Template
→ Inject Data
→ Generate HTML
→ Send Response

---

## Code Example

```js
app.get("/profile", (req, res) => {
  res.render("profile", { name: "Tanish", age: 21 });
});
```

Template (EJS):

```html
<h1>Hello <%= name %></h1>
<p>Age: <%= age %></p>
```

Output HTML sent to browser:

```html
<h1>Hello Tanish</h1>
<p>Age: 21</p>
```

---

## Interview Ready Answer

Template engines in Express.js allow developers to generate dynamic HTML by combining templates with server-side data. Instead of sending static files, Express renders a template and injects data before sending the final HTML response to the client. Common template engines include EJS, Pug, and Handlebars.

---

# 60. How do you set up a template engine?

## Concepts

Setting up a template engine in Express requires:

1. Installing the template engine
2. Configuring Express
3. Creating a `views` folder
4. Rendering templates using `res.render()`

Express automatically looks for templates in the **views directory**.

---

## Code Example

### Install EJS

```bash
npm install ejs
```

---

### Setup in Express

```js
const express = require("express");
const app = express();

// Set template engine
app.set("view engine", "ejs");

// Route
app.get("/", (req, res) => {
  res.render("index", { name: "Tanish" });
});

app.listen(3000);
```

---

### Folder Structure

```
project
 ├─ views
 │   └─ index.ejs
 ├─ app.js
```

---

### Template File (index.ejs)

```html
<h1>Hello <%= name %></h1>
```

---

## Interview Ready Answer

To set up a template engine in Express, you first install the engine (for example EJS), then configure Express using `app.set("view engine", "ejs")`. Templates are placed in the `views` folder, and dynamic content is rendered using `res.render(template, data)`.

---

# 61. What are popular template engines for Express.js?

## Concepts

Express supports many template engines.

Popular ones include:

1. EJS
2. Pug
3. Handlebars
4. Mustache
5. Nunjucks

---

### EJS

- Embedded JavaScript
- Simple syntax
- HTML-like structure

Example:

```html
<h1><%= name %></h1>
```

---

### Pug

- Indentation-based syntax
- No closing tags
- Very compact

Example:

```
h1= name
```

---

### Handlebars

- Logic-less template engine
- Uses placeholders

Example:

```
<h1>{{name}}</h1>
```

---

### Comparison

| Engine     | Syntax Style | Complexity | Popularity |
| ---------- | ------------ | ---------- | ---------- |
| EJS        | HTML + JS    | Easy       | High       |
| Pug        | Indentation  | Medium     | Medium     |
| Handlebars | Logic-less   | Easy       | High       |

---

## Interview Ready Answer

Popular template engines for Express.js include EJS, Pug, and Handlebars. EJS allows embedding JavaScript inside HTML, Pug uses a concise indentation-based syntax, and Handlebars uses logic-less templates with placeholders. EJS is one of the most commonly used due to its simplicity.

---

# 62. How do you render dynamic views?

## Concepts

Dynamic views are rendered using the Express method:

```
res.render()
```

This method:

1. Loads template file
2. Injects provided data
3. Generates HTML
4. Sends response

---

### Rendering Process

Client Request
→ Express Route
→ `res.render()`
→ Template Engine
→ Final HTML

---

## Code Example

### Express Route

```js
app.get("/user", (req, res) => {
  const user = {
    name: "Tanish",
    age: 21,
  };

  res.render("user", { user });
});
```

---

### Template (user.ejs)

```html
<h1>User Profile</h1>
<p>Name: <%= user.name %></p>
<p>Age: <%= user.age %></p>
```

---

## Interview Ready Answer

Dynamic views in Express are rendered using the `res.render()` method. This method loads a template file, injects the provided data, generates the final HTML using the template engine, and sends it as the response to the client.

---

# 63. What is the difference between server-side rendering and client-side rendering?

## Concepts

Rendering refers to **how HTML is generated**.

Two approaches:

1. Server-Side Rendering (SSR)
2. Client-Side Rendering (CSR)

---

### Server-Side Rendering (SSR)

HTML generated on server.

Flow:

Browser → Request → Server renders HTML → Response → Display

Example:

Express + EJS

---

### Client-Side Rendering (CSR)

Server sends minimal HTML + JavaScript.

JS fetches data and renders UI.

Flow:

Browser → Download JS → Fetch API → Render UI

Example:

React / Vue / Angular

---

### Comparison Table

| Feature        | SSR              | CSR              |
| -------------- | ---------------- | ---------------- |
| Rendering      | Server           | Browser          |
| Initial Load   | Fast             | Slower           |
| SEO            | Better           | Poor without SSR |
| JS Requirement | Optional         | Required         |
| Examples       | EJS, Next.js SSR | React SPA        |

---

## Interview Ready Answer

Server-side rendering generates HTML on the server and sends the fully rendered page to the browser. Client-side rendering sends minimal HTML and uses JavaScript in the browser to generate the UI dynamically. SSR improves SEO and initial load time, while CSR provides better interactivity for modern web applications.

---

# 64. How do you use EJS with Express.js?

## Concepts

EJS (Embedded JavaScript) allows embedding JavaScript directly inside HTML.

Syntax:

```
<%= value %>
```

Steps:

1. Install EJS
2. Set view engine
3. Create `.ejs` files
4. Render views

---

## Code Example

### Install

```bash
npm install ejs
```

---

### Express Setup

```js
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { name: "Tanish" });
});

app.listen(3000);
```

---

### home.ejs

```html
<h1>Hello <%= name %></h1>
```

---

## Interview Ready Answer

EJS is a template engine that allows embedding JavaScript inside HTML. In Express, it is used by installing EJS, setting it as the view engine using `app.set("view engine", "ejs")`, creating `.ejs` templates inside the views folder, and rendering them using `res.render()`.

---

# 65. How do you use Pug (Jade) with Express.js?

## Concepts

Pug is a template engine that uses **indentation instead of HTML tags**.

It produces very concise templates.

---

## Code Example

### Install Pug

```bash
npm install pug
```

---

### Express Setup

```js
const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { name: "Tanish" });
});

app.listen(3000);
```

---

### index.pug

```
html
  head
    title Profile
  body
    h1 Hello #{name}
```

---

## Interview Ready Answer

Pug is a template engine that uses indentation-based syntax instead of traditional HTML tags. In Express, it can be used by installing Pug, setting the view engine to `pug`, creating `.pug` template files, and rendering them using `res.render()`.

---

# 66. How do you use Handlebars with Express.js?

## Concepts

Handlebars is a **logic-less template engine**.

It focuses on:

- Clean templates
- Separation of logic and presentation

Syntax:

```
{{variable}}
```

---

## Code Example

### Install

```bash
npm install express-handlebars
```

---

### Setup

```js
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home", { name: "Tanish" });
});

app.listen(3000);
```

---

### Template

```
<h1>Hello {{name}}</h1>
```

---

## Interview Ready Answer

Handlebars is a logic-less template engine that uses placeholders like `{{variable}}` to inject data into templates. In Express, it can be used by installing express-handlebars, configuring it as the view engine, and rendering templates using `res.render()`.

---

# 67. How do you pass data to templates?

## Concepts

Data is passed from Express routes to templates using the second argument of:

```
res.render(view, data)
```

The data becomes available inside the template.

---

### Data Passing Flow

Route → res.render() → Template → Rendered HTML

---

## Code Example

### Express Route

```js
app.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    username: "Tanish",
    notifications: 5,
  });
});
```

---

### Template (EJS)

```html
<h1>Welcome <%= username %></h1>
<p>You have <%= notifications %> notifications</p>
```

---

## Interview Ready Answer

Data is passed to templates in Express using the `res.render()` method. The second argument is an object containing key-value pairs, which become available inside the template for rendering dynamic content.

# 68. How do you connect Express.js to databases?

## Concepts

Express.js itself does not connect directly to databases. Instead, we use **database drivers or ORMs/ODMs**.

Common databases used with Express:

**SQL Databases**

- PostgreSQL
- MySQL
- SQLite

**NoSQL Databases**

- MongoDB

Connection is usually handled in a **separate configuration file** and reused across the application.

Common tools:

| Database   | Library / ORM           |
| ---------- | ----------------------- |
| MongoDB    | Mongoose                |
| PostgreSQL | pg / Prisma / Sequelize |
| MySQL      | mysql2 / Sequelize      |

Typical architecture:

Express App
→ Database Driver / ORM
→ Database Server

---

### Connection Flow

1. Install database library
2. Configure connection string
3. Initialize connection when server starts
4. Use models/queries inside controllers

---

## Code Example

### Example: MongoDB with Mongoose

Install dependency

```bash
npm install mongoose
```

Create database connection

```js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myapp")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
```

Use in Express server

```js
const express = require("express");
const app = express();

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000);
```

---

## Interview Ready Answer

Express.js connects to databases using database drivers or ORMs/ODMs. For example, MongoDB is typically connected using Mongoose, while SQL databases like PostgreSQL or MySQL use libraries such as pg or Sequelize. The database connection is usually initialized during server startup, and models or query methods are used inside route handlers or services to interact with the database.

---

# 69. What is connection pooling in Express.js?

## Concepts

Connection pooling is a technique where **a pool of reusable database connections** is maintained instead of creating a new connection for every request.

Creating a new DB connection for each request is expensive because:

- Connection handshake takes time
- High memory overhead
- Limits database scalability

Instead:

Application
→ Connection Pool
→ Reused DB connections

---

### How It Works

1. Application starts
2. Pool creates multiple DB connections
3. Requests borrow a connection
4. Query executes
5. Connection returned to pool

---

### Advantages

- Faster performance
- Reduced latency
- Better scalability
- Controlled resource usage

---

### Example Pool Configuration

Example using **PostgreSQL**

```js
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydb",
  password: "password",
  port: 5432,
  max: 10,
});
```

Query usage

```js
const users = await pool.query("SELECT * FROM users");
```

Here:

- `max: 10` means maximum 10 connections in pool.

---

## Interview Ready Answer

Connection pooling is a technique where a set of reusable database connections is maintained instead of creating a new connection for every request. When a request needs to interact with the database, it borrows a connection from the pool, executes the query, and then returns the connection to the pool. This improves performance, reduces latency, and prevents database overload in high-traffic applications.

---

# 70. How do you handle database migrations?

## Concepts

Database migrations are a way to **manage and version control database schema changes**.

Examples of schema changes:

- Creating tables
- Adding columns
- Modifying constraints
- Creating indexes

Instead of manually changing the database, migrations allow **automated schema updates**.

---

### Migration Workflow

1. Create migration file
2. Define schema change
3. Apply migration
4. Track migration history

---

### Benefits

- Version-controlled schema
- Team collaboration
- Reproducible environments
- Safe production updates

---

### Tools for Migrations

| Database   | Migration Tool                     |
| ---------- | ---------------------------------- |
| PostgreSQL | Prisma / Sequelize / Knex          |
| MongoDB    | Mongoose scripts / migration tools |

---

## Code Example

Example using **Sequelize CLI**

Create migration

```bash
npx sequelize-cli migration:generate --name create-users-table
```

Migration file

```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Users");
  },
};
```

Run migration

```bash
npx sequelize-cli db:migrate
```

---

## Interview Ready Answer

Database migrations are a structured way to manage schema changes in a database over time. Instead of manually altering tables, developers create migration scripts that define changes such as creating tables or adding columns. Tools like Prisma, Sequelize, and Knex track migration history and allow applying or rolling back changes safely across development, staging, and production environments.

---

# 71. How do you use Mongoose with Express.js?

## Concepts

Mongoose is an **ODM (Object Document Mapper)** for MongoDB.

It provides:

- Schema definitions
- Model abstraction
- Validation
- Middleware
- Query helpers

Architecture:

Express Route
→ Controller
→ Mongoose Model
→ MongoDB

---

### Steps to Use Mongoose

1. Install mongoose
2. Connect database
3. Define schema
4. Create model
5. Use model in routes

---

## Code Example

Install

```bash
npm install mongoose
```

Create schema and model

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);
```

Express route

```js
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();

  res.json(user);
});
```

---

## Interview Ready Answer

Mongoose is an ODM library used to interact with MongoDB in Node.js applications. It allows developers to define schemas, create models, validate data, and perform database operations using JavaScript objects. In an Express application, Mongoose models are typically used inside controllers or services to perform CRUD operations on MongoDB collections.

---

# 72. How do you use Sequelize with Express.js?

## Concepts

Sequelize is an **ORM for SQL databases**.

Supported databases:

- PostgreSQL
- MySQL
- SQLite
- MariaDB

Sequelize provides:

- Models
- Relationships
- Migrations
- Query abstraction

---

### Architecture

Express Route
→ Controller
→ Sequelize Model
→ SQL Database

---

## Code Example

Install Sequelize

```bash
npm install sequelize pg pg-hstore
```

Create Sequelize instance

```js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "user", "password", {
  host: "localhost",
  dialect: "postgres",
});
```

Create model

```js
const User = sequelize.define("User", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});
```

Insert data

```js
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});
```

---

## Interview Ready Answer

Sequelize is an ORM used with Express.js to interact with SQL databases like PostgreSQL or MySQL. It allows defining models that map to database tables and provides methods for CRUD operations. Sequelize also supports migrations, associations, and transactions, making it useful for building structured relational database applications.

---

# 73. How do you handle database transactions?

## Concepts

A transaction is a sequence of operations executed as a **single atomic unit**.

Either:

- All operations succeed
  OR
- All operations rollback

This ensures **data consistency**.

---

### ACID Properties

| Property    | Meaning                  |
| ----------- | ------------------------ |
| Atomicity   | All or nothing           |
| Consistency | Valid data state         |
| Isolation   | Independent transactions |
| Durability  | Data persists            |

---

### Use Cases

- Payment processing
- Order creation
- Inventory updates
- Multi-table updates

---

## Code Example

Example using **Sequelize transaction**

```js
const t = await sequelize.transaction();

try {
  const user = await User.create({ name: "John" }, { transaction: t });

  const order = await Order.create({ userId: user.id }, { transaction: t });

  await t.commit();
} catch (error) {
  await t.rollback();
}
```

---

## Interview Ready Answer

Database transactions ensure that multiple operations execute as a single atomic unit. If any operation fails, the entire transaction is rolled back to maintain data consistency. ORMs like Sequelize provide transaction APIs that allow grouping queries within a transaction block and committing or rolling back based on success or failure.

---

# 74. How do you design RESTful APIs with Express.js and databases?

## Concepts

RESTful APIs follow **resource-based design**.

Example resource:

Users

Endpoints:

| Method | Endpoint   | Purpose         |
| ------ | ---------- | --------------- |
| GET    | /users     | Get all users   |
| GET    | /users/:id | Get single user |
| POST   | /users     | Create user     |
| PUT    | /users/:id | Update user     |
| DELETE | /users/:id | Delete user     |

---

### Best Practices

- Use nouns for resources
- Use HTTP methods correctly
- Return proper status codes
- Separate controllers and services

---

## Code Example

```js
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});
```

---

## Interview Ready Answer

RESTful APIs are designed around resources and standard HTTP methods such as GET, POST, PUT, and DELETE. In an Express.js application, routes handle incoming requests, controllers perform business logic, and database models interact with the database. Following REST principles ensures predictable and scalable API design.

---

# 75. How do you handle pagination?

## Concepts

Pagination is used to **limit the number of records returned per request**.

Benefits:

- Improves performance
- Reduces payload size
- Better user experience

---

### Common Parameters

```
?page=1
&limit=10
```

---

### Pagination Formula

```
skip = (page - 1) * limit
```

---

## Code Example

MongoDB pagination

```js
app.get("/users", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const users = await User.find()
    .skip((page - 1) * limit)
    .limit(limit);

  res.json(users);
});
```

---

## Interview Ready Answer

Pagination limits the number of records returned by an API to improve performance and usability. It is commonly implemented using query parameters such as page and limit. The backend calculates the offset and fetches only the required records using database methods like skip and limit.

---

# 76. How do you implement filtering and sorting?

## Concepts

Filtering allows selecting specific data.

Sorting orders results.

Example:

```
/products?category=books
/products?sort=price
```

---

## Code Example

```js
app.get("/products", async (req, res) => {
  const { category, sort } = req.query;

  const query = {};

  if (category) {
    query.category = category;
  }

  const products = await Product.find(query).sort(sort || "createdAt");

  res.json(products);
});
```

---

## Interview Ready Answer

Filtering allows clients to retrieve specific data based on criteria, while sorting controls the order of returned records. These features are usually implemented using query parameters in REST APIs and translated into database queries using methods like `find()` and `sort()`.

---

# 77. How do you handle relationships in API responses?

## Concepts

Relationships exist between entities.

Example:

User → Posts
Order → Items

---

### In SQL

Use:

- JOIN queries
- ORM associations

Example:

```
User hasMany Orders
```

---

### In MongoDB

Use:

- References (ObjectId)
- Populate

---

## Code Example

MongoDB example

```js
const postSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
```

Populate relationship

```js
const posts = await Post.find().populate("author");
```

---

## Interview Ready Answer

Relationships between entities are handled differently depending on the database type. In SQL databases, relationships are implemented using foreign keys and JOIN queries. In MongoDB, references between documents can be created using ObjectIds and retrieved using populate. ORMs and ODMs simplify managing these relationships in application code.

# 78. What are RESTful principles?

## Concepts

REST stands for **Representational State Transfer**.
It is an **architectural style for designing web APIs**.

REST APIs are designed around **resources**, which are identified by **URLs** and manipulated using **HTTP methods**.

### Core REST Principles

1. **Client–Server Architecture**

Client and server are separated.

- Client → Handles UI
- Server → Handles business logic and data

Example:

Frontend (React) → calls → Backend API (Express)

---

2. **Statelessness**

Each request must contain **all necessary information**.

Server does **not store session state** between requests.

Example:

```
GET /users/123
Authorization: Bearer token
```

Every request carries authentication info.

---

3. **Resource-Based URLs**

Everything is treated as a **resource**.

Example resources:

```
/users
/products
/orders
```

---

4. **Use of HTTP Methods**

Different HTTP methods represent actions.

| Method | Purpose           |
| ------ | ----------------- |
| GET    | Retrieve resource |
| POST   | Create resource   |
| PUT    | Update resource   |
| PATCH  | Partial update    |
| DELETE | Remove resource   |

---

5. **Representation of Resources**

Resources are returned in formats like:

- JSON
- XML

Example response:

```json
{
  "id": 1,
  "name": "Tanish"
}
```

---

6. **Uniform Interface**

REST APIs follow **consistent conventions**:

```
GET /users
GET /users/1
POST /users
DELETE /users/1
```

---

7. **Layered Architecture**

Client does not know whether it communicates with:

- API server
- Load balancer
- Cache
- Microservice

---

## Code Example

```javascript
const express = require("express");
const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Tanish" }]);
});

app.post("/users", (req, res) => {
  const user = req.body;
  res.status(201).json(user);
});

app.delete("/users/:id", (req, res) => {
  res.status(204).send();
});

app.listen(3000);
```

---

## Interview Ready Answer

RESTful principles define guidelines for designing scalable web APIs. REST APIs are resource-oriented and use standard HTTP methods like GET, POST, PUT, and DELETE to manipulate resources. They follow a stateless client-server architecture, meaning each request contains all necessary information. REST also promotes a uniform interface, resource-based URLs, and layered architecture, which improves scalability and maintainability of web services.

---

# 79. How do you design RESTful routes?

## Concepts

RESTful routes represent **resources using nouns instead of verbs**.

Bad example:

```
/getUsers
/createUser
/deleteUser
```

Good RESTful design:

```
/users
/users/:id
```

---

### Standard REST Route Pattern

| Operation       | Method    | Route      |
| --------------- | --------- | ---------- |
| Get all users   | GET       | /users     |
| Get single user | GET       | /users/:id |
| Create user     | POST      | /users     |
| Update user     | PUT/PATCH | /users/:id |
| Delete user     | DELETE    | /users/:id |

---

### Nested Resources

Example:

```
/users/:id/orders
```

User → Orders relationship.

---

### Naming Best Practices

1. Use **nouns not verbs**
2. Use **plural resources**
3. Use **HTTP methods for actions**
4. Keep URLs **consistent and predictable**

---

## Code Example

```javascript
const express = require("express");
const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
```

---

## Interview Ready Answer

RESTful routes are designed around resources rather than actions. Resources are represented using nouns and manipulated using HTTP methods. For example, `GET /users` retrieves users, `POST /users` creates a new user, and `DELETE /users/:id` removes a user. This approach creates consistent and predictable APIs that are easier to maintain and consume.

---

# 80. What are HTTP status codes and when to use them?

## Concepts

HTTP status codes indicate the **result of an HTTP request**.

They are grouped into categories.

---

### 1xx – Informational

Rarely used.

Example:

```
100 Continue
```

---

### 2xx – Success

| Code | Meaning    |
| ---- | ---------- |
| 200  | OK         |
| 201  | Created    |
| 204  | No Content |

Example:

```
POST /users → 201 Created
```

---

### 3xx – Redirection

| Code | Meaning            |
| ---- | ------------------ |
| 301  | Permanent redirect |
| 302  | Temporary redirect |

---

### 4xx – Client Errors

| Code | Meaning          |
| ---- | ---------------- |
| 400  | Bad Request      |
| 401  | Unauthorized     |
| 403  | Forbidden        |
| 404  | Not Found        |
| 409  | Conflict         |
| 422  | Validation Error |

---

### 5xx – Server Errors

| Code | Meaning               |
| ---- | --------------------- |
| 500  | Internal Server Error |
| 502  | Bad Gateway           |
| 503  | Service Unavailable   |

---

## Code Example

```javascript
app.post("/users", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Name required" });
  }

  const user = { id: 1, name: req.body.name };

  res.status(201).json(user);
});
```

---

## Interview Ready Answer

HTTP status codes communicate the result of a request between client and server. Successful responses use codes like 200 or 201, client errors use codes like 400 or 404, and server errors use codes like 500. Using correct status codes improves API clarity and helps clients handle responses properly.

---

# 81. How do you version APIs in Express.js?

## Concepts

API versioning prevents **breaking changes** from affecting existing clients.

Common strategies:

1. URL versioning
2. Header versioning
3. Query parameter versioning

---

### 1. URL Versioning (Most Common)

```
/api/v1/users
/api/v2/users
```

---

### 2. Header Versioning

```
Accept: application/vnd.api.v1+json
```

---

### 3. Query Versioning

```
/users?version=1
```

---

### Recommended Practice

Use **URL versioning** because it is simple and explicit.

---

## Code Example

```javascript
const express = require("express");
const app = express();

app.get("/api/v1/users", (req, res) => {
  res.json({ version: "v1", users: [] });
});

app.get("/api/v2/users", (req, res) => {
  res.json({ version: "v2", users: [] });
});

app.listen(3000);
```

---

## Interview Ready Answer

API versioning allows backward compatibility when APIs evolve. The most common approach is URL versioning such as `/api/v1/users` and `/api/v2/users`. Other methods include header-based or query-based versioning. Versioning ensures existing clients continue working even after API updates.

---

# 82. What is HATEOAS?

## Concepts

HATEOAS stands for:

**Hypermedia As The Engine Of Application State**

It is a REST principle where **API responses include links to related actions**.

Instead of clients manually constructing URLs, the API **provides navigation links**.

---

### Example Without HATEOAS

Response:

```json
{
  "id": 1,
  "name": "Tanish"
}
```

Client must guess:

```
/users/1/orders
```

---

### Example With HATEOAS

```json
{
  "id": 1,
  "name": "Tanish",
  "links": {
    "self": "/users/1",
    "orders": "/users/1/orders",
    "delete": "/users/1"
  }
}
```

---

### Benefits

- Self-discoverable APIs
- Better client navigation
- Loose coupling

---

## Code Example

```javascript
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    id,
    name: "Tanish",
    links: {
      self: `/users/${id}`,
      orders: `/users/${id}/orders`,
    },
  });
});
```

---

## Interview Ready Answer

HATEOAS is a REST principle where API responses include hyperlinks to related resources and actions. This allows clients to dynamically navigate the API without hardcoding endpoints. It improves API discoverability and reduces coupling between client and server.

---

# 83. How do you structure a large Express.js API?

## Concepts

Large APIs require **modular architecture**.

Typical structure:

```
project
│
├── controllers
├── routes
├── services
├── middlewares
├── models
├── utils
├── config
└── app.js
```

---

### Layer Responsibilities

Controllers → request handling
Services → business logic
Models → database logic
Routes → endpoint definitions
Middleware → authentication / validation

---

## Code Example

Routes:

```javascript
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.post("/", userController.createUser);

module.exports = router;
```

App setup:

```javascript
const userRoutes = require("./routes/users");

app.use("/api/users", userRoutes);
```

---

## Interview Ready Answer

A large Express.js API should follow a modular architecture separating routes, controllers, services, and models. Routes define endpoints, controllers handle requests, services implement business logic, and models interact with the database. This separation of concerns improves scalability, maintainability, and testability.

---

# 84. How do you handle API documentation?

## Concepts

API documentation explains:

- Endpoints
- Request parameters
- Response formats
- Authentication
- Status codes

Documentation approaches:

1. Manual documentation
2. Swagger / OpenAPI
3. Postman collections

---

### Best Practice

Use **auto-generated documentation**.

Example tools:

- Swagger
- Redoc
- Postman

---

## Code Example

Swagger setup:

```javascript
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
```

Access documentation:

```
http://localhost:3000/api-docs
```

---

## Interview Ready Answer

API documentation describes endpoints, request formats, authentication methods, and responses. It helps developers understand how to use the API. Tools like Swagger or OpenAPI are commonly used with Express.js to generate interactive API documentation automatically.

---

# 85. What is Swagger/OpenAPI and how do you use it with Express.js?

## Concepts

Swagger/OpenAPI is a **standard specification for documenting APIs**.

It allows:

- Interactive documentation
- API testing in browser
- Automatic client generation

---

### Components

OpenAPI spec file:

```
openapi.yaml
```

Swagger UI:

Interactive API documentation.

---

## Code Example

Install:

```
npm install swagger-ui-express swagger-jsdoc
```

Setup:

```javascript
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const specs = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
```

---

## Interview Ready Answer

Swagger/OpenAPI is a specification used to document REST APIs in a standardized format. It allows generating interactive documentation where developers can explore endpoints and test API requests. In Express.js, Swagger can be integrated using packages like swagger-ui-express and swagger-jsdoc.

---

# 86. How do you implement API rate limiting?

## Concepts

Rate limiting prevents **API abuse or excessive requests**.

Example:

```
100 requests per minute per IP
```

Benefits:

- Protect servers
- Prevent brute-force attacks
- Control API usage

---

### Common Tools

Express middleware:

```
express-rate-limit
```

---

## Code Example

Install:

```
npm install express-rate-limit
```

Implementation:

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
});

app.use(limiter);
```

---

## Interview Ready Answer

API rate limiting restricts the number of requests a client can make within a specific time window. It protects servers from abuse and denial-of-service attacks. In Express.js, rate limiting can be implemented using middleware like express-rate-limit, which tracks requests per IP and blocks excessive requests.

---

# 87. What is GraphQL and how does it differ from REST?

## Concepts

GraphQL is a **query language for APIs** developed by Facebook.

It allows clients to **request exactly the data they need**.

---

### REST Problems

Over-fetching:

```
GET /users/1
```

Returns unnecessary fields.

Under-fetching:

Client must call multiple endpoints.

---

### GraphQL Solution

Client defines query.

Example:

```graphql
{
  user(id: 1) {
    name
    email
  }
}
```

Only requested fields returned.

---

### REST vs GraphQL

| Feature        | REST         | GraphQL         |
| -------------- | ------------ | --------------- |
| Endpoints      | Multiple     | Single          |
| Data fetching  | Fixed        | Flexible        |
| Over-fetching  | Possible     | Avoided         |
| Query language | HTTP methods | GraphQL queries |

---

## Code Example

```javascript
const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => "Hello GraphQL",
};
```

---

## Interview Ready Answer

GraphQL is a query language for APIs that allows clients to request specific data fields. Unlike REST which exposes multiple endpoints, GraphQL uses a single endpoint where clients define the exact data they need. This reduces over-fetching and under-fetching and provides more flexibility in data retrieval.

---

# 88. How do you implement GraphQL with Express.js?

## Concepts

GraphQL can be integrated with Express using libraries such as:

- express-graphql
- Apollo Server

Steps:

1. Define schema
2. Create resolvers
3. Connect GraphQL middleware

---

## Code Example

```javascript
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => "Hello GraphQL",
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(4000);
```

---

## Interview Ready Answer

GraphQL can be implemented with Express.js using middleware such as express-graphql or Apollo Server. The process involves defining a schema that describes available data types, creating resolver functions to fetch data, and attaching the GraphQL middleware to an endpoint like `/graphql`.

---

# 89. What is Apollo Server with Express?

## Concepts

Apollo Server is a **GraphQL server implementation**.

Features:

- Schema management
- Resolver support
- GraphQL playground
- Performance tools

It integrates easily with Express.

---

## Code Example

```javascript
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello Apollo",
  },
};

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000);
}

startServer();
```

---

## Interview Ready Answer

Apollo Server is a popular GraphQL server implementation that provides tools for building scalable GraphQL APIs. It integrates with Express.js and allows defining schemas and resolvers easily. Apollo also provides features like GraphQL playground, caching, and performance monitoring.

# 90. How do you secure Express.js applications?

## Concepts

Securing an Express.js application involves protecting the API, server, and data from common attacks.

### Key Security Practices

1. **Use HTTPS**
   - Encrypts communication using SSL/TLS
   - Prevents man-in-the-middle attacks

2. **Use Security Middleware**
   - `helmet` → sets secure HTTP headers
   - `cors` → controls cross-origin requests

3. **Input Validation**
   - Prevent malicious input
   - Use libraries like `express-validator` or `Joi`

4. **Authentication & Authorization**
   - Use JWT or sessions
   - Restrict access using roles/permissions

5. **Rate Limiting**
   - Prevent brute force attacks
   - Use `express-rate-limit`

6. **Hide Sensitive Information**
   - Do not expose stack traces in production
   - Disable `x-powered-by`

7. **Secure Environment Variables**
   - Store secrets in `.env` files

8. **Use Secure Cookies**
   - `httpOnly`
   - `secure`
   - `sameSite`

9. **Dependency Security**
   - Regularly run:

```
npm audit
```

---

## Code Example

```js
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

// Security headers
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

// Disable Express signature
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("Secure Express App");
});

app.listen(3000);
```

---

## Interview Ready Answer

To secure an Express.js application, several practices should be followed. These include using HTTPS for encrypted communication, implementing security middleware like Helmet to set secure HTTP headers, validating user input to prevent injection attacks, and implementing authentication and authorization mechanisms. Additional measures include rate limiting to prevent brute force attacks, storing sensitive configuration in environment variables, and regularly auditing dependencies for vulnerabilities.

---

# 91. What are common security vulnerabilities in Express.js?

## Concepts

Express applications are vulnerable to several common web security threats.

### Common Vulnerabilities

1. **SQL Injection**

Attackers manipulate queries through user input.

Example:

```
SELECT * FROM users WHERE email = '${input}'
```

Solution:

- Use parameterized queries
- Use ORM/ODM

---

2. **Cross-Site Scripting (XSS)**

Injecting malicious JavaScript into web pages.

Example:

```html
<script>
  alert("hacked");
</script>
```

Solution:

- Escape output
- Use `helmet`
- Sanitize input

---

3. **Cross-Site Request Forgery (CSRF)**

Forcing a user to perform unwanted actions.

Solution:

- CSRF tokens
- SameSite cookies

---

4. **NoSQL Injection**

Occurs in MongoDB queries when user input is injected into query objects.

Solution:

- Input validation
- Use strict query checks

---

5. **Broken Authentication**

Weak password storage or poor session management.

Solution:

- Use `bcrypt`
- Implement JWT or secure sessions

---

6. **Sensitive Data Exposure**

Hardcoding API keys or database credentials.

Solution:

- Use environment variables

---

7. **Denial of Service (DoS)**

Overloading server with too many requests.

Solution:

- Rate limiting
- Request size limits

---

## Code Example

```js
const rateLimit = require("express-rate-limit");

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  }),
);
```

---

## Interview Ready Answer

Common security vulnerabilities in Express.js include SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), NoSQL injection, broken authentication, sensitive data exposure, and denial-of-service attacks. These can be mitigated using input validation, parameterized queries, security middleware like Helmet, rate limiting, and secure authentication mechanisms.

---

# 92. How do you implement HTTPS in Express.js?

## Concepts

HTTPS provides **encrypted communication using SSL/TLS**.

Benefits:

- Protects sensitive data
- Prevents MITM attacks
- Required for production APIs

Requirements:

1. SSL certificate
2. Private key
3. HTTPS server

Certificates can come from:

- Let's Encrypt
- Cloud providers
- Self-signed (development)

---

## Code Example

```js
const https = require("https");
const fs = require("fs");
const express = require("express");

const app = express();

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};

https.createServer(options, app).listen(443, () => {
  console.log("HTTPS server running");
});
```

---

## Interview Ready Answer

HTTPS in Express.js is implemented using the HTTPS module with SSL/TLS certificates. The server requires a private key and certificate to encrypt communication between the client and server. In production environments, certificates are typically obtained from trusted authorities like Let's Encrypt. HTTPS ensures secure data transmission and protects against man-in-the-middle attacks.

---

# 93. How do you use environment variables for sensitive data?

## Concepts

Sensitive information should never be hardcoded.

Examples:

- API keys
- Database credentials
- JWT secrets
- Cloud credentials

These should be stored in **environment variables**.

Common approach:

Use `.env` file with `dotenv`.

---

### Example `.env`

```
PORT=3000
DB_URI=mongodb://localhost:27017/app
JWT_SECRET=mysecretkey
```

---

### Best Practices

- Never commit `.env` to Git
- Use `.env.example`
- Use different env files per environment

```
.env.development
.env.production
```

---

## Code Example

```js
require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT;
const SECRET = process.env.JWT_SECRET;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
```

---

## Interview Ready Answer

Environment variables are used to store sensitive configuration such as database credentials, API keys, and JWT secrets. In Node.js applications, they are accessed using `process.env`. During development, tools like dotenv load variables from a `.env` file. This approach keeps secrets out of the codebase and improves security.

---

# 94. How do you validate and sanitize user input?

## Concepts

User input must be validated and sanitized to prevent:

- Injection attacks
- Malicious data
- Application crashes

Two steps:

### Validation

Ensures data meets expected format.

Examples:

- Email format
- Password length
- Required fields

---

### Sanitization

Cleans input by removing harmful characters.

Examples:

- Escape HTML
- Remove scripts

---

### Libraries

Common libraries:

- `express-validator`
- `Joi`
- `zod`

---

## Code Example

Using **express-validator**

```js
const { body, validationResult } = require("express-validator");

app.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("User registered");
  },
);
```

---

## Interview Ready Answer

User input validation ensures that incoming data matches expected formats, such as checking email structure or password length. Sanitization removes potentially harmful content like scripts. In Express.js, libraries such as express-validator or Joi are commonly used to validate and sanitize input, helping prevent injection attacks and ensuring data integrity.

---

# 95. What is SQL injection and how do you prevent it?

## Concepts

SQL injection occurs when attackers insert malicious SQL code into queries.

Example:

Input:

```
' OR 1=1 --
```

Query becomes:

```
SELECT * FROM users WHERE email = '' OR 1=1 --
```

This can bypass authentication.

---

### Prevention Techniques

1. Parameterized queries
2. Prepared statements
3. ORM usage
4. Input validation

---

## Code Example

Unsafe query:

```js
db.query("SELECT * FROM users WHERE email = '" + email + "'");
```

Safe query:

```js
db.query("SELECT * FROM users WHERE email = ?", [email]);
```

---

## Interview Ready Answer

SQL injection is a security vulnerability where attackers manipulate database queries by injecting malicious SQL through user input. It can lead to unauthorized access or data leakage. It is prevented by using parameterized queries, prepared statements, ORMs, and proper input validation.

---

# 96. How do you prevent NoSQL injection?

## Concepts

NoSQL injection occurs when malicious input manipulates database queries in NoSQL databases like MongoDB.

Example attack:

```js
{ "username": { "$ne": null } }
```

This could bypass authentication.

---

### Prevention Methods

1. Input validation
2. Sanitize user input
3. Use strict query structures
4. Use ODM like Mongoose

---

## Code Example

Unsafe:

```js
User.find(req.body);
```

Safe:

```js
User.find({
  email: req.body.email,
});
```

---

## Interview Ready Answer

NoSQL injection occurs when attackers manipulate query objects in NoSQL databases like MongoDB. It can be prevented by validating and sanitizing user input, avoiding direct use of user input in queries, and using ODM libraries like Mongoose which enforce schema validation.

---

# 97. How do you implement JWT authentication in Express.js?

## Concepts

JWT (JSON Web Token) is a **token-based authentication mechanism**.

Flow:

1. User logs in
2. Server verifies credentials
3. Server generates JWT
4. Client stores token
5. Client sends token in requests
6. Server verifies token

---

## Code Example

```js
const jwt = require("jsonwebtoken");

const SECRET = "secretkey";

app.post("/login", (req, res) => {
  const user = { id: 1, name: "Tanish" };

  const token = jwt.sign(user, SECRET, { expiresIn: "1h" });

  res.json({ token });
});
```

Middleware:

```js
function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}
```

---

## Interview Ready Answer

JWT authentication in Express.js works by generating a signed token after successful login. The client stores the token and sends it with subsequent requests, typically in the Authorization header. The server verifies the token using a secret key and grants access to protected routes if the token is valid.

---

# 98. How do you handle role-based access control (RBAC)?

## Concepts

RBAC restricts access based on **user roles**.

Example roles:

- admin
- moderator
- user

Each role has different permissions.

---

### Flow

User logs in
→ Token includes role
→ Middleware checks role
→ Access allowed/denied

---

## Code Example

```js
function authorize(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).send("Access denied");
    }

    next();
  };
}

app.get("/admin", authenticate, authorize("admin"), (req, res) => {
  res.send("Admin panel");
});
```

---

## Interview Ready Answer

Role-based access control restricts access to resources based on user roles. After authentication, the user’s role is included in the token or session. Middleware checks this role before granting access to protected routes, ensuring that only authorized users can perform certain actions.

---

# 99. How do you implement OAuth with Express.js?

## Concepts

OAuth allows users to log in using **third-party providers** like:

- Google
- GitHub
- Facebook

Instead of storing passwords.

Common library:

```
passport.js
```

---

### OAuth Flow

User clicks "Login with Google"
→ Redirect to provider
→ User grants permission
→ Provider sends authorization code
→ Server exchanges code for access token
→ User authenticated

---

## Code Example

```js
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    },
  ),
);
```

---

## Interview Ready Answer

OAuth allows users to authenticate using third-party identity providers like Google or GitHub. In Express.js, OAuth is commonly implemented using Passport.js strategies. The user is redirected to the provider for authentication, and after authorization, the provider returns an access token which the server uses to authenticate the user.

---

# 100. How do you refresh tokens?

## Concepts

Access tokens should be **short-lived**.

Example:

```
Access Token → 15 minutes
Refresh Token → 7 days
```

Flow:

1. User logs in
2. Server sends access token + refresh token
3. Access token expires
4. Client sends refresh token
5. Server issues new access token

---

## Code Example

```js
app.post("/refresh", (req, res) => {
  const refreshToken = req.body.token;

  if (!refreshToken) return res.sendStatus(401);

  jwt.verify(refreshToken, REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    const newAccessToken = jwt.sign({ id: user.id }, ACCESS_SECRET, {
      expiresIn: "15m",
    });

    res.json({ accessToken: newAccessToken });
  });
});
```

---

## Interview Ready Answer

Token refreshing is implemented by issuing short-lived access tokens and long-lived refresh tokens. When the access token expires, the client sends the refresh token to the server. The server verifies the refresh token and generates a new access token, allowing the user to stay authenticated without logging in again.

# 101. How do you implement caching in Express.js?

## Concepts

Caching stores frequently requested data temporarily so the server does not recompute or refetch it every time.

Benefits:

- Reduces database load
- Improves response time
- Reduces server CPU usage
- Improves scalability

Caching can be implemented at multiple layers:

1. In-memory caching
2. Redis / external cache
3. HTTP caching headers
4. Reverse proxy caching

---

### In-Memory Caching

Useful for small applications.

Libraries:

- `node-cache`
- `lru-cache`

Example use cases:

- Frequently accessed API responses
- Configuration data
- Computed results

---

### HTTP Cache Headers

Server instructs the browser or CDN to cache responses.

Common headers:

- `Cache-Control`
- `ETag`
- `Last-Modified`

---

### Redis Caching

External distributed cache.

Advantages:

- Shared across servers
- High performance
- Persistence options

---

## Code Example

### Basic In-Memory Cache

```js
const express = require("express");
const NodeCache = require("node-cache");

const app = express();
const cache = new NodeCache({ stdTTL: 60 });

app.get("/data", (req, res) => {
  const cachedData = cache.get("data");

  if (cachedData) {
    return res.json({ source: "cache", data: cachedData });
  }

  const data = { message: "Fresh data from server" };

  cache.set("data", data);

  res.json({ source: "server", data });
});

app.listen(3000);
```

---

## Interview Ready Answer

Caching in Express.js can be implemented using in-memory caches like NodeCache, external systems like Redis, or HTTP caching headers. When a request arrives, the server first checks the cache. If the data exists, it returns the cached result; otherwise, it fetches the data, stores it in the cache, and then responds. This significantly improves performance and reduces database load.

---

# 102. What are different caching strategies?

## Concepts

Different caching strategies determine how and when cached data is used or updated.

---

### 1. Cache Aside (Lazy Loading)

Flow:

Request
→ Check cache
→ If miss → fetch from DB
→ Store in cache
→ Return result

Advantages:

- Simple
- Only caches frequently used data

Disadvantages:

- First request slow (cache miss)

---

### 2. Write Through Cache

Flow:

Write to cache
→ Write to database

Advantages:

- Cache always consistent

Disadvantages:

- Slower writes

---

### 3. Write Back (Write Behind)

Flow:

Write to cache
→ Cache asynchronously writes to database

Advantages:

- Faster writes

Disadvantages:

- Risk of data loss

---

### 4. Read Through Cache

Application only reads cache.

Cache system automatically fetches data from database if missing.

---

### 5. Refresh Ahead

Cache refreshes automatically before expiration.

---

### Comparison

| Strategy      | Best Use Case            |
| ------------- | ------------------------ |
| Cache Aside   | Most common web APIs     |
| Write Through | Financial systems        |
| Write Back    | High write workloads     |
| Read Through  | Managed cache systems    |
| Refresh Ahead | Frequently accessed data |

---

## Interview Ready Answer

Common caching strategies include Cache Aside, Write Through, Write Back, Read Through, and Refresh Ahead. Cache Aside is the most commonly used strategy in web applications, where the application first checks the cache and falls back to the database on a cache miss. These strategies help balance performance, consistency, and reliability.

---

# 103. How do you use Redis for caching in Express.js?

## Concepts

Redis is an in-memory data store commonly used as a caching layer.

Advantages:

- Extremely fast
- Supports TTL expiration
- Shared across multiple servers
- Ideal for distributed systems

Common use cases:

- API response caching
- Session storage
- Rate limiting
- Queue management

---

### Architecture

Client Request
→ Express Server
→ Check Redis Cache
→ If hit → return data
→ If miss → query DB → store in Redis

---

## Code Example

### Redis Caching Example

Install dependencies:

```bash
npm install redis
```

Server code:

```js
const express = require("express");
const redis = require("redis");

const app = express();

const client = redis.createClient();

client.connect();

app.get("/users", async (req, res) => {
  const cachedUsers = await client.get("users");

  if (cachedUsers) {
    return res.json(JSON.parse(cachedUsers));
  }

  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];

  await client.setEx("users", 60, JSON.stringify(users));

  res.json(users);
});

app.listen(3000);
```

Explanation:

- `get()` checks cache
- `setEx()` stores data with expiration
- Reduces repeated database queries

---

## Interview Ready Answer

Redis is commonly used in Express.js as a distributed in-memory cache. The application first checks Redis for cached data. If the data exists, it returns it immediately; otherwise, it queries the database, stores the result in Redis with a TTL, and then returns the response. This reduces database load and significantly improves response time.

---

# 104. How do you implement ETags for caching?

## Concepts

ETag = Entity Tag

It is a response header used for HTTP caching.

ETag represents a unique identifier for a resource version.

Flow:

Client request
→ Server sends ETag
→ Client stores ETag
→ Next request includes `If-None-Match`

Server compares:

- If unchanged → return `304 Not Modified`
- If changed → return new content

Benefits:

- Reduces bandwidth
- Avoids sending unchanged data

---

## Code Example

Express automatically supports ETag.

```js
const express = require("express");

const app = express();

app.set("etag", true);

app.get("/data", (req, res) => {
  res.json({ message: "Cached response example" });
});

app.listen(3000);
```

Manual ETag example:

```js
const crypto = require("crypto");

app.get("/data", (req, res) => {
  const data = JSON.stringify({ message: "Hello" });

  const etag = crypto.createHash("md5").update(data).digest("hex");

  if (req.headers["if-none-match"] === etag) {
    return res.status(304).end();
  }

  res.setHeader("ETag", etag);
  res.send(data);
});
```

---

## Interview Ready Answer

ETags are HTTP response headers used for cache validation. The server generates a unique identifier for a resource and sends it with the response. On subsequent requests, the client sends the ETag using the If-None-Match header. If the resource hasn't changed, the server responds with a 304 Not Modified status, avoiding unnecessary data transfer.

---

# 105. How do you optimize Express.js application performance?

## Concepts

Performance optimization focuses on improving response time, scalability, and resource efficiency.

Major areas:

1. Efficient middleware usage
2. Caching strategies
3. Compression
4. Database optimization
5. Load balancing
6. Clustering
7. Asynchronous processing

---

### Key Techniques

Avoid blocking code
Use async operations
Use caching (Redis)
Enable compression
Optimize database queries
Use CDN for static assets
Implement rate limiting

---

## Code Example

Enable compression middleware:

```js
const express = require("express");
const compression = require("compression");

const app = express();

app.use(compression());

app.get("/", (req, res) => {
  res.send("Optimized Express Server");
});

app.listen(3000);
```

---

## Interview Ready Answer

Optimizing an Express.js application involves reducing response time and improving scalability. Common techniques include enabling compression, implementing caching with Redis, optimizing database queries, minimizing middleware usage, and using clustering or load balancing to utilize multiple CPU cores. These strategies help improve performance under high traffic.

---

# 106. What are common performance bottlenecks?

## Concepts

Common performance issues in Express applications include:

---

### 1. Blocking Code

CPU-heavy tasks block the event loop.

Example:

- Image processing
- Complex calculations

Solution:

- Worker threads
- Background jobs

---

### 2. Slow Database Queries

Unoptimized queries can delay responses.

Solution:

- Indexing
- Query optimization
- Caching

---

### 3. Memory Leaks

Objects not released from memory.

Solution:

- Monitor heap usage
- Use profiling tools

---

### 4. Excessive Middleware

Too many middleware functions slow request handling.

---

### 5. Network Latency

Slow external API calls.

Solution:

- Caching
- Circuit breakers

---

## Interview Ready Answer

Common performance bottlenecks in Express.js include blocking CPU-intensive tasks, slow database queries, excessive middleware usage, memory leaks, and network latency from external services. These issues can be mitigated using caching, query optimization, background job processing, and performance monitoring tools.

---

# 107. How do you implement response compression?

## Concepts

Compression reduces response size before sending to clients.

Common algorithms:

- Gzip
- Brotli

Benefits:

- Faster data transfer
- Reduced bandwidth usage
- Improved load times

---

## Code Example

Install middleware:

```bash
npm install compression
```

Implementation:

```js
const express = require("express");
const compression = require("compression");

const app = express();

app.use(compression());

app.get("/data", (req, res) => {
  res.json({ message: "Compressed response" });
});

app.listen(3000);
```

---

## Interview Ready Answer

Response compression in Express.js is implemented using middleware such as the compression package. It compresses HTTP responses using algorithms like gzip or Brotli before sending them to clients. This reduces bandwidth usage and improves response times, especially for large payloads.

---

# 108. How do you use clustering with Express.js?

## Concepts

Node.js runs on a single thread.

Clustering allows multiple Node processes to run across CPU cores.

Benefits:

- Utilizes multi-core CPUs
- Handles more requests
- Improves scalability

---

### Architecture

Load Balancer
→ Multiple Node.js Workers

---

## Code Example

```js
const cluster = require("cluster");
const os = require("os");
const express = require("express");

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Handled by worker " + process.pid);
  });

  app.listen(3000);
}
```

---

## Interview Ready Answer

Clustering in Node.js allows multiple worker processes to run on different CPU cores. The master process distributes incoming requests among worker processes. This enables better CPU utilization and improves application scalability, especially for high-traffic Express.js servers.

---

# 109. How do you load balance Express.js applications?

## Concepts

Load balancing distributes incoming traffic across multiple servers.

Benefits:

- High availability
- Improved scalability
- Fault tolerance

---

### Common Methods

1. Reverse proxy (Nginx)
2. Cloud load balancers
3. Application-level load balancing

---

### Algorithms

- Round Robin
- Least Connections
- IP Hash

---

## Interview Ready Answer

Load balancing distributes incoming requests across multiple Express.js instances to improve scalability and reliability. This is typically implemented using reverse proxies like Nginx, cloud load balancers, or container orchestration systems. Load balancing prevents any single server from becoming overloaded.

---

# 110. How do you handle sticky sessions?

## Concepts

Sticky sessions ensure that requests from the same client are routed to the same server.

Needed when using:

- Session-based authentication
- In-memory session storage

Problem:

Without sticky sessions, requests may hit different servers and lose session data.

---

### Solutions

1. Use Redis session store
2. Enable sticky sessions in load balancer
3. Use token-based authentication (JWT)

---

## Code Example

Using Redis session store:

```js
const session = require("express-session");
const RedisStore = require("connect-redis");

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  }),
);
```

---

## Interview Ready Answer

Sticky sessions ensure that requests from a client are consistently routed to the same server instance. This is important when session data is stored in memory. A better solution in distributed systems is storing sessions in a shared store like Redis, allowing any server instance to access session data.

---

# 111. How do you use Nginx with Express.js?

## Concepts

Nginx is commonly used as a reverse proxy in front of Express.js.

Benefits:

- Load balancing
- SSL termination
- Static file serving
- Rate limiting
- Security layer

---

### Architecture

Client
→ Nginx
→ Express Server

---

## Example Nginx Configuration

```
server {
    listen 80;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }
}
```

---

## Interview Ready Answer

Nginx is commonly used as a reverse proxy in front of Express.js applications. It forwards client requests to the Node.js server, handles SSL termination, serves static files, and can distribute traffic across multiple backend servers. This improves performance, security, and scalability in production environments.

# 112. How do you test Express.js applications?

## Concepts

Testing an Express.js application ensures that APIs behave correctly, logic works as expected, and regressions are prevented.

Testing usually happens at multiple levels:

1. **Unit Testing**
   - Tests individual functions or modules
   - No real database or external services

2. **Integration Testing**
   - Tests interaction between components
   - Example: route → controller → database

3. **End-to-End Testing**
   - Tests full application flow
   - Simulates real user behavior

Common testing approach in Express:

- Test **controllers**
- Test **routes**
- Test **middleware**
- Test **error handling**
- Test **API responses**

Common tools used:

- Jest
- Mocha
- Chai
- Supertest

---

## Code Example

Example Express App:

```js
// app.js
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

module.exports = app;
```

Test File:

```js
const request = require("supertest");
const app = require("./app");

describe("GET /hello", () => {
  it("should return hello message", async () => {
    const res = await request(app).get("/hello");

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello World");
  });
});
```

Explanation:

- `supertest` simulates HTTP requests
- No need to start real server
- Test checks response status and body

---

## Interview Ready Answer

Express.js applications are tested using automated tests at different levels such as unit tests, integration tests, and end-to-end tests. Tools like Jest or Mocha are used for test runners, while Supertest is commonly used to simulate HTTP requests to Express APIs. Tests verify routes, controllers, middleware, and error handling to ensure the API behaves correctly.

---

# 113. What is the difference between unit, integration, and end-to-end tests?

## Concepts

### Unit Tests

Unit tests verify **smallest units of code**, such as functions or methods.

Characteristics:

- Fast
- Isolated
- Dependencies mocked

Example:

Testing a utility function.

---

### Integration Tests

Integration tests verify **interaction between multiple components**.

Example:

- Route
- Controller
- Database

These tests ensure components work together correctly.

---

### End-to-End (E2E) Tests

End-to-end tests simulate **real user workflows**.

Example flow:

User → API → Database → Response

They validate the entire application.

---

### Comparison Table

| Test Type   | Scope            | Dependencies  | Speed  |
| ----------- | ---------------- | ------------- | ------ |
| Unit        | Single function  | Mocked        | Fast   |
| Integration | Multiple modules | Partial real  | Medium |
| End-to-End  | Full system      | Real services | Slow   |

---

## Code Example

Unit Test Example:

```js
function add(a, b) {
  return a + b;
}

test("adds numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```

Integration Test Example:

```js
request(app).post("/users").send({ name: "Tanish" }).expect(201);
```

---

## Interview Ready Answer

Unit tests verify individual functions in isolation, usually with mocked dependencies. Integration tests verify interactions between multiple modules such as routes, controllers, and databases. End-to-end tests validate the entire application flow from request to response, simulating real user behavior.

---

# 114. How do you mock dependencies in tests?

## Concepts

Mocking replaces real dependencies with simulated versions.

Why mocking is needed:

- Avoid external API calls
- Avoid database operations
- Control test behavior
- Improve test speed

Common dependencies mocked:

- Database
- External APIs
- Authentication services
- File system

Tools used:

- Jest mocks
- Sinon
- Manual stubs

---

## Code Example

Example Controller:

```js
const userService = require("./userService");

exports.getUser = async (req, res) => {
  const user = await userService.getUserById(1);
  res.json(user);
};
```

Mocking in Jest:

```js
jest.mock("./userService");

const userService = require("./userService");

userService.getUserById.mockResolvedValue({
  id: 1,
  name: "Tanish",
});
```

Test:

```js
test("should return mocked user", async () => {
  const res = await request(app).get("/user");

  expect(res.body.name).toBe("Tanish");
});
```

Explanation:

- Real service not called
- Mock response returned

---

## Interview Ready Answer

Mocking replaces real dependencies such as databases or external APIs with simulated implementations during testing. This isolates the unit being tested and improves test speed and reliability. Tools like Jest provide built-in mocking capabilities using jest.mock() to simulate module behavior.

---

# 115. How do you use Jest with Express.js?

## Concepts

Jest is a popular testing framework for JavaScript.

Features:

- Test runner
- Assertions
- Mocking
- Snapshot testing
- Coverage reports

Typical setup:

1. Install Jest
2. Write test files
3. Run tests using npm scripts

---

## Code Example

Install:

```bash
npm install --save-dev jest supertest
```

package.json:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Test Example:

```js
const request = require("supertest");
const app = require("./app");

describe("GET /hello", () => {
  it("should return message", async () => {
    const res = await request(app).get("/hello");

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello World");
  });
});
```

Run tests:

```bash
npm test
```

---

## Interview Ready Answer

Jest is commonly used to test Express.js applications as it provides a test runner, assertions, and mocking utilities. Express routes are usually tested using Supertest to simulate HTTP requests. Tests are written in separate files and executed using the Jest CLI through npm scripts.

---

# 116. How do you use Mocha/Chai with Express.js?

## Concepts

Mocha and Chai are commonly used together for testing.

Mocha:

- Test runner

Chai:

- Assertion library

Additional tools:

- Supertest → HTTP testing
- Sinon → mocking

---

## Code Example

Install:

```bash
npm install mocha chai supertest --save-dev
```

Test Example:

```js
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("./app");

describe("GET /hello", () => {
  it("should return hello message", async () => {
    const res = await request(app).get("/hello");

    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal("Hello World");
  });
});
```

Run tests:

```bash
npx mocha
```

---

## Interview Ready Answer

Mocha is used as a test runner while Chai provides assertion utilities. Supertest is commonly used alongside them to test Express APIs. Mocha executes the test cases and Chai verifies the expected results using assertion methods like expect or should.

---

# 117. How do you test API endpoints?

## Concepts

API endpoints are tested by sending simulated HTTP requests and verifying the responses.

Typical checks include:

- Status code
- Response body
- Headers
- Error responses

Common tool:

- Supertest

---

## Code Example

```js
const request = require("supertest");
const app = require("./app");

describe("POST /users", () => {
  it("should create a user", async () => {
    const res = await request(app).post("/users").send({ name: "Tanish" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Tanish");
  });
});
```

Explanation:

- `supertest` sends HTTP request
- Express route executed
- Response validated

---

## Interview Ready Answer

API endpoints in Express.js are typically tested using Supertest, which allows sending HTTP requests directly to the Express application. Tests verify status codes, response data, and headers to ensure the API behaves as expected.

---

# 118. How do you test middleware functions?

## Concepts

Middleware functions process requests before reaching route handlers.

Testing focuses on:

- Request modification
- Response handling
- `next()` behavior

Approach:

- Mock request object
- Mock response object
- Mock next function

---

## Code Example

Middleware:

```js
function logger(req, res, next) {
  console.log("Request received");
  next();
}
```

Test:

```js
test("middleware should call next", () => {
  const req = {};
  const res = {};
  const next = jest.fn();

  logger(req, res, next);

  expect(next).toHaveBeenCalled();
});
```

---

## Interview Ready Answer

Middleware functions can be tested by mocking the request, response, and next objects. The test verifies whether the middleware modifies the request correctly or calls the next function as expected.

---

# 119. How do you measure test coverage?

## Concepts

Test coverage measures how much of the codebase is executed during tests.

Metrics include:

- Statements
- Branches
- Functions
- Lines

Coverage helps identify untested parts of the code.

Tools:

- Jest
- Istanbul
- nyc

---

## Code Example

Run coverage in Jest:

```bash
npm test -- --coverage
```

Example output:

```
Statements : 85%
Branches   : 80%
Functions  : 90%
Lines      : 85%
```

Coverage report generated in:

```
coverage/
```

---

## Interview Ready Answer

Test coverage measures how much of the application's code is executed during testing. Tools like Jest and Istanbul generate coverage reports that include metrics such as statements, branches, functions, and lines covered. This helps identify untested code and improve overall test quality.

---

# 120. How do you write tests for error cases?

## Concepts

Error case testing ensures that the application handles failures correctly.

Common cases:

- Invalid input
- Authentication failure
- Database errors
- Internal server errors

Tests should verify:

- Correct status code
- Error message
- Proper error handling middleware

---

## Code Example

Express Route:

```js
app.get("/user/:id", (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  res.json({ id: req.params.id });
});
```

Test:

```js
test("should return error for invalid id", async () => {
  const res = await request(app).get("/user/");

  expect(res.statusCode).toBe(400);
  expect(res.body.error).toBe("Invalid ID");
});
```

---

## Interview Ready Answer

Error case testing verifies that the application handles invalid inputs and failures properly. Tests simulate error scenarios and check whether the correct status codes and error messages are returned. This ensures that APIs fail gracefully and maintain reliability.
