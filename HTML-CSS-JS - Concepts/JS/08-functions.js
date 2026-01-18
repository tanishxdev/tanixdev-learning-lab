// ---------------------------------
// 3. Function Declaration
// ---------------------------------
// Basic function - not taking any parameters and not returning any value
function greet() {
  console.log("Hello, World!");
}

greet(); // Call the function

// function with parameters

function greetUser(name) {
  console.log("Hello, " + name + "!");
}
greetUser("Alice"); // Call the function with an argument

// function with return value
function add(a, b) {
  return a + b;
}

let sum = add(5, 3); // Call the function and store the return value
console.log("Sum:", sum);

// ---------------------------------
// 4. Function Expression
// ---------------------------------

// Function expression assigned to a variable
let multiply = function (x, y) {
  return x * y;
};

let product = multiply(4, 6); // Call the function and store the return value
console.log("Product:", product); // Output the product

// // Anonymous function
let divide = function (x, y) {
  return x / y;
};

// Anonymous function
let numbers = [1, 2, 3];
let doubled = numbers.map(function (num) {
  return num * 2;
});
console.log("Doubled Numbers:", doubled); // Output the doubled numbers

// ---------------------------------
// 5. Parameters vs Arguments (very important distinction)
// ---------------------------------

// Function with multiple parameters
function introduction(name, age, city) {
  return (
    "My name is " +
    name +
    ", I'm " +
    age +
    " years old and I live in " +
    city +
    "."
  );
}

console.log(introduction("Hulk", 250, "Moon"));

// Default Parameters
function greeting(name = "Guest", message = "Welcome to our website!") {
  return "Hello, " + name + "! " + message;
}
console.log(greeting()); // Using default parameters
console.log(greeting("Bruce")); // Overriding the first parameter
console.log(greeting("Bruce", "Glad to see you here!")); // Overriding both parameters

// Rest Parameters (variable inputs)
// define a function that takes a variable number of arguments
function sumALl(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log("Sum of all 1, 2, 3: ", sumALl(1, 2, 3));
// ---------------------------------
// 6. Return Statement (control flow)
// ---------------------------------

function square(num) {
  return num * num; // returns the square of the number
}
console.log(square(4));

// Early return
function checkAge(age) {
  if (age < 0) {
    return "Invalid age";
  }
  if (age < 18) {
    return "Minor";
  }
  return "Adult";
}
console.log(checkAge(10)); // Output: Minor
console.log(checkAge(20)); // Output: Adult
console.log(checkAge(-5)); // Output: Invalid age

// ---------------------------------
// 7. Function Scope (visibility of variables)
// ---------------------------------

// Global scope
let globalVar = "I'm global";

function outerFunction() {
  let outerVar = "I'm in outer function";

  function innerFunction() {
    let innerVar = "I'm in inner function";
    console.log(globalVar); // Can access
    console.log(outerVar); // Can access
    console.log(innerVar); // Can access
  }

  innerFunction();
  //   console.log(innerVar); // Error! Can't access
}

outerFunction();

// ---------------------------------
// 8. Higher-Order Functions (core JS power)
// ---------------------------------

function processArray(arr, callback) {
  let result = [];

  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}
let numbersArray = [1, 2, 3, 4, 5];
let squaredArray = processArray(numbersArray, function (num) {
  return num * num;
});
console.log(squaredArray); // Output: [1, 4, 9, 16, 25]

// ---------------------------------
// 9. Practical Real-World Examples
// ---------------------------------

// calculator logic
function calculator(a, b, operation) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      return "Invalid operation";
  }
}

console.log(calculator(4, 2, "add")); // Output: 6
console.log(calculator(4, 2, "multiply")); // Output: 8
console.log(calculator(4, 2, "divide")); // Output: 2
console.log(calculator(4, 2, "subtract")); // Output: 2
console.log(calculator(4, 2, "modulus")); // Output: Invalid operation

// Validation logic
function validateUser(user) {
  if (!user.name || user.name.length < 2) {
    return { valid: false, error: "Name too short" };
  }
  if (!user.email || !user.email.includes("@")) {
    return { valid: false, error: "Invalid email" };
  }
  return { valid: true };
}
let user1 = { name: "A", email: "aliceexample.com" };
let validation1 = validateUser(user1);
console.log(validation1); // Output: { valid: false, error: "Name too short" }

let user2 = { name: "Alice", email: "Q0l2t@example.com" };
let validation2 = validateUser(user2);
console.log(validation2); // Output: { valid: true }


// Utility functions :
// A utility function is a function that performs a specific, narrow task and is generally used to support other functions.

function getUniqueValues(arr) {
  return [...new Set(arr)];
}
function findLargest(arr) {
  return Math.max(...arr);
}
function isPalindrome(str) {
  let cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

// Examples of using utility functions
console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(findLargest([10, 5, 20, 15])); // Output: 20
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true

// String utilities
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world from JaavaScript")); // Output: "Hello World From JaavaScript"

// Date utilities
function getDayOfWeek(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}
console.log(getDayOfWeek(new Date())); // Output: "Thu"

// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"
