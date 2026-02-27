## I. DATABASE FUNDAMENTALS

### 1. Basic Concepts

#### 1. What is Data? Differentiate between data and information.

**Answer:**

**Data** refers to raw, unprocessed facts, figures, or symbols that by themselves may not have any meaning.

Example:
`101`, `Tanish`, `85`, `2026-02-22`

These are just raw values.

**Information** is processed, organized, or structured data that has meaning and is useful for decision-making.

Example:
"Student Tanish scored 85 marks in DBMS on 22 Feb 2026."

Here, raw data is combined and processed to produce meaningful information.

**Difference between Data and Information:**

| Data          | Information              |
| ------------- | ------------------------ |
| Raw facts     | Processed data           |
| Unorganized   | Organized                |
| No context    | Has context and meaning  |
| Used as input | Used for decision-making |

---

#### 2. What is a Database? Explain with real-world examples.

**Answer:**

A **Database** is an organized collection of related data that is stored electronically and can be accessed, managed, and updated efficiently.

It stores data in a structured format so that it can be retrieved easily.

**Real-world examples:**

1. **Banking System**
   Stores:
   - Customer details
   - Account numbers
   - Transactions
   - Loan records

2. **University System**
   Stores:
   - Student information
   - Course details
   - Faculty records
   - Marks and attendance

3. **E-commerce Website**
   Stores:
   - Product catalog
   - Customer data
   - Orders
   - Payments

So, a database is basically a structured storage system for related data.

---

#### 3. What is a Database Management System (DBMS)? What are its main objectives?

**Answer:**

A **Database Management System (DBMS)** is software that allows users to create, manage, retrieve, and manipulate databases.

It acts as an interface between users/applications and the database.

Examples: MySQL, Oracle, PostgreSQL, SQL Server.

**Main Objectives of DBMS:**

1. **Data Storage and Retrieval**
   Efficiently store and retrieve large amounts of data.

2. **Data Integrity**
   Ensure data is accurate and consistent.

3. **Data Security**
   Restrict unauthorized access.

4. **Data Independence**
   Allow changes in structure without affecting applications.

5. **Concurrency Control**
   Allow multiple users to access data simultaneously without conflict.

6. **Backup and Recovery**
   Protect data against failures.

---

#### 4. What are the advantages of DBMS over traditional file-based systems?

**Answer:**

1. **Reduced Data Redundancy**
   Centralized control avoids duplication.

2. **Improved Data Consistency**
   Updates reflect everywhere.

3. **Better Data Sharing**
   Multiple users can access same data.

4. **Data Security**
   Access control mechanisms available.

5. **Data Integrity Constraints**
   Enforces rules like primary key, foreign key.

6. **Backup and Recovery**
   Recovery mechanisms available.

7. **Concurrency Control**
   Handles simultaneous access.

In file systems, data duplication, inconsistency, and security issues are common.

---

#### 5. What are the disadvantages of DBMS?

**Answer:**

1. **High Cost**
   Licensing, hardware, and maintenance costs.

2. **Complexity**
   Requires skilled personnel (DBA).

3. **Large Size**
   Requires more memory and storage.

4. **Performance Overhead**
   Additional layer may reduce performance for small applications.

5. **Security Risk if Centralized Fails**
   If DBMS fails, whole system can be affected.

---

### 6. Differentiate between DBMS and RDBMS.

**Answer:**

**DBMS (Database Management System)** is software used to manage databases.

**RDBMS (Relational Database Management System)** is a type of DBMS that stores data in the form of tables (relations) and follows the relational model.

**Differences:**

| DBMS                                      | RDBMS                                     |
| ----------------------------------------- | ----------------------------------------- |
| Stores data as files or simple structures | Stores data in tables (rows & columns)    |
| May not support relationships             | Supports relationships using foreign keys |
| Limited constraints                       | Supports integrity constraints            |
| Less secure                               | More secure                               |
| Example: FoxPro                           | Example: MySQL, Oracle                    |

All RDBMS are DBMS, but not all DBMS are RDBMS.

---

### 7. What is a Database System? Explain its components.

**Answer:**

A **Database System** consists of database + DBMS + application programs + users.

It is the complete environment used to manage data.

**Components:**

1. **Database**
   Collection of related data.

2. **DBMS Software**
   Manages database operations.

3. **Hardware**
   Physical devices like servers, storage.

4. **Application Programs**
   Programs that interact with DBMS.

5. **Users**
   - End users
   - Application programmers
   - Database Administrator (DBA)

So, database system = data + software + hardware + users.

---

### 8. What are the different types of DBMS? (Hierarchical, Network, Relational, Object-oriented, NoSQL)

**Answer:**

1. **Hierarchical DBMS**
   - Data organized in tree structure.
   - One parent → many children.
   - Example: IBM IMS.

2. **Network DBMS**
   - Data organized as graph structure.
   - Many-to-many relationships allowed.

3. **Relational DBMS (RDBMS)**
   - Data stored in tables.
   - Uses keys to maintain relationships.
   - Most widely used model.

4. **Object-Oriented DBMS (OODBMS)**
   - Stores data as objects.
   - Supports inheritance, encapsulation.

5. **NoSQL DBMS**
   - Non-relational databases.
   - Used for large-scale and distributed data.
   - Types: Document, Key-value, Column, Graph.

---

### 9. What is a database schema? Differentiate between schema and instance.

**Answer:**

**Database Schema** is the logical structure or blueprint of the database.

It defines:

- Tables
- Attributes
- Relationships
- Constraints

Schema is defined using DDL commands and changes rarely.

**Database Instance** is the actual data stored in the database at a particular moment.

**Difference:**

| Schema           | Instance           |
| ---------------- | ------------------ |
| Structure/Design | Actual data        |
| Changes rarely   | Changes frequently |
| Defined once     | Updated regularly  |
| Blueprint        | Snapshot of data   |

---

### 10. Explain the terms: intension and extension of a database.

**Answer:**

**Intension**
Refers to the structure or schema of the database.
It defines the design (tables, attributes, constraints).

It is stable and changes rarely.

**Extension**
Refers to the actual data stored in the database at a particular time.

It changes frequently as data is inserted, deleted, or updated.

So:

- Intension = Schema (structure)
- Extension = Instance (data)

### 11. What is data abstraction in DBMS? Explain the three levels of data abstraction.

**Answer:**

**Data abstraction** means hiding unnecessary details from users and showing only required information.

It reduces complexity and improves security.

**Three Levels of Data Abstraction:**

1. **Physical Level (Lowest Level)**
   - Describes how data is actually stored in memory.
   - Includes file structure, indexing, storage details.
   - Hidden from end users.

2. **Logical Level (Middle Level)**
   - Describes what data is stored and relationships among them.
   - Includes tables, attributes, constraints.
   - Used by database designers.

3. **View Level (Highest Level)**
   - Shows only part of the database to users.
   - Different users can have different views.
   - Ensures security.

---

### 12. Explain the three-schema architecture of DBMS.

**Answer:**

Three-schema architecture separates database into three levels to achieve data independence.

1. **External Schema**
   - User view level.
   - Each user has a different view.

2. **Conceptual Schema**
   - Logical structure of the entire database.
   - Defines entities, relationships, constraints.

3. **Internal Schema**
   - Physical storage level.
   - Describes how data is stored internally.

This architecture helps in logical and physical data independence.

---

### 13. What is data independence? Explain logical and physical data independence.

**Answer:**

**Data independence** is the ability to modify one level of database without affecting other levels.

**Types:**

1. **Physical Data Independence**
   - Changes in internal schema do not affect conceptual schema.
   - Example: Changing indexing method does not affect tables.

2. **Logical Data Independence**
   - Changes in conceptual schema do not affect external schema.
   - Example: Adding new column does not affect user views (if not used).

Logical independence is harder to achieve than physical independence.

---

### 14. Explain Tier Architecture in DBMS. Differentiate between 2-tier and 3-tier architecture in DBMS.

![](https://images.contentstack.io/v3/assets/blt7151619cb9560896/bltade3e94e15b0a43c/68dc9409b2e79d00400e83c9/client-server-architecture.jpg)

**Answer:**

**Tier architecture** in DBMS defines how different components of a database system are distributed across layers.

It mainly describes how client, application, and database interact.

---

#### 1-Tier Architecture

- Entire database system is on a single machine.
- User directly interacts with the database.
- No network involved.

**Example:**
MS Access used locally.

**Use case:**
Personal applications, local testing.

---

#### 2-Tier Architecture

- Client ↔ Database Server
- Client sends SQL queries directly to DBMS.
- DBMS processes and returns result.

**Components:**

- Client (UI + some logic)
- Database Server

**Example:**
Desktop app connected to MySQL.

**Use case:**
Small-scale enterprise systems.

**Limitation:**
Less secure and less scalable.

---

#### 3-Tier Architecture

- Client ↔ Application Server ↔ Database Server

**Components:**

1. **Presentation Layer (Client)**
   - UI
   - Browser or frontend

2. **Application Layer (Middle Tier)**
   - Business logic
   - Validation
   - Security checks

3. **Database Layer**
   - Stores and manages data

**Example:**
Web application (React + Node + MySQL)

**Advantages:**

- Better security
- Better scalability
- Easier maintenance
- Load balancing possible

---

#### Key Difference Summary

| Tier   | Layers            | Scalability | Security | Usage          |
| ------ | ----------------- | ----------- | -------- | -------------- |
| 1-Tier | Single system     | Low         | Low      | Personal use   |
| 2-Tier | Client + DB       | Medium      | Medium   | Small apps     |
| 3-Tier | Client + App + DB | High        | High     | Large web apps |

---

### 15. What is a database instance? How does it differ from database schema?

**Answer:**

A **database instance** is the actual data stored in the database at a particular moment.

It changes whenever data is inserted, updated, or deleted.

A **database schema** is the structure or design of the database (tables, attributes, relationships).

**Difference:**

| Schema                  | Instance                     |
| ----------------------- | ---------------------------- |
| Blueprint               | Actual data                  |
| Static (rarely changes) | Dynamic (changes frequently) |
| Defined using DDL       | Modified using DML           |

### 16. What is a data dictionary? What information does it contain?

**Answer:**

A **Data Dictionary** is a centralized repository that stores metadata about the database.

Metadata means "data about data".

It describes the structure of the database rather than the actual data.

It is maintained automatically by the DBMS.

---

#### What Information Does It Contain?

A data dictionary typically contains:

1. **Table Information**
   - Table names
   - Creation date
   - Owner of table

2. **Column Information**
   - Column names
   - Data types
   - Size/length
   - Default values

3. **Constraints**
   - Primary keys
   - Foreign keys
   - Unique constraints
   - Not null constraints

4. **Indexes**
   - Index names
   - Indexed columns
   - Type of index

5. **Views**
   - View definitions
   - Associated tables

6. **Users & Roles**
   - User accounts
   - Privileges
   - Access permissions

7. **Stored Procedures & Triggers**
   - Procedure names
   - Trigger definitions

---

#### Why It Is Important?

- Helps DBAs manage database structure
- Ensures consistency
- Helps in documentation
- Used by query optimizer

In simple words:

Data Dictionary = Database metadata store

It does not store actual records, only structure-related information.

Based on the provided DBMS interview question sheet

## II. DATA MODELS

### 3. Entity-Relationship Model

#### 17. What is an Entity-Relationship (E-R) Model?

**Answer:**

The **Entity-Relationship (E-R) Model** is a high-level conceptual data model used to design databases.

It represents:

- Entities
- Attributes
- Relationships

It is mainly used during database design phase.

It uses ER diagrams for visual representation.

Purpose:

- Understand system requirements
- Design database structure before implementation

---

#### 18. Explain the following terms with examples:

##### Entity

An **Entity** is a real-world object that has independent existence.

Example:

- Student
- Employee
- Product

---

##### Entity Type

An **Entity Type** defines a category of similar entities.

Example:
Student (Entity Type)
Tanish, Rahul (Entities)

---

##### Entity Set

An **Entity Set** is a collection of similar entities.

Example:
All students in a university form a Student entity set.

---

##### Attributes

Attributes describe properties of an entity.

Types:

1. **Simple Attribute**
   Cannot be divided further.
   Example: Age

2. **Composite Attribute**
   Can be divided into sub-parts.
   Example: Address → (Street, City, State)

3. **Derived Attribute**
   Calculated from other attributes.
   Example: Age derived from Date of Birth

4. **Single-valued Attribute**
   Only one value per entity.
   Example: Roll Number

5. **Multi-valued Attribute**
   Multiple values possible.
   Example: Phone Numbers

---

##### Relationships

A **Relationship** represents association between entities.

Example:
Student "enrolls in" Course

Student —— enrolls —— Course

---

#### 19. What is a weak entity? Explain with example.

**Answer:**

A **Weak Entity** is an entity that cannot be uniquely identified by its own attributes.

It depends on a strong entity for identification.

It does not have a primary key.

Example:

Entity: Order
Weak Entity: Order Item

Order Item depends on Order ID + Item Number.

Weak entity is represented by:

- Double rectangle
- Identifying relationship (double diamond)

---

#### 20. What are participation constraints? (Total vs Partial participation)

**Answer:**

Participation constraint defines whether all entities must participate in a relationship.

1. **Total Participation**
   - Every entity must participate.
   - Represented by double line.
   - Example: Every employee must belong to a department.

2. **Partial Participation**
   - Some entities may not participate.
   - Represented by single line.
   - Example: Some employees may not manage any project.

---

#### 21. What are cardinality constraints? (1:1, 1:N, M:N)

**Answer:**

Cardinality defines number of entities involved in a relationship.

1. **1:1 (One-to-One)**
   - One entity related to only one entity.
   - Example: Person — Passport

2. **1:N (One-to-Many)**
   - One entity related to many entities.
   - Example: Department — Employees

3. **M:N (Many-to-Many)**
   - Many entities related to many entities.
   - Example: Students — Courses

Cardinality helps in deciding foreign keys in relational model.

Based on the provided DBMS interview question sheet

### 22. What are the different symbols used in ER diagrams?

<p align="center">
  <img src="https://binaryterms.com/wp-content/uploads/2021/10/Entity-Relationship-Diagram-Symbols.jpg" alt="symbols used in ER diagrams">
</p>

**Answer:**

ER diagrams use standard symbols to represent database components.

**Main Symbols:**

1. **Rectangle**
   - Represents Entity

2. **Double Rectangle**
   - Represents Weak Entity

3. **Diamond**
   - Represents Relationship

4. **Double Diamond**
   - Represents Identifying Relationship (for weak entity)

5. **Oval (Ellipse)**
   - Represents Attribute

6. **Underlined Attribute**
   - Represents Primary Key

7. **Double Oval**
   - Represents Multi-valued Attribute

8. **Dashed Oval**
   - Represents Derived Attribute

9. **Lines**
   - Connect entities and relationships
   - Double line → Total participation
   - Single line → Partial participation

---

### 23. What is generalization and specialization in ER model?

**Answer:**

These concepts are used to represent hierarchy between entities.

**Generalization**

- Bottom-up approach.
- Combine multiple entities into a higher-level entity.
- Example:
  Car and Bike → Vehicle

**Specialization**

- Top-down approach.
- Divide one entity into sub-entities.
- Example:
  Employee → Manager, Engineer

Both are used to reduce redundancy and improve design clarity.

---

### 24. What is aggregation in ER model?

**Answer:**

Aggregation is used when a relationship needs to participate in another relationship.

It treats a relationship as an entity.

Example:
Employee works_on Project
Now suppose Manager monitors this works_on relationship.

So, the relationship (Employee–Project) becomes an aggregated entity.

Aggregation helps in modeling complex relationships.

---

### 25. What is an Extended ER Model (EER)?

**Answer:**

Extended ER Model (EER) is an advanced version of ER model.

It includes additional concepts like:

- Specialization
- Generalization
- Aggregation
- Inheritance
- Categories

EER provides more expressive power for complex database designs.

---

### 26. What is a Relational Model? Explain its basic structure.

**Answer:**

The **Relational Model** represents data in the form of tables (called relations).

Each table consists of:

- Rows (Tuples)
- Columns (Attributes)

Basic Structure:

1. **Relation (Table)**
2. **Tuple (Row)**
3. **Attribute (Column)**
4. **Domain (Data type of attribute)**

Example:

Student Table:

| RollNo | Name   | Marks |
| ------ | ------ | ----- |
| 101    | Tanish | 85    |

Relational model is based on mathematical relation concept.

It is the foundation of RDBMS.
