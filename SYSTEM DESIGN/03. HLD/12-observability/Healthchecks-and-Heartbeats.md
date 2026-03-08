
# **Healthchecks and Heartbeats**

## **1. What Problem Do They Solve?**

In distributed systems, services, nodes, or components can fail silently due to:

* crashes
* deadlocks
* network issues
* resource exhaustion
* slow responses
* partial failures

**Healthchecks and Heartbeats ensure the system detects failures quickly**, so traffic can be rerouted or nodes replaced before the system collapses.

They are essential for:

* load balancers
* service meshes
* orchestrators (Kubernetes, ECS)
* databases
* caches
* distributed coordination

---

# **2. Healthchecks (Active Probing)**

A **healthcheck** is when an external system actively checks if a service is alive and healthy.

Examples:

* Load balancer checking if backend is up
* Kubernetes checking if container should be restarted
* Service mesh verifying if sidecar proxy is working

Healthchecks can be:

1. **Liveness Check**
2. **Readiness Check**
3. **Startup Check**

---

# **3. Types of Healthchecks (Critical for Interviews)**

## **A. Liveness Check**

Checks whether the application is alive (not deadlocked, crashed, or stuck).

If fails → restart the process.

Example:

```
/health/live
```

Used for:

* detecting deadlocks
* restarting crashed services

Liveness does **not** require external dependencies.

Good example:

* Return OK if the service loop is running.

---

## **B. Readiness Check**

Checks whether the service is ready to receive traffic.

If fails → remove from load balancer.

Example:

```
/health/ready
```

Readiness verifies:

* DB connection OK
* Cache connected
* Required resources initialized
* Service not overloaded

Important:
Failing readiness **does NOT restart** the service — it only stops routing traffic to it.

---

## **C. Startup Check**

Ensures service has fully initialized before liveness/readiness start.

Useful for:

* slow boot services
* heavy DB migrations
* applications requiring warm-up

Example:

```
/health/startup
```

Kubernetes only begins readiness/liveness checks after startup passes.

---

# **4. Heartbeats (Passive Signalling)**

A **heartbeat** is a periodic signal sent by a service to indicate:

* "I'm alive"
* "I'm functioning"
* "I'm connected"

Heartbeats are **pushed** rather than polled.

Examples:

* Worker node heartbeats to a master (Hadoop, Spark, Kubernetes nodes)
* Database nodes sending heartbeats to cluster metadata store
* IoT devices sending periodic signals
* Redis cluster nodes exchanging heartbeat messages

If heartbeat stops → node is considered dead.

---

# **5. Healthcheck vs Heartbeat (Very Clear Table)**

| Feature        | Healthcheck               | Heartbeat                        |
| -------------- | ------------------------- | -------------------------------- |
| Who initiates? | external system (pull)    | service itself (push)            |
| Purpose        | check service state       | detect node liveness             |
| When used?     | HTTP services, LB routing | distributed clusters             |
| Failure action | reroute / restart         | mark node dead / re-elect leader |
| Frequency      | seconds                   | milliseconds—seconds             |

---

# **6. What Healthchecks Test**

### **Liveness should test:**

* Is the main event loop alive?
* Is the thread still running?
* Is the container not frozen?

### **Readiness should test:**

* Can service access DB?
* Is cache reachable?
* Is rate limit exceeded?
* Is backlog too high?

### **Startup should test:**

* Has the service finished initialization?
* Have dependencies loaded?

### **Heartbeats test:**

* Node ↔ cluster connectivity
* Node health status
* Election participation

---

# **7. What NOT to Test in Healthchecks**

Incorrect healthchecks cause cascading failures.

Do **NOT** test:

* Slow 3rd party API
* Heavy queries
* Long-running business logic
* Expensive DB aggregation
* Anything taking > 50–100ms

Healthchecks should be:

* lightweight
* isolated
* fast
* reliable

---

# **8. Failure Handling Logic**

### **If Liveness fails → Restart container**

### **If Readiness fails → Remove from LB / stop traffic**

### **If Heartbeat stops → Node is declared dead**

Cluster may:

* reassign work
* perform leader election
* rebalance partitions

---

# **9. How Kubernetes Uses These Checks**

Kubernetes uses all 3:

```
livenessProbe   → restart container if application stuck
readinessProbe  → control pod traffic
startupProbe    → wait for system initialization
```

Heartbeat in Kubernetes:

* Nodes send heartbeats to control plane
* If missed → node marked NotReady
* Pods rescheduled elsewhere

---

# **10. Real-World Examples**

### Load Balancer Healthcheck:

```
GET /health/ready → 200 OK
```

If fails → LB stops routing traffic.

### Redis/Mongo/Cassandra Heartbeats:

Nodes gossip their status; if one stops → cluster marks it dead.

### Kafka Broker Heartbeats:

Consumers send heartbeats; if they fail → rebalancing happens.

---

# **11. Best Practices**

1. Separate liveness and readiness logic
2. Keep healthchecks fast (<100ms)
3. Never perform heavy DB queries
4. Make readiness dependent on required dependencies
5. Heartbeats must be frequent and light
6. Timeouts must be strict
7. Do not overload production systems with healthchecks
8. Include timestamp + node metadata in heartbeats
9. Use backoff to avoid healthcheck storms

---

# **12. Interview Summary (30 seconds)**

Healthchecks actively verify service health using liveness, readiness, and startup probes. They ensure bad instances do not receive traffic and allow recovery via restarts.
Heartbeats are passive periodic signals sent by nodes to indicate they are alive; missing heartbeats trigger failover, leader election, or rescheduling.
Both are essential for reliability, autoscaling, and preventing cascading failures in distributed systems.

---
