Continuing **strictly in sequence**.

Save this as:

```
topics/50-server-and-client-components.md
```

---

# Server and Client Components (Next.js)

## Why This Topic Exists

### The Problem

After introducing **React Server Components (RSC)**, a big question appears:

* If components run on the server by default…
* How do we handle:

  * Clicks
  * Forms
  * State
  * Effects
  * Browser APIs?

Pure Server Components **cannot handle interactivity**.

But pure Client Components **send too much JS**.

We need a **clear rule system** to combine both safely.

---

### The Solution

**Server and Client Components working together**.

Key idea:

> **Use Server Components for data + structure, Client Components for interactivity.**

Next.js enforces this with **clear boundaries**.

---

## What Are Server vs Client Components

### Server Components (Recap)

**Server Components:**

* Run only on the server
* Do NOT ship JS to browser
* Can access:

  * Databases
  * Secrets
  * File system
* Cannot:

  * Use `useState`, `useEffect`
  * Handle clicks
  * Access `window`

They are the **default**.

---

### Client Components

### Definition

A **Client Component** is a component that:

* Runs in the browser
* Ships JavaScript to the client
* Can handle:

  * State
  * Effects
  * Events
  * Browser APIs

Client Components are **explicitly marked**.

---

## How to Create a Client Component

### `"use client"` Directive

To make a Client Component:

```tsx
"use client";

export default function Button() {
  return <button>Click me</button>;
}
```

Important rules:

* `"use client"` must be:

  * At the **top of the file**
  * Before any imports
* It marks the **entire file** as client-side

---

## Visual / Mental Model

Think in layers:

```
Server Components
  ├── Fetch data
  ├── Build structure
  └── Import Client Components
        ├── Handle clicks
        ├── Manage state
        └── Run in browser
```

Server Components **can import** Client Components.
Client Components **cannot import** Server Components.

This rule is critical.

---

## Import Rules (Very Important)

### Allowed

```tsx
// Server Component
import Button from "./Button"; // Client Component

export default function Page() {
  return <Button />;
}
```

This is valid.

---

### Not Allowed ❌

```tsx
// Client Component
"use client";

import ServerOnly from "./ServerOnly"; // ❌

export default function Page() {
  return <ServerOnly />;
}
```

Reason:

* Client cannot import server logic
* Browser cannot run server code

---

## Why the Rule Exists

If client components could import server components:

* Server-only code would leak
* Secrets could be exposed
* Bundles would break

So Next.js **strictly enforces direction**:

> **Server → Client (allowed)**
> **Client → Server (not allowed)**

---

## Practical Example (Correct Pattern)

### Server Component (Page)

```tsx
import Counter from "./Counter";

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Counter />
    </div>
  );
}
```

---

### Client Component (Counter)

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

Result:

* Page structure rendered on server
* Counter JS shipped to browser
* Only interactive part gets JS

This is **ideal architecture**.

---

## What Happens to JavaScript Bundles

Key insight:

> **Only Client Components add to the JS bundle.**

Server Components:

* Zero JS cost for browser

This is why Next.js performance is strong.

---

## When to Use Client Components

Use Client Components **only when needed**:

* Click handlers
* Form inputs
* Modals
* Animations
* `useState`, `useEffect`
* Browser APIs

Default to Server Components otherwise.

---

## Common Mistakes

### Mistake 1: Marking Everything as `"use client"`

❌ This removes all RSC benefits
❌ Large JS bundles
❌ Slower app

---

### Mistake 2: Using Hooks in Server Components

```tsx
export default function Page() {
  const [x, setX] = useState(0); // ❌
}
```

Hooks require client execution.

---

### Mistake 3: Accessing `window` in Server Components

```tsx
console.log(window.location); // ❌
```

Server has no browser.

---

## File-Level Boundary (Important)

The `"use client"` directive:

* Applies to the **entire file**
* Also applies to everything imported **inside that file**

So be careful where you place it.

---

## What We Are NOT Covering Yet

Not covered yet:

* Rendering lifecycle details
* Streaming + client boundaries
* Data fetching patterns
* Composition patterns (advanced)

Those are upcoming topics.

---

## Real-Life Architecture Pattern

Typical Next.js page:

```
Page (Server)
 ├── Header (Server)
 ├── ProductList (Server)
 ├── Filters (Client)
 └── CartButton (Client)
```

Only what **must** be interactive becomes client-side.

---

## Summary

* Server Components are default
* Client Components are opt-in via `"use client"`
* Server → Client imports allowed
* Client → Server imports forbidden
* Client Components ship JS
* Minimize Client Components for performance

---

## Next Topic (Continuing Sequence)

### **51 – Rendering Lifecycle in RSCs**

We will learn:

* Request → render → stream → hydrate flow
* Where Server Components run
* Where Client Components activate

When ready, say:

```
next
```

Continuing strictly in order.
