# 01 SQL Basics

---

# 1 Structured Query Language (SQL)

## Concept

Structured Query Language (SQL) is a language used to **interact with relational databases**.

Relational databases store data in **tables**.

Each table contains:

| Element | Meaning            |
| ------- | ------------------ |
| Row     | one record         |
| Column  | attribute/field    |
| Table   | collection of rows |

Example table:

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 80000  |
| 2   | Rahul  | Sales       | 60000  |

SQL is used to:

- create tables
- insert data
- retrieve data
- update data
- delete data
- control permissions
- manage transactions

---

## SQL Execution Flow

When SQL query is written, database executes steps internally.

1 Input
User writes query

```
SELECT * FROM employees;
```

2 Parsing
Database checks:

- syntax
- table existence
- column existence

3 Optimization

Database decides fastest plan.

Possible methods:

- index search
- table scan
- join strategy

4 Execution

Database reads data.

5 Output

Result returned.

---

## Components of SQL System

### Database

Collection of tables.

Example database:

```
company_db
```

Tables:

```
employees
departments
orders
```

---

### Tables

Structure storing rows and columns.

Example:

| employee_id | name   | department  | salary |
| ----------- | ------ | ----------- | ------ |
| 1           | Tanish | Engineering | 80000  |

---

### Index

Improves search performance.

Without index

```
O(n) scan
```

With index

```
O(log n)
```

Example:

```
CREATE INDEX idx_employee_name
ON employees(name);
```

---

### Views

Virtual table created from query.

```
CREATE VIEW high_salary_employees AS
SELECT name, salary
FROM employees
WHERE salary > 70000;
```

Usage

```
SELECT * FROM high_salary_employees;
```

---

### Stored Procedure

Reusable SQL program.

```
CREATE PROCEDURE get_all_employees()

BEGIN
SELECT * FROM employees;
END;
```

---

### Transactions

Transaction = group of operations executed together.

Properties (ACID)

| Property    | Meaning                  |
| ----------- | ------------------------ |
| Atomicity   | all succeed or fail      |
| Consistency | database stays valid     |
| Isolation   | independent transactions |
| Durability  | changes permanent        |

---

# 2 SQL Data Types

Data types define **what type of data column can store**.

---

## Numeric Types

| Type   | Use                     |
| ------ | ----------------------- |
| INT    | integer numbers         |
| FLOAT  | decimal numbers         |
| DOUBLE | high precision decimals |

Example

```
salary INT
rating FLOAT
```

---

## String Types

| Type       | Meaning         |
| ---------- | --------------- |
| CHAR(n)    | fixed length    |
| VARCHAR(n) | variable length |
| TEXT       | large text      |

Example

```
name VARCHAR(50)
address TEXT
```

---

## Date Types

| Type     | Purpose       |
| -------- | ------------- |
| DATE     | date          |
| TIME     | time          |
| DATETIME | date and time |

Example

```
hire_date DATE
```

---

# 3 Operators

Operators are used in SQL conditions.

---

## Arithmetic Operators

| Operator | Example        |
| -------- | -------------- |
| +        | addition       |
| -        | subtraction    |
| \*       | multiplication |
| /        | division       |

Example

```
SELECT salary * 12
FROM employees;
```

Annual salary calculation.

---

## Comparison Operators

| Operator | Meaning       |
| -------- | ------------- |
| =        | equal         |
| !=       | not equal     |
| >        | greater       |
| <        | less          |
| >=       | greater equal |
| <=       | less equal    |

Example

```
SELECT *
FROM employees
WHERE salary > 70000;
```

---

## Logical Operators

| Operator | Meaning               |
| -------- | --------------------- |
| AND      | both conditions true  |
| OR       | either condition true |
| NOT      | reverse condition     |

Example

```
SELECT *
FROM employees
WHERE department = 'Engineering'
AND salary > 70000;
```

---

## Special Operators

### BETWEEN

Range filter

```
SELECT *
FROM employees
WHERE salary BETWEEN 60000 AND 90000;
```

---

### IN

Multiple values

```
SELECT *
FROM employees
WHERE department IN ('Engineering','HR');
```

---

### LIKE

Pattern matching

```
SELECT *
FROM employees
WHERE name LIKE 'T%';
```

Matches names starting with T.

---

### IS NULL

Check missing value.

```
SELECT *
FROM employees
WHERE manager_id IS NULL;
```

---

# 4 Commands

SQL commands categorized into five groups.

| Category | Purpose         |
| -------- | --------------- |
| DDL      | structure       |
| DML      | manipulate data |
| DQL      | query data      |
| DCL      | permissions     |
| TCL      | transactions    |

---

# Example Database

We use one table.

```
employees
```

Structure:

| id  | name | department | salary |
| --- | ---- | ---------- | ------ |

---

# DDL Operations

## CREATE TABLE

```
CREATE TABLE employees (

id INT PRIMARY KEY,
name VARCHAR(50),
department VARCHAR(50),
salary INT

);
```

Purpose:

Create table structure.

---

## ALTER TABLE

Add column.

```
ALTER TABLE employees
ADD hire_date DATE;
```

Modify column.

```
ALTER TABLE employees
MODIFY salary FLOAT;
```

---

## TRUNCATE

Remove all records.

```
TRUNCATE TABLE employees;
```

---

## DROP

Delete table completely.

```
DROP TABLE employees;
```

---

# DML Operations

## INSERT

Add record.

```
INSERT INTO employees
(id,name,department,salary)
VALUES (1,'Tanish','Engineering',80000);
```

---

## UPDATE

Modify record.

```
UPDATE employees
SET salary = 85000
WHERE id = 1;
```

---

## DELETE

Remove record.

```
DELETE FROM employees
WHERE id = 1;
```

---

# DQL Operations

## SELECT

Retrieve data.

```
SELECT name, salary
FROM employees;
```

---

## WHERE

Filter rows.

```
SELECT *
FROM employees
WHERE salary > 70000;
```

---

## ORDER BY

Sort data.

```
SELECT *
FROM employees
ORDER BY salary DESC;
```

---

## GROUP BY

Group records.

```
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
```

---

## HAVING

Filter groups.

```
SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 70000;
```

---

## LIMIT

Limit rows.

```
SELECT *
FROM employees
LIMIT 5;
```

---

# DCL Operations

## GRANT

Give permission.

```
GRANT SELECT
ON employees
TO analyst;
```

---

## REVOKE

Remove permission.

```
REVOKE SELECT
ON employees
FROM analyst;
```

---

# TCL Operations

## BEGIN TRANSACTION

```
BEGIN TRANSACTION;
```

---

## SAVEPOINT

```
SAVEPOINT before_update;
```

---

## ROLLBACK

```
ROLLBACK;
```

---

## COMMIT

```
COMMIT;
```

---

# Full Example Flow

### Step 1 Create Table

```
CREATE TABLE employees (

id INT PRIMARY KEY,
name VARCHAR(50),
department VARCHAR(50),
salary INT

);
```

---

### Step 2 Insert Data

```
INSERT INTO employees
VALUES (1,'Tanish','Engineering',80000);

INSERT INTO employees
VALUES (2,'Rahul','Sales',60000);
```

---

### Step 3 Query Data

```
SELECT *
FROM employees;
```

Result

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 80000  |
| 2   | Rahul  | Sales       | 60000  |

---

### Step 4 Update

```
UPDATE employees
SET salary = 90000
WHERE name = 'Tanish';
```

---

### Step 5 Delete

```
DELETE FROM employees
WHERE name = 'Rahul';
```

---

# Real World Case

Example system:

```
Ecommerce database
```

Tables

```
users
products
orders
payments
```

Example query

Find all orders of user.

```
SELECT *
FROM orders
WHERE user_id = 10;
```

Insert new order

```
INSERT INTO orders
(user_id,product_id,quantity)
VALUES (10,5,2);
```

---

# SQL Execution Order

Important concept.

Query written:

```
SELECT name
FROM employees
WHERE salary > 60000
ORDER BY salary;
```

Actual execution order:

```
1 FROM
2 WHERE
3 SELECT
4 ORDER BY
```

Understanding this is important for:

- debugging queries
- writing complex SQL

---

# Practice Problems

### Problem 1

Get employees with salary greater than 70000.

```
SELECT *
FROM employees
WHERE salary > 70000;
```

---

### Problem 2

Sort employees by salary descending.

```
SELECT *
FROM employees
ORDER BY salary DESC;
```

---

### Problem 3

Find average salary per department.

```
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
```

---

### Problem 4

Find departments where average salary > 70000.

```
SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 70000;
```
