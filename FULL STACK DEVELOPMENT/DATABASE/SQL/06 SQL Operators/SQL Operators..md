# SQL Operators

## Problem

When querying data from a database, we rarely want **all records**.
Usually we want to apply **conditions** such as:

- employees with salary > 60000
- users whose name starts with "T"
- orders between two dates
- customers from multiple cities
- rows where some value is missing

To express these conditions, SQL provides **operators**.

Operators allow us to:

- filter rows
- compare values
- combine conditions
- check existence of data
- perform set operations between queries

Without operators, SQL queries would return **too much data and become useless**.

---

# What are SQL Operators

SQL Operators are **symbols or keywords used inside queries to perform comparisons, filtering, and logical operations**.

Operators are mainly used inside:

```
WHERE
HAVING
JOIN conditions
CASE expressions
```

Example

```sql
SELECT *
FROM employees
WHERE salary > 60000;
```

Here

```
>  → comparison operator
```

---

# Categories of SQL Operators

| Category              | Purpose                             |
| --------------------- | ----------------------------------- |
| Logical Operators     | combine multiple conditions         |
| Comparison Operators  | compare values                      |
| Special Operators     | pattern matching and ranges         |
| Set Operators         | combine results of multiple queries |
| Subquery Operators    | work with nested queries            |
| Conditional Operators | conditional logic                   |

---

# Example Table

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

---

# Logical Operators

Logical operators combine multiple conditions.

| Operator | Meaning              |
| -------- | -------------------- |
| AND      | both conditions true |
| OR       | at least one true    |
| NOT      | reverses condition   |

---

## AND

Both conditions must be true.

```sql
SELECT *
FROM employees
WHERE department = 'Sales'
AND salary > 65000;
```

Result

| id  | name | department | salary |
| --- | ---- | ---------- | ------ |
| 4   | Tara | Sales      | 70000  |

---

## OR

At least one condition must be true.

```sql
SELECT *
FROM employees
WHERE department='HR'
OR department='Sales';
```

---

## NOT

Reverses condition.

```sql
SELECT *
FROM employees
WHERE NOT department='Sales';
```

---

# LIKE Operator

Used for **pattern matching**.

Wildcards

| Symbol | Meaning          |
| ------ | ---------------- |
| %      | any characters   |
| \_     | single character |

---

Example

```sql
SELECT *
FROM employees
WHERE name LIKE 'T%';
```

Matches names starting with T.

Result

| name   |
| ------ |
| Tanish |
| Tara   |

---

# IN Operator

Used to check if value exists in a list.

Instead of writing multiple OR conditions.

Example

```sql
SELECT *
FROM employees
WHERE department IN ('HR','Sales');
```

Equivalent to

```sql
WHERE department='HR'
OR department='Sales'
```

---

# NOT Operator

Used to negate a condition.

Example

```sql
SELECT *
FROM employees
WHERE NOT department='Engineering';
```

---

# NOT EQUAL Operator

Checks values not equal.

Syntax

```
!=
<>
```

Example

```sql
SELECT *
FROM employees
WHERE department != 'HR';
```

---

# IS NULL Operator

Used to check missing values.

Example table

| id  | name   | manager |
| --- | ------ | ------- |
| 1   | Tanish | NULL    |
| 2   | Rahul  | 1       |

Query

```sql
SELECT *
FROM employees
WHERE manager IS NULL;
```

---

# BETWEEN Operator

Used for ranges.

Example

```sql
SELECT *
FROM employees
WHERE salary BETWEEN 60000 AND 80000;
```

Result

| name   | salary |
| ------ | ------ |
| Tanish | 80000  |
| Rahul  | 60000  |
| Tara   | 70000  |

---

# UNION Operator

Combines results of two queries.

Duplicates removed.

Example

```sql
SELECT name FROM employees
UNION
SELECT name FROM managers;
```

---

# UNION ALL Operator

Similar to UNION but keeps duplicates.

Example

```sql
SELECT department FROM employees
UNION ALL
SELECT department FROM contractors;
```

---

# INTERSECT Operator

Returns **common rows from both queries**.

Example

```sql
SELECT name FROM employees
INTERSECT
SELECT name FROM managers;
```

---

# EXCEPT Operator

Returns rows from first query not present in second query.

Example

```sql
SELECT name FROM employees
EXCEPT
SELECT name FROM managers;
```

---

# ALL Operator

Used with comparison operator.

Checks condition against **all values in subquery**.

Example

```sql
SELECT *
FROM employees
WHERE salary > ALL (
SELECT salary
FROM interns
);
```

Meaning

```
salary greater than every intern salary
```

---

# ANY Operator

Checks condition against **any value in subquery**.

Example

```sql
SELECT *
FROM employees
WHERE salary > ANY (
SELECT salary
FROM interns
);
```

Meaning

```
salary greater than at least one intern salary
```

---

# EXISTS Operator

Checks if subquery returns rows.

Example

```sql
SELECT *
FROM employees e
WHERE EXISTS (
SELECT *
FROM orders o
WHERE o.employee_id = e.id
);
```

Meaning

```
employees who have orders
```

---

# CASE Operator

Used for conditional logic.

Similar to **if-else**.

Example

```sql
SELECT name,
CASE
WHEN salary > 70000 THEN 'High Salary'
WHEN salary > 60000 THEN 'Medium Salary'
ELSE 'Low Salary'
END AS salary_level
FROM employees;
```

Result

| name   | salary_level  |
| ------ | ------------- |
| Tanish | High Salary   |
| Rahul  | Medium Salary |
| Neha   | Low Salary    |

---

# Mental Model

Operators allow SQL queries to **apply logic to data**.

```
Table Data
     ↓
Operators
     ↓
Filtered Result
```

Example pipeline

```
FROM employees
     ↓
WHERE salary > 60000
     ↓
AND department='Sales'
     ↓
Result rows
```

---

# Practical Combined Query

Example

```sql
SELECT name, salary
FROM employees
WHERE department IN ('Sales','HR')
AND salary BETWEEN 50000 AND 75000
ORDER BY salary DESC;
```

Execution

```
1 FROM employees
2 WHERE department IN
3 AND salary BETWEEN
4 SELECT name salary
5 ORDER BY salary
```

---

# Common Interview Questions

### Difference between UNION and UNION ALL

| UNION              | UNION ALL        |
| ------------------ | ---------------- |
| removes duplicates | keeps duplicates |
| slower             | faster           |

---

### Difference between IN and EXISTS

| IN                  | EXISTS                      |
| ------------------- | --------------------------- |
| compares values     | checks existence            |
| good for small sets | better for large subqueries |

---

### Difference between BETWEEN and >= <=

```
salary BETWEEN 50000 AND 70000
```

Equivalent to

```
salary >= 50000 AND salary <= 70000
```

---

# Practice Problems

### Problem 1

Employees with salary between 60000 and 80000

```sql
SELECT *
FROM employees
WHERE salary BETWEEN 60000 AND 80000;
```

---

### Problem 2

Employees whose name starts with T

```sql
SELECT *
FROM employees
WHERE name LIKE 'T%';
```

---

### Problem 3

Employees from HR or Sales department

```sql
SELECT *
FROM employees
WHERE department IN ('HR','Sales');
```

---

### Problem 4

Employees not from Engineering

```sql
SELECT *
FROM employees
WHERE department != 'Engineering';
```
