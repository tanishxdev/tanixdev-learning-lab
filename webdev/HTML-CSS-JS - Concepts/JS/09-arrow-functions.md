# Arrow Functions (JavaScript)

---

## 1. Core Concept — Why Arrow Functions Exist

Arrow functions were introduced in **ES6** to solve two main problems:

1. **Too much boilerplate** for small functions
2. **Confusing `this` behavior** in callbacks and nested functions

They are **not a replacement for all functions**.
They are a **tool for specific situations**.

---

## 2. Mental Model (very important)

Think of arrow functions as:

> **Lightweight functions optimized for expressions and callbacks**

Key mindset:

- Short logic
- Inline usage
- No own `this`
- No own `arguments`

If a function is:

- Small
- Stateless
- Used as a callback
  → Arrow function fits well

---

### Normal Function vs Arrow Function (JavaScript)

We will focus **only** on these 3 points you asked:

1. `this`
2. Own `this`
3. Own `arguments`

---

### 1. What is `this` in JavaScript (mental model)

**Rule to remember:**

> `this` is decided by **how a function is called**, not where it is written.

So `this` is **dynamic** in normal functions.

---

### 2. Normal Function (`function` keyword)

#### Concept

A normal function:

* Has its **own `this`**
* Has its **own `arguments` object**
* `this` is decided **at call time**

#### Example: `this` in normal function

```js
const obj = {
  name: "Tanish",
  greet: function () {
    console.log(this.name);
  }
};

obj.greet(); // "Tanish"
```

**Why?**

* Function is called as `obj.greet()`
* So `this = obj`

---

#### Problem case (common confusion)

```js
const obj = {
  name: "Tanish",
  greet: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

obj.greet(); // undefined
```

**Why undefined?**

* `setTimeout` calls the function
* So `this` becomes **window / undefined (strict mode)**
* Inner function has its **own `this`**, different from outer

This is **normal function behavior**.

---

### 3. Arrow Function (`=>`)

#### Core Rule (MOST IMPORTANT)

> Arrow functions **do NOT have their own `this`**.

Instead:

> Arrow functions **borrow `this` from the surrounding scope** (lexical `this`).

---

#### 4. “Own this” vs “Does not have own this”

##### ❌ Normal Function

* Has its **own `this`**
* `this` changes depending on **how it is called**

##### ✅ Arrow Function

* **Does NOT create its own `this`**
* Uses `this` from **where it is written**

---

##### Example: Arrow fixing the earlier problem

```js
const obj = {
  name: "Tanish",
  greet: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

obj.greet(); // "Tanish"
```

**Why it works:**

* Arrow function does NOT create `this`
* It takes `this` from `greet`
* `greet`’s `this` = `obj`

---

#### 5. Own `arguments` — what does that mean?

##### Normal Function

```js
function sum() {
  console.log(arguments);
}

sum(1, 2, 3);
```

Output:

```
[1, 2, 3]
```

**Why?**

* Normal functions create an **`arguments` object**
* It contains all passed parameters

---

##### Arrow Function

```js
const sum = () => {
  console.log(arguments);
};

sum(1, 2, 3);
```

Output:

```
ReferenceError: arguments is not defined
```

**Why?**

* Arrow functions **do NOT have their own `arguments`**
* They do NOT create this object

---

##### How arrows handle arguments then?

Use **rest parameters**:

```js
const sum = (...args) => {
  console.log(args);
};

sum(1, 2, 3);
```

Output:

```
[1, 2, 3]
```

---

#### 6. “Own this” in one line (INTERVIEW GOLD)

> Normal functions **create** `this` and `arguments`.
> Arrow functions **inherit** `this` and **do not create** `arguments`.

---

#### 7. When to use what (very practical)

### Use **Normal Function** when:

* You need dynamic `this`
* You are writing object methods meant to be called with `.call`, `.apply`, `.bind`
* Constructor functions

###### Use **Arrow Function** when:

* You want `this` from outer scope
* Callbacks (`map`, `filter`, `setTimeout`)
* You want predictable behavior

---

#### 8. Common interview trap

```js
const obj = {
  name: "JS",
  greet: () => {
    console.log(this.name);
  }
};

obj.greet(); // undefined
```

**Why?**

* Arrow function does NOT get `this` from `obj`
* It takes `this` from outer scope (global)
* So `this.name` is undefined

---

#### Final mental model (remember this)

```
Normal function  → creates its own this & arguments
Arrow function   → borrows this, no arguments
```
---

## 3. Basic Syntax — How Arrow Functions Are Written

### Traditional vs Arrow (structure comparison)

```js
// Traditional function
function add(a, b) {
  return a + b;
}
```

This has:

- `function` keyword
- Own `this`
- Own `arguments`
- Can be used as constructor

---

```js
// Arrow function
const add = (a, b) => {
  return a + b;
};
```

What changed:

- No `function` keyword
- `=>` separates parameters and body
- Stored in a variable

---

### Implicit Return (core arrow feature)

```js
// Shorter arrow function (implicit return)
const add = (a, b) => a + b;
```

**How this works internally**

- Single expression
- Value of expression is returned automatically
- No `{}` and no `return`

Rule:

- `{}` → you must write `return`
- No `{}` → implicit return

---

### Single Parameter

```js
const square = (x) => x * x;
const square = (x) => x * x; // Both are valid
```

Explanation:

- Parentheses optional for **one parameter**
- Optional, not mandatory
- Use parentheses for readability in teams

---

### No Parameters

```js
const greet = () => "Hello!";
const getCurrentTime = () => new Date();
```

Explanation:

- Empty parentheses are mandatory
- Still returns values normally

---

## 4. Different Arrow Function Forms (structure variations)

### Multiple lines (explicit return)

```js
const processUser = (user) => {
  const name = user.name.toUpperCase();
  const age = user.age;
  return `${name} is ${age} years old`;
};
```

Why explicit return here:

- Multiple statements
- Intermediate variables
- Clear step-by-step logic

---

### Single-expression utilities

```js
const double = (x) => x * 2;
const isEven = (num) => num % 2 === 0;
const getFullName = (first, last) => `${first} ${last}`;
```

These are:

- Pure functions
- Predictable
- Easy to test

---

### Returning Objects (common confusion)

```js
const createUser = (name, age) => ({
  name: name,
  age: age,
  id: Math.random(),
});
```

**Why parentheses are required**

- `{}` is ambiguous
- JS thinks `{}` is a function body
- `()` forces it to be treated as an object literal

---

### Arrow Functions with Array Methods

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((x) => x * 2);
const evens = numbers.filter((x) => x % 2 === 0);
const sum = numbers.reduce((acc, x) => acc + x, 0);
```

Mental model:

- Each arrow function is passed as a **callback**
- Array controls execution
- Arrow defines transformation logic

---

## 5. Arrow Functions vs Regular Functions (critical differences)

### 1. `this` Binding (most important)

```js
const obj = {
  name: "John",

  // Regular function - 'this' refers to obj
  regularMethod: function () {
    console.log("Regular:", this.name); // "John"
  },

  // Arrow function - 'this' refers to outer scope
  arrowMethod: () => {
    console.log("Arrow:", this.name); // undefined (or global)
  },
};
```

**Mental model**

- Regular function → `this` decided at call-time
- Arrow function → `this` copied from surrounding scope

Arrow functions **do not have their own `this`**.

---

### 2. Cannot Be Used as Constructors

```js
const RegularFunction = function (name) {
  this.name = name;
};
const person1 = new RegularFunction("Alice"); // Works
```

---

```js
const ArrowFunction = (name) => {
  this.name = name;
};
// const person2 = new ArrowFunction("Bob"); // Error!
```

Why:

- Arrow functions do not have:

  - `this`
  - `prototype`

- `new` keyword requires both

---

### 3. No `arguments` Object

```js
function regularFunc() {
  console.log(arguments); // Works
}
```

---

```js
const arrowFunc = () => {
  // console.log(arguments); // Error!
  // Use rest parameters instead
};
```

Correct approach:

```js
const arrowWithRest = (...args) => {
  console.log(args); // Works
};
```

---

## 6. Practical Real-World Examples

### Array processing (very common)

```js
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 35, active: true },
];
```

---

```js
const activeUsers = users.filter((user) => user.active);
```

---

```js
const userNames = users.map((user) => user.name);
```

---

```js
const findUser = (name) => users.find((user) => user.name === name);
```

---

```js
const sortedByAge = users.sort((a, b) => a.age - b.age);
```

---

### Event handlers

```js
const button = document.querySelector("#myButton");
button?.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

Arrow works here because:

- `this` is not required
- Simple callback

---

### Async functions with arrow syntax

```js
const fetchUser = async (id) => {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
};
```

Arrow functions work seamlessly with `async/await`.

---

### Utility helpers

```js
const isEmpty = (arr) => arr.length === 0;
const isValidEmail = (email) => email.includes("@");
const formatPrice = (price) => `$${price.toFixed(2)}`;
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
```

These are:

- Stateless
- Predictable
- Ideal arrow function use cases

---

## 7. When to Use Arrow Functions (decision guide)

### Good use cases

```js
const doubled = numbers.map((n) => n * 2);
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

```js
const add = (a, b) => a + b;
const isPositive = (x) => x > 0;
```

```js
setTimeout(() => console.log("Timer finished"), 1000);
```

---

### When NOT to use arrow functions

#### Object methods

```js
const user = {
  name: "John",
  greet: () => console.log(`Hello, ${this.name}`),
};
```

Problem:

- `this` does not refer to `user`

Correct approach:

```js
const user = {
  name: "John",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};
```

---

#### Event handlers needing `this`

```js
button.addEventListener("click", () => {
  // 'this' doesn't refer to the button
});
```

Correct:

```js
button.addEventListener("click", function () {
  // 'this' refers to the button
});
```

---

## 8. Advanced Arrow Function Patterns

### Immediately Invoked Arrow Function

```js
const result = ((x, y) => x + y)(5, 3); // 8
```

Mental model:

- Function defined
- Immediately executed
- No name pollution

---

### Chaining with arrows

```js
const processData = (data) =>
  data
    .filter((item) => item.active)
    .map((item) => ({ ...item, processed: true }))
    .sort((a, b) => a.name.localeCompare(b.name));
```

Arrow functions make chaining readable and expressive.

---

### Conditional logic

```js
const getStatus = (user) => (user.isActive ? "online" : "offline");
```

```js
const getDiscount = (user) => (user.isPremium ? 0.2 : user.isRegular ? 0.1 : 0);
```

---

### Destructuring with arrows

```js
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
```

```js
const calculateTotal = ({ price, quantity, tax = 0.1 }) =>
  price * quantity * (1 + tax);
```

---

### Currying (function returning function)

```js
const multiply = (a) => (b) => a * b;
const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12
```

Mental model:

- First function fixes context
- Second function completes computation
- Builds reusable logic

---

## Final Mental Summary

- Arrow functions are **expression-first functions**
- They simplify callbacks and utilities
- They inherit `this` from surrounding scope
- They are **not** drop-in replacements for all functions

Rule of thumb:

- Logic-heavy, stateful, object-based → regular function
- Small, inline, functional → arrow function

---