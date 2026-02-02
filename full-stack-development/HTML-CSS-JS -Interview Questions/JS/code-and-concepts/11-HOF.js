// 11. What is a higher-order function in JavaScript?

// Function as an Argument (Basic Example)
function greet(name) {
  return `Hello, ${name}!`;
}

function processUser(callback) {
  return callback("John");
}

console.log(processUser(greet));

// Function Returning Another Function
function multipler(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multipler(2);
const triple = multipler(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// Built-in Higher-Order Functions (Very Important)
const numbers = [1, 2, 3, 4, 5];

const square = numbers.map((n) => n * n);
console.log(square);
const even = numbers.filter((n) => n % 2 === 0);
console.log(even);
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);
