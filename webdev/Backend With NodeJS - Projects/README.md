# BUILDER-FIRST BACKEND JOURNEY

This repository is **not** a collection of tutorials or random code. It is a **thinking-first, builder-first learning system** designed to build **real backend understanding and interview confidence**.

---

## What this repository is NOT

This repo is **not** for:
* Random tutorials
* "Just code" examples
* Copy-paste projects
* Magic frameworks without fundamentals
* One huge mega-project

If you're looking for shortcuts, this is not the place.

---

## What this repository IS

This repo exists to:
* Build **small, complete, explainable backend projects**
* Strengthen **mental models**, not memorization
* Learn backend **from first principles**
* Practice **explaining systems clearly** (interview-ready)

Every project here is intentionally **small**, **focused**, and **deep**.

---

## Core Philosophy (Non-Negotiable)

I learn by **building**, not watching.
I learn by **thinking**, not copying.
I learn to **explain**, not just implement.

**Every project must:**
* Solve a real problem
* Improve a backend mental model
* Be explainable in **5-10 minutes verbally**

---

## Rules of This Repository

These rules apply to **every project folder inside this repo**:
* No jumping to frameworks without understanding basics
* No large "all-in-one" apps
* No code without explanation
* No blind copy-paste
* Think → Design → Build → Explain → Improve
* One project = one main concept
* Small scope, deep clarity

---

## How EVERY Project Must Be Structured

Each project inside this folder **must contain**:

```
project-name/
├── README.md   // thinking, design, mental models
├── QA.md       // interview questions & self-check
└── src / files // actual code
```

### Purpose of each file

#### README.md
* Why this project exists
* Mental model
* Design decisions
* Step-by-step build reasoning
* What was learned

#### QA.md
* Interview-style questions
* Edge cases
* "Why" and "what-if" reasoning
* Things that were unclear before the project

If a project doesn't have both files, it's incomplete.

---

## How EACH PROJECT Must Be Taught (Strict Order)

For **every single project**, learning must follow this order:

1. **Problem Framing (WHY)**
   * What real problem does this project solve?
   * Why does this problem exist in real systems?
   * What breaks if this is poorly designed?

2. **Mental Model (HOW IT WORKS)**
   * High-level flow (request → logic → response)
   * Responsibilities of each layer
   * Where bugs usually appear

3. **Design Before Code**
   * Features list:
     * Must have
     * Optional
     * Explicitly avoided
   * API flow (if applicable)
   * Folder structure (and WHY it exists)

4. **Incremental Build (NO BIG CODE DUMPS)**
   * Build in **small chunks**
   * After each chunk:
     * What was added
     * Why this approach
     * What could go wrong

5. **Final Clean Code**
   * Only after full understanding
   * Clean, readable, structured
   * No unnecessary abstraction

6. **Explanation Practice (MANDATORY)**
   Be able to explain:
   * Problem
   * Design choices
   * Tradeoffs
   * Possible improvements

If you can't explain it → you don't understand it.

---

## Roadmap of Projects Inside This Folder

This order is **deliberate**. Do not skip.

1. **Node Core Foundations**
   Goal: Remove the fear that "Node is magic"
   "Node is JavaScript + system APIs, not a framework."

2. **Async Thinking Project**
   Goal: Control async flow mentally
   "Async is about managing time, not speed."

3. **Express Fundamentals**
   Goal: Understand backend request lifecycle
   "Express is just routing + middleware on top of Node HTTP."

4. **MongoDB CRUD + Pagination**
   Goal: Data modeling and query thinking
   "Databases fail more due to bad design than bad queries."

5. **Authentication System**
   Goal: Security mindset
   "Auth is about trust boundaries."

6. **File Upload & Media Handling**
   Goal: Resource and memory awareness
   "Large files should never sit fully in memory."

7. **Real-Time Communication**
   Goal: Event-driven systems
   "Sockets maintain state, HTTP doesn't."

8. **SQL + Prisma**
   Goal: Relational thinking
   "Relations belong in the DB, logic in services."

9. **NestJS Architecture**
   Goal: Scalable backend structure
   "Architecture matters when teams grow."

10. **Deployment & Production**
    Goal: Engineer mindset
    "If it can't run reliably, it's incomplete."

---
