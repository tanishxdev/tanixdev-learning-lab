Continuing **in sequence**.

Save this as:

```
topics/40-headers-in-route-handlers.md
```

---

# Headers in Route Handlers (Next.js)

## Why Headers Exist

### The Problem

Until now, you handled:

* URL path (`/api/posts/123`)
* Query parameters (`?page=2`)
* Request body (POST / PATCH)

But real HTTP requests also carry **metadata**:

* Who sent the request
* What format the client accepts
* Auth tokens
* Caching instructions

This metadata **does not belong** in:

* URL
* Body

---

### The Solution

HTTP provides **Headers**.

Key idea:

> **Headers carry request/response metadata, not data itself**

Next.js route handlers give full control over headers.

---

## What Are Headers

### Definition

**Headers** are key–value pairs sent:

* From client → server (request headers)
* From server → client (response headers)

Examples:

* `Content-Type`
* `Authorization`
* `Accept`
* `Cache-Control`

---

### Analogy

Think of a parcel:

* Box content → body
* Address → URL
* Stickers on box → headers
  (“Fragile”, “Express”, “Cash on delivery”)

---

### Visual / Line Diagram Explanation

```
Request
├── URL
├── Headers   ← metadata
└── Body

Response
├── Status
├── Headers   ← instructions
└── Body
```

---

## Reading Request Headers

### Basic Example

`app/api/headers/route.ts`

```ts
export async function GET(request: Request) {
  const userAgent = request.headers.get("user-agent");
  const accept = request.headers.get("accept");

  return new Response(
    JSON.stringify({
      userAgent,
      accept,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
```

---

### Test It

Open:

```
/api/headers
```

You’ll see values like:

```json
{
  "userAgent": "Mozilla/5.0 ...",
  "accept": "text/html,application/json"
}
```

---

## Common Request Headers (You’ll See Often)

| Header          | Purpose                  |
| --------------- | ------------------------ |
| `Content-Type`  | Format of request body   |
| `Authorization` | Auth token               |
| `User-Agent`    | Client info              |
| `Accept`        | Expected response format |
| `Cookie`        | Session data             |

We’ll use many of these later.

---

## Reading Authorization Header

### Example (Token Extraction)

```ts
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");

  return new Response(
    JSON.stringify({
      token: authHeader,
    }),
    { status: 200 }
  );
}
```

Example value:

```
Authorization: Bearer abc123
```

(Actual auth logic comes later.)

---

## Setting Response Headers

### Why Response Headers Matter

Response headers tell the client:

* How to read the response
* Whether to cache it
* Security rules

---

### Basic Response Headers

```ts
return new Response(
  JSON.stringify({ message: "Hello" }),
  {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  }
);
```

---

## Content-Type (Very Important)

Always set correct `Content-Type`.

Examples:

* JSON → `application/json`
* Text → `text/plain`

Wrong content type can:

* Break clients
* Cause parsing errors

---

## Custom Headers

You can define your own headers.

```ts
return new Response("OK", {
  headers: {
    "X-App-Version": "1.0.0",
    "X-Powered-By": "Next.js",
  },
});
```

Used for:

* Debugging
* Versioning
* Internal metadata

---

## Headers vs Query Params vs Body

| Use case          | Use          |
| ----------------- | ------------ |
| Identify resource | URL path     |
| Filter / options  | Query params |
| Send data         | Body         |
| Metadata          | Headers      |

Never mix responsibilities.

---

## Important Rules (Must Remember)

### Rule 1: Header Names Are Case-Insensitive

These are same:

* `Authorization`
* `authorization`

But **convention** uses capitalized form.

---

### Rule 2: Headers Are Strings

Even numbers and booleans arrive as strings.

Parse manually if needed.

---

### Rule 3: Do Not Put Sensitive Data in URL

Use:

* Headers (Authorization)
* Body (POST)

URLs are logged and cached.

---

## Common Mistakes

### Mistake 1: Forgetting Content-Type

Client may not parse response correctly.

---

### Mistake 2: Putting Auth Token in Query Params

Bad:

```
/api/posts?token=abc123
```

Good:

```
Authorization: Bearer abc123
```

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* Cookies in detail
* Redirects
* Caching strategies
* Middleware

Those are next topics.

---

## Real-Life Applications

Headers are used for:

* Authentication
* API versioning
* Caching
* Security (CORS, CSP)

Every serious backend relies on them.

---

## Summary

* Headers carry metadata
* Read via `request.headers`
* Set via `Response` headers
* Always strings
* Essential for auth, caching, security

---

## Next Topic (Continuing)

### **41 – Cookies in Route Handlers**

We will learn:

* Reading cookies
* Setting cookies
* Session basics

When ready, say:

```
next
```

We continue strictly step by step.
