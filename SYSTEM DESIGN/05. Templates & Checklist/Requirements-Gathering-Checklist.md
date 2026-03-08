# **Requirements Gathering Checklist**

A complete, structured checklist to collect **Functional**, **Non-Functional**, **Capacity**, and **Operational** requirements before starting HLD or LLD.

This template ensures you never miss any important detail and always start with a clear problem definition.

---

# **0. Problem Understanding**

Before asking questions, clarify:

* What exactly does the system need to do?
* Who are the users?
* What is the core objective?
* What is the business value?

Short summarization helps frame further questions.

---

# **1. Functional Requirements (FR)**

These define **what the system must do**.

### ✔ Core Use Cases

* What are the primary actions users perform?
* What workflows need to be supported?
* Which features are must-have vs nice-to-have?

### ✔ CRUD Requirements

* Create/read/update/delete operations for main entities.

### ✔ User Interactions

* What user flows exist?
* Any special edge cases?

### ✔ API Requirements

* What APIs are required?
* Data formats?
* Expected payload size?

### ✔ Real-Time Requirements

* Notifications?
* WebSockets/SSE?
* Background jobs?

### ✔ Business Rules

* Validation rules
* Pricing rules
* Access control

---

# **2. Non-Functional Requirements (NFR)**

These define **how** the system must behave.

### ✔ Performance

* Latency (p95 / p99)
* Expected throughput
* Batch vs real-time

### ✔ Scalability

* Horizontal or vertical scaling?
* Global or regional users?

### ✔ Availability

* Required uptime (99%, 99.9%, 99.99%).
* Multi-region failover?
* Zero-downtime deployment?

### ✔ Durability

* Data safety level.
* Backup needs.

### ✔ Consistency

* Strong vs eventual?
* Read-after-write?
* Causal ordering?

### ✔ Reliability

* SLO/SLA requirements.
* Error budgets.

### ✔ Security

* Authentication?
* Authorization?
* Encryption?
* PCI/PII/GDPR obligations?

### ✔ Data Privacy

* What sensitive data stored?
* What should be anonymized or encrypted?

### ✔ Observability

* Logs
* Metrics
* Tracing
* Alerts

---

# **3. Capacity & Scaling Requirements**

You MUST ask capacity-related questions.

### ✔ User Load

* DAU / MAU
* Peak users
* Traffic patterns (spikes?).

### ✔ QPS (Queries Per Second)

* Average QPS
* Peak QPS
* Read/Write ratio

### ✔ Data Volume

* Size per item
* Daily ingestion rate
* Retention period

### ✔ Storage Growth

* Per day / per month / per year growth
* Deletion or archiving policies

### ✔ Bandwidth

* Uploads/downloads per user
* Expected throughput

### ✔ Concurrency

* Simultaneous connections (important for WebSockets)

---

# **4. System Constraints**

### ✔ Technology Constraints

* Must use SQL?
* Must use NoSQL?
* Must support mobile first?

### ✔ Regulatory Constraints

* GDPR
* HIPAA
* PCI-DSS

### ✔ Budget

* Cost restrictions
* Cloud provider lock-in concerns

---

# **5. Integration Requirements**

### ✔ External Systems

* Payment services
* Email/SMS
* Third-party APIs
* Legacy systems

### ✔ Protocols

* REST
* gRPC
* Kafka events
* Webhooks

### ✔ Dependencies

* Any existing systems this must work with?

---

# **6. Operational Requirements**

### ✔ Deployments & CI/CD

* Deployment frequency
* Canary releases?
* Blue/Green deployment?

### ✔ Monitoring

* Latency/error dashboards
* Saturation alerts

### ✔ Rollback Strategy

* How to revert bad releases?

### ✔ Disaster Recovery

* RTO (Recovery Time Objective)
* RPO (Recovery Point Objective)
* Backup frequency

---

# **7. Data Requirements**

### ✔ Schema needs

* Entities
* Relationships

### ✔ Indexing needs

* Searchable fields
* Sort keys
* Filters

### ✔ Data retention

* How long is data stored?
* Archival?
* Time-to-live needs?

### ✔ Data migration

* Legacy DB?
* Format transformation?

---

# **8. API & Contract Requirements**

### ✔ Input/Output format

* JSON? Protocol Buffers?

### ✔ Versioning

* v1, v2 strategy

### ✔ Error handling

* Standard error codes
* Retryable vs non-retryable

---

# **9. UX/Frontend Requirements**

If applicable:

### ✔ User experience flows

### ✔ UI latency expectations

### ✔ Pagination / infinite scroll

### ✔ Accessibility requirements

---

# **10. Edge Cases (Often Missed)**

* Duplicate actions
* Partial failures
* Network failures
* Timeouts
* Idempotency
* Large payloads
* Bulk actions
* Rate limits
* Abuse prevention
* Concurrency conflicts

---

# **11. Final Output: Requirement Summary Table**

Example template:

| Category      | Requirement                   |
| ------------- | ----------------------------- |
| Functional    | Users can create short URLs   |
| Functional    | Redirect short URL → long URL |
| NFR           | Latency < 100ms p95           |
| NFR           | Availability 99.99%           |
| Capacity      | 1B URLs stored                |
| Capacity      | 20k QPS peak read             |
| Constraint    | Must use HTTPS                |
| Security      | Token-based auth              |
| Observability | Tracing + logs                |

This summary gives the interviewer a **professional start** to your HLD.

---

# **12. Interview Summary (30 seconds)**

Good requirement gathering covers functional behavior, non-functional constraints, capacity planning, storage needs, data models, performance expectations, edge cases, and operational aspects.
This checklist ensures a complete understanding before designing any system.
A well-defined requirement section immediately sets up a strong system design answer.

---