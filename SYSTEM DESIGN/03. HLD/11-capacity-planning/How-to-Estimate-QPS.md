

# How to Estimate QPS (Queries Per Second)

Simple, clean, complete explanation

**QPS (Queries Per Second)** = how many requests your system must handle every second.

Estimating QPS is *one of the most important skills in system design* because it drives:

* DB choice
* Sharding strategy
* Caching needs
* Server count
* Load balancer capacity
* Network/bandwidth planning

You can estimate QPS **even with incomplete data** by using simple formulas.

---

# 1. The Core Formula (Very Simple)

```
QPS = total requests per day / 86,400
```

Because:

```
1 day = 86,400 seconds
```

Example:

```
8.6 million requests/day
QPS = 8,600,000 / 86,400 ≈ 100 QPS
```

This is **average** QPS.

---

# 2. Peak QPS (Most Important in Interview)

Average QPS is useless for system design.

You must design for **Peak QPS**, not average.

Rule of thumb:

```
Peak QPS = 5x to 10x average QPS
```

Example:

```
Avg QPS = 100
Peak QPS = 500 to 1000
```

Real systems have bursty traffic.

---

# 3. Estimating QPS From Monthly Active Users (MAU)

When traffic data missing, use usage patterns.

Formula:

```
Requests per user per day  *  number of active users  /  86,400
```

Example:

```
10M MAU
1M DAU (10%)
Each user triggers 20 requests/day

Total = 20M requests/day
QPS = 20,000,000 / 86,400 ≈ 231 QPS
Peak QPS = ~1,500 QPS
```

---

# 4. Estimating QPS From App Actions

Break actions down by endpoints.

Example:
App has:

* Homepage: 500k hits/day
* Search: 2M hits/day
* Product page: 1M hits/day

Compute QPS per endpoint:

```
Homepage = 500,000 / 86400 ≈ 6 QPS
Search   = 2,000,000 / 86400 ≈ 23 QPS
Product  = 1,000,000 / 86400 ≈ 12 QPS
```

Total:

```
6 + 23 + 12 = 41 QPS avg
Peak ≈ 200–300 QPS
```

---

# 5. Estimating QPS From User Concurrency

If you know concurrent online users:

Formula:

```
QPS = concurrent users / average think time
```

Where **think time** = time between two user actions.

Example:

```
10,000 online users
Avg think time = 5 seconds

QPS = 10,000 / 5 = 2,000 QPS
Peak ≈ 10,000 QPS
```

---

# 6. Estimating QPS From API logs (very common)

If logs show:

```
total lines = 50M per day
```

Then:

```
50,000,000 / 86400 ≈ 578 QPS
Peak ≈ 3k–5k QPS
```

This is the easiest realistic method.

---

# 7. Estimating DB QPS vs API QPS

API QPS is **not equal** to DB QPS.

Example:
If every request triggers:

* 3 reads
* 1 write

Then:

```
DB Reads per sec = QPS * 3
DB Writes per sec = QPS * 1
```

If QPS = 1000:

```
Reads = 3000/sec
Writes = 1000/sec
```

This is crucial for DB capacity planning.

---

# 8. Estimating Cache QPS

If cache hit rate = 90%:

```
Cache QPS = QPS * 0.9
DB QPS    = QPS * 0.1
```

Example:

```
QPS = 1000
hit rate = 90%

Cache = 900 QPS
DB    = 100 QPS
```

---

# 9. Estimating Network Throughput Needed

If average payload size = 2 KB:

```
Network throughput = QPS * payload_size
```

Example:

```
QPS = 2000
Payload = 2 KB

Throughput = 2000 * 2 KB = 4000 KB/s ≈ 4 MB/s
```

This helps determine:

* Load balancer capacity
* NIC capacity
* Ingress cost

---

# 10. Estimating Server Count Needed

If 1 server processes 200 QPS:

```
Required servers = peak QPS / per-server QPS
```

Example:

```
Peak QPS = 2000
Per-server = 200 QPS
Servers needed = 2000/200 = 10 servers
```

Add 30% buffer:

```
≈13 servers
```

---

# 11. Typical QPS of Real Systems

* Small startup API → 10–100 QPS
* Medium SaaS → 1k–5k QPS
* Large consumer app → 50k–200k QPS
* Instagram / Twitter scale → 500k–1M QPS
* Google search → millions QPS

Interviewers check whether you think realistically.

---

# 12. Interview-Ready Summary (30 Seconds)

QPS = total daily requests divided by 86,400, but you *always* design for peak QPS (5–10x average).
Estimate using DAU, concurrent users, logs, or action breakdown.
Calculate DB QPS by multiplying API QPS with read/write operations.
QPS drives server count, caching needs, replication strategy, sharding, and bandwidth planning.

---