# Navigating Programmatically in Next.js

## Why Programmatic Navigation Exists

### The Problem

So far, navigation happens when a **user clicks a link** using `<Link />`.

But in real applications, navigation often needs to happen **because of logic**, not clicks.

Examples:

* After login → redirect to `/dashboard`
* After logout → redirect to `/login`
* After form submit → go to `/success`
* If user is not authorized → redirect away

Using `<Link />` cannot solve these cases.

We need a way to **navigate using code**.

---

### The Solution

Next.js provides a navigation API via:

> **`useRouter()` from `next/navigation`**

This allows navigation:

* Inside event handlers
* After async actions
* Based on conditions

---

## What is Programmatic Navigation

### Definition

**Programmatic navigation** means changing the current route **using JavaScript logic**, instead of user clicking a link.

---

### Analogy

Think of GPS navigation:

* `<Link />` → user chooses where to go
* Programmatic navigation → app decides where to go

---

### Visual / Line Diagram Explanation

```
User action / Logic
        ↓
   useRouter()
        ↓
  router.push("/path")
        ↓
   URL changes
```

---

## The Key API: `useRouter()`

### What It Is

`useRouter()` is a **client-side hook** that gives you methods to control navigation.

Important methods:

* `push()` → navigate to a route
* `replace()` → navigate without history
* `back()` → go back

---

### Very Important Rule

`useRouter()`:

* Works **only in Client Components**
* Requires `"use client"`

We will go deeper into Client vs Server later.
For now, just remember this rule.

---

## Basic Example: Redirect on Button Click

### Step 1: Create a Page

`app/login/page.tsx`

```tsx
"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  function handleLogin() {
    // Imagine login logic here
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold text-primary">
        Login Page
      </h1>

      <button
        onClick={handleLogin}
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        Login
      </button>
    </div>
  );
}
```

---

### What’s Happening (Step-by-Step)

1. `"use client"`
   → Required for hooks and event handlers

2. `useRouter()`
   → Gives access to navigation methods

3. `router.push("/dashboard")`
   → Navigates to `/dashboard`

No page reload.
Client-side navigation.

---

## `push` vs `replace` (Important Difference)

### `router.push()`

* Adds a new entry to browser history
* User can go back

Example:

```ts
router.push("/dashboard");
```

---

### `router.replace()`

* Replaces current history entry
* User **cannot** go back

Example:

```ts
router.replace("/login");
```

---

### When to Use What

* `push()` → normal navigation
* `replace()` → auth redirects, guards, onboarding

---

## Going Back Programmatically

```ts
router.back();
```

Equivalent to clicking the browser back button.

Used in:

* Cancel buttons
* Modal close actions

---

## Programmatic Navigation with Conditions

Example: Redirect if not logged in

```tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const isLoggedIn = false; // pretend auth check

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, [isLoggedIn, router]);

  return null;
}
```

This pattern is **very common**.

---

## Important Rules (Must Remember)

### Rule 1: Client Component Only

* `useRouter()` does NOT work in Server Components
* Requires `"use client"`

---

### Rule 2: Use `<Link />` When Possible

* Prefer `<Link />` for static navigation
* Use programmatic navigation for logic-based flows

---

### Rule 3: Do NOT Mix With `<a>`

Never do:

```tsx
<a onClick={() => router.push("/blog")}>Blog</a>
```

Always use:

* `<Link />` for UI
* `router.push()` for logic

---

## What We Are NOT Doing Yet

We are **NOT covering yet**:

* Redirects in Server Components
* Route Handlers redirects
* Middleware redirects

Those are **future topics**.

---

## Real-Life Applications

Programmatic navigation is used for:

* Authentication flows
* Form submissions
* Conditional access
* Multi-step flows
* Wizards and onboarding

---

## Summary

* Programmatic navigation = navigation via code
* Done using `useRouter()`
* Works only in Client Components
* `push`, `replace`, `back` are key methods
* Essential for real-world apps

---