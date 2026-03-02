
# JavaScript Foundation — How JavaScript Thinks

*(Language core, engine mindset, execution model)*

This file is **not about syntax**.
This file is about **how JavaScript behaves internally**.

If this foundation is weak:

* Hoisting feels magical
* Async feels confusing
* Bugs feel random
* Interviews feel unpredictable

This is the **root layer** of JavaScript.

---

## 1. What is JavaScript? (Real definition)

JavaScript is:

> A **high-level**, **interpreted**, **garbage-collected**, **single-threaded** programming language with a **non-blocking concurrency model**

But mentally:

> JavaScript is a language whose **behavior is defined by its engine, runtime, and execution model**, not just syntax.

Important:

* JavaScript ≠ browser
* JavaScript ≠ Node.js
* JavaScript ≠ HTML/CSS

JavaScript is just a **language specification**.

---

## 2. Why JavaScript exists (problem-first)

Originally, the web was:

* Static
* No interaction
* No logic on client

Problem:

> “Make web pages interactive without server round-trips.”

JavaScript was created to:

* Handle user events
* Manipulate page content
* Run inside browser safely

Later, it expanded far beyond the browser.

---

## 3. JavaScript history & evolution (only what matters)

Key points only:

* Created in **1995**
* Designed in **10 days**
* Initially called **Mocha → LiveScript → JavaScript**
* Standardized as **ECMAScript**

Important mental note:

> JavaScript evolved under **backward compatibility pressure**

That’s why:

* Weird behaviors exist
* Old bugs remain
* Design favors “not breaking the web”

---

## 4. JavaScript Engine (V8 overview)

A **JavaScript engine** is a program that:

* Parses JS code
* Executes it
* Manages memory

Popular engines:

* V8 (Chrome, Node)
* SpiderMonkey (Firefox)
* JavaScriptCore (Safari)

We focus on **V8** (most relevant).

---

### 4.1 What V8 does internally (high level)

V8 pipeline (simplified):

1. Parse code
2. Create AST (Abstract Syntax Tree)
3. Compile to bytecode
4. Optimize hot code
5. Execute

Key idea:

> JavaScript is **just-in-time compiled**, not purely interpreted.

---

## 5. JavaScript Runtime (Browser vs Node)

JavaScript **cannot run alone**.

It needs a **runtime**.

---

### 5.1 Browser runtime provides

* JS Engine
* Web APIs:

  * DOM
  * setTimeout
  * fetch
  * events
* Event loop

Browser runtime goal:

> UI interaction + user experience

---

### 5.2 Node.js runtime provides

* JS Engine (V8)
* System APIs:

  * file system
  * network
  * process
* Event loop

Node runtime goal:

> Server-side logic + I/O handling

---

Important rule:

> JavaScript language is same
> Runtime capabilities differ

---

## 6. Execution Context (most critical concept)

Every time JavaScript runs code, it creates an **Execution Context**.

Execution Context contains:

1. Memory Creation Phase
2. Code Execution Phase

There are three types:

* Global Execution Context
* Function Execution Context
* Eval Execution Context (ignore mostly)

---

### 6.1 Memory Creation Phase

JavaScript:

* Scans code
* Allocates memory
* Registers variables & functions

This is where:

* Hoisting happens
* Scope is prepared

---

### 6.2 Code Execution Phase

JavaScript:

* Runs code line-by-line
* Assigns values
* Executes logic

Mental model:

> JS first **knows everything**, then **runs everything**

---

## 7. Call Stack (how code actually runs)

Call Stack is:

> A stack data structure that tracks **which function is currently running**

Rules:

* Functions are pushed on call
* Popped on return
* Stack follows **LIFO**

---

### 7.1 Why call stack matters

Explains:

* Execution order
* Stack overflow
* Recursion behavior
* Error stack traces

JS has:

* Single call stack
* One function at a time

---

## 8. Memory model (Stack vs Heap)

JavaScript uses two main memory areas.

---

### 8.1 Stack memory

Used for:

* Primitive values
* Function calls
* References

Fast and limited.

---

### 8.2 Heap memory

Used for:

* Objects
* Arrays
* Functions

Large and dynamic.

Variables:

* Live in stack
* Point to heap data (for objects)

---

## 9. Garbage Collection (automatic memory management)

JavaScript uses **garbage collection**.

Meaning:

> Developer does not manually free memory

GC removes:

* Objects with no references

Key idea:

> If nothing can reach an object, it is garbage.

Common cause of leaks:

* Global references
* Closures holding data
* Event listeners not removed

---

## 10. Is JavaScript single-threaded?

Yes.

JavaScript:

* Has **one call stack**
* Executes **one thing at a time**

But…

It handles async via:

* Event loop
* Callback queue
* Microtask queue

Important clarification:

> JavaScript is single-threaded,
> the runtime is concurrent.

---

## 11. How non-blocking works (high level)

Long tasks:

* Are delegated to runtime APIs
* JS thread stays free
* Results are queued back later

This allows:

* UI responsiveness
* High concurrency

(No deep async here — only mental model)

---

## 12. JavaScript vs other languages (thinking difference)

JavaScript differs because:

* Dynamic typing
* No manual memory management
* Function-first design
* Event-driven execution
* Prototype-based OOP

Interview mindset:

> JavaScript trades low-level control for developer productivity.

---

## 13. Common beginner-to-intermediate confusion

* Thinking JS = browser
* Thinking code runs top-to-bottom only
* Ignoring memory creation phase
* Misunderstanding stack vs heap
* Blaming “async magic”

All solved by this foundation.

---

## 14. Interview expectations (language core)

Interviewers expect you to explain:

* How JS executes code
* What execution context is
* How call stack works
* Why JS is single-threaded
* How memory is managed

Not engine internals — **mental clarity**.

---

## 15. One-page summary

* JavaScript is a language spec
* Engine executes JS
* Runtime provides APIs
* Execution context has two phases
* Call stack controls execution
* Stack & heap manage memory
* Garbage collection is automatic
* JS is single-threaded but concurrent

---
