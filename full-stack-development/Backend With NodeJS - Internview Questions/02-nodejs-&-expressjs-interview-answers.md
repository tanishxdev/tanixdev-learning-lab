Role 3 — Candidate Mode
Starting in proper order from:

PART 1 → NODE.JS → I. NODE.JS FUNDAMENTALS → 1. Core Concepts → Question 1

---

# Question 1: What is Node.js and how does it differ from traditional server-side technologies?

---

## Step 1 — Direct Definition

Node.js is a JavaScript runtime built on Chrome’s V8 engine that allows JavaScript to run outside the browser, primarily on the server.

Traditionally, JavaScript only ran in browsers. Node.js made it possible to build backend servers using JavaScript.

---

## Step 2 — What Makes Node.js Special?

If I break it down technically:

- Built on V8 (compiles JS to machine code)
- Single-threaded
- Event-driven
- Non-blocking I/O
- Uses event loop + libuv for async handling

The core strength is asynchronous, non-blocking architecture.

---

## Step 3 — How Traditional Server-Side Tech Works

Traditional systems like:

- PHP
- Java (Servlets)
- .NET

Follow a thread-per-request model.

Meaning:

1 request → 1 thread
1000 requests → 1000 threads

This increases memory usage and context switching.

---

## Step 4 — How Node.js Handles Requests

Node.js:

- Uses a single thread
- Handles I/O asynchronously
- Uses event loop to manage concurrency

Instead of blocking for file/database/network operations, it delegates them and continues processing.

So:

1000 requests → Still one main thread
Heavy work → Delegated to worker threads (via libuv)

This makes it lightweight and efficient for I/O-heavy systems.

---

## Step 5 — Blocking vs Non-Blocking Example

Traditional (Blocking Model):

```
Request A → waits for DB → thread blocked
Request B → new thread needed
```

Node.js (Non-blocking Model):

```
Request A → DB call → continues handling Request B
When DB completes → callback executed
```

---

## Step 6 — Where Node.js Excels

Node.js is best for:

- APIs
- Real-time apps (chat, gaming)
- Streaming
- Microservices
- I/O heavy workloads

Not ideal for:

- CPU-intensive heavy computations
- Large mathematical processing (unless using worker threads)

---

## Step 7 — Architecture Comparison

Traditional:

Multi-threaded
Blocking I/O
High memory usage

Node.js:

Single-threaded
Non-blocking I/O
Event-driven
Low memory usage

---

## Step 8 — Interview-Level Summary Answer

Node.js is a JavaScript runtime built on the V8 engine that allows JavaScript to run on the server side. Unlike traditional server-side technologies that use a thread-per-request model, Node.js uses a single-threaded, event-driven, non-blocking I/O model. This makes it highly efficient for I/O-bound applications like APIs, real-time systems, and streaming services, though less suitable for CPU-heavy workloads without worker threads.

---

Next:

Question 2: Explain the V8 JavaScript engine and its role in Node.js.

Role 3 — Candidate Mode
Continuing in proper order:

PART 1 → NODE.JS → I. NODE.JS FUNDAMENTALS → 1. Core Concepts → Question 2

---

# Question 2: Explain the V8 JavaScript engine and its role in Node.js.

---

## Step 1 — Direct Definition

V8 is Google’s open-source JavaScript engine written in C++.

It is the engine used in:

- Google Chrome
- Node.js

Its main job is:

Convert JavaScript code into machine code so it can run fast.

---

## Step 2 — What Problem Does V8 Solve?

JavaScript is a high-level language.

Computers only understand machine code (binary instructions).

So we need a JavaScript engine that:

1. Parses JavaScript
2. Converts it into optimized machine code
3. Executes it efficiently

V8 does exactly that.

---

## Step 3 — How V8 Works (Important for Interview)

Earlier JS engines used interpretation.

V8 uses:

Just-In-Time (JIT) compilation.

Flow:

1. JS code → Parsed into AST (Abstract Syntax Tree)
2. Converted to bytecode
3. JIT compiler converts hot code into optimized machine code
4. Executes directly on CPU

So execution becomes very fast.

---

## Step 4 — Why V8 is Important for Node.js

Node.js itself is written in C++.

But when you write:

```js
console.log("Hello");
```

Node does not understand JS directly.

V8:

- Takes that JS
- Compiles it to machine code
- Executes it

So V8 is the engine that actually runs your JavaScript in Node.

Without V8, Node.js cannot execute JavaScript.

---

## Step 5 — What Node Adds on Top of V8

Important distinction:

V8 only executes JavaScript.

It does NOT provide:

- File system access
- Networking
- HTTP server
- OS-level APIs

Node.js provides those using:

- libuv (for async I/O)
- C++ bindings
- Core modules (fs, http, path, etc.)

So:

V8 → Executes JS
Node.js → Provides backend capabilities

---

## Step 6 — Performance Insight

V8 uses:

- Hidden classes
- Inline caching
- Garbage collection
- Optimization + de-optimization

This makes JS execution:

- Very fast
- Comparable to compiled languages in many cases

That’s why Node is high-performance.

---

## Step 7 — Short Comparison

Browser:

JS → V8 → Browser APIs (DOM)

Node.js:

JS → V8 → Node APIs (fs, http, etc.)

---

## Step 8 — Interview-Level Summary Answer

V8 is Google’s open-source JavaScript engine written in C++. It compiles JavaScript into optimized machine code using Just-In-Time compilation. In Node.js, V8 is responsible for executing JavaScript code, while Node.js adds system-level APIs like file system and networking on top of V8. Without V8, Node.js would not be able to run JavaScript.

---

Next:

Question 3: What is the event loop in Node.js? Explain its phases.

Role 3 — Candidate Mode
Continuing in proper order:

PART 1 → NODE.JS → I. NODE.JS FUNDAMENTALS → 1. Core Concepts → Question 3

---

# Question 3: What is the Event Loop in Node.js? Explain its phases.

---

## Step 1 — Simple Definition

The Event Loop is the core mechanism in Node.js that allows it to handle asynchronous operations using a single thread.

It continuously checks:

- Is there any callback ready to execute?
- If yes → execute it
- If no → wait

That loop keeps running until the process exits.

---

## Step 2 — Why Event Loop Exists

Node.js is single-threaded.

So how does it handle:

- 1000 API requests?
- DB calls?
- File reads?

It does not block the thread.

Instead:

1. Delegates I/O work to libuv / OS
2. Registers a callback
3. Event loop executes callback when ready

This is what makes Node non-blocking.

---

## Step 3 — High-Level Working Flow

Example:

```js
setTimeout(() => {
  console.log("Hello");
}, 1000);

console.log("World");
```

Execution order:

1. setTimeout registered
2. console.log("World") runs immediately
3. After 1 second → callback goes to event loop
4. Event loop executes callback → "Hello"

Output:

```
World
Hello
```

---

## Step 4 — Event Loop Phases (Very Important for Interview)

The event loop has 6 main phases:

---

### 1. Timers Phase

Executes callbacks scheduled by:

- setTimeout()
- setInterval()

Important: Only runs callbacks whose timer has expired.

---

### 2. Pending Callbacks Phase

Executes I/O callbacks deferred from previous cycle.

Examples:

- TCP errors
- Some system-level operations

---

### 3. Idle / Prepare Phase

Internal use only.
Node prepares for poll phase.

Interview answer: You can mention it exists but rarely manually used.

---

### 4. Poll Phase (Most Important Phase)

This is the heart of the event loop.

What happens here:

- Retrieve new I/O events
- Execute I/O callbacks
- Wait for new events if none exist

If nothing is in poll queue:

- It may block and wait
- Or move to check phase

---

### 5. Check Phase

Executes callbacks scheduled by:

- setImmediate()

Difference:
setImmediate runs here
setTimeout runs in timers phase

---

### 6. Close Callbacks Phase

Executes close events:

Example:

```js
socket.on("close", () => {});
```

---

## Step 5 — Microtasks (Very Important Extra Point)

Microtasks are NOT part of phases but run:

- Immediately after current operation
- Before moving to next phase

Includes:

- Promise.then()
- process.nextTick()

Important difference:

process.nextTick runs before Promise microtasks.

Execution Priority:

1. process.nextTick()
2. Promise callbacks
3. Event loop phases

---

## Step 6 — Visual Flow (Simplified Order)

Loop cycle:

Timers
→ Pending callbacks
→ Idle/prepare
→ Poll
→ Check
→ Close callbacks

Microtasks run between each phase.

---

## Step 7 — Real Interview-Level Insight

Why is event loop powerful?

Because:

- Only one thread
- No context switching
- Efficient for I/O-bound tasks

Why not good for CPU-heavy tasks?

Because long synchronous code blocks the loop.

Example:

```js
while (true) {}
```

Server becomes unresponsive.

---

## Step 8 — Interview-Level Summary Answer

The event loop is the core mechanism that enables Node.js to handle asynchronous operations in a single-threaded environment. It continuously processes callback queues in different phases such as timers, pending callbacks, poll, check, and close callbacks. It allows Node.js to perform non-blocking I/O by delegating tasks and executing callbacks when they are ready, making it highly efficient for I/O-heavy applications.

---

Next:

Question 4: How does Node.js handle asynchronous operations?

Role 3 — Candidate Mode
Continuing in proper order:

PART 1 → NODE.JS → I. NODE.JS FUNDAMENTALS → 1. Core Concepts → Question 3

---

# Question 3: What is the Event Loop in Node.js? Explain its phases.

---

## Step 1 — Simple Definition

The Event Loop is the core mechanism in Node.js that allows it to handle asynchronous operations using a single thread.

It continuously checks:

- Is there any callback ready to execute?
- If yes → execute it
- If no → wait

That loop keeps running until the process exits.

---

## Step 2 — Why Event Loop Exists

Node.js is single-threaded.

So how does it handle:

- 1000 API requests?
- DB calls?
- File reads?

It does not block the thread.

Instead:

1. Delegates I/O work to libuv / OS
2. Registers a callback
3. Event loop executes callback when ready

This is what makes Node non-blocking.

---

## Step 3 — High-Level Working Flow

Example:

```js
setTimeout(() => {
  console.log("Hello");
}, 1000);

console.log("World");
```

Execution order:

1. setTimeout registered
2. console.log("World") runs immediately
3. After 1 second → callback goes to event loop
4. Event loop executes callback → "Hello"

Output:

```
World
Hello
```

---

## Step 4 — Event Loop Phases (Very Important for Interview)

The event loop has 6 main phases:

---

### 1. Timers Phase

Executes callbacks scheduled by:

- setTimeout()
- setInterval()

Important: Only runs callbacks whose timer has expired.

---

### 2. Pending Callbacks Phase

Executes I/O callbacks deferred from previous cycle.

Examples:

- TCP errors
- Some system-level operations

---

### 3. Idle / Prepare Phase

Internal use only.
Node prepares for poll phase.

Interview answer: You can mention it exists but rarely manually used.

---

### 4. Poll Phase (Most Important Phase)

This is the heart of the event loop.

What happens here:

- Retrieve new I/O events
- Execute I/O callbacks
- Wait for new events if none exist

If nothing is in poll queue:

- It may block and wait
- Or move to check phase

---

### 5. Check Phase

Executes callbacks scheduled by:

- setImmediate()

Difference:
setImmediate runs here
setTimeout runs in timers phase

---

### 6. Close Callbacks Phase

Executes close events:

Example:

```js
socket.on("close", () => {});
```

---

## Step 5 — Microtasks (Very Important Extra Point)

Microtasks are NOT part of phases but run:

- Immediately after current operation
- Before moving to next phase

Includes:

- Promise.then()
- process.nextTick()

Important difference:

process.nextTick runs before Promise microtasks.

Execution Priority:

1. process.nextTick()
2. Promise callbacks
3. Event loop phases

---

## Step 6 — Visual Flow (Simplified Order)

Loop cycle:

Timers
→ Pending callbacks
→ Idle/prepare
→ Poll
→ Check
→ Close callbacks

Microtasks run between each phase.

---

## Step 7 — Real Interview-Level Insight

Why is event loop powerful?

Because:

- Only one thread
- No context switching
- Efficient for I/O-bound tasks

Why not good for CPU-heavy tasks?

Because long synchronous code blocks the loop.

Example:

```js
while (true) {}
```

Server becomes unresponsive.

---

## Step 8 — Interview-Level Summary Answer

The event loop is the core mechanism that enables Node.js to handle asynchronous operations in a single-threaded environment. It continuously processes callback queues in different phases such as timers, pending callbacks, poll, check, and close callbacks. It allows Node.js to perform non-blocking I/O by delegating tasks and executing callbacks when they are ready, making it highly efficient for I/O-heavy applications.

---

Next:

Question 4: How does Node.js handle asynchronous operations?

Role 3 — Candidate Mode
Continuing in proper order:

PART 1 → NODE.JS → I. NODE.JS FUNDAMENTALS → 1. Core Concepts → Question 4

---

# Question 4: How does Node.js handle asynchronous operations?

---

## Step 1 — Core Idea

Node.js handles asynchronous operations using:

- Event loop
- libuv
- Callback queue
- Promises / async-await

It does not block the main thread while waiting for I/O operations.

---

## Step 2 — The Real Problem

Imagine this code:

```js
const data = fs.readFileSync("file.txt");
console.log(data);
```

This blocks the thread until file reading completes.

If 100 users request the same file → server waits → performance drops.

So Node uses non-blocking I/O.

---

## Step 3 — What Happens Internally (Very Important)

Example:

```js
fs.readFile("file.txt", (err, data) => {
  console.log(data);
});
console.log("Done");
```

Execution flow:

1. Node calls fs.readFile
2. It delegates file reading to libuv / OS
3. Registers callback
4. Continues executing next line
5. Prints "Done"
6. Once file read completes → callback pushed to callback queue
7. Event loop executes callback

Output:

```
Done
(file content)
```

---

## Step 4 — What is libuv?

libuv is a C library used by Node.js to handle:

- File I/O
- Networking
- Thread pool
- Asynchronous operations

It uses:

- OS async APIs
- Thread pool (for operations OS doesn’t support asynchronously)

Default thread pool size = 4

So heavy tasks can run in background.

---

## Step 5 — Mechanisms for Async Handling

Node supports multiple async patterns:

### 1. Callbacks (Oldest)

```js
fs.readFile("file.txt", function (err, data) {
  if (err) return console.error(err);
  console.log(data);
});
```

Problem: Callback hell.

---

### 2. Promises

```js
fs.promises
  .readFile("file.txt")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

Better chaining and error handling.

---

### 3. Async/Await (Modern)

```js
async function readFile() {
  try {
    const data = await fs.promises.readFile("file.txt");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

Cleaner, synchronous-like syntax.

---

## Step 6 — How Concurrency Actually Works

Important interview clarity:

Node is:

Single-threaded
But not single-tasked

It handles concurrency via:

- Event loop
- Background threads (libuv thread pool)
- OS async mechanisms

So multiple requests are handled efficiently without creating new threads per request.

---

## Step 7 — CPU vs I/O Difference

I/O operations:

- Delegated to OS/libuv
- Non-blocking

CPU-heavy code:

- Runs on main thread
- Blocks event loop

Solution for CPU tasks:

- Worker Threads
- Child Processes

---

## Step 8 — Execution Model Summary

Request comes in
→ Node registers async operation
→ Delegates to libuv
→ Event loop keeps running
→ Callback executed when ready

That’s how Node handles asynchronous operations.

---

## Step 9 — Interview-Level Summary Answer

Node.js handles asynchronous operations using an event-driven, non-blocking architecture. When an asynchronous task like file reading or a database call is initiated, Node delegates it to libuv or the operating system. The main thread continues executing other code while the event loop waits for the operation to complete. Once finished, the callback is placed in the callback queue and executed by the event loop. Modern implementations use Promises and async/await for better readability and error handling.

---

Next:

Question 5: What is libuv and what role does it play in Node.js?
Role 3 — Candidate Mode
Continuing in proper order:

PART 1 → NODE.JS → I. NODE.JS FUNDAMENTALS → 1. Core Concepts → Question 5

---

# Question 5: What is libuv and what role does it play in Node.js?

---

## Step 1 — Direct Definition

libuv is a multi-platform C library that provides asynchronous I/O operations in Node.js.

It is responsible for:

- Event loop implementation
- Thread pool management
- File system operations
- Networking
- Timers

In simple words:

V8 executes JavaScript.
libuv handles asynchronous system-level operations.

---

## Step 2 — Why libuv is Needed

JavaScript is single-threaded.

But OS-level operations like:

- File reading
- Database calls
- Network requests
- DNS lookups

Cannot block the main thread.

So Node uses libuv to handle these in the background.

Without libuv, Node.js would block on I/O.

---

## Step 3 — What libuv Actually Does Internally

When you write:

```js
fs.readFile("file.txt", callback);
```

Here’s what happens:

1. JS code runs in V8.
2. Node hands file read request to libuv.
3. libuv:
   - Uses OS async APIs if available
   - Or uses its internal thread pool (default size = 4)

4. Once operation completes:
   - Callback is pushed into event loop queue.

5. Event loop executes callback.

So libuv is the bridge between:

JavaScript world
and
Operating System world

---

## Step 4 — libuv Thread Pool

Important interview detail:

Not all operations are natively async in OS.

For those cases, libuv uses a thread pool.

Default size = 4 threads
Can be increased using:

```
UV_THREADPOOL_SIZE=8
```

Thread pool is used for:

- File system operations
- DNS
- Some crypto operations
- Compression

---

## Step 5 — Event Loop Connection

The event loop you study in Node:

Is actually implemented by libuv.

So technically:

Node’s event loop = libuv’s event loop.

---

## Step 6 — Real Architecture Flow

JS Code
→ V8 executes JS
→ libuv handles async tasks
→ OS executes task
→ Completion signal
→ Event loop processes callback

This is the core architecture.

---

## Step 7 — Important Interview Insight

Node.js is:

Single-threaded at JS level
Multi-threaded at system level (via libuv)

That’s the key understanding.

---

## Step 8 — Interview-Level Summary Answer

libuv is a cross-platform C library used by Node.js to implement asynchronous I/O operations and the event loop. It manages the thread pool, handles file system and network operations, and bridges Node.js with the operating system. While V8 executes JavaScript code, libuv ensures non-blocking behavior by delegating I/O tasks to background threads or OS-level async APIs, enabling Node.js to handle concurrency efficiently.

---

Next:

Question 6: Why is Node.js single-threaded? How does it handle concurrency?

Role 3 — Candidate Mode
Continuing in proper order:

PART 1 → NODE.JS → I. NODE.JS FUNDAMENTALS → 1. Core Concepts → Question 6

---

# Question 6: Why is Node.js single-threaded? How does it handle concurrency?

---

## Step 1 — First Clarify the Statement

Node.js is single-threaded at the JavaScript execution level.

But internally, it is not fully single-threaded because:

- It uses libuv thread pool
- It uses OS-level async APIs

So the correct statement is:

Node.js runs JavaScript on a single main thread but achieves concurrency using asynchronous mechanisms.

---

## Step 2 — Why Node.js is Single-Threaded

Design decision.

JavaScript was originally built for browsers, which were single-threaded environments.

Node adopted the same model for:

- Simplicity
- No race conditions
- No shared-memory thread bugs
- Easier programming model

Multi-threading introduces:

- Deadlocks
- Race conditions
- Complex synchronization

Node avoids that complexity.

---

## Step 3 — What Happens in Traditional Servers

Traditional backend systems:

1 request → 1 thread
1000 requests → 1000 threads

Problems:

- High memory usage
- Context switching overhead
- Scalability limitations

---

## Step 4 — How Node.js Handles Concurrency

Node uses:

Event Loop + libuv + Non-blocking I/O

Flow:

1. Request comes in
2. If operation is I/O (DB, file, network):
   - Delegated to OS/libuv

3. Main thread continues handling other requests
4. When operation completes:
   - Callback executed via event loop

So concurrency is achieved without creating new threads per request.

---

## Step 5 — Example to Explain in Interview

```js
const fs = require("fs");

fs.readFile("file.txt", () => {
  console.log("File read complete");
});

console.log("Server continues...");
```

Execution:

1. fs.readFile delegated to libuv
2. "Server continues..." runs immediately
3. Callback runs later

This shows non-blocking concurrency.

---

## Step 6 — Important Distinction

Concurrency ≠ Parallelism

Concurrency:
Handling multiple tasks efficiently.

Parallelism:
Running multiple tasks at the same time on multiple CPUs.

Node is:

Concurrent (via async)
Not parallel (unless using worker threads)

---

## Step 7 — How Node Handles CPU-Intensive Work

If heavy computation runs:

```js
while (true) {}
```

Event loop blocks.

To handle CPU tasks:

- Worker Threads
- Child Processes
- Clustering

These provide real parallelism.

---

## Step 8 — Architecture Summary

JavaScript runs on single thread
I/O handled by libuv / OS
Callbacks managed by event loop
Thread pool handles background tasks

This is how Node achieves high scalability.

---

## Step 9 — Interview-Level Summary Answer

Node.js is single-threaded at the JavaScript level to simplify programming and avoid complex multi-threading issues like race conditions. It achieves concurrency using an event-driven, non-blocking I/O model. When asynchronous operations such as file reads or database calls occur, they are delegated to libuv or the operating system, allowing the main thread to continue executing other tasks. This enables Node.js to handle many concurrent connections efficiently without creating multiple threads per request.

---

Next:

Question 7: Differentiate between blocking and non-blocking I/O in Node.js.

Role 3 — Candidate Mode
Continuing in proper order:

PART 1 → NODE.JS → I. NODE.JS FUNDAMENTALS → 1. Core Concepts → Question 7

---

# Question 7: Differentiate between blocking and non-blocking I/O in Node.js.

---

## Step 1 — First Define I/O

I/O means:

Input/Output operations like:

- Reading files
- Writing files
- Database queries
- Network requests

These operations interact with external systems and usually take time.

---

# 1. Blocking I/O

## Definition

Blocking I/O stops the execution of the program until the operation completes.

The thread waits.

Nothing else runs during that time.

---

## Example (Blocking)

```js
const fs = require("fs");

const data = fs.readFileSync("file.txt");
console.log(data);

console.log("Done");
```

Execution Flow:

1. readFileSync starts
2. Program waits until file is read
3. Then console.log(data)
4. Then "Done"

If file takes 5 seconds → program freezes for 5 seconds.

---

## Problem in Server

If 1000 users request:

- Each request blocks
- Server becomes slow
- Throughput drops

Blocking = bad for scalability

---

# 2. Non-Blocking I/O

## Definition

Non-blocking I/O does not stop program execution.

The operation runs in background, and a callback executes when it completes.

---

## Example (Non-Blocking)

```js
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
  console.log(data);
});

console.log("Done");
```

Execution Flow:

1. readFile delegated to libuv
2. "Done" prints immediately
3. File content prints later

Output:

```
Done
(file content)
```

---

## Why Non-Blocking is Powerful

- Main thread remains free
- Handles multiple requests
- Scalable for I/O-heavy apps

---

# 3. Real Interview-Level Difference

| Feature      | Blocking I/O          | Non-Blocking I/O        |
| ------------ | --------------------- | ----------------------- |
| Execution    | Waits until done      | Continues execution     |
| Thread usage | Thread blocked        | Thread free             |
| Scalability  | Poor                  | High                    |
| Used in Node | Rarely (Sync methods) | Default (Async methods) |
| Example      | readFileSync          | readFile                |

---

# 4. Important Insight

Blocking is not always wrong.

Sometimes used:

- Startup configuration
- Scripts
- Small utilities

But never inside request handlers in production servers.

---

# 5. Event Loop Impact

Blocking code:

```
while(true) {}
```

Completely blocks event loop → server dead.

Non-blocking:

Allows event loop to continue processing.

---

# 6. Interview-Level Summary Answer

Blocking I/O stops program execution until the operation completes, preventing the event loop from handling other tasks. Non-blocking I/O delegates operations to libuv or the OS and allows the main thread to continue executing. In Node.js, non-blocking I/O is preferred because it enables high concurrency and scalability, especially for I/O-heavy applications.

---

Next:

Question 8: What is REPL in Node.js? How do you use it?

Role 3 — Candidate Mode
Continuing in proper order:

PART 1 → NODE.JS → I. NODE.JS FUNDAMENTALS → 1. Core Concepts → Question 8

---

# Question 8: What is REPL in Node.js? How do you use it?

---

## Step 1 — What is REPL?

REPL stands for:

Read
Evaluate
Print
Loop

It is an interactive command-line environment where you can execute JavaScript code directly without creating a file.

It is mainly used for:

- Testing small code snippets
- Debugging
- Experimenting with Node features

---

## Step 2 — How REPL Works (Break the Name)

Read
→ Takes user input

Evaluate
→ Executes the code using V8

Print
→ Outputs result

Loop
→ Waits for next input

This cycle continues until you exit.

---

## Step 3 — How to Start REPL

In terminal:

```
node
```

You will see:

```
>
```

Now you can write JavaScript.

---

## Step 4 — Example Usage

```js
> 2 + 3
5

> const name = "Tanish"
undefined

> name
'Tanish'
```

Notice:

When you declare variable, it prints `undefined` because assignment does not return value.

---

## Step 5 — Useful REPL Commands

### 1. `.help`

Shows available commands.

### 2. `.editor`

Enters multi-line mode.

### 3. `.exit`

Exit REPL.

### 4. `_`

Stores last result.

Example:

```js
> 10 + 5
15
> _ * 2
30
```

---

## Step 6 — Why REPL is Useful in Interview / Real Work

- Quickly test APIs
- Test async behavior
- Understand modules
- Experiment with Promises

It speeds up debugging.

---

## Step 7 — Advanced Insight

Node REPL can also:

- Load modules
- Use await directly (in modern Node versions)
- Execute scripts dynamically

Example:

```js
> await Promise.resolve(10)
10
```

---

## Step 8 — Interview-Level Summary Answer

REPL in Node.js stands for Read-Evaluate-Print-Loop. It is an interactive command-line environment that allows developers to execute JavaScript code directly without writing it in a file. It reads user input, evaluates it using the V8 engine, prints the result, and then waits for the next command. It is commonly used for testing, debugging, and experimenting with Node.js features.

---

This completes:

NODE.JS FUNDAMENTALS → Core Concepts (1–8)

Next section:

Node.js Architecture → Question 9: Explain the Node.js runtime architecture.

Role 3 — Candidate Mode
Continuing in proper order:

PART 1 → NODE.JS → I. NODE.JS FUNDAMENTALS → 2. Node.js Architecture → Questions 9–13

---

# Question 9: Explain the Node.js runtime architecture.

---

## Step 1 — High-Level Overview

Node.js runtime architecture consists of:

1. V8 Engine
2. Event Loop
3. libuv
4. Thread Pool
5. Node.js Core APIs
6. OS

Together they allow JavaScript to run outside the browser with asynchronous capabilities.

---

## Step 2 — Layer-by-Layer Breakdown

### 1. V8 Engine

- Compiles JavaScript into machine code
- Executes JS synchronously on main thread

### 2. Node.js Bindings (C++ layer)

- Bridges JS to system-level APIs

### 3. libuv

- Implements event loop
- Manages thread pool
- Handles async I/O

### 4. Thread Pool (Default size = 4)

Used for:

- File system
- DNS
- Crypto
- Compression

### 5. OS Layer

Actually performs:

- File reads
- Network operations
- Disk access

---

## Step 3 — Flow Example

JS Code
→ V8 executes
→ Async task detected
→ libuv delegates to OS/thread pool
→ Completion event returned
→ Event loop executes callback

That is the full runtime architecture.

---

## Interview Summary

Node.js runtime architecture consists of the V8 engine for JavaScript execution, libuv for asynchronous I/O and event loop management, a background thread pool for certain operations, and OS-level APIs for system interaction. This layered design enables Node.js to run JavaScript efficiently in a non-blocking, event-driven environment.

---

# Question 10: How does Node.js's single-threaded model handle multiple requests?

---

## Step 1 — Clarify the Confusion

Single-threaded does NOT mean:

One request at a time.

It means:

One JavaScript execution thread.

---

## Step 2 — What Happens When Multiple Requests Come

1. Request A arrives
2. If I/O operation → delegated
3. Request B arrives → handled immediately
4. Event loop schedules callbacks when ready

So requests are interleaved via async execution.

---

## Step 3 — Example

```js
app.get("/data", (req, res) => {
  fs.readFile("file.txt", () => {
    res.send("Done");
  });
});
```

1000 requests:

- All file reads delegated
- Main thread never blocks
- Event loop handles responses as they complete

---

## Step 4 — Why This Scales

No thread-per-request
No heavy context switching
Minimal memory overhead

---

## Interview Summary

Although Node.js runs JavaScript on a single thread, it handles multiple requests concurrently by delegating I/O operations to libuv or the OS. The event loop processes callbacks when operations complete, allowing efficient handling of thousands of concurrent connections.

---

# Question 11: What is the difference between Node.js and browser JavaScript?

---

## Step 1 — Core Difference

Both use V8.

Difference lies in environment and APIs.

---

## Step 2 — Browser JavaScript

Provides:

- DOM
- Window object
- Fetch
- LocalStorage

Cannot:

- Access file system directly
- Create TCP servers

---

## Step 3 — Node.js

Provides:

- File system (fs)
- HTTP server
- Process control
- OS access

Does NOT provide:

- DOM
- Window

---

## Step 4 — Global Object Difference

Browser:

```
window
```

Node:

```
global
```

---

## Interview Summary

Browser JavaScript runs inside a browser environment and provides DOM-related APIs, while Node.js runs on the server and provides system-level APIs like file system and networking. Both use the V8 engine, but their runtime environments differ significantly.

---

# Question 12: How does Node.js communicate with external services?

---

## Step 1 — Common Methods

Node communicates externally using:

- HTTP/HTTPS requests
- TCP/UDP sockets
- WebSockets
- gRPC
- Message queues (Kafka, RabbitMQ)

---

## Step 2 — Example Using HTTP

```js
const https = require("https");

https.get("https://api.example.com", (res) => {
  res.on("data", (chunk) => console.log(chunk));
});
```

---

## Step 3 — Database Communication

Uses drivers like:

- MongoDB driver
- pg (PostgreSQL)
- mysql2

All async and non-blocking.

---

## Step 4 — Architecture Insight

Communication handled via:

- libuv networking APIs
- OS TCP stack

---

## Interview Summary

Node.js communicates with external services using networking modules such as http, https, net, and third-party libraries. It supports REST APIs, WebSockets, databases, and message brokers, all handled asynchronously through libuv and OS-level networking capabilities.

---

# Question 13: Explain the reactor pattern in Node.js.

---

## Step 1 — What is Reactor Pattern?

Reactor Pattern is a design pattern for handling service requests delivered concurrently to a service handler by one or more inputs.

Node.js follows this pattern.

---

## Step 2 — Core Components

1. Event Demultiplexer (libuv)
2. Event Loop
3. Event Handlers (callbacks)

---

## Step 3 — Flow in Node.js

1. Request arrives
2. Event loop registers handler
3. I/O event occurs
4. Event loop dispatches callback

Single thread
Multiple events
Non-blocking

---

## Step 4 — Real Example

HTTP server:

```js
const http = require("http");

http
  .createServer((req, res) => {
    res.end("Hello");
  })
  .listen(3000);
```

Here:

- Server listens for events
- Event loop reacts when request arrives
- Handler executes

That is reactor pattern.

---

## Interview Summary

Node.js implements the reactor pattern, where an event loop listens for incoming events and dispatches them to appropriate handlers without blocking. libuv acts as the event demultiplexer, and callbacks serve as event handlers, enabling efficient non-blocking I/O in a single-threaded environment.

---

This completes:

Node.js Architecture → Questions 9–13

Next section:

II. Modules & Package Management → Question 14: What is a module in Node.js? Explain different types of modules.

Role 3 — Candidate Mode
Continuing in proper order:

PART 1 → NODE.JS → II. Modules & Package Management → 3. CommonJS Modules → Questions 14–15

---

# Question 14: What is a module in Node.js? Explain different types of modules.

---

## Step 1 — What is a Module?

A module in Node.js is a reusable block of code that encapsulates related functionality and can be imported into other files.

In Node.js:

Every file is treated as a module.

This helps with:

- Code organization
- Reusability
- Maintainability
- Encapsulation

---

## Step 2 — Why Modules Are Important

Without modules:

- All code would be in one file
- Hard to maintain
- Global variable conflicts

Modules provide scope isolation.

Variables inside a module are private by default.

---

## Step 3 — Types of Modules in Node.js

There are 3 main types:

---

### 1. Core Modules (Built-in)

Provided by Node.js.

No installation required.

Examples:

- fs
- http
- path
- os
- events

Usage:

```js
const fs = require("fs");
```

---

### 2. Local Modules (User-defined)

Modules created by developers.

Example:

math.js

```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

Importing:

```js
const add = require("./math");
console.log(add(2, 3));
```

Note the "./" → tells Node it’s a local file.

---

### 3. Third-Party Modules

Installed via npm.

Example:

```
npm install express
```

Usage:

```js
const express = require("express");
```

These modules are stored inside node_modules folder.

---

## Step 4 — Important Interview Insight

Modules in Node use CommonJS system (by default).

Each module has:

- module.exports
- require()
- \_\_dirname
- \_\_filename

These are provided by Node internally.

---

## Step 5 — Interview-Level Summary Answer

A module in Node.js is a reusable and self-contained block of code. Every file in Node.js is treated as a module. There are three types of modules: core modules provided by Node.js, local modules created by developers, and third-party modules installed via npm. Modules help in organizing code, improving maintainability, and avoiding global scope pollution.

---

# Question 15: How does `require()` work? Explain module caching.

---

## Step 1 — What is require()?

require() is used to import modules in Node.js using the CommonJS module system.

Example:

```js
const fs = require("fs");
```

---

## Step 2 — Internal Working of require() (Very Important)

When you call:

```js
require("./math");
```

Node does:

1. Resolve the module path
2. Check if module is already loaded (cache)
3. If not loaded:
   - Wrap module code in a function
   - Execute the file
   - Store exports in cache

4. Return exported object

---

## Step 3 — Module Wrapper Function (Important)

Node wraps each module inside:

```js
(function (exports, require, module, __filename, __dirname) {
  // your code here
});
```

This is why:

- Variables are private
- module.exports works
- require works

---

## Step 4 — Module Caching

Once a module is loaded, it is cached.

Example:

math.js

```js
console.log("Module loaded");

module.exports = { value: 10 };
```

main.js

```js
require("./math");
require("./math");
```

Output:

```
Module loaded
```

It prints only once.

Because:

Second require() returns cached version.

---

## Step 5 — Why Caching is Important

- Improves performance
- Prevents re-execution
- Maintains singleton behavior

Example:

Database connection module.

It should initialize only once.

Caching ensures that.

---

## Step 6 — How to Check Cache

```js
console.log(require.cache);
```

You can also delete cache manually:

```js
delete require.cache[require.resolve("./math")];
```

---

## Step 7 — Interview-Level Summary Answer

The require() function in Node.js is used to import modules. When called, Node resolves the module path, checks if it is already loaded in memory, and if not, executes the module and stores its exports in a cache. Subsequent calls to require() for the same module return the cached version instead of re-executing the file. This improves performance and ensures modules behave like singletons.

---

Next:

Question 16: What is the difference between `exports` and `module.exports`?

Role 3 — Candidate Mode
Continuing in proper order:

PART 1 → NODE.JS → II. Modules & Package Management → 3. CommonJS Modules → Questions 16–19

---

# Question 16: What is the difference between `exports` and `module.exports`?

---

## Step 1 — First Understand the Relationship

In Node.js, internally:

```js
exports = module.exports;
```

`exports` is just a reference to `module.exports`.

---

## Step 2 — How They Work Normally

Example:

```js
exports.add = function (a, b) {
  return a + b;
};
```

This works because you are adding properties to the same object referenced by `module.exports`.

Equivalent to:

```js
module.exports.add = function (a, b) {
  return a + b;
};
```

---

## Step 3 — The Important Difference

If you reassign `exports`, it breaks the reference.

Wrong:

```js
exports = function () {
  console.log("Hello");
};
```

This does NOT work.

Because:

You changed the reference of `exports`,
but `module.exports` still points to original object.

Correct way:

```js
module.exports = function () {
  console.log("Hello");
};
```

---

## Step 4 — When to Use What

Use `exports`:

- When exporting multiple properties.

Use `module.exports`:

- When exporting a single function/object/class.

---

## Interview Summary

`exports` is a shorthand reference to `module.exports`. Modifying properties on `exports` works because both reference the same object. However, reassigning `exports` breaks the link, so to export a single value, you must use `module.exports`.

---

# Question 17: How does Node.js resolve modules?

---

## Step 1 — Module Resolution Algorithm

When you call:

```js
require("something");
```

Node follows this order:

---

### Case 1 — Core Module

If name matches built-in module:

```
require("fs")
```

Load core module immediately.

---

### Case 2 — File Path (./ or ../)

Example:

```
require("./math")
```

Node tries:

1. ./math.js
2. ./math.json
3. ./math.node
4. ./math/index.js

---

### Case 3 — Third-Party Module

If no ./ or ../:

```
require("express")
```

Node searches:

1. node_modules in current directory
2. node_modules in parent directory
3. Continues upward until root

---

## Step 2 — Important Detail

Node checks package.json for:

```
"main": "index.js"
```

Or for ES modules:

```
"type": "module"
```

---

## Interview Summary

Node.js resolves modules by first checking for core modules, then resolving file paths if relative paths are used, and finally searching the node_modules directory hierarchy for third-party modules. It also uses package.json to determine entry points.

---

# Question 18: What is the purpose of `require.resolve()`?

---

## Step 1 — What It Does

`require.resolve()` returns the full resolved path of a module without loading it.

Example:

```js
console.log(require.resolve("express"));
```

Output:

Absolute file path of express entry file.

---

## Step 2 — Why Useful?

- Debug module resolution
- Check which file is loaded
- Find module location

It does NOT execute the module.

---

## Step 3 — Internal Use

Used when:

- Deleting cache
- Dynamic module handling
- Custom loaders

Example:

```js
delete require.cache[require.resolve("./math")];
```

---

## Interview Summary

`require.resolve()` returns the absolute path of the resolved module without executing it. It is useful for debugging module resolution and managing module cache.

---

# Question 19: Explain the module wrapper function in Node.js.

---

## Step 1 — What is Module Wrapper?

Every Node.js file is wrapped internally inside a function before execution.

Like this:

```js
(function (exports, require, module, __filename, __dirname) {
  // Your code here
});
```

You don’t see this, but Node does it internally.

---

## Step 2 — Why It Exists

This wrapper provides:

- Module-level scope
- Isolation
- Access to special variables

---

## Step 3 — What It Provides

Inside every module, you automatically get:

- exports
- require
- module
- \_\_filename
- \_\_dirname

These are not global variables.
They come from wrapper function.

---

## Step 4 — Why Scope Is Important

Example:

```js
var x = 10;
```

This does NOT become global.

Because module wrapper creates private scope.

---

## Step 5 — Interview-Level Insight

Module wrapper ensures:

- Encapsulation
- Avoids global pollution
- Enables CommonJS system

---

## Interview Summary

Node.js wraps every module inside a function before execution. This wrapper provides module-specific variables like exports, require, module, **filename, and **dirname, and ensures that each file has its own private scope. It is a key mechanism behind the CommonJS module system.

---

Next Section:

4. ES Modules → Question 20: How do you use ES Modules in Node.js?
