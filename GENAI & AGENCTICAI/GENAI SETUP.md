# 🔁 GENAI SETUP — FULL RETEACH (Gemini + Groq + Switching Mindset)

You are doing **real GenAI engineering**, not tutorial copy-paste.
So the setup must answer **3 questions**:

1. Where does the API client live?
2. How do I switch providers safely?
3. How do I write topic files without breaking imports?

We’ll answer all three.

---

## 1️⃣ Project Architecture (This is the backbone)

Your **actual app root** is:

```
genai/
└── src/
```

Everything that **runs or imports code** lives under `src`.

### Final mental model

```
genai
└── src
    ├── utils        ← ALL AI CLIENTS LIVE HERE
    │   ├── geminiClient.js
    │   └── groqClient.js
    │
    ├── Topics       ← ALL LEARNING FILES
    │   └── MODULE 1 — GenAI Basics
    │       └── 21-llm-basic.js
    │
    └── run.js (optional runner later)
```

This structure is **correct and scalable**.

---

## 2️⃣ Environment Variables (One `.env`, many providers)

Your `.env` at project root:

```env
GEMINI_API_KEY=...
GROQ_API_KEY=...
```

Rule:

> `.env` is loaded once per client
> Clients never hardcode keys
> Files never read `process.env` directly

---

## 3️⃣ Gemini Client (Secondary / Optional)

You already built this correctly.

### `src/utils/geminiClient.js`

```js
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, "../..", ".env");

dotenv.config({ path: envPath });

if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY missing");
  process.exit(1);
}

const gemini = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default gemini;
```

Use Gemini **only when needed** (quota, model comparison, multimodal).

---

## 4️⃣ Groq Client (Primary — YOUR DEFAULT)

This is now your **main learning engine**.

### `src/utils/groqClient.js`

```js
import Groq from "groq-sdk";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, "../..", ".env");

dotenv.config({ path: envPath });

if (!process.env.GROQ_API_KEY) {
  console.error("❌ GROQ_API_KEY missing");
  process.exit(1);
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default groq;
```

This is **production-grade**.

---

## 5️⃣ Import Rule (THIS is what you just fixed)

You discovered the **correct rule yourself** — that’s important.

From any topic file inside:

```
src/Topics/...
```

You will import like this:

```js
import groq from "../../../src/utils/groqClient.js";
```

### Why this works (lock this)

* You anchor imports to **`src/`**
* You stop guessing relative depth
* Node resolves correctly every time

> This is now your **standard pattern**.
> We will **never change it again**.

---

## 6️⃣ Minimal Working LLM Call (Groq – Canonical)

This is now your **reference example**.

```js
import groq from "../../../src/utils/groqClient.js";

async function run() {
  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "user",
        content: "Explain binary search in one sentence",
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

await run();
```

### What this represents conceptually

```
Prompt
 → tokens
 → probabilities
 → sampled tokens
 → text output
 → STOP
```

Pure **LLM behavior**.

---

## 7️⃣ How Switching Providers Works (Mindset)

You are NOT restarting learning when you switch.

You are only swapping **transport layer**.

### Concept layer (unchanged)

* LLM
* tokens
* context
* sampling
* RAG
* agents

### Provider layer (swappable)

* Gemini
* Groq
* OpenAI

That’s why your roadmap is **provider-agnostic**.

---

## 8️⃣ When YOU will use Gemini vs Groq

### Use **Groq (default)** for:

* all fundamentals
* prompt experiments
* agents
* RAG logic
* speed + free tier

### Use **Gemini (optional)** for:

* vision
* multimodal
* comparison
* production-like quotas later

---

## 9️⃣ What we will do going forward (IMPORTANT)

From now on:

* All **MODULE 1–11** examples → **Groq**
* Same concepts
* Same structure
* Same depth
* Same roadmap order

I will **not** re-explain Gemini unless you explicitly ask.

---

## 🔒 Final Lock-In Statement

> **Groq is your execution engine.
> Concepts are provider-agnostic.
> Setup is now stable.
> We move forward without touching this again.**
