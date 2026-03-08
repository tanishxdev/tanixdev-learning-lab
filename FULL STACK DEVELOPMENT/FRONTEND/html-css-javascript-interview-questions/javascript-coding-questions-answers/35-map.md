## `map()` — Simple Words

### Concept

`map()` is an **array method**.

It is used when you want to:

> Take an array, transform every element, and create a **new array**.

Important rule:

- `map()` **does not change the original array**
- It **returns a new array**

---

## Syntax

```javascript
array.map(callbackFunction);
```

Callback receives:

```javascript
(element, index, array);
```

But usually we use only **element**.

---

# Example 1 — Basic

### Input

```javascript
const numbers = [1, 2, 3, 4];
```

We want:

```
[2, 4, 6, 8]
```

---

### Code

```javascript
const numbers = [1, 2, 3, 4];

// map runs the callback for every element
const result = numbers.map(function (num) {
  return num * 2; // transform element
});

console.log(result);
```

---

### Step-by-Step

Iteration happens like this:

```
1 → 1 * 2 → 2
2 → 2 * 2 → 4
3 → 3 * 2 → 6
4 → 4 * 2 → 8
```

---

### Output

```
[2, 4, 6, 8]
```

Original array remains:

```
[1,2,3,4]
```

---

# Example 2 — Using Arrow Function

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.map((num) => num * 3);

console.log(result);
```

Output

```
[3,6,9,12]
```

---

# Example 3 — Convert Names

```javascript
const names = ["tanish", "rahul", "amit"];

const upper = names.map((name) => name.toUpperCase());

console.log(upper);
```

Output

```
["TANISH","RAHUL","AMIT"]
```

---

# Example 4 — Objects (Very Common in React / Backend)

```javascript
const users = [
  { name: "Tanish", age: 21 },
  { name: "Rahul", age: 22 },
  { name: "Amit", age: 20 },
];

const userNames = users.map((user) => user.name);

console.log(userNames);
```

Output

```
["Tanish","Rahul","Amit"]
```

---

# Internal Thinking of `map()`

You can imagine map like this:

```javascript
function myMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}
```

So map basically:

```
take element
run function
store result
repeat
return new array
```

---

# Real Use Cases

### 1. API Data Transformation

```javascript
const products = data.map((p) => p.title);
```

---

### 2. React Lists

```javascript
users.map((user) => <UserCard name={user.name} />);
```

---

### 3. Formatting Data

```javascript
prices.map((p) => `$${p}`);
```

---

# `map()` vs `forEach()` (Important)

| Feature                 | map() | forEach()       |
| ----------------------- | ----- | --------------- |
| Returns new array       | Yes   | No              |
| Used for transformation | Yes   | No              |
| Return value used       | Yes   | Usually ignored |

Example:

```javascript
arr.map((x) => x * 2); // transformation
arr.forEach((x) => console.log(x)); // side effect
```

---

# Interview Definition

> `map()` is an array method that creates a new array by applying a function to each element of the original array.

---

# Mental Model

Think:

```
INPUT ARRAY
   ↓
apply function to each element
   ↓
NEW ARRAY
```

## `filter()` — Simple Words

### Concept

`filter()` is an **array method** used when you want to:

> Keep only the elements that satisfy a condition.

It **checks each element** and decides:

```
true  → keep element
false → remove element
```

Important:

- Original array **does not change**
- `filter()` returns a **new array**

---

# Syntax

```javascript
array.filter(callbackFunction);
```

Callback receives:

```javascript
(element, index, array);
```

Usually we use only **element**.

---

# Example 1 — Filter Even Numbers

### Input

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
```

We want only **even numbers**.

---

### Code

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.filter(function (num) {
  return num % 2 === 0; // condition
});

console.log(result);
```

---

### Step-by-Step

```
1 → 1 % 2 === 0 → false → remove
2 → 2 % 2 === 0 → true  → keep
3 → false → remove
4 → true  → keep
5 → false → remove
6 → true  → keep
```

---

### Output

```
[2,4,6]
```

---

# Example 2 — Arrow Function

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter((num) => num % 2 === 0);

console.log(even);
```

Output

```
[2,4,6]
```

---

# Example 3 — Filter Adults

```javascript
const ages = [12, 18, 25, 14, 30];

const adults = ages.filter((age) => age >= 18);

console.log(adults);
```

Output

```
[18,25,30]
```

---

# Example 4 — Objects (Real Backend Case)

```javascript
const users = [
  { name: "Tanish", age: 21 },
  { name: "Rahul", age: 16 },
  { name: "Amit", age: 25 },
];

const adults = users.filter((user) => user.age >= 18);

console.log(adults);
```

Output

```
[
 {name:"Tanish", age:21},
 {name:"Amit", age:25}
]
```

---

# Internal Thinking of `filter()`

Imagine filter works like this:

```javascript
function myFilter(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}
```

Process:

```
take element
check condition
true → push
false → skip
```

---

# `map()` vs `filter()`

| Feature     | map()          | filter()        |
| ----------- | -------------- | --------------- |
| Purpose     | Transform data | Select data     |
| Output size | Same size      | Smaller or same |
| Return      | New array      | New array       |

Example:

```javascript
arr.map((x) => x * 2); // change values
arr.filter((x) => x > 5); // keep some values
```

---

# Real Use Cases

### 1. API Data Filtering

```javascript
const activeUsers = users.filter((u) => u.active);
```

---

### 2. Search

```javascript
const result = products.filter((p) => p.name.includes("phone"));
```

---

### 3. Remove Invalid Data

```javascript
const validNumbers = arr.filter((n) => n !== null);
```

---

# Interview Definition

> `filter()` is an array method that creates a new array containing only the elements that satisfy a given condition.

---

# Mental Model

```
ARRAY
 ↓
check condition
 ↓
keep matching items
 ↓
NEW ARRAY
```

---

## `reduce()` — Simple Words

### Concept

`reduce()` is used when you want to:

> Take many values in an array and **combine them into one single value**.

That single value could be:

- sum
- product
- object
- array
- count
- grouped data

`reduce()` **reduces the array → one value**.

---

# Syntax

```javascript
array.reduce(callback, initialValue);
```

Callback receives:

```javascript
(accumulator, currentElement);
```

Meaning:

```
accumulator = stored result
currentElement = current item of array
```

---

# Example 1 — Sum of Numbers

### Input

```javascript
[1, 2, 3, 4];
```

Expected output

```
10
```

---

### Code

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(function (acc, num) {
  return acc + num;
}, 0);

console.log(sum);
```

---

### Step-by-Step

Initial value

```
acc = 0
```

Iteration:

```
Step1
acc = 0 + 1 = 1

Step2
acc = 1 + 2 = 3

Step3
acc = 3 + 3 = 6

Step4
acc = 6 + 4 = 10
```

---

### Output

```
10
```

---

# Example 2 — Arrow Function

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);
```

Output

```
10
```

---

# Example 3 — Find Maximum Number

```javascript
const nums = [10, 5, 20, 8];

const max = nums.reduce((acc, num) => {
  if (num > acc) {
    return num;
  }
  return acc;
}, nums[0]);

console.log(max);
```

Output

```
20
```

---

# Example 4 — Count Occurrences (Very Common)

```javascript
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  if (acc[fruit]) {
    acc[fruit]++;
  } else {
    acc[fruit] = 1;
  }

  return acc;
}, {});

console.log(count);
```

---

### Output

```
{
  apple: 3,
  banana: 2,
  orange: 1
}
```

This is used a lot in **data processing**.

---

# Internal Thinking of `reduce()`

Imagine reduce works like this:

```javascript
function myReduce(arr, callback, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }

  return acc;
}
```

Process:

```
take value
combine with accumulator
store result
repeat
return final value
```

---

# Map vs Filter vs Reduce

| Method | Purpose                    | Output       |
| ------ | -------------------------- | ------------ |
| map    | transform every element    | new array    |
| filter | keep elements by condition | new array    |
| reduce | combine values             | single value |

Example:

```javascript
arr.map((x) => x * 2);

arr.filter((x) => x > 5);

arr.reduce((sum, x) => sum + x, 0);
```

---

# Real Use Cases

### 1. Total Price

```javascript
const total = cart.reduce((sum, item) => sum + item.price, 0);
```

---

### 2. Group Data

```javascript
users.reduce(...)
```

---

### 3. Flatten Arrays

```javascript
arrays.reduce((acc, arr) => acc.concat(arr), []);
```

---

# Mental Model

Think like this:

```
ARRAY
 ↓
combine values one by one
 ↓
FINAL RESULT
```

Example:

```
[1,2,3,4]
 ↓
((((1+2)+3)+4))
 ↓
10
```

---

# Interview Definition

> `reduce()` is an array method that processes all elements of an array and combines them into a single value using a reducer function.

---

## Important

Most developers first learn this pattern:

```
map → transform
filter → select
reduce → combine
```

These **three together are the backbone of functional JavaScript**.

---

## Why `map`, `filter`, `reduce` exist when we already have `for` loops

Good question.
Because technically **everything can be done with `for` loops**.

But these methods exist to make code:

1. **Cleaner**
2. **Safer**
3. **More readable**
4. **Less error-prone**

Think of them as **specialized tools** for common patterns.

---

# 1. Problem With `for` Loops

Example: multiply numbers by 2.

### Using `for`

```javascript
const numbers = [1, 2, 3, 4];
let result = [];

for (let i = 0; i < numbers.length; i++) {
  result.push(numbers[i] * 2);
}

console.log(result);
```

Problems:

- More lines
- Manual index handling
- Easy to make mistakes
- Logic + iteration mixed together

---

# 2. Same With `map()`

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.map((num) => num * 2);
```

Now code says exactly:

> take numbers → map them → multiply by 2

Much clearer.

---

# 3. `for` Loops Mix Two Things

`for` loop does **two jobs**:

```
1 → iterate
2 → apply logic
```

Example:

```javascript
for(...) {
   logic
}
```

But modern JS separates these.

```
map    → transform
filter → select
reduce → combine
```

Each method has **one responsibility**.

---

# 4. Example — Real Scenario

Array:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
```

Goal:

```
take even numbers
multiply them by 2
sum them
```

---

## Using `for`

```javascript
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i] * 2;
  }
}

console.log(sum);
```

Harder to read.

---

## Using Functional Methods

```javascript
const sum = numbers
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((acc, n) => acc + n, 0);

console.log(sum);
```

Now code reads like a **pipeline**.

```
numbers
 ↓
filter even
 ↓
multiply by 2
 ↓
sum them
```

Much easier to understand.

---

# 5. Fewer Bugs

`for` loops require:

```
index management
array length checks
push logic
temporary variables
```

Mistakes happen often.

Example bug:

```javascript
for(let i=0;i<=arr.length;i++)
```

This is wrong.

Functional methods remove these mistakes.

---

# 6. Immutability (Important in React / Backend)

`map`, `filter`, `reduce` **do not modify the original array**.

They return **new arrays**.

This prevents accidental side effects.

Example:

```javascript
const newArr = arr.map((x) => x * 2);
```

Original array stays safe.

---

# 7. Code Expresses Intent

Compare:

### For loop

```
HOW to do it
```

### map/filter/reduce

```
WHAT you want
```

Example:

```javascript
users.filter((u) => u.active);
```

Immediately understandable.

---

# 8. Industry Standard

Most production code uses:

```
map
filter
reduce
```

Especially in:

- React
- Node APIs
- Data processing
- Functional programming

---

# Mental Model

Think like this:

```
for loop = manual machine
map/filter/reduce = specialized tools
```

You _can_ cut wood with a knife, but a **saw is better**.

---

# When To Use `for`

Still useful when:

- complex logic
- breaking early
- performance critical loops
- nested loops

---

# Quick Rule

```
map    → transform
filter → select
reduce → combine
for    → everything else
```

---
