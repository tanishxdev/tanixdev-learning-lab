# Backend Architecture

# Topic 14 — Data Access Architecture (Deep Dive)

Data Access Architecture defines **how backend applications interact with databases in a structured, maintainable, and scalable way**.

It ensures:

```text
Application Logic
      ↓
Data Access Layer
      ↓
Database
```

This prevents **database logic from leaking into business logic**.

---

# 1. What is Data Access Architecture?

## Simple Definition

Data Access Architecture is the **design of how an application reads, writes, updates, and deletes data from a database.**

It separates:

```text
Business Logic
from
Database Logic
```

---

# 2. Mental Model

Think of a **library system**.

```text
Reader
 ↓
Librarian
 ↓
Library storage
```

Mapping to backend:

```text
Controller
 ↓
Service
 ↓
Repository / Data Access Layer
 ↓
Database
```

Application never talks directly to the database.

---

# 3. Why Data Access Architecture Exists

Bad example:

```javascript
app.get("/users", async (req, res) => {
  const users = await db.query("SELECT * FROM users");

  res.json(users);
});
```

Problems:

```text
Database queries scattered everywhere
Hard to change database
Hard to test
Hard to maintain
```

Correct approach:

```text
Controller → Service → Repository → Database
```

---

# 4. Data Access Layer in Architecture

Complete architecture:

```text
Client
 ↓
Controller
 ↓
Service
 ↓
Repository (Data Access Layer)
 ↓
Database
```

Repository isolates database logic.

---

# 5. Data Access Technologies

Backend systems interact with databases using:

```text
Raw queries
ORMs
Query builders
Database drivers
```

---

# 6. Database Drivers

Drivers allow applications to communicate with database.

Example drivers:

```text
mysql2
pg (PostgreSQL)
mongodb
```

Example with PostgreSQL driver:

```javascript
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DB_URL,
});

await client.connect();
```

---

# 7. ORM (Object Relational Mapper)

ORM maps database tables to objects.

Example:

```text
Database Table → JavaScript Object
```

Popular Node ORMs:

```text
Prisma
Sequelize
TypeORM
Mongoose (MongoDB)
```

---

# Example Prisma Model

```prisma
model User {
  id    Int    @id
  name  String
  email String
}
```

Query:

```javascript
const users = await prisma.user.findMany();
```

---

# 8. Query Builders

Query builders generate SQL dynamically.

Popular tool:

```text
Knex.js
```

Example:

```javascript
const users = await knex("users").select("*");
```

Benefits:

```text
More control than ORM
Less verbose than raw SQL
```

---

# 9. Repository Pattern in Data Access

Repository encapsulates data access.

Example structure:

```text
repositories
 ├ userRepository.js
 ├ productRepository.js
```

Example repository:

```javascript
exports.findAllUsers = async () => {
  return await db.query("SELECT * FROM users");
};
```

Service calls repository.

---

# 10. Example Data Access Flow

Example API:

```text
GET /users
```

Flow:

```text
Controller
 ↓
Service
 ↓
UserRepository.findAllUsers()
 ↓
Database query
 ↓
Results returned
```

---

# 11. Example Express Data Access Code

### Repository

```javascript
// repositories/userRepository.js

exports.findAllUsers = async () => {
  return [
    { id: 1, name: "Tanish" },
    { id: 2, name: "Rahul" },
  ];
};
```

---

### Service

```javascript
const userRepository = require("../repositories/userRepository");

exports.getUsers = async () => {
  return await userRepository.findAllUsers();
};
```

---

### Controller

```javascript
exports.getUsers = async (req, res) => {
  const users = await userService.getUsers();

  res.json(users);
};
```

---

# 12. Transactions

Transactions ensure **data consistency**.

Example:

```text
Bank transfer
```

Steps:

```text
Debit account A
Credit account B
```

Both operations must succeed.

If one fails → rollback.

Example with SQL:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100;
UPDATE accounts SET balance = balance + 100;
COMMIT;
```

---

# 13. Connection Pooling

Opening DB connections repeatedly is expensive.

Connection pool reuses connections.

Example:

```javascript
const pool = new Pool({
  connectionString: process.env.DB_URL,
});
```

Benefits:

```text
Better performance
Reduced overhead
Efficient resource usage
```

---

# 14. Data Access Optimization

Common optimization techniques:

```text
Indexes
Query optimization
Caching
Connection pooling
```

Example index:

```sql
CREATE INDEX idx_users_email ON users(email);
```

Improves query speed.

---

# 15. Real World Example

Example: **E-commerce backend**

Request:

```text
GET /products
```

Flow:

```text
Controller
 ↓
ProductService
 ↓
ProductRepository
 ↓
Database query
 ↓
Products returned
```

---

# 16. Data Access Folder Structure

Typical backend structure:

```text
src
│
├ controllers
├ services
├ repositories
├ models
├ database
└ app.js
```

Database queries exist inside **repositories**.

---

# 17. Data Access Best Practices

### 1 Use repository layer

---

### 2 Avoid raw queries in controllers

---

### 3 Use connection pooling

---

### 4 Use transactions for critical operations

---

### 5 Use indexes for performance

---

# 18. Common Data Access Mistakes

### Mistake 1

Database queries in controllers.

---

### Mistake 2

No connection pooling.

---

### Mistake 3

No transaction handling.

---

### Mistake 4

Ignoring query performance.

---

# 19. Interview Questions

### Basic

What is ORM?

---

### Intermediate

Difference between ORM and query builder?

---

### Advanced

How does repository pattern help data access?

What is database transaction?

---

# 20. Interview Answer Template

What is Data Access Layer?

Answer:

The Data Access Layer is the part of an application responsible for interacting with the database. It abstracts database operations from business logic, making the system more maintainable, scalable, and easier to test.

---

# Final Mental Model

Always visualize:

```text
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
```

Repository acts as **the gateway between application logic and database**.
