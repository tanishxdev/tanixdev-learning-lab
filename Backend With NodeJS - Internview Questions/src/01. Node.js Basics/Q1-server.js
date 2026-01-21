/*

# 🧠 THINK LOUDLY
## 1. First: What problem am I solving?

**Problem statement (in your head):**

> “I want my program to listen on a port and respond to HTTP requests.”

So immediately, you should think:

* I need **networking**
* I need **HTTP protocol**
* I need something that can **listen continuously**

That leads to one decision.

---

## 2. Which Node module should I use?

**Thinking logic:**

* HTTP is a standard protocol
* Node provides core modules
* No need for Express yet

So the correct choice is:

```js
const http = require("http");
```

**Mental model:**

> “I’m importing Node’s built-in HTTP capabilities.”

No installation.
No npm.
This is **core Node**.

---

## 3. How does an HTTP server work (conceptually)?

Before writing code, think like this:

```
Client (Browser / Postman)
        ↓
     HTTP Request
        ↓
     Server
        ↓
     HTTP Response
```

So a server must:

1. Wait for requests
2. Receive request data
3. Send a response
4. Keep listening for the next request

---

## 4. How does Node let me create a server?

Node gives a function:

```js
http.createServer()
```

**Thinking:**

> “This function should create something that stays alive and listens.”

Now the important part:

```js
http.createServer((req, res) => { ... })
```

### Why a callback?

Because:

* Requests arrive **asynchronously**
* Node will call your function **whenever a request comes**

So you think:

> “I don’t call this function.
> Node will call it for me.”

---

## 5. Understanding `req` and `res` (very important)

When you write:

```js
(req, res) => { }
```

You should think:

* `req` → incoming data from client
* `res` → tool to send data back

### Mental mapping:

```
req  = what client wants
res  = what I send back
```

At this stage, you may not need `req`, but it’s always there.

---

## 6. How do I send a response?

HTTP responses have **two parts**:

1. Headers (metadata)
2. Body (actual content)

So your brain should say:

> “First I set headers, then I send body.”

That’s why the code is written like this:

```js
res.writeHead(200, { "Content-Type": "text/plain" });
```

### Why 200?

* 200 means **OK**
* Request handled successfully

### Why `Content-Type`?

Because HTTP clients need to know:

* Is this text?
* JSON?
* HTML?

Here we choose:

```txt
text/plain
```

---

## 7. Ending the response (CRITICAL)

Now you send the actual data:

```js
res.end("Hello from Node.js server");
```

**Thinking logic:**

> “Once I call `res.end()`, the response is finished.”

Important:

* If you forget `res.end()`, the request **hangs**
* Browser keeps waiting

So mentally:

```
writeHead → prepare response
end       → send response + close
```

---

## 8. Why doesn’t the server stop?

Up to now, we’ve only **created** a server.

But it’s not running yet.

So next thought:

> “I need to tell it which port to listen on.”

---

## 9. Listening on a port

```js
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

### Thinking:

* Port = entry point for network traffic
* 3000 is a common dev port
* `listen()` starts the event loop for incoming requests

The callback here means:

> “Run this once the server is successfully started.”

---

## 10. Full mental execution flow (VERY IMPORTANT)

When you run:

```bash
node server.js
```

Think like this:

```
1. Node starts program
2. http module loaded
3. Server object created
4. Server starts listening on port 3000
5. Program does NOT exit
6. Event loop keeps running
```

When a request comes:

```
Browser → http://localhost:3000
   ↓
Node receives request
   ↓
Callback (req, res) runs
   ↓
Response sent
   ↓
Server waits for next request
```

---

## 11. Interview thinking narration (say this)

If interviewer asks:
**“How does this code work?”**

You should say:

> “Node creates an HTTP server using the core `http` module.
> The server listens on a port and uses an event-driven callback to handle incoming requests.
> For each request, Node provides request and response objects, and we send back a response using non-blocking I/O.”

---

## 12. Why this scales (important thinking)

Your handler:

```js
(req, res) => {
  res.end("Hello...");
}
```

* Very fast
* No blocking
* No CPU-heavy work

So:

* Thousands of requests can be queued
* Event loop handles them efficiently

---

## 13. Final mental checklist while writing such code

When writing an HTTP server, always ask yourself:

1. Which protocol? → HTTP
2. Which module? → `http`
3. How requests arrive? → async callbacks
4. How to respond? → headers + body
5. When is response finished? → `res.end`
6. What keeps server alive? → `listen` + event loop

---

## One-line mindset summary (lock this)

> “I’m not writing a loop that waits for requests — I’m registering callbacks and letting Node’s event loop handle everything.”
 */

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js HTTP server");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
