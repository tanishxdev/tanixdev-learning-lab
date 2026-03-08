# 📁 00-js-foundation

## `00-what-is-javascript.md`

> **Goal of this file:**
> Kill the wrong mental model of “JS = scripting language”
> Replace it with **what JavaScript actually is at a system level**

---

## 1. The WRONG definition (what most people think)

Most people say:

> “JavaScript is a programming language used for web development.”

This definition is **technically true** and **mentally useless**.

It explains:

* Nothing about execution
* Nothing about memory
* Nothing about why JS behaves strangely
* Nothing about why bugs happen

So we discard it.

---

## 2. The REAL definition (system-level)

**JavaScript is:**

> A **high-level**, **interpreted**, **single-threaded** programming language
> that runs **inside a host environment** using a **runtime + engine**

Important keywords (do NOT deep dive yet, just register names):

* Engine
* Runtime
* Host environment

We will unpack each **later in this folder** — not now.

For now, understand the **relationship**.

---

## 3. JavaScript is NOT standalone (critical truth)

JavaScript **cannot run by itself**.

It always needs a **host**.

Examples of hosts:

* Browser
* Node.js
* Deno
* Bun

Meaning:

> JavaScript ≠ browser
> JavaScript ≠ Node.js

JavaScript is the **language**.
Browser / Node are **environments** that *embed* it.

This single idea removes **massive confusion** later.

---

## 4. What JavaScript actually does (job description)

JavaScript’s core job is:

> **Execute logic** and **manipulate state**
> using memory, functions, and control flow

JavaScript **does NOT**:

* Access DOM by itself
* Access files by itself
* Handle network by itself
* Create timers by itself

Those abilities come from the **host environment**, not JS itself.

(JS just calls what the host exposes.)

---

## 5. Why JavaScript feels “weird” (design reason)

JavaScript was designed to:

* Run fast
* Be forgiving
* Not crash the browser
* Allow beginners to write code quickly

This led to:

* Loose typing
* Implicit coercion
* `undefined`, `null`
* Strange edge cases

These are **design trade-offs**, not accidents.

We study them so they stop feeling magical.

---

## 6. JavaScript is single-threaded (just register)

JavaScript executes **one thing at a time**.

This does **NOT** mean:

* It is slow
* It cannot do async work

It means:

> One call stack, one execution path

We will **fully break this down later**.
For now, just lock the statement.

---

## 7. JavaScript = language + engine + environment

Mental model (very important):

```
JavaScript (syntax + rules)
        ↓
JS Engine (executes code)
        ↓
Runtime / Host (browser, Node)
```

If you mix these up:

* Async makes no sense
* DOM makes no sense
* Node vs browser makes no sense

So we keep them **mentally separated**.

---

## 8. Why this file exists (problem-first)

If you skip this understanding:

* Execution context feels random
* Event loop feels fake
* Async feels magical
* Interview answers sound shallow

This file exists to set the **foundation** for everything else.

---

## 9. Interview-safe one-liner

If asked:

> “What is JavaScript?”

Correct senior answer:

> JavaScript is a high-level, single-threaded programming language that runs inside a host environment using a JavaScript engine.

Short. Accurate. Safe.

---

## 10. One-page summary

* JavaScript is a **language**, not an environment
* It always runs **inside a host**
* Browser / Node provide extra powers
* JS itself only handles logic & state
* Single-threaded by design
* Engine + runtime matter more than syntax

---
