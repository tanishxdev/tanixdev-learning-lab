# **HLD Answer Template**

A universal, structured template for any High-Level System Design interview.

---

# **0. Problem Summary**

Write a **1–2 sentence** summary of the system you are designing.

Example:

```
Design a scalable system to handle X users performing Y actions.
```

---

# **1. Requirements Gathering**

## **1.1 Functional Requirements**

List what the system MUST do.

Example:

* Users can do A
* System stores B
* Real-time updates for C

## **1.2 Non-Functional Requirements**

Critical constraints:

* Scalability
* High availability
* Low latency
* Reliability
* Fault tolerance
* Durability
* Observability

## **1.3 Out of Scope**

Clarify boundaries.

---

# **2. Back-of-the-Envelope Estimations (Capacity Planning)**

Estimate:

* **Daily Active Users (DAU) / Monthly Active Users (MAU)**
* **QPS (peak + average)**
* **Storage requirements**
* **Bandwidth needs**
* **Read/Write ratio**

Include small calculations like:

```
If each user uploads 5MB/day → storage = X TB/month
```

These decisions influence:

* sharding
* caching
* partitioning
* DB selection

---

# **3. High-Level Architecture Overview**

Describe the main components:

```
Client → API Gateway → Services → Databases → Cache → Message Queue → Storage
```

Mention:

* Microservices or monolith
* Sync vs async communication
* Event-driven components
* Databases used
* High availability setup

---

# **4. API Design (Optional but Always Adds Quality)**

List important APIs with brief definitions.

Example:

```
POST /post
GET /feed
GET /user/{id}
```

Do not go too deep—just outline key operations.

---

# **5. Data Model (Database Schema)**

List major entities + fields.

Example:

```
User(id, name, email, created_at)
Post(id, user_id, content, media_url, created_at)
Follower(follower_id, followee_id)
```

Mention relationships:

* 1:1
* 1:m
* m:m

Mention whether DB is:

* SQL
* NoSQL
* Hybrid
* Search engine

---

# **6. Component Design (Critical Section)**

Break system into components and describe each:

### **6.1 API Gateway**

* Request routing
* Authentication
* Rate limiting

### **6.2 Service Layer**

Describe major microservices and responsibilities.

### **6.3 Database Layer**

Explain data storage choices:

* SQL for transactions
* NoSQL for scalability
* Object storage for images/media

### **6.4 Cache Layer**

What goes into:

* Redis
* CDN
* Client cache

### **6.5 Message Queue**

When asynchronous processing is needed:

* Kafka
* RabbitMQ
* SQS

### **6.6 Search Layer**

ElasticSearch / OpenSearch for fast querying.

### **6.7 CDN / Blob Storage**

Static content delivery and durability.

---

# **7. Detailed Design Decisions**

Address the most important design topics:

## **7.1 Data Partitioning (Sharding)**

* Hash-based
* Range-based
* Directory-based

## **7.2 Replication**

* Leader–Follower
* Multi-leader
* Quorum reads/writes

## **7.3 Consistency Model**

* Eventual consistency
* Read-after-write
* Strong consistency where needed

## **7.4 Caching Strategy**

* LRU/LFU
* Write-through / Write-back
* Cache invalidation rules

## **7.5 Load Balancing**

* Round-robin
* Least connections
* Consistent hashing

## **7.6 Rate Limiting**

* Token bucket
* Sliding window
* Throttling behavior

## **7.7 Fault Tolerance**

* Retries + backoff + jitter
* Circuit breaker
* Failover strategy

## **7.8 Security**

* Authentication & Authorization
* Encryption
* Input validation

---

# **8. Scale & Performance Optimizations**

Add optimizations:

* Horizontal scaling everywhere
* CQRS separation
* Read replicas
* Multi-region architectures
* Write batching
* Compression
* Bloom filters
* Pre-computation (fan-out-on-write vs fan-out-on-read)

Show that you understand trade-offs.

---

# **9. Bottlenecks & Single Points of Failure**

Identify weak points and fix them:

* API gateway → add redundancy
* DB → replication + sharding
* Cache → cluster mode
* Message queue → partitioning
* Leader election issues

Mention monitoring & alerting.

---

# **10. Observability**

Must include:

* Metrics (RED: Request rate, Errors, Duration)
* Logs (structured + correlated with trace ID)
* Distributed tracing (OpenTelemetry)
* Dashboards (Grafana)
* Alerts (latency, error rate, saturation)

---

# **11. Trade-offs & Alternatives**

Demonstrate balanced thinking.

Example:

```
Using NoSQL gives horizontal scalability but weaker consistency.
Using Kafka enables async but complicates ordering.
Using Redis improves latency but increases cost.
```

---

# **12. Final Architecture Summary (30 Seconds)**

Give a concise recap of your design:

```
The system uses an API gateway, horizontally scalable microservices, 
a mix of SQL/NoSQL storage, Redis caching, Kafka for async processing, 
and a CDN for media delivery. It is fault-tolerant, observable, and 
support multi-region scaling with sharding and replication strategies.
```

Clear, confident, tight.

---

# **13. Optional: Draw the Diagram (in interview)**

Even without tools, a simple structure:

```
Clients
 ↓
API Gateway
 ↓
Load Balancer
 ↓
Services ↔ Redis ↔ DB ↔ Storage
        ↘ Kafka / Queue ↙
```

This visual alone gives 20% bonus impression.

---

# **14. Tips for Scoring High in Interviews**

* Always start with requirements
* Use numbers & capacity planning
* Talk about consistency & trade-offs
* Show understanding of scaling & HA
* Mention observability
* Explain caching + sharding clearly
* Define failure handling
* End with summary
