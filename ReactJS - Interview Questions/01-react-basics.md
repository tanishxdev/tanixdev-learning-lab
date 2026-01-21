## What is React and why is it used?

---

### Concepts

**What React is**
React is a JavaScript library used to build user interfaces, mainly for web applications.
It focuses only on the **UI layer** — what the user sees and interacts with.

**Why React exists**
Before React, building complex UIs was hard because:

- The UI had many changing parts (buttons, forms, lists).
- Updating the DOM manually was slow and error-prone.
- Code became messy when UI logic and DOM manipulation mixed together.

React was created to:

- Make UI updates predictable.
- Break the UI into small, reusable pieces.
- Keep code easier to read, test, and maintain.

**Mental model (how React thinks)**
Think of React as:

- A function of **state → UI**
- You describe **what the UI should look like**, not **how to update it step by step**

Flow:

1. You store data in state.
2. State changes.
3. React re-runs the component.
4. React updates only the changed parts of the UI.

You don’t touch the DOM directly. React handles it.

**How React works internally (high level)**

- React keeps a virtual representation of the UI (Virtual DOM).
- When state changes, React creates a new virtual UI.
- It compares old vs new.
- Updates only the real DOM parts that changed.

**Connection to real React usage**

- Buttons updating counters
- Forms updating input values
- Lists updating after API calls
  All these are simple state changes → UI updates.

---

### Code Example

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
```

**What this shows**

- `count` is state.
- UI depends on `count`.
- Clicking the button changes state.
- React updates the UI automatically.

**Real-world usage**

- Like a notification badge increasing.
- Like a cart item count updating.

**Mini-project idea**

- Build a simple counter or todo list.
- Focus only on state → UI update flow.

---

### Interview Answer

React is a JavaScript library for building user interfaces.
It is used because it makes UI development simple, reusable, and predictable by managing updates efficiently using a component-based approach and state-driven rendering.

---

### Follow-up Interview Questions (with short answers)

1. **Is React a framework or library?**
   Library. It focuses only on the UI layer.

2. **What problem does React solve?**
   Managing complex and dynamic UI updates in a clean way.

3. **What is component-based architecture?**
   Building UI using small, reusable, independent pieces.

4. **Does React handle routing or HTTP by default?**
   No. It focuses only on rendering UI.

5. **Can React be used for mobile apps?**
   Yes, using React Native.

## How is React different from Angular or Vue?

---

### Concepts

**Big picture difference**
React, Angular, and Vue are all used to build front-end applications, but they have different philosophies.

Think of them like this:

- **React** → UI library (you choose the rest)
- **Angular** → Full framework (everything included)
- **Vue** → Progressive framework (middle ground)

---

**React**

- Focuses only on the **view layer (UI)**.
- You build UI using components.
- You choose your own tools for routing, state management, data fetching.
- More flexible, but more decisions to make.

**Why this exists**
React was designed to:

- Solve UI complexity.
- Stay small and focused.
- Let developers pick tools as needed.

---

**Angular**

- A **complete framework**.
- Comes with routing, HTTP, forms, state patterns, testing setup.
- Uses TypeScript by default.
- Has stricter rules and structure.

**Why Angular exists**

- Large teams need strong structure.
- Enforces consistency across big applications.

---

**Vue**

- A **progressive framework**.
- Can be used like a small library or a full framework.
- Easier learning curve.
- Uses templates instead of JSX (by default).

**Why Vue exists**

- Simplicity + structure.
- Easier for beginners, still powerful for large apps.

---

**Mental model comparison**

```
React:
State → UI (you assemble the ecosystem)

Angular:
Framework controls structure → you fill logic

Vue:
Templates + reactivity → smooth balance
```

---

**Real React usage connection**
In React:

- You import libraries as needed.
- You design architecture yourself.
- Preferred in startups and product teams due to flexibility.

---

### Code Example

**React (JSX-based, JavaScript-first)**

```jsx
function Hello() {
  return <h1>Hello React</h1>;
}
```

**Vue (template-based)**

```html
<template>
  <h1>Hello Vue</h1>
</template>
```

**Angular (class + decorators)**

```ts
@Component({
  selector: "app-hello",
  template: "<h1>Hello Angular</h1>",
})
export class HelloComponent {}
```

**What this shows**

- React uses plain JavaScript + JSX.
- Angular uses decorators and classes.
- Vue uses HTML-like templates.

---

### Interview Answer

React is a UI library focused only on building the view layer, while Angular is a full framework with everything built in, and Vue sits in between. React gives more flexibility and control, Angular enforces structure, and Vue balances simplicity with features.

---

### Follow-up Interview Questions (with short answers)

1. **Which is easier to learn: React, Angular, or Vue?**
   React or Vue. Angular has a steeper learning curve.

2. **Why do companies prefer React?**
   Flexibility, performance, and strong ecosystem.

3. **Does React support two-way data binding?**
   No. React uses one-way data flow.

4. **Is JSX mandatory in React?**
   No, but it is commonly used.

5. **Can React scale to large applications?**
   Yes, with proper architecture and tooling.

## What is a React component?

---

### Concepts

**What a component is**
A React component is a **small, reusable piece of UI**.
It is just a JavaScript function (or class) that returns UI.

Instead of building one big page, React encourages:

- Breaking the UI into pieces
- Each piece handles its own logic and UI

---

**Why components exist**
Without components:

- UI code becomes large and hard to manage
- Reuse is difficult
- Changes in one part can break others

Components solve this by:

- Encapsulating UI + logic together
- Making code reusable and predictable
- Allowing independent development

---

**Mental model (how to think about components)**

Think of components like:

- Lego blocks
- Each block does one job
- Blocks can be combined to form bigger structures

Example mental flow:

```
App
 ├── Header
 ├── ProductList
 │     ├── ProductCard
 │     └── ProductCard
 └── Footer
```

Each box is a component.

---

**How components work internally**

- React calls the component function.
- The function returns a description of UI (JSX).
- React renders that UI.
- When state or props change, React re-runs the component.

Important idea:

> A component is re-executed, not updated line-by-line.

---

**Connection to real React usage**

- Buttons
- Forms
- Cards
- Modals
- Pages

Everything in React is built using components.

---

### Code Example

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}
```

**What this shows**

- `Welcome` is a component.
- It returns UI.
- It can be reused anywhere.

**Using the component**

```jsx
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}
```

Same component, reused multiple times.

**Mini-project idea**

- Break a webpage into Header, Sidebar, Content, Footer components.
- Focus only on splitting UI.

---

### Interview Answer

A React component is a reusable piece of UI, usually written as a function, that returns JSX. Components help split the interface into small, independent parts that can be reused and managed easily.

---

### Follow-up Interview Questions (with short answers)

1. **Are components just functions?**
   Yes, functional components are just JavaScript functions.

2. **Can components have their own data?**
   Yes, using state.

3. **Can components be reused?**
   Yes, reuse is a core idea of React.

4. **What is the root component in React?**
   Usually the `App` component.

5. **Can one component contain another?**
   Yes, this is called component composition.

## How do you create a component in React?

---

### Concepts

**Basic idea**
A React component is created by writing a JavaScript function that:

- Starts with a capital letter
- Returns JSX (UI)

This function becomes a reusable UI block.

---

**Why this pattern is used**

- JavaScript functions are simple and predictable
- Easy to reuse, test, and compose
- Fits naturally with React’s “state → UI” model

---

**Mental model**

Think like this:

```
Component = function(state, props) → UI
```

React:

1. Calls your component function
2. Reads state and props
3. Gets JSX
4. Renders it

Whenever state or props change, the function runs again.

---

**Ways to create a component**

1. **Functional Component (recommended)**
2. **Class Component (older, less used now)**

Modern React uses functional components with hooks.

---

**Connection to real usage**

- Every button, card, modal, page is a component
- Even the whole app is a component

---

### Code Example

**Functional Component**

```jsx
function Greeting() {
  return <h2>Hello User</h2>;
}
```

**Arrow function style (very common)**

```jsx
const Greeting = () => {
  return <h2>Hello User</h2>;
};
```

**Using the component**

```jsx
function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}
```

**Key rules shown**

- Component name starts with capital letter
- JSX returned from function
- Used like an HTML tag

---

**Mini-project idea**

- Create a `ProfileCard` component with name and role text
- Reuse it multiple times

---

### Interview Answer

A React component is created by defining a JavaScript function that starts with a capital letter and returns JSX. This function can then be reused as a custom HTML-like tag inside other components.

---

### Follow-up Interview Questions (with short answers)

1. **Why must component names start with capital letters?**
   So React can distinguish them from normal HTML elements.

2. **Can a component return multiple elements?**
   Yes, by wrapping them in a single parent or a fragment.

3. **Are class components still used?**
   Rarely. Functional components with hooks are preferred.

4. **Can components accept data?**
   Yes, using props.

5. **What does JSX return internally?**
   JavaScript objects describing UI.

## What is JSX and why do we use it in React?

---

### Concepts

**What JSX is**
JSX stands for JavaScript XML.
It looks like HTML, but it is actually **syntax that runs inside JavaScript**.

JSX allows you to write UI code like:

- HTML structure
- Inside JavaScript logic

---

**Why JSX exists**
Without JSX:

- You would write long `React.createElement` calls
- UI code becomes hard to read
- Logic and structure feel disconnected

JSX solves this by:

- Making UI readable
- Keeping logic and markup together
- Reducing mental overhead

---

**Mental model (important)**

JSX is **not HTML**.
JSX is **syntax sugar** for JavaScript function calls.

This:

```jsx
<h1>Hello</h1>
```

Becomes:

```js
React.createElement("h1", null, "Hello");
```

So:

- Browser does not understand JSX
- JSX is converted to JavaScript during build time

---

**How JSX works internally**

1. You write JSX
2. Babel converts JSX to `React.createElement`
3. React uses that to build Virtual DOM
4. UI gets rendered

---

**Connection to real React usage**

- JSX allows mixing logic and UI safely
- You can use JavaScript inside JSX using `{}`

Example mental flow:

```
State → JSX → React elements → DOM
```

---

### Code Example

**JSX with JavaScript inside**

```jsx
function Welcome() {
  const name = "Tanish";

  return <h1>Hello, {name}</h1>;
}
```

**Without JSX (hard to read)**

```js
function Welcome() {
  return React.createElement("h1", null, "Hello, ", "Tanish");
}
```

**Why JSX is preferred**

- More readable
- Closer to how UI is structured
- Easier to maintain

---

**Mini-project idea**

- Build a small component that conditionally shows text using JSX expressions.

---

### Interview Answer

JSX is a syntax extension for JavaScript that looks like HTML. It allows writing UI code in a readable way, and it gets compiled into `React.createElement` calls that React uses to render the UI.

---

### Follow-up Interview Questions (with short answers)

1. **Is JSX mandatory in React?**
   No, but it makes code much more readable.

2. **Can we write JavaScript inside JSX?**
   Yes, using curly braces `{}`.

3. **Does the browser understand JSX?**
   No, it is compiled before reaching the browser.

4. **Why can’t we use `if` directly inside JSX?**
   JSX expects expressions, not statements.

5. **What tool converts JSX to JavaScript?**
   Babel.

## Can you explain the Virtual DOM in React?

---

### Concepts

**What the Virtual DOM is**
The Virtual DOM is a **lightweight JavaScript representation** of the real DOM.

It is not the actual browser DOM.
It is a copy of how the UI should look at a given time.

---

**Why the Virtual DOM exists**
Direct DOM manipulation is:

- Slow
- Expensive
- Hard to manage for large UIs

React introduced the Virtual DOM to:

- Reduce direct DOM updates
- Improve performance
- Make UI updates predictable

---

**Mental model (very important)**

Think of it like this:

```
State change
   ↓
New Virtual DOM (JS object)
   ↓
Compare with old Virtual DOM
   ↓
Find differences
   ↓
Update only changed real DOM nodes
```

You never touch the real DOM directly.
React acts as a middle layer.

---

**How it works internally (step-by-step)**

1. Initial render

   - React creates a Virtual DOM tree.
   - Renders it to the real DOM.

2. State changes

   - React creates a new Virtual DOM tree.
   - Compares it with the previous one (diffing).

3. Reconciliation

   - React figures out the minimum changes.
   - Applies only those changes to the real DOM.

This process is called **reconciliation**.

---

**Connection to real React usage**

- Clicking a button
- Typing in input
- Updating lists from API

Even if one value changes, React does not re-render the whole page.

---

### Code Example

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

**What happens internally**

- `count` changes
- New Virtual DOM is created
- Only the `<p>` text node updates
- Button stays untouched

---

**Real-world usage scenario**

- Large dashboards
- Tables with frequent updates
- Forms with live validation

---

### Interview Answer

The Virtual DOM is a lightweight JavaScript representation of the real DOM. When state changes, React compares the new Virtual DOM with the previous one and updates only the changed parts of the real DOM, improving performance.

---

### Follow-up Interview Questions (with short answers)

1. **Is the Virtual DOM faster than the real DOM?**
   No. Reducing real DOM operations is what makes it faster.

2. **Does React re-render the whole DOM on every change?**
   No. It updates only the changed nodes.

3. **What is reconciliation?**
   The process of comparing old and new Virtual DOM trees.

4. **Can developers access the Virtual DOM directly?**
   No. React handles it internally.

5. **Is Virtual DOM unique to React?**
   No. Other libraries use similar ideas.

## What are the differences between a class component and a functional component?

---

### Concepts

**What both are**
Both class components and functional components are ways to create React components.
They solve the same problem: returning UI.

The difference is **how they are written and how they manage state and lifecycle**.

---

**Class components**

- Written using JavaScript classes
- Use `this` keyword
- State is managed using `this.state`
- Lifecycle methods like `componentDidMount`

Why they existed:

- Earlier React versions did not support state in functions
- Classes were needed for complex logic

Mental model:

```
Component instance
 → has state
 → has lifecycle methods
 → uses this
```

---

**Functional components**

- Written as plain JavaScript functions
- Use hooks for state and lifecycle
- No `this`
- Simpler and easier to reason about

Why they exist:

- Less boilerplate
- Easier reuse of logic using hooks
- Better readability

Mental model:

```
Function runs
 → reads state via hooks
 → returns UI
 → re-runs on state/props change
```

---

**How React treats them internally**

- Today, React treats both similarly during rendering
- Hooks give functional components full power of classes

---

**Connection to real React usage**

- Modern codebases use functional components
- Class components are mostly seen in legacy code

---

### Code Example

**Class Component**

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.increment()}>Increase</button>
      </div>
    );
  }
}
```

**Functional Component**

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

**What this shows**

- Less code in functional component
- No `this`
- Cleaner logic

---

### Interview Answer

Class components use JavaScript classes with state and lifecycle methods, while functional components are plain functions that use hooks for state and side effects. Modern React prefers functional components because they are simpler and easier to maintain.

---

### Follow-up Interview Questions (with short answers)

1. **Are class components still supported?**
   Yes, but they are not recommended for new code.

2. **Can functional components handle lifecycle logic?**
   Yes, using hooks like `useEffect`.

3. **Why hooks were introduced?**
   To use state and lifecycle logic in functions.

4. **Which one performs better?**
   Performance is similar; choice is about simplicity.

5. **Can hooks be used in class components?**
   No. Hooks work only in functional components.

## How do you handle events in React?

---

### Concepts

**What events are in React**
Events in React are actions triggered by the user, such as:

- Clicking a button
- Typing in an input
- Submitting a form

React handles events in a **controlled and predictable way**.

---

**Why React has its own event system**
React does not use browser events directly.
It uses a **synthetic event system** to:

- Normalize behavior across browsers
- Improve performance
- Keep event handling consistent

---

**Mental model**

Think like this:

```
User action
 → React captures event
 → Calls your handler function
 → You update state
 → UI updates
```

You do not manipulate the DOM.
You react to events by changing state.

---

**Key rules for handling events**

1. Use **camelCase** event names
   `onClick`, `onChange`, `onSubmit`

2. Pass a **function reference**, not a function call
   Correct: `onClick={handleClick}`
   Wrong: `onClick={handleClick()}`

3. Event handlers are usually defined inside the component

---

**How it works internally**

- React wraps native events into synthetic events
- The event object is reused (older versions pooled events)
- Handler runs inside React’s update cycle

---

**Connection to real React usage**

- Form inputs updating state
- Buttons triggering API calls
- Dropdown selections updating UI

---

### Code Example

**Handling a click event**

```jsx
function ButtonClick() {
  function handleClick() {
    console.log("Button clicked");
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

**Handling input change**

```jsx
function InputExample() {
  const [value, setValue] = React.useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return <input type="text" value={value} onChange={handleChange} />;
}
```

**What this shows**

- Events trigger functions
- Functions update state
- State controls UI

---

**Real-world usage scenario**

- Login form
- Search box with live results
- Button-based filters

---

### Interview Answer

Events in React are handled using camelCase event handlers like `onClick` or `onChange`. You pass a function to the handler, and inside that function you usually update state, which causes the UI to re-render.

---

### Follow-up Interview Questions (with short answers)

1. **Why do we pass a function reference to event handlers?**
   To prevent the function from running during render.

2. **What is a synthetic event?**
   A cross-browser wrapper around native browser events.

3. **How do you pass arguments to an event handler?**
   By using an arrow function.

4. **Can we prevent default behavior in React events?**
   Yes, using `event.preventDefault()`.

5. **Are React events attached to individual elements?**
   No, React uses event delegation internally.

## Can we prevent default behavior in React events, and are React events attached to individual elements?

---

### Concepts

**Preventing default behavior**

Some browser actions happen automatically:

- Form submit reloads the page
- Anchor tag navigates
- Right-click opens context menu

React does **not change this behavior by default**.

To stop it, you must explicitly tell the browser:

```
Do not do your default action.
```

This is done using:

```js
event.preventDefault();
```

Mental model:

```
User action
 → Browser wants to do default thing
 → React handler runs
 → You stop the default
 → Only your logic runs
```

This is very common in forms.

---

**Are React events attached to individual elements?**

Short answer: **No**.

Even though it looks like this:

```jsx
<button onClick={handleClick}>Click</button>
```

Internally:

- React does NOT attach a click listener to every button
- React attaches **one listener at the root**
- It uses **event delegation**

---

**Why React uses event delegation**

Reasons:

- Better performance
- Fewer event listeners
- Easier event management

Mental model:

```
Browser event
 → Root listener (React)
 → React figures out target
 → Calls correct handler
```

So:

- You write element-level handlers
- React manages them centrally

---

**How this connects to real React usage**

- Large apps with many buttons and inputs
- Dynamic lists where elements mount/unmount
- Cleaner memory management

---

### Code Example

**Prevent default form submission**

```jsx
function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault(); // stops page reload
    console.log("Form submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Login</button>
    </form>
  );
}
```

**What happens**

- Without `preventDefault` → page reloads
- With `preventDefault` → React controls the flow

---

### Interview Answer

Yes, we can prevent default browser behavior in React by calling `event.preventDefault()` inside the event handler. Also, React does not attach events to individual elements; it uses event delegation by attaching a single listener at the root and managing events internally.

---

### Follow-up Interview Questions (with short answers)

1. **Why is `preventDefault` common in forms?**
   To stop page reload and handle submission in JavaScript.

2. **Is event delegation visible to developers?**
   No, React abstracts it away.

3. **Does event delegation affect how we write code?**
   No, syntax stays the same.

4. **Can we stop event bubbling in React?**
   Yes, using `event.stopPropagation()`.

5. **Are synthetic events still used in modern React?**
   Yes, but implementation details have evolved internally.

## What are state and props in React?

---

### Concepts

**What props are**
Props are **inputs to a component**.
They are passed from a parent component to a child component.

Key points:

- Props are **read-only**
- A component **cannot change its own props**
- Props help make components reusable

Mental model:

```
Parent → passes data → Child
Child → uses data → renders UI
```

---

**What state is**
State is **internal data owned by a component**.
It represents data that can change over time.

Key points:

- State is **mutable**
- When state changes, the component re-renders
- State is managed inside the component

Mental model:

```
Component owns state
State changes
Component re-runs
UI updates
```

---

**Why both exist**

Props exist because:

- Data needs to flow **from parent to child**
- Components should be reusable with different inputs

State exists because:

- UI needs to change over time
- User interactions and async data updates are common

---

**One-way data flow (very important)**

React follows **one-way data flow**:

```
State (parent)
  ↓
Props (child)
```

- Child cannot modify parent’s state directly
- Child can only request changes via callbacks

This makes behavior predictable.

---

**How React handles them internally**

- Props are passed as function arguments
- State is stored by React and linked to the component
- Any state update triggers reconciliation

---

**Connection to real React usage**

- Form inputs → state
- API response → state
- Config values → props
- UI customization → props

---

### Code Example

**Using props**

```jsx
function User(props) {
  return <h2>Hello, {props.name}</h2>;
}

function App() {
  return <User name="Tanish" />;
}
```

**Using state**

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

**Props + State together**

```jsx
function Button({ label }) {
  const [clicked, setClicked] = React.useState(false);

  return (
    <button onClick={() => setClicked(true)}>
      {clicked ? "Clicked" : label}
    </button>
  );
}
```

---

### Interview Answer

Props are read-only values passed from a parent component to a child, while state is internal data managed by a component that can change over time and trigger re-renders.

---

### Follow-up Interview Questions (with short answers)

1. **Can a child component modify props?**
   No, props are read-only.

2. **What happens when state changes?**
   The component re-renders.

3. **Where should state usually live?**
   In the closest common parent that needs it.

4. **Can props change over time?**
   Yes, when the parent re-renders with new values.

5. **Is state shared between components?**
   No, each component has its own state unless lifted up.

## How do you pass data between components in React?

---

### Concepts

**Core idea**
Data flow in React is **one-directional**:

```
Parent → Child
```

React does not allow arbitrary data sharing.
Data must follow clear paths to stay predictable.

---

**Passing data from parent to child (most common)**

This is done using **props**.

Mental model:

```
Parent owns data
 ↓
Passes data as props
 ↓
Child uses it
```

Child cannot change the data directly.

---

**Passing data from child to parent**

This is done using **callback functions**.

Mental model:

```
Parent defines function
 ↓
Passes function to child
 ↓
Child calls function with data
 ↓
Parent updates state
```

So:

- Data still flows up via function calls
- State changes still happen in parent

---

**Passing data between sibling components**

Siblings do not talk directly.

Correct pattern:

```
Sibling A → Parent → Sibling B
```

This is called **lifting state up**.

---

**Why React enforces this**

- Predictable updates
- Easier debugging
- Clear ownership of data

---

**How this works internally**

- Props are plain function arguments
- State updates cause parent re-render
- New props flow down to children

---

**Connection to real React usage**

- Form inputs updating parent state
- Child components triggering API calls
- Shared UI state like filters, tabs, toggles

---

### Code Example

**Parent to Child**

```jsx
function Child({ message }) {
  return <p>{message}</p>;
}

function Parent() {
  return <Child message="Hello from parent" />;
}
```

---

**Child to Parent (callback)**

```jsx
function Child({ onClick }) {
  return <button onClick={() => onClick("Clicked!")}>Click me</button>;
}

function Parent() {
  function handleChildClick(data) {
    console.log(data);
  }

  return <Child onClick={handleChildClick} />;
}
```

---

**Sibling communication**

```jsx
function Parent() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <Input onChange={setValue} />
      <Display value={value} />
    </>
  );
}

function Input({ onChange }) {
  return <input onChange={(e) => onChange(e.target.value)} />;
}

function Display({ value }) {
  return <p>{value}</p>;
}
```

---

**Mini-project idea**

- Parent component with input
- One child edits value
- Another child displays value

---

### Interview Answer

Data in React is passed from parent to child using props. To send data from child to parent, we pass callback functions. For sibling communication, state is lifted to the closest common parent.

---

### Follow-up Interview Questions (with short answers)

1. **Can siblings pass data directly to each other?**
   No, they communicate via a common parent.

2. **What is lifting state up?**
   Moving state to the closest common parent.

3. **Why is data flow one-way in React?**
   For predictable and maintainable UI updates.

4. **How do children trigger parent updates?**
   By calling callback functions passed as props.

5. **When does prop drilling become a problem?**
   When data passes through many intermediate components.
