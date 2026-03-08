Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/65-fetching-data-in-client-components.md
```

---

# Fetching Data in Client Components (Next.js)

## Why This Topic Exists

### The Problem

You already learned:

* Server-side data fetching is **default**
* Client-side fetching is **secondary**
* Wrong choice leads to:

  * Slower pages
  * Extra network calls
  * Hydration mismatch

But in **real applications**, there are situations where **server fetching is not enough**:

* Fetching after a user action
* Infinite scroll
* Live search
* Polling / real-time updates
* Browser-only data (location, viewport, tokens)

If you don’t understand **client fetching properly**, you will:

* Abuse `useEffect`
* Write buggy loading logic
* Handle errors incorrectly
* Fetch same data multiple times

---

### The Solution

Learn **correct, intentional client-side data fetching**.

Key idea:

> **Client fetching is interaction-driven, not page-load driven.**

---

## What Is Client-side Data Fetching

### Definition

**Client-side data fetching** means:

> **Fetching data in the browser after the page has been hydrated, usually in response to user actions or dynamic state changes.**

This happens:

* Only in **Client Components**
* After initial HTML is already rendered

---

### Analogy

Think of **Google search suggestions**:

* Page loads first
* Suggestions load only when you type

That is client-side fetching.

---

### Visual / Line Diagram Explanation

```
Initial Request
 → Server renders page (no data)
 → HTML sent to browser
 → JS hydrates
 → Client fetches data
 → UI updates
```

---

## Prerequisite (Must Be Clear)

> **Client-side data fetching requires a Client Component.**

That means:

```tsx
"use client";
```

Without this, hooks like `useEffect` **will not work**.

---

## Basic Pattern: Fetch on Mount

### Example

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

### What Is Happening (Step-by-step)

1. Component renders in browser
2. `useEffect` runs **after hydration**
3. Fetch request is made
4. State updates
5. UI re-renders with data

---

## Loading State (Mandatory)

### Why It Matters

Client fetching means:

* Data is **not available immediately**
* UI must handle empty state

Never do this:

```tsx
posts.map(...) // ❌ posts may be empty
```

Always handle:

* Loading
* Empty
* Error

---

### Recommended Loading Pattern

```tsx
if (loading) return <LoadingSpinner />;
if (posts.length === 0) return <EmptyState />;
```

---

## Error Handling in Client Fetching

### Basic Pattern

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/users")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(setUsers)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return <div>{users.length}</div>;
}
```

---

### Why Client Errors Must Be Handled Locally

* Error boundaries (server) don’t catch client fetch failures
* Client must handle its own failures

---

## Fetching on User Interaction (Correct Use Case)

### Example: Button-triggered Fetch

```tsx
"use client";

import { useState } from "react";

export default function LoadMore() {
  const [items, setItems] = useState([]);

  async function load() {
    const res = await fetch("/api/items");
    const data = await res.json();
    setItems(data);
  }

  return (
    <>
      <button onClick={load}>Load Items</button>
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
```

This is **perfect client fetching**.

---

## Fetching Based on State Changes

### Example: Search

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;

    fetch(`/api/search?q=${query}`)
      .then(res => res.json())
      .then(setResults);
  }, [query]);

  return (
    <>
      <input onChange={e => setQuery(e.target.value)} />
      <ul>
        {results.map((r: any) => (
          <li key={r.id}>{r.title}</li>
        ))}
      </ul>
    </>
  );
}
```

---

## Client Fetching vs Server Fetching (Decision Reminder)

Use client fetching when:

* Fetch depends on user action
* Fetch depends on browser state
* Real-time or frequently changing data
* Partial updates

Do NOT use client fetching when:

* Data is needed for initial render
* SEO matters
* Data is static or slow-changing

---

## Common Mistakes

### Mistake 1

Fetching data in `useEffect` that could be server-rendered

### Mistake 2

No loading or error state

### Mistake 3

Refetching server-fetched data again in client

### Mistake 4

Using client fetching for sensitive data

---

## What We Are NOT Covering Yet

Not covered yet:

* Server Component fetching (deep)
* Loading UI with Suspense
* Parallel & sequential fetching
* Database fetching

These are coming next.

---

## Summary

* Client fetching runs **after hydration**
* Must be in Client Components
* Use `useEffect` or event handlers
* Always handle loading and errors
* Use only when interaction-driven
* Server fetching remains default

---

## Next Topic (Strict Order)

### **66 – Fetching Data with Server Components**

We will learn:

* Async Server Components
* Fetching during render
* Mental model vs React

When ready, say:

```
next
```

Continuing exactly in order.
