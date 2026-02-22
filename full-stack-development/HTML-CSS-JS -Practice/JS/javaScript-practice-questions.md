# 01 - What is JavaScript

## Conceptual Understanding

1. What is JavaScript? Explain in your own words.
2. Is JavaScript a compiled or interpreted language? Explain why.
3. Why is JavaScript called a high-level language?
4. What makes JavaScript different from HTML and CSS?
5. Can JavaScript run outside the browser? How?
6. What is ECMAScript?
7. Why do we say JavaScript is dynamically typed?
8. What does it mean that JavaScript is multi-paradigm?
9. Is JavaScript synchronous or asynchronous by default?
10. Why is JavaScript considered event-driven?

## Engine & Environment Basics

11. What is a JavaScript Engine?
12. Name some popular JavaScript engines.
13. What is the role of V8 engine?
14. What is the difference between JavaScript Engine and JavaScript Runtime?
15. Why does browser need a JS engine?
16. Why does Node.js need a JS engine?
17. What is the role of Web APIs in browser?
18. Can JavaScript directly interact with hardware?

## Behavior & Nature

19. Why is JavaScript single-threaded?
20. What problems can occur because JS is single-threaded?
21. How does JavaScript handle multiple tasks if it is single-threaded?
22. What is just-in-time (JIT) compilation?
23. Why is JavaScript considered loosely typed?
24. What are some advantages of dynamic typing?
25. What are some disadvantages of dynamic typing?

## Comparison Based

26. Difference between JavaScript and Java.
27. Difference between JavaScript and C++.
28. Why is JavaScript more suitable for web development?
29. Can JavaScript be used for backend development?
30. What are some real-world applications built using JavaScript?

# 02 - Variables

## Conceptual Understanding

1. What is a variable in JavaScript?
2. Why do we need variables?
3. How does JavaScript store variables in memory?
4. What is variable declaration?
5. What is variable initialization?
6. What is variable assignment?
7. What is the difference between declaration and initialization?
8. What happens if you use a variable without declaring it?
9. What is dynamic typing in the context of variables?
10. Can a variable change its data type in JavaScript? Explain with example reasoning.

## var, let, const Deep Understanding

11. What is `var`?
12. What is `let`?
13. What is `const`?
14. Difference between `var` and `let`.
15. Difference between `let` and `const`.
16. Why was `let` and `const` introduced in ES6?
17. Can you reassign a `const` variable?
18. Can you redeclare a `let` variable?
19. Can you redeclare a `var` variable?
20. Which keyword should you prefer in modern JavaScript and why?

## Scope & Behavior

21. What is global scope?
22. What is block scope?
23. Which variables are block scoped?
24. Is `var` block scoped? Why or why not?
25. What is function scope?
26. What happens if a variable is declared inside a block using `var`?
27. What is shadowing in variables?
28. What happens if two variables have the same name in different scopes?

## Hoisting & Internal Behavior (Only Basics Here)

29. Are variables hoisted in JavaScript?
30. What is the difference in hoisting behavior between `var`, `let`, and `const`?
31. What is the temporal dead zone (TDZ)? (If not studied yet, mark and revisit later.)
32. Why accessing `let` or `const` before declaration throws error but `var` does not?

## Practical & Debug Thinking

33. What will happen if you declare a variable without assigning a value?
34. What is the default value of an uninitialized variable?
35. What error will occur if you try to reassign a `const` variable?
36. What error will occur if you redeclare a `let` variable in the same scope?
37. Why is using `var` considered risky in large applications?
38. What are best practices while declaring variables?

## Coding Practice

39. Write a program to swap two variables without using a third variable.
40. Write a program that demonstrates block scope using `let`.
41. Write a program that shows why `var` can cause unexpected behavior in loops.
42. Create a constant object and try modifying its properties. What happens and why?

# 03 - Data Types

## Conceptual Understanding

1. What is a data type in JavaScript?
2. Why are data types important in programming?
3. How many types of data types exist in JavaScript?
4. What is the difference between primitive and non-primitive data types?
5. Why are primitive data types immutable?
6. Why are objects considered reference types?
7. What does it mean that JavaScript is dynamically typed?
8. Can a variable change from one data type to another? Explain with reasoning.
9. How does JavaScript determine the type of a value?
10. What is the role of the `typeof` operator?

## Primitive Data Types

11. List all primitive data types in JavaScript.
12. What is `number` type? Does JS differentiate between integer and float?
13. What is `string` type? How are strings stored internally?
14. What is `boolean` type? Where is it commonly used?
15. What is `undefined`?
16. What is `null`?
17. What is the difference between `undefined` and `null`?
18. What is `bigint`? Why was it introduced?
19. What is `symbol`? Why do we need it?
20. Why does `typeof null` return `"object"`?

## Reference (Non-Primitive) Types

21. What are reference data types in JavaScript?
22. What is an object in JavaScript?
23. Are arrays primitive or reference types?
24. Are functions objects in JavaScript?
25. What happens when you copy a primitive value?
26. What happens when you copy a reference value?
27. Explain pass-by-value vs pass-by-reference in JavaScript.
28. Why modifying one object variable sometimes affects another?

## Memory & Internal Behavior (Basic Level)

29. Where are primitive values stored (stack or heap)?
30. Where are objects stored?
31. What is a memory reference?
32. Why comparing two objects using `===` often returns false even if they look same?

## Debug Thinking

33. What will `typeof NaN` return?
34. What will `typeof []` return?
35. What will `typeof function() {}` return?
36. Why is `NaN` considered a number type?
37. What is the difference between `==` and `===` when comparing different data types?

## Coding Practice

38. Write a program to check if a value is a primitive type.
39. Write a program to demonstrate copying of primitive vs reference type.
40. Create two objects with same properties and compare them using `===`. What happens and why?
41. Write a function that returns the exact type of any value (including arrays and null).

# 04 - Type Conversion

## Conceptual Understanding

1. What is type conversion in JavaScript?
2. What is the difference between type conversion and type coercion?
3. What is implicit type coercion?
4. What is explicit type conversion?
5. Why does JavaScript perform implicit coercion?
6. In which operations does JavaScript perform automatic type conversion?
7. Why is `==` considered unsafe in many cases?
8. Why is `===` recommended over `==`?
9. What are falsy values in JavaScript?
10. What are truthy values in JavaScript?

## Number Conversion

11. How can you convert a string to a number explicitly?
12. Difference between `Number()`, `parseInt()`, and `parseFloat()`?
13. What happens when you convert `"123abc"` using `Number()`?
14. What happens when you convert `"123abc"` using `parseInt()`?
15. What happens when you convert `true` to number?
16. What happens when you convert `false` to number?
17. What happens when you convert `null` to number?
18. What happens when you convert `undefined` to number?
19. What is `NaN`?
20. How can you check if a value is `NaN` correctly?

## String Conversion

21. How can you convert a number to string?
22. What happens when you add a number and a string?
23. What happens when you subtract a string from a number?
24. What is the result of `"5" * 2` and why?
25. What is the result of `"5" + 2` and why?
26. What happens when you convert `null` to string?
27. What happens when you convert `undefined` to string?

## Boolean Conversion

28. How does JavaScript convert values to boolean?
29. List all falsy values in JavaScript.
30. What is the boolean value of empty string?
31. What is the boolean value of empty array?
32. What is the boolean value of empty object?
33. Why is `"0"` truthy but `0` falsy?
34. What is double NOT operator `!!` used for?

## Comparison & Coercion Edge Cases

35. What is the result of `[] == false` and why?
36. What is the result of `"" == 0` and why?
37. What is the result of `null == undefined`?
38. What is the result of `null === undefined`?
39. What is the result of `" \t\n" == 0` and why?
40. Why does `[] + []` return empty string?
41. Why does `{}` + `{}` behave unexpectedly in console?

## Debug Thinking

42. Why does `true + true` return 2?
43. Why does `true + "true"` return `"truetrue"`?
44. Why does `[] + 1` return `"1"`?
45. Why does `[1,2] + [3,4]` return `"1,23,4"`?
46. Why does `Number("")` return 0?
47. Why does `Number(" ")` return 0?

## Coding Practice (Basic to Advanced)

48. Write a function that converts any value to number safely.
49. Write a function that checks if a value is truthy or falsy.
50. Write a program that filters only numeric strings from an array.
51. Write a custom function that mimics `Number()` behavior.
52. Write a function that strictly compares two values without using `===`.
53. Write a program that demonstrates 5 confusing coercion examples and explains them.
54. Write a function that converts any input into boolean using manual logic.
55. Write a program to parse user input string and safely convert to integer.
56. Write a function that removes all falsy values from an array.
57. Write a function that checks whether two values are loosely equal using your own logic.
58. Create a mini test suite that logs expected vs actual output for coercion cases.
59. Write a function that identifies if a string contains only digits.
60. Create a program that demonstrates difference between `parseInt()` and `Number()` using multiple inputs.

# 05 - Operators

## Conceptual Understanding

1. What is an operator in JavaScript?
2. What is the difference between unary, binary, and ternary operators?
3. What is operand?
4. What is operator precedence?
5. What is operator associativity?
6. Why is understanding precedence important?
7. What is short-circuit evaluation?
8. What is the difference between expression and statement?
9. What is the difference between `==` and `===`?
10. What is the difference between `&&` and `||`?

## Arithmetic Operators

11. List all arithmetic operators in JavaScript.
12. What is the difference between `+` used for addition and concatenation?
13. What is the difference between `++i` and `i++`?
14. What is the result of `5 / 0`?
15. What is the result of `0 / 5`?
16. What is the result of `5 % 2`?
17. What is exponentiation operator?
18. What happens when arithmetic operators are used with strings?
19. What happens when arithmetic operators are used with booleans?
20. What is `NaN` propagation in arithmetic operations?

## Assignment Operators

21. What is simple assignment operator?
22. What are compound assignment operators?
23. Difference between `x = x + 5` and `x += 5`?
24. What is logical assignment operator (`&&=`, `||=`, `??=`)?
25. When should you use `??=` instead of `||=`?

## Comparison Operators

26. List comparison operators in JavaScript.
27. What is the result of `"5" > 3` and why?
28. How does JavaScript compare strings?
29. What is lexicographical comparison?
30. What is the difference between `!=` and `!==`?
31. Why should strict comparison be preferred?
32. What happens when you compare object with object?

## Logical Operators

33. What does `&&` return?
34. What does `||` return?
35. What does `!` do?
36. What is short-circuit behavior of `&&`?
37. What is short-circuit behavior of `||`?
38. What is the difference between `||` and `??`?
39. When should nullish coalescing operator be used?
40. What is the output of `0 || 10`?
41. What is the output of `0 ?? 10`?

## Bitwise Operators (Basic Level Only)

42. What are bitwise operators?
43. What does `&` operator do?
44. What does `|` operator do?
45. What does `^` operator do?
46. What does `~` operator do?
47. What does left shift (`<<`) do?
48. What does right shift (`>>`) do?

## Ternary & Special Operators

49. What is ternary operator?
50. When should you use ternary operator?
51. What is `typeof` operator?
52. What is `instanceof` operator?
53. What is optional chaining operator (`?.`)?
54. What is spread operator (`...`) used for? (Only basic idea, deep later.)

## Debug Thinking

55. What is the result of `true && false || true`?
56. What is the result of `3 > 2 > 1` and why?
57. What is the result of `"2" + 2 * 3` and why?
58. What is the result of `[] == ![]` and why?
59. What is the result of `null || undefined || 5`?
60. What is the result of `null ?? undefined ?? 5`?

## Coding Practice (Basic to Advanced)

61. Write a program to swap two numbers using arithmetic operators.
62. Write a function that checks if a number is even using bitwise operator.
63. Write a program that demonstrates difference between prefix and postfix increment.
64. Write a function that returns maximum of two numbers without using `Math.max`.
65. Write a function that returns maximum of three numbers using ternary operator.
66. Write a function that safely access nested object property using optional chaining.
67. Write a function that uses logical operators to provide default values.
68. Write a mini calculator program using switch and operators.
69. Write a function that checks if a number is power of 2 using bitwise logic.
70. Write a program that demonstrates operator precedence using multiple operators in one expression.

# 06 - Conditionals

## Conceptual Understanding

1. What are conditional statements in JavaScript?
2. Why do we need conditionals in programming?
3. What is the basic syntax of `if` statement?
4. What is the difference between `if` and `if...else`?
5. What is `else if` ladder?
6. How does JavaScript evaluate conditions?
7. What values are considered falsy in condition checks?
8. Can we use non-boolean values inside `if` condition?
9. What is nested `if`?
10. When should nested conditionals be avoided?

## if, else, else-if Deep Understanding

11. What happens if multiple `else if` conditions are true?
12. How does JavaScript decide which block to execute?
13. What is the difference between multiple `if` statements and `if...else if` ladder?
14. Can we write `if` without curly braces?
15. Why is it recommended to always use curly braces?
16. What is early return pattern?
17. How does indentation affect readability but not execution?
18. What is guard clause?
19. What is condition chaining?
20. How can complex conditions reduce code clarity?

## Switch Statement

21. What is `switch` statement?
22. When should we prefer `switch` over `if...else`?
23. What is the role of `break` in switch?
24. What happens if we forget `break`?
25. What is fall-through behavior?
26. Can switch compare using strict equality?
27. Can we use expressions inside switch case?
28. What is default case?
29. Can multiple cases share same block?
30. What are limitations of switch?

## Ternary Operator in Conditionals

31. What is ternary operator syntax?
32. When should ternary be avoided?
33. Can ternary operators be nested?
34. What are readability concerns with nested ternary?
35. Difference between ternary and if-else in behavior?

## Logical Operators with Conditionals

36. How can `&&` be used instead of `if`?
37. How can `||` provide default values?
38. What is nullish coalescing operator in conditionals?
39. What is short-circuiting in conditions?
40. When should logical operators not replace conditionals?

## Debug Thinking

41. What is the output of:
    `if (0) { console.log("A") } else { console.log("B") }`
42. What is the output of:
    `if ("") console.log("Yes");`
43. What happens if condition is `NaN`?
44. What is the result of:
    `if ([]) console.log("True");`
45. What is the result of:
    `if ({}) console.log("True");`
46. Why does `if (2 > 1 > 0)` not behave as expected?
47. What is the difference between `== null` and `=== null` in conditions?
48. What happens if you write `if (a = 5)`?
49. Why is accidental assignment inside condition dangerous?
50. How can you debug complex conditional logic?

## Coding Practice (Basic to Advanced)

51. Write a program to check if a number is positive, negative, or zero.
52. Write a program to check if a number is even or odd.
53. Write a function to check if a year is leap year.
54. Write a function to find largest among three numbers.
55. Write a grading system program using `if...else`.
56. Write a menu-driven program using `switch`.
57. Write a calculator using switch.
58. Write a function that checks if a character is vowel or consonant.
59. Write a function that checks if a number is divisible by both 3 and 5.
60. Write a program that prints "FizzBuzz" (classic conditional problem).
61. Write a function that validates a password using multiple conditions.
62. Write a function that returns absolute value without using `Math.abs`.
63. Write a function that determines triangle type (equilateral, isosceles, scalene).
64. Write a function that checks if a number lies within a given range.
65. Refactor a deeply nested if-else into guard clauses.

# 07 - Loops

## Conceptual Understanding

1. What is a loop in JavaScript?
2. Why do we need loops?
3. What problem do loops solve in programming?
4. What are the different types of loops in JavaScript?
5. What is iteration?
6. What is the difference between loop and recursion? (Recursion will be covered later.)
7. What is loop control variable?
8. What is loop termination condition?
9. What is infinite loop?
10. How can infinite loops occur?

## for Loop Deep Understanding

11. What is the syntax of `for` loop?
12. What are the three parts of a `for` loop?
13. In what order are initialization, condition, and increment executed?
14. Can we omit any part of the `for` loop?
15. What happens if condition is omitted?
16. When should `for` loop be preferred?
17. What is nested `for` loop?
18. What is time complexity of nested loops?
19. How does variable scope behave inside `for` loop with `var`?
20. How does variable scope behave inside `for` loop with `let`?

## while Loop

21. What is the syntax of `while` loop?
22. When should `while` loop be preferred over `for` loop?
23. What happens if condition is false initially?
24. How can infinite loop occur in `while`?
25. What is difference between `for` and `while` logically?

## do...while Loop

26. What is `do...while` loop?
27. How is it different from `while`?
28. Why does `do...while` execute at least once?
29. When should we use `do...while`?
30. What is a real-world scenario for `do...while`?

## Loop Control Statements

31. What is `break`?
32. What is `continue`?
33. What is the difference between `break` and `continue`?
34. Can we use `break` outside loop?
35. What is labeled statement? (Basic idea only.)
36. How does `continue` behave in nested loops?
37. What happens if `break` is used inside nested loops?

## for...of and for...in (Basic Level Only)

38. What is `for...of` loop?
39. What is `for...in` loop?
40. What is the difference between `for...of` and `for...in`?
41. When should we avoid `for...in`?
42. Can `for...of` be used on objects directly?

## Debug Thinking

43. What will happen if increment step is missing?
44. What is the output of:
    `for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }`
    (Async concept will be studied later, just observe behavior.)
45. What is the output of:
    `for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }`
46. Why does changing `let` to `var` change behavior in loops?
47. What happens if loop condition never becomes false?
48. What is the result of modifying array length inside loop?
49. What happens when you use `break` inside `switch` inside loop?
50. What is off-by-one error in loops?

## Coding Practice (Basic to Advanced)

51. Print numbers from 1 to 10 using `for`.
52. Print numbers from 10 to 1 using `while`.
53. Print even numbers between 1 and 50.
54. Print multiplication table of a number.
55. Find sum of first N natural numbers.
56. Find factorial of a number.
57. Reverse a number using loop.
58. Count digits in a number.
59. Check if a number is palindrome.
60. Print Fibonacci series up to N terms.
61. Print all prime numbers up to N.
62. Find greatest common divisor (GCD) using loop.
63. Count vowels in a string using loop.
64. Reverse a string manually (without built-in methods).
65. Find largest element in an array.
66. Remove duplicates from an array using loop logic only.
67. Create pattern printing (right triangle star pattern).
68. Create pyramid pattern.
69. Flatten a 2D array using nested loops.
70. Simulate simple ATM menu using `do...while`.

# 08 - Functions

## Conceptual Understanding

1. What is a function in JavaScript?
2. Why do we need functions?
3. What problem do functions solve in large applications?
4. What is function declaration?
5. What is function expression?
6. What is the difference between function declaration and function expression?
7. What is a parameter?
8. What is an argument?
9. What is the difference between parameter and argument?
10. What is return value of a function?

## Function Syntax & Behavior

11. What happens if a function does not return anything?
12. What is default return value of a function?
13. Can a function return multiple values?
14. What happens if you write code after `return`?
15. What is function invocation?
16. What is difference between calling and referencing a function?
17. What is function hoisting?
18. Are function expressions hoisted?
19. What is anonymous function?
20. What is named function expression?

## Parameters & Arguments Deep Understanding

21. What happens if fewer arguments are passed than parameters?
22. What happens if more arguments are passed than parameters?
23. What is default parameter?
24. How do you assign default values to parameters?
25. What is rest parameter? (Basic idea only, deep later.)
26. What is arguments object?
27. Is arguments object available in arrow functions?
28. What is pass-by-value in functions?
29. What happens when object is passed to function?
30. How can function modify external variables?

## Function Scope (Basic Only)

31. What is local scope?
32. What is global scope?
33. Can a function access global variables?
34. Can outside code access local variables?
35. What is variable shadowing inside functions?

## Debug Thinking

36. What is the output of:

    ```
    function test() {
      console.log(a);
      var a = 5;
    }
    test();
    ```

37. What happens if you call a function before it is defined?
38. What is the difference between:
    `console.log(func)` and `console.log(func())`?
39. What happens if function name is same as variable name?
40. What is the output of:

    ```
    function sum(a, b) {
      return;
      a + b;
    }
    console.log(sum(2,3));
    ```

## Coding Practice (Basic to Advanced)

41. Write a function that adds two numbers.
42. Write a function that subtracts two numbers.
43. Write a function that multiplies two numbers.
44. Write a function that divides two numbers.
45. Write a function that checks if a number is prime.
46. Write a function that returns factorial of a number.
47. Write a function that reverses a string.
48. Write a function that checks if a string is palindrome.
49. Write a function that counts vowels in a string.
50. Write a function that finds maximum of three numbers.
51. Write a function that removes duplicates from array.
52. Write a function that returns sum of all numbers in array.
53. Write a function that flattens a 2D array (without using built-in flat).
54. Write a function that generates Fibonacci sequence up to N.
55. Write a function that converts Celsius to Fahrenheit.
56. Write a function that validates email (basic logic).
57. Write a function that returns number of words in a sentence.
58. Write a function that capitalizes first letter of each word.
59. Write a function that checks if two strings are anagrams.
60. Write a higher-order function that accepts a function and executes it.
61. Write a function that executes callback after N seconds (basic setTimeout usage).
62. Write a function that memoizes result of another function (basic idea only).
63. Write a recursive function to calculate factorial. (Recursion will be studied deeper later.)
64. Write a function that counts frequency of elements in array.
65. Write a function that finds second largest number in array.
66. Write a function that rotates array by K positions.
67. Write a function that checks if array is sorted.
68. Write a function that returns unique characters from string.
69. Write a function that finds longest word in sentence.
70. Write a function that implements simple calculator using functions.

# 09 - Arrow Functions

## Conceptual Understanding

1. What is an arrow function?
2. Why were arrow functions introduced in ES6?
3. What is the basic syntax of an arrow function?
4. What is the difference between normal function and arrow function?
5. Can arrow functions have a name?
6. Are arrow functions hoisted?
7. Can arrow functions be used as constructors?
8. Do arrow functions have their own `this`?
9. What does lexical `this` mean?
10. When should arrow functions be avoided?

## Syntax Variations

11. How do you write arrow function with one parameter?
12. How do you write arrow function with multiple parameters?
13. How do you write arrow function with no parameters?
14. When can parentheses be omitted?
15. When can curly braces be omitted?
16. What is implicit return in arrow functions?
17. What happens if you use curly braces without `return`?
18. How to return an object from arrow function?
19. What is concise body vs block body?
20. What is single-expression arrow function?

## this Behavior (Core Difference)

21. How does `this` behave in normal functions?
22. How does `this` behave in arrow functions?
23. What is lexical scope of `this`?
24. Why arrow functions are useful in callbacks?
25. What happens if arrow function is used as object method?
26. What is the difference between:

    ```
    const obj = {
      value: 10,
      normal: function() { return this.value },
      arrow: () => this.value
    }
    ```

27. Why arrow functions are not suitable for event handlers in some cases?
28. Do arrow functions have `arguments` object?
29. How can we access arguments in arrow functions?
30. Can arrow functions be used inside class methods safely?

## Debug Thinking

31. What is the output of:

    ```
    const add = (a, b) => a + b;
    console.log(add(2,3));
    ```

32. What is the output of:

    ```
    const sum = (a, b) => { a + b };
    console.log(sum(2,3));
    ```

33. What is the difference between:
    `(a) => a * 2` and `(a) => { return a * 2 }`?
34. Why does this not work as expected?

    ```
    const obj = {
      value: 5,
      getValue: () => this.value
    }
    console.log(obj.getValue());
    ```

35. What happens if arrow function is used with `new` keyword?
36. What is the output of:

    ```
    function test() {
      const arrow = () => console.log(this);
      arrow();
    }
    test();
    ```

37. How does arrow function behave inside `setTimeout`?
38. What is the difference between:

    ```
    setTimeout(function() { console.log(this); }, 0);
    setTimeout(() => { console.log(this); }, 0);
    ```

## Coding Practice (Basic to Advanced)

39. Convert a normal function to arrow function.
40. Write an arrow function to add two numbers.
41. Write an arrow function to check if a number is even.
42. Write an arrow function that returns square of a number.
43. Write an arrow function that returns cube of a number.
44. Write an arrow function to reverse a string.
45. Write an arrow function to find maximum in array.
46. Write an arrow function to filter even numbers from array.
47. Write an arrow function to calculate sum of array elements.
48. Write an arrow function that returns factorial (non-recursive).
49. Write an arrow function that returns Fibonacci sequence.
50. Write an arrow function to capitalize first letter of string.
51. Write an arrow function that checks palindrome.
52. Write an arrow function that finds longest word in sentence.
53. Write an arrow function that removes duplicates from array.
54. Write an arrow function that returns unique characters from string.
55. Write an arrow function that uses default parameters.
56. Write an arrow function using rest parameter (basic usage).
57. Write a higher-order arrow function that takes function as argument.
58. Write an arrow function that returns another arrow function.
59. Rewrite a callback function using arrow syntax.
60. Create a mini calculator using arrow functions only.

# 10 - Function Scope

## Conceptual Understanding

1. What is scope in JavaScript?
2. Why is scope important in programming?
3. What are the different types of scope in JavaScript?
4. What is global scope?
5. What is function scope?
6. What is block scope?
7. What is lexical scope?
8. How does JavaScript determine variable accessibility?
9. What is scope chain?
10. What is environment record? (Basic idea only.)

## Global Scope

11. What happens when a variable is declared outside any function?
12. Can global variables be accessed inside functions?
13. Why are global variables considered risky?
14. What happens if you modify a global variable inside a function?
15. What is accidental global variable?
16. How can accidental globals occur?
17. What is difference between `var` global and `let` global?
18. Are global variables attached to `window` object in browser?
19. What happens in Node.js global scope?
20. Why should global pollution be avoided?

## Function Scope

21. What is function-scoped variable?
22. Which keyword creates function scope?
23. Can `var` escape block scope inside function?
24. What happens when variable is declared inside function?
25. Can outside code access function variables?
26. What is shadowing in function scope?
27. What happens if function parameter name matches global variable?
28. What is variable masking?
29. How does nested function access outer variables?
30. What is closure preview? (Deep later.)

## Block Scope

31. Which keywords are block-scoped?
32. What is a block in JavaScript?
33. Does `if` create new scope?
34. Does `for` create new scope?
35. What is difference between `var` and `let` in loops?
36. What is Temporal Dead Zone? (Only intro, deep later.)
37. What happens if we access `let` before declaration?
38. What happens if we redeclare `let` in same block?
39. Why is block scope safer?
40. What is scope isolation?

## Scope Chain & Lexical Environment

41. How does JavaScript resolve variable lookup?
42. What happens if variable is not found in local scope?
43. What is outer lexical environment?
44. Can inner function modify outer variable?
45. What happens if two nested scopes have same variable name?
46. What is variable resolution order?
47. How does scope chain affect performance?
48. What is difference between lexical scope and dynamic scope?
49. Why JavaScript uses lexical scoping?
50. How does closure depend on scope chain?

## Debug Thinking

51. What is the output of:

    ```
    var a = 10;
    function test() {
      console.log(a);
      var a = 5;
    }
    test();
    ```

52. What is the output of:

    ```
    let a = 10;
    function test() {
      console.log(a);
    }
    test();
    ```

53. What is the output of:

    ```
    function outer() {
      let x = 5;
      function inner() {
        console.log(x);
      }
      inner();
    }
    outer();
    ```

54. What happens if you remove `let` inside function and assign directly?
55. Why does this throw error?

    ```
    {
      console.log(a);
      let a = 5;
    }
    ```

56. What is the difference between:

    ```
    for (var i = 0; i < 3; i++) {}
    ```

    and

    ```
    for (let i = 0; i < 3; i++) {}
    ```

57. What is scope of variable declared inside `try` block?
58. What happens when same variable name is used in nested blocks?
59. Can function access variable declared after it?
60. Why is understanding scope critical for debugging?

## Coding Practice (Basic to Advanced)

61. Write a program to demonstrate global vs local scope.
62. Write a function that modifies global variable (observe behavior).
63. Write a program that shows block scope using `let`.
64. Write a program that shows `var` ignoring block scope.
65. Create nested functions and access outer variables.
66. Write a function that demonstrates shadowing.
67. Write a program that prevents global pollution.
68. Write a function that returns another function accessing outer variable (closure preview).
69. Write a loop with `var` and fix scope issue.
70. Write a loop with `let` and observe correct behavior.
71. Write a function that safely encapsulates variables.
72. Create an IIFE to isolate scope.
73. Demonstrate variable masking inside nested blocks.
74. Write a small counter using closure (preview only).
75. Refactor code to remove global variables.

# 11 - Closures

## Conceptual Understanding

1. What is a closure in JavaScript?
2. Why do closures exist in JavaScript?
3. What is the relationship between lexical scope and closures?
4. When is a closure created?
5. Does every function create a closure?
6. What does it mean that a function “remembers” its outer variables?
7. Why are closures important in real-world applications?
8. What problem do closures solve?
9. How are closures different from normal nested functions?
10. Are closures related to scope chain?

## Internal Behavior

11. What happens to outer variables after outer function finishes execution?
12. Why are outer variables not garbage collected in closures?
13. What is lexical environment in closure context?
14. How does scope chain work in closures?
15. Can closure access global variables?
16. Can closure modify outer variables?
17. What happens if multiple closures share same outer variable?
18. What is private variable using closure?
19. How do closures help in data hiding?
20. What is memory implication of closures?

## Practical Understanding

21. What is a function factory?
22. How does closure help create function factories?
23. What is currying (basic idea only)?
24. How are closures used in event handlers?
25. How are closures used in callbacks?
26. How do closures help in module pattern?
27. What is IIFE and how is it related to closure?
28. What is difference between closure and block scope?
29. What is closure trap in loops?
30. How does `let` solve closure problem in loops?

## Debug Thinking

31. What is the output of:

    ```
    function outer() {
      let count = 0;
      return function inner() {
        count++;
        console.log(count);
      }
    }
    const fn = outer();
    fn();
    fn();
    ```

32. Why does the above code remember `count`?
33. What is the output of:

    ```
    for (var i = 0; i < 3; i++) {
      setTimeout(function() {
        console.log(i);
      }, 0);
    }
    ```

34. Why does it print same number multiple times?
35. How to fix above issue using closure?
36. How to fix above issue using `let`?
37. What happens if closure captures object and object changes?
38. What happens if outer variable is reassigned?
39. What is difference between creating closure inside loop vs outside?
40. How can closures cause memory leaks?

## Coding Practice (Basic to Advanced)

41. Write a function that returns a counter using closure.
42. Write a function that creates a private variable and exposes getter.
43. Write a function factory that multiplies by a fixed number.
44. Write a function that tracks number of times it was called.
45. Write a function that generates unique IDs using closure.
46. Write a function that creates a simple bank account with deposit and withdraw methods (private balance).
47. Write a function that caches results (simple memoization).
48. Write a function that limits number of times another function can run.
49. Write a function that implements once() behavior.
50. Write a function that delays execution but remembers initial parameters.
51. Write a function that creates multiple independent counters.
52. Implement simple module pattern using IIFE.
53. Fix closure issue in loop without using `let`.
54. Write a function that demonstrates closure with nested 3 levels.
55. Write a function that simulates private config object.
56. Create a rate limiter using closure (basic logic).
57. Create a debounce function (basic idea only).
58. Create a throttle function (basic idea only).
59. Write a function that tracks history of values using closure.
60. Build a small task manager using closure for private state.

# 12 - Hoisting

## Conceptual Understanding

1. What is hoisting in JavaScript?
2. Does JavaScript physically move code to the top?
3. When does hoisting happen?
4. What is the creation phase of execution context?
5. What is the execution phase?
6. What gets hoisted in JavaScript?
7. Are variables hoisted?
8. Are functions hoisted?
9. What is the difference between variable hoisting and function hoisting?
10. Why is understanding hoisting important for debugging?

## Variable Hoisting

11. What happens when `var` is hoisted?
12. What value does a `var` variable have before assignment?
13. What happens when `let` is hoisted?
14. What happens when `const` is hoisted?
15. What is Temporal Dead Zone (TDZ)?
16. When does TDZ start and end?
17. Why accessing `let` before declaration throws error?
18. Why accessing `var` before declaration does not throw error?
19. What type of error is thrown for TDZ violation?
20. How is `var` hoisting different from `let`/`const` hoisting internally?

## Function Hoisting

21. Are function declarations hoisted fully?
22. What does “fully hoisted” mean?
23. Are function expressions hoisted?
24. What happens if you call function expression before definition?
25. Are arrow functions hoisted?
26. What happens if arrow function is declared using `var`?
27. What happens if arrow function is declared using `let`?
28. What is difference between:

    ```
    function test() {}
    ```

    and

    ```
    const test = function() {}
    ```

29. Can function declaration override variable with same name?
30. What happens if variable and function have same name?

## Execution Context & Hoisting

31. What is global execution context?
32. What is function execution context?
33. What is variable environment?
34. What is memory allocation phase?
35. What is code execution phase?
36. How does JavaScript engine prepare memory before execution?
37. What is difference between undefined and not defined?
38. When does ReferenceError occur?
39. When does TypeError occur in hoisting context?
40. How does hoisting behave inside functions?

## Debug Thinking

41. What is the output of:

    ```
    console.log(a);
    var a = 5;
    ```

42. What is the output of:

    ```
    console.log(a);
    let a = 5;
    ```

43. What is the output of:

    ```
    greet();
    function greet() {
      console.log("Hello");
    }
    ```

44. What is the output of:

    ```
    greet();
    var greet = function() {
      console.log("Hello");
    }
    ```

45. What is the output of:

    ```
    var a = 1;
    function test() {
      console.log(a);
      var a = 2;
    }
    test();
    ```

46. Why does above example not print 1?
47. What happens in this case:

    ```
    var a = 1;
    function a() {}
    console.log(typeof a);
    ```

48. What is the difference between:

    ```
    var a;
    ```

    and

    ```
    let a;
    ```

49. What is the output of:

    ```
    console.log(typeof x);
    ```

50. What is the difference between:

    ```
    console.log(x);
    ```

    and

    ```
    console.log(typeof x);
    ```

## Coding Practice (Basic to Advanced)

51. Write a program demonstrating `var` hoisting.
52. Write a program demonstrating TDZ with `let`.
53. Write a program that calls function before declaration.
54. Write a program that fails due to function expression hoisting.
55. Convert a hoisting bug into correct version.
56. Write a program that shows difference between undefined and not defined.
57. Create a function inside function and observe hoisting behavior.
58. Demonstrate hoisting inside block with `let`.
59. Rewrite a `var` based code using `let` and explain difference.
60. Create a mini example that explains creation phase and execution phase clearly.

# 13 - this Keyword

## Conceptual Understanding

1. What is `this` in JavaScript?
2. Is `this` determined at function creation time or call time?
3. Why is `this` considered dynamic?
4. What are the different contexts where `this` behaves differently?
5. What is global context for `this`?
6. What is function context for `this`?
7. What is object method context for `this`?
8. What is constructor context for `this`?
9. What is lexical `this`?
10. Why is `this` one of the most confusing concepts in JavaScript?

## this in Global Context

11. What does `this` refer to in browser global scope?
12. What does `this` refer to in Node.js global scope?
13. What is the value of `this` in strict mode?
14. What is difference between strict and non-strict mode for `this`?
15. Is `this` equal to `window` in browser?
16. Is `this` equal to `global` in Node.js?
17. What happens if you log `this` in top-level code?
18. What happens to `this` inside ES module?
19. How does strict mode change default binding?
20. Why should we prefer strict mode?

## this Inside Regular Functions

21. What is default binding rule?
22. What is implicit binding rule?
23. What is explicit binding rule?
24. What is new binding rule?
25. What happens when function is called normally?
26. What happens when function is called as object method?
27. What happens when function reference is assigned to variable?
28. What happens when function is called with `call()`?
29. What happens when function is called with `apply()`?
30. What happens when function is called with `bind()`?

## this Inside Arrow Functions

31. Do arrow functions have their own `this`?
32. What does lexical `this` mean?
33. How does arrow function capture `this`?
34. Why are arrow functions useful in callbacks?
35. What happens if arrow function is used as object method?
36. What happens if arrow function is used as constructor?
37. Can arrow function change `this` using call/apply/bind?
38. Why arrow functions ignore `new` keyword?
39. How does arrow function behave inside class?
40. What is difference between:

    ```
    function test() {}
    ```

    and

    ```
    const test = () => {}
    ```

    in context of `this`?

## Constructor & new Keyword

41. What happens when we use `new` keyword?
42. How does `new` change value of `this`?
43. What are the steps of object creation using `new`?
44. What happens if constructor does not return anything?
45. What happens if constructor returns object?
46. What happens if constructor returns primitive?
47. What is difference between constructor function and normal function?
48. Why constructor functions start with capital letter by convention?
49. What is prototype relation with `this`?
50. How does `this` behave inside prototype method?

## Debug Thinking

51. What is the output of:

    ```
    console.log(this);
    ```

52. What is the output of:

    ```
    function test() {
      console.log(this);
    }
    test();
    ```

53. What is the output of:

    ```
    const obj = {
      value: 10,
      getValue: function() {
        return this.value;
      }
    };
    console.log(obj.getValue());
    ```

54. What happens if:

    ```
    const fn = obj.getValue;
    console.log(fn());
    ```

55. What is the output of:

    ```
    const obj = {
      value: 10,
      getValue: () => this.value
    };
    console.log(obj.getValue());
    ```

56. What happens in strict mode for default binding?
57. What is the output of:

    ```
    function Person(name) {
      this.name = name;
    }
    const p = Person("John");
    console.log(p);
    ```

58. What happens if we forget `new` while calling constructor?
59. What is the output of:

    ```
    function Person(name) {
      this.name = name;
    }
    const p = new Person("John");
    console.log(p.name);
    ```

60. Why understanding `this` is critical for debugging object-oriented JavaScript?

## Coding Practice (Basic to Advanced)

61. Create an object with method that uses `this`.
62. Create a constructor function and instantiate it.
63. Demonstrate default binding.
64. Demonstrate implicit binding.
65. Demonstrate explicit binding using `call`.
66. Demonstrate explicit binding using `apply`.
67. Demonstrate `bind` and delayed execution.
68. Convert a regular function to arrow function and observe `this`.
69. Fix a broken `this` context inside callback.
70. Write a class-like constructor using function and prototype.
71. Create multiple objects using constructor and verify `this`.
72. Write a function that logs `this` in different contexts.
73. Demonstrate new binding rule clearly.
74. Show difference between arrow and normal method in object.
75. Refactor code to avoid incorrect `this` usage.

# 14 - call, apply, bind

## Conceptual Understanding

1. What are `call`, `apply`, and `bind` in JavaScript?
2. Why do we need `call`, `apply`, and `bind`?
3. What problem do they solve?
4. Which binding rule do they override?
5. What is explicit binding?
6. What is difference between implicit and explicit binding?
7. Are `call`, `apply`, and `bind` methods of all functions?
8. What does the first argument of `call` represent?
9. What happens if first argument is `null` or `undefined`?
10. How do these methods relate to `this` keyword?

## call()

11. What is syntax of `call()`?
12. How are arguments passed in `call()`?
13. When should we use `call()`?
14. What happens if no arguments are passed?
15. Can we borrow methods using `call()`?
16. What is function borrowing?
17. Can we use `call()` to invoke constructor?
18. What happens if function returns value with `call()`?
19. Does `call()` execute immediately?
20. Can `call()` change lexical `this` of arrow function?

## apply()

21. What is syntax of `apply()`?
22. How are arguments passed in `apply()`?
23. What is difference between `call()` and `apply()`?
24. When should `apply()` be preferred?
25. Can we use `apply()` for method borrowing?
26. What happens if second argument is not array?
27. Does `apply()` execute immediately?
28. Can `apply()` override arrow function `this`?
29. What happens if arguments array is empty?
30. How can `apply()` be used with `Math.max`?

## bind()

31. What is syntax of `bind()`?
32. What is the major difference between `bind()` and `call()`?
33. Does `bind()` execute immediately?
34. What does `bind()` return?
35. What is partial application?
36. How can `bind()` be used for partial application?
37. Can bound function be used as constructor?
38. What happens if we bind multiple times?
39. Can `bind()` change `this` of arrow function?
40. When should we use `bind()` instead of arrow function?

## Internal & Behavior Understanding

41. What happens internally when `call()` is used?
42. What happens internally when `bind()` is used?
43. Can we simulate `bind()` using closure?
44. What is difference between hard binding and soft binding?
45. How does explicit binding interact with `new`?
46. What happens if bound function is called with `new`?
47. Which binding rule has highest priority?
48. What is order of binding precedence?
49. Can `this` be permanently fixed?
50. Why understanding binding precedence is important?

## Debug Thinking

51. What is the output of:

    ```
    function greet() {
      console.log(this.name);
    }
    const obj = { name: "John" };
    greet.call(obj);
    ```

52. What is the output of:

    ```
    greet.apply(obj);
    ```

53. What is the output of:

    ```
    const fn = greet.bind(obj);
    fn();
    ```

54. What happens if:

    ```
    const fn = greet.bind(obj);
    fn.call({ name: "Mike" });
    ```

55. Why does above still print original name?
56. What happens if arrow function is used with bind?
57. What is the output of:

    ```
    const obj = {
      name: "A",
      greet: function() {
        return function() {
          console.log(this.name);
        }
      }
    };
    obj.greet()();
    ```

58. How to fix above using `bind()`?
59. How to fix above using arrow function?
60. What is the difference between:

    ```
    fn.bind(obj1).bind(obj2)
    ```

## Coding Practice (Basic to Advanced)

61. Write a program demonstrating `call()` usage.
62. Write a program demonstrating `apply()` usage.
63. Write a program demonstrating `bind()` usage.
64. Implement function borrowing using `call()`.
65. Use `apply()` to find max element in array.
66. Create a constructor and use `call()` for inheritance simulation (basic idea only).
67. Write a function that permanently binds `this`.
68. Implement custom `myBind()` function.
69. Implement custom `myCall()` function.
70. Implement custom `myApply()` function.
71. Demonstrate partial application using `bind()`.
72. Fix a callback losing `this` using `bind()`.
73. Compare arrow function vs bind in callback.
74. Demonstrate binding precedence rules.
75. Build a small logger utility using bind.

# 15 - Arrays Basics

## Conceptual Understanding

1. What is an array in JavaScript?
2. Why do we need arrays?
3. How are arrays different from variables?
4. Are arrays primitive or reference types?
5. How are arrays stored in memory?
6. What is zero-based indexing?
7. Can arrays store multiple data types?
8. What is the length property of array?
9. Is array length fixed in JavaScript?
10. What happens when you assign value to an index beyond current length?

## Array Creation

11. How can you create an array using literal syntax?
12. How can you create an array using `new Array()`?
13. What is difference between `[]` and `new Array()`?
14. What happens when you pass single number to `new Array(5)`?
15. What happens when you pass multiple values to `new Array(1,2,3)`?
16. How do you access array elements?
17. What happens if you access out-of-bounds index?
18. Can you change array length manually?
19. What happens if you reduce array length?
20. Can array have empty slots (holes)?

## Basic Operations

21. How do you add element at end of array?
22. How do you remove element from end?
23. How do you add element at beginning?
24. How do you remove element from beginning?
25. What is difference between `push` and `unshift`?
26. What is difference between `pop` and `shift`?
27. How do you update an element in array?
28. How do you find index of an element?
29. What is difference between `indexOf` and `includes`?
30. How do you check if a variable is an array?

## Array Nature & Behavior

31. Why is array considered object in JavaScript?
32. What does `typeof []` return?
33. Why does `typeof []` return that value?
34. How do arrays handle sparse elements?
35. What is difference between empty array and array with empty values?
36. What happens if you delete an array element using `delete`?
37. Why should `delete` not be used on arrays?
38. What is difference between `delete` and `splice`?
39. How does array reference copying work?
40. What happens when you assign one array to another variable?

## Debug Thinking

41. What is the output of:

    ```
    const arr = [1,2,3];
    arr.length = 1;
    console.log(arr);
    ```

42. What is the output of:

    ```
    const arr = [1,2,3];
    delete arr[1];
    console.log(arr);
    ```

43. What is the output of:

    ```
    const arr = [];
    arr[5] = 10;
    console.log(arr.length);
    ```

44. Why does above length not equal 1?
45. What is the output of:

    ```
    const a = [1,2];
    const b = a;
    b.push(3);
    console.log(a);
    ```

46. Why does modifying `b` affect `a`?
47. What is the difference between:

    ```
    const a = [1,2];
    const b = [...a];
    ```

48. What happens if you compare two arrays using `===`?
49. Why does `[1,2] === [1,2]` return false?
50. What is off-by-one error in array iteration?

## Coding Practice (Basic to Advanced)

51. Create an array of 10 numbers and print them.
52. Write a program to find sum of array elements.
53. Write a program to find average of array.
54. Write a program to find maximum element in array.
55. Write a program to find minimum element in array.
56. Write a program to reverse array without built-in methods.
57. Write a program to remove duplicates from array (basic loop logic).
58. Write a program to count frequency of elements in array.
59. Write a program to merge two arrays manually.
60. Write a program to check if array is palindrome.
61. Write a program to rotate array left by one position.
62. Write a program to rotate array right by one position.
63. Write a program to find second largest element.
64. Write a program to find common elements between two arrays.
65. Write a program to remove specific element from array.
66. Write a program to insert element at specific index.
67. Write a program to flatten 2D array (manual nested loop).
68. Write a program to separate even and odd numbers.
69. Write a program to move all zeros to end.
70. Write a program to sort array manually (basic bubble sort logic).
71. Write a program to find missing number in array of 1 to N.
72. Write a program to check if two arrays are equal (manual comparison).
73. Write a program to create copy of array without reference issue.
74. Write a program to remove all falsy values from array.
75. Write a small menu-driven array manager (add/remove/display).

# 16 - Arrays Methods

## Conceptual Understanding

1. What are array methods in JavaScript?
2. Why are array methods important?
3. What is the difference between mutating and non-mutating methods?
4. Which array methods modify original array?
5. Which array methods return new array?
6. What is callback function in array methods?
7. What is higher-order function?
8. What is difference between `forEach` and `map`?
9. What is difference between `map` and `filter`?
10. What is difference between `find` and `filter`?

## Iteration Methods

11. What does `forEach()` do?
12. Does `forEach()` return anything?
13. What does `map()` return?
14. When should `map()` be used?
15. What does `filter()` return?
16. What does `find()` return?
17. What does `some()` do?
18. What does `every()` do?
19. What is difference between `some()` and `every()`?
20. What is signature of callback in these methods?

## Transformation & Aggregation

21. What does `reduce()` do?
22. What are parameters of `reduce()`?
23. What is accumulator?
24. What happens if initial value is not provided in reduce?
25. How to sum array using reduce?
26. How to flatten array using reduce?
27. How to count frequency using reduce?
28. What does `flat()` do?
29. What does `flatMap()` do?
30. What is difference between `flat()` and `flatMap()`?

## Adding & Removing Elements

31. What does `push()` do?
32. What does `pop()` do?
33. What does `shift()` do?
34. What does `unshift()` do?
35. What does `splice()` do?
36. What does `slice()` do?
37. What is difference between `slice()` and `splice()`?
38. What does `concat()` do?
39. What does `fill()` do?
40. What does `copyWithin()` do?

## Searching & Sorting

41. What does `indexOf()` do?
42. What does `lastIndexOf()` do?
43. What does `includes()` do?
44. What does `sort()` do by default?
45. Why does `sort()` behave unexpectedly for numbers?
46. How to sort numbers correctly?
47. What does `reverse()` do?
48. What does `join()` do?
49. What does `toString()` do on array?
50. What is difference between `join()` and `toString()`?

## Debug Thinking

51. What is output of:

    ```
    [1,2,3].map(x => x * 2);
    ```

52. What is output of:

    ```
    [1,2,3].forEach(x => x * 2);
    ```

53. Why does `forEach()` not allow break?
54. What is output of:

    ```
    [1,2,3].reduce((acc, curr) => acc + curr);
    ```

55. What happens if reduce is used on empty array without initial value?
56. What is output of:

    ```
    [10,2,1].sort();
    ```

57. Why does above not sort numerically?
58. What is output of:

    ```
    const arr = [1,2,3];
    arr.splice(1,1);
    console.log(arr);
    ```

59. What is output of:

    ```
    const arr = [1,2,3];
    const newArr = arr.slice(1);
    console.log(arr, newArr);
    ```

60. What happens if callback does not return anything in map?

## Coding Practice (Basic to Advanced)

61. Double all elements using map.
62. Filter even numbers using filter.
63. Find first number greater than 10.
64. Check if all numbers are positive.
65. Check if any number is negative.
66. Calculate sum using reduce.
67. Calculate product using reduce.
68. Flatten 2D array using flat.
69. Flatten 2D array using reduce.
70. Remove duplicates using filter.
71. Count frequency of elements using reduce.
72. Sort array of numbers correctly.
73. Sort array of objects by property.
74. Group objects by property using reduce.
75. Convert array of strings to uppercase using map.
76. Remove falsy values using filter.
77. Find second largest number using array methods.
78. Create custom map() function.
79. Create custom filter() function.
80. Create custom reduce() function.

# 17 - Objects Basics

## Conceptual Understanding

1. What is an object in JavaScript?
2. Why do we need objects?
3. How are objects different from arrays?
4. Are objects primitive or reference types?
5. How are objects stored in memory?
6. What is a key-value pair?
7. What type can object keys be?
8. What happens if object keys are numbers?
9. What is dynamic nature of objects?
10. Can objects store different data types as values?

## Object Creation

11. How do you create an object using object literal?
12. How do you create an object using `new Object()`?
13. What is difference between `{}` and `new Object()`?
14. How do you access object properties?
15. What is dot notation?
16. What is bracket notation?
17. When should we use bracket notation?
18. How do you add new property to object?
19. How do you update existing property?
20. How do you delete property from object?

## Object Behavior & Nature

21. What happens when you access non-existing property?
22. What is difference between `undefined` property and non-existing property?
23. How does object reference copying work?
24. What happens when you assign one object to another variable?
25. Why modifying one object affects another reference?
26. How to create shallow copy of object?
27. What is difference between shallow copy and deep copy? (Basic intro only.)
28. What is `Object.assign()`?
29. What is spread operator in objects?
30. How to check if property exists in object?

## Property Handling

31. What is `in` operator?
32. What is `hasOwnProperty()`?
33. What is difference between `in` and `hasOwnProperty()`?
34. What is enumerable property?
35. What is difference between own property and inherited property?
36. How to iterate over object properties?
37. What is `Object.keys()`?
38. What is `Object.values()`?
39. What is `Object.entries()`?
40. What is difference between `for...in` and `Object.keys()`?

## Debug Thinking

41. What is output of:

    ```
    const obj = { a: 1 };
    obj.b = 2;
    console.log(obj);
    ```

42. What is output of:

    ```
    const obj = {};
    console.log(obj.x);
    ```

43. What is output of:

    ```
    const obj = { a: 1 };
    delete obj.a;
    console.log(obj);
    ```

44. What is output of:

    ```
    const a = { x: 1 };
    const b = a;
    b.x = 10;
    console.log(a.x);
    ```

45. Why does above print 10?
46. What is output of:

    ```
    const obj = { a: 1 };
    console.log("a" in obj);
    ```

47. What is output of:

    ```
    const obj = Object.create({ a: 1 });
    console.log(obj.hasOwnProperty("a"));
    ```

48. What is difference between:

    ```
    obj.prop
    ```

    and

    ```
    obj["prop"]
    ```

49. What happens if property name has space?
50. What happens if you use object as key inside another object?

## Coding Practice (Basic to Advanced)

51. Create an object representing a student.
52. Add new property to student object.
53. Update property value.
54. Delete a property.
55. Write a function that prints all keys of object.
56. Write a function that prints all values of object.
57. Write a function that counts number of properties.
58. Write a function to check if object is empty.
59. Write a function to merge two objects.
60. Write a function to clone object.
61. Write a function to deep clone object (basic recursive idea).
62. Write a function to check if property exists.
63. Write a function to convert object to array of keys.
64. Write a function to convert object to array of values.
65. Write a function to swap keys and values.
66. Write a function to remove specific property.
67. Write a function to freeze object.
68. Write a function to prevent adding new properties.
69. Write a function to iterate nested object.
70. Write a small object-based contact manager (add/remove/search).

# 18 - Objects Methods

## Conceptual Understanding

1. What is a method in JavaScript object?
2. How is method different from normal function?
3. How does `this` behave inside object method?
4. What happens if we use arrow function as object method?
5. Why are regular functions preferred for object methods?
6. Can methods access other properties of same object?
7. What is shorthand method syntax?
8. What is difference between:

   ```
   const obj = {
     greet: function() {}
   }
   ```

   and

   ```
   const obj = {
     greet() {}
   }
   ```

9. Can object methods be reassigned?
10. What is method borrowing?

## this & Method Behavior

11. What does `this` refer to inside method?
12. What happens if method is assigned to variable?
13. Why does method lose `this` context sometimes?
14. How can we fix lost `this`?
15. What is difference between implicit binding and explicit binding in methods?
16. What happens if arrow function is used inside method?
17. What is difference between arrow inside method vs arrow as method?
18. Can nested function inside method access `this`?
19. How to preserve `this` inside nested function?
20. What is common bug with `this` in callbacks?

## Built-in Object Methods

21. What is `Object.keys()`?
22. What is `Object.values()`?
23. What is `Object.entries()`?
24. What is `Object.assign()`?
25. What is `Object.freeze()`?
26. What is `Object.seal()`?
27. What is `Object.preventExtensions()`?
28. What is difference between freeze and seal?
29. What is difference between seal and preventExtensions?
30. What does `Object.create()` do?

## Property Descriptors (Basic Level)

31. What is property descriptor?
32. What are writable, enumerable, configurable?
33. How to get property descriptor?
34. What is `Object.defineProperty()`?
35. How to make property read-only?
36. How to make property non-enumerable?
37. What happens if configurable is false?
38. Can frozen object properties be changed?
39. What is difference between shallow freeze and deep freeze?
40. Why property descriptors are important?

## Debug Thinking

41. What is output of:

    ```
    const obj = {
      value: 10,
      getValue() {
        return this.value;
      }
    };
    console.log(obj.getValue());
    ```

42. What happens if:

    ```
    const fn = obj.getValue;
    console.log(fn());
    ```

43. Why does above not work as expected?
44. What happens if we bind the method?
45. What is output of:

    ```
    const obj = {
      value: 10,
      getValue: () => this.value
    };
    console.log(obj.getValue());
    ```

46. What is output of:

    ```
    const obj = { a: 1 };
    Object.freeze(obj);
    obj.a = 2;
    console.log(obj.a);
    ```

47. What happens if we add new property after freeze?
48. What is difference between freeze and seal in behavior?
49. What is output of:

    ```
    const obj = { a: 1 };
    Object.seal(obj);
    delete obj.a;
    console.log(obj.a);
    ```

50. What happens when property is non-enumerable?

## Coding Practice (Basic to Advanced)

51. Create an object with multiple methods.
52. Create object with shorthand method syntax.
53. Create a method that updates object property.
54. Create a method that uses another method inside same object.
55. Demonstrate method borrowing using call.
56. Fix lost `this` problem using bind.
57. Write a function that freezes object.
58. Write a function that seals object.
59. Write a function that deeply freezes object (basic recursion).
60. Write a function that lists only enumerable properties.
61. Write a function that converts object to key-value pairs.
62. Write a method inside object that tracks number of calls.
63. Create a simple calculator object with methods.
64. Create a user object with login/logout methods.
65. Create a counter object with increment/decrement methods.
66. Demonstrate property descriptor usage.
67. Create read-only property using defineProperty.
68. Create non-enumerable property.
69. Build simple settings manager using object methods.
70. Create small banking system object with deposit/withdraw methods.

# 19 - Object Destructuring

## Conceptual Understanding

1. What is object destructuring?
2. Why was destructuring introduced in ES6?
3. What problem does destructuring solve?
4. How is destructuring different from normal property access?
5. Is destructuring shallow or deep?
6. Can we destructure non-existing property?
7. What happens if property does not exist during destructuring?
8. Can destructuring rename variables?
9. Can we assign default values in destructuring?
10. Is order important in object destructuring?

## Basic Syntax

11. What is basic syntax of object destructuring?
12. How do you extract single property?
13. How do you extract multiple properties?
14. How do you rename property during destructuring?
15. How do you assign default value?
16. What happens if default value is not needed?
17. Can we destructure into existing variables?
18. How do you destructure nested object?
19. What is deep destructuring?
20. What happens if nested property is undefined?

## Advanced Patterns

21. How to destructure in function parameters?
22. What is benefit of destructuring in parameters?
23. How to provide default object during parameter destructuring?
24. How to avoid error when destructuring undefined?
25. What is rest property in object destructuring?
26. How to collect remaining properties using rest?
27. What is difference between spread and rest in objects?
28. Can we destructure arrays inside object?
29. Can we destructure object inside array?
30. How destructuring improves readability?

## Destructuring & Functions

31. What happens when destructuring function return object?
32. How to destructure inside arrow function?
33. How to rename destructured variables in function?
34. What happens if destructured variable name conflicts?
35. How destructuring helps avoid repeated object access?
36. How destructuring is used in React props? (Basic idea only.)
37. Can destructuring improve performance?
38. What is common mistake while destructuring?
39. Can we destructure null?
40. What happens if destructuring null or undefined?

## Debug Thinking

41. What is output of:

    ```
    const obj = { a: 1, b: 2 };
    const { a } = obj;
    console.log(a);
    ```

42. What is output of:

    ```
    const { x = 10 } = { };
    console.log(x);
    ```

43. What is output of:

    ```
    const { a: newA } = { a: 5 };
    console.log(newA);
    ```

44. What is output of:

    ```
    const { a, b } = { a: 1 };
    console.log(b);
    ```

45. What happens in:

    ```
    const { a } = null;
    ```

46. What is output of:

    ```
    const obj = { a: { b: 2 } };
    const { a: { b } } = obj;
    console.log(b);
    ```

47. What is output of:

    ```
    const obj = { a: 1, b: 2, c: 3 };
    const { a, ...rest } = obj;
    console.log(rest);
    ```

48. What is difference between:

    ```
    const { a } = obj;
    ```

    and

    ```
    const a = obj.a;
    ```

49. Can destructuring change original object?
50. What is output of:

    ```
    let a = 5;
    ({ a } = { a: 10 });
    console.log(a);
    ```

## Coding Practice (Basic to Advanced)

51. Destructure a student object into variables.
52. Rename destructured variables.
53. Provide default values in destructuring.
54. Destructure nested object.
55. Destructure object inside function parameter.
56. Use rest property to collect remaining keys.
57. Swap variables using destructuring.
58. Extract properties from array of objects.
59. Destructure function return value.
60. Write a function that accepts object and destructures properties.
61. Create config object and destructure required fields.
62. Write a function that safely destructures optional nested data.
63. Combine destructuring with default parameters.
64. Use destructuring in map callback.
65. Build small user profile printer using destructuring.
66. Write a function that clones object using spread.
67. Write a function that removes specific property using rest.
68. Write a function that merges two objects using spread.
69. Destructure API-like response object.
70. Build small settings manager using destructuring.

# 20 - Rest Operator

## Conceptual Understanding

1. What is rest operator in JavaScript?
2. What symbol represents rest operator?
3. Why was rest operator introduced?
4. What problem does rest operator solve?
5. What is difference between rest and spread operator?
6. In which contexts can rest operator be used?
7. Can rest operator be used in function parameters?
8. Can rest operator be used in object destructuring?
9. Can rest operator be used in array destructuring?
10. Why can there be only one rest element in a destructuring pattern?

## Rest in Function Parameters

11. What is syntax of rest parameter in function?
12. Where must rest parameter be placed?
13. What happens if rest parameter is not last?
14. What type of data structure does rest parameter collect?
15. What is difference between rest parameter and arguments object?
16. Is arguments object available in arrow functions?
17. Why rest parameter is preferred over arguments?
18. Can rest parameter coexist with normal parameters?
19. How do you combine default parameters with rest?
20. What happens if no extra arguments are passed?

## Rest in Array Destructuring

21. How do you use rest in array destructuring?
22. What does rest collect in array destructuring?
23. Can rest appear in middle of destructuring?
24. What happens if array has fewer elements?
25. How can rest help ignore some elements?
26. What is difference between:

    ```
    const [a, ...rest] = arr;
    ```

    and

    ```
    const rest = arr.slice(1);
    ```

27. Can rest be empty array?
28. Does rest create shallow copy?
29. What happens if array contains objects?
30. Can rest be nested?

## Rest in Object Destructuring

31. How do you use rest in object destructuring?
32. What does rest collect in objects?
33. Can rest rename collected object?
34. Does rest include inherited properties?
35. Is rest shallow or deep?
36. What happens if property is excluded before rest?
37. Can rest be combined with renaming?
38. What happens if object has no extra properties?
39. Can rest be used multiple times?
40. How does rest differ from spread in objects?

## Debug Thinking

41. What is output of:

    ```
    function sum(...nums) {
      return nums;
    }
    console.log(sum(1,2,3));
    ```

42. What is output of:

    ```
    const [a, ...rest] = [1,2,3,4];
    console.log(rest);
    ```

43. What is output of:

    ```
    const {a, ...rest} = {a:1, b:2, c:3};
    console.log(rest);
    ```

44. What happens if rest is not last parameter?
45. What is output of:

    ```
    function test(a, ...rest) {
      console.log(a, rest.length);
    }
    test(1);
    ```

46. What is difference between:

    ```
    function test() {
      console.log(arguments);
    }
    ```

    and

    ```
    function test(...args) {
      console.log(args);
    }
    ```

47. What happens if you try:

    ```
    const [...rest, a] = [1,2,3];
    ```

48. Does rest mutate original array?
49. What happens when object rest is used with nested object?
50. Why is rest operator safer than manual argument handling?

## Coding Practice (Basic to Advanced)

51. Write a function that sums any number of arguments using rest.
52. Write a function that finds maximum using rest.
53. Write a function that logs first argument and rest separately.
54. Write a function that multiplies all numbers passed.
55. Write a function that groups arguments into array using rest.
56. Use array destructuring with rest to skip first two elements.
57. Use object destructuring with rest to remove specific key.
58. Write a function that merges multiple objects using rest (basic logic).
59. Create a function that takes variable number of strings and joins them.
60. Create a logger function that takes message and rest of metadata.
61. Write a function that clones array using rest/spread.
62. Write a function that extracts specific keys and collects rest.
63. Build small shopping cart function using rest parameters.
64. Write a function that validates at least one argument using rest.
65. Write a function that returns average of numbers using rest.
66. Combine default parameters and rest.
67. Create a function wrapper using rest to forward arguments.
68. Build small event emitter function using rest.
69. Write a function that removes first element using destructuring rest.
70. Create a flexible calculator using rest parameters.

# 21 - JSON

## Conceptual Understanding

1. What is JSON?
2. What does JSON stand for?
3. Why is JSON used?
4. Is JSON a programming language?
5. How is JSON different from JavaScript object?
6. Why is JSON popular for data exchange?
7. What are the basic data types supported in JSON?
8. Can JSON store functions?
9. Can JSON store undefined values?
10. Why are keys in JSON always in double quotes?

## JSON vs JavaScript Object

11. What is difference between JSON and JS object literal?
12. Why single quotes are invalid in JSON?
13. Why trailing commas are invalid in JSON?
14. Can JSON contain comments?
15. Why JSON is considered strict format?
16. Is JSON case-sensitive?
17. Can JSON contain Date objects?
18. How are nested objects represented in JSON?
19. What happens if JSON syntax is invalid?
20. Why JSON is text-based format?

## JSON Methods

21. What is `JSON.stringify()`?
22. What is `JSON.parse()`?
23. What does `JSON.stringify()` return?
24. What does `JSON.parse()` return?
25. What happens if you stringify a function?
26. What happens if you stringify undefined?
27. What happens if you parse invalid JSON?
28. What is replacer parameter in `JSON.stringify()`?
29. What is space parameter in `JSON.stringify()`?
30. What is reviver parameter in `JSON.parse()`?

## JSON & Data Transfer

31. Why is JSON used in APIs?
32. How does browser receive JSON from server?
33. How is JSON converted to JavaScript object?
34. Why must we parse JSON before using it?
35. What is Content-Type: application/json?
36. How does JSON work with fetch API? (Basic idea only.)
37. What is difference between JSON and XML?
38. Why JSON is lightweight?
39. Can JSON handle large data efficiently?
40. What are limitations of JSON?

## JSON & localStorage (Basic Only)

41. Why do we need JSON with localStorage?
42. Why localStorage stores only strings?
43. How to store object in localStorage?
44. How to retrieve object from localStorage?
45. What happens if you store object directly without stringify?
46. What happens if JSON.parse is not used after retrieving?
47. How to remove item from localStorage?
48. How to clear localStorage?
49. What is sessionStorage?
50. What is difference between localStorage and sessionStorage?

## Debug Thinking

51. What is output of:

    ```
    const obj = { a: 1 };
    const str = JSON.stringify(obj);
    console.log(typeof str);
    ```

52. What is output of:

    ```
    const str = '{"a":1}';
    const obj = JSON.parse(str);
    console.log(typeof obj);
    ```

53. What happens if:

    ```
    JSON.parse("{a:1}");
    ```

54. Why does above throw error?
55. What happens if:

    ```
    JSON.stringify({ a: undefined });
    ```

56. What happens if:

    ```
    JSON.stringify({ a: function() {} });
    ```

57. What is output of:

    ```
    JSON.stringify([1, undefined, 3]);
    ```

58. What happens if JSON contains trailing comma?
59. What is output of:

    ```
    JSON.parse("null");
    ```

60. What is output of:

    ```
    JSON.parse("123");
    ```

## Coding Practice (Basic to Advanced)

61. Convert object to JSON string.
62. Convert JSON string to object.
63. Store user object in localStorage.
64. Retrieve user object from localStorage.
65. Create a simple todo list stored in localStorage.
66. Pretty print JSON using stringify.
67. Use replacer to filter properties while stringifying.
68. Use reviver to modify parsed values.
69. Write a function that safely parses JSON with try-catch.
70. Validate if a string is valid JSON.
71. Create API-like JSON response and parse it.
72. Merge two JSON objects.
73. Write a function to deep clone object using JSON methods.
74. Demonstrate limitation of JSON cloning with Date.
75. Build small settings manager using JSON + localStorage.

# 22 - Date

## Conceptual Understanding

1. What is `Date` object in JavaScript?
2. Why do we need Date in programming?
3. How does JavaScript represent time internally?
4. What is Unix timestamp?
5. What is epoch time?
6. Is Date object mutable or immutable?
7. What time zone does JavaScript Date use?
8. What is difference between local time and UTC?
9. Why date handling is considered tricky?
10. What is ISO date format?

## Creating Date Objects

11. How do you create current date?
12. How do you create date using timestamp?
13. How do you create date using string?
14. How do you create date using year, month, day?
15. Why month is zero-based in Date constructor?
16. What happens if invalid date is passed?
17. What is `Date.now()`?
18. What is difference between `new Date()` and `Date()`?
19. What is output of `typeof new Date()`?
20. What happens if you pass only year to Date constructor?

## Getting Date Components

21. How to get full year?
22. How to get month?
23. How to get date (day of month)?
24. How to get day of week?
25. How to get hours?
26. How to get minutes?
27. How to get seconds?
28. How to get milliseconds?
29. What is difference between `getDate()` and `getDay()`?
30. What is difference between local getters and UTC getters?

## Setting Date Components

31. How to set full year?
32. How to set month?
33. How to set date?
34. How to set hours?
35. What happens if you set month beyond 11?
36. What happens if you set date beyond valid days?
37. Does Date auto-adjust overflow values?
38. How to add days to current date?
39. How to subtract days?
40. How to compare two dates?

## Formatting Dates

41. What does `toString()` return?
42. What does `toDateString()` return?
43. What does `toTimeString()` return?
44. What does `toISOString()` return?
45. What does `toLocaleDateString()` return?
46. What does `toLocaleTimeString()` return?
47. How to format date manually?
48. Why manual formatting can cause bugs?
49. What is difference between ISO string and local string?
50. Why toISOString is useful for APIs?

## Debug Thinking

51. What is output of:

    ```
    new Date(0);
    ```

52. What is output of:

    ```
    new Date("2020-01-01");
    ```

53. What is output of:

    ```
    new Date("invalid");
    ```

54. Why month appears one less than expected?
55. What is difference between:

    ```
    new Date("2020-01-01")
    ```

    and

    ```
    new Date(2020, 0, 1)
    ```

56. What happens if you compare two Date objects using `===`?
57. How to correctly compare dates?
58. What is output of:

    ```
    Date.now();
    ```

59. Why Date arithmetic sometimes confusing?
60. What is result of subtracting two Date objects?

## Coding Practice (Basic to Advanced)

61. Print current date and time.
62. Print only current year.
63. Print current month.
64. Print day of week.
65. Create function to format date as DD/MM/YYYY.
66. Create function to add 7 days to given date.
67. Create function to calculate difference between two dates in days.
68. Create function to check if year is leap year.
69. Create countdown timer using Date.
70. Build small age calculator using Date.
71. Create function to convert timestamp to readable date.
72. Create function to check if date is in past or future.
73. Create function to get last day of month.
74. Create function to measure execution time using Date.now().
75. Build simple event scheduler using Date.
