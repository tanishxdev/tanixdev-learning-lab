# Topic 20 Intermediate MongoDB Concepts & Aggregation Pipelines

---

### **Concept**

**Why This Chapter?**
Now that you know basic CRUD and queries in MongoDB, it’s time to understand **advanced database operations** like:

* **Filtering, Sorting, and Projection**
* **Aggregation Pipeline (Data Transformation)**
* **Operators (`$match`, `$group`, `$sort`, `$lookup`)**
* **Joins between collections (via `$lookup`)**

These are **core MongoDB concepts** for analytics, dashboards, and reporting systems.

---

### **1. MongoDB Query Recap**

**Basic Query Methods in Mongoose:**

```js
Book.find({ price: { $gt: 500 } });         // price > 500
Book.find({ category: { $in: ['Tech'] } }); // category in given array
Book.find().select('title price');          // projection (specific fields)
Book.find().sort({ price: -1 });            // descending order
Book.find().limit(3).skip(2);               // pagination
```

**Operators Summary:**

| Operator                     | Meaning              | Example                                                      |
| ---------------------------- | -------------------- | ------------------------------------------------------------ |
| `$gt`, `$lt`, `$gte`, `$lte` | Greater/Less Than    | `{ price: { $gt: 100 } }`                                    |
| `$in`, `$nin`                | Matches any in array | `{ category: { $in: ['Tech'] } }`                            |
| `$or`, `$and`                | Combine conditions   | `{ $or: [ { price: { $gt: 500 } }, { category: 'Tech' } ] }` |
| `$exists`                    | Field existence      | `{ discount: { $exists: true } }`                            |
| `$regex`                     | Pattern match        | `{ title: { $regex: /node/i } }`                             |

---

### **2. Aggregation Pipeline — Concept**

**Definition:**
Aggregation Pipeline = Series of **stages** that transform data step by step (like SQL `GROUP BY`, `JOIN`, `SUM`, etc.).

**Stages:**

| Stage             | Purpose                  |
| ----------------- | ------------------------ |
| `$match`          | Filter documents         |
| `$group`          | Group and summarize      |
| `$project`        | Select or compute fields |
| `$sort`           | Sort results             |
| `$limit`, `$skip` | Pagination               |
| `$lookup`         | Join between collections |
| `$unwind`         | Flatten arrays           |

---

### **Example Schema**

Let’s reuse our Book Store DB but add a `sales` collection.

**Collections:**

* `books` → `{ title, category, price }`
* `sales` → `{ bookId, quantity, total }`

---

### **Folder Setup**

```
aggregation-demo/
│
├── app.js
├── models/
│   ├── bookModel.js
│   └── saleModel.js
└── controllers/
    └── reportController.js
```

---

### **Step 1: Book & Sales Models**

**File:** `models/bookModel.js`

```js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
});

module.exports = mongoose.model('Book', bookSchema);
```

**File:** `models/saleModel.js`

```js
const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  quantity: Number,
  total: Number,
});

module.exports = mongoose.model('Sale', saleSchema);
```

---

### **Step 2: Simple Aggregation Examples**

**File:** `controllers/reportController.js`

```js
// ===========================
// Basic Aggregation Examples
// ===========================

const Sale = require('../models/saleModel');

// 1. Total Sales Revenue
exports.totalRevenue = async (req, res) => {
  const result = await Sale.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: "$total" } } }
  ]);
  res.json(result);
};

// 2. Total Sales per Book
exports.salesPerBook = async (req, res) => {
  const result = await Sale.aggregate([
    { $group: { _id: "$bookId", totalSold: { $sum: "$quantity" }, revenue: { $sum: "$total" } } }
  ]);
  res.json(result);
};

// 3. Average Sale Value
exports.avgSaleValue = async (req, res) => {
  const result = await Sale.aggregate([
    { $group: { _id: null, avgSale: { $avg: "$total" } } }
  ]);
  res.json(result);
};
```

---

### **Step 3: Data Join with `$lookup`**

**File:** `controllers/reportController.js` (extend)

```js
// ===========================
// Aggregation with $lookup (Join Books + Sales)
// ===========================

exports.bookSalesReport = async (req, res) => {
  const result = await Sale.aggregate([
    {
      $lookup: {
        from: "books",               // collection to join
        localField: "bookId",        // field in Sale
        foreignField: "_id",         // field in Book
        as: "bookInfo"               // alias for joined data
      }
    },
    { $unwind: "$bookInfo" },        // flatten joined array
    {
      $project: {
        _id: 0,
        bookTitle: "$bookInfo.title",
        category: "$bookInfo.category",
        totalSold: "$quantity",
        totalRevenue: "$total"
      }
    }
  ]);

  res.json(result);
};
```

**Expected Output Example:**

```json
[
  { "bookTitle": "Node.js Guide", "category": "Tech", "totalSold": 3, "totalRevenue": 1200 },
  { "bookTitle": "Express Handbook", "category": "Tech", "totalSold": 2, "totalRevenue": 800 }
]
```

---

### **Step 4: Full Report API**

**File:** `routes/reportRoutes.js`

```js
const express = require('express');
const router = express.Router();
const report = require('../controllers/reportController');

router.get('/revenue', report.totalRevenue);
router.get('/sales-per-book', report.salesPerBook);
router.get('/average', report.avgSaleValue);
router.get('/report', report.bookSalesReport);

module.exports = router;
```

**File:** `app.js`

```js
const express = require('express');
const mongoose = require('mongoose');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/bookStore')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.log(err));

app.use('/api/reports', reportRoutes);

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
```

---

### **Step 5: Test in Postman**

| Endpoint                          | Description                  | Example Output                                     |
| --------------------------------- | ---------------------------- | -------------------------------------------------- |
| `GET /api/reports/revenue`        | Total revenue from all sales | `[{"_id":null,"totalRevenue":5600}]`               |
| `GET /api/reports/sales-per-book` | Quantity + revenue per book  | `[{"_id":"bookId","totalSold":10,"revenue":4000}]` |
| `GET /api/reports/average`        | Average sale amount          | `[{"_id":null,"avgSale":700}]`                     |
| `GET /api/reports/report`         | Joined report with book info | `[{"bookTitle":"Node.js Guide", ...}]`             |

---

### **6. Advanced Aggregation Example**

**Goal:** Find top 3 selling books by revenue.

```js
exports.topSellingBooks = async (req, res) => {
  const result = await Sale.aggregate([
    { $group: { _id: "$bookId", totalRevenue: { $sum: "$total" } } },
    { $sort: { totalRevenue: -1 } },
    { $limit: 3 },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "bookInfo"
      }
    },
    { $unwind: "$bookInfo" },
    { $project: { book: "$bookInfo.title", revenue: 1, _id: 0 } }
  ]);
  res.json(result);
};
```

**Endpoint:**
`GET /api/reports/top-selling`

**Output Example:**

```json
[
  { "book": "Node.js Guide", "revenue": 3000 },
  { "book": "Express Basics", "revenue": 1800 }
]
```

---

### **Mini Project: Sales Dashboard API**

**Goal:** Create analytical endpoints using aggregation.

| Endpoint                      | Description          |
| ----------------------------- | -------------------- |
| `/api/reports/revenue`        | Total sales          |
| `/api/reports/sales-per-book` | Total per book       |
| `/api/reports/report`         | Detailed joined data |
| `/api/reports/top-selling`    | Top 3 selling books  |

---

### **Dependencies**

| Package      | Purpose                           |
| ------------ | --------------------------------- |
| **express**  | Routing and server                |
| **mongoose** | MongoDB ODM                       |
| **mongodb**  | Database engine (behind Mongoose) |

---

### **Notes**

* Aggregation pipelines = **MongoDB’s version of SQL analytics**.
* Use `$match` first → filters early, improves performance.
* `$lookup` can act as a **JOIN** between collections.
* `$group` + `$sum` → for totals and analytics.
* `$project` → to include/exclude or compute fields.
* Always chain stages in order of performance (match → group → sort).

---

### **Quick Summary Table**

| Stage      | Description             | Example                                                     |
| ---------- | ----------------------- | ----------------------------------------------------------- |
| `$match`   | Filters data            | `{ $match: { category: 'Tech' } }`                          |
| `$group`   | Aggregates & summarizes | `{ $group: { _id: '$bookId', total: { $sum: '$total' } } }` |
| `$lookup`  | Joins other collection  | Combine Books with Sales                                    |
| `$sort`    | Sort results            | `{ $sort: { total: -1 } }`                                  |
| `$project` | Select / rename fields  | `{ $project: { name: 1, revenue: 1 } }`                     |

---
