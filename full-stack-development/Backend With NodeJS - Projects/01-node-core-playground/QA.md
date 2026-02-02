# 📄 `QA.md` — PROJECT 1: NODE CORE FOUNDATIONS

> Purpose of this file
> This file exists to **lock understanding**, prepare for **interviews**, and expose **gaps**.
> Every answer is expected to be explainable **verbally**, not memorized.

---

## 1. What problem does Node.js solve?

**Answer:**
Node.js allows JavaScript to run **outside the browser**, enabling access to:

* File system
* Network
* Operating system resources

Browsers restrict these for security reasons, but backend systems require them.

---

## 2. Is Node.js a framework?

**Answer:**
No. Node.js is a **runtime environment**.

It provides:

* V8 JavaScript engine
* Event loop
* Core system APIs (`fs`, `http`, `os`, `path`)

Frameworks like Express are built **on top of Node**, not inside it.

---

## 3. How is JavaScript execution in Node different from the browser?

**Answer:**

| Browser JS                  | Node JS                   |
| --------------------------- | ------------------------- |
| Runs inside browser sandbox | Runs on machine           |
| No file system access       | Full file system access   |
| Uses DOM APIs               | Uses system APIs          |
| `window` object             | No `window`, has `global` |

---

## 4. What are `__dirname` and `__filename`?

**Answer:**
They are **Node-specific globals**.

* `__dirname` → absolute path of current directory
* `__filename` → absolute path of current file

They do **not exist in browser JavaScript**.

---

## 5. What does the `fs` module do?

**Answer:**
The `fs` module allows Node to:

* Create files
* Read files
* Update files
* Delete files

It directly communicates with the **operating system’s file system**.

---

## 6. What is the difference between `readFileSync` and `readFile`?

**Answer:**

* `readFileSync`

  * Blocking
  * Stops event loop
  * Simple but dangerous in servers

* `readFile`

  * Non-blocking
  * Uses callbacks/promises
  * Scales better

---

## 7. Why are synchronous fs methods risky in backend servers?

**Answer:**
Because Node uses a **single event loop**.

If a sync operation blocks:

* No other request can be processed
* Entire server appears frozen

Sync methods are acceptable for:

* Scripts
* Startup logic
  Not for live APIs.

---

## 8. What is the `os` module used for?

**Answer:**
The `os` module provides:

* CPU architecture
* Memory usage
* OS type
* Platform details

Used in:

* Monitoring
* Debugging
* Performance analysis

---

## 9. What is an HTTP server at its core?

**Answer:**
An HTTP server is a loop that:

1. Listens on a port
2. Receives a request
3. Sends a response
4. Ends the connection

No framework is required for this.

---

## 10. What are `req` and `res` in Node HTTP server?

**Answer:**

* `req` → incoming request (URL, headers, method)
* `res` → response object used to send data back

They are **streams**, not simple objects.

---

## 11. Why is `res.end()` important?

**Answer:**
`res.end()` signals:

* Response is complete
* Connection can be closed

Without it:

* Client waits indefinitely
* Request hangs

---

## 12. How is Express related to Node HTTP?

**Answer:**
Express is a **wrapper** over Node’s `http` module.

It:

* Simplifies routing
* Adds middleware support
* Improves developer experience

But internally, it still uses:

* `req`
* `res`
* Node HTTP server

---

## 13. WHAT DOES `"utf-8"` MEAN? (INTERVIEW-READY)

### Short meaning

`"utf-8"` tells Node **how to convert raw bytes from a file into readable text**.

---

### Core mental model

* Files are stored as **bytes (0s and 1s)**
* UTF-8 defines how bytes map to characters
* Encoding → string
* No encoding → Buffer (raw bytes)

---

### With `"utf-8"`

```js
fs.readFileSync("file.txt", "utf-8");
```

* Returns a **string**
* Use for: text, JSON, source code

---

### Without `"utf-8"`

```js
fs.readFileSync("file.txt");
```

* Returns a **Buffer**
* Use for: images, videos, binary data

---

### One-line rule

**Text → use `"utf-8"`**
**Binary → use Buffer**

---

### Interview line

> “Files are stored as bytes. UTF-8 tells Node how to decode those bytes into readable characters. Without encoding, Node returns a Buffer.”

---

## 14. Why does Node return a Buffer by default?

**Answer:**
Because Node cannot assume the file is text.

Binary safety is required for:

* Images
* Videos
* PDFs
* Streams

Text decoding must be **explicit**.

---

## 15. One-sentence summary of this project

> “This project helped me understand Node.js as a runtime that exposes system APIs, rather than treating it as a framework.”

---

## 16. Self-check (Must Answer Without Looking)

* Why does blocking code freeze Node servers?
* What happens if `res.end()` is skipped?
* When should sync fs methods be avoided?
* Why is UTF-8 needed explicitly?
