Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/76-useFormStatus-vs-useActionState.md
```

---

# useFormStatus vs useActionState in Next.js

## Why This Topic Exists

### The Problem

You have now learned **both**:

* `useFormStatus`
* `useActionState`

At this stage, a very common confusion appears:

* “They both give `pending`, so are they the same?”
* “Which one should I use in real projects?”
* “Can I use both together?”
* “When does one break and the other not?”

Many developers:

* Use the wrong hook
* Overcomplicate forms
* Mix responsibilities
* End up with fragile UI logic

This topic exists to **remove ambiguity completely**.

---

### The Solution

Understand this clearly:

> **`useFormStatus` and `useActionState` solve different problems.
> They overlap slightly, but they are NOT interchangeable.**

Once you get the mental model right, the choice becomes obvious.

---

## What Each Hook Is Responsible For

### `useFormStatus` — Submission State Only

**Responsibility:**

> “Is this form currently submitting?”

It answers **one question only**.

---

### `useActionState` — Result + State Management

**Responsibility:**

> “What did the server action return, and what should the UI do next?”

It answers **multiple questions**.

---

## Side-by-Side Definition

| Aspect                | useFormStatus       | useActionState            |
| --------------------- | ------------------- | ------------------------- |
| Primary role          | Track submission    | Track result + submission |
| Reads server result   | ❌ No                | ✅ Yes                     |
| Handles errors        | ❌ No                | ✅ Yes                     |
| Handles success state | ❌ No                | ✅ Yes                     |
| Returns `pending`     | ✅ Yes               | ✅ Yes                     |
| Needs initial state   | ❌ No                | ✅ Yes                     |
| Scope                 | Inside form subtree | Bound to one action       |

This table is **interview-critical**.

---

## Mental Model (Very Important)

### `useFormStatus`

> “I only care whether the form is busy.”

Nothing else.

---

### `useActionState`

> “I care about what happened as a result of submission.”

Success, failure, data, errors.

---

## Example 1 — When `useFormStatus` Is Enough

### Scenario

* Simple form
* No validation messages
* No result handling
* Just prevent double submit

---

### Code

```tsx
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </button>
  );
}

export default function Page({ action }) {
  return (
    <form action={action}>
      <input name="email" />
      <SubmitButton />
    </form>
  );
}
```

### Why This Is Correct

* No need to read server response
* Only submission state matters
* Simple and clean

---

## Example 2 — When `useActionState` Is Required

### Scenario

* Validation errors
* Success messages
* Conditional UI after submit

---

### Code

```tsx
"use client";

import { useActionState } from "react";
import { createUser } from "../actions/user-actions";

const initialState = { error: null };

export default function Page() {
  const [state, action, pending] = useActionState(
    createUser,
    initialState
  );

  return (
    <form action={action}>
      <input name="email" />

      {state.error && <p>{state.error}</p>}

      <button disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
```

### Why `useFormStatus` Is Not Enough Here

* We need server-returned error
* UI depends on result
* Submission state alone is insufficient

---

## Can They Be Used Together?

### Yes — But With Clear Roles

Example:

* `useActionState` → result + errors
* `useFormStatus` → button loading state

This is acceptable **only if responsibilities are clear**.

---

## Common Anti-Patterns

### ❌ Using `useFormStatus` to guess success

Wrong:

* It tells you nothing about success/failure

---

### ❌ Using `useActionState` for simple loading only

Overkill:

* Adds unnecessary state
* Adds complexity

---

### ❌ Mixing with `useState`

Creates:

* Multiple sources of truth
* Confusing bugs

---

## Decision Rules (Memorize This)

Ask these questions in order:

1. Do I need to read server response?

   * Yes → `useActionState`
   * No → continue

2. Do I only need loading / disabled state?

   * Yes → `useFormStatus`

3. Do I need both?

   * Use both, carefully

---

## Why Next.js Split These Hooks

Design reason:

* Small hooks with single responsibility
* Predictable mental models
* Less hidden behavior

Next.js **intentionally avoided one “do everything” hook**.

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Updating existing data
* Deleting data
* Optimistic UI

Those come next and will **build directly on this understanding**.

---

## Summary

* `useFormStatus` → submission state only
* `useActionState` → result + submission state
* They are not competitors
* Choose based on responsibility
* Clear separation leads to clean code

---

## Next Topic (Strict Order)

### **77 – Update Server Action**

We will learn:

* Updating existing records
* Handling partial updates
* Safe mutation patterns

When ready, say:

```
next
```

Continuing exactly in order.
