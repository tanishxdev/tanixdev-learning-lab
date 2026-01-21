# Topic 6 File System (fs Module)

---

### **Concept**

**What is the File System (fs) module?**

* The **`fs` (File System)** module in Node.js allows JavaScript to **interact directly with the operating system’s file system**.
* It enables Node.js programs to:

  * read files
  * write files
  * update existing files
  * delete files
  * manage folders
* This capability is **not available in browser JavaScript** due to security restrictions.

Important backend clarification:

* Browser JS is **sandboxed**
* Node.js runs with **system-level permissions**
* That’s why Node must be used **carefully** in production

Core backend mental model:

```
JavaScript (Node)
      ↓
fs module
      ↓
libuv
      ↓
Operating System (Disk / Files)
```

Key insight:

* Node does **not directly touch disk**
* `fs` delegates work to the OS via **libuv**
* Disk I/O always happens **outside the JS thread**

---

### **Why fs Module?**

| Task                          | Function                   |
| ----------------------------- | -------------------------- |
| **Create / Write file**       | `fs.writeFile()`           |
| **Append data**               | `fs.appendFile()`          |
| **Read file**                 | `fs.readFile()`            |
| **Delete file**               | `fs.unlink()`              |
| **Rename file**               | `fs.rename()`              |
| **Create / Remove directory** | `fs.mkdir()`, `fs.rmdir()` |

Backend reality expansion:

* `fs` is used in:

  * logging systems
  * file uploads
  * CSV / Excel exports
  * report generation
  * backup systems
  * configuration loaders
* Even databases internally rely on **file system operations**

Interview framing:

> “Any backend system that persists or processes data eventually touches the file system.”

---

### **How fs Works**

1. You import the module:

   ```js
   const fs = require('fs');
   ```

   * Loads Node’s built-in module
   * No npm install required

2. You choose **how** the operation should run:

   * **Synchronous (blocking)**
     → JS thread waits
   * **Asynchronous (non-blocking)**
     → JS continues execution

3. Node hands the task to the OS:

   * libuv manages the request
   * OS performs disk I/O
   * Result is returned via callback / promise

Important performance rule:

* **Sync fs methods block the event loop**
* **Async fs methods allow concurrency**

Mental comparison:

```
Sync fs   → like waiting in line
Async fs  → like placing order and doing other work
```

---

### **Folder Setup**

```
fs-demo/
│
├── app.js
└── data/
    └── notes.txt
```

Design reasoning (backend mindset):

* Code and data should never mix
* `data/` can later be replaced by:

  * cloud storage
  * database
  * mounted volume
* This structure scales well

---

### **Code Example 1: Write and Read Files (Asynchronous)**

**File:** `app.js`

```js
const fs = require('fs');
```

* Loads core module
* Immediately available

```js
fs.writeFile('./data/notes.txt', 'Learning Node.js File System module!', (err) => {
```

Key backend details:

* Operation is **non-blocking**
* Write request goes to OS
* Callback is queued after completion

```js
  if (err) throw err;
  console.log('File created and data written successfully!');
```

Error handling note:

* Disk errors
* Permission issues
* Invalid paths

```js
  fs.readFile('./data/notes.txt', 'utf8', (err, data) => {
```

Why `'utf8'` matters deeply:

* Files = bytes on disk
* Encoding tells Node **how to interpret bytes**
* `'utf8'` → convert bytes to string
* No encoding → return `Buffer`

This is a **very common interview trap**.

---

### **Code Example 2: Append, Rename, and Delete**

```js
fs.appendFile('./data/notes.txt', '\nAppended line using fs.appendFile().', (err) => {
```

Backend usage:

* Logging systems
* Audit trails
* Incremental file updates

```js
fs.rename('./data/notes.txt', './data/updated-notes.txt', ...)
```

Important detail:

* Can also **move files**
* Rename across directories
* OS-level atomic operation

```js
fs.unlink('./data/updated-notes.txt', ...)
```

Backend caution:

* File is permanently removed
* No undo
* Always double-check path

Execution insight:

* Nested callbacks ensure **sequence**
* Each operation waits for previous one

This leads to **callback hell**, which is why promises exist.

---

### **Code Example 3: Using Synchronous Methods**

**File:** `sync-fs.js`

```js
fs.writeFileSync('./data/sync.txt', 'Synchronous file write example.');
```

Internal behavior:

* Event loop stops
* JS thread waits
* Disk write completes

```js
const data = fs.readFileSync('./data/sync.txt', 'utf8');
```

```js
fs.unlinkSync('./data/sync.txt');
```

Use-case reality:

* Safe for:

  * build scripts
  * CLI tools
  * startup config loaders
* Dangerous for:

  * APIs
  * web servers
  * multi-user systems

---

### **Mini Project: Notes Manager**

**Goal:** Build a simple **Note Manager CLI tool** using the fs module.

This project demonstrates:

* real file persistence
* JSON serialization
* defensive coding
* separation of concerns

---

**File:** `app.js`

```js
const fs = require('fs');
const path = require('path');
```

Why `path` is mandatory in backend:

* Prevents hardcoded separators
* Avoids bugs across OS
* Always resolves absolute paths correctly

```js
const notesFile = path.join(__dirname, 'data', 'notes.json');
```

Important concept:

* `__dirname` → directory of current file
* Avoids issues when running script from different locations

---

#### **addNote()**

```js
if (fs.existsSync(notesFile)) {
```

Why this matters:

* Prevents runtime crashes
* Defensive programming
* Common backend best practice

```js
notes.push({ title, body });
```

* Simple object model
* Easy to evolve later

```js
fs.writeFileSync(notesFile, JSON.stringify(notes, null, 2));
```

Formatting reasons:

* Debug-friendly
* Human-readable
* Easier during development

---

#### **listNotes()**

Backend flow:

```
Read file
   ↓
Parse JSON
   ↓
Iterate data
   ↓
Display output
```

This mirrors:

* API response handling
* database query handling

---

#### **deleteNote()**

```js
notes = notes.filter(note => note.title !== title);
```

Why this pattern is good:

* Avoids mutation issues
* Clear intent
* Safer logic

---

### **Dependencies**

* No external dependencies — only built-in `fs` and `path` modules.

Meaning:

* Minimal setup
* Portable code
* Works anywhere Node exists

---

### **Notes**

* Prefer **asynchronous fs methods** in servers.
* Synchronous methods block the event loop.
* Always specify encoding for text files.
* Use `path.join()` instead of hardcoded paths.
* Prefer promise-based APIs:

  ```js
  fs.promises.readFile()
  ```

  for:

  * cleaner code
  * async/await
  * better error handling

Backend-level takeaway:

> The `fs` module is the foundation for persistence, logging, and file-based workflows in Node.js, and understanding its async behavior is critical for scalable backend systems.
