Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/71-data-mutations.md
```

---

# Data Mutations in Next.js

## Why This Topic Exists

### The Problem

So far, you have mastered **reading data**:

* Server Components fetching data
* Client Components displaying data
* Parallel and sequential fetching
* Database reads

But **real applications are not read-only**.

You must be able to:

* Create data (sign up, add post)
* Update data (edit profile, update status)
* Delete data (remove item, logout session)

Common beginner mistakes at this stage:

* Mutating data directly from Client Components
* Calling database logic from the browser
* Using API routes everywhere by habit
* Losing sync between UI and server state

These lead to:

* Security bugs
* Inconsistent UI
* Race conditions
* Over-engineered code

---

### The Solution

Understand **data mutations as a server responsibility** and how Next.js **intentionally separates reads and writes**.

Key idea:

> **Reads can happen during render.
> Writes (mutations) must happen through explicit server entry points.**

---

## What Is a Data Mutation

### Definition

A **data mutation** is:

> **Any operation that changes persistent data on the server.**

Examples:

* INSERT → create user
* UPDATE → edit post
* DELETE → remove record

In short:

```
READ  → fetch
WRITE → mutation
```

They are fundamentally different.

---

### Analogy

Think of a **Google Doc**:

* Reading the document → safe, passive
* Editing the document → controlled, authenticated, tracked

Mutations need **rules and gates**.

---

### Visual / Line Diagram Explanation

```
Client
  ❌ Cannot mutate DB directly

Server
  ✅ Validates request
  ✅ Auth checks
  ✅ Mutates DB
  ✅ Returns result
```

---

## Why Mutations Are Treated Differently

### 1️⃣ Security

* Mutations can:

  * Change data
  * Delete data
  * Corrupt data

So they must:

* Run on server
* Validate input
* Enforce auth & roles

---

### 2️⃣ Consistency

If client mutates freely:

* UI and DB go out of sync
* Multiple clients conflict
* State becomes unreliable

---

### 3️⃣ Predictability

Mutations should be:

* Explicit
* Traceable
* Recoverable

This is why Next.js **does not allow mutations during render**.

---

## Where Data Mutations Are Allowed

In Next.js, mutations can happen in:

1. **Route Handlers** (`POST`, `PATCH`, `DELETE`)
2. **Server Actions** ✅ (modern, preferred)
3. Backend services (external APIs)

Right now, we focus on **conceptual understanding**, then move to **Server Actions next**.

---

## What Is NOT Allowed (Very Important)

### ❌ Mutating in Client Components

```tsx
"use client";

import { db } from "@/lib/db"; // ❌ illegal

export function Button() {
  db.user.create(...); // ❌
}
```

Why this is wrong:

* Client runs in browser
* DB credentials exposed
* No validation
* No auth protection

---

### ❌ Mutating During Server Render

```tsx
export default async function Page() {
  await createUser(); // ❌ mutation during render
  return <div />;
}
```

Why this is forbidden:

* Rendering must be deterministic
* Mutations cause side effects
* Re-renders could duplicate writes

---

## Correct Mental Model for Mutations

> **Mutations happen as a result of an explicit user action.**

Examples:

* Form submit
* Button click
* API call

Never as a side effect of rendering.

---

## Typical Mutation Flow (High Level)

```
User Action
 → Client triggers request
 → Server validates
 → Server mutates DB
 → Server responds
 → UI updates
```

This separation is **intentional**.

---

## Example: Conceptual Mutation Flow

### Client Side (Intent)

```tsx
<button onClick={submitForm}>
  Save
</button>
```

Client only expresses **intent**, not logic.

---

### Server Side (Authority)

```ts
// Server
validate input
check auth
update database
return result
```

Client never touches DB.

---

## Reads vs Mutations (Clear Comparison)

| Aspect       | Read             | Mutation           |
| ------------ | ---------------- | ------------------ |
| Purpose      | Get data         | Change data        |
| Timing       | During render    | After user action  |
| Location     | Server Component | Server entry point |
| Side effects | No               | Yes                |
| Repeat-safe  | Yes              | No                 |

This table is critical for interviews.

---

## Common Mistakes

### Mistake 1

Using `fetch` POST from client for everything

### Mistake 2

Mutating data inside `useEffect`

### Mistake 3

Not validating mutation input

### Mistake 4

Refetching everything blindly after mutation

---

## Mental Checklist (Before Writing a Mutation)

Ask:

1. Is this changing data?
2. Is this triggered by a user action?
3. Is this logic on the server?
4. Is input validated?
5. Is auth enforced?

If any answer is **no**, the mutation is wrong.

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Server Actions (how mutations are implemented)
* Forms with Server Actions
* Optimistic updates
* Error handling for mutations

These are coming **immediately next**, in order.

---

## Summary

* Mutations change persistent data
* They are different from reads
* Must run on the server
* Must be explicit and controlled
* Never happen during render
* Client expresses intent, server enforces rules

---

## Next Topic (Strict Order)

### **72 – Forms with Server Actions**

We will learn:

* What Server Actions are
* Why they replace most API routes
* How forms trigger mutations safely

When ready, say:

```
next
```

Continuing exactly in order.
