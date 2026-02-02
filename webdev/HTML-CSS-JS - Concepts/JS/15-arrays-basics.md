# Arrays — Basics (Deep Conceptual + Practical Mastery)

---

## 1. What is an Array? (Core Concept)

An **array** is an **ordered collection of values** stored under **one variable name**.

Key properties of arrays in JavaScript:

* Ordered (index-based)
* Zero-based indexing
* Dynamic size (can grow/shrink)
* Can store **mixed data types**
* Internally, arrays are **objects with special behavior**

Think of an array as:

> A list where each item has a **position number (index)** starting from `0`.

---

## 2. Why Arrays Exist (Problem → Solution)

### Problem without arrays

```js
let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "orange";
```

* Hard to manage
* No looping easily
* No bulk operations

### Solution

```js
let fruits = ["apple", "banana", "orange"];
```

Now:

* One variable
* Indexed access
* Loops and methods available

---

## 3. Creating Arrays (All Ways Explained)

### 3.1 Array Literal (MOST COMMON)

```js
// Simple arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];

// Mixed data types
const mixed = ["hello", 42, true, null];
```

Why this is preferred:

* Clean
* Readable
* Predictable

---

### 3.2 Array Constructor

```js
const arr1 = new Array();        // Empty array
const arr2 = new Array(5);      // Array with length 5 (empty slots)
const arr3 = new Array(1, 2, 3); // [1, 2, 3]
```

Important mental note:

```js
new Array(5)
```

❌ does NOT mean `[5]`
✅ means **5 empty slots**

---

### 3.3 Empty Array

```js
const empty = [];
```

Used when:

* Data will be added later
* Dynamic list (cart, todos, logs)

---

### 3.4 Array with Any Data Type

```js
const data = [
    "string",                    // string
    123,                         // number
    true,                        // boolean
    { name: "John" },            // object
    [1, 2, 3],                   // array inside array
    function() { return "hello"; } // function
];
```

Important concept:

* JavaScript arrays are **not type-restricted**
* Flexibility is powerful but dangerous if misused

---

## 4. Accessing Array Elements (Indexing)

### Core Rule

* Index starts at **0**
* Last index = `length - 1`

---

```js
const colors = ["red", "green", "blue", "yellow"];

// Access by index
console.log(colors[0]); // "red"
console.log(colors[1]); // "green"
console.log(colors[3]); // "yellow"
```

---

### Accessing Last Element (Standard Pattern)

```js
console.log(colors[colors.length - 1]);
```

Why this matters:

* Array size may change
* This pattern always works

---

### Non-existent Index

```js
console.log(colors[10]); // undefined
```

No error, just `undefined`.

---

### Negative Index (Common Beginner Mistake)

```js
console.log(colors[-1]); // undefined
```

JavaScript does **NOT** support negative indexing like Python.

---

## 5. Array Property: `length` (VERY IMPORTANT)

### What `length` Actually Means

* `length` = highest index + 1
* NOT count of real values
* Includes empty slots

---

```js
const items = ["a", "b", "c", "d"];
console.log(items.length); // 4
```

---

### Modifying `length` (Dangerous but useful)

```js
items.length = 2;
console.log(items); // ["a", "b"]
```

Why this happens:

* JS truncates elements beyond new length

---

```js
items.length = 5;
console.log(items); // ["a", "b", empty × 3]
```

Empty slots ≠ `undefined`
They are **holes**.

---

## 6. Adding Elements to Arrays

### Add to END — `push`

```js
const fruits = ["apple", "banana"];

fruits.push("orange");
console.log(fruits);
```

Why `push` is common:

* Fast
* Preserves order
* Safe

---

### Add Multiple Elements

```js
fruits.push("grape", "mango");
console.log(fruits);
```

---

### Add to BEGINNING — `unshift`

```js
fruits.unshift("strawberry");
console.log(fruits);
```

Note:

* Slower than `push`
* Shifts all indices

---

### Add at Specific Index (CAUTION)

```js
fruits[10] = "kiwi";
console.log(fruits);
console.log(fruits.length);
```

What happens:

* Creates empty slots
* Avoid in production code

---

## 7. Removing Elements from Arrays

### Remove from END — `pop`

```js
const numbers = [1, 2, 3, 4, 5];

const lastNumber = numbers.pop();
console.log(lastNumber);
console.log(numbers);
```

---

### Remove from BEGINNING — `shift`

```js
const firstNumber = numbers.shift();
console.log(firstNumber);
console.log(numbers);
```

Note:

* Slower than `pop`
* Reindexes entire array

---

### Removing Using `delete` (DON’T USE)

```js
delete numbers[1];
console.log(numbers);
```

Why bad:

* Leaves holes
* Length unchanged

---

### Correct Way — `splice`

```js
const colors = ["red", "green", "blue", "yellow"];

const removed = colors.splice(1, 2);
console.log(removed);
console.log(colors);
```

Explanation:

* Start index = 1
* Remove 2 elements
* Mutates original array

---

## 8. Modifying Array Elements

```js
const pets = ["dog", "cat", "bird"];

// Replace one element
pets[1] = "hamster";
console.log(pets);
```

---

### Replace Multiple Elements (splice)

```js
pets.splice(1, 2, "rabbit", "turtle");
console.log(pets);
```

Mental model:

* Remove → Insert → Shift

---

## 9. Basic Array Utility Methods

```js
const arr = [1, 2, 3];

// Check array
console.log(Array.isArray(arr));
console.log(Array.isArray("hello"));
```

---

### Convert to String

```js
console.log(arr.toString());
console.log(arr.join(" - "));
```

---

### Searching Elements

```js
const fruits = ["apple", "banana", "orange", "banana"];

console.log(fruits.indexOf("banana"));
console.log(fruits.lastIndexOf("banana"));
console.log(fruits.indexOf("grape"));
```

---

### Existence Check (BEST PRACTICE)

```js
console.log(fruits.includes("apple"));
console.log(fruits.includes("grape"));
```

---

## 10. Copying Arrays (Shallow Copy Explained)

```js
const original = [1, 2, 3];

const copy1 = [...original];
const copy2 = Array.from(original);
const copy3 = original.slice();
```

All three:

* Create new array
* Different reference

---

### Proof

```js
copy1.push(4);
console.log(original);
console.log(copy1);
```

---

### Shallow Copy Pitfall

```js
const nested = [1, [2, 3], 4];
const shallowCopy = [...nested];

shallowCopy[1].push(5);
console.log(nested);
```

Why?

* Inner array reference is shared

---

## 11. Combining Arrays

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
```

---

### Using `concat`

```js
const combined1 = arr1.concat(arr2);
console.log(combined1);
```

---

### Using Spread (Modern)

```js
const combined2 = [...arr1, ...arr2, ...arr3];
console.log(combined2);
```

---

### Mixing Values

```js
const combined3 = [...arr1, "middle", ...arr2];
console.log(combined3);
```

---

## 12. Practical Examples (Fully Explained)

### Shopping Cart

```js
const cart = [];

function addToCart(item) {
    cart.push(item); // add item to cart
    console.log(`Added ${item} to cart`);
}

function removeFromCart(item) {
    const index = cart.indexOf(item); // find item
    if (index > -1) {
        cart.splice(index, 1); // remove item
        console.log(`Removed ${item} from cart`);
    }
}

function showCart() {
    console.log("Cart contents:", cart.join(", "));
}
```

---

### Todo List

```js
const todos = [];

function addTodo(task) {
    todos.push({
        id: Date.now(),        // unique id
        task: task,            // task text
        completed: false       // status
    });
}
```

---

### Student Grades

```js
const grades = [85, 92, 78, 96, 88];

function addGrade(grade) {
    if (grade >= 0 && grade <= 100) {
        grades.push(grade);
    }
}

function getAverage() {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}

function getHighestGrade() {
    return Math.max(...grades);
}
```

---

## 13. Common Array Patterns (Production Ready)

### Initialize with Default Values

```js
const zeros = new Array(5).fill(0);
```

---

### Generate Sequence

```js
const sequence = Array.from({ length: 5 }, (_, i) => i + 1);
```

---

### Remove Duplicates

```js
const numbers = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(numbers)];
```

---

### Flatten Array

```js
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = [].concat(...nested);
const flattened2 = nested.flat();
```

---

### Utility Functions

```js
function isEmpty(arr) {
    return arr.length === 0;
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

---

### Shuffle (Fisher–Yates)

```js
function shuffle(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
```

---

## 14. Final Mental Model (Lock This In)

* Arrays are ordered lists
* Index starts at 0
* `length` is dynamic
* Avoid holes
* Prefer `push/pop`
* Use `splice` for safe removal
* Copy arrays carefully
* Nested arrays need deep copy

---
