# **Topic 1: HTTP, Web & Networking Fundamentals (15 Questions)**

## 1. What happens internally when you hit a URL in the browser and press Enter?

![](https://assets.bytebytego.com/diagrams/0410-what-happens-when-you-type-google-in-your-browser.png)

### Concepts (Problem → Flow → Clear Mental Model)

User types a URL → Browser must:

1. Find the server
2. Establish a connection
3. Request data
4. Receive response
5. Render UI

---

### Complete End-to-End Flow (Clean Mental Model)

![Image](https://miro.medium.com/1%2AyWFZdN1IX9h8bg8pm5XRwQ.jpeg)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AYVjZCxaKihEe4jSl1bMshQ.png)

![Image](https://substackcdn.com/image/fetch/%24s_%21n4O4%21%2Cf_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa4c6d534-c491-4b66-b359-86dc723aa0d7_1024x1024.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1028/1%2AqePw6WQAm1iW7Pq6heSvDQ.png)

---

### Step-by-Step Breakdown (FROM ZERO → ADVANCED)

#### 1. URL Parsing (Browser Understanding Input)

Example:

```text
https://www.example.com:443/path?x=1
```

Browser extracts:

- Protocol → HTTPS
- Domain → example.com
- Port → 443
- Path → /path

---

#### 2. DNS Resolution (Find Server IP)

Problem:
Computers don’t understand domain names → need IP

Flow:

1. Check browser cache
2. OS cache
3. ISP DNS
4. Root → TLD → Authoritative server

Result:

```text
example.com → 142.250.xxx.xxx
```

---

#### 3. TCP Connection (Transport Layer Setup)

Connection established using **3-way handshake**

```text
Client → SYN →
Server → SYN-ACK →
Client → ACK →
```

Now connection is stable

---

#### 4. TLS Handshake (Only for HTTPS)

Purpose: Secure communication

Steps:

- Exchange certificates
- Verify server identity
- Generate session keys

Result:

- Data is encrypted

---

#### 5. HTTP Request (Actual Data Request)

Browser sends:

```http
GET /path HTTP/1.1
Host: example.com
User-Agent: Chrome
Accept: text/html
```

---

#### 6. Server Processing (Backend Flow)

Inside server (Node.js example thinking):

1. Request hits server
2. Routing decides handler
3. Middleware runs
4. Business logic executes
5. DB/API call if needed

```js
app.get("/user", (req, res) => {
  // business logic
  res.json({ name: "Tanish" });
});
```

---

#### 7. HTTP Response (Server → Client)

Server sends:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{ "name": "Tanish" }
```

Includes:

- Status code
- Headers
- Body

---

#### 8. Browser Rendering (CRITICAL PART)

Browser does:

1. Parse HTML → DOM
2. Parse CSS → CSSOM
3. Combine → Render Tree
4. Layout (calculate positions)
5. Paint (draw pixels)

---

#### 9. Additional Requests

HTML may contain:

- CSS files
- JS files
- Images

Browser makes parallel requests for these

---

### Timeline (Real Flow Summary)

```text
URL Entered
   ↓
DNS Lookup
   ↓
TCP Handshake
   ↓
TLS Handshake
   ↓
HTTP Request
   ↓
Server Processing
   ↓
HTTP Response
   ↓
Browser Rendering
```

---

### Optimization Insights (Interview Bonus)

#### 1. DNS Caching

- Avoid repeated lookups

#### 2. Keep-Alive Connections

- Reuse TCP connection

#### 3. CDN

- Serve content from nearest server

#### 4. Compression

- Reduce payload (gzip, brotli)

---

### Common Mistakes (Important)

- Thinking HTTP request is first → ❌ DNS comes first
- Ignoring TLS → ❌ important for HTTPS
- Forgetting rendering pipeline → ❌ very important

---

### Interview Ready Answer (Perfect Version)

When a user enters a URL, the browser first parses it and performs a DNS lookup to resolve the domain name into an IP address. It then establishes a TCP connection using a three-way handshake. If the request is HTTPS, a TLS handshake is performed to secure the communication. After that, the browser sends an HTTP request to the server. The server processes the request through routing, middleware, and business logic, and returns an HTTP response containing a status code and data. Finally, the browser parses and renders the response by constructing the DOM and CSSOM, performing layout, and painting the content on the screen.

---

## Q1.1 What is TCP, HTTPS, TLS handshake, and what does “secure communication” mean?

### Concepts (Start from ZERO → Why → How everything connects)

---

### 1. Why do we even need TCP / HTTPS / TLS?

#### Problem (Real-world thinking)

When you open a website:

- Data travels over the internet (public network)
- Anyone in between can:
  - Read data
  - Modify data
  - Pretend to be the server

So we need:

1. **Reliable delivery** → TCP
2. **Security (privacy + trust)** → HTTPS + TLS

---

### 2. What is TCP?

#### Simple Meaning

TCP = **Transmission Control Protocol**

- Ensures:
  - Data reaches correctly
  - In correct order
  - No loss

---

#### Example (Kid Level)

Sending a book in pages:

Without TCP:

- Pages may be missing
- Order wrong

With TCP:

- Page 1,2,3… delivered properly
- Missing page? → resend

---

#### How TCP Works (3-Way Handshake)

Before sending data, connection must be established:

```text
Client → SYN → "Can we talk?"
Server → SYN-ACK → "Yes, ready"
Client → ACK → "Start"
```

Now:

- Reliable connection established

---

### 3. What is HTTPS?

#### Simple Meaning

HTTPS = **HTTP + Security**

- HTTP → sends data in plain text ❌
- HTTPS → sends encrypted data ✅

---

#### Example

##### HTTP (BAD)

```text
Password: 123456
```

Anyone can read it

##### HTTPS (GOOD)

```text
Encrypted: A9x#@!kL...
```

Unreadable to attacker

---

### 4. What is TLS?

#### Simple Meaning

TLS = **Transport Layer Security**

- Protocol that provides:
  - Encryption
  - Authentication
  - Data integrity

HTTPS uses **TLS under the hood**

---

### 5. TLS Handshake (MOST IMPORTANT)

#### Problem

Before sending secure data:

- Client & server must agree on:
  - Encryption method
  - Secret keys

---

### TLS Handshake Flow (Step-by-Step)

![Image](https://cf-assets.www.cloudflare.com/slt3lc6tev37/5aYOr5erfyNBq20X5djTco/3c859532c91f25d961b2884bf521c1eb/tls-ssl-handshake.png)

![Image](https://supertokens.com/static/b5de54fa634d6725432e9963a4027466/34431/tls1.2.png)

![Image](https://miro.medium.com/1%2AyAvvDe7IqsSw8DafUgitew.png)

![Image](https://www.researchgate.net/publication/298065605/figure/fig1/AS%3A357056767905792%401462140375566/TLS-handshake-protocol.png)

---

#### Steps

##### Step 1: Client Hello

- Browser says:
  - "I support these encryption methods"

---

##### Step 2: Server Hello

- Server replies:
  - "Use this method"
  - Sends **SSL certificate**

---

##### Step 3: Certificate Verification

- Browser checks:
  - Is server genuine?
  - Signed by trusted authority?

---

##### Step 4: Key Exchange

- Client generates **session key**
- Encrypts it using server’s public key

---

##### Step 5: Secure Channel Ready

- Both now share secret key
- Communication becomes encrypted

---

### 6. What is “Secure Communication”?

#### Means 3 Things (VERY IMPORTANT)

#### 1. Confidentiality

- No one can read data
- Achieved via **encryption**

---

#### 2. Integrity

- Data is not modified
- Verified using hashes

---

#### 3. Authentication

- You are talking to correct server
- Verified via certificates

---

### Real-Life Analogy

Sending a message:

#### Without Security

- Open postcard → anyone can read

#### With TLS

- Locked box
- Only receiver has key
- Seal ensures no tampering

---

### How Everything Connects (Full Flow)

```text
1. DNS → get IP
2. TCP Handshake → connection setup
3. TLS Handshake → secure channel
4. HTTP Request → sent securely (HTTPS)
5. Response → encrypted
```

---

### Common Confusions (Very Important)

#### HTTP vs HTTPS

- HTTP → no security
- HTTPS → HTTP + TLS

---

#### TCP vs TLS

- TCP → connection reliability
- TLS → security layer

---

#### TLS vs HTTPS

- TLS = technology
- HTTPS = application of TLS

---

### Interview Ready Answer

TCP is a transport protocol that ensures reliable and ordered data transmission using mechanisms like the three-way handshake. HTTPS is the secure version of HTTP that encrypts communication between the client and server using TLS. TLS handshake is the process where the client and server establish a secure connection by exchanging certificates and generating shared encryption keys. Secure communication ensures confidentiality, integrity, and authentication, meaning data cannot be read, altered, or impersonated by unauthorized parties.

---

## 2. What is an API endpoint and how is it different from a route?

**URL** is the complete web address used to access a resource, while a **Route** is the server-side mapping that decides what code runs when a specific URL path and HTTP method are requested.

### Concepts

**Route**

- Path defined in backend (e.g., `/users`)
- Maps URL + HTTP method to a handler

**API Endpoint**

- Fully qualified access point
- Example: `https://api.example.com/users`

Difference:
Route = internal backend mapping
Endpoint = externally accessible API URL

---

### Code example, multiple

#### Example — Express Route

```cpp
// Route definition
app.get("/users", (req, res) => {
    res.send("User list");
});
```

Here `/users` is route.

Full API endpoint would be:
`https://yourdomain.com/users`

---

### Interview ready answer

A route is a backend-defined path mapped to a handler function.
An API endpoint is the complete URL where that route is accessible externally.
Route is internal definition, endpoint is externally consumable access point.

---

## 3. Explain the complete HTTP request–response lifecycle.

![](https://bteccomputing.co.uk/wp-content/uploads/2020/04/bjlpij3gtr7peg2c5in7lalldd6jc3sachvcdoaizecfr3dnitcq_3_0.png)
**HTTP methods** are standardized request types that define the action a client wants to perform on a server resource (like GET to fetch, POST to create, PUT to update, DELETE to remove).

### Concepts

1. Client sends HTTP request
2. Request contains:
   - Method (GET, POST)
   - Headers
   - Body

3. Server receives request
4. Routing layer decides handler
5. Business logic executes
6. Database interaction
7. Server sends response
   - Status code
   - Headers
   - Body

---

### Code example, multiple

#### Example — Express Request Handling

```cpp
app.post("/login", (req, res) => {

    // Step 1: Read request body
    const { email, password } = req.body;

    // Step 2: Validate user
    if (email === "admin@test.com") {

        // Step 3: Send success response
        res.status(200).json({ message: "Login success" });

    } else {

        // Step 4: Send error response
        res.status(401).json({ message: "Unauthorized" });
    }
});
```

---

### Interview ready answer

HTTP lifecycle starts when client sends a request with method, headers, and body.
Server receives it, matches route, runs business logic, interacts with database if needed, and sends back response with status code and data.
The connection is closed after response (stateless).

---

## 4. What does “stateless” mean in HTTP, and why was HTTP designed this way?

![Statless vs Stateful](https://miro.medium.com/1*xYvS7mMWe-u3ehzm58O78A.png)

### Concepts

Stateless means:
Each request is independent.
Server does NOT remember previous requests automatically.

Example:
Login request does not automatically store user unless session/token is used.

Why designed stateless?

- Scalability
- Simpler server design
- Easier load balancing

---

### Code example, multiple

#### Example — Stateless Behavior

```cpp
// First request
GET /profile

// Server cannot know user unless:
// 1. Cookie
// 2. JWT token
// 3. Session ID
```

---

### Interview ready answer

HTTP is stateless, meaning each request is independent and server does not store client state between requests.
This design improves scalability and simplifies server architecture.
State can be maintained using cookies, sessions, or tokens.

---

## 5. Difference between HTTP and HTTPS. How does SSL/TLS work at a high level?

### Concepts

#### HTTP (HyperText Transfer Protocol)

- Data is sent in **plain text**
- No encryption → anyone on the network can read/modify data
- Vulnerable to:
  - Man-in-the-middle (MITM) attacks
  - Data tampering

- Default port → **80**

---

#### HTTPS (HyperText Transfer Protocol Secure)

- HTTP + **SSL/TLS encryption layer**
- Data is:
  - **Encrypted** (confidentiality)
  - **Integrity protected** (no tampering)
  - **Authenticated** (server identity verified)

- Default port → **443**

---

### Key Differences (Clear Table)

| Feature         | HTTP               | HTTPS                        |
| --------------- | ------------------ | ---------------------------- |
| Security        | Not secure         | Secure                       |
| Encryption      | No                 | Yes (TLS)                    |
| Data Visibility | Plain text         | Encrypted                    |
| Port            | 80                 | 443                          |
| SEO Ranking     | Lower              | Higher (preferred by Google) |
| Use Case        | Non-sensitive data | Login, payments, APIs        |

---

### TLS / SSL Working (High-Level but Clear)

### Goal

- Establish a **secure communication channel** over insecure network

---

### Step-by-Step TLS Handshake

1. **Client Hello**
   - Sends:
     - Supported TLS versions
     - Cipher suites (encryption methods)
     - Random value

---

2. **Server Hello**
   - Chooses:
     - TLS version
     - Cipher suite

   - Sends **digital certificate**

---

3. **Certificate Verification**
   - Client checks:
     - Trusted Certificate Authority (CA)
     - Domain validity

   - Ensures server is genuine (no MITM)

---

4. **Key Exchange**
   - Client generates **pre-master secret**
   - Encrypts it using server’s **public key**
   - Sends to server

---

5. **Session Key Generation**
   - Both client & server derive:
     - Same **symmetric session key**

   - Faster encryption used from now

---

6. **Secure Communication Starts**
   - All data:
     - Encrypted using session key
     - Integrity checked (MAC)

---

### Visual Flow (Mental Model)

```
Client                         Server
  | ------ Client Hello ------> |
  | <----- Server Hello ------- |
  | <----- Certificate -------- |
  | ---- Verify Certificate --> |
  | ---- Send Encrypted Key --> |
  | <--- Session Established -- |
  | ===== Encrypted Data =====> |
```

---

### Code Example, Multiple

#### Example — HTTP vs HTTPS

```
http://example.com   → Not secure (data visible)
https://example.com  → Secure (data encrypted)
```

---

#### Example — Node.js HTTPS Server

```js
// HTTPS server using Node.js

const https = require("https");
const fs = require("fs");

// load SSL certificate & private key
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end("Secure Server");
  })
  .listen(443, () => {
    console.log("HTTPS server running on port 443");
  });
```

---

### Deep Insight (Interview Bonus)

- TLS uses **asymmetric encryption** (slow) only during handshake
- After that → switches to **symmetric encryption** (fast)
- Certificate is issued by **CA (Certificate Authority)** like:
  - DigiCert
  - Let’s Encrypt

---

### Common Mistakes

- Thinking HTTPS = fully secure → ❌ depends on implementation
- Ignoring certificate validation → ❌ critical step
- Confusing SSL vs TLS → SSL is deprecated, TLS is modern

---

### Interview Ready Answer

HTTP transmits data in plain text, making it insecure, whereas HTTPS uses SSL/TLS to encrypt communication between client and server. During the TLS handshake, the client and server exchange hello messages, the server provides a digital certificate, the client verifies it, and both generate a shared session key. After this, all communication is encrypted, ensuring confidentiality, integrity, and authentication.

## 6. What are HTTP methods (GET, POST, PUT, PATCH, DELETE)? When should each be used?

### Concepts

**GET**

- Retrieve data
- No modification
- Idempotent

**POST**

- Create new resource
- Not idempotent

**PUT**

- Replace entire resource
- Idempotent

**PATCH**

- Partially update resource
- Not necessarily idempotent

**DELETE**

- Remove resource
- Idempotent

---

### Code example, multiple

#### Example — Express Methods

```cpp
// GET - Fetch users
app.get("/users", (req, res) => {
    res.json({ message: "Fetching users" });
});

// POST - Create user
app.post("/users", (req, res) => {
    res.json({ message: "User created" });
});

// PUT - Replace user
app.put("/users/1", (req, res) => {
    res.json({ message: "User replaced" });
});

// PATCH - Update user partially
app.patch("/users/1", (req, res) => {
    res.json({ message: "User updated partially" });
});

// DELETE - Delete user
app.delete("/users/1", (req, res) => {
    res.json({ message: "User deleted" });
});
```

---

### Interview ready answer

GET is used to fetch data.
POST is used to create a new resource.
PUT replaces the entire resource.
PATCH updates specific fields.
DELETE removes a resource.
Idempotent methods (GET, PUT, DELETE) produce the same result if called multiple times.

---

## 7. Difference between PUT vs PATCH with real backend use-cases.

### Concepts

**PUT**

- Replaces entire resource
- Requires full object

**PATCH**

- Updates specific fields
- Requires partial object

Example:

User object:

```
{
  name: "Tanish",
  email: "t@test.com",
  age: 22
}
```

PUT → must send all fields
PATCH → can send only `{ age: 23 }`

---

### Code example, multiple

```cpp
// PUT - Full replacement
app.put("/users/1", (req, res) => {
    // Entire object expected
    res.json({ message: "User fully replaced" });
});

// PATCH - Partial update
app.patch("/users/1", (req, res) => {
    // Only changed fields expected
    res.json({ message: "User partially updated" });
});
```

---

### Interview ready answer

PUT replaces the complete resource and requires full object in request body.
PATCH updates only specific fields.
Use PUT when updating entire entity.
Use PATCH when modifying selected attributes like updating user age or status.

---

## 8. What are HTTP status codes? Explain 2xx, 3xx, 4xx, 5xx with examples.

### Concepts

Status codes indicate result of request.

**2xx – Success**

- 200 OK
- 201 Created

**3xx – Redirection**

- 301 Moved Permanently
- 302 Found

**4xx – Client Error**

- 400 Bad Request
- 401 Unauthorized
- 404 Not Found

**5xx – Server Error**

- 500 Internal Server Error
- 503 Service Unavailable

---

### Code example, multiple

```cpp
app.get("/success", (req, res) => {
    res.status(200).send("Success");
});

app.get("/notfound", (req, res) => {
    res.status(404).send("Not Found");
});

app.get("/error", (req, res) => {
    res.status(500).send("Server Error");
});
```

---

### Interview ready answer

HTTP status codes indicate the outcome of a request.
2xx means success, 3xx means redirection, 4xx means client-side error, and 5xx means server-side error.
They help client understand how to handle response.

---

## 9. What are request headers and response headers? Why are they important?

### Concepts

Headers carry metadata.

**Request Headers**

- Authorization
- Content-Type
- Cookie

**Response Headers**

- Content-Type
- Set-Cookie
- Cache-Control

They control behavior of request/response.

---

### Code example, multiple

```cpp
app.get("/data", (req, res) => {

    // Reading request header
    const token = req.headers.authorization;

    // Setting response header
    res.set("Cache-Control", "no-store");

    res.json({ message: "Header example" });
});
```

---

### Interview ready answer

Request headers send metadata like authentication token or content type.
Response headers provide instructions like caching rules or cookies.
They are essential for security, caching, content negotiation, and authentication.

---

## 10. What is CORS? Why does it exist and how do you fix CORS issues?

### Concepts

CORS = Cross-Origin Resource Sharing

Browser security feature.
Blocks frontend from calling different domain unless allowed.

Example:
Frontend: `http://localhost:3000`
Backend: `http://localhost:5000`

Different origin → blocked.

Server must send:

```
Access-Control-Allow-Origin
```

---

### Code example, multiple

```cpp
// Using CORS middleware in Express
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:3000"
}));
```

---

### Interview ready answer

CORS is a browser security mechanism that prevents frontend from accessing resources from a different origin without permission.
It exists to prevent malicious cross-site attacks.
To fix CORS, backend must send proper Access-Control-Allow-Origin headers or use CORS middleware.

## 11. What are cookies? How are they sent in HTTP requests?

### Concepts

- Cookies are small key–value data stored in the browser.
- They are used for session management, authentication, and tracking.
- Server sends cookies using `Set-Cookie` header.
- Browser automatically sends cookies back in future requests via `Cookie` header.
- Cookies can have attributes:
  - HttpOnly
  - Secure
  - SameSite
  - Expiry

Flow:

1. Server → `Set-Cookie`
2. Browser stores it
3. Browser → sends `Cookie` in next request

---

### Code example, multiple

```cpp
// Setting cookie
app.get("/login", (req, res) => {

    // Set cookie in response
    res.cookie("sessionId", "abc123", {
        httpOnly: true,
        secure: true
    });

    res.send("Logged in");
});

// Reading cookie
app.get("/profile", (req, res) => {

    const session = req.cookies.sessionId;

    res.send("Session ID: " + session);
});
```

---

### Interview ready answer

Cookies are small pieces of data stored in the browser.
The server sends them using Set-Cookie header.
The browser automatically includes them in future requests using the Cookie header.
They are commonly used for session management and authentication.

---

## 12. Difference between cookies, localStorage, and sessionStorage.

### Concepts

**Cookies**

- Sent automatically with every HTTP request
- Can be HttpOnly
- Small size (~4KB)

**localStorage**

- Stored in browser
- Not sent to server automatically
- Persists until manually cleared

**sessionStorage**

- Same as localStorage
- Cleared when tab closes

Main Difference:
Cookies → server communication
localStorage/sessionStorage → frontend storage

---

### Code example, multiple

```cpp
// localStorage example
localStorage.setItem("token", "abc123");

// sessionStorage example
sessionStorage.setItem("user", "Tanish");

// Cookie example (document side)
document.cookie = "theme=dark";
```

---

### Interview ready answer

Cookies are stored in the browser and automatically sent with every HTTP request.
localStorage and sessionStorage are client-side storage mechanisms and are not sent to the server automatically.
localStorage persists until cleared, while sessionStorage is cleared when the tab closes.

---

## 13. What are webhooks? How do they work internally?

### Concepts

Webhook = Server-to-server callback.

Instead of polling:

- Client registers a URL.
- When event happens, server sends POST request to that URL.

Flow:

1. Client registers webhook URL.
2. Event occurs.
3. Server sends HTTP POST to client endpoint.
4. Client processes event.

Used in:

- Payment notifications
- GitHub commits
- Stripe payments

---

### Code example, multiple

```cpp
// Receiving webhook in backend
app.post("/webhook", (req, res) => {

    const eventData = req.body;

    // Process event
    console.log("Webhook received:", eventData);

    res.status(200).send("Received");
});
```

---

### Interview ready answer

A webhook is a server-to-server callback mechanism.
Instead of continuously polling, the server automatically sends a POST request to a predefined URL when an event occurs.
It is commonly used for payment systems, GitHub events, and third-party integrations.

---

## 14. What is polling vs long polling vs WebSockets?

### Concepts

**Polling**

- Client repeatedly sends requests at fixed interval.
- Wasteful if no new data.

**Long Polling**

- Client sends request.
- Server holds it until data available.
- Reduces unnecessary requests.

**WebSockets**

- Persistent bidirectional connection.
- Real-time communication.
- Low latency.

Comparison:

Polling → Simple but inefficient
Long Polling → Better than polling
WebSockets → Best for real-time apps

---

### Code example, multiple

```cpp
// Polling example (conceptual)
// Client calls /notifications every 5 seconds

// WebSocket example (conceptual)
const socket = new WebSocket("ws://localhost:3000");

socket.onmessage = (event) => {
    console.log("New message:", event.data);
};
```

---

### Interview ready answer

Polling repeatedly requests data at intervals.
Long polling holds the request until new data is available.
WebSockets maintain a persistent two-way connection for real-time communication.
WebSockets are preferred for chat apps and live updates.

---

## 15. How would you design a backend for real-time communication?

[Design-a-chat-system](https://bytebytego.com/courses/system-design-interview/design-a-chat-system)
[Communication Design Patterns for Backend Development](https://www.geeksforgeeks.org/system-design/communication-design-patterns-for-backend-development-1/)

### Concepts

Key Components:

1. WebSockets for real-time messaging
2. Authentication layer
3. Message broker (Redis Pub/Sub, Kafka)
4. Scalable server instances
5. Load balancer
6. Database for persistence

Architecture:

Client → Load Balancer → WebSocket Server
WebSocket Server → Redis Pub/Sub → Other instances

Why Redis?

- Synchronize messages across multiple servers.

Scalability:

- Stateless WebSocket servers
- Horizontal scaling

---

### Code example, multiple

```cpp
// Conceptual WebSocket server

const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 3000 });

server.on("connection", (socket) => {

    socket.on("message", (message) => {

        // Broadcast to all clients
        server.clients.forEach(client => {
            client.send(message);
        });
    });
});
```

---

### Interview ready answer

For real-time backend design, I would use WebSockets for persistent communication.
To scale horizontally, I would integrate Redis Pub/Sub so multiple server instances can sync messages.
Add authentication, load balancing, and message persistence in database.
This architecture supports chat applications, live notifications, and collaborative systems.

---

# **Topic 2: REST API Design & API Architecture (14 Questions)**

## 1. What is REST? What are its core principles?

### Concepts

REST = Representational State Transfer
Architectural style for designing networked applications.

Core Principles:

1. Client–Server
2. Stateless
3. Cacheable
4. Uniform Interface
5. Layered System
6. (Optional) Code on Demand

REST uses HTTP methods to operate on resources.

---

### Code example, multiple

```cpp id="r1x9pz"
// REST example - Resource based

// Resource: users

// GET - Fetch users
app.get("/users", (req, res) => {
    res.json([{ id: 1, name: "Tanish" }]);
});

// POST - Create user
app.post("/users", (req, res) => {
    res.status(201).json({ message: "User created" });
});
```

---

### Interview ready answer

REST is an architectural style where resources are identified by URLs and manipulated using standard HTTP methods.
It follows principles like statelessness, client-server separation, cacheability, and uniform interface.

---

## 2. Difference between REST and RPC style APIs.

### Concepts

REST:

- Resource-based
- Uses nouns (/users)
- Standard HTTP methods

RPC:

- Action-based
- Uses verbs (/createUser)
- Focus on procedure call

Example:

REST:
GET /users/1

RPC:
POST /getUser

---

### Code example, multiple

```cpp id="v6nqhy"
// REST style
app.get("/users/1", (req, res) => {
    res.send("User 1");
});

// RPC style
app.post("/getUser", (req, res) => {
    res.send("User 1");
});
```

---

### Interview ready answer

REST is resource-oriented and uses HTTP methods to act on resources.
RPC is action-oriented and focuses on calling functions or procedures.
REST promotes standardization and scalability, while RPC is simpler but less structured.

---

## 3. What makes an API truly RESTful?

### Concepts

An API is RESTful if it:

1. Uses proper HTTP methods
2. Uses resource-based URLs
3. Is stateless
4. Uses proper status codes
5. Supports caching
6. Has consistent structure

Example:

Good:
GET /users/10

Bad:
POST /getUserById

---

### Code example, multiple

```cpp id="b3km18"
app.get("/orders/10", (req, res) => {
    res.status(200).json({ id: 10, item: "Laptop" });
});
```

---

### Interview ready answer

An API is RESTful when it strictly follows REST constraints: resource-based URLs, correct HTTP methods, stateless communication, proper status codes, and consistent structure.

---

## 4. What is idempotency in REST APIs? Why is it important?

### Concepts

Idempotent = Multiple identical requests produce same result.

Idempotent methods:

- GET
- PUT
- DELETE

Not idempotent:

- POST

Example:

PUT /users/1
Calling 5 times → same final state.

POST /users
Calling 5 times → creates 5 users.

Why important?

- Safe retries
- Prevent duplicate operations
- Important in distributed systems

---

### Code example, multiple

```cpp id="j7mt4l"
// Idempotent example
app.put("/users/1", (req, res) => {
    res.json({ message: "User updated" });
});
```

---

### Interview ready answer

Idempotency means repeated identical requests produce the same result.
PUT and DELETE are idempotent, while POST is not.
It is important for safe retries and fault tolerance in distributed systems.

---

## 5. How do you design clean and consistent API endpoints?

### Concepts

Best Practices:

1. Use nouns not verbs
2. Use plural resource names
3. Follow consistent naming
4. Use hierarchical structure
5. Use proper HTTP methods
6. Keep URLs simple

Example:

Good:
GET /users/10/orders

Bad:
GET /getUserOrders

---

### Code example, multiple

```cpp id="t3cw9n"
app.get("/users/:id/orders", (req, res) => {
    res.json({ message: "Orders for user" });
});
```

---

### Interview ready answer

To design clean APIs, use noun-based resource URLs, plural naming, consistent patterns, proper HTTP methods, and hierarchical structure.
Avoid verbs in URLs and maintain predictable naming conventions.

## 6. How should errors be handled and returned in REST APIs?

### Concepts

Best Practices:

1. Use proper HTTP status codes
   - 400 → Bad Request
   - 401 → Unauthorized
   - 403 → Forbidden
   - 404 → Not Found
   - 500 → Internal Server Error

2. Return structured JSON error response

3. Do not expose internal stack traces

4. Include error code + message

5. Log errors internally

Standard Error Format:

```json
{
  "success": false,
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "User does not exist"
  }
}
```

---

### Code example, multiple

```cpp id="f0qk9d"
app.get("/users/:id", (req, res) => {

    const user = null; // Simulating not found

    if (!user) {
        return res.status(404).json({
            success: false,
            error: {
                code: "USER_NOT_FOUND",
                message: "User not found"
            }
        });
    }

    res.status(200).json(user);
});
```

---

### Interview ready answer

Errors should use proper HTTP status codes and return structured JSON responses.
Avoid exposing internal details and maintain consistent error formats.
Logging should be done internally for debugging.

---

## 7. What is API versioning? Why is it required?

### Concepts

API versioning = Managing API changes without breaking existing clients.

Why needed?

- Backward compatibility
- Add new features safely
- Avoid breaking production clients

Example:
v1 → returns basic user data
v2 → adds new fields

---

### Code example, multiple

```cpp id="o9x3nm"
// Version 1
app.get("/api/v1/users", (req, res) => {
    res.json({ id: 1, name: "Tanish" });
});

// Version 2
app.get("/api/v2/users", (req, res) => {
    res.json({ id: 1, name: "Tanish", role: "Admin" });
});
```

---

### Interview ready answer

API versioning allows evolving APIs without breaking existing consumers.
It ensures backward compatibility and safer feature rollouts.

---

## 8. Different API versioning strategies (URL, headers, query params).

### Concepts

1. URL Versioning
   `/api/v1/users`

2. Header Versioning
   `Accept: application/vnd.myapp.v1+json`

3. Query Param Versioning
   `/users?version=1`

Most common: URL versioning.

Pros & Cons:

URL → Clear and simple
Header → Cleaner URLs but harder to debug
Query → Less preferred in production

---

### Code example, multiple

```cpp id="l2yt7f"
// Query versioning
app.get("/users", (req, res) => {

    const version = req.query.version;

    if (version === "2") {
        return res.json({ newField: true });
    }

    res.json({ basic: true });
});
```

---

### Interview ready answer

API versioning can be implemented using URL paths, headers, or query parameters.
URL versioning is most common due to clarity and ease of maintenance.

---

## 9. What is HATEOAS? Is it practically used?

### Concepts

HATEOAS = Hypermedia As The Engine Of Application State

Meaning:
Server response includes links to related actions.

Example Response:

```json
{
  "id": 10,
  "status": "shipped",
  "links": [
    { "rel": "cancel", "href": "/orders/10/cancel" },
    { "rel": "track", "href": "/orders/10/track" }
  ]
}
```

Purpose:

- Self-discoverable APIs
- Reduce hardcoded endpoints

Reality:
Rarely fully implemented in real-world systems.

---

### Code example, multiple

```cpp id="r7cz5k"
app.get("/orders/:id", (req, res) => {

    res.json({
        id: req.params.id,
        status: "shipped",
        links: [
            { rel: "track", href: `/orders/${req.params.id}/track` }
        ]
    });
});
```

---

### Interview ready answer

HATEOAS means API responses include hypermedia links to related actions.
It makes APIs self-discoverable, but in practice, most production systems only partially implement it.

---

## 10. What are pagination strategies in APIs?

### Concepts

Pagination prevents loading large datasets at once.

Common strategies:

1. Offset-based
2. Cursor-based
3. Page-based

Example:
GET /users?page=2&limit=10

Benefits:

- Better performance
- Reduced payload
- Improved scalability

---

### Code example, multiple

```cpp id="k8mn2p"
app.get("/users", (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const offset = (page - 1) * limit;

    res.json({
        page,
        limit,
        offset
    });
});
```

---

### Interview ready answer

Pagination divides large datasets into smaller chunks using page number, offset, or cursor strategies.
It improves performance and reduces response size.

---

## 11. Difference between offset-based and cursor-based pagination.

### Concepts

Offset-based:

- Uses limit + offset
- Example: OFFSET 20 LIMIT 10
- Slower for large datasets

Cursor-based:

- Uses unique key (like id or timestamp)
- More efficient for large data
- No duplicate/skipped records during inserts

Example:

Offset:
GET /users?offset=20&limit=10

Cursor:
GET /users?cursor=abc123

---

### Code example, multiple

```cpp id="y4mp0r"
// Cursor example
app.get("/users", (req, res) => {

    const cursor = req.query.cursor;

    res.json({
        nextCursor: "xyz456",
        data: []
    });
});
```

---

### Interview ready answer

Offset-based pagination uses numeric offset and becomes slow for large datasets.
Cursor-based pagination uses a unique reference like ID and is more scalable and consistent in high-write systems.

---

## 12. How do you design APIs for backward compatibility?

### Concepts

Strategies:

1. Never remove existing fields
2. Add optional fields only
3. Version APIs when breaking changes
4. Deprecate gradually
5. Maintain documentation

Rule:
Breaking change → New version

---

### Code example, multiple

```cpp id="c2sh9q"
// Adding new optional field (non-breaking)
res.json({
    id: 1,
    name: "Tanish",
    role: "Admin" // New field
});
```

---

### Interview ready answer

To maintain backward compatibility, avoid removing fields, add only optional fields, and version APIs when introducing breaking changes.
Deprecate old versions gradually instead of removing immediately.

---

## 13. How do you design rate-limited public APIs?

### Concepts

Rate limiting prevents abuse.

Techniques:

1. Token bucket
2. Leaky bucket
3. Fixed window
4. Sliding window

Implementation:

- Use Redis to track request count
- Limit per IP or per API key

Example:
100 requests per minute per user

---

### Code example, multiple

```cpp id="d1j7so"
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100
});

app.use(limiter);
```

---

### Interview ready answer

Rate limiting restricts number of requests per client within a time window.
It prevents abuse, ensures fairness, and protects infrastructure.
It is usually implemented using Redis or middleware like express-rate-limit.

---

## 14. REST vs GraphQL – when would you choose each?

### Concepts

REST:

- Resource-based
- Multiple endpoints
- Simple caching
- Easier to implement

GraphQL:

- Single endpoint
- Client specifies fields
- Reduces over-fetching
- More flexible

Choose REST when:

- Simple CRUD
- Public APIs
- Caching required

Choose GraphQL when:

- Complex frontend needs
- Multiple related resources
- Avoid over-fetching

---

### Code example, multiple

REST:

```cpp id="x8kt4f"
GET /users/1
```

GraphQL:

```graphql
query {
  user(id: 1) {
    name
    email
  }
}
```

---

### Interview ready answer

REST uses multiple resource-based endpoints and is simple and cache-friendly.
GraphQL uses a single endpoint and allows clients to request exactly what they need.
REST is better for simple public APIs, while GraphQL suits complex frontend-driven applications.

# **Topic 3: Authentication, Authorization & Security (16 Questions)**

---

## 1. Difference between authentication and authorization.

### Concepts

**Authentication**

- Verifies identity
- Answers: _Who are you?_
- Example: Login with email + password

**Authorization**

- Verifies permissions
- Answers: _What can you do?_
- Example: Can this user delete posts?

Flow:

Authentication → Authorization

---

### Code example, multiple

```cpp
// Authentication middleware (verify token)

function authenticate(req, res, next) {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    // Token verification logic
    req.user = { id: 1, role: "admin" };

    next();
}

// Authorization middleware

function authorize(role) {

    return (req, res, next) => {

        if (req.user.role !== role) {
            return res.status(403).json({ message: "Forbidden" });
        }

        next();
    };
}
```

---

### Interview ready answer

Authentication verifies the identity of a user, usually through credentials or tokens.
Authorization determines what actions the authenticated user is allowed to perform.
Authentication comes first, then authorization.

---

## 2. What is session-based authentication?

### Concepts

- Server creates a session after login.
- Session ID stored in server memory or database.
- Session ID sent to browser as cookie.
- Browser sends cookie in every request.
- Server validates session ID.

Flow:

1. User logs in.
2. Server creates session.
3. Sends `Set-Cookie`.
4. Browser sends cookie in future requests.
5. Server checks session store.

Pros:

- Simple
- Easy invalidation

Cons:

- Hard to scale without shared session store.

---

### Code example, multiple

```cpp
// Express session example (conceptual)

app.post("/login", (req, res) => {

    req.session.userId = 1;

    res.send("Logged in");
});

app.get("/profile", (req, res) => {

    if (!req.session.userId) {
        return res.status(401).send("Unauthorized");
    }

    res.send("Profile data");
});
```

---

### Interview ready answer

Session-based authentication stores session data on the server.
The server sends a session ID via cookie, and the browser automatically sends it in subsequent requests.
The server verifies session existence before granting access.

---

## 3. What is token-based authentication?

### Concepts

- Server generates token (usually JWT).
- Token stored on client.
- Client sends token in Authorization header.
- Server validates token on every request.
- No server-side session storage required.

Format:

```
Authorization: Bearer <token>
```

Pros:

- Stateless
- Easy horizontal scaling

Cons:

- Harder to revoke tokens

---

### Code example, multiple

```cpp
// Middleware to verify token

function verifyToken(req, res, next) {

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).send("Unauthorized");
    }

    // Verify token logic
    req.user = { id: 1 };

    next();
}
```

---

### Interview ready answer

Token-based authentication uses signed tokens instead of server-side sessions.
The client stores the token and sends it with every request.
The server verifies the token signature and grants access without maintaining session state.

---

## 4. How does JWT authentication work internally?

### Concepts

JWT = JSON Web Token

Structure:

```
Header.Payload.Signature
```

1. Header → Algorithm + token type
2. Payload → User data (claims)
3. Signature → Signed using secret key

Flow:

1. User logs in.
2. Server verifies credentials.
3. Server creates JWT and signs it.
4. Client stores token.
5. Client sends token in request.
6. Server verifies signature.
7. If valid → access granted.

Important:

- Signature ensures integrity.
- Server does NOT store token.

---

### Code example, multiple

```cpp
// Generate JWT (conceptual)

const jwt = require("jsonwebtoken");

const token = jwt.sign(
    { userId: 1 },
    "SECRET_KEY",
    { expiresIn: "1h" }
);

// Verify JWT

jwt.verify(token, "SECRET_KEY");
```

---

### Interview ready answer

JWT consists of header, payload, and signature.
After login, the server signs the token using a secret key.
The client sends the token in each request.
The server verifies the signature to ensure it hasn’t been tampered with and grants access if valid.

---

## 5. What are access tokens and refresh tokens?

### Concepts

**Access Token**

- Short-lived
- Used for API access
- Sent in Authorization header

**Refresh Token**

- Long-lived
- Used to generate new access tokens
- Stored securely (HttpOnly cookie)

Flow:

1. Login → receive both tokens.
2. Access token expires.
3. Client sends refresh token.
4. Server issues new access token.

Purpose:

- Improve security
- Reduce exposure window

---

### Code example, multiple

```cpp
// Refresh endpoint

app.post("/refresh", (req, res) => {

    const refreshToken = req.cookies.refreshToken;

    // Validate refresh token
    const newAccessToken = "newToken";

    res.json({ accessToken: newAccessToken });
});
```

---

### Interview ready answer

Access tokens are short-lived tokens used for API requests.
Refresh tokens are long-lived and used to obtain new access tokens when the old one expires.
This reduces risk if access token is compromised.

---

## 6. Where should JWT be stored and why?

### Concepts

Options:

1. localStorage
2. sessionStorage
3. HttpOnly cookies

Best practice:

- Access token → memory or short-lived storage
- Refresh token → HttpOnly, Secure cookie

Why?

- HttpOnly prevents XSS access.
- Secure ensures HTTPS-only transmission.
- SameSite prevents CSRF.

Avoid storing sensitive tokens in localStorage due to XSS risk.

---

### Interview ready answer

JWT should ideally be stored in HttpOnly secure cookies to prevent XSS attacks.
Access tokens may be stored in memory, while refresh tokens should always be stored in HttpOnly cookies for better security.

---

## 7. What is OAuth 2.0? Explain the flow at high level.

### Concepts

OAuth 2.0 = Authorization framework.

Used for:

- Login with Google
- Login with GitHub

High-level flow (Authorization Code):

1. User clicks “Login with Google”.
2. Redirect to provider.
3. User consents.
4. Provider returns authorization code.
5. Backend exchanges code for access token.
6. Backend fetches user data.

Purpose:

- No password sharing
- Delegated authorization

---

### Interview ready answer

OAuth 2.0 is an authorization framework that allows third-party applications to access user data without exposing credentials.
In authorization code flow, the client receives a temporary code which is exchanged for an access token on the backend.

---

## 8. What is Single Sign-On (SSO)?

### Concepts

SSO allows:

- Login once
- Access multiple systems without re-login

Example:

- Google login across Gmail, YouTube, Drive

Works using:

- Central identity provider
- Shared authentication token

Benefits:

- Better UX
- Centralized authentication management

---

### Interview ready answer

Single Sign-On allows users to authenticate once and gain access to multiple systems without logging in repeatedly.
It is typically implemented using centralized identity providers and token-based authentication.

---

## 9. How do you implement role-based access control (RBAC)?

### Concepts

RBAC assigns roles to users.

Example:

Roles:

- Admin
- Moderator
- User

Steps:

1. Store role in database.
2. Attach role in JWT payload.
3. Middleware checks role before accessing route.

---

### Code example, multiple

```cpp
function authorizeRole(allowedRoles) {

    return (req, res, next) => {

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).send("Forbidden");
        }

        next();
    };
}

app.delete("/post/:id",
    authenticate,
    authorizeRole(["admin"]),
    handler
);
```

---

### Interview ready answer

RBAC assigns predefined roles to users and restricts access based on those roles.
The role is usually stored in database and included in JWT.
Middleware checks whether the user’s role allows access to the route.

---

## 10. What is rate limiting? How is it implemented?

### Concepts

Rate limiting restricts:

- Number of requests per time window.

Why?

- Prevent abuse
- Prevent DDoS
- Ensure fair usage

Implementation:

- Use Redis to track request counts.
- Token bucket / sliding window algorithms.
- Limit per IP or per user.

---

### Code example, multiple

```cpp
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100
});

app.use(limiter);
```

---

### Interview ready answer

Rate limiting restricts how many requests a client can make within a time window.
It is implemented using algorithms like token bucket or sliding window, usually backed by Redis for distributed systems.

---

## 11. What is SQL Injection? How do you prevent it?

### Concepts

SQL Injection:

- Malicious SQL inserted into query input.
- Can bypass authentication or extract data.

Example:

Input:

```
' OR '1'='1
```

Prevention:

1. Use parameterized queries.
2. Use ORM.
3. Validate inputs.
4. Least privilege DB user.

---

### Code example, multiple

```cpp
// Unsafe
db.query("SELECT * FROM users WHERE email = '" + email + "'");

// Safe (Parameterized)
db.query("SELECT * FROM users WHERE email = ?", [email]);
```

---

### Interview ready answer

SQL Injection is a vulnerability where attackers insert malicious SQL into input fields.
It is prevented using parameterized queries, ORM usage, proper validation, and least-privilege database access.

---

## 12. What is XSS and CSRF? How do you protect backend APIs?

### Concepts

**XSS (Cross-Site Scripting)**

- Malicious script injected into frontend.
- Steals tokens or cookies.

Prevention:

- Sanitize inputs
- Use HttpOnly cookies
- Use Content Security Policy

**CSRF (Cross-Site Request Forgery)**

- Attacker tricks authenticated user into making unwanted request.

Prevention:

- CSRF tokens
- SameSite cookies
- Double submit cookie pattern

---

### Interview ready answer

XSS allows attackers to inject malicious scripts into applications.
CSRF tricks users into making unintended authenticated requests.
Protection includes input sanitization, HttpOnly cookies, CSRF tokens, and SameSite attributes.

---

## 13. How do you securely store passwords?

### Concepts

Never store plain text.

Steps:

1. Hash passwords.
2. Use strong hashing algorithm:
   - bcrypt
   - Argon2

3. Add salt automatically.
4. Compare hashed password during login.

Never use:

- MD5
- SHA1

---

### Code example, multiple

```cpp
const bcrypt = require("bcrypt");

// Hash
const hashed = await bcrypt.hash(password, 10);

// Compare
const match = await bcrypt.compare(password, hashed);
```

---

### Interview ready answer

Passwords should be hashed using strong algorithms like bcrypt or Argon2 with built-in salting.
Plain text passwords must never be stored in database.

---

## 14. What is hashing vs encryption?

### Concepts

**Hashing**

- One-way function
- Cannot be reversed
- Used for passwords

**Encryption**

- Two-way
- Can be decrypted with key
- Used for secure communication

Difference:

Hash → integrity
Encryption → confidentiality

---

### Interview ready answer

Hashing is a one-way transformation used for verifying integrity, commonly used for passwords.
Encryption is reversible using a key and is used for protecting sensitive data during storage or transmission.

---

## 15. How would you secure a production-ready backend system?

### Concepts

Security layers:

1. HTTPS everywhere
2. Strong authentication (JWT/OAuth)
3. RBAC
4. Rate limiting
5. Input validation
6. Parameterized queries
7. Secure headers (Helmet)
8. Logging and monitoring
9. Environment variable secrets
10. Regular dependency updates

Defense in depth approach.

---

### Interview ready answer

To secure a production backend, I would enforce HTTPS, implement strong authentication and RBAC, apply rate limiting, validate all inputs, use parameterized queries, secure headers, store secrets in environment variables, and continuously monitor logs.
Security must be layered, not dependent on a single mechanism.

---

## 16. How do you rotate secrets and tokens in production?

### Concepts

Secret rotation:

- Change API keys and signing keys periodically.
- Store in secure vault (AWS Secrets Manager, Vault).

JWT key rotation:

- Use key IDs (kid) in header.
- Maintain multiple active keys.
- Gradually phase out old keys.

Steps:

1. Generate new key.
2. Start signing new tokens with new key.
3. Keep old key for verification.
4. Expire old tokens.
5. Remove old key.

Purpose:

- Minimize impact of leaked secrets.

---

### Interview ready answer

In production, secrets should be rotated periodically using secure vault systems.
For JWT rotation, I would introduce a new signing key while keeping the old key active for verification until tokens expire.
After all old tokens expire, the old key can be safely removed.
This ensures zero downtime during rotation.

# **Topic 4: Databases – SQL & NoSQL (18 Questions)**

## 1. Difference between SQL and NoSQL databases.

### Concepts

**SQL Databases**

- Relational databases
- Data stored in tables (rows & columns)
- Fixed schema
- Supports joins and ACID transactions

Examples: PostgreSQL, MySQL

**NoSQL Databases**

- Non-relational databases
- Flexible schema
- Data stored as documents, key-value, graph, or column-family
- Designed for scalability and distributed systems

Examples: MongoDB, Redis, Cassandra

**Key Differences**

| Feature     | SQL       | NoSQL                 |
| ----------- | --------- | --------------------- |
| Structure   | Tables    | Documents / Key-value |
| Schema      | Fixed     | Flexible              |
| Joins       | Supported | Usually avoided       |
| Scalability | Vertical  | Horizontal            |

---

### Code example, multiple

#### SQL Example (PostgreSQL)

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

SELECT * FROM users;
```

#### NoSQL Example (MongoDB)

```javascript
db.users.insertOne({
  name: "Tanish",
  email: "tanish@test.com",
});

db.users.find({});
```

---

### Interview ready answer

SQL databases are relational systems that store data in structured tables with fixed schemas and support complex joins and ACID transactions.
NoSQL databases are non-relational systems with flexible schemas designed for horizontal scalability and distributed architectures.
SQL is preferred for structured data and strong consistency, while NoSQL is useful for flexible data models and large-scale distributed systems.

---

## 2. When would you choose SQL over NoSQL and vice-versa?

### Concepts

**Choose SQL when:**

- Strong data consistency required
- Complex joins needed
- Structured relational data
- Financial systems or transactional systems

Example:
Banking systems, payment systems

**Choose NoSQL when:**

- Flexible schema required
- Large-scale distributed systems
- High write throughput
- Rapidly evolving data models

Example:
User activity logs, analytics systems

---

### Code example, multiple

#### SQL Example (Relational relationship)

```sql
SELECT orders.id, users.name
FROM orders
JOIN users ON orders.user_id = users.id;
```

#### NoSQL Example (Embedded document)

```javascript
{
  user: "Tanish",
  orders: [
    { product: "Laptop", price: 1200 },
    { product: "Mouse", price: 20 }
  ]
}
```

---

### Interview ready answer

SQL should be used when data relationships are complex and strong consistency is required, such as financial or transactional systems.
NoSQL is better for flexible schemas, high scalability, and large distributed workloads like logs, analytics, and real-time applications.

---

## 3. What is normalization? Why is it important?

### Concepts

Normalization is the process of organizing database tables to reduce redundancy and improve data integrity.

Goals:

- Eliminate duplicate data
- Ensure logical data organization
- Maintain consistency

Common Normal Forms:

1NF → Atomic columns
2NF → Remove partial dependency
3NF → Remove transitive dependency

Example:

Bad design:

```
Orders Table
UserName | UserEmail | Product
```

Better design:

```
Users Table
Orders Table
Products Table
```

---

### Code example, multiple

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

### Interview ready answer

Normalization is the process of structuring database tables to eliminate redundancy and maintain data integrity.
It organizes data into related tables using relationships like foreign keys, improving consistency and reducing anomalies during insert, update, and delete operations.

---

## 4. What are indexes? How do they improve performance?

### Concepts

An index is a data structure used by databases to quickly locate rows without scanning the entire table.

Without index → Full table scan
With index → Direct lookup using data structure like B-Tree

Benefits:

- Faster SELECT queries
- Efficient filtering and sorting
- Improved query performance

Trade-off:

- Extra storage
- Slower writes (INSERT/UPDATE)

---

### Code example, multiple

```sql
CREATE INDEX idx_users_email
ON users(email);
```

Query using index:

```sql
SELECT * FROM users
WHERE email = 'tanish@test.com';
```

---

### Interview ready answer

Indexes are special data structures that allow databases to quickly locate records without scanning the entire table.
They significantly improve read performance by enabling faster lookups, but they increase storage usage and can slightly slow down write operations.

---

## 5. Downsides of over-indexing.

### Concepts

While indexes improve read performance, too many indexes create problems.

Problems:

1. Slower INSERT operations
2. Slower UPDATE operations
3. Increased storage usage
4. Higher maintenance overhead
5. Query planner complexity

Example:

If a table has 10 indexes, every INSERT must update all 10 indexes.

---

### Code example, multiple

```sql
INSERT INTO users(name, email)
VALUES ('Tanish', 't@test.com');
```

This insert updates:

- Table data
- All related indexes

---

### Interview ready answer

Over-indexing slows down write operations because every insert, update, or delete must update all related indexes.
It also increases storage overhead and can complicate query optimization.
Indexes should be created only on frequently queried columns.

---

## 6. What are transactions? Explain ACID properties.

### Concepts

A transaction is a sequence of database operations executed as a single unit.

Example:

Money transfer between accounts.

ACID Properties:

**Atomicity**

- All operations succeed or none

**Consistency**

- Database remains in valid state

**Isolation**

- Concurrent transactions do not interfere

**Durability**

- Committed data persists even after crash

---

### Code example, multiple

```sql
BEGIN;

UPDATE accounts
SET balance = balance - 100
WHERE id = 1;

UPDATE accounts
SET balance = balance + 100
WHERE id = 2;

COMMIT;
```

---

### Interview ready answer

A transaction is a group of database operations executed as a single unit.
ACID properties ensure reliability: atomicity guarantees all-or-nothing execution, consistency maintains valid state, isolation prevents interference between concurrent transactions, and durability ensures committed data is permanently stored.

---

## 7. What is isolation level in databases?

### Concepts

Isolation level controls how transactions interact with each other.

Common problems:

- Dirty reads
- Non-repeatable reads
- Phantom reads

Isolation Levels:

1. Read Uncommitted
2. Read Committed
3. Repeatable Read
4. Serializable

Higher isolation → safer but slower.

---

### Code example, multiple

```sql
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
```

---

### Interview ready answer

Isolation levels define how visible uncommitted changes from one transaction are to another.
They control concurrency issues such as dirty reads, non-repeatable reads, and phantom reads.
Higher isolation improves data consistency but may reduce performance.

---

## 8. What are joins? Types of joins with use-cases.

### Concepts

Joins combine data from multiple tables based on relationships.

Types:

**INNER JOIN**

- Only matching records

**LEFT JOIN**

- All records from left table

**RIGHT JOIN**

- All records from right table

**FULL JOIN**

- All records from both tables

---

### Code example, multiple

```sql
SELECT users.name, orders.id
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

---

### Interview ready answer

Joins are used to combine related data from multiple tables using common keys.
Common types include INNER JOIN for matching records, LEFT JOIN for all records from the left table, RIGHT JOIN for the right table, and FULL JOIN for all records from both tables.

---

## 9. What is a foreign key? Why is it important?

### Concepts

A foreign key creates a relationship between two tables.

Example:

Orders table referencing Users table.

Benefits:

- Data integrity
- Prevent invalid references
- Enforce relational structure

---

### Code example, multiple

```sql
CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

### Interview ready answer

A foreign key is a column that references the primary key of another table.
It enforces relationships between tables and ensures referential integrity by preventing invalid or orphaned records.

---

## 10. What is database replication?

### Concepts

Replication means copying data from one database server to another.

Purpose:

- High availability
- Fault tolerance
- Read scalability

Types:

Primary → Write node
Replica → Read node

---

### Code example, multiple

Example architecture:

```
Primary DB (writes)
      |
Replica DB (reads)
```

---

### Interview ready answer

Database replication is the process of copying data from a primary database to one or more replicas.
It improves availability, enables read scaling, and provides redundancy in case of server failures.

---

## 11. Difference between replication and sharding.

### Concepts

**Replication**

- Copies same data across servers
- Improves availability and read performance

**Sharding**

- Splits data across servers
- Improves write scalability

---

### Code example, multiple

Replication:

```
Server1 → full copy
Server2 → full copy
```

Sharding:

```
Server1 → users 1–1M
Server2 → users 1M–2M
```

---

### Interview ready answer

Replication duplicates the same dataset across multiple servers for reliability and read scaling.
Sharding distributes different portions of the dataset across servers to improve write scalability and storage capacity.

---

## 12. What is sharding? How does it work?

### Concepts

Sharding divides large datasets into smaller pieces across multiple databases.

Each shard contains part of the data.

Sharding key determines where data goes.

Example shard key:

```
user_id
```

---

### Code example, multiple

Example distribution:

```
Shard 1 → user_id 1–1000
Shard 2 → user_id 1001–2000
Shard 3 → user_id 2001–3000
```

---

### Interview ready answer

Sharding is a horizontal scaling technique where large datasets are split across multiple database servers.
Each shard stores a subset of the data based on a shard key, enabling systems to handle massive data volumes and high traffic.

---

## 13. How do you design database schema for scale?

### Concepts

Strategies:

1. Proper indexing
2. Avoid unnecessary joins
3. Use partitioning
4. Optimize query patterns
5. Use caching (Redis)
6. Read replicas
7. Sharding if necessary

---

### Code example, multiple

Example index for scaling queries:

```sql
CREATE INDEX idx_orders_user
ON orders(user_id);
```

---

### Interview ready answer

To design schemas for scale, focus on efficient indexing, minimizing expensive joins, optimizing query patterns, and using techniques like caching, read replicas, and sharding.
Schema design should align with application access patterns to ensure high performance.

---

## 14. What is eventual consistency?

### Concepts

Eventual consistency means data may not be immediately consistent across distributed systems but will become consistent over time.

Example:

Replica databases may lag behind primary.

Used in:

- Distributed systems
- NoSQL databases
- High-scale systems

---

### Code example, multiple

Example scenario:

```
Write → Primary DB
Replica updated after few milliseconds
```

---

### Interview ready answer

Eventual consistency is a consistency model where updates propagate across distributed systems over time rather than instantly.
It allows high availability and scalability at the cost of temporary inconsistencies.

---

## 15. How do you handle migrations in production databases?

### Concepts

Safe migration strategies:

1. Backward-compatible changes
2. Add columns before removing
3. Run migrations gradually
4. Use migration tools

Tools:

- Prisma Migrate
- Flyway
- Liquibase

---

### Code example, multiple

```sql
ALTER TABLE users
ADD COLUMN phone VARCHAR(20);
```

---

### Interview ready answer

Production migrations should be backward-compatible and executed gradually to avoid downtime.
Best practices include adding new columns first, avoiding destructive changes, using migration tools, and validating changes in staging environments.

---

## 16. Difference between soft delete and hard delete.

### Concepts

**Hard Delete**

- Permanently removes record

**Soft Delete**

- Marks record as deleted using flag

Example column:

```
deleted_at
```

Benefits:

- Data recovery
- Audit history

---

### Code example, multiple

Soft delete example:

```sql
UPDATE users
SET deleted_at = NOW()
WHERE id = 5;
```

Query active users:

```sql
SELECT * FROM users
WHERE deleted_at IS NULL;
```

---

### Interview ready answer

Hard delete permanently removes records from the database, while soft delete marks records as deleted using a flag or timestamp.
Soft deletes allow recovery and auditing, making them useful for user accounts and important business data.

---

## 17. How do you prevent deadlocks in transactions?

### Concepts

Deadlock occurs when two transactions wait for each other indefinitely.

Prevention strategies:

1. Acquire locks in consistent order
2. Keep transactions short
3. Avoid unnecessary locks
4. Use lower isolation levels if possible

---

### Code example, multiple

Example strategy:

Always update tables in same order.

```
Transaction A → Users → Orders
Transaction B → Users → Orders
```

---

### Interview ready answer

Deadlocks occur when transactions wait for each other’s locks.
They can be prevented by maintaining consistent lock order, keeping transactions short, reducing lock scope, and optimizing queries to avoid long-running operations.

---

## 18. How do you design multi-tenant databases?

### Concepts

Multi-tenant system supports multiple customers using same infrastructure.

Design approaches:

1. Shared database, shared tables
2. Shared database, separate schemas
3. Separate database per tenant

Most common:

Shared tables with `tenant_id`.

---

### Code example, multiple

```sql
CREATE TABLE users (
  id INT,
  tenant_id INT,
  name VARCHAR(100)
);
```

Query tenant data:

```sql
SELECT * FROM users
WHERE tenant_id = 10;
```

---

### Interview ready answer

Multi-tenant databases allow multiple customers to share infrastructure while keeping their data isolated.
Common designs include shared tables with tenant identifiers, separate schemas, or separate databases per tenant depending on scalability, isolation, and operational requirements.
