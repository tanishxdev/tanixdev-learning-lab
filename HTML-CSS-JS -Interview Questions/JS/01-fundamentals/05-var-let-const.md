## Question 5

### What is the difference between `var`, `let`, and `const` in JavaScript (scope, memory, and interview pitfalls)?

---

### Interview Intent (Why this is asked)

The interviewer wants to check:

* Do you understand **scope rules**
* Do you know **hoisting + TDZ**
* Can you explain **why `var` causes bugs**
* Can you choose the **right keyword in real code**

---

### Core Concept (Interview-Safe)

JavaScript provides **three ways** to declare variables:

* `var` → old, function-scoped
* `let` → block-scoped
* `const` → block-scoped + immutable binding

They differ in **scope**, **hoisting behavior**, and **reassignment rules**.

---

### Scope Comparison (Most Important)

| Keyword | Scope Type       |
| ------- | ---------------- |
| `var`   | Function scope   |
| `let`   | Block scope `{}` |
| `const` | Block scope `{}` |

---

### Example: Block Scope vs Function Scope

```js
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

Explanation:

* `var` ignores block boundaries
* `let` and `const` respect blocks

---

### Hoisting Behavior (Interview Favorite)

All three are **hoisted**, but **initialized differently**.

| Keyword | Hoisted | Initial Value       |
| ------- | ------- | ------------------- |
| `var`   | Yes     | `undefined`         |
| `let`   | Yes     | Uninitialized (TDZ) |
| `const` | Yes     | Uninitialized (TDZ) |

---

### Temporal Dead Zone (TDZ)

TDZ = time between **scope entry** and **variable declaration**.

```js
console.log(x); // ReferenceError
let x = 10;
```

Why error?

* `x` exists in memory
* But access is blocked until declaration line

Same for `const`.

---

### `var` Hoisting Example (Bug Source)

```js
console.log(a); // undefined
var a = 10;
```

Internal view:

```js
var a = undefined;
console.log(a);
a = 10;
```

This silent behavior causes **hard-to-debug bugs**.

---

### Reassignment Rules

```js
let x = 10;
x = 20; // allowed

const y = 10;
y = 20; // TypeError
```

Important clarification (interview trap):

```js
const obj = { a: 1 };
obj.a = 2; // allowed
```

Reason:

* `const` prevents **rebinding**
* It does NOT make object immutable

---

### Memory Perspective (Short & Clear)

* All variables store **references**
* `const` does NOT change memory model
* It only restricts reassignment

---

### Loop Bug (Classic Interview Trap)

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Output:

```
3 3 3
```

Fix:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Reason:

* `let` creates **new binding per iteration**

---

### When to Use What (Interview Answer)

* Use `const` by default
* Use `let` if reassignment is needed
* Avoid `var` in modern JavaScript

Say this confidently in interviews.

---

### Interview-Ready Summary

`var` is function-scoped and hoisted with `undefined`, which can cause bugs due to unexpected access before assignment. `let` and `const` are block-scoped and exist in a Temporal Dead Zone until initialized, making them safer. `const` prevents reassignment but does not make objects immutable. Modern JavaScript prefers `let` and `const` over `var`.

---

### Expected Follow-up Questions

1. What is Temporal Dead Zone?
2. Why is `var` discouraged?
3. Is `const` immutable?
4. Why does `let` fix loop closure issues?
5. Are `let` and `const` hoisted?

---
