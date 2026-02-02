Continuing **in sequence**.

Save this as:

```
topics/42-redirects-in-route-handlers.md
```

---

# Redirects in Route Handlers (Next.js)

## Why Redirects Exist

### The Problem

In many backend situations, you don’t want to **return data**.
You want to **send the user somewhere else**.

Examples:

* User not logged in → send to `/login`
* Resource moved → send to new URL
* Form submitted → redirect to success page
* Old API endpoint → redirect to new one

If you just return JSON:

* Browser stays on the same page
* UX becomes awkward
* Semantics are wrong

---

### The Solution

HTTP provides **Redirects**.

Key idea:

> **A redirect tells the client: “Don’t stay here — go there.”**

Next.js route handlers support **proper HTTP redirects**.

---

## What Is a Redirect (HTTP Level)

### Definition

A **Redirect** is a response that:

* Has a **3xx status code**
* Includes a `Location` header
* Tells the client a new URL

Example:

```
Status: 302
Location: /login
```

---

### Analogy

Think of a receptionist:

* You arrive at the wrong desk
* They point you to the correct counter
* You walk there yourself

Server doesn’t move you — it **instructs** you.

---

### Visual / Line Diagram Explanation

```
Request → /api/secure
        ↓
Server says: go to /login
        ↓
Client navigates to /login
```

---

## How Redirects Work in Route Handlers

There are **two correct ways** to redirect from route handlers:

1. **Using `Response` with Location header**
2. **Using `NextResponse.redirect`**

We’ll start with the fundamentals.

---

## Method 1: Redirect Using `Response`

### Basic Redirect Example

```ts
export async function GET() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/login",
    },
  });
}
```

---

### What Happens

* Client receives `302`
* Browser automatically navigates to `/login`

This is **pure HTTP**, no Next.js magic.

---

## Common Redirect Status Codes (Important)

| Status | Meaning                      | Use case            |
| ------ | ---------------------------- | ------------------- |
| `301`  | Permanent                    | URL changed forever |
| `302`  | Temporary                    | Auth redirects      |
| `303`  | See Other                    | After POST redirect |
| `307`  | Temporary (method preserved) | Strict redirect     |
| `308`  | Permanent (method preserved) | Strict permanent    |

Most common:

* **302** → auth / temporary
* **303** → after POST

---

## Redirect After POST (Very Important)

### The Problem

After a POST:

* Browser may resubmit on refresh
* Causes duplicate creation

---

### The Solution: POST → Redirect → GET

This is a **standard web pattern**.

---

### Example: POST then Redirect

```ts
export async function POST() {
  // Imagine data was created successfully

  return new Response(null, {
    status: 303,
    headers: {
      Location: "/success",
    },
  });
}
```

Why `303`?

* Tells browser to follow with a **GET**
* Prevents duplicate POST

---

## Method 2: Redirect Using `NextResponse` (Recommended)

Next.js provides a helper.

### Example

```ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(new URL("/login", "http://localhost:3000"));
}
```

---

### Why `NextResponse` Is Better

* Cleaner API
* Handles URL construction safely
* Integrates with Next.js features

We’ll use this more later.

---

## Conditional Redirect Example (Auth-like)

```ts
import { NextResponse } from "next/server";

export async function GET() {
  const isLoggedIn = false; // simulated

  if (!isLoggedIn) {
    return NextResponse.redirect(
      new URL("/login", "http://localhost:3000")
    );
  }

  return NextResponse.json({ message: "Welcome" });
}
```

---

## Redirect vs Returning JSON (Clear Difference)

| Situation            | Use      |
| -------------------- | -------- |
| API consumer (fetch) | JSON     |
| Browser navigation   | Redirect |
| Auth failure         | Redirect |
| Form success         | Redirect |

Redirects are **navigation control**, not data.

---

## Important Rules (Must Remember)

### Rule 1: Redirect Ends the Request

* No code after redirect runs
* Treat it like `return`

---

### Rule 2: Redirect Is Server Instruction

* Server does not navigate
* Client follows instruction

---

### Rule 3: Use Correct Status Codes

Wrong status → broken UX.

---

## Common Mistakes

### Mistake 1: Redirecting With JSON

❌ Wrong:

```ts
return { redirect: "/login" };
```

Browser will ignore this.

---

### Mistake 2: Using 302 After POST Without Thought

Can cause:

* Duplicate submissions
* Bad UX

Prefer **303** after POST.

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* Redirects in middleware
* Redirects in pages/layouts
* Auth-based redirects with cookies

Those are later topics.

---

## Real-Life Applications

Redirects are used for:

* Login flows
* Logout flows
* After form submission
* Legacy URL handling
* Access control

Every serious app uses them.

---

## Summary

* Redirects instruct the client to navigate
* Implemented using 3xx responses
* Use `Location` header or `NextResponse.redirect`
* Choose correct status code
* Essential for auth and UX

---

## Next Topic (Continuing)

### **43 – Caching in Route Handlers**

We will learn:

* Response caching
* When data is reused
* Performance implications

When ready, say:

```
next
```

We continue strictly step by step.
