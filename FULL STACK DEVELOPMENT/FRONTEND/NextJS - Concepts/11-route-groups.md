
# Route Groups in Next.js

## Why Route Groups Exist

### The Problem

So far, we learned:

* Folder = URL
* Nested folders = nested URLs

But sometimes we want to **organize files without changing the URL**.

Example problem:

You want this URL:

```
/login
```

But internally you want:

```
(auth)/login
```

Why?

* To group auth-related routes
* To keep code clean
* To avoid messy flat folders

In plain routing logic:

* Folder structure = URL structure
* No way to “group” without affecting URL

---

### The Solution

Next.js introduces **Route Groups**.

Key idea:

> **Folders wrapped in parentheses `()` group routes but do NOT appear in the URL**

---

## What is a Route Group

### Definition

A **Route Group** is a folder whose name is wrapped in parentheses:

```
(auth)
```

* It helps organize routes
* It does **not** affect the URL
* It is ignored by the router path

---

### Analogy

Think of **folders inside VS Code** that are just for **developer organization**:

* They help you
* Users never see them

Same idea for URLs.

---

### Visual / Line Diagram Explanation

```
app/
└── (auth)/
    └── login/
        └── page.tsx
```

URL:

```
/login
```

The `(auth)` part is invisible to users.

---

## How Route Groups Work Internally

1. Next.js scans folders
2. If a folder name is wrapped in `()`
3. That folder is **ignored in URL generation**
4. Child folders still become routes

---

## Practical Example

### Folder Structure

```
app/
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       └── page.tsx
└── page.tsx
```

---

### `/login` Page Code (Follow Your CSS Pattern)

```tsx
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold text-primary">
        Login Page
      </h1>

      <p className="mt-2 text-accent">
        This route is inside a route group.
      </p>
    </div>
  );
}
```

---

### Resulting URLs

| File location              | URL         |
| -------------------------- | ----------- |
| `(auth)/login/page.tsx`    | `/login`    |
| `(auth)/register/page.tsx` | `/register` |

---

## Compare with React (Very Important)

### How You’d Do This in React

Using `react-router-dom`:

```jsx
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
```

Then you manually:

* Create `auth` folders
* Wire routes manually
* Keep mental mapping in your head

Folder structure does **not** help routing.

---

### How Next.js Changes the Mental Model

In Next.js:

* Folder structure **is the router**
* Route Groups let you organize **without URL pollution**
* No mismatch between:

  * File system
  * Routes
  * Mental model

Think like this:

> **React Router = URL-first**
> **Next.js Router = File-first**

---

## Route Groups vs Private Folders (Important Difference)

| Feature          | Private Folder (`_`) | Route Group (`()`) |
| ---------------- | -------------------- | ------------------ |
| Visible in URL   | ❌                    | ❌                  |
| Used for routing | ❌                    | ✅                  |
| Purpose          | Internal code        | Route organization |

* `_folder` → router ignores completely
* `(folder)` → router uses children, ignores folder name

---

## What We Are NOT Doing Yet

We are **NOT covering yet**:

* Layouts inside route groups
* Multiple root layouts
* Auth protection

These are **explicit future topics** and will build on this.

---

## Real-Life Applications

Route groups are used for:

* Auth flows
* Dashboards
* Marketing pages
* Admin vs user separation

Examples:

```
(auth)/login
(dashboard)/settings
(marketing)/pricing
```

Clean URLs, clean code.

---

## Summary

* Route Groups organize routes without changing URLs
* Use parentheses `(group)`
* Group name never appears in URL
* Powerful for large apps
* Makes routing clean and scalable

---

## Route Groups in Next.js (Mini Project)

---

### 1. What is a Route Group?

A **route group** is a folder wrapped in parentheses:

```
(app)
(auth)
(dashboard)
```

Rule:

> Route groups **do NOT appear in the URL**

They exist only for **organization and layout control**.

---

### 2. Why Route Groups Exist

Route groups solve **two real problems**:

1. Organize large apps
2. Apply different layouts without changing URLs

---

### 3. Mini Project: Auth + App Layouts

Goal:

* `/login` and `/register` → Auth layout
* `/dashboard` → App layout
* URL stays clean

---

### 4. Folder Structure

```
app/
  (auth)/
    layout.tsx
    login/
      page.tsx
    register/
      page.tsx

  (app)/
    layout.tsx
    dashboard/
      page.tsx

  page.tsx
```

URLs:

```
/login
/register
/dashboard
/
```

No `(auth)` or `(app)` in URL.

---

### 5. Auth Layout

```tsx
export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
```

Applies only to **login & register**.

---

### 6. App Layout

```tsx
export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen">
      <header>App Header</header>
      <main>{children}</main>
    </div>
  );
}
```

Applies only to dashboard routes.

---

### 7. Login Page

```tsx
export default function Page() {
  return <h1>Login</h1>;
}
```

Route:

```
/login
```

---

### 8. Why This is Powerful

Without route groups, you would need:

* URL hacks
* layout conditions
* manual checks

Route groups give **clean URLs + clean layouts**.

---

### 9. Mental Model

```
() = grouping only
_  = internal only
[] = dynamic
```

---

### 10. One-Line Summary

Route groups organize routes and layouts without affecting URLs.
