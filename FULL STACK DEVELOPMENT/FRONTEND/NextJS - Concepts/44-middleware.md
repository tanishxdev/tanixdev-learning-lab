Continuing **strictly in sequence**.

Save this as:

```
topics/44-middleware.md
```

---

# Middleware (Next.js)

## Why Middleware Exists

### The Problem

Many concerns apply to **every request** (or many routes):

* Authentication checks
* Redirect unauthenticated users
* Block access based on role/region
* Add headers (security, locale)
* Rewrite URLs
* Run logic **before** route handlers or pages

If you put this logic:

* Inside every route handler → duplication
* Inside every page → inconsistent behavior
* After the request → too late

You need a **single place** that runs **before everything else**.

---

### The Solution

**Middleware**.

Key idea:

> **Middleware runs before the request reaches your route handler or page.**

It can:

* Allow the request
* Modify the request/response
* Redirect
* Block the request

---

## What Is Middleware

### Definition

Middleware is a special function that:

* Runs **on every matching request**
* Executes **before routing**
* Lives in a file named `middleware.ts`

It runs at the **edge** (very early in the request lifecycle).

---

### Analogy

Think of airport security:

* Everyone passes through security
* Some people are redirected
* Some are blocked
* Some pass through unchanged

Middleware is that security checkpoint.

---

### Visual / Line Diagram Explanation

```
Request
  ↓
Middleware
  ↓
Route Handler / Page
  ↓
Response
```

If middleware redirects or blocks:

```
Request
  ↓
Middleware (redirect / block)
  ↓
Response
```

Route handler is never reached.

---

## Where Middleware Lives

### File Location

Middleware must be at:

```
/middleware.ts
```

(or `middleware.js`)

At the **project root** (same level as `src/`).

Example:

```
next-js-handbook/
├── middleware.ts
├── src/
│   └── app/
└── package.json
```

---

## Basic Middleware Example

### Minimal Middleware

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.next();
}
```

### What This Does

* Runs on every request
* Does nothing
* Allows request to continue

This is the baseline.

---

## Blocking a Request

### Example: Block All Requests

```ts
import { NextResponse } from "next/server";

export function middleware() {
  return new NextResponse("Access denied", { status: 403 });
}
```

Result:

* No route handlers run
* Client gets `403`

---

## Redirecting in Middleware

### Example: Redirect to `/login`

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(
    new URL("/login", request.url)
  );
}
```

Middleware-level redirects are **very common**.

---

## Conditional Middleware (Auth-like)

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = false; // simulated

  if (!isLoggedIn) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}
```

* If not logged in → redirect
* Otherwise → continue

---

## Limiting Middleware Scope (Very Important)

By default, middleware runs on **all routes**.

This is usually NOT what you want.

---

### Using `matcher`

```ts
export const config = {
  matcher: ["/dashboard/:path*"],
};
```

Meaning:

* Middleware runs only for `/dashboard` and its sub-routes

This improves performance and correctness.

---

## Reading Request Data in Middleware

### Accessing URL and Path

```ts
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/admin")) {
    return NextResponse.redirect(
      new URL("/not-authorized", request.url)
    );
  }

  return NextResponse.next();
}
```

---

### Reading Cookies (Preview)

```ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}
```

⚠️ We will learn **cookies properly later**.
This is only to show capability.

---

## What Middleware CAN and CANNOT Do

### Middleware CAN

* Redirect
* Rewrite URLs
* Read headers
* Read cookies
* Add response headers
* Block requests

---

### Middleware CANNOT

* Access database
* Use Node.js APIs
* Do heavy computation
* Read request body
* Use React hooks

Middleware must be **fast and lightweight**.

---

## Middleware vs Route Handlers (Clear Difference)

| Middleware          | Route Handler        |
| ------------------- | -------------------- |
| Runs before routing | Runs after routing   |
| Intercepts request  | Handles request      |
| No DB access        | DB allowed           |
| Global logic        | Route-specific logic |

They solve **different problems**.

---

## Common Mistakes

### Mistake 1: Putting Business Logic in Middleware

Middleware is NOT for:

* DB queries
* API calls
* Heavy logic

---

### Mistake 2: Forgetting Matcher

Running middleware everywhere:

* Slower
* Unexpected behavior

Always scope it.

---

### Mistake 3: Expecting Request Body

Middleware cannot read POST body.

---

## Real-Life Applications

Middleware is used for:

* Authentication gates
* Role-based redirects
* Locale detection
* A/B testing
* Feature flags
* Security headers

Every production app uses it.

---

## What We Are NOT Covering Yet

Not covered yet:

* Middleware with auth providers
* Middleware + Clerk
* Advanced rewrites
* Edge vs Node runtime internals

These come later.

---

## Summary

* Middleware runs before everything
* Lives in `middleware.ts`
* Used for global request control
* Can redirect, block, modify
* Must be lightweight
* Use matcher to scope it

---

## Next Topic (Continuing Sequence)

### **45 – Rendering**

We will learn:

* What rendering really means
* Why multiple rendering strategies exist
* Mental model before CSR/SSR

When ready, say:

```
next
```

Continuing step by step.
