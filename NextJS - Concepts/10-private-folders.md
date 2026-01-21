Continuing **strictly in order**.

Save this as:

```
topics/10-private-folders.md
```

---

# Private Folders in Next.js

## Why Private Folders Exist

### The Problem

With **file colocation**, we keep many files inside route folders:

* Components
* Helpers
* Constants
* Hooks

But sometimes we also need **folders** to organize things, not just files.

Example:

```
app/blog/
├── page.tsx
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
```

Problem:

* Next.js might **treat folders as routes**
* You may accidentally create URLs you never intended
* Example risk:

  ```
  /blog/components
  ```

This is **dangerous** in large apps.

---

### The Solution

Next.js provides **Private Folders**.

Key idea:

> **Folders starting with `_` are ignored by the router**

They are **100% safe** for organization.

---

## What is a Private Folder

### Definition

A **private folder** is a folder whose name starts with an underscore (`_`), and:

* It does **not** create a route
* It is ignored by the Next.js router
* It is used only for organization

---

### Analogy

Think of **staff-only rooms** in an office:

* Employees can access them
* Customers never see them

Same idea:

* Code can access private folders
* URLs cannot

---

### Visual / Line Diagram Explanation

```
app/blog/
├── page.tsx           → /blog
└── _components/
    ├── Header.tsx
    └── Footer.tsx
```

Result:

* `/blog` → works
* `/blog/_components` → ❌ does not exist

---

## How Private Folders Work Internally

1. Next.js scans folders inside `app/`
2. Any folder starting with `_` is **skipped**
3. Router ignores it completely
4. Files inside can still be imported

---

## Practical Example (Recommended Pattern)

### Folder Structure

```
app/blog/
├── page.tsx
└── _components/
    ├── BlogHeader.tsx
    └── BlogFooter.tsx
```

---

### `_components/BlogHeader.tsx`

```tsx
export default function BlogHeader() {
  return (
    <h2 className="text-2xl font-semibold text-primary">
      Blog Header
    </h2>
  );
}
```

---

### Use in `page.tsx`

```tsx
import BlogHeader from "./_components/BlogHeader";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <BlogHeader />

      <p className="mt-2 text-accent">
        This page uses a private folder.
      </p>
    </div>
  );
}
```

---

## Important Rules (Must Remember)

### Rule 1: `_` Prefix Is Mandatory

✅ Valid private folder:

```
_components
_utils
_private
```

❌ Not private:

```
components
utils
```

---

### Rule 2: Private Folders Never Create Routes

Even if they contain:

* `page.tsx`
* `layout.tsx`

They are **completely ignored** by routing.

---

### Rule 3: Files Are Fully Usable

Private folders:

* Can be imported
* Can contain any logic
* Are safe for large projects

---

## File Colocation vs Private Folders

| Feature             | File Colocation | Private Folder |
| ------------------- | --------------- | -------------- |
| Files near page     | ✅               | ✅              |
| Prevent routes      | ❌               | ✅              |
| Folder organization | Limited         | Excellent      |

Private folders are the **next level** of colocation.

---

## What We Are NOT Doing Yet

We are **NOT covering yet**:

* Route Groups
* Shared layouts
* Multiple root layouts

These build directly on this concept and are next.

---

## Real-Life Applications

Private folders are used for:

* Feature components
* Internal utilities
* Domain logic
* Hooks specific to one route

Industry-standard pattern.

---

## Summary

* Private folders start with `_`
* They are ignored by the router
* Used for safe organization
* Prevent accidental routes
* Perfect for large apps

---

## Next Topic (As Per Your Order)

### **11 – Route Groups**

We will learn:

* Grouping routes without affecting URLs
* `(group)` syntax
* Clean URL + clean structure

When ready, say:

```
Next topic
```

Continuing **slow, clear, and strictly in order**.
