# File Storage Architecture (GFS – HDFS)

Simple, clean, complete explanation

Distributed file systems like **GFS (Google File System)** and **HDFS (Hadoop Distributed File System)** store **very large files (GB–TB)** across many machines while ensuring:

* Scalability
* Fault tolerance
* High throughput
* Distributed data processing

Both follow a **similar architecture**:

1. A **Master / NameNode** → stores metadata
2. Many **DataNodes / ChunkServers** → store data chunks
3. Data is split into **large blocks/chunks** (64MB / 128MB / 256MB)
4. Data is **replicated** across multiple nodes for durability
5. Designed for **batch processing**, not random small reads

Let’s break each part down.

---

# 1. Why Do We Need GFS/HDFS?

Traditional file systems break at large scale:

* Too many files
* Server disk space not enough
* Node failures common
* Need distributed computation (MapReduce, Spark)
* High write throughput
* Petabytes of data

GFS/HDFS solve these by:

* Splitting files into large fixed-size blocks
* Replicating blocks across machines
* Using a central metadata server
* Recovering quickly from failures

---

# 2. Core Architecture Components

Both GFS and HDFS have the same core roles:

### A. Master Node

* GFS → Master
* HDFS → NameNode

Stores **metadata only**, not file data.

Metadata includes:

* Namespace (directory structure)
* Block-to-datanode mapping
* File locations
* Lease info
* Replication count
* Block versioning

Master keeps everything in **RAM** for fast lookup.

### B. Worker Nodes

* GFS → ChunkServers
* HDFS → DataNodes

Responsibilities:

* Store chunks/blocks
* Serve read/write requests
* Periodically report to Master
* Re-replicate blocks when failures occur

### C. Clients

Use API to read/write files.
They **never send large data to the master**.
They directly communicate with DataNodes for heavy data transfer.

---

# 3. Storage Unit: Chunk / Block

File is divided into chunks:

```
GFS: 64 MB  
HDFS: 64 / 128 / 256 MB  
```

Why large?

* Reduce metadata load
* Fewer network seeks
* Efficient sequential reads
* Good for large computations

Each chunk/block is replicated (default = 3 replicas).

---

# 4. READ Path (Very Clear)

How a file read works:

1. Client asks Master/NameNode:
   “Where are the blocks for file X?”

2. Master returns list of DataNodes for each block.

3. Client fetches blocks **directly** from DataNodes, often sequentially.

4. If a DataNode fails mid-read → client retries another replica.

Master is **not involved in heavy data transfer**.

---

# 5. WRITE Path (Very Clear)

Write pipeline is more complex.

1. Client asks Master for chunk lease + replica placement.

2. Master picks:

   * Primary replica
   * Secondary replicas

3. Client pushes data to all replicas in a **pipeline** (forward chain).

4. Primary orders the writes and coordinates final commit.

5. Replicas acknowledge success.

Master only manages **control**, not data flow.

---

# 6. Consistency Model

Both systems offer **relaxed consistency**:

* Once a write is confirmed → all replicas eventually consistent
* Appending is common (suitable for logs)
* Overwrites not encouraged (expensive)
* Writes are atomic at block level

GFS offers **record append** for multiple clients writing same file.

HDFS originally supported **write-once, read-many**.

---

# 7. Fault Tolerance

Node failures are expected.

### Master handles:

* Detecting dead DataNodes
* Re-replicating blocks
* Removing stale replicas
* Balancing block distribution

DataNodes send periodic **heartbeats** and **block reports**.

### Replication Factor

Default = 3
But configurable.

### Rack Awareness

HDFS places replicas across racks to survive rack failure.

---

# 8. Metadata Storage

### GFS

Master keeps metadata in memory and persists updates in logs + checkpoints.

### HDFS

NameNode stores:

* FsImage (snapshot of file system metadata)
* EditLog (write-ahead log of recent changes)

SecondaryNameNode merges FsImage + EditLog to reduce size.

---

# 9. Scalability Techniques

### 1. Large Block Sizes

Reduce number of metadata entries.

### 2. Replication

Supports thousands of nodes.

### 3. Master Memory Optimization

Metadata optimized for in-memory access.

### 4. Load Balancing

Block placement + movement to avoid hotspots.

### 5. Namespace federation (HDFS)

Multiple NameNodes share namespace to scale metadata.

---

# 10. Differences Between GFS and HDFS

| Feature                 | GFS                     | HDFS                  |
| ----------------------- | ----------------------- | --------------------- |
| Origin                  | Google internal         | Open-source Hadoop    |
| Primary use             | Google services         | Hadoop ecosystem      |
| Write model             | Record append           | Write-once, read-many |
| Master HA               | Initially single Master | HA NameNode available |
| Chunk size              | 64MB                    | 64–256MB              |
| Tailored for MapReduce? | Yes                     | Yes                   |

---

# 11. Use Cases

### GFS

* Google search index
* Gmail data storage
* YouTube early storage

### HDFS

* Hadoop MapReduce
* Spark jobs
* Data warehouses
* ML pipelines
* Batch ETL systems

Not ideal for:

* Small files
* Random writes
* OLTP workloads

---

# 12. Advantages of GFS/HDFS

### 1. Fault tolerant

Automatic replica recovery.

### 2. High throughput

Optimized for sequential I/O.

### 3. Scalable

Thousands of nodes.

### 4. Simple consistency model

Append-only writes reduce conflicts.

### 5. Very cheap storage

Commodity hardware + replication.

---

# 13. Limitations

### 1. High latency

Not suitable for real-time workloads.

### 2. Not good for small files

NameNode memory overload.

### 3. No random writes

Rewrite entire block.

### 4. Single Master bottleneck

HDFS solved with federation + HA.

### 5. Append-only model

Not friendly for mutable data.

---

# 14. Interview-Ready Summary (30 Seconds)

GFS and HDFS are distributed file systems designed for massive files and batch processing.
They split files into large chunks, replicate them across DataNodes, and store only metadata on a Master/NameNode.
Clients read/write data directly from DataNodes, enabling high throughput.
Writes are append-oriented; consistency is relaxed.
Systems automatically recover from failures using heartbeats and replication.
GFS inspired HDFS and both underpin big data ecosystems like MapReduce and Spark.
