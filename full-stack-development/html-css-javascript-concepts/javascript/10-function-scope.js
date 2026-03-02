// 👉 4. Global Scope
console.log("4. Function Scope");
// Global variables - accessible everywhere
var globalVar = "I'm global";
let globalLet = "I'm also global";
const globalConst = "Me too!";

function showGlobals() {
  console.log(globalVar); // Accessible
  console.log(globalLet); // Accessible
  console.log(globalConst); // Accessible
}

showGlobals();
console.log(globalVar); // Also accessible here

// 👉 5. Function Scope
console.log("\n5. Function Scope==");

function myFunction() {
  var functionVar = "I'm local to myFunction";
  let functionLet = "I'm also local to myFunction";
  const functionConst = "Me too, local to myFunction";

  console.log(functionVar);
  console.log(functionLet);
  console.log(functionConst);
}

myFunction();

// Trying to access function-scoped variables outside the function will cause an error
// console.log(functionVar); // Uncaught ReferenceError
// console.log(functionLet); // Uncaught ReferenceError
// console.log(functionConst); // Uncaught ReferenceError

// 👉 6. Block Scope

console.log("\n6. Block Scope==");
// let and const → block scoped
// var → NOT block scoped (function scoped)

function testBlockScope() {
  if (true) {
    var varVariable = "I'm var";
    let letVariable = "I'm let";
    const constVariable = "I'm const";
  }

  console.log(varVariable); // Works - var has function scope
  // console.log(letVariable); // Error - let has block scope
  // console.log(constVariable); // Error - const has block scope
}

testBlockScope();

// Loop Block Scope – Code
for (var i = 0; i < 3; i++) {
  console.log(i); // Accessible here
}
console.log(i); // Accessible here because var is function scoped

// 👉 8. Variable Shadowing
console.log("\n8. Variable Shadowing==");

let username = "Global Name";

function testShadowing() {
  let username = "Local Name"; // Shadows the global 'username'
  console.log(username); // Outputs: Local Name
}

testShadowing();
console.log(username); // Outputs: Global Name

// 👉 9. Hoisting and Scope (Critical Concept)
console.log("\n9. Hoisting and Scope==");

// var
console.log(hoistedVar); // Outputs: undefined
var hoistedVar = "I'm hoisted";
console.log(hoistedVar); // Outputs: I'm hoisted

// let/const hoisting (Temporal Dead Zone)
// console.log(hoistedLet); // ReferenceError
let hoistedLet = "I'm not accessible before declaration";

// Function Hoisting
sayHello(); // Works! Function declarations are fully hoisted

function sayHello() {
  console.log("Hello!");
}

// Function Expression Hoisting
// sayGoodbye(); // TypeError: sayGoodbye is not a function
var sayGoodbye = function () {
  console.log("Goodbye!");
};
sayGoodbye(); // Works after declaration

// 👉 10. Practical Scope Examples (Why This Matters)

// Private State Using Scope

function createCounter() {
  let count = 0; // Private variable

  return {
    increamenet: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}

// Module Pattern
const userModule = (function () {
  let users = []; // Private array

  return {
    addUser: function (user) {
      users.push(user);
    },
    getUsers: function () {
      return [...users]; // Return copy, not original
    },
    getUserCount: function () {
      return users.length;
    },
  };
})();

// 👉 11. Common Scope Pitfalls

// var in Loops
for (var j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log("var loop j:", j); // Outputs 3 each time
  }, 100);
}

// let in Loops - Correct Solutions
for (let k = 0; k < 3; k++) {
  setTimeout(function () {
    console.log("let loop k:", k); // Outputs 0, 1, 2
  }, 100);
}

// Accidental Globals
function createUser() {
  name = "John"; // Becomes global
  let age = 25;
}
