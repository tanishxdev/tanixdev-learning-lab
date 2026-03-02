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

# 23 - String

## Conceptual Understanding

1. What is a string in JavaScript?
2. How are strings represented internally in JavaScript?
3. Are strings primitive or reference types?
4. What is difference between string primitive and String object?
5. How do you create a string in JavaScript?
6. What is difference between single quotes, double quotes, and backticks?
7. What are template literals?
8. Why are strings immutable in JavaScript?
9. What does immutability mean in context of strings?
10. What happens when you try to modify a character in a string?
11. How does JavaScript handle Unicode characters in strings?
12. What is UTF-16 encoding?
13. What is difference between length and actual character count?
14. What are escape characters in strings?
15. What is difference between `\n`, `\t`, and `\\`?
16. What happens if string contains special characters?
17. Can strings span multiple lines?
18. What is string interpolation?
19. What is string coercion?
20. How does JavaScript convert number to string automatically?

---

## String Properties & Basics

21. What is `length` property of string?
22. Is `length` a method or property?
23. Can length be changed manually?
24. What is indexing in strings?
25. How do you access character using bracket notation?
26. What is difference between `str[0]` and `str.charAt(0)`?
27. What happens if index is out of range?
28. Are negative indexes allowed in strings?
29. What does `str.at()` do?
30. What is difference between `charCodeAt()` and `codePointAt()`?

---

## String Methods (Search & Check)

31. What does `includes()` do?
32. What does `indexOf()` return?
33. What does `lastIndexOf()` return?
34. What does `startsWith()` do?
35. What does `endsWith()` do?
36. What does `search()` do?
37. What is difference between `includes()` and `indexOf()`?
38. What is difference between `match()` and `search()`?
39. What happens if substring is not found?
40. Are string search methods case-sensitive?

---

## String Methods (Extraction)

41. What does `slice()` do?
42. What is difference between `slice()` and `substring()`?
43. Can `slice()` accept negative indexes?
44. What does `substr()` do?
45. Why is `substr()` deprecated?
46. What happens if start index > end index in substring?
47. What happens if negative values are used in substring?
48. Does extraction method modify original string?
49. What is shallow vs deep copy in string extraction?
50. Which extraction method is safest to use?

---

## String Methods (Modification)

51. What does `toUpperCase()` do?
52. What does `toLowerCase()` do?
53. What does `trim()` do?
54. What is difference between `trim()`, `trimStart()`, and `trimEnd()`?
55. What does `replace()` do?
56. What is difference between `replace()` and `replaceAll()`?
57. What does `split()` do?
58. What does `concat()` do?
59. What does `repeat()` do?
60. Do string modification methods mutate original string?

---

## Template Literals & Advanced Concepts

61. What are template literals?
62. What is `${}` syntax called?
63. Can expressions be used inside template literals?
64. What are tagged template literals?
65. What is multi-line string using backticks?
66. What is difference between string concatenation and interpolation?
67. What is raw string in template literals?
68. How are template literals helpful in HTML generation?
69. What are security risks with template literals?
70. Can template literals evaluate functions inside?

---

## Debug Thinking

71. What is output of:

```js
let str = "hello";
str[0] = "H";
console.log(str);
```

72. What is output of:

```js
console.log("5" + 2);
```

73. What is output of:

```js
console.log("5" - 2);
```

74. What is output of:

```js
console.log("abc".length);
```

75. What is output of:

```js
console.log("hello".slice(-2));
```

76. What is output of:

```js
console.log("hello".substring(-2));
```

77. What is output of:

```js
console.log("hello".indexOf("z"));
```

78. What is output of:

```js
console.log("hello".includes("he"));
```

79. What is output of:

```js
console.log("Hello".toLowerCase());
```

80. Why does this not work?

```js
let str = "abc";
str += "d";
```

---

## Coding Practice (Basic to Advanced)

81. Write a function to reverse a string.
82. Write a function to check if string is palindrome.
83. Write a function to count vowels in string.
84. Write a function to capitalize first letter.
85. Write a function to convert string to title case.
86. Write a function to remove all spaces from string.
87. Write a function to check if string contains only digits.
88. Write a function to count frequency of characters.
89. Write a function to remove duplicate characters.
90. Write a function to check anagram.
91. Write a function to truncate string to given length.
92. Write a function to mask email string.
93. Write a function to format phone number.
94. Write a function to compress string (basic idea).
95. Write a function to convert snake_case to camelCase.
96. Write a function to convert camelCase to snake_case.
97. Write a function to validate strong password.
98. Write a function to generate random string.
99. Write a function to check substring occurrence count.
100.  Build small text analyzer using string methods.

# 24 - Set

## Conceptual Understanding

1. What is Set in JavaScript?
2. Why was Set introduced in ES6?
3. What problem does Set solve compared to arrays?
4. How does Set store values internally?
5. Does Set allow duplicate values?
6. How does Set determine uniqueness?
7. Is Set ordered or unordered?
8. What is insertion order in Set?
9. What is difference between Set and Array?
10. What is difference between Set and Object?
11. Can Set store different data types?
12. Can Set store objects?
13. How does Set compare object references?
14. Is Set iterable?
15. Is Set mutable?
16. What is time complexity of basic Set operations?
17. When should you prefer Set over Array?
18. Can Set be nested?
19. What is WeakSet?
20. What is difference between Set and WeakSet?

---

## Creating and Initializing Set

21. How do you create a new Set?
22. How do you initialize Set with values?
23. What happens if duplicate values are passed during initialization?
24. What is output of `new Set([1,1,2,3])`?
25. Can you create empty Set?
26. What happens if you pass string to Set constructor?
27. How to convert array into Set?
28. How to convert Set back to array?
29. Can Set accept another Set inside it?
30. What happens if null or undefined is passed?

---

## Set Methods

31. What does `add()` do?
32. What does `delete()` do?
33. What does `has()` do?
34. What does `clear()` do?
35. What does `size` property represent?
36. Is `size` a method or property?
37. Does `add()` return anything?
38. What happens if you add duplicate value?
39. What is return value of `delete()`?
40. Does `clear()` return anything?

---

## Iteration in Set

41. How to iterate over Set?
42. Can you use `for...of` with Set?
43. What does `forEach()` do in Set?
44. What are parameters of Set `forEach()` callback?
45. What does `values()` return?
46. What does `keys()` return in Set?
47. Why does `keys()` behave same as `values()` in Set?
48. What does `entries()` return?
49. What is structure of entry in Set?
50. Can you use spread operator with Set?

---

## Set Operations (Logical Operations)

51. How to perform union of two sets?
52. How to perform intersection of two sets?
53. How to perform difference between two sets?
54. How to check if one set is subset of another?
55. How to remove duplicates from array using Set?
56. How to merge two arrays using Set?
57. How to count unique elements using Set?
58. How to check if Set is empty?
59. Can Set store NaN?
60. Can Set differentiate between +0 and -0?

---

## WeakSet

61. What is WeakSet?
62. What type of values can WeakSet store?
63. Does WeakSet allow primitive values?
64. Why WeakSet does not have size property?
65. Why WeakSet is not iterable?
66. What is garbage collection behavior in WeakSet?
67. When should WeakSet be used?
68. What methods does WeakSet support?
69. Can WeakSet be cleared manually?
70. What is difference between WeakSet and WeakMap?

---

## Debug Thinking

71. What is output of:

```js
const s = new Set([1, 2, 2, 3]);
console.log(s.size);
```

72. What is output of:

```js
const s = new Set();
s.add(1);
s.add(1);
console.log(s);
```

73. What is output of:

```js
const s = new Set("hello");
console.log(s);
```

74. What is output of:

```js
const s = new Set([NaN, NaN]);
console.log(s.size);
```

75. What happens if you try:

```js
const ws = new WeakSet();
ws.add(1);
```

76. What is output of:

```js
const s = new Set([{ a: 1 }, { a: 1 }]);
console.log(s.size);
```

77. What happens if you delete non-existing value from Set?
78. Does Set maintain order after deletion and addition?
79. What is output of:

```js
const s = new Set([1, 2, 3]);
console.log([...s]);
```

80. What happens if you compare two Sets using `===`?

---

## Coding Practice (Basic to Advanced)

81. Create a Set and add 5 unique values.
82. Remove duplicate values from an array using Set.
83. Write a function to check if array has duplicates using Set.
84. Write a function to find union of two arrays using Set.
85. Write a function to find intersection of two arrays using Set.
86. Write a function to find difference between two arrays using Set.
87. Write a function to count unique characters in string using Set.
88. Write a function to check if two arrays have common elements using Set.
89. Write a function to remove duplicates from string using Set.
90. Convert Set to array and sort it.
91. Implement simple tag manager using Set.
92. Implement visited nodes tracker using Set (basic idea).
93. Implement simple permission system using Set.
94. Build unique email collector using Set.
95. Write function to check subset relation between two Sets.
96. Write function to toggle value in Set.
97. Build small cache using Set (basic idea).
98. Write function to merge multiple arrays into unique array using Set.
99. Write function to compare two Sets for equality.
100.  Build small uniqueness validator using Set.

# 25 - Promise

## Conceptual Understanding

1. What is a Promise in JavaScript?
2. Why were Promises introduced?
3. What problem do Promises solve compared to callbacks?
4. What does a Promise represent conceptually?
5. What are the three states of a Promise?
6. What is difference between pending, fulfilled, and rejected?
7. Can a Promise change state once settled?
8. What does “settled” mean in Promise terminology?
9. What is the difference between resolve and reject?
10. Is Promise synchronous or asynchronous?
11. What is the role of executor function in Promise?
12. When does executor function run?
13. What happens if executor throws error?
14. What is microtask queue in context of Promises?
15. Why Promise callbacks run after current call stack?
16. What is difference between task queue and microtask queue?
17. Are Promises part of JavaScript engine or Web APIs?
18. What is Promise chaining?
19. What is Promise flattening?
20. Why are Promises considered better than callback nesting?

---

## Creating Promises

21. How do you create a Promise manually?
22. What is syntax of `new Promise()`?
23. What arguments does executor receive?
24. Can you resolve Promise with value?
25. Can you reject Promise with error?
26. What happens if both resolve and reject are called?
27. What happens if resolve is called multiple times?
28. What is implicit return inside Promise?
29. What happens if Promise is never resolved or rejected?
30. What is Promise.resolve()?
31. What is Promise.reject()?
32. What is difference between returning value and returning Promise?
33. Can you wrap synchronous code in Promise?
34. What happens if you return non-Promise in `.then()`?
35. What happens if you return Promise inside `.then()`?

---

## Then, Catch, Finally

36. What does `.then()` do?
37. What arguments does `.then()` accept?
38. What does `.catch()` do?
39. What is difference between `.then(null, fn)` and `.catch(fn)`?
40. What does `.finally()` do?
41. Does `.finally()` receive resolved value?
42. Does `.finally()` affect resolved value?
43. Can you chain multiple `.then()` calls?
44. How does error propagate in Promise chain?
45. What happens if error is thrown inside `.then()`?
46. What happens if `.catch()` returns value?
47. What happens if `.catch()` rethrows error?
48. Can `.finally()` modify result?
49. What is unhandled promise rejection?
50. How to handle errors globally?

---

## Promise Chaining & Flow

51. What is Promise chaining?
52. Why should you return inside `.then()`?
53. What happens if you forget to return Promise in chain?
54. What is Promise pyramid?
55. What is Promise composition?
56. How to execute Promises sequentially?
57. How to execute Promises in parallel?
58. What is difference between sequential and parallel execution?
59. How to convert callback-based API into Promise?
60. How does async/await relate to Promises?

---

## Promise Static Methods

61. What does `Promise.all()` do?
62. What happens if one Promise fails in `Promise.all()`?
63. What does `Promise.race()` do?
64. What does `Promise.allSettled()` do?
65. What does `Promise.any()` do?
66. What happens if all Promises reject in `Promise.any()`?
67. When should you use `Promise.all()`?
68. When should you use `Promise.race()`?
69. When should you use `Promise.allSettled()`?
70. What is difference between `Promise.all()` and `Promise.allSettled()`?

---

## Debug Thinking

71. What is output of:

```js
console.log("Start");
Promise.resolve().then(() => console.log("Inside"));
console.log("End");
```

72. What is output of:

```js
new Promise((resolve, reject) => {
  resolve("Done");
  reject("Error");
})
  .then(console.log)
  .catch(console.log);
```

73. What is output of:

```js
Promise.resolve(5)
  .then((val) => val * 2)
  .then((val) => console.log(val));
```

74. What happens if error is thrown inside executor?

75. What is output of:

```js
Promise.reject("Fail")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
```

76. What is output of:

```js
Promise.resolve(1)
  .then((val) => {
    throw new Error("Oops");
  })
  .catch((err) => console.log("Caught"));
```

77. What happens if `.then()` has no return?

78. What is output of:

```js
Promise.resolve("A")
  .then((val) => Promise.resolve("B"))
  .then(console.log);
```

79. What happens if Promise is created but no `.then()` attached?

80. What is difference between:

```js
return Promise.resolve(5);
```

and

```js
return 5;
```

inside `.then()`?

---

## Coding Practice (Basic to Advanced)

81. Create a simple Promise that resolves after 2 seconds.
82. Create a Promise that rejects with error message.
83. Chain two Promises sequentially.
84. Execute multiple Promises in parallel using `Promise.all()`.
85. Use `Promise.race()` to implement timeout logic.
86. Convert setTimeout into Promise-based function.
87. Create function that retries Promise 3 times on failure.
88. Create delay function using Promise.
89. Build simple fake API call using Promise.
90. Handle multiple API calls with `Promise.allSettled()`.
91. Implement loading simulation using Promise.
92. Wrap callback-based function into Promise.
93. Build simple file reader simulation using Promise.
94. Chain error handling properly.
95. Implement basic rate limiter using Promise.
96. Create Promise-based queue system.
97. Build sequential task runner using Promise chaining.
98. Implement Promise-based cache logic.
99. Compare behavior of async/await vs Promise chaining.
100.  Build mini data fetch manager using Promises.

# 26 - await

## Conceptual Understanding

1. What is `await` in JavaScript?
2. In which context can `await` be used?
3. Why can `await` only be used inside async functions?
4. What problem does `await` solve?
5. How does `await` improve readability compared to `.then()`?
6. Does `await` block the entire program?
7. What does `await` actually pause?
8. What happens internally when `await` is used?
9. What type of value does `await` expect?
10. What happens if `await` is used on non-Promise value?
11. Does `await` always return resolved value?
12. What happens if awaited Promise rejects?
13. How is `await` related to Promises?
14. Is `await` synchronous or asynchronous?
15. What is difference between `return await` and `return`?
16. What is top-level await?
17. Where is top-level await allowed?
18. Can `await` be used inside loops?
19. What happens when `await` is used inside `forEach()`?
20. Why is `await` not recommended inside `Array.forEach()`?

---

## Behavior & Flow

21. What happens when execution reaches `await`?
22. How does JavaScript schedule resumed execution after await?
23. What queue handles resolved Promises?
24. Does `await` create new Promise?
25. Can multiple awaits run in parallel?
26. How to run multiple Promises in parallel using await?
27. What is difference between sequential and parallel awaits?
28. What happens if you forget `await` keyword?
29. What happens if async function has no await?
30. What does async function return always?

---

## Error Handling with await

31. How do you handle errors with await?
32. Why is try-catch required with await?
33. What happens if awaited Promise rejects without try-catch?
34. Can you use `.catch()` with await?
35. What is difference between try-catch and `.catch()` with await?
36. Does `finally` work with await?
37. What is best practice for error handling with await?
38. How to handle multiple awaited Promises with error handling?
39. What is unhandled rejection in async function?
40. How to create safe async wrapper?

---

## Debug Thinking

41. What is output of:

```js
async function test() {
  return 5;
}
console.log(test());
```

42. What is output of:

```js
async function test() {
  return await 5;
}
test().then(console.log);
```

43. What is output of:

```js
async function test() {
  await Promise.resolve();
  console.log("A");
}
console.log("B");
test();
```

44. What happens if:

```js
await Promise.reject("Error");
```

outside try-catch?

45. What is output of:

```js
async function test() {
  try {
    await Promise.reject("Fail");
  } catch (e) {
    console.log("Caught");
  }
}
test();
```

46. What happens if you forget `await` in:

```js
async function test() {
  Promise.resolve("Done");
}
```

47. What is difference between:

```js
return await Promise.resolve(5);
```

and

```js
return Promise.resolve(5);
```

48. What happens if `await` is used inside `forEach()`?
49. What is result of subtracting two awaited Date Promises?
50. Does `await` change Promise state?

---

## Coding Practice (Basic to Advanced)

51. Create async function that waits 2 seconds using await.
52. Fetch data using async/await.
53. Handle API error using try-catch with await.
54. Execute multiple API calls sequentially using await.
55. Execute multiple API calls in parallel using `Promise.all()` with await.
56. Create delay utility using await.
57. Implement retry logic using async/await.
58. Convert Promise chain into async/await syntax.
59. Create async wrapper for safe execution.
60. Build simple loader simulation using await.
61. Implement timeout using await + Promise.race().
62. Create function that waits for multiple resources.
63. Build async task queue using await.
64. Implement sequential file reader simulation.
65. Create async function that validates input before awaiting.
66. Build simple login simulation using await.
67. Create async function that returns cached data.
68. Implement polling mechanism using await.
69. Build sequential animation simulation using await.
70. Compare behavior of Promise chaining vs await.

---

# 27 - catch

## Conceptual Understanding

1. What is `.catch()` in JavaScript?
2. Why is `.catch()` used in Promises?
3. What problem does `.catch()` solve?
4. What does `.catch()` internally represent?
5. Is `.catch()` syntactic sugar for `.then(null, fn)`?
6. When does `.catch()` execute?
7. Does `.catch()` handle only rejected Promises?
8. Can `.catch()` handle errors thrown inside `.then()`?
9. What happens if `.catch()` is not provided?
10. What is unhandled promise rejection?
11. Can multiple `.catch()` be chained?
12. Does `.catch()` stop error propagation?
13. What happens if `.catch()` returns value?
14. What happens if `.catch()` throws error again?
15. What is difference between `.catch()` and try-catch?
16. Can `.catch()` be used after `Promise.all()`?
17. Can `.catch()` be used after async function?
18. Does `.catch()` receive resolved value?
19. Is `.catch()` asynchronous?
20. What is best practice for using `.catch()`?

---

## Behavior & Flow

21. How does error propagate in Promise chain?
22. Where should `.catch()` be placed in chain?
23. Can `.catch()` recover from error?
24. What happens if error occurs before `.catch()`?
25. What happens if error occurs after `.catch()`?
26. Can `.catch()` convert rejection into resolution?
27. What happens if `.catch()` returns Promise?
28. What is difference between local and global catch?
29. How to handle errors for multiple Promises?
30. Can `.catch()` handle synchronous errors?

---

## Debug Thinking

31. What is output of:

```js
Promise.reject("Fail").catch((err) => console.log(err));
```

32. What is output of:

```js
Promise.resolve(5)
  .then((val) => {
    throw "Error";
  })
  .catch((err) => console.log(err));
```

33. What is output of:

```js
Promise.reject("Fail")
  .catch((err) => "Recovered")
  .then((val) => console.log(val));
```

34. What happens if `.catch()` throws error again?

35. What is output of:

```js
Promise.resolve(1)
  .then((val) => val + 1)
  .catch((err) => console.log("Error"))
  .then((val) => console.log(val));
```

36. What happens if no `.catch()` is attached?

37. What is output of:

```js
Promise.reject("Fail").then((val) => console.log(val));
```

38. What is difference between:

```js
try {
  await Promise.reject("Fail");
} catch (e) {
  console.log(e);
}
```

and

```js
Promise.reject("Fail").catch(console.log);
```

39. Can `.catch()` handle error inside async function?
40. What happens if async function throws error and no catch used?

---

## Coding Practice (Basic to Advanced)

41. Create Promise that rejects and handle using `.catch()`.
42. Chain `.then()` and `.catch()` properly.
43. Recover from error using `.catch()` and continue chain.
44. Handle API error using `.catch()`.
45. Create global error handler for Promise.
46. Convert try-catch async code into `.catch()` chain.
47. Implement retry mechanism using `.catch()`.
48. Handle error inside `Promise.all()`.
49. Build safe wrapper using `.catch()`.
50. Compare `.catch()` vs try-catch in async/await.

# 28 - DOM (Document Object Model)

## Conceptual Understanding

1. What is DOM?
2. What does DOM stand for?
3. Why is DOM important in web development?
4. Who creates the DOM?
5. Is DOM part of JavaScript?
6. What is relationship between HTML and DOM?
7. What is DOM tree?
8. What are nodes in DOM?
9. What is difference between element node and text node?
10. What is root node of DOM?
11. What is document object?
12. What is window object?
13. What is difference between window and document?
14. Is DOM a programming language?
15. What is DOM API?
16. Why DOM manipulation is expensive?
17. What is reflow and repaint?
18. How does browser render DOM?
19. What is critical rendering path (basic idea)?
20. Why large DOM can slow down performance?

---

## Selecting Elements

21. What does `getElementById()` do?
22. What does `getElementsByClassName()` return?
23. What does `getElementsByTagName()` return?
24. What is difference between `querySelector()` and `querySelectorAll()`?
25. What type does `querySelectorAll()` return?
26. What is NodeList?
27. What is HTMLCollection?
28. What is difference between NodeList and HTMLCollection?
29. Is NodeList iterable?
30. Can we use `forEach()` on HTMLCollection?
31. What happens if selector does not match anything?
32. Which method is most commonly used in modern JavaScript?
33. Can querySelector select by class and id?
34. Can we use complex CSS selectors in querySelector?
35. What is difference between live and static collections?

---

## DOM Traversing

36. What is parentNode?
37. What is parentElement?
38. What is childNodes?
39. What is children property?
40. What is difference between childNodes and children?
41. What is firstChild?
42. What is firstElementChild?
43. What is lastChild?
44. What is nextSibling?
45. What is nextElementSibling?
46. Why text nodes sometimes appear unexpectedly?
47. How to navigate from child to parent?
48. How to count only element children?
49. What is closest() method?
50. How to check if element contains another element?

---

## Modifying Elements

51. How to change text content of element?
52. What is difference between `innerText` and `textContent`?
53. What is `innerHTML`?
54. Why innerHTML can be dangerous?
55. How to change attribute of element?
56. What does `setAttribute()` do?
57. What does `getAttribute()` do?
58. What does `removeAttribute()` do?
59. How to add CSS class dynamically?
60. What is `classList`?
61. What does `classList.add()` do?
62. What does `classList.remove()` do?
63. What does `classList.toggle()` do?
64. How to change inline styles using JavaScript?
65. What is difference between style property and CSS class?

---

## Creating & Removing Elements

66. How to create new element?
67. What does `createElement()` do?
68. How to append element to DOM?
69. What is difference between `append()` and `appendChild()`?
70. What is `prepend()`?
71. How to remove element from DOM?
72. What is `removeChild()`?
73. Can one element exist in two places in DOM?
74. What happens if you append existing element again?
75. How to clone a DOM node?
76. What is difference between shallow and deep clone?
77. What does `cloneNode(true)` mean?
78. How to replace element in DOM?
79. What is `replaceWith()`?
80. How to insert element before another element?

---

## Events (Basic to Intermediate)

81. What is event in JavaScript?
82. What is event listener?
83. What does `addEventListener()` do?
84. What is event handler?
85. What is difference between inline event and addEventListener?
86. What is event object?
87. What is target in event?
88. What is currentTarget?
89. What is event bubbling?
90. What is event capturing?
91. What is event propagation?
92. What is stopPropagation()?
93. What is preventDefault()?
94. What is difference between click and submit event?
95. What is DOMContentLoaded event?
96. What is difference between DOMContentLoaded and load?
97. What is event delegation?
98. Why event delegation improves performance?
99. How to remove event listener?
100.  What are common memory leak causes in DOM events?

# 29 - Event

## Conceptual Understanding

1. What is an event in JavaScript?
2. What is event-driven programming?
3. What is event object?
4. How does browser detect events?
5. What is difference between event and event handler?
6. What is event listener?
7. What is callback function in event handling?
8. What is default behavior of an event?
9. What is `preventDefault()`?
10. What is `stopPropagation()`?
11. What is event bubbling?
12. What is event capturing?
13. What is event propagation?
14. What is event delegation?
15. Why is event delegation useful?
16. What is difference between inline event and addEventListener?
17. Can multiple event listeners be attached to same element?
18. What is difference between `onclick` and `addEventListener()`?
19. What is passive event listener?
20. What is once option in addEventListener?

---

## Adding Event Listeners

21. What is syntax of `addEventListener()`?
22. What parameters does `addEventListener()` take?
23. What is third parameter in `addEventListener()`?
24. How do you remove event listener?
25. Why must same function reference be passed to remove listener?
26. What happens if anonymous function is used?
27. Can arrow functions be used as event handlers?
28. What is difference between function and arrow function in events?
29. What is `this` inside event handler?
30. What is event target?

---

## Event Object Deep Understanding

31. What properties does event object contain?
32. What is `event.target`?
33. What is `event.currentTarget`?
34. What is difference between target and currentTarget?
35. What is `event.type`?
36. What is `event.timeStamp`?
37. What is `event.key`?
38. What is `event.clientX` and `event.clientY`?
39. What is `event.preventDefault()` used for?
40. What is `event.stopImmediatePropagation()`?

---

## Mouse Events

41. What is `click` event?
42. What is `dblclick` event?
43. What is `mousedown` and `mouseup`?
44. What is `mouseover` and `mouseout`?
45. What is difference between `mouseenter` and `mouseover`?
46. What is `mousemove` event?
47. How to detect right-click event?
48. What is `contextmenu` event?
49. What is drag and drop event?
50. What are basic drag events?

---

## Keyboard Events

51. What is `keydown` event?
52. What is `keyup` event?
53. What is difference between keydown and keyup?
54. What is deprecated `keypress` event?
55. How to detect specific key press?
56. What is `event.code` vs `event.key`?
57. How to prevent form submit on Enter key?
58. What happens when multiple keys are pressed?
59. How to detect combination keys (Ctrl + C)?
60. How to detect CapsLock?

---

## Form & Input Events

61. What is `submit` event?
62. What is `change` event?
63. What is `input` event?
64. What is difference between input and change?
65. What is `focus` event?
66. What is `blur` event?
67. What is difference between focus and blur?
68. What is `reset` event?
69. How to validate form using events?
70. How to prevent page reload on form submit?

---

## Event Propagation & Delegation

71. What is event flow?
72. What are three phases of event propagation?
73. How does capturing phase work?
74. How does bubbling phase work?
75. How to stop bubbling?
76. How to use capture mode in addEventListener?
77. What is real-world example of event delegation?
78. Why delegation improves performance?
79. What happens if event propagation is stopped?
80. How to handle dynamic elements using events?

---

## Debug Thinking

81. What is output of:

```js
document.querySelector("button").addEventListener("click", () => {
  console.log(this);
});
```

82. What is difference between:

```js
button.onclick = handler;
```

and

```js
button.addEventListener("click", handler);
```

83. What happens if `preventDefault()` is not used in form submit?
84. What happens if `stopPropagation()` is not used?
85. What is output if two listeners are attached to same element?
86. What happens if event listener is added inside another event?
87. What is issue with memory leaks in events?
88. What happens if removeEventListener uses different function reference?
89. Why event delegation fails if wrong parent is selected?
90. What is output of:

```js
document.body.addEventListener("click", () => console.log("body"));
document
  .querySelector("button")
  .addEventListener("click", () => console.log("button"));
```

---

## Coding Practice (Basic to Advanced)

91. Create button click counter using events.
92. Create live character counter using input event.
93. Build simple form validation using submit event.
94. Implement event delegation for list items.
95. Create keyboard shortcut handler.
96. Build custom context menu using events.
97. Implement drag and drop basic example.
98. Create modal open/close using events.
99. Build small todo app using event delegation.
100.  Create simple event logger that logs all clicks on page.

# 30 - Event Loop

## Conceptual Understanding

1. What is Event Loop in JavaScript?
2. Why does JavaScript need an Event Loop?
3. Is JavaScript single-threaded or multi-threaded?
4. What does single-threaded mean in JS context?
5. What is Call Stack?
6. What is Web API (Browser API)?
7. What is Callback Queue?
8. What is Microtask Queue?
9. What is Task Queue (Macrotask Queue)?
10. What problem does Event Loop solve?
11. How does Event Loop work internally?
12. When does Event Loop check the queue?
13. What is blocking code?
14. What is non-blocking code?
15. What is synchronous execution?
16. What is asynchronous execution?
17. How does JS handle async operations if it is single-threaded?
18. What is concurrency in JavaScript?
19. What is difference between concurrency and parallelism?
20. Why is Event Loop important for performance?

---

## Call Stack Deep Understanding

21. What is Call Stack?
22. How does function execution enter Call Stack?
23. What happens when a function completes?
24. What is stack overflow?
25. What causes "Maximum call stack size exceeded"?
26. How recursive calls affect Call Stack?
27. Does async code go into Call Stack immediately?
28. What happens when synchronous code runs for long time?
29. Can Call Stack execute multiple functions at once?
30. What happens if Call Stack is not empty?

---

## Web APIs & Async Flow

31. What are Web APIs?
32. Are Web APIs part of JavaScript engine?
33. What are examples of Web APIs?
34. How does `setTimeout()` work internally?
35. How does `fetch()` work internally?
36. How do DOM events enter execution flow?
37. When callback finishes in Web API, where does it go?
38. Does `setTimeout(0)` execute immediately?
39. Why is timer delay not guaranteed exact?
40. What is minimum delay in browsers?

---

## Callback Queue (Macrotask Queue)

41. What is Callback Queue?
42. What types of tasks go into Macrotask Queue?
43. Is `setTimeout` callback macrotask?
44. Is `setInterval` callback macrotask?
45. Are DOM events macrotasks?
46. When does Event Loop move task from queue to stack?
47. What happens if stack is busy?
48. Can macrotasks interrupt synchronous code?
49. What is order of execution of macrotasks?
50. Can macrotasks starve microtasks?

---

## Microtask Queue

51. What is Microtask Queue?
52. What types of tasks go into Microtask Queue?
53. Is Promise `.then()` a microtask?
54. Is `queueMicrotask()` a microtask?
55. When are microtasks executed?
56. What is priority between microtasks and macrotasks?
57. Can microtasks block macrotasks?
58. What happens if microtask creates another microtask?
59. What is starvation problem in microtasks?
60. Are `async/await` internally using microtasks?

---

## Execution Order & Tricky Cases

61. What is output order of:

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```

62. What is output order of:

```js
console.log("A");
Promise.resolve().then(() => console.log("B"));
console.log("C");
```

63. What is output order of:

```js
setTimeout(() => console.log("A"), 0);
Promise.resolve().then(() => console.log("B"));
console.log("C");
```

64. Why Promise runs before setTimeout?
65. What happens if both microtask and macrotask are queued?
66. What happens if microtask keeps adding microtasks?
67. What is difference between:

```js
setTimeout(fn, 0);
```

and

```js
Promise.resolve().then(fn);
```

68. What happens inside async function after await?
69. Why await pauses function but not entire program?
70. How does Event Loop handle nested async operations?

---

## Node.js Event Loop (Basic)

71. Is Node.js Event Loop same as browser?
72. What is libuv?
73. What are phases of Node.js Event Loop?
74. What is difference between process.nextTick() and Promise?
75. What is difference between setImmediate() and setTimeout()?
76. In Node, what runs first: nextTick or Promise?
77. What is I/O callback phase?
78. How does Node handle file system async tasks?
79. Can Node Event Loop block?
80. What is event loop tick?

---

## Debug Thinking

81. What is output of:

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

82. Why Promise executes before Timeout?
83. What happens if infinite loop runs in JS?
84. Why UI freezes during heavy computation?
85. What is difference between synchronous blocking and async waiting?
86. Why `setTimeout(0)` is not truly zero?
87. What happens if microtask throws error?
88. Can Event Loop run if stack never empties?
89. What happens if long-running microtask is added?
90. Why understanding Event Loop is critical for interviews?

---

## Coding Practice (Basic to Advanced)

91. Create simple example showing sync vs async execution.
92. Create example showing microtask vs macrotask priority.
93. Build custom delay function using Promise.
94. Create async function and test execution order.
95. Demonstrate starvation using recursive microtask.
96. Build simple task scheduler using setTimeout.
97. Create example mixing setTimeout, Promise, async/await.
98. Write code to measure execution order using logs.
99. Simulate blocking code and observe effect.
100.  Build small demo explaining complete Event Loop flow.

# 31 - Timer

## Conceptual Understanding

1. What are timers in JavaScript?
2. Why do we need timers in programming?
3. What is asynchronous behavior in context of timers?
4. Are timers part of JavaScript engine or browser APIs?
5. What is difference between synchronous and asynchronous execution?
6. What is event loop in relation to timers?
7. How do timers interact with call stack?
8. What is task queue (callback queue)?
9. Why timer delay is not guaranteed exact?
10. What is minimum delay for `setTimeout`?
11. What happens when delay is 0?
12. What is macro task in event loop?
13. How do timers differ from Promises in scheduling?
14. Can timers block execution?
15. Are timers available in Node.js?
16. What is difference between browser timers and Node timers?
17. What is timer throttling?
18. What happens to timers in inactive browser tabs?
19. Why understanding timers is important for performance?
20. When should you avoid using timers?

---

## setTimeout

21. What is `setTimeout()`?
22. What is syntax of `setTimeout()`?
23. What arguments does `setTimeout()` accept?
24. What does `setTimeout()` return?
25. How to cancel a timeout?
26. What is `clearTimeout()`?
27. What happens if delay is omitted?
28. Can `setTimeout()` pass arguments to callback?
29. What happens if callback throws error?
30. Can `setTimeout()` be recursive?

---

## setInterval

31. What is `setInterval()`?
32. What is difference between `setTimeout()` and `setInterval()`?
33. What does `setInterval()` return?
34. How to stop `setInterval()`?
35. What is `clearInterval()`?
36. What happens if callback execution takes longer than interval?
37. Why is recursive `setTimeout()` sometimes better than `setInterval()`?
38. Can intervals overlap?
39. What happens if interval delay is 0?
40. How to implement polling using intervals?

---

## Advanced Timer Concepts

41. What is debouncing?
42. What is throttling?
43. How are timers used in debouncing?
44. How are timers used in throttling?
45. What is requestAnimationFrame()?
46. How is requestAnimationFrame different from setTimeout?
47. What is difference between microtask and macrotask?
48. Where does `setTimeout` callback go in event loop?
49. What happens if multiple timers expire at same time?
50. How does timer resolution affect performance?

---

## Node.js Timers

51. Are timers in Node.js same as browser?
52. What module handles timers in Node.js?
53. What is `setImmediate()`?
54. How is `setImmediate()` different from `setTimeout(fn, 0)`?
55. What is `process.nextTick()`?
56. How does `process.nextTick()` differ from `setTimeout()`?
57. Where does `setImmediate()` execute in event loop?
58. Can timers keep Node process alive?
59. What is `unref()` in Node timers?
60. What is difference between microtask queue and nextTick queue?

---

## Debug Thinking

61. What is output of:

```js
console.log("Start");
setTimeout(() => console.log("Timer"), 0);
console.log("End");
```

62. Why does above output appear in that order?
63. What is output of:

```js
setTimeout(() => console.log("A"), 100);
setTimeout(() => console.log("B"), 0);
```

64. Which executes first and why?
65. What happens if:

```js
setInterval(() => console.log("Hi"), 1000);
```

66. What happens if you forget `clearInterval()`?
67. What is output of:

```js
setTimeout(() => {
  console.log("First");
}, 0);

Promise.resolve().then(() => {
  console.log("Second");
});
```

68. Why does Promise execute before timer?
69. What happens if callback blocks for long time?
70. Can two intervals run at exactly same millisecond?

---

## Coding Practice (Basic to Advanced)

71. Write a function that logs message after 3 seconds.
72. Write a countdown timer using `setInterval()`.
73. Write a function that prints numbers 1 to 5 with 1 second delay.
74. Create a digital clock using timers.
75. Implement simple debounce function.
76. Implement simple throttle function.
77. Create polling mechanism using `setInterval()`.
78. Create recursive `setTimeout()` loop.
79. Build auto-save feature using debounce.
80. Build typing indicator using timer.
81. Build session timeout warning system.
82. Build simple stopwatch.
83. Build progress bar simulation using timers.
84. Implement delayed retry logic.
85. Create reminder notification system.
86. Implement rate limiter using timers.
87. Simulate API delay using `setTimeout()`.
88. Measure execution delay difference between requested and actual timer.
89. Implement animation using `requestAnimationFrame()`.
90. Create idle detection system using timers.
91. Build game loop using timers.
92. Implement task scheduler using timers.
93. Create exponential backoff retry logic.
94. Create timer-based queue processor.
95. Implement heartbeat mechanism using interval.
96. Create inactivity logout system.
97. Implement delayed function wrapper.
98. Build timer manager utility.
99. Simulate event loop behavior using timers.
100.  Build small scheduler app using timers.

# 31 - Timer

## Conceptual Understanding

1. What are timers in JavaScript?
2. Why do we need timers in programming?
3. What is asynchronous behavior in context of timers?
4. Are timers part of JavaScript engine or browser APIs?
5. What is difference between synchronous and asynchronous execution?
6. What is event loop in relation to timers?
7. How do timers interact with call stack?
8. What is task queue (callback queue)?
9. Why timer delay is not guaranteed exact?
10. What is minimum delay for `setTimeout`?
11. What happens when delay is 0?
12. What is macro task in event loop?
13. How do timers differ from Promises in scheduling?
14. Can timers block execution?
15. Are timers available in Node.js?
16. What is difference between browser timers and Node timers?
17. What is timer throttling?
18. What happens to timers in inactive browser tabs?
19. Why understanding timers is important for performance?
20. When should you avoid using timers?

---

## setTimeout

21. What is `setTimeout()`?
22. What is syntax of `setTimeout()`?
23. What arguments does `setTimeout()` accept?
24. What does `setTimeout()` return?
25. How to cancel a timeout?
26. What is `clearTimeout()`?
27. What happens if delay is omitted?
28. Can `setTimeout()` pass arguments to callback?
29. What happens if callback throws error?
30. Can `setTimeout()` be recursive?

---

## setInterval

31. What is `setInterval()`?
32. What is difference between `setTimeout()` and `setInterval()`?
33. What does `setInterval()` return?
34. How to stop `setInterval()`?
35. What is `clearInterval()`?
36. What happens if callback execution takes longer than interval?
37. Why is recursive `setTimeout()` sometimes better than `setInterval()`?
38. Can intervals overlap?
39. What happens if interval delay is 0?
40. How to implement polling using intervals?

---

## Advanced Timer Concepts

41. What is debouncing?
42. What is throttling?
43. How are timers used in debouncing?
44. How are timers used in throttling?
45. What is requestAnimationFrame()?
46. How is requestAnimationFrame different from setTimeout?
47. What is difference between microtask and macrotask?
48. Where does `setTimeout` callback go in event loop?
49. What happens if multiple timers expire at same time?
50. How does timer resolution affect performance?

---

## Node.js Timers

51. Are timers in Node.js same as browser?
52. What module handles timers in Node.js?
53. What is `setImmediate()`?
54. How is `setImmediate()` different from `setTimeout(fn, 0)`?
55. What is `process.nextTick()`?
56. How does `process.nextTick()` differ from `setTimeout()`?
57. Where does `setImmediate()` execute in event loop?
58. Can timers keep Node process alive?
59. What is `unref()` in Node timers?
60. What is difference between microtask queue and nextTick queue?

---

## Debug Thinking

61. What is output of:

```js
console.log("Start");
setTimeout(() => console.log("Timer"), 0);
console.log("End");
```

62. Why does above output appear in that order?
63. What is output of:

```js
setTimeout(() => console.log("A"), 100);
setTimeout(() => console.log("B"), 0);
```

64. Which executes first and why?
65. What happens if:

```js
setInterval(() => console.log("Hi"), 1000);
```

66. What happens if you forget `clearInterval()`?
67. What is output of:

```js
setTimeout(() => {
  console.log("First");
}, 0);

Promise.resolve().then(() => {
  console.log("Second");
});
```

68. Why does Promise execute before timer?
69. What happens if callback blocks for long time?
70. Can two intervals run at exactly same millisecond?

---

## Coding Practice (Basic to Advanced)

71. Write a function that logs message after 3 seconds.
72. Write a countdown timer using `setInterval()`.
73. Write a function that prints numbers 1 to 5 with 1 second delay.
74. Create a digital clock using timers.
75. Implement simple debounce function.
76. Implement simple throttle function.
77. Create polling mechanism using `setInterval()`.
78. Create recursive `setTimeout()` loop.
79. Build auto-save feature using debounce.
80. Build typing indicator using timer.
81. Build session timeout warning system.
82. Build simple stopwatch.
83. Build progress bar simulation using timers.
84. Implement delayed retry logic.
85. Create reminder notification system.
86. Implement rate limiter using timers.
87. Simulate API delay using `setTimeout()`.
88. Measure execution delay difference between requested and actual timer.
89. Implement animation using `requestAnimationFrame()`.
90. Create idle detection system using timers.
91. Build game loop using timers.
92. Implement task scheduler using timers.
93. Create exponential backoff retry logic.
94. Create timer-based queue processor.
95. Implement heartbeat mechanism using interval.
96. Create inactivity logout system.
97. Implement delayed function wrapper.
98. Build timer manager utility.
99. Simulate event loop behavior using timers.
100.  Build small scheduler app using timers.

# 32 - Debouncing and Throttling

## Conceptual Understanding

1. What is debouncing in JavaScript?
2. What problem does debouncing solve?
3. What is throttling in JavaScript?
4. What problem does throttling solve?
5. What is the core difference between debounce and throttle?
6. When should you use debouncing?
7. When should you use throttling?
8. How are timers used internally in debounce?
9. How are timers used internally in throttle?
10. Why are these concepts important for performance optimization?
11. How do they help in handling frequent events?
12. What are common events where debouncing is useful?
13. What are common events where throttling is useful?
14. Does debounce execute immediately or after delay?
15. Does throttle execute immediately or at intervals?
16. What is leading execution in debounce/throttle?
17. What is trailing execution in debounce/throttle?
18. Can debounce have both leading and trailing options?
19. Can throttle have both leading and trailing options?
20. Why improper use can cause UX issues?

---

## Debounce Deep Understanding

21. What is syntax of debounce function?
22. How does debounce reset timer on each call?
23. What happens if function keeps getting called before delay ends?
24. Why clearTimeout is necessary in debounce?
25. What happens if clearTimeout is not used?
26. How does closure help in debounce implementation?
27. Does debounce preserve `this` context?
28. How to pass arguments in debounce?
29. Can debounce return value?
30. What is immediate (leading) debounce?
31. What is trailing debounce?
32. What happens if delay is 0 in debounce?
33. Can debounce cause memory leaks?
34. How to cancel a debounced function manually?
35. How to use debounce in search input optimization?

---

## Throttle Deep Understanding

36. What is syntax of throttle function?
37. How does throttle control execution frequency?
38. What happens if function is called multiple times during throttle period?
39. How is timestamp used in throttle?
40. How is timer-based throttle implemented?
41. What is difference between timestamp throttle and timer throttle?
42. Does throttle drop extra calls?
43. How to implement trailing execution in throttle?
44. How to preserve `this` in throttle?
45. How to pass arguments in throttle?
46. Can throttle be combined with debounce?
47. What happens if delay is very small in throttle?
48. Can throttle cause skipped executions?
49. How to cancel throttled function manually?
50. When is throttle dangerous to use?

---

## Debounce vs Throttle Comparison

51. Which is better for input search?
52. Which is better for scroll event?
53. Which is better for resize event?
54. Which reduces API calls more aggressively?
55. Which guarantees execution after user stops action?
56. Which guarantees periodic execution?
57. Which is more suitable for rate limiting?
58. Which is better for button spam prevention?
59. How do they affect server load differently?
60. Can both improve frontend performance?

---

## Advanced Concepts

61. How do debounce and throttle relate to event loop?
62. Are they microtasks or macrotasks?
63. How do they behave with async functions?
64. What happens if debounced function returns Promise?
65. How to debounce async API calls safely?
66. How to throttle network requests?
67. How do libraries like Lodash implement debounce?
68. What is difference between Lodash debounce and custom debounce?
69. How to test debounce logic?
70. How to test throttle logic?

---

## Debug Thinking

71. What happens if debounce delay is too large?
72. What happens if throttle delay is too large?
73. Why does debounce not execute during continuous typing?
74. Why does throttle execute multiple times during scroll?
75. What is output of repeated calls in debounce within delay window?
76. What is output of repeated calls in throttle within delay window?
77. Why does debounced function execute only once at end?
78. What happens if clearTimeout is misplaced?
79. What happens if timer variable is global?
80. What if multiple debounced instances share same timer?

---

## Coding Practice (Basic to Advanced)

81. Implement basic debounce function.
82. Implement debounce with leading option.
83. Implement debounce with trailing option.
84. Implement cancelable debounce.
85. Implement debounce for search input example.
86. Implement basic throttle function using timestamp.
87. Implement throttle using timer method.
88. Implement throttle with leading and trailing options.
89. Implement cancelable throttle.
90. Compare timestamp vs timer throttle behavior.
91. Build scroll performance optimizer using throttle.
92. Build auto-save feature using debounce.
93. Implement button spam protection using throttle.
94. Implement window resize handler using debounce.
95. Build live search using debounce + fetch.
96. Build rate limiter using throttle.
97. Combine debounce and throttle creatively.
98. Simulate heavy event firing and optimize using debounce.
99. Simulate rapid API calls and control using throttle.
100.  Build small performance utility library including debounce and throttle.

# 33 - Classes

## Conceptual Understanding

1. What is a class in JavaScript?
2. Why were classes introduced in ES6?
3. Are JavaScript classes truly object-oriented?
4. How are classes related to prototypes?
5. Is class in JavaScript just syntactic sugar?
6. What problem do classes solve compared to constructor functions?
7. What is difference between class and constructor function?
8. Are classes hoisted in JavaScript?
9. What is temporal dead zone in classes?
10. Is class declaration strict mode by default?
11. Can a class exist without constructor?
12. What happens if constructor is not defined?
13. Can class constructor return a value?
14. What is difference between class declaration and class expression?
15. Can classes be anonymous?
16. Are class methods enumerable?
17. Where are class methods stored internally?
18. What is instance of a class?
19. What is difference between instance properties and prototype methods?
20. When should you use classes in real projects?

---

## Constructor & Instance Members

21. What is constructor in class?
22. Can a class have multiple constructors?
23. What happens if constructor is defined twice?
24. What is `this` inside constructor?
25. How are instance properties created?
26. What happens if `new` keyword is not used?
27. Can constructor have parameters?
28. How do you set default values in constructor?
29. What is difference between instance property and method?
30. Can you define methods inside constructor?

---

## Methods in Classes

31. How do you define a method in class?
32. Are class methods stored on prototype?
33. What is difference between arrow function method and normal method?
34. What happens to `this` in arrow function inside class?
35. Can you define static methods?
36. What is static method?
37. How do you call static method?
38. Can static methods access instance properties?
39. What is difference between static and instance method?
40. Can you define static properties?

---

## Inheritance

41. What is inheritance in JavaScript classes?
42. How do you extend a class?
43. What does `extends` keyword do?
44. What is `super()`?
45. Why must `super()` be called in derived class constructor?
46. What happens if `super()` is not called?
47. Can derived class override parent methods?
48. How do you call parent method from child class?
49. What is method overriding?
50. What is method overloading in JavaScript?
51. Does JavaScript support multiple inheritance?
52. What is prototype chain in inheritance?
53. Can you extend built-in classes?
54. What happens to `instanceof` in inheritance?
55. How does constructor chaining work?

---

## Getters & Setters

56. What are getters in classes?
57. What are setters in classes?
58. Why use getters and setters?
59. How do you define getter?
60. How do you define setter?
61. Can getter exist without setter?
62. Can setter exist without getter?
63. What is use case of getter in validation?
64. What happens if setter modifies value internally?
65. Are getters and setters called as functions?

---

## Private & Public Fields

66. What are public fields in classes?
67. What are private fields in classes?
68. How do you declare private field?
69. Can private fields be accessed outside class?
70. What happens if you try to access private field externally?
71. Are private fields truly private?
72. What is difference between `#private` and convention-based private `_var`?
73. Can private methods exist?
74. Can static fields be private?
75. What is encapsulation in classes?

---

## Advanced Concepts

76. What is class expression?
77. Can class be passed as argument?
78. Can class be returned from function?
79. What are computed method names in class?
80. What is difference between function prototype and class prototype?
81. What is `new.target`?
82. What happens when class constructor explicitly returns object?
83. Can you freeze class instance?
84. What is difference between Object.create() and class instance?
85. How are classes internally represented in JavaScript engine?

---

## Debug Thinking

86. What is output of:

```js
class A {}
console.log(typeof A);
```

87. What happens if:

```js
class A {
  constructor() {
    return { a: 1 };
  }
}
const obj = new A();
console.log(obj);
```

88. What is output of:

```js
class A {
  static hello() {
    return "Hi";
  }
}
console.log(A.hello());
```

89. What is output of:

```js
class A {
  greet() {
    return "Hello";
  }
}
const a = new A();
console.log(a.greet());
```

90. What happens if:

```js
class A {
  constructor() {
    console.log(this);
  }
}
A();
```

91. What is output of:

```js
class A {}
class B extends A {}
const b = new B();
console.log(b instanceof A);
```

92. What happens if `super()` is not called in child constructor?
93. What is output of accessing private field outside class?
94. What happens if method name conflicts with parent?
95. Are class methods enumerable in `for...in` loop?

---

## Coding Practice (Basic to Advanced)

96. Create simple Person class with constructor and method.
97. Create class with getter and setter for validation.
98. Create class with static method.
99. Create parent and child class with inheritance.
100.  Implement bank account class with deposit and withdraw.
101.  Implement user authentication class with private password.
102.  Implement product class with discount calculation.
103.  Create logger class with static log method.
104.  Build simple cart class with add/remove items.
105.  Implement shape class and extend to rectangle and circle.

# 34 - Prototypes and Inheritance

## Conceptual Understanding

1. What is prototype in JavaScript?
2. Why does JavaScript use prototype-based inheritance?
3. What is difference between classical inheritance and prototype inheritance?
4. What is `[[Prototype]]` internal property?
5. What is `__proto__`?
6. What is `prototype` property on functions?
7. What is difference between `prototype` and `__proto__`?
8. How are objects linked to prototypes?
9. What is prototype chain?
10. How does JavaScript perform property lookup?
11. What happens if property is not found in object?
12. What is constructor function?
13. How does `new` keyword work internally?
14. What is role of `constructor` property?
15. Can objects share methods using prototype?
16. Why is method sharing memory-efficient?
17. What is shadowing in prototype chain?
18. What happens if child overrides parent method?
19. Is prototype chain dynamic?
20. Can you change prototype after object creation?

---

## Constructor Functions & Prototype

21. What is constructor function pattern?
22. How do you attach methods to prototype?
23. Why not define methods inside constructor?
24. What is difference between instance property and prototype property?
25. What happens if prototype method is modified after object creation?
26. What is output of checking `obj.__proto__ === Constructor.prototype`?
27. What is default prototype of a function?
28. What is `Object.prototype`?
29. Why does almost everything inherit from `Object.prototype`?
30. Can we remove `Object.prototype` from chain?

---

## Object.create & Manual Inheritance

31. What does `Object.create()` do?
32. How to create object with specific prototype?
33. What happens if prototype is null in `Object.create(null)`?
34. What are advantages of `Object.create()`?
35. How to create pure dictionary object?
36. How does property lookup work with `Object.create()`?
37. What is difference between `{}` and `Object.create(null)`?
38. How to manually link two constructor functions?
39. What is purpose of `Constructor.prototype = Object.create(Parent.prototype)`?
40. Why do we reset constructor after linking prototypes?

---

## ES6 Classes & Inheritance

41. What is class syntax in JavaScript?
42. Is class real class or syntactic sugar?
43. How does class relate to prototype?
44. What does `extends` keyword do?
45. What does `super()` do?
46. Why must `super()` be called before `this` in subclass constructor?
47. How are methods stored in class?
48. Are class methods enumerable?
49. What is static method in class?
50. Can classes inherit static methods?

---

## Advanced Prototype Concepts

51. What is `Object.getPrototypeOf()`?
52. What is `Object.setPrototypeOf()`?
53. Why changing prototype dynamically is slow?
54. What is `instanceof` operator?
55. How does `instanceof` check inheritance?
56. What is `hasOwnProperty()`?
57. What is difference between `in` operator and `hasOwnProperty()`?
58. What is method overriding?
59. What is method borrowing?
60. What is delegation in prototype system?

---

## Debug Thinking

61. What is output of:

```js
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return "Hello";
};

const p = new Person("Tanish");
console.log(p.greet());
```

62. What is output of:

```js
console.log(p.__proto__ === Person.prototype);
```

63. What happens if method is defined inside constructor instead of prototype?

64. What is output of:

```js
const obj = {};
console.log(obj.__proto__ === Object.prototype);
```

65. What happens if you set prototype to null?

66. What is output of:

```js
class A {}
class B extends A {}
const b = new B();
console.log(b instanceof A);
```

67. What happens if `super()` is not called in subclass constructor?

68. What is output of:

```js
function A() {}
A.prototype.x = 10;

const a1 = new A();
const a2 = new A();

A.prototype.x = 20;
console.log(a1.x, a2.x);
```

69. What happens if property exists both in object and its prototype?

70. What is output of:

```js
const obj = Object.create(null);
console.log(obj.toString);
```

---

## Coding Practice (Basic to Advanced)

71. Create constructor function with shared prototype method.
72. Create object using `Object.create()`.
73. Implement manual inheritance between two constructor functions.
74. Create class with method and property.
75. Create subclass using `extends`.
76. Override method in subclass.
77. Use `instanceof` to validate object type.
78. Create pure dictionary object using `Object.create(null)`.
79. Demonstrate method sharing across multiple instances.
80. Build simple Animal → Dog inheritance using constructor functions.
81. Build same Animal → Dog using ES6 classes.
82. Implement method borrowing example.
83. Demonstrate shadowing behavior.
84. Create object with custom prototype chain depth 3.
85. Check own properties vs inherited properties.
86. Build small plugin system using prototype methods.
87. Implement simple role inheritance system.
88. Create static method inside class and call it.
89. Demonstrate dynamic prototype modification.
90. Build small shape hierarchy (Shape → Circle → Rectangle).

# 35 - Module (Import & Export)

## Conceptual Understanding

1. What is a module in JavaScript?
2. Why were modules introduced in JavaScript?
3. What problem do modules solve?
4. What is scope of a module?
5. Are variables inside a module global?
6. What is difference between script and module?
7. What is ES Module (ESM)?
8. What is CommonJS?
9. What is difference between ESM and CommonJS?
10. Why are modules important in large applications?
11. What is modular programming?
12. What is separation of concerns in modules?
13. Can modules prevent variable pollution?
14. How do modules improve maintainability?
15. Are modules strict mode by default?
16. What is module resolution?
17. What is dependency graph in modules?
18. What is tree shaking?
19. What is circular dependency in modules?
20. What happens if two modules depend on each other?

---

## Exporting in ES Modules

21. What is named export?
22. What is default export?
23. What is syntax for named export?
24. What is syntax for default export?
25. Can a file have multiple named exports?
26. Can a file have multiple default exports?
27. What is difference between exporting at declaration vs exporting later?
28. Can you rename while exporting?
29. What is `export { name as newName }`?
30. Can you export variables, functions, and classes?
31. Can you export primitive values?
32. What happens if you export a variable and later modify it?
33. Are exports live bindings?
34. Can you export anonymous functions as default?
35. What happens if you forget to export something?

---

## Importing in ES Modules

36. What is syntax for named import?
37. What is syntax for default import?
38. What is difference between named and default import?
39. Can you rename while importing?
40. What is `import { name as newName }`?
41. What is namespace import (`import * as obj`)?
42. When should namespace import be used?
43. Can you import everything from a module?
44. What happens if imported name does not exist?
45. Can you mix default and named imports?
46. What is dynamic import?
47. What does `import()` return?
48. When should dynamic import be used?
49. Is import hoisted?
50. Can import be used inside condition?

---

## Module Behavior & Execution

51. When is module code executed?
52. Does module execute more than once if imported multiple times?
53. How does caching work in modules?
54. What is top-level scope in modules?
55. What is top-level await?
56. Can you use await at top level in modules?
57. What is side effect in module?
58. What is side-effect-only import?
59. What is re-exporting?
60. What is barrel file?

---

## CommonJS (Node.js)

61. What is `require()`?
62. What is `module.exports`?
63. What is `exports` object?
64. What is difference between `module.exports` and `exports`?
65. How do you export multiple values in CommonJS?
66. How do you import in CommonJS?
67. Is CommonJS synchronous or asynchronous?
68. Why CommonJS was used in Node.js?
69. Can ESM and CommonJS interoperate?
70. What happens if you mix `require` and `import`?

---

## Debug Thinking

71. What happens if you write two default exports in same file?
72. What happens if you import named export without curly braces?
73. What is output of importing a module that logs something?
74. What happens if module path is incorrect?
75. What happens if circular dependency exists?
76. Why does this fail?

```js
import { something } from "./file.js";
```

But file does:

```js
export default something;
```

77. What is output if you modify exported variable in original module?
78. What happens if you try to import inside function body?
79. Does importing same module twice create two copies?
80. What happens if you forget file extension in browser environment?

---

## Coding Practice (Basic to Advanced)

81. Create two files and export a function from one and import in another.
82. Create module that exports multiple named functions.
83. Create module with default export and import it.
84. Rename imported variable using `as`.
85. Create barrel file that re-exports from multiple files.
86. Demonstrate namespace import usage.
87. Create dynamic import example.
88. Build simple math utility module.
89. Create logger module and use it in another file.
90. Demonstrate live binding behavior.
91. Convert CommonJS module to ES Module.
92. Demonstrate `module.exports` vs `exports`.
93. Create configuration module and import it.
94. Build small modular counter app.
95. Show example of side-effect-only import.
96. Create module with top-level await.
97. Demonstrate circular dependency scenario.
98. Build simple plugin system using modules.
99. Implement lazy-loaded feature using dynamic import.
100.  Organize small project using proper modular structure.

# 36 - Fetch API, Axios & Other Ways to Make HTTP Requests

## Conceptual Understanding

1. What is HTTP request in web development?
2. Why do we need to make API calls from frontend?
3. What is Fetch API?
4. Is Fetch built into the browser?
5. What is Axios?
6. Is Axios built-in or external library?
7. What is difference between Fetch and Axios at high level?
8. What problem does Axios solve over Fetch?
9. What does promise-based HTTP client mean?
10. What is request–response cycle?
11. What is REST API?
12. What are HTTP methods (GET, POST, PUT, DELETE)?
13. What is status code in HTTP response?
14. What is difference between 200, 201, 400, 401, 404, 500?
15. What is request header?
16. What is response header?
17. What is request body?
18. What is JSON response?
19. What is CORS?
20. Why does browser block some API requests?

---

## Fetch API Basics

21. What is basic syntax of fetch?
22. What does fetch return?
23. Does fetch reject promise on HTTP error (like 404)?
24. Why do we need `response.json()`?
25. Is `response.json()` synchronous or asynchronous?
26. What happens if you forget to return `response.json()`?
27. How to send GET request using fetch?
28. How to send POST request using fetch?
29. How to set headers in fetch?
30. How to send JSON data in fetch body?
31. Why do we need `Content-Type: application/json`?
32. How to handle errors in fetch using try-catch?
33. How to check `response.ok`?
34. How to cancel fetch request?
35. What is AbortController?

---

## Axios Basics

36. How to install Axios?
37. How to import Axios?
38. How to send GET request using Axios?
39. How to send POST request using Axios?
40. Does Axios automatically parse JSON?
41. How does Axios handle HTTP errors?
42. What is Axios default baseURL?
43. How to set default headers in Axios?
44. What are Axios interceptors?
45. Why are interceptors useful?
46. How to cancel Axios request?
47. What is difference between Axios response and Fetch response?
48. How to send query parameters in Axios?
49. How to send form data using Axios?
50. What is Axios instance?

---

## Fetch vs Axios Comparison

51. Which one is lighter: Fetch or Axios?
52. Which one requires less setup?
53. Which one auto-transforms JSON?
54. Which one handles request cancellation better?
55. Which one supports interceptors?
56. Which one works in Node.js without polyfill?
57. Why is Fetch considered low-level?
58. Why do some companies prefer Axios?
59. When should you prefer Fetch?
60. When should you prefer Axios?

---

## Other Ways to Make HTTP Requests

61. What is XMLHttpRequest (XHR)?
62. Why was XHR used before Fetch?
63. What are limitations of XMLHttpRequest?
64. What is jQuery AJAX?
65. How does `$.ajax()` work?
66. Why modern apps don’t prefer jQuery AJAX?
67. What is SuperAgent?
68. What is got (Node.js library)?
69. What is node-fetch?
70. What is difference between client-side and server-side HTTP request?

---

## Advanced Concepts

71. What is timeout in HTTP request?
72. How to implement timeout in Fetch?
73. How to implement timeout in Axios?
74. What is retry logic in API calls?
75. What is exponential backoff?
76. What is rate limiting?
77. What is token-based authentication in API calls?
78. How to send Authorization header?
79. What is CSRF?
80. What is difference between cookies and tokens?

---

## Debug Thinking

81. What happens if you forget `await` before fetch?
82. Why does this return undefined?

```js
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log("Done");
```

83. Why fetch does not throw error on 404?
84. What happens if server returns invalid JSON?
85. What is output of:

```js
const res = await fetch(url);
console.log(res);
```

86. Why Axios throws error for 404 but fetch does not?
87. What happens if CORS error occurs?
88. Why does network tab show request but JS throws error?
89. What happens if you send object directly in fetch body without stringify?
90. Why do we get “Unexpected token < in JSON”?

---

## Coding Practice (Basic to Advanced)

91. Make GET request using fetch and log response.
92. Make POST request using fetch with JSON body.
93. Handle fetch errors properly using try-catch.
94. Create reusable fetch wrapper function.
95. Make GET request using Axios.
96. Create Axios instance with baseURL.
97. Add interceptor to attach auth token.
98. Build simple API service layer using Axios.
99. Implement retry logic in API call.
100.  Build small data-fetching module supporting both Fetch and Axios.

# 37 - ES6

## Conceptual Understanding

1. What is ES6?
2. What does ES6 stand for?
3. Why was ES6 introduced?
4. What problems in ES5 did ES6 try to solve?
5. What is ECMAScript?
6. Is JavaScript and ECMAScript same?
7. What year was ES6 released?
8. Why is ES6 also called ES2015?
9. Is ES6 backward compatible?
10. What is transpiling?
11. What is Babel?
12. Why do we need transpilers?
13. What is polyfill?
14. How do browsers support ES6 features?
15. What are major categories of ES6 features?
16. Does ES6 change JavaScript engine?
17. What is strict mode relation with ES6?
18. Are ES6 features mandatory to use modern JS?
19. What is difference between ES6 and modern JavaScript?
20. How did ES6 improve developer productivity?

---

## let & const

21. What is `let` in ES6?
22. What is `const` in ES6?
23. What is difference between `var`, `let`, and `const`?
24. What is block scope?
25. What is temporal dead zone (TDZ)?
26. Can `let` be redeclared?
27. Can `const` be reassigned?
28. Does `const` make object immutable?
29. What happens if `const` is not initialized?
30. Why is `let` preferred over `var`?

---

## Arrow Functions

31. What are arrow functions?
32. How is arrow function syntax different?
33. What is implicit return in arrow function?
34. What is difference between normal function and arrow function?
35. How does arrow function handle `this`?
36. Do arrow functions have `arguments` object?
37. Can arrow functions be used as constructors?
38. What is lexical `this`?
39. When should arrow functions not be used?
40. Are arrow functions hoisted?

---

## Template Literals

41. What are template literals?
42. What problem do template literals solve?
43. What is string interpolation?
44. Can template literals span multiple lines?
45. What are tagged template literals?
46. What is difference between concatenation and interpolation?
47. Can expressions be used inside template literals?
48. What is raw string?
49. How are template literals helpful in HTML rendering?
50. Are template literals slower than normal strings?

---

## Destructuring

51. What is destructuring in ES6?
52. What is array destructuring?
53. What is object destructuring?
54. Can destructuring have default values?
55. Can destructuring rename variables?
56. What is nested destructuring?
57. What is rest element in destructuring?
58. Can destructuring be used in function parameters?
59. What happens if property does not exist?
60. Does destructuring modify original object?

---

## Spread & Rest

61. What is spread operator?
62. What is rest operator?
63. What is difference between spread and rest?
64. Where can spread be used?
65. Where can rest be used?
66. Can spread be used in objects?
67. Can spread be used in arrays?
68. What happens if spread is used on non-iterable?
69. Does spread create shallow copy?
70. Can rest parameter coexist with normal parameters?

---

## Classes

71. What are classes in ES6?
72. Is ES6 class true class-based OOP?
73. What is constructor in class?
74. What is `extends` keyword?
75. What is `super()`?
76. What are instance methods?
77. What are static methods?
78. What is difference between prototype and class syntax?
79. Are classes hoisted?
80. What is difference between function constructor and class?

---

## Modules

81. What are ES6 modules?
82. What is `export` keyword?
83. What is `default export`?
84. What is `named export`?
85. What is `import` keyword?
86. What is difference between default and named import?
87. Can we have multiple default exports?
88. What is dynamic import?
89. What is module scope?
90. Why modules are important in large applications?

---

## Other Important ES6 Features

91. What is Promise in ES6?
92. What are default parameters?
93. What is `for...of` loop?
94. What are Symbols?
95. What is Map?
96. What is Set?
97. What is WeakMap?
98. What is WeakSet?
99. What are generators?
100.  What is iterator protocol?

# 38 - Regular Expressions (Regex)

## Conceptual Understanding

1. What is Regular Expression (Regex)?
2. Why do we need Regex in programming?
3. Is Regex a JavaScript feature or general concept?
4. What problems does Regex solve?
5. How does pattern matching work internally?
6. What is difference between exact match and pattern match?
7. What is literal syntax for Regex in JavaScript?
8. What is constructor syntax for Regex?
9. What is difference between `/pattern/` and `new RegExp()`?
10. What are flags in Regex?
11. What does `g` flag do?
12. What does `i` flag do?
13. What does `m` flag do?
14. What does `s` flag do?
15. What does `u` flag do?
16. What does `y` flag do?
17. Is Regex case-sensitive by default?
18. Can Regex be used for validation?
19. Can Regex replace string methods?
20. What are limitations of Regex?

---

## Basic Patterns

21. What does `.` (dot) represent?
22. What does `\d` represent?
23. What does `\D` represent?
24. What does `\w` represent?
25. What does `\W` represent?
26. What does `\s` represent?
27. What does `\S` represent?
28. What is character class `[abc]`?
29. What is negated character class `[^abc]`?
30. What is range `[a-z]`?

---

## Quantifiers

31. What does `*` mean in Regex?
32. What does `+` mean?
33. What does `?` mean?
34. What does `{n}` mean?
35. What does `{n,}` mean?
36. What does `{n,m}` mean?
37. What is greedy matching?
38. What is lazy matching?
39. How to make quantifier lazy?
40. What is difference between `*` and `+`?

---

## Anchors & Boundaries

41. What does `^` mean in Regex?
42. What does `$` mean?
43. What is word boundary `\b`?
44. What is non-word boundary `\B`?
45. What is difference between `^` inside and outside character class?
46. How to match entire string using anchors?
47. What happens if anchors are not used in validation?
48. How does multiline flag affect `^` and `$`?
49. What is difference between boundary and anchor?
50. Can anchors match positions instead of characters?

---

## Groups & Alternation

51. What are capturing groups?
52. What is non-capturing group `(?: )`?
53. What is alternation `|`?
54. What is backreference `\1`?
55. How do nested groups work?
56. What is named capturing group?
57. How to access captured groups in JavaScript?
58. What is difference between capturing and non-capturing groups?
59. What is lookahead?
60. What is negative lookahead?

---

## Regex Methods in JavaScript

61. What does `test()` do?
62. What does `exec()` do?
63. What is difference between `test()` and `exec()`?
64. What does `match()` do?
65. What is difference between `match()` and `matchAll()`?
66. What does `replace()` do with Regex?
67. What is difference between `replace()` and `replaceAll()` with Regex?
68. What does `search()` do?
69. How does global flag affect `exec()`?
70. What is `lastIndex` property in Regex?

---

## Debug Thinking

71. What is output of:

```js
console.log(/abc/.test("abcdef"));
```

72. What is output of:

```js
console.log("hello123".match(/\d+/));
```

73. What is output of:

```js
console.log("aaa".match(/a+/));
```

74. What is output of:

```js
console.log("abc".match(/^a/));
```

75. What is output of:

```js
console.log("abc".match(/c$/));
```

76. What is difference between:

```js
/ab/.test("abc");
```

and

```js
/^ab$/.test("abc");
```

77. What happens if `g` flag is used with `test()` multiple times?
78. What is output of:

```js
console.log("abcabc".replace(/a/g, "x"));
```

79. What happens if pattern is invalid?
80. Why does this fail?

```js
console.log(/\d+/.test("abc"));
```

---

## Coding Practice (Basic to Advanced)

81. Write Regex to validate email.
82. Write Regex to validate 10-digit phone number.
83. Write Regex to validate strong password.
84. Write Regex to extract all numbers from string.
85. Write Regex to remove extra spaces.
86. Write Regex to check if string contains only alphabets.
87. Write Regex to validate URL (basic).
88. Write Regex to extract hashtags from text.
89. Write Regex to extract dates in format DD/MM/YYYY.
90. Write Regex to replace multiple spaces with single space.
91. Write Regex to check if string starts with capital letter.
92. Write Regex to check if string ends with punctuation.
93. Write Regex to find duplicate consecutive words.
94. Write Regex to validate IPv4 address (basic).
95. Write Regex to extract domain name from URL.
96. Write Regex to match hexadecimal color code.
97. Write Regex to match time format HH:MM (24-hour).
98. Write Regex to split sentence into words.
99. Write Regex to detect repeated characters.
100.  Build small text validator using Regex patterns.
