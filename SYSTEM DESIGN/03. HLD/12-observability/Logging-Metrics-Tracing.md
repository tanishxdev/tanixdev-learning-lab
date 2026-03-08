
# **Logging, Metrics, and Tracing**

Observability Core Concepts

Modern distributed systems need **observability**, not just monitoring.
Observability is built on **three pillars**:

1. **Logging**
2. **Metrics**
3. **Tracing**

Each pillar answers a different question about your system.

---

# **1. Why Do We Need Observability?**

In microservices and distributed architectures:

* Failures are partial
* Latency appears in unexpected places
* Services communicate asynchronously
* Debugging becomes hard
* Retrying and timeouts hide root causes

Observability helps answer:

* What is broken?
* Why is it broken?
* Where is it broken?
* How do we fix it quickly?

---

# **2. Logging**

## **What Are Logs?**

Logs are **detailed, timestamped records** of events inside a system.

Example log entry:

```
INFO 2025-09-21 12:01:03 GET /users/10 → 200 OK (12ms)
```

Logs capture:

* Errors
* State changes
* System events
* User actions
* Exceptions

## **Types of Logs**

### 1. **Application Logs**

Business logic events, errors, debugging info.

### 2. **Access Logs**

Every request in/out of the service:

```
method, URL, latency, status code
```

### 3. **Audit Logs**

Security-sensitive events:

```
login, permissions changed, data read/write
```

### 4. **System Logs**

OS-level events:

```
CPU alerts, disk failures, kernel logs
```

---

## **What Logs Are Good For?**

* Debugging failures
* Viewing error stack traces
* Analyzing unexpected behavior
* Forensics after incidents
* Security investigations

## **Problems Logs Solve**

* What caused the error?
* Where did the exception originate?
* Which service misbehaved?
* What input triggered the failure?

Logs give **detailed context**, but too much log volume increases cost and noise.

---

# **3. Metrics**

## **What Are Metrics?**

Metrics are **numerical measurements** sampled over time.

Examples:

* CPU usage = 85%
* Memory = 12GB
* QPS = 4500
* Error rate = 2%
* Latency p95 = 180ms
* Queue depth = 1200 messages

Metrics are **fast, lightweight, and aggregated**.

## **Types of Metrics**

### 1. **Counters**

Monotonic increasing numbers.
Example:

```
requests_total++
errors_total++
```

### 2. **Gauges**

Values that go up and down.
Example:

```
current_active_sessions
current_queue_depth
```

### 3. **Histograms**

Distribution of values.
Example:

```
latency → p50, p90, p95, p99
payload_size
```

### 4. **Timers**

Special histograms for duration (latencies).

---

## **What Metrics Are Good For?**

* Performance monitoring
* Alerting (SLAs, SLOs)
* Dashboards (Grafana)
* Capacity planning
* Scaling decisions
* Detecting anomalies

## **Problems Metrics Solve**

* Is the system slow?
* What is the throughput?
* Are we dropping requests?
* Is error rate increasing?
* Is a node overloaded?

Metrics reveal trends and patterns, but lack detail.

---

# **4. Tracing**

## **What Are Traces?**

Traces follow a request **end-to-end** across microservices.

A trace consists of:

* **Trace ID** = identifies the full request
* **Spans** = each operation inside a service

Tracing answers:

* Why is the system slow?
* Which service caused the latency?
* How long each step took?
* Where did the request fail?

Traces give the **execution timeline**.

---

## **What Tracing Is Good For**

* Debugging multi-service latency
* Identifying slow dependencies
* Visualizing request flow
* Reducing MTTR
* Understanding service dependency graph

## **Problems Tracing Solves**

* Which service is the bottleneck?
* Why is p99 latency high?
* Where does the request fail?
* How do retries affect latency?

Tracing is the backbone of debugging distributed systems.

---

# **5. Logging vs Metrics vs Tracing (Clear Table)**

| Feature      | Logging     | Metrics    | Tracing              |
| ------------ | ----------- | ---------- | -------------------- |
| Purpose      | Debugging   | Monitoring | Request flow         |
| Granularity  | High-detail | Aggregated | Per-request timeline |
| Data type    | Text        | Numbers    | Spans                |
| Storage size | Large       | Small      | Medium               |
| Query speed  | Slow        | Fast       | Medium               |
| Best for     | root-cause  | alerts     | latency & flow       |
| Cost         | High        | Low        | Medium               |

---

# **6. How They Work Together**

A healthy observability stack uses all three:

### **Logging**

Tells you *what happened*.

### **Metrics**

Tell you *that something is wrong*.

### **Tracing**

Tells you *where and why it happened*.

Example:
Metrics alert → Error rate spikes
Tracing → Find service causing failures
Logging → Inspect stack trace
This three-step flow reduces investigation time drastically.

---

# **7. Common Tools**

### Logging

* ELK Stack (Elasticsearch, Logstash, Kibana)
* Loki
* Fluentd / FluentBit
* CloudWatch Logs

### Metrics

* Prometheus
* Datadog Metrics
* CloudWatch Metrics
* InfluxDB

### Tracing

* Jaeger
* Zipkin
* Grafana Tempo
* OpenTelemetry

---

# **8. Best Practices**

### Logging

* Avoid logging sensitive data
* Use structured logs (JSON)
* Include user_id, trace_id, request_id
* Set log levels properly (INFO/WARN/ERROR)

### Metrics

* Track latency p50, p95, p99
* Expose RED metrics:

  * **R**ate (requests/sec)
  * **E**rrors
  * **D**uration
* Use alerts based on SLOs

### Tracing

* Always propagate **Trace ID**
* Avoid excessive span creation
* Use sampling for high traffic
* Enrich spans with metadata

---

# **9. Interview Summary (30 seconds)**

Logging captures detailed events for debugging.
Metrics provide aggregated numeric signals used for dashboards and alerting.
Tracing gives end-to-end visibility across microservices to pinpoint latency and failures.
Together, they form the three pillars of observability, enabling fast detection, diagnosis, and resolution of issues in distributed systems.
