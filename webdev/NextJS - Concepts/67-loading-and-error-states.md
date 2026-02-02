Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/67-loading-and-error-states.md
```

---

# Loading and Error States in Next.js

## Why This Topic Exists

### The Problem

You now know:

* Server Components fetch data **during render**
* Client Components fetch data **after hydration**

A common misconception at this stage is:

> “If server fetch happens before HTML is sent, why do we need loading states at all?”

And another confusion:

> “Where do errors go if fetching fails on the server?”

Without understanding loading and error states, you will face:

* Blank screens during slow requests
* Unhandled promise errors
* Confusing crashes in production
* Poor UX on slow networks

---

### The Solution

Understand **why loading and error states still exist in Next.js**, even with server-side fetching, and how they fit into the rendering model.

Key idea:

> **Rendering is not always instant. Networks are slow. Errors are inevitable. UI must represent these states.**

---

## What Are Loading and Error States

### Definition

* **Loading State**:
  UI shown while data or code is still being resolved.

* **Error State**:
  UI shown when rendering or data fetching fails.

These states exist in **both server and client rendering**, but are handled differently.

---

### Analogy

Think of an **elevator display**:

* “Going up…” → loading
* “Out of service” → error

The building still exists, but the user needs feedback.

---

### Visual / Line Diagram Explanation

```
Request
 → Fetching data
   → (Loading UI)
 → Success → Render content
 → Failure → Render error UI
```

UI must reflect **each phase**.

---

## Loading States in Next.js (Conceptual)

### Important Clarification

Even with Server Components:

* Data fetching can take time
* HTML can be **streamed**
* Parts of UI may wait on data

Therefore:

> **Loading is not just a client concern.**

---

### Two Broad Categories

1. Loading in **Client Components**
2. Loading in **Server Components**

We’ll understand the concept first.
(Implementation with `loading.tsx` and `Suspense` comes next.)

---

## Loading in Client Components (Quick Recap)

### Why It’s Required

Client fetching happens **after render**, so:

* UI renders without data
* Loading state is mandatory

---

### Example (Client)

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return <div>{users.length}</div>;
}
```

Here:

* Loading UI is **manual**
* Developer controls it

---

## Loading in Server Components (Mental Model)

### Important Shift in Thinking

Server Components:

* Fetch before HTML is complete
* But rendering may still be **asynchronous**
* Especially with:

  * Multiple fetches
  * Nested components
  * Streaming

So Next.js needs a way to say:

> “This part of the UI is not ready yet.”

---

### Key Insight

> **Loading states in Server Components are handled by the framework, not by `useState`.**

You do **not** write:

```tsx
const [loading, setLoading] = useState(true); // ❌
```

Instead:

* Next.js controls loading boundaries

(Exact APIs come next topic.)

---

## Error States in Next.js (Conceptual)

### Where Errors Can Happen

Errors may occur:

1. During data fetching
2. During rendering
3. During code execution

And they can happen in:

* Server Components
* Client Components

---

## Error Handling in Client Components

### Pattern

Client errors must be handled locally:

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/products")
      .then(res => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return <p>Loaded</p>;
}
```

Why:

* Client errors happen after hydration
* Server error boundaries do not catch them

---

## Error Handling in Server Components (Mental Model)

### How Server Errors Work

If a Server Component:

* Throws an error
* Or fetch fails
* Or rendering crashes

Then:

> **Next.js stops rendering that route and looks for an error boundary.**

You do not catch errors with `try/catch` for UI here.

Instead:

* Framework-level error handling kicks in

---

### Example Server Error

```tsx
export default async function Page() {
  const res = await fetch("https://api.example.com/data");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return <div>OK</div>;
}
```

This error:

* Does NOT crash the server
* Does NOT show stack trace to user
* Is caught by route-level error UI

(We will implement this later.)

---

## Why Centralized Error Handling Is Better

Benefits:

* Consistent error UI
* No duplicated try/catch
* Clear separation of concerns
* Safer production behavior

---

## Common Mistakes

### Mistake 1

Trying to manage server loading with `useState`

### Mistake 2

Catching server errors inside components instead of letting boundaries handle them

### Mistake 3

Not handling client fetch errors

### Mistake 4

Assuming server rendering means “no loading ever”

---

## Mental Model to Remember

* Client loading → manual
* Server loading → framework-driven
* Client errors → local handling
* Server errors → boundary-based handling

Do not mix these.

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* `loading.tsx`
* `error.tsx`
* Error recovery
* Nested error boundaries
* Global error handling
* Suspense

These are coming **immediately next**, one by one.

---

## Summary

* Loading and error states are unavoidable
* Server rendering does not remove loading
* Client loading is manual
* Server loading is declarative
* Client errors are handled locally
* Server errors are handled by boundaries
* Understanding this prevents misuse of hooks

---

## Next Topic (Strict Order)

### **68 – Sequential Data Fetching**

We will learn:

* What sequential fetching is
* Why it can be slow
* When it happens unintentionally

When ready, say:

```
next
```

Continuing exactly in order.
