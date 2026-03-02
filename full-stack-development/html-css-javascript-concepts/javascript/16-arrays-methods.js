// =======================================
// 1. Big Picture: Why Array Methods Exist
// =======================================

// Traditional loop approach (manual + verbose)

let numbers = [1, 2, 3, 4, 5];
let doubled = [];

// Loop through each element
for (let i = 0; i < numbers.length; i++) {
  // Push transformed value manually
  doubled.push(numbers[i] * 2);
}

console.log(doubled); // [2, 4, 6, 8, 10]

// ---------------------------------------
// Modern solution using array methods
// ---------------------------------------

// map() automatically loops and returns a new array
console.log(numbers.map((n) => n * 2)); // [2, 4, 6, 8, 10]

// =======================================
// 3. map() — Transform Each Element
// =======================================

// map() transforms every element
// It ALWAYS returns a new array of same length

const doubledNumbersWithMap = numbers.map((num) => {
  // For each element, return transformed value
  return num * 2;
});

console.log(doubledNumbersWithMap); // [2, 4, 6, 8, 10]

// Key idea:
// map = one input → one output (per element)

// =======================================
// 4. filter() — Select Some Elements
// =======================================

// filter() selects elements based on a condition
// Return true → element included
// Return false → element excluded

const evenNumberWithFilter = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumberWithFilter); // [2, 4]

// Key idea:
// filter = keep or discard elements

// =======================================
// 5. reduce() — Combine Into One Value
// (HARDEST BUT MOST POWERFUL)
// =======================================

// reduce() reduces the array into a single value
// total → accumulator
// num   → current element

const sumWithReduce = numbers.reduce((total, num) => {
  return total + num;
}, 0); // 0 = initial value of accumulator

console.log(sumWithReduce); // 15

// How reduce works internally:
// Step 1: total = 0, num = 1 → 1
// Step 2: total = 1, num = 2 → 3
// Step 3: total = 3, num = 3 → 6
// Step 4: total = 6, num = 4 → 10
// Step 5: total = 10, num = 5 → 15

// Key idea:
// reduce = many values → single value
