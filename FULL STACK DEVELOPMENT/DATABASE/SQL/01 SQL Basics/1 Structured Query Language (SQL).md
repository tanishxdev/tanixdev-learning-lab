# SQL – Structured Query Language

---

# Problem

Modern applications need to **store and manage large amounts of structured data**.

Examples:

- User accounts in a website
- Orders in an e-commerce system
- Bank transactions
- Hospital patient records

If data is stored in simple files or spreadsheets:

Problems occur:

- difficult to search data
- difficult to update safely
- multiple users editing data causes conflicts
- slow retrieval for large datasets
- no security or permissions

Therefore systems use **Databases**.

But a database alone is not enough.
We need a language to **talk to the database**.

That language is **SQL**.

---

# What is SQL

SQL (Structured Query Language) is the **standard language used to communicate with relational databases**.

It allows developers to:

- create database structures
- insert new data
- retrieve data
- update records
- delete records
- manage permissions
- control transactions

SQL works with **Relational Databases**.

Common SQL databases:

- MySQL
- PostgreSQL
- SQL Server
- Oracle
- SQLite

---

# Relational Database Concept

A relational database stores data in **tables**.

Each table has:

| Element | Meaning                        |
| ------- | ------------------------------ |
| Table   | collection of related data     |
| Row     | one record                     |
| Column  | attribute/field                |
| Cell    | intersection of row and column |

---

# Example Table

Table name:

```
employees
```

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 80000  |
| 2   | Rahul  | Sales       | 60000  |
| 3   | Neha   | HR          | 55000  |

---

# Column Explanation

| Column     | Meaning             |
| ---------- | ------------------- |
| id         | employee identifier |
| name       | employee name       |
| department | working department  |
| salary     | employee salary     |

---

# Why Tables Are Used

Tables allow data to be:

- organized
- searchable
- related to other tables
- maintained consistently

Example system:

```
Ecommerce Database
```

Tables:

```
users
products
orders
payments
```

Each table stores a specific type of data.

---

# SQL Query Execution (How SQL Works)

When a SQL query is executed, the database processes it internally.

### Step 1 — Input

User sends query.

```sql
SELECT * FROM employees;
```

---

### Step 2 — Parsing

Database checks:

- syntax correctness
- table existence
- column existence

Example error:

```sql
SELEC * FROM employees;
```

Misspelled keyword.

---

### Step 3 — Query Optimization

Database chooses best execution plan.

Possible strategies:

- full table scan
- index search
- join optimization

Goal: **minimum execution time**

---

### Step 4 — Execution

Database engine executes the query.

Operations may include:

- reading rows
- filtering rows
- sorting results
- grouping data

---

### Step 5 — Output

Database returns result.

Example output

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 80000  |
| 2   | Rahul  | Sales       | 60000  |

---

# Components of a SQL System

## Database

A **database** is a collection of tables.

Example:

```
company_db
```

Tables:

```
employees
departments
orders
payments
```

---

## Tables

Tables store data in rows and columns.

Example:

| id  | name   | email                     |
| --- | ------ | ------------------------- |
| 1   | Tanish | [t@x.com](mailto:t@x.com) |
| 2   | Rahul  | [r@y.com](mailto:r@y.com) |

---

## Index

Indexes improve search performance.

Without index:

```
Full table scan
Time complexity ≈ O(n)
```

With index:

```
Tree search
Time complexity ≈ O(log n)
```

Example:

```sql
CREATE INDEX idx_email
ON users(email);
```

Use cases:

- login queries
- search operations
- filtering large tables

---

## Views

A view is a **virtual table** created from a query.

Example:

```sql
CREATE VIEW high_salary_employees AS
SELECT name, salary
FROM employees
WHERE salary > 70000;
```

Usage:

```sql
SELECT * FROM high_salary_employees;
```

Benefits:

- simplifies complex queries
- improves security
- hides unnecessary columns

---

## Stored Procedures

Stored procedure = reusable SQL program stored in database.

Example:

```sql
CREATE PROCEDURE get_all_users()

BEGIN
SELECT * FROM users;
END;
```

Execute procedure:

```sql
CALL get_all_users();
```

Benefits:

- reusable logic
- better performance
- controlled access

---

## Transactions

A transaction groups multiple operations into one unit.

Example scenario:

Bank transfer.

```
Transfer 500 from account A to B
```

Operations:

1 subtract from account A
2 add to account B

If one fails → both must fail.

---

### Transaction Example

```sql
START TRANSACTION;

UPDATE accounts
SET balance = balance - 500
WHERE id = 1;

UPDATE accounts
SET balance = balance + 500
WHERE id = 2;

COMMIT;
```

If error occurs:

```sql
ROLLBACK;
```

---

### ACID Properties

| Property    | Meaning                  |
| ----------- | ------------------------ |
| Atomicity   | all succeed or fail      |
| Consistency | database remains valid   |
| Isolation   | transactions independent |
| Durability  | committed data permanent |

---

# SQL Data Types

Data types define what type of data a column stores.

---

## Numeric Types

| Type   | Example                 |
| ------ | ----------------------- |
| INT    | 100                     |
| FLOAT  | 12.5                    |
| DOUBLE | high precision decimals |

Example:

```sql
salary INT
rating FLOAT
```

---

## String Types

| Type       | Meaning                |
| ---------- | ---------------------- |
| CHAR(n)    | fixed length string    |
| VARCHAR(n) | variable length string |
| TEXT       | long text              |

Example:

```sql
name VARCHAR(50)
```

---

## Date Types

| Type     | Example          |
| -------- | ---------------- |
| DATE     | 2025-03-07       |
| TIME     | 12:30:00         |
| DATETIME | 2025-03-07 12:30 |

Example:

```sql
hire_date DATE
```

---

# SQL Operators

Operators are used inside conditions.

---

## Arithmetic Operators

| Operator | Meaning        |
| -------- | -------------- |
| +        | addition       |
| -        | subtraction    |
| \*       | multiplication |
| /        | division       |

Example:

```sql
SELECT salary * 12
FROM employees;
```

Calculates annual salary.

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

Example:

```sql
SELECT *
FROM employees
WHERE salary > 60000;
```

---

## Logical Operators

| Operator | Meaning               |
| -------- | --------------------- |
| AND      | both conditions true  |
| OR       | either condition true |
| NOT      | reverse condition     |

Example:

```sql
SELECT *
FROM employees
WHERE department='Engineering'
AND salary > 70000;
```

---

## Special Operators

### BETWEEN

Range filter.

```sql
SELECT *
FROM employees
WHERE salary BETWEEN 50000 AND 90000;
```

---

### IN

Multiple values filter.

```sql
SELECT *
FROM employees
WHERE department IN ('HR','Sales');
```

---

### LIKE

Pattern matching.

```sql
SELECT *
FROM employees
WHERE name LIKE 'T%';
```

Matches names starting with T.

---

### IS NULL

Check missing values.

```sql
SELECT *
FROM employees
WHERE manager_id IS NULL;
```

---

# SQL Query Rules

### Statement termination

SQL statement ends with semicolon.

```sql
SELECT * FROM employees;
```

---

### Case insensitive

These queries are same:

```sql
SELECT * FROM employees;
select * from employees;
SeLeCt * fRoM employees;
```

Convention:

```
keywords → uppercase
tables/columns → lowercase
```

---

### Whitespace

Line breaks allowed.

```sql
SELECT
name,
salary
FROM
employees;
```

---

### Comments

Single line

```sql
-- get employees
SELECT * FROM employees;
```

Multi line

```sql
/*
get employees
*/
SELECT * FROM employees;
```

---

# SQL Command Categories

SQL commands are divided into five categories.

| Category | Purpose                   |
| -------- | ------------------------- |
| DDL      | define database structure |
| DML      | modify data               |
| DQL      | retrieve data             |
| DCL      | control permissions       |
| TCL      | manage transactions       |

---

# Practical Example Table

Table:

```
employees
```

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 80000  |
| 2   | Rahul  | Sales       | 60000  |
| 3   | Neha   | HR          | 55000  |

---

# DDL Operations

### CREATE TABLE

```sql
CREATE TABLE employees(

id INT PRIMARY KEY,
name VARCHAR(50),
department VARCHAR(50),
salary INT

);
```

---

### ALTER TABLE

Add column.

```sql
ALTER TABLE employees
ADD hire_date DATE;
```

---

### DROP TABLE

```sql
DROP TABLE employees;
```

---

### TRUNCATE TABLE

```sql
TRUNCATE TABLE employees;
```

---

# DML Operations

### INSERT

```sql
INSERT INTO employees (id,name,department,salary)
VALUES (1,'Tanish','Engineering',80000);
```

---

### UPDATE

```sql
UPDATE employees
SET salary = 85000
WHERE id = 1;
```

---

### DELETE

```sql
DELETE FROM employees
WHERE id = 2;
```

---

# DQL Operations

### SELECT

Retrieve data.

```sql
SELECT *
FROM employees;
```

---

### Selecting Columns

```sql
SELECT name, salary
FROM employees;
```

---

### Filtering Rows

```sql
SELECT *
FROM employees
WHERE salary > 60000;
```

---

### Sorting

```sql
SELECT *
FROM employees
ORDER BY salary DESC;
```

---

### Removing duplicates

```sql
SELECT DISTINCT department
FROM employees;
```

---

### Limiting rows

```sql
SELECT *
FROM employees
LIMIT 2;
```

---

# DCL Operations

### GRANT

```sql
GRANT SELECT
ON employees
TO analyst;
```

---

### REVOKE

```sql
REVOKE SELECT
ON employees
FROM analyst;
```

---

# TCL Operations

### COMMIT

```sql
COMMIT;
```

---

### ROLLBACK

```sql
ROLLBACK;
```

---

### SAVEPOINT

```sql
SAVEPOINT sp1;
```

Rollback to savepoint

```sql
ROLLBACK TO sp1;
```

---

# SQL Query Execution Order

Query written:

```sql
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

---

# Real World Use Cases

## E-commerce

Tables:

```
users
products
orders
payments
```

Query example:

```sql
SELECT *
FROM orders
WHERE user_id = 10;
```

---

## Banking

```sql
SELECT *
FROM transactions
WHERE amount > 10000;
```

Fraud detection.

---

## Healthcare

```sql
SELECT name, diagnosis
FROM patients
WHERE doctor_id = 5;
```

---

## Web Applications

User login query.

```sql
SELECT *
FROM users
WHERE email='user@email.com';
```

---

# Interview Questions

### What does CRUD mean

```
Create
Read
Update
Delete
```

---

### Which SQL command retrieves data

```
SELECT
```

---

### Which command deletes a table

```
DROP TABLE
```

---

### Difference between DELETE and TRUNCATE

| DELETE                | TRUNCATE         |
| --------------------- | ---------------- |
| removes selected rows | removes all rows |
| slower                | faster           |
| supports WHERE        | no WHERE         |

---

### Which command modifies table structure

```
ALTER TABLE
```

---

# Practice Problems

### Problem 1

Get all employees.

```sql
SELECT *
FROM employees;
```

---

### Problem 2

Employees with salary greater than 60000.

```sql
SELECT *
FROM employees
WHERE salary > 60000;
```

---

### Problem 3

Sort employees by salary descending.

```sql
SELECT *
FROM employees
ORDER BY salary DESC;
```

---

### Problem 4

Retrieve employee names.

```sql
SELECT name
FROM employees;
```
