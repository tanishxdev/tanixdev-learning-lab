# **Database Design Checklist**

A complete, structured checklist for designing databases in system design and LLD interviews.

This ensures your DB design always covers:
schema → indexing → partitioning → replication → consistency → transactions → performance → scaling → operations.

---

# **0. Problem Understanding**

Before choosing DB or designing schema, clarify:

* What entities need to be stored?
* What queries must be fast?
* What are the access patterns?
* What is the expected scale?
* Any transactional requirements?

This determines SQL vs NoSQL, indexes, schema structure, etc.

---

# **1. Choose the Right Database Type**

### ✔ SQL (Relational)

Use when:

* strong consistency is needed
* complex joins
* multi-row transactions
* structured data

Common choices: Postgres, MySQL.

### ✔ NoSQL (Document, Key-Value, Wide Column)

Use when:

* massive scale
* simple queries
* flexible schema
* high throughput

Examples:

* Document (MongoDB)
* Key-value (Redis, DynamoDB)
* Wide-column (Cassandra)

### ✔ Search Database (Elasticsearch, OpenSearch)

Use when:

* free text search
* filtering + scoring

### ✔ Time-Series DB

Use when:

* metrics
* logs
* telemetry

### ✔ Graph DB

Use when:

* social graphs
* recommendations
* relationship-heavy queries

---

# **2. Schema Design Checklist**

### ✔ Identify entities

Define core tables/collections.

### ✔ Define fields and data types

Use correct types:

* int
* string
* UUID
* timestamp
* JSONB
* boolean

### ✔ Normalize or denormalize?

* Normalize for consistency (OLTP).
* Denormalize for fast reads (OLAP/NoSQL).

### ✔ Primary Keys

Prefer:

* auto-increment
* UUID
* ULID (for sortable IDs)

### ✔ Foreign Keys (if SQL)

Define relationships:

* 1:1
* 1:m
* m:m (junction table)

### ✔ Auditing fields

Add:

```
created_at  
updated_at  
deleted_at (soft delete)
```

### ✔ Soft delete vs Hard delete

Soft delete helps recovery and analytics.

---

# **3. Indexing Checklist**

Indexes are the **#1** performance tool.

### ✔ Index keys used in WHERE, ORDER BY, JOIN

### ✔ Avoid indexing everything (hurts writes)

### ✔ Use composite indexes when needed

Example:

```
INDEX (user_id, created_at)
```

### ✔ Add UNIQUE constraints where necessary

### ✔ Use partial indexes for filtered queries

### ✔ Use full-text index for search fields

---

# **4. Query Patterns and Access Paths**

Ask:

* What queries must be fast?
* Which queries run most frequently?
* Which fields are used for filtering?
* What needs sorting/pagination?

Design schema based on **query-first approach**.

---

# **5. Read vs Write Workload**

### ✔ Read-heavy systems

* use caching (Redis)
* use read replicas
* index heavily
* denormalize if needed

### ✔ Write-heavy systems

* avoid too many indexes
* use sharding
* use batching
* consider NoSQL

---

# **6. Transactions & Consistency**

### ✔ Are ACID transactions required?

### ✔ Multi-row or multi-collection transactions?

### ✔ Do we need:

* strong consistency?
* eventual consistency?
* read-after-write consistency?

### ✔ Use optimistic locking when required

Example field:

```
version INT
```

### ✔ Idempotency for retries

---

# **7. Scaling Checklist**

## **Vertical Scaling**

Increase CPU/RAM until capacity maxes out.

## **Horizontal Scaling**

Add more nodes.

### ✔ Sharding

Pick strategy:

* hash-based
* range-based
* directory-based

### ✔ Read Replicas

Improve read scalability.

### ✔ Multi-region setup

Use:

* leader-follower
* leaderless (Dynamo)
* multi-leader

---

# **8. Replication Checklist**

### ✔ Sync vs Async replication

### ✔ Failover requirements

### ✔ Replication lag tolerance

### ✔ Quorum reads/writes (if Dynamo/Cassandra)

Consistency modes:

* strong
* eventual
* tunable

---

# **9. Caching Strategy**

### ✔ What data should be cached?

### ✔ Cache invalidation rules

### ✔ TTL settings

### ✔ Write-through vs Write-back vs Write-around

### ✔ Hot key protection

### ✔ Redis cluster sharding

Cache reduces DB pressure significantly.

---

# **10. Pagination Strategy**

Choose based on scale:

### ✔ Offset

Simple but slow for large offsets.

### ✔ Cursor

Fast for scrolling content.

### ✔ Keyset

Very fast, stable ordering.

---

# **11. Data Growth & Retention**

### ✔ Estimate monthly dataset growth

### ✔ Plan for archiving old data

### ✔ Identify data with TTL

### ✔ Move cold data to cheaper storage (S3/Glacier)

---

# **12. Backup & Recovery (RPO/RTO)**

### ✔ Full backups

### ✔ Incremental backups

### ✔ Point-in-time recovery

### ✔ Disaster recovery multi-region setup

RPO = data loss allowed
RTO = recovery time allowed

---

# **13. Security Checklist**

### ✔ Encrypt data at rest

### ✔ Encrypt data in transit

### ✔ Use KMS (key management system)

### ✔ Apply access control (RBAC)

### ✔ Limit SQL injection via prepared statements

### ✔ Protect sensitive fields (PII hashing)

---

# **14. Monitoring Checklist**

Track:

### ✔ CPU, Memory

### ✔ Query latency (p50/p95/p99)

### ✔ Slow query logs

### ✔ Connection count

### ✔ Replication lag

### ✔ Disk I/O

### ✔ Index usage statistics

Set alerts for saturation.

---

# **15. Migration Strategy**

### ✔ Zero-downtime migration

### ✔ Blue/Green DB transitions

### ✔ Avoid long locks

### ✔ Rolling schema updates

### ✔ Backward-compatible changes

Common pattern:

```
Expand → Migrate → Contract
```

---

# **16. Testing Checklist**

### ✔ Load testing

### ✔ Query validation

### ✔ Schema validation

### ✔ Failover testing

### ✔ Capacity testing

---

# **17. Final Architecture Summary (for Interview)**

Summarize:

```
Database design includes clear schema, correct indexing, 
optimized query paths, appropriate sharding & replication, 
proper caching, security, backup, and monitoring. 
The system is scalable, fault-tolerant, and optimized for expected workloads.
```

Perfect professional finish.

---

# **18. Interview Summary (30 seconds)**

Good database design starts with understanding access patterns, then choosing the right schema, indexing, partitioning, and consistency model.
Scaling is achieved using caching, replication, sharding, and efficient queries.
Security, backups, and monitoring ensure reliability.
This checklist ensures you cover all critical DB design points in any system design interview.

---
