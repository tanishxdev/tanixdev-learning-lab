

# Database Read–Write Ratio

Simple, clean, complete explanation

**Read–Write Ratio = Percentage of reads vs writes the system performs.**

It tells whether your workload is:

* **Read-heavy**
* **Write-heavy**
* **Balanced / mixed**

This ratio is **one of the most important inputs** in system design because it directly affects:

* Choice of database
* Indexing strategy
* Caching design
* Replication model
* Sharding strategy
* Consistency guarantees
* Hardware sizing

---

# 1. Definition

If a system receives in 1 hour:

```
Reads  = 90,000
Writes = 10,000
```

Then:

```
Read–Write Ratio = 90:10  (or 9:1)
```

Meaning:

* 90% queries are reads
* 10% are writes

This ratio changes how the entire system should be designed.

---

# 2. Typical Ratios Seen in Real Systems

### 1. Social Media Feed System

```
Reads 95%
Writes 5%
```

### 2. E-commerce Product Search

```
Reads 85%
Writes 15%
```

### 3. Payment System

```
Reads 30%
Writes 70%
```

### 4. Logging / Telemetry

```
Reads 5%
Writes 95%
```

### 5. Analytics Dashboard

```
Reads 99%
Writes 1%
```

Different workloads → different architectural choices.

---

# 3. How Read–Write Ratio Affects System Design

## A. Read-Heavy System

Examples: social feed, news feed, product catalog

### Characteristics

* Millions of read queries
* Low write frequency
* Data rarely changes

### Design choices

1. **Read replicas**
   Replicate DB across followers to scale reads.

2. **Heavy caching:**

   * Redis
   * Memcached
   * CDN edge caching

3. **Multiple indexes allowed**
   Writes are rare → index overhead acceptable.

4. **Read-optimized engines**

   * B-Tree
   * Columnar storage (analytics)

5. **Denormalization for faster reads**

---

## B. Write-Heavy System

Examples: logs, metrics, clickstream, IoT

### Characteristics

* Huge volume of inserts
* Reads happen rarely or batched
* Append-only pattern

### Design choices

1. **LSM-Tree databases**

   * Cassandra
   * DynamoDB
   * HBase

2. **Avoid secondary indexes**
   Indexes slow writes.

3. **Sharding by write key**
   Spread writes evenly.

4. **Sequential appends**
   WAL + SSTables for fast ingestion.

5. **Use message queues**
   Kafka, Pulsar for buffer + durability.

---

## C. Balanced Read–Write System

Examples: OLTP (orders, users, payments)

### Characteristics

* Both reads and writes important
* Needs strict consistency

### Design choices

1. **Leader-follower architecture**
2. **Moderate caching**
3. **Optimized indexes**
4. **ACID transactions**
5. **CQRS if separating read vs write workload**
6. **Horizontal sharding** if high throughput needed

---

# 4. How Read–Write Ratio Influences Database Choice

| Ratio       | Recommended DB                              |
| ----------- | ------------------------------------------- |
| Read-heavy  | PostgreSQL + replicas, Redis, Elasticsearch |
| Write-heavy | Cassandra, DynamoDB, Kafka + object storage |
| Mixed       | PostgreSQL/MySQL, MongoDB, CockroachDB      |

---

# 5. How Read–Write Ratio Affects Indexing

### Read-heavy:

* Many indexes
* Composite indexes
* Covering indexes
* Joins optimized

### Write-heavy:

* Minimum indexes
* Only primary key
* Denormalized tables
* Avoid UPDATE and DELETE

---

# 6. How Read–Write Ratio Affects Replication

### Read-heavy:

Use many **read replicas**:

```
Leader → Follower1,2,3
```

### Write-heavy:

Use **multi-leader** or **leaderless** replication:

```
Cassandra
DynamoDB
```

These scale writes better.

---

# 7. Using Read–Write Ratio in Capacity Planning

Example:
Your system gets:

```
100k requests/sec  
Read–Write Ratio = 80:20  
```

Then:

```
Reads  = 80k/sec  
Writes = 20k/sec
```

Now you decide:

### For reads:

* How many replicas needed?
* How much cache needed?

### For writes:

* Can DB handle 20k writes/sec?
* Do you need sharding?
* Do you need write batching (Kafka)?

This is how infra sizing is done.

---

# 8. Query Pattern Mapping (Very Useful)

### If 90% queries are SELECT

→ Optimize for caching, indexing, replicas.

### If 90% queries are INSERT

→ Use LSM-tree databases and sharding.

### If queries are heavy joins

→ Use SQL or columnar database.

### If queries are point lookups

→ Use key-value DB or index-heavy SQL.

---

# 9. Common Mistakes in System Design Interviews

1. **Ignoring read–write ratio** altogether
2. Choosing too many indexes in write-heavy systems
3. Using leader-follower with high write workloads
4. Using Cassandra for join-heavy workloads
5. Using MongoDB without understanding access patterns
6. Thinking "SQL vs NoSQL" without considering R/W ratio
7. Ignoring cache as a solution for read-heavy systems

---

# 10. Interview-Ready Summary (30 Seconds)

The read–write ratio describes how often your system reads vs writes.
Read-heavy workloads require caching, replicas, and index-rich SQL databases.
Write-heavy workloads require LSM-tree stores, sharding, minimal indexing, streaming pipelines, and eventual consistency.
Balanced workloads benefit from leader–replica architectures, ACID transactions, and moderate indexing.
Knowing the read–write ratio is essential for choosing database types, scaling methods, and designing efficient architectures.

---