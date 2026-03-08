# Prompt Playground — A Structured GenAI Learning & Experimentation Tool

## Overview

**Prompt Playground** is a **CLI-based GenAI experimentation tool** built using **Node.js + Groq**.

Its goal is **not** to build an app UI, chatbot, or agent.

Its goal is to help you **understand how LLMs actually behave** by letting you:

* experiment with different prompt strategies
* compare outputs side-by-side
* observe hallucinations clearly
* learn prompt engineering *before* frameworks
* debug GenAI systems like a real engineer

This project is intentionally **small, modular, and explicit**.

---

## Why This Project Exists (The Real Problem)

Most people learning GenAI:

* copy prompts
* rely on UI tools
* jump straight to LangChain
* think models “understand” questions

That creates **false confidence**.

### Core problems beginners face:

1. They don’t see hallucinations clearly
2. They don’t understand *why* prompts fail
3. They mix safety, prompting, execution, and logic together
4. They don’t know where bugs come from
5. They never build a “prompt system” from scratch

**Prompt Playground exists to fix that.**

---

## What This Project Is (And Is Not)

### It **IS**

* a learning tool
* a prompt experimentation system
* a clean GenAI architecture reference
* a CLI-driven internal tool (realistic)
* provider-agnostic (Groq now, others later)

### It is **NOT**

* a chatbot
* a frontend app
* a LangChain replacement
* an agent framework
* a production SaaS

This distinction is important.

---

## Tech Stack

| Layer        | Technology                 | Why                            |
| ------------ | -------------------------- | ------------------------------ |
| Runtime      | Node.js (ESM)              | Simple, explicit async model   |
| LLM Provider | Groq                       | Fast, cheap, OpenAI-compatible |
| CLI Input    | readline-sync              | Synchronous, simple            |
| Validation   | Custom logic + JSON checks | Learning clarity               |
| Config       | dotenv                     | Safe secrets handling          |

---

## Environment & LLM Setup (IMPORTANT)

This part was **missing earlier**, so here it is clearly.

---

### 1. Install dependencies

```bash
npm install
```

---

### 2. Create `.env` file (project root)

```env
GROQ_API_KEY=your_real_groq_api_key_here
```

Never hardcode API keys.

---

### 3. Groq Client Setup (Single Source of Truth)

**File:**
`src/utils/groqClient.js`

```js
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.GROQ_API_KEY) {
  throw new Error("Missing GROQ_API_KEY in .env");
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default groq;
```

### Why this file exists

* isolates provider logic
* keeps API key handling in one place
* makes switching providers easy later
* prevents key leaks

No other file should import `groq-sdk` directly.

---

### 4. LLM Execution Wrapper

**File:**
`src/utils/executeLLM.js`

```js
import groq from "./groqClient.js";

export default async function executeLLM({ prompt, temperature, model }) {
  if (!prompt || typeof prompt !== "string") {
    throw new Error("executeLLM: prompt must be a non-empty string");
  }

  const res = await groq.chat.completions.create({
    model,
    temperature,
    messages: [{ role: "user", content: prompt }],
  });

  return res.choices[0].message.content;
}
```

### Why this abstraction exists

* isolates LLM calls
* makes retries / logging easy later
* avoids prompt logic inside API calls
* helps debugging async failures

---

## Project Structure (High-Level)

```
playground/
├── analysis/     → output inspection & validation
├── logs/         → execution logs (future)
├── modes/        → prompt strategies
├── safety/       → input filtering & rewriting
├── cli.js        → user input
├── compareModes.js
├── runner.js     → orchestrator
├── index.js      → entry point
```

Each folder has **one responsibility only**.

---

## Execution Flow (Critical Understanding)

When you run:

```bash
npm run playground
```

The system flows like this:

```
CLI input
   ↓
Safety rewrite
   ↓
Prompt mode selection
   ↓
Prompt preparation
   ↓
LLM execution (Groq)
   ↓
Output analysis
   ↓
Console output
```

No hidden logic.
No magic.

---

## CLI Input Layer

**File:**
`playground/cli.js`

### Responsibilities

* collect user input
* normalize modes (case-insensitive)
* fail early on invalid input

This is where **human mistakes are handled**, not deeper in the system.

---

## Prompt Modes (Core Learning Tool)

**Folder:**
`playground/modes/`

Each file represents **one prompting strategy**.

| Mode        | Purpose                |
| ----------- | ---------------------- |
| normal      | baseline, no structure |
| instruction | directive style        |
| role        | persona anchoring      |
| json        | structured output      |
| fewShot     | pattern learning       |
| multiStep   | step-by-step control   |

Each mode exports:

```js
prepare(prompt) → string
```

No LLM calls here.
Only **prompt shaping**.

---

## Why Modes Are Separate Files

Because:

* prompt strategies must be isolated
* mixing strategies creates confusion
* debugging becomes impossible
* extension becomes messy

This mirrors **real GenAI systems**.

---

## Safety Layer

**Folder:**
`playground/safety/`

### rewrite.js

* sanitizes dangerous prompts
* rewrites unsafe input
* keeps LLM execution pure

Safety happens **before** prompting.

---

## Side-by-Side Comparison

**File:**
`playground/compareModes.js`

This is the **most important learning feature**.

Same prompt → all modes → different outputs.

This is how you:

* see hallucinations
* understand ambiguity
* compare structure vs meaning
* learn why RAG exists

---

## Analysis Layer

**Folder:**
`playground/analysis/`

### outputAnalyzer.js

* basic output validation
* later used for scoring
* teaches evaluation mindset

GenAI systems must **inspect outputs**, not trust them.

---

## Runner (The Brain)

**File:**
`playground/runner.js`

This file:

* coordinates everything
* contains no business logic
* is intentionally boring

That’s correct architecture.

---

## Bugs You Faced (And Why They Happened)

You encountered:

* `input is not defined`
* `prompt must be non-empty`
* `[object Promise]` issues
* wrong RAG meaning

### Why these bugs were valuable

They taught:

* async discipline
* data flow clarity
* early validation importance
* LLM ambiguity reality

This project **made bugs visible**, not hidden.

---

## Why RAG Hallucinated (Key Lesson)

When you asked:

> “what is RAG”

The model answered:

> Red Amber Green

That was **correct behavior** for an LLM.

Because:

* LLMs predict probability
* not intent
* not truth

This is why **Retrieval-Augmented Generation exists**.

The playground exposed this clearly.

---

## How a New Learner Should Use This Repo

1. Run playground
2. Use same prompt across modes
3. Observe differences
4. Change only one variable at a time
5. Read code after seeing behavior
6. Never trust first output

---

## What This Project Prepares You For

After this:

* LangChain will make sense
* RAG will feel necessary
* Agents won’t feel magical
* Prompt bugs will be obvious
* API failures won’t scare you

This is **foundation work**.

---

## Final Truth (Memorize This)

> LLMs don’t answer questions.
> They complete text based on probability.
> Engineering is about controlling that probability.

---
