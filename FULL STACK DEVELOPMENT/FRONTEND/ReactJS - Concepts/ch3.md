# SECTION 3 — JSX System

Before learning components, we must understand **JSX**, because **React UI is written using JSX**.

Everything we render in React — buttons, cards, lists, forms — will be written using JSX.

So the mental model must be very clear.

---

# 20. JSX Introduction

Tag: **[FRESHER]**

---

# 1. Problem — Why JSX Exists

Before React, UI was built using **pure JavaScript DOM manipulation**.

Example:

```javascript
const element = document.createElement("h1");
element.innerText = "Hello World";
document.body.appendChild(element);
```

If we want to build a UI with:

- navbar
- cards
- forms
- lists
- dashboards

This approach becomes **very messy**.

Example of complex DOM creation:

```javascript
const div = document.createElement("div");

const heading = document.createElement("h1");
heading.innerText = "Welcome";

const paragraph = document.createElement("p");
paragraph.innerText = "React makes UI easier";

div.appendChild(heading);
div.appendChild(paragraph);

document.body.appendChild(div);
```

Problems:

1. Hard to read
2. Hard to maintain
3. Too verbose
4. UI logic mixed with DOM API

Developers wanted to write UI like **HTML**, not DOM APIs.

That is where **JSX** comes.

---

# 2. Concept — What JSX Is

JSX stands for:

```
JavaScript XML
```

JSX allows writing **HTML-like syntax inside JavaScript**.

Example:

```jsx
const element = <h1>Hello World</h1>;
```

This looks like HTML but it is actually **JavaScript syntax extension**.

React uses JSX to describe **UI structure**.

Think of JSX as:

```
HTML syntax → describing UI
JavaScript → controlling logic
```

---

# 3. JSX Example in React (Vite Project)

Example component:

```jsx
function App() {
  // JSX UI returned by component
  return (
    <div>
      <h1>Hello React</h1>
      <p>This UI is written using JSX</p>
    </div>
  );
}

export default App;
```

Explanation:

```
function App() → React component
return (...) → JSX returned
<div> → container element
<h1> → heading
<p> → paragraph
```

React reads JSX and renders **actual DOM elements in browser**.

---

# 4. JSX Is Not HTML

JSX **looks like HTML but it is not HTML**.

It is actually **JavaScript function calls**.

Example JSX:

```jsx
<h1>Hello</h1>
```

Behind the scenes React converts it to:

```javascript
React.createElement("h1", null, "Hello");
```

Explanation:

```
"h1" → element type
null → props
"Hello" → children
```

---

# 5. JSX Compilation

Browsers **do not understand JSX**.

So JSX must be **converted to JavaScript**.

This process is called:

```
Transpilation
```

Tools used:

```
Babel
Vite
Webpack
```

Flow:

```
JSX Code
   ↓
Babel Compiler
   ↓
React.createElement()
   ↓
Virtual DOM
   ↓
Real DOM
```

Example:

JSX

```jsx
const element = <h1>Hello</h1>;
```

Compiled JS

```javascript
const element = React.createElement("h1", null, "Hello");
```

---

# 6. JSX with Variables

JSX can display JavaScript values.

Example:

```jsx
function App() {
  const name = "Tanish";

  return <h1>Hello {name}</h1>;
}
```

Output:

```
Hello Tanish
```

Explanation:

```
{name} → JavaScript expression
```

---

# 7. JSX with Expressions

JSX allows expressions inside `{}`.

Example:

```jsx
function App() {
  const a = 10;
  const b = 20;

  return <h1>Sum = {a + b}</h1>;
}
```

Output

```
Sum = 30
```

---

# 8. JSX with Function Calls

Example:

```jsx
function greet() {
  return "Hello Developer";
}

function App() {
  return <h1>{greet()}</h1>;
}
```

Output

```
Hello Developer
```

---

# 9. JSX with Objects

Example:

```jsx
function App() {
  const user = {
    name: "Tanish",
    age: 21,
  };

  return <h1>{user.name}</h1>;
}
```

Output

```
Tanish
```

---

# 10. JSX Supports Nesting

JSX elements can be nested like HTML.

Example:

```jsx
function App() {
  return (
    <div>
      <h1>Welcome</h1>

      <p>Learning React JSX</p>

      <button>Click me</button>
    </div>
  );
}
```

---

# JSX Mental Model

JSX is **not HTML**.

It is:

```
A syntax to describe UI structure
```

Think of JSX like:

```
function UI(){
   return UI_DESCRIPTION
}
```

React then converts that description into DOM.

---

# JSX Use Cases

JSX is used everywhere in React.

Examples:

```
Components
Layouts
Forms
Cards
Dashboards
Lists
Navigation
```

Example:

```jsx
<Card title="Product" price={500} />
```

---

# Common Beginner Mistake

Writing JSX without parentheses.

Wrong:

```jsx
return;
<div>Hello</div>;
```

Correct:

```jsx
return <div>Hello</div>;
```

---

# Synthesis Questions

1. What is JSX?
2. Why does React use JSX?
3. Is JSX HTML?
4. How JSX gets converted to JavaScript?
5. What does `<h1>Hello</h1>` compile to?
6. Why JSX improves UI development?

---

---

# 21. JSX Rules

JSX has some **important syntax rules**.

---

# 1. Single Parent Rule

JSX must return **one root element**.

Wrong:

```jsx
function App(){

  return (
    <h1>Hello</h1>
    <p>Welcome</p>
  )

}
```

Error because two elements are returned.

Correct:

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

---

# 2. React Fragment

If we don't want extra `div`.

We use:

```
<>
</>
```

Example:

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

Fragment does **not create extra DOM node**.

---

# 3. className Instead of class

In HTML we use:

```html
<div class="container"></div>
```

In JSX we must write:

```jsx
<div className="container"></div>
```

Reason:

```
class is reserved keyword in JavaScript
```

---

# 4. Self Closing Tags

In HTML:

```html
<img />
```

In JSX must close:

```jsx
<img />
```

Example:

```jsx
<img src="logo.png" />
```

---

# 5. camelCase Attributes

HTML attributes use lowercase.

Example:

```
onclick
onchange
```

In JSX we use **camelCase**.

Example:

```jsx
<button onClick={handleClick}>
```

More examples:

```
onClick
onChange
onMouseEnter
onSubmit
```

---

# 6. JavaScript Inside Curly Braces

JSX allows JavaScript inside `{}`.

Example:

```jsx
<h1>{10 + 5}</h1>
```

---

# 7. Inline Style Uses Object

HTML:

```html
<div style="color:red"></div>
```

JSX:

```jsx
<div style={{ color: "red" }}></div>
```

Explanation:

```
style expects JavaScript object
```

---

# JSX Rules Summary

| Rule                       | Reason                  |
| -------------------------- | ----------------------- |
| Single root element        | JSX returns one element |
| className instead of class | JS keyword conflict     |
| camelCase attributes       | JS naming conventions   |
| self closing tags          | XML syntax              |
| {} for JS expressions      | embed logic             |

---

# Synthesis Questions

1. Why JSX requires one parent element?
2. Why React uses `className` instead of `class`?
3. Why style attribute uses object?
4. What problem React Fragment solves?

---

---

# 22. Embedding JavaScript in JSX

This is **one of the most powerful features of React**.

JSX allows **JavaScript expressions directly inside UI**.

---

# 1. Why We Need This

UI is rarely static.

Example:

- show username
- show product price
- show cart count
- show conditional UI

Example:

```
Welcome Tanish
Cart (3)
Products: 10
```

These values come from **JavaScript variables**.

So React allows embedding JS in JSX.

---

# 2. Syntax

JavaScript expressions must be inside:

```
{}
```

Example:

```jsx
<h1>{variable}</h1>
```

---

# 3. Variables in JSX

Example:

```jsx
function App() {
  const name = "Tanish";

  return <h1>Hello {name}</h1>;
}
```

Output

```
Hello Tanish
```

---

# 4. Arithmetic Expressions

Example:

```jsx
function App() {
  const price = 100;
  const tax = 20;

  return <h1>Total: {price + tax}</h1>;
}
```

Output:

```
Total: 120
```

---

# 5. Function Calls

Example:

```jsx
function greet() {
  return "Welcome Developer";
}

function App() {
  return <h1>{greet()}</h1>;
}
```

---

# 6. Conditional Rendering

Example:

```jsx
function App() {
  const isLoggedIn = true;

  return <h1>{isLoggedIn ? "Dashboard" : "Login"}</h1>;
}
```

---

# 7. Dynamic Lists

Example:

```jsx
function App() {
  const items = ["Apple", "Banana", "Mango"];

  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
```

This is how React renders **lists of components**.

---

# Important Limitation

Inside `{}` we can use:

```
Expressions
```

But **not statements**.

Allowed:

```
a + b
functionCall()
ternary
map()
```

Not allowed:

```
if
for
while
switch
```

Example wrong:

```jsx
{
  if (x > 5) return "Hello";
}
```

Correct:

```jsx
{
  x > 5 ? "Hello" : "Hi";
}
```

---

# Real World React Example

Example product card.

```jsx
function Product() {
  const product = {
    name: "Laptop",
    price: 50000,
    inStock: true,
  };

  return (
    <div>
      <h2>{product.name}</h2>

      <p>Price: {product.price}</p>

      <p>{product.inStock ? "Available" : "Out of stock"}</p>
    </div>
  );
}
```

---

# Real Mental Model

JSX is simply:

```
UI Template + JavaScript Logic
```

Example:

```
HTML structure
+
JavaScript values
=
Dynamic UI
```

---

# Synthesis Questions

1. Why JSX uses `{}` for JavaScript?
2. Why `if` cannot be used inside JSX?
3. How React renders lists using map?
4. Why dynamic rendering is important in UI?

---

If you want, the **next section (Component Architecture)** will unlock the **real power of React**.

Because once JSX is clear, **components start making sense immediately**.
