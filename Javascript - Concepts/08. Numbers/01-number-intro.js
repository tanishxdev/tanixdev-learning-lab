// 3. Important Numeric Properties

// A) Only one numeric type

let a = 10; // integer
let b = 20.25; // float

console.log(typeof a); // number
console.log(typeof b); // number

// B) 53-bit Integer Precision
let bigNum1 = 999999999999999;     // 15 digits – accurate
let bigNum2= 9999999999999999;    // 16 digits – loses precision

// 4. Scientific Notation
let num1 = 1e6; // 1000000
let num2 = 1e-6; // 0.000001

// 5. Floating Point Precision Problem (Very Important)

let x = 0.22 + 0.12;
console.log(x); // 0.33999999999999997 (wrong) : Binary floating point cannot store some decimals exactly.

// how to fix : let x = (0.22 * 10 + 0.12 * 10) / 10;

let y = (0.22 * 10 + 0.12 * 10) / 10;
console.log(y); // 0.34

// 6. Adding Numbers & Strings

// numbers + numbers = numbers
console.log(10 + 15);
// numbers + strings = strings
console.log(10 + "15");
// strings + strings = strings => string catenation
console.log("10" + "15");

// 7. Numeric Strings → Auto Conversion
console.log("100" / "10"); // 10
console.log("100" * "10"); // 1000
console.log("100" - "10"); // 90

// 8. Number Literals
// 1. Decimal
let numLiteral1 = 10;

// 2. Exponential
let numLiteral2 = 10e3; // 10000
let numLiteral3 = 10e-3; // 0.01

// 9. Type Coercion With Numbers
console.log(undefined + 10); // NaN

console.log(null + 5); // 5

console.log(true + 10);  // 11
console.log(false + 10); // 10

console.log(Number("42"));   // 42
console.log(Number("hello")); // NaN

// 12. Useful Number Methods
let demoString = 21;

// Convert number to string
console.log(demoString.toString());          // "21"

// Convert to exponential form
console.log(demoString.toExponential());     // "2.1e+1"

// Set precision
console.log(demoString.toPrecision(4));      // "21.00"

// Check if integer
console.log(Number.isInteger(demoString));   // true

// Local formatting (Bangladesh Bengali)
console.log(demoString.toLocaleString("bn-BD"));  
