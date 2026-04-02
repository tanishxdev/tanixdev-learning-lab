# Backend Architecture

# Topic 15 — Caching Architecture (Deep Dive)

Caching Architecture is used to **improve performance and reduce database load** in backend systems.

High-scale systems like **Netflix, Amazon, and Instagram heavily depend on caching**.

---

# 1. What is Caching?

## Simple Definition

Caching is the process of **temporarily storing frequently used data so that it can be retrieved faster without querying the database repeatedly.**

---

## Basic Idea

Instead of:

```text
Client → Database → Response
```

We use cache:

```text
Client → Cache → Response
           ↓
        Database
```

Cache stores **frequently requested data**.

---

# 2. Why Caching Exists

Database queries are expensive.

Example problem:

```text
1M users request the same API
```

Without caching:

```text
1M database queries
```

With caching:

```text
1 database query
999,999 cache responses
```

Huge performance improvement.

---

# 3. Mental Model

Think of cache like **a restaurant kitchen shelf**.

```text
Chef prepares dish
↓
Dish placed on shelf
↓
Waiter serves from shelf
```

Mapping to backend:

```text
Database → Cache → Client
```

If item exists in cache → return immediately.

---

# 4. Where Caching Fits in Architecture

Typical backend architecture with cache:

```text
Client
 ↓
Controller
 ↓
Service
 ↓
Cache Layer
 ↓
Database
```

Cache is checked **before querying database**.

---

# 5. Cache Workflow

Example API request:

```text
GET /products
```

Flow:

```text
1 Request arrives
2 Check cache
3 If cache hit → return cached data
4 If cache miss → query database
5 Store result in cache
6 Return response
```

---

# 6. Cache Hit vs Cache Miss

Two possible scenarios:

### Cache Hit

```text
Data exists in cache
```

Result:

```text
Fast response
No database query
```

---

### Cache Miss

```text
Data not in cache
```

Result:

```text
Database query executed
Data stored in cache
```

---

# 7. Types of Caching

Backend systems use multiple caching strategies.

---

# 7.1 In-Memory Cache

Cache stored inside application memory.

Example libraries:

```text
node-cache
lru-cache
```

Example:

```javascript
const NodeCache = require("node-cache");

const cache = new NodeCache();

cache.set("users", data);
```

Problem:

```text
Cache lost when server restarts
```

---

# 7.2 Distributed Cache

Cache stored in external service.

Most popular tool:

```text
Redis
```

Advantages:

```text
Shared across servers
Persistent
Fast
```

---

# 8. Redis Example

Install Redis client:

```bash
npm install redis
```

Example code:

```javascript
const redis = require("redis");

const client = redis.createClient();

await client.connect();

await client.set("users", JSON.stringify(data));

const cached = await client.get("users");
```

Redis stores cached data.

---

# 9. Express Caching Example

Example API:

```javascript
app.get("/users", async (req, res) => {
  const cached = await redisClient.get("users");

  if (cached) {
    return res.json(JSON.parse(cached));
  }

  const users = await db.getUsers();

  await redisClient.set("users", JSON.stringify(users));

  res.json(users);
});
```

Flow:

```text
Request
 ↓
Check Redis cache
 ↓
If cache miss → query DB
 ↓
Store result in Redis
```

---

# 10. Cache Expiration (TTL)

Cache must expire.

Otherwise stale data remains.

Example:

```javascript
await redisClient.set("users", data, {
  EX: 60,
});
```

This sets:

```text
TTL = 60 seconds
```

---

# 11. Cache Invalidation

Cache must be cleared when data changes.

Example:

```text
POST /users
```

New user created → cache invalid.

Solution:

```javascript
await redisClient.del("users");
```

Now next request refreshes cache.

---

# 12. Caching Strategies

Professional systems use different caching patterns.

---

## Cache Aside (Lazy Loading)

Most common.

Flow:

```text
Check cache
 ↓
Cache miss → fetch DB
 ↓
Store in cache
```

---

## Write Through

Data written to cache and database simultaneously.

```text
Client
 ↓
Cache
 ↓
Database
```

---

## Write Back

Data written to cache first.

Database updated later.

Used in high performance systems.

---

# 13. What Should Be Cached?

Ideal candidates:

```text
Frequently accessed data
Read-heavy APIs
Public data
Configuration data
```

Examples:

```text
Product catalog
User profile
Homepage data
```

---

# 14. What Should NOT Be Cached?

Avoid caching:

```text
Highly dynamic data
Sensitive data
Frequently updated data
```

Example:

```text
Payment transactions
Live stock prices
```

---

# 15. Real World Example

Example: **E-commerce website**

Homepage API:

```text
GET /products
```

Millions of requests per hour.

Without caching:

```text
Database overloaded
```

With caching:

```text
Redis serves most requests
Database load reduced
```

---

# 16. Multi-Level Caching

Large systems use multiple cache layers.

Example:

```text
Client
 ↓
CDN cache
 ↓
Application cache
 ↓
Redis cache
 ↓
Database
```

Examples:

```text
Cloudflare CDN
Redis
Browser cache
```

---

# 17. Advantages of Caching

```text
Faster response time
Reduced database load
Better scalability
Improved user experience
```

---

# 18. Disadvantages of Caching

```text
Cache invalidation complexity
Risk of stale data
Extra infrastructure
```

---

# 19. Interview Questions

### Basic

What is caching?

---

### Intermediate

What is cache hit and cache miss?

---

### Advanced

Explain cache aside strategy.

Why is Redis used for caching?

---

# 20. Interview Answer Template

What is caching?

Answer:

Caching is the technique of storing frequently accessed data in a temporary storage layer so that future requests for that data can be served faster without querying the database repeatedly.

---

# Final Mental Model

Always visualize:

```text
Client
 ↓
Controller
 ↓
Cache
 ↓
Database
```

Cache acts as **a fast memory layer in front of the database**.
