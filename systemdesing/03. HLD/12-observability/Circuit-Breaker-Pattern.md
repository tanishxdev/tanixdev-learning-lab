# **Circuit Breaker Pattern**

## **1. What Problem Does It Solve?**

In distributed systems, a downstream service can become **slow**, **unavailable**, or **overloaded**.
If the upstream service continues sending requests:

* Latency increases
* Threads/connections get stuck
* Retry storms happen
* Cascading failures spread across the system

The **Circuit Breaker Pattern** prevents this by **failing fast** instead of waiting on unhealthy services.

---

## **2. Core Idea**

A circuit breaker wraps calls to external services and switches between **three states**:

1. **Closed** → Everything normal. Allow all requests.
2. **Open** → Service is failing. Block requests immediately.
3. **Half-Open** → Test the service with limited requests to check recovery.

---

## **3. The Three States Explained**

### **A. Closed (Normal State)**

* Calls flow normally.
* Failures are counted in a rolling time window.
* If failure rate crosses a threshold → switch to **Open**.

Example rule:

```
If failure rate > 50% over last 20 calls → trip to OPEN
```

---

### **B. Open (Fail-Fast State)**

* All requests are rejected instantly.
* Prevents overload on a failing downstream service.
* Remains open for a configured **cool-off timeout**.

Example:

```
Open for 10 seconds
Return fallback response
```

---

### **C. Half-Open (Test State)**

* After timeout, allow only a **small number of test requests**.
* If they succeed → back to Closed
* If they fail → back to Open

This avoids immediately overloading a half-recovered service.

---

## **4. When Does the Circuit Breaker Trip?**

Common conditions:

| Trigger Type             | Example Rule                      |
| ------------------------ | --------------------------------- |
| **Failure Rate**         | >50% failures in last 30 requests |
| **Timeout Rate**         | >40% requests take >2 sec         |
| **Consecutive Failures** | 5 failures → Open                 |
| **Slow Calls**           | Too many slow responses           |

A good implementation uses a **rolling time window** (e.g., last 10 seconds).

---

## **5. Fallback Strategies**

When the breaker is **Open**, you must return a graceful response:

1. Serve cached/stale data
2. Return default or placeholder response
3. Queue request for async processing
4. Gracefully degrade features
5. Fast failure (error response)

Fallbacks prevent user-facing outages.

---

## **6. Circuit Breaker + Retries + Backoff (Best Practice)**

Circuit breakers are almost always combined with:

* **Retry strategy**
* **Exponential backoff**
* **Jitter**
* **Timeouts**

Recommended flow:

```
Try → Retry (few times) → If still failing → Breaker trips → Stop calling
```

This avoids retry storms that overload the downstream service.

---

## **7. Where Circuit Breakers Are Used**

* Microservices architectures
* API gateways
* gRPC communication
* Database/Cache connections
* Third-party API calls
* Message queues (Kafka/ RabbitMQ producers/consumers)

Almost every resilient distributed system uses circuit breakers.

---

## **8. Real-World Implementations**

* **Netflix Hystrix** (classic implementation)
* **Resilience4j** (Java)
* **Envoy / Istio** (service mesh)
* **Nginx / HAProxy** (connection & failure thresholds)
* **AWS API Gateway** (built-in throttling + breaker behavior)
* **gRPC Retry + CircuitBreaker config**

---

## **9. Key Parameters (Must Know for Interviews)**

| Parameter                                 | Meaning                            |
| ----------------------------------------- | ---------------------------------- |
| **failureRateThreshold**                  | % failures to trip breaker         |
| **slowCallThreshold**                     | Count slow responses as failures   |
| **callVolumeThreshold**                   | Minimum requests before evaluation |
| **waitDurationInOpenState**               | Cool-off time                      |
| **permittedNumberOfCallsInHalfOpenState** | How many test calls allowed        |
| **slidingWindowSize**                     | Time or count-based window         |

Good example configuration:

```
failure_rate_threshold: 50%
request_volume_threshold: 20
open_state_timeout: 10 seconds
half_open_test_calls: 5
window: last 10 seconds
```

---

## **10. What Failures Does Circuit Breaker Prevent?**

1. **Cascading failures**
2. **Retry storms**
3. **Thread/connection exhaustion**
4. **Queue backlog buildup**
5. **Increased latency spreading across services**
6. **Complete system meltdown**

---

## **11. Example Flow Summary (Very Simple)**

```
Normal → (too many failures) → OPEN
OPEN → (timeout ends) → HALF-OPEN
HALF-OPEN → (test call passes) → CLOSED
HALF-OPEN → (test call fails) → OPEN again
```

---

## **12. Interview Summary (30 seconds)**

A circuit breaker protects your service from calling an unhealthy downstream dependency.
It trips (Open state) when failure rate or latency crosses a threshold and immediately blocks calls, preventing cascading failures.
After a timeout, it enters Half-Open to test recovery.
Fallbacks provide graceful degradation.
It is essential for resilience in microservices.
