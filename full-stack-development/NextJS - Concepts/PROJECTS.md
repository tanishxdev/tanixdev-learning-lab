# Project Roadmap — Applying Next.js Topics in Practice

This document explains **how and when** to convert the Next.js topics studied in this repository into **real-world projects**.

The goal is **not** to build one huge app or dozens of tiny apps, but to:

* Build projects **only when enough concepts exist**
* Increase difficulty **gradually**
* Ensure every project has a **clear purpose**
* Avoid using concepts **before learning them**

---

## Core Principle (Read This Once)

> **Topics are tools.
> Projects are problems.
> A project should exist only when enough tools are available to solve a real problem properly.**

Because of this:

* ❌ There is NOT one project per topic
* ❌ There is NOT one giant project
* ✅ There are **multiple well-scoped projects**
* ✅ Each project unlocks a **new mental level**

---

## How to Use This Roadmap

1. Learn topics in order (already done in `topics/`)
2. Stop at the mentioned checkpoints
3. Build the project listed for that phase
4. Only then move forward

---

# PHASE 0 — Foundation Check (No Project)

### Topics

```
01–02
```

### Why no project yet?

At this stage you only understand:

* What Next.js is
* How the project is structured

You don’t yet understand routing or layouts, so **building a project now would be fake practice**.

---

# PHASE 1 — Routing & Pages Fundamentals

### Topics

```
03–11
```

### What you know now

* File-based routing
* Nested routes
* Dynamic routes
* Route groups
* Private folders

You now understand **URL ↔ folder mapping**.

---

## 📦 Project 1 — Multi-Page Website (Routing Only)

### Project Goal

> Prove you understand **App Router routing rules**, not UI or data.

### What to build

* Home page
* About page
* Blog list page
* Blog detail page (dynamic)
* Category routes

### Rules

* ❌ No data fetching
* ❌ No layouts yet
* ❌ No auth
* ✅ Only routing mastery

### Why this project exists

Routing mistakes are the **#1 reason beginners get stuck** in Next.js.

This project removes that risk.

---

# PHASE 2 — Layouts, Navigation & Metadata

### Topics

```
12–21
```

### What you know now

* Layouts & nested layouts
* Navigation
* Active links
* Metadata
* Templates

---

## 📦 Project 2 — Static Blog Website (Proper Structure)

### Project Goal

> Build a **real-looking website** with clean structure.

### What to build

* Shared header/footer layout
* Blog list
* Blog detail pages
* Category navigation
* Page titles & metadata

### Why this project exists

This is where your app:

* Stops looking like practice
* Starts looking like a product

This is your **first resume-safe project**.

---

# PHASE 3 — UX, Errors & Advanced Routing

### Topics

```
22–32
```

### What you know now

* Loading UI
* Error boundaries
* Not found pages
* Parallel & intercepting routes

---

## 📦 Project 3 — Documentation / Course Platform

### Project Goal

> Learn **professional UX**, not just functionality.

### What to build

* Docs sidebar
* Section-based pages
* Loading skeletons
* Error pages
* Preview routes

### Why this project exists

Most apps fail not due to logic, but due to **bad UX**.

This project fixes that mindset.

---

# PHASE 4 — Backend Thinking (APIs & Middleware)

### Topics

```
33–44
```

---

## 📦 Project 4 — Notes API (Backend-First)

### Project Goal

> Think like a backend engineer **inside Next.js**.

### What to build

* Notes CRUD APIs
* Middleware logging
* Headers & cookies usage
* No authentication UI yet

### Why this project exists

Before Server Actions, you must respect:

* HTTP
* API boundaries
* Server authority

This prevents bad habits later.

---

# PHASE 5 — Rendering & Data Fetching

### Topics

```
45–70
```

---

## 📦 Project 5 — Product Catalog (Read-Only)

### Project Goal

> Understand **why Next.js rendering exists**.

### What to build

* Product list
* Product detail pages
* SSR vs SSG comparison
* Streaming pages

### Why this project exists

This project gives you:

* Interview confidence
* Real performance understanding
* Clear mental model of rendering

---

# PHASE 6 — Mutations & Forms (No Auth Yet)

### Topics

```
71–80
```

---

## 📦 Project 6 — Internal Dashboard (No Auth)

### Project Goal

> Master **Server Actions and mutations** without auth complexity.

### What to build

* Create / update / delete items
* Forms with Server Actions
* Optimistic UI
* Reusable form components

### Why this project exists

Most bugs in Next.js apps come from **bad mutations**.

This phase fixes that permanently.

---

# PHASE 7 — Authentication & Authorization

### Topics

```
81–88
```

---

## 📦 Project 7 — Authenticated Blog Platform

### Project Goal

> Build a **real multi-user system**.

### What to build

* Login / logout
* User dashboard
* Protected routes
* User-specific data
* Role-based admin access

### Why this project exists

This is **production-grade engineering**.

Everything before this prepares you for this project.

---

# PHASE 8 — Customization & Deployment

### Topics

```
89–90
```

---

## 📦 Project 8 — Production Deployment

### Project Goal

> Take your app **live safely**.

### What to do

* Customize auth UI
* Configure environment variables
* Deploy with authentication
* Fix production-only issues

### Why this project exists

An undeployed app is **not a real app**.

---

# Final Rules (Very Important)

### ❌ Do NOT

* Build all features in one project
* Use auth before mutations
* Skip UX topics
* Rush to deployment

### ✅ DO

* Build projects **only after the required topics**
* Treat each project as a learning checkpoint
* Improve old projects when learning new concepts

---
