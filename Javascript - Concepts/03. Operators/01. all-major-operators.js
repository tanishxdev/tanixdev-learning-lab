// ======================================================
// ALL JAVASCRIPT OPERATORS
// ======================================================


// ------------------------------------------------------
// 1. ARITHMETIC OPERATORS
// ------------------------------------------------------

let a = 10;
let b = 3;

console.log("Arithmetic Operators");
console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333...
console.log("Modulus:", a % b);         // 1
console.log("Exponent:", a ** b);       // 1000


// ------------------------------------------------------
// 2. ASSIGNMENT OPERATORS
// ------------------------------------------------------

let x = 5;

x += 2;  // x = x + 2
x -= 1;  // x = x - 1
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2
x %= 2;  // x = x % 2

console.log("\nAssignment Operators result:", x);


// ------------------------------------------------------
// 3. COMPARISON OPERATORS
// ------------------------------------------------------

let p = 10;
let q = "10";

console.log("\nComparison Operators");
console.log(p == q);   // true  (checks value only)
console.log(p === q);  // false (checks value + type)
console.log(p != q);   // false
console.log(p !== q);  // true
console.log(p > 5);    // true
console.log(p < 20);   // true
console.log(p >= 10);  // true
console.log(p <= 9);   // false


// ------------------------------------------------------
// 4. LOGICAL OPERATORS
// ------------------------------------------------------

let isAdult = true;
let hasID = false;

console.log("\nLogical Operators");
console.log(isAdult && hasID); // AND
console.log(isAdult || hasID); // OR
console.log(!isAdult);         // NOT


// ------------------------------------------------------
// 5. TERNARY OPERATOR
// ------------------------------------------------------

let age = 20;

let result = age >= 18 ? "Allowed" : "Not Allowed";
console.log("\nTernary Operator:", result);


// ------------------------------------------------------
// 6. BITWISE OPERATORS
// ------------------------------------------------------

let m = 5; // 0101
let n = 1; // 0001

console.log("\nBitwise Operators");
console.log(m & n);  // AND
console.log(m | n);  // OR
console.log(m ^ n);  // XOR
console.log(~m);     // NOT
console.log(m << 1); // Left Shift
console.log(m >> 1); // Right Shift


// ------------------------------------------------------
// 7. STRING OPERATORS
// ------------------------------------------------------

let firstName = "Tanish";
let lastName = "Kumar";

console.log("\nString Operators");
console.log(firstName + " " + lastName);


// ------------------------------------------------------
// 8. TYPE OPERATORS
// ------------------------------------------------------

let data = 100;

console.log("\nType Operators");
console.log(typeof data);          // number
console.log(data instanceof Number); // false (primitive not object)


// ------------------------------------------------------
// 9. IN OPERATOR
// ------------------------------------------------------

let obj = { name: "Tanish", age: 21 };

console.log("\nIn Operator");
console.log("name" in obj); // true
console.log("salary" in obj); // false


// ------------------------------------------------------
// 10. NULLISH COALESCING OPERATOR (??)
// ------------------------------------------------------

let value = null;
let fallback = value ?? "Default Value";

console.log("\nNullish Coalescing:", fallback);


// ------------------------------------------------------
// 11. OPTIONAL CHAINING OPERATOR (?.)
// ------------------------------------------------------

let user = {
  profile: {
    email: "test@mail.com"
  }
};

console.log("\nOptional Chaining");
console.log(user.profile?.email);
console.log(user.address?.city);


// ------------------------------------------------------
// 12. DELETE OPERATOR
// ------------------------------------------------------

let person = {
  name: "Alex",
  age: 30
};

delete person.age;
console.log("\nAfter delete:", person);


// ------------------------------------------------------
// 13. COMMA OPERATOR
// ------------------------------------------------------

let valueResult = (1, 2, 3);
console.log("\nComma Operator:", valueResult);


// ------------------------------------------------------
// 14. SPREAD OPERATOR (...)
// ------------------------------------------------------

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log("\nSpread Operator:", arr2);


// ------------------------------------------------------
// 15. REST OPERATOR (...)
// ------------------------------------------------------

function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log("\nRest Operator:", sum(1, 2, 3, 4));


// ------------------------------------------------------
// 16. INCREMENT & DECREMENT
// ------------------------------------------------------

let counter = 5;
counter++; // post increment
counter--; // post decrement

console.log("\nIncrement/Decrement:", counter);

