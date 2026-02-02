# **Distributed Tracing (OpenTelemetry)**

## **1. What Problem Does Distributed Tracing Solve?**

In microservices, a single user request flows through *many* services:

```
API Gateway → Auth → User Service → Payment → Notification
```

When latency increases or failures occur, it becomes nearly **impossible** to identify:

* Which service caused the slowdown
* Where errors occurred
* Which request path was taken
* How long each service spent processing

**Distributed tracing solves this** by providing **end-to-end visibility** of a request across all microservices.

---

# **2. What Is Distributed Tracing?**

Distributed tracing tracks a request as it passes through different services.

It does this using:

* **Trace ID** → unique ID for the entire request
* **Span** → a timed operation inside a service
* **Parent/Child relationships** → how spans form a tree

A full trace is like a **timeline of the request**, showing which services caused delay.

---

# **3. Why Use OpenTelemetry?**

OpenTelemetry (OTel) is:

* Vendor-neutral
* Open-source
* Standardized API and SDK
* Supports logs, metrics, and traces
* Works with any backend:

  * Jaeger
  * Zipkin
  * Grafana Tempo
  * Honeycomb
  * Datadog
  * New Relic

OTel gives a **single, consistent instrumentation standard**.

---

# **4. Core Concepts (Must Know)**

## **A. Trace**

Represents an entire request from start to end.

Example:

```
Trace ID: 1234abcd
```

## **B. Span**

Represents a single operation within a service.

Attributes:

* name
* start time
* end time
* status (OK, error)
* tags (metadata)

Example spans:

```
DB query
HTTP call to another service
Cache lookup
```

## **C. Context Propagation**

MOST IMPORTANT PART.

Trace context must be passed across services via headers.

Common format:

```
traceparent: 00-<trace-id>-<span-id>-01
```

If context is not propagated → you get **broken traces**.

---

# **5. How Distributed Tracing Works (Step-by-Step)**

### **Step 1: Request enters Service A**

* Service A creates a **root span**
* Assigns a Trace ID

### **Step 2: Service A calls Service B**

* Service A injects trace context into HTTP headers
* Service B extracts the context
* Service B creates a child span

### **Step 3: Service B calls Database**

* Create DB span
* Attach metadata (query, duration, error if any)

### **Step 4: All spans are sent to OTel Collector**

* Collector processes + exports spans to backend (Jaeger/Tempo/etc.)

### **Step 5: Developer views trace in UI**

* Shows service dependency graph
* Latency breakdown
* Error propagation

This gives deep observability.

---

# **6. Why Tracing is Essential in Microservices**

1. **Find slow services**
2. **Identify bottlenecks**
3. **Trace failures across services**
4. **Understand request flow**
5. **Debug production issues faster**
6. **Measure service latency SLIs**
7. **Optimize retry/backoff logic**
8. **Reduce MTTR (Mean Time To Resolve)**

Tracing is the backbone of **observability** along with logs and metrics.

---

# **7. OpenTelemetry Pipeline (Very Clean Explanation)**

### **1. Instrumentation**

Your code emits spans.

Methods:

* Manual instrumentation
* Auto-instrumentation (Java/Node/Python/Go)

### **2. OTel SDK**

Builds span data structures.

### **3. OTel Collector**

Receives spans → processes → exports to backend.

### **4. Visualization Backend**

Choose one:

* Jaeger (popular)
* Grafana Tempo
* Zipkin
* Honeycomb
* Datadog

---

# **8. Key Span Attributes (Extremely Important)**

Examples of useful attributes:

| Attribute             | Meaning              |
| --------------------- | -------------------- |
| http.method           | GET/POST             |
| http.url              | endpoint URL         |
| http.status_code      | 200/500              |
| db.system             | postgres/redis/mongo |
| db.statement          | SQL query            |
| messaging.destination | Kafka topic          |
| error                 | Boolean              |
| exception.message     | error details        |

Good attributes = easier debugging.

---

# **9. Sampling Strategies**

Tracing everything can be expensive.

### **1. Always On**

Trace 100% of traffic
Used in development.

### **2. Always Off**

Trace nothing
Used when privacy concerns.

### **3. Probabilistic Sampling**

Example:

```
sample 1% of requests
```

### **4. Rate Limiting**

Example:

```
capture max 100 traces/sec
```

### **5. Tail Sampling (Best)**

Decide *after* receiving spans:

* Keep slowest traces
* Keep error traces
* Discard normal traces

Very useful for production.

---

# **10. Common Problems Without Tracing**

1. Hard to debug failures across microservices
2. Cannot identify which service is slow
3. Cannot measure true latency
4. Hard to debug retry storms
5. Blind spots in service communication
6. High MTTR during incidents

Tracing fixes all of these.

---

# **11. Example Flow (Readable)**

```
User Request
    → API Gateway (Span 1)
        → Auth Service (Span 2)
            → DB Query (Span 3)
        → Order Service (Span 4)
            → Inventory Service (Span 5)
                → Redis Cache (Span 6)
```

All of this becomes **one trace** with a complete waterfall graph.

---

# **12. Interview Summary (30 seconds)**

Distributed tracing tracks a request as it flows through multiple microservices.
OpenTelemetry provides vendor-neutral instrumentation with Trace IDs, spans, and context propagation.
Each service creates spans and sends them to an OTel collector, which exports them to tracing backends like Jaeger or Tempo.
Tracing solves debugging, latency analysis, dependency mapping, and observability in distributed systems.

It is essential for modern microservice architectures.
