// ======================================================
// LOOP TYPES
// ======================================================


// ======================================================
// 1. for LOOP
// Best for: Known length, performance, full control
// ======================================================

/*
Concept:
Use when you know exactly how many times the loop should run.
Gives full control over index, start, end and step.
*/

console.log("FOR LOOP EXAMPLES");

// Example 1: Basic counting
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}

// Example 2: Reverse loop
for (let i = 5; i > 0; i--) {
  console.log("reverse i =", i);
}

// Example 3: Skipping values
for (let i = 0; i <= 10; i += 2) {
  console.log("Even:", i);
}



// ======================================================
// 2. while LOOP
// Best for: Unknown number of iterations
// ======================================================

/*
Concept:
Runs as long as condition remains true.
Condition is checked BEFORE each iteration.
*/

console.log("\nWHILE LOOP EXAMPLES");

let count = 0;

// Example 1: Basic while
while (count < 3) {
  console.log("count =", count);
  count++;
}

// Example 2: Simulating waiting
let attempts = 0;
let success = false;

while (!success && attempts < 3) {
  attempts++;
  console.log("Trying...", attempts);
  if (attempts === 3) success = true;
}



// ======================================================
// 3. do...while LOOP
// Best for: Must run at least once
// ======================================================

/*
Concept:
Executes once even if condition is false.
Condition checked AFTER loop body.
*/

console.log("\nDO-WHILE LOOP EXAMPLES");

let num = 5;

do {
  console.log("This runs at least once:", num);
  num++;
} while (num < 5);



// ======================================================
// 4. for...of LOOP
// Best for: Arrays, Strings, Maps, Sets
// ======================================================

/*
Concept:
Directly gives VALUES not index.
Works on iterable objects.
*/

console.log("\nFOR...OF LOOP EXAMPLES");

let arr = [10, 20, 30];

// Example 1: Array values
for (let value of arr) {
  console.log("Value:", value);
}

// Example 2: String characters
let word = "CODE";

for (let char of word) {
  console.log("Char:", char);
}



// ======================================================
// 5. for...in LOOP
// Best for: Object properties (keys)
// ======================================================

/*
Concept:
Loops over KEYS of an object.
Not recommended for arrays.
*/

console.log("\nFOR...IN LOOP EXAMPLES");

let user = {
  name: "Tanish",
  age: 21,
  role: "Developer"
};

for (let key in user) {
  console.log(key, "=>", user[key]);
}



// ======================================================
// 6. forEach()
// Best for: Clean functional iteration
// Limit: Cannot break or continue
// ======================================================

/*
Concept:
Runs function for each element.
No control over stopping loop.
*/

console.log("\nFOREACH EXAMPLES");

let numbers = [1, 2, 3, 4];

// Example 1: Simple forEach
numbers.forEach((n) => {
  console.log("Number:", n);
});

// Example 2: Index access
numbers.forEach((n, index) => {
  console.log("Index:", index, "Value:", n);
});

// BAD: Trying to break (will not work)
// forEach has no break or continue support


// ======================================================
// 7. map()
// Best for: Transform data
// ======================================================

/*
Concept:
Returns NEW array with modified values.
Does not mutate original array.
*/

console.log("\nMAP EXAMPLES");

let prices = [100, 200, 300];

let doubled = prices.map(price => price * 2);

console.log("Original:", prices);
console.log("Mapped:", doubled);



// ======================================================
// 8. filter()
// Best for: Condition-based selection
// ======================================================

console.log("\nFILTER EXAMPLES");

let mixed = [5, 10, 15, 20];

let greaterThan10 = mixed.filter(n => n > 10);

console.log("Filtered:", greaterThan10);



// ======================================================
// 9. Performance vs Control Demo
// ======================================================

/*
Demonstrating difference in break support
*/

console.log("\nBREAK CONTROL DEMO");

// for loop supports break
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log("for loop:", i);
}

// forEach does NOT support break
numbers.forEach(n => {
  if (n === 3) return;
  console.log("forEach:", n);
});



// ======================================================
// 10. Async + await behavior example
// ======================================================

async function asyncLoopDemo() {
  console.log("\nASYNC LOOP BEHAVIOUR");

  // This works correctly
  for (let i = 0; i < 3; i++) {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("for loop async:", i);
  }

  // This is dangerous
  numbers.forEach(async (n) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("forEach async:", n);
  });
}

asyncLoopDemo();



// ======================================================
// QUICK CONCEPT SUMMARY
// ======================================================

/*
for          -> best performance and full control
while        -> when repeat count unknown
do-while     -> must run at least once
for...of     -> values from iterable
for...in     -> keys from object
forEach      -> clean but cannot break
map          -> data transformation
filter       -> data selection

Avoid forEach for async logic.
Prefer for...of with await.
*/


// ======================================================
// END OF FILE
// ======================================================
