Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/80-form-component-pattern.md
```

---

# Form Component Pattern in Next.js

## Why This Topic Exists

### The Problem

At this stage, you can:

* Create forms
* Trigger Server Actions
* Track loading state
* Handle success and errors
* Perform optimistic updates

But in a **real application**, you quickly face this problem:

* Every form repeats the same logic
* Every submit button handles loading
* Every error message is rendered manually
* Code duplication increases
* UX becomes inconsistent

Common beginner mistake:

> “I’ll just copy this form and tweak it.”

This leads to:

* Inconsistent behavior
* Hard-to-maintain code
* Bugs fixed in one form but not others

---

### The Solution

Introduce a **Reusable Form Component Pattern**.

Key idea:

> **Forms should be structured, predictable, and reusable —
> not rewritten every time.**

This pattern:

* Standardizes mutation UX
* Centralizes behavior
* Keeps pages clean

---

## What Is the Form Component Pattern

### Definition

The **Form Component Pattern** means:

> **Encapsulating form behavior (submission, loading, errors) into reusable components, while keeping server logic separate.**

Think:

* UI shell → reusable
* Action logic → injected

---

### Analogy

Think of a **template form**:

* Same layout
* Same loading behavior
* Different fields and actions

Like reusable dialog boxes.

---

### Visual / Line Diagram Explanation

```
Page
 └── <Form>
       ├── Fields
       ├── Error UI
       └── Submit Button (loading-aware)
```

The page focuses on **what**, not **how**.

---

## Core Goals of This Pattern

1. Reduce duplication
2. Enforce consistent UX
3. Simplify pages
4. Centralize mutation behavior

---

## A Simple Reusable Form Structure

### 1️⃣ Generic Form Wrapper

```tsx
"use client";

import { useActionState } from "react";

export function ActionForm({
  action,
  initialState,
  children,
  submitLabel,
}) {
  const [state, formAction, pending] = useActionState(
    action,
    initialState
  );

  return (
    <form action={formAction}>
      {children}

      state?.error && <p>{state.error}</p>

      <button disabled={pending}>
        {pending ? "Submitting..." : submitLabel}
      </button>
    </form>
  );
}
```

Purpose:

* Centralizes:

  * submission
  * loading
  * error display

---

### 2️⃣ Using the Form Component

```tsx
import { ActionForm } from "@/components/ActionForm";
import { createPost } from "@/app/actions/post-actions";

const initialState = { error: null };

export default function NewPostPage() {
  return (
    <ActionForm
      action={createPost}
      initialState={initialState}
      submitLabel="Create Post"
    >
      <input name="title" />
      <textarea name="content" />
    </ActionForm>
  );
}
```

Page becomes **clean and readable**.

---

## Why This Pattern Works Well with Server Actions

* Server Action controls mutation
* Form component controls UX
* Page controls structure

Each layer has **one responsibility**.

---

## Where This Pattern Should Live

Recommended:

```
src/
 ├── components/
 │    └── forms/
 │         └── ActionForm.tsx
```

This keeps it reusable across app.

---

## What Should NOT Go Into Form Components

❌ Database logic
❌ Validation rules
❌ Auth checks
❌ Business decisions

Those belong to **Server Actions**.

---

## Common Variations (Conceptual)

You may later extend this pattern with:

* Success messages
* Reset behavior
* Slot-based buttons
* Field-level error mapping

We will introduce those **only when required**.

---

## Common Mistakes

### ❌ Making Form Too Generic

Over-engineering makes usage confusing.

---

### ❌ Putting Server Action Inside Form Component

Breaks separation of concerns.

---

### ❌ Hardcoding Labels or Messages

Keep them configurable.

---

## Correct Mental Model

> **Form Component handles experience.
> Server Action handles truth.
> Page wires them together.**

This triad is powerful.

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Authentication
* Protected forms
* User-aware mutations

Those are coming next.

---

## Summary

* Forms repeat patterns
* Reusable Form Components reduce duplication
* Server Actions remain separate
* UX becomes consistent
* Pages become simple

---

## Next Topic (Strict Order)

### **81 – Authentication (Concepts)**

We will learn:

* Why authentication exists
* Server vs client auth
* Sessions, users, identity
* How auth fits into Next.js

When ready, say:

```
next
```

Continuing exactly in sequence.
