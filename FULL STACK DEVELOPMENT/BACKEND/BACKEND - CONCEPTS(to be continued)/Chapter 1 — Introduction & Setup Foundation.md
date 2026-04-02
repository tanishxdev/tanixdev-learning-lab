# Chapter 1 — Introduction & Setup Foundation

---

# 1. Problem (Why this chapter exists)

Before backend, ask yourself:

- Browser → runs JavaScript (frontend)
- But backend needs:
  - File handling
  - Database connection
  - Server creation
  - APIs

### ❌ Problem

JavaScript was **only working inside browser**

So:

- Cannot create server
- Cannot access system files
- Cannot build backend

---

# 2. Concept (Core Idea)

## 🧠 Definition — Node.js

**Node.js = JavaScript runtime outside browser**

- Built on Chrome's V8 engine
- Allows JS to run on:
  - Server
  - Terminal
  - OS level

---

## 🧠 Backend Flow (Big Picture)

```
Client (React / Browser)
        ↓
Request (HTTP)
        ↓
Server (Node.js)
        ↓
Response (Data / JSON)
```

---

# 3. Solution (What Node solves)

Node gives you:

| Problem                      | Node Solution  |
| ---------------------------- | -------------- |
| Can't run JS outside browser | Node runtime   |
| Can't access files           | fs module      |
| Can't create server          | http / express |
| Can't manage dependencies    | npm            |

---

# 4. Installing Node.js

## 🧠 Concept

Node installation gives:

- `node` → run JS
- `npm` → install packages

---

## ✅ Step-by-step

1. Go to official site: [https://nodejs.org](https://nodejs.org)
2. Install **LTS version**
3. Verify:

```bash
node -v
npm -v
```

---

## 🧠 What happens internally?

- Node installs:
  - V8 engine
  - Core modules (fs, http, path)
  - Package manager (npm)

---

# 5. Running JavaScript with Node

---

# 🧠 Problem

How to run JS without browser?

---

# 🧠 Concept

Node executes `.js` files directly

---

## ✅ Example 1 — Basic JS file

### 📄 `app.js`

```javascript
// This is a simple JS file running in Node

// console.log prints output in terminal
console.log("Hello from Node.js");
```

---

## ▶️ Run

```bash
node app.js
```

---

## ✅ Output

```
Hello from Node.js
```

---

# 6. Behind the Scenes (Important)

When you run:

```bash
node app.js
```

### Internally:

1. Node reads file
2. Passes code to V8 engine
3. V8 compiles JS → machine code
4. Executes it
5. Output goes to terminal

---

# 7. Global Objects in Node

---

## 🧠 Concept

Node gives global objects (like browser has `window`)

---

### Example:

```javascript
// __dirname → current folder path
console.log(__dirname);

// __filename → current file path
console.log(__filename);
```

---

## 🧠 Output (example)

```
/Users/tanish/backend
/Users/tanish/backend/app.js
```

---

# 8. Important Difference (Browser vs Node)

| Feature       | Browser | Node    |
| ------------- | ------- | ------- |
| Global object | window  | global  |
| DOM access    | Yes     | No      |
| File system   | No      | Yes     |
| Use case      | UI      | Backend |

---

# 9. Mini Practice (DO THIS IN SAME REPO)

## 📁 Step 1: Create folder

```
backend-learning/
```

---

## 📁 Step 2: Create file

```
app.js
```

---

## 📄 Code

```javascript
// Print your name
console.log("My name is Tanish");

// Print current folder path
console.log("Directory:", __dirname);

// Print current file path
console.log("File:", __filename);
```

---

## ▶️ Run

```bash
node app.js
```

---

# 10. Common Mistakes

### ❌ Mistake 1

Running file like:

```bash
app.js
```

✔ Correct:

```bash
node app.js
```

---

### ❌ Mistake 2

Not installing Node properly

✔ Fix:
Check version:

```bash
node -v
```

---

### ❌ Mistake 3

Thinking Node = framework

✔ Reality:

- Node = runtime
- Express = framework

---

# 11. Mental Model (Very Important)

Think like this:

```
JavaScript (Language)
        ↓
Node.js (Engine + Environment)
        ↓
Backend (Server, APIs, DB)
```

---

# 12. Final File (Your Starting Point)

### 📄 `app.js`

```javascript
// ================================
// Chapter 1 - Node Basics
// ================================

// 1. Basic output
console.log("Hello Backend World");

// 2. Understanding global variables

// __dirname → gives current folder path
console.log("Current Directory:", __dirname);

// __filename → gives current file path
console.log("Current File:", __filename);

// 3. Simple logic to show Node can run JS

// Define a function
function greet(name) {
  // Return a greeting message
  return "Hello " + name;
}

// Call the function
const message = greet("Tanish");

// Print the result
console.log(message);
```

---

# 13. Interview Questions

1. What is Node.js?
2. Difference between Node and browser JS?
3. What is V8 engine?
4. What are global objects in Node?
5. How Node executes JS code?
6. Is Node single-threaded?
7. Why Node is fast?
8. Can Node access DOM?
9. What is npm?
10. Where is Node used?

---

# ✅ Summary (Clear Thinking)

- JS alone → frontend only
- Node → makes JS backend capable
- You can now:
  - Run JS files
  - Access system
  - Build server (next chapters)
