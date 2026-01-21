Perfect. Continuing **strictly in order**, and following your new rule:

> **From now on, every advanced concept gets its OWN clean demo folder**
> No overloading existing routes.
> Architecture-first learning.

Save this as:

```
topics/32-parallel-intercepting-routes.md
```

---

# Parallel + Intercepting Routes in Next.js

## Why This Concept Exists

### The Problem

You already learned:

* **Parallel Routes** → multiple UI regions at same URL
* **Intercepting Routes** → open routes as modals / overlays

But modern apps often need **both together**.

Real problems:

* Background page stays visible
* Modal opens on top
* Sidebar still visible
* Header still visible
* Each part loads independently

Examples:

* Gmail (list + preview + modal)
* GitHub (repo page + issue modal)
* Instagram (feed + post modal)

Using only one concept is **not enough**.

---

### The Solution

Next.js allows you to **combine Parallel Routes with Intercepting Routes**.

Key idea:

> **Intercept a route and render it into a specific parallel slot**

This gives you:

* Full control of UI placement
* Context preservation
* Production-grade UX

---

## What Are Parallel Intercepting Routes

### Definition

**Parallel Intercepting Routes** mean:

* You have multiple parallel UI slots
* One of those slots renders an **intercepted route**
* URL changes, UI stays contextual

---

### Analogy

Think of a web app layout like this:

```
Header
----------------
Sidebar | Content
----------------
Modal (on top)
```

* Sidebar → parallel route
* Content → parallel route
* Modal → intercepted parallel route

---

### Visual / Line Diagram Explanation

```
/mail

@list       → email list
@preview    → email preview
@modal      → intercepted route
```

All rendered together.

---

## We Will Build This (Clean & Isolated)

### Goal

* Email list page
* Clicking email:

  * Opens modal
  * Background list stays
* Sidebar always visible

We create a **new demo**, not touching old code.

---

## Folder Structure (Very Important)

Create:

```
app/parallel-intercept-demo/
├── layout.tsx
├── @list/
│   └── page.tsx
├── @sidebar/
│   └── page.tsx
├── @modal/
│   └── default.tsx
└── (.)mail/
    └── [id]/
        └── page.tsx
```

---

## Step 1: Layout With Slots

`app/parallel-intercept-demo/layout.tsx`

```tsx
export default function Layout({
  list,
  sidebar,
  modal,
}: {
  list: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 border-r border-secondary p-4">
        {sidebar}
      </aside>

      <main className="flex-1 p-4">
        {list}
      </main>

      {modal}
    </div>
  );
}
```

---

## Step 2: Sidebar Slot

`app/parallel-intercept-demo/@sidebar/page.tsx`

```tsx
export default function Page() {
  return (
    <ul className="space-y-2 text-accent">
      <li>Inbox</li>
      <li>Starred</li>
      <li>Sent</li>
    </ul>
  );
}
```

---

## Step 3: List Slot (Background Page)

`app/parallel-intercept-demo/@list/page.tsx`

```tsx
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">
        Inbox
      </h1>

      <ul className="mt-4 space-y-2">
        <li>
          <Link
            href="/parallel-intercept-demo/mail/1"
            className="underline text-accent"
          >
            Email 1
          </Link>
        </li>

        <li>
          <Link
            href="/parallel-intercept-demo/mail/2"
            className="underline text-accent"
          >
            Email 2
          </Link>
        </li>
      </ul>
    </div>
  );
}
```

---

## Step 4: Modal Slot Default

`app/parallel-intercept-demo/@modal/default.tsx`

```tsx
export default function DefaultModal() {
  return null;
}
```

---

## Step 5: Intercepted Mail Route

`app/parallel-intercept-demo/(.)mail/[id]/page.tsx`

```tsx
export default function Page({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-secondary p-6 rounded w-96">
        <h2 className="text-xl font-bold text-primary">
          Email {params.id}
        </h2>

        <p className="mt-2 text-accent">
          This email is opened using a parallel intercepting route.
        </p>
      </div>
    </div>
  );
}
```

---

## What Happens (Very Important)

When you click **Email 1**:

### URL:

```
/parallel-intercept-demo/mail/1
```

### UI:

* Sidebar → stays
* List → stays
* Modal → opens
* Full page does NOT change

This is **parallel + intercepting routing** in action.

---

## Why This Is Powerful

* Zero JS state
* Zero manual modal management
* URL stays shareable
* Back button works
* Deep linking works

This is **framework-level UX**.

---

## Important Rules (Must Remember)

### Rule 1: Intercepted Route Must Match a Real Route

* `/mail/[id]` is a real route
* Interception only changes rendering location

---

### Rule 2: Modal Slot Is Optional

* Controlled via `default.tsx`
* No modal when route not active

---

### Rule 3: Layout Controls Placement

* Slots are just data
* Layout decides UI structure

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* Back navigation handling
* Closing modal programmatically
* Data fetching inside modals

Those come later.

---

## Summary

* Parallel routes = multiple UI regions
* Intercepting routes = modal-style navigation
* Combined = modern app UX
* Clean architecture, no hacks
* URL-driven UI

---

## Next Topic (As Per Your Order)

### **33 – Route Handlers**

This is where **backend begins inside Next.js**.

When ready, say:

```
next
```

We continue with the same depth and discipline.

## 404 on `/parallel-intercept-demo` — WHY + EXACT FIX

This 404 is **100% expected** with your current structure.
Nothing is “broken”. One **required file is missing**.

Let’s fix it cleanly.

---

### 1. Why You Are Seeing 404

You visited:

```
/parallel-intercept-demo
```

But inside:

```
app/parallel-intercept-demo/
```

you **do NOT have** a `page.tsx`.

In Next.js App Router:

> A route exists **ONLY if a `page.tsx` exists**.

Parallel routes (`@list`, `@sidebar`, `@modal`)
❌ **do NOT create a route by themselves**

---

### 2. Your Current Structure (Problem)

```
app/parallel-intercept-demo/
├── layout.tsx
├── @list/page.tsx
├── @sidebar/page.tsx
├── @modal/default.tsx
└── (.)mail/[id]/page.tsx
```

Missing:

```
❌ app/parallel-intercept-demo/page.tsx
```

So Next.js says:

> “No page → 404”

---

### 3. The FIX (Required File)

Create this file:

```
app/parallel-intercept-demo/page.tsx
```

### Minimal Page (Correct)

```tsx
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      <h1>Parallel + Intercept Demo</h1>

      <Link href="/parallel-intercept-demo/mail/1">
        Open Mail 1
      </Link>
    </div>
  );
}
```

Now:

```
/parallel-intercept-demo  ✅ works
```

---

### 4. VERY IMPORTANT Rule (Memorize)

```
layout.tsx → wrapper only
page.tsx   → creates the route
@slot      → fills layout holes
```

No `page.tsx` = **no route**

---

### 5. How Parallel Routes Actually Work

Your `layout.tsx` should look like this:

```tsx
export default function Layout({
  children,
  list,
  sidebar,
  modal,
}) {
  return (
    <div className="flex gap-4 p-4">
      <aside>{sidebar}</aside>
      <main>{children}</main>
      <section>{list}</section>
      {modal}
    </div>
  );
}
```

Slots map like this:

| Slot prop  | Folder     |
| ---------- | ---------- |
| `list`     | `@list`    |
| `sidebar`  | `@sidebar` |
| `modal`    | `@modal`   |
| `children` | `page.tsx` |

---

### 6. Why `(.)mail` Is NOT the Problem

This part is correct:

```
(.)mail/[id]/page.tsx
```

But intercept routes:

* **do not create routes**
* only change rendering **when navigating from parent**

You still need the base route.

---

### 7. Final Checklist (Your Case)

✔ `layout.tsx`
✔ parallel slots
✔ intercept route
❌ **missing `page.tsx` ← root cause**

---

### 8. One-Line Summary

> Parallel routes need a normal `page.tsx` to exist — otherwise you get 404.

---

Say **next**
I’ll walk you through **exact navigation flow** (normal → intercepted → refresh behavior) so this concept fully clicks.

