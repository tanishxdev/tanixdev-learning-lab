## 1️⃣ Concept: The `path` Module in Node.js

The `path` module helps you **work with file and directory paths** easily across operating systems.

You import it using:

```js
const path = require("path");
```

### Common `path` methods:

| Method             | Description                                          | Example                                 |
| ------------------ | ---------------------------------------------------- | --------------------------------------- |
| `path.basename(p)` | Returns the **file name** from a path                | `index.js`                              |
| `path.dirname(p)`  | Returns the **directory path**                       | `C:\Projects\path-demo`                 |
| `path.extname(p)`  | Returns the **file extension**                       | `.js`                                   |
| `path.parse(p)`    | Returns an **object** containing all parts of a path | `{ root, dir, base, ext, name }`        |
| `path.join()`      | Joins path segments into a single normalized path    | `C:\Projects\path-demo\data\sample.txt` |
| `path.resolve()`   | Gives an **absolute path**                           | `C:\Projects\path-demo\data\sample.txt` |

---

## 2️⃣ Dry Run of Your Output

```
File Name: index.js
Directory Name: C:\Projects\path-demo
File Extension: .js
Path Object: {
  root: 'C:\\',
  dir: 'C:\\Projects\\path-demo',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
Joined Path: C:\Projects\path-demo\data\sample.txt
Absolute Path: C:\Projects\path-demo\data\sample.txt
```

Let’s break it down line by line:

| Output Part                               | Meaning                                                                                               |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **File Name: index.js**                   | Extracted by `path.basename(__filename)` — gives the file name with extension                         |
| **Directory Name: C:\Projects\path-demo** | Extracted by `path.dirname(__filename)` — gives the folder where your script file is stored           |
| **File Extension: .js**                   | Extracted by `path.extname(__filename)`                                                               |
| **Path Object**                           | Returned by `path.parse(__filename)` — breaks down full path into parts                               |
| **Joined Path**                           | Created by `path.join(__dirname, 'data', 'sample.txt')` — safely builds new path inside your project  |
| **Absolute Path**                         | Created by `path.resolve('data', 'sample.txt')` — converts relative path to full absolute system path |

---

## 3️⃣ `path.parse()` Breakdown

Example:

```js
const p = "C:\\Projects\\path-demo\\index.js";
console.log(path.parse(p));
```

Output:

```js
{
  root: 'C:\\',             // Drive root in Windows
  dir: 'C:\\Projects\\path-demo', // Folder path without filename
  base: 'index.js',         // File name with extension
  ext: '.js',               // Extension only
  name: 'index'             // File name without extension
}
```

### ✅ So:

* `filename` = base name = `index.js`
* `basename` = same as filename
* `extname` = `.js`
* `dirname` = folder name

---

## 4️⃣ Mini Project: Read & Write File in the Same Folder

### 🎯 Goal

You want to **read and write a file that lives in the same folder as your script**, not in root (C:).

---

### 🧩 Step-by-Step Code

**File:** `index.js`
**Directory:** `C:\Projects\path-demo`

```js
// Import required core modules
const fs = require("fs");       // File system module
const path = require("path");   // Path module

// Step 1: Get current directory and file details
console.log("Current file:", __filename);
console.log("Current directory:", __dirname);

// Step 2: Build a path to a local file (same folder)
const filePath = path.join(__dirname, "notes.txt");
console.log("File Path:", filePath);

// Step 3: Write some data into that file
fs.writeFileSync(filePath, "Hello from Node.js file system demo!", "utf-8");

// Step 4: Read back the content
const content = fs.readFileSync(filePath, "utf-8");
console.log("File Content:", content);
```

---

### 🧠 Line-by-Line Explanation

1. `__dirname`
   → Gives the **absolute path of the folder** where this script resides.
   Example: `C:\Projects\path-demo`

2. `path.join(__dirname, "notes.txt")`
   → Builds the full safe path:
   `C:\Projects\path-demo\notes.txt`

3. `fs.writeFileSync(filePath, "data")`
   → Creates (or overwrites) the file and writes data.

4. `fs.readFileSync(filePath, "utf-8")`
   → Reads the content back from the same file.

---

### 🧾 Output Example

```
Current file: C:\Projects\path-demo\index.js
Current directory: C:\Projects\path-demo
File Path: C:\Projects\path-demo\notes.txt
File Content: Hello from Node.js file system demo!
```

---

## 5️⃣ Why Use `__dirname` Instead of Plain `./`

If you just use:

```js
fs.writeFileSync("./notes.txt", "data");
```

It works **only if** you run Node from that same folder.
If you run from another folder, it writes to a **different location** (your current working directory).

`__dirname` fixes that:

* It **always points to the actual script’s directory**, regardless of where you run the command from.

---

## ✅ Mini Project Structure

```
C:\Projects\path-demo
│
├── index.js        // your main script
├── notes.txt       // auto-created by your script
└── (more files later)
```

---

## 🧠 Summary

| Concept          | Code                               | Meaning             |
| ---------------- | ---------------------------------- | ------------------- |
| Get file name    | `path.basename(__filename)`        | `index.js`          |
| Get directory    | `path.dirname(__filename)`         | Folder path         |
| Get extension    | `path.extname(__filename)`         | `.js`               |
| Parse full path  | `path.parse(__filename)`           | All parts as object |
| Join path safely | `path.join(__dirname, "file.txt")` | File in same folder |
| Write file       | `fs.writeFileSync(path, data)`     | Creates file        |
| Read file        | `fs.readFileSync(path, "utf-8")`   | Reads content       |
