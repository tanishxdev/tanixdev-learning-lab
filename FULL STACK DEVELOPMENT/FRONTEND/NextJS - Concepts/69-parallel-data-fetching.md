Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/69-parallel-data-fetching.md
```

---

# Parallel Data Fetching in Next.js

## Why This Topic Exists

### The Problem (Recap)

From the previous topic, you learned that:

* Sequential fetching slows server rendering
* Independent fetches should not wait for each other
* Accidental waterfalls are common in Server Components

Now the natural question is:

> “How do we fetch multiple independent data sources **at the same time**?”

If you don’t solve this correctly, you’ll:

* Increase TTFB
* Block streaming
* Waste server resources
* Get poor Core Web Vitals

---

### The Solution

Use **parallel data fetching**.

Key idea:

> **Start all independent fetches together, then wait for all of them.**

This allows the server to use time efficiently.

---

## What Is Parallel Data Fetching

### Definition

**Parallel data fetching** means:

> **Multiple independent fetch operations start at the same time and resolve concurrently instead of one after another.**

Timeline view:

```
Fetch A ────────▶ done
Fetch B ────────▶ done
```

Total time = **max(time(A), time(B))**

---

### Analogy

Think of **multiple elevators** in a building:

* Elevator A goes to floor 10
* Elevator B goes to floor 8
* Both move at the same time

You don’t wait for one to finish before starting the other.

---

### Visual / Line Diagram Explanation

```
Request
 → Fetch users (300ms)
 → Fetch posts (400ms)
 → Render page
```

Total fetch time = **~400ms**, not 700ms.

---

## The Core Tool: `Promise.all`

### Why `Promise.all` Exists

JavaScript is asynchronous.

If you `await` one promise at a time:

* You force sequential execution

`Promise.all` lets you:

* Start promises together
* Await all results at once

---

## Basic Parallel Fetching Pattern (Server Component)

### ❌ Sequential (Slow)

```tsx
const users = await fetchUsers();
const posts = await fetchPosts();
```

---

### ✅ Parallel (Correct)

```tsx
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts(),
]);
```

Both fetches start immediately.

---

## Full Example in a Server Component

```tsx
export default async function Page() {
  const [users, posts] = await Promise.all([
    fetch("https://api.example.com/users").then(res => res.json()),
    fetch("https://api.example.com/posts").then(res => res.json()),
  ]);

  return (
    <>
      <p>Users: {users.length}</p>
      <p>Posts: {posts.length}</p>
    </>
  );
}
```

What happens internally:

1. Both fetch requests are sent immediately
2. Server waits for both to resolve
3. Render happens once all data is ready

---

## Why This Is Especially Important in Server Components

### Important Insight

Server Components:

* Block HTML generation until data resolves
* Directly affect TTFB
* Run on every request (unless cached)

Parallel fetching:

* Reduces blocking time
* Improves streaming
* Improves perceived speed

---

## Parallel Fetching Across Components (Controlled)

### Common Setup

```tsx
// page.tsx
import Users from "./Users";
import Posts from "./Posts";

export default function Page() {
  return (
    <>
      <Users />
      <Posts />
    </>
  );
}
```

If `Users` and `Posts` both fetch data:

* They **can** be parallel
* But this depends on boundaries (covered later)

For now, safest approach:

> **Fetch related data together in the same Server Component when possible.**

---

## When NOT to Use Parallel Fetching

Parallel fetching is **not always correct**.

### ❌ Invalid Case

```tsx
const user = await fetchUser();
const posts = await fetchPosts(user.id); // depends on user
```

This must remain sequential.

---

### Decision Rule

Ask:

1. Does fetch B need data from fetch A?
2. Is there a true dependency?

If yes → sequential
If no → parallel

---

## Error Handling with Parallel Fetching

### Important Behavior

`Promise.all` fails fast:

* If one promise rejects
* Entire `Promise.all` rejects

Example:

```tsx
await Promise.all([
  fetchUsers(),
  fetchPosts(),
]); // if either fails → error thrown
```

This is good:

* Server error boundaries catch it
* No partial UI corruption

---

## Common Mistakes

### Mistake 1

Using `await` before `Promise.all`

```tsx
await Promise.all([
  await fetchUsers(), // ❌ already awaited
  fetchPosts(),
]);
```

This breaks parallelism.

---

### Mistake 2

Parallelizing dependent fetches

### Mistake 3

Over-parallelizing everything blindly

---

## Mental Model to Remember

* Independent fetches → parallel
* Dependent fetches → sequential
* Server rendering waits for data
* Parallelism reduces waiting

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Fetching from databases
* Streaming partial UI with Suspense
* Loading boundaries
* Caching behavior

These come next, strictly in order.

---

## Summary

* Parallel data fetching improves server performance
* Use `Promise.all` for independent fetches
* Reduces TTFB and waterfalls
* Do not parallelize dependent data
* Especially important in Server Components

---

## Next Topic (Strict Order)

### **70 – Fetching From a Database**

We will learn:

* Why DB access belongs on server
* Patterns for DB fetching in Server Components
* Safety and performance rules

When ready, say:

```
next
```

Continuing exactly in order.
