# **Retry and Backoff Strategies**

Retries are essential in distributed systems where failures are often **temporary**:
network blips, timeouts, overloaded services, momentary unavailability, packet loss.

But uncontrolled retries can make the situation **much worse**.
Retry storms, queue buildup, cascading failures, and total system meltdown happen when retries are not designed properly.

This file explains **how to retry safely**, how to use **backoff**, **jitter**, **limits**, and how retries interact with **timeouts** and **circuit breakers**.

---

# **1. Why Retry?**

Many failures in distributed systems are **transient**:

* network packet dropped
* downstream service slow
* momentary overload
* DB lock contention
* leader election in progress
* instance auto-scaling

Retrying helps recover from short-lived issues without user-visible failures.

But retries must be **controlled**.

---

# **2. What Problems Unsafe Retries Cause?**

### **A. Retry Storm**

If 1000 clients retry at the same moment → downstream collapse.

### **B. Cascading Failures**

One slow service → causes others to retry → exponential load → more failures.

### **C. Thundering Herd**

All clients retry immediately after a failure → huge traffic spike.

### **D. Increased Latency**

More retries = more waiting = worse user experience.

### **E. Wasted Resources**

Retries consume CPU, network, threads, and connections.

Retries must be *smart* and *bounded*.

---

# **3. Basic Retry Strategy**

Retry on **only safe, retryable failures**:

Retry on:

* timeouts
* 5xx server errors
* network errors
* throttling (429) depending on API

Do NOT retry on:

* 4xx client errors (400, 401, 403, 404)
* validation errors
* business logic failures

Retries must follow a pattern.

---

# **4. Backoff Strategies**

Backoff controls **how long to wait before retrying**.

## **1. Fixed Backoff**

Always wait same amount.

Example:

```
retry after 200 ms, 200 ms, 200 ms...
```

Simple but causes synchronized retries → **not recommended**.

---

## **2. Linear Backoff**

Wait increases by fixed amount.

Example:

```
100 ms → 200 ms → 300 ms → 400 ms
```

Better, but still predictable → not ideal.

---

## **3. Exponential Backoff**

Wait doubles each retry.

Example:

```
100 ms → 200 ms → 400 ms → 800 ms → 1600 ms
```

Most widely used.
Reduces retry storms (spreads load).

---

## **4. Exponential Backoff with Jitter (BEST PRACTICE)**

Exponential backoff + random jitter:

Example:

```
100–200 ms  
200–400 ms  
400–800 ms  
800–1600 ms  
```

Prevents synchronized retries.

**This is used in:**

* AWS SDK
* Google Cloud
* Netflix libraries
* Kubernetes API client
* gRPC retry policies

Always use jitter.

---

## **5. Full Jitter (AWS Recommended)**

Wait time:

```
sleep = random(0, base * 2^retries)
```

Best for avoiding retry storms.

---

# **5. Retry Limits**

Always define:

* max retry attempts
* max total wait time
* max overall request timeout

Example:

```
max_retries = 3
max_wait_time = 8 seconds
total_timeout = 10 seconds
```

Without limits, retries become infinite → meltdown.

---

# **6. Retry Budget (SRE Best Practice)**

Retry budget = limit on how many retries your system allows.

Example:

```
Retry budget = 10% of total requests
```

Prevents retries from overwhelming downstream systems.

Google SRE uses this strategy.

---

# **7. Retry + Timeout Relationship**

Retries without timeouts = thread pool exhaustion.

Rules:

1. Set **short timeouts** for each attempt
2. Set larger **overall timeout**

Example:

```
single attempt timeout = 500 ms
total request timeout = 3 seconds
```

Timeouts protect your system from waiting indefinitely.

---

# **8. Retry + Circuit Breaker (Critical)**

Retries + Circuit Breaker must work together:

* If retry limit exceeded → Circuit Breaker opens
* Open circuit = no new retries
* This prevents retry storms

Flow:

```
Try → Retry → Fail → Circuit Breaker Opens → Stop Retrying → Cooldown → Recover
```

---

# **9. Retry Patterns Per Failure Type**

| Failure Type          | Should Retry?      | Why                  |
| --------------------- | ------------------ | -------------------- |
| Timeout               | Yes                | transient            |
| 5xx errors            | Yes                | server-side issues   |
| 429 Too Many Requests | Yes (with backoff) | rate limiter tripped |
| Network error         | Yes                | unstable network     |
| DNS failure           | Yes (limited)      | temporary            |
| 4xx errors            | No                 | client mistake       |

---

# **10. Example Retry Configuration (Industry Standard)**

```
max_retries: 3
initial_backoff: 100 ms
max_backoff: 1–2 seconds
backoff_strategy: exponential + full jitter
timeout_per_attempt: 300 ms
overall_timeout: 2 seconds
retry_budget: 10%
retry_on: [timeout, 5xx, network-error]
```

This setup is **production-grade**.

---

# **11. Retry Danger Zones (Must Know for Interviews)**

### **A. Retrying idempotent vs non-idempotent operations**

* GET, PUT → safe
* POST → unsafe unless idempotency key used

### **B. Retrying DB writes**

Can create:

* duplicates
* inconsistent state
* lock contention

### **C. Retrying synchronous APIs**

High risk of saturation.

---

# **12. When NOT To Retry**

Avoid retries when:

* Downstream service is completely down
* Circuit Breaker is OPEN
* Operation is non-idempotent
* You risk overload
* User-facing API is latency-sensitive
* You are inside a batch job or queue system (use DLQ instead)

---

# **13. Monitoring Retries (Must Include in Observability)**

Track:

* retry.count
* retry.attempt distribution
* retry.latency
* retry.success vs failure
* retry-caused latency increase
* 429 + 5xx spike correlation
* circuit breaker interactions

High retry counts indicate systemic issues.

---

# **14. Interview Summary (30 seconds)**

Retries help recover from transient failures, but they must use exponential backoff with jitter, limits, and timeouts to avoid retry storms.
Use only on retryable errors (timeouts, 5xx).
Pair retries with a circuit breaker for safety, apply retry budgets, and monitor retry metrics.
This creates a resilient and stable distributed system.

