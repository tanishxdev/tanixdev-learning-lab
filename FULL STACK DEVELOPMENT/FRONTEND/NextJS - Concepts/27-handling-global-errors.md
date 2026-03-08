
# Handling Global Errors in Next.js

## Why Global Error Handling Exists

### The Problem

So far, you learned:

* `error.tsx` handles **route-level** errors
* Nearest error boundary wins
* Layout errors **bubble upward**

But now ask this:

> What if an error happens **outside all route segments**
> or inside the **root layout**?

Examples:

* Root layout crashes
* App-wide provider fails
* Unexpected runtime error before any route renders

Without a global handler:

* Entire app crashes
* White screen
* No recovery UI

This is unacceptable in production.

---

### The Solution

Next.js provides a **global error boundary**.

Key idea:

> **A single, last-resort error UI for the entire app**

This ensures:

* App never fully crashes
* User always sees something meaningful

---

## What is a Global Error in Next.js

### Definition

A **Global Error Handler** is defined using:

```
app/error.tsx
```

This file:

* Catches errors not handled by any route-level `error.tsx`
* Catches errors in the **root layout**
* Acts as the final safety net

---

### Analogy

Think of error handling like layers:

* Room safety → page `error.tsx`
* Floor safety → route segment `error.tsx`
* Building safety → **global error**

If everything else fails:

* Global error catches it

---

### Visual / Line Diagram Explanation

```
page error      → page error.tsx
layout error    → parent / global error.tsx
root crash      → app/error.tsx
```

---

## How Global Error Handling Works

1. Error occurs
2. Next.js looks for nearest `error.tsx`
3. If none can handle it
4. Falls back to:

   ```
   app/error.tsx
   ```

This file is **always respected**.

---

## Creating a Global Error Handler (Practical)

### Step 1: Create the File

```
src/app/error.tsx
```

---

### Step 2: Global Error UI

```tsx
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold text-primary">
            Application Error
          </h1>

          <p className="mt-3 text-accent">
            Something went wrong at the application level.
          </p>

          <p className="mt-2 text-sm opacity-70">
            {error.message}
          </p>

          <button
            onClick={reset}
            className="mt-6 rounded bg-primary px-4 py-2 text-white"
          >
            Reload App
          </button>
        </div>
      </body>
    </html>
  );
}
```

---

## Important Details (Must Read Carefully)

### 1️⃣ Why `<html>` and `<body>` Are Required

Global error:

* Replaces the **entire app**
* Root layout is already broken
* You must render a full document

So:

* Always include `<html>` and `<body>`

---

### 2️⃣ `"use client"` Is Mandatory

* `reset()` is triggered by user action
* Requires client-side code

This is **non-negotiable**.

---

### 3️⃣ Styling Still Works

* Tailwind works
* Global CSS still applies
* Dark theme preserved

---

## Testing Global Error Handling

### Force an Error in Root Layout

`app/layout.tsx`

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  throw new Error("Root layout crashed");

  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

Result:

* App fails
* `app/error.tsx` is shown
* No white screen

After testing, **remove this error**.

---

## Important Rules (Must Remember)

### Rule 1: Only One Global Error Handler

* File location must be:

  ```
  app/error.tsx
  ```
* Nested global errors do not exist

---

### Rule 2: Global Error Is Last Resort

* Route-level `error.tsx` always preferred
* Global handles what others cannot

---

### Rule 3: Reset Reloads the App

* `reset()` retries root rendering
* Similar to soft reload
* Still not a full browser refresh

---

## Common Mistakes

### Mistake 1: Forgetting `<html>` / `<body>`

This will cause:

* Hydration issues
* Warnings or crashes

---

### Mistake 2: Putting Business Logic Here

Global error UI should be:

* Simple
* Stable
* Defensive

No complex logic.

---

## Real-Life Applications

Global errors are used for:

* App-wide crashes
* Auth provider failures
* Configuration errors
* Unexpected production bugs

Every production app **must** have this.

---

## Summary

* Global errors are handled by `app/error.tsx`
* It is the final safety net
* Catches root layout and unhandled errors
* Must include `<html>` and `<body>`
* Must be a client component
