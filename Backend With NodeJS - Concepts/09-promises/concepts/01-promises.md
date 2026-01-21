
# Topic 9 Promises

---
![](https://tutorial.techaltum.com/images/javascript-promise.jpg)

### **Concept**

**What are Promises in Node.js?**

* A **Promise** is an **object that represents the eventual completion (or failure)** of an asynchronous operation and its resulting value.
* It provides a **cleaner alternative to callbacks**, making asynchronous code **easier to read and manage**.

Deeper backend mental model:

* A Promise is **not the async work itself**
* It is a **container object** that will be:

  * fulfilled later
  * or rejected later

Think of a Promise as:

```
"I promise I will give you a value later"
```

Internally, Node:

* starts an async task (file I/O, timer, network)
* immediately returns a Promise object
* resolves/rejects it when the task finishes

Important clarity:

* Promise creation is **synchronous**
* Promise resolution is **asynchronous**

---

### **Why Promises?**

| Problem (with callbacks)         | Solution (with Promises)                        |
| -------------------------------- | ----------------------------------------------- |
| Nested “callback hell” code      | Flat, chainable structure using `.then()`       |
| Hard to handle errors            | Centralized `.catch()` error handling           |
| Difficult to maintain async flow | Readable async chaining and async/await support |

Backend-specific reasons:

* Callbacks scale **vertically** (nested)
* Promises scale **horizontally** (chained)
* Error handling becomes **predictable**
* Works naturally with:

  * `async / await`
  * `Promise.all`
  * modern Node APIs

---

### **How Promises Work**

A Promise has **3 states**:

1. **Pending** → The operation is still running.
2. **Resolved (Fulfilled)** → The operation completed successfully.
3. **Rejected** → The operation failed.

Important rules (interview traps):

* A Promise:

  * can settle **only once**
  * state is **immutable after resolve/reject**
* `resolve()` does **not stop execution** automatically
* Only the **first** resolve/reject matters

You attach callbacks using:

* `.then()` → handles success
* `.catch()` → handles errors
* `.finally()` → runs regardless of result

Execution order mental model:

```
Promise created
↓
Async task starts
↓
Promise pending
↓
Task finishes
↓
.then OR .catch pushed to microtask queue
↓
Executed after current call stack
```

---

### **Folder Setup**

```
promises-demo/
│
└── app.js
```

Backend note:

* No special structure required
* Promises are **language-level**, not framework-specific
* This works the same in:

  * Node scripts
  * Express routes
  * APIs
  * CLI tools

---

### **Code Example 1: Creating and Using a Promise**

**File:** `app.js`

```js
// ===========================
// Example: Simple Promise
// ===========================

// Create a Promise
const task = new Promise((resolve, reject) => {
  const isDone = true;
```

Key clarification:

* The executor function runs **immediately**
* `resolve` and `reject` are callbacks provided by JS engine

```js
  if (isDone) {
    resolve("Task completed successfully!");
  } else {
    reject("Task failed!");
  }
});
```

Important detail:

* `resolve()`:

  * changes state → fulfilled
  * stores the value internally
* `reject()`:

  * changes state → rejected
  * stores error internally

```js
task
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Promise execution finished.");
  });
```

Execution order clarity:

1. Promise created
2. Executor runs
3. Promise settles
4. `.then()` executes
5. `.finally()` executes

---

### **Code Example 2: Promisifying Asynchronous Tasks**

Purpose here:

* Older Node APIs use **callbacks**
* Promises allow modern async flow

```js
const fs = require('fs');
```

Why this matters:

* `fs.readFile` is callback-based
* Promises allow better composition

```js
function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
```

Critical rule:

* If you want chaining → **must return a Promise**

```js
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
```

Backend insight:

* Always:

  * reject on error
  * resolve with meaningful data
* Never mix callbacks and Promises outside this wrapper

---

### **Code Example 3: Promise Chaining**

Purpose:

* Execute async tasks **in sequence**
* Each step depends on previous step

```js
function step1() {
  return new Promise((resolve) => {
```

Rule:

* Every step must **return a Promise**

```js
step1()
  .then((msg1) => {
    console.log(msg1);
    return step2();
```

Important chaining rule:

* Whatever you `return` from `.then()`:

  * becomes input for next `.then()`
* If you don’t return:

  * chain breaks
  * undefined is passed

Error propagation rule:

* Any rejection:

  * skips remaining `.then()`
  * jumps to `.catch()`

---

### **Mini Project: Promise-based File Workflow**

**Goal:** Use Promises to write, read, and delete files cleanly.

Why this matters in backend:

* Real backend work = file, DB, network operations
* All are async
* Promises make them manageable

```js
const fs = require('fs').promises;
```

Important detail:

* `fs.promises` is:

  * built-in
  * Promise-based
  * preferred over manual promisification

```js
async function manageFiles() {
```

Key connection:

* `async` functions:

  * always return a Promise
  * allow `await` syntax

```js
await fs.writeFile(...)
```

What `await` really does:

* pauses function execution
* does NOT block event loop
* resumes when Promise resolves

Error handling clarity:

* `try/catch` catches:

  * Promise rejections
  * synchronous errors inside async function

---

### **Dependencies**

* No external dependencies — uses built-in `fs.promises`.

Important backend note:

* Modern Node APIs are increasingly Promise-first
* External libraries are optional, not mandatory

---

### **Notes**

* Promises improve readability over callbacks.
* Always **return** a Promise inside `.then()` to chain correctly.
* Use `Promise.all()` to run multiple async tasks in parallel.
* Promises are the foundation of **`async/await`**, which provides even cleaner syntax.

Additional interview-ready notes:

* `Promise.all()`:

  * fails fast on first rejection
* `Promise.allSettled()`:

  * waits for all results
* `async/await` is **syntax sugar** over Promises
* Event loop prioritizes Promise callbacks (microtasks)

---

## ✅ Recommended Folder Structure (Final)

```
└── 📁09-promises
    └── 📁demo-projects
        ├── 📁01-simple-promise
        │   └── app.js
        │
        ├── 📁02-promisify-fs
        │   ├── app.js
        │   └── data
        │       └── info.txt
        │
        ├── 📁03-promise-chaining
        │   └── chain.js
        │
        └── 📁04-promise-file-workflow
            ├── app.js
            └── data
```

---

# 📁 01-simple-promise/app.js

```js
// ===========================
// Example 1: Simple Promise
// ===========================

// A Promise is an object representing a future result
// The executor function runs immediately
const task = new Promise((resolve, reject) => {

  // Simulating a condition (like API success / failure)
  const isDone = true;

  // If task completed successfully
  if (isDone) {
    // resolve() marks the Promise as fulfilled
    // and stores the success value internally
    resolve("Task completed successfully!");
  } else {
    // reject() marks the Promise as rejected
    // and stores the error internally
    reject("Task failed!");
  }
});

// Consuming the Promise
task
  .then((message) => {
    // Runs when Promise is fulfilled
    console.log("Success:", message);
  })
  .catch((error) => {
    // Runs when Promise is rejected
    console.log("Error:", error);
  })
  .finally(() => {
    // Always runs (success or failure)
    console.log("Promise execution finished.");
  });
```

### Run

```bash
node app.js
```

---

# 📁 02-promisify-fs/app.js

```js
// =======================================
// Example 2: Promisifying fs.readFile
// =======================================

// Import Node's built-in file system module
const fs = require("fs");

// Function that converts callback-based API into Promise
function readFilePromise(filePath) {

  // Return a Promise so caller can chain .then()
  return new Promise((resolve, reject) => {

    // Asynchronous file read
    fs.readFile(filePath, "utf8", (err, data) => {

      // If error occurs, reject Promise
      if (err) {
        reject(err);
      } 
      // If success, resolve Promise with file content
      else {
        resolve(data);
      }
    });
  });
}

// Using the Promise-based function
readFilePromise("./data/info.txt")
  .then((data) => {
    console.log("File Content:\n", data);
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });
```

---

### 📁 02-promisify-fs/data/info.txt

```
Hello from the Promise-based file reader!
```

---

# 📁 03-promise-chaining/chain.js

```js
// ===========================
// Example 3: Promise Chaining
// ===========================

// Step 1 - returns a Promise
function step1() {
  return new Promise((resolve) => {
    console.log("Step 1: Starting task...");
    setTimeout(() => {
      resolve("Step 1 completed");
    }, 1000);
  });
}

// Step 2 - returns a Promise
function step2() {
  return new Promise((resolve) => {
    console.log("Step 2: Processing data...");
    setTimeout(() => {
      resolve("Step 2 completed");
    }, 1000);
  });
}

// Step 3 - returns a Promise
function step3() {
  return new Promise((resolve) => {
    console.log("Step 3: Finishing up...");
    setTimeout(() => {
      resolve("Step 3 completed");
    }, 1000);
  });
}

// Chain execution
step1()
  .then((msg1) => {
    console.log(msg1);
    // IMPORTANT: returning Promise keeps the chain alive
    return step2();
  })
  .then((msg2) => {
    console.log(msg2);
    return step3();
  })
  .then((msg3) => {
    console.log(msg3);
    console.log("All steps completed successfully!");
  })
  .catch((err) => {
    // Any rejection jumps here
    console.log("Error:", err);
  });
```

---

# 📁 04-promise-file-workflow/app.js

```js
// =================================================
// Mini Project: File Operations using Promises
// =================================================

// Import Promise-based fs API
const fs = require("fs").promises;

// Async function automatically returns a Promise
async function manageFiles() {
  try {
    // 1. Write a file
    await fs.writeFile(
      "./data/promise-demo.txt",
      "Learning Promises in Node.js"
    );
    console.log("File written successfully.");

    // 2. Read the file
    const data = await fs.readFile(
      "./data/promise-demo.txt",
      "utf8"
    );
    console.log("File Content:", data);

    // 3. Append new content
    await fs.appendFile(
      "./data/promise-demo.txt",
      "\nPromises make async easy!"
    );
    console.log("Data appended.");

    // 4. Read updated content
    const updatedData = await fs.readFile(
      "./data/promise-demo.txt",
      "utf8"
    );
    console.log("Updated Content:\n", updatedData);

    // 5. Delete the file
    await fs.unlink("./data/promise-demo.txt");
    console.log("File deleted successfully.");

  } catch (error) {
    // Handles Promise rejection or sync errors
    console.log("Error:", error.message);
  } finally {
    // Always runs
    console.log("Operation completed.");
  }
}

// Start execution
manageFiles();
```

---

## 🔑 Learning Guarantees from These Files

By finishing these files, you **fully understand**:

* How Promises are created and consumed
* How `.then()`, `.catch()`, `.finally()` really work
* How Promise chaining works internally
* How Node converts async I/O to Promises
* How `async/await` is built on Promises
* How real backend file workflows are handled

---
