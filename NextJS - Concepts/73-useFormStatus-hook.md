Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/73-useFormStatus-hook.md
```

---

# useFormStatus Hook in Next.js

## Why This Topic Exists

### The Problem

You now know how **forms trigger Server Actions** safely.

But there is a **very practical UI problem** left unsolved:

When a user submits a form:

* How do we know submission is **in progress**?
* How do we **disable the submit button**?
* How do we show **“Saving…” / loading state**?
* How do we prevent **double submissions**?

In classic React, people used:

* `useState(isLoading)`
* Manual `try/catch/finally`
* Client-side hacks

But with **Server Actions**, this logic **cannot live on the client in the same way**.

---

### The Solution

Next.js provides a built-in hook:

> **`useFormStatus`**

Key idea:

> **The server already knows when a form is submitting.
> The client should just read that state.**

No manual loading state.
No race conditions.
No extra wiring.

---

## What is `useFormStatus`

### Definition

`useFormStatus` is a **React hook** that:

> **Gives you the current status of a form submission triggered by a Server Action.**

It tells you things like:

* Is the form currently submitting?
* Has submission started?
* Is it pending?

---

### Analogy

Think of a **delivery tracking board**:

* You don’t guess if the package is moving
* You read the official status from the system

`useFormStatus` is that official status.

---

### Visual / Line Diagram Explanation

```
User clicks Submit
  ↓
Form submission starts
  ↓
Server Action running
  ↓
useFormStatus → pending = true
  ↓
Server finishes
  ↓
pending = false
```

---

## Where `useFormStatus` Can Be Used (Important)

### Rule

> **`useFormStatus` must be used inside a child component of a `<form>`**

Not outside.
Not globally.

Why?
Because it reads **context provided by the form**.

---

## Basic Example (Minimal)

### Server Action

```ts
export async function savePost(formData: FormData) {
  "use server";

  const title = formData.get("title");

  // simulate save
  await new Promise((res) => setTimeout(res, 2000));
}
```

---

### Form with Status-Aware Button

```tsx
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </button>
  );
}

export default function Page() {
  return (
    <form action={savePost}>
      <input name="title" />
      <SubmitButton />
    </form>
  );
}
```

---

## What’s Happening (Step-by-Step)

1. User clicks **Save**
2. Form submits
3. Server Action starts running
4. `pending` becomes `true`
5. Button disables automatically
6. Text changes to `Saving...`
7. Server finishes
8. `pending` becomes `false`

No manual state.
No `useState`.
No guessing.

---

## Why This Is Better Than `useState`

### Traditional Way (Bad for Server Actions)

```tsx
const [loading, setLoading] = useState(false);
```

Problems:

* Client doesn’t truly know server state
* Can desync
* Extra code
* Error-prone

---

### `useFormStatus` Way (Correct)

* Server is source of truth
* Client only reflects it
* Always accurate
* Less code

---

## What `useFormStatus` Returns

Important fields (we focus on essentials):

```ts
{
  pending: boolean
}
```

For now:

* **Only `pending` matters**

Other fields exist, but we’ll introduce them **only when needed**.

---

## Common Mistakes

### Mistake 1

Using `useFormStatus` outside a form

❌ Will not work

---

### Mistake 2

Trying to control submission manually

❌ Goes against Server Action model

---

### Mistake 3

Multiple submit buttons without clarity

Each button should be intentional.

---

## Correct Mental Model

> **Server controls execution.
> Client reflects status.**

Not the other way around.

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Accessing result or error from action
* Updating local UI state after mutation
* Handling success / failure messages

These are coming next.

---

## Summary

* `useFormStatus` tracks form submission state
* It works only with Server Actions
* It prevents double submissions
* It removes manual loading state
* Server remains the source of truth

---

## Next Topic (Strict Order)

### **74 – useActionState Hook**

We will learn:

* Reading server action results
* Handling success and errors
* Updating UI based on mutation outcome

When ready, say:

```
next
```

Continuing exactly in order.
