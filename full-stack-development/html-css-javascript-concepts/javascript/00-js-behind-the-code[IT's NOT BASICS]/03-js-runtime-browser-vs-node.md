# 📁 00-js-foundation

## `03-js-runtime-browser-vs-node.md`

> **Purpose of this file:**
> Separate **JavaScript (language)** from **where it runs**.
> This removes confusion around DOM, timers, APIs, and Node vs Browser behavior.

![Articles](https://www.geeksforgeeks.org/blogs/nodejs-vs-browser/)
![Articles](https://nodejs.org/en/learn/getting-started/differences-between-nodejs-and-the-browser)
![Articles](https://medium.com/@artemkhrenov/browser-and-node-js-differences-in-concurrency-bc2f24cf4e56)

---

---

## 1. First correction (very important)

Most people think:

> “Browser runs JavaScript”

Correct mental model:

> **JavaScript runs inside a runtime**,
> and the runtime runs **inside** the browser or Node.

This distinction matters.

---

## 2. What is a Runtime? (precise definition)

A **JavaScript Runtime** is:

> A **container environment** that embeds a JS engine and provides **extra capabilities**

The runtime provides:

* APIs
* Event handling
* I/O access
* Scheduling

The engine **executes code**,
the runtime **supports execution**.

---

## 3. What the JS Engine does vs Runtime does

Clear separation:

### JS Engine (V8)

* Executes JavaScript
* Manages memory
* Runs call stack
* Optimizes code

### Runtime

* Exposes APIs
* Manages async tasks
* Talks to OS / browser
* Handles events

If you mix these → async JS becomes confusing.

---

## 4. Browser Runtime (what it provides)

Browser runtime gives JavaScript access to:

* DOM
* BOM
* `setTimeout`
* `fetch`
* Events
* Storage (local/session)

Important rule:

> **None of these are part of JavaScript itself**

They are **browser-provided APIs**.

JS just calls them.

---

## 5. Node.js Runtime (what it provides)

Node runtime gives JavaScript access to:

* File system
* Network sockets
* Process info
* Timers
* Streams

Again:

> These are **not JS features**,
> they are **Node-provided APIs**.

Same JS engine, different powers.

---

## 6. Same JS, different abilities (core insight)

Example:

```js
console.log(window); // browser only
console.log(process); // node only
```

Why?

* `window` → browser runtime
* `process` → Node runtime

JavaScript language did **not change**.

Only the **runtime** changed.

---

## 7. Why Node.js was a breakthrough

Before Node:

* JS only in browser

Node added:

* Server-side JS
* Non-blocking I/O
* One language across stack

Result:

* Full-stack JS
* Shared mental models
* Faster development cycles

This is why JS escaped the browser.

---

## 8. Common beginner mistake (critical to avoid)

Mistake:

> “JavaScript has `setTimeout`”

Correct:

> “Browser/Node runtime provides `setTimeout`”

This wording difference shows **senior clarity**.

---

## 9. Why this separation matters later

This understanding will unlock:

* Event loop clarity
* Async behavior
* Node internals
* DOM vs logic separation
* Interview confidence

Without this:

* Async feels magical
* Bugs feel random

---

## 10. Interview-safe explanation

If asked:

> “Difference between browser JS and Node JS?”

Correct answer:

> JavaScript is the same language in both, but the runtime APIs provided by the browser and Node.js are different.

Short. Accurate. Safe.

---

## 11. One-page summary

* JS engine executes code
* Runtime provides environment features
* Browser and Node use same engine
* APIs differ by runtime
* JS language stays constant
* Confusion ends here

---