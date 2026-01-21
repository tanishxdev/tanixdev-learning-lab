

# Parallel Routes in Next.js

## Why Parallel Routes Exist

### The Problem

So far, every route you built renders **one UI tree** per URL.

But real apps often need **multiple independent sections** on the **same route**, for example:

* Dashboard with:

  * Main content
  * Notifications panel
  * Activity feed
* Inbox with:

  * Message list
  * Message preview
* Page where:

  * Sidebar loads fast
  * Main content loads slow

Without parallel routes:

* Everything waits for everything
* One slow section blocks the entire page
* Error in one part breaks the whole UI

This is inefficient and bad UX.

---

### The Solution

Next.js introduces **Parallel Routes**.

Key idea:

> **Render multiple independent UI segments in parallel under the same route**

Each segment:

* Loads independently
* Handles its own loading UI
* Handles its own errors

---

## What Are Parallel Routes

### Definition

**Parallel Routes** allow you to define **multiple named slots** inside the same route segment using special folders:

```
@slotName
```

Each slot:

* Is rendered simultaneously
* Is independent of other slots
* Is controlled by the parent layout

---

### Analogy

Think of a **dashboard screen**:

* Left panel → notifications
* Center panel → main content
* Right panel → activity feed

All appear together, but:

* Each can load or fail independently

---

### Visual / Line Diagram Explanation

```
Same URL (/dashboard)

┌───────────────┐
│ @sidebar      │
├───────────────┤
│ @main         │
├───────────────┤
│ @activity     │
└───────────────┘
```

All rendered in parallel.

---

## How Parallel Routes Work (High Level)

1. You define **named slots** using `@folder`
2. Parent `layout.tsx` receives these slots as props
3. You decide **where to render each slot**
4. Next.js renders all slots in parallel

---

## Creating Parallel Routes (Practical)

### Example Use Case

Dashboard with:

* Main content
* Sidebar

Both should:

* Load independently
* Not block each other

---

### Step 1: Folder Structure

```
app/dashboard/
├── layout.tsx
├── @main/
│   └── page.tsx
└── @sidebar/
    └── page.tsx
```

Important:

* `@main` and `@sidebar` are **parallel route slots**
* They are NOT part of the URL

URL remains:

```
/dashboard
```

---

### Step 2: Dashboard Layout

`app/dashboard/layout.tsx`

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

Key points:

* Slot names become **props**
* You control placement

---

### Step 3: Main Slot Page

`app/dashboard/@main/page.tsx`

```tsx
export default function Page() {
  return (
    <h1 className="text-2xl font-bold text-primary">
      Dashboard Main Content
    </h1>
  );
}
```

---

### Step 4: Sidebar Slot Page

`app/dashboard/@sidebar/page.tsx`

```tsx
export default function Page() {
  return (
    <ul className="space-y-2 text-accent">
      <li>Overview</li>
      <li>Analytics</li>
      <li>Settings</li>
    </ul>
  );
}
```

---

### Result

* Visit `/dashboard`
* Sidebar and main content render together
* They are **independent UI trees**

---

## Loading and Error Handling in Parallel Routes

Each slot can have its own:

```
loading.tsx
error.tsx
```

Example:

```
@sidebar/loading.tsx
@main/error.tsx
```

Behavior:

* Sidebar loading doesn’t block main
* Error in sidebar doesn’t crash main

This is extremely powerful.

---

## Important Rules (Must Remember)

### Rule 1: Slot Folders Start With `@`

```
@sidebar
@main
```

Without `@`, it becomes a normal route.

---

### Rule 2: Slots Do NOT Affect URL

```
/dashboard/@sidebar → ❌
/dashboard          → ✅
```

Slots are **layout-only**, not routes.

---

### Rule 3: Layout Must Accept Slot Props

If layout does not render a slot:

* That slot is ignored
* Nothing shows

---

## Common Mistakes

### Mistake 1: Expecting Slots to Change URL

Parallel routes:

* Do not create paths
* Only create UI regions

---

### Mistake 2: Forgetting Slot Props in Layout

If you forget:

```tsx
{sidebar}
```

That slot will never render.

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* Unmatched routes
* Conditional routes
* Intercepting routes
* Parallel + intercepting combinations

Those are **next topics**.

---

## Real-Life Applications

Parallel routes are used for:

* Dashboards
* Email clients
* Admin panels
* Multi-pane layouts

They enable **modern app UIs**.

---

## Summary

* Parallel routes render multiple UI trees together
* Created using `@slot` folders
* Controlled by parent layout
* Independent loading and errors
* URL remains unchanged
