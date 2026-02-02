Good. We now move to **Chapter 3 — TTL, Expiry & Eviction**
This chapter is **one of the most important things in Redis**.
This is what separates *“I know Redis”* from *“I can build backend systems with Redis”*.

We will do this in three parts:

1. **Core concepts (with mental model)**
2. **Commands (with live reasoning)**
3. **Mini Project: OTP + Rate Limiter**

No theory without system thinking.

---

# **CHAPTER 3 — TTL, Expiry & Eviction**

## 1️⃣ What TTL actually means (Mental Model)

Redis is **RAM**, not disk.

So Redis constantly asks:

> “Which keys should I throw away so I don’t run out of memory?”

TTL is how **you** tell Redis:

> “This data is temporary. Delete it after X seconds.”

Think like this:

| Data type      | Should live forever? |
| -------------- | -------------------- |
| User profile   | Yes                  |
| OTP            | No                   |
| Session token  | No                   |
| API cache      | No                   |
| Login attempts | No                   |

TTL is Redis’s **garbage collector**.

---

## 2️⃣ Key Expiration lifecycle

When you do:

```bash
SET otp:1234 998877
EXPIRE otp:1234 60
```

Redis stores internally:

```
otp:1234 → "998877"
expiry_time → now + 60s
```

Now Redis does **NOT delete it immediately after 60s**.

Two ways deletion happens:

---

## 3️⃣ Lazy deletion vs Active deletion

### 🧠 Lazy Deletion

Redis deletes a key **only when someone tries to read it**

If you do:

```bash
GET otp:1234
```

Redis checks:

> Is this key expired?

If yes → delete → return null

---

### 🧠 Active Deletion

Redis also runs a background job:

> “Let me scan random keys and delete expired ones”

So expired keys don’t sit forever.

This is why Redis is fast:
It does **not scan all keys every second**.

---

## 4️⃣ TTL commands

### Set expiry

```bash
EXPIRE login:otp 60
```

### Check TTL

```bash
TTL login:otp
```

Returns:

* `60` → seconds left
* `-1` → no expiry
* `-2` → key does not exist

---

### Remove expiry (PERSIST)

```bash
PERSIST login:otp
```

Now key becomes permanent.

---

## 5️⃣ Why `KEYS *` is dangerous

```bash
KEYS *
```

This scans **ALL keys**.
If Redis has 5 million keys → server freezes.

Instead use:

```bash
SCAN 0
```

Redis scans slowly in chunks.

Production rule:

> Never use `KEYS` in live servers.

---

## 6️⃣ Redis Eviction (When memory is full)

What if Redis memory is full?

Redis must decide:

> “Which keys should I delete to make space?”

That is **Eviction Policy**

Some important ones:

| Policy         | Meaning                                 |
| -------------- | --------------------------------------- |
| noeviction     | Reject new writes                       |
| allkeys-lru    | Remove least recently used key          |
| volatile-lru   | Remove least recently used key with TTL |
| allkeys-random | Random deletion                         |
| volatile-ttl   | Remove keys expiring soon               |

Default in most setups:

```
allkeys-lru
```

Meaning:

> Least recently used key gets removed first.

This is why Redis is good for cache.

---

## 7️⃣ Why Redis is NOT a database

Redis:

* Data in RAM
* Evicted automatically
* Can disappear if memory full
* Can be lost if server crashes (unless AOF/RDB)

Databases:

* Disk
* Permanent
* No eviction
* ACID

Redis is:

> A **temporary, fast data layer**

---

# **Mini Project — OTP + Rate Limiter**

We will build **two systems in Redis**.

---

## Part 1: OTP System

### Goal

For phone number `99999`, store OTP that expires in 60 seconds.

### Flow

```
User requests OTP
→ Backend generates OTP
→ Store in Redis with TTL
→ User submits OTP
→ Redis validates
→ If match → login success
```

---

### Commands

```bash
SET otp:99999 345678
EXPIRE otp:99999 60
```

Check:

```bash
GET otp:99999
TTL otp:99999
```

Verify:

```bash
GET otp:99999 == userOTP
```

After 60 sec:

```bash
GET otp:99999 → null
```

OTP auto deleted.

---

## Part 2: Login Rate Limiter

We want:

> Max 5 attempts per 1 minute

### Key format

```
login_attempts:99999
```

### Flow

Every login attempt:

1. Increment counter
2. If key is new → set TTL = 60s
3. If count > 5 → block

---

### Commands

```bash
INCR login_attempts:99999
```

If first time:

```bash
EXPIRE login_attempts:99999 60
```

Check:

```bash
GET login_attempts:99999
```

If value > 5:

> Reject login

After 60 seconds → Redis deletes it → user can try again.

---

## 8️⃣ Why Redis is PERFECT for this

Because:

* TTL is automatic
* No cron job needed
* No cleanup code
* No database writes
* Very fast

This is how **real companies** do:

* OTP
* Password reset
* Rate limiting
* Email verification
* API throttling

---

## What you should do now (hands-on)

Run these in redis-cli:

```
SET otp:test 1234
EXPIRE otp:test 30
TTL otp:test
(wait 30s)
GET otp:test
```

Then:

```
INCR rate:test
EXPIRE rate:test 60
INCR rate:test
INCR rate:test
GET rate:test
```

Watch TTL.

---

When you finish this, we go to
**Chapter 4 — Redis as Cache (Real Backend Use)**
That is where Redis becomes **money skill**.

Tell me when you’ve tried the commands.
