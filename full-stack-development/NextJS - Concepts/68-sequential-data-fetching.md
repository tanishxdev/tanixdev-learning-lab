Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/68-sequential-data-fetching.md
```

---

# Sequential Data Fetching in Next.js

## Why This Topic Exists

### The Problem

You already know:

* Server Components can fetch data during render
* Fetching happens on the server before HTML is sent
* Loading and error handling exist because fetching can take time

Now comes a **hidden performance problem** that many developers introduce **without realizing it**:

> **Sequential data fetching**

Symptoms you’ll see in real apps:

* Pages feel slow even on fast networks
* TTFB (Time To First Byte) increases
* Server rendering feels “blocking”
* Performance audits show long waterfalls

And the scary part:

> **Your code looks correct — but performance is bad.**

---

### The Solution

Understand **what sequential data fetching is**, **why it happens**, and **how to recognize it**.

Key idea:

> **If one fetch waits for another fetch unnecessarily, you are slowing down your server render.**

---

## What Is Sequential Data Fetching

### Definition

**Sequential data fetching** means:

> **Multiple data fetches that run one after another, where the second fetch starts only after the first finishes.**

Timeline view:

```
Fetch A ────────▶ done
                  Fetch B ────────▶ done
```

Total time = time(A) + time(B)

---

### Analogy

Think of a **single cashier** at a store:

* Customer A checks out
* Only after A leaves, customer B is served

Even if there are two counters available, you’re using only one.

---

### Visual / Line Diagram Explanation

```
Request
 → Fetch users (300ms)
 → Fetch posts (400ms)
 → Render page
```

Total fetch time = **700ms**

---

## How Sequential Fetching Happens (Very Common)

### Example: Accidental Sequential Fetching

```tsx
export default async function Page() {
  const usersRes = await fetch("https://api.example.com/users");
  const users = await usersRes.json();

  const postsRes = await fetch("https://api.example.com/posts");
  const posts = await postsRes.json();

  return (
    <>
      <p>Users: {users.length}</p>
      <p>Posts: {posts.length}</p>
    </>
  );
}
```

This code is **correct**, but:

* `posts` fetch waits for `users` fetch
* Both are independent
* Performance is unnecessarily slow

---

## Why This Is a Problem in Server Components

### Important Insight

Server Components:

* Execute on every request (unless cached)
* Block HTML generation until data is ready

So sequential fetching:

* Directly increases TTFB
* Delays streaming
* Hurts perceived performance

On client, this would feel slow.
On server, it’s **even worse**.

---

## When Sequential Fetching Is Actually Required

Not all sequential fetching is bad.

### Valid Sequential Case

```tsx
const user = await fetchUser();
const posts = await fetchPosts(user.id);
```

Here:

* Posts depend on user ID
* Sequential fetching is **necessary**

Key rule:

> **Sequential fetching is acceptable only when there is a true data dependency.**

---

## Identifying Accidental Sequential Fetching

Ask yourself:

1. Does fetch B need the result of fetch A?
2. Are these APIs independent?
3. Could they run at the same time?

If answers are:

* No dependency
* Independent data

Then sequential fetching is a **bug**, not a feature.

---

## Sequential Fetching Across Components (Hidden Case)

### Example

```tsx
// Page.tsx
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

```tsx
// Users.tsx
export default async function Users() {
  const users = await fetchUsers();
  return <div>{users.length}</div>;
}
```

```tsx
// Posts.tsx
export default async function Posts() {
  const posts = await fetchPosts();
  return <div>{posts.length}</div>;
}
```

At first glance, this looks parallel.

But depending on rendering order and boundaries, this **can become sequential**.

Why?

* Parent waits for children resolution
* Streaming and Suspense boundaries affect timing

We’ll fix this in the next topic.

---

## Why This Topic Matters Before Fixing It

You **must understand the problem first**, because:

* Parallel fetching can introduce complexity
* Over-parallelization can break logic
* Debugging waterfalls requires awareness

Next.js gives tools — but **you must know when to use them**.

---

## Common Mistakes

### Mistake 1

Using `await` blindly for every fetch

### Mistake 2

Not noticing fetch dependency (or lack of it)

### Mistake 3

Splitting fetches across components without boundaries

### Mistake 4

Assuming server rendering is always fast

---

## Mental Model to Keep

* Server rendering blocks on data
* `await` creates waiting
* Waiting adds up
* Independent fetches should not wait for each other

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Parallel data fetching
* Using `Promise.all`
* Streaming with Suspense
* Performance tuning patterns

These come **immediately next**, in order.

---

## Summary

* Sequential data fetching = fetches run one after another
* It increases server render time
* Often introduced accidentally
* Acceptable only when data depends on previous fetch
* Must be identified before optimization

---

## Next Topic (Strict Order)

### **69 – Parallel Data Fetching**

We will learn:

* How to run fetches concurrently
* Correct patterns in Server Components
* Avoiding waterfalls

When ready, say:

```
next
```

Continuing exactly in order.
