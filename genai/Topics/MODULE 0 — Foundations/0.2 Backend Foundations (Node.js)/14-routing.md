

# MODULE 0 → 0.2 Backend Foundations (Node.js)

# Topic 14 — Routing (Express Router)

This topic teaches how to structure backend routes **professionally**, which is critical for GenAI projects.

Your GenAI backend will grow to include:

* /ask
* /rag
* /embed
* /tools
* /agents
* /memory
* /logs
* /health

Putting everything in a single `app.js` becomes unmanageable.

So we learn **Express Router**.

---

# Topic 14 — ROUTING (Express Router)

---

# 1. CONCEPT SUMMARY

Routing defines **how your backend organizes API paths**.

Basic route (already used):

```
app.get("/ask", handler)
```

But when the backend grows, you split routes into **modules**:

```
routes/
  ask.routes.js
  rag.routes.js
  embed.routes.js
  agent.routes.js
```

Each file contains:

```
import { Router } from "express";
const router = Router();
router.post("/", ...);
export default router;
```

Then mounted like:

```
app.use("/ask", askRoutes);
```

This keeps your AI backend clean and scalable.

---

# 2. WHY ROUTING MATTERS IN GENAI ENGINEERING

### 1. Agents need multiple endpoints

Example:

```
POST /agent/run
POST /agent/tools
POST /agent/state
```

### 2. RAG pipelines need multiple routes

Example:

```
POST /rag/upload
POST /rag/query
GET  /rag/chunks
```

### 3. Model tools need their own endpoints

Example:

```
POST /tools/summarize
POST /tools/extract
```

### 4. Logging & Observability need dedicated routes

Example:

```
GET /logs
GET /health
GET /metrics
```

### 5. Code stays clean

You avoid huge 500-line server files.

Routing is required before building:

* Tool calling
* Agents
* RAG
* LangChain/LangGraph servers
* MCP tools

---

# 3. THEORY (Simple + Clean)

---

## 3.1 Create a Router

```js
import { Router } from "express";
const router = Router();
```

---

## 3.2 Add routes into router

```js
router.get("/", (req, res) => {
  res.send("Ask endpoint");
});
```

---

## 3.3 Export router

```js
export default router;
```

---

## 3.4 Import router inside main server

```js
import askRoutes from "./routes/ask.routes.js";

app.use("/ask", askRoutes);
```

Now:

```
GET /ask/       → askRoutes router
POST /ask/run   → askRoutes router
```

---

# 4. CODE STRUCTURE (Professional GenAI Style)

Create folder:

```
GenAI/src/module0-backend/routes/
```

Now add two files:

## File 1: ask.routes.js

```js
import { Router } from "express";

const router = Router();

// POST /ask/
router.post("/", (req, res) => {
  const { prompt } = req.body || {};

  if (!prompt) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  res.json({
    answer: `AI response for: ${prompt}`
  });
});

export default router;
```

---

## File 2: echo.routes.js

```js
import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  res.json({ received: req.body });
});

export default router;
```

---

## File 3 (Main Server): server.js

```js
import express from "express";
import askRoutes from "./routes/ask.routes.js";
import echoRoutes from "./routes/echo.routes.js";

const app = express();
app.use(express.json());

// Mount routers
app.use("/ask", askRoutes);
app.use("/echo", echoRoutes);

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
```

---

# 5. HOW ROUTING WORKS INTERNALLY (Mental Model)

```
app.use("/ask", askRoutes)
```

This means:

Any request starting with “/ask”
goes into askRoutes.

So:

```
POST /ask       → askRoutes POST "/"
POST /ask/run   → askRoutes POST "/run"
```

Routers act like **mini-express apps**.

This keeps your backend modular.

---

# 6. REAL GENAI EXAMPLES

## Example 1 — RAG Router

```
routes/rag.routes.js
  POST /upload
  POST /query
  GET  /chunks
```

## Example 2 — Agent Router

```
routes/agent.routes.js
  POST /run
  POST /tool
  GET  /state
```

## Example 3 — Model Router

```
routes/model.routes.js
  POST /generate
  POST /embed
  POST /vision
```

This is exactly how commercial AI APIs are structured.

---

# 7. INTUITION SUMMARY

Routing keeps your server clean, modular, and scalable.

Instead of one giant file, you split features into isolated route modules.

Each AI component (agent, RAG, embeddings, tools) gets its own router file.

This is required for building advanced GenAI backends.

---

# 8. PRACTICE QUESTIONS

1. What is a Router in Express?
2. Why use routers instead of one giant server.js?
3. How do you mount a router on `/ask`?
4. How does `router.post("/", ...)` map to actual URL?
5. Create a router with routes: `/summary`, `/keywords`.

---