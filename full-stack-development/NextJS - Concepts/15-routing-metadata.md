# Routing Metadata in Next.js

## Why Routing Metadata Exists

### The Problem

So far, our pages render UI correctly, but **web pages are more than UI**.

Every real page needs **metadata**, such as:

* Page title (shown in browser tab)
* Page description (used by search engines)
* Social preview info (Open Graph, Twitter)
* Icons and favicons

In plain React:

* You manually manipulate `document.title`
* You use third-party libraries (like `react-helmet`)
* Metadata logic is mixed with UI code
* Hard to manage at scale

This leads to:

* Repetition
* Bugs
* Poor SEO discipline

---

### The Solution

Next.js introduces **Routing Metadata**.

Key idea:

> **Metadata is tied to routes, not components**

Each route can define:

* Its own metadata
* In a structured, type-safe way
* Without touching the DOM manually

---

## What is Routing Metadata

### Definition

**Routing Metadata** is a Next.js feature that allows you to define **page-level metadata** (title, description, etc.) directly inside route files.

Metadata can be defined in:

* `page.tsx`
* `layout.tsx`

And it applies **automatically** to that route.

---

### Analogy

Think of a **book**:

* Content → inside the pages
* Metadata → title, author, summary on the cover

Routing metadata is the **cover information** for each route.

---

### Visual / Line Diagram Explanation

```
Route
├── layout.tsx   → shared metadata (optional)
└── page.tsx     → page-specific metadata
```

Result in browser:

```
[ Tab Title ]
[ Page Content ]
```

---

## How Routing Metadata Works (High Level)

1. Next.js scans route files
2. It looks for a `metadata` export
3. It merges metadata from:

   * Root layout
   * Nested layouts
   * Page
4. Final metadata is injected into `<head>`

You **never touch `<head>` manually**.

---

## Defining Metadata (Static)

### Basic Example in a Page

`app/blog/page.tsx`

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read articles and tutorials on our blog",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold text-primary">
        Blog Page
      </h1>

      <p className="mt-2 text-accent">
        Blog articles and learning resources.
      </p>
    </div>
  );
}
```

---

### What Just Happened

* `metadata` is **not a React component**
* It is a **special Next.js export**
* Next.js automatically applies it to `/blog`

Browser tab now shows:

```
Blog
```

Search engines see the description.

---

## Metadata in Layouts (Shared Metadata)

Metadata can also live in `layout.tsx`.

Example:

`app/(app)/layout.tsx`

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Dashboard",
  },
  description: "User dashboard area",
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

### Effect

* `/dashboard` → `Dashboard`
* `/dashboard/settings` → `Settings | Dashboard`

This avoids repetition.

---

## Important Rules (Must Remember)

### Rule 1: Metadata is Route-Based

* Metadata belongs to **routes**
* Not reusable UI components

---

### Rule 2: Metadata Merges Automatically

Order of priority:

```
Root layout
→ Nested layout
→ Page
```

Closest wins.

---

### Rule 3: No Client-Side APIs

❌ Do NOT use:

* `document.title`
* `useEffect` for metadata

Metadata runs on the **server**.

---

## What We Are NOT Doing Yet

We are **NOT covering yet**:

* Dynamic metadata
* Metadata using params
* Open Graph images
* Twitter cards

These require:

* **Dynamic Routes**
* **generateMetadata** (future topic)

We will learn them later.

---

## Real-Life Applications

Routing metadata is used for:

* SEO optimization
* Social sharing previews
* Accessibility
* Professional product pages

Every production app uses this.

---

## Summary

* Routing metadata defines page-level meta info
* Defined using `metadata` export
* Works in `page.tsx` and `layout.tsx`
* Automatically merged by Next.js
* No DOM manipulation needed
* Clean, scalable, and SEO-friendly
