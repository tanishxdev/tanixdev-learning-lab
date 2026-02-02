
# Function Scope (JavaScript)

## 1. What is Scope (Core Concept)

**Scope** defines **where a variable lives** and **who is allowed to access it**.

Think of scope as **visibility + lifetime** of variables.

If JavaScript were a building:

* **Global scope** = main lobby (everyone can see it)
* **Function scope** = private room
* **Block scope** = locked cupboard inside the room

JavaScript decides variable access based on **where the variable is declared**, not where it is used.

---

## 2. Why Scope Exists (Why JS Needs This)

Scope exists to:

* Prevent name collisions
* Protect internal data
* Make programs predictable
* Enable private variables
* Control memory usage

Without scope:

* Any function could modify any variable
* Bugs would be silent and dangerous
* Large codebases would collapse

---

## 3. Types of Scope in JavaScript (Big Picture)

JavaScript has:

1. **Global Scope**
2. **Function Scope**
3. **Block Scope**
4. **Nested Scope (Lexical Scope)**
5. **Special behavior with hoisting**

We will walk through each using your code.

---

## 4. Global Scope

### Concept

A variable declared **outside any function or block** is in **global scope**.

Global variables:

* Are created when the program starts
* Live until the program ends
* Are accessible everywhere

This is powerful but **dangerous if overused**.

---

### Global Scope – Code

```js
// Global variables - accessible everywhere
var globalVar = "I'm global";
let globalLet = "I'm also global";
const globalConst = "Me too!";

function showGlobals() {
    console.log(globalVar);   // Accessible
    console.log(globalLet);   // Accessible
    console.log(globalConst); // Accessible
}

showGlobals();
console.log(globalVar); // Also accessible here
```

### Explanation (Line by Line Thinking)

* `globalVar`, `globalLet`, `globalConst` are created in the **global execution context**
* Functions can **read** global variables
* Global variables can also be accessed outside functions
* `var`, `let`, and `const` all work globally, but behave differently with hoisting and redeclaration

---

## 5. Function Scope

### Concept

Variables declared **inside a function** are:

* Created when the function runs
* Destroyed when the function finishes
* Accessible **only inside that function**

This is the most important isolation mechanism in JavaScript.

---

### Function Scope – Code

```js
function myFunction() {
    var functionVar = "I'm in function scope";
    let functionLet = "Me too";
    const functionConst = "And me";
    
    console.log(functionVar);   // Works
    console.log(functionLet);   // Works
    console.log(functionConst); // Works
}

myFunction();
// console.log(functionVar); // Error! Not accessible outside
```

### Mental Model

Think of `myFunction` as a **sealed box**:

* Variables go inside the box
* Once the function finishes, the box is gone
* Outside code cannot peek inside

---

## 6. Block Scope (Important Difference Between var vs let/const)

### Concept

A **block** is anything inside `{ }`, like:

* `if`
* `for`
* `while`
* `switch`

Rules:

* `let` and `const` → block scoped
* `var` → NOT block scoped (function scoped)

---

### Block Scope – Code

```js
function testBlockScope() {
    if (true) {
        var varVariable = "I'm var";
        let letVariable = "I'm let";
        const constVariable = "I'm const";
    }
    
    console.log(varVariable);    // Works - var has function scope
    // console.log(letVariable); // Error - let has block scope
    // console.log(constVariable); // Error - const has block scope
}
```

### Why This Happens

* `var` ignores blocks and attaches itself to the **nearest function**
* `let` and `const` respect blocks and stay inside `{ }`

---

### Loop Block Scope – Code

```js
for (let i = 0; i < 3; i++) {
    // i is only accessible within this loop
    console.log(i);
}
// console.log(i); // Error! i is not accessible here
```

Here:

* `i` exists only during each loop iteration
* Prevents accidental reuse or bugs

---

## 7. Nested Function Scope (Lexical Scope)

### Concept

Inner functions can access variables of **outer functions**, but not vice versa.

This is called **lexical scoping**:

> Scope is decided by **where code is written**, not where it is called.

---

### Nested Scope – Code

```js
function outerFunction() {
    let outerVariable = "I'm in outer function";
    
    function innerFunction() {
        let innerVariable = "I'm in inner function";
        
        // Inner can access outer
        console.log(outerVariable);  // Works
        console.log(innerVariable);  // Works
        
        function deeperFunction() {
            // Can access all outer scopes
            console.log(outerVariable);  // Works
            console.log(innerVariable);  // Works
        }
        
        deeperFunction();
    }
    
    innerFunction();
    // console.log(innerVariable); // Error! Can't access inner scope
}

outerFunction();
```

### Mental Stack Model

```
Global
 └─ outerFunction
     └─ innerFunction
         └─ deeperFunction
```

Each inner level can see **everything above it**.

---

## 8. Variable Shadowing

### Concept

When a variable with the **same name** exists in multiple scopes:

* The **closest scope wins**
* Outer variables are temporarily hidden

---

### Variable Shadowing – Code

```js
let name = "Global John";

function testShadowing() {
    let name = "Function John"; // Shadows global name
    
    console.log(name); // "Function John"
    
    if (true) {
        let name = "Block John"; // Shadows function name
        console.log(name); // "Block John"
    }
    
    console.log(name); // "Function John" again
}

testShadowing();
console.log(name); // "Global John"
```

### Key Rule

Shadowing is **legal**, but:

* Can confuse readers
* Should be used carefully

---

## 9. Hoisting and Scope (Critical Concept)

### Concept

Hoisting = JavaScript **moves declarations to the top** of their scope **before execution**.

But:

* `var` is hoisted and initialized as `undefined`
* `let` and `const` are hoisted but **not accessible** before declaration (TDZ)

---

### Hoisting – Code

```js
// var hoisting
console.log(hoistedVar); // undefined (not error)
var hoistedVar = "I'm hoisted";
```

```js
// let/const hoisting (Temporal Dead Zone)
// console.log(hoistedLet); // ReferenceError
let hoistedLet = "I'm not accessible before declaration";
```

---

### Function Hoisting – Code

```js
sayHello(); // Works! Function declarations are fully hoisted

function sayHello() {
    console.log("Hello!");
}
```

```js
// Function expression hoisting
// sayGoodbye(); // Error! Cannot access before initialization
const sayGoodbye = function() {
    console.log("Goodbye!");
};
```

---

## 10. Practical Scope Examples (Why This Matters)

### Private State Using Scope

```js
function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}
```

Here:

* `count` cannot be accessed directly
* Only controlled access is allowed

---

### Module Pattern

```js
const userModule = (function() {
    let users = []; // Private array
    
    return {
        addUser: function(user) {
            users.push(user);
        },
        getUsers: function() {
            return [...users]; // Return copy, not original
        },
        getUserCount: function() {
            return users.length;
        }
    };
})();
```

This is **scope-based encapsulation**, used heavily before ES modules.

---

## 11. Common Scope Pitfalls

### var in Loops

```js
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Prints 3, 3, 3
    }, 100);
}
```

Why:

* `var` has one shared binding
* Loop finishes → `i = 3`

---

### Correct Solutions

```js
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}
```

```js
for (var i = 0; i < 3; i++) {
    (function(index) {
        setTimeout(function() {
            console.log(index);
        }, 100);
    })(i);
}
```

---

### Accidental Globals

```js
function createUser() {
    name = "John"; // Becomes global
    let age = 25;
}
```

This happens because:

* Missing `let/var/const`
* JS assumes global assignment

---

## 12. Best Practices (How Seniors Write Scope-Safe JS)

```js
// Always declare variables
// Prefer const
// Keep scope tight
// Use functions for privacy
```

Your examples already demonstrate:

* Narrow scope
* Controlled access
* Predictable behavior

---

## Final Mental Summary

* Scope = visibility + lifetime
* JS uses lexical scoping
* `var` = function scoped
* `let/const` = block scoped
* Inner scopes can access outer, not reverse
* Scope enables privacy, safety, and structure
