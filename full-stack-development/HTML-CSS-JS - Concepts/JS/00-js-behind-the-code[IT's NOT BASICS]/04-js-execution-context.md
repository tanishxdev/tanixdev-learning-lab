# 📁 00-js-foundation

![Read](https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/)
![Read](https://www.geeksforgeeks.org/javascript/javascript-code-execution/)

## `04-js-execution-context.md`

> **Purpose of this file:**
> Explain **how JavaScript runs code internally**.
> This is the backbone of hoisting, scope, closures, and bugs.

---

## 1. What is an Execution Context? (precise definition)

An **Execution Context** is:

> A **container** where JavaScript code is **evaluated and executed**

Whenever JS runs code, it does so **inside an execution context**.

No context → no execution.

---

## 2. Types of Execution Contexts (register only)

JavaScript has **three** types:

1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context (rare, ignore for now)

We will focus on the **first two**.

---

## 3. Global Execution Context (GEC)

When your JS program starts:

- JS engine creates the **Global Execution Context**
- Happens **only once**
- Before any line runs

The GEC:

- Creates global memory
- Sets up `this`
- Prepares execution

Nothing runs before this.

---

## 4. What an Execution Context contains (important)

Each Execution Context has **two phases**:

```
1. Memory Creation Phase
2. Code Execution Phase
```

This is **non-negotiable**.

---

## 5. Memory Creation Phase (hoisting lives here)

During this phase, JS:

- Scans the code
- Allocates memory for:

  - Variables
  - Functions

Rules you already know now make sense:

- `var` → `undefined`
- `let/const` → uninitialized (TDZ)
- Function declarations → full function stored

No code runs here.

---

## 6. Code Execution Phase

Now JS:

- Runs code line by line
- Assigns values
- Executes functions
- Creates new execution contexts

This is where **actual work happens**.

---

## 7. Function Execution Context (nested behavior)

When a function is called:

- A **new execution context** is created
- It has its **own memory**
- It has its **own execution phase**

But:

- It can access outer variables (lexical scope — later)

This explains:

- Nested calls
- Stack behavior
- Closures (later)

---

## 8. Visual mental model (important)

Example:

```js
let x = 10;

function foo() {
  let y = 20;
  bar();
}

function bar() {
  let z = 30;
}

foo();
```

Execution order:

1. Global Execution Context created
2. `foo()` called → new context
3. `bar()` called → new context
4. `bar()` finishes → context destroyed
5. `foo()` finishes → context destroyed
6. Global continues

Contexts are **created and destroyed dynamically**.

---

## 9. Why execution context matters

Execution Context explains:

- Hoisting
- Scope
- Call stack
- Closures
- `this` behavior
- Bugs in async code

If this is weak, everything above feels magical.

---

## 10. Common beginner mistake

Mistake:

> “JS executes top to bottom directly”

Reality:

> JS **prepares memory first**, then executes

This single correction fixes many misunderstandings.

---

## 11. Interview-safe explanation

If asked:

> “What is an execution context?”

Correct answer:

> An execution context is an environment in which JavaScript code is evaluated and executed, consisting of a memory creation phase and a code execution phase.

This shows **engine-level understanding**.

---

## 12. One-page summary

- Execution context = environment for execution
- Created before code runs
- Two phases: memory + execution
- Global context created once
- Function calls create new contexts
- Contexts explain hoisting & scope

---
