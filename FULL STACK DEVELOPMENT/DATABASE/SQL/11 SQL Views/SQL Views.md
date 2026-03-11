# SQL Views

---

# Problem

In real databases, queries often become **large and complex**.

Example situation:

A company database may contain many tables:

```
employees
departments
salaries
projects
attendance
```

To get useful information, we may need to write complex queries such as:

```sql
SELECT e.name, d.department_name, s.salary
FROM employees e
JOIN departments d ON e.department_id = d.id
JOIN salaries s ON e.id = s.employee_id
WHERE s.salary > 70000;
```

Problems with repeating such queries:

- query becomes long
- difficult to maintain
- multiple developers may write slightly different queries
- sensitive data may be exposed

Solution:

```
SQL VIEW
```

A **view stores the query definition**, so we can reuse it easily.

---

# What is a SQL View

A **view is a virtual table created from a SQL query**.

Important point:

A view **does not store data itself**.

It stores only the **query logic**.

When we query the view, the database runs the stored query.

---

# Mental Model

Think of a view like this:

```
Table → Raw Data
View → Filtered Window into Data
```

Example:

```
employees table
    ↓
view (only high salary employees)
    ↓
users access simplified data
```

---

# Example Table

Table:

```
employees
```

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 80000  |
| 2   | Rahul  | Sales       | 60000  |
| 3   | Neha   | HR          | 55000  |
| 4   | Amit   | Engineering | 90000  |

---

# Why Views Are Used

Views solve several problems.

### 1 Simplify Complex Queries

Instead of writing long joins repeatedly, we create a view.

### 2 Security

Hide sensitive columns.

Example:

```
salary
personal information
```

### 3 Reusability

Multiple applications can use the same view.

### 4 Maintainability

If the underlying query changes, update the view once.

---

# CREATE VIEW

## Syntax

```sql
CREATE VIEW view_name AS
SELECT column1, column2
FROM table_name
WHERE condition;
```

---

## Example

Create a view for high salary employees.

```sql
CREATE VIEW high_salary_employees AS

SELECT name, department, salary
FROM employees
WHERE salary > 70000;
```

---

## Querying the View

Now we can query the view like a table.

```sql
SELECT *
FROM high_salary_employees;
```

Result

| name   | department  | salary |
| ------ | ----------- | ------ |
| Tanish | Engineering | 80000  |
| Amit   | Engineering | 90000  |

---

# Example with JOIN

Views are especially useful with joins.

Tables:

```
employees
departments
```

employees

| id  | name   | department_id |
| --- | ------ | ------------- |
| 1   | Tanish | 1             |
| 2   | Rahul  | 2             |

departments

| id  | department_name |
| --- | --------------- |
| 1   | Engineering     |
| 2   | Sales           |

---

Create view

```sql
CREATE VIEW employee_department AS

SELECT e.name, d.department_name
FROM employees e
JOIN departments d
ON e.department_id = d.id;
```

Now query view

```sql
SELECT *
FROM employee_department;
```

Result

| name   | department_name |
| ------ | --------------- |
| Tanish | Engineering     |
| Rahul  | Sales           |

---

# Updating Data Through a View

Some views allow updates.

Example view

```sql
CREATE VIEW engineering_employees AS
SELECT id, name, department
FROM employees
WHERE department = 'Engineering';
```

Update via view

```sql
UPDATE engineering_employees
SET name = 'Tanish Kumar'
WHERE id = 1;
```

Database updates the **original table**.

---

# UPDATE VIEW

Views can be updated by **recreating or altering the definition**.

### Syntax (Common approach)

```sql
CREATE OR REPLACE VIEW view_name AS
SELECT column_list
FROM table_name
WHERE condition;
```

---

### Example

```sql
CREATE OR REPLACE VIEW high_salary_employees AS

SELECT name, salary
FROM employees
WHERE salary > 60000;
```

Now the view definition changes.

---

# RENAME VIEW

Rename an existing view.

### Syntax

```sql
RENAME TABLE old_view_name
TO new_view_name;
```

---

### Example

```sql
RENAME TABLE high_salary_employees
TO senior_employees;
```

---

# DROP VIEW

Removes the view.

### Syntax

```sql
DROP VIEW view_name;
```

---

### Example

```sql
DROP VIEW high_salary_employees;
```

Important:

```
Dropping a view does NOT delete table data.
```

It only removes the view definition.

---

# View vs Table

| Feature              | Table | View |
| -------------------- | ----- | ---- |
| stores data          | yes   | no   |
| physical storage     | yes   | no   |
| query required       | no    | yes  |
| used for abstraction | no    | yes  |

---

# View Execution Flow

When query runs:

```
User Query
   ↓
View
   ↓
Stored Query
   ↓
Base Tables
   ↓
Result
```

Example

```sql
SELECT *
FROM high_salary_employees;
```

Database internally runs

```sql
SELECT name,department,salary
FROM employees
WHERE salary > 70000;
```

---

# Real World Use Cases

### 1 Dashboard Queries

Business dashboards use views for reporting.

Example

```
monthly_sales_view
```

---

### 2 Security Layer

Allow analysts to access only required columns.

Example

```
employee_public_view
```

Without exposing salary.

---

### 3 Simplifying Microservices

Backend APIs often query views instead of raw tables.

---

# Practice Example

Table

```
employees
```

| id  | name | salary |
| --- | ---- | ------ |
| 1   | A    | 40000  |
| 2   | B    | 70000  |
| 3   | C    | 90000  |

---

Create view

```sql
CREATE VIEW high_salary AS

SELECT name, salary
FROM employees
WHERE salary > 60000;
```

---

Query view

```sql
SELECT *
FROM high_salary;
```

Result

| name | salary |
| ---- | ------ |
| B    | 70000  |
| C    | 90000  |

---

# Common Interview Questions

### What is a SQL View

A view is a **virtual table based on a SQL query**.

---

### Does a view store data

No.
It stores **query definition only**.

---

### Why are views used

- simplify queries
- improve security
- reuse query logic

---

### Difference between View and Table

| Table                     | View                        |
| ------------------------- | --------------------------- |
| stores data               | virtual                     |
| physical storage          | no storage                  |
| faster for simple queries | depends on underlying query |

---

### What happens when a table changes

Views automatically reflect updated table data.

---

If you want, the next important SQL topic after Views is **SQL Indexes**, which is one of the **most important performance concepts used in real backend systems and interviews**.
