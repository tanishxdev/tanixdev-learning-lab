Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/64-data-fetching.md
```

---

# Data Fetching in Next.js

## Why This Topic Exists

### The Problem

At this point you know:

* Server Components
* Client Components
* Interleaving
* Client-only vs server-only code

Now the **most common confusion** begins:

* Where should data be fetched?
* Server or client?
* Why not always client (like React)?
* Why not always server?
* What breaks if we choose wrong?

Typical mistakes:

* Fetching everything in client components
* Using `useEffect` for data that could be server-rendered
* Duplicating fetch logic
* Poor performance and SEO

---

### The Solution

Understand **data fetching as an architectural decision**, not just an API call.

Key idea:

> **In Next.js, data fetching is primarily a server responsibility.
> Client fetching is the exception, not the default.**

---

## What Is Data Fetching in Next.js

### Definition

**Data fetching** means:

> **Retrieving data (API, DB, external service) and making it available to components during rendering or interaction.**

In Next.js, this can happen in **two places**:

1. Server Components
2. Client Components

But they are **not equal**.

---

### Analogy

Think of a **restaurant menu**:

* Kitchen prepares food in advance (server fetching)
* Table asks for ketchup later (client fetching)

You don’t cook the entire meal at the table.

---

### Visual / Line Diagram Explanation

```
Server Fetching
Request → Server → Fetch Data → Render HTML → Send to Browser

Client Fetching
HTML → JS loads → Fetch Data → Update UI
```

Server fetching happens **before** page reaches user.
Client fetching happens **after** page loads.

---

## The Default Rule (Very Important)

> **Fetch data on the server by default.**

Only fetch on the client when:

* Data depends on user interaction
* Data changes frequently on client
* Data is private to the browser session

---

## Server-side Data Fetching (Primary)

### Where It Happens

* In **Server Components**
* Directly inside the component body

---

### Basic Example

```tsx
// page.tsx (Server Component)
export default async function Page() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

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

* No `useEffect`
* No `useState`
* Fetch happens on server
* HTML already contains data

---

### Why This Is Powerful

* Better SEO
* Faster first paint
* Smaller JS bundle
* Secure access to secrets
* No loading spinner needed

---

## Client-side Data Fetching (Secondary)

### Where It Happens

* Only inside **Client Components**
* Usually inside `useEffect`

---

### Basic Example

```tsx
"use client";

import { useEffect, useState } from "react";

export default function ClientPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

This is similar to React.

---

### When Client Fetching Is Correct

Use client fetching when:

* Fetch depends on a click
* Infinite scrolling
* Polling / real-time updates
* Browser-only data (location, viewport)
* Auth tokens only available in browser

---

## Server vs Client Fetching (Clear Comparison)

| Aspect            | Server Fetching | Client Fetching |
| ----------------- | --------------- | --------------- |
| Runs where        | Server          | Browser         |
| SEO               | Excellent       | Poor            |
| Initial load      | Fast            | Slower          |
| JS size           | Small           | Bigger          |
| Access to secrets | Yes             | No              |
| Interactivity     | No              | Yes             |

---

## Passing Server Data to Client Components

### Correct Pattern

```tsx
// Server Component
import ClientList from "./ClientList";

export default async function Page() {
  const data = await fetchData();
  return <ClientList data={data} />;
}
```

```tsx
// ClientList.tsx
"use client";

export default function ClientList({ data }) {
  return <div>{data.length}</div>;
}
```

Data flows **server → client via props**.

---

## Common Anti-Patterns (Do NOT Do This)

### ❌ Fetching in Client by Default

```tsx
"use client";

useEffect(() => {
  fetch("/api/data");
}, []);
```

When server fetching was possible → wasteful.

---

### ❌ Fetching Same Data Twice

* Server fetch
* Client refetch again

This causes:

* Extra network calls
* UI mismatch
* Hydration issues

---

## Mental Model for Choosing Where to Fetch

Ask these questions in order:

1. Can this data be fetched on server?
2. Does this data need browser-only info?
3. Does this data depend on user interaction?

If **yes to 1** → server
If **yes to 2 or 3** → client

---

## What We Are NOT Covering Yet

Not covered yet (coming next):

* Fetching in Client Components (deep)
* Fetching with Server Components (advanced)
* Loading & error states
* Sequential vs parallel fetching
* Database fetching

We are building foundations first.

---

## Summary

* Data fetching is an architectural choice
* Server fetching is default in Next.js
* Client fetching is for interaction-driven data
* Server fetching gives SEO, speed, security
* Data flows from server to client via props
* Wrong fetching location causes performance bugs

---

## Next Topic (Strict Order)

### **65 – Fetching Data in Client Components**

We will cover:

* Correct patterns
* Loading states
* Error handling
* When client fetching is unavoidable

When ready, say:

```
next
```

Continuing exactly in order.
