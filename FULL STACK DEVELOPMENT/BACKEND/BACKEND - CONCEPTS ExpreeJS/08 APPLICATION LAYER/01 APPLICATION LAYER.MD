# PHASE 8 — Application Level Functions

Goal: Configure application-wide behavior.

Express applications have configuration functions that control **global settings and shared variables**.

---

# 1. WHAT IS THE EXPRESS APPLICATION OBJECT?

When you write:

```js
const express = require("express");
const app = express();
```

`app` becomes the **central object controlling the entire Express application**.

It manages:

- routes
- middleware
- configuration settings
- shared variables
- environment options

Think of it like:

```
Express App
   │
   ├── Configuration
   ├── Routes
   ├── Middleware
   └── Global variables
```

---

# 2. app.locals

## Definition

`app.locals` is an object used to **store application-wide variables**.

These variables are accessible in:

- middleware
- routes
- template engines

They exist **for the lifetime of the application**.

---

## Mental Model

```
app.locals → Global variables for the app
res.locals → Variables for one request only
```

---

## Example

```js
const express = require("express");
const app = express();

// Setting global variable
app.locals.siteName = "My Express App";

app.get("/", (req, res) => {
  // Accessing global variable
  res.send(app.locals.siteName);
});

app.listen(3000);
```

Output:

```
My Express App
```

---

## Real World Usage

Used for:

- application name
- configuration values
- shared utilities
- environment settings

Example:

```js
app.locals.companyName = "Tech Corp";
app.locals.adminEmail = "admin@company.com";
```

Now any route can access them.

---

# 3. app.enable()

## Definition

Enables a specific application setting.

Syntax:

```js
app.enable(settingName);
```

---

## Example

```js
app.enable("trust proxy");
```

Now Express trusts reverse proxies like:

```
Nginx
Cloudflare
Load balancers
```

---

## Example Code

```js
const express = require("express");
const app = express();

// Enable a setting
app.enable("trust proxy");

app.get("/", (req, res) => {
  res.send("Trust proxy enabled");
});
```

---

# 4. app.disable()

## Definition

Disables a configuration setting.

Syntax:

```js
app.disable(settingName);
```

---

## Example

```js
app.disable("x-powered-by");
```

Express normally sends this header:

```
X-Powered-By: Express
```

Disabling it improves **security**.

---

## Example Code

```js
const express = require("express");
const app = express();

// Disable Express signature header
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("Header disabled");
});
```

Now response headers will NOT reveal Express.

---

# 5. app.enabled()

## Definition

Checks whether a setting is enabled.

Returns:

```
true
false
```

---

## Example

```js
app.enable("trust proxy");

console.log(app.enabled("trust proxy"));
```

Output:

```
true
```

---

# 6. app.disabled()

## Definition

Checks if a setting is disabled.

Returns boolean.

---

## Example

```js
app.disable("x-powered-by");

console.log(app.disabled("x-powered-by"));
```

Output:

```
true
```

---

# 7. HOW EXPRESS SETTINGS WORK INTERNALLY

Express stores settings inside an internal object.

Conceptually something like:

```
app.settings = {
   "trust proxy": true,
   "x-powered-by": false
}
```

Functions like:

```
app.enable()
app.disable()
```

simply modify this internal settings object.

---

# 8. DEFAULT EXPRESS SETTINGS

Some built-in settings include:

| Setting      | Purpose               |
| ------------ | --------------------- |
| x-powered-by | Sends Express header  |
| trust proxy  | Trust reverse proxies |
| etag         | Enable HTTP caching   |
| view engine  | Template engine       |

Example:

```js
app.set("view engine", "ejs");
```

---

# 9. REAL WORLD APPLICATION CONFIGURATION

Example production setup:

```js
const express = require("express");
const app = express();

// security improvement
app.disable("x-powered-by");

// trust reverse proxy
app.enable("trust proxy");

// global variables
app.locals.appName = "Production API";

app.get("/", (req, res) => {
  res.send(app.locals.appName);
});

app.listen(3000);
```

---

# 10. app.locals vs res.locals

| Feature  | app.locals         | res.locals              |
| -------- | ------------------ | ----------------------- |
| Scope    | Entire application | Single request          |
| Lifetime | Until server stops | Until response finishes |
| Usage    | Global config      | Request-specific data   |

---

# 11. COMMON MISTAKES

### 1. Using app.locals for request data

Wrong:

```
app.locals.user = req.user
```

Should use:

```
res.locals.user
```

---

### 2. Forgetting security settings

Always disable:

```
x-powered-by
```

---

### 3. Hardcoding environment values

Use environment variables instead.

---

# 12. INTERVIEW QUESTIONS

Basic:

1. What is `app.locals`?
2. Difference between `app.locals` and `res.locals`?
3. What does `app.enable()` do?

Intermediate:

4. Why disable `x-powered-by`?
5. What does `trust proxy` mean?
6. How does Express store configuration settings?

Advanced:

7. When should you use `app.locals` in large applications?
8. How does Express manage environment configurations internally?

---

# PERFECT INTERVIEW ANSWER

If asked:

**What is app.locals in Express?**

Answer:

`app.locals` is an object used to store variables that are accessible throughout the entire Express application. These values persist for the lifetime of the application and are commonly used to store configuration values or global data that needs to be accessed by middleware, routes, or template engines.

---

# FINAL ENGINEER MINDSET

Application configuration allows you to control:

```
security
environment behavior
shared variables
global settings
```

It is used mainly in **large production applications**.

---
