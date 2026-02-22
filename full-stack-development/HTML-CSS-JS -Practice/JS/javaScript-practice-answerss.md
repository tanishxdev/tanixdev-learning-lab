# Solutions: JavaScript Practice Questions

# 01 - What is JavaScript

## Conceptual Understanding

1. **What is JavaScript? Explain in your own words.**
   - JavaScript is a high-level, dynamic programming language primarily used to create interactive and dynamic content on websites. It allows developers to add behavior, respond to user actions, and manipulate web page content in real-time.

2. **Is JavaScript a compiled or interpreted language? Explain why.**
   - JavaScript is an interpreted language, but modern engines use Just-In-Time (JIT) compilation. Traditionally, it was interpreted line-by-line, but now engines like V8 compile JavaScript to machine code just before execution for better performance.

3. **Why is JavaScript called a high-level language?**
   - It's called high-level because it abstracts away complex details of the computer hardware (like memory management, CPU operations), providing a simpler syntax that's closer to human language.

4. **What makes JavaScript different from HTML and CSS?**
   - HTML provides structure (content), CSS provides styling (presentation), while JavaScript provides behavior (interactivity). HTML and CSS are markup/styling languages, JavaScript is a programming language.

5. **Can JavaScript run outside the browser? How?**
   - Yes, through runtime environments like Node.js, Deno, or Bun. These environments provide JavaScript engines (like V8) with additional APIs to interact with the file system, network, etc.

6. **What is ECMAScript?**
   - ECMAScript is the standardized specification that JavaScript follows. It defines the core features of the language. JavaScript is an implementation of ECMAScript.

7. **Why do we say JavaScript is dynamically typed?**
   - Because variables in JavaScript can hold any type of data, and their type can change during runtime without explicit type declarations.

8. **What does it mean that JavaScript is multi-paradigm?**
   - JavaScript supports multiple programming styles: procedural, object-oriented (prototype-based), and functional programming, allowing developers to choose the approach that best fits their needs.

9. **Is JavaScript synchronous or asynchronous by default?**
   - JavaScript is synchronous by default (single-threaded, executing one operation at a time), but it can handle asynchronous operations through callbacks, promises, and async/await.

10. **Why is JavaScript considered event-driven?**
    - JavaScript in the browser responds to user events (clicks, keypresses) and system events using an event loop that handles asynchronous operations.

## Engine & Environment Basics

11. **What is a JavaScript Engine?**
    - A program that executes JavaScript code, converting it into machine code that the computer can understand.

12. **Name some popular JavaScript engines.**
    - V8 (Chrome, Node.js), SpiderMonkey (Firefox), JavaScriptCore (Safari), Chakra (Edge Legacy).

13. **What is the role of V8 engine?**
    - V8 is Google's open-source JavaScript engine that compiles JavaScript directly to machine code, used in Chrome and Node.js for high-performance execution.

14. **What is the difference between JavaScript Engine and JavaScript Runtime?**
    - Engine: Executes JavaScript code (e.g., V8)
    - Runtime: Engine + additional APIs (Web APIs in browser, Node.js APIs in Node) that provide environment-specific functionality.

15. **Why does browser need a JS engine?**
    - To interpret and execute JavaScript code embedded in web pages, enabling interactive features.

16. **Why does Node.js need a JS engine?**
    - To execute JavaScript on the server-side, allowing JavaScript to be used for backend development.

17. **What is the role of Web APIs in browser?**
    - Web APIs (DOM, fetch, setTimeout) provide additional functionality not part of JavaScript itself, allowing interaction with browser features.

18. **Can JavaScript directly interact with hardware?**
    - No, JavaScript runs in a sandboxed environment and cannot directly access hardware. It relies on runtime environments to provide APIs for such interactions.

## Behavior & Nature

19. **Why is JavaScript single-threaded?**
    - For simplicity and to avoid complexity of multi-threaded programming (like race conditions, deadlocks). It uses event loop to handle concurrency.

20. **What problems can occur because JS is single-threaded?**
    - Blocking operations can freeze the UI. Long-running tasks can make the application unresponsive.

21. **How does JavaScript handle multiple tasks if it is single-threaded?**
    - Through asynchronous programming and the event loop. It delegates heavy tasks to Web APIs, and uses callback queue to handle them when main thread is free.

22. **What is just-in-time (JIT) compilation?**
    - A technique where JavaScript code is compiled to machine code during execution rather than ahead of time, balancing between interpretation speed and compiled performance.

23. **Why is JavaScript considered loosely typed?**
    - Because variables are not bound to a specific data type; they can hold any type and type conversion happens automatically when needed.

24. **What are some advantages of dynamic typing?**
    - Faster prototyping, less code, flexibility, easier for beginners.

25. **What are some disadvantages of dynamic typing?**
    - Runtime type errors possible, less predictable, harder to catch bugs early, can impact performance.

## Comparison Based

26. **Difference between JavaScript and Java:**
    - JavaScript: Interpreted, dynamic typing, prototype-based, runs in browser/Node.js
    - Java: Compiled, static typing, class-based, runs on JVM

27. **Difference between JavaScript and C++:**
    - JavaScript: High-level, interpreted, garbage collected, dynamic typing
    - C++: Low-level, compiled, manual memory management, static typing

28. **Why is JavaScript more suitable for web development?**
    - It's the only language natively supported by browsers, has extensive Web APIs, and is designed for event-driven, interactive experiences.

29. **Can JavaScript be used for backend development?**
    - Yes, using Node.js, Deno, or Bun, JavaScript can be used to build server-side applications, APIs, and microservices.

30. **What are some real-world applications built using JavaScript?**
    - Web apps: Gmail, Facebook, Netflix
    - Desktop apps: VS Code (Electron)
    - Mobile apps: React Native apps
    - Backend: PayPal, Uber, LinkedIn use Node.js

---

# 02 - Variables

## Conceptual Understanding

1. **What is a variable in JavaScript?**
   - A named container that stores data values in memory, allowing us to reference and manipulate that data throughout our code.

2. **Why do we need variables?**
   - To store, retrieve, and manipulate data, make code reusable, and maintain state in programs.

3. **How does JavaScript store variables in memory?**
   - Primitives stored in stack (call stack), objects/references stored in heap with references in stack.

4. **What is variable declaration?**
   - Creating a variable using keywords (var, let, const) without assigning a value: `let x;`

5. **What is variable initialization?**
   - Assigning a value to a variable for the first time, either at declaration or later.

6. **What is variable assignment?**
   - Storing a value in an already declared variable using the assignment operator (=).

7. **What is the difference between declaration and initialization?**
   - Declaration: Creating the variable (`let x;`)
   - Initialization: First assignment of value to variable (`x = 5;` or `let x = 5;`)

8. **What happens if you use a variable without declaring it?**
   - In non-strict mode: Creates a global variable (accidental global)
   - In strict mode: Throws a ReferenceError

9. **What is dynamic typing in the context of variables?**
   - Variables can hold any type of data and can change their type during runtime.

10. **Can a variable change its data type in JavaScript? Explain with example reasoning.**
    - Yes, because JavaScript is dynamically typed:
    ```javascript
    let x = 5; // number
    x = "hello"; // now string
    x = true; // now boolean
    ```

## var, let, const Deep Understanding

11. **What is `var`?**
    - Old way to declare variables (pre-ES6), function-scoped, can be redeclared, hoisted with undefined.

12. **What is `let`?**
    - ES6 way to declare variables, block-scoped, cannot be redeclared in same scope, hoisted but in TDZ.

13. **What is `const`?**
    - ES6 way to declare constants, block-scoped, must be initialized at declaration, cannot be reassigned.

14. **Difference between `var` and `let`:**
    - `var`: Function-scoped, can be redeclared, hoisted with undefined, attaches to window
    - `let`: Block-scoped, cannot be redeclared, hoisted but TDZ, doesn't attach to window

15. **Difference between `let` and `const`:**
    - `let`: Can be reassigned, can be declared without initialization
    - `const`: Cannot be reassigned, must be initialized at declaration

16. **Why was `let` and `const` introduced in ES6?**
    - To fix issues with `var` (scope leakage, redeclaration bugs) and provide better variable control.

17. **Can you reassign a `const` variable?**
    - No, primitive values cannot be reassigned. Object properties can be modified but reference cannot change.

18. **Can you redeclare a `let` variable?**
    - No, in the same scope it throws SyntaxError.

19. **Can you redeclare a `var` variable?**
    - Yes, multiple times in same scope without error.

20. **Which keyword should you prefer in modern JavaScript and why?**
    - `const` by default, `let` when reassignment needed. Avoid `var` due to its unpredictable scoping.

## Scope & Behavior

21. **What is global scope?**
    - The outermost scope, variables declared here are accessible everywhere in the program.

22. **What is block scope?**
    - Scope limited to a block `{}` (if, for, while). Variables declared with `let` and `const` are block-scoped.

23. **Which variables are block scoped?**
    - `let` and `const` variables.

24. **Is `var` block scoped? Why or why not?**
    - No, `var` ignores block boundaries (except functions). It's function-scoped due to historical design.

25. **What is function scope?**
    - Variables declared inside a function are accessible only within that function.

26. **What happens if a variable is declared inside a block using `var`?**
    - It becomes available outside the block (if not inside a function), leading to scope leakage.

27. **What is shadowing in variables?**
    - When a variable in inner scope has same name as variable in outer scope, it "shadows" or hides the outer variable.

28. **What happens if two variables have the same name in different scopes?**
    - Inner scope variable shadows outer one; outer variable remains unchanged but inaccessible in inner scope.

## Hoisting & Internal Behavior (Only Basics Here)

29. **Are variables hoisted in JavaScript?**
    - Yes, all declarations (var, let, const) are hoisted, but behave differently.

30. **What is the difference in hoisting behavior between `var`, `let`, and `const`?**
    - `var`: Hoisted and initialized with undefined
    - `let`/`const`: Hoisted but not initialized (Temporal Dead Zone)

31. **What is the temporal dead zone (TDZ)?**
    - The period between entering scope and actual declaration where `let`/`const` variables cannot be accessed.

32. **Why accessing `let` or `const` before declaration throws error but `var` does not?**
    - `var` is initialized with undefined during hoisting; `let`/`const` remain uninitialized until declaration.

## Practical & Debug Thinking

33. **What will happen if you declare a variable without assigning a value?**
    - It will have the value `undefined`.

34. **What is the default value of an uninitialized variable?**
    - `undefined`.

35. **What error will occur if you try to reassign a `const` variable?**
    - TypeError: Assignment to constant variable.

36. **What error will occur if you redeclare a `let` variable in the same scope?**
    - SyntaxError: Identifier has already been declared.

37. **Why is using `var` considered risky in large applications?**
    - Due to function-scoping (not block-scoping), accidental redeclaration, hoisting confusion, and global object attachment.

38. **What are best practices while declaring variables?**
    - Use `const` by default, `let` when needed, avoid `var`
    - Declare at top of scope
    - Use meaningful names
    - One variable per declaration

## Coding Practice

39. **Write a program to swap two variables without using a third variable.**

```javascript
let a = 5,
  b = 10;
[a, b] = [b, a];
console.log(a, b); // 10, 5
```

40. **Write a program that demonstrates block scope using `let`.**

```javascript
{
  let x = 10;
  console.log(x); // 10
}
console.log(typeof x); // undefined (x not accessible)
```

41. **Write a program that shows why `var` can cause unexpected behavior in loops.**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // Prints 3,3,3
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0); // Prints 0,1,2
}
```

42. **Create a constant object and try modifying its properties. What happens and why?**

```javascript
const person = { name: "John", age: 30 };
person.age = 31; // Works - object properties can be modified
person.city = "NYC"; // Works - can add properties
// person = { name: "Jane" }; // Error - cannot reassign

console.log(person); // { name: "John", age: 31, city: "NYC" }
// const prevents reassignment of the variable, not mutation of the object
```

---

# 03 - Data Types

## Conceptual Understanding

1. **What is a data type in JavaScript?**
   - Classification of data that tells JavaScript what kind of value a variable holds and what operations can be performed on it.

2. **Why are data types important in programming?**
   - They determine memory allocation, allowed operations, and help prevent errors.

3. **How many types of data types exist in JavaScript?**
   - Two categories: Primitive (7 types) and Non-Primitive/Reference (Objects).

4. **What is the difference between primitive and non-primitive data types?**
   - Primitives: Stored by value, immutable, compared by value
   - Non-primitives: Stored by reference, mutable, compared by reference

5. **Why are primitive data types immutable?**
   - They are stored directly in memory and cannot be altered; operations create new values instead of modifying existing ones.

6. **Why are objects considered reference types?**
   - Objects store a reference (memory address) rather than the actual value; multiple variables can reference same object.

7. **What does it mean that JavaScript is dynamically typed?**
   - Variables can hold any data type, and types are determined at runtime automatically.

8. **Can a variable change from one data type to another? Explain with reasoning.**
   - Yes, through assignment or type coercion, because JavaScript doesn't enforce type constraints.

9. **How does JavaScript determine the type of a value?**
   - Through internal type tags and the `typeof` operator which examines the value's type.

10. **What is the role of the `typeof` operator?**
    - Returns a string indicating the type of the operand.

## Primitive Data Types

11. **List all primitive data types in JavaScript.**
    - number, string, boolean, undefined, null, bigint, symbol

12. **What is `number` type? Does JS differentiate between integer and float?**
    - Represents numeric values (both integers and floating-point). No distinction; all numbers are IEEE 754 floating-point.

13. **What is `string` type? How are strings stored internally?**
    - Represents textual data. Stored as sequences of UTF-16 code units, immutable.

14. **What is `boolean` type? Where is it commonly used?**
    - Represents logical values: true/false. Used in conditions, loops, logical operations.

15. **What is `undefined`?**
    - Indicates a variable has been declared but not assigned a value.

16. **What is `null`?**
    - Represents intentional absence of any object value.

17. **What is the difference between `undefined` and `null`?**
    - undefined: Variable declared but no value assigned (default)
    - null: Explicitly assigned "no value"

18. **What is `bigint`? Why was it introduced?**
    - For integers larger than 2^53-1 (Number.MAX_SAFE_INTEGER). Introduced to handle very large integers precisely.

19. **What is `symbol`? Why do we need it?**
    - Unique and immutable primitive, used as object property keys to avoid naming conflicts.

20. **Why does `typeof null` return `"object"`?**
    - Historical bug from early JavaScript that can't be fixed due to backward compatibility.

## Reference (Non-Primitive) Types

21. **What are reference data types in JavaScript?**
    - Objects, arrays, functions - types that store references to memory locations.

22. **What is an object in JavaScript?**
    - Collection of key-value pairs, where keys are strings/symbols and values can be any type.

23. **Are arrays primitive or reference types?**
    - Reference types (they're special objects with numeric indices and array methods).

24. **Are functions objects in JavaScript?**
    - Yes, functions are first-class objects that can have properties and methods.

25. **What happens when you copy a primitive value?**
    - A new independent copy is created; changes don't affect original.

26. **What happens when you copy a reference value?**
    - The reference (memory address) is copied, not the actual object; both point to same data.

27. **Explain pass-by-value vs pass-by-reference in JavaScript.**
    - JavaScript is always pass-by-value, but for objects, the value passed is the reference (address).

28. **Why modifying one object variable sometimes affects another?**
    - Because they reference the same object in memory; changes through one reference affect the shared object.

## Memory & Internal Behavior (Basic Level)

29. **Where are primitive values stored (stack or heap)?**
    - Stored in stack memory (call stack).

30. **Where are objects stored?**
    - Stored in heap memory, with references stored in stack.

31. **What is a memory reference?**
    - An address pointing to where an object is stored in heap memory.

32. **Why comparing two objects using `===` often returns false even if they look same?**
    - Because `===` compares references, not content. Different objects have different memory addresses.

## Debug Thinking

33. **What will `typeof NaN` return?**
    - `"number"` (NaN is a numeric value representing "Not-a-Number").

34. **What will `typeof []` return?**
    - `"object"` (arrays are objects in JavaScript).

35. **What will `typeof function() {}` return?**
    - `"function"` (functions are special objects recognized by typeof).

36. **Why is `NaN` considered a number type?**
    - It represents an invalid number result in numeric operations, part of IEEE 754 floating-point spec.

37. **What is the difference between `==` and `===` when comparing different data types?**
    - `==` performs type coercion before comparison; `===` checks both value and type without coercion.

## Coding Practice

38. **Write a program to check if a value is a primitive type.**

```javascript
function isPrimitive(value) {
  return (
    value === null || (typeof value !== "object" && typeof value !== "function")
  );
}
console.log(isPrimitive(5)); // true
console.log(isPrimitive("hello")); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive(null)); // true
```

39. **Write a program to demonstrate copying of primitive vs reference type.**

```javascript
// Primitive copy
let a = 5;
let b = a;
b = 10;
console.log(a, b); // 5, 10 (independent)

// Reference copy
let obj1 = { value: 5 };
let obj2 = obj1;
obj2.value = 10;
console.log(obj1.value, obj2.value); // 10, 10 (same object)
```

40. **Create two objects with same properties and compare them using `===`. What happens and why?**

```javascript
const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };
console.log(obj1 === obj2); // false (different references)

const obj3 = obj1;
console.log(obj1 === obj3); // true (same reference)
```

41. **Write a function that returns the exact type of any value (including arrays and null).**

```javascript
function exactType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}
console.log(exactType(null)); // "null"
console.log(exactType([1, 2, 3])); // "array"
console.log(exactType({})); // "object"
console.log(exactType(5)); // "number"
```

---

# 04 - Type Conversion

## Conceptual Understanding

1. **What is type conversion in JavaScript?**
   - Converting a value from one data type to another, either explicitly (by programmer) or implicitly (by JavaScript).

2. **What is the difference between type conversion and type coercion?**
   - Type conversion: Explicit/manual conversion
   - Type coercion: Implicit/automatic conversion by JavaScript

3. **What is implicit type coercion?**
   - JavaScript automatically converts types when operators encounter mismatched types.

4. **What is explicit type conversion?**
   - Programmer intentionally converts types using functions like `Number()`, `String()`, etc.

5. **Why does JavaScript perform implicit coercion?**
   - To make operations possible when types don't match, reducing explicit conversions for common cases.

6. **In which operations does JavaScript perform automatic type conversion?**
   - Arithmetic operations (+, -, \*, /), comparison (==, >, <), logical operations, string concatenation.

7. **Why is `==` considered unsafe in many cases?**
   - Because it performs complex, sometimes unexpected type coercion leading to bugs.

8. **Why is `===` recommended over `==`?**
   - It avoids type coercion, making behavior predictable and preventing subtle bugs.

9. **What are falsy values in JavaScript?**
   - Values that coerce to false: false, 0, -0, 0n, "", null, undefined, NaN

10. **What are truthy values in JavaScript?**
    - All values that are not falsy, including: true, "0", "false", [], {}, non-zero numbers, etc.

## Number Conversion

11. **How can you convert a string to a number explicitly?**
    - Using `Number()`, `parseInt()`, `parseFloat()`, or unary `+` operator.

12. **Difference between `Number()`, `parseInt()`, and `parseFloat()`?**
    - `Number()`: Converts entire string; fails if any invalid characters
    - `parseInt()`: Parses integer from start until invalid character; handles hex/octal
    - `parseFloat()`: Parses floating-point number from start until invalid character

13. **What happens when you convert `"123abc"` using `Number()`?**
    - Returns `NaN` (fails on invalid character).

14. **What happens when you convert `"123abc"` using `parseInt()`?**
    - Returns `123` (stops at first non-digit).

15. **What happens when you convert `true` to number?**
    - Returns `1`.

16. **What happens when you convert `false` to number?**
    - Returns `0`.

17. **What happens when you convert `null` to number?**
    - Returns `0`.

18. **What happens when you convert `undefined` to number?**
    - Returns `NaN`.

19. **What is `NaN`?**
    - "Not-a-Number" - a special numeric value representing invalid number operations.

20. **How can you check if a value is `NaN` correctly?**
    - Use `Number.isNaN()` or `isNaN()` (with understanding of their differences).

## String Conversion

21. **How can you convert a number to string?**
    - Using `String()`, `.toString()`, or concatenation with empty string (`"" + num`).

22. **What happens when you add a number and a string?**
    - String concatenation: number converts to string, then concatenated.

23. **What happens when you subtract a string from a number?**
    - String converts to number (if possible), then subtraction occurs; otherwise `NaN`.

24. **What is the result of `"5" * 2` and why?**
    - `10` - `*` operator converts strings to numbers for arithmetic.

25. **What is the result of `"5" + 2` and why?**
    - `"52"` - `+` with string triggers concatenation, converting number to string.

26. **What happens when you convert `null` to string?**
    - Returns `"null"`.

27. **What happens when you convert `undefined` to string?**
    - Returns `"undefined"`.

## Boolean Conversion

28. **How does JavaScript convert values to boolean?**
    - Using `Boolean()` or double NOT `!!` operator; follows falsy/truthy rules.

29. **List all falsy values in JavaScript.**
    - `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

30. **What is the boolean value of empty string?**
    - `false` (falsy).

31. **What is the boolean value of empty array?**
    - `true` (truthy).

32. **What is the boolean value of empty object?**
    - `true` (truthy).

33. **Why is `"0"` truthy but `0` falsy?**
    - `"0"` is a non-empty string (truthy), `0` is numeric zero (falsy). Type matters.

34. **What is double NOT operator `!!` used for?**
    - To explicitly convert any value to its boolean equivalent.

## Comparison & Coercion Edge Cases

35. **What is the result of `[] == false` and why?**
    - `true` - [] converts to "" (empty string), then 0, false is 0 → 0 == 0 is true.

36. **What is the result of `"" == 0` and why?**
    - `true` - "" converts to 0 in numeric comparison.

37. **What is the result of `null == undefined`?**
    - `true` - they're considered equal with loose equality.

38. **What is the result of `null === undefined`?**
    - `false` - different types, strict equality fails.

39. **What is the result of `" \t\n" == 0` and why?**
    - `true` - whitespace strings convert to 0 when coerced to number.

40. **Why does `[] + []` return empty string?**
    - Arrays convert to empty strings, then concatenated: `"" + "" = ""`.

41. **Why does `{}` + `{}` behave unexpectedly in console?**
    - In console, first {} is interpreted as block, not object; varies by context.

## Debug Thinking

42. **Why does `true + true` return 2?**
    - true converts to 1, so 1 + 1 = 2.

43. **Why does `true + "true"` return `"truetrue"`?**
    - true converts to "true" (string), then concatenation.

44. **Why does `[] + 1` return `"1"`?**
    - [] converts to "", then "" + 1 = "1".

45. **Why does `[1,2] + [3,4]` return `"1,23,4"`?**
    - Arrays convert to "1,2" and "3,4", concatenated: "1,2" + "3,4" = "1,23,4".

46. **Why does `Number("")` return 0?**
    - Empty string is considered 0 in numeric conversion.

47. **Why does `Number(" ")` return 0?**
    - Whitespace is trimmed, leaving empty string → converts to 0.

## Coding Practice (Basic to Advanced)

48. **Write a function that converts any value to number safely.**

```javascript
function safeNumber(value) {
  const num = Number(value);
  return isNaN(num) ? 0 : num;
}
console.log(safeNumber("123")); // 123
console.log(safeNumber("abc")); // 0
```

49. **Write a function that checks if a value is truthy or falsy.**

```javascript
function checkTruthy(value) {
  return value ? "truthy" : "falsy";
}
console.log(checkTruthy(0)); // "falsy"
console.log(checkTruthy("hello")); // "truthy"
```

50. **Write a program that filters only numeric strings from an array.**

```javascript
const arr = ["123", "abc", "45", "xyz", "7.5"];
const numericStrings = arr.filter((str) => !isNaN(str) && str.trim() !== "");
console.log(numericStrings); // ["123", "45", "7.5"]
```

51. **Write a custom function that mimics `Number()` behavior.**

```javascript
function customNumber(value) {
  if (value === null) return 0;
  if (value === undefined || value === "") return NaN;
  if (typeof value === "boolean") return value ? 1 : 0;
  if (typeof value === "string") {
    value = value.trim();
    if (value === "") return 0;
    const num = parseFloat(value);
    return isNaN(num) ? NaN : num;
  }
  return Number(value);
}
```

52. **Write a function that strictly compares two values without using `===`.**

```javascript
function strictCompare(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a === "object" && a !== null && b !== null) {
    return Object.is(a, b);
  }
  return a === b;
}
```

53. **Write a program that demonstrates 5 confusing coercion examples and explains them.**

```javascript
console.log([] == ![]); // true - complex coercion chain
console.log(0 == "0"); // true - string to number
console.log(false == "0"); // true - boolean to number, string to number
console.log(null == undefined); // true - special case
console.log([1, 2] == "1,2"); // true - array to string
```

54. **Write a function that converts any input into boolean using manual logic.**

```javascript
function toBoolean(value) {
  if (value === false) return false;
  if (value === 0) return false;
  if (value === "") return false;
  if (value === null) return false;
  if (value === undefined) return false;
  if (Number.isNaN(value)) return false;
  return true;
}
```

55. **Write a program to parse user input string and safely convert to integer.**

```javascript
function safeParseInt(input) {
  const num = parseInt(input, 10);
  return isNaN(num) ? 0 : num;
}
console.log(safeParseInt("123")); // 123
console.log(safeParseInt("12.5")); // 12
console.log(safeParseInt("abc")); // 0
```

56. **Write a function that removes all falsy values from an array.**

```javascript
function removeFalsy(arr) {
  return arr.filter((item) => !!item);
}
console.log(removeFalsy([0, 1, "", "hello", null, undefined, false, 5]));
// [1, "hello", 5]
```

57. **Write a function that checks whether two values are loosely equal using your own logic.**

```javascript
function looseEqual(a, b) {
  if (a === b) return true;
  if (a == null && b == null) return true;
  return a == b; // using loose equality internally
}
```

58. **Create a mini test suite that logs expected vs actual output for coercion cases.**

```javascript
function testCoercion(expression, expected) {
  const result = eval(expression);
  console.log(
    `${expression}: Expected ${expected}, Got ${result} (${result === expected ? "PASS" : "FAIL"})`,
  );
}
testCoercion("'5' - 3", 2);
testCoercion("'5' + 3", "53");
testCoercion("true + true", 2);
```

59. **Write a function that identifies if a string contains only digits.**

```javascript
function isNumericString(str) {
  return /^\d+$/.test(str);
}
console.log(isNumericString("123")); // true
console.log(isNumericString("12a3")); // false
```

60. **Create a program that demonstrates difference between `parseInt()` and `Number()` using multiple inputs.**

```javascript
const inputs = ["123", "123abc", "12.5", " 12 ", "", "0xff", true, null];
inputs.forEach((input) => {
  console.log(`Input: ${input} (${typeof input})`);
  console.log(`  Number(): ${Number(input)}`);
  console.log(`  parseInt(): ${parseInt(input)}`);
  console.log(`  parseFloat(): ${parseFloat(input)}`);
  console.log("---");
});
```

---

# 05 - Operators

## Conceptual Understanding

1. **What is an operator in JavaScript?**
   - A symbol that performs an operation on operands (values/variables) to produce a result.

2. **What is the difference between unary, binary, and ternary operators?**
   - Unary: Operates on single operand (e.g., `!x`, `++x`)
   - Binary: Operates on two operands (e.g., `x + y`)
   - Ternary: Operates on three operands (`condition ? a : b`)

3. **What is operand?**
   - The value or expression that operators act upon.

4. **What is operator precedence?**
   - Rules defining which operators are evaluated first in expressions with multiple operators.

5. **What is operator associativity?**
   - Direction (left-to-right or right-to-left) in which operators of same precedence are evaluated.

6. **Why is understanding precedence important?**
   - To predict expression results correctly and avoid bugs; parentheses can override precedence.

7. **What is short-circuit evaluation?**
   - Logical operators stop evaluating once result is determined; used for conditional execution.

8. **What is the difference between expression and statement?**
   - Expression: Produces a value (can be assigned)
   - Statement: Performs an action (cannot be assigned)

9. **What is the difference between `==` and `===`?**
   - `==`: Loose equality with type coercion
   - `===`: Strict equality without type coercion

10. **What is the difference between `&&` and `||`?**
    - `&&`: Returns first falsy operand or last truthy
    - `||`: Returns first truthy operand or last falsy

## Arithmetic Operators

11. **List all arithmetic operators in JavaScript.**
    - `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulus), `**` (exponentiation), `++` (increment), `--` (decrement)

12. **What is the difference between `+` used for addition and concatenation?**
    - With numbers: addition; with strings: concatenation; mixed: converts to string and concatenates.

13. **What is the difference between `++i` and `i++`?**
    - `++i`: Prefix increment (increment then use)
    - `i++`: Postfix increment (use then increment)

14. **What is the result of `5 / 0`?**
    - `Infinity`.

15. **What is the result of `0 / 5`?**
    - `0`.

16. **What is the result of `5 % 2`?**
    - `1` (remainder).

17. **What is exponentiation operator?**
    - `**` - raises left operand to power of right operand (e.g., `2 ** 3` = 8).

18. **What happens when arithmetic operators are used with strings?**
    - `+` concatenates; other operators attempt numeric conversion, resulting in `NaN` if conversion fails.

19. **What happens when arithmetic operators are used with booleans?**
    - Booleans convert to numbers: true = 1, false = 0.

20. **What is `NaN` propagation in arithmetic operations?**
    - If any operand is `NaN` or conversion results in `NaN`, the result is `NaN`.

## Assignment Operators

21. **What is simple assignment operator?**
    - `=` - assigns right value to left variable.

22. **What are compound assignment operators?**
    - `+=`, `-=`, `*=`, `/=`, `%=`, `**=` - combine arithmetic with assignment.

23. **Difference between `x = x + 5` and `x += 5`?**
    - Same effect, but `x += 5` is shorter and evaluates x only once.

24. **What is logical assignment operator (`&&=`, `||=`, `??=`)?**
    - Combine logical operations with assignment; assign only if condition met.

25. **When should you use `??=` instead of `||=`?**
    - `??=` for null/undefined only; `||=` for all falsy values.

## Comparison Operators

26. **List comparison operators in JavaScript.**
    - `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

27. **What is the result of `"5" > 3` and why?**
    - `true` - string "5" converts to number 5 for comparison.

28. **How does JavaScript compare strings?**
    - Lexicographically (dictionary order) based on Unicode values, character by character.

29. **What is lexicographical comparison?**
    - Comparing strings based on character Unicode values, similar to dictionary ordering.

30. **What is the difference between `!=` and `!==`?**
    - `!=`: Loose inequality with type coercion
    - `!==`: Strict inequality without type coercion

31. **Why should strict comparison be preferred?**
    - Predictable results, avoids coercion bugs, clearer intent.

32. **What happens when you compare object with object?**
    - Compares references, not content; different objects always unequal.

## Logical Operators

33. **What does `&&` return?**
    - Returns first falsy operand, otherwise last operand (not necessarily boolean).

34. **What does `||` return?**
    - Returns first truthy operand, otherwise last operand (not necessarily boolean).

35. **What does `!` do?**
    - Logical NOT - converts operand to boolean and returns opposite.

36. **What is short-circuit behavior of `&&`?**
    - Stops evaluating at first falsy operand; remaining expressions not evaluated.

37. **What is short-circuit behavior of `||`?**
    - Stops evaluating at first truthy operand; remaining expressions not evaluated.

38. **What is the difference between `||` and `??`?**
    - `||`: Checks for any falsy value
    - `??`: Checks only for null or undefined

39. **When should nullish coalescing operator be used?**
    - When default should apply only for null/undefined, not for other falsy values (0, "", false).

40. **What is the output of `0 || 10`?**
    - `10` (0 is falsy, returns 10).

41. **What is the output of `0 ?? 10`?**
    - `0` (0 is not null/undefined, returns 0).

## Bitwise Operators (Basic Level Only)

42. **What are bitwise operators?**
    - Operators that perform operations on binary representations of numbers.

43. **What does `&` operator do?**
    - Bitwise AND - 1 only if both bits are 1.

44. **What does `|` operator do?**
    - Bitwise OR - 1 if at least one bit is 1.

45. **What does `^` operator do?**
    - Bitwise XOR - 1 if bits are different.

46. **What does `~` operator do?**
    - Bitwise NOT - inverts all bits.

47. **What does left shift (`<<`) do?**
    - Shifts bits left, filling with zeros; equivalent to multiplying by 2^shift.

48. **What does right shift (`>>`) do?**
    - Shifts bits right, preserving sign; equivalent to floor division by 2^shift.

## Ternary & Special Operators

49. **What is ternary operator?**
    - `condition ? exprIfTrue : exprIfFalse` - shorthand conditional.

50. **When should you use ternary operator?**
    - For simple conditional assignments; avoid for complex logic (reduces readability).

51. **What is `typeof` operator?**
    - Returns string indicating operand's type.

52. **What is `instanceof` operator?**
    - Tests if object is instance of specified constructor.

53. **What is optional chaining operator (`?.`)?**
    - Safely access nested properties without throwing error if intermediate is null/undefined.

54. **What is spread operator (`...`) used for? (Only basic idea, deep later.)**
    - Expands iterables (arrays, objects) into individual elements.

## Debug Thinking

55. **What is the result of `true && false || true`?**
    - `true` (AND has higher precedence: true && false = false, false || true = true).

56. **What is the result of `3 > 2 > 1` and why?**
    - `false` - Evaluates left to right: 3 > 2 = true, then true > 1 = 1 > 1 = false.

57. **What is the result of `"2" + 2 * 3` and why?**
    - `"26"` - Multiplication has higher precedence: 2 \* 3 = 6, then "2" + 6 = "26".

58. **What is the result of `[] == ![]` and why?**
    - `true` - Complex coercion: ![] = false, [] == false triggers conversion chain.

59. **What is the result of `null || undefined || 5`?**
    - `5` (first truthy value).

60. **What is the result of `null ?? undefined ?? 5`?**
    - `5` (first non-nullish value: null and undefined are both nullish).

## Coding Practice (Basic to Advanced)

61. **Write a program to swap two numbers using arithmetic operators.**

```javascript
let a = 5,
  b = 10;
a = a + b; // a = 15
b = a - b; // b = 5
a = a - b; // a = 10
console.log(a, b); // 10, 5
```

62. **Write a function that checks if a number is even using bitwise operator.**

```javascript
function isEven(num) {
  return (num & 1) === 0;
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false
```

63. **Write a program that demonstrates difference between prefix and postfix increment.**

```javascript
let x = 5,
  y = 5;
console.log(x++); // 5 (postfix: returns then increments)
console.log(++y); // 6 (prefix: increments then returns)
console.log(x, y); // 6, 6
```

64. **Write a function that returns maximum of two numbers without using `Math.max`.**

```javascript
function max(a, b) {
  return a > b ? a : b;
}
console.log(max(10, 20)); // 20
```

65. **Write a function that returns maximum of three numbers using ternary operator.**

```javascript
function maxOfThree(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}
console.log(maxOfThree(5, 12, 8)); // 12
```

66. **Write a function that safely access nested object property using optional chaining.**

```javascript
function safeGet(obj, path) {
  const parts = path.split(".");
  let result = obj;
  for (let part of parts) {
    result = result?.[part];
    if (result === undefined) break;
  }
  return result;
}
const obj = { a: { b: { c: 42 } } };
console.log(safeGet(obj, "a.b.c")); // 42
console.log(safeGet(obj, "x.y.z")); // undefined
```

67. **Write a function that uses logical operators to provide default values.**

```javascript
function greet(name) {
  name = name || "Guest";
  console.log(`Hello, ${name}!`);
}
greet("John"); // Hello, John!
greet(); // Hello, Guest!
```

68. **Write a mini calculator program using switch and operators.**

```javascript
function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Cannot divide by zero";
    case "%":
      return a % b;
    default:
      return "Invalid operator";
  }
}
console.log(calculator(10, 5, "+")); // 15
```

69. **Write a function that checks if a number is power of 2 using bitwise logic.**

```javascript
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(18)); // false
```

70. **Write a program that demonstrates operator precedence using multiple operators in one expression.**

```javascript
let result = 2 + (3 * 4 ** 2) / 2 - 5;
// 4 ** 2 = 16
// 3 * 16 = 48
// 48 / 2 = 24
// 2 + 24 = 26
// 26 - 5 = 21
console.log(result); // 21

// Using parentheses to change precedence
let withParen = ((2 + 3) * 4 ** 2) / 2 - 5;
// 2 + 3 = 5
// 4 ** 2 = 16
// 5 * 16 = 80
// 80 / 2 = 40
// 40 - 5 = 35
console.log(withParen); // 35
```

---

# 06 - Conditionals

## Conceptual Understanding

1. **What are conditional statements in JavaScript?**
   - Code structures that execute different blocks based on whether a condition evaluates to true or false.

2. **Why do we need conditionals in programming?**
   - To make decisions, control program flow, and handle different scenarios dynamically.

3. **What is the basic syntax of `if` statement?**
   - `if (condition) { // code to execute if true }`

4. **What is the difference between `if` and `if...else`?**
   - `if`: Executes code only when condition is true
   - `if...else`: Executes one block when true, another when false

5. **What is `else if` ladder?**
   - Multiple conditions checked sequentially: `if (cond1) {} else if (cond2) {} else {}`

6. **How does JavaScript evaluate conditions?**
   - Converts condition to boolean using truthy/falsy rules.

7. **What values are considered falsy in condition checks?**
   - `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

8. **Can we use non-boolean values inside `if` condition?**
   - Yes, they're coerced to boolean based on truthy/falsy rules.

9. **What is nested `if`?**
   - `if` statements inside other `if` or `else` blocks.

10. **When should nested conditionals be avoided?**
    - When they reduce readability; can use guard clauses or switch instead.

## if, else, else-if Deep Understanding

11. **What happens if multiple `else if` conditions are true?**
    - Only the first true condition's block executes; rest are skipped.

12. **How does JavaScript decide which block to execute?**
    - Evaluates conditions top-down; stops at first true condition.

13. **What is the difference between multiple `if` statements and `if...else if` ladder?**
    - Multiple `if`s: All conditions checked independently
    - `if...else if`: Stops after first true condition

14. **Can we write `if` without curly braces?**
    - Yes, for single statements, but not recommended (can cause bugs).

15. **Why is it recommended to always use curly braces?**
    - For clarity, to avoid bugs when adding statements later.

16. **What is early return pattern?**
    - Returning early from function when conditions met, avoiding nested else.

17. **How does indentation affect readability but not execution?**
    - Indentation is for humans; JavaScript ignores whitespace but proper indentation improves code clarity.

18. **What is guard clause?**
    - Early return that handles edge cases, making main logic clearer.

19. **What is condition chaining?**
    - Using logical operators (`&&`, `||`) to combine multiple conditions.

20. **How can complex conditions reduce code clarity?**
    - Long conditions become hard to read; extract to named variables.

## Switch Statement

21. **What is `switch` statement?**
    - Multi-way branch that compares expression against multiple case values.

22. **When should we prefer `switch` over `if...else`?**
    - When comparing single variable against many discrete values.

23. **What is the role of `break` in switch?**
    - Exits switch block; prevents fall-through to next case.

24. **What happens if we forget `break`?**
    - Fall-through: execution continues to next case regardless of match.

25. **What is fall-through behavior?**
    - When cases execute sequentially without break; can be intentional or bug.

26. **Can switch compare using strict equality?**
    - Yes, switch uses strict equality (`===`) for comparison.

27. **Can we use expressions inside switch case?**
    - Yes, case values can be expressions evaluated at runtime.

28. **What is default case?**
    - Executes when no case matches; optional but recommended.

29. **Can multiple cases share same block?**
    - Yes, by omitting break between them (intentional fall-through).

30. **What are limitations of switch?**
    - Only strict equality; no complex conditions; fall-through can cause bugs.

## Ternary Operator in Conditionals

31. **What is ternary operator syntax?**
    - `condition ? valueIfTrue : valueIfFalse`

32. **When should ternary be avoided?**
    - For complex logic or nested ternaries (reduce readability).

33. **Can ternary operators be nested?**
    - Yes, but readability suffers; avoid deep nesting.

34. **What are readability concerns with nested ternary?**
    - Difficult to understand and debug; prefer if-else.

35. **Difference between ternary and if-else in behavior?**
    - Same logical behavior; ternary returns value, if-else executes statements.

## Logical Operators with Conditionals

36. **How can `&&` be used instead of `if`?**
    - `condition && expression()` - executes expression if condition truthy.

37. **How can `||` provide default values?**
    - `value = input || defaultValue` - assigns defaultValue if input falsy.

38. **What is nullish coalescing operator in conditionals?**
    - `??` provides default only for null/undefined, not other falsy values.

39. **What is short-circuiting in conditions?**
    - Logical operators stop evaluating once result determined.

40. **When should logical operators not replace conditionals?**
    - For complex logic, multiple statements, or when clarity matters.

## Debug Thinking

41. **What is the output of: `if (0) { console.log("A") } else { console.log("B") }`**
    - `"B"` (0 is falsy).

42. **What is the output of: `if ("") console.log("Yes");`**
    - Nothing (empty string falsy, statement not executed).

43. **What happens if condition is `NaN`?**
    - `NaN` is falsy, so else block executes (if present).

44. **What is the result of: `if ([]) console.log("True");`**
    - `"True"` (empty array is truthy).

45. **What is the result of: `if ({}) console.log("True");`**
    - `"True"` (empty object is truthy).

46. **Why does `if (2 > 1 > 0)` not behave as expected?**
    - Evaluates as (2 > 1) = true, then true > 0 = 1 > 0 = true, so works here, but demonstrates precedence issue.

47. **What is the difference between `== null` and `=== null` in conditions?**
    - `== null` checks for both null and undefined; `=== null` checks only null.

48. **What happens if you write `if (a = 5)`?**
    - Assignment, not comparison; always truthy (5), likely a bug.

49. **Why is accidental assignment inside condition dangerous?**
    - Creates bug, changes variable, condition always truthy.

50. **How can you debug complex conditional logic?**
    - Log values, extract conditions to variables, use debugger.

## Coding Practice (Basic to Advanced)

51. **Write a program to check if a number is positive, negative, or zero.**

```javascript
function checkNumber(n) {
  if (n > 0) return "positive";
  if (n < 0) return "negative";
  return "zero";
}
console.log(checkNumber(5)); // positive
console.log(checkNumber(-3)); // negative
console.log(checkNumber(0)); // zero
```

52. **Write a program to check if a number is even or odd.**

```javascript
function evenOdd(n) {
  return n % 2 === 0 ? "even" : "odd";
}
console.log(evenOdd(4)); // even
console.log(evenOdd(7)); // odd
```

53. **Write a function to check if a year is leap year.**

```javascript
function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
```

54. **Write a function to find largest among three numbers.**

```javascript
function largestOfThree(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}
console.log(largestOfThree(5, 12, 9)); // 12
```

55. **Write a grading system program using `if...else`.**

```javascript
function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}
console.log(getGrade(85)); // B
console.log(getGrade(92)); // A
```

56. **Write a menu-driven program using `switch`.**

```javascript
function menu(choice) {
  switch (choice) {
    case 1:
      return "Start game";
    case 2:
      return "Load game";
    case 3:
      return "Settings";
    case 4:
      return "Exit";
    default:
      return "Invalid choice";
  }
}
console.log(menu(2)); // Load game
```

57. **Write a calculator using switch.**

```javascript
function calculator(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Error: Division by zero";
    default:
      return "Invalid operator";
  }
}
console.log(calculator(10, 5, "+")); // 15
```

58. **Write a function that checks if a character is vowel or consonant.**

```javascript
function checkChar(char) {
  char = char.toLowerCase();
  if ("aeiou".includes(char)) return "vowel";
  if (char >= "a" && char <= "z") return "consonant";
  return "not a letter";
}
console.log(checkChar("a")); // vowel
console.log(checkChar("b")); // consonant
console.log(checkChar("1")); // not a letter
```

59. **Write a function that checks if a number is divisible by both 3 and 5.**

```javascript
function divisibleBy3And5(n) {
  return n % 3 === 0 && n % 5 === 0;
}
console.log(divisibleBy3And5(15)); // true
console.log(divisibleBy3And5(10)); // false
```

60. **Write a program that prints "FizzBuzz" (classic conditional problem).**

```javascript
function fizzBuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}
// Print 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
```

61. **Write a function that validates a password using multiple conditions.**

```javascript
function validatePassword(password) {
  if (password.length < 8) return "Too short";
  if (!/[A-Z]/.test(password)) return "Need uppercase";
  if (!/[a-z]/.test(password)) return "Need lowercase";
  if (!/[0-9]/.test(password)) return "Need number";
  if (!/[!@#$%^&*]/.test(password)) return "Need special char";
  return "Valid password";
}
console.log(validatePassword("Pass123!")); // Valid password
console.log(validatePassword("pass123")); // Need uppercase
```

62. **Write a function that returns absolute value without using `Math.abs`.**

```javascript
function absValue(n) {
  return n < 0 ? -n : n;
}
console.log(absValue(-5)); // 5
console.log(absValue(3)); // 3
```

63. **Write a function that determines triangle type (equilateral, isosceles, scalene).**

```javascript
function triangleType(a, b, c) {
  if (a === b && b === c) return "equilateral";
  if (a === b || b === c || a === c) return "isosceles";
  return "scalene";
}
console.log(triangleType(5, 5, 5)); // equilateral
console.log(triangleType(5, 5, 3)); // isosceles
console.log(triangleType(5, 4, 3)); // scalene
```

64. **Write a function that checks if a number lies within a given range.**

```javascript
function inRange(num, min, max) {
  return num >= min && num <= max;
}
console.log(inRange(5, 1, 10)); // true
console.log(inRange(15, 1, 10)); // false
```

65. **Refactor a deeply nested if-else into guard clauses.**

```javascript
// Before - nested
function processOrder(order) {
  if (order) {
    if (order.items && order.items.length > 0) {
      if (order.paid) {
        if (order.shipped) {
          return "Order complete";
        } else {
          return "Ready to ship";
        }
      } else {
        return "Payment pending";
      }
    } else {
      return "No items";
    }
  } else {
    return "Invalid order";
  }
}

// After - guard clauses
function processOrder(order) {
  if (!order) return "Invalid order";
  if (!order.items || order.items.length === 0) return "No items";
  if (!order.paid) return "Payment pending";
  if (!order.shipped) return "Ready to ship";
  return "Order complete";
}
```

---

# 07 - Loops

## Conceptual Understanding

1. **What is a loop in JavaScript?**
   - A control structure that repeatedly executes a block of code until a specified condition becomes false.

2. **Why do we need loops?**
   - To automate repetitive tasks, process collections of data, and reduce code duplication.

3. **What problem do loops solve in programming?**
   - Eliminate manual repetition, handle dynamic amounts of data, and implement iterative algorithms.

4. **What are the different types of loops in JavaScript?**
   - `for`, `while`, `do...while`, `for...in`, `for...of`

5. **What is iteration?**
   - Each execution of the loop body; a single pass through the loop.

6. **What is the difference between loop and recursion? (Recursion will be covered later.)**
   - Loop: Iterative repetition using control structures
   - Recursion: Function calling itself to repeat

7. **What is loop control variable?**
   - Variable used to control loop execution (e.g., counter in for loop).

8. **What is loop termination condition?**
   - Condition that determines when loop stops executing.

9. **What is infinite loop?**
   - Loop that never terminates because condition never becomes false.

10. **How can infinite loops occur?**
    - Missing increment/decrement, condition always true, or logic error.

## for Loop Deep Understanding

11. **What is the syntax of `for` loop?**
    - `for (initialization; condition; increment) { // body }`

12. **What are the three parts of a `for` loop?**
    - Initialization: Sets up counter variable
    - Condition: Checked before each iteration
    - Increment: Updates counter after each iteration

13. **In what order are initialization, condition, and increment executed?**
    - 1. Initialization (once)
    - 2. Condition check
    - 3. Body execution (if condition true)
    - 4. Increment
    - Repeat steps 2-4

14. **Can we omit any part of the `for` loop?**
    - Yes, all parts are optional but semicolons required.

15. **What happens if condition is omitted?**
    - Condition defaults to true, creating infinite loop unless broken.

16. **When should `for` loop be preferred?**
    - When number of iterations is known, especially for counting/indexing.

17. **What is nested `for` loop?**
    - `for` loop inside another `for` loop, used for multi-dimensional data.

18. **What is time complexity of nested loops?**
    - Usually O(n²) for 2-level nesting, can be performance concern.

19. **How does variable scope behave inside `for` loop with `var`?**
    - `var` leaks outside loop; variable accessible after loop.

20. **How does variable scope behave inside `for` loop with `let`?**
    - `let` creates new binding per iteration; variable scoped to loop block.

## while Loop

21. **What is the syntax of `while` loop?**
    - `while (condition) { // body }`

22. **When should `while` loop be preferred over `for` loop?**
    - When number of iterations unknown, condition depends on dynamic factors.

23. **What happens if condition is false initially?**
    - Loop body never executes (0 iterations).

24. **How can infinite loop occur in `while`?**
    - Forgetting to update condition variable, or condition always true.

25. **What is difference between `for` and `while` logically?**
    - `for`: Counter-controlled, initialization and increment in one line
    - `while`: Condition-controlled, more flexible for unknown iterations

## do...while Loop

26. **What is `do...while` loop?**
    - `do { // body } while (condition);` - executes body then checks condition.

27. **How is it different from `while`?**
    - `do...while` guarantees at least one execution; `while` may execute zero times.

28. **Why does `do...while` execute at least once?**
    - Condition checked after body execution.

29. **When should we use `do...while`?**
    - When loop must run at least once regardless of condition (e.g., menu display).

30. **What is a real-world scenario for `do...while`?**
    - Displaying menu and getting user input until valid option chosen.

## Loop Control Statements

31. **What is `break`?**
    - Exits loop immediately, regardless of condition.

32. **What is `continue`?**
    - Skips rest of current iteration, proceeds to next.

33. **What is the difference between `break` and `continue`?**
    - `break`: Terminates loop completely
    - `continue`: Skips to next iteration

34. **Can we use `break` outside loop?**
    - Only in loops or switch; otherwise SyntaxError.

35. **What is labeled statement? (Basic idea only.)**
    - Identifier that allows breaking/continuing to specific outer loop.

36. **How does `continue` behave in nested loops?**
    - Affects only innermost loop unless label used.

37. **What happens if `break` is used inside nested loops?**
    - Breaks only innermost loop unless labeled.

## for...of and for...in (Basic Level Only)

38. **What is `for...of` loop?**
    - Iterates over iterable values (arrays, strings, maps, sets).

39. **What is `for...in` loop?**
    - Iterates over enumerable property keys of objects (including prototype chain).

40. **What is the difference between `for...of` and `for...in`?**
    - `for...of`: Values of iterable
    - `for...in`: Keys/properties of object

41. **When should we avoid `for...in`?**
    - For arrays (iterates indices as strings, includes prototype props).

42. **Can `for...of` be used on objects directly?**
    - No, objects not iterable by default; use `Object.keys()`/`Object.entries()`.

## Debug Thinking

43. **What will happen if increment step is missing?**
    - Loop may become infinite if condition never becomes false.

44. **What is the output of: `for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }`**
    - `0, 1, 2` (let creates new binding per iteration).

45. **What is the output of: `for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }`**
    - `3, 3, 3` (var shares same i across all callbacks).

46. **Why does changing `let` to `var` change behavior in loops?**
    - `let` creates new binding per iteration; `var` shares single binding.

47. **What happens if loop condition never becomes false?**
    - Infinite loop, crashes program or freezes browser.

48. **What is the result of modifying array length inside loop?**
    - Affects number of iterations; may cause unexpected behavior.

49. **What happens when you use `break` inside `switch` inside loop?**
    - Breaks only the switch, not the loop.

50. **What is off-by-one error in loops?**
    - Loop iterates one too many or one too few times due to incorrect condition.

## Coding Practice (Basic to Advanced)

51. **Print numbers from 1 to 10 using `for`.**

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

52. **Print numbers from 10 to 1 using `while`.**

```javascript
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}
```

53. **Print even numbers between 1 and 50.**

```javascript
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}
```

54. **Print multiplication table of a number.**

```javascript
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} × ${i} = ${n * i}`);
  }
}
printTable(5);
```

55. **Find sum of first N natural numbers.**

```javascript
function sumN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumN(10)); // 55
```

56. **Find factorial of a number.**

```javascript
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // 120
```

57. **Reverse a number using loop.**

```javascript
function reverseNumber(n) {
  let reversed = 0;
  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return reversed;
}
console.log(reverseNumber(12345)); // 54321
```

58. **Count digits in a number.**

```javascript
function countDigits(n) {
  if (n === 0) return 1;
  let count = 0;
  while (n !== 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(countDigits(12345)); // 5
```

59. **Check if a number is palindrome.**

```javascript
function isPalindromeNumber(n) {
  const original = n;
  let reversed = 0;
  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return original === reversed;
}
console.log(isPalindromeNumber(121)); // true
console.log(isPalindromeNumber(123)); // false
```

60. **Print Fibonacci series up to N terms.**

```javascript
function fibonacci(n) {
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}
fibonacci(10);
```

61. **Print all prime numbers up to N.**

```javascript
function printPrimes(n) {
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(i);
  }
}
printPrimes(20); // 2,3,5,7,11,13,17,19
```

62. **Find greatest common divisor (GCD) using loop.**

```javascript
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(gcd(48, 18)); // 6
```

63. **Count vowels in a string using loop.**

```javascript
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("Hello World")); // 3
```

64. **Reverse a string manually (without built-in methods).**

```javascript
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello")); // "olleh"
```

65. **Find largest element in an array.**

```javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(findMax([3, 7, 2, 9, 5])); // 9
```

66. **Remove duplicates from an array using loop logic only.**

```javascript
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        found = true;
        break;
      }
    }
    if (!found) unique.push(arr[i]);
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1,2,3,4,5]
```

67. **Create pattern printing (right triangle star pattern).**

```javascript
function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
printTriangle(5);
// *
// * *
// * * *
// * * * *
// * * * * *
```

68. **Create pyramid pattern.**

```javascript
function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
  }
}
printPyramid(5);
```

69. **Flatten a 2D array using nested loops.**

```javascript
function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);
    }
  }
  return result;
}
console.log(
  flattenArray([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
); // [1,2,3,4,5,6]
```

70. **Simulate simple ATM menu using `do...while`.**

```javascript
function atmSimulator() {
  let balance = 1000;
  let choice;

  do {
    console.log("\nATM Menu:");
    console.log("1. Check Balance");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Exit");

    choice = parseInt(prompt("Enter choice:"));

    switch (choice) {
      case 1:
        console.log(`Balance: $${balance}`);
        break;
      case 2:
        let deposit = parseFloat(prompt("Enter amount:"));
        balance += deposit;
        console.log(`Deposited $${deposit}`);
        break;
      case 3:
        let withdraw = parseFloat(prompt("Enter amount:"));
        if (withdraw <= balance) {
          balance -= withdraw;
          console.log(`Withdrawn $${withdraw}`);
        } else {
          console.log("Insufficient funds");
        }
        break;
      case 4:
        console.log("Thank you for using ATM");
        break;
      default:
        console.log("Invalid choice");
    }
  } while (choice !== 4);
}
// Note: prompt not available in Node.js, works in browser
```

---

# 08 - Functions

## Conceptual Understanding

1. **What is a function in JavaScript?**
   - A reusable block of code designed to perform a specific task, defined once and called multiple times.

2. **Why do we need functions?**
   - To avoid code duplication, organize code, improve maintainability, and enable reusability.

3. **What problem do functions solve in large applications?**
   - Modularity: Break complex problems into smaller manageable pieces; DRY (Don't Repeat Yourself) principle.

4. **What is function declaration?**
   - Defining a function using `function` keyword: `function name() { }`

5. **What is function expression?**
   - Assigning a function to a variable: `const name = function() { }`

6. **What is the difference between function declaration and function expression?**
   - Declaration: Hoisted, can be called before definition
   - Expression: Not hoisted, called only after definition

7. **What is a parameter?**
   - Variable listed in function definition that receives input values.

8. **What is an argument?**
   - Actual value passed to function when called.

9. **What is the difference between parameter and argument?**
   - Parameter: Placeholder in function definition
   - Argument: Actual value passed during function call

10. **What is return value of a function?**
    - Value that function outputs using `return` statement; can be used in expressions.

## Function Syntax & Behavior

11. **What happens if a function does not return anything?**
    - It returns `undefined` implicitly.

12. **What is default return value of a function?**
    - `undefined`.

13. **Can a function return multiple values?**
    - Not directly, but can return array or object containing multiple values.

14. **What happens if you write code after `return`?**
    - Code after return is unreachable and never executes.

15. **What is function invocation?**
    - Calling/executing a function using parentheses: `functionName()`

16. **What is difference between calling and referencing a function?**
    - Calling: `func()` - executes function
    - Referencing: `func` - function object itself (without execution)

17. **What is function hoisting?**
    - Function declarations are moved to top of scope during compilation, allowing calls before definition.

18. **Are function expressions hoisted?**
    - No, only the variable declaration is hoisted (with `var`), not the assignment.

19. **What is anonymous function?**
    - Function without a name, often used in function expressions or callbacks.

20. **What is named function expression?**
    - Function expression with a name, useful for recursion and debugging.

## Parameters & Arguments Deep Understanding

21. **What happens if fewer arguments are passed than parameters?**
    - Missing parameters get value `undefined`.

22. **What happens if more arguments are passed than parameters?**
    - Extra arguments accessible via `arguments` object or rest parameters.

23. **What is default parameter?**
    - Parameter with default value used when argument omitted or undefined.

24. **How do you assign default values to parameters?**
    - `function func(param = defaultValue) { }`

25. **What is rest parameter? (Basic idea only, deep later.)**
    - `...args` collects remaining arguments into array.

26. **What is arguments object?**
    - Array-like object containing all passed arguments, available in non-arrow functions.

27. **Is arguments object available in arrow functions?**
    - No, arrow functions don't have their own `arguments` object.

28. **What is pass-by-value in functions?**
    - Primitives passed as copies; changes inside function don't affect original.

29. **What happens when object is passed to function?**
    - Reference passed; function can modify object properties.

30. **How can function modify external variables?**
    - By returning value and assigning, or modifying object/array references.

## Function Scope (Basic Only)

31. **What is local scope?**
    - Variables declared inside function accessible only within that function.

32. **What is global scope?**
    - Variables declared outside any function, accessible everywhere.

33. **Can a function access global variables?**
    - Yes, functions can read and modify global variables.

34. **Can outside code access local variables?**
    - No, local variables are private to function.

35. **What is variable shadowing inside functions?**
    - Local variable with same name as global "shadows" global inside function.

## Debug Thinking

36. **What is the output of:**

```javascript
function test() {
  console.log(a);
  var a = 5;
}
test();
```

    - `undefined` (var hoisting: declaration hoisted, initialization not).

37. **What happens if you call a function before it is defined?**
    - For function declarations: works (hoisted)
    - For function expressions: error (not hoisted)

38. **What is the difference between: `console.log(func)` and `console.log(func())`?**
    - `func`: Logs function definition
    - `func()`: Logs function's return value

39. **What happens if function name is same as variable name?**
    - Function declarations take precedence over variable declarations.

40. **What is the output of:**

```javascript
function sum(a, b) {
  return;
  a + b;
}
console.log(sum(2, 3));
```

    - `undefined` (return with no value, code after unreachable).

## Coding Practice (Basic to Advanced)

41. **Write a function that adds two numbers.**

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8
```

42. **Write a function that subtracts two numbers.**

```javascript
function subtract(a, b) {
  return a - b;
}
console.log(subtract(10, 4)); // 6
```

43. **Write a function that multiplies two numbers.**

```javascript
function multiply(a, b) {
  return a * b;
}
console.log(multiply(6, 7)); // 42
```

44. **Write a function that divides two numbers.**

```javascript
function divide(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}
console.log(divide(15, 3)); // 5
```

45. **Write a function that checks if a number is prime.**

```javascript
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
console.log(isPrime(17)); // true
console.log(isPrime(15)); // false
```

46. **Write a function that returns factorial of a number.**

```javascript
function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // 120
```

47. **Write a function that reverses a string.**

```javascript
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello")); // "olleh"
```

48. **Write a function that checks if a string is palindrome.**

```javascript
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
```

49. **Write a function that counts vowels in a string.**

```javascript
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("Hello World")); // 3
```

50. **Write a function that finds maximum of three numbers.**

```javascript
function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
  // Or manually:
  // let max = a;
  // if (b > max) max = b;
  // if (c > max) max = c;
  // return max;
}
console.log(maxOfThree(5, 12, 9)); // 12
```

51. **Write a function that removes duplicates from array.**

```javascript
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1,2,3,4,5]
```

52. **Write a function that returns sum of all numbers in array.**

```javascript
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
```

53. **Write a function that flattens a 2D array (without using built-in flat).**

```javascript
function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);
    }
  }
  return result;
}
console.log(
  flattenArray([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
); // [1,2,3,4,5,6]
```

54. **Write a function that generates Fibonacci sequence up to N.**

```javascript
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
console.log(fibonacci(10)); // [0,1,1,2,3,5,8,13,21,34]
```

55. **Write a function that converts Celsius to Fahrenheit.**

```javascript
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(100)); // 212
```

56. **Write a function that validates email (basic logic).**

```javascript
function validateEmail(email) {
  // Basic validation: contains @ and . after @
  if (!email || !email.includes("@")) return false;

  const [local, domain] = email.split("@");
  if (!local || !domain) return false;
  if (!domain.includes(".")) return false;
  if (domain.startsWith(".") || domain.endsWith(".")) return false;

  return true;
}
console.log(validateEmail("user@example.com")); // true
console.log(validateEmail("invalid-email")); // false
```

57. **Write a function that returns number of words in a sentence.**

```javascript
function countWords(sentence) {
  if (!sentence.trim()) return 0;
  return sentence.trim().split(/\s+/).length;
}
console.log(countWords("Hello world, how are you?")); // 5
```

58. **Write a function that capitalizes first letter of each word.**

```javascript
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"
```

59. **Write a function that checks if two strings are anagrams.**

```javascript
function areAnagrams(str1, str2) {
  const clean = (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .split("")
      .sort()
      .join("");
  return clean(str1) === clean(str2);
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
```

60. **Write a higher-order function that accepts a function and executes it.**

```javascript
function executeFunction(fn, ...args) {
  return fn(...args);
}
console.log(executeFunction((a, b) => a + b, 5, 3)); // 8
```

61. **Write a function that executes callback after N seconds (basic setTimeout usage).**

```javascript
function delay(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}
delay(() => console.log("Executed after 2 seconds"), 2);
```

62. **Write a function that memoizes result of another function (basic idea only).**

```javascript
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] === undefined) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}
const memoizedAdd = memoize((a, b) => {
  console.log("Calculating...");
  return a + b;
});
console.log(memoizedAdd(2, 3)); // Calculating... 5
console.log(memoizedAdd(2, 3)); // 5 (cached)
```

63. **Write a recursive function to calculate factorial. (Recursion will be studied deeper later.)**

```javascript
function factorialRecursive(n) {
  if (n < 0) return undefined;
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}
console.log(factorialRecursive(5)); // 120
```

64. **Write a function that counts frequency of elements in array.**

```javascript
function countFrequency(arr) {
  const freq = {};
  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
  }
  return freq;
}
console.log(countFrequency([1, 2, 2, 3, 3, 3, 4]));
// {1:1, 2:2, 3:3, 4:1}
```

65. **Write a function that finds second largest number in array.**

```javascript
function secondLargest(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num < largest) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}
console.log(secondLargest([3, 7, 1, 9, 5, 9])); // 7
```

66. **Write a function that rotates array by K positions.**

```javascript
function rotateArray(arr, k) {
  k = k % arr.length;
  if (k === 0) return arr;

  const rotated = [];
  for (let i = 0; i < arr.length; i++) {
    rotated[(i + k) % arr.length] = arr[i];
  }
  return rotated;
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4,5,1,2,3]
```

67. **Write a function that checks if array is sorted.**

```javascript
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4, 5])); // false
```

68. **Write a function that returns unique characters from string.**

```javascript
function uniqueChars(str) {
  let unique = "";
  for (let char of str) {
    if (!unique.includes(char)) {
      unique += char;
    }
  }
  return unique;
}
console.log(uniqueChars("hello")); // "helo"
```

69. **Write a function that finds longest word in sentence.**

```javascript
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // "jumps"
```

70. **Write a function that implements simple calculator using functions.**

```javascript
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : "Cannot divide by zero"),
  power: (a, b) => a ** b,
  modulo: (a, b) => a % b,
};

function calculate(a, b, operation) {
  if (calculator[operation]) {
    return calculator[operation](a, b);
  }
  return "Invalid operation";
}
console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 5, "divide")); // 2
```

---

# 09 - Arrow Functions

## Conceptual Understanding

1. **What is an arrow function?**
   - A shorter syntax for writing function expressions using `=>`, introduced in ES6.

2. **Why were arrow functions introduced in ES6?**
   - For concise syntax and lexical `this` binding, solving common `this` issues in callbacks.

3. **What is the basic syntax of an arrow function?**
   - `(params) => { // body }` or `param => expression` for single parameter with implicit return.

4. **What is the difference between normal function and arrow function?**
   - Syntax, `this` binding, hoisting, `arguments` object, and constructor usage.

5. **Can arrow functions have a name?**
   - Yes, if assigned to variable, but they're anonymous by definition.

6. **Are arrow functions hoisted?**
   - No, they behave like function expressions (only variable declaration hoisted, not assignment).

7. **Can arrow functions be used as constructors?**
   - No, they cannot be used with `new` keyword.

8. **Do arrow functions have their own `this`?**
   - No, they inherit `this` from enclosing scope (lexical `this`).

9. **What does lexical `this` mean?**
   - Arrow functions use `this` from the surrounding code where they're defined, not where they're called.

10. **When should arrow functions be avoided?**
    - As object methods (need own `this`), as constructors, when dynamic `this` needed, or for readability with complex logic.

## Syntax Variations

11. **How do you write arrow function with one parameter?**
    - `param => expression` (parentheses optional).

12. **How do you write arrow function with multiple parameters?**
    - `(param1, param2) => expression`

13. **How do you write arrow function with no parameters?**
    - `() => expression`

14. **When can parentheses be omitted?**
    - With exactly one parameter (not zero, not rest, not default).

15. **When can curly braces be omitted?**
    - For single expression (implicit return), no statements.

16. **What is implicit return in arrow functions?**
    - When body is single expression without `{}`, expression automatically returned.

17. **What happens if you use curly braces without `return`?**
    - Function returns `undefined` (just like normal function with no return).

18. **How to return an object from arrow function?**
    - Wrap object in parentheses: `() => ({ key: value })`

19. **What is concise body vs block body?**
    - Concise: Single expression, implicit return
    - Block: `{}` with statements, explicit return needed

20. **What is single-expression arrow function?**
    - Arrow function with implicit return, no `{}` or `return` keyword.

## this Behavior (Core Difference)

21. **How does `this` behave in normal functions?**
    - Dynamic: depends on how function is called (call site).

22. **How does `this` behave in arrow functions?**
    - Lexical: inherits `this` from enclosing scope at definition time.

23. **What is lexical scope of `this`?**
    - `this` value determined by where function is written, not called.

24. **Why arrow functions are useful in callbacks?**
    - They preserve outer `this`, avoiding need for `that = this` or `.bind()`.

25. **What happens if arrow function is used as object method?**
    - `this` refers to outer scope (often window/global), not the object.

26. **What is the difference between:**

```javascript
const obj = {
  value: 10,
  normal: function () {
    return this.value;
  },
  arrow: () => this.value,
};
```

    - `obj.normal()` returns 10; `obj.arrow()` returns undefined (window.value).

27. **Why arrow functions are not suitable for event handlers in some cases?**
    - They can't access `this` as the DOM element; event handler needs dynamic `this`.

28. **Do arrow functions have `arguments` object?**
    - No, use rest parameters `...args` instead.

29. **How can we access arguments in arrow functions?**
    - Using rest parameters: `(...args) => { }`

30. **Can arrow functions be used inside class methods safely?**
    - Yes, they preserve class `this`, useful for callbacks.

## Debug Thinking

31. **What is the output of:**

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3));
```

    - `5`

32. **What is the output of:**

```javascript
const sum = (a, b) => {
  a + b;
};
console.log(sum(2, 3));
```

    - `undefined` (curly braces without return)

33. **What is the difference between: `(a) => a * 2` and `(a) => { return a * 2 }`?**
    - Same result; first is implicit return, second explicit.

34. **Why does this not work as expected?**

```javascript
const obj = {
  value: 5,
  getValue: () => this.value,
};
console.log(obj.getValue());
```

    - Arrow function inherits outer `this` (global/window), not obj.

35. **What happens if arrow function is used with `new` keyword?**
    - TypeError: arrow functions are not constructors.

36. **What is the output of:**

```javascript
function test() {
  const arrow = () => console.log(this);
  arrow();
}
test();
```

    - In non-strict mode: global object; in strict mode: undefined.

37. **How does arrow function behave inside `setTimeout`?**
    - Preserves `this` from surrounding scope, unlike normal functions.

38. **What is the difference between:**

```javascript
setTimeout(function () {
  console.log(this);
}, 0);
setTimeout(() => {
  console.log(this);
}, 0);
```

    - First: `this` is window (global) or undefined in strict
    - Second: `this` inherits from outer scope

## Coding Practice (Basic to Advanced)

39. **Convert a normal function to arrow function.**

```javascript
// Normal
function add(a, b) {
  return a + b;
}
// Arrow
const add = (a, b) => a + b;
```

40. **Write an arrow function to add two numbers.**

```javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

41. **Write an arrow function to check if a number is even.**

```javascript
const isEven = (n) => n % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(5)); // false
```

42. **Write an arrow function that returns square of a number.**

```javascript
const square = (n) => n * n;
console.log(square(5)); // 25
```

43. **Write an arrow function that returns cube of a number.**

```javascript
const cube = (n) => n ** 3;
console.log(cube(3)); // 27
```

44. **Write an arrow function to reverse a string.**

```javascript
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello")); // "olleh"
```

45. **Write an arrow function to find maximum in array.**

```javascript
const maxInArray = (arr) => Math.max(...arr);
console.log(maxInArray([3, 7, 2, 9, 5])); // 9
```

46. **Write an arrow function to filter even numbers from array.**

```javascript
const filterEvens = (arr) => arr.filter((n) => n % 2 === 0);
console.log(filterEvens([1, 2, 3, 4, 5, 6])); // [2,4,6]
```

47. **Write an arrow function to calculate sum of array elements.**

```javascript
const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumArray([1, 2, 3, 4, 5])); // 15
```

48. **Write an arrow function that returns factorial (non-recursive).**

```javascript
const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
};
console.log(factorial(5)); // 120
```

49. **Write an arrow function that returns Fibonacci sequence.**

```javascript
const fibonacci = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
};
console.log(fibonacci(10));
```

50. **Write an arrow function to capitalize first letter of string.**

```javascript
const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(capitalize("hello")); // "Hello"
```

51. **Write an arrow function that checks palindrome.**

```javascript
const isPalindrome = (str) => {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
};
console.log(isPalindrome("racecar")); // true
```

52. **Write an arrow function that finds longest word in sentence.**

```javascript
const longestWord = (sentence) =>
  sentence
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      "",
    );
console.log(longestWord("The quick brown fox jumps")); // "jumps"
```

53. **Write an arrow function that removes duplicates from array.**

```javascript
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1,2,3,4,5]
```

54. **Write an arrow function that returns unique characters from string.**

```javascript
const uniqueChars = (str) => [...new Set(str)].join("");
console.log(uniqueChars("hello")); // "helo"
```

55. **Write an arrow function that uses default parameters.**

```javascript
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet("John")); // Hello, John!
console.log(greet()); // Hello, Guest!
```

56. **Write an arrow function using rest parameter (basic usage).**

```javascript
const sumAll = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumAll(1, 2, 3, 4, 5)); // 15
```

57. **Write a higher-order arrow function that takes function as argument.**

```javascript
const applyOperation = (fn, a, b) => fn(a, b);
console.log(applyOperation((x, y) => x * y, 5, 3)); // 15
```

58. **Write an arrow function that returns another arrow function.**

```javascript
const multiplier = (factor) => (number) => number * factor;
const double = multiplier(2);
console.log(double(5)); // 10
```

59. **Rewrite a callback function using arrow syntax.**

```javascript
// Before
setTimeout(function () {
  console.log("Hello");
}, 1000);

// After
setTimeout(() => console.log("Hello"), 1000);
```

60. **Create a mini calculator using arrow functions only.**

```javascript
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : "Error"),
  power: (a, b) => a ** b,
};

const calculate = (a, b, operation) =>
  calculator[operation] ? calculator[operation](a, b) : "Invalid op";

console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 5, "divide")); // 2
```

---

# 10 - Function Scope

## Conceptual Understanding

1. **What is scope in JavaScript?**
   - The region of code where a variable is accessible and can be referenced.

2. **Why is scope important in programming?**
   - Prevents naming conflicts, controls variable lifetime, enhances security and maintainability.

3. **What are the different types of scope in JavaScript?**
   - Global scope, function scope, block scope (ES6+), lexical scope.

4. **What is global scope?**
   - Variables declared outside any function or block, accessible everywhere.

5. **What is function scope?**
   - Variables declared inside a function, accessible only within that function.

6. **What is block scope?**
   - Variables declared with `let` or `const` inside a block `{}`, accessible only within that block.

7. **What is lexical scope?**
   - Inner functions have access to variables of outer functions where they're defined.

8. **How does JavaScript determine variable accessibility?**
   - By looking up the scope chain: current scope → outer scopes → global.

9. **What is scope chain?**
   - Hierarchy of scopes that JavaScript traverses to resolve variable references.

10. **What is environment record? (Basic idea only.)**
    - Internal structure that stores variable bindings within a scope.

## Global Scope

11. **What happens when a variable is declared outside any function?**
    - It becomes a global variable, accessible throughout the program.

12. **Can global variables be accessed inside functions?**
    - Yes, functions can read and modify global variables.

13. **Why are global variables considered risky?**
    - Cause naming conflicts, hard to debug, create tight coupling, pollute namespace.

14. **What happens if you modify a global variable inside a function?**
    - The global variable's value changes permanently.

15. **What is accidental global variable?**
    - Variable assigned without declaration (non-strict mode) becomes global automatically.

16. **How can accidental globals occur?**
    - Forgetting `var`/`let`/`const`, or assigning to undeclared variable.

17. **What is difference between `var` global and `let` global?**
    - `var` global attaches to `window` object; `let`/`const` global does not.

18. **Are global variables attached to `window` object in browser?**
    - `var` globals yes; `let`/`const` globals no (but still global scope).

19. **What happens in Node.js global scope?**
    - Global variables attached to `global` object; modules have their own scope.

20. **Why should global pollution be avoided?**
    - To prevent conflicts, improve modularity, and maintain code quality.

## Function Scope

21. **What is function-scoped variable?**
    - Variable declared inside function, accessible only within that function.

22. **Which keyword creates function scope?**
    - `var` creates function scope; `let`/`const` create block scope.

23. **Can `var` escape block scope inside function?**
    - `var` is function-scoped, so within function it's available throughout function.

24. **What happens when variable is declared inside function?**
    - New variable created, scoped to that function, separate from outer variables.

25. **Can outside code access function variables?**
    - No, function variables are private and inaccessible from outside.

26. **What is shadowing in function scope?**
    - Local variable with same name as outer variable "shadows" it within function.

27. **What happens if function parameter name matches global variable?**
    - Parameter shadows global variable inside function.

28. **What is variable masking?**
    - Another term for shadowing: inner variable hides outer one.

29. **How does nested function access outer variables?**
    - Through scope chain: inner function can access outer function's variables.

30. **What is closure preview? (Deep later.)**
    - Inner function "closing over" outer variables, preserving them after outer function returns.

## Block Scope

31. **Which keywords are block-scoped?**
    - `let` and `const`.

32. **What is a block in JavaScript?**
    - Code enclosed in curly braces `{}` (if, for, while, standalone).

33. **Does `if` create new scope?**
    - For `let`/`const` yes; for `var` no (var ignores block scope).

34. **Does `for` create new scope?**
    - Yes, loop body creates block scope for `let`/`const`.

35. **What is difference between `var` and `let` in loops?**
    - `var`: Single binding shared across iterations
    - `let`: New binding per iteration

36. **What is Temporal Dead Zone? (Only intro, deep later.)**
    - Period between entering scope and declaration where `let`/`const` can't be accessed.

37. **What happens if we access `let` before declaration?**
    - ReferenceError (TDZ).

38. **What happens if we redeclare `let` in same block?**
    - SyntaxError.

39. **Why is block scope safer?**
    - Prevents accidental access outside intended block, reduces bugs.

40. **What is scope isolation?**
    - Keeping variables confined to smallest necessary scope.

## Scope Chain & Lexical Environment

41. **How does JavaScript resolve variable lookup?**
    - Checks current scope, then outer scope, continues until global.

42. **What happens if variable is not found in local scope?**
    - Looks up scope chain; if not found globally, ReferenceError in strict mode.

43. **What is outer lexical environment?**
    - Reference to parent scope where function was defined.

44. **Can inner function modify outer variable?**
    - Yes, inner functions can modify variables in outer scopes.

45. **What happens if two nested scopes have same variable name?**
    - Inner variable shadows outer; outer inaccessible in inner scope.

46. **What is variable resolution order?**
    - Current scope → outer scope → ... → global scope.

47. **How does scope chain affect performance?**
    - Deeper scope chain = slower variable lookup (minor impact).

48. **What is difference between lexical scope and dynamic scope?**
    - Lexical: Scope determined by where function is written
    - Dynamic: Scope determined by call stack (JavaScript uses lexical)

49. **Why JavaScript uses lexical scoping?**
    - Predictable, matches code structure, enables closures.

50. **How does closure depend on scope chain?**
    - Closure preserves outer scope chain even after outer function returns.

## Debug Thinking

51. **What is the output of:**

```javascript
var a = 10;
function test() {
  console.log(a);
  var a = 5;
}
test();
```

    - `undefined` (var hoisting: local a hoisted, shadows global)

52. **What is the output of:**

```javascript
let a = 10;
function test() {
  console.log(a);
}
test();
```

    - `10` (no local a, uses global)

53. **What is the output of:**

```javascript
function outer() {
  let x = 5;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();
```

    - `5` (inner accesses outer variable via scope chain)

54. **What happens if you remove `let` inside function and assign directly?**
    - Creates/modifies global variable (accidental global in non-strict).

55. **Why does this throw error?**

```javascript
{
  console.log(a);
  let a = 5;
}
```

    - TDZ: accessing `let` before declaration.

56. **What is the difference between:**

```javascript
for (var i = 0; i < 3; i++) {}
```

and

```javascript
for (let i = 0; i < 3; i++) {}
```

    - First: i accessible after loop (function-scoped)
    - Second: i not accessible after loop (block-scoped)

57. **What is scope of variable declared inside `try` block?**
    - Block-scoped with `let`/`const`; not accessible outside.

58. **What happens when same variable name is used in nested blocks?**
    - Inner block shadows outer; each block has its own binding.

59. **Can function access variable declared after it?**
    - No, unless variable is hoisted (var) or function called after declaration.

60. **Why is understanding scope critical for debugging?**
    - Explains variable visibility, unexpected values, and closure behavior.

## Coding Practice (Basic to Advanced)

61. **Write a program to demonstrate global vs local scope.**

```javascript
let globalVar = "I'm global";

function test() {
  let localVar = "I'm local";
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}

test();
console.log(globalVar); // Accessible
// console.log(localVar); // Error: not accessible
```

62. **Write a function that modifies global variable (observe behavior).**

```javascript
let counter = 0;

function increment() {
  counter++; // Modifies global
  console.log(counter);
}

increment(); // 1
increment(); // 2
console.log(counter); // 2 (global changed)
```

63. **Write a program that shows block scope using `let`.**

```javascript
{
  let x = 10;
  console.log(x); // 10
}
// console.log(x); // Error: x not defined
```

64. **Write a program that shows `var` ignoring block scope.**

```javascript
{
  var y = 20;
}
console.log(y); // 20 (var ignores block)
```

65. **Create nested functions and access outer variables.**

```javascript
function outer() {
  let message = "Hello from outer";

  function middle() {
    let prefix = "Middle says: ";

    function inner() {
      console.log(prefix + message);
    }

    inner();
  }

  middle();
}
outer(); // "Middle says: Hello from outer"
```

66. **Write a function that demonstrates shadowing.**

```javascript
let name = "Global";

function shadow() {
  let name = "Local";
  console.log("Inside:", name); // "Local"
}

shadow();
console.log("Outside:", name); // "Global"
```

67. **Write a program that prevents global pollution.**

```javascript
// Use IIFE to isolate variables
(function () {
  let privateVar = "This is private";
  console.log(privateVar);
})();
// console.log(privateVar); // Error
```

68. **Write a function that returns another function accessing outer variable (closure preview).**

```javascript
function createGreeter(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = createGreeter("Hello");
sayHello("John"); // "Hello, John!"
```

69. **Write a loop with `var` and fix scope issue.**

```javascript
// Problematic
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 3,3,3
}

// Fix with closure
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 0);
  })(i); // 0,1,2
}
```

70. **Write a loop with `let` and observe correct behavior.**

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 0,1,2 (let creates new binding per iteration)
}
```

71. **Write a function that safely encapsulates variables.**

```javascript
function createCounter() {
  let count = 0; // Private

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
// console.log(count); // Error: not accessible
```

72. **Create an IIFE to isolate scope.**

```javascript
const result = (function () {
  let privateData = "secret";
  return {
    getData: () => privateData,
    setData: (value) => {
      privateData = value;
    },
  };
})();

console.log(result.getData()); // "secret"
result.setData("new secret");
console.log(result.getData()); // "new secret"
```

73. **Demonstrate variable masking inside nested blocks.**

```javascript
let x = "global";

if (true) {
  let x = "block";
  console.log("Inside block:", x); // "block"

  if (true) {
    let x = "inner block";
    console.log("Inner block:", x); // "inner block"
  }

  console.log("Back to block:", x); // "block"
}

console.log("Outside:", x); // "global"
```

74. **Write a small counter using closure (preview only).**

```javascript
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = makeCounter(); // New independent counter
console.log(counter2()); // 1
```

75. **Refactor code to remove global variables.**

```javascript
// Before - with globals
let user = "John";
let score = 0;

function addPoint() {
  score++;
  console.log(`${user} has ${score} points`);
}

// After - encapsulated
function createPlayer(name) {
  let score = 0;

  return {
    addPoint: function () {
      score++;
      console.log(`${name} has ${score} points`);
    },
    getScore: () => score,
  };
}

const player = createPlayer("John");
player.addPoint(); // "John has 1 points"
```

---

# 11 - Closures

## Conceptual Understanding

1. **What is a closure in JavaScript?**
   - A function that "remembers" its lexical scope even when the function is executed outside that scope.

2. **Why do closures exist in JavaScript?**
   - Because functions in JavaScript form closures due to lexical scoping and first-class functions.

3. **What is the relationship between lexical scope and closures?**
   - Closures are a natural result of lexical scope: inner functions retain access to outer variables.

4. **When is a closure created?**
   - Every time a function is defined, a closure is created over its surrounding scope.

5. **Does every function create a closure?**
   - Yes, technically every function has a closure, but we notice it when the function outlives its parent scope.

6. **What does it mean that a function "remembers" its outer variables?**
   - The function maintains references to variables from its lexical environment, even after that environment would normally be garbage collected.

7. **Why are closures important in real-world applications?**
   - For data privacy, creating function factories, module pattern, event handlers, and callbacks.

8. **What problem do closures solve?**
   - They allow variables to remain accessible to functions that need them, enabling encapsulation and state persistence.

9. **How are closures different from normal nested functions?**
   - Normal nested functions execute and disappear; closures persist because they're returned or passed around.

10. **Are closures related to scope chain?**
    - Yes, closures preserve the entire scope chain at the time of function definition.

## Internal Behavior

11. **What happens to outer variables after outer function finishes execution?**
    - They're normally garbage collected, but if inner function references them, they're preserved.

12. **Why are outer variables not garbage collected in closures?**
    - Because the inner function maintains references to them, preventing garbage collection.

13. **What is lexical environment in closure context?**
    - Internal data structure that stores variable bindings; closures keep reference to it.

14. **How does scope chain work in closures?**
    - Closure maintains entire scope chain from its definition, not just immediate parent.

15. **Can closure access global variables?**
    - Yes, through the scope chain.

16. **Can closure modify outer variables?**
    - Yes, closures have write access to captured variables.

17. **What happens if multiple closures share same outer variable?**
    - They all share the same variable; modifications by one affect all.

18. **What is private variable using closure?**
    - Variables captured by closure but not exposed directly, only through returned functions.

19. **How do closures help in data hiding?**
    - By encapsulating variables in function scope and exposing only controlled access methods.

20. **What is memory implication of closures?**
    - Variables in closure aren't garbage collected as long as closure exists, potentially causing memory leaks.

## Practical Understanding

21. **What is a function factory?**
    - Function that returns different functions based on parameters, using closures.

22. **How does closure help create function factories?**
    - Factory functions capture parameters in closure, creating customized functions.

23. **What is currying (basic idea only)?**
    - Transforming function with multiple arguments into sequence of functions each taking single argument, using closures.

24. **How are closures used in event handlers?**
    - Event handlers capture state at time of registration, accessible when event occurs.

25. **How are closures used in callbacks?**
    - Callbacks remember the context where they were created, useful for async operations.

26. **How do closures help in module pattern?**
    - IIFE creates private scope, returns object with methods that have closure access to private variables.

27. **What is IIFE and how is it related to closure?**
    - Immediately Invoked Function Expression creates scope; returned functions form closures over that scope.

28. **What is difference between closure and block scope?**
    - Block scope is compile-time; closure is runtime phenomenon where function retains access to scope.

29. **What is closure trap in loops?**
    - Using `var` in loops creates closures sharing same variable, leading to unexpected results.

30. **How does `let` solve closure problem in loops?**
    - `let` creates new binding per iteration, so each closure captures different variable.

## Debug Thinking

31. **What is the output of:**

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const fn = outer();
fn();
fn();
```

    - `1` then `2` (closure preserves count between calls)

32. **Why does the above code remember `count`?**
    - Inner function forms closure over count, keeping it alive.

33. **What is the output of:**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
```

    - `3, 3, 3` (all closures share same i)

34. **Why does it print same number multiple times?**
    - `var` creates single i; all closures reference same variable after loop finishes.

35. **How to fix above issue using closure?**

```javascript
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 0);
  })(i);
} // 0,1,2
```

36. **How to fix above issue using `let`?**

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
} // 0,1,2
```

37. **What happens if closure captures object and object changes?**
    - Closure sees the updated object (captures reference, not value).

38. **What happens if outer variable is reassigned?**
    - Closure sees the new value (captures variable, not value).

39. **What is difference between creating closure inside loop vs outside?**
    - Inside loop creates multiple closures each capturing different iteration's variable.

40. **How can closures cause memory leaks?**
    - If large objects are captured and never released, they persist unnecessarily.

## Coding Practice (Basic to Advanced)

41. **Write a function that returns a counter using closure.**

```javascript
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

42. **Write a function that creates a private variable and exposes getter.**

```javascript
function createSecret(initialValue) {
  let secret = initialValue;
  return {
    get: () => secret,
    set: (value) => {
      secret = value;
    },
  };
}
const mySecret = createSecret("hidden");
console.log(mySecret.get()); // "hidden"
mySecret.set("new secret");
console.log(mySecret.get()); // "new secret"
```

43. **Write a function factory that multiplies by a fixed number.**

```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
```

44. **Write a function that tracks number of times it was called.**

```javascript
function trackCalls() {
  let count = 0;
  return function () {
    count++;
    console.log(`Called ${count} time(s)`);
    return count;
  };
}
const tracker = trackCalls();
tracker(); // Called 1 time(s)
tracker(); // Called 2 time(s)
```

45. **Write a function that generates unique IDs using closure.**

```javascript
function idGenerator(prefix = "id") {
  let counter = 0;
  return function () {
    counter++;
    return `${prefix}_${counter}`;
  };
}
const generateId = idGenerator("user");
console.log(generateId()); // "user_1"
console.log(generateId()); // "user_2"
```

46. **Write a function that creates a simple bank account with deposit and withdraw methods (private balance).**

```javascript
function createAccount(initialBalance = 0) {
  let balance = initialBalance;

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited $${amount}. Balance: $${balance}`;
      }
      return "Invalid amount";
    },
    withdraw: function (amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return `Withdrew $${amount}. Balance: $${balance}`;
      }
      return "Insufficient funds or invalid amount";
    },
    getBalance: () => `Balance: $${balance}`,
  };
}
const account = createAccount(100);
console.log(account.deposit(50)); // Deposited $50. Balance: $150
console.log(account.withdraw(30)); // Withdrew $30. Balance: $120
console.log(account.getBalance()); // Balance: $120
```

47. **Write a function that caches results (simple memoization).**

```javascript
function memoize(fn) {
  const cache = {};
  return function (arg) {
    if (cache[arg] === undefined) {
      console.log(`Computing for ${arg}...`);
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}
const square = memoize((n) => n * n);
console.log(square(5)); // Computing... 25
console.log(square(5)); // 25 (cached)
```

48. **Write a function that limits number of times another function can run.**

```javascript
function limitCalls(fn, limit) {
  let calls = 0;
  return function (...args) {
    if (calls < limit) {
      calls++;
      return fn(...args);
    }
    return undefined;
  };
}
const limitedLog = limitCalls(() => console.log("Called"), 3);
limitedLog(); // Called
limitedLog(); // Called
limitedLog(); // Called
limitedLog(); // Nothing
```

49. **Write a function that implements once() behavior.**

```javascript
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    }
    return result;
  };
}
const init = once(() => console.log("Initializing..."));
init(); // Initializing...
init(); // Nothing
```

50. **Write a function that delays execution but remembers initial parameters.**

```javascript
function delay(fn, ms) {
  return function (...args) {
    setTimeout(() => fn(...args), ms);
  };
}
const delayedGreet = delay((name) => console.log(`Hello, ${name}!`), 2000);
delayedGreet("John"); // After 2 seconds: "Hello, John!"
```

51. **Write a function that creates multiple independent counters.**

```javascript
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => {
      count = 0;
    },
    getCount: () => count,
  };
}
const counter1 = createCounter();
const counter2 = createCounter();
counter1.increment(); // 1
counter1.increment(); // 2
counter2.increment(); // 1
console.log(counter1.getCount()); // 2
console.log(counter2.getCount()); // 1
```

52. **Implement simple module pattern using IIFE.**

```javascript
const calculator = (function () {
  let result = 0;

  return {
    add: function (x) {
      result += x;
      return this;
    },
    subtract: function (x) {
      result -= x;
      return this;
    },
    multiply: function (x) {
      result *= x;
      return this;
    },
    getResult: () => result,
    reset: () => {
      result = 0;
    },
  };
})();

calculator.add(5).multiply(2).subtract(3);
console.log(calculator.getResult()); // 7
```

53. **Fix closure issue in loop without using `let`.**

```javascript
function createFunctions() {
  const funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i),
    );
  }
  return funcs;
}
const funcs = createFunctions();
funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2
```

54. **Write a function that demonstrates closure with nested 3 levels.**

```javascript
function level1(x) {
  return function level2(y) {
    return function level3(z) {
      return x + y + z;
    };
  };
}
const add = level1(5)(3)(2);
console.log(add); // 10
```

55. **Write a function that simulates private config object.**

```javascript
function createConfig() {
  const config = {};

  return {
    set: (key, value) => {
      config[key] = value;
    },
    get: (key) => config[key],
    getAll: () => ({ ...config }),
    has: (key) => key in config,
  };
}
const appConfig = createConfig();
appConfig.set("theme", "dark");
appConfig.set("language", "en");
console.log(appConfig.get("theme")); // "dark"
console.log(appConfig.getAll()); // {theme: "dark", language: "en"}
```

56. **Create a rate limiter using closure (basic logic).**

```javascript
function rateLimiter(limit, interval) {
  let calls = 0;
  let startTime = Date.now();

  return function (fn) {
    const now = Date.now();
    if (now - startTime > interval) {
      calls = 0;
      startTime = now;
    }

    if (calls < limit) {
      calls++;
      return fn();
    }
    return "Rate limit exceeded";
  };
}
const limiter = rateLimiter(3, 1000); // 3 calls per second
```

57. **Create a debounce function (basic idea only).**

```javascript
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const debouncedSearch = debounce((query) => {
  console.log(`Searching for: ${query}`);
}, 500);
debouncedSearch("hello"); // Cancels previous, schedules new
```

58. **Create a throttle function (basic idea only).**

```javascript
function throttle(fn, interval) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      return fn(...args);
    }
  };
}
const throttledScroll = throttle(() => {
  console.log("Scroll event");
}, 200);
```

59. **Write a function that tracks history of values using closure.**

```javascript
function createHistory() {
  const history = [];

  return {
    add: function (value) {
      history.push(value);
      return history.length;
    },
    getHistory: () => [...history],
    undo: function () {
      if (history.length > 0) {
        return history.pop();
      }
      return null;
    },
    clear: () => {
      history.length = 0;
    },
  };
}
const history = createHistory();
history.add(5);
history.add(10);
console.log(history.getHistory()); // [5,10]
console.log(history.undo()); // 10
console.log(history.getHistory()); // [5]
```

60. **Build a small task manager using closure for private state.**

```javascript
function createTaskManager() {
  const tasks = [];
  let nextId = 1;

  return {
    addTask: function (title) {
      const task = { id: nextId++, title, completed: false };
      tasks.push(task);
      return task;
    },
    completeTask: function (id) {
      const task = tasks.find((t) => t.id === id);
      if (task) {
        task.completed = true;
        return true;
      }
      return false;
    },
    getTasks: () => [...tasks],
    getPendingTasks: () => tasks.filter((t) => !t.completed),
    getCompletedTasks: () => tasks.filter((t) => t.completed),
    removeTask: function (id) {
      const index = tasks.findIndex((t) => t.id === id);
      if (index !== -1) {
        return tasks.splice(index, 1)[0];
      }
      return null;
    },
  };
}
const manager = createTaskManager();
manager.addTask("Learn JavaScript");
manager.addTask("Practice coding");
manager.completeTask(1);
console.log(manager.getPendingTasks()); // [{id:2, title:"Practice coding", completed:false}]
```

---

# 12 - Hoisting

## Conceptual Understanding

1. **What is hoisting in JavaScript?**
   - JavaScript's behavior of moving declarations to the top of their scope during compilation.

2. **Does JavaScript physically move code to the top?**
   - No, it's a mental model; actually declarations are processed before execution.

3. **When does hoisting happen?**
   - During the creation phase of the execution context, before code execution.

4. **What is the creation phase of execution context?**
   - Memory is allocated for variables and functions; `var` variables initialized with `undefined`.

5. **What is the execution phase?**
   - Code is executed line by line, assignments happen.

6. **What gets hoisted in JavaScript?**
   - Variable declarations (`var`, `let`, `const`) and function declarations.

7. **Are variables hoisted?**
   - Yes, but differently: `var` with `undefined`, `let`/`const` without initialization.

8. **Are functions hoisted?**
   - Yes, function declarations are fully hoisted (definition included).

9. **What is the difference between variable hoisting and function hoisting?**
   - Function hoisting includes the entire definition; variable hoisting only the declaration.

10. **Why is understanding hoisting important for debugging?**
    - Explains why some variables are `undefined` instead of throwing errors, and why functions can be called before declaration.

## Variable Hoisting

11. **What happens when `var` is hoisted?**
    - Declaration hoisted, initialized with `undefined`.

12. **What value does a `var` variable have before assignment?**
    - `undefined`.

13. **What happens when `let` is hoisted?**
    - Declaration hoisted, but not initialized (Temporal Dead Zone).

14. **What happens when `const` is hoisted?**
    - Same as `let` (hoisted but not initialized, must be initialized at declaration).

15. **What is Temporal Dead Zone (TDZ)?**
    - The period between entering scope and actual declaration where variable cannot be accessed.

16. **When does TDZ start and end?**
    - Starts at beginning of scope, ends at declaration.

17. **Why accessing `let` before declaration throws error?**
    - Variable exists but is uninitialized; accessing throws ReferenceError.

18. **Why accessing `var` before declaration does not throw error?**
    - `var` is initialized with `undefined` during hoisting.

19. **What type of error is thrown for TDZ violation?**
    - ReferenceError.

20. **How is `var` hoisting different from `let`/`const` hoisting internally?**
    - All are hoisted, but `var` gets initial value `undefined`, `let`/`const` remain uninitialized.

## Function Hoisting

21. **Are function declarations hoisted fully?**
    - Yes, both name and body are hoisted.

22. **What does "fully hoisted" mean?**
    - The entire function definition is available before declaration.

23. **Are function expressions hoisted?**
    - No, only the variable declaration is hoisted (with `var`), not the function assignment.

24. **What happens if you call function expression before definition?**
    - Error (TypeError or ReferenceError depending on declaration keyword).

25. **Are arrow functions hoisted?**
    - No, they follow same hoisting rules as function expressions.

26. **What happens if arrow function is declared using `var`?**
    - `var` hoisted to `undefined`, calling before assignment throws TypeError.

27. **What happens if arrow function is declared using `let`?**
    - TDZ applies; calling before declaration throws ReferenceError.

28. **What is difference between:**

```javascript
function test() {}
```

and

```javascript
const test = function () {};
```

    - First: fully hoisted, can be called anywhere in scope
    - Second: variable hoisted but function assigned later

29. **Can function declaration override variable with same name?**
    - Function declarations take precedence over variable declarations.

30. **What happens if variable and function have same name?**
    - Function declaration overrides variable declaration; but assignment can change later.

## Execution Context & Hoisting

31. **What is global execution context?**
    - The default context where global code runs; created when script starts.

32. **What is function execution context?**
    - Created each time a function is called; has its own variable environment.

33. **What is variable environment?**
    - Where variables are stored in execution context.

34. **What is memory allocation phase?**
    - Creation phase where memory is allocated for variables and functions.

35. **What is code execution phase?**
    - Phase where code runs line by line, assignments performed.

36. **How does JavaScript engine prepare memory before execution?**
    - Scans for declarations, allocates memory, sets up scope chain.

37. **What is difference between undefined and not defined?**
    - `undefined`: Variable exists but no value assigned
    - "not defined": Variable doesn't exist (ReferenceError)

38. **When does ReferenceError occur?**
    - When accessing variable that doesn't exist or is in TDZ.

39. **When does TypeError occur in hoisting context?**
    - When trying to call undefined as function (function expression with `var` before assignment).

40. **How does hoisting behave inside functions?**
    - Same rules apply within function scope; local variables hoisted to top of function.

## Debug Thinking

41. **What is the output of:**

```javascript
console.log(a);
var a = 5;
```

    - `undefined` (var hoisting)

42. **What is the output of:**

```javascript
console.log(a);
let a = 5;
```

    - ReferenceError (TDZ)

43. **What is the output of:**

```javascript
greet();
function greet() {
  console.log("Hello");
}
```

    - `"Hello"` (function hoisting)

44. **What is the output of:**

```javascript
greet();
var greet = function () {
  console.log("Hello");
};
```

    - TypeError: greet is not a function (var hoisted as undefined)

45. **What is the output of:**

```javascript
var a = 1;
function test() {
  console.log(a);
  var a = 2;
}
test();
```

    - `undefined` (local a hoisted, shadows global)

46. **Why does above example not print 1?**
    - Local `var a` is hoisted to top of function with `undefined`, shadowing global.

47. **What happens in this case:**

```javascript
var a = 1;
function a() {}
console.log(typeof a);
```

    - `"number"` (function declaration hoisted first, then assignment overrides)

48. **What is the difference between:**

```javascript
var a;
```

and

```javascript
let a;
```

    - Both declare variable; `var` initializes with undefined immediately, `let` remains uninitialized until line executes.

49. **What is the output of:**

```javascript
console.log(typeof x);
```

    - `"undefined"` (typeof on undeclared variable returns "undefined" without error)

50. **What is the difference between:**

```javascript
console.log(x);
```

and

```javascript
console.log(typeof x);
```

    - First: ReferenceError if x undeclared
    - Second: Returns "undefined" safely

## Coding Practice (Basic to Advanced)

51. **Write a program demonstrating `var` hoisting.**

```javascript
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

52. **Write a program demonstrating TDZ with `let`.**

```javascript
// console.log(y); // Would throw ReferenceError
let y = 10;
console.log(y); // 10
```

53. **Write a program that calls function before declaration.**

```javascript
sayHello(); // Works: "Hello"
function sayHello() {
  console.log("Hello");
}
```

54. **Write a program that fails due to function expression hoisting.**

```javascript
// sayHi(); // TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hi");
};
sayHi(); // Works here
```

55. **Convert a hoisting bug into correct version.**

```javascript
// Buggy
function test() {
  console.log(value); // undefined (bug)
  var value = 5;
}

// Fixed
function test() {
  var value = 5;
  console.log(value); // 5
}
```

56. **Write a program that shows difference between undefined and not defined.**

```javascript
let definedVar;
console.log(definedVar); // undefined
// console.log(notDefined); // ReferenceError: notDefined is not defined
```

57. **Create a function inside function and observe hoisting behavior.**

```javascript
function outer() {
  console.log(inner); // undefined (var hoisting)
  console.log(inner2); // ReferenceError (let TDZ)

  var inner = function () {
    console.log("Inner");
  };

  let inner2 = function () {
    console.log("Inner2");
  };
}
outer();
```

58. **Demonstrate hoisting inside block with `let`.**

```javascript
if (true) {
  // console.log(blockVar); // ReferenceError (TDZ)
  let blockVar = "inside block";
  console.log(blockVar); // "inside block"
}
// console.log(blockVar); // ReferenceError (block scope)
```

59. **Rewrite a `var` based code using `let` and explain difference.**

```javascript
// var version
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 3,3,3
}

// let version
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0); // 0,1,2
}
// Difference: let creates new binding per iteration
```

60. **Create a mini example that explains creation phase and execution phase clearly.**

```javascript
// Creation phase:
// - a is hoisted with undefined
// - sayHello function is hoisted fully

console.log(a); // undefined (creation phase value)
sayHello(); // "Hello" (function hoisted)

var a = 10; // execution phase: a = 10
console.log(a); // 10

function sayHello() {
  console.log("Hello");
}

// console.log(b); // Would be in TDZ if uncommented
let b = 20;
```

---

# 13 - this Keyword

## Conceptual Understanding

1. **What is `this` in JavaScript?**
   - A special keyword that refers to the context in which a function is executed.

2. **Is `this` determined at function creation time or call time?**
   - Call time (except arrow functions which inherit lexically).

3. **Why is `this` considered dynamic?**
   - Its value depends on how function is called, not where it's defined (for regular functions).

4. **What are the different contexts where `this` behaves differently?**
   - Global, function, method, constructor, event handler, arrow function.

5. **What is global context for `this`?**
   - In browser: `window` object; in Node.js: `global` object.

6. **What is function context for `this`?**
   - Depends on how function is called: global (non-strict), undefined (strict), or bound.

7. **What is object method context for `this`?**
   - Refers to the object that owns the method (when called as method).

8. **What is constructor context for `this`?**
   - Refers to the newly created instance when using `new`.

9. **What is lexical `this`?**
   - `this` value determined by where function is defined (arrow functions).

10. **Why is `this` one of the most confusing concepts in JavaScript?**
    - Because its value changes based on execution context, not just definition.

## this in Global Context

11. **What does `this` refer to in browser global scope?**
    - The `window` object.

12. **What does `this` refer to in Node.js global scope?**
    - The `global` object (or `{}` in modules).

13. **What is the value of `this` in strict mode?**
    - In functions: `undefined` (default binding); global still window/global.

14. **What is difference between strict and non-strict mode for `this`?**
    - Non-strict: default binding to global object
    - Strict: default binding is `undefined`

15. **Is `this` equal to `window` in browser?**
    - In global scope, yes. Inside functions depends on call.

16. **Is `this` equal to `global` in Node.js?**
    - In global scope, yes (in REPL); in modules, `this` is module.exports.

17. **What happens if you log `this` in top-level code?**
    - Browser: `window`; Node.js module: `{}` (module.exports).

18. **What happens to `this` inside ES module?**
    - Top-level `this` is `undefined` (modules are strict by default).

19. **How does strict mode change default binding?**
    - Default binding (standalone function call) becomes `undefined` instead of global.

20. **Why should we prefer strict mode?**
    - Avoids accidental global creation, makes `this` behavior more predictable.

## this Inside Regular Functions

21. **What is default binding rule?**
    - Standalone function call: `this` is global (non-strict) or undefined (strict).

22. **What is implicit binding rule?**
    - Function called as method: `this` is the object before dot.

23. **What is explicit binding rule?**
    - Using `call`, `apply`, `bind` to set `this` explicitly.

24. **What is new binding rule?**
    - Function called with `new`: `this` is new object.

25. **What happens when function is called normally?**
    - `this` is global (non-strict) or undefined (strict).

26. **What happens when function is called as object method?**
    - `this` refers to the object.

27. **What happens when function reference is assigned to variable?**
    - Loses original `this`; follows default binding when called.

28. **What happens when function is called with `call()`?**
    - `this` set to first argument.

29. **What happens when function is called with `apply()`?**
    - Same as `call`, arguments passed as array.

30. **What happens when function is called with `bind()`?**
    - Returns new function with permanently bound `this`.

## this Inside Arrow Functions

31. **Do arrow functions have their own `this`?**
    - No, they inherit `this` from enclosing scope.

32. **What does lexical `this` mean?**
    - Arrow function uses `this` value from where it's defined, not called.

33. **How does arrow function capture `this`?**
    - At definition time, captures `this` from outer function.

34. **Why are arrow functions useful in callbacks?**
    - Preserve outer `this`, avoiding need for `that = this` or `.bind()`.

35. **What happens if arrow function is used as object method?**
    - `this` refers to outer scope (usually global), not object.

36. **What happens if arrow function is used as constructor?**
    - TypeError: arrow functions are not constructors.

37. **Can arrow function change `this` using call/apply/bind?**
    - No, first argument ignored; `this` remains lexical.

38. **Why arrow functions ignore `new` keyword?**
    - They don't have `[[Construct]]` internal method.

39. **How does arrow function behave inside class?**
    - Captures class instance `this`, useful for methods as callbacks.

40. **What is difference between:**

```javascript
function test() {}
```

and

```javascript
const test = () => {};
```

in context of `this`? - First: dynamic `this` based on call - Second: lexical `this` from definition scope

## Constructor & new Keyword

41. **What happens when we use `new` keyword?**
    - Creates new object, sets prototype, binds `this` to new object, returns object.

42. **How does `new` change value of `this`?**
    - `this` becomes the newly created object.

43. **What are the steps of object creation using `new`?**
    1. Create empty object
    2. Set prototype
    3. Bind `this` to object
    4. Execute constructor
    5. Return object (or constructor's return if object)

44. **What happens if constructor does not return anything?**
    - Returns the new object (`this`).

45. **What happens if constructor returns object?**
    - Returns that object instead of `this`.

46. **What happens if constructor returns primitive?**
    - Ignored, returns `this` (new object).

47. **What is difference between constructor function and normal function?**
    - Constructor meant to be called with `new`; convention: capital first letter.

48. **Why constructor functions start with capital letter by convention?**
    - To distinguish them from regular functions, indicating they should be called with `new`.

49. **What is prototype relation with `this`?**
    - Methods on prototype have `this` referring to instance.

50. **How does `this` behave inside prototype method?**
    - `this` refers to instance calling the method.

## Debug Thinking

51. **What is the output of:**

```javascript
console.log(this);
```

    - Browser: `window`; Node.js module: `{}`

52. **What is the output of:**

```javascript
function test() {
  console.log(this);
}
test();
```

    - Non-strict: global object; strict: `undefined`

53. **What is the output of:**

```javascript
const obj = {
  value: 10,
  getValue: function () {
    return this.value;
  },
};
console.log(obj.getValue());
```

    - `10` (implicit binding)

54. **What happens if:**

```javascript
const fn = obj.getValue;
console.log(fn());
```

    - Loses `this`: returns undefined (or global value if exists)

55. **What is the output of:**

```javascript
const obj = {
  value: 10,
  getValue: () => this.value,
};
console.log(obj.getValue());
```

    - `undefined` (arrow function inherits outer `this`)

56. **What happens in strict mode for default binding?**
    - `this` becomes `undefined`.

57. **What is the output of:**

```javascript
function Person(name) {
  this.name = name;
}
const p = Person("John");
console.log(p);
```

    - `undefined` (no `new`, `this` is global, pollutes global)

58. **What happens if we forget `new` while calling constructor?**
    - `this` binds to global (non-strict) or error (strict), no new object created.

59. **What is the output of:**

```javascript
function Person(name) {
  this.name = name;
}
const p = new Person("John");
console.log(p.name);
```

    - `"John"` (new binding works correctly)

60. **Why understanding `this` is critical for debugging object-oriented JavaScript?**
    - Because incorrect `this` leads to undefined properties, global pollution, and unexpected behavior in methods and callbacks.

## Coding Practice (Basic to Advanced)

61. **Create an object with method that uses `this`.**

```javascript
const person = {
  name: "John",
  greet: function () {
    return `Hello, I'm ${this.name}`;
  },
};
console.log(person.greet()); // "Hello, I'm John"
```

62. **Create a constructor function and instantiate it.**

```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.getInfo = function () {
    return `${this.brand} ${this.model}`;
  };
}
const myCar = new Car("Toyota", "Camry");
console.log(myCar.getInfo()); // "Toyota Camry"
```

63. **Demonstrate default binding.**

```javascript
function showThis() {
  console.log(this);
}
showThis(); // global or undefined in strict
```

64. **Demonstrate implicit binding.**

```javascript
const obj = {
  name: "Object",
  show: function () {
    console.log(this.name);
  },
};
obj.show(); // "Object"
```

65. **Demonstrate explicit binding using `call`.**

```javascript
function introduce(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}
const user = { name: "Alice" };
introduce.call(user, "Hello"); // "Hello, I'm Alice"
```

66. **Demonstrate explicit binding using `apply`.**

```javascript
function introduce(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}
const user = { name: "Bob" };
introduce.apply(user, ["Hi", "!"]); // "Hi, I'm Bob!"
```

67. **Demonstrate `bind` and delayed execution.**

```javascript
const user = { name: "Charlie" };
function greet() {
  console.log(`Hello, ${this.name}`);
}
const boundGreet = greet.bind(user);
setTimeout(boundGreet, 1000); // After 1s: "Hello, Charlie"
```

68. **Convert a regular function to arrow function and observe `this`.**

```javascript
function Timer() {
  this.seconds = 0;

  // Regular function - loses this
  setInterval(function () {
    this.seconds++; // this is global
    console.log(this.seconds);
  }, 1000);
}
// new Timer(); // NaN...

function TimerFixed() {
  this.seconds = 0;

  // Arrow function - captures this
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
// new TimerFixed(); // 1,2,3...
```

69. **Fix a broken `this` context inside callback.**

```javascript
const calculator = {
  value: 0,
  add: function (numbers) {
    numbers.forEach(function (num) {
      this.value += num; // this is undefined/global
    });
    console.log(this.value);
  },
};
// calculator.add([1,2,3]); // NaN or error

// Fix with arrow function
const calculatorFixed = {
  value: 0,
  add: function (numbers) {
    numbers.forEach((num) => {
      this.value += num;
    });
    console.log(this.value);
  },
};
calculatorFixed.add([1, 2, 3]); // 6
```

70. **Write a class-like constructor using function and prototype.**

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};
const dog = new Animal("Rex");
dog.speak(); // "Rex makes a sound"
```

71. **Create multiple objects using constructor and verify `this`.**

```javascript
function Person(name) {
  this.name = name;
  this.sayName = function () {
    console.log(this.name);
  };
}
const p1 = new Person("Alice");
const p2 = new Person("Bob");
p1.sayName(); // "Alice"
p2.sayName(); // "Bob"
```

72. **Write a function that logs `this` in different contexts.**

```javascript
function logThis() {
  console.log(this);
}
const obj = { log: logThis };

logThis(); // global/undefined
obj.log(); // obj
logThis.call(obj); // obj
new logThis(); // new object
```

73. **Demonstrate new binding rule clearly.**

```javascript
function Person(name) {
  console.log(this); // new object
  this.name = name;
  console.log(this); // {name: "John"}
}
const john = new Person("John");
```

74. **Show difference between arrow and normal method in object.**

```javascript
const obj = {
  value: 42,
  normal: function () {
    console.log(this.value);
  },
  arrow: () => {
    console.log(this.value);
  },
};
obj.normal(); // 42
obj.arrow(); // undefined (this is outer)
```

75. **Refactor code to avoid incorrect `this` usage.**

```javascript
// Before - problematic
const handler = {
  message: "Clicked",
  init: function () {
    document.addEventListener("click", function () {
      console.log(this.message); // this is document, not handler
    });
  },
};

// After - fixed with arrow function
const handlerFixed = {
  message: "Clicked",
  init: function () {
    document.addEventListener("click", () => {
      console.log(this.message); // this is handler
    });
  },
};
```

---

# 14 - call, apply, bind

## Conceptual Understanding

1. **What are `call`, `apply`, and `bind` in JavaScript?**
   - Methods that allow explicit setting of `this` value for a function.

2. **Why do we need `call`, `apply`, and `bind`?**
   - To control function execution context, borrow methods, and fix `this` issues.

3. **What problem do they solve?**
   - They solve the problem of losing `this` context and enable function borrowing.

4. **Which binding rule do they override?**
   - They override default and implicit binding with explicit binding.

5. **What is explicit binding?**
   - Explicitly setting `this` value using `call`, `apply`, or `bind`.

6. **What is difference between implicit and explicit binding?**
   - Implicit: `this` set by object calling method
   - Explicit: `this` set by programmer using special methods

7. **Are `call`, `apply`, and `bind` methods of all functions?**
   - Yes, they're available on all function objects.

8. **What does the first argument of `call` represent?**
   - The value to be used as `this` inside the function.

9. **What happens if first argument is `null` or `undefined`?**
   - In non-strict mode, `this` becomes global object; in strict mode, it remains `null`/`undefined`.

10. **How do these methods relate to `this` keyword?**
    - They provide direct control over what `this` refers to in function execution.

## call()

11. **What is syntax of `call()`?**
    - `func.call(thisArg, arg1, arg2, ...)`

12. **How are arguments passed in `call()`?**
    - Passed individually, comma-separated after `thisArg`.

13. **When should we use `call()`?**
    - When we know arguments individually, for method borrowing, or invoking functions with specific `this`.

14. **What happens if no arguments are passed?**
    - Function called with `this` as `undefined` (strict) or global (non-strict).

15. **Can we borrow methods using `call()`?**
    - Yes, call object's method with different object as `this`.

16. **What is function borrowing?**
    - Using one object's method on another object by setting `this` to target object.

17. **Can we use `call()` to invoke constructor?**
    - Not directly with `new`, but can call constructor function with different `this`.

18. **What happens if function returns value with `call()`?**
    - Return value is passed through; `call()` returns function's return value.

19. **Does `call()` execute immediately?**
    - Yes, it invokes the function immediately.

20. **Can `call()` change lexical `this` of arrow function?**
    - No, arrow functions ignore explicit `this` binding.

## apply()

21. **What is syntax of `apply()`?**
    - `func.apply(thisArg, [argsArray])`

22. **How are arguments passed in `apply()`?**
    - As an array or array-like object.

23. **What is difference between `call()` and `apply()`?**
    - `call()`: arguments passed individually
    - `apply()`: arguments passed as array

24. **When should `apply()` be preferred?**
    - When arguments are already in array, or number of arguments is dynamic.

25. **Can we use `apply()` for method borrowing?**
    - Yes, same as `call()` but with array arguments.

26. **What happens if second argument is not array?**
    - TypeError (expects array-like object).

27. **Does `apply()` execute immediately?**
    - Yes.

28. **Can `apply()` override arrow function `this`?**
    - No.

29. **What happens if arguments array is empty?**
    - Function called with no arguments.

30. **How can `apply()` be used with `Math.max`?**
    - `Math.max.apply(null, [1,2,3])` to find max in array.

## bind()

31. **What is syntax of `bind()`?**
    - `const boundFn = func.bind(thisArg, arg1, arg2, ...)`

32. **What is the major difference between `bind()` and `call()`?**
    - `bind()` returns new function with bound `this`; doesn't execute immediately.
    - `call()` executes immediately.

33. **Does `bind()` execute immediately?**
    - No, it returns a new function.

34. **What does `bind()` return?**
    - A new function with `this` permanently bound to provided value.

35. **What is partial application?**
    - Pre-setting some arguments using `bind()`.

36. **How can `bind()` be used for partial application?**
    - Pass additional arguments to `bind()` that are prepended when calling.

37. **Can bound function be used as constructor?**
    - Yes, with `new`, `this` is still bound to new object.

38. **What happens if we bind multiple times?**
    - Only first binding matters; subsequent binds don't change `this`.

39. **Can `bind()` change `this` of arrow function?**
    - No.

40. **When should we use `bind()` instead of arrow function?**
    - When we need a function with specific `this` but not lexical; when we need partial application.

## Internal & Behavior Understanding

41. **What happens internally when `call()` is used?**
    - Temporarily sets `this` to provided value, calls function, restores original context.

42. **What happens internally when `bind()` is used?**
    - Creates closure storing `this` and arguments, returns new function that applies them.

43. **Can we simulate `bind()` using closure?**
    - Yes, return function that uses `call`/`apply` with stored context.

44. **What is difference between hard binding and soft binding?**
    - Hard binding (bind): permanent `this` binding
    - Soft binding: can be overridden

45. **How does explicit binding interact with `new`?**
    - `new` has higher precedence than explicit binding (except arrow functions).

46. **What happens if bound function is called with `new`?**
    - `new` overrides the bound `this`; creates new object.

47. **Which binding rule has highest priority?**
    - `new` binding > explicit binding (call/apply/bind) > implicit > default.

48. **What is order of binding precedence?**
    1. `new` binding
    2. Explicit binding (call/apply/bind)
    3. Implicit binding (method call)
    4. Default binding (standalone)

49. **Can `this` be permanently fixed?**
    - With `bind`, `this` can't be changed by call/apply, but `new` overrides.

50. **Why understanding binding precedence is important?**
    - To predict what `this` will be in complex scenarios.

## Debug Thinking

51. **What is the output of:**

```javascript
function greet() {
  console.log(this.name);
}
const obj = { name: "John" };
greet.call(obj);
```

    - `"John"`

52. **What is the output of:**

```javascript
greet.apply(obj);
```

    - `"John"` (same as call)

53. **What is the output of:**

```javascript
const fn = greet.bind(obj);
fn();
```

    - `"John"`

54. **What happens if:**

```javascript
const fn = greet.bind(obj);
fn.call({ name: "Mike" });
```

    - Still `"John"` (bind permanently set `this`)

55. **Why does above still print original name?**
    - `bind` creates hard-bound function that ignores subsequent `this` changes.

56. **What happens if arrow function is used with bind?**
    - `this` remains lexical; bind has no effect.

57. **What is the output of:**

```javascript
const obj = {
  name: "A",
  greet: function () {
    return function () {
      console.log(this.name);
    };
  },
};
obj.greet()();
```

    - `undefined` (inner function loses this)

58. **How to fix above using `bind()`?**

```javascript
const obj = {
  name: "A",
  greet: function () {
    return function () {
      console.log(this.name);
    }.bind(this);
  },
};
obj.greet()(); // "A"
```

59. **How to fix above using arrow function?**

```javascript
const obj = {
  name: "A",
  greet: function () {
    return () => {
      console.log(this.name);
    };
  },
};
obj.greet()(); // "A"
```

60. **What is the difference between:**

```javascript
fn.bind(obj1).bind(obj2);
```

    - Only first bind matters; second does nothing.

## Coding Practice (Basic to Advanced)

61. **Write a program demonstrating `call()` usage.**

```javascript
function introduce(age, city) {
  console.log(`${this.name} is ${age} from ${city}`);
}
const person = { name: "Alice" };
introduce.call(person, 25, "New York"); // "Alice is 25 from New York"
```

62. **Write a program demonstrating `apply()` usage.**

```javascript
function introduce(age, city) {
  console.log(`${this.name} is ${age} from ${city}`);
}
const person = { name: "Bob" };
introduce.apply(person, [30, "London"]); // "Bob is 30 from London"
```

63. **Write a program demonstrating `bind()` usage.**

```javascript
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2);
console.log(double(5)); // 10
console.log(double(7)); // 14
```

64. **Implement function borrowing using `call()`.**

```javascript
const car = {
  brand: "Toyota",
  getBrand: function () {
    return this.brand;
  },
};
const bike = { brand: "Yamaha" };
console.log(car.getBrand.call(bike)); // "Yamaha"
```

65. **Use `apply()` to find max element in array.**

```javascript
const numbers = [5, 2, 9, 1, 7];
const max = Math.max.apply(null, numbers);
console.log(max); // 9
// Modern alternative: Math.max(...numbers)
```

66. **Create a constructor and use `call()` for inheritance simulation (basic idea only).**

```javascript
function Animal(name) {
  this.name = name;
}
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
const myDog = new Dog("Rex", "German Shepherd");
console.log(myDog.name); // "Rex"
```

67. **Write a function that permanently binds `this`.**

```javascript
function permanentlyBind(fn, context) {
  return function (...args) {
    return fn.apply(context, args);
  };
}
const obj = { value: 42 };
function getValue() {
  return this.value;
}
const boundGet = permanentlyBind(getValue, obj);
console.log(boundGet()); // 42
```

68. **Implement custom `myBind()` function.**

```javascript
Function.prototype.myBind = function (context, ...boundArgs) {
  const fn = this;
  return function (...args) {
    return fn.apply(context, [...boundArgs, ...args]);
  };
};
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}
const person = { name: "John" };
const boundGreet = greet.myBind(person, "Hello");
console.log(boundGreet("!")); // "Hello, John!"
```

69. **Implement custom `myCall()` function.**

```javascript
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  const fnKey = Symbol("fn");
  context[fnKey] = this;
  const result = context[fnKey](...args);
  delete context[fnKey];
  return result;
};
function introduce(age) {
  return `${this.name} is ${age} years old`;
}
const person = { name: "Alice" };
console.log(introduce.myCall(person, 25)); // "Alice is 25 years old"
```

70. **Implement custom `myApply()` function.**

```javascript
Function.prototype.myApply = function (context, argsArray) {
  context = context || globalThis;
  const fnKey = Symbol("fn");
  context[fnKey] = this;
  const result = context[fnKey](...(argsArray || []));
  delete context[fnKey];
  return result;
};
function introduce(age, city) {
  return `${this.name} is ${age} from ${city}`;
}
const person = { name: "Bob" };
console.log(introduce.myApply(person, [30, "London"])); // "Bob is 30 from London"
```

71. **Demonstrate partial application using `bind()`.**

```javascript
function formatMessage(prefix, suffix, message) {
  return `${prefix} ${message} ${suffix}`;
}
const addExclamation = formatMessage.bind(null, "Wow:", "!!!");
console.log(addExclamation("Hello")); // "Wow: Hello !!!"
```

72. **Fix a callback losing `this` using `bind()`.**

```javascript
const user = {
  name: "John",
  greet: function () {
    setTimeout(
      function () {
        console.log(`Hello, ${this.name}`);
      }.bind(this),
      1000,
    );
  },
};
user.greet(); // After 1s: "Hello, John"
```

73. **Compare arrow function vs bind in callback.**

```javascript
const user = {
  name: "Alice",
  greetArrow: function () {
    setTimeout(() => {
      console.log(`Arrow: Hello, ${this.name}`);
    }, 1000);
  },
  greetBind: function () {
    setTimeout(
      function () {
        console.log(`Bind: Hello, ${this.name}`);
      }.bind(this),
      1000,
    );
  },
};
user.greetArrow(); // Arrow: Hello, Alice
user.greetBind(); // Bind: Hello, Alice (same result)
```

74. **Demonstrate binding precedence rules.**

```javascript
function getThis() {
  console.log(this);
}
const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

const bound = getThis.bind(obj1);
bound.call(obj2); // Still obj1 (bind overrides call)
bound.apply(obj2); // Still obj1

const BoundConstructor = getThis.bind(obj1);
new BoundConstructor(); // new object (new overrides bind)
```

75. **Build a small logger utility using bind.**

```javascript
function Logger(prefix) {
  this.prefix = prefix;
}
Logger.prototype.log = function (message) {
  console.log(`[${this.prefix}] ${message}`);
};
const infoLogger = new Logger("INFO");
const errorLogger = new Logger("ERROR");

// Create bound versions
const logInfo = infoLogger.log.bind(infoLogger);
const logError = errorLogger.log.bind(errorLogger);

logInfo("Application started"); // [INFO] Application started
logError("Something went wrong"); // [ERROR] Something went wrong
```

---

I'll continue with the remaining chapters (15-20) in the same detailed format. Would you like me to continue with Arrays Basics next?

# 15 - Arrays Basics

## Conceptual Understanding

1. **What is an array in JavaScript?**
   - An ordered collection of elements that can store multiple values in a single variable, accessed by numeric indices.

2. **Why do we need arrays?**
   - To store and manage collections of related data efficiently, perform operations on multiple items, and maintain ordered lists.

3. **How are arrays different from variables?**
   - Variables store single values; arrays store multiple values in a structured, indexable way.

4. **Are arrays primitive or reference types?**
   - Reference types (they're objects in JavaScript).

5. **How are arrays stored in memory?**
   - Reference stored in stack, actual array data stored in heap.

6. **What is zero-based indexing?**
   - First element of array has index 0, second has index 1, etc.

7. **Can arrays store multiple data types?**
   - Yes, JavaScript arrays can hold mixed types (numbers, strings, objects, etc.) in same array.

8. **What is the length property of array?**
   - Property that returns number of elements; automatically updates when array changes.

9. **Is array length fixed in JavaScript?**
   - No, arrays are dynamic - can grow or shrink as needed.

10. **What happens when you assign value to an index beyond current length?**
    - Array expands, empty slots become `undefined` between last index and new index.

## Array Creation

11. **How can you create an array using literal syntax?**
    - `const arr = [1, 2, 3];`

12. **How can you create an array using `new Array()`?**
    - `const arr = new Array(1, 2, 3);`

13. **What is difference between `[]` and `new Array()`?**
    - `[]` is literal syntax (preferred), simpler and avoids constructor ambiguity.
    - `new Array()` can behave unexpectedly with single number argument.

14. **What happens when you pass single number to `new Array(5)`?**
    - Creates array with length 5, all elements empty (sparse array).

15. **What happens when you pass multiple values to `new Array(1,2,3)`?**
    - Creates array with those values: `[1,2,3]`.

16. **How do you access array elements?**
    - Using bracket notation: `arr[index]`.

17. **What happens if you access out-of-bounds index?**
    - Returns `undefined` (no error).

18. **Can you change array length manually?**
    - Yes, assigning to `length` property truncates or expands array.

19. **What happens if you reduce array length?**
    - Elements beyond new length are discarded.

20. **Can array have empty slots (holes)?**
    - Yes, sparse arrays have missing indices; they're treated as empty (not undefined).

## Basic Operations

21. **How do you add element at end of array?**
    - `push()` method or `arr[arr.length] = value`.

22. **How do you remove element from end?**
    - `pop()` method.

23. **How do you add element at beginning?**
    - `unshift()` method.

24. **How do you remove element from beginning?**
    - `shift()` method.

25. **What is difference between `push` and `unshift`?**
    - `push`: Adds to end
    - `unshift`: Adds to beginning

26. **What is difference between `pop` and `shift`?**
    - `pop`: Removes from end
    - `shift`: Removes from beginning

27. **How do you update an element in array?**
    - Assign new value to index: `arr[index] = newValue`.

28. **How do you find index of an element?**
    - `indexOf()` method.

29. **What is difference between `indexOf` and `includes`?**
    - `indexOf`: Returns index or -1
    - `includes`: Returns boolean

30. **How do you check if a variable is an array?**
    - `Array.isArray(variable)`.

## Array Nature & Behavior

31. **Why is array considered object in JavaScript?**
    - Arrays are special type of objects with numeric keys and array-specific methods.

32. **What does `typeof []` return?**
    - `"object"`.

33. **Why does `typeof []` return that value?**
    - Arrays are objects; `typeof` doesn't distinguish array from other objects.

34. **How do arrays handle sparse elements?**
    - Missing indices are "holes" - accessing returns undefined but property doesn't exist.

35. **What is difference between empty array and array with empty values?**
    - `[]` has no elements; `[,,,]` has holes (length > 0 but elements empty).

36. **What happens if you delete an array element using `delete`?**
    - Creates hole (element removed but length unchanged).

37. **Why should `delete` not be used on arrays?**
    - Creates sparse arrays with holes; use `splice()` for proper removal.

38. **What is difference between `delete` and `splice`?**
    - `delete`: Removes value, leaves hole
    - `splice`: Removes element and shifts indices

39. **How does array reference copying work?**
    - Assignment copies reference, not array; both variables point to same array.

40. **What happens when you assign one array to another variable?**
    - Both variables reference same array; modifications affect both.

## Debug Thinking

41. **What is the output of:**

```javascript
const arr = [1, 2, 3];
arr.length = 1;
console.log(arr);
```

    - `[1]` (truncated)

42. **What is the output of:**

```javascript
const arr = [1, 2, 3];
delete arr[1];
console.log(arr);
```

    - `[1, empty, 3]` (hole created)

43. **What is the output of:**

```javascript
const arr = [];
arr[5] = 10;
console.log(arr.length);
```

    - `6` (index 5 means length becomes 6)

44. **Why does above length not equal 1?**
    - Array length is highest index + 1; assigning to index 5 sets length to 6.

45. **What is the output of:**

```javascript
const a = [1, 2];
const b = a;
b.push(3);
console.log(a);
```

    - `[1,2,3]` (reference copy, both point to same array)

46. **Why does modifying `b` affect `a`?**
    - `b` holds reference to same array as `a`.

47. **What is the difference between:**

```javascript
const a = [1, 2];
const b = [...a];
```

    - `b` is shallow copy (new array) independent of `a`.

48. **What happens if you compare two arrays using `===`?**
    - Compares references, not content; `[1,2] === [1,2]` is false.

49. **Why does `[1,2] === [1,2]` return false?**
    - Different objects in memory; references are different.

50. **What is off-by-one error in array iteration?**
    - Using `<= arr.length` instead of `< arr.length` causes undefined access.

## Coding Practice (Basic to Advanced)

51. **Create an array of 10 numbers and print them.**

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

52. **Write a program to find sum of array elements.**

```javascript
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
```

53. **Write a program to find average of array.**

```javascript
function averageArray(arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(averageArray([1, 2, 3, 4, 5])); // 3
```

54. **Write a program to find maximum element in array.**

```javascript
function findMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(findMax([3, 7, 2, 9, 5])); // 9
```

55. **Write a program to find minimum element in array.**

```javascript
function findMin(arr) {
  if (arr.length === 0) return undefined;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
console.log(findMin([3, 7, 2, 9, 5])); // 2
```

56. **Write a program to reverse array without built-in methods.**

```javascript
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5,4,3,2,1]
```

57. **Write a program to remove duplicates from array (basic loop logic).**

```javascript
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        found = true;
        break;
      }
    }
    if (!found) unique.push(arr[i]);
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1,2,3,4,5]
```

58. **Write a program to count frequency of elements in array.**

```javascript
function countFrequency(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (freq[element]) {
      freq[element]++;
    } else {
      freq[element] = 1;
    }
  }
  return freq;
}
console.log(countFrequency([1, 2, 2, 3, 3, 3, 4]));
// {1:1, 2:2, 3:3, 4:1}
```

59. **Write a program to merge two arrays manually.**

```javascript
function mergeArrays(arr1, arr2) {
  let merged = [];
  for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    merged.push(arr2[i]);
  }
  return merged;
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1,2,3,4,5,6]
```

60. **Write a program to check if array is palindrome.**

```javascript
function isPalindromeArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(isPalindromeArray([1, 2, 3, 2, 1])); // true
console.log(isPalindromeArray([1, 2, 3, 4, 5])); // false
```

61. **Write a program to rotate array left by one position.**

```javascript
function rotateLeft(arr) {
  if (arr.length <= 1) return arr;
  let rotated = [];
  for (let i = 1; i < arr.length; i++) {
    rotated.push(arr[i]);
  }
  rotated.push(arr[0]);
  return rotated;
}
console.log(rotateLeft([1, 2, 3, 4, 5])); // [2,3,4,5,1]
```

62. **Write a program to rotate array right by one position.**

```javascript
function rotateRight(arr) {
  if (arr.length <= 1) return arr;
  let rotated = [arr[arr.length - 1]];
  for (let i = 0; i < arr.length - 1; i++) {
    rotated.push(arr[i]);
  }
  return rotated;
}
console.log(rotateRight([1, 2, 3, 4, 5])); // [5,1,2,3,4]
```

63. **Write a program to find second largest element.**

```javascript
function secondLargest(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] < largest) {
      second = arr[i];
    }
  }

  return second === -Infinity ? null : second;
}
console.log(secondLargest([3, 7, 1, 9, 5])); // 7
```

64. **Write a program to find common elements between two arrays.**

```javascript
function commonElements(arr1, arr2) {
  let common = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        // Check if already added
        let alreadyAdded = false;
        for (let k = 0; k < common.length; k++) {
          if (common[k] === arr1[i]) {
            alreadyAdded = true;
            break;
          }
        }
        if (!alreadyAdded) common.push(arr1[i]);
      }
    }
  }
  return common;
}
console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3,4]
```

65. **Write a program to remove specific element from array.**

```javascript
function removeElement(arr, element) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== element) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeElement([1, 2, 3, 4, 3, 5], 3)); // [1,2,4,5]
```

66. **Write a program to insert element at specific index.**

```javascript
function insertAt(arr, index, element) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      result.push(element);
    }
    result.push(arr[i]);
  }
  if (index >= arr.length) {
    result.push(element);
  }
  return result;
}
console.log(insertAt([1, 2, 3, 4], 2, 99)); // [1,2,99,3,4]
```

67. **Write a program to flatten 2D array (manual nested loop).**

```javascript
function flattenArray(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flattened.push(arr[i][j]);
    }
  }
  return flattened;
}
console.log(
  flattenArray([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
); // [1,2,3,4,5,6]
```

68. **Write a program to separate even and odd numbers.**

```javascript
function separateEvenOdd(arr) {
  let evens = [];
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    } else {
      odds.push(arr[i]);
    }
  }
  return { evens, odds };
}
console.log(separateEvenOdd([1, 2, 3, 4, 5, 6]));
// { evens: [2,4,6], odds: [1,3,5] }
```

69. **Write a program to move all zeros to end.**

```javascript
function moveZerosToEnd(arr) {
  let result = [];
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else {
      result.push(arr[i]);
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }
  return result;
}
console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1,3,12,0,0]
```

70. **Write a program to sort array manually (basic bubble sort logic).**

```javascript
function bubbleSort(arr) {
  let sorted = [...arr];
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j] > sorted[j + 1]) {
        // Swap
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  return sorted;
}
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// [11,12,22,25,34,64,90]
```

71. **Write a program to find missing number in array of 1 to N.**

```javascript
function findMissingNumber(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let expectedSum = (n * (n + 1)) / 2;
  return expectedSum - sum;
}
console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3
```

72. **Write a program to check if two arrays are equal (manual comparison).**

```javascript
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(arraysEqual([1, 2, 3], [1, 2, 4])); // false
```

73. **Write a program to create copy of array without reference issue.**

```javascript
function copyArray(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy.push(arr[i]);
  }
  return copy;
}
let original = [1, 2, 3];
let copied = copyArray(original);
copied.push(4);
console.log(original); // [1,2,3]
console.log(copied); // [1,2,3,4]
```

74. **Write a program to remove all falsy values from array.**

```javascript
function removeFalsy(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeFalsy([0, 1, false, 2, "", 3, null, undefined, NaN]));
// [1,2,3]
```

75. **Write a small menu-driven array manager (add/remove/display).**

```javascript
function arrayManager() {
  let arr = [];

  return {
    add: function (element) {
      arr.push(element);
      console.log(`Added: ${element}`);
    },
    remove: function (index) {
      if (index >= 0 && index < arr.length) {
        let removed = arr.splice(index, 1);
        console.log(`Removed: ${removed}`);
      } else {
        console.log("Invalid index");
      }
    },
    display: function () {
      console.log("Array:", arr);
    },
    getArray: () => [...arr],
  };
}

const manager = arrayManager();
manager.add(10);
manager.add(20);
manager.add(30);
manager.display(); // Array: [10,20,30]
manager.remove(1);
manager.display(); // Array: [10,30]
```

---

# 16 - Arrays Methods

## Conceptual Understanding

1. **What are array methods in JavaScript?**
   - Built-in functions that operate on arrays to perform common operations like transformation, iteration, and manipulation.

2. **Why are array methods important?**
   - They provide efficient, readable ways to work with arrays without manual loops.

3. **What is the difference between mutating and non-mutating methods?**
   - Mutating: Modify original array
   - Non-mutating: Return new array, leave original unchanged

4. **Which array methods modify original array?**
   - `push`, `pop`, `shift`, `unshift`, `splice`, `reverse`, `sort`, `fill`

5. **Which array methods return new array?**
   - `map`, `filter`, `slice`, `concat`, `flat`, `flatMap`

6. **What is callback function in array methods?**
   - Function passed as argument that's called for each element during iteration.

7. **What is higher-order function?**
   - Function that takes another function as argument or returns a function.

8. **What is difference between `forEach` and `map`?**
   - `forEach`: Iterates, returns undefined
   - `map`: Iterates, returns new array of transformed values

9. **What is difference between `map` and `filter`?**
   - `map`: Transforms each element
   - `filter`: Selects elements based on condition

10. **What is difference between `find` and `filter`?**
    - `find`: Returns first matching element (or undefined)
    - `filter`: Returns array of all matching elements

## Iteration Methods

11. **What does `forEach()` do?**
    - Executes function for each array element; doesn't return anything.

12. **Does `forEach()` return anything?**
    - Returns `undefined`.

13. **What does `map()` return?**
    - New array with results of calling function on every element.

14. **When should `map()` be used?**
    - When you need to transform each element and get new array.

15. **What does `filter()` return?**
    - New array with elements that pass the test.

16. **What does `find()` return?**
    - First element that satisfies condition, or `undefined`.

17. **What does `some()` do?**
    - Returns `true` if at least one element passes test.

18. **What does `every()` do?**
    - Returns `true` if all elements pass test.

19. **What is difference between `some()` and `every()`?**
    - `some`: At least one true → true
    - `every`: All true → true

20. **What is signature of callback in these methods?**
    - `(element, index, array) => {}`

## Transformation & Aggregation

21. **What does `reduce()` do?**
    - Reduces array to single value by applying accumulator function.

22. **What are parameters of `reduce()`?**
    - `reduce(callback(accumulator, currentValue, index, array), initialValue)`

23. **What is accumulator?**
    - Value accumulated from previous iterations; returned at end.

24. **What happens if initial value is not provided in reduce?**
    - First element used as initial accumulator, iteration starts from second.

25. **How to sum array using reduce?**

```javascript
const sum = arr.reduce((acc, curr) => acc + curr, 0);
```

26. **How to flatten array using reduce?**

```javascript
const flattened = arr.reduce((acc, curr) => acc.concat(curr), []);
```

27. **How to count frequency using reduce?**

```javascript
const freq = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
```

28. **What does `flat()` do?**
    - Creates new array with sub-array elements concatenated up to specified depth.

29. **What does `flatMap()` do?**
    - Maps each element then flattens result (depth 1).

30. **What is difference between `flat()` and `flatMap()`?**
    - `flat`: Just flattens
    - `flatMap`: Maps then flattens (more efficient than map + flat)

## Adding & Removing Elements

31. **What does `push()` do?**
    - Adds elements to end, returns new length (mutating).

32. **What does `pop()` do?**
    - Removes last element, returns removed element (mutating).

33. **What does `shift()` do?**
    - Removes first element, returns removed element (mutating).

34. **What does `unshift()` do?**
    - Adds elements to beginning, returns new length (mutating).

35. **What does `splice()` do?**
    - Changes array by removing/replacing/adding elements (mutating).

36. **What does `slice()` do?**
    - Returns shallow copy of portion of array (non-mutating).

37. **What is difference between `slice()` and `splice()`?**
    - `slice`: Returns new array, original unchanged
    - `splice`: Modifies original, returns removed elements

38. **What does `concat()` do?**
    - Returns new array combining arrays (non-mutating).

39. **What does `fill()` do?**
    - Fills array with static value (mutating).

40. **What does `copyWithin()` do?**
    - Shallow copies part of array to another location (mutating).

## Searching & Sorting

41. **What does `indexOf()` do?**
    - Returns first index of element, or -1 if not found.

42. **What does `lastIndexOf()` do?**
    - Returns last index of element.

43. **What does `includes()` do?**
    - Returns boolean if element exists.

44. **What does `sort()` do by default?**
    - Converts elements to strings, sorts lexicographically (mutating).

45. **Why does `sort()` behave unexpectedly for numbers?**
    - Default sort uses string comparison; `10` comes before `2`.

46. **How to sort numbers correctly?**
    - `arr.sort((a, b) => a - b)` for ascending, `b - a` for descending.

47. **What does `reverse()` do?**
    - Reverses array in place (mutating).

48. **What does `join()` do?**
    - Joins array elements into string with separator.

49. **What does `toString()` do on array?**
    - Converts array to string (comma-separated).

50. **What is difference between `join()` and `toString()`?**
    - `join`: Custom separator
    - `toString`: Always comma-separated

## Debug Thinking

51. **What is output of:**

```javascript
[1, 2, 3].map((x) => x * 2);
```

    - `[2,4,6]`

52. **What is output of:**

```javascript
[1, 2, 3].forEach((x) => x * 2);
```

    - `undefined` (forEach returns nothing)

53. **Why does `forEach()` not allow break?**
    - `forEach` always iterates entire array; use `for...of` or `some()` for early exit.

54. **What is output of:**

```javascript
[1, 2, 3].reduce((acc, curr) => acc + curr);
```

    - `6` (1+2+3)

55. **What happens if reduce is used on empty array without initial value?**
    - TypeError: Reduce of empty array with no initial value.

56. **What is output of:**

```javascript
[10, 2, 1].sort();
```

    - `[1,10,2]` (string comparison: "1" < "10" < "2")

57. **Why does above not sort numerically?**
    - Default sort converts to strings; numeric sort needs compare function.

58. **What is output of:**

```javascript
const arr = [1, 2, 3];
arr.splice(1, 1);
console.log(arr);
```

    - `[1,3]` (removed element at index 1)

59. **What is output of:**

```javascript
const arr = [1, 2, 3];
const newArr = arr.slice(1);
console.log(arr, newArr);
```

    - `arr: [1,2,3]`, `newArr: [2,3]` (slice doesn't modify original)

60. **What happens if callback does not return anything in map?**
    - Element becomes `undefined` in new array.

## Coding Practice (Basic to Advanced)

61. **Double all elements using map.**

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2,4,6,8,10]
```

62. **Filter even numbers using filter.**

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // [2,4,6]
```

63. **Find first number greater than 10.**

```javascript
const numbers = [5, 8, 12, 3, 15];
const first = numbers.find((n) => n > 10);
console.log(first); // 12
```

64. **Check if all numbers are positive.**

```javascript
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every((n) => n > 0);
console.log(allPositive); // true

const mixed = [1, -2, 3];
console.log(mixed.every((n) => n > 0)); // false
```

65. **Check if any number is negative.**

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasNegative = numbers.some((n) => n < 0);
console.log(hasNegative); // false

const mixed = [1, -2, 3];
console.log(mixed.some((n) => n < 0)); // true
```

66. **Calculate sum using reduce.**

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
```

67. **Calculate product using reduce.**

```javascript
const numbers = [1, 2, 3, 4, 5];
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 120
```

68. **Flatten 2D array using flat.**

```javascript
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = nested.flat();
console.log(flattened); // [1,2,3,4,5,6]
```

69. **Flatten 2D array using reduce.**

```javascript
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened); // [1,2,3,4,5,6]
```

70. **Remove duplicates using filter.**

```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = numbers.filter(
  (value, index, self) => self.indexOf(value) === index,
);
console.log(unique); // [1,2,3,4,5]
```

71. **Count frequency of elements using reduce.**

```javascript
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequency = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(frequency); // {apple: 3, banana: 2, orange: 1}
```

72. **Sort array of numbers correctly.**

```javascript
const numbers = [10, 2, 5, 1, 8];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1,2,5,8,10]

// Descending
numbers.sort((a, b) => b - a);
console.log(numbers); // [10,8,5,2,1]
```

73. **Sort array of objects by property.**

```javascript
const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
users.sort((a, b) => a.age - b.age);
console.log(users);
// [{name:'Alice',age:25}, {name:'John',age:30}, {name:'Bob',age:35}]
```

74. **Group objects by property using reduce.**

```javascript
const people = [
  { name: "John", city: "NYC" },
  { name: "Alice", city: "LA" },
  { name: "Bob", city: "NYC" },
  { name: "Charlie", city: "LA" },
];
const grouped = people.reduce((acc, person) => {
  if (!acc[person.city]) {
    acc[person.city] = [];
  }
  acc[person.city].push(person);
  return acc;
}, {});
console.log(grouped);
// {
//   NYC: [{name:'John',city:'NYC'}, {name:'Bob',city:'NYC'}],
//   LA: [{name:'Alice',city:'LA'}, {name:'Charlie',city:'LA'}]
// }
```

75. **Convert array of strings to uppercase using map.**

```javascript
const words = ["hello", "world", "javascript"];
const uppercase = words.map((word) => word.toUpperCase());
console.log(uppercase); // ['HELLO', 'WORLD', 'JAVASCRIPT']
```

76. **Remove falsy values using filter.**

```javascript
const mixed = [0, 1, false, 2, "", 3, null, undefined, NaN, 4];
const truthy = mixed.filter(Boolean);
console.log(truthy); // [1,2,3,4]
```

77. **Find second largest number using array methods.**

```javascript
function secondLargest(arr) {
  const unique = [...new Set(arr)];
  if (unique.length < 2) return null;
  unique.sort((a, b) => b - a);
  return unique[1];
}
console.log(secondLargest([3, 7, 1, 9, 5, 9])); // 7
```

78. **Create custom map() function.**

```javascript
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}
console.log(myMap([1, 2, 3], (x) => x * 2)); // [2,4,6]
```

79. **Create custom filter() function.**

```javascript
function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(myFilter([1, 2, 3, 4, 5], (x) => x % 2 === 0)); // [2,4]
```

80. **Create custom reduce() function.**

```javascript
function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}
console.log(myReduce([1, 2, 3, 4, 5], (acc, curr) => acc + curr, 0)); // 15
```

---

# 17 - Objects Basics

## Conceptual Understanding

1. **What is an object in JavaScript?**
   - A collection of key-value pairs where keys are strings (or symbols) and values can be any data type.

2. **Why do we need objects?**
   - To represent real-world entities with properties and behaviors, organize related data.

3. **How are objects different from arrays?**
   - Arrays: Ordered, numeric indices
   - Objects: Unordered, string keys

4. **Are objects primitive or reference types?**
   - Reference types.

5. **How are objects stored in memory?**
   - Reference in stack, actual object data in heap.

6. **What is a key-value pair?**
   - Property name (key) associated with a value.

7. **What type can object keys be?**
   - Strings or symbols (other types coerced to strings).

8. **What happens if object keys are numbers?**
   - Coerced to strings automatically.

9. **What is dynamic nature of objects?**
   - Properties can be added, modified, or deleted at runtime.

10. **Can objects store different data types as values?**
    - Yes, values can be any type (primitives, arrays, objects, functions).

## Object Creation

11. **How do you create an object using object literal?**
    - `const obj = { key: 'value' };`

12. **How do you create an object using `new Object()`?**
    - `const obj = new Object(); obj.key = 'value';`

13. **What is difference between `{}` and `new Object()`?**
    - Same result, but literal syntax is preferred (shorter, clearer).

14. **How do you access object properties?**
    - Dot notation: `obj.key`
    - Bracket notation: `obj['key']`

15. **What is dot notation?**
    - Access property with dot: `object.propertyName`

16. **What is bracket notation?**
    - Access property with brackets: `object['propertyName']`

17. **When should we use bracket notation?**
    - When property name has spaces/special chars, or is dynamic (variable).

18. **How do you add new property to object?**
    - `obj.newKey = value` or `obj['newKey'] = value`

19. **How do you update existing property?**
    - Assign new value to existing key.

20. **How do you delete property from object?**
    - `delete obj.key`

## Object Behavior & Nature

21. **What happens when you access non-existing property?**
    - Returns `undefined`.

22. **What is difference between `undefined` property and non-existing property?**
    - Non-existing: Property doesn't exist
    - Property with value undefined: Property exists but value is undefined

23. **How does object reference copying work?**
    - Assignment copies reference, not object; both variables point to same object.

24. **What happens when you assign one object to another variable?**
    - Both reference same object; changes through one affect the other.

25. **Why modifying one object affects another reference?**
    - Because they point to same memory location.

26. **How to create shallow copy of object?**
    - `Object.assign({}, obj)` or `{...obj}`

27. **What is difference between shallow copy and deep copy? (Basic intro only.)**
    - Shallow: Copies top-level properties only
    - Deep: Recursively copies all nested objects

28. **What is `Object.assign()`?**
    - Copies properties from source objects to target object.

29. **What is spread operator in objects?**
    - `{...obj}` creates shallow copy with spread syntax.

30. **How to check if property exists in object?**
    - `'key' in obj` or `obj.hasOwnProperty('key')`

## Property Handling

31. **What is `in` operator?**
    - Checks if property exists in object (including prototype chain).

32. **What is `hasOwnProperty()`?**
    - Checks if property exists directly on object (not inherited).

33. **What is difference between `in` and `hasOwnProperty()`?**
    - `in`: Includes inherited properties
    - `hasOwnProperty()`: Only own properties

34. **What is enumerable property?**
    - Property that appears in `for...in` loops and `Object.keys()`.

35. **What is difference between own property and inherited property?**
    - Own: Directly on object
    - Inherited: From prototype chain

36. **How to iterate over object properties?**
    - `for...in` loop, `Object.keys()`, `Object.values()`, `Object.entries()`

37. **What is `Object.keys()`?**
    - Returns array of object's own enumerable property names.

38. **What is `Object.values()`?**
    - Returns array of object's own enumerable property values.

39. **What is `Object.entries()`?**
    - Returns array of key-value pairs as [key, value] arrays.

40. **What is difference between `for...in` and `Object.keys()`?**
    - `for...in`: Iterates over enumerable properties including inherited
    - `Object.keys()`: Returns array of own enumerable keys

## Debug Thinking

41. **What is output of:**

```javascript
const obj = { a: 1 };
obj.b = 2;
console.log(obj);
```

    - `{ a: 1, b: 2 }`

42. **What is output of:**

```javascript
const obj = {};
console.log(obj.x);
```

    - `undefined`

43. **What is output of:**

```javascript
const obj = { a: 1 };
delete obj.a;
console.log(obj);
```

    - `{}`

44. **What is output of:**

```javascript
const a = { x: 1 };
const b = a;
b.x = 10;
console.log(a.x);
```

    - `10` (reference copy)

45. **Why does above print 10?**
    - `a` and `b` reference same object.

46. **What is output of:**

```javascript
const obj = { a: 1 };
console.log("a" in obj);
```

    - `true`

47. **What is output of:**

```javascript
const obj = Object.create({ a: 1 });
console.log(obj.hasOwnProperty("a"));
```

    - `false` (a is inherited, not own)

48. **What is difference between:**

```javascript
obj.prop;
```

and

```javascript
obj["prop"];
```

    - Same result; bracket notation allows dynamic keys.

49. **What happens if property name has space?**
    - Must use bracket notation: `obj["my prop"]`

50. **What happens if you use object as key inside another object?**
    - Object converted to string `"[object Object]"`.

## Coding Practice (Basic to Advanced)

51. **Create an object representing a student.**

```javascript
const student = {
  name: "John Doe",
  age: 20,
  grade: "A",
  subjects: ["Math", "Science", "English"],
};
console.log(student);
```

52. **Add new property to student object.**

```javascript
const student = { name: "John", age: 20 };
student.city = "New York";
student["country"] = "USA";
console.log(student); // {name: "John", age: 20, city: "New York", country: "USA"}
```

53. **Update property value.**

```javascript
const student = { name: "John", age: 20 };
student.age = 21;
console.log(student.age); // 21
```

54. **Delete a property.**

```javascript
const student = { name: "John", age: 20, city: "NYC" };
delete student.city;
console.log(student); // {name: "John", age: 20}
```

55. **Write a function that prints all keys of object.**

```javascript
function printKeys(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}
printKeys({ a: 1, b: 2, c: 3 }); // a, b, c
```

56. **Write a function that prints all values of object.**

```javascript
function printValues(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(obj[key]);
    }
  }
}
printValues({ a: 1, b: 2, c: 3 }); // 1, 2, 3
```

57. **Write a function that counts number of properties.**

```javascript
function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) count++;
  }
  return count;
}
console.log(countProperties({ a: 1, b: 2, c: 3 })); // 3
```

58. **Write a function to check if object is empty.**

```javascript
function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false
```

59. **Write a function to merge two objects.**

```javascript
function mergeObjects(obj1, obj2) {
  const merged = {};
  // Copy obj1 properties
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      merged[key] = obj1[key];
    }
  }
  // Copy obj2 properties (overwrites if same key)
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      merged[key] = obj2[key];
    }
  }
  return merged;
}
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); // {a:1, b:3, c:4}
```

60. **Write a function to clone object.**

```javascript
function cloneObject(obj) {
  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = obj[key];
    }
  }
  return clone;
}
const original = { a: 1, b: 2 };
const cloned = cloneObject(original);
cloned.a = 10;
console.log(original.a); // 1
console.log(cloned.a); // 10
```

61. **Write a function to deep clone object (basic recursive idea).**

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 10;
console.log(original.b.c); // 2 (unchanged)
console.log(cloned.b.c); // 10
```

62. **Write a function to check if property exists.**

```javascript
function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}
console.log(hasProperty({ a: 1, b: 2 }, "a")); // true
console.log(hasProperty({ a: 1, b: 2 }, "c")); // false
```

63. **Write a function to convert object to array of keys.**

```javascript
function getKeys(obj) {
  const keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}
console.log(getKeys({ a: 1, b: 2, c: 3 })); // ['a','b','c']
```

64. **Write a function to convert object to array of values.**

```javascript
function getValues(obj) {
  const values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}
console.log(getValues({ a: 1, b: 2, c: 3 })); // [1,2,3]
```

65. **Write a function to swap keys and values.**

```javascript
function swapKeysValues(obj) {
  const swapped = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      swapped[obj[key]] = key;
    }
  }
  return swapped;
}
console.log(swapKeysValues({ a: 1, b: 2, c: 3 })); // {1:'a', 2:'b', 3:'c'}
```

66. **Write a function to remove specific property.**

```javascript
function removeProperty(obj, prop) {
  const result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && key !== prop) {
      result[key] = obj[key];
    }
  }
  return result;
}
console.log(removeProperty({ a: 1, b: 2, c: 3 }, "b")); // {a:1, c:3}
```

67. **Write a function to freeze object.**

```javascript
function freezeObject(obj) {
  const frozen = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      Object.defineProperty(frozen, key, {
        value: obj[key],
        writable: false,
        enumerable: true,
        configurable: false,
      });
    }
  }
  return frozen;
}
const frozen = freezeObject({ a: 1 });
frozen.a = 2; // Fails silently or throws in strict mode
console.log(frozen.a); // 1
```

68. **Write a function to prevent adding new properties.**

```javascript
function preventExtensions(obj) {
  const sealed = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      sealed[key] = obj[key];
    }
  }
  // Make non-extensible
  Object.preventExtensions(sealed);
  return sealed;
}
const obj = preventExtensions({ a: 1 });
obj.b = 2; // Fails silently
console.log(obj.b); // undefined
```

69. **Write a function to iterate nested object.**

```javascript
function iterateNested(obj, path = "") {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const currentPath = path ? `${path}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        iterateNested(obj[key], currentPath);
      } else {
        console.log(`${currentPath}: ${obj[key]}`);
      }
    }
  }
}
iterateNested({ a: 1, b: { c: 2, d: { e: 3 } } });
// a: 1
// b.c: 2
// b.d.e: 3
```

70. **Write a small object-based contact manager (add/remove/search).**

```javascript
function createContactManager() {
  const contacts = {};

  return {
    add: function (name, phone) {
      contacts[name] = phone;
      console.log(`Added ${name}`);
    },
    remove: function (name) {
      if (contacts[name]) {
        delete contacts[name];
        console.log(`Removed ${name}`);
      } else {
        console.log(`${name} not found`);
      }
    },
    search: function (name) {
      return contacts[name] || "Not found";
    },
    getAll: function () {
      return { ...contacts };
    },
  };
}
const manager = createContactManager();
manager.add("John", "123-456-7890");
manager.add("Alice", "987-654-3210");
console.log(manager.search("John")); // "123-456-7890"
manager.remove("John");
console.log(manager.getAll()); // {Alice: "987-654-3210"}
```

---

# 18 - Objects Methods

## Conceptual Understanding

1. **What is a method in JavaScript object?**
   - A function that is a property of an object.

2. **How is method different from normal function?**
   - Method is associated with an object and can use `this` to access object properties.

3. **How does `this` behave inside object method?**
   - Refers to the object that owns the method (when called as method).

4. **What happens if we use arrow function as object method?**
   - `this` refers to outer scope, not the object (generally not recommended).

5. **Why are regular functions preferred for object methods?**
   - They have their own `this` that binds to the object.

6. **Can methods access other properties of same object?**
   - Yes, using `this.propertyName`.

7. **What is shorthand method syntax?**
   - `methodName() {}` instead of `methodName: function() {}`

8. **What is difference between:**

```javascript
const obj = {
  greet: function () {},
};
```

and

```javascript
const obj = {
  greet() {},
};
```

    - Same functionality; second is shorthand (ES6).

9. **Can object methods be reassigned?**
   - Yes, methods are properties and can be changed.

10. **What is method borrowing?**
    - Using one object's method on another object using `call/apply/bind`.

## this & Method Behavior

11. **What does `this` refer to inside method?**
    - The object that calls the method (when called as method).

12. **What happens if method is assigned to variable?**
    - Loses its `this` binding; becomes regular function.

13. **Why does method lose `this` context sometimes?**
    - When passed as callback, called as standalone function.

14. **How can we fix lost `this`?**
    - Using `bind()`, arrow functions, or storing `this` reference.

15. **What is difference between implicit binding and explicit binding in methods?**
    - Implicit: Called as method (obj.method())
    - Explicit: Using call/apply/bind

16. **What happens if arrow function is used inside method?**
    - Captures `this` of method, works correctly.

17. **What is difference between arrow inside method vs arrow as method?**
    - Arrow inside method: Captures method's `this` (good)
    - Arrow as method: Captures outer `this` (bad)

18. **Can nested function inside method access `this`?**
    - No, nested function has its own `this`; use arrow or `that = this`.

19. **How to preserve `this` inside nested function?**
    - Arrow function, `bind()`, or `const self = this`.

20. **What is common bug with `this` in callbacks?**
    - Losing `this` when passing method as callback.

## Built-in Object Methods

21. **What is `Object.keys()`?**
    - Returns array of object's own enumerable property names.

22. **What is `Object.values()`?**
    - Returns array of object's own enumerable property values.

23. **What is `Object.entries()`?**
    - Returns array of [key, value] pairs.

24. **What is `Object.assign()`?**
    - Copies enumerable properties from source objects to target.

25. **What is `Object.freeze()`?**
    - Prevents adding/removing/modifying properties (shallow).

26. **What is `Object.seal()`?**
    - Prevents adding/removing properties, but existing can be modified.

27. **What is `Object.preventExtensions()`?**
    - Prevents adding new properties (can delete/modify existing).

28. **What is difference between freeze and seal?**
    - Freeze: Can't modify existing properties
    - Seal: Can modify existing properties

29. **What is difference between seal and preventExtensions?**
    - Seal: Can't delete properties
    - preventExtensions: Can delete properties

30. **What does `Object.create()` do?**
    - Creates new object with specified prototype.

## Property Descriptors (Basic Level)

31. **What is property descriptor?**
    - Object that describes attributes of a property.

32. **What are writable, enumerable, configurable?**
    - writable: Can value be changed
    - enumerable: Appears in loops/Object.keys
    - configurable: Can attributes be changed, property deleted

33. **How to get property descriptor?**
    - `Object.getOwnPropertyDescriptor(obj, prop)`

34. **What is `Object.defineProperty()`?**
    - Defines new property or modifies existing with descriptor.

35. **How to make property read-only?**
    - Set `writable: false`.

36. **How to make property non-enumerable?**
    - Set `enumerable: false`.

37. **What happens if configurable is false?**
    - Can't change descriptor, can't delete property.

38. **Can frozen object properties be changed?**
    - No, they're read-only.

39. **What is difference between shallow freeze and deep freeze?**
    - Shallow: Only top-level properties
    - Deep: Recursively freezes nested objects

40. **Why property descriptors are important?**
    - For fine-grained control over property behavior.

## Debug Thinking

41. **What is output of:**

```javascript
const obj = {
  value: 10,
  getValue() {
    return this.value;
  },
};
console.log(obj.getValue());
```

    - `10`

42. **What happens if:**

```javascript
const fn = obj.getValue;
console.log(fn());
```

    - `undefined` (loses this)

43. **Why does above not work as expected?**
    - Function called standalone, `this` is global/undefined.

44. **What happens if we bind the method?**

```javascript
const boundFn = obj.getValue.bind(obj);
console.log(boundFn()); // 10
```

45. **What is output of:**

```javascript
const obj = {
  value: 10,
  getValue: () => this.value,
};
console.log(obj.getValue());
```

    - `undefined` (arrow function, this is outer)

46. **What is output of:**

```javascript
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;
console.log(obj.a);
```

    - `1` (freeze prevents modification)

47. **What happens if we add new property after freeze?**
    - Fails silently (or throws in strict mode).

48. **What is difference between freeze and seal in behavior?**

```javascript
const frozen = { a: 1 };
Object.freeze(frozen);
frozen.a = 2; // No effect
frozen.b = 3; // No effect
delete frozen.a; // No effect

const sealed = { a: 1 };
Object.seal(sealed);
sealed.a = 2; // Works
sealed.b = 3; // No effect
delete sealed.a; // No effect
```

49. **What is output of:**

```javascript
const obj = { a: 1 };
Object.seal(obj);
delete obj.a;
console.log(obj.a);
```

    - `1` (seal prevents deletion)

50. **What happens when property is non-enumerable?**
    - Doesn't appear in `for...in` or `Object.keys()`.

## Coding Practice (Basic to Advanced)

51. **Create an object with multiple methods.**

```javascript
const calculator = {
  value: 0,
  add(n) {
    this.value += n;
    return this;
  },
  subtract(n) {
    this.value -= n;
    return this;
  },
  multiply(n) {
    this.value *= n;
    return this;
  },
  getResult() {
    return this.value;
  },
  reset() {
    this.value = 0;
    return this;
  },
};
console.log(calculator.add(5).multiply(2).subtract(3).getResult()); // 7
```

52. **Create object with shorthand method syntax.**

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  greet() {
    return `Hello, I'm ${this.fullName()}`;
  },
};
console.log(person.greet()); // "Hello, I'm John Doe"
```

53. **Create a method that updates object property.**

```javascript
const counter = {
  count: 0,
  increment() {
    this.count++;
    return this.count;
  },
  decrement() {
    this.count--;
    return this.count;
  },
  reset() {
    this.count = 0;
    return this.count;
  },
};
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
```

54. **Create a method that uses another method inside same object.**

```javascript
const rectangle = {
  width: 10,
  height: 5,
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
  description() {
    return `Rectangle: ${this.width}x${this.height}, area: ${this.area()}, perimeter: ${this.perimeter()}`;
  },
};
console.log(rectangle.description());
// "Rectangle: 10x5, area: 50, perimeter: 30"
```

55. **Demonstrate method borrowing using call.**

```javascript
const person1 = {
  name: "Alice",
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};
const person2 = {
  name: "Bob",
};
console.log(person1.greet.call(person2)); // "Hi, I'm Bob"
```

56. **Fix lost `this` problem using bind.**

```javascript
const user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
const sayHi = user.sayHi.bind(user);
setTimeout(sayHi, 1000); // After 1s: "Hi, John"
```

57. **Write a function that freezes object.**

```javascript
function deepFreeze(obj) {
  Object.freeze(obj);
  for (let key in obj) {
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Object.isFrozen(obj[key])
    ) {
      deepFreeze(obj[key]);
    }
  }
  return obj;
}
const obj = { a: 1, b: { c: 2 } };
deepFreeze(obj);
obj.b.c = 3; // No effect
console.log(obj.b.c); // 2
```

58. **Write a function that seals object.**

```javascript
function sealObject(obj) {
  Object.seal(obj);
  return obj;
}
const obj = { a: 1 };
sealObject(obj);
obj.a = 2; // Works
obj.b = 3; // No effect
delete obj.a; // No effect
console.log(obj); // { a: 2 }
```

59. **Write a function that deeply freezes object (basic recursion).**

```javascript
function deepFreeze(obj) {
  const propNames = Object.getOwnPropertyNames(obj);
  for (let name of propNames) {
    let value = obj[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(obj);
}
const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
deepFreeze(obj);
obj.b.d.e = 4; // No effect
console.log(obj.b.d.e); // 3
```

60. **Write a function that lists only enumerable properties.**

```javascript
function listEnumerable(obj) {
  const result = {};
  for (let key in obj) {
    if (obj.propertyIsEnumerable(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
const obj = {};
Object.defineProperty(obj, "a", { value: 1, enumerable: true });
Object.defineProperty(obj, "b", { value: 2, enumerable: false });
console.log(listEnumerable(obj)); // { a: 1 }
```

61. **Write a function that converts object to key-value pairs.**

```javascript
function toKeyValuePairs(obj) {
  const pairs = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      pairs.push([key, obj[key]]);
    }
  }
  return pairs;
}
console.log(toKeyValuePairs({ a: 1, b: 2, c: 3 }));
// [['a',1], ['b',2], ['c',3]]
```

62. **Write a method inside object that tracks number of calls.**

```javascript
const tracker = {
  count: 0,
  call() {
    this.count++;
    console.log(`Called ${this.count} times`);
  },
  reset() {
    this.count = 0;
  },
};
tracker.call(); // Called 1 times
tracker.call(); // Called 2 times
tracker.call(); // Called 3 times
```

63. **Create a simple calculator object with methods.**

```javascript
const simpleCalc = {
  result: 0,
  add(x) {
    this.result += x;
    return this;
  },
  subtract(x) {
    this.result -= x;
    return this;
  },
  multiply(x) {
    this.result *= x;
    return this;
  },
  divide(x) {
    if (x !== 0) {
      this.result /= x;
    }
    return this;
  },
  clear() {
    this.result = 0;
    return this;
  },
  getResult() {
    return this.result;
  },
};
console.log(simpleCalc.add(10).subtract(3).multiply(2).getResult()); // 14
```

64. **Create a user object with login/logout methods.**

```javascript
const user = {
  username: "",
  loggedIn: false,
  login(name) {
    this.username = name;
    this.loggedIn = true;
    console.log(`${this.username} logged in`);
  },
  logout() {
    console.log(`${this.username} logged out`);
    this.username = "";
    this.loggedIn = false;
  },
  status() {
    return this.loggedIn ? `${this.username} is online` : "Offline";
  },
};
user.login("John"); // John logged in
console.log(user.status()); // John is online
user.logout(); // John logged out
console.log(user.status()); // Offline
```

65. **Create a counter object with increment/decrement methods.**

```javascript
const counter = {
  count: 0,
  increment(step = 1) {
    this.count += step;
    return this.count;
  },
  decrement(step = 1) {
    this.count -= step;
    return this.count;
  },
  reset() {
    this.count = 0;
    return this.count;
  },
  getCount() {
    return this.count;
  },
};
console.log(counter.increment()); // 1
console.log(counter.increment(5)); // 6
console.log(counter.decrement(2)); // 4
console.log(counter.reset()); // 0
```

66. **Demonstrate property descriptor usage.**

```javascript
const person = {};
Object.defineProperty(person, "name", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: false,
});
console.log(person.name); // John
person.name = "Jane"; // Fails silently
console.log(person.name); // John

Object.defineProperty(person, "age", {
  value: 30,
  writable: true,
  enumerable: false,
  configurable: true,
});
console.log(Object.keys(person)); // ['name'] (age not enumerable)
```

67. **Create read-only property using defineProperty.**

```javascript
function createReadOnly(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    value: value,
    writable: false,
    enumerable: true,
    configurable: false,
  });
}
const config = {};
createReadOnly(config, "API_KEY", "abc123");
console.log(config.API_KEY); // abc123
config.API_KEY = "newkey"; // No effect
console.log(config.API_KEY); // abc123
```

68. **Create non-enumerable property.**

```javascript
function createHiddenProperty(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    value: value,
    enumerable: false,
    writable: true,
    configurable: true,
  });
}
const user = { name: "John" };
createHiddenProperty(user, "password", "secret123");
console.log(Object.keys(user)); // ['name']
console.log(user.password); // secret123
```

69. **Build simple settings manager using object methods.**

```javascript
const settings = {
  data: {
    theme: "light",
    fontSize: 14,
    language: "en",
  },
  get(key) {
    return this.data[key];
  },
  set(key, value) {
    this.data[key] = value;
    return this;
  },
  getAll() {
    return { ...this.data };
  },
  reset() {
    this.data = {
      theme: "light",
      fontSize: 14,
      language: "en",
    };
    return this;
  },
};
settings.set("theme", "dark").set("fontSize", 16);
console.log(settings.getAll()); // {theme:'dark', fontSize:16, language:'en'}
```

70. **Create small banking system object with deposit/withdraw methods.**

```javascript
const bankAccount = {
  accountNumber: "",
  balance: 0,
  createAccount(number, initialBalance = 0) {
    this.accountNumber = number;
    this.balance = initialBalance;
    console.log(`Account ${number} created with balance $${initialBalance}`);
    return this;
  },
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
    return this;
  },
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Insufficient funds");
    }
    return this;
  },
  getBalance() {
    return `Balance: $${this.balance}`;
  },
  transfer(amount, targetAccount) {
    if (amount > 0 && amount <= this.balance) {
      this.withdraw(amount);
      targetAccount.deposit(amount);
      console.log(`Transferred $${amount} to ${targetAccount.accountNumber}`);
    }
    return this;
  },
};
const acc1 = Object.create(bankAccount).createAccount("12345", 1000);
const acc2 = Object.create(bankAccount).createAccount("67890", 500);
acc1.deposit(200).withdraw(100);
acc1.transfer(300, acc2);
console.log(acc1.getBalance()); // Balance: $800
console.log(acc2.getBalance()); // Balance: $800
```

---

# 19 - Object Destructuring

## Conceptual Understanding

1. **What is object destructuring?**
   - A syntax that extracts properties from objects into variables.

2. **Why was destructuring introduced in ES6?**
   - To provide a concise way to extract multiple properties and avoid repetitive code.

3. **What problem does destructuring solve?**
   - Reduces boilerplate code when accessing object properties.

4. **How is destructuring different from normal property access?**
   - Can extract multiple properties in one statement, assign to variables with different names.

5. **Is destructuring shallow or deep?**
   - Shallow by default; nested objects require nested destructuring.

6. **Can we destructure non-existing property?**
   - Yes, results in `undefined`.

7. **What happens if property does not exist during destructuring?**
   - Variable gets value `undefined`.

8. **Can destructuring rename variables?**
   - Yes, using `property: newName` syntax.

9. **Can we assign default values in destructuring?**
   - Yes, using `property = defaultValue`.

10. **Is order important in object destructuring?**
    - No, objects are unordered; matching is by property name, not position.

## Basic Syntax

11. **What is basic syntax of object destructuring?**
    - `const { prop1, prop2 } = object;`

12. **How do you extract single property?**
    - `const { prop } = obj;`

13. **How do you extract multiple properties?**
    - `const { a, b, c } = obj;`

14. **How do you rename property during destructuring?**
    - `const { originalName: newName } = obj;`

15. **How do you assign default value?**
    - `const { prop = defaultValue } = obj;`

16. **What happens if default value is not needed?**
    - Ignored; actual value used.

17. **Can we destructure into existing variables?**
    - Yes, but need parentheses: `({ prop } = obj);`

18. **How do you destructure nested object?**
    - `const { outer: { inner } } = obj;`

19. **What is deep destructuring?**
    - Destructuring nested objects at multiple levels.

20. **What happens if nested property is undefined?**
    - Error (can't read property of undefined); use defaults or optional chaining.

## Advanced Patterns

21. **How to destructure in function parameters?**
    - `function func({ prop1, prop2 }) { }`

22. **What is benefit of destructuring in parameters?**
    - Clearly shows expected properties, can set defaults.

23. **How to provide default object during parameter destructuring?**
    - `function func({ a, b } = {}) { }`

24. **How to avoid error when destructuring undefined?**
    - Provide default object: `function func(obj = {}) { const { prop } = obj; }`

25. **What is rest property in object destructuring?**
    - `...rest` collects remaining properties into new object.

26. **How to collect remaining properties using rest?**
    - `const { a, b, ...rest } = obj;`

27. **What is difference between spread and rest in objects?**
    - Rest: Collects remaining properties (in destructuring)
    - Spread: Expands properties (in object literal)

28. **Can we destructure arrays inside object?**
    - Yes: `const { arr: [first] } = obj;`

29. **Can we destructure object inside array?**
    - Yes: `const [{ prop }] = arr;`

30. **How destructuring improves readability?**
    - Makes it clear which properties are being used.

## Destructuring & Functions

31. **What happens when destructuring function return object?**
    - `const { prop } = functionThatReturnsObject();`

32. **How to destructure inside arrow function?**
    - `const func = ({ prop }) => prop;`

33. **How to rename destructured variables in function?**
    - `function func({ prop: renamed }) { }`

34. **What happens if destructured variable name conflicts?**
    - Can rename to avoid conflict.

35. **How destructuring helps avoid repeated object access?**
    - Extract once, use directly.

36. **How destructuring is used in React props? (Basic idea only.)**
    - `function Component({ prop1, prop2 }) { }`

37. **Can destructuring improve performance?**
    - Slightly by reducing property lookups, but mainly readability.

38. **What is common mistake while destructuring?**
    - Forgetting that destructuring undefined throws error.

39. **Can we destructure null?**
    - Error: cannot destructure property of null.

40. **What happens if destructuring null or undefined?**
    - TypeError.

## Debug Thinking

41. **What is output of:**

```javascript
const obj = { a: 1, b: 2 };
const { a } = obj;
console.log(a);
```

    - `1`

42. **What is output of:**

```javascript
const { x = 10 } = {};
console.log(x);
```

    - `10`

43. **What is output of:**

```javascript
const { a: newA } = { a: 5 };
console.log(newA);
```

    - `5`

44. **What is output of:**

```javascript
const { a, b } = { a: 1 };
console.log(b);
```

    - `undefined`

45. **What happens in:**

```javascript
const { a } = null;
```

    - TypeError: Cannot destructure property 'a' of null.

46. **What is output of:**

```javascript
const obj = { a: { b: 2 } };
const {
  a: { b },
} = obj;
console.log(b);
```

    - `2`

47. **What is output of:**

```javascript
const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log(rest);
```

    - `{ b: 2, c: 3 }`

48. **What is difference between:**

```javascript
const { a } = obj;
```

and

```javascript
const a = obj.a;
```

    - Same result; destructuring is syntactic sugar.

49. **Can destructuring change original object?**
    - No, it only copies values.

50. **What is output of:**

```javascript
let a = 5;
({ a } = { a: 10 });
console.log(a);
```

    - `10` (reassignment with destructuring)

## Coding Practice (Basic to Advanced)

51. **Destructure a student object into variables.**

```javascript
const student = { name: "John", age: 20, grade: "A" };
const { name, age, grade } = student;
console.log(name, age, grade); // John 20 A
```

52. **Rename destructured variables.**

```javascript
const user = { firstName: "John", lastName: "Doe" };
const { firstName: first, lastName: last } = user;
console.log(first, last); // John Doe
```

53. **Provide default values in destructuring.**

```javascript
const settings = { theme: "dark" };
const { theme, fontSize = 16, language = "en" } = settings;
console.log(theme, fontSize, language); // dark 16 en
```

54. **Destructure nested object.**

```javascript
const person = {
  name: "John",
  address: {
    city: "NYC",
    zip: 10001,
    coordinates: { lat: 40.71, lng: -74.0 },
  },
};
const {
  name,
  address: {
    city,
    coordinates: { lat },
  },
} = person;
console.log(name, city, lat); // John NYC 40.71
```

55. **Destructure object inside function parameter.**

```javascript
function greet({ name, age }) {
  console.log(`Hello, I'm ${name}, ${age} years old`);
}
greet({ name: "Alice", age: 25, city: "London" }); // Hello, I'm Alice, 25 years old
```

56. **Use rest property to collect remaining keys.**

```javascript
const person = { name: "John", age: 30, city: "NYC", country: "USA" };
const { name, age, ...address } = person;
console.log(name, age); // John 30
console.log(address); // { city: "NYC", country: "USA" }
```

57. **Swap variables using destructuring.**

```javascript
let a = 5,
  b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5
```

58. **Extract properties from array of objects.**

```javascript
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
];
for (const { id, name } of users) {
  console.log(`${id}: ${name}`);
}
// 1: John, 2: Alice, 3: Bob
```

59. **Destructure function return value.**

```javascript
function getUser() {
  return { id: 1, name: "John", role: "admin" };
}
const { name, role } = getUser();
console.log(name, role); // John admin
```

60. **Write a function that accepts object and destructures properties.**

```javascript
function displayUser({ name, email, phone = "N/A" }) {
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
}
displayUser({ name: "John", email: "john@example.com" });
// Name: John, Email: john@example.com, Phone: N/A
```

61. **Create config object and destructure required fields.**

```javascript
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
  cache: true,
};
const { apiUrl, timeout, ...options } = config;
console.log(apiUrl, timeout); // https://api.example.com 5000
console.log(options); // { retries: 3, cache: true }
```

62. **Write a function that safely destructures optional nested data.**

```javascript
function getNestedValue(obj, path) {
  try {
    const props = path.split(".");
    const result = props.reduce((current, prop) => current?.[prop], obj);
    return result ?? "N/A";
  } catch {
    return "N/A";
  }
}
// Or with optional chaining:
function safeDestructure(obj) {
  const { a = { b: {} } } = obj || {};
  const { b: { c = "N/A" } = {} } = a;
  return c;
}
console.log(safeDestructure({ a: { b: { c: 42 } } })); // 42
console.log(safeDestructure({})); // N/A
```

63. **Combine destructuring with default parameters.**

```javascript
function createUser({ name = "Guest", age = 18, role = "user" } = {}) {
  return { name, age, role };
}
console.log(createUser({ name: "John", age: 25 }));
// { name: "John", age: 25, role: "user" }
console.log(createUser()); // { name: "Guest", age: 18, role: "user" }
```

64. **Use destructuring in map callback.**

```javascript
const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Alice", lastName: "Smith" },
];
const fullNames = users.map(
  ({ firstName, lastName }) => `${firstName} ${lastName}`,
);
console.log(fullNames); // ["John Doe", "Alice Smith"]
```

65. **Build small user profile printer using destructuring.**

```javascript
function printProfile({ name, age, address: { city, country } = {} }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  if (city && country) {
    console.log(`Location: ${city}, ${country}`);
  }
}
printProfile({
  name: "John",
  age: 30,
  address: { city: "NYC", country: "USA" },
});
// Name: John, Age: 30, Location: NYC, USA
```

66. **Write a function that clones object using spread.**

```javascript
function cloneObject(obj) {
  return { ...obj };
}
const original = { a: 1, b: 2 };
const cloned = cloneObject(original);
cloned.a = 10;
console.log(original.a); // 1
console.log(cloned.a); // 10
```

67. **Write a function that removes specific property using rest.**

```javascript
function removeProperty(obj, propToRemove) {
  const { [propToRemove]: _, ...rest } = obj;
  return rest;
}
const user = {
  id: 1,
  name: "John",
  password: "secret",
  email: "john@example.com",
};
const safeUser = removeProperty(user, "password");
console.log(safeUser); // { id: 1, name: "John", email: "john@example.com" }
```

68. **Write a function that merges two objects using spread.**

```javascript
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); // {a:1, b:3, c:4}
```

69. **Destructure API-like response object.**

```javascript
const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 123,
      profile: {
        name: "John",
        email: "john@example.com",
      },
    },
    posts: [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ],
  },
  meta: { page: 1, total: 10 },
};
const {
  status,
  data: {
    user: {
      profile: { name, email },
    },
    posts,
  },
  meta: { page },
} = apiResponse;
console.log(status, name, email, posts.length, page);
// 200 John john@example.com 2 1
```

70. **Build small settings manager using destructuring.**

```javascript
const settingsManager = {
  settings: {
    theme: "light",
    fontSize: 14,
    notifications: true,
  },

  updateSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    return this;
  },

  getSettings() {
    return { ...this.settings };
  },

  display() {
    const { theme, fontSize, notifications } = this.settings;
    console.log(
      `Theme: ${theme}, Font Size: ${fontSize}, Notifications: ${notifications}`,
    );
  },
};
settingsManager.updateSettings({ theme: "dark", fontSize: 16 });
settingsManager.display(); // Theme: dark, Font Size: 16, Notifications: true
```

---

# 20 - Rest Operator

## Conceptual Understanding

1. **What is rest operator in JavaScript?**
   - Syntax (`...`) that collects multiple elements into a single array or object.

2. **What symbol represents rest operator?**
   - Three dots: `...`

3. **Why was rest operator introduced?**
   - To handle variable number of function arguments and collect remaining elements in destructuring.

4. **What problem does rest operator solve?**
   - Replaces the `arguments` object with a real array; allows flexible parameter handling.

5. **What is difference between rest and spread operator?**
   - Rest: Collects elements into array/object (in function parameters, destructuring)
   - Spread: Expands array/object into elements (in function calls, array/object literals)

6. **In which contexts can rest operator be used?**
   - Function parameters, array destructuring, object destructuring.

7. **Can rest operator be used in function parameters?**
   - Yes, as rest parameter.

8. **Can rest operator be used in object destructuring?**
   - Yes, to collect remaining properties.

9. **Can rest operator be used in array destructuring?**
   - Yes, to collect remaining elements.

10. **Why can there be only one rest element in a destructuring pattern?**
    - Because it collects all remaining items; multiple would conflict.

## Rest in Function Parameters

11. **What is syntax of rest parameter in function?**
    - `function func(...args) { }`

12. **Where must rest parameter be placed?**
    - Must be last parameter.

13. **What happens if rest parameter is not last?**
    - SyntaxError.

14. **What type of data structure does rest parameter collect?**
    - Real Array.

15. **What is difference between rest parameter and arguments object?**
    - Rest: Real array, only collects named parameters after rest
    - arguments: Array-like, all arguments, not a real array

16. **Is arguments object available in arrow functions?**
    - No, arrow functions don't have their own `arguments`.

17. **Why rest parameter is preferred over arguments?**
    - Returns real array, clearer intent, works in arrow functions.

18. **Can rest parameter coexist with normal parameters?**
    - Yes, as long as rest is last.

19. **How do you combine default parameters with rest?**
    - `function func(a, b = 2, ...rest) { }`

20. **What happens if no extra arguments are passed?**
    - Rest parameter becomes empty array `[]`.

## Rest in Array Destructuring

21. **How do you use rest in array destructuring?**
    - `const [a, b, ...rest] = array;`

22. **What does rest collect in array destructuring?**
    - Array of remaining elements.

23. **Can rest appear in middle of destructuring?**
    - No, must be last.

24. **What happens if array has fewer elements?**
    - Rest becomes empty array `[]`.

25. **How can rest help ignore some elements?**
    - `const [first, , , ...rest] = arr;` (skips elements)

26. **What is difference between:**

```javascript
const [a, ...rest] = arr;
```

and

```javascript
const rest = arr.slice(1);
```

    - Same result; destructuring is syntactic sugar.

27. **Can rest be empty array?**
    - Yes, if no remaining elements.

28. **Does rest create shallow copy?**
    - Yes, it creates a new array.

29. **What happens if array contains objects?**
    - References are copied (shallow).

30. **Can rest be nested?**
    - No, only one rest level.

## Rest in Object Destructuring

31. **How do you use rest in object destructuring?**
    - `const { a, b, ...rest } = obj;`

32. **What does rest collect in objects?**
    - New object with remaining enumerable properties.

33. **Can rest rename collected object?**
    - No, rest variable name is the new object.

34. **Does rest include inherited properties?**
    - No, only own enumerable properties.

35. **Is rest shallow or deep?**
    - Shallow copy.

36. **What happens if property is excluded before rest?**
    - Those properties not included in rest.

37. **Can rest be combined with renaming?**
    - `const { a: newA, ...rest } = obj;`

38. **What happens if object has no extra properties?**
    - Rest becomes empty object `{}`.

39. **Can rest be used multiple times?**
    - No, only once.

40. **How does rest differ from spread in objects?**
    - Rest: Collects remaining properties (destructuring)
    - Spread: Copies properties into new object (literal)

## Debug Thinking

41. **What is output of:**

```javascript
function sum(...nums) {
  return nums;
}
console.log(sum(1, 2, 3));
```

    - `[1,2,3]`

42. **What is output of:**

```javascript
const [a, ...rest] = [1, 2, 3, 4];
console.log(rest);
```

    - `[2,3,4]`

43. **What is output of:**

```javascript
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(rest);
```

    - `{b:2, c:3}`

44. **What happens if rest is not last parameter?**
    - SyntaxError.

45. **What is output of:**

```javascript
function test(a, ...rest) {
  console.log(a, rest.length);
}
test(1);
```

    - `1, 0` (rest empty array)

46. **What is difference between:**

```javascript
function test() {
  console.log(arguments);
}
```

and

```javascript
function test(...args) {
  console.log(args);
}
```

    - First: array-like object, Second: real array

47. **What happens if you try:**

```javascript
const [...rest, a] = [1,2,3];
```

    - SyntaxError: rest must be last

48. **Does rest mutate original array?**
    - No, creates new array/object.

49. **What happens when object rest is used with nested object?**
    - Shallow copy; nested objects still referenced.

50. **Why is rest operator safer than manual argument handling?**
    - Provides array methods, clearer intent, works in arrow functions.

## Coding Practice (Basic to Advanced)

51. **Write a function that sums any number of arguments using rest.**

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20)); // 30
```

52. **Write a function that finds maximum using rest.**

```javascript
function findMax(...numbers) {
  if (numbers.length === 0) return undefined;
  return Math.max(...numbers);
}
console.log(findMax(3, 7, 2, 9, 5)); // 9
console.log(findMax(1, 2, 3)); // 3
```

53. **Write a function that logs first argument and rest separately.**

```javascript
function logFirstAndRest(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
}
logFirstAndRest(1, 2, 3, 4); // First: 1, Rest: [2,3,4]
```

54. **Write a function that multiplies all numbers passed.**

```javascript
function multiply(...numbers) {
  return numbers.reduce((acc, curr) => acc * curr, 1);
}
console.log(multiply(2, 3, 4)); // 24
console.log(multiply(5, 5, 5)); // 125
```

55. **Write a function that groups arguments into array using rest.**

```javascript
function makeArray(...items) {
  return items;
}
console.log(makeArray(1, 2, 3, 4, 5)); // [1,2,3,4,5]
console.log(makeArray("a", "b", "c")); // ['a','b','c']
```

56. **Use array destructuring with rest to skip first two elements.**

```javascript
const numbers = [10, 20, 30, 40, 50];
const [first, second, ...rest] = numbers;
console.log(first, second); // 10, 20
console.log(rest); // [30,40,50]
```

57. **Use object destructuring with rest to remove specific key.**

```javascript
function removeKey(obj, keyToRemove) {
  const { [keyToRemove]: _, ...rest } = obj;
  return rest;
}
const user = {
  id: 1,
  name: "John",
  password: "secret",
  email: "john@example.com",
};
console.log(removeKey(user, "password")); // { id:1, name:"John", email:"john@example.com" }
```

58. **Write a function that merges multiple objects using rest (basic logic).**

```javascript
function mergeObjects(...objects) {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}
console.log(mergeObjects({ a: 1 }, { b: 2 }, { c: 3 })); // {a:1, b:2, c:3}
```

59. **Create a function that takes variable number of strings and joins them.**

```javascript
function joinStrings(separator, ...strings) {
  return strings.join(separator);
}
console.log(joinStrings(" - ", "apple", "banana", "orange")); // "apple - banana - orange"
console.log(joinStrings(", ", "red", "green", "blue")); // "red, green, blue"
```

60. **Create a logger function that takes message and rest of metadata.**

```javascript
function logger(level, message, ...metadata) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`);
  if (metadata.length > 0) {
    console.log("Metadata:", metadata);
  }
}
logger("INFO", "Application started");
logger("ERROR", "Database connection failed", { retry: 3 }, "Error code: 500");
```

61. **Write a function that clones array using rest/spread.**

```javascript
function cloneArray(arr) {
  return [...arr];
}
const original = [1, 2, 3];
const cloned = cloneArray(original);
cloned.push(4);
console.log(original); // [1,2,3]
console.log(cloned); // [1,2,3,4]
```

62. **Write a function that extracts specific keys and collects rest.**

```javascript
function extractKeys(obj, ...keys) {
  const extracted = {};
  const rest = { ...obj };

  for (const key of keys) {
    if (key in obj) {
      extracted[key] = obj[key];
      delete rest[key];
    }
  }

  return { extracted, rest };
}
const user = { id: 1, name: "John", age: 30, city: "NYC", country: "USA" };
const { extracted, rest } = extractKeys(user, "name", "age");
console.log(extracted); // { name: "John", age: 30 }
console.log(rest); // { id: 1, city: "NYC", country: "USA" }
```

63. **Build small shopping cart function using rest parameters.**

```javascript
function shoppingCart(...items) {
  const cart = {
    items: [],
    total: 0,

    addItem(name, price, quantity = 1) {
      this.items.push({ name, price, quantity });
      this.total += price * quantity;
      return this;
    },

    display() {
      console.log("Cart Items:");
      this.items.forEach(({ name, price, quantity }) => {
        console.log(
          `  ${name}: $${price} x ${quantity} = $${price * quantity}`,
        );
      });
      console.log(`Total: $${this.total}`);
    },
  };

  // Add initial items
  for (let i = 0; i < items.length; i += 3) {
    if (items[i] && items[i + 1] && items[i + 2]) {
      cart.addItem(items[i], items[i + 1], items[i + 2]);
    }
  }

  return cart;
}
const cart = shoppingCart("Apple", 0.5, 3, "Banana", 0.3, 5);
cart.display();
```

64. **Write a function that validates at least one argument using rest.**

```javascript
function validateArgs(...args) {
  if (args.length === 0) {
    throw new Error("At least one argument required");
  }
  return args.every((arg) => arg !== null && arg !== undefined);
}
console.log(validateArgs(1, 2, 3)); // true
// console.log(validateArgs()); // Throws error
```

65. **Write a function that returns average of numbers using rest.**

```javascript
function average(...numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}
console.log(average(1, 2, 3, 4, 5)); // 3
console.log(average(10, 20, 30)); // 20
```

66. **Combine default parameters and rest.**

```javascript
function createUser(name, age = 18, ...hobbies) {
  return {
    name,
    age,
    hobbies,
    createdAt: new Date(),
  };
}
console.log(createUser("John", 25, "reading", "coding", "gaming"));
// { name: "John", age: 25, hobbies: ["reading","coding","gaming"], createdAt: ... }
```

67. **Create a function wrapper using rest to forward arguments.**

```javascript
function logWrapper(fn) {
  return function (...args) {
    console.log(`Calling function with args:`, args);
    const result = fn(...args);
    console.log(`Result:`, result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = logWrapper(add);
loggedAdd(5, 3); // Logs: Calling function with args: [5,3], Result: 8
```

68. **Build small event emitter function using rest.**

```javascript
function createEventEmitter() {
  const events = {};

  return {
    on(event, listener) {
      if (!events[event]) events[event] = [];
      events[event].push(listener);
    },

    emit(event, ...args) {
      if (events[event]) {
        events[event].forEach((listener) => listener(...args));
      }
    },

    off(event, listener) {
      if (events[event]) {
        events[event] = events[event].filter((l) => l !== listener);
      }
    },
  };
}
const emitter = createEventEmitter();
emitter.on("greet", (name, time) => console.log(`Good ${time}, ${name}!`));
emitter.emit("greet", "John", "morning"); // Good morning, John!
```

69. **Write a function that removes first element using destructuring rest.**

```javascript
function removeFirst(arr) {
  const [first, ...rest] = arr;
  return { first, rest };
}
console.log(removeFirst([1, 2, 3, 4])); // { first: 1, rest: [2,3,4] }
```

70. **Create a flexible calculator using rest parameters.**

```javascript
const calculator = {
  calculate(operation, ...numbers) {
    switch (operation) {
      case "sum":
        return numbers.reduce((acc, curr) => acc + curr, 0);
      case "average":
        return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
      case "max":
        return Math.max(...numbers);
      case "min":
        return Math.min(...numbers);
      case "product":
        return numbers.reduce((acc, curr) => acc * curr, 1);
      default:
        return "Invalid operation";
    }
  },
};
console.log(calculator.calculate("sum", 1, 2, 3, 4, 5)); // 15
console.log(calculator.calculate("average", 10, 20, 30)); // 20
console.log(calculator.calculate("max", 3, 7, 2, 9, 5)); // 9
console.log(calculator.calculate("product", 2, 3, 4)); // 24
```

# 21 - JSON

## Conceptual Understanding

1. **What is JSON?**
   - JavaScript Object Notation - a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.

2. **What does JSON stand for?**
   - JavaScript Object Notation.

3. **Why is JSON used?**
   - For transmitting data between server and web applications, configuration files, and storing structured data.

4. **Is JSON a programming language?**
   - No, it's a data format (text format) for representing structured data.

5. **How is JSON different from JavaScript object?**
   - JSON is a string format; JavaScript object is an in-memory data structure. JSON has stricter syntax rules.

6. **Why is JSON popular for data exchange?**
   - Lightweight, language-independent, human-readable, and easy to parse in most programming languages.

7. **What are the basic data types supported in JSON?**
   - String, Number, Boolean, Null, Object, Array.

8. **Can JSON store functions?**
   - No, functions are not valid JSON data types.

9. **Can JSON store undefined values?**
   - No, undefined is not a valid JSON value.

10. **Why are keys in JSON always in double quotes?**
    - Because JSON specification requires property names to be double-quoted strings for consistency across languages.

## JSON vs JavaScript Object

11. **What is difference between JSON and JS object literal?**
    - JSON: Keys must be double-quoted, no functions, no undefined, no comments
    - JS object: Keys can be unquoted, can contain functions, undefined, comments

12. **Why single quotes are invalid in JSON?**
    - JSON specification requires double quotes for strings and property names.

13. **Why trailing commas are invalid in JSON?**
    - JSON specification doesn't allow trailing commas for compatibility across languages.

14. **Can JSON contain comments?**
    - No, JSON doesn't support comments by design (keeps it simple and parseable).

15. **Why JSON is considered strict format?**
    - Because even small syntax errors (like trailing commas) make it invalid.

16. **Is JSON case-sensitive?**
    - Yes, JSON is case-sensitive.

17. **Can JSON contain Date objects?**
    - No, dates are represented as strings in ISO format (e.g., "2023-01-01T00:00:00.000Z").

18. **How are nested objects represented in JSON?**
    - As nested object structures within curly braces: `{"person":{"name":"John"}}`

19. **What happens if JSON syntax is invalid?**
    - Parsing fails with a SyntaxError.

20. **Why JSON is text-based format?**
    - So it can be easily transmitted over networks and read by humans.

## JSON Methods

21. **What is `JSON.stringify()`?**
    - Converts JavaScript object to JSON string.

22. **What is `JSON.parse()`?**
    - Parses JSON string into JavaScript object.

23. **What does `JSON.stringify()` return?**
    - Returns a JSON string representation of the value.

24. **What does `JSON.parse()` return?**
    - Returns a JavaScript object/array/value parsed from JSON string.

25. **What happens if you stringify a function?**
    - Functions are omitted (or become null if in array).

26. **What happens if you stringify undefined?**
    - In objects, properties with undefined are omitted. In arrays, becomes null.

27. **What happens if you parse invalid JSON?**
    - Throws a SyntaxError.

28. **What is replacer parameter in `JSON.stringify()`?**
    - Array of property names to include or function that transforms values.

29. **What is space parameter in `JSON.stringify()`?**
    - Number of spaces or string used for pretty-printing indentation.

30. **What is reviver parameter in `JSON.parse()`?**
    - Function that transforms parsed values before returning.

## JSON & Data Transfer

31. **Why is JSON used in APIs?**
    - Lightweight, language-independent, easy to parse on both client and server.

32. **How does browser receive JSON from server?**
    - As text in HTTP response, typically with Content-Type: application/json.

33. **How is JSON converted to JavaScript object?**
    - Using `JSON.parse()`.

34. **Why must we parse JSON before using it?**
    - Because it's just a string; we need to convert it to usable JavaScript data structure.

35. **What is Content-Type: application/json?**
    - HTTP header indicating that the body of the request/response is JSON.

36. **How does JSON work with fetch API? (Basic idea only.)**
    - `fetch(url).then(res => res.json())` parses JSON response.

37. **What is difference between JSON and XML?**
    - JSON: Smaller, easier to parse, less verbose
    - XML: More verbose, supports attributes, namespaces, comments

38. **Why JSON is lightweight?**
    - Minimal syntax (only quotes, commas, braces), no closing tags.

39. **Can JSON handle large data efficiently?**
    - Yes, but streaming parsers needed for very large data; string parsing entire JSON can be memory-intensive.

40. **What are limitations of JSON?**
    - No comments, no date type, no binary data, no circular references, no functions.

## JSON & localStorage (Basic Only)

41. **Why do we need JSON with localStorage?**
    - Because localStorage stores only strings; JSON converts objects to strings.

42. **Why localStorage stores only strings?**
    - By design for simplicity and security.

43. **How to store object in localStorage?**
    - `localStorage.setItem('key', JSON.stringify(obj))`

44. **How to retrieve object from localStorage?**
    - `JSON.parse(localStorage.getItem('key'))`

45. **What happens if you store object directly without stringify?**
    - Object is converted to "[object Object]" string, losing all data.

46. **What happens if JSON.parse is not used after retrieving?**
    - You get a string, not the original object.

47. **How to remove item from localStorage?**
    - `localStorage.removeItem('key')`

48. **How to clear localStorage?**
    - `localStorage.clear()`

49. **What is sessionStorage?**
    - Similar to localStorage but data is cleared when the page session ends.

50. **What is difference between localStorage and sessionStorage?**
    - localStorage: Persistent until manually cleared
    - sessionStorage: Cleared when tab/browser is closed

## Debug Thinking

51. **What is output of:**

```javascript
const obj = { a: 1 };
const str = JSON.stringify(obj);
console.log(typeof str);
```

    - `"string"`

52. **What is output of:**

```javascript
const str = '{"a":1}';
const obj = JSON.parse(str);
console.log(typeof obj);
```

    - `"object"`

53. **What happens if:**

```javascript
JSON.parse("{a:1}");
```

    - Throws SyntaxError

54. **Why does above throw error?**
    - Because keys in JSON must be double-quoted; `{a:1}` has unquoted key 'a'.

55. **What happens if:**

```javascript
JSON.stringify({ a: undefined });
```

    - Property `a` is omitted, returns `"{}"`

56. **What happens if:**

```javascript
JSON.stringify({ a: function () {} });
```

    - Property `a` is omitted, returns `"{}"`

57. **What is output of:**

```javascript
JSON.stringify([1, undefined, 3]);
```

    - `"[1,null,3]"` (undefined in array becomes null)

58. **What happens if JSON contains trailing comma?**
    - `JSON.parse("[1,2,3,]")` throws SyntaxError.

59. **What is output of:**

```javascript
JSON.parse("null");
```

    - `null` (valid JSON value)

60. **What is output of:**

```javascript
JSON.parse("123");
```

    - `123` (valid JSON number)

## Coding Practice (Basic to Advanced)

61. **Convert object to JSON string.**

```javascript
const user = { name: "John", age: 30, city: "NYC" };
const jsonString = JSON.stringify(user);
console.log(jsonString); // {"name":"John","age":30,"city":"NYC"}
```

62. **Convert JSON string to object.**

```javascript
const jsonString = '{"name":"John","age":30,"city":"NYC"}';
const user = JSON.parse(jsonString);
console.log(user.name); // John
```

63. **Store user object in localStorage.**

```javascript
const user = { name: "Alice", age: 25, email: "alice@example.com" };
localStorage.setItem("user", JSON.stringify(user));
console.log("User stored");
```

64. **Retrieve user object from localStorage.**

```javascript
const userJSON = localStorage.getItem("user");
const user = JSON.parse(userJSON);
console.log(user.name); // Alice
```

65. **Create a simple todo list stored in localStorage.**

```javascript
function createTodoApp() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  return {
    add(task) {
      todos.push({ id: Date.now(), task, completed: false });
      this.save();
    },
    toggle(id) {
      const todo = todos.find((t) => t.id === id);
      if (todo) todo.completed = !todo.completed;
      this.save();
    },
    remove(id) {
      todos = todos.filter((t) => t.id !== id);
      this.save();
    },
    save() {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    getAll() {
      return [...todos];
    },
  };
}
const todoApp = createTodoApp();
todoApp.add("Learn JSON");
todoApp.add("Practice coding");
console.log(todoApp.getAll());
```

66. **Pretty print JSON using stringify.**

```javascript
const user = { name: "John", age: 30, address: { city: "NYC", zip: 10001 } };
const prettyJSON = JSON.stringify(user, null, 2);
console.log(prettyJSON);
// {
//   "name": "John",
//   "age": 30,
//   "address": {
//     "city": "NYC",
//     "zip": 10001
//   }
// }
```

67. **Use replacer to filter properties while stringifying.**

```javascript
const user = {
  id: 1,
  name: "John",
  password: "secret123",
  email: "john@example.com",
  role: "admin",
};
const safeUser = JSON.stringify(user, ["name", "email"]);
console.log(safeUser); // {"name":"John","email":"john@example.com"}

// Using function replacer
const filtered = JSON.stringify(user, (key, value) => {
  if (key === "password") return undefined;
  if (key === "id") return value.toString();
  return value;
});
console.log(filtered);
```

68. **Use reviver to modify parsed values.**

```javascript
const jsonData =
  '{"name":"John","birthdate":"1990-01-01T00:00:00.000Z","age":30}';
const data = JSON.parse(jsonData, (key, value) => {
  if (key === "birthdate") return new Date(value);
  if (key === "age") return value + 1; // Birthday passed!
  return value;
});
console.log(data.birthdate instanceof Date); // true
console.log(data.age); // 31
```

69. **Write a function that safely parses JSON with try-catch.**

```javascript
function safeJSONParse(str, fallback = null) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error("Invalid JSON:", error.message);
    return fallback;
  }
}
console.log(safeJSONParse('{"a":1}')); // {a:1}
console.log(safeJSONParse("{a:1}", {})); // {} (fallback)
```

70. **Validate if a string is valid JSON.**

```javascript
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}
console.log(isValidJSON('{"name":"John"}')); // true
console.log(isValidJSON('{name:"John"}')); // false
```

71. **Create API-like JSON response and parse it.**

```javascript
function createAPIResponse(success, data, message = "") {
  return JSON.stringify({
    success,
    data,
    message,
    timestamp: new Date().toISOString(),
  });
}
const response = createAPIResponse(true, { user: "John", id: 123 });
console.log(response);
const parsed = JSON.parse(response);
console.log(parsed.data.user); // John
```

72. **Merge two JSON objects.**

```javascript
function mergeJSON(json1, json2) {
  const obj1 = JSON.parse(json1);
  const obj2 = JSON.parse(json2);
  return JSON.stringify({ ...obj1, ...obj2 });
}
const merged = mergeJSON('{"a":1}', '{"b":2,"c":3}');
console.log(merged); // {"a":1,"b":2,"c":3}
```

73. **Write a function to deep clone object using JSON methods.**

```javascript
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 10;
console.log(original.b.c); // 2 (unchanged)
console.log(cloned.b.c); // 10
```

74. **Demonstrate limitation of JSON cloning with Date.**

```javascript
const original = {
  name: "Event",
  date: new Date("2023-01-01"),
  func: () => console.log("hello"),
};
const cloned = JSON.parse(JSON.stringify(original));
console.log(original.date instanceof Date); // true
console.log(cloned.date); // "2023-01-01T00:00:00.000Z" (string, not Date)
console.log(cloned.func); // undefined (function lost)
```

75. **Build small settings manager using JSON + localStorage.**

```javascript
const settingsManager = {
  get(key, defaultValue = null) {
    const settings = JSON.parse(localStorage.getItem("app_settings")) || {};
    return settings[key] !== undefined ? settings[key] : defaultValue;
  },

  set(key, value) {
    const settings = JSON.parse(localStorage.getItem("app_settings")) || {};
    settings[key] = value;
    localStorage.setItem("app_settings", JSON.stringify(settings));
    return this;
  },

  remove(key) {
    const settings = JSON.parse(localStorage.getItem("app_settings")) || {};
    delete settings[key];
    localStorage.setItem("app_settings", JSON.stringify(settings));
    return this;
  },

  getAll() {
    return JSON.parse(localStorage.getItem("app_settings")) || {};
  },

  reset() {
    localStorage.removeItem("app_settings");
    return this;
  },
};
settingsManager.set("theme", "dark").set("fontSize", 16);
console.log(settingsManager.get("theme")); // dark
console.log(settingsManager.getAll()); // {theme:"dark", fontSize:16}
```

---

# 22 - Date

## Conceptual Understanding

1. **What is `Date` object in JavaScript?**
   - Built-in object for working with dates and times, representing a single moment in time.

2. **Why do we need Date in programming?**
   - For timestamps, scheduling, logging, time-based calculations, and displaying dates/times.

3. **How does JavaScript represent time internally?**
   - As number of milliseconds since January 1, 1970, UTC (Unix epoch).

4. **What is Unix timestamp?**
   - Number of seconds since January 1, 1970 (JavaScript uses milliseconds).

5. **What is epoch time?**
   - Reference point from which time is measured (1970-01-01 00:00:00 UTC).

6. **Is Date object mutable or immutable?**
   - Mutable - methods like `setFullYear()` modify the Date object.

7. **What time zone does JavaScript Date use?**
   - UTC internally, but displays in browser's local time zone by default.

8. **What is difference between local time and UTC?**
   - Local time includes timezone offset; UTC is the standardized global time.

9. **Why date handling is considered tricky?**
   - Due to timezones, daylight saving time, different formats, and month indexing.

10. **What is ISO date format?**
    - International standard format: YYYY-MM-DDTHH:mm:ss.sssZ (e.g., "2023-01-15T10:30:00.000Z").

## Creating Date Objects

11. **How do you create current date?**
    - `new Date()`

12. **How do you create date using timestamp?**
    - `new Date(milliseconds)` e.g., `new Date(0)` for epoch.

13. **How do you create date using string?**
    - `new Date(dateString)` e.g., `new Date("2023-01-15")`

14. **How do you create date using year, month, day?**
    - `new Date(year, month, day, hours, minutes, seconds, ms)`

15. **Why month is zero-based in Date constructor?**
    - Historical reasons (inherited from Java's Date class).

16. **What happens if invalid date is passed?**
    - Returns "Invalid Date" (which is a Date object but with invalid value).

17. **What is `Date.now()`?**
    - Static method returning current timestamp in milliseconds.

18. **What is difference between `new Date()` and `Date()`?**
    - `new Date()`: Returns Date object
    - `Date()`: Returns string representation of current date/time

19. **What is output of `typeof new Date()`?**
    - `"object"`

20. **What happens if you pass only year to Date constructor?**
    - Interpreted as timestamp (single number) or as year with month=0 if using string.

## Getting Date Components

21. **How to get full year?**
    - `getFullYear()` (4-digit year)

22. **How to get month?**
    - `getMonth()` (0-11)

23. **How to get date (day of month)?**
    - `getDate()` (1-31)

24. **How to get day of week?**
    - `getDay()` (0 = Sunday, 1 = Monday, etc.)

25. **How to get hours?**
    - `getHours()` (0-23)

26. **How to get minutes?**
    - `getMinutes()` (0-59)

27. **How to get seconds?**
    - `getSeconds()` (0-59)

28. **How to get milliseconds?**
    - `getMilliseconds()` (0-999)

29. **What is difference between `getDate()` and `getDay()`?**
    - `getDate()`: Day of month (1-31)
    - `getDay()`: Day of week (0-6)

30. **What is difference between local getters and UTC getters?**
    - Local: `getHours()` returns hours in local timezone
    - UTC: `getUTCHours()` returns hours in UTC

## Setting Date Components

31. **How to set full year?**
    - `setFullYear(year)`

32. **How to set month?**
    - `setMonth(month)` (0-11)

33. **How to set date?**
    - `setDate(day)` (1-31)

34. **How to set hours?**
    - `setHours(hours)`

35. **What happens if you set month beyond 11?**
    - Date auto-adjusts to next year (e.g., month 12 becomes January of next year).

36. **What happens if you set date beyond valid days?**
    - Auto-adjusts to next month (e.g., January 32 becomes February 1).

37. **Does Date auto-adjust overflow values?**
    - Yes, date automatically rolls over (e.g., 40th day of month adjusts to next month).

38. **How to add days to current date?**
    - `date.setDate(date.getDate() + days)`

39. **How to subtract days?**
    - `date.setDate(date.getDate() - days)`

40. **How to compare two dates?**
    - Compare timestamps: `date1.getTime() === date2.getTime()` or use comparison operators.

## Formatting Dates

41. **What does `toString()` return?**
    - Full string representation: "Wed Jan 15 2023 10:30:00 GMT+0530 (India Standard Time)"

42. **What does `toDateString()` return?**
    - Date portion only: "Wed Jan 15 2023"

43. **What does `toTimeString()` return?**
    - Time portion only: "10:30:00 GMT+0530 (India Standard Time)"

44. **What does `toISOString()` return?**
    - ISO 8601 format: "2023-01-15T05:00:00.000Z" (UTC)

45. **What does `toLocaleDateString()` return?**
    - Localized date format based on locale: "1/15/2023" (US) or "15/1/2023" (many other countries)

46. **What does `toLocaleTimeString()` return?**
    - Localized time format: "10:30:00 AM"

47. **How to format date manually?**
    - Use get methods to extract components and build string: `${year}-${month+1}-${day}`

48. **Why manual formatting can cause bugs?**
    - Zero-based months, timezone issues, leading zeros missing.

49. **What is difference between ISO string and local string?**
    - ISO: UTC timezone, consistent format
    - Local: Local timezone, format varies by locale

50. **Why toISOString is useful for APIs?**
    - Standardized, timezone-independent format that all systems can parse.

## Debug Thinking

51. **What is output of:**

```javascript
new Date(0);
```

    - `Thu Jan 01 1970 05:30:00 GMT+0530` (epoch + local offset)

52. **What is output of:**

```javascript
new Date("2020-01-01");
```

    - Date object representing Jan 1, 2020 UTC (may show local time equivalent)

53. **What is output of:**

```javascript
new Date("invalid");
```

    - `Invalid Date`

54. **Why month appears one less than expected?**
    - Months are zero-indexed (0 = January, 11 = December).

55. **What is difference between:**

```javascript
new Date("2020-01-01");
```

and

```javascript
new Date(2020, 0, 1);
```

    - First: UTC midnight (timezone issues)
    - Second: Local midnight

56. **What happens if you compare two Date objects using `===`?**
    - Returns false unless same object reference; compares objects, not timestamps.

57. **How to correctly compare dates?**
    - Compare timestamps: `date1.getTime() === date2.getTime()` or use `date1 - date2`.

58. **What is output of:**

```javascript
Date.now();
```

    - Current timestamp in milliseconds (number).

59. **Why Date arithmetic sometimes confusing?**
    - Due to timezone offsets, daylight saving time, and month indexing.

60. **What is result of subtracting two Date objects?**
    - Difference in milliseconds (number).

## Coding Practice (Basic to Advanced)

61. **Print current date and time.**

```javascript
const now = new Date();
console.log(now.toString());
console.log(now.toLocaleString());
```

62. **Print only current year.**

```javascript
const now = new Date();
console.log(now.getFullYear());
```

63. **Print current month.**

```javascript
const now = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(months[now.getMonth()]); // Month name
console.log(now.getMonth() + 1); // Month number (1-12)
```

64. **Print day of week.**

```javascript
const now = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(days[now.getDay()]);
```

65. **Create function to format date as DD/MM/YYYY.**

```javascript
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
console.log(formatDate(new Date()));
```

66. **Create function to add 7 days to given date.**

```javascript
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
const today = new Date();
const nextWeek = addDays(today, 7);
console.log(`Today: ${formatDate(today)}`);
console.log(`Next week: ${formatDate(nextWeek)}`);
```

67. **Create function to calculate difference between two dates in days.**

```javascript
function daysBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
  const diffMs = Math.abs(date2 - date1);
  return Math.round(diffMs / oneDay);
}
const start = new Date("2023-01-01");
const end = new Date("2023-12-31");
console.log(daysBetween(start, end)); // 364 or 365 depending on leap year
```

68. **Create function to check if year is leap year.**

```javascript
function isLeapYear(date) {
  const year = date.getFullYear();
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
console.log(isLeapYear(new Date("2024-01-01"))); // true
console.log(isLeapYear(new Date("2023-01-01"))); // false
```

69. **Create countdown timer using Date.**

```javascript
function countdown(targetDate) {
  const target = new Date(targetDate).getTime();

  return setInterval(() => {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      console.log("Countdown finished!");
      clearInterval(intervalId);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  }, 1000);
}
// countdown('2024-12-31');
```

70. **Build small age calculator using Date.**

```javascript
function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  // Adjust if birthday hasn't occurred this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  const nextBirthday = new Date(
    today.getFullYear(),
    birth.getMonth(),
    birth.getDate(),
  );
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const daysUntil = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

  return {
    age,
    daysUntilNextBirthday: daysUntil,
    birthdayMessage:
      daysUntil === 0
        ? "Happy Birthday!"
        : `${daysUntil} days until your birthday`,
  };
}
console.log(calculateAge("1990-05-15"));
```

71. **Create function to convert timestamp to readable date.**

```javascript
function timestampToDate(timestamp) {
  const date = new Date(timestamp);
  return {
    timestamp,
    iso: date.toISOString(),
    local: date.toLocaleString(),
    date: date.toDateString(),
    time: date.toTimeString(),
    components: {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      milliseconds: date.getMilliseconds(),
    },
  };
}
console.log(timestampToDate(Date.now()));
```

72. **Create function to check if date is in past or future.**

```javascript
function checkDate(date) {
  const inputDate = new Date(date);
  const now = new Date();

  if (inputDate < now) {
    return "Past date";
  } else if (inputDate > now) {
    return "Future date";
  } else {
    return "Current date (approximately)";
  }
}
console.log(checkDate("2020-01-01")); // Past
console.log(checkDate("2030-01-01")); // Future
```

73. **Create function to get last day of month.**

```javascript
function getLastDayOfMonth(year, month) {
  // Month is 0-indexed (0-11)
  // Create date for first day of next month, then subtract 1 day
  const lastDay = new Date(year, month + 1, 0);
  return lastDay.getDate();
}
console.log(getLastDayOfMonth(2023, 1)); // February 2023 -> 28
console.log(getLastDayOfMonth(2024, 1)); // February 2024 -> 29
```

74. **Create function to measure execution time using Date.now().**

```javascript
function measureExecutionTime(fn, ...args) {
  const start = Date.now();
  const result = fn(...args);
  const end = Date.now();
  return {
    result,
    executionTimeMs: end - start,
  };
}
function slowFunction(n) {
  let sum = 0;
  for (let i = 0; i < n * 1000000; i++) sum += i;
  return sum;
}
console.log(measureExecutionTime(slowFunction, 10));
```

75. **Build simple event scheduler using Date.**

```javascript
function createScheduler() {
  const events = [];

  return {
    addEvent(name, date, callback) {
      events.push({
        id: Date.now(),
        name,
        date: new Date(date),
        callback,
        completed: false,
      });
      this.sortEvents();
      return this;
    },

    sortEvents() {
      events.sort((a, b) => a.date - b.date);
    },

    checkUpcoming() {
      const now = new Date();
      const upcoming = events.filter((e) => !e.completed && e.date > now);

      upcoming.forEach((event) => {
        const timeUntil = event.date - now;
        const daysUntil = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
        const hoursUntil = Math.floor(
          (timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );

        console.log(`[${event.name}] in ${daysUntil}d ${hoursUntil}h`);

        // Execute if event time has come (within last minute)
        if (timeUntil <= 60000 && timeUntil >= -60000) {
          event.callback(event);
          event.completed = true;
        }
      });
    },

    getAllEvents() {
      return events.map((e) => ({
        ...e,
        dateString: e.date.toLocaleString(),
      }));
    },

    removeEvent(id) {
      const index = events.findIndex((e) => e.id === id);
      if (index !== -1) events.splice(index, 1);
    },
  };
}
const scheduler = createScheduler();

// Add events
scheduler.addEvent(
  "Meeting",
  new Date(Date.now() + 2 * 60 * 1000), // 2 minutes from now
  (event) => console.log(`⏰ Time for ${event.name}!`),
);

scheduler.addEvent(
  "Lunch",
  new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
  (event) => console.log(`🍽️ ${event.name} time!`),
);

console.log(scheduler.getAllEvents());
setInterval(() => scheduler.checkUpcoming(), 30000); // Check every 30 seconds
```

---
