# JavaScript Interview Questions and Answers

---

**Topic : JavaScript Algorithms and Data Structures**


## **66. How do you implement a stack and a queue in JavaScript?**

---

### 1. Concept

Both **stack** and **queue** are **linear data structures** used to manage data in a specific order.

Core interview framing:

* **Stack** → **LIFO** (Last In, First Out)
* **Queue** → **FIFO** (First In, First Out)

JavaScript does **not** have built-in stack/queue classes, but we can implement them easily using **arrays** or **custom objects**.

---

## Part A: Stack Implementation

---

### 2. Stack – What It Is (LIFO)

Real-life analogy:

* Stack of plates
* Last plate added is removed first

Operations:

* `push` → add element
* `pop` → remove element
* `peek` → see top element
* `isEmpty` → check empty

---

### 3. Stack Using Array (Most Common)

#### Implementation

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
```

#### Usage

```javascript
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.pop();      // 30
stack.peek();     // 20
```

---

### 4. Time Complexity (Stack)

| Operation | Time |
| --------- | ---- |
| push      | O(1) |
| pop       | O(1) |
| peek      | O(1) |

Interview line:

> Stack operations are constant time.

---

## Part B: Queue Implementation

---

### 5. Queue – What It Is (FIFO)

Real-life analogy:

* Line at a ticket counter
* First person in line is served first

Operations:

* `enqueue` → add element
* `dequeue` → remove element
* `front` → first element
* `isEmpty`

---

### 6. Queue Using Array (Simple but Important Detail)

#### Basic Implementation (Interview Acceptable)

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
```

#### Usage

```javascript
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();  // 1
queue.front();    // 2
```

---

### 7. Important Interview Note (Very Important)

`shift()` is **O(n)** because it re-indexes the array.

So for **high-performance queues**, we should avoid `shift()`.

---

### 8. Optimized Queue Using Object (Best Practice)

```javascript
class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.rearIndex = 0;
  }

  enqueue(element) {
    this.items[this.rearIndex] = element;
    this.rearIndex++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  front() {
    return this.items[this.frontIndex];
  }

  isEmpty() {
    return this.frontIndex === this.rearIndex;
  }

  size() {
    return this.rearIndex - this.frontIndex;
  }
}
```

Interview maturity line:

> Arrays are fine for stacks, but optimized queues avoid `shift()`.

---

### 9. Time Complexity (Queue)

| Operation           | Time |
| ------------------- | ---- |
| enqueue             | O(1) |
| dequeue (optimized) | O(1) |
| front               | O(1) |

---

### 10. Common Interview Traps

❌ “JavaScript has built-in stack and queue”
✔ No — arrays are used to simulate them

❌ “Queue using array shift is always fine”
✔ Not for large data

❌ “Stack and queue are same”
✔ Order of removal is different

---

### 11. Interview-Ready Summary

A stack in JavaScript can be implemented using an array where elements are added and removed using `push` and `pop`, following the LIFO principle. A queue follows the FIFO principle and can be implemented using arrays or, more efficiently, using objects with front and rear indices to avoid costly `shift()` operations. Understanding time complexity and performance trade-offs is important in interviews.

---

### 12. Quick Practice Interview Questions

1. What is LIFO and FIFO?
2. Which array methods implement a stack?
3. Why is `shift()` slow?
4. How do you optimize a queue in JavaScript?
5. Time complexity of stack operations?
6. Real-world use cases of stack?
7. Real-world use cases of queue?

---

## **67. Explain how to sort an array in JavaScript**

---

### 1. Concept

In JavaScript, arrays are sorted primarily using the **built-in `Array.prototype.sort()` method**.

Key interview line:

> JavaScript sorting is **lexicographical (string-based) by default**, not numeric.

So understanding **how `sort()` works internally** is more important than just using it.

---

### 2. Default Sorting Behavior (Very Important)

By default, `sort()` converts elements to **strings** and compares them by **Unicode order**.

#### Example (Common Interview Trap)

```javascript
const arr = [10, 2, 30, 4];
arr.sort();

console.log(arr);
// Output: [10, 2, 30, 4]
```

Why?

Internally, JavaScript compares:

```text
"10", "2", "30", "4"
```

Lexicographical order, not numeric.

---

### 3. Numeric Sorting Using Compare Function

To sort numbers correctly, we must provide a **compare function**.

#### Ascending Order

```javascript
const arr = [10, 2, 30, 4];

arr.sort((a, b) => {
  return a - b;
});

console.log(arr);
// Output: [2, 4, 10, 30]
```

#### Descending Order

```javascript
arr.sort((a, b) => b - a);
// Output: [30, 10, 4, 2]
```

---

### 4. How the Compare Function Works (Interview Favorite)

Compare function rules:

```javascript
(a, b) => {
  return negative   // a comes before b
  return zero       // order unchanged
  return positive   // b comes before a
}
```

Example:

```javascript
(2, 10) => 2 - 10 = -8  // 2 comes before 10
```

Interview maturity line:

> Sorting is driven entirely by the return value of the comparator.

---

### 5. Sorting Strings (Case Sensitivity Note)

```javascript
const names = ["banana", "Apple", "cherry"];

names.sort();
console.log(names);
// Output: ["Apple", "banana", "cherry"]
```

Reason:

* Capital letters come before lowercase in Unicode.

Case-insensitive sort:

```javascript
names.sort((a, b) => a.localeCompare(b));
```

---

### 6. Sorting Objects (Very Common Interview Case)

```javascript
const users = [
  { name: "Tanish", age: 21 },
  { name: "Aman", age: 18 },
  { name: "Ravi", age: 25 }
];

// Sort by age
users.sort((a, b) => a.age - b.age);
```

Sort by name:

```javascript
users.sort((a, b) => a.name.localeCompare(b.name));
```

---

### 7. Does `sort()` Modify the Original Array? (Important)

Yes.

```javascript
const arr = [3, 1, 2];
const sorted = arr.sort();

console.log(arr);    // [1, 2, 3]
console.log(sorted); // same reference
```

To avoid mutation:

```javascript
const sorted = [...arr].sort((a, b) => a - b);
```

Interviewers like when you mention **immutability**.

---

### 8. Time Complexity of `sort()`

* Average & worst case: **O(n log n)**
* Exact algorithm is **engine-dependent** (V8 uses Timsort for arrays with objects)

Interview-safe answer:

> JavaScript sort runs in O(n log n) time.

---

### 9. Common Interview Traps

❌ “sort always sorts numbers correctly”
✔ Only with a comparator

❌ “sort returns a new array”
✔ It mutates the original

❌ “sort algorithm is fixed”
✔ Implementation depends on JS engine

---

### 10. Interview-Ready Summary

JavaScript sorts arrays using the built-in `sort()` method, which by default performs lexicographical string comparison. To correctly sort numbers or complex data, a custom compare function must be provided. The compare function determines the order based on its return value. The `sort()` method mutates the original array and generally runs in O(n log n) time.

---

### 11. Quick Practice Interview Questions

1. Why does `[10, 2, 30]` sort incorrectly by default?
2. How does the compare function work?
3. How do you sort numbers in descending order?
4. Does `sort()` mutate the array?
5. How do you sort objects by a property?
6. What is the time complexity of `sort()`?
7. How do you avoid mutating the original array?

---

## **68. How do you check if a string is a palindrome?**

---

### 1. Concept

A **palindrome** is a string that **reads the same forward and backward**.

Examples:

* `"madam"`
* `"level"`
* `"racecar"`

Interview framing:

> A palindrome check compares a string with its **reverse**, or checks characters from both ends.

---

### 2. Basic Approach (Reverse and Compare)

This is the **most common and simplest** method.

#### Example

```javascript
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```

Explanation:

* Convert string to array
* Reverse array
* Join back to string
* Compare

---

### 3. Two-Pointer Approach (Interview-Preferred)

More efficient and shows algorithmic thinking.

```javascript
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
```

Why interviewers like this:

* No extra memory
* Clear logic
* Scales well

---

### 4. Handling Case Sensitivity and Spaces (Real Interview Case)

Often interviewers add constraints:

> Ignore spaces and case.

Example:

* `"A man a plan a canal Panama"` → true

Solution:

```javascript
function isPalindrome(str) {
  const clean = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
```

---

### 5. Time and Space Complexity

| Approach       | Time | Space |
| -------------- | ---- | ----- |
| Reverse method | O(n) | O(n)  |
| Two-pointer    | O(n) | O(1)  |

Interview line:

> Two-pointer is optimal in space.

---

### 6. Common Interview Traps

❌ Forgetting to handle case sensitivity
❌ Ignoring spaces and punctuation
❌ Using reverse without explaining complexity

Interview maturity:

> Always ask about constraints before coding.

---

### 7. Edge Cases (Mention in Interview)

* Empty string → palindrome
* Single character → palindrome
* Mixed cases
* Special characters

---

### 8. Interview-Ready Summary

A palindrome is a string that reads the same forward and backward. In JavaScript, a palindrome can be checked either by reversing the string and comparing it with the original, or by using a two-pointer approach that compares characters from both ends. The two-pointer method is more space-efficient and preferred in interviews, especially when handling large strings or additional constraints.

---

### 9. Quick Practice Interview Questions

1. What is a palindrome?
2. How do you check a palindrome without reversing?
3. Which approach uses less memory?
4. How do you handle spaces and punctuation?
5. Is an empty string a palindrome?
6. Time complexity of palindrome check?
7. Why is two-pointer better?

---


## **69. Describe a recursive function and provide an example**

---

### 1. Concept

A **recursive function** is a function that **calls itself** to solve a problem by breaking it into **smaller subproblems**.

Core interview definition:

> Recursion solves a problem by reducing it to **simpler versions of the same problem** until a **base case** is reached.

Two mandatory parts (must say in interview):

1. **Base case** → stops recursion
2. **Recursive case** → function calls itself

Without a base case → **infinite recursion**.

---

### 2. Why Recursion Is Used

Recursion is useful when a problem naturally fits a **divide-and-conquer** or **self-similar** structure.

Common use cases:

* Tree traversal
* Graph traversal
* Factorial / Fibonacci
* Backtracking (subsets, permutations)
* Parsing nested data (JSON, DOM)

Interview line:

> Recursion simplifies problems that have a repetitive structure.

---

### 3. Simple Example: Factorial

Factorial definition:

```
5! = 5 × 4 × 3 × 2 × 1
```

Recursive relation:

```
n! = n × (n − 1)!
```

---

### 4. Recursive Code Example (Classic)

```javascript
function factorial(n) {
  // Base case
  if (n === 0) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

Explanation step-by-step:

```
factorial(5)
= 5 * factorial(4)
= 5 * 4 * factorial(3)
= 5 * 4 * 3 * factorial(2)
= 5 * 4 * 3 * 2 * factorial(1)
= 5 * 4 * 3 * 2 * 1
```

---

### 5. Base Case Importance (Interview Emphasis)

If this is missing:

```javascript
function bad(n) {
  return n * bad(n - 1);
}
```

Result:

* Infinite calls
* Stack overflow error

Interview maturity line:

> Base case prevents infinite recursion and stack overflow.

---

### 6. Another Example: Sum of Array

```javascript
function sum(arr, index = 0) {
  // Base case
  if (index === arr.length) {
    return 0;
  }

  // Recursive case
  return arr[index] + sum(arr, index + 1);
}

console.log(sum([1, 2, 3, 4])); // 10
```

Shows:

* Problem reduced by one element each call
* Clear termination condition

---

### 7. Recursion vs Loop (Interview Comparison)

| Aspect      | Recursion                | Loop          |
| ----------- | ------------------------ | ------------- |
| Readability | High (for some problems) | High          |
| Memory      | Uses call stack          | Less memory   |
| Performance | Slightly slower          | Faster        |
| Risk        | Stack overflow           | No stack risk |

Interview insight:

> Recursion trades performance for clarity.

---

### 8. Call Stack Explanation (Interview Favorite)

Each recursive call is stored on the **call stack**.

Example:

```text
factorial(3)
factorial(2)
factorial(1)
factorial(0)
```

Then values return **back up** the stack.

This is why deep recursion can cause **stack overflow**.

---

### 9. Common Interview Traps

❌ Forgetting base case
❌ Modifying the problem incorrectly
❌ Using recursion when iteration is simpler

Correct mindset:

> Use recursion when the problem is naturally recursive.

---

### 10. Interview-Ready Summary

A recursive function is a function that calls itself to solve a problem by breaking it into smaller subproblems. It must have a base case to stop execution and a recursive case to reduce the problem. Recursion is commonly used for problems like factorials, tree traversal, and nested data processing, though it uses more memory due to the call stack.

---

### 11. Quick Practice Interview Questions

1. What is recursion?
2. Why is a base case important?
3. What happens if there is no base case?
4. How does the call stack work in recursion?
5. When should recursion be avoided?
6. Can recursion be replaced by loops?
7. What is stack overflow?

---

## **70. What is the time complexity of JavaScript operations?**

---

### 1. Concept

**Time complexity** describes **how the execution time of an operation grows** as the input size (`n`) increases.

In interviews, this question is **not about JavaScript syntax**, but about:

> Understanding the **underlying data structures and operations** used by JavaScript.

Important clarification:

> JavaScript itself doesn’t define time complexity —
> **the operations on data structures do**.

---

### 2. Big Picture: What Interviewers Expect

They expect you to know:

* Time complexity of **array operations**
* Time complexity of **object operations**
* Time complexity of **common methods**
* That complexity is **engine-independent at a high level**

---

## Part A: Array Operations

### 3. Time Complexity of Array Operations

| Operation                      | Time Complexity | Reason              |
| ------------------------------ | --------------- | ------------------- |
| Access (`arr[i]`)              | O(1)            | Direct index access |
| Push (`push`)                  | O(1)            | Add at end          |
| Pop (`pop`)                    | O(1)            | Remove from end     |
| Shift (`shift`)                | O(n)            | Re-indexing         |
| Unshift (`unshift`)            | O(n)            | Re-indexing         |
| Insert / Delete (middle)       | O(n)            | Elements must shift |
| Search (`includes`, `indexOf`) | O(n)            | Linear scan         |
| Loop (`for`, `forEach`)        | O(n)            | Visit each element  |

Interview line:

> Arrays are fast at the end, slow at the beginning.

---

### 4. Sorting an Array

```javascript
arr.sort();
```

Time complexity:

* **O(n log n)** (average and worst case)

Interview-safe statement:

> JavaScript sorting generally runs in O(n log n) time.

---

## Part B: Object Operations

### 5. Time Complexity of Object Operations

| Operation                           | Time Complexity |
| ----------------------------------- | --------------- |
| Access (`obj[key]`)                 | O(1)            |
| Insert (`obj[key] = value`)         | O(1)            |
| Delete (`delete obj[key]`)          | O(1)            |
| Search key (`in`, `hasOwnProperty`) | O(1)            |
| Iterate keys                        | O(n)            |

Why?

* Objects use **hash tables internally**

Interview maturity line:

> Objects provide constant-time access by key.

---

## Part C: Map and Set

### 6. Time Complexity of `Map` and `Set`

| Operation | Time Complexity |
| --------- | --------------- |
| Add       | O(1)            |
| Delete    | O(1)            |
| Has / Get | O(1)            |
| Iterate   | O(n)            |

Interview insight:

> `Map` and `Set` are optimized for frequent insertions and lookups.

---

## Part D: String Operations

### 7. Time Complexity of String Operations

| Operation           | Time Complexity           |
| ------------------- | ------------------------- |
| Access (`str[i]`)   | O(1)                      |
| Concatenation (`+`) | O(n)                      |
| Length (`length`)   | O(1)                      |
| Slice / Substring   | O(n)                      |
| Replace / Match     | O(n) (or more with regex) |

Interview note:

> Strings are immutable, so many string operations create new strings.

---

## Part E: Common JavaScript Methods

### 8. Time Complexity of Common Methods

| Method               | Time |
| -------------------- | ---- |
| `map()`              | O(n) |
| `filter()`           | O(n) |
| `reduce()`           | O(n) |
| `find()`             | O(n) |
| `some()` / `every()` | O(n) |
| `includes()`         | O(n) |

Interview line:

> Most array iteration methods are linear time.

---

## 9. Nested Operations (Very Important)

```javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // work
  }
}
```

Time complexity:

* **O(n²)**

Interview rule:

> Nested loops usually multiply time complexity.

---

## 10. Common Interview Traps

❌ “JavaScript is slow”
✔ Performance depends on algorithm, not language

❌ “Built-in methods are always optimized”
✔ They still follow fundamental complexity rules

❌ “O(1) means instant”
✔ It means **constant**, not zero time

---

## 11. How to Answer This in an Interview (Perfect Framing)

> “Time complexity in JavaScript depends on the data structure.
> Array access and push/pop are O(1), but shift/unshift are O(n).
> Object and Map operations like get and set are O(1).
> Sorting is typically O(n log n), and most iteration methods run in O(n).”

This answer shows **clarity + confidence**.

---

## 12. Interview-Ready Summary

The time complexity of JavaScript operations depends on the underlying data structures. Array access and end operations are O(1), while operations that require shifting elements are O(n). Object, Map, and Set operations generally provide O(1) access and insertion. Most array iteration methods run in O(n), and sorting operations typically take O(n log n). Understanding these complexities helps in writing efficient JavaScript code.

---

### 13. Quick Practice Interview Questions

1. Why is `shift()` O(n)?
2. Why are object lookups O(1)?
3. Time complexity of `map()`?
4. Difference between array and object access time?
5. Why is sorting O(n log n)?
6. What causes O(n²) complexity?
7. Does O(1) mean instant execution?

---
