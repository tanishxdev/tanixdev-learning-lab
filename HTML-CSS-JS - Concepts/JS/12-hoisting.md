

# Hoisting (JavaScript)

## 1. Core Concept (What Hoisting REALLY is)

**Hoisting is NOT JavaScript physically moving code.**

Hoisting is a result of **JavaScript’s execution model**, which works in **two phases**:

### Phase 1 — Creation Phase (Memory Allocation)

Before running your code, JavaScript:

* Scans the entire scope (global / function / block)
* Allocates memory for:

  * variables (`var`, `let`, `const`)
  * functions
  * classes

### Phase 2 — Execution Phase

* Code runs line by line
* Assignments happen
* Function calls execute

Hoisting happens because **memory is allocated before execution**.

---

## 2. Mental Model (How to Think About Hoisting)

Think of JavaScript like this:

> “Before running your code, I need to know **what exists** in this scope.”

So JavaScript asks:

* What variables exist?
* What functions exist?
* Where are the boundaries of scope?

But:

* `var` gets **memory + initialized to `undefined`**
* `let` / `const` get **memory but NOT initialized**
* Functions (declarations) get **fully initialized**
* Classes behave like `let` (memory, no initialization)

---

## 3. Algorithm / Internal Logic Flow

For a given scope:

1. Scan entire scope
2. Register declarations
3. Allocate memory
4. Initialize based on type
5. Start executing code top-to-bottom

---

## 4. Variable Hoisting

### `var` Hoisting

```js
// What you write:
console.log(myVar); // undefined (not an error!)
var myVar = 5;
console.log(myVar); // 5
```

### How JavaScript actually executes it

```js
// Step 1: Memory allocation phase
var myVar; // declared + initialized to undefined

// Step 2: Execution phase
console.log(myVar); // undefined
myVar = 5;          // assignment happens here
console.log(myVar); // 5
```

### Key Understanding

* `var` is hoisted **and initialized**
* Accessing it before assignment gives `undefined`
* No error → dangerous and confusing

---

## 5. `let` and `const` Hoisting (Temporal Dead Zone)

```js
console.log(myLet); // ReferenceError
let myLet = 10;

console.log(myConst); // ReferenceError
const myConst = 20;
```

### What happens internally

* Memory is allocated for `myLet` and `myConst`
* BUT they are **not initialized**
* Access before initialization → **ReferenceError**

This phase is called **Temporal Dead Zone (TDZ)**

### TDZ Example

```js
function example() {
    // TDZ starts here
    console.log(x); // ReferenceError
    let x = 5;      // TDZ ends here
    console.log(x); // 5
}
```

### Important Rule

* TDZ exists from **start of scope** until **declaration line**
* Even `typeof x` fails in TDZ

---

## 6. Function Hoisting

### Function Declarations (Fully Hoisted)

```js
sayHello(); // Works

function sayHello() {
    console.log("Hello!");
}
```

```js
console.log(add(2, 3)); // Works

function add(a, b) {
    return a + b;
}
```

### Why this works

* Function declarations are:

  * Allocated memory
  * Fully initialized
  * Available before execution starts

---

## 7. Function Expressions (NOT Hoisted)

```js
sayGoodbye(); // TypeError

var sayGoodbye = function() {
    console.log("Goodbye!");
};
```

### Internal view

```js
var sayGoodbye; // initialized as undefined
sayGoodbye();  // trying to call undefined → TypeError
```

### Arrow Functions

```js
multiply(2, 3); // TypeError

const multiply = (a, b) => a * b;
```

Reason:

* Arrow functions are **function expressions**
* Behave like variables, not declarations

---

## 8. Hoisting in Different Scopes

### Global Scope

```js
console.log(globalVar); // undefined
var globalVar = "I'm global";

console.log(globalFunc()); // Works

function globalFunc() {
    return "Global function";
}
```

* `var` → global object property
* functions → available immediately

---

### Function Scope

```js
function example() {
    console.log(localVar); // undefined
    var localVar = "I'm local";

    console.log(innerFunc()); // Works

    function innerFunc() {
        return "Inner function";
    }
}

example();
```

* `var` hoisted inside function
* inner functions hoisted within function

---

### Block Scope

```js
function blockScopeExample() {
    console.log(x); // undefined

    if (true) {
        var x = 1;
        let y = 2;
        const z = 3;
    }

    console.log(x); // 1
    // y and z not accessible here
}
```

Key idea:

* `var` ignores blocks
* `let` / `const` respect blocks

---

## 9. Practical Mistakes (Why Hoisting Causes Bugs)

### Mistake 1 — Treating `let` like `var`

```js
function mistake1() {
    console.log(name); // ReferenceError
    let name = "John";
}
```

---

### Mistake 2 — Function expression confusion

```js
function mistake2() {
    console.log(typeof myFunc); // undefined
    console.log(myFunc);        // undefined

    var myFunc = function() {
        return "Hello";
    };

    console.log(typeof myFunc); // function
}
```

---

### Mistake 3 — Loop + async issue

```js
function mistake3() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i); // 3, 3, 3
        }, 100);
    }
    console.log(i); // 3
}
```

Reason:

* Single `i` shared across loop
* Callback runs after loop ends

---

## 10. Best Practices (Correct Mental Model)

### Declare at top

```js
function goodExample() {
    let name, age, city;

    name = "Alice";
    age = 25;
    city = "New York";

    return `${name}, ${age}, from ${city}`;
}
```

---

### Prefer `let` / `const`

```js
function betterExample() {
    const users = [];
    let currentUser = null;

    for (let i = 0; i < 5; i++) {
        users.push(`User ${i}`);
    }

    return users;
}
```

---

## 11. Temporal Dead Zone (Deep Understanding)

```js
function temporalDeadZoneExample() {
    console.log(typeof x); // ReferenceError
    let x = 5;
    console.log(x);
}
```

Even `typeof` fails → TDZ is strict.

### TDZ with parameters

```js
function parameterTDZ(a = b, b = 2) {
    return a + b;
}
```

Because:

* Parameters are evaluated left to right
* `b` not initialized when `a` runs

```js
function parameterFixed(a = 1, b = a + 1) {
    return a + b;
}
```

---

## 12. Hoisting with Classes

```js
console.log(MyClass); // ReferenceError

class MyClass {
    constructor(name) {
        this.name = name;
    }
}
```

Classes:

* Hoisted
* Not initialized
* Behave like `let`

```js
console.log(MyClassExpr); // undefined
var MyClassExpr = class {
    constructor(name) {
        this.name = name;
    }
};
```

Class expressions behave like variables.

---

## 13. Interview-Level Questions Explained

### Question 1

```js
var a = 1;
function test() {
    console.log(a); // undefined
    var a = 2;
    console.log(a); // 2
}
test();
```

Why:

* Local `a` hoisted
* Shadows global `a`

---

### Question 2

```js
function question2() {
    console.log(foo); // function

    var foo = "first";

    function foo() {
        return "second";
    }

    console.log(foo); // "first"
}
```

Order:

1. Function declaration
2. `var` declaration
3. Assignment during execution

---

### Fixing Loop Issue

```js
function fixed1() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100);
    }
}
```

```js
function fixed2() {
    for (var i = 0; i < 3; i++) {
        (function(j) {
            setTimeout(function() {
                console.log(j);
            }, 100);
        })(i);
    }
}
```

---

## 14. Final Rules to Remember

1. `var` → hoisted + initialized → dangerous
2. `let` / `const` → hoisted + TDZ → safe
3. Function declarations → fully hoisted
4. Function expressions → not callable early
5. Classes → TDZ applies
6. Hoisting is **scope-based**, not file-based

---