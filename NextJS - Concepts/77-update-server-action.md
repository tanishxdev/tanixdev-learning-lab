Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/77-update-server-action.md
```

---

# Update Server Action in Next.js

## Why This Topic Exists

### The Problem

So far, your mutations have focused on **creation** (INSERT).

But **real applications mostly update existing data**:

* Edit profile name
* Update post title
* Change user settings
* Toggle status (active / inactive)

Common beginner mistakes when updating data:

* Reusing “create” logic for updates
* Updating without validating identity (which record?)
* Overwriting fields accidentally
* Trusting client-provided IDs blindly
* Mixing update logic with UI logic

These lead to:

* Data corruption
* Security issues
* Hard-to-debug bugs

---

### The Solution

Treat **updates as a distinct mutation type** with:

* Clear identity (what is being updated?)
* Partial updates (only what changed)
* Server-side authority
* Explicit intent

Key idea:

> **An update mutation must know exactly *what* and *why* it is updating.**

---

## What Is an Update Mutation

### Definition

An **update mutation** is:

> **A server-side operation that modifies existing persistent data.**

In database terms:

```
UPDATE table
SET field = value
WHERE id = X
```

Important difference from create:

* Create → no identity yet
* Update → identity is mandatory

---

### Analogy

Think of **editing a saved contact**:

* You don’t create a new contact
* You modify specific fields
* The contact’s identity stays the same

---

### Visual / Line Diagram Explanation

```
Client Form
  ↓ submits (id + changes)
Server Action
  ↓ validate identity & input
Database
  ↓ update specific record
Result returned
```

---

## Core Rules for Update Server Actions

### Rule 1️⃣ Identity Must Be Explicit

An update **must know which record** to update.

This usually means:

* `id`
* `slug`
* `userId`

Never infer identity implicitly.

---

### Rule 2️⃣ Partial Updates Are Preferred

Only update:

* Fields that changed
* Fields explicitly allowed

Avoid overwriting entire records blindly.

---

### Rule 3️⃣ Validation Happens on Server

Never trust:

* Client-side validation alone
* Hidden inputs without checks

---

## Basic Update Server Action Example

### Server Action (Separated, Server-Only)

```ts
// src/app/actions/user-actions.ts
"use server";

export async function updateUser(
  prevState: { error?: string },
  formData: FormData
) {
  const userId = formData.get("userId");
  const name = formData.get("name");

  if (!userId) {
    return { error: "User ID is required" };
  }

  if (!name) {
    return { error: "Name cannot be empty" };
  }

  // simulate DB update
  await new Promise((res) => setTimeout(res, 1000));

  return { error: null };
}
```

Key points:

* Identity (`userId`) is required
* Validation happens before update
* Only intended fields are updated

---

### Client Form Using `useActionState`

```tsx
"use client";

import { useActionState } from "react";
import { updateUser } from "../actions/user-actions";

const initialState = { error: null };

export default function EditProfileForm({ userId }) {
  const [state, action, pending] = useActionState(
    updateUser,
    initialState
  );

  return (
    <form action={action}>
      <input type="hidden" name="userId" value={userId} />

      <input name="name" placeholder="New name" />

      {state.error && <p>{state.error}</p>}

      <button disabled={pending}>
        {pending ? "Updating..." : "Update"}
      </button>
    </form>
  );
}
```

---

## Why Hidden Inputs Are Used Here

* Forms can only submit form fields
* Identity must travel with the form
* Server still validates it

Hidden input ≠ trusted input.

---

## Preventing Common Update Bugs

### ❌ Bug 1: Updating Without ID

```ts
updateUser({ name }) ❌
```

Server has no idea *which* record.

---

### ❌ Bug 2: Blind Overwrites

```ts
db.user.update(formData) ❌
```

Dangerous. Always whitelist fields.

---

### ❌ Bug 3: Client-Side Validation Only

Client validation can be bypassed.

---

## Correct Mental Model

> **Update = identity + allowed changes + server authority**

If any part is missing, the update is unsafe.

---

## Reads vs Updates (Quick Contrast)

| Aspect            | Read      | Update    |
| ----------------- | --------- | --------- |
| Identity required | Optional  | Mandatory |
| Side effects      | No        | Yes       |
| Repeat safe       | Yes       | No        |
| Server-only       | Preferred | Required  |

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Deleting data
* Optimistic UI for updates
* Automatic revalidation

These come next, in order.

---

## Summary

* Updates modify existing data
* Identity is mandatory
* Partial updates are safer
* Server validates everything
* Client only expresses intent

---

## Next Topic (Strict Order)

### **78 – Delete Server Action**

We will learn:

* Safe deletion patterns
* Confirmation flows
* Avoiding accidental deletes

When ready, say:

```
next
```

Continuing exactly in sequence.
