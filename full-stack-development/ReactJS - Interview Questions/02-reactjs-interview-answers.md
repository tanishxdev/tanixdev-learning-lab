## Q1. What is React and why is it used?

### Concept

React is a JavaScript library used to build user interfaces, mainly for single-page applications. It focuses on building UI using reusable components and efficiently updating the view when data changes.

Key ideas:

- UI is broken into **components**
- UI is described using **JSX**
- React updates only what changes using **Virtual DOM**

Why companies use React:

- Faster UI updates
- Reusable components
- Clean separation of logic and UI
- Strong ecosystem and community

---

### Example Code Snippets

**Example 1: Simple React Component**

```jsx
function Hello() {
  return <h1>Hello World</h1>;
}
```

**Example 2: Component with dynamic data**

```jsx
function Welcome(props) {
  return <h2>Welcome, {props.name}</h2>;
}
```

---

### Interview Specific (Crisp Answer)

React is a JavaScript library for building fast, component-based user interfaces. It uses a virtual DOM to efficiently update the UI and makes applications easier to scale and maintain.

## Q2. Differentiate between React and other frameworks (Angular, Vue)

### Concept

**React**

- JavaScript **library** (not full framework)
- Focuses only on **UI layer**
- Uses **JSX**
- Unidirectional data flow
- Needs external libraries for routing, state management

**Angular**

- Full-fledged **framework**
- Uses **TypeScript**
- Two-way data binding
- Built-in solutions for routing, forms, HTTP
- Steeper learning curve

**Vue**

- Progressive **framework**
- Uses HTML-based templates
- Two-way binding (optional)
- Easier to learn than Angular
- Smaller ecosystem than React

---

### Example Code Snippets

**React (JSX)**

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

**Angular (Template + TS)**

```html
<h1>{{ title }}</h1>
```

```ts
title = "Hello Angular";
```

**Vue (Template)**

```html
<h1>{{ message }}</h1>
```

---

### Interview Specific (Crisp Answer)

React is a UI library focused only on the view layer using JSX and component reusability, while Angular and Vue are full frameworks providing built-in solutions like routing and state management. React offers more flexibility, Angular is opinionated, and Vue is simpler to start with.

## Q3. What are the key features of React?

### Concept

1. **Component-Based Architecture**
   UI is broken into small, reusable components. Each component manages its own logic and UI.

2. **JSX (JavaScript XML)**
   Allows writing HTML-like code inside JavaScript, making UI code more readable and expressive.

3. **Virtual DOM**
   React creates a lightweight copy of the real DOM and updates only the changed parts, improving performance.

4. **Unidirectional Data Flow**
   Data flows from parent to child using props, making data flow predictable and easier to debug.

5. **Reusable Components**
   Same component can be reused across the application, reducing code duplication.

6. **Fast Rendering**
   Efficient diffing and reconciliation minimize direct DOM manipulation.

7. **Strong Ecosystem**
   Large community, third-party libraries, tools, and long-term support.

---

### Example Code Snippets

**Example 1: Reusable Component**

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}
```

**Example 2: One-way data flow**

```jsx
function Parent() {
  return <Child name="React" />;
}

function Child({ name }) {
  return <h3>{name}</h3>;
}
```

---

### Interview Specific (Crisp Answer)

Key features of React include component-based architecture, JSX, virtual DOM for performance, one-way data flow, reusable components, and a strong ecosystem that helps build scalable applications.

## Q4. What are the advantages and disadvantages of React?

### Concept

**Advantages**

1. **Reusable Components**
   Components can be reused, reducing code duplication and improving maintainability.

2. **High Performance**
   Virtual DOM updates only the changed parts instead of re-rendering the entire UI.

3. **Easy UI Updates**
   Declarative UI makes state changes automatically reflect in the view.

4. **Strong Community & Ecosystem**
   Large community support, libraries, tools, and frequent updates.

5. **Flexibility**
   Can be integrated with existing projects and works well with different backend technologies.

---

**Disadvantages**

1. **Only UI Library**
   React handles only the view layer; extra libraries are needed for routing and state management.

2. **JSX Learning Curve**
   JSX may feel confusing for beginners at first.

3. **Fast-Paced Ecosystem**
   Frequent updates and new tools can be overwhelming.

4. **Boilerplate in Large Apps**
   Without proper structure, code can become complex.

---

### Example Code Snippets

**Advantage: Declarative UI**

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

**Disadvantage: Extra library needed**

```js
// React does not include routing by default
// React Router is needed for routing
```

---

### Interview Specific (Crisp Answer)

React offers high performance through virtual DOM and reusable components, but it only handles the UI layer and requires additional libraries for routing and state management.

## Q5. Explain React’s component-based architecture

### Concept

React follows a **component-based architecture**, where the UI is divided into small, independent, and reusable pieces called **components**.

Key points:

- Each component represents **one part of the UI**
- Components manage their own **logic, state, and UI**
- Components can be **nested** (parent → child)
- Data flows using **props** from parent to child

This makes applications:

- Easier to **maintain**
- Easier to **reuse code**
- Easier to **scale**

---

### Example Code Snippets

**Example 1: Basic Component**

```jsx
function Header() {
  return <h1>My App</h1>;
}
```

**Example 2: Component Composition**

```jsx
function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

function Content() {
  return <p>Welcome to React</p>;
}
```

**Example 3: Parent to Child Data Flow**

```jsx
function Parent() {
  return <Child message="Hello Child" />;
}

function Child({ message }) {
  return <h3>{message}</h3>;
}
```

---

### Interview Specific (Crisp Answer)

React’s component-based architecture breaks the UI into reusable, independent components where each component manages its own logic and UI, making applications easier to maintain and scale.

## Q6. What is declarative programming in React?

### Concept

Declarative programming means **you describe what the UI should look like**, and React handles **how to update it**.

In React:

- You define UI based on **state**
- When state changes, React **automatically updates the UI**
- You do NOT manually manipulate the DOM

This is different from imperative programming where you tell the browser **step-by-step how to update UI**.

---

### Example Code Snippets

**Declarative (React way)**

```jsx
function Status({ isLoggedIn }) {
  return <h2>{isLoggedIn ? "Welcome" : "Please Login"}</h2>;
}
```

**Imperative (DOM way)**

```js
const heading = document.getElementById("title");
if (isLoggedIn) {
  heading.innerText = "Welcome";
} else {
  heading.innerText = "Please Login";
}
```

---

### Interview Specific (Crisp Answer)

Declarative programming in React means defining the UI based on state, and React automatically updates the view when the state changes instead of manually manipulating the DOM.

## Q7. How does React differ from jQuery?

### Concept

**React**

- Component-based architecture
- Declarative approach
- Uses Virtual DOM
- UI updates are state-driven
- Better for large, scalable applications

**jQuery**

- DOM manipulation library
- Imperative approach
- Directly manipulates Real DOM
- Manual UI updates
- Difficult to manage in large apps

Key difference idea:

- React: **UI = function(state)**
- jQuery: **Manually update DOM step-by-step**

---

### Example Code Snippets

**React (Declarative, state-driven)**

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

**jQuery (Imperative, manual DOM update)**

```js
let count = 0;
$("#btn").click(function () {
  count++;
  $("#btn").text(count);
});
```

---

### Interview Specific (Crisp Answer)

React uses a declarative, component-based approach with a virtual DOM, while jQuery directly manipulates the real DOM imperatively, making React more suitable for large and scalable applications.

## Q9. What is JSX? How does it differ from HTML?

### Concept

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in React to describe UI structure. It looks like HTML but works inside JavaScript.

Key points:

- JSX is **not HTML**
- JSX gets **compiled to JavaScript** (`React.createElement`)
- You can write **JS expressions** inside `{}`

**JSX vs HTML**

- JSX uses `className` instead of `class`
- JSX attributes are written in **camelCase**
- JSX allows embedding JavaScript
- JSX must return **one parent element**

---

### Example Code Snippets

**Example 1: JSX basic**

```jsx
const element = <h1>Hello JSX</h1>;
```

**Example 2: JSX with JavaScript expression**

```jsx
const name = "React";
const element = <h2>Hello {name}</h2>;
```

**Example 3: JSX vs HTML difference**

```jsx
// JSX
<div className="box">Content</div>
```

```html
<!-- HTML -->
<div class="box">Content</div>
```

---

### Interview Specific (Crisp Answer)

JSX is a JavaScript syntax extension used in React to write UI code. It looks like HTML but supports JavaScript expressions and gets compiled into `React.createElement`, unlike HTML which is directly parsed by the browser.

## Q10. How does JSX get converted to JavaScript?

### Concept

JSX does **not run in the browser directly**. It is converted into plain JavaScript using a compiler like **Babel**.

What happens:

- JSX is transformed into `React.createElement()`
- This returns a **React element object**
- React uses this object to update the Virtual DOM

JSX → JavaScript → React Element → Virtual DOM → Real DOM

---

### Example Code Snippets

**JSX Code**

```jsx
const element = <h1>Hello React</h1>;
```

**Converted JavaScript (Behind the scenes)**

```js
const element = React.createElement("h1", null, "Hello React");
```

**With props**

```jsx
const element = <Button label="Click" />;
```

```js
React.createElement(Button, { label: "Click" });
```

---

### Interview Specific (Crisp Answer)

JSX is converted into JavaScript by Babel, which transforms it into `React.createElement()` calls that create React element objects used by the Virtual DOM.
