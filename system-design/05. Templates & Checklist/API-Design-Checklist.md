
# **Tradeoffs Checklist**

A comprehensive, reusable checklist to evaluate tradeoffs in system design decisions.
Use this during interviews to make your solution look mature, balanced, and realistic.

System Design is **never about a perfect solution** — it’s about choosing the right tradeoffs.

This checklist covers all major decision areas.

---

# **0. Why Tradeoffs Matter**

Every design decision affects:

* performance
* scalability
* consistency
* cost
* complexity
* reliability

Interviews become stronger when you explain **why** you made a decision and **what you are sacrificing**.

---

# **1. Database Tradeoffs**

## **SQL vs NoSQL**

**SQL Pros**

* Strong consistency
* Complex queries
* ACID guarantees
* Relationships

**SQL Cons**

* Harder to scale horizontally
* Expensive joins at scale

**NoSQL Pros**

* Horizontally scalable
* High write/read throughput
* Flexible schema

**NoSQL Cons**

* Weaker consistency
* Limited query patterns
* Often denormalized

**Tradeoff questions:**

* Do I need transactions?
* Do I need flexible schema?
* Do I need global scalability?

---

# **2. Consistency vs Availability (CAP)**

**Strong Consistency**

* Correctness
* Simpler reasoning
* Higher latency
* Possible unavailability

**Eventual Consistency**

* High availability
* Lower latency
* Complex conflict resolution

Choose based on:

* user expectations
* data criticality
* multi-region needs

---

# **3. Caching Tradeoffs**

**Pros**

* Low latency
* Reduced DB load
* High throughput

**Cons**

* Cache inconsistency
* Stale data
* Cache stampede
* Memory cost

**Key decisions:**

* TTL?
* Write-back vs Write-through?
* What if cache is cold?

---

# **4. Partitioning (Sharding) Tradeoffs**

**Pros**

* Infinite horizontal scale
* Isolate failures

**Cons**

* Rebalancing complexity
* Cross-shard queries expensive
* Hotspotting risk

**Checklist:**

* Hash vs Range vs Directory?
* Hot keys mitigation?
* Split strategy future-proof?

---

# **5. Replication Tradeoffs**

**Leader-Follower**

* Strong consistency
* Easy writes
* Read scaling via replicas

**Cons**

* Leader bottleneck
* Failover complexity

**Multi-Leader**

* Multi-region writes
* Low latency

**Cons**

* Conflicts
* Extra operational complexity

**Leaderless (Dynamo)**

* High availability
* Tunable consistency

**Cons**

* Quorum logic
* Conflict resolution

---

# **6. Communication Tradeoffs (Sync vs Async)**

## **Synchronous**

**Pros**

* Simple
* Immediate response

**Cons**

* tight coupling
* cascading failures
* higher latency

## **Asynchronous**

**Pros**

* decoupled
* resilient
* scalable

**Cons**

* eventual consistency
* complex debugging
* requires idempotency

---

# **7. Message Queue Tradeoffs (Kafka, SQS, RabbitMQ)**

**Kafka Pros**

* high throughput
* durable
* ordered partitions

**Kafka Cons**

* operational complexity
* expensive to run

**SQS Pros**

* fully managed
* simple

**SQS Cons**

* no ordering (unless FIFO)
* slower

Pick based on:

* ordering needs
* throughput
* cost

---

# **8. Load Balancer Tradeoffs**

**L7 LB**

* smart routing
* authentication
* URL-based rules

**Cons**

* expensive
* more latency

**L4 LB**

* very fast
* cheaper

**Cons**

* limited routing logic

---

# **9. Storage Tradeoffs**

## **Object Storage (S3)**

* cheap
* scalable
* high durability

Cons:

* slow random access
* not good for DB-style queries

## **Block Storage**

* fast
* low-latency

Cons:

* limited scaling

---

# **10. Indexing Tradeoffs**

**Pros**

* faster reads

**Cons**

* slower writes
* more storage
* maintenance overhead

Tradeoff:

* read-heavy system → index
* write-heavy system → minimal indexes

---

# **11. Caching vs DB Query Tradeoff**

Caching Pros:

* better latency
* reduces load

Cons:

* potential inconsistencies

DB Query Pros:

* always correct
* no stale data

Cons:

* slower
* can overload DB

---

# **12. Latency vs Accuracy Tradeoff**

Sometimes you trade correctness for speed:

Examples:

* eventual consistency
* approximate counters
* sampling
* probabilistic data structures (Bloom filters, HyperLogLog)

Use this when:

* perfect accuracy not needed
* performance is priority

---

# **13. Cost vs Reliability Tradeoff**

Higher reliability = higher cost.

Examples:

* Multi-region deployment
* Data replication
* Redundant LB + DB
* CDN usage

Ask:

* What reliability does the business require?
* Is the extra cost justified?

---

# **14. Simplicity vs Flexibility Tradeoff**

Simple solution:

* easy to operate
* fewer bugs

Complex solution:

* more flexible
* future-proof

Select based on:

* timeline
* team skills
* long-term requirements

---

# **15. Precompute vs On-Demand Tradeoff**

### Precompute (Fan-out-on-write)

Pros:

* fast reads
  Cons:
* slower writes
* more storage

### On-demand (Fan-out-on-read)

Pros:

* fast writes
  Cons:
* slower reads

Choose based on:

* read-heavy vs write-heavy system

---

# **16. Stateful vs Stateless Services**

### Stateless

Pros:

* easy scaling
* simple deployment

Cons:

* requires external state storage (cache/DB)

### Stateful

Pros:

* faster for certain workloads

Cons:

* hard to scale
* tricky failover

---

# **17. Retry vs Circuit Breaker Tradeoff**

Retries:

* recover from transient failures
* increase reliability

But:

* can overload system
* cause retry storms

Circuit breaker:

* prevents cascading failures
* but increases temporary errors

Carefully balance retry policy + breaker threshold.

---

# **18. Sync Reads vs Async Materialized Views**

### Sync Reads

Pros:

* always fresh
  Cons:
* slower
* dependent on upstream

### Materialized Views

Pros:

* fast reads
* independent queries

Cons:

* eventually consistent
* requires pipelines

---

# **19. Rate Limiting Tradeoffs**

### Strict Global Limits

Pros:

* perfect fairness
  Cons:
* hotspot issues
* heavy coordination

### Local Rate Limits

Pros:

* high performance
  Cons:
* uneven enforcement

---

# **20. Deployment Tradeoffs**

### Blue/Green

Pros:

* zero downtime
  Cons:
* double infra cost

### Canary

Pros:

* safer rollouts
  Cons:
* more complex monitoring

---

# **21. Observability Tradeoffs**

### High cardinality logs/metrics

Pros:

* rich debugging
  Cons:
* storage cost
* performance cost

### Low cardinality

Pros:

* cheap
  Cons:
* poor detail

---

# **22. Interview Summary (30 seconds)**

Every system design decision involves a tradeoff: scalability vs cost, latency vs consistency, simplicity vs flexibility, accuracy vs performance, storage vs speed.
A good design evaluates pros/cons, picks the most practical approach, and acknowledges what is being sacrificed.
This checklist ensures you always highlight balanced and thoughtful decisions.

