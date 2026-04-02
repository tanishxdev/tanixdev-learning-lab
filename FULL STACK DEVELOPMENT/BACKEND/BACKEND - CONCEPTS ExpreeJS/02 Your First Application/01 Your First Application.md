# PHASE 2 — YOUR FIRST APPLICATION

---

# 1. MENTAL MODEL FIRST (VERY IMPORTANT)

Before writing code, understand the flow.

When someone types:

```
http://localhost:3000/
```

This happens:

```
Browser
   ↓
TCP Connection
   ↓
Node HTTP Server
   ↓
Express App Function
   ↓
Route Match?
   ↓
Handler Function
   ↓
Response Sent
   ↓
Browser Displays Result
```

Your job in Phase 2:

Understand how request travels and how response comes back.

---

# 2. STEPS TO CREATE EXPRESS APPLICATION

## Step 1 — Create Project Folder

```bash
mkdir express-app
cd express-app
```

---

## Step 2 — Initialize Node Project

```bash
npm init -y
```

Why?

Because:

- Creates package.json
- Manages dependencies
- Tracks installed packages

---

## Step 3 — Install Express

```bash
npm install express
```

What happens internally?

- Downloads express package
- Stores inside node_modules
- Adds to dependencies in package.json

---

## Step 4 — Create Entry File

Create:

```
index.js
```

---

# 3. FIRST EXPRESS PROGRAM (FULLY COMMENTED)

```js
// STEP 1: Import express package
// require() loads the module from node_modules
// Express exports a function
const express = require("express");

// STEP 2: Call express() to create app instance
// express() returns an application object
// This app is actually a function with extra methods
const app = express();

// STEP 3: Define a route
// app.get() registers a GET route
// First argument: URL path
// Second argument: callback function (handler)
app.get("/", (req, res) => {
  // res.send() sends response to client
  // Automatically sets:
  // - Status Code: 200
  // - Content-Type header
  // - Ends the response
  res.send("Welcome to Express Phase 2");
});

// STEP 4: Start the server
// app.listen() starts HTTP server
// First argument: port number
// Second argument: callback when server starts
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

---

# 4. WHAT EACH LINE REALLY MEANS

---

## require('express')

Why?

Because Express module exports a function.

Internally Express does:

```js
module.exports = createApplication;
```

So when you write:

```js
const express = require("express");
```

Now:

express === function

---

## express()

Why call it?

Because it creates:

- Middleware stack
- Routing table
- App configuration
- Settings object

So:

```js
const app = express();
```

Now app is:

- A function (request handler)
- With methods like app.get(), app.post(), app.use()

Important:

app itself can be passed to:

```js
http.createServer(app);
```

---

## app.get()

What it does:

Registers a route inside internal routing stack.

Internally Express stores something like:

```
[
  { method: 'GET', path: '/', handler: function }
]
```

So when request comes, Express:

- Checks method
- Checks path
- If matches → executes handler

---

## app.listen()

What it really does internally:

```js
const http = require("http");
http.createServer(app).listen(3000);
```

Important understanding:

Express does NOT replace Node HTTP.

It wraps it.

---

# 5. REQUEST & RESPONSE BASICS

When browser hits:

```
GET /
```

Express gives you:

```js
(req, res);
```

---

## req (Request Object)

Contains:

- req.method → GET
- req.url → /
- req.headers
- req.body (if parsed)
- req.params
- req.query

Represents data coming FROM client.

---

## res (Response Object)

Used to send data TO client.

Common methods:

- res.send()
- res.json()
- res.status()
- res.end()

---

Example:

```js
app.get("/user", (req, res) => {
  console.log(req.method); // GET
  console.log(req.url); // /user

  res.json({
    name: "Tanish",
    role: "Backend Engineer",
  });
});
```

---

# 6. HOW REQUEST HITS SERVER (STEP BY STEP)

Let’s simulate.

User types:

```
http://localhost:3000/
```

Step 1:
Browser creates TCP connection.

Step 2:
Node HTTP server receives request.

Step 3:
HTTP server calls Express app function.

Step 4:
Express checks middleware stack.

Step 5:
Express checks route stack.

Step 6:
Matching route found → handler runs.

Step 7:
res.send() sends response.

Step 8:
Connection closed.

---

# 7. REAL WORLD CASE

Suppose you build Login API:

```js
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@test.com" && password === "1234") {
    res.send("Login Success");
  } else {
    res.status(401).send("Invalid Credentials");
  }
});
```

Frontend sends:

```
POST /login
```

Server responds.

This is backend API.

---

# 8. WHY THIS DESIGN? (IMPORTANT)

Express is:

Minimal and unopinionated.

Meaning:

It gives you building blocks.
It does not force structure.

This is why large companies use it.

---

# 9. COMMON BEGINNER MISTAKES

1. Forgetting app.listen()
2. Using wrong port
3. Forgetting to install express
4. Not restarting server after changes
5. Thinking Express replaces Node

---

# 10. ADVANTAGES OF THIS SIMPLE SETUP

- Very small code
- Easy to understand
- Scalable
- Fast setup
- Easy debugging

---

# 11. LIMITATIONS

– No structure by default
– Can become messy in big apps
– Needs proper architecture planning

---

# 12. INTERVIEW QUESTIONS (PHASE 2 LEVEL)

### Basic

1. What does express() return?
2. What does app.listen() do internally?
3. Difference between res.send() and res.json()?
4. What is req and res?

---

### Intermediate

5. How does Express match routes?
6. What happens if no route matches?
7. Can Express app be passed to http.createServer?
8. Is Express single-threaded?

---

### Advanced

9. Why Express app is a function?
10. How does Express internally manage middleware stack?

---

# 13. INTERVIEW ANSWER TEMPLATE

If asked:

Explain request flow in Express.

Answer:

When a client sends a request, Node’s HTTP server receives it and passes the request and response objects to the Express application function. Express then processes the request through its middleware stack and route handlers. If a matching route is found, the handler executes and sends a response using methods like res.send(). If no route matches, Express returns a 404 response.

---

# 14. FINAL GOAL CHECK

After Phase 2 you must clearly know:

- Express is wrapper over HTTP
- app is function
- app.listen creates HTTP server
- Routes are stored internally
- req = incoming data
- res = outgoing data
- Flow of request-response
