# SECTION 8 — Conditional Rendering

---

## 39. Conditional Rendering

Tag: **[FRESHER]**

Subtopics

- if statements
- ternary operator
- logical `&&` operator

---

### Problem

User interfaces are **dynamic**.

UI should change depending on:

- user login status
- data loading
- API response
- user permissions
- form validation
- feature toggles

Example problems:

1. Show **Login button** if user not logged in.
2. Show **Logout button** if user logged in.
3. Show **Loading spinner** while API request is running.
4. Show **No data message** if list empty.

In normal programming we solve this using **conditions**.

Example in JavaScript:

```javascript
if (isLoggedIn) {
  showDashboard();
} else {
  showLogin();
}
```

React must also support **conditional UI rendering**.

So React provides multiple ways to render UI **based on conditions**.

This is called **Conditional Rendering**.

---

### Concept

Conditional rendering means:

> **Render different UI depending on a condition**

React components return **JSX**.

JSX allows **JavaScript expressions** inside `{}`.

Example:

```jsx
{
  condition ? <ComponentA /> : <ComponentB />;
}
```

React evaluates the condition and renders the correct component.

---

### Mental Model

Think like this:

```
UI = f(state)
```

Meaning:

```
User Interface = function of state
```

When **state changes → UI changes automatically**.

Conditional rendering controls **which UI appears**.

---

### Basic Example

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {/* If user logged in show dashboard */}
      {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
    </div>
  );
}
```

Output if `true`:

```
Welcome User
```

Output if `false`:

```
Please Login
```

---

# Types of Conditional Rendering in React

There are **three main patterns**.

1. **if statements**
2. **ternary operator**
3. **logical AND (`&&`)**

Each has a **different use case**.

---

# 1. if Statements

---

### When to Use

Use `if` when:

- logic is **complex**
- multiple conditions exist
- readability matters

Important rule:

`if` cannot be written directly inside JSX.

JSX allows **expressions**, not statements.

So `if` must be used **before return**.

---

### Example 1

```jsx
function LoginStatus() {
  const isLoggedIn = true;

  // variable to store UI
  let message;

  // conditional logic
  if (isLoggedIn) {
    message = <h1>Welcome back</h1>;
  } else {
    message = <h1>Please login</h1>;
  }

  return (
    <div>
      {/* render message */}
      {message}
    </div>
  );
}
```

---

### Dry Run

```
isLoggedIn = true

if block runs
message = "Welcome back"

JSX renders:
<h1>Welcome back</h1>
```

---

### Example 2 — Multiple Conditions

```jsx
function UserRole() {
  const role = "admin";

  let panel;

  if (role === "admin") {
    panel = <h1>Admin Panel</h1>;
  } else if (role === "editor") {
    panel = <h1>Editor Panel</h1>;
  } else {
    panel = <h1>User Dashboard</h1>;
  }

  return <div>{panel}</div>;
}
```

---

### Advantages

- readable
- scalable
- good for complex logic

---

### Tradeoff

Slightly more code.

---

# 2. Ternary Operator

---

### Problem It Solves

Simple **if-else inside JSX**.

Syntax:

```javascript
condition ? trueValue : falseValue;
```

---

### React Example

```jsx
function Greeting() {
  const isLoggedIn = false;

  return (
    <div>
      {/* ternary condition inside JSX */}

      {isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Login</h1>}
    </div>
  );
}
```

---

### Dry Run

```
isLoggedIn = false

condition fails

React renders:
Please Login
```

---

### Example — Show Button

```jsx
function AuthButton() {
  const isLoggedIn = true;

  return (
    <div>{isLoggedIn ? <button>Logout</button> : <button>Login</button>}</div>
  );
}
```

---

### Example — Nested Ternary

```jsx
function StatusMessage() {
  const status = "loading";

  return (
    <div>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <p>Error occurred</p>
      ) : (
        <p>Data loaded</p>
      )}
    </div>
  );
}
```

---

### Tradeoff

Nested ternaries become **hard to read**.

Bad example:

```
condition1 ? condition2 ? A : B : C
```

Avoid deep nesting.

Better solution → **if statement**.

---

# 3. Logical AND (`&&`)

---

### Problem

Sometimes we want:

> Render something **only if condition is true**

Example:

```
Show notification only if unread messages exist
```

Instead of writing:

```jsx
condition ? <Component /> : null;
```

React allows shorter syntax.

---

### Syntax

```jsx
condition && <Component />;
```

---

### Example

```jsx
function Notification() {
  const unreadMessages = 3;

  return (
    <div>
      {/* show notification only if messages exist */}

      {unreadMessages > 0 && <p>You have {unreadMessages} new messages</p>}
    </div>
  );
}
```

---

### Dry Run

Case 1

```
unreadMessages = 3

3 > 0 = true

React renders message
```

Case 2

```
unreadMessages = 0

0 > 0 = false

React renders nothing
```

---

### Important Edge Case

If you write:

```jsx
{
  count && <p>Message</p>;
}
```

And `count = 0`.

React will render:

```
0
```

Because `0` is a valid renderable value.

Better approach:

```jsx
{
  count > 0 && <p>Message</p>;
}
```

---

# Real World Examples

---

## Loading State

```jsx
function App() {
  const loading = true;

  return (
    <div>
      {loading && <p>Loading...</p>}

      {!loading && <p>Data Loaded</p>}
    </div>
  );
}
```

---

## Empty List Case

```jsx
function Users() {
  const users = [];

  return (
    <div>
      {users.length === 0 ? <p>No users found</p> : <p>Users available</p>}
    </div>
  );
}
```

---

## Conditional Component

```jsx
function Dashboard() {
  const isAdmin = true;

  return (
    <div>
      <h1>Dashboard</h1>

      {isAdmin && <button>Delete User</button>}
    </div>
  );
}
```

---

# Common Patterns in React Apps

---

### Pattern 1 — Early Return

```jsx
function Profile({ user }) {
  // if no user
  if (!user) {
    return <p>Please login</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
```

---

### Pattern 2 — Component Guards

```jsx
function ProtectedPage({ isAuth }) {
  if (!isAuth) {
    return <h1>Access Denied</h1>;
  }

  return <h1>Welcome to Dashboard</h1>;
}
```

---

### Pattern 3 — Conditional Components

```jsx
function App() {
  const page = "home";

  return (
    <div>
      {page === "home" && <Home />}
      {page === "profile" && <Profile />}
      {page === "settings" && <Settings />}
    </div>
  );
}
```

---

# When To Use Which

| Situation                     | Best Method    |
| ----------------------------- | -------------- |
| Simple if-else UI             | Ternary        |
| Render only if condition true | `&&`           |
| Complex logic                 | `if` statement |
| Multiple conditions           | `if / else if` |

---

# Common Mistakes

### 1. Writing if inside JSX

Wrong

```jsx
return (
  <div>
    if(isLoggedIn){...}
  </div>
);
```

JSX does **not allow statements**.

---

### 2. Deep ternary nesting

Bad:

```
condition ? A : condition2 ? B : C
```

---

### 3. Rendering `0`

Wrong:

```jsx
{
  count && <p>Hello</p>;
}
```

---

# Tradeoffs

| Method       | Pros             | Cons                 |
| ------------ | ---------------- | -------------------- |
| if statement | best readability | cannot be inside JSX |
| ternary      | compact          | messy if nested      |
| && operator  | shortest         | edge cases           |

---

# Real Production Use Cases

Conditional rendering is used everywhere.

Examples:

1. Authentication UI
2. Loading states
3. Error states
4. Feature flags
5. Permission based UI
6. Empty states
7. Notifications
8. Modals
9. Form validation

---

# Synthesis Questions

1. Why can't `if` be written inside JSX?
2. When should you use `&&` instead of ternary?
3. What problem occurs when using `count && component`?
4. Why are nested ternaries discouraged?
5. How do you render a component only when user is admin?
6. How do you show loading spinner during API calls?

---
