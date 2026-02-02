Continuing **strictly in sequence**.

Save this as:

```
topics/61-client-only-code.md
```

---

# Client-only Code in Next.js

## Why This Topic Exists

### The Problem

You now clearly understand:

* Server Components (default)
* Client Components (`"use client"`)
* Server-only code (DB, secrets)
* Context Providers (client-side)
* Third-party package constraints

But a **very common source of bugs** still remains:

> **Some code can ONLY run in the browser — never on the server.**

Typical failures look like:

* `window is not defined`
* `document is not defined`
* Event handlers not working
* Animations breaking on build

These errors happen when **client-only code leaks into server execution**.

---

### The Solution

Understand **Client-only Code** and how to **isolate it correctly**.

Key idea:

> **Anything that depends on the browser environment must live inside Client Components and never execute on the server.**

---

## What Is Client-only Code

### Definition

**Client-only code** is:

> **Code that depends on browser APIs and can only execute after hydration in the user’s browser.**

This code:

* Must not run during server rendering
* Must not be imported by Server Components

---

### Analogy

Think of a **steering wheel**:

* Car factory (server) builds the car
* Driver (client) uses the steering wheel
* Steering wheel has no role in the factory

Browser-only code belongs with the driver.

---

### Visual / Line Diagram Explanation

```
Server
  ❌ window
  ❌ document
  ❌ localStorage
  ❌ navigator

Browser
  ✅ window
  ✅ document
  ✅ localStorage
  ✅ events
```

Clear boundary.

---

## Common Examples of Client-only Code

### 1️⃣ Browser APIs

```ts
window.innerWidth
document.title
navigator.userAgent
localStorage.getItem("theme")
```

All of these:

* ❌ Do not exist on server
* ✅ Exist only in browser

---

### 2️⃣ React Hooks That Require Browser

```tsx
useState
useEffect
useLayoutEffect
useRef
```

These hooks:

* Depend on browser lifecycle
* Require Client Components

---

### 3️⃣ Event Handlers

```tsx
<button onClick={handleClick}>Click</button>
```

Events only exist:

* After hydration
* In the browser

---

### 4️⃣ UI Libraries

* Animations
* Modals
* Charts
* Editors

These depend on:

* DOM
* Events
* Layout

---

## How Next.js Handles Client-only Code

### `"use client"` Directive

To mark a file as client-only:

```tsx
"use client";

export default function Component() {
  return <button>Click</button>;
}
```

This tells Next.js:

> “This file must run in the browser.”

---

### What Happens Internally

When Next.js sees `"use client"`:

* File is bundled for browser
* JS is sent to client
* Server rendering skips execution
* Component hydrates later

---

## Rule You Must Remember

> **If a file uses browser APIs or React state/effects, it MUST be a Client Component.**

No exceptions.

---

## Correct Pattern: Isolate Client-only Code

### ❌ Wrong Pattern (Common Mistake)

```tsx
// page.tsx
"use client"; // ❌

export default function Page() {
  return (
    <>
      <h1>Dashboard</h1>
      <Chart />
    </>
  );
}
```

Why this is bad:

* Entire page becomes client-side
* Server benefits lost
* Bigger JS bundle

---

### ✅ Correct Pattern

```tsx
// page.tsx (Server)
import Chart from "./Chart";

export default function Page() {
  return (
    <>
      <h1>Dashboard</h1>
      <Chart />
    </>
  );
}
```

```tsx
// Chart.tsx
"use client";

export default function Chart() {
  return <canvas />;
}
```

Only the **necessary part** is client-side.

---

## Pattern: Accessing Browser APIs Safely

### Use `useEffect`

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Width() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return <p>Width: {width}</p>;
}
```

Why this works:

* `useEffect` runs only in browser
* Server never executes this logic

---

## Pattern: Conditional Browser Access

Never do this:

```ts
window.localStorage.getItem("x"); // ❌
```

Correct pattern:

```tsx
"use client";

if (typeof window !== "undefined") {
  localStorage.getItem("x");
}
```

But preferred:

* Use `useEffect`

---

## Client-only Code Placement Strategy

### Recommended Folder Pattern

```
src/
 ├── components/
 │    ├── client/
 │    │    ├── Modal.tsx
 │    │    ├── Chart.tsx
 │    │    └── Editor.tsx
 │    └── server/
 │         └── DataList.tsx
```

This is optional but helps clarity.

---

## Client-only vs Server-only (Clear Comparison)

| Aspect       | Client-only | Server-only |
| ------------ | ----------- | ----------- |
| Runs where   | Browser     | Server      |
| Uses DOM     | ✅           | ❌           |
| Uses DB      | ❌           | ✅           |
| Uses secrets | ❌           | ✅           |
| Uses state   | ✅           | ❌           |

Never mix these.

---

## Common Mistakes

### Mistake 1

Accessing `window` in Server Components

### Mistake 2

Using `useEffect` without `"use client"`

### Mistake 3

Making layouts client-side unnecessarily

### Mistake 4

Putting heavy logic in client components

---

## Decision Checklist (Before Writing Code)

Ask yourself:

1. Does this code need browser APIs?
2. Does it handle clicks, input, animation?
3. Does it manage UI state?

If **yes** → Client-only

If **no** → Keep it server-side

---

## What We Are NOT Covering Yet

Not covered yet:

* Client Component placement strategies (deep)
* Interleaving server & client trees
* Data fetching in client vs server

These come next.

---

## Summary

* Client-only code runs only in the browser
* Must be marked with `"use client"`
* Includes browser APIs, state, effects, events
* Isolate it to small components
* Never push server logic into client
* Proper isolation keeps apps fast and secure

---

## Next Topic (Strict Order)

### **62 – Client Component Placement**

We will learn:

* Where to place client components
* How placement affects bundles and performance
* Real-world structuring strategies

When ready, say:

```
next
```

Continuing exactly in order, no skips.
