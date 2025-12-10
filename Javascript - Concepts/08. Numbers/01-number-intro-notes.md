# **CHAPTER – JavaScript Numbers**

## **1. Concept**

In JavaScript, **all numbers (integers, floats, large numbers)** are stored using a **single numeric type**:

**Double-precision 64-bit IEEE 754 floating-point format**

Meaning JavaScript does **not** have:

* int
* float
* double
* long

Only **Number**.

### Why only one numeric type?

Because JavaScript was originally built for browsers, and a single numeric representation was simpler and fast.

---

# **2. How Numbers Are Stored (Very Important)**

JS uses IEEE-754 64-bit format:

| Bits  | Purpose                 |
| ----- | ----------------------- |
| 0–51  | Fraction / Mantissa     |
| 52–62 | Exponent                |
| 63    | Sign bit (0 = +, 1 = -) |

### Result

* Maximum safe integer: **±(2^53 - 1)**
* Both integers and floats share the same memory structure.

---

# **3. Important Numeric Properties**

### **A) Only one numeric type**

```js
let a = 20;      // integer
let b = 20.25;   // float
```

Both are same type: `number`.

### **B) 53-bit Integer Precision**

```js
let a = 999999999999999;     // 15 digits – accurate
let b = 9999999999999999;    // 16 digits – loses precision

console.log(a); // 999999999999999
console.log(b); // 10000000000000000 (wrong)
```

---

# **4. Scientific Notation**

JS allows exponential notation:

```js
let a = 156e5;   // 156 × 10^5
let b = 156e-5;  // 156 × 10^-5

console.log(a); // 15600000
console.log(b); // 0.00156
```

---

# **5. Floating Point Precision Problem (Very Important)**

```js
let x = 0.22 + 0.12;
console.log(x); // 0.33999999999999997 (wrong)
```

### Why?

Binary floating point cannot store some decimals exactly.

### Fix

```js
let x = (0.22 * 10 + 0.12 * 10) / 10;
console.log(x); // 0.34
```

---

# **6. Adding Numbers & Strings**

### Case 1: Numbers → Addition

```js
console.log(10 + 15); // 25
```

### Case 2: Strings → Concatenation

```js
console.log("10" + "30"); // "1030"
```

### Case 3: Number + String → String

```js
console.log(10 + "20"); // "1020"
```

---

# **7. Numeric Strings → Auto Conversion**

JS converts numeric strings to numbers during arithmetic:

```js
console.log("100" / "10"); // 10
console.log("100" * "10"); // 1000
console.log("100" - "10"); // 90
```

But **+** does not convert (because + is also concatenation operator).

---

# **8. Number Literals**

### 1. Decimal

```js
let a = 33;
let b = 3.3;
```

### 2. Octal (Base 8)

```js
let x = 0562;  // octal
console.log(x); // 370
```

### 3. Binary (Base 2)

```js
let x = 0b11;
let y = 0B0111;

console.log(x); // 3
console.log(y); // 7
```

### 4. Hexadecimal (Base 16)

```js
let x = 0xfff;
console.log(x); // 4095
```

---

# **9. Type Coercion With Numbers**

### 1. undefined → NaN

```js
console.log(undefined + 10); // NaN
```

### 2. null → 0

```js
console.log(null + 5); // 5
```

### 3. true → 1, false → 0

```js
console.log(true + 10);  // 11
console.log(false + 10); // 10
```

### 4. String → Number (if valid)

```js
console.log(Number("42"));   // 42
console.log(Number("hello")); // NaN
```

### 5. Symbol → TypeError

```js
const s = Symbol("x");
console.log(Number(s)); // TypeError
```

---

# **10. Integer Conversion**

Used in:

* Array indexes
* Date/time
* Bitwise operations
  Bitwise always converts numbers to **32-bit signed integers**.

---

# **11. Creating Number Objects**

### Primitive Number (most used)

```js
let x = 10;
```

### Number Object (avoid unless needed)

```js
let x = new Number(10);

console.log(typeof x); // object
```

### Why avoid?

Objects are slower and create unexpected comparison behaviour.

```js
console.log(10 === new Number(10)); // false
```

---

# **12. Useful Number Methods**

### Example Code (with comments)

```js
let x = 21;

// Convert number to string
console.log(x.toString());          // "21"

// Convert to exponential form
console.log(x.toExponential());     // "2.1e+1"

// Set precision
console.log(x.toPrecision(4));      // "21.00"

// Check if integer
console.log(Number.isInteger(x));   // true

// Local formatting (Bangladesh Bengali)
console.log(x.toLocaleString("bn-BD"));  
```

Output:

```
21
2.1e+1
21.00
true
২১
```

---

# **13. Facts About Numbers**

1. `"10" + 20 → "1020"` due to string concatenation.
2. JS Numbers are primitives but can be wrapped as objects.
3. Values starting with `0x` → Hexadecimal.
4. `toString(base)` converts into any base 2–36.
5. For large integers, use **BigInt**.

---

# **14. How to Create a Number Object (Summary)**

```js
let a = 10;             // primitive
let b = new Number(10); // object
```

Primitive number is recommended.

---

# **15. JS Number Reference (Your Quick Sheet)**

### Static Methods:

* Number.isInteger()
* Number.isNaN()
* Number.parseInt()
* Number.parseFloat()
* Number.MAX_VALUE
* Number.MIN_VALUE
* Number.MAX_SAFE_INTEGER
* Number.MIN_SAFE_INTEGER

### Prototype Methods:

* toString()
* toFixed()
* toExponential()
* toPrecision()
* valueOf()
* toLocaleString()

---

# **Interview Questions (10)**

1. How does JavaScript store numbers internally?
2. What is IEEE-754 format?
3. Why does `0.1 + 0.2 != 0.3`?
4. What is the max safe integer in JS?
5. Difference between `number` and `Number object`?
6. Why does `"10" + 20` give `"1020"`?
7. Explain NaN and isNaN().
8. What is numeric coercion? Give examples.
9. What is BigInt and why do we need it?
10. How to convert a number to binary in JS?

---

# **Practice (Solve Yourself)**

1. Convert 255 into binary, octal, and hexadecimal using toString().
2. Why does `"5" - 2 = 3` but `"5" + 2 = "52"`?
3. Fix floating point precision for: `0.1 + 0.7`.
4. Check if a value is an integer without using `Number.isInteger`.
5. Print the localised version of 987654321 in Hindi ("hi-IN").

---
