## SQL Fundamentals

### 1. What is SQL and what are its main features?

#### Concepts

SQL (Structured Query Language) is a standard language used to **store, retrieve, manipulate, and manage data in relational databases**.

Relational databases organize data into **tables** consisting of rows and columns. SQL allows developers to interact with these tables using structured commands.

Core capabilities of SQL include:

1. **Data Querying**
   Retrieving data using queries.

2. **Data Manipulation**
   Inserting, updating, and deleting records.

3. **Data Definition**
   Creating and modifying tables and database structures.

4. **Access Control**
   Managing permissions and roles.

5. **Data Integrity**
   Enforcing constraints such as primary keys and foreign keys.

Main categories of SQL commands:

| Category                           | Purpose                   | Examples               |
| ---------------------------------- | ------------------------- | ---------------------- |
| DDL (Data Definition Language)     | Define database structure | CREATE, ALTER, DROP    |
| DML (Data Manipulation Language)   | Modify data               | INSERT, UPDATE, DELETE |
| DQL (Data Query Language)          | Retrieve data             | SELECT                 |
| DCL (Data Control Language)        | Manage permissions        | GRANT, REVOKE          |
| TCL (Transaction Control Language) | Manage transactions       | COMMIT, ROLLBACK       |

---

#### Code example

```sql
-- Create a table to store users
CREATE TABLE users (
    id INT PRIMARY KEY,       -- Unique identifier
    name VARCHAR(100),        -- User name
    email VARCHAR(100)        -- Email address
);

-- Insert a new record
INSERT INTO users (id, name, email)
VALUES (1, 'Tanish', 'tanish@example.com');

-- Retrieve data from the table
SELECT * FROM users;

-- Update user email
UPDATE users
SET email = 'tanish.kumar@example.com'
WHERE id = 1;

-- Delete a user
DELETE FROM users
WHERE id = 1;
```

---

#### Interview ready answer

SQL (Structured Query Language) is a standard programming language used to interact with relational databases. It allows developers to create database structures, store and manipulate data, retrieve information through queries, and manage access control.

SQL works with tables composed of rows and columns and supports operations such as creating tables, inserting records, updating data, deleting records, and querying datasets.

Its main features include data querying using SELECT, data manipulation using INSERT/UPDATE/DELETE, schema management using CREATE and ALTER, transaction management with COMMIT and ROLLBACK, and enforcing data integrity using constraints like primary keys and foreign keys.

Because of these capabilities, SQL is widely used in applications for data storage, analytics, reporting, and backend systems.

### 2. How does SQL differ from NoSQL databases?

#### Concepts

SQL and NoSQL are two different approaches to database design and data storage.

**SQL Databases (Relational Databases)** store data in **structured tables with fixed schemas**. Data is organized in rows and columns, and relationships between tables are defined using keys.

**NoSQL Databases (Non-Relational Databases)** store data in more flexible formats such as documents, key-value pairs, graphs, or wide-column structures.

Key differences:

| Aspect         | SQL Databases               | NoSQL Databases                             |
| -------------- | --------------------------- | ------------------------------------------- |
| Data Model     | Relational (tables)         | Non-relational (document, key-value, graph) |
| Schema         | Fixed schema                | Flexible or schema-less                     |
| Query Language | Standard SQL                | Database-specific APIs                      |
| Scaling        | Vertical scaling (scale-up) | Horizontal scaling (scale-out)              |
| Transactions   | Strong ACID compliance      | Often eventual consistency                  |
| Relationships  | Strong relational joins     | Usually denormalized                        |

Examples:

**SQL Databases**

- MySQL
- PostgreSQL
- SQL Server
- Oracle

**NoSQL Databases**

- MongoDB (Document)
- Redis (Key-Value)
- Cassandra (Wide Column)
- Neo4j (Graph)

This distinction is important when choosing a database for different system requirements.

---

#### Code example

SQL example (relational structure):

```sql
-- Create relational tables

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    product VARCHAR(100),

    -- Define relationship between tables
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Query using JOIN to fetch relational data

SELECT users.name, orders.product
FROM users
JOIN orders
ON users.id = orders.user_id;
```

NoSQL example (MongoDB style document):

```javascript
// Single document storing related data

{
  "user_id": 1,
  "name": "Tanish",
  "orders": [
    { "product": "Laptop" },
    { "product": "Mouse" }
  ]
}
```

---

#### Interview ready answer

SQL databases are relational databases that store data in structured tables with predefined schemas. They use SQL as a standardized query language and support strong ACID transactions, making them suitable for applications requiring high data consistency.

NoSQL databases, on the other hand, are non-relational databases designed for flexible schemas and horizontal scalability. They store data in formats such as documents, key-value pairs, or graphs and are often used for large-scale distributed systems.

In practice, SQL databases are commonly used for systems like financial applications and transactional systems, while NoSQL databases are preferred for high-scale applications such as social platforms, real-time analytics, and large distributed systems.

### 3. What are the different types of SQL commands?

#### Concepts

SQL commands are categorized based on **what operation they perform in the database**. These categories help organize how we interact with data and database structure.

There are **five main types of SQL commands**.

---

**1. DDL — Data Definition Language**

Used to **define or modify the database structure**.

These commands affect tables, schemas, and indexes.

Common DDL commands:

| Command  | Purpose                      |
| -------- | ---------------------------- |
| CREATE   | Create new table or database |
| ALTER    | Modify table structure       |
| DROP     | Delete table or database     |
| TRUNCATE | Remove all rows from table   |
| RENAME   | Rename database objects      |

Example idea: creating tables or modifying schema.

---

**2. DML — Data Manipulation Language**

Used to **modify the data inside tables**.

Common DML commands:

| Command | Purpose              |
| ------- | -------------------- |
| INSERT  | Add new rows         |
| UPDATE  | Modify existing rows |
| DELETE  | Remove rows          |

These commands change the actual stored data.

---

**3. DQL — Data Query Language**

Used to **retrieve data from the database**.

Main command:

| Command | Purpose                   |
| ------- | ------------------------- |
| SELECT  | Retrieve data from tables |

Most database operations involve SELECT queries.

---

**4. DCL — Data Control Language**

Used to **control access and permissions**.

Common commands:

| Command | Purpose                  |
| ------- | ------------------------ |
| GRANT   | Give access privileges   |
| REVOKE  | Remove access privileges |

Used for security and role management.

---

**5. TCL — Transaction Control Language**

Used to **manage transactions**.

Transactions ensure that a set of database operations either **complete fully or fail safely**.

Common commands:

| Command   | Purpose                          |
| --------- | -------------------------------- |
| COMMIT    | Save changes permanently         |
| ROLLBACK  | Undo changes                     |
| SAVEPOINT | Create checkpoint in transaction |

---

#### Code example

```sql
-- DDL: create table
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

-- DML: insert data
INSERT INTO users (id, name, email)
VALUES (1, 'Tanish', 'tanish@email.com');

-- DQL: retrieve data
SELECT * FROM users;

-- DML: update record
UPDATE users
SET email = 'tanish.kumar@email.com'
WHERE id = 1;

-- TCL: save transaction
COMMIT;

-- DCL: give permission
GRANT SELECT ON users TO analyst_user;
```

---

#### Interview ready answer

SQL commands are categorized based on the type of operation they perform in a database.

There are five main categories. Data Definition Language (DDL) commands such as CREATE, ALTER, and DROP are used to define and modify database structure. Data Manipulation Language (DML) commands like INSERT, UPDATE, and DELETE modify data inside tables. Data Query Language (DQL) mainly includes the SELECT statement used to retrieve data.

Data Control Language (DCL) commands such as GRANT and REVOKE manage user permissions, while Transaction Control Language (TCL) commands like COMMIT and ROLLBACK manage transactions to ensure data consistency.

### 4. What is a query in SQL?

#### Concepts

A **query** in SQL is a request sent to the database to **retrieve or manipulate data**.

It is essentially a **command written in SQL language that asks the database to perform some operation**.

Most commonly, queries are used to:

1. **Retrieve data**
2. **Filter data**
3. **Sort data**
4. **Aggregate data**
5. **Modify data**

The most common query type is the **SELECT query**, which fetches data from tables.

Basic structure of a SELECT query:

```
SELECT column_name
FROM table_name
WHERE condition;
```

Key components of a query:

| Component | Purpose                       |
| --------- | ----------------------------- |
| SELECT    | Specifies columns to retrieve |
| FROM      | Specifies the table           |
| WHERE     | Filters rows                  |
| ORDER BY  | Sorts results                 |
| GROUP BY  | Groups data for aggregation   |

Queries allow developers to extract **specific data instead of scanning entire tables manually**.

---

#### Code example

```sql id="vt3v32"
-- Table: employees

SELECT *
FROM employees;
```

This query retrieves **all records from the employees table**.

---

Filtering data:

```sql
SELECT name, salary
FROM employees
WHERE salary > 50000;
```

This query returns only employees whose **salary is greater than 50000**.

---

Sorting results:

```sql
SELECT name, salary
FROM employees
ORDER BY salary DESC;
```

This query returns employees sorted by **highest salary first**.

---

#### Interview ready answer

A query in SQL is a command used to request specific data or perform operations on a database. It allows users to retrieve, insert, update, or delete data stored in tables.

The most common type of query is the SELECT query, which retrieves data from one or more tables. A typical query specifies the columns to return using SELECT, the table using FROM, and optional conditions using clauses like WHERE, ORDER BY, or GROUP BY.

Queries are fundamental to database interaction because they allow applications to efficiently access and manipulate stored data.

### 5. What is a table in SQL and how is it structured?

#### Concepts

A **table** in SQL is the fundamental structure used to **store data in a relational database**.

It organizes data into **rows and columns**.

Think of a table like a **spreadsheet**.

Example:

| id  | name   | email                                       |
| --- | ------ | ------------------------------------------- |
| 1   | Tanish | [tanish@email.com](mailto:tanish@email.com) |
| 2   | Rahul  | [rahul@email.com](mailto:rahul@email.com)   |

Structure of a table:

**1. Columns**

Columns represent **attributes (fields)** of the data.

Example:

```
id
name
email
```

Each column has a **data type**.

Example:

| Column | Data Type |
| ------ | --------- |
| id     | INT       |
| name   | VARCHAR   |
| email  | VARCHAR   |

---

**2. Rows**

Rows represent **individual records**.

Example row:

```
1 | Tanish | tanish@email.com
```

Each row represents one entity (like a user, order, or product).

---

**3. Primary Key**

A **primary key uniquely identifies each row** in a table.

Example:

```
id INT PRIMARY KEY
```

Rules:

- Must be unique
- Cannot be NULL
- Only one primary key per table

---

**4. Constraints**

Constraints enforce **data integrity rules**.

Examples:

| Constraint  | Purpose                             |
| ----------- | ----------------------------------- |
| PRIMARY KEY | Unique identifier                   |
| FOREIGN KEY | Creates relationship between tables |
| NOT NULL    | Prevent empty values                |
| UNIQUE      | Ensures unique values               |

---

#### Code example

```sql
-- Creating a table

CREATE TABLE users (
    id INT PRIMARY KEY,          -- unique identifier
    name VARCHAR(100) NOT NULL,  -- user name cannot be empty
    email VARCHAR(100) UNIQUE,   -- email must be unique
    age INT                      -- optional column
);
```

Insert data:

```sql
INSERT INTO users (id, name, email, age)
VALUES (1, 'Tanish', 'tanish@email.com', 21);
```

Query table:

```sql
SELECT * FROM users;
```

Result:

| id  | name   | email                                       | age |
| --- | ------ | ------------------------------------------- | --- |
| 1   | Tanish | [tanish@email.com](mailto:tanish@email.com) | 21  |

---

#### Interview ready answer

A table in SQL is a structured format used to store data in a relational database. It consists of rows and columns where each row represents a record and each column represents an attribute of that record.

Each column has a defined data type such as INT, VARCHAR, or DATE, and tables can include constraints like primary keys, foreign keys, and unique constraints to maintain data integrity.

Tables are the core building blocks of relational databases and are used to store and organize application data efficiently.
