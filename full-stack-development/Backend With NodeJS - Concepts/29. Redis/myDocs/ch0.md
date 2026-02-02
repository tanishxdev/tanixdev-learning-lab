# **REDIS — COMPLETE LEARNING ROADMAP (WITH DOCKER)**

---

## **Chapter 1 — Redis + Docker Basics (DONE ✅)**

### What you learned

* What Redis is (in-memory data store)
* Why Redis is used (speed, caching, ephemeral data)
* What Docker is (containerization)
* Image vs Container
* Docker Desktop UI vs CLI
* Running Redis using Docker
* Using `redis-cli`
* Basic Redis commands:

  * `SET`, `GET`, `DEL`
  * `EX` (TTL / expiry)
* RedisInsight (GUI) via official app
* Container lifecycle:

  * run → stop → start → remove

### Skills gained

* Can start/stop Redis confidently
* Can verify Redis data via CLI + UI
* Can reason about TTL and expiry
* Understand where commands must be run (OS vs redis-cli)

### Mini task (already done)

* Store + delete user name
* OTP with expiry

---

## **Chapter 2 — Redis Data Types (CORE FOUNDATION)**

### Concepts

* Redis data types:

  * STRING
  * LIST
  * SET
  * HASH
  * ZSET (Sorted Set)
* When to use which data type
* Memory behavior of each type

### Commands

* `LPUSH`, `RPUSH`, `LRANGE`
* `SADD`, `SMEMBERS`
* `HSET`, `HGET`, `HGETALL`
* `ZADD`, `ZRANGE`

### Mini Project

**User Activity Tracker**

* Store:

  * recent logins (LIST)
  * unique devices (SET)
  * user profile (HASH)
  * leaderboard (ZSET)

---

## **Chapter 3 — TTL, Expiry & Eviction (VERY IMPORTANT)**

### Concepts

* TTL lifecycle
* Key expiration
* Lazy vs active deletion
* Redis eviction policies (intro)
* Why Redis is not a database replacement

### Commands

* `TTL`
* `EXPIRE`
* `PERSIST`
* `KEYS` vs `SCAN`

### Mini Project

**OTP & Rate Limit System**

* OTP with expiry
* Login attempt limiter

---

## **Chapter 4 — Redis as Cache (MOST USED IN BACKEND)**

### Concepts

* Cache-aside pattern
* Read-through vs write-through
* Cache invalidation problem
* When NOT to use Redis cache

### Flow

```
Client → Backend → Redis → DB
```

### Mini Project

**API Cache Layer**

* Cache expensive API response
* TTL based invalidation
* Fallback to DB

---

## **Chapter 5 — Redis + Node.js Integration**

### Concepts

* Redis client libraries
* Connection pooling
* Error handling
* Redis in async systems

### Tools

* `ioredis` / `redis` npm package

### Mini Project

**Session Store**

* Login → store session in Redis
* Validate session on every request

---

## **Chapter 6 — Redis Pub/Sub (Real-time systems)**

### Concepts

* Publisher / Subscriber model
* Message broadcasting
* Redis as message broker

### Commands

* `PUBLISH`
* `SUBSCRIBE`

### Mini Project

**Notification System**

* User sends message
* All subscribers receive updates

---

## **Chapter 7 — Redis Streams (Advanced Messaging)**

### Concepts

* Streams vs Pub/Sub
* Consumer groups
* At-least-once delivery

### Mini Project

**Event Processing Pipeline**

* Order created → processed by workers

---

## **Chapter 8 — Redis Persistence & Durability**

### Concepts

* RDB snapshots
* AOF (Append Only File)
* Trade-offs
* Redis crash recovery

### Docker focus

* Volumes
* Data persistence across restarts

---

## **Chapter 9 — Redis Performance & Internals**

### Concepts

* Single-threaded nature
* Why Redis is fast
* Memory layout
* Big-O of commands

### Tools

* `INFO`
* `MONITOR`
* `SLOWLOG`

---

## **Chapter 10 — Redis in Production (Interview Level)**

### Concepts

* Redis Cluster
* Sharding
* Replication
* High availability
* Redis vs Memcached

### Mini Project

**Production-style Redis Setup**

* Multi-container setup
* Failover simulation

---

## **Chapter 11 — Docker + Redis Advanced**

### Concepts

* Docker volumes properly
* `docker-compose`
* Multi-service setup
* Redis + Backend + DB

### Final Project

**Complete Backend System**

* Node.js API
* Redis cache
* Redis session store
* Dockerized setup
* One-command start

---