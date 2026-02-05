## Question 1: What happens internally when you hit a URL in the browser and press Enter?

![What is URL](<https://media.geeksforgeeks.org/wp-content/uploads/20240123162739/url-parts-copy-(1).webp>)
![URL Components](https://i0.wp.com/abstrax.io/wp-content/uploads/2022/08/domain-name-format.png?resize=847%2C405&ssl=1)
![What happens when you type a URL into your browser? ](https://www.telecomhall.net/uploads/db2683/optimized/2X/1/1d4733dea9c3be0d18fdb0924009dec41e92d89d_2_690x495.jpeg)
![What happens when you type a URL into your browser?](https://substackcdn.com/image/fetch/$s_!k6D2!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F46eddbb4-b74a-4ee3-acde-e7999e040c74_1280x1664.webp)
![ByteByteGo | What Happens When You Type google.com Into a Browser?](https://assets.bytebytego.com/diagrams/0410-what-happens-when-you-type-google-in-your-browser.png)

### Concepts

When you press Enter after typing a URL, multiple systems work together to fetch and display the webpage. The flow is network-first, then server-side, then browser rendering.

**Step-by-step flow:**

1. **URL Parsing**
   - Browser splits the URL into protocol (https), domain, port, path, query.
   - Default port chosen (443 for HTTPS, 80 for HTTP).

2. **DNS Resolution**
   - Browser checks DNS cache → OS cache → router → ISP DNS.
   - Domain name is converted into an IP address.

3. **TCP Connection**
   - Browser establishes a TCP connection with the server IP.
   - Uses 3-way handshake (SYN → SYN-ACK → ACK).

4. **TLS Handshake (if HTTPS)**
   - SSL/TLS handshake happens.
   - Server sends certificate, browser verifies it.
   - Secure encrypted channel is created.

5. **HTTP Request**
   - Browser sends HTTP request (usually GET).
   - Includes headers (Host, User-Agent, Cookies, etc.).

6. **Server Processing**
   - Request hits load balancer → backend server.
   - Middleware runs (auth, logging, validation).
   - Route handler executes.
   - DB/cache calls if needed.
   - Server prepares response.

7. **HTTP Response**
   - Server sends status code, headers, and body (HTML/JSON).

8. **Browser Rendering**
   - HTML parsed → DOM created.
   - CSS parsed → CSSOM created.
   - JS executed.
   - DOM + CSSOM → Render Tree → Layout → Paint.

---

### Example Code Snippets

**Example 1: Simple HTTP request sent by browser**

```http
GET /products HTTP/1.1
Host: example.com
User-Agent: Chrome
Accept: text/html
```

**Example 2: Backend route handling (Node.js / Express)**

```js
app.get("/products", (req, res) => {
  // Server receives request
  // Processes logic or DB call
  res.status(200).send("<h1>Products Page</h1>");
});
```

**Example 3: HTTP response from server**

```http
HTTP/1.1 200 OK
Content-Type: text/html

<h1>Products Page</h1>
```

---

### Interview-Specific Answer

When a URL is entered, the browser resolves DNS to get the server IP, establishes a TCP and TLS connection, sends an HTTP request, the backend processes it, returns a response, and the browser parses HTML/CSS/JS to render the page.

## Question 2: What is an API endpoint and how is it different from a route?

### Concepts

An **API endpoint** is a complete URL where a client can access a specific backend functionality.
A **route** is the backend-side mapping that defines how requests to a path + HTTP method are handled.

**Key breakdown:**

- **Endpoint**
  - Client-facing
  - Full URL + HTTP method
  - Example: `GET https://api.example.com/users/1`
  - Represents _what_ client can access

- **Route**
  - Server-side definition
  - Path + HTTP method mapped to code
  - Example: `app.get('/users/:id', handler)`
  - Represents _how_ backend handles the request

**Relationship**

- Endpoint = Route + Domain + Protocol
- Multiple endpoints can point to different routes
- Route exists only inside backend code

---

### Example Code Snippets

**Example 1: API Endpoint (Client View)**

```text
GET https://api.myapp.com/users/42
```

**Example 2: Route Definition (Backend View)**

```js
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: "Tanish" });
});
```

**Example 3: Same route, different endpoint (environment based)**

```text
GET https://localhost:3000/users/42
GET https://api.myapp.com/users/42
```

---

### Interview-Specific Answer

An API endpoint is the full URL that clients call to access backend functionality, while a route is the backend-side definition that handles requests for a specific path and HTTP method.

## Question 3: Explain the complete HTTP request–response lifecycle.

### Concepts

The HTTP request–response lifecycle describes how a client (browser/app) communicates with a backend server to request data and receive a response.

**Step-by-step lifecycle:**

1. **Client Creates HTTP Request**
   - Client decides HTTP method (GET, POST, etc.).
   - Adds URL, headers, body (if required).

2. **DNS Resolution**
   - Domain name is resolved to an IP address.

3. **Connection Establishment**
   - TCP connection is created.
   - TLS handshake happens if HTTPS.

4. **Request Sent to Server**
   - Request reaches server or load balancer.
   - Forwarded to the correct backend instance.

5. **Middleware Execution**
   - Authentication, authorization, logging.
   - Validation and parsing of request data.

6. **Route Handler Execution**
   - Business logic runs.
   - Database, cache, or external API calls.

7. **Response Creation**
   - Server prepares status code, headers, body.
   - Data is serialized (JSON / HTML).

8. **Response Sent to Client**
   - Server sends HTTP response back.

9. **Client Processes Response**
   - Browser renders UI or app processes JSON.
   - JS callbacks / UI updates triggered.

---

### Example Code Snippets

**Example 1: HTTP Request**

```http
POST /login HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "email": "user@test.com",
  "password": "123456"
}
```

**Example 2: Backend Handling (Express)**

```js
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Business logic + DB check
  if (email === "user@test.com") {
    res.status(200).json({ token: "jwt-token" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});
```

**Example 3: HTTP Response**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "token": "jwt-token"
}
```

---

### Interview-Specific Answer

In the HTTP lifecycle, the client sends a request after DNS and connection setup, the server processes it through middleware and route logic, generates a response with status and data, and sends it back for the client to consume or render.

## Question 4: What does “stateless” mean in HTTP, and why was HTTP designed this way?

![“stateless” vs “statefull”](https://miro.medium.com/1*xYvS7mMWe-u3ehzm58O78A.png)

### Concepts

**Stateless** means **each HTTP request is independent**.
The server does **not remember** anything about previous requests from the same client.

**What this implies:**

- Every request must carry **all required information**
  - Authentication data (token/cookie)
  - Request data (params, body)

- Server does not rely on stored session context by default

**Example of stateless behavior:**

- Request 1: `GET /profile` → server responds
- Request 2: `GET /orders` → server has **no memory** of Request 1

If state is needed, it is:

- Sent by client every time (JWT, cookies)
- Or stored externally (Redis, DB)

**Why HTTP was designed stateless:**

1. **Scalability**
   - Any server can handle any request
   - Easy to add/remove servers

2. **Simplicity**
   - No session memory management at protocol level
   - Fewer side effects between requests

3. **Reliability**
   - Server crash does not break user flow
   - Requests can be retried safely

4. **Performance**
   - No per-client memory stored on server

---

### Example Code Snippets

**Example 1: Stateless request using JWT**

```http
GET /profile HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

**Example 2: Backend verifies token every request**

```js
app.get("/profile", (req, res) => {
  const token = req.headers.authorization;
  // Token is verified for every request
  res.json({ name: "Tanish" });
});
```

**Example 3: Stateful alternative (session-based)**

```js
req.session.userId = 42;
// Server stores session state (not stateless)
```

---

### Interview-Specific Answer

HTTP is stateless, meaning the server does not retain client context between requests. This design improves scalability, simplicity, and reliability, allowing any request to be handled independently by any server instance.

## Question 6: What are HTTP methods (GET, POST, PUT, PATCH, DELETE)? When should each be used?

### Concepts

**HTTP Methods** define **what action the client wants to perform on a resource** on the server.
They tell the backend **whether to read, create, update, or delete data** (for example: GET, POST, PUT, DELETE).

**GET**

- Used to **fetch data**
- Should not modify server state
- Safe and idempotent
- Data usually sent via query params

**POST**

- Used to **create a new resource**
- Not idempotent
- Sends data in request body
- Can change server state

**PUT**

- Used to **replace an entire resource**
- Idempotent
- Client sends full updated object

**PATCH**

- Used to **partially update a resource**
- Not strictly idempotent
- Client sends only changed fields

**DELETE**

- Used to **remove a resource**
- Idempotent
- Can be soft delete or hard delete

---

### Example Code Snippets

**Example 1: GET**

```http
GET /users/10 HTTP/1.1
```

```js
app.get("/users/:id", (req, res) => {
  res.json({ id: req.params.id, name: "Tanish" });
});
```

**Example 2: POST**

```http
POST /users HTTP/1.1
```

```js
app.post("/users", (req, res) => {
  res.status(201).json({ message: "User created" });
});
```

**Example 3: PUT vs PATCH**

```js
// PUT: full replacement
app.put("/users/:id", (req, res) => {
  res.json({ message: "User fully updated" });
});

// PATCH: partial update
app.patch("/users/:id", (req, res) => {
  res.json({ message: "User partially updated" });
});
```

---

### Interview-Specific Answer

GET fetches data, POST creates new resources, PUT replaces a resource completely, PATCH updates specific fields, and DELETE removes a resource. Method choice depends on whether data is being read, created, updated fully, updated partially, or removed.

## Question 7: Difference between PUT vs PATCH with real backend use-cases.

### Concepts

Both **PUT** and **PATCH** are used to update resources, but they differ in **update scope and intent**.

**PUT**

- Replaces the **entire resource**
- Client sends full object
- Missing fields may be overwritten or removed
- Idempotent

**PATCH**

- Updates **specific fields only**
- Client sends partial data
- Unchanged fields remain same
- Usually not idempotent

**Why this matters in backend**

- PUT needs full validation of all fields
- PATCH needs partial validation logic
- PATCH reduces payload size and risk of data loss

---

### Example Code Snippets

**Example 1: PUT (Full Update)**

```http
PUT /users/1
{
  "name": "Tanish",
  "email": "tanish@test.com",
  "age": 22
}
```

```js
app.put("/users/:id", (req, res) => {
  // Entire user object is replaced
  res.json({ message: "User replaced completely" });
});
```

**Example 2: PATCH (Partial Update)**

```http
PATCH /users/1
{
  "age": 23
}
```

```js
app.patch("/users/:id", (req, res) => {
  // Only age is updated
  res.json({ message: "User updated partially" });
});
```

**Example 3: Real-world use**

- PUT: Admin updating full user profile form
- PATCH: User updating only password or profile picture

---

### Interview-Specific Answer

PUT replaces the entire resource and expects a complete object, while PATCH updates only specific fields. PATCH is preferred for partial updates to avoid overwriting existing data.

## Question 8: What are HTTP status codes? Explain 2xx, 3xx, 4xx, 5xx with examples.

### Concepts

HTTP status codes are **standard response codes** sent by the server to indicate the **result of a client’s request**.

They are grouped by category:

---

**2xx – Success**

- Request was received, understood, and processed successfully.

Common codes:

- **200 OK** → Successful request
- **201 Created** → Resource created (POST)
- **204 No Content** → Success with no response body

---

**3xx – Redirection**

- Client must take additional action to complete request.

Common codes:

- **301 Moved Permanently** → URL permanently changed
- **302 Found** → Temporary redirect
- **304 Not Modified** → Cached response can be used

---

**4xx – Client Errors**

- Problem caused by client request.

Common codes:

- **400 Bad Request** → Invalid request data
- **401 Unauthorized** → Authentication required/failed
- **403 Forbidden** → Authenticated but not allowed
- **404 Not Found** → Resource does not exist
- **409 Conflict** → Resource state conflict

---

**5xx – Server Errors**

- Server failed to process valid request.

Common codes:

- **500 Internal Server Error** → Generic server failure
- **502 Bad Gateway** → Invalid upstream response
- **503 Service Unavailable** → Server overloaded/down
- **504 Gateway Timeout** → Upstream timeout

---

### Example Code Snippets

**Example 1: 2xx Success**

```js
res.status(200).json({ message: "Data fetched successfully" });
```

**Example 2: 4xx Client Error**

```js
res.status(401).json({ error: "Invalid token" });
```

**Example 3: 5xx Server Error**

```js
res.status(500).json({ error: "Something went wrong on server" });
```

---

### Interview-Specific Answer

HTTP status codes indicate request outcomes: 2xx for success, 3xx for redirection, 4xx for client-side errors, and 5xx for server-side failures. They help clients understand how to handle the response.

WOKRING EXAMPLE

##### **2xx – Success**

**Client:** “I requested some data.”
**Server:** “Request processed successfully, here is the result.”

**Example:**
Client → `GET /users/1`
Server → `200 OK` + user data

---

##### **3xx – Redirection**

**Client:** “Give me this resource.”
**Server:** “That resource has moved, go to a different URL.”

**Example:**
Client → `GET /old-login`
Server → `301 Moved Permanently` → `/login`
Client → Requests `/login`

---

##### **4xx – Client-side Error**

**Client:** “I sent a request.”
**Server:** “Your request is invalid or you are not allowed.”

**Example:**
Client → `GET /users/9999`
Server → `404 Not Found`
(Client asked for something that doesn’t exist)

---

##### **5xx – Server-side Failure**

**Client:** “My request is valid.”
**Server:** “Something broke on my side while processing it.”

**Example:**
Client → `POST /payment`
Server → `500 Internal Server Error`
(Database crashed or service failed)

---

##### **One-line intuition**

- **2xx:** “All good”
- **3xx:** “Go somewhere else”
- **4xx:** “You did something wrong”
- **5xx:** “I messed up”

## Question 9: What are request headers and response headers? Why are they important?

### Concepts

**Headers** are key–value metadata sent along with HTTP requests and responses.
They control **how data is sent, interpreted, secured, and cached**.

---

**Request Headers**

- Sent by client to server
- Describe request context and client capabilities

Common request headers:

- `Authorization` → Auth token
- `Content-Type` → Format of request body
- `Accept` → Expected response format
- `User-Agent` → Client information
- `Cookie` → Session/auth data

---

**Response Headers**

- Sent by server to client
- Describe response behavior and policies

Common response headers:

- `Content-Type` → Response format
- `Set-Cookie` → Store cookie on client
- `Cache-Control` → Caching rules
- `Access-Control-Allow-Origin` → CORS policy
- `Content-Length` → Size of response

---

**Why headers are important**

- Enable authentication & authorization
- Control caching and performance
- Enable CORS and security policies
- Define data formats clearly
- Support stateless communication

---

### Example Code Snippets

**Example 1: Request headers**

```http
GET /profile HTTP/1.1
Authorization: Bearer jwt-token
Accept: application/json
```

**Example 2: Response headers**

```http
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-store
```

**Example 3: Setting headers in backend**

```js
res.set("Cache-Control", "no-store");
res.json({ name: "Tanish" });
```

---

### Interview-Specific Answer

Request headers carry client and request metadata, while response headers define how the response should be handled. They are critical for security, caching, content negotiation, and stateless communication.

## Question 10: What is CORS? Why does it exist and how do you fix CORS issues?

### Concepts

**CORS (Cross-Origin Resource Sharing)** is a **browser security mechanism** that controls whether a frontend running on one origin can access resources from another origin.

**Origin = protocol + domain + port**

Example:

- `http://localhost:3000` ≠ `http://api.example.com`

---

**Why CORS exists**

- Prevents malicious websites from reading sensitive data
- Protects users from cross-site attacks
- Enforced by **browsers**, not servers

---

**How CORS works**

1. Browser sends request to different origin
2. For non-simple requests, browser sends **preflight request (OPTIONS)**
3. Server responds with CORS headers
4. Browser decides whether to allow or block request

---

**Important CORS headers**

- `Access-Control-Allow-Origin`
- `Access-Control-Allow-Methods`
- `Access-Control-Allow-Headers`
- `Access-Control-Allow-Credentials`

---

### Example Code Snippets

**Example 1: CORS error (browser blocked)**

```text
Blocked by CORS policy: No 'Access-Control-Allow-Origin' header
```

**Example 2: Fix CORS in Express (basic)**

```js
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
```

**Example 3: Manual CORS headers**

```js
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});
```

---

### Interview-Specific Answer

CORS is a browser security mechanism that restricts cross-origin requests. It exists to protect users from malicious sites, and CORS issues are fixed by configuring proper CORS headers on the backend.

## Question 11: What are cookies? How are they sent in HTTP requests?

### Concepts

**Cookies** are small key–value data stored in the browser and automatically sent with HTTP requests to the same domain.

**Why cookies are used**

- Session management
- Authentication
- User preferences
- Tracking

---

**How cookies are created**

- Server sends cookie using `Set-Cookie` header
- Browser stores it
- Browser automatically sends it on future requests

---

**How cookies are sent**

- Included in **request headers**
- Only sent to matching domain/path
- Controlled by security flags

---

**Important cookie attributes**

- `HttpOnly` → Not accessible via JS
- `Secure` → Sent only over HTTPS
- `SameSite` → Controls cross-site sending
- `Expires / Max-Age` → Lifetime

---

### Example Code Snippets

**Example 1: Server sets cookie**

```http
Set-Cookie: sessionId=abc123; HttpOnly; Secure
```

**Example 2: Cookie sent in request**

```http
GET /profile HTTP/1.1
Cookie: sessionId=abc123
```

**Example 3: Setting cookie in Express**

```js
res.cookie("sessionId", "abc123", {
  httpOnly: true,
  secure: true,
});
```

---

### Interview-Specific Answer

Cookies are small pieces of data stored in the browser and automatically sent with HTTP requests. They are commonly used for authentication and session management and are controlled using security flags like HttpOnly and Secure.

## Question 12: Difference between cookies, localStorage, and sessionStorage.

_Refer_

- [How Cookies and Sessions storage work?](https://newsletter.systemdesigncodex.com/p/cookies-and-sessions)
- [How many ways(Cookies, Local Storage & Session Storage) are there to store data in the browser](https://www.sabbirz.com/blog/cookies-local-storage--session-storage)

![Cookies vs Session](https://media.licdn.com/dms/image/v2/D5622AQEUiyfdIK5M7w/feedshare-shrink_800/B56ZQlurIRH0Ag-/0/1735799784010?e=2147483647&v=beta&t=tw21VeNAn5302E3D5wcvYHkaHuVzSBbGw5W0JBxMy6E)

### Concepts

Cookies, localStorage, and sessionStorage are **client-side storage mechanisms**, but they differ in **scope, lifetime, size, and usage**.

---

**Cookies**

- Sent automatically with every HTTP request
- Small size (~4KB)
- Can be accessed by server
- Used mainly for authentication/session
- Supports security flags (HttpOnly, Secure)

**localStorage**

- Stored in browser permanently (until cleared)
- Not sent with HTTP requests
- Larger size (~5–10MB)
- Accessible via JavaScript only
- Used for UI state, preferences

**sessionStorage**

- Stored per browser tab
- Cleared when tab is closed
- Not sent with HTTP requests
- Accessible via JavaScript only
- Used for temporary session data

---

**Key differences (backend perspective)**

- Cookies impact every request (performance + security)
- localStorage/sessionStorage are frontend-only
- Auth tokens in localStorage are vulnerable to XSS
- Cookies with HttpOnly are safer for auth

---

### Example Code Snippets

**Example 1: Cookie**

```http
Set-Cookie: token=abc123; HttpOnly; Secure
```

**Example 2: localStorage**

```js
localStorage.setItem("theme", "dark");
```

**Example 3: sessionStorage**

```js
sessionStorage.setItem("otpStep", "verified");
```

---

### Interview-Specific Answer

Cookies are server-accessible and sent with every request, while localStorage and sessionStorage are browser-only storage. localStorage persists long-term, sessionStorage lasts per tab, and cookies are mainly used for authentication and sessions.

## Question 13: What are webhooks? How do they work internally?

_Refer_

[EP65: What Is A Webhook](https://substackcdn.com/image/fetch/$s_!99Dy!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F70011917-41b3-470f-b888-96e8dda5bb1a_1441x1536.jpeg)
[Webhook vs. API: What's the difference and when should you use each one?](https://zapier.com/blog/webhook-vs-api/)
![webhooks vs API](https://images.ctfassets.net/lzny33ho1g45/5UrIAftDqQqfdEteoHgVQI/4ada8fc34fbcf012e730d0953dc8917f/webhook-vs-apis-differences.png?fm=webp)

### Concepts

**Webhooks** are a way for one system to **send real-time data to another system automatically** when an event occurs.

Instead of the client repeatedly asking (polling), the server **pushes data** to a predefined URL.

**Key idea**

- Event-driven communication
- Server → Server call
- Near real-time

---

**How webhooks work internally (step-by-step):**

1. **Webhook Registration**
   - Receiver provides a public URL to sender
   - Example: `https://myapp.com/webhooks/payment`

2. **Event Occurs**
   - Some action happens (payment success, user signup)

3. **Sender Triggers Webhook**
   - Sender creates HTTP request (usually POST)
   - Payload contains event data

4. **Webhook Delivery**
   - Request sent to receiver’s endpoint
   - Includes headers + payload + signature

5. **Verification & Processing**
   - Receiver verifies signature (security)
   - Processes event
   - Sends 2xx response

6. **Retry Logic**
   - If non-2xx response, sender retries

---

### Example Code Snippets

**Example 1: Webhook payload (Stripe-like)**

```http
POST /webhooks/payment HTTP/1.1
Content-Type: application/json

{
  "event": "payment.success",
  "amount": 500,
  "userId": 42
}
```

**Example 2: Webhook receiver (Express)**

```js
app.post("/webhooks/payment", (req, res) => {
  const event = req.body.event;

  if (event === "payment.success") {
    // Update DB, unlock feature
  }

  res.status(200).send("OK");
});
```

**Example 3: Signature verification (conceptual)**

```js
if (!isValidSignature(req)) {
  return res.status(401).send("Invalid webhook");
}
```

---

### Interview-Specific Answer

Webhooks are event-driven HTTP callbacks where one system sends data to another automatically when an event occurs. Internally, the sender triggers an HTTP request to a registered endpoint, and the receiver processes it after verification.

## Question 14: What is polling vs long polling vs WebSockets?

![](https://dz2cdn1.dzone.com/storage/temp/15389446-1637610523913.png)

### Concepts

These are **techniques for real-time or near real-time communication** between client and server.

---

**Polling**

- Client sends requests at fixed intervals
- Server responds immediately
- Many unnecessary requests

Flow:
Client → Request → Response → Wait → Repeat

Use-case:

- Simple status checks

---

**Long Polling**

- Client sends request
- Server holds request until data is available
- Responds once event happens
- Client immediately sends next request

Flow:
Client → Request → (wait) → Response → New Request

Use-case:

- Chat notifications
- Legacy real-time systems

---

**WebSockets**

- Persistent, full-duplex connection
- Server and client can push data anytime
- One connection, low latency

Flow:
Client ⇄ Server (open connection)

Use-case:

- Chat apps
- Live trading
- Multiplayer games

---

### Example Code Snippets

**Example 1: Polling**

```js
setInterval(() => {
  fetch("/status");
}, 5000);
```

**Example 2: Long Polling**

```js
app.get("/updates", async (req, res) => {
  await waitForEvent();
  res.json({ update: "new message" });
});
```

**Example 3: WebSocket**

```js
const ws = new WebSocket("ws://server");
ws.onmessage = (msg) => console.log(msg.data);
```

---

### Interview-Specific Answer

Polling repeatedly asks the server for updates, long polling waits until data is available before responding, and WebSockets maintain a persistent two-way connection for real-time communication.

## Question 15: How would you design a backend for real-time communication?

### Concepts

A real-time backend delivers **instant updates** from server to clients with **low latency**, **high concurrency**, and **reliability**.

**Core requirements**

- Persistent connections
- Event-driven updates
- Horizontal scalability
- Fault tolerance
- Message ordering (when needed)

---

**High-level design approach**

1. **Communication Layer**
   - Use **WebSockets** for bidirectional communication
   - HTTP only for initial handshake

2. **Connection Management**
   - Each client maintains a persistent connection
   - Connection mapped to user/session ID
   - Handle reconnects and heartbeats (ping/pong)

3. **Message Flow**
   - Client sends event → server receives
   - Server validates + processes
   - Broadcast or targeted push to clients

4. **Scalability**
   - Multiple backend instances
   - Use **Redis Pub/Sub** or **Kafka** for message fan-out
   - Load balancer with sticky sessions or connection-aware routing

5. **State Handling**
   - Keep servers stateless
   - Store session/user mapping in Redis
   - Message history in DB if required

6. **Reliability**
   - Acknowledgements
   - Retry on failure
   - Idempotent message handling

---

### Example Code Snippets

**Example 1: WebSocket server (Node.js)**

```js
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    // process message
    socket.broadcast.emit("message", data);
  });
});
```

**Example 2: Redis Pub/Sub for scaling**

```js
redisSub.subscribe("chat");

redisSub.on("message", (channel, msg) => {
  io.emit("message", msg);
});
```

**Example 3: Message persistence**

```js
// Save message to DB before broadcast
await Message.create({ userId, text });
```

---

### Interview-Specific Answer

I would use WebSockets for persistent connections, keep services stateless, use Redis or Kafka for cross-instance message broadcasting, and store minimal state externally to scale real-time communication reliably.

<!-- [TODO] -->

https://www.google.com/search?q=How+would+you+design+a+backend+for+real-time+communication%3F&sourceid=chrome&ie=UTF-8

## Question 16: What is REST? What are its core principles?

### Concepts

**REST (Representational State Transfer)** is an **architectural style** used to design **scalable and maintainable APIs**.
REST is not a protocol, it is a **set of constraints**.

**Core REST principles:**

1. **Client–Server Separation**
   - Frontend and backend are independent
   - Backend only exposes data via APIs
   - UI changes do not affect server logic

2. **Statelessness**
   - Each request contains all required information
   - Server does not store client session state
   - Improves scalability and reliability

3. **Resource-Based Design**
   - Everything is treated as a resource
   - Resources identified using URLs
   - Example: `/users`, `/orders/42`

4. **Uniform Interface**
   - Consistent API structure
   - Uses standard HTTP methods
   - Predictable request/response patterns

5. **Representation of Resources**
   - Resources are transferred as representations
   - Usually JSON or XML
   - Same resource, different formats possible

6. **Cacheability**
   - Responses can be cached
   - Improves performance and reduces load

7. **Layered System**
   - Client does not know internal architecture
   - Can have load balancers, gateways, proxies

---

### Example Code Snippets

**Example 1: Resource-based endpoint**

```http
GET /users/10
```

**Example 2: RESTful CRUD mapping**

```http
GET    /users        → fetch users
POST   /users        → create user
PUT    /users/10     → update user
DELETE /users/10     → delete user
```

**Example 3: Stateless request**

```http
GET /profile
Authorization: Bearer jwt-token
```

---

### Interview-Specific Answer

REST is an architectural style for designing APIs based on stateless, resource-oriented principles using standard HTTP methods, enabling scalable and maintainable backend systems.

### Standard HTTP Methods

**Standard HTTP methods** are predefined actions defined by the HTTP specification that tell the server **what operation to perform on a resource**.

**Main standard methods used in backend APIs:**

- **GET**
  - Retrieve data
  - No server-side change
  - Safe and idempotent

- **POST**
  - Create a new resource
  - Changes server state
  - Not idempotent

- **PUT**
  - Replace an entire resource
  - Idempotent

- **PATCH**
  - Partially update a resource
  - Usually not idempotent

- **DELETE**
  - Remove a resource
  - Idempotent

**Other standard but less-used methods:**

- **HEAD**
  - Same as GET but without response body
  - Used for metadata, health checks

- **OPTIONS**
  - Returns allowed methods for a resource
  - Used in CORS preflight

- **TRACE**
  - Debugging, echoes request back
  - Usually disabled for security

- **CONNECT**
  - Creates tunnel (used in HTTPS proxies)

---

**Interview-ready line**
Standard HTTP methods are predefined request types like GET, POST, PUT, PATCH, and DELETE that define how a client interacts with resources in a RESTful API.

## Question 17: Difference between REST and RPC style APIs.

### Concepts

Both **REST** and **RPC (Remote Procedure Call)** are API design styles, but they differ in **how actions are modeled and exposed**.

---

**REST**

- Resource-oriented
- Uses nouns (resources)
- Relies on standard HTTP methods
- Emphasizes uniform interface

Key idea:

> Operate on resources using HTTP semantics

Example resources:

- `/users`
- `/orders/42`

---

**RPC**

- Action-oriented
- Uses verbs (operations)
- HTTP is just a transport layer
- Method name defines the action

Key idea:

> Call a remote function like a local method

Example actions:

- `/createUser`
- `/getUserDetails`

---

**Core Differences**

- **API Structure**
  - REST: `/users/10`
  - RPC: `/getUser?id=10`

- **HTTP Method Usage**
  - REST: GET/POST/PUT/PATCH/DELETE have meaning
  - RPC: Mostly POST for everything

- **Caching**
  - REST: Easy with GET
  - RPC: Hard because actions are opaque

- **Scalability**
  - REST: Better fit for public, scalable APIs
  - RPC: Good for internal service-to-service calls

- **Flexibility**
  - REST: More predictable and standardized
  - RPC: Faster to design but tightly coupled

---

### Example Code Snippets

**Example 1: REST**

```http
GET /users/10
```

**Example 2: RPC**

```http
POST /getUser
{
  "userId": 10
}
```

**Example 3: Same operation comparison**

```text
REST → DELETE /users/10
RPC  → POST /deleteUser
```

---

### Interview-Specific Answer

REST is resource-based and uses standard HTTP methods, while RPC is action-based and models APIs as remote function calls. REST is preferred for public APIs, and RPC fits internal service communication.

## Question 18: What makes an API truly RESTful?

### Concepts

An API is **truly RESTful** when it **follows REST constraints consistently**, not just uses HTTP and JSON.

**Key characteristics of a RESTful API:**

1. **Resource-Oriented URLs**
   - Use nouns, not verbs
   - Each URL represents a resource
   - Example: `/users/42`, not `/getUser`

2. **Correct Use of HTTP Methods**
   - GET → read
   - POST → create
   - PUT → full update
   - PATCH → partial update
   - DELETE → remove

3. **Stateless Communication**
   - Every request contains all required context
   - No server-side session dependency

4. **Proper HTTP Status Codes**
   - 200, 201, 204 for success
   - 400, 401, 403, 404 for client errors
   - 500+ for server errors

5. **Uniform Interface**
   - Consistent request/response structure
   - Predictable patterns across endpoints

6. **Resource Representation**
   - Resources transferred as JSON/XML
   - Same resource, different representations possible

7. **Cacheability**
   - Responses define caching rules
   - Improves performance and scalability

8. **Layered Architecture**
   - Client does not know internal layers
   - Supports load balancers, gateways, proxies

---

### Example Code Snippets

**Example 1: RESTful endpoint**

```http
GET /orders/123
```

**Example 2: Proper method usage**

```http
POST /orders
PATCH /orders/123
DELETE /orders/123
```

**Example 3: Proper status codes**

```js
res.status(201).json({ orderId: 123 });
```

---

### Interview-Specific Answer

An API is truly RESTful when it is resource-based, stateless, uses correct HTTP methods and status codes, follows a uniform interface, supports caching, and hides internal architecture through layered design.

## Question 19: What is idempotency in REST APIs? Why is it important? [TODO]

### Concepts

**Idempotency** means **making the same request multiple times results in the same outcome on the server**.

Formally:

> An operation is idempotent if repeating it does not change the result after the first execution.

---

**Idempotent HTTP methods**

- **GET** → Always idempotent (read-only)
- **PUT** → Idempotent (replaces resource)
- **DELETE** → Idempotent (resource removed once)
- **POST** → Not idempotent (creates new resource each time)

---

**Why idempotency matters**

1. **Network failures**
   - Client may retry request
   - Idempotency prevents duplicate side effects

2. **Reliability**
   - Safe retries without data corruption

3. **Distributed systems**
   - Load balancers, retries, timeouts are common

4. **Payment & critical operations**
   - Prevent double charges or duplicate actions

---

### Example Code Snippets

**Example 1: Idempotent PUT**

```http
PUT /users/10
{
  "name": "Tanish"
}
```

Calling this multiple times keeps user in same state.

---

**Example 2: Non-idempotent POST**

```http
POST /orders
{
  "productId": 5
}
```

Calling this multiple times creates multiple orders.

---

**Example 3: Idempotency key (POST made safe)**

```http
POST /payments
Idempotency-Key: abc-123
```

```js
// Server stores key to prevent duplicate processing
```

---

### Interview-Specific Answer

Idempotency means multiple identical requests have the same effect as one. It is important to safely handle retries, avoid duplicate operations, and ensure reliability in distributed systems.

## Question 20: What are pagination strategies in APIs?

### Concepts

**Pagination** is used to **limit the amount of data returned per request** to improve performance, reduce payload size, and avoid server overload.

**Why pagination is needed**

- Large datasets cause slow responses
- High memory usage on server and client
- Bad user experience
- Network inefficiency

---

**Common pagination strategies:**

1. **Offset-based Pagination**
   - Uses `limit` and `offset`
   - Simple to implement
   - Performance degrades on large offsets

2. **Cursor-based Pagination**
   - Uses a cursor (last item ID / timestamp)
   - Stable and scalable
   - Slightly complex to implement

3. **Page-based Pagination**
   - Uses page number + page size
   - Internally converted to offset
   - Easy for UI but not efficient at scale

4. **Keyset Pagination**
   - Uses indexed column (id, createdAt)
   - Faster than offset
   - No random page jumps

---

### Example Code Snippets

**Example 1: Offset-based pagination**

```http
GET /users?limit=10&offset=20
```

```sql
SELECT * FROM users
LIMIT 10 OFFSET 20;
```

---

**Example 2: Page-based pagination**

```http
GET /users?page=3&pageSize=10
```

```text
offset = (page - 1) * pageSize
```

---

**Example 3: Cursor-based pagination**

```http
GET /users?cursor=lastUserId&limit=10
```

```sql
SELECT * FROM users
WHERE id > lastUserId
ORDER BY id
LIMIT 10;
```

---

### Interview-Specific Answer

Pagination strategies include offset-based, page-based, cursor-based, and keyset pagination. Offset is simple but slow at scale, while cursor-based pagination is more performant and preferred for large datasets.
