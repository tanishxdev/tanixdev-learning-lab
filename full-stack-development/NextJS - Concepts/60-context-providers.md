Continuing **strictly in sequence**.

Save this as:

```
topics/60-context-providers.md
```

---

# Context Providers in Next.js (with React Server Components)

## Why This Topic Exists

### The Problem

In React, you already know **Context** is used for:

* Theme
* Auth state
* User preferences
* Global UI state

In **normal React (CSR)**, this is simple.

But in **Next.js with RSC**, confusion starts:

* Server Components exist
* Client Components exist
* Context uses React state
* State lives in the browser

So the big question is:

> **Where do Context Providers live in a Server Components world?**

Common mistakes:

* Putting Context Provider in a Server Component
* Making entire layouts `"use client"`
* Breaking streaming and server rendering
* Leaking client logic everywhere

---

### The Solution

Understand **how Context fits into the Server/Client boundary**.

Key idea:

> **Context Providers are client-side concepts and must live inside Client Components.**

Once this is clear, everything becomes logical.

---

## What Is a Context Provider (In This Context)

### Definition

A **Context Provider** is:

> **A Client-side wrapper that stores and distributes shared state to child Client Components.**

Important clarification:

* Context = state + reactivity
* State = browser concern
* Therefore → Context is **client-side**

---

### Analogy

Think of Context like a **Wi-Fi router**:

* Router lives in the house (client)
* Devices connect to it (client components)
* The city infrastructure (server) does not use Wi-Fi

Server Components don’t “connect” to Context.

---

### Visual / Line Diagram Explanation

```
Server Layout
  ↓
Client Provider (Context)
  ↓
Client Components (consume context)
```

Server Components stay **outside**.

---

## Core Rule (Must Remember)

> **Context Providers must be Client Components.**
> **Server Components cannot consume Context.**

This rule explains all patterns below.

---

## Why Server Components Cannot Use Context

Because Server Components:

* Run on the server
* Do not hold state
* Do not re-render in the browser
* Cannot subscribe to client-side updates

Context depends on:

* State
* Re-rendering
* React hooks

So they are incompatible by design.

---

## Correct Pattern: Client Provider Inside Server Layout

This is the **official and recommended pattern**.

---

### Step 1: Create a Client Provider

```tsx
// providers/ThemeProvider.tsx
"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

This is a **pure Client Component**.

---

### Step 2: Wrap It in `layout.tsx`

```tsx
// app/layout.tsx (Server Component)
import { ThemeProvider } from "@/providers/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

Important:

* `layout.tsx` stays a **Server Component**
* Only the provider is client-side

---

### Step 3: Consume Context in Client Components

```tsx
// components/ThemeToggle.tsx
"use client";

import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current: {theme}
    </button>
  );
}
```

Works perfectly.

---

## What Happens Internally

Let’s connect this with rendering lifecycle:

1. Server renders layout and page
2. HTML is streamed
3. Client JS loads
4. ThemeProvider initializes state
5. Child Client Components subscribe
6. Updates happen in browser only

Server is **not involved** after initial render.

---

## What NOT to Do (Very Important)

### ❌ Making Layout a Client Component

```tsx
"use client"; // ❌ bad

export default function RootLayout({ children }) {
  return <>{children}</>;
}
```

Why this is bad:

* Entire app becomes client-rendered
* Streaming lost
* Server Components disabled
* Performance drops

---

### ❌ Using Context in Server Components

```tsx
// ❌ impossible
const { theme } = useTheme();
```

This will:

* Throw errors
* Or be blocked by Next.js

---

## Multiple Context Providers (Real Apps)

Very common pattern:

```tsx
<ThemeProvider>
  <AuthProvider>
    <SettingsProvider>
      {children}
    </SettingsProvider>
  </AuthProvider>
</ThemeProvider>
```

Still fine because:

* Providers are client-side
* Server layout remains server-side

---

## Context vs Server Data (Clear Separation)

| Concern                | Use     |
| ---------------------- | ------- |
| Auth session (secure)  | Server  |
| User profile (initial) | Server  |
| UI theme               | Context |
| Modal open/close       | Context |
| Cart UI state          | Context |

Do not mix these.

---

## When NOT to Use Context

Avoid Context for:

* Large datasets
* Frequently changing server data
* Data fetching

Use:

* Server Components
* Server Actions
* Fetch + caching

Context is for **UI state**, not data state.

---

## Real-Life Use Cases

### 1️⃣ Theme (Dark/Light)

### 2️⃣ Auth UI state

### 3️⃣ Language preference

### 4️⃣ Sidebar open/close

### 5️⃣ Notifications state

---

## What We Are NOT Covering Yet

Not covered yet:

* Client-only code patterns
* Client component placement strategies
* Interleaving server & client deeply

These are next.

---

## Summary

* Context Providers are client-only
* Server Components cannot consume context
* Wrap providers inside server layouts
* Keep layouts server-side
* Use Context only for UI state

---

## Next Topic (Strict Order)

### **61 – Client-only Code**

We will learn:

* What code must live only in the browser
* How to isolate it correctly
* Placement strategies to avoid leaks

When ready, say:

```
next
```

Continuing exactly in order, no skips.
