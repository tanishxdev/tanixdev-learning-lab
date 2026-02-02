// let and const
let count = 10;
const name = "Tanish";

// arrow functions
const square = (x) => x * x;
const add = (x, y) => x + y;

// template literals
let username = "Tanish";
let message = "Hello, " + username;
const sentence = `Hello, my username is ${username}`;

// destructuring
const person = {
  name: "Tanish",
  age: 20,
  location: "New York",
};

const { name: myName, age, location } = person;

// spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

// default parameters
const increment = (number, value = 1) => number + value;

// rest parameters
const total = (...numbers) => numbers.reduce((a, b) => a + b);
