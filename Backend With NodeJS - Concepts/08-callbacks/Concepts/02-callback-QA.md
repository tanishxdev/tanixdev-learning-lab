# 02-callback-QA 

---

## 1. What is a callback in Node.js?

### Answer

A **callback** is a **function passed as an argument** to another function, which is **executed later**, usually **after an asynchronous operation completes**.

In Node.js, callbacks are commonly used to handle:

* file system operations
* network requests
* timers
* database queries

---

## 2. Why are callbacks needed in Node.js?

### Answer

Node.js is **single-threaded** and **non-blocking**.

Callbacks allow Node.js to:

* start slow operations (I/O)
* continue executing other code
* handle the result later when the operation finishes

Without callbacks, Node.js would block and become unresponsive.

---

## 3. Is a callback always asynchronous?

### Answer

❌ No.

A callback is **just a function**.
It becomes asynchronous **only when used with async APIs**.

Example:

```js
setTimeout(() => {}, 1000); // async callback
arr.forEach(() => {});     // synchronous callback
```

---

## 4. What is the error-first callback pattern?

### Answer

In Node.js callbacks, the **first argument is always the error**.

```js
function callback(err, data) {
  if (err) {
    // handle error
  } else {
    // use data
  }
}
```

This pattern ensures:

* consistent error handling
* predictable callback behavior

---

## 5. Why does `console.log` run before `fs.readFile` output?

### Answer

Because `fs.readFile` is **asynchronous**.

Execution flow:

1. `fs.readFile` starts
2. Callback is registered
3. JS continues execution
4. `console.log` runs
5. File read completes later
6. Callback executes

This proves **non-blocking behavior**.

---

## 6. What is callback hell?

### Answer

**Callback hell** occurs when multiple async operations depend on each other, causing **deeply nested callbacks**.

Problems:

* poor readability
* difficult debugging
* complex error handling
* hard to maintain

Also known as the **Pyramid of Doom**.

---

## 7. Why is callback hell bad in backend systems?

### Answer

Because backend systems:

* grow in complexity
* require clean error handling
* need maintainable code

Callback hell makes:

* logic unclear
* refactoring risky
* testing difficult

---

## 8. How do callbacks affect the event loop?

### Answer

Callbacks:

* are registered during async operations
* are executed later by the **event loop**
* always run on the **main JS thread**

They do **not** run in parallel.

---

## 9. Difference between `fs.readFile` and `fs.readFileSync`?

### Answer

| `fs.readFile`        | `fs.readFileSync`  |
| -------------------- | ------------------ |
| Asynchronous         | Synchronous        |
| Non-blocking         | Blocking           |
| Uses callback        | Uses return value  |
| Event loop free      | Event loop blocked |
| Preferred in servers | Avoid in servers   |

---

## 10. How is error handling different in sync vs async code?

### Answer

**Async (callback):**

```js
fs.readFile(file, (err, data) => {
  if (err) {}
});
```

**Sync:**

```js
try {
  fs.readFileSync(file);
} catch (err) {}
```

---

## 11. Can callbacks cause memory leaks?

### Answer

Yes, if:

* callbacks capture large variables
* callbacks are never executed or cleared
* event listeners are not removed

This is common in long-running servers.

---

## 12. Are callbacks still used in modern Node.js?

### Answer

Yes, but mostly:

* internally
* in low-level APIs
* in legacy code

Modern code prefers:

* Promises
* async/await

But understanding callbacks is **mandatory**.

---

## 13. How do Promises solve callback hell?

### Answer

Promises:

* flatten nested callbacks
* centralize error handling
* improve readability

They are built **on top of callbacks**.

---

## 14. Is async/await replacing callbacks?

### Answer

Syntax-wise: ✅ Yes
Concept-wise: ❌ No

Async/await:

* is syntactic sugar over Promises
* Promises internally use callbacks

Callbacks are the **foundation**.

---

## 15. One-line interview summary

> “Callbacks allow Node.js to handle asynchronous operations without blocking the main thread, but excessive nesting leads to callback hell, which is solved using Promises and async/await.”

---

## 16. Common Interview Traps (Be Careful)

* ❌ “Callbacks run in parallel”
* ❌ “Callbacks are always async”
* ❌ “Async/await does not use callbacks”
* ❌ “Node creates new threads for callbacks”

---

## 17. When should you still use callbacks?

### Answer

* simple one-step async tasks
* event listeners
* legacy APIs
* performance-critical low-level code

---

## Final Backend Takeaway

Callbacks are:

* fundamental
* unavoidable
* powerful but dangerous at scale

Understanding callbacks deeply makes:

* Promises easy
* async/await obvious
* backend async logic clear
