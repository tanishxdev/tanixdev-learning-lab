# SQL Tables

Tables are the **core data structures in relational databases**.
All data inside a database is ultimately stored in tables.

A table organizes information in the form of:

- rows → individual records
- columns → attributes of the record

Example table:

| id  | name   | department  | salary |
| --- | ------ | ----------- | ------ |
| 1   | Tanish | Engineering | 80000  |
| 2   | Rahul  | Sales       | 60000  |
| 3   | Neha   | HR          | 55000  |

Mental model:

```
Database
   ↓
Tables
   ↓
Rows (records)
   ↓
Columns (attributes)
```

Tables allow:

- structured data storage
- efficient querying
- enforcing constraints
- linking data across multiple tables

---

# Table Operations in SQL

The main operations related to SQL tables are:

```
CREATE TABLE
DROP TABLE
RENAME TABLE
TRUNCATE TABLE
COPY TABLE
TEMP TABLE
ALTER TABLE
```

These operations fall under **DDL (Data Definition Language)** because they modify the **structure of the database**.

---

# 1 CREATE TABLE

## Concept

`CREATE TABLE` defines a new table in the database.

It specifies:

- table name
- columns
- data types
- constraints

This command creates the **structure where data will be stored**.

---

## Syntax

```sql
CREATE TABLE table_name
(
column1 datatype,
column2 datatype,
column3 datatype
);
```

---

## Example

```sql
CREATE TABLE Customer(

CustomerID INT PRIMARY KEY,
FirstName VARCHAR(50),
LastName VARCHAR(50),
Country VARCHAR(50),
Age INT CHECK (Age >= 0 AND Age <= 99),
Phone VARCHAR(15)

);
```

---

## Explanation

| Column     | Purpose             |
| ---------- | ------------------- |
| CustomerID | unique identifier   |
| FirstName  | customer first name |
| LastName   | customer last name  |
| Country    | customer country    |
| Age        | age with validation |
| Phone      | contact number      |

Constraints used:

```
PRIMARY KEY → unique identifier
CHECK → restrict allowed values
```

---

## Inserting Data into Table

After creating a table we insert data.

```sql
INSERT INTO Customer
(CustomerID, FirstName, LastName, Country, Age, Phone)
VALUES
(1,'Luca','Bianchi','Italy',23,'1111111111'),
(2,'Aiko','Tanaka','Japan',21,'2222222222'),
(3,'Carlos','Gomez','Spain',24,'3333333333');
```

Result table:

| CustomerID | FirstName | LastName | Country | Age |
| ---------- | --------- | -------- | ------- | --- |
| 1          | Luca      | Bianchi  | Italy   | 23  |
| 2          | Aiko      | Tanaka   | Japan   | 21  |
| 3          | Carlos    | Gomez    | Spain   | 24  |

---

## Create Table From Existing Table

Sometimes we want to duplicate data.

Syntax:

```sql
CREATE TABLE new_table
AS
SELECT column1,column2
FROM existing_table;
```

Example:

```sql
CREATE TABLE CustomerBackup AS
SELECT *
FROM Customer;
```

Use cases:

- backup tables
- testing environments
- data migration

---

# 2 DROP TABLE

## Concept

`DROP TABLE` completely removes a table.

It deletes:

- table structure
- data
- indexes
- triggers
- constraints

Once dropped, the table cannot be recovered without backup.

---

## Syntax

```sql
DROP TABLE table_name;
```

---

## Example

```sql
DROP TABLE Customer;
```

After execution:

```
Customer table no longer exists
```

---

## Safe Version

To avoid errors:

```sql
DROP TABLE IF EXISTS Customer;
```

---

## Internal Behavior

```
Table removed from database schema
All rows deleted
Indexes removed
Constraints removed
```

---

# 3 RENAME TABLE

Sometimes table names must change.

Example reasons:

- better naming
- schema redesign
- application changes

---

## Syntax

```sql
ALTER TABLE old_table
RENAME TO new_table;
```

---

## Example

```sql
ALTER TABLE Customer
RENAME TO Customers;
```

Result:

```
Customer → Customers
```

Data remains unchanged.

---

# 4 ALTER TABLE

`ALTER TABLE` modifies an existing table structure.

Operations include:

```
ADD column
MODIFY column
DROP column
RENAME column
RENAME table
```

---

## Add Column

```sql
ALTER TABLE Customers
ADD Email VARCHAR(100);
```

---

## Modify Column

```sql
ALTER TABLE Customers
MODIFY Age INT;
```

---

## Drop Column

```sql
ALTER TABLE Customers
DROP COLUMN Phone;
```

---

## Rename Column

```sql
ALTER TABLE Customers
RENAME COLUMN FirstName TO Name;
```

---

# 5 TRUNCATE TABLE

## Concept

`TRUNCATE` removes **all rows from a table but keeps structure**.

Used when we want to quickly empty a table.

---

## Syntax

```sql
TRUNCATE TABLE table_name;
```

---

## Example

```sql
TRUNCATE TABLE Customers;
```

Result:

| CustomerID | FirstName | LastName |
| ---------- | --------- | -------- |
| (empty)    |           |          |

Table structure still exists.

---

## TRUNCATE vs DELETE

| Feature      | TRUNCATE    | DELETE        |
| ------------ | ----------- | ------------- |
| removes rows | all rows    | selected rows |
| WHERE clause | not allowed | allowed       |
| speed        | very fast   | slower        |
| logging      | minimal     | full logging  |
| triggers     | not fired   | fired         |

---

# TRUNCATE vs DROP

| Feature                    | TRUNCATE | DROP |
| -------------------------- | -------- | ---- |
| data removed               | yes      | yes  |
| table structure removed    | no       | yes  |
| indexes removed            | no       | yes  |
| table exists after command | yes      | no   |

---

# 6 COPY TABLE

Copying tables is used for:

- backups
- testing
- analysis

---

## Simple Cloning

Copies structure and data but not constraints.

```sql
CREATE TABLE Employee_Copy
AS SELECT * FROM Employee;
```

---

## Shallow Clone

Copies only structure.

```sql
CREATE TABLE Employee_Copy
LIKE Employee;
```

Result:

```
same columns
same constraints
no data
```

---

## Deep Clone

Copies structure and data.

```sql
CREATE TABLE Employee_Copy LIKE Employee;
INSERT INTO Employee_Copy
SELECT * FROM Employee;
```

---

# 7 TEMP TABLE

Temporary tables store data for **short duration during query execution**.

Properties:

```
temporary storage
session-specific
automatically deleted
```

---

## Syntax

```sql
CREATE TABLE #TempEmployees
(
id INT,
name VARCHAR(50)
);
```

Insert values

```sql
INSERT INTO #TempEmployees
VALUES (1,'John'),(2,'Mike');
```

Query

```sql
SELECT * FROM #TempEmployees;
```

---

# Types of Temporary Tables

### Local Temporary Table

```
#TempTable
```

Accessible only inside current session.

---

### Global Temporary Table

```
##TempTable
```

Accessible across sessions.

---

# When Temporary Tables Are Used

```
Complex queries
Intermediate data storage
Procedure debugging
Large data transformations
```

Example:

```
Step1 store intermediate results
Step2 perform aggregation
Step3 final output
```

---

# Practical Example (Complete Table Workflow)

### Step 1 Create Table

```sql
CREATE TABLE Employees(

id INT PRIMARY KEY,
name VARCHAR(50),
department VARCHAR(50),
salary INT

);
```

---

### Step 2 Insert Data

```sql
INSERT INTO Employees VALUES
(1,'Tanish','Engineering',80000),
(2,'Rahul','Sales',60000),
(3,'Neha','HR',55000);
```

---

### Step 3 Modify Table

```sql
ALTER TABLE Employees
ADD email VARCHAR(100);
```

---

### Step 4 Rename Table

```sql
ALTER TABLE Employees
RENAME TO Staff;
```

---

### Step 5 Remove All Data

```sql
TRUNCATE TABLE Staff;
```

---

### Step 6 Delete Table

```sql
DROP TABLE Staff;
```

---

# Mental Model for SQL Tables

```
Database
   ↓
Tables
   ↓
Structure (CREATE)
   ↓
Modify Structure (ALTER)
   ↓
Duplicate (COPY)
   ↓
Temporary Processing (TEMP TABLE)
   ↓
Clear Data (TRUNCATE)
   ↓
Delete Table (DROP)
```

---

# Interview Questions

### Which SQL command creates a table?

```
CREATE TABLE
```

---

### Which command permanently removes a table?

```
DROP TABLE
```

---

### Which command deletes all rows but keeps structure?

```
TRUNCATE TABLE
```

---

### Which command modifies table structure?

```
ALTER TABLE
```

---

### Which command copies data into a new table?

```
CREATE TABLE new_table AS SELECT ...
```

---
