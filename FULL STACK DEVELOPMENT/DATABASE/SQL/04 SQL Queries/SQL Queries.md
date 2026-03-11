# SQL Queries

## Problem

Once a database and tables are created, the real task begins:

Applications must **interact with the data stored in tables**.

Examples:

- Show all users in a website
- Insert a new order in an e-commerce system
- Update user email
- Delete expired sessions

Without structured queries:

- retrieving data becomes difficult
- updates may corrupt data
- applications cannot automate operations

Therefore databases provide **SQL Queries**.

SQL queries allow us to **read, insert, modify, and delete data inside tables**.

---

# Mental Model

Think of SQL queries as **operations on table data**.

```
Table Data
   ↓
SQL Query
   ↓
Database Engine
   ↓
Result / Data Change
```

Example table

```
employees
```

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 80000  |
| 2   | Rahul  | Sales       | 60000  |
| 3   | Neha   | HR          | 55000  |

---

# Types of SQL Queries

Core query operations:

| Query  | Purpose              |
| ------ | -------------------- |
| SELECT | retrieve data        |
| INSERT | add new rows         |
| UPDATE | modify existing rows |
| DELETE | remove rows          |

---

# 1 SELECT Statement

## Purpose

Retrieve data from a table.

It is the **most used SQL query**.

---

## Basic Syntax

```sql
SELECT column1, column2
FROM table_name;
```

---

## Example

```sql
SELECT name
FROM employees;
```

Result

| name   |
| ------ |
| Tanish |
| Rahul  |
| Neha   |

---

## Selecting Multiple Columns

```sql
SELECT name, salary
FROM employees;
```

Result

| name   | salary |
| ------ | ------ |
| Tanish | 80000  |
| Rahul  | 60000  |
| Neha   | 55000  |

---

## Selecting All Columns

`*` means **all columns**.

```sql
SELECT *
FROM employees;
```

Result

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 80000  |
| 2   | Rahul  | Sales       | 60000  |
| 3   | Neha   | HR          | 55000  |

---

## Using WHERE with SELECT

Filter rows.

```sql
SELECT *
FROM employees
WHERE salary > 60000;
```

Result

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 80000  |

---

# 2 INSERT INTO

## Purpose

Insert a new record into a table.

Used when:

- new user registers
- new order created
- new employee added

---

## Syntax

```sql
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);
```

---

## Example

```sql
INSERT INTO employees (id,name,department,salary)
VALUES (4,'Amit','Engineering',75000);
```

Table becomes

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 80000  |
| 2   | Rahul  | Sales       | 60000  |
| 3   | Neha   | HR          | 55000  |
| 4   | Amit   | Engineering | 75000  |

---

# 3 INSERT Multiple Rows

Instead of inserting one row at a time, multiple rows can be inserted.

---

## Syntax

```sql
INSERT INTO table_name (column1,column2)
VALUES
(value1,value2),
(value3,value4);
```

---

## Example

```sql
INSERT INTO employees (id,name,department,salary)
VALUES
(5,'Riya','HR',58000),
(6,'Arjun','Sales',62000);
```

---

# 4 UPDATE Statement

## Purpose

Modify existing data.

Used when:

- employee salary changes
- user email updated
- product price changes

---

## Syntax

```sql
UPDATE table_name
SET column = value
WHERE condition;
```

---

## Example

```sql
UPDATE employees
SET salary = 90000
WHERE id = 1;
```

Updated table

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 90000  |
| 2   | Rahul  | Sales       | 60000  |
| 3   | Neha   | HR          | 55000  |

---

## Important Rule

Always use **WHERE clause**.

Without WHERE:

```sql
UPDATE employees
SET salary = 90000;
```

Result:

```
ALL rows updated
```

---

# 5 DELETE Statement

## Purpose

Remove rows from table.

Used when:

- account deleted
- product discontinued
- order cancelled

---

## Syntax

```sql
DELETE FROM table_name
WHERE condition;
```

---

## Example

```sql
DELETE FROM employees
WHERE id = 3;
```

Table becomes

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 90000  |
| 2   | Rahul  | Sales       | 60000  |

---

## Warning

Without WHERE:

```sql
DELETE FROM employees;
```

Result

```
All rows deleted
```

---

# 6 DELETE Duplicate Rows

Duplicate rows sometimes appear in datasets.

Example table

| id  | name   | department  |
| --- | ------ | ----------- |
| 1   | Tanish | Engineering |
| 2   | Rahul  | Sales       |
| 3   | Rahul  | Sales       |

We want to remove duplicates.

---

## Method Using ROW_NUMBER()

```sql
DELETE FROM employees
WHERE id NOT IN (

SELECT MIN(id)
FROM employees
GROUP BY name, department

);
```

Result

| id  | name   | department  |
| --- | ------ | ----------- |
| 1   | Tanish | Engineering |
| 2   | Rahul  | Sales       |

---

# SQL Query Execution Flow

Understanding this improves debugging.

Query written

```sql
SELECT name
FROM employees
WHERE salary > 60000;
```

Execution order

```
1 FROM
2 WHERE
3 SELECT
```

---

# Real World Example

### User Registration

```sql
INSERT INTO users (name,email,password)
VALUES ('Tanish','tanish@mail.com','hashed_password');
```

---

### Login Query

```sql
SELECT *
FROM users
WHERE email='tanish@mail.com';
```

---

### Update Profile

```sql
UPDATE users
SET email='new@mail.com'
WHERE id=5;
```

---

### Delete Account

```sql
DELETE FROM users
WHERE id=5;
```

---

# Summary

| Query  | Purpose     |
| ------ | ----------- |
| SELECT | read data   |
| INSERT | add data    |
| UPDATE | modify data |
| DELETE | remove data |

These four queries form the **CRUD operations**.

```
Create → INSERT
Read → SELECT
Update → UPDATE
Delete → DELETE
```

---

# Practice Problems

### Problem 1

Retrieve all employees.

```sql
SELECT *
FROM employees;
```

---

### Problem 2

Insert a new employee.

```sql
INSERT INTO employees
VALUES (7,'Meera','Finance',70000);
```

---

### Problem 3

Update employee salary.

```sql
UPDATE employees
SET salary = 65000
WHERE id = 2;
```

---

### Problem 4

Delete employee with id 7.

```sql
DELETE FROM employees
WHERE id = 7;
```

---

Next logical topic after SQL Queries is:

```
SQL Clauses
WHERE
GROUP BY
HAVING
ORDER BY
DISTINCT
LIMIT
```

These clauses make queries **powerful and interview-level**.
