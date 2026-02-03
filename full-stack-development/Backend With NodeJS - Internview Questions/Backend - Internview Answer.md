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
