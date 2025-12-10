// ======================================================
// LOOPS - INTERVIEW MASTER FILE
// THEORY + QUESTIONS + CODE + BUG DEBUG + LEVELS
// ======================================================


// ======================================================
// SECTION 1: BASICS LEVEL
// ======================================================

// Q1: What is a loop?
// A loop repeatedly executes a block of code until a condition becomes false.

// Example: Basic for loop
for (let i = 0; i < 3; i++) {
  console.log("Hello", i);
}


// Q2: Types of loops in JavaScript
/*
1. for
2. while
3. do...while
4. for...of
5. for...in
6. forEach
7. map / filter / reduce (functional loops)
*/


// Example: while loop
let count = 0;

while (count < 3) {
  console.log("Count:", count);
  count++;
}


// Example: do...while loop
let num = 5;

do {
  console.log("Runs at least once", num);
} while (num < 2);



// ======================================================
// SECTION 2: LOOP BEHAVIOUR CORE CONCEPTS
// ======================================================

// Q: Difference between for and while?
/*
for -> used when iterations are known
while -> used when iterations are condition based
*/


// Example:
let x = 0;

for (; x < 2; x++) {
  console.log("for loop:", x);
}

let y = 0;
while (y < 2) {
  console.log("while loop:", y);
  y++;
}



// ======================================================
// SECTION 3: for...of vs for...in vs forEach
// ======================================================

// for...of gives VALUES
let arr = ["A", "B", "C"];

for (let val of arr) {
  console.log("for...of value:", val);
}

// for...in gives INDEX / KEY
for (let index in arr) {
  console.log("for...in index:", index);
}

// forEach gives values but cannot break
arr.forEach(val => {
  console.log("forEach value:", val);
});



// ======================================================
// SECTION 4: MEDIUM LEVEL INTERVIEW QUESTIONS
// ======================================================

// Q1: Which loops support break and continue?
/*
for, while, do...while, for...of, for...in -> YES
forEach -> NO
*/


// Demonstration: break
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log("Break test:", i);
}


// Q2: Predict Output

let result = 0;

for (var i = 0; i < 3; i++) {
  setTimeout(() => result++, 0);
}

console.log(result);

// Output: 0
// Reason: setTimeout runs after loop finishes


// Correct version using let
let correctResult = 0;

for (let i = 0; i < 3; i++) {
  setTimeout(() => correctResult++, 0);
}



// ======================================================
// SECTION 5: HARD LEVEL INTERVIEW QUESTIONS
// ======================================================

// Q1: Async loop behaviour

async function asyncLoop() {
  for (let i = 0; i < 3; i++) {
    await new Promise(resolve => setTimeout(resolve, 200));
    console.log("Async for loop:", i);
  }
}

asyncLoop();


// Wrong pattern
async function badAsync() {
  arr.forEach(async item => {
    await new Promise(r => r(), 200);
    console.log("forEach async:", item);
  });
}



// Q2: Infinite Loop Example

let infinite = 0;

// BUG
// while(infinite >= 0) {
//   console.log("Infinite", infinite);
//   // missing increment
// }

// FIX
while (infinite < 3) {
  console.log("Fixed loop:", infinite);
  infinite++;
}



// ======================================================
// SECTION 6: BUG DEBUG SCENARIOS
// ======================================================

// Bug 1: Loop not stopping
let index = 0;

// WRONG
// for(; index < 5;) {
//   console.log(index);
// }

// FIX
for (; index < 5; index++) {
  console.log("Fixed index:", index);
}


// Bug 2: Modifying array while looping

let numbers = [1,2,3,4];

// WRONG
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 2) {
    numbers.splice(i, 1);
  }
}

// CORRECT
let safe = numbers.filter(n => n !== 2);
console.log("Safe loop result:", safe);



// ======================================================
// SECTION 7: COMMON INTERVIEW QUESTIONS WITH ANSWERS
// ======================================================

/*
1. Which loop is fastest?
Answer: Traditional for loop.

2. Which loop should be avoided for async logic?
Answer: forEach.

3. Difference between for...of and for...in?
Answer:
for...of -> values
for...in -> keys

4. When do we use do...while?
Answer: When loop must run at least once.

5. What is an infinite loop?
Answer: A loop condition that never becomes false.
*/



// ======================================================
// SECTION 8: PRACTICE PREDICT OUTPUT
// ======================================================

let sum = 0;

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  sum += i;
}

console.log(sum); 
// Output: 12 (1+2+4+5)



// ======================================================
// FINAL INTERVIEW GOLD RULES
// ======================================================

/*
- Use for loop when performance matters
- Avoid forEach in async code
- Prefer for...of for clean iterable loops
- Never forget break condition
- Always guard against infinite loops
- Avoid modifying array while iterating
*/


// ======================================================
// END OF FILE
// ======================================================
