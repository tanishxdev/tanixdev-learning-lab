Continuing **strictly in sequence**.

Save this as:

```
topics/59-third-party-packages.md
```

---

# Third-Party Packages in Next.js (Server vs Client)

## Why This Topic Exists

### The Problem

In real projects, we **never write everything ourselves**.
We install npm packages for:

* UI components
* Charts
* Date formatting
* Auth
* Analytics
* Editors
* Payments

But in Next.js (with RSC), a **new problem appears**:

> **Not every npm package works everywhere.**

Common confusion:

* Package works in React → breaks in Next.js
* Works in Client Component → crashes in Server Component
* Uses `window` → server error
* Uses `fs` → client error

Without understanding this, you’ll face:

* Build errors
* Runtime crashes
* Confusing stack traces

---

### The Solution

Understand **where a package can run** and **why**.

Key idea:

> **Third-party packages must match the environment they run in: Server or Client.**

---

## What Are Third-Party Packages (In This Context)

### Definition

A **third-party package** is:

> **Any npm library that you install and import into your Next.js app.**

Examples:

* `date-fns`
* `axios`
* `chart.js`
* `react-icons`
* `bcrypt`
* `mongoose`

---

### Analogy

Think of **tools**:

* Some tools work only in a **kitchen** (server)
* Some work only in a **shop front** (client)
* Some work in **both**

Using the wrong tool in the wrong place breaks things.

---

### Visual / Line Diagram Explanation

```
Server Environment
  ├── DB libraries
  ├── Auth libraries
  ├── File system libs
  └── Node-only APIs

Client Environment
  ├── Browser APIs
  ├── DOM-based libs
  ├── UI libraries
  └── Event-driven code
```

---

## The Three Categories of Packages

This classification is **critical**.

---

## 1️⃣ Server-Only Packages

### What They Are

Packages that:

* Depend on Node.js APIs
* Use `fs`, `crypto`, sockets
* Access DB or OS

---

### Examples

* `bcrypt`
* `mongoose`
* `prisma`
* `jsonwebtoken`
* `nodemailer`

---

### Where They Can Be Used

✅ Server Components
✅ Route Handlers
❌ Client Components

---

### Example

```ts
// lib/hash.ts
import "server-only";
import bcrypt from "bcrypt";

export function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}
```

Safe:

* Never shipped to browser
* Secure

---

### ❌ Wrong Usage

```tsx
"use client";
import bcrypt from "bcrypt"; // ❌

bcrypt.hash("123", 10);
```

This will fail because:

* Browser does not support Node APIs

---

## 2️⃣ Client-Only Packages

### What They Are

Packages that:

* Use `window`, `document`
* Depend on DOM
* Handle UI, events, animations

---

### Examples

* `chart.js`
* `react-chartjs-2`
* `framer-motion`
* `react-toastify`
* `monaco-editor`

---

### Where They Can Be Used

❌ Server Components
✅ Client Components only

---

### Example

```tsx
"use client";

import { ToastContainer } from "react-toastify";

export default function Toast() {
  return <ToastContainer />;
}
```

This works because:

* Browser APIs are available
* Runs after hydration

---

### ❌ Wrong Usage

```tsx
// Server Component
import Chart from "chart.js"; // ❌
```

Server has:

* No DOM
* No `window`

---

## 3️⃣ Universal (Isomorphic) Packages

### What They Are

Packages that:

* Do not depend on browser APIs
* Do not depend on Node-only APIs
* Work in both environments

---

### Examples

* `date-fns`
* `lodash`
* `zod`
* `uuid`
* `clsx`

---

### Where They Can Be Used

✅ Server Components
✅ Client Components

---

### Example

```tsx
import { format } from "date-fns";

export default function Page() {
  return <p>{format(new Date(), "yyyy-MM-dd")}</p>;
}
```

Works everywhere.

---

## How to Know Where a Package Can Run

Ask these questions:

### Question 1

Does it use `window` / `document`?

→ Client-only

---

### Question 2

Does it use `fs`, `crypto`, DB drivers?

→ Server-only

---

### Question 3

Is it pure logic / utility?

→ Universal

---

## Reading Package Docs (Very Important)

Always check:

* “Browser support”
* “Node support”
* “SSR support”

Keywords to look for:

* “SSR compatible”
* “Client-side only”
* “Node-only”

---

## Pattern: Wrapping Client-Only Packages

### Problem

You want to use a client-only package inside a mostly server page.

### Solution

Wrap it in a Client Component.

---

### Example

```tsx
// ChartWrapper.tsx
"use client";

import Chart from "chart.js";

export default function ChartWrapper() {
  return <canvas id="chart" />;
}
```

```tsx
// page.tsx (Server)
import ChartWrapper from "./ChartWrapper";

export default function Page() {
  return (
    <>
      <h1>Analytics</h1>
      <ChartWrapper />
    </>
  );
}
```

This keeps:

* Page server-rendered
* Chart client-only

---

## What NOT to Do

### ❌ Making entire pages client for one library

Bad:

```tsx
"use client"; // ❌

export default function Page() {
  ...
}
```

Better:

* Isolate the library
* Wrap only that part

---

## Third-Party Packages + Streaming

Important note:

* Client-only packages **do not stream**
* Server Components stream HTML
* Client components hydrate later

This is expected behavior.

---

## Common Mistakes

### Mistake 1

Installing a package without checking environment

### Mistake 2

Importing client-only packages in Server Components

### Mistake 3

Marking everything `"use client"` to “fix” errors

This kills performance.

---

## Mental Model (Remember This)

> **Packages don’t choose where they run — you do.**
> By deciding Server vs Client, you decide package compatibility.

---

## What We Are NOT Covering Yet

Not covered yet:

* Context Providers
* Client-only code patterns
* Placement strategies

These are next.

---

## Summary

* Third-party packages fall into 3 categories
* Server-only → DB, auth, secrets
* Client-only → UI, DOM, animations
* Universal → pure logic
* Use Client Components as wrappers
* Never push server logic to client

---

## Next Topic (Strict Order)

### **60 – Context Providers**

We will learn:

* Why Context is tricky with RSC
* Where providers should live
* Correct patterns in Next.js

When ready, say:

```
next
```

Continuing step by step, no skips.
