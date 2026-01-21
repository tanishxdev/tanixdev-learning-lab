# params and searchParams in Next.js

## Why params and searchParams Exist

### The Problem

So far, our routes look like this:

* `/blog`
* `/blog/post`

These routes are **static**.
But real applications need **dynamic data from the URL**.

Examples:

* `/blog/1`
* `/blog/hello-world`
* `/products/iphone?color=black`
* `/search?q=nextjs&page=2`

Problems without URL data:

* You can’t identify *which* blog post to show
* You can’t read filters, pagination, or search queries
* You end up hardcoding logic

We need a **standard way to read data from the URL**.

---

### The Solution

Next.js gives us **two different URL data sources**:

1. **params** → data from the *path*
2. **searchParams** → data from the *query string*

Key idea:

> **Path data and query data are handled separately**

This separation keeps things clean and predictable.

---

## What are `params`

### Definition

`params` are **dynamic values extracted from the URL path**.

Example URL:

```
/blog/hello-world
```

Here:

```
hello-world → params.slug
```

---

### Analogy

Think of a **file path**:

```
/users/42/profile
```

* `42` identifies *which* user
* Same structure, different data

That’s what `params` represent.

---

### Visual / Line Diagram Explanation

```
Route file: app/blog/[slug]/page.tsx
URL:        /blog/nextjs-routing

params = {
  slug: "nextjs-routing"
}
```

---

## How `params` Work (Internally – High Level)

1. You create a **dynamic folder** using `[name]`
2. Next.js matches the URL segment
3. The value is extracted
4. It is passed to the page as `params`

No parsing.
No regex.
No manual work.

---

## Using `params` (Practical Example)

### Step 1: Create a Dynamic Route

Create this structure:

```
app/blog/[slug]/page.tsx
```

---

### Step 2: Access `params` in the Page

```tsx
export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold text-primary">
        Blog Post
      </h1>

      <p className="mt-2 text-accent">
        Slug: {params.slug}
      </p>
    </div>
  );
}
```

---

### Step 3: Result

Visit:

```
/blog/hello-world
```

You will see:

```
Slug: hello-world
```

Change URL to:

```
/blog/nextjs
```

Slug updates automatically.

---

## What are `searchParams`

### Definition

`searchParams` represent **query string values** in the URL.

Example:

```
/search?q=nextjs&page=2
```

Here:

```
q → "nextjs"
page → "2"
```

---

### Analogy

Think of **filters applied on a page**:

* Search keyword
* Sort order
* Pagination

They don’t change *what page* you’re on,
they change *how the page behaves*.

---

### Visual / Line Diagram Explanation

```
URL: /products?category=books&sort=price

searchParams = {
  category: "books",
  sort: "price"
}
```

---

## How `searchParams` Work (High Level)

1. Next.js parses the query string
2. Converts it into an object
3. Passes it to the page automatically
4. Values are always strings (or undefined)

---

## Using `searchParams` (Practical Example)

### Example Page

`app/search/page.tsx`

```tsx
export default function Page({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold text-primary">
        Search Page
      </h1>

      <p className="mt-2 text-accent">
        Query: {searchParams.q ?? "none"}
      </p>

      <p className="mt-1 text-accent">
        Page: {searchParams.page ?? "1"}
      </p>
    </div>
  );
}
```

---

### Result

Visit:

```
/search?q=nextjs&page=2
```

Output:

```
Query: nextjs
Page: 2
```

---

## Using `params` and `searchParams` Together

Example URL:

```
/blog/react-hooks?comments=10
```

You can access both:

```tsx
export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { comments?: string };
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold text-primary">
        {params.slug}
      </h1>

      <p className="mt-2 text-accent">
        Comments: {searchParams.comments ?? "0"}
      </p>
    </div>
  );
}
```

---

## Important Rules (Must Remember)

### Rule 1: `params` Come From Folder Names

* Defined by `[param]`
* Required for path-based data

---

### Rule 2: `searchParams` Come From URL Query

* Optional
* Always strings
* Used for filters, pagination, sorting

---

### Rule 3: Pages Are Server Components by Default

* `params` and `searchParams` are available **without hooks**
* This works because pages run on the server

We will deeply learn **Server vs Client Components** later.

---

## What We Are NOT Doing Yet

We are **NOT covering yet**:

* `useRouter()`
* Updating search params programmatically
* Validation of params
* Dynamic metadata using params

These require upcoming topics.

---

## Real-Life Applications

* Blog slugs
* Product IDs
* Search filters
* Pagination
* Sorting
* Category pages

This is one of the **most used features** in real apps.

---

## Summary

* `params` → path-based dynamic data
* `searchParams` → query string data
* Automatically passed to pages
* No parsing needed
* Clean separation of concerns
* Core foundation for dynamic apps
