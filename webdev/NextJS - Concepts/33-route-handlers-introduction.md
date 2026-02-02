Perfect.
We **skip 31 & 32 for now** and **start directly from 33**, exactly as you asked.

Save this as:

```
topics/33-route-handlers-introduction.md
```

---

# Route Handlers in Next.js

## Why Route Handlers Exist

### The Problem

Until now, everything we built was **UI-based routing**:

* `page.tsx` → UI
* `layout.tsx` → UI shell
* `loading.tsx` / `error.tsx` → UI states

But real applications also need a **backend**:

Examples:

* Fetch blog posts
* Submit forms
* Authenticate users
* Update database
* Handle POST / PATCH / DELETE requests

In traditional React apps:

* You create a **separate backend**
* Express / Fastify / Nest
* Separate repo
* Separate deployment

This causes:

* More complexity
* Context switching
* Boilerplate

---

### The Solution

Next.js introduces **Route Handlers**.

Key idea:

> **Create backend API endpoints inside the same Next.js app**

Frontend + Backend → **single codebase**.

---

## What Are Route Handlers

### Definition

A **Route Handler** is a server-side function that:

* Handles HTTP requests (GET, POST, etc.)
* Returns data (JSON, text, etc.)
* Does **NOT** render UI
* Runs **only on the server**

File name:

```
route.ts
```

Location:

```
app/api/.../route.ts
```

---

### Analogy

Think of:

* `page.tsx` → Restaurant dining area (UI)
* `route.ts` → Kitchen (logic, data, processing)

Users:

* See the dining area
* Never see the kitchen
* But depend on it

---

### Visual / Line Diagram Explanation

```
Browser
   ↓
/api/posts
   ↓
route.ts (server)
   ↓
JSON response
```

No React rendering involved.

---

## How Route Handlers Work (High Level)

1. Client makes an HTTP request
2. Request hits `/api/...`
3. Next.js executes `route.ts`
4. Response is returned
5. No UI is rendered

This is **pure backend logic**.

---

## Folder Structure for Route Handlers

### Basic Structure

```
app/
└── api/
    └── posts/
        └── route.ts
```

This creates an API endpoint:

```
/api/posts
```

---

## Creating Your First Route Handler (GET)

### Step 1: Create the File

```
app/api/hello/route.ts
```

---

### Step 2: Write a GET Handler

```ts
// app/api/hello/route.ts

export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Hello from Route Handler",
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

### Step 3: Test It

Open browser:

```
http://localhost:3000/api/hello
```

Response:

```json
{
  "message": "Hello from Route Handler"
}
```

No page.
No UI.
Pure API.

---

## Important Rules (Must Remember)

### Rule 1: File Must Be Named `route.ts`

❌ `api.ts`
❌ `handler.ts`

✅ `route.ts`

---

### Rule 2: Route Handlers Are Server-Only

* Cannot use:

  * `useState`
  * `useEffect`
  * DOM APIs
* Can use:

  * Database calls
  * Secrets
  * Server libraries

They never run in the browser.

---

### Rule 3: HTTP Method = Function Name

| HTTP Method | Function                         |
| ----------- | -------------------------------- |
| GET         | `export async function GET()`    |
| POST        | `export async function POST()`   |
| PATCH       | `export async function PATCH()`  |
| DELETE      | `export async function DELETE()` |

We will cover each **one by one** next.

---

## Route Handlers vs Pages (Very Important)

| Aspect     | `page.tsx`      | `route.ts`  |
| ---------- | --------------- | ----------- |
| Purpose    | UI              | API         |
| Runs where | Server + Client | Server only |
| Returns    | JSX             | Response    |
| URL        | `/path`         | `/api/path` |

They solve **different problems**.

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* POST requests
* Request body
* Headers
* Cookies
* Auth
* Database access

Those are **next topics** and will build on this.

---

## Real-Life Applications

Route Handlers are used for:

* Fetching blog data
* Submitting forms
* Auth callbacks
* CRUD APIs
* Server-side logic

They replace the need for a separate backend in many apps.

---

## Summary

* Route Handlers = backend APIs in Next.js
* Defined using `route.ts`
* Live under `app/api`
* Server-only
* Handle HTTP requests
* Return `Response`

---

## Next Topic (Continuing From 33)

### **34 – GET Request in Route Handlers**

We will go deeper into:

* Request object
* Query params
* Dynamic routes in APIs

When ready, say:

```
next
```

We continue cleanly, step by step.
## Mini Project — Route Handlers in Next.js (Beginner-Safe)

This mini project is **only to make Route Handlers click in your head**.
No database. No auth. No complexity.

Goal:
UI page → calls API → API returns data → UI shows it.

---

## Mini Project Goal

Build a **Posts API + UI** inside the same Next.js app.

* `/api/posts` → backend (Route Handler)
* `/posts` → frontend page
* Page fetches data from API

This shows **why Route Handlers exist**.

---

## Folder Structure (Very Important)

```
app/
├── api/
│   └── posts/
│       └── route.ts
│
├── posts/
│   └── page.tsx
```

---

## Step 1 — Create the Route Handler (Backend)

### File

```
app/api/posts/route.ts
```

### Code (GET API)

```ts
// app/api/posts/route.ts

export async function GET() {
  const posts = [
    { id: 1, title: "Learn Next.js" },
    { id: 2, title: "Route Handlers Basics" },
    { id: 3, title: "App Router Deep Dive" },
  ];

  return Response.json(posts);
}
```

What this does:

* Runs on server only
* Returns JSON
* Creates API endpoint:

```
GET /api/posts
```

---

## Step 2 — Test the API (Very Important)

Open browser:

```
http://localhost:3000/api/posts
```

You should see:

```json
[
  { "id": 1, "title": "Learn Next.js" },
  { "id": 2, "title": "Route Handlers Basics" },
  { "id": 3, "title": "App Router Deep Dive" }
]
```

No UI.
Pure backend.

---

## Step 3 — Create UI Page (Frontend)

### File

```
app/posts/page.tsx
```

### Code

```tsx
export default async function Page() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Posts</h1>

      <ul className="mt-4 space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

What is happening:

* Page runs on server
* Calls your own API
* Reads JSON
* Renders UI

---

## Step 4 — How Data Flows (Mental Model)

```
Browser
  ↓
/posts (page.tsx)
  ↓ fetch()
/api/posts (route.ts)
  ↓
JSON data
  ↓
Rendered UI
```

Frontend and backend in **one project**.

---

## Why This Mini Project Is Important

This shows:

* Route Handlers are **backend**
* Pages are **frontend**
* Same codebase
* Same deployment
* Clean separation of concerns

---

## Very Important Rules (From This Project)

* `route.ts` never returns JSX
* `page.tsx` never handles HTTP methods
* `/api/*` is backend
* Normal routes are UI

---

## Common Beginner Mistakes (Avoid These)

* Putting UI inside `route.ts`
* Using `useState` in Route Handler
* Expecting `route.ts` to render a page
* Forgetting `app/api/...` path

---

## One-Line Summary

Route Handlers let you build backend APIs inside Next.js and consume them from your pages.

---

## What This Mini Project Prepares You For

Next topics become easy now:

* GET with params
* Dynamic API routes
* POST requests
* Form submission
* Auth APIs

---

When ready, say:

```
next
```

We move to **34 – GET Request in Route Handlers (Deep)**.
