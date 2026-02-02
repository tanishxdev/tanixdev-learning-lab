

# 📁 00-js-foundation

## `02-js-engine-v8-overview.md`

> **Purpose of this file:**
> Understand **who actually runs your JavaScript code**.
> Without this, execution, performance, memory, and async all feel abstract.

---

## 1. First clear truth: JS does NOT execute itself

JavaScript code is **text**.

It cannot:

* Execute itself
* Manage memory itself
* Decide performance itself

So **something else must do this work**.

That “something” is a **JavaScript Engine**.

---

## 2. What is a JavaScript Engine? (precise definition)

A **JavaScript Engine** is:

> A program that **reads JavaScript code**, **allocates memory**, and **executes instructions**

Its responsibilities:

* Parse JS code
* Create memory
* Execute code line-by-line
* Optimize execution
* Clean up memory

JavaScript behavior depends heavily on the **engine design**.

---

## 3. V8 Engine (why we care)

The most important engine today is **V8**.

Used by:

* Chrome
* Edge
* Node.js

Meaning:

> Browser JS and Node.js JS share the **same engine**

This is why JS behaves consistently across environments.

---

## 4. High-level structure of V8 (mental model only)

At a **very high level**, V8 has:

```
JavaScript Code
      ↓
Parser
      ↓
Execution Engine
      ↓
Optimized Machine Code
```

Do **not** dive deeper yet.
Just understand the flow.

---

## 5. What happens when you run JS code (bird’s-eye)

When JS code runs, the engine does this:

1. Reads your code
2. Converts it into an internal form
3. Allocates memory
4. Executes instructions
5. Optimizes hot code paths
6. Frees unused memory

This explains why:

* First run may be slower
* Repeated code becomes faster

---

## 6. Why engines matter for developers

Engine behavior affects:

* Execution speed
* Memory usage
* Stack limits
* Optimization patterns

Example implications (no deep dive yet):

* Deep recursion can crash
* Certain loops are faster
* Object shapes matter

These are **engine-level effects**, not syntax issues.

---

## 7. Interpreted vs Compiled (important correction)

JavaScript is often called:

> “interpreted”

Reality:

> Modern JS engines **interpret + compile**

Meaning:

* Code is first interpreted
* Then optimized and compiled into machine code

So JS is **not slow by default**.

This hybrid approach is why JS can compete with compiled languages.

---

## 8. Engine ≠ Runtime (do NOT mix this)

Very important separation:

* **Engine** → executes JS
* **Runtime** → provides environment features

Examples:

* Engine does NOT provide:

  * DOM
  * `setTimeout`
  * File system
* Runtime does

We will separate these cleanly in the next file.

---

## 9. Why this file exists

If you don’t understand engines:

* Performance tuning feels random
* Memory issues feel mysterious
* Node vs browser feels confusing
* “JS is slow” becomes a myth you repeat

This file installs the **executor mental model**.

---

## 10. Interview-safe explanation

If asked:

> “What is V8?”

Correct answer:

> V8 is a JavaScript engine that parses, executes, and optimizes JavaScript code, converting it into machine code.

Clear. Accurate. Senior-safe.

---

## 11. One-page summary

* JavaScript needs an engine to run
* V8 is the most widely used engine
* Engine parses, executes, optimizes code
* JS is interpreted + compiled
* Engine is NOT the runtime
* Performance starts here, not syntax
