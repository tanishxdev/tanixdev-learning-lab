# SQL Commands (DDL, DQL, DML, DCL, TCL)

SQL commands are instructions used to interact with relational databases.
They allow developers to **create structures, manipulate data, retrieve information, control access, and manage transactions**.

SQL commands are categorized into **five groups**:

| Category | Purpose                   |
| -------- | ------------------------- |
| DDL      | Define database structure |
| DQL      | Retrieve data             |
| DML      | Modify data               |
| DCL      | Manage permissions        |
| TCL      | Manage transactions       |

---

# 1. DDL — Data Definition Language

DDL commands manage **database structure**.

They are used to:

- create tables
- modify tables
- delete tables
- manage schema objects

DDL operates on **database objects**, not the data inside them.

---

## CREATE

Creates new database objects.

Objects can include:

- tables
- indexes
- views
- procedures
- triggers

### Example

```sql
CREATE TABLE employees (

    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    hire_date DATE

);
```

### Explanation

| Element      | Meaning           |
| ------------ | ----------------- |
| CREATE TABLE | create new table  |
| employees    | table name        |
| employee_id  | column            |
| INT          | integer data type |
| PRIMARY KEY  | unique identifier |

---

### Example Table

| employee_id | first_name | last_name | hire_date  |
| ----------- | ---------- | --------- | ---------- |
| 1           | Jane       | Smith     | 2023-01-01 |

---

## ALTER

Used to **modify existing table structure**.

Common operations:

- add column
- modify column
- drop column

### Example: Add column

```sql
ALTER TABLE employees
ADD department VARCHAR(50);
```

Table becomes:

| employee_id | first_name | last_name | hire_date | department |
| ----------- | ---------- | --------- | --------- | ---------- |

---

### Example: Modify column

```sql
ALTER TABLE employees
MODIFY first_name VARCHAR(100);
```

---

### Example: Drop column

```sql
ALTER TABLE employees
DROP COLUMN department;
```

---

## DROP

Deletes entire database object.

```sql
DROP TABLE employees;
```

Result:

- table removed
- structure removed
- data removed

---

## TRUNCATE

Removes **all records from a table**.

Structure remains.

```sql
TRUNCATE TABLE employees;
```

Before:

| employee_id | first_name |
| ----------- | ---------- |
| 1           | Jane       |
| 2           | Rahul      |

After:

(empty table)

---

## COMMENT

Adds metadata comments.

```sql
COMMENT ON TABLE employees IS 'Employee information table';
```

Useful for:

- documentation
- database maintainability

---

## RENAME

Changes object name.

```sql
RENAME TABLE employees TO staff;
```

---

# DDL Summary

| Command  | Purpose                 |
| -------- | ----------------------- |
| CREATE   | create database objects |
| ALTER    | modify structure        |
| DROP     | remove object           |
| TRUNCATE | delete all rows         |
| COMMENT  | add metadata            |
| RENAME   | rename object           |

---

# 2. DQL — Data Query Language

DQL is used to **retrieve data from tables**.

Main command:

```
SELECT
```

The result is returned as a **result set** (temporary table).

---

# SELECT Query Structure

```sql
SELECT column_list
FROM table_name
WHERE condition
GROUP BY column
HAVING condition
ORDER BY column
LIMIT number;
```

---

## FROM

Specifies table used in query.

```sql
SELECT *
FROM employees;
```

---

## WHERE

Filters rows.

### Example

```sql
SELECT *
FROM employees
WHERE department = 'Sales';
```

Output contains only rows satisfying condition.

---

## DISTINCT

Removes duplicate rows.

Example table:

| department |
| ---------- |
| Sales      |
| Sales      |
| HR         |

Query:

```sql
SELECT DISTINCT department
FROM employees;
```

Result:

| department |
| ---------- |
| Sales      |
| HR         |

---

## GROUP BY

Groups rows with same values.

Example table:

| department | salary |
| ---------- | ------ |
| IT         | 5000   |
| IT         | 6000   |
| HR         | 4000   |

Query:

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
```

Result:

| department | avg_salary |
| ---------- | ---------- |
| IT         | 5500       |
| HR         | 4000       |

---

## HAVING

Filters **grouped data**.

Example:

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 5000;
```

---

## ORDER BY

Sorts result.

```sql
SELECT *
FROM employees
ORDER BY hire_date DESC;
```

Sorting types:

| Keyword | Meaning    |
| ------- | ---------- |
| ASC     | ascending  |
| DESC    | descending |

---

## LIMIT

Restricts number of rows.

```sql
SELECT *
FROM employees
LIMIT 5;
```

Useful for:

- pagination
- testing queries

---

# Example Full Query

```sql
SELECT first_name, last_name, hire_date
FROM employees
WHERE department = 'Sales'
ORDER BY hire_date DESC
LIMIT 5;
```

Steps executed:

1 filter department
2 sort by hire_date
3 return top 5 rows

---

# 3. DML — Data Manipulation Language

DML commands modify **data inside tables**.

---

## INSERT

Adds new row.

```sql
INSERT INTO employees
(first_name, last_name, department)
VALUES ('Jane', 'Smith', 'HR');
```

Table becomes:

| first_name | last_name | department |
| ---------- | --------- | ---------- |
| Jane       | Smith     | HR         |

---

## UPDATE

Modifies existing rows.

```sql
UPDATE employees
SET department = 'Marketing'
WHERE department = 'Sales';
```

---

## DELETE

Removes rows.

```sql
DELETE FROM employees
WHERE department = 'HR';
```

---

# DML Summary

| Command | Function    |
| ------- | ----------- |
| INSERT  | add rows    |
| UPDATE  | modify rows |
| DELETE  | remove rows |

---

# 4. DCL — Data Control Language

Controls **user permissions**.

Used mainly by database administrators.

---

## GRANT

Gives privileges.

```sql
GRANT SELECT, UPDATE
ON employees
TO user_name;
```

Meaning:

User can:

- read data
- update data

---

## REVOKE

Removes privileges.

```sql
REVOKE UPDATE
ON employees
FROM user_name;
```

---

# DCL Summary

| Command | Purpose       |
| ------- | ------------- |
| GRANT   | give access   |
| REVOKE  | remove access |

---

# 5. TCL — Transaction Control Language

TCL manages **transactions**.

Transaction = group of SQL operations treated as single unit.

---

## BEGIN TRANSACTION

Start transaction.

```sql
BEGIN TRANSACTION;
```

---

## COMMIT

Make changes permanent.

```sql
COMMIT;
```

---

## ROLLBACK

Undo changes.

```sql
ROLLBACK;
```

---

## SAVEPOINT

Creates checkpoint inside transaction.

```sql
SAVEPOINT before_update;
```

Rollback to checkpoint:

```sql
ROLLBACK TO SAVEPOINT before_update;
```

---

# Transaction Example

```sql
BEGIN TRANSACTION;

UPDATE employees
SET department = 'Marketing'
WHERE department = 'Sales';

SAVEPOINT before_update;

UPDATE employees
SET department = 'IT'
WHERE department = 'HR';

ROLLBACK TO SAVEPOINT before_update;

COMMIT;
```

### Execution

Step 1

Sales → Marketing

Step 2

HR → IT

Step 3

Rollback → undo HR update

Step 4

Commit → save Sales → Marketing change

---

# DDL vs DML vs DQL vs DCL vs TCL

| Category | Area              | Example      |
| -------- | ----------------- | ------------ |
| DDL      | structure         | CREATE TABLE |
| DML      | data modification | INSERT       |
| DQL      | data retrieval    | SELECT       |
| DCL      | permissions       | GRANT        |
| TCL      | transactions      | COMMIT       |

---

# Practical Example (Full Flow)

### Create table

```sql
CREATE TABLE employees (

    id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50)

);
```

---

### Insert data

```sql
INSERT INTO employees
VALUES (1,'Tanish','Engineering');
```

---

### Retrieve data

```sql
SELECT *
FROM employees;
```

---

### Update data

```sql
UPDATE employees
SET department='AI'
WHERE id=1;
```

---

### Delete data

```sql
DELETE FROM employees
WHERE id=1;
```

---

# Real System Use Case

Example: **E-commerce backend**

Tables:

```
users
products
orders
payments
```

Common queries:

Insert new order

```sql
INSERT INTO orders
(user_id, product_id, quantity)
VALUES (5, 101, 2);
```

Get user orders

```sql
SELECT *
FROM orders
WHERE user_id = 5;
```

Update order status

```sql
UPDATE orders
SET status = 'Delivered'
WHERE order_id = 10;
```

---

# Interview Questions

### 1

Which SQL category manages permissions?

Answer:

```
DCL
```

---

### 2

Which command permanently deletes table?

```
DROP TABLE
```

---

### 3

Which clause filters grouped results?

```
HAVING
```

---

### 4

Difference between DELETE and TRUNCATE?

| DELETE         | TRUNCATE         |
| -------------- | ---------------- |
| row by row     | removes all rows |
| slower         | faster           |
| supports WHERE | no WHERE         |

---

### 5

Which command makes transaction permanent?

```
COMMIT
```

---
