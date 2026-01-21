# JavaScript — Behind the Code

## (It’s NOT Basics)

---

## Why this section exists (Read this first)

Most JavaScript courses teach **syntax**.
This section teaches **why JavaScript behaves the way it does**.

If you understand this folder deeply:

- You stop memorizing rules
- You stop fearing “weird JS behavior”
- You can debug confidently
- You can explain JS like a senior engineer
- Interviews become reasoning-based, not recall-based

This section answers one core question:

> **“What actually happens when JavaScript code runs?”**

---

## How to read this section (IMPORTANT)

This is **not sequential like basics**.
This is **mental-model-first learning**.

You should read it in this order:

1. What JavaScript really is
2. Why it exists and evolved this way
3. How engines and runtimes execute it
4. How memory, stack, heap, and GC work
5. Why JS is single-threaded but still async
6. How all of this explains real-world behavior
7. How to explain it in interviews

---

## 1. What JavaScript REALLY is (not what beginners think)

JavaScript is:

- **Not just a scripting language**
- **Not just for browsers**
- **Not just event handling**

JavaScript is:

- A **high-level**, **interpreted**, **garbage-collected**
- **Dynamically typed**
- **Prototype-based**
- **Single-threaded**
- **Event-driven**
- **Runtime-dependent** language

JavaScript ≠ Browser
JavaScript ≠ Node.js

JavaScript is a **language specification** (ECMAScript).
Everything else is an **environment around it**.

This idea is foundational.

---

## 2. Why JavaScript was designed the way it is

JavaScript was created to:

- Run **inside browsers**
- Be **easy for beginners**
- Be **safe for users**
- Execute **quickly without compilation**

This explains:

- Loose typing
- Type coercion
- Weird equality
- Single-threaded nature
- Event-driven model

Many “JS flaws” are actually **design trade-offs**.

---

## 3. JavaScript Engines (Why V8 matters)

A **JavaScript engine** is what actually runs your code.

Examples:

- V8 → Chrome, Node.js
- SpiderMonkey → Firefox
- JavaScriptCore → Safari

What engines do:

- Parse JS code
- Create execution contexts
- Manage memory
- Optimize hot code
- Execute instructions

**JS behavior is defined by the engine, not your editor.**

---

## 4. JavaScript Runtime (Browser vs Node)

JavaScript alone cannot:

- Access files
- Make HTTP requests
- Use timers
- Handle events

These come from the **runtime environment**.

### Browser runtime provides:

- DOM
- Web APIs
- Event loop
- Timers
- Fetch

### Node.js runtime provides:

- File system
- OS access
- Network sockets
- Process APIs

Same language.
Different powers.

---

## 5. Execution Context (The heart of JS)

Every time JS runs code, it creates an **Execution Context**.

Execution Context contains:

- Variable Environment
- Scope Chain
- `this` value

There are three types:

1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context (rare)

This explains:

- Hoisting
- Scope
- `this`
- Closures

---

## 6. Call Stack (How code actually runs)

JavaScript executes code using a **Call Stack**.

Rules:

- Stack is **LIFO**
- One function at a time
- No parallel execution

This explains:

- Stack overflow
- Recursion limits
- Why blocking code freezes the UI

---

## 7. Stack vs Heap (Memory model)

JavaScript memory is divided into:

### Stack

- Primitive values
- Function calls
- Execution contexts
- Fast, limited

### Heap

- Objects
- Arrays
- Functions (objects)
- Large, dynamic

This explains:

- Pass by value vs reference
- Why objects behave differently
- Memory leaks

---

## 8. Garbage Collection (Why you don’t free memory)

JavaScript uses **automatic garbage collection**.

Key idea:

- Memory is freed when **no references remain**
- You don’t control GC timing
- You can still cause memory leaks

Understanding this helps with:

- Closures
- Event listeners
- Long-lived objects

---

## 9. Why JavaScript is Single-Threaded

JavaScript runs on **one main thread**.

Reasons:

- DOM safety
- Simplicity
- Predictability

But JavaScript still handles:

- Async tasks
- Timers
- Network requests

How?

Through:

- Event loop
- Callback queue
- Microtask queue

This is why JS feels multi-threaded while not being one.

---

## 10. How JavaScript actually works (Putting it all together)

When you run JS code:

1. Engine parses code
2. Global execution context is created
3. Memory is allocated
4. Code is executed line-by-line
5. Functions create new execution contexts
6. Stack manages execution order
7. Heap stores objects
8. Event loop manages async behavior
9. Garbage collector cleans unused memory

Everything you see in JS comes from this pipeline.

---

## 11. JavaScript vs Other Languages (Why JS feels different)

JavaScript differs from:

- C++ (manual memory)
- Java (compiled, strongly typed)
- Python (different runtime model)

JS prioritizes:

- Developer speed
- Runtime flexibility
- Event-driven systems

This explains why:

- JS is everywhere
- JS feels inconsistent to beginners
- JS is powerful in systems design

---

## 12. Interview Perspective (How seniors explain JS)

In interviews, good answers are not syntax-based.

Bad answer:

> “Because JavaScript does hoisting”

Good answer:

> “Because the execution context is created before code execution, variables are allocated in memory first, which results in hoisting behavior.”

This folder trains **that level of explanation**.

---
