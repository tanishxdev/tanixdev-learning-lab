# SQL Operators

## Concept

SQL operators are **symbols or keywords used inside SQL queries to perform operations on data**.

They help to:

- perform calculations
- compare values
- combine conditions
- filter rows
- manipulate data

Operators are mostly used in:

```sql
SELECT
WHERE
UPDATE
HAVING
JOIN
```

Example

```sql
SELECT *
FROM students
WHERE marks > 70;
```

Here:

```
>  → comparison operator
```

---

# Types of SQL Operators

| Category   | Purpose                         |
| ---------- | ------------------------------- |
| Arithmetic | mathematical calculations       |
| Comparison | compare values                  |
| Logical    | combine conditions              |
| Bitwise    | manipulate binary bits          |
| Compound   | combine operation + assignment  |
| Special    | pattern matching, ranges, lists |

---

# 1 Arithmetic Operators

Arithmetic operators perform **mathematical calculations on numeric columns**.

| Operator | Meaning             |
| -------- | ------------------- |
| +        | addition            |
| -        | subtraction         |
| \*       | multiplication      |
| /        | division            |
| %        | modulus (remainder) |

---

## Example Table

```sql
CREATE TABLE Employees (

    EmpID INT,
    EmpName VARCHAR(50),
    Salary INT,
    Bonus INT

);
```

Insert data

```sql
INSERT INTO Employees (EmpID, EmpName, Salary, Bonus)
VALUES
(1,'Amit',40000,5000),
(2,'Neha',50000,7000),
(3,'Ravi',30000,3000);
```

Table

| EmpID | EmpName | Salary | Bonus |
| ----- | ------- | ------ | ----- |
| 1     | Amit    | 40000  | 5000  |
| 2     | Neha    | 50000  | 7000  |
| 3     | Ravi    | 30000  | 3000  |

---

## Arithmetic Query Example

```sql
SELECT
    EmpName,
    Salary,
    Bonus,

    Salary + Bonus AS Total_Income,         -- addition

    Salary - Bonus AS After_Bonus_Deduction, -- subtraction

    Salary * 0.10 AS Ten_Percent_Salary,     -- multiplication

    Salary / 12 AS Monthly_Salary,           -- division

    Salary % 10000 AS Salary_Remainder       -- modulus

FROM Employees;
```

---

## Output

| EmpName | Salary | Bonus | Total_Income | After_Bonus_Deduction | Ten_Percent_Salary | Monthly_Salary | Salary_Remainder |
| ------- | ------ | ----- | ------------ | --------------------- | ------------------ | -------------- | ---------------- |
| Amit    | 40000  | 5000  | 45000        | 35000                 | 4000               | 3333           | 0                |
| Neha    | 50000  | 7000  | 57000        | 43000                 | 5000               | 4166           | 0                |
| Ravi    | 30000  | 3000  | 33000        | 27000                 | 3000               | 2500           | 0                |

---

## Real Use Cases

### Calculate total salary

```sql
SELECT Salary + Bonus AS total_salary
FROM Employees;
```

---

### Calculate yearly salary

```sql
SELECT Salary * 12 AS yearly_salary
FROM Employees;
```

---

### Calculate tax

```sql
SELECT Salary * 0.30 AS tax
FROM Employees;
```

---

# 2 Comparison Operators

Comparison operators **compare two values and return TRUE or FALSE**.

These are mostly used inside **WHERE clause**.

| Operator | Meaning          |
| -------- | ---------------- |
| =        | equal            |
| >        | greater than     |
| <        | less than        |
| >=       | greater or equal |
| <=       | less or equal    |
| <> or != | not equal        |

---

## Example Table

```sql
CREATE TABLE Students (

    ID INT,
    Name VARCHAR(50),
    Marks INT

);
```

Insert data

```sql
INSERT INTO Students VALUES
(1,'Amit',85),
(2,'Neha',70),
(3,'Ravi',55);
```

---

## Example Query

Students scoring **70 or more**

```sql
SELECT *
FROM Students
WHERE Marks >= 70;
```

---

## Output

| ID  | Name | Marks |
| --- | ---- | ----- |
| 1   | Amit | 85    |
| 2   | Neha | 70    |

---

## More Comparison Examples

### Exact match

```sql
SELECT *
FROM Students
WHERE Marks = 85;
```

---

### Less than

```sql
SELECT *
FROM Students
WHERE Marks < 60;
```

---

### Not equal

```sql
SELECT *
FROM Students
WHERE Marks != 70;
```

---

# 3 Logical Operators

Logical operators **combine multiple conditions**.

| Operator | Meaning                      |
| -------- | ---------------------------- |
| AND      | both conditions must be true |
| OR       | any condition true           |
| NOT      | reverses condition           |

---

## Example Table

```sql
CREATE TABLE Students (

    ID INT,
    Name VARCHAR(50),
    Marks INT,
    Age INT

);
```

Insert data

```sql
INSERT INTO Students VALUES
(1,'Amit',85,18),
(2,'Neha',70,19),
(3,'Ravi',55,17);
```

---

## AND Operator

Both conditions must be true.

```sql
SELECT *
FROM Students
WHERE Marks >= 70 AND Age >= 18;
```

Output

| Name | Marks | Age |
| ---- | ----- | --- |
| Amit | 85    | 18  |
| Neha | 70    | 19  |

---

## OR Operator

Any condition can be true.

```sql
SELECT *
FROM Students
WHERE Marks < 60 OR Age < 18;
```

Output

| Name | Marks | Age |
| ---- | ----- | --- |
| Ravi | 55    | 17  |

---

## NOT Operator

Reverses condition.

```sql
SELECT *
FROM Students
WHERE NOT Marks >= 70;
```

Output

| Name | Marks |
| ---- | ----- |
| Ravi | 55    |

---

# 4 Bitwise Operators

Bitwise operators work **on binary bits**.

Common operators:

| Operator | Meaning |     |
| -------- | ------- | --- |
| &        | AND     |     |
|          |         | OR  |
| ^        | XOR     |     |
| ~        | NOT     |     |

These are often used in **permission systems**.

---

## Example Table

```sql
CREATE TABLE Users (

    UserID INT,
    UserName VARCHAR(50),
    Permissions INT

);
```

Permission values

| Permission | Value |
| ---------- | ----- |
| Read       | 1     |
| Write      | 2     |
| Execute    | 4     |

---

## Insert Data

```sql
INSERT INTO Users VALUES
(1,'Amit',1),
(2,'Neha',3),
(3,'Ravi',7);
```

Meaning

| User | Permissions | Meaning                |
| ---- | ----------- | ---------------------- |
| Amit | 1           | read                   |
| Neha | 3           | read + write           |
| Ravi | 7           | read + write + execute |

---

## Check Write Permission

```sql
SELECT *
FROM Users
WHERE Permissions & 2 = 2;
```

Users with write permission returned.

---

## Add Execute Permission

```sql
UPDATE Users
SET Permissions = Permissions | 4
WHERE UserName='Neha';
```

---

## Remove Read Permission

```sql
UPDATE Users
SET Permissions = Permissions & ~1
WHERE UserName='Ravi';
```

---

## Toggle Write Permission

```sql
UPDATE Users
SET Permissions = Permissions ^ 2
WHERE UserName='Amit';
```

---

# 5 Compound Operators

Compound operators combine **operation + assignment**.

Example pattern

```
column = column + value
```

---

## Example Table

```sql
CREATE TABLE Employees (

    EmpID INT,
    EmpName VARCHAR(50),
    Salary INT

);
```

Insert data

```sql
INSERT INTO Employees VALUES
(1,'Amit',40000),
(2,'Neha',50000),
(3,'Ravi',30000);
```

---

## Increase salary

```sql
UPDATE Employees
SET Salary = Salary + 5000;
```

---

## Reduce salary

```sql
UPDATE Employees
SET Salary = Salary - 2000
WHERE EmpName='Ravi';
```

---

## Double salary

```sql
UPDATE Employees
SET Salary = Salary * 2
WHERE EmpName='Neha';
```

---

## Divide salary

```sql
UPDATE Employees
SET Salary = Salary / 2
WHERE EmpName='Amit';
```

---

# 6 Special Operators

These operators are used for **specific filtering tasks**.

| Operator | Purpose               |
| -------- | --------------------- |
| BETWEEN  | value range           |
| IN       | match list            |
| LIKE     | pattern matching      |
| IS NULL  | check NULL values     |
| EXISTS   | check subquery result |

---

# BETWEEN Operator

Select values inside a range.

```sql
SELECT *
FROM Students
WHERE Marks BETWEEN 60 AND 90;
```

Output

| Name |
| ---- |
| Amit |
| Neha |

---

# IN Operator

Check if value exists in list.

```sql
SELECT *
FROM Students
WHERE Name IN ('Amit','Ravi');
```

Output

| Name |
| ---- |
| Amit |
| Ravi |

---

# LIKE Operator

Used for **pattern matching**.

Wildcards:

| Symbol | Meaning          |
| ------ | ---------------- |
| %      | any characters   |
| \_     | single character |

Example

```sql
SELECT *
FROM Students
WHERE Name LIKE 'N%';
```

Result

```
Neha
```

Names starting with N.

---

# IS NULL Operator

Used to check NULL values.

```sql
SELECT *
FROM Students
WHERE Marks IS NULL;
```

---

# EXISTS Operator

Checks if **subquery returns rows**.

```sql
SELECT *
FROM Students s
WHERE EXISTS
(
SELECT *
FROM Students
WHERE Marks > 80
);
```

If at least one student has marks > 80 → all rows returned.

---

# Mini Practice Problems

### Problem 1

Get students scoring above 80.

```sql
SELECT *
FROM Students
WHERE Marks > 80;
```

---

### Problem 2

Get employees with salary between 30000 and 50000.

```sql
SELECT *
FROM Employees
WHERE Salary BETWEEN 30000 AND 50000;
```

---

### Problem 3

Find names starting with A.

```sql
SELECT *
FROM Students
WHERE Name LIKE 'A%';
```

---

### Problem 4

Find students named Amit or Ravi.

```sql
SELECT *
FROM Students
WHERE Name IN ('Amit','Ravi');
```

---

# Interview Questions

### Q1 Which operator checks equality?

```
=
```

---

### Q2 Which operator performs pattern matching?

```
LIKE
```

---

### Q3 Which operator checks if value exists in list?

```
IN
```

---

### Q4 Which logical operator requires all conditions to be true?

```
AND
```

---

### Q5 Which operator checks subquery results?

```
EXISTS
```

---
