# SECTION 10 — React Hooks

---

## 43. Hooks Introduction

Tag: **[BOTH]**

---

### Problem (Why Hooks Exist)

Before hooks, React had **class components** for:

- Managing state
- Lifecycle methods
- Complex logic reuse

Problems with class components:

1. **Hard to understand**
   - `this` confusion
   - binding issues

2. **Logic scattered**
   - Same logic split across lifecycle methods
     Example:

   ```
   componentDidMount → fetch
   componentDidUpdate → refetch
   componentWillUnmount → cleanup
   ```

3. **Reusability problem**
   - No clean way to reuse stateful logic
   - HOCs and render props became messy

---

### Intuition

Think like this:

> We want to use **state + lifecycle + logic inside simple functions**

Instead of:

```
class → complicated
```

We move to:

```
function → clean + predictable
```

Hooks = **special functions that bring React features into functional components**

---

### Core Idea

Hooks allow you to:

- Use **state**
- Handle **side effects**
- Access **lifecycle behavior**
- Share logic across components

All inside **functional components**

---

### What Exactly is a Hook?

A Hook is:

```
A special function that lets you "hook into" React features
```

Example hooks:

- `useState` → state
- `useEffect` → side effects
- `useContext` → global state

---

### Basic Example (Without Hooks vs With Hooks)

#### Class Component (Old Way)

```jsx
class Counter extends React.Component {
  constructor() {
    super();

    // State initialization
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        {/* Updating state */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

---

#### Functional Component (With Hook)

```jsx
import { useState } from "react";

function Counter() {
  // useState gives state + setter function
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      {/* Updating state */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

### What Changed?

| Feature   | Class Component | Functional + Hooks |
| --------- | --------------- | ------------------ |
| State     | this.state      | useState           |
| Update    | this.setState   | setState function  |
| Lifecycle | methods         | useEffect          |
| Syntax    | complex         | simple             |

---

### Rules of Hooks (Very Important)

#### 1. Only call hooks at top level

Correct:

```jsx
const [count, setCount] = useState(0);
```

Wrong:

```jsx
if (true) {
  useState(0); // ❌ not allowed
}
```

---

#### 2. Only call hooks inside React functions

Allowed:

- Functional components
- Custom hooks

Not allowed:

- Normal JS functions

---

### Why Hooks Are Powerful

#### 1. Clean code

No `this`, no confusion.

---

#### 2. Reusable logic

We can create:

```
custom hooks
```

Example:

```
useFetch()
useAuth()
useForm()
```

---

#### 3. Better separation of concerns

Instead of lifecycle-based logic:

```
componentDidMount → fetch
componentDidUpdate → update
```

We write:

```
useEffect → logic grouped together
```

---

### Mental Model

Think like this:

```
Component = UI + Hooks

Hooks = behavior layer
```

---

### Real Use Cases

- Form handling
- API calls
- Timers
- Authentication
- Theme switching
- Window resize tracking

---

### Common Mistakes

#### Mistake 1: Thinking hooks are magic

They are just functions with rules.

---

#### Mistake 2: Using hooks randomly

Hooks should follow:

```
top-level → consistent order
```

---

#### Mistake 3: Mixing class mindset

Do NOT think:

```
lifecycle → hook equivalent directly
```

Think:

```
effect → when dependencies change
```

---

### Tradeoffs

| Advantage       | Limitation                      |
| --------------- | ------------------------------- |
| Cleaner code    | Requires understanding closures |
| Reusable logic  | Dependency array confusion      |
| No class needed | Learning curve                  |

---

### Synthesis Questions (Important)

1. Why were hooks introduced in React?
2. What problems did class components have?
3. Why can’t hooks be used inside conditions?
4. Difference between `useState` and `this.state`?
5. How do hooks improve code reusability?

---

### Final Understanding

Hooks changed React from:

```
Class-based → Complex → Hard to reuse
```

to:

```
Function-based → Simple → Reusable → Scalable
```

---

## 44. useState Hook

Tag: **[BOTH]**

---

### Problem (Why useState Exists)

In UI, things **change over time**:

- Button click → counter changes
- Input typing → text changes
- API response → data changes

Without state:

```jsx
let count = 0;
```

Problem:

- UI **won’t update automatically**
- React doesn’t know value changed

So we need:

```text
A system where:
1. Value is stored
2. UI re-renders when value changes
```

---

### Intuition

Think like this:

```text
State = memory of component
```

React remembers values using `useState`

---

### Concept

`useState` is a Hook that lets you:

```text
1. Create state
2. Update state
3. Trigger re-render automatically
```

---

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

---

### Breakdown

```jsx
const [count, setCount] = useState(0);
```

- `count` → current value
- `setCount` → function to update value
- `0` → initial value

---

### Example 1 — Counter (Basic)

```jsx
import { useState } from "react";

function Counter() {
  // Step 1: create state
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Display state */}
      <h1>{count}</h1>

      {/* Update state */}
      <button
        onClick={() => {
          // Increase count
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
```

---

### Dry Run

Initial render:

```text
count = 0
UI → 0
```

Click button:

```text
setCount(1)
```

React:

```text
1. Updates state
2. Re-renders component
3. UI shows 1
```

---

### Key Behavior

```text
State change → Component re-render
```

---

### Example 2 — Multiple State Variables

```jsx
import { useState } from "react";

function UserProfile() {
  // Multiple states
  const [name, setName] = useState("Tanish");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h2>{name}</h2>
      <h3>{age}</h3>

      <button onClick={() => setName("Rahul")}>Change Name</button>

      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}
```

---

### Example 3 — Input Handling (Very Important)

```jsx
import { useState } from "react";

function InputExample() {
  // Store input value
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          // Update state on typing
          setText(e.target.value);
        }}
      />

      <p>You typed: {text}</p>
    </div>
  );
}
```

---

### Important Concept — State is Asynchronous

Wrong thinking:

```jsx
setCount(count + 1);
console.log(count); // ❌ old value
```

Correct understanding:

```text
State updates are scheduled, not immediate
```

---

### Correct Way (Functional Update)

```jsx
setCount((prevCount) => prevCount + 1);
```

---

### Example — Fixing Bug

```jsx
import { useState } from "react";

function CounterBugFix() {
  const [count, setCount] = useState(0);

  const increase = () => {
    // Correct way using previous state
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increment</button>
    </div>
  );
}
```

---

### Example 4 — State with Objects

```jsx
import { useState } from "react";

function User() {
  const [user, setUser] = useState({
    name: "Tanish",
    age: 20,
  });

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>{user.age}</h3>

      <button
        onClick={() => {
          // Always copy previous state
          setUser({
            ...user,
            age: user.age + 1,
          });
        }}
      >
        Increase Age
      </button>
    </div>
  );
}
```

---

### Important Rule — State is Immutable

Wrong:

```jsx
user.age = 25; // ❌ React won’t re-render
```

Correct:

```jsx
setUser({ ...user, age: 25 });
```

---

### Example 5 — State with Arrays

```jsx
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, "New Task"]);
  };

  return (
    <div>
      <button onClick={addTodo}>Add Task</button>

      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
}
```

---

### Edge Cases

#### 1. Updating multiple times quickly

```jsx
setCount(count + 1);
setCount(count + 1);
```

Result:

```text
Only +1 happens (not +2)
```

Fix:

```jsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

---

#### 2. Initial state expensive computation

```jsx
const [value, setValue] = useState(() => {
  // runs only once
  return heavyCalculation();
});
```

---

### Tradeoffs

| Advantage             | Limitation               |
| --------------------- | ------------------------ |
| Simple state handling | Async updates confusion  |
| Works in functions    | Must manage immutability |
| Clean syntax          | Can cause re-renders     |

---

### Real Use Cases

- Forms
- Counters
- Toggles (dark/light)
- API data storage
- UI states (loading, error)

---

### Mental Model

```text
useState =
1. Store value
2. Update value
3. Re-render UI
```

---

### Mini Pattern

```jsx
const [value, setValue] = useState(initial);

// Update
setValue(newValue);

// OR
setValue((prev) => newValue);
```

---

### Synthesis Questions

1. Why does React re-render when state changes?
2. Why should we not mutate state directly?
3. Difference between normal update vs functional update?
4. Why multiple setState calls behave unexpectedly?
5. How does useState work with objects and arrays?

---

### Final Understanding

```text
useState is the foundation of React UI

Without it:
No dynamic UI
No interaction
No reactivity
```

---

## 45. useEffect Hook

Tag: **[BOTH]**

---

### Problem (Why useEffect Exists)

In real apps, components don’t just render UI — they also do **side work**:

- Fetch data from API
- Start timers
- Listen to events
- Update DOM manually

Problem:

```text
Where should this logic go?
```

In class components, we had:

```text
componentDidMount
componentDidUpdate
componentWillUnmount
```

Issues:

- Logic split across multiple places
- Hard to maintain
- Code duplication

---

### Intuition

Think like this:

```text
useEffect = "Do something AFTER render"
```

React renders UI → then effect runs

---

### Concept

`useEffect` is used for:

```text
Side Effects = Anything outside pure rendering
```

Examples:

- API calls
- Subscriptions
- Timers
- Logging
- DOM manipulation

---

### Basic Syntax

```jsx
useEffect(() => {
  // effect logic here
});
```

---

### Example 1 — Runs After Every Render

```jsx
import { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Runs after every render
    console.log("Component rendered");
  });

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

### Dry Run

```text
Initial render → effect runs
Click button → re-render → effect runs again
```

---

### Problem with Above

```text
Too many unnecessary executions
```

We need control → **Dependency Array**

---

### Example 2 — Run Only Once (On Mount)

```jsx
import { useEffect } from "react";

function Example() {
  useEffect(() => {
    // Runs only once (like componentDidMount)
    console.log("Mounted");
  }, []); // empty dependency array

  return <h1>Hello</h1>;
}
```

---

### Example 3 — Run When Value Changes

```jsx
import { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Runs when count changes
    console.log("Count changed:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

### Core Rule

```text
Dependency array controls WHEN effect runs
```

---

### Example 4 — Cleanup Function (Very Important)

Problem:

- Memory leaks
- Duplicate listeners
- Multiple timers

Solution:

```jsx
import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running...");
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(interval);
      console.log("Cleanup done");
    };
  }, []);

  return <h1>Timer</h1>;
}
```

---

### Dry Run

```text
Mount → interval starts
Unmount → cleanup runs → interval cleared
```

---

### Key Concept — Effect Lifecycle

```text
1. Render happens
2. Effect runs
3. Cleanup runs (before next effect or unmount)
```

---

### Mapping with Class Lifecycle

| Class Method         | useEffect Equivalent   |
| -------------------- | ---------------------- |
| componentDidMount    | useEffect(..., [])     |
| componentDidUpdate   | useEffect(..., [deps]) |
| componentWillUnmount | cleanup function       |

---

### Example 5 — API Call (Basic Idea)

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

---

### Common Mistakes

#### Mistake 1: Missing dependency

```jsx
useEffect(() => {
  console.log(count);
}, []); // ❌ count missing
```

Problem:

```text
Uses stale value
```

---

#### Mistake 2: Infinite loop

```jsx
useEffect(() => {
  setCount(count + 1);
}, [count]); // ❌ infinite loop
```

---

#### Mistake 3: Putting everything in one effect

Bad practice:

```text
Mixing unrelated logic in same useEffect
```

---

### Best Practice

Split effects:

```jsx
useEffect(() => {
  // API call
}, []);

useEffect(() => {
  // logging
}, [count]);
```

---

### Edge Cases

#### 1. Dependency array with objects

```jsx
useEffect(() => {}, [obj]); // ❌ runs every render
```

Why?

```text
Object reference changes
```

---

#### 2. Cleanup runs before next effect

```text
Not only on unmount!
```

---

### Tradeoffs

| Advantage            | Limitation                   |
| -------------------- | ---------------------------- |
| Replaces lifecycle   | Hard to understand initially |
| Flexible             | Dependency bugs              |
| Clean logic grouping | Can cause re-renders         |

---

### Real Use Cases

- API calls
- Event listeners
- Timers
- Subscriptions
- Logging
- Analytics

---

### Mental Model

```text
useEffect =
"After render → run logic"
```

---

### Mini Pattern

```jsx
useEffect(() => {
  // do something

  return () => {
    // cleanup
  };
}, [dependencies]);
```

---

### Synthesis Questions

1. What is a side effect?
2. Why does useEffect run after render?
3. Difference between `[]` and `[count]`?
4. Why cleanup is important?
5. What causes infinite loops in useEffect?

---

### Final Understanding

```text
useEffect is the bridge between:
React UI ↔ External world
```

Without it:

- No API calls
- No timers
- No subscriptions

---

## 46. Dependency Array Logic

Tag: **[BOTH]**

---

### Problem (Why Dependency Array Matters)

We saw:

```jsx
useEffect(() => {
  // logic
});
```

Problem:

```text
Runs after EVERY render → unnecessary work → performance issues
```

We need control:

```text
WHEN should effect run?
```

---

### Intuition

Think like this:

```text
Dependency array = trigger conditions
```

React asks:

```text
"Did any dependency change?"
→ YES → run effect
→ NO → skip
```

---

### Core Concept

```jsx
useEffect(() => {
  // effect logic
}, [dependencies]);
```

---

### Three Important Modes

---

### 1. No Dependency Array

```jsx
useEffect(() => {
  console.log("Runs always");
});
```

#### Behavior

```text
Runs after every render
```

#### When it runs

```text
Initial render ✔
State update ✔
Props change ✔
```

#### Use case

Rare. Mostly for debugging.

---

### 2. Empty Dependency Array

```jsx
useEffect(() => {
  console.log("Runs once");
}, []);
```

#### Behavior

```text
Runs only once (on mount)
```

#### Equivalent to

```text
componentDidMount
```

#### Use cases

- API call on load
- Setup listeners
- Initial setup

---

### 3. With Dependencies

```jsx
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
```

#### Behavior

```text
Runs when ANY dependency changes
```

---

### Example — Step by Step

```jsx
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect triggered:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

### Dry Run

Initial render:

```text
count = 0 → effect runs
```

Click:

```text
count = 1 → changed → effect runs
```

---

### Key Rule

```text
Effect runs ONLY when dependency value changes
```

---

### Multiple Dependencies

```jsx
useEffect(() => {
  console.log("Runs when count or name changes");
}, [count, name]);
```

---

### Dependency Comparison (Important)

React uses:

```text
Shallow comparison (===)
```

---

### Problem Case — Objects

```jsx
const obj = { a: 1 };

useEffect(() => {
  console.log("Runs every time");
}, [obj]);
```

#### Why?

```text
New object created on every render → reference changes
```

---

### Fix

```jsx
// Move outside OR memoize (later concept)
```

---

### Cleanup Behavior (VERY IMPORTANT)

```jsx
useEffect(() => {
  console.log("Effect runs");

  return () => {
    console.log("Cleanup runs");
  };
}, [count]);
```

---

### Execution Order

```text
1. Initial render → effect runs
2. count changes →
   a. cleanup runs FIRST
   b. then new effect runs
3. Unmount → cleanup runs
```

---

### Visual Flow

```text
Render → Effect
Update → Cleanup → Effect
Unmount → Cleanup
```

---

### Example — Timer with Dependency

```jsx
import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]); // will reset timer when count changes

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

### Common Mistakes (Very Important)

---

#### Mistake 1: Missing Dependency

```jsx
useEffect(() => {
  console.log(count);
}, []); // ❌ count missing
```

Problem:

```text
Stale value (old count always)
```

---

#### Mistake 2: Infinite Loop

```jsx
useEffect(() => {
  setCount(count + 1);
}, [count]); // ❌ infinite loop
```

Why:

```text
count changes → effect runs → setCount → re-render → loop
```

---

#### Mistake 3: Functions in Dependency

```jsx
useEffect(() => {
  fetchData();
}, [fetchData]); // ❌ changes every render
```

Why:

```text
Function reference changes each render
```

---

### Best Practices

---

#### 1. Always include dependencies

```text
Never ignore warnings blindly
```

---

#### 2. Split effects

```jsx
useEffect(() => {
  // API
}, []);

useEffect(() => {
  // logging
}, [count]);
```

---

#### 3. Keep effect small

```text
One responsibility per effect
```

---

### Advanced Insight (Important Thinking)

React stores previous dependencies:

```text
Prev: [count = 0]
New:  [count = 1]
→ changed → run effect
```

---

### Mental Model

```text
Dependency array = "watch list"
```

React watches:

```text
If anything changes → run effect
```

---

### Real Use Cases

- API refetch on filter change
- Recalculate value when input changes
- Sync UI with external system
- Event listeners

---

### Tradeoffs

| Advantage                | Limitation      |
| ------------------------ | --------------- |
| Fine control             | Easy to misuse  |
| Performance optimization | Dependency bugs |
| Predictable behavior     | Learning curve  |

---

### Mini Pattern

```jsx
useEffect(() => {
  // logic

  return () => {
    // cleanup
  };
}, [dep1, dep2]);
```

---

### Synthesis Questions

1. Difference between no dependency vs empty array?
2. Why does object dependency cause re-renders?
3. Why cleanup runs before next effect?
4. What causes infinite loops?
5. How React compares dependencies?

---

### Final Understanding

```text
Dependency array controls:
WHEN your side effects run
```

Mastering this =

```text
Mastering React behavior
```

---

## 47. Data Fetching using useEffect

Tag: **[BOTH]**

---

### Problem (Why Data Fetching is Needed)

Real applications don’t have static data.

Examples:

- Show users from server
- Display products
- Load posts
- Dashboard analytics

Problem:

```text
UI needs data from backend (API)
```

But:

```text
React renders first → data comes later
```

So we need:

```text
1. Fetch data after render
2. Store data in state
3. Re-render UI with data
```

---

### Intuition

Think like this:

```text
Component loads → call API → store result → show UI
```

This flow is exactly what:

```text
useEffect + useState
```

solves.

---

### Core Concept

```jsx
useEffect(() => {
  // fetch data
}, []);
```

Why `[]`?

```text
We want API call ONLY ONCE (on mount)
```

---

### Basic Example — Fetch Users

```jsx
import { useEffect, useState } from "react";

function Users() {
  // Step 1: store API data
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Step 2: fetch data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Convert response to JSON
        return response.json();
      })
      .then((data) => {
        // Step 3: store data in state
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []); // runs once

  return (
    <div>
      <h2>User List</h2>

      {/* Step 4: render data */}
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

---

### Dry Run

```text
1. Component renders
2. users = []
3. useEffect runs → fetch API
4. Data arrives → setUsers(data)
5. Component re-renders
6. UI shows user list
```

---

### Important Insight

```text
useEffect handles SIDE EFFECT (API call)
useState stores RESULT
```

---

### Better Version — Using Async/Await

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Create async function inside effect
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

---

### Why Not Direct async in useEffect?

Wrong:

```jsx
useEffect(async () => { ... }); // ❌
```

Reason:

```text
useEffect expects cleanup function, not Promise
```

---

### Example — Fetch Based on Dependency

```jsx
import { useEffect, useState } from "react";

function SearchUser() {
  const [id, setId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const data = await res.json();
      setUser(data);
    };

    fetchUser();
  }, [id]); // runs when id changes

  return (
    <div>
      <button onClick={() => setId(id + 1)}>Next User</button>

      {user && <h3>{user.name}</h3>}
    </div>
  );
}
```

---

### Flow Understanding

```text
id changes → effect runs → API call → UI updates
```

---

### Important Edge Case — Fast Switching

Problem:

```text
User changes id quickly → multiple API calls → wrong data may show
```

---

### Solution — Abort / Ignore Old Calls

Basic idea:

```jsx
useEffect(() => {
  let isMounted = true;

  const fetchData = async () => {
    const res = await fetch("API");
    const data = await res.json();

    if (isMounted) {
      setData(data);
    }
  };

  fetchData();

  return () => {
    isMounted = false;
  };
}, []);
```

---

### Common Mistakes

---

#### Mistake 1: Missing dependency

```jsx
useEffect(() => {
  fetchData(id);
}, []); // ❌ id missing
```

---

#### Mistake 2: Infinite API calls

```jsx
useEffect(() => {
  setUsers(data);
}, [users]); // ❌ loop
```

---

#### Mistake 3: Not handling errors

```text
App crashes or fails silently
```

---

### Best Practices

---

#### 1. Always handle error

```jsx
try {
  ...
} catch (error) {
  console.log(error);
}
```

---

#### 2. Keep API logic separate (clean code)

```jsx
// services/api.js
export const getUsers = async () => {
  const res = await fetch("...");
  return res.json();
};
```

---

#### 3. Use loading state (next topic)

```text
Important for UX
```

---

### Tradeoffs

| Advantage | Limitation         |
| --------- | ------------------ |
| Simple    | Boilerplate code   |
| Built-in  | No caching         |
| Flexible  | Re-fetching issues |

---

### Real Use Cases

- Dashboard data
- Product listing
- User profile
- Search results
- Notifications

---

### Mental Model

```text
useEffect (API call) → useState (store data) → UI update
```

---

### Mini Pattern

```jsx
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch("API");
    const data = await res.json();
    setState(data);
  };

  fetchData();
}, []);
```

---

### Synthesis Questions

1. Why do we use `useEffect` for API calls?
2. Why dependency array is `[]` for fetch?
3. Why async function inside effect, not directly?
4. What happens if dependency is missing?
5. How to avoid multiple API calls?

---

### Final Understanding

```text
Data fetching = Core of real-world React apps
```

Without this:

```text
React = static UI only
```

With this:

```text
React = dynamic, real-world applications
```

## 48. Managing Loading State

Tag: **[BOTH]**

---

### Problem (Why Loading State is Needed)

When we fetch data:

```text
API takes time → UI is empty → user confused
```

Example bad UX:

- Blank screen
- No feedback
- User thinks app is broken

---

### Intuition

Think like this:

```text
User should always know:
"Is data loading OR ready OR failed?"
```

So we need 3 states:

```text
1. Loading
2. Success (data)
3. Error
```

---

### Core Concept

We manage UI using **multiple states**

```jsx
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

---

### Basic Example — Proper Loading Handling

```jsx
import { useEffect, useState } from "react";

function Users() {
  // Store API data
  const [users, setUsers] = useState([]);

  // Track loading state
  const [loading, setLoading] = useState(true);

  // Track error state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Start loading
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        const data = await response.json();

        // Store data
        setUsers(data);

        // Stop loading
        setLoading(false);
      } catch (err) {
        // Handle error
        setError("Something went wrong");

        // Stop loading
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Conditional UI rendering
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

---

### Flow (Step-by-Step)

```text
1. Component loads
2. loading = true → show "Loading..."
3. API call happens
4. Data arrives → setUsers()
5. loading = false → show data
6. If error → show error message
```

---

### UI States Visualization

```text
Before API:
→ Loading...

After success:
→ Data UI

After failure:
→ Error message
```

---

### Important Pattern

```text
Always handle:
loading + error + data
```

---

### Example — Inline Conditional Rendering

```jsx
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        users.map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  );
}
```

---

### Example — Better UX (Spinner)

```jsx
if (loading) {
  return <div className="spinner">Loading...</div>;
}
```

(You can later replace with real spinner UI)

---

### Important Edge Cases

---

#### 1. Forgetting to stop loading

```jsx
setLoading(true);
// fetch...
// ❌ forgot setLoading(false)
```

Result:

```text
Loading forever
```

---

#### 2. Error not handled

```text
App breaks silently
```

---

#### 3. Flickering UI

```text
Fast API → loading flashes quickly
```

Solution (advanced later):

```text
debounce / skeleton UI
```

---

### Advanced Pattern (Clean Structure)

```jsx
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("API");
      const data = await res.json();

      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      // Always runs
      setLoading(false);
    }
  };

  fetchData();
}, []);
```

---

### Why `finally` is Important

```text
Ensures loading always stops (success or error)
```

---

### Tradeoffs

| Advantage     | Limitation               |
| ------------- | ------------------------ |
| Better UX     | More state to manage     |
| Clear UI flow | Boilerplate code         |
| User-friendly | Repetition in components |

---

### Real Use Cases

- API dashboards
- Product listing pages
- Search results
- Forms submission
- Authentication loading

---

### Mental Model

```text
API flow in React:

Start → loading = true
Success → data + loading = false
Error → error + loading = false
```

---

### Mini Pattern

```jsx
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

---

### Synthesis Questions

1. Why is loading state important in UI?
2. What are the 3 states of data fetching?
3. Why use `finally`?
4. What happens if loading is never false?
5. How to handle API errors properly?

---

### Final Understanding

```text
Without loading state → bad UX
With loading state → professional app behavior
```

---

### Big Picture of Section 10

You now understand:

```text
useState → store data
useEffect → run side effects
dependency array → control execution
data fetching → real-world usage
loading state → UX improvement
```

---
