## Next.js Routing Lab — Phase 1 (My Own Explanation, From First Principles)

This document is **my explanation** of what I built and learned while creating this project.
This is **not** someone teaching me — this is **me explaining the system back** to prove understanding.

The goal of this README is future reference:

* When I forget **why something works**
* When routing breaks again
* When I revise before interviews
* When I explain Next.js routing to someone else

No extra features.
No assumptions skipped.
Everything here was **experienced, broken, fixed, and understood**.

---

## 1. Project Purpose (Why I Built This)

This project is a **controlled routing lab** for **Next.js App Router**.

I built this to answer one core question:

> “How does Next.js convert folders into URLs — and why does it sometimes break silently?”

To answer that, I intentionally:

* Used **static routes**
* Used **dynamic routes**
* Used **route groups**
* Used **private folders**
* Broke routing multiple times
* Fixed real production-style bugs (cache, params, naming)

This is **Phase 1 only**: routing fundamentals.
No layouts logic. No auth logic. No metadata logic.

---

## 2. Tech Stack (Why Each Exists)

* **Next.js (App Router)**
  Chosen because routing is file-system based and opinionated.

* **TypeScript**
  Forces clarity on what data exists and when.

* **Tailwind CSS**
  Only for minimal UI — not part of the learning goal.

* **Turbopack (dev)**
  Important because it introduces **real cache-related routing bugs**.

---

## 3. Final Folder Structure (The Source of Truth)

```
app
├── _internal
│   └── debug
│       └── page.tsx
├── (auth)
│   ├── login
│   │   └── page.tsx
│   └── register
│       └── page.tsx
├── about
│   └── page.tsx
├── blog
│   ├── [slug]
│   │   └── page.tsx
│   ├── category
│   │   └── [slug]
│   │       └── page.tsx
│   └── page.tsx
├── dashboard
│   └── page.tsx
├── favicon.ico
├── globals.css
├── layout.tsx
└── page.tsx
```

This structure is **not accidental**.
Each naming pattern (`[]`, `()`, `_`) exists to teach one routing rule.

---

## 4. The Root Layout (`layout.tsx`) — `{children}` Explained

```
app/layout.tsx
```

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
```

### What `{children}` is

`children` is **whatever page is currently being rendered**.

If I visit:

* `/about` → `{children}` = About page
* `/blog/hello` → `{children}` = Blog detail page

### Why it exists

Next.js renders:

1. `layout.tsx`
2. Then injects the matched `page.tsx` inside `{children}`

Without `{children}`, **no page would render**.

### Why this file is NOT routing logic

* It does not define URLs
* It does not control navigation
* It only provides a shell

So in Phase 1, this stays minimal.

---

## 5. Static Routing — Folder = URL Segment

### Home Page — `/`

```
app/page.tsx
```

Rule learned:

* `app/page.tsx` **always** maps to `/`
* No folder name = root route

---

### About Page — `/about`

```
app/about/page.tsx
```

Rule learned:

* Folder name becomes URL segment
* `about` → `/about`

This is the **base rule** of App Router.

---

## 6. Nested Routing — Parent → Child

### Blog List — `/blog`

```
app/blog/page.tsx
```

Why this matters:

* This is a **parent route**
* Everything under `blog/` extends from `/blog`

---

## 7. Dynamic Routing — `[]` Explained Deeply

### Blog Detail — `/blog/[slug]`

```
app/blog/[slug]/page.tsx
```

```tsx
params: Promise<{ slug: string }>
```

### What `[slug]` means

`[slug]` tells Next.js:

> “This part of the URL is unknown at build time.”

Examples:

* `/blog/hello`
* `/blog/123`
* `/blog/nextjs-routing`

All of these map to **the same file**.

### How data flows

```
URL segment
→ folder name [slug]
→ params.slug
```

---

## 8. Critical Change in Next.js 15+ (Async Params)

### The Bug I Hit

I originally wrote:

```tsx
params: { slug: string }
```

This caused:

```
params is a Promise and must be awaited
```

### Why this happens

In Next.js 15+:

* `params` is **async**
* This allows streaming and server features

### Correct mental model

Dynamic route data is **not instantly available**.

Correct usage:

```tsx
params: Promise<{ slug: string }>
const { slug } = await params;
```

### Lesson Locked

> Dynamic APIs in App Router are asynchronous by design.

---

## 9. Multi-level Routing — `category/[slug]`

### Blog Category Page — `/blog/category/[slug]`

```
app/blog/category/[slug]/page.tsx
```

This teaches a critical rule:

> **Folder depth = URL depth**

* `blog` → `/blog`
* `category` → `/category`
* `[slug]` → dynamic value

---

## 10. Folder Naming Bug — Real Production Mistake

### What I did wrong

I created:

```
category [slug]
```

This became:

```
/blog/category [slug]
```

### Why it broke

Next.js treats folder names **literally**.

A space means:

* One folder
* One URL segment
* Completely wrong route

### Correct structure

```
category/
  [slug]/
```

### Lesson Locked

> One folder = one URL segment
> Folder names are not “semantic”, they are literal.

---

## 11. Route Groups — `()` Explained

### Auth Pages

```
app/(auth)/login/page.tsx
app/(auth)/register/page.tsx
```

### What `()` means

Route groups:

* Exist only for **organization**
* Do **not** appear in the URL

So:

* `(auth)` is ignored
* `/login` works
* `/register` works

### Why this is powerful

* Clean URLs
* Clean folder organization
* No URL pollution

---

## 12. Private Folders — `_` Explained

### Internal Debug Page

```
app/_internal/debug/page.tsx
```

### What `_` means

Folders starting with `_`:

* Are excluded from routing
* Cannot be accessed via URL

Trying:

```
/_internal/debug
```

Results in:

```
404
```

### Why this exists

To store:

* Debug pages
* Experiments
* Internal tools

Without risking public access.

---

## 13. Turbopack Cache Bug — Real Debugging Lesson

### Symptom

* Folder structure correct
* Code correct
* URL still 404

### Cause

Turbopack cached old routing state.

### Fix (Always Works)

```
Ctrl + C
delete .next
npm run dev
```

### Lesson Locked

> Routing changes are **not hot-reloaded safely**.

---

## 14. Symbols Summary (Most Important Section)

### `[]` — Dynamic Segment

* One URL value
* Comes from the URL
* Becomes `params.key`

### `()` — Route Group

* Organization only
* Removed from URL
* Does not affect routing

### `_` — Private Folder

* Excluded from routing
* Always results in 404

### `{children}`

* Injected page content
* Required for rendering
* Comes from matching route

---

## 15. Final URL Map

```
/                     → Home
/about                → About
/blog                 → Blog list
/blog/hello            → Blog detail
/blog/category/tech    → Blog category
/dashboard             → Dashboard
/login                 → Login
/register              → Register
/_internal/debug       → NOT accessible
```

---

## 16. What I Actually Learned (Real Takeaways)

* Routing is deterministic, not magical
* Folder naming mistakes cause silent failures
* Dynamic params are async (new mental model)
* Cache issues look like logic bugs
* Restarting the dev server is a valid debugging step

---

