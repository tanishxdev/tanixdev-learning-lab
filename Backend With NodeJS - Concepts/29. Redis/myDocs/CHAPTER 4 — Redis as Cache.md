Perfect. We move to **Chapter 4 — Redis as Cache**.
This is what you will use in **real backend jobs**.

Everything you learned in TTL now gets used here.

---

# **CHAPTER 4 — Redis as Cache**

## 1️⃣ What caching really means

Imagine this system:

```
Client → Backend → Database
```

Database is:

* Slow
* Expensive
* Limited connections

So we add Redis:

```
Client → Backend → Redis → Database
```

Redis becomes a **shield** in front of DB.

Redis answers repeated requests so DB doesn’t get hit again.

---

## 2️⃣ Cache-Aside Pattern (MOST IMPORTANT)

This is how almost all companies use Redis.

### Flow

```
User requests data
→ Backend checks Redis
→ If found → return
→ If not → query DB
→ Store in Redis
→ Return to user
```

This is called **Cache Aside** (lazy loading).

Redis does NOT auto-sync with DB.
Backend controls it.

---

## 3️⃣ Why TTL is mandatory for cache

Cached data is:

* Not permanent
* Can be wrong
* Can become stale

So every cached key must have TTL.

Example:

```
user:42 → cached for 60s
```

After 60s Redis deletes → backend fetches fresh data.

No TTL = memory leak.

---

## 4️⃣ Cache invalidation problem

User updates profile.

DB has new data
Redis has old data

Now what?

Two choices:

1. Delete Redis key
2. Let TTL expire

Most systems:

```
On update → DEL cache
```

This is called **write-through invalidation**.

---

# **Mini Project — API Cache Layer**

We simulate:

```
GET /user/42
```

Which fetches user from DB.

---

## Step 1: Without cache

Every request hits DB:

```
Client → Backend → DB
```

Slow.

---

## Step 2: Add Redis cache

Key:

```
user:42
```

TTL: 60s

---

## Step 3: Cache flow

### 1) Request comes

Backend runs:

```
GET user:42
```

If exists → return

If not → go to DB

---

### 2) Fetch from DB

DB returns:

```
{ id: 42, name: "Tanish", age: 21 }
```

Backend stores:

```
SET user:42 "{...}"
EXPIRE user:42 60
```

Return to client.

---

### 3) Next request

Redis has it
DB is skipped
Response is instant.

---

## 5️⃣ Why Redis is better than in-memory cache

Node in-memory cache:

* Dies on restart
* One server only

Redis:

* Shared across all servers
* Persistent (optional)
* Handles eviction
* Distributed

---

## 6️⃣ When NOT to use Redis cache

Do NOT cache:

* OTP
* Payment status
* Bank balance
* Real-time counters
* Anything critical

Cache only:

* Read-heavy
* Safe-to-be-stale data

---

## What you should try now

In redis-cli:

```
SET user:1 '{"name":"A","age":20}'
EXPIRE user:1 20
GET user:1
TTL user:1
(wait)
GET user:1
```

This is cache.

---

Next we will connect Redis with **Node.js**
→ Sessions
→ Real API caching
→ Production pattern

Tell me **next** when ready.
