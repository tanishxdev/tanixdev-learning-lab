# SQL Functions

## Problem

When working with databases, we often need to **transform, analyze, or calculate values from stored data**.

Examples:

- convert names to uppercase
- calculate average salary
- extract year from a date
- remove spaces from text
- convert data types
- process JSON data

If we had to manually process this data outside the database:

Problems:

- extra application logic
- slower queries
- more data transfer
- complex code

Solution:

```text
SQL Functions
```

SQL functions allow the database to **process data directly inside queries**.

---

# What are SQL Functions

SQL functions are **built-in operations that perform calculations or transformations on data**.

They operate on:

- column values
- expressions
- constants

Example

```sql
SELECT UPPER(name)
FROM employees;
```

Result

| name   |
| ------ |
| TANISH |
| RAHUL  |
| NEHA   |

---

# Mental Model

```text
Table Data
    ↓
SQL Query
    ↓
Function Applied
    ↓
Processed Result
```

Example

```text
name → UPPER(name) → TANISH
salary → AVG(salary) → 65000
```

---

# Categories of SQL Functions

SQL functions are grouped based on their purpose.

| Category              | Purpose                     |
| --------------------- | --------------------------- |
| Date Functions        | manipulate dates            |
| String Functions      | manipulate text             |
| Numeric Functions     | perform math operations     |
| Statistical Functions | analyze data distributions  |
| JSON Functions        | work with JSON data         |
| Conversion Functions  | convert data types          |
| Datatype Functions    | inspect or manipulate types |

---

# 1 Date Functions

Date functions manipulate **date and time values**.

Common uses:

- extract year
- calculate age
- format dates

Example table

| id  | name   | hire_date  |
| --- | ------ | ---------- |
| 1   | Tanish | 2023-01-15 |
| 2   | Rahul  | 2022-05-10 |

---

## CURRENT_DATE

Returns current date.

```sql
SELECT CURRENT_DATE;
```

Example output

```
2026-03-10
```

---

## NOW()

Returns current date and time.

```sql
SELECT NOW();
```

Example

```
2026-03-10 12:30:22
```

---

## YEAR()

Extracts year.

```sql
SELECT YEAR(hire_date)
FROM employees;
```

Result

| YEAR(hire_date) |
| --------------- |
| 2023            |
| 2022            |

---

## DATE_ADD

Add time interval.

```sql
SELECT DATE_ADD(hire_date, INTERVAL 1 YEAR)
FROM employees;
```

---

# 2 String Functions

String functions manipulate text data.

Example table

| id  | name   |
| --- | ------ |
| 1   | Tanish |
| 2   | Rahul  |

---

## UPPER()

Converts text to uppercase.

```sql
SELECT UPPER(name)
FROM employees;
```

Result

| UPPER(name) |
| ----------- |
| TANISH      |
| RAHUL       |

---

## LOWER()

Converts text to lowercase.

```sql
SELECT LOWER(name)
FROM employees;
```

---

## LENGTH()

Returns string length.

```sql
SELECT LENGTH(name)
FROM employees;
```

Result

| LENGTH(name) |
| ------------ |
| 6            |
| 5            |

---

## CONCAT()

Combines strings.

```sql
SELECT CONCAT(name,' works here')
FROM employees;
```

Result

| output            |
| ----------------- |
| Tanish works here |

---

# 3 Numeric Functions

Numeric functions perform mathematical operations.

Example table

| salary |
| ------ |
| 80000  |
| 60000  |
| 55000  |

---

## ROUND()

Rounds numbers.

```sql
SELECT ROUND(456.78);
```

Result

```
457
```

---

## CEIL()

Rounds upward.

```sql
SELECT CEIL(4.2);
```

Result

```
5
```

---

## FLOOR()

Rounds downward.

```sql
SELECT FLOOR(4.9);
```

Result

```
4
```

---

## ABS()

Absolute value.

```sql
SELECT ABS(-100);
```

Result

```
100
```

---

# 4 Statistical Functions

Used for **data analysis and aggregation**.

Example table

| salary |
| ------ |
| 80000  |
| 60000  |
| 55000  |

---

## COUNT()

Counts rows.

```sql
SELECT COUNT(*)
FROM employees;
```

---

## SUM()

Total values.

```sql
SELECT SUM(salary)
FROM employees;
```

---

## AVG()

Average value.

```sql
SELECT AVG(salary)
FROM employees;
```

---

## MIN()

Minimum value.

```sql
SELECT MIN(salary)
FROM employees;
```

---

## MAX()

Maximum value.

```sql
SELECT MAX(salary)
FROM employees;
```

---

# 5 JSON Functions

Modern databases support **JSON data**.

Example table

| id  | user_data                 |
| --- | ------------------------- |
| 1   | {"age":21,"city":"Delhi"} |

---

## JSON_EXTRACT

Extract values from JSON.

```sql
SELECT JSON_EXTRACT(user_data,'$.age')
FROM users;
```

Result

```
21
```

---

# 6 Conversion Functions

Used to convert one data type into another.

---

## CAST()

Convert data type.

Example

```sql
SELECT CAST('123' AS INT);
```

Result

```
123
```

---

## CONVERT()

Another type conversion method.

```sql
SELECT CONVERT('2025-01-01', DATE);
```

---

# 7 Datatype Functions

Used to inspect or handle data types.

Example

```sql
SELECT typeof(salary)
FROM employees;
```

Output

```
INTEGER
```

(dependent on database)

---

# Special String Functions

## LTRIM

Removes spaces from left.

Example

```sql
SELECT LTRIM('   Hello');
```

Result

```
Hello
```

---

## RTRIM

Removes spaces from right.

```sql
SELECT RTRIM('Hello   ');
```

Result

```
Hello
```

---

## TRIM

Removes spaces from both sides.

```sql
SELECT TRIM('   Hello   ');
```

---

# Example Query Using Multiple Functions

Table

| id  | name   | salary |
| --- | ------ | ------ |
| 1   | Tanish | 80000  |
| 2   | Rahul  | 60000  |

Query

```sql
SELECT
UPPER(name),
salary,
ROUND(salary/12) AS monthly_salary
FROM employees;
```

Result

| name   | salary | monthly_salary |
| ------ | ------ | -------------- |
| TANISH | 80000  | 6667           |
| RAHUL  | 60000  | 5000           |

---

# Real System Example

Ecommerce analytics.

Table

| order_id | amount |
| -------- | ------ |
| 1        | 100    |
| 2        | 250    |
| 3        | 150    |

Query

```sql
SELECT
COUNT(*) AS total_orders,
SUM(amount) AS revenue,
AVG(amount) AS avg_order
FROM orders;
```

Result

| total_orders | revenue | avg_order |
| ------------ | ------- | --------- |
| 3            | 500     | 166.6     |

---

# Execution Flow Example

Query

```sql
SELECT UPPER(name)
FROM employees
WHERE salary > 60000;
```

Execution order

```text
FROM employees
↓
WHERE salary > 60000
↓
SELECT UPPER(name)
```

---

# Practice Problems

### Problem 1

Convert names to uppercase.

```sql
SELECT UPPER(name)
FROM employees;
```

---

### Problem 2

Find total salary.

```sql
SELECT SUM(salary)
FROM employees;
```

---

### Problem 3

Find average salary.

```sql
SELECT AVG(salary)
FROM employees;
```

---

### Problem 4

Remove spaces from text.

```sql
SELECT TRIM(name)
FROM employees;
```

---

If you want, I can also prepare a **complete SQL Functions Master Sheet (50+ functions organized for interviews + backend development)** so you remember them much faster.
