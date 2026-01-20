# JavaScript Interview Questions and Answers

---

**Topic : JavaScript Functions and Higher-Order Functions**

---

## 11. What is a higher-order function in JavaScript?

---

### 1. Concept

A **higher-order function** is a function that **does at least one of the following**:

1. **Takes one or more functions as arguments**, or
2. **Returns a function as its result**

In short:

> **Functions that operate on other functions are called higher-order functions.**

This is possible because **functions are first-class citizens** in JavaScript.

---

### 2. Why Higher-Order Functions Exist

JavaScript allows:

* Functions to be stored in variables
* Functions to be passed as arguments
* Functions to be returned from other functions

This enables:

* Reusability
* Cleaner code
* Functional programming patterns

---

### 3. Function as an Argument (Basic Example)

```javascript
function greet(name) {
  return `Hello ${name}`;
}

function processUser(callback) {
  return callback("Tanish");
}

console.log(processUser(greet)); // Hello Tanish
```

Explanation:

* `processUser` receives `greet` as an argument
* `greet` is executed inside `processUser`
* `processUser` is a **higher-order function**

---

### 4. Function Returning Another Function

```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

Explanation:

* `multiplier` returns a function
* Returned function remembers `factor` (closure)
* `multiplier` is a higher-order function

---

### 5. Built-in Higher-Order Functions (Very Important)

JavaScript provides many built-in HOFs, especially for arrays.

#### `map`

```javascript
const nums = [1, 2, 3];
const squared = nums.map(n => n * n);

console.log(squared); // [1, 4, 9]
```

#### `filter`

```javascript
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);

console.log(even); // [2, 4]
```

#### `reduce`

```javascript
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10
```

All of these:

* Accept functions as arguments
* Are higher-order functions

---

### 6. Real-World Use Cases

1. Event handling (`addEventListener`)
2. Array transformations (`map`, `filter`, `reduce`)
3. Middleware (Express.js)
4. Debouncing and throttling
5. Functional utilities (compose, pipe)

Example (event handler):

```javascript
button.addEventListener("click", function () {
  console.log("Clicked");
});
```

`addEventListener` is a higher-order function.

---

### 7. Higher-Order Functions vs Regular Functions

| Aspect            | Regular Function | Higher-Order Function |
| ----------------- | ---------------- | --------------------- |
| Accepts function  | No               | Yes                   |
| Returns function  | No               | Yes                   |
| Abstraction level | Low              | High                  |
| Reusability       | Limited          | High                  |

---

### 8. Common Interview Trap

```javascript
setTimeout(console.log("Hello"), 1000);
```

This is **wrong**.

Correct version:

```javascript
setTimeout(() => console.log("Hello"), 1000);
```

Why?

* `setTimeout` expects a **function reference**
* Not the result of a function call

---

### 9. Interview-Ready Summary

A higher-order function in JavaScript is a function that either takes other functions as arguments or returns a function. This is possible because functions are treated as first-class citizens. Higher-order functions are widely used in array methods like `map`, `filter`, and `reduce`, as well as in event handling and functional programming patterns, making code more reusable and expressive.


*first-class*

What does “first-class citizens” mean?

In JavaScript, functions are values, just like:
* numbers
* strings
* objects

That means a function can:
* Be stored in a variable
* Be passed as an argument to another function
* Be returned from a function
* Be stored in arrays or objects
---

### 10. Quick Practice Interview Questions

1. What is a higher-order function?
2. Why are functions called first-class citizens?
3. Is `map` a higher-order function? Why?
4. Difference between callback and higher-order function?
5. Give real-world examples of higher-order functions.
6. How does `reduce` work internally?
7. Where are higher-order functions used in frameworks?

---

## 12. Can functions be assigned as values to variables in JavaScript?

---

### 1. Concept

Yes, **functions can be assigned to variables** in JavaScript.

This is possible because **functions are first-class citizens**, which means:

* They can be stored in variables
* Passed as arguments
* Returned from other functions

When a function is assigned to a variable, it is called a **function expression**.

---

### 2. Function Assigned to a Variable (Basic Example)

```javascript
const greet = function () {
  return "Hello";
};

console.log(greet()); // Hello
```

Explanation:

* Function has **no name** (anonymous function)
* Variable `greet` holds the function reference
* Function is invoked using `greet()`

---

### 3. Named Function Expression

```javascript
const greet = function sayHello() {
  return "Hello";
};

console.log(greet());    // Hello
// sayHello(); ❌ ReferenceError
```

Key point:

* Function name is **not available outside**
* Useful for debugging stack traces

---

### 4. Arrow Function Assigned to Variable

```javascript
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
```

Arrow functions are commonly stored in variables.

---

### 5. Why Assign Functions to Variables?

1. Pass functions as arguments
2. Return functions from other functions
3. Store different behaviors dynamically
4. Implement callbacks and HOFs

Example:

```javascript
function execute(fn) {
  return fn();
}

const sayHi = () => "Hi";

console.log(execute(sayHi)); // Hi
```

---

### 6. Function Expressions vs Function Declarations

| Aspect                | Function Declaration | Function Expression         |
| --------------------- | -------------------- | --------------------------- |
| Syntax                | `function test(){}`  | `const test = function(){}` |
| Hoisting              | Fully hoisted        | Not hoisted                 |
| Use before definition | Yes                  | No                          |
| Common usage          | General functions    | Callbacks, assignments      |

---

### 7. Common Interview Trap (Hoisting)

```javascript
sayHello(); // TypeError

var sayHello = function () {
  console.log("Hello");
};
```

Reason:

* `var sayHello` is hoisted as `undefined`
* `undefined()` causes TypeError

---

### 8. Real-World Example

```javascript
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

console.log(operations.add(5, 3)); // 8
```

Functions stored as object values.

---

### 9. Interview-Ready Summary

In JavaScript, functions can be assigned to variables because they are first-class citizens. When assigned to variables, they are called function expressions. This allows functions to be passed as arguments, returned from other functions, and used dynamically, which is essential for callbacks, higher-order functions, and modern JavaScript patterns.

---

### 10. Quick Practice Interview Questions

1. What does it mean that functions are first-class citizens?
2. Difference between function declaration and function expression?
3. Are function expressions hoisted?
4. Can arrow functions be assigned to variables?
5. Why are functions often stored in variables?
6. What happens if you call a function expression before definition?
7. What is a named function expression?

---

## 13. How do functional programming concepts apply in JavaScript?

---

### 1. Concept

JavaScript is a **multi-paradigm language**, and one of its strongest paradigms is **Functional Programming (FP)**.

Functional programming in JavaScript focuses on:

* Treating functions as **first-class citizens**
* Writing **predictable and reusable** code
* Avoiding shared mutable state

JavaScript does **not enforce** FP, but **supports FP concepts very well**.

---

### 2. Core Functional Programming Concepts in JavaScript

The main FP concepts used in JavaScript are:

1. First-class functions
2. Pure functions
3. Immutability
4. Higher-order functions
5. Function composition

---

### 3. First-Class Functions

Functions can be:

* Assigned to variables
* Passed as arguments
* Returned from functions

```javascript
const greet = name => `Hello ${name}`;

function execute(fn) {
  return fn("Tanish");
}

console.log(execute(greet)); // Hello Tanish
```

This enables functional patterns.

---

### 4. Pure Functions

A **pure function**:

* Always returns the **same output** for the same input
* Does **not modify external state**
* Has **no side effects**

```javascript
function add(a, b) {
  return a + b;
}
```

Impure function example:

```javascript
let total = 0;

function addToTotal(x) {
  total += x; // side effect
}
```

Pure functions are:

* Easier to test
* Easier to debug
* Safer to reuse

---

### 5. Immutability

Immutability means:

> Do not modify existing data, create new data instead.

```javascript
const nums = [1, 2, 3];

const newNums = [...nums, 4];

console.log(nums);     // [1, 2, 3]
console.log(newNums);  // [1, 2, 3, 4]
```

This avoids unexpected bugs.

---

### 6. Higher-Order Functions

Functions that:

* Take functions as arguments
* Return functions

Common built-in examples:

```javascript
const nums = [1, 2, 3, 4];

nums.map(n => n * 2);
nums.filter(n => n % 2 === 0);
nums.reduce((sum, n) => sum + n, 0);
```

These replace traditional loops with **declarative code**.

---

### 7. Function Composition

Combining small functions to build bigger ones.

```javascript
const double = x => x * 2;
const square = x => x * x;

const doubleThenSquare = x => square(double(x));

console.log(doubleThenSquare(3)); // 36
```

This improves readability and reuse.

---

### 8. Declarative vs Imperative Style

#### Imperative (How to do)

```javascript
let result = [];
for (let i = 0; i < nums.length; i++) {
  result.push(nums[i] * 2);
}
```

#### Declarative (What to do)

```javascript
const result = nums.map(n => n * 2);
```

Functional programming prefers **declarative style**.

---

### 9. Real-World Usage in JavaScript

Functional programming concepts are heavily used in:

* React (components as pure functions)
* Redux (pure reducers, immutability)
* Array processing
* Middleware pipelines

---

### 10. Interview-Ready Summary

Functional programming in JavaScript is achieved through first-class functions, pure functions, immutability, higher-order functions, and function composition. JavaScript supports functional programming naturally, allowing developers to write predictable, reusable, and maintainable code without enforcing a strict functional paradigm.

---

### 11. Quick Practice Interview Questions

1. What is functional programming?
2. What is a pure function?
3. Why is immutability important?
4. How does `map` support functional programming?
5. Difference between imperative and declarative code?
6. Can JavaScript be purely functional?
7. Where is FP used in real projects?

---
## 14. What are IIFEs (Immediately Invoked Function Expressions)?

---

### 1. Concept

An **IIFE** is a function that is **defined and executed immediately** after its creation.

In simple terms:

> **Write a function and call it immediately.**

IIFEs were heavily used **before ES6** to:

* Create **private scope**
* Avoid **global variable pollution**

---

### 2. Basic IIFE Syntax

```javascript
(function () {
  console.log("IIFE executed");
})();
```

Breakdown:

* Function is wrapped in parentheses → converts it to an expression
* `()` at the end immediately invokes it

---

### 3. Arrow Function IIFE

```javascript
(() => {
  console.log("Arrow IIFE");
})();
```

---

### 4. Why Parentheses Are Needed

This will **not work**:

```javascript
function test() {
  console.log("Hello");
}();
```

Reason:

* JavaScript treats it as a **function declaration**
* Declarations cannot be invoked immediately

Parentheses force JavaScript to treat it as an **expression**.

---

### 5. IIFE with Parameters

```javascript
(function (name) {
  console.log(`Hello ${name}`);
})("Tanish");
```

---

### 6. Creating Private Variables (Major Use Case)

```javascript
const counter = (function () {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    }
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
```

Here:

* `count` is private
* Only accessible through returned methods

---

### 7. IIFE vs Block Scope (`let` / `const`)

Before ES6:

```javascript
(function () {
  var secret = "hidden";
})();
```

After ES6:

```javascript
{
  let secret = "hidden";
}
```

Modern JavaScript prefers **block scope**, but IIFEs are still relevant.

---

### 8. Common Interview Traps

```javascript
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
```

Why this works:

* Each iteration creates a new scope
* `i` is captured separately

---

### 9. Where IIFEs Are Still Used

1. Module patterns
2. Legacy codebases
3. Library initialization
4. Avoiding global scope pollution
5. One-time setup logic

---

### 10. Interview-Ready Summary

An IIFE is a function expression that executes immediately after it is defined. It is used to create a private scope, avoid polluting the global namespace, and encapsulate logic. Although ES6 block scope with `let` and `const` reduced the need for IIFEs, they are still useful in module patterns and legacy JavaScript.

---

### 11. Quick Practice Interview Questions

1. What does IIFE stand for?
2. Why are parentheses required in IIFE?
3. What problem do IIFEs solve?
4. Difference between IIFE and block scope?
5. Can arrow functions be used as IIFEs?
6. Are IIFEs hoisted?
7. Where are IIFEs used today?

---

## 15. How do you create private variables in JavaScript?

---

### 1. Concept

**Private variables** are variables that **cannot be accessed directly from outside** a function, object, or module.

JavaScript does **not have traditional access modifiers** like `private` (classical OOP), but privacy is achieved using:

1. **Closures**
2. **IIFEs**
3. **Block scope (`let`, `const`)**
4. **Modules (ES6)**
5. **Private class fields (`#`)** (modern JS)

Interviewers mainly expect **closure-based explanation first**.

---

### 2. Creating Private Variables Using Closures (Most Important)

Closures are the **classic and most asked** way.

```javascript
function createCounter() {
  let count = 0; // private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    }
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.count);       // undefined ❌
```

Explanation:

* `count` is inside `createCounter`
* Only inner functions can access it
* Outside code **cannot access `count` directly**

This works because of **closures**.

---

### 3. Private Variables Using IIFE

Before ES6, IIFEs were commonly used.

```javascript
const counter = (function () {
  let count = 0; // private

  return {
    increment() {
      return ++count;
    }
  };
})();

console.log(counter.increment()); // 1
console.log(counter.count);       // undefined
```

Here:

* IIFE runs once
* Creates a private scope
* Returns public methods only

---

### 4. Private Variables Using Block Scope (`let`, `const`)

```javascript
{
  let secret = "hidden";
}

// console.log(secret); // ReferenceError
```

Limitation:

* Useful only for **small scopes**
* Not useful for object-level privacy

---

### 5. Private Variables Using ES6 Modules

In modules, **everything is private by default** unless exported.

```javascript
// counter.js
let count = 0;

export function increment() {
  count++;
  return count;
}
```

```javascript
// main.js
import { increment } from "./counter.js";

console.log(increment()); // 1
// console.log(count); ❌ not accessible
```

This is **modern and recommended** for real applications.

---

### 6. Private Class Fields (`#`) – Modern JavaScript

Introduced in newer ECMAScript versions.

```javascript
class User {
  #password; // private field

  constructor(password) {
    this.#password = password;
  }

  checkPassword(input) {
    return input === this.#password;
  }
}

const user = new User("secret");

console.log(user.checkPassword("secret")); // true
// console.log(user.#password); ❌ SyntaxError
```

Key points:

* `#` makes fields truly private
* Cannot be accessed outside the class
* Supported in modern browsers

---

### 7. Comparison Table (Interview Friendly)

| Method             | Privacy Level | Common Usage    |
| ------------------ | ------------- | --------------- |
| Closure            | High          | Very common     |
| IIFE               | High          | Legacy code     |
| Block scope        | Low           | Small scopes    |
| ES6 Modules        | Very High     | Modern apps     |
| `#` private fields | Very High     | Class-based OOP |

---

### 8. When to Use Which?

* **Interview explanation** → Closures
* **Modern applications** → ES6 Modules / `#` fields
* **Legacy patterns** → IIFE
* **Simple scoping** → `let` / `const`

---

### 9. Interview-Ready Summary

Private variables in JavaScript are created using closures, IIFEs, block scope, modules, or private class fields. Closures are the most commonly discussed approach, where inner functions retain access to variables in their lexical scope while preventing external access. Modern JavaScript prefers ES6 modules and `#` private fields for strong encapsulation.

---

### 10. Quick Practice Interview Questions

1. How do closures enable private variables?
2. Why were IIFEs used before ES6?
3. Are variables private by default in ES6 modules?
4. Difference between closure-based privacy and `#` fields?
5. Can private variables cause memory issues?
6. Which approach is best for modern apps?
7. Why can’t private variables be accessed directly?

---
