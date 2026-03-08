Continuing **strictly in order**.

Save this as:

```
topics/09-file-colocation.md
```

---

# File Colocation in Next.js

## Why File Colocation Exists

### The Problem

As applications grow, files get scattered:

* Pages in one folder
* Components in another
* Helpers somewhere else

This causes:

* Too much folder jumping
* Harder understanding of **what belongs to what**
* Poor maintainability

In real projects, developers want **related files to stay together**.

---

### The Solution

Next.js supports **file colocation**.

Key idea:

> **Keep all files related to a route in the same folder**

Next.js only treats **special files** as routes.
Everything else is ignored.

---

## What is File Colocation

### Definition

**File colocation** means:

> Placing components, helpers, styles, and utilities **next to the page that uses them**, without affecting routing.

---

### Analogy

Think of a **study notebook**:

* One chapter
* Notes, diagrams, examples
* All in the same place

Instead of spreading notes across different books.

---

### Visual / Line Diagram Explanation

```
app/blog/
├── page.tsx          → route
├── Header.tsx        → component
├── Footer.tsx        → component
├── utils.ts          → helper
└── styles.css        → styles
```

Only `page.tsx` creates a route.
Other files are **ignored by routing**.

---

## How File Colocation Works Internally

1. Next.js scans folders
2. It looks only for **special file names**
3. Everything else is treated as normal code
4. You can import those files freely

---

## Special Files That Affect Routing

These file names are **special**:

* `page.tsx`
* `layout.tsx`
* `not-found.tsx`
* `loading.tsx`
* `error.tsx`
* `route.ts`

Everything else is **safe for colocation**.

---

## Practical Example (Using Your Setup)

### Folder Structure

```
app/blog/
├── page.tsx
├── BlogHeader.tsx
├── BlogFooter.tsx
└── helpers.ts
```

---

### `BlogHeader.tsx`

```tsx
export default function BlogHeader() {
  return (
    <h2 className="text-xl font-semibold text-primary">
      Blog Header
    </h2>
  );
}
```

---

### `helpers.ts`

```ts
export function formatTitle(title: string) {
  return title.toUpperCase();
}
```

---

### Use Them in `page.tsx`

```tsx
import BlogHeader from "./BlogHeader";
import { formatTitle } from "./helpers";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <BlogHeader />

      <p className="mt-2 text-accent">
        {formatTitle("file colocation example")}
      </p>
    </div>
  );
}
```

Routing remains:

```
/blog
```

No change. No issues.

---

## Important Rules (Very Important)

### Rule 1: Only Special Files Create Routes

```
page.tsx → route
BlogHeader.tsx → ignored by router
```

---

### Rule 2: You Can Colocate Freely

You can colocate:

* Components
* Hooks
* Utils
* Styles
* Constants

As long as file names are **not special**.

---

### Rule 3: Improves Maintainability

* Easier deletion
* Easier refactor
* Easier understanding

One folder = one feature.

---

## What We Are NOT Doing Yet

We are **NOT yet covering**:

* Private folders
* Route groups
* Shared layouts

These are **next topics** and will build on this concept.

---

## Real-Life Applications

File colocation is used in:

* Blogs
* Dashboards
* Feature-based apps
* Large-scale production apps

Industry-standard practice.

---

## Summary

* File colocation keeps related files together
* Only special file names affect routing
* Improves readability and maintainability
* Safe and recommended in Next.js

---

## File Colocation in Next.js (Simple Explanation)

---

### 1. What is File Colocation?

**File colocation** means:

> Keep files **close to where they are used**

In Next.js App Router, this means:

* Route files
* Components
* Styles
* Utils

are placed **inside the same route folder**.

---

### 2. Without File Colocation (Bad for scaling)

```
components/
  BlogHeader.tsx
  BlogCard.tsx

styles/
  blog.css

app/blog/page.tsx
```

Problem:

* You jump between folders
* Hard to maintain
* Route logic is scattered

---

### 3. With File Colocation (Recommended)

```
app/blog/
  page.tsx
  layout.tsx
  loading.tsx
  error.tsx
  not-found.tsx
  BlogHeader.tsx
  BlogCard.tsx
  blog.module.css
```

Now:

* Everything related to **/blog** is in one place
* Easy to reason
* Easy to delete or move

---

### 4. What Files Can Be Colocated?

Inside any route folder, you can keep:

* UI components
* helper functions
* CSS modules
* constants
* types

Example:

```
app/blog/utils.ts
app/blog/constants.ts
app/blog/BlogList.tsx
```

---

### 5. Important Rule (Very Important)

Only these filenames create routes automatically:

```
page.tsx
layout.tsx
loading.tsx
error.tsx
not-found.tsx
route.ts
```

Other files are **ignored by routing**.

So this is safe:

```
app/blog/Button.tsx
```

It will NOT become `/blog/button`.

---

### 6. When NOT to Colocate

Do not colocate if:

* Component is reused across many routes
* Shared UI (Navbar, Footer)
* Global utilities

Those go to:

```
components/
lib/
```

---

### 7. Mental Model (Remember This)

```
Route folder = mini app
```

Each route folder is a **self-contained unit**.

---

### 8. One-Line Summary

File colocation keeps route-related files together for clarity and scalability.

---
