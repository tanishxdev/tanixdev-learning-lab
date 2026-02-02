# **Redis Session Store — Node.js Backend**

This project demonstrates how to use **Redis (via Docker)** as a **session store** for a Node.js backend.

It mimics how real production systems manage:

- Login sessions
- Auto-logout
- Server-side authentication

---

## **What this project does**

It builds a backend with two APIs:

| API                | Purpose                                         |
| ------------------ | ----------------------------------------------- |
| `POST /auth/login` | Logs in a user and creates a Redis session      |
| `GET /profile`     | Returns protected user data if session is valid |

Sessions are stored in **Redis with TTL**, so users are automatically logged out when the session expires.

---

## **Why Redis is used here**

Node.js servers are **stateless**.

If a server restarts or multiple servers exist, in-memory sessions break.

Redis solves this by acting as a **shared, fast, central session store**.

Redis gives:

- Very fast reads
- TTL-based expiration
- Automatic cleanup
- Works across multiple servers

This is how real companies handle sessions.

---

## **How the system works**

```
Postman
   |
   v
Node.js Server
   |
   v
Redis (Docker Container)
```

### Login Flow

1. User calls `/auth/login`
2. Server creates a random `sessionId`
3. Stores it in Redis:

```
session:<sessionId> → username
TTL = 3600 seconds
```

4. Returns `sessionId` to the client

### Protected API Flow

1. Client sends `sessionId` in header
2. Server checks Redis
3. If found → user is authenticated
4. If expired → user is logged out

Redis handles expiration automatically.

---

## **Project Folder Structure**

```
redis-session-app/
│
├── routes/
│   ├── auth.js        # Login route
│   └── profile.js     # Protected route
│
├── redis.js           # Redis connection
├── server.js          # Express app
├── package.json
├── docker-compose.yml
├── Dockerfile
└── .env
```

---

## **Prerequisites**

You need:

- Node.js (v18+)
- Docker Desktop
- Redis Docker image
- Postman or any API client

---

## **How to run the project**

### 1️⃣ Start Redis using Docker

```
docker start redis
```

Check:

```
docker ps
```

You should see:

```
redis   6379->6379
```

---

### 2️⃣ Install Node dependencies

```
cd redis-session-app
npm install
```

---

### 3️⃣ Start Node server

```
node server.js
```

You should see:

```
Server running on port 3000
Connected to Redis
```

---

## **Testing using Postman**

### Login

**POST**

```
http://localhost:3000/auth/login
```

Body:

```json
{
  "username": "tanishkumar"
}
```

Response:

```json
{
  "message": "Logged in",
  "sessionId": "abc123..."
}
```

---

### Check session in Redis

```
docker exec -it redis redis-cli
KEYS *
GET session:abc123
TTL session:abc123
```

---

### Call protected route

**GET**

```
http://localhost:3000/profile
```

Header:

```
x-session-id: abc123
```

Response:

```json
{
  "username": "tanishkumar",
  "secretData": "This came from protected route"
}
```

---

## **What happens when TTL expires**

When Redis TTL reaches 0:

- The key is deleted
- User is logged out
- `/profile` returns `Invalid session`

No cleanup code is required.

---

## **What this project teaches**

- How Redis is used in real backends
- How sessions are stored
- How TTL handles auto-logout
- How Docker runs Redis
- How Node connects to Redis

This architecture is used in production systems.

---