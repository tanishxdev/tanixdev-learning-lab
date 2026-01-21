# Title Metadata in Next.js

## Why Title Metadata Exists

### The Problem

Every web page needs a **clear and meaningful title**.

Problems without a proper title system:

* Browser tabs show generic or repeated titles
* SEO suffers (search engines rely heavily on titles)
* In large apps, titles become:

  * Duplicated
  * Inconsistent
  * Hard to manage

In plain React:

* You manually set `document.title`
* You repeat logic across pages
* You risk bugs when routes change

This approach **does not scale**.

---

### The Solution

Next.js provides a **first-class title system** as part of **Routing Metadata**.

Key idea:

> **Titles are declared per route and automatically composed**

No DOM manipulation.
No side effects.
No repetition.

---

## What is Title Metadata

### Definition

**Title metadata** controls the text shown in:

* Browser tab
* Search engine results
* History entries

In Next.js, title metadata is defined using the `title` field inside `metadata`.

---

### Analogy

Think of a **book series**:

* Each book has its own title
* But all belong to the same series

Example:

* Chapter: `Settings`
* Series: `Dashboard`

Final title:

```
Settings | Dashboard
```

Next.js lets you define this pattern cleanly.

---

### Visual / Line Diagram Explanation

```
Root Layout Title
    ↓
Section Layout Title
    ↓
Page Title
    ↓
Final Browser Title
```

Nearest definition wins or composes.

---

## How Title Metadata Works (High Level)

1. Next.js reads `title` metadata from layouts and pages
2. It merges them based on nesting
3. It computes a final string
4. It injects it into `<title>` on the server

You never touch `<head>` manually.

---

## Defining a Simple Title

### Static Title in a Page

`app/blog/page.tsx`

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold text-primary">
        Blog Page
      </h1>

      <p className="mt-2 text-accent">
        Welcome to the blog.
      </p>
    </div>
  );
}
```

Result in browser tab:

```
Blog
```

---

## Title Templates (Most Important Part)

### The Problem Without Templates

If you manually define titles everywhere:

* `Dashboard`
* `Dashboard Settings`
* `Dashboard Profile`

You repeat `"Dashboard"` many times.

This is error-prone.

---

### The Solution: Title Templates

Define a **template** in a layout.

`app/(app)/layout.tsx`

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Dashboard",
  },
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {children}
    </div>
  );
}
```

---

### How This Works

* `default` → used when no page title is defined
* `template` → used when a page defines a title

---

### Page Using the Template

`app/(app)/dashboard/page.tsx`

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <h1 className="text-3xl font-bold text-primary">
      Dashboard Home
    </h1>
  );
}
```

Final browser title:

```
Home | Dashboard
```

---

## When Page Has No Title

If a page **does not define** a title:

```tsx
// no metadata export
```

Then Next.js uses:

```
default: "Dashboard"
```

Browser tab:

```
Dashboard
```

---

## Important Rules (Must Remember)

### Rule 1: Titles Are Resolved Top-Down

Order:

```
Root layout
→ Nested layout
→ Page
```

Nearest definition applies.

---

### Rule 2: Templates Only Apply Downward

* A layout template applies to:

  * Its children
* It does NOT affect parent routes

---

### Rule 3: Titles Are Server-Only

Do NOT use:

* `document.title`
* `useEffect`

Title metadata runs on the **server**.

---

## What We Are NOT Doing Yet

We are **NOT covering yet**:

* Dynamic titles using route params
* Titles based on fetched data
* `generateMetadata`

These require:

* Dynamic Routes
* Data Fetching

We will learn them later.

---

## Real-Life Applications

Title metadata is used for:

* SEO ranking
* Browser usability
* Accessibility
* Professional polish

Every serious app relies on this.

---

## Summary

* Title metadata controls browser tab titles
* Defined using `metadata.title`
* Can be static or templated
* Layouts provide defaults and templates
* Pages provide specific titles
* Clean, scalable, and SEO-friendly

---