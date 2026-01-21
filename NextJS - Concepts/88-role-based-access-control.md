Continuing **strictly in sequence**.
No skips. Same depth. Same clarity.

Save this as:

```
topics/88-role-based-access-control.md
```

---

# Role-Based Access Control (RBAC) in Next.js

## Why This Topic Exists

### The Problem

So far, you can answer:

* Is the user logged in?
* Who is the user?

But real applications must answer **harder questions**:

* Is this user an **admin**?
* Can this user **edit or delete** this resource?
* Should this user see **admin-only UI**?
* Can this Server Action run for this user?

If you stop at authentication only:

* Every logged-in user becomes “equal”
* Sensitive actions become accessible
* Admin features leak to normal users

Common beginner mistakes:

* Hardcoding `if (email === "admin@…")`
* Checking roles only on the client
* Mixing “who you are” with “what you can do”
* Spreading permission logic everywhere

This leads to:

* Security bugs
* Unmaintainable code
* Accidental privilege escalation

---

### The Solution

Introduce **Role-Based Access Control (RBAC)**.

Key idea:

> **Authentication proves identity.
> RBAC decides permissions.**

---

## What Is RBAC

### Definition

**Role-Based Access Control** means:

> **Users are assigned roles, and roles determine what actions are allowed.**

Examples of roles:

* `user`
* `admin`
* `moderator`
* `editor`

You do NOT check permissions user-by-user.
You check **role rules**.

---

### Analogy

Think of a **company**:

* Employee → authenticated user
* Job title → role
* Job title decides:

  * What systems you access
  * What actions you can perform

You don’t re-check identity for every action.

---

### Visual / Line Diagram Explanation

```
User
  ↓ authenticated
Role assigned
  ↓
Permission rules applied
  ↓
Action allowed or denied
```

---

## Authentication vs RBAC (Critical Difference)

| Aspect         | Authentication    | RBAC             |
| -------------- | ----------------- | ---------------- |
| Question       | Who are you?      | What can you do? |
| Source         | Identity provider | App logic        |
| Changes often? | Rarely            | Often            |
| Example        | Logged in         | Admin access     |

Never mix these concerns.

---

## Where Roles Should Live

### Important Design Rule

> **Roles are application-level data, not identity-level data.**

That means:

* Clerk → identity (email, name)
* Your app → roles (admin, user)

Why:

* Roles change based on business rules
* Auth providers should not encode app logic

---

## Storing Roles (Conceptual)

Typical patterns:

1. Database table (recommended)
2. User metadata (advanced, optional)

For now, we focus on the **concept**, not DB code.

---

## Example Role Model (Conceptual)

```
User
 ├── id
 ├── email
 └── role: "admin" | "user"
```

This role is checked **on the server**.

---

## Enforcing RBAC (Golden Rule)

> **RBAC must be enforced on the server, never only in UI.**

UI can reflect permissions, but **server enforces them**.

---

## RBAC in Server Actions (Most Important)

### Example: Admin-Only Action

```ts
"use server";

import { auth } from "@clerk/nextjs/server";

export async function deleteAnyUser(formData: FormData) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const role = await getUserRole(userId); // from DB

  if (role !== "admin") {
    throw new Error("Forbidden");
  }

  // perform admin-only mutation
}
```

Key points:

* Auth first
* Role check second
* Mutation last

Order matters.

---

## RBAC in Pages and Layouts

You may also block UI or routes based on roles.

### Example: Admin Page Protection

```ts
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const role = await getUserRole(userId);

  if (role !== "admin") {
    redirect("/not-authorized");
  }

  return <h1>Admin Panel</h1>;
}
```

This prevents:

* URL guessing
* UI leaks
* Unauthorized rendering

---

## Conditional UI with Roles (Secondary)

UI can reflect roles for better UX.

Example:

```tsx
{role === "admin" && <DeleteButton />}
```

Important reminder:

> This improves UX, not security.

---

## Roles vs Permissions (Clarification)

* **Role** → a label (admin)
* **Permission** → an ability (delete_post)

Simple apps:

* Roles are enough

Complex apps:

* Roles map to multiple permissions

We keep it **role-based for now**.

---

## Common RBAC Mistakes

### ❌ Checking role only on client

Easy to bypass.

---

### ❌ Hardcoding role logic everywhere

Centralize role checks.

---

### ❌ Using email checks as roles

Emails change. Roles are explicit.

---

## Correct Mental Model

> **Auth proves identity.
> Role defines authority.
> Server enforces both.**

---

## What We Are NOT Covering Yet

Not covered yet (next topics):

* Customizing Clerk UI
* Deployment
* Production considerations

Those come next, in order.

---

## Summary

* RBAC controls permissions
* Roles belong to app logic
* Server Actions must enforce roles
* UI only reflects permissions
* Never rely on client checks alone

---

## Next Topic (Strict Order)

### **89 – Customizing Clerk Components**

We will learn:

* Styling Clerk UI
* Matching app design
* Configuring behavior

When ready, say:

```
next
```

Continuing exactly in sequence.
