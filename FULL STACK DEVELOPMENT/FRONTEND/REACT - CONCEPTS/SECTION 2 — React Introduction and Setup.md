# SECTION 2 — React Introduction and Setup

---

## 15. What React Is and Why It Exists

Tag: **[FRESHER]**

Subtopics

- UI library concept
- Component architecture
- Single Page Applications

---

### Problem

Before React, most websites were built using **traditional DOM manipulation**.

Example workflow:

1. HTML defines structure
2. CSS styles it
3. JavaScript manually updates UI

Example:

```javascript
// Selecting an element from DOM
const button = document.getElementById("btn");

// When user clicks button
button.addEventListener("click", function () {
  // Manually update UI
  document.getElementById("counter").innerText = "1";
});
```

Problems in large applications:

1. **Manual DOM manipulation becomes messy**
2. **UI state becomes difficult to manage**
3. **Code duplication increases**
4. **Large applications become hard to maintain**

Example:

If a page has:

- Navbar
- Sidebar
- Product list
- Cart
- Notifications
- User profile

Updating UI manually becomes extremely complex.

---

### Concept

React is a **JavaScript UI library** created by Facebook.

Purpose:

> Build complex user interfaces using **reusable components**.

Important:

React is **not a full framework**.

It focuses only on:

```
View Layer (UI)
```

In MVC architecture:

```
Model → Data
View → UI
Controller → Logic
```

React handles **View (UI)**.

---

### What React Actually Does

React helps us:

1. Break UI into **components**
2. Manage UI **state**
3. Update UI efficiently
4. Reuse UI logic

Example component:

```javascript
// A simple React component

function Welcome() {
  return <h1>Hello User</h1>;
}
```

This is a **reusable UI block**.

---

### Real Example of Component Thinking

Traditional website:

```
Entire page written in one HTML file
```

React approach:

```
Page
 ├ Navbar
 ├ Sidebar
 ├ ProductList
 │     ├ ProductCard
 │     ├ ProductCard
 │     ├ ProductCard
 └ Footer
```

Each part becomes a **component**.

Example:

```javascript
function Navbar() {
  return <h2>My Website</h2>;
}

function Footer() {
  return <p>Copyright 2026</p>;
}
```

React allows building UI like **LEGO blocks**.

---

### Component Architecture

A **component** is:

> A reusable, independent UI unit.

Example:

```javascript
function ProductCard() {
  return (
    <div>
      <h3>Product Name</h3>
      <p>Price: ₹500</p>
    </div>
  );
}
```

Now we can reuse it:

```javascript
<ProductCard />
<ProductCard />
<ProductCard />
```

Instead of writing HTML repeatedly.

---

### Single Page Applications (SPA)

Traditional websites reload pages.

Example:

```
User clicks About → browser loads new page
```

This causes:

- full page reload
- slower experience

React applications are **Single Page Applications (SPA)**.

Meaning:

```
One HTML page
UI updates dynamically
```

Example flow:

```
User clicks "Products"

React changes UI
without reloading page
```

Benefits:

- faster UI
- smoother navigation
- app-like experience

Example SPA platforms:

- Gmail
- Facebook
- Twitter
- Notion

---

### Mental Model

Think of React like:

```
UI = Function(State)
```

Meaning:

```
state changes
      ↓
UI automatically updates
```

Instead of manually updating DOM.

---

### Example

Without React:

```javascript
document.getElementById("counter").innerText = count;
```

With React:

```javascript
return <h1>{count}</h1>;
```

React handles DOM updates automatically.

---

### Tradeoffs

Advantages:

- reusable UI
- easier large apps
- predictable UI
- faster updates

Disadvantages:

- learning curve
- requires build tools
- ecosystem complexity

---

### Real Use Cases

React is used in:

- Facebook
- Instagram
- Netflix
- Airbnb
- Shopify
- WhatsApp Web

Most modern frontend applications use **component-based architecture**.

---

### Synthesis Questions

1. Why was React created?
2. What problem does component architecture solve?
3. Why are SPAs faster than traditional websites?
4. What part of MVC does React handle?
5. What is the mental model behind React UI updates?

---

## 16. Virtual DOM

Tag: **[FRESHER]**

Subtopics

- DOM problem
- Virtual DOM solution
- Diffing concept

---

### Problem

The **DOM (Document Object Model)** represents the structure of a webpage.

![](https://media.geeksforgeeks.org/wp-content/uploads/20230725135348/Browser-DOM-Virtual-DOM-copy.webp)

Example HTML:

```html
<div>
  <h1>Hello</h1>
  <p>Welcome</p>
</div>
```

Browser converts this into **DOM tree**.

```
div
 ├ h1
 └ p
```

When we update DOM:

```javascript
document.getElementById("title").innerText = "Hello World";
```

The browser must:

1. Recalculate layout
2. Repaint UI
3. Reflow elements

This is **expensive**.

In large apps with thousands of elements:

DOM updates become slow.

---

### Virtual DOM Concept

React solves this using **Virtual DOM**.

Virtual DOM is:

> A lightweight JavaScript copy of the real DOM.

Example structure:

```
Virtual DOM (JavaScript object)
       ↓
Compare changes
       ↓
Update only required parts
       ↓
Real DOM updated
```

---

### Example

Suppose UI:

```
<h1>Count: 0</h1>
```

User clicks button.

New UI:

```
<h1>Count: 1</h1>
```

React process:

```
1. Create new Virtual DOM
2. Compare with previous Virtual DOM
3. Find difference
4. Update only changed node
```

Instead of re-rendering entire page.

---

### Diffing Concept

Diffing means:

![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220131100244/Group-5-1.jpg)

> Comparing old Virtual DOM with new Virtual DOM.

Example:

Old:

```
<h1>Count: 0</h1>
```

New:

```
<h1>Count: 1</h1>
```

React detects:

```
only text changed
```

So only that node updates.

---

### Why Virtual DOM is Fast

Traditional DOM updates:

```
DOM manipulation
      ↓
Layout recalculation
      ↓
Repaint
```

React approach:

```
State change
      ↓
Virtual DOM update
      ↓
Diff calculation
      ↓
Minimal DOM update
```

This reduces heavy browser operations.

---

### Example React Code

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

When `count` changes:

React automatically updates **only that text node**.

---

### Tradeoffs

Virtual DOM advantages:

- faster updates
- efficient UI rendering
- simpler mental model

Possible misconceptions:

Virtual DOM itself is **not magic speed**.

Performance improvement comes from:

```
efficient diffing
batched updates
minimal DOM operations
```

---

### Synthesis Questions

1. Why is direct DOM manipulation slow?
2. What is Virtual DOM?
3. What problem does diffing solve?
4. Why does React update only part of the DOM?

---

## 17. React Reconciliation

Tag: **[EXPERIENCED]**

Subtopics

- diff algorithm
- key importance
- minimal DOM updates

---

### Concept

Reconciliation is the process React uses to:

```
compare old UI
with new UI
```

Then determine **what needs to change**.

This process uses the **diff algorithm**.

---

### Diff Algorithm

React compares:

```
Old Virtual DOM
vs
New Virtual DOM
```

Rules React uses:

1. Different element type → replace entire node
2. Same element type → update attributes
3. Children compared recursively

Example:

Old:

```
<ul>
  <li>A</li>
  <li>B</li>
</ul>
```

New:

```
<ul>
  <li>A</li>
  <li>C</li>
</ul>
```

React updates only:

```
<li>B</li> → <li>C</li>
```

---

### Key Importance

When rendering lists:

React must know **which element changed**.

Example:

```javascript
const items = ["Apple", "Banana", "Orange"];

items.map((item) => <li>{item}</li>);
```

React cannot track items correctly.

Correct version:

```javascript
items.map((item, index) => <li key={index}>{item}</li>);
```

`key` helps React identify elements uniquely.

---

### Example Problem Without Keys

Old list:

```
A B C
```

New list:

```
B C D
```

Without keys:

React may re-render all elements.

With keys:

React understands:

```
A removed
B moved
C moved
D added
```

This makes updates efficient.

---

### Mental Model

Reconciliation is like:

```
Old UI tree
      ↓
New UI tree
      ↓
React compares nodes
      ↓
Updates minimal DOM
```

---

### Synthesis Questions

1. What is reconciliation?
2. What is the diff algorithm?
3. Why are keys important in lists?
4. What happens if keys are missing?

---

## 18. Installing React App Using Vite

Tag: **[FRESHER]**

Subtopics

- Vite setup
- project initialization
- development server

---

### Problem

Traditional React setup used **Create React App**.

Problems:

- slow startup
- slow rebuilds
- heavy configuration

Modern React uses **Vite**.

---

### What Vite Is

Vite is a **modern frontend build tool**.

Benefits:

- extremely fast startup
- instant hot reload
- modern bundling

---

### Creating React App Using Vite

Step 1:

```bash
npm create vite@latest
```

---

Step 2:

Choose options

```
Project name → my-react-app
Framework → React
Variant → JavaScript
```

---

Step 3:

Install dependencies

```bash
cd my-react-app
npm install
```

---

Step 4:

Start development server

```bash
npm run dev
```

Output example:

```
Local: http://localhost:5173
```

Open browser.

React app running.

---

### Default Project Structure

After installation:

```
my-react-app
 ├ node_modules
 ├ public
 ├ src
 │   ├ App.jsx
 │   ├ main.jsx
 │   ├ index.css
 ├ package.json
 └ vite.config.js
```

---

### main.jsx Entry Point

Example:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

This mounts the React application.

---

## 19. React Project Folder Structure

Tag: **[BOTH]**

Subtopics

Typical scalable structure

```
src
components
pages
hooks
services
context
utils
assets
```

---

### Problem

In small projects everything is placed in:

```
src
 ├ App.jsx
 ├ components
 ├ styles
```

But large applications require better organization.

---

### Scalable Folder Structure

```
src
 ├ components
 ├ pages
 ├ hooks
 ├ services
 ├ context
 ├ utils
 ├ assets
```

---

### Folder Responsibilities

components

Reusable UI elements

Example:

```
Button.jsx
Navbar.jsx
Card.jsx
Modal.jsx
```

---

pages

Page-level components

Example:

```
Home.jsx
Login.jsx
Products.jsx
Dashboard.jsx
```

---

hooks

Custom React hooks

Example:

```
useFetch.js
useAuth.js
useWindowResize.js
```

---

services

API calls and backend communication

Example:

```
api.js
authService.js
productService.js
```

---

context

Global state management

Example:

```
AuthContext.jsx
ThemeContext.jsx
```

---

utils

Utility helper functions

Example:

```
formatDate.js
calculateTotal.js
```

---

assets

Static resources

Example:

```
images
icons
fonts
```

---

### Mental Model

Large React app structure:

```
UI Components
        ↓
Pages (Route Level)
        ↓
Hooks
        ↓
Services (API)
        ↓
Utilities
```

Clean architecture keeps applications maintainable.

---

### Synthesis Questions

1. Why is Vite preferred over older React setups?
2. What is the entry point of a React app?
3. Why separate components and pages?
4. What belongs inside services folder?
5. Why are custom hooks placed in a separate folder?

---
