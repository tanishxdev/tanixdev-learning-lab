# How to Estimate Storage

Simple, clean, complete explanation

Storage estimation is essential in **system design**, **capacity planning**, and **infrastructure sizing**.

Estimating storage helps determine:

* How much disk / object storage your system needs
* How fast your data will grow
* When you need to scale
* How many shards you need
* Cost of cloud storage
* Backup storage capacity

You don’t need exact data — simple formulas give realistic, interview-ready numbers.

---

# 1. Core Formula

```
Total Storage = (Records per day × Size per record × Retention Days) × Replication Factor
```

This is the single most important formula.

---

# 2. Step-by-Step Storage Estimation

Let's break it into steps.

---

## Step 1: Estimate Record Size

Choose realistic average size per record.

Examples:

### User profiles

```
~1 KB each
```

### Logs / events

```
200 bytes to 2 KB per event
```

### Images

```
200 KB – 5 MB each
```

### Videos

```
5 MB – 500 MB each
```

### Sensor/IoT telemetry

```
100B – 500B per record
```

---

## Step 2: Estimate Volume Per Day

```
Daily Storage = records per day × size per record
```

Example:

```
5 million records/day  
Each record = 500 bytes
Daily storage = 5M * 500B = 2.5 GB/day
```

---

## Step 3: Apply Retention Policy

How long you store data:

* 1 month
* 6 months
* 1 year
* Forever

```
Total = daily storage × retention days
```

Example:

```
Daily = 2.5 GB
Retention = 365 days
Total = 2.5 × 365 = 912 GB ≈ 1 TB
```

---

## Step 4: Apply Replication Factor

Distributed systems store multiple copies.

Typical replication factors:

* SQL: 2 copies (primary + replica)
* HDFS: 3 copies
* Cassandra: RF=3
* S3: 11 9’s durability (multiple copies internally)

```
Effective storage = total × replication factor
```

Example:

```
1 TB * 3 replicas = 3 TB storage needed
```

---

# 3. Practical Examples (Very Important)

---

## Example 1: Logging System

You ingest:

```
10M log events/day  
Each = 300 bytes  
Retention = 90 days  
RF = 3
```

Daily:

```
10M * 300B = 3,000,000,000B = 3 GB/day
```

Total:

```
3 GB × 90 = 270 GB
× RF 3 = 810 GB
```

---

## Example 2: Image Upload Service

Uploads:

```
100k images/day  
Average size 500 KB  
Retention = forever  
RF = 3
```

Daily:

```
100,000 * 500KB = 50,000,000 KB ≈ 50 GB/day
```

Yearly:

```
50 GB * 365 ≈ 18,250 GB ≈ 18.25 TB
× RF 3 = 55 TB needed
```

---

## Example 3: Messaging App

Messages:

```
50M messages/day  
Payload size = 200 bytes  
Retention = 1 year  
RF = 2
```

Daily:

```
50M * 200B = 10 GB/day
```

Total:

```
10 × 365 = 3,650 GB ≈ 3.65 TB  
× 2 replicas = 7.3 TB needed
```

---

# 4. Estimate Metadata Storage (Often Forgotten)

Metadata often uses 10–30% extra space.

Examples:

* indexes
* keys
* timestamps
* compression overhead
* filesystem overhead
* compaction files (LSM trees)

Rule of thumb:

```
Extra storage = 20–40% of raw data
```

---

# 5. Storage Overhead by Database Type

### SQL (B-Tree)

* Indexes add 20–50% overhead
* Row headers + page structure
* WAL logs use additional space temporarily

### Cassandra / HBase (LSM)

* Multiple SSTables before compaction
* 2–3× temporary space needed during compaction

### MongoDB

* BSON overhead
* Indexes on every field

### Elasticsearch

* Very high overhead (2–4×) due to inverted indexes

---

# 6. Compression Savings

Compression helps reduce storage:

| Type                        | Typical Reduction |
| --------------------------- | ----------------- |
| Text logs                   | 5× to 10×         |
| JSON                        | 2× to 4×          |
| Images (already compressed) | Very little       |
| Time-series                 | 5× to 20×         |

If compression is on:

```
Total storage / compression ratio
```

---

# 7. Future Growth Estimation (Crucial)

Estimate annual growth:

```
Growth = daily storage × 365 × growth rate %
```

Example:

```
Daily = 50 GB  
Growth = 40%/year  
Year 1: 50GB×365 ≈ 18.2 TB  
Year 2: 18.2 TB × 1.4 ≈ 25.5 TB  
Year 3: 25.5 TB × 1.4 ≈ 35.7 TB
```

Plan storage capacity 2–3 years ahead.

---

# 8. Cloud Storage Cost Estimation

Example (AWS S3 Standard):

```
$0.023 per GB per month
```

If you store:

```
10 TB
```

Monthly cost:

```
10,000 GB × 0.023 = $230/month
```

Yearly:

```
≈ $2,760
```

Add:

* PUT cost
* GET cost
* network egress
* replication cost

---

# 9. Interview-Ready Summary (30 Seconds)

To estimate storage:

1. Determine record size (bytes/KB)
2. Estimate records per day
3. Multiply to get daily data volume
4. Multiply by retention period
5. Multiply by replication factor
6. Add overhead (20–40%)
7. Include compression if used

Storage = (records/day × size × retention × RF)
This guides sharding, DB choice, infra cost, and capacity planning.

---