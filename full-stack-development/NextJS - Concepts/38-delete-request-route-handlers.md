Continuing **in sequence**.

Save this as:

```
topics/38-delete-request-route-handlers.md
```

---

# DELETE Request in Route Handlers (Next.js)

## Why DELETE Requests Exist

### The Problem

You already know:

* **GET** → read data
* **POST** → create data
* **PATCH** → update part of data

Now the final CRUD operation:

> **How do we remove data safely and correctly?**

Examples:

* Delete a blog post
* Remove a comment
* Delete a user account
* Clear a resource

Using GET or POST for deletion is:

* Dangerous
* Semantically wrong
* Confusing for APIs

---

### The Solution

HTTP provides a dedicated method:

> **DELETE = remove an existing resource**

Next.js route handlers support DELETE cleanly and safely.

---

## What Is a DELETE Request

### Definition

A **DELETE Route Handler** is:

* A server-side function
* Named `DELETE`
* Targets a **specific resource**
* Removes it from the system

Typical endpoint:

```
DELETE /api/posts/123
```

---

### Analogy

Think of a trash bin action:

* You select an item
* Click “Delete”
* Item is removed permanently

You are not editing or reading — you are **removing**.

---

### Visual / Line Diagram Explanation

```
Client
  ↓ DELETE /api/posts/123
route.ts (DELETE)
  ↓
Confirmation response
```

---

## Basic DELETE Route Handler

### Folder Structure

```
app/api/posts/[id]/route.ts
```

(Deletion always targets a specific resource.)

---

### DELETE Handler Example

```ts
// app/api/posts/[id]/route.ts

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const postId = params.id;

  return new Response(
    JSON.stringify({
      message: "Post deleted",
      postId,
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
  method: "DELETE",
});
```

Response:

```json
{
  "message": "Post deleted",
  "postId": "123"
}
```

---

## DELETE Status Codes (Very Important)

DELETE responses vary by situation.

| Situation            | Status Code    |
| -------------------- | -------------- |
| Deleted successfully | `200` or `204` |
| Resource not found   | `404`          |
| Unauthorized         | `401`          |
| Forbidden            | `403`          |
| Server error         | `500`          |

---

### Example: `204 No Content`

```ts
return new Response(null, { status: 204 });
```

Used when:

* Deletion succeeded
* No response body needed

---

## DELETE With Validation

### Why Validation Is Critical

DELETE is **dangerous**:

* Data loss is permanent
* Mistakes are costly

Always validate:

* Resource exists
* User is allowed to delete

---

### Example Validation

```ts
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const postId = params.id;

  if (!postId) {
    return new Response(
      JSON.stringify({ error: "Invalid post ID" }),
      { status: 400 }
    );
  }

  return new Response(
    JSON.stringify({
      message: "Post deleted safely",
    }),
    { status: 200 }
  );
}
```

---

## DELETE vs PATCH (Clear Difference)

| Aspect       | PATCH         | DELETE          |
| ------------ | ------------- | --------------- |
| Purpose      | Update fields | Remove resource |
| Data remains | Yes           | No              |
| Risk         | Medium        | High            |
| Reversible   | Sometimes     | Often No        |

---

## Important Rules (Must Remember)

### Rule 1: DELETE Must Be Explicit

* Always require an ID
* Never delete collections accidentally

Bad:

```
DELETE /api/posts
```

Good:

```
DELETE /api/posts/123
```

---

### Rule 2: DELETE Should Be Idempotent

Calling DELETE multiple times:

* Should not break system
* After first delete, resource is gone

---

### Rule 3: Do Not Send Body in DELETE (Usually)

* Use route params
* Some APIs allow body, but avoid it

---

## Common Mistakes

### Mistake 1: Using GET to Delete

This is extremely dangerous:

* Can be triggered by browser prefetch
* Violates HTTP semantics

---

### Mistake 2: No Confirmation Logic

In real apps:

* Always confirm deletion
* Soft delete when possible

(Soft delete is a DB concept — we’ll learn later.)

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* URL query parameters in depth
* Headers
* Cookies
* Authentication & authorization
* Database-level deletion

Those are next topics.

---

## Real-Life Applications

DELETE route handlers are used for:

* Removing posts
* Deleting comments
* Account deletion
* Admin moderation actions

This completes the **CRUD cycle**.

---

## Summary

* DELETE removes a resource
* Defined via `export async function DELETE`
* Usually targets a dynamic route
* Must be validated carefully
* Uses proper HTTP status codes

---

## Next Topic (Continuing)

### **39 – URL Query Parameters in Route Handlers**

We will learn:

* `searchParams`
* Filtering
* Pagination
* Sorting APIs

When ready, say:

```
next
```

We continue step by step, same clarity, no skipping.
