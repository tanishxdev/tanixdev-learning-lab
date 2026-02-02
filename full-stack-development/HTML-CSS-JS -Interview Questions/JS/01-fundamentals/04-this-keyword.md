## Question 4

### What is the `this` keyword in JavaScript, and how is its value determined?

---

### Interview Intent (Why this is asked)

The interviewer wants to check:

- Do you understand **runtime context**
- Can you explain **call-site based behavior**
- Can you avoid common `this` bugs
- Whether you know **arrow vs regular function difference**

---

### Core Concept (Interview-Safe Definition)

> `this` is a keyword that refers to the **object that is calling the function**,
> and its value is decided **at runtime**, based on **how the function is called**.

Important line to say:

> `this` is **not lexical**, it is **call-site based**.

---

### Rule 1: Global Context

```js
console.log(this);
```

- Browser → `window`
- Strict mode → `undefined`

---

### Rule 2: Regular Function Call

```js
function show() {
  console.log(this);
}

show();
```

- Non-strict → `window`
- Strict → `undefined`

---

### Rule 3: Method Call (Object)

```js
const user = {
  name: "Tanish",
  greet() {
    console.log(this.name);
  },
};

user.greet(); // Tanish
```

Why:

- Function called **using object**
- `this` points to that object

---

### Common Interview Trap (Very Important)

```js
const user = {
  name: "Tanish",
  greet() {
    function inner() {
      console.log(this.name);
    }
    inner();
  },
};

user.greet(); // undefined
```

Why:

- `inner()` is a **plain function call**
- `this` falls back to global

---

### Fix Using Arrow Function

```js
const user = {
  name: "Tanish",
  greet() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

user.greet(); // Tanish
```

Reason:

- Arrow functions **do not have their own `this`**
- They inherit `this` from lexical scope

---

### Arrow Function Rule (Interview Gold)

> Arrow functions capture `this` **lexically**,
> regular functions determine `this` **dynamically**.

---

### `this` in Event Handlers

```js
button.addEventListener("click", function () {
  console.log(this); // button
});
```

Arrow version:

```js
button.addEventListener("click", () => {
  console.log(this); // window
});
```

---

### Explicit Binding: `call`, `apply`, `bind`

```js
function greet(city) {
  console.log(this.name, city);
}

const user = { name: "Tanish" };

greet.call(user, "Delhi");
greet.apply(user, ["Delhi"]);

const fn = greet.bind(user);
fn("Delhi");
```

---

### Priority Order (Interview Must Know)

1. `bind`
2. `call / apply`
3. Object method
4. Regular function
5. Global / undefined

---

### Interview-Ready Summary

The `this` keyword in JavaScript refers to the object that invokes a function, and its value is determined at runtime based on the call site. Regular functions determine `this` dynamically, while arrow functions inherit `this` from their lexical scope. Methods like `call`, `apply`, and `bind` allow explicit control over `this`.

---

### Expected Follow-up Questions

1. Why arrow functions don’t have their own `this`?
2. Difference between `this` in strict vs non-strict mode?
3. Why does `this` get lost in callbacks?
4. How does `bind` work?
5. When not to use arrow functions?

---
