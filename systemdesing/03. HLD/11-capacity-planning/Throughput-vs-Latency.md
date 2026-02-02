# Load Balancer Capacity

Simple, clean, complete explanation

**Load Balancer Capacity = the maximum amount of traffic a load balancer can handle safely.**

Capacity must be estimated and provisioned correctly because:

* All requests hit the LB first
* LB becomes the single bottleneck
* LB failure = full system outage
* LB throughput and connection limits shape entire system scalability

LB capacity depends on:

1. **QPS** (Queries Per Second)
2. **Concurrent connections**
3. **Bandwidth / throughput**
4. **LB type (L4 vs L7)**
5. **LB instances / replicas**
6. **Health check overhead**

---

# 1. What Does a Load Balancer Actually Do?

A load balancer:

1. Accepts incoming connections
2. Performs routing decisions
3. Maintains TCP/HTTP connection state
4. Monitors backend health
5. Sends responses back to client

All of this consumes CPU, memory, and network bandwidth.

Thus LBs have **hard capacity limits**.

---

# 2. Components of LB Capacity

### A. **QPS Capacity**

How many requests per second an LB can handle.

### B. **Connection Capacity**

How many concurrent connections it can hold:

* TCP connections
* HTTP keep-alive sessions
* WebSockets (long-lived connections)

### C. **Throughput (Bandwidth)**

Measured in:

* Gbps (gigabits per second)
* MB/s (megabytes per second)

LB must handle:

```
inbound traffic + outbound traffic
```

### D. **CPU Load**

Routing decisions + SSL termination = high CPU cost.

### E. **Health Check Overhead**

LB hits backend servers frequently.

---

# 3. LB Capacity Calculation Flow

To calculate LB capacity, follow this:

```
1. Estimate total QPS
2. Estimate concurrency
3. Estimate average payload size
4. Estimate throughput
5. Apply LB efficiency factor
6. Apply redundancy buffer
```

Let’s go step-by-step.

---

# 4. Step-By-Step Load Balancer Sizing

---

## Step 1: Estimate Required QPS

Example:

```
API QPS = 20,000/sec
Peak factor = 5
Peak QPS = 100,000/sec
```

LB must handle **100k QPS minimum**.

---

## Step 2: Estimate Concurrent Connections

Formula:

```
Concurrent = QPS × average_request_time
```

Example:

```
100,000 QPS
Average request time = 50 ms (0.05 sec)

Concurrent = 100,000 × 0.05 = 5,000 connections
```

If using:

* keep-alive → connections increase
* WebSockets → connections remain for minutes/hours

For WebSockets:

```
1 million users → 1 million connections
```

---

## Step 3: Estimate Throughput Needed

Formula:

```
Throughput = QPS × payload_size × 2  (request + response)
```

Example:

```
Payload = 2 KB
QPS = 100k/sec

Throughput = 100,000 × 2 KB × 2 = 400,000 KB/s = 400 MB/s ≈ 3.2 Gbps
```

LB must handle **3–4 Gbps**.

---

## Step 4: SSL/TLS Termination Cost

LB CPU usage increases heavily if it terminates SSL.

* ALB/Nginx: heavy CPU
* NLB: no SSL termination → very high throughput

Rule:

```
SSL reduces capacity by 30–50%
```

---

## Step 5: Apply Efficiency Factor (LB not perfect)

LB typically operates best at:

```
~70–80% max utilization
```

We derate capacity by:

```
Effective LB capacity = raw_capacity × 0.7
```

---

## Step 6: Add Redundancy Buffer (Very Important)

LB must remain functional even if one LB fails.

Rule:

```
Use N+1 redundancy
```

Example:
Cluster needs:

```
2 LBs for load
1 extra LB for failover
```

---

# 5. Typical LB Capacities (Realistic Numbers)

### Software LBs

**NGINX / HAProxy (on 8-core machine):**

* QPS: 50k–200k QPS
* Throughput: 5–20 Gbps
* Connections: ~100k–500k

### AWS Load Balancers

**Application Load Balancer (ALB):**

* Auto-scales
* Handles millions of requests per second
* CPU based scaling
* L7 routing

**Network Load Balancer (NLB):**

* 50+ million packets/sec
* Can handle very high throughput
* L4 performance optimized

---

# 6. Example: Full LB Sizing Example

You have:

```
Peak QPS = 150k/sec
Avg payload = 3 KB
SSL termination enabled
```

### Step 1: Throughput

```
Throughput = 150k × 3KB × 2 = 900,000 KB/s = 900 MB/s ≈ 7.2 Gbps
```

### Step 2: SSL overhead (–40%)

```
Effective throughput needed = 7.2 Gbps / 0.6 = 12 Gbps
```

### Step 3: LB capacity per instance

Say 1 LB = 6 Gbps after SSL.

### Step 4: Required LB count

```
Total = 12 / 6 = 2 LBs
Add redundancy → +1 LB
```

Final setup:

```
3 load balancers
```

---

# 7. LB Capacity for WebSockets (Very Important)

With WebSockets:

```
Connections matter more than QPS
```

Example:

```
500k users online  
Each holds 1 connection
```

LB must support:

```
500k concurrent connections
```

This shapes LB choice:

* Nginx handles ~100k–200k connections per node
* Need 5 nodes minimum

---

# 8. LB Capacity for CDNs / Edge

Edge LBs (like Cloudflare, Akamai) operate at:

* millions QPS
* 100–400 Gbps throughput
* optimized C-layer routing

Not required in interviews unless global traffic is huge.

---

# 9. LB Sizing Based on Latency SLAs

If LB adds 1–5 ms overhead, you must ensure LB isn't overloaded.

Rule:

```
LB CPU must stay below 70% under peak.
```

If LB is overloaded → latency spikes → cascading failures.

---

# 10. Interview-Ready Summary (30 Seconds)

Load balancer capacity is determined by QPS, concurrent connections, throughput, and SSL overhead.
Estimate peak QPS, compute throughput (QPS × payload × 2), add SSL penalty, derate LB efficiency, and size for N+1 redundancy.
LB type matters: L7 (ALB, Nginx) is CPU-heavy; L4 (NLB) handles much higher throughput.
LB must never become the bottleneck, so capacity planning is essential.

