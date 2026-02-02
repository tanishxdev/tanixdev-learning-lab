# File ka role (mentally)

> “Mujhe MongoDB me users store karne hain
> par raw MongoDB messy hota hai → structure + validation chahiye
> → Mongoose schema + model banaunga”

Yeh file ka kaam:

- DB structure define karna
- rules define karna
- MongoDB ke documents ko control karna
- ek **User entity** banana

---

# Step-by-step Developer Thinking

## 1. Library import

```js
const mongoose = require("mongoose");
```

### Soch:

> “MongoDB direct driver use nahi karunga
> Mongoose use karunga kyunki:”

- schema milta hai
- validation milta hai
- models milte hain
- clean API milti hai

Matlab:

> mongoose = ORM/ODM layer between app and MongoDB

---

# 2. Schema banana (structure definition)

```js
const userSchema = new mongoose.Schema(
```

### Soch:

> “DB me jo user document banega, uska structure define karna hai”

Schema = **blueprint / contract**

Jaise:

> “User ka format fixed hoga”

---

## 3. Fields definition

```js
{
  name: {
    type: String,
    required: true,
    trim: true,
  },
```

### Developer brain:

> “User ka naam hona hi chahiye”

- `type: String` → data type
- `required: true` → empty nahi ho sakta
- `trim: true` → whitespace auto remove
  `"  Tanish  "` → `"Tanish"`

Soch:

> “Dirty input clean karna system ka kaam hai, user pe depend nahi”

---

```js
email: {
  type: String,
  unique: true,
  required: true,
},
```

### Soch:

> “Email user ka identity hota hai”

Rules:

- `required: true` → must
- `unique: true` → duplicate user nahi hone chahiye

Mentally:

> “Same email = same user”

---

```js
age: {
  type: Number,
  min: 10,
},
```

### Soch:

> “Age optional hai
> par agar aaye toh realistic ho”

- `min: 10` → validation rule
- below 10 → DB reject karega

---

# 4. Schema options

```js
},
{ timestamps: true },
);
```

### Soch:

> “Har record ke sath tracking honi chahiye”

MongoDB automatically add karega:

```js
createdAt;
updatedAt;
```

So future me:

- sorting
- logs
- analytics
- audits
  possible ho jaate hain

---

# 5. Model creation

```js
const User = mongoose.model("User", userSchema);
```

### Yeh MOST IMPORTANT LINE hai

### Soch:

> “Schema sirf structure hai
> Model = actual DB operator”

Mental mapping:

```
Schema = design
Model  = machine
```

`User` model = interface to DB

Iske through hi:

```js
User.find();
User.create();
User.updateOne();
User.deleteOne();
```

possible hota hai

---

# 6. Export

```js
module.exports = User;
```

### Soch:

> “App ke kisi bhi part me User model use kar sakoon”

Example:

```js
const User = require("./models/User");
```

---

# Mental Flow (real dev brain)

```txt
Client request
   ↓
Controller
   ↓
User model
   ↓
MongoDB
   ↓
Response
```

---

# MongoDB Document Example (actual DB me)

```json
{
  "_id": "65ff1a...",
  "name": "Tanish",
  "email": "tanish@example.com",
  "age": 20,
  "createdAt": "2026-01-23T10:00:00Z",
  "updatedAt": "2026-01-23T10:00:00Z",
  "__v": 0
}
```

---

# Developer Design Decisions

### Why Schema?

> structure + validation + consistency

### Why Model?

> DB operations abstraction

### Why not raw MongoDB?

> messy, no structure, no validation, manual errors

---

# Real-world thinking

This file represents:

> **Domain Model**

In clean architecture terms:

- User = Entity
- Schema = Rules
- Model = DB gateway

---

# Bugs / Risks (developer mindset)

1. ❌ Email lowercase handling missing
   → `"Test@x.com"` and `"test@x.com"` treated different

Fix:

```js
email: {
  type: String,
  unique: true,
  required: true,
  lowercase: true,
  trim: true
}
```

---

2. ❌ No email format validation

Should add:

```js
match: /.+\@.+\..+/;
```

---

3. ❌ No name length control

Should add:

```js
minlength: 2,
maxlength: 50
```

---

# Improved Realistic Version (mentally correct model)

```js
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
      match: /.+\@.+\..+/,
    },
    age: {
      type: Number,
      min: 10,
    },
  },
  { timestamps: true },
);
```

---

# One-line mental summary

> Schema = rules
> Model = DB machine
> User model = gateway between app and MongoDB

---

# Doubts

Short answer: **Conceptually same entity hona chahiye, variable name exact same hona zaroori nahi — but mapping correct hona chahiye.**

---

## Line in question

```js
const User = mongoose.model("User", userSchema);
```

Aur upar:

```js
const userSchema = new mongoose.Schema({...});
```

---

# 1. `userSchema` (JS variable)

```js
const userSchema = ...
```

### Soch:

> “Yeh sirf JS variable hai”

Rules:

- Naam kuch bhi ho sakta hai:

  ```js
  const schema = ...
  const mySchema = ...
  const userStructure = ...
  ```

- JS ko farak nahi padta

Ye sirf **code-level variable name** hai.

---

# 2. `"User"` (Model name string)

```js
mongoose.model("User", userSchema);
```

### Soch:

> “Yeh MongoDB + Mongoose identity name hai”

This `"User"` is:

- Model ka naam
- Collection name ka base
- DB identity

MongoDB me banega:

```
users   ← plural + lowercase
```

---

# 3. Mapping Logic

```js
mongoose.model("User", userSchema);
```

### Mental mapping:

```
Model Name  → "User"
Schema Ref  → userSchema
```

Meaning:

> “User model ka structure = userSchema”

---

# Important Rule

❌ This is NOT required:

```txt
"User" === userSchema
```

They are **different things**:

| Part         | Type     | Role                 |
| ------------ | -------- | -------------------- |
| `"User"`     | string   | Model identity       |
| `userSchema` | variable | Structure definition |
| `User`       | const    | Model object         |

---

# Example to understand

This is 100% valid:

```js
const abc = new mongoose.Schema({...});

const XYZ = mongoose.model("User", abc);
```

Still works.

Because mapping is:

```
Model "User" uses schema abc
```

---

# Developer Mental Model

```txt
Schema variable name = programmer convenience
Model name string   = DB identity
Model const name    = app usage name
```

---

# Why people keep same naming?

```js
const userSchema = ...
const User = mongoose.model("User", userSchema);
```

### Reason:

> readability + mental clarity

Not technical requirement
Only **human readability standard**

---

# Real-world convention (best practice)

```js
const userSchema = new mongoose.Schema(...)
const User = mongoose.model("User", userSchema)
```

Because:

- clear
- readable
- predictable
- scalable

---

# Final Answer (clean)

### ❌ Not required:

> names exactly same hone chahiye

### ✅ Required:

> **Schema reference correct hona chahiye**

This line:

```js
mongoose.model("User", userSchema);
```

Means:

> "User model uses userSchema structure"

Bas.

---

# One-liner dev summary

> `userSchema` = structure variable
> `"User"` = DB identity
> `User` = app-level model object

Teen alag cheezein hain.

---

Perfect.
**Rebuilding all 3 core files** for this structure:

```
mongo-demo/
│
├── data/
│   └── users.json
│
├── models/
│   └── userModel.js
│
├── .env
├── app.js
```

No theory. No explanation.
**Final production-clean code only.**

---

# `data/users.json`

```json
[]
```

(Empty initial DB state – MongoDB primary, JSON only for reference/demo)

---

# `models/userModel.js`

```js
const mongoose = require("mongoose");

/* =========================
   User Schema
========================= */

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /.+\@.+\..+/,
    },

    age: {
      type: Number,
      min: 10,
    },
  },
  { timestamps: true },
);

/* =========================
   User Model
========================= */

const User = mongoose.model("User", userSchema);

module.exports = User;
```

---

# `app.js`

```js
// ===========================
// CRUD with Mongoose
// ===========================

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/userModel");

/* =========================
   Config
========================= */

dotenv.config();

const app = express();
app.use(express.json());

/* =========================
   DB Connection
========================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err.message));

/* =========================
   Routes
========================= */

// CREATE - Add new user
app.post("/api/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ - Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ - Get user by ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(400).json({ message: "Invalid user ID" });
  }
});

// UPDATE - Update user
app.put("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User updated", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - Remove user
app.delete("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ message: "Invalid user ID" });
  }
});

/* =========================
   Server
========================= */

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
```

---

# `.env`

```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/userDB
```

---

## System Architecture (now correct)

```
app.js        → API + Server + Routes
models/       → DB Models
MongoDB       → Real database
data/         → optional reference storage
.env          → secrets/config
```
