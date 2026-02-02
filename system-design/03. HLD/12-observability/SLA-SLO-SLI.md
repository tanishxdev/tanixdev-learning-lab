# **SLA vs SLO vs SLI**

Observability, Reliability & SRE Fundamentals

Understanding SLA, SLO, and SLI is essential for designing reliable distributed systems.
These terms define **how reliability is measured**, **what customers expect**, and **what the system must guarantee**.

---

# **1. Why These Concepts Matter**

In system design:

* You need to know how reliable your service must be
* You must monitor the right metrics
* You must ensure you don’t over-promise reliability
* You must plan downtime, error budgets, and alerting

SLA/SLO/SLI help define **clear reliability goals** and **how to measure them**.

---

# **2. Definitions (Very Simple)**

## **SLI → Service Level Indicator**

A **measurement** of system performance.

Examples:

* request success rate
* latency (p95, p99)
* availability
* throughput
* error rate
* freshness of data

SLI answers:
**“What is the system actually doing?”**

---

## **SLO → Service Level Objective**

A **target/goal** for an SLI.

Example:

```
p99 latency < 200 ms for 30 days
availability ≥ 99.9% per month
error rate < 0.1%
```

SLO answers:
**“What do we want the system to achieve?”**

---

## **SLA → Service Level Agreement**

A **contract** with users/customers specifying minimum service reliability, often with penalties if violated.

Example:

```
99.9% uptime guaranteed; otherwise refund 10% of monthly bill.
```

SLA answers:
**“What did we promise to the customer?”**

---

# **3. Relationship Between Them (Super Clear)**

```
SLI = actual measurement  
SLO = target for SLI  
SLA = legal guarantee built on top of SLO
```

SLOs are internal goals.
SLAs are external commitments.

SLA is always **less strict** than SLO because failures cost money.

---

# **4. Examples (Easy and Practical)**

### **Example 1: Availability**

SLI:

```
availability = successful requests / total requests
```

SLO:

```
99.95% monthly availability
```

SLA:

```
99.9% uptime guaranteed or refund 20%
```

---

### **Example 2: Latency**

SLI:

```
p95 latency = 150 ms
p99 latency = 280 ms
```

SLO:

```
p99 latency < 300 ms
```

SLA:

```
No explicit SLA (latency rarely has penalties)
```

---

### **Example 3: Error Rate**

SLI:

```
error_rate = 0.3%
```

SLO:

```
error_rate < 0.1% during peak hours
```

SLA:

```
If error_rate > 1% for 24 hours → customer credit
```

---

# **5. Error Budget (Very Important in SRE)**

Error budget = **How much unreliability you can afford**.

Example SLO:

```
99.9% uptime for a month
```

Allowed downtime:

```
0.1% of month = 43.2 minutes
```

This 43.2 minutes is the **error budget**.

### Why error budgets matter?

* Control deployments
* Control feature rollouts
* Control risk
* Slow down releases when budget is exhausted
* Stop pushing new features during instability

---

# **6. Common SLIs (Must Know for Interviews)**

### Availability

```
99.9% success responses
```

### Latency

```
p95, p99, p99.9
```

### Throughput

```
requests/sec
```

### Error Rate

```
failed_requests / total_requests
```

### Durability (storage systems)

```
99.999999999% (“11 nines”)
```

### Freshness / Staleness (caches, search, analytics)

```
data lag < 1 minute
```

### Correctness

```
no incorrect responses
```

---

# **7. Typical SLO Values in Industry**

| System            | Common SLO             |
| ----------------- | ---------------------- |
| Consumer web app  | 99% – 99.9%            |
| Payment systems   | 99.99%                 |
| Authentication    | 99.99%                 |
| Search            | 99.9%                  |
| Database          | 99.99%                 |
| CDN               | 99.99%                 |
| Storage (S3, GCS) | 11–12 nines durability |

SLA is usually slightly **weaker** than SLO:
Example:

```
SLO: 99.95%
SLA: 99.9%
```

---

# **8. How SLOs Drive Alerting (Critical)**

Alerts should trigger **only** when SLOs are at risk.

Bad alerts → too much noise → engineers ignore them.

### Example alerting:

```
If projected uptime < SLO target → alert
If error budget burn rate > X → alert
```

Burn rate = how fast you spend error budget.

Good systems alert on **fast burn** (immediate risk) and **slow burn** (ongoing degradation).

---

# **9. Why SLOs Must Not Be Too High**

SLO of:

```
99.9999% (six nines)
```

means:

```
~3 seconds downtime per month
```

Such strict SLO → extremely expensive
Requires:

* multi-region failover
* redundancy everywhere
* high engineering cost

So we choose realistic SLOs that balance:

* cost
* customer need
* system complexity

---

# **10. Interview Summary (30 seconds)**

SLI is a measurement of system performance (latency, error rate, availability).
SLO is the reliability goal based on that measurement.
SLA is the external contract built on top of an SLO, with penalties if violated.
SLOs define error budgets that drive release velocity and alerting.
These concepts are core to observability, reliability, and SRE engineering.
