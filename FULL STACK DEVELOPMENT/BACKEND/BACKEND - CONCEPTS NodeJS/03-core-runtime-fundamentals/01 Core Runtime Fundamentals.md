# 03 — Core Runtime Fundamentals

(Engineering-first explanation. Clear. Structured.)

---

# 3. Callback Concept

## Problem (Why)

Server needs to:

- Read file
- Fetch data
- Call API
- Query database

These operations take time.

If program waits → everything stops.

We need a way to say:

> “When this work finishes, run this function.”

That function is called a **callback**.

---

## Definition

A callback is:

> A function passed as an argument to another function
> That executes later after task completes.

---

## Mental Model

You order food.
Restaurant says:

“We will call you when ready.”

That call is callback.

---

## Example

```js
// Simple callback example

function greet(name, callback) {
  console.log("Hello " + name);

  // execute callback
  callback();
}

function done() {
  console.log("Greeting completed.");
}

greet("Tanish", done);
```

### Output

Hello Tanish
Greeting completed.

---

## Real Node Example

```js
const fs = require("fs");

// Asynchronous file read
fs.readFile("file.txt", "utf8", function (err, data) {
  if (err) {
    console.error("Error:", err);
    return;
  }

  console.log("File Content:", data);
});

console.log("File reading started...");
```

### Why output order matters?

"File reading started..." prints first.
Because readFile is non-blocking.

---

## Problem with Callbacks

Callback Hell:

```js
task1(function () {
  task2(function () {
    task3(function () {
      task4();
    });
  });
});
```

Hard to read. Hard to maintain.

That is why Promise was introduced.

---

## Interview Questions

1. What is callback?
2. What is callback hell?
3. Why callbacks are used in Node?
4. Difference between synchronous and asynchronous?

---

# 4. Event Loop

## Problem (Why)

Node is single-threaded.

Then how can it handle 10,000 users?

---

## Definition

Event Loop is:

> A mechanism that continuously checks
> if asynchronous tasks are completed
> and executes their callbacks.

---

## Mental Model

Think:

One manager.
Many workers (OS, thread pool).
Manager assigns tasks and moves ahead.
When worker finishes → manager executes callback.

Manager = Event Loop.

---

## Simplified Flow

1. Call stack runs code.
2. Async task sent to background.
3. Event loop monitors completion.
4. When done → callback added to queue.
5. Event loop pushes callback to call stack.

---

## Example

```js
console.log("Start");

setTimeout(function () {
  console.log("Inside Timeout");
}, 0);

console.log("End");
```

### Output

Start
End
Inside Timeout

Even 0ms does not mean immediate.
It waits until call stack is empty.

---

## Interview Questions

1. What is event loop?
2. Explain call stack and callback queue.
3. Why setTimeout(0) executes later?
4. Is Node multi-threaded?

---

# 5. Promise & Promise Chaining

## Problem (Why)

Callback hell makes code unreadable.

Need better structure.

---

## Definition

Promise is:

> An object that represents future completion or failure of an async operation.

States:

- Pending
- Fulfilled
- Rejected

---

## Basic Example

```js
const promise = new Promise(function (resolve, reject) {
  let success = true;

  if (success) {
    resolve("Task Completed");
  } else {
    reject("Task Failed");
  }
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
```

---

## Promise Chaining

```js
function step1() {
  return Promise.resolve("Step 1 Done");
}

function step2() {
  return Promise.resolve("Step 2 Done");
}

step1()
  .then(function (data) {
    console.log(data);
    return step2();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err);
  });
```

---

## Interview Questions

1. What is Promise?
2. States of Promise?
3. Difference between callback and promise?
4. What is promise chaining?

---

# 6. This Binding in Node

## Problem

What does `this` refer to?

In browser → window.
In Node → different behavior.

---

## In Node.js

In top-level file:

```js
console.log(this);
```

This prints:

{} (empty object)

Because Node wraps file inside module.

---

## Inside Function

```js
function test() {
  console.log(this);
}

test();
```

Prints:

global object (in non-strict mode)

---

## Arrow Function

Arrow function does not bind its own `this`.

---

## Interview Questions

1. What is this in Node?
2. Difference between arrow and normal function?
3. What is module wrapper?

---

# 7. Global Objects

## Definition

Global objects are available everywhere without import.

Examples:

- global
- process
- console
- setTimeout
- setInterval

---

## Example

```js
console.log(global);
```

---

## Note

Unlike browser:

Node does not have:

- window
- document

---

# 8. Process Object

## Problem

Need info about:

- Current environment
- Arguments
- Memory
- Exit status

Node provides `process`.

---

## Example

```js
console.log(process.version);
console.log(process.platform);
console.log(process.argv);
```

---

## Useful Methods

```js
process.exit(0);
process.cwd();
process.env;
```

---

## Interview Questions

1. What is process object?
2. How to read command line arguments?
3. How to access environment variables?

---

# 9. Timers Module

Node provides:

- setTimeout
- setInterval
- setImmediate

---

## Example

```js
setTimeout(function () {
  console.log("Runs after 2 seconds");
}, 2000);

setInterval(function () {
  console.log("Runs every 1 second");
}, 1000);
```

---

## setImmediate

Runs after current event loop cycle.

---

## Interview Questions

1. Difference between setTimeout and setImmediate?
2. How to clear interval?
3. What is timer phase?

---

# 10. Debugging in Node.js

## Problem

Code not working.
Need to inspect variables and execution.

---

## Method 1: console.log

Basic debugging.

---

## Method 2: Node Inspector

Run:

```bash
node inspect file.js
```

Or:

```bash
node --inspect file.js
```

---

## Method 3: VS Code Debugger

- Add breakpoint
- Run debugger
- Inspect variables

---

## Interview Questions

1. How to debug Node app?
2. What is --inspect flag?
3. How to attach debugger?

---

# 11. Set Console Font Color

Node terminal supports ANSI escape codes.

---

## Example

```js
console.log("\x1b[31m", "This is red text");
console.log("\x1b[32m", "This is green text");
console.log("\x1b[0m", "Reset color");
```

---

## Common Colors

- 31 → Red
- 32 → Green
- 33 → Yellow
- 34 → Blue
- 0 → Reset

---

## Practical Usage

```js
function success(message) {
  console.log("\x1b[32m%s\x1b[0m", message);
}

function error(message) {
  console.log("\x1b[31m%s\x1b[0m", message);
}

success("Server started");
error("Database failed");
```

---

# Final Engineering Summary

Master these deeply:

- Callback
- Event Loop
- Promise
- this binding
- Global & Process
- Timers
- Debugging

These are runtime fundamentals.

If these are weak, everything else will be weak.

---
