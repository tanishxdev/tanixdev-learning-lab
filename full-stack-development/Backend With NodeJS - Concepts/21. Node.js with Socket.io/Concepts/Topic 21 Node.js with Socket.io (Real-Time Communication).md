# Topic 21 Node.js with Socket.io (Real-Time Communication)

---

### **Concept**

**What is Socket.io?**

* **Socket.io** is a **real-time, bidirectional communication library** that works on top of WebSockets.
* It enables instant communication between **client** and **server** — no page reload required.
* Common use cases:

  * Real-time chats (WhatsApp-like)
  * Live notifications
  * Online games
  * Collaborative tools (Google Docs-style)

---

### **Why Socket.io?**

| Feature           | Explanation                                        |
| ----------------- | -------------------------------------------------- |
| **Real-time**     | Instantly send/receive data without refreshing     |
| **Bidirectional** | Both client and server can initiate communication  |
| **Event-based**   | Custom events can be defined and listened to       |
| **Fallbacks**     | Works even if WebSocket not supported              |
| **Scalable**      | Works well for multi-user systems and broadcasting |

---

### **How It Works**

1. The **server** listens for connections using Socket.io.
2. The **client** (browser or another Node app) connects via a WebSocket channel.
3. Both can emit and listen to custom events (like `"chatMessage"`, `"userJoined"`).
4. The connection stays open until explicitly closed.

---

### **Folder Setup**

```
socket-demo/
│
├── server.js
└── public/
    ├── index.html
    └── client.js
```

---

### **Step 1: Install Dependencies**

```bash
npm init -y
npm install express socket.io
```

---

### **Step 2: Create the Server**

**File:** `server.js`

```js
// ===========================
// Basic Socket.io Chat Server
// ===========================

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);  // Attach socket.io to server

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Handle client connection
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Listen for chat messages
  socket.on('chatMessage', (msg) => {
    console.log('Message:', msg);
    io.emit('chatMessage', msg); // broadcast to all connected clients
  });

  // Disconnect event
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

---

### **Step 3: Create Frontend Files**

**File:** `public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Socket.io Chat</title>
  <style>
    body { font-family: Arial; background: #f2f2f2; padding: 20px; }
    #messages { list-style: none; padding: 0; margin-bottom: 20px; }
    #messages li { padding: 8px; background: #fff; margin-bottom: 5px; border-radius: 5px; }
    input { padding: 10px; width: 80%; }
    button { padding: 10px; }
  </style>
</head>
<body>
  <h2>Real-Time Chat (Socket.io)</h2>
  <ul id="messages"></ul>

  <form id="form">
    <input id="input" autocomplete="off" placeholder="Type message..." />
    <button>Send</button>
  </form>

  <script src="/socket.io/socket.io.js"></script>
  <script src="client.js"></script>
</body>
</html>
```

---

**File:** `public/client.js`

```js
// ===========================
// Client-side Socket Code
// ===========================

const socket = io();

// DOM elements
const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

// Send message to server
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chatMessage', input.value);
    input.value = '';
  }
});

// Listen for messages from server
socket.on('chatMessage', (msg) => {
  const li = document.createElement('li');
  li.textContent = msg;
  messages.appendChild(li);
});
```

---

### **Step 4: Run the App**

```bash
node server.js
```

Open multiple tabs and visit:
`http://localhost:3000`

**Now type messages — all connected clients see messages instantly.**

---

### **How It Works Internally**

1. `socket.emit()` — sends event to server or clients.
2. `socket.on()` — listens for specific events.
3. `io.emit()` — sends event to **all** clients.
4. `socket.broadcast.emit()` — sends event to all **except sender**.

---

### **Example: Notify When User Joins or Leaves**

**Update server.js**

```js
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  socket.broadcast.emit('message', 'A new user has joined the chat');

  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  });
});
```

**Update client.js**

```js
socket.on('message', (msg) => {
  const li = document.createElement('li');
  li.textContent = msg;
  li.style.color = 'gray';
  messages.appendChild(li);
});
```

---

### **Advanced Example: Private Messaging**

You can send messages to specific users using `socket.to(<socket_id>).emit()`.

```js
io.on('connection', (socket) => {
  socket.on('privateMessage', ({ receiverId, message }) => {
    socket.to(receiverId).emit('privateMessage', { from: socket.id, message });
  });
});
```

---

### **Mini Project: Real-Time Chat App**

**Goal:** Build a basic chat app that supports user joining, leaving, and broadcasting messages.

**Features:**

* Real-time message updates
* Broadcast notifications
* Works in multiple browser tabs

**Folder Structure:**

```
chat-app/
│
├── server.js
└── public/
    ├── index.html
    └── client.js
```

**Run:**

```bash
node server.js
```

**Test:**
Open two tabs → type messages → see instant updates.

---

### **Dependencies**

| Package       | Purpose                          |
| ------------- | -------------------------------- |
| **express**   | Web server                       |
| **socket.io** | Real-time connection             |
| **http**      | Create HTTP server for socket.io |

---

### **Notes**

* Socket.io automatically handles **reconnection** when network fails.
* It supports **rooms and namespaces** for organizing users.
* Default transport: **WebSockets**, falls back to HTTP polling if needed.
* For production scaling, use **Redis adapter** for multiple servers.

---

### **Quick Summary Table**

| Method                    | Description                         |
| ------------------------- | ----------------------------------- |
| `io.emit()`               | Send event to all clients           |
| `socket.emit()`           | Send event to one client            |
| `socket.broadcast.emit()` | Send event to all except sender     |
| `socket.on()`             | Listen for an event                 |
| `socket.id`               | Unique ID for each connected client |

---
