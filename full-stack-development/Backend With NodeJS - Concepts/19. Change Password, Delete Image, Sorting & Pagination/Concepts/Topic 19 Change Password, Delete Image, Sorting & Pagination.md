# Topic 19 Change Password, Delete Image, Sorting & Pagination

---

### **Concept**

This chapter adds **advanced backend operations** to your existing API (like the Auth + File Upload system).
We’ll implement **4 real-world features**:

1. **Change Password** (Secure update for logged-in users)
2. **Delete Uploaded Image** (Remove unwanted or old profile images)
3. **Sorting** (Sort data by price, name, date, etc.)
4. **Pagination** (Efficiently fetch large datasets page-by-page)

---

## **1. Change Password**

---

### **Concept**

When a user is logged in, they can securely change their password only by providing the **old password** and **new password**.
We’ll:

* Verify current password using bcrypt.
* Hash the new password before saving.
* Return a success response.

---

### **File:** `controllers/authController.js` (extend existing)

```js
// ===========================
// Change Password Controller
// ===========================

const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// PATCH /api/change-password
exports.changePassword = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const { currentPassword, newPassword } = req.body;

    // Verify old password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Incorrect current password' });

    // Hash new password
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
```

---

### **Route:**

**File:** `app.js` or `routes/authRoutes.js`

```js
const { protect } = require('./middleware/authMiddleware');
const { changePassword } = require('./controllers/authController');

app.patch('/api/change-password', protect, changePassword);
```

---

### **Test in Postman**

**Endpoint:** `PATCH http://localhost:4000/api/change-password`

**Headers:**

```
Authorization: Bearer <your-jwt-token>
```

**Body (JSON):**

```json
{
  "currentPassword": "123456",
  "newPassword": "newpass123"
}
```

**Response:**

```json
{
  "message": "Password updated successfully"
}
```

---

## **2. Delete Uploaded Image**

---

### **Concept**

Delete a file stored locally (like user profile image).
We’ll use Node’s **`fs`** module to remove the file from disk.

---

### **File:** `controllers/fileController.js`

```js
// ===========================
// Delete Uploaded Image
// ===========================

const fs = require('fs');
const path = require('path');

exports.deleteImage = async (req, res) => {
  try {
    const imagePath = path.join(__dirname, '..', 'uploads', req.body.filename);

    // Check if file exists
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
      return res.json({ message: 'Image deleted successfully' });
    } else {
      return res.status(404).json({ message: 'File not found' });
    }

  } catch (err) {
    res.status(500).json({ message: 'Error deleting image', error: err.message });
  }
};
```

---

### **Route:**

```js
app.delete('/api/delete-image', require('./controllers/fileController').deleteImage);
```

---

### **Test in Postman**

**Endpoint:** `DELETE http://localhost:4000/api/delete-image`

**Body (JSON):**

```json
{
  "filename": "1731072235443-myphoto.png"
}
```

**Response:**

```json
{
  "message": "Image deleted successfully"
}
```

If the file doesn’t exist:

```json
{
  "message": "File not found"
}
```

---

## **3. Sorting Data (MongoDB + Query Params)**

---

### **Concept**

Sorting allows clients to request data in a specific order —
for example, books by price or date.

We’ll implement this in the **Book Store API**.

---

### **File:** `controllers/bookController.js` (update getBooks)

```js
// ===========================
// Get Books with Sorting
// ===========================

exports.getBooks = async (req, res) => {
  try {
    const sortField = req.query.sortBy || 'createdAt';
    const sortOrder = req.query.order === 'desc' ? -1 : 1;

    const books = await Book.find().sort({ [sortField]: sortOrder });
    res.json({ success: true, count: books.length, data: books });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
```

---

### **Test in Postman**

**Endpoint:**
`GET http://localhost:5000/api/books?sortBy=price&order=desc`

**Response:**

```json
{
  "success": true,
  "count": 3,
  "data": [
    { "title": "Advanced Node", "price": 900 },
    { "title": "Learn Express", "price": 400 },
    { "title": "Basics of JS", "price": 250 }
  ]
}
```

---

## **4. Pagination**

---

### **Concept**

Pagination divides large datasets into smaller pages.
We’ll use query params `page` and `limit`.

---

### **Code:**

**File:** `controllers/bookController.js` (append logic)

```js
// ===========================
// Get Books with Pagination
// ===========================

exports.getBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;      // current page number
    const limit = parseInt(req.query.limit) || 5;    // items per page
    const skip = (page - 1) * limit;                 // calculate items to skip

    const total = await Book.countDocuments();
    const books = await Book.find().skip(skip).limit(limit);

    res.json({
      success: true,
      totalBooks: total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      data: books
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
```

---

### **Test in Postman**

**Endpoint:**
`GET http://localhost:5000/api/books?page=2&limit=3`

**Response:**

```json
{
  "success": true,
  "totalBooks": 12,
  "currentPage": 2,
  "totalPages": 4,
  "data": [
    { "title": "Book 4" },
    { "title": "Book 5" },
    { "title": "Book 6" }
  ]
}
```

---

### **Combine Sorting + Pagination**

**Example Query:**

```
GET /api/books?page=1&limit=5&sortBy=price&order=asc
```

Mongoose handles both together efficiently.

---

## **Mini Project: Book API with Sorting + Pagination**

**Goal:** Extend your existing Book Store API
to support sorting and pagination in a single request.

---

### **File:** `controllers/bookController.js` (final version)

```js
// ===========================
// Mini Project: Book API (Sort + Paginate)
// ===========================

exports.getBooks = async (req, res) => {
  try {
    const sortField = req.query.sortBy || 'createdAt';
    const sortOrder = req.query.order === 'desc' ? -1 : 1;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const total = await Book.countDocuments();
    const books = await Book.find()
      .sort({ [sortField]: sortOrder })
      .skip(skip)
      .limit(limit);

    res.json({
      success: true,
      totalBooks: total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      sortBy: sortField,
      order: sortOrder === 1 ? 'asc' : 'desc',
      data: books
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
```

**Endpoint Example:**

```
GET http://localhost:5000/api/books?page=1&limit=3&sortBy=price&order=desc
```

---

### **Dependencies**

| Package          | Purpose                           |
| ---------------- | --------------------------------- |
| **bcryptjs**     | Hash + compare passwords          |
| **jsonwebtoken** | Token verification (already used) |
| **fs**           | Delete images from uploads folder |
| **mongoose**     | Sorting & pagination queries      |

---

### **Notes**

* Always require old password before allowing change.
* Avoid exposing password hashes in any response.
* Validate query params (`page`, `limit`, `sortBy`) before using.
* Always delete unused files to free up server storage.
* Sorting + Pagination keeps APIs fast for large datasets.

---

### **Quick Summary Table**

| Feature         | Method | Endpoint                            | Description              |
| --------------- | ------ | ----------------------------------- | ------------------------ |
| Change Password | PATCH  | `/api/change-password`              | Securely update password |
| Delete Image    | DELETE | `/api/delete-image`                 | Remove uploaded file     |
| Sorting         | GET    | `/api/books?sortBy=price&order=asc` | Sort data dynamically    |
| Pagination      | GET    | `/api/books?page=1&limit=5`         | Limit records per page   |

---
