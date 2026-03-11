# SECTION 2 — React Introduction and Setup

This section answers the **most important React question first**:

**Why did React even get created?**

Before learning components, hooks, routing etc., we must understand **the problem React solves**.

---

# 15. What React Is and Why It Exists

Tag: **[FRESHER]**

---

# 1. Problem — Why React Was Created

Before React, developers built UI using **manual DOM manipulation**.

Example:

```html
<div id="app"></div>
```

```javascript
const app = document.getElementById("app");

const button = document.createElement("button");
button.innerText = "Click Me";

button.addEventListener("click", () => {
  const p = document.createElement("p");
  p.innerText = "You clicked!";
  app.appendChild(p);
});

app.appendChild(button);
```

Problems:

1. **Too much DOM manipulation**
2. **Hard to manage large UI**
3. **State changes become messy**
4. **Code becomes unmaintainable**

Example real UI:

```
Dashboard
   ├ Sidebar
   ├ Navbar
   ├ Content
   │   ├ Posts
   │   ├ Comments
   │   └ Likes
```

Updating UI manually becomes **very complex**.

---

# 2. Idea Behind React

React introduced a **new mental model**.

Instead of saying:

```
HOW to update DOM
```

React developers describe:

```
WHAT the UI should look like
```

React automatically updates the DOM.

This concept is called:

```
Declarative UI
```

---

# 3. What React Actually Is

React is a **JavaScript UI Library** for building user interfaces.

Important points:

| Feature           | Meaning                                      |
| ----------------- | -------------------------------------------- |
| UI Library        | Focuses only on UI                           |
| Component based   | UI built using reusable pieces               |
| Declarative       | Describe UI instead of manually updating DOM |
| Efficient updates | Uses Virtual DOM                             |

---

# 4. Component Architecture

React applications are built using **components**.

A component is:

```
A reusable UI building block
```

Example UI:

```
Website
 ├ Navbar
 ├ Sidebar
 ├ Feed
 │   ├ Post
 │   ├ Post
 │   ├ Post
 └ Footer
```

Each part becomes a **component**.

---

# Example Component

```javascript
function Navbar() {
  return <h1>My Website</h1>;
}
```

React component rules:

1. Must start with **capital letter**
2. Must **return JSX**
3. Reusable

---

# Example Application Structure

```javascript
function App() {
  return (
    <div>
      <Navbar />
      <Feed />
      <Footer />
    </div>
  );
}
```

Here:

```
App
 ├ Navbar
 ├ Feed
 └ Footer
```

This is called **component composition**.

---

# 5. Single Page Applications (SPA)

Traditional websites:

```
User clicks page
→ browser reloads entire page
→ server sends new HTML
```

This is slow.

Example:

```
Login → Reload
Dashboard → Reload
Profile → Reload
```

---

# React Solution

React builds **Single Page Applications**.

Meaning:

```
Only ONE HTML page loads.
```

Then JavaScript updates UI dynamically.

Example:

```
login
dashboard
profile
settings
```

Page **does not reload**.

React just updates components.

---

# Example SPA Behavior

Traditional website

```
Click Dashboard
→ full page reload
```

React SPA

```
Click Dashboard
→ React swaps component
→ no reload
```

---

# SPA Advantages

1. Faster navigation
2. Better user experience
3. Less server load
4. Dynamic UI updates

---

# Real Products Built Using React

Examples:

```
Facebook
Instagram
Netflix
Airbnb
WhatsApp Web
```

React was originally built by **Facebook engineers**.

---

# Mental Model of React

Think of React like:

```
UI = Function(State)
```

Example:

```
State = LoggedIn
UI → Dashboard

State = LoggedOut
UI → Login Page
```

React automatically updates UI when **state changes**.

---

# Example — State Driven UI

```javascript
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }

  return <h1>Please login</h1>;
}
```

Here UI changes based on **state**.

---

# React Philosophy

React encourages:

```
Small components
Reusable UI
Predictable updates
State driven rendering
```

---

# React vs Other Frameworks

| Feature        | React     | Angular   | Vue       |
| -------------- | --------- | --------- | --------- |
| Type           | Library   | Framework | Framework |
| Learning curve | Easy      | Hard      | Medium    |
| Flexibility    | Very high | Less      | Medium    |

---

# Common Misconceptions

### React is not a framework

React does **not include**:

```
routing
state management
forms
http client
```

These are added using libraries.

Example:

```
React Router
Redux
React Query
```

---

# Real Use Case Example

Building:

```
Twitter Feed
```

Components:

```
App
 ├ Navbar
 ├ TweetList
 │   ├ Tweet
 │   ├ Tweet
 │   └ Tweet
 └ Sidebar
```

Each tweet is a reusable component.

---

# Edge Cases and Design Thinking

Bad approach:

```
One giant component with 1000 lines
```

Good approach:

```
Many small reusable components
```

Example:

```
Button
Card
Modal
Avatar
Input
```

---

# Synthesis Questions

1. Why was React created?
2. What problem does React solve?
3. What is declarative UI?
4. What is a component?
5. What is SPA?
6. Why are components useful?

---

# Next Topic

Next we go deeper into **React’s most important internal concept**:

```
Virtual DOM
```

This explains **why React is fast**.

Next topic:

```
16. Virtual DOM
```

This is **one of the most important concepts in React** because it explains:

```
how React updates UI efficiently
```

When you're ready say:

```
Topic 16
```

# 16. Virtual DOM

Tag: **[FRESHER]**

Subtopics

- DOM problem
- Virtual DOM solution
- Diffing concept

---

# 1. Problem — Why Virtual DOM Exists

Before understanding Virtual DOM, we must understand **the problem with the real DOM**.

The **DOM (Document Object Model)** represents the HTML structure of a webpage as a tree.

Example HTML:

```html
<div>
  <h1>Hello</h1>
  <button>Click</button>
</div>
```

Browser internally converts it to a structure like:

```
div
 ├ h1
 │  └ "Hello"
 └ button
    └ "Click"
```

This tree is the **DOM tree**.

---

## Why Direct DOM Manipulation Is Slow

Updating the DOM is **expensive** because browsers must perform many operations.

Example when DOM changes:

```
DOM change
  ↓
Recalculate layout
  ↓
Recalculate CSS styles
  ↓
Repaint screen
  ↓
Reflow layout
```

This process is slow when repeated many times.

---

## Example Problem

Suppose we have a list:

```html
<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>
```

Now we update:

```
B → B updated
```

If using naive DOM updates, browser may:

```
recalculate entire list
```

In large apps like:

```
Facebook feed
Instagram timeline
Twitter posts
```

DOM updates can happen **thousands of times**.

That creates performance problems.

---

# 2. React’s Idea — Virtual DOM

React introduces a **Virtual DOM**.

Definition:

```
Virtual DOM = lightweight JavaScript copy of the real DOM
```

Instead of changing the browser DOM directly, React:

```
1. Updates Virtual DOM
2. Compares changes
3. Updates only necessary DOM nodes
```

---

## Visual Flow

```
State change
    ↓
New Virtual DOM created
    ↓
Compare with previous Virtual DOM
    ↓
Find differences
    ↓
Update only changed DOM nodes
```

This makes UI updates **very efficient**.

---

# 3. Example Without Virtual DOM

Suppose UI:

```
<h1>Hello</h1>
```

User clicks button.

Text becomes:

```
<h1>Hello Tanish</h1>
```

Without Virtual DOM approach:

```
browser modifies DOM directly
```

React approach:

```
Old Virtual DOM
<h1>Hello</h1>

New Virtual DOM
<h1>Hello Tanish</h1>
```

React compares them and updates only the **text node**.

---

# 4. Example React Component

```javascript
function App() {
  const name = "Tanish";

  return <h1>Hello {name}</h1>;
}
```

Here React internally creates Virtual DOM representation.

Something like:

```
{
 type: "h1",
 children: ["Hello Tanish"]
}
```

When `name` changes, React creates a **new Virtual DOM tree**.

Then it compares with the previous tree.

---

# 5. Virtual DOM Tree Example

Suppose UI:

```
<div>
  <h1>Hello</h1>
  <p>Welcome</p>
</div>
```

Virtual DOM representation:

```
div
 ├ h1
 │  └ "Hello"
 └ p
    └ "Welcome"
```

Now text changes:

```
Welcome → Welcome Back
```

New Virtual DOM:

```
div
 ├ h1
 │  └ "Hello"
 └ p
    └ "Welcome Back"
```

React compares both trees.

Only this node changed:

```
p text node
```

So React updates only that DOM node.

---

# 6. Diffing Concept

The comparison between two Virtual DOM trees is called:

```
Diffing
```

Diffing means:

```
find the difference between two trees
```

Steps React performs:

```
Old Virtual DOM
       ↓
New Virtual DOM
       ↓
Compare nodes
       ↓
Identify changes
       ↓
Update real DOM
```

---

# 7. Why Virtual DOM Is Fast

Reason 1 — JavaScript objects are cheap

Virtual DOM is just:

```
JavaScript objects
```

Comparing objects is much faster than manipulating the browser DOM.

---

Reason 2 — Batch updates

React batches many updates together.

Example:

```
setState
setState
setState
```

React groups them into one DOM update.

---

Reason 3 — Minimal DOM updates

Only changed elements update.

Example:

```
list of 1000 items
only 1 changed
```

React updates **only 1 DOM node**.

---

# 8. Example — Counter

Code:

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## What Happens Internally

Initial render:

```
Virtual DOM
<div>
  <h1>0</h1>
  <button>Increment</button>
</div>
```

After click:

```
<div>
  <h1>1</h1>
  <button>Increment</button>
</div>
```

Diffing detects:

```
only h1 text changed
```

React updates:

```
<h1>0 → 1>
```

Button and div remain unchanged.

---

# 9. Real World Example

Imagine a **shopping cart page**.

```
Cart
 ├ Item1
 ├ Item2
 ├ Item3
 └ Total Price
```

User increases quantity of Item2.

Without Virtual DOM:

```
recalculate entire page
```

With React:

```
update only Item2
update Total Price
```

Everything else stays untouched.

---

# 10. Common Misconception

Many people think:

```
Virtual DOM = faster DOM
```

Not exactly.

The real benefit is:

```
Smart DOM updates
```

---

# 11. Limitations of Virtual DOM

Virtual DOM still requires:

```
diffing computation
memory usage
tree creation
```

But it is **still faster than direct DOM manipulation in most cases**.

---

# 12. Mental Model

Think of Virtual DOM like:

```
draft copy of UI
```

Example:

```
Google Docs draft
compare changes
update final document
```

React works similarly.

---

# 13. Important Rule

React never directly manipulates DOM repeatedly.

Instead:

```
UI = Function(State)
```

State changes → React updates Virtual DOM → React updates real DOM.

---

# 14. Synthesis Questions

1. What is DOM?
2. Why is DOM manipulation slow?
3. What is Virtual DOM?
4. What is diffing?
5. Why is Virtual DOM faster?
6. What happens when React state changes?

---

# Next Topic

Next we go deeper into **how React performs DOM updates internally**.

Next concept:

```
React Reconciliation
```

This explains:

```
how React’s diffing algorithm works
why keys are important
how React avoids unnecessary DOM updates
```

Say:

```
17
```

and we will go **deep into React reconciliation algorithm** (very important concept).

# 17. React Reconciliation

Tag: **[EXPERIENCED]**

Subtopics

- Diff algorithm
- Key importance
- Minimal DOM updates

---

# 1. Problem — Updating the UI Efficiently

We already learned:

```
State change → Virtual DOM updated → React compares trees
```

But a major question remains:

**How does React compare two trees efficiently?**

If React compared every node deeply, the cost would be extremely large.

Example:

```
Old DOM tree → 1000 nodes
New DOM tree → 1000 nodes
```

If React compared every node against every node, complexity would become:

```
O(n³)
```

That would be **too slow**.

Therefore React uses an optimized algorithm called:

```
Reconciliation
```

---

# 2. What Reconciliation Means

Definition:

```
Reconciliation = process React uses to update the DOM by comparing
the previous Virtual DOM tree with the new Virtual DOM tree.
```

Purpose:

```
Find minimal DOM changes needed.
```

Process flow:

```
State Change
     ↓
New Virtual DOM
     ↓
Compare with old Virtual DOM
     ↓
Find differences
     ↓
Update real DOM
```

This comparison process is the **reconciliation algorithm**.

---

# 3. React's Core Assumptions

To make reconciliation fast, React makes **two assumptions**.

### Assumption 1

```
Different element types create different trees.
```

Example:

Old UI

```
<div>
```

New UI

```
<span>
```

React assumes:

```
Entire element changed
```

So React will:

```
Destroy old node
Create new node
```

---

### Assumption 2

```
Developers provide stable keys for lists
```

Keys help React **track elements across renders**.

Without keys, React cannot efficiently compare lists.

---

# 4. Example — Element Type Change

Old Virtual DOM

```
<div>
   <h1>Hello</h1>
</div>
```

New Virtual DOM

```
<section>
   <h1>Hello</h1>
</section>
```

React sees:

```
div → section
```

Result:

```
destroy old subtree
create new subtree
```

Even though the content looks similar.

---

# 5. Example — Same Element Type

Old

```
<h1>Hello</h1>
```

New

```
<h1>Hello Tanish</h1>
```

React sees:

```
same element type
```

Result:

```
update text node only
```

Minimal update.

---

# 6. Attribute Changes

Old:

```
<h1 class="title">
```

New:

```
<h1 class="header">
```

React updates only:

```
class attribute
```

No DOM recreation needed.

---

# 7. Children Comparison

React compares children **one by one**.

Example.

Old list:

```
<ul>
  <li>A</li>
  <li>B</li>
</ul>
```

New list:

```
<ul>
  <li>A</li>
  <li>C</li>
</ul>
```

React compares sequentially:

```
A == A → no change
B → C → update node
```

Only one update.

---

# 8. Problem with Lists

Consider:

Old list

```
A
B
C
```

New list

```
C
A
B
```

Without keys React compares positionally.

```
A → C
B → A
C → B
```

React thinks **everything changed**.

This causes unnecessary DOM updates.

---

# 9. Solution — Keys

React introduced **keys**.

Keys allow React to uniquely identify elements.

Example:

```javascript
const items = ["A", "B", "C"];

items.map((item) => <li key={item}>{item}</li>);
```

Virtual DOM becomes:

```
key:A
key:B
key:C
```

Now new order:

```
key:C
key:A
key:B
```

React understands:

```
same elements
only order changed
```

So React performs:

```
move DOM nodes
```

Instead of recreating them.

---

# 10. Example Code

List rendering example:

```javascript
function List() {
  const users = ["Tanish", "Rahul", "Aman"];

  return (
    <ul>
      {users.map((user, index) => (
        // key helps React track list elements efficiently
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}
```

But using **index as key is not recommended**.

---

# 11. Why Index Keys Are Dangerous

Suppose list:

```
[Apple, Banana, Mango]
```

User removes:

```
Banana
```

List becomes:

```
[Apple, Mango]
```

Indexes change.

```
Apple → index 0
Banana → index 1
Mango → index 2
```

After removal:

```
Apple → index 0
Mango → index 1
```

React thinks:

```
Banana → Mango
```

Incorrect updates may occur.

---

# Better Key

Use stable IDs.

Example:

```javascript
const users = [
  { id: 1, name: "Tanish" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Aman" },
];
```

Render:

```javascript
users.map((user) => <li key={user.id}>{user.name}</li>);
```

Now React can correctly track elements.

---

# 12. Minimal DOM Updates

Reconciliation ensures React updates **only what changed**.

Example UI:

```
App
 ├ Navbar
 ├ Sidebar
 ├ Feed
 └ Footer
```

If feed updates:

```
only Feed re-renders
```

Navbar and Footer remain untouched.

---

# 13. Internal Algorithm Complexity

React reconciliation operates approximately in:

```
O(n)
```

Because React compares nodes **linearly**.

This is why React apps scale well even with large UI trees.

---

# 14. Real Example — React Counter

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

When button clicked:

```
Old Virtual DOM
<h1>0</h1>

New Virtual DOM
<h1>1</h1>
```

Reconciliation detects:

```
only text changed
```

Real DOM update:

```
0 → 1
```

---

# 15. Mental Model

Think of reconciliation like **Git diff**.

```
Old version
New version
Compare changes
Apply minimal update
```

React does the same with UI trees.

---

# 16. Common Interview Questions

1. What is React reconciliation?
2. How does React diff algorithm work?
3. Why are keys important in React?
4. Why should indexes not be used as keys?
5. What happens when element types change?

---

# 17. Key Takeaway

React performance comes from **three layers working together**.

```
State
   ↓
Virtual DOM
   ↓
Reconciliation
   ↓
Efficient DOM updates
```

---

# Next Topic

Next we move to **practical setup of React apps**.

```
18. Installing React App Using Vite
```

This is where we will learn:

```
modern React setup
project structure
development server
build process
```

Say:

```
18
```

and we will start **React project setup using Vite step-by-step**.

# 18. Installing React App Using Vite

Tag: **[FRESHER]**

Subtopics

- Vite setup
- project initialization
- development server

---

# 1. Problem — Why We Need a Tool to Run React

React code looks like this:

```javascript
function App() {
  return <h1>Hello</h1>;
}
```

But browsers **cannot understand this syntax directly**.

Reason:

```text
JSX is not valid JavaScript
```

Example:

```javascript
return <h1>Hello</h1>;
```

The browser only understands:

```javascript
return React.createElement("h1", null, "Hello");
```

Therefore we need a **toolchain** that can:

1. Convert JSX → JavaScript
2. Bundle many files into one
3. Run development server
4. Optimize code for production

These tools are called **build tools**.

---

# 2. Traditional React Setup (Older Method)

Earlier React apps used:

```text
Create React App (CRA)
```

Problems with CRA:

- Slow startup
- Slow rebuild
- Large dependencies
- Hard to customize

Modern React apps now use:

```text
Vite
```

---

# 3. What Vite Is

Vite is a **modern frontend build tool**.

It provides:

| Feature          | Benefit                    |
| ---------------- | -------------------------- |
| Fast dev server  | Instant startup            |
| ES modules       | No heavy bundling in dev   |
| Hot reload       | UI updates instantly       |
| Optimized builds | Smaller production bundles |

---

# 4. Why Vite Is Fast

Traditional bundlers:

```text
Webpack
```

Flow:

```text
Start server
→ bundle entire app
→ then start dev server
```

Vite approach:

```text
Start dev server instantly
→ load modules only when needed
```

Example:

```text
User opens page
→ browser loads only required modules
```

This makes development **extremely fast**.

---

# 5. Installing Node.js (Prerequisite)

Before creating a React app, Node.js must be installed.

Check installation:

```bash
node -v
```

Check npm:

```bash
npm -v
```

Example output:

```text
v18.x.x
9.x.x
```

If not installed:

Download from:

```
https://nodejs.org
```

---

# 6. Creating React App Using Vite

Run this command in terminal.

```bash
npm create vite@latest
```

Terminal will ask questions.

Example flow:

```text
Project name: my-react-app
Framework: React
Variant: JavaScript
```

After selecting options:

```text
Project created
```

---

# 7. Install Dependencies

Navigate to the project folder.

```bash
cd my-react-app
```

Install dependencies.

```bash
npm install
```

This installs all required packages.

Example:

```text
react
react-dom
vite
eslint
```

---

# 8. Start Development Server

Run:

```bash
npm run dev
```

Terminal output:

```text
Local: http://localhost:5173
```

Open in browser.

You will see:

```text
Vite + React welcome page
```

---

# 9. Vite React Project Structure

After creation the project looks like this.

```
my-react-app
│
├ node_modules
├ public
├ src
│
├ index.html
├ package.json
├ vite.config.js
```

---

# 10. Important Files

### index.html

Entry HTML file.

```html
<div id="root"></div>
```

React renders inside this element.

---

### main.jsx

Application entry point.

Example:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

Explanation:

```text
ReactDOM connects React with the browser DOM.
```

---

### App.jsx

Main React component.

Example:

```javascript
function App() {
  return <h1>Hello React</h1>;
}

export default App;
```

---

# 11. How React App Loads

Flow:

```
Browser loads index.html
        ↓
main.jsx runs
        ↓
React mounts App component
        ↓
App renders UI
```

Visual flow:

```
index.html
   ↓
main.jsx
   ↓
App.jsx
   ↓
UI rendered
```

---

# 12. Hot Module Replacement (HMR)

Vite supports **Hot Module Replacement**.

Meaning:

```text
Edit code
→ UI updates instantly
→ page does NOT reload
```

Example:

Change:

```javascript
<h1>Hello React</h1>
```

to

```javascript
<h1>Hello Tanish</h1>
```

Browser updates instantly.

---

# 13. Example React Component

```javascript
function Greeting() {
  const name = "Tanish";

  return <h1>Hello {name}</h1>;
}

export default Greeting;
```

React renders dynamic values inside JSX.

---

# 14. Production Build

When the app is ready for deployment.

Run:

```bash
npm run build
```

This creates:

```
dist
```

Folder.

Inside it:

```
optimized JavaScript
minified CSS
static assets
```

These files are deployed to servers.

---

# 15. Vite Development vs Production

| Mode    | Purpose                   |
| ------- | ------------------------- |
| dev     | development server        |
| build   | production optimized code |
| preview | test production build     |

Commands:

```bash
npm run dev
npm run build
npm run preview
```

---

# 16. Real Project Example

Imagine building:

```
Ecommerce Website
```

Pages:

```
Home
Products
Cart
Checkout
```

Vite handles:

```
fast reload
module loading
optimized builds
```

Developers only focus on **React components**.

---

# 17. Common Mistakes

### 1 Wrong Node version

Always use Node ≥ 16.

---

### 2 Running project incorrectly

Always run:

```bash
npm run dev
```

Not:

```bash
node app.js
```

React apps are not simple Node scripts.

---

### 3 Editing index.html incorrectly

React rendering happens inside:

```html
<div id="root"></div>
```

Removing this breaks the app.

---

# 18. Mental Model

Think of Vite as:

```
Developer Toolchain
```

It manages:

```
JSX compilation
module loading
bundling
hot reload
build optimization
```

---

# 19. Synthesis Questions

1. Why can't browsers run JSX directly?
2. What problem does Vite solve?
3. What is the entry file in React?
4. What does ReactDOM do?
5. What is Hot Module Replacement?

---

# Next Topic

Next we organize React apps **properly for real projects**.

Next concept:

```
19. React Project Folder Structure
```

This is important because **large React apps can contain hundreds of components**.

We will learn:

```
scalable folder structure
separation of concerns
project organization used in production apps
```

Say:

```
19
```

and we will build a **professional React project structure used in real companies**.

# 19. React Project Folder Structure

Tag: **[BOTH]**

Subtopics

- Why folder structure matters
- Basic Vite structure
- Scalable React architecture
- Role of each folder
- Real project structure used in production

---

# 1. Problem — Why Folder Structure Matters

When learning React, small examples look simple.

Example:

```
App.jsx
Header.jsx
Footer.jsx
```

But real applications grow quickly.

Example real production UI:

```
Ecommerce App
 ├ Home Page
 ├ Product Page
 ├ Cart
 ├ Checkout
 ├ Profile
 ├ Admin Dashboard
```

Such apps may contain:

```
100+ components
50+ API calls
multiple pages
state management
hooks
utilities
```

If everything is inside one folder:

```
src
 ├ App.jsx
 ├ Header.jsx
 ├ Footer.jsx
 ├ ProductCard.jsx
 ├ LoginForm.jsx
 ├ Cart.jsx
 ├ Profile.jsx
 ├ ...
```

It becomes **very hard to maintain**.

Therefore React apps use **structured folder architecture**.

---

# 2. Default Vite React Structure

When you create a React app using Vite, the structure looks like this.

```
my-app
│
├ node_modules
├ public
├ src
│
├ index.html
├ package.json
├ vite.config.js
```

Important parts are inside **src**.

```
src
 ├ App.jsx
 ├ main.jsx
 ├ index.css
```

But this structure is **too small for real applications**.

So developers organize it further.

---

# 3. Professional React Folder Structure

A scalable React project usually follows this structure.

```
src
│
├ components
├ pages
├ hooks
├ services
├ context
├ utils
├ assets
│
├ App.jsx
├ main.jsx
```

Each folder has a **specific responsibility**.

This concept is called:

```
Separation of Concerns
```

Meaning:

```
each folder handles one type of responsibility
```

---

# 4. components Folder

Purpose:

```
Reusable UI components
```

Examples:

```
components
 ├ Button.jsx
 ├ Navbar.jsx
 ├ Card.jsx
 ├ Modal.jsx
 ├ Loader.jsx
```

Example component:

```javascript
function Button({ text }) {
  return <button>{text}</button>;
}

export default Button;
```

Usage:

```javascript
<Button text="Login" />
```

These components can be used across the entire app.

---

# 5. pages Folder

Pages represent **full screens**.

Example:

```
pages
 ├ Home.jsx
 ├ Login.jsx
 ├ Products.jsx
 ├ Cart.jsx
 ├ Profile.jsx
```

Example:

```javascript
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
```

Pages usually combine multiple components.

Example:

```
Home Page
 ├ Navbar
 ├ Banner
 ├ ProductList
 ├ Footer
```

---

# 6. hooks Folder

This folder stores **custom React hooks**.

Hooks contain reusable logic.

Example:

```
hooks
 ├ useFetch.js
 ├ useAuth.js
 ├ useWindowResize.js
```

Example hook:

```javascript
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
}

export default useFetch;
```

Usage:

```javascript
const users = useFetch("/api/users");
```

---

# 7. services Folder

Purpose:

```
API logic
```

Example:

```
services
 ├ authService.js
 ├ productService.js
 ├ userService.js
```

Example service:

```javascript
export async function getProducts() {
  const response = await fetch("/api/products");

  const data = await response.json();

  return data;
}
```

Now UI components remain **clean and simple**.

---

# 8. context Folder

Used for **global state management**.

Example:

```
context
 ├ AuthContext.jsx
 ├ ThemeContext.jsx
```

Example:

```javascript
import { createContext } from "react";

export const AuthContext = createContext();
```

Later we will learn **React Context API** in depth.

---

# 9. utils Folder

Utilities contain **helper functions**.

Example:

```
utils
 ├ formatDate.js
 ├ calculateTotal.js
 ├ validators.js
```

Example utility:

```javascript
export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
```

Utilities help avoid repeating code.

---

# 10. assets Folder

Contains **static resources**.

Examples:

```
assets
 ├ images
 ├ icons
 ├ fonts
```

Example:

```
assets/images/logo.png
assets/icons/cart.svg
```

Usage:

```javascript
import logo from "../assets/images/logo.png";
```

---

# 11. Example Real React Structure

Example production project:

```
src
│
├ assets
│   ├ images
│   └ icons
│
├ components
│   ├ Navbar.jsx
│   ├ ProductCard.jsx
│   └ Loader.jsx
│
├ pages
│   ├ Home.jsx
│   ├ ProductPage.jsx
│   └ Cart.jsx
│
├ hooks
│   ├ useFetch.js
│   └ useAuth.js
│
├ services
│   └ api.js
│
├ context
│   └ AuthContext.jsx
│
├ utils
│   └ formatCurrency.js
│
├ App.jsx
└ main.jsx
```

This architecture scales well even for **large projects**.

---

# 12. How React App Loads With This Structure

Flow:

```
index.html
   ↓
main.jsx
   ↓
App.jsx
   ↓
Pages
   ↓
Components
```

Visual example:

```
App
 ├ Routes
 │   ├ Home
 │   ├ Products
 │   └ Cart
```

Each page contains components.

---

# 13. Example App.jsx

```javascript
import Home from "./pages/Home";

function App() {
  return <Home />;
}

export default App;
```

App acts as the **root component**.

---

# 14. Why This Structure Works Well

Benefits:

### 1 Scalability

Project can grow without chaos.

---

### 2 Maintainability

Developers quickly find files.

---

### 3 Team Collaboration

Teams can work on different folders.

Example:

```
Frontend dev → components
Backend dev → services
```

---

# 15. Alternative Folder Structure (Feature-Based)

Large companies sometimes use:

```
src
 ├ features
 │   ├ auth
 │   ├ products
 │   ├ cart
```

Example:

```
features
 ├ auth
 │   ├ Login.jsx
 │   ├ authService.js
 │
 ├ cart
 │   ├ CartPage.jsx
 │   ├ cartSlice.js
```

This groups files **by feature instead of type**.

---

# 16. Common Mistakes

### 1 Giant components folder

```
components
 ├ 200 files
```

This becomes messy.

Better to group:

```
components
 ├ ui
 ├ forms
 ├ layout
```

---

### 2 Mixing API calls with UI

Bad:

```
ProductCard.jsx fetches API
```

Good:

```
services/productService.js handles API
```

---

# 17. Mental Model

Think of React structure like **a city**.

```
City
 ├ Residential (components)
 ├ Office (services)
 ├ Public areas (pages)
 ├ Utilities (utils)
```

Each area has a specific purpose.

---

# 18. Synthesis Questions

1. Why is folder structure important in React?
2. What is the difference between pages and components?
3. Why keep API logic inside services?
4. What are custom hooks used for?
5. What are utilities?

---

# Section 2 Summary

We completed **React foundation concepts**.

```
15  What React Is
16  Virtual DOM
17  Reconciliation
18  React Setup with Vite
19  Project Folder Structure
```

These concepts explain **how React works internally and how projects start**.

---

# Next Section

Next we move to the **core syntax of React**.

```
SECTION 3 — JSX System
```

First topic:

```
20. JSX Introduction
```

This is extremely important because **JSX is how React UI is written**.

JSX explains:

```
HTML inside JavaScript
dynamic UI rendering
React element creation
```

When ready say:

```
20
```

and we will go **deep into JSX internals and rules**.
