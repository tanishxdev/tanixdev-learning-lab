# Topic 4 Node Package Manager (NPM)

---

## **What We Covered Here**

1. What npm is and why it exists
2. Relationship between Node.js and npm
3. Role of `package.json` in a Node project
4. How npm installs and manages dependencies
5. Difference between local and global packages
6. Purpose of `node_modules` and `package-lock.json`
7. Using third-party libraries inside Node applications
8. Running scripts and tools using npm
9. Building a small CLI-style app using npm packages
10. Best practices and backend cautions when using npm

---

### **Concept**

**What is npm?**

* **npm (Node Package Manager)** is the **default package manager** for Node.js.
* It is used to **install, manage, update, and share** JavaScript packages.
* A **package** is simply reusable code published to the npm registry.
* npm is installed automatically when Node.js is installed.

Important mental model:

```
Node.js → runs JavaScript
npm     → manages JavaScript code written by others
```

npm does **not** execute JavaScript.
It only **downloads, tracks, and manages code**.

---

### **Why npm?**

| Feature                   | Explanation                                  |
| ------------------------- | -------------------------------------------- |
| **Code Reuse**            | Avoid reinventing — use existing libraries.  |
| **Dependency Management** | Automatically installs required packages.    |
| **Version Control**       | Ensures consistent versions across machines. |
| **Open Source Ecosystem** | Millions of ready-to-use libraries.          |
| **Script Automation**     | Run commands via npm scripts.                |

Backend reality:

* Almost every backend project depends on:

  * frameworks
  * libraries
  * tools
* npm is the **dependency backbone** of Node.js projects

---

### **How npm Works**

High-level flow:

1. You initialize a project using npm
2. npm creates `package.json`
3. You install packages
4. npm downloads code into `node_modules`
5. npm records exact versions in `package-lock.json`

Mental picture:

```
package.json      → what you WANT
package-lock.json → what you ACTUALLY got
node_modules      → the actual code
```

---

### **Folder Setup**

```
npm-demo/
│
├── app.js
├── package.json
├── package-lock.json
└── node_modules/
```

Important backend rules:

* `node_modules` is generated → never write code there
* `package.json` is source of truth
* `package-lock.json` ensures reproducible installs

---

### **Step 1: Initialize npm**

```bash
npm init -y
```

What this does:

* Creates `package.json`
* Sets default values
* Marks the folder as an npm project

Example:

```json
{
  "name": "npm-demo",
  "version": "1.0.0",
  "main": "app.js",
  "license": "ISC"
}
```

Meaning:

* `name` → project identifier
* `version` → project version
* `main` → entry file
* `license` → legal metadata

---

### **Step 2: Install a Package**

```bash
npm install lodash
```

What happens internally:

1. npm checks npm registry
2. Downloads lodash
3. Resolves its dependencies
4. Stores everything in `node_modules`
5. Updates `package.json`
6. Locks versions in `package-lock.json`

```json
"dependencies": {
  "lodash": "^4.17.21"
}
```

Caret (`^`) meaning:

* Allow compatible minor/patch updates
* Prevent breaking major updates

---

### **Code Example 1: Using npm Package**

**File:** `app.js`

```js
// ===========================
// Example: Using lodash
// ===========================

const _ = require('lodash');

const numbers = [10, 20, 20, 30, 40, 40];

const uniqueNumbers = _.uniq(numbers);

console.log("Original Array:", numbers);
console.log("Unique Array:", uniqueNumbers);
```

Backend insight:

* `require('lodash')` works because:

  * Node looks inside `node_modules`
  * lodash exposes a public API
* This is how **all third-party libraries work**

---

### **Step 3: Local vs Global Packages**

#### **Local install (default)**

```bash
npm install lodash
```

* Available only inside the project
* Used in application code
* Listed in `dependencies`

#### **Global install**

```bash
npm install -g nodemon
```

* Installed system-wide
* Used as CLI tools
* Not imported using `require`

Example:

```bash
nodemon app.js
```

---

### **Step 4: Uninstall / Update Packages**

```bash
npm uninstall lodash
npm update lodash
```

Behavior:

* Uninstall removes:

  * dependency entry
  * node_modules folder copy
* Update respects version rules in `package.json`

---

### **Mini Project: Using External npm Packages**

**Goal:** Build a CLI tool that prints random quotes.

This demonstrates:

* real npm usage
* async code
* third-party APIs
* CLI-style Node app

---

### **Folder**

```
npm-quote-app/
│
├── app.mjs
├── package.json
├── package-lock.json
└── node_modules/
```

Note:

* `.mjs` indicates **ES Modules**
* This shows npm works with both CommonJS and ESM

---

### **Install Dependencies**

```bash
npm init -y
npm install axios chalk
```

---

### **File:** `app.mjs`

```js
import axios from 'axios';
import chalk from 'chalk';

async function getQuote() {
  try {
    const res = await axios.get('https://api.quotable.io/random');

    console.log(chalk.greenBright("\n--- Random Quote ---"));
    console.log(chalk.yellow(res.data.content));
    console.log(chalk.cyan(`~ ${res.data.author}\n`));
  } catch (error) {
    console.log(chalk.red("Error fetching quote:", error.message));
  }
}

getQuote();
```

What this demonstrates:

* npm-managed dependencies
* HTTP requests using axios
* CLI styling using chalk
* Async / await with external libraries

---

### **Dependencies**

| Package    | Purpose                           |
| ---------- | --------------------------------- |
| **lodash** | Utility helpers (arrays, objects) |
| **axios**  | HTTP client for APIs              |
| **chalk**  | Terminal styling for CLI apps     |

---

### **Notes**

* `package.json` defines:

  * dependencies
  * scripts
  * metadata
* `package-lock.json` ensures:

  * same versions across environments
  * predictable builds
* `node_modules`:

  * should never be committed
  * recreated using `npm install`
* npm scripts allow task automation:

  ```json
  "scripts": {
    "start": "node app.js"
  }
  ```

  Run using:

  ```bash
  npm run start
  ```

---

### **Backend Cautions (Interview-Relevant)**

* Do not edit `package-lock.json` manually
* Avoid global packages unless needed
* Always commit `package.json` + `package-lock.json`
* Never commit `node_modules`
* Understand version ranges (`^`, `~`, exact)

---

### **Interview One-Liners**

* npm is a package manager, not a runtime
* `package.json` defines dependencies
* `package-lock.json` locks exact versions
* `node_modules` contains installed code
* Local packages are used in code, global packages are CLI tools
