# JAVASCRIPT NUMBERS

Complete Theory • Intuition • Examples • Pseudocode • Code • Output • Interview Set

---

# 1. CONCEPT

JavaScript has **only one numeric type**: **Number** (64-bit IEEE-754 floating point).
It stores:
• Integers
• Floating numbers
• Special values (NaN, Infinity, -Infinity)

JavaScript ALSO has **BigInt** for integers beyond Number limit.

Internally, JS uses **binary floating point**, so decimal math is not exact.

---

# 2. WHY NUMBERS ARE IMPORTANT

• All calculations in JS depend on Number
• Interviewers check your understanding of floating errors, conversions, coercion
• Essential for building logic: loops, counters, timers, clocks, validations
• Required in DSA coding: arrays, sums, precision, modulo, hashing

---

# 3. RANGE OF JS NUMBER

Numbers are stored in **64-bit double precision**.

Maximum safe integer:

```
Number.MAX_SAFE_INTEGER // 9007199254740991
```

Minimum safe integer:

```
Number.MIN_SAFE_INTEGER // -9007199254740991
```

Beyond this, accuracy cannot be trusted → use **BigInt**.

---

# 4. SPECIAL VALUES

1. **NaN** (Not a Number)
   Produced when a numeric operation fails.

2. **Infinity** and **-Infinity**
   Dividing by zero.

3. **undefined → NaN** in numeric conversion.

---

# 5. NUMBER CREATION

Two ways:

### (A) Literal

```
let x = 42;
let y = 3.14;
```

### (B) Using Number() constructor

```
let n = Number("123");
```

Avoid new Number() as a wrapper object.

---

# 6. TYPE CONVERSION

### To Number

```
Number("10")     // 10
Number("10a")    // NaN
Number(true)     // 1
Number(false)    // 0
Number("")       // 0
Number(null)     // 0
Number(undefined)// NaN
```

### Parse functions

```
parseInt("42")        // 42
parseFloat("3.14px")  // 3.14
parseInt("08", 10)    // always specify base
```

---

# 7. FLOATING POINT ERRORS

```
0.1 + 0.2 // 0.30000000000000004
```

Reason: stored in binary, decimals are approximated.

### Fix

```
+( (0.1 + 0.2).toFixed(2) )   // 0.30
```

---

# 8. USEFUL NUMBER METHODS

| Method             | Meaning           | Example                     |
| ------------------ | ----------------- | --------------------------- |
| toFixed(n)         | decimal precision | (3.145).toFixed(2) → "3.15" |
| toPrecision(n)     | total digits      | (3.145).toPrecision(2)      |
| Number.isNaN()     | true if real NaN  | Number.isNaN(NaN)           |
| Number.isInteger() | check int         | Number.isInteger(5)         |

---

# 9. MATH OBJECT

Common methods:

```
Math.abs(x)
Math.floor(x)
Math.ceil(x)
Math.round(x)
Math.max(a,b,c)
Math.min(a,b,c)
Math.random()
Math.sqrt()
Math.pow(a,b)
```

Random number in a range:

```
Math.floor(Math.random() * (max - min + 1)) + min
```

---

# 10. BIGINT

Used when you need integers beyond safe range.

```
let big = 12345678901234567890n;
let sum = big + 10n;
```

BigInt cannot mix with Number directly.

---

# 11. EDGE CASES (VERY IMPORTANT FOR INTERVIEW)

### Case 1: typeof NaN

```
typeof NaN // "number"
```

### Case 2: 0 == -0

```
0 === -0 // true
1 / 0 === 1 / -0 // false (Infinity vs -Infinity)
```

### Case 3: parseInt stops at non-digit

```
parseInt("15px") // 15
```

### Case 4: false, null vs undefined

```
Number(false)     // 0
Number(null)      // 0
Number(undefined) // NaN
```

---

# 12. DRY RUN EXAMPLES

### Example A: Floating error

```
let a = 0.1;
let b = 0.2;
let c = a + b; // 0.30000000004
```

### Example B: Random in range

min=10, max=12

```
// possible values: 10,11,12
```

### Example C: parseInt

```
parseInt("45abc") → 45  
parseInt("abc45") → NaN  
```

---

# 13. PSEUDOCODE (for number handling tasks)

### Task: Convert string to number safely

```
FUNCTION safeToNumber(value):
    num = Number(value)
    IF Number.isNaN(num):
        RETURN "Invalid Input"
    ELSE:
        RETURN num
```

### Task: Generate OTP of length n

```
FUNCTION generateOTP(n):
    otp = ""
    LOOP n times:
        digit = RANDOM 0-9
        otp = otp + digit
    RETURN otp
```

---

# 14. CODE EXAMPLES WITH COMMENTS (DEEP)

---

### Example 1: Detect valid number

---

```javascript
// Function to convert any value into a safe number
function toSafeNumber(value) {
    // Convert the input into number type
    const num = Number(value);

    // Check if conversion failed (NaN)
    if (Number.isNaN(num)) {
        return "Invalid number";
    }

    // Return valid number
    return num;
}

console.log(toSafeNumber("42"));      // 42
console.log(toSafeNumber("42abc"));   // Invalid number
console.log(toSafeNumber(true));      // 1
```

---

### Example 2: Fix floating error

---

```javascript
// Function to add decimal numbers accurately
function addAccurate(a, b) {
    const result = a + b;

    // Fix floating point using toFixed and convert back to number
    return Number(result.toFixed(10));
}

console.log(addAccurate(0.1, 0.2)); // 0.3
```

---

### Example 3: Random number generator (range)

---

```javascript
// Generate a random integer between min and max inclusive
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInRange(1, 5)); // 1,2,3,4 or 5
```

---

### Example 4: Using BigInt safely

---

```javascript
// Working with integers beyond Number.MAX_SAFE_INTEGER
const a = 9007199254740991n;
const b = 10n;

// BigInt addition
const c = a + b;

console.log(c); // 9007199254741001n
```

---

# 15. REAL INTERVIEW QUESTIONS (MOST ASKED)

1. Why is 0.1 + 0.2 not exactly 0.3 in JavaScript?
2. What is the difference between Number(), parseInt(), and parseFloat()?
3. What is NaN? Why is typeof NaN === "number"?
4. Why should we avoid using new Number()?
5. What is the maximum safe integer in JS and why do we need BigInt?
6. Explain how Math.random() works internally.
7. What is the difference between toFixed() and toPrecision()?
8. How does JavaScript store numbers internally (IEEE-754)?
9. What happens when you do Number(null), Number(undefined)?
10. What are Infinity and -Infinity and when do they appear?
11. How do you generate a random OTP in JS?
12. Why is parseInt("08") dangerous without radix?
13. Explain BigInt limitations.
14. How do you round to 2 decimal places safely?
15. Why does parseInt("3.99") give 3 but Number("3.99") gives 3.99?

---

# 16. SUMMARY (SUPER CONCISE)

• JS has one numeric type: Number (floating binary).
• Floating point is approximate → precision issues.
• Use BigInt for large integers.
• Key methods: toFixed, toPrecision, parseInt, Number().
• Math object provides rounding, random numbers, power, root.
• NaN is a number but not equal to itself.
• Know conversions and edge cases.

---
