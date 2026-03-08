Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/85-conditional-ui-rendering.md
```

---

# Conditional UI Rendering in Next.js (with Clerk)

## Why This Topic Exists

### The Problem

At this stage:

* Authentication is set up
* Users can sign in and out
* Profile settings exist

But your UI still behaves like **everyone is the same**.

Real applications must answer UI questions like:

* Should this button be visible to logged-out users?
* Should we show “Sign In” or “Dashboard”?
* Should this page show content or a login prompt?
* Should certain actions even appear?

Common beginner mistakes:

* Checking auth only in Client Components
* Using `useState` like `isLoggedIn`
* Rendering sensitive UI and “hoping” the server blocks actions
* Duplicating auth checks everywhere

This causes:

* Flash of wrong UI
* Confusing user experience
* Security risks if UI leaks intent

---

### The Solution

Use **server-first conditional rendering** based on **real authentication state**.

Key idea:

> **The server decides what UI should exist.
> The client only hydrates what the server already approved.**

---

## What Is Conditional UI Rendering

### Definition

**Conditional UI rendering** means:

> **Showing or hiding parts of the UI based on authentication state.**

Examples:

* Logged out → show “Sign In”
* Logged in → show “Profile”, “Logout”
* Anonymous → hide mutation buttons

---

### Analogy

Think of a **concert venue**:

* Outside the gate → see posters
* Inside the gate → see stage access
* VIP → see backstage

UI depends on *who you are*.

---

### Visual / Line Diagram Explanation

```
Request
  ↓
Server checks auth
  ↓
Server decides UI
  ↓
Client renders approved UI
```

No guessing on the client.

---

## Where Conditional Rendering Should Happen

### Priority Order (Very Important)

1. **Server Components** (preferred)
2. **Layouts**
3. **Client Components** (last resort)

Why:

* Server knows the truth
* Client can be manipulated

---

## Server-Side Conditional Rendering (Preferred)

Clerk provides server helpers.

### Example (Conceptual)

```ts
import { auth } from "@clerk/nextjs/server";

export default function Page() {
  const { userId } = auth();

  if (!userId) {
    return <SignInPrompt />;
  }

  return <Dashboard />;
}
```

What’s happening:

* Server checks session
* UI is decided before reaching browser

---

## Conditional Rendering in Layouts (Common Pattern)

Layouts are ideal for:

* Navigation bars
* Headers
* Global UI

---

### Example: Auth-Aware Navbar (Conceptual)

```tsx
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default function Navbar() {
  const { userId } = auth();

  return (
    <nav>
      <Link href="/">Home</Link>

      {userId ? (
        <>
          <Link href="/profile">Profile</Link>
          <Link href="/dashboard">Dashboard</Link>
        </>
      ) : (
        <Link href="/sign-in">Sign In</Link>
      )}
    </nav>
  );
}
```

This navbar is:

* Secure
* Flicker-free
* Server-approved

---

## Client-Side Conditional Rendering (When Needed)

Sometimes UI must react **after hydration**, for example:

* Client-only interactions
* Modals
* Transitions

Clerk provides client helpers too.

---

### Example: Client Conditional UI

```tsx
"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";

export function AuthButtons() {
  return (
    <>
      <SignedIn>
        <button>Logout</button>
      </SignedIn>

      <SignedOut>
        <a href="/sign-in">Sign In</a>
      </SignedOut>
    </>
  );
}
```

Use this **only when necessary**.

---

## SignedIn / SignedOut Components (What They Are)

These are **Clerk-provided client helpers** that:

* Render children conditionally
* Based on auth state
* Without manual checks

They do NOT replace server enforcement.

---

## What Conditional UI Is NOT

### ❌ Not Authorization

Showing/hiding UI does NOT protect data.

Server must still:

* Protect routes
* Protect actions

UI is a *hint*, not a guard.

---

### ❌ Not a Security Boundary

Never rely on UI alone to secure mutations.

---

## Correct Mental Model

> **UI reflects permissions.
> Server enforces permissions.**

Never reverse this.

---

## Common Mistakes

### ❌ Checking auth in `useEffect`

Causes flicker and unreliable state.

---

### ❌ Duplicating auth logic everywhere

Centralize in layouts when possible.

---

### ❌ Assuming “hidden button” = secure

It is not.

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Protecting entire routes
* Blocking navigation
* Reading session and user data deeply

Those come next.

---

## Summary

* Conditional UI improves UX
* Server-first rendering is preferred
* Layouts are ideal for auth-aware UI
* Client helpers are secondary
* UI is not security

---

## Next Topic (Strict Order)

### **86 – Protecting Routes**

We will learn:

* Preventing access to pages
* Redirecting unauthenticated users
* Route-level protection strategies

When ready, say:

```
next
```

Continuing exactly in sequence.
