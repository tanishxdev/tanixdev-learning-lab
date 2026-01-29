## 11. What is a stateful component?

---

### Concepts

**What a stateful component is**
A stateful component is a React component that **stores and manages its own data** using state.

If a component can:

- Remember values
- Change values over time
- Re-render based on those changes

→ it is stateful.

---

**Why stateful components exist**
UI is not static. Real apps need:

- Input values
- Toggle states
- Loading flags
- Counters
- API data
- Form values

State allows a component to:

- Remember data
- React to user actions
- Update UI dynamically

Without state:

- UI would be static
- No interaction
- No dynamic behavior

---

**Mental model**

Think like this:

```
Stateless component:
Input → UI (no memory)

Stateful component:
State (memory) → UI
Event → State change → UI update
```

So:

```
User action
 → state changes
 → component re-runs
 → UI updates
```

---

**Internal working model**

1. Component renders
2. State is stored by React
3. Event happens
4. State updates
5. React re-runs component
6. New UI is rendered

The component does not mutate UI —
It changes state, React handles UI updates.

---

**Connection to real React usage**

Stateful components are used for:

- Forms
- Counters
- Modals
- Tabs
- Toggles
- API-driven pages
- Dashboards
- Filters

Almost every real app component is stateful.

---

### Code Example

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

**Why this is stateful**

- `count` is stored in state
- Value changes over time
- UI depends on state

---

**Real-world usage scenario**

- Shopping cart count
- Login form inputs
- Theme toggle
- Notification badge

All are stateful components.

---

### Interview Answer

A stateful component is a React component that manages its own data using state. It can store values, update them over time, and re-render the UI when the state changes.

---

### Follow-up Interview Questions (with short answers)

1. **Can functional components be stateful?**
   Yes, using hooks like `useState`.

2. **Are all components stateful?**
   No, some are purely presentational (stateless).

3. **What makes a component stateless?**
   No state, only props.

4. **Where is state stored?**
   Internally by React, linked to the component.

5. **Should every component have state?**
   No. Only when it needs to manage data.

---

## 12. Can you explain how `useState` works?

---

### Concepts

**What `useState` is**
`useState` is a React Hook that allows functional components to:

- Store data (state)
- Update data
- Re-render UI when data changes

Before hooks, this was only possible in class components.

---

**Why `useState` exists**
Functional components were:

- Simple
- But stateless

`useState` was created to:

- Add memory to functions
- Make functional components powerful
- Remove the need for class components

---

**Mental model**

Think of `useState` as:

```
Memory slot inside React for a component
```

Flow:

```
useState(initialValue)
 → React stores value
 → gives you:
    - current value
    - function to update it
```

So:

```
State lives in React
Component just reads it
```

---

**How `useState` works internally**

```js
const [state, setState] = useState(value);
```

Means:

- React creates a state slot
- Links it to the component instance
- Keeps it between renders
- On `setState`, React:
  - Updates stored value
  - Re-runs the component
  - Updates UI

Important:

> State does not change immediately in your variable — it changes in React’s memory.

---

**Important rules**

1. Hooks must be called at the top level
2. Hooks must be called in React components
3. Hooks must not be inside loops/conditions

Why: React tracks hooks by order.

---

**Connection to real usage**

- Forms
- API data
- UI toggles
- Loading flags
- Pagination
- Filters

---

### Code Example

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
}
```

**What happens**

1. `useState(0)` → creates state
2. `count` gets value
3. `setCount` updates state in React
4. Component re-runs
5. UI updates

---

**Mini-project idea**

- Build a counter with + / – buttons
- Build a toggle switch
- Build a simple form

---

### Interview Answer

`useState` is a React Hook that lets functional components store and update state. It returns the current value and a setter function, and when the setter is called, React updates the state and re-renders the component.

---

### Follow-up Interview Questions (with short answers)

1. **Does `setState` update immediately?**
   No, updates are scheduled and batched.

2. **Can we store objects in `useState`?**
   Yes, any data type.

3. **Why must hooks be called at top level?**
   React tracks them by order.

4. **Can multiple `useState` hooks be used in one component?**
   Yes.

5. **Does changing state re-render the whole app?**
   No, only the affected components.

---

## 13. How do you update the state of a parent component from a child component?

---

### Concepts

**Core idea**
In React, **data flows one-way**:

```
Parent → Child (via props)
```

So a child **cannot directly change** the parent’s state.

To update parent state from a child:

> The parent passes a function to the child, and the child calls it.

---

**Why this design exists**

React enforces:

- One-way data flow
- Predictable state changes
- Clear data ownership

If children could directly change parent state:

- Data flow becomes confusing
- Bugs become hard to trace
- App logic becomes unstable

So React uses **controlled communication** via functions.

---

**Mental model**

```
Parent owns state
 ↓
Parent passes function as prop
 ↓
Child calls function
 ↓
Parent updates state
 ↓
UI updates everywhere
```

So the child does not change state —
it **requests** the parent to change state.

---

**Internal thinking**

- State lives in the parent
- Function lives in the parent
- Child only triggers the function
- React re-renders parent
- New props flow down

---

**Connection to real React usage**

- Form inputs updating parent form state
- Buttons changing layout state
- Filters updating list state
- Child components controlling parent UI

---

### Code Example

**Parent Component**

```jsx
function Parent() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}
```

**Child Component**

```jsx
function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increase from Child</button>;
}
```

---

**What is happening**

1. Parent owns `count`
2. Parent passes `increment` function to child
3. Child calls `onIncrement()`
4. Parent state updates
5. Parent re-renders
6. Updated state flows down

---

**Real-world usage scenario**

- Input component updating form state in parent
- Filter component updating product list
- Modal button closing parent modal

---

### Interview Answer

In React, a child updates parent state by calling a function passed from the parent as a prop. The parent owns the state and provides a setter function, and the child triggers it when needed.

---

### Follow-up Interview Questions (with short answers)

1. **Can a child directly modify parent state?**
   No. Only the owner of the state can update it.

2. **Why is this pattern used?**
   To keep data flow predictable and controlled.

3. **What is this pattern called?**
   Lifting state up / callback pattern.

4. **Can multiple children update the same parent state?**
   Yes, if they receive the same function.

5. **Is this two-way data binding?**
   No. It is still one-way data flow.

---

## 14. What is lifting state up in React?

---

### Concepts

**What lifting state up means**
Lifting state up means **moving state from a child component to a common parent** so that multiple components can share and use the same data.

Instead of:

- Each component having its own copy of state

We do:

- One shared state in parent
- Pass it down via props

---

**Why lifting state up exists**

Problem without it:

- Duplicate state
- Inconsistent data
- Components out of sync
- Bugs from multiple sources of truth

Lifting state up creates:

- Single source of truth
- Predictable data flow
- Shared state management
- Better synchronization

---

**Mental model**

Before:

```
Child A (state)
Child B (state)
→ data mismatch
```

After lifting:

```
Parent (state)
 ↓        ↓
Child A  Child B
```

One state, multiple consumers.

---

**Internal working**

1. Identify shared data
2. Move state to nearest common parent
3. Parent manages state
4. Pass data via props
5. Pass update functions via props
6. Children trigger updates

---

**Connection to real React usage**

- Filters affecting multiple components
- Forms with multiple inputs
- Tabs and content panels
- Theme toggles
- Cart state

---

### Code Example

**Before (bad pattern)**

```jsx
function ChildA() {
  const [value, setValue] = React.useState("");
}
function ChildB() {
  const [value, setValue] = React.useState("");
}
```

**After (lifting state up)**

```jsx
function Parent() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <ChildA value={value} onChange={setValue} />
      <ChildB value={value} />
    </>
  );
}
```

```jsx
function ChildA({ value, onChange }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}

function ChildB({ value }) {
  return <p>{value}</p>;
}
```

---

**Real-world usage scenario**

- Search bar (ChildA)
- Result list (ChildB)
- Shared search state in Parent

---

### Interview Answer

Lifting state up means moving shared state to a common parent component so multiple child components can access and update the same data through props and callback functions.

---

### Follow-up Interview Questions (with short answers)

1. **Why is lifting state important?**
   To avoid duplicate and inconsistent state.

2. **Where should state be lifted to?**
   The nearest common parent.

3. **Is lifting state up always required?**
   No, only when data is shared.

4. **What problem does it solve?**
   Multiple sources of truth.

5. **Is Context an alternative to lifting state up?**
   Yes, for deeply nested components.

---

## 15. When do you use Redux or Context API for state management?

---

### Concepts

**Core problem**
As apps grow, state becomes:

- Shared across many components
- Needed at different tree levels
- Hard to pass via props
- Messy due to prop drilling

This creates:

- Deep prop chains
- Tight coupling
- Hard-to-maintain code

Redux and Context solve this.

---

**Context API**

**What it is**
A built-in React system for sharing data globally without passing props manually.

**When to use Context**

- Theme (dark/light mode)
- Auth user data
- Language settings
- Global UI state
- App config
- Small to medium shared state

**Mental model**

```
Global store
 ↓
Any component can read
Any component can update
```

**Strengths**

- Simple
- Built into React
- No extra library

**Limits**

- Not good for large, fast-changing state
- Performance issues if misused
- Not structured for complex logic

---

**Redux**

**What it is**
An external state management library for **large-scale applications**.

**When to use Redux**

- Complex state logic
- Many updates per second
- Large shared state
- Cross-feature state sharing
- Predictable debugging needed
- Time-travel debugging
- Large teams

**Mental model**

```
Component → Action → Reducer → Store → UI
```

**Strengths**

- Centralized state
- Strict structure
- Debugging tools
- Predictability
- Scales well

**Costs**

- More boilerplate
- More setup
- Learning curve

---

**Simple decision rule**

```
Local UI state → useState
Shared nearby state → lift state up
Global simple state → Context
Global complex state → Redux
```

---

**Connection to real React usage**

Context:

- Auth context
- Theme context
- User settings

Redux:

- E-commerce cart
- Dashboard analytics
- Multi-module apps
- Enterprise apps

---

### Code Example

**Context (simple example)**

```jsx
const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = React.useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
}

function Home() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return <button onClick={() => setTheme("dark")}>Change Theme</button>;
}
```

---

**Real-world usage scenario**

- Login system → Context
- Admin dashboard → Redux
- E-commerce app → Redux
- Portfolio website → Context

---

### Interview Answer

Context API is used for simple global state like theme or auth data, while Redux is used for large, complex applications that need structured state management, predictability, and scalability.

---

### Follow-up Interview Questions (with short answers)

1. **Is Context a replacement for Redux?**
   No. They solve different scales of problems.

2. **What is prop drilling?**
   Passing props through many layers unnecessarily.

3. **Can Context cause re-render issues?**
   Yes, if large state changes frequently.

4. **Is Redux only for React?**
   No, it is framework-agnostic.

5. **Do all apps need Redux?**
   No. Most apps do not.

---
