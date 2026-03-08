## Redis Fundamentals

### 1. What is Redis and what are its main features?

#### Concepts

- **Redis (Remote Dictionary Server)** is an **open-source, in-memory data structure store** used as:
  - Database
  - Cache
  - Message broker

- It stores data primarily **in RAM**, which provides extremely **low latency and high throughput**.

**Main Features**

1. **In-Memory Storage**
   Data is stored in RAM, enabling microsecond-level response times.

2. **Key–Value Data Model**
   Data is stored as `key → value` pairs.

3. **Rich Data Structures**
   Redis supports:
   - Strings
   - Hashes
   - Lists
   - Sets
   - Sorted Sets
   - Bitmaps
   - HyperLogLogs
   - Streams
   - Geospatial indexes

4. **Persistence**
   Redis can persist data to disk using:
   - **RDB (snapshotting)**
   - **AOF (append-only file)**

5. **High Availability**
   - Replication (master–replica)
   - Sentinel for automatic failover
   - Redis Cluster for horizontal scaling

6. **Pub/Sub Messaging**
   Supports publish–subscribe communication for real-time systems.

---

#### Examples

**Store and retrieve data**

```bash
SET user:1 "Tanish"
GET user:1
```

**Counter example**

```bash
INCR page:views
```

**Cache with expiration**

```bash
SET session:123 "active" EX 60
```

---

#### Interview Ready Answer

Redis is an **open-source, in-memory key–value data store** that can function as a **database, cache, and message broker**.

It stores data in **RAM**, which enables extremely **fast read and write operations**. Redis supports various **data structures such as strings, lists, sets, hashes, and sorted sets**, making it more flexible than simple key-value stores.

It also provides **persistence mechanisms like RDB and AOF**, **replication for high availability**, **clustering for scalability**, and **Pub/Sub messaging for real-time communication**. Because of its speed and versatility, Redis is commonly used for **caching, session storage, real-time analytics, rate limiting, and leaderboards**.

---

### 2. How does Redis differ from traditional databases?

#### Concepts

Redis differs from traditional databases mainly in **storage model, performance, and data structure design**.

Key differences:

1. **Storage Location**
   - Redis: Data stored primarily in **memory (RAM)**
   - Traditional DBs: Data stored on **disk**

2. **Data Model**
   - Redis: **Key–value with advanced data structures**
   - Traditional DBs: **Relational tables**

3. **Performance**
   - Redis: Extremely **low latency**
   - Traditional DBs: Slower due to disk I/O

4. **Use Case**
   - Redis: **Caching, sessions, real-time systems**
   - Traditional DBs: **persistent business data**

5. **Schema**
   - Redis: **Schema-less**
   - SQL DBs: **Schema-based**

---

#### Examples

**Redis**

```bash
SET user:1:name "Tanish"
```

**SQL Database**

```sql
SELECT name FROM users WHERE id = 1;
```

---

#### Interview Ready Answer

Redis differs from traditional databases mainly in **how it stores and manages data**. Redis stores data **in memory**, while traditional databases like MySQL or PostgreSQL store data **on disk**.

Redis follows a **key–value model with advanced data structures**, whereas relational databases store data in **structured tables with schemas**.

Because Redis operates in memory, it provides **much faster read and write performance**, making it ideal for **caching, session storage, and real-time systems**, while traditional databases are better suited for **long-term persistent storage and complex queries**.

---

### 3. Describe the architecture of Redis.

#### Concepts

Redis uses a **single-threaded event-driven architecture**.

Key components:

1. **Client**
   - Applications connect to Redis using clients (Node.js, Python, Java, etc.)

2. **Redis Server**
   - Processes commands from clients.
   - Executes commands sequentially.

3. **Event Loop**
   - Uses **I/O multiplexing** (epoll, kqueue, select) to handle multiple connections efficiently.

4. **In-Memory Data Store**
   - Data structures stored in RAM.

5. **Persistence Layer**
   - RDB snapshots
   - AOF logging

6. **Replication**
   - Master node replicates data to replica nodes.

7. **Cluster / Sentinel**
   - Cluster for horizontal scaling
   - Sentinel for failover monitoring.

---

#### Examples

**Architecture Flow**

```
Client Application
        ↓
   Redis Client
        ↓
   Redis Server
        ↓
 In-Memory Data Store
        ↓
Persistence (RDB / AOF)
```

---

#### Interview Ready Answer

Redis follows a **single-threaded, event-driven architecture** that processes commands sequentially. Clients send requests to the Redis server, which handles them using an **event loop and I/O multiplexing** to efficiently manage multiple connections.

The server stores data in **memory using optimized data structures**, and optionally persists it to disk using **RDB snapshots or AOF logs**.

For scalability and reliability, Redis supports **replication, Sentinel for automatic failover, and Redis Cluster for data sharding across multiple nodes**.

---

### 4. What is an in-memory data store and how does Redis leverage it?

#### Concepts

An **in-memory data store** is a database that keeps data **primarily in RAM instead of disk**.

Advantages:

- Extremely **fast read/write operations**
- Low latency
- High throughput

However:

- RAM is **more expensive than disk**
- Risk of data loss if not persisted.

Redis leverages this by:

- Storing data in **RAM**
- Using **optimized data structures**
- Providing optional **disk persistence**.

---

#### Examples

**Typical Redis Operation**

```bash
SET cart:user123 "item1,item2"
GET cart:user123
```

Operations occur **directly in RAM**, so they are extremely fast.

---

#### Interview Ready Answer

An **in-memory data store** is a database that stores data primarily in **RAM instead of disk**, allowing extremely fast read and write operations.

Redis leverages this approach by keeping its entire dataset in memory and using highly optimized data structures. This allows Redis to achieve **very low latency and high throughput**, often handling hundreds of thousands of operations per second.

To prevent data loss, Redis also supports **persistence mechanisms like RDB snapshots and AOF logs**, which periodically store the in-memory data to disk.

---

### 5. What is the default port on which Redis listens?

#### Concepts

- Redis server listens on **TCP port 6379** by default.
- This port is defined in the **Redis configuration file (`redis.conf`)**.

You can change it by modifying:

```
port 6379
```

in the configuration file.

---

#### Examples

**Start Redis**

```bash
redis-server
```

**Connect to Redis**

```bash
redis-cli -p 6379
```

---

#### Interview Ready Answer

By default, Redis listens on **port 6379** for incoming client connections. This port is configurable in the **redis.conf configuration file**, allowing administrators to change it based on deployment requirements. Clients connect to the Redis server using this port to send commands and retrieve data.

### 6. How does Redis provide high performance and low latency?

#### Concepts

Redis achieves high performance through several architectural design choices:

1. **In-Memory Storage**
   - Data is stored in **RAM instead of disk**
   - Avoids disk I/O latency

2. **Single-Threaded Event Loop**
   - Redis processes commands sequentially
   - Eliminates thread synchronization overhead

3. **Efficient Data Structures**
   - Uses optimized structures like **hash tables, skip lists, and linked lists**

4. **I/O Multiplexing**
   - Uses **epoll, kqueue, select**
   - Handles thousands of client connections efficiently

5. **Pipelining**
   - Allows multiple commands to be sent without waiting for individual responses

6. **Memory-Level Operations**
   - All operations occur in RAM which is much faster than disk operations.

---

#### Examples

**Normal commands**

```bash
SET user:1 "Tanish"
GET user:1
```

**Pipelining example**

```bash
SET key1 value1
SET key2 value2
SET key3 value3
```

Multiple commands are processed quickly due to in-memory execution.

---

#### Interview Ready Answer

Redis provides high performance and low latency primarily because it stores data **in memory rather than on disk**, which eliminates disk I/O delays.

It also uses a **single-threaded event-driven architecture**, which avoids thread synchronization overhead and ensures fast command execution. Redis further improves performance through **efficient internal data structures, I/O multiplexing for handling many connections, and command pipelining**.

These design choices allow Redis to process **hundreds of thousands of operations per second with microsecond latency**.

---

### 7. What are the different data types supported in Redis?

#### Concepts

Redis supports several **native data structures**, which makes it more powerful than simple key-value stores.

Main Redis data types:

1. **Strings**
   - Basic key-value type
   - Can store text, numbers, or binary data

2. **Hashes**
   - Field-value pairs inside a key
   - Useful for objects (e.g., user profiles)

3. **Lists**
   - Ordered collection of elements
   - Implemented as linked lists

4. **Sets**
   - Unordered collection of **unique elements**

5. **Sorted Sets (ZSets)**
   - Similar to sets but elements have **scores**
   - Automatically sorted by score

6. **Bitmaps**
   - Bit-level operations on strings

7. **HyperLogLogs**
   - Probabilistic structure for **cardinality estimation**

8. **Streams**
   - Log-like structure for **event streaming**

9. **Geospatial indexes**
   - Store and query **location-based data**

---

#### Examples

**String**

```bash
SET name "Tanish"
```

**Hash**

```bash
HSET user:1 name "Tanish" age 21
```

**List**

```bash
LPUSH tasks "task1"
```

**Set**

```bash
SADD tags "nodejs"
```

**Sorted Set**

```bash
ZADD leaderboard 100 "player1"
```

---

#### Interview Ready Answer

Redis supports several **built-in data structures**, which makes it more powerful than traditional key-value stores.

The main Redis data types include **strings, hashes, lists, sets, and sorted sets**. In addition to these, Redis also supports advanced structures such as **bitmaps, HyperLogLogs, streams, and geospatial indexes**.

These data types allow Redis to efficiently handle use cases like **caching, session storage, queues, leaderboards, analytics, and real-time messaging systems**.

---

### 8. What is a Redis key and what are the best practices for naming keys?

#### Concepts

A **Redis key** is the **unique identifier used to store and retrieve data** in Redis.

Redis stores data in the format:

```
key → value
```

The key identifies the value stored in Redis.

**Example**

```
user:1:name → "Tanish"
```

---

**Best Practices for Naming Keys**

1. **Use namespaces**
   - Organize keys using `:`.

Example:

```
user:100:name
session:123
product:200:price
```

2. **Use descriptive names**
   - Makes debugging easier.

3. **Avoid very long keys**
   - Large keys waste memory.

4. **Use consistent naming conventions**

5. **Include identifiers**

Example:

```
cart:user:45
order:123:status
```

---

#### Examples

```bash
SET user:1:name "Tanish"
GET user:1:name
```

Another example

```bash
SET session:abc123 "active"
```

---

#### Interview Ready Answer

A **Redis key** is a unique identifier used to store and retrieve values in Redis. Redis follows a **key–value model**, where each key maps to a value stored in memory.

Best practices for naming keys include using **namespaces with colons for structure**, keeping names **descriptive and consistent**, avoiding unnecessarily long keys to reduce memory usage, and including identifiers when needed.

For example, instead of using a generic key like `data1`, a better key name would be **`user:100:name` or `session:abc123`**, which improves readability and maintainability.

---

### 9. How do you set a time-to-live (TTL) on Redis keys?

#### Concepts

**TTL (Time-To-Live)** defines how long a key should exist before **automatically expiring and being deleted**.

This is useful for:

- Caching
- Sessions
- Temporary tokens
- Rate limiting

Redis supports expiration using commands like:

- `EXPIRE`
- `TTL`
- `SETEX`
- `PEXPIRE`

---

#### Examples

**Set expiration**

```bash
SET session:123 "active"
EXPIRE session:123 60
```

Key expires in **60 seconds**.

---

**Check TTL**

```bash
TTL session:123
```

---

**Set value with expiration**

```bash
SET session:123 "active" EX 60
```

---

#### Interview Ready Answer

Redis allows setting a **Time-To-Live (TTL)** on keys so they automatically expire after a specified duration. This is commonly used for **caching, session management, and temporary data storage**.

TTL can be set using commands like **EXPIRE**, which assigns an expiration time to an existing key, or by using the **SET command with the EX option** to define expiration during creation.

Redis also provides the **TTL command** to check how much time remains before a key expires.

---

### 10. What is the role of the Redis configuration file (redis.conf)?

#### Concepts

The **redis.conf** file contains all configuration settings used to control the Redis server.

It defines how Redis behaves during runtime.

Important configuration settings include:

1. **Port Configuration**

```
port 6379
```

Defines the port Redis listens on.

2. **Memory Management**

```
maxmemory 2gb
```

Limits maximum memory usage.

3. **Persistence Settings**

```
save 900 1
```

Defines snapshot conditions.

4. **Security**

```
requirepass yourpassword
```

Enables authentication.

5. **Network Configuration**

```
bind 127.0.0.1
```

Defines allowed network interfaces.

---

#### Examples

Start Redis with configuration file

```bash
redis-server redis.conf
```

---

#### Interview Ready Answer

The **redis.conf** file is the main configuration file used to control the behavior of the Redis server. It contains settings related to **network configuration, memory management, persistence, security, logging, and performance tuning**.

For example, administrators can configure the **port Redis listens on, maximum memory usage, persistence settings like RDB or AOF, and authentication options** within this file.

By modifying redis.conf, developers and system administrators can optimize Redis for different deployment environments and workloads.
