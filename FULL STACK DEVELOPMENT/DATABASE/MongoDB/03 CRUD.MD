Good. We will continue **exactly in the same style as your SQL notes**:
Problem → Mental Model → Concepts → Commands → Examples → Real system thinking.

Topic:

```
MongoDB CRUD + Database / Collection Management
```

---

# MongoDB CRUD Operations

---

# Problem

Applications constantly need to **manage data**.

Example system:

```
E-commerce application
```

Data operations required:

```
Add new user
Show user data
Update user information
Delete user account
```

Example user record:

```
{
 name: "Tanish",
 email: "tanish@email.com",
 age: 21
}
```

Without structured operations:

Problems occur:

```
data cannot be retrieved easily
data cannot be updated safely
data becomes inconsistent
large systems become impossible to maintain
```

Therefore databases provide **standard operations to manage data**.

These are called **CRUD operations**.

---

# CRUD Meaning

CRUD represents the **four fundamental data operations**.

| Operation | Meaning              |
| --------- | -------------------- |
| Create    | Insert new data      |
| Read      | Retrieve data        |
| Update    | Modify existing data |
| Delete    | Remove data          |

---

# MongoDB CRUD Mental Model

MongoDB stores data in:

```
Database
   ↓
Collection
   ↓
Documents
```

CRUD operations mainly affect **documents inside collections**.

Example structure:

```
company_db
   ↓
employees
   ↓
{
 name: "Tanish",
 department: "Engineering",
 salary: 80000
}
```

CRUD operations manipulate these documents.

---

# MongoDB CRUD Commands

| Operation | MongoDB Command        |
| --------- | ---------------------- |
| Create    | insertOne / insertMany |
| Read      | find / findOne         |
| Update    | updateOne / updateMany |
| Delete    | deleteOne / deleteMany |

---

# Example Collection

Collection:

```
employees
```

Documents:

```
{
 _id:1,
 name:"Tanish",
 department:"Engineering",
 salary:80000
}

{
 _id:2,
 name:"Rahul",
 department:"Sales",
 salary:60000
}
```

---

# CREATE Operation

Create means **inserting new documents** into a collection.

---

# insertOne

Insert a single document.

Syntax

```
db.collection.insertOne(document)
```

Example

```
db.employees.insertOne({
 name:"Neha",
 department:"HR",
 salary:55000
})
```

Result:

```
{
 acknowledged: true,
 insertedId: ObjectId(...)
}
```

---

# insertMany

Insert multiple documents.

Syntax

```
db.collection.insertMany([doc1, doc2, doc3])
```

Example

```
db.employees.insertMany([
 {name:"Aman", department:"Engineering", salary:90000},
 {name:"Riya", department:"Marketing", salary:65000}
])
```

Result:

```
3 documents added to employees collection
```

---

# READ Operation

Read operations retrieve documents.

---

# find()

Retrieve multiple documents.

Syntax

```
db.collection.find()
```

Example

```
db.employees.find()
```

Result:

```
all documents in employees collection
```

---

# findOne()

Retrieve a single document.

Syntax

```
db.collection.findOne(query)
```

Example

```
db.employees.findOne({name:"Tanish"})
```

Result:

```
{
 _id:1,
 name:"Tanish",
 department:"Engineering",
 salary:80000
}
```

---

# Filtering Data

Example query:

```
db.employees.find({department:"Engineering"})
```

Meaning:

```
return employees in Engineering department
```

---

# UPDATE Operation

Update operations modify existing documents.

---

# updateOne

Updates one matching document.

Syntax

```
db.collection.updateOne(filter, update)
```

Example

```
db.employees.updateOne(
 {name:"Tanish"},
 {$set:{salary:85000}}
)
```

Meaning:

```
find employee named Tanish
update salary to 85000
```

---

# updateMany

Update multiple documents.

Syntax

```
db.collection.updateMany(filter, update)
```

Example

```
db.employees.updateMany(
 {department:"Engineering"},
 {$set:{department:"Tech"}}
)
```

Meaning:

```
change department Engineering → Tech
for all employees
```

---

# Important Update Operators

| Operator | Purpose              |
| -------- | -------------------- |
| $set     | modify field         |
| $inc     | increment number     |
| $push    | add element to array |
| $unset   | remove field         |

Example:

```
db.users.updateOne(
 {name:"Tanish"},
 {$inc:{age:1}}
)
```

Meaning:

```
increase age by 1
```

---

# DELETE Operation

Delete removes documents.

---

# deleteOne

Deletes one document.

Syntax

```
db.collection.deleteOne(filter)
```

Example

```
db.employees.deleteOne({name:"Rahul"})
```

Result:

```
1 document removed
```

---

# deleteMany

Deletes multiple documents.

Syntax

```
db.collection.deleteMany(filter)
```

Example

```
db.employees.deleteMany({department:"Sales"})
```

Meaning:

```
remove all sales employees
```

---

# Full CRUD Example Workflow

Step 1 — Insert document

```
db.users.insertOne({
 name:"Tanish",
 age:21,
 city:"Delhi"
})
```

---

Step 2 — Retrieve document

```
db.users.find({name:"Tanish"})
```

---

Step 3 — Update document

```
db.users.updateOne(
 {name:"Tanish"},
 {$set:{city:"Noida"}}
)
```

---

Step 4 — Delete document

```
db.users.deleteOne({name:"Tanish"})
```

---

# Create Database and Collection

MongoDB automatically creates them when inserting data.

Example:

```
use company_db
```

Then insert:

```
db.employees.insertOne({
 name:"Tanish",
 department:"Engineering"
})
```

MongoDB automatically creates:

```
company_db database
employees collection
```

---

# Drop Database

Delete entire database.

Syntax:

```
db.dropDatabase()
```

Example:

```
use company_db
db.dropDatabase()
```

Result:

```
company_db removed completely
```

All collections and documents are deleted.

---

# Drop Collection

Delete a collection inside database.

Syntax

```
db.collection.drop()
```

Example

```
db.employees.drop()
```

Result

```
employees collection removed
```

Database still exists.

---

# MongoDB Compass (GUI)

MongoDB Compass is the **graphical interface** for MongoDB.

Features:

```
visual query builder
database explorer
schema visualization
aggregation builder
```

Used when developers prefer **GUI instead of terminal**.

---

# Create Database using MongoDB Compass

Steps:

1 Open MongoDB Compass
2 Connect to server

```
mongodb://localhost:27017
```

3 Click

```
Create Database
```

4 Enter:

```
Database Name: company_db
Collection Name: employees
```

5 Click

```
Create
```

Now database and collection exist.

---

# MongoShell (CLI)

MongoShell is the **command line interface for MongoDB**.

Start shell:

```
mongosh
```

Example workflow:

```
use company_db
```

Insert document:

```
db.employees.insertOne({
 name:"Tanish",
 salary:80000
})
```

MongoDB automatically creates:

```
database
collection
```

---

# Real System Example

User registration system.

Collection:

```
users
```

Document:

```
{
 name:"Tanish",
 email:"tanish@email.com",
 password:"hashedpassword",
 createdAt:"2025-03-10"
}
```

Operations:

Create user

```
insertOne
```

Login query

```
findOne({email})
```

Update profile

```
updateOne
```

Delete account

```
deleteOne
```

---

# Quick Summary

| Concept      | Meaning                   |
| ------------ | ------------------------- |
| CRUD         | Create Read Update Delete |
| insertOne    | add one document          |
| insertMany   | add multiple documents    |
| find         | retrieve documents        |
| updateOne    | update one document       |
| updateMany   | update multiple documents |
| deleteOne    | remove one document       |
| deleteMany   | remove multiple documents |
| dropDatabase | delete database           |
| drop         | delete collection         |

---

# Practice Problems

### Problem 1

Insert user.

```
db.users.insertOne({name:"Aman", age:22})
```

---

### Problem 2

Retrieve all users.

```
db.users.find()
```

---

### Problem 3

Update age.

```
db.users.updateOne(
 {name:"Aman"},
 {$set:{age:23}}
)
```

---

### Problem 4

Delete user.

```
db.users.deleteOne({name:"Aman"})
```

---

Next logical MongoDB learning step should be:

```
MongoDB Query Operators
$gt
$lt
$in
$and
$or
$regex
```

Then:

```
Indexes
Aggregation Pipeline
Schema Design
```

---

If you want, I can also make a **very powerful SQL → MongoDB comparison cheat sheet** that backend engineers use when moving from relational databases to MongoDB. This makes MongoDB **much easier to master.**
