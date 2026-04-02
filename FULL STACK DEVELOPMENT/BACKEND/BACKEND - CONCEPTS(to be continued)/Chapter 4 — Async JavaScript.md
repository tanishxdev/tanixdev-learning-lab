# Chapter 4 — Async JavaScript Deep Dive (Callbacks → Promises → Async/Await)

---

# 1. Problem (Why this chapter exists)

In Chapter 3, you saw:

```js
fs.readFile("data.txt", (err, data) => { ... });
```

### ❌ Problem

Backend tasks are:

- File reading
- DB queries
- API calls

All take time.

If Node waits for each:

```text
Request 1 → wait → complete
Request 2 → wait → complete
```

→ Server becomes **slow & blocked**

---

# 2. Concept (Core Idea)

## 🧠 Definition — Asynchronous Programming

> Instead of waiting, Node **delegates work and continues execution**.

---

## 🧠 Why Node is fast?

Because of:

```text
Single Thread + Non-blocking I/O + Event Loop
```

---

## 🧠 Flow

```text
Task given → Node delegates → continues → callback later
```

---

# 3. CALLBACKS

---

# 🧠 Problem

How to handle result when async task completes?

---

# 🧠 Solution

Use **callback function**

> A function passed as argument and executed later

---

## 📄 Example

```javascript
// ================================
// callback.js
// ================================

// Async simulation
function fetchData(callback) {
  console.log("Fetching data...");

  // Simulate delay
  setTimeout(() => {
    const data = "Data received";

    // Call callback after task completes
    callback(data);
  }, 2000);
}

// Callback function
function handleData(result) {
  console.log("Result:", result);
}

// Call function
fetchData(handleData);
```

---

## ▶️ Output

```text
Fetching data...
(after 2 sec)
Result: Data received
```

---

# 4. CALLBACK HELL (Major Problem)

---

## ❌ Problem

When multiple async tasks depend on each other:

```javascript
fs.readFile("file1.txt", (err, data1) => {
  fs.readFile("file2.txt", (err, data2) => {
    fs.readFile("file3.txt", (err, data3) => {
      console.log("Done");
    });
  });
});
```

---

## 🧠 Issues

- Deep nesting
- Hard to read
- Hard to debug
- Known as **"Pyramid of Doom"**

---

# 5. PROMISES

---

# 🧠 Solution

> Promise = Object representing **future result**

---

## 🧠 States

```text
Pending → Fulfilled → Rejected
```

---

## 📄 Example

```javascript
// ================================
// promise.js
// ================================

// Create promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

// Consume promise
myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

---

## ▶️ Output

```text
Success: Task completed
```

---

# 6. Promise Chaining (Fix Callback Hell)

---

## 📄 Example

```javascript
// Simulate async steps
function step1() {
  return Promise.resolve("Step 1 done");
}

function step2() {
  return Promise.resolve("Step 2 done");
}

function step3() {
  return Promise.resolve("Step 3 done");
}

// Chain promises
step1()
  .then((res) => {
    console.log(res);
    return step2();
  })
  .then((res) => {
    console.log(res);
    return step3();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

---

# 7. ASYNC / AWAIT (Modern Solution)

---

# 🧠 Problem

Promise chaining still looks complex.

---

# 🧠 Solution

> Async/Await makes async code look **synchronous**

---

## 📄 Example

```javascript
// ================================
// async-await.js
// ================================

// Function returning promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 2000);
  });
}

// Async function
async function main() {
  console.log("Start");

  // Wait for result
  const result = await fetchData();

  console.log(result);

  console.log("End");
}

main();
```

---

## ▶️ Output

```text
Start
(after 2 sec)
Data loaded
End
```

---

# 8. Behind the Scenes (VERY IMPORTANT)

---

## 🧠 How async/await works

```text
await → pauses function
BUT NOT BLOCKING THREAD
```

Node:

```text
1. Sends task to background (libuv)
2. Continues other work
3. When done → resumes function
```

---

# 9. Real Backend Example (VERY IMPORTANT)

---

## 📄 Reading file using Promises

```javascript
const fs = require("fs").promises;

async function readFileData() {
  try {
    const data = await fs.readFile("data.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}

readFileData();
```

---

# 10. Mini Practice (DO THIS)

---

## 📁 Same repo

Create:

```text
async.js
```

---

## 📄 Code

```javascript
// Simulate API call
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Tanish" });
    }, 1000);
  });
}

// Simulate order fetch
function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["order1", "order2"]);
    }, 1000);
  });
}

// Async flow
async function main() {
  const user = await getUser();
  console.log(user);

  const orders = await getOrders();
  console.log(orders);
}

main();
```

---

# 11. Common Mistakes

---

### ❌ Forgetting await

```js
const data = fetchData(); ❌
```

✔ Correct:

```js
const data = await fetchData(); ✅
```

---

### ❌ No error handling

✔ Always use:

```js
try {
} catch (err) {}
```

---

### ❌ Mixing callbacks + promises badly

Avoid mixing styles.

---

# 12. Mental Model (VERY IMPORTANT)

```text
Callback → old style
Promise → structured
Async/Await → clean & modern
```

---

## 🧠 Real Backend Thinking

```text
DB call → async
API call → async
File read → async

Everything → async
```

---

# 13. Final File (Best Practice)

---

## 📄 `async.js`

```javascript
// ================================
// Chapter 4 - Async Best Practice
// ================================

// Simulate database fetch
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Tanish" });
    }, 1000);
  });
}

// Simulate fetching posts
function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["post1", "post2"]);
    }, 1000);
  });
}

// Main async function
async function main() {
  try {
    console.log("Fetching data...");

    // Fetch user
    const user = await fetchUser();
    console.log("User:", user);

    // Fetch posts
    const posts = await fetchPosts();
    console.log("Posts:", posts);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Execute
main();
```

---

# 14. Interview Questions

1. What is async programming?
2. What is callback?
3. What is callback hell?
4. What is Promise?
5. Promise states?
6. Difference between then and catch?
7. What is async/await?
8. Is await blocking?
9. How Node handles async internally?
10. Difference between sync and async?

---

# ✅ Summary (Clear Thinking)

- Backend = async world
- Callbacks → messy
- Promises → better
- Async/Await → best

Now you can:

- Handle DB calls
- Handle APIs
- Write clean backend code

---
