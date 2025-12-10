// ======================================================
// CONDITIONAL FLOW - INTERVIEW MASTER FILE
// THEORY + QUESTIONS + CODE + BUG DEBUG + LEVELS
// ======================================================


// ======================================================
// SECTION 1: BASICS LEVEL
// ======================================================

// Q1: What is a conditional statement?
// A conditional statement controls program flow based on a true/false condition.

// Example:
let age = 20;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}


// Q2: Difference between if and if-else?

// if executes only when condition is true
let score = 85;
if (score > 80) {
  console.log("Excellent");
}

// if-else chooses between two paths
if (score > 90) {
  console.log("Grade A");
} else {
  console.log("Grade B");
}


// Q3: What is else-if ladder?

let temperature = 15;

if (temperature < 0) {
  console.log("Freezing");
} else if (temperature < 10) {
  console.log("Cold");
} else if (temperature < 20) {
  console.log("Cool");
} else {
  console.log("Hot");
}


// Common Bug: Missing else causing logical fall
let marks = 40;

// WRONG
if (marks > 90) console.log("A");
if (marks > 60) console.log("B");

// CORRECT
if (marks > 90) console.log("A");
else if (marks > 60) console.log("B");



// ======================================================
// SECTION 2: TERNARY OPERATOR
// ======================================================

// Theory:
// Ternary operator is used for short, simple condition based decisions.

// Syntax:
// condition ? valueIfTrue : valueIfFalse

let isLoggedIn = true;

const buttonText = isLoggedIn ? "Logout" : "Login";
console.log(buttonText);


// Nested ternary (acceptable up to limited depth)
let scoreValue = 72;

const result =
  scoreValue > 90 ? "Excellent" :
  scoreValue > 70 ? "Good" :
  scoreValue > 50 ? "Average" :
  "Needs Improvement";

console.log(result);


// BAD PRACTICE - unreadable ternary
let a = true, b = false, c = true;
const bad = a ? b ? c ? 1 : 2 : 3 : 4;

// BETTER APPROACH
let clean;
if (a) {
  clean = b ? (c ? 1 : 2) : 3;
} else {
  clean = 4;
}



// ======================================================
// SECTION 3: SWITCH STATEMENTS
// ======================================================

let role = "admin";

switch (role) {
  case "admin":
    console.log("Admin Access");
    break;
  case "user":
    console.log("User Access");
    break;
  default:
    console.log("Guest Access");
}


// Bug: Missing break
let color = "red";

switch (color) {
  case "red":
    console.log("Red selected");
  case "blue":
    console.log("Blue selected");
    break;
}



// ======================================================
// SECTION 4: MEDIUM LEVEL INTERVIEW QUESTIONS
// ======================================================

// Q: Difference between if-else and switch?
/*
if-else -> best for range checks
switch  -> best for exact value comparisons
*/


// Q: Predict Output
let value = 5;

if (value == '5') console.log("Loose true");
if (value === '5') console.log("Strict true");

// Output:
// Loose true


// Debug Issue
let user = null;

// WRONG
// if (user.name) {}

// FIX
if (user && user.name) {
  console.log(user.name);
}



// ======================================================
// SECTION 5: HARD LEVEL INTERVIEW QUESTIONS
// ======================================================

// Q: Early return pattern for clean logic
function processOrder(order) {
  if (!order) return "No order";
  if (order.status === "cancelled") return "Cancelled";
  if (!order.items || order.items.length === 0) return "Empty";

  return "Order processed";
}


// Q: Object Lookup preferred over large switch

const statusMap = {
  200: "Success",
  400: "Bad Request",
  500: "Server Error"
};

function getStatus(code) {
  return statusMap[code] || "Unknown";
}



// Q: Convert nested if to clean format

function validateUser(user) {
  if (!user) return false;
  if (!user.email) return false;
  if (!user.isActive) return false;
  return true;
}



// ======================================================
// SECTION 6: BUG DEBUG SCENARIOS
// ======================================================

// Bug 1: Always true condition
let num = 10;

if (num = 5) {
  console.log("This will always run");
}

// FIX
if (num === 5) {
  console.log("Correct comparison");
}


// Bug 2: Logical misplacement
let permission = false;

if (!permission == true) {
  console.log("Confusing logic");
}

// FIX
if (permission === false) {
  console.log("Correct logic");
}



// ======================================================
// SECTION 7: COMMON INTERVIEW QUESTIONS WITH ANSWERS
// ======================================================

/*
1. When to use ternary?
Answer: For simple, one-line conditional logic.

2. When to use switch?
Answer: When matching one variable against many exact values.

3. What is fall-through?
Answer: When break is missing and execution continues to next case.

4. Early Return pattern?
Answer: Handling invalid cases first to improve readability.

5. Best pattern for large conditions?
Answer: Object lookup or Map instead of nested if-else.
*/



// ======================================================
// SECTION 8: PRACTICE PREDICT OUTPUT
// ======================================================

let x = 0;

if (x) {
  console.log("True");
} else {
  console.log("False");
}

// Output: False because 0 is falsy



// ======================================================
// FINAL INTERVIEW GOLD RULES
// ======================================================

/*
- Prefer early returns over deep nesting
- Avoid deeply nested ternary
- Use object mapping for scalability
- Do not compare with ==
- Always use strict comparison ===
- Always use break in switch unless intentional
- Readability > Cleverness
*/


// ======================================================
// END OF FILE
// ======================================================
