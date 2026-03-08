# Error Handling in Next.js

## Why Error Handling Exists

### The Problem

In real applications, things **will break**.

Examples:

* API fails
* Database is down
* Invalid params
* Unexpected runtime error
* Bug in component logic

Without proper error handling:

* App crashes
* White screen
* User sees nothing
* No recovery path

In plain React:

* You manually write `try/catch`
* Or wrap components in Error Boundaries
* Hard to manage per-route errors

---

### The Solution

Next.js provides **route-segment level error handling**.

Key idea:

> **Each route can define its own error boundary using a special file**

This makes errors:

* Predictable
* Isolated
* Recoverable

---

## What is Error Handling in Next.js

### Definition

Error handling in Next.js is done using a special file:

```
error.tsx
```

This file:

* Catches runtime errors in the route segment
* Acts like an Error Boundary
* Shows a fallback UI instead of crashing the app

---

### Analogy

Think of:

* **Page** → Normal execution
* **Error boundary** → Safety net

If something falls:

* Error boundary catches it
* App doesn’t crash completely

---

### Visual / Line Diagram Explanation

```
page.tsx throws error
        ↓
error.tsx catches it
        ↓
Fallback UI shown
```

Only for that route segment.

---

## How Error Handling Works (High Level)

1. Next.js renders a page
2. If an error occurs during rendering
3. Next.js looks for nearest `error.tsx`
4. That UI is rendered instead

Important:

* Errors are **scoped**
* One route error doesn’t break the whole app

---

## Creating an Error Boundary (Practical)

### Example: Blog Route Error

Current structure (simplified):

```
app/blog/
├── page.tsx
├── loading.tsx
```

Add:

```
app/blog/error.tsx
```

---

### `app/blog/error.tsx`

```tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-primary">
        Something went wrong
      </h2>

      <p className="mt-2 text-accent">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}
```

---

### Important Notes (Do NOT Skip)

#### Why `"use client"` is required

* Error UI needs:

  * Click handler (`reset`)
* That requires client-side code
* Hence `"use client"` is mandatory

We will properly learn **Client Components later**.
For now, just accept this rule.

---

## Forcing an Error (To Test)

### Modify `app/blog/page.tsx`

```tsx
export default function Page() {
  throw new Error("Blog page crashed intentionally");

  return (
    <div>
      Blog Page
    </div>
  );
}
```

---

### What You Will See

* Navigate to `/blog`
* Page throws error
* `error.tsx` UI appears
* App does NOT crash
* Only `/blog` is affected

This confirms error handling is working.

---

## Important Rules (Must Remember)

### Rule 1: File Name Must Be `error.tsx`

❌ `ErrorBoundary.tsx`
❌ `blog-error.tsx`

✅ `error.tsx`

---

### Rule 2: Error Scope Is Per Route Segment

```
app/blog/error.tsx
```

* Catches errors in:

  * `/blog`
  * `/blog/[slug]`
* Does NOT affect:

  * `/about`
  * `/contact`

---

### Rule 3: `reset()` Re-renders the Route

* Clears the error
* Retries rendering
* Useful for temporary failures

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* Nested error boundaries
* Errors in layouts
* Global error handling
* Recovering from errors deeply

These are **next topics** and will build on this.

---

## Real-Life Applications

Error handling is used for:

* API failures
* Permission errors
* Invalid URLs
* Runtime bugs

Every production app needs this.

---

## Summary

* Error handling uses `error.tsx`
* Acts as route-level error boundary
* Prevents app crashes
* Scoped per route
* Supports retry using `reset()`

---
