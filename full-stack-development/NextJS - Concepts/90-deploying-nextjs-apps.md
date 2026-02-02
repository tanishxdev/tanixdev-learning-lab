Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/90-deploying-nextjs-apps.md
```

---

# Deploying Next.js Apps (Production)

## Why This Topic Exists

### The Problem

Your app now has:

* App Router
* Server Components
* Server Actions
* Authentication (Clerk)
* Protected routes
* RBAC
* Forms and mutations

Everything works **locally**.

But production introduces **new realities**:

* Environment variables behave differently
* Server vs client boundaries become strict
* Middleware runs at the edge
* Auth can silently break
* Builds can fail even if `npm run dev` works

Common beginner mistakes:

* Deploying without environment variables
* Committing secrets accidentally
* Forgetting middleware behavior in prod
* Assuming dev = production
* Debugging blindly after deploy

This leads to:

* Broken auth in production
* 500 errors
* Redirect loops
* “Works locally but not live”

---

### The Solution

Understand **deployment as a first-class engineering step**, not an afterthought.

Key idea:

> **Production is stricter, colder, and less forgiving than local dev.
> You must prepare explicitly for it.**

---

## What “Deploying a Next.js App” Means

### Definition

Deploying a Next.js app means:

> **Building, configuring, and running your application in a production environment where server and client code execute exactly as designed.**

This includes:

* Build step
* Environment configuration
* Hosting platform behavior
* Runtime differences

---

### Analogy

Think of development vs deployment like:

* Local → test kitchen
* Production → restaurant service

Same recipe. Very different conditions.

---

### Visual / Line Diagram Explanation

```
Local Dev
  ↓ npm run dev
Development server

Production
  ↓ next build
Optimized output
  ↓ next start / platform runtime
Live users
```

---

## Pre-Deployment Checklist (Very Important)

Before deploying, ensure:

### 1️⃣ App Builds Successfully

```bash
npm run build
```

This must pass locally.

If build fails:

* Deployment will fail
* Fix warnings and errors now

---

### 2️⃣ No Secrets in Code

Check for:

* API keys
* Tokens
* Secrets

They must be in:

```
.env.local
```

And **never committed**.

---

### 3️⃣ Environment Variables Are Identified

From Clerk, you already use:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
```

These must exist **in production environment**, not just locally.

---

## Choosing a Deployment Platform

### Recommended: Vercel

Why Vercel is ideal for Next.js:

* First-class Next.js support
* App Router aware
* Middleware support
* Server Actions support
* Edge + server runtimes
* Easy env management

Other platforms exist, but **Vercel is the reference implementation**.

---

## Deployment Flow on Vercel (Conceptual)

```
GitHub repo
  ↓ push
Vercel detects Next.js
  ↓
Build (next build)
  ↓
Deploy
  ↓
Live URL
```

No manual server setup needed.

---

## Setting Environment Variables (Critical)

### In Vercel Dashboard

Add:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
```

Important rules:

* Values must exactly match Clerk dashboard
* `NEXT_PUBLIC_` vars are exposed to browser
* Secret keys are server-only

Missing env vars = broken auth.

---

## Clerk-Specific Deployment Notes

### Update Clerk App Settings

In Clerk dashboard:

* Add your production domain
* Add redirect URLs:

  * `/sign-in`
  * `/dashboard` (or equivalent)

If not done:

* Login redirects may fail
* OAuth may break

---

## Middleware in Production (Important)

Middleware runs:

* On every request
* At the edge (often)

Ensure:

* `matcher` is correct
* You’re not blocking static assets
* You’re not redirecting infinitely

Your earlier middleware setup is **production-safe** if unchanged.

---

## Common Production Issues (And Why They Happen)

### ❌ “Auth works locally but not in prod”

Cause:

* Missing env vars
* Wrong domain in Clerk

---

### ❌ Redirect loop to `/sign-in`

Cause:

* Middleware protecting `/sign-in`
* Incorrect matcher config

---

### ❌ Server Actions failing silently

Cause:

* Using client-only APIs in server code
* Relying on dev-only behavior

---

### ❌ Build passes locally, fails on deploy

Cause:

* OS differences
* TypeScript strictness
* Edge runtime constraints

---

## Debugging Production Issues

### Step-by-Step

1. Check build logs
2. Check runtime logs
3. Verify environment variables
4. Re-check middleware logic
5. Test auth flows manually

Never “guess”. Always observe.

---

## Production Best Practices

### 1️⃣ Treat Server as Source of Truth

Never trust client state in prod.

---

### 2️⃣ Keep Auth Checks Server-Side

UI is secondary.

---

### 3️⃣ Separate Environments

* Local
* Preview
* Production

Each can have different env values.

---

### 4️⃣ Monitor and Iterate

Deployment is not “done once”.
It’s an ongoing process.

---

## What Happens After Deployment

Once deployed:

* Your app is live
* Users interact in real conditions
* Bugs reveal themselves
* Logs become important
* Performance matters

This is where engineering **matures**.

---

## Correct Mental Model

> **Deployment is not pushing code.
> Deployment is preparing code for reality.**

---

## Final Summary (Course-Level)

You have now learned:

* Next.js App Router deeply
* Routing, layouts, metadata
* Server vs client boundaries
* Data fetching and mutations
* Server Actions and forms
* Authentication and RBAC
* Production deployment

This is **end-to-end Next.js mastery**, not surface-level usage.

---

## Course Completed

You have completed **all 90 topics**, strictly in order, with depth and clarity.

From here, you can:

* Build real products
* Debug confidently
* Answer senior-level interview questions
* Scale features safely

If you want next:

* A **capstone project**
* A **real-world architecture walkthrough**
* Or **interview-style deep questions**

Say what you want next.
