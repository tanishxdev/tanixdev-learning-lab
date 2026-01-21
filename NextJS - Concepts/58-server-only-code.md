Continuing **strictly in sequence**.

Save this as:

```
topics/58-server-only-code.md
```

---

# Server-only Code in Next.js

## Why This Topic Exists

### The Problem

You now understand:

* Server Components vs Client Components
* Composition patterns
* Keeping client components small

But there is a **serious risk** in real applications:

> **Accidentally shipping sensitive code to the browser**

Examples of dangerous mistakes:

* Database queries ending up in client bundles
* API keys exposed
* File system access attempted in the browser
* Heavy server logic bloating client JS

Without strict boundaries, **security and performance break**.

---

### The Solution

Next.js introduces the idea of **Server-only Code**.

Key idea:

> **Some code must be guaranteed to run only on the server and never be bundled for the client.**

Next.js provides **enforced boundaries**, not just conventions.

---

## What Is Server-only Code

### Definition

**Server-only code** is:

> **Code that is allowed to run only on the server and is completely excluded from client bundles.**

This includes:

* Database access
* Secrets
* Environment variables (private)
* File system
* Internal services

---

### Analogy

Think of a **bank vault**:

* Customers interact at the counter (client)
* Money storage happens in the vault (server)
* Vault access is impossible from outside

Server-only code is that vault.

---

### Visual / Line Diagram Explanation

```
Browser (Client)
  ❌ DB
  ❌ Secrets
  ❌ File system

Server
  ✅ DB
  ✅ Secrets
  ✅ File system
```

Clear separation.

---

## Why Server-only Code Is Critical

### 1️⃣ Security

* API keys must never leak
* DB credentials must stay hidden
* Internal logic must remain private

---

### 2️⃣ Performance

* Server-only code is not bundled
* Smaller JS sent to browser
* Faster hydration

---

### 3️⃣ Correctness

* Browser does not support:

  * `fs`
  * TCP sockets
  * Native modules

Server-only prevents runtime crashes.

---

## Types of Server-only Code

### 1️⃣ Database Access

```ts
import { db } from "@/lib/db";

export async function getUsers() {
  return db.user.findMany();
}
```

This must **never** run in the browser.

---

### 2️⃣ Secrets & Environment Variables

```ts
process.env.DATABASE_URL
process.env.API_SECRET
```

Private env vars are server-only.

---

### 3️⃣ File System Access

```ts
import fs from "fs";

fs.readFileSync("data.json");
```

Impossible in browser → server-only.

---

### 4️⃣ Internal Services

* Payment processing
* Email sending
* Admin operations

All server-only.

---

## How Next.js Enforces Server-only Code

### Rule 1: Server Components by Default

Important reminder:

> **All components are Server Components by default.**

So this is safe:

```tsx
export default async function Page() {
  const users = await getUsers(); // server-only
  return <div>{users.length}</div>;
}
```

No client JS includes this logic.

---

## The `server-only` Package (Explicit Enforcement)

Next.js provides a special marker:

```ts
import "server-only";
```

### What It Does

> **Guarantees that this file can only be imported by server code.**

If a Client Component tries to import it → build error.

---

### Example: Creating a Server-only Utility

```ts
// lib/db.ts
import "server-only";

export async function queryDB() {
  return "secure data";
}
```

Now:

* Safe in Server Components
* ❌ Impossible to import in Client Components

---

### What Happens If You Try

```tsx
"use client";

import { queryDB } from "@/lib/db"; // ❌ error
```

Build fails immediately.

This is **intentional and good**.

---

## Recommended Folder Structure for Server-only Code

Common pattern:

```
src/
 ├── app/
 ├── lib/
 │    ├── db.ts        (server-only)
 │    ├── auth.ts      (server-only)
 │    └── email.ts     (server-only)
```

Each file:

```ts
import "server-only";
```

Clear and safe.

---

## Server-only Code vs API Routes

Important clarification:

* Server-only code ≠ API routes
* API routes expose endpoints
* Server-only code stays internal

Pattern:

```
API Route → calls server-only code
Server Component → calls server-only code
```

Never the client directly.

---

## Common Mistakes

### Mistake 1: Importing server-only code into Client Components

❌ Causes build errors
✅ Fix: Pass data from server instead

---

### Mistake 2: Using `"use client"` unnecessarily

This accidentally:

* Pushes logic to browser
* Breaks server-only access

---

### Mistake 3: Putting secrets in shared files

If a file might be imported by client code:

* Do NOT put secrets there

---

## How to Decide If Code Is Server-only

Ask these questions:

1. Does it use secrets?
2. Does it access DB?
3. Does it use `fs` or OS APIs?
4. Should users ever see this logic?

If **yes** → server-only.

---

## What We Are NOT Covering Yet

Not covered yet:

* Client-only code rules
* Third-party package constraints
* Context providers with RSC

These are **next topics**.

---

## Summary

* Server-only code must never reach the browser
* Next.js enforces this strictly
* Use `import "server-only"` for safety
* Keep secrets, DB, filesystem on server
* This is critical for security and performance

---

## Next Topic (Strict Order)

### **59 – Third Party Packages**

We will learn:

* Which npm packages work in Server Components
* Which work only in Client Components
* How to safely integrate libraries

When ready, say:

```
next
```

Continuing exactly in order.
