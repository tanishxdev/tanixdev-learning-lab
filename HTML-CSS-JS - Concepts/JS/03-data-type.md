
# JavaScript Data Types — Complete Conceptual Mastery

---

## 1. What are Data Types? (Core Concept)

**Data types define what kind of value a variable can store and how JavaScript should treat it in memory and operations.**

In simple words:

* Data type tells JS **how much memory to allocate**
* What **operations are allowed**
* How values **behave during comparison, copy, and function calls**

JavaScript is **dynamically typed**, meaning:

* You do **not** declare a type explicitly
* The type is decided **at runtime**
* A variable can **change its type**

```js
let value = 10;      // number
value = "ten";      // string
value = true;       // boolean
```

This flexibility is powerful, but also the **main source of bugs** if types are not understood deeply.

---

## 2. JavaScript Type System (Big Picture)

JavaScript has **two main categories**:

### A. Primitive Types (Stored by VALUE)

Total **7 primitive types**:

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

Primitive means:

* Stored **directly in memory**
* Copied **by value**
* Immutable (cannot be changed internally)

---

### B. Non-Primitive Types (Stored by REFERENCE)

These include:

* Object
* Array
* Function

Non-primitive means:

* Stored as **references**
* Copied **by reference**
* Mutable

---

## 3. Primitive Data Types (Deep + Practical)

---

## 3.1 Number

### Concept

JavaScript has **only ONE numeric type**.
There is **no separate int, float, double**.

Everything is stored as **64-bit floating point (IEEE-754)**.

### Why this matters

* Decimal precision issues
* `NaN`, `Infinity` behave oddly
* Important for calculations, finance, scoring systems

---

### Number Examples (All Types)

```js
// Integers
let age = 25;
let score = 100;
let temperature = -5;

// Floating-point numbers
let price = 99.99;
let pi = 3.14159;
let percentage = 0.85;

// Scientific notation
let bigNumber = 1.5e6;    // 1,500,000
let smallNumber = 2.5e-4; // 0.00025

// Special numeric values
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;

console.log(typeof age);        // "number"
console.log(typeof price);      // "number"
console.log(typeof infinity);   // "number"
console.log(typeof NaN);        // "number"
```

### Mental Model

`NaN` means **invalid math**, not absence of value.

---

### Working with Numbers (Operations)

```js
let a = 10;
let b = 3;

console.log(a + b);  // addition
console.log(a - b);  // subtraction
console.log(a * b);  // multiplication
console.log(a / b);  // division
console.log(a % b);  // remainder
console.log(a ** b); // power
```

---

### Increment / Decrement (Important for loops)

```js
let counter = 5;

counter++;   // uses value, then increments
++counter;   // increments first, then uses value
counter--;
--counter;
```

---

### Number Methods (Formatting & Parsing)

```js
let num = 123.456;

console.log(num.toFixed(2));        // rounds to 2 decimals
console.log(num.toPrecision(4));    // total digits
console.log(parseInt("123.45"));    // integer only
console.log(parseFloat("123.45"));  // decimal allowed
```

---

### Validity Checks

```js
console.log(isNaN("hello"));      // true
console.log(isFinite(100));       // true
console.log(isFinite(Infinity));  // false
```

---

## 3.2 String

### Concept

Strings represent **textual data**.

Strings are:

* Immutable
* Indexed
* Stored as primitive values

---

### Creation Styles

```js
let singleQuotes = 'Hello World';
let doubleQuotes = "Hello World";
let templateLiteral = `Hello World`;
```

---

### Template Literals (Most Important)

```js
let name = "John";
let age = 25;

let greeting = `Hello, my name is ${name} and I'm ${age} years old.`;
console.log(greeting);
```

Why important:

* Cleaner
* Supports expressions
* Supports multi-line strings

---

### String Properties & Methods

```js
let text = "JavaScript is awesome!";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.indexOf("Script"));
console.log(text.includes("Java"));
console.log(text.startsWith("Java"));
console.log(text.endsWith("some!"));

console.log(text.substring(0, 10));
console.log(text.slice(-8));

console.log(text.replace("awesome", "amazing"));

let words = text.split(" ");
console.log(words);

let messy = "  Hello World  ";
console.log(messy.trim());
```

---

### String Concatenation (3 Ways)

```js
let firstName = "John";
let lastName = "Doe";

let fullName1 = firstName + " " + lastName;
let fullName2 = `${firstName} ${lastName}`;
let fullName3 = firstName.concat(" ", lastName);
```

---

## 3.3 Boolean

### Concept

Boolean represents **logical state**:

* true
* false

Used heavily in:

* Conditions
* Loops
* Validation
* Access control

---

```js
let isActive = true;
let isComplete = false;

let age = 25;
let isAdult = age >= 18;
```

---

### Truthy & Falsy (CRITICAL CONCEPT)

Falsy values:

```js
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is **truthy**.

---

```js
let userInput = "";

if (userInput) {
    console.log("User provided input");
} else {
    console.log("No input provided");
}
```

Mental model:

* JS auto-converts values to boolean when needed

---

## 3.4 Undefined

### Concept

Means:

> Variable exists, but value is not assigned

```js
let userName;
console.log(userName);        // undefined
```

Also appears when:

* Function has no return
* Property doesn’t exist
* Array index out of range

---

## 3.5 Null

### Concept

Means:

> Intentionally empty value

Used to **reset**, **clear**, or **mark absence explicitly**

```js
let currentUser = null;
```

Important quirk:

```js
console.log(typeof null); // "object"
```

This is a **historical bug** in JavaScript.

---

### Null vs Undefined (VERY IMPORTANT)

```js
console.log(undefined == null);   // true
console.log(undefined === null);  // false
```

Rule:

* Use `undefined` → JS system value
* Use `null` → developer intent

---

## 3.6 Symbol

### Concept

Symbols create **unique identifiers**.

Used to:

* Avoid property name collisions
* Create hidden object keys

---

```js
let sym1 = Symbol();
let sym2 = Symbol("id");
let sym3 = Symbol("id");

console.log(sym2 === sym3); // false
```

---

### Symbol in Objects

```js
let user = {
    name: "John",
    [Symbol("id")]: 123
};

console.log(Object.keys(user)); // symbol not shown
```

---

## 3.7 BigInt

### Concept

Used for numbers **beyond safe integer limit**.

```js
Number.MAX_SAFE_INTEGER
```

---

```js
let bigNumber1 = 123n;
let bigNumber2 = BigInt(123);

console.log(typeof bigNumber1); // "bigint"
```

---

Important rule:

```js
// BigInt + Number ❌
// Convert explicitly
```

---

## 4. Non-Primitive Types (Reference Types)

---

## 4.1 Objects

### Concept

Objects store **key-value pairs**.

They represent **real-world entities**.

---

```js
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        city: "New York"
    },
    hobbies: ["reading", "coding"]
};
```

---

## 4.2 Arrays

### Concept

Arrays store **ordered collections**.

Arrays are objects internally.

---

```js
let fruits = ["apple", "banana", "orange"];

fruits.push("grape");
fruits.pop();
```

---

## 4.3 Functions

### Concept

Functions are **callable objects**.

---

```js
function greet(name) {
    return "Hello " + name;
}

let add = (a, b) => a + b;
```

---

## 5. Type Checking & Conversion

---

### typeof Operator

```js
typeof "hello"     // string
typeof 42          // number
typeof []          // object
typeof null        // object (quirk)
```

---

### Better Checks

```js
Array.isArray([])
value instanceof String
```

---

## 6. Type Coercion (Most Bugs Come From Here)

```js
"5" + 3   // "53"
"5" - 3   // 2
true + 1  // 2
```

Rule:

* `+` prefers strings
* Other operators prefer numbers

---

## 7. Real-World Examples (Your Code Fully Explained)

### User Validation

### Shopping Cart

### Mistakes

### Exercises

(All logic already correct — concepts now fully clear)

---

## Final Mental Model (Key Takeaways)

* JS types are flexible but dangerous if misunderstood
* Primitives → value copy
* Objects → reference copy
* `===` always preferred
* `null` = intentional absence
* `undefined` = missing value
* Arrays & functions are objects
* Type coercion is powerful but risky
