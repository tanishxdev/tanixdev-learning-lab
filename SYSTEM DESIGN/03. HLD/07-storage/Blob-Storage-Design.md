# Blob Storage Design

Simple, clean, complete explanation

**Blob Storage** (“Binary Large Object Storage”) is used to store:

* Images
* Videos
* PDFs
* User uploads
* Backups
* Large files
* Logs
* ML artifacts

Examples:
AWS S3, Google Cloud Storage, Azure Blob Storage, MinIO.

Goal:
Provide **infinite scalable**, **cheap**, **durable**, **highly available** storage for large unstructured files.

---

# 1. Design Goals

A blob storage system must support:

### 1. Scalability

Store billions/trillions of objects.

### 2. Durability

No data loss (ex: S3 = 11 nines durability).

### 3. Availability

High uptime, even during failures.

### 4. Low cost

Cold storage, tiering, replication.

### 5. Efficient retrieval

Fast reads, chunking, streaming.

### 6. Metadata search

Store object metadata separately for fast lookup.

### 7. Large object handling

Gigabytes–Terabytes.

---

# 2. Architecture Overview (Conceptual Breakdown)

A blob storage system usually has these components:

1. **API Gateway**
   Handles PUT, GET, DELETE requests.

2. **Metadata Store**
   Stores object metadata:

   ```
   object_id
   bucket
   file_name
   size
   checksum
   storage_location
   version
   created_time
   content_type
   ```

3. **Object Store**
   Stores the actual file data in distributed storage nodes.

4. **Chunking / Sharding Layer**
   Splits large files into chunks (e.g., 5MB each).

5. **Replication Manager**
   Creates multiple copies across zones / regions.

6. **Garbage Collector**
   Removes unused or expired versions.

7. **Indexing + Lifecycle Policies**
   Move cold data to cheaper storage.

---

# 3. Object Write Flow (PUT)

When a user uploads a file:

### Step 1: Client sends request

`PUT /bucket/object`

### Step 2: API Gateway authenticates

Checks access keys, permissions.

### Step 3: System generates an Object ID

Usually:

* UUID
* Snowflake
* Hash of content (for dedupe)

### Step 4: File is split into chunks

Example:
A 100MB file into 20 chunks of 5MB.

Chunk naming can be:

```
objectID/part-1
objectID/part-2
...
```

### Step 5: Chunks stored on multiple storage nodes

Typically 3–4 replicas.

### Step 6: Metadata written to DB

Writes record with:

* object id
* chunk locations
* file size
* checksum

### Step 7: Acknowledgement returned to client

---

# 4. Object Read Flow (GET)

### Step 1: Client requests

`GET /bucket/object`

### Step 2: Metadata lookup

Find object ID → list chunk locations.

### Step 3: Retrieve chunks from nearest replicas

Some systems support:

* Range reads
* Partial reads
* Streaming

### Step 4: Reassemble file

Chunks merged in correct order.

### Step 5: Return file to client

---

# 5. Storage Node Design

Storage nodes must:

* Be append-only (avoid file corruption)
* Support SSD/HDD
* Run checksum verification
* Rebuild chunks on failure
* Support erasure coding (optional)

Large-scale blob stores use **erasure coding** to reduce cost.

Example:

* 6 data blocks + 3 parity blocks
* Any 6 out of 9 can reconstruct the file

---

# 6. Metadata Store Design

Critical component.
Must be:

* Fast
* Highly available
* Strongly consistent

Usually implemented using:

* **SQL (PostgreSQL)**
* **NoSQL (DynamoDB)**
* **Distributed stores (Etcd, Zookeeper)**
* **Custom metadata service (S3 style)**

Key requirement:
**Metadata must not be lost** (otherwise data is unreachable even if chunks exist).

---

# 7. Key Design Concepts in Blob Stores

### 1. Content Addressing

File ID = hash(file content).
Helps with deduplication.

### 2. Versioning

Multiple versions of same object stored.

### 3. Soft deletes

Mark deleted → GC removes later.

### 4. Expiration policies

Auto-delete after TTL.

### 5. Access control

Bucket policies, object ACLs.

### 6. Presigned URLs

Client uploads directly to blob store without server proxy.

### 7. Tiered Storage

Examples:

* hot → SSD
* warm → HDD
* cold → glacier

---

# 8. Replication Strategies

Essential for durability and availability.

### 1. Multi-zone replication

3 replicas across AZs.

### 2. Multi-region replication

Optional cross-region sync.

### 3. Async replication

Lower latency, eventual consistency.

### 4. Synchronous replication

High consistency guarantees.

---

# 9. Consistency Model in Blob Storage

Most blob stores follow:

### **Write-after-read inconsistency**

Right after upload, some replicas may show old data.

### **Eventual consistency** for overwrites

Eventually all nodes see the new version.

### **Strong consistency** for new objects

S3 recently moved to strong consistency for new writes.

---

# 10. How Blob Storage Handles Failures

### A. Node Failure

Replication ensures data is not lost.
Re-replication restores missing chunks.

### B. Metadata Failure

Stored in strongly consistent DB to avoid corruption.

### C. Network Partition

Reads may serve stale versions (eventual consistency).
Writes go to available replicas.

### D. Bit Rot

Checksums used to detect corruption → auto repair from replicas.

---

# 11. Scaling Blob Storage

### Horizontally scale metadata shards

Use consistent hashing for bucket assignment.

### Horizontally scale storage nodes

Add new storage; rebalance chunks.

### Scale API gateways

Use load balancers, reverse proxies.

### Lifecycle management

Move old data to cold storage to free hot nodes.

---

# 12. Important Features to Support

### 1. Multipart Upload

Parallel chunk upload.

### 2. Range Queries

Read only part of a file.

### 3. Streaming API

Return chunks as stream (video, audio).

### 4. Encryption

At-rest + in-flight.

### 5. Checksums

MD5, SHA-256 to ensure data integrity.

### 6. Auditing & Logging

Track reads, writes, deletes.

---

# 13. Database Schema Example (Metadata)

Example metadata table:

```
object_id (PK)
bucket_name
user_id
file_name
version
size
content_type
checksum
chunk_count
chunk_locations (JSON or separate table)
created_at
updated_at
```

---

# 14. Interview-Ready Summary (30 Seconds)

Blob Storage stores large unstructured files (images, videos, documents) in scalable, durable, cheap distributed infrastructure.

Files are split into chunks, replicated across many storage nodes, and referenced by a metadata service that tracks locations, versioning, size, and integrity.

Reads fetch chunks from replicas and reassemble them.
Writes store chunks first, then metadata.
Data is replicated for durability and often eventually consistent across regions.

Systems like S3, GCS, and Azure Blob use this architecture to store billions of objects reliably.

---
