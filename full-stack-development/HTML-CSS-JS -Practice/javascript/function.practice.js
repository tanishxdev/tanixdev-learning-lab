// Write a function that prints “Hello World”.
console.log("helloWorld");
function helloWorld() {
  console.log("Hello World");
}

helloWorld();

// Write a function that takes a name and prints “Hello, <name>”.
console.log("greeting");
function greeting(name) {
  console.log(`Hello ${name}`);
}

greeting("John");

// Write a function that returns the sum of two numbers.
console.log("sumOfTwoNumbers");
function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(sumOfTwoNumbers(1, 2));

// Write a function that checks whether a number is even or odd.
console.log("checkOddEven");
function checkOddEven(num) {
  if (num % 2 == 0) {
    console.log(num, "Even");
  } else {
    console.log(num, "Odd");
  }
}

checkOddEven(2);
checkOddEven(3);

// Write a function that returns the square of a number.
console.log("squareOfNum");
function squareOfNum(num) {
  return num * num;
}

console.log(squareOfNum(2));

// Write a function that returns the maximum of two numbers.
console.log("maxOfTwoNum");
function maxOfTwoNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(maxOfTwoNum(10, 2));

// Write a function that returns the minimum of three numbers.
console.log("miniAmongThreeNum");
function miniAmongThreeNum(num) {
  if (num[0] < num[1] && num[0] < num[2]) {
    return num[0];
  } else if (num[1] < num[0] && num[1] < num[2]) {
    return num[1];
  } else {
    return num[2];
  }
}

console.log(miniAmongThreeNum([10, 2, 3]));

// Write a function with default parameters.
console.log("defaultParameters");
function defaultParameters(num1 = 0, num2 = 0) {
  return num1 + num2;
}

console.log(defaultParameters(1, 2)); // 3
console.log(defaultParameters()); // 0 + 0 = 0

// Write a function that accepts no arguments but returns the current year.
console.log("functionWithArguments");
function functionWithArguments() {
  return new Date().getFullYear();
}

console.log(functionWithArguments());

// Write a function that returns true if input is a string, else false.
console.log("checkStringInput");
function checkStringInput(input) {
  if (typeof input === "string") {
    return true;
  } else {
    return false;
  }
}

console.log(checkStringInput("hello"));
console.log(checkStringInput(1));
