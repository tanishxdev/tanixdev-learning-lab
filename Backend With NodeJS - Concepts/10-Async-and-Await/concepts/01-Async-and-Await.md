# Topic 10 Async / Await

---

### **Concept**

**What is Async / Await in Node.js?**

* **Async/Await** is **syntactic sugar** built on top of **Promises**.
* It allows you to write **asynchronous code in a synchronous style**, making it easier to read, write, and debug.
* Introduced in **ES2017**, it’s now the most preferred way to handle asynchronous logic in Node.js.

Deep clarity (very important):

* Async/Await does **NOT** replace Promises
* Async/Await does **NOT** make code synchronous
* Async/Await is only a **better way to consume Promises**

Under the hood:

```
async function → always returns a Promise
await something → waits for that Promise to settle
```

So internally this still happens:

```
Promise → then / catch → microtask queue → event loop
```

Async/Await just **hides this complexity** from you.

---

### **Why Async / Await?**

This section is about **evolution of async handling**.
Understand this once → everything clicks.

---

#### Step 1: Callbacks (first solution)

**Problem JavaScript had**

* JS is single-threaded
* Async work (file, API, DB) takes time
* JS needed a way to say: “run this later”

**Solution**

```js
doTask(data, function (result) {
  doNext(result, function (final) {
    console.log(final);
  });
});
```

**New problems created**

* Callback hell (nested pyramid)
* Error handling at every level
* Code hard to read, hard to debug

---

#### Step 2: Promises (second solution)

**Problem callbacks created**

* Unmanageable nesting
* No clean error flow

**Solution**

```js
doTask()
  .then(result => doNext(result))
  .then(final => console.log(final))
  .catch(err => console.log(err));
```

**What Promises fixed**

* Flat structure
* Centralized error handling
* Chainable async flow

**But Promises still have pain**

* Long `.then()` chains
* Conditional logic becomes ugly
* Still feels like “callbacks in disguise”
* Debugging stack traces is harder

---

#### Step 3: Async / Await (final solution)

**Problem Promises still had**

* Readability
* Mental load
* Hard to reason like normal code

**Solution**

```js
const result = await doTask();
const final = await doNext(result);
console.log(final);
```

**Why Async/Await is better**

* Looks like normal synchronous code
* Easier mental model
* Natural `try...catch`
* Best for real backend logic

That’s why Async/Await exists.

---

### **How Async / Await Works**

1. An **`async` function** always returns a **Promise**.
2. Inside an async function, the **`await`** keyword pauses execution **of that function only**.
3. `await` does **NOT block the event loop**.
4. Errors are handled using `try...catch`.

Important internal truth:

```
await Promise
↓
Function pauses
↓
JS thread free
↓
Promise resolves
↓
Function resumes
```

This is why Node remains **non-blocking**.

---

### **Folder Setup**

```
async-await-demo/
│
└── app.js
```

Backend clarity:

* No framework required
* Async/Await works everywhere:

  * Node scripts
  * Express routes
  * APIs
  * CLI tools

---

### **Code Example 1: Basic Async / Await Example**

**Purpose of this example**

* Show how async code **looks synchronous**
* Show execution order clearly

```js
// ===========================
// Example: Basic Async / Await
// ===========================

// delay() simulates async work (like API / DB)
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited for ${ms / 1000} seconds`);
    }, ms);
  });
}

// async function = returns a Promise
async function runTask() {
  console.log("Task started...");

  // await pauses THIS function, not JS
  const msg1 = await delay(1000);
  console.log(msg1);

  const msg2 = await delay(2000);
  console.log(msg2);

  console.log("Task completed!");
}

// function call starts execution
runTask();
```

Key takeaway:

* Execution is sequential
* Code is readable
* Internally still async

---

### **Code Example 2: Error Handling with try...catch**

**Purpose**

* Show how async errors map to try/catch
* Replace `.catch()` chains

```js
// ===========================
// Example: Error Handling in Async / Await
// ===========================

function riskyOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;

    setTimeout(() => {
      if (success) resolve("Operation successful!");
      else reject("Operation failed!");
    }, 1000);
  });
}

async function execute() {
  try {
    // If Promise rejects, control jumps to catch
    const result = await riskyOperation();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Execution finished.");
  }
}

execute();
```

Important backend rule:

* `await` rejection = `throw` inside async function

---

### **Code Example 3: Async / Await with fs.promises**

**Purpose**

* Real backend use-case
* File system operations

```js
const fs = require('fs').promises;

async function fileWorkflow() {
  try {
    await fs.writeFile('./data/async.txt', 'Learning async/await in Node.js');
    console.log("File created.");

    const content = await fs.readFile('./data/async.txt', 'utf8');
    console.log("File Content:", content);

    await fs.appendFile('./data/async.txt', '\nAsync/Await makes life easier!');
    console.log("Data appended.");

    const updated = await fs.readFile('./data/async.txt', 'utf8');
    console.log("Updated Content:\n", updated);

    await fs.unlink('./data/async.txt');
    console.log("File deleted successfully.");
  } catch (err) {
    console.log("Error:", err.message);
  }
}

fileWorkflow();
```

Why this matters:

* This is how real backend code looks
* Clean, readable, maintainable

---

### **Mini Project: Fetch User Data Simulation**

**Purpose**

* Simulate real API chaining
* Replace Promise chains cleanly

Flow:

```
User → Posts → Comments
```

Each step depends on previous data — perfect Async/Await use-case.

Code is correct and intentional.

Key learning:

* Sequential awaits
* Dependency-based async flow
* Centralized error handling

---

### **Dependencies**

* No external dependencies — uses only **built-in Promises**.

---

### **Notes**

* Async/Await makes code **look synchronous but run asynchronously**
* Async/Await is built **on top of Promises**
* Always wrap awaits in `try...catch`
* Use `Promise.all()` when tasks are independent
* Async/Await is preferred in:

  * Backend APIs
  * Services
  * Business logic

---

## Final Mental Model (Pin This)

```
Callbacks → unreadable
Promises → manageable but verbose
Async/Await → clean + scalable + production-ready
```
