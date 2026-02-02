# Mini Project: Simple Express API

### Goal:

Ek simple REST API banana jo:

* products list kare
* single product de
* product add kare
* product delete kare

Memory-based (DB nahi), sirf learning purpose.

---

# Step 0 — Soch (Mental Model)

> “Mujhe ek backend server chahiye jo HTTP requests accept kare
> aur products naam ke data pe CRUD kare.”

Isliye:

* Express use karunga → fast + simple
* Data in-memory array me rakhenge → DB complexity avoid
* JSON API banayenge → frontend easily consume kare

---

# Step 1 — Framework setup

```js
const express = require("express");
```

### Soch:

> “Server banane ke liye framework chahiye → Express sabse simple.”

Isliye:

* `require("express")` → express library load ki

---

```js
const app = express();
```

### Soch:

> “Express ek function deta hai, usko call karke app object banta hai”

`app` = pura server instance
Routes, middleware, server sab isi pe hoga

---

```js
app.use(express.json());
```

### Soch:

> “Client body me JSON bhejega (POST request)
> mujhe usko read karna hoga → middleware chahiye”

Yeh line:

* incoming request body ko parse karta hai
* `req.body` usable bana deta hai

Agar yeh nahi hota:

```js
req.body === undefined
```

---

# Step 2 — Data Design

```js
let products = [
  { id: 1, name: "Keyboard", price: 500 },
  { id: 2, name: "Mouse", price: 300 },
];
```

### Soch:

> “DB nahi use kar raha, simple array rakhta hoon”

Assumptions:

* `id` unique hoga
* `price` number hoga
* data server memory me rahega (restart pe reset)

`let` use kiya because:

* array ko replace bhi karna hai (delete route me)

---

# Step 3 — GET all products

```js
app.get("/api/products", (req, res) => {
  res.send(products);
});
```

### Soch:

> “Client bole: mujhe saare products chahiye”

Flow:

* Route: `/api/products`
* Method: GET
* Response: pura array

No validation needed → sirf data bhejna hai

---

# Step 4 — GET single product

```js
app.get("/api/products/:id", (req, res) => {
```

### Soch:

> “Dynamic product chahiye → URL param use karna hoga”

`:id` = dynamic value
Example:
`/api/products/2`

---

```js
const product = products.find((p) => p.id === parseInt(req.params.id));
```

### Soch:

1. `req.params.id` → string hota hai (`"2"`)
2. `id` number hai (`2`)
3. strict compare (`===`) ke liye type same hona chahiye
   → `parseInt()`

Find logic:

> array me woh object dhundo jiska id match kare

---

```js
if (!product) return res.status(404).send("Product not found.");
```

### Soch:

> “Agar product mila hi nahi → error return karo”

* `!product` → undefined hua
* 404 → REST standard for "not found"

`return` is important:

> warna neeche `res.send(product)` bhi chal jaayega → crash

---

```js
res.send(product);
```

### Soch:

> “Product mil gaya → client ko bhej do”

---

# Step 5 — POST add product

```js
app.post("/api/products", (req, res) => {
```

### Soch:

> “Client body me product data bhejega → POST use karna sahi hai”

---

```js
const newProduct = { id: products.length + 1, ...req.body };
```

### Soch (important logic):

ID generation:

> “DB nahi hai, auto-increment nahi hai
> simple logic: length + 1”

Spread operator:

> `...req.body`
> Client se jo bhi fields aaye → copy into object

Example body:

```json
{
  "name": "Laptop",
  "price": 50000
}
```

Becomes:

```js
{
  id: 3,
  name: "Laptop",
  price: 50000
}
```

---

```js
products.push(newProduct);
```

### Soch:

> “Data memory me add karo”

---

```js
res.status(201).send(newProduct);
```

### Soch:

* 201 = Created (REST standard)
* client ko new object return

---

# Step 6 — DELETE product

```js
app.delete("/api/products/:id", (req, res) => {
```

### Soch:

> “Delete ke liye bhi ID chahiye → param”

---

```js
products = products.filter((p) => p.id !== parseInt(req.params.id));
```

### Soch (functional thinking):

> “Jis id ko delete karna hai, usko chhod ke baaki sab rakho”

filter logic:

* condition true → keep
* condition false → remove

Yani:

> “Jo id match kare, usko hata do”

---

```js
res.send({ message: "Product deleted" });
```

### Soch:

> “Client ko confirmation bhej do”

(No 404 handling here → improvement possible)

---

# Step 7 — Server start

```js
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

### Soch:

> “Server ko port pe listen karwana hai”

* 3000 = local dev port
* callback sirf confirmation log

---

# Debug Mindset (Real Dev Thinking)

### Issue 1: Duplicate IDs

Problem:

```js
id: products.length + 1
```

Agar delete hua:

* IDs break ho jaayenge
* duplicate risk

Fix (better):

```js
id: Date.now()
```

---

### Issue 2: No validation

Client agar bheje:

```json
{ "name": 123 }
```

Toh bhi add ho jaayega
→ validation missing

---

### Issue 3: No error handling in delete

Agar id exist hi nahi karta:

> fir bhi "Product deleted" aayega
> → logical bug

---

# Improved Thinking Version (mentally)

```txt
Request aayi
→ parse body
→ validate data
→ check existence
→ perform operation
→ send proper status code
```

---

# Architecture Mindset

Abhi yeh hai:

```
Single file
In-memory data
No validation
No layers
```

Production mindset hota:

```
routes/
controllers/
services/
models/
db/
middlewares/
```

---

# Final Summary (Developer Brain)

> "Yeh API learning ke liye perfect hai:
>
> * Express basics
> * Routing
> * Params
> * Body parsing
> * CRUD logic
> * REST structure
> * State handling"
