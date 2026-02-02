Perfect. Continuing **strictly in sequence**.

Save this as:

```
topics/43-caching-in-route-handlers.md
```

---

# Caching in Route Handlers (Next.js)

## Why Caching Exists

### The Problem

Every time a client hits a route handler:

* Server code runs again
* Database may be queried again
* External APIs may be called again

Problems this creates:

* Slow responses
* Higher server cost
* Unnecessary load
* Poor scalability

Example:

* `/api/posts` called 1,000 times
* Same data returned every time
* Still recomputed 1,000 times

This is wasteful.

---

### The Solution

**Caching**.

Key idea:

> **If the response doesn’t change often, reuse it instead of recomputing it.**

Next.js route handlers support **HTTP-level caching**.

---

## What Is Caching (HTTP Level)

### Definition

Caching means:

* Store a response somewhere (browser, CDN, server)
* Reuse it for future requests
* Avoid re-running logic

Caching is controlled using **HTTP headers**.

---

### Analogy

Think of a restaurant menu:

* Menu doesn’t change every minute
* You print it once
* Customers reuse it

No need to rewrite the menu for every customer.

---

### Visual / Line Diagram Explanation

Without cache:

```
Request → Server logic → DB/API → Response
Request → Server logic → DB/API → Response
```

With cache:

```
Request → Cached response → Response
Request → Cached response → Response
```

---

## How Caching Works in Route Handlers

In route handlers, caching is controlled by:

* `Cache-Control` header
* Response status
* Request method (GET vs others)

Important rule:

> **Only GET requests are cacheable by default.**

---

## Basic Caching Using `Cache-Control`

### Example: Cache for 60 seconds

```ts
export async function GET() {
  return new Response(JSON.stringify({ time: Date.now() }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=60",
    },
  });
}
```

---

### What This Means

* `public` → cacheable by browser and CDN
* `max-age=60` → cache valid for 60 seconds

Within 60 seconds:

* Server logic is NOT re-run
* Cached response is reused

---

## Important Cache-Control Directives

| Directive  | Meaning                  |
| ---------- | ------------------------ |
| `public`   | Any cache can store it   |
| `private`  | Only browser can cache   |
| `no-store` | Do not cache at all      |
| `no-cache` | Revalidate every time    |
| `max-age`  | Cache duration (seconds) |

---

## Disabling Caching (Very Important)

Some routes **must never be cached**.

Examples:

* Auth status
* User-specific data
* Sensitive responses

---

### Disable Cache Example

```ts
export async function GET() {
  return new Response("Sensitive data", {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
```

This ensures:

* Always fresh response
* No reuse anywhere

---

## Caching with `NextResponse`

Recommended approach in Next.js.

### Example

```ts
import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ message: "Cached data" });

  response.headers.set(
    "Cache-Control",
    "public, max-age=120"
  );

  return response;
}
```

Cleaner and more idiomatic.

---

## Cache Behavior by HTTP Method

| Method | Cached? | Reason            |
| ------ | ------- | ----------------- |
| GET    | Yes     | Safe & idempotent |
| POST   | No      | Creates data      |
| PATCH  | No      | Modifies data     |
| DELETE | No      | Deletes data      |

Never cache mutation requests.

---

## Cache Invalidation (Concept Only)

### The Problem

Cached data can become **stale**.

Example:

* Blog post updated
* Cache still serving old version

---

### How It’s Solved (High-Level)

Cache invalidation happens by:

* Reducing `max-age`
* Using `no-cache`
* Manual revalidation (advanced)

⚠️ We are **not implementing this yet**.
We’ll learn this later with **rendering and data fetching**.

---

## Common Mistakes

### Mistake 1: Caching User-Specific Data

❌ Wrong:

```ts
Cache-Control: public, max-age=300
```

For user data → security risk.

---

### Mistake 2: Forgetting to Disable Cache for Auth Routes

Auth routes should almost always use:

```
Cache-Control: no-store
```

---

### Mistake 3: Expecting POST to Cache

POST responses are not reused.

---

## Real-Life Use Cases

Caching route handlers is perfect for:

* Public APIs
* Blog posts
* Static content
* Configuration data
* Feature flags

It dramatically improves performance.

---

## What We Are NOT Covering Yet

Not covered yet:

* Next.js fetch caching
* Revalidation strategies
* ISR / static rendering cache
* Cache tags

These belong to **Rendering & Data Fetching** topics later.

---

## Summary

* Caching avoids recomputation
* Controlled via `Cache-Control` header
* Only GET requests are cached
* Use `no-store` for sensitive data
* `NextResponse` is preferred
* Correct caching = better performance + lower cost

---

## Next Topic (Continuing Sequence)

### **44 – Middleware**

We will learn:

* What middleware is
* When it runs
* How it intercepts requests
* Auth & redirects use cases

When ready, say:

```
next
```

We continue strictly in order.
