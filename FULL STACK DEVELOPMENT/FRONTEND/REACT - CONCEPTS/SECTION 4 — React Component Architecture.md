# SECTION 4 — React Component Architecture

This section explains the core idea that React is built on: Components.

Almost everything in React applications is created using components.

Instead of writing one huge HTML file, React applications are built by splitting UI into small reusable pieces.

---

## 23. What Components Are

Tag: **[FRESHER]**

Subtopics

- UI building blocks
- reusable logic

---

### Problem

Before component-based frameworks, UI was usually written like this:

```html
<header></header>
<nav></nav>
<div class="product"></div>
<div class="product"></div>
<div class="product"></div>
<footer></footer>
```

Problems with this approach:

1. **Repetition** — same structure repeated many times.
2. **Hard to maintain** — changing one UI part requires editing many places.
3. **Logic mixed everywhere**.
4. **No reuse**.

Example problem:

If you build an **e-commerce product card**, you repeat this block many times.

```
Product image
Product name
Price
Add to cart button
```

If design changes → update everywhere.

This leads to **maintenance nightmare**.

---

### Solution — Components

React solves this by introducing **components**.

A **component** is:

> A reusable piece of UI + logic.

Think of it like **custom HTML elements**.

Example:

Instead of repeating UI:

```html
<div class="product"></div>
<div class="product"></div>
<div class="product"></div>
```

We write:

```jsx
<ProductCard />
<ProductCard />
<ProductCard />
```

Each one **renders the same structure**.

---

### Intuition

Think of components like **LEGO blocks**.

Large applications are built from **small reusable pieces**.

Example UI:

```
App
 ├── Navbar
 ├── Sidebar
 ├── ProductList
 │     ├── ProductCard
 │     ├── ProductCard
 │     └── ProductCard
 └── Footer
```

Every block is a **component**.

---

### Component Characteristics

A React component usually contains:

| Element | Purpose                      |
| ------- | ---------------------------- |
| JSX     | UI structure                 |
| Logic   | event handling, calculations |
| Props   | data from parent             |
| State   | internal data                |

---

### Small Example

Basic component:

```jsx
function Welcome() {
  return <h1>Hello User</h1>;
}
```

Usage:

```jsx
<Welcome />
```

Output:

```
Hello User
```

---

### Real Example — Button Component

Instead of repeating button UI:

```jsx
<button className="btn">Save</button>
<button className="btn">Delete</button>
<button className="btn">Update</button>
```

We create reusable component.

```jsx
// Button.jsx

function Button() {
  return <button className="btn">Click Me</button>;
}

export default Button;
```

Use it:

```jsx
<Button />
<Button />
<Button />
```

React renders **three buttons**.

---

### Dynamic Component Example

Components become powerful when **data changes UI**.

```jsx
function ProductCard() {
  return (
    <div className="product">
      <h2>iPhone</h2>
      <p>Price: $1000</p>
    </div>
  );
}
```

Use multiple times:

```jsx
<ProductCard />
<ProductCard />
<ProductCard />
```

---

### Why Components Are Powerful

#### 1. Reusability

Write once → use many times.

Example:

```
Navbar component used on every page
```

---

#### 2. Maintainability

Change UI **in one place only**.

Example:

If button design changes:

```
Edit Button component
All buttons update automatically
```

---

#### 3. Separation of concerns

Each component handles **one responsibility**.

Example:

| Component   | Responsibility  |
| ----------- | --------------- |
| Navbar      | navigation      |
| ProductCard | product display |
| Cart        | cart logic      |

---

#### 4. Scalability

Large apps become manageable.

Example:

```
Netflix UI
Amazon UI
Instagram UI
```

All built with **hundreds of components**.

---

### Component Tree (Important Mental Model)

React application becomes a **tree of components**.

Example:

```
App
 ├── Navbar
 ├── Sidebar
 ├── ProductPage
 │     ├── ProductImage
 │     ├── ProductDetails
 │     └── AddToCartButton
 └── Footer
```

This structure is called:

**Component hierarchy**

---

### React Application Entry Point

Typical React Vite app:

```
src
 ├── App.jsx
 ├── main.jsx
 └── components
```

`App` is usually the **root component**.

Example:

```jsx
function App() {
  return (
    <div>
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
}
```

---

### Rules for React Components

#### Rule 1 — Component names must start with **capital letter**

Correct:

```jsx
function Navbar() {}
```

Wrong:

```jsx
function navbar() {}
```

React treats lowercase as **HTML tags**.

---

#### Rule 2 — Components return JSX

Example:

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

---

#### Rule 3 — One root element

Wrong:

```jsx
return (
  <h1>Hello</h1>
  <p>World</p>
)
```

Correct:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

or

```jsx
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

---

### Real Application Example

Let's build a simple page.

```
Navbar
Product list
Footer
```

---

### Code Example

```jsx
// Navbar component
function Navbar() {
  return (
    <nav>
      <h1>My Store</h1>
    </nav>
  );
}

// Product component
function Product() {
  return (
    <div>
      <h2>iPhone</h2>
      <p>Price: $1000</p>
    </div>
  );
}

// Footer component
function Footer() {
  return (
    <footer>
      <p>Copyright 2026</p>
    </footer>
  );
}

// Root App component
function App() {
  return (
    <div>
      <Navbar />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
```

---

### Output UI

```
My Store

iPhone
Price: $1000

Copyright 2026
```

---

### Component vs HTML Element

| Feature | HTML Element | React Component |
| ------- | ------------ | --------------- |
| Reuse   | No           | Yes             |
| Logic   | No           | Yes             |
| State   | No           | Yes             |
| Custom  | Limited      | Unlimited       |

---

### When to Create a Component

Good rule:

If a UI block **repeats or has logic → make component**.

Examples:

```
Buttons
Cards
Navbar
Modal
Form input
Product card
Comment block
```

---

### Bad Component Design (Common Beginner Mistake)

Making **too big components**.

Bad:

```
App
 └── Everything inside
```

Good:

```
App
 ├── Navbar
 ├── Sidebar
 ├── ProductList
 │     ├── ProductCard
 │     └── ProductCard
 └── Footer
```

---

### Real Industry Example

E-commerce page might have:

```
App
 ├── Navbar
 ├── CategorySidebar
 ├── ProductGrid
 │     ├── ProductCard
 │     ├── ProductCard
 │     └── ProductCard
 ├── Pagination
 └── Footer
```

Each piece becomes **a reusable component**.

---

### Tradeoffs

Advantages:

- reusable
- maintainable
- modular architecture
- easier testing

Disadvantages:

- too many components can increase complexity
- component communication sometimes difficult

---

### Use Cases

Components are used for everything:

| Example    | Component   |
| ---------- | ----------- |
| Navigation | Navbar      |
| Cards      | ProductCard |
| Forms      | LoginForm   |
| Lists      | TodoItem    |
| Layouts    | Sidebar     |

---

### Synthesis Questions

1. What problem do components solve?
2. Why are components reusable?
3. Why must React components start with uppercase?
4. What is a component tree?
5. When should we create a new component?

---

## 24. Class Based Components

Tag: **[FRESHER]**

Subtopics

- class syntax
- render method
- state inside class

---

### Problem

When React was first created, developers needed a way to build **components that could store data and handle logic**.

Earlier we saw a simple component like:

```jsx
function Welcome() {
  return <h1>Hello</h1>;
}
```

But this type of component **cannot store internal data** easily.

Example problem:

Suppose we want a **counter button**:

```
Count: 0
Click button
Count becomes 1
```

This requires:

- remembering data
- updating UI when data changes

This concept is called **state**.

Originally React solved this using **Class Based Components**.

---

### Concept

A **class component** is a component written using **JavaScript class syntax**.

It extends React's base component class.

Structure:

```js
class ComponentName extends React.Component
```

Important parts:

| Part       | Purpose              |
| ---------- | -------------------- |
| class      | defines component    |
| render()   | returns UI           |
| state      | stores internal data |
| setState() | updates state        |

---

### Basic Syntax

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Hello User</h1>;
  }
}

export default Welcome;
```

Explanation:

- `class Welcome` → defines component
- `extends React.Component` → inherit React features
- `render()` → must return JSX

---

### Why `render()` Exists

React needs a method that **returns UI**.

That method is `render()`.

Whatever JSX returned inside render is **displayed on screen**.

Example:

```jsx
class Hello extends React.Component {
  render() {
    return <h1>Hello React</h1>;
  }
}
```

Output:

```
Hello React
```

---

### Using a Class Component

Inside another component:

```jsx
<Hello />
```

React will call:

```
Hello.render()
```

And display the JSX.

---

### Example — Simple Class Component

```jsx
import React from "react";

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
        <p>This is a class component</p>
      </div>
    );
  }
}

export default Greeting;
```

Output UI:

```
Welcome to React
This is a class component
```

---

### State Inside Class Components

Class components can store **state**.

State means:

> Data that can change and update the UI.

Example:

```
Counter value
Login status
Theme mode
Cart items
```

---

### How State Is Declared

Inside constructor:

```jsx
constructor() {
  super();
  this.state = {
    count: 0
  };
}
```

Explanation:

| Line        | Meaning                       |
| ----------- | ----------------------------- |
| constructor | class initialization          |
| super()     | calls parent constructor      |
| this.state  | object storing component data |

---

### Counter Example (Important)

```jsx
import React from "react";

class Counter extends React.Component {
  constructor() {
    super();

    // state object storing data for component
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        {/* displaying state value */}
        <h2>Count: {this.state.count}</h2>

        {/* button to update state */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
      </div>
    );
  }
}

export default Counter;
```

---

### What Happens When Button Clicks

Step-by-step flow:

```
Initial state
count = 0
```

UI:

```
Count: 0
```

Click button:

```
setState({count:1})
```

React:

1. updates state
2. calls render()
3. updates UI

New UI:

```
Count: 1
```

---

### Important Rule

Never update state directly.

Wrong:

```js
this.state.count = 10;
```

Correct:

```js
this.setState({ count: 10 });
```

Why?

Because React needs to know **when state changes**.

`setState()` triggers **re-render**.

---

### Multiple State Values

State can store multiple properties.

```jsx
this.state = {
  name: "Tanish",
  age: 21,
  loggedIn: false,
};
```

Access inside JSX:

```jsx
<h1>{this.state.name}</h1>
```

---

### Updating State Example

```jsx
this.setState({
  loggedIn: true,
});
```

React updates UI automatically.

---

### Example — Login Button

```jsx
import React from "react";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.loggedIn ? "User Logged In" : "Please Login"}</h2>

        <button onClick={() => this.setState({ loggedIn: true })}>Login</button>
      </div>
    );
  }
}

export default Login;
```

Output initially:

```
Please Login
```

After click:

```
User Logged In
```

---

### Class Component Lifecycle (High Level)

Class components have **lifecycle methods**.

Examples:

| Method               | Purpose                    |
| -------------------- | -------------------------- |
| componentDidMount    | runs after component loads |
| componentDidUpdate   | runs after updates         |
| componentWillUnmount | cleanup                    |

These will be studied in **Lifecycle topic later**.

---

### Real World Example Structure

A page might look like:

```
App
 ├── Navbar
 ├── ProductList
 │     ├── ProductCard
 │     └── ProductCard
 └── Footer
```

Each could be a **class component**.

---

### Tradeoffs of Class Components

Advantages:

- structured architecture
- lifecycle methods
- state management

Disadvantages:

- more boilerplate code
- harder to read
- `this` keyword confusion
- complex logic

Example:

```js
this.state;
this.setState;
this.props;
this.handleClick.bind(this);
```

---

### Why Modern React Uses Functional Components

React introduced **Hooks**.

Hooks allow:

```
state
lifecycle logic
effects
```

inside **functions**.

So now most apps use:

```
Functional Components
```

instead of class components.

But class components are still important because:

- many old projects use them
- interviews ask them
- lifecycle concepts originate from them

---

### Comparison

| Feature    | Class Component   | Functional Component |
| ---------- | ----------------- | -------------------- |
| Syntax     | class             | function             |
| State      | this.state        | useState             |
| Lifecycle  | lifecycle methods | useEffect            |
| Complexity | higher            | simpler              |

---

### When You Might See Class Components

- older React projects
- legacy codebases
- some enterprise apps

New projects usually use **functional components**.

---

### Synthesis Questions

1. What is a class component?
2. Why do class components use `render()`?
3. What is `this.state`?
4. Why should we use `setState()` instead of modifying state directly?
5. Why are functional components now preferred?

---

## 24.1 Mount Phase Deep Dive (Class Component Lifecycle)

Subtopics

- mounting lifecycle
- constructor
- render
- componentDidMount
- DOM insertion
- debugging lifecycle using Chrome DevTools
- lifecycle order
- real use cases

---

### Problem

When a component first appears on the screen, many things must happen:

Example situations:

```text
Fetch data from API
Start timers
Initialize libraries
Attach event listeners
Load user data
Focus input field
```

But **when should these actions run?**

If they run **too early**, DOM does not exist.

If they run **too late**, UI may behave incorrectly.

React solves this using **component lifecycle phases**.

---

### Lifecycle Concept

A class component goes through **3 main phases**.

```text
Mount → Update → Unmount
```

For now we focus on **Mount**.

Mount means:

> When a component is created and inserted into the DOM for the first time.

Example:

```text
User opens page
React creates component
Component appears on screen
```

That process is called **Mounting**.

---

### Mount Lifecycle Order

When a component mounts, React runs functions in this exact order:

```text
1 constructor()
2 render()
3 componentDidMount()
```

Visual flow:

```text
Component creation
        ↓
constructor()
        ↓
render()
        ↓
DOM created
        ↓
componentDidMount()
```

Each step has a specific purpose.

---

### Step 1 — constructor()

The constructor runs **when component instance is created**.

Purpose:

```text
Initialize state
Bind methods
Prepare component data
```

Example:

```jsx
import React from "react";

class Demo extends React.Component {
  constructor() {
    super();

    console.log("Constructor called");

    // initialize component state
    this.state = {
      count: 0,
    };
  }

  render() {
    return <h1>Hello</h1>;
  }
}

export default Demo;
```

Console output:

```text
Constructor called
```

Important rules:

| Rule                  | Explanation                  |
| --------------------- | ---------------------------- |
| Must call `super()`   | required for React.Component |
| No side effects       | do not fetch APIs here       |
| Only initialize state | keep constructor simple      |

---

### Step 2 — render()

`render()` is responsible for **generating UI**.

Example:

```jsx
render() {
  console.log("Render called");

  return (
    <div>
      <h1>React Lifecycle</h1>
    </div>
  );
}
```

Output in console:

```text
Constructor called
Render called
```

At this moment:

```text
React creates Virtual DOM
React compares with previous DOM
React prepares actual DOM
```

But **DOM is not yet fully mounted**.

---

### Step 3 — componentDidMount()

This lifecycle method runs **after the component is inserted into the DOM**.

Example:

```jsx
componentDidMount() {
  console.log("Component mounted");
}
```

Full example:

```jsx
import React from "react";

class LifecycleDemo extends React.Component {
  constructor() {
    super();

    console.log("Constructor executed");

    this.state = {
      name: "React",
    };
  }

  render() {
    console.log("Render executed");

    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    );
  }

  componentDidMount() {
    console.log("ComponentDidMount executed");
  }
}

export default LifecycleDemo;
```

Console output:

```text
Constructor executed
Render executed
ComponentDidMount executed
```

This confirms lifecycle order.

---

### What Happens Internally

Mount process simplified:

```text
React creates component instance
        ↓
constructor() runs
        ↓
React builds virtual DOM
        ↓
render() returns JSX
        ↓
React converts JSX → DOM
        ↓
DOM inserted in browser
        ↓
componentDidMount() runs
```

Now DOM exists and we can safely interact with it.

---

### Using Chrome DevTools to Observe Lifecycle

Open Chrome DevTools.

Steps:

```text
1 Open application
2 Press F12
3 Go to Console tab
4 Refresh page
```

Console logs show lifecycle order.

Example:

```text
Constructor executed
Render executed
ComponentDidMount executed
```

This confirms **mount sequence**.

---

### Real Example — Fetch Data on Mount

One of the most common use cases.

Example:

```jsx
import React from "react";

class Users extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // fetch data after component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // update state with API data
        this.setState({ users: data });
      });
  }

  render() {
    return (
      <div>
        <h2>User List</h2>

        {this.state.users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    );
  }
}

export default Users;
```

Flow:

```text
Page loads
Component mounts
componentDidMount runs
API request sent
Data received
setState updates component
UI re-renders
```

---

### Example — DOM Manipulation

Sometimes we need to interact with DOM.

Example:

```jsx
componentDidMount() {

  // focus input automatically
  document.getElementById("search").focus();

}
```

Use case:

```text
Search box auto focus
```

---

### Example — Start Timer

```jsx
componentDidMount() {

  this.timer = setInterval(() => {
    console.log("Running every second");
  }, 1000);

}
```

Why here?

Because component is now **mounted and active**.

---

### What Should NOT Be Done in constructor()

Wrong example:

```js
constructor() {

 fetch("api/data")   // BAD
}
```

Why bad?

Because:

```text
Component not mounted yet
DOM not ready
Async side effects discouraged
```

Correct location:

```text
componentDidMount()
```

---

### Mount Phase Summary

| Method            | Purpose          |
| ----------------- | ---------------- |
| constructor       | initialize state |
| render            | generate UI      |
| componentDidMount | run side effects |

Execution order:

```text
constructor → render → componentDidMount
```

---

### Important Behavior

`componentDidMount()` runs **only once**.

It runs when:

```text
Component first appears
```

It does NOT run when:

```text
State updates
Props updates
```

---

### Real Production Use Cases

Common operations during mount:

| Task                 | Reason             |
| -------------------- | ------------------ |
| API calls            | load data          |
| Event listeners      | keyboard or scroll |
| Start timers         | clocks, animations |
| Initialize libraries | charts, maps       |
| Focus inputs         | UX improvement     |

---

### Mount Phase vs Modern React

Modern React uses **functional components + hooks**.

Equivalent of `componentDidMount`:

```javascript
useEffect(() => {}, []);
```

Empty dependency array means:

```text
Run once after mount
```

Example:

```jsx
useEffect(() => {
  fetchUsers();
}, []);
```

This replaces `componentDidMount`.

---

### Lifecycle Visualization

Mount flow:

```text
Create component
      ↓
constructor
      ↓
render
      ↓
DOM inserted
      ↓
componentDidMount
```

---

### Common Beginner Mistake

Running API in `render()`.

Wrong:

```jsx
render() {

 fetch("/api")   // BAD

 return <div></div>;
}
```

Why bad?

Because render runs **many times**.

Result:

```text
Multiple API calls
Performance issues
```

Correct place:

```text
componentDidMount
```

---

### Debugging Lifecycle

Add logs:

```jsx
constructor() {
 console.log("constructor");
}

render() {
 console.log("render");
}

componentDidMount() {
 console.log("mounted");
}
```

Refresh page → observe execution order.

---

### Synthesis Questions

1. What does mount mean in React?
2. What is the order of mount lifecycle methods?
3. Why should API calls run in `componentDidMount()`?
4. Why should side effects not run in constructor?
5. What hook replaces `componentDidMount()` in functional components?

---

## 25. Functional Components

Tag: **[BOTH]**

Subtopics

- function syntax
- returning JSX
- modern React architecture

---

### Problem

Earlier we saw **class components**.

They work, but they have several issues.

Example of a simple class component:

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Hello React</h1>;
  }
}
```

Problems with class components:

| Problem             | Explanation                              |
| ------------------- | ---------------------------------------- |
| Complex syntax      | `class`, `this`, `constructor`, `render` |
| Boilerplate         | too much code for simple logic           |
| `this` confusion    | beginners struggle with binding          |
| Hard to reuse logic | lifecycle logic scattered                |

Developers wanted something **simpler**.

That led to **functional components**.

---

### Concept

A **functional component** is simply a **JavaScript function that returns JSX**.

React treats that function as a component.

Basic idea:

```
function → returns JSX → React renders UI
```

Structure:

```jsx
function ComponentName() {
  return JSX;
}
```

Key difference:

| Class Component   | Functional Component |
| ----------------- | -------------------- |
| class syntax      | function syntax      |
| render() method   | return JSX directly  |
| this.state        | useState hook        |
| lifecycle methods | useEffect            |

---

### Basic Functional Component

Example:

```jsx
function Welcome() {
  return <h1>Hello React</h1>;
}

export default Welcome;
```

Usage:

```jsx
<Welcome />
```

Output:

```
Hello React
```

Explanation:

| Part                 | Meaning              |
| -------------------- | -------------------- |
| `function Welcome()` | component definition |
| `return`             | JSX returned         |
| `<Welcome />`        | component usage      |

---

### Important Rule — Capital Letter

React identifies components using **capitalized names**.

Correct:

```jsx
function Navbar() {}
```

Wrong:

```jsx
function navbar() {}
```

Why?

Lowercase is treated as **HTML tag**.

---

### Example — Simple Page

```jsx
function App() {
  return (
    <div>
      <h1>My Website</h1>
      <p>Welcome user</p>
    </div>
  );
}

export default App;
```

Output UI:

```
My Website
Welcome user
```

---

### Returning JSX

A functional component must **return JSX**.

Example:

```jsx
function Title() {
  return <h1>React Tutorial</h1>;
}
```

React renders the returned JSX.

---

### Multiline JSX

If JSX is multiple lines, wrap with parentheses.

```jsx
function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: Alex</p>
      <p>Age: 22</p>
    </div>
  );
}
```

This improves readability.

---

### Example — Button Component

```jsx
function Button() {
  return <button>Click Me</button>;
}
```

Usage:

```jsx
<Button />
<Button />
<Button />
```

React renders **three buttons**.

This demonstrates **component reuse**.

---

### Example — Product Card

```jsx
function ProductCard() {
  return (
    <div>
      <h2>iPhone</h2>
      <p>Price: $1000</p>
      <button>Add to Cart</button>
    </div>
  );
}
```

Usage:

```jsx
<ProductCard />
<ProductCard />
<ProductCard />
```

React renders multiple cards.

---

### Functional Components With Logic

A component can contain **JavaScript logic**.

Example:

```jsx
function Greeting() {
  const name = "Tanish";

  return <h1>Hello {name}</h1>;
}
```

Output:

```
Hello Tanish
```

---

### Example — Conditional Logic

```jsx
function Status() {
  const isLoggedIn = true;

  return <div>{isLoggedIn ? "Welcome Back" : "Please Login"}</div>;
}
```

Output:

```
Welcome Back
```

---

### Functional Components in Vite React Project

Typical Vite structure:

```
src
 ├─ main.jsx
 ├─ App.jsx
 └─ components
      └─ Navbar.jsx
```

Example component file:

```
src/components/Navbar.jsx
```

Code:

```jsx
function Navbar() {
  return (
    <nav>
      <h1>My Store</h1>
    </nav>
  );
}

export default Navbar;
```

Use inside App:

```jsx
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
```

---

### Functional Components With Hooks

Functional components become powerful when combined with **hooks**.

Example using `useState`.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

Explanation:

| Hook       | Purpose                  |
| ---------- | ------------------------ |
| `useState` | stores component state   |
| `count`    | current state            |
| `setCount` | function to update state |

This replaces **class state**.

---

### Functional Component Lifecycle

Functional components do not have lifecycle methods like:

```
componentDidMount
componentDidUpdate
componentWillUnmount
```

Instead React provides **useEffect**.

Example:

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

Empty dependency array means:

```
run only after first mount
```

Equivalent to:

```
componentDidMount
```

---

### Real World Functional Component Example

```jsx
import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");

  return (
    <div>
      <h2>Todo App</h2>

      <input value={task} onChange={(e) => setTask(e.target.value)} />

      <p>Current Task: {task}</p>
    </div>
  );
}

export default Todo;
```

This component:

```
stores input state
updates UI dynamically
```

---

### Advantages of Functional Components

| Advantage             | Explanation              |
| --------------------- | ------------------------ |
| Simpler syntax        | easier to read           |
| Less boilerplate      | no constructor or render |
| Hooks support         | powerful features        |
| Better logic reuse    | custom hooks             |
| Modern React standard | widely used today        |

---

### Disadvantages

Functional components rely heavily on **hooks**.

Problems beginners face:

```
hook dependency confusion
re-render logic misunderstanding
```

But overall they are **much simpler than classes**.

---

### Modern React Rule

Today almost all React apps use:

```
Functional Components + Hooks
```

Class components mostly exist in:

```
legacy applications
older tutorials
```

---

### Mental Model

Think of functional components like:

```
Input → Function → JSX UI
```

React calls the function and renders the result.

---

### Common Mistakes

**1. Not returning JSX**

Wrong:

```jsx
function Test() {
  <h1>Hello</h1>;
}
```

Correct:

```jsx
function Test() {
  return <h1>Hello</h1>;
}
```

---

**2. Multiple root elements**

Wrong:

```jsx
return (
  <h1>Hello</h1>
  <p>World</p>
)
```

Correct:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```

---

### Real Industry Usage

Almost every modern React codebase follows:

```
Functional Components
Hooks
Component composition
```

Examples:

```
Next.js apps
Vite React apps
Production frontend apps
```

---

### Synthesis Questions

1. What is a functional component?
2. Why are functional components preferred over class components?
3. Why must component names start with capital letters?
4. How does `useState` replace class component state?
5. Which hook replaces `componentDidMount`?

---

## 26. Nested Components

Tag: **[FRESHER]**

Subtopics

- parent–child structure
- component nesting
- composition basics

---

### Problem

When building real interfaces, a single component quickly becomes too large.

Example — imagine writing an entire page inside one component:

```jsx
function App() {
  return (
    <div>
      <nav>Navigation</nav>
      <div>Sidebar</div>
      <div>Products</div>
      <footer>Footer</footer>
    </div>
  );
}
```

Problems:

| Issue            | Explanation                     |
| ---------------- | ------------------------------- |
| Hard to read     | UI mixed in one file            |
| Hard to maintain | small changes affect big file   |
| Poor reuse       | pieces cannot be reused         |
| Scaling issues   | large applications become messy |

Real applications break UI into **smaller pieces**.

This leads to **nested components**.

---

### Concept

A **nested component** means:

> One component is used inside another component.

Structure:

```
Parent Component
      ↓
Child Component
```

Example mental model:

```
App
 ├─ Navbar
 ├─ Sidebar
 ├─ ProductList
 │     ├─ ProductCard
 │     ├─ ProductCard
 │     └─ ProductCard
 └─ Footer
```

Here:

| Parent      | Child       |
| ----------- | ----------- |
| App         | Navbar      |
| App         | Sidebar     |
| ProductList | ProductCard |

This structure is called **component hierarchy**.

---

### Basic Example

Create two components.

Child component:

```jsx
function Navbar() {
  return (
    <nav>
      <h1>My Website</h1>
    </nav>
  );
}

export default Navbar;
```

Parent component:

```jsx
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <p>Home Page Content</p>
    </div>
  );
}

export default App;
```

UI output:

```
My Website
Home Page Content
```

Here:

```
App
 └─ Navbar
```

Navbar is **nested inside App**.

---

### Example — Multiple Nested Components

```jsx
function Navbar() {
  return <h2>Navigation</h2>;
}

function Sidebar() {
  return <p>Sidebar menu</p>;
}

function Footer() {
  return <p>Footer section</p>;
}

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}
```

Structure:

```
App
 ├─ Navbar
 ├─ Sidebar
 └─ Footer
```

Each child renders inside the parent.

---

### Real World Example

Imagine a **product page**.

Component tree:

```
ProductPage
 ├─ ProductImage
 ├─ ProductInfo
 ├─ PriceSection
 ├─ Reviews
 │     ├─ ReviewItem
 │     ├─ ReviewItem
 │     └─ ReviewItem
 └─ AddToCartButton
```

This architecture makes UI **manageable**.

---

### Code Example — Product List

Child component:

```jsx
function ProductCard() {
  return (
    <div>
      <h3>iPhone</h3>
      <p>$1000</p>
    </div>
  );
}
```

Parent component:

```jsx
function ProductList() {
  return (
    <div>
      <h2>Products</h2>

      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
```

Structure:

```
ProductList
 ├─ ProductCard
 ├─ ProductCard
 └─ ProductCard
```

React renders **three cards**.

---

### Nested Depth Example

Components can nest **multiple levels deep**.

```jsx
function Header() {
  return <h1>Store</h1>;
}

function Product() {
  return <p>Product Item</p>;
}

function ProductList() {
  return (
    <div>
      <Product />
      <Product />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
}
```

Hierarchy:

```
App
 ├─ Header
 └─ ProductList
        ├─ Product
        └─ Product
```

---

### Why Nested Components Matter

React UI is **tree based**.

Browser DOM itself is also a **tree**.

Example HTML DOM:

```
html
 └─ body
      └─ div
           ├─ header
           ├─ main
           └─ footer
```

React mirrors this with **component trees**.

---

### Component Tree Visualization

Example application:

```
App
 ├─ Navbar
 ├─ Dashboard
 │     ├─ Stats
 │     ├─ Chart
 │     └─ ActivityFeed
 └─ Footer
```

Benefits:

| Benefit         | Explanation             |
| --------------- | ----------------------- |
| Modularity      | each component isolated |
| Maintainability | easier updates          |
| Reuse           | components reusable     |
| Scalability     | large apps manageable   |

---

### Real Vite React Folder Example

```
src
 ├─ components
 │     ├─ Navbar.jsx
 │     ├─ Footer.jsx
 │     ├─ ProductCard.jsx
 │
 ├─ pages
 │     └─ Home.jsx
 │
 └─ App.jsx
```

App component nests page components.

Example:

```jsx
import Home from "./pages/Home";

function App() {
  return <Home />;
}
```

Inside Home:

```jsx
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />

      <ProductCard />
      <ProductCard />
      <ProductCard />

      <Footer />
    </div>
  );
}
```

Hierarchy:

```
App
 └─ Home
       ├─ Navbar
       ├─ ProductCard
       ├─ ProductCard
       ├─ ProductCard
       └─ Footer
```

---

### Important Behavior

Parent renders children automatically.

If parent re-renders:

```
Parent re-render
     ↓
Children also re-render
```

This becomes important later for **performance optimization**.

---

### Common Beginner Mistake

Creating components **inside another component** unnecessarily.

Bad pattern:

```jsx
function App() {
  function Button() {
    return <button>Click</button>;
  }

  return <Button />;
}
```

Why bad?

Because every render **recreates the component function**.

Better structure:

```
Button.jsx
App.jsx
```

Separate files.

---

### Another Mistake

Very deep nesting.

Example:

```
App
 └─ Layout
      └─ Page
           └─ Section
                └─ Card
                     └─ Button
```

Too much nesting can make debugging difficult.

---

### Use Cases

Nested components are used everywhere.

Examples:

| Feature    | Nested Structure          |
| ---------- | ------------------------- |
| Navigation | App → Navbar → NavItem    |
| Products   | ProductList → ProductCard |
| Comments   | CommentList → Comment     |
| Dashboard  | Dashboard → Chart         |
| Forms      | Form → InputField         |

---

### Mental Model

Think of React UI like a **tree structure**.

```
Root
 ├─ Branch
 │    ├─ Leaf
 │    └─ Leaf
 └─ Branch
```

Components follow the same hierarchy.

---

### Synthesis Questions

1. What is a nested component?
2. What is a component tree?
3. Why do React apps break UI into nested components?
4. What problems happen if one component contains everything?
5. Why should components usually be in separate files?

---

## 27. Component Composition

Tag: **[BOTH]**

Subtopics

- building complex UI
- reusable blocks
- composition vs inheritance

---

### Problem

As applications grow, UI becomes complex.

Example: an e-commerce page.

```text
Navbar
Sidebar
Product list
Product card
Reviews
Add to cart
Footer
```

If everything is written in **one component**, the file becomes huge.

Example of bad structure:

```jsx
function App() {
  return (
    <div>
      <nav>Navbar</nav>

      <div>
        <div>Product Image</div>
        <div>Product Info</div>
        <div>Reviews</div>
        <button>Add To Cart</button>
      </div>

      <footer>Footer</footer>
    </div>
  );
}
```

Problems:

| Issue            | Explanation            |
| ---------------- | ---------------------- |
| Hard to maintain | UI tightly coupled     |
| Hard to reuse    | cannot reuse pieces    |
| Hard to test     | logic mixed everywhere |
| Scaling problems | large files            |

React solves this using **component composition**.

---

### Concept

Component composition means:

> Building complex UI by combining smaller components.

Think of components like **building blocks**.

Example:

```text
Page
 ├─ Navbar
 ├─ ProductSection
 │     ├─ ProductCard
 │     ├─ ProductCard
 │     └─ ProductCard
 └─ Footer
```

Each block is a **separate reusable component**.

This approach makes UI modular.

---

### Composition vs Inheritance

React strongly prefers **composition over inheritance**.

Inheritance approach (not recommended):

```text
BaseComponent
 └─ ExtendedComponent
```

Composition approach:

```text
Parent
 ├─ Child
 ├─ Child
 └─ Child
```

React philosophy:

```text
Reuse behavior by composing components together
```

Not by extending classes.

---

### Simple Composition Example

Small components:

```jsx
function Header() {
  return <h1>My Website</h1>;
}

function Footer() {
  return <p>Footer Section</p>;
}
```

Compose them:

```jsx
function App() {
  return (
    <div>
      <Header />
      <p>Main Content</p>
      <Footer />
    </div>
  );
}
```

Structure:

```text
App
 ├─ Header
 ├─ Content
 └─ Footer
```

This is **basic composition**.

---

### Real World Example — Product Page

Create small components.

ProductImage component:

```jsx
function ProductImage() {
  return <img src="phone.jpg" alt="phone" />;
}
```

ProductInfo component:

```jsx
function ProductInfo() {
  return (
    <div>
      <h2>iPhone</h2>
      <p>$1000</p>
    </div>
  );
}
```

AddToCart component:

```jsx
function AddToCart() {
  return <button>Add To Cart</button>;
}
```

Compose them:

```jsx
function ProductCard() {
  return (
    <div>
      <ProductImage />
      <ProductInfo />
      <AddToCart />
    </div>
  );
}
```

Hierarchy:

```text
ProductCard
 ├─ ProductImage
 ├─ ProductInfo
 └─ AddToCart
```

This builds a **complete UI block**.

---

### Another Example — Dashboard

Components:

```text
Dashboard
 ├─ Sidebar
 ├─ Topbar
 └─ Content
        ├─ Chart
        └─ ActivityFeed
```

Implementation:

```jsx
function Sidebar() {
  return <p>Sidebar</p>;
}

function Topbar() {
  return <p>Topbar</p>;
}

function Chart() {
  return <p>Chart component</p>;
}

function ActivityFeed() {
  return <p>Activity Feed</p>;
}

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Topbar />

      <div>
        <Chart />
        <ActivityFeed />
      </div>
    </div>
  );
}
```

This is **component composition**.

---

### Composition With Reusable Components

Example — Card component.

```jsx
function Card() {
  return (
    <div className="card">
      <h2>Title</h2>
      <p>Description</p>
    </div>
  );
}
```

Use it multiple times:

```jsx
function ProductList() {
  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
```

Hierarchy:

```text
ProductList
 ├─ Card
 ├─ Card
 └─ Card
```

Reusable UI.

---

### Composition Improves Code Organization

Without composition:

```text
App.jsx
1000+ lines
```

With composition:

```text
components/
 ├─ Navbar.jsx
 ├─ Sidebar.jsx
 ├─ ProductCard.jsx
 ├─ Footer.jsx
```

Each component focuses on **one responsibility**.

---

### Composition In Vite React Project

Typical structure:

```text
src
 ├─ components
 │     ├─ Navbar.jsx
 │     ├─ Footer.jsx
 │     ├─ ProductCard.jsx
 │
 ├─ pages
 │     └─ Home.jsx
 │
 └─ App.jsx
```

Example:

App.jsx

```jsx
import Home from "./pages/Home";

function App() {
  return <Home />;
}

export default App;
```

Home.jsx

```jsx
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
```

Composition hierarchy:

```text
App
 └─ Home
       ├─ Navbar
       ├─ ProductCard
       ├─ ProductCard
       ├─ ProductCard
       └─ Footer
```

---

### Benefits of Component Composition

| Benefit         | Explanation                    |
| --------------- | ------------------------------ |
| Reusability     | components reused across pages |
| Maintainability | smaller files                  |
| Scalability     | easy to extend UI              |
| Testing         | test components individually   |

---

### Real Production Example

Example UI architecture:

```text
App
 ├─ Layout
 │     ├─ Navbar
 │     ├─ Sidebar
 │     └─ MainContent
 │           ├─ ProductGrid
 │           │      ├─ ProductCard
 │           │      └─ ProductCard
 │           └─ Pagination
 └─ Footer
```

Large apps rely heavily on **composition**.

---

### Common Mistakes

**1. Overly large components**

Bad:

```text
App.jsx
contains entire UI
```

Better:

```text
App
 ├─ Navbar
 ├─ Page
 └─ Footer
```

---

**2. Too many tiny components**

Example:

```text
ButtonIcon
ButtonText
ButtonWrapper
```

Too many small components may create unnecessary complexity.

Balance is important.

---

### Real Industry Principle

A good component usually:

```text
Does one job
Is reusable
Is easy to test
```

This is called:

```text
Single Responsibility Principle
```

---

### Mental Model

Component composition is like **building with Lego blocks**.

Small blocks combine to build bigger structures.

```text
Button
Input
Card
List
```

Combine into:

```text
Form
Dashboard
Product page
```

---

### Synthesis Questions

1. What is component composition?
2. Why does React prefer composition over inheritance?
3. What problems does composition solve?
4. How does composition improve maintainability?
5. What is a component hierarchy?

---

## 28. Children Props Pattern

Tag: **[BOTH]**

Subtopics

- children prop
- wrapper components
- layout composition
- flexible component APIs

---

### Problem

Consider we want a **Card component**.

Example UI:

```text
+------------------+
|  Title           |
|  Description     |
|  Button          |
+------------------+
```

If we build the component like this:

```jsx
function Card() {
  return (
    <div className="card">
      <h2>Title</h2>
      <p>Description</p>
      <button>Click</button>
    </div>
  );
}
```

Problem:

The content is **hardcoded**.

We cannot reuse this component for different content.

Example usage:

```jsx
<Card />
<Card />
<Card />
```

Every card will show the **same content**.

But real applications require:

```text
Card 1 → Product
Card 2 → Blog post
Card 3 → Profile
```

So we need a way to pass **custom content inside a component**.

React solves this with **children props pattern**.

---

### Concept

Every React component automatically receives a prop called:

```text
props.children
```

It represents **whatever is placed between the component tags**.

Example usage:

```jsx
<Card>
  <h2>Product Title</h2>
  <p>$999</p>
</Card>
```

Inside the component:

```jsx
props.children;
```

represents:

```jsx
<h2>Product Title</h2>
<p>$999</p>
```

---

### Basic Example

Component definition:

```jsx
function Card(props) {
  return <div className="card">{props.children}</div>;
}
```

Usage:

```jsx
function App() {
  return (
    <Card>
      <h2>Welcome</h2>
      <p>This is a card</p>
    </Card>
  );
}
```

Output:

```text
+--------------------+
| Welcome            |
| This is a card     |
+--------------------+
```

---

### How React Handles Children

When React sees:

```jsx
<Card>
  <h1>Hello</h1>
</Card>
```

React internally converts it to:

```jsx
Card({
  children: <h1>Hello</h1>,
});
```

So inside the component:

```jsx
props.children;
```

contains the nested JSX.

---

### Example — Multiple Children

```jsx
<Card>
  <h2>iPhone</h2>
  <p>$1000</p>
  <button>Add to Cart</button>
</Card>
```

Component:

```jsx
function Card(props) {
  return <div className="card">{props.children}</div>;
}
```

Output:

```text
+----------------------+
| iPhone               |
| $1000                |
| Add to Cart          |
+----------------------+
```

---

### Cleaner Syntax (Destructuring)

Instead of writing:

```jsx
props.children;
```

We usually destructure.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

This is the **most common pattern**.

---

### Example — Layout Wrapper

Children pattern is heavily used in **layout components**.

Example:

```jsx
function Layout({ children }) {
  return (
    <div>
      <header>Header</header>

      <main>{children}</main>

      <footer>Footer</footer>
    </div>
  );
}
```

Usage:

```jsx
function App() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Welcome to website</p>
    </Layout>
  );
}
```

Output:

```text
Header

Home Page
Welcome to website

Footer
```

This allows **reusable layouts**.

---

### Example — Modal Component

```jsx
function Modal({ children }) {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  );
}
```

Usage:

```jsx
<Modal>
  <h2>Delete Item</h2>
  <p>Are you sure?</p>
  <button>Confirm</button>
</Modal>
```

Output:

```text
[Modal Box]
Delete Item
Are you sure?
Confirm
```

---

### Example — Button Wrapper

```jsx
function ButtonWrapper({ children }) {
  return <button className="btn">{children}</button>;
}
```

Usage:

```jsx
<ButtonWrapper>Save</ButtonWrapper>
<ButtonWrapper>Delete</ButtonWrapper>
```

Output:

```text
Save Button
Delete Button
```

Reusable UI.

---

### Example — Card System

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

Usage:

```jsx
<Card>
  <h3>Product</h3>
  <p>$500</p>
</Card>

<Card>
  <h3>Blog</h3>
  <p>Read article</p>
</Card>
```

Same card structure, different content.

---

### Real World Libraries Use This Pattern

UI libraries rely heavily on children.

Example:

Material UI:

```jsx
<Card>
  <CardContent>
    <Typography>Title</Typography>
  </CardContent>
</Card>
```

React Router:

```jsx
<Route>
  <PageComponent />
</Route>
```

Even HTML uses this pattern:

```html
<div>content here</div>
```

React follows the same idea.

---

### Children Can Be Anything

`children` can contain:

| Type       | Example          |
| ---------- | ---------------- |
| JSX        | `<h1>Hello</h1>` |
| Components | `<Navbar />`     |
| Text       | `"Hello world"`  |
| Arrays     | list of items    |

Example:

```jsx
<Card>
  Text
  <h1>Hello</h1>
  <Button />
</Card>
```

React renders all of them.

---

### Nested Children

Children can contain multiple components.

```jsx
<Card>
  <Header />
  <Content />
  <Footer />
</Card>
```

Component tree:

```text
Card
 ├ Header
 ├ Content
 └ Footer
```

This is **component composition using children**.

---

### When to Use Children Pattern

Use when a component acts like a **wrapper**.

Examples:

```text
Layout
Modal
Card
Tabs
Accordion
Button wrappers
```

These components wrap dynamic content.

---

### Children vs Props

Example without children:

```jsx
<Card title="Hello" description="Welcome" />
```

Example with children:

```jsx
<Card>
  <h2>Hello</h2>
  <p>Welcome</p>
</Card>
```

Children provide **more flexibility**.

---

### Real Application Example

Page layout system:

```text
App
 └ Layout
      ├ Header
      ├ PageContent (children)
      └ Footer
```

Implementation:

```jsx
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
```

Usage:

```jsx
<Layout>
  <HomePage />
</Layout>
```

This is **production React architecture**.

---

### Common Beginner Mistakes

**1 Using children incorrectly**

Wrong:

```jsx
{
  props.child;
}
```

Correct:

```jsx
{
  props.children;
}
```

---

**2 Forgetting to render children**

```jsx
function Card() {
  return <div className="card"></div>;
}
```

This ignores nested content.

Correct:

```jsx
<div className="card">{children}</div>
```

---

### Tradeoffs

Advantages:

| Advantage           | Reason               |
| ------------------- | -------------------- |
| Flexible components | content customizable |
| Reusable wrappers   | layouts/modals/cards |
| Clean composition   | fewer props needed   |

Disadvantages:

| Issue                          | Explanation            |
| ------------------------------ | ---------------------- |
| Harder to understand initially | implicit structure     |
| Deep nesting                   | may reduce readability |

---

### Mental Model

Think of `children` like **slot content**.

Example:

```text
Card
 └ Slot
```

Whatever you place inside `<Card> ... </Card>` fills that slot.

---

### Synthesis Questions

1. What is `props.children`?
2. Why is children useful for wrapper components?
3. How does React pass nested JSX to a component?
4. What types of values can children contain?
5. Why do UI libraries heavily use the children pattern?

---

You have now completed **React Component Architecture section** concepts:

```text
23. What Components Are
24. Class Components
25. Functional Components
26. Nested Components
27. Component Composition
28. Children Props Pattern
```

These concepts form the **foundation of React UI design**.
