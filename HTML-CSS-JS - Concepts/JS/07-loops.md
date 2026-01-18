# JavaScript Loops — Repetition with Control & Clarity

---

## 1. What are Loops? (Core Concept)

**Loops allow you to repeat a block of code multiple times without writing it again and again.**

In simple terms:

* A loop runs **while a condition remains true**
* Each run is called an **iteration**
* Loops are essential for:

  * Arrays
  * Data processing
  * Repeated tasks
  * Automation logic

Mental model:

```text
START
→ check condition
→ execute code
→ update state
→ repeat
→ stop when condition becomes false
```

Every loop has **three core parts**:

1. **Initialization** – where loop starts
2. **Condition** – when loop should continue
3. **Update** – how loop moves forward

---

## 2. `for` Loop (Most Structured Loop)

The `for` loop is used when:

* You **know in advance** how many times to loop
* You need **counter-based iteration**

Syntax:

```js
for (initialization; condition; update) {
    // code to repeat
}
```

---

## 2.1 Basic `for` Loop

```js
// Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Execution flow:

1. `let i = 1` → start
2. `i <= 5` → check
3. `console.log(i)` → execute
4. `i++` → update
5. Repeat until condition fails

---

### Looping Through an Array (Index-Based)

```js
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

Why this works:

* Arrays are **0-indexed**
* `length` ensures loop stays in bounds

---

### Countdown Example

```js
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Blast off!");
```

Key idea:

* Update step can decrement
* Loop direction is flexible

---

## 2.2 `for` Loop Variations

---

### Skipping Iterations (`continue`)

```js
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}
```

Mental model:

* `continue` skips **current iteration**
* Loop continues with next value

---

### Breaking Early (`break`)

```js
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}
```

Mental model:

* `break` exits the loop **completely**
* No further iterations happen

---

### Multiple Variables in `for`

```js
for (let i = 0, j = 10; i < 5; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}
```

Use case:

* Two counters moving in opposite directions
* Useful in algorithms and pointer logic

---

## 3. `while` Loop (Condition-Driven Loop)

The `while` loop is used when:

* You **don’t know in advance** how many times to loop
* Loop depends on a **dynamic condition**

Syntax:

```js
while (condition) {
    // code
}
```

---

### Basic `while` Loop

```js
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
```

Important rule:

* You must update the condition manually
* Otherwise → infinite loop

---

### User Input Simulation

```js
let userInput = "";

while (userInput !== "quit") {
    console.log("Processing:", userInput);
    break;
}
```

Mental model:

* Loop continues until a **specific state** is reached
* Often used in:

  * Input processing
  * Network polling
  * Game loops

---

### Processing an Array with `while`

```js
let numbers = [1, 2, 3, 4, 5];
let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}
```

This is functionally similar to a `for` loop, but more manual.

---

## 4. `do…while` Loop (Run At Least Once)

The `do…while` loop:

* Executes code **before checking condition**
* Guarantees **at least one execution**

Syntax:

```js
do {
    // code
} while (condition);
```

---

### Basic Example

```js
let num = 0;

do {
    console.log("Number:", num);
    num++;
} while (num < 3);
```

Execution insight:

* Condition is checked **after** first run

---

### Menu System Example

```js
let choice;

do {
    console.log("1. Start Game");
    console.log("2. Settings");
    console.log("3. Exit");
    choice = 3;
} while (choice !== 3);
```

Use case:

* Menus
* Confirmation dialogs
* Retry logic

---

## 5. `for…in` Loop (Objects)

`for…in` is used to loop over **keys (properties)** of an object.

---

### Looping Through Object Properties

```js
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

Mental model:

* `key` → property name
* `person[key]` → property value

---

### `for…in` with Arrays (Not Recommended)

```js
let colors = ["red", "green", "blue"];

for (let index in colors) {
    console.log(`Index ${index}: ${colors[index]}`);
}
```

Why not ideal:

* `for…in` is meant for objects
* Can include unexpected inherited properties

---

## 6. `for…of` Loop (Iterables)

`for…of` is used to loop over **values** of:

* Arrays
* Strings
* Other iterables

---

### Looping Through Array Values

```js
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

Mental model:

* You get the **actual value**, not index
* Cleaner and safer than index loops

---

### Looping Through String Characters

```js
let word = "hello";

for (let char of word) {
    console.log(char);
}
```

---

### Getting Index with `entries()`

```js
for (let [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}
```

Best practice:

* Use `for…of` + `entries()` instead of `for…in` for arrays

---

## 7. Array Methods (Loop Alternatives)

These methods **internally use loops**, but are more expressive.

---

### `forEach`

```js
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});
```

Use when:

* You want side effects (logging, updating UI)
* No return value needed

---

### `map`

```js
let doubled = numbers.map(num => num * 2);
```

Use when:

* Transforming data
* Returning a new array

---

### `filter`

```js
let evens = numbers.filter(num => num % 2 === 0);
```

Use when:

* Selecting a subset

---

### `find`

```js
let found = numbers.find(num => num > 3);
```

Use when:

* You need **first matching element only**

---

## 8. Practical Loop Examples

---

### Sum Array Values

```js
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
```

---

### Find Maximum Value

```js
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
```

---

### Multiplication Table

```js
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
```

---

### Shopping Cart Processing

```js
function calculateTotal(cart) {
    let total = 0;
    for (let item of cart) {
        total += item.price * item.quantity;
    }
    return total;
}
```

---

## 9. Loop Control Statements

---

### `break`

```js
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}
```

---

### `continue`

```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
```

---

### Labeled Loops (Advanced)

```js
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outer;
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
```

Use sparingly:

* Mostly for complex nested loops
* Rare in day-to-day code

---

## 10. Key Mental Models (Lock This In)

* Loops automate repetition
* `for` → count-controlled loops
* `while` → condition-controlled loops
* `do…while` → must run once
* `for…in` → object keys
* `for…of` → iterable values
* `break` stops loop
* `continue` skips iteration
* Array methods = cleaner loops

---
