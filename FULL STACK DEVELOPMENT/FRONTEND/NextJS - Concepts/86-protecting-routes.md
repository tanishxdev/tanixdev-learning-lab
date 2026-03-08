Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/86-protecting-routes.md
```

---

# Protecting Routes in Next.js (with Clerk)

## Why This Topic Exists

### The Problem

You can now:

* Authenticate users
* Show conditional UI
* Render different components for logged-in users

But **none of this actually stops access**.

Right now, if someone:

* Knows the URL
* Types it directly
* Uses bookmarks

They can still try to access:

* `/dashboard`
* `/profile`
* `/admin`
* Any sensitive route

Common beginner mistake:

> “I hid the link, so the route is protected.”

This is **false**.

Hiding UI ≠ securing routes.

---

### The Solution

Implement **route protection** at the **server level**, so that:

* Unauthorized users **never see the page**
* Requests are **blocked or redirected**
* Protection is **centralized and consistent**

Key idea:

> **Routes must be protected before rendering begins.**

---

## What Is Route Protection

### Definition

**Route protection** means:

> **Preventing unauthorized users from accessing certain routes, even if they know the URL.**

This is stronger than conditional UI.

---

### Analogy

Think of a **locked room**:

* Conditional UI = sign on the door
* Route protection = locked door

Only the locked door actually protects.

---

### Visual / Line Diagram Explanation

```
Request to /dashboard
  ↓
Auth check (server)
  ↓
If not authenticated → redirect
If authenticated → render page
```

The page may **never render** for unauthorized users.

---

## Where Route Protection Should Happen

In Next.js with Clerk, there are **three valid layers**:

1. **Middleware** (global, pre-render)
2. **Server Components** (page-level)
3. **Layouts** (section-level)

We’ll cover them **in order of strength**.

---

## Method 1 — Middleware Protection (Strongest)

### Why Middleware Is Powerful

* Runs **before** rendering
* Runs on **every request**
* Stops unauthorized access early
* No UI flash

This is ideal for:

* Dashboards
* Admin sections
* Entire route groups

---

### Protecting Routes in `middleware.ts`

```ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/profile(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
```

What happens here:

* Clerk checks session
* If not authenticated → redirects to sign-in
* If authenticated → request continues

---

### Why This Is the Best Default

* Centralized
* Clean
* Hard to bypass
* Applies to all nested routes automatically

---

## Method 2 — Protecting Routes in Server Components

Used when:

* You want fine-grained control
* Middleware is too broad
* Logic is page-specific

---

### Example: Page-Level Protection

```ts
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <h1>Dashboard</h1>;
}
```

This:

* Runs on server
* Blocks render
* Redirects safely

---

### When to Use This

* Single protected pages
* Special-case logic
* Gradual protection

---

## Method 3 — Layout-Level Protection (Recommended for Sections)

Layouts wrap multiple pages.

Protecting a layout protects **everything inside it**.

---

### Example: Protected Layout

```ts
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function ProtectedLayout({ children }) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <>{children}</>;
}
```

Folder structure:

```
app/
 └── dashboard/
      ├── layout.tsx  ← protected
      ├── page.tsx
      └── settings/
```

Everything under `/dashboard` is now protected.

---

## Which Method Should You Use?

### Decision Guide

| Scenario               | Best Choice |
| ---------------------- | ----------- |
| Protect whole sections | Middleware  |
| Protect feature area   | Layout      |
| One-off protection     | Page        |

In real apps:

* Middleware + Layout is common
* Page-level is fallback

---

## What Route Protection Is NOT

### ❌ Not Conditional UI

You must still protect routes even if UI hides links.

---

### ❌ Not Client-Side Redirects

Client redirects happen **too late**.

---

## Common Mistakes

### ❌ Forgetting nested routes

Protect parent layouts instead.

---

### ❌ Protecting only client routes

Server still renders without protection.

---

### ❌ Mixing auth logic everywhere

Centralize when possible.

---

## Correct Mental Model

> **Routes are gates.
> Middleware and layouts lock the gates.
> UI only shows signboards.**

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Reading session and user data
* Using user info inside pages
* Role-based protection

Those come next, in order.

---

## Summary

* Route protection blocks unauthorized access
* Middleware is strongest
* Layout protection is clean and scalable
* Page-level protection is flexible
* UI alone is never enough

---

## Next Topic (Strict Order)

### **87 – Read Session and User Data**

We will learn:

* Accessing userId safely
* Reading user details on server
* Passing user data to UI

When ready, say:

```
next
```

Continuing exactly in sequence.
