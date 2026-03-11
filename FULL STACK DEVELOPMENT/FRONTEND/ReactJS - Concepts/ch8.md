# SECTION 8 — Conditional Rendering

## 39. Conditional Rendering

Tag: **[FRESHER]**

---

# 1. Problem First — Why Conditional Rendering Exists

In UI development, **the interface changes depending on data or user actions**.

Examples:

- Show **Login button** if user is not logged in
- Show **Dashboard** if user is logged in
- Show **Loading spinner** while API is loading
- Show **Error message** if request fails
- Show **Empty state** if list has no items

Without conditional rendering, UI would always display **everything**, which is incorrect.

Example problem:

```
User Dashboard

If user logged in → show profile
If not logged in → show login page
```

So React needs a way to **render different UI based on conditions**.

This is called **Conditional Rendering**.

---

# 2. Intuition

Think of React rendering like this:

```
UI = function(state)
```

Example

```
state: isLoggedIn = false
UI: show login button

state: isLoggedIn = true
UI: show dashboard
```

React simply **decides which JSX to render depending on conditions**.

---

# 3. Core Idea

Conditional rendering means:

```
Render different UI based on a condition
```

Example concept:

```
if(condition)
    render A
else
    render B
```

React uses **normal JavaScript conditions** to decide JSX.

Main patterns:

1. **if statement**
2. **ternary operator**
3. **logical && operator**

---

# 4. Example Setup

We will use a simple component.

```
src/App.jsx
```

```javascript
import React from "react";

function App() {
  const isLoggedIn = true; // simulate login state

  return (
    <div>
      <h1>Welcome to the app</h1>
    </div>
  );
}

export default App;
```

Now we add conditional UI.

---

# 5. Method 1 — Using if Statements

This is the **most readable method** for complex conditions.

### Example: Login UI

```
If user logged in → show dashboard
Else → show login button
```

### Code

```javascript
import React from "react";

function App() {
  const isLoggedIn = false;

  // variable to store UI
  let content;

  // standard JS condition
  if (isLoggedIn) {
    // JSX to render when user logged in
    content = <h2>Welcome back to your dashboard</h2>;
  } else {
    // JSX to render when user not logged in
    content = <button>Login</button>;
  }

  return (
    <div>
      <h1>Conditional Rendering Example</h1>

      {/* render variable */}
      {content}
    </div>
  );
}

export default App;
```

### Output

If `isLoggedIn = false`

```
Conditional Rendering Example
[Login]
```

If `isLoggedIn = true`

```
Conditional Rendering Example
Welcome back to your dashboard
```

---

# 6. Method 2 — Ternary Operator

Ternary operator is used **inside JSX**.

Syntax:

```
condition ? valueIfTrue : valueIfFalse
```

### Example

```javascript
import React from "react";

function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Conditional Rendering</h1>

      {isLoggedIn ? <h2>Dashboard</h2> : <button>Login</button>}
    </div>
  );
}

export default App;
```

### Output

If true

```
Dashboard
```

If false

```
Login
```

---

# 7. Nested Ternary (Be Careful)

Sometimes developers write nested ternaries.

Example

```
loading → show spinner
error → show error
else → show data
```

### Code

```javascript
const loading = false;
const error = false;

return (
  <div>
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error occurred</p>
    ) : (
      <p>Data loaded</p>
    )}
  </div>
);
```

### Warning

Nested ternaries can become **hard to read**.

Bad example:

```
condition1 ? a : condition2 ? b : condition3 ? c : d
```

Better approach:

Use **if statements**.

---

# 8. Method 3 — Logical AND ( && )

Very common in React.

Used when you want:

```
If condition is true → show something
If false → show nothing
```

Syntax

```
condition && JSX
```

---

### Example

Show **admin panel only for admin users**.

```javascript
import React from "react";

function App() {
  const isAdmin = true;

  return (
    <div>
      <h1>User Dashboard</h1>

      {/* render only if admin */}
      {isAdmin && <button>Delete User</button>}
    </div>
  );
}

export default App;
```

### Output

If `isAdmin = true`

```
User Dashboard
Delete User
```

If `isAdmin = false`

```
User Dashboard
```

Button disappears.

---

# 9. Real React Example — Loading UI

Very common pattern.

### Example

Fetching API.

```
loading → show spinner
else → show data
```

### Code

```javascript
import React from "react";

function App() {
  const loading = true;

  return (
    <div>
      <h1>Products</h1>

      {loading ? <p>Loading products...</p> : <p>Products loaded</p>}
    </div>
  );
}

export default App;
```

---

# 10. Another Real Example — Empty List

Example:

```
If list empty → show "No items"
Else → render list
```

### Code

```javascript
import React from "react";

function App() {
  const items = [];

  return (
    <div>
      <h1>My Items</h1>

      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        items.map((item) => <p key={item}>{item}</p>)
      )}
    </div>
  );
}

export default App;
```

---

# 11. Best Practices

### 1. Use if statement for complex logic

Good for

```
multiple conditions
API logic
complex branching
```

---

### 2. Use ternary for small UI switches

Example

```
isLoggedIn ? Dashboard : Login
```

---

### 3. Use && for simple conditions

Example

```
isAdmin && <DeleteButton />
```

---

# 12. Common Mistakes

### Mistake 1

Using `if` directly inside JSX

Wrong

```javascript
return <div>if(isLoggedIn){<Dashboard />}</div>;
```

Correct

```
use ternary or variable
```

---

### Mistake 2

Returning multiple elements without wrapper.

Wrong

```
condition ? <A/> <B/> : <C/>
```

Correct

```
condition ? <><A/><B/></> : <C/>
```

---

# 13. Tradeoffs

| Method       | Best For           |
| ------------ | ------------------ |
| if statement | complex conditions |
| ternary      | UI switching       |
| &&           | optional UI        |

---

# 14. Real Production Use Cases

Conditional rendering is used everywhere.

### Authentication

```
if logged in → dashboard
else → login page
```

---

### Loading UI

```
loading → spinner
```

---

### Error UI

```
error → error message
```

---

### Feature Flags

```
isPremium && showPremiumFeatures
```

---

# 15. Mental Model (Important)

React rendering pipeline:

```
state changes
↓
component re-renders
↓
conditions re-evaluated
↓
new UI rendered
```

So conditional rendering works because:

```
UI = function(state)
```

---

# 16. Mini Practice Examples

### Example 1

Show message if cart empty.

```
cart.length === 0
```

---

### Example 2

Show admin button.

```
user.role === "admin"
```

---

### Example 3

Show loading spinner.

```
isLoading
```

---

# 17. Synthesis Questions (Interview Style)

1. What is conditional rendering in React?
2. Difference between **ternary and &&** in React?
3. Why can't we use `if` directly inside JSX?
4. When should you avoid nested ternaries?
5. What happens when state changes in conditional rendering?

---

# Final Understanding

Conditional rendering allows React to:

```
display different UI depending on application state
```

Most common patterns:

```
if statements
ternary operator
logical &&
```

You will see this concept in:

- **state management**
- **API loading states**
- **authentication UI**
- **dynamic lists**
- **feature flags**

It is one of the **most used patterns in React apps**.

---

Next concepts that naturally connect with this are:

- **State**
- **useState**
- **useEffect**
- **Data Fetching**

because conditional rendering usually depends on **state changes**.
