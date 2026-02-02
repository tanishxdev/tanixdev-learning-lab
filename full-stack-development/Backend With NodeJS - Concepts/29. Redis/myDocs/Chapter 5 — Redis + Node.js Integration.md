# **CHAPTER 5 — Redis + Node.js**

## 1️⃣ What changes when Redis is used from backend

Till now:

```
You → redis-cli → Redis
```

In real apps:

```
Client → Node.js → Redis
```

Redis is not used by humans.
Redis is used by **backend servers**.

---

## 2️⃣ Why Node apps NEED Redis

Node servers:

* Are stateless
* Restart often
* Run on multiple machines

So where do we store:

* Login sessions?
* OTP?
* Rate limits?
* Cache?

Not in Node memory.

We store them in Redis.

Redis becomes:

> The shared brain of all backend servers.

---

## 3️⃣ Session System (Mental Model)

Without Redis:

```
User logs in
→ Server memory stores session
→ Server restarts
→ User logged out
```

With Redis:

```
User logs in
→ Session stored in Redis
→ Any server can read it
→ Works across restarts
```

---

# **Mini Project — Redis Session Store**

We will build:

```
POST /login
GET /profile
```

Using Redis as session store.

---

# **Project Architecture**

```
redis-session-app/
│
├── server.js
├── redis.js
├── routes/
│   ├── auth.js
│   └── profile.js
│
├── package.json
└── docker-compose.yml
```

---

# **Concept before code**

### Session Flow

1. User logs in
2. Server generates sessionId
3. Stores in Redis
4. Sends sessionId to user
5. User sends it in headers
6. Server validates from Redis

---

# **redis.js**

This is the **shared Redis connection**
This is very important.

```js
import Redis from "ioredis";

/*
  We create one Redis connection
  This is reused everywhere in the app
*/
const redis = new Redis({
  host: "localhost",
  port: 6379
});

redis.on("connect", () => {
  console.log("Redis connected");
});

export default redis;
```

---

# **server.js**

```js
import express from "express";
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

# **routes/auth.js**

```js
import express from "express";
import redis from "../redis.js";
import crypto from "crypto";

const router = express.Router();

/*
  POST /auth/login
*/
router.post("/login", async (req, res) => {
  const { username } = req.body;

  // generate random session id
  const sessionId = crypto.randomBytes(16).toString("hex");

  /*
    Store session in Redis
    Key: session:<sessionId>
    Value: username
    TTL: 1 hour
  */
  await redis.set(`session:${sessionId}`, username);
  await redis.expire(`session:${sessionId}`, 3600);

  res.json({
    message: "Logged in",
    sessionId
  });
});

export default router;
```

---

# **routes/profile.js**

```js
import express from "express";
import redis from "../redis.js";

const router = express.Router();

/*
  Middleware to check session
*/
async function authMiddleware(req, res, next) {
  const sessionId = req.headers["x-session-id"];

  if (!sessionId) {
    return res.status(401).json({ error: "No session" });
  }

  // Check Redis
  const user = await redis.get(`session:${sessionId}`);

  if (!user) {
    return res.status(401).json({ error: "Invalid session" });
  }

  req.user = user;
  next();
}

router.get("/", authMiddleware, (req, res) => {
  res.json({
    username: req.user,
    secretData: "This came from protected route"
  });
});

export default router;
```

---

# **What Redis is doing here**

Redis keys:

```
session:abc123 → "tanish"
TTL = 3600
```

When TTL expires:

* User is logged out automatically.

No logout code needed.

---

# **This is how real companies do**

* Netflix
* Amazon
* Flipkart
* Stripe
* Airbnb

Sessions, rate limits, cache, OTP → Redis.

---

Good you shared Docker screenshots — now I can see exactly why you are confused.
Let me cleanly reset your mental model and give you a **step-by-step production-style workflow** for this Redis + Node project.

Right now your Docker Desktop shows:

* Redis **image** exists
* Redis **container exists but is stopped**
* A **volume exists**
  This is correct — nothing is broken.

Now we will wire **Node + Redis + Docker** correctly.

---

# 🧠 First understand what we are building

We want this:

```
Postman
   |
   v
Node.js (server.js)
   |
   v
Redis (Docker container)
```

Node runs on your laptop
Redis runs in Docker
They talk over port **6379**

---

# 1️⃣ Redis container – start it properly

Your Redis container exists but is stopped.

In Docker Desktop → Containers → click **▶ Start** on `redis`.

Or via terminal:

```bash
docker start redis
```

Verify:

```bash
docker ps
```

You should see:

```
redis   6379->6379
```

Now Redis is running.

---

# 2️⃣ Test Redis is alive

Run:

```bash
docker exec -it redis redis-cli
```

Then:

```
PING
```

You must get:

```
PONG
```

Redis is working.

Exit:

```
exit
```

---

# 3️⃣ Your Node project setup

Go into your project folder:

```bash
cd redis-session-app
npm install
```

Now start backend:

```bash
node server.js
```

You should see:

```
Server running on port 3000
Redis connected
```

If Redis is not connected → container not running.

---

# 4️⃣ How Node connects to Redis

Your `redis.js`:

```js
host: "localhost",
port: 6379
```

Because Docker mapped:

```
6379 (container) → 6379 (your laptop)
```

So Node sees Redis on `localhost:6379`.

---

# 5️⃣ Now test with Postman

### A) Login

**POST**

```
http://localhost:3000/auth/login
```

Body (JSON):

```json
{
  "username": "tanish"
}
```

Response:

```json
{
  "message": "Logged in",
  "sessionId": "ab34..."
}
```

---

### B) Check Redis stored it

Run:

```bash
docker exec -it redis redis-cli
```

```
KEYS *
```

You should see:

```
session:ab34...
```

```
GET session:ab34...
```

Output:

```
tanish
```

```
TTL session:ab34...
```

---

### C) Access protected route

**GET**

```
http://localhost:3000/profile
```

Headers:

```
x-session-id : ab34...
```

Response:

```json
{
  "username": "tanish",
  "secretData": "This came from protected route"
}
```

---

# 6️⃣ Kill Node, Redis still has session

Stop Node:

```
Ctrl + C
```

Start again:

```
node server.js
```

Call `/profile` again → still works.

This proves:

> Redis is the session store, not Node.

---

# 7️⃣ RedisInsight (UI)

RedisInsight is optional.
It just shows what `redis-cli` shows visually.

You will see:

```
session:<id> → tanish
```

TTL counting down.

---

# 8️⃣ Docker mental model (THIS is what confused you)

| Thing     | Meaning             |
| --------- | ------------------- |
| Image     | Redis software      |
| Container | Running Redis       |
| Volume    | Redis data          |
| Node.js   | Runs outside Docker |

Your Node app is NOT inside Docker yet.
That is Chapter 11.

---

# 9️⃣ You are currently at **real backend level**

You have built:

* Redis server
* Node backend
* Session store
* TTL based auto logout

This is what real companies do.

---

Good — this error is **perfect**.
It means your system is actually wired correctly.
Only **one missing piece**.

```
Cannot find package 'ioredis'
```

Your Node app depends on Redis client library, but it is not installed.

---

# 1️⃣ Install Redis client

Inside your project folder:

```bash
cd redis-session-app
npm install ioredis
```

This will add it to:

* `node_modules`
* `package.json`
* `package-lock.json`

---

# 2️⃣ Start Redis container (important)

Before running Node, Redis must be running.

```bash
docker start redis
```

Check:

```bash
docker ps
```

You must see:

```
redis   6379->6379
```

---

# 3️⃣ Now run Node

```bash
node server.js
```

You should see:

```
Redis connected
Server running on port 3000
```

---

# 4️⃣ If Redis is not running, you will see

```
ECONNREFUSED 127.0.0.1:6379
```

That means:
→ Docker Redis not started

---

# 5️⃣ Why this happened (important mental model)

Redis is:

* A server (Docker container)

ioredis is:

* A Node client library

You installed Redis server via Docker
But Node still needs **ioredis to talk to Redis**

They are separate.

---

# 6️⃣ After it runs

Test using Postman exactly as I showed earlier.

---

Perfect.
You have reached the **real backend milestone**.

This line:

```
Connected to Redis
Server running on port 3000
```

means:

> Node.js ↔ Redis (Docker) is now working correctly.

Now you are officially running a **Redis-powered backend**.

---

# Now do the full flow (this proves everything)

## 1️⃣ Login (store session in Redis)

Open **Postman**

**POST**

```
http://localhost:3000/auth/login
```

Body (JSON):

```json
{
  "username": "tanish"
}
```

You will get:

```json
{
  "message": "Logged in",
  "sessionId": "ab12cd..."
}
```

Copy that `sessionId`.

---

## 2️⃣ Verify Redis stored it

Run:

```bash
docker exec -it redis redis-cli
```

```
KEYS *
```

You will see:

```
session:ab12cd...
```

```
GET session:ab12cd...
```

Output:

```
tanish
```

```
TTL session:ab12cd...
```

You will see countdown.

This is **Redis session store**.

---

## 3️⃣ Call protected API

**GET**

```
http://localhost:3000/profile
```

Headers:

```
x-session-id: ab12cd...
```

Response:

```json
{
  "username": "tanish",
  "secretData": "This came from protected route"
}
```

This proves:

> Redis is authenticating your user.

---

## 4️⃣ Test TTL logout

Wait until TTL reaches 0
Then call `/profile` again.

You will get:

```
Invalid session
```

Redis auto-logged you out.

No DB. No code. Just TTL.

---

# What you just built

You built what:

* Netflix
* Amazon
* Flipkart
* Stripe

use internally:

**Redis-based session system**

This is a **real backend architecture**.

---
This is excellent.
You actually built everything correctly — you just made **one tiny Redis CLI typo** that confused you.

This line explains everything:

```
(error) ERR unknown command 'KEY'
```

Redis command is **`KEYS`**, not `KEY`.

---

# Where should `KEYS *` be run?

Only here:

```
docker exec -it redis redis-cli
127.0.0.1:6379>
```

That is the **Redis shell**.
This is the only place Redis commands work.

You ran:

```
KEY *
```

Redis thought:

> "KEY is a command I don't know"

Correct command:

```
KEYS *
```

---

# Run this now

In Redis CLI:

```
KEYS *
```

You will see:

```
session:25d6a54aab6587b58e73cb96ecb6ed0e
```

Then:

```
GET session:25d6a54aab6587b58e73cb96ecb6ed0e
```

Output:

```
tanishkumar
```

Then:

```
TTL session:25d6a54aab6587b58e73cb96ecb6ed0e
```

You will see countdown.

---

# What you just saw in RedisInsight

RedisInsight already proved it:

```
session:<id> → tanishkumar
TTL: 3595
```

That is exactly what Redis CLI shows too.

RedisInsight is just a GUI on top of Redis CLI.

---

# Your system is now complete

You now have:

Postman → Node → Redis(Docker) → TTL → Auto logout

This is **real backend engineering**.

---

If you want, we can now add:

* Logout
* Multiple sessions
* Session refresh
* Redis cache
* Rate limiting

Or we go to **Chapter 6 — Pub/Sub (Real-time)**

Say **next**.
