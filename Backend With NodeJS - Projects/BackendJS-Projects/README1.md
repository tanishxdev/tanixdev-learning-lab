# BackendJS Projects Hub

**Learn Backend by Building Real Systems (Node.js / Express / NestJS)**

---

## Why this repository exists

Frontend projects are easy to track because they are **visible on screen**.
Backend projects are invisible — they work behind the scenes.

This repository exists to make **backend learning visible, structured, and progressive**, just like a React project hub.

Instead of random APIs, this repo is organized as:

* Clear **levels**
* Clear **responsibilities**
* Clear **system thinking**

Each folder represents **one backend system**, not just code.

---

## How to use this repository

**Rules**

1. Build projects in order (Level 01 → Level 07)
2. One project at a time
3. Every project has its own README
4. Focus on **flow**, not just endpoints
5. Test using Postman / curl / Swagger

**Mental Model**

* React project = UI behavior
* Backend project = System guarantee

---

## Repository Structure

```
BackendJS-Projects/
├── shared/                 # Common utilities & configs
├── projects/               # All backend mini-projects
│   ├── level-01_basics/
│   ├── level-02_crud-data/
│   ├── level-03_auth-security/
│   ├── level-04_system-features/
│   ├── level-05_async-realtime/
│   ├── level-06_architecture/
│   └── level-07_production-thinking/
└── README.md
```

---

# LEVEL 01 — BACKEND FOUNDATIONS

**Goal:**
Understand how a backend server works at the most basic level.

**Focus:**
Request → Response → Logic

### Projects

1. **Health Check API**
   Simple server that confirms backend is running.

2. **Counter API**
   Increment, decrement, reset counter (backend version of `useState`).

3. **Request Logger API**
   Logs incoming requests to understand middleware flow.

---

# LEVEL 02 — CRUD & DATA FLOW

**Goal:**
Learn how backend manages and owns data.

**Focus:**
CRUD, validation, pagination, ownership.

### Projects

4. **Notes API**
   Create and manage personal notes.

5. **Todo API**
   Add, update, delete, filter todos.

6. **Expense Tracker API**
   Track expenses with categories and totals.

7. **Contact Manager API**
   Store and search contacts.

---

# LEVEL 03 — AUTH & SECURITY

**Goal:**
Understand identity, authentication, and authorization.

**Focus:**
Trust, protection, and access control.

### Projects

8. **JWT Authentication API**
   Signup, login, protected routes.

9. **Session-Based Authentication**
   Cookie + session auth.

10. **Role-Based Access Control (RBAC)**
    Admin, user, moderator permissions.

11. **Password Reset System**
    Forgot password → reset flow.

---

# LEVEL 04 — SYSTEM FEATURES (REAL-WORLD BACKEND)

**Goal:**
Build backend features used in real products.

**Focus:**
Files, emails, links, search.

### Projects

12. **File Upload Service**
    Upload and validate files.

13. **Email Notification Service**
    Send transactional emails.

14. **URL Shortener Service**
    Short URL → redirect system.

15. **Search API**
    Text search with filters.

16. **Feature Flag Service**
    Enable / disable features dynamically.

---

# LEVEL 05 — ASYNC & REAL-TIME SYSTEMS

**Goal:**
Move beyond simple request-response systems.

**Focus:**
Queues, background jobs, real-time events.

### Projects

17. **Background Job Processor**
    Handle long-running tasks.

18. **Email Queue System**
    Send emails asynchronously.

19. **Real-Time Chat Backend**
    WebSocket-based messaging.

20. **Notification Queue**
    Event-based notifications.

---

# LEVEL 06 — ARCHITECTURE & SCALING

**Goal:**
Think like a backend architect.

**Focus:**
Scalability, protection, separation of concerns.

### Projects

21. **API Gateway**
    Single entry point for services.

22. **Microservice Auth + User System**
    Split services with communication.

23. **Central Logging Service**
    Collect and store logs.

24. **Rate Limiter System**
    Protect APIs from abuse.

---

# LEVEL 07 — PRODUCTION THINKING

**Goal:**
Prepare for real production systems.

**Focus:**
Reliability, observability, enterprise patterns.

### Projects

25. **Audit Log System**
    Track system actions.

26. **Analytics Event Collector**
    High-write event ingestion.

27. **Multi-Tenant Backend**
    One backend, multiple organizations.

28. **Payment Webhook Handler**
    Handle external payment events.

29. **SaaS Starter Backend**
    Auth, billing, roles, logs combined.

30. **Deployment-Ready API**
    Env config, health checks, production setup.

---

## Tech Stack Used Across Projects

* Node.js
* Express.js
* NestJS (advanced levels)
* MongoDB / PostgreSQL
* Redis
* JWT / Sessions
* Bull / Queues
* WebSockets
* Docker (later stages)

---

## What this repository will give you

* Backend clarity (no randomness)
* Strong system thinking
* Real-world confidence
* Clean architecture habits
* Easy transition to full-stack or backend roles

---

## Final Note

This is **not interview prep**.
This is **backend mastery by building systems**.

If React taught you **what users see**,
this repo teaches you **what systems guarantee**.

Build slow. Build clean. Build fully.
