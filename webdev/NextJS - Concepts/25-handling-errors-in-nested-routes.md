

# Handling Errors in Nested Routes

## Why Nested Route Error Handling Exists

### The Problem

You already know:

* `error.tsx` catches errors
* It works per **route segment**
* Recovery using `reset()` retries the segment

But now introduce **nested routes**.

Example structure:

```
/blog
/blog/post
/blog/post/comments
```

New questions arise:

* If `/blog/post/comments` crashes:

  * Which `error.tsx` should run?
* Parent’s error UI or child’s?
* Does the entire blog break or only comments?

Without clear rules:

* Error handling becomes confusing
* UX becomes inconsistent

---

### The Solution

Next.js uses **nearest error boundary wins**.

Key idea:

> **An error is caught by the closest `error.tsx` in the route tree**

This keeps failures **isolated and predictable**.

---

## What “Nested Route Error Handling” Means

### Definition

In Next.js, when an error occurs in a nested route:

* Next.js looks **upwards** in the folder tree
* Finds the **nearest `error.tsx`**
* Uses that file to render the error UI

---

### Analogy

Think of **safety nets** in a building:

* Each floor may have its own net
* If a net exists on your floor → it catches you
* Otherwise → you fall to the next net above

---

### Visual / Line Diagram Explanation

```
app/
└── blog/
    ├── error.tsx        ← parent error boundary
    ├── page.tsx
    └── post/
        ├── error.tsx    ← child error boundary
        └── page.tsx
```

Error in `/blog/post`:

* `post/error.tsx` catches it
* `blog/error.tsx` is ignored

---

## How Error Resolution Works (Step-by-Step)

When an error happens:

1. Error is thrown in `page.tsx` or component
2. Next.js checks:

   * Does this folder have `error.tsx`?
3. If yes:

   * Use it
4. If no:

   * Move to parent folder
5. Repeat until:

   * An `error.tsx` is found
   * Or root is reached

---

## Practical Example (Using Your Structure)

From your project:

```
app/blog/
├── layout.tsx
├── error.tsx
├── page.tsx
└── [slug]/
    ├── page.tsx
    └── comments/
        └── page.tsx
```

---

### Case 1: Error in `/blog/[slug]/comments`

Modify:

`app/blog/[slug]/comments/page.tsx`

```tsx
export default function Page() {
  throw new Error("Comments failed to load");

  return <div>Comments</div>;
}
```

---

### What Happens?

* No `error.tsx` in `comments/`
* No `error.tsx` in `[slug]/`
* `blog/error.tsx` exists

Result:

➡️ `app/blog/error.tsx` is rendered

---

### Case 2: Add a Nested Error Boundary

Add:

```
app/blog/[slug]/error.tsx
```

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
      <h2 className="text-xl font-bold text-primary">
        Post error
      </h2>

      <p className="mt-2 text-accent">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        Retry post
      </button>
    </div>
  );
}
```

Now:

* Error in `/blog/[slug]/comments`
* Closest `error.tsx` = `[slug]/error.tsx`

➡️ This UI is shown instead of `blog/error.tsx`

---

## Important Rules (Must Remember)

### Rule 1: Nearest Error Boundary Wins

* Child `error.tsx` overrides parent
* Parent is fallback only

---

### Rule 2: Error Scope Is Limited

An error in:

```
/blog/[slug]/comments
```

Does NOT break:

```
/about
/contact
/dashboard
```

Only that route subtree is affected.

---

### Rule 3: Layouts Stay Mounted

* Error replaces **page content**
* Layout does NOT unmount
* This keeps navigation stable

(We already learned layouts earlier.)

---

## Common Mistakes

### Mistake 1: Expecting Parent Error UI to Always Show

If a child has its own `error.tsx`,

* Parent error UI is skipped

This is intentional.

---

### Mistake 2: Forgetting `"use client"`

Every `error.tsx`:

* Must be a client component
* Because of `reset()`

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* Errors inside layouts
* Global error handling
* Error handling with parallel routes

Those are **next topics**.

---

## Real-Life Applications

Nested error handling is used for:

* Comment sections
* Widgets inside pages
* Tabs inside dashboards
* Partial failures without full-page crash

This is **production-grade behavior**.

---

## Summary

* Errors are caught by nearest `error.tsx`
* Nested routes can have nested error boundaries
* Child overrides parent
* Errors are scoped and isolated
* Layouts remain stable
