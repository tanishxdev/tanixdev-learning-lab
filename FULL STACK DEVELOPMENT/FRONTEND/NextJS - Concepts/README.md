# Next.js Handbook 

**(App Router • From Basics to Production)**

This repository is my **structured learning journey of Next.js (App Router)**.
It is designed as a **long-term reference**, not a quick tutorial dump.

The goal is to:

* Learn Next.js **conceptually**
* Practice topics **in the correct order**
* Build projects **gradually**
* Maintain **clear, revision-friendly notes**

---

## How This Repository Is Organized

All learning notes are stored inside the `topics/` folder.

Instead of treating Next.js as random features, the course is divided into **logical sections**.
Each section answers **why it exists**, then covers related topics.

---

## 1️⃣ Foundations & App Router Basics

**(Topics 01 – 02)**

### Why this section?

Before writing routes or components, it’s important to understand:

* What Next.js really is
* How it differs from React
* How a Next.js project is structured

This section builds the **mental model**.

**Topics covered:**

* Introduction to Next.js
* Project setup and folder structure

---

## 2️⃣ Routing System (Core of App Router)

**(Topics 03 – 21)**

### Why this section?

Routing is the **heart of Next.js**.
Everything else builds on top of this.

This section teaches:

* File-based routing
* Nested routes
* Dynamic routes
* Layouts and navigation

Without mastering this, advanced features make no sense.

**Topics covered include:**

* Basic routing
* Nested & dynamic routes
* Catch-all routes
* Route groups & private folders
* Layouts and templates
* Navigation, params, and programmatic routing

---

## 3️⃣ User Experience, Errors & Advanced Routing

**(Topics 22 – 32)**

### Why this section?

Real apps must handle:

* Loading states
* Errors
* Edge cases
* Complex UI routing scenarios

This section focuses on **UX polish and resilience**.

**Topics covered include:**

* Loading UI
* Error boundaries
* Not-found handling
* Parallel routes
* Intercepting routes
* Conditional and unmatched routes

---

## 4️⃣ Backend with Route Handlers & Middleware

**(Topics 33 – 44)**

### Why this section?

Next.js is not just frontend.
This section introduces **backend capabilities inside Next.js**.

You learn how:

* APIs work in App Router
* HTTP methods are handled
* Middleware runs before requests

**Topics covered include:**

* Route handlers (GET, POST, PATCH, DELETE)
* Dynamic APIs
* Headers, cookies, redirects
* Caching
* Middleware

---

## 5️⃣ Rendering Model & React Server Components

**(Topics 45 – 63)**

### Why this section?

This is where Next.js becomes **truly different from React**.

This section explains:

* How rendering actually works
* Why Server Components exist
* How server and client code interact

This is a **core interview section**.

**Topics covered include:**

* Rendering fundamentals
* CSR vs SSR
* Suspense & streaming
* React Server Components
* Server vs client components
* Composition patterns

---

## 6️⃣ Data Fetching Patterns

**(Topics 64 – 70)**

### Why this section?

Fetching data correctly is critical for:

* Performance
* SEO
* Scalability

This section teaches **all official data-fetching patterns**.

**Topics covered include:**

* Client-side fetching
* Server-side fetching
* Loading & error states
* Sequential vs parallel fetching
* Database fetching

---

## 7️⃣ Data Mutations & Server Actions

**(Topics 71 – 80)**

### Why this section?

Reading data is not enough.
Real apps must **create, update, and delete data safely**.

This section introduces:

* Server Actions
* Forms
* Mutations
* Optimistic UI

**Topics covered include:**

* Data mutations
* Forms with Server Actions
* `useFormStatus` and `useActionState`
* Update & delete actions
* Optimistic updates
* Reusable form patterns

---

## 8️⃣ Authentication & Authorization

**(Topics 81 – 89)**

### Why this section?

Almost every real-world app needs:

* Authentication
* Protected routes
* Role-based access

This section uses **Clerk** to implement production-grade auth.

**Topics covered include:**

* Authentication concepts
* Clerk setup
* Sign in / sign out
* Profile management
* Conditional UI
* Route protection
* Session & user data
* Role-based access control
* Customizing auth UI

---

## 9️⃣ Production & Deployment

**(Topic 90)**

### Why this section?

An app is incomplete until it is deployed.

This final section covers:

* Production mindset
* Environment variables
* Auth-safe deployment
* Common production issues

**Topics covered:**

* Deploying Next.js apps

---

## Notes

* This repository is primarily for **learning, documenting, and revision**
* Topics are studied **in sequence**, not randomly
* Projects are built **after groups of topics**, not after every topic
* Notes will improve over time as understanding deepens
