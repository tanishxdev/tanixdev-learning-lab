# Functions (JavaScript)

---

## 1. Core Concept — What is a Function (deep clarity)

A **function** is a **named block of logic** that:

* Groups related statements together
* Can be **executed multiple times**
* Can **accept inputs** (parameters)
* Can **produce an output** (return value)

### Why functions exist (problem they solve)

Without functions:

* Code becomes repetitive
* Logic is scattered
* Bugs are hard to fix
* Reuse is impossible

Functions solve this by acting like:

> **A machine** → you give input → it processes → gives output

---

## 2. Mental Model (important)

Think of a function as:

```
INPUT  →  PROCESS  →  OUTPUT
```

Example mental picture:

* Input: numbers, strings, objects
* Process: calculations, checks, transformations
* Output: result value (or side effect like logging)

---

## 3. Function Declaration

### What it is

A **function declaration** defines a function using the `function` keyword and a name.

### How JavaScript treats it internally

* Stored in memory during **creation phase**
* Can be called **before** its definition (hoisting — detailed later)

---

### Code (your exact code, fully explained)

```js
// Basic function
function greet() {
    console.log("Hello, World!");
}

greet(); // Call the function
```

**Explanation**

* `function greet()` → declares a function named `greet`
* `{}` → function body
* `console.log(...)` → side effect (prints to console)
* `greet()` → executes the function

This function:

* Takes no input
* Returns nothing
* Only performs an action

---

```js
// Function with parameters
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Alice"); // "Hello, Alice!"
```

**Explanation**

* `name` is a **parameter** (placeholder)
* `"Alice"` is an **argument** (actual value)
* On call, `name = "Alice"`

---

```js
// Function with return value
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result); // 8
```

**Explanation**

* `return` sends value back to the caller
* Execution stops immediately after `return`
* `result` receives `8`

---

## 4. Function Expression

### Concept

A **function expression** stores a function inside a variable.

Key difference from declaration:

* Function is created **at runtime**
* Cannot be used before assignment

---

### Code

```js
// Function expression
let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20
```

**Explanation**

* Function has no name (anonymous)
* Assigned to variable `multiply`
* Called using variable name

---

```js
// Anonymous function
let numbers = [1, 2, 3];
let doubled = numbers.map(function(num) {
    return num * 2;
});
```

**Explanation**

* Function passed as a **value**
* `map` calls this function for each element
* This is a foundation of **functional programming**

---

## 5. Parameters vs Arguments (very important distinction)

* **Parameters** → variables in function definition
* **Arguments** → actual values passed during call

---

### Code

```js
// Multiple parameters
function introduce(name, age, city) {
    return `Hi, I'm ${name}, ${age} years old from ${city}`;
}

console.log(introduce("John", 25, "NYC"));
```

**Explanation**

* Parameters receive values **by position**
* Order matters

---

### Default Parameters

```js
function greet(name = "World") {
    return "Hello, " + name + "!";
}

console.log(greet());        // "Hello, World!"
console.log(greet("Alice")); // "Hello, Alice!"
```

**Explanation**

* Default value used when argument is `undefined`
* Prevents manual checks

---

### Rest Parameters (variable inputs)

```js
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4)); // 10
```

**Mental model**

* `...numbers` collects arguments into an array
* Used when number of inputs is unknown

---

## 6. Return Statement (control flow)

### Core rules

* `return` ends function execution
* Only one value returned
* Without return → `undefined`

---

### Code

```js
// Simple return
function square(num) {
    return num * num;
}
```

---

```js
// Early return
function checkAge(age) {
    if (age < 0) {
        return "Invalid age";
    }
    if (age < 18) {
        return "Minor";
    }
    return "Adult";
}
```

**Explanation**

* Early return avoids unnecessary checks
* Makes logic cleaner and safer

---

```js
// Multiple return points
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    return "F";
}
```

---

## 7. Function Scope (visibility of variables)

### Concept

Scope defines **where variables can be accessed**.

Types involved here:

* Global scope
* Function scope
* Nested scope

---

### Code

```js
let globalVar = "I'm global";

function outerFunction() {
    let outerVar = "I'm in outer function";
    
    function innerFunction() {
        let innerVar = "I'm in inner function";
        console.log(globalVar);  // Can access
        console.log(outerVar);   // Can access
        console.log(innerVar);   // Can access
    }
    
    innerFunction();
    // console.log(innerVar); // Error! Can't access
}

outerFunction();
```

**Mental model**

* Inner scopes can access outer scopes
* Outer scopes cannot access inner scopes
* This leads to **closures** (next topics)

---

## 8. Higher-Order Functions (core JS power)

### Definition

A **higher-order function**:

* Accepts another function
* OR returns a function

---

### Function as argument

```js
function processArray(arr, callback) {
    let result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}

let numbers = [1, 2, 3, 4];
let squared = processArray(numbers, function(x) {
    return x * x;
});
```

**Explanation**

* `callback` is executed dynamically
* Behavior depends on function passed

---

### Function returning function

```js
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**Mental model**

* Function “remembers” `factor`
* This is the base of **closures**

---

## 9. Practical Real-World Examples

### Calculator logic

```js
function calculator(a, b, operation) {
    switch (operation) {
        case "add": return a + b;
        case "subtract": return a - b;
        case "multiply": return a * b;
        case "divide": return b !== 0 ? a / b : "Cannot divide by zero";
        default: return "Invalid operation";
    }
}
```

---

### Validation logic

```js
function validateUser(user) {
    if (!user.name || user.name.length < 2) {
        return { valid: false, error: "Name too short" };
    }
    if (!user.email || !user.email.includes("@")) {
        return { valid: false, error: "Invalid email" };
    }
    return { valid: true };
}
```

---

### Utility functions

```js
function getUniqueValues(arr) {
    return [...new Set(arr)];
}

function findLargest(arr) {
    return Math.max(...arr);
}
```

---

### String utilities

```js
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str) {
    return str.split("").reverse().join("");
}
```

---

## 10. Function Best Practices (thinking like a developer)

```js
function calculateTotalPrice(items, taxRate) {
    // Implementation
}
```

* Clear purpose
* Descriptive naming

---

```js
function calc(x, y) {
    // Implementation
}
```

* Poor readability
* No intent visible

---

```js
function validateEmail(email) {
    return email.includes("@") && email.length > 5;
}

function sendEmail(email, message) {
    // Send email logic
}
```

* Single responsibility
* Easier testing

---

```js
function addNumbers(a, b) {
    return a + b;
}
```

* Pure function
* Predictable output

---

```js
let counter = 0;
function incrementCounter() {
    counter++;
}
```

* Side effects
* Harder to debug at scale

---

## Final Mental Summary

* Functions are **core building blocks** of JavaScript
* Everything advanced (closures, async, callbacks, hooks, handlers) builds on this
* Think in terms of:

  * Input
  * Process
  * Output
  * Responsibility

---