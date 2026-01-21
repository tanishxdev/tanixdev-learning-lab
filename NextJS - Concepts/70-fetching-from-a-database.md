Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/70-fetching-from-a-database.md
```

---

# Fetching From a Database in Next.js

## Why This Topic Exists

### The Problem

Up to now, we used examples like:

* `fetch("https://api.example.com/...")`

But in **real applications**, most data comes from:

* Databases (PostgreSQL, MySQL, MongoDB, etc.)
* ORMs (Prisma, Drizzle, Mongoose)
* Internal services

Common beginner mistakes at this stage:

* Trying to access DB from Client Components
* Calling DB logic inside `useEffect`
* Exposing DB credentials to the browser
* Creating unnecessary API routes for everything

These mistakes lead to:

* Security vulnerabilities
* Poor performance
* Over-complicated architecture

---

### The Solution

Understand **where and how database fetching fits naturally in Next.js**.

Key idea:

> **Database access is server-only and fits perfectly inside Server Components.**

---

## What Does “Fetching From a Database” Mean

### Definition

**Database fetching** means:

> **Querying a database directly from server-side code to retrieve or mutate persistent data.**

In Next.js, this should happen:

* Only on the **server**
* Inside:

  * Server Components
  * Route Handlers
  * Server Actions (later)

---

### Analogy

Think of a **bank vault**:

* Vault = database
* Bank staff = server
* Customer = browser

Customers never enter the vault directly.
All access is mediated by staff.

---

### Visual / Line Diagram Explanation

```
Browser
  ❌ No DB access

Server (Next.js)
  ✅ DB connection
  ✅ Queries
  ✅ Secrets
```

---

## Where Database Fetching Belongs

### Allowed Places

You can fetch from DB in:

1. **Server Components**
2. **Route Handlers**
3. **Server Actions**

Right now, we focus on **Server Components**.

---

### Forbidden Places

Never fetch from DB in:

* Client Components
* Browser code
* `useEffect`
* Event handlers directly

---

## Basic Pattern: DB Fetch in Server Component

### Example (Conceptual)

```tsx
// page.tsx (Server Component)
import { getPosts } from "@/lib/db";

export default async function Page() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

Key points:

* Component is `async`
* DB function is imported
* Data is fetched before render
* HTML contains the data

---

## Where DB Logic Should Live

### Correct Structure

```
src/
 ├── app/
 │    └── blog/
 │         └── page.tsx
 ├── lib/
 │    └── db.ts
```

---

### Example `lib/db.ts`

```ts
// lib/db.ts
export async function getPosts() {
  // DB query logic here
  return [
    { id: 1, title: "Hello DB" },
    { id: 2, title: "Next.js + DB" },
  ];
}
```

Why this is good:

* DB logic is centralized
* Reusable across server components
* Easy to test and refactor

---

## Why Server Components Are Ideal for DB Fetching

### 1️⃣ Security

* DB credentials never reach browser
* No accidental leaks

### 2️⃣ Performance

* No extra HTTP request
* No API layer overhead
* Faster response

### 3️⃣ Simplicity

* No need for `/api/*` routes for read-only data
* Less code
* Fewer files

---

## Passing DB Data to Client Components

### Very Common Pattern

```tsx
// Server Component
import ClientList from "./ClientList";
import { getUsers } from "@/lib/db";

export default async function Page() {
  const users = await getUsers();
  return <ClientList users={users} />;
}
```

```tsx
// ClientList.tsx
"use client";

export default function ClientList({ users }) {
  return (
    <ul>
      {users.map((u: any) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

Data flow:

```
DB → Server Component → Props → Client Component
```

Correct and safe.

---

## What About API Routes?

### Important Clarification

You **do NOT** need API routes when:

* Data is only used by your Next.js app
* Data is fetched during render

API routes are useful when:

* External clients need access
* Client-side fetching is required
* Public APIs are exposed

We’ll cover Route Handlers separately (already did earlier).

---

## Sequential vs Parallel DB Fetching

DB queries can also be:

* Sequential (slow)
* Parallel (fast)

Same rules apply:

```ts
const [users, posts] = await Promise.all([
  getUsers(),
  getPosts(),
]);
```

But:

* Don’t parallelize dependent queries
* Respect DB connection limits

---

## Common Mistakes

### Mistake 1

Importing DB logic into Client Components

### Mistake 2

Creating API routes for every DB read unnecessarily

### Mistake 3

Putting DB queries directly in JSX files without abstraction

### Mistake 4

Fetching DB data again on client after server render

---

## Mental Model to Keep

* Database = server-only
* Server Components = perfect place for DB reads
* Client never talks to DB directly
* Server passes data down via props

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Data mutations (writes)
* Forms with Server Actions
* Optimistic updates
* Transactions

These are coming next, strictly in order.

---

## Summary

* Database access must be server-only
* Server Components are ideal for DB fetching
* Safer, faster, simpler than client fetching
* Centralize DB logic in `lib/`
* Pass data to client via props
* Avoid unnecessary API routes

---

## Next Topic (Strict Order)

### **71 – Data Mutations**

We will learn:

* Why mutations are different from fetching
* Where mutations should happen
* Why client-side mutations are dangerous

When ready, say:

```
next
```

Continuing exactly in order.
