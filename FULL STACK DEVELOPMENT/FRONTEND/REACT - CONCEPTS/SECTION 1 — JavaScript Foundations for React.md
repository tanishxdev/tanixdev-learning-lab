# SECTION 1 — JavaScript Foundations for React

React is built on **modern JavaScript**, so these concepts must be clear.

---

## 1. Modern JavaScript Overview

Tag: **[FRESHER]**

Subtopics

- Why modern JS exists
- ES5 vs ES6+
- Modules
- Functional programming ideas
- Immutability concept

---

### Problem

Before modern JavaScript (ES6 and beyond), writing large applications in JavaScript was difficult because:

1. Code became **hard to maintain**
2. **Global variables polluted the environment**
3. Reusing logic across files was difficult
4. Async code became messy (`callback hell`)
5. Data mutations caused unpredictable bugs
6. Code readability was poor

Example of older style JavaScript (ES5):

```javascript
// ES5 style function
function greet(name) {
  return "Hello " + name + "!";
}

console.log(greet("Tanish"));
```

Problems here:

- String concatenation becomes messy
- No clear modular structure
- Difficult to scale for large applications

When applications became bigger (like Gmail, Facebook), developers needed:

- cleaner syntax
- modular architecture
- safer variable management
- better async handling

This led to **Modern JavaScript (ES6+)**.

---

### Concept

Modern JavaScript refers to the **newer features added to JavaScript after ES6 (2015)**.

These features make JavaScript:

- easier to write
- easier to read
- easier to maintain
- safer for large applications

React heavily depends on these features.

Common modern JS features used in React:

- `let` and `const`
- arrow functions
- template literals
- destructuring
- spread operators
- modules
- promises
- async/await
- array methods (`map`, `filter`)

---

### ES5 vs ES6+

Understanding this difference helps explain **why modern JS exists**.

#### ES5 Example

```javascript
// Declaring variables using var
var name = "Tanish";

// function
function add(a, b) {
  return a + b;
}

// array iteration
var numbers = [1, 2, 3];

var doubled = numbers.map(function (n) {
  return n * 2;
});

console.log(doubled);
```

Issues:

- `var` causes scope problems
- functions verbose
- callbacks harder to read
- no modules

---

#### ES6+ Example

```javascript
// using const for safer variables
const name = "Tanish";

// arrow function
const add = (a, b) => a + b;

// array map using arrow function
const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);
```

Benefits:

- cleaner syntax
- less boilerplate
- easier to read
- easier to maintain

---

### Why React Requires Modern JavaScript

React code heavily uses:

1. **Arrow functions**
2. **Destructuring**
3. **Modules**
4. **Spread operators**
5. **Async functions**
6. **Array methods**

Example React component:

```javascript
// importing React module
import React from "react";

// functional component
const Welcome = ({ name }) => {
  return <h1>Hello {name}</h1>;
};

export default Welcome;
```

This code depends on:

- modules (`import`)
- arrow functions
- destructuring
- JSX expressions

Without modern JavaScript, React would be extremely difficult to write.

---

### Modules

Large applications must be split into **multiple files**.

Modules allow us to:

- export functionality
- import functionality
- organize code

Example:

#### math.js

```javascript
// exporting a function so other files can use it

export const add = (a, b) => {
  return a + b;
};
```

---

#### app.js

```javascript
// importing function from another file

import { add } from "./math.js";

const result = add(5, 3);

console.log(result);
```

Why this matters in React:

React apps are **hundreds of components**, so modular structure is essential.

Example:

```
src
components
Navbar.jsx
Footer.jsx
ProductCard.jsx
pages
Home.jsx
About.jsx
```

Each file is a module.

---

### Functional Programming Ideas

Modern JavaScript encourages **functional programming patterns**.

Core ideas:

1. **Pure functions**
2. **Avoid shared mutable state**
3. **Use functions as building blocks**
4. **Use array transformations instead of loops**

Example:

#### Imperative approach

```javascript
const numbers = [1, 2, 3];

let result = [];

for (let i = 0; i < numbers.length; i++) {
  result.push(numbers[i] * 2);
}

console.log(result);
```

---

#### Functional approach

```javascript
const numbers = [1, 2, 3];

// map transforms each element
const result = numbers.map((num) => num * 2);

console.log(result);
```

Benefits:

- shorter code
- predictable behavior
- easier debugging

React is designed around this **functional style**.

---

### Immutability Concept

Immutability means:

**Do not modify existing data.
Instead create new data.**

Bad example (mutation):

```javascript
const user = {
  name: "Tanish",
  age: 20,
};

// directly changing the object
user.age = 21;
```

Problem:

Other parts of program may depend on the old value.

---

Good example (immutable update):

```javascript
const user = {
  name: "Tanish",
  age: 20,
};

// creating a new object instead of mutating
const updatedUser = {
  ...user,
  age: 21,
};

console.log(updatedUser);
```

Why React requires immutability:

React detects UI changes by comparing objects.

If you mutate data, React **may not detect the change correctly**.

---

### Example: Why Immutability Matters in React

Bad approach:

```javascript
const items = ["apple", "banana"];

// mutation
items.push("orange");
```

Better approach:

```javascript
const items = ["apple", "banana"];

// immutable update
const newItems = [...items, "orange"];
```

React prefers **new objects instead of mutated ones**.

---

### Real Use Cases in React

Modern JavaScript is used everywhere in React:

| Feature           | React Usage           |
| ----------------- | --------------------- |
| Modules           | Component imports     |
| Arrow functions   | Functional components |
| Destructuring     | Props and state       |
| Spread operator   | State updates         |
| Template literals | UI text               |
| Array methods     | Rendering lists       |
| Async/await       | API calls             |

---

### Mental Model

Think of modern JavaScript as **React’s language toolkit**.

```
Modern JavaScript
        ↓
Cleaner Code
        ↓
Reusable Components
        ↓
Predictable State Updates
        ↓
Scalable React Applications
```

---

### Common Beginner Mistakes

1. Using `var` instead of `let` or `const`
2. Mutating objects directly
3. Not understanding modules
4. Writing imperative loops instead of array methods
5. Not using destructuring

These mistakes lead to **hard-to-debug React applications**.

---

### Tradeoffs

Modern JavaScript advantages:

- cleaner syntax
- modular architecture
- easier async code
- better maintainability

Possible downsides:

- requires build tools (Babel, bundlers)
- beginners may feel syntax overload initially

However modern tools like **Vite** handle all compilation automatically.

---

### Synthesis Questions

1. Why was modern JavaScript introduced?
2. What problems existed in ES5?
3. Why does React depend on ES6 features?
4. What is immutability and why is it important in React?
5. Why are modules important for large applications?
6. What is the difference between imperative and functional programming?

---

## 2. let vs const vs var

Tag: **[FRESHER]**

Subtopics

- Block scope
- Function scope
- Hoisting
- Best practices

---

### Problem

In early JavaScript, developers only had **`var`** to declare variables.

This caused several issues:

1. Variables leaked outside blocks
2. Unexpected overwriting of values
3. Difficult debugging in large applications
4. Scope confusion

Example problem with `var`:

```javascript
// variable declared using var
var count = 10;

if (true) {
  // same variable can be redeclared
  var count = 20;
}

console.log(count);
// Output: 20
```

Why is this dangerous?

Because the `var` inside the `if` block **replaces the outer variable**, even though logically we expect it to stay inside the block.

This behavior creates bugs in large applications like React.

To fix these issues, **ES6 introduced `let` and `const`.**

---

### Concept

Modern JavaScript provides **three ways to declare variables**

| Keyword | Scope    | Reassign | Redeclare |
| ------- | -------- | -------- | --------- |
| var     | function | yes      | yes       |
| let     | block    | yes      | no        |
| const   | block    | no       | no        |

---

### Function Scope vs Block Scope

Understanding scope is essential.

**Scope = where a variable can be accessed**

Two important types:

1. **Function Scope**
2. **Block Scope**

---

### Function Scope (var)

Variables declared with `var` belong to the **entire function**, not the block.

Example:

```javascript
function test() {
  if (true) {
    var message = "Hello";
  }

  console.log(message);
}

test();
```

Output

```
Hello
```

Even though `message` was declared inside `if`, it is accessible outside.

This is **function scope behavior**.

---

### Block Scope (let and const)

`let` and `const` respect block boundaries.

Example:

```javascript
function test() {
  if (true) {
    let message = "Hello";
  }

  console.log(message);
}
```

Output

```
ReferenceError: message is not defined
```

Why?

Because `message` exists **only inside the block**.

This makes programs **safer and more predictable**.

---

### Example: Loop Problem with var

A classic JavaScript problem.

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

Expected output

```
0
1
2
```

Actual output

```
3
3
3
```

Why?

Because `var` has function scope and the loop finishes before `setTimeout` executes.

Correct solution using `let`:

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

Output

```
0
1
2
```

`let` creates a **new variable for each loop iteration**.

---

### const Keyword

`const` means the variable **cannot be reassigned**.

Example:

```javascript
const age = 20;

age = 25;
```

Output

```
TypeError: Assignment to constant variable
```

This prevents accidental reassignment.

---

### Important Rule About const

`const` prevents **reassignment**, not **mutation**.

Example:

```javascript
const user = {
  name: "Tanish",
};

// this is allowed
user.name = "Rahul";

console.log(user);
```

Output

```
{ name: "Rahul" }
```

The object itself was not replaced — only its property changed.

But this is **still mutation**, which React tries to avoid.

---

### Hoisting

JavaScript moves variable declarations to the top of their scope.

This is called **hoisting**.

---

#### Hoisting with var

```javascript
console.log(a);

var a = 10;
```

JavaScript internally interprets this as:

```javascript
var a;

console.log(a);

a = 10;
```

Output

```
undefined
```

---

#### Hoisting with let and const

```javascript
console.log(a);

let a = 10;
```

Output

```
ReferenceError
```

Why?

Because `let` and `const` stay in a **Temporal Dead Zone (TDZ)** until initialized.

This prevents accidental usage before declaration.

---

### Best Practices (Modern JavaScript)

Preferred variable declaration strategy:

```
Use const by default
Use let if value must change
Avoid var completely
```

Example:

```javascript
// constant values
const API_URL = "https://api.example.com";

// mutable values
let count = 0;

count++;
```

---

### Why React Uses const Frequently

Most React variables should not be reassigned.

Example React component:

```javascript
import React from "react";

const Welcome = () => {
  const name = "Tanish";

  return <h1>Hello {name}</h1>;
};

export default Welcome;
```

Reasons `const` is used:

1. Prevents accidental reassignment
2. Makes code predictable
3. Encourages immutable patterns

---

### Common Mistakes

#### Using var in modern projects

```javascript
var count = 10;
```

Should be:

```javascript
const count = 10;
```

---

#### Using let when const should be used

```javascript
let name = "Tanish";
```

Better:

```javascript
const name = "Tanish";
```

Use `let` **only when reassignment is required**.

---

### Real React Use Cases

Example: State updates

```javascript
const [count, setCount] = useState(0);
```

Variables inside components are usually `const`.

Example arrays:

```javascript
const products = ["phone", "laptop", "tablet"];
```

---

### Mental Model

Think of variables like containers.

```
var   → loose container (dangerous)

let   → controlled container

const → locked container (safe)
```

Modern JavaScript encourages **predictable containers**.

---

### Tradeoffs

Advantages of `let` and `const`

- safer variable scope
- fewer accidental bugs
- predictable behavior
- better readability

Downside

Beginners may initially confuse **block scope behavior**.

---

### Synthesis Questions

1. Why was `let` introduced in JavaScript?
2. What is the difference between block scope and function scope?
3. Why should `var` be avoided in modern applications?
4. What is the Temporal Dead Zone?
5. Why does React encourage using `const`?

---

## 3. Arrow Functions

Tag: **[FRESHER]**

Subtopics

- Syntax
- Implicit return
- Lexical `this`
- Function expressions

---

### Problem

Before ES6, functions in JavaScript were written using the **`function` keyword**.

Example:

```javascript
function add(a, b) {
  return a + b;
}
```

Problems with this approach:

1. Syntax becomes **verbose**.
2. Harder to write **inline functions**.
3. `this` behavior becomes confusing in callbacks.
4. Code becomes less readable in functional patterns.

Example problem with callbacks:

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(function (num) {
  return num * 2;
});
```

This style becomes messy when used many times in React components.

Modern JavaScript introduced **arrow functions** to make functions **shorter and clearer**.

---

### Concept

Arrow functions are a **shorter syntax for writing functions**.

Basic syntax:

```javascript
(parameters) => {
    function body
}
```

Simple example:

```javascript
const add = (a, b) => {
  return a + b;
};
```

Arrow functions are commonly used for:

- callbacks
- array methods
- React components
- event handlers

---

### Basic Syntax

Traditional function:

```javascript
function greet(name) {
  return "Hello " + name;
}
```

Arrow function version:

```javascript
const greet = (name) => {
  return "Hello " + name;
};
```

Both produce the same result.

---

### Example

```javascript
const greet = (name) => {
  return "Hello " + name;
};

console.log(greet("Tanish"));
```

Output

```
Hello Tanish
```

---

### Implicit Return

Arrow functions allow **return without the `return` keyword** when the function has a single expression.

Example:

```javascript
const add = (a, b) => a + b;

console.log(add(5, 3));
```

Output

```
8
```

Why this works:

If the function body has **one expression**, JavaScript automatically returns it.

Equivalent long version:

```javascript
const add = (a, b) => {
  return a + b;
};
```

---

### Implicit Return with Objects

Important rule:

Returning objects requires **parentheses**.

Incorrect:

```javascript
const createUser = () => {
  name: "Tanish";
};
```

JavaScript thinks `{}` is a function block.

Correct version:

```javascript
const createUser = () => ({
  name: "Tanish",
});
```

Example:

```javascript
const user = createUser();

console.log(user);
```

Output

```
{ name: "Tanish" }
```

---

### Arrow Functions with One Parameter

Parentheses can be omitted.

Example:

```javascript
const square = (num) => num * num;

console.log(square(4));
```

Output

```
16
```

Equivalent version:

```javascript
const square = (num) => num * num;
```

---

### Arrow Functions with No Parameters

Empty parentheses are required.

```javascript
const sayHello = () => {
  console.log("Hello");
};

sayHello();
```

Output

```
Hello
```

---

### Arrow Functions in Array Methods

Arrow functions are heavily used with **array methods**.

Example: `map`

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);
```

Output

```
[2, 4, 6, 8]
```

---

Example: `filter`

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.filter((num) => num > 20);

console.log(result);
```

Output

```
[30, 40]
```

These patterns appear frequently in React.

---

### Arrow Functions in React Components

Modern React components are usually **arrow functions**.

Example component:

```javascript
import React from "react";

const Welcome = () => {
  return <h1>Hello React</h1>;
};

export default Welcome;
```

This component:

1. Is a function
2. Returns JSX
3. Is written using an arrow function

---

### Arrow Functions with Props

Example React component with props:

```javascript
import React from "react";

const Greeting = ({ name }) => {
  return <h1>Hello {name}</h1>;
};

export default Greeting;
```

Here arrow functions work well with:

- destructuring
- JSX
- inline functions

---

### Lexical `this`

One of the biggest advantages of arrow functions is **lexical `this`**.

Traditional functions change the meaning of `this`.

Example problem:

```javascript
const user = {
  name: "Tanish",
  greet: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

user.greet();
```

Output

```
undefined
```

Why?

Because `this` inside `setTimeout` refers to the **global object**, not the user object.

---

### Arrow Function Fix

Arrow functions inherit `this` from the surrounding scope.

```javascript
const user = {
  name: "Tanish",
  greet: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

user.greet();
```

Output

```
Tanish
```

Arrow functions **do not create their own `this`**.

They inherit it from the parent scope.

---

### React Example: Event Handler

Arrow functions are common in event handlers.

Example:

```javascript
const Button = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>Click Me</button>;
};
```

Arrow functions keep code clean and predictable.

---

### Common Mistakes

#### Forgetting parentheses around object return

Wrong:

```javascript
const getUser = () => {
  name: "Tanish";
};
```

Correct:

```javascript
const getUser = () => ({
  name: "Tanish",
});
```

---

#### Using arrow functions where normal functions are required

Arrow functions should **not be used as object methods when `this` is needed**.

Example mistake:

```javascript
const user = {
  name: "Tanish",
  greet: () => {
    console.log(this.name);
  },
};
```

Output

```
undefined
```

Because arrow functions do not bind `this`.

Correct:

```javascript
const user = {
  name: "Tanish",
  greet() {
    console.log(this.name);
  },
};
```

---

### Tradeoffs

Advantages:

- shorter syntax
- easier callbacks
- cleaner functional style
- lexical `this`
- works well with React

Possible downsides:

- beginners misunderstand `this`
- implicit return can reduce clarity in complex functions

---

### Real React Use Cases

Arrow functions appear everywhere in React:

| Use Case              | Example                            |
| --------------------- | ---------------------------------- |
| Functional components | `const App = () => {}`             |
| Array rendering       | `items.map(item => ...)`           |
| Event handlers        | `onClick={() => doSomething()}`    |
| State updates         | `setCount(prev => prev + 1)`       |
| Utility functions     | `const formatPrice = price => ...` |

---

### Mental Model

Think of arrow functions as **lightweight functions designed for modern JavaScript workflows**.

```
Traditional functions
    ↓
Verbose syntax

Arrow functions
    ↓
Shorter syntax
Better callbacks
Better React patterns
```

---

### Synthesis Questions

1. Why were arrow functions introduced in JavaScript?
2. What is implicit return?
3. Why must objects be wrapped in parentheses when returned?
4. What does lexical `this` mean?
5. Why are arrow functions commonly used in React components?
6. When should arrow functions not be used?

---

## 4. Template Literals

Tag: **[FRESHER]**

Subtopics

- String interpolation
- Dynamic UI text
- Multiline strings

---

### Problem

Before modern JavaScript, strings were combined using **string concatenation** with the `+` operator.

Example:

```javascript
// Combining strings using +
var name = "Tanish";
var message = "Hello " + name + ", welcome to the website";

console.log(message);
```

Output

```
Hello Tanish, welcome to the website
```

Problems with this approach:

1. Code becomes **hard to read**
2. Difficult when many variables exist
3. Poor readability for UI messages
4. Multiline strings become messy

Example problem with multiple values:

```javascript
var product = "Laptop";
var price = 50000;

var text = "The product " + product + " costs ₹" + price;

console.log(text);
```

As UI becomes complex (like React apps), concatenation becomes **very messy and error-prone**.

To solve this, **ES6 introduced Template Literals**.

---

### Concept

Template literals allow us to **embed variables inside strings easily**.

They use **backticks** instead of quotes.

```
``
```

Inside the string we can insert expressions using:

```
${expression}
```

Basic syntax:

```javascript
const message = `Hello ${name}`;
```

This is called **string interpolation**.

---

### Example

```javascript
const name = "Tanish";

const message = `Hello ${name}`;

console.log(message);
```

Output

```
Hello Tanish
```

Equivalent old version:

```javascript
var name = "Tanish";
var message = "Hello " + name;
```

Template literals are **cleaner and easier to read**.

---

### Multiple Variables Example

```javascript
const product = "Laptop";
const price = 50000;

const message = `The product ${product} costs ₹${price}`;

console.log(message);
```

Output

```
The product Laptop costs ₹50000
```

---

### Expressions Inside Template Literals

Template literals can also evaluate **JavaScript expressions**.

Example:

```javascript
const a = 5;
const b = 3;

const result = `Sum is ${a + b}`;

console.log(result);
```

Output

```
Sum is 8
```

This means **any valid JavaScript expression can be used**.

---

### Function Calls Inside Template Literals

```javascript
const greet = (name) => {
  return `Hello ${name}`;
};

const message = `Message: ${greet("Tanish")}`;

console.log(message);
```

Output

```
Message: Hello Tanish
```

---

### Multiline Strings

Before template literals, writing multiline strings required `\n`.

Example:

```javascript
var text = "Hello\nWelcome\nto\nReact";

console.log(text);
```

Template literals allow **natural multiline strings**.

```javascript
const text = `
Hello
Welcome
to
React
`;

console.log(text);
```

Output

```
Hello
Welcome
to
React
```

This is extremely useful when generating **HTML or UI templates**.

---

### Real Example: HTML Template

```javascript
const name = "Tanish";
const age = 20;

const html = `
<div>
    <h1>${name}</h1>
    <p>Age: ${age}</p>
</div>
`;

console.log(html);
```

This pattern is conceptually similar to **JSX rendering in React**.

---

### React Example: Dynamic UI Text

React frequently uses template literals for dynamic strings.

Example:

```javascript
const product = "Laptop";
const price = 50000;

const message = `The price of ${product} is ₹${price}`;

console.log(message);
```

Another example:

```javascript
const user = "Tanish";

const title = `Welcome back, ${user}!`;
```

---

### React Example: Dynamic Class Names

Template literals are useful when building dynamic class names.

```javascript
const isActive = true;

// dynamic class name
const className = `button ${isActive ? "active" : "inactive"}`;

console.log(className);
```

Output

```
button active
```

This pattern is extremely common in React UI styling.

---

### React Example: Dynamic URL

Template literals are often used for API requests.

```javascript
const userId = 10;

const url = `https://api.example.com/users/${userId}`;

console.log(url);
```

Output

```
https://api.example.com/users/10
```

---

### Combining Template Literals with Array Methods

Example:

```javascript
const users = ["Aman", "Riya", "Tanish"];

const messages = users.map((user) => `Hello ${user}`);

console.log(messages);
```

Output

```
["Hello Aman", "Hello Riya", "Hello Tanish"]
```

This pattern appears often in **React list rendering**.

---

### Common Mistakes

#### Using quotes instead of backticks

Wrong:

```javascript
const name = "Tanish";

const message = "Hello ${name}";
```

Output

```
Hello ${name}
```

Because `" "` does not support interpolation.

Correct:

```javascript
const message = `Hello ${name}`;
```

---

#### Forgetting `${}`

Wrong:

```javascript
const price = 500;

const text = `Price is $price`;
```

Correct:

```javascript
const text = `Price is ${price}`;
```

---

### Tradeoffs

Advantages:

- cleaner syntax
- easier dynamic strings
- supports expressions
- supports multiline text

Possible downside:

- beginners sometimes confuse backticks with quotes.

---

### Real React Use Cases

Template literals are commonly used for:

| Use Case            | Example             |
| ------------------- | ------------------- |
| Dynamic UI messages | `Welcome ${user}`   |
| API URLs            | `/users/${id}`      |
| Class names         | `btn ${active}`     |
| Debug logging       | `User ID: ${id}`    |
| HTML templates      | template generation |

---

### Mental Model

Think of template literals as **smart strings**.

Old strings:

```
"Hello " + name
```

Modern strings:

```
`Hello ${name}`
```

They allow **JavaScript expressions inside text**.

---

### Synthesis Questions

1. Why were template literals introduced?
2. What symbol is used to write template literals?
3. What does `${}` represent?
4. Why are template literals better than string concatenation?
5. How do template literals help with dynamic UI?
6. How do template literals support multiline strings?

---

## 5. Ternary Operators

Tag: **[FRESHER]**

Subtopics

- Conditional expressions
- Nested ternaries
- Inline UI logic

---

### Problem

In programming, we often need **conditional logic**.

Example:

- If user is logged in → show dashboard
- If user is not logged in → show login button

Traditional JavaScript uses **if–else statements**.

Example:

```javascript
// traditional conditional logic

const age = 18;

let message;

if (age >= 18) {
  message = "You can vote";
} else {
  message = "You cannot vote";
}

console.log(message);
```

Output

```
You can vote
```

This works, but sometimes we only want to **choose between two values**.

Writing full `if-else` blocks becomes **long and repetitive**, especially in UI rendering.

Example problem in UI:

```javascript
let buttonText;

if (isLoggedIn) {
  buttonText = "Logout";
} else {
  buttonText = "Login";
}
```

For simple decisions like this, JavaScript introduced the **ternary operator**.

---

### Concept

The ternary operator is a **shorter way to write conditional expressions**.

Syntax:

```
condition ? value_if_true : value_if_false
```

Structure:

```
condition
   ?
true_result
   :
false_result
```

It is called **ternary** because it has **three parts**:

1. Condition
2. True result
3. False result

---

### Basic Example

```javascript
const age = 20;

const message = age >= 18 ? "You can vote" : "You cannot vote";

console.log(message);
```

Output

```
You can vote
```

Equivalent `if-else` version:

```javascript
let message;

if (age >= 18) {
  message = "You can vote";
} else {
  message = "You cannot vote";
}
```

Ternary makes this **shorter and more readable**.

---

### Example with Numbers

```javascript
const number = 7;

const result = number % 2 === 0 ? "Even number" : "Odd number";

console.log(result);
```

Output

```
Odd number
```

---

### Example with Variables

```javascript
const score = 45;

const status = score >= 50 ? "Passed" : "Failed";

console.log(status);
```

Output

```
Failed
```

---

### Using Ternary Inside Template Literals

```javascript
const isAdmin = true;

const message = `User role: ${isAdmin ? "Admin" : "Regular User"}`;

console.log(message);
```

Output

```
User role: Admin
```

---

### Nested Ternary Operators

Ternaries can also be **nested** when multiple conditions exist.

Example:

```javascript
const score = 82;

const grade =
  score >= 90 ? "A" : score >= 75 ? "B" : score >= 50 ? "C" : "Fail";

console.log(grade);
```

Output

```
B
```

Equivalent `if-else`:

```javascript
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 75) {
  grade = "B";
} else if (score >= 50) {
  grade = "C";
} else {
  grade = "Fail";
}
```

Nested ternaries are **shorter but harder to read**, so they should be used carefully.

---

### Inline UI Logic (Very Important for React)

React often renders UI conditionally.

Example:

- show **Login button** if user not logged in
- show **Logout button** if logged in

Example logic:

```javascript
const isLoggedIn = true;

const buttonText = isLoggedIn ? "Logout" : "Login";

console.log(buttonText);
```

Output

```
Logout
```

---

### React Example (Conditional UI)

Example component:

```javascript
import React from "react";

const AuthButton = () => {
  const isLoggedIn = true;

  return <button>{isLoggedIn ? "Logout" : "Login"}</button>;
};

export default AuthButton;
```

Explanation:

```
{ condition ? value1 : value2 }
```

React evaluates the expression and renders the correct text.

---

### Example: Showing Different Components

```javascript
import React from "react";

const Dashboard = () => {
  return <h2>Dashboard</h2>;
};

const Login = () => {
  return <h2>Please login</h2>;
};

const App = () => {
  const isLoggedIn = true;

  return <div>{isLoggedIn ? <Dashboard /> : <Login />}</div>;
};

export default App;
```

This is a **very common React pattern**.

---

### Example with Styling

Ternary can also change styles.

```javascript
const isActive = true;

const className = isActive ? "button-active" : "button-disabled";

console.log(className);
```

Output

```
button-active
```

This pattern appears often when styling React components.

---

### Common Mistakes

#### Using ternary for complex logic

Bad example:

```javascript
const result = a > b ? (a > c ? a : c) : b > c ? b : c;
```

This becomes **hard to read**.

Better approach:

Use `if-else` for complex logic.

---

#### Forgetting the false condition

Wrong:

```javascript
condition ? "Yes";
```

Correct:

```javascript
condition ? "Yes" : "No";
```

Both outcomes must exist.

---

### Best Practices

Use ternary when:

- Choosing between **two simple values**
- Rendering UI conditionally
- Writing short expressions

Avoid ternary when:

- Logic becomes complex
- Nested conditions become unreadable

---

### Real React Use Cases

Ternary operators appear frequently in React:

| Use Case             | Example                               |
| -------------------- | ------------------------------------- |
| Login/logout buttons | `{isLoggedIn ? "Logout" : "Login"}`   |
| Showing components   | `{user ? <Dashboard/> : <Login/>}`    |
| Status messages      | `{loading ? "Loading..." : "Loaded"}` |
| Dynamic styles       | `{active ? "active-class" : ""}`      |

---

### Mental Model

Think of ternary as **a decision shortcut**.

```
if condition
    choose A
else
    choose B
```

Short form:

```
condition ? A : B
```

---

### Synthesis Questions

1. Why was the ternary operator introduced?
2. What are the three parts of a ternary expression?
3. When should ternary operators be avoided?
4. How are ternary operators used in React UI rendering?
5. What is a nested ternary?

---

## 6. Object Destructuring

Tag: **[BOTH]**

Subtopics

- Extract properties
- Renaming variables
- Default values

---

### Problem

Objects are used everywhere in JavaScript.

Example:

```javascript id="js_obj_basic"
// an object representing a user
const user = {
  name: "Tanish",
  age: 20,
  city: "Delhi",
};
```

To access values traditionally we write:

```javascript id="js_obj_access"
// accessing object properties
const name = user.name;
const age = user.age;
const city = user.city;

console.log(name);
console.log(age);
console.log(city);
```

Output

```
Tanish
20
Delhi
```

Problems with this approach:

1. **Repetitive code**
2. Poor readability when many properties exist
3. Harder to work with large objects (common in React props)

Example problem in large objects:

```javascript id="js_large_object"
// imagine this object comes from an API
const product = {
  title: "Laptop",
  price: 50000,
  brand: "Lenovo",
  rating: 4.5,
};

// traditional extraction
const title = product.title;
const price = product.price;
const brand = product.brand;
const rating = product.rating;
```

This becomes repetitive.

Modern JavaScript introduced **Object Destructuring** to solve this.

---

### Concept

Object destructuring allows us to **extract properties from objects into variables in one step**.

Basic syntax:

```id="syntax_obj_destructuring"
const { property1, property2 } = object;
```

Example:

```javascript id="js_obj_destructuring_basic"
const user = {
  name: "Tanish",
  age: 20,
  city: "Delhi",
};

// destructuring
const { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);
```

Output

```
Tanish
20
Delhi
```

Instead of **three lines**, destructuring extracts everything in **one statement**.

---

### Step-by-Step Understanding

Object:

```javascript id="js_obj_example"
const user = {
  name: "Tanish",
  age: 20,
};
```

Destructuring:

```javascript id="js_obj_extract"
// extract values into variables
const { name, age } = user;
```

Internally JavaScript does:

```javascript id="js_internal_equivalent"
const name = user.name;
const age = user.age;
```

So destructuring is **syntactic sugar**.

---

### Partial Destructuring

You do not need to extract all properties.

Example:

```javascript id="js_partial_destructuring"
const user = {
  name: "Tanish",
  age: 20,
  city: "Delhi",
};

// extract only name
const { name } = user;

console.log(name);
```

Output

```
Tanish
```

---

### Renaming Variables

Sometimes property names may not match the variable name we want.

Example:

```javascript id="js_rename_destructuring"
const user = {
  name: "Tanish",
  age: 20,
};

// rename variable
const { name: userName } = user;

console.log(userName);
```

Output

```
Tanish
```

Explanation:

```id="rename_explanation"
name → property
userName → variable
```

This is useful when variables conflict with existing names.

---

### Default Values

Sometimes properties might not exist.

Example:

```javascript id="js_default_problem"
const user = {
  name: "Tanish",
};

// age does not exist
const { name, age } = user;

console.log(age);
```

Output

```
undefined
```

We can provide **default values**.

```javascript id="js_default_solution"
const user = {
  name: "Tanish",
};

const { name, age = 18 } = user;

console.log(age);
```

Output

```
18
```

This prevents errors when data is missing.

---

### Destructuring Function Parameters

Object destructuring becomes very powerful with **function parameters**.

Example without destructuring:

```javascript id="js_function_no_destructuring"
function printUser(user) {
  console.log(user.name);
  console.log(user.age);
}

printUser({
  name: "Tanish",
  age: 20,
});
```

Using destructuring:

```javascript id="js_function_destructuring"
// destructuring inside parameters
function printUser({ name, age }) {
  console.log(name);
  console.log(age);
}

printUser({
  name: "Tanish",
  age: 20,
});
```

This pattern is heavily used in **React components**.

---

### React Example (Props Destructuring)

React components receive **props as objects**.

Example without destructuring:

```javascript id="react_props_no_destructuring"
const Greeting = (props) => {
  return <h1>Hello {props.name}</h1>;
};
```

Better version using destructuring:

```javascript id="react_props_destructuring"
// destructuring props
const Greeting = ({ name }) => {
  return <h1>Hello {name}</h1>;
};
```

Why this is better:

1. Cleaner code
2. Easier to read
3. Less repetition

This is the **standard pattern in React**.

---

### Multiple Props Example

```javascript id="react_multiple_props"
const Product = ({ title, price, brand }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Price: ₹{price}</p>
      <p>Brand: {brand}</p>
    </div>
  );
};
```

Instead of:

```javascript id="react_bad_props"
props.title;
props.price;
props.brand;
```

We directly use variables.

---

### Destructuring Nested Objects

Objects may contain nested structures.

Example:

```javascript id="js_nested_object"
const user = {
  name: "Tanish",
  address: {
    city: "Delhi",
    country: "India",
  },
};
```

Nested destructuring:

```javascript id="js_nested_destructuring"
const {
  address: { city },
} = user;

console.log(city);
```

Output

```
Delhi
```

---

### Combining Destructuring with Default Values

```javascript id="js_combined_destructuring"
const user = {
  name: "Tanish",
};

const { name, city = "Unknown" } = user;

console.log(city);
```

Output

```
Unknown
```

---

### Common Mistakes

#### Variable name must match property name

Wrong:

```javascript id="js_wrong_destructuring"
const user = { name: "Tanish" };

const { username } = user;
```

Output

```
undefined
```

Correct:

```javascript id="js_correct_destructuring"
const { name } = user;
```

---

#### Destructuring undefined objects

Example error:

```javascript id="js_error_example"
const { name } = undefined;
```

Output

```
TypeError
```

Always ensure the object exists.

---

### Tradeoffs

Advantages:

- shorter syntax
- better readability
- less repetition
- easier working with objects
- perfect for React props

Possible downsides:

- beginners may find nested destructuring confusing
- variable names must match property names

---

### Real React Use Cases

Object destructuring is used everywhere in React.

| Use Case             | Example                  |
| -------------------- | ------------------------ |
| Props extraction     | `const { name } = props` |
| Component parameters | `({ name })`             |
| State objects        | `{ user, setUser }`      |
| API responses        | `{ data, error }`        |
| Hook returns         | `{ value }`              |

---

### Mental Model

Think of destructuring as **unpacking a box**.

```id="mental_model_destructuring"
Object
{
 name
 age
 city
}

Destructuring

const { name, age } = user
```

We **pull values directly out of the object**.

---

### Synthesis Questions

1. Why was object destructuring introduced?
2. How does destructuring reduce repetitive code?
3. How do you rename variables during destructuring?
4. How can default values be used in destructuring?
5. Why is destructuring heavily used in React props?
6. How does nested destructuring work?

---

Next topic:

```
7. Array Destructuring
```

This is also **very important in React**, because hooks like:

```
useState
useReducer
```

use **array destructuring**.

## 7. Array Destructuring

Tag: **[BOTH]**

Subtopics

- Value extraction
- Swapping variables
- Rest elements

---

### Problem

Arrays are used very frequently in JavaScript.

Example:

```javascript
// array containing user information
const user = ["Tanish", 20, "Delhi"];
```

To access values traditionally we use **indexes**.

```javascript
// accessing array elements using index
const name = user[0];
const age = user[1];
const city = user[2];

console.log(name);
console.log(age);
console.log(city);
```

Output

```
Tanish
20
Delhi
```

Problems with this approach:

1. Index-based access reduces **readability**
2. Repetitive code
3. Easy to introduce bugs if index positions change

Example issue:

```javascript
const product = ["Laptop", 50000, "Lenovo"];

// if array order changes, code breaks
const price = product[1];
```

To solve this problem, JavaScript introduced **Array Destructuring**.

---

### Concept

Array destructuring allows us to **extract values from arrays into variables easily**.

Syntax:

```
const [variable1, variable2] = array;
```

Example:

```javascript
const user = ["Tanish", 20, "Delhi"];

// destructuring
const [name, age, city] = user;

console.log(name);
console.log(age);
console.log(city);
```

Output

```
Tanish
20
Delhi
```

Instead of writing:

```
user[0]
user[1]
user[2]
```

we extract values directly.

---

### How It Works

Array destructuring works based on **position**.

Example:

```javascript
const numbers = [10, 20, 30];

// destructuring
const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);
```

Output

```
10
20
30
```

The variable positions must match array positions.

---

### Partial Destructuring

We do not need to extract all elements.

Example:

```javascript
const numbers = [10, 20, 30, 40];

// extract only first two
const [a, b] = numbers;

console.log(a);
console.log(b);
```

Output

```
10
20
```

Remaining elements are ignored.

---

### Skipping Elements

Sometimes we only need certain positions.

Example:

```javascript
const numbers = [10, 20, 30];

// skip second element
const [first, , third] = numbers;

console.log(first);
console.log(third);
```

Output

```
10
30
```

The comma skips an index.

---

### Default Values

If the array does not contain a value, we can provide defaults.

Example:

```javascript
const user = ["Tanish"];

// provide default value for age
const [name, age = 18] = user;

console.log(name);
console.log(age);
```

Output

```
Tanish
18
```

This prevents `undefined` values.

---

### Swapping Variables (Very Useful Trick)

Before destructuring, swapping required a temporary variable.

Traditional approach:

```javascript
let a = 10;
let b = 20;

// temporary variable
let temp = a;
a = b;
b = temp;

console.log(a, b);
```

Using array destructuring:

```javascript
let a = 10;
let b = 20;

// swapping values
[a, b] = [b, a];

console.log(a, b);
```

Output

```
20 10
```

This is a **clean and common pattern**.

---

### Rest Elements

The rest operator allows capturing **remaining elements**.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

// first element separate, rest grouped
const [first, ...rest] = numbers;

console.log(first);
console.log(rest);
```

Output

```
1
[2, 3, 4, 5]
```

Explanation:

```
first → first element
rest → remaining elements
```

---

### Array Destructuring in Functions

Example:

```javascript
function printCoordinates([x, y]) {
  console.log("X:", x);
  console.log("Y:", y);
}

printCoordinates([10, 20]);
```

Output

```
X: 10
Y: 20
```

This pattern is useful when working with structured arrays.

---

### Most Important React Example — useState

Array destructuring is heavily used in React hooks.

Example:

```javascript
import { useState } from "react";

const Counter = () => {
  // array destructuring from useState
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
```

Explanation:

```
useState returns an array:

[ stateValue , stateUpdaterFunction ]
```

Destructuring extracts them:

```
count
setCount
```

Without destructuring it would look like:

```javascript
const state = useState(0);

const count = state[0];
const setCount = state[1];
```

Destructuring makes it much cleaner.

---

### Another Example — Returning Multiple Values

Functions can return arrays.

Example:

```javascript
function getUser() {
  return ["Tanish", 20];
}

const [name, age] = getUser();

console.log(name);
console.log(age);
```

Output

```
Tanish
20
```

This pattern is used frequently in **custom hooks** in React.

---

### Common Mistakes

#### Order matters

Example:

```javascript
const user = ["Tanish", 20];

const [age, name] = user;

console.log(age);
```

Output

```
Tanish
```

Because destructuring depends on **position**.

---

#### Destructuring undefined

Example:

```javascript
const [a, b] = undefined;
```

Output

```
TypeError
```

Ensure the array exists.

---

### Tradeoffs

Advantages:

- shorter syntax
- cleaner extraction
- easier variable swapping
- essential for React hooks

Possible downsides:

- relies on element order
- incorrect ordering causes bugs

---

### Real React Use Cases

Array destructuring appears frequently in React.

| Use Case      | Example             |
| ------------- | ------------------- |
| React state   | `[count, setCount]` |
| useReducer    | `[state, dispatch]` |
| custom hooks  | `[data, loading]`   |
| API responses | `[result, error]`   |

---

### Mental Model

Think of destructuring as **unpacking an array into variables**.

```
Array

[10, 20, 30]

Destructuring

const [a, b, c]
```

Values are assigned **by position**.

---

### Synthesis Questions

1. Why was array destructuring introduced?
2. How does array destructuring work internally?
3. How can elements be skipped in destructuring?
4. How does the rest operator work in arrays?
5. Why is array destructuring important for React hooks?
6. How can destructuring be used to swap variables?

## 8. Default Parameters

Tag: **[FRESHER]**

Subtopics

- Why default parameters exist
- Basic syntax
- Using expressions as defaults
- Default parameters with objects and arrays

---

### Problem

Functions often require **input parameters**.

Example:

```javascript
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Tanish"));
```

Output

```
Hello Tanish
```

But what happens if we **do not pass an argument**?

```javascript
function greet(name) {
  return "Hello " + name;
}

console.log(greet());
```

Output

```
Hello undefined
```

Why?

Because JavaScript assigns **`undefined`** to missing parameters.

This creates problems:

1. Unexpected outputs
2. UI bugs
3. Extra conditional checks inside functions

Developers previously solved this using **manual default checks**.

Example (old style):

```javascript
function greet(name) {
  // checking if parameter is undefined
  if (name === undefined) {
    name = "Guest";
  }

  return "Hello " + name;
}

console.log(greet());
```

Output

```
Hello Guest
```

This works, but writing these checks repeatedly becomes **verbose and messy**.

To solve this, modern JavaScript introduced **Default Parameters**.

---

### Concept

Default parameters allow us to **assign default values directly in the function definition**.

Syntax:

```
function functionName(parameter = defaultValue)
```

Example:

```javascript
function greet(name = "Guest") {
  return "Hello " + name;
}

console.log(greet());
```

Output

```
Hello Guest
```

If an argument is provided, the default value is ignored.

```javascript
console.log(greet("Tanish"));
```

Output

```
Hello Tanish
```

---

### Basic Example

```javascript
function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5));
```

Output

```
10
```

Because:

```
b = 2 (default)
```

When both values are passed:

```javascript
console.log(multiply(5, 4));
```

Output

```
20
```

---

### Default Values with Multiple Parameters

Example:

```javascript
function createUser(name = "Guest", age = 18) {
  return `${name} is ${age} years old`;
}

console.log(createUser());
```

Output

```
Guest is 18 years old
```

Passing one argument:

```javascript
console.log(createUser("Tanish"));
```

Output

```
Tanish is 18 years old
```

---

### Using Expressions as Default Values

Default parameters can also use **expressions**.

Example:

```javascript
function calculatePrice(price, tax = price * 0.18) {
  return price + tax;
}

console.log(calculatePrice(100));
```

Output

```
118
```

Here:

```
tax = price * 0.18
```

JavaScript evaluates this automatically.

---

### Default Parameters with Functions

A function can also be used as a default value.

Example:

```javascript
function getDefaultName() {
  return "Guest";
}

function greet(name = getDefaultName()) {
  return `Hello ${name}`;
}

console.log(greet());
```

Output

```
Hello Guest
```

---

### Default Parameters with Objects

Functions often receive objects.

Example:

```javascript
function createUser(user = {}) {
  console.log(user);
}

createUser();
```

Output

```
{}
```

Providing an empty object prevents errors.

---

### Default Parameters with Destructuring

This pattern is **very common in React**.

Example:

```javascript
function printUser({ name = "Guest", age = 18 } = {}) {
  console.log(name);
  console.log(age);
}

printUser();
```

Output

```
Guest
18
```

Why is `= {}` important?

Because without it:

```javascript
printUser();
```

would cause an error when destructuring `undefined`.

---

### React Example (Component Props)

React components sometimes use default values.

Example:

```javascript
const Greeting = ({ name = "Guest" }) => {
  return <h1>Hello {name}</h1>;
};

export default Greeting;
```

Usage:

```javascript
<Greeting />
```

Output

```
Hello Guest
```

If props are provided:

```javascript
<Greeting name="Tanish" />
```

Output

```
Hello Tanish
```

Default parameters make components **more flexible**.

---

### Common Mistakes

#### Passing `undefined` vs `null`

Default values apply only when the parameter is **undefined**.

Example:

```javascript
function greet(name = "Guest") {
  return name;
}

console.log(greet(undefined));
```

Output

```
Guest
```

But:

```javascript
console.log(greet(null));
```

Output

```
null
```

Because `null` is considered a **valid value**.

---

#### Parameter Order

Parameters with defaults should usually appear **after required parameters**.

Bad example:

```javascript
function test(a = 10, b) {}
```

Better:

```javascript
function test(a, b = 10) {}
```

---

### Tradeoffs

Advantages:

- cleaner function definitions
- removes manual checks
- safer parameter handling
- improves readability

Possible downsides:

- confusion between `undefined` and `null`
- misuse when too many defaults exist

---

### Real React Use Cases

Default parameters appear frequently in React.

| Use Case                    | Example                            |
| --------------------------- | ---------------------------------- |
| Component props             | `({ title = "Default Title" })`    |
| Optional function arguments | `function fetchData(url = "/api")` |
| UI fallback values          | `count = 0`                        |
| API parameter defaults      | `page = 1`                         |

---

### Mental Model

Think of default parameters as **automatic fallbacks**.

```
If value exists → use value
If value missing → use default
```

Example:

```
greet("Tanish") → Hello Tanish
greet() → Hello Guest
```

---

### Synthesis Questions

1. Why were default parameters introduced in JavaScript?
2. What problem did developers face before ES6 default parameters?
3. When are default parameters applied?
4. What is the difference between `undefined` and `null` in default parameters?
5. Why are default parameters useful in React components?

## 9. Spread Operator

Tag: **[BOTH]**

Subtopics

- Cloning arrays
- Copying objects
- Immutable updates

---

### Problem

In JavaScript, we often need to:

- copy arrays
- merge arrays
- update objects
- combine objects

Before modern JavaScript, doing these tasks required **manual loops or helper functions**, which made the code longer and error-prone.

Example problem — copying an array.

```javascript
// original array
const numbers = [1, 2, 3];

// copying using traditional method
const copy = numbers.slice();

console.log(copy);
```

Output

```
[1, 2, 3]
```

Another old approach:

```javascript
const numbers = [1, 2, 3];

const copy = [];

for (let i = 0; i < numbers.length; i++) {
  copy.push(numbers[i]);
}

console.log(copy);
```

Problems:

- unnecessary loops
- verbose code
- harder to read

Modern JavaScript introduced the **Spread Operator** to solve this.

---

### Concept

The spread operator expands elements of an **array or object**.

Symbol used:

```
...
```

Basic syntax:

```
...array
...object
```

It **spreads elements into a new structure**.

Example:

```javascript
const numbers = [1, 2, 3];

const copy = [...numbers];

console.log(copy);
```

Output

```
[1, 2, 3]
```

Here:

```
...numbers
```

expands into

```
1, 2, 3
```

---

### Spread Operator with Arrays

#### Copying Arrays

```javascript
const numbers = [10, 20, 30];

// cloning the array
const newNumbers = [...numbers];

console.log(newNumbers);
```

Output

```
[10, 20, 30]
```

This creates a **new array**, not a reference.

---

### Why Copying Matters

Consider this example.

```javascript
const numbers = [1, 2, 3];

// assigning reference
const copy = numbers;

copy.push(4);

console.log(numbers);
```

Output

```
[1, 2, 3, 4]
```

Why did the original change?

Because both variables reference the **same array in memory**.

Using spread avoids this problem.

```javascript
const numbers = [1, 2, 3];

// real copy
const copy = [...numbers];

copy.push(4);

console.log(numbers);
```

Output

```
[1, 2, 3]
```

---

### Adding Items to Arrays

Example:

```javascript
const fruits = ["apple", "banana"];

// adding element
const updatedFruits = [...fruits, "orange"];

console.log(updatedFruits);
```

Output

```
["apple", "banana", "orange"]
```

This creates a **new array with the added item**.

---

### Merging Arrays

Example:

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];

console.log(merged);
```

Output

```
[1, 2, 3, 4]
```

Without spread, this required `concat`.

---

### Spread Operator with Objects

Objects can also be copied using spread.

Example:

```javascript
const user = {
  name: "Tanish",
  age: 20,
};

// cloning object
const newUser = { ...user };

console.log(newUser);
```

Output

```
{ name: "Tanish", age: 20 }
```

This creates a **new object copy**.

---

### Updating Object Properties

Example:

```javascript
const user = {
  name: "Tanish",
  age: 20,
};

// updating age immutably
const updatedUser = {
  ...user,
  age: 21,
};

console.log(updatedUser);
```

Output

```
{ name: "Tanish", age: 21 }
```

Explanation:

```
...user  → copies existing properties
age: 21  → overrides age
```

---

### Adding New Properties

```javascript
const user = {
  name: "Tanish",
};

const updatedUser = {
  ...user,
  city: "Delhi",
};

console.log(updatedUser);
```

Output

```
{ name: "Tanish", city: "Delhi" }
```

---

### Spread Operator with Function Arguments

Spread can pass array elements as function parameters.

Example:

```javascript
function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

const result = add(...numbers);

console.log(result);
```

Output

```
6
```

Here:

```
...numbers
```

becomes

```
add(1, 2, 3)
```

---

### React Example — Updating State

React requires **immutable updates**.

Bad approach (mutation):

```javascript
const items = ["apple", "banana"];

items.push("orange");
```

Problem:

React might **not detect state change properly**.

Correct approach:

```javascript
const items = ["apple", "banana"];

// immutable update
const newItems = [...items, "orange"];

console.log(newItems);
```

Output

```
["apple", "banana", "orange"]
```

---

### React State Example

```javascript
import { useState } from "react";

const ListExample = () => {
  const [items, setItems] = useState(["apple", "banana"]);

  const addItem = () => {
    // using spread to update state immutably
    setItems([...items, "orange"]);
  };

  return (
    <div>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}

      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ListExample;
```

Key idea:

```
new state = [...oldState, newValue]
```

---

### Common Mistakes

#### Mutating objects directly

Wrong:

```javascript
user.age = 25;
```

Better:

```javascript
const updatedUser = {
  ...user,
  age: 25,
};
```

---

#### Forgetting spread when copying arrays

Wrong:

```javascript
const copy = numbers;
```

Correct:

```javascript
const copy = [...numbers];
```

---

### Tradeoffs

Advantages:

- shorter syntax
- easy cloning
- clean array merging
- essential for immutable updates
- widely used in React

Possible downsides:

- shallow copy only
- nested objects still share references

Example problem:

```javascript
const user = {
  name: "Tanish",
  address: { city: "Delhi" },
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city);
```

Output

```
Mumbai
```

Because spread performs a **shallow copy**.

---

### Real React Use Cases

Spread operator appears constantly in React.

| Use Case         | Example                         |
| ---------------- | ------------------------------- |
| State updates    | `setItems([...items, newItem])` |
| Object updates   | `{...user, age:21}`             |
| Props forwarding | `<Component {...props} />`      |
| Combining arrays | `[...list1, ...list2]`          |

---

### Mental Model

Think of spread as **unpacking values**.

```
Array
[1,2,3]

Spread

...array

Becomes

1,2,3
```

So when used inside arrays or objects it **copies and expands values**.

---

### Synthesis Questions

1. Why was the spread operator introduced?
2. What symbol represents the spread operator?
3. How does spread help clone arrays?
4. Why is spread important for React state updates?
5. What is the difference between shallow copy and deep copy?

## 10. Rest Parameters

Tag: **[FRESHER]**

Subtopics

- Handling variable number of arguments
- Difference between rest and spread
- Using rest with arrays and objects

---

### Problem

Functions often receive **multiple arguments**.

Example:

```javascript id="func_basic"
// simple function with fixed parameters
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```

Output

```text
5
```

But what if we want a function that can accept **any number of values**?

Example goal:

```
add(1,2) → 3
add(1,2,3) → 6
add(1,2,3,4,5) → 15
```

Traditional JavaScript solved this using **`arguments` object**.

Example (old style):

```javascript id="old_arguments"
// using arguments object
function add() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(add(1, 2, 3, 4));
```

Output

```text
10
```

Problems with `arguments`:

1. Not a real array
2. Harder to use with array methods
3. Less readable

Modern JavaScript introduced **Rest Parameters**.

---

### Concept

Rest parameters allow a function to collect **multiple arguments into a single array**.

Symbol used:

```
...
```

Syntax:

```javascript
function functionName(...parameters) {}
```

Example:

```javascript id="rest_basic"
// rest parameter collects all values
function add(...numbers) {
  console.log(numbers);
}

add(1, 2, 3, 4);
```

Output

```text
[1,2,3,4]
```

Explanation:

```
...numbers
```

means

```
Collect remaining arguments into an array
```

---

### Example — Sum Function

```javascript id="rest_sum_example"
// function to add any number of values
function add(...numbers) {
  let sum = 0;

  // iterate through the array
  for (let num of numbers) {
    sum += num;
  }

  return sum;
}

console.log(add(1, 2, 3, 4, 5));
```

Output

```text
15
```

Here:

```
numbers → [1,2,3,4,5]
```

Rest parameters convert arguments into a **real array**.

---

### Rest Parameters with Fixed Arguments

Rest parameters can appear **after normal parameters**.

Example:

```javascript id="rest_fixed_example"
// first argument fixed, rest collected
function greet(message, ...names) {
  console.log(message);

  console.log(names);
}

greet("Hello", "Aman", "Tanish", "Riya");
```

Output

```text
Hello
["Aman","Tanish","Riya"]
```

Explanation:

```
message → "Hello"
names → ["Aman","Tanish","Riya"]
```

---

### Using Rest with Array Methods

Since rest produces a **real array**, we can use array methods.

Example:

```javascript id="rest_array_methods"
// finding maximum number
function findMax(...numbers) {
  return Math.max(...numbers);
}

console.log(findMax(5, 10, 20, 3));
```

Output

```text
20
```

Here:

```
numbers → array
Math.max(...numbers) → spread used again
```

---

### Important Rule

Rest parameters **must be the last parameter**.

Incorrect example:

```javascript
function test(...values, last) {
}
```

This produces an error.

Correct version:

```javascript id="rest_last_param"
function test(first, ...values) {}
```

---

### Difference Between Rest and Spread

Both use the same symbol:

```
...
```

But they behave differently.

| Operator | Purpose         |
| -------- | --------------- |
| Spread   | Expands values  |
| Rest     | Collects values |

Example spread:

```javascript id="spread_example"
const numbers = [1, 2, 3];

console.log(...numbers);
```

Output

```
1 2 3
```

Example rest:

```javascript id="rest_example"
function print(...numbers) {
  console.log(numbers);
}

print(1, 2, 3);
```

Output

```
[1,2,3]
```

Mental model:

```
Spread → unpack values
Rest → pack values
```

---

### Rest with Object Destructuring

Rest can also collect **remaining object properties**.

Example:

```javascript id="rest_object_example"
const user = {
  name: "Tanish",
  age: 20,
  city: "Delhi",
};

// extract name, collect rest
const { name, ...rest } = user;

console.log(name);
console.log(rest);
```

Output

```text
Tanish
{ age:20, city:"Delhi" }
```

Explanation:

```
name → extracted
rest → remaining properties
```

---

### React Example — Props

React sometimes uses rest parameters when handling **extra props**.

Example:

```javascript id="react_rest_props"
const Button = ({ title, ...restProps }) => {
  return <button {...restProps}>{title}</button>;
};

export default Button;
```

Usage:

```javascript
<Button title="Click" className="primary" onClick={handleClick} />
```

Explanation:

```
title → extracted
restProps → remaining props
```

This allows flexible components.

---

### Example — Custom Logging Function

```javascript id="rest_logger"
// function that logs multiple messages
function logMessages(...messages) {
  messages.forEach((message) => {
    console.log(message);
  });
}

logMessages("Start", "Processing", "Complete");
```

Output

```
Start
Processing
Complete
```

---

### Common Mistakes

#### Rest parameter not at the end

Incorrect:

```javascript
function test(...a, b) {
}
```

Correct:

```javascript
function test(a, ...b) {}
```

---

#### Confusing rest with spread

Example mistake:

```javascript
function test(...numbers) {
  console.log(...numbers);
}
```

Here:

```
...numbers → rest
console.log(...numbers) → spread
```

Both behave differently.

---

### Tradeoffs

Advantages:

- cleaner handling of variable arguments
- replaces old `arguments` object
- produces real arrays
- improves readability

Possible downside:

- beginners confuse rest and spread operators.

---

### Real React Use Cases

Rest parameters appear in many React patterns.

| Use Case          | Example                 |
| ----------------- | ----------------------- |
| Flexible props    | `{title, ...rest}`      |
| Utility functions | `function sum(...nums)` |
| Event wrappers    | `handle(...args)`       |
| Logging utilities | `log(...messages)`      |

---

### Mental Model

Think of rest parameters as **collecting multiple values into a container**.

```
Function call

add(1,2,3,4)

Rest parameter

function add(...numbers)

numbers = [1,2,3,4]
```

---

### Synthesis Questions

1. Why were rest parameters introduced in JavaScript?
2. What problem did the `arguments` object have?
3. What does `...` represent in rest parameters?
4. What is the difference between spread and rest operators?
5. Why must rest parameters be placed at the end of the parameter list?

## 11. ES6 Array Methods

Tag: **[BOTH]**

Subtopics

- `map()`
- `filter()`
- `reduce()`
- `find()`
- `some()`
- `every()`

Important: React heavily relies on **array transformations**, especially `map()` for rendering lists.

---

### Problem

Arrays are very common in applications:

- list of users
- list of products
- list of comments
- list of tasks

Example array:

```javascript id="arr_example"
// list of numbers
const numbers = [1, 2, 3, 4, 5];
```

Before ES6-style functional methods, developers used **loops**.

Example:

```javascript id="loop_example"
// doubling numbers using loop
const numbers = [1, 2, 3];

const result = [];

for (let i = 0; i < numbers.length; i++) {
  result.push(numbers[i] * 2);
}

console.log(result);
```

Output

```text id="loop_output"
[2,4,6]
```

Problems with loops:

- verbose
- harder to read
- less declarative
- encourages mutation

Modern JavaScript promotes **functional array methods**.

These methods transform arrays in a **clean and predictable way**.

---

### Core Mental Model

Array methods allow us to describe **what we want**, instead of **how to do it**.

Example mindset:

```text
Loop mindset
→ iterate manually
→ push values manually

Functional mindset
→ transform arrays directly
```

---

### map()

#### Concept

`map()` transforms each element of an array into a new value.

It returns a **new array**.

Syntax:

```javascript
array.map(callback);
```

The callback runs **once for every element**.

---

#### Example

```javascript id="map_example"
// doubling each number
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);
```

Output

```text id="map_output"
[2,4,6,8]
```

Explanation:

```text
1 → 2
2 → 4
3 → 6
4 → 8
```

---

#### React Example (Very Important)

Rendering lists in React uses `map()`.

```javascript id="react_map_example"
const users = ["Aman", "Riya", "Tanish"];

const UserList = () => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
};
```

Each array element becomes a **UI element**.

---

### filter()

#### Concept

`filter()` selects elements that match a condition.

It returns a **new filtered array**.

Syntax:

```javascript
array.filter(condition);
```

---

#### Example

```javascript id="filter_example"
// keep numbers greater than 3
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter((num) => num > 3);

console.log(result);
```

Output

```text id="filter_output"
[4,5]
```

Explanation:

```text
1 → removed
2 → removed
3 → removed
4 → kept
5 → kept
```

---

#### React Example

Filtering visible products.

```javascript id="react_filter_example"
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 15000 },
];

const expensive = products.filter((product) => product.price > 20000);

console.log(expensive);
```

Output

```text
[{name:"Laptop", price:50000}]
```

---

### reduce()

#### Concept

`reduce()` combines all elements into a **single value**.

Syntax:

```javascript
array.reduce((accumulator, current) => {}, initialValue);
```

Mental model:

```text
accumulator → stores result
current → current element
```

---

#### Example (Sum)

```javascript id="reduce_sum"
// summing numbers
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(sum);
```

Output

```text
10
```

Steps internally:

```text
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

---

#### Example (Count Items)

```javascript id="reduce_count"
const items = ["apple", "banana", "apple"];

const count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;

  return acc;
}, {});

console.log(count);
```

Output

```text
{
 apple:2,
 banana:1
}
```

This pattern is used for **analytics and grouping**.

---

### find()

#### Concept

`find()` returns the **first element that matches a condition**.

Syntax:

```javascript
array.find(condition);
```

---

#### Example

```javascript id="find_example"
const users = [
  { id: 1, name: "Aman" },
  { id: 2, name: "Riya" },
  { id: 3, name: "Tanish" },
];

const user = users.find((u) => u.id === 2);

console.log(user);
```

Output

```text
{id:2, name:"Riya"}
```

Unlike `filter()`, it returns **only one object**.

---

### some()

#### Concept

`some()` checks if **at least one element** satisfies the condition.

Returns **true or false**.

---

#### Example

```javascript id="some_example"
const numbers = [10, 20, 30];

const result = numbers.some((num) => num > 25);

console.log(result);
```

Output

```text
true
```

Because **30 > 25**.

---

### every()

#### Concept

`every()` checks if **all elements** satisfy the condition.

Returns **true or false**.

---

#### Example

```javascript id="every_example"
const numbers = [10, 20, 30];

const result = numbers.every((num) => num > 5);

console.log(result);
```

Output

```text
true
```

Because every element is greater than 5.

---

### Comparison

| Method | Purpose            |
| ------ | ------------------ |
| map    | transform elements |
| filter | select elements    |
| reduce | combine elements   |
| find   | get first match    |
| some   | check if any match |
| every  | check if all match |

---

### React Mental Model

React UI is often built by **transforming data into UI elements**.

```text
Data
↓

Array methods

↓

UI Components
```

Example:

```javascript
products.map((product) => <ProductCard />);
```

---

### Common Mistakes

#### Forgetting return in map()

Incorrect:

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

#### Using filter when find is needed

Bad:

```javascript
users.filter((u) => u.id === 2);
```

Better:

```javascript
users.find((u) => u.id === 2);
```

Because `find()` stops early.

---

### Tradeoffs

Advantages:

- cleaner code
- functional style
- avoids mutation
- improves readability
- heavily used in React

Possible downside:

- beginners misuse `reduce()` for everything.

---

### Real React Use Cases

| Problem               | Method |
| --------------------- | ------ |
| render lists          | map    |
| filter search results | filter |
| compute totals        | reduce |
| find specific item    | find   |
| check permissions     | some   |
| validate forms        | every  |

---

### Synthesis Questions

1. Why are array methods preferred over loops?
2. What is the difference between `map()` and `filter()`?
3. When should `reduce()` be used?
4. What is the difference between `find()` and `filter()`?
5. How does React use `map()` for rendering UI lists?

---

## 12. Promises

Tag: **[FRESHER]**

Subtopics

- Asynchronous programming
- Promise states
- `.then()`
- `.catch()`

---

### Problem

JavaScript runs **single-threaded**.

This means:

```text
One task runs at a time
```

Example:

```javascript
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

Output

```text
Task 1
Task 2
Task 3
```

This is called **synchronous execution**.

But real applications require operations that take time:

- API requests
- database queries
- file loading
- timers
- network communication

Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Data loaded");
}, 2000);

console.log("End");
```

Output

```text
Start
End
Data loaded
```

Why?

Because JavaScript does not **block execution** while waiting.

This behavior is called **asynchronous programming**.

Before Promises, developers used **callbacks**, which caused a major problem.

---

### Callback Hell Problem

Example of nested callbacks:

```javascript
setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
```

Structure becomes:

```text
callback
   callback
      callback
         callback
```

Problems:

- unreadable code
- difficult debugging
- hard error handling

This problem is known as **Callback Hell**.

To solve this problem, JavaScript introduced **Promises**.

---

### Concept

A **Promise** represents the **result of an asynchronous operation**.

Think of it like ordering food.

```text
You place order
↓

Kitchen prepares food
↓

Food arrives later
```

The promise represents **future result**.

---

### Promise States

A promise can be in **three states**.

| State     | Meaning                          |
| --------- | -------------------------------- |
| Pending   | operation still running          |
| Fulfilled | operation completed successfully |
| Rejected  | operation failed                 |

Mental model:

```text
Pending
   ↓
Fulfilled OR Rejected
```

---

### Creating a Promise

Syntax:

```javascript
new Promise((resolve, reject) => {});
```

Example:

```javascript id="promise_basic"
// creating a promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});
```

Here:

```text
resolve → success result
reject → failure result
```

---

### Consuming a Promise

To get the result we use **`.then()`**.

Example:

```javascript id="promise_then"
myPromise.then((result) => {
  console.log(result);
});
```

Output

```text
Operation successful
```

`.then()` runs when the promise is **fulfilled**.

---

### Handling Errors with `.catch()`

If the promise fails, `.catch()` runs.

Example:

```javascript id="promise_catch"
const myPromise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve("Success");
  } else {
    reject("Error occurred");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

Output

```text
Error occurred
```

---

### Promise with `setTimeout`

Example simulating an API request:

```javascript id="promise_timeout"
// simulate async request
const fetchData = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data received");
  }, 2000);
});

fetchData.then((data) => {
  console.log(data);
});
```

Output

```text
Data received
```

Here the promise resolves after **2 seconds**.

---

### Promise Chaining

Promises allow **sequential operations**.

Example:

```javascript id="promise_chain"
const promise = new Promise((resolve) => {
  resolve(5);
});

promise
  .then((num) => {
    return num * 2;
  })
  .then((result) => {
    console.log(result);
  });
```

Output

```text
10
```

Flow:

```text
5
↓
multiply by 2
↓
10
```

---

### Example — Simulating API Response

```javascript id="api_simulation"
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Tanish",
        age: 20,
      });
    }, 2000);
  });
}

fetchUser().then((user) => {
  console.log(user);
});
```

Output

```text
{ name: "Tanish", age: 20 }
```

This pattern appears frequently in **API calls**.

---

### React Context Example

React apps frequently fetch data from APIs.

Example:

```javascript
fetch("/api/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

Flow:

```text
request
↓
server response
↓
parse JSON
↓
handle data
```

Promises manage this process.

---

### Promise vs Callback

| Feature        | Callback  | Promise |
| -------------- | --------- | ------- |
| Readability    | poor      | better  |
| Error handling | messy     | easier  |
| chaining       | difficult | easy    |
| scalability    | low       | high    |

---

### Common Mistakes

#### Forgetting to return inside `.then()`

Example mistake:

```javascript
promise.then((value) => {
  value * 2;
});
```

Correct:

```javascript
promise.then((value) => {
  return value * 2;
});
```

---

#### Not handling errors

Bad practice:

```javascript
fetch("/api").then((data) => console.log(data));
```

Better:

```javascript
fetch("/api")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

Always handle errors.

---

### Tradeoffs

Advantages:

- solves callback hell
- easier async flow
- better error handling
- supports chaining

Downside:

- `.then()` chains can still become messy.

To solve this, JavaScript introduced **Async / Await**, which is the next topic.

---

### Real React Use Cases

Promises are used in:

| Use Case         | Example         |
| ---------------- | --------------- |
| API requests     | fetch()         |
| database queries | backend APIs    |
| authentication   | login requests  |
| file uploads     | server requests |
| data loading     | React apps      |

---

### Mental Model

Think of a Promise as a **future value container**.

```text
Start operation
↓

Promise created

↓

Future result arrives

↓

.then() or .catch()
```

---

### Synthesis Questions

1. Why was asynchronous programming introduced?
2. What problem did callbacks create?
3. What are the three states of a Promise?
4. What does `resolve()` do?
5. What is the purpose of `.then()`?
6. What is the purpose of `.catch()`?
7. How do promises help with API requests?

---

## 13. Async / Await

Tag: **[BOTH]**

Subtopics

- async functions
- await keyword
- error handling

---

### Problem

Promises solved **callback hell**, but `.then()` chains can still become difficult to read.

Example using promises:

```javascript id="promise_chain_example"
// fetching user data
fetch("/api/user")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

Problems with `.then()` chains:

1. Nested structure grows with complexity
2. Harder to read when multiple async steps exist
3. Error handling becomes messy
4. Code does not look like normal sequential logic

Example with multiple operations:

```javascript id="promise_complex"
fetch("/api/user")
  .then((res) => res.json())
  .then((user) => {
    return fetch(`/api/orders/${user.id}`);
  })
  .then((res) => res.json())
  .then((orders) => {
    console.log(orders);
  });
```

This becomes harder to understand.

To solve this readability issue, JavaScript introduced **Async / Await**.

---

### Concept

`async` and `await` allow asynchronous code to look **synchronous**.

Instead of writing:

```text id="q9o59s"
.then()
.then()
.then()
```

we can write:

```text id="ztcc44"
step 1
step 2
step 3
```

This makes code **much easier to read and maintain**.

---

### async Functions

The `async` keyword is used to define an asynchronous function.

Syntax:

```javascript id="async_syntax"
async function functionName() {}
```

Example:

```javascript id="async_example"
async function greet() {
  return "Hello";
}

greet().then((result) => {
  console.log(result);
});
```

Output

```text id="async_output"
Hello
```

Important rule:

```text id="nfv99m"
async functions always return a Promise
```

Even if we return a normal value.

---

### await Keyword

The `await` keyword pauses execution until a Promise resolves.

Syntax:

```javascript id="await_syntax"
const result = await promise;
```

Important rule:

```text id="fd1pds"
await can only be used inside async functions
```

---

### Basic Example

```javascript id="await_basic"
// simulate async task
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

async function getData() {
  const result = await fetchData();

  console.log(result);
}

getData();
```

Output (after 2 seconds)

```text id="4q0br0"
Data received
```

Flow:

```text id="b9zhik"
call async function
↓

await promise

↓

wait until resolved

↓

continue execution
```

---

### Sequential Async Operations

Example:

```javascript id="async_sequence"
function step1() {
  return Promise.resolve("Step 1 completed");
}

function step2() {
  return Promise.resolve("Step 2 completed");
}

async function processSteps() {
  const result1 = await step1();
  console.log(result1);

  const result2 = await step2();
  console.log(result2);
}

processSteps();
```

Output

```text id="1cvhka"
Step 1 completed
Step 2 completed
```

This looks like **normal synchronous code**, but runs asynchronously.

---

### Example — API Request

Using promises:

```javascript id="promise_fetch"
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Using async/await:

```javascript id="async_fetch"
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  console.log(data);
}

getUsers();
```

This version is **much easier to read**.

---

### Error Handling with try/catch

Async/await allows traditional **try/catch error handling**.

Example:

```javascript id="async_try_catch"
async function getUsers() {
  try {
    const response = await fetch("https://api.example.com/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUsers();
```

Flow:

```text id="vnyq3r"
try
   run async code
catch
   handle errors
```

This replaces `.catch()` chains.

---

### Parallel Async Operations

Sometimes we want multiple async tasks to run **at the same time**.

Example using `Promise.all()`:

```javascript id="promise_all"
async function loadData() {
  const [users, posts] = await Promise.all([
    fetch("/api/users"),
    fetch("/api/posts"),
  ]);

  console.log(users, posts);
}

loadData();
```

Here both requests run **in parallel**, improving performance.

---

### React Example — Data Fetching

React components frequently fetch API data.

Example:

```javascript id="react_async_example"
import { useEffect } from "react";

const Users = () => {
  async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div>Users Loaded</div>;
};

export default Users;
```

Key idea:

```text id="dbmln0"
component loads
↓

API request runs

↓

data received

↓

UI updates
```

---

### Common Mistakes

#### Using await outside async

Incorrect:

```javascript id="await_error"
const data = await fetch("/api");
```

Correct:

```javascript id="await_correct"
async function load() {
  const data = await fetch("/api");
}
```

---

#### Forgetting error handling

Bad:

```javascript id="no_error_handling"
async function load() {
  const data = await fetch("/api");
}
```

Better:

```javascript id="with_error_handling"
async function load() {
  try {
    const data = await fetch("/api");
  } catch (error) {
    console.log(error);
  }
}
```

---

### Async vs Promise Chains

| Feature             | Promise    | Async/Await |
| ------------------- | ---------- | ----------- |
| readability         | moderate   | very high   |
| syntax              | `.then()`  | normal code |
| error handling      | `.catch()` | try/catch   |
| complexity handling | harder     | easier      |

Async/await is now the **preferred pattern**.

---

### Real React Use Cases

Async/await is used in:

| Use Case          | Example            |
| ----------------- | ------------------ |
| API requests      | fetch data         |
| authentication    | login request      |
| loading user data | dashboard          |
| form submission   | POST requests      |
| file uploads      | server interaction |

---

### Mental Model

Think of async/await as **pausing until data arrives**.

```text id="ek18wo"
Start async task
↓

await result

↓

continue execution
```

This creates **clean sequential logic**.

---

### Synthesis Questions

1. Why was async/await introduced?
2. What does the `async` keyword do?
3. What does `await` do?
4. Why must `await` be used inside async functions?
5. How does try/catch help in async error handling?
6. Why is async/await preferred over `.then()` chains?

---

## 14. Fetch API and API Calls

Tag: **[BOTH]**

Subtopics

- HTTP requests
- GET / POST
- JSON responses

---

### Problem

Modern applications rarely work with **static data**.

Real applications need to communicate with **servers**.

Examples:

- Get users from database
- Fetch products from backend
- Submit login form
- Upload files

Example data flow:

```text
Frontend (React)
        ↓
API Request
        ↓
Backend Server
        ↓
Database
        ↓
Response sent back
```

Without APIs, applications cannot:

- load dynamic data
- authenticate users
- save information
- interact with databases

JavaScript needs a way to **request data from servers**.

This is where the **Fetch API** is used.

---

### What is an API?

API stands for:

```text
Application Programming Interface
```

In web development it usually means:

```text
HTTP endpoints that send or receive data
```

Example API endpoint:

```text
https://jsonplaceholder.typicode.com/users
```

When we request this URL, the server returns **JSON data**.

Example response:

```json
[
  {
    "id": 1,
    "name": "Leanne Graham"
  },
  {
    "id": 2,
    "name": "Ervin Howell"
  }
]
```

Frontend applications fetch this data to display it.

---

### What is Fetch API?

Fetch API is a **built-in browser function** used to make HTTP requests.

Syntax:

```javascript
fetch(url);
```

It returns a **Promise**.

---

### Basic GET Request

Example:

```javascript id="fetch_get_basic"
// making a GET request
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

```text
Request sent
↓

Server responds

↓

Convert response to JSON

↓

Use the data
```

---

### Understanding the Steps

#### Step 1 — Request

```javascript
fetch(url);
```

Sends an HTTP request.

---

#### Step 2 — Response Object

The server returns a **Response object**.

Example:

```javascript
fetch(url).then((response) => {
  console.log(response);
});
```

This response contains:

- status code
- headers
- body

---

#### Step 3 — Convert to JSON

Most APIs return **JSON data**.

To extract it:

```javascript
response.json();
```

Example:

```javascript
fetch(url).then((response) => response.json());
```

---

#### Step 4 — Use Data

```javascript
.then(data => {
    console.log(data);
});
```

Now the actual data is available.

---

### Fetch with Async / Await

Async/await makes fetch cleaner.

Example:

```javascript id="fetch_async_example"
// async function to fetch users
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  console.log(data);
}

getUsers();
```

This is easier to read than `.then()` chains.

---

### HTTP Methods

HTTP defines different types of requests.

| Method | Purpose       |
| ------ | ------------- |
| GET    | retrieve data |
| POST   | send data     |
| PUT    | update data   |
| DELETE | remove data   |

Most frontend requests are **GET or POST**.

---

### GET Request Example

```javascript id="fetch_get_example"
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await response.json();

  console.log(posts);
}

getPosts();
```

This retrieves posts from the API.

---

### POST Request Example

POST sends data to the server.

Example:

```javascript id="fetch_post_example"
// sending data to server
async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Post",
      body: "This is the content",
      userId: 1,
    }),
  });

  const data = await response.json();

  console.log(data);
}

createPost();
```

Key parts:

```text
method → HTTP method
headers → metadata
body → request payload
```

---

### Request Headers

Headers provide information about the request.

Example:

```javascript
headers: {
    "Content-Type": "application/json"
}
```

This tells the server:

```text
The request body contains JSON
```

---

### JSON.stringify()

When sending data, objects must be converted to JSON.

Example:

```javascript
const user = {
  name: "Tanish",
  age: 20,
};
```

Convert to JSON:

```javascript
JSON.stringify(user);
```

Result:

```json
{ "name": "Tanish", "age": 20 }
```

---

### Handling Errors

Example:

```javascript id="fetch_error_handling"
async function loadData() {
  try {
    const response = await fetch("/api/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

loadData();
```

Error handling prevents application crashes.

---

### React Example — Fetching Data

React apps frequently fetch data from APIs.

Example component:

```javascript id="react_fetch_example"
import { useEffect } from "react";

const Users = () => {
  async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div>Users loaded</div>;
};

export default Users;
```

Flow:

```text
Component mounts
↓

API request runs

↓

Data received

↓

UI updates
```

---

### Example — Display API Data

```javascript id="display_users_example"
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      const data = await response.json();

      setUsers(data);
    }

    loadUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default Users;
```

Here the API data becomes **UI elements**.

---

### Common Mistakes

#### Forgetting `.json()`

Wrong:

```javascript
const data = await fetch(url);
```

Correct:

```javascript
const response = await fetch(url);
const data = await response.json();
```

---

#### Missing error handling

Bad practice:

```javascript
fetch(url).then((res) => res.json());
```

Always handle errors.

---

### Tradeoffs

Advantages of Fetch API:

- built into browsers
- promise-based
- modern async support
- simple syntax

Limitations:

- does not reject HTTP errors automatically
- requires manual JSON parsing

Libraries like **Axios** solve some of these issues.

---

### Real React Use Cases

Fetch API is used in almost every application.

| Feature         | API Example     |
| --------------- | --------------- |
| user login      | `/api/login`    |
| dashboard data  | `/api/stats`    |
| products list   | `/api/products` |
| search results  | `/api/search`   |
| form submission | `/api/contact`  |

---

### Mental Model

Think of Fetch API as **communication between frontend and backend**.

```text
React UI
   ↓
fetch()
   ↓
Server
   ↓
Database
   ↓
Response
   ↓
UI update
```

---

### Synthesis Questions

1. What is an API in web development?
2. What does the Fetch API do?
3. Why does fetch return a Promise?
4. What is the purpose of `response.json()`?
5. What is the difference between GET and POST requests?
6. Why must objects be converted using `JSON.stringify()`?

---
