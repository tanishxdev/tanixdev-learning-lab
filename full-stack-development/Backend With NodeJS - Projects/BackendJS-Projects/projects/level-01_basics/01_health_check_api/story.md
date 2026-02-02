# LEVEL 01 — PROJECT 1

## Health Check API

---

## What we are building (big picture)

We are building a **very small backend server** that exposes **one endpoint**:

```
GET /health
```

When someone hits this endpoint, the server replies:

> “Yes, I am running.”

That’s it.

No database.
No authentication.
No extra logic.

This is the **“Hello World” of backend systems**.

---

## Why we are building this (important)

Before doing any real backend work, you must answer one basic question:

> “Is my server alive or dead?”

Every real backend system — small or huge — has a **health check endpoint**.

This project teaches you:

- How a backend server starts
- How a request reaches the server
- How a response is sent back

If this is not clear, **nothing else will feel stable later**.

---

## Real-life analogy (simple)

Think of a backend server like a **shop**.

Before customers enter, you ask:

- Is the shop open?
- Are lights on?
- Is staff present?

Health Check API = **shopkeeper saying “Yes, we’re open.”**

---

## Where this is used in real systems

- Load balancers check `/health`
- Cloud platforms monitor it
- DevOps teams rely on it
- Deployments fail if this endpoint fails

Even billion-user systems have this.

---

## Architecture we will follow (from day one)

Even for this tiny project, we will follow **proper backend structure**:

```
Route → Controller → Response
```

Why?
Because habits formed early decide your future quality.

---

# Step 1: Create the basic Express server

### What we are doing

We will:

- Create an Express server
- Make it listen on a port
- Confirm it starts correctly

No routes yet.

---

### Why this step exists

If the server itself doesn’t start:

- No API works
- No logic matters
- No testing is possible

This is the **foundation brick**.

---

### Intuition behind it

Backend = a program that:

1. Starts
2. Listens for requests
3. Sends responses

Right now, we are doing **only step 1 & 2**.

---

### Files involved

Create this folder and file:

```
BackendJS-Projects
└── projects
    └── level-01_basics
        └── 01_health_check_api
            └── app.js
```

We will add folders later.
Do not create anything extra now.

---

### Code: `app.js`

```js
// Import express
const express = require("express");

// Create an express application
const app = express();

// Define a port
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

### Explain the code (line by line)

```js
const express = require("express");
```

- We are importing the Express framework
- Express helps us handle HTTP requests easily

```js
const app = express();
```

- This creates our backend application
- Think of this as “opening the shop”

```js
const PORT = 3000;
```

- The door number of the shop
- Clients will knock on this port

```js
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

- Server starts listening for requests
- Callback confirms successful startup

---

### How to test this step

1. Open terminal
2. Go inside `01_health_check_api`
3. Run:

```
node app.js
```

If you see:

```
Server is running on port 3000
```

✅ Step 1 is successful.

No browser testing yet.

---

### Common mistakes beginners make

- Forgetting to install `express`
- Port already in use
- File not saved
- Running `node` from wrong folder

---

### Debugging tips

- If server doesn’t start, check terminal error
- If `express` not found → run:

  ```
  npm install express
  ```

- Restart server after every code change

---

### Interview insight (short)

**Q: What does `app.listen()` do?**
It starts the server and binds it to a port so it can accept incoming requests.

---

### Interview-style questions (based on this step)

1. **Why do we need a port in backend servers?**
   → To allow multiple applications to run on the same machine without conflict.

2. **What happens if two servers use the same port?**
   → The second one fails to start.

3. **Is Express required to create a server?**
   → No, Node.js has `http` module, but Express simplifies the process.

---

Good.
We move **slowly** and **one step only**.

---

# LEVEL 01 — PROJECT 1

## Health Check API

# Step 2: Add the `/health` endpoint (Route + Controller thinking)

---

## What we are doing

We will add **one API endpoint**:

```
GET /health
```

When a client hits this endpoint, the server will return a simple response saying:

> “Server is healthy”

This is the **actual Health Check API**.

---

## Why this step exists

A server that only starts is not enough.

We need:

- A way to **confirm from outside**
- A way for systems (or humans) to ask:

  > “Are you alive?”

This step introduces:

- Request handling
- Response sending
- HTTP basics

---

## Intuition behind it

Think again about the shop analogy:

- Step 1: Shop opens
- Step 2: Someone knocks on the door and asks
  “Are you open?”

The shopkeeper replies:

> “Yes, we’re open.”

That reply is the **response**.

---

## Backend thinking we introduce here

Even though this is tiny, mentally note the flow:

```
Client → Route → Response
```

Later this becomes:

```
Client → Route → Controller → Service → Model → Response
```

We are starting small.

---

## Files involved

We will **modify only one file**:

```
01_health_check_api/app.js
```

No new folders yet.

---

## Code: Update `app.js`

```js
// Import express
const express = require("express");

// Create an express application
const app = express();

// Define a port
const PORT = 3000;

// Health check route
app.get("/health", (req, res) => {
  // Send a simple JSON response
  res.status(200).json({
    status: "ok",
    message: "Server is healthy",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

## Explain the logic (slow and clear)

### Route definition

```js
app.get("/health", (req, res) => {
```

- `app.get` means: handle GET requests
- `/health` is the URL path
- `req` = incoming request
- `res` = outgoing response

This function runs **every time someone hits `/health`**.

---

### Sending the response

```js
res.status(200).json({
  status: "ok",
  message: "Server is healthy",
});
```

- `status(200)` means success
- `json()` sends structured data
- JSON is standard for backend communication

We return **data**, not UI.

---

## How to test this step

### Option 1: Browser

1. Start server:

   ```
   node app.js
   ```

2. Open browser
3. Go to:

   ```
   http://localhost:3000/health
   ```

You should see JSON output.

---

### Option 2: curl (recommended backend habit)

```
curl http://localhost:3000/health
```

---

## Request → Flow → Response (important)

```
Client sends GET /health
        ↓
Express matches /health route
        ↓
Route handler runs
        ↓
Response JSON sent back
```

This flow is the **heart of backend work**.

---

## Common mistakes

- Forgetting to restart server after code change
- Typing `/Health` instead of `/health`
- Missing `.json()` and using `.send()` incorrectly
- Server running on different port

---

## Debugging tips

- If browser keeps loading → server not running
- If 404 → route path mismatch
- If error in terminal → read top line first

---

## Interview insight (short)

**Q: Why do health check endpoints usually return 200?**
Because monitoring systems rely on HTTP status codes to decide if the server is healthy.

---

## Interview-style questions (based on this step)

1. **Why do we return JSON instead of plain text?**
   JSON is machine-readable and standard for backend communication.

2. **Can a health check endpoint do database checks?**
   Yes, but basic health checks usually keep it simple.

3. **What happens if `/health` returns 500?**
   Monitoring systems assume the server is unhealthy.

---

We stop here.

Do **not** add controllers or folders yet.

When you say **“next”**, we will move to **Step 3** and introduce **proper separation (routes folder + controller)** — still keeping it simple.

Good.
Now we take the **first real backend-architecture step**.

Still small. Still simple.
But this step changes how you **think**.

---

# LEVEL 01 — PROJECT 1

## Health Check API

# Step 3: Separate Route and Controller (Clean Thinking)

---

## What we are doing

Right now, everything is inside `app.js`.

We will now:

* Move **route logic** into a route file
* Move **response logic** into a controller file

This introduces **separation of concerns**.

No extra features.
Same behavior.
Cleaner structure.

---

## Why this step exists (very important)

In interviews, one of the first backend signals is:

> “Does this person mix everything in one file?”

Real backend systems separate:

* **What URL exists** (route)
* **What happens when it is hit** (controller)

Even for one endpoint, we build this habit.

---

## Intuition behind it

Real-life analogy:

* Route = Reception desk
  (“Someone came asking for `/health`”)

* Controller = Doctor
  (“Let me check and reply”)

The receptionist **does not do medical work**.

---

## Backend thinking introduced here

We move from:

```
Client → Route → Response
```

to:

```
Client → Route → Controller → Response
```

This prepares you for:

* Services
* Databases
* Auth
* Scaling

---

## Folder & file changes (VERY IMPORTANT)

Inside your project folder:

```
01_health_check_api/
├── app.js
├── routes/
│   └── health.routes.js
└── controllers/
    └── health.controller.js
```

Create folders **exactly like this**.

---

## Step 3.1: Create the controller

### File to create

```
controllers/health.controller.js
```

### What this file does

* Contains **only response logic**
* No routing
* No server setup

---

### Code: `health.controller.js`

```js
// Health check controller
// This function decides what response to send

const healthCheck = (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is healthy",
  });
};

module.exports = {
  healthCheck,
};
```

---

### Explain the logic

```js
const healthCheck = (req, res) => {
```

* This is a controller function
* It receives request and response objects
* It does **one job only**

```js
res.status(200).json(...)
```

* Controller decides the response
* Business logic lives here (even if simple)

```js
module.exports = { healthCheck };
```

* Makes this function usable by routes

---

## Step 3.2: Create the route file

### File to create

```
routes/health.routes.js
```

---

### Code: `health.routes.js`

```js
const express = require("express");
const router = express.Router();

// Import controller
const {
  healthCheck,
} = require("../controllers/health.controller");

// Define route
router.get("/health", healthCheck);

module.exports = router;
```

---

### Explain the logic

```js
const router = express.Router();
```

* Creates a mini router
* Keeps routes modular

```js
router.get("/health", healthCheck);
```

* URL mapping happens here
* Route does NOT handle logic
* It forwards request to controller

---

## Step 3.3: Connect route to app.js

### Modify file

```
app.js
```

---

### Updated `app.js`

```js
const express = require("express");
const app = express();

const PORT = 3000;

// Import routes
const healthRoutes = require("./routes/health.routes");

// Use routes
app.use("/", healthRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

## Request → Flow → Response (VERY IMPORTANT)

Now the real backend flow is visible:

```
Client
  ↓
/health
  ↓
health.routes.js
  ↓
health.controller.js
  ↓
JSON response
```

This flow is **interview gold**.

---

## How to test this step

Same as before:

```
node app.js
```

Then:

```
http://localhost:3000/health
```

Response should be **unchanged**.

If behavior changed → mistake.

---

## Common mistakes

* Wrong relative import paths
* Forgetting `module.exports`
* Typo in folder names
* Not restarting server

---

## Debugging tips

* If error says “function is not a function” → export/import issue
* If 404 → route not registered
* If crash on start → syntax error

---

## Interview insight (short)

**Q: Why separate routes and controllers?**
Because routing and business logic are different responsibilities.

---

## Interview-style questions (based on this step)

1. **Can we write logic directly in routes?**
   Yes, but it becomes unmaintainable as the app grows.

2. **What happens when endpoints increase to 100+?**
   Separation keeps code readable and testable.

3. **Is this pattern used in real apps?**
   Yes, almost universally.

---

We stop here.

This project is **complete enough for Level 01**.

When you say **“next”**, we will:

* Finalize this project with a clean **README.md**
* Then move to **Project 2: Counter API** (backend `useState` equivalent)
