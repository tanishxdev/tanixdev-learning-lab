Continuing **strictly in sequence**.

Save this as:

```
topics/49-react-server-components.md
```

---

# React Server Components (RSC)

## Why React Server Components Exist

### The Problem Before RSC

With CSR and SSR, we still had limitations:

* Large JavaScript bundles sent to the browser
* Server-rendered HTML still required client JS for logic
* Sensitive logic had to be hidden manually
* Data fetching often duplicated (server + client)

Even with SSR:

* Components still shipped JS to the browser
* Browser paid the cost for logic it didn’t need

This caused:

* Slower page loads
* Bigger bundles
* Higher client memory usage

---

### The Solution

**React Server Components (RSC).**

Key idea:

> **Some components should run only on the server and never be sent to the browser.**

This reduces JS sent to the client and improves performance.

---

## What Are React Server Components

### Definition

A **React Server Component** is a component that:

* Runs **only on the server**
* Can access server resources directly
* Does **not ship JavaScript** to the browser
* Outputs serialized UI, not executable JS

In Next.js App Router:

> **All components are Server Components by default.**

---

### Analogy

Think of a restaurant kitchen:

* Kitchen staff prepares the dish (server)
* Customer only gets the plate (HTML)
* Recipes and tools never leave the kitchen (JS logic)

Server Components work the same way.

---

### Visual / Line Diagram Explanation

```
Server Component
   ↓ (runs on server)
HTML + data description
   ↓
Browser receives UI only
```

No component JS is sent.

---

## How RSC Works (High-Level)

### Step-by-Step Flow

1. Request comes in
2. Server Components execute on the server
3. They fetch data, compute UI
4. Result is serialized
5. Browser receives rendered UI structure
6. No JS for those components is downloaded

Only **interactive parts** need JS.

---

## Default Behavior in Next.js

In the App Router:

```tsx
export default function Page() {
  return <h1>Hello</h1>;
}
```

This is a **Server Component** by default.

Characteristics:

* Runs on server
* No client JS
* Can access server resources

---

## What Server Components Can Do

### Allowed Capabilities

Server Components can:

* Fetch data directly
* Access databases
* Read environment variables
* Call backend services
* Use async/await at top level

Example:

```tsx
export default async function Page() {
  const data = await getDataFromDB();

  return <pre>{JSON.stringify(data)}</pre>;
}
```

This runs **entirely on the server**.

---

## What Server Components Cannot Do

Server Components **cannot**:

* Use browser-only APIs (`window`, `document`)
* Use React hooks like `useState`, `useEffect`
* Handle user events (`onClick`)
* Maintain client-side state

Reason:

* They don’t run in the browser

---

## Why RSC Improves Performance

### 1️⃣ Smaller JavaScript Bundles

* No JS sent for server-only logic
* Faster downloads
* Faster parse time

---

### 2️⃣ Direct Data Access

* No API layer required
* Fewer network round trips

---

### 3️⃣ Better Security

* Secrets stay on server
* No accidental leaks

---

## RSC vs SSR (Important Difference)

| Aspect             | SSR | RSC |
| ------------------ | --- | --- |
| Runs on server     | ✅   | ✅   |
| Sends JS to client | ✅   | ❌   |
| Can be interactive | ✅   | ❌   |
| Can access DB      | ⚠️  | ✅   |

SSR:

* Server renders
* But client still gets JS

RSC:

* Server renders
* Client gets **no JS**

They solve different problems.

---

## Mixing Server and Client Components (Preview)

Real apps need both:

* Server Components → data, structure
* Client Components → interactivity

Example (conceptual):

```tsx
// Server Component
import Button from "./Button";

export default function Page() {
  return <Button />;
}
```

```tsx
// Client Component
"use client";

export default function Button() {
  return <button>Click</button>;
}
```

⚠️ We will learn **Server vs Client Components deeply next**.

---

## Common Misunderstandings

### Misunderstanding 1: “RSC replaces SSR”

Wrong.

* RSC and SSR work together
* RSC is about **where logic runs**
* SSR is about **when HTML is generated**

---

### Misunderstanding 2: “Everything should be Server Component”

Wrong.

Interactivity still needs client components.

---

## What We Are NOT Covering Yet

Not covered yet:

* `"use client"` rules
* Component boundaries
* RSC hydration model
* Data fetching patterns with RSC

These are **next topics**.

---

## Real-Life Use Cases

Server Components are perfect for:

* Fetching data
* Rendering lists
* Layouts
* Non-interactive UI
* Secure logic

---

## Summary

* RSC run only on the server
* No JS shipped to browser
* Default in Next.js App Router
* Great for performance and security
* Cannot handle interactivity
* Work together with Client Components

---

## Next Topic (Continuing Sequence)

### **50 – Server and Client Components**

We will learn:

* `"use client"` directive
* Rules and boundaries
* How mixing works
* Common mistakes

When ready, say:

```
next
```

Continuing strictly in order.
