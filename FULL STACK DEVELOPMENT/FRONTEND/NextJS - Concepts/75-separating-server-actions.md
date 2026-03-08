Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/75-separating-server-actions.md
```

---

# Separating Server Actions in Next.js

## Why This Topic Exists

### The Problem

So far, we have written Server Actions:

* Inside page files
* Close to forms
* Inline with UI code

This is **fine for learning**, but in **real applications** it quickly causes problems:

* Pages become large and unreadable
* Business logic mixes with UI logic
* Harder to reuse actions
* Harder to test and maintain
* Difficult to reason about permissions and validation

Common beginner mistake:

> “I’ll just keep the action here, it works.”

It works **today**, but breaks **tomorrow**.

---

### The Solution

**Separate Server Actions from UI code.**

Key idea:

> **Server Actions are backend logic.
> They deserve their own place and structure.**

This aligns with:

* Clean architecture
* Separation of concerns
* Long-term scalability

---

## What Does “Separating Server Actions” Mean

### Definition

Separating Server Actions means:

> **Moving mutation logic into dedicated server-only files and importing them into UI components.**

The UI:

* Triggers actions
* Displays state

The action:

* Validates input
* Checks auth
* Mutates data

---

### Analogy

Think of a **restaurant**:

* Waiter → UI (form, button)
* Kitchen → Server Actions
* Menu → Action contracts

You don’t cook at the table.

---

### Visual / Line Diagram Explanation

```
UI (Client)
  ↓ triggers
Server Action (Server)
  ↓
Database
```

Clear boundaries.

---

## Why Separation Is Important (Deep Reasons)

### 1️⃣ Readability

UI files should answer:

* “What does the user see?”
* “What happens when user clicks?”

Not:

* SQL queries
* Auth rules
* Validation logic

---

### 2️⃣ Reusability

A separated action can be reused by:

* Multiple forms
* Different pages
* Background jobs (later)

---

### 3️⃣ Security & Auditing

When actions are centralized:

* Easier to review permissions
* Easier to audit mutations
* Fewer accidental leaks

---

### 4️⃣ Testability (Conceptual)

Even if you don’t test now:

* Separation makes testing possible later

---

## Recommended Folder Structure

We introduce **one new concept** here:
**Action modules**

> This is not a new Next.js feature, just an organizational pattern.

### Example Structure

```
src/
 ├── app/
 │    ├── posts/
 │    │    └── page.tsx
 │    └── actions/
 │         └── post-actions.ts
```

* `page.tsx` → UI
* `post-actions.ts` → Server logic

---

## Creating a Separated Server Action

### Server Action File

```ts
// src/app/actions/post-actions.ts

"use server";

export async function createPost(
  prevState: { error?: string },
  formData: FormData
) {
  const title = formData.get("title");

  if (!title) {
    return { error: "Title is required" };
  }

  // pretend DB call
  await new Promise((res) => setTimeout(res, 1000));

  return { error: null };
}
```

Important points:

* `"use server"` at top → file is server-only
* All exports are server actions
* No UI code here

---

### UI File Using the Action

```tsx
"use client";

import { useActionState } from "react";
import { createPost } from "../actions/post-actions";

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

UI stays clean.
Action stays authoritative.

---

## Where `"use server"` Should Live

Two valid patterns:

### Pattern 1 – Per Function

```ts
export async function action() {
  "use server";
}
```

### Pattern 2 – File Level (Preferred for Separation)

```ts
"use server";

export async function action() {}
```

We prefer **file-level** when separating actions.

---

## What Should Live in Server Actions

✔ Validation
✔ Authorization checks
✔ Database mutations
✔ Side effects (emails, logs)

---

## What Should NOT Live in Server Actions

❌ JSX
❌ UI state
❌ Browser APIs
❌ DOM logic

---

## Common Mistakes

### Mistake 1

Putting server actions in `components/`

❌ Confusing and misleading

---

### Mistake 2

Importing client-only code into actions

❌ Will break server boundary

---

### Mistake 3

Creating one massive `actions.ts`

❌ Be domain-based, not dump-based

---

## Correct Mental Model

> **Pages and components describe interaction.
> Actions describe consequences.**

Keep them separate.

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Comparing `useFormStatus` vs `useActionState`
* Updating existing records
* Deleting data
* Optimistic UI updates

These are coming immediately next.

---

## Summary

* Server Actions are backend logic
* Separate them from UI
* Improves clarity, security, reuse
* Use dedicated action files
* UI imports actions, not logic

---

## Next Topic (Strict Order)

### **76 – useFormStatus vs useActionState**

We will do:

* Side-by-side comparison
* When to use which
* Real decision rules

When ready, say:

```
next
```

Continuing exactly in sequence.
