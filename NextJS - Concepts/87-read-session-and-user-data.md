Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/87-read-session-and-user-data.md
```

---

# Reading Session and User Data in Next.js (with Clerk)

## Why This Topic Exists

### The Problem

At this point:

* Users can authenticate
* Routes are protected
* UI can be conditional

But now you face a **very practical need**:

* “How do I know *who* the user is?”
* “How do I get the user’s email or name?”
* “How do Server Actions know which user is acting?”
* “How do I safely pass user data to UI?”

Common beginner mistakes:

* Reading user data only on the client
* Passing user IDs from client to server
* Storing auth info in React state
* Calling Clerk APIs in the browser incorrectly

These lead to:

* Security holes
* Trusting client input
* Duplicate logic
* Confusing bugs

---

### The Solution

Use **server-first session and user access** provided by Clerk.

Key idea:

> **The server already knows who the user is.
> Ask the server — not the browser.**

---

## What Is “Session Data”

### Definition

**Session data** answers:

> “Is there a logged-in user for this request?”

At minimum, it gives:

* `userId` (or null)

This is the **most important piece of auth information**.

---

### Visual / Line Diagram Explanation

```
Request
  ↓
Cookie sent automatically
  ↓
Clerk reads session
  ↓
Server knows userId
```

No manual token handling.

---

## Two Levels of Auth Data (Important Distinction)

### 1️⃣ Session-Level Data

* Is user authenticated?
* What is the userId?

### 2️⃣ User-Level Data

* Email
* Name
* Profile image
* Metadata

Always:

* Check session first
* Then read user details if needed

---

## Reading Session Data (Server-Side)

### Using `auth()`

```ts
import { auth } from "@clerk/nextjs/server";

export default function Page() {
  const { userId } = auth();

  if (!userId) {
    // user not logged in
  }

  return <div>User ID: {userId}</div>;
}
```

Key points:

* Runs on the server
* Cannot be faked
* Safe to trust

---

## Why `userId` Matters So Much

`userId` is used to:

* Scope database queries
* Associate records with users
* Enforce ownership
* Apply permissions

Example:

```
posts WHERE authorId = userId
```

This is the **foundation of secure apps**.

---

## Reading Full User Data

Sometimes `userId` is not enough.

For example:

* Show user email
* Display avatar
* Greet user by name

---

### Using `currentUser()`

```ts
import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  return (
    <div>
      <p>Email: {user.emailAddresses[0].emailAddress}</p>
      <p>Name: {user.firstName}</p>
    </div>
  );
}
```

Important:

* Runs only on server
* Returns full user object
* Slightly heavier than `auth()`

---

## `auth()` vs `currentUser()` (Very Important)

| Aspect       | auth()          | currentUser()     |
| ------------ | --------------- | ----------------- |
| Returns      | userId, session | full user object  |
| Speed        | Fast            | Slower            |
| Use case     | Authorization   | Display user info |
| DB/API calls | Minimal         | More              |

### Rule of Thumb

* Need only identity → `auth()`
* Need profile info → `currentUser()`

---

## Reading User Data in Server Actions

This is **critical**.

### Example: Auth-Aware Server Action

```ts
"use server";

import { auth } from "@clerk/nextjs/server";

export async function createPost(formData: FormData) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const title = formData.get("title");

  // save post with authorId = userId
}
```

Why this is correct:

* Server determines user
* Client cannot spoof identity
* Mutations are scoped safely

---

## Passing User Data to Client UI

### Correct Pattern

* Read user data on server
* Pass minimal data as props

Example:

```ts
export default async function Page() {
  const user = await currentUser();

  return <ClientComponent name={user?.firstName} />;
}
```

Never pass:

* Tokens
* Secrets
* Full user object unnecessarily

---

## Client-Side User Data (When Needed)

Clerk also provides client hooks like:

* `useUser()`

But remember:

> **Client data is for display only, not authority.**

We will keep server as source of truth.

---

## Common Mistakes

### ❌ Trusting userId from client

Never accept `userId` from form input.

---

### ❌ Calling `currentUser()` everywhere

Unnecessary overhead.

---

### ❌ Storing user data in global state

Session already exists.

---

## Correct Mental Model

> **Session = identity proof
> User data = identity details
> Server decides both**

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Role-based access control
* Admin vs user permissions
* Fine-grained authorization

Those come next.

---

## Summary

* Session data answers “who is logged in”
* `auth()` is fast and authoritative
* `currentUser()` provides profile info
* Server Actions must read auth themselves
* Never trust client identity

---

## Next Topic (Strict Order)

### **88 – Role-Based Access Control (RBAC)**

We will learn:

* Roles vs permissions
* Enforcing access rules
* Admin / user separation

When ready, say:

```
next
```

Continuing exactly in sequence.
