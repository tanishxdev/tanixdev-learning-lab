# Node Core Foundations

## 🎯 Project Goal
Remove the fear that "Node.js is magic" by understanding its core modules and execution model.

> **Key Insight:** If Node core is clear, everything later (Express, Nest, Bun) becomes logical instead of memorized.

---

## 🚀 Quick Start

### Run Each Core Module Demo
```bash
node index.js              # Node runtime basics
node fs-demo.js           # File system operations
node os-demo.js           # System information
node http-server.js       # Basic HTTP server
```

### Start the HTTP Server
```bash
node http-server.js
```
Then visit: `http://localhost:3000`

---

## 📁 Project Structure
```
node-core-playground/
├── index.js              # Node runtime basics
├── fs-demo.js           # File system experiments
├── os-demo.js           # OS-level information
├── http-server.js       # Basic HTTP server
└── README.md
```

**Design Philosophy:** Each file focuses on **one responsibility** for maximum clarity.

---

## 🔍 The Problem Space

### Browser Limitations vs Backend Needs
| Browser JavaScript | Backend Requirements |
|-------------------|---------------------|
| ❌ No file system access | ✅ File handling (logs, uploads, configs) |
| ❌ No server creation | ✅ Network servers (APIs, WebSockets) |
| ❌ No OS-level access | ✅ OS resources (memory, CPU, ports) |

### Solution: Node.js
Node.js enables JavaScript to run **outside the browser** with access to:
- File system (`fs` module)
- Network operations (`http`, `net` modules)
- Operating system resources (`os` module)
- Process management (`process` object)

---

## 🧠 Mental Model (Most Important)

### What Node.js Actually Is
```
Node.js = JavaScript Engine (V8)
         + Event Loop
         + Native System APIs
```

### What Node.js Is NOT
- ❌ Not a framework
- ❌ Not multithreaded like Java
- ❌ Not magic

### Core Understanding
> Node runs JavaScript **on your machine**, not inside the browser.

This single idea removes 80% of the confusion.

---

## 📚 Core Modules Deep Dive

### 1. Node Runtime Basics (`index.js`)
**Mental Model:** Node executes JavaScript files directly using V8 engine.

```javascript
// index.js
console.log("Hello from Node.js");

// Node-specific global variables (not available in browsers)
console.log("Current directory:", __dirname);
console.log("Current file:", __filename);
```

**Key Concepts:**
- `node index.js` ≠ browser execution
- `__dirname` and `__filename` are injected by Node runtime
- No DOM or window object exists

---

### 2. File System Module (`fs-demo.js`)
**Mental Model:** Node can directly interact with your operating system's file system.

```javascript
// fs-demo.js
const fs = require("fs");

// Write data to a file (blocking operation)
fs.writeFileSync("demo.txt", "Hello File System");

// Read data from the file
const data = fs.readFileSync("demo.txt", "utf-8");
console.log("File content:", data);
```

**Critical Understanding:**
- `writeFileSync` and `readFileSync` **block the event loop**
- Blocking is acceptable for scripts but **dangerous for servers**
- Async versions exist for scalability (`writeFile`, `readFile`)

**Interview Ready:**
> "I understand the difference between sync and async fs methods and why sync operations are risky in production servers."

---

### 3. Operating System Module (`os-demo.js`)
**Mental Model:** Node can inspect the machine it's running on.

```javascript
// os-demo.js
const os = require("os");

console.log("OS Type:", os.type());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
```

**Why This Matters:**
- Monitoring and diagnostics
- Performance analysis
- Production debugging
- Resource optimization

---

### 4. HTTP Server Module (`http-server.js`)
**Mental Model:** Backend server = listen → receive request → send response.

```javascript
// http-server.js
const http = require("http");

const server = http.createServer((req, res) => {
    // req = incoming request object
    // res = response object
    
    if (req.url === "/") {
        res.write("Home Page");
    } else if (req.url === "/about") {
        res.write("About Page");
    } else {
        res.write("404 Not Found");
    }
    
    res.end(); // Signals response completion
});

// Start listening on port 3000
server.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

**HTTP Server Flow:**
1. Create server with `http.createServer()`
2. Define request handler (called for each incoming request)
3. Inspect `req.url` for routing logic
4. Write response with `res.write()`
5. End response with `res.end()`
6. Listen on a port with `server.listen()`

---

## 🔄 Event Loop & Non-Blocking I/O

### How Node Handles Multiple Requests
```
Incoming Request → Event Loop → Handles I/O → Callback → Response
            ↑                                     ↓
            └─────── Continues Processing ────────┘
```

**Key Principle:** Node is single-threaded but uses non-blocking I/O operations to handle many concurrent connections.

---

## 💡 Key Learnings

### What Becomes Clear
1. **JavaScript Context:** Node.js vs Browser JavaScript have different capabilities
2. **No Framework Needed:** Backend functionality doesn't require Express initially
3. **Core Understanding:** Knowing core modules reduces dependency on tutorials
4. **Simplicity:** HTTP servers are simpler than they appear

### What I Didn't Know Before
- Node provides its own global variables (`__dirname`, `__filename`)
- Files are read as bytes, not text (encoding matters)
- HTTP servers are fundamentally event-driven
- Blocking the event loop can freeze an entire server

---

## 🎤 Interview Explanations

### For Technical Interviews
> "I started backend development by building with Node core modules. I created an HTTP server using the `http` module, handled routes manually, and understood how request and response objects work before moving to Express."

### Common Questions & Answers
**Q:** Why is Node single-threaded but scalable?
**A:** Node uses non-blocking I/O operations and the event loop to handle multiple concurrent connections efficiently.

**Q:** What does `res.end()` actually do?
**A:** It signals that the response headers and body have been sent, and the connection can be closed or recycled.

**Q:** Why are sync file operations dangerous in servers?
**A:** They block the event loop, preventing the server from handling other requests until the file operation completes.

---

## ✅ Knowledge Checkpoint

Before moving forward, ensure you can confidently:

1. **Explain** why Node is single-threaded but scalable
2. **Differentiate** between browser JS and Node JS execution contexts
3. **Describe** the purpose of `res.end()` in HTTP responses
4. **Identify** why synchronous file operations are problematic in production servers
5. **Create** a basic HTTP server without any framework

---

## 📈 Next Steps

After mastering Node core modules, you're ready to:
1. Explore asynchronous patterns (callbacks, promises, async/await)
2. Understand the event loop in depth
3. Learn Express.js as an abstraction over Node's HTTP module
4. Build more complex routing and middleware systems

> **Remember:** Frameworks like Express only **abstract** Node's core logic—they don't replace it. A solid foundation in core modules makes you a better backend developer.