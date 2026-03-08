Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/78-delete-server-action.md
```

---

# Delete Server Action in Next.js

## Why This Topic Exists

### The Problem

Deleting data is **the most dangerous mutation**.

Unlike create or update:

* Deleted data is often **irreversible**
* Accidental deletes are common
* Security mistakes are costly
* UI mistakes can wipe real data

Common beginner mistakes:

* Deleting based only on client input
* No confirmation step
* No permission checks
* Immediate UI removal before server confirmation
* Treating delete like update

These lead to:

* Data loss
* Security vulnerabilities
* Broken trust in the system

---

### The Solution

Treat **delete mutations as a special case** with:

* Explicit intent
* Strong identity checks
* Server-side authority
* Clear user confirmation
* Conservative UI behavior

Key idea:

> **Delete must be intentional, explicit, and server-controlled.**

---

## What Is a Delete Mutation

### Definition

A **delete mutation** is:

> **A server-side operation that permanently removes data from persistent storage.**

In database terms:

```
DELETE FROM table WHERE id = X
```

No ambiguity. No guessing.

---

### Analogy

Think of **emptying the recycle bin**:

* You confirm
* You understand consequences
* Action is final

Delete ≠ update.

---

### Visual / Line Diagram Explanation

```
User clicks Delete
  ↓
Client expresses intent
  ↓
Server Action validates
  ↓
Database delete
  ↓
Result returned
  ↓
UI updates
```

---

## Core Rules for Delete Server Actions

### Rule 1️⃣ Identity Is Mandatory

A delete action **must know exactly what to delete**.

Never:

* Delete by position
* Delete by assumption
* Delete without ID

---

### Rule 2️⃣ Confirmation Is Required (UX Rule)

Even if the server is safe:

* The UI must confirm intent

This prevents accidental clicks.

---

### Rule 3️⃣ Server Is the Final Authority

The server must:

* Validate identity
* Check permissions
* Decide if deletion is allowed

---

## Basic Delete Server Action Example

### Server Action (Separated)

```ts
// src/app/actions/post-actions.ts
"use server";

export async function deletePost(
  prevState: { error?: string },
  formData: FormData
) {
  const postId = formData.get("postId");

  if (!postId) {
    return { error: "Post ID is required" };
  }

  // simulate permission check
  // simulate DB delete
  await new Promise((res) => setTimeout(res, 1000));

  return { error: null };
}
```

Key points:

* Identity required
* No UI logic
* Server-only

---

### Client Form Triggering Delete

```tsx
"use client";

import { useActionState } from "react";
import { deletePost } from "../actions/post-actions";

const initialState = { error: null };

export function DeletePostButton({ postId }) {
  const [state, action, pending] = useActionState(
    deletePost,
    initialState
  );

  return (
    <form action={action}>
      <input type="hidden" name="postId" value={postId} />

      {state.error && <p>{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        onClick={(e) => {
          if (!confirm("Are you sure you want to delete this?")) {
            e.preventDefault();
          }
        }}
      >
        {pending ? "Deleting..." : "Delete"}
      </button>
    </form>
  );
}
```

---

## Why Confirmation Happens on Client

* Server ensures **safety**
* Client ensures **intent**

Both are required.

---

## Hard Delete vs Soft Delete (Conceptual)

### Hard Delete

* Data is removed permanently
* Used when:

  * Temporary data
  * Logs
  * Non-critical records

### Soft Delete

* Data is marked as deleted
* Still exists in DB
* Can be restored

We will **mention soft delete again** during real DB integration.

---

## Common Delete Mistakes

### ❌ Mistake 1

Deleting without confirmation

---

### ❌ Mistake 2

Deleting based on list index

---

### ❌ Mistake 3

Optimistically removing UI before server confirms

We will fix this in the **next topic**.

---

## Correct Mental Model

> **Delete = explicit intent + identity + server approval**

No shortcuts.

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Optimistic UI updates
* Undo patterns
* Error recovery after delete

Those come next.

---

## Summary

* Delete mutations are high-risk
* Identity and confirmation are mandatory
* Server is final authority
* UI must be conservative
* Never treat delete casually

---

## Next Topic (Strict Order)

### **79 – Optimistic Updates with `useOptimistic`**

We will learn:

* Making UI feel instant
* Safely predicting outcomes
* Rolling back on failure

When ready, say:

```
next
```

Continuing exactly in sequence.
