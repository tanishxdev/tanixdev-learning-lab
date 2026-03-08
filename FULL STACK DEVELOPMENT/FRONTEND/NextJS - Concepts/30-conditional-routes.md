# Conditional Routes in Next.js

## Why Conditional Routes Exist

### The Problem

So far, routing has been **static**:

* Folder exists → route exists
* Slot exists → UI renders
* Slot missing → unmatched route fallback

But real applications need **conditional behavior**, such as:

* Logged-in user sees Dashboard
* Logged-out user sees Login
* Feature enabled → new UI
* Feature disabled → fallback UI
* A/B testing
* Role-based routing (admin vs user)

If you put all this logic **inside components**:

* Components become complex
* Routing logic mixes with UI logic
* Harder to reason and maintain

---

### The Solution

Next.js allows **Conditional Routes** using **routing structure**, not just `if` statements.

Key idea:

> **Decide *which route tree* renders based on a condition**

This keeps:

* UI clean
* Logic predictable
* Structure scalable

---

## What Are Conditional Routes

### Definition

**Conditional Routes** mean:

* Different route segments are rendered
* Based on a condition (auth, role, feature, etc.)
* Without changing the URL structure

This is commonly achieved using:

* Route Groups
* Parallel Routes
* Conditional slot rendering

(You already learned the building blocks; now we combine them.)

---

### Analogy

Think of a building entrance:

* Same door
* Security decides:

  * Office floor
  * Visitor floor

URL is same.
Experience is different.

---

### Visual / Line Diagram Explanation

```
/dashboard

Condition: logged-in?
  ├── yes → App UI
  └── no  → Login UI
```

Same route, different trees.

---

## How Conditional Routes Work (High Level)

1. Layout receives multiple possible UI trees
2. A condition decides:

   * Which one to render
3. Unused routes are ignored

No redirects yet.
No middleware yet.
Pure routing control.

---

## Practical Example: Auth-Based Dashboard

### Goal

* `/dashboard`
* If user is logged in → show dashboard
* If not → show login UI

We will **simulate auth** with a boolean.
(Real auth comes later.)

---

### Step 1: Folder Structure

```
app/dashboard/
├── layout.tsx
├── @auth/
│   └── page.tsx
└── @app/
    └── page.tsx
```

Both slots map to:

```
/dashboard
```

---

### Step 2: Dashboard Layout With Condition

`app/dashboard/layout.tsx`

```tsx
const isLoggedIn = false; // simulate auth

export default function Layout({
  auth,
  app,
}: {
  auth: React.ReactNode;
  app: React.ReactNode;
}) {
  return (
    <div className="min-h-screen p-4">
      {isLoggedIn ? app : auth}
    </div>
  );
}
```

Key point:

* Routing decision happens in **layout**
* Pages stay clean

---

### Step 3: Auth Slot

`app/dashboard/@auth/page.tsx`

```tsx
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">
        Please log in
      </h1>

      <p className="mt-2 text-accent">
        You must log in to access the dashboard.
      </p>
    </div>
  );
}
```

---

### Step 4: App Slot

`app/dashboard/@app/page.tsx`

```tsx
export default function Page() {
  return (
    <h1 className="text-2xl font-bold text-primary">
      Dashboard Home
    </h1>
  );
}
```

---

### Step 5: Behavior

* Visit `/dashboard`
* `isLoggedIn = false`

  * Auth UI renders
* Change `isLoggedIn = true`

  * Dashboard UI renders

No redirect.
No URL change.
Pure conditional routing.

---

## Why This Is Better Than `if` Inside Pages

### Traditional Approach (Bad)

```tsx
if (!isLoggedIn) {
  return <Login />;
}
return <Dashboard />;
```

Problems:

* Logic mixed with UI
* Hard to scale
* Nested conditions explode

---

### Conditional Routes Approach (Good)

* Each route has one responsibility
* Layout decides **which route tree**
* Pages stay simple

---

## Important Rules (Must Remember)

### Rule 1: URL Does Not Change

* Conditional routes are **UI-level**
* URL stays same

---

### Rule 2: Slots Are Still Independent

* Each slot can have:

  * `loading.tsx`
  * `error.tsx`
* Works naturally

---

### Rule 3: Conditions Belong in Layouts

* Do NOT put routing conditions in pages
* Layouts control structure

---

## What We Are NOT Covering Yet

We are **not covering yet**:

* Redirect-based auth
* Middleware auth
* Role-based access control

Those depend on **auth topics later**.

---

## Real-Life Applications

Conditional routes are used for:

* Auth gating
* Feature flags
* Admin vs user UI
* Onboarding flows

This is **production-grade routing**.

---

## Summary

* Conditional routes choose UI trees based on conditions
* Achieved using parallel routes + layout logic
* Cleaner than conditional JSX
* URL remains same
* Highly scalable pattern

---