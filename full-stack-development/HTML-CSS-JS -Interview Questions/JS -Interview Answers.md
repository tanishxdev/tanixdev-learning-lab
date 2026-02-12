## Q1. What are the data types present in JavaScript?

### Concept

JavaScript has **two broad categories of data types**:

1. **Primitive (value types)**
   These store **actual values** and are **immutable** (cannot be changed in place).
   - `number` → integers and floating point numbers
   - `string` → text
   - `boolean` → true / false
   - `undefined` → declared but not assigned
   - `null` → intentional empty value
   - `symbol` → unique identifiers (ES6)
   - `bigint` → very large integers

2. **Non-Primitive (reference types)**
   These store **references (memory address)**.
   - `object`
   - `array`
   - `function`

Key difference:
Primitive → copied by value
Non-primitive → copied by reference

---

### Example 1: Primitive types

```js
let a = 10; // number
let b = "JS"; // string
let c = true; // boolean
let d; // undefined
let e = null; // null
let f = Symbol("id");
let g = 12345678901234567890n; // bigint
```

---

### Example 2: Non-primitive types

```js
let obj = { name: "Tanish" }; // object
let arr = [1, 2, 3]; // array
let fn = function () {}; // function
```

---

### Example 3: Value vs Reference behavior

```js
let x = 10;
let y = x;
y = 20;
// x remains 10

let obj1 = { a: 1 };
let obj2 = obj1;
obj2.a = 2;
// obj1.a also becomes 2
```

---

### Interview-specific answer

JavaScript has **7 primitive data types** (`number`, `string`, `boolean`, `undefined`, `null`, `symbol`, `bigint`) and **non-primitive types** like `object`, `array`, and `function`.
Primitive types store values directly, while non-primitive types store references in memory.

## Q2. What is the difference between `null` and `undefined`?

### Concept

Both `null` and `undefined` represent **absence of value**, but **why they exist and how they are assigned is different**.

- **`undefined`**
  - Means: _variable is declared but not assigned_
  - JS assigns it automatically
  - Default value

- **`null`**
  - Means: _intentional empty value_
  - Developer assigns it explicitly
  - Represents “nothing” on purpose

---

### Example 1: `undefined`

```js
let a;
console.log(a); // undefined
```

Reason: variable is declared but no value is assigned.

---

### Example 2: `null`

```js
let b = null;
console.log(b); // null
```

Reason: developer explicitly says “no value”.

---

### Example 3: Type behavior

```js
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"  (JS bug, legacy)
```

Important note:
`typeof null === "object"` is a **known JavaScript bug**, kept for backward compatibility.

---

### Comparison Table (Mental Model)

| Aspect      | undefined          | null                |
| ----------- | ------------------ | ------------------- |
| Assigned by | JavaScript         | Developer           |
| Meaning     | Value not assigned | Intentional empty   |
| typeof      | undefined          | object              |
| Use case    | Missing value      | Reset / clear value |

---

### Interview-specific answer

`undefined` means a variable is declared but not assigned any value, while `null` is an explicitly assigned value representing intentional absence of data.

## Q3. How does JavaScript handle type coercion?

### Concept

Type coercion is the **automatic or implicit conversion of one data type into another** when JavaScript performs operations.

JavaScript is a **loosely typed language**, so it converts values when needed.

There are **two types of coercion**:

1. **Implicit coercion** – done automatically by JS
2. **Explicit coercion** – done manually by developer

---

### Example 1: Implicit coercion (String)

```js
console.log(5 + "5"); // "55"
```

Reason:
`+` operator prefers string → number `5` is converted to `"5"`

---

### Example 2: Implicit coercion (Number)

```js
console.log("10" - 2); // 8
console.log("10" * 2); // 20
```

Reason:
`-` and `*` force string to number

---

### Example 3: Boolean coercion

```js
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("JS")); // true
console.log(Boolean(1)); // true
```

Falsy values:
`0`, `""`, `null`, `undefined`, `NaN`, `false`

---

### Explicit coercion

```js
Number("10"); // 10
String(100); // "100"
Boolean(1); // true
```

---

### Interview-specific answer

JavaScript handles type coercion by automatically converting values between types during operations. This can be implicit (done by JS) or explicit (done by the developer), which is why `==` behaves differently from `===`.

## Q4. Explain the concept of hoisting in JavaScript.

### Concept

Hoisting is JavaScript’s behavior where **variable and function declarations are moved to the top of their scope during the compilation phase**, before code execution.

Important:

- **Only declarations are hoisted**
- **Initializations are NOT hoisted**

Hoisting depends on **how variables are declared**.

---

### Example 1: `var` hoisting

```js
console.log(a); // undefined
var a = 10;
```

What happens internally:

```js
var a;
console.log(a);
a = 10;
```

Reason:

- `var a` is hoisted
- Value assignment happens later
- Default value is `undefined`

---

### Example 2: `let` and `const`

```js
console.log(b); // ReferenceError
let b = 20;
```

Reason:

- `let` and `const` are hoisted
- But kept in **Temporal Dead Zone (TDZ)**
- Accessing before declaration throws error

---

### Example 3: Function hoisting

```js
sayHello();

function sayHello() {
  console.log("Hello");
}
```

Reason:

- Function declarations are **fully hoisted**
- Both name and body are available

---

### Example 4: Function expression

```js
sayHi(); // TypeError

var sayHi = function () {
  console.log("Hi");
};
```

Reason:

- `sayHi` is hoisted as `undefined`
- Function body is not hoisted

---

### Interview-specific answer

Hoisting is JavaScript’s behavior of moving declarations to the top of their scope before execution. `var` variables are hoisted with `undefined`, `let` and `const` are hoisted but stay in the Temporal Dead Zone, and function declarations are fully hoisted.

## Q4.1 What is the Temporal Dead Zone (TDZ) in JavaScript?

### Concept

Temporal Dead Zone (TDZ) is the **time between variable hoisting and its actual declaration** where the variable **cannot be accessed**.

TDZ applies to:

- `let`
- `const`

During TDZ:

- Variable exists in memory
- But **accessing it throws ReferenceError**

Purpose:

- Prevent usage before declaration
- Avoid bugs caused by `var`

---

### Example 1: TDZ with `let`

```js
console.log(a); // ReferenceError
let a = 10;
```

Explanation:

- `a` is hoisted
- But remains in TDZ until line `let a = 10`

---

### Example 2: TDZ start and end

```js
{
  // TDZ starts here
  let x = 5; // TDZ ends here
  console.log(x); // 5
}
```

TDZ range:

- From start of scope
- Until variable declaration line is executed

---

### Example 3: `const` and TDZ

```js
console.log(b); // ReferenceError
const b = 20;
```

Reason:

- `const` must be initialized at declaration
- TDZ strictly enforced

---

### Common mistake

```js
typeof c; // ReferenceError
let c = 10;
```

Note:

- `typeof` does NOT bypass TDZ

---

### Interview-specific answer

The Temporal Dead Zone is the phase where `let` and `const` variables exist in memory but cannot be accessed before their declaration. Accessing them during TDZ throws a ReferenceError, ensuring safer variable usage.

## Q5. What is scope in JavaScript?

### Concept

Scope defines **where a variable can be accessed** in a program.

JavaScript uses **lexical scoping**, meaning scope is determined by **where variables are written in the code**, not how functions are called.

There are **three main types of scope**:

1. **Global Scope**
2. **Function Scope**
3. **Block Scope**

---

### Example 1: Global scope

```js
let x = 10;

function test() {
  console.log(x);
}

test(); // 10
```

Reason:

- `x` is accessible everywhere

---

### Example 2: Function scope

```js
function demo() {
  let a = 5;
  console.log(a);
}

demo();
// console.log(a); // ReferenceError
```

Reason:

- `a` exists only inside the function

---

### Example 3: Block scope (`let` / `const`)

```js
if (true) {
  let b = 20;
  const c = 30;
}

// console.log(b); // ReferenceError
// console.log(c); // ReferenceError
```

Block scope applies only to `let` and `const`.

---

### Example 4: `var` and scope

```js
if (true) {
  var d = 40;
}

console.log(d); // 40
```

Reason:

- `var` is function-scoped, not block-scoped

---

### Interview-specific answer

Scope in JavaScript determines the accessibility of variables. JavaScript follows lexical scoping and supports global scope, function scope, and block scope. Variables declared with `let` and `const` are block-scoped, while `var` is function-scoped.

## Q6. What is the difference between `==` and `===` in JavaScript?

### Concept

The difference between `==` and `===` is **type coercion**.

- **`==` (loose equality)**
  - Compares **values only**
  - Performs **type coercion** if types are different

- **`===` (strict equality)**
  - Compares **value + type**
  - **No type coercion**

---

### Example 1: `==` behavior

```js
console.log(5 == "5"); // true
console.log(true == 1); // true
console.log(null == undefined); // true
```

Reason:

- JavaScript converts types before comparison

---

### Example 2: `===` behavior

```js
console.log(5 === "5"); // false
console.log(true === 1); // false
```

Reason:

- Types are different → comparison fails

---

### Example 3: Edge case

```js
console.log(null === undefined); // false
console.log(null == undefined); // true
```

---

### Best practice

Always prefer `===` to avoid unexpected bugs caused by coercion.

---

### Interview-specific answer

`==` compares values after type coercion, while `===` compares both value and type without coercion. Using `===` is recommended for safer and predictable comparisons.

## Q7. Describe closure in JavaScript. Can you give an example?

### Concept

A **closure** is created when a function **remembers variables from its lexical scope**, even after the outer function has finished execution.

In simple words:
Inner function + outer function’s variables = **closure**

Closures exist because JavaScript uses **lexical scoping**.

---

### Example 1: Basic closure

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer();
fn(); // 1
fn(); // 2
```

Reason:

- `inner()` remembers `count`
- `outer()` is already finished
- `count` stays in memory

---

### Example 2: Data privacy

```js
function createCounter() {
  let value = 0;

  return function () {
    return ++value;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```

Reason:

- `value` cannot be accessed directly
- Closure protects internal state

---

### Example 3: Common mistake with `var`

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Output: 3 3 3
```

Reason:

- All callbacks share the same `i` due to closure

---

### Interview-specific answer

A closure is a function that remembers variables from its outer lexical scope even after the outer function has executed. Closures are commonly used for data hiding, state management, and callbacks.

## Q7.1 What is a callback function in JavaScript?

### Concept

A **callback function** is a function that is **passed as an argument to another function** and is **executed later**, usually after some operation is completed.

_A callback is just “give this function to someone else and let them decide when to run it.”_
JavaScript uses callbacks heavily because it is:

- Single-threaded
- Event-driven
- Asynchronous by nature

Callbacks help handle:

- Async operations
- Events
- Timers

---

### Example 1: Simple callback

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function done() {
  console.log("Done");
}

greet("Tanish", done);
```

Flow:

- `done` is passed
- `greet` decides when to call it

---

### Example 2: Asynchronous callback

```js
setTimeout(function () {
  console.log("Executed later");
}, 1000);
```

Reason:

- Function executes after delay
- Callback is queued and run later

---

### Example 3: Callback in array method

```js
[1, 2, 3].map(function (num) {
  return num * 2;
});
```

Reason:

- Function is called for each element

---

### Interview-specific answer

A callback is a function passed as an argument to another function and executed later. Callbacks are commonly used in asynchronous operations, event handling, and higher-order functions in JavaScript.

## Q8. What is the `this` keyword in JavaScript and how does its context change?

### Concept

`this` refers to **the object that is currently calling the function**.
Its value is **not fixed** and is determined **at runtime**, based on **how the function is called**, not where it is written.

---

### Example 1: Global context

```js
console.log(this);
```

In browser:

- `this` → `window`

---

### Example 2: Object method

```js
const user = {
  name: "Tanish",
  greet() {
    console.log(this.name);
  },
};

user.greet(); // Tanish
```

Reason:

- Function is called using `user`
- `this` → `user`

---

### Example 3: Regular function

```js
function show() {
  console.log(this);
}

show();
```

In non-strict mode:

- `this` → `window`

In strict mode:

- `this` → `undefined`

---

### Example 4: Arrow function

```js
const obj = {
  name: "JS",
  greet: () => {
    console.log(this.name);
  },
};

obj.greet(); // undefined
```

Reason:

- Arrow functions **do not have their own `this`**
- They inherit `this` from outer scope

---

### Example 5: `call`, `apply`, `bind`

```js
function sayHello() {
  console.log(this.name);
}

const person = { name: "Tanish" };

sayHello.call(person); // Tanish
```

Reason:

- `this` is explicitly set

---

### Interview-specific answer

The `this` keyword refers to the object that invokes the function. Its value depends on how the function is called. In arrow functions, `this` is lexically bound, while in regular functions it is dynamic and can be controlled using `call`, `apply`, or `bind`.

## Q8.1 What are `call`, `apply`, and `bind` in JavaScript?

### Concept

`call`, `apply`, and `bind` are used to **manually control the value of `this`** while calling a function.

They do **not change the function definition**, only how it is executed.

---

### `call()`

- Invokes the function **immediately**
- Arguments passed **one by one**

```js
function greet(city, country) {
  console.log(this.name + " from " + city + ", " + country);
}

const user = { name: "Tanish" };

greet.call(user, "Delhi", "India");
```

---

### `apply()`

- Invokes the function **immediately**
- Arguments passed as an **array**

```js
greet.apply(user, ["Delhi", "India"]);
```

---

### `bind()`

- **Does not execute immediately**
- Returns a **new function** with fixed `this`

```js
const boundGreet = greet.bind(user, "Delhi", "India");
boundGreet();
```

---

### Key differences

| Method | Executes immediately | Arguments       | Returns  |
| ------ | -------------------- | --------------- | -------- |
| call   | Yes                  | comma-separated | result   |
| apply  | Yes                  | array           | result   |
| bind   | No                   | comma-separated | function |

---

### Interview-specific answer

`call` and `apply` invoke a function immediately with a specified `this`, differing only in how arguments are passed. `bind` returns a new function with a permanently bound `this`, useful for callbacks and event handlers.

## Q9. What are arrow functions and how do they differ from regular functions?

### Concept

Arrow functions are a **shorter syntax for writing functions** introduced in ES6.
They also behave differently from regular functions in terms of `this`, `arguments`, and construction.

---

### Example 1: Syntax difference

```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;
```

---

### Example 2: `this` behavior

```js
const obj = {
  value: 10,
  regular() {
    console.log(this.value);
  },
  arrow: () => {
    console.log(this.value);
  },
};

obj.regular(); // 10
obj.arrow(); // undefined
```

Reason:

- Regular function → `this` depends on caller
- Arrow function → inherits `this` from outer scope

---

### Example 3: No `arguments` object

```js
function normal() {
  console.log(arguments);
}

const arrowFn = () => {
  // console.log(arguments); // ReferenceError
};
```

---

### Key differences

| Feature     | Regular Function | Arrow Function |
| ----------- | ---------------- | -------------- |
| Syntax      | Verbose          | Short          |
| `this`      | Dynamic          | Lexical        |
| `arguments` | Available        | Not available  |
| Constructor | Yes              | No             |

---

### Interview-specific answer

Arrow functions provide a concise syntax and lexically bind `this` from their surrounding scope. Unlike regular functions, they do not have their own `this`, `arguments`, or constructor behavior, making them ideal for callbacks but not for object methods or constructors.

## Q9.1 Types of functions in JavaScript

### Concept

JavaScript supports **multiple types of functions**, each used for a specific purpose based on syntax and behavior.

---

### 1. Function Declaration

- Hoisted fully
- Can be called before definition

```js
function add(a, b) {
  return a + b;
}
```

---

### 2. Function Expression

- Assigned to a variable
- Not hoisted with value

```js
const subtract = function (a, b) {
  return a - b;
};
```

---

### 3. Arrow Function

- Short syntax
- Lexical `this`

```js
const multiply = (a, b) => a * b;
```

---

### 4. Anonymous Function

- Function without a name
- Used as callbacks

```js
setTimeout(function () {
  console.log("Hello");
}, 1000);
```

---

### 5. Named Function Expression

- Has a name inside expression
- Useful for debugging

```js
const divide = function div(a, b) {
  return a / b;
};
```

---

### 6. IIFE (Immediately Invoked Function Expression)

- Executes immediately

```js
(function () {
  console.log("IIFE");
})();
```

---

### Interview-specific answer

JavaScript has function declarations, function expressions, arrow functions, anonymous functions, named function expressions, and IIFEs. Each type differs in hoisting behavior, syntax, and usage scenarios.

## Q10. What are template literals in JavaScript?

### Concept

Template literals are a **modern way to work with strings** in JavaScript using **backticks (`)**.

They allow:

- String interpolation
- Multi-line strings
- Expression evaluation inside strings

---

### Example 1: String interpolation

```js
const name = "Tanish";
const age = 22;

console.log(`My name is ${name} and I am ${age}`);
```

Reason:

- `${}` evaluates expressions directly

---

### Example 2: Multi-line strings

```js
const msg = `Hello
This is line 2
This is line 3`;
```

Reason:

- No need for `\n`

---

### Example 3: Expression inside template literal

```js
const a = 10;
const b = 20;

console.log(`Sum is ${a + b}`);
```

---

### Comparison with normal strings

```js
// Old way
console.log("Hello " + name);

// Template literal
console.log(`Hello ${name}`);
```

---

### Interview-specific answer

Template literals use backticks and allow embedding expressions using `${}`. They support multi-line strings and cleaner string interpolation compared to traditional string concatenation.

## Q10.1 What are the major ES6 (ES2015) features in JavaScript?

### Concept

ES6 (ECMAScript 2015) introduced **modern syntax and features** to make JavaScript more **readable, safer, and scalable**.

---

### Key ES6 Features

1. **let and const**
   - Block scoped variables
   - Prevent accidental re-declaration

```js
let count = 1;
const PI = 3.14;
```

---

2. **Arrow Functions**
   - Shorter syntax
   - Lexical `this`

```js
const add = (a, b) => a + b;
```

---

3. **Template Literals**
   - String interpolation
   - Multi-line strings

```js
`Hello ${name}`;
```

---

4. **Destructuring**
   - Extract values from arrays/objects easily

```js
const { name, age } = user;
const [a, b] = arr;
```

---

5. **Default Parameters**
   - Set default values in functions

```js
function greet(name = "Guest") {
  console.log(name);
}
```

---

6. **Rest and Spread Operator (`...`)**
   - Collect or expand values

```js
function sum(...nums) {}
const arr2 = [...arr1];
```

---

7. **Modules (import/export)**
   - Split code into files

```js
export default function fn() {}
import fn from "./file.js";
```

---

8. **Classes**
   - Syntactic sugar over prototypes

```js
class User {
  constructor(name) {
    this.name = name;
  }
}
```

---

9. **Promises**
   - Better async handling

```js
new Promise((resolve, reject) => {});
```

---

10. **for...of loop**

- Iterate over iterable values

```js
for (const val of arr) {
}
```

---

### Interview-specific answer

ES6 introduced features like `let` and `const`, arrow functions, template literals, destructuring, default parameters, rest/spread operators, modules, classes, promises, and `for...of`, making JavaScript cleaner and more maintainable.

## Q11. What is a higher-order function in JavaScript?

### Concept

A **higher-order function** is a function that **does at least one of the following**:

- Takes **another function as an argument**
- Returns a **function as its result**

This is possible because **functions are first-class citizens** in JavaScript.

Used heavily in:

- Functional programming
- Array methods
- Async patterns

---

### Example 1: Function as argument

```js
function greet(name, formatter) {
  return formatter(name);
}

function upper(text) {
  return text.toUpperCase();
}

greet("tanish", upper); // "TANISH"
```

---

### Example 2: Function returning another function

```js
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
double(5); // 10
```

---

### Example 3: Built-in higher-order functions

```js
const nums = [1, 2, 3];

const doubled = nums.map((n) => n * 2);
```

Reason:

- `map` takes a function as argument

---

### Common HOF examples

- `map`
- `filter`
- `reduce`
- `forEach`
- `setTimeout`

### Please take NOTE

_In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, returned from other functions, and stored like any other value._

Good question. Let’s break this **slowly and clearly**.

---

##### Example 1: Function stored in a variable

```js
const greet = function () {
  return "Hello";
};
```

Here:

- Function is assigned to a variable
- Just like: `const x = 10;`

So function = value.

---

##### Example 2: Function passed as an argument

```js
function run(fn) {
  fn(); // calling the passed function
}

function sayHi() {
  console.log("Hi");
}

run(sayHi);
```

Here:

- `sayHi` is **passed like data**
- `run` doesn’t care _what_ the function does

This enables:

- callbacks
- event handlers
- async code

---

##### Example 3: Function returned from another function

```js
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

Here:

- A function creates **another function**
- This is the base of **closures**

---

##### Example 4: Function inside array / object

```js
const arr = [
  function () {
    return "A";
  },
  function () {
    return "B";
  },
];

const obj = {
  greet: function () {
    return "Hello";
  },
};
```

Again: function = value.

---

### They usually mean:

- Callbacks work
- map, filter, reduce work
- Event listeners work
- Promises & async/await work
- Closures exist
- Functional programming is possible

  _All because functions can move freely like data_

---

### Interview-specific answer

A higher-order function is a function that takes another function as an argument or returns a function. Common examples include `map`, `filter`, and `reduce`, which enable functional programming patterns in JavaScript.

### Meaning of

**“Functions are first-class citizens in JavaScript”**

### Concept

When we say **functions are first-class citizens**, it means:

> **Functions are treated like normal values (just like numbers, strings, or objects).**

In JavaScript, a function is **not special or restricted** — it can be:

- stored
- passed
- returned
- assigned
  exactly like any other value.

---

## What “first-class” actually means (practical rules)

A thing is **first-class** if it can:

1. **Be stored in a variable**
2. **Be passed as an argument to another function**
3. **Be returned from a function**
4. **Be stored in data structures (arrays, objects)**

Functions in JavaScript satisfy **all four**.

---

## Q13. How do functional programming concepts apply in JavaScript?

### Concept

JavaScript supports **functional programming (FP)** because functions are **first-class citizens**.

Functional programming focuses on:

- Pure functions
- Immutability
- Higher-order functions
- Function composition

JavaScript applies these concepts mainly using **array methods and callbacks**.

---

### 1. Pure functions

- Same input → same output
- No side effects

```js
function add(a, b) {
  return a + b;
}
```

---

### 2. Immutability

- Do not change existing data
- Return new data

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4];
```

---

### 3. Higher-order functions

Functions that take or return other functions.

```js
const doubled = [1, 2, 3].map((n) => n * 2);
```

---

### 4. Function composition

Combining small functions.

```js
const add = (x) => x + 2;
const multiply = (x) => x * 3;

const result = multiply(add(5)); // 21
```

---

### 5. Avoid shared state

```js
let count = 0; // Not preferred in FP
```

Prefer:

```js
const increment = (x) => x + 1;
```

---

### Interview-specific answer

JavaScript supports functional programming through first-class functions, higher-order functions, immutability, and array methods like `map`, `filter`, and `reduce`, enabling cleaner and predictable code.

## Q14. What are IIFEs (Immediately Invoked Function Expressions)?

### Concept

An **IIFE** is a function that is **defined and executed immediately** after creation.

Main purposes:

- Avoid global scope pollution
- Create a private scope
- Run setup/initialization code once

Syntax pattern:

```js
(function () {
  // code
})();
```

---

### Example 1: Basic IIFE

```js
(function () {
  console.log("IIFE executed");
})();

// syntax

// function () { ... } → defines a function
// Wrapping it in () → converts it into an expression
// The final () → immediately calls the function

// So the function is created and executed immediately, without giving it a name.
```

Reason:

- Function runs immediately
- Variables inside are not accessible outside

---

### Example 2: IIFE with parameters

```js
(function (name) {
  console.log("Hello " + name);
})("Tanish");
```

---

### Example 3: Data privacy

```js
const counter = (function () {
  let count = 0;

  return {
    inc() {
      count++;
      return count;
    },
  };
})();

counter.inc(); // 1
counter.inc(); // 2
```

Reason:

- `count` is private
- Only accessible through exposed methods

---

### Interview-specific answer

An IIFE is a function expression that runs immediately after being defined. It is used to create a private scope, avoid polluting the global namespace, and execute one-time setup logic.

## Q15. How do you create private variables in JavaScript?

### Concept

Private variables are variables that **cannot be accessed directly from outside**.
JavaScript achieves privacy using:

- **Closures**
- **IIFEs**
- **Classes with `#` (modern JS)**

Most interviewers expect **closure-based explanation**.

---

### Example 1: Private variable using closure

```js
function createCounter() {
  let count = 0; // private variable

  return {
    increment() {
      count++;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
// counter.count ❌ not accessible
```

Reason:

- `count` lives in outer function
- Inner functions form a closure
- Direct access is blocked

---

### Example 2: Private variable using IIFE

```js
const user = (function () {
  let password = "secret"; // private

  return {
    check(pwd) {
      return pwd === password;
    },
  };
})();

user.check("secret"); // true
// user.password ❌
```

---

### Example 3: Private fields in class (ES2020+)

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100); // 100
// acc.#balance ❌ SyntaxError
```

---

### Interview-specific answer

Private variables in JavaScript are created using closures or IIFEs, where inner functions retain access to outer variables while preventing direct access. In modern JavaScript, private class fields using `#` also provide true encapsulation.

## Q16. How do you create an object in JavaScript?

### Concept

Objects in JavaScript are **key–value pairs** used to store structured data.
There are **multiple ways to create objects**, and each has a use case.

---

### Example 1: Object literal (most common)

```js
const user = {
  name: "Tanish",
  age: 22,
  greet() {
    return "Hello";
  },
};
```

Best for:

- Simple objects
- Static data

---

### Example 2: Using `new Object()`

```js
const obj = new Object();
obj.name = "JS";
obj.version = "ES6";
```

Rarely used in practice.

---

### Example 3: Constructor function

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Tanish", 22);
```

Used before ES6 classes.

---

### Example 4: `Object.create()`

```js
const proto = {
  greet() {
    return "Hi";
  },
};

const user = Object.create(proto);
user.name = "Tanish";
```

Used for:

- Prototypal inheritance

---

### Example 5: ES6 Class

```js
class User {
  constructor(name) {
    this.name = name;
  }
}

const u = new User("Tanish");
```

---

### Interview-specific answer

Objects in JavaScript can be created using object literals, constructor functions, `Object.create()`, or ES6 classes. Object literals are the most commonly used approach.

| Aspect                  | Object Literal `{}` | Constructor Function          | `Object.create()`      | ES6 Class                |
| ----------------------- | ------------------- | ----------------------------- | ---------------------- | ------------------------ |
| **Syntax**              | `{}`                | `function Person(){}` + `new` | `Object.create(proto)` | `class Person {}`        |
| **Ease of use**         | Very easy           | Medium                        | Medium                 | Easy & structured        |
| **Most commonly used**  | Yes                 | Less now                      | Rare                   | Yes (modern JS)          |
| **Uses `new` keyword**  | No                  | Yes                           | No                     | Yes                      |
| **Prototype handling**  | Implicit            | Explicit via `.prototype`     | Explicit               | Implicit                 |
| **Inheritance support** | Manual              | Manual                        | Prototype-based        | Built-in (`extends`)     |
| **Encapsulation**       | No                  | Partial                       | No                     | Better (methods grouped) |
| **Readability**         | High                | Medium                        | Low                    | High                     |
| **Boilerplate code**    | Very low            | Medium                        | Low                    | Medium                   |
| **Method sharing**      | No (per object)     | Yes                           | Yes                    | Yes                      |
| **`this` behavior**     | Refers to objec     |                               |                        |                          |

## Q17. What are prototypes in JavaScript?

### Concept

Every JavaScript object has an internal property called **`[[Prototype]]`**.
This is used to **share properties and methods** between objects.

When you access a property:

- JS first looks on the object itself
- If not found, it looks up the **prototype chain**

This mechanism is called **prototypal inheritance**.

---

### Example 1: Prototype via constructor function

```js
function User(name) {
  this.name = name;
}

User.prototype.sayHello = function () {
  return "Hello " + this.name;
};

const u1 = new User("Tanish");
u1.sayHello(); // "Hello Tanish"
```

Reason:

- `sayHello` is not on `u1`
- JS finds it on `User.prototype`

---

### Example 2: Prototype chain

```js
const arr = [];
arr.push(1);
```

Flow:

- `push` not found on `arr`
- Found on `Array.prototype`

Chain:

```
arr → Array.prototype → Object.prototype → null
```

---

### Example 3: Using `Object.create()`

```js
const parent = {
  greet() {
    return "Hi";
  },
};

const child = Object.create(parent);
child.greet(); // "Hi"
```

Reason:

- `child` inherits from `parent`

---

### Key points

- Prototypes enable **method sharing**
- Saves memory
- Basis of inheritance in JS

---

### Interview-specific answer

Prototypes are JavaScript’s mechanism for inheritance. Every object has a prototype, and when a property is not found on an object, JavaScript looks it up the prototype chain to resolve it.

---

### Prototypes — super simple mental model

Think like this:

👉 **Every object in JavaScript has a hidden parent.**
That parent is called its **prototype**.

If an object does **not** have something, JavaScript asks its parent.

---

#### Step 1: Normal object access

```js
const user = {
  name: "Tanish",
};

console.log(user.name);
```

JS finds `name` **inside `user`** → done.

---

#### Step 2: Property not found → ask parent

```js
console.log(user.toString());
```

Question:
Did we define `toString` in `user`? ❌

So JS does this internally:

```
user → Object.prototype → null
```

`toString()` exists in `Object.prototype`, so it works.

**That parent (`Object.prototype`) is the prototype.**

---

#### Step 3: Array example (very important)

```js
const arr = [1, 2, 3];

arr.push(4);
```

Did we define `push` in `arr`? ❌

JS lookup path:

```
arr
 ↓
Array.prototype   (push, map, filter exist here)
 ↓
Object.prototype (toString, hasOwnProperty)
 ↓
null
```

So:

- `push` comes from `Array.prototype`
- `map` comes from `Array.prototype`
- `toString` comes from `Object.prototype`

---

#### Step 4: Creating your own prototype chain

```js
const parent = {
  greet() {
    return "Hello";
  },
};

const child = Object.create(parent);

child.greet(); // "Hello"
```

What happens?

1. `greet` not found in `child`
2. JS checks parent (prototype)
3. Found → executed

Internally:

```
child → parent → Object.prototype → null
```

---

#### Step 5: Constructor function (common interview case)

```js
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return "Hi " + this.name;
};

const u1 = new User("Tanish");
```

Memory model:

```
u1
 ↓
User.prototype (sayHi)
 ↓
Object.prototype
 ↓
null
```

So:

```js
u1.sayHi(); // works
```

---

#### One-line rule (MEMORIZE THIS)

**If a property is not found on an object, JavaScript looks for it in its prototype, then prototype’s prototype, until null.**

That search is called the **prototype chain**.

---

#### Interview-specific answer (easy)

Prototypes are JavaScript’s way of sharing properties between objects. Every object has a prototype, and when a property is not found on the object itself, JavaScript looks it up through the prototype chain.

---

## Q18. Explain prototypal inheritance in JavaScript

### Concept

**Prototypal inheritance** means **one object can access properties and methods of another object through the prototype chain**.

In JavaScript:

- Objects inherit from **other objects**
- Not from classes (classes are just syntax sugar)

Child object → Parent object → Object.prototype → null

---

### Example 1: Basic prototypal inheritance

```js
const parent = {
  greet() {
    return "Hello";
  },
};

const child = Object.create(parent);

child.greet(); // "Hello"
```

Explanation:

- `greet` is not in `child`
- JavaScript looks at parent (prototype)
- Finds `greet` and executes it

---

### Example 2: Inheritance using constructor function

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  return this.name;
};

const p1 = new Person("Tanish");
p1.sayName(); // "Tanish"
```

Explanation:

- `sayName` exists on `Person.prototype`
- `p1` inherits it via prototype

Prototype chain:

```
p1 → Person.prototype → Object.prototype → null
```

---

### Example 3: Method sharing (why inheritance matters)

```js
function User(name) {
  this.name = name;
}

User.prototype.login = function () {
  return this.name + " logged in";
};

const u1 = new User("A");
const u2 = new User("B");
```

Reason:

- `login` stored **once**
- Shared by all instances
- Saves memory

---

### Key points

- JavaScript uses **object-based inheritance**
- Methods are shared using prototypes
- Lookup happens dynamically at runtime

---

### Interview-specific answer

Prototypal inheritance is JavaScript’s mechanism where objects inherit properties and methods from other objects through the prototype chain. When a property is not found on an object, JavaScript looks it up in its prototype until it reaches null.

## Q19. What is the difference between object literals and constructor functions?

### Concept

Both **object literals** and **constructor functions** are used to create objects, but they differ in **scalability, memory usage, and use case**.

---

### Object Literal

Used to create **single, simple objects**.

```js
const user = {
  name: "Tanish",
  age: 22,
  greet() {
    return "Hello";
  },
};
```

Characteristics:

- Simple and readable
- Good for one-off objects
- Methods are created per object

---

### Constructor Function

Used to create **multiple similar objects**.

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greet = function () {
  return "Hello";
};

const u1 = new User("A", 20);
const u2 = new User("B", 22);
```

Characteristics:

- Blueprint for objects
- Uses `new` keyword
- Methods shared via prototype
- Memory efficient

---

### Key differences

| Aspect          | Object Literal    | Constructor Function  |
| --------------- | ----------------- | --------------------- |
| Purpose         | Single object     | Multiple objects      |
| Reusability     | Low               | High                  |
| Memory          | More (per object) | Less (shared methods) |
| `new` keyword   | Not used          | Required              |
| Prototype usage | No                | Yes                   |

---

### When to use what

- Use **object literals** for simple configs or single objects
- Use **constructor functions** when creating many similar objects

---

### Interview-specific answer

Object literals are used for creating single objects quickly, while constructor functions act as blueprints to create multiple objects with shared behavior through prototypes, making them more memory efficient.

## Q20. How do you add or remove properties from an object in JavaScript?

### Concept

JavaScript objects are **dynamic**, meaning you can **add or remove properties at runtime**.

There are multiple ways to do this.

---

### Example 1: Add property using dot notation

```js
const user = { name: "Tanish" };

user.age = 22;
```

---

### Example 2: Add property using bracket notation

```js
const key = "email";

user[key] = "tanish@gmail.com";
```

Used when:

- Property name is dynamic
- Property name has spaces or special characters

---

### Example 3: Remove property using `delete`

```js
delete user.age;
```

---

### Example 4: Add / remove multiple properties

```js
Object.assign(user, { city: "Delhi", country: "India" });

delete user.city;
```

---

### Important note

```js
const obj = { a: 1 };
obj = {}; // ❌ Error (const reference cannot change)
```

But:

```js
obj.a = 2; // ✅ allowed
```

---

### Interview-specific answer

Properties can be added to an object using dot or bracket notation and removed using the `delete` operator. JavaScript objects are mutable, allowing properties to be modified dynamically at runtime.

## Q21. What is the event loop in JavaScript?

### Concept

The **event loop** is the mechanism that allows JavaScript to handle **asynchronous operations** even though JavaScript is **single-threaded**.

JavaScript runtime has:

- **Call Stack** → executes synchronous code
- **Web APIs** → timers, DOM, fetch (handled by browser)
- **Queues**
  - **Microtask Queue** → promises, `queueMicrotask`
  - **Callback (Macrotask) Queue** → `setTimeout`, events

- **Event Loop** → coordinates execution

Rule:

1. Execute call stack
2. Run **all microtasks**
3. Run **one macrotask**
4. Repeat

---

### Example 1: Basic async flow

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

Output:

```
A
C
B
```

Reason:

- `setTimeout` goes to Web API
- Callback waits in macrotask queue
- Stack finishes first

---

### Example 2: Microtask vs macrotask

```js
console.log("start");

Promise.resolve().then(() => {
  console.log("promise");
});

setTimeout(() => {
  console.log("timeout");
}, 0);

console.log("end");
```

Output:

```
start
end
promise
timeout
```

Reason:

- Promise → microtask (higher priority)
- `setTimeout` → macrotask

---

### Example 3: Call stack priority

```js
function a() {
  console.log("a");
}

function b() {
  a();
}

b();
```

Reason:

- Stack must be empty before async callbacks run

---

### Key points

- JS is single-threaded
- Async handled via queues
- Microtasks run before macrotasks

---

### Interview-specific answer

The event loop is the mechanism that enables asynchronous behavior in JavaScript. It continuously checks the call stack and executes pending microtasks first, followed by macrotasks, allowing non-blocking execution despite JavaScript being single-threaded.

## Q22. Explain how callbacks work in JavaScript

### Concept

A **callback** is a function that is **passed to another function** and is **executed later**, usually after an operation completes.

Callbacks are used because:

- JavaScript is single-threaded
- Many operations are asynchronous

---

### Example 1: Simple callback

```js
function greet(name, cb) {
  console.log("Hello " + name);
  cb();
}

function done() {
  console.log("Done");
}

greet("Tanish", done);
```

Execution flow:

1. `greet` is called
2. `cb()` is executed inside `greet`

---

### Example 2: Asynchronous callback

```js
setTimeout(() => {
  console.log("Executed later");
}, 1000);
```

Flow:

- Callback is registered
- Executed after delay via event loop

---

### Example 3: Callback in array method

```js
[1, 2, 3].forEach((num) => {
  console.log(num);
});
```

Reason:

- Function runs for each element

---

### Callback problem: Callback Hell

```js
doA(() => {
  doB(() => {
    doC(() => {
      doD();
    });
  });
});
```

Hard to:

- Read
- Debug
- Maintain

Solution:

- Promises
- `async/await`

---

### Interview-specific answer

Callbacks are functions passed as arguments and executed later, often for asynchronous operations. While powerful, excessive nested callbacks can lead to callback hell, which is solved using promises or async/await.

---

### Callback — real execution flow (mental model)

#### Example

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
```

---

#### Step-by-step what JavaScript does

#### Step 1: Call stack starts

```txt
Call Stack:
console.log("A")
```

Output:

```
A
```

---

#### Step 2: `setTimeout` is NOT executed by JS

```js
setTimeout(() => {
  console.log("B");
}, 1000);
```

What happens:

- JS **registers** the callback
- Browser handles the timer (Web API)
- Callback is NOT run now

Call stack moves on.

---

#### Step 3: Next line runs immediately

```txt
Call Stack:
console.log("C")
```

Output:

```
C
```

---

#### Step 4: Timer finishes

After 1000ms:

- Browser puts callback into **Callback Queue**

```txt
Callback Queue:
() => console.log("B")
```

---

#### Step 5: Event loop checks

Event loop rule:

> If call stack is empty → take callback from queue → push to stack

Now stack:

```txt
Call Stack:
() => console.log("B")
```

Output:

```
B
```

---

#### IMPORTANT RULE (MEMORIZE THIS)

**Callback is NEVER executed immediately.**
It is:

1. Passed
2. Stored
3. Executed later by event loop

---

#### One more example (promise vs callback)

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

Execution order:

```
1
4
3
2
```

Why?

- Promise → microtask (higher priority)
- setTimeout → macrotask (lower priority)

---

#### Callback in simple words (interview gold)

> A callback is a function passed to another function and executed later, after the current execution stack is cleared, usually by the event loop.

---

## Q23. What are promises and how do they manage asynchronous code?

### Concept

A **Promise** is an object that represents the **eventual result of an asynchronous operation**.

A promise solves problems of callbacks by:

- Making async code readable
- Avoiding callback hell
- Providing clear success / failure handling

A promise has **3 states**:

1. **Pending** → initial state
2. **Fulfilled** → operation successful
3. **Rejected** → operation failed

---

### Example 1: Creating a promise

```js
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});
```

---

### Example 2: Consuming a promise

```js
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

Flow:

- `then` runs on success
- `catch` runs on failure

---

### Example 3: Promise with async operation

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

fetchData().then((data) => console.log(data));
```

---

### How promise works internally (simple flow)

1. Promise created → pending
2. Async task runs
3. `resolve` / `reject` called
4. `.then()` / `.catch()` added to **microtask queue**
5. Event loop executes it after call stack clears

---

### Why promises are better than callbacks

- Flat structure
- Centralized error handling
- Chainable using `.then()`

---

### Interview-specific answer

A promise is an object that represents the eventual completion or failure of an asynchronous operation. It manages async code using states (pending, fulfilled, rejected) and allows chaining using `then` and `catch`, making code more readable and maintainable.

## Q24. Explain `async` / `await` in JavaScript and how it differs from Promises

### Concept

`async` / `await` is **syntactic sugar over Promises** that lets you write **asynchronous code in a synchronous-looking way**.

Rules:

- `async` function **always returns a Promise**
- `await` pauses execution **until the Promise settles**
- `await` can be used **only inside async functions**

---

### Example 1: Promise vs async/await (same logic)

**Using Promise**

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data"), 1000);
  });
}

fetchData().then((data) => {
  console.log(data);
});
```

**Using async/await**

```js
async function fetchData() {
  return "Data";
}

async function main() {
  const data = await fetchData();
  console.log(data);
}

main();
```

---

### Example 2: Error handling

```js
async function getData() {
  try {
    const res = await fetchData();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
```

Reason:

- `try/catch` replaces `.then().catch()`

---

### Example 3: Sequential execution

```js
async function process() {
  const a = await task1();
  const b = await task2();
}
```

Reason:

- Each `await` waits for previous promise

---

### How it works internally

- `await` pauses function execution
- Promise resolves
- Remaining code goes to **microtask queue**
- Event loop resumes execution

---

### Difference: Promise vs async/await

| Aspect         | Promise    | async/await |
| -------------- | ---------- | ----------- |
| Syntax         | Chained    | Linear      |
| Readability    | Medium     | High        |
| Error handling | `.catch()` | `try/catch` |
| Debugging      | Harder     | Easier      |

---

### Interview-specific answer

`async/await` is built on top of promises and allows writing asynchronous code in a synchronous style. `async` functions return promises, and `await` pauses execution until the promise resolves, making code more readable and easier to handle errors using `try/catch`.

## Q25. What is the Job Queue (Microtask Queue) in JavaScript?

### Concept

The **Job Queue**, also called the **Microtask Queue**, stores **microtasks** that must be executed **immediately after the current call stack is empty** and **before any macrotask**.

Priority rule (very important):

> **Microtasks run before macrotasks**

---

### What goes into the Microtask Queue

- `Promise.then`
- `Promise.catch`
- `Promise.finally`
- `queueMicrotask`

---

### Example 1: Microtask vs macrotask

```js
console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");
```

Output:

```
start
end
promise
timeout
```

Reason:

- Promise callback → microtask
- `setTimeout` → macrotask
- Microtask executes first

---

### Example 2: Multiple microtasks

```js
Promise.resolve()
  .then(() => console.log("A"))
  .then(() => console.log("B"));
```

Output:

```
A
B
```

Reason:

- All microtasks finish before event loop moves on

---

### Example 3: `queueMicrotask`

```js
queueMicrotask(() => {
  console.log("microtask");
});

console.log("sync");
```

Output:

```
sync
microtask
```

---

### Execution order (mental model)

1. Execute synchronous code (call stack)
2. Empty **all microtasks**
3. Execute **one macrotask**
4. Repeat

---

### Interview-specific answer

The Job Queue, or Microtask Queue, stores promise callbacks and other microtasks. After the call stack is cleared, JavaScript executes all microtasks before moving on to macrotasks like `setTimeout`, ensuring promises have higher priority.

## Q26. How do you select DOM elements using JavaScript?

### Concept

JavaScript provides **DOM selection methods** to access HTML elements so you can **read, update, or attach events**.

There are **old methods** and **modern methods**.
Modern methods are preferred.

---

### Example 1: `getElementById`

```js
const el = document.getElementById("title");
```

- Selects by `id`
- Returns **single element**

---

### Example 2: `querySelector`

```js
const el = document.querySelector(".box");
```

- Uses **CSS selector**
- Returns **first matching element**

---

### Example 3: `querySelectorAll`

```js
const items = document.querySelectorAll(".item");
```

- Uses CSS selector
- Returns **NodeList**
- Can loop using `forEach`

---

### Older methods (still asked)

```js
document.getElementsByClassName("card"); // HTMLCollection
document.getElementsByTagName("div"); // HTMLCollection
```

---

### Difference: NodeList vs HTMLCollection

- **NodeList** → static (does not auto-update)
- **HTMLCollection** → live (auto-updates)

---

### Interview-specific answer

DOM elements can be selected using methods like `getElementById`, `querySelector`, and `querySelectorAll`. `querySelector` methods are preferred because they support CSS selectors and provide more flexibility.

## Q27. Explain event propagation in the DOM

### Concept

**Event propagation** defines **how an event travels through the DOM tree** when an event occurs on an element.

There are **three phases**:

1. **Capturing phase** (top → down)
2. **Target phase** (actual element)
3. **Bubbling phase** (bottom → up)

Default behavior: **Bubbling**

---

### Event flow

```txt
window
 ↓
document
 ↓
html
 ↓
body
 ↓
target element
 ↑
body
 ↑
html
 ↑
document
 ↑
window
```

---

### Example 1: Bubbling (default)

```html
<div id="parent">
  <button id="child">Click</button>
</div>
```

```js
parent.addEventListener("click", () => {
  console.log("Parent");
});

child.addEventListener("click", () => {
  console.log("Child");
});
```

Output on clicking button:

```
Child
Parent
```

---

### Example 2: Capturing phase

```js
parent.addEventListener(
  "click",
  () => {
    console.log("Parent");
  },
  true,
);
```

Output:

```
Parent
Child
```

Reason:

- `true` enables capturing

---

### Example 3: Stop propagation

```js
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child");
});
```

Output:

```
Child
```

---

### Why event propagation matters

- Enables **event delegation**
- Improves performance
- Reduces memory usage

---

### Interview-specific answer

Event propagation describes how events move through the DOM in three phases: capturing, target, and bubbling. By default, events bubble up, but capturing can be enabled, and propagation can be controlled using `stopPropagation()`.

### Event in JavaScript (Proper Explanation with Example)

---

##### What is an Event?

An **event** is an action or occurrence that happens in the browser and can be detected by JavaScript.

In simple words:

> **Event = something that happens**
> **Event handler = code that runs when it happens**

Examples of events:

- User clicks a button
- User types in input
- Page loads
- Mouse moves
- Key is pressed

---

##### Why Events are Important

Without events:

- Web pages would be **static**
- No interaction with users

Events make the web **interactive and dynamic**.

---

##### Basic Event Flow (Mental Model)

1. User performs an action (click, type, scroll)
2. Browser detects the event
3. JavaScript listens for that event
4. Event handler function executes

---

##### Proper Example: Click Event

##### HTML

```html
<button id="btn">Click Me</button>
<p id="text"></p>
```

##### JavaScript

```js
const button = document.getElementById("btn");
const text = document.getElementById("text");

button.addEventListener("click", function () {
  text.innerText = "Button was clicked";
});
```

---

##### What is happening step-by-step

1. `getElementById` → selects HTML elements
2. `addEventListener` → attaches an event listener
3. `"click"` → event type
4. Function → event handler
5. When button is clicked → function runs

---

##### Event Handler Function

```js
function () {
  text.innerText = "Button was clicked";
}
```

This function:

- Runs **only when event occurs**
- Is possible because **functions are first-class citizens**

---

##### Another Example: Input Event

```html
<input id="nameInput" />
<p id="output"></p>
```

```js
const input = document.getElementById("nameInput");
const output = document.getElementById("output");

input.addEventListener("input", function () {
  output.innerText = input.value;
});
```

- `input` event fires **every time user types**
- Used in search boxes, forms, validations

---

##### Common Event Types

| Event       | When it fires        |
| ----------- | -------------------- |
| `click`     | Mouse click          |
| `input`     | Value changes        |
| `submit`    | Form submitted       |
| `keydown`   | Key pressed          |
| `load`      | Page loaded          |
| `mouseover` | Mouse enters element |

---

##### Important Interview Point

> Events use **callback functions**, and callbacks are possible because **functions are first-class citizens in JavaScript**.

---

##### One-line Interview Answer

> An event in JavaScript is an action triggered by the user or browser, and an event handler is a function that executes in response to that action.

## Q28. How do you prevent a form from submitting using JavaScript?

### Concept

By default, submitting a form **reloads the page**.
JavaScript allows you to **stop this default behavior** so you can:

- Validate data
- Send data via AJAX / fetch
- Control submission manually

This is done using **`event.preventDefault()`**.

---

### Example 1: Prevent form submission

```html
<form id="myForm">
  <button type="submit">Submit</button>
</form>
```

```js
const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submission stopped");
});
```

---

### Example 2: Inline event (not recommended)

```html
<form onsubmit="handleSubmit(event)"></form>
```

```js
function handleSubmit(e) {
  e.preventDefault();
}
```

---

### Example 3: Validation before submit

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "") {
    alert("Input required");
    return;
  }

  console.log("Form can be submitted");
});
```

---

### Key point

- `preventDefault()` stops browser’s default action
- Does not stop event bubbling (use `stopPropagation()` for that)

---

### Interview-specific answer

A form submission can be prevented using `event.preventDefault()` inside the submit event handler. This allows validation or custom submission logic without reloading the page.

## Q29. What are Web APIs in the context of JavaScript?

### Concept

**Web APIs** are **browser-provided features** that JavaScript can use to perform tasks **outside the JS engine**.

Important:

- Web APIs are **not part of JavaScript itself**
- They are provided by the **browser environment**

JavaScript uses them to handle:

- Async tasks
- Browser interactions

---

### Common Web APIs

- **DOM API** → `document`, `querySelector`
- **Timer API** → `setTimeout`, `setInterval`
- **Fetch API** → HTTP requests
- **Storage API** → `localStorage`, `sessionStorage`
- **Geolocation API**
- **History API**

---

### Example 1: Timer Web API

```js
setTimeout(() => {
  console.log("Hello");
}, 1000);
```

Flow:

- JS registers timer
- Browser handles delay
- Callback sent to queue

---

### Example 2: Fetch Web API

```js
fetch("/api/data")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

Flow:

- Browser makes network request
- JS handles response via Promise

---

### Example 3: DOM Web API

```js
document.getElementById("title").textContent = "JS";
```

---

### How Web APIs fit in Event Loop

1. JS sends task to Web API
2. Browser processes it
3. Callback / promise goes to queue
4. Event loop executes it

---

### Interview-specific answer

Web APIs are browser-provided interfaces that allow JavaScript to interact with the browser, such as handling DOM manipulation, timers, network requests, and storage. They enable asynchronous and interactive behavior beyond the core JavaScript engine.

## Q30. How can you manipulate the browser history using JavaScript?

### Concept

JavaScript can **interact with the browser’s history stack** using the **History API**.
This allows changing the URL **without reloading the page**, which is heavily used in **SPAs (Single Page Applications)**.

The main object is:

```js
window.history;
```

---

### Important History API methods

1. **`history.pushState()`**

- Adds a new entry to browser history
- Does NOT reload the page

```js
history.pushState({ page: 1 }, "", "/profile");
```

---

2. **`history.replaceState()`**

- Replaces current history entry
- Does NOT create a new entry

```js
history.replaceState({ page: 2 }, "", "/settings");
```

---

3. **`history.back()`**

```js
history.back();
```

Same as browser back button

---

4. **`history.forward()`**

```js
history.forward();
```

---

5. **`history.go()`**

```js
history.go(-1); // back
history.go(1); // forward
```

---

### Example: SPA-style navigation

```js
button.addEventListener("click", () => {
  history.pushState({}, "", "/about");
});
```

Page URL changes:

```
/home → /about
```

No reload happens.

---

### Handling back/forward navigation

```js
window.addEventListener("popstate", () => {
  console.log("URL changed");
});
```

Triggered when:

- User clicks back
- User clicks forward

---

### Interview-specific answer

The browser history can be manipulated using the History API methods like `pushState`, `replaceState`, `back`, `forward`, and `go`. These allow updating the URL and navigation state without reloading the page, commonly used in single-page applications.

## Q31. What are the new features introduced in ES6 (ES2015)?

### Concept

ES6 introduced **modern language features** to make JavaScript **cleaner, safer, and more scalable**.
These features are now **standard in interviews and real projects**.

---

### Major ES6 Features

1. **`let` and `const`**

- Block scope
- Prevent re-declaration bugs

```js
let x = 10;
const y = 20;
```

---

2. **Arrow Functions**

- Short syntax
- Lexical `this`

```js
const add = (a, b) => a + b;
```

---

3. **Template Literals**

- String interpolation
- Multi-line strings

```js
`Hello ${name}`;
```

---

4. **Destructuring**

- Extract values easily

```js
const { name } = user;
const [a, b] = arr;
```

---

5. **Default Parameters**

```js
function greet(name = "Guest") {}
```

---

6. **Rest and Spread Operator (`...`)**

```js
function sum(...nums) {}
const copy = [...arr];
```

---

7. **Promises**

- Better async handling

```js
new Promise((res, rej) => {});
```

---

8. **Classes**

- Cleaner syntax over prototypes

```js
class User {
  constructor(name) {
    this.name = name;
  }
}
```

---

9. **Modules**

```js
export default fn;
import fn from "./file.js";
```

---

10. **`for...of` loop**

```js
for (const val of arr) {
}
```

---

### Interview-specific answer

ES6 introduced features like `let` and `const`, arrow functions, template literals, destructuring, default parameters, rest/spread operators, promises, classes, modules, and `for...of`, making JavaScript more readable and maintainable.

## Q32. How do you use destructuring assignments in ES6?

### Concept

**Destructuring** is an ES6 feature that allows you to **extract values from arrays or properties from objects** and assign them to variables in a **clean, readable way**.

It avoids repetitive access like `obj.prop` or `arr[index]`.

Two types:

- **Array destructuring**
- **Object destructuring**

---

### Example 1: Array destructuring

```js
const arr = [10, 20, 30];

const [a, b] = arr;

console.log(a); // 10
console.log(b); // 20
```

Reason:

- Values are assigned based on position

---

### Example 2: Object destructuring

```js
const user = {
  name: "Tanish",
  age: 22,
};

const { name, age } = user;

console.log(name); // Tanish
console.log(age); // 22
```

Reason:

- Keys must match property names

---

### Example 3: Default values and renaming

```js
const user = { name: "JS" };

const { name: username, age = 18 } = user;

console.log(username); // JS
console.log(age); // 18
```

---

### Common use cases

```js
function printUser({ name, age }) {
  console.log(name, age);
}
```

---

### Interview-specific answer

Destructuring in ES6 allows extracting values from arrays or objects into variables using concise syntax. It improves readability, reduces boilerplate code, and is commonly used in function parameters and data handling.

## Q33. Explain the use of `const` and `let` keywords

### Concept

`let` and `const` were introduced in ES6 to fix problems with `var`.

Both are:

- **Block scoped**
- Hoisted but in **Temporal Dead Zone (TDZ)**

Key difference is **reassignment**.

---

### `let`

- Value **can be reassigned**
- Cannot be redeclared in same scope

```js
let count = 1;
count = 2; // allowed
```

---

### `const`

- **Must be initialized**
- **Cannot be reassigned**
- Reference is constant, not the value itself

```js
const PI = 3.14;
// PI = 3.15; // Error
```

---

### Example: `const` with objects

```js
const user = { name: "Tanish" };
user.name = "JS"; // allowed
```

Reason:

- Object reference is constant
- Properties can change

---

### Block scope example

```js
if (true) {
  let a = 10;
  const b = 20;
}

// a, b not accessible here
```

---

### Why not `var`

- Function scoped
- Allows redeclaration
- Causes bugs due to hoisting

---

### Interview-specific answer

`let` is used for variables that can change, while `const` is used for values that should not be reassigned. Both are block-scoped and safer than `var` due to TDZ and no redeclaration.

## Q33.1 How are variables stored in JavaScript memory? (Value vs Reference)

### Concept

JavaScript stores data in memory in **two different ways**:

1. **Stored by Value**
2. **Stored by Reference**

This depends on the **type of data**, not on `let`, `const`, or `var`.

---

### Mental Model (Very Important)

Think of memory as:

- **Stack** → stores actual values (primitive data)
- **Heap** → stores complex data (objects)

Variables in the stack may either:

- hold the **actual value**
- or hold a **reference (address)** pointing to heap memory

---

### Stored by Value (Primitive Types)

Primitive types store the **actual value directly**.

Primitive types:

- number
- string
- boolean
- null
- undefined
- symbol
- bigint

```js
let a = 10;
let b = a;

b = 20;
```

What happens:

- `a` gets value `10`
- `b` gets a **copy** of `10`
- Changing `b` does not affect `a`

Memory idea:

```
a → 10
b → 10
```

---

### Stored by Reference (Non-Primitive Types)

Non-primitive types store a **reference (memory address)**.

Reference types:

- object
- array
- function

```js
let obj1 = { x: 1 };
let obj2 = obj1;

obj2.x = 2;
```

What happens:

- `obj1` stores a reference to heap memory
- `obj2` copies the **same reference**
- Both point to the same object

Memory idea:

```
obj1 → (address A) → { x: 1 }
obj2 → (address A) → { x: 2 }
```

---

### Important clarification about `const`

```js
const user = { name: "Tanish" };
user.name = "JS"; // allowed
```

Reason:

- `const` prevents **reassignment of reference**
- It does NOT freeze the object

---

### Function parameters example

```js
function update(x, obj) {
  x = 20;
  obj.val = 99;
}

let a = 10;
let b = { val: 1 };

update(a, b);
```

Result:

- `a` remains `10` (passed by value)
- `b.val` becomes `99` (reference)

---

### Clear rule to remember

- **Primitives → copied by value**
- **Objects/arrays/functions → copied by reference**
- Variables never store objects directly, they store **references**

---

### Interview-specific answer

JavaScript stores primitive values directly in memory, so they are copied by value. Objects, arrays, and functions are stored in heap memory, and variables hold references to them. When references are copied, multiple variables can point to the same object, causing shared mutations.

## Q33.2 What are Stack and Heap memory in JavaScript? (Memory Management Explained)

### Concept

JavaScript uses **automatic memory management**.
Behind the scenes, the JS engine manages memory mainly using **Stack** and **Heap**.

Each has a **clear purpose**.

---

### Stack Memory

#### What is Stack?

Stack is used for:

- Primitive values
- Function execution contexts
- Local variables
- Call stack management

#### Characteristics

- Fast access
- Fixed size
- Follows **LIFO** (Last In, First Out)

#### Stored in Stack

- number, string, boolean, null, undefined, symbol, bigint
- References (addresses) to heap objects
- Function call frames

```js
function sum(a, b) {
  let result = a + b;
  return result;
}

sum(2, 3);
```

Memory idea:

```
Call Stack
---------
sum()
a → 2
b → 3
result → 5
```

After function returns:

- Stack frame is removed automatically

---

### Heap Memory

#### What is Heap?

Heap is used for:

- Objects
- Arrays
- Functions
- Large, dynamic data

#### Characteristics

- Slower than stack
- Dynamic size
- No strict order

#### Stored in Heap

```js
let user = {
  name: "Tanish",
  age: 22,
};
```

Memory idea:

```
Stack        Heap
-----        ----
user →  A → { name: "Tanish", age: 22 }
```

Stack stores the **reference (A)**, heap stores the **actual object**.

---

### How Stack and Heap Work Together

```js
let a = 10;
let obj = { x: 1 };
```

Memory:

```
Stack:
a   → 10
obj → ref B

Heap:
B → { x: 1 }
```

---

### Memory Management in JavaScript

#### Allocation

- Happens automatically when variables are created

#### Usage

- Variables used during execution
- References passed around

#### Deallocation (Garbage Collection)

- JS uses **Garbage Collector**
- Frees heap memory when objects are no longer reachable

```js
let obj = { name: "JS" };
obj = null; // eligible for GC
```

---

### Garbage Collection (High level)

JS uses **mark-and-sweep** algorithm:

1. Mark reachable objects
2. Unreachable objects are removed

Key root objects:

- Global scope
- Call stack
- Closures

---

### Common memory leak cases

- Global variables
- Forgotten timers / intervals
- Closures holding large objects
- Detached DOM nodes

---

### One-line mental model

- **Stack** → fast, small, execution + primitive values
- **Heap** → large, dynamic, objects
- **Stack holds references, Heap holds data**

---

#### Interview-specific answer

JavaScript uses stack memory for primitive values and function execution contexts, while heap memory stores objects, arrays, and functions. The stack holds references to heap data. Memory is managed automatically using garbage collection, which removes unreachable objects from the heap.

## Q33.3 Where are variables stored? How Global Execution Context fits? Creation vs Execution phase (Complete Flow)

### Core Idea (Mental Model First)

JavaScript code runs in **Execution Contexts**.
Memory is **not randomly assigned** — it is managed **through execution contexts + stack + heap**.

Everything starts from the **Global Execution Context (GEC)**.

---

### 1. What is an Execution Context?

An Execution Context is an **environment where JS code is evaluated and executed**.

It has **two phases**:

1. **Creation Phase (Memory Allocation)**
2. **Execution Phase (Code Run)**

Types:

- Global Execution Context (one time)
- Function Execution Context (every function call)

---

### 2. Global Execution Context (GEC)

#### When is it created?

- As soon as JS file starts running

#### What does GEC contain?

GEC has:

1. **Memory Component (Variable Environment)**
2. **Code Component (Thread of Execution)**

---

### 3. Creation Phase (Very Important)

In this phase, JS **scans the entire code** and allocates memory.

#### What happens in Creation Phase?

###### a) Variables

- `var` → memory allocated, value = `undefined`
- `let` / `const` → memory allocated, but kept in **TDZ**
- Primitives → space in **stack**
- Objects → reference in stack, actual object in **heap**

###### b) Functions

- Function declarations → fully stored in memory

###### c) `this`

- In GEC → `this = window` (browser)

---

#### Example

```js
var a = 10;
let b = 20;

function foo() {
  console.log("hi");
}
```

Creation Phase memory:

```
Global Memory:
a   → undefined
b   → <TDZ>
foo → function body
this → window
```

No code executed yet.

---

### 4. Execution Phase

Now JS executes code **line by line**.

```js
a = 10; // undefined → 10
b = 20; // TDZ → 20
foo(); // function call
```

---

### 5. Function Execution Context (FEC)

When a function is called:

- A **new execution context** is created
- Pushed on **Call Stack**

Each FEC also has:

- Creation phase
- Execution phase

#### Example

```js
function add(x, y) {
  let sum = x + y;
  return sum;
}

add(2, 3);
```

Call stack flow:

```
Call Stack:
-----------
Global EC
add EC
```

Inside `add` creation phase:

```
x   → undefined
y   → undefined
sum → <TDZ>
```

Execution phase:

```
x = 2
y = 3
sum = 5
```

After return:

- `add EC` is popped from stack

---

### 6. Stack vs Heap vs Execution Context (Together)

#### Where things actually live

| Item               | Stored Where        | Why             |
| ------------------ | ------------------- | --------------- |
| Primitive values   | Stack               | Small, fixed    |
| Objects / arrays   | Heap                | Large, dynamic  |
| Object reference   | Stack               | Points to heap  |
| Execution contexts | Call Stack          | Track execution |
| Global variables   | Stack (refs) + Heap | Based on type   |

Example:

```js
let x = 10;
let obj = { a: 1 };
```

Memory view:

```
Stack:
x   → 10
obj → ref A

Heap:
A → { a: 1 }
```

---

### 7. How Garbage Collection Fits

When:

- Execution context is removed
- No references remain to heap objects

Then:

- Heap memory becomes **eligible for GC**

```js
let obj = { name: "JS" };
obj = null;
```

Heap object is now unreachable → GC removes it.

---

### 8. Complete Flow (One-shot Mental Model)

1. JS starts → Global Execution Context created
2. Creation Phase:
   - Memory allocated
   - Hoisting happens

3. Execution Phase:
   - Code runs line by line

4. Function call:
   - New Execution Context
   - Pushed to Call Stack

5. Function ends:
   - Context popped

6. Unused heap memory:
   - Cleaned by Garbage Collector

---

### One-line interview-ready summary

JavaScript runs code using execution contexts. The Global Execution Context is created first with a creation phase where memory is allocated and hoisting happens, followed by execution. Primitive values are stored in stack, objects in heap, and execution contexts are managed using the call stack with automatic garbage collection cleaning unused heap memory.

## Q34. What are default parameters in JavaScript functions?

### Concept

**Default parameters** allow a function parameter to have a **predefined value** if no argument (or `undefined`) is passed during function call.

Introduced in **ES6**.

Key points:

- Applied **only when argument is `undefined`**
- Works left to right
- Avoids manual checks like `param = param || value`

---

### Example 1: Basic default parameter

```js
function greet(name = "Guest") {
  return "Hello " + name;
}

greet("Tanish"); // Hello Tanish
greet(); // Hello Guest
```

---

### Example 2: Multiple default parameters

```js
function calculate(price, tax = 0.1) {
  return price + price * tax;
}

calculate(100); // 110
calculate(100, 0.2); // 120
```

---

### Example 3: Default parameter with expression

```js
function getId(id = Math.random()) {
  return id;
}

getId(); // random number
getId(10); // 10
```

---

### Interview-specific answer

Default parameters let function parameters use a **fallback value** when no argument or `undefined` is passed. They improve readability, reduce boilerplate checks, and were introduced in ES6.

## Q35. Explain the concept of modules in ES6?

### Concept

**ES6 modules** allow JavaScript code to be **split into multiple files** and **reuse functionality** using explicit `export` and `import`.

Each module:

- Has its **own scope** (no global pollution)
- Runs in **strict mode** by default
- Loads **once** and is cached
- Supports **named** and **default** exports

---

### Example 1: Named export and import

```js
// math.js
export function add(a, b) {
  return a + b;
}

export const PI = 3.14;
```

```js
// main.js
import { add, PI } from "./math.js";

add(2, 3); // 5
```

---

### Example 2: Default export

```js
// logger.js
export default function log(msg) {
  console.log(msg);
}
```

```js
// app.js
import log from "./logger.js";

log("Hello");
```

---

### Example 3: Mixed exports

```js
// utils.js
export default function main() {}
export function helper() {}
```

```js
import main, { helper } from "./utils.js";
```

---

### Interview-specific answer

ES6 modules provide a clean way to organize code using `export` and `import`. They prevent global scope pollution, enable reuse, and are the standard module system in modern JavaScript.

## Q36. How do you handle events in JavaScript?

### Concept

**Event handling** means executing JavaScript code **when a user or browser action occurs**, like click, input, submit, scroll, etc.

JavaScript provides **three main ways** to handle events:

1. **Inline event handlers** (HTML)
2. **DOM property handlers**
3. **addEventListener** (recommended)

Key points:

- Events are objects (`event`)
- Handlers are functions
- `addEventListener` allows multiple handlers and better control

---

### Example 1: Inline event handler (not recommended)

```html
<button onclick="sayHi()">Click</button>

<script>
  function sayHi() {
    alert("Hi");
  }
</script>
```

---

### Example 2: DOM property handler

```js
const btn = document.querySelector("button");

btn.onclick = function () {
  console.log("Clicked");
};
```

Limitation: only **one handler** per event.

---

### Example 3: addEventListener (best practice)

```js
const btn = document.querySelector("button");

btn.addEventListener("click", function (event) {
  console.log("Clicked");
});
```

Benefits:

- Multiple listeners
- Better control
- Can remove listener

---

### Interview-specific answer

Events in JavaScript are handled by attaching **event listeners** to elements. The recommended approach is using `addEventListener` because it supports multiple handlers and provides better control over event behavior.

## Q37. What is event delegation and why is it useful?

### Concept

**Event delegation** is a technique where you **attach a single event listener to a parent element** instead of adding listeners to multiple child elements.

It works because of **event bubbling**:

- An event starts from the target element
- Then bubbles up to its parent elements

Using this, the parent can **handle events for its children**.

Key points:

- Uses **event bubbling**
- One listener handles many elements
- Works even for **dynamically added elements**

---

### Example 1: Without event delegation

```js
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("Item clicked");
  });
});
```

Problem: inefficient if many items or dynamic items.

---

### Example 2: With event delegation

```js
const list = document.querySelector("#list");

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("item")) {
    console.log("Item clicked");
  }
});
```

Single listener handles all `.item` clicks.

---

### Example 3: Dynamic elements support

```js
const list = document.querySelector("#list");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.innerText);
  }
});

// New <li> added later still works
```

---

### Interview-specific answer

Event delegation is attaching one event listener to a parent element to handle events from its child elements using event bubbling. It improves performance, reduces memory usage, and works well with dynamically added elements.

## Q38. How do you add and remove an event listener from an element?

### Concept

JavaScript uses **`addEventListener`** to attach an event handler and **`removeEventListener`** to detach it.

Important rules:

- The **same function reference** must be used to remove the listener
- Anonymous functions **cannot be removed**
- Works on any DOM element

---

### Example 1: Adding an event listener

```js
const btn = document.querySelector("button");

function handleClick() {
  console.log("Button clicked");
}

btn.addEventListener("click", handleClick);
```

---

### Example 2: Removing an event listener

```js
btn.removeEventListener("click", handleClick);
```

Listener is removed because function reference is same.

---

### Example 3: Wrong way (cannot remove)

```js
btn.addEventListener("click", function () {
  console.log("Clicked");
});

btn.removeEventListener("click", function () {
  console.log("Clicked");
});
```

This fails because both are different function objects.

---

### Interview-specific answer

Use `addEventListener` to attach events and `removeEventListener` with the **same function reference** to remove them. Anonymous functions cannot be removed because their reference is lost.

## Q39. Can you explain how `this` works in event handlers?

### Concept

In JavaScript event handlers, the value of **`this` depends on how the handler is defined**.

Main rules:

- In **regular functions**, `this` refers to the **element that received the event**
- In **arrow functions**, `this` is **lexically bound** (taken from outer scope), not the element
- `event.target` always refers to the **actual element clicked**

---

### Example 1: `this` in regular function

```js
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(this); // button element
});
```

Here, `this` points to the element on which the listener is attached.

---

### Example 2: `this` in arrow function

```js
btn.addEventListener("click", () => {
  console.log(this); // window or undefined (strict mode)
});
```

Arrow functions do **not** have their own `this`.

---

### Example 3: Using `event.target`

```js
btn.addEventListener("click", function (event) {
  console.log(event.target); // exact element clicked
  console.log(this); // element with listener
});
```

Useful when handling delegated events.

---

### Interview-specific answer

In event handlers, `this` refers to the element that received the event when using a regular function. With arrow functions, `this` does not point to the element because arrow functions inherit `this` from their surrounding scope.

## Q40. What is the difference between `event.preventDefault()` and `event.stopPropagation()`?

### Concept

Both methods control **event behavior**, but they solve **different problems**.

- `preventDefault()` → stops **default browser action**
- `stopPropagation()` → stops **event bubbling/capturing**

They can be used **independently or together**.

---

### Example 1: `event.preventDefault()`

```js
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form not submitted");
});
```

Default action stopped:

- Page refresh
- Form submit
- Link navigation

---

### Example 2: `event.stopPropagation()`

```js
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked");
});
```

Clicking child:

- Child handler runs
- Parent handler does **not** run

---

### Example 3: Using both together

```js
link.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});
```

Stops:

- Default action
- Event bubbling

---

### Interview-specific answer

`event.preventDefault()` stops the browser’s default behavior, while `event.stopPropagation()` stops the event from bubbling to parent elements. They solve different problems and are often used together in real applications.

## Q41. What is the difference between localStorage, sessionStorage, and cookies?

### Concept

All three are used to **store data on the client (browser)**, but they differ in **size, lifetime, scope, and usage**.

**1. localStorage**

- Stores data **persistently**
- Data survives **browser restart**
- Shared across all tabs of same origin
- Stores data as **key–value strings**

**2. sessionStorage**

- Stores data for **one browser tab/session**
- Data is cleared when **tab is closed**
- Not shared across tabs
- Also key–value strings

**3. Cookies**

- Small pieces of data sent with **every HTTP request**
- Can have **expiry time**
- Used mainly for **auth, sessions, tracking**
- Automatically sent to server

---

### Example 1: localStorage

```js
localStorage.setItem("theme", "dark");
localStorage.getItem("theme"); // "dark"
localStorage.removeItem("theme");
```

---

### Example 2: sessionStorage

```js
sessionStorage.setItem("user", "Tanish");
sessionStorage.getItem("user"); // "Tanish"
// cleared when tab is closed
```

---

### Example 3: Cookies

```js
document.cookie = "token=abc123; expires=Fri, 31 Dec 2026 12:00:00 UTC; path=/";
```

---

### Interview-specific answer

- **localStorage** → persistent storage, large size, client-only
- **sessionStorage** → tab-based storage, cleared on tab close
- **cookies** → small size, sent with every request, used for authentication and sessions

## Q42. What is Cross-Site Scripting (XSS) and how can you prevent it?

### Concept

**Cross-Site Scripting (XSS)** is a **security vulnerability** where an attacker injects **malicious JavaScript** into a trusted website.
That script runs in the **victim’s browser** and can steal data like cookies, tokens, or perform actions on behalf of the user.

**Why it happens**

- Application trusts **user input**
- Input is rendered in HTML/JS **without sanitization or encoding**

**Types of XSS**

1. **Stored XSS** – malicious script stored in DB (comments, posts)
2. **Reflected XSS** – script comes from request (URL, query params)
3. **DOM-based XSS** – happens via client-side JS DOM manipulation

---

### Example 1: Vulnerable code

```js
// User input directly inserted into HTML
element.innerHTML = userInput;
```

If user enters:

```html
<script>
  alert("Hacked");
</script>
```

Script executes in browser.

---

### Example 2: Safe approach (use textContent)

```js
element.textContent = userInput;
```

Text is rendered, script is not executed.

---

### Example 3: Encoding user input

```js
function escapeHTML(str) {
  return str.replace(
    /[&<>"']/g,
    (match) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[match],
  );
}
```

---

### Prevention techniques

- Never trust user input
- Use `textContent` instead of `innerHTML`
- Sanitize input on server and client
- Use **Content Security Policy (CSP)**
- Escape HTML before rendering
- Avoid inline JavaScript

---

### Interview-specific answer

XSS is a security attack where malicious JavaScript is injected into a web page and executed in the user’s browser. It is prevented by sanitizing user input, encoding output, avoiding `innerHTML`, and using Content Security Policy.

## Q43. What is Cross-Origin Resource Sharing (CORS) and how does it work?

### Concept

**CORS (Cross-Origin Resource Sharing)** is a **browser security mechanism** that controls **which origins are allowed to access resources of another origin**.

By default, browsers follow **Same-Origin Policy (SOP)**:

- Same protocol
- Same domain
- Same port

If any one is different → request is **blocked by browser**, not server.

CORS allows the **server to relax SOP** by sending special HTTP headers.

_or we can say_

CORS allows a server to explicitly permit cross-origin requests by sending HTTP headers, creating controlled exceptions to the browser’s Same-Origin Policy.

**_Simply means_**

Normally, SOP (Same-Origin Policy) blocks a website from accessing data from another website for security.

CORS is a permission system where:

> The server says:
> “It’s okay, I allow this other website to access my data.”

So yes — CORS allows the server to relax SOP, but only for requests it explicitly allows.

**_Even simpler (real-life example)_**

- SOP is like:
  “Only people from my house can enter.”
- CORS is like the house owner saying:
  “I allow this specific guest from another house to enter.”

**_The browser enforces SOP,_**
**_but follows CORS rules if the server allows it._**

### Example 1: Same-Origin vs Cross-Origin

```text
Frontend: https://example.com
API:      https://api.example.com
```

This is **cross-origin** (different subdomain).

Browser blocks it unless CORS headers are present.

---

### Example 2: CORS headers from server

```http
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type, Authorization
```

Meaning:

- Allow requests from `https://example.com`
- Allow GET and POST methods
- Allow custom headers

---

### Example 3: Preflight request (OPTIONS)

For **non-simple requests**, browser sends a preflight request:

```http
OPTIONS /api/data
```

Server responds:

```http
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: POST
Access-Control-Allow-Headers: Authorization
```

Only then actual request is sent.

---

### How CORS works (flow)

1. Browser sends request to another origin
2. Browser checks server response headers
3. If `Access-Control-Allow-Origin` is valid → allow
4. Else → block response in browser

Important:

- Request **reaches server**
- Browser blocks **response access**, not the request

---

### Interview-specific answer

CORS is a browser security mechanism that allows a server to specify which origins can access its resources using HTTP headers. It works by validating `Access-Control-Allow-Origin` and related headers, and for non-simple requests, using a preflight OPTIONS request before sending the actual request.

## Q44. How does Content Security Policy (CSP) help in preventing security attacks?

### Concept

**Content Security Policy (CSP)** is a **browser-enforced security rule set** that defines **which sources are allowed** to load and execute content on a web page.

Main purpose:

- Prevent **XSS (Cross-Site Scripting)**
- Block **malicious script injection**
- Control data leaks

CSP is applied using **HTTP response headers** or `<meta>` tag.

---

### Example 1: Basic CSP

```http
Content-Security-Policy: default-src 'self'
```

Allows resources only from the same origin.
Blocks inline scripts and external injected code.

---

### Example 2: Allow trusted script sources

```http
Content-Security-Policy:
  script-src 'self' https://cdn.trusted.com
```

Only scripts from same origin and trusted CDN are allowed.

---

### Example 3: Blocking inline scripts

```http
Content-Security-Policy: script-src 'self'
```

This will block:

```html
<script>
  alert("XSS");
</script>
```

---

### Interview-specific answer

CSP prevents security attacks by restricting the sources from which scripts and resources can be loaded. Even if malicious code is injected, the browser blocks its execution based on CSP rules, making it a strong defense against XSS.

## Q45. What tools and techniques do you use for debugging JavaScript code?

### Concept

JavaScript debugging means **finding and fixing runtime, logic, and async issues**.
Main idea: **observe execution, inspect state, and narrow down the failure point**.

Common tools + techniques:

- Browser **DevTools**
- `console` methods
- Breakpoints
- Stack traces
- Source maps
- Logging + isolation

---

### Example 1: console debugging

```js
console.log("value:", x);
console.warn("something looks off");
console.error("error occurred");
console.table(users);
```

Used to quickly inspect values and flow.

---

### Example 2: Breakpoints (DevTools)

```js
function calculate(a, b) {
  debugger; // pauses execution here
  return a + b;
}
```

Browser pauses execution, lets you:

- Inspect variables
- Step over / into functions
- Check call stack

---

### Example 3: Try–catch for runtime errors

```js
try {
  JSON.parse("{invalid}");
} catch (err) {
  console.error(err.message);
}
```

Helps handle and debug unexpected failures.

---

### Common debugging techniques

- Use **breakpoints** instead of only logs
- Check **call stack** to trace error origin
- Reproduce bug in **small isolated code**
- Debug async code using **network + promise stack**
- Use **source maps** for minified code

---

### Interview-specific answer

I use browser DevTools with breakpoints, console methods, and stack traces to debug JavaScript. I isolate the issue, inspect variables at runtime, and use try–catch and source maps for better error tracking, especially in async code.

## Q46. How do you debug a JavaScript application in the browser?

### Concept

Browser debugging is done using **Developer Tools (DevTools)**, which allow you to **pause execution, inspect variables, and trace errors in real time**.

Main focus areas:

- **Sources** panel
- **Console**
- **Network**
- **Call stack**

---

### Example 1: Using breakpoints

```js
function fetchData() {
  debugger; // execution pauses here
  console.log("API call");
}
```

You can also click line numbers in **Sources tab** to set breakpoints.

---

### Example 2: Inspecting errors in Console

```js
console.log(user);
console.error("Failed to load data");
```

Console shows:

- Runtime errors
- Stack trace
- Line number

---

### Example 3: Debugging async code

```js
fetch("/api/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

Use:

- **Network tab** to inspect request/response
- **Promise stack traces** to trace async errors

---

### Browser debugging steps

1. Open DevTools (F12)
2. Check **Console** for errors
3. Set **breakpoints** in Sources
4. Step through code (step over / into)
5. Inspect variables and call stack
6. Use Network tab for API issues

---

### Interview-specific answer

I debug JavaScript in the browser using DevTools by setting breakpoints, inspecting variables in the Sources panel, checking console errors and stack traces, and using the Network tab to debug API and async issues.

## Q47. Explain the concept and use of breakpoints

### Concept

A **breakpoint** is a point where **JavaScript execution is paused** so you can inspect the program state at that exact moment.

Used to:

- Inspect variable values
- Understand control flow
- Debug logic and runtime errors
- Trace async and sync execution

Breakpoints are mainly used in **browser DevTools** and IDEs.

---

### Example 1: Line breakpoint (DevTools)

```js
function add(a, b) {
  let result = a + b; // breakpoint here
  return result;
}
```

Execution pauses at the marked line, allowing inspection of:

- `a`, `b`, `result`
- Call stack

---

### Example 2: Using `debugger` keyword

```js
function processData(data) {
  debugger; // pauses execution
  return data.length;
}
```

Equivalent to a manual breakpoint in DevTools.

---

### Example 3: Conditional breakpoint

```js
for (let i = 0; i < 10; i++) {
  console.log(i); // pause only when i === 5
}
```

Breakpoint condition:

```text
i === 5
```

---

### Uses of breakpoints

- Step through code line by line
- Step into / over functions
- Inspect scope variables
- Analyze call stack
- Debug async callbacks

---

### Interview-specific answer

Breakpoints pause JavaScript execution at a specific line, allowing inspection of variables and call stack. They help understand program flow and are commonly used via browser DevTools or the `debugger` statement to debug logic and runtime issues.

## Q48. How do you handle exceptions in JavaScript?

### Concept

**Exception handling** in JavaScript is used to **catch runtime errors** and prevent the application from crashing.

JavaScript provides:

- `try`
- `catch`
- `finally`
- `throw`

Used for:

- Handling unexpected failures
- Graceful error recovery
- Custom error handling

---

### Example 1: Basic try–catch

```js
try {
  let data = JSON.parse("{invalid}");
} catch (err) {
  console.log(err.message);
}
```

Error is caught and handled without breaking the app.

---

### Example 2: Custom error using throw

```js
function withdraw(amount) {
  if (amount < 0) {
    throw new Error("Invalid amount");
  }
  return "Success";
}
```

---

### Example 3: finally block

```js
try {
  console.log("Start");
} catch (e) {
  console.log("Error");
} finally {
  console.log("Always runs");
}
```

---

### Async exception handling

```js
async function fetchData() {
  try {
    let res = await fetch("/api");
    let data = await res.json();
  } catch (err) {
    console.error(err);
  }
}
```

---

### Interview-specific answer

Exceptions in JavaScript are handled using try–catch blocks. Errors can be thrown manually using `throw`, and `finally` is used for cleanup. For async code, errors are handled using try–catch with async/await or `.catch()` with promises.

## Q49. What techniques can be used to improve JavaScript performance?

### Concept

JavaScript performance mainly depends on **execution speed, memory usage, and rendering efficiency**.
Key idea: **do less work, do it faster, and do it at the right time**.

Main areas:

- Reduce unnecessary computations
- Optimize DOM operations
- Control async tasks
- Reduce memory usage

---

### Example 1: Avoid unnecessary DOM access

```js
// Bad: DOM accessed multiple times
for (let i = 0; i < 1000; i++) {
  document.getElementById("box").innerText = i;
}

// Good: cache DOM reference
const box = document.getElementById("box");
for (let i = 0; i < 1000; i++) {
  box.innerText = i;
}
```

---

### Example 2: Debouncing expensive operations

```js
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

window.addEventListener(
  "resize",
  debounce(() => {
    console.log("Resize handled");
  }, 300),
);
```

---

### Example 3: Use efficient loops and methods

```js
// Bad: unnecessary callback overhead
arr.forEach((item) => {
  sum += item;
});

// Better for performance-critical code
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
```

---

### Interview-specific answer

To improve JavaScript performance:

- Minimize DOM manipulation and reflows
- Use debouncing/throttling for frequent events
- Avoid unnecessary re-renders and computations
- Use async operations properly (async/await, promises)
- Reduce memory leaks by cleaning up listeners and references
- Write efficient loops and algorithms

## Q50. How does JavaScript minification and bundling contribute to performance?

### Concept

Minification and bundling are **build-time optimizations** that reduce how much JavaScript the browser downloads and processes.

- **Minification** → removes unnecessary characters
  (spaces, new lines, comments, long variable names)

- **Bundling** → combines multiple JS files into **one or few files**

Goal:
**smaller files + fewer network requests = faster load**

---

### Example 1: Minification

```js
// Original
function add(a, b) {
  return a + b;
}

// Minified
function add(a, b) {
  return a + b;
}
```

---

### Example 2: Bundling multiple files

```js
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
console.log(add(2, 3));
```

After bundling →
One optimized JS file sent to browser instead of many.

---

### Example 3: Tree shaking (with bundling)

```js
// utils.js
export function add() {}
export function sub() {}

// app.js
import { add } from "./utils.js";
```

Bundler removes `sub()` because it is unused.

---

### Interview-specific answer

Minification reduces JavaScript file size by removing unnecessary characters.
Bundling reduces the number of network requests by combining files.
Together, they improve load time, parsing speed, and overall application performance.

## Q51. Discuss the importance of web page loading time and performance?

### Concept

Web page loading time directly affects **user experience, engagement, and business metrics**.

Key idea:
**Slower pages = users leave early**

Performance depends on:

- Network requests
- JavaScript execution
- Rendering and painting
- Resource size (JS, CSS, images)

---

### Example 1: Impact on user behavior

```js
// Heavy JS blocks rendering
while (true) {}
```

Blocking code delays page load and makes UI unresponsive.

---

### Example 2: Optimized loading

```html
<script src="app.js" defer></script>
```

`defer` allows HTML to load first, improving perceived speed.

---

### Example 3: Lazy loading

```html
<img src="banner.jpg" loading="lazy" />
```

Loads image only when needed, reducing initial load time.

---

### Interview-specific answer

Fast loading improves user experience, reduces bounce rate, and increases conversions.
Better performance also helps SEO, accessibility, and makes applications feel responsive and reliable.

## Q51.1 Lazy Loading and `defer` — pros & negatives (complete, step-by-step)

---

### 1) Lazy Loading

#### Concept

Lazy loading loads **non-critical resources only when they are needed** (mostly images, iframes).

---

#### Without Lazy Loading

```html
<img src="banner.jpg" />
```

#### Flow

1. HTML parsing starts
2. `<img>` encountered
3. Image requested immediately
4. Network + decode happens
5. Initial page load slows

---

#### With Lazy Loading

```html
<img src="banner.jpg" loading="lazy" />
```

#### Flow

1. HTML parsing starts
2. Browser sees `loading="lazy"`
3. Image request is delayed
4. Image loads when near viewport
5. Faster initial load

---

#### Pros of Lazy Loading

- Faster initial page load
- Reduced bandwidth usage
- Better performance on slow networks
- Improves Core Web Vitals (LCP)

---

#### Negatives of Lazy Loading

- Images may appear late (blank space while scrolling)
- Not suitable for above-the-fold content
- SEO issues if misused (important images not loaded early)
- Slight delay on first scroll

---

#### Interview-specific answer (Lazy Loading)

Lazy loading improves performance by delaying non-critical resources, but if used incorrectly it can cause delayed rendering and poor user experience.

---

### 2) `defer` attribute

#### Concept

`defer` delays **JavaScript execution** until HTML parsing is finished.

---

#### Without `defer`

```html
<script src="app.js"></script>
```

#### Flow

1. HTML parsing starts
2. Script tag encountered
3. Parsing stops
4. JS downloads
5. JS executes
6. Parsing resumes

---

#### With `defer`

```html
<script src="app.js" defer></script>
```

#### Flow

1. HTML parsing continues
2. JS downloads in parallel
3. DOM fully parsed
4. JS executes after DOM ready

---

#### Pros of `defer`

- Prevents render blocking
- Faster page rendering
- Safe DOM access without waiting for `DOMContentLoaded`
- Better user experience

---

#### Negatives of `defer`

- Not suitable for scripts that must run immediately
- Execution order matters when mixing deferred scripts
- Inline scripts cannot use `defer`
- Not useful for scripts depending on earlier blocking logic

---

#### Interview-specific answer (`defer`)

`defer` improves performance by preventing blocking during HTML parsing, but should not be used when scripts must execute immediately.

---

#### Final one-line recall

- Lazy loading → **controls resource load timing**
- `defer` → **controls script execution timing**

## Q52. Explain how lazy loading works in JavaScript?

### Concept

Lazy loading in JavaScript means **loading data, components, or resources only when required**, instead of loading everything at once.

Used for:

- Images
- Modules / components
- Data from APIs

Goal:
Reduce **initial load time** and **improve performance**.

---

### Example 1: Lazy loading images (JavaScript way)

```js
const images = document.querySelectorAll("img[data-src]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});

images.forEach((img) => observer.observe(img));
```

---

### Example 2: Lazy loading modules (dynamic import)

```js
button.addEventListener("click", async () => {
  const module = await import("./heavyModule.js");
  module.loadFeature();
});
```

---

### Example 3: Lazy loading API data

```js
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    fetchMoreData();
  }
});
```

---

### Interview-specific answer

Lazy loading in JavaScript loads resources only when needed using techniques like dynamic imports, Intersection Observer, or event-based loading, which improves performance and reduces initial load time.

## Q53. What are some JavaScript testing frameworks you know?

### Concept

JavaScript testing frameworks are tools used to **write, run, and manage tests** to ensure code works as expected.
They help catch bugs early and make code changes safer.

Testing types usually covered:

- Unit testing
- Integration testing
- End-to-end (E2E) testing

---

### Common JavaScript Testing Frameworks

1. **Jest**

- Most popular for frontend and React
- Comes with assertion, mocking, and test runner built-in

2. **Mocha**

- Flexible test framework
- Often used with Chai for assertions

3. **Chai**

- Assertion library
- Works with Mocha

4. **Jasmine**

- All-in-one testing framework
- No extra libraries needed

5. **Cypress**

- End-to-end (E2E) testing
- Tests real browser behavior

6. **Playwright**

- Modern E2E testing tool
- Cross-browser testing (Chrome, Firefox, Safari)

---

### Example 1: Jest (unit test)

```js
function sum(a, b) {
  return a + b;
}

test("adds two numbers", () => {
  expect(sum(2, 3)).toBe(5);
});
```

---

### Example 2: Mocha + Chai

```js
const expect = require("chai").expect;

describe("Sum function", () => {
  it("adds numbers", () => {
    expect(2 + 3).to.equal(5);
  });
});
```

---

### Example 3: Cypress (E2E)

```js
describe("Login page", () => {
  it("loads login page", () => {
    cy.visit("/login");
    cy.contains("Login");
  });
});
```

---

### Interview-specific answer

Popular JavaScript testing frameworks include **Jest**, **Mocha with Chai**, and **Jasmine** for unit testing, and **Cypress** or **Playwright** for end-to-end testing. They help ensure code correctness, prevent regressions, and improve code quality.

## Q54. How can you write unit tests for JavaScript code?

### Concept

Unit testing means **testing a single function or small piece of logic in isolation**.
Goal: verify **input → output** without depending on UI, network, or database.

Core ideas:

- Test one function at a time
- Use assertions to verify result
- Mock external dependencies

---

### Example 1: Simple unit test (Jest)

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;
```

```js
// math.test.js
const add = require("./math");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```

---

### Example 2: Testing edge cases

```js
test("handles negative numbers", () => {
  expect(add(-2, 3)).toBe(1);
});
```

---

### Example 3: Mocking dependency

```js
jest.mock("./api");

test("fetches user data", () => {
  expect(getUserName()).toBe("John");
});
```

---

### Interview-specific answer

Unit tests in JavaScript are written using frameworks like Jest or Mocha.
You write test cases for individual functions, use assertions to validate outputs, and mock external dependencies to keep tests isolated.

## Q55. What is Test-Driven Development (TDD) in JavaScript?

### Concept

Test-Driven Development (TDD) is a development approach where **tests are written before the actual code**.

TDD follows a strict cycle:
**Red → Green → Refactor**

---

### Step-by-step TDD Flow

1. **Red**
   Write a test that fails (feature not implemented yet)

2. **Green**
   Write minimum code to pass the test

3. **Refactor**
   Clean and optimize the code without breaking tests

---

### Example 1: Red (write test first)

```js
test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```

---

### Example 2: Green (write minimal code)

```js
function add(a, b) {
  return a + b;
}
```

---

### Example 3: Refactor (improve code safely)

```js
const add = (a, b) => a + b;
```

---

### Interview-specific answer

Test-Driven Development in JavaScript means writing tests before implementation.
Developers follow the Red-Green-Refactor cycle to build reliable, well-tested, and maintainable code.

## Q56. Can you explain the difference between unit and integration testing?

### Concept

Both are **automated testing types**, but they differ in **scope and purpose**.

- **Unit Testing** → tests a **single function or module**
- **Integration Testing** → tests **multiple modules working together**

Key idea:
Unit = small & isolated
Integration = combined & real flow

---

### Example 1: Unit Testing

```js
function add(a, b) {
  return a + b;
}

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```

Tests only one function, no dependency involved.

---

### Example 2: Integration Testing

```js
function fetchUser() {
  return getUserFromAPI();
}

test("fetch user name", async () => {
  const user = await fetchUser();
  expect(user.name).toBe("John");
});
```

Tests interaction between function and API module.

---

### Example 3: Real scenario

```js
// Login flow
validateInput() → callAPI() → storeToken()
```

- Unit test → test `validateInput()` alone
- Integration test → test full login flow together

---

### Interview-specific answer

Unit testing checks individual functions in isolation, while integration testing verifies that multiple components work together correctly. Unit tests are faster and simpler, whereas integration tests cover real application flow.

## Q84. What is the Document Object Model (DOM)?

### Concept

The **DOM (Document Object Model)** is a **tree-like representation of an HTML document** created by the browser.

- Browser converts HTML into **nodes (objects)**
- Each HTML element becomes a **node**
- JavaScript uses DOM to **read, change, add, or remove elements**
- DOM acts as a **bridge between HTML and JavaScript**

Structure:

- Document
  → html
  → head, body
  → elements, attributes, text

DOM is **not HTML**, it is an **in-memory object model**.

---

### Example 1: Accessing DOM element

```js
const title = document.getElementById("heading");
console.log(title.textContent);
```

---

### Example 2: Modifying DOM

```js
const btn = document.querySelector("button");
btn.style.backgroundColor = "blue";
btn.textContent = "Clicked";
```

---

### Example 3: Creating and appending element

```js
const p = document.createElement("p");
p.textContent = "Hello DOM";
document.body.appendChild(p);
```

---

### Interview-specific answer

The DOM is a **tree-structured object representation of an HTML document** that allows JavaScript to **dynamically access and manipulate webpage content, structure, and styles**.

## Q85. How do you create, append, or remove an element from the DOM?

### Concept

JavaScript provides **DOM APIs** to **create**, **insert**, and **remove** elements dynamically.

Main methods:

- `document.createElement()` → create element
- `appendChild()` / `append()` → add element
- `remove()` / `removeChild()` → delete element

DOM changes happen **in memory first**, then browser updates the UI.

---

### Example 1: Create and append an element

```js
const div = document.createElement("div");
div.textContent = "New Element";
document.body.appendChild(div);
```

---

### Example 2: Append at specific position

```js
const li = document.createElement("li");
li.textContent = "Item 4";

const ul = document.querySelector("ul");
ul.append(li);
```

---

### Example 3: Remove an element

```js
const item = document.getElementById("remove-me");
item.remove();
```

---

### Interview-specific answer

You create elements using `document.createElement()`, insert them using `appendChild()` or `append()`, and remove them using `remove()` or `removeChild()`. These APIs allow dynamic DOM manipulation.

## Q86. Describe different ways to find or access HTML elements in the DOM?

### Concept

JavaScript provides **multiple DOM selection methods** to access HTML elements.

They are mainly divided into:

- **ID-based**
- **Class-based**
- **Tag-based**
- **CSS selector-based**

Modern code prefers **CSS selector methods** for flexibility.

---

### Example 1: By ID

```js
const el = document.getElementById("title");
```

---

### Example 2: By class name and tag name

```js
const items = document.getElementsByClassName("item");
const divs = document.getElementsByTagName("div");
```

---

### Example 3: Using CSS selectors

```js
const first = document.querySelector(".card");
const all = document.querySelectorAll(".card");
```

---

### Interview-specific answer

HTML elements can be accessed using `getElementById`, `getElementsByClassName`, `getElementsByTagName`, and modern CSS selector methods like `querySelector` and `querySelectorAll`.

## Q87. Explain the difference between innerHTML and textContent?

### Concept

Both `innerHTML` and `textContent` are used to **read or update content inside an element**, but they behave differently.

Key difference:

- `innerHTML` → works with **HTML**
- `textContent` → works with **plain text only**

Security and performance also differ.

---

### Example 1: innerHTML (parses HTML)

```js
const div = document.getElementById("box");
div.innerHTML = "<strong>Hello</strong>";
```

Result: **Hello** (bold)

---

### Example 2: textContent (no HTML parsing)

```js
const div = document.getElementById("box");
div.textContent = "<strong>Hello</strong>";
```

Result: `<strong>Hello</strong>` (as text)

---

### Example 3: Security difference

```js
// Risky
div.innerHTML = userInput;

// Safe
div.textContent = userInput;
```

---

### Interview-specific answer

`innerHTML` parses and renders HTML inside an element, while `textContent` sets or gets only plain text. `textContent` is safer and faster, especially when handling user input.

## Q87.1 Why `textContent` is safe and `innerHTML` is unsafe?

### Concept

The **core reason** is **HTML parsing and execution**.

- `innerHTML` **parses the string as HTML**
- `textContent` **treats everything as plain text**

Because of this:

- `innerHTML` can **execute injected scripts**
- `textContent` **cannot execute anything**

This leads to **XSS (Cross-Site Scripting) risk**.

---

### What exactly happens internally?

#### `innerHTML`

- Browser **parses the string**
- Creates **DOM nodes**
- Executes **HTML + JS inside it**

#### `textContent`

- Browser **does NOT parse**
- Treats input as **literal text**
- No DOM creation, no execution

---

### Example 1: innerHTML (unsafe – XSS risk)

```js
const userInput = "<img src=x onerror=alert('Hacked')>";
div.innerHTML = userInput;
```

What happens:

- Browser parses `<img>`
- `onerror` executes
- JavaScript runs → **security breach**

---

### Example 2: textContent (safe)

```js
const userInput = "<img src=x onerror=alert('Hacked')>";
div.textContent = userInput;
```

What happens:

- Browser prints the string as text
- No HTML parsing
- No script execution

Output:

```
<img src=x onerror=alert('Hacked')>
```

---

### Example 3: Real-world scenario

```js
// Chat message / comment system

// Unsafe
messageBox.innerHTML = userMessage;

// Safe
messageBox.textContent = userMessage;
```

If user sends:

```html
<script>
  stealCookies();
</script>
```

- `innerHTML` → script runs
- `textContent` → script shown as text

---

### Performance note

- `innerHTML` → slower (DOM parsing + reflow)
- `textContent` → faster (simple text update)

---

### Interview-specific answer

`innerHTML` is unsafe because it parses and executes HTML, which allows XSS attacks if user input is injected. `textContent` is safe because it treats input as plain text, does not parse HTML, and never executes scripts.

## Q88. How do you handle DOM events in a memory-efficient way?

### Concept

Memory-efficient event handling means:

- **Avoid attaching too many event listeners**
- **Prevent memory leaks**
- **Reuse listeners when possible**

The **best and recommended approach** is **Event Delegation**.

Other good practices:

- Remove unused listeners
- Avoid inline event handlers
- Use one listener instead of many

---

### Example 1: Problem (inefficient way)

```js
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Clicked");
  });
});
```

Issue:

- Too many listeners
- High memory usage
- Poor performance for large lists

---

### Example 2: Event Delegation (efficient)

```js
document.getElementById("container").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    console.log("Clicked");
  }
});
```

Why efficient:

- Single event listener
- Uses event bubbling
- Handles dynamic elements also

---

### Example 3: Removing event listener

```js
function handleClick() {
  console.log("Clicked");
}

btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);
```

Prevents:

- Memory leaks
- Unwanted behavior

---

### Interview-specific answer

DOM events should be handled efficiently using **event delegation**, minimizing the number of event listeners, and removing unused listeners to avoid memory leaks and improve performance.
