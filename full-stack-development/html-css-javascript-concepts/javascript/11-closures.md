# Closures (JavaScript)

## 1. Core Concept (What is a Closure)

A **closure** is formed when:

- A function is **defined inside another function**
- The inner function **uses variables of the outer function**
- The inner function is **returned or used later**
- Even after the outer function finishes execution,
  **those variables are NOT destroyed**

In short:

> A closure allows a function to **remember and access its outer scope variables**, even after the outer function has finished running.

This behavior exists because JavaScript functions **carry a reference to their lexical environment**, not just values.

---

## 2. Mental Model (How to Think About Closures)

Think like this:

- Every function in JavaScript has a **backpack**
- This backpack stores references to variables it needs from outside
- When the function is returned or passed around, the backpack goes with it
- Garbage Collection **does NOT delete those variables** as long as the function exists

So:

- Function + remembered variables = **closure**

---

## 3. Basic Closure Example (Your Code + Deep Explanation)

```js
function outerFunction(x) {
  // Outer function's variable
  let outerVariable = x;

  // Inner function has access to outerVariable
  function innerFunction(y) {
    return outerVariable + y;
  }

  return innerFunction;
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8 (5 + 3)
```

### Step-by-step execution

1. `outerFunction(5)` is called
2. `outerVariable = 5` is created
3. `innerFunction` is defined (but not executed yet)
4. `innerFunction` is **returned**
5. `outerFunction` finishes execution
6. Normally variables should be destroyed…
7. BUT `innerFunction` still references `outerVariable`
8. So JavaScript **keeps `outerVariable` alive**

When `addFive(3)` runs:

- `outerVariable` is fetched from memory
- `5 + 3 = 8`

This is a closure.

---

## 4. How Closures Work Internally (Your Example)

```js
function createGreeting(greeting) {
  // This variable is "captured" by the closure
  return function (name) {
    return greeting + ", " + name + "!";
  };
}

const sayHello = createGreeting("Hello");
const sayGoodbye = createGreeting("Goodbye");

console.log(sayHello("Alice")); // "Hello, Alice!"
console.log(sayGoodbye("Bob")); // "Goodbye, Bob!"
```

### Important concept here

- Each call to `createGreeting` creates:
  - A **new execution context**
  - A **new memory space**

- Each returned function closes over **its own `greeting`**

So:

- `sayHello` remembers `"Hello"`
- `sayGoodbye` remembers `"Goodbye"`
- They do **not interfere**

Closures are **instance-based**, not shared unless explicitly shared.

---

## 5. Practical Use Case 1: Counter (State Preservation)

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1
console.log(counter1()); // 3
```

### Why this works

- `count` lives inside `createCounter`
- Only the returned function can access it
- Each call to `createCounter()` creates a **new private state**

This is **function-level encapsulation**, similar to private fields in classes.

---

## 6. Practical Use Case 2: Private Variables

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      }
      return "Invalid amount";
    },

    withdraw: function (amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },

    getBalance: function () {
      return balance;
    },
  };
}
```

### Key idea

- `balance` is NOT accessible directly
- Only controlled access via methods
- This mimics **data hiding**

This is how closures provide **security + integrity**.

## 7. Function Factory Pattern

```js
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
```

Each returned function:

- Locks its own `multiplier`
- Behaves as a specialized function

```js
const double = createMultiplier(2);
const triple = createMultiplier(3);
```

This is how reusable logic is generated dynamically.

---

## 8. Closures + Loops (Common Pitfall)

### Problem case

```js
function createFunctions() {
  let functions = [];

  for (var i = 0; i < 3; i++) {
    functions.push(function () {
      return i;
    });
  }

  return functions;
}
```

### Why all return `3`

- `var` has **function scope**
- There is **only one `i`**
- All closures reference the same `i`
- Loop finishes → `i = 3`
- All functions return `3`

---

### Solution 1: `let` (Block Scope)

```js
for (let i = 0; i < 3; i++) {
  functions.push(function () {
    return i;
  });
}
```

- `let` creates a **new binding per iteration**
- Each closure captures its own `i`

---

### Solution 2: IIFE (Manual Closure Creation)

```js
for (var i = 0; i < 3; i++) {
  functions.push(
    (function (index) {
      return function () {
        return index;
      };
    })(i),
  );
}
```

- IIFE creates a new scope
- `index` becomes a fixed snapshot

---

## 9. Module Pattern with Closures

```js
const todoModule = (function () {
  let todos = [];
  let nextId = 1;

  return {
    add: function (text) {
      const todo = {
        id: nextId++,
        text: text,
        completed: false,
      };
      todos.push(todo);
      return todo;
    },

    complete: function (id) {
      const todo = todos.find((t) => t.id === id);
      if (todo) {
        todo.completed = true;
        return todo;
      }
      return null;
    },

    getAll: function () {
      return [...todos];
    },

    getCompleted: function () {
      return todos.filter((t) => t.completed);
    },

    remove: function (id) {
      const index = todos.findIndex((t) => t.id === id);
      if (index > -1) {
        return todos.splice(index, 1)[0];
      }
      return null;
    },
  };
})();
```

### Why this pattern is powerful

- Private state (`todos`, `nextId`)
- Public API (returned object)
- No global pollution
- Controlled mutation

This is the foundation of **libraries before ES6 modules**.

---

## 10. Closures in Event Handlers

```js
function setupButtons() {
  const buttons = document.querySelectorAll(".btn");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      console.log(`Button ${i} clicked`);
    });
  }
}
```

Here:

- Each click handler remembers its `i`
- Closure ensures correct index

Improved version:

```js
function createButtonHandler(buttonIndex, buttonElement) {
  return function () {
    console.log(`Button ${buttonIndex} clicked`);
    buttonElement.style.backgroundColor = "blue";
  };
}
```

This separates:

- Logic creation
- Event binding

---

## 11. Memoization Using Closures

```js
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log("Cache hit!");
      return cache[key];
    }

    console.log("Computing...");
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}
```

### Why closure is essential here

- `cache` persists across calls
- Cache is private
- No external mutation

This is a **performance optimization pattern**.

---

## 12. State Management via Closures

```js
function createState(initialState) {
  let state = { ...initialState };
  const listeners = [];

  return {
    getState: () => ({ ...state }),

    setState: function (newState) {
      state = { ...state, ...newState };
      listeners.forEach((listener) => listener(state));
    },

    subscribe: function (listener) {
      listeners.push(listener);
      return function unsubscribe() {
        const index = listeners.indexOf(listener);
        if (index > -1) {
          listeners.splice(index, 1);
        }
      };
    },
  };
}
```

This pattern is the conceptual base of:

- Redux
- Zustand
- Vue reactivity
- Custom state stores

---

## 13. Memory Considerations (Very Important)

```js
function createHandler() {
  const largeData = new Array(1000000).fill("data");

  return function () {
    console.log("Handler called");
  };
}
```

Problem:

- Closure keeps `largeData` alive
- Causes memory leak if not cleaned

Optimized:

```js
function createHandlerOptimized() {
  const largeData = new Array(1000000).fill("data");
  const neededValue = largeData.length;

  return function () {
    console.log(`Handler called, data size: ${neededValue}`);
  };
}
```

Rule:

> Capture **only what you need**, not everything in scope.

---

## 14. When to Use Closures (Real World)

Use closures when you need:

- Private variables
- Persistent state
- Function factories
- Controlled APIs
- Memoization
- Event-specific data binding

Avoid misuse when:

- Capturing large unused objects
- Long-lived listeners without cleanup

---

## Summary Mental Model

- Closures = function + remembered scope
- JavaScript remembers **references**, not values
- Closures are everywhere (callbacks, hooks, handlers)
- Mastering closures = mastering JavaScript behavior

---
