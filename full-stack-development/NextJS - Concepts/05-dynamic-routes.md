Good. We continue **exactly in order**.

Save this as:

```
topics/05-dynamic-routes.md
```

---

# Dynamic Routes in Next.js

## Why Dynamic Routes Exist

### The Problem (Static Routes Are Not Enough)

So far, our routes are **fixed**:

* `/blog`
* `/blog/post`

But real applications deal with **variable data**.

Examples:

* `/blog/1`
* `/blog/42`
* `/blog/hello-world`
* `/user/tanish`
* `/product/iphone-15`

Creating a separate folder for each value is **impossible**.

---

### The Solution (Dynamic Routes)

Next.js solves this using **dynamic route segments**.

Key idea:

> **Square brackets `[]` represent a variable part of the URL**

---

## What is a Dynamic Route

### Definition

A **dynamic route** is a route where **part of the URL is variable**, and its value is captured by Next.js.

---

### Analogy

Think of a **form placeholder**:

```
Hello, {name}
```

`{name}` can change every time.

Similarly:

```
/blog/{slug}
```

Where `slug` can be:

* `1`
* `hello-world`
* `nextjs-routing`

---

### Visual / Line Diagram Explanation

```
app/
└── blog/
    └── [slug]/
        └── page.tsx
```

Maps to:

```
/blog/anything
```

Examples:

* `/blog/1`
* `/blog/my-first-post`
* `/blog/nextjs-routing`

All handled by **one file**.

---

## How Dynamic Routing Works (High Level)

1. Next.js sees a folder with `[name]`
2. It understands this part is **dynamic**
3. Whatever comes in the URL is captured
4. The value is passed to the page as `params`

We will **use `params` lightly here**
(deep usage comes later in the syllabus).

---

## Creating Your First Dynamic Route

### Step 1: Folder Structure

Create:

```
app/blog/[slug]/page.tsx
```

Important:

* Folder name **must be inside square brackets**
* Name can be anything (`slug`, `id`, `postId`)

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
        Dynamic Blog Page
      </h1>

      <p className="mt-2 text-accent">
        Blog slug: {params.slug}
      </p>
    </div>
  );
}
```

---

### Step 3: Test URLs

Visit:

* `/blog/hello`
* `/blog/nextjs`
* `/blog/123`

Each will:

* Load the same page
* Show different `slug` value

---

## Important Rules (Must Remember)

### Rule 1: Square Brackets Mean Dynamic

```
[slug] → dynamic
blog   → static
```

---

### Rule 2: Dynamic Routes Catch One Segment Only

```
/blog/hello → OK
/blog/hello/world → NOT handled here
```

(Multi-level dynamic routing comes later.)

---

### Rule 3: Name Inside Brackets Is Just a Variable Name

All are valid:

```
[id]
[slug]
[postId]
```

Choose meaningful names.

---

## What We Are NOT Doing Yet

We are **NOT yet covering**:

* Data fetching
* Database calls
* SEO metadata
* generateStaticParams

If you see `params` here:

* Just treat it as **input from the URL**
* Deep usage comes later (explicit topic already in your list)

---

## Real-Life Applications

Dynamic routes are used for:

* Blog posts
* Product pages
* User profiles
* Documentation pages

Examples:

```
/product/iphone-15
/user/tanish
/blog/nextjs-routing
```

---

## Summary

* Dynamic routes handle **variable URLs**
* Created using `[name]` folders
* One file handles infinite URLs
* URL value is accessible via `params`
* Clean, scalable, and powerful


## Dynamic Route `params` in Next.js (Simple + Correct)

You are right to question this.
The **logic is simple**, only the **TypeScript syntax makes it look complex**.
Let me re-teach this **slowly, cleanly, and in your format**.

---

### 1. Core Concept (No TypeScript yet)

You created this folder:

```
app/blog/[slug]/page.tsx
```

Meaning:

* `[slug]` = dynamic part of URL
* Next.js **automatically extracts it** and gives it to your page

Example:

```
URL → /blog/hello-world
slug → "hello-world"
```

Next.js sends it like this:

```
params = { slug: "hello-world" }
```

That is the **entire concept**.

---

### 2. What `params` Really Is

Think like this:

```
params = {
  slug: value-from-url
}
```

So accessing it:

```
params.slug
```

Nothing more.

---

### 3. Why This Line Looks Scary

```ts
export default function Page({ params }: { params: { slug: string } })
```

This part is **ONLY for TypeScript**, not routing:

```
: { params: { slug: string } }
```

It is just saying:

> params exists
> params has a key called slug
> slug is a string

No logic. No routing. Only type safety.

---

### 4. Simplest Learning Version (Best for Now)

If you want **maximum clarity**, write this:

```tsx
export default function Page({ params }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Dynamic Blog Page</h1>
      <p>Blog slug: {params.slug}</p>
    </div>
  );
}
```

This is **100% valid Next.js**.

Use this while learning routing.

---

### 5. Clean TypeScript Version (Readable)

Instead of inline types, separate them:

```tsx
type PageProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: PageProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Dynamic Blog Page</h1>
      <p>Blog slug: {params.slug}</p>
    </div>
  );
}
```

Why this is better:

* Easier to read
* Easier to modify later
* Interview-friendly
* No mental overload

---

### 6. Mental Model (Very Important)

Always remember only this:

```
Folder name inside [] → key in params
```

Examples:

```
app/blog/[slug]   → params.slug
app/user/[id]     → params.id
app/post/[year]   → params.year
```

That’s it.

---

### 7. What You Should NOT Overthink

Do not worry about:

* destructuring syntax
* TypeScript shapes
* nested braces

Focus only on:

```
URL → folder → params → value
```

---

### 8. Final One-Line Summary

Dynamic route folder name becomes a property inside `params`.

---