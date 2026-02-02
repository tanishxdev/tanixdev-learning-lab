# JavaScript Interview Questions and Answers

---

**Topic : JavaScript Fundamentals**


## 0. What is JavaScript?

---

### 1. Concept

JavaScript is a **high-level, dynamically typed, interpreted programming language** used to add **behavior and interactivity** to web pages.
It runs in the **browser** and also on the **server** using environments like **Node.js**.

In a web application:

| Layer | Language Example | Purpose                 |
| ----- | ---------------- | ----------------------- |
| HTML  | Structure        | Page content            |
| CSS   | Styling          | Look and feel           |
| JS    | Behavior         | Logic and interactivity |

JavaScript follows the **ECMAScript** standard and supports:

* Object-Oriented Programming
* Functional Programming
* Event-driven programming
* Asynchronous programming (Promises, async/await)

---

### 2. Why was JavaScript created?

It was created to make websites **interactive**. Earlier, pages were static and could not:

* validate user input
* respond to user actions
* update content without refreshing the page

JavaScript enables such interactive behavior.

---

### 3. Key Features (Short Points)

| Feature             | Description                                            |
| ------------------- | ------------------------------------------------------ |
| Interpreted         | Runs line-by-line without compilation                  |
| Dynamically Typed   | Variable types are decided at runtime                  |
| Prototype-based OOP | Uses prototypes instead of classical classes           |
| Single-threaded     | Executes one task at a time (event loop handles async) |
| Cross-platform      | Works in browsers and Node.js                          |

---

### 4. Example Code with Explanation

```javascript
// A simple JavaScript example

// 1. Variable declaration
let name = "Tanish";              // String data stored in variable 'name'

// 2. Function definition
function greet(user) {            // Function that accepts one argument
  return "Hello, " + user;        // Returns a greeting message
}

// 3. Function call
let message = greet(name);        // 'greet' is called with 'Tanish'
console.log(message);             // Output: Hello, Tanish
```

Explanation (line-by-line):

1. A variable `name` is created and stores text.
2. A function `greet()` is defined, which takes a name and returns a greeting.
3. The function is called and result is stored in `message`.
4. `console.log` prints the output.

Expected Output:

```
Hello, Tanish
```

---

### 5. Where does JavaScript run?

JavaScript can run in:

| Environment | Example Tools           |
| ----------- | ----------------------- |
| Browser     | Chrome, Firefox, Safari |
| Server      | Node.js                 |
| Desktop     | Electron apps           |
| Mobile      | React Native            |
| Database    | MongoDB functions       |

---

### 6. What can JavaScript do?

JavaScript is used for:

1. Web Interactivity
2. Form Validation
3. Animations and Effects
4. Fetching API data
5. Single Page Applications (React, Vue, Angular)
6. Backend services (Node.js, Express)
7. Realtime apps (Chat, Games)

---

### 7. Notes

| Key Point                | Explanation                      |
| ------------------------ | -------------------------------- |
| Standard name            | ECMAScript                       |
| JS is not Java           | They are different languages     |
| JS is async-capable      | Promises, callbacks, async/await |
| JS executes in V8 engine | Chrome and Node.js use V8        |

---

### 8. Interview-Ready Summary

JavaScript is a **high-level, dynamically typed, single-threaded, interpreted programming language** used to create **interactive and dynamic web applications**. It runs in the browser and on the server using **Node.js**. It supports **object-oriented, functional, and asynchronous programming**, making it one of the most important languages in modern software development.

---

### 9. Quick Practice Interview Questions

1. What is JavaScript and why is it used?
2. Is JavaScript compiled or interpreted?
3. Why is JavaScript called dynamically typed?
4. What is Node.js and how does it relate to JavaScript?
5. Difference between Java and JavaScript.
6. What is the V8 engine?
7. What is the ECMAScript standard?

---

## 1. What are the data types present in JavaScript?

---

### 1. Concept

JavaScript has **two broad categories of data types**:

1. **Primitive Data Types**
2. **Non-Primitive (Reference) Data Types**

This classification is important because it affects:

* **How values are stored in memory**
* **How values are copied**
* **How values are compared**

JavaScript is a **dynamically typed language**, which means:

* You do **not** declare the type explicitly
* The type is decided **at runtime**

---

### 2. Primitive Data Types

Primitive types store **single, immutable values** and are copied **by value**.

JavaScript has **7 primitive data types**:

| Type        | Description                          |
| ----------- | ------------------------------------ |
| `string`    | Text data                            |
| `number`    | Integer and floating-point numbers   |
| `boolean`   | `true` or `false`                    |
| `undefined` | Variable declared but not assigned   |
| `null`      | Intentional absence of value         |
| `symbol`    | Unique and immutable identifier      |
| `bigint`    | Large integers beyond `Number` limit |

---

### 3. Primitive Types – Code Examples

```javascript
let name = "Tanish";     // string
let age = 21;           // number
let isStudent = true;   // boolean

let score;              // undefined
let result = null;     // null

let id = Symbol("id"); // symbol
let bigNum = 123n;     // bigint
```

Explanation:

* `undefined` → JS assigns this automatically
* `null` → explicitly assigned by developer
* `symbol` → always unique
* `bigint` → used for very large numbers

---

### 4. Non-Primitive (Reference) Data Types

Non-primitive types store **collections or complex structures** and are copied **by reference**.

Main reference types:

| Type     | Description      |
| -------- | ---------------- |
| Object   | Key-value pairs  |
| Array    | Ordered list     |
| Function | Callable object  |
| Date     | Date & time      |
| RegExp   | Pattern matching |

---

### 5. Non-Primitive Types – Code Examples

```javascript
let user = {
  name: "Tanish",
  age: 21
};

let numbers = [1, 2, 3, 4];

function greet() {
  return "Hello";
}
```

Explanation:

* Objects and arrays are stored in **heap memory**
* Variables hold **references**, not actual values

---

### 6. Important Memory Difference (Primitive vs Reference)

#### Primitive (Copied by Value)

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Changing `b` does **not** affect `a`.

---

#### Reference (Copied by Reference)

```javascript
let obj1 = { x: 10 };
let obj2 = obj1;

obj2.x = 20;

console.log(obj1.x); // 20
console.log(obj2.x); // 20
```

Both point to the **same memory location**.

---

### 7. `typeof` Operator (Interview Favorite)

```javascript
typeof "hello"     // "string"
typeof 10          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object"  ❌ (known JS bug)
typeof {}          // "object"
typeof []          // "object"
typeof function(){} // "function"
```

Important note:

* `typeof null === "object"` is a **historical bug** in JavaScript.

---

### 8. Interview-Ready Summary

JavaScript has **primitive** and **non-primitive** data types.
Primitive types (`string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`) store **immutable values** and are copied **by value**.
Non-primitive types (`object`, `array`, `function`) store **references** and are copied **by reference**.
JavaScript determines data types **at runtime**, making it a **dynamically typed language**.

---

### 9. Quick Practice Interview Questions

1. How many primitive data types are there in JavaScript?
2. What is the difference between `null` and `undefined`?
3. Why is `typeof null` equal to `"object"`?
4. Difference between primitive and reference types?
5. Is array a primitive type?
6. What is `bigint` and why was it introduced?
7. Are functions objects in JavaScript?

---


## 2. What is the difference between `null` and `undefined`?

---

### 1. Concept

Both `null` and `undefined` represent **absence of value**, but they are used in **different situations** and mean **different things**.

The key idea:

* **`undefined`** → Value is **not assigned** (default by JavaScript)
* **`null`** → Value is **explicitly set to empty** (intentional by developer)

This distinction is **very important in interviews**, debugging, and real-world code.

---

### 2. `undefined` — Meaning and Behavior

`undefined` means:

> “This variable exists, but no value has been assigned to it yet.”

JavaScript assigns `undefined` automatically in many cases.

#### Common cases where `undefined` appears:

1. Variable declared but not initialized
2. Function with no return statement
3. Missing function arguments
4. Accessing non-existing object properties

---

### 3. `undefined` — Code Examples

```javascript
// 1. Variable declared but not assigned
let a;
console.log(a); // undefined

// 2. Function without return
function test() {}
console.log(test()); // undefined

// 3. Missing function argument
function greet(name) {
  console.log(name);
}
greet(); // undefined

// 4. Non-existing object property
let user = { name: "Tanish" };
console.log(user.age); // undefined
```

Explanation:

* JavaScript itself provides `undefined`
* You usually **do not assign it manually**

---

### 4. `null` — Meaning and Behavior

`null` means:

> “There is no value here — and this is intentional.”

It is **explicitly assigned by the developer** to represent:

* empty value
* cleared reference
* no object

---

### 5. `null` — Code Examples

```javascript
let result = null; // explicitly set

console.log(result); // null
```

Real-world use cases:

* Reset a value
* Indicate “no data”
* Clear an object reference

Example:

```javascript
let selectedUser = { id: 1 };
selectedUser = null; // user deselected intentionally
```

---

### 6. Key Differences (Very Important Table)

| Aspect        | `undefined`             | `null`                  |
| ------------- | ----------------------- | ----------------------- |
| Assigned by   | JavaScript              | Developer               |
| Meaning       | Value not assigned      | Intentional empty value |
| Type          | `undefined`             | `object` (JS bug)       |
| Use case      | Default / missing value | Explicit absence        |
| Memory intent | Unknown                 | Known empty             |

---

### 7. `typeof` and Equality Checks (Interview Trap)

```javascript
typeof undefined; // "undefined"
typeof null;      // "object" ❌ (bug)
```

Equality behavior:

```javascript
null == undefined   // true  (loose equality)
null === undefined  // false (strict equality)
```

Explanation:

* `==` performs **type coercion**
* `===` checks **type + value**

Always use `===` in real projects.

---

### 8. Memory-Level Intuition (Simple)

* `undefined` → JavaScript hasn’t assigned memory/value yet
* `null` → Memory exists, value intentionally points to “nothing”

Think of it as:

* `undefined` → “Not decided”
* `null` → “Decided to be empty”

---

### 9. Interview-Ready Summary

`undefined` means a variable exists but has not been assigned a value by JavaScript, while `null` represents an intentional absence of value assigned by the developer. `undefined` is a primitive type, whereas `null` is an object due to a historical JavaScript bug. Although `null == undefined` is true, they are not strictly equal. In practice, `undefined` indicates missing data, and `null` indicates cleared or empty data.

---

### 10. Quick Practice Interview Questions

1. Who assigns `undefined` — JavaScript or developer?
2. Why is `typeof null` equal to `"object"`?
3. Is `null` a primitive type?
4. Difference between `==` and `===` with `null` and `undefined`?
5. When should you use `null` instead of `undefined`?
6. Can you manually assign `undefined`? Should you?
7. What value is returned by a function with no return statement?

---

## 3. How does JavaScript handle type coercion?

---

### 1. Concept

**Type coercion** is the process where JavaScript **automatically converts one data type into another** during operations.

JavaScript does this because it is a **dynamically typed language**.

There are **two kinds of type coercion**:

1. **Implicit Coercion** → Done automatically by JavaScript
2. **Explicit Coercion** → Done manually by the developer

This topic is a **top interview favorite** because it explains many “weird” JavaScript behaviors.

---

### 2. Implicit Type Coercion (Automatic)

Implicit coercion happens when JavaScript tries to **make operands compatible**.

#### Example 1: String + Number

```javascript
let result = "5" + 2;
console.log(result); // "52"
```

Explanation:

* `+` with a string → converts number to string
* `"5" + "2"` → `"52"`

---

#### Example 2: Number with Other Operators

```javascript
let result = "5" - 2;
console.log(result); // 3
```

Explanation:

* `-` does NOT work with strings
* JavaScript converts `"5"` → `5`

Same for `*` and `/`:

```javascript
"6" * 2   // 12
"8" / 4   // 2
```

---

### 3. Boolean Coercion (Truthy & Falsy)

JavaScript converts values to `true` or `false` in conditions.

#### Falsy Values (Very Important)

Only these values are falsy:

```text
false
0
-0
0n
""   (empty string)
null
undefined
NaN
```

Everything else is **truthy**.

Example:

```javascript
if ("hello") {
  console.log("Runs");
}

if (0) {
  console.log("Never runs");
}
```

---

### 4. Equality Operator Coercion (`==`)

`==` performs **type coercion** before comparison.

```javascript
5 == "5"        // true
null == undefined // true
0 == false      // true
"" == false     // true
```

Why this is dangerous:

* Different values become equal after coercion

---

### 5. Strict Equality (`===`) – No Coercion

`===` compares **value + type**.

```javascript
5 === "5"        // false
null === undefined // false
0 === false      // false
```

**Best Practice:**
Always prefer `===` in real projects.

---

### 6. Explicit Type Coercion (Manual)

Explicit coercion means **you control the conversion**.

#### String Conversion

```javascript
String(10);      // "10"
10 + "";         // "10"
```

#### Number Conversion

```javascript
Number("10");    // 10
+"10";           // 10
Number("abc");   // NaN
```

#### Boolean Conversion

```javascript
Boolean(1);      // true
Boolean(0);      // false
Boolean("");     // false
```

---

### 7. Real Interview Traps (Must Know)

```javascript
[] + []          // ""
[] + {}          // "[object Object]"
{} + []          // 0 (in some contexts)
```

Reason:

* Arrays and objects are converted using `toString()` or `valueOf()`
* Execution context matters

Interviewers ask this to check **deep understanding**, not memorization.

---

### 8. Simple Mental Model (Very Important)

JavaScript follows this order:

1. If one operand is string and `+` is used → convert to string
2. For `- * /` → convert to number
3. For `==` → convert both sides to common type
4. For conditions → convert to boolean

---

### 9. Interview-Ready Summary

JavaScript handles type coercion by automatically converting values between types during operations. This is called implicit coercion and commonly occurs with operators like `+`, comparison using `==`, and conditional checks. Developers can also perform explicit coercion using `String()`, `Number()`, and `Boolean()`. Because coercion can cause unexpected results, strict equality (`===`) is preferred to avoid bugs.

---

### 10. Quick Practice Interview Questions

1. Difference between implicit and explicit coercion?
2. Why does `"5" + 2` give `"52"`?
3. Why is `5 == "5"` true but `5 === "5"` false?
4. List all falsy values in JavaScript.
5. What happens when you convert `"abc"` to a number?
6. Why should `==` be avoided?
7. What is truthy and falsy?

---

## 4. Explain the concept of hoisting in JavaScript

---

### 1. Concept

**Hoisting** is a JavaScript behavior where **declarations are moved to the top of their scope during the compilation phase**, before the code is executed.

Important clarification (very important for interviews):

> **Only declarations are hoisted, not initializations.**

JavaScript execution happens in **two phases**:

1. **Memory Creation Phase (Hoisting phase)**
2. **Execution Phase**

Hoisting happens in the **memory creation phase**.

---

### 2. What Gets Hoisted and How?

| Keyword / Entity     | Hoisted? | Initial Value in Memory |
| -------------------- | -------- | ----------------------- |
| `var`                | Yes      | `undefined`             |
| `let`                | Yes      | Uninitialized (TDZ)     |
| `const`              | Yes      | Uninitialized (TDZ)     |
| Function Declaration | Yes      | Entire function body    |
| Function Expression  | No       | Depends on variable     |
| Arrow Function       | No       | Depends on variable     |

---

### 3. Hoisting with `var`

```javascript
console.log(a); // undefined
var a = 10;
console.log(a); // 10
```

**What actually happens internally:**

```javascript
// Memory Creation Phase
var a = undefined;

// Execution Phase
console.log(a); // undefined
a = 10;
console.log(a); // 10
```

Key point:

* `var` is hoisted and initialized with `undefined`

---

### 4. Hoisting with `let` and `const` (Temporal Dead Zone)

```javascript
console.log(b); // ReferenceError
let b = 20;
```

Why error?

* `let` and `const` **are hoisted**
* But they stay in **Temporal Dead Zone (TDZ)** until execution reaches their declaration

TDZ:

> Time between entering scope and variable declaration where access is forbidden

Same for `const`:

```javascript
console.log(c); // ReferenceError
const c = 30;
```

---

### 5. Function Declaration Hoisting (Very Important)

```javascript
sayHello();

function sayHello() {
  console.log("Hello");
}
```

Output:

```
Hello
```

Reason:

* Entire function is hoisted
* Function body is available before execution

---

### 6. Function Expression Hoisting

```javascript
sayHi(); // TypeError

var sayHi = function () {
  console.log("Hi");
};
```

Why?

* `var sayHi` is hoisted → `undefined`
* `undefined()` → TypeError

With `let`:

```javascript
sayHi(); // ReferenceError

let sayHi = function () {
  console.log("Hi");
};
```

---

### 7. Arrow Function Hoisting

Arrow functions behave like function expressions.

```javascript
sayHey(); // ReferenceError

const sayHey = () => {
  console.log("Hey");
};
```

Reason:

* `const` in TDZ
* Arrow functions are not hoisted as functions

---

### 8. Visual Memory Model (Interview Explanation)

Think like this:

**Memory Phase**

* `var` → created + initialized to `undefined`
* `let / const` → created but not initialized
* Function declarations → fully stored

**Execution Phase**

* Code runs line-by-line
* Values are assigned

---

### 9. Common Interview Traps

```javascript
var x = 1;

function test() {
  console.log(x);
  var x = 2;
}

test(); // undefined
```

Explanation:

* `var x` inside function is hoisted
* Local `x` shadows global `x`

---

### 10. Interview-Ready Summary

Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the memory creation phase. Variables declared with `var` are hoisted and initialized with `undefined`, while `let` and `const` are hoisted but remain in the Temporal Dead Zone until initialized. Function declarations are fully hoisted, but function expressions and arrow functions are not. Understanding hoisting helps avoid unexpected `undefined` values and reference errors.

---

### 11. Quick Practice Interview Questions

1. Are `let` and `const` hoisted?
2. What is the Temporal Dead Zone?
3. Why does accessing `var` before declaration give `undefined`?
4. Why do function declarations work before definition?
5. Difference between function declaration and function expression hoisting?
6. What error occurs when accessing TDZ variables?
7. Explain hoisting in terms of execution phases.

---

## 5. What is scope in JavaScript?

---

### 1. Concept

**Scope** defines **where a variable or function is accessible** in your code.

In simple words:

> Scope answers the question: **“From where can I use this variable?”**

JavaScript uses **lexical (static) scoping**, meaning:

* Scope is decided by **where the code is written**, not how it is executed.

---

### 2. Types of Scope in JavaScript

JavaScript has **three main types of scope**:

1. **Global Scope**
2. **Function Scope**
3. **Block Scope**

---

### 3. Global Scope

Variables declared **outside any function or block** are in the global scope.

```javascript
let globalVar = "I am global";

function test() {
  console.log(globalVar);
}

test(); // I am global
```

Key points:

* Accessible **everywhere**
* Overusing global variables is **bad practice**
* Can cause name collisions

---

### 4. Function Scope

Variables declared **inside a function** are accessible **only inside that function**.

```javascript
function demo() {
  var x = 10;
  console.log(x);
}

demo();
console.log(x); // ReferenceError
```

Important:

* `var` is **function-scoped**
* `var` ignores block boundaries

---

### 5. Block Scope (`let` and `const`)

Block scope means variables are limited to `{}` blocks like:

* `if`
* `for`
* `while`

```javascript
if (true) {
  let a = 10;
  const b = 20;
}

console.log(a); // ReferenceError
console.log(b); // ReferenceError
```

But `var` does NOT respect block scope:

```javascript
if (true) {
  var c = 30;
}

console.log(c); // 30
```

---

### 6. Scope Chain (Very Important)

When JavaScript looks for a variable:

1. It first checks **current scope**
2. Then **outer scope**
3. Then **global scope**

This chain is called the **scope chain**.

```javascript
let x = 10;

function outer() {
  let y = 20;

  function inner() {
    console.log(x); // from global
    console.log(y); // from outer
  }

  inner();
}

outer();
```

---

### 7. Lexical Scope (Interview Keyword)

Lexical scope means:

> Inner functions can access variables of outer functions because of where they are **defined**.

```javascript
function outer() {
  let msg = "Hello";

  function inner() {
    console.log(msg);
  }

  inner();
}

outer();
```

Even if `inner()` is called later, it remembers its scope.

(This directly leads to **closures**, next question.)

---

### 8. Common Scope Interview Traps

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output: 3 3 3
```

Reason:

* `var` is function-scoped
* Same `i` is shared

Correct version:

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output: 0 1 2
```

---

### 9. Interview-Ready Summary

Scope in JavaScript defines the accessibility of variables and functions. JavaScript has global scope, function scope, and block scope. Variables declared with `var` are function-scoped, while `let` and `const` are block-scoped. JavaScript follows lexical scoping and uses a scope chain to resolve variable access, searching from inner scope to outer scope.

---

### 10. Quick Practice Interview Questions

1. What is scope in JavaScript?
2. Difference between function scope and block scope?
3. Why is `var` not block-scoped?
4. What is lexical scoping?
5. Explain scope chain with example.
6. Why does `let` fix the loop problem with `setTimeout`?
7. What happens if a variable is not found in any scope?

---

## 6. What is the difference between `==` and `===`?

---

### 1. Concept

JavaScript provides **two equality operators**:

* `==` → **Loose equality**
* `===` → **Strict equality**

The **core difference** is:

> `==` compares **values after type coercion**,
> `===` compares **both value and type without coercion**.

This is one of the **most asked JavaScript interview questions**.

---

### 2. Loose Equality (`==`)

`==` allows JavaScript to **convert types automatically** before comparison.

```javascript
5 == "5"        // true
0 == false      // true
null == undefined // true
```

What happens internally:

* JavaScript converts both sides to a **common type**
* Then compares the values

This can cause **unexpected results**.

---

### 3. Strict Equality (`===`)

`===` checks:

1. **Same type**
2. **Same value**

No type conversion is performed.

```javascript
5 === "5"        // false
0 === false      // false
null === undefined // false
```

This makes `===` **safer and predictable**.

---

### 4. Comparison Table (Interview Friendly)

| Comparison             | `==` Result | `===` Result |
| ---------------------- | ----------- | ------------ |
| `5` and `"5"`          | true        | false        |
| `0` and `false`        | true        | false        |
| `null` and `undefined` | true        | false        |
| `""` and `false`       | true        | false        |
| `1` and `true`         | true        | false        |

---

### 5. Special Rules (Important Traps)

```javascript
null == undefined   // true
null === undefined  // false
```

Why?

* Loose equality has a **special case rule**
* `null` only equals `undefined` with `==`

```javascript
NaN == NaN   // false
NaN === NaN  // false
```

Correct way:

```javascript
Number.isNaN(NaN); // true
```

---

### 6. Real-World Example

```javascript
let input = "0";

if (input == 0) {
  console.log("Runs");
}

if (input === 0) {
  console.log("Never runs");
}
```

Explanation:

* `"0" == 0` → true
* `"0" === 0` → false

---

### 7. Best Practice (Interview Must Say)

> Always use `===` unless you **explicitly need type coercion**.

This:

* Avoids bugs
* Makes code readable
* Matches industry standards

---

### 8. Interview-Ready Summary

The `==` operator compares values after performing type coercion, which can lead to unexpected results. The `===` operator compares both value and type without coercion, making it more reliable. Because of its predictability and safety, `===` is recommended for most comparisons in JavaScript.

---

### 9. Quick Practice Interview Questions

1. Difference between `==` and `===`?
2. Why is `===` safer than `==`?
3. What does `null == undefined` return and why?
4. Why is `NaN === NaN` false?
5. When should `==` be used?
6. How does type coercion affect equality?
7. What equality operator do you use in production code?

---

## 7. Describe closure in JavaScript. Can you give an example?

---

### 1. Concept

A **closure** is created when a **function remembers variables from its outer (lexical) scope**, even after the outer function has finished executing.

In simple words:

> **Closure = function + its lexical environment**

This is possible because JavaScript uses **lexical scoping**.

Closures are **not a special syntax** — they are a **natural behavior** of functions in JavaScript.

---

### 2. Why Closures Exist (Intuition)

JavaScript allows:

* Functions inside functions
* Returning functions
* Passing functions as values

To support this, JavaScript **preserves the scope** in which a function was created.

---

### 3. Basic Closure Example

```javascript
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
```

Explanation (step-by-step):

1. `outer()` is called
2. `count` is created inside `outer`
3. `inner()` is returned
4. `outer()` finishes execution
5. `inner()` still remembers `count`
6. Each call updates the same `count`

This memory retention is a **closure**.

---

### 4. Closure at Memory Level (Interview Explanation)

When `outer()` returns:

* Its execution context is removed
* But variables used by `inner()` are **kept alive**
* Stored in the **closure scope**

JavaScript’s garbage collector **does not delete** captured variables.

---

### 5. Common Real-World Use Cases

#### 1. Data Privacy (Private Variables)

```javascript
function createUser() {
  let password = "secret";

  return {
    checkPassword(input) {
      return input === password;
    }
  };
}

const user = createUser();
console.log(user.checkPassword("secret")); // true
```

`password` is not directly accessible.

---

#### 2. Function Factories

```javascript
function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

double(5); // 10
triple(5); // 15
```

---

#### 3. Event Handlers

```javascript
function attachHandler(id) {
  let count = 0;

  document.getElementById(id).addEventListener("click", function () {
    count++;
    console.log(count);
  });
}
```

Each handler remembers its own `count`.

---

### 6. Closure Interview Trap (Loop Problem)

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output: 3 3 3
```

Why?

* `var` is function-scoped
* One shared `i`

Fix using closure:

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output: 0 1 2
```

---

### 7. Important Characteristics

| Property               | Closure                 |
| ---------------------- | ----------------------- |
| Access outer variables | Yes                     |
| Preserves state        | Yes                     |
| Enables data privacy   | Yes                     |
| Memory usage           | Can increase if misused |

---

### 8. Interview-Ready Summary

A closure in JavaScript is created when a function retains access to its lexical scope even after the outer function has finished execution. This allows functions to remember and manipulate variables from their outer scope. Closures are commonly used for data privacy, function factories, and maintaining state in asynchronous code.

---

### 9. Quick Practice Interview Questions

1. What is a closure?
2. Why do closures exist in JavaScript?
3. What is lexical scope?
4. How do closures help with data privacy?
5. Can closures cause memory leaks?
6. Explain the loop closure problem.
7. Where are closures used in real projects?

---

## 8. What is the `this` keyword and how does its context change?

---

### 1. Concept

`this` is a **special keyword** in JavaScript that refers to the **object that is currently executing the function**.

Important rule:

> The value of `this` is **not decided where a function is written**,
> it is decided **how the function is called**.

This makes `this` one of the **most confusing and most asked** interview topics.

---

### 2. `this` in Global Context

#### In Browser

```javascript
console.log(this); // window
```

* In browsers, global `this` refers to `window`
* In strict mode:

```javascript
"use strict";
console.log(this); // undefined
```

---

### 3. `this` Inside a Function

```javascript
function show() {
  console.log(this);
}

show(); // window (non-strict)
```

* Regular function call
* `this` → global object (or `undefined` in strict mode)

---

### 4. `this` Inside an Object Method

```javascript
const user = {
  name: "Tanish",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // Tanish
```

Explanation:

* Function is called using `user`
* `this` points to `user`

---

### 5. `this` Lost (Common Interview Trap)

```javascript
const user = {
  name: "Tanish",
  greet() {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};

user.greet(); // undefined
```

Why?

* `inner()` is a regular function call
* `this` falls back to global

Fix using variable:

```javascript
const user = {
  name: "Tanish",
  greet() {
    const self = this;
    function inner() {
      console.log(self.name);
    }
    inner();
  }
};
```

---

### 6. `this` in Arrow Functions (Very Important)

Arrow functions **do NOT have their own `this`**.

They take `this` from their **lexical scope**.

```javascript
const user = {
  name: "Tanish",
  greet() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

user.greet(); // Tanish
```

This is why arrow functions are useful in callbacks.

---

### 7. `this` in Event Handlers

```javascript
button.addEventListener("click", function () {
  console.log(this); // button element
});
```

Arrow function version:

```javascript
button.addEventListener("click", () => {
  console.log(this); // window
});
```

Why?

* Arrow function takes `this` from outer scope

---

### 8. `call`, `apply`, and `bind`

You can **manually set `this`**.

```javascript
function greet(city) {
  console.log(this.name + " from " + city);
}

const user = { name: "Tanish" };

greet.call(user, "Delhi");
greet.apply(user, ["Delhi"]);

const boundFn = greet.bind(user);
boundFn("Delhi");
```

---

### 9. Summary Table (Interview Gold)

| Context                  | `this` refers to       |
| ------------------------ | ---------------------- |
| Global (browser)         | `window`               |
| Function call            | `window` / `undefined` |
| Object method            | Object                 |
| Arrow function           | Lexical `this`         |
| Event handler (function) | DOM element            |
| `call/apply/bind`        | Explicit object        |

---

### 10. Interview-Ready Summary

The `this` keyword in JavaScript refers to the object that invokes a function. Its value is determined at runtime based on how the function is called. In regular functions, `this` can refer to the global object or calling object, while arrow functions inherit `this` from their lexical scope. Methods like `call`, `apply`, and `bind` allow explicit control of `this`.

---

### 11. Quick Practice Interview Questions

1. How is `this` determined in JavaScript?
2. Why does arrow function not have its own `this`?
3. Difference between `this` in regular and arrow functions?
4. What does `this` refer to in event handlers?
5. How do `call`, `apply`, and `bind` work?
6. What happens to `this` in strict mode?
7. Common scenarios where `this` gets lost?

---

## 9. What are arrow functions and how do they differ from regular functions?

---

### 1. Concept

**Arrow functions** are a **shorter syntax** for writing functions in JavaScript, introduced in **ES6 (ES2015)**.

Key idea:

> Arrow functions are **not just syntax sugar** — they behave **differently** from regular functions in important ways, especially regarding **`this`**, **arguments**, and **usage as constructors**.

---

### 2. Arrow Function Syntax

#### Regular Function

```javascript
function add(a, b) {
  return a + b;
}
```

#### Arrow Function

```javascript
const add = (a, b) => {
  return a + b;
};
```

Shorter form (implicit return):

```javascript
const add = (a, b) => a + b;
```

Single parameter:

```javascript
const square = x => x * x;
```

---

### 3. `this` Behavior (Most Important Difference)

#### Regular Function

```javascript
const user = {
  name: "Tanish",
  greet: function () {
    console.log(this.name);
  }
};

user.greet(); // Tanish
```

* `this` depends on **how the function is called**

---

#### Arrow Function

```javascript
const user = {
  name: "Tanish",
  greet: () => {
    console.log(this.name);
  }
};

user.greet(); // undefined
```

Why?

* Arrow functions **do not have their own `this`**
* They inherit `this` from the **lexical (outer) scope**

---

### 4. Arrow Functions and Callbacks (Why They Are Useful)

```javascript
const user = {
  name: "Tanish",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

user.greet(); // Tanish
```

If regular function was used inside `setTimeout`, `this` would be lost.

---

### 5. `arguments` Object Difference

#### Regular Function

```javascript
function test() {
  console.log(arguments);
}

test(1, 2, 3); // Arguments object exists
```

#### Arrow Function

```javascript
const test = () => {
  console.log(arguments);
};

test(1, 2, 3); // ReferenceError
```

Arrow functions **do not have `arguments`**.

Alternative:

```javascript
const test = (...args) => {
  console.log(args);
};
```

---

### 6. Arrow Functions Cannot Be Used as Constructors

```javascript
const Person = (name) => {
  this.name = name;
};

new Person("Tanish"); // TypeError
```

Reason:

* Arrow functions **do not have `prototype`**
* Cannot be called with `new`

---

### 7. `call`, `apply`, `bind` Do Not Work with Arrow Functions

```javascript
const greet = () => {
  console.log(this);
};

greet.call({ name: "Tanish" }); // still lexical this
```

Why?

* `this` is already fixed lexically

---

### 8. When to Use Arrow vs Regular Function

| Use Case             | Arrow Function | Regular Function |
| -------------------- | -------------- | ---------------- |
| Short callbacks      | Yes            | Optional         |
| Methods in objects   | No             | Yes              |
| Need own `this`      | No             | Yes              |
| Constructor          | No             | Yes              |
| Functional utilities | Yes            | Optional         |

---

### 9. Common Interview Trap

```javascript
const obj = {
  value: 10,
  getValue: () => this.value
};

console.log(obj.getValue()); // undefined
```

Correct version:

```javascript
const obj = {
  value: 10,
  getValue() {
    return this.value;
  }
};
```

---

### 10. Interview-Ready Summary

Arrow functions provide a concise syntax for writing functions in JavaScript, but they differ from regular functions in behavior. Arrow functions do not have their own `this`, `arguments`, or `prototype`, and they cannot be used as constructors. They inherit `this` from their lexical scope, making them ideal for callbacks, but unsuitable as object methods where dynamic `this` is required.

---

### 11. Quick Practice Interview Questions

1. What is an arrow function?
2. How does `this` behave differently in arrow functions?
3. Why can’t arrow functions be used as constructors?
4. Difference between arrow functions and regular functions?
5. Do arrow functions have `arguments`?
6. When should arrow functions not be used?
7. Why are arrow functions popular in callbacks?

---


## 10. What are template literals in JavaScript?

---

### 1. Concept

**Template literals** are a modern way to create **strings** in JavaScript, introduced in **ES6 (ES2015)**.

They allow:

* **String interpolation** (embed variables directly)
* **Multi-line strings**
* **Expression evaluation inside strings**

Template literals use **backticks** ( `` ` `` ) instead of quotes.

---

### 2. Problem with Traditional Strings

Using single or double quotes:

```javascript
let name = "Tanish";
let age = 21;

let message = "My name is " + name + " and I am " + age + " years old.";
console.log(message);
```

Problems:

* Hard to read
* Messy with many variables
* Poor for multi-line text

---

### 3. Template Literal Syntax

```javascript
let name = "Tanish";
let age = 21;

let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
```

Explanation:

* `${}` allows embedding expressions
* Cleaner and readable

---

### 4. Expression Evaluation Inside Template Literals

You can write **any valid JavaScript expression** inside `${}`.

```javascript
let a = 10;
let b = 20;

console.log(`Sum is ${a + b}`); // Sum is 30
```

---

### 5. Multi-line Strings (Very Useful)

```javascript
let text = `
Hello Tanish,
Welcome to JavaScript interviews.
Good luck!
`;

console.log(text);
```

No need for:

* `\n`
* string concatenation

---

### 6. Function Calls Inside Template Literals

```javascript
function greet(name) {
  return `Hello ${name}`;
}

console.log(`${greet("Tanish")}, how are you?`);
```

---

### 7. Tagged Template Literals (Advanced, Interview Bonus)

Template literals can be **tagged with a function**.

```javascript
function tag(strings, value) {
  return strings[0] + value.toUpperCase();
}

let name = "tanish";
console.log(tag`Hello ${name}`);
```

Used for:

* Sanitization
* Internationalization
* Custom formatting

---

### 8. Comparison Table

| Feature            | Traditional Strings | Template Literals |
| ------------------ | ------------------- | ----------------- |
| Variable insertion | `+` operator        | `${}`             |
| Multi-line support | No                  | Yes               |
| Expression support | No                  | Yes               |
| Readability        | Low                 | High              |

---

### 9. Real-World Use Cases

1. Dynamic UI messages
2. HTML templates in JS
3. Logging and debugging
4. API response formatting
5. Readable error messages

Example:

```javascript
const user = "Tanish";
const error = `User ${user} not found at ${new Date().toISOString()}`;
```

---

### 10. Interview-Ready Summary

Template literals are a modern string syntax in JavaScript that use backticks and support variable interpolation, expression evaluation, and multi-line strings. They improve readability and reduce the need for string concatenation. Template literals also support tagged templates for advanced use cases.

---

### 11. Quick Practice Interview Questions

1. What are template literals?
2. Why are backticks used in template literals?
3. How do you insert variables inside a template string?
4. Can expressions be evaluated inside `${}`?
5. What are tagged template literals?
6. Difference between normal strings and template literals?
7. Are template literals supported in older browsers?

---


