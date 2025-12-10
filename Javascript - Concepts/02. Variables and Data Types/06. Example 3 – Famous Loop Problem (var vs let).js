// Using var → WRONG result
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 3  3  3   ← because var is function scoped

// Using let → CORRECT
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 0  1  2   ← each iteration has its own i

// Better Practical Example: Button Loop Problem
// ❌ Using var (wrong behaviour)
// Simulating three buttons created in a loop
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("Button number clicked:", i);
  }, i * 1000);
}

/*
Expected:
Button number clicked: 1
Button number clicked: 2
Button number clicked: 3

Actual Output:
Button number clicked: 4
Button number clicked: 4
Button number clicked: 4

Reason:
var is function scoped.
All callbacks share the SAME 'i'.
By the time setTimeout runs, loop is finished and i = 4.
*/

// ✅ Using let (correct behaviour)
// Same logic but with let
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("Button number clicked:", i);
  }, i * 1000);
}

/*
Output:
Button number clicked: 1
Button number clicked: 2
Button number clicked: 3

Reason:
let is block scoped.
Each loop iteration creates a NEW 'i' in memory.
So each timeout remembers its own value.
*/
