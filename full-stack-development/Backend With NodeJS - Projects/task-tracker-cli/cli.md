Perfect.

We start **Phase 1 – Fundamentals**
Project #1:

# Task Tracker CLI

(File-Based Task Management System)

And yes — **one phase at a time**.

Today we only do:

# PHASE 0 — PROJECT CONTEXT

No coding. Only thinking.

---

# 0. PROJECT CONTEXT

---

## 0.1 Problem Statement

### What problem are we solving?

People need a simple way to track tasks from terminal without:

- Opening browser
- Using heavy apps
- Logging into accounts
- Using internet

We are building:

> A command-line tool to create, update, delete, and track tasks stored locally in a file.

---

### Who is the user?

- Developers
- Students
- Minimalists
- Anyone who works in terminal daily

---

### Why does this system exist?

Because:

- Sometimes you just want quick task tracking.
- Lightweight > heavy productivity apps.
- Local > cloud (for privacy & speed).

This is a **personal productivity system**.

---

### What pain does it remove?

Without this tool:

- Tasks are scattered
- No quick add from terminal
- No structured status tracking

This removes friction.

---

# 0.2 Scope Definition

This is VERY important.

We define MVP clearly.

---

## What is Included (MVP)?

Basic CLI commands:

```bash
task add "Learn Node"
task list
task update 1 "Learn Node deeply"
task delete 1
task mark-done 1
```

Features:

- Add task
- List tasks
- Update task
- Delete task
- Mark complete
- Persist in local file (JSON)

That’s it.

---

## What is NOT Included (for now)?

- No authentication
- No multi-user support
- No database
- No cloud sync
- No UI
- No priorities
- No categories
- No deadlines
- No pagination

We avoid feature creep.

---

## What is Phase 2?

Later upgrades:

- Priority levels
- Due dates
- Filtering
- Sorting
- Tags
- Export to CSV
- Archive completed tasks

But NOT now.

---

# MVP Summary

We are building:

A file-based CLI system that:

- Stores tasks in tasks.json
- Assigns unique IDs
- Tracks status (pending / done)
- Handles basic CRUD operations

---

# Mental Model of This System

This is not “just CLI”.

This is:

User (terminal)
↓
CLI Parser
↓
Service Logic
↓
File Repository
↓
tasks.json

This teaches:

- Input parsing
- State persistence
- Data modeling
- File I/O
- Error handling
- Basic architecture separation

---

We stop here.

Confirm you understand this phase.

Next phase will be:

# 1. DOMAIN UNDERSTANDING

And we will define:

- Entities
- Business rules
- Edge cases

One layer at a time.

Good.

Now we move to:

# PHASE 1 — DOMAIN UNDERSTANDING

Still no coding.

If domain is weak, architecture collapses.

---

# 1.1 Core Entities

For this system, we identify domain models.

## Primary Entity: Task

There is only one core entity in MVP:

```
Task
```

Now we define it properly.

### Task Model (Conceptual)

```js
{
  id: number,              // Unique identifier
  title: string,           // Task description
  status: "pending" | "done",
  createdAt: timestamp,
  updatedAt: timestamp
}
```

---

### Attribute Breakdown

#### id

- Must be unique
- Must not change
- Used for update/delete

Decision later:

- Auto-increment?
- UUID?

For CLI simplicity → Auto-increment is fine.

---

#### title

- Required
- Cannot be empty
- Trimmed
- Reasonable max length (e.g., 255 chars)

---

#### status

Two states only:

- pending
- done

We avoid complexity.

---

#### createdAt / updatedAt

Important for:

- Sorting later
- Audit
- Future scaling

Even in small systems, timestamps matter.

---

# Entity Relationships

Currently:

- No relationships
- No sub-tasks
- No users

Single-entity system.

Simple domain.

---

# 1.2 Business Rules

Now we define rules.

This is core backend thinking.

---

## Rule 1: Task must have non-empty title

Invalid:

```
task add ""
```

---

## Rule 2: Task ID must exist before update/delete

If ID not found:
→ Throw NotFoundError

---

## Rule 3: Cannot mark already completed task as done again

Prevent meaningless operations.

---

## Rule 4: Deleting non-existing task should fail clearly

Never silently ignore.

---

## Rule 5: ID must be immutable

You cannot update task ID.

---

## Rule 6: State transitions

Allowed:

```
pending → done
done → (no transition in MVP)
```

We do NOT allow:

- done → pending (for now)

Keep domain strict.

---

# 1.3 Edge Cases

This is where maturity builds.

---

## Input Edge Cases

- Missing command
- Missing arguments
- Invalid ID (string instead of number)
- Negative ID
- Huge title input
- Duplicate titles (allowed? yes, allowed)

---

## File Edge Cases

- tasks.json does not exist
- File is empty
- File corrupted (invalid JSON)
- Concurrent write
- File permission denied

We must handle:

- Auto-create file if missing
- Try-catch JSON parsing
- Atomic writes

---

## Logical Edge Cases

- Update task with same title
- Mark done then delete
- Add 10,000 tasks (performance?)

---

## Concurrency Edge Case (Important Thinking)

What if:

Two CLI commands run at same time?

Example:

Terminal 1:

```
task add "A"
```

Terminal 2:

```
task add "B"
```

If both read file before writing,
ID collision may happen.

We note this risk.

In MVP:

- Accept small risk
- Later solve via locking

But awareness matters.

---

# Domain Summary

We now understand:

- Entity: Task
- Attributes
- State transitions
- Validation rules
- File risks
- Concurrency risks

This is how backend thinking starts.

---

Next Phase:

# 2. SYSTEM DESIGN (HIGH LEVEL)

Where we decide:

- Architecture style
- Data flow
- Layer separation
- Storage approach

Say next when ready.

Good.

Now we move to:

# PHASE 2 — SYSTEM DESIGN (HIGH LEVEL)

Now we think like system designers.

Still no coding.

---

# 2.1 Architecture Style

We choose:

# Layered Architecture

Why?

Because even small systems should be structured properly.

We separate concerns like this:

```
CLI (Interface Layer)
        ↓
Controller Layer
        ↓
Service Layer
        ↓
Repository Layer
        ↓
File Storage (tasks.json)
```

---

## Why NOT put everything in one file?

Because:

- Mixing parsing + logic + file handling = chaos
- Hard to test
- Hard to refactor
- Hard to scale

Separation gives:

- Maintainability
- Testability
- Extensibility

---

# Layer Responsibilities

Now understand clearly:

---

## 1. CLI / Interface Layer

Responsibility:

- Parse terminal arguments
- Identify command
- Call appropriate controller method

It should NOT:

- Contain business logic
- Directly access file

---

## 2. Controller Layer

Responsibility:

- Validate raw input
- Convert string → number
- Call service
- Format output
- Handle errors

It should NOT:

- Contain business rules
- Read/write file directly

---

## 3. Service Layer (Most Important)

Responsibility:

- Business logic
- Enforce rules
- State transitions
- Throw domain errors

Examples:

- Check if title empty
- Check if task exists
- Check if already done
- Generate new ID

Service = brain of system

---

## 4. Repository Layer

Responsibility:

- Read tasks.json
- Write tasks.json
- No business rules
- Pure data access

Repository does NOT decide:

- Whether title is valid
- Whether ID exists logically

It just fetches and saves.

---

## 5. Storage Layer

Physical file:

```
tasks.json
```

Structure:

```json
[
  {
    "id": 1,
    "title": "Learn Node",
    "status": "pending",
    "createdAt": "...",
    "updatedAt": "..."
  }
]
```

---

# Why This Design Is Powerful

Even though it is CLI:

Tomorrow we can:

- Replace CLI with REST API
- Replace file with database
- Add UI frontend

Without changing business logic.

That is good architecture.

---

# 2.2 Data Flow Design

Let’s trace operations.

---

## Operation: Add Task

Flow:

1. CLI receives:

   ```
   task add "Learn Node"
   ```

2. Controller:
   - Extract title
   - Validate basic input

3. Service:
   - Validate title not empty
   - Fetch existing tasks
   - Generate next ID
   - Create task object

4. Repository:
   - Save updated array to file

5. Controller:
   - Print success message

---

## Operation: List Tasks

1. CLI → controller
2. Controller → service
3. Service → repository
4. Repository → read file
5. Service → return tasks
6. Controller → format display

---

## Operation: Update Task

1. CLI → controller
2. Controller:
   - Convert ID string → number

3. Service:
   - Check ID exists
   - Validate new title
   - Update updatedAt

4. Repository:
   - Persist changes

---

## Operation: Delete Task

1. CLI → controller
2. Service:
   - Check ID exists
   - Remove from array

3. Repository:
   - Save file

---

## Operation: Mark Done

1. CLI → controller
2. Service:
   - Check exists
   - Check not already done
   - Change status

3. Repository:
   - Persist

---

# Sync vs Async Decision

File operations in Node are async.

Options:

- Synchronous (simpler)
- Asynchronous (better practice)

For MVP:
We will use async (non-blocking).

Because:
Even CLI should follow good patterns.

---

# ID Strategy Decision

Options:

| Option         | Pros         | Cons                |
| -------------- | ------------ | ------------------- |
| Auto-increment | Simple       | Risk in concurrency |
| UUID           | No collision | Overkill for CLI    |

We choose:

Auto-increment (maxId + 1)

But we are aware of collision issue.

---

# Error Handling Strategy

We will design:

Custom errors:

- ValidationError
- NotFoundError

Controller catches
CLI prints clean message

Never crash with raw stack trace.

---

# Architecture Summary

We now have:

- Chosen architecture style
- Defined layers
- Defined data flow
- Defined ID strategy
- Defined error strategy
- Identified concurrency limitation

This is now a properly designed system.

---

Next Phase:

# 3. TRADE-OFF ANALYSIS

This is where senior-level thinking begins.

Say next when ready.
Good.

Now we enter:

# PHASE 3 — TRADE-OFF ANALYSIS

This is where you stop being a coder
and start becoming an engineer.

We analyze decisions before coding.

---

# 3.1 Storage Choice

We are building a file-based CLI.

Possible storage options:

| Option     | Pros               | Cons                      |
| ---------- | ------------------ | ------------------------- |
| In-memory  | Fast               | Data lost after exit      |
| JSON File  | Simple, persistent | No concurrency control    |
| SQLite     | Lightweight DB     | Extra setup               |
| PostgreSQL | Scalable           | Overkill                  |
| Redis      | Fast               | Not persistent by default |

---

## Why JSON File?

Because:

- Simple
- No external dependency
- Good for learning file I/O
- Suitable for single-user CLI

But trade-off:

- No transactions
- No locking
- Not scalable
- Corruption risk

We accept these trade-offs for MVP.

---

# 3.2 Sync vs Async File Operations

Options:

| Option       | Pros         | Cons                  |
| ------------ | ------------ | --------------------- |
| Synchronous  | Simple       | Blocks event loop     |
| Asynchronous | Non-blocking | Slightly more complex |

Even though CLI runs once and exits,
we choose async because:

- Good practice
- Teaches real Node behavior
- Scales if turned into API later

---

# 3.3 ID Strategy

Options:

| Strategy       | Pros           | Cons             |
| -------------- | -------------- | ---------------- |
| Auto-increment | Human readable | Collision risk   |
| UUID           | Unique         | Verbose          |
| Nanoid         | Compact unique | Extra dependency |

We choose:

Auto-increment:

```id="q9k8ua"
nextId = max(existingIds) + 1
```

Why?

- Simple
- Good for learning
- Collision unlikely in single-user CLI

But note:
In multi-process environment → unsafe.

---

# 3.4 Error Strategy

Options:

| Strategy             | Pros             | Cons                  |
| -------------------- | ---------------- | --------------------- |
| Throw generic Error  | Simple           | Hard to differentiate |
| Custom error classes | Clear separation | Slightly more setup   |

We choose:

Custom error classes:

- ValidationError
- NotFoundError

Why?

Because:

- Cleaner control flow
- Better future scaling
- Easy to convert to API responses later

---

# 3.5 Validation Strategy

Options:

| Strategy                 | Pros              | Cons              |
| ------------------------ | ----------------- | ----------------- |
| Manual validation        | Simple            | Repetitive        |
| Schema library (Zod/Joi) | Structured        | Extra dependency  |
| TypeScript only          | Compile-time only | No runtime safety |

For CLI MVP:

Manual validation inside service layer.

Why?

- Small domain
- Avoid overengineering
- Learn fundamentals first

Later, we can integrate schema validation.

---

# 3.6 Concurrency Trade-Off

Big question:

What happens if two writes happen simultaneously?

Problem:

- Both read file
- Both compute same nextId
- Both write
- One overwrite lost

Solution options:

| Solution               | Complexity |
| ---------------------- | ---------- |
| File locking           | Medium     |
| Atomic write temp file | Medium     |
| Move to database       | High       |
| Ignore for MVP         | Low        |

For MVP:
We acknowledge risk and ignore.

But we document it.

Senior engineers always document known limitations.

---

# 3.7 Data Structure Choice

Tasks stored as:

```json id="u1q3af"
[
  { ... },
  { ... }
]
```

Why array?

Because:

- Easy iteration
- Small dataset
- Order preserved

Alternative:
Use object keyed by ID:

```json id="a8nf03"
{
  "1": {...},
  "2": {...}
}
```

Pros:

- Faster lookup

Cons:

- Harder to maintain order

We choose array for simplicity.

---

# 3.8 Logging Strategy

For MVP:

- No complex logging
- Simple console output in controller
- No logs in service

Later:
Add structured logger (Winston / Pino)

---

# 3.9 Complexity Analysis (Early Thinking)

Add Task:

- Read file → O(n)
- Find max ID → O(n)
- Write file → O(n)

Overall: O(n)

For small CLI:
Fine.

At 1M tasks:
Slow.

This is scalability thinking.

---

# Trade-Off Summary

We consciously chose:

- JSON file over DB
- Async over sync
- Auto-increment over UUID
- Custom errors over generic
- Manual validation over schema
- Accept concurrency risk for MVP

Every choice has reason.

That is engineering.

---

Next Phase:

# 4. FOLDER STRUCTURE DESIGN

Where we define actual project skeleton.

Say next when ready.

Good.

Now we move to:

# PHASE 4 — FOLDER STRUCTURE DESIGN

Now architecture becomes concrete.

We convert design into physical structure.

---

# Goal

Our structure must reflect this layered flow:

CLI
↓
Controller
↓
Service
↓
Repository
↓
File (tasks.json)

---

# Final Folder Structure

```id="j8x2ml"
task-tracker-cli/
│
├── src/
│   ├── cli/                 # CLI argument parsing
│   ├── controllers/         # Input handling + response formatting
│   ├── services/            # Business logic
│   ├── repositories/        # File data access
│   ├── models/              # Task model definition
│   ├── errors/              # Custom error classes
│   ├── utils/               # Helper utilities
│   └── config/              # Config constants
│
├── data/
│   └── tasks.json           # Persistent storage
│
├── index.js                 # Application entry point
├── package.json
└── README.md
```

---

Now let’s understand WHY each folder exists.

---

# src/cli/

Responsibility:

- Read process.argv
- Parse command
- Route to controller

This isolates terminal logic.

Later, if we build REST API:
We remove CLI and keep everything else.

Good separation.

---

# src/controllers/

Responsibilities:

- Validate raw inputs
- Convert types (string → number)
- Call service methods
- Handle errors
- Print output

Controllers are thin.

They should NOT:

- Read file
- Implement business rules

---

# src/services/

This is the brain.

Responsibilities:

- Enforce domain rules
- Validate title
- Check if task exists
- Handle state transitions
- Generate ID
- Call repository

Service must not:

- Know about CLI
- Print console logs
- Directly read file

Pure business logic.

---

# src/repositories/

Responsibilities:

- Read tasks.json
- Write tasks.json
- No business rules
- No validation logic

Repository is storage abstraction.

Tomorrow:
Replace JSON with database.
Only repository changes.

Everything else remains intact.

That is good design.

---

# src/models/

Define Task structure.

Even if small,
we define shape clearly.

This prevents random object creation.

---

# src/errors/

Define:

- ValidationError
- NotFoundError

Centralized error design makes system clean.

---

# src/utils/

Utilities like:

- File existence check
- Date formatting
- ID helpers

Avoid duplication.

---

# src/config/

Things like:

```id="s0m29x"
DATA_FILE_PATH
DEFAULT_STATUS
```

Never hardcode values across project.

---

# data/

Separate folder for storage.

Keeps data outside source code.

Cleaner architecture.

---

# index.js

Entry point.

Responsibilities:

- Initialize CLI
- Handle top-level errors

Should be minimal.

---

# Why This Structure Is Powerful

Because:

If tomorrow you say:

“Convert this into REST API”

We do:

- Add Express layer
- Reuse service + repository
- Done

Architecture is future-proof.

---

# Separation Rule Summary

Controller → Talks HTTP / CLI
Service → Talks domain
Repository → Talks storage

If you mix these,
maintenance becomes nightmare.

---

We now have:

- Defined architecture
- Defined layers
- Defined folder structure

System skeleton is complete.

---

Next Phase:

# 5. IMPLEMENTATION STRATEGY (Infrastructure First)

Where we decide build order.

Say next when ready.

Good.

Now we move to:

# PHASE 5 — IMPLEMENTATION STRATEGY (Infrastructure First)

Now we decide **how we will build**, not writing code yet.

This phase answers:

> In what order do we build so that system grows cleanly?

---

# Core Rule

We build from **inside → outside**

Meaning:

Data → Repository → Service → Controller → CLI

Not the reverse.

---

# Step 1 — Infrastructure Setup

Before writing logic:

### 1.1 Initialize Project

- `package.json`
- Set `"type": "module"` (if using ESM)
- Define bin entry (for CLI usage)

Example conceptual idea:

```id="k2f8la"
{
  "name": "task-tracker-cli",
  "type": "module",
  "bin": {
    "task": "./index.js"
  }
}
```

This allows:

```bash id="e4v9bx"
task add "Learn Node"
```

---

### 1.2 Create Folder Structure

We create the structure we designed earlier.

No shortcuts.

---

### 1.3 Create data/tasks.json

Initialize with:

```json id="f3n1zd"
[]
```

Why?

So repository does not crash.

---

# Step 2 — Define Domain Model

Even though JavaScript doesn’t enforce types,
we define structure clearly.

Create Task shape:

```id="o5p2wr"
{
  id: number,
  title: string,
  status: "pending" | "done",
  createdAt: string,
  updatedAt: string
}
```

This prevents inconsistent data.

---

# Step 3 — Build Repository Layer

Repository responsibilities:

- readTasks()
- writeTasks()
- ensure file exists
- handle JSON parsing safely

Repository must:

- Catch file errors
- Handle corrupted file gracefully

No business rules here.

This layer must work independently.

---

# Step 4 — Build Service Layer

Service uses repository.

Service methods:

- addTask(title)
- listTasks()
- updateTask(id, title)
- deleteTask(id)
- markDone(id)

Inside service:

- Validate input
- Throw errors
- Enforce rules
- Generate ID
- Update timestamps

Service must not:

- Print anything
- Parse CLI arguments

---

# Step 5 — Build Controller Layer

Controller responsibilities:

- Parse raw arguments
- Convert ID string → number
- Call service
- Print formatted output
- Catch and display friendly errors

Controller is bridge between CLI and service.

---

# Step 6 — Build CLI Parser

Finally:

- Read process.argv
- Identify command
- Route to correct controller method

Example flow:

```id="n9v3jk"
node index.js add "Learn Node"
```

CLI layer interprets:
Command = add
Argument = "Learn Node"

Then calls controller.add()

---

# Error Handling Strategy (Implementation)

We define custom errors:

- ValidationError
- NotFoundError

Flow:

Service throws
Controller catches
CLI prints clean message

System never crashes with ugly stack trace.

---

# Write Order Summary

We will build in this exact order:

1. Config + setup
2. Repository
3. Service
4. Controller
5. CLI
6. Manual testing
7. Refactor

This ensures:

- Core logic stable before interface
- Easy debugging
- Clean layering

---

# Why This Order Is Important

If you start with CLI:

- You mix parsing and logic
- You create shortcuts
- Architecture collapses

If you start with service:

- You think about domain first
- Everything else becomes easier

---

# Implementation Mental Model

Think like this:

Repository → Just file
Service → Just rules
Controller → Just translation
CLI → Just routing

Each layer does one job.

---

We now fully understand:

- Problem
- Domain
- Architecture
- Trade-offs
- Folder structure
- Implementation strategy

Next phase:

# 6. ERROR HANDLING DESIGN (Deep Dive)

This is where backend maturity increases.

Say next when ready.

Good.

Now we move to:

# PHASE 6 — ERROR HANDLING DESIGN (Deep Dive)

This is where most junior projects fail.

If error handling is weak,
system feels unprofessional.

---

# Goal

We want:

- Clean error messages
- No ugly stack traces
- No silent failures
- Clear separation between domain errors and system errors

---

# 6.1 Error Categories

We classify errors into 3 types:

---

## 1. Validation Errors

Caused by user input.

Examples:

- Empty title
- Invalid command
- ID is not a number
- Title too long

These are expected errors.

We create:

```id="g8w2kp"
ValidationError
```

---

## 2. Not Found Errors

When requested resource does not exist.

Examples:

- Task ID 99 does not exist
- Trying to delete non-existing task

We create:

```id="r4m9ts"
NotFoundError
```

---

## 3. System Errors (Unexpected)

These are not user mistakes.

Examples:

- File permission denied
- JSON corrupted
- Disk write failure

We do NOT expose technical details to user.

We show:

```id="u7d1vx"
Something went wrong. Please try again.
```

But internally we log the real error.

---

# 6.2 Custom Error Classes

Why not just use:

```id="q3l2ne"
throw new Error("Invalid title")
```

Because generic Error cannot differentiate:

- Was it validation?
- Was it missing task?
- Was it file crash?

Custom classes allow us to identify error type.

---

# 6.3 Error Flow in System

Let’s trace.

Example:

User runs:

```id="c1k4pz"
task update 99 "New Title"
```

Flow:

CLI → Controller → Service

Service checks:

- Task exists? No.

Service throws:

```id="e9r5mf"
throw new NotFoundError("Task not found")
```

Controller catches error.

Controller prints:

```
Error: Task not found
```

Program exits gracefully.

No crash.

---

# 6.4 Where Errors Are Thrown

Important rule:

Repository → Throws only system errors
Service → Throws domain errors
Controller → Handles and formats

Service should never:

- console.log
- process.exit
- catch and suppress

Service must throw upward.

---

# 6.5 Error Handling Structure

Mental diagram:

```id="z4p8qh"
CLI
  ↓
Controller (try-catch)
  ↓
Service (throws domain errors)
  ↓
Repository (throws system errors)
```

Controller decides what user sees.

---

# 6.6 Handling File Errors

Repository must handle:

- File missing → create new file
- Invalid JSON → throw system error
- Permission denied → throw system error

Service should not know about file system details.

Abstraction matters.

---

# 6.7 Exit Strategy

After error printed:

- Exit with non-zero status code

Example conceptually:

```id="m7v2tx"
process.exit(1)
```

Why?

Because CLI tools should signal failure to shell.

---

# 6.8 Avoid This Mistake

Do NOT:

- Catch errors inside service and return null
- Ignore JSON parse failure
- Print stack trace directly

That is junior behavior.

---

# 6.9 Error Design Summary

We will have:

- ValidationError
- NotFoundError
- SystemError (optional)

Service throws
Controller formats
CLI exits cleanly

System stays stable.

---

We now have:

- Clean architecture
- Clear domain
- Trade-offs defined
- Structured implementation plan
- Proper error system

Next Phase:

# 7. SECURITY THINKING (Even for CLI)

Yes — even small systems need security mindset.

Say next when ready.

Good.

Now we move to:

# PHASE 7 — SECURITY THINKING (Even for CLI)

Most people think:

> “It’s just a CLI. No security needed.”

That mindset is dangerous.

Security is not about size.
It is about discipline.

---

# 7.1 Input Validation (First Line of Defense)

User controls input.

Examples:

```bash
task add ""
task update abc "Title"
task add "A".repeat(1000000)
```

We must protect against:

- Empty strings
- Invalid ID types
- Extremely large input
- Unexpected characters

Service must validate:

- Title exists
- Title length reasonable (e.g., ≤ 255)
- ID is positive integer

Never trust input.

---

# 7.2 File System Safety

We are writing to:

```id="x9a2lm"
data/tasks.json
```

Risks:

- Path traversal (if path ever becomes dynamic)
- File overwrite
- Corrupted writes

Best practice:

- Keep file path constant
- Never accept file path from CLI input
- Use atomic write pattern (write temp → replace)

For MVP:
Basic write is fine.
But we acknowledge risk.

---

# 7.3 Injection Concerns

Even though this is not SQL-based:

We still think about:

- JSON injection?
- Command injection?

Since we are not executing shell commands from input,
risk is minimal.

But discipline matters:
Never eval input.
Never execute dynamic code.

---

# 7.4 Data Integrity

What if file is corrupted?

Example:

```json
[
  { id: 1, title: "Task"
```

Invalid JSON.

Repository must:

- Catch parse error
- Throw system error
- Prevent silent overwrite

Never auto-fix corrupted file silently.
That may lose data.

---

# 7.5 Concurrency Safety

Earlier we mentioned:

Two CLI instances running simultaneously.

Risk:

- Race condition
- Data loss

For MVP:
Accept limitation.

But we document:

> System is single-process safe only.

Security includes integrity.

---

# 7.6 Principle of Least Privilege

If later deployed globally:

- CLI should not require admin rights
- Data folder should not expose sensitive paths

Even small tools should respect environment boundaries.

---

# 7.7 Defensive Programming

Always assume:

- User will misuse tool
- File may be broken
- Disk may fail
- Input may be malicious

Write code accordingly.

---

# 7.8 Secure Defaults

Default status:

```id="t5v8na"
pending
```

Not:

- null
- undefined
- dynamic

Defaults must be predictable.

---

# 7.9 What We Are NOT Handling (Yet)

- Encryption
- Authentication
- Multi-user isolation
- Access control

Because scope is small.

But mindset remains.

---

# Security Summary

Even for CLI, we:

- Validate input
- Protect file operations
- Avoid executing user input
- Handle corruption
- Document concurrency risk

Security is habit.

---

We now have:

- Domain clarity
- Architecture
- Trade-offs
- Folder structure
- Implementation plan
- Error design
- Security mindset

Next Phase:

# 8. SCALABILITY THINKING

This is where engineering becomes system design.

Say next when ready.

Good.

Now we move to:

# PHASE 8 — SCALABILITY THINKING

Even though this is a CLI tool,
we train our brain to think:

> “What breaks if usage increases?”

This mindset separates senior engineers from beginners.

---

# 8.1 What Happens at 10 Tasks?

Everything works perfectly.

- Read file → small
- Write file → small
- ID calculation → fast

No issue.

---

# 8.2 What Happens at 10,000 Tasks?

Now think carefully.

Current operations:

- Read entire file → O(n)
- Find max ID → O(n)
- Write entire file → O(n)

Each operation is linear.

At 10k:
Still fine.

At 100k:
Slow but usable.

At 1M:
Painful.

---

# 8.3 Bottlenecks Identified

Primary bottleneck:

```id="b7f2qz"
Reading and writing entire JSON file every time.
```

This is expensive because:

- Disk I/O is slow
- File size grows
- Entire data is loaded in memory

---

# 8.4 How Real Systems Solve This

They move to:

- Database (indexed lookup)
- Partial updates
- Pagination
- Query-based filtering
- Caching

But we are intentionally not doing that now.

We are learning foundation.

---

# 8.5 Scaling Strategies (Future)

If we wanted to scale this CLI:

Option 1:
Move from JSON → SQLite

Option 2:
Store tasks as individual files

Option 3:
Maintain metadata file storing nextId separately

Option 4:
Implement file locking for concurrency

Option 5:
Switch to event log system

---

# 8.6 ID Scaling Problem

Current strategy:

```id="f6v9cx"
nextId = maxId + 1
```

This requires scanning entire array.

At scale:

Better design:

- Store nextId separately in file
- Or use UUID
- Or use DB auto-increment

---

# 8.7 Memory Usage

Current design:

Load entire tasks array in memory.

At 1M tasks:

- Large memory footprint
- Slow parsing

Better design at scale:

- Stream-based read
- DB cursor
- Indexed storage

---

# 8.8 Pagination Thinking

If tasks grow large:

Instead of:

```id="l8t2wn"
task list
```

We would need:

```id="a2p7mz"
task list --page 1 --limit 10
```

That is scalability feature.

Not needed now,
but thinking about it matters.

---

# 8.9 Concurrency Scaling

If this becomes shared tool:

Two processes may write simultaneously.

We would need:

- File locking
- Or DB transactions

Without it:
Data corruption possible.

---

# 8.10 Performance Summary

Operation complexity:

Add → O(n)
List → O(n)
Update → O(n)
Delete → O(n)

For small system:
Acceptable.

For large system:
Needs redesign.

---

# Why We Think About This Now

Because:

Architecture decisions should anticipate growth.

Even if we don't implement scalability today,
we design in a way that allows evolution.

That is why we separated:

- Service
- Repository

So we can later swap JSON → Database
without rewriting business logic.

---

We now have:

- Scalability awareness
- Bottleneck identification
- Future upgrade path defined

Next Phase:

# 9. PERFORMANCE ANALYSIS (More Formal Thinking)

Say next when ready.

Good.

Now we move to:

# PHASE 9 — PERFORMANCE ANALYSIS (Formal Thinking)

Earlier we discussed scalability conceptually.

Now we analyze **operation-by-operation cost**.

We break performance into:

- Time Complexity
- Space Complexity
- I/O Cost
- CPU Cost

This is system-level thinking.

---

# 9.1 Operation: Add Task

Steps:

1. Read entire file → O(n)
2. Parse JSON → O(n)
3. Find max ID → O(n)
4. Push new task → O(1)
5. Serialize JSON → O(n)
6. Write file → O(n)

### Time Complexity

Overall:

```id="p2k7mz"
O(n)
```

Because dominant operations are file read/write.

### Space Complexity

We load full array into memory:

```id="h6t4ra"
O(n)
```

### I/O Cost

High, because:

- Full file read
- Full file write

Disk I/O is slower than CPU.

---

# 9.2 Operation: List Tasks

Steps:

1. Read file → O(n)
2. Parse JSON → O(n)
3. Iterate to print → O(n)

Time:

```id="y8v1js"
O(n)
```

Space:

```id="c4d9we"
O(n)
```

I/O:

One full file read.

---

# 9.3 Operation: Update Task

Steps:

1. Read file → O(n)
2. Parse → O(n)
3. Find by ID → O(n)
4. Modify → O(1)
5. Write full file → O(n)

Total:

```id="t3p8lk"
O(n)
```

Even though find is O(n),
file write dominates.

---

# 9.4 Operation: Delete Task

Steps:

1. Read file → O(n)
2. Filter array → O(n)
3. Write file → O(n)

Total:

```id="z7x4qn"
O(n)
```

---

# 9.5 Operation: Mark Done

Same pattern:

```id="m5c2uy"
O(n)
```

---

# 9.6 Why All Operations Are O(n)

Because:

We treat entire file as one atomic state.

We:

- Read full state
- Modify full state
- Rewrite full state

This is simple but not efficient at scale.

---

# 9.7 CPU vs I/O

Important concept:

Even if CPU complexity is manageable,
I/O dominates cost.

Disk write is much slower than memory operations.

At 1MB file → fine
At 100MB file → slow

---

# 9.8 Optimization Options (Future)

To reduce cost:

Option 1:
Store tasks as object keyed by ID for faster lookup

Option 2:
Store nextId separately to avoid scanning

Option 3:
Use append-only log

Option 4:
Move to SQLite (indexed queries O(log n))

Option 5:
Use caching in memory for multi-command session

---

# 9.9 Real Engineering Insight

File-based storage is:

- Good for learning
- Good for single-user
- Not good for high write frequency

But it teaches:

- State persistence
- I/O cost awareness
- Data modeling discipline

---

# 9.10 When Does It Actually Break?

Breakpoints:

- Around 100k tasks → noticeable slowdown
- Around 1M tasks → painful
- Multiple concurrent processes → data corruption

We document this.

---

# Performance Summary

All operations:
Time → O(n)
Space → O(n)
I/O → Heavy
CPU → Moderate

Acceptable for CLI MVP.

---

We now understand:

- Architectural limitations
- Complexity formally
- Performance bottlenecks
- Future optimization direction

Next Phase:

# 10. CONCURRENCY CONSIDERATION

This is advanced backend thinking.

Say next when ready.

Good.

Now we move to:

# PHASE 10 — CONCURRENCY CONSIDERATION

Now we think like system engineers.

Concurrency means:

> What happens when multiple operations happen at the same time?

Even though this is CLI,
we still analyze it.

---

# 10.1 What Is Concurrency in Our Context?

Imagine this scenario:

Terminal 1:

```bash
task add "Task A"
```

Terminal 2 (same time):

```bash
task add "Task B"
```

Both processes run simultaneously.

---

# 10.2 What Actually Happens Internally?

Both processes do:

1. Read tasks.json
2. Parse it
3. Compute nextId
4. Append new task
5. Write entire file

Now imagine:

File initially:

```json
[{ "id": 1, "title": "Old Task" }]
```

Both processes read this at same time.

Both compute:

```id="k3v8mz"
maxId = 1
nextId = 2
```

Both write:

Process 1 writes:
Task A with id 2

Process 2 writes:
Task B with id 2

Now one overwrites the other.

Data loss happens.

This is race condition.

---

# 10.3 Types of Concurrency Problems Here

### 1. Lost Update

One write overwrites another.

### 2. ID Collision

Both generate same ID.

### 3. Partial Write

If process crashes mid-write,
file may become corrupted.

---

# 10.4 Why This Happens

Because:

Our file operations are:

```id="x9p2wr"
Read → Modify → Write
```

This is NOT atomic.

There is no locking mechanism.

---

# 10.5 How Real Systems Solve This

They use:

- Database transactions
- File locks
- Atomic write operations
- Write-ahead logs
- Optimistic locking

---

# 10.6 Possible Solutions for Our CLI

Option 1: File Locking

Before writing:

- Acquire lock
- Perform write
- Release lock

Requires extra logic.

---

Option 2: Atomic Write Pattern

Instead of:

Overwrite file directly

Do:

```id="l7n2qc"
Write to temp file
Rename temp → tasks.json
```

Rename is atomic in most OS.

This reduces corruption risk,
but does NOT solve ID collision fully.

---

Option 3: Store nextId separately

Maintain metadata file:

```json
{
  "nextId": 42
}
```

Increment first,
then write.

Still not perfect without locking.

---

Option 4: Move to SQLite

SQLite supports:

- Transactions
- ACID properties
- Concurrency control

This is proper solution.

---

# 10.7 What Do We Do for MVP?

We:

- Accept single-process assumption
- Document limitation
- Avoid overengineering

Important mindset:

> We don’t ignore concurrency.
> We consciously limit scope.

That is mature engineering.

---

# 10.8 Atomicity Concept

Atomic operation means:

Either:

- Fully completed
  or
- Not executed at all

Our current design is NOT atomic.

Because:

If process crashes after truncating file but before writing new JSON,
file becomes empty or corrupted.

Better practice:

- Write temp file
- Replace original

This improves atomicity.

---

# 10.9 Thread Safety vs Process Safety

Node.js is single-threaded,
but concurrency issue here is:

Multiple processes,
not multiple threads.

Important distinction.

---

# 10.10 Final Concurrency Summary

Current system:

- Safe for single process
- Unsafe for multi-process
- No locking
- No transaction support

At scale:
Needs redesign.

But for learning CLI:
Acceptable.

---

We now fully understand:

- Race conditions
- Lost updates
- Atomicity
- Concurrency limits
- Real-world solutions

You are now thinking like backend engineer.

---

Next Phase:

# 11. TESTING STRATEGY

This is where quality discipline begins.

Say next when ready.

Good.

Now we move to:

# PHASE 11 — TESTING STRATEGY

Now we think like engineers who ship reliable systems.

Testing is not optional.
It validates architecture.

---

# 11.1 What Are We Testing?

We test **behavior**, not implementation.

For Task Tracker CLI, we test:

- Business logic (Service layer)
- File interaction (Repository layer)
- End-to-end behavior (CLI flow)

---

# 11.2 Testing Levels

We divide into 3 layers.

---

## 1. Unit Tests (Service Layer)

Test business rules independently.

Example scenarios:

- Add task with valid title → success
- Add task with empty title → ValidationError
- Update non-existing ID → NotFoundError
- Mark already done task → ValidationError
- Delete valid ID → success

Unit tests must:

- Mock repository
- Not touch real file

Why?

Because unit tests test logic only.

---

## 2. Integration Tests (Repository + Service)

Now we test real file behavior.

Scenarios:

- Add task → file updated
- Update task → file modified correctly
- Delete task → removed from file
- File auto-created if missing
- Corrupted JSON throws error

Here we use temporary test file,
not real production file.

---

## 3. End-to-End Tests (CLI Level)

Simulate real usage:

```bash id="ie8v23"
task add "Test Task"
task list
task delete 1
```

Verify output.

This tests:

CLI → Controller → Service → Repository → File

Full flow.

---

# 11.3 What We Do NOT Test

We do not test:

- Node internals
- File system internals
- Console.log behavior in detail

We test our logic.

---

# 11.4 Edge Case Testing

We must include tests for:

- Invalid ID type
- Negative ID
- Huge title
- Empty JSON file
- Corrupted JSON file
- Deleting already deleted task

Edge case coverage increases reliability.

---

# 11.5 Mocking Strategy

For unit tests:

We mock repository methods:

- readTasks()
- writeTasks()

This isolates service logic.

If service works with mock,
architecture is correct.

If mocking is difficult,
design is wrong.

---

# 11.6 Testing Mindset

Ask:

- What happens if file read fails?
- What happens if write throws?
- What happens if invalid command?
- What happens if user gives no argument?

Testing ensures:

System fails gracefully.

---

# 11.7 Manual Testing Checklist

Before marking complete:

- Add task
- Add multiple tasks
- Update task
- Delete task
- Mark done
- Restart CLI → data persists
- Corrupt file manually → see behavior

Manual tests simulate real world.

---

# 11.8 Test Strategy Summary

We will implement:

- Unit tests for service
- Integration tests for file
- Optional E2E tests for CLI

Testing confirms:

- Domain rules correct
- Architecture separation works
- Error handling stable
- File persistence reliable

---

We now have:

- Architecture
- Trade-offs
- Performance analysis
- Concurrency awareness
- Testing plan

Next Phase:

# 12. DEPLOYMENT & PRODUCTION THINKING

Even for CLI.

Say next when ready.

Good.

Now we move to:

# PHASE 12 — DEPLOYMENT & PRODUCTION THINKING

Most people stop after “it works on my machine.”

Real engineers ask:

> How does this behave in the real world?

Even for a CLI tool.

---

# 12.1 How Will This Be Installed?

Options:

### 1. Local Usage Only

Run with:

```bash
node index.js add "Task"
```

Simple. No install.

---

### 2. Global CLI Tool (Better)

Configure in `package.json`:

```json
{
  "bin": {
    "task": "./index.js"
  }
}
```

Then:

```bash
npm link
```

Now user can run:

```bash
task add "Learn Backend"
```

This feels professional.

---

# 12.2 Environment Configuration

Even small tools must avoid hardcoded paths.

We define:

- DATA_FILE_PATH
- MAX_TITLE_LENGTH
- DEFAULT_STATUS

These go inside config layer.

Why?

Because production-ready systems avoid magic values.

---

# 12.3 Logging Strategy

In development:

- Simple console logs

In production:

- Structured logging
- Controlled verbosity
- Avoid stack trace leak

Even CLI should not expose internal errors unnecessarily.

---

# 12.4 Health & Integrity Checks

Before every operation:

Repository should ensure:

- File exists
- JSON valid
- Data is array

If invalid:
Fail safely.

Production mindset means:
Never trust environment.

---

# 12.5 Versioning Strategy

We follow semantic versioning:

```
1.0.0
```

- Major → Breaking change
- Minor → New feature
- Patch → Bug fix

Even small CLI tools benefit from versioning discipline.

---

# 12.6 Distribution Strategy

If published:

```bash
npm publish
```

Users can install globally:

```bash
npm install -g task-tracker-cli
```

Now it becomes a real product.

---

# 12.7 Monitoring (Even Minimal)

For CLI:

Monitoring =

- Proper exit codes
- Clean error messages
- No silent failures

In larger systems:
Monitoring includes:

- Logs
- Metrics
- Alerts

But we start small.

---

# 12.8 Data Backup Strategy

What if user deletes file accidentally?

We could:

- Create backup copy before overwrite
- Store timestamped backup file

Not MVP.
But thinking matters.

---

# 12.9 Upgrade Path

When user updates CLI:

- File format must remain compatible
- Migration strategy may be required

Example:

If later we add priority field,
existing tasks.json must not break.

Production thinking anticipates evolution.

---

# 12.10 Final Production Checklist

Before marking complete:

- No hardcoded paths
- No console logs inside service
- Proper error classes
- Clean folder structure
- Works after restart
- Data persists
- Graceful error handling
- Exit codes correct
- Documented README

---

# Production Mindset Summary

Even for small CLI:

- Think installability
- Think configuration
- Think versioning
- Think safe file handling
- Think future migrations

That’s how you build professional systems.

---

We have now covered:

1. Problem Context
2. Domain
3. System Design
4. Trade-offs
5. Folder Structure
6. Implementation Strategy
7. Error Handling
8. Security
9. Scalability
10. Performance
11. Concurrency
12. Testing
13. Deployment Thinking

You now fully understand the architecture before writing a single line of code.

---

Next Phase:

# 13. SYNTHESIS (Most Important)

This is where learning becomes permanent.

Say next when ready.

Good.

Now we move to the most important phase.

# PHASE 13 — SYNTHESIS (Deep Internalization)

This is where you transform from:

> “I followed steps”

to

> “I understand systems.”

If you skip this phase,
you only built a tool.

If you complete this phase,
you built engineering intuition.

---

# 13.1 What Did We Actually Build?

On surface:

A CLI that stores tasks in JSON.

But internally, we designed:

- A layered architecture
- A domain model
- A rule engine (service layer)
- A persistence abstraction
- An error system
- A scalability-aware structure

This is not “just CLI.”

This is a **mini backend system.**

---

# 13.2 What Did You Learn (Conceptually)?

You learned:

### 1. Domain First Thinking

Before coding, you asked:

- What is a Task?
- What rules exist?
- What transitions allowed?

This is how real systems are designed.

---

### 2. Separation of Concerns

You separated:

- Interface (CLI)
- Logic (Service)
- Storage (Repository)

This makes systems maintainable.

---

### 3. Trade-off Awareness

You consciously chose:

- JSON over DB
- Auto-increment over UUID
- No locking for MVP

Engineering = choosing constraints knowingly.

---

### 4. Failure Thinking

You asked:

- What if file corrupted?
- What if two writes happen?
- What if input invalid?

This builds defensive coding habit.

---

### 5. Scalability Awareness

You analyzed:

- O(n) operations
- I/O bottlenecks
- Memory load
- Concurrency risks

You now think beyond “it works.”

---

# 13.3 Mistakes You Would Make Without This Blueprint

Without structured thinking, you would:

- Put everything in index.js
- Mix file read with logic
- Print console logs everywhere
- Ignore invalid JSON
- Ignore race conditions
- Skip error classes
- Hardcode file paths

Now you won’t.

---

# 13.4 What Design Would Change at Scale?

If this becomes serious system:

- Replace JSON with SQLite
- Add transactions
- Add file locking
- Add pagination
- Add indexing
- Add structured logging
- Add configuration loader
- Add test automation

Because architecture allows evolution.

---

# 13.5 What You Now Understand Better

You now understand:

- Backend is about state management
- File I/O cost matters
- Concurrency is real even in CLI
- Architecture determines future flexibility
- Business logic must be isolated
- Errors are part of design
- Production thinking starts early

---

# 13.6 The 8 Core Questions (Final Mental Model)

For this project, can you now answer:

1. What is the domain?
   → Task management with simple state transitions.

2. How does data flow?
   → CLI → Controller → Service → Repository → File.

3. Where is logic located?
   → Service layer.

4. Where is storage abstracted?
   → Repository layer.

5. What breaks at scale?
   → O(n) file operations + concurrency.

6. How does system fail?
   → File corruption, race condition, invalid input.

7. How does system recover?
   → Error handling + safe file creation.

8. How can system evolve?
   → Swap repository, add DB, add REST API.

If you can answer these without looking,
you understood the project deeply.

---

# 13.7 Real Engineering Milestone

You just practiced:

- Domain modeling
- System design
- Trade-off analysis
- Performance thinking
- Concurrency awareness
- Production discipline

This is backend foundation.

---

We now move from:

Thinking
→ Designing
→ Planning

To:

# IMPLEMENTATION

Next message, we start coding.

We will follow strict order:

1. Project setup
2. Repository layer
3. Service layer
4. Controller
5. CLI
6. Testing

One layer at a time.

Say:

**Start Implementation**

And we begin.

Good.

Now we move to:

# PHASE 14 — SELF-REVIEW CHECKLIST (Before Coding)

This phase is rarely done.
But this is what separates disciplined engineers.

Before writing code, we verify:

> “Is our design actually clean?”

---

# 14.1 Architecture Integrity Check

Ask yourself:

### 1. Does each layer have one responsibility?

- CLI → Only argument parsing
- Controller → Input handling + output formatting
- Service → Business rules
- Repository → File access only

If any layer overlaps → redesign.

---

### 2. Can we replace storage without touching service?

If answer is YES → architecture is correct.

If NO → repository abstraction failed.

---

### 3. Can we replace CLI with REST API without touching service?

If YES → layering is correct.

If NO → logic leaked into controller.

---

# 14.2 Domain Integrity Check

- Is Task model clearly defined?
- Are state transitions strict?
- Are invariants documented?
- Is ID immutable?
- Are timestamps handled consistently?

If unclear → domain is weak.

---

# 14.3 Error Handling Check

- Do we differentiate validation vs system errors?
- Does service throw instead of log?
- Does controller handle formatting?
- Do we avoid exposing stack traces?

If not → error design incomplete.

---

# 14.4 Scalability Awareness Check

Can you clearly state:

- Time complexity of each operation?
- Why file I/O is bottleneck?
- What breaks under concurrency?
- How to migrate to DB later?

If yes → you are thinking like engineer.

---

# 14.5 Security Discipline Check

- Do we validate all inputs?
- Do we avoid dynamic file paths?
- Do we protect against corrupted JSON?
- Do we handle unexpected failures gracefully?

If yes → defensive programming mindset built.

---

# 14.6 Production Thinking Check

- No hardcoded values?
- Config centralized?
- Clean folder structure?
- Versioning possible?
- Data persists across sessions?

If yes → production mindset present.

---

# 14.7 Final Mental Snapshot

At this point, before writing a single line of code, you can:

- Draw full architecture from memory
- Explain data flow
- Explain trade-offs
- Explain limitations
- Explain upgrade path

That means:

You are not coding randomly.

You are building intentionally.

---

# Where We Stand Now

We have completed:

0. Project Context
1. Domain Understanding
2. System Design
3. Trade-offs
4. Folder Structure
5. Implementation Strategy
6. Error Handling
7. Security
8. Scalability
9. Performance
10. Concurrency
11. Testing
12. Deployment
13. Synthesis
14. Self-review

This is full backend blueprint coverage.

---

Now there are only two paths:

1. Start Implementation
2. Refine Design Further (if you feel unclear)

You choose.

Say:

**Start Implementation**

And we begin writing real code — clean, layered, step-by-step.

Good.

Now we officially move to:

# PHASE 15 — IMPLEMENTATION (STARTING REAL CODE)

Now everything becomes concrete.

We build exactly in the order we planned.

No shortcuts.

---

# STEP 1 — PROJECT SETUP

We begin with infrastructure only.

No business logic yet.

---

## 1.1 Initialize Project

Run:

```bash
npm init -y
```

Then modify `package.json`.

### package.json

```json
{
  "name": "task-tracker-cli",
  "version": "1.0.0",
  "type": "module",
  "description": "File-based task management CLI",
  "bin": {
    "task": "./index.js"
  },
  "scripts": {
    "start": "node index.js"
  }
}
```

Explanation:

- `"type": "module"` → Use ES Modules
- `"bin"` → Allows global CLI usage
- `"start"` → Run locally

---

## 1.2 Create Folder Structure

Create this manually:

```
task-tracker-cli/
│
├── src/
│   ├── cli/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   ├── errors/
│   ├── utils/
│   └── config/
│
├── data/
│   └── tasks.json
│
├── index.js
└── package.json
```

---

## 1.3 Initialize tasks.json

Inside `data/tasks.json`:

```json
[]
```

Why?

So repository doesn’t crash when reading first time.

---

# STEP 2 — CONFIGURATION LAYER

Create:

### src/config/constants.js

```js
export const DATA_FILE_PATH = "./data/tasks.json";
export const MAX_TITLE_LENGTH = 255;
export const DEFAULT_STATUS = "pending";
```

Why?

Never hardcode values in logic files.

---

# STEP 3 — ERROR CLASSES

Create:

### src/errors/ValidationError.js

```js
export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
```

---

### src/errors/NotFoundError.js

```js
export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
}
```

---

We now have:

- Project setup
- Folder structure
- Config
- Error classes

No business logic yet.

Architecture skeleton is ready.

---

Next Step:

# STEP 4 — REPOSITORY LAYER

We will implement:

- readTasks()
- writeTasks()
- ensureFileExists()

This is foundation.

Say:

**Continue Repository**

And we build it carefully, properly, with full explanation.

Good.

Now we build the foundation properly.

# STEP 4 — REPOSITORY LAYER

Repository = storage abstraction.

It must:

- Read file
- Write file
- Handle file creation
- Handle corrupted JSON
- Throw system errors
- Contain NO business logic

---

# File: src/repositories/taskRepository.js

We implement carefully.

---

## 4.1 Import Required Modules

```js
import fs from "fs/promises";
import { DATA_FILE_PATH } from "../config/constants.js";
```

Why:

- Use async fs API
- Avoid sync blocking
- Use config path (no hardcoding)

---

## 4.2 ensureFileExists()

Purpose:

- If tasks.json does not exist → create it
- Prevent crash on first run

```js
async function ensureFileExists() {
  try {
    await fs.access(DATA_FILE_PATH);
  } catch {
    // File does not exist → create with empty array
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify([], null, 2));
  }
}
```

Explanation:

- fs.access checks existence
- If fails → create file
- Initialize with empty array

---

## 4.3 readTasks()

Responsibilities:

- Ensure file exists
- Read file
- Parse JSON
- Validate it's an array
- Throw system error if corrupted

```js
export async function readTasks() {
  await ensureFileExists();

  try {
    const data = await fs.readFile(DATA_FILE_PATH, "utf-8");

    const tasks = JSON.parse(data);

    if (!Array.isArray(tasks)) {
      throw new Error("Invalid data format");
    }

    return tasks;
  } catch (error) {
    throw new Error("Failed to read tasks file");
  }
}
```

Important:

Repository throws generic system errors.

It does NOT:

- Throw ValidationError
- Throw NotFoundError

Because it does not know domain rules.

---

## 4.4 writeTasks()

Responsibilities:

- Serialize array
- Write to file
- Handle write errors

```js
export async function writeTasks(tasks) {
  try {
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(tasks, null, 2));
  } catch (error) {
    throw new Error("Failed to write tasks file");
  }
}
```

Explanation:

- JSON.stringify with indentation
- Clean formatting
- Wrap in try-catch for safety

---

# Repository Layer Summary

We now have:

- File existence safety
- JSON parsing safety
- Basic corruption protection
- Async I/O
- Clean abstraction

Repository does:

File only.

No logic about:

- Title validation
- ID generation
- State transitions

That belongs in service.

---

# What We Just Built

Data layer abstraction.

If tomorrow we switch to:

- SQLite
- PostgreSQL
- MongoDB

Only this file changes.

Service remains untouched.

That is correct layering.

---

Next step:

# STEP 5 — SERVICE LAYER (Core Brain)

This is where business logic lives.

We will implement:

- addTask
- listTasks
- updateTask
- deleteTask
- markDone

Say:

**Continue Service**

And we build the brain carefully.

Good.

Now we build the most important layer.

# STEP 5 — SERVICE LAYER (The Brain)

Service layer enforces:

- Business rules
- Validation
- State transitions
- ID generation
- Timestamp updates

It must NOT:

- Print anything
- Read CLI arguments directly
- Know about process.argv
- Contain file logic

It only talks to repository.

---

# File: src/services/taskService.js

---

## 5.1 Imports

```js
import { readTasks, writeTasks } from "../repositories/taskRepository.js";
import { ValidationError } from "../errors/ValidationError.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { MAX_TITLE_LENGTH, DEFAULT_STATUS } from "../config/constants.js";
```

---

# 5.2 Helper: generateNextId

We compute next ID safely.

```js
function generateNextId(tasks) {
  if (tasks.length === 0) return 1;

  const maxId = Math.max(...tasks.map((task) => task.id));
  return maxId + 1;
}
```

Time Complexity: O(n)

Acceptable for MVP.

---

# 5.3 addTask(title)

Business rules:

- Title must exist
- Title must not exceed max length
- Title trimmed
- Default status = pending
- Set timestamps

```js
export async function addTask(title) {
  if (!title || !title.trim()) {
    throw new ValidationError("Title cannot be empty");
  }

  if (title.length > MAX_TITLE_LENGTH) {
    throw new ValidationError("Title exceeds maximum length");
  }

  const tasks = await readTasks();

  const newTask = {
    id: generateNextId(tasks),
    title: title.trim(),
    status: DEFAULT_STATUS,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  await writeTasks(tasks);

  return newTask;
}
```

---

# 5.4 listTasks()

Simple fetch.

```js
export async function listTasks() {
  const tasks = await readTasks();
  return tasks;
}
```

---

# 5.5 updateTask(id, newTitle)

Rules:

- ID must exist
- Title valid
- ID immutable
- Update updatedAt

```js
export async function updateTask(id, newTitle) {
  if (!newTitle || !newTitle.trim()) {
    throw new ValidationError("Title cannot be empty");
  }

  const tasks = await readTasks();

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    throw new NotFoundError("Task not found");
  }

  task.title = newTitle.trim();
  task.updatedAt = new Date().toISOString();

  await writeTasks(tasks);

  return task;
}
```

---

# 5.6 deleteTask(id)

Rules:

- Must exist
- Remove from array

```js
export async function deleteTask(id) {
  const tasks = await readTasks();

  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    throw new NotFoundError("Task not found");
  }

  const deleted = tasks.splice(index, 1);

  await writeTasks(tasks);

  return deleted[0];
}
```

---

# 5.7 markDone(id)

Rules:

- Must exist
- Cannot mark already done

```js
export async function markDone(id) {
  const tasks = await readTasks();

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    throw new NotFoundError("Task not found");
  }

  if (task.status === "done") {
    throw new ValidationError("Task already marked as done");
  }

  task.status = "done";
  task.updatedAt = new Date().toISOString();

  await writeTasks(tasks);

  return task;
}
```

---

# Service Layer Summary

Service now enforces:

- Input validation
- State transitions
- ID generation
- Timestamp management
- Proper domain errors

It does NOT:

- Log to console
- Exit process
- Parse CLI input

It only returns data or throws errors.

That is correct design.

---

We now have:

- Repository layer (file abstraction)
- Service layer (business logic)

Next step:

# STEP 6 — CONTROLLER LAYER

This layer:

- Parses arguments
- Converts types
- Calls service
- Handles errors
- Prints clean output

Say:

**Continue Controller**

And we connect logic to user interface.

Good.

Now we connect business logic to the outside world.

# STEP 6 — CONTROLLER LAYER

Controller acts as:

CLI ↔ Service bridge

Responsibilities:

- Parse and validate raw inputs
- Convert string → number
- Call service methods
- Catch errors
- Print formatted output
- Exit with proper status codes

Controller must NOT:

- Contain business logic
- Read/write files directly

---

# File: src/controllers/taskController.js

---

## 6.1 Imports

```js
import {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  markDone,
} from "../services/taskService.js";

import { ValidationError } from "../errors/ValidationError.js";
import { NotFoundError } from "../errors/NotFoundError.js";
```

---

# 6.2 Helper: parseId

CLI gives ID as string.
We convert safely.

```js
function parseId(idString) {
  const id = Number(idString);

  if (!id || id < 1 || !Number.isInteger(id)) {
    throw new ValidationError("Invalid task ID");
  }

  return id;
}
```

Why here and not service?

Because:

- CLI provides string
- Service expects number
- Type conversion belongs to interface layer

---

# 6.3 handleAdd

```js
export async function handleAdd(title) {
  try {
    const task = await addTask(title);
    console.log("Task added successfully:");
    console.log(task);
  } catch (error) {
    handleError(error);
  }
}
```

---

# 6.4 handleList

```js
export async function handleList() {
  try {
    const tasks = await listTasks();

    if (tasks.length === 0) {
      console.log("No tasks found.");
      return;
    }

    tasks.forEach((task) => {
      console.log(`[${task.id}] ${task.title} - ${task.status}`);
    });
  } catch (error) {
    handleError(error);
  }
}
```

---

# 6.5 handleUpdate

```js
export async function handleUpdate(idString, newTitle) {
  try {
    const id = parseId(idString);

    const task = await updateTask(id, newTitle);

    console.log("Task updated successfully:");
    console.log(task);
  } catch (error) {
    handleError(error);
  }
}
```

---

# 6.6 handleDelete

```js
export async function handleDelete(idString) {
  try {
    const id = parseId(idString);

    await deleteTask(id);

    console.log("Task deleted successfully.");
  } catch (error) {
    handleError(error);
  }
}
```

---

# 6.7 handleMarkDone

```js
export async function handleMarkDone(idString) {
  try {
    const id = parseId(idString);

    const task = await markDone(id);

    console.log("Task marked as done:");
    console.log(task);
  } catch (error) {
    handleError(error);
  }
}
```

---

# 6.8 Centralized Error Handler

This ensures clean output.

```js
function handleError(error) {
  if (error instanceof ValidationError) {
    console.error("Validation Error:", error.message);
  } else if (error instanceof NotFoundError) {
    console.error("Not Found:", error.message);
  } else {
    console.error("Unexpected Error:", error.message);
  }

  process.exit(1);
}
```

Important:

- Service throws
- Controller formats
- CLI exits gracefully

No raw stack traces exposed.

---

# Controller Layer Summary

Now we have:

- Input parsing
- Type conversion
- Clean output formatting
- Centralized error handling
- Proper exit codes

Service remains pure.
Repository remains storage-only.

Architecture is intact.

---

Next step:

# STEP 7 — CLI ENTRY POINT

We now connect everything.

This is where:

process.argv → Controller routing

Say:

**Continue CLI**

And we finish the system.

Good.

Now we complete the system.

# STEP 7 — CLI ENTRY POINT

This is the outermost layer.

Responsibilities:

- Read process.argv
- Identify command
- Route to controller
- Handle unknown commands

It must NOT:

- Contain business logic
- Contain file logic
- Contain validation logic (beyond routing)

---

# File: index.js (Project Root)

---

## 7.1 Shebang (Important for Global CLI)

Add this at the very top:

```js
#!/usr/bin/env node
```

This allows OS to execute file as CLI.

---

## 7.2 Imports

```js
import {
  handleAdd,
  handleList,
  handleUpdate,
  handleDelete,
  handleMarkDone,
} from "./src/controllers/taskController.js";
```

---

## 7.3 Parse CLI Arguments

Remember:

`process.argv` structure:

```
[ node, index.js, command, ...args ]
```

So:

```js
const [, , command, ...args] = process.argv;
```

---

## 7.4 Command Routing

```js
async function main() {
  switch (command) {
    case "add":
      await handleAdd(args.join(" "));
      break;

    case "list":
      await handleList();
      break;

    case "update":
      await handleUpdate(args[0], args.slice(1).join(" "));
      break;

    case "delete":
      await handleDelete(args[0]);
      break;

    case "mark-done":
      await handleMarkDone(args[0]);
      break;

    default:
      console.log("Unknown command.");
      console.log("Available commands:");
      console.log('  add "Task Title"');
      console.log("  list");
      console.log('  update <id> "New Title"');
      console.log("  delete <id>");
      console.log("  mark-done <id>");
      process.exit(1);
  }
}

main();
```

---

# CLI Layer Summary

Now full flow is complete:

User types:

```
task add "Learn Node"
```

Flow:

CLI (index.js)
→ Controller
→ Service
→ Repository
→ File

Clean separation maintained.

---

# FULL SYSTEM COMPLETE

You now have:

- Layered architecture
- File persistence
- Business rule enforcement
- Error classification
- Async I/O
- CLI routing
- Extensible structure

This is a properly engineered CLI backend system.

---

# Quick Manual Test Checklist

Try:

```bash
node index.js add "First Task"
node index.js list
node index.js update 1 "Updated Task"
node index.js mark-done 1
node index.js delete 1
```

Verify:

- tasks.json updates correctly
- Errors show properly
- No crashes
- Proper exit on failure

---

# What You Just Built

Not just a CLI.

You built:

- A mini backend architecture
- With domain logic
- Storage abstraction
- Error system
- Scalability awareness

This is backend foundation.

---

Next options:

1. Add testing layer
2. Add improvements (pagination, filtering)
3. Improve concurrency (atomic write)
4. Move to SQLite (Phase 2 upgrade)
5. Refactor into reusable CLI framework style

You choose.

One phase at a time.

Perfect.

Now I will give you **complete final codebase** in clean, organized structure with **proper explanatory comments inside code**.

We will follow this structure:

```
task-tracker-cli/
│
├── src/
│   ├── config/constants.js
│   ├── errors/ValidationError.js
│   ├── errors/NotFoundError.js
│   ├── repositories/taskRepository.js
│   ├── services/taskService.js
│   ├── controllers/taskController.js
│
├── data/tasks.json
├── index.js
└── package.json
```

Everything fully commented.

---

# 1️⃣ package.json

```json
{
  "name": "task-tracker-cli",
  "version": "1.0.0",
  "type": "module",
  "description": "File-based task management CLI",
  "bin": {
    "task": "./index.js"
  },
  "scripts": {
    "start": "node index.js"
  }
}
```

Explanation:

- `"type": "module"` → Enables ES Modules (import/export).
- `"bin"` → Allows global CLI usage using `npm link`.

---

# 2️⃣ data/tasks.json

```json
[]
```

Initial empty array for storing tasks.

---

# 3️⃣ src/config/constants.js

```js
// Path to our persistent storage file
export const DATA_FILE_PATH = "./data/tasks.json";

// Maximum allowed length for task title
export const MAX_TITLE_LENGTH = 255;

// Default status assigned to new tasks
export const DEFAULT_STATUS = "pending";
```

---

# 4️⃣ src/errors/ValidationError.js

```js
// Custom error for invalid user input
export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
```

---

# 5️⃣ src/errors/NotFoundError.js

```js
// Custom error when requested resource does not exist
export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
}
```

---

# 6️⃣ src/repositories/taskRepository.js

```js
import fs from "fs/promises";
import { DATA_FILE_PATH } from "../config/constants.js";

/*
  Ensures that tasks.json exists.
  If not, creates it with empty array.
*/
async function ensureFileExists() {
  try {
    await fs.access(DATA_FILE_PATH);
  } catch {
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify([], null, 2));
  }
}

/*
  Reads all tasks from file.
  Returns parsed JSON array.
*/
export async function readTasks() {
  await ensureFileExists();

  try {
    const data = await fs.readFile(DATA_FILE_PATH, "utf-8");
    const tasks = JSON.parse(data);

    if (!Array.isArray(tasks)) {
      throw new Error("Invalid data format");
    }

    return tasks;
  } catch {
    throw new Error("Failed to read tasks file");
  }
}

/*
  Writes updated task list to file.
*/
export async function writeTasks(tasks) {
  try {
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(tasks, null, 2));
  } catch {
    throw new Error("Failed to write tasks file");
  }
}
```

---

# 7️⃣ src/services/taskService.js

```js
import { readTasks, writeTasks } from "../repositories/taskRepository.js";
import { ValidationError } from "../errors/ValidationError.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { MAX_TITLE_LENGTH, DEFAULT_STATUS } from "../config/constants.js";

/*
  Generates next unique ID.
  Finds max existing ID and increments.
*/
function generateNextId(tasks) {
  if (tasks.length === 0) return 1;
  const maxId = Math.max(...tasks.map((task) => task.id));
  return maxId + 1;
}

/*
  Adds a new task after validation.
*/
export async function addTask(title) {
  if (!title || !title.trim()) {
    throw new ValidationError("Title cannot be empty");
  }

  if (title.length > MAX_TITLE_LENGTH) {
    throw new ValidationError("Title exceeds maximum length");
  }

  const tasks = await readTasks();

  const newTask = {
    id: generateNextId(tasks),
    title: title.trim(),
    status: DEFAULT_STATUS,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  await writeTasks(tasks);

  return newTask;
}

/*
  Returns all tasks.
*/
export async function listTasks() {
  return await readTasks();
}

/*
  Updates title of existing task.
*/
export async function updateTask(id, newTitle) {
  if (!newTitle || !newTitle.trim()) {
    throw new ValidationError("Title cannot be empty");
  }

  const tasks = await readTasks();
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    throw new NotFoundError("Task not found");
  }

  task.title = newTitle.trim();
  task.updatedAt = new Date().toISOString();

  await writeTasks(tasks);

  return task;
}

/*
  Deletes a task by ID.
*/
export async function deleteTask(id) {
  const tasks = await readTasks();
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    throw new NotFoundError("Task not found");
  }

  const deleted = tasks.splice(index, 1);

  await writeTasks(tasks);

  return deleted[0];
}

/*
  Marks task as completed.
*/
export async function markDone(id) {
  const tasks = await readTasks();
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    throw new NotFoundError("Task not found");
  }

  if (task.status === "done") {
    throw new ValidationError("Task already marked as done");
  }

  task.status = "done";
  task.updatedAt = new Date().toISOString();

  await writeTasks(tasks);

  return task;
}
```

---

# 8️⃣ src/controllers/taskController.js

```js
import {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  markDone,
} from "../services/taskService.js";

import { ValidationError } from "../errors/ValidationError.js";
import { NotFoundError } from "../errors/NotFoundError.js";

/*
  Converts string ID from CLI into valid number.
*/
function parseId(idString) {
  const id = Number(idString);

  if (!id || id < 1 || !Number.isInteger(id)) {
    throw new ValidationError("Invalid task ID");
  }

  return id;
}

/*
  Centralized error handler.
*/
function handleError(error) {
  if (error instanceof ValidationError) {
    console.error("Validation Error:", error.message);
  } else if (error instanceof NotFoundError) {
    console.error("Not Found:", error.message);
  } else {
    console.error("Unexpected Error:", error.message);
  }

  process.exit(1);
}

export async function handleAdd(title) {
  try {
    const task = await addTask(title);
    console.log("Task added successfully:");
    console.log(task);
  } catch (error) {
    handleError(error);
  }
}

export async function handleList() {
  try {
    const tasks = await listTasks();

    if (tasks.length === 0) {
      console.log("No tasks found.");
      return;
    }

    tasks.forEach((task) => {
      console.log(`[${task.id}] ${task.title} - ${task.status}`);
    });
  } catch (error) {
    handleError(error);
  }
}

export async function handleUpdate(idString, newTitle) {
  try {
    const id = parseId(idString);
    const task = await updateTask(id, newTitle);
    console.log("Task updated successfully:");
    console.log(task);
  } catch (error) {
    handleError(error);
  }
}

export async function handleDelete(idString) {
  try {
    const id = parseId(idString);
    await deleteTask(id);
    console.log("Task deleted successfully.");
  } catch (error) {
    handleError(error);
  }
}

export async function handleMarkDone(idString) {
  try {
    const id = parseId(idString);
    const task = await markDone(id);
    console.log("Task marked as done:");
    console.log(task);
  } catch (error) {
    handleError(error);
  }
}
```

---

# 9️⃣ index.js (Entry Point)

```js
#!/usr/bin/env node

import {
  handleAdd,
  handleList,
  handleUpdate,
  handleDelete,
  handleMarkDone,
} from "./src/controllers/taskController.js";

/*
  Extract command and arguments from CLI.
  Example:
  node index.js add "Learn Node"
*/
const [, , command, ...args] = process.argv;

/*
  Routes command to appropriate controller.
*/
async function main() {
  switch (command) {
    case "add":
      await handleAdd(args.join(" "));
      break;

    case "list":
      await handleList();
      break;

    case "update":
      await handleUpdate(args[0], args.slice(1).join(" "));
      break;

    case "delete":
      await handleDelete(args[0]);
      break;

    case "mark-done":
      await handleMarkDone(args[0]);
      break;

    default:
      console.log("Unknown command.");
      console.log("Available commands:");
      console.log('  add "Task Title"');
      console.log("  list");
      console.log('  update <id> "New Title"');
      console.log("  delete <id>");
      console.log("  mark-done <id>");
      process.exit(1);
  }
}

main();
```

---

# ✅ FINAL RESULT

You now have:

- Clean layered architecture
- Proper error handling
- File persistence
- Validation rules
- CLI routing
- Extensible design

This is not just CLI.

This is backend architecture in miniature.

---

If you want next level:

- Add atomic write for concurrency safety
- Add filtering (`list --done`)
- Add priority support
- Add pagination
- Migrate to SQLite

Tell me next direction.

