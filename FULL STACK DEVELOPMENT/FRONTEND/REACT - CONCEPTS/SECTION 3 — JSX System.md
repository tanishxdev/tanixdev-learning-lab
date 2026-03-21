# SECTION 3 — JSX System

React does not write UI using normal HTML files.
Instead, React uses **JSX (JavaScript XML)** which allows developers to describe UI inside JavaScript.

Understanding JSX properly is **very important**, because **every React component returns JSX**.

---

## 20. JSX Introduction

Tag: **[FRESHER]**

Subtopics

- HTML inside JavaScript
- expressions in JSX
- JSX compilation

---

### Problem

Before JSX, UI was created using **pure JavaScript DOM manipulation**.

Example (traditional JavaScript UI creation):

```javascript
// Creating DOM elements manually
const element = document.createElement("h1");

// Setting text
element.textContent = "Hello World";

// Appending to page
document.getElementById("root").appendChild(element);
```

Problems with this approach:

1. Very **verbose**
2. Hard to **visualize UI**
3. Hard to **maintain large applications**
4. Mixing **UI logic and DOM manipulation**

Developers wanted a way to **write UI more naturally**.

---

### Intuition

Think of JSX as:

```
HTML + JavaScript together
```

Instead of writing:

```
createElement → appendChild → setText
```

We write UI like:

```html
<h1>Hello World</h1>
```

But **inside JavaScript**.

This is JSX.

---

### Concept

JSX stands for:

```
JavaScript XML
```

It allows developers to write **HTML-like syntax inside JavaScript**.

Example JSX:

```jsx
const element = <h1>Hello React</h1>;
```

This looks like HTML, but it is actually **JavaScript syntax extension**.

Important:

JSX is **not understood by browsers directly**.

It must be **compiled into normal JavaScript**.

---

### JSX Compilation (What Actually Happens)

JSX is converted into:

```
React.createElement()
```

Example JSX:

```jsx
const element = <h1>Hello React</h1>;
```

Compiled version:

```javascript
const element = React.createElement(
  "h1", // element type
  null, // props
  "Hello React", // children
);
```

React then converts this into **Virtual DOM objects**.

---

### Example 1 — Simple JSX

```jsx
// JSX element stored in variable
const heading = <h1>Hello React</h1>;

function App() {
  return heading;
}
```

Explanation

```
<h1>Hello React</h1>
```

is JSX describing a UI element.

React converts it internally.

---

### Example 2 — JSX Inside Component

```jsx
function App() {
  return (
    <div>
      <h1>My First React App</h1>
      <p>This UI is written using JSX</p>
    </div>
  );
}
```

Explanation:

Component returns JSX describing UI.

---

### Example 3 — JSX Tree

JSX represents **UI tree structure**.

```jsx
function App() {
  return (
    <div>
      <h1>Blog</h1>
      <article>
        <h2>Post Title</h2>
        <p>Post description</p>
      </article>
    </div>
  );
}
```

This describes UI hierarchy.

---

### Key Characteristics of JSX

JSX allows:

1. Writing **HTML-like syntax**
2. Embedding **JavaScript expressions**
3. Creating **component trees**
4. Writing UI declaratively

---

### Declarative vs Imperative UI

Imperative UI (manual instructions)

```
create element
set text
append child
update DOM
```

Declarative UI (React)

```
describe what UI should look like
```

Example:

```jsx
<h1>Hello React</h1>
```

React handles DOM updates automatically.

---

### Use Cases

JSX is used everywhere in React:

- Components
- Layouts
- Lists
- Conditional UI
- Forms
- Routing

---

### Tradeoffs

Advantages

1. UI code becomes **readable**
2. Easy to visualize component structure
3. Less DOM manipulation
4. Works well with component architecture

Disadvantages

1. Requires **build tools (Babel / Vite)**
2. Mixing HTML and JS may feel unusual initially

---

### Synthesis Questions

1. What problem does JSX solve?
2. Why can't browsers directly understand JSX?
3. What does JSX compile into?
4. How does JSX improve UI readability?
5. What is the difference between declarative UI and imperative UI?

---

## 21. JSX Rules

Tag: **[FRESHER]**

Subtopics

- single parent rule
- className
- camelCase attributes

---

### Problem

JSX looks like HTML, but it **is not HTML**.

It is **JavaScript syntax**, so certain rules must be followed.

If we ignore these rules, React will throw **compile errors**.

---

### Rule 1 — Single Parent Element

JSX must return **one parent element**.

Incorrect:

```jsx
function App() {
  return (
    <h1>Hello</h1>
    <p>Welcome</p>
  );
}
```

This fails because JSX expects **one root element**.

---

### Correct Solution

Wrap elements inside a parent.

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  );
}
```

Now there is one root element.

---

### React Fragment (Better Solution)

Instead of unnecessary `<div>`, we can use fragments.

```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome</p>
    </>
  );
}
```

Fragments avoid extra DOM nodes.

---

### Rule 2 — className Instead of class

HTML uses:

```html
<div class="box"></div>
```

But JSX uses:

```jsx
<div className="box"></div>
```

Reason:

`class` is a reserved keyword in JavaScript.

---

### Example

```jsx
function App() {
  return (
    <div className="container">
      <h1 className="title">React App</h1>
    </div>
  );
}
```

---

### Rule 3 — camelCase Attributes

HTML attributes are lowercase.

Example:

```
onclick
tabindex
maxlength
```

JSX uses **camelCase**.

Example:

```
onClick
tabIndex
maxLength
```

---

### Example

```jsx
function Button() {
  return <button onClick={() => alert("Clicked")}>Click Me</button>;
}
```

---

### Rule 4 — Self Closing Tags

Elements without children must close themselves.

Incorrect:

```jsx
<img src="image.png">
```

Correct:

```jsx
<img src="image.png" />
```

---

### Rule 5 — JavaScript Inside {}

JSX uses **curly braces** to run JavaScript.

Example:

```jsx
const name = "Tanish";

function App() {
  return <h1>Hello {name}</h1>;
}
```

---

### Summary of JSX Rules

| Rule              | Example                 |
| ----------------- | ----------------------- |
| Single parent     | `<div>...</div>`        |
| className         | `<div className="box">` |
| camelCase         | `onClick`               |
| Self closing tags | `<img />`               |
| JS expressions    | `{variable}`            |

---

### Synthesis Questions

1. Why must JSX return a single parent element?
2. Why does JSX use `className` instead of `class`?
3. Why are attributes written in camelCase?
4. Why are fragments useful?

---

## 22. Embedding JavaScript in JSX

Tag: **[FRESHER]**

Subtopics

- expressions
- dynamic rendering

---

### Problem

UI often needs **dynamic data**.

Examples:

- username
- API data
- product prices
- cart count
- conditions

Static HTML cannot handle this easily.

JSX solves this by allowing **JavaScript expressions inside UI**.

---

### JavaScript Expression Syntax

JSX allows JavaScript inside:

```
{ }
```

Example:

```jsx
const name = "Tanish";

function App() {
  return <h1>Hello {name}</h1>;
}
```

Output:

```
Hello Tanish
```

---

### Example 1 — Math Expression

```jsx
function App() {
  return <h1>2 + 3 = {2 + 3}</h1>;
}
```

Output:

```
2 + 3 = 5
```

---

### Example 2 — Variables

```jsx
function App() {
  const user = "Tanish";

  return (
    <div>
      <h1>Welcome {user}</h1>
    </div>
  );
}
```

---

### Example 3 — Function Call

```jsx
function greet(name) {
  return "Hello " + name;
}

function App() {
  return <h1>{greet("Tanish")}</h1>;
}
```

Output

```
Hello Tanish
```

---

### Example 4 — Dynamic Attributes

```jsx
function App() {
  const imageUrl = "https://example.com/image.png";

  return <img src={imageUrl} alt="profile" />;
}
```

---

### Example 5 — Dynamic Styles

```jsx
function App() {
  const color = "red";

  return <h1 style={{ color: color }}>Colored Text</h1>;
}
```

Explanation

```
style={{ color: color }}
```

JSX style uses **JavaScript object**.

---

### Important Rule

Inside `{ }` you can only write **expressions**, not statements.

Allowed:

```
variables
math
function calls
ternary
map
```

Not allowed:

```
if
for
while
```

---

### Example (Incorrect)

```jsx
{
  if (true) {
    return <h1>Hello</h1>;
  }
}
```

This will fail.

We use **ternary or logical operators instead**.

---

### Example — Conditional Expression

```jsx
const isLoggedIn = true;

function App() {
  return <h1>{isLoggedIn ? "Welcome Back" : "Please Login"}</h1>;
}
```

---

### Real Use Cases

Embedding JavaScript is used for:

- displaying API data
- dynamic lists
- conditional UI
- calculations
- dynamic attributes
- conditional components

---

### Synthesis Questions

1. How do we run JavaScript inside JSX?
2. Why are curly braces used?
3. Why can't `if` statements be written directly inside JSX?
4. What type of JavaScript is allowed inside JSX?

---
