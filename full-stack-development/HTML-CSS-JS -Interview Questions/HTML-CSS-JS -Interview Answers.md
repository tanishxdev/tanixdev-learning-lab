# HTML

## Q1. What does HTML stand for and what is its purpose?

### Concepts

HTML stands for **HyperText Markup Language**.
It is the **standard markup language** used to create and structure web pages.

HTML is **not a programming language**.
It defines:

- Structure of the webpage
- Meaning of content (headings, paragraphs, images, links)
- Skeleton that CSS styles and JavaScript manipulates

Browser reads HTML and converts it into a visual web page.

---

### Example Code Snippets

```html
<h1>Hello World</h1>
<p>This is a paragraph</p>
```

```html
<a href="https://example.com">Visit</a>
```

```html
<img src="logo.png" alt="Company Logo" />
```

---

### Interview-Specific Answer

HTML is used to **structure web content** and tell the browser **what content is and how it is organized**.

---

## Q2. Describe the basic structure of an HTML document.

### Concepts

Every HTML document follows a **fixed skeleton** so the browser can parse it correctly.

Main parts:

- `<!DOCTYPE html>` → tells browser HTML5
- `<html>` → root element
- `<head>` → metadata (not visible)
- `<body>` → visible content

---

### Example Code Snippets

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

```html
<head>
  <meta charset="UTF-8" />
</head>
```

---

### Interview-Specific Answer

An HTML document has `DOCTYPE`, `html`, `head`, and `body`.
Head holds metadata, body holds visible content.

---

## Q3. What do `<!DOCTYPE>` and `lang` attribute do?

### Concepts

**DOCTYPE**

- Tells browser which HTML version to use
- Prevents quirks mode
- HTML5 uses `<!DOCTYPE html>`

**lang attribute**

- Specifies document language
- Helps screen readers and SEO
- Improves accessibility

---

### Example Code Snippets

```html
<!DOCTYPE html>
```

```html
<html lang="en"></html>
```

```html
<html lang="hi"></html>
```

---

### Interview-Specific Answer

DOCTYPE enables standards mode.
`lang` improves accessibility, SEO, and screen reader behavior.

---

## Q4. What is the difference between `<head>` and `<body>`?

### Concepts

**`<head>`**

- Metadata only
- Not visible to users
- Used for SEO, charset, styles, scripts

**`<body>`**

- Actual visible UI
- Text, images, buttons, forms

---

### Example Code Snippets

```html
<head>
  <title>Page Title</title>
  <meta charset="UTF-8" />
</head>
```

```html
<body>
  <h1>Main Content</h1>
</body>
```

---

### Interview-Specific Answer

Head contains metadata and configurations.
Body contains all visible content shown to users.

---

## Q5. Can you explain the purpose of meta tags in HTML?

### Concepts

Meta tags provide **information about the page**, not page content.

Used for:

- Character encoding
- SEO
- Responsive design
- Browser instructions

They are always placed inside `<head>`.

---

### Example Code Snippets

```html
<meta charset="UTF-8" />
```

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

```html
<meta name="description" content="Interview preparation notes" />
```

---

### Interview-Specific Answer

Meta tags define metadata like charset, viewport, and SEO info, helping browsers and search engines understand the page.

# JS

## Q1. What are the data types present in JavaScript?

### Concepts

JavaScript is a **dynamically typed** language, meaning variable types are decided at runtime.
There are **two categories** of data types:

**1. Primitive (Immutable, stored by value)**

- `Number` → integers and floating-point numbers
- `String` → text data
- `Boolean` → true / false
- `Undefined` → variable declared but not assigned
- `Null` → intentional absence of value
- `Symbol` → unique identifiers (ES6)
- `BigInt` → very large integers

**2. Non-Primitive / Reference**

- `Object` → collections of key-value pairs (arrays, functions, objects)

---

### Example Code Snippets

```js
let age = 25; // Number
let name = "JS"; // String
let isActive = true; // Boolean
let score; // Undefined
let data = null; // Null
let id = Symbol("id"); // Symbol
let big = 123n; // BigInt
let user = { name: "A" }; // Object
```

```js
console.log(typeof age); // number
console.log(typeof null); // object (JS bug)
```

---

### Interview-Specific Answer

JavaScript has **7 primitive types** and **1 reference type (Object)**.
Primitive types store values directly, while objects store references in memory.

---

## Q2. What is the difference between `null` and `undefined`?

### Concepts

Both represent **absence of value**, but used differently.

- `undefined` → JS assigns automatically
- `null` → developer assigns intentionally

---

### Example Code Snippets

```js
let a;
console.log(a); // undefined
```

```js
let b = null;
console.log(b); // null
```

```js
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

---

### Interview-Specific Answer

`undefined` means a variable exists but has no value assigned by JS,
`null` is explicitly assigned to represent empty or no value.

---

## Q3. What is the difference between `==` and `===`?

### Concepts

- `==` → loose equality (type coercion)
- `===` → strict equality (no type coercion)

Always prefer `===` to avoid unexpected bugs.

---

### Example Code Snippets

```js
5 == "5"; // true
```

```js
5 === "5"; // false
```

```js
null == undefined; // true
null === undefined; // false
```

---

### Interview-Specific Answer

`==` compares values after converting types,
`===` compares both **type and value**, making it safer and predictable.

---

## Q4. What is hoisting in JavaScript?

### Concepts

Hoisting is JavaScript’s behavior of **moving declarations to the top of scope** during execution.

- `var` → hoisted and initialized with `undefined`
- `let` / `const` → hoisted but in **Temporal Dead Zone**
- Functions → fully hoisted

---

### Example Code Snippets

```js
console.log(a);
var a = 10; // undefined
```

```js
console.log(b);
let b = 10; // ReferenceError
```

```js
sayHi();
function sayHi() {
  console.log("Hi");
}
```

---

### Interview-Specific Answer

Hoisting allows variables and functions to be accessed before declaration,
but only `var` and function declarations work safely—`let` and `const` do not.

---

## Q5. What is scope in JavaScript?

### Concepts

Scope defines **where variables can be accessed**.

Types of scope:

- Global Scope
- Function Scope
- Block Scope (`let`, `const`)

JavaScript uses **lexical scoping**.

---

### Example Code Snippets

```js
let x = 10; // global

function test() {
  let y = 20; // function scope
  console.log(x);
}
```

```js
if (true) {
  let a = 5;
}
// a is not accessible here
```

```js
function outer() {
  let count = 1;
  function inner() {
    console.log(count);
  }
  inner();
}
```

---

### Interview-Specific Answer

Scope controls variable accessibility.
JavaScript follows **lexical scope**, meaning inner functions can access outer variables, but not vice versa.

# CSS

## Q1. What does CSS stand for and what is its primary use?

### Concepts

CSS stands for **Cascading Style Sheets**.
It is used to **style and layout HTML elements**.

Primary responsibilities of CSS:

- Control colors, fonts, spacing
- Manage layout (Flexbox, Grid)
- Handle responsiveness and animations
- Separate presentation from structure

HTML → structure
CSS → presentation
JavaScript → behavior

---

### Example Code Snippets

```css
h1 {
  color: blue;
}
```

```css
.container {
  width: 100%;
  padding: 16px;
}
```

```css
button {
  background-color: black;
  color: white;
}
```

---

### Interview-Specific Answer

CSS styles HTML elements and controls layout, responsiveness, and visual presentation of a webpage.

---

## Q2. How do you include CSS in an HTML document?

### Concepts

There are **three ways** to add CSS:

1. Inline CSS → inside HTML tag
2. Internal CSS → inside `<style>` tag
3. External CSS → separate `.css` file (recommended)

External CSS is best for scalability and maintenance.

---

### Example Code Snippets

```html
<h1 style="color:red">Inline</h1>
```

```html
<style>
  p {
    color: green;
  }
</style>
```

```html
<link rel="stylesheet" href="styles.css" />
```

---

### Interview-Specific Answer

CSS can be added inline, internally, or externally, but external CSS is preferred for clean and reusable code.

---

## Q3. What is the difference between class and id selectors?

### Concepts

**Class (`.`)**

- Can be reused
- Multiple elements
- Lower specificity

**ID (`#`)**

- Unique
- Single element
- Higher specificity

---

### Example Code Snippets

```css
.card {
  padding: 10px;
}
```

```css
#header {
  background: black;
}
```

```html
<div class="card"></div>
<div id="header"></div>
```

---

### Interview-Specific Answer

Class is reusable and flexible, while ID is unique and has higher priority.

---

## Q4. What are pseudo-classes in CSS?

### Concepts

Pseudo-classes define a **special state** of an element.

Common examples:

- `:hover`
- `:focus`
- `:active`
- `:nth-child()`

They apply styles based on user interaction or element position.

---

### Example Code Snippets

```css
button:hover {
  background: blue;
}
```

```css
input:focus {
  border-color: green;
}
```

```css
li:nth-child(2) {
  color: red;
}
```

---

### Interview-Specific Answer

Pseudo-classes style elements based on state or position, not actual markup changes.

---

## Q5. Describe how to implement a CSS reset and why it is useful.

### Concepts

Browsers apply **default styles**, causing inconsistencies.

CSS Reset:

- Removes default margins, paddings
- Normalizes styles across browsers

Common approaches:

- Custom reset
- Normalize.css

---

### Example Code Snippets

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

```css
html,
body {
  height: 100%;
}
```

---

### Interview-Specific Answer

CSS reset removes browser default styles to ensure consistent UI across different browsers.
