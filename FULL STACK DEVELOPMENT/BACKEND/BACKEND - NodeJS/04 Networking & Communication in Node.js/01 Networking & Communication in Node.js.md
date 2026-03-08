# Networking & Communication in Node.js

(Real engineering mindset — clear and structured)

When building backend systems, everything is communication.

Client ↔ Server
Server ↔ Database
Server ↔ External APIs
Service ↔ Service

Node.js provides built-in modules to handle this.

We will cover:

- HTTP
- HTTP2
- DNS
- UDP (Datagram)
- TLS / SSL
- Crypto

---

# 1. HTTP Module

## Problem (Why)

Browser needs data.

Example:

- User opens website.
- Browser sends request.
- Server sends response.

We need a way to:

- Listen for requests
- Send responses
- Handle headers
- Handle status codes

HTTP module solves this.

---

## What is HTTP Module?

Built-in Node module to create HTTP servers and clients.

It allows:

- Create web server
- Handle requests
- Send JSON / HTML responses

---

## Mental Model

Think:

- Server listens on port.
- When request comes → callback runs.
- You inspect request.
- You send response.

---

## Basic HTTP Server

### Code (Commented)

```js
// Import HTTP module
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  // Set response status code
  res.statusCode = 200;

  // Set response header
  res.setHeader("Content-Type", "text/plain");

  // Send response
  res.end("Hello from Node Server");
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
```

### Output

Open browser:

[http://localhost:3000](http://localhost:3000)

You see:

```
Hello from Node Server
```

---

## Real Engineering Use

- REST APIs
- Microservices
- Backend servers

---

## Interview Questions

1. How does Node HTTP server work?
2. What is req and res?
3. Difference between res.write() and res.end()?

---

# 2. HTTP2 Module

## Problem (Why HTTP2?)

HTTP1 problems:

- One request per connection
- Slow loading
- Head-of-line blocking

HTTP2 solves:

- Multiplexing
- Header compression
- Faster performance

---

## What is HTTP2?

Improved version of HTTP protocol.

Node provides `http2` module.

---

## Basic Example

```js
const http2 = require("http2");

// Create HTTP2 server
const server = http2.createServer();

server.on("stream", (stream, headers) => {
  stream.respond({ ":status": 200 });
  stream.end("Hello HTTP2");
});

server.listen(3000);
```

---

## When to Use

- High performance APIs
- Large web applications

---

# 3. DNS Module

## Problem (Why DNS?)

When you type:

google.com

System must convert:

- Domain → IP Address

DNS module allows:

- Resolve domain
- Lookup IP
- Reverse lookup

---

## Example

```js
const dns = require("dns");

dns.lookup("google.com", (err, address) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("IP Address:", address);
});
```

---

## Use Cases

- Service discovery
- Debugging
- Infrastructure tools

---

# 4. UDP (Datagram)

## Problem

TCP:

- Reliable
- Slower
- Connection-oriented

UDP:

- Fast
- No connection
- Used for real-time data

Used in:

- Gaming
- Streaming
- IoT

---

## Node Module: dgram

```js
const dgram = require("dgram");

// Create UDP socket
const server = dgram.createSocket("udp4");

server.on("message", (msg, rinfo) => {
  console.log(`Message: ${msg}`);
});

server.bind(41234);
```

---

## When to Use UDP

- Real-time communication
- Where speed > reliability

---

# 5. TLS / SSL Module

## Problem

HTTP sends data in plain text.

Attackers can:

- Read passwords
- Steal tokens

We need encryption.

TLS/SSL solves this.

---

## What is TLS?

Transport Layer Security.

Used in:

- HTTPS
- Secure APIs

---

## Basic Example

```js
const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end("Secure Server");
  })
  .listen(3000);
```

---

## Real Engineering Use

- Secure APIs
- Authentication
- Production servers

---

# 6. Crypto Module

## Problem

We need:

- Hash passwords
- Encrypt data
- Generate tokens
- Secure authentication

Crypto module provides:

- Hashing
- Encryption
- Decryption
- Random bytes

---

## Example: Hashing

```js
const crypto = require("crypto");

// Create SHA256 hash
const hash = crypto.createHash("sha256").update("password123").digest("hex");

console.log(hash);
```

---

## Use Cases

- Password hashing
- JWT signing
- Data encryption
- Digital signatures

---

# Big Picture Architecture

When user hits your app:

1. DNS resolves domain
2. HTTP/TLS establishes connection
3. Server handles request
4. Crypto secures authentication
5. Data sent back

Everything is networking.

---

# Exercises

1. Create HTTP server returning JSON.
2. Use DNS module to resolve 3 domains.
3. Hash 5 passwords using crypto.
4. Build small UDP sender + receiver.
5. Create HTTPS local server.

---

# Interview Questions

1. Difference between TCP and UDP?
2. How HTTPS works?
3. What is DNS lookup?
4. What is hashing?
5. Why Node good for networking?
6. What is multiplexing in HTTP2?
7. How to secure API in Node?
8. What is TLS handshake?

---

# Engineering Summary

Node is powerful because:

- Networking is core strength.
- Non-blocking model handles thousands of connections.
- Built-in modules reduce external dependencies.
- Ideal for real-time and API-based systems.

---
