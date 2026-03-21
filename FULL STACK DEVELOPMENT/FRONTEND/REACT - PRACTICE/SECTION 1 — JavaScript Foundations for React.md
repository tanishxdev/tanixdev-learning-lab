# JavaScript Foundations for React — Coding Practice

Difficulty levels:

```
Level 1 → Basics
Level 2 → Intermediate
Level 3 → React-style problems
```

---

# 1. Modern JavaScript + ES6 Basics

### Question 1 — Convert ES5 to ES6

Convert the following code to **modern JavaScript (ES6+)**

```javascript
var numbers = [1, 2, 3];

var doubled = numbers.map(function (n) {
  return n * 2;
});

console.log(doubled);
```

Expected output

```
[2,4,6]
```

---

### Question 2 — Convert to Arrow Function

Rewrite this function using **arrow functions**

```javascript
function greet(name) {
  return "Hello " + name;
}
```

Expected output

```
Hello Tanish
```

---

### Question 3 — Module Simulation

Create two files.

**math.js**

```
export function multiply(a,b)
```

**app.js**

```
import multiply
print result
```

Test:

```
multiply(3,4)
```

Output

```
12
```

---

# 2. let vs const vs var

### Question 4 — Scope Problem

What will be printed?

```javascript
var x = 10;

if (true) {
  var x = 20;
}

console.log(x);
```

Rewrite the code so the output becomes:

```
10
```

---

### Question 5 — Loop Bug

Fix this code so it prints

```
0
1
2
```

Code:

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

---

### Question 6 — const Mutation

What will be printed?

```javascript
const user = {
  name: "Tanish",
};

user.name = "Rahul";

console.log(user);
```

Explain **why it works even with const**.

---

# 3. Arrow Functions

### Question 7 — Convert Functions

Convert this to arrow functions.

```javascript
function square(num) {
  return num * num;
}
```

---

### Question 8 — Object Return

Fix the following arrow function.

```javascript
const createUser = () => {
  name: "Tanish";
};
```

Expected output

```
{ name:"Tanish" }
```

---

### Question 9 — Map with Arrow Functions

Transform this array.

```
[2,4,6]
```

into

```
[4,8,12]
```

Use `map()` with arrow functions.

---

# 4. Template Literals

### Question 10 — Replace Concatenation

Rewrite using **template literals**.

```javascript
const name = "Tanish";
const age = 20;

const message = "My name is " + name + " and I am " + age + " years old";
```

Expected output

```
My name is Tanish and I am 20 years old
```

---

### Question 11 — Dynamic URL

Create this URL using template literals.

```
https://api.example.com/users/25
```

Variables:

```
userId = 25
```

---

### Question 12 — Multiline Template

Create the following HTML using template literals.

```
<div>
<h1>Hello</h1>
<p>Welcome</p>
</div>
```

---

# 5. Ternary Operator

### Question 13 — Even or Odd

Write a function that returns

```
Even
```

or

```
Odd
```

using **ternary operator**.

---

### Question 14 — Login Button

Given:

```javascript
const isLoggedIn = true;
```

Return

```
Logout
```

else

```
Login
```

---

### Question 15 — Grade Calculator

Using **nested ternary**, return grade:

```
90+ → A
75+ → B
50+ → C
else Fail
```

---

# 6. Object Destructuring

### Question 16 — Extract Properties

Given:

```javascript
const user = {
  name: "Tanish",
  age: 20,
  city: "Delhi",
};
```

Extract variables:

```
name
age
city
```

using destructuring.

---

### Question 17 — Rename Variables

Rename `name` to `userName`.

Input:

```
{ name:"Tanish" }
```

Expected variable:

```
userName
```

---

### Question 18 — Default Values

If age is missing, default should be **18**.

Input:

```
{ name:"Aman" }
```

Expected output

```
Aman
18
```

---

# 7. Array Destructuring

### Question 19 — Extract Elements

Given:

```
["Tanish",20,"Delhi"]
```

Extract

```
name
age
city
```

---

### Question 20 — Swap Variables

Swap two numbers using destructuring.

```
a = 5
b = 10
```

Output

```
10 5
```

---

### Question 21 — Rest Elements

Given:

```
[1,2,3,4,5]
```

Extract

```
first = 1
rest = [2,3,4,5]
```

---

# 8. Default Parameters

### Question 22 — Greeting Function

Write a function:

```
greet(name)
```

If name not provided:

```
Hello Guest
```

---

### Question 23 — Multiply Function

Default value of `b` should be **2**

```
multiply(5)
```

Output

```
10
```

---

# 9. Spread Operator

### Question 24 — Clone Array

Clone this array using spread.

```
[1,2,3]
```

Modify clone and verify original not changed.

---

### Question 25 — Merge Arrays

Merge

```
[1,2]
```

and

```
[3,4]
```

Expected

```
[1,2,3,4]
```

---

### Question 26 — Update Object

Given

```javascript
const user = {
  name: "Tanish",
  age: 20,
};
```

Create new object with:

```
age:21
```

without mutating original.

---

# 10. Rest Parameters

### Question 27 — Sum Function

Create function:

```
sum(...numbers)
```

Example

```
sum(1,2,3,4)
```

Output

```
10
```

---

### Question 28 — Max Number

Write function using rest parameters to find **maximum number**.

```
max(5,8,2,10)
```

Output

```
10
```

---

# 11. Array Methods (Important for React)

### Question 29 — map()

Double numbers:

```
[1,2,3]
```

Expected

```
[2,4,6]
```

---

### Question 30 — filter()

Filter numbers greater than 10.

```
[5,10,15,20]
```

Expected

```
[15,20]
```

---

### Question 31 — reduce()

Find sum of array.

```
[1,2,3,4]
```

Expected

```
10
```

---

### Question 32 — find()

Find user with id=2

```
[
 {id:1,name:"Aman"},
 {id:2,name:"Riya"}
]
```

---

### Question 33 — some()

Check if any number > 50.

```
[10,20,60]
```

Expected

```
true
```

---

### Question 34 — every()

Check if all numbers are positive.

```
[2,5,10]
```

Expected

```
true
```

---

# 12. Promises

### Question 35 — Create Promise

Create a promise that resolves after **2 seconds**.

Output

```
Data Loaded
```

---

### Question 36 — Promise Chain

Create promise that:

```
step1 → multiply by 2
step2 → add 5
```

Input

```
5
```

Output

```
15
```

---

# 13. Async / Await

### Question 37 — Fetch Data

Convert this to async/await.

```javascript
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

### Question 38 — Error Handling

Write async function with **try/catch** for fetch request.

---

# 14. Fetch API

### Question 39 — GET Request

Fetch users from:

```
https://jsonplaceholder.typicode.com/users
```

Print names only.

---

### Question 40 — POST Request

Send POST request with:

```
title:"Hello"
body:"World"
userId:1
```

---

# React-Style Practice (Very Important)

These simulate **real React logic**.

---

### Question 41 — Render List Logic

Given:

```
["Apple","Banana","Orange"]
```

Return array:

```
["Item: Apple","Item: Banana","Item: Orange"]
```

---

### Question 42 — Immutable State Update

Given:

```
items = ["apple","banana"]
```

Add `"orange"` without mutation.

---

### Question 43 — Filter Search Results

Input

```
products = [
 {name:"Laptop",price:50000},
 {name:"Phone",price:20000},
 {name:"Tablet",price:15000}
]
```

Return products with price > 20000.

---

### Question 44 — Toggle Status

Input

```
isActive = true
```

Return

```
Active
```

or

```
Inactive
```

---

# Final Challenge (Very Important)

### Question 45 — Mini Data Processing

Given users:

```javascript
const users = [
  { name: "Aman", age: 22 },
  { name: "Riya", age: 17 },
  { name: "Tanish", age: 20 },
];
```

Tasks:

1. Filter users age ≥ 18
2. Convert names to uppercase
3. Return final array

Expected output

```
["AMAN","TANISH"]
```

---
