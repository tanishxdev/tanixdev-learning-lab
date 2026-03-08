

# Unmatched Routes in Next.js

## Why Unmatched Routes Exist

### The Problem

You just learned **Parallel Routes**.

Parallel routes introduce **multiple slots** (`@sidebar`, `@main`, etc.) that are rendered together by a layout.

But a real problem appears:

> What if **one slot does not exist** for a given route?

Examples:

* A layout expects `@sidebar`
* But for some route, `@sidebar/page.tsx` is missing
* What should Next.js render there?

Without a clear rule:

* UI breaks
* Layout crashes
* Inconsistent behavior across routes

---

### The Solution

Next.js defines a **clear fallback mechanism** for missing slots.

Key idea:

> **If a parallel route slot is missing, Next.js treats it as an “unmatched route” and looks for a fallback**

This allows:

* Flexible layouts
* Optional UI regions
* Clean reuse of layouts

---

## What Are Unmatched Routes

### Definition

An **Unmatched Route** occurs when:

* A layout expects a parallel route slot (like `@sidebar`)
* But the current route does **not provide** that slot

Next.js then:

* Does **not crash**
* Tries to render a **fallback UI**

---

### Analogy

Think of a dashboard layout with optional panels:

* Some pages show:

  * Sidebar + Main
* Some pages show:

  * Only Main

If Sidebar is missing:

* App should still work
* Sidebar area can be empty or show a default

---

### Visual / Line Diagram Explanation

```
layout expects:
@sidebar + @main

route provides:
@main only

→ @sidebar is unmatched
→ fallback behavior applies
```

---

## How Unmatched Routes Work (High Level)

When rendering a route:

1. Layout declares multiple slots
2. Next.js checks which slots are provided
3. For each missing slot:

   * It becomes an **unmatched route**
4. Next.js looks for a fallback
5. If no fallback:

   * Slot renders nothing

No errors. No crashes.

---

## Practical Example

### Dashboard Layout With Two Slots

```
app/dashboard/
├── layout.tsx
├── @main/
│   └── page.tsx
└── @sidebar/
    └── page.tsx
```

Layout:

```tsx
export default function Layout({
  main,
  sidebar,
}: {
  main: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-secondary p-4">
        {sidebar}
      </aside>

      <main className="flex-1 p-4">
        {main}
      </main>
    </div>
  );
}
```

---

### Now Add a Route Without Sidebar

Add:

```
app/dashboard/settings/page.tsx
```

But **do NOT** add:

```
app/dashboard/@sidebar/settings/page.tsx
```

---

### What Happens?

* URL: `/dashboard/settings`
* `@main` exists → renders
* `@sidebar` is missing → unmatched

Result:

* Sidebar slot renders **nothing**
* Main content still renders
* Layout stays stable

This is **expected behavior**.

---

## Providing a Fallback for Unmatched Routes

### The `default.tsx` File

To control what renders when a slot is missing, Next.js provides:

```
default.tsx
```

This acts as a **fallback UI** for an unmatched slot.

---

### Example: Sidebar Fallback

Create:

```
app/dashboard/@sidebar/default.tsx
```

```tsx
export default function DefaultSidebar() {
  return (
    <p className="text-sm text-accent">
      No sidebar available for this page
    </p>
  );
}
```

---

### New Behavior

* Visit `/dashboard/settings`
* Sidebar is missing
* `default.tsx` renders instead

Now your layout:

* Is flexible
* Does not require every slot everywhere

---

## Important Rules (Must Remember)

### Rule 1: `default.tsx` Is Slot-Specific

* It applies **only** to that `@slot`
* It does not affect other slots

---

### Rule 2: Unmatched Routes Are Not Errors

* They are valid
* Next.js expects them
* They enable optional UI

---

### Rule 3: No `default.tsx` = Empty Slot

If no fallback exists:

* Slot renders `null`
* Layout still works

---

## Common Mistakes

### Mistake 1: Expecting a 404

Unmatched slot:

* Is NOT a missing page
* Is NOT a 404
* It’s just missing UI

---

### Mistake 2: Forcing Slots Everywhere

Not every page needs:

* Sidebar
* Secondary panels

Unmatched routes exist to avoid duplication.

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* Conditional routes
* Intercepting routes
* Parallel + intercepting behavior

Those are the **next topics**.

---

## Real-Life Applications

Unmatched routes are used for:

* Optional sidebars
* Contextual panels
* Feature-specific UI
* Reusable dashboard layouts

They keep layouts **clean and scalable**.

---

## Summary

* Unmatched routes occur when a slot is missing
* Next.js does not crash
* Missing slots render nothing by default
* `default.tsx` provides fallback UI
* Enables flexible parallel layouts

---