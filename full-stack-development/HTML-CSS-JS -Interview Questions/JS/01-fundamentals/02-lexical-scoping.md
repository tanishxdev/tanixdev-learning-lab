## Question 2

### What is lexical scoping in JavaScript, and how does it decide variable access?

---

### Interview Intent (Why this is asked)

The interviewer wants to check:

- Do you understand **how scope is decided**
- Can you explain **why inner functions access outer variables**
- Foundation for **closures**
- Whether you confuse execution order with scope

---

### Concept: What is Lexical Scope?

**Lexical scope** means:

> Scope is decided by **where variables and functions are written in the code**,
> not by **how or where they are called**.

JavaScript uses **lexical (static) scoping**, not dynamic scoping.

---

### Simple Definition (Interview-Ready)

> In JavaScript, the scope of a variable is determined at **compile time** based on the **physical structure of the code**.

---

### Basic Example

```js
let x = 10;

function outer() {
  let y = 20;

  function inner() {
    console.log(x); // 10
    console.log(y); // 20
  }

  inner();
}

outer();
```

---

### Why `inner()` Can Access `x` and `y`

Because of **lexical scoping**:

- `inner()` is **written inside** `outer()`
- So it automatically gets access to:
  - its own scope
  - outer function scope
  - global scope

This access chain is called the **scope chain**.

---

### Scope Chain (Important Interview Term)

When JavaScript looks for a variable:

1. Current scope
2. Outer (lexical) scope
3. Global scope
4. If not found → `ReferenceError`

Visual:

```
inner()
 └── outer()
      └── global
```

---

### Lexical vs Execution (Common Confusion)

Lexical scope is **NOT decided at runtime**.

Wrong thinking:

> “Function is called from somewhere, so scope changes”

Correct thinking:

> “Function is written here, so scope is fixed”

Example:

```js
function outer() {
  let a = 10;
  return function inner() {
    console.log(a);
  };
}

let fn = outer();
fn(); // 10
```

Even though `outer()` finished execution,
`inner()` still accesses `a` because scope is lexical.

---

### Interview Trap Example

```js
let a = 100;

function test() {
  console.log(a);
}

function wrapper() {
  let a = 50;
  test();
}

wrapper(); // 100
```

Why output is `100`, not `50`?

Because:

- `test()` is **lexically defined in global scope**
- It does NOT care where it is called from
- It looks for `a` in its **lexical environment**

This is a **classic interview question**.

---

### Relation to Closures (Bridge Concept)

Lexical scoping is the **reason closures work**.

- Lexical scope decides **what variables a function can access**
- Closure decides **how long those variables stay alive**

Say this line in interview:

> “Closures exist because JavaScript is lexically scoped.”

---

### Interview-Ready Summary

Lexical scoping in JavaScript means that variable access is determined by the position of functions and variables in the source code. A function can access variables from its own scope and all outer scopes where it is defined, forming a scope chain. This scope is fixed at compile time and does not change based on how or where the function is called.

---

### Expected Follow-up Questions

1. Is JavaScript lexically or dynamically scoped?
2. What is scope chain?
3. Why does lexical scope enable closures?
4. Can scope change at runtime?
5. Explain lexical scope with a tricky example

---
