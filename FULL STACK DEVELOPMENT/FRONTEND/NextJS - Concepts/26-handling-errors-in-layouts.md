
# Handling Errors in Layouts

## Why Errors in Layouts Need Special Attention

### The Problem

You already learned:

* `error.tsx` catches errors in **pages**
* Nested error boundaries work **per route segment**
* Layouts usually **stay mounted**

Now introduce a new situation:

> What if the **layout itself throws an error**?

Examples:

* Navbar crashes
* Auth logic inside layout fails
* Shared component inside layout throws

If a layout crashes:

* Multiple pages can be affected
* Navigation may break
* Error handling rules are **slightly different**

So we must understand this carefully.

---

### The Core Issue

Layouts:

* Wrap **many routes**
* Are **long-lived**
* Are **shared**

So an error in a layout is **more serious** than an error in a page.

---

## What Happens When a Layout Throws an Error

### Key Rule (Very Important)

> **Errors thrown inside a layout are caught by the nearest `error.tsx` *outside* that layout**

Why?

Because:

* The layout itself cannot catch its own error
* It is the thing that failed

---

### Analogy

Think of:

* Layout → building structure
* Page → room inside the building

If:

* A room breaks → room-level safety works
* The building structure breaks → the **next outer safety system** must handle it

---

### Visual / Line Diagram Explanation

```
layout.tsx throws error
        ↓
Nearest parent error.tsx handles it
```

Not the layout itself.

---

## Practical Example

### Example Structure

```
app/dashboard/
├── layout.tsx
├── error.tsx
├── page.tsx
└── settings/
    └── page.tsx
```

---

### Case 1: Error in `page.tsx`

`app/dashboard/page.tsx`

```tsx
export default function Page() {
  throw new Error("Dashboard page failed");

  return <div>Dashboard</div>;
}
```

Result:

* `app/dashboard/error.tsx` is shown
  (this is expected and already known)

---

### Case 2: Error in `layout.tsx`

`app/dashboard/layout.tsx`

```tsx
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  throw new Error("Dashboard layout crashed");

  return (
    <div>
      {children}
    </div>
  );
}
```

---

### What Happens Now?

* `dashboard/layout.tsx` crashes
* `dashboard/error.tsx` **CANNOT** catch it
* Because the layout itself failed

Next.js looks **outside** this segment.

➡️ The error is caught by the **nearest parent error boundary**

Usually:

```
app/error.tsx   (global)
```

(We’ll learn global errors next.)

---

## Important Rule (Must Remember)

### Layout Cannot Catch Its Own Errors

* `layout.tsx` errors skip:

  * Page-level `error.tsx`
  * Same-segment `error.tsx`
* They bubble **upward**

---

## Why This Design Exists

If layout errors were caught inside:

* Layout would still be broken
* Retrying would re-render broken layout
* App would be stuck

So Next.js:

* Escalates layout failures
* Forces higher-level recovery

This is **intentional and correct**.

---

## Recovery Behavior with Layout Errors

### Can `reset()` Fix Layout Errors?

Only if:

* Error is temporary
* Layout logic may succeed on retry

But:

* If code bug exists
* Retry won’t help

Same rule as before.

---

## Common Mistakes

### Mistake 1: Putting Risky Logic in Layouts

Avoid:

* Data fetching
* Complex logic
* Unstable code

Layouts should be:

* Simple
* Stable
* Structural

---

### Mistake 2: Expecting Segment Error UI to Catch Layout Errors

It won’t.

Always remember:

> **Layout errors bubble upward**

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* Global error handling (`app/error.tsx`)
* Root-level recovery
* Logging strategies

Those are **next topics**.

---

## Real-Life Implications

Layout errors affect:

* Entire dashboards
* Auth shells
* App wrappers

This is why:

* Layouts must be minimal
* Error handling strategy matters

---

## Summary

* Layout errors are special
* A layout cannot catch its own error
* Errors bubble to parent boundary
* Segment `error.tsx` is skipped
* Keep layouts stable and simple

---
