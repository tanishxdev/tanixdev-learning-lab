Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/66-fetching-data-with-server-components.md
```

---

# Fetching Data with Server Components (Next.js)

## Why This Topic Exists

### The Problem

You now understand:

* Client-side data fetching
* When client fetching is correct
* Why server fetching is preferred

But this creates a **mental conflict** for React developers:

> “How can a component fetch data directly without `useEffect` or state?”

In React (before Next.js):

* Fetching during render was **illegal**
* Side effects were forbidden in render

In Next.js Server Components:

* Fetching during render is **the design**

If you don’t understand **why this is safe**, you’ll:

* Fight the framework
* Overuse client components
* Lose performance benefits

---

### The Solution

Understand **Server Components as async components** and why **data fetching during render is correct and intentional**.

Key idea:

> **Server Components are not reactive UI — they are request-time functions that build HTML.**

---

## What Is Server Component Data Fetching

### Definition

**Server Component data fetching** means:

> **Fetching data directly inside a Server Component during render, before HTML is sent to the browser.**

This is possible because:

* Server Components run on the server
* They execute once per request (or per cache)
* They do not re-render on state changes

---

### Analogy

Think of **PHP / Rails / Django templates**:

* Request comes in
* Server queries DB
* Server builds HTML
* HTML is sent to browser

Next.js Server Components work the same way — but with React syntax.

---

### Visual / Line Diagram Explanation

```
Request
 → Server Component executes
 → Data fetched
 → JSX rendered
 → HTML streamed/sent
 → Browser receives ready content
```

No client JS needed for data rendering.

---

## Async Server Components (Core Concept)

### Important Rule

> **Server Components can be `async` functions.**

This is NOT allowed in Client Components.

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
* No loading state here
* Fetch happens before render completes

---

## Why This Is Safe (Very Important)

### React Rule Revisited

In traditional React:

* Render must be pure
* No side effects allowed

But Server Components:

* Are **not reactive**
* Do **not re-render** on state
* Are executed in a controlled server environment

So fetching here is:

* Predictable
* Deterministic
* Safe

---

## Fetch API in Server Components

### Built-in `fetch` Is Special

In Next.js:

* `fetch` is extended
* Supports caching
* Supports deduplication
* Supports streaming

We will go deeper later.

For now:

> **You can use `fetch` directly in Server Components.**

---

### Example with Error Handling

```tsx
export default async function Page() {
  const res = await fetch("https://api.example.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();

  return <div>{posts.length}</div>;
}
```

Errors here are caught by:

* Route error boundaries (later topic)

---

## Passing Server-fetched Data to Client Components

### Very Common Pattern

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
  return <p>{data.length}</p>;
}
```

Important:

* Client does NOT fetch again
* Data is serialized and passed as props

---

## What Server Fetching Is Best For

Use Server Components when:

* Data is required for initial render
* SEO matters
* Data is static or slow-changing
* Data comes from DB or secure APIs
* You want smallest JS bundle

---

## What Server Fetching Is NOT For

Do NOT use server fetching when:

* Data depends on user interaction
* Data updates frequently without navigation
* Real-time updates are required
* Browser-only information is needed

Those belong to client fetching.

---

## Comparison: Server vs Client Fetching (Mental Model)

| Aspect        | Server Fetch | Client Fetch    |
| ------------- | ------------ | --------------- |
| When          | Before HTML  | After hydration |
| SEO           | Excellent    | Poor            |
| Loading UI    | Optional     | Required        |
| JS bundle     | Minimal      | Larger          |
| Secrets       | Allowed      | Not allowed     |
| Interactivity | No           | Yes             |

---

## Common Mistakes

### Mistake 1

Using client fetching for page-level data

### Mistake 2

Using `useEffect` inside Server Components

### Mistake 3

Marking Server Components as `"use client"` just to fetch

### Mistake 4

Refetching server-fetched data on client

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Loading & error UI with Suspense
* Sequential vs parallel server fetching
* Database fetching
* Caching behavior

These are coming **strictly in order**.

---

## Summary

* Server Components can be async
* Data fetching during render is intentional
* No hooks or state needed
* Best for initial page data
* Secure, fast, SEO-friendly
* Client components receive data via props

---

## Next Topic (Strict Order)

### **67 – Loading and Error States**

We will learn:

* Why loading states still matter
* How errors propagate
* Mental model before Suspense

When ready, say:

```
next
```

Continuing exactly in order.
