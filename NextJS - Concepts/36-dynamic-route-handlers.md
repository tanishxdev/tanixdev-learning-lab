Good. Continuing **in sequence**.

Save this as:

```
topics/36-dynamic-route-handlers.md
```

---

# Dynamic Route Handlers in Next.js

## Why Dynamic Route Handlers Exist

### The Problem

So far, your API routes were **static**:

* `/api/posts`
* `/api/hello`

But real APIs are **resource-based**.

Examples:

* Get a specific post → `/api/posts/123`
* Update a user → `/api/users/42`
* Delete a comment → `/api/comments/9`

You **cannot** create a new file for every ID.

We need:

* Flexible routes
* One handler for many IDs

---

### The Solution

Next.js supports **Dynamic Route Handlers** using **dynamic segments**.

Key idea:

> **Just like dynamic pages (`[slug]`), APIs can also be dynamic**

---

## What Are Dynamic Route Handlers

### Definition

A **Dynamic Route Handler** is an API route where:

* Part of the URL is dynamic
* The value is captured using `[param]`
* The value is available via `context.params`

Folder example:

```
app/api/posts/[id]/route.ts
```

---

### Analogy

Think of a REST API counter:

* `/posts/1`
* `/posts/2`
* `/posts/99`

Same counter.
Different ticket numbers.

---

### Visual / Line Diagram Explanation

```
Request: /api/posts/42
                ↓
[id] = "42"
                ↓
route.ts handles it
```

---

## Folder Structure (Very Important)

### Static vs Dynamic

```
app/api/posts/route.ts         → /api/posts
app/api/posts/[id]/route.ts    → /api/posts/:id
```

Same as UI routing rules.

---

## Accessing Route Params

### Basic Example (GET)

`app/api/posts/[id]/route.ts`

```ts
export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const postId = context.params.id;

  return new Response(
    JSON.stringify({
      postId,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
```

---

### Test It

```
/api/posts/123
```

Response:

```json
{
  "postId": "123"
}
```

---

## Combining Multiple HTTP Methods

One dynamic route can handle **multiple methods**.

```ts
// app/api/posts/[id]/route.ts

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  return new Response(
    JSON.stringify({ action: "get", id: params.id }),
    { status: 200 }
  );
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  return new Response(
    JSON.stringify({
      action: "post",
      id: params.id,
      data: body,
    }),
    { status: 201 }
  );
}
```

---

## Nested Dynamic API Routes

### Folder Structure

```
app/api/posts/[postId]/comments/[commentId]/route.ts
```

URL:

```
/api/posts/10/comments/5
```

---

### Accessing Multiple Params

```ts
export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      postId: string;
      commentId: string;
    };
  }
) {
  return new Response(
    JSON.stringify({
      postId: params.postId,
      commentId: params.commentId,
    }),
    { status: 200 }
  );
}
```

---

## Dynamic Routes + Query Parameters

You can combine:

* Route params
* Query params

Example URL:

```
/api/posts/10?preview=true
```

Code:

```ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const url = new URL(request.url);
  const preview = url.searchParams.get("preview");

  return new Response(
    JSON.stringify({
      id: params.id,
      preview,
    }),
    { status: 200 }
  );
}
```

---

## Important Rules (Must Remember)

### Rule 1: Param Names Must Match Folder Names

```
[postId] → params.postId
```

Mismatch = undefined.

---

### Rule 2: Dynamic Routes Are Server-Only

* Params are resolved on the server
* Safe for secrets
* Safe for DB queries

---

### Rule 3: Prefer RESTful Structure

Good:

```
/api/posts/1/comments
```

Bad:

```
/api/getPostComments?id=1
```

---

## Common Mistakes

### Mistake 1: Expecting Params in GET Body

GET requests:

* Do NOT have a body
* Use params or query string

---

### Mistake 2: Forgetting Nested Folder Structure

Wrong:

```
posts/[id]/comments.ts
```

Correct:

```
posts/[id]/comments/route.ts
```

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* PATCH request
* DELETE request
* Headers
* Cookies
* Auth

Those are **next topics**.

---

## Real-Life Applications

Dynamic route handlers are used for:

* CRUD APIs
* User profiles
* Comment systems
* REST-style backends

This is the **core of backend design**.

---

## Summary

* Dynamic route handlers use `[param]`
* Params available via `context.params`
* Works for GET, POST, etc.
* Supports nested structures
* REST-friendly and scalable

---

## Next Topic (Continuing)

### **37 – PATCH Request in Route Handlers**

We will learn:

* Updating data
* Partial updates
* REST semantics

When ready, say:

```
next
```

We continue step by step.
