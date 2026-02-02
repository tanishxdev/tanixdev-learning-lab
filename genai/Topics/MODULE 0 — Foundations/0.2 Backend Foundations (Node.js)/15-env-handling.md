# MODULE 0 → 0.2 Backend Foundations (Node.js)

# Topic 15 — ENV Handling (dotenv, config structure)

Environment variable management is **mandatory** for any real GenAI backend because you will work with:

* LLM API keys
* Vector DB keys
* OAuth secrets
* Database credentials
* Deployment configs
* Logging configurations
* Model runtime settings

If ENV handling is wrong, your entire backend becomes unsafe and non-deployable.

Let's build this professionally.

---

# Topic 15 — ENV HANDLING

Using: dotenv + environment structure + secure patterns

---

# 1. CONCEPT SUMMARY

ENV handling includes:

1. Storing secrets
2. Loading `.env` safely
3. Avoiding commits of secrets
4. Creating config modules
5. Overriding env per environment (dev, prod)
6. Ensuring safe process exit on missing variables

This is foundational before we build:

* Gemini client
* RAG pipelines
* Agent config
* Multi-model architecture
* Deployment

---

# 2. WHY ENV HANDLING MATTERS IN GENAI ENGINEERING

### 1. LLM API Keys must never be hardcoded

Bad:

```js
const ai = new GoogleGenAI("hardcoded_key");
```

Good:

```js
process.env.GEMINI_API_KEY;
```

### 2. Backend must fail gracefully if keys are missing

Example:

```
❌ GEMINI_API_KEY missing — shutting down server
```

### 3. Different environments use different keys

```
.env.development
.env.production
```

### 4. Config must remain modular and consistent

(you will create a proper `config/` folder)

### 5. Prevent accidental leaks in logs, commits, repos

---

# 3. THEORY (Simple + Deep)

---

## 3.1 Installing dotenv

```
npm install dotenv
```

---

## 3.2 Creating `.env` file at project root

```
GEMINI_API_KEY=your_key_here
PORT=3000
LOG_LEVEL=debug
```

---

## 3.3 Loading ENV correctly in ES Modules

Create:

```
src/config/env.js
```

Inside:

```js
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load root .env
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
```

This guarantees `.env` loads even in nested folders.

---

## 3.4 Validating Required Variables

Create:

```
src/config/validateEnv.js
```

```js
export function validateEnv() {
  const required = ["GEMINI_API_KEY", "PORT"];

  required.forEach((k) => {
    if (!process.env[k]) {
      console.error(`❌ Missing ENV variable: ${k}`);
      process.exit(1);
    }
  });

  console.log("ENV validation successful.");
}
```

---

## 3.5 Central Config Module

Create:

```
src/config/index.js
```

```js
import "./env.js";          // load .env
import { validateEnv } from "./validateEnv.js";

validateEnv();

export const config = {
  port: process.env.PORT,
  geminiKey: process.env.GEMINI_API_KEY,
  logLevel: process.env.LOG_LEVEL || "info"
};
```

Now entire app uses:

```js
import { config } from "./config/index.js";
```

---

# 4. CODE EXAMPLE (Production-Ready)

Create file:

```
GenAI/src/module0-backend/15-env-handling.js
```

Add:

```js
/*
   Topic: ENV Handling (Node.js)
   Purpose: Load and validate environment variables for GenAI apps.
*/

import express from "express";
import { config } from "../../config/index.js";   // auto loads .env + validates

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    port: config.port,
    geminiKeyLoaded: !!config.geminiKey
  });
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
```

Run:

```
node src/module0-backend/15-env-handling.js
```

Expected:

```
ENV validation successful.
Server running on port 3000
```

---

# 5. REAL GENAI EXAMPLES

### Example 1 — Gemini Client

```
const ai = new GoogleGenAI({ apiKey: config.geminiKey });
```

### Example 2 — RAG Service Configuration

```
vector_db_url = process.env.VECTOR_DB
```

### Example 3 — Agent Behavior Flags

```
AGENT_DEBUG=true
AGENT_MAX_DEPTH=5
```

### Example 4 — Multi-model architecture

```
DEFAULT_MODEL=gemini-pro
FAST_MODEL=gemini-1.5-flash
```

---

# 6. INTUITION SUMMARY

ENV handling protects:

* Secrets
* Model keys
* Config
* Deployment settings
* Backend stability

It also prevents accidental production crashes.

With structured env loading + validation, your backend becomes robust and deployment-ready for real GenAI systems.

---

# 7. PRACTICE QUESTIONS

1. Why should secrets never be hardcoded?
2. What happens if `.env` is missing?
3. Why validate env variables at startup?
4. How do you load `.env` in ES modules?
5. How would you store different keys for dev + prod?

---
