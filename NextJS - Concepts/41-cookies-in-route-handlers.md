Continuing **in sequence**.

Save this as:

```
topics/41-cookies-in-route-handlers.md
```

---

# Cookies in Route Handlers (Next.js)

## Why Cookies Exist

### The Problem

So far, you’ve passed data using:

* URL (path + query params)
* Headers
* Request body

But some data needs to be:

* **Automatically sent on every request**
* **Stored by the browser**
* **Persisted across page reloads**

Examples:

* Login session
* User preferences (theme, language)
* CSRF tokens

Sending this data manually every time is impractical.

---

### The Solution

HTTP provides **Cookies**.

Key idea:

> **Cookies are small pieces of data stored by the browser and sent automatically with requests**

Next.js route handlers can **read and write cookies safely**.

---

## What Are Cookies

### Definition

A **Cookie** is:

* A key–value pair
* Stored in the browser
* Automatically included in requests to the same domain

Example:

```
sessionId=abc123
```

---

### Analogy

Think of cookies like a **wristband at an event**:

* You get it once
* You don’t show ID every time
* Security checks the wristband

---

### Visual / Line Diagram Explanation

```
Client
  ├── Stores cookie
  ├── Sends cookie automatically
  ↓
Server
  ├── Reads cookie
  └── Responds
```

---

## Cookies in Next.js Route Handlers

Next.js provides a **special helper** for cookies.

Instead of manually parsing headers, you use:

```
cookies()
```

(from `next/headers`)

---

## Reading Cookies

### Basic Example

`app/api/cookies/route.ts`

```ts
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const session = cookieStore.get("sessionId");

  return new Response(
    JSON.stringify({
      session: session?.value ?? null,
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

### What Is Happening

```ts
cookies()
```

* Reads cookies from the incoming request
* Works only on the server

```ts
cookieStore.get("sessionId")
```

* Returns cookie object or `undefined`

---

## Setting Cookies

### Why Setting Cookies Is Important

Used for:

* Login sessions
* Remembering user settings
* Secure tokens

---

### Example: Set a Cookie

```ts
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = cookies();

  cookieStore.set("sessionId", "abc123", {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return new Response(
    JSON.stringify({ message: "Cookie set" }),
    { status: 200 }
  );
}
```

---

### Important Cookie Options

| Option     | Meaning                 |
| ---------- | ----------------------- |
| `httpOnly` | JS cannot access cookie |
| `secure`   | HTTPS only              |
| `path`     | URL scope               |
| `maxAge`   | Lifetime in seconds     |
| `sameSite` | CSRF protection         |

---

## Deleting Cookies

### Example

```ts
import { cookies } from "next/headers";

export async function DELETE() {
  const cookieStore = cookies();

  cookieStore.delete("sessionId");

  return new Response(
    JSON.stringify({ message: "Cookie deleted" }),
    { status: 200 }
  );
}
```

---

## Cookies vs Headers vs Local Storage

| Storage      | Sent Automatically | Server Access | Use Case       |
| ------------ | ------------------ | ------------- | -------------- |
| Cookies      | ✅                  | ✅             | Auth, sessions |
| Headers      | ❌                  | ✅             | Auth tokens    |
| LocalStorage | ❌                  | ❌             | UI preferences |

Cookies are the **only browser storage automatically sent to server**.

---

## Security Rules (Very Important)

### Rule 1: Always Use `httpOnly` for Auth Cookies

Prevents:

* XSS attacks
* JS access to tokens

---

### Rule 2: Use `secure` in Production

Cookies should only be sent over HTTPS.

---

### Rule 3: Do NOT Store Sensitive Data in Plain Text

Cookies can be inspected.
Store:

* Session IDs
* Not passwords

---

## Common Mistakes

### Mistake 1: Accessing Cookies in Client Components

❌ Not allowed:

```ts
cookies()
```

Works **only on server**.

---

### Mistake 2: Using Cookies Instead of Auth Logic

Cookies store identifiers, not logic.
Auth verification happens on server.

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* Authentication flows
* JWT vs session cookies
* CSRF protection
* Cookie usage in middleware

Those come later.

---

## Real-Life Applications

Cookies are used for:

* Login sessions
* Remember-me functionality
* Feature flags
* Language preference

Every authenticated app uses them.

---

## Summary

* Cookies persist data across requests
* Automatically sent by browser
* Read & set using `cookies()`
* Must be secured properly
* Server-only in route handlers

---

## Next Topic (Continuing)

### **42 – Redirects in Route Handlers**

We will learn:

* Server-side redirects
* When and why to redirect
* Status codes for redirects

When ready, say:

```
next
```

We continue strictly step by step.
