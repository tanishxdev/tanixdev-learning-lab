# Topic 18 File Upload in Node.js (Express + Multer)

---

### **Concept**

**What is File Uploading?**

* File upload allows a user to send a **file (image, PDF, video, etc.)** from client to server.
* In Node.js, file uploads are typically handled using **Multer**, a popular middleware for handling `multipart/form-data`.

---

### **Why Multer?**

| Problem                                     | Solution (with Multer)                         |
| ------------------------------------------- | ---------------------------------------------- |
| Express can’t parse file uploads by default | Multer parses `multipart/form-data` requests   |
| Need to handle large files efficiently      | Multer streams data in chunks                  |
| Need to store files securely                | Multer provides flexible storage (disk/memory) |
| Need filename customization                 | Multer allows custom file naming using options |

---

### **How It Works**

1. Client sends a `POST` request with `Content-Type: multipart/form-data`.
2. Multer intercepts and parses the file.
3. File is saved in the specified folder or kept in memory.
4. Metadata (like `req.file`) is available to your route handler.

---

### **Folder Setup**

```
file-upload-demo/
│
├── app.js
├── uploads/
│   └── (files will be saved here)
└── package.json
```

---

### **Step 1: Install Packages**

```bash
npm init -y
npm install express multer
```

---

### **Code Example 1: Basic File Upload**

**File:** `app.js`

```js
// ===========================
// Example: Single File Upload
// ===========================

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// -----------------------------
// Multer Configuration (Storage)
// -----------------------------

// Define where and how files will be stored
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // upload directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Initialize multer with storage config
const upload = multer({ storage: storage });

// -----------------------------
// Route for Single File Upload
// -----------------------------
app.post('/upload', upload.single('image'), (req, res) => {
  console.log('Uploaded File:', req.file);
  res.send({ message: 'File uploaded successfully', file: req.file });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

---

### **Testing in Postman**

**Endpoint:**
`POST http://localhost:3000/upload`

**Body (Form-Data):**

| Key   | Type | Value                               |
| ----- | ---- | ----------------------------------- |
| image | File | (Choose an image file from your PC) |

**Response Example:**

```json
{
  "message": "File uploaded successfully",
  "file": {
    "fieldname": "image",
    "originalname": "photo.png",
    "encoding": "7bit",
    "mimetype": "image/png",
    "destination": "uploads/",
    "filename": "image-1731072000000-132456789.png",
    "path": "uploads/image-1731072000000-132456789.png",
    "size": 30524
  }
}
```

---

### **Code Example 2: Multiple File Uploads**

**File:** `app.js` (extended)

```js
// ===========================
// Example: Multiple File Upload
// ===========================

app.post('/upload-multiple', upload.array('photos', 3), (req, res) => {
  console.log('Files:', req.files);
  res.send({ message: 'Multiple files uploaded successfully', files: req.files });
});
```

**Postman Setup:**
Body → `form-data` → Add multiple keys named `photos` → Choose multiple files.

**Response:**

```json
{
  "message": "Multiple files uploaded successfully",
  "files": [
    { "filename": "photos-1731072000011-111.png" },
    { "filename": "photos-1731072000012-222.jpg" }
  ]
}
```

---

### **Code Example 3: File Type Validation**

**File:** `app.js` (validation logic added)

```js
// ===========================
// Example: File Type Validation
// ===========================

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed!'));
  }
};

const uploadWithFilter = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Route with filter
app.post('/upload-validate', uploadWithFilter.single('image'), (req, res) => {
  res.send({ message: 'File validated and uploaded successfully', file: req.file });
});
```

**If file type is invalid → Response:**

```json
{
  "error": "Only images are allowed!"
}
```

---

### **Code Example 4: Limiting File Size**

```js
const uploadLimited = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 2 } // 2 MB limit
});

app.post('/upload-limit', uploadLimited.single('image'), (req, res) => {
  res.send({ message: 'File uploaded successfully', file: req.file });
});
```

**If file exceeds size:**

```json
{
  "message": "File too large"
}
```

---

### **Mini Project: Profile Picture Upload API**

**Goal:** Allow users to upload and view their profile image.

**Folder:**

```
profile-upload/
│
├── app.js
├── uploads/
│   └── (saved images)
└── public/
    └── (served images)
```

**File:** `app.js`

```js
// ===========================
// Mini Project: Profile Image Upload
// ===========================

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set static folder to serve uploaded files
app.use('/uploads', express.static('uploads'));

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

// Upload route
app.post('/api/profile/upload', upload.single('avatar'), (req, res) => {
  res.json({
    message: 'Profile picture uploaded!',
    imageUrl: `http://localhost:4000/uploads/${req.file.filename}`
  });
});

// Run server
app.listen(4000, () => console.log('Profile API running on http://localhost:4000'));
```

**Test via Postman:**

| Key    | Type | Value              |
| ------ | ---- | ------------------ |
| avatar | File | (select any image) |

**Response:**

```json
{
  "message": "Profile picture uploaded!",
  "imageUrl": "http://localhost:4000/uploads/1731072235443-myphoto.png"
}
```

**Visit in browser:**
`http://localhost:4000/uploads/1731072235443-myphoto.png`

---

### **Dependencies**

| Package     | Purpose                                |
| ----------- | -------------------------------------- |
| **express** | Server framework                       |
| **multer**  | Middleware for file handling           |
| **path**    | Built-in Node.js module for file paths |

---

### **Notes**

* Always validate file type and size for security.
* Use `uploads/` for public access but avoid storing sensitive files there.
* Use unique file names (timestamp + random ID).
* In production, consider:

  * Cloud storage (e.g., AWS S3, Cloudinary)
  * File URLs saved in DB instead of local disk
* For multiple uploads, always limit number of files in Multer config.

---

### **Quick Summary Table**

| Concept          | Method                                           | Example              |
| ---------------- | ------------------------------------------------ | -------------------- |
| Single File      | `upload.single('image')`                         | One file per request |
| Multiple Files   | `upload.array('photos', 3)`                      | Max 3 photos         |
| File Type Filter | `fileFilter()`                                   | Allow only images    |
| File Size Limit  | `limits: { fileSize: 2MB }`                      | Reject large files   |
| Public Access    | `app.use('/uploads', express.static('uploads'))` | Serve uploaded files |

---