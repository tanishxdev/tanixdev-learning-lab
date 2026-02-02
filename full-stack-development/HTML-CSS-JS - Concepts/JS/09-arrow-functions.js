// ---------------------------------
// 3. Basic Syntax — How Arrow Functions Are Written
// ---------------------------------
// traditional
function addNotArrow(a, b) {
  return a + b;
}

// arrow function
const addArrow = (a, b) => {
  return a + b;
};

// // Shorter arrow function (implicit return)
const addShortArrow = (a, b) => a + b;

// Single Parameter
var square = (x) => x * x;
var square = (x) => x * x; // Both are valid

// No Parameters
var greet = () => "Hello!";
var getCurrentTime = () => new Date().toLocaleTimeString();
