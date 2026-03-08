# SQL Data Types

## Concept

In SQL, **every column must have a data type**.

A **data type defines what kind of data a column can store**.

Examples of stored data:

| Column        | Data        |
| ------------- | ----------- |
| age           | numbers     |
| name          | text        |
| salary        | decimal     |
| created_at    | date & time |
| profile_image | binary file |

Choosing correct data type affects:

- **data accuracy**
- **storage efficiency**
- **query performance**
- **index performance**

Example table:

```sql
CREATE TABLE users (

    id INT,
    name VARCHAR(50),
    age INT,
    created_at DATE

);
```

Explanation:

```
id → integer
name → text
age → integer
created_at → date
```

---

# Categories of SQL Data Types

Main groups:

| Category         | Purpose      |
| ---------------- | ------------ |
| Numeric          | numbers      |
| Character/String | text         |
| Date & Time      | time values  |
| Binary           | files/images |
| Boolean          | true/false   |
| Special          | XML, spatial |

---

# 1 Numeric Data Types

Used for **storing numbers**.

Two types exist:

```
Exact numeric
Approximate numeric
```

---

# Exact Numeric Data Types

Used when **precision matters**.

Example:

- financial calculations
- money
- quantities
- counts

### Numeric Types

| Type     | Description             | Range          |
| -------- | ----------------------- | -------------- |
| BIGINT   | very large integers     | ±9 quintillion |
| INT      | standard integers       | ±2 billion     |
| SMALLINT | smaller integers        | ±32768         |
| TINYINT  | very small integers     | 0–255          |
| DECIMAL  | precise decimal numbers | very large     |
| NUMERIC  | same as decimal         | precise        |

---

## Example Table

```sql
CREATE TABLE Product_Sales (

    ProductID INT PRIMARY KEY,
    Quantity SMALLINT,
    UnitPrice DECIMAL(10,2),
    TotalAmount DECIMAL(10,2)

);
```

### Explanation

```
ProductID → integer identifier
Quantity → small numbers
UnitPrice → decimal number with precision
TotalAmount → decimal number
```

### Meaning of DECIMAL(10,2)

```
10 → total digits
2 → digits after decimal
```

Example values allowed:

```
12345678.12
99999999.99
```

---

# Approximate Numeric Data Types

Used when **exact precision is not required**.

Common in:

- scientific measurements
- sensor data
- large calculations

| Type  | Description                       |
| ----- | --------------------------------- |
| FLOAT | high precision approximate number |
| REAL  | lower precision float             |

---

## Example

```sql
CREATE TABLE Measurements (

    SensorID INT,
    Temperature FLOAT,
    Humidity REAL

);
```

Example values:

```
Temperature = 27.3489234
Humidity = 78.34
```

---

# Numeric Type Decision Guide

| Use Case          | Best Type |
| ----------------- | --------- |
| IDs               | INT       |
| counters          | INT       |
| money             | DECIMAL   |
| scientific values | FLOAT     |
| small counts      | SMALLINT  |

---

# 2 Character and String Data Types

Used to store **text values**.

Two types:

```
Fixed length
Variable length
```

---

# CHAR (Fixed Length)

Stores **fixed length strings**.

Example:

```
CHAR(10)
```

Always stores **10 characters**.

Example values:

```
'Bob       '
'Rahul     '
```

Spaces added automatically.

---

# VARCHAR (Variable Length)

Stores **only actual characters**.

Example:

```
VARCHAR(50)
```

If value is `"Rahul"` → storage = 5 characters.

---

# Example Table

```sql
CREATE TABLE Employee_Info (

    EmpID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName CHAR(30),
    Bio TEXT

);
```

Explanation:

```
FirstName → variable size
LastName → fixed size
Bio → long text
```

---

# TEXT Type

Used for **very large text data**.

Examples:

```
articles
blogs
descriptions
comments
```

---

# CHAR vs VARCHAR

| Feature     | CHAR            | VARCHAR   |
| ----------- | --------------- | --------- |
| Length      | fixed           | variable  |
| Performance | slightly faster | flexible  |
| Storage     | wastes space    | efficient |

Use CHAR when:

```
data size always fixed
```

Examples:

```
country code
gender
status
```

Use VARCHAR when:

```
names
emails
addresses
```

---

# Unicode Character Data Types

Unicode allows storing **multiple languages**.

Examples:

```
Chinese
Hindi
Arabic
Japanese
```

Types:

| Type     | Description           |
| -------- | --------------------- |
| NCHAR    | fixed unicode text    |
| NVARCHAR | variable unicode text |

---

## Example

```sql
CREATE TABLE International_Users (

    UserID INT PRIMARY KEY,
    FullName NVARCHAR(100),
    Country NCHAR(50)

);
```

Example values:

```
FullName = '张伟'
FullName = 'अर्जुन'
FullName = 'محمد'
```

---

# 3 Date and Time Data Types

Used to store **date and time values**.

| Type     | Stores             | Storage |
| -------- | ------------------ | ------- |
| DATE     | year month day     | 3 bytes |
| TIME     | hour minute second | 3 bytes |
| DATETIME | date + time        | 8 bytes |

---

## Example Table

```sql
CREATE TABLE Orders (

    OrderID INT PRIMARY KEY,
    OrderDate DATE,
    OrderTime TIME,
    ShippedAt DATETIME

);
```

Example values:

```
OrderDate = '2026-01-10'
OrderTime = '14:25:00'
ShippedAt = '2026-01-10 16:00:00'
```

---

# Date Format

Standard SQL format:

```
YYYY-MM-DD
```

Example:

```
2026-03-07
```

---

# 4 Binary Data Types

Used to store **binary files**.

Examples:

```
images
videos
documents
files
```

Types:

| Type      | Description       |
| --------- | ----------------- |
| BINARY    | fixed binary data |
| VARBINARY | variable binary   |
| IMAGE     | very large images |

---

## Example

```sql
CREATE TABLE Product_Images (

    ImageID INT PRIMARY KEY,
    ImageName VARCHAR(100),
    ImageData VARBINARY(MAX)

);
```

Example:

```
ImageName = 'phone.jpg'
ImageData = binary file content
```

---

# 5 Boolean Data Type

Used for **true / false values**.

Example:

```
IsActive
IsVerified
IsDeleted
```

Values stored as:

```
1 → TRUE
0 → FALSE
```

---

## Example Table

```sql
CREATE TABLE User_Status (

    UserID INT PRIMARY KEY,
    IsActive INTEGER,
    IsVerified INTEGER

);
```

Example data:

| UserID | IsActive | IsVerified |
| ------ | -------- | ---------- |
| 1      | 1        | 1          |
| 2      | 1        | 0          |
| 3      | 0        | 0          |

---

# 6 Special SQL Data Types

Used for **advanced database applications**.

---

# XML Data Type

Used for storing **XML structured data**.

Example:

```sql
CREATE TABLE XML_Records (

    RecordID INT PRIMARY KEY,
    ConfigData XML

);
```

Example value:

```
<user>
   <name>Tanish</name>
   <age>21</age>
</user>
```

---

# Spatial Data Type (Geometry)

Used for **geographical data**.

Examples:

```
maps
GPS locations
polygons
routes
```

Example table:

```sql
CREATE TABLE Locations (

    LocationID INT PRIMARY KEY,
    Area GEOMETRY

);
```

Example stored data:

```
POINT(28.4595 77.0266)
```

---

# Real World Schema Example

Example table for ecommerce system.

```sql
CREATE TABLE Users (

    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(150),
    age INT,
    is_active BOOLEAN,
    created_at DATETIME

);
```

Example data:

| id  | name   | email                           | age | is_active | created_at |
| --- | ------ | ------------------------------- | --- | --------- | ---------- |
| 1   | Tanish | [t@mail.com](mailto:t@mail.com) | 21  | 1         | 2026-03-01 |

---

# Interview Questions

### 1 Which datatype stores precise financial values?

Answer

```
DECIMAL
NUMERIC
```

---

### 2 Difference between CHAR and VARCHAR?

| CHAR            | VARCHAR         |
| --------------- | --------------- |
| fixed length    | variable length |
| wastes space    | efficient       |
| slightly faster | flexible        |

---

### 3 Best datatype for storing money?

```
DECIMAL(10,2)
```

---

### 4 Best datatype for IDs?

```
INT
```

---

### 5 Which datatype stores date only?

```
DATE
```

---

# Practice Problems

## Problem 1

Create a table storing students.

Fields:

```
student_id
name
age
enrollment_date
```

### Solution

```sql
CREATE TABLE Students (

    student_id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    enrollment_date DATE

);
```

---

## Problem 2

Create a product table storing price with decimals.

### Solution

```sql
CREATE TABLE Products (

    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2)

);
```

---

## Problem 3

Create a table storing user status.

### Solution

```sql
CREATE TABLE User_Status (

    user_id INT PRIMARY KEY,
    is_active BOOLEAN,
    is_verified BOOLEAN

);
```
