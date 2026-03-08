# MODULE 0 → 0.2 Backend Foundations (Node.js)

# Topic 11 — FS MODULE (Node.js File System)

---

# 1. CONCEPT SUMMARY

The **fs module** in Node.js allows you to:

1. Read files
2. Write files
3. Append files
4. Delete files
5. Create and remove folders
6. Work with streams
7. Watch file changes
8. Perform asynchronous file operations safely

It is a critical foundation because:

* All RAG systems need file loading
* Agents read/write files
* Pipelines store JSON memory
* Vector DB ingestion uses fs
* Logs and audit trails require file operations

We will focus on **fs.promises**, the modern async API.

---

# 2. WHY THIS MATTERS IN GENAI ENGINEERING

This is not just “Node basics”.

FS operations are involved in:

### 1. RAG Pipelines

```
fs.readFile → chunk → embed → store
```

### 2. Agent Tools

Agents must read/write:

* code files
* context files
* memory JSON
* scratchpads
* intermediate outputs

### 3. Safety & Logging

Write logs for:

* model responses
* tool calls
* errors
* retries
* prompt failures

### 4. Model Output Storage

Storing:

* transcripts
* embeddings
* structured agent states

Mastering `fs` is required before we build:

* RAG
* Agents
* LangChain docs
* LangGraph workflow persistence
* MCP file tools

---

# 3. THEORY (Clean + Deep)

---

## 3.1 Importing FS (Promise API)

This is the recommended modern way:

```js
import { promises as fs } from "fs";
```

---

## 3.2 Reading a File

### Async (recommended)

```js
const data = await fs.readFile("./data/input.txt", "utf-8");
console.log(data);
```

### Sync (blocks event loop — avoid in AI servers)

```
const data = fs.readFileSync("./data/input.txt", "utf-8");
```

---

## 3.3 Writing a File

```
await fs.writeFile("./data/output.txt", "Hello AI");
```

Overwrites the file.

---

## 3.4 Appending to a File

```
await fs.appendFile("./logs/agent.log", "New entry\n");
```

Critical for logging and streaming.

---

## 3.5 Deleting Files

```
await fs.unlink("./temp.txt");
```

---

## 3.6 Creating Directories

```
await fs.mkdir("./data");
```

Recursive (ensures parent folders exist):

```js
await fs.mkdir("./data/chunks", { recursive: true });
```

---

## 3.7 Reading Directory Content

```js
const files = await fs.readdir("./docs");
```

---

## 3.8 Checking if a File Exists

Two correct ways:

### Option A — Try/Catch

```js
try {
  await fs.access("./config.json");
  console.log("Exists");
} catch {
  console.log("Does NOT exist");
}
```

### Option B — fs.stat

```
const stats = await fs.stat("./file.txt");
```

---

# 4. CODE EXAMPLE (Production-Ready)

Create file:

```
GenAI/src/module0-foundations/node/11-fs-module.js
```

Add:

```js
/*
   Topic: FS Module (Node.js)
   Purpose: Handle file operations used in GenAI pipelines (RAG, tools, logs).
*/

import { promises as fs } from "fs";
import path from "path";

// Helper: resolve from project root
const filePath = path.resolve("data/example.txt");

async function run() {
  // ----------------------------------------------
  // 1. Write file
  // ----------------------------------------------
  await fs.writeFile(filePath, "Hello from FS module");
  console.log("File written.");

  // ----------------------------------------------
  // 2. Read file
  // ----------------------------------------------
  const content = await fs.readFile(filePath, "utf-8");
  console.log("File content:", content);

  // ----------------------------------------------
  // 3. Append file
  // ----------------------------------------------
  await fs.appendFile(filePath, "\nAppended line.");
  console.log("File appended.");

  // ----------------------------------------------
  // 4. Read again
  // ----------------------------------------------
  const newContent = await fs.readFile(filePath, "utf-8");
  console.log("Updated content:\n", newContent);

  // ----------------------------------------------
  // 5. Create folder
  // ----------------------------------------------
  await fs.mkdir("logs", { recursive: true });
  await fs.writeFile("logs/agent.log", "Agent started...");
  console.log("Folder + log created.");

  // ----------------------------------------------
  // 6. List directory
  // ----------------------------------------------
  const files = await fs.readdir("logs");
  console.log("Files inside logs/:", files);
}

run();
```

This file demonstrates:

* read
* write
* append
* mkdir
* readdir
* path resolve usage
* logs folder creation

Exactly what real GenAI projects do.

---

# 5. REAL GENAI EXAMPLES

## Example 1 — Storing LLM conversation memory

```js
await fs.writeFile("./memory.json", JSON.stringify(memory, null, 2));
```

---

## Example 2 — Storing RAG embeddings

```js
await fs.writeFile(`./embeddings/${doc.id}.json`, JSON.stringify(doc));
```

---

## Example 3 — Agent Logging

```
await fs.appendFile("./logs/agent.log", `[${Date.now()}] Tool used: search\n`);
```

---

# 6. INTUITION SUMMARY

Node’s `fs` module is the bridge between your GenAI logic and the local system.

If you can:

* read files
* write memory
* load docs
* store embeddings
* manage logs
* persist agent state

you can build real AI engineering systems.

RAG, agents, LangChain, LangGraph, MCP → all depend on `fs`.

---

# 7. PRACTICE QUESTIONS

1. Difference between readFile and readFileSync?
2. Why should servers avoid sync FS methods?
3. Write code to check if logs folder exists; if not, create it.
4. How do you append data to a file?
5. How would you store LLM-generated JSON on disk?

---
