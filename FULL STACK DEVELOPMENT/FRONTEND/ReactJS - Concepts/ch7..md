# SECTION 7 — Styling React Apps

Before React existed, styling was simple: **HTML + CSS files**.

When applications became **component-based**, styling also had to become **component-aware**.

Problem React tries to solve:

- UI is broken into **components**
- Each component should ideally have **its own styling**
- Styles should **not conflict with other components**

This leads to multiple styling approaches in React.

We will study them **from simplest → most scalable**.

---

# 35. CSS Styling (Traditional CSS Files)

Tag: **[FRESHER]**

---

# Problem

In normal web development we write:

```
index.html
styles.css
```

All styles are **global**.

Example problem:

```
button {
  background:red;
}
```

Now **every button in the entire application becomes red**.

Large applications face:

- style collisions
- difficult maintenance
- global overrides

But React still supports this method.

---

# Concept

Traditional CSS is simply **importing a CSS file into a React component**.

React supports CSS imports directly.

```
import "./App.css"
```

---

# Example Project Structure (Vite)

```
src
  App.jsx
  App.css
  index.css
  components
     Button.jsx
     Button.css
```

---

# Example 1 — Global CSS

### index.css

```css
/* Global styles apply to the whole application */

body {
  margin: 0;
  font-family: Arial;
  background-color: #f4f4f4;
}
```

---

### main.jsx

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

/*
Importing global CSS file.

This file affects the entire application.
*/
import "./index.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

---

# Example 2 — Component CSS

### Button.css

```css
/* Styling specific button */

.btn {
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
}
```

---

### Button.jsx

```javascript
import "./Button.css";

/*
This component uses CSS defined in Button.css
*/

function Button() {
  return <button className="btn">Click Me</button>;
}

export default Button;
```

---

# Why React Uses `className` Instead of `class`

In JSX:

```
class
```

is a **reserved JavaScript keyword**.

Therefore React uses:

```
className
```

Example:

```
<div className="container"></div>
```

---

# Problem With Global CSS

Large applications face problems.

Example:

```
.card {
   padding:20px;
}
```

Now if **two developers define `.card` differently**, conflicts occur.

```
components/Card.css
components/ProfileCard.css
```

Both might define `.card`.

Result → **unexpected UI bugs**

---

# Use Cases

Traditional CSS is used for:

- simple projects
- small apps
- global layouts
- typography
- reset styles

---

# Tradeoffs

Advantages

- simple
- familiar
- no learning curve

Disadvantages

- global scope
- class conflicts
- harder scaling

---

# Synthesis Questions

1. Why is global CSS dangerous in large React apps?
2. Why does React use `className` instead of `class`?
3. Where should global styles be placed?

---

# 36. Inline Styles

Tag: **[FRESHER]**

---

# Problem

Sometimes we want **dynamic styling based on state**.

Example:

- error messages
- theme switching
- conditional UI

Example:

```
if error → red text
if success → green text
```

Writing separate CSS classes for every case becomes messy.

Inline styles solve this.

---

# Concept

Inline styles in React are **JavaScript objects**.

Not strings like HTML.

HTML style:

```
style="color:red"
```

React style:

```
style={{ color: "red" }}
```

Two curly braces appear because:

1. first `{}` → JSX expression
2. second `{}` → JavaScript object

---

# Example 1 — Basic Inline Style

```javascript
function App() {
  return (
    <h1
      /*
      style attribute receives a JavaScript object
      */
      style={{
        color: "blue",
        fontSize: "30px",
        backgroundColor: "lightgray",
      }}
    >
      Hello React
    </h1>
  );
}

export default App;
```

---

# Example 2 — Dynamic Styling

```javascript
import { useState } from "react";

function Status() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div>
      <h2
        /*
        Style changes based on state
        */
        style={{
          color: isOnline ? "green" : "red",
        }}
      >
        {isOnline ? "Online" : "Offline"}
      </h2>

      <button onClick={() => setIsOnline(!isOnline)}>Toggle Status</button>
    </div>
  );
}

export default Status;
```

---

# Example 3 — Style Object Outside Component

Better performance.

```javascript
const buttonStyle = {
  padding: "10px",
  backgroundColor: "black",
  color: "white",
};

function Button() {
  return <button style={buttonStyle}>Submit</button>;
}

export default Button;
```

---

# Important Rules

### CSS properties become camelCase

Normal CSS

```
background-color
font-size
```

React

```
backgroundColor
fontSize
```

---

# Inline Styles Limitations

Cannot use:

```
:hover
media queries
animations
```

These require CSS files.

---

# Use Cases

Inline styles are good for:

- dynamic UI
- quick styles
- conditional rendering

---

# Tradeoffs

Advantages

- dynamic styling
- JavaScript control

Disadvantages

- messy code for large styling
- no pseudo selectors
- no media queries

---

# Synthesis Questions

1. Why are two curly braces required in React inline styles?
2. Why are CSS properties camelCase?
3. What limitations do inline styles have?

---

# 37. CSS Modules

Tag: **[BOTH]**

This is **the first scalable styling solution**.

Used in **production React apps**.

---

# Problem

Global CSS creates **class name conflicts**.

Example:

```
.card
```

Many components may define `.card`.

CSS Modules solve this by **scoping CSS to components**.

---

# Concept

Each CSS class becomes **locally scoped**.

Example transformation:

```
.card
```

becomes internally

```
card_x8a9df
```

Unique class generated.

---

# File Naming

```
Component.module.css
```

Example:

```
Button.module.css
```

---

# Example

### Button.module.css

```css
.button {
  background-color: purple;
  color: white;
  padding: 10px;
  border: none;
}
```

---

### Button.jsx

```javascript
/*
Import CSS module

styles becomes an object
containing class mappings
*/

import styles from "./Button.module.css";

function Button() {
  return (
    <button
      /*
      Access CSS class through object
      */
      className={styles.button}
    >
      Save
    </button>
  );
}

export default Button;
```

---

# What Actually Happens

React converts:

```
styles.button
```

to something like:

```
button__a8sd12
```

This prevents collisions.

---

# Multiple Classes

```javascript
<div className={`${styles.card} ${styles.shadow}`}>
```

---

# Example — Card Component

### Card.module.css

```css
.card {
  border: 1px solid gray;
  padding: 20px;
  border-radius: 10px;
}
```

---

### Card.jsx

```javascript
import styles from "./Card.module.css";

function Card() {
  return <div className={styles.card}>Product Card</div>;
}

export default Card;
```

---

# Advantages

- scoped styles
- no naming conflicts
- good performance
- built-in support in Vite

---

# Tradeoffs

Advantages

- scalable
- maintainable
- component scoped

Disadvantages

- slightly more verbose
- harder for global styles

---

# Real Industry Use

Many large React apps use:

```
CSS Modules + Tailwind
```

---

# Synthesis Questions

1. What problem do CSS Modules solve?
2. Why is `.module.css` required?
3. How are classes accessed in React?

---

# 38. CSS-in-JS Libraries

Tag: **[EXPERIENCED]**

Examples:

- styled-components
- emotion

These are **advanced styling systems**.

---

# Problem

CSS files exist **outside JavaScript logic**.

But React components contain:

```
logic
state
UI
```

Some developers prefer **styles inside JavaScript itself**.

This is CSS-in-JS.

---

# Concept

Styles are written **inside JavaScript files**.

Example using **styled-components**.

---

# Installation

```
npm install styled-components
```

---

# Example

```javascript
import styled from "styled-components";

/*
Creating a styled button component
*/

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
`;

function App() {
  return <Button>Click Me</Button>;
}

export default App;
```

---

# Dynamic Styling

```javascript
const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
`;
```

---

Usage:

```javascript
<Button primary>Save</Button>
<Button>Cancel</Button>
```

---

# Emotion Example

Similar syntax.

```
npm install @emotion/react
```

---

# Advantages

- component scoped
- dynamic styling
- powerful theme systems
- reusable design systems

---

# Tradeoffs

Advantages

- dynamic UI styling
- theme support
- component based styling

Disadvantages

- runtime overhead
- larger bundle
- learning curve

---

# When Companies Use CSS-in-JS

Used in:

- design systems
- component libraries
- large UI frameworks

Examples:

- Shopify Polaris
- Atlassian design system

---

# Styling Strategy Used In Real Production Apps

Most companies choose one of these patterns:

```
CSS Modules + Tailwind
```

or

```
Styled Components
```

or

```
Tailwind CSS
```

---

# Final Mental Model

React styling options:

```
Small apps
   ↓
CSS files

Dynamic styles
   ↓
Inline styles

Medium apps
   ↓
CSS Modules

Large design systems
   ↓
CSS-in-JS
```

---

# Final Synthesis Questions

1. Why do large React apps avoid global CSS?
2. When should inline styles be used?
3. How do CSS Modules prevent style conflicts?
4. What is the idea behind CSS-in-JS?
5. Which styling approach scales best for large teams?

---

If you want, next I can also explain **one extremely important missing React styling topic** used by **90% of companies today**:

**Tailwind CSS in React (very important).**

Or we can continue your roadmap with:

**SECTION 8 — Conditional Rendering.**
