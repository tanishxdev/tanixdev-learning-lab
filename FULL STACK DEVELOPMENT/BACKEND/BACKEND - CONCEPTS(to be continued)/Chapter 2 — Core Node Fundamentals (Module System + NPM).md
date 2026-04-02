# Chapter 2 — Core Node Fundamentals (Module System + NPM)

---

# 1. Problem (Why this chapter exists)

You wrote everything in **one file (`app.js`)** till now.

### ❌ Problem

- Code becomes messy
- No reusability
- Difficult to scale
- Hard to maintain in real projects

Example:

```js
// Imagine everything in one file → BAD
function add() {}
function subtract() {}
function loginUser() {}
function connectDB() {}
```

This is NOT how real backend works.

---

# 2. Concept (Core Idea)

## 🧠 Definition — Module System

> A **module** is a file that contains code which can be **exported and reused** in other files.

---

## 🧠 Goal

Break code into small pieces:

```bash
math.js      → logic
auth.js      → login logic
app.js       → main entry
```

---

# 3. Solution (How Node solves it)

Node provides:

- `require()` → import module
- `module.exports` → export module

---

# 4. Module System Deep Dive

---

## 🧠 Types of Modules

### 1. Core Modules (built-in)

- fs
- http
- path

### 2. Local Modules (your files)

- `./math.js`

### 3. Third-party Modules

- installed via npm

---

# 5. Example — Creating Your First Module

---

## 📄 Step 1: Create `math.js`

```javascript
// ================================
// math.js → This is a module
// ================================

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract
function subtract(a, b) {
  return a - b;
}

// Export functions so other files can use them
module.exports = {
  add,
  subtract,
};
```

---

## 📄 Step 2: Use it in `app.js`

```javascript
// ================================
// app.js → Main file
// ================================

// Import the module
const math = require("./math");

// Use functions
const sum = math.add(5, 3);
const diff = math.subtract(10, 4);

console.log("Sum:", sum);
console.log("Difference:", diff);
```

---

## ▶️ Run

```bash
node app.js
```

---

## ✅ Output

```
Sum: 8
Difference: 6
```

---

# 6. Behind the Scenes (VERY IMPORTANT)

When you do:

```js
const math = require("./math");
```

Node does:

```text
1. Finds file (math.js)
2. Wraps code in function
3. Executes it
4. Returns module.exports object
```

---

# 7. Different Ways to Export

---

## ✅ Way 1 (Recommended)

```js
module.exports = {
  add,
  subtract,
};
```

---

## ✅ Way 2 (Direct export)

```js
exports.add = add;
exports.subtract = subtract;
```

---

## ⚠️ Mistake (VERY IMPORTANT)

```js
exports = { add }; ❌ (WILL NOT WORK)
```

✔ Correct:

```js
module.exports = { add };
```

---

# 8. Node Package Manager (NPM)

---

# 🧠 Problem

You can't write everything from scratch.

Example:

- Need express server
- Need database library
- Need validation tools

---

# 🧠 Concept

> **NPM = Package Manager for JavaScript**

- Install libraries
- Manage dependencies
- Share code

---

# 9. Initializing Project (IMPORTANT STEP)

---

## ▶️ Command

```bash
npm init -y
```

---

## 📄 Creates:

```json
{
  "name": "backend-learning",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {},
  "dependencies": {}
}
```

---

## 🧠 Meaning

| Field        | Meaning            |
| ------------ | ------------------ |
| name         | project name       |
| version      | version            |
| main         | entry file         |
| scripts      | commands           |
| dependencies | installed packages |

---

# 10. Installing Package

---

## ▶️ Example

```bash
npm install lodash
```

---

## 📁 What happens?

```
backend-learning/
│
├── node_modules/   → all installed packages
├── package.json    → dependencies list
├── package-lock.json → exact versions
```

---

## 📄 Use it

```javascript
// Import lodash
const _ = require("lodash");

// Use function
const arr = [1, 2, 3, 4];
const reversed = _.reverse(arr);

console.log(reversed);
```

---

# 11. Important NPM Concepts

---

## 🧠 Dependencies vs DevDependencies

```bash
npm install express          → dependency
npm install nodemon -D       → devDependency
```

---

## 🧠 Scripts

```json
"scripts": {
  "start": "node app.js"
}
```

Run:

```bash
npm start
```

---

# 12. Mini Practice (DO THIS)

---

## 📁 Folder Structure

```
backend-learning/
│
├── app.js
├── math.js
├── package.json
```

---

## 📄 math.js

```javascript
// Module for operations

function multiply(a, b) {
  return a * b;
}

module.exports = { multiply };
```

---

## 📄 app.js

```javascript
// Import module
const math = require("./math");

// Use function
console.log("Multiply:", math.multiply(4, 5));
```

---

## ▶️ Run

```bash
node app.js
```

---

# 13. Common Mistakes

---

### ❌ Wrong path

```js
require("math"); ❌
```

✔ Correct:

```js
require("./math");
```

---

### ❌ Forgetting exports

```js
function add() {}
// Not exported → can't use outside
```

---

### ❌ Deleting node_modules manually

✔ Instead:

```bash
npm install
```

---

# 14. Mental Model (Very Important)

Think like this:

```text
Project = Collection of modules

Modules connect using:
require() + module.exports

NPM = external modules
```

---

# 15. Final Files (Your Setup)

---

## 📄 math.js

```javascript
// ================================
// math.js → Custom Module
// ================================

// Multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Export function
module.exports = { multiply };
```

---

## 📄 app.js

```javascript
// ================================
// app.js → Main Entry
// ================================

// Import custom module
const math = require("./math");

// Use function
const result = math.multiply(6, 7);

// Print result
console.log("Result:", result);
```

---

## 📄 package.json

```json
{
  "name": "backend-learning",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  }
}
```

---

# 16. Interview Questions

1. What is module in Node.js?
2. Difference between require and import?
3. What is module.exports?
4. Difference between exports and module.exports?
5. What is npm?
6. What is package.json?
7. What is node_modules?
8. What is dependency vs devDependency?
9. How Node resolves modules?
10. What happens internally in require()?

---

# ✅ Summary (Clear Thinking)

- Big problem → messy code
- Solution → modular architecture
- Node gives:
  - module system
  - npm ecosystem

Now you can:

- Structure backend properly
- Use external libraries

---
