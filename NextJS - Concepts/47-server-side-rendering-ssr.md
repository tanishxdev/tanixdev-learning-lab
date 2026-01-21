Continuing **strictly in sequence**.

Save this as:

```
topics/47-server-side-rendering-ssr.md
```

---

# Server-Side Rendering (SSR)

## Why Server-Side Rendering Exists

### The Problem with CSR

From the previous topic, we saw CSR issues:

* Browser receives almost empty HTML
* User waits for JS to download and execute
* Search engines may see no content
* First load feels slow (blank screen / spinner)

This is **bad** for:

* SEO-driven pages
* Public content
* First impressions

---

### The Solution

**Server-Side Rendering (SSR)**.

Key idea:

> **Render the page on the server for every request and send ready HTML to the browser.**

So the browser receives **actual content**, not an empty shell.

---

## What Is Server-Side Rendering

### Definition

Server-Side Rendering means:

* Request comes to server
* React components execute on the server
* HTML is generated on the server
* Fully rendered HTML is sent to browser

Rendering happens **on every request**.

---

### Analogy

Think of food delivery:

* CSR → raw ingredients + recipe (you cook)
* SSR → cooked meal delivered ready to eat

SSR removes work from the client.

---

### Visual / Line Diagram Explanation

```
Request
  ↓
Server runs React components
  ↓
HTML generated
  ↓
HTML sent to browser
  ↓
User sees content immediately
```

JavaScript still loads later for interactivity.

---

## How SSR Works (Step by Step)

### Step 1: Browser Requests Page

```
GET /blog
```

---

### Step 2: Server Executes React Code

```tsx
export default function Page() {
  return <h1>My Blog</h1>;
}
```

This runs **on the server**, not browser.

---

### Step 3: Server Sends HTML

```html
<h1>My Blog</h1>
```

Browser immediately displays content.

---

### Step 4: JavaScript Loads (Hydration)

Later:

* JS loads
* React attaches event listeners
* Page becomes interactive

⚠️ Hydration is a **later topic**.

---

## SSR in Next.js

In Next.js (App Router):

* SSR is **built-in**
* Happens automatically when needed
* You don’t manually configure servers

SSR is **default behavior** for many pages.

---

### Example SSR Page (Simple)

```tsx
export default function Page() {
  return <h1>Rendered on the server</h1>;
}
```

This component:

* Executes on server
* HTML sent to client

No `"use client"` → server-rendered by default.

---

## SSR with Data (Conceptual Preview)

SSR is powerful because:

* Server can fetch data
* Then render HTML using that data

Example (conceptual):

```tsx
export default async function Page() {
  const data = await getData();
  return <pre>{JSON.stringify(data)}</pre>;
}
```

⚠️ We’ll learn **data fetching rules later**.

---

## Pros of Server-Side Rendering

### 1️⃣ Fast First Content

* HTML already contains content
* No blank screen
* Better perceived performance

---

### 2️⃣ Excellent SEO

* Search engines see real HTML
* Content is indexable

---

### 3️⃣ Better for Public Pages

* Blogs
* Marketing pages
* Docs
* Product pages

---

## Cons of Server-Side Rendering

### 1️⃣ Higher Server Cost

* Every request runs server code
* More CPU usage

---

### 2️⃣ Slower Time-to-Interactive

* HTML is fast
* JS still needs to load
* Interactivity comes later

---

### 3️⃣ Not Ideal for Highly Interactive Apps

Dashboards with:

* Frequent state changes
* Heavy client logic

CSR may be better there.

---

## SSR vs CSR (Clear Comparison)

| Aspect        | SSR             | CSR       |
| ------------- | --------------- | --------- |
| HTML content  | Server          | Browser   |
| First load    | Fast            | Slow      |
| SEO           | Excellent       | Weak      |
| Server cost   | High            | Low       |
| Interactivity | After hydration | Immediate |

---

## When to Use SSR

SSR is best for:

* Blogs
* Landing pages
* SEO-critical content
* Public-facing pages
* Pages with dynamic data per request

---

## When NOT to Use SSR

Avoid SSR for:

* Heavy dashboards
* Internal tools
* Apps where SEO doesn’t matter
* Pages with constant user interaction

---

## Common Misunderstandings

### Misunderstanding 1: “SSR means no JavaScript”

Wrong.

* SSR sends HTML
* JS still loads for interactivity

---

### Misunderstanding 2: “SSR is always better”

Wrong.

SSR is **one tool**, not a rule.

---

## What We Are NOT Covering Yet

Not covered yet:

* Streaming SSR
* Suspense with SSR
* React Server Components
* Data fetching strategies

These are upcoming topics.

---

## Real-Life Examples

* Blog posts → SSR
* Product pages → SSR
* Documentation sites → SSR

SEO + fast content matters here.

---

## Summary

* SSR renders HTML on the server
* Runs on every request
* Improves SEO and first load
* Costs more server resources
* Still needs JS for interactivity
* Best for public content

---

## Next Topic (Continuing Sequence)

### **48 – Suspense SSR**

We will learn:

* What Suspense is
* How SSR works with Suspense
* Partial rendering
* Why streaming exists

When ready, say:

```
next
```

Continuing step by step, no skips.
