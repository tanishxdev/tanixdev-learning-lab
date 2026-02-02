# Indexes and Query Patterns

Simple, clean, complete explanation

An **index** makes queries **faster** by creating an auxiliary data structure used to quickly locate rows **without scanning the full table**.

Think of an index as a **sorted lookup structure** for a column (or multiple columns).

Indexes exist in:

* SQL databases (PostgreSQL, MySQL, SQL Server)
* NoSQL stores (MongoDB, Elasticsearch, Cassandra)

Query patterns determine **which columns need indexes**.

---

# 1. Why Indexes Are Needed

Without an index:

```
SELECT * FROM users WHERE email = 'abc@gmail.com'
```

The DB must scan **every row** → O(N).

With an index on `email`:

DB jumps directly to matching values → O(log N).

Indexes drastically improve:

* Search queries
* Range queries
* Sorting
* JOIN performance
* GROUP BY / DISTINCT

---

# 2. Types of Indexes (Very Clear)

### 1. **Single-Column Index**

Index on one field.

Example (SQL):

```
CREATE INDEX idx_email ON users(email);
```

---

### 2. **Composite / Multi-Column Index**

Index on multiple fields in order.

Example:

```
CREATE INDEX idx_last_first ON users(last_name, first_name);
```

Order matters:

```
(last_name, first_name)
```

Index will only help queries that **start** with last_name.

---

### 3. **Unique Index**

Ensures column values are unique (and speeds lookup).

```
CREATE UNIQUE INDEX idx_email_unique ON users(email);
```

---

### 4. **Clustered Index**

Data is stored **physically sorted** by index.

Examples:

* MySQL InnoDB → Primary Key = clustered index
* SQL Server → clustered index chosen by user

Benefits:

* Fast range scans
* Efficient ordering

---

### 5. **Non-Clustered Index**

Separate structure that points to rows.

Most secondary indexes in SQL.

---

### 6. **Covering Index**

Index includes all required columns for a query → query can be answered **from index alone** (no table lookup).

Example:

```
index: (email, name, age)
SELECT name, age FROM users WHERE email = 'a@b.com'
```

Index-only scan.

---

### 7. **Full-Text Index**

Used for searching words in documents.

---

### 8. **Hash Index**

Fast equality lookups (Redis, MongoDB hash index, PostgreSQL hash indexes).

---

### 9. **LSM-Tree Index (Log-Structured Merge)**

Used in write-heavy NoSQL DBs like Cassandra, RocksDB, LevelDB, HBase.

Optimized for:

* High write throughput
* Sequential disk writes

---

# 3. How Indexes Work Internally (Simple)

Most relational DBs use **B-Tree or B+Tree**:

* Balanced tree
* Keeps values sorted
* Searching = O(log N)
* Range scans efficient

NoSQL systems often use **LSM Trees**:

* Write to memtable
* Flush to disk (SSTables)
* Compaction merges files
* Reads combine multiple levels

---

# 4. Good Query Patterns (Patterns That Use Indexes Well)

### Pattern 1: **Point Lookups**

```
SELECT * FROM users WHERE id = 7;
```

Best-case index usage.

---

### Pattern 2: **Equality on the first column in composite index**

Given index:

```
(last_name, first_name)
```

Query:

```
WHERE last_name = 'Kumar'
```

Uses index efficiently.

---

### Pattern 3: **Range scans**

```
WHERE created_at BETWEEN '2024-01-01' AND '2024-02-01'
```

Clustered indexes shine here.

---

### Pattern 4: **ORDER BY column in index order**

```
ORDER BY created_at
```

---

### Pattern 5: **JOIN on indexed columns**

Foreign keys should always be indexed.

---

### Pattern 6: **Covering queries**

Best performing queries:

```
SELECT email, name FROM users
WHERE email = 'abc@gmail.com';
```

If `(email, name)` index exists → no table lookup needed.

---

# 5. Bad Query Patterns (That Break Index Usage)

### Bad Pattern 1: Leading wildcard

```
WHERE name LIKE '%raj'
```

Cannot use B-Tree index (LSM also limited).

Good:

```
name LIKE 'raj%'
```

---

### Bad Pattern 2: Applying functions on indexed column

```
WHERE LOWER(email) = 'abc@x.com'
```

Prevents index use.
Fix: store normalized email.

---

### Bad Pattern 3: Not using the first column in composite index

Given index:

```
(last_name, first_name)
```

Query:

```
WHERE first_name = 'Tanish'
```

Cannot use index.
Composite index only works **left to right**.

---

### Bad Pattern 4: OR conditions on non-indexed fields

```
WHERE email='a@b.com' OR phone='9999'
```

---

### Bad Pattern 5: Too many indexes

More indexes → slow writes.

---

# 6. Choosing Indexes (Very Important)

Ask:

1. What are the most common queries?
2. Do they filter by equality or range?
3. Do they sort by a column?
4. Do they join on a column?
5. Can I use a composite index to cover multiple queries?
6. Will extra indexes harm write performance?

Good index design = 80% of DB performance.

---

# 7. Index Selectivity

Selectivity = how unique a column’s values are.

High selectivity → great index performance
Example: email, user_id, phone

Low selectivity → index is useless
Example: gender (M/F), is_active (true/false)

---

# 8. Indexes in SQL vs NoSQL

### SQL

* B-Tree indexes
* Secondary indexes
* Composite indexes
* Clustered indexes
* Query planner decides best index

### MongoDB

* Uses B-Tree indexes
* Automatically creates `_id` index
* Supports:

  * compound indexes
  * multikey index (array fields)
  * text index
  * partial index

### Cassandra

* Indexes discouraged for high-cardinality queries
* Primary access via partition key
* LSM tree optimized for writes

---

# 9. Index Maintenance Cost

Indexes speed SELECTs but slow INSERT/UPDATE/DELETE because the DB must:

* Update B-Tree
* Maintain sorted order
* Handle page splits
* Update all secondary indexes

Rule:

```
More indexes = faster reads, slower writes.
Few indexes = faster writes, slower reads.
```

---

# 10. Interview-Ready Summary (30 Seconds)

Indexes accelerate queries by storing sorted structures (B-Trees or LSM trees) that allow fast lookups, range scans, and joins.
Use indexes on columns frequently used in WHERE, JOIN, ORDER BY, and GROUP BY.
Composite indexes follow the **left-most prefix rule**.
Covering indexes allow index-only scans.
Avoid leading wildcards, functions on indexed columns, and too many indexes.
Good index design is essential for scalable query performance.
