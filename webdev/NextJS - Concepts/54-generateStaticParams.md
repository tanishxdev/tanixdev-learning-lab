Continuing **strictly in sequence**.

Save this as:

```
topics/54-generateStaticParams.md
```

---

# generateStaticParams in Next.js

## Why This Topic Exists

### The Problem

You already learned:

* **Static Rendering** → build-time HTML
* **Dynamic Rendering** → request-time HTML
* **Dynamic Routes** → routes like `/blog/[slug]`

Now a **natural conflict** appears:

> Dynamic routes need params at request time
> Static rendering needs data at build time

Example problem:

```
/blog/react-basics
/blog/nextjs-routing
/blog/server-components
```

Questions:

* How does Next.js know **which slugs exist** at build time?
* How can a **dynamic route** still be **statically rendered**?
* Do we lose static benefits for dynamic routes?

---

### The Solution

Next.js provides **`generateStaticParams`**.

Key idea:

> **Tell Next.js all possible dynamic route values at build time.**

This allows:

* Dynamic routes
* Static rendering
* Best of both worlds

---

## What Is `generateStaticParams`

### Definition

`generateStaticParams` is a function that:

> **Returns all possible route parameters so Next.js can pre-render pages at build time.**

It is used **only with dynamic routes**.

---

### Analogy

Think of printing books:

* You must know all chapter names **before printing**
* You cannot guess later

`generateStaticParams` is that **chapter list**.

---

### Visual / Line Diagram Explanation

```
Build Time
  ↓
generateStaticParams runs
  ↓
List of params returned
  ↓
Next.js renders one page per param
```

No request involved.

---

## Where `generateStaticParams` Is Used

### Dynamic Route Structure

Example:

```
src/app/blog/[slug]/page.tsx
```

Here:

* `[slug]` is dynamic
* Next.js needs all possible `slug` values

This is where `generateStaticParams` fits.

---

## Basic Example

### File Structure

```
src/app/blog/[slug]/page.tsx
```

---

### Code Example

```tsx
export async function generateStaticParams() {
  return [
    { slug: "react-basics" },
    { slug: "nextjs-routing" },
    { slug: "server-components" },
  ];
}

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  return <h1>Blog: {params.slug}</h1>;
}
```

---

### What Happens Internally

At **build time**:

1. `generateStaticParams()` runs
2. Next.js gets:

   ```
   react-basics
   nextjs-routing
   server-components
   ```
3. Pages generated:

   ```
   /blog/react-basics
   /blog/nextjs-routing
   /blog/server-components
   ```
4. HTML saved and reused

---

## Important Rules (Must Remember)

### Rule 1: Build-Time Only

* `generateStaticParams` runs **only at build time**
* Never runs on requests

---

### Rule 2: Server-Only

* Runs on the server
* Can safely access:

  * Databases
  * Filesystem
  * APIs
  * Secrets

---

### Rule 3: Required for Static Dynamic Routes

If:

* Route is dynamic
* You want static rendering

Then:

> `generateStaticParams` is mandatory

---

## Realistic Example (Blog from Data)

### Example Data Source

```ts
const posts = [
  { slug: "react-basics", title: "React Basics" },
  { slug: "nextjs-routing", title: "Next.js Routing" },
];
```

---

### Code

```tsx
export async function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find(p => p.slug === params.slug);

  return <h1>{post?.title}</h1>;
}
```

Each blog page becomes:

* Static
* SEO-friendly
* Fast

---

## generateStaticParams vs Dynamic Rendering

| Feature            | generateStaticParams | Dynamic Rendering |
| ------------------ | -------------------- | ----------------- |
| Render time        | Build time           | Request time      |
| Routes known ahead | ✅                    | ❌                 |
| Performance        | Excellent            | Slower            |
| Best for           | Blogs, docs          | Dashboards        |

---

## What Happens If a Param Is Missing

Example:

* Only `react-basics` exists
* User visits `/blog/unknown`

By default:

* 404 is shown

We will learn **dynamicParams** next to control this behavior.

---

## Common Misunderstandings

### Misunderstanding 1: “Dynamic routes can’t be static”

❌ Wrong
They can — with `generateStaticParams`.

---

### Misunderstanding 2: “generateStaticParams runs on every request”

❌ Wrong
Build-time only.

---

### Misunderstanding 3: “Client Components can use it”

❌ Wrong
Server-only function.

---

## What We Are NOT Covering Yet

Not covered yet:

* Fallback behavior
* On-demand pages
* Mixed static + dynamic routing

That comes **next topic**.

---

## Summary

* `generateStaticParams` enables static rendering for dynamic routes
* Runs at build time
* Returns all valid route params
* Generates one HTML page per param
* Essential for blogs, docs, content sites

---

## Next Topic (Strict Order)

### **55 – dynamicParams**

We will learn:

* What happens when params are missing
* Fallback vs 404 behavior
* Controlling dynamic route behavior

When ready, say:

```
next
```

Continuing step by step, no skips.
