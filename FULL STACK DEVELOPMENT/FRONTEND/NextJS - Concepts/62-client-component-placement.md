Continuing **strictly in sequence**.
No skips. No shortcuts. Same depth, same clarity.

Save this as:

```
topics/62-client-component-placement.md
```

---

# Client Component Placement in Next.js

## Why This Topic Exists

### The Problem

You now understand:

* Server Components (default)
* Client Components (`"use client"`)
* Client-only code
* Server-only code
* Context Providers

But **most real-world performance issues in Next.js** come from **wrong placement**, not wrong usage.

Common mistakes teams make:

* Marking whole pages as `"use client"`
* Putting providers too deep
* Importing client components too high
* Accidentally converting large server trees into client trees

Result:

* Huge JS bundles
* Lost server rendering benefits
* Slower page loads
* Hydration delays

---

### The Solution

Learn **where** client components should live in the component tree.

Key principle:

> **Client Components should be as deep and as small as possible.**

Placement matters more than existence.

---

## What Is Client Component Placement

### Definition

**Client Component Placement** means:

> **Deciding the exact position of Client Components in the component tree to minimize client-side JavaScript while preserving interactivity.**

It is not about *using* client components —
it is about *containing* them.

---

### Analogy

Think of **electric wiring in a building**:

* Power plant = server
* Rooms = components
* Switches = client components

You don’t electrify the whole building just to power one switch.

Same idea here.

---

### Visual / Line Diagram Explanation

```
Server Page
 ├── Server Header
 ├── Server Content
 │    └── Client Button  ✅
 └── Server Footer
```

Good placement.

Bad placement:

```
Client Page ❌
 ├── Header
 ├── Content
 └── Footer
```

Everything becomes client-side.

---

## How Client Boundaries Work (Critical Concept)

### Important Rule

> **When a component is marked `"use client"`, everything it imports becomes client-side.**

This is called a **client boundary**.

---

### Example: Boundary Expansion

```tsx
// A.tsx
"use client";

import B from "./B";

export default function A() {
  return <B />;
}
```

```tsx
// B.tsx
export default function B() {
  return <p>Hello</p>;
}
```

Even though `B` has no `"use client"`:

* `B` is now client-side
* Because it is imported by a client component

Client boundary flows **downward**.

---

## Placement Rule #1: Never Make Pages Client by Default

### ❌ Wrong Pattern

```tsx
// page.tsx
"use client";

export default function Page() {
  return <Dashboard />;
}
```

Why this is bad:

* Whole page becomes client-side
* Data fetching moves to browser
* SEO and performance degrade

---

### ✅ Correct Pattern

```tsx
// page.tsx (Server)
import Dashboard from "./Dashboard";

export default function Page() {
  return <Dashboard />;
}
```

```tsx
// Dashboard.tsx (Server)
import Chart from "./Chart";

export default function Dashboard() {
  return <Chart />;
}
```

```tsx
// Chart.tsx
"use client";

export default function Chart() {
  return <canvas />;
}
```

Only the **interactive part** is client-side.

---

## Placement Rule #2: Push Client Components Down

### Goal

> Keep client components **as low as possible** in the tree.

---

### Example: Form Page

#### ❌ Bad

```tsx
// page.tsx
"use client";

export default function Page() {
  return <Form />;
}
```

#### ✅ Good

```tsx
// page.tsx (Server)
import Form from "./Form";

export default function Page() {
  return (
    <>
      <h1>Contact</h1>
      <Form />
    </>
  );
}
```

```tsx
// Form.tsx
"use client";

export default function Form() {
  return <form>...</form>;
}
```

Static content stays server-rendered.

---

## Placement Rule #3: Providers Go High — But Carefully

### Context Providers Are Client Components

Example:

* Theme provider
* Auth provider
* State providers

They **must** be client components.

---

### Correct Placement

```tsx
// Providers.tsx
"use client";

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
```

```tsx
// layout.tsx (Server)
import { Providers } from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

Why this is correct:

* Providers need client
* But page/layout remains server
* Client boundary is **intentional and controlled**

---

## Placement Rule #4: Do NOT Import Server Code into Client

### ❌ Invalid

```tsx
"use client";

import { getUserFromDB } from "@/lib/db"; // ❌

export default function Profile() {
  // illegal
}
```

Why:

* Client components run in browser
* DB code is server-only

---

### Correct Pattern

```tsx
// Server Component
import ProfileClient from "./ProfileClient";
import { getUserFromDB } from "@/lib/db";

export default async function Profile() {
  const user = await getUserFromDB();
  return <ProfileClient user={user} />;
}
```

```tsx
// ProfileClient.tsx
"use client";

export default function ProfileClient({ user }) {
  return <p>{user.name}</p>;
}
```

Data flows **server → client via props**.

---

## Folder-Based Placement Strategy (Recommended)

```
src/
 ├── app/
 │    └── dashboard/
 │         ├── page.tsx          (server)
 │         ├── Stats.tsx         (server)
 │         ├── Chart.tsx         (client)
 │         └── Filters.tsx       (client)
 ├── components/
 │    ├── client/
 │    └── server/
```

This makes boundaries **visible**.

Optional but powerful.

---

## Performance Impact of Bad Placement

### If You Place Client Too High

* Bigger JS bundles
* More hydration work
* Slower TTI (Time To Interactive)
* Worse SEO

### If You Place Client Correctly

* Minimal JS
* Fast first paint
* Better Core Web Vitals
* Cleaner architecture

---

## Decision Checklist (Before Placing a Client Component)

Ask:

1. Does this need browser APIs?
2. Does this manage UI state or events?
3. Can this be isolated?

If yes:

* Place it **deep**
* Keep it **small**

If no:

* Keep it server-side

---

## What We Are NOT Covering Yet

Not covered yet:

* Interleaving server and client deeply
* Streaming boundaries
* Data fetching impact on placement

These are coming next.

---

## Summary

* Client placement is about **containment**
* `"use client"` creates a boundary
* Boundaries flow downward
* Never mark pages client by default
* Push client components as deep as possible
* Providers are special but must be controlled
* Correct placement = performance + clarity

---

## Next Topic (Strict Order)

### **63 – Interleaving Server and Client Components**

We will learn:

* Mixing server and client trees correctly
* Passing data across boundaries
* Real-world composition patterns

When ready, say:

```
next
```

Continuing exactly in order.
