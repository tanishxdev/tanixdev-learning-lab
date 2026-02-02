# Topic 24 Node.js with TypeScript (Setup, Configuration, and Express Integration)

---

### **Concept**

**What is TypeScript (TS)?**

* TypeScript is a **superset of JavaScript** that adds **static typing**, **interfaces**, and **compile-time checks**.
* It helps prevent runtime errors and makes large Node.js projects easier to scale and maintain.

In short:
**JavaScript = dynamic** (errors at runtime)
**TypeScript = strongly typed** (errors at compile-time)

---

### **Why Use TypeScript in Node.js?**

| Feature                  | Explanation                                       |
| ------------------------ | ------------------------------------------------- |
| **Type safety**          | Detect bugs before running code                   |
| **Better IntelliSense**  | Auto-complete & type hints in IDE                 |
| **Cleaner architecture** | Use interfaces, enums, generics                   |
| **Maintainability**      | Large teams can scale better                      |
| **Supports modern JS**   | Compiles to compatible JS for older Node versions |

---

### **How It Works**

1. You write `.ts` files (TypeScript code).
2. TypeScript **transpiles** them into `.js` files using `tsc`.
3. Node executes the generated `.js` files.

---

### **Folder Setup**

```
ts-node-demo/
│
├── src/
│   ├── app.ts
│   └── routes/
│       └── userRoutes.ts
├── dist/                (compiled JS)
├── package.json
└── tsconfig.json
```

---

### **Step 1: Initialize Project**

```bash
npm init -y
npm install express
npm install -D typescript @types/node @types/express ts-node nodemon
```

---

### **Step 2: Configure TypeScript**

**File:** `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

**Explanation:**

| Option            | Meaning                                |
| ----------------- | -------------------------------------- |
| `rootDir`         | Where TS source files are located      |
| `outDir`          | Output directory for compiled JS       |
| `strict`          | Enables strict type checking           |
| `esModuleInterop` | Allows `import express from "express"` |
| `skipLibCheck`    | Speeds up compilation                  |

---

### **Step 3: Setup Express App**

**File:** `src/app.ts`

```ts
// ===========================
// Basic Express App in TypeScript
// ===========================

import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript + Node.js!");
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

### **Step 4: Compile and Run**

**Option 1 (Manual Compile):**

```bash
npx tsc
node dist/app.js
```

**Option 2 (Auto Compile with ts-node):**

```bash
npx ts-node src/app.ts
```

**Option 3 (Hot Reload with nodemon):**
Add to `package.json`:

```json
"scripts": {
  "start": "npx ts-node src/app.ts",
  "dev": "nodemon --exec ts-node src/app.ts"
}
```

Then run:

```bash
npm run dev
```

---

### **Step 5: Add Typed Routes Example**

**File:** `src/routes/userRoutes.ts`

```ts
// ===========================
// Example: Routes with Types
// ===========================

import { Router, Request, Response } from "express";

const router = Router();

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  { id: 1, name: "Tanish", email: "tanish@example.com" },
  { id: 2, name: "Ravi", email: "ravi@example.com" },
];

// GET all users
router.get("/", (req: Request, res: Response) => {
  res.json(users);
});

// GET user by ID
router.get("/:id", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// POST create new user
router.post("/", (req: Request, res: Response) => {
  const newUser: User = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

export default router;
```

---

**Integrate in `src/app.ts`:**

```ts
import userRoutes from "./routes/userRoutes";

app.use("/api/users", userRoutes);
```

---

### **Test in Postman**

| Method | Endpoint       | Body                                                |
| ------ | -------------- | --------------------------------------------------- |
| GET    | `/api/users`   | -                                                   |
| GET    | `/api/users/1` | -                                                   |
| POST   | `/api/users`   | `{ "name": "Aryan", "email": "aryan@example.com" }` |

**Response:**

```json
{
  "id": 3,
  "name": "Aryan",
  "email": "aryan@example.com"
}
```

---

### **Step 6: Using Types and Interfaces**

#### Example: Custom Type for Request Body

```ts
interface RegisterBody {
  name: string;
  email: string;
  password: string;
}

app.post("/register", (req: Request<{}, {}, RegisterBody>, res: Response) => {
  const { name, email, password } = req.body;
  res.json({ message: `Registered user ${name}` });
});
```

This ensures compile-time safety — if you forget a required field, TypeScript will warn you **before running**.

---

### **Mini Project: Typed REST API**

**Goal:** Build a small Express + TS project for managing books.

**Folder:**

```
book-api-ts/
│
├── src/
│   ├── app.ts
│   ├── routes/
│   │   └── bookRoutes.ts
│   └── models/
│       └── book.ts
├── tsconfig.json
└── package.json
```

**File:** `src/models/book.ts`

```ts
export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}
```

**File:** `src/routes/bookRoutes.ts`

```ts
import { Router, Request, Response } from "express";
import { Book } from "../models/book";

const router = Router();
let books: Book[] = [];

router.post("/", (req: Request, res: Response) => {
  const book: Book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
  };
  books.push(book);
  res.status(201).json(book);
});

router.get("/", (req: Request, res: Response) => {
  res.json(books);
});

export default router;
```

**Integrate in `app.ts`:**

```ts
import bookRoutes from "./routes/bookRoutes";
app.use("/api/books", bookRoutes);
```

Run:

```bash
npm run dev
```

**Test Endpoints:**

* `POST /api/books` → add a book
* `GET /api/books` → fetch all books

---

### **Dependencies**

| Package            | Purpose                         |
| ------------------ | ------------------------------- |
| **express**        | Web server                      |
| **typescript**     | Type checker & transpiler       |
| **@types/node**    | Node.js type definitions        |
| **@types/express** | Express type definitions        |
| **ts-node**        | Run TS directly                 |
| **nodemon**        | Auto-restart during development |

---

### **Notes**

* All `.ts` files compile to `.js` → run only JS in production.
* Always keep your `src` and `dist` folders separate.
* Use `strict` mode for catching type errors early.
* For larger apps → use interfaces for models & DTOs.
* Combine with Mongoose or Prisma for type-safe database access.

---

### **Quick Summary Table**

| Concept       | Command / Code                      | Description          |
| ------------- | ----------------------------------- | -------------------- |
| Init TS       | `npx tsc --init`                    | Create config file   |
| Compile       | `npx tsc`                           | Generate JS files    |
| Run           | `npx ts-node src/app.ts`            | Run TS directly      |
| Hot Reload    | `nodemon --exec ts-node src/app.ts` | Auto restart         |
| Strict Typing | `strict: true`                      | Enforces type checks |

---