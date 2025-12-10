# **HOW NUMBERS ARE STORED IN JAVASCRIPT – MASTER NOTES**

JavaScript has only **one numeric type: Number**
Internally stored using:

**Double-precision 64-bit IEEE-754 Floating Point Format**

But for integer operations, JS **temporarily switches to two’s complement (binary integer format)** to optimize arithmetic.

We will study:

1. How integers are stored
2. Signed vs unsigned representation
3. Signed magnitude
4. One’s complement
5. Two’s complement (final system used internally)
6. How floating-point numbers are stored (sign, exponent, mantissa)
7. Bias
8. Normalization
9. JS storing all numbers as 64-bit floats
10. Problems with floating point numbers

---

# **1. Why numbers must be stored in binary?**

Computers understand only **0 and 1**, so integers, floats, characters—everything must be converted to binary.

---

# **2. Integer Storage**

### Two categories:

1. **Unsigned integers** – only positive numbers
2. **Signed integers** – both positive and negative

---

## **A) Unsigned Integer Storage**

Unsigned integers = simple binary.

Example:

```js
let a = 4;  // stored as 100
let b = 78; // stored as 1001110
```

No sign bit because they cannot be negative.

---

## **B) Problem: How to store negative numbers?**

Unsigned binary format **cannot store -5, -10, -78 etc.**

Hence different methods were introduced.

---

# **3. Method 1: Signed Magnitude Representation**

Convention:

* Leftmost bit = sign bit
* 0 = positive
* 1 = negative

Example:

```js
let a = 6;   // +6
let b = -6;  // negative
```

Binary storage:

```
a = 000110
b = 100110   (-6)
```

### **Problem**

Addition does not work correctly:

```
100110 (-6)
000110 (+6)
-----------
101100 (44)  // wrong
```

→ Arithmetic fails completely
→ Not scalable

---

# **4. Method 2: One’s Complement Representation**

To store negative numbers:

* Flip all bits (0 → 1, 1 → 0).

Example:

```
Binary:        11001001
One’s comp:    00110110
```

Store negative numbers using one’s complement.

### Example:

Number: `100111`
Sign bit = 1 → negative
One’s complement = `011000` = 24
Interpretation: `100111` = -24

### **Problem**

Some arithmetic fails:

Example:

```
3   -> 000011
-2  -> 111101 (one's complement)
----------------------------
000000 (0)  // wrong → expected 1
```

→ Still unusable.

---

# **5. Method 3: Two’s Complement Representation (Final Modern Standard)**

Better than one’s complement.

### Steps:

1. Take one's complement
2. Add 1

Example:

```
24      = 011000
One’s   = 100111
Two’s   = 101000
```

### Why two’s complement works?

When you add two numbers:

```
24        -> 011000
-24       -> 101000 (two’s complement)
-------------------------
1000000
```

Ignore overflow → result is 0 (correct)

### Result:

* Arithmetic becomes correct
* Only **one representation of zero**
* Used by all modern CPUs, compilers, JS engines internally for integer ops

---

# **6. Summary for Integer Storage**

| Type             | Representation Method |
| ---------------- | --------------------- |
| Unsigned integer | Simple binary         |
| Signed integer   | **Two’s complement**  |

---

# **7. Storing Floating-Point Numbers (Important)**

JavaScript stores **all numbers**, including integers, using the IEEE-754 floating-point format.

A floating number is split into **three parts**:

1. **Sign bit** (1 bit)
2. **Exponent** (11 bits in double precision)
3. **Mantissa / Fraction** (52 bits)

### Single precision (32-bit float)

| Part     | Bits |
| -------- | ---- |
| Sign     | 1    |
| Exponent | 8    |
| Mantissa | 23   |

### Double precision (64-bit float)

| Part     | Bits |
| -------- | ---- |
| Sign     | 1    |
| Exponent | 11   |
| Mantissa | 52   |

JavaScript uses **only double precision**.

---

## **Understanding Exponent with Bias**

Negative exponents cannot be stored directly.

IEEE uses:

```
bias = 2^(n-1) - 1
```

For exponent bits = 11:

```
bias = 2^10 – 1 = 1023
```

Example:
Exponent = 5
Stored exponent = 5 + 1023 = **1028**

---

## **Scientific Notation Conversion**

Example: `101.101₂`

Convert:

```
101.101  → 1.01101 × 2^2
```

* Sign bit = 0
* Mantissa = 01101
* Exponent = 2 (+ bias when stored)

---

# **8. Storing Irrational Numbers**

Computers **cannot** store irrational numbers exactly:

Examples:

* π
* √2
* e

They use approximate floating-point values.

---

# **9. How JavaScript Stores Numbers Internally**

### IMPORTANT:

JavaScript **does not** differentiate between:

* integer
* float
* long
* double

It uses:

**64-bit double precision floating point format for ALL numbers.**

Internally, for speed:

* During integer arithmetic → JS temporarily uses **two’s complement integer form**
* After calculations → Converts result back to floating point

---

# **10. Problems with Floating-Point Numbers in JS**

### A) Precision Issues

```js
let x = 0.1;
let y = 0.2;
console.log(x + y);
```

Output:

```
0.30000000000000004
```

Because decimals like 0.1 cannot be exactly represented in binary.

---

### B) Associativity Problems

```js
console.log((0.1 + 0.2) + 0.3);
console.log(0.1 + (0.2 + 0.3));
```

Output:

```
0.6000000000000001
0.6
```

Floating point arithmetic is non-associative and rounded.

---

# **FINAL SUMMARY (Interview Friendly)**

1. JavaScript stores **all numbers** using **64-bit IEEE-754 floating point format**.
2. Integers are handled using **two’s complement** during arithmetic.
3. Floating numbers stored using **sign bit + exponent + mantissa**.
4. Bias formula used for exponent representation: `2^(n-1) - 1`.
5. Irrational numbers cannot be stored exactly.
6. Floating point arithmetic is approximate → precision errors.
7. Addition of floats is not associative.

---

# **10 Interview Questions (Based on This Topic)**

1. How does JavaScript store numbers internally?
2. Why does JavaScript use IEEE-754 format?
3. What is mantissa, exponent, and sign bit?
4. Explain bias in floating point representation.
5. Why do 0.1 + 0.2 give incorrect results?
6. Difference between signed magnitude, one’s complement, and two’s complement?
7. Why is two’s complement preferred?
8. Can JavaScript store irrational numbers exactly?
9. Why is integer arithmetic correct, but floating number arithmetic approximate?
10. Why does `(x+y)+z` sometimes differ from `x+(y+z)` with floats?

---