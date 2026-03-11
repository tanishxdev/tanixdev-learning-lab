# SECTION 6 — Props System

Before learning **state management and context**, React introduces **props**.

Props solve the **first communication problem in component-based UI**.

---

# 31. Props Basics

Tag: **[FRESHER]**

---

# 1. Problem

When we build UI using components, we quickly hit a problem.

Example UI:

```
Navbar
UserProfile
ProductCard
Comment
```

Each component needs **different data**.

Example:

```
ProductCard
   name
   price
   image
```

But the component itself **does not know the data**.

So we need a way to **send data into a component**.

That is what **props** solve.

---

# 2. Mental Model

Think of a component like a **function**.

```
function greet(name) {
   return "Hello " + name
}
```

We pass **arguments**.

Same idea in React.

Component receives **props (properties)**.

```
<ProductCard name="Laptop" price="50000" />
```

---

# 3. What Props Are

Props are:

```
inputs passed to components
```

They allow:

```
Parent Component → pass data → Child Component
```

Props are **read-only**.

Child components **cannot modify props**.

---

# 4. Basic Example

### Parent Component

```jsx
function App() {
  return (
    <div>
      {/* Passing props to component */}
      <User name="Tanish" age={21} />
    </div>
  );
}
```

---

### Child Component

```jsx
function User(props) {
  // props is an object containing all passed data

  return (
    <div>
      {/* Access props values */}
      <h2>Name: {props.name}</h2>

      <p>Age: {props.age}</p>
    </div>
  );
}
```

---

### Output

```
Name: Tanish
Age: 21
```

---

# 5. How Props Actually Work

When React renders this:

```
<User name="Tanish" age={21} />
```

React internally creates:

```
props = {
   name: "Tanish",
   age: 21
}
```

Then passes it to the component.

```
User(props)
```

---

# 6. Props with Dynamic Data

Props can accept **variables**.

```jsx
function App() {
  const username = "Tanish";

  return <User name={username} />;
}
```

Notice:

```
strings → quotes
variables → {}
```

---

# 7. Props with Objects

```jsx
function App() {
  const user = {
    name: "Tanish",
    age: 21,
  };

  return <User userData={user} />;
}
```

Child component:

```jsx
function User(props) {
  return (
    <div>
      <h2>{props.userData.name}</h2>

      <p>{props.userData.age}</p>
    </div>
  );
}
```

---

# 8. Props with Arrays

```jsx
function App() {
  const skills = ["React", "Node", "MongoDB"];

  return <Skills skillList={skills} />;
}
```

Child:

```jsx
function Skills(props) {
  return (
    <ul>
      {props.skillList.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}
```

---

# 9. Props with Functions

Props can also pass **functions**.

This enables **child → parent interaction**.

Example:

```jsx
function App() {
  function handleClick() {
    alert("Button clicked");
  }

  return <Button onClickHandler={handleClick} />;
}
```

Child:

```jsx
function Button(props) {
  return <button onClick={props.onClickHandler}>Click Me</button>;
}
```

---

# 10. Important Rules

### Props are immutable

Child cannot change props.

Bad:

```
props.name = "Rahul"
```

Correct:

Props should only be **read**.

---

### Props are one-way data flow

```
Parent → Child
```

React follows **unidirectional data flow**.

---

# 11. Real Example (Product Card)

```jsx
function ProductCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>

      <p>Price: ₹{props.price}</p>

      <p>Rating: {props.rating}</p>
    </div>
  );
}
```

Parent:

```jsx
function App() {
  return (
    <div>
      <ProductCard name="MacBook" price={120000} rating={4.8} />

      <ProductCard name="iPhone" price={80000} rating={4.6} />
    </div>
  );
}
```

---

# 12. Why Props Are Powerful

Props enable:

```
Reusable components
Dynamic UI
Component communication
Clean architecture
```

Without props, React components would be **static HTML**.

---

# 13. Real Production Examples

Props are used everywhere:

```
Button
Input
ProductCard
UserProfile
Navbar
Modal
Alert
```

Example:

```
<Button variant="primary" size="large" />
```

---

# 14. Edge Cases

### Passing Boolean Props

```jsx
<Button disabled />
```

Equivalent to:

```
disabled={true}
```

---

### Passing JSX as Props

```jsx
<Card title={<h2>Hello</h2>} />
```

---

### Passing Components

```jsx
<Card header={<Header />} />
```

---

# 15. Tradeoffs

Props advantages:

```
simple
predictable
easy debugging
```

Props limitations:

```
prop drilling
deep passing becomes messy
```

This leads to:

```
Context API
Redux
Zustand
```

---

# 16. Common Beginner Mistakes

### Forgetting {}

Wrong:

```
<User age="21" />
```

Correct:

```
<User age={21} />
```

---

### Mutating props

Never do:

```
props.age = 30
```

---

# 17. Mini Practice Example

Build:

```
UserCard
```

Props:

```
name
email
role
```

Example usage:

```
<UserCard
 name="Tanish"
 email="tanish@mail.com"
 role="Frontend Developer"
/>
```

---

# 18. Synthesis Questions

1. What are props in React?
2. Why are props read-only?
3. What is unidirectional data flow?
4. Can props pass functions?
5. Difference between props and state?
6. Why does prop drilling happen?
7. Can props pass JSX?
8. Can props pass arrays and objects?

---

# Summary

Props allow:

```
Parent → send data → Child
```

They are:

```
immutable
read-only
one-way
```

Props are the **first communication system in React**.

---

# Next Topics in This Section

Next concepts build directly on this:

**32. Props Destructuring**
**33. Default Props**
**34. Prop Drilling Problem**

These are **very important for writing clean React code**.

If you want, I can continue immediately with:

```
32. Props Destructuring
```

This will show **how professional React developers write props code cleaner**.

# 33. Default Props

Tag: **[FRESHER]**

Default props solve a very common UI problem.

When a component expects some props but **the parent does not provide them**, the component can break or show incorrect UI.

Default props allow us to **define fallback values**.

---

# 1. Problem

Consider a simple component.

```jsx
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.role}</p>
    </div>
  );
}
```

Parent component:

```jsx
<UserCard name="Tanish" />
```

Output:

```
Tanish
undefined
```

Why?

Because the **role prop was not provided**.

This produces **broken UI**.

Example problems in real apps:

```
Avatar missing
Role missing
Profile image missing
Price missing
```

So we need **safe fallback values**.

---

# 2. Concept

Default props allow a component to **automatically assign a value if the prop is missing**.

Think of it like this:

```
If prop exists → use it
If prop missing → use default value
```

Example:

```
name = "Tanish"
role = "Developer"
```

If parent does not pass role → React uses `"Developer"`.

---

# 3. Mental Model

Component input:

```
props → data from parent
```

Default props act like:

```
props OR fallback value
```

So internally:

```
role = props.role || "Developer"
```

---

# 4. Default Props (Modern Approach)

The **modern React approach** is using **default values during destructuring**.

Example:

```jsx
function UserCard({ name, role = "Developer" }) {
  return (
    <div>
      <h2>{name}</h2>

      <p>{role}</p>
    </div>
  );
}
```

Parent:

```jsx
<UserCard name="Tanish" />
```

Output:

```
Tanish
Developer
```

Because `role` was missing.

---

# 5. Full Example

Parent component:

```jsx
function App() {
  return (
    <div>
      {/* role missing */}
      <UserCard name="Tanish" />

      {/* role provided */}
      <UserCard name="Rahul" role="Backend Developer" />
    </div>
  );
}
```

Child component:

```jsx
function UserCard({ name, role = "Frontend Developer" }) {
  return (
    <div>
      <h2>{name}</h2>

      <p>{role}</p>
    </div>
  );
}
```

Output:

```
Tanish
Frontend Developer

Rahul
Backend Developer
```

---

# 6. Default Props with Multiple Values

You can set multiple defaults.

```jsx
function ProductCard({
  name = "Unknown Product",

  price = 0,

  rating = 4,
}) {
  return (
    <div>
      <h2>{name}</h2>

      <p>Price: ₹{price}</p>

      <p>Rating: {rating}</p>
    </div>
  );
}
```

Usage:

```jsx
<ProductCard name="Laptop" price={50000} />
```

Output:

```
Laptop
Price: 50000
Rating: 4
```

---

# 7. Default Props for Objects

Example:

```jsx
function Profile({ user = {} }) {
  return (
    <div>
      <h2>{user.name}</h2>

      <p>{user.role}</p>
    </div>
  );
}
```

Usage:

```jsx
<Profile />
```

If `user` is undefined → default `{}` prevents crash.

---

# 8. Default Props for Arrays

Example:

```jsx
function Skills({ skills = [] }) {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}
```

Without default value:

```
Cannot read property map of undefined
```

Default props prevent this.

---

# 9. Older React Method (Class Components)

In class components we used:

```jsx
class UserCard extends React.Component {
  static defaultProps = {
    role: "Developer",
  };

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>

        <p>{this.props.role}</p>
      </div>
    );
  }
}
```

Modern React rarely uses this because **functional components dominate now**.

---

# 10. Important Rule

Default props apply **only when prop is undefined**.

Example:

```jsx
<UserCard name="Tanish" role={null} />
```

Output:

```
Tanish
null
```

Why?

Because `null` is **not undefined**.

So default props **do not apply**.

---

# 11. Real Production Example

Reusable Button component.

```jsx
function Button({
  text = "Click",

  type = "primary",

  disabled = false,
}) {
  return <button disabled={disabled}>{text}</button>;
}
```

Usage:

```jsx
<Button />

<Button text="Submit" />

<Button text="Delete" disabled />
```

---

# 12. Edge Cases

### Undefined

Default value applies.

```
prop = undefined
```

### Null

Default value **does NOT apply**.

```
prop = null
```

### Empty string

Default value **does NOT apply**.

```
prop = ""
```

---

# 13. Why Default Props Matter

In real production apps:

Many props can be **optional**.

Example:

```
Avatar image
User bio
Discount price
Ratings
Profile banner
```

Default props ensure:

```
UI never breaks
Components remain reusable
Code becomes safer
```

---

# 14. Tradeoffs

Advantages:

```
clean code
safe components
reusable UI
```

Limitations:

```
does not handle null values
cannot replace proper validation
```

Advanced apps often combine with:

```
PropTypes
TypeScript
```

---

# 15. Mini Practice Example

Build a **BlogCard** component.

Props:

```
title
author
likes
```

Defaults:

```
author = "Anonymous"
likes = 0
```

Usage:

```jsx
<BlogCard title="React Basics" />
```

Output:

```
React Basics
Author: Anonymous
Likes: 0
```

---

# 16. Synthesis Questions

1. What problem do default props solve?
2. When does React apply default props?
3. Do default props apply to `null` values?
4. Why are default props useful in reusable components?
5. How do you define default props in functional components?
6. How were default props defined in class components?
7. Why do arrays often use default props?

---

# Summary

Default props provide:

```
fallback values for missing props
```

Modern syntax:

```jsx
function Component({ prop = defaultValue })
```

This ensures **stable and predictable components**.

---

# Next Topic

Next concept is extremely important for React architecture.

**34. Prop Drilling Problem**

This explains **why React created Context API and state management libraries**.

It appears when **props must travel through many components**.

If you want, I can explain it deeply next.

# 34. Prop Drilling Problem

Tag: **[BOTH]**

Subtopics

- deep component trees
- state passing issues

---

# 1. Problem

React follows **unidirectional data flow**.

```
Parent → Child → Child → Child
```

Data always moves **top → down**.

This works well for small apps.

But in real applications, the component tree becomes deep.

Example structure:

```
App
 ├─ Navbar
 ├─ Sidebar
 └─ Dashboard
     └─ UserPanel
         └─ UserProfile
             └─ Avatar
```

Now imagine the **Avatar component needs user data**.

But the data exists in **App component**.

```
App (has user data)
Avatar (needs user data)
```

So the data must travel through every component in between.

```
App → Dashboard → UserPanel → UserProfile → Avatar
```

Even if those middle components **do not use the data**.

This is called **Prop Drilling**.

---

# 2. Definition

Prop Drilling is when:

```
A prop must pass through multiple components
that don't actually need the prop,
just to reach a deeply nested component.
```

Example:

```
App → A → B → C → D
```

If **D needs the data**, then:

```
App passes prop to A
A passes prop to B
B passes prop to C
C passes prop to D
```

This creates **unnecessary prop passing**.

---

# 3. Example Without Prop Drilling

Small component tree:

```jsx
function App() {
  return <UserProfile name="Tanish" />;
}
```

```
App → UserProfile
```

Works fine.

---

# 4. Example With Prop Drilling

Now imagine deeper structure.

```
App
  ↓
Dashboard
  ↓
UserPanel
  ↓
UserProfile
  ↓
Avatar
```

---

## Step 1 — App Component

```jsx
function App() {
  const user = "Tanish";

  return <Dashboard user={user} />;
}
```

---

## Step 2 — Dashboard Component

```jsx
function Dashboard(props) {
  return <UserPanel user={props.user} />;
}
```

Dashboard **does not use user**, but must pass it.

---

## Step 3 — UserPanel Component

```jsx
function UserPanel(props) {
  return <UserProfile user={props.user} />;
}
```

Again **not used here**.

---

## Step 4 — UserProfile Component

```jsx
function UserProfile(props) {
  return <Avatar user={props.user} />;
}
```

Still passing it.

---

## Step 5 — Avatar Component

```jsx
function Avatar(props) {
  return <h2>{props.user}</h2>;
}
```

Finally used here.

---

# 5. Visualization

```
App
 │
 │ user
 ▼
Dashboard
 │
 │ user
 ▼
UserPanel
 │
 │ user
 ▼
UserProfile
 │
 │ user
 ▼
Avatar
```

Many components **just forward props**.

This becomes messy.

---

# 6. Why Prop Drilling Is a Problem

### 1. Hard to maintain

If prop name changes:

```
user → currentUser
```

You must update **every intermediate component**.

---

### 2. Difficult to refactor

Adding or removing components breaks prop chains.

---

### 3. Poor readability

Components get filled with props they don't use.

Example:

```jsx
<UserPanel user={user} theme={theme} permissions={permissions} />
```

Even if **UserPanel doesn't use them**.

---

### 4. Tight coupling

Components become dependent on parent structure.

---

# 7. Real Production Example

Consider an e-commerce app.

```
App
 ├─ Layout
 │   ├─ Header
 │   └─ Sidebar
 └─ ProductPage
     └─ ProductDetails
         └─ AddToCartButton
```

Cart state exists in **App**.

But **AddToCartButton** needs it.

Without a solution:

```
App → Layout → ProductPage → ProductDetails → Button
```

Props must travel through **4 layers**.

---

# 8. When Prop Drilling Is NOT a Problem

Prop drilling is acceptable when:

```
component depth is small
```

Example:

```
App → Card → Button
```

Passing props here is **completely fine**.

---

# 9. When Prop Drilling Becomes Bad

When the component tree becomes:

```
4+ levels deep
```

Or when many props travel together:

```
user
theme
permissions
settings
auth
language
```

Then prop drilling becomes messy.

---

# 10. Solutions to Prop Drilling

React ecosystem introduced solutions.

---

## 1. Context API

Allows global sharing.

```
Provider → any component can access
```

Example structure:

```
UserContext
    ↓
Avatar
```

No intermediate props required.

---

## 2. State Management Libraries

Large apps often use:

```
Redux Toolkit
Zustand
MobX
```

These allow components to **directly access state**.

---

# 11. Example Solution Using Context (Preview)

Without context:

```
App → A → B → C → D
```

With context:

```
Context Provider
       ↓
Component D accesses data directly
```

Intermediate components **do nothing**.

---

# 12. Code Comparison

### Prop Drilling

```jsx
<App user={user} />

<Dashboard user={user} />

<UserPanel user={user} />

<UserProfile user={user} />

<Avatar user={user} />
```

---

### Context

```jsx
<UserProvider>
  <Avatar />
</UserProvider>
```

Inside Avatar:

```jsx
const user = useContext(UserContext);
```

No drilling.

---

# 13. Tradeoffs

Prop Drilling advantages:

```
simple
explicit data flow
easy debugging
```

Prop Drilling disadvantages:

```
deep component trees become messy
hard to maintain
many unused props
```

---

# 14. Best Practice

Use props when:

```
data used by few components
tree depth is small
```

Use Context or global state when:

```
data shared across many components
deep component trees
```

---

# 15. Real Data That Often Causes Prop Drilling

Common examples:

```
User authentication
Theme settings
Language settings
Shopping cart
Permissions
Notifications
```

These usually become **global state**.

---

# 16. Mini Practice Example

Imagine:

```
App
 └─ Layout
     └─ Sidebar
         └─ Profile
```

Profile needs **user name**.

Try implementing:

```
Prop Drilling version
Context version
```

You will see the difference clearly.

---

# 17. Synthesis Questions

1. What is prop drilling?
2. Why does prop drilling happen in React?
3. When is prop drilling acceptable?
4. Why does prop drilling harm maintainability?
5. How does Context API solve prop drilling?
6. What state management libraries replace prop drilling?

---

# Section 6 Summary

This section taught the **React communication system**.

### 1. Props Basics

```
Parent → Child communication
```

### 2. Props Destructuring

Cleaner way to access props.

### 3. Default Props

Fallback values for missing props.

### 4. Prop Drilling

Problem caused by deep prop passing.

---

# Next Section

Next section moves into **Styling React Apps**.

Topics include:

```
CSS files
Inline styles
CSS modules
Styled components
```

This is where **UI styling patterns in React** begin.

If you want, we can continue with:

```
SECTION 7 — Styling React Apps
```

# State Management in React

(Concepts, Context API, and External Tools)

Before understanding **Redux, Zustand, or React Query**, you must understand **what state management actually means**.

Many developers memorize tools but **never understand the real problem** those tools solve.

So we start from the **core problem**.

---

# 1. The Real Problem: State in UI

Modern UI is **dynamic**.

Examples:

```
cart items
logged-in user
dark mode
notifications
messages
form data
API data
```

These values **change over time**.

Example:

```
cartItems = 0
cartItems = 1
cartItems = 2
```

Whenever data changes → **UI must update automatically**.

React solves this using **state**.

---

# 2. What State Means in React

State means:

```
data that can change and affects the UI
```

Example:

```jsx
const [count, setCount] = useState(0);
```

Here:

```
count = state value
setCount = function to update state
```

When state changes → **React re-renders the component**.

---

# 3. Local State vs Global State

React apps usually contain **two types of state**.

## 1. Local State

State used **inside one component**.

Example:

```
input value
toggle button
modal open/close
```

Code example:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return <button onClick={increase}>Count: {count}</button>;
}
```

This state belongs **only to this component**.

---

## 2. Global State

State used by **many components**.

Example:

```
user authentication
shopping cart
theme
language
notifications
```

Example structure:

```
Navbar
CartPage
CheckoutPage
```

All three need **cart data**.

So this becomes **global state**.

---

# 4. The Real Issue: Sharing State

React follows:

```
Parent → Child data flow
```

But if many components need the same state:

```
App
 ├─ Navbar
 ├─ Products
 └─ Checkout
```

All need:

```
cart
user
theme
```

Passing them through props creates:

```
prop drilling
```

This is the **core reason state management tools exist**.

---

# 5. State Management Levels in React

React applications evolve in stages.

```
Level 1 → Local state
Level 2 → Lifted state
Level 3 → Context API
Level 4 → Global state libraries
Level 5 → Server state tools
```

Each level solves **bigger problems**.

---

# 6. Level 1: Local State (useState)

Used when state belongs to **one component**.

Example:

```
form input
button toggle
counter
modal visibility
```

Example:

```jsx
function ThemeToggle() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!dark);
  }

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}
```

Simple and effective.

---

# 7. Level 2: Lifted State

Sometimes two components need the same state.

Example:

```
SearchBar
ProductList
```

SearchBar updates query.

ProductList filters products.

Solution:

```
Move state to parent component
```

Example:

```
App
 ├─ SearchBar
 └─ ProductList
```

Code example:

```jsx
function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <ProductList search={search} />
    </>
  );
}
```

This is called **lifting state up**.

---

# 8. Level 3: Context API

Context API solves **prop drilling**.

Instead of passing props through many layers:

```
App → A → B → C → D
```

We create **global context**.

Example structure:

```
UserContext
   ↓
Any component can access
```

---

# Context API Example

### Step 1: Create Context

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

### Step 2: Create Provider

```jsx
import { useState } from "react";
import { UserContext } from "./UserContext";

function UserProvider({ children }) {
  const [user, setUser] = useState("Tanish");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
```

---

### Step 3: Wrap App

```jsx
<UserProvider>
  <App />
</UserProvider>
```

---

### Step 4: Access Context

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return <h2>{user}</h2>;
}
```

Now **any component can access user state**.

No prop drilling.

---

# Limitations of Context API

Context is good for:

```
theme
auth user
language
global settings
```

But large applications need **better performance and structure**.

This is where libraries appear.

---

# 9. Level 4: Global State Libraries

These libraries manage **application-wide state**.

Common tools:

```
Redux Toolkit
Zustand
MobX
Recoil
Jotai
```

Most popular today:

```
Redux Toolkit
Zustand
```

---

# Redux Toolkit

Redux manages **centralized state store**.

Structure:

```
Store
Reducers
Actions
Selectors
```

Example idea:

```
store
 ├─ userSlice
 ├─ cartSlice
 └─ productSlice
```

Example reducer:

```js
const cartSlice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
  },
});
```

Redux is powerful but **more complex**.

---

# Zustand

Zustand is a **lightweight global state library**.

Much simpler than Redux.

Example:

```js
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,

  increase: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}));
```

Usage:

```jsx
function Counter() {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);

  return <button onClick={increase}>{count}</button>;
}
```

Very simple.

---

# 10. Level 5: Server State Management

There is another type of state.

```
data coming from server
```

Example:

```
products
users
orders
posts
comments
```

Managing this manually is hard.

Problems:

```
loading states
caching
refetching
stale data
background updates
```

Tools for this:

```
React Query (TanStack Query)
SWR
```

Example with React Query:

```jsx
const { data, isLoading } = useQuery({
  queryKey: ["products"],

  queryFn: fetchProducts,
});
```

It handles:

```
caching
background refetch
retry
loading state
```

Automatically.

---

# 11. Modern React State Architecture

Modern React apps usually use:

```
Local state → useState
Shared state → Context / Zustand
Server state → React Query
```

Typical architecture:

```
React App
 │
 ├─ Local State (useState)
 │
 ├─ Global State
 │     ├─ Context API
 │     └─ Zustand / Redux
 │
 └─ Server State
       └─ React Query
```

---

# 12. Real Production Example

E-commerce application.

State types:

```
cart items → global state
theme → context
auth user → context
product list → server state
form inputs → local state
```

Tools used:

```
useState
Context API
Zustand
React Query
```

---

# 13. When to Use What

| Situation                     | Tool            |
| ----------------------------- | --------------- |
| Small component state         | useState        |
| Shared between few components | Lifted state    |
| Global UI state               | Context API     |
| Large global state            | Redux / Zustand |
| Server data                   | React Query     |

---

# 14. Tradeoffs

## Context API

Pros

```
built into React
simple
good for small global state
```

Cons

```
rerender issues in large apps
not ideal for complex state
```

---

## Redux Toolkit

Pros

```
predictable architecture
great for large apps
powerful devtools
```

Cons

```
boilerplate
learning curve
```

---

## Zustand

Pros

```
very simple
minimal code
fast
```

Cons

```
less structured
smaller ecosystem
```

---

# 15. Synthesis Questions

1. What is state in React?
2. Difference between local and global state?
3. What problem does Context API solve?
4. What is prop drilling?
5. Why do global state libraries exist?
6. When should Redux be used?
7. Why is React Query different from Redux?
8. What type of state does React Query manage?

---

# Final Mental Model

Think of state like **three layers**.

```
Component State
      ↓
Global App State
      ↓
Server Data State
```

Handled by:

```
useState
Context / Redux / Zustand
React Query
```

---

If you want, I can also explain **one extremely important concept next** that many React developers misunderstand:

```
How React re-rendering actually works
```

Understanding that will make **state management 10x clearer.**
