Good. Continuing **from 33 → 34**, same depth, same clarity.

Save this as:

```
topics/34-get-request-route-handlers.md
```

---

# GET Request in Route Handlers (Next.js)

## Why GET Requests Exist

### The Problem

Most of the time, the frontend needs to **read data**:

* Fetch blog posts
* Get a single post
* Load user profile
* Search results

This is **read-only** data access.

In HTTP, the standard way to **read data** is:

> **GET request**

So Next.js route handlers must support clean, predictable GET handling.

---

### The Solution

Next.js allows you to define a **GET function** inside `route.ts`.

Key idea:

> **The function name itself represents the HTTP method**

No router.
No switch-case.
No framework boilerplate.

---

## What Is a GET Request (In This Context)

### Definition

A **GET Route Handler** is:

* A server-side function
* Named `GET`
* Triggered when a GET request hits the route
* Returns a `Response`

File example:

```
app/api/posts/route.ts
```

---

### Analogy

Think of a GET request like:

* Asking a librarian:
  “Give me the list of books”
* You **do not modify anything**
* You only **read**

---

### Visual / Line Diagram Explanation

```
Browser / Frontend
      ↓  GET /api/posts
Next.js Route Handler
      ↓
export async function GET()
      ↓
JSON Response
```

---

## Basic GET Route Handler

### Step 1: Create Route

```
app/api/posts/route.ts
```

---

### Step 2: Simple GET Handler

```ts
// app/api/posts/route.ts

export async function GET() {
  return new Response(
    JSON.stringify({
      posts: ["Post 1", "Post 2", "Post 3"],
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

### Step 3: Test

Open:

```
http://localhost:3000/api/posts
```

Output:

```json
{
  "posts": ["Post 1", "Post 2", "Post 3"]
}
```

---

## Understanding the `Request` Object

### Why We Need It

Real GET requests often include:

* Query parameters
* Headers
* URL info

So Next.js provides a `Request` object.

---

### GET With Request Parameter

```ts
export async function GET(request: Request) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");

  return new Response(
    JSON.stringify({
      query: search,
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
/api/posts?search=nextjs
```

Response:

```json
{
  "query": "nextjs"
}
```

---

## GET With Route Params (Dynamic API Routes)

### Folder Structure

```
app/api/posts/[id]/route.ts
```

---

### GET Handler With Params

```ts
// app/api/posts/[id]/route.ts

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

## Important Rules (Must Remember)

### Rule 1: GET Must Be Idempotent

* GET should **not modify data**
* No database writes
* No side effects

Read-only.

---

### Rule 2: Return a `Response`

* You must return a `Response` object
* Not JSX
* Not plain object

---

### Rule 3: Use Standard Web APIs

Route handlers use:

* `Request`
* `Response`
* `URL`

These are **standard Web APIs**, not Next.js-specific magic.

---

## Common Mistakes

### Mistake 1: Returning Plain Object

❌ Wrong:

```ts
return { message: "Hello" };
```

✅ Correct:

```ts
return new Response(JSON.stringify({ message: "Hello" }));
```

---

### Mistake 2: Using React APIs

❌ Not allowed:

* `useState`
* `useEffect`
* JSX

Route handlers are **not React components**.

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* POST body parsing
* Headers in detail
* Cookies
* Authentication
* Database queries

Those are **next topics**.

---

## Real-Life Applications

GET route handlers are used for:

* Fetching lists
* Fetching details
* Search endpoints
* Read-only APIs

Every backend starts here.

---

## Summary

* GET is for reading data
* Defined using `export async function GET`
* Runs only on server
* Can read query params
* Can read route params
* Returns `Response`

---

## Next Topic (Continuing)

### **35 – POST Request in Route Handlers**

We will learn:

* Request body
* JSON parsing
* Creating data safely

When ready, say:

```
next
```

We continue step by step, no skipping.
