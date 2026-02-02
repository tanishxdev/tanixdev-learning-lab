// Function Assigned to a Variable (Basic Example)

const greet1 = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet1("John"));

// Named Function Expression
const greet2 = function sayHello(name) {
  return `Hello, ${name}!`;
};

console.log(greet2("Doe"));

// Named Function Expression
const add = (a, b) => a + b;

console.log(add(2, 2));
