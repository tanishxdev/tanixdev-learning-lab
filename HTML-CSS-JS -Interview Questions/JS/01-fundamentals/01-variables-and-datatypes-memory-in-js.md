## Question 1

### What are variables in JavaScript, how are they stored in memory, and how do data types affect memory?

---

### Interview Intent (Why this question is asked)

The interviewer wants to check:

- Do you understand **how JS stores data**
- Do you know the **difference between primitive vs reference**
- Can you reason about **memory, copying, bugs**
- Foundation for **scope, closures, performance issues**

---

### Concept: What is a Variable?

A **variable** is a **named reference** to a value stored in memory.

In JavaScript:

- Variables do **not store values directly**
- They store **references (addresses)** to memory locations

Example (mental model):

```
name ───► "Tanish"
age  ───► 21
```

---

### Data Types Decide Memory Behavior

JavaScript data types are divided into **two memory-behavior groups**:

1. **Primitive types → Stored by value**
2. **Reference types → Stored by reference**

This is the **most important interview distinction**.

---

### Primitive Data Types (Stored by Value)

Primitives store **actual value directly**.

Primitive types:

- string
- number
- boolean
- undefined
- null
- symbol
- bigint

Example:

```js
let a = 10;
let b = a;

b = 20;
```

Memory view:

```
a ───► 10
b ───► 20
```

Explanation:

- `b = a` copies the **value**
- Changing `b` does NOT affect `a`

---

### Reference Data Types (Stored by Reference)

Reference types store **address of memory**, not value.

Reference types:

- object
- array
- function

Example:

```js
let obj1 = { x: 10 };
let obj2 = obj1;

obj2.x = 20;
```

Memory view:

```
obj1 ─┐
      └──► { x: 20 }
obj2 ─┘
```

Explanation:

- Both variables point to **same memory**
- Change via one affects the other

---

### Why This Causes Bugs (Interview Favorite)

```js
function update(user) {
  user.name = "Rahul";
}

let u = { name: "Tanish" };
update(u);

console.log(u.name); // Rahul
```

Reason:

- Object passed by **reference**
- Function modifies same memory

Interview line to say:

> “Objects are passed by sharing reference, not copied.”

---

### Stack vs Heap (Memory Model)

| Area  | Stores                              |
| ----- | ----------------------------------- |
| Stack | Primitives, references              |
| Heap  | Actual objects / arrays / functions |

Example:

```js
let a = 10; // stack
let user = { age: 21 }; // stack → heap
```

Memory:

```
Stack: user ──► Heap: { age: 21 }
```

---

### Interview Traps (Must Know)

```js
let a = null;
typeof a; // "object" ❌
```

Why:

- Historical JS bug
- `null` is primitive but reported as object

Say this in interview confidently.

---

### Interview-Ready Summary

Variables in JavaScript store references to memory locations. Primitive data types are stored and copied by value, while reference types like objects and arrays are stored in heap memory and accessed via references. This difference affects copying, function calls, and can lead to side effects if not understood properly.

---

### Follow-up Interview Questions (Expected)

1. Are objects passed by value or reference?
2. Why does changing one object variable affect another?
3. What is stored in stack vs heap?
4. Why is `typeof null` object?
5. How does this relate to closures?

---
