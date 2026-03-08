Good. Continuing **in sequence**.

Save this as:

```
topics/35-post-request-route-handlers.md
```

---

# POST Request in Route Handlers (Next.js)

## Why POST Requests Exist

### The Problem

So far, with **GET** requests, we only **read data**.

But real applications must also **create data**:

* Submit a form
* Create a blog post
* Register a user
* Send feedback

GET is **not designed** for this.

Problems if we misuse GET:

* Data sent in URL (unsafe)
* Length limits
* Security issues
* Semantics break

---

### The Solution

HTTP provides **POST** for sending data to the server.

Key idea:

> **POST = send data from client → server to create something**

Next.js route handlers support POST natively.

---

## What Is a POST Request (Here)

### Definition

A **POST Route Handler** is:

* A server-side function
* Named `POST`
* Receives data in the **request body**
* Returns a `Response`

File example:

```
app/api/posts/route.ts
```

---

### Analogy

Think of POST like:

* Filling a form
* Submitting it
* Server processes and stores the data

You are **sending**, not requesting.

---

### Visual / Line Diagram Explanation

```
Client
  ↓ POST /api/posts
Request Body (JSON)
  ↓
route.ts (POST)
  ↓
Response (success / error)
```

---

## Basic POST Route Handler

### Step 1: Create Route (Same as GET)

```
app/api/posts/route.ts
```

(One file can handle multiple HTTP methods.)

---

### Step 2: Write POST Handler

```ts
// app/api/posts/route.ts

export async function POST(request: Request) {
  const body = await request.json();

  return new Response(
    JSON.stringify({
      message: "Post created",
      data: body,
    }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
```

---

### Step 3: What Is Happening (Line by Line)

```ts
const body = await request.json();
```

* Reads request body
* Parses JSON
* Returns a JS object

```ts
status: 201
```

* HTTP standard for **resource created**

---

## Testing POST Request

### Using Browser (Not Ideal)

Browser can only do GET easily.
For POST, use one of these:

* Thunder Client (VS Code)
* Postman
* curl

---

### Example Using `fetch` (Client-side)

```ts
fetch("/api/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "My first post",
    content: "Hello Next.js",
  }),
});
```

Response:

```json
{
  "message": "Post created",
  "data": {
    "title": "My first post",
    "content": "Hello Next.js"
  }
}
```

---

## POST With Validation (Very Important)

### Why Validation Is Needed

Never trust client data.

Problems:

* Missing fields
* Wrong types
* Malicious input

---

### Simple Validation Example

```ts
export async function POST(request: Request) {
  const body = await request.json();
  const { title, content } = body;

  if (!title || !content) {
    return new Response(
      JSON.stringify({
        error: "Title and content are required",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return new Response(
    JSON.stringify({
      message: "Post created successfully",
    }),
    { status: 201 }
  );
}
```

---

## POST With Dynamic Routes

### Folder Structure

```
app/api/posts/[id]/route.ts
```

---

### Example

```ts
export async function POST(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const body = await request.json();

  return new Response(
    JSON.stringify({
      postId: id,
      data: body,
    }),
    { status: 201 }
  );
}
```

Used for:

* Comments on a post
* Sub-resources

---

## Important Rules (Must Remember)

### Rule 1: POST Is NOT Idempotent

* Calling twice may create two records
* Unlike GET

---

### Rule 2: Always Parse Body Safely

* Use `await request.json()`
* Validate fields
* Handle missing data

---

### Rule 3: Use Correct Status Codes

| Action         | Status |
| -------------- | ------ |
| Success create | `201`  |
| Bad input      | `400`  |
| Unauthorized   | `401`  |
| Server error   | `500`  |

---

## Common Mistakes

### Mistake 1: Forgetting `await`

❌ Wrong:

```ts
const body = request.json();
```

✅ Correct:

```ts
const body = await request.json();
```

---

### Mistake 2: Trusting Client Data

Never assume fields exist or are valid.

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* PATCH requests
* DELETE requests
* Database integration
* Auth checks

Those are next topics.

---

## Real-Life Applications

POST route handlers are used for:

* Form submissions
* User registration
* Creating records
* Sending messages

This is the backbone of backend APIs.

---

## Summary

* POST is used to create data
* Data comes via request body
* Use `request.json()`
* Validate input
* Return proper status codes
* Runs server-side only

---

## Next Topic (Continuing)

### **36 – Dynamic Route Handlers**

We will learn:

* REST-style APIs
* Nested API routes
* Combining GET + POST + params

When ready, say:

```
next
```

We continue step by step.
