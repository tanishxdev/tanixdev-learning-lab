# HTTP Module – Interview Questions & Answers (Node.js)

---

## 1. What is the `http` module in Node.js?

**Answer:**

The `http` module is a **built-in core module** in Node.js used to **create web servers and handle HTTP requests and responses**.
It allows Node.js to communicate over the HTTP protocol without any external libraries.

---

## 2. Is the `http` module synchronous or asynchronous?

**Answer:**

The `http` module is **asynchronous and event-driven**.

* Incoming requests are handled via callbacks
* I/O operations do not block the event loop
* Multiple clients can be handled concurrently using a single thread

---

## 3. What does `http.createServer()` do?

**Answer:**

`http.createServer()`:

* Creates an HTTP server instance
* Accepts a callback `(req, res)`
* The callback runs **for every incoming request**

Internally, it:

* Listens for network requests
* Parses HTTP data
* Triggers the request handler

---

## 4. What are `req` and `res` objects?

**Answer:**

* `req` (Request object)

  * Contains incoming data from the client
  * Includes:

    * `req.url`
    * `req.method`
    * `req.headers`
    * request body (via streams)

* `res` (Response object)

  * Used to send data back to the client
  * Includes:

    * status code
    * headers
    * response body

---

## 5. Why do we need to call `res.end()`?

**Answer:**

`res.end()`:

* Signals that the response is complete
* Sends the response to the client
* Closes the connection

If `res.end()` is not called:

* The client will keep waiting
* The request will hang

---

## 6. Difference between `res.write()` and `res.end()`?

**Answer:**

| Method        | Purpose                                |
| ------------- | -------------------------------------- |
| `res.write()` | Sends response data in chunks          |
| `res.end()`   | Ends the response and sends final data |

You can call `res.write()` multiple times, but `res.end()` **only once**.

---

## 7. What is manual routing in the HTTP module?

**Answer:**

Manual routing means:

* Checking `req.url` and `req.method` manually
* Using `if / else` or `switch` conditions to handle routes

Example:

```js
if (req.url === '/users' && req.method === 'GET') { }
```

This becomes difficult to maintain as the app grows — which is why frameworks like Express exist.

---

## 8. Why do we need to set `Content-Type` header?

**Answer:**

The `Content-Type` header tells the client **how to interpret the response data**.

Examples:

* `text/plain` → plain text
* `text/html` → HTML page
* `application/json` → JSON API response

Without it, browsers and clients may misinterpret the response.

---

## 9. Why do we use `JSON.stringify()` before sending JSON?

**Answer:**

HTTP responses can only send:

* strings
* buffers

JavaScript objects must be converted into strings using `JSON.stringify()` before sending them in the response.

---

## 10. How does Node.js handle request body data?

**Answer:**

Request body data arrives as a **stream**.

* Data comes in chunks
* You must listen to:

  * `req.on('data')`
  * `req.on('end')`

Node does not automatically parse the body.

---

## 11. Is data stored permanently in the HTTP mini API example?

**Answer:**

No.

* Data is stored **in memory**
* Restarting the server clears the data
* This is why databases are used in real applications

---

## 12. Why is the `http` module considered low-level?

**Answer:**

Because:

* No built-in routing
* No middleware
* No body parsing
* No error handling helpers

Frameworks like Express build abstractions on top of `http` to solve these problems.

---

## 13. How is Express related to the HTTP module?

**Answer:**

Express internally uses the Node.js `http` module.

* `http` → low-level networking
* Express → high-level abstraction for routing, middleware, and APIs

Understanding `http` makes Express easier to understand.

---

## 14. What happens when you visit `http://localhost:3000` in a browser?

**Answer:**

1. Browser sends an HTTP request
2. Node HTTP server receives it
3. `createServer` callback executes
4. Server sends a response using `res`
5. Browser renders the response

---

## 15. Is Node.js multi-threaded when handling HTTP requests?

**Answer:**

No.

* Node.js runs JavaScript on a **single thread**
* Uses asynchronous I/O and event loop
* Can handle many concurrent HTTP requests efficiently

---

## 16. Why is the HTTP module important for interviews?

**Answer:**

Because it proves:

* You understand how servers work internally
* You are not dependent on frameworks
* You understand request–response lifecycle

Interviewers often ask:

> “What does Express use internally?”

Correct answer: **Node.js HTTP module**

---

## 17. One-Line Interview Answers (Rapid Fire)

* HTTP module → core Node module for servers
* `req` → incoming request
* `res` → outgoing response
* `res.end()` → finishes response
* JSON must be stringified
* Manual routing is error-prone
* Express is built on top of `http`

---

## Final Interview Summary

> The Node.js `http` module provides the low-level building blocks for creating web servers, handling HTTP requests and responses, and understanding it is essential to mastering backend development and frameworks like Express.
