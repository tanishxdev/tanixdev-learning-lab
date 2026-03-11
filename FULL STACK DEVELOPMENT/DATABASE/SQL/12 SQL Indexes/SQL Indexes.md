# SQL Indexes

Indexes are used to **improve query performance by making data retrieval faster**.

They act like a **lookup structure** that allows the database to find rows quickly without scanning the entire table.

---

# Problem (Why Indexes Are Needed)

Consider a table with **10 million users**.

Example table:

| id  | name   | email                     | city   |
| --- | ------ | ------------------------- | ------ |
| 1   | Tanish | [t@x.com](mailto:t@x.com) | Delhi  |
| 2   | Rahul  | [r@y.com](mailto:r@y.com) | Mumbai |
| ... | ...    | ...                       | ...    |

Query:

```sql
SELECT *
FROM users
WHERE email = 't@x.com';
```

Without an index, the database performs:

```
Full Table Scan
```

Meaning:

```
Check row 1
Check row 2
Check row 3
...
Check row 10,000,000
```

Time complexity roughly:

```
O(n)
```

Very slow for large datasets.

---

# Solution

Create an **Index** on the column used in searches.

Example:

```sql
CREATE INDEX idx_email
ON users(email);
```

Now the database uses a **tree-based lookup structure**.

Search complexity becomes:

```
O(log n)
```

Much faster.

---

# Mental Model

Think of a **book index**.

Instead of reading every page to find "SQL", you go to:

```
Index → SQL → page 250
```

Database indexes work the same way.

---

# How Index Works Internally

Most databases implement indexes using:

```
B-Tree (Balanced Tree)
```

Structure:

```
          50
       /      \
     20        80
   /   \     /   \
 10   30   70   90
```

Searching value:

```
search 70
→ go right
→ found quickly
```

---

# Indexes Section Topics

```
Indexes
Create Index
Drop Index
Show Indexes
Unique Index
Clustered Index vs Non-Clustered Index
```

---

# 1 Indexes

An index is a **data structure that improves the speed of SELECT queries**.

Indexes are commonly created on:

```
Primary keys
Foreign keys
Search columns
Join columns
```

Example query benefiting from index:

```sql
SELECT *
FROM users
WHERE email = 'abc@email.com';
```

---

# When to Use Index

Indexes are useful when columns are used in:

```
WHERE
JOIN
ORDER BY
GROUP BY
```

Example

```sql
SELECT *
FROM orders
WHERE user_id = 10;
```

Index on:

```
user_id
```

---

# When NOT to Use Index

Indexes should be avoided when:

```
table is very small
column has low uniqueness
data updates frequently
```

Why?

Indexes add overhead for:

```
INSERT
UPDATE
DELETE
```

because index must also update.

---

# 2 Create Index

Creates a new index on a column.

### Syntax

```sql
CREATE INDEX index_name
ON table_name(column_name);
```

---

### Example

Table:

| id  | name | email |
| --- | ---- | ----- |

Create index:

```sql
CREATE INDEX idx_email
ON users(email);
```

Now queries searching by email become faster.

---

# Create Index on Multiple Columns

Example:

```sql
CREATE INDEX idx_user_city
ON users(name, city);
```

Used for queries like:

```sql
SELECT *
FROM users
WHERE name = 'Tanish'
AND city = 'Delhi';
```

---

# 3 Drop Index

Removes an index from database.

### Syntax

```sql
DROP INDEX index_name;
```

---

### Example

```sql
DROP INDEX idx_email;
```

After dropping:

Database goes back to **table scanning**.

---

# 4 Show Indexes

Used to display indexes created on a table.

### Syntax

```sql
SHOW INDEXES FROM table_name;
```

Example

```sql
SHOW INDEXES FROM users;
```

Output shows:

| Table | Key_name  | Column_name |
| ----- | --------- | ----------- |
| users | idx_email | email       |

---

# 5 Unique Index

Ensures that values in a column are **unique**.

Example

```sql
CREATE UNIQUE INDEX idx_unique_email
ON users(email);
```

Now duplicate values are not allowed.

Example invalid insert:

```sql
INSERT INTO users(email)
VALUES ('t@x.com');
```

If email already exists → error.

---

# Difference Between UNIQUE and NORMAL INDEX

| Feature          | Normal Index  | Unique Index  |
| ---------------- | ------------- | ------------- |
| Duplicate values | allowed       | not allowed   |
| Performance      | faster search | faster search |
| Constraint       | no            | yes           |

---

# 6 Clustered vs Non-Clustered Index

This is an important concept in database internals.

---

# Clustered Index

Clustered index **physically sorts the table data**.

Meaning:

```
Table rows stored in sorted order of index
```

Example

Index on:

```
id
```

Table storage:

| id  | name |
| --- | ---- |
| 1   | A    |
| 2   | B    |
| 3   | C    |

Data itself is stored sorted.

Important rule:

```
One clustered index per table
```

Reason:

Data can only be physically sorted **one way**.

---

# Non-Clustered Index

Non-clustered index stores **separate lookup structure**.

Structure:

```
Index Table

email → pointer to row location
```

Example

```
t@x.com → row 5
r@y.com → row 10
```

The table itself is **not sorted**.

Multiple non-clustered indexes allowed.

Example

```
index on email
index on city
index on name
```

---

# Comparison

| Feature         | Clustered Index      | Non-Clustered Index   |
| --------------- | -------------------- | --------------------- |
| Data storage    | sorted physically    | separate structure    |
| Count per table | one                  | multiple              |
| Performance     | faster range queries | faster lookup queries |

---

# Real World Example

E-commerce system.

Tables:

```
users
orders
products
```

Query example

```sql
SELECT *
FROM orders
WHERE user_id = 101;
```

Index created:

```sql
CREATE INDEX idx_user_orders
ON orders(user_id);
```

Now database finds orders of a user quickly.

---

# Performance Example

Without index

```
scan 1 million rows
```

With index

```
direct lookup
```

Performance improvement often:

```
100x faster queries
```

---

# Interview Questions

### What is an index

```
Data structure used to improve query performance.
```

---

### Why indexes improve performance

```
Avoid full table scans
Use tree search structure
```

---

### Which data structure is used for indexes

```
B-Tree
```

---

### Difference between clustered and non-clustered index

| Clustered              | Non-clustered             |
| ---------------------- | ------------------------- |
| data sorted physically | separate lookup structure |
| one per table          | many allowed              |

---

### When should indexes be used

```
columns used in
WHERE
JOIN
ORDER BY
GROUP BY
```

---

If you want, I can also explain **one of the most important SQL performance topics most beginners miss**:

```
Composite Index
Covering Index
Index Scan vs Index Seek
Query Planner
```

These concepts explain **why some SQL queries are extremely slow and how real engineers optimize them**.
