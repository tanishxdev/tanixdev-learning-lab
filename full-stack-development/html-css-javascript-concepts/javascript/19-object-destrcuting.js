// Array Destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;

console.log(first); // "red"
console.log(second); // "green"
console.log(third); // "blue"

// skip + rest operator
const numbers = [1, 2, 3, 4, 5];
const [a, c, ...rest] = numbers;

console.log(a); // 1
console.log(c); // 2
console.log(rest); // [3, 4, 5]

// Object Destructuring
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// properties name match by name
const { name, age, city } = person;

console.log(name); // "Alice"
console.log(age); // 30
console.log(city); // "New York"

// 5. Function Parameter Destructuring
function processCoordinates([x, y]) {
  console.log(`x: ${x}, y: ${y}`);
}

processCoordinates([10, 20]);

// 6. Swapping variable
let var1 = 1;
let var2 = 2;

[var1, var2] = [var2, var1];
console.log(`var1 = ${var1}, var2 = ${var2}`); // var1 = 2, var2 = 1
