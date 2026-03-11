# SQL Clauses — Mental Model, Roadmap, and Structured Understanding

---

# Problem

When querying a database, we often need to perform **multiple operations on data**.

Examples:

- get employees from a specific city
- group employees by department
- calculate average salary
- sort results by salary
- return only top 5 records

If SQL had only `SELECT`, it would not be powerful enough.

Therefore SQL queries use **Clauses**.

Clauses allow the database to **transform data step by step**.

---

# What is a SQL Clause

## Concept

A **SQL Clause** is a component of a query that performs a specific operation on the dataset.

Each clause transforms the dataset produced by the previous clause.

---

## Simple Definition

> A clause is a part of an SQL query that controls how data is selected, filtered, grouped, or sorted.

---

# Mental Model of SQL Clauses

Think of a query as a **data processing pipeline**.

```
Raw Table Data
      ↓
FROM
      ↓
WHERE
      ↓
GROUP BY
      ↓
HAVING
      ↓
SELECT
      ↓
DISTINCT
      ↓
ORDER BY
      ↓
LIMIT / FETCH
```

Each stage **transforms the data**.

---

# SQL Query Structure

Typical SQL query:

```sql
SELECT column_list
FROM table_name
WHERE condition
GROUP BY column
HAVING condition
ORDER BY column
LIMIT number;
```

Not every query uses all clauses.

---

# SQL Clause Roadmap

Clauses can be understood in logical groups.

```
SQL Clauses

1 Data Source
   FROM

2 Row Filtering
   WHERE

3 Data Grouping
   GROUP BY

4 Group Filtering
   HAVING

5 Column Selection
   SELECT

6 Duplicate Removal
   DISTINCT

7 Sorting
   ORDER BY

8 Result Limiting
   LIMIT / FETCH

9 Query Structuring
   WITH (CTE)

10 Readability
   ALIAS
```

---

# Example Dataset Used

Table

```
employees
```

| id  | name   | department  | salary | city  |
| --- | ------ | ----------- | ------ | ----- |
| 1   | Tanish | Engineering | 80000  | Delhi |
| 2   | Rahul  | Sales       | 60000  | Delhi |
| 3   | Neha   | HR          | 55000  | Pune  |
| 4   | Aman   | Engineering | 90000  | Pune  |
| 5   | Riya   | Sales       | 65000  | Delhi |

---

# 1 FROM Clause

## Purpose

Defines **the data source**.

Without FROM, SQL would not know which table to query.

---

## Syntax

```sql
SELECT columns
FROM table_name;
```

---

## Example

```sql
SELECT *
FROM employees;
```

Result

All rows returned.

---

## Mental Model

```
Database
   ↓
Table selected
```

---

# 2 WHERE Clause

## Purpose

Filters rows based on conditions.

Filtering occurs **before grouping and aggregation**.

---

## Syntax

```sql
SELECT columns
FROM table
WHERE condition;
```

---

## Example

```sql
SELECT *
FROM employees
WHERE salary > 70000;
```

Result

| id  | name   | salary |
| --- | ------ | ------ |
| 1   | Tanish | 80000  |
| 4   | Aman   | 90000  |

---

## Operators Used

Comparison operators

```
=
>
<
>=
<=
!=
```

Logical operators

```
AND
OR
NOT
```

---

# 3 GROUP BY Clause

## Purpose

Groups rows that share the same value.

Used with **aggregate functions**.

---

## Syntax

```sql
SELECT column, AGG_FUNCTION(column)
FROM table
GROUP BY column;
```

---

## Example

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
```

Result

| department  | avg_salary |
| ----------- | ---------- |
| Engineering | 85000      |
| Sales       | 62500      |
| HR          | 55000      |

---

## Mental Model

Without grouping

```
all rows → one calculation
```

With grouping

```
rows grouped by column value
```

---

# 4 HAVING Clause

## Purpose

Filters groups created by GROUP BY.

Important difference

```
WHERE → filters rows
HAVING → filters groups
```

---

## Syntax

```sql
SELECT column, AGG_FUNCTION(column)
FROM table
GROUP BY column
HAVING condition;
```

---

## Example

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 60000;
```

Result

| department  | avg_salary |
| ----------- | ---------- |
| Engineering | 85000      |
| Sales       | 62500      |

---

# 5 SELECT Clause

## Purpose

Specifies **which columns appear in the result**.

---

## Syntax

```sql
SELECT column1, column2
FROM table;
```

---

## Example

```sql
SELECT name, salary
FROM employees;
```

---

# 6 DISTINCT Clause

## Purpose

Removes duplicate rows.

---

## Syntax

```sql
SELECT DISTINCT column
FROM table;
```

---

## Example

```sql
SELECT DISTINCT department
FROM employees;
```

Result

| department  |
| ----------- |
| Engineering |
| Sales       |
| HR          |

---

# 7 ORDER BY Clause

## Purpose

Sorts the result set.

---

## Syntax

```sql
SELECT columns
FROM table
ORDER BY column ASC | DESC;
```

---

## Example

```sql
SELECT *
FROM employees
ORDER BY salary DESC;
```

Result

Sorted by salary.

---

# 8 LIMIT Clause

## Purpose

Restricts number of rows returned.

---

## Syntax

```sql
SELECT *
FROM table
LIMIT number;
```

---

## Example

```sql
SELECT *
FROM employees
LIMIT 3;
```

Returns first three rows.

---

## OFFSET Example

```sql
SELECT *
FROM employees
LIMIT 2 OFFSET 2;
```

Meaning

Skip first two rows and return next two.

---

# 9 WITH Clause (CTE)

## Purpose

Creates temporary query result.

Used to simplify complex queries.

---

## Syntax

```sql
WITH cte_name AS (

SELECT query

)

SELECT *
FROM cte_name;
```

---

## Example

```sql
WITH high_salary AS (

SELECT *
FROM employees
WHERE salary > 70000

)

SELECT name, salary
FROM high_salary;
```

---

# 10 FETCH Clause

Standard SQL alternative to LIMIT.

---

## Syntax

```sql
SELECT *
FROM table
FETCH FIRST n ROWS ONLY;
```

---

## Example

```sql
SELECT *
FROM employees
FETCH FIRST 3 ROWS ONLY;
```

---

# 11 Aliases

Aliases provide temporary names.

Improves query readability.

---

## Column Alias

```sql
SELECT name AS employee_name
FROM employees;
```

---

## Table Alias

```sql
SELECT e.name
FROM employees e;
```

---

# Full Query Example

```sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
WHERE city = 'Delhi'
GROUP BY department
HAVING AVG(salary) > 60000
ORDER BY avg_salary DESC
LIMIT 2;
```

---

# Internal Execution Order

SQL engine executes clauses in this order:

```
1 FROM
2 WHERE
3 GROUP BY
4 HAVING
5 SELECT
6 DISTINCT
7 ORDER BY
8 LIMIT
```

Even though query is written differently.

---

# SQL Clause Mental Pipeline

```
Raw Table
   ↓
FROM
   ↓
WHERE
   ↓
GROUP BY
   ↓
HAVING
   ↓
SELECT
   ↓
DISTINCT
   ↓
ORDER BY
   ↓
LIMIT
```

---

# Clause Comparison Summary

| Clause   | Purpose                   |
| -------- | ------------------------- |
| FROM     | choose table              |
| WHERE    | filter rows               |
| GROUP BY | group rows                |
| HAVING   | filter groups             |
| SELECT   | choose columns            |
| DISTINCT | remove duplicates         |
| ORDER BY | sort results              |
| LIMIT    | limit rows                |
| WITH     | temporary query           |
| FETCH    | limit rows (standard SQL) |

---

# Beginner Practice Problems

### Problem 1

Get employees from Delhi.

```sql
SELECT *
FROM employees
WHERE city='Delhi';
```

---

### Problem 2

Average salary per department.

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
```

---

### Problem 3

Departments with average salary > 70000.

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 70000;
```

---

### Problem 4

Unique departments.

```sql
SELECT DISTINCT department
FROM employees;
```

---

### Problem 5

Top two highest salary employees.

```sql
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 2;
```

---

If you want, the **next most important concept for mastering SQL queries** is:

```
SQL Query Execution Engine
(How database internally processes SELECT, WHERE, GROUP BY)
```

Understanding that makes writing \*\*complex queries and optimizing performance much easier.
