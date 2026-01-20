# JavaScript Interview Questions and Answers

---

**Topic : Networking with JavaScript**

## **57. How do you make HTTP requests in JavaScript?**

---

### 1. Concept

An **HTTP request** is how JavaScript communicates with a **server** to:

- fetch data
- send data
- update data
- delete data

In JavaScript, HTTP requests are used for:

- APIs
- Backend communication
- Dynamic data loading (no page refresh)

At a high level:

> JavaScript sends a request → Server responds → JavaScript handles the response

---

### 2. Common Ways to Make HTTP Requests in JavaScript

There are **four main ways** interviewers expect you to know:

1. **Fetch API** (modern, preferred)
2. **XMLHttpRequest (XHR)** (older)
3. **Axios** (popular library)
4. **WebSockets** (real-time, not HTTP after handshake — covered later)

For this question, focus on **HTTP**, so first three.

---

### 3. Using the Fetch API (Modern Standard)

This is the **most important** answer.

#### Basic GET Request

```javascript
fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

What happens step-by-step:

1. `fetch()` sends an HTTP GET request
2. Server responds
3. `response.json()` parses JSON
4. Data is available in JS

---

#### Using `async / await` (Interview-Preferred)

```javascript
async function getUsers() {
  try {
    const response = await fetch("https://api.example.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

Interview line:

> `async/await` makes asynchronous HTTP code readable and easier to debug.

---

### 4. Making POST / PUT / DELETE Requests with Fetch

```javascript
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Tanish",
    age: 21,
  }),
});
```

Key things interviewers look for:

- `method`
- `headers`
- `body`
- `JSON.stringify()`

---

### 5. Using XMLHttpRequest (Older Way)

This is **legacy**, but interviewers still ask for comparison.

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/users");

xhr.onload = function () {
  console.log(xhr.responseText);
};

xhr.send();
```

Problems with XHR:

- Callback-based
- Verbose
- Harder error handling

Modern code avoids this.

---

### 6. Using Axios (Library-Based)

**Axios** is a popular third-party library.

```javascript
axios.get("https://api.example.com/users").then((response) => {
  console.log(response.data);
});
```

Why teams use Axios:

- Automatic JSON parsing
- Better error handling
- Request/response interceptors

Interview maturity line:

> Fetch is native and lightweight; Axios adds convenience features.

---

### 7. Browser vs Server (Important Distinction)

Where JS runs matters:

| Environment | HTTP Method              |
| ----------- | ------------------------ |
| Browser     | fetch, XMLHttpRequest    |
| Node.js     | fetch, axios, node http  |
| Backend     | axios, fetch, superagent |

Modern Node also supports `fetch`.

---

### 8. Error Handling (Interview Must Mention)

Fetch **does not reject on HTTP errors**.

```javascript
if (!response.ok) {
  throw new Error("Request failed");
}
```

Interviewers like when you mention this explicitly.

---

### 9. Common Interview Traps

❌ “fetch is synchronous”
✔ No — fetch is **asynchronous**

❌ “fetch automatically throws on 404”
✔ No — must check `response.ok`

❌ “XHR is obsolete everywhere”
✔ Legacy systems still use it

---

### 10. Interview-Ready Summary

HTTP requests in JavaScript are commonly made using the Fetch API, which provides a modern, promise-based way to communicate with servers. Older approaches include XMLHttpRequest, which is callback-based and more verbose. Libraries like Axios simplify HTTP requests by offering automatic JSON handling and better error management. In modern applications, `fetch` with `async/await` is the preferred approach.

---

### 11. Quick Practice Interview Questions

1. What is `fetch()`?
2. Is `fetch` synchronous or asynchronous?
3. How do you send data in a POST request?
4. Does `fetch` reject on HTTP 404?
5. Why is XMLHttpRequest considered legacy?
6. Why do teams use Axios?
7. What is the role of headers in HTTP requests?

---

## **58. What is the difference between XMLHttpRequest and Fetch API?**

---

### 1. Concept

Both **XMLHttpRequest (XHR)** and **Fetch API** are used to make **HTTP requests** from JavaScript, but they belong to **different generations** of the web.

Core interview framing:

> XMLHttpRequest is **older and callback-based**,
> Fetch API is **modern and promise-based**.

---

### 2. XMLHttpRequest (XHR) — The Old Way

XHR was the original way to make asynchronous HTTP requests in browsers.

#### Example (GET request)

```javascript
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.example.com/users");

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

xhr.send();
```

#### Problems with XHR

- Verbose syntax
- Callback-based (harder to read)
- Manual error handling
- Poor support for modern async patterns

---

### 3. Fetch API — The Modern Way

Fetch API was introduced to **simplify HTTP requests** and align with modern JavaScript.

#### Example (GET request)

```javascript
fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

Or interview-preferred style:

```javascript
async function getUsers() {
  const response = await fetch("https://api.example.com/users");
  const data = await response.json();
  console.log(data);
}
```

---

### 4. Key Differences (Interview Table)

| Aspect            | XMLHttpRequest | Fetch API                       |
| ----------------- | -------------- | ------------------------------- |
| Syntax            | Verbose        | Clean & simple                  |
| Async handling    | Callbacks      | Promises / async–await          |
| Readability       | Low            | High                            |
| JSON parsing      | Manual         | Built-in (`response.json()`)    |
| Error handling    | Manual         | Cleaner but needs `response.ok` |
| Streaming support | No             | Yes                             |
| Modern standard   | No             | Yes                             |

---

### 5. Error Handling Difference (Very Important)

#### XMLHttpRequest

```javascript
if (xhr.status !== 200) {
  console.error("Error");
}
```

#### Fetch API (Common Trap)

```javascript
fetch(url).then((response) => {
  if (!response.ok) {
    throw new Error("HTTP error");
  }
});
```

Interview must-know:

> Fetch **does NOT reject promises** on HTTP errors like 404 or 500.

---

### 6. Promise vs Callback (Conceptual Difference)

**XHR (callback-based)**
Harder to compose multiple async operations.

**Fetch (promise-based)**
Easier chaining and better readability.

Example:

```javascript
fetch(url)
  .then((r) => r.json())
  .then((data) => process(data))
  .catch((err) => handle(err));
```

This is much cleaner than nested callbacks.

---

### 7. Streaming and Modern Features

Fetch supports:

- Streaming responses
- Request/response cloning
- Better integration with Service Workers

XHR does **not** support these modern capabilities.

---

### 8. Browser Support & Usage Today

- XHR → legacy systems, older codebases
- Fetch → modern browsers, modern frameworks

Interview maturity line:

> XHR is still supported, but Fetch is the recommended standard.

---

### 9. Common Interview Traps

❌ “Fetch replaces XHR completely”
✔ Fetch is preferred, but XHR still exists

❌ “Fetch handles errors automatically”
✔ You must check `response.ok`

❌ “XHR is synchronous by default”
✔ XHR can be async or sync (sync is deprecated)

---

### 10. Interview-Ready Summary

XMLHttpRequest is an older, callback-based API for making HTTP requests and requires verbose syntax and manual handling of responses and errors. The Fetch API is a modern, promise-based approach that provides cleaner syntax, better readability, and native support for async/await and streaming. While XMLHttpRequest still exists for legacy reasons, Fetch is the preferred choice in modern JavaScript applications.

---

### 11. Quick Practice Interview Questions

1. Why is Fetch preferred over XMLHttpRequest?
2. Is Fetch promise-based or callback-based?
3. Does Fetch reject on HTTP 404?
4. Which one supports streaming?
5. Can XHR still be used today?
6. What makes Fetch more readable?
7. What is a common Fetch API trap?

---

## **59. What is AJAX, and how does it work?**

---

### 1. Concept

**AJAX** stands for **Asynchronous JavaScript and XML**.

It is **not a library or framework** — it is a **technique** that allows a web page to:

> Communicate with a server **in the background**
> **without reloading the entire page**

This is a **classic interview question** to test understanding of **async networking**.

---

### 2. The Core Idea (Simple Mental Model)

Before AJAX:

```
User action → Page reload → New HTML from server
```

With AJAX:

```
User action → JS sends request → Server responds → JS updates UI
(no page reload)
```

This is what makes web apps feel **fast and interactive**.

---

### 3. Why It’s Called “AJAX” (Interview Awareness)

- **A** → Asynchronous
- **J** → JavaScript
- **A** → And
- **X** → XML (historical, not required today)

Important interview clarification:

> Despite the name, AJAX **does not require XML**.
> Today, **JSON** is used almost everywhere.

---

### 4. How AJAX Works (Step-by-Step Flow)

1. User performs an action (click, scroll, submit)
2. JavaScript creates an HTTP request
3. Request is sent **asynchronously**
4. Server processes request
5. Server sends response (usually JSON)
6. JavaScript updates the DOM dynamically

Key point:

> The browser does **not reload the page** during this process.

---

### 5. AJAX Using XMLHttpRequest (Classic Way)

```javascript
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.example.com/users");

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};

xhr.send();
```

This is **traditional AJAX**.

Problems:

- Verbose
- Callback-heavy
- Harder to maintain

---

### 6. AJAX Using Fetch API (Modern Way)

```javascript
fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Or interview-preferred:

```javascript
async function loadUsers() {
  const response = await fetch("https://api.example.com/users");
  const data = await response.json();
  console.log(data);
}
```

Important interview line:

> Fetch-based requests are also AJAX — AJAX is the concept, not the API.

---

### 7. Common Use Cases of AJAX

AJAX is used for:

- Loading data without page refresh
- Form submission
- Search suggestions
- Infinite scrolling
- Real-time UI updates
- Single Page Applications (SPAs)

Example:

- You scroll → new data loads
- You submit a form → success message shows without reload

---

### 8. Synchronous vs Asynchronous (Very Important)

AJAX requests are **asynchronous by default**.

Meaning:

- Page does not freeze
- UI remains responsive
- JS continues executing

Blocking (synchronous) requests are **deprecated** and bad practice.

---

### 9. Common Interview Traps

❌ “AJAX is a library”
✔ No — it’s a technique

❌ “AJAX requires XML”
✔ No — JSON is standard now

❌ “Fetch is not AJAX”
✔ Fetch **is a modern way to do AJAX**

❌ “AJAX reloads part of the page”
✔ AJAX updates DOM via JavaScript, not reloads

---

### 10. Interview-Ready Summary

AJAX is a technique that allows JavaScript to send and receive data from a server asynchronously without reloading the web page. It works by sending background HTTP requests, processing the server’s response, and dynamically updating the DOM. Originally built using XMLHttpRequest, modern AJAX is commonly implemented using the Fetch API with JSON data.

---

### 11. Quick Practice Interview Questions

1. What does AJAX stand for?
2. Is AJAX a library or a technique?
3. Does AJAX require XML?
4. How does AJAX improve user experience?
5. Can Fetch be used for AJAX?
6. What happens if AJAX requests are synchronous?
7. Where is AJAX commonly used?

---

## **60. How do you use WebSockets in a web application?**

---

### 1. Concept

**WebSockets** provide a **persistent, full-duplex communication channel** between the client and the server over a **single TCP connection**.

Core idea (interview one-liner):

> WebSockets allow **real-time, two-way communication** without repeatedly sending HTTP requests.

Unlike HTTP (request → response), WebSockets keep the connection **open**.

---

### 2. Why WebSockets Are Needed

Problem with HTTP / AJAX polling:

- Client must keep asking the server
- Delays and unnecessary network usage
- Poor for real-time updates

WebSockets solve this by enabling:

- Instant server → client messages
- Lower latency
- Efficient real-time systems

---

### 3. Where WebSockets Are Used (Interview Context)

Common real-world use cases:

- Chat applications
- Live notifications
- Multiplayer games
- Stock / crypto price updates
- Collaborative editors
- Real-time dashboards

Interview line:

> If data needs to update **continuously**, WebSockets are preferred.

---

### 4. How WebSockets Work (Step-by-Step)

1. Client sends an **HTTP request** asking to upgrade to WebSocket
2. Server accepts and upgrades the protocol
3. A **persistent connection** is established
4. Both sides can send messages **anytime**
5. Connection stays open until closed explicitly

Important clarification:

> WebSockets start as HTTP, then switch to a different protocol.

---

### 5. Using WebSockets in the Browser (Native API)

#### Client-Side Example

```javascript
const socket = new WebSocket("wss://example.com/socket");

// Connection opened
socket.onopen = () => {
  console.log("Connected to server");
  socket.send("Hello Server");
};

// Receive messages
socket.onmessage = (event) => {
  console.log("Message from server:", event.data);
};

// Handle errors
socket.onerror = (error) => {
  console.error("WebSocket error", error);
};

// Connection closed
socket.onclose = () => {
  console.log("Connection closed");
};
```

Key things interviewers expect:

- `onopen`
- `onmessage`
- `send()`
- `onclose`

---

### 6. Server-Side WebSocket (Conceptual)

On the server, you typically:

- Accept WebSocket connections
- Listen for messages
- Broadcast or respond to clients

Example (conceptual):

```text
Client A → Server → Client B
```

This enables **real-time broadcasting**.

---

### 7. Using WebSockets with Libraries (Production Reality)

Most production apps use libraries like **Socket.IO**.

Why?

- Automatic reconnection
- Fallbacks (polling if WS fails)
- Rooms & namespaces
- Easier API

#### Example (Client)

```javascript
const socket = io("https://example.com");

socket.emit("message", "Hello");

socket.on("reply", (data) => {
  console.log(data);
});
```

Interview maturity line:

> Native WebSockets are low-level; libraries handle reliability and scaling.

---

### 8. WebSockets vs HTTP (Interview Comparison)

| Feature    | HTTP        | WebSocket  |
| ---------- | ----------- | ---------- |
| Connection | Short-lived | Persistent |
| Direction  | One-way     | Two-way    |
| Latency    | Higher      | Very low   |
| Real-time  | Poor        | Excellent  |
| Overhead   | High        | Low        |

---

### 9. Security & Performance Notes (Bonus Points)

- Use **`wss://`** (secure WebSockets)
- Handle connection drops
- Limit message size
- Authenticate users during handshake

Interviewers like when you mention **security awareness**.

---

### 10. Common Interview Traps

❌ “WebSockets replace HTTP”
✔ No — they **complement** HTTP

❌ “WebSockets are only frontend”
✔ Backend support is required

❌ “AJAX and WebSockets are same”
✔ AJAX = request/response, WebSocket = persistent channel

---

### 11. Interview-Ready Summary

WebSockets are used in web applications to enable persistent, real-time, two-way communication between the client and server. After an initial HTTP handshake, a WebSocket connection remains open, allowing both sides to send messages at any time. WebSockets are ideal for real-time features such as chat, notifications, and live updates, and are often implemented using libraries like Socket.IO for better reliability and scalability.

---

### 12. Quick Practice Interview Questions

1. What problem do WebSockets solve?
2. How are WebSockets different from HTTP?
3. Why do WebSockets start with HTTP?
4. What is full-duplex communication?
5. When should WebSockets be avoided?
6. Why use Socket.IO instead of native WebSockets?
7. How do you secure WebSocket connections?

---
