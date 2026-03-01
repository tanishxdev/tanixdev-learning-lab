# **Topic 1: HTTP, Web & Networking Fundamentals (15 Questions)**

## 1. What happens internally when you hit a URL in the browser and press Enter?

![](https://assets.bytebytego.com/diagrams/0410-what-happens-when-you-type-google-in-your-browser.png)

### Concepts

1. **DNS Resolution** – Browser converts domain name (google.com) → IP address using DNS server.
2. **TCP Handshake** – 3-way handshake (SYN → SYN-ACK → ACK) to establish connection.
3. **TLS Handshake (if HTTPS)** – Encryption keys exchanged securely.
4. **HTTP Request Sent** – Browser sends GET request to server.
5. **Server Processing** – Backend handles request (routes → controller → DB).
6. **HTTP Response** – Server returns HTML/CSS/JS with status code (200, 404, etc).
7. **Browser Rendering** – Browser parses HTML → builds DOM → renders page.

---

### Code example, multiple

#### Example 1 — Basic Node.js HTTP Server

```cpp
// This is NOT C++ code execution server.
// This is a conceptual example using Node.js-like backend behavior.
// C++ cannot directly act as HTTP server without libraries.
// Just for understanding lifecycle.
```

#### Example 2 — Express Backend Example

```cpp
// Conceptual flow of backend handling request

// Step 1: Client sends GET /users

// Step 2: Server route handles request
// GET /users

// Step 3: Controller logic runs
// Fetch users from database

// Step 4: Send JSON response

// Response:
// Status: 200 OK
// Body: { users: [...] }
```

---

### Interview ready answer

When a user enters a URL:

First, the browser resolves the domain using DNS to get the server IP.
Then TCP connection is established using 3-way handshake.
If HTTPS, TLS handshake secures the communication.
Browser sends an HTTP request.
Server processes it through routing, business logic, and database access.
Server sends back an HTTP response with status code and data.
Finally, browser renders the response into a visible web page.

This entire process usually happens within milliseconds.

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

HTTP

- Data sent in plain text
- Not secure

HTTPS

- HTTP over SSL/TLS
- Encrypted communication

TLS High-Level Flow:

1. Client sends hello
2. Server sends certificate
3. Client verifies certificate
4. Session key generated
5. Encrypted communication starts

---

### Code example, multiple

#### Example — HTTPS Usage

```
http://example.com   → Not secure
https://example.com  → Secure (encrypted)
```

---

### Interview ready answer

HTTP sends data in plain text, while HTTPS encrypts communication using SSL/TLS.
During TLS handshake, client verifies server certificate, generates session key, and establishes encrypted communication channel.
HTTPS ensures confidentiality, integrity, and authenticity of data.

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
