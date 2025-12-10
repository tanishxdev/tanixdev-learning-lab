// ======================================================
// MINI PRACTICE TASKS - SOLVED
// ======================================================


console.log("---- Task 1: Throw TDZ error and then fix it ----");

// ❌ TDZ ERROR example
try {
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 10;
} catch (error) {
  console.log("TDZ Error caught:", error.message);
}

// ✅ Fixed version
let a = 10;
console.log("Fixed TDZ value:", a);

/*
Explanation:
let variables are in Temporal Dead Zone until initialized.
Accessing them before declaration throws ReferenceError.
*/


console.log("\n---- Task 2: const array - prove content can change ----");

const numbers = [];
numbers.push(10);
numbers.push(20);
numbers.push(30);

console.log("Const array after push:", numbers);

/*
Explanation:
const prevents reassignment, not mutation.
Array reference remains same, but its content can change.
*/


console.log("\n---- Task 3: const object - change property ----");

const user = {
  name: "Tanish",
  age: 21
};

// Modifying property is allowed
user.age = 22;
user.role = "Developer";

console.log("Updated const object:", user);

/*
Explanation:
const object reference cannot change,
but its internal properties are mutable.
*/


console.log("\n---- Task 4: var loop printing 0,1,2 using IIFE only ----");

// Requirement: No let, only var + IIFE
for (var i = 0; i < 3; i++) {
  (function(iCopy) {
    setTimeout(() => {
      console.log(iCopy);
    }, 0);
  })(i);
}

/*
Output:
0
1
2

Explanation:
IIFE creates a new scope each iteration.
iCopy preserves the correct value.
*/

