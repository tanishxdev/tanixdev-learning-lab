
# How to Size a Cache

Simple, clean, complete explanation

Sizing a cache means deciding:

1. **How much memory you need (GB or TB)**
2. **How many items you can store**
3. **Whether the cache will achieve the required hit rate**
4. **How many cache nodes you need**

Cache sizing is one of the most important decisions in **high-performance system design**.

---

# 1. Key Formula (Most Important)

```
Cache Size = (Data Size per Item × Number of Items to Cache) × Replication Factor
```

BUT the trick is deciding **how many items** need to be cached, not everything.

---

# 2. Step-by-Step Cache Sizing Process

We size cache using **working set theory**:

```
Cache should store the working set = the data accessed frequently.
```

Let’s go through it.

---

## Step 1: Estimate Item Size

Example items:

* User profile: 1–5 KB
* Product data: 2–10 KB
* Feed posts: 3–20 KB
* Session data: 256 bytes – 4 KB
* Document/JSON blob: 5–100 KB

Use average item size.

Example:

```
User record ~5 KB
```

---

## Step 2: Estimate Hot Data Percentage (Working Set)

Not all data will be frequently accessed.
Usually:

* 20% of users generate 80% of traffic
* 5% of posts get 90% engagement
* 10% of products get 95% views

Use Pareto principle:

```
Working Set = 10–20% of total dataset
```

Example:

```
Total users = 10M
Active users (hot) = 20% = 2M
```

---

## Step 3: Compute Cache Storage Required

```
Cache Size = working_set_count × item_size
```

Example:

```
working_set = 2M users
item_size = 5 KB

Cache size = 2M × 5 KB = 10,000,000 KB = 10 GB
```

So your Redis cluster needs at least **10 GB** of usable memory.

---

## Step 4: Add Replication Factor (for HA)

Most caches use replication for high availability.

Redis example:

```
RF = 2 (primary + replica)
```

Then:

```
Effective Cache Size = 10 GB × 2 = 20 GB
```

---

## Step 5: Add Overhead (Very Important)

Caches have runtime/memory overhead:

Redis overhead: **20–40%**
Memcached: **10–20%**

So:

```
Total Memory Needed = cache_size × 1.25 (approx)
```

Example:

```
20 GB × 1.25 = 25 GB
```

---

# 3. Cache Sizing Using Hit Rate (Traffic-Driven Approach)

Sometimes the question is:

**How big should the cache be to get 80–90% hit rate?**

The curve usually looks like:

* 40–60% hit rate → very small cache
* 80% hit rate → cache 10–20% of dataset
* 90–95% hit rate → cache 20–40% of dataset
* > 95% hit rate → expensive, diminishing returns

We estimate size needed to hit the desired hit ratio.

---

# 4. Cache Sizing by QPS Load

Another approach:

```
cache_QPS = total_QPS × hit_rate
db_QPS    = total_QPS × (1 – hit_rate)
```

Example:

```
Total QPS = 10,000/sec
Hit rate target = 90%

Cache QPS = 9000/s  
DB QPS    = 1000/s
```

Now test if database can handle 1000 QPS.

If not → increase cache size until DB load is acceptable.

---

# 5. Cache Sizing for Time-based policies (TTL)

TTL changes how long items stay in memory.

Formula:

```
Cache Size ≈ write_rate × TTL
```

Example:

```
Writes = 1000 items/sec
TTL = 300 sec (5 min)

Cache Size = 1000 × 300 = 300,000 items
```

Then multiply by item size.

If each item = 4 KB:

```
300,000 × 4 KB = 1.2 GB cache needed
```

---

# 6. Cache Sizing with Eviction (LRU/MRU/LFU)

If using LRU (most common):

```
Cache should hold at least the working set during TTL.
```

If eviction is happening too frequently:

* increase cache size
* or change TTL
* or shard cache over more nodes

---

# 7. Cache Sizing for Redis Cluster

Redis node recommended max memory:

```
≤ 50 GB (to avoid long RDB/AOF operations)
```

If you need **200 GB cache**:

```
200 GB / 50 GB = 4 nodes (with replicas → 8 total)
```

---

# 8. Example: Real Cache Sizing Problems

---

## Example 1: Social Media Feed Cache

Users: 50M
Hot users: 10% = 5M
Item size ~ 10 KB

```
Cache Size = 5M × 10 KB = 50M KB = 50 GB
RF=2 → 100 GB
Overhead ~30% → 130 GB total cluster size
```

---

## Example 2: Product Catalog Cache

Products: 2M
Hot products: 15% = 300k
Item size = 8 KB

```
300k × 8 KB = 2.4 GB
RF=2 → 4.8 GB
Overhead → ~6–7 GB
```

---

## Example 3: Session Cache

Concurrent sessions: 1M
Item size = 500 bytes
TTL = 30 minutes = 1800 sec
Write rate = ~550 new sessions/sec

Total active items = 1M

```
1M × 500B = 500 MB
With RF=2 → 1 GB
Overhead → ~1.3 GB
```

---

# 9. Simple Rules of Thumb (Extremely Useful)

1. Cache 10–20% of dataset → ~80–90% hit rate.
2. Memory overhead = 20–40% extra.
3. Redis nodes should not exceed 50 GB memory.
4. Use replication factor = 2 for HA.
5. TTL-based caches → size = write_rate × TTL.
6. Hit rate must be measured and adjusted dynamically.

---

# 10. Interview-Ready Summary (30 Seconds)

To size a cache, estimate the size of each item, determine how many items belong to the active working set (typically 10–20% of dataset), multiply, then apply replication factor and memory overhead.
Alternatively, size cache based on hit rate, QPS load, TTL, or eviction behavior.
Cache sizing determines cluster size, node count, and performance.

