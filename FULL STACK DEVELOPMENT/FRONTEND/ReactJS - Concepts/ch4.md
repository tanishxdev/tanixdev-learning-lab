# SECTION 4 — React Component Architecture

Before React, UI development used **large monolithic pages**.

Example problem:

A webpage might contain:

* Navbar
* Sidebar
* Content
* Cards
* Footer
* Buttons
* Forms
* Modals

If everything is written in **one file**, the code becomes:

* hard to maintain
* impossible to reuse
* difficult to test
* very fragile

React solved this using **components**.

A **component = small reusable UI block**.

Instead of building a page like this:

```
App
 ├── Navbar
 ├── Sidebar
 ├── Content
 │     ├── PostCard
 │     ├── PostCard
 │     └── PostCard
 └── Footer
```

Each piece becomes an independent **component**.

This section explains **how React architecture is built using components**.

---

# 23. What Components Are

Tag: **[FRESHER]**

---

# Problem

Traditional UI development had problems:

Example large HTML page

```html
<header>Navbar</header>

<section>
  <article>Post 1</article>
  <article>Post 2</article>
  <article>Post 3</article>
</section>

<footer>Footer</footer>
```

Problems:

1. Code duplication
2. Hard to maintain
3. No reuse
4. Logic scattered

Imagine **20 pages using same navbar**.

You would need to copy paste everywhere.

This is not scalable.

---

# Concept

A **React component** is a function or class that:

* returns UI
* can contain logic
* can be reused
* can receive data

Think of it as a **custom HTML tag**.

Example:

```
<Navbar />
<PostCard />
<Footer />
```

Each of these is a **component**.

---

# Mental Model

Think of React like **LEGO blocks**.

Each block builds a bigger structure.

Example:

```
Page
 ├── Navbar
 ├── Sidebar
 ├── Feed
 │     ├── Post
 │     ├── Post
 │     └── Post
 └── Footer
```

Every block is a component.

---

# Smallest Example

```jsx
function Hello() {
  return <h1>Hello World</h1>
}

export default Hello
```

Usage

```jsx
<Hello />
```

Output

```
Hello World
```

---

# Example UI Breakdown

A simple blog page.

Instead of writing one file:

```
App
 ├── Navbar
 ├── BlogList
 │      ├── BlogCard
 │      ├── BlogCard
 │      └── BlogCard
 └── Footer
```

Each block is independent.

---

# Key Properties of Components

### 1 Reusable

Used multiple times.

Example

```jsx
<PostCard />
<PostCard />
<PostCard />
```

---

### 2 Encapsulated

Each component manages its own logic.

Example

```
PostCard
  ├── title
  ├── description
  └── like button
```

---

### 3 Composable

Components combine to form bigger components.

---

# Real Example

```
App
 ├── Navbar
 ├── ProductList
 │     ├── ProductCard
 │     ├── ProductCard
 │     └── ProductCard
 └── Footer
```

---

# Use Cases

Components are used for:

* buttons
* cards
* modals
* forms
* layouts
* navigation bars

---

# Synthesis Questions

1. What is a React component?
2. Why are components reusable?
3. How do components improve scalability?
4. What is component composition?

---

# 24. Class Based Components

Tag: **[FRESHER]**

Before **React Hooks**, components were written using **classes**.

This was the **original React architecture**.

Today:

* class components are mostly legacy
* hooks replaced them

But understanding them is still important.

---

# Concept

A **class component** is a JavaScript class that extends `React.Component`.

Structure:

```
class ComponentName extends React.Component
```

---

# Basic Example

```jsx
import React from "react"

/*
Class component example
*/
class Hello extends React.Component {

  /*
  render() method returns UI
  This is mandatory
  */
  render() {
    return <h1>Hello React</h1>
  }
}

export default Hello
```

Usage

```
<Hello />
```

---

# Why render() Exists

React needs to know **what UI to display**.

The `render()` method returns JSX.

```
render → JSX → UI
```

---

# State in Class Components

Class components manage state using:

```
this.state
```

Example

```jsx
import React from "react"

class Counter extends React.Component {

  /*
  constructor initializes state
  */
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.increase}>
          Increase
        </button>
      </div>
    )
  }
}

export default Counter
```

---

# Output

Clicking button increases count.

```
0 → 1 → 2 → 3
```

---

# Problems with Class Components

They introduced complexity:

1. `this` binding confusion
2. lifecycle methods
3. verbose syntax
4. hard logic reuse

Example lifecycle functions:

```
componentDidMount
componentDidUpdate
componentWillUnmount
```

Hooks solved these issues.

---

# Tradeoffs

| Feature      | Class Components |
| ------------ | ---------------- |
| Syntax       | complex          |
| State        | supported        |
| Lifecycle    | supported        |
| Modern usage | rarely used      |

---

# Synthesis Questions

1. What is `render()` in React?
2. Why do class components extend `React.Component`?
3. How is state stored in class components?
4. Why did hooks replace class components?

---

# 25. Functional Components

Tag: **[BOTH]**

Modern React uses **functional components**.

---

# Problem

Class components were too complex.

React introduced **Hooks** to simplify state and lifecycle.

Now components can be simple **functions**.

---

# Concept

A **functional component** is a JavaScript function that returns JSX.

---

# Basic Example

```jsx
function Hello() {
  return <h1>Hello React</h1>
}

export default Hello
```

Usage

```
<Hello />
```

---

# Arrow Function Version

Most common style.

```jsx
const Hello = () => {
  return <h1>Hello React</h1>
}

export default Hello
```

---

# Functional Component with State

```jsx
import { useState } from "react"

const Counter = () => {

  /*
  useState hook creates state
  */
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  )
}

export default Counter
```

---

# Why Functional Components Won

| Feature        | Functional |
| -------------- | ---------- |
| simpler syntax | yes        |
| hooks support  | yes        |
| easier reuse   | yes        |
| smaller bundle | yes        |

---

# Modern Rule

Most React apps today use:

```
Functional Components + Hooks
```

---

# Synthesis Questions

1. What is a functional component?
2. Why are hooks used with functional components?
3. Why did React move away from class components?

---

# 26. Nested Components

Tag: **[FRESHER]**

Nested components mean:

A component **inside another component**.

---

# Example Structure

```
App
 ├── Header
 ├── ProductList
 │     ├── ProductCard
 │     ├── ProductCard
 │     └── ProductCard
 └── Footer
```

---

# Code Example

ProductCard

```jsx
const ProductCard = () => {
  return <h3>Product</h3>
}
```

ProductList

```jsx
const ProductList = () => {

  return (
    <div>

      <ProductCard />
      <ProductCard />
      <ProductCard />

    </div>
  )

}
```

App

```jsx
const App = () => {

  return (
    <div>

      <h1>Store</h1>

      <ProductList />

    </div>
  )

}
```

---

# Result

```
Store

Product
Product
Product
```

---

# Why Nested Components Matter

Large apps contain **hundreds of components**.

Nested structure allows:

* hierarchy
* separation of responsibility
* reusable blocks

---

# Synthesis Questions

1. What are nested components?
2. Why is component hierarchy important?

---

# 27. Component Composition

Tag: **[BOTH]**

Composition means:

**Combining small components to build complex UI**.

---

# Problem

Large components become messy.

Instead break them into pieces.

Example bad approach

```
DashboardComponent (2000 lines)
```

Better approach

```
Dashboard
 ├── Sidebar
 ├── Header
 ├── AnalyticsCard
 ├── Chart
 └── ActivityList
```

---

# Example

Card Component

```jsx
const Card = ({ title, children }) => {

  return (
    <div className="card">

      <h2>{title}</h2>

      {children}

    </div>
  )

}
```

Usage

```jsx
<Card title="Users">
  <p>1200 active users</p>
</Card>
```

---

# Output

```
Users
1200 active users
```

---

# Advantages

Composition gives:

* flexibility
* reuse
* maintainability

---

# Synthesis Questions

1. What is component composition?
2. Why is composition better than large components?

---

# 28. Children Props Pattern

Tag: **[BOTH]**

`children` is a special React prop.

It represents **content inside a component tag**.

---

# Example

```jsx
<Card>
  <p>Hello</p>
</Card>
```

Inside Card component:

```jsx
const Card = ({ children }) => {

  return (
    <div className="card">
      {children}
    </div>
  )

}
```

---

# Output

```
Hello
```

---

# Why Children Pattern Exists

It allows **wrapper components**.

Example:

```
Modal
Layout
Card
Tabs
Accordion
```

These components wrap other UI.

---

# Real Example

```jsx
const Layout = ({ children }) => {

  return (

    <div>

      <Navbar />

      {children}

      <Footer />

    </div>

  )

}
```

Usage

```jsx
<Layout>
  <Dashboard />
</Layout>
```

---

# Result

```
Navbar
Dashboard
Footer
```

---

# Advantages

Children pattern allows:

* layout wrappers
* reusable UI containers
* flexible composition

---

# Synthesis Questions

1. What is the `children` prop?
2. Why is it useful for layout components?
3. How does it improve component reuse?

---

# Section 4 Summary

React architecture relies on:

```
Components
     ↓
Nested Components
     ↓
Composition
     ↓
Reusable UI systems
```

This architecture is why React scales to **very large applications**.

---

If you want, next I can also explain something **very important but rarely explained well**:

**"How React actually renders components internally (component tree + reconciliation + rendering flow)"**

This concept **makes React architecture suddenly very clear.**
