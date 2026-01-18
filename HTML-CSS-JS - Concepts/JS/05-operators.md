

# JavaScript Operators — Conceptual + Practical Mastery

---

## 1. What are Operators? (Foundational Concept)

An **operator** is a symbol (or keyword) that tells JavaScript to **perform an action** on one or more values (called operands).

In simple terms:

* Operators are how **logic is built**
* Without operators, variables are just stored values
* With operators, values become **calculations, decisions, and conditions**

Example mental model:

```text
Value + Value  →  Calculation
Value > Value  →  Decision
Condition && Condition → Logic
```

---

## 2. Categories of Operators (Big Picture)

In this lesson, we focus on:

1. **Arithmetic Operators** → work with numbers
2. **Comparison Operators** → compare values and return boolean
3. **Logical Operators** → combine or modify boolean logic

Later sections also include:

* Assignment operators
* Nullish operators
* Logical assignment operators
* Precedence rules

---

# PART 1 — Arithmetic Operators

---

## 3. Arithmetic Operators (Numbers & Math)

Arithmetic operators perform **mathematical operations**.

They mostly work on numbers, but JavaScript’s **type coercion rules** can change behavior.

---

## 3.1 Basic Arithmetic Operators

```js
let a = 10;
let b = 3;

// Addition (+)
console.log(a + b);        // 13
console.log(5 + 3);        // 8
console.log("5" + 3);      // "53" (string concatenation)

// Subtraction (-)
console.log(a - b);        // 7
console.log(10 - 4);       // 6

// Multiplication (*)
console.log(a * b);        // 30
console.log(4 * 5);        // 20

// Division (/)
console.log(a / b);        // 3.333...
console.log(15 / 3);       // 5
console.log(10 / 0);       // Infinity

// Modulus/Remainder (%)
console.log(a % b);        // 1
console.log(17 % 5);       // 2
console.log(10 % 2);       // 0

// Exponentiation (**)
console.log(a ** b);       // 1000
console.log(2 ** 3);       // 8
console.log(4 ** 0.5);     // 2
```

### Mental Model

* `+` is **special** → if either side is a string, it concatenates
* Other operators force **numeric conversion**
* Division by zero does **not crash**, it returns `Infinity`

---

## 3.2 Unary Arithmetic Operators

Unary operators work on **one operand**.

---

### Unary Plus (`+`)

```js
let x = 5;

console.log(+x);           // 5
console.log(+"10");        // 10
console.log(+true);        // 1
console.log(+false);       // 0
```

Mental model:

> Unary `+` means “convert this to a number immediately”

---

### Unary Minus (`-`)

```js
console.log(-x);           // -5
console.log(-(-5));        // 5
```

---

### Increment / Decrement (Very Important)

```js
let counter = 0;
console.log(++counter);    // 1 (pre-increment)
console.log(counter++);    // 1 (post-increment)
console.log(counter);      // 2
```

Key rule:

* **Pre** → change first, then return
* **Post** → return first, then change

Same logic applies to decrement:

```js
let countdown = 5;
console.log(--countdown);  
console.log(countdown--);  
console.log(countdown);    
```

---

## 3.3 Practical Arithmetic Usage

### Calculator Logic

```js
function calculator(a, b, operation) {
    switch (operation) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Cannot divide by zero";
        case "%": return a % b;
        case "**": return a ** b;
        default: return "Invalid operation";
    }
}
```

Key idea:

* Arithmetic operators become **business rules**
* Validation matters (`b !== 0`)

---

### Real-World Math Example

```js
let price = 99.99;
let quantity = 3;
let taxRate = 0.08;

let subtotal = price * quantity;
let tax = subtotal * taxRate;
let total = subtotal + tax;
```

Operators are how **money, scores, ranges, and limits** are calculated.

---

# PART 2 — Comparison Operators

---

## 4. Comparison Operators (Decision Making)

Comparison operators **compare two values** and always return a **boolean**.

```text
true  → condition passed
false → condition failed
```

---

## 4.1 Equality Operators

### Strict Equality (`===`) — Always Preferred

```js
let a = 5;
let b = "5";
let c = 5;

console.log(a === c); 
console.log(a === b);
```

Rule:

> `===` checks **value AND type**

---

### Loose Equality (`==`) — Type Conversion Happens

```js
console.log(a == b);       
console.log(0 == false);   
console.log("" == false);  
console.log(null == undefined);
```

Mental model:

* JavaScript **forces both sides to same type**
* This causes confusing results

---

### Inequality Versions

```js
console.log(a !== b);
console.log(a != b);
```

---

## 4.2 Relational Operators

```js
let x = 10;
let y = 5;
let z = "10";

console.log(x > y);
console.log(x >= z);
console.log("apple" < "banana");
console.log("10" < "2");
```

Important rule:

* Strings are compared **lexicographically**, not numerically
* `"10" < "2"` → compares `"1"` with `"2"`

---

## 4.3 Comparing Objects & Arrays

```js
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 === arr2); 
console.log(arr1 === arr3);
```

Mental model:

* Objects compare **references**, not content

---

# PART 3 — Logical Operators

---

## 5. Logical Operators (Combining Conditions)

Logical operators work with **truthy / falsy values**, not just booleans.

---

## 5.1 Basic Logical Operators

```js
let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);
```

---

### AND (`&&`)

* Returns **first falsy value**
* Otherwise returns **last value**

---

### OR (`||`)

* Returns **first truthy value**
* Used heavily for defaults

---

### NOT (`!`)

* Converts to boolean, then inverts

---

## 5.2 Short-Circuit Evaluation (CRITICAL)

```js
let user = { name: "John" };

console.log(user && user.name);
```

Why this works:

* If `user` is falsy → evaluation stops
* Prevents runtime errors

---

### Practical Pattern

```js
function greetUser(user) {
    user && user.name && console.log(`Hello, ${user.name}!`);
}
```

---

## 5.3 Default Values with `||`

```js
let userName = "";
let displayName = userName || "Guest";
```

Problem:

* Empty string is falsy, even if valid

---

## 5.4 Nullish Coalescing (`??`) — ES2020

```js
console.log(value3 ?? "default"); // 0 preserved
```

Rule:

> `??` only treats **null and undefined** as empty

---

## 5.5 Logical Assignment Operators

```js
a &&= false;
b ||= true;
x ??= "default";
```

These combine **logic + assignment**.

---

# PART 4 — Assignment Operators

---

## 6. Assignment Operators

```js
let num = 10;

num += 5;
num -= 3;
num *= 2;
num /= 4;
num %= 4;
num **= 3;
```

Mental model:

* Shortcut for “read → modify → assign”

---

# PART 5 — Operator Precedence

---

## 7. Operator Precedence & Associativity

```js
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
```

Rule:

* Multiplication happens before addition
* Parentheses override everything

---

### Real Expression Breakdown

```js
let result = 5 + 3 * 2 > 10 && true;
```

Step-by-step:

1. `3 * 2`
2. `5 + 6`
3. `11 > 10`
4. `true && true`

---

## 8. Real-World Scenarios

You included:

* Form validation
* Shopping cart logic
* Game score calculation

These examples show:

* Operators are **decision engines**
* Business rules = operators + conditions

---

## 9. Common Mistakes (Very Important)

### `==` instead of `===`

### Assuming `&&` returns boolean

### Ignoring precedence

### Using `||` when `??` is required

All of these are **interview favorites**.

---

## Final Mental Model (Lock This)

* Arithmetic operators → calculations
* Comparison operators → decisions
* Logical operators → rule chaining
* `===` > `==`
* `&&` / `||` return values, not booleans
* `??` is safer for defaults
* Parentheses improve clarity
* Operators are the **core of logic building**

---
