## 1. Mental Model First (Most Important)

Think like this:

```
Database = Storage System
SQL / MongoDB = Tools to manage data
Schema = Structure of data
```

Example mental model:

```
Your Phone

Photos App → stores photos
Notes App → stores notes
Contacts App → stores contacts
```

Each app is **a different way of storing data**.

Similarly:

```
MySQL / PostgreSQL → Relational Databases
MongoDB → Non-Relational Database
```

They are **tools used to store and retrieve data**.

---

# 2. What is a Relational Database?

Relational means:

```
Data stored in TABLES
Tables are connected using RELATIONS
```

Example: **E-commerce**

### Users Table

| id  | name   | email                             |
| --- | ------ | --------------------------------- |
| 1   | Tanish | [t@gmail.com](mailto:t@gmail.com) |

### Orders Table

| id  | user_id | product |
| --- | ------- | ------- |
| 10  | 1       | Laptop  |

Important:

```
user_id → refers to Users.id
```

So we can connect them.

```
Users
   |
   | (user_id)
   |
Orders
```

This **connection between tables** is called a **RELATION**.

That is why:

```
SQL databases = RELATIONAL DATABASES
```

Examples:

- MySQL
- PostgreSQL
- Oracle
- SQL Server

---

# 3. Why It Is Called SQL Database

Because we use a language called:

```
SQL = Structured Query Language
```

Example query:

```sql
SELECT * FROM users WHERE id = 1;
```

SQL is the **language to talk with relational databases**.

So:

```
SQL → language
MySQL / PostgreSQL → databases
```

---

# 4. What is a Non-Relational Database?

Non-relational means:

```
Data NOT stored in tables
No strict relations between tables
```

Example: **MongoDB**

MongoDB stores **documents (JSON-like)**.

Example document:

```json
{
  "name": "Tanish",
  "email": "t@gmail.com",
  "orders": [
    { "product": "Laptop", "price": 80000 },
    { "product": "Mouse", "price": 1000 }
  ]
}
```

Everything stored **inside one document**.

No separate tables required.

That is why it is called:

```
Non-Relational Database
```

Also called:

```
NoSQL Database
```

Meaning:

```
Not Only SQL
```

---

# 5. SQL vs MongoDB (Clear Picture)

| Feature        | SQL Database             | MongoDB                |
| -------------- | ------------------------ | ---------------------- |
| Structure      | Tables                   | Documents              |
| Data Format    | Rows & Columns           | JSON / BSON            |
| Schema         | Fixed schema             | Flexible schema        |
| Relations      | Strong relations (joins) | Usually embedded       |
| Query Language | SQL                      | MongoDB Query Language |

---

# 6. Example Same Data in Both

## SQL (Relational)

Users Table

| id  | name   |
| --- | ------ |
| 1   | Tanish |

Orders Table

| id  | user_id | product |
| --- | ------- | ------- |
| 10  | 1       | Laptop  |

Relation:

```
users.id = orders.user_id
```

---

## MongoDB (Non-Relational)

Single document:

```json
{
  "name": "Tanish",
  "orders": [{ "product": "Laptop" }]
}
```

Orders stored **inside the user document**.

No joins required.

---

# 7. MySQL vs SQL vs MongoDB (Most Confusing Part)

### SQL

```
SQL = Query Language
```

Used to talk to relational databases.

Example:

```
SELECT * FROM users;
```

---

### MySQL

```
MySQL = Relational Database System
```

Uses SQL language.

```
App → SQL queries → MySQL → Data
```

---

### MongoDB

```
MongoDB = Non-Relational Database
```

Stores **documents instead of tables**.

```
App → MongoDB queries → MongoDB → Data
```

---

# 8. One Line Understanding

```
SQL → language
MySQL → relational database
MongoDB → non-relational database
```

---

# 9. Super Simple Mental Model (Interview Gold)

Think like this:

Relational DB

```
Excel Sheets

Users Sheet
Orders Sheet
Relations between sheets
```

Non-Relational DB

```
JSON Files

Each file stores full object data
Flexible structure
```

---

# 10. Interview Ready Answer

**Question:** Why is SQL relational and MongoDB non-relational?

**Answer:**

SQL databases like MySQL and PostgreSQL are called relational databases because they store data in structured tables with rows and columns, and these tables can be connected using relationships such as primary keys and foreign keys. This allows complex queries using joins.

MongoDB is a non-relational database because it stores data in flexible JSON-like documents instead of tables. Documents can contain nested data, so relationships are often embedded inside the same document rather than maintained across multiple tables.

Therefore, relational databases focus on structured relationships between tables, while MongoDB focuses on flexible document-based storage.

---
