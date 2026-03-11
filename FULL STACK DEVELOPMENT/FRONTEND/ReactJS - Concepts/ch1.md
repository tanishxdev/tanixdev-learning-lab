# SECTION 1 — JavaScript Foundations for React

Before learning React itself, we must understand **modern JavaScript concepts**. React heavily depends on ES6+ features. Without these concepts, React code will feel confusing.

The mindset we will follow for each concept:

**Problem → Why → Concept → Examples → Code → Edge Cases → Use Cases → Tradeoffs → Synthesis**

---

# 1. Modern JavaScript Overview

Tag: **[FRESHER]**

## Problem

Early JavaScript (ES5 and before) had several limitations:

- messy variable scoping
- confusing `this`
- weak modular structure
- callback hell for async code
- mutation-heavy programming
- difficult large-scale application architecture

Modern frontend frameworks like **React require predictable, modular, maintainable JavaScript**.

This is why **ES6+ (ECMAScript 2015+)** introduced many improvements.

---

## What Modern JavaScript Means

Modern JavaScript includes features introduced after **ES6 (2015)**.

Key ideas:

- better variable management
- functional programming patterns
- immutability
- modular architecture
- async programming improvements

These make building **large UI applications easier**.

---

## ES5 vs ES6+

| Feature   | ES5              | ES6+                   |
| --------- | ---------------- | ---------------------- |
| Variables | var              | let / const            |
| Functions | function keyword | arrow functions        |
| Strings   | concatenation    | template literals      |
| Modules   | not native       | import / export        |
| Objects   | verbose          | destructuring          |
| Async     | callbacks        | promises / async-await |

Example comparison.

### ES5 Style

```javascript
var name = "Tanish";
var message = "Hello " + name;

function add(a, b) {
  return a + b;
}
```

---

### ES6 Style

```javascript
const name = "Tanish";

// template literal
const message = `Hello ${name}`;

// arrow function
const add = (a, b) => a + b;
```

Modern code is **shorter, safer, and more readable**.

---

## Modules

Before ES6, JavaScript had no built-in module system.

Developers used hacks like:

- global variables
- script ordering
- libraries like RequireJS

Modern JS introduced **modules**.

Example:

```javascript
// math.js

export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

Using module elsewhere:

```javascript
import { add, multiply } from "./math.js";

console.log(add(2, 3));
```

This is heavily used in **React projects**.

Example in React:

```javascript
import Navbar from "./components/Navbar";
import Button from "./components/Button";
```

Each UI piece becomes a **module**.

---

## Functional Programming Ideas

React encourages **functional thinking**.

Instead of mutating data, we **return new values**.

Example.

### Bad approach (mutation)

```javascript
let numbers = [1, 2, 3];
numbers.push(4); // modifies original array
```

---

### Functional approach

```javascript
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4]; // create new array
```

Original data remains unchanged.

---

## Immutability Concept

**Immutability = never modifying existing data**

Instead:

- create new objects
- create new arrays

Example.

### Mutation (bad in React)

```javascript
const user = {
  name: "Tanish",
  age: 21,
};

user.age = 22;
```

React might **not detect this change properly**.

---

### Immutable update

```javascript
const user = {
  name: "Tanish",
  age: 21,
};

const updatedUser = {
  ...user,
  age: 22,
};
```

This creates **new object → React detects change → re-render happens**.

---

## Why React Requires Modern JavaScript

React relies heavily on:

- arrow functions
- destructuring
- modules
- immutability
- array methods
- async programming

Example React component.

```javascript
import React from "react";

const Welcome = ({ name }) => {
  return <h1>Hello {name}</h1>;
};

export default Welcome;
```

Concepts used here:

- ES modules
- arrow functions
- destructuring
- JSX expressions

---

## Real UI Example

Dynamic UI rendering.

```javascript
const users = ["Alice", "Bob", "Charlie"];

const list = users.map((user) => {
  return `<li>${user}</li>`;
});
```

Array methods + template literals power dynamic UI.

---

## Edge Cases

Common beginner mistakes.

### Using old JS patterns

```javascript
var count = 0;
```

Better:

```javascript
let count = 0;
```

---

### Mutating state

```javascript
state.items.push(newItem);
```

React cannot detect mutation properly.

Correct:

```javascript
setItems([...items, newItem]);
```

---

## Real Use Cases

Modern JavaScript is used everywhere in React:

| Feature           | React Usage       |
| ----------------- | ----------------- |
| modules           | component imports |
| destructuring     | props extraction  |
| arrow functions   | components        |
| template literals | dynamic UI        |
| spread operator   | state updates     |
| async await       | API calls         |
| map()             | list rendering    |

---

## Synthesis Questions

1. Why was ES6 introduced?
2. Why React prefers immutability?
3. What problem modules solve?
4. Why arrow functions are popular in React?
5. What happens if state is mutated in React?

---

# Next Topic

Next concept in this section is:

**2. let vs const vs var**

This topic is extremely important because **React uses `const` almost everywhere**.

If you say **continue**, we will go into deep explanation of:

- scope system
- hoisting
- why `var` is dangerous
- how React uses `const`
- real bugs caused by wrong variable declaration.

# 2. let vs const vs var

Tag: **[FRESHER]**

This topic is extremely important because **React code heavily relies on `const` and `let`**.
Understanding variable scope prevents many bugs in JavaScript and React applications.

We will follow the mindset:

**Problem → Why → Concept → Examples → Edge cases → Best practices → React usage → Synthesis**

---

# 1. The Problem With Early JavaScript Variables

Before ES6, JavaScript had only **one variable keyword**

```
var
```

This caused several issues:

1. **Function scope only**
2. **Variables leaking outside blocks**
3. **Hoisting confusion**
4. **Accidental overwriting**
5. **Hard-to-debug bugs in large applications**

Example problem.

```javascript
for (var i = 0; i < 3; i++) {}

console.log(i);
```

Output:

```
3
```

Why?

Because `var` ignores block scope.

This behavior becomes dangerous in UI frameworks like React.

---

# 2. ES6 Solution

ES6 introduced two new keywords:

```
let
const
```

These fix most problems of `var`.

| Keyword | Scope          | Reassignment | Use Case        |
| ------- | -------------- | ------------ | --------------- |
| var     | function scope | allowed      | avoid           |
| let     | block scope    | allowed      | changing values |
| const   | block scope    | not allowed  | default choice  |

---

# 3. Scope Concept

## What is Scope?

Scope defines **where a variable can be accessed**.

Two important types:

```
Function Scope
Block Scope
```

---

# 4. Function Scope (var)

A variable declared with `var` is visible **inside the entire function**.

Example:

```javascript
function test() {
  if (true) {
    var message = "Hello";
  }

  console.log(message);
}
```

Output:

```
Hello
```

Even though `message` was declared inside `if`, it is accessible outside.

This is **not ideal**.

---

# 5. Block Scope (let / const)

`let` and `const` respect **block scope**.

Blocks include:

```
if
for
while
switch
{}
```

Example.

```javascript
if (true) {
  let message = "Hello";
}

console.log(message);
```

Output:

```
ReferenceError
```

Because `message` exists **only inside the block**.

This prevents accidental bugs.

---

# 6. var vs let Example (Common Bug)

Example loop problem.

### Using var

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Output:

```
3
3
3
```

Why?

Because `var` has **function scope**, not block scope.

---

### Using let

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Output:

```
0
1
2
```

Because `let` creates a **new variable for each iteration**.

---

# 7. const Keyword

`const` means:

```
value cannot be reassigned
```

Example.

```javascript
const name = "Tanish";

name = "Alex";
```

Output:

```
TypeError
```

Because reassignment is not allowed.

---

## Important Note

`const` **does not make objects immutable**.

Example.

```javascript
const user = {
  name: "Tanish",
};

user.name = "Alex";
```

This works.

Because:

- reference cannot change
- object contents can change

---

# 8. Hoisting

Hoisting means:

```
JavaScript moves variable declarations to the top of scope
```

---

## var Hoisting

```javascript
console.log(a);

var a = 5;
```

Internally JS treats it like:

```javascript
var a;

console.log(a);

a = 5;
```

Output:

```
undefined
```

---

## let / const Hoisting

`let` and `const` are also hoisted but inside **Temporal Dead Zone (TDZ)**.

Example.

```javascript
console.log(a);

let a = 5;
```

Output:

```
ReferenceError
```

Why?

Because variable exists but cannot be used before declaration.

---

# 9. Best Practices

Recommended rules in modern JavaScript.

### Rule 1

Use **const by default**

```javascript
const name = "Tanish";
```

---

### Rule 2

Use **let when value must change**

```javascript
let count = 0;

count++;
```

---

### Rule 3

Avoid `var`

Modern projects rarely use it.

---

# 10. How React Uses These

React code uses **const almost everywhere**.

Example component.

```javascript
import React from "react";

const Greeting = () => {
  const name = "Tanish";

  return <h1>Hello {name}</h1>;
};

export default Greeting;
```

Reasons:

1. Prevent accidental reassignment
2. More predictable code
3. Cleaner architecture

---

# 11. Real React Example

Example of state logic.

```javascript
const [count, setCount] = useState(0);
```

Here:

- `count` is state
- `setCount` updates it

They are declared using **const**.

Why?

Because **React internally manages updates**.

---

# 12. Common Beginner Mistakes

### Mistake 1

Using `var`.

```
var count = 0
```

Avoid.

---

### Mistake 2

Trying to reassign const.

```javascript
const count = 0;

count = 1;
```

Not allowed.

---

### Mistake 3

Misunderstanding object mutation.

```javascript
const obj = { a: 1 };

obj = { a: 2 }; // error
```

But this works:

```javascript
obj.a = 2;
```

---

# 13. When to Use Each

| Situation        | Use   |
| ---------------- | ----- |
| default variable | const |
| loop counter     | let   |
| mutable values   | let   |
| legacy code      | var   |

---

# 14. Real Use Case in React

Rendering a list.

```javascript
const users = ["Alice", "Bob", "Charlie"];

const list = users.map((user) => {
  return <li>{user}</li>;
});
```

`users` uses **const** because the reference does not change.

---

# 15. Mental Model

Think like this:

```
const → default
let → when change needed
var → avoid
```

---

# 16. Synthesis Questions

1. Why is `var` considered dangerous?
2. Difference between **function scope** and **block scope**?
3. What is hoisting?
4. What is Temporal Dead Zone?
5. Why does React prefer `const`?

---

# Next Topic

Next concept:

**3. Arrow Functions**

This topic is **extremely important for React** because:

- most React components use arrow functions
- event handlers use arrow functions
- callbacks rely on arrow functions
- `this` behavior changes

If you say **continue**, we will deeply cover:

- arrow syntax
- implicit return
- lexical `this`
- React component patterns
- common mistakes
- real UI examples.

# 3. Arrow Functions

Tag: **[FRESHER]**

Arrow functions are one of the **most heavily used features in React**.
Almost every React component, event handler, and callback uses arrow functions.

Understanding them properly is essential.

We will follow the structure:

**Problem → Why → Concept → Syntax → Examples → React usage → Edge cases → Tradeoffs → Synthesis**

---

# 1. Problem Before Arrow Functions

Before ES6, JavaScript used only the **function keyword**.

Example:

```javascript
function add(a, b) {
  return a + b;
}
```

This approach had several problems:

1. Verbose syntax
2. Hard to use inside callbacks
3. Confusing `this` behavior
4. Difficult to write concise functions

Example problem:

```javascript
setTimeout(function () {
  console.log("Hello");
}, 1000);
```

When many callbacks exist, code becomes messy.

---

# 2. Why Arrow Functions Were Introduced

ES6 introduced **arrow functions** to:

- reduce boilerplate
- improve readability
- simplify callbacks
- fix `this` binding issues

Arrow functions provide a **shorter syntax**.

---

# 3. Basic Syntax

Normal function:

```javascript
function add(a, b) {
  return a + b;
}
```

Arrow function:

```javascript
const add = (a, b) => {
  return a + b;
};
```

Shorter and cleaner.

---

# 4. Arrow Function Structure

General syntax:

```javascript
const functionName = (parameters) => {
  function body
};
```

Example:

```javascript
const greet = (name) => {
  return "Hello " + name;
};
```

---

# 5. Single Parameter Shortcut

If there is **one parameter**, parentheses are optional.

```javascript
const greet = (name) => {
  return "Hello " + name;
};
```

---

# 6. Implicit Return

Arrow functions allow **implicit return**.

If the function body has **one expression**, you can remove `return`.

Normal:

```javascript
const square = (num) => {
  return num * num;
};
```

Implicit return:

```javascript
const square = (num) => num * num;
```

---

# 7. Returning Objects

When returning an object, parentheses are required.

Wrong:

```javascript
const createUser = () => {
  name: "Tanish";
};
```

JavaScript thinks `{}` is a block.

Correct:

```javascript
const createUser = () => ({
  name: "Tanish",
});
```

---

# 8. Arrow Functions With No Parameters

If there are **no parameters**, parentheses are required.

```javascript
const sayHello = () => {
  console.log("Hello");
};
```

---

# 9. Arrow Functions in Array Methods

Arrow functions are extremely useful with array methods.

Example using `map()`.

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);
```

Output:

```
[2,4,6,8]
```

This pattern appears constantly in React.

---

# 10. Arrow Functions in React Components

React functional components are often written using arrow functions.

Example:

```javascript
import React from "react";

const Welcome = () => {
  return <h1>Hello World</h1>;
};

export default Welcome;
```

Arrow functions make components **simple and readable**.

---

# 11. Arrow Functions in Event Handlers

Example button click.

```javascript
const handleClick = () => {
  console.log("Button clicked");
};
```

Used inside JSX:

```javascript
<button onClick={handleClick}>Click Me</button>
```

---

# 12. Inline Arrow Functions

Sometimes arrow functions are written directly inside JSX.

Example:

```javascript
<button onClick={() => console.log("Clicked")}>Click</button>
```

This creates a **new function every render**, which can impact performance if overused.

---

# 13. Lexical `this` (Important Concept)

The biggest difference between **normal functions** and **arrow functions** is `this`.

Normal function:

`this` depends on **how the function is called**.

Example:

```javascript
const person = {
  name: "Tanish",
  greet: function () {
    console.log(this.name);
  },
};

person.greet();
```

Output:

```
Tanish
```

---

## Arrow Function Behavior

Arrow functions **do not have their own `this`**.

They inherit `this` from the **parent scope**.

Example:

```javascript
const person = {
  name: "Tanish",

  greet: () => {
    console.log(this.name);
  },
};

person.greet();
```

Output:

```
undefined
```

Because arrow functions **do not bind `this`**.

---

# 14. Why Arrow Functions Help in React

React often uses callbacks inside components.

Example with traditional function problem:

```javascript
class Example {
  constructor() {
    this.name = "Tanish";
  }

  greet() {
    console.log(this.name);
  }
}
```

If used as a callback, `this` may break.

Arrow functions solve this.

Example:

```javascript
const greet = () => {
  console.log("Hello");
};
```

No `this` confusion.

---

# 15. React List Rendering Example

Arrow functions are used with `map()`.

Example:

```javascript
const users = ["Alice", "Bob", "Charlie"];

const listItems = users.map((user) => {
  return <li>{user}</li>;
});
```

React renders dynamic UI lists using this pattern.

---

# 16. Common Mistakes

### Mistake 1 — forgetting parentheses when returning object

Wrong:

```javascript
const user = () => {
  name: "Tanish";
};
```

Correct:

```javascript
const user = () => ({ name: "Tanish" });
```

---

### Mistake 2 — using arrow function as object method

Wrong:

```javascript
const obj = {
  value: 10,
  getValue: () => {
    return this.value;
  },
};
```

Correct:

```javascript
const obj = {
  value: 10,
  getValue() {
    return this.value;
  },
};
```

---

# 17. When to Use Arrow Functions

Use arrow functions for:

- React components
- callbacks
- array methods
- event handlers

Avoid them for:

- object methods needing `this`
- constructors
- prototypes

---

# 18. Real React Example

Dynamic list component.

```javascript
import React from "react";

const UserList = () => {
  const users = ["Alice", "Bob", "Charlie"];

  return (
    <ul>
      {users.map((user) => (
        <li>{user}</li>
      ))}
    </ul>
  );
};

export default UserList;
```

Concepts used:

- arrow functions
- array `map`
- JSX rendering

---

# 19. Mental Model

Think of arrow functions as:

```
short + predictable functions
```

They are ideal for **callbacks and UI rendering**.

---

# 20. Synthesis Questions

1. Why were arrow functions introduced?
2. What is implicit return?
3. Why do arrow functions not have their own `this`?
4. Why are arrow functions common in React?
5. When should arrow functions not be used?

---

# Next Topic

Next concept:

**4. Template Literals**

This is important because React frequently generates **dynamic UI strings and HTML-like JSX content**.

We will cover:

- string interpolation
- multiline strings
- dynamic UI text
- dynamic URLs
- React rendering patterns.

# 4. Template Literals

Tag: **[FRESHER]**

Template literals are used everywhere in modern JavaScript and React.
They make it easier to create **dynamic strings, UI text, URLs, and HTML-like content**.

We will follow the structure:

**Problem → Why → Concept → Syntax → Examples → Edge cases → React usage → Tradeoffs → Synthesis**

---

# 1. Problem Before Template Literals

Before ES6, JavaScript used **string concatenation**.

Example:

```javascript
const name = "Tanish";
const age = 21;

const message = "My name is " + name + " and I am " + age + " years old.";
```

Problems with this approach:

1. Hard to read
2. Too many `+` operators
3. Error-prone
4. Difficult with large strings
5. Messy UI templates

Example with HTML:

```javascript
const html =
  "<div>" + "<h1>" + name + "</h1>" + "<p>" + age + "</p>" + "</div>";
```

This becomes **very difficult to maintain**.

---

# 2. Why Template Literals Were Introduced

ES6 introduced **template literals** to make string construction easier.

Benefits:

- readable syntax
- dynamic values
- multiline strings
- easier UI rendering

---

# 3. Syntax of Template Literals

Template literals use **backticks** instead of quotes.

```
`
```

Example:

```javascript
const name = "Tanish";

const message = `Hello ${name}`;
```

Output:

```
Hello Tanish
```

`${}` allows **embedding expressions inside strings**.

---

# 4. String Interpolation

String interpolation means **inserting variables inside strings**.

Example:

```javascript
const product = "Laptop";
const price = 50000;

const text = `The price of ${product} is ${price} rupees`;

console.log(text);
```

Output:

```
The price of Laptop is 50000 rupees
```

This is cleaner than concatenation.

---

# 5. Expressions Inside Template Literals

You can insert **any JavaScript expression**.

Example:

```javascript
const a = 10;
const b = 20;

const result = `Sum is ${a + b}`;
```

Output:

```
Sum is 30
```

---

# 6. Multiline Strings

Before template literals, multiline strings required special characters.

Old approach:

```javascript
const text = "Hello\n" + "Welcome\n" + "To JavaScript";
```

Template literal approach:

```javascript
const text = `
Hello
Welcome
To JavaScript
`;
```

Much easier.

---

# 7. Creating HTML Templates

Template literals are useful when generating HTML.

Example:

```javascript
const user = {
  name: "Tanish",
  age: 21,
};

const html = `
<div>
  <h1>${user.name}</h1>
  <p>${user.age}</p>
</div>
`;

console.log(html);
```

This looks like **real HTML structure**.

---

# 8. Dynamic URLs

Template literals are often used when building API URLs.

Example:

```javascript
const userId = 10;

const url = `https://api.example.com/users/${userId}`;
```

Output:

```
https://api.example.com/users/10
```

Very common in API calls.

---

# 9. Conditional Logic Inside Template Literals

You can include conditional expressions.

Example:

```javascript
const age = 18;

const message = `User is ${age >= 18 ? "Adult" : "Minor"}`;
```

Output:

```
User is Adult
```

---

# 10. Template Literals in React

React often renders **dynamic UI text**.

Example:

```javascript
const name = "Tanish";

return <h1>{`Welcome ${name}`}</h1>;
```

JSX uses `{}` to insert JavaScript expressions.

Inside it we can use template literals.

---

# 11. Example — Dynamic List Rendering

```javascript
const products = ["Laptop", "Phone", "Tablet"];

const items = products.map((product) => {
  return `Product: ${product}`;
});

console.log(items);
```

Output:

```
[
 "Product: Laptop",
 "Product: Phone",
 "Product: Tablet"
]
```

---

# 12. Example — Dynamic CSS Class

Template literals help generate CSS classes dynamically.

```javascript
const isActive = true;

const className = `button ${isActive ? "active" : "inactive"}`;
```

Output:

```
button active
```

This pattern is very common in React.

---

# 13. Nested Template Literals

You can combine expressions.

Example:

```javascript
const user = "Tanish";
const score = 95;

const message = `User ${user} scored ${score > 90 ? "Excellent" : "Good"}`;
```

Output:

```
User Tanish scored Excellent
```

---

# 14. Common Mistakes

### Mistake 1 — Using quotes instead of backticks

Wrong:

```javascript
const message = "Hello ${name}";
```

Output:

```
Hello ${name}
```

Correct:

```javascript
const message = `Hello ${name}`;
```

---

### Mistake 2 — Forgetting `${}`

Wrong:

```javascript
const message = `Hello name`;
```

Correct:

```javascript
const message = `Hello ${name}`;
```

---

# 15. Real React Example

User card component.

```javascript
import React from "react";

const UserCard = () => {
  const name = "Tanish";
  const age = 21;

  return (
    <div>
      <h2>{`Name: ${name}`}</h2>
      <p>{`Age: ${age}`}</p>
    </div>
  );
};

export default UserCard;
```

Concepts used:

- template literals
- JSX expressions
- dynamic UI text

---

# 16. Mental Model

Think of template literals as:

```
strings with embedded JavaScript
```

They are useful for:

- dynamic UI text
- building URLs
- generating HTML
- conditional strings

---

# 17. Use Cases in React

Template literals commonly appear in:

| Scenario     | Example           |
| ------------ | ----------------- |
| dynamic text | `Hello ${name}`   |
| CSS classes  | `btn ${active}`   |
| API URLs     | `/users/${id}`    |
| debugging    | `User id: ${id}`  |
| UI messages  | `Total: ${price}` |

---

# 18. Tradeoffs

Advantages:

- readable
- dynamic
- cleaner code
- supports expressions

Possible downside:

- heavy logic inside templates can reduce readability

Example of bad practice:

```javascript
const message = `${a > b ? (b > c ? "A" : "B") : "C"}`;
```

Better to compute logic separately.

---

# 19. Synthesis Questions

1. What problem did template literals solve?
2. What symbol is used for template literals?
3. How do you insert variables inside strings?
4. Why are template literals useful in React?
5. When should heavy logic be avoided inside template strings?

---

# Next Topic

Next concept:

**5. Ternary Operators**

This is extremely important for React because it is used for **conditional UI rendering**.

Example React pattern:

```javascript
{
  isLoggedIn ? <Dashboard /> : <Login />;
}
```

We will cover:

- conditional expressions
- nested ternaries
- inline UI rendering
- React conditional patterns.

# 6. Object Destructuring

Tag: **[BOTH]**

Object destructuring is one of the **most frequently used features in React**.
It is heavily used when working with:

- **props**
- **API responses**
- **state objects**
- **configuration objects**

We will follow the structure:

**Problem → Why → Concept → Syntax → Examples → React usage → Edge cases → Tradeoffs → Synthesis**

---

# 1. Problem Without Destructuring

Objects are everywhere in JavaScript.

Example object:

```javascript
const user = {
  name: "Tanish",
  age: 21,
  city: "Delhi",
};
```

Accessing values the traditional way:

```javascript
const name = user.name;
const age = user.age;
const city = user.city;
```

Problems:

- repetitive code
- less readable
- not scalable when objects become large

---

# 2. Why Destructuring Was Introduced

ES6 introduced **destructuring** to make extracting values easier.

Instead of writing:

```
object.property
object.property
object.property
```

We can extract everything in **one statement**.

---

# 3. Basic Syntax

Object destructuring syntax:

```javascript
const { property1, property2 } = object;
```

Example:

```javascript
const user = {
  name: "Tanish",
  age: 21,
};

const { name, age } = user;

console.log(name);
console.log(age);
```

Output

```
Tanish
21
```

---

# 4. Step-by-Step Mental Model

Think of destructuring like this:

```
Take properties from object
Create variables with same names
Assign values automatically
```

Example:

```javascript
const { name } = user;
```

Equivalent to:

```javascript
const name = user.name;
```

---

# 5. Extract Multiple Properties

Example:

```javascript
const user = {
  name: "Tanish",
  age: 21,
  city: "Delhi",
};

const { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);
```

Output

```
Tanish
21
Delhi
```

---

# 6. Renaming Variables

Sometimes we want **different variable names**.

Example:

```javascript
const user = {
  name: "Tanish",
  age: 21,
};

const { name: username, age: userAge } = user;

console.log(username);
console.log(userAge);
```

Output

```
Tanish
21
```

Explanation:

```
name → username
age → userAge
```

---

# 7. Default Values

If a property **does not exist**, we can set a default value.

Example:

```javascript
const user = {
  name: "Tanish",
};

const { name, age = 18 } = user;

console.log(name);
console.log(age);
```

Output

```
Tanish
18
```

Because `age` was missing.

---

# 8. Destructuring Nested Objects

Objects often contain nested objects.

Example:

```javascript
const user = {
  name: "Tanish",
  address: {
    city: "Delhi",
    country: "India",
  },
};
```

Extract nested values:

```javascript
const {
  address: { city, country },
} = user;

console.log(city);
console.log(country);
```

Output

```
Delhi
India
```

---

# 9. Partial Destructuring

You can extract only required properties.

Example:

```javascript
const user = {
  name: "Tanish",
  age: 21,
  city: "Delhi",
};

const { name } = user;

console.log(name);
```

Output

```
Tanish
```

Only `name` was extracted.

---

# 10. Destructuring Function Parameters

Very common pattern.

Instead of this:

```javascript
function displayUser(user) {
  console.log(user.name);
  console.log(user.age);
}
```

Use destructuring.

```javascript
function displayUser({ name, age }) {
  console.log(name);
  console.log(age);
}
```

Now the function directly receives properties.

---

# 11. Object Destructuring in React Props

This is **extremely common in React**.

Example component.

Without destructuring:

```javascript
const UserCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </div>
  );
};
```

Using destructuring:

```javascript
const UserCard = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
};
```

Much cleaner.

---

# 12. Real React Example

Example with multiple props.

```javascript
const ProductCard = ({ title, price, rating }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Price: {price}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};
```

Here React automatically passes props.

Destructuring extracts them.

---

# 13. Destructuring API Responses

APIs usually return objects.

Example response:

```javascript
const response = {
  status: 200,
  data: {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
};
```

Extract values:

```javascript
const { data } = response;

console.log(data.name);
```

Or deeper destructuring:

```javascript
const {
  data: { name, price },
} = response;

console.log(name);
console.log(price);
```

---

# 14. Common Mistakes

### Mistake 1 — Wrong variable names

Wrong:

```javascript
const { username } = user;
```

If object has `name`, not `username`, it returns:

```
undefined
```

---

### Mistake 2 — Forgetting braces

Wrong:

```javascript
const name = user;
```

Correct:

```javascript
const { name } = user;
```

---

# 15. When to Use Object Destructuring

Use destructuring when:

- extracting multiple properties
- working with React props
- handling API responses
- working with configuration objects

---

# 16. Tradeoffs

Advantages:

- cleaner code
- fewer repeated references
- easier to read
- widely used in React ecosystem

Possible downside:

- too much nested destructuring can reduce readability

Example:

```javascript
const {
  a: {
    b: {
      c: { d },
    },
  },
} = obj;
```

Better to break into steps.

---

# 17. Mental Model

Think of object destructuring as:

```
extract values from object → create variables
```

Example mental mapping:

```
user.name → name
user.age → age
```

---

# 18. Real React Pattern

Most React components follow this pattern:

```javascript
const ComponentName = ({ prop1, prop2, prop3 }) => {
  return <div>{prop1}</div>;
};
```

This uses:

- arrow function
- destructuring
- JSX

Three modern JS features combined.

---

# 19. Synthesis Questions

1. What problem does destructuring solve?
2. How is `{ name } = user` equivalent to `user.name`?
3. How do you rename variables while destructuring?
4. How do you provide default values?
5. Why is destructuring common in React props?

---

# Next Topic

Next concept:

**7. Array Destructuring**

This is used frequently in React, especially in **hooks**.

Example:

```javascript
const [count, setCount] = useState(0);
```

This pattern is based on **array destructuring**.

We will explore:

- extracting values from arrays
- swapping variables
- rest elements
- React hook patterns.

# 7. Array Destructuring

Tag: **[BOTH]**

Array destructuring is extremely important in React because **React Hooks rely on it**.

Example you will see everywhere in React:

```javascript
const [count, setCount] = useState(0);
```

This syntax works because of **array destructuring**.

We will follow:

**Problem → Why → Concept → Syntax → Examples → React usage → Edge cases → Tradeoffs → Synthesis**

---

# 1. Problem Without Array Destructuring

Suppose we have an array.

```javascript
const numbers = [10, 20, 30];
```

If we want values separately, traditional approach:

```javascript
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];
```

Problems:

- repetitive code
- harder to read
- not scalable for larger arrays

---

# 2. Why Array Destructuring Exists

ES6 introduced **array destructuring** to extract values easily.

Instead of writing:

```
array[0]
array[1]
array[2]
```

We can extract them in **one statement**.

---

# 3. Basic Syntax

Array destructuring syntax:

```javascript
const [var1, var2, var3] = array;
```

Example:

```javascript
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);
```

Output

```
10
20
30
```

---

# 4. Mental Model

Array destructuring works by **position (index)**.

Mapping happens like this:

```
array[0] → first variable
array[1] → second variable
array[2] → third variable
```

Example:

```javascript
const [x, y] = [5, 10];
```

Equivalent to:

```javascript
const x = 5;
const y = 10;
```

---

# 5. Extract Only Required Values

You can skip elements.

Example:

```javascript
const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first);
console.log(third);
```

Output

```
10
30
```

The second value was skipped.

---

# 6. Default Values

You can provide default values if array element is missing.

Example:

```javascript
const numbers = [10];

const [a, b = 50] = numbers;

console.log(a);
console.log(b);
```

Output

```
10
50
```

Because second element was not present.

---

# 7. Swapping Variables (Very Useful)

Array destructuring makes swapping variables easy.

Old method:

```javascript
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;
```

Modern method:

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);
```

Output

```
20
10
```

No temporary variable required.

---

# 8. Rest Elements

The **rest operator** collects remaining values.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(rest);
```

Output

```
1
2
[3,4,5]
```

Explanation:

```
first → 1
second → 2
rest → remaining elements
```

---

# 9. Nested Array Destructuring

Arrays can contain nested arrays.

Example:

```javascript
const data = [1, [2, 3]];

const [a, [b, c]] = data;

console.log(a);
console.log(b);
console.log(c);
```

Output

```
1
2
3
```

---

# 10. Array Destructuring in Function Return

Functions often return arrays.

Example:

```javascript
function getCoordinates() {
  return [10, 20];
}

const [x, y] = getCoordinates();

console.log(x);
console.log(y);
```

Output

```
10
20
```

---

# 11. Why React Hooks Use Array Destructuring

React Hooks return **arrays**.

Example:

```javascript
const [count, setCount] = useState(0);
```

Internally React returns something like:

```javascript
[0, function updateState()]
```

Array destructuring extracts values.

Mapping:

```
count → state value
setCount → update function
```

---

# 12. Real React Example

Counter component.

```javascript
import React, { useState } from "react";

const Counter = () => {
  // array destructuring from useState hook
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increment}>Increase</button>
    </div>
  );
};

export default Counter;
```

Concepts used:

- array destructuring
- React hooks
- arrow functions

---

# 13. Common Mistakes

### Mistake 1 — Using curly braces

Wrong:

```javascript
const { a, b } = [1, 2];
```

Correct:

```javascript
const [a, b] = [1, 2];
```

Arrays use **square brackets**.

---

### Mistake 2 — Forgetting order matters

Example:

```javascript
const numbers = [10, 20];

const [a, b] = numbers;
```

If swapped:

```javascript
const [b, a] = numbers;
```

Results change.

Because **arrays depend on order**.

---

# 14. Real React Pattern

Every React hook uses this pattern.

Example:

```javascript
const [user, setUser] = useState(null);
```

Another example:

```javascript
const [loading, setLoading] = useState(true);
```

This comes directly from **array destructuring**.

---

# 15. Tradeoffs

Advantages:

- cleaner code
- easy extraction
- powerful with hooks
- supports rest elements

Limitations:

- order must be remembered
- not ideal for large arrays

Objects are better when **names matter**.

---

# 16. Mental Model

Think of array destructuring like this:

```
[variable1, variable2] = array
```

Mapping:

```
array[0] → variable1
array[1] → variable2
```

---

# 17. Synthesis Questions

1. How does array destructuring work internally?
2. Why does order matter in arrays?
3. How do you skip elements in destructuring?
4. How do React hooks use array destructuring?
5. What does `...rest` do?

---

# Next Topic

Next concept:

**8. Default Parameters**

This helps simplify function logic.

Example:

```
function greet(name = "Guest")
```

We will explore:

- why default parameters were introduced
- how they simplify functions
- React usage patterns
- edge cases.

# 8. Default Parameters

Tag: **[FRESHER]**

Default parameters are used when a function receives **no value for a parameter**.
Instead of writing extra conditional logic, JavaScript can automatically assign a **default value**.

This is extremely useful in React for:

- component props
- configuration values
- API helpers
- utility functions

We will follow:

**Problem → Why → Concept → Syntax → Examples → Edge Cases → React Usage → Tradeoffs → Synthesis**

---

# 1. Problem Before Default Parameters

Before ES6, if a function argument was missing, developers had to manually assign default values.

Example:

```javascript
function greet(name) {
  if (name === undefined) {
    name = "Guest";
  }

  console.log("Hello " + name);
}

greet();
```

Output

```
Hello Guest
```

Problems with this approach:

1. Extra conditional logic
2. Verbose code
3. Hard to read
4. Easy to forget default handling

---

# 2. Why Default Parameters Were Introduced

ES6 introduced **default parameters** to simplify function logic.

Instead of checking manually:

```javascript
if(value === undefined)
```

You can directly assign default values in the function signature.

---

# 3. Basic Syntax

```javascript
function functionName(parameter = defaultValue) {}
```

Example:

```javascript
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();
```

Output

```
Hello Guest
```

If we pass a value:

```javascript
greet("Tanish");
```

Output

```
Hello Tanish
```

---

# 4. Step-by-Step Mental Model

Think of default parameters like this:

```
If argument exists → use argument
If argument missing → use default value
```

Example:

```javascript
function multiply(a, b = 2) {
  return a * b;
}
```

Call:

```javascript
multiply(5);
```

Output

```
10
```

Because `b` defaults to **2**.

---

# 5. Multiple Default Parameters

Example:

```javascript
function createUser(name = "Guest", age = 18) {
  console.log(name, age);
}

createUser();
```

Output

```
Guest 18
```

---

# 6. Default Parameters With Expressions

Default values can be **expressions**.

Example:

```javascript
function calculateTotal(price, tax = price * 0.1) {
  return price + tax;
}

console.log(calculateTotal(100));
```

Output

```
110
```

The default value depends on another parameter.

---

# 7. Default Parameters With Functions

Default values can also be functions.

Example:

```javascript
function getTime() {
  return new Date().toLocaleTimeString();
}

function logMessage(message, time = getTime()) {
  console.log(`[${time}] ${message}`);
}

logMessage("Server started");
```

Output example:

```
[10:30:22] Server started
```

---

# 8. Default Parameters With Objects

Example:

```javascript
function createProduct(product = {}) {
  console.log(product);
}

createProduct();
```

Output

```
{}
```

This prevents errors when accessing object properties.

---

# 9. Default Parameters With Destructuring

Very common pattern.

Example:

```javascript
function createUser({ name = "Guest", age = 18 } = {}) {
  console.log(name, age);
}

createUser();
```

Output

```
Guest 18
```

This protects against **undefined object errors**.

---

# 10. React Example — Default Props Using Parameters

In React functional components we often use default parameters.

Example:

```javascript
const Greeting = ({ name = "Guest" }) => {
  return <h1>Hello {name}</h1>;
};
```

Usage:

```javascript
<Greeting />
```

Output

```
Hello Guest
```

If value provided:

```javascript
<Greeting name="Tanish" />
```

Output

```
Hello Tanish
```

---

# 11. API Helper Example

Default parameters simplify API helpers.

Example:

```javascript
async function fetchUsers(limit = 10) {
  const response = await fetch(`https://api.example.com/users?limit=${limit}`);

  return response.json();
}
```

Call:

```javascript
fetchUsers();
```

It automatically uses **limit = 10**.

---

# 12. Edge Cases

## Passing undefined

Default value is used only if parameter is **undefined**.

Example:

```javascript
function greet(name = "Guest") {
  console.log(name);
}

greet(undefined);
```

Output

```
Guest
```

---

## Passing null

Default value is **not used**.

```javascript
greet(null);
```

Output

```
null
```

Because `null` is a real value.

---

# 13. Common Mistakes

### Mistake 1 — Using default parameters incorrectly

Example:

```javascript
function add(a = 5, b) {
  return a + b;
}
```

Call:

```javascript
add(undefined, 10);
```

Works, but ordering can become confusing.

Better:

```javascript
function add(a, b = 5)
```

---

### Mistake 2 — Forgetting default object

Example:

```javascript
function displayUser({ name }) {}
```

Calling:

```javascript
displayUser();
```

Error:

```
Cannot destructure undefined
```

Correct approach:

```javascript
function displayUser({name} = {})
```

---

# 14. Real React Example

Component with default values.

```javascript
import React from "react";

const Button = ({ text = "Click", color = "blue" }) => {
  return <button style={{ backgroundColor: color }}>{text}</button>;
};

export default Button;
```

Usage:

```javascript
<Button />
<Button text="Submit" />
<Button color="red" />
```

Default values make components **flexible**.

---

# 15. Tradeoffs

Advantages:

- cleaner function signatures
- less conditional logic
- safer APIs
- easier component design

Possible downside:

- complex expressions in parameters can reduce readability

Example:

```javascript
function test(a = b * c * d * e)
```

Better to compute inside function body.

---

# 16. Mental Model

Think of default parameters as:

```
function(parameter = fallbackValue)
```

Meaning:

```
If argument missing → use fallback
```

---

# 17. Synthesis Questions

1. What problem do default parameters solve?
2. When is the default value used?
3. What happens if `null` is passed?
4. Why are default parameters useful in React components?
5. Why do we sometimes use `function({x} = {})`?

---

# Next Topic

Next concept:

**9. Spread Operator**

This is **one of the most important concepts for React state management**.

Because React requires **immutable updates**.

Example:

```
setUsers([...users, newUser])
```

We will explore:

- cloning arrays
- copying objects
- merging objects
- immutable updates
- React state patterns.

# 9. Spread Operator

Tag: **[BOTH]**

The **spread operator (`...`)** is one of the most important features used in modern JavaScript and React.

React relies heavily on **immutability**, and the spread operator helps create **new arrays and objects without modifying the original data**.

Example you will see frequently in React:

```javascript
setUsers([...users, newUser]);
```

We will follow:

**Problem → Why → Concept → Syntax → Examples → React Usage → Edge Cases → Tradeoffs → Synthesis**

---

# 1. Problem Before Spread Operator

Suppose we have an array.

```javascript
const numbers = [1, 2, 3];
```

If we want to create a copy of this array, the naive approach might be:

```javascript
const newNumbers = numbers;
```

But this does **not create a copy**.

Both variables now reference the **same array in memory**.

Example:

```javascript
const numbers = [1, 2, 3];

const newNumbers = numbers;

newNumbers.push(4);

console.log(numbers);
```

Output

```
[1,2,3,4]
```

The original array was modified.

This becomes a serious issue in React.

---

# 2. Why Spread Operator Was Introduced

ES6 introduced the **spread operator (`...`)** to easily:

- copy arrays
- copy objects
- merge arrays
- merge objects
- expand iterable values

It helps maintain **immutable data patterns**, which React depends on.

---

# 3. Basic Syntax

```javascript
...array
...object
```

Spread operator **expands elements**.

Example:

```javascript
const numbers = [1, 2, 3];

console.log(...numbers);
```

Output

```
1 2 3
```

The array elements are **spread individually**.

---

# 4. Cloning Arrays

The most common use.

Example:

```javascript
const numbers = [1, 2, 3];

const newNumbers = [...numbers];

console.log(newNumbers);
```

Output

```
[1,2,3]
```

Now `newNumbers` is a **separate array**.

Changing it will not affect the original.

---

# 5. Adding Elements to Arrays

Spread operator makes array updates simple.

Example:

```javascript
const numbers = [1, 2, 3];

const updatedNumbers = [...numbers, 4];

console.log(updatedNumbers);
```

Output

```
[1,2,3,4]
```

Original array remains unchanged.

---

# 6. Adding Elements at the Beginning

Example:

```javascript
const numbers = [2, 3, 4];

const newNumbers = [1, ...numbers];

console.log(newNumbers);
```

Output

```
[1,2,3,4]
```

---

# 7. Merging Arrays

Example:

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];

console.log(merged);
```

Output

```
[1,2,3,4]
```

---

# 8. Spread Operator With Objects

Spread operator also works with objects.

Example:

```javascript
const user = {
  name: "Tanish",
  age: 21,
};

const newUser = { ...user };

console.log(newUser);
```

Output

```
{ name: "Tanish", age: 21 }
```

This creates a **shallow copy**.

---

# 9. Updating Object Properties

Example:

```javascript
const user = {
  name: "Tanish",
  age: 21,
};

const updatedUser = {
  ...user,
  age: 22,
};

console.log(updatedUser);
```

Output

```
{ name: "Tanish", age: 22 }
```

Explanation:

```text
Copy all properties → overwrite age
```

---

# 10. Merging Objects

Example:

```javascript
const user = {
  name: "Tanish",
};

const address = {
  city: "Delhi",
};

const profile = {
  ...user,
  ...address,
};

console.log(profile);
```

Output

```
{ name: "Tanish", city: "Delhi" }
```

---

# 11. Spread Operator in React State Updates

React state must be **immutable**.

Wrong approach:

```javascript
users.push(newUser);
```

Correct approach:

```javascript
setUsers([...users, newUser]);
```

Explanation:

```text
Copy existing users → add new user → create new array
```

React detects the new array and **re-renders UI**.

---

# 12. Real React Example

User list component.

```javascript
import React, { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState(["Alice", "Bob"]);

  const addUser = () => {
    const newUser = "Charlie";

    // spread operator used to create new array
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

Concepts used:

- spread operator
- React state
- array immutability
- list rendering

---

# 13. Spread Operator With Function Arguments

Example:

```javascript
function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

console.log(add(...numbers));
```

Output

```
6
```

Array values expand into parameters.

---

# 14. Edge Cases

Spread operator performs **shallow copy**.

Example:

```javascript
const user = {
  name: "Tanish",
  address: {
    city: "Delhi",
  },
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city);
```

Output

```
Mumbai
```

Because nested objects are still **shared references**.

---

# 15. Common Mistakes

### Mistake 1 — Forgetting brackets

Wrong:

```javascript
const newArr = ...arr;
```

Correct:

```javascript
const newArr = [...arr];
```

---

### Mistake 2 — Mutating state directly

Wrong React pattern:

```javascript
users.push(newUser);
setUsers(users);
```

React might **not re-render properly**.

Correct:

```javascript
setUsers([...users, newUser]);
```

---

# 16. Mental Model

Think of spread operator as:

```
expand elements
copy values
create new structures
```

Example mental mapping:

```
[...array] → copy array
{...object} → copy object
```

---

# 17. Real React Patterns

Common React updates.

### Add item

```javascript
setItems([...items, newItem]);
```

### Remove item

```javascript
setItems(items.filter((item) => item.id !== id));
```

### Update item

```javascript
setItems(
  items.map((item) => (item.id === id ? { ...item, name: "Updated" } : item)),
);
```

All rely on **spread operator**.

---

# 18. Tradeoffs

Advantages:

- simple immutable updates
- clean syntax
- essential for React
- powerful for arrays and objects

Limitations:

- shallow copy only
- large nested structures require deeper cloning

---

# 19. Synthesis Questions

1. Why is spread operator important in React?
2. What problem does it solve with arrays?
3. Why does React require immutable updates?
4. What is the difference between shallow copy and deep copy?
5. How does spread operator help update objects?

---

# Next Topic

Next concept:

**10. Rest Parameters**

Even though spread and rest use the same symbol (`...`), they work **very differently**.

Example:

```
function sum(...numbers)
```

Rest parameters allow functions to accept **unlimited arguments**.

This concept is used frequently in:

- utility functions
- reducers
- configuration APIs
- React libraries.

If you want, we can also next go deeper into:

**Spread vs Rest — a very common interview confusion.**

# 10. Rest Parameters

Tag: **[FRESHER]**

The **rest parameter (`...`)** allows a function to accept **multiple or unlimited arguments** and collect them into a single array.

Important:

The same symbol `...` is used for **two different concepts**:

| Concept         | Purpose         |
| --------------- | --------------- |
| Spread operator | Expands values  |
| Rest parameter  | Collects values |

Example:

```javascript
function sum(...numbers)
```

Here `numbers` becomes an **array of all arguments**.

---

# 1. Problem Before Rest Parameters

Before ES6, JavaScript functions had a problem.

If you passed multiple arguments, there was **no clean way to handle them**.

Example:

```javascript
function sum(a, b, c, d) {
  return a + b + c + d;
}
```

Problem:

- number of parameters must be fixed
- difficult to handle variable arguments

Example:

```javascript
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4, 5);
```

Function cannot adapt easily.

---

# 2. Old Solution (arguments object)

Before ES6, developers used the **arguments object**.

Example:

```javascript
function sum() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(sum(1, 2, 3, 4));
```

Problems with `arguments`:

1. not a real array
2. harder to use
3. confusing syntax
4. not available in arrow functions

---

# 3. Why Rest Parameters Were Introduced

Rest parameters solve these problems.

They allow functions to collect **all remaining arguments into an array**.

Cleaner and more flexible.

---

# 4. Basic Syntax

```javascript
function functionName(...parameterName) {}
```

Example:

```javascript
function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4);
```

Output

```
[1,2,3,4]
```

All arguments are stored inside **numbers array**.

---

# 5. Step-by-Step Mental Model

Rest parameters work like this:

```
Collect all arguments → store inside array
```

Example:

```javascript
sum(1, 2, 3);
```

Internally becomes:

```
numbers = [1,2,3]
```

---

# 6. Real Example — Sum Function

```javascript
function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4));
```

Output

```
10
```

Now the function can handle **any number of inputs**.

---

# 7. Rest With Other Parameters

Rest parameters must always be **the last parameter**.

Example:

```javascript
function multiply(multiplier, ...numbers) {
  return numbers.map((num) => num * multiplier);
}

console.log(multiply(2, 1, 2, 3, 4));
```

Output

```
[2,4,6,8]
```

Explanation:

```
multiplier → 2
numbers → [1,2,3,4]
```

---

# 8. Rest Parameters With Array Destructuring

Example:

```javascript
const [first, ...rest] = [1, 2, 3, 4];

console.log(first);
console.log(rest);
```

Output

```
1
[2,3,4]
```

Explanation:

```
first → first element
rest → remaining elements
```

---

# 9. Rest Parameters With Objects

Rest operator can also collect **remaining object properties**.

Example:

```javascript
const user = {
  name: "Tanish",
  age: 21,
  city: "Delhi",
};

const { name, ...details } = user;

console.log(name);
console.log(details);
```

Output

```
Tanish
{ age:21, city:"Delhi" }
```

---

# 10. Rest Parameters in React

Rest parameters are often used in **React props**.

Example:

```javascript
const Button = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};
```

Usage:

```javascript
<Button title="Submit" className="btn" />
```

Explanation:

```
title → extracted
props → remaining properties
```

This pattern is very common in **UI libraries**.

---

# 11. Spread vs Rest (Important Difference)

Both use `...` but behave differently.

| Feature   | Spread          | Rest                |
| --------- | --------------- | ------------------- |
| Purpose   | expands values  | collects values     |
| Usage     | arrays, objects | function parameters |
| Direction | one → many      | many → one          |

Example:

Spread:

```javascript
const numbers = [1, 2, 3];

console.log(...numbers);
```

Output

```
1 2 3
```

Rest:

```javascript
function sum(...nums) {
  console.log(nums);
}
```

Output

```
[1,2,3]
```

---

# 12. Common Mistakes

### Mistake 1 — Rest not last parameter

Wrong:

```javascript
function test(...nums, value)
```

JavaScript error.

Correct:

```javascript
function test(value, ...nums)
```

---

### Mistake 2 — Confusing spread and rest

Example confusion:

```javascript
const arr = [1, 2, 3];

const newArr = [...arr]; // spread
```

But:

```javascript
function test(...arr) // rest
```

---

# 13. Real React Pattern

Reusable components use rest parameters frequently.

Example:

```javascript
const Input = ({ label, ...inputProps }) => {
  return (
    <div>
      <label>{label}</label>

      <input {...inputProps} />
    </div>
  );
};
```

Usage:

```javascript
<Input label="Email" type="email" placeholder="Enter email" />
```

`inputProps` collects all remaining props.

---

# 14. Tradeoffs

Advantages:

- flexible function parameters
- cleaner syntax
- replaces arguments object
- powerful with destructuring

Limitations:

- must be last parameter
- can reduce readability if overused

---

# 15. Mental Model

Remember this rule:

```
Spread → expand
Rest → collect
```

Example:

```
...array → expand
function(...args) → collect
```

---

# 16. Synthesis Questions

1. What problem did rest parameters solve?
2. Why is `arguments` object not ideal?
3. What is the difference between spread and rest?
4. Why must rest parameters be last?
5. How are rest parameters used in React props?

---

# Next Topic

Next concept is **one of the most important JavaScript topics for React**.

# 11. ES6 Array Methods

These are **core to how React renders UI lists**.

We will deeply cover:

```
map()
filter()
reduce()
find()
some()
every()
```

Especially **map()**, because React UI rendering depends on it.

Example React pattern:

```
users.map(user => <UserCard user={user} />)
```

This concept appears **hundreds of times in real React code**.

# 11. ES6 Array Methods

Tag: **[BOTH]**

This is one of the **most important JavaScript topics for React**.

Almost every React application uses **array methods** to:

- render UI lists
- filter data
- transform API responses
- update state
- compute derived values

Especially **`map()`**, which React uses for **dynamic UI rendering**.

We will cover:

```
map()
filter()
reduce()
find()
some()
every()
```

---

# 1. Problem Before ES6 Array Methods

Before modern JavaScript, developers used **loops**.

Example:

```javascript
const numbers = [1, 2, 3, 4];

const doubled = [];

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

console.log(doubled);
```

Problems:

- verbose code
- harder to read
- more mutation
- difficult chaining

Modern JavaScript introduced **functional array methods**.

---

# 2. Functional Programming Idea

Array methods follow **functional programming** principles:

```
Input array → transformation → new array
```

Important rule:

```
Original array remains unchanged
```

These methods are **immutable operations**.

This is exactly what **React prefers**.

---

# 3. map()

`map()` transforms each element of an array and returns a **new array**.

Syntax:

```javascript
array.map(callback);
```

Example:

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);
```

Output

```
[2,4,6]
```

Explanation:

```
1 → 2
2 → 4
3 → 6
```

---

## Step-by-Step Mental Model

```
Take each element
Apply transformation
Return new array
```

---

## map() in React (Extremely Important)

React uses `map()` to render UI lists.

Example:

```javascript
const users = ["Alice", "Bob", "Charlie"];

const list = users.map((user) => {
  return <li>{user}</li>;
});
```

React will render:

```
<li>Alice</li>
<li>Bob</li>
<li>Charlie</li>
```

This pattern appears constantly in React applications.

---

# 4. filter()

`filter()` returns elements that satisfy a condition.

Syntax:

```javascript
array.filter(condition);
```

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter((num) => num % 2 === 0);

console.log(even);
```

Output

```
[2,4]
```

Explanation:

```
1 → false
2 → true
3 → false
4 → true
5 → false
```

Only `true` values remain.

---

## filter() in React

Example removing items.

```javascript
const users = ["Alice", "Bob", "Charlie"];

const filtered = users.filter((user) => user !== "Bob");

console.log(filtered);
```

Output

```
["Alice","Charlie"]
```

Common use cases:

- deleting items
- filtering search results
- filtering API responses

---

# 5. reduce()

`reduce()` combines array values into a **single result**.

Syntax:

```javascript
array.reduce(callback, initialValue);
```

Example:

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(sum);
```

Output

```
10
```

Explanation step-by-step:

```
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

---

## reduce() Example — Object Counting

```javascript
const items = ["apple", "banana", "apple"];

const result = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;

  return acc;
}, {});

console.log(result);
```

Output

```
{ apple:2, banana:1 }
```

---

# 6. find()

`find()` returns the **first element that matches a condition**.

Syntax:

```javascript
array.find(condition);
```

Example:

```javascript
const numbers = [3, 7, 10, 15];

const result = numbers.find((num) => num > 8);

console.log(result);
```

Output

```
10
```

Stops at the **first match**.

---

## find() vs filter()

| Method   | Result      |
| -------- | ----------- |
| find()   | first match |
| filter() | all matches |

Example:

```
numbers = [5,10,15]
```

```
find(num > 7) → 10
filter(num > 7) → [10,15]
```

---

# 7. some()

`some()` checks if **at least one element satisfies a condition**.

Syntax:

```javascript
array.some(condition);
```

Example:

```javascript
const numbers = [1, 3, 5, 8];

const hasEven = numbers.some((num) => num % 2 === 0);

console.log(hasEven);
```

Output

```
true
```

Because **8 is even**.

---

# 8. every()

`every()` checks if **all elements satisfy a condition**.

Example:

```javascript
const numbers = [2, 4, 6];

const allEven = numbers.every((num) => num % 2 === 0);

console.log(allEven);
```

Output

```
true
```

If any value fails → result becomes false.

---

# 9. Summary Table

| Method | Purpose         | Return       |
| ------ | --------------- | ------------ |
| map    | transform array | new array    |
| filter | remove elements | new array    |
| reduce | combine values  | single value |
| find   | first match     | element      |
| some   | any match       | boolean      |
| every  | all match       | boolean      |

---

# 10. Real React Example

User list component.

```javascript
import React from "react";

const UserList = () => {
  const users = ["Alice", "Bob", "Charlie"];

  return (
    <ul>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
};

export default UserList;
```

Concepts used:

```
map()
JSX
dynamic UI rendering
```

---

# 11. Advanced Example — State Update

Example deleting user.

```javascript
const deleteUser = (name) => {
  setUsers(users.filter((user) => user !== name));
};
```

Explanation:

```
filter → remove matching user
create new array
React re-renders UI
```

---

# 12. Chaining Array Methods

Array methods can be chained.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter((num) => num % 2 === 0).map((num) => num * 10);

console.log(result);
```

Output

```
[20,40]
```

Process:

```
[1,2,3,4,5]
↓ filter
[2,4]
↓ map
[20,40]
```

---

# 13. Common Mistakes

### Mistake 1 — forgetting return in map()

Wrong:

```javascript
numbers.map((num) => {
  num * 2;
});
```

Correct:

```javascript
numbers.map((num) => num * 2);
```

---

### Mistake 2 — mutating arrays

Wrong:

```javascript
numbers.push(5);
```

Better:

```javascript
const newNumbers = [...numbers, 5];
```

---

# 14. Why React Depends on map()

React must render **lists of components**.

Example UI:

```
Users
-----
Alice
Bob
Charlie
```

React converts arrays into UI using **map()**.

Example:

```javascript
users.map((user) => <UserCard user={user} />);
```

---

# 15. Mental Model

Think of array methods like this:

```
map → transform
filter → remove
reduce → combine
find → locate
some → check any
every → check all
```

---

# 16. Synthesis Questions

1. Why is `map()` important in React?
2. What is the difference between `find()` and `filter()`?
3. Why are array methods considered immutable?
4. When should `reduce()` be used?
5. Why are array methods preferred over loops?

---

# Next Topic

Next concept begins **JavaScript asynchronous programming**, which is required for **API calls in React apps**.

```
12. Promises
13. Async / Await
14. Fetch API
```

These power:

```
data fetching
backend communication
React apps
REST APIs
```

# 12. Promises

Tag: **[FRESHER]**

Promises are the foundation of **modern asynchronous JavaScript**.
Every React application uses promises for:

- API calls
- database requests
- authentication
- file uploads
- background tasks

Understanding promises is essential before learning:

```
async / await
fetch API
data fetching in React
```

We will follow:

**Problem → Why → Concept → Syntax → Examples → React usage → Edge cases → Tradeoffs → Synthesis**

---

# 1. The Core Problem — Asynchronous Operations

Some tasks in JavaScript take **time to complete**.

Examples:

```
API request
database query
file upload
network communication
```

Example:

```javascript
fetch("https://api.example.com/users");
```

This request may take **1–2 seconds**.

If JavaScript waited for every operation to finish before continuing, the UI would **freeze**.

So JavaScript uses **asynchronous execution**.

---

# 2. Example of Asynchronous Behavior

Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Fetching data...");
}, 2000);

console.log("End");
```

Output:

```
Start
End
Fetching data...
```

JavaScript **does not wait** for the timer.

---

# 3. The Old Solution — Callbacks

Before promises, developers used **callbacks**.

Example:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData(function (data) {
  console.log(data);
});
```

Problems:

- nested callbacks
- difficult error handling
- messy code

This leads to **callback hell**.

Example:

```javascript
login(user, function () {
  getProfile(user, function () {
    getPosts(user, function () {
      getComments(user);
    });
  });
});
```

This becomes very difficult to maintain.

---

# 4. Why Promises Were Introduced

Promises solve callback problems.

Benefits:

- cleaner async code
- better error handling
- chaining operations
- easier to read

---

# 5. What is a Promise?

A **Promise** represents a value that will be available **in the future**.

Example:

```
Promise → result will arrive later
```

Real-life analogy:

```
Food delivery order
```

You place an order (promise).

Possible outcomes:

```
Food delivered → success
Restaurant cancels → failure
```

---

# 6. Promise States

A promise has **three states**.

| State     | Meaning                |
| --------- | ---------------------- |
| Pending   | operation not finished |
| Fulfilled | success                |
| Rejected  | error                  |

Example lifecycle:

```
Pending → Fulfilled
Pending → Rejected
```

---

# 7. Creating a Promise

Syntax:

```javascript
const promise = new Promise((resolve, reject) => {});
```

Example:

```javascript
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});
```

Explanation:

```
resolve → success result
reject → error result
```

---

# 8. Consuming a Promise

To handle promise results, we use:

```
.then()
.catch()
```

Example:

```javascript
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

---

# 9. Example — Simulated API Request

```javascript
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Tanish",
        age: 21,
      });
    }, 2000);
  });
}

fetchUser()
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });
```

Output after 2 seconds:

```
{ name: "Tanish", age: 21 }
```

---

# 10. Promise Chaining

Promises allow **chaining multiple operations**.

Example:

```javascript
fetchUser()
  .then((user) => {
    console.log("User fetched");

    return user.name;
  })
  .then((name) => {
    console.log("Name:", name);
  });
```

Each `.then()` receives the previous result.

---

# 11. Error Handling With catch()

Example:

```javascript
const promise = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

Output:

```
Error: Something went wrong
```

---

# 12. Promise Example With API

Real example using fetch.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

Flow:

```
API request
↓
convert response to JSON
↓
process data
```

---

# 13. Promise.all()

Used when multiple promises must run **in parallel**.

Example:

```javascript
Promise.all([fetch("/users"), fetch("/posts"), fetch("/comments")]).then(
  (responses) => {
    console.log(responses);
  },
);
```

All promises must **finish successfully**.

If one fails → entire promise fails.

---

# 14. Promise.race()

Returns the **first promise that finishes**.

Example:

```javascript
Promise.race([fetch("/fast"), fetch("/slow")]).then((result) => {
  console.log(result);
});
```

---

# 15. Real React Use Case

React apps fetch data from APIs.

Example:

```javascript
fetch("https://api.example.com/users")
  .then((res) => res.json())
  .then((data) => {
    setUsers(data);
  });
```

Here:

```
API call returns promise
.then() processes result
React updates state
```

---

# 16. Common Mistakes

### Mistake 1 — forgetting return

Wrong:

```javascript
.then(response => {
  response.json()
})
```

Correct:

```javascript
.then(response => {
  return response.json()
})
```

Or shorthand:

```javascript
.then(response => response.json())
```

---

### Mistake 2 — nested promises

Wrong:

```javascript
fetch(url).then((res) => {
  res.json().then((data) => console.log(data));
});
```

Correct:

```javascript
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

# 17. Promise vs Async/Await

Promises use `.then()` chaining.

Example:

```javascript
fetchUsers().then((data) => console.log(data));
```

Async/await provides **cleaner syntax**.

Example:

```javascript
const data = await fetchUsers();
```

We will cover this in the **next topic**.

---

# 18. Mental Model

Think of promises like this:

```
Future result container
```

Flow:

```
create promise
↓
resolve / reject
↓
handle with then / catch
```

---

# 19. Synthesis Questions

1. What problem do promises solve?
2. What are the three states of a promise?
3. What is the difference between resolve and reject?
4. Why is promise chaining useful?
5. What does Promise.all() do?

---

# Next Topic

Next concept:

# 13. Async / Await

This is **the modern way to write asynchronous JavaScript**.

It removes `.then()` chains and makes code look **synchronous and easier to read**.

Example transformation:

Promise style:

```
fetch(url)
.then(res => res.json())
.then(data => console.log(data))
```

Async/Await style:

```
const res = await fetch(url)
const data = await res.json()
```

This is the **standard pattern used in modern React apps**.

# 13. Async / Await

Tag: **[BOTH]**

`async` and `await` are the **modern way to handle asynchronous JavaScript**.

They are built on top of **Promises**, but make the code look **synchronous and easier to read**.

In React applications, `async/await` is used heavily for:

- API calls
- data fetching
- authentication requests
- backend communication

Example pattern used in real React apps:

```javascript
const response = await fetch("/api/users");
const data = await response.json();
```

---

# 1. Problem With Promise Chains

Promises solved callback problems, but `.then()` chains can still become hard to read.

Example:

```javascript
fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

Problems:

- nested logic
- harder debugging
- harder control flow

For large applications this becomes messy.

---

# 2. Why Async / Await Was Introduced

ES2017 introduced **async/await** to simplify asynchronous code.

Benefits:

```
Cleaner syntax
Readable code
Easier error handling
Looks like synchronous code
```

Instead of chaining `.then()`, we can **wait for results**.

---

# 3. Basic Concept

`async` marks a function as **asynchronous**.

`await` pauses execution until the promise resolves.

Example:

```javascript
async function getData() {}
```

Inside an async function we can use `await`.

---

# 4. Basic Example

Promise style:

```javascript
fetch("/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

Async/await style:

```javascript
async function fetchUsers() {
  const response = await fetch("/users");

  const data = await response.json();

  console.log(data);
}
```

The code now looks **step-by-step instead of chained**.

---

# 5. How Async Functions Work

An `async` function always returns a **promise**.

Example:

```javascript
async function greet() {
  return "Hello";
}
```

Calling the function:

```javascript
greet().then((data) => console.log(data));
```

Output:

```
Hello
```

Even though we returned a string, JavaScript wraps it inside a **promise**.

---

# 6. Await Keyword

`await` pauses execution until the promise resolves.

Example:

```javascript
function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 2000);
  });
}
```

Using await:

```javascript
async function test() {
  const result = await delay();

  console.log(result);
}
```

Output after 2 seconds:

```
Done
```

---

# 7. Step-by-Step Flow

Example:

```javascript
async function getUser() {
  const response = await fetch("/users");

  const data = await response.json();

  console.log(data);
}
```

Execution flow:

```
Start function
↓
wait for fetch
↓
response arrives
↓
convert JSON
↓
data ready
↓
print data
```

---

# 8. Async Function Example

Simulating API request.

```javascript
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Tanish",
        age: 21,
      });
    }, 2000);
  });
}
```

Using async/await:

```javascript
async function getUser() {
  const user = await fetchUser();

  console.log(user);
}

getUser();
```

Output:

```
{ name:"Tanish", age:21 }
```

---

# 9. Error Handling With try/catch

Async functions handle errors using **try/catch**.

Example:

```javascript
async function fetchData() {
  try {
    const response = await fetch("/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

This replaces `.catch()`.

---

# 10. Multiple Async Calls

Example:

```javascript
async function loadData() {
  const users = await fetch("/users");
  const posts = await fetch("/posts");

  console.log(users, posts);
}
```

Problem:

These requests run **one after another**.

---

# 11. Running Requests in Parallel

Use `Promise.all()`.

Example:

```javascript
async function loadData() {
  const [users, posts] = await Promise.all([fetch("/users"), fetch("/posts")]);
}
```

Now both requests run **simultaneously**.

---

# 12. Real React Example

Typical React data fetching.

```javascript
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.log(error);
  }
}
```

This pattern is extremely common.

---

# 13. Async Functions With Arrow Syntax

Example:

```javascript
const fetchUsers = async () => {
  const response = await fetch("/users");

  const data = await response.json();

  console.log(data);
};
```

This is the **most common pattern used in React apps**.

---

# 14. Common Mistakes

### Mistake 1 — using await outside async function

Wrong:

```javascript
const data = await fetch("/users");
```

Correct:

```javascript
async function load() {
  const data = await fetch("/users");
}
```

---

### Mistake 2 — forgetting await

Wrong:

```javascript
const response = fetch("/users");
```

`response` becomes a promise.

Correct:

```javascript
const response = await fetch("/users");
```

---

### Mistake 3 — not handling errors

Bad practice:

```javascript
const res = await fetch(url);
```

Better:

```javascript
try {
  const res = await fetch(url);
} catch (error) {
  console.log(error);
}
```

---

# 15. Async vs Promise Syntax

Promise style:

```javascript
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

Async/await style:

```javascript
try {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
} catch (err) {
  console.log(err);
}
```

Async/await is **cleaner and easier to understand**.

---

# 16. Mental Model

Think of async/await as:

```
Write asynchronous code
like synchronous code
```

Execution flow:

```
async function
↓
await promise
↓
continue when resolved
```

---

# 17. Why React Uses Async/Await

React applications constantly:

```
fetch API data
load user info
load products
submit forms
upload files
```

Async/await makes these tasks **clean and readable**.

---

# 18. Synthesis Questions

1. What problem does async/await solve?
2. Why must `await` be used inside `async` functions?
3. Why does an async function always return a promise?
4. When should `Promise.all()` be used?
5. Why is async/await preferred in modern React apps?

---

# Next Topic

Next concept:

# 14. Fetch API and API Calls

This is where **everything connects together**.

You will learn:

```
How frontend talks to backend
HTTP requests (GET / POST)
JSON responses
real API fetching
```

Example pattern used in almost every React app:

```
fetch()
async/await
API response
setState()
render UI
```

# 13. Async / Await

Tag: **[BOTH]**

`async` and `await` are the **modern way to handle asynchronous JavaScript**.

They are built on top of **Promises**, but make the code look **synchronous and easier to read**.

In React applications, `async/await` is used heavily for:

- API calls
- data fetching
- authentication requests
- backend communication

Example pattern used in real React apps:

```javascript
const response = await fetch("/api/users");
const data = await response.json();
```

---

# 1. Problem With Promise Chains

Promises solved callback problems, but `.then()` chains can still become hard to read.

Example:

```javascript
fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

Problems:

- nested logic
- harder debugging
- harder control flow

For large applications this becomes messy.

---

# 2. Why Async / Await Was Introduced

ES2017 introduced **async/await** to simplify asynchronous code.

Benefits:

```
Cleaner syntax
Readable code
Easier error handling
Looks like synchronous code
```

Instead of chaining `.then()`, we can **wait for results**.

---

# 3. Basic Concept

`async` marks a function as **asynchronous**.

`await` pauses execution until the promise resolves.

Example:

```javascript
async function getData() {}
```

Inside an async function we can use `await`.

---

# 4. Basic Example

Promise style:

```javascript
fetch("/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

Async/await style:

```javascript
async function fetchUsers() {
  const response = await fetch("/users");

  const data = await response.json();

  console.log(data);
}
```

The code now looks **step-by-step instead of chained**.

---

# 5. How Async Functions Work

An `async` function always returns a **promise**.

Example:

```javascript
async function greet() {
  return "Hello";
}
```

Calling the function:

```javascript
greet().then((data) => console.log(data));
```

Output:

```
Hello
```

Even though we returned a string, JavaScript wraps it inside a **promise**.

---

# 6. Await Keyword

`await` pauses execution until the promise resolves.

Example:

```javascript
function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 2000);
  });
}
```

Using await:

```javascript
async function test() {
  const result = await delay();

  console.log(result);
}
```

Output after 2 seconds:

```
Done
```

---

# 7. Step-by-Step Flow

Example:

```javascript
async function getUser() {
  const response = await fetch("/users");

  const data = await response.json();

  console.log(data);
}
```

Execution flow:

```
Start function
↓
wait for fetch
↓
response arrives
↓
convert JSON
↓
data ready
↓
print data
```

---

# 8. Async Function Example

Simulating API request.

```javascript
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Tanish",
        age: 21,
      });
    }, 2000);
  });
}
```

Using async/await:

```javascript
async function getUser() {
  const user = await fetchUser();

  console.log(user);
}

getUser();
```

Output:

```
{ name:"Tanish", age:21 }
```

---

# 9. Error Handling With try/catch

Async functions handle errors using **try/catch**.

Example:

```javascript
async function fetchData() {
  try {
    const response = await fetch("/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

This replaces `.catch()`.

---

# 10. Multiple Async Calls

Example:

```javascript
async function loadData() {
  const users = await fetch("/users");
  const posts = await fetch("/posts");

  console.log(users, posts);
}
```

Problem:

These requests run **one after another**.

---

# 11. Running Requests in Parallel

Use `Promise.all()`.

Example:

```javascript
async function loadData() {
  const [users, posts] = await Promise.all([fetch("/users"), fetch("/posts")]);
}
```

Now both requests run **simultaneously**.

---

# 12. Real React Example

Typical React data fetching.

```javascript
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.log(error);
  }
}
```

This pattern is extremely common.

---

# 13. Async Functions With Arrow Syntax

Example:

```javascript
const fetchUsers = async () => {
  const response = await fetch("/users");

  const data = await response.json();

  console.log(data);
};
```

This is the **most common pattern used in React apps**.

---

# 14. Common Mistakes

### Mistake 1 — using await outside async function

Wrong:

```javascript
const data = await fetch("/users");
```

Correct:

```javascript
async function load() {
  const data = await fetch("/users");
}
```

---

### Mistake 2 — forgetting await

Wrong:

```javascript
const response = fetch("/users");
```

`response` becomes a promise.

Correct:

```javascript
const response = await fetch("/users");
```

---

### Mistake 3 — not handling errors

Bad practice:

```javascript
const res = await fetch(url);
```

Better:

```javascript
try {
  const res = await fetch(url);
} catch (error) {
  console.log(error);
}
```

---

# 15. Async vs Promise Syntax

Promise style:

```javascript
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

Async/await style:

```javascript
try {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
} catch (err) {
  console.log(err);
}
```

Async/await is **cleaner and easier to understand**.

---

# 16. Mental Model

Think of async/await as:

```
Write asynchronous code
like synchronous code
```

Execution flow:

```
async function
↓
await promise
↓
continue when resolved
```

---

# 17. Why React Uses Async/Await

React applications constantly:

```
fetch API data
load user info
load products
submit forms
upload files
```

Async/await makes these tasks **clean and readable**.

---

# 18. Synthesis Questions

1. What problem does async/await solve?
2. Why must `await` be used inside `async` functions?
3. Why does an async function always return a promise?
4. When should `Promise.all()` be used?
5. Why is async/await preferred in modern React apps?

---

# Next Topic

Next concept:

# 14. Fetch API and API Calls

This is where **everything connects together**.

You will learn:

```
How frontend talks to backend
HTTP requests (GET / POST)
JSON responses
real API fetching
```

Example pattern used in almost every React app:

```
fetch()
async/await
API response
setState()
render UI
```
