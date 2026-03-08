# Distributed Transactions (2PC – 3PC – Saga)

Simple, clean, complete explanation

Distributed transactions ensure **multiple services/databases** succeed or fail together in a consistent way.

Used when a single business action spans multiple systems:

* Payment + Order creation
* Booking flight + hotel
* Update inventory + charge user
* Multi-shard or multi-DB write

Three main ways to coordinate distributed transactions:

1. **2PC (Two-Phase Commit)**
2. **3PC (Three-Phase Commit)**
3. **Saga (Long-running, microservices-friendly)**

---

# 1. Why Distributed Transactions Needed?

Because in microservices:

* Every service owns its own DB
* A single business action touches multiple services
* Each DB commit is independent
* One service may fail while others succeed → inconsistency

Distributed transactions ensure:

```
Either all succeed  
or  
All fail + rollback
```

---

# 2. TWO-PHASE COMMIT (2PC)

A classic strong-consistency protocol.

**Participants:**

* **Coordinator** — manages transaction
* **Participants** — actual databases/services

2PC has **two phases**:

---

## Phase 1: Prepare Phase

Coordinator asks all participants:

“Can you commit?”

Each participant:

* Executes the transaction **locally**
* Locks involved rows/resources
* Writes to a temporary log
* Replies with **YES** (ready) or **NO** (cannot commit)

---

## Phase 2: Commit Phase

If all participants replied YES:

* Coordinator sends “COMMIT”
* Participants commit final transaction
* Locks released

If ANY participant replies NO:

* Coordinator sends “ROLLBACK”
* Everyone aborts

---

## Strengths

* Strong consistency
* All-or-nothing guarantee
* Works well for tightly coupled systems

## Weaknesses

* **Blocking protocol** → if coordinator fails, participants may wait indefinitely
* Locks held for long time → reduces performance
* Not suitable for microservices
* Coordinator = single point of failure

Used mostly in:

* Traditional monoliths
* Distributed SQL databases (XA transactions)
* Financial internal systems

---

# 3. THREE-PHASE COMMIT (3PC)

An improved version of 2PC that tries to avoid blocking.

Phases:

1. **CanCommit** — Same as prepare phase but without locking
2. **PreCommit** — Participants prepare and guarantee they can commit
3. **DoCommit** — Finally commit

Key improvement:
Participants can make progress even if coordinator fails.

---

## Strengths

* Non-blocking (compared to 2PC)
* Tries to tolerate coordinator failure

## Weaknesses

* Still fails under network partitions
* Too complex
* Rarely used in real-world systems
* Not suitable for modern microservices

Most modern systems **do NOT implement 3PC**.

---

# 4. SAGA PATTERN

(Saga is the **microservices standard** for distributed transactions.)

Saga breaks a transaction into **a sequence of local operations**.
Each operation has a **Compensation Step** that undoes it if needed.

Two major styles:

1. **Choreography Saga** (event-based)
2. **Orchestration Saga** (central controller)

---

## How Saga Works (Simple)

Business transaction:

```
Step 1 → Step 2 → Step 3 → Step 4
```

If **Step 3 fails**, saga triggers **compensation** in reverse order:

```
Undo Step 2  
Undo Step 1  
```

---

## Saga Example (E-commerce Order)

### Steps:

1. Reserve inventory
2. Charge payment
3. Create order
4. Send confirmation

### Compensation:

1. Cancel order
2. Refund payment
3. Release inventory

Sagas avoid global locks and allow long-running operations.

---

## Strengths

* Perfect for microservices
* Non-blocking
* High availability
* No centralized lock
* Works with asynchronous communication
* Handles long-running workflows

## Weaknesses

* Consistency is **eventual**, not strong
* Requires designing compensation logic
* Harder to reason about in complex workflows
* Failures must be carefully handled

Used in:

* Uber
* Airbnb
* Netflix
* DoorDash
* Any microservices workflow

---

# 5. When to Use Which?

### Use **2PC** when:

* You need strict consistency
* Systems share trust boundary
* Operations are short-lived
* Coordinator and participants are very reliable

Examples:

* Bank internal systems
* Distributed SQL engines
* Strong ACID guarantees required

---

### Use **3PC** when:

* Almost never (rare in real systems)
* Very specialized distributed DBs

---

### Use **Saga** when:

* You have microservices
* Independent databases
* Long-running processes
* Eventual consistency is acceptable
* You prefer decoupled services

Examples:

* Order/payment workflows
* Booking systems
* Multi-service business flows
* Distributed user enrollment

---

# 6. Comparison Table (Clear)

| Feature      | 2PC           | 3PC                     | Saga            |
| ------------ | ------------- | ----------------------- | --------------- |
| Consistency  | Strong        | Stronger (non-blocking) | Eventual        |
| Availability | Low           | Medium                  | High            |
| Blocking     | Yes           | Reduced                 | No              |
| Complexity   | Medium        | High                    | Medium          |
| Compensation | Not required  | Not required            | Required        |
| Use case     | Tight ACID DB | Rare                    | Microservices   |
| Coordinator  | Required      | Required                | Optional (orch) |
| Performance  | Slower        | Slower                  | Fast            |

---

# 7. Why Sagas replaced 2PC in microservices

Reasons:

* 2PC holds distributed locks → microservices stop scaling
* Coordinator failure blocks entire system
* High latency → slow workflows
* Microservices prefer async events, not global locks
* Compensation > rollback in long-running tasks

Saga embraces **eventual consistency**, which is acceptable in most business workflows.

---

# 8. Real System Examples

### Systems using 2PC:

* MySQL XA
* PostgreSQL XA
* Oracle Distributed Transactions

### Systems using Saga:

* Netflix Conductor
* Uber Cadence / Temporal
* AWS Step Functions
* Orchestration engines
* Most modern enterprise microservices

---

# 9. Interview-Ready Summary (30 Seconds)

Distributed transactions coordinate multi-service writes.
2PC ensures strict atomicity using a coordinator and two phases but is blocking and slow.
3PC improves fault tolerance but is rarely used in real systems.
Saga is the modern approach: break the transaction into steps, each with a compensation action, offering high availability and non-blocking execution — ideal for microservices.

Saga = eventual consistency + compensating actions
2PC = strong consistency + global coordination

