# PHASE 7 — Response Object Deep Dive

---

# 1. WHAT IS res OBJECT?

## Definition

`res` (Response Object) represents the **HTTP response that the server sends back to the client**.

Express extends Node's native response object:

```text
Node HTTP Response
        +
Express Enhancements
        =
Express Response Object (res)
```

It allows the server to:

- Send data
- Send files
- Send cookies
- Set headers
- Set status codes
- End response

---

# MENTAL MODEL

When request arrives:

```text
Client → Request → Server → res object → Client
```

The response object controls **what the client finally receives**.

---

# BASIC EXAMPLE

```js
app.get("/hello", (req, res) => {
  res.send("Hello Client");
});
```

Server sends:

```text
Status: 200
Body: Hello Client
```

---

# RESPONSE OBJECT STRUCTURE

Typical structure:

```text
res
 ├── res.status()
 ├── res.send()
 ├── res.json()
 ├── res.headers
 ├── res.cookie()
 ├── res.locals
 ├── res.download()
 └── res.end()
```

---

# 12. RESPONSE METHODS

---

# 1️⃣ res.app

## Definition

Provides reference to **Express application instance**.

Same concept as `req.app`.

---

## Example

```js
app.set("appName", "MyExpressApp");

app.get("/", (req, res) => {
  const name = res.app.get("appName");

  res.send(name);
});
```

Output:

```
MyExpressApp
```

---

# 2️⃣ res.locals

## Definition

Stores variables that are **only available during the current request-response cycle**.

Often used in:

- templating engines
- middleware communication

---

## Example

```js
app.use((req, res, next) => {
  res.locals.user = "Tanish";

  next();
});

app.get("/", (req, res) => {
  res.send(res.locals.user);
});
```

Output:

```
Tanish
```

Important:
Data stored in `res.locals` disappears after response.

---

# 3️⃣ res.headersSent

## Definition

Boolean property indicating:

```text
Has the response already been sent?
```

Returns:

```text
true  → response already sent
false → response not sent
```

---

## Example

```js
app.get("/", (req, res) => {
  res.send("Hello");

  console.log(res.headersSent);
});
```

Output:

```
true
```

Used to avoid **double response errors**.

---

# 4️⃣ res.append()

## Definition

Adds a value to an existing response header.

---

## Example

```js
app.get("/", (req, res) => {
  res.append("Warning", "Deprecated API");

  res.send("Header added");
});
```

Response header:

```
Warning: Deprecated API
```

Useful for adding metadata.

---

# 5️⃣ res.attachment()

## Definition

Sets response header to force **file download**.

Header set internally:

```text
Content-Disposition: attachment
```

---

## Example

```js
app.get("/file", (req, res) => {
  res.attachment("report.pdf");

  res.send("File will download");
});
```

Browser treats response as downloadable file.

---

# 6️⃣ res.cookie()

## Definition

Sets a cookie in client browser.

Cookies are stored on client.

---

## Example

```js
app.get("/login", (req, res) => {
  res.cookie("token", "abc123");

  res.send("Cookie set");
});
```

Browser stores:

```
token=abc123
```

---

## Cookie with Options

```js
res.cookie("token", "abc123", {
  maxAge: 60000,
  httpOnly: true,
});
```

Meaning:

- expires after 1 minute
- not accessible via JavaScript

Security feature.

---

# 7️⃣ res.clearCookie()

## Definition

Deletes a cookie from client browser.

---

## Example

```js
app.get("/logout", (req, res) => {
  res.clearCookie("token");

  res.send("Logged out");
});
```

Used during logout.

---

# 8️⃣ res.download()

## Definition

Sends a file as **downloadable attachment**.

---

## Example

```js
app.get("/download", (req, res) => {
  res.download("./files/report.pdf");
});
```

Browser automatically downloads the file.

---

# 9️⃣ res.end()

## Definition

Ends the response **without sending additional data**.

It tells Node:

```text
Response finished
```

---

## Example

```js
app.get("/", (req, res) => {
  res.write("Hello ");

  res.write("World");

  res.end();
});
```

Output:

```
Hello World
```

---

# DIFFERENCE BETWEEN res.send() AND res.end()

| Method     | Purpose                      |
| ---------- | ---------------------------- |
| res.send() | Sends data and ends response |
| res.end()  | Only ends response           |

---

# REAL WORLD API RESPONSE

Example production API:

```js
app.get("/user", (req, res) => {
  const user = {
    id: 1,
    name: "Tanish",
  };

  res.status(200).json({
    success: true,
    data: user,
  });
});
```

Client receives structured response.

---

# RESPONSE HEADERS

Response includes:

```text
Status Code
Headers
Body
```

Example:

```
HTTP/1.1 200 OK
Content-Type: application/json
Set-Cookie: token=abc123

{ "success": true }
```

---

# COMMON MISTAKES

### 1️⃣ Sending multiple responses

Wrong:

```js
res.send("Hello");
res.send("Again");
```

Error:

```
Cannot set headers after they are sent
```

---

### 2️⃣ Forgetting status codes

Always use:

```js
res.status(404);
res.status(201);
```

---

### 3️⃣ Not ending response

If response never ends → request hangs.

---

# INTERVIEW QUESTIONS

Basic:

1️⃣ What is res object?
2️⃣ Difference between res.send and res.json?
3️⃣ What is res.cookie?

---

Intermediate:

4️⃣ What does res.headersSent mean?
5️⃣ Difference between res.send and res.end?
6️⃣ When should res.locals be used?

---

Advanced:

7️⃣ How does Express extend Node response object?
8️⃣ How would you implement secure cookies?
9️⃣ How do you prevent double responses?

---

# PERFECT INTERVIEW ANSWER

Question:

What is the response object in Express?

Answer:

The response object in Express represents the HTTP response sent back to the client. It extends Node's native response object and provides additional methods such as `res.send()`, `res.json()`, `res.status()`, `res.cookie()`, and `res.download()` to easily control headers, status codes, cookies, and response data.

---

# FINAL ENGINEER MINDSET

A backend engineer always ensures:

```text
Correct status code
Correct headers
Correct response structure
Proper response termination
```

Bad response handling breaks frontend behavior.

---
