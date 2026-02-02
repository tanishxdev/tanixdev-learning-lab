Perfect.
We continue **strictly in sequence**.
No skips. No shortcuts. Same depth. Same clarity.

Save this as:

```
topics/72-forms-with-server-actions.md
```

---

# Forms with Server Actions in Next.js

## Why This Topic Exists

### The Problem

So far, you now understand **data mutations conceptually**:

* Mutations must happen on the server
* Client should only express intent
* Writes must be explicit and controlled

But the **practical problem** is:

> **How does user input (forms) safely trigger server-side mutations?**

In traditional React / older Next.js patterns, people used:

* API routes
* `fetch('/api/...', { method: "POST" })`
* Manual request handling
* Extra boilerplate

This leads to:

* Duplicate code (API + UI)
* More files to manage
* Harder type-safety
* Indirect flow (form → fetch → API → DB)

---

### The Solution

Next.js introduces **Server Actions** to make **forms and mutations first-class citizens**.

Key idea:

> **Forms can directly call server-side functions — safely — without API routes.**

This is a **fundamental shift** in how we handle mutations.

---

## What Are Server Actions

### Definition

A **Server Action** is:

> **A function that runs on the server and can be invoked directly from a form or client interaction.**

Key properties:

* Runs **only on the server**
* Can mutate data
* Can access database
* Can access secrets
* Can be called from forms

---

### Analogy

Think of Server Actions like a **secure counter window**:

* Client fills a form
* Slides it under the window
* Server processes it
* Server responds

Client never enters the server room.

---

### Visual / Line Diagram Explanation

```
Form (Client)
  ↓ submit
Server Action (Server)
  ↓ validate
Database Mutation
  ↓ result
UI updates
```

No API route in between.

---

## Why Server Actions Exist (Deep Reason)

### Traditional Model (Before)

```
Form
 → onSubmit
 → fetch POST
 → API Route
 → validate
 → DB
 → response
```

Problems:

* Boilerplate
* More surface area for bugs
* Types duplicated
* Harder mental model

---

### Server Action Model (Now)

```
Form
 → action={serverAction}
 → server function
 → DB
```

Cleaner. Safer. More intentional.

---

## Important Rule (Very Important)

> **Server Actions are mutations by design.**

That means:

* They **must not** be called during render
* They **must** be triggered by user interaction
* They **must** live on the server

---

## How Server Actions Work (Conceptual)

### Step-by-Step Mental Model

1. User submits a form
2. Browser sends form data to server
3. Next.js identifies the server action
4. Server executes the function
5. Mutation happens
6. UI re-renders with updated state

This is **not magic**. It is structured.

---

## First Minimal Server Action Example

### Server Action Function

```ts
// runs on the server
export async function createPost(formData: FormData) {
  "use server";

  const title = formData.get("title");

  // later: validate + save to DB
}
```

Important points:

* `"use server"` marks it as server-only
* Can access database
* Cannot run in browser

---

### Form Using Server Action

```tsx
<form action={createPost}>
  <input name="title" />
  <button type="submit">Create</button>
</form>
```

What’s happening:

* No `onSubmit`
* No `fetch`
* No API route
* Form directly triggers server code

---

## Why This Is Safe

### 1️⃣ Runs on Server Only

* DB credentials stay hidden
* Secrets never reach client

---

### 2️⃣ Built-in Validation Point

* Server action is **single authority**
* Input can be validated centrally

---

### 3️⃣ Predictable Execution

* Runs only when user submits
* Never during render
* Never accidentally re-run

---

## Where Server Actions Live

They can live in:

* The same file as the page
* Separate server-only files

Example (conceptual):

```
app/posts/actions.ts
```

We’ll organize this properly later.

---

## What You Should NOT Do

### ❌ Do NOT use `onSubmit + fetch` by default

```tsx
<form onSubmit={handleSubmit}> ❌
```

This defeats the purpose unless truly needed.

---

### ❌ Do NOT mutate in Client Components directly

```tsx
"use client";
db.post.create(); ❌
```

Still forbidden.

---

## When You Might Still Use API Routes

API routes are still useful when:

* External clients consume your API
* Mobile apps need the same backend
* Public APIs are required

But **for internal app forms**:

> **Server Actions are preferred.**

---

## Mental Checklist (Forms + Mutations)

Before writing a form, ask:

1. Is this mutating data?
2. Can this be done via Server Action?
3. Is validation on server?
4. Is auth enforced?
5. Is UI reacting to result?

If yes → correct approach.

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* `useFormStatus`
* `useActionState`
* Error handling in actions
* Optimistic UI updates

These come **immediately next**, in order.

---

## Summary

* Server Actions enable safe mutations
* Forms can directly call server code
* No API routes required for internal forms
* Cleaner mental model
* Better security
* Less boilerplate

---

## Next Topic (Strict Order)

### **73 – useFormStatus Hook**

We will learn:

* Tracking loading state of forms
* Disabling buttons during submit
* Showing pending UI correctly

When ready, say:

```
next
```

We continue **exactly in sequence**.
