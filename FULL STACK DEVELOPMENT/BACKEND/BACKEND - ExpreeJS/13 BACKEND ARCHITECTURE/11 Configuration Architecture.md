# Backend Architecture

# Topic 11 — Configuration Architecture (Deep Dive)

Configuration Architecture is about **how an application manages environment settings, secrets, and system parameters in a structured way**.

Professional backends **never hardcode configuration values** in source code.

---

# 1. What is Configuration Architecture?

## Simple Definition

Configuration Architecture is the **system for managing application settings such as environment variables, database credentials, ports, and API keys.**

It separates:

```text
Application Logic
from
Application Configuration
```

---

# 2. Why Configuration Architecture Exists

Bad approach (hardcoded config):

```javascript
const DB_URL = "mongodb://localhost:27017/mydb";
const PORT = 3000;
```

Problems:

```text
Hard to change environments
Security risks
Difficult deployment
Not scalable
```

Proper architecture uses **external configuration**.

---

# 3. Mental Model

Think of configuration like **control panel settings** for a system.

```text
Application code → machine engine
Configuration → control panel
```

You should be able to change behavior **without modifying code**.

---

# 4. Configuration in Backend Architecture

Typical flow:

```text
Environment Variables
 ↓
Config Loader
 ↓
Application Modules
 ↓
Services / Database
```

Example:

```text
.env file
 ↓
config module
 ↓
application
```

---

# 5. Types of Configuration

Backend systems typically configure:

### Application Settings

```text
PORT
APP_ENV
BASE_URL
```

---

### Database Settings

```text
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
```

---

### Security Secrets

```text
JWT_SECRET
SESSION_SECRET
API_KEYS
```

---

### Third Party Services

```text
STRIPE_KEY
EMAIL_SERVICE_KEY
AWS_ACCESS_KEY
```

---

# 6. Environment Variables

Environment variables are the **standard way to store configuration**.

Example:

```text
PORT=3000
DB_URL=mongodb://localhost:27017/mydb
JWT_SECRET=mysecret
```

These values exist **outside the codebase**.

---

# 7. Using dotenv in Express

Install:

```bash
npm install dotenv
```

Example `.env` file:

```text
PORT=3000
DB_URL=mongodb://localhost:27017/mydb
JWT_SECRET=secretkey
```

Load environment variables:

```javascript
require("dotenv").config();
```

Access variables:

```javascript
const port = process.env.PORT;
```

---

# 8. Example Express Configuration

```javascript
require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

# 9. Centralized Config Module

Large projects create a **config folder**.

Structure:

```text
src
 ├ config
 │   ├ database.js
 │   ├ server.js
 │   └ index.js
```

Example:

---

### server.js

```javascript
module.exports = {
  port: process.env.PORT || 3000,
};
```

---

### database.js

```javascript
module.exports = {
  url: process.env.DB_URL,
};
```

---

### index.js

```javascript
const server = require("./server");
const database = require("./database");

module.exports = {
  server,
  database,
};
```

---

Usage:

```javascript
const config = require("./config");

app.listen(config.server.port);
```

---

# 10. Environment Based Configuration

Applications often run in **multiple environments**.

Example:

```text
development
testing
production
```

Each environment has different settings.

---

Example `.env` files:

```text
.env.development
.env.production
.env.test
```

Example:

```text
NODE_ENV=production
```

---

# 11. Configuration Loading Flow

```text
.env file
 ↓
dotenv loads variables
 ↓
config module reads variables
 ↓
application uses config
```

---

# 12. Secrets Management

Sensitive data should **never be committed to Git**.

Example secrets:

```text
JWT_SECRET
DB_PASSWORD
API_KEYS
```

Solution:

```text
.env file
```

Also add to `.gitignore`.

Example:

```text
.env
```

---

# 13. Real World Configuration Example

Example production backend config:

```text
PORT=8080
NODE_ENV=production
DB_URL=postgres://user:pass@host:5432/db
JWT_SECRET=supersecret
REDIS_URL=redis://localhost:6379
```

Application loads this configuration at startup.

---

# 14. Example Project Structure

```text
src
│
├ config
│   ├ index.js
│   ├ database.js
│   ├ server.js
│
├ controllers
├ services
├ repositories
├ routes
└ app.js
```

---

# 15. Configuration vs Constants

Difference:

| Type          | Example                    |
| ------------- | -------------------------- |
| Configuration | PORT, DB_URL               |
| Constants     | MAX_RETRIES, DEFAULT_LIMIT |

Constants are **code logic values**.

Configuration values come from **environment**.

---

# 16. Configuration Best Practices

### 1 Never hardcode secrets

Bad:

```javascript
const JWT_SECRET = "secret";
```

Good:

```javascript
const JWT_SECRET = process.env.JWT_SECRET;
```

---

### 2 Use environment variables

---

### 3 Centralize configuration

One config module.

---

### 4 Separate environments

```text
dev
test
prod
```

---

### 5 Validate configuration

Use schema validation.

Example with Zod:

```javascript
const { z } = require("zod");

const envSchema = z.object({
  PORT: z.string(),
  DB_URL: z.string(),
});
```

---

# 17. Common Configuration Mistakes

### Mistake 1

Hardcoding secrets.

---

### Mistake 2

Scattered config values.

---

### Mistake 3

Committing `.env` to Git.

---

### Mistake 4

No environment separation.

---

# 18. Advantages of Configuration Architecture

```text
Secure secrets management
Flexible environment setup
Easy deployment
Clean codebase
Scalable configuration system
```

---

# 19. Interview Questions

### Basic

What are environment variables?

---

### Intermediate

Why should configuration be separated from code?

---

### Advanced

How do you manage configuration in production systems?

What is dotenv?

---

# 20. Interview Answer Template

What is configuration management?

Answer:

Configuration management is the process of managing application settings such as environment variables, database credentials, and API keys separately from the application code. This allows applications to run in different environments without changing the code.

---

# Final Mental Model

```text
.env file
 ↓
dotenv loads variables
 ↓
config module organizes settings
 ↓
application modules use config
```

Configuration is **the control system of the backend application**.
