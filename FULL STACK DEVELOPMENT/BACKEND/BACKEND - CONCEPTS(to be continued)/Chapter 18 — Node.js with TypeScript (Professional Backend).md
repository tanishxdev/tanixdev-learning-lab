# Chapter 18 — Node.js with TypeScript (Professional Backend)

---

# 1. Problem (Why this chapter exists)

Till now you wrote JavaScript like:

```js id="h8k2s1"
function add(a, b) {
  return a + b;
}
```

### ❌ Problems

```text id="k3p9x2"
- No type safety
- Runtime errors
- Hard to scale large projects
```

Example bug:

```js id="x2c4m7"
add(5, "10") → "510" ❌ (unexpected)
```

---

# 2. Concept (Core Idea)

---

## 🧠 Definition — TypeScript

> TypeScript = JavaScript + **types**

---

## 🧠 Goal

Catch errors **before running code**

---

## 🧠 Key Idea

```text id="p9z3n1"
Write safe code → compile → run JS
```

---

# 3. Why TypeScript (Very Important)

---

| Feature         | JavaScript | TypeScript   |
| --------------- | ---------- | ------------ |
| Type safety     | ❌         | ✅           |
| Error detection | Runtime    | Compile time |
| Large apps      | Hard       | Easy         |

---

# 4. Setup TypeScript

---

## ▶️ Install

```bash id="c2m8w1"
npm install typescript ts-node @types/node --save-dev
```

---

## ▶️ Initialize

```bash id="z7f1q4"
npx tsc --init
```

---

# 5. Project Structure

---

```text id="y8v2d6"
backend-learning/
│
├── src/
│   └── app.ts
├── dist/
├── tsconfig.json
```

---

# 6. First TypeScript Code

---

## 📄 `app.ts`

```typescript id="r3n5k8"
// ================================
// Chapter 18 - TypeScript Basics
// ================================

// Function with types
function add(a: number, b: number): number {
  return a + b;
}

// Correct
console.log(add(5, 10));

// ❌ Error
// console.log(add(5, "10"));
```

---

## ▶️ Run

```bash id="p4k7s2"
npx ts-node src/app.ts
```

---

# 7. Types (Core Building Block)

---

## 🧠 Basic Types

```typescript id="m1x7c4"
let name: string = "Tanish";
let age: number = 21;
let isActive: boolean = true;
```

---

## 🧠 Array

```typescript id="q9z2v5"
let numbers: number[] = [1, 2, 3];
```

---

## 🧠 Object

```typescript id="w4k6p1"
let user: { name: string; age: number } = {
  name: "Tanish",
  age: 21,
};
```

---

# 8. Interfaces (VERY IMPORTANT)

---

## 🧠 Definition

> Interface defines structure of object

---

## 📄 Example

```typescript id="d8r3p9"
interface User {
  name: string;
  age: number;
}

// Use it
const user: User = {
  name: "Tanish",
  age: 21,
};
```

---

# 9. Express with TypeScript

---

## 📄 Example

```typescript id="j2p7v4"
import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript");
});
```

---

# 10. Mongoose with TypeScript

---

## 📄 Example

```typescript id="x5k8d3"
import mongoose from "mongoose";

interface IUser {
  name: string;
  age: number;
}

const userSchema = new mongoose.Schema<IUser>({
  name: String,
  age: Number,
});

const User = mongoose.model<IUser>("User", userSchema);
```

---

# 11. Compile TypeScript

---

## ▶️ Command

```bash id="v2n6f1"
npx tsc
```

---

## 🧠 Output

```text id="k3m8x2"
TS → JS → dist folder
```

---

# 12. Real Backend Thinking

---

## 🧠 Flow

```text id="q7z1p3"
TypeScript → Compile → JavaScript → Run
```

---

## 🧠 Industry Use

```text id="h4k9w2"
Large apps
Microservices
Team projects
```

---

# 13. Mini Practice (DO THIS)

---

## Tasks:

- Create User interface
- Build typed API
- Add validation using types

---

# 14. Common Mistakes

---

### ❌ Using any type

```ts id="b2x5k9"
let data: any ❌
```

---

### ❌ Ignoring types

---

### ❌ Not compiling code

---

# 15. Mental Model (VERY IMPORTANT)

```text id="z8n2c5"
TypeScript = safety layer over JS
```

---

## 🧠 Think Like This

```text id="r1k4p7"
Write → Check → Compile → Run
```

---

# 16. Final File (Clean Setup)

---

## 📄 `src/app.ts`

```typescript id="y9v3m2"
// ================================
// Chapter 18 - Final TS Setup
// ================================

import express, { Request, Response } from "express";

const app = express();

// Route
app.get("/", (req: Request, res: Response) => {
  res.send("Backend with TypeScript");
});

// Start server
app.listen(3000, () => {
  console.log("Server running...");
});
```

---

# 17. Interview Questions

1. What is TypeScript?
2. Why use TypeScript?
3. Difference between TS and JS?
4. What is interface?
5. What is type safety?
6. What is any?
7. What is tsconfig?
8. How TS compiles?
9. TS vs Java?
10. When to use TS?

---

# ✅ Final Summary (Phase 1 Complete)

---

## 🧠 You learned:

```text id="k5n2x8"
✔ Node fundamentals
✔ Express
✔ REST APIs
✔ MongoDB
✔ Authentication
✔ File uploads
✔ Advanced features
✔ Realtime (Sockets)
✔ Deployment
✔ GraphQL
✔ TypeScript
```

---

## 🚀 You can now:

```text id="v7m4k1"
✔ Build full backend
✔ Handle DB
✔ Secure APIs
✔ Deploy apps
✔ Work like real backend dev
```

---

# 🔥 WHAT NEXT (VERY IMPORTANT)

Now Phase 1 is DONE.

---
