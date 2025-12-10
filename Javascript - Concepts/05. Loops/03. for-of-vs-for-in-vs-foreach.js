// ======================================================
// for...of vs for...in vs forEach
// ======================================================


// ======================================================
// CORE DIFFERENCE IN ONE LINE
// ======================================================

/*
for...of   -> gives VALUES
for...in   -> gives KEYS (indexes / property names)
forEach    -> executes a function for each value
*/



// ======================================================
// PART 1: for...of  (VALUES DIRECTLY)
// ======================================================

/*
Use when:
- You care about the actual values
- You are working with iterable data (Array, String, Set, Map)
*/

console.log("\n--- for...of ---");

let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

/*
Output:
red
green
blue

IMPORTANT:
for...of does NOT give index.
It directly gives the value.
*/


// Getting both index and value with for...of
for (let [index, value] of colors.entries()) {
  console.log("Index:", index, "Value:", value);
}



// ======================================================
// PART 2: for...in  (KEYS / INDEXES)
// ======================================================

/*
Use when:
- You want object property names
- You are iterating over object structure
*/

console.log("\n--- for...in ---");

let user = {
  name: "Tanish",
  age: 21,
  role: "Developer"
};

for (let key in user) {
  console.log(key, "=>", user[key]);
}

/*
Output:
name => Tanish
age => 21
role => Developer

IMPORTANT:
for...in returns property names (keys), not values directly.
*/


// Using for...in on array (NOT recommended)
for (let index in colors) {
  console.log("Index from for...in:", index);
}

/*
Output:
0
1
2

This is why for...in is BAD for arrays.
It behaves like object property iteration.
*/



// ======================================================
// PART 3: forEach  (FUNCTION-BASED LOOP)
// ======================================================

/*
Use when:
- You want clean readable code
- You don't need to break or stop early
*/

console.log("\n--- forEach ---");

colors.forEach((value) => {
  console.log(value);
});

/*
Output:
red
green
blue

Looks similar to for...of BUT:
You cannot stop it.
*/


// Trying to break forEach (IMPOSSIBLE)
colors.forEach((value) => {
  if (value === "green") {
    return; // This does NOT break loop. Only skips current iteration.
  }
  console.log("forEach loop:", value);
});



// ======================================================
// VISUAL COMPARISON
// ======================================================

/*
ARRAY: ["A", "B", "C"]

for...of     -> A   B   C (values)
for...in     -> 0   1   2 (indexes)
forEach      -> A   B   C (values via function)
*/



// ======================================================
// CONTROL DIFFERENCE (BREAK TEST)
// ======================================================

console.log("\n--- BREAK TEST ---");

// for...of can break
for (let val of colors) {
  if (val === "green") break;
  console.log("for...of:", val);
}

// forEach cannot break
colors.forEach(val => {
  if (val === "green") return;
  console.log("forEach:", val);
});



// ======================================================
// ASYNC BEHAVIOR DIFFERENCE
// ======================================================

async function asyncDemo() {

  console.log("\n--- for...of with await ---");

  for (let val of colors) {
    await new Promise(resolve => setTimeout(resolve, 300));
    console.log("for...of async:", val);
  }

  console.log("\n--- forEach with await (WRONG) ---");

  colors.forEach(async val => {
    await new Promise(resolve => setTimeout(resolve, 300));
    console.log("forEach async:", val);
  });
}

asyncDemo();

/*
Observation:
for...of waits properly
forEach does not wait and runs in parallel
*/



// ======================================================
// CLEAR DECISION GUIDE
// ======================================================

/*
Use for...of when:
✔ You want values
✔ You may need break / await
✔ You work with arrays or strings

Use for...in when:
✔ You want object keys
✔ Iterating over object properties

Use forEach when:
✔ You want clean functional style
✔ No breaking required
✔ No async sequence needed
*/



// ======================================================
// REAL WORLD SAMPLE
// ======================================================

// Counting prices using for...of
let prices = [100, 200, 300];
let total = 0;

for (let price of prices) {
  total += price;
}
console.log("Total:", total);


// Logging object keys using for...in
let car = { brand: "BMW", model: "X5", year: 2023 };

for (let prop in car) {
  console.log(prop + ":", car[prop]);
}



// ======================================================
// FINAL MEMORY TRICKS
// ======================================================

/*
of  -> value OF something
in  -> key IN something
Each -> function runs for EACH item
*/


// ======================================================
// END OF FILE
// ======================================================
