# **Node.js Practice Sheet (All 25 Topics)**

---

## **Topic 1 — Intro to Node.js**

**Problem:**
Create a simple HTTP server that sends `"Welcome to Node.js!"` as a response.
It should run on port `3000`.

**Expected Output (Browser):**

```
Welcome to Node.js!
```

**Hint:**
Use the built-in `http` module → `http.createServer((req, res) => {...})`.

---

## **Topic 2 — Installing & Running Node**

**Problem:**
Run a JS file (`hello.js`) that logs your name and current date.

**Expected Output (Terminal):**

```
User: Tanish Kumar
Date: 2025-11-08
```

**Hint:**
Use `node hello.js` in terminal, and `new Date()` for date.

---

## **Topic 3 — Module System**

**Problem:**
Create a `math.js` module exporting `add` and `multiply`.
Import and use them in `app.js`.

**Expected Output:**

```
Sum: 15
Product: 50
```

**Hint:**
Use `module.exports` and `require('./math')`.

---

## **Topic 4 — NPM Basics**

**Problem:**
Use the `chalk` npm package to print `"Server started!"` in green.

**Expected Output:**

```
(Server started! in green color)
```

**Hint:**
Install `chalk` → `npm install chalk` and import it.

---

## **Topic 5 — Path Module**

**Problem:**
Given a file path `"./files/data.txt"`, print:

* File name
* Extension
* Absolute path

**Expected Output:**

```
Filename: data.txt
Extension: .txt
Full path: C:\Users\...\files\data.txt
```

**Hint:**
Use `path.basename()`, `path.extname()`, `path.resolve()`.

---

## **Topic 6 — File System (fs)**

**Problem:**
Create a file `log.txt` and append a line every time the program runs:

```
App started at <current time>
```

**Expected Output (log.txt):**

```
App started at 10:01 PM
App started at 10:05 PM
```

**Hint:**
Use `fs.appendFile()` with `new Date()`.

---

## **Topic 7 — HTTP Module**

**Problem:**
Create an HTTP server that responds:

* `/` → “Home Page”
* `/about` → “About Page”
* Else → “404 Not Found”

**Expected Output:**

```
Home Page / About Page / 404 Not Found
```

**Hint:**
Use `req.url` for routing conditions.

---

## **Topic 8 — Callbacks**

**Problem:**
Simulate a delay using `setTimeout()` and print:

```
Fetching data...
Data received!
```

**Hint:**
Wrap `console.log('Data received!')` inside `setTimeout()` callback.

---

## **Topic 9 — Callback Hell**

**Problem:**
Create 3 nested `setTimeout()` calls that print:

```
Step 1
Step 2
Step 3
```

**Hint:**
Each inside the previous callback.

---

## **Topic 10 — Promises**

**Problem:**
Convert previous “callback hell” into a chain of Promises.

**Expected Output:**

```
Step 1
Step 2
Step 3
```

**Hint:**
Return `Promise.resolve()` for each step.

---

## **Topic 11 — Async/Await**

**Problem:**
Write an async function `getData()` that waits 2 seconds and then prints:

```
Data loaded successfully!
```

**Hint:**
Use `await new Promise(resolve => setTimeout(resolve, 2000))`.

---

## **Topic 12 — Event Emitter**

**Problem:**
Emit an event `"log"` whenever a file write operation is performed.

**Expected Output:**

```
File written successfully!
LOG: File operation completed.
```

**Hint:**
Use `events` module → `emitter.on('log', handler)`.

---

## **Topic 13 — Express.js**

**Problem:**
Create an Express server with one route `/api/hello` returning JSON:

```json
{ "message": "Hello Express!" }
```

**Hint:**
Use `app.get('/api/hello', ...)` with `res.json()`.

---

## **Topic 14 — EJS Template Engine**

**Problem:**
Render a view `home.ejs` that displays:

```
Welcome <%= name %>
```

**Expected Output (Browser):**

```
Welcome Tanish
```

**Hint:**
`res.render('home', { name: 'Tanish' })`

---

## **Topic 15 — REST API Development**

**Problem:**
Create routes for `/api/books` supporting GET and POST operations using Express.

**Expected Output:**

```
GET → list of books
POST → new book added
```

**Hint:**
Use `express.json()` middleware + in-memory array.

---

## **Topic 16 — MongoDB + Mongoose**

**Problem:**
Create a `Book` model and save a document `{ title: 'Node Basics', price: 299 }`.

**Expected Output (DB):**

```
Inserted Document with _id and fields.
```

**Hint:**
Use `mongoose.model()` + `book.save()`.

---

## **Topic 17 — Auth + JWT**

**Problem:**
Build login route that returns a JWT on valid credentials.

**Expected Output:**

```json
{ "token": "eyJhbGci..." }
```

**Hint:**
Use `jsonwebtoken.sign({ id }, secret)`.

---

## **Topic 18 — File Uploads**

**Problem:**
Create an upload route `/upload` that accepts one image and stores it in `uploads/`.

**Expected Output:**

```
File uploaded successfully
```

**Hint:**
Use `multer.diskStorage()` + `upload.single('image')`.

---

## **Topic 19 — Password Change + Pagination**

**Problem:**
Implement `PATCH /api/change-password` verifying old password and updating new one.
Also add pagination to `/api/users?page=1&limit=5`.

**Hint:**
Use `bcrypt.compare()` for validation + `.skip().limit()` for pagination.

---

## **Topic 20 — Aggregation**

**Problem:**
Group all sales by `bookId` and calculate total revenue per book.

**Expected Output:**

```json
[{ "_id": "book123", "totalRevenue": 5500 }]
```

**Hint:**
Use `$group: { _id: "$bookId", totalRevenue: { $sum: "$total" } }`.

---

## **Topic 21 — Socket.io**

**Problem:**
Build a chat server that broadcasts messages from one client to all others.

**Expected Output (Console):**

```
User connected
User said: Hello everyone!
```

**Hint:**
Use `socket.on('message', handler)` + `io.emit('message', msg)`.

---

## **Topic 22 — Deployment (PM2 + Env)**

**Problem:**
Create `.env` file for `PORT` and use PM2 to start your app.

**Expected Output:**

```
Server running on port 4000 (via PM2)
```

**Hint:**
Use `dotenv.config()` + `pm2 start app.js`.

---

## **Topic 23 — GraphQL**

**Problem:**
Create GraphQL schema for `User` and add query:

```graphql
{
  users {
    id
    name
  }
}
```

**Expected Output:**

```json
{ "data": { "users": [ { "id": "1", "name": "Tanish" } ] } }
```

**Hint:**
Use `express-graphql` + `GraphQLList(UserType)`.

---

## **Topic 24 — TypeScript Integration**

**Problem:**
Write an Express route in TypeScript returning `{ message: "Hello TS" }`.

**Expected Output:**

```json
{ "message": "Hello TS" }
```

**Hint:**
Use `import express, { Request, Response }` and define types.

---

## **Topic 25 — Real-World Project Deployment**

**Problem:**
Deploy your Book Store or Auth API to Render (or Railway).
Return the live URL.

**Expected Output:**

```
https://book-api.onrender.com/api/books
```

**Hint:**
Push to GitHub → Render → New Web Service → Set environment vars → Deploy.

---

# **Extra: 5 Bonus Full Projects for Mastery**

| Project                       | Features                              | Key Concepts         |
| ----------------------------- | ------------------------------------- | -------------------- |
| **1. Auth API**               | Register, Login, JWT, Change Password | Express, bcrypt, JWT |
| **2. Blog API**               | CRUD + MongoDB + Pagination           | REST + DB            |
| **3. File Manager**           | Upload, Delete, Serve files           | Multer + fs          |
| **4. Chat App**               | Real-time group chat                  | Socket.io            |
| **5. Book Store GraphQL API** | CRUD via GraphQL + MongoDB            | GraphQL + Mongoose   |

---
