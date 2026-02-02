Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/82-clerk-setup.md
```

---

# Clerk Setup in Next.js

## Why This Topic Exists

### The Problem

You now understand **authentication conceptually**, but concepts alone don’t log users in.

If you try to build auth yourself, you must handle:

* Password hashing
* Secure storage
* Session management
* Token rotation
* OAuth flows
* Email verification
* Edge cases & security updates

This is **hard, error-prone, and not your core product**.

Common beginner mistakes:

* Rolling custom auth
* Storing passwords insecurely
* Mixing auth logic across client & server
* Underestimating long-term maintenance

This leads to:

* Security vulnerabilities
* Broken sessions
* Time wasted on non-core work

---

### The Solution

Use a **battle-tested authentication provider**.

For this course, we use:

> **Clerk**

Why?

* Designed for **Next.js App Router**
* Server-first auth model
* Clean React & Server Component integration
* Handles sessions, cookies, OAuth, UI

---

## What Is Clerk

### Definition

**Clerk** is an authentication and user management platform that provides:

* Login / Signup
* Sessions
* User data
* OAuth providers
* Secure cookies
* UI components
* Server-side helpers

You get **auth infrastructure**, not just UI.

---

### Analogy

Think of Clerk as:

* A **security company** for your app
* You define *who is allowed*
* Clerk handles *how identity works*

You don’t reinvent security systems.

---

### Visual / Line Diagram Explanation

```
User
  ↓ login
Clerk
  ↓ verifies identity
Session cookie issued
  ↓
Next.js server reads session
```

Clerk integrates directly with your server.

---

## How Clerk Fits into Next.js

### Core Integration Points

Clerk integrates at **three levels**:

1. **Middleware** → Protect routes
2. **Server** → Read user/session
3. **Client** → Show auth UI

But **server is the source of truth**.

---

## Step 1 — Create a Clerk Application

### What You Do (Once)

1. Go to Clerk Dashboard
2. Create a new application
3. Choose authentication methods:

   * Email / Password
   * OAuth (Google, GitHub, etc.)

Clerk generates **keys** for your app.

---

## Step 2 — Install Clerk in Your Project

```bash
npm install @clerk/nextjs
```

This adds:

* Server helpers
* Client components
* Middleware utilities

---

## Step 3 — Environment Variables

Clerk gives you keys like:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

Add them to:

```
.env.local
```

Important rules:

* `NEXT_PUBLIC_` → safe for browser
* Secret key → server-only

Never commit these keys.

---

## Step 4 — Wrap App with ClerkProvider

### `src/app/layout.tsx`

```tsx
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
```

Why this is required:

* Makes auth state available
* Enables Clerk components
* Works across entire app

---

## What ClerkProvider Actually Does (Conceptual)

* Reads session cookie
* Hydrates auth context
* Syncs client & server auth state

You don’t manage sessions manually.

---

## Step 5 — Add Middleware (Very Important)

Create:

```
src/middleware.ts
```

```ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
```

Why middleware matters:

* Runs **before every request**
* Attaches auth info to request
* Enables route protection

Without this:

* Server won’t know who the user is

---

## Authentication Flow with Clerk (Now Clear)

```
User logs in
  ↓
Clerk creates session
  ↓
Session stored in cookie
  ↓
Middleware runs
  ↓
Server Components & Actions know user
```

This is the foundation for **protected routes and mutations**.

---

## What We Have NOT Done Yet

Important:
We have **not** yet:

* Shown login UI
* Protected routes
* Read user data
* Enforced auth in Server Actions

Those come **next**, in order.

---

## Common Mistakes at Setup Stage

### ❌ Forgetting Middleware

Auth appears to work on client, fails on server.

---

### ❌ Putting keys in wrong env

Public vs secret keys mixed.

---

### ❌ Checking auth only on client

Always enforce on server.

---

## Correct Mental Model

> **Clerk owns identity.
> Next.js owns application logic.
> Server enforces truth.**

---

## Summary

* Clerk handles authentication infrastructure
* Integrates deeply with Next.js App Router
* Requires:

  * Package install
  * Env variables
  * ClerkProvider
  * Middleware
* Sets foundation for secure apps

---

## Next Topic (Strict Order)

### **83 – Sign In and Sign Out**

We will learn:

* Clerk sign-in UI
* Sign-out flow
* Where login pages live
* How users enter and exit the system

When ready, say:

```
next
```

Continuing exactly in sequence.
