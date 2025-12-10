// ======================================================
// OPERATORS - INTERVIEW MASTER FILE
// THEORY + QUESTIONS + CODE + BUG DEBUG + LEVELS
// ======================================================


// ======================================================
// SECTION 1: BASICS LEVEL
// ======================================================

// Q1: What is an operator?
// An operator is a symbol that performs an operation on one or more operands.

// Example:
let a = 10;
let b = 5;

console.log(a + b);  // Addition
console.log(a - b);  // Subtraction
console.log(a * b);  // Multiplication
console.log(a / b);  // Division


// Q2: Types of operators in JavaScript
/*
1. Arithmetic
2. Assignment
3. Comparison
4. Logical
5. Ternary
6. Bitwise
7. Type
*/


// Arithmetic Operators
let x = 12;
let y = 4;

console.log(x + y); // 16
console.log(x % y); // 0
console.log(x ** y); // Exponent


// Assignment Operators
let num = 5;
num += 2;
num *= 3;

console.log(num);


// ======================================================
// SECTION 2: COMPARISON & LOGICAL OPERATORS
// ======================================================

// Comparison Operators
let p = 10;
let q = "10";

console.log(p == q);   // true
console.log(p === q);  // false
console.log(p != q);   // false
console.log(p !== q);  // true


// Logical Operators
let isAdult = true;
let hasLicense = false;

console.log(isAdult && hasLicense);
console.log(isAdult || hasLicense);
console.log(!isAdult);


// Common Bug: Using == instead of ===

// WRONG
if (p == q) {
  console.log("Equal");
}

// CORRECT
if (p === Number(q)) {
  console.log("Strict Equal");
}


// ======================================================
// SECTION 3: TERNARY OPERATOR
// ======================================================

// Theory:
// Ternary operator is used for simple condition-based assignment.

// Syntax:
// condition ? trueValue : falseValue

let isLoggedIn = false;

const buttonText = isLoggedIn ? "Logout" : "Login";
console.log(buttonText);


// Nested ternary example
let score = 65;

const grade =
  score > 90 ? "A" :
  score > 70 ? "B" :
  score > 50 ? "C" :
  "Fail";

console.log(grade);


// BAD PRACTICE - unreadable ternary
let r = true, s = false, t = true;
const bad = r ? s ? t ? 1 : 2 : 3 : 4;

// BETTER APPROACH
let cleanResult;
if (r) {
  cleanResult = s ? (t ? 1 : 2) : 3;
} else {
  cleanResult = 4;
}


// ======================================================
// SECTION 4: MEDIUM LEVEL INTERVIEW QUESTIONS
// ======================================================

// Q: Difference between == and ===
/*
==  -> compares value only
=== -> compares value and type
*/


// Predict Output
let value = 0;

if (value) {
  console.log("True");
} else {
  console.log("False");
}

// Output: False (0 is falsy)


// Debug Issue
let data = null;

// WRONG
// if (data.length) {}

// FIX
if (data && data.length) {
  console.log("Safe access");
}


// ======================================================
// SECTION 5: HARD LEVEL INTERVIEW QUESTIONS
// ======================================================

// Q: Explain short-circuit evaluation

let count = 0;

false && count++;
true || count++;

console.log(count);
/*
Explanation:
Second expressions are skipped due to logical short-circuiting.
*/


// Q: Object Lookup instead of conditional chaining

const operationMap = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b
};

function calculate(op, a, b) {
  return operationMap[op] ? operationMap[op](a, b) : "Invalid Operation";
}

console.log(calculate("add", 10, 5));


// ======================================================
// SECTION 6: BUG DEBUG SCENARIOS
// ======================================================

// Bug 1: Assignment instead of comparison

let total = 100;

if (total = 50) {
  console.log("This always runs");
}

// FIX
if (total === 50) {
  console.log("Correct condition");
}


// Bug 2: Logical confusion

let access = false;

if (!access == true) {
  console.log("Confusing logic");
}

// FIX
if (access === false) {
  console.log("Clear logic");
}


// ======================================================
// SECTION 7: COMMON INTERVIEW QUESTIONS WITH ANSWERS
// ======================================================

/*
1. What is short-circuiting?
Answer: Skipping evaluation when result is already determined.

2. Difference between logical and bitwise operators?
Answer:
Logical works on booleans, bitwise works on binary numbers.

3. When to use ternary?
Answer: Only for simple one-line conditions.

4. Is ++ an operator?
Answer: Yes, it is the increment operator.

5. Why avoid ==?
Answer: Type coercion causes unexpected bugs.
*/


// ======================================================
// SECTION 8: PRACTICE PREDICT OUTPUT
// ======================================================

let resultValue = 5 + "5" - 2;
console.log(resultValue);

// Explanation:
// 5 + "5" => "55"
// "55" - 2 => 53


// ======================================================
// FINAL INTERVIEW GOLD RULES
// ======================================================

/*
- Always prefer === over ==
- Avoid complex ternary expressions
- Use object mapping for scalable logic
- Understand short-circuit behavior
- Never mix assignment with condition check
- Readability > clever tricks
*/


// ======================================================
// END OF FILE
// ======================================================
