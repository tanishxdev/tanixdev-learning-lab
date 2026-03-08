# Nested Dynamic Routes in Next.js

## Why Nested Dynamic Routes Exist

### The Problem

We already learned:

* **Nested routes** → `/blog/post`
* **Dynamic routes** → `/blog/[slug]`

But real applications often need **both together**.

Examples:

* `/blog/nextjs/comments`
* `/blog/react/author`
* `/product/iphone-15/reviews`
* `/user/tanish/settings`

Here:

* One part of the URL is **dynamic**
* Another part is **fixed or further nested**

Using only flat dynamic routes is not enough.

---

### The Solution

Next.js allows **dynamic routes inside nested folders**.

Key idea:

> **Dynamic folders can be nested just like normal folders**

Static + Dynamic + Nested
→ all work together naturally.

---

## What are Nested Dynamic Routes

### Definition

A **nested dynamic route** is a route where:

* One URL segment is dynamic
* And it contains **child routes inside it**

---

### Analogy

Think of a **file system with variables**:

```
Blog/
└── {post-name}/
    └── Comments.txt
```

You don’t know the post name beforehand,
but **every post has comments**.

---

### Visual / Line Diagram Explanation

```
app/
└── blog/
    └── [slug]/
        ├── page.tsx              → /blog/[slug]
        └── comments/
            └── page.tsx          → /blog/[slug]/comments
```

---

## How Nested Dynamic Routing Works (High Level)

1. Next.js matches folders from left to right
2. Static segments are matched first
3. Dynamic segments capture values
4. Nested folders extend the URL
5. All dynamic values are passed via `params`

---

## Creating a Nested Dynamic Route

### Step 1: Folder Structure

Create:

```
app/blog/[slug]/comments/page.tsx
```

Important:

* `[slug]` is dynamic
* `comments` is static
* Order matters

---

### Step 2: Page Code (Follow Your CSS Pattern)

```tsx
export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold text-primary">
        Blog Comments Page
      </h1>

      <p className="mt-2 text-accent">
        Comments for blog: {params.slug}
      </p>
    </div>
  );
}
```

---

### Step 3: Test URLs

Visit:

* `/blog/nextjs/comments`
* `/blog/hello-world/comments`
* `/blog/123/comments`

All will work using **one file**.

---

## Multiple Nested Dynamic Examples

```
app/
└── product/
    └── [id]/
        ├── page.tsx               → /product/[id]
        ├── reviews/
        │   └── page.tsx           → /product/[id]/reviews
        └── specs/
            └── page.tsx           → /product/[id]/specs
```

---

## Important Rules (Very Important)

### Rule 1: Parent Dynamic Folder Must Exist

❌ Invalid:

```
/blog/nextjs/comments
(no [slug] folder)
```

✅ Valid:

```
blog/[slug]/comments/page.tsx
```

---

### Rule 2: All Parent Params Are Available

In:

```
/blog/[slug]/comments
```

You can access:

```ts
params.slug
```

(Child routes inherit parent params.)

---

### Rule 3: Static + Dynamic Order Matters

```
blog/[slug]/comments → valid
blog/comments/[slug] → different route
```

Folder position defines URL meaning.

---

## What We Are NOT Doing Yet

We are **NOT covering yet**:

* Multiple dynamic params
* Catch-all routes
* Data fetching based on params

These are **explicit next topics** in your list.

---

## Real-Life Applications

Nested dynamic routes are used for:

* Blog posts → comments, likes, shares
* Products → reviews, specs
* Users → settings, activity

Example:

```
/user/tanish/settings
/product/iphone-15/reviews
```

---

## Summary

* Nested dynamic routes combine **nesting + variables**
* Use `[param]` folders inside other folders
* Static children extend dynamic parents
* All dynamic values are available via `params`
* Clean and scalable for real apps

---