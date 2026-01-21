// 1. Named Functions
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 2));

// 2. Anonymous Functions
const subtract = function (a: number, b: number): number {
  return a - b;
};

console.log(subtract(5, 2));

// 3. Arrow Functions
const multiply = (a: number, b: number): number => a * b;
console.log(multiply(5, 2));

// 4. Function Expression
const divide = function (a: number, b: number): number {
  return a / b;
};

// 4. Optional & Default Parameters

// Optional Parameters (?)
function greet(firstName: string, lastName?: string): string {
  if (lastName) {
    return `Hello ${firstName} ${lastName}`;
  }
  return `Hello ${firstName}`;
}

console.log("John");
console.log("John", "Doe");

// Default Parameters
function greet2(firstName: string, lastName = "Doe"): string {
  return `Hello ${firstName} ${lastName}`;
}

console.log(greet2("John"));
console.log(greet2("John", "Smith"));

// 5. Return Types
function square(num: number): number {
  return num * num;
}
console.log(square(4));

// 6. Void Return Type
function printMessage(message: string): void {
  console.log(message);
}

printMessage("Hello");

// 7. Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// 8. Function Overloading
function greet3(person: string): string;
function greet3(person: string, age: number): string;

function greet3(person: string, age?: number): string {
  if (age !== undefined) {
    return `Hello ${person}, you are ${age} years old!`;
  }
  return `Hello ${person}!`;
}

console.log(greet3("Anne"));
console.log(greet3("John", 30));

// 9. Callback Functions
function performOperation(
  a: number,
  b: number,
  callback: (result: number) => void
): void {
  const result = a + b;
  callback(result);
}

performOperation(3, 4, (result) => {
  console.log(result);
});
