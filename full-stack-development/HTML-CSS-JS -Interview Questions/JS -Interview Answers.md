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
