# SQL Subquery

---

# Problem

While working with databases, we often face situations where **a query depends on the result of another query**.

Examples:

- Find employees earning **more than the average salary**
- Find customers who **placed orders**
- Find products with **price higher than average product price**

If SQL did not support subqueries, we would need to:

1. run one query
2. store result
3. run second query manually

This becomes inefficient and complex.

SQL solves this using **Subqueries**.

---

# Concept

A **Subquery** is a query written **inside another SQL query**.

It allows a query to use the **result of another query as input**.

Structure:

```sql
SELECT column
FROM table
WHERE column OPERATOR (

    SELECT column
    FROM table

);
```

The inner query executes first.

The outer query uses its result.

---

# Mental Model

Think of subquery as:

```
Outer Query
   ↑
uses result of
   ↑
Inner Query
```

Execution order:

```
1 Inner query runs
2 Result returned
3 Outer query uses result
```

---

# Example Database

Table

```
employees
```

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 80000  |
| 2   | Rahul  | Sales       | 60000  |
| 3   | Neha   | HR          | 50000  |
| 4   | Aman   | Engineering | 90000  |

---

# Basic Subquery

## Problem

Find employees earning **more than average salary**.

---

### Step 1 — Calculate average salary

```sql
SELECT AVG(salary)
FROM employees;
```

Result

```
70000
```

---

### Step 2 — Use that result in another query

```sql
SELECT name, salary
FROM employees
WHERE salary > (

    SELECT AVG(salary)
    FROM employees

);
```

---

### Result

| name   | salary |
| ------ | ------ |
| Tanish | 80000  |
| Aman   | 90000  |

---

# Subquery Types

There are **three important types**.

```
Subquery
 ├── Simple Subquery
 ├── Correlated Subquery
 └── Nested Query
```

---

# 1 Simple Subquery

A simple subquery executes **once** and returns a result.

Example:

Find employees earning more than average salary.

```sql
SELECT name
FROM employees
WHERE salary > (

SELECT AVG(salary)
FROM employees

);
```

Execution:

```
1 calculate AVG(salary)
2 return value
3 outer query uses it
```

---

# Subquery in SELECT

Subquery can appear inside SELECT.

Example:

```sql
SELECT name,
(
SELECT AVG(salary)
FROM employees
) AS avg_salary
FROM employees;
```

Result

| name   | avg_salary |
| ------ | ---------- |
| Tanish | 70000      |
| Rahul  | 70000      |

---

# Subquery in FROM

Subquery can act like a temporary table.

Example:

```sql
SELECT *
FROM (

SELECT name, salary
FROM employees

) AS emp_data;
```

---

# Subquery in WHERE

Most common usage.

Example:

```sql
SELECT name
FROM employees
WHERE salary > (

SELECT AVG(salary)
FROM employees

);
```

---

# 2 Correlated Subquery

A correlated subquery depends on **each row of the outer query**.

This means the inner query runs **multiple times**.

Mental model

```
for each row in outer table
     run inner query
```

---

## Example

Find employees earning **more than average salary in their department**.

Table

| name   | department  | salary |
| ------ | ----------- | ------ |
| Tanish | Engineering | 80000  |
| Aman   | Engineering | 90000  |
| Rahul  | Sales       | 60000  |
| Neha   | Sales       | 50000  |

---

Query

```sql
SELECT name, salary
FROM employees e1
WHERE salary > (

SELECT AVG(salary)
FROM employees e2
WHERE e1.department = e2.department

);
```

---

### Execution Logic

For each employee:

```
calculate department average
compare salary
```

Example

```
Engineering avg = 85000
Sales avg = 55000
```

Result

| name  | salary |
| ----- | ------ |
| Aman  | 90000  |
| Rahul | 60000  |

---

# 3 Nested Queries

Nested queries contain **multiple levels of subqueries**.

Example:

Find employees earning more than **average salary of Engineering department**.

---

### Step 1 — department average

```sql
SELECT AVG(salary)
FROM employees
WHERE department='Engineering';
```

Result

```
85000
```

---

### Step 2 — main query

```sql
SELECT name
FROM employees
WHERE salary > (

SELECT AVG(salary)
FROM employees
WHERE department='Engineering'

);
```

---

### Result

| name |
| ---- |
| Aman |

---

# Subquery Operators

Subqueries often work with special operators.

---

## IN

Check if value exists in subquery result.

Example

Find employees from departments that have high salary employees.

```sql
SELECT name
FROM employees
WHERE department IN (

SELECT department
FROM employees
WHERE salary > 80000

);
```

---

## EXISTS

Checks if subquery returns rows.

Example

```sql
SELECT name
FROM employees e
WHERE EXISTS (

SELECT 1
FROM orders o
WHERE o.employee_id = e.id

);
```

---

## ANY

Condition must match **any value**.

Example

```sql
SELECT name
FROM employees
WHERE salary > ANY (

SELECT salary
FROM employees
WHERE department='Sales'

);
```

---

## ALL

Condition must match **all values**.

Example

```sql
SELECT name
FROM employees
WHERE salary > ALL (

SELECT salary
FROM employees
WHERE department='Sales'

);
```

---

# Execution Order of Subquery

Example query

```sql
SELECT name
FROM employees
WHERE salary > (

SELECT AVG(salary)
FROM employees

);
```

Execution

```
1 run inner query
2 return result
3 outer query executes
```

---

# When to Use Subqueries

Subqueries are useful when:

```
result of one query needed for another
```

Common scenarios

```
average comparisons
top results
data filtering
relationship filtering
```

Examples

```
employees above average salary
products above average price
customers with orders
```

---

# Subquery vs Join

Both can solve similar problems.

Example

Subquery version

```sql
SELECT name
FROM employees
WHERE department_id IN (

SELECT id
FROM departments
WHERE location='Delhi'

);
```

Join version

```sql
SELECT e.name
FROM employees e
JOIN departments d
ON e.department_id = d.id
WHERE d.location='Delhi';
```

Usually

```
JOIN is faster
subquery easier to read
```

---

# Real System Example

E-commerce system.

Tables

```
customers
orders
products
```

Example problem

Find customers who placed orders.

```sql
SELECT name
FROM customers
WHERE id IN (

SELECT customer_id
FROM orders

);
```

---

# Common Mistakes

### Using multiple rows with =

Wrong

```sql
SELECT name
FROM employees
WHERE salary = (

SELECT salary
FROM employees

);
```

Correct

```sql
WHERE salary IN (
SELECT salary
FROM employees
);
```

---

### Slow correlated queries

Correlated queries can be slow for large tables.

Better approach

```
use JOIN when possible
```

---

# Interview Questions

### What is a subquery

A query inside another SQL query.

---

### Types of subqueries

```
Simple Subquery
Correlated Subquery
Nested Query
```

---

### When is correlated subquery executed

```
executed once for each row of outer query
```

---

### Which clause commonly uses subqueries

```
WHERE
```

---

# Practice Problems

### Problem 1

Find employees earning above average salary.

```sql
SELECT name
FROM employees
WHERE salary > (

SELECT AVG(salary)
FROM employees

);
```

---

### Problem 2

Find employees in departments where salary > 80000.

```sql
SELECT name
FROM employees
WHERE department IN (

SELECT department
FROM employees
WHERE salary > 80000

);
```

---

### Problem 3

Find employees earning more than average of their department.

```sql
SELECT name
FROM employees e1
WHERE salary > (

SELECT AVG(salary)
FROM employees e2
WHERE e1.department = e2.department

);
```
