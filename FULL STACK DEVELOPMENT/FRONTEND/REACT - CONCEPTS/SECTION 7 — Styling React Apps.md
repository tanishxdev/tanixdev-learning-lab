# SECTION 7 — Styling React Apps

React applications still use **CSS to style UI**.
But React gives multiple ways to apply styles.

Why multiple ways exist?

Because modern UI development needs:

- component isolation
- dynamic styling
- maintainable large codebases
- reusable UI systems

So React supports several styling patterns.

---

## 35. CSS Styling

Tag: **[FRESHER]**

Subtopics

- CSS files
- global styles

---

### Problem

In normal HTML we style elements using **CSS files**.

Example:

```html
<h1 class="title">Hello</h1>
```

```css
.title {
  color: red;
}
```

React components still produce **HTML elements in the browser**, so CSS works the same way.

However React introduces **component architecture**, so we need to understand:

- where CSS files live
- how they are imported
- how global styles work

---

### Concept

React allows importing CSS files directly into JavaScript.

Example:

```javascript
import "./App.css";
```

When imported:

- the CSS file is bundled by the build system
- styles are injected into the page

This makes CSS available globally.

---

### Basic Folder Structure (Vite)

```text
src
 ├── components
 │     └── Navbar.jsx
 ├── App.jsx
 ├── App.css
 └── main.jsx
```

---

### Example 1 — Global CSS File

#### App.css

```css
/* Style for page heading */

.title {
  color: blue;
  font-size: 32px;
  text-align: center;
}
```

---

#### App.jsx

```jsx
// Import CSS file
// This loads styles into the project

import "./App.css";

function App() {
  return (
    <div>
      {/* className is used instead of class in React */}

      <h1 className="title">Hello React Styling</h1>
    </div>
  );
}

export default App;
```

---

### Important Rule

React uses:

```jsx
className;
```

not

```html
class
```

Because `class` is a **reserved keyword in JavaScript**.

---

### Dry Run

1. React renders `<h1>`
2. Browser sees `class="title"`
3. CSS rule applies

Output:

Blue centered heading.

---

### Example 2 — Styling Components

#### Button.css

```css
.primaryButton {
  background-color: blue;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 5px;
}
```

---

#### Button.jsx

```jsx
import "./Button.css";

function Button() {
  return <button className="primaryButton">Click Me</button>;
}

export default Button;
```

---

### Global Style Behavior

Important concept.

If you define:

```css
h1 {
  color: red;
}
```

It affects **every h1 in the application**.

This is called **global CSS scope**.

---

### Global Styles File

Large apps usually create:

```
src/styles/global.css
```

Example:

```css
body {
  margin: 0;
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}
```

Imported in **main.jsx**

```jsx
import "./styles/global.css";
```

Now entire app shares these styles.

---

### Advantages

- simple
- familiar
- easy for beginners

---

### Tradeoffs

Large apps suffer from:

- CSS name conflicts
- style leakage
- hard maintenance

Example problem:

```
.button
.card
.container
```

Many components may accidentally use the same names.

This leads to **CSS collisions**.

This is why **CSS Modules** were created.

---

### Use Cases

Global CSS is good for:

- base styles
- typography
- resets
- layout systems

---

## 36. Inline Styles

Tag: **[FRESHER]**

---

### Problem

Sometimes styling must depend on **JavaScript values**.

Example:

- dynamic colors
- conditional styling
- runtime values

Example problem:

```text
If score > 80 → color green
If score < 40 → color red
```

CSS alone cannot easily solve this.

So React allows **inline styles**.

---

### Concept

Inline styles are written as **JavaScript objects**.

Example syntax:

```jsx
style={{ property: value }}
```

Notice **double braces**:

```text
{ } → JavaScript expression
{ } → object
```

---

### Example

```jsx
function App() {
  return (
    <h1
      style={{
        color: "red",
        fontSize: "40px",
      }}
    >
      Inline Styled Text
    </h1>
  );
}
```

---

### Why camelCase?

CSS uses:

```css
font-size
```

JavaScript uses:

```javascript
fontSize;
```

Because `-` is not allowed in variable names.

---

### Example — Dynamic Styling

```jsx
function Score() {
  const score = 85;

  return (
    <h2
      style={{
        color: score > 80 ? "green" : "red",
      }}
    >
      Score: {score}
    </h2>
  );
}
```

---

### Example — Dynamic Button

```jsx
function Button() {
  const isActive = true;

  return (
    <button
      style={{
        backgroundColor: isActive ? "green" : "gray",
        color: "white",
        padding: "10px",
      }}
    >
      Submit
    </button>
  );
}
```

---

### Tradeoffs

Inline styles have limitations.

Problems:

1. No pseudo selectors

```css
:hover: focus;
```

2. No media queries

3. Cannot reuse styles easily

4. Large style objects become messy

---

### Use Cases

Inline styles are good for:

- dynamic styles
- small components
- computed values

---

## 37. CSS Modules

Tag: **[BOTH]**

---

### Problem

Global CSS causes **class name collisions**.

Example:

```
Button.css
Card.css
Navbar.css
```

All may contain:

```
.container
```

Which container will apply?

CSS Modules solve this by **scoping CSS to components**.

---

### Concept

CSS Modules automatically generate **unique class names**.

Example transformation:

```
button → button_x82ab
```

This prevents collisions.

---

### File Naming Rule

CSS module files must end with:

```
.module.css
```

Example:

```
Button.module.css
```

---

### Example

#### Button.module.css

```css
.button {
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
```

---

#### Button.jsx

```jsx
// Import module styles

import styles from "./Button.module.css";

function Button() {
  return <button className={styles.button}>Click</button>;
}

export default Button;
```

---

### How It Works

Instead of:

```text
class="button"
```

React renders:

```text
class="button_abc123"
```

Scoped only to this component.

---

### Advantages

- no CSS conflicts
- scoped styles
- maintainable

---

### Tradeoffs

Slightly more verbose syntax.

---

### Real Production Usage

CSS Modules are widely used in:

- Next.js
- Vite React apps
- large component libraries

---

## 38. CSS-in-JS Libraries

Tag: **[EXPERIENCED]**

Examples

- styled-components
- emotion

---

### Problem

Modern apps require **dynamic styling based on state**.

Example:

- theme switching
- responsive components
- component based styling

CSS-in-JS solves this by writing CSS **inside JavaScript**.

---

### Concept

CSS-in-JS libraries allow styles to live **inside components**.

Benefits:

- scoped styles
- dynamic styling
- theme systems
- reusable UI

---

### Example — styled-components

Install:

```bash
npm install styled-components
```

---

### Example Code

```jsx
import styled from "styled-components";

/*
Create styled button component

styled.button returns a new
React component with styles
*/

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 5px;
`;

function App() {
  return (
    <div>
      <Button>Styled Button</Button>
    </div>
  );
}

export default App;
```

---

### Dynamic Styled Component

```jsx
const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};

  color: white;
`;
```

Usage:

```jsx
<Button primary>Primary</Button>
<Button>Secondary</Button>
```

---

### Emotion Example

Emotion works similarly but focuses on **performance**.

Example:

```jsx
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

function App() {
  return (
    <h1
      css={css`
        color: purple;
        font-size: 40px;
      `}
    >
      Emotion Styling
    </h1>
  );
}
```

---

### Tradeoffs

| Method        | Pros     | Cons             |
| ------------- | -------- | ---------------- |
| CSS files     | simple   | global conflicts |
| Inline styles | dynamic  | limited features |
| CSS modules   | scoped   | extra syntax     |
| CSS-in-JS     | powerful | heavier runtime  |

---

### Real Industry Usage

Most production React apps use:

- **CSS Modules**
- **Tailwind**
- **Styled Components**

Rarely pure global CSS.

---

### Styling Strategy in Real Projects

Common pattern:

```
global.css → base styles
CSS modules → component styles
Tailwind / CSS-in-JS → advanced UI systems
```

---

### Synthesis Questions

1. Why does React use `className` instead of `class`?
2. What problem do CSS Modules solve?
3. Why are inline styles limited?
4. When should CSS-in-JS be used?
5. What styling approach scales best in large applications?

---
