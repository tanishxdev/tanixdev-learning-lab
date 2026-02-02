
# Recovering from Errors in Next.js

## Why Error Recovery Exists

### The Problem

You already learned that:

* `error.tsx` catches errors
* A fallback UI is shown
* The app does not crash

But a new problem appears:

Once an error happens:

* The route is **stuck in error state**
* User must refresh the page
* This is bad UX for **temporary failures**

Examples of temporary failures:

* Network glitch
* API timeout
* Server cold start
* Race condition

In these cases, the app **can recover**, but without support, it won’t.

---

### The Solution

Next.js provides a **built-in recovery mechanism** using:

```
reset()
```

Key idea:

> **Allow the user to retry rendering the route without a full page refresh**

---

## What is Error Recovery in Next.js

### Definition

**Error recovery** is the ability to:

* Clear the current error
* Re-run the route rendering
* Attempt to load the page again

This is done via the `reset` function provided to `error.tsx`.

---

### Analogy

Think of:

* Page load → failed
* User clicks “Retry”
* Browser retries the request

But here:

* No full reload
* Only the **route segment retries**

---

### Visual / Line Diagram Explanation

```
page.tsx throws error
        ↓
error.tsx rendered
        ↓
User clicks Retry
        ↓
reset() called
        ↓
page.tsx re-runs
```

---

## How `reset()` Works (High Level)

1. Error occurs during rendering
2. Next.js renders `error.tsx`
3. Next.js provides a `reset` function
4. Calling `reset()`:

   * Clears the error boundary
   * Re-attempts rendering the route

Important:

* This is **not a reload**
* It is a **re-render of the segment**

---

## Practical Example: Recoverable Error

### Step 1: Blog Page That Sometimes Fails

`app/blog/page.tsx`

```tsx
export default function Page() {
  // Simulate random failure
  if (Math.random() < 0.5) {
    throw new Error("Random blog load failure");
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-primary">
        Blog Page Loaded
      </h1>

      <p className="mt-2 text-accent">
        Sometimes this page fails, sometimes it works.
      </p>
    </div>
  );
}
```

---

### Step 2: Error UI With Recovery

`app/blog/error.tsx`

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
        Failed to load blog
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

### Step 3: What You Will Observe

1. Navigate to `/blog`
2. Sometimes:

   * Page loads normally
3. Sometimes:

   * Error UI appears
4. Click **Try again**
5. Page retries:

   * May succeed
   * Or fail again

This is **real recovery behavior**.

---

## When Recovery Works (Very Important)

### Recovery Works When:

* Error is **temporary**
* Error is **non-deterministic**
* External dependency failed
* Network-related issues

Examples:

* API timeout
* Server cold start
* Rate limiting

---

### Recovery Does NOT Work When:

* Error is **deterministic**
* Bug exists in code
* Always throws error

Example:

```ts
throw new Error("Always fails");
```

Retrying won’t help.

---

## Common Mistake to Avoid

### Mistake: Expecting `reset()` to Fix Bugs

`reset()`:

* Does NOT fix broken logic
* Does NOT change code
* Only retries execution

Bug must be fixed in code.

---

## Important Rules (Must Remember)

### Rule 1: `reset()` Requires Client Component

* `error.tsx` must be `"use client"`
* Because `reset()` is triggered by user interaction

---

### Rule 2: Recovery Is Scoped

* Only retries the **current route segment**
* Does not affect parent or sibling routes

---

### Rule 3: Recovery Is Optional

* You don’t have to add a retry button
* But it’s highly recommended for UX

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* Error recovery in nested routes
* Errors in layouts
* Global error recovery

Those are **next topics** and build on this.

---

## Real-Life Applications

Recovery is used for:

* Retrying failed API calls
* Dashboard reloads
* Data-heavy pages
* User-friendly error handling

Every serious app needs this.

---

## Summary

* Errors can be recoverable
* `reset()` retries rendering
* No full page reload needed
* Useful for temporary failures
* Does not fix code bugs

