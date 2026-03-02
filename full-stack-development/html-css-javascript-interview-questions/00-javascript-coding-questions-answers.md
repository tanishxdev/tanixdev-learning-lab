## Problem 1: Reverse a given string in JavaScript

Input: `"Hello, World!"`
Output: `"!dlroW ,olleH"`

---

### Approach 1: Iterative (for loop)

##### Thinking aloud

- Strings in JS are **immutable**, so I cannot modify characters in place.
- I’ll create a new empty string `reversedStr`.
- I’ll start from the **last index** of the string.
- I’ll move backwards and **append each character**.
- Finally, return the new string.

#### Code

```js
function reverseString(str) {
  let reversedStr = "";

  // Start from last character and move backward
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

// Example usage
const inputString = "Hello, World!";
console.log(reverseString(inputString));
```

#### Dry Run (small)

```
str = "abc"
i = 2 → reversedStr = "c"
i = 1 → reversedStr = "cb"
i = 0 → reversedStr = "cba"
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)** (new string)

#### Interview Notes

- Very **clear and readable**
- Works in all JS environments
- Slight downside: string concatenation inside loop (still acceptable)

---

### Approach 2: Recursion

#### Thinking aloud

- Recursion means:
  - Break the problem into **smaller subproblems**

- Base case:
  - If string is empty, return empty string

- Recursive step:
  - Reverse the remaining string
  - Add the first character at the end

#### Code

```js
function reverseStringRecursively(str) {
  if (str === "") {
    return "";
  }

  return reverseStringRecursively(str.substr(1)) + str.charAt(0);
}

// Example usage
console.log(reverseStringRecursively("Hello, World!"));
```

#### Dry Run (for "abc")

```
reverse("abc")
→ reverse("bc") + "a"
→ reverse("c") + "b" + "a"
→ reverse("") + "c" + "b" + "a"
→ "cba"
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)** (call stack)

#### Interview Notes

- Shows **recursion understanding**
- Not ideal for very long strings (stack overflow risk)
- Good for concept explanation, not production preferred

---

### Approach 3: Built-in Methods

#### Thinking aloud

- Convert string → array
- Reverse array
- Join back into string
- Shortest and cleanest solution

#### Code

```js
function reverseStringUsingBuiltInMethods(str) {
  return str.split("").reverse().join("");
}

// Example usage
console.log(reverseStringUsingBuiltInMethods("Hello, World!"));
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Most **concise**
- Interviewer may ask:
  “Can you do it without built-ins?”
  → That’s why approach 1 matters.

### Interview Answers

> “I can reverse a string by iterating from the end and building a new string.
> Time complexity is O(n).
> Alternatively, recursion or built-in methods can be used, but iteration is the safest and most readable.”

## Problem 2: Check whether a given string is a palindrome in JavaScript

Input: `"naman"`
Output: `true`

---

### Approach 1: Using reverse method

#### Thinking aloud

- A palindrome reads the same forward and backward.
- I will reverse the string and compare it with the original.
- Before comparison:
  - Remove non-alphanumeric characters.
  - Convert to lowercase for case-insensitive check.

#### Code

```js
function checkPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

// Example usage
const inputString = "naman";
console.log(checkPalindrome(inputString));
```

#### Dry Run (small)

```
str = "naman"
cleanedStr = "naman"
reversedStr = "naman"
comparison → true
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)** (reversed string)

#### Interview Notes

- Very simple and readable
- Uses extra space for reversed string
- Interviewer may ask for solution without reverse

---

### Approach 2: Two-pointer (loop)

#### Thinking aloud

- I will compare characters from both ends.
- Use two pointers:
  - `left` from start
  - `right` from end

- If any mismatch occurs, it is not a palindrome.
- No need to reverse the string.

#### Code

```js
function checkPalindromeUsingLoop(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Example usage
const inputString1 = "naman";
console.log(checkPalindromeUsingLoop(inputString1));
```

#### Dry Run (for "naman")

```
left=0, right=4 → n === n
left=1, right=3 → a === a
left=2, right=2 → stop
return true
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- More optimal than reverse method
- Preferred in interviews
- Shows understanding of two-pointer technique

---

### Interview Answers

> “I check a palindrome by comparing characters from both ends using two pointers.
> If all characters match, the string is a palindrome.
> This runs in O(n) time with O(1) extra space.”

## Problem 3: Find the largest number in an array in JavaScript

Input: `[3, 5, 7, 2, 8]`
Output: `8`

---

### Approach 1: Iterative (for loop)

#### Thinking aloud

- First, handle the edge case:
  - If the array is empty, return `null`.

- Assume the **first element** is the largest initially.
- Traverse the array from index `1`.
- Compare each element with the current largest.
- If a larger value is found, update `largest`.
- After the loop, return the largest value.

#### Code

```js
function findLargest(arr) {
  if (arr.length === 0) {
    return null;
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// Example usage
const numbers = [3, 5, 7, 2, 8];
console.log(findLargest(numbers));
```

#### Dry Run (small)

```
arr = [3, 5, 7, 2, 8]

largest = 3
i=1 → 5 > 3 → largest = 5
i=2 → 7 > 5 → largest = 7
i=3 → 2 > 7 → no change
i=4 → 8 > 7 → largest = 8

return 8
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Most reliable and clear approach
- Works for all numeric values
- Preferred when avoiding built-in helpers

---

### Approach 2: Using `Math.max`

#### Thinking aloud

- `Math.max` returns the maximum value from given arguments.
- Use the spread operator to pass array elements.
- Still need to handle empty array case.

#### Code

```js
function findLargestUsingMathMax(arr) {
  if (arr.length === 0) {
    return null;
  }
  return Math.max(...arr);
}

// Example usage
const numbers1 = [3, 5, 7, 2, 8];
console.log(findLargestUsingMathMax(numbers1));
```

#### Dry Run (small)

```
Math.max(3, 5, 7, 2, 8)
→ 8
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)** (spread operator creates arguments)

#### Interview Notes

- Short and clean
- Not ideal for very large arrays (argument limit)
- Interviewer may ask for loop-based solution

---

### Interview Answers

> “I find the largest number by iterating through the array and tracking the maximum value.
> This takes O(n) time and O(1) extra space.
> A built-in alternative is Math.max with spread, but the loop approach is safer.”

## Problem 4: Remove the first element from an array in JavaScript

Input: `[5, 6, 7]`
Output: `[6, 7]`

---

### Approach 1: Using `slice()`

#### Thinking aloud

- `slice(startIndex)` returns a **new array**.
- `slice(1)` means:
  - Start from index `1`
  - Exclude index `0`

- It does **not modify the original array**.
- So I must reassign the result back to `arr`.

#### Code

```js
let arr = [5, 6, 7];

// Create a new array starting from index 1
arr = arr.slice(1);

console.log(arr);
```

#### Dry Run

```
arr = [5, 6, 7]
slice(1) → [6, 7]
arr = [6, 7]
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)** (new array created)

#### Interview Notes

- Does not mutate original array
- Functional / immutable approach
- Preferred when immutability matters

---

### Approach 2: Using `shift()`

#### Thinking aloud

- `shift()` removes the first element.
- It **modifies the original array**.
- It also returns the removed element.

#### Code

```js
let arr = [5, 6, 7];

// Remove first element
arr.shift();

console.log(arr);
```

#### Dry Run

```
arr = [5, 6, 7]
shift() removes 5
arr becomes [6, 7]
```

#### Complexity

- Time: **O(n)** (elements shift left)
- Space: **O(1)**

#### Interview Notes

- Mutates original array
- Simple and direct
- Good for small arrays
- Not ideal in performance-critical large arrays

---

### Interview Answers

> “To remove the first element, I can use `shift()` which mutates the array.
> If I want to avoid mutation, I use `slice(1)` which returns a new array.
> Both take O(n) time.”

## Problem 5: Write a Program to use a callback function

Input: `name = "Geek"`
Output: `Hello, Geek!`

---

### Approach

#### Thinking aloud

- A callback function is a function passed as an argument to another function.
- The main function executes the callback when needed.
- Here:
  - `greet` takes `name` and `callback`.
  - It calls `callback` with a formatted message.

#### Code

```js
function greet(name, callback) {
  callback(`Hello, ${name}!`);
}

greet("Geek", function (message) {
  console.log(message);
});
```

#### Output

```
Hello, Geek!
```

#### Complexity

- Time: **O(1)**
- Space: **O(1)**

#### Interview Notes

- Callbacks are used in:
  - Asynchronous operations
  - Event handling
  - Higher-order functions

- Important concept in JS execution model

---

## Problem 6: Write a code to create an arrow function

Input: `6, 2`
Output: `8`

---

### Approach

#### Thinking aloud

- Arrow functions are shorter syntax for function expressions.
- Syntax:
  - `(params) => expression`

- If single expression:
  - It implicitly returns the value.

#### Code

```js
const add = (a, b) => a + b;

console.log(add(6, 2));
```

#### Output

```
8
```

#### Complexity

- Time: **O(1)**
- Space: **O(1)**

#### Interview Notes

- Arrow functions:
  - Do not have their own `this`
  - Cannot be used as constructors

- Common in modern JavaScript

---

## Problem 7: Write a Program to add a property to an object

Input: `{ name: 'Riya' }`
Output: `{ name: 'Riya', age: 21 }`

---

### Approach

#### Thinking aloud

- Objects in JS are dynamic.
- We can add properties using:
  - Dot notation
  - Bracket notation

#### Code

```js
const obj = { name: "Riya" };

obj.age = 21;

console.log(obj);
```

#### Output

```
{ name: 'Riya', age: 21 }
```

#### Complexity

- Time: **O(1)**
- Space: **O(1)**

#### Interview Notes

- Objects are mutable.
- Properties can be added anytime.
- Important in dynamic data handling.

---

## Problem 8: Write a Program to delete a property from an object

Input: `{ name: 'Riya', age: 21 }`
Output: `{ name: 'Riya' }`

---

### Approach

#### Thinking aloud

- Use `delete` keyword.
- It removes the property from the object.
- It mutates the original object.

#### Code

```js
const obj = { name: "Riya", age: 21 };

delete obj.age;

console.log(obj);
```

#### Output

```
{ name: 'Riya' }
```

#### Complexity

- Time: **O(1)**
- Space: **O(1)**

#### Interview Notes

- `delete` removes property completely.
- Alternative:
  - Use destructuring to create new object without property (immutability).

- Important when working with state management.

## Problem 9: What will be the output?

```js
console.log([1, 2, 3].reduce((a, b) => a + b));
```

Output: `6`

---

### Explanation

#### Thinking aloud

- `reduce()` processes array elements one by one.
- `a` = accumulator
- `b` = current value
- No initial value provided:
  - `a` starts as first element → `1`
  - `b` starts as second element → `2`

#### Dry Run

```
Step 1: a=1, b=2 → 1+2=3
Step 2: a=3, b=3 → 3+3=6
```

Final result → `6`

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- If array is empty and no initial value → error
- Always safe to provide initial value

---

## Problem 10: What will be the output?

```js
console.log("gfg".repeat(3));
```

Output: `gfggfggfg`

---

### Explanation

#### Thinking aloud

- `repeat(3)` repeats the string 3 times.
- It returns a new string.
- Original string is unchanged.

#### Dry Run

```
'gfg' + 'gfg' + 'gfg'
→ 'gfggfggfg'
```

#### Complexity

- Time: **O(n × k)** (string length × repeat count)
- Space: **O(n × k)**

#### Interview Notes

- Useful for pattern printing
- Throws error if negative number passed

---

## Problem 11: What will be the output?

```js
console.log(1 + "2");
```

Output: `12`

---

### Explanation

#### Thinking aloud

- `+` operator with string → triggers string concatenation.
- Number `1` gets converted to string.
- `"1" + "2"` → `"12"`

#### Interview Notes

- `+` is both addition and concatenation.
- Type coercion happens automatically.

---

## Problem 12: What will be the output?

```js
console.log("6" - 1);
```

Output: `5`

---

### Explanation

#### Thinking aloud

- `-` operator only works with numbers.
- JS converts `'6'` to number `6`.
- `6 - 1 = 5`

#### Interview Notes

- `-`, `*`, `/` force numeric conversion.
- This is implicit type coercion.

---

## Problem 13: What will be the output?

```js
console.log(1 === "1");
```

Output: `false`

---

### Explanation

#### Thinking aloud

- `===` checks:
  - Value
  - Type

- `1` → number
- `'1'` → string
- Different types → `false`

#### Interview Notes

- Always prefer `===` over `==`
- Avoid loose equality in production code

---

## Problem 14: What will be the output?

```js
console.log(null == undefined);
```

Output: `true`

---

### Explanation

#### Thinking aloud

- `==` is loose equality.
- JS treats:
  - `null`
  - `undefined`
    as equal only to each other.

#### Interview Notes

- `null === undefined` → false
- `null == undefined` → true
- Common interview trap on type coercion

## Problem 15: Write a Program to find sum of an array

Input: `[15, 6, 10, 2]`
Output: `33`

---

### Approach 1: Using for loop

#### Thinking aloud

- Initialize `sum = 0`
- Traverse the array
- Add each element to `sum`
- Return final `sum`

#### Code

```js
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumArray([15, 6, 10, 2]));
```

#### Dry Run

```
sum = 0
i=0 → sum = 0 + 15 = 15
i=1 → sum = 15 + 6 = 21
i=2 → sum = 21 + 10 = 31
i=3 → sum = 31 + 2 = 33
return 33
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Simple accumulation pattern
- Works for all numeric arrays
- Can also be solved using `reduce()`

---

### Approach 2: Using reduce

#### Thinking aloud

- `reduce()` accumulates values
- Start with initial value `0`
- Add each element

#### Code

```js
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([15, 6, 10, 2]));
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Cleaner syntax
- Must provide initial value to avoid edge-case errors

---

## Problem 16: Write a Program to check if a number is prime

Input: `7`
Output: `true`

---

### Approach 1: Basic loop

#### Thinking aloud

- Prime number:
  - Greater than 1
  - Divisible only by 1 and itself

- If number ≤ 1 → return false
- Check divisibility from `2` to `num - 1`
- If divisible → not prime
- Otherwise → prime

#### Code

```js
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));
```

#### Dry Run (for 7)

```
i=2 → 7%2 ≠ 0
i=3 → 7%3 ≠ 0
i=4 → 7%4 ≠ 0
i=5 → 7%5 ≠ 0
i=6 → 7%6 ≠ 0
return true
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Works but not optimal
- Can optimize to check till √num

---

### Approach 2: Optimized (check till square root)

#### Thinking aloud

- If `num` has a factor greater than √num,
  it must also have a factor smaller than √num
- So only check till `i * i <= num`

#### Code

```js
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));
```

#### Complexity

- Time: **O(√n)**
- Space: **O(1)**

#### Interview Notes

- Optimized version preferred
- Common interview question
- Important for number theory basics

## Problem 17: Write a Program to print Fibonacci sequence up to n terms

Input: `7`
Output:

```
0
1
1
2
3
5
8
```

---

### Approach

#### Thinking aloud

- Fibonacci starts with:
  - `0`
  - `1`

- Every next number:
  - `next = num1 + num2`

- After printing:
  - Shift values:
    - `num1 = num2`
    - `num2 = next`

- Repeat this `n` times.

#### Code

```js
function fibonacci(n) {
  let num1 = 0;
  let num2 = 1;
  let nextNum;

  for (let i = 1; i <= n; i++) {
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }
}

fibonacci(7);
```

#### Dry Run (n=7)

```
i=1 → 0
i=2 → 1
i=3 → 1
i=4 → 2
i=5 → 3
i=6 → 5
i=7 → 8
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Important sequence question
- Can also be solved using recursion
- Iterative is more efficient

---

## Problem 18: Write a Program to find factorial of a number

Input: `7`
Output: `5040`

---

### Approach

#### Thinking aloud

- Factorial:
  - `n! = n × (n-1) × ... × 1`

- Initialize `answer = 1`
- Multiply from `2` to `num`
- Return final result

#### Code

```js
function factorial(num) {
  let answer = 1;

  for (let i = 2; i <= num; i++) {
    answer *= i;
  }

  return answer;
}

console.log(factorial(7));
```

#### Dry Run (7)

```
1 × 2 = 2
2 × 3 = 6
6 × 4 = 24
24 × 5 = 120
120 × 6 = 720
720 × 7 = 5040
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Edge case: 0! = 1
- Recursive solution also possible

---

## Problem 19: Calculate the Power of a Number in JavaScript

Input: `3, 4`
Output: `81`

---

### Approach

#### Thinking aloud

- Use exponentiation operator `**`
- `base ** exponent`
- Direct mathematical operation

#### Code

```js
function power(base, exponent) {
  return base ** exponent;
}

console.log(power(3, 4));
```

#### Dry Run

```
3 ** 4
= 3 × 3 × 3 × 3
= 81
```

#### Complexity

- Time: **O(1)** (built-in optimized)
- Space: **O(1)**

#### Interview Notes

- Can also be done using loop
- Important when discussing binary exponentiation (advanced)

---

## Problem 20: Write a Program to print frequency of elements in an array

Input: `[1, 1, 2, 3, 3, 4]`
Output: `{ '1': 2, '2': 1, '3': 2, '4': 1 }`

---

### Approach

#### Thinking aloud

- Create empty object `freq`
- Traverse array
- If element already exists in object:
  - Increment count

- Else:
  - Initialize count to 1

- Return object

#### Code

```js
function frequency(arr) {
  const freq = {};

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]] += 1;
    } else {
      freq[arr[i]] = 1;
    }
  }

  return freq;
}

console.log(frequency([1, 1, 2, 3, 3, 4]));
```

#### Dry Run

```
1 → {1:1}
1 → {1:2}
2 → {1:2, 2:1}
3 → {1:2, 2:1, 3:1}
3 → {1:2, 2:1, 3:2}
4 → {1:2, 2:1, 3:2, 4:1}
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Very common interview question
- Can also use Map instead of object
- Important for counting problems

## Problem 21: Count occurrences of a character in a string

Input: `"GeeksForGeeks", 'G'`
Output: `2`

---

### Approach 1: Using split()

#### Thinking aloud

- Split the string using the character.
- The number of occurrences equals:
  - `array length - 1`

#### Code

```js
function countChar(str, char) {
  return str.split(char).length - 1;
}

console.log(countChar("GeeksForGeeks", "G"));
```

#### Dry Run

```
"GeeksForGeeks".split("G")
→ ["", "eeksFor", "eeks"]
length = 3
3 - 1 = 2
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Simple one-liner
- Case-sensitive
- Creates extra array

---

### Approach 2: Using for loop

#### Thinking aloud

- Initialize `count = 0`
- Traverse each character
- If match found → increment count

#### Code

```js
function countChar(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

console.log(countChar("GeeksForGeeks", "G"));
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- More optimal (no extra array)
- Preferred in interviews

---

## Problem 22: Convert Celsius to Fahrenheit

Input: `20`
Output: `68`

---

### Approach

#### Thinking aloud

- Formula:
  - `F = (C × 9/5) + 32`

- Direct mathematical conversion

#### Code

```js
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(20));
```

#### Complexity

- Time: **O(1)**
- Space: **O(1)**

#### Interview Notes

- Pure formula-based
- No loop required

---

## Problem 23: Convert Fahrenheit to Celsius

Input: `68`
Output: `20`

---

### Approach

#### Thinking aloud

- Formula:
  - `C = (F - 32) × 5/9`

#### Code

```js
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(fahrenheitToCelsius(68));
```

#### Complexity

- Time: **O(1)**
- Space: **O(1)**

#### Interview Notes

- Reverse formula of previous question
- Simple arithmetic conversion

---

## Problem 24: Sort array in Ascending Order

Input: `[5, 3, 8, 1]`
Output: `[1, 3, 5, 8]`

---

### Approach: Nested loops (Simple selection-style sort)

#### Thinking aloud

- Compare each element with remaining elements
- If smaller element found → swap
- Repeat until array sorted

#### Code

```js
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(sortArray([5, 3, 8, 1]));
```

#### Dry Run (key swaps)

```
[5,3,8,1]
swap 5 & 3 → [3,5,8,1]
swap 3 & 1 → [1,5,8,3]
swap 5 & 3 → [1,3,8,5]
swap 8 & 5 → [1,3,5,8]
```

#### Complexity

- Time: **O(n²)**
- Space: **O(1)**

#### Interview Notes

- Basic sorting logic
- Not efficient for large arrays
- Good for learning sorting fundamentals

---

## Problem 25: Sort array in Descending Order

Input: `[5, 3, 8, 1]`
Output: `[8, 5, 3, 1]`

---

### Approach: Bubble Sort (Descending)

#### Thinking aloud

- Compare adjacent elements
- If left < right → swap
- Repeat passes until sorted

#### Code

```js
function sortArrayDesc(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(sortArrayDesc([5, 3, 8, 1]));
```

#### Complexity

- Time: **O(n²)**
- Space: **O(1)**

#### Interview Notes

- Simple bubble sort logic
- Inefficient for large data
- Built-in `sort()` with comparator is better for production

## Problem 26: Write a Program to merge two arrays in JavaScript

Input: `[5, 6]`, `[7, 8]`
Output: `[5, 6, 7, 8]`

---

### Approach 1: Using concat() method

#### Thinking aloud

- `concat()` method merges two or more arrays.
- It returns a **new array** without modifying the original arrays.
- Elements of the second array are added to the end of the first.

#### Code

```js
function mergeArrays(arr1, arr2) {
  // concat() merges arr2 at the end of arr1
  return arr1.concat(arr2);
}

console.log(mergeArrays([5, 6], [7, 8]));
```

#### Dry Run

```
arr1 = [5, 6]
arr2 = [7, 8]
concat() → [5, 6, 7, 8]
```

#### Complexity

- Time: **O(n + m)** where n, m are array lengths
- Space: **O(n + m)** (new array created)

#### Interview Notes

- Does not mutate original arrays
- Can merge multiple arrays: `arr1.concat(arr2, arr3)`
- Alternative: spread operator `[...arr1, ...arr2]`

---

### Approach 2: Using spread operator

#### Thinking aloud

- Spread operator `...` expands array elements.
- Create new array with elements from both arrays.

#### Code

```js
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([5, 6], [7, 8]));
```

#### Complexity

- Time: **O(n + m)**
- Space: **O(n + m)**

#### Interview Notes

- Modern ES6 syntax
- More intuitive than concat()
- Commonly used in React/Redux for immutability

---

### Interview Answers

> "I can merge two arrays using `concat()` which returns a new array, or using the spread operator `[...arr1, ...arr2]`. Both take O(n+m) time and space. The spread operator is more modern and commonly used."

---

## Problem 27: Find the Intersection of Two Arrays in JavaScript

Input: `[5, 6, 7]`, `[6, 7, 8]`
Output: `[6, 7]`

---

### Approach 1: Using Set and filter()

#### Thinking aloud

- Intersection means elements present in **both** arrays.
- Convert second array to a `Set` for O(1) lookup.
- Filter first array to keep only elements present in the Set.

#### Code

```js
function arrayIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter((value) => set2.has(value));
}

console.log(arrayIntersection([5, 6, 7], [6, 7, 8]));
```

#### Dry Run

```
arr1 = [5, 6, 7]
arr2 = [6, 7, 8]
set2 = {6, 7, 8}
filter:
5 → set2.has(5)? false → exclude
6 → set2.has(6)? true → include
7 → set2.has(7)? true → include
return [6, 7]
```

#### Complexity

- Time: **O(n + m)**
- Space: **O(min(n, m))** for result + O(m) for Set

#### Interview Notes

- Efficient approach
- Handles duplicates? First array's duplicates remain
- For unique intersection, convert both to Sets first

---

### Approach 2: Using filter() and includes()

#### Thinking aloud

- Simpler but less efficient.
- For each element in arr1, check if it exists in arr2.

#### Code

```js
function arrayIntersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

console.log(arrayIntersection([5, 6, 7], [6, 7, 8]));
```

#### Complexity

- Time: **O(n × m)** - nested loop
- Space: **O(min(n, m))**

#### Interview Notes

- Works but inefficient for large arrays
- Good to mention as a simpler alternative
- Interviewer may ask to optimize → approach 1

---

### Interview Answers

> "To find array intersection, I use a Set for O(1) lookup and filter the first array. This gives O(n+m) time complexity. A simpler but less efficient approach is using `includes()` which is O(n×m)."

---

## Problem 28: Find the Union of Two Arrays in JavaScript

Input: `[1, 2, 3]`, `[2, 3, 4]`
Output: `[1, 2, 3, 4]`

---

### Approach: Using Set

#### Thinking aloud

- Union means all unique elements from both arrays.
- Combine both arrays using spread operator.
- Pass to `Set` to remove duplicates.
- Convert back to array using spread or `Array.from()`.

#### Code

```js
function arrayUnion(arr1, arr2) {
  // Merge arrays, then remove duplicates using Set
  return [...new Set([...arr1, ...arr2])];
}

console.log(arrayUnion([1, 2, 3], [2, 3, 4]));
```

#### Dry Run

```
arr1 = [1, 2, 3]
arr2 = [2, 3, 4]
merged = [1, 2, 3, 2, 3, 4]
Set = {1, 2, 3, 4}
spread → [1, 2, 3, 4]
```

#### Complexity

- Time: **O(n + m)**
- Space: **O(n + m)**

#### Interview Notes

- Clean one-liner
- Set automatically handles duplicates
- Order is preserved (insertion order)

---

### Interview Answers

> "I find the union of two arrays by combining them with the spread operator and passing to a Set to remove duplicates, then converting back to an array. This runs in O(n+m) time and preserves the original order."

---

## Problem 29: Check if a Number is Even or Odd in JavaScript

Input: `10`
Output: `true`

---

### Approach: Using modulo operator

#### Thinking aloud

- Even numbers are divisible by 2.
- Use modulo operator `%` to check remainder.
- If `num % 2 === 0`, number is even.

#### Code

```js
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(10));
```

#### Dry Run

```
10 % 2 = 0 → true
```

#### Complexity

- Time: **O(1)**
- Space: **O(1)**

#### Interview Notes

- Simplest and most efficient
- Works for positive and negative numbers
- Can also check odd: `num % 2 !== 0`

---

### Interview Answers

> "I check if a number is even using the modulo operator: `num % 2 === 0`. This runs in constant time. For odd numbers, the condition would be `num % 2 !== 0`."

---

## Problem 30: Write a Program to find the minimum value in an array in JavaScript

Input: `[5, 10, -1, 8]`
Output: `-1`

---

### Approach 1: Using for loop

#### Thinking aloud

- Assume first element is minimum.
- Iterate through the array.
- If a smaller element is found, update minimum.

#### Code

```js
function findMin(arr) {
  // Assume first element is minimum
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; // Update if smaller found
    }
  }
  return min;
}

console.log(findMin([5, 10, -1, 8]));
```

#### Dry Run

```
arr = [5, 10, -1, 8]
min = 5
i=1 → 10 < 5? false
i=2 → -1 < 5? true → min = -1
i=3 → 8 < -1? false
return -1
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Manual approach shows understanding
- Handles edge cases: empty array? need to check

---

### Approach 2: Using Math.min() with spread

#### Thinking aloud

- `Math.min()` returns smallest of given numbers.
- Use spread operator to pass array elements.

#### Code

```js
function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMin([5, 10, -1, 8]));
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Clean one-liner
- For empty array, returns `Infinity` (handle separately)

---

### Interview Answers

> "I find the minimum value by iterating through the array and tracking the smallest element. This runs in O(n) time with O(1) space. Alternatively, I can use `Math.min(...arr)` for a concise solution."

---

## Problem 31: Check if a String Contains Another String in JavaScript

Input: `'GeeksForGeeks'`, `'For'`
Output: `true`

---

### Approach 1: Using includes()

#### Thinking aloud

- `includes()` method checks if substring exists.
- Returns boolean directly.

#### Code

```js
function containsSubstring(str, substring) {
  return str.includes(substring);
}

console.log(containsSubstring("GeeksForGeeks", "For"));
```

#### Dry Run

```
'GeeksForGeeks'.includes('For') → true
```

#### Complexity

- Time: **O(n)** where n is string length
- Space: **O(1)**

#### Interview Notes

- Modern and readable
- Case-sensitive
- Can add second parameter for start position

---

### Approach 2: Using indexOf()

#### Thinking aloud

- `indexOf()` returns position of substring.
- If not found, returns `-1`.
- Check if result is not `-1`.

#### Code

```js
function containsSubstring(str, substring) {
  return str.indexOf(substring) !== -1;
}

console.log(containsSubstring("GeeksForGeeks", "For"));
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Traditional approach
- Also returns position if needed
- Works in all JS environments

---

### Interview Answers

> "I check if a string contains a substring using `includes()` which returns a boolean. Alternatively, `indexOf() !== -1` works the same way. Both run in O(n) time."

---

## Problem 32: Find the First Non-Repeated Character in a String

Input: `'GeeksForGeeks'`
Output: `'F'`

---

### Approach: Two-pass with frequency count

#### Thinking aloud

- First pass: Count frequency of each character.
- Second pass: Find first character with count = 1.
- Return that character or null if none.

#### Code

```js
function firstNonRepeatedChar(str) {
  const charCount = {};

  // First pass: count occurrences
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Second pass: find first with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeated character
}

console.log(firstNonRepeatedChar("GeeksForGeeks"));
```

#### Dry Run

```
str = 'GeeksForGeeks'

First pass - count:
G:2, e:4, k:2, s:2, F:1, o:1, r:1

Second pass:
G → count 2 → skip
e → count 4 → skip
e → count 4 → skip
k → count 2 → skip
s → count 2 → skip
F → count 1 → return 'F'
```

#### Complexity

- Time: **O(n)**
- Space: **O(k)** where k is character set size

#### Interview Notes

- Classic interview question
- Map/object stores frequency
- Two passes needed (can't find in one pass)

---

### Interview Answers

> "I find the first non-repeated character by first counting frequencies of all characters in one pass, then in a second pass, I return the first character whose count is 1. This runs in O(n) time with O(k) space where k is the character set size."

---

## Problem 33: Find the Longest Word in a String

Input: `'GeeksForGeeks is great'`
Output: `'GeeksForGeeks'`

---

### Approach: Split and iterate

#### Thinking aloud

- Split string into words array using space.
- Initialize `longest` as empty string.
- Iterate through words.
- If current word length > longest length, update.
- Return longest.

#### Code

```js
function longestWord(str) {
  const words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("GeeksForGeeks is great"));
```

#### Dry Run

```
str = 'GeeksForGeeks is great'
words = ['GeeksForGeeks', 'is', 'great']
longest = ''

word='GeeksForGeeks' → length 13 > 0 → longest='GeeksForGeeks'
word='is' → length 2 > 13? false
word='great' → length 5 > 13? false
return 'GeeksForGeeks'
```

#### Complexity

- Time: **O(n)** where n is string length
- Space: **O(m)** where m is number of words

#### Interview Notes

- If multiple words same length, returns first
- Can handle punctuation by regex cleaning
- Edge case: empty string returns ''

---

### Interview Answers

> "I find the longest word by splitting the string into words, then iterating to track the word with maximum length. This runs in O(n) time. If there are multiple longest words, I return the first one encountered."

---

## Problem 34: Capitalize the First Letter of Each Word in a Sentence

Input: `'hello geeks'`
Output: `'Hello Geeks'`

---

### Approach: Split, capitalize, join

#### Thinking aloud

- Split sentence into words array.
- For each word:
  - Capitalize first character: `charAt(0).toUpperCase()`
  - Add remaining part: `slice(1)`
- Join words back with spaces.

#### Code

```js
function capitalizeFirstLetter(sentence) {
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

console.log(capitalizeFirstLetter("hello geeks"));
```

#### Dry Run

```
sentence = 'hello geeks'
words = ['hello', 'geeks']

i=0: 'hello' → 'H' + 'ello' = 'Hello'
i=1: 'geeks' → 'G' + 'eeks' = 'Geeks'

join → 'Hello Geeks'
```

#### Complexity

- Time: **O(n)** where n is string length
- Space: **O(n)** for new string

#### Interview Notes

- Handles multiple spaces? Current approach assumes single spaces
- Can use `map()` for functional style
- Edge case: empty words? need to check

---

### Functional alternative:

```js
function capitalizeFirstLetter(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
```

---

### Interview Answers

> "I capitalize each word by splitting the sentence, capitalizing the first character of each word using `toUpperCase()`, and joining them back. This runs in O(n) time. I can implement it with a loop or using `map()` for a more functional approach."

---

## Problem 35: Convert an Array of Strings to Uppercase

Input: `['g', 'f', 'g']`
Output: `['G', 'F', 'G']`

---

### Approach 1: Using for loop

#### Thinking aloud

- Create new empty array.
- Iterate through original array.
- Convert each element to uppercase using `toUpperCase()`.
- Store in new array.

#### Code

```js
function toUpperCaseArray(arr) {
  const upperCaseArray = [];

  for (let i = 0; i < arr.length; i++) {
    upperCaseArray[i] = arr[i].toUpperCase();
  }

  return upperCaseArray;
}

console.log(toUpperCaseArray(["g", "f", "g"]));
```

#### Dry Run

```
arr = ['g', 'f', 'g']
i=0: 'g' → 'G'
i=1: 'f' → 'F'
i=2: 'g' → 'G'
return ['G', 'F', 'G']
```

#### Complexity

- Time: **O(n × k)** where k is average string length
- Space: **O(n × k)**

---

### Approach 2: Using map()

#### Thinking aloud

- `map()` creates new array by applying function to each element.
- Cleaner and more functional.

#### Code

```js
function toUpperCaseArray(arr) {
  return arr.map((str) => str.toUpperCase());
}

console.log(toUpperCaseArray(["g", "f", "g"]));
```

#### Complexity

- Time: **O(n × k)**
- Space: **O(n × k)**

#### Interview Notes

- `map()` is preferred in modern JS
- Original array unchanged
- Works for strings only

---

### Interview Answers

> "I convert an array of strings to uppercase by using `map()` with `toUpperCase()`. This creates a new array without modifying the original. Time complexity is O(n×k) where k is the average string length."

---

## Problem 36: Write a Program to reverse an array in JavaScript

Input: `[5, 6, 7, 8]`
Output: `[8, 7, 6, 5]`

---

### Approach 1: Using reverse() method

#### Thinking aloud

- `reverse()` method reverses array **in place**.
- It modifies the original array.

#### Code

```js
function reverseArray(arr) {
  return arr.reverse();
}

console.log(reverseArray([5, 6, 7, 8]));
```

#### Dry Run

```
[5, 6, 7, 8] → reverse() → [8, 7, 6, 5]
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)** (in-place)

#### Interview Notes

- Simplest approach
- Mutates original array
- If immutability needed, create copy first: `[...arr].reverse()`

---

### Approach 2: Manual reversal (two-pointer)

#### Thinking aloud

- Use two pointers: left (start) and right (end).
- Swap elements at left and right.
- Move pointers toward center.
- Continue until left >= right.

#### Code

```js
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

console.log(reverseArray([5, 6, 7, 8]));
```

#### Dry Run

```
arr = [5, 6, 7, 8], left=0, right=3
swap 5 and 8 → [8, 6, 7, 5], left=1, right=2
swap 6 and 7 → [8, 7, 6, 5], left=2, right=1 → stop
return [8, 7, 6, 5]
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Shows understanding of in-place reversal
- Uses destructuring for swap (ES6)
- Interviewers often ask for manual implementation

---

### Approach 3: Using new array (backward loop)

#### Thinking aloud

- Create new empty array.
- Loop from last index to first.
- Push each element to new array.

#### Code

```js
function reverseArray(arr) {
  const reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

console.log(reverseArray([5, 6, 7, 8]));
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Does not mutate original
- Simple to understand
- Extra space used

---

### Interview Answers

> "I can reverse an array using the built-in `reverse()` method, which modifies the array in place. If I need to implement it manually, I use a two-pointer approach swapping elements from both ends. Both approaches run in O(n) time."

---

## Problem 37: Get the last element of an array in JavaScript

Input: `[6, 2, 9, 5]`
Output: `5`

---

### Approach 1: Using length property

#### Thinking aloud

- Last element index = `array.length - 1`
- Access directly using bracket notation.

#### Code

```js
function lastElement(arr) {
  return arr[arr.length - 1];
}

console.log(lastElement([6, 2, 9, 5]));
```

#### Dry Run

```
arr = [6, 2, 9, 5]
arr.length = 4
arr[3] = 5
return 5
```

#### Complexity

- Time: **O(1)**
- Space: **O(1)**

#### Interview Notes

- Most efficient approach
- Edge case: empty array returns `undefined`
- Always works

---

### Approach 2: Using slice() or pop()

```js
// Using slice() - returns new array
function lastElement(arr) {
  return arr.slice(-1)[0];
}

// Using pop() - modifies array
function lastElement(arr) {
  return arr.pop(); // Don't use if array shouldn't be modified
}
```

#### Interview Notes

- `slice(-1)` is safe but creates new array
- `pop()` modifies original (use with caution)

---

### Interview Answers

> "I get the last element of an array using bracket notation with `arr[arr.length - 1]`. This gives O(1) time and space. For empty arrays, this returns undefined."

---

## Problem 38: Remove falsy Values from an array in JavaScript

Input: `[0, 5, false, 6, '', 7]`
Output: `[5, 6, 7]`

---

### Approach 1: Using filter() with Boolean

#### Thinking aloud

- Falsy values in JS: `false`, `0`, `""`, `null`, `undefined`, `NaN`
- `Boolean()` constructor returns `false` for falsy values.
- `filter(Boolean)` keeps only truthy values.

#### Code

```js
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsyValues([0, 5, false, 6, "", 7]));
```

#### Dry Run

```
arr = [0, 5, false, 6, '', 7]
filter:
0 → falsy → exclude
5 → truthy → include
false → falsy → exclude
6 → truthy → include
'' → falsy → exclude
7 → truthy → include
return [5, 6, 7]
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Clean one-liner
- `Boolean` is a function, `filter(Boolean)` works
- Most elegant solution

---

### Approach 2: Manual loop

#### Thinking aloud

- Create empty result array.
- Iterate through original array.
- If element is truthy, add to result.
- Return result.

#### Code

```js
function removeFalsyValues(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeFalsyValues([0, 5, false, 6, "", 7]));
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Shows understanding of truthy/falsy concept
- Manual approach for interview discussion

---

### Interview Answers

> "I remove falsy values using `filter(Boolean)`, which keeps only truthy elements. Falsy values in JavaScript are false, 0, empty string, null, undefined, and NaN. This runs in O(n) time."

---

## Problem 39: Calculate the factorial of a number using recursion

Input: `4`
Output: `24`

---

### Approach: Recursive

#### Thinking aloud

- Base case: if n is 0 or 1, factorial is 1.
- Recursive case: `n! = n × (n-1)!`
- Function calls itself with smaller value.

#### Code

```js
function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(4));
```

#### Dry Run

```
factorial(4)
→ 4 * factorial(3)
→ 4 * (3 * factorial(2))
→ 4 * (3 * (2 * factorial(1)))
→ 4 * (3 * (2 * 1))
→ 4 * (3 * 2)
→ 4 * 6
→ 24
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)** (call stack)

#### Interview Notes

- Classic recursion example
- Shows understanding of base case
- Risk: stack overflow for large n
- Iterative solution is more space-efficient

---

### Iterative alternative:

```js
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

---

### Interview Answers

> "I calculate factorial recursively with base case n=0 or n=1 returning 1, and recursive case n \* factorial(n-1). Time complexity is O(n) but space is also O(n) due to call stack. For large numbers, an iterative approach is better to avoid stack overflow."

---

## Problem 40: Create an object and print the property

Input: `{ name: "GFG", age: 25 }`, property `name`
Output: `"GFG"`

---

### Approach: Object literal and dot notation

#### Thinking aloud

- Create object using curly braces.
- Add properties with key-value pairs.
- Access property using dot notation or bracket notation.

#### Code

```js
// Create object
let person = {
  name: "GFG",
  age: 25,
};

// Print property using dot notation
console.log(person.name);
```

#### Dry Run

```
person = { name: "GFG", age: 25 }
person.name → "GFG"
```

#### Complexity

- Time: **O(1)**
- Space: **O(1)**

#### Interview Notes

- Dot notation is simpler for known property names
- Bracket notation: `person['name']` for dynamic keys
- Objects are fundamental in JavaScript

---

### Interview Answers

> "I create an object using object literal syntax `{}` with key-value pairs. Properties can be accessed using dot notation `obj.property` or bracket notation `obj['property']`. Both are O(1) operations."

---

## Problem 41: Use the map function on an array in JavaScript

Input: `[5, 6, 7]`, multiply by 2
Output: `[10, 12, 14]`

---

### Approach: Using map()

#### Thinking aloud

- `map()` creates new array by applying function to each element.
- Function takes current element, returns transformed value.
- Original array unchanged.

#### Code

```js
let numbers = [5, 6, 7];

let ans = numbers.map(function (num) {
  return num * 2;
});

console.log(ans);
```

#### Dry Run

```
numbers = [5, 6, 7]
map:
5 → 5 * 2 = 10
6 → 6 * 2 = 12
7 → 7 * 2 = 14
return [10, 12, 14]
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Pure function - no side effects
- Can use arrow function: `numbers.map(num => num * 2)`
- Common for data transformation

---

### Interview Answers

> "I use `map()` to transform each element of an array. It takes a callback function, applies it to every element, and returns a new array. Time complexity is O(n). The original array remains unchanged."

---

## Problem 42: Write a Program to create a simple class in JavaScript

Input: Create `Animals` class with `speak()` method
Output: `"Dog makes a noise"`

---

### Approach: ES6 class syntax

#### Thinking aloud

- Use `class` keyword to define class.
- `constructor` method initializes properties.
- Define methods inside class (no `function` keyword needed).
- Create instance using `new` keyword.

#### Code

```js
class Animals {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

let dog = new Animals("Dog");
dog.speak();
```

#### Dry Run

```
Create class Animals
dog = new Animals("Dog") → dog.name = "Dog"
dog.speak() → console.log("Dog makes a noise")
```

#### Complexity

- Time: **O(1)** for instantiation and method call
- Space: **O(1)** per instance

#### Interview Notes

- ES6 class syntax is syntactic sugar over prototypes
- Methods are shared across instances (prototype chain)
- Can use `extends` for inheritance

---

### Interview Answers

> "I create classes using the ES6 `class` keyword with a `constructor` for initialization and methods defined inside. Instances are created with `new`. Classes provide a clean way to implement object-oriented programming in JavaScript."

---

## Problem 43: Use JSON to parse and stringify data in JavaScript

Input: `'{"name": "Geeks"}'`
Output: `"Geeks"`

---

### Approach: JSON.parse() and JSON.stringify()

#### Thinking aloud

- `JSON.parse()` converts JSON string to JavaScript object.
- `JSON.stringify()` converts object to JSON string.
- Useful for data storage and API communication.

#### Code

```js
let jsonData = '{"name": "Geeks"}';
let parsedData = JSON.parse(jsonData);
console.log(parsedData.name);
```

#### Dry Run

```
jsonData = '{"name": "Geeks"}'
JSON.parse() → { name: "Geeks" }
parsedData.name → "Geeks"
```

#### Complexity

- Time: **O(n)** where n is string length
- Space: **O(n)**

#### Interview Notes

- JSON is language-independent data format
- Keys must be in double quotes
- Cannot have functions or undefined values

---

### Stringify example:

```js
let obj = { name: "Geeks", age: 25 };
let jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Geeks","age":25}'
```

---

### Interview Answers

> "I use `JSON.parse()` to convert a JSON string to a JavaScript object, and `JSON.stringify()` to convert an object to a JSON string. This is essential for working with APIs and storing data. Time complexity is O(n) where n is the string length."

---

## Problem 44: Convert a string to an array of words in JavaScript

Input: `"Geeks For Geeks"`
Output: `['Geeks', 'For', 'Geeks']`

---

### Approach: Using split() method

#### Thinking aloud

- `split()` divides string into array based on separator.
- Use space `' '` as separator to split by words.
- Returns array of words.

#### Code

```js
let sentence = "Geeks For Geeks";
let wordsArray = sentence.split(" ");
console.log(wordsArray);
```

#### Dry Run

```
sentence = "Geeks For Geeks"
split(" ") → ["Geeks", "For", "Geeks"]
```

#### Complexity

- Time: **O(n)** where n is string length
- Space: **O(m)** where m is number of words

#### Interview Notes

- Handles single spaces only
- For multiple spaces: `split(/\s+/)` using regex
- Can split by other delimiters (comma, etc.)

---

### Advanced: Handle multiple spaces

```js
let wordsArray = sentence.split(/\s+/); // Regex for one or more spaces
```

---

### Interview Answers

> "I convert a string to an array of words using `split(' ')` with space as the delimiter. This runs in O(n) time. For handling multiple spaces, I use the regex `split(/\s+/)`."

---

## Problem 45: Write a switch statement code in JavaScript

Input: `course = "javascript"`
Output: `"This is a javascript course"`

---

### Approach: switch statement

#### Thinking aloud

- `switch` evaluates an expression.
- Matches value against cases.
- Executes code for matching case.
- `break` prevents fall-through to next case.
- `default` runs if no match found.

#### Code

```js
let course = "javascript";

switch (course) {
  case "javascript":
    console.log("This is a javascript course");
    break;
  case "python":
    console.log("This is a python course");
    break;
  default:
    console.log("Not a javascript course");
}
```

#### Dry Run

```
course = "javascript"
match "javascript" case → print message → break → exit
```

#### Complexity

- Time: **O(1)** average
- Space: **O(1)**

#### Interview Notes

- Alternative to multiple if-else statements
- Forgets `break` causes fall-through (can be intentional)
- Can group cases: `case "js": case "javascript":`

---

### Interview Answers

> "I use a switch statement for multiple conditional branches. It evaluates an expression and matches against cases. Each case should end with `break` to prevent fall-through, and `default` handles unmatched values."

---

## Problem 46: Check if Two Strings are Anagrams

Input: `"listen"`, `"silent"`
Output: `true`

---

### Approach 1: Character count comparison

#### Thinking aloud

- Anagrams have same characters with same frequencies.
- If lengths differ → not anagrams.
- Count frequency of each character in first string.
- Decrement count for each character in second string.
- If all counts become zero → anagrams.

#### Code

```js
function areAnagrams(str1, str2) {
  // Different lengths can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  let count = {};

  // Count characters in first string
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    count[char] = (count[char] || 0) + 1;
  }

  // Decrement for second string
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!count[char]) {
      return false; // Character not in first string
    }
    count[char]--;
  }

  return true;
}

console.log(areAnagrams("listen", "silent"));
```

#### Dry Run

```
str1 = "listen", str2 = "silent"

First pass - count:
l:1, i:1, s:1, t:1, e:1, n:1

Second pass - decrement:
s:1→0, i:1→0, l:1→0, e:1→0, n:1→0, t:1→0
All zeros → return true
```

#### Complexity

- Time: **O(n)**
- Space: **O(k)** where k is character set size

---

### Approach 2: Sort and compare

#### Thinking aloud

- Sort both strings alphabetically.
- If sorted strings are equal → anagrams.
- Simpler but less efficient.

#### Code

```js
function areAnagrams(str1, str2) {
  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");
  return sorted1 === sorted2;
}

console.log(areAnagrams("listen", "silent"));
```

#### Complexity

- Time: **O(n log n)** due to sorting
- Space: **O(n)**

#### Interview Notes

- Sort approach is simpler but slower
- Count approach is optimal O(n)
- Consider case sensitivity? Convert to lowercase first

---

### Interview Answers

> "I check if two strings are anagrams by comparing character frequencies. If lengths differ, they're not anagrams. I count characters from first string, then decrement for second. If all counts reach zero, they're anagrams. This runs in O(n) time. A simpler but slower alternative is sorting both strings and comparing."

---

## Problem 47: Find the maximum difference between two numbers in an array

Input: `[1, 2, 90, 10, 110]`
Output: `109` (110 - 1)

---

### Approach: Track minimum so far

#### Thinking aloud

- Maximum difference occurs between smallest and largest element where larger comes after smaller.
- Track minimum value seen so far.
- For each element, calculate difference with current minimum.
- Update maximum difference if current difference is larger.
- Also update minimum if current element is smaller.

#### Code

```js
function maxDifference(arr) {
  if (arr.length < 2) return 0;

  let min = arr[0];
  let maxDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    // Calculate difference with current minimum
    const diff = arr[i] - min;

    // Update maximum difference
    maxDiff = Math.max(maxDiff, diff);

    // Update minimum if current element is smaller
    min = Math.min(min, arr[i]);
  }

  return maxDiff;
}

console.log(maxDifference([1, 2, 90, 10, 110]));
```

#### Dry Run

```
arr = [1, 2, 90, 10, 110]
min = 1, maxDiff = 0

i=1: arr[1]=2 → diff=2-1=1 → maxDiff=max(0,1)=1, min=min(1,2)=1
i=2: arr[2]=90 → diff=90-1=89 → maxDiff=max(1,89)=89, min=min(1,90)=1
i=3: arr[3]=10 → diff=10-1=9 → maxDiff=max(89,9)=89, min=min(1,10)=1
i=4: arr[4]=110 → diff=110-1=109 → maxDiff=max(89,109)=109, min=min(1,110)=1

return 109
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Classic "stock market" problem (max profit)
- Important: larger element must come after smaller
- Handles edge cases: empty or single-element array returns 0

---

### Interview Answers

> "I find the maximum difference by tracking the minimum value seen so far and calculating the difference with each subsequent element. This ensures the larger element always comes after the smaller one. Time complexity is O(n) with O(1) space."

---

## Problem 48: Remove Duplicates from an Array

Input: `[5, 2, 5, 6, 6, 7]`
Output: `[5, 2, 6, 7]`

---

### Approach 1: Using Set

#### Thinking aloud

- `Set` stores only unique values.
- Convert array to Set, then back to array.
- Simplest and most efficient.

#### Code

```js
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([5, 2, 5, 6, 6, 7]));
```

#### Dry Run

```
arr = [5, 2, 5, 6, 6, 7]
Set = {5, 2, 6, 7}
spread → [5, 2, 6, 7]
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Clean one-liner
- Preserves insertion order
- Most recommended approach

---

### Approach 2: Manual loop with indexOf/includes

#### Thinking aloud

- Create empty result array.
- Iterate through original array.
- If element not in result, add it.
- Return result.

#### Code

```js
function removeDuplicates(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

console.log(removeDuplicates([5, 2, 5, 6, 6, 7]));
```

#### Dry Run

```
arr = [5, 2, 5, 6, 6, 7]
uniqueArray = []
i=0: 5 not in [] → push 5 → [5]
i=1: 2 not in [5] → push 2 → [5, 2]
i=2: 5 in [5,2] → skip
i=3: 6 not in [5,2] → push 6 → [5,2,6]
i=4: 6 in [5,2,6] → skip
i=5: 7 not in [5,2,6] → push 7 → [5,2,6,7]
```

#### Complexity

- Time: **O(n²)** because `includes()` is O(n)
- Space: **O(n)**

#### Interview Notes

- Shows understanding of manual process
- Inefficient for large arrays
- Can optimize with object for O(1) lookup

---

### Approach 3: Using filter with indexOf

```js
function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}
```

- Time: **O(n²)** (indexOf inside filter)
- Space: **O(n)**

---

### Interview Answers

> "I remove duplicates using a Set, which automatically stores unique values. Converting back to array with spread operator gives O(n) time. For a manual approach, I can use a loop with includes() but that's O(n²). The Set approach is most efficient."

---

## Problem 49: Count Vowels in a String

Input: `"hello geek"`
Output: `4` (e, o, e, e)

---

### Approach: Loop with vowel check

#### Thinking aloud

- Vowels: a, e, i, o, u (both cases).
- Initialize count = 0.
- Loop through each character.
- If character is vowel, increment count.
- Return count.

#### Code

```js
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello geek"));
```

#### Dry Run

```
str = "hello geek"
vowels = "aeiouAEIOU"

h → not vowel
e → vowel → count=1
l → not vowel
l → not vowel
o → vowel → count=2
space → not vowel
g → not vowel
e → vowel → count=3
e → vowel → count=4
k → not vowel

return 4
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Case-sensitive? Include both cases
- Can use regex: `str.match(/[aeiou]/gi)?.length || 0`
- Handle empty string returns 0

---

### Regex alternative:

```js
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
```

---

### Interview Answers

> "I count vowels by iterating through the string and checking if each character is in a vowels string containing both uppercase and lowercase vowels. This runs in O(n) time. Alternatively, I can use regex with `match()` for a concise solution."

---

## Problem 50: Get Unique Characters from a String

Input: `"geeksforgeeks"`
Output: `"geksfor"`

---

### Approach 1: Using Set

#### Thinking aloud

- Set stores unique characters.
- Convert string to array of characters, then to Set.
- Join back to string.

#### Code

```js
function uniqueCharacters(str) {
  return [...new Set(str)].join("");
}

console.log(uniqueCharacters("geeksforgeeks"));
```

#### Dry Run

```
str = "geeksforgeeks"
Set from string → {'g','e','k','s','f','o','r'}
spread and join → "geksfor"
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Preserves order of first occurrence
- Clean one-liner
- Most efficient approach

---

### Approach 2: Manual loop with object

#### Thinking aloud

- Create empty result array and seen object.
- Iterate through characters.
- If character not seen before, add to result and mark seen.
- Join result at end.

#### Code

```js
function uniqueCharacters(str) {
  const seen = {};
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!seen[char]) {
      seen[char] = true;
      result.push(char);
    }
  }

  return result.join("");
}

console.log(uniqueCharacters("geeksforgeeks"));
```

#### Dry Run

```
str = "geeksforgeeks"
seen = {}, result = []

g: seen[g]? false → seen[g]=true, result=['g']
e: seen[e]? false → seen[e]=true, result=['g','e']
e: seen[e]? true → skip
k: seen[k]? false → seen[k]=true, result=['g','e','k']
s: seen[s]? false → seen[s]=true, result=['g','e','k','s']
f: seen[f]? false → seen[f]=true, result=['g','e','k','s','f']
o: seen[o]? false → seen[o]=true, result=['g','e','k','s','f','o']
r: seen[r]? false → seen[r]=true, result=['g','e','k','s','f','o','r']
g: seen[g]? true → skip
e: seen[e]? true → skip
e: seen[e]? true → skip
k: seen[k]? true → skip
s: seen[s]? true → skip

join → "geksfor"
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Shows understanding of hash map concept
- Object for O(1) lookup
- Manual approach good for interviews

---

### Interview Answers

> "I get unique characters from a string using a Set, which automatically stores only unique values. Converting to array and joining gives the result in O(n) time. For a manual approach, I use an object to track seen characters and build the result array."

---

I understand! You want me to create JavaScript coding questions **in the same format** as your original 50 questions document, but **only new questions** that are NOT already covered in that document.

Let me analyze what's already covered in your original 50 questions:

**Already Covered Topics:**

- String reversal, palindrome, anagrams
- Array sum, largest/min, merge, intersection, union, remove duplicates
- Object property add/delete, frequency counting
- Type coercion, equality operators
- Factorial, Fibonacci, prime, power, temperature conversion
- Sorting (ascending/descending)
- Callback functions, arrow functions
- Map, filter, reduce
- Class creation, JSON methods
- Switch statements
- Even/odd check
- String contains, first non-repeated char, longest word, capitalize words
- Array to uppercase, reverse array, last element, remove falsy
- Recursion (factorial)
- Count vowels, unique characters
- And many more...

Now I'll create **new questions** in the same format:

---

## Problem 51: Find the Second Largest Number in an Array

Input: `[10, 5, 8, 12, 3]`
Output: `10`

---

### Approach 1: Single pass with two variables

#### Thinking aloud

- Track both largest and second largest in one pass.
- Initialize both as -Infinity (or first element with careful handling).
- For each element:
  - If current > largest → update secondLargest = largest, largest = current
  - Else if current > secondLargest and current != largest → update secondLargest
- Handle edge cases: array length < 2 returns null.

#### Code

```js
function findSecondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

// Example usage
console.log(findSecondLargest([10, 5, 8, 12, 3])); // 10
```

#### Dry Run

```
arr = [10, 5, 8, 12, 3]
largest = -Infinity, second = -Infinity

i=0: 10 > -Infinity → second = -Infinity, largest = 10
i=1: 5 > 10? false, 5 > -Infinity? true → second = 5
i=2: 8 > 10? false, 8 > 5? true → second = 8
i=3: 12 > 10? true → second = 10, largest = 12
i=4: 3 > 12? false, 3 > 10? false

return 10
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Edge case: all elements same → returns null
- Single pass is optimal
- Can also sort and pick second last, but that's O(n log n)

---

## Problem 52: Implement a Queue Using Two Stacks

Input: Enqueue 1, 2, 3 → Dequeue → Output: 1

---

### Approach: Two stacks for FIFO behavior

#### Thinking aloud

- Queue is FIFO, stack is LIFO.
- Use two stacks: `inbox` for enqueue, `outbox` for dequeue.
- On dequeue:
  - If outbox empty, pop all from inbox and push to outbox (reverses order).
  - Pop from outbox.

#### Code

```js
class QueueUsingStacks {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }

  enqueue(item) {
    this.inbox.push(item);
  }

  dequeue() {
    if (this.outbox.length === 0) {
      // Transfer all elements from inbox to outbox (reverses order)
      while (this.inbox.length > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }

    if (this.outbox.length === 0) {
      return null; // Queue is empty
    }

    return this.outbox.pop();
  }

  isEmpty() {
    return this.inbox.length === 0 && this.outbox.length === 0;
  }

  size() {
    return this.inbox.length + this.outbox.length;
  }
}

// Example usage
const queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
queue.enqueue(4);
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // 4
```

#### Dry Run

```
enqueue(1): inbox=[1], outbox=[]
enqueue(2): inbox=[1,2], outbox=[]
enqueue(3): inbox=[1,2,3], outbox=[]

dequeue(): outbox empty → transfer:
  pop inbox 3 → outbox=[3]
  pop inbox 2 → outbox=[3,2]
  pop inbox 1 → outbox=[3,2,1]
  pop outbox → return 1

dequeue(): outbox=[3,2] → pop outbox → return 2

enqueue(4): inbox=[4], outbox=[3]

dequeue(): outbox=[3] → pop outbox → return 3

dequeue(): outbox empty → transfer inbox 4 → outbox=[4] → pop → return 4
```

#### Complexity

- Enqueue: **O(1)**
- Dequeue: Amortized **O(1)** (each element moved at most once)
- Space: **O(n)**

#### Interview Notes

- Classic interview question
- Demonstrates understanding of data structures
- Amortized analysis important to mention

---

## Problem 53: Find the Missing Number in an Array of 1 to N

Input: `[1, 2, 4, 5, 6]` (N=6)
Output: `3`

---

### Approach 1: Sum formula

#### Thinking aloud

- Array contains numbers from 1 to N with one missing.
- Sum of 1 to N = N \* (N+1) / 2
- Sum of given array = actual sum
- Missing number = expected sum - actual sum

#### Code

```js
function findMissingNumber(arr, n) {
  // Expected sum of 1 to n
  const expectedSum = (n * (n + 1)) / 2;

  // Actual sum of array
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

// Example usage
console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3
```

#### Dry Run

```
arr = [1,2,4,5,6], n=6
expectedSum = 6*7/2 = 21
actualSum = 1+2+4+5+6 = 18
missing = 21-18 = 3
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Simple mathematical approach
- Works only if exactly one number missing
- For large n, watch for integer overflow

---

### Approach 2: XOR method

#### Thinking aloud

- XOR of a number with itself is 0.
- XOR all numbers 1 to N with all array elements.
- Result is the missing number.

#### Code

```js
function findMissingNumberXOR(arr, n) {
  let xor1 = 0;
  let xor2 = 0;

  // XOR all numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    xor1 ^= i;
  }

  // XOR all array elements
  for (let i = 0; i < arr.length; i++) {
    xor2 ^= arr[i];
  }

  return xor1 ^ xor2;
}

console.log(findMissingNumberXOR([1, 2, 4, 5, 6], 6)); // 3
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- XOR approach avoids overflow issues
- Works with any range of numbers
- Good to mention both approaches

---

## Problem 54: Flatten a Nested Object

Input: `{ a: 1, b: { c: 2, d: { e: 3 } } }`
Output: `{ 'a': 1, 'b.c': 2, 'b.d.e': 3 }`

---

### Approach: Recursive traversal

#### Thinking aloud

- Create empty result object.
- Recursively traverse input object.
- Keep track of current path as key prefix.
- If value is object, recurse with updated path.
- If value is primitive, add to result with full path.

#### Code

```js
function flattenObject(obj, prefix = "", result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        // Recursively flatten nested object
        flattenObject(obj[key], newKey, result);
      } else {
        // Add primitive value or array to result
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

// Example usage
const nested = { a: 1, b: { c: 2, d: { e: 3 } } };
console.log(flattenObject(nested));
// Output: { 'a': 1, 'b.c': 2, 'b.d.e': 3 }
```

#### Dry Run

```
obj = { a: 1, b: { c: 2, d: { e: 3 } } }, prefix='', result={}

key='a': newKey='a', value=1 → result['a']=1
key='b': newKey='b', value={c:2,d:{e:3}} → recurse flattenObject({c:2,d:{e:3}}, 'b')

  key='c': newKey='b.c', value=2 → result['b.c']=2
  key='d': newKey='b.d', value={e:3} → recurse flattenObject({e:3}, 'b.d')

    key='e': newKey='b.d.e', value=3 → result['b.d.e']=3

return result
```

#### Complexity

- Time: **O(n)** where n is number of properties
- Space: **O(n)** for result object

#### Interview Notes

- Common in data transformation tasks
- Handle arrays specially if needed
- Can also implement iteratively with stack

---

## Problem 55: Implement a Simple Pub/Sub Pattern

Input: Subscribe to 'event1' with callback, publish 'event1' with data
Output: Callback executes with data

---

### Approach: Event emitter pattern

#### Thinking aloud

- Create an object to store events and their subscribers.
- Each event maps to an array of callback functions.
- `subscribe` adds callback to event's array.
- `publish` iterates through callbacks and executes with data.
- `unsubscribe` removes specific callback.

#### Code

```js
class PubSub {
  constructor() {
    this.events = {};
  }

  // Subscribe to an event
  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback);

    // Return unsubscribe function
    return () => {
      this.events[event] = this.events[event].filter((cb) => cb !== callback);
    };
  }

  // Publish to an event with data
  publish(event, data) {
    if (!this.events[event]) {
      return; // No subscribers
    }

    this.events[event].forEach((callback) => {
      callback(data);
    });
  }

  // Remove all subscribers for an event
  clear(event) {
    if (event) {
      delete this.events[event];
    } else {
      this.events = {};
    }
  }
}

// Example usage
const pubsub = new PubSub();

const unsubscribe = pubsub.subscribe("userLoggedIn", (data) => {
  console.log(`User logged in: ${data.name}`);
});

pubsub.subscribe("userLoggedIn", (data) => {
  console.log(`Send welcome email to ${data.email}`);
});

pubsub.publish("userLoggedIn", { name: "John", email: "john@example.com" });
// Output:
// User logged in: John
// Send welcome email to john@example.com

// Unsubscribe first callback
unsubscribe();
pubsub.publish("userLoggedIn", { name: "Jane", email: "jane@example.com" });
// Output only second callback
```

#### Complexity

- Subscribe: **O(1)**
- Publish: **O(m)** where m is number of subscribers
- Unsubscribe: **O(m)**

#### Interview Notes

- Core pattern in many frameworks
- Great for decoupling components
- Can add once() method for one-time subscription

---

## Problem 56: Group Array of Objects by Property

Input:

```js
[
  { name: "John", dept: "Engineering" },
  { name: "Jane", dept: "Marketing" },
  { name: "Bob", dept: "Engineering" },
];
```

Output:

```js
{
  Engineering: [
    { name: 'John', dept: 'Engineering' },
    { name: 'Bob', dept: 'Engineering' }
  ],
  Marketing: [
    { name: 'Jane', dept: 'Marketing' }
  ]
}
```

---

### Approach: Reduce method

#### Thinking aloud

- Use `reduce()` to build grouped object.
- For each item, get the grouping key value.
- If key not in result, create empty array.
- Push current item to that array.

#### Code

```js
function groupBy(arr, property) {
  return arr.reduce((result, item) => {
    const key = item[property];

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
    return result;
  }, {});
}

// Example usage
const employees = [
  { name: "John", dept: "Engineering" },
  { name: "Jane", dept: "Marketing" },
  { name: "Bob", dept: "Engineering" },
];

console.log(groupBy(employees, "dept"));
```

#### Dry Run

```
arr = [emp1, emp2, emp3], property='dept'
result = {}

emp1: key='Engineering', result['Engineering']=[] → push emp1
emp2: key='Marketing', result['Marketing']=[] → push emp2
emp3: key='Engineering', result['Engineering'] exists → push emp3

return result
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Very common data transformation
- Can group by nested property with dot notation support
- Alternative: use Map for non-string keys

---

## Problem 57: Deep Clone an Object (Handling Circular References)

Input: Object with nested properties and circular reference
Output: Complete independent copy

---

### Approach: WeakMap to track visited objects

#### Thinking aloud

- Simple JSON methods fail for circular references.
- Use recursion with a WeakMap to track already cloned objects.
- If object already cloned, return the clone reference.
- Handle arrays and objects separately.

#### Code

```js
function deepClone(obj, hash = new WeakMap()) {
  // Handle null or non-objects
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // Handle RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // If already cloned, return the clone
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  // Create clone based on constructor
  const clone = Array.isArray(obj) ? [] : {};

  // Store in hash before recursive cloning
  hash.set(obj, clone);

  // Copy all properties recursively
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], hash);
    }
  }

  return clone;
}

// Example with circular reference
const original = {
  name: "John",
  address: {
    city: "NYC",
  },
};
original.self = original; // Circular reference

const cloned = deepClone(original);
console.log(cloned.name); // 'John'
console.log(cloned.address.city); // 'NYC'
console.log(cloned.self === cloned); // true (circular preserved)
console.log(cloned === original); // false (different object)
```

#### Complexity

- Time: **O(n)** where n is number of properties
- Space: **O(n)** for clone + WeakMap

#### Interview Notes

- Shows deep understanding of references
- WeakMap prevents memory leaks
- Must handle special objects (Date, RegExp, Map, Set)

---

## Problem 58: Implement a Function to Check Balanced Parentheses

Input: `"({[]})"`
Output: `true`

Input: `"({[})"`
Output: `false`

---

### Approach: Stack data structure

#### Thinking aloud

- Use stack to track opening brackets.
- For each character:
  - If opening bracket → push to stack.
  - If closing bracket → check if matches top of stack.
- At end, stack should be empty.

#### Code

```js
function isBalanced(str) {
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If opening bracket, push to stack
    if (pairs[char]) {
      stack.push(char);
    }
    // If closing bracket
    else if (char === ")" || char === "}" || char === "]") {
      const lastOpening = stack.pop();

      // If no matching opening or wrong type
      if (!lastOpening || pairs[lastOpening] !== char) {
        return false;
      }
    }
    // Ignore other characters
  }

  // Stack should be empty if balanced
  return stack.length === 0;
}

// Example usage
console.log(isBalanced("({[]})")); // true
console.log(isBalanced("({[})")); // false
console.log(isBalanced("(hello) {world}")); // true (ignores letters)
```

#### Dry Run for `"({[]})"`

```
char='(' → push '(' → stack=['(']
char='{' → push '{' → stack=['(','{']
char='[' → push '[' → stack=['(','{','[']
char=']' → pop '[' → pairs['[']=']' matches → stack=['(','{']
char='}' → pop '{' → pairs['{']='}' matches → stack=['(']
char=')' → pop '(' → pairs['(']=')' matches → stack=[]
return true
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Classic stack problem
- Can extend to handle different bracket types
- Also useful for XML/HTML tag validation

---

## Problem 59: Find All Pairs in Array That Sum to Target

Input: `[2, 4, 3, 5, 7, 8, 9]`, target `10`
Output: `[[2,8], [3,7], [5,5]]` (if same element can be used twice? Usually distinct indices)

---

### Approach: Using a Set/HashMap

#### Thinking aloud

- Use a Set to track numbers seen.
- For each number, calculate complement = target - num.
- If complement exists in set, found a pair.
- Add current number to set for future matches.
- Handle duplicates carefully.

#### Code

```js
function findPairs(arr, target) {
  const seen = new Set();
  const pairs = [];
  const used = new Set(); // To avoid duplicate pairs like [2,8] and [8,2]

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const complement = target - num;

    // Check if complement exists in seen
    if (seen.has(complement)) {
      // Create pair in sorted order to avoid duplicates
      const pair = [Math.min(num, complement), Math.max(num, complement)];
      const pairKey = pair.join(",");

      if (!used.has(pairKey)) {
        pairs.push(pair);
        used.add(pairKey);
      }
    }

    seen.add(num);
  }

  return pairs;
}

// Example usage
console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10));
// Output: [[2,8], [3,7], [5,5]]
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Efficient single pass solution
- Handle duplicate pairs with sorting or Set
- Can modify to return indices instead of values

---

## Problem 60: Implement a Simple Promise with Retry Logic

Input: Async function that may fail, retry 3 times
Output: Promise that resolves if any attempt succeeds

---

### Approach: Recursive retry with delay

#### Thinking aloud

- Create function that returns a Promise.
- Attempt the async operation.
- If fails and retries left, wait and retry.
- If all retries fail, reject with last error.

#### Code

```js
function withRetry(asyncFn, maxRetries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    function attempt() {
      attempts++;

      asyncFn()
        .then(resolve)
        .catch((error) => {
          console.log(`Attempt ${attempts} failed`);

          if (attempts < maxRetries) {
            console.log(`Retrying in ${delay}ms...`);
            setTimeout(attempt, delay);
          } else {
            reject(
              new Error(
                `Failed after ${maxRetries} attempts: ${error.message}`,
              ),
            );
          }
        });
    }

    attempt();
  });
}

// Example usage
let attemptCount = 0;

function flakyApiCall() {
  return new Promise((resolve, reject) => {
    attemptCount++;
    // Fail first 2 times, succeed on 3rd
    if (attemptCount < 3) {
      reject(new Error("Network error"));
    } else {
      resolve("Success!");
    }
  });
}

withRetry(flakyApiCall, 3, 1000)
  .then((result) => console.log("Result:", result))
  .catch((error) => console.error("Final error:", error));

// Output:
// Attempt 1 failed
// Retrying in 1000ms...
// Attempt 2 failed
// Retrying in 1000ms...
// Result: Success!
```

#### Complexity

- Time: Depends on retries
- Space: **O(1)**

#### Interview Notes

- Essential for handling unreliable APIs
- Can add exponential backoff
- Consider abort signal for cancellation

---

## Problem 61: Convert Roman Numerals to Integer

Input: `"XIV"`
Output: `14`

---

### Approach: Left-to-right with subtraction rule

#### Thinking aloud

- Map Roman symbols to values.
- Traverse string left to right.
- If current value < next value → subtract current.
- Else → add current.
- Add last value.

#### Code

```js
function romanToInt(roman) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = map[roman[i]];
    const next = map[roman[i + 1]];

    if (next && current < next) {
      // Subtraction case (e.g., IV = 4)
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}

// Example usage
console.log(romanToInt("XIV")); // 10 + (1 < 5? subtract) = 10 -1 +5 = 14
console.log(romanToInt("MCMXC")); // 1000 + (100<1000? -100) + (1000<10? +1000) + (10<100? -10) + 100 = 1990
```

#### Dry Run for `"XIV"`

```
i=0: current='X'=10, next='I'=1 → 10<1? false → result=10
i=1: current='I'=1, next='V'=5 → 1<5? true → result=10-1=9
i=2: current='V'=5, next=undefined → result=9+5=14
return 14
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Understand subtraction rule (IV=4, IX=9, XL=40, etc.)
- Input validation for invalid numerals
- Can also implement reverse (integer to Roman)

---

## Problem 62: Implement a Function to Shuffle an Array (Fisher-Yates)

Input: `[1, 2, 3, 4, 5]`
Output: Random permutation e.g., `[3, 1, 5, 2, 4]`

---

### Approach: Fisher-Yates (Knuth) Shuffle

#### Thinking aloud

- Start from last index.
- Pick random index from 0 to current.
- Swap current with random index.
- Move to previous index and repeat.

#### Code

```js
function shuffleArray(arr) {
  // Create a copy to avoid mutating original
  const shuffled = [...arr];

  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

// Example usage
const original = [1, 2, 3, 4, 5];
console.log(shuffleArray(original)); // Random order
console.log(original); // Original unchanged [1,2,3,4,5]
```

#### Dry Run (example random indices)

```
arr = [1,2,3,4,5]

i=4, random j=2 → swap 4 and 3 → [1,2,5,4,3]
i=3, random j=0 → swap 4 and 1 → [4,2,5,1,3]
i=2, random j=2 → swap 5 and 5 → [4,2,5,1,3]
i=1, random j=0 → swap 2 and 4 → [2,4,5,1,3]

return [2,4,5,1,3]
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)** if copying, O(1) if in-place

#### Interview Notes

- Fisher-Yates gives uniform distribution
- Math.random() is not cryptographically secure
- Can modify in-place or return new array

---

## Problem 63: Find the Longest Substring Without Repeating Characters

Input: `"abcabcbb"`
Output: `3` (substring `"abc"`)

---

### Approach: Sliding window with Set

#### Thinking aloud

- Use two pointers (left, right) for window.
- Use Set to track characters in current window.
- Expand right pointer, add character.
- If duplicate found, move left pointer and remove from set.
- Track maximum window size.

#### Code

```js
function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // If duplicate found, shrink window from left
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    // Add current character to set
    charSet.add(s[right]);

    // Update max length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Example usage
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3 ("wke")
```

#### Dry Run for `"abcabcbb"`

```
right=0, 'a' not in set → add 'a', set={'a'}, max=1
right=1, 'b' not in set → add 'b', set={'a','b'}, max=2
right=2, 'c' not in set → add 'c', set={'a','b','c'}, max=3
right=3, 'a' in set → remove 'a', left=1, set={'b','c'}
           add 'a', set={'b','c','a'}, max=3
right=4, 'b' in set → remove 'b', left=2, set={'c','a'}
           add 'b', set={'c','a','b'}, max=3
... continues
return 3
```

#### Complexity

- Time: **O(n)** (each character added/removed once)
- Space: **O(min(n, alphabet size))**

#### Interview Notes

- Classic sliding window problem
- Can use Map to store indices for optimization
- Important for string manipulation interviews

---

## Problem 64: Implement a Simple Rate Limiter

Input: Function calls, limit 5 per minute
Output: Some calls allowed, some blocked

---

### Approach: Token bucket or sliding window

#### Thinking aloud

- Track timestamps of recent calls.
- When new call arrives, remove timestamps older than window.
- If count < limit, allow and add timestamp.
- Else, block.

#### Code

```js
class RateLimiter {
  constructor(limit, windowMs) {
    this.limit = limit; // Max calls per window
    this.windowMs = windowMs; // Window size in milliseconds
    this.timestamps = []; // Queue of call timestamps
  }

  tryCall() {
    const now = Date.now();

    // Remove timestamps outside current window
    this.timestamps = this.timestamps.filter(
      (timestamp) => now - timestamp < this.windowMs,
    );

    // Check if under limit
    if (this.timestamps.length < this.limit) {
      this.timestamps.push(now);
      return { allowed: true, remaining: this.limit - this.timestamps.length };
    } else {
      // Calculate time until next available slot
      const oldest = this.timestamps[0];
      const waitTime = this.windowMs - (now - oldest);
      return {
        allowed: false,
        remaining: 0,
        retryAfter: waitTime,
      };
    }
  }
}

// Example usage
const limiter = new RateLimiter(3, 60000); // 3 calls per minute

console.log(limiter.tryCall()); // { allowed: true, remaining: 2 }
console.log(limiter.tryCall()); // { allowed: true, remaining: 1 }
console.log(limiter.tryCall()); // { allowed: true, remaining: 0 }
console.log(limiter.tryCall()); // { allowed: false, remaining: 0, retryAfter: ... }

// Simulate time passing (in real code, this would be actual time)
```

#### Complexity

- Time: **O(n)** for filtering (can optimize with queue)
- Space: **O(limit)**

#### Interview Notes

- Critical for API rate limiting
- Can implement token bucket for smoother limiting
- Distributed rate limiting needs Redis

---

## Problem 65: Convert Snake Case to Camel Case

Input: `"hello_world_example"`
Output: `"helloWorldExample"`

---

### Approach: Split and transform

#### Thinking aloud

- Split string by underscore.
- First word remains lowercase.
- Subsequent words: capitalize first letter.

#### Code

```js
function snakeToCamel(snakeStr) {
  const words = snakeStr.split("_");

  // First word as is, rest capitalized
  const camelWords = words.map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return camelWords.join("");
}

// Example usage
console.log(snakeToCamel("hello_world_example")); // "helloWorldExample"
console.log(snakeToCamel("user_first_name")); // "userFirstName"
console.log(snakeToCamel("alreadyCamel")); // "alreadyCamel" (no underscores)
```

#### Dry Run for `"hello_world_example"`

```
split('_') → ['hello', 'world', 'example']

index=0: 'hello' → 'hello'
index=1: 'world' → 'W' + 'orld' = 'World'
index=2: 'example' → 'E' + 'xample' = 'Example'

join → 'helloWorldExample'
```

#### Complexity

- Time: **O(n)**
- Space: **O(n)**

#### Interview Notes

- Common in API response transformations
- Handle edge cases: multiple underscores, empty string
- Reverse operation (camel to snake) also common

---

## Problem 66: Find the Majority Element (Appears More Than n/2 Times)

Input: `[3, 2, 3]`
Output: `3`

Input: `[2, 2, 1, 1, 1, 2, 2]`
Output: `2`

---

### Approach 1: Boyer-Moore Voting Algorithm

#### Thinking aloud

- Candidate selection phase: pair different elements and cancel them.
- Verification phase: count occurrences of candidate.
- If count > n/2, candidate is majority.

#### Code

```js
function majorityElement(nums) {
  // Boyer-Moore Majority Vote Algorithm
  let candidate = null;
  let count = 0;

  // Phase 1: Find candidate
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Phase 2: Verify candidate
  let occurrences = 0;
  for (let num of nums) {
    if (num === candidate) {
      occurrences++;
    }
  }

  return occurrences > nums.length / 2 ? candidate : null;
}

// Example usage
console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
```

#### Dry Run for `[2,2,1,1,1,2,2]`

```
candidate=null, count=0

2: count=0 → candidate=2, count=1
2: num===candidate → count=2
1: num!==candidate → count=1
1: num!==candidate → count=0
1: count=0 → candidate=1, count=1
2: num!==candidate → count=0
2: count=0 → candidate=2, count=1

Verify: count 2 in array = 4 times, length=7 → 4>3.5? true → return 2
```

#### Complexity

- Time: **O(n)**
- Space: **O(1)**

#### Interview Notes

- Optimal O(n) time, O(1) space
- Assumes majority element always exists
- Verification phase handles no majority case

---

## Problem 67: Implement Deep Object Comparison (Deep Equal)

Input:

```js
obj1 = { a: 1, b: { c: 2 } };
obj2 = { a: 1, b: { c: 2 } };
```

Output: `true`

---

### Approach: Recursive comparison

#### Thinking aloud

- Handle primitive values with strict equality.
- Handle null and undefined.
- Check if both are objects.
- Compare number of keys.
- Recursively compare each property.

#### Code

```js
function deepEqual(obj1, obj2) {
  // Same reference or both primitives equal
  if (obj1 === obj2) return true;

  // If either is null or not object
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  // Handle arrays
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;

  // Get keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Different number of keys
  if (keys1.length !== keys2.length) return false;

  // Check each key
  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

// Example usage
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
```

#### Complexity

- Time: **O(n)** where n is total properties
- Space: **O(d)** where d is depth (call stack)

#### Interview Notes

- Handle special objects (Date, RegExp) if needed
- Circular references need WeakMap tracking
- Often used in testing frameworks

---

## Problem 68: Generate All Permutations of a String

Input: `"abc"`
Output: `["abc", "acb", "bac", "bca", "cab", "cba"]`

---

### Approach: Backtracking recursion

#### Thinking aloud

- Base case: if current permutation length equals string length, add to results.
- For each character not used, add to current and recurse.
- Backtrack by removing last character.

#### Code

```js
function permutations(str) {
  const result = [];

  function backtrack(current, remaining) {
    if (current.length === str.length) {
      result.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      // Choose character
      const char = remaining[i];
      // Recurse with character added to current, removed from remaining
      backtrack(current + char, remaining.slice(0, i) + remaining.slice(i + 1));
    }
  }

  backtrack("", str);
  return result;
}

// Example usage
console.log(permutations("abc"));
// ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
```

#### Dry Run for `"abc"`

```
backtrack('', 'abc')
  i=0: char='a' → backtrack('a', 'bc')
    i=0: char='b' → backtrack('ab', 'c')
      i=0: char='c' → backtrack('abc', '') → push 'abc'
    i=1: char='c' → backtrack('ac', 'b')
      i=0: char='b' → backtrack('acb', '') → push 'acb'
  i=1: char='b' → backtrack('b', 'ac')
    i=0: char='a' → backtrack('ba', 'c')
      i=0: char='c' → backtrack('bac', '') → push 'bac'
    i=1: char='c' → backtrack('bc', 'a')
      i=0: char='a' → backtrack('bca', '') → push 'bca'
  i=2: char='c' → backtrack('c', 'ab')
    i=0: char='a' → backtrack('ca', 'b')
      i=0: char='b' → backtrack('cab', '') → push 'cab'
    i=1: char='b' → backtrack('cb', 'a')
      i=0: char='a' → backtrack('cba', '') → push 'cba'
```

#### Complexity

- Time: **O(n!)** (n factorial)
- Space: **O(n! \* n)** for storing results

#### Interview Notes

- Classic backtracking problem
- For duplicates, use Set or skip if character same as previous
- Can also swap characters in-place for better space

---

## Problem 69: Implement a Simple LRU Cache

Input: Capacity 2, put(1,1), put(2,2), get(1), put(3,3)
Output: get(1)=1, get(2)=-1 (evicted)

---

### Approach: Map + Doubly Linked List

#### Thinking aloud

- Use Map for O(1) access.
- Maintain order with doubly linked list (most recent at head, least at tail).
- On get: move accessed item to head.
- On put: if exists, update and move to head; else add to head.
- If over capacity, remove tail.

#### Code (simplified with Map only - maintains insertion order)

```js
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Maintains insertion order
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    // Get value and refresh position
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // Re-inserts at end (most recent)
    return value;
  }

  put(key, value) {
    // If key exists, delete it first
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // Add new key-value (will be most recent)
    this.cache.set(key, value);

    // If over capacity, remove least recently used (first item)
    if (this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}

// Example usage
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3); // Evicts key 2
console.log(cache.get(2)); // -1
console.log(cache.get(3)); // 3
```

#### Complexity

- Get: **O(1)**
- Put: **O(1)**
- Space: **O(capacity)**

#### Interview Notes

- Map maintains insertion order in JS
- For true LRU, need to track access order
- Interviewers may expect doubly linked list implementation

---

## Problem 70: Implement a Function to Check if Sudoku is Valid

Input: 9x9 Sudoku board (partial)
Output: `true` if valid, `false` otherwise

---

### Approach: Track seen numbers in rows, columns, boxes

#### Thinking aloud

- Use Sets for each row, column, and 3x3 box.
- Iterate through each cell.
- If cell not empty, check if number already in row/col/box Set.
- If duplicate found, return false.
- Add to all three Sets.

#### Code

```js
function isValidSudoku(board) {
  // Initialize Sets for rows, columns, and boxes
  const rows = Array(9)
    .fill()
    .map(() => new Set());
  const cols = Array(9)
    .fill()
    .map(() => new Set());
  const boxes = Array(9)
    .fill()
    .map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j];

      if (cell !== ".") {
        // Calculate box index (0-8)
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        // Check for duplicates
        if (
          rows[i].has(cell) ||
          cols[j].has(cell) ||
          boxes[boxIndex].has(cell)
        ) {
          return false;
        }

        // Add to Sets
        rows[i].add(cell);
        cols[j].add(cell);
        boxes[boxIndex].add(cell);
      }
    }
  }

  return true;
}

// Example usage
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board)); // true
```

#### Complexity

- Time: **O(81)** → **O(1)** (fixed board size)
- Space: **O(81)** → **O(1)**

#### Interview Notes

- Box index calculation is key
- Can use bitmasking for optimization
- Problem tests matrix traversal and duplicate checking

---

## Summary of Interview Questions Covered

| Problem                         | Key Concept                      | Time Complexity |
| ------------------------------- | -------------------------------- | --------------- |
| 1. Reverse a string             | Iterative / Built-in methods     | O(n)            |
| 2. Check palindrome             | Two-pointer / Reverse comparison | O(n)            |
| 3. Find largest number          | Loop tracking / Math.max         | O(n)            |
| 4. Remove first element         | slice() / shift()                | O(n)            |
| 5. Callback function            | Higher-order function            | O(1)            |
| 6. Arrow function               | Arrow syntax                     | O(1)            |
| 7. Add property to object       | Dot/bracket notation             | O(1)            |
| 8. Delete property from object  | delete operator                  | O(1)            |
| 9. Reduce method                | Array.reduce()                   | O(n)            |
| 10. String repeat               | repeat() method                  | O(n×k)          |
| 11. String concatenation        | Type coercion                    | O(1)            |
| 12. Subtraction with string     | Type coercion                    | O(1)            |
| 13. Strict equality             | === operator                     | O(1)            |
| 14. Loose equality              | == operator                      | O(1)            |
| 15. Sum of array                | Loop / reduce()                  | O(n)            |
| 16. Check prime number          | Loop till √n                     | O(√n)           |
| 17. Fibonacci sequence          | Iterative loop                   | O(n)            |
| 18. Factorial                   | Iterative multiplication         | O(n)            |
| 19. Power of number             | Exponentiation operator          | O(1)            |
| 20. Frequency of elements       | Object counting                  | O(n)            |
| 21. Count character occurrences | split() / Loop                   | O(n)            |
| 22. Celsius to Fahrenheit       | Formula conversion               | O(1)            |
| 23. Fahrenheit to Celsius       | Formula conversion               | O(1)            |
| 24. Sort ascending              | Nested loops (selection sort)    | O(n²)           |
| 25. Sort descending             | Bubble sort                      | O(n²)           |
| 26. Merge arrays                | concat / spread                  | O(n+m)          |
| 27. Array intersection          | Set + filter                     | O(n+m)          |
| 28. Array union                 | Set + spread                     | O(n+m)          |
| 29. Even or odd                 | Modulo %                         | O(1)            |
| 30. Find minimum                | Loop / Math.min                  | O(n)            |
| 31. String contains             | includes / indexOf               | O(n)            |
| 32. First non-repeated char     | Frequency count                  | O(n)            |
| 33. Longest word                | Split + loop                     | O(n)            |
| 34. Capitalize words            | Split + map + join               | O(n)            |
| 35. Array to uppercase          | map()                            | O(n×k)          |
| 36. Reverse array               | reverse() / two-pointer          | O(n)            |
| 37. Last element                | length - 1                       | O(1)            |
| 38. Remove falsy                | filter(Boolean)                  | O(n)            |
| 39. Factorial recursion         | Recursion                        | O(n)            |
| 40. Create object               | Object literal                   | O(1)            |
| 41. Map function                | map()                            | O(n)            |
| 42. Create class                | ES6 class                        | O(1)            |
| 43. JSON parse/stringify        | JSON methods                     | O(n)            |
| 44. String to words             | split()                          | O(n)            |
| 45. Switch statement            | switch-case                      | O(1)            |
| 46. Anagrams                    | Frequency count                  | O(n)            |
| 47. Max difference              | Track minimum                    | O(n)            |
| 48. Remove duplicates           | Set                              | O(n)            |
| 49. Count vowels                | Loop + vowel check               | O(n)            |
| 50. Unique characters           | Set                              | O(n)            |
| 51. Find second largest         | Single pass tracking             | O(n)            |
| 52. Queue with two stacks       | Stack reversal                   | O(1) amortized  |
| 53. Missing number              | Sum formula / XOR                | O(n)            |
| 54. Flatten nested object       | Recursive traversal              | O(n)            |
| 55. Pub/Sub pattern             | Event emitter                    | O(m) publish    |
| 56. Group array by property     | Reduce                           | O(n)            |
| 57. Deep clone with circular    | WeakMap tracking                 | O(n)            |
| 58. Balanced parentheses        | Stack                            | O(n)            |
| 59. Pairs sum to target         | Set lookup                       | O(n)            |
| 60. Promise with retry          | Recursive retry                  | Depends         |
| 61. Roman to integer            | Left-to-right parsing            | O(n)            |
| 62. Shuffle array               | Fisher-Yates                     | O(n)            |
| 63. Longest substring           | Sliding window                   | O(n)            |
| 64. Rate limiter                | Timestamp queue                  | O(n)            |
| 65. Snake to camel case         | Split and map                    | O(n)            |
| 66. Majority element            | Boyer-Moore voting               | O(n)            |
| 67. Deep equal                  | Recursive comparison             | O(n)            |
| 68. String permutations         | Backtracking                     | O(n!)           |
| 69. LRU cache                   | Map + order tracking             | O(1)            |
| 70. Valid Sudoku                | Set tracking                     | O(1)            |

---
