Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/83-sign-in-and-sign-out.md
```

---

# Sign In and Sign Out in Next.js (with Clerk)

## Why This Topic Exists

### The Problem

You have now:

* Set up Clerk
* Integrated it with Next.js
* Enabled middleware
* Made auth available to the server

But **users still cannot do anything** unless they can:

* Sign in
* Sign out
* Enter the system
* Exit safely

Common beginner confusion here:

* “Where does the login page live?”
* “Do I build my own form?”
* “How does sign-out actually work?”
* “What happens to the session?”

If this is unclear, everything after this (protected routes, server actions, RBAC) becomes shaky.

---

### The Solution

Understand **sign-in and sign-out as controlled entry and exit points** managed by Clerk, not custom logic.

Key idea:

> **You don’t authenticate users manually.
> You embed Clerk’s identity flow into your app.**

---

## What Is “Sign In” (In Clerk Terms)

### Definition

**Sign in** means:

> **Establishing a verified session between a user and your app.**

After sign-in:

* Clerk creates a session
* Session is stored securely (cookie)
* Server can identify the user

---

### Analogy

Think of a **secure office**:

* Sign in → you receive a badge
* Badge proves who you are
* Badge is checked everywhere automatically

---

### Visual / Line Diagram Explanation

```
User opens sign-in page
  ↓
Clerk verifies credentials
  ↓
Session cookie created
  ↓
User is authenticated
```

---

## Clerk Sign-In UI (Important Concept)

Clerk provides **ready-made, secure UI components**.

Why this matters:

* Correct security defaults
* OAuth handled
* Accessibility handled
* No password handling by you

---

## Where Sign-In Page Lives

In App Router, sign-in is usually a **route**.

Example:

```
src/app/sign-in/page.tsx
```

---

## Creating the Sign-In Page

### Minimal Sign-In Page

```tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <SignIn />;
}
```

That’s it.

What Clerk handles:

* Email/password
* OAuth
* Validation
* Error messages
* Session creation

You do **not** write any auth logic.

---

## How Users Reach the Sign-In Page

You typically:

* Link to `/sign-in`
* Redirect unauthenticated users there (later topic)

For now:

* Page exists
* Clerk UI renders

---

## What Happens After Sign-In

Once signed in:

* Clerk sets a session cookie
* Middleware reads it
* Server Components know user
* Server Actions can enforce auth

No page refresh hacks.
No manual state sync.

---

## What Is “Sign Out”

### Definition

**Sign out** means:

> **Destroying the user’s session and removing authentication context.**

After sign-out:

* Session is invalidated
* Cookie removed
* Server no longer recognizes user

---

### Analogy

Sign out = returning the office badge.

---

## Clerk Sign-Out (Client Side)

Clerk provides a simple component.

### Sign-Out Button

```tsx
import { SignOutButton } from "@clerk/nextjs";

export function LogoutButton() {
  return <SignOutButton />;
}
```

This:

* Ends session
* Redirects user (configurable)
* Cleans up auth state

---

## Programmatic Sign Out (Conceptual)

Clerk also allows programmatic sign-out, but:

> We will **not** use it yet.

Why?

* We haven’t covered navigation rules
* We’ll introduce it when required

---

## Sign In vs Sign Up (Clarification)

* **Sign In** → existing user
* **Sign Up** → new user

Clerk handles both.

If enabled, the `<SignIn />` UI may show:

* “Create account”
* “Continue with Google”

You control this in Clerk Dashboard.

---

## Common Beginner Mistakes

### ❌ Building Custom Login Forms

Unnecessary and insecure.

---

### ❌ Storing auth state in React state

Auth lives on server, not in `useState`.

---

### ❌ Assuming sign-in is client-only

Server must always verify session.

---

## Correct Mental Model

> **Sign-in creates identity.
> Sign-out destroys identity.
> Clerk manages both.
> Next.js consumes identity.**

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Profile UI
* Reading user data
* Conditional rendering
* Protected routes

Those come next, strictly in order.

---

## Summary

* Sign-in establishes a session
* Clerk provides secure UI
* No manual auth logic needed
* Sign-out invalidates session
* Server always knows auth state

---

## Next Topic (Strict Order)

### **84 – Profile Settings**

We will learn:

* Accessing user profile
* Showing user info
* Editing profile securely

When ready, say:

```
next
```

Continuing exactly in sequence.
