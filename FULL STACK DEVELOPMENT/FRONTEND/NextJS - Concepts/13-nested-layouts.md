Continuing **strictly in order**, with **React comparison included** and **same depth + clarity**.

Save this as:

```
topics/13-nested-layouts.md
```

---

# Nested Layouts in Next.js

## Why Nested Layouts Exist

### The Problem

Layouts are great, but real applications have **multiple UI layers**.

Example:

* Global app layout → header, footer
* Dashboard layout → sidebar
* Page content → main area

In URLs:

* `/dashboard`
* `/dashboard/settings`
* `/dashboard/profile`

All these pages should share:

* Global layout
* Dashboard-specific layout

But **not** affect:

* `/`
* `/blog`

---

### The Solution

Next.js allows **layouts inside layouts**, called **Nested Layouts**.

Key idea:

> **Layouts stack based on folder nesting**

Each folder can add **one more UI layer**.

---

## What is a Nested Layout

### Definition

A **nested layout** is a `layout.tsx` placed inside a subfolder, which:

* Wraps all pages under that folder
* Is stacked on top of parent layouts
* Persists across navigation within its scope

---

### Analogy

Think of **boxes inside boxes**:

```
Outer box  → App layout
Inner box  → Dashboard layout
Item       → Page content
```

Each layer adds structure.

---

### Visual / Line Diagram Explanation

```
app/layout.tsx
 └── app/dashboard/layout.tsx
      └── app/dashboard/page.tsx
```

Render order:

```
RootLayout
 └── DashboardLayout
      └── Page
```

---

## How Nested Layouts Work (High Level)

1. Next.js finds the **root layout**
2. It then finds layouts down the folder tree
3. Each layout wraps the next
4. Page renders at the deepest level

Layouts are **persistent** during navigation.

---

## Practical Example

### Goal

* Global layout for whole app
* Dashboard layout only for `/dashboard/*`

---

### Folder Structure

```
app/
├── layout.tsx                 → global
├── page.tsx                   → /
└── dashboard/
    ├── layout.tsx             → dashboard layout
    ├── page.tsx               → /dashboard
    └── settings/
        └── page.tsx           → /dashboard/settings
```

---

### `app/dashboard/layout.tsx`

(Follow your dark + minimal Tailwind style)

```tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <aside className="w-48 p-4 border-r border-secondary">
        <p className="font-bold text-primary">
          Dashboard Sidebar
        </p>
      </aside>

      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}
```

---

### `app/dashboard/page.tsx`

```tsx
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary">
        Dashboard Home
      </h1>

      <p className="mt-2 text-accent">
        This page uses a nested layout.
      </p>
    </div>
  );
}
```

---

### `app/dashboard/settings/page.tsx`

```tsx
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary">
        Dashboard Settings
      </h1>

      <p className="mt-2 text-accent">
        Nested layouts persist across routes.
      </p>
    </div>
  );
}
```

---

## Compare with React (Very Important)

### How You’d Do This in React

With React Router:

```jsx
<Route element={<RootLayout />}>
  <Route element={<DashboardLayout />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/dashboard/settings" element={<Settings />} />
  </Route>
</Route>
```

Problems:

* Verbose
* Hard to read
* Layout logic mixed with routing config

---

### How Next.js Changes the Mental Model

In Next.js:

* Folder structure defines layout hierarchy
* No explicit route config
* Layout logic is colocated with UI

Think like this:

> **React: wrap routes manually**
> **Next.js: wrap folders automatically**

---

## Important Rules (Must Remember)

### Rule 1: Layouts Stack Top to Bottom

* Root layout always applies
* Deeper layouts add more UI

---

### Rule 2: Layouts Persist

* Sidebar stays mounted
* Only page content changes

This is critical for:

* Performance
* State retention

---

### Rule 3: Closest Layout Has Priority

* Styles and structure closest to page dominate
* Parents still wrap children

---

## What We Are NOT Doing Yet

We are **NOT covering yet**:

* Multiple root layouts (next topic)
* Templates vs layouts
* Metadata inside layouts

These are **explicit upcoming topics**.

---

## Real-Life Applications

Nested layouts are used for:

* Dashboards
* Admin panels
* Settings pages
* Complex SaaS apps

Industry-standard architecture.

---

## Summary

* Nested layouts allow layered UI
* Defined using multiple `layout.tsx`
* Stack based on folder depth
* Persist across navigation
* Cleaner than React Router patterns

---

## Goal (What We Want to Check)

You want to confirm:

* Sidebar (layout) **does NOT change**
* Only the **page content changes**
* Layout is **persisting**, not remounting

We’ll do this using:

* `/dashboard/user-one`
* `/dashboard/user-two`

---

## Step 1: Folder Structure

Create this structure:

```
app/
└── dashboard/
    ├── layout.tsx
    ├── page.tsx
    ├── user-one/
    │   └── page.tsx
    └── user-two/
        └── page.tsx
```

---

## Step 2: Dashboard Layout (with simple links)

`app/dashboard/layout.tsx`

```tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-56 p-4 border-r border-secondary">
        <h2 className="text-xl font-bold text-primary">
          Dashboard
        </h2>

        {/* Simple links for testing layout persistence */}
        <nav className="mt-4 flex flex-col gap-2">
          <a href="/dashboard/user-one" className="text-accent">
            User One
          </a>
          <a href="/dashboard/user-two" className="text-accent">
            User Two
          </a>
        </nav>
      </aside>

      {/* Page content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
```

Important:

* Sidebar is **inside layout**
* `{children}` is where page content changes

---

## Step 3: User One Page

`app/dashboard/user-one/page.tsx`

```tsx
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary">
        User One Page
      </h1>

      <p className="mt-2 text-accent">
        This is user one content.
      </p>
    </div>
  );
}
```

---

## Step 4: User Two Page

`app/dashboard/user-two/page.tsx`

```tsx
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary">
        User Two Page
      </h1>

      <p className="mt-2 text-accent">
        This is user two content.
      </p>
    </div>
  );
}
```

---

## Step 5: How to Verify Layout Persistence (Very Important)

Now do this carefully:

1. Open

   ```
   http://localhost:3000/dashboard/user-one
   ```

2. Click **User Two**

3. Observe:

### What SHOULD change

* Page heading
* Page text

### What should NOT change

* Sidebar
* Dashboard title
* Sidebar position

If sidebar stays **exactly the same** → ✅
That means **nested layout is working correctly**.

---

## Compare with React (This Will Click Mentally)

### In React Router

You’d wonder:

* Is layout remounting?
* Is state resetting?
* Did I nest routes correctly?

You often add `console.log` to check.

---

### In Next.js

Mental model:

> If layout file does not change,
> it **will not remount**.

Folder-based = guaranteed behavior.

---

## One Extra Pro Tip (Optional but Useful)

If you want **proof**, add this inside `DashboardLayout`:

```tsx
console.log("Dashboard layout mounted");
```

* Refresh page → log appears once
* Click User One / User Two → log does NOT repeat

That confirms persistence.

(You can remove it after testing.)

---

## What We Are NOT Using Yet

* `<Link />` component (next topic)
* Client navigation
* Active link styling

We are doing this **intentionally**, step by step.

---

## Summary (Key Takeaway)

* Sidebar in `layout.tsx` persists
* Page content changes via `{children}`
* Switching routes proves nested layouts work
* This is the **correct way to verify layouts**

---