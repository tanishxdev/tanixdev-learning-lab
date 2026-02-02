## Question 7

### How does JavaScript pass variables to functions? (pass-by-value vs pass-by-reference confusion)

---

### Interview Intent (Why this is asked)

The interviewer wants to check:

- Do you **really understand memory**
- Can you explain **why objects change inside functions**
- Can you clearly say **“JavaScript is pass-by-value”** without confusion
- Whether you avoid the common _pass by reference_ myth

---

### Core Truth (Say This Clearly in Interview)

> **JavaScript is always pass-by-value.**

The confusion happens because:

- **Primitive values** → value is copied
- **Objects** → reference value is copied

Important line:

> In objects, the **reference is passed by value**, not the object itself.

---

### Case 1: Primitive Passed to Function

```js
function update(x) {
  x = 20;
}

let a = 10;
update(a);

console.log(a); // 10
```

Explanation:

- `a` stores value `10`
- `x` gets a **copy of 10**
- Changing `x` does not affect `a`

Memory view:

```
a ───► 10
x ───► 10   (separate copy)
```

---

### Case 2: Object Passed to Function

```js
function update(user) {
  user.name = "Rahul";
}

let obj = { name: "Tanish" };
update(obj);

console.log(obj.name); // Rahul
```

Explanation:

- `obj` stores a **reference** to heap object
- `user` gets a **copy of the same reference**
- Both point to same memory

Memory view:

```
obj ─┐
     └──► { name: "Rahul" }
user ─┘
```

So mutation affects original object.

---

### Interview Trap Example (Very Important)

```js
function replace(obj) {
  obj = { name: "New" };
}

let user = { name: "Old" };
replace(user);

console.log(user.name); // Old
```

Why object did NOT change?

Because:

- `obj` was reassigned to a **new reference**
- Original reference (`user`) remains unchanged

This proves:

> Reference itself is passed **by value**

---

### One-Line Interview Explanation

> JavaScript passes arguments by value.
> For primitives, the value is copied.
> For objects, the reference is copied, so mutations affect the same object.

---

### Why This Matters in Real Code

Bug example:

```js
function normalize(user) {
  user.age = 0;
}

normalize(currentUser);
```

Fix pattern (immutable approach):

```js
function normalize(user) {
  return { ...user, age: 0 };
}
```

---

### Relation to Closures & Scope

- Closures **retain references**, not copies
- If closure captures object → mutations persist
- If closure captures primitive → new value stored

---

### Interview-Ready Summary

JavaScript always uses pass-by-value. Primitive values are copied directly, so changes inside a function do not affect the original variable. Objects are stored as references, and when passed to functions, the reference is copied by value. Mutating the object affects the original, but reassigning the reference does not.

---

### Expected Follow-up Questions

1. Is JavaScript pass-by-reference?
2. Why do objects change inside functions?
3. Why does reassigning object inside function not work?
4. How do you prevent object mutation?
5. How does this relate to closures?

---
