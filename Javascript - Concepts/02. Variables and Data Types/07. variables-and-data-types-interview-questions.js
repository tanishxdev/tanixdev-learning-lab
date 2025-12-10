// ======================================================
// INTERVIEW TRICKY QUESTIONS
// ======================================================

console.log("---- Question 1: Hoisting Var vs Let ----");

// What will be the output?
console.log(x);   // undefined (var is hoisted but not initialized)

var x = 10;
let y = 20;

console.log(y);   // 20

/*
Explanation:
- var x is hoisted and initialized with undefined
- let y is not accessible before declaration (Temporal Dead Zone)
*/



console.log("\n---- Question 2: Why does this print 3 three times? ----");

// Problem loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

/*
Output:
3
3
3

Reason:
var is function scoped.
All setTimeout callbacks share the same 'i'.
By the time they run, loop is already finished and i = 3.
*/



console.log("\n---- Question 3: Fix using var only (IIFE) ----");

// Correct fix using IIFE (closure)
for (var i = 0; i < 3; i++) {
  (function(iCopy) {
    setTimeout(() => console.log(iCopy), 0);
  })(i);
}

/*
Output:
0
1
2

Reason:
IIFE creates a new scope for each iteration.
Each timeout gets its own preserved value.
*/



console.log("\n---- Bonus: Correct modern way using let ----");

// Correct modern solution using let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

/*
Output:
0
1
2

Reason:
let is block scoped.
Each loop iteration gets its own memory.
*/

// ⭐ Interview-ready summary

// | Scenario               | Output         | Reason                           |
// | ---------------------- | -------------- | -------------------------------- |
// | var hoisting           | undefined      | variable exists but not assigned |
// | let before declaration | ReferenceError | Temporal Dead Zone               |
// | var in async loop      | 3 3 3          | shared memory reference          |
// | let in async loop      | 0 1 2          | block-scoped variable            |
