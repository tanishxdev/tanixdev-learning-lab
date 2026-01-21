# Catch-all Segments in Next.js

## Why Catch-all Segments Exist

### The Problem

Dynamic routes handle **one segment** well:

* `/blog/[slug]` → `/blog/hello`
* `/blog/[slug]/comments` → `/blog/hello/comments`

But some URLs have **unknown or variable depth**.

Examples:

* `/docs`
* `/docs/getting-started`
* `/docs/getting-started/installation`
* `/docs/api/reference/auth`

You **cannot predict** how many segments will come.

Creating folders for every possible depth is impossible.

---

### The Solution

Next.js provides **catch-all segments**.

Key idea:

> **`[...param]` captures multiple URL segments as an array**

One route can handle:

* 0 segments
* 1 segment
* Many segments

---

## What is a Catch-all Segment

### Definition

A **catch-all segment** is a dynamic route that captures **all remaining parts of the URL** into an array.

Syntax:

```
[...param]
```

---

### Analogy

Think of a **vacuum cleaner** 🧹 (conceptually):

* It doesn’t care how much dust there is
* It just collects **everything in its path**

Similarly:

```
[...slug] → catches everything after that point
```

---

### Visual / Line Diagram Explanation

```
app/
└── docs/
    └── [...slug]/
        └── page.tsx
```

Matches all of these:

```
/docs
/docs/intro
/docs/intro/setup
/docs/api/reference/auth
```

---

## How Catch-all Routing Works (High Level)

1. Next.js sees `[...slug]`
2. It captures **all remaining URL segments**
3. It passes them as an **array** to the page via `params`
4. You decide what to do with them

---

## Creating a Catch-all Route

### Step 1: Folder Structure

Create:

```
app/docs/[...slug]/page.tsx
```

Important:

* Use **three dots** `...`
* Name can be anything (`slug`, `segments`, `path`)

---

### Step 2: Page Code (Follow Your CSS Pattern)

```tsx
export default function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold text-primary">
        Docs Page
      </h1>

      <p className="mt-2 text-accent">
        Path segments:
      </p>

      <pre className="mt-2 text-sm text-foreground">
        {JSON.stringify(params.slug, null, 2)}
      </pre>
    </div>
  );
}
```

---

### Step 3: Test URLs

Visit:

* `/docs`
* `/docs/getting-started`
* `/docs/getting-started/setup`

Result:

* `params.slug` becomes:

  * `undefined` → `/docs`
  * `["getting-started"]`
  * `["getting-started", "setup"]`

---

## Important Rules (Very Important)

### Rule 1: Catch-all Params Are Arrays

```ts
params.slug // string[]
```

Even if there is only **one segment**, it’s still an array.

---

### Rule 2: Order Matters

```
docs/[...slug] → works
[...slug]/docs → different meaning
```

Folder placement defines URL meaning.

---

### Rule 3: Catch-all Must Be the Last Segment

❌ Invalid:

```
[...slug]/comments
```

✅ Valid:

```
comments/[...slug]
```

Catch-all always comes **at the end**.

---

## Catch-all vs Dynamic Routes (Quick Comparison)

| Feature                   | `[slug]` | `[...slug]` |
| ------------------------- | -------- | ----------- |
| Matches one segment       | ✅        | ❌           |
| Matches multiple segments | ❌        | ✅           |
| Params type               | string   | string[]    |

---

## What We Are NOT Doing Yet

We are **NOT covering yet**:

* Optional catch-all (`[[...slug]]`)
* Data fetching from these params
* SEO metadata for docs

These are **future topics** and will be introduced explicitly.

---

## Real-Life Applications

Catch-all routes are used for:

* Documentation sites
* File explorers
* CMS-driven pages
* Knowledge bases

Examples:

```
/docs/react/hooks/useEffect
/help/account/security/password
```

---

## Summary

* Catch-all segments handle **unknown URL depth**
* Defined using `[...param]`
* Captures segments as an array
* Extremely useful for docs and CMS pages
* Must be the **last route segment**

---

## Catch-all Route `...slug` (Working Explained Simply)

Good — now we talk only about **how `...slug` works**, nothing extra.

---

### 1. What `...slug` Means

Folder:

```
app/docs/[...slug]/page.tsx
```

This means:

* It can catch **ONE or MANY** URL segments
* Everything after `/docs/` is collected

Examples:

```
/docs/a                → slug = ["a"]
/docs/a/b              → slug = ["a", "b"]
/docs/a/b/c            → slug = ["a", "b", "c"]
```

Important:

```
slug is ALWAYS an array
```

---

### 2. Page Code (Correct + Simple)

```tsx
type PageProps = {
  params: {
    slug: string[];
  };
};

export default function Page({ params }: PageProps) {
  return (
    <div>
      <h1>Docs Page</h1>
      <p>Slug path: {params.slug.join(" / ")}</p>
    </div>
  );
}
```

Key point:

```
params.slug → string[]
```

Not a string.

---

### 3. Why Array? (Very Important)

Because:

```
/docs/a/b/c
```

is actually:

```
["a", "b", "c"]
```

Next.js preserves **each URL level** separately.

---

### 4. If You Hit Only `/docs`

This will **NOT work** with `[...slug]`.

Reason:

* At least **one segment is required**

So:

```
/docs        ❌
/docs/a      ✅
```

---

### 5. Optional Catch-all (Extra clarity)

If you want `/docs` ALSO to work:

```
app/docs/[[...slug]]/page.tsx
```

Then:

```
/docs        → slug = undefined
/docs/a      → slug = ["a"]
```

Code check:

```tsx
const slug = params.slug ?? [];
```

---

### 6. Mental Model (Remember This)

```
[slug]        → one value (string)
[...slug]     → many values (string[])
[[...slug]]   → zero or many
```

---

### 7. Common Beginner Mistakes

* Treating `slug` as string in `...slug`
* Forgetting `.join()`
* Using `[...slug]` when only one param is needed

---

### 8. One-Line Summary

`...slug` collects multiple URL segments into an array.
