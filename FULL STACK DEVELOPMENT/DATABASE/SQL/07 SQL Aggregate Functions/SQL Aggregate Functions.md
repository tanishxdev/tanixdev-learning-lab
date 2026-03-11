# SQL Aggregate Functions

---

# 1 Problem Aggregate Functions Solve

In real systems we rarely want **individual rows**.

Instead we want **summaries of data**.

Examples:

E-commerce system

Questions we want to ask:

- total revenue today
- number of orders placed
- average order value
- highest order price
- lowest product price

If a table has **millions of rows**, calculating this manually is impossible.

Example table

| order_id | user | amount |
| -------- | ---- | ------ |
| 1        | A    | 200    |
| 2        | B    | 500    |
| 3        | C    | 300    |
| 4        | D    | 100    |

Questions

```
Total revenue ?
Average order value ?
Highest order ?
Lowest order ?
Total orders ?
```

SQL provides **Aggregate Functions** to answer these questions.

---

# 2 What is an Aggregate Function

An **Aggregate Function** performs a calculation on **multiple rows** and returns **one summarized value**.

Mental model

```
Many rows
   ↓
Aggregate Function
   ↓
Single summarized result
```

Example

Table

| salary |
| ------ |
| 50000  |
| 70000  |
| 60000  |

Query

```sql
SELECT AVG(salary)
FROM employees;
```

Result

```
60000
```

---

# 3 Core SQL Aggregate Functions

| Function | Purpose        |
| -------- | -------------- |
| COUNT()  | count rows     |
| SUM()    | total values   |
| AVG()    | average value  |
| MIN()    | smallest value |
| MAX()    | largest value  |

These are the **5 fundamental aggregate functions**.

---

# 4 Example Dataset

Table

```
employees
```

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 80000  |
| 2   | Rahul  | Sales       | 60000  |
| 3   | Neha   | HR          | 55000  |
| 4   | Tara   | Sales       | 70000  |
| 5   | Aman   | Engineering | 90000  |

---

# 5 COUNT() Function

## Problem

How many records exist?

Example questions

- number of employees
- number of orders
- number of users registered

---

## Syntax

```sql
SELECT COUNT(column_name)
FROM table;
```

---

## Example

```sql
SELECT COUNT(*)
FROM employees;
```

Result

```
5
```

Meaning

```
Total rows in employees table
```

---

## COUNT vs COUNT(column)

### COUNT(\*)

Counts all rows.

```sql
SELECT COUNT(*)
FROM employees;
```

---

### COUNT(column)

Counts only **non-NULL values**.

Example

| name | manager |
| ---- | ------- |
| A    | NULL    |
| B    | 2       |
| C    | 3       |

Query

```sql
SELECT COUNT(manager)
FROM employees;
```

Result

```
2
```

Because NULL values are ignored.

---

# 6 SUM() Function

## Problem

Find **total value of numeric column**.

Example

- total salary cost
- total sales
- total revenue

---

## Syntax

```sql
SELECT SUM(column)
FROM table;
```

---

## Example

```sql
SELECT SUM(salary)
FROM employees;
```

Calculation

```
80000
60000
55000
70000
90000
```

Result

```
355000
```

Meaning

```
Total salary expense
```

---

# 7 AVG() Function

## Problem

Find average value.

Example

- average salary
- average order value
- average rating

---

## Syntax

```sql
SELECT AVG(column)
FROM table;
```

---

## Example

```sql
SELECT AVG(salary)
FROM employees;
```

Calculation

```
(80000 + 60000 + 55000 + 70000 + 90000) / 5
```

Result

```
71000
```

---

# 8 MIN() Function

## Problem

Find **lowest value**.

Example

- cheapest product
- lowest salary
- earliest date

---

## Syntax

```sql
SELECT MIN(column)
FROM table;
```

---

## Example

```sql
SELECT MIN(salary)
FROM employees;
```

Result

```
55000
```

---

# 9 MAX() Function

## Problem

Find **highest value**.

Example

- highest salary
- highest product price
- latest order date

---

## Syntax

```sql
SELECT MAX(column)
FROM table;
```

---

## Example

```sql
SELECT MAX(salary)
FROM employees;
```

Result

```
90000
```

---

# 10 Using Aggregate Functions with WHERE

Aggregate functions often use **filters**.

Example

Average salary of Sales department.

```sql
SELECT AVG(salary)
FROM employees
WHERE department = 'Sales';
```

Rows used

| name  | department | salary |
| ----- | ---------- | ------ |
| Rahul | Sales      | 60000  |
| Tara  | Sales      | 70000  |

Result

```
65000
```

---

# 11 Aggregates with GROUP BY

This is **one of the most important SQL concepts**.

Instead of calculating one value for entire table,
we calculate values **per group**.

---

## Problem

Find average salary **per department**.

---

## Query

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
```

---

## Result

| department  | avg_salary |
| ----------- | ---------- |
| Engineering | 85000      |
| Sales       | 65000      |
| HR          | 55000      |

---

# 12 Aggregates with HAVING

HAVING filters **groups**.

---

## Problem

Find departments where average salary > 70000.

---

## Query

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 70000;
```

Result

| department  | avg_salary |
| ----------- | ---------- |
| Engineering | 85000      |

---

# 13 Execution Order with Aggregates

Important concept.

Query

```sql
SELECT department, AVG(salary)
FROM employees
WHERE salary > 50000
GROUP BY department
HAVING AVG(salary) > 60000
ORDER BY AVG(salary) DESC;
```

Actual execution order

```
1 FROM employees
2 WHERE salary > 50000
3 GROUP BY department
4 HAVING AVG(salary) > 60000
5 SELECT department, AVG
6 ORDER BY AVG
```

---

# 14 Real World Use Cases

## E-commerce

Total revenue

```sql
SELECT SUM(order_amount)
FROM orders;
```

---

Average order value

```sql
SELECT AVG(order_amount)
FROM orders;
```

---

Highest order

```sql
SELECT MAX(order_amount)
FROM orders;
```

---

# Banking

Total deposits

```sql
SELECT SUM(amount)
FROM transactions
WHERE type='deposit';
```

---

# Analytics

Users per country

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country;
```

---

# 15 Mental Model

Think of aggregate functions like **statistics calculators**.

```
Raw Data
↓
Aggregate Function
↓
Summary Information
```

Example

```
Order Table
↓
SUM(order_amount)
↓
Total revenue
```

---

# 16 Common Mistakes

### Mistake 1

Using non-grouped column.

Wrong

```sql
SELECT name, AVG(salary)
FROM employees;
```

Correct

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
```

---

### Mistake 2

Using WHERE instead of HAVING

Wrong

```sql
SELECT department, AVG(salary)
FROM employees
WHERE AVG(salary) > 60000
GROUP BY department;
```

Correct

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 60000;
```

---

# 17 Interview Questions

### Difference between WHERE and HAVING

| WHERE                    | HAVING                  |
| ------------------------ | ----------------------- |
| filters rows             | filters groups          |
| executed before grouping | executed after grouping |

---

### Which aggregate ignores NULL values?

```
All aggregate functions except COUNT(*)
```

---

### Can aggregate functions be used with GROUP BY?

Yes.
They are usually used together.

---

# 18 Practice Problems

### Problem 1

Find total salary.

```sql
SELECT SUM(salary)
FROM employees;
```

---

### Problem 2

Find highest salary.

```sql
SELECT MAX(salary)
FROM employees;
```

---

### Problem 3

Find number of employees.

```sql
SELECT COUNT(*)
FROM employees;
```

---

### Problem 4

Average salary per department.

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
```

---

If you want, I can also explain **GROUP BY and HAVING deeply with visual query execution mental model**, which is **the most confusing part of SQL for beginners and interview questions**.
