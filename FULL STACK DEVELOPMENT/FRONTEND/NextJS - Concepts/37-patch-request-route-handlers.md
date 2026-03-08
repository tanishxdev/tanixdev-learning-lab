Continuing **in sequence**.

Save this as:

```
topics/37-patch-request-route-handlers.md
```

---

# PATCH Request in Route Handlers (Next.js)

## Why PATCH Requests Exist

### The Problem

You’ve learned:

* **GET** → read data
* **POST** → create data

Now a new requirement appears:

> What if we want to **update only part of existing data**?

Examples:

* Update only a user’s name
* Edit a blog post title (not the whole post)
* Mark a task as completed

Using POST for updates is:

* Semantically wrong
* Confusing in APIs

---

### The Solution

HTTP provides **PATCH**.

Key idea:

> **PATCH = partial update of an existing resource**

Next.js route handlers support PATCH cleanly.

---

## What Is a PATCH Request

### Definition

A **PATCH Route Handler** is:

* A server-side function
* Named `PATCH`
* Used to update **some fields**
* Usually targets a **specific resource**

Example endpoint:

```
PATCH /api/posts/123
```

---

### Analogy

Think of a form:

* POST → submit full form
* PATCH → edit one field

You don’t resend everything—only what changed.

---

### Visual / Line Diagram Explanation

```
Client
  ↓ PATCH /api/posts/123
Request Body (fields to update)
  ↓
route.ts (PATCH)
  ↓
Updated response
```

---

## Basic PATCH Route Handler

### Folder Structure

```
app/api/posts/[id]/route.ts
```

(We update a specific post.)

---

### PATCH Handler Example

```ts
// app/api/posts/[id]/route.ts

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const postId = params.id;
  const body = await request.json();

  return new Response(
    JSON.stringify({
      message: "Post updated",
      postId,
      updatedFields: body,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
```

---

### Test It

```ts
fetch("/api/posts/123", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Updated title",
  }),
});
```

Response:

```json
{
  "message": "Post updated",
  "postId": "123",
  "updatedFields": {
    "title": "Updated title"
  }
}
```

---

## PATCH vs POST (Very Important)

| Aspect          | POST       | PATCH             |
| --------------- | ---------- | ----------------- |
| Purpose         | Create     | Update            |
| Target          | Collection | Specific resource |
| Idempotent      | ❌          | ⚠️ (depends)      |
| Sends full data | Often      | No                |

Use **PATCH** when:

* Resource already exists
* Only some fields change

---

## PATCH With Validation

### Why Validation Matters

When updating:

* Fields may be optional
* You must check allowed updates

---

### Example Validation

```ts
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  if (!body.title && !body.content) {
    return new Response(
      JSON.stringify({
        error: "Nothing to update",
      }),
      { status: 400 }
    );
  }

  return new Response(
    JSON.stringify({
      message: "Post updated successfully",
      updates: body,
    }),
    { status: 200 }
  );
}
```

---

## Important Rules (Must Remember)

### Rule 1: PATCH Is for Partial Updates

* Do not replace full resource
* Update only provided fields

---

### Rule 2: PATCH Usually Requires an ID

Typical pattern:

```
PATCH /api/resource/:id
```

---

### Rule 3: Validate Allowed Fields

Never blindly update:

* Prevent unintended changes
* Avoid security issues

---

## Common Mistakes

### Mistake 1: Using POST for Updates

Technically possible, but **bad API design**.

---

### Mistake 2: Expecting PATCH to Be Always Idempotent

PATCH **may or may not** be idempotent.
Depends on logic.

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* DELETE request
* Authentication checks
* Database integration

Those are **next topics**.

---

## Real-Life Applications

PATCH is used for:

* Edit profile
* Update settings
* Modify post content
* Toggle flags

This is a **core REST operation**.

---

## Summary

* PATCH updates existing resources
* Used for partial updates
* Defined via `export async function PATCH`
* Works with dynamic routes
* Requires validation

---

## Next Topic (Continuing)

### **38 – DELETE Request in Route Handlers**

We will learn:

* Deleting resources safely
* Status codes
* Edge cases

When ready, say:

```
next
```

We continue step by step, same clarity.
