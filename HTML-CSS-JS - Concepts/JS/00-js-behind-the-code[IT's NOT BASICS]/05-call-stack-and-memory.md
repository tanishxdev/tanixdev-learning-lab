

# 📁 00-js-foundation

## `05-call-stack-and-memory.md`

> **Purpose of this file:**
> Connect **execution contexts** to **actual runtime behavior**.
> This explains *why functions pause*, *why crashes happen*, and *how JS knows what to run next*.

---

## 1. First correction (very important)

Many people imagine JS execution as:

> “JS runs everything line by line”

Reality:

> JavaScript uses a **Call Stack** to manage **which execution context is active**

Execution Contexts do **not** float freely.
They are **managed by the call stack**.

---

## 2. What is the Call Stack? (precise definition)

The **Call Stack** is:

> A **stack data structure** that keeps track of **active execution contexts**

Rules:

* Stack = LIFO (Last In, First Out)
* Only the **top** context is running
* Others are paused

---

## 3. Relationship: Execution Context ↔ Call Stack

Whenever:

* Program starts → Global Execution Context is **pushed**
* Function is called → New context is **pushed**
* Function returns → Context is **popped**

The call stack is the **traffic controller**.

---

## 4. Visual example (step-by-step)

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.log("end");
}

a();
```

### Stack movement:

1. Global Context pushed
2. `a()` called → push `a`
3. `b()` called → push `b`
4. `c()` called → push `c`
5. `c()` ends → pop `c`
6. `b()` ends → pop `b`
7. `a()` ends → pop `a`
8. Global continues

Only **one function executes at a time**.

---

## 5. Why JS is single-threaded (connect the dots)

JavaScript has:

* One call stack
* One active execution context

Meaning:

> JS can do **only one thing at a time**

No parallel execution inside the language core.

This is a **design choice**, not a limitation mistake.

---

## 6. Stack memory vs Heap memory (register, not deep dive)

At runtime, JS uses:

### Stack

* Execution contexts
* Local variables
* Function calls

### Heap

* Objects
* Arrays
* Functions (as values)

We will deep dive heap & GC **in the next file**.

For now, just separate responsibilities.

---

## 7. Stack overflow (real crash reason)

Example:

```js
function recurse() {
  recurse();
}

recurse();
```

What happens:

* Contexts keep getting pushed
* Stack limit is reached
* Program crashes

This error is **not JS-specific**.
It’s how stacks work.

---

## 8. Why paused functions don’t disappear

When function `a()` calls `b()`:

* `a()` does NOT finish
* It pauses
* Its context stays on the stack

This explains:

* Return behavior
* Nested calls
* Why data is still available

---

## 9. Common beginner misconception

Mistake:

> “Functions finish when another function is called”

Correct:

> Functions **pause**, not finish, until their inner calls return

This mental model is critical.

---

## 10. Interview-safe explanation

If asked:

> “What is the call stack?”

Correct answer:

> The call stack is a stack data structure used by JavaScript to track active execution contexts and manage function calls.

Short. Accurate. Engine-level.

---

## 11. One-page summary

* Call stack manages execution contexts
* Stack follows LIFO order
* Only top context runs
* JS is single-threaded due to one stack
* Stack overflow comes from uncontrolled recursion
* Stack + execution context explain runtime flow
