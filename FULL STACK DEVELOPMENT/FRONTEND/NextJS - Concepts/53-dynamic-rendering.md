Continuing **strictly in sequence**.

Save this as:

```
topics/53-dynamic-rendering.md
```

---

# Dynamic Rendering in Next.js

## Why This Topic Exists

### The Problem

You now know that:

* **Static Rendering** happens at build time
* HTML is reused for all users
* Extremely fast and scalable

But real applications often need:

* User-specific data
* Cookies and sessions
* Query parameters
* Request-time headers
* Fresh data on every request

Question:

> **What happens when a page cannot be static?**

---

### The Solution

Next.js switches to **Dynamic Rendering**.

Key idea:

> **If a page depends on request-specific or changing data, it must be rendered at request time.**

Dynamic rendering is the **opposite mode** of static rendering.

---

## What Is Dynamic Rendering

### Definition

**Dynamic Rendering** means:

> **The page is rendered on the server for every incoming request.**

Important points:

* Server Components run **on each request**
* HTML is generated **per request**
* Output can differ per user

---

### Analogy

Think of a **restaurant meal**:

* Cooked fresh for every customer
* Depends on order
* Cannot be pre-printed like a newspaper

That’s dynamic rendering.

---

### Visual / Line Diagram Explanation

```
Request
  ↓
Server Components run
  ↓
HTML generated
  ↓
Response sent
```

This happens **for every request**.

---

## When Next.js Uses Dynamic Rendering

### Core Rule (Very Important)

> **If a page reads request-specific data, it becomes dynamic.**

Request-specific data includes:

* Cookies
* Headers
* Search params
* Session / auth
* Current time
* Non-cacheable fetches

---

## Common Triggers for Dynamic Rendering

### 1️⃣ Cookies

```tsx
import { cookies } from "next/headers";

export default function Page() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme")?.value;

  return <p>Theme: {theme}</p>;
}
```

Why dynamic?

* Cookies differ per user
* HTML cannot be reused

---

### 2️⃣ Headers

```tsx
import { headers } from "next/headers";

export default function Page() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent");

  return <p>{userAgent}</p>;
}
```

Different device → different output.

---

### 3️⃣ Search Params

```tsx
export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return <p>Search: {searchParams.q}</p>;
}
```

`/search?q=react`
`/search?q=next`

Different HTML → dynamic.

---

### 4️⃣ Authentication / Session Data

Example (conceptual):

```tsx
export default function Page() {
  const user = getCurrentUser(); // user-specific
  return <p>Hello {user.name}</p>;
}
```

User changes → output changes.

---

## Dynamic Rendering Lifecycle (Quick Recap)

From what you already learned:

```
Request
  ↓
Server Components execute (per request)
  ↓
Data fetched
  ↓
HTML streamed
  ↓
Client hydration
```

The difference from static:

* This pipeline runs **every time**

---

## Dynamic Rendering + Caching

Important clarification:

Dynamic rendering **does not mean no caching**.

You can still:

* Cache fetch calls
* Cache parts of the page
* Control revalidation

We will learn caching rules later.

For now:

> Dynamic = rendered at request time

---

## Explicitly Forcing Dynamic Rendering

Sometimes, a page **could be static**, but you want it dynamic.

You can force it:

```tsx
export const dynamic = "force-dynamic";

export default function Page() {
  return <p>Always dynamic</p>;
}
```

Why you might do this:

* Real-time dashboards
* Admin panels
* Monitoring pages

---

## Static vs Dynamic (Side-by-Side)

| Feature              | Static Rendering | Dynamic Rendering  |
| -------------------- | ---------------- | ------------------ |
| Render time          | Build time       | Request time       |
| Per-user content     | ❌                | ✅                  |
| Uses cookies/headers | ❌                | ✅                  |
| Performance          | Fastest          | Slower than static |
| Server load          | Minimal          | Higher             |
| SEO                  | Excellent        | Excellent          |

Both are valid. Choose wisely.

---

## Real-Life Use Cases for Dynamic Rendering

### 1️⃣ User Dashboard

* Personalized content
* Auth required

---

### 2️⃣ Admin Panels

* Real-time data
* Role-based access

---

### 3️⃣ Search Pages

* Query-based results

---

### 4️⃣ Analytics & Reports

* Fresh data per request

---

## Common Misunderstandings

### Misunderstanding 1: “Dynamic rendering is bad”

❌ Wrong
It’s necessary when content changes per request.

---

### Misunderstanding 2: “Dynamic pages can’t use Server Components”

❌ Wrong
Server Components are **required** for dynamic rendering.

---

### Misunderstanding 3: “Dynamic rendering disables streaming”

❌ Wrong
Streaming still works.

---

## What We Are NOT Covering Yet

Not covered yet:

* `revalidate`
* Incremental Static Regeneration (ISR)
* `fetch()` cache modes
* Fine-grained caching

These are coming next.

---

## Summary

* Dynamic rendering = request-time rendering
* Triggered by request-specific data
* Server runs on every request
* Required for personalized content
* Trades performance for correctness
* Works with streaming and hydration

---

## Next Topic (Strict Order)

### **54 – generateStaticParams**

We will learn:

* Static generation for dynamic routes
* Prebuilding pages like `/blog/[slug]`
* How static and dynamic work together

When ready, say:

```
next
```

Continuing step by step, no skips.
