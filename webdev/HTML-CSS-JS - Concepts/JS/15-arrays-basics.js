// 2. Why Arrays Exist (Problem → Solution)

// problem:
let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "orange";

// solution:
let fruits = ["apple", "banana", "orange"];

// 3. Creating Arrays

// Array Literal
let numbers = [1, 2, 3, 4, 5];

// Array Constructor
let colors = new Array("red", "green", "blue", "yellow");

// Array of Objects
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Array of Arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Empty Array
let emptyArray = [];

// Array with Mixed Types
let mixedArray = [1, "apple", true, null, undefined];

// Array with any data type
const data = [
  "string",
  123,
  true,
  null,
  undefined,
  { key: "value" },
  [1, 2, 3],
];

// 4. Accessing Array Elements (Indexing)

console.log(colors);
console.log(colors[0]); // First element
console.log(colors[1]); // Second element
console.log(colors[colors.length - 1]); // Last element
console.log(colors[5]); // undefined - Index out of bounds

// 5. Array Property: length (VERY IMPORTANT)
console.log(colors.length);

// Modifying Array Elements
colors.length = 2;
console.log(colors);

// 6. Adding Elements to Arrays

colors.push("black"); // Add to the end
colors.unshift("white"); // Add to the beginning
colors.splice(1, 0, "gray"); // Add in the middle

console.log(colors);

// 7. Removing Elements from Arrays
colors.pop(); // Remove from the end
colors.shift(); // Remove from the beginning
colors.splice(1, 1); // Remove in the middle

// splice

const removed = colors.splice(1, 2);
console.log(removed); // ["green", "blue"]
