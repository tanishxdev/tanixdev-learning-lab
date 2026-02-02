# MODULE 0 → 0.2 Backend Foundations (Node.js)

# Topic 16 — API Clients (Reusable HTTP Wrappers)

This topic is extremely important because **every GenAI backend depends on external APIs**:

* Gemini API
* OpenAI API
* Groq API
* Vector Databases (Pinecone, Chroma serverless, Weaviate, Qdrant)
* Embedding endpoints
* Internal microservices
* Logging / Analytics services

If your API calls are scattered everywhere in your codebase, the system becomes:

* unmaintainable
* hard to debug
* insecure
* impossible to scale
* impossible to apply retries or rate limits

So we build **clean, reusable API client modules**.

---

# Topic 16 — API CLIENTS

(Building reusable, modular HTTP wrappers for GenAI)

---

# 1. CONCEPT SUMMARY

An API client is a module that handles all communication with an external service.
It:

* sends HTTP requests
* handles timeouts
* handles retries
* handles errors
* sets headers
* manages authentication
* exposes simple reusable functions

Example:

```js
const result = await geminiClient.generate(prompt);
```

You don't rewrite fetch/axios logic everywhere.

---

# 2. WHY API CLIENTS MATTER IN GENAI ENGINEERING

### 1. You will call LLM APIs many times

Instead of repeating:

```js
await axios.post("https://api.google.com/generate...", {...})
```

You write once:

```js
geminiClient.generate(prompt);
```

### 2. Retry logic must be centralized

LLM calls fail often (network, rate limit, timeout).

### 3. Cost logging

You want to log token usage per call.

### 4. Switching models easily

You should be able to switch:

```
Gemini → OpenAI → Groq
```

by modifying only one client file.

### 5. Cleaner agent and RAG code

Agents shouldn’t know how API calls work internally.

---

# 3. THEORY (Simple + Deep)

We will build clients using **Axios** because:

* supports interceptors
* better errors
* easier retries
* better debugging
* widely used in Node.js backend engineering

---

## 3.1 Create a Reusable Axios Instance

Example:

```js
import axios from "axios";

const client = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000,
  headers: {
    "Authorization": `Bearer ${process.env.API_KEY}`
  }
});
```

---

## 3.2 Add Retry Logic (basic version)

```js
client.interceptors.response.use(
  res => res,
  async error => {
    if (error.response?.status === 429) {
      await new Promise(r => setTimeout(r, 1000));
      return client(error.config); // retry request
    }
    throw error;
  }
);
```

---

## 3.3 Wrapper Functions

Instead of writing axios calls directly everywhere:

```js
export async function getUser(id) {
  return client.get(`/users/${id}`);
}
```

---

# 4. CODE EXAMPLE (Production-Level)

Create:

```
GenAI/src/module0-backend/api/genericClient.js
```

Add:

```js
/*
   Topic: API Clients
   Purpose: Create reusable HTTP client for GenAI pipelines.
*/

import axios from "axios";
import { config } from "../../config/index.js";  // uses your env loader

// ----------------------------------------------
// 1) Create Axios Instance
// ----------------------------------------------
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json"
  }
});

// ----------------------------------------------
// 2) Retry interceptor for rate limits (429)
// ----------------------------------------------
api.interceptors.response.use(
  res => res,
  async err => {
    if (err.response?.status === 429) {
      console.warn("Rate limit hit. Retrying in 1 second...");
      await new Promise(r => setTimeout(r, 1000));
      return api(err.config); // retry request
    }

    return Promise.reject(err);
  }
);

// ----------------------------------------------
// 3) Wrapper functions (clean use in routes)
// ----------------------------------------------
export async function getPost(id) {
  const res = await api.get(`/posts/${id}`);
  return res.data;
}

export async function createPost(data) {
  const res = await api.post("/posts", data);
  return res.data;
}

export default api;
```

---

# 5. USING THE CLIENT IN A ROUTE

Create:

```
src/module0-backend/16-api-client-demo.js
```

```js
import express from "express";
import { getPost, createPost } from "./api/genericClient.js";

const app = express();
app.use(express.json());

app.get("/post/:id", async (req, res) => {
  const post = await getPost(req.params.id);
  res.json(post);
});

app.post("/post", async (req, res) => {
  const result = await createPost(req.body);
  res.json(result);
});

app.listen(3004, () => {
  console.log("API Client Demo running on port 3004");
});
```

Run:

```
node src/module0-backend/16-api-client-demo.js
```

---

# 6. REAL GENAI CLIENT EXAMPLES

## Example 1 — Gemini Client Wrapper

```js
export async function generateText(prompt) {
  const model = ai.getGenerativeModel({ model: "gemini-pro" });
  const res = await model.generateContent(prompt);
  return res.response.text();
}
```

## Example 2 — Embeddings Client

```js
export async function embed(text) {
  return await embeddingApi.embedText(text);
}
```

## Example 3 — RAG Vector DB Client

```js
export async function searchVector(embedding) {
  return qdrantClient.search("collection", embedding);
}
```

---

# 7. INTUITION SUMMARY

API clients make your system:

* modular
* reusable
* testable
* maintainable
* ready for scaling
* safe for production

Instead of mixing API logic inside routes, you keep all low-level HTTP logic inside client modules.

Every serious GenAI backend uses this pattern.

---

# 8. PRACTICE QUESTIONS

1. Why wrap axios in a custom client instead of calling it directly in routes?
2. How does an interceptor help with retries?
3. How would you handle authentication per request?
4. How would you structure a Gemini client inside `/utils`?
5. Why should API clients be independent of Express?

---