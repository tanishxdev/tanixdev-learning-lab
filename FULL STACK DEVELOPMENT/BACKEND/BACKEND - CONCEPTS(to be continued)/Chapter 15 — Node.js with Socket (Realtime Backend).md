# Chapter 15 — Node.js with Socket (Realtime Backend)

---

# 1. Problem (Why this chapter exists)

Till now:

- Your backend is **request → response**

```text id="g7d2s1"
Client → Request → Server → Response
```

### ❌ Problem

Real apps need **instant updates**

```text id="k3x9p2"
- Chat apps (WhatsApp)
- Live notifications
- Multiplayer games
- Live dashboards
```

HTTP cannot do this efficiently.

---

# 2. Concept (Core Idea)

---

## 🧠 Definition — WebSocket

> A protocol that allows **bi-directional communication (client ↔ server)**

---

## 🧠 Difference

| Feature    | HTTP        | WebSocket  |
| ---------- | ----------- | ---------- |
| Connection | Short-lived | Persistent |
| Direction  | One-way     | Two-way    |
| Use case   | APIs        | Realtime   |

---

## 🧠 Definition — Socket.IO

> A library that simplifies WebSocket communication in Node.js

---

# 3. Solution (How we solve realtime problem)

We use:

```text id="y2q5o8"
Socket.IO
```

---

# 4. Installing Socket.IO

---

## ▶️ Command

```bash id="k4n1o9"
npm install socket.io
```

---

# 5. Basic Setup

---

## 📄 `server.js`

```javascript id="p7f3o2"
// ================================
// Chapter 15 - Socket Setup
// ================================

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

// Create HTTP server
const server = http.createServer(app);

// Attach socket.io
const io = new Server(server);

// Listen for connections
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Listen event from client
  socket.on("message", (data) => {
    console.log("Message received:", data);
  });

  // Disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start server
server.listen(3000, () => {
  console.log("Server running...");
});
```

---

# 6. Client Side Example

---

## 📄 `index.html`

```html id="c2x8y4"
<!DOCTYPE html>
<html>
  <body>
    <input id="msg" placeholder="Enter message" />
    <button onclick="sendMessage()">Send</button>

    <script src="https://cdn.socket.io/4.0.0/socket.io.min.js"></script>

    <script>
      const socket = io("http://localhost:3000");

      function sendMessage() {
        const msg = document.getElementById("msg").value;

        socket.emit("message", msg);
      }
    </script>
  </body>
</html>
```

---

# 7. Broadcasting Messages (IMPORTANT)

---

## 🧠 Problem

Send message to ALL users

---

## 📄 Code

```javascript id="6p2m8w"
socket.on("message", (msg) => {
  // Send to all clients
  io.emit("message", msg);
});
```

---

# 8. Private Messaging

---

## 🧠 Send to specific user

```javascript id="r3z8q1"
socket.to(socketId).emit("message", "Hello");
```

---

# 9. Rooms (VERY IMPORTANT)

---

# 🧠 Problem

Group users (chat rooms)

---

## 📄 Code

```javascript id="z9h1f6"
// Join room
socket.join("room1");

// Send message to room
io.to("room1").emit("message", "Hello room");
```

---

# 10. Real Chat App Flow

---

## 🧠 Flow

```text id="d1s9k3"
User joins → socket connect
↓
Send message → server receives
↓
Server broadcasts
↓
All users receive instantly
```

---

# 11. Mini Practice (DO THIS)

---

## Tasks:

- Create chat system
- Broadcast messages
- Add rooms

---

# 12. Common Mistakes

---

### ❌ Using HTTP for realtime

---

### ❌ Not handling disconnect

---

### ❌ Not using rooms properly

---

# 13. Mental Model (VERY IMPORTANT)

```text id="w5p8z2"
Socket = persistent connection
```

---

## 🧠 Backend Thinking

```text id="h6r4m1"
Client ↔ Server (continuous connection)
```

---

# 14. Final File (Clean Setup)

---

## 📄 `server.js`

```javascript id="j8k4m9"
// ================================
// Chapter 15 - Realtime Server
// ================================

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = new Server(server);

// Connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Message event
  socket.on("chatMessage", (msg) => {
    console.log("Message:", msg);

    // Broadcast
    io.emit("chatMessage", msg);
  });

  // Disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server running...");
});
```

---

# 15. Interview Questions

1. What is WebSocket?
2. Difference between HTTP and WebSocket?
3. What is Socket.IO?
4. What is real-time communication?
5. What is emit and on?
6. What are rooms?
7. How broadcasting works?
8. What is persistent connection?
9. How chat apps work?
10. Use cases of WebSockets?

---

# ✅ Summary (Clear Thinking)

- HTTP → request-response
- Socket → real-time connection

You now can:

- Build chat apps
- Build live features
- Handle realtime systems

---
