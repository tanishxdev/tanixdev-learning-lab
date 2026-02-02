Continuing **strictly in sequence**.

Save this as:

```
topics/57-server-and-client-composition-patterns.md
```

---

# Server and Client Composition Patterns in Next.js

## Why This Topic Exists

### The Problem

You now understand:

* Server Components run on the server
* Client Components handle interactivity
* Streaming and hydration happen later

But a **very practical question** arises when writing real apps:

> **How do we combine Server and Client Components correctly?**

Common beginner mistakes:

* Marking everything `"use client"`
* Fetching data inside Client Components unnecessarily
* Passing too much logic to the browser
* Breaking streaming benefits

Without clear patterns, apps become:

* Slower
* Harder to maintain
* Less secure

---

### The Solution

Next.js encourages **composition patterns**.

Key idea:

> **Keep data and heavy logic on the server, and pass only what’s needed to client components.**

This is the heart of modern Next.js architecture.

---

## What Are Composition Patterns

### Definition

**Server–Client Composition Patterns** are:

> **Rules and best practices for how Server Components and Client Components are structured and nested together.**

They answer:

* Who fetches data?
* Who owns state?
* Where does interactivity live?

---

### Analogy

Think of a restaurant:

* **Kitchen (Server)** → prepares food (data, HTML)
* **Waiter (Client)** → interacts with customer (clicks, inputs)

You don’t bring the kitchen to the table.

---

### Visual / Line Diagram Explanation

```
Server Component (Parent)
  ├── Server Component (Data)
  └── Client Component (Interactivity)
```

Server stays at the top.
Client components are **leaves**, not roots.

---

## Core Rule (Must Remember)

> **Server Components can import Client Components,
> but Client Components cannot import Server Components.**

This rule defines all patterns.

---

## Pattern 1: Server Component as the Page Root (Recommended)

### Structure

```
page.tsx        → Server Component
  ├── List.tsx  → Server Component
  └── Button.tsx → Client Component
```

---

### Example

```tsx
// page.tsx (Server Component)
import Button from "./Button";

export default async function Page() {
  const data = await getData();

  return (
    <>
      <h1>{data.title}</h1>
      <Button />
    </>
  );
}
```

```tsx
// Button.tsx
"use client";

export default function Button() {
  return <button>Click me</button>;
}
```

### Why This Is Good

* Data stays on server
* Client gets only JS it needs
* Streaming still works

This is the **default and ideal pattern**.

---

## Pattern 2: Passing Data from Server → Client

### Problem

Client Components:

* Cannot fetch secure data
* Cannot access DB directly

Solution:

> Fetch data on the server, pass it as props.

---

### Example

```tsx
// page.tsx (Server)
import LikeButton from "./LikeButton";

export default async function Page() {
  const post = await getPost();

  return <LikeButton postId={post.id} />;
}
```

```tsx
// LikeButton.tsx
"use client";

export default function LikeButton({ postId }: { postId: string }) {
  return <button>Like {postId}</button>;
}
```

Client receives **only primitive data**, not secrets.

---

## Pattern 3: Client Component Owning State

### Rule

> **Only Client Components can use state, effects, and browser APIs.**

---

### Example

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

This component:

* Must be client
* Should stay small and focused

---

## Pattern 4: Avoid Making Layouts Client Components

### Common Mistake

```tsx
// ❌ Bad
"use client";

export default function Layout({ children }) {
  return <div>{children}</div>;
}
```

Why bad:

* Forces **entire subtree** to be client-side
* Kills server benefits

---

### Correct Approach

```tsx
// layout.tsx (Server)
export default function Layout({ children }) {
  return <div>{children}</div>;
}
```

Only mark **specific interactive children** as client.

---

## Pattern 5: Server Wrapper + Client Island

This is called the **“Client Island” pattern**.

### Example

```tsx
// Server component
export default function Page() {
  return (
    <section>
      <h1>Product</h1>
      <AddToCart />
    </section>
  );
}
```

```tsx
// AddToCart.tsx
"use client";

export default function AddToCart() {
  return <button>Add to cart</button>;
}
```

Only the button is interactive.
Everything else stays server-rendered.

---

## Pattern 6: Multiple Client Components Under One Server Parent

```tsx
export default function Page() {
  return (
    <>
      <Header />      // Server
      <SearchBar />   // Client
      <Filters />     // Client
      <ProductList />// Server
    </>
  );
}
```

This is normal and recommended.

---

## What NOT to Do (Anti-Patterns)

### ❌ Making page.tsx a Client Component

```tsx
"use client"; // ❌ avoid

export default function Page() {
  ...
}
```

You lose:

* Streaming
* Server data fetching
* Performance

---

### ❌ Fetching data in Client when not needed

```tsx
"use client";

useEffect(() => {
  fetch("/api/data");
}, []);
```

If data is needed for rendering → fetch on server instead.

---

## Decision Guide (Simple Rules)

Ask these questions:

1. Needs state or events?
   → Client Component

2. Needs DB / secrets / fetch?
   → Server Component

3. Shared layout?
   → Server Component

4. Button, modal, input?
   → Client Component

---

## Real-Life Mapping

| UI Part     | Component Type |
| ----------- | -------------- |
| Page shell  | Server         |
| Navbar      | Server         |
| User menu   | Client         |
| Like button | Client         |
| Data list   | Server         |
| Modal       | Client         |

---

## What We Are NOT Covering Yet

Not covered yet:

* Server-only files
* Client-only files
* Third-party package rules

These are **next topics**.

---

## Summary

* Server Components should be the default
* Client Components are for interactivity only
* Server can import client, not vice versa
* Keep client components small
* Composition determines performance and scalability

---

## Next Topic (Strict Order)

### **58 – Server-only Code**

We will learn:

* What code must never reach the browser
* How Next.js enforces server-only boundaries
* Best practices for security

When ready, say:

```
next
```

Continuing exactly in order.
