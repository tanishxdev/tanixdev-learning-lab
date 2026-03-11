# SQL Database — Mental Model + Core Operations

---

# Problem

Before writing SQL queries, a system must have a **database container** where data can live.

Example application:

```
E-commerce Website
```

Data needed:

```
Users
Products
Orders
Payments
```

If everything is stored in a single place without structure:

Problems appear:

- data becomes messy
- tables from different projects mix together
- security becomes difficult
- large systems become impossible to manage

Therefore databases are organized using a **hierarchical structure**.

---

# Mental Model of Database System

Think of SQL storage like a **folder system**.

```
DBMS
   ↓
Database
   ↓
Tables
   ↓
Rows
   ↓
Columns
```

Example:

```
MySQL Server
   ↓
company_db
   ↓
employees table
   ↓
rows (records)
   ↓
columns (fields)
```

---

# Database

A **database** is a container that stores related objects.

Objects inside database:

```
Tables
Views
Indexes
Stored Procedures
Triggers
```

Example

```
company_db
```

Inside it

```
employees
departments
orders
payments
```

---

# SQL Database Operations

Managing databases mainly involves four operations.

```
CREATE DATABASE
SELECT DATABASE
RENAME DATABASE
DROP DATABASE
```

These belong to **DDL (Data Definition Language)**.

---

# 1 CREATE DATABASE

## Concept

Creates a new database container.

Used when starting a new system or project.

---

## Syntax

```sql
CREATE DATABASE database_name;
```

---

## Example

```sql
CREATE DATABASE company_db;
```

Meaning

```
Create a new database container called company_db
```

---

## Safer Version

If database already exists, an error occurs.

To avoid this:

```sql
CREATE DATABASE IF NOT EXISTS company_db;
```

Meaning

```
Create database only if it does not already exist
```

---

# Verifying Database Creation

After creating a database, you can list all databases.

## Syntax

```sql
SHOW DATABASES;
```

Example output

```
information_schema
mysql
performance_schema
company_db
```

This confirms that **company_db was created successfully**.

---

# 2 SELECT DATABASE (USE)

## Concept

Before creating tables or running queries, we must **select the database to work inside**.

Otherwise SQL doesn't know which database we are referring to.

---

## Syntax

```sql
USE database_name;
```

---

## Example

```sql
USE company_db;
```

Meaning

```
Set company_db as the active database
```

All operations now occur inside:

```
company_db
```

Example operations after selecting database

```
CREATE TABLE
INSERT DATA
SELECT DATA
```

---

# Example Flow

```
CREATE DATABASE company_db;
USE company_db;
```

Now any table created belongs to:

```
company_db
```

---

# 3 RENAME DATABASE

Sometimes database names must change.

Reasons:

```
project renamed
wrong naming convention
system restructuring
```

---

## SQL Server Syntax

```sql
ALTER DATABASE current_name
MODIFY NAME = new_name;
```

Example

```sql
ALTER DATABASE company_db
MODIFY NAME = company_system;
```

Result

```
company_db → company_system
```

---

# MySQL Special Case

MySQL removed direct rename command.

Instead the process is:

```
1 create new database
2 move tables
3 delete old database
```

Example

```
CREATE DATABASE new_db;
```

Move tables

```sql
RENAME TABLE old_db.table1 TO new_db.table1;
```

---

# PostgreSQL Syntax

```sql
ALTER DATABASE old_name
RENAME TO new_name;
```

Example

```sql
ALTER DATABASE company_db
RENAME TO company_system;
```

---

# 4 DROP DATABASE

## Concept

Deletes a database completely.

This removes:

```
tables
views
indexes
procedures
data
```

Everything is permanently lost.

---

## Syntax

```sql
DROP DATABASE database_name;
```

---

## Example

```sql
DROP DATABASE company_db;
```

Result

```
company_db removed completely
```

---

# Safer Version

```sql
DROP DATABASE IF EXISTS company_db;
```

Meaning

```
delete database only if it exists
```

---

# Full Example Workflow

### Step 1 Create Database

```sql
CREATE DATABASE company_db;
```

---

### Step 2 Verify

```sql
SHOW DATABASES;
```

Output

```
company_db
```

---

### Step 3 Select Database

```sql
USE company_db;
```

Now SQL operations will occur inside this database.

---

### Step 4 Create Table

```sql
CREATE TABLE employees (

id INT PRIMARY KEY,
name VARCHAR(50),
department VARCHAR(50)

);
```

---

### Step 5 Verify Tables

```sql
SHOW TABLES;
```

Output

```
employees
```

---

### Step 6 Drop Database

```sql
DROP DATABASE company_db;
```

Database removed permanently.

---

# Common Beginner Mistakes

### 1 Forgetting to select database

Wrong

```
CREATE TABLE employees(...)
```

Error may occur.

Correct

```sql
USE company_db;
CREATE TABLE employees(...);
```

---

### 2 Dropping database accidentally

Wrong

```sql
DROP DATABASE company_db;
```

Always backup first.

---

### 3 Using spaces in database names

Wrong

```
CREATE DATABASE company database;
```

Correct

```
company_database
```

---

# Database Naming Rules

Recommended format

```
lowercase
underscores
descriptive names
```

Examples

```
company_db
ecommerce_system
student_management
inventory_system
```

Avoid

```
MyDatabase
database1
db
```

---

# Real System Example

Large application structure

```
DB Server
   ↓
ecommerce_db
   ↓
users table
products table
orders table
payments table
```

Example query

```sql
SELECT *
FROM orders
WHERE user_id = 10;
```

---

# Quick Summary

Database operations

| Command         | Purpose         |
| --------------- | --------------- |
| CREATE DATABASE | create database |
| SHOW DATABASES  | list databases  |
| USE database    | select database |
| ALTER DATABASE  | rename database |
| DROP DATABASE   | delete database |

---

# Practice Problems

### Problem 1

Create database called `school_db`

```sql
CREATE DATABASE school_db;
```

---

### Problem 2

Select database

```sql
USE school_db;
```

---

### Problem 3

List all databases

```sql
SHOW DATABASES;
```

---

### Problem 4

Delete database

```sql
DROP DATABASE school_db;
```

---

Next logical topic in SQL learning roadmap:

```
SQL Tables
CREATE TABLE
ALTER TABLE
DROP TABLE
TRUNCATE TABLE
TEMP TABLE
```

This is where **real database design begins**.
