Source:

---

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

Source:

---

# 6. Why is Node.js single-threaded? How does it handle concurrency?

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

The reactor pattern is a design pattern where a single thread waits for events and dispatches handlers when events occur. Node.js implements this pattern through its event loop and non-blocking I/O system, enabling efficient handling of concurrent operations.

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

# 16. What is the difference between exports and module.exports?

## Concepts

`exports` is reference to `module.exports`.

Correct:

```js
module.exports = function () {};
```

Wrong:

```js
exports = function () {};
```

---

## Code Example

```js
exports.add = (a, b) => a + b;
```

Equivalent to:

```js
module.exports.add = (a, b) => a + b;
```

---

## Interview Ready Answer

exports is simply a reference to module.exports. If you assign directly to exports, it breaks the reference. To export a function or object, you should use module.exports.

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

# 18. What is the purpose of require.resolve()?

## Concepts

Returns:

- Absolute path of module
- Does not load module

---

## Code Example

```js
console.log(require.resolve("fs"));
```

---

## Interview Ready Answer

require.resolve() returns the resolved absolute path of a module without loading or executing it. It is useful for debugging module resolution paths.

---

# 19. Explain the module wrapper function in Node.js.

## Concepts

Every module wrapped as:

```js
(function (exports, require, module, __filename, __dirname) {
  // module code
});
```

Purpose:

- Encapsulation
- Local scope
- Avoid global pollution

---

## Interview Ready Answer

Node.js wraps every module inside a function before execution. This wrapper provides local variables like exports, require, module, **filename, and **dirname. It ensures module-level scope and prevents global namespace pollution.

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
