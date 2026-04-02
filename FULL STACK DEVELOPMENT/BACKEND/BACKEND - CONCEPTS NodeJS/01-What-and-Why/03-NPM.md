# NodeJS NPM

(Real Engineering Explanation – Clean & Structured)

---

## 1. Problem (WHY NPM Exists)

When building backend:

- We need database libraries.
- We need web frameworks.
- We need authentication tools.
- We need testing tools.

Writing everything from scratch is:

- Slow
- Expensive
- Error-prone

We need:

- Reusable code
- Version control
- Easy install/remove
- Dependency management

NPM solves this.

---

## 2. What is NPM?

### Definition

NPM = Node Package Manager.

It is:

- Default package manager for Node.js
- Installed automatically with Node.js
- Used to manage packages, dependencies, and scripts

---

## 3. What is a Package?

A package is:

Reusable code module.

It can be:

- Small utility
- Full framework
- Testing tool
- CLI tool

Packages are stored in:

node_modules folder.

---

## 4. NPM Registry

NPM registry contains:

Millions of open-source packages.

Examples:

- Express
- Mongoose
- Axios
- Jest
- Socket.IO

---

## 5. Step-by-Step Using NPM

### Step 1: Verify Installation

```bash
node -v
npm -v
```

Confirms installation.

---

### Step 2: Initialize Project

```bash
npm init -y
```

Creates:

package.json

---

## 6. What is package.json?

### Why Needed?

We must:

- Track dependencies
- Define scripts
- Store metadata
- Control versions

### Example package.json

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {},
  "devDependencies": {}
}
```

---

## 7. Installing Packages

### Install Normally

```bash
npm install express
```

What happens?

- Package downloaded
- Added to node_modules
- Added to dependencies in package.json

---

### Install as Dev Dependency

Used only during development.

```bash
npm install jest --save-dev
```

Stored in:

devDependencies

---

## 8. Dependency Types

| Dependencies            | DevDependencies              |
| ----------------------- | ---------------------------- |
| Required in production  | Required only in development |
| Example: express        | Example: jest                |
| Installed in production | Ignored with --production    |

---

## 9. Using Installed Package

### Example: Using Express

```js
// app.js

// Import express module
const express = require("express");

// Create express app
const app = express();

// Define route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

Run:

```bash
node app.js
```

Open:

[http://localhost:3000](http://localhost:3000)

---

## 10. Running Scripts

Define in package.json:

```json
"scripts": {
  "start": "node app.js"
}
```

Run:

```bash
npm start
```

Why useful?

- Standardized commands
- Team consistency

---

## 11. Updating Packages

Update all:

```bash
npm update
```

Update specific:

```bash
npm update express
```

---

## 12. Uninstalling Packages

```bash
npm uninstall express
```

Remove global:

```bash
npm uninstall express -g
```

---

## 13. Versioning (Very Important)

NPM follows:

Semantic Versioning (SemVer)

Format:

MAJOR.MINOR.PATCH

Example:

4.17.1

### Meaning

- MAJOR → Breaking change
- MINOR → New feature
- PATCH → Bug fix

---

### Version Symbols

| Symbol    | Meaning                     |
| --------- | --------------------------- |
| "4.17.1"  | Exact version               |
| "^4.17.1" | Allow minor & patch updates |
| "~4.17.1" | Allow patch updates only    |
| "\*"      | Latest version              |

---

### Install Specific Version

```bash
npm install express@4.17.1
```

---

## 14. Installing All Dependencies

If project cloned:

```bash
npm install
```

This reads package.json and installs everything.

---

## 15. Global Installation

Used for:

CLI tools.

Example:

```bash
npm install -g nodemon
```

Global packages usable anywhere.

---

## 16. Security

Check vulnerabilities:

```bash
npm audit
```

Fix automatically:

```bash
npm audit fix
```

---

## 17. Real Engineering Practices

1. Always commit package.json.
2. Never commit node_modules.
3. Use exact versions in production.
4. Avoid too many dependencies.
5. Audit packages regularly.
6. Prefer stable and maintained libraries.

---

## 18. Common Mistakes

- Installing unnecessary global packages
- Ignoring version conflicts
- Mixing dev and production dependencies
- Not using package-lock.json

---

## 19. Mini Exercise

1. Initialize new project.
2. Install:
   - express
   - nodemon (dev)

3. Create server.
4. Add start script.
5. Test npm start.

---

## 20. Interview Questions

1. What is NPM?
2. Difference between dependencies and devDependencies?
3. What is package.json?
4. What is package-lock.json?
5. What does npm init -y do?
6. Explain semantic versioning.
7. Difference between ^ and ~?
8. How to install specific version?
9. What is npm audit?
10. Why avoid too many dependencies?

---

## 21. Final Engineering Summary

NPM is:

Dependency manager
Version controller
Script runner

It enables:

Scalable project management
Team collaboration
Controlled versioning
Reusable ecosystem

Without NPM:

Node.js development is not practical.

---
