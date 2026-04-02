<p align="center">

![](https://www.tutorialrepublic.com/lib/images/javascript-illustration.png)

</p>

# Q1. What is JavaScript?

---

## Concepts (with example + walkthrough)

### 1. Definition

JavaScript (JS) is a **high-level, interpreted programming language** used to make web pages **interactive and dynamic**.

- Runs inside the browser (Chrome, Firefox, etc.)
- Also runs on servers using **Node.js**
- Follows **event-driven** and **single-threaded** model

---

### 2. Why JavaScript exists

Initially, websites were only:

- HTML → structure
- CSS → styling

They were **static (no interaction)**

JavaScript was introduced to:

- Handle user actions (click, input)
- Update UI without reloading page
- Communicate with servers (APIs)

---

### 3. What JavaScript can do

#### (A) Frontend (Browser)

```javascript
// Change text on button click
document.getElementById("btn").onclick = function () {
  document.getElementById("text").innerText = "Changed!";
};
```

#### (B) Backend (Node.js)

```javascript
// Simple server using Node.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from server");
});

server.listen(3000);
```

---

### 4. Key Characteristics

| Feature         | Description                                |
| --------------- | ------------------------------------------ |
| Interpreted     | Runs line by line (no compile step needed) |
| Dynamic typing  | Variable types decided at runtime          |
| Single-threaded | One task at a time (uses event loop)       |
| Event-driven    | Responds to user/browser events            |
| Prototype-based | Uses prototypes instead of classical OOP   |

---

### Walkthrough

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");
```

#### Output:

```
Start
End
Async Task
```

#### Explanation:

- JS runs synchronously first
- Async tasks go to **callback queue**
- Event loop executes them later

---

## Example

Real-world example:

- When you click **"Add to Cart"** on an e-commerce site:
  - JavaScript handles click
  - Updates UI instantly
  - Sends request to backend

Without JS → page reload needed

---

## Code Example

```javascript
// Example: simple calculator logic

function add(a, b) {
  return a + b; // returns sum
}

let result = add(5, 3);

console.log(result); // Output: 8
```

---

## Interview-Level Answer

JavaScript is a high-level, interpreted programming language used to create dynamic and interactive web applications. It runs primarily in the browser but can also be used on the server side using environments like Node.js.

It is single-threaded, event-driven, and dynamically typed. JavaScript enables features like DOM manipulation, handling user events, asynchronous operations, and API communication, making it a core technology of modern web development alongside HTML and CSS.

---

# Q2. What are the data types present in JavaScript?

---

## Concepts (with example + walkthrough)

### 0. What is a Data Type? (Foundation first)

A **data type** defines:

- **What kind of value** a variable holds
- **What operations** we can perform on it

#### Simple understanding:

- `"Tanish"` → text → String
- `22` → number → Number
- `true` → yes/no → Boolean

So, **data type = type of data stored inside a variable**

---

### 1. Two Categories of Data Types

JavaScript has **2 main categories**:

#### (A) Primitive Types (Simple values)

- Store **actual value directly**
- **Immutable** (cannot be changed, only replaced)

```javascript
// Primitive types
let name = "Tanish"; // String
let age = 22; // Number
let isDev = true; // Boolean
let x = undefined; // Undefined
let y = null; // Null
let big = 123n; // BigInt
let sym = Symbol("id"); // Symbol
```

---

#### (B) Non-Primitive (Reference Types)

- Store **reference (address in memory)**
- Can hold **multiple values / complex structure**
- **Mutable** (can be changed)

```javascript
// Non-primitive types
let obj = { name: "Tanish" }; // Object
let arr = [1, 2, 3]; // Array
let func = function () {}; // Function
```

---

### 2. Core Difference (VERY IMPORTANT)

#### Primitive → Value copy

#### Non-Primitive → Reference copy

---

### Walkthrough (Most Important for Interviews)

#### Case 1: Primitive

```javascript
let a = 10;
let b = a; // copy value

b = 20;

console.log(a); // 10 (original safe)
```

#### Why?

- `b` gets **copy of value**
- So change in `b` does NOT affect `a`

---

#### Case 2: Non-Primitive

```javascript
let obj1 = { val: 10 };
let obj2 = obj1; // copy reference

obj2.val = 20;

console.log(obj1.val); // 20 (changed!)
```

#### Why?

- Both `obj1` and `obj2` point to **same memory**
- Change via one → affects both

---

### 3. Memory Visualization (Mental Model)

#### Primitive:

```
a → 10
b → 10 (separate copy)
```

#### Non-Primitive:

```
obj1 ──┐
       ├──> { val: 10 }
obj2 ──┘
```

---

### 4. Important Notes (Interview Traps)

#### (1) typeof null

```javascript
console.log(typeof null); // "object" (bug)
```

---

#### (2) Array is actually Object

```javascript
console.log(typeof [1, 2, 3]); // "object"
```

---

#### (3) Functions are also Objects

```javascript
function test() {}
console.log(typeof test); // "function"
```

---

## Example

Real-world analogy:

- Primitive → **Photocopy**
  - You get your own copy → safe

- Non-Primitive → **Google Doc link**
  - Everyone edits same file → changes visible everywhere

---

## Code Example

```javascript
// Combining both concepts

let num = 5;
let copyNum = num;

copyNum = 10;

console.log(num); // 5 (no change)

// ------------------------

let user = { name: "Tanish" };
let copyUser = user;

copyUser.name = "Rahul";

console.log(user.name); // Rahul (changed)
```

---

## Interview-Level Answer

A data type in JavaScript defines the type of value a variable can hold.

JavaScript data types are divided into two categories: primitive and non-primitive. Primitive types include String, Number, Boolean, Undefined, Null, BigInt, and Symbol. These are immutable and stored by value.

Non-primitive types include Objects, Arrays, and Functions. These are stored by reference and are mutable.

The key difference is that primitive values are copied by value, while non-primitive values are copied by reference, which affects how changes propagate in memory.

---

# Q3. What is the difference between null and undefined?

---

## Concepts (with example + walkthrough)

### 1. undefined (Automatic / default value)

- `undefined` means **value is not assigned yet**
- Given by JavaScript **automatically**

#### When does it occur?

```javascript
let a; // declared but not assigned
console.log(a); // undefined
```

```javascript
function test() {} // no return
console.log(test()); // undefined
```

```javascript
let obj = {};
console.log(obj.name); // undefined (property doesn't exist)
```

---

### 2. null (Intentional empty value)

- `null` means **empty / no value intentionally**
- Assigned by developer

```javascript
let user = null; // explicitly empty
```

---

### 3. Type Difference (Important Interview Trap)

```javascript
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a JS bug)
```

---

### 4. Equality Comparison

#### (A) Loose Equality (==)

```javascript
console.log(null == undefined); // true
```

#### (B) Strict Equality (===)

```javascript
console.log(null === undefined); // false
```

---

### 5. Key Differences Table

| Feature        | undefined          | null                    |
| -------------- | ------------------ | ----------------------- |
| Meaning        | Value not assigned | Intentional empty value |
| Assigned by    | JavaScript         | Developer               |
| Type           | undefined          | object (bug in JS)      |
| Default value  | Yes                | No                      |
| Equality (==)  | equal to null      | equal to undefined      |
| Equality (===) | not equal          | not equal               |

---

### Walkthrough

```javascript
let a;
let b = null;

console.log(a); // undefined
console.log(b); // null

console.log(a == b); // true
console.log(a === b); // false
```

#### Explanation:

- `a` → JS ne value assign nahi ki
- `b` → developer ne intentionally empty rakha
- `==` converts → isliye true
- `===` strict → isliye false

---

## Example

Real-world analogy:

- `undefined` → "Mujhe abhi tak value nahi mili"
- `null` → "Value hai hi nahi (intentionally empty)"

---

## Code Example

```javascript
// Scenario: user profile loading

let profile; // not loaded yet → undefined

// later...
profile = null; // no profile exists

if (profile === undefined) {
  console.log("Profile not loaded yet");
} else if (profile === null) {
  console.log("No profile found");
}
```

---

## Interview-Level Answer

`undefined` represents a variable that has been declared but not assigned a value, and it is assigned automatically by JavaScript.

`null`, on the other hand, is an intentional assignment by the developer to represent an empty or non-existent value.

Although `null == undefined` is true due to type coercion, they are not strictly equal (`null === undefined` is false). Also, `typeof undefined` returns `"undefined"` while `typeof null` incorrectly returns `"object"` due to a historical bug in JavaScript.

---

# Q4. How does JavaScript handle type coercion?

---

## Concepts (with example + walkthrough)

### 1. What is Type Coercion?

Type coercion means:

> **JavaScript automatically converts one data type into another** when needed

This happens when:

- Different types are used together
- JS tries to **make the operation possible**

---

### 2. Types of Coercion

#### (A) Implicit Coercion (Automatic)

JavaScript does conversion **behind the scenes**

```javascript id="3q0vpy"
console.log("5" + 2); // "52"
```

#### Explanation:

- Number `2` → converted to string
- Because `+` with string → **concatenation**

---

```javascript id="m4epn5"
console.log("5" - 2); // 3
```

#### Explanation:

- `"5"` → converted to number
- `-` only works with numbers

---

---

#### (B) Explicit Coercion (Manual)

Developer converts types manually

```javascript id="ifd6p0"
let str = "123";

let num = Number(str); // convert to number
console.log(num); // 123
```

---

### 3. Common Conversion Rules (VERY IMPORTANT)

#### (1) String Conversion

```javascript id="q5mxpy"
console.log(10 + ""); // "10"
```

- Anything + string → becomes string

---

#### (2) Number Conversion

```javascript id="tf1t9z"
console.log("10" - 5); // 5
console.log(true + 1); // 2
console.log(false + 1); // 1
```

---

#### (3) Boolean Conversion

```javascript id="d6a0wt"
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
```

---

### 4. Truthy vs Falsy (Interview Favorite)

#### Falsy values (convert to false):

```javascript id="zn6y8x"
false;
0;
("");
null;
undefined;
NaN;
```

Everything else → **truthy**

---

### 5. Equality Coercion (== vs ===)

#### Loose Equality (==)

```javascript id="bh5j4p"
console.log(5 == "5"); // true
```

- Converts types before comparing

---

#### Strict Equality (===)

```javascript id="1qk9ci"
console.log(5 === "5"); // false
```

- No conversion → type must match

---

### Walkthrough

```javascript id="h0y9xj"
console.log([] == false); // true
```

#### Step-by-step:

1. `[]` → converted to `""`
2. `""` → converted to `0`
3. `false` → converted to `0`
4. `0 == 0` → true

---

## Example

Real-world analogy:

- Type coercion = **translator**
- If two people speak different languages → JS converts one so both can understand

---

## Code Example

```javascript id="kbh8kh"
// Mixed operations

console.log("10" + 2); // "102" (string)
console.log("10" - 2); // 8 (number)

console.log(true + 1); // 2
console.log(false + 1); // 1

console.log(null + 1); // 1
console.log(undefined + 1); // NaN
```

---

## Interview-Level Answer

Type coercion in JavaScript is the automatic or manual conversion of values from one data type to another. It can be implicit, where JavaScript performs the conversion automatically during operations, or explicit, where the developer manually converts types using functions like Number(), String(), or Boolean().

JavaScript applies specific rules depending on the operator. For example, the `+` operator performs string concatenation if one operand is a string, while arithmetic operators like `-` convert values to numbers.

Loose equality (`==`) performs type coercion before comparison, whereas strict equality (`===`) does not. Understanding type coercion is important to avoid unexpected results and bugs in JavaScript programs.

---

# Q5. Explain the concept of hoisting in JavaScript

---

## Concepts (with example + walkthrough)

### 1. What is Hoisting?

Hoisting is JavaScript behavior where:

> **Declarations (variables + functions) are moved to the top of their scope before execution**

Important:

- Only **declarations are hoisted**, not initializations

---

### 2. Example with `var`

```javascript id="5x4j2p"
console.log(a); // undefined

var a = 10;
```

---

### Internally becomes (JS engine view)

```javascript id="1f6x8r"
var a; // declaration hoisted
console.log(a); // undefined
a = 10; // assignment happens later
```

---

### Key Point

- `var` is:
  - Hoisted
  - **Initialized with undefined**

---

### 3. `let` and `const` (Temporal Dead Zone)

```javascript id="k9u2sz"
console.log(b); // ❌ ReferenceError

let b = 20;
```

---

### Why error?

Internally:

```javascript id="q3v9nm"
let b; // hoisted BUT NOT initialized

// TDZ (Temporal Dead Zone)
console.log(b); // ❌ cannot access before initialization

b = 20;
```

---

### 4. Temporal Dead Zone (TDZ)

- Time between:
  - variable hoisted
  - and initialized

During this time:

> Accessing variable → **ReferenceError**

---

### 5. Function Hoisting

#### (A) Function Declaration (Fully hoisted)

```javascript id="7p2k1x"
greet(); // works

function greet() {
  console.log("Hello");
}
```

---

#### (B) Function Expression (NOT hoisted like above)

```javascript id="v9n3xk"
greet(); // ❌ Error

var greet = function () {
  console.log("Hello");
};
```

---

### Why?

```javascript id="x8p2rs"
var greet; // hoisted as undefined

greet(); // ❌ undefined is not a function

greet = function () {};
```

---

### Walkthrough (Execution Flow)

```javascript id="m2z8ka"
console.log(x); // undefined

var x = 5;

function test() {
  console.log("Inside function");
}
```

#### Execution Steps:

1. Memory phase:
   - `x → undefined`
   - `test → function stored`

2. Execution phase:
   - `console.log(x)` → undefined
   - `x = 5`

---

## Example

Real-world analogy:

- Hoisting = **pre-booking names before assigning values**

Like:

- You reserve a seat (declaration)
- But sit later (initialization)

---

## Code Example

```javascript id="c8r2pq"
// Comparing var vs let

console.log(a); // undefined
var a = 10;

// ----------------------

console.log(b); // ❌ ReferenceError
let b = 20;
```

---

## Interview-Level Answer

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during the memory creation phase.

Variables declared with `var` are hoisted and initialized with `undefined`, which is why they can be accessed before declaration without throwing an error.

In contrast, `let` and `const` are also hoisted but remain uninitialized in the Temporal Dead Zone, causing a ReferenceError if accessed before declaration.

Function declarations are fully hoisted, while function expressions behave like variables and are not callable before assignment. Understanding hoisting helps in predicting execution order and avoiding common bugs in JavaScript.

---

# Q6. What is the Temporal Dead Zone (TDZ) in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. What is TDZ?

Temporal Dead Zone (TDZ) means:

> **The time between variable hoisting and its initialization where it cannot be accessed**

Applies to:

- `let`
- `const`

---

### 2. Why TDZ exists?

To prevent:

- Using variables **before proper initialization**
- Silent bugs (like with `var`)

---

### 3. Example

```javascript id="q2k9lm"
console.log(a); // ❌ ReferenceError

let a = 10;
```

---

### What actually happens internally?

```javascript id="8z1xpo"
// Memory phase
let a; // hoisted BUT not initialized

// TDZ starts here

console.log(a); // ❌ cannot access

// TDZ ends here
a = 10;
```

---

### 4. Timeline (Very Important)

```
1. Scope created
2. Variable hoisted
3. TDZ starts (uninitialized)
4. Initialization happens
5. TDZ ends → usable
```

---

### 5. Visual Flow

```
[ TDZ ] -----------> [ Initialized ]
   ↑                      ↑
Access ❌              Access ✅
```

---

### 6. Block Scope Example

```javascript id="6j9rpx"
{
  console.log(x); // ❌ TDZ

  let x = 5;

  console.log(x); // 5 ✅
}
```

---

### 7. TDZ with `const`

```javascript id="s4n1vk"
const y = 10;

// MUST initialize immediately
// const y; ❌ SyntaxError
```

---

### 8. Comparison with `var` (Important)

```javascript id="7d2mqp"
console.log(a); // undefined (no error)
var a = 10;
```

#### Why no error?

- `var` is:
  - Hoisted
  - Initialized with `undefined`

- No TDZ

---

### Walkthrough

```javascript id="r8k3np"
let x = 1;

function test() {
  console.log(x); // ❌ TDZ (local x shadows global)

  let x = 2;
}

test();
```

#### Explanation:

- Inside function → new `x` created
- It enters TDZ before initialization
- So access fails

---

## Example

Real-world analogy:

- TDZ = **"Restricted area before entry allowed"**

You know:

- Room exists (hoisted)
- But you **cannot enter until permission (initialization)**

---

## Code Example

```javascript id="p4z7yn"
// Safe usage

let a = 10;
console.log(a); // 10

// ---------------------

// Unsafe usage

{
  // TDZ zone
  // console.log(b); ❌

  let b = 20;
  console.log(b); // 20
}
```

---

## Interview-Level Answer

The Temporal Dead Zone (TDZ) is the period between the hoisting of a variable declared with `let` or `const` and its initialization.

During this phase, the variable exists in memory but cannot be accessed, and attempting to do so results in a ReferenceError.

TDZ ensures that variables are accessed only after they have been properly initialized, helping prevent bugs and improving code reliability.

---

# Q7. What is scope in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. What is Scope?

Scope defines:

> **Where a variable can be accessed in the code**

Simple:

- If variable is inside scope → accessible
- Outside scope → ❌ error

---

### 2. Types of Scope

---

#### (A) Global Scope

- Declared outside any function/block
- Accessible **everywhere**

```javascript id="3l9k2p"
let a = 10;

function test() {
  console.log(a); // accessible
}

test();
console.log(a); // accessible
```

---

#### (B) Function Scope

- Variables declared inside a function
- Accessible **only inside that function**

```javascript id="8k2pqa"
function test() {
  let x = 20;
  console.log(x); // ✅
}

test();

console.log(x); // ❌ ReferenceError
```

---

#### (C) Block Scope (`let`, `const`)

- Variables inside `{}` block
- Only accessible inside that block

```javascript id="6k1zmp"
if (true) {
  let y = 30;
  console.log(y); // ✅
}

console.log(y); // ❌ ReferenceError
```

---

### 3. Important: `var` vs `let/const`

#### `var` is NOT block scoped

```javascript id="2k9zxm"
if (true) {
  var z = 50;
}

console.log(z); // ✅ accessible (unexpected)
```

---

#### `let/const` are block scoped

```javascript id="9d3k1s"
if (true) {
  let p = 60;
}

console.log(p); // ❌ Error
```

---

### 4. Scope Chain (Very Important)

If variable not found in current scope → JS looks outside

```javascript id="7x2mqp"
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;

    console.log(a, b, c); // 10 20 30
  }

  inner();
}

outer();
```

#### Explanation:

- `inner` → checks its own scope
- Then `outer`
- Then global

This is called **scope chain**

---

### Walkthrough

```javascript id="5p2lzx"
let a = 1;

function test() {
  let b = 2;

  if (true) {
    let c = 3;
    console.log(a, b, c); // 1 2 3
  }

  console.log(a, b); // 1 2
  console.log(c); // ❌ not accessible
}

test();
```

---

## Example

Real-world analogy:

- Scope = **room access system**

| Scope Type | Meaning                             |
| ---------- | ----------------------------------- |
| Global     | Open building (everyone can access) |
| Function   | Private room                        |
| Block      | Locker inside room                  |

---

## Code Example

```javascript id="9m2kqp"
// Mixing scopes

let globalVar = "I am global";

function demo() {
  let funcVar = "I am function scoped";

  if (true) {
    let blockVar = "I am block scoped";

    console.log(globalVar); // ✅
    console.log(funcVar); // ✅
    console.log(blockVar); // ✅
  }

  console.log(blockVar); // ❌ Error
}

demo();
```

---

## Interview-Level Answer

Scope in JavaScript refers to the region of code where a variable is accessible.

There are three main types of scope: global, function, and block scope. Variables declared in the global scope are accessible throughout the program. Variables declared inside a function are limited to that function, while variables declared with `let` and `const` inside a block are restricted to that block.

JavaScript also follows a scope chain, where inner scopes can access variables from outer scopes. Understanding scope is essential for managing variable access and avoiding conflicts in code.

---

# Q7. What is the difference between `==` and `===`?

---

## Concepts (with example + walkthrough)

### 1. `==` (Loose Equality)

- Compares values **after type conversion (coercion)**
- JavaScript tries to make types same before comparing

```javascript id="9x2lqp"
console.log("5" == 5); // true
```

#### Why?

- `"5"` → converted to number `5`
- Then → `5 == 5` → true

---

### 2. `===` (Strict Equality)

- No type conversion
- Checks:
  - **Value**
  - **Type**

```javascript id="2k8zmp"
console.log("5" === 5); // false
```

#### Why?

- `"5"` → string
- `5` → number
- Types different → false

---

### 3. Key Difference Table

| Feature        | `==` (Loose)            | `===` (Strict) |
| -------------- | ----------------------- | -------------- |
| Type coercion  | Yes                     | No             |
| Checks         | Value only (after conv) | Value + Type   |
| Predictability | Low (can confuse)       | High (safe)    |

---

### 4. Important Edge Cases (Interview Favorites)

```javascript id="7m3kqp"
console.log(null == undefined); // true
console.log(null === undefined); // false
```

#### Why?

- `==` → special rule → treated equal
- `===` → types different → false

---

```javascript id="3l9zpx"
console.log(0 == false); // true
console.log(0 === false); // false
```

---

```javascript id="8k1qzm"
console.log("" == 0); // true
console.log("" === 0); // false
```

---

### 5. Dangerous Case (Very Important)

```javascript id="6x2kpm"
console.log([] == false); // true
```

#### Step-by-step:

1. `[]` → converted to `""`
2. `""` → converted to `0`
3. `false` → converted to `0`
4. `0 == 0` → true

---

### Walkthrough

```javascript id="4p2kzx"
let a = "10";
let b = 10;

console.log(a == b); // true (type converted)
console.log(a === b); // false (type mismatch)
```

---

## Example

Real-world analogy:

- `==` → **adjusting answers to match**
- `===` → **strict checking without adjustment**

---

## Code Example

```javascript id="1m9kqp"
// Comparing different cases

console.log("5" == 5); // true
console.log("5" === 5); // false

console.log(true == 1); // true
console.log(true === 1); // false

console.log(null == undefined); // true
console.log(null === undefined); // false
```

---

## Interview-Level Answer

The `==` operator performs loose equality comparison by converting operands to a common type before comparing their values. This type coercion can sometimes lead to unexpected results.

The `===` operator performs strict equality comparison, meaning it checks both the value and the type without any conversion.

Because `===` avoids implicit type coercion and provides more predictable results, it is recommended to use strict equality in modern JavaScript.

---

# Q8. What is a closure in JavaScript? Can you give an example?

---

## Concepts (with example + walkthrough)

### 1. What is a Closure?

A closure is:

> **A function that remembers variables from its outer (parent) scope even after that scope has finished executing**

Simple:

- Inner function + access to outer variables = **closure**

---

### 2. Why Closures Exist?

Because of:

- **Lexical Scope** (JS decides scope based on where code is written)

---

### 3. Basic Example

```javascript id="3k9zmp"
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

---

### 4. What’s happening internally?

- `outer()` runs → creates `count`
- Returns `inner` function
- Normally, `outer` should be removed from memory
- BUT:
  - `inner` still needs `count`
  - So JS keeps `count` alive → **closure formed**

---

### 5. Key Idea

> Closure = function + its remembered environment

---

### 6. Another Example (Interview Favorite)

```javascript id="7m2kqp"
function greet(name) {
  return function () {
    console.log("Hello " + name);
  };
}

const sayHello = greet("Tanish");

sayHello(); // Hello Tanish
```

---

### 7. Real Use Cases

#### (A) Data Privacy

```javascript id="1x9kqp"
function createUser() {
  let password = "12345";

  return {
    checkPassword: function (input) {
      return input === password;
    },
  };
}

const user = createUser();

console.log(user.checkPassword("12345")); // true
console.log(user.password); // undefined ❌ (private)
```

---

#### (B) Function Factory

```javascript id="8p2kzm"
function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiply(2);

console.log(double(5)); // 10
```

---

### Walkthrough

```javascript id="5k2zmp"
function test() {
  let x = 10;

  return function () {
    console.log(x);
  };
}

const fn = test();
fn(); // 10
```

#### Flow:

1. `test()` executes
2. Returns inner function
3. `x` should be destroyed → but preserved
4. Inner function remembers `x`

---

## Example

Real-world analogy:

- Closure = **backpack**
- Function carries its outer variables like items in a bag

Even if you leave the place → bag still has items

---

## Code Example

```javascript id="9m3kqp"
// Counter using closure

function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

---

## Interview-Level Answer

A closure in JavaScript is a function that has access to variables from its outer lexical scope even after the outer function has finished executing.

This happens because JavaScript preserves the scope in which the function was created. Closures are commonly used for data encapsulation, creating private variables, and building function factories.

They rely on lexical scoping and are a fundamental concept for understanding advanced JavaScript patterns.

---

# Q9. What is a callback function in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. What is a Callback Function?

A callback function is:

> **A function passed as an argument to another function and executed later**

Simple:

- Function inside another function call
- Executed when needed

---

### 2. Basic Example

```javascript id="3k2zmp"
function greet(name, callback) {
  console.log("Hello " + name);

  callback(); // calling the callback
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Tanish", sayBye);
```

---

### Output

```id="9m2kqp"
Hello Tanish
Goodbye!
```

---

### 3. Why Callbacks are Used?

- To **control execution order**
- To handle **asynchronous operations**
- To make code **flexible and reusable**

---

### 4. Synchronous Callback

```javascript id="7k3zmp"
function process(num, callback) {
  let result = num * 2;

  callback(result);
}

process(5, function (res) {
  console.log(res); // 10
});
```

---

### 5. Asynchronous Callback (Very Important)

```javascript id="8m2kqp"
console.log("Start");

setTimeout(function () {
  console.log("Async Task Done");
}, 1000);

console.log("End");
```

---

### Output

```id="1k9zmp"
Start
End
Async Task Done
```

---

### Why?

- `setTimeout` runs later
- Callback executes after delay

---

### 6. Callback Hell (Problem)

Nested callbacks → messy code

```javascript id="5p2kzm"
setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
```

---

### 7. Important Notes

- Functions are **first-class citizens** in JS
- Can:
  - Pass functions
  - Return functions

- Callback is possible because of this

---

### Walkthrough

```javascript id="6x2kqp"
function add(a, b, cb) {
  let sum = a + b;

  cb(sum);
}

add(2, 3, function (result) {
  console.log(result); // 5
});
```

#### Flow:

1. `add` called
2. Sum calculated
3. Callback executed with result

---

## Example

Real-world analogy:

- Callback = **"Call me when work is done"**

Example:

- You order food
- Restaurant calls you when ready

---

## Code Example

```javascript id="2m9kqp"
// Reusable callback pattern

function fetchData(callback) {
  setTimeout(() => {
    let data = "Data received";
    callback(data);
  }, 1000);
}

fetchData(function (result) {
  console.log(result);
});
```

---

## Interview-Level Answer

A callback function in JavaScript is a function that is passed as an argument to another function and is executed after a certain task is completed.

Callbacks are commonly used to handle asynchronous operations such as API calls, timers, and event handling. They help control execution flow and allow functions to be more flexible and reusable.

However, excessive use of nested callbacks can lead to callback hell, which is why modern JavaScript often uses Promises and async/await as better alternatives.

---

# Q10. What is `this` keyword and function context in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. What is `this`?

`this` refers to:

> **The object that is currently executing the function**

Important:

- Value of `this` is **decided at runtime**
- Depends on **how function is called**, not where it is written

---

### 2. Different Contexts of `this`

---

#### (A) Global Context

```javascript id="3k2zmp"
console.log(this);
```

- In browser → `window`
- In Node.js → `{}` (module object)

---

#### (B) Inside Regular Function

```javascript id="8m2kqp"
function test() {
  console.log(this);
}

test();
```

- Non-strict mode → global object
- Strict mode → `undefined`

---

#### (C) Inside Object Method

```javascript id="7k3zmp"
const user = {
  name: "Tanish",

  greet: function () {
    console.log(this.name);
  },
};

user.greet(); // Tanish
```

#### Why?

- Function is called via object → `this = user`

---

#### (D) Arrow Function (Important Difference)

```javascript id="1k9zmp"
const user = {
  name: "Tanish",

  greet: () => {
    console.log(this.name);
  },
};

user.greet(); // undefined
```

#### Why?

- Arrow functions do NOT have their own `this`
- They inherit `this` from outer scope

---

### 3. `call`, `apply`, `bind`

#### (A) call()

```javascript id="6x2kqp"
function greet() {
  console.log(this.name);
}

const user = { name: "Tanish" };

greet.call(user); // Tanish
```

---

#### (B) apply()

```javascript id="5p2kzm"
greet.apply(user); // same as call
```

---

#### (C) bind()

```javascript id="2m9kqp"
const boundFn = greet.bind(user);

boundFn(); // Tanish
```

---

### 4. Key Differences

| Type           | `this` behavior                  |
| -------------- | -------------------------------- |
| Global         | window / global object           |
| Function       | global / undefined (strict mode) |
| Method         | object calling it                |
| Arrow Function | inherits from parent scope       |

---

### Walkthrough

```javascript id="4p2kzx"
const obj = {
  value: 10,

  normal: function () {
    console.log(this.value);
  },

  arrow: () => {
    console.log(this.value);
  },
};

obj.normal(); // 10
obj.arrow(); // undefined
```

#### Explanation:

- `normal` → `this = obj`
- `arrow` → `this` from outer scope (not obj)

---

## Example

Real-world analogy:

- `this` = **"Who is calling me?"**

If:

- Object calls → `this = object`
- Normal function → depends (global/undefined)
- Arrow → takes parent's identity

---

## Code Example

```javascript id="9m3kqp"
// Using bind to fix this

const person = {
  name: "Tanish",
};

function sayName() {
  console.log(this.name);
}

const newFn = sayName.bind(person);

newFn(); // Tanish
```

---

## Interview-Level Answer

The `this` keyword in JavaScript refers to the object that is currently executing the function. Its value is determined at runtime based on how the function is invoked.

In the global context, `this` refers to the global object. Inside a regular function, it refers to the global object or is undefined in strict mode. When used inside an object method, `this` refers to the object itself.

Arrow functions do not have their own `this`; instead, they inherit it from their surrounding lexical scope. Additionally, methods like `call`, `apply`, and `bind` can be used to explicitly control the value of `this`.

Understanding `this` is essential for working with objects, event handlers, and advanced JavaScript patterns.

---

# Q11. What are `call`, `apply`, and `bind` in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. Why do we need `call`, `apply`, `bind`?

They are used to:

> **Manually control the value of `this` inside a function**

---

### 2. `call()` method

- Calls function **immediately**
- Arguments passed **one by one**

```javascript id="3k2zmp"
function greet(age) {
  console.log(this.name, age);
}

const user = { name: "Tanish" };

greet.call(user, 22); // Tanish 22
```

---

### 3. `apply()` method

- Calls function **immediately**
- Arguments passed as **array**

```javascript id="8m2kqp"
function greet(age) {
  console.log(this.name, age);
}

const user = { name: "Tanish" };

greet.apply(user, [22]); // Tanish 22
```

---

### 4. `bind()` method

- Does **NOT call immediately**
- Returns a **new function with bound `this`**

```javascript id="7k3zmp"
function greet(age) {
  console.log(this.name, age);
}

const user = { name: "Tanish" };

const newFn = greet.bind(user, 22);

newFn(); // Tanish 22
```

---

### 5. Key Differences Table

| Feature      | call()          | apply()         | bind()               |
| ------------ | --------------- | --------------- | -------------------- |
| Execution    | Immediate       | Immediate       | Delayed (returns fn) |
| Arguments    | Comma-separated | Array           | Comma-separated      |
| Return value | Function result | Function result | New function         |

---

### 6. Practical Example

```javascript id="1k9zmp"
const person1 = { name: "Tanish" };
const person2 = { name: "Rahul" };

function sayHello(city) {
  console.log(this.name + " from " + city);
}

sayHello.call(person1, "Delhi"); // Tanish from Delhi
sayHello.apply(person2, ["Mumbai"]); // Rahul from Mumbai

const boundFn = sayHello.bind(person1, "Pune");
boundFn(); // Tanish from Pune
```

---

### 7. Borrowing Functions (Important Use Case)

```javascript id="6x2kqp"
const user1 = {
  name: "Tanish",
  greet: function () {
    console.log(this.name);
  },
};

const user2 = {
  name: "Rahul",
};

// Borrow method
user1.greet.call(user2); // Rahul
```

---

### Walkthrough

```javascript id="4p2kzx"
function add(a, b) {
  return a + b;
}

console.log(add.call(null, 2, 3)); // 5
console.log(add.apply(null, [2, 3])); // 5

const boundAdd = add.bind(null, 2, 3);
console.log(boundAdd()); // 5
```

---

## Example

Real-world analogy:

- `call` → "Do it NOW with this person"
- `apply` → "Do it NOW with this person (list of args)"
- `bind` → "Prepare it for later with this person"

---

## Code Example

```javascript id="9m3kqp"
// Fixing 'this' problem

const user = {
  name: "Tanish",
};

function printName() {
  console.log(this.name);
}

setTimeout(printName, 1000); // undefined ❌

const fixed = printName.bind(user);

setTimeout(fixed, 1000); // Tanish ✅
```

---

## Interview-Level Answer

`call`, `apply`, and `bind` are methods in JavaScript used to explicitly control the value of `this` inside a function.

The `call` method invokes the function immediately and accepts arguments individually, while `apply` also invokes the function immediately but takes arguments as an array.

The `bind` method does not execute the function immediately; instead, it returns a new function with `this` permanently bound to the provided object.

These methods are commonly used for function borrowing, setting context, and fixing issues with `this` in callbacks and asynchronous code.

---

# Q12. What are arrow functions and how do they differ from regular functions?

---

## Concepts (with example + walkthrough)

### 1. What are Arrow Functions?

Arrow functions are a **shorter syntax** to write functions in JavaScript, introduced in **ES6**.

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};
```

---

### 2. Short Syntax Variations

#### (A) Single line return (implicit return)

```javascript
const add = (a, b) => a + b; // no return keyword needed
```

#### (B) Single parameter (no brackets)

```javascript
const square = (x) => x * x;
```

#### (C) No parameter

```javascript
const greet = () => "Hello";
```

---

### 3. Key Differences

#### (A) `this` behavior (MOST IMPORTANT)

##### Regular Function → dynamic `this`

- Depends on how function is called

##### Arrow Function → lexical `this`

- Takes `this` from surrounding scope

---

### Example

```javascript
const obj = {
  name: "Tanish",

  regularFunc: function () {
    console.log(this.name); // works
  },

  arrowFunc: () => {
    console.log(this.name); // undefined
  },
};

obj.regularFunc(); // "Tanish"
obj.arrowFunc(); // undefined
```

---

### Walkthrough

- `regularFunc` → `this` refers to `obj`
- `arrowFunc` → `this` comes from outer scope (global), not `obj`

---

#### (B) No `arguments` object in arrow functions

```javascript
function regular() {
  console.log(arguments);
}

const arrow = () => {
  console.log(arguments); // ❌ not available
};
```

---

#### (C) Cannot be used as constructors

```javascript
// Regular function
function Person(name) {
  this.name = name;
}

const p1 = new Person("Tanish"); // works

// Arrow function
const PersonArrow = (name) => {
  this.name = name;
};

const p2 = new PersonArrow("Tanish"); // ❌ Error
```

---

#### (D) No `prototype`

Arrow functions do not have a `prototype` property.

---

### 4. Summary Table

| Feature           | Regular Function | Arrow Function |
| ----------------- | ---------------- | -------------- |
| Syntax            | Longer           | Short          |
| `this`            | Dynamic          | Lexical        |
| `arguments`       | Available        | Not available  |
| Constructor usage | Yes              | No             |
| `prototype`       | Exists           | Does not exist |

---

## Example

Real-world use:

- Arrow functions are commonly used in:
  - Callbacks
  - Array methods (`map`, `filter`, `reduce`)
  - Short utility functions

```javascript
const nums = [1, 2, 3];

const doubled = nums.map((n) => n * 2);

console.log(doubled); // [2, 4, 6]
```

---

## Code Example

```javascript
// Comparing both in a real scenario

const user = {
  name: "Tanish",

  greetRegular: function () {
    setTimeout(function () {
      console.log("Hello " + this.name); // undefined
    }, 1000);
  },

  greetArrow: function () {
    setTimeout(() => {
      console.log("Hello " + this.name); // correct
    }, 1000);
  },
};

user.greetRegular();
user.greetArrow();
```

---

### Output

```text
Hello undefined
Hello Tanish
```

---

### Explanation

- Regular function inside `setTimeout` → loses `this`
- Arrow function → inherits `this` from `greetArrow`

---

## Interview-Level Answer

Arrow functions are a shorter syntax for writing functions in JavaScript, introduced in ES6. The key difference between arrow functions and regular functions lies in how they handle `this`.

Arrow functions do not have their own `this`; instead, they inherit it from the surrounding lexical scope, whereas regular functions have a dynamic `this` based on how they are called. Additionally, arrow functions do not have an `arguments` object, cannot be used as constructors, and do not have a prototype.

They are commonly used for concise callbacks and functional programming patterns, especially in array methods and asynchronous code.

---

# Q13. What are the types of functions in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. Function Declaration (Named Function)

Defined using `function` keyword with a name.

```javascript
function greet() {
  console.log("Hello");
}
```

#### Key Points

- Hoisted (can be used before declaration)
- Has a name

---

### 2. Function Expression

Function stored inside a variable.

```javascript
const greet = function () {
  console.log("Hello");
};
```

#### Key Points

- Not hoisted like declaration
- Can be anonymous or named

---

### 3. Arrow Function

Short syntax introduced in ES6.

```javascript
const greet = () => {
  console.log("Hello");
};
```

#### Key Points

- No own `this`
- Used in callbacks, array methods

---

### 4. Anonymous Function

Function without a name.

```javascript
setTimeout(function () {
  console.log("Runs after 1 second");
}, 1000);
```

#### Key Points

- Used where function is needed temporarily
- Mostly in callbacks

---

### 5. Immediately Invoked Function Expression (IIFE)

Function that runs immediately after creation.

```javascript
(function () {
  console.log("I run immediately");
})();
```

#### Key Points

- Used to avoid global scope pollution

---

### 6. Callback Function

Function passed as argument to another function.

```javascript
function processUser(name, callback) {
  callback(name);
}

processUser("Tanish", function (name) {
  console.log("Hello " + name);
});
```

#### Key Points

- Core of async JS
- Used in events, APIs

---

### 7. Higher-Order Function

Function that takes or returns another function.

```javascript
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

---

### 8. Constructor Function

Used to create objects using `new`.

```javascript
function Person(name) {
  this.name = name;
}

const p1 = new Person("Tanish");
```

---

### 9. Generator Function

Used to pause and resume execution.

```javascript
function* gen() {
  yield 1;
  yield 2;
}

const g = gen();

console.log(g.next()); // { value: 1, done: false }
```

---

### 10. Async Function

Used for asynchronous code with `await`.

```javascript
async function fetchData() {
  return "Data received";
}
```

---

### Walkthrough

```javascript
function sayHi(name) {
  return "Hi " + name;
}

const result = sayHi("Tanish");

console.log(result);
```

#### Output

```
Hi Tanish
```

---

## Example

Real-world:

- Button click → callback function
- API call → async function
- Array `.map()` → arrow function

---

## Code Example

```javascript
// Combining multiple types

function main() {
  console.log("Start");

  const arrow = () => "Arrow Function";

  function normal() {
    return "Normal Function";
  }

  console.log(arrow());
  console.log(normal());
}

main();
```

---

### Output

```
Start
Arrow Function
Normal Function
```

---

## Interview-Level Answer

JavaScript supports multiple types of functions including function declarations, function expressions, arrow functions, anonymous functions, IIFE (Immediately Invoked Function Expressions), callback functions, higher-order functions, constructor functions, generator functions, and async functions.

Each type serves a specific purpose. For example, function declarations are hoisted, arrow functions provide concise syntax and lexical `this`, callbacks are used for asynchronous operations, and async/generator functions help manage complex async flows. Understanding these types is important for writing flexible, reusable, and maintainable JavaScript code.

---

# Q14. What are template literals in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. Definition

Template literals are a way to create strings using **backticks (` `)** instead of quotes (`' '` or `" "`), introduced in **ES6**.

They allow:

- **String interpolation**
- **Multi-line strings**
- **Embedded expressions**

---

### 2. Basic Syntax

```javascript id="k3r1fv"
let name = "Tanish";

let message = `Hello ${name}`;

console.log(message); // Hello Tanish
```

---

### 3. String Interpolation

Instead of using `+` operator, we use `${}`

```javascript id="h1s1n8"
let a = 10;
let b = 20;

let result = `Sum is ${a + b}`;

console.log(result); // Sum is 30
```

---

### 4. Multi-line Strings

```javascript id="a4u6c0"
let text = `This is line 1
This is line 2
This is line 3`;

console.log(text);
```

#### Without template literals (old way)

```javascript id="3y9c7q"
let text = "This is line 1\nThis is line 2\nThis is line 3";
```

---

### 5. Expressions inside Template Literals

You can run JS expressions inside `${}`

```javascript id="l1f2hx"
let price = 100;
let tax = 0.18;

let total = `Total price: ${price + price * tax}`;

console.log(total);
```

---

### 6. Function Calls inside Template Literals

```javascript id="7z3t1n"
function greet(name) {
  return `Hello ${name}`;
}

let msg = `${greet("Tanish")}`;

console.log(msg);
```

---

### Walkthrough

```javascript id="x2m8qp"
let name = "Tanish";
let age = 22;

let intro = `My name is ${name} and I am ${age} years old`;

console.log(intro);
```

#### Output

```id="q8z7ab"
My name is Tanish and I am 22 years old
```

#### Explanation

- `${name}` → replaced with "Tanish"
- `${age}` → replaced with 22
- Final string is constructed dynamically

---

## Example

Real-world example:

- Showing user info in UI

```javascript id="n5d3gh"
let user = {
  name: "Tanish",
  orders: 5,
};

let msg = `Welcome ${user.name}, you have ${user.orders} orders`;

console.log(msg);
```

---

## Code Example

```javascript id="p4l9dw"
// Without template literals
let name = "Tanish";
let msg1 = "Hello " + name + ", welcome!";

// With template literals
let msg2 = `Hello ${name}, welcome!`;

console.log(msg1);
console.log(msg2);
```

---

### Output

```id="t2n8sl"
Hello Tanish, welcome!
Hello Tanish, welcome!
```

---

## Interview-Level Answer

Template literals are a feature introduced in ES6 that allow creating strings using backticks instead of quotes. They support string interpolation using `${}`, enabling embedding variables and expressions directly inside strings.

They also allow multi-line strings without escape characters and can include function calls and expressions. Template literals improve readability and reduce the need for string concatenation, making them widely used in modern JavaScript development.

---

# Q15. What are the major ES6 (ES2015) features in JavaScript?

---

## Concepts (with example + walkthrough)

ES6 (ECMAScript 2015) introduced many powerful features that made JavaScript more **modern, clean, and scalable**.

---

### 1. `let` and `const`

#### Block-scoped variables

```javascript id="t6b2ds"
let a = 10;
const b = 20;

// b = 30; ❌ Error (const cannot be reassigned)
```

#### Key Points

- `let` → reassignable
- `const` → fixed value
- Both are **block scoped**

---

### 2. Arrow Functions

```javascript id="4l3p9q"
const add = (a, b) => a + b;
```

#### Key Points

- Short syntax
- Lexical `this`

---

### 3. Template Literals

```javascript id="h9d2ks"
let name = "Tanish";

console.log(`Hello ${name}`);
```

---

### 4. Destructuring

#### Extract values from arrays/objects

```javascript id="j3f8qa"
// Array destructuring
let [a, b] = [1, 2];

// Object destructuring
let user = { name: "Tanish", age: 22 };
let { name, age } = user;
```

---

### 5. Default Parameters

```javascript id="u8c3mz"
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet(); // Hello Guest
```

---

### 6. Rest and Spread Operators

#### (A) Rest → collect values

```javascript id="r2p7lx"
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```

#### (B) Spread → expand values

```javascript id="v1q8zw"
let arr = [1, 2, 3];

let newArr = [...arr, 4, 5];
```

---

### 7. Classes

```javascript id="x5w2jd"
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const p1 = new Person("Tanish");
p1.greet();
```

---

### 8. Modules (Import/Export)

```javascript id="n8z4kf"
// file1.js
export const name = "Tanish";

// file2.js
import { name } from "./file1.js";
```

---

### 9. Promises

```javascript id="q7k1vb"
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise.then((res) => console.log(res));
```

---

### 10. Enhanced Object Literals

```javascript id="w3p9xa"
let name = "Tanish";

let user = {
  name,
  greet() {
    console.log("Hello");
  },
};
```

---

### 11. `for...of` Loop

```javascript id="y6d1rv"
let arr = [1, 2, 3];

for (let value of arr) {
  console.log(value);
}
```

---

### 12. Symbol (New Primitive Type)

```javascript id="z4h7nt"
let sym = Symbol("id");
```

---

### 13. Map and Set

```javascript id="c2k9ps"
// Map
let map = new Map();
map.set("a", 1);

// Set
let set = new Set([1, 2, 2, 3]);
```

---

### Walkthrough

```javascript id="d8m1qp"
let user = { name: "Tanish", age: 22 };

// Destructuring
let { name, age } = user;

// Template literal
console.log(`Name: ${name}, Age: ${age}`);
```

#### Output

```id="f3v8rl"
Name: Tanish, Age: 22
```

---

## Example

Real-world:

- API handling → Promises
- Clean code → Arrow functions + destructuring
- Large apps → Modules + classes

---

## Code Example

```javascript id="p7k2mz"
// Combining ES6 features

const user = {
  name: "Tanish",
  age: 22,
};

// Destructuring
const { name, age } = user;

// Arrow function
const greet = (name) => `Hello ${name}`;

// Template literal
console.log(greet(name));
```

---

### Output

```id="b9q4zx"
Hello Tanish
```

---

## Interview-Level Answer

ES6 (ECMAScript 2015) introduced major features that modernized JavaScript, including `let` and `const` for block-scoped variables, arrow functions for concise syntax and lexical `this`, template literals for string interpolation, destructuring for extracting values, default parameters, rest and spread operators, classes for object-oriented programming, modules for code organization, and promises for handling asynchronous operations.

Additionally, ES6 introduced new data structures like Map and Set, the Symbol primitive, enhanced object literals, and the `for...of` loop. These features improve code readability, maintainability, and scalability in modern JavaScript applications.

---

# Q16. What is a higher-order function in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. Definition

A higher-order function is a function that:

- **Takes another function as an argument**, OR
- **Returns another function**

---

### 2. Why this is possible?

In JavaScript, functions are **first-class citizens**, meaning:

- Functions can be stored in variables
- Passed as arguments
- Returned from other functions

---

### 3. Case 1: Function as Argument

```javascript id="k1m8zp"
function greet(name) {
  return "Hello " + name;
}

function processUser(name, callback) {
  return callback(name); // calling passed function
}

console.log(processUser("Tanish", greet));
```

#### Output

```id="c2x7av"
Hello Tanish
```

---

### Walkthrough

- `processUser` receives `greet` as argument
- It calls `callback(name)` → which is `greet(name)`
- Returns result

---

### 4. Case 2: Function Returning Another Function

```javascript id="n4b2ls"
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);

console.log(double(5)); // 10
```

---

### Walkthrough

- `multiplier(2)` returns a function
- That function remembers `factor = 2` (closure)
- `double(5)` → 5 \* 2 = 10

---

### 5. Real Power (Array Methods)

Higher-order functions are widely used in:

#### (A) `map()`

```javascript id="h9q2rw"
let arr = [1, 2, 3];

let result = arr.map((num) => num * 2);

console.log(result); // [2, 4, 6]
```

---

#### (B) `filter()`

```javascript id="x3p8jt"
let arr = [1, 2, 3, 4];

let even = arr.filter((num) => num % 2 === 0);

console.log(even); // [2, 4]
```

---

#### (C) `reduce()`

```javascript id="v7m1zk"
let arr = [1, 2, 3];

let sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 6
```

---

### 6. Summary

| Type             | Example                      |
| ---------------- | ---------------------------- |
| Takes function   | `map(callback)`              |
| Returns function | `multiplier()`               |
| Both             | Advanced functional patterns |

---

## Example

Real-world:

- Event handling → callback functions
- API handling → promises + callbacks
- Array processing → map/filter/reduce

---

## Code Example

```javascript id="f8k3xp"
// Custom higher-order function

function calculate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(2, 3, add)); // 5
console.log(calculate(2, 3, multiply)); // 6
```

---

### Output

```id="r2p6nv"
5
6
```

---

### Explanation

- `calculate` is higher-order function
- It takes `operation` (function) as input
- Executes different logic based on passed function

---

## Interview-Level Answer

A higher-order function in JavaScript is a function that either takes another function as an argument or returns a function as its result. This is possible because functions in JavaScript are first-class citizens.

Common examples include array methods like `map`, `filter`, and `reduce`, which take callback functions to process data. Higher-order functions enable code reusability, abstraction, and functional programming patterns, making them a key concept in modern JavaScript development.

---

# Q17. What does it mean that JavaScript functions are first-class citizens (first-class functions)?

---

## Concepts (with example + walkthrough)

### 1. Definition (WHAT)

In JavaScript, functions are called **first-class citizens** because they behave like normal values.

This means:

- You can **store functions in variables**
- You can **pass functions as arguments**
- You can **return functions from other functions**

---

### 2. Why JavaScript supports this (WHY)

Because in JavaScript:

- Functions are treated as **objects internally**
- Anything that can be assigned to a variable → can be passed/returned

This design enables:

- Functional programming
- Reusable and modular code
- Powerful abstractions (callbacks, HOFs, closures)

---

### 3. How it works (HOW)

#### (A) Store function in variable

```javascript id="y3m8pa"
// function assigned to variable
const greet = function () {
  return "Hello";
};

console.log(greet()); // Hello
```

---

#### (B) Pass function as argument

```javascript id="p7k2mz"
function sayHi(name) {
  return "Hi " + name;
}

function processUser(fn) {
  return fn("Tanish"); // calling passed function
}

console.log(processUser(sayHi));
```

---

#### (C) Return function from function

```javascript id="l9d4qw"
function outer() {
  return function () {
    return "Inner function";
  };
}

const innerFunc = outer();

console.log(innerFunc());
```

---

### 4. Walkthrough

```javascript id="d2k8zx"
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);

console.log(double(5)); // 10
```

#### Explanation

- `multiply(2)` returns a function
- That function remembers `a = 2`
- When called → `2 * 5 = 10`
- This is possible because functions are first-class

---

### 5. Real Usage

#### Array methods (HOFs)

```javascript id="x1q7sv"
let arr = [1, 2, 3];

let result = arr.map(function (num) {
  return num * 2;
});
```

---

#### Event handling

```javascript id="w8n3kt"
button.addEventListener("click", function () {
  console.log("Clicked!");
});
```

---

### 6. Key Idea Summary

| Capability           | Example                   |
| -------------------- | ------------------------- |
| Store in variable    | `const fn = function(){}` |
| Pass as argument     | `map(callback)`           |
| Return from function | `return function(){}`     |

---

## Example

Real-world:

- API calls → callbacks
- UI interactions → event handlers
- Data processing → map/filter/reduce

---

## Code Example

```javascript id="z6p1rc"
// Full example combining all

function operate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

console.log(operate(10, 5, add)); // 15
console.log(operate(10, 5, subtract)); // 5
```

---

### Output

```id="k4v9bm"
15
5
```

---

### Explanation

- `operation` is a function passed as argument
- `operate` uses different behaviors dynamically
- This flexibility comes from first-class functions

---

## Interview-Level Answer

In JavaScript, functions are called first-class citizens because they are treated like regular values. This means they can be assigned to variables, passed as arguments to other functions, and returned from functions.

This capability allows JavaScript to support higher-order functions, callbacks, and functional programming patterns. It is a fundamental concept that enables flexible, reusable, and modular code design in JavaScript.

---

# Q18. Can functions be assigned as values to variables in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. Short Answer

Yes, **functions can be assigned to variables** in JavaScript because functions are **first-class citizens**.

---

### 2. What does this mean?

It means:

- A function can be treated like a **value**
- Just like numbers, strings, objects

---

### 3. Function Expression (Core Concept)

When we assign a function to a variable → it's called a **function expression**

```javascript id="n2k7xp"
// function assigned to variable
const greet = function () {
  return "Hello";
};

console.log(greet()); // Hello
```

---

### 4. Walkthrough

- `greet` stores a function (not a value like number)
- `greet()` → executes that function
- Without `()` → it's just a reference to function

```javascript id="v5m1qr"
console.log(greet); // [Function]
console.log(greet()); // Hello
```

---

### 5. Arrow Function Assignment

```javascript id="c8x4tz"
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
```

---

### 6. Functions inside variables (Dynamic behavior)

```javascript id="y3k8pd"
const operations = {
  add: function (a, b) {
    return a + b;
  },
  multiply: (a, b) => a * b,
};

console.log(operations.add(2, 3)); // 5
console.log(operations.multiply(2, 3)); // 6
```

---

### 7. Key Difference vs Function Declaration

#### Function Declaration

```javascript id="p4w2lm"
function greet() {
  return "Hello";
}
```

#### Function Expression

```javascript id="z9q1vs"
const greet = function () {
  return "Hello";
};
```

| Feature       | Declaration | Expression |
| ------------- | ----------- | ---------- |
| Hoisting      | Yes         | No         |
| Stored in var | No          | Yes        |

---

## Example

Real-world:

- Event handlers → stored in variables
- Config objects → store functions
- Dynamic logic switching

---

## Code Example

```javascript id="m7r2kx"
// Function assigned and passed around

const sayHello = function (name) {
  return "Hello " + name;
};

function execute(fn) {
  return fn("Tanish");
}

console.log(execute(sayHello));
```

---

### Output

```id="t6v9qs"
Hello Tanish
```

---

### Explanation

- `sayHello` is stored in variable
- Passed to `execute`
- Called inside → shows flexibility

---

## Interview-Level Answer

Yes, in JavaScript, functions can be assigned as values to variables because functions are first-class citizens. This is known as a function expression.

By assigning functions to variables, we can pass them as arguments, return them from other functions, and store them in data structures. This capability enables powerful patterns like callbacks, higher-order functions, and dynamic behavior in JavaScript applications.

---

# Q19. How do functional programming concepts apply in JavaScript?

---

## Concepts (with example + walkthrough)

Functional Programming (FP) in JavaScript means writing code using **pure functions, immutability, and function composition**, instead of changing state directly.

JavaScript supports FP because functions are **first-class citizens**.

---

### 1. Pure Functions

#### Definition

A pure function:

- Same input → same output
- No side effects (does not modify external state)

```javascript id="p1k7mz"
function add(a, b) {
  return a + b; // no side effects
}
```

#### ❌ Impure Function

```javascript id="k8z3xp"
let total = 0;

function add(num) {
  total += num; // modifies external variable
}
```

---

### 2. Immutability

#### Concept

Do not change existing data → create new data instead

```javascript id="z4m2qp"
let arr = [1, 2, 3];

// ❌ Mutating
arr.push(4);

// ✅ Immutable way
let newArr = [...arr, 4];
```

---

### 3. Higher-Order Functions

Functions that take/return other functions

```javascript id="x7k1pw"
let nums = [1, 2, 3];

let doubled = nums.map((num) => num * 2);
```

---

### 4. Function Composition

Combining small functions to build complex logic

```javascript id="v9d2kt"
const add = (x) => x + 2;
const multiply = (x) => x * 3;

// composition
const result = multiply(add(5));

console.log(result); // (5 + 2) * 3 = 21
```

---

### 5. First-Class Functions

Functions can be:

- Stored in variables
- Passed as arguments
- Returned from functions

(Already covered → base of FP)

---

### 6. Declarative vs Imperative

#### Imperative (step-by-step)

```javascript id="y2k8lp"
let arr = [1, 2, 3];
let result = [];

for (let i = 0; i < arr.length; i++) {
  result.push(arr[i] * 2);
}
```

#### Declarative (FP style)

```javascript id="m5q1zt"
let arr = [1, 2, 3];

let result = arr.map((x) => x * 2);
```

---

### Walkthrough

```javascript id="r8k3vd"
const nums = [1, 2, 3, 4];

// Step 1: filter even numbers
const even = nums.filter((n) => n % 2 === 0);

// Step 2: double them
const doubled = even.map((n) => n * 2);

console.log(doubled);
```

#### Output

```id="h7p2ws"
[4, 8]
```

#### Explanation

- `filter` → selects values
- `map` → transforms values
- No mutation → clean and predictable

---

## Example

Real-world:

- API data transformation
- UI rendering (React uses FP concepts)
- Data pipelines

---

## Code Example

```javascript id="c3m9qp"
// Functional pipeline example

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 },
  { name: "C", age: 40 },
];

// get names of users above 25
const result = users.filter((user) => user.age > 25).map((user) => user.name);

console.log(result);
```

---

### Output

```id="t9k1vl"
["B", "C"]
```

---

### Explanation

- filter → selects users
- map → extracts names
- chained → readable + clean

---

## Interview-Level Answer

Functional programming in JavaScript involves using concepts like pure functions, immutability, higher-order functions, and function composition to write predictable and reusable code. JavaScript supports these concepts because functions are first-class citizens.

Common practices include avoiding shared state, using array methods like map, filter, and reduce, and writing declarative code instead of imperative logic. Functional programming improves code readability, maintainability, and reduces bugs, making it widely used in modern JavaScript frameworks like React.

---

# Q20. What is Functional Programming in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. Definition

Functional Programming (FP) is a programming style where we:

- Use **functions as building blocks**
- Avoid changing data (immutability)
- Write **predictable and reusable code**

---

### 2. Core Idea (Simple Understanding)

Instead of:

- Changing variables again and again
- Writing step-by-step instructions

We:

- Use small functions
- Combine them
- Avoid side effects

---

### 3. Key Principles

---

### (A) Pure Functions

#### Definition

- Same input → same output
- No external changes

```javascript id="x1p9dk"
function square(x) {
  return x * x;
}
```

#### ❌ Not Pure

```javascript id="m4k7qp"
let count = 0;

function increment() {
  count++; // side effect
}
```

---

### (B) Immutability

Do not modify original data

```javascript id="z8k2ls"
let arr = [1, 2, 3];

// ❌ Mutation
arr.push(4);

// ✅ Immutable
let newArr = [...arr, 4];
```

---

### (C) Higher-Order Functions

Functions that take/return functions

```javascript id="q2m7pw"
let arr = [1, 2, 3];

let doubled = arr.map((x) => x * 2);
```

---

### (D) Function Composition

Combining functions

```javascript id="v5n3kt"
const add = (x) => x + 2;
const multiply = (x) => x * 3;

const result = multiply(add(5));

console.log(result); // 21
```

---

### 4. Imperative vs Functional

#### Imperative (how to do)

```javascript id="p3k9dw"
let arr = [1, 2, 3];
let result = [];

for (let i = 0; i < arr.length; i++) {
  result.push(arr[i] * 2);
}
```

---

#### Functional (what to do)

```javascript id="l7m2qx"
let arr = [1, 2, 3];

let result = arr.map((x) => x * 2);
```

---

### Walkthrough

```javascript id="n4k8zp"
const nums = [1, 2, 3, 4];

// Step 1: filter odd numbers
const odd = nums.filter((n) => n % 2 !== 0);

// Step 2: square them
const squared = odd.map((n) => n * n);

console.log(squared);
```

#### Output

```id="r2p6xm"
[1, 9]
```

#### Explanation

- `filter` → selects values
- `map` → transforms
- No mutation → clean flow

---

## Example

Real-world:

- React uses functional programming heavily
- Data transformation pipelines
- Backend logic (clean services)

---

## Code Example

```javascript id="c6k1xp"
// Functional approach to process data

const products = [
  { name: "A", price: 100 },
  { name: "B", price: 200 },
  { name: "C", price: 300 },
];

// Get prices above 150
const result = products.filter((p) => p.price > 150).map((p) => p.price);

console.log(result);
```

---

### Output

```id="t1k9vs"
[200, 300]
```

---

### Explanation

- filter → select products
- map → extract values
- chaining → readable

---

## Interview-Level Answer

Functional programming is a programming paradigm in JavaScript that focuses on writing code using pure functions, immutability, and higher-order functions. It avoids changing shared state and instead builds logic by composing small reusable functions.

JavaScript supports functional programming because functions are first-class citizens. Common practices include using methods like map, filter, and reduce, and writing declarative code. This approach improves code readability, predictability, and maintainability, and is widely used in modern frameworks like React.

---

# Q21. What are IIFEs (Immediately Invoked Function Expressions)?

---

## Concepts (with example + walkthrough)

### 1. Definition

IIFE stands for **Immediately Invoked Function Expression**.

It is a function that:

- Is **defined**
- And **executed immediately**

---

### 2. Basic Syntax

```javascript id="k3p9xt"
(function () {
  console.log("I run immediately");
})();
```

---

### 3. Why parentheses?

```javascript id="x8m2qp"
(function () { ... })();
```

- First `()` → turns function into **expression**
- Last `()` → **calls the function**

Without this → JS treats it as a normal function declaration

---

### 4. Arrow Function IIFE

```javascript id="z4k7pw"
(() => {
  console.log("Arrow IIFE");
})();
```

---

### 5. With Parameters

```javascript id="v1m8dz"
(function (name) {
  console.log("Hello " + name);
})("Tanish");
```

---

### Walkthrough

```javascript id="q2k9ls"
(function () {
  let secret = "Hidden";

  console.log(secret);
})();

// console.log(secret); ❌ Error
```

#### Output

```id="n3p7xt"
Hidden
```

#### Explanation

- `secret` is inside IIFE → **not accessible outside**
- Creates a **private scope**

---

### 6. Why use IIFE?

#### (A) Avoid global scope pollution

```javascript id="b7k2xp"
(function () {
  let data = "private";
})();
```

---

#### (B) Create private variables

```javascript id="m4z9qw"
const counter = (function () {
  let count = 0;

  return function () {
    count++;
    return count;
  };
})();

console.log(counter()); // 1
console.log(counter()); // 2
```

---

#### (C) Run setup code immediately

```javascript id="p6k3vd"
(function () {
  console.log("App initialized");
})();
```

---

### 7. Key Idea

| Part       | Meaning           |
| ---------- | ----------------- |
| Function   | Defined           |
| Expression | Wrapped in `()`   |
| Invocation | Called using `()` |

---

## Example

Real-world:

- Old JS (before modules) → used IIFE to isolate code
- Libraries (like jQuery) used IIFE to avoid conflicts
- Initialization logic

---

## Code Example

```javascript id="w9k1zp"
// Real example: configuration setup

const config = (function () {
  const API_KEY = "12345";

  return {
    getKey: function () {
      return API_KEY;
    },
  };
})();

console.log(config.getKey());
```

---

### Output

```id="t8m2xq"
12345
```

---

### Explanation

- API_KEY is private
- Only accessible via returned function
- Encapsulation achieved

---

## Interview-Level Answer

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is defined and executed immediately after its creation. It is created by wrapping a function inside parentheses to make it an expression and then invoking it using another pair of parentheses.

IIFEs are commonly used to create a private scope, avoid polluting the global namespace, and execute initialization code immediately. Before the introduction of ES6 modules, they were widely used for encapsulation and modularity in JavaScript.

---

# Q22. How do you create private variables in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. What are Private Variables?

Private variables are variables that:

- **Cannot be accessed directly from outside**
- Only accessible through controlled methods

---

### 2. Why do we need them?

- Data security
- Encapsulation
- Prevent accidental modification

---

## Ways to Create Private Variables

---

### 1. Using Closures (Most Important)

#### Concept

A function remembers variables from its outer scope → **closure**

```javascript id="k2m9xp"
function createCounter() {
  let count = 0; // private variable

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
```

---

### Walkthrough

- `count` is inside `createCounter`
- Returned function **remembers count**
- Outside code cannot access `count` directly

```javascript id="p7k1ls"
// console.log(count); ❌ Error
```

---

### 2. Using IIFE (Encapsulation)

```javascript id="z8k3pw"
const counter = (function () {
  let count = 0; // private

  return {
    increment: function () {
      count++;
      return count;
    },
  };
})();

console.log(counter.increment()); // 1
```

---

### 3. Using ES6 Classes (Private Fields `#`)

```javascript id="x4m2zt"
class Counter {
  #count = 0; // private field

  increment() {
    this.#count++;
    return this.#count;
  }
}

const c = new Counter();

console.log(c.increment()); // 1
// console.log(c.#count); ❌ Error
```

---

### 4. Using WeakMap (Advanced Pattern)

```javascript id="n6k9qd"
const privateData = new WeakMap();

class User {
  constructor(name) {
    privateData.set(this, { name });
  }

  getName() {
    return privateData.get(this).name;
  }
}

const u = new User("Tanish");

console.log(u.getName()); // Tanish
```

---

### 5. Using Modules (Modern Way)

```javascript id="m3p8zx"
// file1.js
let secret = "hidden";

export function getSecret() {
  return secret;
}
```

- `secret` is private to module

---

### 6. Comparison

| Method    | Privacy Level | Modern Usage  |
| --------- | ------------- | ------------- |
| Closure   | Strong        | Very common   |
| IIFE      | Strong        | Older pattern |
| Class `#` | Strong        | Modern best   |
| WeakMap   | Strong        | Advanced      |
| Module    | Strong        | Production    |

---

## Example

Real-world:

- Password storage
- API keys
- Internal counters/state

---

## Code Example

```javascript id="t9k2xp"
// Private bank balance example

function createBankAccount() {
  let balance = 0; // private

  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount();

account.deposit(100);

console.log(account.getBalance()); // 100
```

---

### Output

```id="q1m7vs"
100
```

---

### Explanation

- `balance` cannot be accessed directly
- Only via methods → controlled access

---

## Interview-Level Answer

Private variables in JavaScript are variables that are not accessible from outside their scope. They can be created using closures, where a function returns another function that retains access to variables in its lexical scope.

Other modern approaches include using ES6 class private fields (using `#`), modules for encapsulation, and WeakMaps for advanced use cases. Closures are the most commonly used technique, while class private fields are the modern standard for object-oriented design.

---

Good—this is a **very high-value interview topic**.
I’ll first give you a **structured question list** (basic → advanced → real-world → tricky).

---

# Throttling & Debouncing — Interview Question List

---

## Basic Level (Foundation)

1. What is **debouncing** in JavaScript?
2. What is **throttling** in JavaScript?
3. What is the difference between **debouncing and throttling**?
4. Why do we need debouncing and throttling?
5. In which scenarios would you use debouncing?
6. In which scenarios would you use throttling?

---

## Understanding / Conceptual

7. What problem do debouncing and throttling solve?
8. How does debouncing work internally?
9. How does throttling work internally?
10. What happens if debouncing delay is too high/low?
11. What happens if throttling interval is too high/low?

---

## Code / Implementation (Very Important)

12. Implement **debounce function** from scratch
13. Implement **throttle function** from scratch
14. Difference between **leading vs trailing** in debounce/throttle
15. Implement debounce with **immediate execution (leading)**
16. Implement throttle using **timestamp approach**
17. Implement throttle using **setTimeout approach**

---

## Real-World Scenarios

18. How is debouncing used in **search input (API calls)?**
19. How is throttling used in **scroll events?**
20. How would you optimize a **resize event listener?**
21. How does React use debouncing/throttling (e.g., performance optimization)?
22. Where would you NOT use debouncing?

---

## Advanced / Edge Cases

23. How to cancel a debounced/throttled function?
24. What happens to `this` in debounce/throttle implementations?
25. How to preserve arguments in debounce/throttle?
26. What are memory leaks related to debounce/throttle?
27. How to handle async functions with debounce?
28. Can debounce/throttle cause missed executions?

---

## Comparison / Deep Thinking

29. Debounce vs Throttle in **UX perspective**
30. Which is better for **API calls and why?**
31. Which is better for **scroll performance and why?**
32. Can we combine debounce and throttle?

---

## Tricky / Interview Twist Questions

33. Why does debounce sometimes feel “laggy”?
34. Why does throttle sometimes miss last event?
35. How to ensure last call is always executed?
36. Difference between debounce and **setTimeout directly**
37. Can we implement debounce using closures? (Expected: YES)

---

## Practical Coding Round Questions

38. Build a **search box with debounce (API call)**
39. Build a **scroll progress bar using throttle**
40. Optimize a button to prevent **multiple rapid clicks**
41. Limit API calls to **once per second**

---

## System / Performance Angle

42. How do debounce/throttle improve performance?
43. How do they reduce API load?
44. What is impact on **event loop and call stack**?
45. How do they help avoid **browser freezing**?

---

# Q23. What is debouncing in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. Definition

Debouncing is a technique where:

- A function is executed **only after a certain delay**
- And **only if no new event occurs during that delay**

---

### 2. Simple Understanding

If events keep happening:

- Timer keeps resetting
- Function runs **only once at the end**

---

### 3. Why do we need debouncing?

To:

- Prevent **too many function calls**
- Improve **performance**
- Reduce **API requests**

---

### 4. How it works (Core Idea)

- Start a timer when event occurs
- If another event comes → **clear previous timer**
- Start new timer
- Only last event gets executed

---

### Walkthrough

```javascript id="k2m8xp"
function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer); // reset timer

    timer = setTimeout(() => {
      fn(); // execute after delay
    }, delay);
  };
}
```

#### Step-by-step

- User types → function called
- Timer starts
- User types again → previous timer cleared
- Only after user stops typing → function runs

---

### 5. Real Behavior Visualization

Typing:
`T → Ta → Tan → Tani → Tanish`

Without debounce → 6 API calls
With debounce → **1 API call (after typing stops)**

---

## Example

Search input (most common use case)

```javascript id="p7k3mz"
function search() {
  console.log("API call");
}

const debouncedSearch = debounce(search, 500);

// simulate typing
debouncedSearch();
debouncedSearch();
debouncedSearch();
```

#### Output

```text id="t8k1vs"
API call   // only once
```

---

## Code Example

```javascript id="m9p2qx"
// Debounce with arguments and context

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    const context = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args); // preserve this + args
    }, delay);
  };
}

// Usage
const log = (msg) => console.log(msg);

const debouncedLog = debounce(log, 1000);

debouncedLog("Hello");
debouncedLog("Hello Again"); // only this runs
```

---

### Output

```text id="q4m7zp"
Hello Again
```

---

### Explanation

- First call cancelled
- Second call executed after delay
- Only last event matters

---

## Interview-Level Answer

Debouncing is a performance optimization technique in JavaScript where a function is executed only after a specified delay has passed since the last event. If the event is triggered again within the delay period, the previous execution is cancelled and the timer is reset.

It is commonly used in scenarios like search input, window resizing, and form validation to reduce unnecessary function calls and improve performance by ensuring that the function runs only once after user activity stops.

---

# Q24. What is throttling in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. Definition

Throttling is a technique where:

- A function is executed at **fixed time intervals**
- Even if the event is triggered many times

---

### 2. Simple Understanding

If events keep happening:

- Function runs **at most once every X milliseconds**

---

### 3. Why do we need throttling?

To:

- Control execution rate
- Improve performance
- Avoid excessive function calls

---

### 4. How it works (Core Idea)

- First event → function executes immediately
- Then ignore further events for a fixed time
- After time passes → allow next execution

---

### Walkthrough

```javascript id="k7m2xp"
function throttle(fn, limit) {
  let lastCall = 0;

  return function () {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn();
    }
  };
}
```

#### Step-by-step

- First call → runs immediately
- Next calls within time → ignored
- After interval → allowed again

---

### 5. Real Behavior Visualization

Scroll event firing rapidly:

Without throttle →

```
|||||||||||||||||||| (many calls)
```

With throttle (1 sec) →

```
|----|----|----| (controlled calls)
```

---

## Example

Scroll event example

```javascript id="p3k8mz"
function handleScroll() {
  console.log("Scroll handled");
}

const throttledScroll = throttle(handleScroll, 1000);

// simulate rapid calls
throttledScroll();
throttledScroll();
throttledScroll();
```

#### Output

```text id="t5k1vs"
Scroll handled   // first call
// next calls ignored until 1 sec passes
```

---

## Code Example

```javascript id="m4p2qx"
// Throttle with arguments and context

function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const context = this;
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(context, args);
    }
  };
}

// Usage
const log = (msg) => console.log(msg);

const throttledLog = throttle(log, 1000);

throttledLog("Call 1"); // executes
throttledLog("Call 2"); // ignored
```

---

### Output

```text id="q8m7zp"
Call 1
```

---

### Explanation

- First call runs
- Second call happens within limit → ignored
- Function runs again only after time interval

---

## Interview-Level Answer

Throttling is a performance optimization technique in JavaScript where a function is executed at most once within a specified time interval, regardless of how many times the event is triggered.

It ensures a controlled execution rate, making it useful for events like scrolling, resizing, or mouse movement where continuous rapid firing can impact performance. Unlike debouncing, throttling guarantees periodic execution instead of waiting for events to stop.

---

# Q25. What is the difference between debouncing and throttling?

---

## Concepts (with example + walkthrough)

### 1. Core Difference (Simple Understanding)

| Feature   | Debouncing                   | Throttling                             |
| --------- | ---------------------------- | -------------------------------------- |
| Execution | Runs **after delay ends**    | Runs **at fixed intervals**            |
| Trigger   | Only last event matters      | Multiple events handled (limited rate) |
| Behavior  | Wait → then execute          | Execute → then wait                    |
| Use case  | Stop unwanted repeated calls | Control frequency of calls             |

---

### 2. Visual Understanding

#### Debouncing

```text
Events:   |||||||||||||||
Output:             |
```

- Many events → **only one execution (last one)**

---

#### Throttling

```text
Events:   |||||||||||||||
Output:   |----|----|----|
```

- Many events → **controlled execution at intervals**

---

### 3. Key Idea

#### Debounce → “Wait until user stops”

#### Throttle → “Run every X time”

---

### 4. Example Comparison

---

#### Debouncing (Search Input)

```javascript id="d1k9xp"
const debouncedSearch = debounce(() => {
  console.log("API Call");
}, 500);

// User typing fast
debouncedSearch();
debouncedSearch();
debouncedSearch();
```

#### Output

```text id="a7m2vs"
API Call   // only once (after typing stops)
```

---

#### Throttling (Scroll Event)

```javascript id="b3k8qp"
const throttledScroll = throttle(() => {
  console.log("Scroll handled");
}, 1000);

// Rapid scrolling
throttledScroll();
throttledScroll();
throttledScroll();
```

#### Output

```text id="c9m1zx"
Scroll handled   // runs at interval
```

---

### Walkthrough

#### Debounce Flow

- Event happens
- Timer starts
- New event → reset timer
- Final event → function runs

---

#### Throttle Flow

- Event happens → function runs
- Ignore events for X ms
- After X ms → next execution allowed

---

### 5. When to Use What?

| Scenario         | Use Debounce | Use Throttle |
| ---------------- | ------------ | ------------ |
| Search input     | Yes          | No           |
| Button spam      | Yes          | Sometimes    |
| Scroll events    | No           | Yes          |
| Resize events    | Yes          | Yes          |
| API rate control | Yes          | Yes          |

---

## Example

Real-world:

- Debounce → typing, auto-save
- Throttle → scroll tracking, mouse movement

---

## Code Example

```javascript id="e5k2mz"
// Combined understanding example

function log() {
  console.log("Called");
}

// Debounced version
const debounced = debounce(log, 1000);

// Throttled version
const throttled = throttle(log, 1000);

// Simulate rapid calls
debounced();
debounced();
debounced(); // only last runs

throttled();
throttled();
throttled(); // runs at interval
```

---

### Output

```text id="f8m4qp"
Called   // debounce (once)
Called   // throttle (controlled)
```

---

### Explanation

- Debounce → only final call executed
- Throttle → limited repeated execution

---

## Interview-Level Answer

Debouncing and throttling are both performance optimization techniques used to control the frequency of function execution in JavaScript.

Debouncing ensures that a function is executed only after a specified delay has passed since the last event, making it ideal for scenarios like search inputs where we want to wait until the user stops typing.

Throttling, on the other hand, ensures that a function is executed at most once within a fixed time interval, making it suitable for continuous events like scrolling or resizing where periodic execution is needed.

The key difference is that debouncing delays execution until events stop, while throttling limits execution to a fixed rate.

---

# Q26. Why do we need debouncing and throttling, and in which scenarios are they used?

---

## Concepts (with example + walkthrough)

### 1. Why do we need them? (CORE PROBLEM)

In JavaScript, some events fire **very frequently**, like:

- `keyup` (typing)
- `scroll`
- `resize`
- `mousemove`

Without control → this leads to:

- Too many function calls
- Performance issues
- Excessive API requests
- UI lag / browser freeze

---

### Problem Example (Without Optimization)

```javascript
window.addEventListener("scroll", () => {
  console.log("Scroll event");
});
```

- Scroll once → **100+ events fired**
- Heavy logic inside → app becomes slow

---

### Solution

- **Debounce** → reduce calls by executing only once (after stop)
- **Throttle** → limit calls to fixed interval

---

## 2. When to use Debouncing?

### Use when you want:

- Execute **only after user stops doing something**

---

### Common Scenarios

#### (A) Search Input (MOST IMPORTANT)

```javascript
// User typing "Tanish"
T → Ta → Tan → Tani → Tanish
```

Without debounce → 6 API calls
With debounce → **1 API call**

---

#### (B) Form Validation

- Validate only after user stops typing
- Avoid constant validation calls

---

#### (C) Auto-save

- Save data after user stops typing

---

#### (D) Resize Event (UI recalculation)

- Run logic after resizing stops

---

### Key Idea

Debounce = **"Wait until user finishes"**

---

## 3. When to use Throttling?

### Use when you want:

- Execute function **continuously but in controlled rate**

---

### Common Scenarios

#### (A) Scroll Events

```javascript
window.addEventListener("scroll", throttledFunction);
```

- Track scroll position
- Lazy loading images
- Infinite scroll

---

#### (B) Mouse Movement

- Track cursor position
- Game / animations

---

#### (C) Button Click Protection

- Prevent spam clicking

---

#### (D) Window Resize (continuous updates)

- Update layout periodically

---

### Key Idea

Throttle = **"Run every X milliseconds"**

---

## 4. Side-by-Side Scenario Comparison

| Scenario              | Debounce | Throttle | Reason                  |
| --------------------- | -------- | -------- | ----------------------- |
| Search API            | Yes      | No       | Only last input matters |
| Scroll tracking       | No       | Yes      | Need continuous updates |
| Resize (final layout) | Yes      | No       | Only final size matters |
| Resize (live UI)      | No       | Yes      | Need smooth updates     |
| Button spam           | Yes      | Yes      | Depends on behavior     |

---

## 5. Walkthrough Example

```javascript
// Debounce: Search
debouncedSearch("T");
debouncedSearch("Ta");
debouncedSearch("Tan");
// Only last executes
```

```javascript
// Throttle: Scroll
throttledScroll();
throttledScroll();
throttledScroll();
// Executes at intervals
```

---

## Example

Real-world:

- Google search → debounce
- YouTube scroll → throttle
- Form validation → debounce
- Infinite scroll → throttle

---

## Code Example

```javascript
// Example combining both

function handleSearch() {
  console.log("Searching...");
}

function handleScroll() {
  console.log("Scrolling...");
}

const debouncedSearch = debounce(handleSearch, 500);
const throttledScroll = throttle(handleScroll, 1000);

// simulate
debouncedSearch();
debouncedSearch();

throttledScroll();
throttledScroll();
```

---

### Output

```text
Searching...   // once (debounce)
Scrolling...   // controlled (throttle)
```

---

### Explanation

- Debounce → waits for final input
- Throttle → limits frequency

---

## Interview-Level Answer

Debouncing and throttling are used to optimize performance by controlling how frequently a function is executed when events fire rapidly.

Debouncing is used when we want to delay execution until the user stops triggering the event, such as in search inputs or form validation, to reduce unnecessary API calls.

Throttling is used when we want to ensure a function executes at regular intervals, such as in scroll or resize events, to maintain smooth performance while still responding to continuous user actions.

Together, they help reduce load, improve user experience, and prevent performance bottlenecks in JavaScript applications.

---

# Q27. What problem do debouncing and throttling solve?

---

## Concepts (with example + walkthrough)

### 1. Core Problem

In JavaScript, many browser events fire **very frequently and rapidly**, such as:

- `scroll`
- `resize`
- `mousemove`
- `keyup` (typing)

---

### Problem Without Optimization

```javascript
window.addEventListener("scroll", () => {
  console.log("Scroll event fired");
});
```

#### What happens?

- One scroll → **dozens or hundreds of calls**
- Heavy logic → **performance issues**

---

### 2. Main Problems They Solve

---

### (A) Too Many Function Calls

- Events trigger continuously
- Function runs again and again unnecessarily

---

### (B) Performance Issues

- CPU overload
- UI lag / jank
- Browser slow or freeze

---

### (C) Excessive API Calls

```javascript
// typing search input
"T" → "Ta" → "Tan" → "Tani"
```

Without debounce:

- 4 API calls

With debounce:

- **1 API call**

---

### (D) Poor User Experience

- Laggy UI
- Flickering updates
- Unnecessary re-renders

---

### (E) Uncontrolled Event Execution

- No limit on how often code runs
- Difficult to manage behavior

---

## 3. How Debounce Solves It

```javascript
debouncedSearch();
debouncedSearch();
debouncedSearch();
```

✔ Executes **only once after user stops**
✔ Reduces unnecessary calls

---

## 4. How Throttle Solves It

```javascript
throttledScroll();
throttledScroll();
throttledScroll();
```

✔ Executes **at controlled intervals**
✔ Prevents overload

---

### 5. Visual Understanding

#### Without Optimization

```text
|||||||||||||||||||||||| (too many calls)
```

---

#### With Debounce

```text
            | (only last call)
```

---

#### With Throttle

```text
|----|----|----| (controlled calls)
```

---

### Walkthrough

#### Scenario: Search Input

```javascript
// Without debounce
search("T");
search("Ta");
search("Tan");
```

→ 3 API calls (wasteful)

---

```javascript
// With debounce
debouncedSearch("T");
debouncedSearch("Ta");
debouncedSearch("Tan");
```

→ Only **1 API call**

---

## Example

Real-world:

- Google search → debounce
- Infinite scroll → throttle
- Dragging elements → throttle

---

## Code Example

```javascript
// Without optimization
window.addEventListener("scroll", () => {
  heavyComputation(); // runs too many times
});

// With throttle
window.addEventListener(
  "scroll",
  throttle(() => {
    heavyComputation(); // controlled execution
  }, 1000),
);
```

---

### Output

```text
Before → Too many executions
After  → Controlled execution
```

---

### Explanation

- Debounce → reduces unnecessary executions
- Throttle → limits execution frequency

---

## Interview-Level Answer

Debouncing and throttling solve the problem of excessive function executions caused by high-frequency events like scrolling, typing, or resizing. Without these techniques, functions may be called too often, leading to performance issues, unnecessary API calls, and poor user experience.

Debouncing ensures that a function executes only after the event has stopped firing for a specified delay, reducing redundant calls. Throttling ensures that a function executes at a controlled rate, preventing overload while still allowing periodic updates.

Both techniques are essential for optimizing performance and improving responsiveness in JavaScript applications.

---

# Q28. How do debouncing and throttling work internally?

---

## Concepts (with example + walkthrough)

---

## 1. Internal Working of Debouncing

### Core Idea

Debouncing uses:

- **`setTimeout`**
- **`clearTimeout`**
- A **closure (to store timer)**

---

### Step-by-Step Flow

1. Event occurs → function called
2. Existing timer → **cleared**
3. New timer → started
4. If no new event → function executes after delay

---

### Internal Logic

```javascript id="y1k8xp"
function debounce(fn, delay) {
  let timer; // stored in closure

  return function (...args) {
    clearTimeout(timer); // remove previous timer

    timer = setTimeout(() => {
      fn.apply(this, args); // execute after delay
    }, delay);
  };
}
```

---

### Walkthrough

```javascript id="g2m9ls"
debouncedFn(); // call 1 → timer started
debouncedFn(); // call 2 → previous timer cleared
debouncedFn(); // call 3 → timer reset again
```

#### Result:

- Only **last call executes**

---

### Internal Timeline

```text id="q8m2xp"
Call:     |----|----|----|
Timer:    reset reset reset
Execute:              |
```

---

## 2. Internal Working of Throttling

### Core Idea

Throttling uses:

- **Timestamp OR flag**
- Optional `setTimeout`
- Closure to store last execution time

---

### Step-by-Step Flow

1. Event occurs → function runs immediately
2. Store **last execution time**
3. Ignore events until time limit passes
4. After interval → allow execution again

---

### Internal Logic (Timestamp Method)

```javascript id="z4k3pw"
function throttle(fn, limit) {
  let lastCall = 0; // stored in closure

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
```

---

### Walkthrough

```javascript id="v7m2qd"
throttledFn(); // executes
throttledFn(); // ignored
throttledFn(); // ignored
// after time
throttledFn(); // executes again
```

---

### Internal Timeline

```text id="p6k8zx"
Call:     |----|----|----|
Execute:  |         |
```

---

## 3. Key Difference Internally

| Feature   | Debounce              | Throttle           |
| --------- | --------------------- | ------------------ |
| Mechanism | Reset timer           | Check time gap     |
| Storage   | `timer`               | `lastCall` time    |
| Execution | After delay ends      | At intervals       |
| Behavior  | Cancel previous calls | Ignore extra calls |

---

## Example

Real-world:

- Debounce → search input (wait for stop)
- Throttle → scroll event (limit execution)

---

## Code Example

```javascript id="k9p2mz"
// Combined demo

const debounced = debounce(() => {
  console.log("Debounced");
}, 1000);

const throttled = throttle(() => {
  console.log("Throttled");
}, 1000);

// simulate rapid calls
debounced();
debounced();

throttled();
throttled();
```

---

### Output

```text id="m3k7xp"
Debounced   // once after delay
Throttled   // once immediately
```

---

### Explanation

- Debounce → keeps resetting timer → only last runs
- Throttle → allows execution only after interval

---

## Interview-Level Answer

Debouncing works internally by using a timer (`setTimeout`) that resets every time the function is called. If a new event occurs before the delay finishes, the previous timer is cleared using `clearTimeout`, ensuring that only the last event triggers execution after the delay.

Throttling works by tracking the last execution time and allowing the function to run only if a specified time interval has passed. Any calls within that interval are ignored. This ensures controlled, periodic execution instead of waiting for events to stop.

---

# Q29. What happens if debouncing delay or throttling interval is too high or too low?

---

## Concepts (with example + walkthrough)

This question tests **real-world understanding + UX + performance trade-offs**.

---

## 1. Debouncing Delay

---

### (A) Delay Too LOW

#### Behavior

- Function executes **too frequently**
- Almost like **no debounce**

```javascript id="k2p9xp"
// delay = 50ms (too low)
debounce(search, 50);
```

#### Problems

- Too many API calls
- Performance not improved
- Server load increases

---

### (B) Delay Too HIGH

#### Behavior

- Function executes **very late**
- User experiences **lag**

```javascript id="m4k7zp"
// delay = 2000ms (too high)
debounce(search, 2000);
```

#### Problems

- Slow response
- Bad UX (user waits too long)
- Feels unresponsive

---

### Ideal Range (Example)

| Use Case     | Delay      |
| ------------ | ---------- |
| Search input | 300–500ms  |
| Resize event | 200–300ms  |
| Auto-save    | 500–1000ms |

---

## 2. Throttling Interval

---

### (A) Interval Too LOW

#### Behavior

- Function executes **very frequently**
- Almost like **no throttle**

```javascript id="z8k3pw"
// interval = 50ms
throttle(scrollHandler, 50);
```

#### Problems

- High CPU usage
- Performance issues
- UI may lag

---

### (B) Interval Too HIGH

#### Behavior

- Function executes **too rarely**

```javascript id="x5m2qt"
// interval = 2000ms
throttle(scrollHandler, 2000);
```

#### Problems

- UI updates feel **choppy / delayed**
- Missing important updates
- Poor user experience

---

### Ideal Range (Example)

| Use Case        | Interval  |
| --------------- | --------- |
| Scroll tracking | 100–200ms |
| Mouse movement  | 50–100ms  |
| Resize (live)   | 100–300ms |

---

## 3. Visual Understanding

---

### Debounce

```text id="d1k9xp"
LOW delay  → | | | | | (many executions)
HIGH delay →        | (very late execution)
```

---

### Throttle

```text id="p3k8qp"
LOW interval  → | | | | | (too frequent)
HIGH interval → |-----|-----| (too slow)
```

---

## 4. Walkthrough

```javascript id="e7k2mz"
// Debounce example

debouncedSearch("T");
debouncedSearch("Ta");
debouncedSearch("Tan");
```

- Low delay → multiple API calls
- High delay → slow response

---

```javascript id="f9k1xp"
// Throttle example

throttledScroll();
throttledScroll();
throttledScroll();
```

- Low interval → heavy execution
- High interval → delayed UI

---

## Example

Real-world:

- Search bar → too high delay = feels broken
- Scroll tracking → too high interval = jumpy UI

---

## Code Example

```javascript id="g4k2qp"
// Wrong vs correct usage

// ❌ Bad debounce
const badDebounce = debounce(search, 10);

// ❌ Bad throttle
const badThrottle = throttle(scroll, 3000);

// ✅ Good values
const goodDebounce = debounce(search, 400);
const goodThrottle = throttle(scroll, 150);
```

---

### Output

```text id="h7k9zp"
Bad → poor performance / UX
Good → smooth + efficient
```

---

### Explanation

- Too low → no optimization
- Too high → poor responsiveness
- Balanced values → best UX + performance

---

## Interview-Level Answer

If the debounce delay is too low, the function executes too frequently, reducing the effectiveness of debouncing and causing unnecessary calls. If the delay is too high, the function execution is delayed too much, leading to poor user experience due to lag.

Similarly, if the throttling interval is too low, the function executes too often, defeating the purpose of throttling and impacting performance. If the interval is too high, the function executes too infrequently, resulting in delayed or choppy updates.

Therefore, choosing the right delay or interval is important to balance performance optimization and user experience.

---

# Q30. How do you create an object in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. Object Literal (Most Common)

Directly create object using `{}`

```javascript id="m5r0q3"
const user = {
  name: "Tanish",
  age: 22,
  isDev: true,
};
```

#### Key Points

- Simple and most used method
- Best for static/small objects

---

### 2. Using `new Object()`

```javascript id="1cv1v6"
const user = new Object();

user.name = "Tanish";
user.age = 22;
```

#### Key Points

- Same as object literal but less preferred
- More verbose

---

### 3. Constructor Function

Used when creating multiple similar objects

```javascript id="yq2b0t"
function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Tanish", 22);
const u2 = new User("Rahul", 25);
```

#### Key Points

- Uses `new` keyword
- Creates reusable structure

---

### 4. Using `Object.create()`

Creates object with specified prototype

```javascript id="1k0g3i"
const proto = {
  greet() {
    console.log("Hello");
  },
};

const user = Object.create(proto);

user.name = "Tanish";
```

#### Key Points

- Direct control over prototype
- Used in advanced scenarios

---

### 5. ES6 Classes

Modern way (syntactic sugar over constructor functions)

```javascript id="kqk8n3"
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const u1 = new User("Tanish", 22);
```

#### Key Points

- Cleaner and readable
- Internally works like constructor functions

---

### 6. Factory Function

Function that returns an object

```javascript id="xk2k5m"
function createUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

const user = createUser("Tanish", 22);
```

#### Key Points

- No `new` keyword needed
- More flexible

---

### Walkthrough

```javascript id="cgk1h7"
const user = {
  name: "Tanish",
};

user.age = 22; // adding new property

console.log(user);
```

#### Output

```id="n6y7c6"
{ name: "Tanish", age: 22 }
```

---

## Example

Real-world:

- User object in app:

```javascript id="6l6a2r"
const user = {
  id: 1,
  name: "Tanish",
  email: "tanish@gmail.com",
};
```

---

## Code Example

```javascript id="3u8hjq"
// Different ways together

// 1. Literal
const obj1 = { a: 1 };

// 2. Constructor
function Obj(a) {
  this.a = a;
}
const obj2 = new Obj(2);

// 3. Factory
const obj3 = (a) => ({ a });

console.log(obj1, obj2, obj3(3));
```

---

### Output

```id="2e6nlt"
{ a: 1 } { a: 2 } { a: 3 }
```

---

## Interview-Level Answer

Objects in JavaScript can be created in multiple ways, including object literals, constructor functions, the `new Object()` syntax, `Object.create()`, ES6 classes, and factory functions.

The most commonly used method is the object literal due to its simplicity. Constructor functions and classes are used when creating multiple instances of similar objects, while `Object.create()` provides direct control over prototypes. Factory functions offer a flexible alternative without using the `new` keyword.

Understanding these methods helps in choosing the right pattern based on scalability, readability, and use case.

---

# Q31. What are prototypes in JavaScript? Explain prototypal inheritance.

---

## Concepts (with example + walkthrough)

### 1. What is a Prototype?

In JavaScript, every object has an internal property called **`[[Prototype]]`** (accessible via `__proto__` or `Object.getPrototypeOf()`).

- It is a **reference to another object**
- Used for **sharing properties and methods**

---

### 2. Why Prototypes Exist

Instead of copying methods into every object:

- JS stores shared methods in prototype
- All objects can **reuse** them

This saves memory and improves performance

---

### 3. Prototype Example

```javascript id="6b4l2y"
function User(name) {
  this.name = name;
}

// Adding method to prototype
User.prototype.sayHello = function () {
  console.log("Hello " + this.name);
};

const u1 = new User("Tanish");
const u2 = new User("Rahul");

u1.sayHello(); // Hello Tanish
u2.sayHello(); // Hello Rahul
```

---

### Walkthrough

- `u1` does NOT have `sayHello`
- JS looks inside `User.prototype`
- Finds method → executes it

This is called **prototype lookup**

---

### 4. Prototype Chain

When accessing a property:

```javascript id="gy8q1b"
console.log(u1.toString());
```

JS searches in order:

1. Object itself (`u1`)
2. Its prototype (`User.prototype`)
3. Parent prototype (`Object.prototype`)
4. Ends at `null`

---

### 5. What is Prototypal Inheritance?

Prototypal inheritance means:

> One object can **inherit properties/methods from another object** using prototypes.

---

### Example

```javascript id="g2i3y0"
const parent = {
  greet() {
    console.log("Hello");
  },
};

const child = Object.create(parent);

child.name = "Tanish";

child.greet(); // Hello
```

---

### Walkthrough

- `child` doesn't have `greet`
- JS checks its prototype → finds in `parent`
- Executes method

---

### 6. Real Prototype Chain Example

```javascript id="o7a7xk"
const grandParent = {
  role: "Human",
};

const parent = Object.create(grandParent);
parent.name = "Parent";

const child = Object.create(parent);
child.age = 10;

console.log(child.role); // Human
```

---

### Flow

```text
child → parent → grandParent → null
```

---

### 7. Important Methods

#### (A) `Object.create()`

- Creates object with given prototype

#### (B) `hasOwnProperty()`

- Checks own property (not inherited)

```javascript id="y9a0pw"
console.log(child.hasOwnProperty("age")); // true
console.log(child.hasOwnProperty("role")); // false
```

---

## Example

Real-world:

- All arrays inherit methods like `.map()`, `.filter()`

```javascript id="w8dfkq"
const arr = [1, 2, 3];

arr.map((x) => x * 2); // comes from Array.prototype
```

---

## Code Example

```javascript id="7qoz1r"
// Full prototype + inheritance example

function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = function () {
  console.log("Some sound");
};

function Dog(name) {
  this.name = name;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);

const d1 = new Dog("Tom");

d1.sound(); // inherited method
```

---

### Output

```text id="xg1pzx"
Some sound
```

---

### Explanation

- `d1` → no `sound`
- checks `Dog.prototype`
- then `Animal.prototype` → finds `sound`

---

## Interview-Level Answer

In JavaScript, a prototype is an object from which other objects inherit properties and methods. Every JavaScript object has an internal reference to its prototype, forming a chain known as the prototype chain.

Prototypal inheritance is the mechanism by which one object can access properties and methods of another object through this prototype chain. When a property is accessed, JavaScript first looks at the object itself, and if not found, it searches up the prototype chain until it finds the property or reaches null.

This system allows efficient memory usage and code reuse, and it forms the foundation of JavaScript’s object-oriented behavior.

---

# Q32. What is the difference between object literals and constructor functions?

---

## Concepts (with example + walkthrough)

### 1. Object Literal

Object is created directly using `{}`

```javascript
const user1 = {
  name: "Tanish",
  age: 22,
  greet() {
    console.log("Hello " + this.name);
  },
};
```

#### Key Points

- Simple and direct
- Best for **single or small objects**
- No reuse structure

---

### 2. Constructor Function

Used to create multiple objects with same structure

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greet = function () {
  console.log("Hello " + this.name);
};

const user1 = new User("Tanish", 22);
const user2 = new User("Rahul", 25);
```

#### Key Points

- Uses `new` keyword
- Reusable blueprint
- Methods stored in prototype (memory efficient)

---

### 3. Core Difference

#### (A) Reusability

```javascript
// Object literal (duplicate code)
const u1 = { name: "A" };
const u2 = { name: "B" };
```

```javascript
// Constructor (reuse)
function User(name) {
  this.name = name;
}

const u1 = new User("A");
const u2 = new User("B");
```

---

#### (B) Memory Usage

```javascript
// Literal (each object has its own function)
const u1 = {
  greet: function () {},
};

const u2 = {
  greet: function () {},
};
```

```javascript
// Constructor (shared via prototype)
User.prototype.greet = function () {};
```

---

#### (C) Scalability

- Object literal → not good for many objects
- Constructor → ideal for multiple instances

---

### 4. Comparison Table

| Feature           | Object Literal        | Constructor Function     |
| ----------------- | --------------------- | ------------------------ |
| Syntax            | Simple `{}`           | Uses `function` + `new`  |
| Reusability       | Low                   | High                     |
| Memory Efficiency | Low (duplicate funcs) | High (shared prototype)  |
| Use Case          | Single object         | Multiple similar objects |
| Prototype usage   | No (manual)           | Yes (automatic)          |

---

### Walkthrough

```javascript
function User(name) {
  this.name = name;
}

const u1 = new User("Tanish");

console.log(u1.name);
```

#### Output

```
Tanish
```

#### Explanation

- `new` creates empty object
- `this` points to that object
- properties assigned
- object returned

---

## Example

Real-world:

- Object literal → config object

```javascript
const config = {
  apiUrl: "https://api.com",
  timeout: 5000,
};
```

- Constructor → user system

```javascript
const u1 = new User("Tanish");
const u2 = new User("Rahul");
```

---

## Code Example

```javascript
// Object Literal
const obj1 = {
  value: 10,
  getValue() {
    return this.value;
  },
};

// Constructor Function
function Obj(value) {
  this.value = value;
}

Obj.prototype.getValue = function () {
  return this.value;
};

const obj2 = new Obj(20);

console.log(obj1.getValue()); // 10
console.log(obj2.getValue()); // 20
```

---

### Output

```
10
20
```

---

## Interview-Level Answer

Object literals and constructor functions are two ways to create objects in JavaScript. Object literals use a simple `{}` syntax and are best suited for creating single or small objects. However, they are not ideal for creating multiple objects with the same structure, as they can lead to code duplication.

Constructor functions, on the other hand, act as blueprints for creating multiple objects using the `new` keyword. They allow methods to be shared via the prototype, making them more memory-efficient and scalable.

In short, object literals are used for simple, one-off objects, while constructor functions are used when creating multiple instances with shared behavior.

---

# Q33. How do you perform CRUD operations on object properties in JavaScript?

---

## Concepts (with example + walkthrough)

CRUD = **Create, Read, Update, Delete** operations on object properties

---

### 1. CREATE (Add property)

Add new property using dot notation or bracket notation

```javascript id="6e2n3h"
const user = { name: "Tanish" };

// Add new property
user.age = 22; // dot notation
user["city"] = "Delhi"; // bracket notation
```

---

### 2. READ (Access property)

```javascript id="o8g3y1"
console.log(user.name); // dot notation
console.log(user["city"]); // bracket notation
```

---

### 3. UPDATE (Modify property)

```javascript id="2iqn6k"
user.age = 23; // update existing value
```

---

### 4. DELETE (Remove property)

```javascript id="9r8x3m"
delete user.city;
```

---

### Walkthrough

```javascript id="d4l9yf"
const user = { name: "Tanish" };

// CREATE
user.age = 22;

// READ
console.log(user.age); // 22

// UPDATE
user.age = 25;

// DELETE
delete user.name;

console.log(user);
```

#### Output

```id="q6u1zp"
{ age: 25 }
```

---

### 5. Dot vs Bracket Notation

```javascript id="6r7o1x"
const user = {
  "first name": "Tanish",
};

// dot ❌ (invalid)
// user.first name

// bracket ✅
console.log(user["first name"]);
```

#### Key Difference

- Dot → simple keys
- Bracket → dynamic keys / spaces

---

### 6. Dynamic Property Access

```javascript id="k5c8bn"
const key = "age";

user[key] = 30; // dynamic update
```

---

### 7. Check Property Exists

```javascript id="1i7g5m"
console.log("age" in user); // true/false
console.log(user.hasOwnProperty("age"));
```

---

## Example

Real-world:

```javascript id="m3x5l2"
const cart = { item: "Laptop" };

// Add quantity
cart.quantity = 1;

// Update quantity
cart.quantity = 2;

// Read
console.log(cart.quantity);

// Delete item
delete cart.item;
```

---

## Code Example

```javascript id="s8j2k1"
// Full CRUD Example

const product = { name: "Phone" };

// CREATE
product.price = 20000;

// READ
console.log(product.price);

// UPDATE
product.price = 18000;

// DELETE
delete product.name;

console.log(product);
```

---

### Output

```id="x4p9jd"
20000
{ price: 18000 }
```

---

## Interview-Level Answer

CRUD operations on JavaScript objects refer to Create, Read, Update, and Delete operations on object properties.

- Create: Add properties using dot or bracket notation
- Read: Access properties using dot or bracket notation
- Update: Modify existing property values
- Delete: Remove properties using the `delete` operator

Dot notation is used for simple keys, while bracket notation is useful for dynamic or complex keys. These operations are fundamental for managing object data in JavaScript applications.

---

# Q34. What is the Event Loop in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. Definition

The **Event Loop** is a mechanism in JavaScript that allows **non-blocking (asynchronous) operations** even though JavaScript is **single-threaded**.

It continuously checks:

- **Call Stack**
- **Callback Queue**
- **Microtask Queue**

And decides **what to execute next**

---

### 2. Why Event Loop is Needed

JavaScript is single-threaded → can do only one task at a time

Problem:

- What if a task takes time? (API call, timer)

Solution:

- Use **Event Loop + Web APIs + Queues**

---

### 3. Core Components

#### (A) Call Stack

- Where code executes
- Follows LIFO (Last In First Out)

---

#### (B) Web APIs (Browser/Node)

- Handles async tasks (setTimeout, fetch, DOM events)

---

#### (C) Callback Queue (Macrotask Queue)

- Stores callbacks like `setTimeout`, `setInterval`

---

#### (D) Microtask Queue (High Priority)

- Stores:
  - Promises (`.then`)
  - `queueMicrotask`

---

#### (E) Event Loop

- Moves tasks from queues → Call Stack when empty

---

### 4. Execution Flow

```text
Call Stack → Web APIs → Queue → Event Loop → Call Stack
```

---

### 5. Example (Basic Async)

```javascript id="b0z2r9"
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

---

### Walkthrough

1. `"Start"` → runs immediately
2. `setTimeout` → goes to Web API
3. `"End"` → runs
4. Timeout callback → goes to Callback Queue
5. Event Loop → pushes it to stack

---

### Output

```text id="5x0t8r"
Start
End
Timeout
```

---

### 6. Microtask vs Macrotask (Important)

```javascript id="m7t9k2"
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

---

### Output

```text id="l3v6a1"
Start
End
Promise
Timeout
```

---

### Explanation

- Promise → Microtask (HIGH priority)
- setTimeout → Macrotask (LOW priority)

Order:

1. Call stack completes
2. Microtasks run
3. Then macrotasks

---

### 7. Visual Flow

```text id="t9p2h4"
[Call Stack Empty]
        ↓
[Run all Microtasks]
        ↓
[Run one Macrotask]
        ↓
Repeat
```

---

## Example

Real-world:

- API call (fetch) → async
- Button click → event queue
- Promises → microtasks

---

## Code Example

```javascript id="s3n8k1"
// Complex Event Loop Example

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

---

### Output

```text id="r7d1x2"
1
4
3
2
```

---

### Explanation

- 1 → sync
- 4 → sync
- 3 → microtask
- 2 → macrotask

---

## Interview-Level Answer

The event loop is a core mechanism in JavaScript that enables asynchronous, non-blocking behavior despite JavaScript being single-threaded. It continuously monitors the call stack and task queues (microtask and macrotask queues).

When the call stack becomes empty, the event loop first executes all microtasks (such as promise callbacks) and then processes macrotasks (such as setTimeout callbacks). This ensures efficient execution of asynchronous operations like API calls, timers, and event handling without blocking the main thread.

---

# Q35. Explain how callbacks work in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. What is a Callback?

A **callback function** is a function that is **passed as an argument** to another function and is **executed later**.

```javascript
function greet(name, callback) {
  callback(name);
}
```

---

### 2. Basic Working

```javascript
function greet(name, callback) {
  console.log("Processing...");

  callback(name); // calling the callback
}

function sayHello(name) {
  console.log("Hello " + name);
}

greet("Tanish", sayHello);
```

---

### Walkthrough

1. `greet()` is called
2. `sayHello` is passed as callback
3. Inside `greet`, callback is executed
4. Output is produced

---

### Output

```text
Processing...
Hello Tanish
```

---

### 3. Why Callbacks are Used

- To run code **after a task completes**
- Handle **asynchronous operations**
- Enable **flexible and reusable functions**

---

### 4. Callback with Async Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Task Done");
}, 1000);

console.log("End");
```

---

### Walkthrough

- `setTimeout` registers callback
- JS continues execution
- After delay → callback runs

---

### Output

```text
Start
End
Async Task Done
```

---

### 5. Callback in Real Scenario

```javascript
function fetchData(callback) {
  console.log("Fetching data...");

  setTimeout(() => {
    const data = { id: 1 };
    callback(data); // pass result
  }, 1000);
}

fetchData(function (data) {
  console.log("Received:", data);
});
```

---

### Flow

```text
fetchData → async work → callback executed with result
```

---

### 6. Callback Types

#### (A) Synchronous Callback

```javascript
[1, 2, 3].forEach(function (num) {
  console.log(num);
});
```

- Runs immediately

---

#### (B) Asynchronous Callback

```javascript
setTimeout(() => {
  console.log("Runs later");
}, 1000);
```

- Runs later (after delay)

---

### 7. Problem: Callback Hell

Nested callbacks → hard to read

```javascript
setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
```

#### Issue

- Deep nesting
- Hard to debug

---

### Solution (Modern JS)

- Promises
- Async/Await

---

## Example

Real-world:

- Button click → callback function
- API request → callback on response
- File read → callback after completion

---

## Code Example

```javascript
// Custom callback example

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(2, 3, add)); // 5
console.log(calculate(2, 3, multiply)); // 6
```

---

### Output

```text
5
6
```

---

### Explanation

- `calculate` takes function as input
- Calls it based on requirement
- Makes function reusable and flexible

---

## Interview-Level Answer

A callback in JavaScript is a function that is passed as an argument to another function and is executed after a certain operation is completed. Callbacks are widely used for handling asynchronous operations like API calls, timers, and event handling.

They allow JavaScript to perform non-blocking operations by executing functions once a task is finished. However, excessive nesting of callbacks can lead to callback hell, which is why modern JavaScript uses Promises and async/await for better readability and control.

---

# Q36. What are Promises and how do they manage asynchronous code in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. What is a Promise?

A **Promise** is an object that represents the **result of an asynchronous operation** (success or failure).

It acts like a **placeholder for future value**.

---

### 2. Promise States

A promise has 3 states:

| State     | Meaning                 |
| --------- | ----------------------- |
| Pending   | Initial state (waiting) |
| Fulfilled | Operation successful    |
| Rejected  | Operation failed        |

---

### 3. Creating a Promise

```javascript id="2n3k5d"
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data fetched");
  } else {
    reject("Error occurred");
  }
});
```

---

### 4. Consuming a Promise

```javascript id="9k2j7d"
promise
  .then((data) => {
    console.log(data); // success
  })
  .catch((err) => {
    console.log(err); // error
  });
```

---

### Walkthrough

1. Promise created → state = pending
2. `resolve()` → goes to `.then()`
3. `reject()` → goes to `.catch()`

---

### Output

```text id="m7t1k4"
Data fetched
```

---

### 5. Why Promises are Used

- Handle async operations (API, DB, timers)
- Avoid **callback hell**
- Provide better structure and chaining

---

### 6. Promise with Async Example

```javascript id="g5n3s8"
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

### Flow

```text id="k8d2l9"
Call function → Promise pending → after delay resolve → .then runs
```

---

### 7. Promise Chaining

```javascript id="h7x9p2"
fetchData()
  .then((data) => {
    console.log(data);
    return "Processed Data";
  })
  .then((result) => {
    console.log(result);
  });
```

---

### Output

```text id="y4f6g1"
Data received
Processed Data
```

---

### 8. Error Handling

```javascript id="z3k8v0"
const p = new Promise((_, reject) => {
  reject("Something went wrong");
});

p.catch((err) => console.log(err));
```

---

### 9. Promise vs Callback

| Feature        | Callback      | Promise               |
| -------------- | ------------- | --------------------- |
| Readability    | Poor (nested) | Better (chaining)     |
| Error Handling | Difficult     | Centralized (`catch`) |
| Structure      | Messy         | Clean                 |

---

### 10. Microtask Queue

- Promise `.then()` runs in **microtask queue**
- Executes **before setTimeout**

```javascript id="k1v8r3"
setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));
```

#### Output

```text id="d7k3p1"
Promise
Timeout
```

---

## Example

Real-world:

- Fetch API data
- Login request
- File processing

```javascript id="f9l2a7"
fetch("https://api.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

---

## Code Example

```javascript id="q4n7w2"
// Full Promise Example

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("Positive number");
    } else {
      reject("Negative number");
    }
  });
}

checkNumber(5)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
```

---

### Output

```text id="v1n5s8"
Positive number
```

---

### Explanation

- Function returns promise
- Based on condition → resolve/reject
- `.then` / `.catch` handle result

---

## Interview-Level Answer

A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.

Promises help manage asynchronous code by providing a cleaner and more structured way to handle results using `.then()` for success and `.catch()` for errors. They avoid callback hell and support chaining, making code more readable and maintainable.

Additionally, promise callbacks are executed in the microtask queue, which gives them higher priority over other asynchronous tasks like setTimeout.

---

# Q37. Explain async/await in JavaScript and how it differs from Promises?

---

## Concepts (with example + walkthrough)

### 1. What is `async/await`?

`async/await` is a **syntactic sugar over Promises** that makes asynchronous code look like **synchronous code**.

- `async` → makes a function return a Promise
- `await` → pauses execution until Promise resolves

---

### 2. Basic Syntax

```javascript id="v8n3k1"
async function fetchData() {
  return "Data";
}
```

- Always returns a Promise

---

### 3. Using `await`

```javascript id="l2k9d4"
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

async function main() {
  const data = await getData(); // waits here
  console.log(data);
}

main();
```

---

### Walkthrough

1. `main()` starts
2. `await getData()` pauses execution
3. After 1 second → Promise resolves
4. Execution resumes → logs result

---

### Output

```text id="g7p2n9"
Data received
```

---

### 4. Error Handling with `try/catch`

```javascript id="c3m8q1"
async function test() {
  try {
    let res = await Promise.reject("Error occurred");
  } catch (err) {
    console.log(err);
  }
}

test();
```

---

### 5. Behind the Scenes

```javascript id="z9t4w7"
// async/await internally uses promises

async function demo() {
  return "Hello";
}

// same as:
function demo() {
  return Promise.resolve("Hello");
}
```

---

### 6. Difference: Promises vs Async/Await

#### (A) Syntax

```javascript id="k7m1a3"
// Promise style
getData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
```

```javascript id="q2r8n6"
// Async/Await style
async function run() {
  try {
    const data = await getData();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

---

#### (B) Readability

- Promises → chaining (`.then().then()`)
- Async/Await → looks like normal code

---

#### (C) Error Handling

- Promises → `.catch()`
- Async/Await → `try/catch`

---

#### (D) Execution Style

- Promises → continues immediately
- Await → pauses execution inside async function

---

### 7. Comparison Table

| Feature        | Promises          | Async/Await          |
| -------------- | ----------------- | -------------------- |
| Syntax         | `.then().catch()` | `async/await`        |
| Readability    | Moderate          | High (clean, linear) |
| Error Handling | `.catch()`        | `try/catch`          |
| Flow           | Chain-based       | Sequential-like      |
| Debugging      | Harder            | Easier               |

---

### 8. Important Note

```javascript id="u6p3d8"
async function test() {
  console.log("Start");

  await Promise.resolve();

  console.log("End");
}
```

- `await` always pauses → even if Promise is resolved

---

## Example

Real-world:

- API call using async/await

```javascript id="y4n7k2"
async function fetchUser() {
  const res = await fetch("https://api.com/user");
  const data = await res.json();
  console.log(data);
}
```

---

## Code Example

```javascript id="f2w8n5"
// Compare both styles clearly

function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000);
  });
}

// Promise style
getNumber().then((num) => {
  console.log("Promise:", num);
});

// Async/Await style
async function run() {
  const num = await getNumber();
  console.log("Async/Await:", num);
}

run();
```

---

### Output

```text id="h9m2k7"
Promise: 10
Async/Await: 10
```

---

### Explanation

- Both give same result
- Async/Await → cleaner and easier to understand

---

## Interview-Level Answer

Async/await is a modern way to handle asynchronous operations in JavaScript, built on top of Promises. The `async` keyword makes a function return a Promise, and the `await` keyword pauses execution until the Promise resolves.

Compared to traditional Promise chaining using `.then()` and `.catch()`, async/await provides a more readable and synchronous-like structure. It also simplifies error handling using try/catch blocks instead of separate `.catch()` methods.

In summary, async/await improves code readability and maintainability while still using Promises under the hood.

---

# Q39. What are Microtasks (Jobs) and Macrotasks in JavaScript?

---

## Concepts (with example + walkthrough)

### 1. What are Microtasks (Jobs)?

Microtasks (Jobs) are **high-priority tasks** executed **immediately after the current code finishes**, before any macrotask.

#### Examples:

- `Promise.then()`
- `Promise.catch()`
- `Promise.finally()`
- `queueMicrotask()`

---

### 2. What are Macrotasks?

Macrotasks are **lower-priority tasks** that run **after all microtasks are completed**.

#### Examples:

- `setTimeout`
- `setInterval`
- `setImmediate` (Node.js)
- DOM events (click, load)

---

### 3. Core Difference

| Feature   | Microtask (Job) | Macrotask        |
| --------- | --------------- | ---------------- |
| Priority  | High            | Low              |
| Runs When | After sync code | After microtasks |
| Examples  | Promises        | setTimeout       |
| Execution | All at once     | One by one       |

---

### 4. Execution Order (VERY IMPORTANT)

```text id="f8k3n2"
1. Run synchronous code
2. Run ALL microtasks
3. Run ONE macrotask
4. Repeat cycle
```

---

### 5. Example (Classic Interview)

```javascript id="j3k9m2"
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

---

### Walkthrough

1. `"Start"` → sync
2. `setTimeout` → macrotask queue
3. `Promise.then` → microtask queue
4. `"End"` → sync
5. Run microtasks → `"Promise"`
6. Run macrotask → `"Timeout"`

---

### Output

```text id="p5r2x7"
Start
End
Promise
Timeout
```

---

### 6. Multiple Microtasks

```javascript id="v2n8k4"
Promise.resolve().then(() => console.log("A"));
Promise.resolve().then(() => console.log("B"));
```

#### Output

```text id="m7k1s9"
A
B
```

- All microtasks run **in order before any macrotask**

---

### 7. Mixed Example

```javascript id="y9t4k6"
console.log("1");

setTimeout(() => console.log("2"), 0);

queueMicrotask(() => console.log("3"));

Promise.resolve().then(() => console.log("4"));

console.log("5");
```

---

### Output

```text id="c3n8p1"
1
5
3
4
2
```

---

### Explanation

- 1, 5 → sync
- 3, 4 → microtasks
- 2 → macrotask

---

### 8. Visual Flow

```text id="x8p2m4"
[Call Stack Empty]
        ↓
[Run all Microtasks]
        ↓
[Run one Macrotask]
        ↓
Repeat
```

---

## Example

Real-world:

- Promise → API response handling
- setTimeout → delayed UI update
- Click event → macrotask

---

## Code Example

```javascript id="u6r2k8"
// Real-world like sequence

console.log("Fetching...");

setTimeout(() => console.log("Timer Done"), 0);

Promise.resolve().then(() => console.log("Data Processed"));

console.log("UI Ready");
```

---

### Output

```text id="z2k7p5"
Fetching...
UI Ready
Data Processed
Timer Done
```

---

### Explanation

- UI loads first
- Data processed (microtask)
- Timer runs later

---

## Interview-Level Answer

In JavaScript, microtasks (also called jobs) and macrotasks are two types of tasks managed by the event loop. Microtasks, such as Promise callbacks and queueMicrotask, have higher priority and are executed immediately after the current synchronous code finishes.

Macrotasks, such as setTimeout, setInterval, and event handlers, are executed only after all microtasks are completed. The event loop ensures that all microtasks are processed first before moving to the next macrotask, enabling efficient handling of asynchronous operations.

---

# Q40. How do you select DOM elements using JavaScript?

---

## Concepts (with example + walkthrough)

### 1. What is DOM Selection?

DOM (Document Object Model) represents HTML as a **tree structure**.

JavaScript uses **selectors** to:

- Access elements
- Modify content
- Add events
- Change styles

---

### 2. Main Methods to Select Elements

---

### (A) getElementById()

#### Selects a single element using `id`

```javascript
let el = document.getElementById("title");
```

- Returns: **single element or null**
- Fastest method

---

### (B) getElementsByClassName()

#### Selects elements using `class`

```javascript
let items = document.getElementsByClassName("item");
```

- Returns: **HTMLCollection (array-like)**
- Live collection (updates automatically)

---

### (C) getElementsByTagName()

#### Selects elements by tag name

```javascript
let divs = document.getElementsByTagName("div");
```

- Returns: **HTMLCollection**

---

### (D) querySelector()

#### Selects first matching element (CSS selector)

```javascript
let el = document.querySelector(".item");
```

- Returns: **first match only**
- Supports all CSS selectors

---

### (E) querySelectorAll()

#### Selects all matching elements

```javascript
let items = document.querySelectorAll(".item");
```

- Returns: **NodeList**
- Not live (static snapshot)

---

### 3. Key Differences

| Method                 | Returns        | Single/Multiple | Notes                   |
| ---------------------- | -------------- | --------------- | ----------------------- |
| getElementById         | Element        | Single          | Fastest                 |
| getElementsByClassName | HTMLCollection | Multiple        | Live                    |
| getElementsByTagName   | HTMLCollection | Multiple        | Live                    |
| querySelector          | Element        | Single          | CSS selectors supported |
| querySelectorAll       | NodeList       | Multiple        | Static (not live)       |

---

### Walkthrough

```html
<div id="box">Hello</div>
<p class="text">One</p>
<p class="text">Two</p>
```

```javascript
// Select by ID
let box = document.getElementById("box");

// Select first .text
let first = document.querySelector(".text");

// Select all .text
let all = document.querySelectorAll(".text");

console.log(all.length); // 2
```

---

## Example

Real-world use case:

- Selecting input field in login form:

```javascript
let emailInput = document.querySelector("#email");
```

- Selecting all buttons:

```javascript
let buttons = document.querySelectorAll("button");
```

---

## Code Example

```javascript
// Example: change text of all items

// Step 1: select all elements with class "item"
let items = document.querySelectorAll(".item");

// Step 2: loop through NodeList
items.forEach((item) => {
  item.innerText = "Updated"; // change text
});
```

---

## Interview-Level Answer

In JavaScript, DOM elements can be selected using methods like `getElementById`, `getElementsByClassName`, and `getElementsByTagName`, as well as modern methods like `querySelector` and `querySelectorAll`.

`getElementById` returns a single element, while `getElementsByClassName` and `getElementsByTagName` return live collections. `querySelector` returns the first matching element using CSS selectors, and `querySelectorAll` returns a static NodeList of all matching elements.

These methods are essential for manipulating the DOM, handling user interactions, and dynamically updating web pages.

---

# Q41. Explain event propagation in the DOM?

---

## Concepts (with example + walkthrough)

### 1. What is Event Propagation?

Event propagation defines **how an event travels through the DOM tree** when an event (like click) occurs.

There are **3 phases**:

1. **Capturing Phase (Top → Down)**
2. **Target Phase**
3. **Bubbling Phase (Bottom → Up)**

---

### 2. Phases Explained

---

### (A) Capturing Phase (Event Capturing)

- Event starts from **root (document)**
- Travels **downwards to target element**

```javascript
document.addEventListener(
  "click",
  () => {
    console.log("Document Capturing");
  },
  true,
); // true = capturing
```

---

### (B) Target Phase

- Event reaches the **actual clicked element**

```javascript
button.addEventListener("click", () => {
  console.log("Button Clicked");
});
```

---

### (C) Bubbling Phase (Default)

- Event moves **upwards from target to root**

```javascript
parent.addEventListener("click", () => {
  console.log("Parent Bubbling");
});
```

---

### 3. Visual Flow

```
Document
  ↓ (Capturing)
Parent
  ↓
Child (Target)
  ↑ (Bubbling)
Parent
  ↑
Document
```

---

### 4. Example DOM Structure

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

---

### Walkthrough

```javascript
let parent = document.getElementById("parent");
let child = document.getElementById("child");

// Capturing phase
parent.addEventListener(
  "click",
  () => {
    console.log("Parent Capturing");
  },
  true,
);

// Bubbling phase
parent.addEventListener("click", () => {
  console.log("Parent Bubbling");
});

// Target
child.addEventListener("click", () => {
  console.log("Child Clicked");
});
```

---

### Output (on button click)

```
Parent Capturing
Child Clicked
Parent Bubbling
```

---

### Explanation

1. Event starts from top → capturing
2. Reaches target → executes
3. Goes back up → bubbling

---

### 5. Controlling Propagation

---

#### (A) stopPropagation()

Stops event from moving further

```javascript
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Only Child Runs");
});
```

---

#### (B) stopImmediatePropagation()

Stops:

- Further propagation
- Other handlers on same element

```javascript
element.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
});
```

---

### 6. Event Delegation (Important Use Case)

Instead of adding multiple listeners:

```javascript
parent.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked via delegation");
  }
});
```

- Uses **bubbling**
- Improves performance

---

## Example

Real-world:

- Clicking a list item inside a `<ul>`
- Instead of adding listener to each `<li>`, use parent `<ul>`

---

## Code Example

```javascript
// Event delegation example

let list = document.getElementById("list");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.innerText);
  }
});
```

---

## Interview-Level Answer

Event propagation in the DOM is the process by which an event travels through the DOM tree. It consists of three phases: capturing, target, and bubbling.

In the capturing phase, the event moves from the root down to the target element. In the target phase, the event is handled on the actual element. In the bubbling phase, the event propagates back up to the root.

By default, events follow the bubbling phase, but capturing can be enabled using the third parameter in addEventListener. Methods like stopPropagation and stopImmediatePropagation can be used to control this flow. Event propagation is also the foundation for techniques like event delegation.

---

# Q42. How do you prevent a form from submitting using JavaScript?

---

## Concepts (with example + walkthrough)

### 1. Default Behavior of Forms

- When a form is submitted:
  - Page reloads
  - Data is sent to server

We often **prevent this default behavior** when:

- Validating input
- Handling form via JavaScript (AJAX / fetch)
- Building SPA (React, etc.)

---

### 2. Using `event.preventDefault()`

This is the **correct and modern way**.

```javascript id="d9r3k1"
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stops form submission
});
```

---

### 3. How It Works

- Browser fires a **submit event**
- JS intercepts it
- `preventDefault()` stops:
  - Page reload
  - Form data sending

---

### 4. Example Form

```html id="l2o4vz"
<form id="myForm">
  <input type="text" id="name" />
  <button type="submit">Submit</button>
</form>
```

---

### Walkthrough

```javascript id="c6mjgs"
// Step 1: select form
let form = document.getElementById("myForm");

// Step 2: attach submit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop default submission

  console.log("Form submission prevented");

  // custom logic
  let name = document.getElementById("name").value;
  console.log("Name:", name);
});
```

---

### Output

```id="0h9a2k"
Form submission prevented
Name: (entered value)
```

---

### 5. Alternative (Not Recommended)

#### Using `return false`

```html id="e3m8z9"
<form onsubmit="return false;"></form>
```

- Works, but:
  - Not clean
  - Not scalable
  - Avoid in modern JS

---

### 6. When to Use

- Form validation
- API-based submission (fetch / axios)
- Prevent accidental reload

---

## Example

Real-world:

- Login form:
  - Validate email/password
  - Send API request
  - Show error/success without reload

---

## Code Example

```javascript id="t8v9qw"
// Example: validation before submission

let form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop submission

  let name = document.getElementById("name").value;

  if (name === "") {
    console.log("Name is required");
  } else {
    console.log("Form is valid");
    // you can send API request here
  }
});
```

---

## Interview-Level Answer

To prevent a form from submitting in JavaScript, we use the `event.preventDefault()` method inside a submit event listener. This stops the browser's default behavior of reloading the page and sending form data.

This is commonly used for form validation and handling submissions using JavaScript, such as sending data via APIs instead of traditional form submission.

---

# Q43. What are Web APIs in the context of JavaScript?

---

## Concepts (with example + walkthrough)

### 1. What are Web APIs?

Web APIs are **browser-provided features** that JavaScript can use to interact with:

- Browser
- System
- Network
- UI

Important:

- **Web APIs are NOT part of JavaScript language itself**
- They are provided by the **browser environment (Chrome, Firefox, etc.)**

---

### 2. Why Web APIs exist

JavaScript alone:

- Cannot access DOM
- Cannot make HTTP requests
- Cannot use timers

Web APIs provide these capabilities.

---

### 3. Common Web APIs

---

### (A) DOM API

Used to interact with HTML elements

```javascript id="e3kq7p"
document.getElementById("title").innerText = "Hello";
```

---

### (B) Timer APIs

```javascript id="k8h2x1"
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);
```

---

### (C) Fetch API (HTTP Requests)

```javascript id="m2w9dz"
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

### (D) Local Storage API

```javascript id="q7d4ka"
localStorage.setItem("name", "Tanish");
console.log(localStorage.getItem("name"));
```

---

### (E) Geolocation API

```javascript id="x5r1vb"
navigator.geolocation.getCurrentPosition((pos) => {
  console.log(pos.coords.latitude);
});
```

---

### 4. How Web APIs Work with JS (Event Loop Concept)

```javascript id="k3v8po"
console.log("Start");

setTimeout(() => {
  console.log("From Web API");
}, 1000);

console.log("End");
```

---

### Walkthrough

```id="z8n2cs"
Start
End
From Web API
```

#### Explanation:

1. JS runs synchronous code → `Start`, `End`
2. `setTimeout` is handled by **Web API**
3. After delay → callback goes to **callback queue**
4. Event loop executes it later

---

### 5. Key Insight

| Component      | Role                          |
| -------------- | ----------------------------- |
| JavaScript     | Executes code                 |
| Web APIs       | Handle async/browser features |
| Callback Queue | Stores async callbacks        |
| Event Loop     | Moves tasks to call stack     |

---

## Example

Real-world:

- Clicking a button → DOM API
- Fetching user data → Fetch API
- Saving preferences → LocalStorage
- Delays/animations → setTimeout

---

## Code Example

```javascript id="z1n7hd"
// Example combining Web APIs

console.log("Loading...");

// Timer API
setTimeout(() => {
  console.log("Fetching data...");

  // Fetch API
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      console.log("Data received:", data);
    });
}, 2000);
```

---

## Interview-Level Answer

Web APIs are browser-provided functionalities that allow JavaScript to interact with the browser environment, such as manipulating the DOM, making HTTP requests, using timers, and accessing storage.

They are not part of the core JavaScript language but are provided by the browser runtime. Web APIs work alongside JavaScript and the event loop to handle asynchronous operations like setTimeout and fetch, enabling dynamic and interactive web applications.

---

# Q44. What are the new features introduced in ES6 (ECMAScript 2015)?

---

## Concepts (with example + walkthrough)

ES6 (ECMAScript 2015) introduced major improvements to JavaScript, making it more **modern, readable, and powerful**.

---

### 1. `let` and `const` (Block Scoped Variables)

#### Problem with `var`

- Function-scoped
- Hoisting issues

#### Solution

```javascript
let a = 10; // can change
const b = 20; // cannot reassign
```

#### Walkthrough

```javascript
if (true) {
  let x = 5;
}
// console.log(x); // Error (block scope)
```

---

### 2. Arrow Functions

Shorter syntax + no `this` binding issue

```javascript
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;
```

---

### 3. Template Literals

Use backticks `` ` `` for dynamic strings

```javascript
let name = "Tanish";

console.log(`Hello ${name}`);
```

---

### 4. Destructuring (Array & Object)

Extract values easily

```javascript
// Array destructuring
const arr = [1, 2];
const [a, b] = arr;

// Object destructuring
const user = { name: "Tanish", age: 22 };
const { name, age } = user;
```

---

### 5. Default Parameters

```javascript
function greet(name = "Guest") {
  return `Hello ${name}`;
}
```

---

### 6. Spread and Rest Operators (`...`)

#### Spread → expand values

```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
```

#### Rest → collect values

```javascript
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
```

---

### 7. Classes (Syntactic Sugar over Prototypes)

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
```

---

### 8. Modules (import/export)

```javascript
// file1.js
export const name = "Tanish";

// file2.js
import { name } from "./file1.js";
```

---

### 9. Promises (Async Handling)

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("Done");
});

promise.then((res) => console.log(res));
```

---

### 10. `for...of` Loop

```javascript
const arr = [1, 2, 3];

for (let value of arr) {
  console.log(value);
}
```

---

### 11. Map and Set

```javascript
// Map
const map = new Map();
map.set("name", "Tanish");

// Set
const set = new Set([1, 2, 2, 3]); // duplicates removed
```

---

### 12. Symbol (Unique Identifier)

```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
```

---

### Walkthrough (Combined Example)

```javascript
const user = {
  name: "Tanish",
  age: 22,
};

// Destructuring + template literal
const { name, age } = user;

const greet = (name = "Guest") => `Hello ${name}`;

console.log(greet(name));
```

---

## Example

Real-world usage:

- React uses:
  - Arrow functions
  - Destructuring
  - Modules

- Backend uses:
  - Promises
  - Classes

---

## Code Example

```javascript
// Example using multiple ES6 features

const numbers = [1, 2, 3];

// Spread operator
const newNumbers = [...numbers, 4, 5];

// Arrow function + rest
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);

console.log(sum(...newNumbers)); // 15
```

---

## Interview-Level Answer

ES6 (ECMAScript 2015) introduced several important features that modernized JavaScript. Key features include block-scoped variables (`let`, `const`), arrow functions, template literals, destructuring, default parameters, spread and rest operators, classes, modules, promises, and new data structures like Map and Set.

These features improve code readability, maintainability, and enable better handling of asynchronous operations, making JavaScript more powerful for building modern applications.

---

# Q45. Explain the use of `const` and `let` keywords?

---

## Concepts (with example + walkthrough)

### 1. Why `let` and `const` were introduced

Before ES6, we only had `var`:

- Function-scoped
- Hoisting confusion
- Re-declaration allowed → bugs

To fix this, ES6 introduced:

- `let`
- `const`

Both are:

- **Block-scoped**
- Safer than `var`

---

### 2. `let` (Mutable variable)

#### Use case:

When value **needs to change**

```javascript id="6w8t3m"
let count = 10;

count = 20; // allowed
```

#### Block Scope

```javascript id="z0qk5y"
if (true) {
  let x = 5;
}

// console.log(x); // Error (not accessible outside block)
```

---

### 3. `const` (Immutable reference)

#### Use case:

When value **should NOT be reassigned**

```javascript id="m8s3cj"
const PI = 3.14;

// PI = 3.141; // Error
```

---

### 4. Important Confusion (Very Important for Interview)

#### `const` does NOT mean fully immutable

It means:

- **Reference cannot change**
- But **internal data can change**

```javascript id="k6g9vd"
const obj = { name: "Tanish" };

obj.name = "Kumar"; // allowed

console.log(obj.name); // Kumar
```

#### But this is NOT allowed:

```javascript id="m3i7gf"
const obj = { name: "Tanish" };

// obj = { name: "New" }; // Error (reassignment not allowed)
```

---

### 5. Difference between `let` and `const`

| Feature        | `let`           | `const`                     |
| -------------- | --------------- | --------------------------- |
| Reassignment   | Allowed         | Not allowed                 |
| Initialization | Optional        | Mandatory                   |
| Scope          | Block           | Block                       |
| Use case       | Changing values | Fixed reference / constants |

---

### 6. Hoisting Behavior

Both are hoisted but:

- Stored in **Temporal Dead Zone (TDZ)**
- Cannot access before declaration

```javascript id="2tb3nh"
// console.log(a); // Error

let a = 10;
```

---

### Walkthrough

```javascript id="6ub6rm"
let a = 10;
a = 20;

const b = 30;
// b = 40; // Error

const arr = [1, 2];
arr.push(3); // allowed

console.log(arr); // [1, 2, 3]
```

---

## Example

Real-world usage:

- `const` → API URLs, config, constants
- `let` → counters, loops, dynamic values

```javascript id="y6g9ox"
const API_URL = "https://api.com";

let page = 1;
page++;
```

---

## Code Example

```javascript id="b7k9fr"
// Example combining let and const

const user = {
  name: "Tanish",
};

let score = 0;

// updating let variable
score += 10;

// modifying object (allowed)
user.name = "Kumar";

console.log(user, score);
```

---

## Interview-Level Answer

`let` and `const` are block-scoped variable declarations introduced in ES6 to replace `var`.

`let` is used when the value of a variable needs to change, while `const` is used when the variable should not be reassigned after initialization. However, in the case of objects and arrays, `const` allows modification of internal properties but prevents reassignment of the reference.

Both `let` and `const` are hoisted but exist in the temporal dead zone, meaning they cannot be accessed before declaration. These features help write safer and more predictable JavaScript code.

---
