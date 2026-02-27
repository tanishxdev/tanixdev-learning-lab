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

## 16. What is REST? What are its core principles?

### Concepts

REST = Representational State Transfer

Architectural style for designing networked applications.

Core Principles:

1. Client–Server Architecture
2. Statelessness
3. Cacheable
4. Uniform Interface
5. Layered System
6. Resource-based URLs

REST uses HTTP methods to operate on resources.

Example:

- `/users`
- `/orders/1`

---

### Code example, multiple

```cpp id="rest01"
// RESTful route example

// GET - fetch resource
app.get("/users", (req, res) => {
    res.json([{ id: 1, name: "Tanish" }]);
});

// POST - create resource
app.post("/users", (req, res) => {
    res.status(201).json({ message: "User created" });
});
```

---

### Interview ready answer

REST is an architectural style for designing APIs based on resources.
It follows principles like statelessness, client-server separation, uniform interface, and resource-based URLs.
REST APIs use standard HTTP methods like GET, POST, PUT, DELETE to perform operations on resources.

---

## 17. Difference between REST and RPC style APIs.

### Concepts

REST:

- Resource-based
- Uses nouns
- Uses HTTP methods properly

RPC:

- Action-based
- Uses verbs
- Endpoint defines action

Example:

REST:

```
GET /users
POST /users
```

RPC:

```
POST /getUsers
POST /createUser
```

Difference:
REST focuses on resources.
RPC focuses on actions.

---

### Code example, multiple

```cpp id="rest02"
// REST style
app.get("/users", handler);

// RPC style
app.post("/getUsers", handler);
```

---

### Interview ready answer

REST is resource-oriented and uses standard HTTP methods to operate on resources.
RPC is action-oriented and defines endpoints based on operations.
REST is more standardized and scalable, while RPC is simpler but less uniform.

---

## 18. What makes an API truly RESTful?

### Concepts

To be RESTful, API must:

1. Follow resource-based naming
2. Use correct HTTP methods
3. Be stateless
4. Return proper status codes
5. Support caching
6. Maintain uniform interface

Bad Example:

```
POST /deleteUser
```

Good Example:

```
DELETE /users/1
```

---

### Code example, multiple

```cpp id="rest03"
// Proper RESTful design

app.get("/users/:id", getUser);
app.post("/users", createUser);
app.put("/users/:id", replaceUser);
app.delete("/users/:id", deleteUser);
```

---

### Interview ready answer

An API is truly RESTful if it follows resource-based URLs, uses correct HTTP methods, is stateless, returns proper status codes, and maintains uniform interface.
It should treat everything as a resource and use standard HTTP semantics.

---

## 19. What is idempotency in REST APIs? Why is it important?

### Concepts

Idempotent = Multiple identical requests produce same result.

Examples:

GET → idempotent
PUT → idempotent
DELETE → idempotent
POST → not idempotent

Example:

DELETE /users/1 called multiple times
First call → deletes
Next calls → still deleted

Why important?

- Retry safety
- Network reliability
- Distributed systems stability

---

### Code example, multiple

```cpp id="rest04"
// Idempotent DELETE
app.delete("/users/:id", (req, res) => {

    // Delete operation
    // If already deleted, still return success

    res.status(200).json({ message: "Deleted" });
});
```

---

### Interview ready answer

Idempotency means performing the same request multiple times results in the same outcome.
It is important for retry mechanisms and network failures.
GET, PUT, and DELETE are idempotent, while POST is generally not.

---

## 20. How do you design clean and consistent API endpoints?

### Concepts

Best Practices:

1. Use nouns, not verbs
2. Use plural resource names
3. Use proper HTTP methods
4. Keep consistent naming
5. Version APIs
6. Use proper status codes

Good:

```
GET /users
GET /users/1
POST /users
```

Bad:

```
GET /getAllUsers
POST /createNewUser
```

---

### Code example, multiple

```cpp id="rest05"
// Clean endpoint design

app.get("/api/v1/users", getUsers);
app.get("/api/v1/users/:id", getUser);
app.post("/api/v1/users", createUser);
app.patch("/api/v1/users/:id", updateUser);
app.delete("/api/v1/users/:id", deleteUser);
```

---

### Interview ready answer

To design clean APIs, use nouns for resources, follow consistent naming conventions, use correct HTTP methods, return proper status codes, and version your APIs.
Consistency improves readability, maintainability, and scalability.
