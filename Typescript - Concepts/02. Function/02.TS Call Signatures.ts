// 4. Simple Greeting Example (Step-by-Step)

// Step 1: Define Call Signature
type GreetingFunction = {
  (name: string): string;
  description: string;
};
// Step 2: Implement It
const greet: GreetingFunction = (name: string) => {
  return `Hello, ${name}!`;
};

greet.description = "A function to greet users";

// Step 3: Use It
console.log(greet("Alice"));
console.log(greet.description);

// 6. Calculator Example (Realistic Use Case)

// define
type Calculator = {
  (num1: number, num2: number): number;
  operation: string;
};

// implement
const add: Calculator = (a: number, b: number) => a + b;
add.operation = "Addition";

const multiply: Calculator = (a: number, b: number) => a * b;
multiply.operation = "Multiplication";

const subtract: Calculator = (a: number, b: number) => a - b;
subtract.operation = "Subtraction";

// use
console.log(`${add.operation}: ${add(5, 3)}`);
console.log(`${multiply.operation}: ${multiply(5, 3)}`);
