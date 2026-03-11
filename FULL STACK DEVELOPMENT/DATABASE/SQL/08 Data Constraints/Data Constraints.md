# Data Constraints (SQL)

## Problem

Databases store **critical structured data** such as:

- user accounts
- bank transactions
- orders and payments
- medical records

If there are **no rules on data**, many problems occur:

Examples of bad data:

| id  | name   | email                                   | age |
| --- | ------ | --------------------------------------- | --- |
| 1   | Tanish | NULL                                    | 21  |
| 2   | Rahul  | [rahul@mail.com](mailto:rahul@mail.com) | -5  |
| 2   | Neha   | [neha@mail.com](mailto:neha@mail.com)   | 25  |

Problems:

- duplicate IDs
- missing required data
- invalid values
- broken relationships between tables

To prevent these problems, SQL uses **constraints**.

---

# What Are Constraints

Constraints are **rules applied to table columns** to enforce valid data.

They ensure:

- data accuracy
- consistency
- relational integrity
- prevention of invalid values

Constraints can be applied:

- when creating tables
- after table creation

---

# Mental Model

Think of constraints as **database safety guards**.

```
User Input
     ↓
Constraints check rules
     ↓
Valid data stored
```

If data violates constraints → **database rejects the operation**.

---

# Types of SQL Constraints

| Constraint    | Purpose                              |
| ------------- | ------------------------------------ |
| NOT NULL      | column cannot contain NULL           |
| PRIMARY KEY   | unique identifier for rows           |
| FOREIGN KEY   | link between tables                  |
| UNIQUE        | prevents duplicate values            |
| CHECK         | enforce condition                    |
| DEFAULT       | assign default value                 |
| COMPOSITE KEY | multiple columns as key              |
| ALTERNATE KEY | candidate keys not chosen as primary |

---

# Example Table Used

```
users
```

| id  | name   | email                                     | age |
| --- | ------ | ----------------------------------------- | --- |
| 1   | Tanish | [tanish@mail.com](mailto:tanish@mail.com) | 21  |

---

# 1 NOT NULL Constraint

## Concept

Ensures a column **cannot contain NULL values**.

Used when data is **mandatory**.

---

## Example

```sql
CREATE TABLE users(

id INT,
name VARCHAR(50) NOT NULL,
email VARCHAR(100)

);
```

Meaning

```
name column must always contain a value
```

---

## Invalid Insert

```sql
INSERT INTO users (id,email)
VALUES (1,'test@mail.com');
```

Error occurs because `name` is NOT NULL.

---

# 2 PRIMARY KEY Constraint

## Concept

Primary key uniquely identifies each row in a table.

Properties:

- unique values
- cannot be NULL
- only one primary key per table

---

## Example

```sql
CREATE TABLE users(

id INT PRIMARY KEY,
name VARCHAR(50),
email VARCHAR(100)

);
```

Example data

| id  | name   |
| --- | ------ |
| 1   | Tanish |
| 2   | Rahul  |

Invalid case:

| id  | name |
| --- | ---- |
| 1   | Neha |

Duplicate ID → error.

---

# 3 FOREIGN KEY Constraint

## Problem

Tables often depend on other tables.

Example:

```
users
orders
```

Orders must belong to a valid user.

---

## Example Tables

Users table

| id  | name   |
| --- | ------ |
| 1   | Tanish |

Orders table

| order_id | user_id | product |
| -------- | ------- | ------- |
| 101      | 1       | Laptop  |

---

## Foreign Key Example

```sql
CREATE TABLE orders(

order_id INT PRIMARY KEY,
user_id INT,
product VARCHAR(50),

FOREIGN KEY (user_id)
REFERENCES users(id)

);
```

Meaning

```
user_id must exist in users table
```

---

## Invalid Insert

```sql
INSERT INTO orders
VALUES (102,5,'Phone');
```

Error because user `5` does not exist.

---

# 4 UNIQUE Constraint

Ensures all values in column are unique.

Example

Emails should not repeat.

---

## Example

```sql
CREATE TABLE users(

id INT PRIMARY KEY,
email VARCHAR(100) UNIQUE

);
```

Valid

| email                           |
| ------------------------------- |
| [a@mail.com](mailto:a@mail.com) |
| [b@mail.com](mailto:b@mail.com) |

Invalid

| email                           |
| ------------------------------- |
| [a@mail.com](mailto:a@mail.com) |
| [a@mail.com](mailto:a@mail.com) |

---

# 5 COMPOSITE KEY

A composite key uses **multiple columns together as a primary key**.

Used when single column is not enough.

---

## Example

Student course enrollment.

| student_id | course_id |
| ---------- | --------- |
| 1          | DBMS      |

---

## Example

```sql
CREATE TABLE enrollments(

student_id INT,
course_id INT,

PRIMARY KEY(student_id,course_id)

);
```

Meaning

```
same student cannot enroll in same course twice
```

---

# 6 ALTERNATE KEY

Alternate keys are **candidate keys not selected as primary key**.

Example:

| id  | email                                     |
| --- | ----------------------------------------- |
| 1   | [tanish@mail.com](mailto:tanish@mail.com) |

Possible unique identifiers:

```
id
email
```

Primary key chosen:

```
id
```

Alternate key:

```
email
```

Example

```sql
email VARCHAR(100) UNIQUE
```

---

# 7 CHECK Constraint

Ensures column values satisfy condition.

Example

Age must be positive.

---

## Example

```sql
CREATE TABLE users(

id INT PRIMARY KEY,
age INT CHECK(age >= 18)

);
```

Valid

```
age = 21
```

Invalid

```
age = 10
```

Database rejects insertion.

---

# 8 DEFAULT Constraint

Assigns default value if none provided.

---

## Example

```sql
CREATE TABLE users(

id INT PRIMARY KEY,
country VARCHAR(50) DEFAULT 'India'

);
```

Insert

```sql
INSERT INTO users(id)
VALUES(1);
```

Stored data

| id  | country |
| --- | ------- |
| 1   | India   |

---

# Full Example Table with All Constraints

```sql
CREATE TABLE users(

id INT PRIMARY KEY,

name VARCHAR(50) NOT NULL,

email VARCHAR(100) UNIQUE,

age INT CHECK(age >= 18),

country VARCHAR(50) DEFAULT 'India'

);
```

---

# Real World Example

E-commerce database.

Users table

```sql
CREATE TABLE users(

id INT PRIMARY KEY,
email VARCHAR(100) UNIQUE,
name VARCHAR(50) NOT NULL

);
```

Orders table

```sql
CREATE TABLE orders(

order_id INT PRIMARY KEY,
user_id INT,

FOREIGN KEY(user_id)
REFERENCES users(id)

);
```

---

# Constraint Comparison

| Constraint  | Purpose                 |
| ----------- | ----------------------- |
| NOT NULL    | prevents missing values |
| PRIMARY KEY | unique row identifier   |
| FOREIGN KEY | table relationship      |
| UNIQUE      | prevent duplicates      |
| CHECK       | enforce value condition |
| DEFAULT     | auto default value      |

---

# Mental Model (Constraints)

```
Table
  ↓
Columns
  ↓
Constraints
  ↓
Valid Data Only
```

---

# Interview Questions

### Why are constraints important

Constraints ensure **data integrity and consistency**.

---

### Difference between PRIMARY KEY and UNIQUE

| Feature            | PRIMARY KEY | UNIQUE   |
| ------------------ | ----------- | -------- |
| NULL allowed       | no          | yes      |
| duplicates allowed | no          | no       |
| count per table    | one         | multiple |

---

### What is a foreign key

A column that references **primary key of another table**.

---

### What is composite key

Primary key made of **multiple columns**.

---

### Example

```sql
PRIMARY KEY(student_id, course_id)
```

---

If you want, the next important topic is **SQL Joins**, which is where SQL becomes powerful (used heavily in backend systems and interviews).
