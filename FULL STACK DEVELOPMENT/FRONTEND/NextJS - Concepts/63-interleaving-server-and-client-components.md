Continuing **strictly in sequence**.
No skips. No assumptions. Same depth, same clarity.

Save this as:

```
topics/63-interleaving-server-and-client-components.md
```

---

# Interleaving Server and Client Components in Next.js

## Why This Topic Exists

### The Problem

You now understand:

* Server Components (default)
* Client Components (`"use client"`)
* Client-only code
* Client component placement

But when building **real applications**, you rarely have a clean split like:

* “This page is server”
* “This component is client”

Instead, you face situations like:

* Server fetches data → client displays & interacts
* Client triggers action → server mutates data
* Server renders structure → client enhances parts

This leads to confusion like:

* Can a server component import a client one?
* Can a client component import a server one?
* How does data cross the boundary?
* Where does code actually run?

---

### The Solution

Understand **interleaving**:

> **Server and Client Components can be mixed in the same tree — but only in one valid direction.**

This topic gives you the **mental model** that prevents architecture bugs.

---

## What Is Interleaving

### Definition

**Interleaving Server and Client Components** means:

> **Composing a component tree where server and client components coexist, with clear execution boundaries and data flow.**

Key idea:

* Server builds the tree
* Client hydrates specific leaves

---

### Analogy

Think of a **restaurant**:

* Kitchen = server
* Dining area = client
* Kitchen prepares food (data, structure)
* Dining area handles interaction (eating, feedback)

Food flows **from kitchen to table**, never the reverse.

---

### Visual / Line Diagram Explanation

```
Server Component
 ├── Server Component
 ├── Client Component
 │     ├── Client Component
 │     └── Server Component ❌ (not allowed)
 └── Server Component
```

Rule preview:

* Server → Client ✅
* Client → Server ❌

---

## The One Golden Rule

> **Server Components can import Client Components.
> Client Components CANNOT import Server Components.**

This single rule explains everything.

---

## Why This Rule Exists (Important)

### Server Components

* Run on the server
* Can access:

  * DB
  * Secrets
  * File system
* Never shipped to browser

### Client Components

* Run in the browser
* Have:

  * No DB
  * No secrets
* Bundled into JS sent to user

If client could import server code:

* Secrets would leak
* DB logic would break

So the boundary is enforced.

---

## Valid Interleaving Pattern (Most Common)

### Server → Client (Allowed)

```tsx
// page.tsx (Server)
import ProfileClient from "./ProfileClient";
import { getUser } from "@/lib/db";

export default async function Page() {
  const user = await getUser();

  return (
    <>
      <h1>Profile</h1>
      <ProfileClient user={user} />
    </>
  );
}
```

```tsx
// ProfileClient.tsx
"use client";

export default function ProfileClient({ user }) {
  return <button>Edit {user.name}</button>;
}
```

What happens:

* Server fetches data
* Server renders HTML
* Client receives props
* Client handles interaction

Perfect interleaving.

---

## Invalid Interleaving Pattern

### Client → Server (Not Allowed)

```tsx
// ClientComponent.tsx
"use client";

import { getUser } from "@/lib/db"; // ❌

export default function ClientComponent() {
  return null;
}
```

Why this fails:

* DB code is server-only
* Client bundle cannot include it

Next.js will error at build time.

---

## Interleaving with Multiple Levels

### Example Tree

```
Page (Server)
 ├── Header (Server)
 ├── Content (Server)
 │     ├── Filters (Client)
 │     │     └── Button (Client)
 │     └── DataTable (Server)
 └── Footer (Server)
```

This is valid because:

* Server composes everything
* Client parts are leaves
* No client imports server

---

## Passing Data Across the Boundary

### How Data Moves

> **Server → Client via props only**

You cannot:

* Call server functions from client
* Access server variables

---

### Correct Pattern

```tsx
// Server
const data = await fetchData();
<ClientComponent data={data} />
```

```tsx
// Client
"use client";
export default function ClientComponent({ data }) {
  return <div>{data.title}</div>;
}
```

Data becomes **serialized** and sent to browser.

---

## What About Client → Server Communication?

Not direct.

Client talks to server via:

* Route Handlers (APIs)
* Server Actions (later topic)

We will learn these later explicitly.

---

## Interleaving with Layouts

Layouts are **server components by default**.

Valid:

```tsx
// layout.tsx (Server)
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
```

```tsx
// Navbar.tsx
"use client";

export default function Navbar() {
  return <button>Menu</button>;
}
```

Layout remains server-side.
Navbar becomes client-side.

---

## Mental Model You Must Keep

Always think in **layers**:

1. Server builds structure
2. Server fetches data
3. Server passes props
4. Client hydrates leaves
5. Client handles interaction

Never reverse this flow.

---

## Common Mistakes

### Mistake 1

Trying to import server utilities into client

### Mistake 2

Fetching data in client when server could do it

### Mistake 3

Marking parent components as client unnecessarily

### Mistake 4

Thinking server and client are “equal”

They are not. Server is dominant.

---

## What We Are NOT Covering Yet

Not covered yet:

* Data fetching strategies (deep)
* Streaming with Suspense
* Server Actions

These come next in order.

---

## Summary

* Server and Client Components can coexist
* Server → Client import is allowed
* Client → Server import is forbidden
* Data flows only from server to client
* Server composes the tree
* Client enhances interaction
* Correct interleaving = clean, fast apps

---

## Next Topic (Strict Order)

### **64 – Data Fetching**

We will learn:

* Where data should be fetched
* Client vs Server fetching
* Mental models before code

When ready, say:

```
next
```

Continuing exactly in order.
