

# 📁 00-js-foundation

## `06-heap-stack-garbage-collection.md`

> **Purpose of this file:**
> Explain **where data actually lives**, **why memory leaks happen**, and **how JavaScript cleans up memory**.
> This connects directly to objects, closures, performance, and crashes.

---

## 1. Two kinds of memory in JavaScript (core split)

At runtime, JavaScript uses **two main memory areas**:

```
1. Stack
2. Heap
```

They serve **different purposes** and have **different lifetimes**.

Mixing them mentally causes confusion later.

---

## 2. Stack memory (fast, structured, limited)

**Stack memory** stores:

* Execution contexts
* Function calls
* Primitive values
* References (addresses) to heap objects

Characteristics:

* Very fast
* Fixed size
* Automatically managed
* LIFO-based

Example:

```js
let x = 10;
```

Memory:

* `x → 10` stored on stack

---

## 3. Heap memory (flexible, dynamic)

**Heap memory** stores:

* Objects
* Arrays
* Functions (as objects)

Characteristics:

* Large
* Dynamic size
* Slower than stack
* Needs garbage collection

Example:

```js
let user = { name: "A" };
```

Memory:

* Stack → `user` (reference)
* Heap → `{ name: "A" }`

---

## 4. Why objects don’t live on the stack

Objects:

* Can grow
* Can shrink
* Can be shared
* Have unpredictable size

Stack cannot handle this safely.

So:

> Objects live in heap, references live in stack

This is **intentional design**.

---

## 5. Lifetime difference (very important)

### Stack lifetime

* Exists **only while function runs**
* Cleared automatically when context is popped

### Heap lifetime

* Exists **as long as something references it**

This single rule explains **memory leaks**.

---

## 6. What is Garbage Collection? (precise definition)

**Garbage Collection (GC)** is:

> The process by which the JS engine **automatically frees heap memory** that is no longer reachable

Important:

* GC works only on **heap**
* Stack memory is cleared automatically
* Developers do **not** manually free memory

---

## 7. Reachability rule (core GC concept)

An object is **kept in memory** if it is:

* Reachable from global scope
* Reachable from an active execution context
* Reachable through references

If **nothing can reach it** → eligible for GC.

---

## 8. Simple reachability example

```js
function createUser() {
  const user = { name: "A" };
}

createUser();
```

After function ends:

* Stack frame destroyed
* No references to `user`
* Heap object becomes unreachable
* GC can clean it

---

## 9. How memory leaks actually happen

Memory leaks occur when:

> Heap objects stay reachable **longer than intended**

Common causes:

* Global variables
* Long-lived closures
* Unremoved event listeners
* Caches that never clear

JS doesn’t leak by default — **references do**.

---

## 10. Example: accidental leak

```js
let users = [];

function addUser(name) {
  users.push({ name });
}
```

Problem:

* `users` is global
* Objects are never released
* Heap grows forever

This is not GC failure — it’s **design misuse**.

---

## 11. GC is automatic but not free

Garbage Collection:

* Runs periodically
* Pauses execution briefly
* Costs performance

Implication:

* Creating too many objects frequently can hurt performance

We optimize by:

* Reusing objects
* Limiting allocations

(No premature optimization — just awareness.)

---

## 12. Common misconception

Mistake:

> “JS clears memory when variables go out of scope”

Correct:

> JS clears memory when objects become **unreachable**

Scope and reachability are related, but not identical.

---

## 13. Interview-safe explanation

If asked:

> “How does garbage collection work in JavaScript?”

Correct answer:

> JavaScript uses automatic garbage collection to free heap memory by removing objects that are no longer reachable through references.

Clear. Accurate. No engine internals needed.

---

## 14. One-page summary

* Stack stores execution + primitives
* Heap stores objects and functions
* Stack cleared automatically
* Heap cleaned via GC
* Reachability decides lifetime
* Memory leaks come from lingering references

---