# Array Methods — Deep Conceptual & Practical Mastery

> Array methods let you **process collections declaratively** instead of writing manual loops.

---

## 1. Big Picture: Why Array Methods Exist

### Problem with traditional loops

```js
let result = [];
for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
}
```

Problems:

* More code
* Harder to read
* Logic + iteration mixed
* Easy to introduce bugs

### Solution: Array methods

```js
numbers.map(n => n * 2);
```

Benefits:

* Cleaner
* Expresses **intent**
* Less error-prone
* Chainable

---

## 2. Mental Model (VERY IMPORTANT)

Think of array methods like an **assembly line**:

* Input array goes in
* Each method does **one job**
* New array/value comes out
* Original array usually stays unchanged

---

## 3. `map()` — Transform Each Element

### Concept

`map`:

* Iterates over array
* Transforms each element
* Returns a **new array of same length**

Rule:

> Use `map` when **output size = input size**

---

### Basic Example

```js
const numbers = [1, 2, 3, 4, 5];

// Each number is doubled
const doubled = numbers.map(num => {
    // num is current element
    return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]
```

What happens internally:

1. Take 1 → return 2
2. Take 2 → return 4
3. Continue…
4. Collect all returned values into new array

---

### Mapping Objects

```js
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// Extract only names
const names = users.map(user => {
    return user.name;
});

console.log(names);
```

Why `map` is perfect:

* Input: users
* Output: names
* Same count

---

### Mapping to New Structure

```js
const userInfo = users.map(user => {
    return `${user.name} is ${user.age} years old`;
});

console.log(userInfo);
```

---

### Using Index in `map`

```js
const indexed = numbers.map((num, index) => {
    // index is position in array
    return `${index}: ${num}`;
});

console.log(indexed);
```

---

## 4. `filter()` — Select Some Elements

### Concept

`filter`:

* Tests each element
* Keeps elements that return `true`
* Returns **new array (possibly smaller)**

Rule:

> Use `filter` when **output size ≤ input size**

---

### Basic Filtering

```js
const numbers = [1,2,3,4,5,6,7,8,9,10];

// Keep only even numbers
const evens = numbers.filter(num => {
    return num % 2 === 0;
});

console.log(evens);
```

Mental flow:

* 1 → false → removed
* 2 → true → kept
* Continue…

---

### Filtering Objects

```js
const products = [
    { name: "Laptop", price: 999, inStock: true },
    { name: "Phone", price: 599, inStock: false },
    { name: "Tablet", price: 399, inStock: true }
];

// Only available products
const availableProducts = products.filter(product => {
    return product.inStock === true;
});

// Only expensive products
const expensiveProducts = products.filter(product => {
    return product.price > 500;
});
```

---

### Complex Conditions

```js
const users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 17, active: true },
    { name: "Charlie", age: 30, active: false }
];

// Active adults only
const activeAdults = users.filter(user => {
    return user.active && user.age >= 18;
});

console.log(activeAdults);
```

---

## 5. `reduce()` — Combine Into One Value (HARDEST BUT MOST POWERFUL)

### Concept

`reduce`:

* Walks through array
* Accumulates result
* Returns **single value** (number, object, array, anything)

Signature:

```js
array.reduce((accumulator, currentValue) => newAccumulator, initialValue)
```

---

### Sum Example (Classic)

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => {
    // total starts as initialValue (0)
    return total + num;
}, 0);

console.log(sum);
```

Step-by-step:

* total = 0, num = 1 → 1
* total = 1, num = 2 → 3
* total = 3, num = 3 → 6
* ...

---

### Find Maximum

```js
const max = numbers.reduce((currentMax, num) => {
    return num > currentMax ? num : currentMax;
}, numbers[0]);

console.log(max);
```

---

### Count Occurrences (Very Common Interview Pattern)

```js
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
    // If key exists, increment
    // Else initialize to 1
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(count);
```

---

### Group By Property

```js
const people = [
    { name: "Alice", department: "Engineering" },
    { name: "Bob", department: "Marketing" },
    { name: "Charlie", department: "Engineering" }
];

const byDepartment = people.reduce((acc, person) => {
    const dept = person.department;

    if (!acc[dept]) {
        acc[dept] = [];
    }

    acc[dept].push(person);
    return acc;
}, {});
```

---

## 6. `find()` and `findIndex()`

### Concept

* `find` → first matching element
* `findIndex` → index of first match

Stops early (efficient).

---

```js
const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];

const user = users.find(u => u.name === "Bob");
console.log(user);

const index = users.findIndex(u => u.name === "Bob");
console.log(index);
```

If not found:

* `find` → `undefined`
* `findIndex` → `-1`

---

## 7. `some()` and `every()`

### Concept

* `some` → **any** element matches?
* `every` → **all** elements match?

---

```js
const numbers = [2, 4, 6, 8, 10];
const mixedNumbers = [1, 2, 3, 4, 5];

console.log(numbers.some(num => num > 5)); // true
console.log(numbers.every(num => num % 2 === 0)); // true
```

---

### Real Example

```js
const users = [
    { name: "Alice", age: 25, verified: true },
    { name: "Bob", age: 30, verified: true },
    { name: "Charlie", age: 17, verified: false }
];

const hasMinors = users.some(user => user.age < 18);
const allVerified = users.every(user => user.verified);
```

---

## 8. `forEach()` — Execute, Not Transform

### Concept

* Runs function for each element
* Returns **nothing**
* Used for **side effects**

---

```js
const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
```

---

### Side Effect Example

```js
const results = [];
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
    results.push(num * 2);
});

console.log(results);
```

Note:

* If you need a new array → use `map`
* `forEach` is not chainable

---

## 9. `sort()` — Sorting (DANGEROUS IF MISUSED)

### Key Rule

`sort()`:

* Converts values to strings by default
* Mutates original array

---

### String Sorting

```js
const fruits = ["banana", "apple", "orange", "grape"];
fruits.sort();
```

---

### Numeric Sorting (Correct Way)

```js
const numbers = [10, 5, 40, 25, 1000, 1];

numbers.sort((a, b) => a - b); // ascending
numbers.sort((a, b) => b - a); // descending
```

---

### Sorting Objects

```js
const users = [
    { name: "Charlie", age: 35 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

users.sort((a, b) => a.age - b.age);
users.sort((a, b) => a.name.localeCompare(b.name));
```

---

## 10. `reverse()` and `slice()`

### `reverse()` (Mutates)

```js
const numbers = [1,2,3,4,5];
numbers.reverse();
```

---

### `slice()` (Safe)

```js
const original = [1,2,3,4,5];
const portion = original.slice(1, 4);
```

---

## 11. Method Chaining (Most Real-World Code)

```js
const result = users
    .filter(user => user.active)
    .filter(user => user.age > 25)
    .map(user => ({ name: user.name, salary: user.salary }))
    .sort((a, b) => b.salary - a.salary);
```

Mental model:

* Data flows left → right
* Each step is readable
* No mutation

---

## 12. Real Practical Examples

### Product Filtering

```js
function filterProducts(products, filters) {
    return products
        .filter(product => {
            if (filters.category && product.category !== filters.category) return false;
            if (filters.minPrice && product.price < filters.minPrice) return false;
            if (filters.maxPrice && product.price > filters.maxPrice) return false;
            if (filters.minRating && product.rating < filters.minRating) return false;
            return true;
        })
        .sort((a, b) => {
            if (filters.sortBy === 'price') return a.price - b.price;
            if (filters.sortBy === 'rating') return b.rating - a.rating;
            return 0;
        });
}
```

---

### Data Analysis

```js
const analysis = {
    totalSales: salesData.reduce((sum, d) => sum + d.sales, 0),
    totalExpenses: salesData.reduce((sum, d) => sum + d.expenses, 0),
    profitableMonths: salesData.filter(d => d.sales > d.expenses),
    averageSales: salesData.reduce((sum, d) => sum + d.sales, 0) / salesData.length
};
```

---

### Text Processing

```js
const processed = words
    .filter(word => word.length > 3)
    .map(word => word.toUpperCase())
    .sort()
    .join(" ");
```

---

## 13. Performance & Best Practices

```js
// Bad
numbers.map(n => console.log(n));

// Good
numbers.forEach(n => console.log(n));

// Bad
const doubled = [];
numbers.forEach(n => doubled.push(n * 2));

// Good
const doubled2 = numbers.map(n => n * 2);
```

---

## 14. Final Mental Cheat Sheet

* `map` → transform
* `filter` → select
* `reduce` → combine
* `find` → first match
* `some` → any
* `every` → all
* `forEach` → side effects
* `sort` → mutate (careful)

---