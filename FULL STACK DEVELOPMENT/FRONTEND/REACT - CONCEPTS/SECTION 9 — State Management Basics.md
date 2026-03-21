# SECTION 9 — State Management Basics

---

## 40. State Concept

Tag: **[FRESHER]**

Subtopics

- dynamic UI
- state-driven rendering

---

## 40. State Concept

---

### Problem

Till now, UI was **static**.

Example:

```jsx
<h1>Hello User</h1>
```

This will **never change**.

But real applications need:

- counter increasing/decreasing
- form inputs updating
- API data rendering
- toggling UI (dark/light mode)
- showing/hiding components

Problem:

> How do we make UI **change over time**?

---

### Intuition

Think like this:

```text
UI depends on data
```

Example:

- If count = 0 → show "0"
- If count = 5 → show "5"

So instead of hardcoding UI:

```text
UI = function of data
```

That **data** in React is called:

> **State**

---

### Concept

State is:

> **A special variable that controls UI and can change over time**

When state changes:

> React automatically re-renders the UI

---

### Mental Model (VERY IMPORTANT)

```text
UI = f(state)
```

Meaning:

```text
User Interface = function of state
```

So:

- Change state → UI updates automatically
- No manual DOM manipulation

---

### Example (Without State — Wrong Approach)

```jsx
function Counter() {
  let count = 0;

  function increase() {
    count++;
    console.log(count);
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increase}>Increase</button>
    </div>
  );
}
```

### Problem

- UI does **not update**
- Only console changes

Why?

Because React does not track normal variables.

---

### Correct Approach (Using State)

```jsx
import { useState } from "react";

function Counter() {
  // create state variable
  const [count, setCount] = useState(0);

  function increase() {
    // update state
    setCount(count + 1);
  }

  return (
    <div>
      {/* UI depends on state */}
      <h1>{count}</h1>

      {/* click updates state */}
      <button onClick={increase}>Increase</button>
    </div>
  );
}
```

---

### Dry Run

```text
Initial render:
count = 0 → UI shows 0

Click button:
setCount(1)

React:
→ detects state change
→ re-renders component
→ UI shows 1
```

---

### Key Insight

React works like this internally:

```text
State change → Re-render → Updated UI
```

---

# Why State is Needed

---

### Case 1 — Counter

```jsx
<h1>{count}</h1>
```

---

### Case 2 — Toggle

```jsx
{
  isOpen && <Modal />;
}
```

---

### Case 3 — Form Input

```jsx
<input value={name} />
```

---

### Case 4 — API Data

```jsx
{
  users.map((user) => <p>{user.name}</p>);
}
```

All these depend on **state**.

---

# Types of State

---

### 1. Primitive State

```jsx
const [count, setCount] = useState(0);
```

---

### 2. Boolean State

```jsx
const [isOpen, setIsOpen] = useState(false);
```

---

### 3. Array State

```jsx
const [users, setUsers] = useState([]);
```

---

### 4. Object State

```jsx
const [user, setUser] = useState({
  name: "",
  age: 0,
});
```

---

# Important Rules of State

---

### Rule 1 — Never Modify State Directly

Wrong:

```jsx
count = count + 1;
```

Correct:

```jsx
setCount(count + 1);
```

---

### Rule 2 — State Updates Trigger Re-render

Only `setState` or `setCount` causes UI update.

---

### Rule 3 — State is Local to Component

Each component has its own state.

---

### Rule 4 — State is Asynchronous (Important)

```jsx
setCount(count + 1);
console.log(count); // old value
```

React batches updates.

---

### Correct Way (Functional Update)

```jsx
setCount((prev) => prev + 1);
```

---

# Example — Toggle UI

```jsx
import { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle</button>

      {/* conditional rendering using state */}
      {isVisible && <p>Hello World</p>}
    </div>
  );
}
```

---

### Dry Run

```text
Initial:
isVisible = false → nothing shown

Click:
setIsVisible(true)

Re-render:
text appears
```

---

# Example — Form Input State

```jsx
import { useState } from "react";

function InputBox() {
  const [name, setName] = useState("");

  function handleChange(event) {
    // update state from input
    setName(event.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />

      <p>Hello {name}</p>
    </div>
  );
}
```

---

# Real World Use Cases

---

1. Counters
2. Modals (open/close)
3. Forms (input handling)
4. API data rendering
5. Tabs switching
6. Filters / search
7. Shopping cart
8. Authentication state

---

# Common Mistakes

---

### 1. Using normal variables

```jsx
let count = 0; // wrong
```

---

### 2. Mutating state directly

```jsx
user.name = "John"; // wrong
```

---

### 3. Expecting instant update

```jsx
setCount(count + 1);
console.log(count); // old value
```

---

# Tradeoffs

| Feature             | Benefit         | Limitation                      |
| ------------------- | --------------- | ------------------------------- |
| State               | dynamic UI      | too much state = messy          |
| Local state         | simple          | not shared globally             |
| Automatic re-render | easy UI updates | performance concerns if misused |

---

# Mini Pattern

---

### Derived UI Pattern

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);

return <>{isLoggedIn ? <Dashboard /> : <Login />}</>;
```

---

# Synthesis Questions

---

1. Why normal variables do not update UI in React?
2. What happens internally when state changes?
3. Why should we not mutate state directly?
4. What is meant by "UI = f(state)"?
5. What is the difference between state and props?
6. Why is state asynchronous?

---

# SECTION 9 — State Management Basics

---

## 41. setState (Class Components)

Tag: **[FRESHER]**

---

### Problem

In functional components we use:

```jsx
useState();
```

But React originally used **class components**.

So question:

> How do we manage state in class components?

---

### Intuition

In class components:

- state is stored inside an object
- we update it using a special method

That method is:

> **setState()**

---

### Concept

In class components:

```text
state = object
```

And to update it:

```text
this.setState()
```

Important:

> **Direct modification of state is NOT allowed**

---

### Basic Structure of Class Component

```jsx
import React, { Component } from "react";

class Counter extends Component {
  // state defined as object
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
```

---

### Updating State using setState

```jsx
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // function to update state
  increase = () => {
    // updating state
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default Counter;
```

---

### Dry Run

```text
Initial:
count = 0 → UI shows 0

Click button:
this.setState({ count: 1 })

React:
→ detects state change
→ re-renders component
→ UI shows 1
```

---

# Important Behavior of setState

---

### 1. setState is Asynchronous

```jsx
this.setState({ count: this.state.count + 1 });

console.log(this.state.count); // old value
```

Why?

React batches updates for performance.

---

### Correct Way (Functional setState)

```jsx
this.setState((prevState) => {
  return {
    count: prevState.count + 1,
  };
});
```

---

### Why This Matters

If multiple updates happen:

```jsx
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
```

Expected: +2
Actual: +1 (because both read same old state)

---

### Correct Approach

```jsx
this.setState((prevState) => ({
  count: prevState.count + 1,
}));

this.setState((prevState) => ({
  count: prevState.count + 1,
}));
```

Now result = +2

---

# Partial State Updates

---

### Important Concept

`setState` **merges state automatically**

Example:

```jsx
state = {
  name: "Tanish",
  age: 20,
};
```

Update only name:

```jsx
this.setState({
  name: "Rahul",
});
```

Result:

```text
{
  name: "Rahul",
  age: 20   // remains unchanged
}
```

---

### Unlike useState

In hooks:

```jsx
setUser({ name: "Rahul" });
```

This replaces entire object.

---

# Example — Toggle

```jsx
import React, { Component } from "react";

class Toggle extends Component {
  state = {
    isVisible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>

        {this.state.isVisible && <p>Hello World</p>}
      </div>
    );
  }
}

export default Toggle;
```

---

# Example — Form Input

```jsx
import React, { Component } from "react";

class FormExample extends Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <p>Hello {this.state.name}</p>
      </div>
    );
  }
}

export default FormExample;
```

---

# Key Differences (setState vs useState)

| Feature    | setState (Class) | useState (Function) |
| ---------- | ---------------- | ------------------- |
| Syntax     | this.setState    | setState function   |
| State type | object only      | any type            |
| Merging    | automatic        | manual              |
| Usage      | old React        | modern React        |

---

# Rules of setState

---

### Rule 1 — Never Modify State Directly

Wrong:

```jsx
this.state.count = 5;
```

---

### Rule 2 — Always Use setState

```jsx
this.setState({ count: 5 });
```

---

### Rule 3 — Use Functional Form When Needed

```jsx
this.setState((prev) => ({ count: prev.count + 1 }));
```

---

### Rule 4 — Triggers Re-render

Every setState causes UI update.

---

# Common Mistakes

---

### 1. Direct mutation

```jsx
this.state.count++;
```

---

### 2. Forgetting this

```jsx
setState({ count: 1 }); // wrong
```

---

### 3. Using state immediately after update

```jsx
this.setState({ count: 1 });
console.log(this.state.count); // old value
```

---

# Real Use Cases

---

1. Counters
2. Form handling
3. Toggle UI
4. API data storage
5. Modal open/close
6. Tabs

---

# Tradeoffs

| Advantage          | Disadvantage      |
| ------------------ | ----------------- |
| Easy state updates | verbose syntax    |
| Automatic merging  | harder to read    |
| Works in class     | outdated approach |

---

# Important Insight

Even though class components are older:

> **Understanding setState helps understand how React works internally**

Because:

- Hooks are built on similar principles
- Many legacy codebases still use class components
- Interviewers still ask about it

---

# Synthesis Questions

---

1. Why can't we directly modify state in class components?
2. What is the difference between object setState and functional setState?
3. Why is setState asynchronous?
4. How does React merge state in class components?
5. What problem occurs if we call setState twice without functional update?
6. Difference between setState and useState?

---

# SECTION 9 — State Management Basics

---

## 42. Lifecycle Methods

Tag: **[FRESHER]**

Subtopics

- componentDidMount
- componentDidUpdate
- componentWillUnmount

---

## 42. Lifecycle Methods

---

### Problem

React components are **not static**.

They:

- get created
- update when state/props change
- get removed from UI

So question:

> How do we run code at different stages of a component's life?

Examples:

- Fetch data when component loads
- Update UI when data changes
- Clean up timers or subscriptions

We need a way to **hook into these stages**.

---

### Intuition

Think of a component like a human life:

```text
Birth → Growth → Death
```

In React:

```text
Mount → Update → Unmount
```

These stages are called:

> **Lifecycle of a component**

---

### Lifecycle Phases

---

### 1. Mounting (Component Created)

```text
Component appears on screen for the first time
```

---

### 2. Updating (State/Props Change)

```text
Component re-renders due to changes
```

---

### 3. Unmounting (Component Removed)

```text
Component is removed from UI
```

---

# Lifecycle Methods (Class Components)

---

React provides special functions:

| Phase      | Method               |
| ---------- | -------------------- |
| Mounting   | componentDidMount    |
| Updating   | componentDidUpdate   |
| Unmounting | componentWillUnmount |

---

# 1. componentDidMount

---

### When It Runs

> After component is rendered **for the first time**

---

### Use Cases

- API calls
- fetching data
- setting timers
- subscriptions

---

### Example — API Call

```jsx id="0q6i6g"
import React, { Component } from "react";

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    // simulate API call
    setTimeout(() => {
      this.setState({
        users: ["Aman", "Rahul", "Priya"],
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>User List</h2>

        {this.state.users.map((user, index) => (
          <p key={index}>{user}</p>
        ))}
      </div>
    );
  }
}

export default Users;
```

---

### Dry Run

```text
Initial render:
users = []

componentDidMount runs:
→ API call simulated

After 1 sec:
setState → users updated

React re-renders → users displayed
```

---

# 2. componentDidUpdate

---

### When It Runs

> After component updates (state or props change)

---

### Use Cases

- reacting to state changes
- API call on dependency change
- syncing data

---

### Example

```jsx id="x9xk0h"
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    // check if count changed
    if (prevState.count !== this.state.count) {
      console.log("Count updated:", this.state.count);
    }
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default Counter;
```

---

### Important Rule

Always compare:

```jsx id="t2xq2c"
if (prevState.value !== this.state.value)
```

Otherwise:

```text
Infinite loop may happen
```

---

### Why Infinite Loop?

```jsx id="gy7w26"
componentDidUpdate() {
  this.setState({ count: this.state.count + 1 });
}
```

This causes:

```text
update → setState → update → setState → infinite loop
```

---

# 3. componentWillUnmount

---

### When It Runs

> Just before component is removed from DOM

---

### Use Cases

- clear timers
- remove event listeners
- cleanup subscriptions

---

### Example

```jsx id="o7w0wa"
import React, { Component } from "react";

class Timer extends Component {
  state = {
    seconds: 0,
  };

  componentDidMount() {
    // start timer
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // cleanup timer
    clearInterval(this.interval);

    console.log("Timer removed");
  }

  render() {
    return (
      <div>
        <h1>{this.state.seconds}</h1>
      </div>
    );
  }
}

export default Timer;
```

---

### Why Cleanup is Important

If not cleared:

- memory leaks
- unnecessary background tasks
- performance issues

---

# Lifecycle Flow (Complete Picture)

```text
Mount:
constructor → render → componentDidMount

Update:
render → componentDidUpdate

Unmount:
componentWillUnmount
```

---

# Real World Example

---

### Data Fetching Flow

```text
componentDidMount → fetch API

setState → update UI

componentDidUpdate → react to changes

componentWillUnmount → cleanup
```

---

# Mapping to Modern React (Hooks)

---

| Class Lifecycle      | Hook Equivalent                 |
| -------------------- | ------------------------------- |
| componentDidMount    | useEffect (empty dependency []) |
| componentDidUpdate   | useEffect (with dependencies)   |
| componentWillUnmount | useEffect cleanup               |

---

Example:

```jsx id="0ozsra"
useEffect(() => {
  // mount logic

  return () => {
    // cleanup (unmount)
  };
}, []);
```

---

# Common Mistakes

---

### 1. API call in render

Wrong:

```jsx id="6l2v9v"
render() {
  fetchData(); // wrong place
}
```

---

### 2. Infinite loop in componentDidUpdate

```jsx id="h2xavq"
componentDidUpdate() {
  this.setState({}); // dangerous
}
```

---

### 3. Not cleaning resources

- timers
- event listeners

---

# Tradeoffs

| Advantage                 | Limitation         |
| ------------------------- | ------------------ |
| Clear lifecycle control   | verbose            |
| Powerful logic separation | harder to maintain |
| Good for legacy code      | replaced by hooks  |

---

# Real Use Cases

---

1. API fetching
2. timers / intervals
3. subscriptions (websocket)
4. analytics tracking
5. cleanup tasks
6. syncing external data

---

# Mini Pattern

---

### Safe Update Pattern

```jsx id="1p6kk9"
componentDidUpdate(prevProps) {

  if (prevProps.id !== this.props.id) {

    // fetch new data

  }

}
```

---

# Synthesis Questions

---

1. What are the three phases of React lifecycle?
2. When does componentDidMount run?
3. Why do we compare prevState in componentDidUpdate?
4. What causes infinite loop in lifecycle methods?
5. Why is cleanup needed in componentWillUnmount?
6. How are lifecycle methods replaced in hooks?

---
