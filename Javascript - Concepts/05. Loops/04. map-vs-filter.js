// ======================================================
// map() vs filter()
// ======================================================


// ======================================================
// CORE DIFFERENCE IN ONE LINE
// ======================================================

/*
map()    -> changes EVERY item and returns a new array
filter() -> SELECTS some items and returns a smaller array
*/




// ======================================================
// PART 1: map()  (TRANSFORMATION)
// ======================================================

/*
Use when:
- You want to MODIFY or TRANSFORM every element
- Output array length is SAME as input
*/

console.log("\n--- map() BASIC EXAMPLES ---");

let numbers = [1, 2, 3, 4];

// Example 1: Double each number
let doubled = numbers.map(num => num * 2);

console.log("Original:", numbers);
console.log("Doubled:", doubled);

/*
Visual:
[1,2,3,4]  -> map(x2) ->  [2,4,6,8]
Same length, different values
*/


// Example 2: Convert to strings
let stringNums = numbers.map(num => "Number: " + num);
console.log(stringNums);



// ======================================================
// PART 2: filter()  (SELECTION)
// ======================================================

/*
Use when:
- You want to KEEP only values that match a condition
- Output array length is usually SMALLER
*/

console.log("\n--- filter() BASIC EXAMPLES ---");

// Example 1: Keep only even numbers
let evens = numbers.filter(num => num % 2 === 0);

console.log("Even numbers:", evens);

/*
Visual:
[1,2,3,4] -> filter(even) -> [2,4]
Some values removed
*/


// Example 2: Greater than 2
let greaterThanTwo = numbers.filter(num => num > 2);
console.log(greaterThanTwo);



// ======================================================
// VISUAL DIFFERENCE COMPARISON
// ======================================================

/*
Original array: [10, 20, 30, 40]

map(x+5)     -> [15, 25, 35, 45]  (all items changed)
filter(x>20) -> [30, 40]          (some removed)
*/




// ======================================================
// REAL WORLD EXAMPLES
// ======================================================

// User data
let users = [
  { name: "A", age: 17 },
  { name: "B", age: 22 },
  { name: "C", age: 30 }
];

// filter → get adults only
let adults = users.filter(user => user.age >= 18);
console.log("Adults:", adults);

// map → extract names only
let names = users.map(user => user.name);
console.log("Names:", names);




// ======================================================
// COMMON CONFUSION DEMO
// ======================================================

console.log("\n--- CONFUSION EXAMPLE ---");

// Wrong thinking: using map for filtering
let wrong = numbers.map(n => n > 2);
console.log(wrong); 
// Output: [false, false, true, true]
// This does NOT remove items, only transforms to boolean.


// Correct way:
let correct = numbers.filter(n => n > 2);
console.log(correct); 
// Output: [3, 4]




// ======================================================
// CHAINING map + filter (POWERFUL PATTERN)
// ======================================================

/*
Filter first → then transform
*/

let result = numbers
  .filter(n => n > 2)   // select
  .map(n => n * 10);    // transform

console.log("Chained Result:", result);




// ======================================================
// ASYNC BEHAVIOR CLARITY
// ======================================================

/*
map + async returns array of promises, NOT values.
*/

async function asyncExample() {
  let asyncMap = numbers.map(async n => {
    return n * 2;
  });

  console.log("Async map result:", asyncMap); // Promise array
}

asyncExample();




// ======================================================
// DECISION GUIDE
// ======================================================

/*
Use map() when:
✔ You modify data
✔ Output length must remain same

Use filter() when:
✔ You reduce data
✔ You remove unwanted elements
*/




// ======================================================
// FINAL MEMORY TRICK
// ======================================================

/*
map    -> MAKE new version of each item
filter -> FILTER out unwanted items
*/




// ======================================================
// END OF FILE
// ======================================================
