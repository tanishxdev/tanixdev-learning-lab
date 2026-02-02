# 1 What problem RAG actually solves (real reason)

### LLM problem

LLMs:

• are frozen at training time
• hallucinate confidently
• don’t know your private data
• can’t fetch fresh info

Example:

```
"Explain my company’s leave policy"
```

LLM reply (without RAG):

hallucinated policy
outdated info
confident nonsense

---

### RAG solution (definition)

RAG = Retrieve relevant data first, then Generate answer using that data.

Not magic. Just search + prompt injection done correctly.

---

# 2 Core RAG architecture (non-negotiable parts)

A real RAG system ALWAYS has these 5 components:

```
1. Data source
2. Chunking strategy
3. Embeddings model
4. Vector database
5. Prompt assembly + generation
```

If any is weak → RAG fails.

---

# 3 Step-by-step RAG implementation (high level)

Logical steps first, then internals.

---

## STEP 1 — Ingest data (once or periodically)

### Data examples

• PDFs
• Docs
• Markdown
• DB rows
• APIs

Example:

```
company_policies.pdf
```

---

## STEP 2 — Chunk the data (CRITICAL)

### Why chunking exists

LLMs have context limits.

You cannot send 200 pages.

So you break data into:

```
small, meaningful text chunks
```

---

### Typical chunk sizes

```
300–800 tokens
overlap: 50–150 tokens
```

Why overlap?

To avoid cutting meaning mid-sentence.

---

### Example chunk

```
Chunk 1:
"Employees are entitled to 24 paid leaves annually..."

Chunk 2:
"Leaves must be approved by managers..."
```

---

## STEP 3 — Create embeddings (THIS IS THE CORE)

### What embeddings are (simple)

Embeddings convert text into numbers that capture meaning.

Text → vector (array of floats)

---

### Example

```
"paid leave policy"
→ [0.021, -0.93, 0.44, ...]
```

Similar meaning → closer vectors.

---

### Internally

```
Chunk text
 ↓
Embedding model
 ↓
High-dimensional vector (e.g. 768 / 1536 dims)
```

---

### Important

You usually use:

• separate embedding model
• cheaper than LLM
• optimized for similarity

---

## STEP 4 — Store embeddings in vector database

### What a vector DB does

Stores:

```
(vector, chunk_text, metadata)
```

And supports:

```
"find vectors closest to this query vector"
```

---

### Popular vector stores

• Pinecone
• Weaviate
• Milvus
• Chroma
• FAISS (local)

---

### Metadata example

```json
{
  "source": "policy.pdf",
  "page": 12,
  "section": "Leaves"
}
```

This helps debugging + filtering.

---

## STEP 5 — Query time (this happens on every user question)

This is the runtime RAG loop.

---

### Step 5.1 — User query

```
"How many paid leaves do I get?"
```

---

### Step 5.2 — Embed the query

Same embedding model:

```
query → vector
```

This is important:

Query and chunks MUST use same embedding model

---

### Step 5.3 — Similarity search

Vector DB finds:

```
Top-K closest chunks
```

Usually:

```
K = 3–10
```

---

### Step 5.4 — Assemble prompt (MOST IMPORTANT STEP)

You now build a prompt like:

```
SYSTEM:
You are an assistant answering based ONLY on provided context.

CONTEXT:
[Chunk 1]
[Chunk 2]
[Chunk 3]

USER:
How many paid leaves do I get?
```

This is where hallucinations are controlled.

---

### Step 5.5 — Call LLM

Now LLM does what it’s good at:

• language
• summarization
• reasoning

But only using retrieved data.

---

# 4 Internal mental model (lock this)

RAG is NOT “LLM knows everything”.

It is:

```
Search engine + LLM writer
```

---

### Think like this

LLM = writer
Vector DB = librarian

Writer asks librarian for relevant pages, then writes answer.

---

# 5 Why RAG reduces hallucinations

Because:

• LLM sees actual text
• Prompt restricts scope
• Context is factual
• Model stops guessing

But note:

RAG reduces hallucinations
It does NOT eliminate them automatically

That’s why evaluation matters later.

---

# 6 Common RAG mistakes (VERY IMPORTANT)

### Mistake 1 — Bad chunking

• chunks too large → context overflow
• chunks too small → no meaning

---

### Mistake 2 — Stuffing too many chunks

More chunks ≠ better.

```
Too many → noise
Too few → missing info
```

---

### Mistake 3 — Not grounding prompt

If you don’t say:

```
"Answer only from context"
```

LLM will hallucinate anyway.

---

### Mistake 4 — Mixing embedding models

Embedding mismatch = garbage retrieval.

---

# 7 Where RAG fits in YOUR roadmap (perfect alignment)

Your roadmap nailed this.

```
MODULE 3 — RAG
53–67 → fundamentals
68–72 → distributed & infra
```

Later modules build on RAG:

• Agents use RAG as a tool
• LangChain abstracts RAG
• LangGraph manages RAG workflows
• MCP exposes RAG to tools

---

# 8 How RAG evolves (important foresight)

### Basic RAG

• single vector DB
• simple prompt

### Advanced RAG

• query rewriting
• hybrid search
• reranking
• multi-step retrieval
• agent-driven RAG

Your roadmap already includes this progression.

---

# 9 One-line truth (remember this)

RAG does not make models smarter.
It makes them better informed.

---