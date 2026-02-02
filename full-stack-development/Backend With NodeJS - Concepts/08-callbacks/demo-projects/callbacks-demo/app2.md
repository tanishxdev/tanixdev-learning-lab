# `callbacks-demo/app2.js` (Blocking Version)

📁 Path:

```
08-callbacks/demo-projects/callbacks-demo/app2.js
```

```js
// ============================================
// Topic 8: Callbacks - Blocking Version
// File: app2.js
// ============================================

// Import the built-in 'fs' module
// fs is used to interact with the file system
const fs = require("fs");

/*
  STEP 1: Start a SYNCHRONOUS file read operation

  - fs.readFileSync is BLOCKING
  - JS thread waits here
  - No callback is used
  - Event loop is blocked
*/
try {
  const data = fs.readFileSync("./data/info.txt", "utf8");

  // This line runs ONLY after file is fully read
  console.log("File Content:");
  console.log(data);
} catch (err) {
  // Error handling using try-catch (sync style)
  console.log("Error reading file:", err);
}

/*
  STEP 2: This line runs AFTER file reading finishes

  Why?
  - fs.readFileSync blocks execution
  - JS thread cannot continue until disk I/O completes
*/
console.log("Reading file... completed!");
```

---

## 🔍 What this file clearly teaches

### Blocking behavior

* `fs.readFileSync` **stops everything**
* No other code executes until file read completes

### Error handling difference

| Async version     | Sync version       |
| ----------------- | ------------------ |
| Error in callback | try/catch          |
| Non-blocking      | Blocking           |
| Event loop free   | Event loop blocked |

---

## 🧠 Mental comparison (very important)

### Async (`app.js`)

```
readFile starts
↓
"Reading file..." prints
↓
file finishes reading
↓
callback runs
```

### Sync (`app2.js`)

```
readFileSync starts
↓
JS thread waits
↓
file finishes reading
↓
data prints
↓
next line runs
```

---

## 🧪 Interview one-liner

> “`fs.readFile` is non-blocking and uses callbacks, while `fs.readFileSync` blocks the event loop and should be avoided in servers.”
