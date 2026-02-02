
# Linking Component Navigation in Next.js

## Why Linking Exists

### The Problem

So far, we created multiple routes:

* `/`
* `/blog`
* `/blog/post`
* `/dashboard`

But there is a **big missing piece**:

> How does a user move from one page to another?

In plain HTML or React, we use:

```html
<a href="/blog">Blog</a>
```

### What’s Wrong With `<a>` Tags?

Using `<a>` causes:

* Full page reload
* App state reset
* Slower navigation
* Poor user experience

This breaks the **SPA (Single Page App)** feeling that React gives.

---

### The Solution

Next.js provides a special component:

> **`<Link />` from `next/link`**

This enables:

* Client-side navigation
* No full page reload
* Faster transitions
* Preserved state

---

## What is the `<Link />` Component

### Definition

`<Link />` is a Next.js component used to **navigate between routes client-side**, without refreshing the page.

---

### Analogy

Think of two ways to move between rooms:

* `<a>` tag → exit the building and re-enter
* `<Link />` → walk through an internal corridor

Same destination, very different experience.

---

### Visual / Line Diagram Explanation

```
<a href="/blog">
→ Browser reloads page
→ App restarts

<Link href="/blog">
→ JavaScript intercepts click
→ Only content changes
```

---

## How `<Link />` Works (High Level)

1. User clicks a `<Link />`
2. Next.js intercepts the click
3. It fetches the next route in the background
4. It swaps the page content
5. No full reload happens

This is why navigation feels instant.

---

## Basic Usage of `<Link />`

### Example: Linking Home → Blog

`app/page.tsx`

```tsx
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold text-primary">
        Home Page
      </h1>

      <Link
        href="/blog"
        className="mt-4 text-accent underline"
      >
        Go to Blog
      </Link>
    </div>
  );
}
```

---

### What This Does

* Navigates to `/blog`
* No page refresh
* Faster than `<a>`

---

## Linking Nested Routes

### Example: Blog → Blog Post

`app/blog/page.tsx`

```tsx
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold text-primary">
        Blog Page
      </h1>

      <Link
        href="/blog/post"
        className="mt-2 text-accent underline"
      >
        Read a Post
      </Link>
    </div>
  );
}
```

URL becomes:

```
/blog/post
```

---

## Important Rules (Must Remember)

### Rule 1: Always Use `<Link />` for Internal Routes

Use `<Link />` when:

* Navigating inside the app

Use `<a>` when:

* Linking to external sites (Google, GitHub)

---

### Rule 2: `href` Must Match Route Path

This works:

```tsx
<Link href="/blog" />
```

This does NOT exist (will 404):

```tsx
<Link href="/blogs" />
```

---

### Rule 3: `<Link />` Does Not Render `<a>` Automatically (Conceptual)

You don’t need to wrap `<a>` inside `<Link />`.

Correct:

```tsx
<Link href="/blog">Blog</Link>
```

---

## Styling Links (Your Tailwind Setup)

You can style `<Link />` directly:

```tsx
<Link
  href="/dashboard"
  className="text-primary hover:underline"
>
  Dashboard
</Link>
```

It behaves like a normal element.

---

## What We Are NOT Doing Yet

We are **NOT covering yet**:

* Active link highlighting
* Programmatic navigation
* `useRouter`

Those are **next topics**.

---

## Real-Life Applications

`<Link />` is used everywhere:

* Navigation menus
* Sidebars
* Breadcrumbs
* Pagination
* CTAs

It is the **default way** to move in a Next.js app.

---

## Summary

* `<Link />` enables client-side navigation
* Faster than `<a>`
* No page reload
* Preserves app state
* Required for internal routing
* Simple and powerful

---
