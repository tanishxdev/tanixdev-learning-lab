

# Database Replication (Leader → Follower → Multi-Leader)

Simple, clean, complete explanation

Replication means **copying data from one database node to others** so the system can handle:

* More reads
* Better availability
* Fault tolerance
* Disaster recovery
* Geo-distributed traffic

Three main replication models:

1. **Leader-Based Replication (Single Leader)**
2. **Follower-Based Replication (Leader-Follower)**
3. **Multi-Leader Replication (Master-Master)**
4. **Leaderless Replication (Dynamo-style)** → optional if you want

Let’s break each one down cleanly.

---

# 1. Leader (Primary) Replication

(Also called **Primary-Replica**, **Master-Slave**, **Single-Leader**)

One node is the **leader**.
All writes go to leader.
Followers replicate asynchronously or synchronously.

### Write Flow

* Client sends write → Leader
* Leader applies write to its log
* Leader sends change to followers
* Followers replay log and update their data

### Read Flow

* Reads can go to leader or followers
* Followers may be **eventually consistent**

### Advantages

* Simple design
* Easy to reason about
* Strong write consistency (on leader)
* Works for most applications
* High read scalability

### Disadvantages

* Single write bottleneck
* Failover required if leader dies
* Replication lag on followers → stale reads
* Not good for multi-region writes

### Used in:

* PostgreSQL
* MySQL
* MongoDB (Replica Sets, with primary)
* Redis replication

---

# 2. Leader–Follower (Primary–Replica) Architecture

This is just **Leader Replication**, but with emphasis on followers doing reads.

### Why add followers?

To achieve:

* Horizontal read scaling
* Reduced load on leader
* Geographic read replicas for low latency

### Follower responsibilities:

* Apply changes from leader (WAL/log shipping)
* Serve read requests
* Provide backups

### Followers are normally **read-only**.

---

# 3. Multi-Leader (Multi-Master) Replication

(Also called **Active-Active**)

More than one leader exists.
Clients can write to **any leader**.

Each leader replicates its writes to all other leaders.

### Advantages

* Multiple write locations
* Great for multi-region applications
* No single write bottleneck
* Better availability (one leader can die)

### Disadvantages (VERY important)

* Write-write conflicts
* Conflict resolution required
* Harder operational complexity
* More chance of divergence

### Conflict Types

* Same row updated on two leaders at same time
* Concurrent inserts/deletes
* Out-of-order replication

### Common conflict resolution strategies:

* Last write wins (timestamp)
* Version vectors / vector clocks
* Custom merge function
* App-level conflict handling

### Used in:

* Older MySQL multi-master setups
* MongoDB sharded cluster (config server election)
* CouchDB
* Dynamo-style systems (with vector clocks)

Works best when:

* Writes are mostly local to region
* Conflicts are rare
* System can tolerate eventual consistency

---

# 4. Leaderless Replication (Dynamo-style)

(Optional — tell me if you want full explanation)

No leader exists.
Any replica can accept writes.

Uses:

* Quorums (R, W, N)
* Vector clocks
* Read repair
* Hinted handoff

Used in:

* Cassandra
* DynamoDB
* Riak

Consistency is **tunable**.

---

# 5. Synchronous vs Asynchronous Replication

### Synchronous Replication

Leader waits for follower to confirm.

Pros:

* Strong consistency
* No data loss (RPO=0)

Cons:

* Slow
* If follower is slow/unreachable → blocks writes

### Asynchronous Replication

Leader doesn’t wait.

Pros:

* Fast
* High availability
* High throughput

Cons:

* Replication lag
* Possible data loss if leader dies
* Followers return stale reads

Most systems use **async replication** by default.

---

# 6. Failover

(What happens when leader dies?)

### Automatic Failure Handling Steps

1. Detect leader failure
2. Elect new leader
3. Redirect writes to new leader
4. Followers re-sync with new leader

Systems that support auto-failover:

* MongoDB
* PostgreSQL with Patroni
* MySQL with Orchestrator
* Etcd (Raft)

---

# 7. Replication Lag

Followers may lag behind due to:

* Network latency
* Heavy writes
* Long queries
* Slow I/O

Causes:

* Stale reads
* Inconsistent analytics
* Incorrect application decisions

Solution:

* Read-after-write consistency (stick reads to leader for session)
* Monotonic reads
* Quorum reads

---

# 8. Comparison Table (Very Clear)

| Feature             | Single Leader    | Multi-Leader | Leaderless   |
| ------------------- | ---------------- | ------------ | ------------ |
| Write scalability   | Low              | Medium–High  | High         |
| Conflict handling   | None             | Required     | Required     |
| Consistency         | Strong on leader | Eventual     | Tunable      |
| Failover            | Possible         | Easier       | Not required |
| Multi-region writes | Hard             | Easy         | Easy         |
| Complexity          | Low              | Medium       | High         |

---

# 9. When to Use Which?

### Use **Single Leader** when:

* Your system is write-light, read-heavy
* You want strong consistency
* You want simplicity
  Examples: SaaS apps, websites, admin dashboards

### Use **Multi-Leader** when:

* You have multi-region users
* Each region needs to accept writes
* Conflict rate is low
  Examples: collaborative apps, social networks

### Use **Leaderless** when:

* Extreme availability is needed
* Writes must continue even during partitions
  Examples: DynamoDB, Cassandra, shopping cart metadata

---

# 10. Interview-Ready Summary (30 Seconds)

Database replication copies data across multiple servers for availability, scalability, and fault tolerance.
Single-leader replication sends all writes to one leader and uses followers for reads. It’s simple and consistent.
Multi-leader replication allows writes in multiple locations but needs conflict resolution.
Leaderless replication lets any node accept writes using quorum reads/writes.

Each model trades off **consistency, availability, performance, and complexity**.

