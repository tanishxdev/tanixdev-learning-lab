# MODULE 0 → 0.2 Backend Foundations (Node.js)

# Topic 12 — Express.js Basics

Express.js is the foundation of almost every Node.js backend.
In GenAI engineering, you will build:

* API servers for LLM tools
* RAG endpoints
* embedding endpoints
* agent execution endpoints
* MCP servers
* LangGraph runtimes
* observability dashboards

So Express.js is essential.

We go step-by-step, clean and deep.

---

# Topic 12 — Express.js Basics

---

# 1. CONCEPT SUMMARY

Express.js is a minimal backend framework used to:

* create HTTP servers
* handle routes
* parse incoming data
* respond to clients
* connect middleware
* build APIs

You will use Express.js for:

* GenAI agent API
* file upload for RAG
* streaming responses
* tool-calling endpoints
* authentication wrappers
* dashboards for model cost + logs

---

# 2. WHY EXPRESS MATTERS IN GENAI ENGINEERING

### 1. Your entire GenAI system will expose APIs.

Example:

```
POST /api/ask-gemini
POST /api/embedding
POST /api/rag/query
```

### 2. Agents need backend endpoints to run tools

### 3. RAG requires:

* uploading docs
* preprocessing
* embedding
* storing chunks

### 4. LangChainJS & LangGraph often run inside Express servers.

### 5. Express gives:

* request validation
* error handling
* security layers
* async LLM call handling

You cannot skip this.

---

# 3. THEORY (Simple + Deep)

---

## 3.1 Install Express

```
npm install express
```

---

## 3.2 Basic Server

```js
import express from "express";

const app = express();
const PORT = 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## 3.3 Basic Route

```js
app.get("/", (req, res) => {
  res.send("GenAI Server Running");
});
```

---

## 3.4 JSON Body Handling

Very important for passing LLM prompts.

```js
app.use(express.json());
```

---

## 3.5 POST Route Example

```js
app.post("/echo", (req, res) => {
  res.json({
    received: req.body
  });
});
```

---

## 3.6 Async Route (LLM-like behavior)

```js
app.post("/ask", async (req, res) => {
  const { prompt } = req.body;

  // Fake AI processing
  const reply = `AI Response to: ${prompt}`;

  res.json({ reply });
});
```

---

# 4. CODE EXAMPLE (Full Starter API)

Create file:

```
GenAI/src/module0-foundations/node/12-express-basics.js
```

Add:

```js
/*
   Topic: Express.js Basics
   Purpose: Build simple API foundation for GenAI systems.
*/

import express from "express";

const app = express();
const PORT = 3001;

// ----------------------------------------------
// 1. Enable JSON parsing
// ----------------------------------------------
app.use(express.json());


// ----------------------------------------------
// 2. Basic GET Route
// ----------------------------------------------
app.get("/", (req, res) => {
  res.json({ message: "GenAI Backend Running" });
});


// ----------------------------------------------
// 3. Echo POST (useful for testing clients)
// ----------------------------------------------
app.post("/echo", (req, res) => {
  res.json({
    received: req.body
  });
});


// ----------------------------------------------
// 4. Example: AI-like endpoint
// ----------------------------------------------
app.post("/ask", async (req, res) => {
  const { prompt } = req.body;

  // In real project: call Gemini here
  const mockResponse = `You asked: ${prompt}`;

  res.json({
    answer: mockResponse
  });
});


// ----------------------------------------------
// Start server
// ----------------------------------------------
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
```

---

# 5. REAL GENAI EXAMPLES

## Example 1 — Call Gemini API inside route

```js
app.post("/gemini", async (req, res) => {
  const { prompt } = req.body;

  const model = ai.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);

  res.json({ output: result.response.text() });
});
```

---

## Example 2 — RAG endpoint

```
POST /rag/query
Body: { question: "What is vector search?" }
```

---

## Example 3 — Embedding Endpoint

```
POST /embed
Body: { text: "Hello world" }
```

---

# 6. INTUITION SUMMARY

Express is the backbone of Node.js backend work.

It lets you:

* Receive prompts from UI
* Send them to Gemini
* Return AI-generated responses
* Build RAG services
* Build agent tool APIs
* Build entire GenAI backend

It is lightweight, simple, but powerful.

---

# 7. PRACTICE QUESTIONS

1. What does `express.json()` do?
2. Difference between GET and POST?
3. Why must we use “async” inside API routes?
4. What happens if server does not handle JSON properly?
5. Write a POST route `/summarize` that receives `{text}` and returns `"Summary: ..."`

---
