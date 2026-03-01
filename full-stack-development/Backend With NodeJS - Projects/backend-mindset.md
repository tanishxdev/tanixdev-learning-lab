# UNIVERSAL BACKEND PROJECT BLUEPRINT

Use this template for every project going forward.

---

# 0. PROJECT CONTEXT

## 0.1 Problem Statement

- What problem are we solving?
- Who is the user?
- Why does this system exist?
- What pain does it remove?

Do NOT start coding before this.

---

## 0.2 Scope Definition

Define:

- What is included?
- What is NOT included?
- What is MVP?
- What is Phase 2?

Prevent feature creep.

---

# 1. DOMAIN UNDERSTANDING

## 1.1 Core Entities

List domain models.

Example:

- User
- Task
- Order
- Product
- Payment

For each entity define:

```js
{
  id: ?,
  attributes: ?,
  constraints: ?,
  relationships: ?
}
```

---

## 1.2 Business Rules

Define:

- Validation rules
- State transitions
- Permissions
- Invariants

Example:

- A task cannot be completed if not created
- An order cannot be cancelled after shipping

This is domain logic.

---

## 1.3 Edge Cases

Ask:

- What if input is missing?
- What if data already exists?
- What if concurrent updates?
- What if system crashes mid-write?

---

# 2. SYSTEM DESIGN (HIGH LEVEL)

Before writing code, draw:

```text
Client
  ↓
Controller / Interface
  ↓
Service Layer
  ↓
Repository Layer
  ↓
Database
```

---

## 2.1 Architecture Style

Choose:

- Layered Architecture
- MVC
- Clean Architecture
- Microservices
- Event-driven

Explain why.

---

## 2.2 Data Flow Design

For each operation:

1. Input
2. Validation
3. Business logic
4. Persistence
5. Response

Document flow for:

- Create
- Read
- Update
- Delete

---

# 3. TRADE-OFF ANALYSIS

Always ask:

## 3.1 Storage Choice

- JSON
- SQL
- NoSQL
- In-memory
- Redis

Trade-offs:

| Option | Pros | Cons |
| ------ | ---- | ---- |

---

## 3.2 Sync vs Async

- Blocking vs non-blocking
- Performance vs simplicity

---

## 3.3 ID Strategy

- Auto-increment
- UUID
- Nanoid
- Database-generated

---

## 3.4 Error Strategy

- Throw exceptions?
- Custom error classes?
- Global error middleware?

---

## 3.5 Validation Strategy

- Manual validation?
- Schema-based?
- Library-based?

---

# 4. FOLDER STRUCTURE DESIGN

Define before coding.

General Template:

```
project-name/
│
├── src/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   ├── middleware/
│   ├── validators/
│   ├── utils/
│   └── config/
│
├── tests/
│   ├── unit/
│   ├── integration/
│
├── docs/
│   ├── API.md
│   ├── ARCHITECTURE.md
│
├── data/
├── index.js
├── package.json
└── README.md
```

Each folder must have a reason.

---

# 5. IMPLEMENTATION PHASE

## 5.1 Infrastructure First

Build:

- Config
- Database connection
- File layer
- Environment setup

---

## 5.2 Domain Models

Define:

- Schema
- Constraints
- Relationships

---

## 5.3 Repository Layer

Responsibilities:

- Data access
- Query logic
- No business rules

---

## 5.4 Service Layer

Responsibilities:

- Business rules
- Validation calls
- State transitions
- Error throwing

---

## 5.5 Controller / Interface Layer

Responsibilities:

- Parse input
- Call service
- Send response
- Handle errors

---

# 6. CODE QUALITY CONCEPTS

Always include:

- Single Responsibility
- Dependency Injection (if needed)
- No logic in controllers
- No DB logic in service (if repository exists)
- No hardcoded secrets
- Environment variables

---

# 7. ERROR HANDLING SYSTEM

Design:

## 7.1 Error Types

- ValidationError
- NotFoundError
- AuthError
- InternalServerError

---

## 7.2 Error Propagation

Controller catches.
Global handler formats.

Never console.log inside service.

---

# 8. SECURITY DESIGN

Always ask:

- Input validation?
- Authentication?
- Authorization?
- Rate limiting?
- SQL injection prevention?
- XSS?
- CSRF?
- Secure cookies?
- Environment variables?

Even if small project.

Security mindset must be default.

---

# 9. SCALABILITY THINKING

Ask:

- What breaks at 10k users?
- What breaks at 1M users?
- Where is bottleneck?
- How to cache?
- How to paginate?
- How to shard?

---

# 10. PERFORMANCE ANALYSIS

For each operation:

- Time complexity
- Space complexity
- I/O cost
- Network cost

---

# 11. CONCURRENCY CONSIDERATION

Ask:

- What if two requests hit same resource?
- Is operation atomic?
- Need locking?
- Need transactions?

---

# 12. TESTING STRATEGY

Define:

## 12.1 Unit Tests

Test service independently.

## 12.2 Integration Tests

Test controller + service.

## 12.3 Edge Case Tests

- Invalid input
- Duplicate data
- Concurrent simulation

---

# 13. DEPLOYMENT STRATEGY

Define:

- Environment variables
- Production config
- Logging
- Monitoring
- CI/CD
- Docker
- Health checks

---

# 14. DOCUMENTATION STRUCTURE

Every project must include:

README.md
ARCHITECTURE.md
API.md
DEPLOYMENT.md

---

# 15. INTERVIEW PREPARATION SECTION

After finishing project, answer:

### Architecture Questions

- Why this architecture?
- What alternatives?
- How to scale?

### Domain Questions

- What are invariants?
- How are rules enforced?

### Performance Questions

- What is time complexity?
- What is bottleneck?

### Security Questions

- How do you prevent injection?
- How are passwords stored?

### Trade-off Questions

- Why SQL over NoSQL?
- Why synchronous approach?

---

# 16. IMPROVEMENT ROADMAP SECTION

After finishing project, document:

- Current limitations
- Future improvements
- Scalability upgrades
- Refactor ideas

---

# 17. SELF-REVIEW CHECKLIST

Before marking project complete:

- No hardcoded values
- Proper error handling
- No console logs in production logic
- Proper structure
- Code readable
- Edge cases handled
- Trade-offs documented

---

# 18. SYNTHESIS SECTION (Most Important)

After building, write:

- What did I learn?
- What mistakes I made?
- What design I would change?
- What I now understand better?

Reflection builds senior thinking.

---

# FINAL MENTAL MODEL

Every backend project must answer:

1. What is the domain?
2. How does data flow?
3. Where is logic located?
4. Where is storage abstracted?
5. What breaks at scale?
6. How does system fail?
7. How does system recover?
8. How can system evolve?

If you can answer all 8 —
You built it properly.
