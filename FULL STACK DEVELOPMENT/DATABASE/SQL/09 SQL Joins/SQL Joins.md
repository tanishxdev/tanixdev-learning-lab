# SQL Joins — Mental Model + Complete Guide

---

# Problem (Why Joins Exist)

In real systems, data is **not stored in a single table**.

Example: E-commerce system

```
users
orders
products
payments
```

Why separate tables?

- avoid duplication
- maintain data integrity
- improve scalability
- normalize data

Example tables:

### Users Table

| user_id | name   |
| ------- | ------ |
| 1       | Tanish |
| 2       | Rahul  |
| 3       | Neha   |

---

### Orders Table

| order_id | user_id | product  |
| -------- | ------- | -------- |
| 101      | 1       | Laptop   |
| 102      | 2       | Phone    |
| 103      | 1       | Keyboard |

Problem:

We want

```
Which user bought which product?
```

But data is stored in **two tables**.

Solution

```
SQL JOIN
```

Joins combine rows from multiple tables using a **common column**.

---

# Mental Model of Join

```
Table A + Table B
        │
   matching column
        │
       JOIN
        │
   combined result
```

Example common column

```
users.user_id = orders.user_id
```

---

# Join Syntax

```sql
SELECT columns
FROM table1
JOIN table2
ON table1.column = table2.column;
```

---

# Example Join

```sql
SELECT users.name, orders.product
FROM users
JOIN orders
ON users.user_id = orders.user_id;
```

Result

| name   | product  |
| ------ | -------- |
| Tanish | Laptop   |
| Rahul  | Phone    |
| Tanish | Keyboard |

---

# Types of SQL Joins

```
JOIN (INNER JOIN)
LEFT JOIN
RIGHT JOIN
FULL JOIN
CROSS JOIN
SELF JOIN
```

Advanced

```
UPDATE with JOIN
DELETE JOIN
Recursive Join
```

---

# 1 INNER JOIN (Default JOIN)

Returns rows where **match exists in both tables**.

---

### Diagram

```
Table A ∩ Table B
```

---

### Example

Users

| id  | name   |
| --- | ------ |
| 1   | Tanish |
| 2   | Rahul  |
| 3   | Neha   |

Orders

| id  | user_id | product |
| --- | ------- | ------- |
| 101 | 1       | Laptop  |
| 102 | 2       | Phone   |

---

Query

```sql
SELECT users.name, orders.product
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

Result

| name   | product |
| ------ | ------- |
| Tanish | Laptop  |
| Rahul  | Phone   |

Neha not included because no order.

---

# 2 LEFT JOIN

Returns

```
all rows from left table
+ matched rows from right table
```

If no match → NULL.

---

### Diagram

```
LEFT TABLE + matches
```

---

Example

```sql
SELECT users.name, orders.product
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;
```

Result

| name   | product |
| ------ | ------- |
| Tanish | Laptop  |
| Rahul  | Phone   |
| Neha   | NULL    |

---

# 3 RIGHT JOIN

Returns

```
all rows from right table
+ matched rows from left table
```

---

Example

```sql
SELECT users.name, orders.product
FROM users
RIGHT JOIN orders
ON users.id = orders.user_id;
```

Result includes all orders even if user missing.

---

# 4 FULL JOIN

Returns

```
all rows from both tables
```

Non-matching rows become NULL.

---

Example

```sql
SELECT users.name, orders.product
FROM users
FULL JOIN orders
ON users.id = orders.user_id;
```

Result

| name   | product |
| ------ | ------- |
| Tanish | Laptop  |
| Rahul  | Phone   |
| Neha   | NULL    |

---

# 5 CROSS JOIN

Produces **cartesian product**.

Every row from table A combines with every row from table B.

---

Example

Users

| name   |
| ------ |
| Tanish |
| Rahul  |

Products

| product |
| ------- |
| Laptop  |
| Phone   |

Query

```sql
SELECT users.name, products.product
FROM users
CROSS JOIN products;
```

Result

| name   | product |
| ------ | ------- |
| Tanish | Laptop  |
| Tanish | Phone   |
| Rahul  | Laptop  |
| Rahul  | Phone   |

Total rows

```
rowsA × rowsB
```

---

# 6 SELF JOIN

Table joined with itself.

Used for hierarchical relationships.

Example

Employee → Manager relationship.

---

Employees table

| id  | name      | manager_id |
| --- | --------- | ---------- |
| 1   | CEO       | NULL       |
| 2   | Manager   | 1          |
| 3   | Developer | 2          |

---

Query

```sql
SELECT e.name AS employee,
m.name AS manager
FROM employees e
LEFT JOIN employees m
ON e.manager_id = m.id;
```

Result

| employee  | manager |
| --------- | ------- |
| CEO       | NULL    |
| Manager   | CEO     |
| Developer | Manager |

---

# 7 UPDATE with JOIN

Used to update table using another table.

---

Example

Increase salary for employees in HR department.

Tables

Employees

| id | name | dept_id | salary |

Departments

| id | name |

---

Query

```sql
UPDATE employees
JOIN departments
ON employees.dept_id = departments.id
SET employees.salary = employees.salary + 5000
WHERE departments.name = 'HR';
```

---

# 8 DELETE with JOIN

Delete rows using join condition.

---

Example

Delete users who never placed order.

```sql
DELETE users
FROM users
LEFT JOIN orders
ON users.id = orders.user_id
WHERE orders.user_id IS NULL;
```

---

# 9 Recursive Join (Hierarchical Query)

Used for tree structures.

Examples

```
organization hierarchy
folder structure
category tree
```

Uses **Common Table Expression (CTE)**.

---

Example

```sql
WITH RECURSIVE employee_tree AS (

SELECT id,name,manager_id
FROM employees
WHERE manager_id IS NULL

UNION ALL

SELECT e.id,e.name,e.manager_id
FROM employees e
JOIN employee_tree et
ON e.manager_id = et.id

)

SELECT * FROM employee_tree;
```

---

# Join Execution Mental Model

When database executes join

Steps

```
1 read table A
2 read table B
3 match rows using ON condition
4 build result table
```

Join algorithms internally used

```
Nested Loop Join
Hash Join
Merge Join
```

---

# Real System Example

E-commerce query

Tables

```
users
orders
products
```

Query

```sql
SELECT users.name, products.name
FROM orders
JOIN users ON orders.user_id = users.id
JOIN products ON orders.product_id = products.id;
```

Result

```
User → product purchased
```

---

# Join Comparison Summary

| Join Type  | Result                   |
| ---------- | ------------------------ |
| INNER JOIN | only matching rows       |
| LEFT JOIN  | all left + matches       |
| RIGHT JOIN | all right + matches      |
| FULL JOIN  | all rows both tables     |
| CROSS JOIN | cartesian product        |
| SELF JOIN  | table joined with itself |

---

# Interview Questions

### What is a JOIN

Combine rows from multiple tables using related column.

---

### Difference between INNER and LEFT JOIN

| INNER JOIN         | LEFT JOIN          |
| ------------------ | ------------------ |
| only matching rows | all rows from left |

---

### When to use SELF JOIN

Hierarchical relationships.

Example

```
employee → manager
category → parent category
```

---

### What is CROSS JOIN

Cartesian product of two tables.

---

### Why joins are important

Because relational databases **split data into multiple tables**.

Joins allow queries across those tables.

---

If you want, I can also explain **JOINs visually with diagrams and real interview problems (Amazon / Uber style SQL questions)** which makes joins much easier to master.
