# SECTION 11 — Global State Patterns

---

## 49. Context API

---

### 1. Problem (Very Basic Understanding First)

Let’s start from absolute scratch.

#### Situation

You have this component tree:

```
App
 └── Page
      └── Profile
           └── Button
```

Now suppose **App has user data**:

```js
const user = { name: "Tanish" };
```

And **Button needs it**

---

#### Without Context (Normal Way)

You must pass it step by step:

```
App → Page → Profile → Button
```

```jsx
function App() {
  const user = { name: "Tanish" };

  return <Page user={user} />;
}

function Page({ user }) {
  return <Profile user={user} />;
}

function Profile({ user }) {
  return <Button user={user} />;
}

function Button({ user }) {
  return <h1>{user.name}</h1>;
}
```

---

### 2. Why This Is Bad (Important)

#### 1. Unnecessary Passing

Components become **middleman**

---

#### 2. Maintenance Problem

If you rename `user → currentUser`

You must update everywhere:

```
App → Page → Profile → Button
```

---

#### 3. Scaling Problem

Imagine:

```
10 levels deep
20 props
multiple features
```

Becomes very hard to manage.

---

### 3. Intuition (Real Life Analogy)

#### Without Context

```
You → Friend → Friend → Friend → Person
```

---

#### With Context

```
Bank (Context)
   ↑       ↑
Component  Component
```

You put data in one place, anyone can access directly.

---

### 4. Concept

**Context API = Built-in global state system in React**

It allows:

- Sharing data across components
- Avoiding prop drilling
- Centralized state

---

### 5. Core Building Blocks

#### 1. createContext()

Creates a global container:

```jsx
const MyContext = createContext();
```

---

#### 2. Provider

Wraps components and provides data:

```jsx
<MyContext.Provider value={data}>
```

---

#### 3. Consumer

Reads data (old way)

---

### 6. Basic Flow

```
Create Context
    ↓
Wrap App with Provider
    ↓
Access data inside child
```

---

### 7. Step-by-Step Code (Clear)

---

#### Step 1 — Create Context

```jsx
// themeContext.js

import { createContext } from "react";

// Create a context (empty box)
export const ThemeContext = createContext();
```

---

#### Step 2 — Provide Value

```jsx
// App.jsx

import { ThemeContext } from "./themeContext";
import Child from "./Child";

function App() {
  // Global data
  const theme = "dark";

  return (
    // Provider gives value to all children
    <ThemeContext.Provider value={theme}>
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;
```

---

#### Key Understanding

```
Everything inside Provider can access "theme"
```

---

#### Step 3 — Consume Value (Old Way)

```jsx
// Child.jsx

import { ThemeContext } from "./themeContext";

function Child() {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        // value = "dark"
        return <h1>Theme: {value}</h1>;
      }}
    </ThemeContext.Consumer>
  );
}

export default Child;
```

---

### 8. Internal Working (Simple Thinking)

```
Provider stores value → "dark"

Child asks:
"Give me value from ThemeContext"

React returns → "dark"
```

---

### 9. Visual Flow

```
App (Provider: dark)
        ↓
   Child (Consumer)
        ↓
   Gets value directly
```

---

### 10. Key Observations

#### 1. No Prop Passing

We didn’t pass props manually.

---

#### 2. Global Access

Any component inside Provider can access:

```
Navbar
Sidebar
Footer
Button
```

---

#### 3. Scope Based

Only components inside Provider can access it.

---

### 11. Real Example — Auth System

---

#### Step 1

```jsx
export const AuthContext = createContext();
```

---

#### Step 2

```jsx
function App() {
  const user = {
    name: "Tanish",
    isLoggedIn: true,
  };

  return (
    <AuthContext.Provider value={user}>
      <Dashboard />
    </AuthContext.Provider>
  );
}
```

---

#### Step 3

```jsx
function Dashboard() {
  return (
    <AuthContext.Consumer>
      {(user) => {
        if (user.isLoggedIn) {
          return <h1>Welcome {user.name}</h1>;
        } else {
          return <h1>Please Login</h1>;
        }
      }}
    </AuthContext.Consumer>
  );
}
```

---

### 12. Edge Cases

#### Case 1 — No Provider

```
value = undefined
```

---

#### Case 2 — Multiple Providers

```jsx
<ThemeContext.Provider value="dark">
  <ThemeContext.Provider value="light">
    <Child />
  </ThemeContext.Provider>
</ThemeContext.Provider>
```

Result:

```
"light"
```

Nearest provider wins.

---

#### Case 3 — Re-render

If value changes:

```
All consumers re-render
```

---

### 13. Tradeoffs

#### Pros

- Avoid prop drilling
- Built-in solution
- Easy to use

#### Cons

- Causes re-renders
- Not good for large apps
- Hard to scale

---

### 14. When To Use

#### Use for:

```
Theme
Auth
Language
Small global data
```

---

#### Avoid for:

```
Large apps
Complex logic
Frequent updates
```

---

### 15. Final Mental Model

```
Context = Global Storage

Provider = Stores data

Consumer = Reads data

No prop passing needed
```

---

### 16. Mini Practice

Build:

```
Theme switcher (dark / light)
Use context
Access in multiple components
```

---

### 17. Synthesis Questions

1. Why is prop drilling a problem?
2. How does Context solve it?
3. What happens without Provider?
4. Which Provider is used if multiple exist?
5. Why not use Context for large apps?

---

### Most Important Line

```
Context lets components access data directly without passing props manually
```

# SECTION 11 — Global State Patterns

---

## 50. useContext Hook

---

### 1. Problem (Why do we need this?)

In Context API (previous topic), we used:

```jsx
<ThemeContext.Consumer>{(value) => <h1>{value}</h1>}</ThemeContext.Consumer>
```

---

#### Problems with this approach

- Code becomes **nested and hard to read**
- Every time we need data → we must wrap JSX
- Not scalable for real projects

---

#### Real Issue

If many components use context:

```id="p1"
Too many Consumers → messy UI → difficult debugging
```

---

### 2. Intuition

We want this:

```id="p2"
Access context like a normal variable
```

Instead of:

```id="p3"
Wrapper → function → return JSX
```

---

### 3. Concept

**useContext = Hook to directly read data from Context**

---

### Syntax

```jsx
const value = useContext(MyContext);
```

---

### Important Rule

```id="rule"
Must be used inside a component
AND inside a Provider
```

---

### 4. Full Flow

```id="flow"
Create Context
   ↓
Wrap with Provider
   ↓
useContext() to read value
```

---

### 5. Step-by-Step Code

---

#### Step 1 — Create Context

```jsx
// themeContext.js

import { createContext } from "react";

// Create context
export const ThemeContext = createContext();
```

---

#### Step 2 — Provide Value

```jsx
// App.jsx

import { ThemeContext } from "./themeContext";
import Child from "./Child";

function App() {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;
```

---

#### Step 3 — Use useContext

```jsx
// Child.jsx

import { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Child() {
  // Direct access (no Consumer wrapper)
  const theme = useContext(ThemeContext);

  return <h1>Theme: {theme}</h1>;
}

export default Child;
```

---

### 6. Output

```id="out"
Theme: dark
```

---

### 7. Internal Working (Simple)

```id="internal"
useContext(ThemeContext)

→ React finds nearest Provider
→ reads value
→ returns it
```

---

### 8. Old vs New

#### Old (Consumer)

```jsx
<ThemeContext.Consumer>{(value) => <h1>{value}</h1>}</ThemeContext.Consumer>
```

---

#### New (useContext)

```jsx
const value = useContext(ThemeContext);
```

---

#### Conclusion

```id="clean"
Cleaner
Readable
Modern
```

---

### 9. Real Example — Auth System

---

#### Context

```jsx
export const AuthContext = createContext();
```

---

#### Provider

```jsx
function App() {
  const user = {
    name: "Tanish",
    isLoggedIn: true,
  };

  return (
    <AuthContext.Provider value={user}>
      <Dashboard />
    </AuthContext.Provider>
  );
}
```

---

#### Using useContext

```jsx
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Dashboard() {
  const user = useContext(AuthContext);

  if (user.isLoggedIn) {
    return <h1>Welcome {user.name}</h1>;
  }

  return <h1>Please Login</h1>;
}
```

---

### 10. Multiple Contexts

You can use multiple contexts:

```jsx
const theme = useContext(ThemeContext);
const user = useContext(AuthContext);
```

---

### 11. Edge Cases

---

#### Case 1 — Outside Provider

```id="c1"
value = undefined
```

---

#### Case 2 — Re-render

```id="c2"
Value change → component re-renders
```

---

#### Case 3 — Performance

Frequent updates → unnecessary re-renders

---

### 12. Common Mistakes

---

#### Mistake 1

```jsx
useContext outside component ❌
```

---

#### Mistake 2

```jsx
Wrong context passed ❌
```

---

#### Mistake 3

Provider missing

---

### 13. Tradeoffs

#### Pros

- Very clean syntax
- Easy to use
- Replaces Consumer

---

#### Cons

- Causes re-renders
- Not good for heavy state
- Limited scalability

---

### 14. When To Use

#### Use for:

```id="use"
Theme
Auth
Settings
Small global state
```

---

#### Avoid for:

```id="avoid"
Large apps
Complex logic
Frequent updates
```

---

### 15. Mental Model

```id="mental"
useContext = shortcut to read global data
```

---

### 16. Mini Practice

Build:

```id="practice"
User system
- store user in context
- access in navbar + dashboard
```

---

### 17. Synthesis Questions

1. Why is useContext better than Consumer?
2. What happens if used outside Provider?
3. Can multiple contexts be used in one component?
4. Does useContext cause re-render?
5. When should you avoid useContext?

---

### Most Important Line

```id="gold"
useContext lets you access global state like a normal variable
```

# SECTION 11 — Global State Patterns

---

## 51. useReducer Hook

---

### 1. Problem (Why do we need useReducer?)

Till now, we used:

```jsx id="p1"
useState();
```

---

### Problem with useState

Works well for simple state:

```jsx id="p2"
const [count, setCount] = useState(0);
```

---

But fails when state becomes complex:

#### Example

```jsx id="p3"
const [state, setState] = useState({
  count: 0,
  user: null,
  loading: false,
});
```

Now updating becomes messy:

```jsx id="p4"
setState({ ...state, count: state.count + 1 });
setState({ ...state, loading: true });
setState({ ...state, user: data });
```

---

### Problems

- Logic scattered everywhere
- Hard to manage multiple updates
- Difficult debugging
- Not scalable

---

### Real Problem

```id="p5"
Complex state + multiple actions = chaos
```

---

### 2. Intuition

Instead of writing logic everywhere…

We centralize it in one place.

---

### Real Life Analogy

Think:

```id="analogy"
Restaurant system

Customer → gives order (action)
Kitchen → processes order (reducer)
Result → final dish (new state)
```

---

### 3. Concept

**useReducer = Advanced state management hook**

It uses:

- State
- Actions
- Reducer function

---

### Key Idea

```id="idea"
Action → Reducer → New State
```

---

### 4. Syntax

```jsx id="syntax"
const [state, dispatch] = useReducer(reducer, initialState);
```

---

### Meaning

| Part         | Role                      |
| ------------ | ------------------------- |
| state        | current data              |
| dispatch     | sends action              |
| reducer      | decides how state changes |
| initialState | starting state            |

---

### 5. Core Components

---

#### 1. Initial State

```jsx id="init"
const initialState = { count: 0 };
```

---

#### 2. Reducer Function

```jsx id="reducer"
function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }

  if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  }

  return state;
}
```

---

#### 3. useReducer Hook

```jsx id="hook"
const [state, dispatch] = useReducer(reducer, initialState);
```

---

### 6. Step-by-Step Example (Counter)

---

```jsx id="example1"
import React, { useReducer } from "react";

// Step 1: initial state
const initialState = { count: 0 };

// Step 2: reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function Counter() {
  // Step 3: hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* display state */}
      <h1>{state.count}</h1>

      {/* send actions */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
    </div>
  );
}

export default Counter;
```

---

### 7. Flow Understanding (Very Important)

```id="flow"
Click Button
   ↓
dispatch({ type: "INCREMENT" })
   ↓
reducer runs
   ↓
new state returned
   ↓
UI updates
```

---

### 8. With Payload (More Realistic)

---

```jsx id="payload"
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { count: state.count + action.payload };

    default:
      return state;
  }
}
```

---

```jsx id="usepayload"
<button onClick={() => dispatch({ type: "ADD", payload: 5 })}>Add 5</button>
```

---

### 9. Real Example — Form State

---

```jsx id="form"
const initialState = {
  name: "",
  email: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };

    case "SET_EMAIL":
      return { ...state, email: action.payload };

    default:
      return state;
  }
}
```

---

### 10. Why Better than useState?

| useState          | useReducer        |
| ----------------- | ----------------- |
| Simple            | Complex logic     |
| Scattered updates | Centralized logic |
| Hard to scale     | Easy to manage    |
| Not structured    | Structured        |

---

### 11. When to Use

#### Use useReducer when:

```id="use"
Complex state
Multiple actions
Dependent updates
Large components
```

---

#### Avoid when:

```id="avoid"
Simple state (counter, toggle)
```

---

### 12. Edge Cases

---

#### Case 1 — Must return state

```jsx id="case1"
default:
  return state;
```

---

#### Case 2 — Do NOT mutate state

Wrong:

```jsx id="wrong"
state.count++;
```

Correct:

```jsx id="correct"
return { count: state.count + 1 };
```

---

### 13. Tradeoffs

#### Pros

- Clean structure
- Predictable updates
- Scalable
- Debuggable

---

#### Cons

- More boilerplate
- Harder for beginners

---

### 14. Mental Model

```id="mental"
dispatch = request

reducer = logic

state = result
```

---

### 15. Mini Practice

Build:

```id="practice"
Cart system
- add item
- remove item
- update quantity
```

---

### 16. Synthesis Questions

1. Why is useReducer better than useState for complex logic?
2. What is dispatch?
3. What is reducer’s role?
4. What happens if reducer doesn’t return state?
5. Why should state not be mutated?

---

### Most Important Line

```id="gold"
useReducer centralizes state logic into one predictable function
```
