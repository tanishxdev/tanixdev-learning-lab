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
