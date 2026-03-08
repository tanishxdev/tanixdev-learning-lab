# Database Sharding (Hash – Range – Directory)

Simple, clean, complete explanation

**Sharding = splitting a large database into smaller pieces (shards) stored on different servers.**

Why?

* Reduce load on a single DB
* Increase storage capacity
* Improve performance
* Allow horizontal scaling
* Reduce hot spots
* Isolate failures

Sharding divides data so that **each shard handles only part of data**.

Three main strategies:

1. **Hash-Based Sharding**
2. **Range-Based Sharding**
3. **Directory-Based (Lookup Table) Sharding**

---

# 1. Hash-Based Sharding

Data is distributed by applying a **hash function** on the shard key.

```
shard = hash(user_id) % number_of_shards
```

### How it works

1. Choose shard key (e.g., user_id)
2. Apply hash function
3. Result determines shard number
4. Insert/read data from that shard

### Advantages

* Very even distribution
* Avoids hot shards
* Simple and fast
* Great for write-heavy workloads

### Disadvantages

* Range queries become expensive (must query all shards)
* Resharding is painful: adding/removing nodes changes hash output
* No knowledge of data locality

### Best for

* Random-access workloads
* Social networks (user_id sharding)
* Logging systems
* Write-heavy apps

---

# 2. Range-Based Sharding

Data is placed into shards based on **value ranges**.

Example:

```
Shard 1: user_id 1–1M
Shard 2: user_id 1M–2M
Shard 3: user_id 2M–3M
```

### Advantages

* Range queries are extremely fast
* Easy to understand and debug
* Good for analytics or sorted data
* Locality preserved (nearby data stays together)

### Disadvantages

* Risk of **hot shards**
  Example: if most new users come with increasing IDs
* Shard sizes may become uneven
* Requires manual or automated rebalancing
* Adds operational complexity

### Best for

* Time-series data (2024 → shard A, 2025 → shard B)
* Ordered IDs
* Analytics workloads
* Systems needing range/scan queries

---

# 3. Directory-Based (Lookup Table) Sharding

A central **directory service** keeps mapping of keys to shards.

Example lookup table:

```
User 123 → Shard A
User 456 → Shard C
User 789 → Shard B
```

### How it works

1. Client/database queries directory
2. Directory returns shard location
3. Client interacts with correct shard

### Advantages

* Most flexible sharding method
* Shards need not follow hash or range rules
* Easy to move users between shards
* Hotspot redistribution possible
* Ideal for very large systems

### Disadvantages

* Directory is single point of failure (needs redundancy)
* Lookup adds a small overhead
* Directory must stay very consistent
* More complex design

### Best for

* Large-scale SaaS with tenant sharding
* Gaming systems
* Multi-tenant architectures
* Highly dynamic data distribution

---

# 4. Comparison Summary (Very Clear)

| Feature                   | Hash Sharding | Range Sharding     | Directory Sharding              |
| ------------------------- | ------------- | ------------------ | ------------------------------- |
| Load distribution         | Excellent     | Can be uneven      | Fully controllable              |
| Range queries             | Poor          | Excellent          | Good (via directory)            |
| Hotspot risk              | Very low      | High               | Low (but needs rebalancing)     |
| Rebalancing complexity    | High          | Medium             | Very low                        |
| Implementation difficulty | Easy          | Medium             | Hard                            |
| Latency                   | Low           | Low                | Medium (due to lookup)          |
| Best use case             | Random data   | Sorted/time-series | Multi-tenant, dynamic workloads |

---

# 5. Choosing the Right Sharding Strategy

### Choose **Hash Sharding** when:

* Data access is random
* You need perfect distribution
* No need for range queries
* Write-heavy workloads
  Examples: social apps, log ingestion, messaging

---

### Choose **Range Sharding** when:

* Data is naturally ordered
* Need efficient range scans
* Hot shards can be managed
  Examples: time-series DB, metrics, ticket bookings

---

### Choose **Directory Sharding** when:

* You need full control
* Shards differ by tenant/customer
* Hotspot users exist
* Shard movement is required
  Examples: SaaS, enterprise systems, gaming servers

---

# 6. Shard Key Design

Choosing the correct shard key is critical.

A good shard key must:

1. Distribute data evenly
2. Spread writes evenly
3. Avoid hot partitions
4. Support common queries
5. Be stable (rarely changes)

Examples of good keys:

* user_id
* tenant_id
* hashed composite keys

Examples of bad keys:

* timestamp (creates hot shard)
* incrementing IDs

---

# 7. Shard Rebalancing (High-Level)

#### Hash sharding

Hardest — must remap many keys.
Solution: **consistent hashing** (minimizes movement).

#### Range sharding

Split or merge ranges manually/automatically.

#### Directory sharding

Update directory mappings → easiest rebalancing.

---

# 8. Cross-Shard Operations

This is the hardest part of sharding.

### Cross-shard reads

Must query multiple shards → requires merge logic.

### Cross-shard writes

Require distributed transactions (2PC, Saga) → complex & slow.

### Cross-shard joins

Very expensive → often not supported.

Solution:
Avoid cross-shard joins by **denormalizing data** or **choosing a better shard key**.

---

# 9. Sharding in Real Databases

### MongoDB

Uses:

* Hash sharding
* Range sharding

With a **config server** for metadata.

### Cassandra

Uses:

* Hash-based partitioning
* Consistent hashing
* Virtual nodes

### DynamoDB

Uses:

* Adaptive partitioning
* Range + hash hybrid

### MySQL / PostgreSQL

Sharded manually or via directory-based mapping.

---

# 10. Interview-Ready Summary (30 Seconds)

Sharding splits large databases across multiple servers to improve scalability and performance.

Hash-based sharding distributes data evenly using a hash function but makes range queries hard.
Range-based sharding organizes data by ordered ranges, enabling fast scans but risking hotspots.
Directory-based sharding uses a lookup table to map keys to shards, offering full flexibility but requiring extra complexity and high reliability.

Each model trades off simplicity, distribution balance, query efficiency, and rebalancing complexity.

---