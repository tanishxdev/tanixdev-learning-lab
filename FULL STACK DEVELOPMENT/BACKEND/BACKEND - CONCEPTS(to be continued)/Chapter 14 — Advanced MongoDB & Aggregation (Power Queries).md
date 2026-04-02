# Chapter 14 — Advanced MongoDB & Aggregation (Power Queries)

---

# 1. Problem (Why this chapter exists)

Till now you used:

```js id="9a2h3k"
Book.find();
Book.findById();
```

### ❌ Problem

Real apps need:

```text id="v9l3w2"
- Total revenue
- Top selling products
- Group data (category-wise)
- Filter + transform + compute
```

Normal queries **cannot handle complex data analysis**

---

# 2. Concept (Core Idea)

---

## 🧠 Definition — Aggregation

> Aggregation = process of **transforming and analyzing data in stages**

---

## 🧠 Think Like This

```text id="n8k2x4"
Data → pass through steps → final result
```

---

## 🧠 Pipeline Concept

```text id="0q3kz7"
Stage 1 → Stage 2 → Stage 3 → Output
```

---

# 3. Why Aggregation is Powerful

---

| Feature   | Normal Query | Aggregation |
| --------- | ------------ | ----------- |
| Filter    | ✅           | ✅          |
| Transform | ❌           | ✅          |
| Grouping  | ❌           | ✅          |
| Analytics | ❌           | ✅          |

---

# 4. Basic Syntax

---

## 📄 Example

```javascript id="4m7gqp"
const result = await Book.aggregate([{ stage1 }, { stage2 }]);
```

---

# 5. Most Important Stages (MUST KNOW)

---

## 🧠 1. $match (filter)

```javascript id="tn7g7h"
{
  $match: {
    price: {
      $gt: 500;
    }
  }
}
```

---

## 🧠 2. $group (group data)

```javascript id="y5hzf6"
{
  $group: {
    _id: "$author",
    totalBooks: { $sum: 1 }
  }
}
```

---

## 🧠 3. $sort

```javascript id="e1k5f9"
{
  $sort: {
    price: -1;
  }
}
```

---

## 🧠 4. $project (select fields)

```javascript id="9y4g8c"
{
  $project: {
    title: 1,
    price: 1
  }
}
```

---

## 🧠 5. $limit

```javascript id="o3j3hf"
{
  $limit: 5;
}
```

---

# 6. Example 1 — Filter Expensive Books

---

## 📄 Code

```javascript id="e2z8dp"
const books = await Book.aggregate([{ $match: { price: { $gt: 500 } } }]);

console.log(books);
```

---

# 7. Example 2 — Group by Author

---

## 📄 Code

```javascript id="8ny7lw"
const result = await Book.aggregate([
  {
    $group: {
      _id: "$author",
      totalBooks: { $sum: 1 },
    },
  },
]);
```

---

## 🧠 Output

```json id="l5g1cm"
[{ "_id": "Tanish", "totalBooks": 3 }]
```

---

# 8. Example 3 — Total Revenue

---

## 📄 Code

```javascript id="6qz7ma"
const revenue = await Book.aggregate([
  {
    $group: {
      _id: null,
      totalRevenue: { $sum: "$price" },
    },
  },
]);
```

---

# 9. Example 4 — Top 3 Expensive Books

---

```javascript id="pf3l2k"
const books = await Book.aggregate([{ $sort: { price: -1 } }, { $limit: 3 }]);
```

---

# 10. Combining Stages (VERY IMPORTANT)

---

## 📄 Example

```javascript id="d0ztps"
const result = await Book.aggregate([
  // Step 1: Filter
  { $match: { price: { $gt: 100 } } },

  // Step 2: Group
  {
    $group: {
      _id: "$author",
      total: { $sum: "$price" },
    },
  },

  // Step 3: Sort
  { $sort: { total: -1 } },
]);
```

---

# 11. Real Backend Thinking

---

## 🧠 Use Cases

```text id="qlr7l4"
- Dashboard stats
- Analytics
- Reports
- Leaderboards
```

---

## 🧠 Flow

```text id="j9n5x2"
DB → Aggregation Pipeline → Processed Data → API Response
```

---

# 12. Integrating with Express

---

## 📄 Route Example

```javascript id="w6v1lu"
app.get("/stats", async (req, res) => {
  const stats = await Book.aggregate([
    {
      $group: {
        _id: "$author",
        totalBooks: { $sum: 1 },
      },
    },
  ]);

  res.json(stats);
});
```

---

# 13. Mini Practice (DO THIS)

---

## Tasks:

- Count total books
- Find total revenue
- Top 5 expensive books
- Group books by author

---

# 14. Common Mistakes

---

### ❌ Wrong field name

```js id="g8y8a1"
"$price" vs "price"
```

---

### ❌ Forgetting $ before fields

---

### ❌ Using aggregate for simple queries

---

# 15. Mental Model (VERY IMPORTANT)

```text id="rr8w4x"
Aggregation = Data pipeline processing
```

---

## 🧠 Think Like This

```text id="pq3d8m"
Filter → Transform → Group → Sort → Output
```

---

# 16. Final File (Example Route)

---

## 📄 `app.js`

```javascript id="d5s7pw"
// ================================
// Chapter 14 - Aggregation Example
// ================================

app.get("/analytics", async (req, res) => {
  try {
    const result = await Book.aggregate([
      // Filter expensive books
      { $match: { price: { $gt: 100 } } },

      // Group by author
      {
        $group: {
          _id: "$author",
          totalRevenue: { $sum: "$price" },
        },
      },

      // Sort by revenue
      { $sort: { totalRevenue: -1 } },
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

---

# 17. Interview Questions

1. What is aggregation?
2. What is pipeline?
3. Difference between find and aggregate?
4. What is $match?
5. What is $group?
6. What is $project?
7. How to calculate sum in MongoDB?
8. What is $sort?
9. What is $limit?
10. Real use cases of aggregation?

---

# ✅ Summary (Clear Thinking)

- find() → basic queries
- aggregate() → powerful analytics

You can now:

- Build dashboards
- Compute data
- Handle complex queries

---