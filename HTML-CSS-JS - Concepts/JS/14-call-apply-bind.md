# Call, Apply, Bind — Deep Conceptual & Practical

---

## 0. Why do `call`, `apply`, `bind` even exist?

Before learning syntax, understand the **problem**.

### Core problem

In JavaScript:

* Functions are **first-class values**
* They can be **passed around**
* They can **lose their owner**

When a function loses its owner, it also loses its `this`.

```js
const user = {
    name: "Alice",
    greet: function () {
        console.log(this.name);
    }
};

const fn = user.greet;
fn(); // this is NOT user anymore
```

So JS needed **tools to manually control `this`**.

That’s why we have:

* `call`
* `apply`
* `bind`

---

## 1. Big Mental Model (memorize this)

All three do **one thing**:

> **They manually set what `this` should be inside a function**

Difference is **how and when** the function is executed.

| Method | Executes immediately? | Arguments       | Returns         |
| ------ | --------------------- | --------------- | --------------- |
| call   | Yes                   | comma-separated | function result |
| apply  | Yes                   | array           | function result |
| bind   | No                    | comma-separated | new function    |

---

## 2. `call()` — Immediate execution with custom `this`

### Syntax

```js
functionName.call(thisArg, arg1, arg2, ...)
```

### Concept

* Executes the function **immediately**
* Sets `this` to `thisArg`
* Passes arguments **one by one**

---

### Example: Basic Understanding

```js
function greet(greeting, punctuation) {
    // `this` depends on how greet is called
    return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "Alice" };

// `call` forces `this` to be `person`
console.log(greet.call(person, "Hello", "!"));
console.log(greet.call(person, "Hi", "."));
```

### Step-by-step execution

For:

```js
greet.call(person, "Hello", "!");
```

Internally JS behaves like:

```js
person.greet = greet;
person.greet("Hello", "!");
```

Then deletes `person.greet`.

---

### Without `call` (problem)

```js
console.log(greet("Hello", "!"));
```

Why output is wrong:

* `this` → global / undefined
* `this.name` → undefined

---

## 3. `apply()` — Same as `call`, arguments as array

### Syntax

```js
functionName.apply(thisArg, [arg1, arg2, ...])
```

### Concept

* Executes **immediately**
* Only difference from `call`:

  * Arguments are passed as **array**

---

### Example

```js
function introduce(greeting, age, city) {
    return `${greeting}, I'm ${this.name}, ${age} years old from ${city}`;
}

const user = { name: "Bob" };
const args = ["Hi", 25, "New York"];

console.log(introduce.apply(user, args));
```

### Why `apply` exists

Because sometimes arguments:

* Already come as an array
* Are dynamic
* Are collected using `arguments` or rest parameters

---

### `call` vs `apply` (same result)

```js
introduce.call(user, "Hi", 25, "New York");
introduce.apply(user, ["Hi", 25, "New York"]);
```

Only **argument format differs**.

---

## 4. `bind()` — Permanent `this` binding (most important)

### Syntax

```js
const newFn = functionName.bind(thisArg, arg1, arg2, ...)
```

### Concept

* Does **NOT execute immediately**
* Returns a **new function**
* `this` is **permanently fixed**
* Original function remains unchanged

---

### Basic Example

```js
function sayHello() {
    return `Hello, ${this.name}!`;
}

const person1 = { name: "Charlie" };
const person2 = { name: "Diana" };

const sayHelloToCharlie = sayHello.bind(person1);
const sayHelloToDiana = sayHello.bind(person2);

console.log(sayHelloToCharlie());
console.log(sayHelloToDiana());
```

### Why original function fails

```js
console.log(sayHello());
```

Because:

* `this` is not bound
* `this.name` → undefined

---

## 5. Borrowing Methods (Very Important Pattern)

### Problem

You want to **reuse a method** for another object.

---

### Example

```js
const person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

const anotherPerson = {
    firstName: "Jane",
    lastName: "Smith"
};

// Borrow method
console.log(person.getFullName.call(anotherPerson));
```

### Mental model

* Method logic is reusable
* `this` makes it dynamic

---

### Array-like Objects

```js
const arrayLike = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
};

// Borrow Array method
const realArray = Array.prototype.slice.call(arrayLike);
console.log(realArray);
```

Why this works:

* `slice` only needs:

  * numeric keys
  * length
* `call` injects `this`

---

## 6. Finding max/min using `apply`

### Problem

```js
Math.max([1,2,3]); // ❌
```

Because `Math.max` expects:

```js
Math.max(a, b, c)
```

---

### Solution

```js
const numbers = [5, 2, 8, 1, 9];

const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);

console.log(max);
console.log(min);
```

Why `null`?

* `Math.max` does not use `this`
* So `thisArg` is irrelevant

---

### Modern Alternative

```js
Math.max(...numbers);
Math.min(...numbers);
```

---

## 7. `bind` in Event Handlers (CRITICAL REAL USE)

### Problem

```js
this.handleClick
```

Loses context when passed as callback.

---

### Class Example

```js
class Button {
    constructor(element) {
        this.element = element;
        this.clickCount = 0;

        // Binding once in constructor
        this.element.addEventListener(
            'click',
            this.handleClick.bind(this)
        );
    }

    handleClick() {
        this.clickCount++;
        console.log(`Button clicked ${this.clickCount} times`);
    }
}
```

Why bind here:

* Event system calls the function
* `this` would otherwise point to DOM element

---

## 8. Partial Application with `bind`

### Concept

Fix **some arguments now**, pass rest later.

---

### Example

```js
function multiply(a, b, c) {
    return a * b * c;
}

const multiplyByTwo = multiply.bind(null, 2);
const multiplyByTwoAndThree = multiply.bind(null, 2, 3);

console.log(multiplyByTwo(5, 3));
console.log(multiplyByTwoAndThree(4));
```

### Why useful

* Reusable specialized functions
* Cleaner APIs
* Avoid repeated arguments

---

### API Example

```js
function apiCall(method, url, data) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });
}

const postRequest = apiCall.bind(null, 'POST');
const putRequest = apiCall.bind(null, 'PUT');

postRequest('/api/users', { name: 'John' });
putRequest('/api/users/1', { name: 'Jane' });
```

---

## 9. Advanced Pattern: Method Chaining + bind

```js
const calculator = {
    value: 0,

    add: function (n) {
        this.value += n;
        return this;
    },

    multiply: function (n) {
        this.value *= n;
        return this;
    },

    getValue: function () {
        return this.value;
    }
};

const add5 = calculator.add.bind(calculator, 5);
const multiply2 = calculator.multiply.bind(calculator, 2);

add5();
multiply2();
console.log(calculator.getValue());
```

Why this works:

* `this` always points to calculator
* State remains consistent

---

## 10. Function Composition using `call`

```js
function compose(f, g) {
    return function (x) {
        return f.call(this, g.call(this, x));
    };
}

const addOne = x => x + 1;
const double = x => x * 2;

const addOneThenDouble = compose(double, addOne);
console.log(addOneThenDouble(3));
```

Key idea:

* Preserve `this`
* Chain behaviors safely

---

## 11. Debouncing with `apply` + `bind`

```js
function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const searchHandler = {
    query: '',

    search: function (term) {
        this.query = term;
        console.log(`Searching for: ${this.query}`);
    }
};

const debouncedSearch =
    debounce(searchHandler.search.bind(searchHandler), 300);

const searchInput = document.querySelector('#search');
searchInput?.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});
```

Why both are needed:

* `bind` → fix `this`
* `apply` → forward arguments

---

## 12. Utility Patterns (Production-Level)

```js
const log = console.log.bind(console);
const warn = console.warn.bind(console);
const error = console.error.bind(console);

log('This is a log message');
warn('This is a warning');
error('This is an error');
```

---

## 13. Performance Considerations (VERY IMPORTANT)

```js
class Component {
    constructor() {
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Clicked');
    }
}
```

Rule:

* Bind **once**, not inside render
* Avoid creating functions repeatedly

---

## 14. Final Mental Rules (Write These Down)

1. `call` → invoke immediately, args separated
2. `apply` → invoke immediately, args array
3. `bind` → returns new function
4. `bind` is permanent
5. `call/apply` are temporary
6. Use `bind` for callbacks & events
7. Use `apply` for dynamic arguments
8. Use `call` for readability
