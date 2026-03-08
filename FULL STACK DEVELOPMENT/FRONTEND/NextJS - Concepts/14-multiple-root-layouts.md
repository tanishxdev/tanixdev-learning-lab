# Multiple Root Layouts in Next.js

## Why Multiple Root Layouts Exist

### The Problem

So far, we learned:

* One **root layout** (`app/layout.tsx`)
* Nested layouts for sections like `/dashboard`

But real apps often need **completely different app shells**.

Examples:

* Auth pages → simple layout (no navbar, no sidebar)
* App pages → full layout (navbar, sidebar)
* Marketing pages → different header/footer

URLs might look like:

* `/login`
* `/register`
* `/dashboard`
* `/dashboard/settings`

Problem:

* One global layout is **too restrictive**
* You don’t want auth pages wrapped by dashboard UI

---

### The Solution

Next.js allows **Multiple Root Layouts** using **Route Groups**.

Key idea:

> **Each route group can have its own root layout**

This lets you build **entirely different shells** in the same app.

---

## What is a Multiple Root Layout

### Definition

**Multiple Root Layouts** mean:

* More than one `layout.tsx`
* Each acts as a “root” for a group of routes
* Decided by **route groups `( )`**

Only **one root layout applies per route**.

---

### Analogy

Think of a building with **multiple entrances**:

* Front entrance → Office area
* Side entrance → Warehouse
* Back entrance → Staff only

Each entrance leads to a **different structure**, even though it’s the same building.

---

### Visual / Line Diagram Explanation

```
app/
├── (auth)/
│   ├── layout.tsx
│   └── login/
│       └── page.tsx
└── (app)/
    ├── layout.tsx
    └── dashboard/
        └── page.tsx
```

Routes:

* `/login` → uses `(auth)/layout.tsx`
* `/dashboard` → uses `(app)/layout.tsx`

---

## How Multiple Root Layouts Work (High Level)

1. Next.js finds the **route group**
2. It applies the nearest `layout.tsx`
3. That layout becomes the **root** for those routes
4. Other root layouts are ignored for that route

No conflicts. No overlap.

---

## Practical Example (Recommended Pattern)

### Folder Structure

```
app/
├── (auth)/
│   ├── layout.tsx
│   └── login/
│       └── page.tsx
├── (app)/
│   ├── layout.tsx
│   └── dashboard/
│       └── page.tsx
```

---

### Auth Root Layout

`app/(auth)/layout.tsx`

```tsx
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      {children}
    </div>
  );
}
```

Purpose:

* Minimal UI
* No sidebar
* Centered content

---

### App Root Layout

`app/(app)/layout.tsx`

```tsx
export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background text-foreground">
      <aside className="w-56 p-4 border-r border-secondary">
        <h2 className="text-xl font-bold text-primary">
          App Sidebar
        </h2>
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
```

---

### Login Page

`app/(auth)/login/page.tsx`

```tsx
export default function Page() {
  return (
    <h1 className="text-3xl font-bold text-primary">
      Login Page
    </h1>
  );
}
```

URL:

```
/login
```

---

### Dashboard Page

`app/(app)/dashboard/page.tsx`

```tsx
export default function Page() {
  return (
    <h1 className="text-3xl font-bold text-primary">
      Dashboard Home
    </h1>
  );
}
```

URL:

```
/dashboard
```

---

## Compare with React (Very Important)

### How You’d Do This in React

With React Router:

* You manually create multiple layout components
* You manually decide which routes use which layout
* Logic is spread across routing config

Example complexity:

```jsx
<Route element={<AuthLayout />}>...</Route>
<Route element={<AppLayout />}>...</Route>
```

Harder to reason about at scale.

---

### How Next.js Changes the Mental Model

In Next.js:

* Layout choice is **filesystem-based**
* No conditionals
* No route config logic

Think like this:

> **React: choose layout in code**
> **Next.js: choose layout by folder**

---

## Important Rules (Must Remember)

### Rule 1: Route Groups Are Required

Multiple root layouts **only work** with `(group)` folders.

---

### Rule 2: One Root Layout Per Route

* A route can never use two root layouts
* Nearest group layout wins

---

### Rule 3: URLs Stay Clean

Route group names:

* Never appear in URLs
* Only affect structure

---

## What We Are NOT Doing Yet

We are **NOT covering yet**:

* Metadata per root layout
* Auth protection
* Middleware-based layout switching

These are **future topics**.

---

## Real-Life Applications

Multiple root layouts are used for:

* Auth vs App UI
* Admin vs User panels
* Marketing vs Product
* SaaS applications

Very common in production.

---

## Summary

* Multiple root layouts allow different app shells
* Built using route groups
* Each route uses exactly one root layout
* Clean, scalable, and predictable
* Much simpler than React Router patterns
