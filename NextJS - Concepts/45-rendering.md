Continuing **strictly in sequence**.

Save this as:

```
topics/45-rendering.md
```

---

# Rendering (Next.js)

## Why Rendering Exists

### The Problem

When building web apps, a fundamental question exists:

> **When and where should HTML be created?**

In traditional React apps:

* HTML is mostly empty
* JavaScript runs in browser
* UI appears **after JS executes**

This leads to problems:

* Slow first load
* Poor SEO
* Blank screens during load
* Inconsistent performance on weak devices

Different apps need **different rendering strategies**.

---

### The Solution

Next.js introduces **multiple rendering strategies**.

Key idea:

> **Rendering is a choice, not a fixed rule.**

Next.js lets you decide:

* Where rendering happens
* When rendering happens
* How much is rendered upfront

---

## What Is Rendering

### Definition

**Rendering** is the process of:

> **Converting components into HTML that the browser can display**

This can happen:

* On the client
* On the server
* At build time
* Incrementally over time

---

### Analogy

Think of printing a document:

* Print before sending → ready-to-read
* Send blank paper + instructions → reader prints
* Print partially → fill remaining pages later

Rendering works the same way.

---

### Visual / Line Diagram Explanation

```
Components
   ↓
Rendering
   ↓
HTML
   ↓
Browser displays UI
```

The difference is **where** and **when** this happens.

---

## Where Rendering Can Happen

There are **two main places**:

### 1️⃣ Server

* HTML created on server
* Sent to browser already filled

### 2️⃣ Browser (Client)

* HTML created inside browser
* After JavaScript loads

Next.js supports **both**.

---

## When Rendering Can Happen

Rendering timing varies:

1. **At request time**
2. **At build time**
3. **After page loads**
4. **Incrementally**

Each has trade-offs.

---

## Rendering Is Not About React Only

Important clarification:

* React = UI library
* Rendering = delivery strategy

Next.js controls **rendering**, not React itself.

React components stay the same.

---

## High-Level Rendering Types (Names Only)

⚠️ We are **not explaining these yet**, only naming them:

* Client-Side Rendering (CSR)
* Server-Side Rendering (SSR)
* Static Rendering
* Dynamic Rendering
* Streaming

We will cover **each one deeply** next.

---

## Why Next.js Needs Multiple Rendering Types

Different pages need different behavior:

| Page Type    | Best Rendering |
| ------------ | -------------- |
| Landing page | Static / SSR   |
| Blog post    | Static         |
| Dashboard    | Dynamic        |
| Admin panel  | CSR / SSR      |
| Auth pages   | SSR            |

One-size-fits-all **does not work**.

---

## Rendering and User Experience

Rendering choice affects:

* Time to first content
* SEO ranking
* Interactivity
* Server cost
* Scalability

This is why rendering is a **core topic**, not optional.

---

## Rendering Lifecycle (High Level)

Very simplified flow:

```
Request
  ↓
Choose rendering strategy
  ↓
Generate HTML
  ↓
Send to browser
  ↓
Hydration (later topic)
```

⚠️ Hydration will be explained later.

---

## What We Are NOT Covering Yet

Not covered yet:

* CSR internals
* SSR internals
* React Server Components
* Streaming
* Data fetching + rendering

These are **next topics**.

---

## Real-Life Examples

* Blogs → pre-rendered
* E-commerce product pages → server-rendered
* Dashboards → dynamic rendering
* Forms → client rendering

All are rendering decisions.

---

## Summary

* Rendering = converting components to HTML
* Can happen on server or browser
* Can happen at different times
* Next.js supports multiple strategies
* Choosing the right one is critical

This topic sets the **foundation**.

---

## Next Topic (Continuing Sequence)

### **46 – Client-Side Rendering (CSR)**

We will learn:

* How CSR works
* How React apps traditionally render
* Pros and cons
* When to use CSR in Next.js

When ready, say:

```
next
```

Continuing step by step, no skips.
