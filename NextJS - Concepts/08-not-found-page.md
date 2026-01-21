Continuing **strictly in order**.

Save this as:

```
topics/08-not-found-page.md
```

---

# Not Found Page in Next.js

## Why a Not Found Page Exists

### The Problem

Users can:

* Type wrong URLs
* Open outdated links
* Bookmark deleted pages

Examples:

* `/blog/does-not-exist`
* `/docs/old/page`
* `/random-url`

If nothing handles this:

* User sees a blank page
* Or a generic browser error
* Bad user experience

---

### The Solution

Next.js allows you to define a **custom Not Found (404) page**.

Key idea:

> **When a route is not matched, show a friendly fallback UI**

---

## What is a Not Found Page

### Definition

A **Not Found page** is a special page that Next.js shows when:

* A route does not exist
* Or you explicitly mark content as “not found”

---

### Analogy

Think of a **reception desk** in a building:

* If someone goes to a wrong room
* The receptionist redirects them politely

Same idea for URLs.

---

### Visual / Line Diagram Explanation

```
Request → Route Match?
   ├── Yes → Show page
   └── No  → Show not-found.tsx
```

---

## How Not Found Works in Next.js

There are **two ways** a Not Found page appears:

1. **Automatically** → route doesn’t exist
2. **Manually** → you trigger it using code (we’ll see later)

For now, we focus on the **automatic** one.

---

## Creating a Global Not Found Page

### Step 1: Create File

Create this file:

```
app/not-found.tsx
```

Important:

* File name must be **exactly** `not-found.tsx`
* It is **not** `page.tsx`

---

### Step 2: Add Code (Follow Your CSS Pattern)

```tsx
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold text-primary">
        404 – Page Not Found
      </h1>

      <p className="mt-2 text-accent">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
```

---

### Step 3: Test It

Visit:

* `/random-url`
* `/blog/this-does-not-exist`

You will see your custom 404 page.

---

## Important Rules (Must Remember)

### Rule 1: File Name Is Special

Only this works:

```
not-found.tsx
```

❌ `404.tsx`
❌ `NotFound.tsx`

---

### Rule 2: Scope Matters

* `app/not-found.tsx` → global (all routes)
* `app/blog/not-found.tsx` → only for `/blog/*`

(Scoped 404s will be explained more later when needed.)

---

### Rule 3: No Routing Logic Required

Next.js automatically:

* Detects missing routes
* Shows `not-found.tsx`

---

## What We Are NOT Doing Yet

We are **NOT yet covering**:

* Programmatic `notFound()`
* Data-based 404s
* Error boundaries vs 404

These are **explicit future topics** in your list.

---

## Real-Life Applications

Not Found pages are important for:

* SEO
* User experience
* Preventing dead ends
* Professional apps

Good 404 pages:

* Explain the issue
* Guide users back

---

## Summary

* Not Found page handles invalid routes
* Created using `not-found.tsx`
* Can be global or route-scoped
* No config needed
* Essential for real apps

---

## Better `not-found.tsx` Page (Clean + Correct)

Your current code is **already correct**.
I’ll show you a **better, production-ready version** while keeping it **simple and readable**.

---

### 1. Recommended File Location

```
app/not-found.tsx
```

This automatically works for **all routes**.

---

### 2. Improved Version (Still Simple)

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-foreground text-center">
      <h1 className="text-4xl font-bold text-primary">
        404 – Page Not Found
      </h1>

      <p className="text-accent max-w-md">
        Sorry, the page you are trying to access does not exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-4 rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Go back home
      </Link>
    </div>
  );
}
```

What improved:

* Clear message
* Action button (UX improvement)
* Centered and readable
* No complexity

---

### 3. How Next.js Uses This File

Next.js automatically shows this page when:

* Route does not exist
* `notFound()` is called inside a page or layout

Example:

```tsx
import { notFound } from "next/navigation";

if (!data) {
  notFound();
}
```

---

### 4. Route-Level `not-found.tsx`

You can also scope it:

```
app/blog/not-found.tsx
```

This will apply **only to `/blog/*` routes**.

---

### 5. What NOT to Do

* Do not use custom routing for 404
* Do not use `useRouter().push()`
* Do not create manual `/404` page (App Router)

---

### 6. Mental Model

```
not-found.tsx = error UI for missing data or route
```

---

### 7. One-Line Summary

`not-found.tsx` is the official and clean way to handle 404 in App Router.

---

Say **next** when ready.
We can go to **error.tsx vs not-found.tsx** or **loading.tsx** next.
