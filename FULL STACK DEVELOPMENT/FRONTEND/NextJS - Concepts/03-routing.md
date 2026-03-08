Perfect. I’m aligned with everything you said.

* ✅ **Snippet setup acknowledged** (`npage`)
* ✅ **02 – Project Setup skipped** (already done)
* ✅ **We start from Topic 03: Routing**
* ✅ **Tailwind only for minimal clarity**
* ✅ **Dark theme respected**
* ✅ **No future concepts used**
* ✅ **Same depth, same structure, slow & clean**

Save this as:

```
topics/03-routing.md
```

---

# Routing in Next.js (App Router)

## Why Routing Exists

### The Problem (Without Routing)

In a real application, we never have just **one page**.

We usually need:

* Home page → `/`
* Blog page → `/blog`
* About page → `/about`
* Contact page → `/contact`

In **plain React**:

* There is no routing
* We install `react-router-dom`
* We manually map URLs to components
* We write configuration code

This creates:

* Extra setup
* Boilerplate
* Mental overhead for beginners

---

### The Solution (Next.js Routing)

Next.js removes all this complexity by using **file-based routing**.

Key idea:

> **Folders define URLs**
> **`page.tsx` defines what renders at that URL**

No router setup.
No configuration.
No mapping.

---

## What is Routing in Next.js

### Definition

**Routing in Next.js** means:

> Creating URLs automatically based on folder and file names inside the `app/` directory.

---

### Analogy

Think of a **file explorer**:

* Open a folder → you reach a location
* Open a file → you see content

Next.js works the same way:

```
Folder → URL
page.tsx → Page UI
```

---

### Visual / Line Diagram Explanation

```
app/
├── page.tsx        → /
├── blog/
│   └── page.tsx    → /blog
└── about/
    └── page.tsx    → /about
```

No router file.
No switch cases.
No path strings.

---

## How Routing Works Internally (High-Level)

(We are keeping this **simple** for now.)

1. Next.js scans the `app/` folder
2. It looks for files named `page.tsx`
3. Each `page.tsx` becomes a route
4. Folder path becomes the URL

That’s it.

---

## Creating Your First Route (Practical)

### Step 1: Current State

You already have:

```
src/app/page.tsx
```

This maps to:

```
URL → /
```

---

### Step 2: Create a New Route `/blog`

Create this folder structure:

```
src/app/blog/page.tsx
```

---

### Step 3: Use Your Snippet (`npage`)

```tsx
export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-primary">
        Blog Page
      </h1>

      <p className="mt-2 text-accent">
        This page is created using file-based routing.
      </p>
    </div>
  );
}
```

---

### Step 4: Result

* Visit: `http://localhost:3000/blog`
* You will see the Blog Page
* No restart needed
* No router config

---

## Important Rules of Routing (Very Important)

### Rule 1: File Must Be Named `page.tsx`

❌ This will NOT work:

```
blog/Home.tsx
```

✅ This WILL work:

```
blog/page.tsx
```

---

### Rule 2: Folder Name = URL Segment

```
app/blog/page.tsx → /blog
app/docs/page.tsx → /docs
```

---

### Rule 3: Component Name Does NOT Matter

This is valid:

```tsx
export default function Anything() {
  return <div>Hello</div>;
}
```

Next.js only cares about:

* File name → `page.tsx`
* Default export

---

## Multiple Routes Example

```
app/
├── page.tsx          → /
├── blog/
│   └── page.tsx      → /blog
├── about/
│   └── page.tsx      → /about
└── contact/
    └── page.tsx      → /contact
```

Each route is **isolated** and **clean**.

---

## What We Are NOT Using Yet (Important)

We are **NOT using**:

* `<Link />`
* Navigation
* Layouts
* Nested routes
* Dynamic routes

If you hear these terms:

* **Don’t worry**
* We will learn them **one by one** in upcoming topics

---

## Real-Life Applications

### Where This Helps

* Blogs
* Dashboards
* Documentation sites
* Marketing websites

Every page = one folder + one file.

---

## Summary

* Routing in Next.js is **file-based**
* `app/` folder controls routing
* `page.tsx` creates a route
* Folder name becomes the URL
* No router configuration required
* Very beginner-friendly and scalable

---

## Next Topic (As Per Your Order)

### **04 – Nested Routes**

We will learn:

* Routes inside routes
* `/blog/post`
* URL hierarchy
* Folder nesting logic

When you’re ready, say:

```
Next topic
```

We continue cleanly, slowly, and in order.
