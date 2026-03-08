# PHASE 6 — Request Object Deep Dive

---

# 1. WHAT IS req OBJECT?

## Definition

`req` (Request Object) represents the **incoming HTTP request sent by the client**.

It contains:

```text
Client Data
HTTP Method
Headers
URL
Query Parameters
Body Data
Cookies
```

Express **extends Node's IncomingMessage object**.

Meaning:

```text
Node HTTP Request
        +
Express Enhancements
        =
Express Request Object (req)
```

---

# MENTAL MODEL

When client sends request:

```text
Client → HTTP Request → Express → req object
```

Express wraps request data into:

```js
req;
```

You extract data from it.

---

# BASIC EXAMPLE

```js
app.get("/user", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);

  res.send("Check terminal");
});
```

---

# REQUEST OBJECT STRUCTURE

Typical structure:

```text
req
 ├── req.method
 ├── req.url
 ├── req.headers
 ├── req.body
 ├── req.params
 ├── req.query
 ├── req.cookies
 └── req.app
```

---

# 11. REQUEST PROPERTIES

---

# 1️⃣ req.app

---

## Definition

Returns reference to **Express application instance**.

Meaning:

Inside route you can access:

```text
app settings
app configuration
```

---

## Example

```js
app.get("/", (req, res) => {
  console.log(req.app);

  res.send("App accessed");
});
```

You can also access app variables.

Example:

```js
app.set("appName", "My API");

app.get("/", (req, res) => {
  const name = req.app.get("appName");

  res.send(name);
});
```

Output:

```
My API
```

---

# 2️⃣ req.baseUrl

---

## Definition

Returns **base URL of router mount path**.

Mostly used with:

```text
express.Router()
```

---

## Example

```js
const router = express.Router();

router.get("/profile", (req, res) => {
  console.log(req.baseUrl);

  res.send("Profile page");
});

app.use("/user", router);
```

Request:

```
GET /user/profile
```

Output:

```
/user
```

Meaning:

Router mounted at `/user`.

---

# 3️⃣ req.body

---

## Definition

Contains **data sent in request body**.

Used in:

- POST
- PUT
- PATCH

Example body:

```json
{
  "name": "Tanish",
  "age": 22
}
```

---

## Important Requirement

You must enable body parser:

```js
app.use(express.json());
```

Otherwise:

```
req.body = undefined
```

---

## Example

```js
app.post("/user", (req, res) => {
  console.log(req.body);

  res.send("User received");
});
```

Postman request:

```json
{
  "name": "Tanish"
}
```

Terminal:

```
{ name: 'Tanish' }
```

---

# 4️⃣ req.cookies

---

## Definition

Contains cookies sent by client.

Requires middleware:

```
cookie-parser
```

---

## Install

```bash
npm install cookie-parser
```

---

## Example

```js
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
  console.log(req.cookies);

  res.send("Cookies received");
});
```

Browser sends:

```
Cookie: token=abc123
```

Output:

```js
{
  token: "abc123";
}
```

---

# 5️⃣ req.fresh

---

## Definition

Returns **true if request is fresh**.

Meaning:

Browser cache is still valid.

Used with:

```
HTTP caching
```

---

## Example

```js
app.get("/", (req, res) => {
  console.log(req.fresh);

  res.send("Fresh check");
});
```

If cached response valid:

```
true
```

Else:

```
false
```

Used for performance optimization.

---

# 6️⃣ req.accepts()

---

## Definition

Checks if client accepts certain **content types**.

Based on:

```
Accept header
```

Example header:

```
Accept: application/json
```

---

## Example

```js
app.get("/", (req, res) => {
  if (req.accepts("json")) {
    res.json({ message: "JSON response" });
  } else {
    res.send("Plain text");
  }
});
```

---

# 7️⃣ req.acceptsCharsets()

---

## Definition

Checks if client accepts specific **character encodings**.

Example:

```
UTF-8
ISO-8859-1
```

---

## Example

```js
app.get("/", (req, res) => {
  console.log(req.acceptsCharsets());

  res.send("Charset checked");
});
```

Output:

```
utf-8
```

---

# 8️⃣ req.acceptsEncodings()

---

## Definition

Checks supported **compression encodings**.

Example:

```
gzip
br
deflate
```

Used for:

```
response compression
```

---

## Example

```js
app.get("/", (req, res) => {
  console.log(req.acceptsEncodings());

  res.send("Encoding checked");
});
```

Output:

```
gzip
```

---

# 9️⃣ req.acceptsLanguages()

---

## Definition

Checks preferred languages from browser.

Example header:

```
Accept-Language: en-US, en;q=0.9
```

---

## Example

```js
app.get("/", (req, res) => {
  console.log(req.acceptsLanguages());

  res.send("Language checked");
});
```

Output:

```
['en-US', 'en']
```

Useful for:

```
multi-language websites
```

---

# REAL WORLD REQUEST EXTRACTION

Example API:

```js
app.post("/users/:id", (req, res) => {
  const id = req.params.id;
  const age = req.query.age;
  const name = req.body.name;

  res.json({
    id,
    age,
    name,
  });
});
```

Request:

```
POST /users/5?age=20
```

Body:

```json
{
  "name": "Tanish"
}
```

Response:

```json
{
  "id": "5",
  "age": "20",
  "name": "Tanish"
}
```

This is how real APIs extract data.

---

# REQUEST DATA SOURCES

| Source       | Property    |
| ------------ | ----------- |
| URL Path     | req.params  |
| Query String | req.query   |
| Request Body | req.body    |
| Headers      | req.headers |
| Cookies      | req.cookies |

---

# COMMON MISTAKES

1️⃣ Forgetting `express.json()`

Result:

```
req.body undefined
```

---

2️⃣ Confusing params and query.

```
/users/5 → params
/users?id=5 → query
```

---

3️⃣ Not validating request data.

Always validate.

---

# INTERVIEW QUESTIONS

### Basic

1️⃣ What is request object in Express?
2️⃣ Difference between req.params and req.query?
3️⃣ What is req.body?

---

### Intermediate

4️⃣ Why is express.json() needed?
5️⃣ What does req.accepts() do?
6️⃣ How do you read cookies?

---

### Advanced

7️⃣ How does Express extend Node request object?
8️⃣ How do you design API validation layer?
9️⃣ What happens if body-parser middleware is missing?

---

# PERFECT INTERVIEW ANSWER

Question:

How do you extract data from client request?

Answer:

In Express, client data can be extracted from multiple locations in the request object. URL parameters are accessed using `req.params`, query parameters through `req.query`, request body using `req.body`, headers via `req.headers`, and cookies using `req.cookies`. Middleware like `express.json()` or `cookie-parser` is required to properly parse some of these values.

---

# FINAL ENGINEER MINDSET

A backend engineer must always know:

Where the client data is located.

Never guess.

Always check:

```text
params
query
body
headers
cookies
```

---
