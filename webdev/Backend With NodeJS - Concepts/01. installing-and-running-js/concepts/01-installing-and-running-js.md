
# Topic 1 Installing Node.js + Running JavaScript Files

## **What We Covered Here**

1. **Why Node.js is needed**

   * Why JavaScript cannot run outside the browser by default
   * How Node.js brings the V8 engine to the server / terminal environment

2. **What Node.js actually is**

   * Node.js as a JavaScript runtime, not a framework
   * How Node executes `.js` files using the V8 engine
   * Difference between browser JS and Node.js JS capabilities

3. **Core tools that come with Node.js**

   * **Node**: executes JavaScript files
   * **npm**: manages third-party libraries and dependencies
   * **npx**: runs packages without global installation

4. **Installing and verifying Node.js**

   * Why LTS version is recommended
   * Verifying installation using `node -v` and `npm -v`
   * What successful version output confirms internally

5. **Basic Node project setup**

   * Minimal folder structure for Node scripts
   * When and why `package.json` becomes necessary
   * Understanding that Node has no enforced project structure

6. **Running JavaScript files using Node**

   * Executing `.js` files from terminal
   * How Node loads, parses, and executes JavaScript
   * Difference between `console.log` in browser vs Node

7. **Using Node core (built-in) modules**

   * What core modules are and why they need no installation
   * Using `require()` to load built-in modules like `os` and `path`
   * Accessing system-level information via Node

8. **Mini CLI-style Node tool**

   * Building a small real-world utility using core modules
   * Reading user, system, and uptime information
   * Understanding Node as a scripting and automation tool

9. **Dependencies understanding**

   * Difference between built-in modules and external packages
   * Why no `node_modules` folder is created in this topic
   * When dependency management becomes necessary

10. **Key backend notes and execution behavior**

    * Node executes code top-to-bottom
    * Synchronous vs asynchronous execution awareness
    * High-level idea of Node’s event-driven nature

11. **Supporting ecosystem tools**

    * **npm**: dependency management and project setup
    * **NVM**: managing multiple Node versions safely
    * Why NVM is important for real backend projects

12. **High-level backend awareness**

    * Role of `package.json`, `node_modules`, and versioning
    * CommonJS vs ES Modules (require vs import)
    * Global vs local package usage

---

### **Concept**

**What is Node.js Installation?**

* JavaScript was originally designed to run **only inside browsers**.
* Browsers provide a **JS engine** (like V8 in Chrome) + browser APIs (DOM, window, alert).
* **Node.js takes the same V8 engine** and runs it **outside the browser**, inside your system.

So installing Node.js means:

* You are installing a **JavaScript runtime for your OS**
* JS can now:

  * Access files
  * Read system info
  * Run servers
  * Talk to databases
  * Run scripts from terminal

**Node.js comes bundled with two main tools:**

* **Node** → executes JS files using V8.
* **npm (Node Package Manager)** → manages external code (libraries).

Internally:

```
JavaScript file
      ↓
Node.js
      ↓
V8 Engine
      ↓
Machine Code (CPU executes it)
```

---

### **Why Install Node.js?**

| Tool     | Purpose                                               |
| -------- | ----------------------------------------------------- |
| **Node** | Executes JS code in terminal or server environment.   |
| **npm**  | Manages external libraries (install, update, remove). |
| **npx**  | Runs packages without installing them globally.       |

Expanded mental model:

* **Node**

  * Think of it as: `node file.js`
  * Similar to:

    * `python file.py`
    * `java Main`
  * It reads your JS file line-by-line and executes it.

* **npm**

  * A **package manager**, not a runtime.
  * Used when your project needs:

    * Express
    * React
    * Axios
    * dotenv
    * etc.
  * It downloads code from npm registry and stores it locally.

* **npx**

  * Temporary executor.
  * Runs a package **once** without saving it.
  * Useful for:

    * project scaffolding
    * CLI tools

---

### **How to Install Node.js**

**Step 1:** Go to [https://nodejs.org](https://nodejs.org)
**Step 2:** Download **LTS (Long-Term Support)** version.
**Step 3:** Install using default settings.
**Step 4:** Verify installation in terminal:

```bash
node -v
npm -v
```

**Output Example:**

```
v20.18.0
10.5.1
```

What this verification actually means:

* `node -v` → confirms **runtime is available**
* `npm -v` → confirms **package manager is installed**
* If either fails:

  * PATH is broken
  * Installation is incomplete

---

### **Folder Setup**

**Project Structure:**

```
nodejs-basics/
│
├── hello-world.js
└── package.json (created later)
```

Backend thinking here:

* Node does **not require any fixed folder structure**
* This structure is a **convention**, not a rule
* You can run:

  * one file
  * multiple files
  * deeply nested folders

`package.json` becomes important **only when**:

* you install dependencies
* you define scripts
* you version your project

---

### **Code Example 1: Running a JavaScript File with Node**

**File:** `hello-world.js`

```js
// ===========================
// Example: Running JS with Node
// ===========================

// Traditional JS code (no browser needed)
const name = "Tanish";
console.log(`Hello ${name}, welcome to Node.js!`);
```

Execution flow:

```
Terminal
  ↓
node hello-world.js
  ↓
Node loads file into memory
  ↓
V8 parses JS
  ↓
console.log sends output to stdout
```

**Run in terminal:**

```bash
node hello-world.js
```

**Output:**

```
Hello Tanish, welcome to Node.js!
```

Key insight:

* `console.log` in Node prints to **terminal**
* In browser, it prints to **DevTools**

---

### **Code Example 2: Using Built-in Modules**

**File:** `os-info.js`

```js
// ===========================
// Example: Using Core Modules
// ===========================

// Import the built-in 'os' module
const os = require('os');
```

Important backend concept:

* `require('os')`:

  * does **not** read from npm
  * does **not** need installation
  * Node already ships this module

Node has **core modules**, like:

* `fs`
* `path`
* `os`
* `http`
* `crypto`

```js
// Display system information
console.log("Operating System Info:");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Total Memory (MB):", os.totalmem() / (1024 * 1024));
console.log("Free Memory (MB):", os.freemem() / (1024 * 1024));
```

**Run in terminal:**

```bash
node os-info.js
```

This proves:

* Node can talk to your **OS**
* Browser JS **cannot do this** (security sandbox)

---

### **Mini Project: Create a Simple Node Tool**

**Goal:** Print personalized system info.

This is a **CLI-style backend utility**, not a website.

**File:** `system-checker.js`

```js
// ===========================
// Mini Project: System Checker
// ===========================

// Import required core modules
const os = require('os');
const path = require('path');
```

Why `path`?

* OS paths differ:

  * Windows → `\`
  * Linux/macOS → `/`
* `path` ensures cross-platform correctness

```js
// Get current user and system info
const user = os.userInfo();
const uptime = os.uptime();
```

* `os.userInfo()` → reads system-level user
* `os.uptime()` → seconds since last boot

```js
const report = `
Hello ${user.username}!
Your system has been running for ${(uptime / 3600).toFixed(2)} hours.
You're using a ${os.type()} system on ${os.platform()} platform.
Your home directory path is: ${user.homedir}
`;
```

This demonstrates:

* Template strings
* System APIs
* Real-world Node usage

---

### **Dependencies**

* No external dependencies (only built-in modules like `os`, `path`).

Meaning:

* No `node_modules` folder
* No `package.json` required yet
* Clean, lightweight scripts

---

### **Notes**

* Node.js can execute any `.js` file directly — no browser needed.
* Use `require()` to import built-in modules.
* Always initialize a project with `npm init` before using third-party libraries.
* The `node` command executes files **top-to-bottom** until async code is introduced.

Expanded backend clarity:

* Node itself is **single-threaded**
* It uses:

  * Event loop
  * Async callbacks
  * Non-blocking I/O
* Synchronous code **blocks execution**
* Asynchronous code goes to background APIs

---

### **NODE?**

* Node = JavaScript runtime
* Provides:

  * V8 engine
  * File system access
  * Networking
  * Timers
* Without Node:

  * JS is stuck inside browser

---

### **npm?**

* npm = package manager
* Responsibilities:

  * Install libraries
  * Track versions
  * Resolve dependencies
* Creates:

  * `node_modules/`
  * `package-lock.json`

---

### **NVM?**

* NVM = Node Version Manager
* Allows:

  * Multiple Node versions on same machine
  * Switching per project

Why NVM matters in backend:

* Different projects require different Node versions
* Production may run older LTS
* Avoids global conflicts

Example idea:

```
Project A → Node 18
Project B → Node 20
```

NVM handles this cleanly.

---

### **Other Important Stuff (High-Level Awareness)**

* **package.json**

  * Project metadata
  * Scripts
  * Dependency list

* **node_modules**

  * Actual downloaded libraries
  * Never commit to git

* **CommonJS vs ES Modules**

  * `require()` vs `import`
  * Node supports both (with rules)

* **Global vs Local packages**

  * Global → CLI tools
  * Local → project-specific

---