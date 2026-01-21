Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/74-useActionState-hook.md
```

---

# useActionState Hook in Next.js

## Why This Topic Exists

### The Problem

You now know:

* **Server Actions** perform mutations
* **useFormStatus** tells you *when* a form is submitting

But a **critical gap** remains:

After the server action finishes…

* How do we know **if it succeeded or failed**?
* How do we read **server-returned data**?
* How do we show:

  * success messages
  * validation errors
  * server-side failures
* How do we update UI **based on the result**, not guesses?

Common beginner mistakes here:

* Using `try/catch` in Client Components
* Relying on `alert()` or `console.log`
* Refetching everything blindly
* Mixing server logic with client state

These lead to:

* Fragile UX
* Poor error handling
* Confusing mental models

---

### The Solution

Next.js provides another hook:

> **`useActionState`**

Key idea:

> **Server Actions can return structured results,
> and the client can react to those results declaratively.**

No hacks. No guessing.

---

## What is `useActionState`

### Definition

`useActionState` is a **React hook** that:

> **Binds a Server Action to client state, allowing you to read its result and status.**

It lets you:

* Capture returned data
* Capture validation errors
* Track pending state (alternative to `useFormStatus`)
* Drive UI based on mutation outcome

---

### Analogy

Think of a **form submission receipt**:

* You submit a request
* You receive a response
* You read the response to decide what to show

`useActionState` is that receipt.

---

### Visual / Line Diagram Explanation

```
Form submit
  ↓
Server Action runs
  ↓
Server returns result (success / error)
  ↓
useActionState stores result
  ↓
UI updates accordingly
```

---

## How `useActionState` Works (Mental Model)

### Key Shift in Thinking

Instead of:

> “I’ll handle everything manually”

You think:

> “Server returns truth → UI reflects truth”

---

## Basic Example (Minimal but Complete)

### Server Action (Returns State)

```ts
export async function createPost(
  prevState: { error?: string },
  formData: FormData
) {
  "use server";

  const title = formData.get("title");

  if (!title) {
    return { error: "Title is required" };
  }

  // simulate DB save
  await new Promise((res) => setTimeout(res, 1000));

  return { error: null };
}
```

Important:

* Server Action **returns an object**
* That object becomes **client-visible state**

---

### Client Component Using `useActionState`

```tsx
"use client";

import { useActionState } from "react";

const initialState = { error: null };

export default function Page() {
  const [state, action, pending] = useActionState(
    createPost,
    initialState
  );

  return (
    <form action={action}>
      <input name="title" />

      {state.error && <p>{state.error}</p>}

      <button type="submit" disabled={pending}>
        {pending ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
```

---

## What Each Part Means

### 1️⃣ `state`

```ts
state.error
```

* Holds **server-returned data**
* Persists across submissions
* Is the **source of truth**

---

### 2️⃣ `action`

```ts
<form action={action}>
```

* This replaces the raw server action
* Automatically wires state updates

---

### 3️⃣ `pending`

```ts
disabled={pending}
```

* Submission status
* Similar to `useFormStatus`
* Tied to **this specific action**

---

## Why `useActionState` Is Powerful

### Server-Centric Validation

* Validation happens **on the server**
* Client never guesses
* No duplicated rules

---

### Predictable UI

* UI reacts to returned state
* No race conditions
* No stale data

---

## `useFormStatus` vs `useActionState`

| Aspect              | useFormStatus    | useActionState        |
| ------------------- | ---------------- | --------------------- |
| Purpose             | Track submission | Track result + status |
| Scope               | Inside form      | Bound to action       |
| State               | pending only     | state + pending       |
| Validation handling | ❌                | ✅                     |
| Errors handling     | ❌                | ✅                     |

They are **complementary**, not rivals.

---

## When to Use Which

* Simple loading UI → `useFormStatus`
* Reading result / errors → `useActionState`
* Complex forms → often **both**

---

## Common Mistakes

### Mistake 1

Returning nothing from server action

❌ No state to read

---

### Mistake 2

Doing validation on client only

❌ Insecure and unreliable

---

### Mistake 3

Mixing `useState` with `useActionState`

❌ Conflicting sources of truth

---

## Correct Mental Model

> **Server decides outcome.
> Client reflects outcome.**

Never reverse this.

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Splitting actions into separate files
* Comparing `useFormStatus` vs `useActionState` deeply
* Updating data after success
* Optimistic UI

All coming next, in order.

---

## Summary

* `useActionState` binds server results to UI
* Server Action returns structured state
* Client reads state declaratively
* Validation and errors live on server
* UI becomes predictable and robust

---

## Next Topic (Strict Order)

### **75 – Separating Server Actions**

We will learn:

* Why actions should be separated
* Folder structure
* Clean architecture patterns

When ready, say:

```
next
```

Continuing exactly in sequence.
