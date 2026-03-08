# Bandwidth & Network Limits

Simple, clean, complete explanation

When designing distributed systems, you must understand **network limits**, because:

* Data transfer cost dominates performance
* Bandwidth becomes the system bottleneck
* Replication, backups, and streaming depend on it
* Latency can destroy throughput
* TCP/IP behavior restricts real speed

This topic appears in **system design, infra, cloud, and scaling interviews**.

---

# 1. What Is Bandwidth?

**Bandwidth = Maximum amount of data that can be transmitted per second.**

Examples:

* 100 Mbps
* 1 Gbps
* 10 Gbps
* 40/100 Gbps (data centers)

Meaning:

```
1 Gbps = ~125 MB/sec real payload
```

Bandwidth limits how FAST large files and streams can move.

---

# 2. Throughput vs Bandwidth (Very Important)

### Bandwidth

Theoretical maximum speed.

### Throughput

Actual achieved speed after:

* protocol overhead
* congestion
* latency
* packet drops
* processing limitations

Example:

```
1 Gbps network → you get ~920 Mbps real throughput
```

There is always overhead.

---

# 3. Latency vs Bandwidth

### Latency

How long it takes for data to travel from A → B (ms).

### Bandwidth

How much data can be sent per second.

High bandwidth ≠ low latency.

Examples:

* Cross-region latency = 100 ms
* Same rack latency = <0.5 ms

Latency matters for:

* RPC calls
* microservices
* database round trips
* chat apps
* leader election

Bandwidth matters for:

* file transfers
* streaming
* backups
* replication
* analytics workloads

---

# 4. Network Bottlenecks in Distributed Systems

Your system is ALWAYS bottlenecked by one of:

1. **NIC bandwidth limit**
2. **Switch capacity**
3. **Disk throughput**
4. **TCP congestion control**
5. **Application overhead**
6. **Cross-region latency**
7. **Bandwidth per connection**

Example:
You have **1 Gbps NIC**.
Your DB replication needs **200 MB/sec**.
Impossible because:

```
1 Gbps = ~125 MB/sec max
```

This becomes a system design bottleneck.

---

# 5. Common Bandwidth Calculations (EXTREMELY IMPORTANT)

### 1 Gbps → MB/sec

```
1 Gbps = 1000 Mbps
1000 Mbps / 8 = 125 MB/sec
```

### 10 Gbps → MB/sec

```
10 Gbps = 10000 Mbps
10000 / 8 = 1250 MB/sec
```

### Example:

Copying a 1 TB file on 1 Gbps:

```
1 TB = 1,000,000 MB
1 Gbps = 125 MB/s
Time = 1,000,000 / 125 = 8000 sec ≈ 2.2 hours
```

This matters for:

* database migrations
* backups
* replication lag
* cluster rebalancing

---

# 6. TCP/IP Limits (Affects Real Speed)

### TCP slow start

Throughput ramps up gradually.

### Congestion window

Limits data "in flight".

### High-latency links reduce throughput

Formula:

```
Throughput = window size / RTT
```

If RTT = 100ms, window = 64KB:

```
Throughput = 64KB / 0.1s = 640KB/s
```

Terrible speed despite high bandwidth.

This is why **cross-region replication is slow**.

---

# 7. Packet Loss Kills Throughput

Even 0.001% packet loss drastically lowers TCP throughput.

Because TCP thinks congestion → reduces speed.

This is why:

* cloud VPCs use reliable networks
* data centers avoid overloaded switches

---

# 8. Real Network Limits in Data Centers

### NICs

* 1G NIC → 125 MB/s
* 10G NIC → 1.25 GB/s
* 40G NIC → 5 GB/s
* 100G NIC → 12.5 GB/s

### Switch fabric capacity

Switch must handle aggregated bandwidth without dropping packets.

### Disk speed often the bottleneck

Example:

* HDD → 150 MB/s
* SSD → 500–3000 MB/s
* NVMe → 3–7 GB/s

If NIC is faster than disk → disk bottleneck
If disk is faster than NIC → NIC bottleneck

---

# 9. Horizontal Scaling Doesn’t Always Solve Network Issues

Even if you add more servers, **each server still has NIC limits**.

Example:

```
100 nodes with 1G NIC each
Cluster max = 100 Gbps
```

But:

* Some nodes become hot
* Cross-shard communication increases
* Network switches become bottlenecks

---

# 10. Bandwidth Constraints in Real Systems

### 1. Replicating databases across regions

High latency → slow replication → stale replicas.

### 2. Backup/restore

Moving terabytes over limited network takes hours.

### 3. Video streaming

Requires continuous bandwidth.
Bitrate must be lower than user’s bandwidth.

### 4. API servers

High RPS with large payloads saturate NIC.

### 5. Large analytics jobs

Huge shuffle data in Spark/Hadoop blocks network.

### 6. Microservices

Too many RPC calls overwhelm east-west traffic.

---

# 11. How to Optimize Network Usage

### A. Reduce payload size

* Compression
* Protobuf instead of JSON
* Delta updates

### B. Reduce round trips

* Batch RPC calls
* Use gRPC streaming

### C. Avoid cross-region traffic

* Use replication zones
* Geo-partition data

### D. Increase NIC capacity

Move from 1G → 10G → 40G → 100G.

### E. Add caching

CDN, Redis, edge caching reduces bandwidth load.

### F. Use async write paths

Bulk upload later instead of inline writes.

---

# 12. Interview-Ready Summary (30 Seconds)

Bandwidth determines how fast data can move; throughput is the actual achieved speed, which is always lower due to overhead, latency, congestion, and packet loss.

Network limits become bottlenecks in distributed systems for replication, backups, analytics, and microservices communication.

Latency affects per-request delay; bandwidth affects large file transfers.

NIC capacity, switch limits, TCP slow start, cross-region latency, and packet loss all restrict real throughput. Optimizing bandwidth usage requires batching, compression, caching, and reducing cross-region traffic.

