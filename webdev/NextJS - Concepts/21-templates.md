# Templates in Next.js

## Why Templates Exist

### The Problem

You already learned **Layouts**.

Layouts:

* Persist between route changes
* Do **not** re-mount when navigating between sibling routes

This is usually good, but sometimes it becomes a **problem**.

### Real Problem Scenario

Consider a flow like:

* `/checkout/address`
* `/checkout/payment`
* `/checkout/confirm`

If you use a **layout**:

* The layout **stays mounted**
* React state inside it **persists**
* Side effects do **not reset**

But sometimes you **want a fresh UI reset** on navigation.

Examples:

* Animations should replay
* Form state should reset
* Local state should not leak across routes

Layouts **cannot do this**.

---

### The Solution

Next.js introduces **Templates**.

Key idea:

> **Templates look like layouts, but they remount on every navigation**

This gives you:

* Same shared structure
* Fresh React tree every time

---

## What is a Template

### Definition

A **Template** is similar to a layout, but:

* It wraps child routes
* It **re-renders and re-mounts** on navigation
* It resets state and effects

File name:

```
template.tsx
```

---

### Analogy

Think of two things:

* **Layout** → Permanent building structure
* **Template** → Temporary stage setup

Every time you change the route:

* Layout stays
* Template is rebuilt

---

### Visual / Line Diagram Explanation

```
Navigation between routes

Layout     → stays mounted
Template   → unmounts + remounts
Page       → changes
```

---

## How Templates Work (High Level)

1. Next.js finds `template.tsx`
2. Wraps matching routes
3. On every navigation:

   * Template is destroyed
   * New template instance is created
4. Child page renders inside it

This is intentional behavior.

---

## Creating a Template (Practical)

### Example Use Case

We want:

* `/checkout/address`
* `/checkout/payment`

Each step should:

* Reset animations
* Reset local UI state

---

### Step 1: Folder Structure

```
app/
└── checkout/
    ├── template.tsx
    ├── address/
    │   └── page.tsx
    └── payment/
        └── page.tsx
```

---

### Step 2: Create `template.tsx`

`app/checkout/template.tsx`

```tsx
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-md p-6 border border-secondary rounded">
        {children}
      </div>
    </div>
  );
}
```

Note:

* Same structure as layout
* But behavior is different

---

### Step 3: Child Pages

`app/checkout/address/page.tsx`

```tsx
export default function Page() {
  return (
    <h1 className="text-2xl font-bold text-primary">
      Address Step
    </h1>
  );
}
```

`app/checkout/payment/page.tsx`

```tsx
export default function Page() {
  return (
    <h1 className="text-2xl font-bold text-primary">
      Payment Step
    </h1>
  );
}
```

---

### Step 4: Navigation Behavior

* Navigate from `/checkout/address` → `/checkout/payment`
* Template **remounts**
* Any local state inside template is reset

This is the **core difference**.

---

## Template vs Layout (Critical Comparison)

| Feature                 | Layout       | Template       |
| ----------------------- | ------------ | -------------- |
| File name               | `layout.tsx` | `template.tsx` |
| Persists between routes | Yes          | No             |
| State preserved         | Yes          | No             |
| Use for navbars         | Yes          | No             |
| Use for flows           | No           | Yes            |

---

## When to Use Templates

Use **Templates** when you need:

* Step-by-step flows
* Fresh animations per route
* Reset state on navigation
* Wizard-style UIs

Do NOT use templates for:

* Global navbars
* Sidebars
* App shells

That’s a **layout job**.

---

## Important Rules (Must Remember)

### Rule 1: Template Does NOT Replace Layout

* You can have both
* Layout wraps template
* Template wraps page

Order:

```
layout → template → page
```

---

### Rule 2: Templates Are Optional

* Most apps don’t need many templates
* Use them only when required

---

### Rule 3: One Template Per Segment

* Works per route segment
* Applies only to its children

---

## What We Are NOT Doing Yet

We are **NOT covering yet**:

* Templates with data fetching
* Templates with server actions
* Templates with parallel routes

Those depend on later topics.

---

## Real-Life Applications

Templates are used for:

* Checkout flows
* Onboarding steps
* Multi-step forms
* Authentication flows

They are **rare but powerful**.

---

## Summary

* Templates are like layouts but remount on navigation
* File name: `template.tsx`
* Used when you need state reset
* Layout persists, template resets
* Ideal for step-based flows

---