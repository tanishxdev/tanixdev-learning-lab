// ======================================================
// TERNARY OPERATOR – THE KING OF ONE-LINERS
// ======================================================


// ------------------------------------------------------
// BASIC SYNTAX
// ------------------------------------------------------

// condition ? valueIfTrue : valueIfFalse


// ------------------------------------------------------
// 1. Assigning Variables (Perfect Use Case)
// ------------------------------------------------------

let isLoggedIn = false;

const status = isLoggedIn ? "Logout" : "Login";
console.log("Button Label:", status);



// ------------------------------------------------------
// 2. Inline JSX Style Simulation
// ------------------------------------------------------
// (Simulated version without React)

let isActive = true;

const buttonClass = isActive ? "btn active" : "btn";
console.log("Button Class:", buttonClass);



// ------------------------------------------------------
// 3. Return from Function (Clean & Readable)
// ------------------------------------------------------

function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log("Member Fee:", getFee(true));
console.log("Guest Fee:", getFee(false));



// ------------------------------------------------------
// 4. Nested Ternary (Use Sparingly)
// ------------------------------------------------------

let score = 75;

const message =
  score > 90 ? "Excellent" :
  score > 70 ? "Good" :
  score > 50 ? "Average" :
  "Needs Improvement";

console.log("Performance:", message);

/*
Readable because levels are clear.
Do NOT go beyond this depth.
*/



// ------------------------------------------------------
// DANGER ZONE – BAD TERNARY (DO NOT WRITE THIS)
// ------------------------------------------------------

let a = true, b = true, c = false, d = 1, e = 2, f = 3, g = false, h = 4, i = 5;

// ❌ Extremely unreadable
const badResult = a ? b ? c ? d : e : f : g ? h : i;
console.log("Bad Result:", badResult);

/*
This destroys readability and maintainability.
*/


// ------------------------------------------------------
// CLEAN VERSION USING if-else (Preferred)
// ------------------------------------------------------

let cleanResult;

if (a) {
  if (b) {
    cleanResult = c ? d : e;
  } else {
    cleanResult = f;
  }
} else {
  cleanResult = g ? h : i;
}

console.log("Clean Result:", cleanResult);



// ------------------------------------------------------
// MODERN ALTERNATIVE: OBJECT LOOKUP (BEST FOR MANY CONDITIONS)
// ------------------------------------------------------

const grades = {
  90: "A",
  80: "B",
  70: "C",
  60: "D"
};

let studentScore = 78;

// Convert score to nearest lower grade bracket
const gradeKey = Math.floor(studentScore / 10) * 10;

const finalGrade = grades[gradeKey] || "F";

console.log("Score:", studentScore);
console.log("Grade:", finalGrade);



// ------------------------------------------------------
// WHEN TO USE TERNARY (INTERVIEW STANDARDS)
// ------------------------------------------------------

/*
Use ternary when:
- Condition is SIMPLE
- Output is SINGLE LINE
- Readability is maintained

Avoid ternary when:
- Multiple nested logic
- Complex branching
- Reduces clarity
*/

/*
Interview One-Liners

“Ternary is great for clarity, not for cleverness.”
“Readability > One-liner clever code.”
“Use object mapping when conditions scale.”

*/


// ======================================================
// END OF FILE
// ======================================================
