# Active Links in Next.js

## Why Active Links Exist

### The Problem

You now know how to navigate using `<Link />`.

But in real apps, navigation is not complete without **visual feedback**.

Example:

* Sidebar with links:

  * Home
  * Blog
  * Dashboard

When the user is on `/blog`, they should **clearly see** that:

* “Blog” is active
* Other links are inactive

Without this:

* Users get confused
* Navigation feels unprofessional
* UX is weak

In plain HTML:

* No built-in way to know the current URL

In React Router:

* You use `NavLink`
* Extra APIs and logic

---

### The Solution

Next.js gives us a simple hook:

> **`usePathname()` from `next/navigation`**

This lets us:

* Read the current URL path
* Compare it with link paths
* Style the active link accordingly

---

## What Are Active Links

### Definition

An **active link** is a navigation link that visually indicates the **current route** the user is on.

---

### Analogy

Think of a **map with a “You are here” marker**.

Active links tell the user:

> “You are on this page right now.”

---

### Visual / Line Diagram Explanation

```
Current URL: /blog

Links:
- /        → inactive
- /blog    → ACTIVE
- /contact → inactive
```

---

## How Active Links Work (High Level)

1. Read the current URL path
2. Compare it with each link’s `href`
3. If they match → mark as active
4. Apply different styles

Next.js does NOT do this automatically.
We do it **explicitly**.

---

## The Key API: `usePathname()`

### What It Is

`usePathname()` is a **client-side hook** that returns:

```
Current URL path as a string
```

Example:

* On `/blog` → `"/blog"`
* On `/dashboard/settings` → `"/dashboard/settings"`

---

### Important (Very Important)

`usePathname()`:

* Works **only in Client Components**
* Requires `"use client"`

We have not formally learned **Client Components** yet.

So for now, remember:

> If you see `"use client"`, it means the code runs in the browser.
> We will study this deeply later.

---

## Creating an Active Navigation Component

### Step 1: Create a Nav Component

Create:

```
src/app/components/Nav.tsx
```

(We are colocating components near routes for now.
File colocation is a future topic, we’ll formalize it later.)

---

### Step 2: Write the Code (Follow Your CSS Style)

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      <Link
        href="/"
        className={
          pathname === "/"
            ? "text-primary font-bold"
            : "text-accent"
        }
      >
        Home
      </Link>

      <Link
        href="/blog"
        className={
          pathname === "/blog"
            ? "text-primary font-bold"
            : "text-accent"
        }
      >
        Blog
      </Link>
    </nav>
  );
}
```

---

### What’s Happening (Step-by-Step)

1. `"use client"`
   → Required because `usePathname()` runs in the browser

2. `usePathname()`
   → Gives current URL path

3. `pathname === "/blog"`
   → Checks if link is active

4. Conditional class
   → Active link uses `text-primary font-bold`

---

## Using the Nav Component in a Page

Example: `app/page.tsx`

```tsx
import Nav from "./components/Nav";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <Nav />

      <h1 className="mt-6 text-3xl font-bold text-primary">
        Home Page
      </h1>
    </div>
  );
}
```

Now:

* Active link updates automatically
* No reloads
* Clean UX

---

## Handling Nested Routes (Important Case)

Problem:

* On `/blog/post`
* `/blog` should still be active

Instead of strict equality:

```ts
pathname === "/blog"
```

Use:

```ts
pathname.startsWith("/blog")
```

Example:

```tsx
pathname.startsWith("/blog")
  ? "text-primary font-bold"
  : "text-accent"
```

This is very common in dashboards.

---

## What We Are NOT Doing Yet

We are **NOT covering yet**:

* `useRouter()`
* Programmatic navigation
* Layout-based navigation
* Server Components vs Client Components (deep)

These are **upcoming topics**.

---

## Real-Life Applications

Active links are used in:

* Navbar menus
* Sidebar navigation
* Tabs
* Breadcrumbs

Every professional app uses them.

---

## Summary

* Active links show the current route
* Built using `usePathname()`
* Requires Client Component
* Compare `pathname` with `href`
* Apply conditional styling
* Essential for good UX

---

## Active Links in Next.js (Mini Project)

We will do this **very simply**, step-by-step.
Goal: **highlight the active page link** in the navbar.

---

### 1. What “Active Link” Means

When user is on:

```
/dashboard
```

The **Dashboard link should look active**
(blue, bold, underlined — anything).

---

### 2. Tool We Use (Important)

Next.js App Router gives:

```
usePathname()
```

It tells us **current URL path**.

---

### 3. Mini Project Structure

```
app/
  layout.tsx
  dashboard/
    page.tsx
  profile/
    page.tsx
  _components/
    Navbar.tsx
```

---

### 4. Navbar Component (Core Logic)

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 border-b p-4">
      <Link
        href="/dashboard"
        className={pathname === "/dashboard" ? "font-bold text-blue-600" : ""}
      >
        Dashboard
      </Link>

      <Link
        href="/profile"
        className={pathname === "/profile" ? "font-bold text-blue-600" : ""}
      >
        Profile
      </Link>
    </nav>
  );
}
```

Key idea:

```
pathname === link → active
```

---

### 5. Root Layout Using Navbar

```tsx
import Navbar from "./_components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```

---

### 6. Pages

#### Dashboard

```tsx
export default function Page() {
  return <h1>Dashboard Page</h1>;
}
```

#### Profile

```tsx
export default function Page() {
  return <h1>Profile Page</h1>;
}
```

---

### 7. What Happens Now

| URL          | Active Link |
| ------------ | ----------- |
| `/dashboard` | Dashboard   |
| `/profile`   | Profile     |

Automatically updates on navigation.

---

### 8. Common Mistake (Very Important)

Navbar **must be a Client Component**.

That’s why we wrote:

```
"use client";
```

Because:

* `usePathname()` is a client hook

---

### 9. Nested Routes Case (Extra)

If you want:

```
/dashboard/settings
```

to keep Dashboard active:

```ts
pathname.startsWith("/dashboard")
```

---

### 10. Mental Model

```
usePathname() = current URL
compare with href = active link
```

---

### 11. One-Line Summary

Active links work by comparing current path with link path.

---