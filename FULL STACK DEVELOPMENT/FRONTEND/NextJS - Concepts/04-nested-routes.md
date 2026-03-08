Perfect. Noted and **locked** ✅

I will **follow this exact Tailwind + dark theme style** going forward:

* `bg-background`
* `text-foreground`
* `text-primary`
* `text-accent`
* Centered layout using `flex min-h-screen items-center justify-center`
* Minimal CSS only for **clarity**, not design

Your example is now the **baseline pattern**.

---

We now move **exactly to the next topic as per your fixed order**.

Save this as:

```
topics/04-nested-routes.md
```

---

# Nested Routes in Next.js

## Why Nested Routes Exist

### The Problem (Flat Routing Limitation)

So far, we learned simple routes like:

* `/`
* `/blog`
* `/about`

But real applications are **hierarchical**, not flat.

Examples:

* `/blog/post`
* `/blog/archive`
* `/dashboard/settings`
* `/dashboard/profile`

In plain React:

* You manually nest routes
* You manage parent-child route logic
* Complexity increases fast

---

### The Solution (Nested Routes in Next.js)

Next.js supports **nested routes naturally** using **nested folders**.

Key idea:

> **Folder inside a folder = nested URL**

No extra code.
No router nesting logic.
Just folders.

---

## What are Nested Routes

### Definition

A **nested route** is a route that exists **inside another route**, represented by a **subfolder**.

---

### Analogy

Think of a **folder tree on your computer**:

```
Documents/
└── Projects/
    └── Notes.txt
```

You don’t jump directly to `Notes.txt`.
You go through:

```
Documents → Projects → Notes.txt
```

URLs work the same way.

---

### Visual / Line Diagram Explanation

```
app/
└── blog/
    ├── page.tsx        → /blog
    └── post/
        └── page.tsx    → /blog/post
```

---

## How Nested Routing Works Internally (High Level)

1. Next.js scans folders inside `app/`
2. Each folder adds one URL segment
3. When a `page.tsx` is found, it becomes a route
4. Parent folders define the **path prefix**

That’s all.

---

## Creating Your First Nested Route

### Step 1: Current State

You already have:

```
app/blog/page.tsx → /blog
```

---

### Step 2: Create a Nested Folder

Create this structure:

```
app/blog/post/page.tsx
```

---

### Step 3: Add Code (Follow Your CSS Pattern)

```tsx
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold text-primary">
        Blog Post Page
      </h1>

      <p className="mt-2 text-accent">
        This is a nested route inside /blog.
      </p>
    </div>
  );
}
```

---

### Step 4: Result

Visit:

```
http://localhost:3000/blog/post
```

You now have:

* Parent route → `/blog`
* Child route → `/blog/post`

---

## Multiple Nested Routes Example

```
app/
└── blog/
    ├── page.tsx              → /blog
    ├── post/
    │   └── page.tsx          → /blog/post
    └── archive/
        └── page.tsx          → /blog/archive
```

Each nested folder adds **one more level** to the URL.

---

## Important Rules (Must Remember)

### Rule 1: Folder Structure = URL Structure

```
blog/post/page.tsx → /blog/post
```

---

### Rule 2: Parent Route Does NOT Need Special Code

* `/blog` works independently
* `/blog/post` works independently
* No linking logic required yet

---

### Rule 3: Nesting Has No Limit

You can do:

```
/blog/post/comments/likes
```

As long as folders exist.

---

## What We Are NOT Using Yet

We are **NOT using**:

* Shared layouts
* `<Link />`
* Navigation
* Dynamic routes

Important note:

> Right now, every page is **isolated**.

We will fix that later using **Layouts** (explicitly in a future topic).

---

## Real-Life Applications

Nested routes are used for:

* Blog sections
* Dashboards
* Settings pages
* Documentation sites

Example:

```
/dashboard
/dashboard/settings
/dashboard/settings/security
```

---

## Summary

* Nested routes are created using **nested folders**
* No routing configuration needed
* URL structure mirrors folder structure
* Simple, scalable, and intuitive
* Parent and child routes are independent

---

## Next Topic (As Per Your Order)

### **05 – Dynamic Routes**

We will learn:

* Variable URLs
* `/blog/1`
* `/blog/hello-world`
* `[slug]` concept (only naming, not deep yet)

When ready, say:

```
Next topic
```

We continue **cleanly, slowly, and in strict order**.
