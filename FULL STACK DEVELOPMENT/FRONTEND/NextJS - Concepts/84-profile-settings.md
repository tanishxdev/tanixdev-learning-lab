Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/84-profile-settings.md
```

---

# Profile Settings in Next.js (with Clerk)

## Why This Topic Exists

### The Problem

At this point:

* Users can sign in
* Sessions exist
* The server knows *who* the user is

But users now expect basic things:

* “Who am I logged in as?”
* “Can I see my email / name?”
* “Can I change my profile info?”
* “Where do profile settings live?”

Common beginner mistakes here:

* Storing user info in local state
* Creating custom profile DB tables too early
* Letting client update user data directly
* Mixing auth identity with app data incorrectly

This leads to:

* Inconsistent user info
* Security risks
* Duplicate sources of truth

---

### The Solution

Understand **profile settings as identity-level data**, owned and managed by **Clerk**, not your app database.

Key idea:

> **User identity data (email, name, avatar) belongs to the auth provider.
> Application data belongs to your database.**

Do not mix them.

---

## What Are Profile Settings

### Definition

**Profile settings** are:

> **User attributes that describe identity, not business data.**

Examples:

* Email
* Name
* Profile image
* Password
* Connected OAuth accounts

These are **authentication concerns**, not app concerns.

---

### Analogy

Think of a **passport**:

* Name, photo, nationality → identity
* Travel history → application data

Your app should not rewrite passports.

---

### Visual / Line Diagram Explanation

```
User
  ↓ edits profile
Clerk
  ↓ updates identity
Session updated
  ↓
Next.js server reads new data
```

---

## How Clerk Handles Profile Settings

Clerk provides:

* A **ready-made Profile UI**
* Secure update flows
* Validation
* Re-auth where required

You do NOT manually update identity fields.

---

## Clerk Profile UI Component

### What It Is

Clerk exposes:

```tsx
<UserProfile />
```

This is a **full profile settings screen**.

---

## Creating a Profile Page

### Route Location

```
src/app/profile/page.tsx
```

---

### Minimal Profile Page

```tsx
import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return <UserProfile />;
}
```

That’s it.

What this includes:

* View profile info
* Change name
* Change email
* Change password
* Manage OAuth accounts
* Logout (optional)

All handled by Clerk.

---

## Who Can Access the Profile Page

At this moment:

* Anyone can technically visit `/profile`

But:

* Clerk will require authentication
* Unauthenticated users will be redirected automatically

We will **explicitly protect routes** in a later topic.

---

## Reading User Data (Preview Only)

You might wonder:

> “How do I show user name in my app?”

Clerk provides helpers like:

* `auth()`
* `currentUser()`

We will **not use them fully yet**.

Reason:

* Reading session & user data is a **separate topic**
* It comes after route protection

For now, just know:

> User data is available **on the server**, safely.

---

## Identity Data vs App Data (Critical Separation)

### Identity Data (Clerk)

* Email
* Name
* Avatar
* Auth providers

### App Data (Your DB)

* Posts
* Orders
* Preferences
* Roles (sometimes)

Never:

* Store passwords yourself
* Duplicate email logic unnecessarily

---

## Common Mistakes

### ❌ Building Custom Profile Forms

Unnecessary and insecure.

---

### ❌ Updating User Info in Client Components

Identity updates must go through Clerk.

---

### ❌ Confusing Profile Page with Dashboard

Profile = identity
Dashboard = app features

---

## Correct Mental Model

> **Clerk owns user identity.
> Your app consumes identity.
> Profile settings modify identity, not app data.**

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Conditional UI based on auth
* Protecting routes manually
* Reading session and user data
* Role-based access

Those come next, in strict order.

---

## Summary

* Profile settings belong to identity
* Clerk provides secure UI
* No manual profile mutation needed
* Separation of identity and app data is critical

---

## Next Topic (Strict Order)

### **85 – Conditional UI Rendering**

We will learn:

* Showing different UI for logged-in vs logged-out users
* Auth-aware components
* Server-first conditional rendering

When ready, say:

```
next
```

Continuing exactly in sequence.
