# Topic 17 Authentication & Authorization (JWT + Password Hashing)

---

### **Concept**

**What is Authentication & Authorization?**

* **Authentication** → verifying *who* the user is (login/signup).
* **Authorization** → verifying *what* that authenticated user is allowed to do (role-based access).

Example:

* Authentication → user logs in with email/password.
* Authorization → only admins can delete users or books.

---

### **Why We Need It**

| Need                       | Solution                                                 |
| -------------------------- | -------------------------------------------------------- |
| Protect routes & resources | Use tokens (JWT) for identity verification               |
| Secure passwords           | Hash passwords before storing                            |
| Manage access roles        | Use middleware to restrict routes                        |
| Stateless sessions         | Use JWT (stored on client-side) instead of server memory |

---

### **Technologies Used**

| Tool                   | Purpose                       |
| ---------------------- | ----------------------------- |
| **bcryptjs**           | Hash passwords before saving  |
| **jsonwebtoken (JWT)** | Generate & verify user tokens |
| **Express Middleware** | Protect private routes        |

---

### **How It Works**

1. User **signs up** → password hashed and saved.
2. User **logs in** → password verified → JWT generated.
3. User sends **JWT in request headers** for protected routes.
4. Middleware verifies the JWT → grants or denies access.

---

### **Folder Structure**

```
auth-api/
│
├── app.js
├── models/
│   └── userModel.js
├── controllers/
│   └── authController.js
└── middleware/
    └── authMiddleware.js
```

---

### **Step 1: Install Dependencies**

```bash
npm init -y
npm install express mongoose bcryptjs jsonwebtoken
```

---

### **Step 2: User Schema (Password Hashing)**

**File:** `models/userModel.js`

```js
// ===========================
// User Schema with Password Hashing
// ===========================

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
}, { timestamps: true });

// Pre-save middleware → hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10); // saltRounds = 10
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
```

---

### **Step 3: Auth Controller**

**File:** `controllers/authController.js`

```js
// ===========================
// Authentication Controller
// ===========================

const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, 'secret_key_123', { expiresIn: '1h' });
};

// REGISTER User
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already exists' });

    const user = await User.create({ name, email, password });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// LOGIN User
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = generateToken(user._id);
  res.json({ message: 'Login successful', token });
};

// GET Profile (protected route)
exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json({ success: true, user });
};
```

---

### **Step 4: Auth Middleware (JWT Verification)**

**File:** `middleware/authMiddleware.js`

```js
// ===========================
// JWT Authentication Middleware
// ===========================

const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>
    if (!token) return res.status(401).json({ message: 'Not authorized, token missing' });

    const decoded = jwt.verify(token, 'secret_key_123');
    req.user = await User.findById(decoded.id).select('-password');

    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Role-based access control
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res.status(403).json({ message: 'Access denied' });
    next();
  };
};
```

---

### **Step 5: Express App Setup**

**File:** `app.js`

```js
// ===========================
// Main App File (Auth API)
// ===========================

const express = require('express');
const mongoose = require('mongoose');
const { register, login, getProfile } = require('./controllers/authController');
const { protect, restrictTo } = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/authDB')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.log('DB Error:', err));

// Routes
app.post('/api/register', register);
app.post('/api/login', login);
app.get('/api/profile', protect, getProfile);
app.get('/api/admin', protect, restrictTo('admin'), (req, res) => res.send('Admin Access Granted'));

// Start server
app.listen(4000, () => console.log('Auth API running on http://localhost:4000'));
```

---

### **Testing the API (Postman)**

| Step | Endpoint        | Method | Body                                                           | Result             |
| ---- | --------------- | ------ | -------------------------------------------------------------- | ------------------ |
| 1    | `/api/register` | POST   | `{ "name":"Tanish", "email":"t@ex.com", "password":"123456" }` | Registers new user |
| 2    | `/api/login`    | POST   | `{ "email":"t@ex.com", "password":"123456" }`                  | Returns JWT token  |
| 3    | `/api/profile`  | GET    | Header → `Authorization: Bearer <token>`                       | Shows user profile |
| 4    | `/api/admin`    | GET    | Header → `Authorization: Bearer <admin-token>`                 | Only admin allowed |

---

### **Mini Project: Authentication Flow**

**Goal:** Build a secure login/signup system with protected profile route.

**Use Case:**

* User registers → password hashed.
* Login → returns token.
* Access profile → only valid token works.
* Access admin route → only admin allowed.

---

### **Dependencies**

| Package          | Purpose                         |
| ---------------- | ------------------------------- |
| **express**      | Web framework                   |
| **mongoose**     | Database ODM                    |
| **bcryptjs**     | Password hashing                |
| **jsonwebtoken** | Token creation and verification |

---

### **Notes**

* Use `bcrypt.hash()` for password encryption, never store plain passwords.
* JWT contains encoded user ID, used to verify identity.
* Always include token as `"Authorization: Bearer <token>"`.
* Token-based systems are **stateless**, scalable, and frontend-friendly.
* In production → store JWT secret in `.env` file, not hardcoded.

---

### **Security Summary**

| Feature                | Implementation                   |
| ---------------------- | -------------------------------- |
| **Password Hashing**   | bcryptjs with salt               |
| **Token Generation**   | JWT sign()                       |
| **Route Protection**   | Middleware checks                |
| **Role Authorization** | `restrictTo('admin')` middleware |

---


# **Postman Testing Guide – Topic 17: Authentication & Authorization (JWT + bcrypt)**

---

### **Overview**

You have the following routes in your API:

| Method | Endpoint        | Description              | Protected          |
| ------ | --------------- | ------------------------ | ------------------ |
| POST   | `/api/register` | Register new user        | ❌ No               |
| POST   | `/api/login`    | Login user and get token | ❌ No               |
| GET    | `/api/profile`  | Get user details         | ✅ Yes              |
| GET    | `/api/admin`    | Access admin-only route  | ✅ Yes (role-based) |

---

### **1. Register a New User**

**Endpoint:**
`POST http://localhost:4000/api/register`

**Purpose:**
To create a new user with name, email, and password.

**Body (JSON):**

```json
{
  "name": "Tanish Kumar",
  "email": "tanish@example.com",
  "password": "123456"
}
```

**Headers:**

```
Content-Type: application/json
```

**Expected Response (201 Created):**

```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "673a9c8c4c35b65e9a6e42f0",
    "name": "Tanish Kumar",
    "email": "tanish@example.com",
    "role": "user",
    "createdAt": "2025-11-08T17:02:15.000Z",
    "updatedAt": "2025-11-08T17:02:15.000Z"
  }
}
```

**Notes:**

* This automatically hashes the password before saving.
* If the email already exists → returns `400 Bad Request`.

**Error Response Example:**

```json
{
  "message": "Email already exists"
}
```

---

### **2. Login User**

**Endpoint:**
`POST http://localhost:4000/api/login`

**Purpose:**
To verify credentials and get a JWT token.

**Body (JSON):**

```json
{
  "email": "tanish@example.com",
  "password": "123456"
}
```

**Expected Response (200 OK):**

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Notes:**

* Copy the `"token"` value from the response.
* You’ll need it in **Authorization header** for protected routes.

**Error Example (Invalid Password):**

```json
{
  "message": "Invalid credentials"
}
```

---

### **3. Access Protected Profile Route**

**Endpoint:**
`GET http://localhost:4000/api/profile`

**Purpose:**
To test JWT-based protection and verify user identity.

**Headers:**

```
Content-Type: application/json
Authorization: Bearer <paste-your-token-here>
```

**Expected Response (200 OK):**

```json
{
  "success": true,
  "user": {
    "_id": "673a9c8c4c35b65e9a6e42f0",
    "name": "Tanish Kumar",
    "email": "tanish@example.com",
    "role": "user",
    "createdAt": "2025-11-08T17:02:15.000Z"
  }
}
```

**If No Token Provided → (401 Unauthorized):**

```json
{
  "message": "Not authorized, token missing"
}
```

**If Token Invalid → (401 Unauthorized):**

```json
{
  "message": "Invalid or expired token"
}
```

---

### **4. Access Admin-Only Route**

**Endpoint:**
`GET http://localhost:4000/api/admin`

**Purpose:**
To check role-based route protection using `restrictTo('admin')`.

**Headers:**

```
Authorization: Bearer <admin-user-token>
```

**Expected Response (200 OK):**

```json
"Admin Access Granted"
```

**Error (Normal User Token):**

```json
{
  "message": "Access denied"
}
```

---

### **5. Example Admin Account Creation (for Testing)**

If you don’t have an admin account, you can manually create one from the database.

**Option 1 – MongoDB Shell:**

```bash
use authDB
db.users.insertOne({
  name: "Admin User",
  email: "admin@example.com",
  password: "$2a$10$8afW2HcPn1...",
  role: "admin"
})
```

*(Password should be bcrypt-hashed manually or copied from a registered user)*

**Option 2 – Register and Update Role via MongoDB Compass:**

* Register a normal user
* In Compass → open `authDB > users`
* Edit the document → change `"role": "admin"`

Now you can log in using:

```json
{
  "email": "admin@example.com",
  "password": "123456"
}
```

And test the `/api/admin` route again with that token.

---

### **6. Common Postman Setup Tips**

| Setting                  | Description                                         |
| ------------------------ | --------------------------------------------------- |
| **Environment Variable** | Save your JWT token as `{{token}}` for quick reuse. |
| **Headers Tab**          | Add `Authorization: Bearer {{token}}` globally.     |
| **Tests Tab (Optional)** | Auto-store token after login.                       |

**Auto-store JWT after login:**
In Postman, under the `Tests` tab for `/api/login`, paste:

```js
const data = pm.response.json();
pm.environment.set("token", data.token);
```

Now Postman automatically saves your token in the environment variable `{{token}}`, and you can reuse it across protected routes.

---

### **7. Test Summary**

| Test Case                        | Method | Endpoint        | Expected Result    |
| -------------------------------- | ------ | --------------- | ------------------ |
| Register new user                | POST   | `/api/register` | 201 Created        |
| Login user                       | POST   | `/api/login`    | 200 OK + JWT Token |
| Access Profile (valid token)     | GET    | `/api/profile`  | 200 OK + User Info |
| Access Profile (no token)        | GET    | `/api/profile`  | 401 Unauthorized   |
| Access Admin route (normal user) | GET    | `/api/admin`    | 403 Forbidden      |
| Access Admin route (admin user)  | GET    | `/api/admin`    | 200 OK             |

---

### **8. Bonus: Quick curl Tests (CLI)**

```bash
# Register
curl -X POST http://localhost:4000/api/register \
-H "Content-Type: application/json" \
-d '{"name":"Tanish","email":"tanish@example.com","password":"123456"}'

# Login
curl -X POST http://localhost:4000/api/login \
-H "Content-Type: application/json" \
-d '{"email":"tanish@example.com","password":"123456"}'

# Profile (Protected)
curl -X GET http://localhost:4000/api/profile \
-H "Authorization: Bearer <your-token-here>"
```

---

### **✅ Revision Summary**

| Concept           | Tool         | Purpose                             |
| ----------------- | ------------ | ----------------------------------- |
| Password Hashing  | bcryptjs     | Secure user passwords               |
| Token Auth        | JWT          | User identity via signed token      |
| Route Protection  | Middleware   | Checks token before granting access |
| Role-based Access | restrictTo() | Allow admin-only routes             |
| Testing           | Postman      | Verify all endpoints easily         |

---