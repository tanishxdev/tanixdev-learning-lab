Perfect. We continue **31. PostgreSQL Fundamentals** properly.

We already completed:

```
01-what-is-postgresql.md
```

Now we move to:

```
02-installation-and-setup.md
```

This will be paste-ready for:

└── 📁31. PostgreSQL Fundamentals
  └── 📁Concepts
    ├── 02-installation-and-setup.md

No rushing. Only clarity.

---

# 02 – Installation and Setup

---

## Concept

Before installing anything, you must understand **what exactly you are installing**.

Most beginners think:

> "I installed PostgreSQL. Done."

Wrong.

You did not install “a database”.
You installed a **database server software**.

That difference is critical.

---

## Mental Model — What Actually Runs?

When you install PostgreSQL:

You are installing a **background service (server process)** that:

- Listens on a port (default: 5432)
- Accepts connections
- Manages databases
- Handles authentication
- Stores data on disk
- Manages transactions
- Writes logs
- Ensures ACID guarantees

Think of it like this:

```
Your Node App  --->  PostgreSQL Server  --->  Disk Storage
```

PostgreSQL is not a file.
It is a **running process**.

---

## What Is a Database Server?

A database server:

- Runs continuously
- Accepts client connections
- Manages multiple databases inside it

Example:

One PostgreSQL server can contain:

- blog_db
- auth_db
- analytics_db

Each database contains tables.

---

## PostgreSQL Architecture (High-Level)

When installed, PostgreSQL includes:

### 1. Server Process

Main engine handling queries.

### 2. Client Tools

Like:

- `psql` (CLI tool)
- pgAdmin (GUI)

### 3. Data Directory

Where actual data files are stored.

### 4. Configuration Files

Control:

- Port
- Memory
- Authentication
- Logging

---

## Default Configuration

After installation:

| Setting        | Default        |
| -------------- | -------------- |
| Port           | 5432           |
| Host           | localhost      |
| Superuser      | postgres       |
| Authentication | Password-based |

Your Node app will connect using:

```
postgres://username:password@localhost:5432/dbname
```

---

## Installation (Conceptual Overview)

You can install PostgreSQL using:

### Option 1 — Official Installer (Recommended for beginners)

- Windows installer
- Mac installer
- Linux package manager

### Option 2 — Docker (Recommended for serious backend work)

We will use both eventually.

---

## Installing PostgreSQL (Local Machine)

### Windows / Mac

1. Go to official website
2. Download installer
3. Choose version
4. Set password for `postgres` user
5. Keep port as 5432
6. Finish installation

After installation:

PostgreSQL server automatically runs as a background service.

---

## Verify Installation

Open terminal:

```bash
psql --version
```

If installed correctly:

You will see version output.

Now try connecting:

```bash
psql -U postgres
```

It will ask for password.

If login works → server is running.

---

## What Happens When You Connect?

When you run:

```bash
psql -U postgres
```

This happens internally:

1. Client sends connection request
2. Server checks username
3. Server verifies password
4. Server opens a session
5. You now send SQL commands

Each connection creates a **separate backend process**.

Important for scaling later.

---

## Docker Installation (Professional Way)

Instead of installing globally, you can run PostgreSQL in Docker:

```bash
docker run --name my-postgres \
  -e POSTGRES_PASSWORD=secret \
  -p 5432:5432 \
  -d postgres
```

What this does:

- Pulls official postgres image
- Creates container
- Sets password
- Exposes port 5432
- Runs in background

Now your database is isolated.

This is production-style setup.

We will dockerize properly later in Topic 35.

---

## Roles and Users (Important Concept)

PostgreSQL does not have “accounts”.

It has **roles**.

A role can:

- Own databases
- Create tables
- Read data
- Write data

Example:

- postgres (superuser)
- app_user (limited access)
- readonly_user

In production:

Never use superuser for app connections.

---

## Creating a New Database

Inside psql:

```sql
CREATE DATABASE blog_db;
```

To switch database:

```sql
\c blog_db
```

Now you are working inside blog_db.

---

## How Node Will Connect Later

Later in Topic 32, your Node app will connect like this:

```js
const connectionString =
  "postgresql://postgres:password@localhost:5432/blog_db";
```

PostgreSQL does not know about Node.

It only accepts connections.

Node is just a client.

---

## Common Beginner Mistakes

1. Forgetting password
2. Not starting service
3. Port already used
4. Firewall blocking 5432
5. Using wrong database name
6. Using superuser in production

We will handle these when integrating with Node.

---

## Builder Mentor Section — Mini Setup Project

Let’s define a small setup task (no feature creep).

### Project: Local PostgreSQL Environment

Goal:

- Install PostgreSQL
- Create a database called `learning_pg`
- Create a role called `app_user`
- Give app_user access only to that database

You should be able to:

- Connect via psql
- List databases
- Switch database
- Exit safely

That is enough for now.

Do not build API yet.
Foundation first.

---

## Clear Understanding Checklist

Before moving ahead, you must be clear on:

- PostgreSQL runs as a server
- It listens on port 5432
- It manages multiple databases
- It uses roles for authentication
- Node connects using connection string
- Docker is preferred long term

If any of these feel fuzzy, ask now.

---

## What Comes Next

Next file:

```
03-pgadmin-and-tools.md
```

We will cover:

- psql CLI deeply
- pgAdmin GUI
- Database inspection
- Viewing tables
- Running queries
- Understanding schema view

That is where you actually start touching data.

---

Reply with:

“Continue 03”

and we move forward.
