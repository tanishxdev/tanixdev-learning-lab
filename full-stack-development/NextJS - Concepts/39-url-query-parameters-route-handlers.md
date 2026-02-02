Continuing **in sequence**.

Save this as:

```
topics/39-url-query-parameters-route-handlers.md
```

---

# URL Query Parameters in Route Handlers (Next.js)

## Why URL Query Parameters Exist

### The Problem

Dynamic routes (`/api/posts/123`) are great when:

* You target **one specific resource**

But many APIs need **flexible filtering**, such as:

* Search
* Pagination
* Sorting
* Flags (preview, draft, etc.)

Examples:

* `/api/posts?page=2`
* `/api/posts?search=nextjs`
* `/api/posts?sort=latest&limit=10`

You **cannot** model all of this using path segments.

---

### The Solution

HTTP provides **URL Query Parameters**.

Key idea:

> **Query parameters modify how data is fetched, not which resource it is**

Next.js route handlers give full access to them.

---

## What Are URL Query Parameters

### Definition

**Query parameters** are key–value pairs appended to a URL after `?`.

Example:

```
/api/posts?search=nextjs&page=1
```

Here:

* `search` → nextjs
* `page` → 1

They are **optional** and **combinable**.

---

### Analogy

Think of a search form:

* Resource → “posts”
* Filters → keyword, page number, sort order

You don’t change *what* you’re fetching, only *how*.

---

### Visual / Line Diagram Explanation

```
GET /api/posts?search=nextjs&page=2
               ↓
URLSearchParams
               ↓
Filtered response
```

---

## How to Read Query Parameters

### Core Tool: `URL` + `searchParams`

In route handlers, you receive a `Request`.

From it:

* You extract the full URL
* Then read `searchParams`

---

## Basic Example: Reading Query Params

`app/api/posts/route.ts`

```ts
export async function GET(request: Request) {
  const url = new URL(request.url);

  const search = url.searchParams.get("search");
  const page = url.searchParams.get("page");

  return new Response(
    JSON.stringify({
      search,
      page,
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
/api/posts?search=nextjs&page=2
```

Response:

```json
{
  "search": "nextjs",
  "page": "2"
}
```

Important:

* Values are **strings**
* You must parse numbers manually if needed

---

## Handling Missing Query Params

Query parameters are **optional**.

So always handle `null`.

```ts
const page = url.searchParams.get("page") ?? "1";
const limit = url.searchParams.get("limit") ?? "10";
```

This prevents crashes.

---

## Pagination Example (Realistic)

```ts
export async function GET(request: Request) {
  const url = new URL(request.url);

  const page = Number(url.searchParams.get("page") ?? 1);
  const limit = Number(url.searchParams.get("limit") ?? 10);

  return new Response(
    JSON.stringify({
      page,
      limit,
      message: "Paginated posts",
    }),
    { status: 200 }
  );
}
```

---

## Combining Query Params with Dynamic Routes

You can mix:

* Route params
* Query params

### Example URL

```
/api/posts/123?preview=true
```

---

### Code

```ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const url = new URL(request.url);
  const preview = url.searchParams.get("preview");

  return new Response(
    JSON.stringify({
      postId: params.id,
      preview,
    }),
    { status: 200 }
  );
}
```

---

## Multiple Query Values

### URL

```
/api/posts?tag=react&tag=nextjs
```

---

### Code

```ts
const tags = url.searchParams.getAll("tag");
```

Result:

```ts
["react", "nextjs"]
```

Useful for:

* Filters
* Categories
* Facets

---

## Important Rules (Must Remember)

### Rule 1: Query Params Are Always Strings

* Convert to number / boolean manually
* Never assume types

---

### Rule 2: Query Params Are Optional

* Always handle `null`
* Provide defaults

---

### Rule 3: Query Params Do NOT Define the Route

* `/api/posts?x=1`
* `/api/posts?x=2`

Both hit **the same route handler**.

---

## Common Mistakes

### Mistake 1: Using Query Params for Identity

Bad:

```
/api/posts?id=123
```

Good:

```
/api/posts/123
```

Use:

* Path params → identity
* Query params → filtering/behavior

---

### Mistake 2: Not Validating Query Params

Always:

* Parse numbers
* Validate ranges
* Sanitize inputs

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* Headers in detail
* Cookies
* Auth
* Caching

Those are next topics.

---

## Real-Life Applications

Query parameters are used for:

* Search APIs
* Pagination
* Sorting
* Filters
* Feature flags

Almost every API uses them.

---

## Summary

* Query params modify request behavior
* Read using `URL` + `searchParams`
* Always strings
* Optional and flexible
* Combine with dynamic routes safely

---

## Next Topic (Continuing)

### **40 – Headers in Route Handlers**

We will learn:

* Reading request headers
* Setting response headers
* Common header use cases

When ready, say:

```
next
```

We continue step by step, same clarity, no skipping.
