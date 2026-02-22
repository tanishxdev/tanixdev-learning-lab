# I. REACT CORE CONCEPTS

### 1–20

Each question will have:

- Concepts – complete theory
- Code examples – multiple, with explanation
- Interview Ready Answer – crisp version

---

# 1. What is React and why is it used?

## Concepts

React is a **JavaScript library** for building **user interfaces (UI)**.

It was created by Facebook.

Main purpose:

- Build **component-based UI**
- Handle **dynamic data**
- Update UI efficiently using **Virtual DOM**

React focuses only on the **View layer** in MVC architecture.

Why used:

- Reusable components
- Fast rendering with Virtual DOM
- Large ecosystem
- Strong community support

---

## Code Example

### Basic React Component

```jsx
// Import React library
import React from "react";

// Functional component
function App() {
  // JSX returned
  return <h1>Hello React</h1>;
}

export default App;
```

Explanation:

- React component is just a function
- Returns JSX
- JSX renders UI

---

## Interview Ready Answer

React is a JavaScript library used to build interactive user interfaces using a component-based architecture. It uses a Virtual DOM to efficiently update the UI and focuses only on the view layer of applications.

---

# 2. Differentiate between React and other frameworks (Angular, Vue)

## Concepts

| Feature        | React           | Angular        | Vue             |
| -------------- | --------------- | -------------- | --------------- |
| Type           | Library         | Full Framework | Framework       |
| Language       | JavaScript      | TypeScript     | JavaScript      |
| Learning Curve | Moderate        | High           | Easy            |
| DOM            | Virtual DOM     | Real DOM       | Virtual DOM     |
| Architecture   | Component-based | MVC            | Component-based |

React:

- Only handles UI
- Flexible
- Requires additional libraries

Angular:

- Complete solution
- Opinionated
- Built-in routing, HTTP, forms

Vue:

- Lightweight
- Easy syntax
- Two-way binding

---

## Code Example

### React (Component)

```jsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

### Angular (Component - TypeScript)

```ts
@Component({
  selector: "app-root",
  template: `<h1>Hello</h1>`,
})
export class AppComponent {}
```

---

## Interview Ready Answer

React is a UI library focused only on the view layer, while Angular is a full-fledged framework with built-in solutions. Vue is also a framework but lightweight and beginner-friendly. React provides flexibility, Angular provides structure, and Vue balances both.

---

# 3. What are the key features of React?

## Concepts

1. Component-based architecture
2. Virtual DOM
3. JSX
4. One-way data binding
5. Hooks
6. Reusable components

---

## Code Example

### One-way Data Flow

```jsx
function Parent() {
  const message = "Hello";
  return <Child text={message} />;
}

function Child(props) {
  return <h1>{props.text}</h1>;
}
```

Data flows from Parent → Child only.

---

## Interview Ready Answer

Key features of React include component-based architecture, Virtual DOM for efficient rendering, JSX syntax, one-way data binding, and Hooks for managing state and lifecycle in functional components.

---

# 4. What are the advantages and disadvantages of React?

## Concepts

### Advantages

- Fast rendering
- Reusable components
- Strong ecosystem
- Easy testing
- SEO support with SSR

### Disadvantages

- Only UI layer
- Frequent updates
- Requires additional libraries

---

## Code Example (Reusable Component)

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}
```

Reusable across application.

---

## Interview Ready Answer

Advantages include fast rendering through Virtual DOM, reusable components, and strong community support. Disadvantages include being only a UI library and requiring additional libraries for routing and state management.

---

# 5. Explain React's component-based architecture.

## Concepts

UI is divided into small, reusable pieces called components.

Each component:

- Has its own logic
- Can manage its own state
- Can be reused

Structure:
App
├── Header
├── Sidebar
└── Content

---

## Code Example

```jsx
function Header() {
  return <h1>Header</h1>;
}

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

---

## Interview Ready Answer

React uses component-based architecture where UI is divided into independent, reusable components. Each component manages its own logic and state, making applications modular and maintainable.

---

# 6. What is declarative programming in React?

## Concepts

Declarative means:
You describe **what UI should look like**, not how to update it.

Imperative:
Manually update DOM.

Declarative:
React updates DOM automatically when state changes.

---

## Code Example

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

You declare UI based on state.

---

## Interview Ready Answer

Declarative programming in React means describing what the UI should look like based on state. React automatically updates the DOM when the state changes.

---

# 7. How does React differ from jQuery?

## Concepts

jQuery:

- Direct DOM manipulation
- Imperative

React:

- Virtual DOM
- Declarative
- Component-based

jQuery manually updates DOM.

React re-renders efficiently.

---

## Code Example

### jQuery

```js
$("#btn").click(function () {
  $("#text").text("Hello");
});
```

### React

```jsx
function App() {
  const [text, setText] = React.useState("");

  return (
    <>
      <button onClick={() => setText("Hello")}>Click</button>
      <p>{text}</p>
    </>
  );
}
```

---

## Interview Ready Answer

React differs from jQuery because jQuery directly manipulates the DOM imperatively, while React uses a declarative approach and Virtual DOM to efficiently update UI.

---

# 8. What is JSX?

## Concepts

JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript.

- JSX is not HTML.
- JSX gets converted into `React.createElement()` calls.
- Makes UI code readable.

Browsers do not understand JSX directly.
Babel transpiles JSX → JavaScript.

---

## Code Example

### JSX

```jsx
function App() {
  return <h1>Hello JSX</h1>;
}
```

### Transpiled Version

```js
function App() {
  return React.createElement("h1", null, "Hello JSX");
}
```

Explanation:

- JSX is syntactic sugar
- Converted to React element objects

---

## Interview Ready Answer

JSX is a syntax extension that allows writing HTML-like code in JavaScript. It gets transpiled into `React.createElement()` calls and makes UI code more readable.

---

# 9. How does JSX differ from HTML?

## Concepts

Differences:

1. `class` → `className`
2. `for` → `htmlFor`
3. Inline styles use objects
4. Self-closing tags mandatory
5. Expressions use `{}`

JSX is JavaScript, not HTML.

---

## Code Example

```jsx
function App() {
  const name = "Tanish";

  return (
    <div className="box">
      <label htmlFor="name">Name</label>
      <input id="name" />
      <p>{name}</p>
    </div>
  );
}
```

---

## Interview Ready Answer

JSX differs from HTML because it uses JavaScript conventions like `className` instead of `class`, requires self-closing tags, and allows JavaScript expressions inside `{}`.

---

# 10. How does JSX get converted to JavaScript?

## Concepts

JSX → Babel → `React.createElement()` → Virtual DOM object

Process:

1. Write JSX
2. Babel transpiles
3. Creates React element objects
4. React renders them

---

## Code Example

JSX:

```jsx
<h1>Hello</h1>
```

Converted:

```js
React.createElement("h1", null, "Hello");
```

React.createElement returns an object:

```js
{
  type: "h1",
  props: { children: "Hello" }
}
```

---

## Interview Ready Answer

JSX is transpiled by Babel into `React.createElement()` calls which return JavaScript objects representing elements. React then renders these objects into the DOM.

---

# 11. Can we use React without JSX?

## Concepts

Yes.

JSX is optional.
You can directly use `React.createElement()`.

JSX only improves readability.

---

## Code Example

```js
function App() {
  return React.createElement("h1", null, "No JSX");
}
```

---

## Interview Ready Answer

Yes, React can be used without JSX by directly using `React.createElement()`. JSX is just syntactic sugar.

---

# 12. What are the rules of writing JSX?

## Concepts

1. Return single parent element
2. Close all tags
3. Use camelCase for attributes
4. Use `{}` for JS expressions
5. Use `className` instead of `class`

---

## Code Example

Correct:

```jsx
function App() {
  return (
    <div>
      <img src="img.png" alt="img" />
    </div>
  );
}
```

Wrong:

```jsx
return (
  <div>
    <img>
  </div>
);
```

---

## Interview Ready Answer

JSX must return a single parent element, close all tags, use camelCase attributes, and wrap JavaScript expressions inside `{}`.

---

# 13. How do you write comments in JSX?

## Concepts

Inside JSX:
Use `{/* comment */}`

Outside JSX:
Use `//` or `/* */`

---

## Code Example

```jsx
function App() {
  return (
    <div>
      {/* This is JSX comment */}
      <h1>Hello</h1>
    </div>
  );
}
```

---

## Interview Ready Answer

Comments inside JSX are written using `{/* comment */}` syntax because JSX expects JavaScript expressions.

---

# 14. How to render HTML entities in JSX?

## Concepts

You can:

- Use entity directly (`&copy;`)
- Use Unicode (`\u00A9`)
- Use JavaScript string

---

## Code Example

```jsx
function App() {
  return <h1>&copy; 2026</h1>;
}
```

Or:

```jsx
function App() {
  return <h1>{"\u00A9"} 2026</h1>;
}
```

---

## Interview Ready Answer

HTML entities can be rendered directly like `&copy;` or using Unicode inside JSX expressions.

---

# 15. What is the difference between JSX and templates?

## Concepts

JSX:

- JavaScript-based
- Compiled to JS
- Full JS power

Templates:

- Separate template language
- Limited logic

JSX allows full programming capability.

---

## Code Example

JSX:

```jsx
{
  items.map((item) => <li key={item}>{item}</li>);
}
```

Template engines restrict logic.

---

## Interview Ready Answer

JSX is JavaScript-based and allows full programming logic inside UI, while traditional templates use separate template languages with limited logic support.

---

# 16. How to write multiline JSX?

## Concepts

Wrap JSX in parentheses.
Use single parent element.

---

## Code Example

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Multiline JSX</p>
    </div>
  );
}
```

---

## Interview Ready Answer

Multiline JSX is written inside parentheses and must return a single parent element.

---

# 17. What is the Virtual DOM?

## Concepts

Virtual DOM is a lightweight JavaScript copy of the Real DOM.

When state changes:

1. New Virtual DOM created
2. Compared with old Virtual DOM
3. Only changed nodes updated in Real DOM

Improves performance.

---

## Code Example

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

Only text node updates.

---

## Interview Ready Answer

Virtual DOM is a lightweight copy of the real DOM. React compares the previous and updated Virtual DOM and updates only the changed parts in the real DOM.

---

# 18. How does React use Virtual DOM?

## Concepts

Process:

1. State changes
2. React creates new Virtual DOM tree
3. Diffing algorithm compares trees
4. Minimal DOM updates applied

This is called reconciliation.

---

## Code Example

```jsx
function App() {
  const [text, setText] = React.useState("A");

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText("B")}>Change</button>
    </div>
  );
}
```

Only `<p>` content changes.

---

## Interview Ready Answer

React creates a new Virtual DOM on state updates, compares it with the previous one using diffing, and updates only the changed elements in the real DOM.

---

# 19. What are the benefits of Virtual DOM?

## Concepts

1. Faster updates
2. Efficient re-rendering
3. Improved performance
4. Better developer experience

Batching updates reduces DOM operations.

---

## Code Example

Multiple state updates batched:

```jsx
setCount(1);
setCount(2);
```

React batches updates.

---

## Interview Ready Answer

Virtual DOM improves performance by minimizing direct DOM manipulation, batching updates, and updating only the changed elements.

---

# 20. Explain the reconciliation process.

## Concepts

Reconciliation is the process of updating the DOM efficiently.

Steps:

1. Compare old and new Virtual DOM
2. Identify differences
3. Update only changed nodes
4. Uses keys for list comparison

Key rules:

- Different element type → full replace
- Same type → update attributes
- Keys help track list items

---

## Code Example

```jsx
function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

Keys help React track changes.

---

## Interview Ready Answer

Reconciliation is React’s process of comparing the old and new Virtual DOM trees and updating only the changed elements in the real DOM. It uses a diffing algorithm and keys to optimize updates.

From `01-reactjs-interview-questions.md`

---

# 20. Explain the reconciliation process.

## Concepts

Reconciliation is React’s algorithm for updating the DOM efficiently.

Steps:

1. State/props change
2. New Virtual DOM tree created
3. Old and new trees compared (diffing)
4. Only changed nodes updated in Real DOM

Rules:

- Different element type → remove old, mount new
- Same type → update attributes
- Keys help identify list items

---

## Code Example

```jsx
function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

Explanation:

- `key` helps React track list changes
- Without keys → inefficient updates

---

## Interview Ready Answer

Reconciliation is the process where React compares the old and new Virtual DOM trees and updates only the changed elements in the real DOM using a diffing algorithm and keys.

---

# 21. What is the diffing algorithm in React?

## Concepts

Diffing is the algorithm React uses to compare two Virtual DOM trees.

Optimizations:

1. Elements of different types → full replace
2. Same type → compare props
3. Lists → use keys

Time complexity optimized to O(n)

---

## Code Example

```jsx
function App({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome</h1> : <p>Please Login</p>;
}
```

If type changes (`h1` → `p`), React replaces node.

---

## Interview Ready Answer

React’s diffing algorithm compares two Virtual DOM trees and determines minimal changes required in the real DOM using heuristics like element type comparison and keys.

---

# 22. How does React optimize updates using Virtual DOM?

## Concepts

Optimization methods:

- Virtual DOM comparison
- Batching updates
- Diffing algorithm
- Keys in lists

Only changed parts re-rendered.

---

## Code Example

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

Only `<h1>` text updates.

---

## Interview Ready Answer

React optimizes updates by creating a new Virtual DOM, comparing it with the previous one, and updating only the changed nodes in the real DOM.

---

# 23. What is the difference between Virtual DOM and Real DOM?

## Concepts

| Feature      | Virtual DOM   | Real DOM    |
| ------------ | ------------- | ----------- |
| Type         | JS Object     | Browser DOM |
| Speed        | Fast          | Slower      |
| Updates      | Batched       | Immediate   |
| Manipulation | React handles | Direct      |

Virtual DOM reduces expensive DOM operations.

---

## Code Example

Virtual DOM representation:

```js
{
  type: "h1",
  props: { children: "Hello" }
}
```

---

## Interview Ready Answer

Virtual DOM is a lightweight JavaScript representation of the real DOM. React updates the Virtual DOM first and then efficiently applies minimal changes to the real DOM.

---

# 24. What is Shadow DOM vs Virtual DOM?

## Concepts

Shadow DOM:

- Browser feature
- Encapsulates styles
- Used in Web Components

Virtual DOM:

- React concept
- Improves rendering performance

Shadow DOM isolates components.
Virtual DOM optimizes updates.

---

## Code Example

Shadow DOM (vanilla JS):

```js
const shadow = element.attachShadow({ mode: "open" });
```

Virtual DOM (React):

```jsx
<h1>Hello</h1>
```

---

## Interview Ready Answer

Shadow DOM is a browser feature for style encapsulation, while Virtual DOM is a React concept used to efficiently update the UI.

---

# 25. What is a React Element?

## Concepts

React Element:

- Plain JavaScript object
- Describes UI
- Created using JSX or `React.createElement()`
- Immutable

---

## Code Example

```jsx
const element = <h1>Hello</h1>;
```

Equivalent:

```js
const element = React.createElement("h1", null, "Hello");
```

---

## Interview Ready Answer

A React Element is a plain JavaScript object that represents a UI node. It is immutable and created using JSX or `React.createElement()`.

---

# 26. What is a React Component?

## Concepts

Component:

- Function or Class
- Returns React elements
- Reusable
- Can manage state

---

## Code Example

```jsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

---

## Interview Ready Answer

A React Component is a reusable function or class that returns React elements and can manage its own logic and state.

---

# 27. What is a React Node?

## Concepts

React Node:
Anything that can be rendered:

- String
- Number
- React Element
- Fragment
- Array
- null

---

## Code Example

```jsx
function App() {
  return (
    <>
      {"Hello"}
      {123}
      <h1>Title</h1>
    </>
  );
}
```

---

## Interview Ready Answer

A React Node is any value that React can render, including strings, numbers, elements, fragments, arrays, or null.

---

# 28. Differentiate between React Element and React Component.

## Concepts

| React Element | React Component  |
| ------------- | ---------------- |
| Object        | Function/Class   |
| Describes UI  | Produces UI      |
| Immutable     | Can have state   |
| `<h1 />`      | `function App()` |

Element = blueprint
Component = factory

---

## Code Example

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

`<h1>` → Element
`App` → Component

---

## Interview Ready Answer

A React Element is a plain object describing UI, while a React Component is a function or class that returns React elements and can contain logic and state.

---

# 29. How are React Elements created?

## Concepts

Two ways:

1. JSX
2. `React.createElement()`

JSX internally calls `React.createElement`.

---

## Code Example

Using JSX:

```jsx
const element = <h1>Hello</h1>;
```

Using createElement:

```js
const element = React.createElement("h1", null, "Hello");
```

---

## Interview Ready Answer

React elements are created using JSX or directly using `React.createElement()`, which returns a JavaScript object representing the UI.

---

# 30. What is React.createElement()?

## Concepts

Function that creates React element objects.

Syntax:

```
React.createElement(type, props, children)
```

Returns:

```
{
  type,
  props
}
```

---

## Code Example

```js
const element = React.createElement("h1", { className: "title" }, "Hello");
```

---

## Interview Ready Answer

`React.createElement()` is a function that creates React element objects. JSX is syntactic sugar for this function.

---

# 31. What are Functional Components?

## Concepts

- JavaScript functions
- Return JSX
- Use Hooks
- Simpler and preferred

---

## Code Example

```jsx
function App() {
  return <h1>Functional Component</h1>;
}
```

With Hook:

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

## Interview Ready Answer

Functional components are JavaScript functions that return JSX and can manage state and lifecycle using Hooks.

---

# 32. What are Class Components?

## Concepts

- ES6 classes
- Extend React.Component
- Have lifecycle methods
- Use `this.state`

Older pattern.

---

## Code Example

```jsx
class App extends React.Component {
  render() {
    return <h1>Class Component</h1>;
  }
}
```

---

## Interview Ready Answer

Class components are ES6 classes that extend React.Component and use lifecycle methods and `this.state` for managing state.

---

# 33. Differentiate between Functional and Class Components.

## Concepts

| Functional | Class             |
| ---------- | ----------------- |
| Functions  | Classes           |
| Hooks      | Lifecycle methods |
| Simpler    | Verbose           |
| No `this`  | Uses `this`       |

Functional preferred.

---

## Code Example

Functional:

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

Class:

```jsx
class App extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

---

## Interview Ready Answer

Functional components are simpler and use Hooks, while class components use lifecycle methods and `this.state`. Functional components are preferred in modern React.

---

# 34. When to use Functional vs Class Components?

## Concepts

Use Functional:

- New projects
- Hooks
- Cleaner code

Use Class:

- Legacy codebases
- Error Boundaries

---

## Code Example

Modern:

```jsx
function App() {
  return <h1>Modern React</h1>;
}
```

---

## Interview Ready Answer

Functional components should be used in modern React development. Class components are mainly used in legacy projects or for specific cases like error boundaries.

---

# 35. What are Pure Components?

## Concepts

PureComponent:

- Class component
- Implements shallow comparison in `shouldComponentUpdate`
- Prevents unnecessary re-renders

Only re-renders if props/state change.

---

## Code Example

```jsx
class MyComponent extends React.PureComponent {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

---

## Interview Ready Answer

A Pure Component is a class component that performs a shallow comparison of props and state to prevent unnecessary re-renders, improving performance.
