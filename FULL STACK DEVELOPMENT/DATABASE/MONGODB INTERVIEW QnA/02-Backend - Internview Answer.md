## MongoDB Fundamentals

---

### 1. What is MongoDB and what are its main features?

#### Concepts

MongoDB is a NoSQL, document-oriented database.
It stores data in flexible, JSON-like documents (BSON format) instead of tables and rows.

Main features:

- Document-based storage
- Schema flexibility
- Horizontal scaling (sharding)
- High availability (replica sets)
- Rich indexing support
- Aggregation framework
- Built-in replication

#### Examples

Relational DB:
Row → fixed columns

MongoDB:

```json
{
  "name": "Tanish",
  "skills": ["Node.js", "MongoDB"],
  "experience": 2
}
```

No predefined schema required.

#### Interview Ready Answer

MongoDB is a document-oriented NoSQL database that stores data in BSON documents instead of rows and tables. It provides flexible schema design, horizontal scalability through sharding, high availability via replica sets, and powerful indexing and aggregation capabilities. It is commonly used in applications requiring fast development, scalability, and dynamic data models.

---

### 2. How does MongoDB differ from relational databases?

#### Concepts

Relational DB:

- Tables, rows, columns
- Fixed schema
- Joins
- SQL

MongoDB:

- Collections, documents
- Flexible schema
- Embedded documents
- BSON format
- No joins traditionally (but supports $lookup)

#### Examples

Relational:
Users table
Orders table
Join required

MongoDB:

```json
{
  "user": "Tanish",
  "orders": [{ "product": "Book", "price": 500 }]
}
```

Embedded data avoids join.

#### Interview Ready Answer

MongoDB differs from relational databases because it stores data in flexible documents instead of structured tables. It does not enforce a fixed schema, supports embedding related data within documents, and scales horizontally more naturally. While relational databases rely heavily on joins, MongoDB encourages denormalization for performance.

---

### 3. Can you describe the structure of data in MongoDB?

#### Concepts

Hierarchy:

- Database
- Collection
- Document
- Fields

Data is stored in BSON format.
Documents contain key-value pairs.

#### Examples

Database → `appDB`
Collection → `users`
Document:

```json
{
  "_id": "123",
  "name": "Tanish",
  "age": 22,
  "skills": ["C++", "Node.js"],
  "address": {
    "city": "Delhi",
    "pincode": 110001
  }
}
```

#### Interview Ready Answer

MongoDB stores data in a hierarchical structure: databases contain collections, collections contain documents, and documents contain fields. Documents are stored in BSON format and support nested objects and arrays, enabling rich and flexible data modeling.

---

### 4. What is a Document in MongoDB?

#### Concepts

A document is the basic unit of data in MongoDB.
It is similar to a JSON object.
Stored in BSON format.
Each document has a unique `_id` field.

#### Examples

```json
{
  "_id": ObjectId("abc123"),
  "name": "Tanish",
  "role": "Backend Developer"
}
```

#### Interview Ready Answer

A document in MongoDB is the fundamental data unit stored in a collection. It is a BSON object consisting of key-value pairs and can include nested objects and arrays. Every document contains a unique `_id` field that acts as its primary identifier.

---

### 5. How is data stored in collections in MongoDB?

#### Concepts

Collections are groups of related documents.
No fixed schema required.
Documents in the same collection can have different structures.

#### Examples

Collection: `users`

Document 1:

```json
{ "name": "Tanish", "age": 22 }
```

Document 2:

```json
{ "name": "Rahul", "skills": ["Java"] }
```

Different fields allowed.

#### Interview Ready Answer

Data in MongoDB is stored inside collections, which are analogous to tables in relational databases. Collections contain documents, and unlike relational tables, documents within the same collection can have varying structures due to MongoDB’s flexible schema model.

---

### 6. Describe what a MongoDB database is.

#### Concepts

A database is a container for collections.
Each database has its own files on disk.

#### Examples

MongoDB Server

- Database: `appDB`
  - Collection: `users`
  - Collection: `orders`

#### Interview Ready Answer

A MongoDB database is a logical container that holds collections. Each database operates independently and stores related data grouped together. A single MongoDB instance can host multiple databases.

---

### 7. What is the default port on which MongoDB listens?

#### Concepts

Default TCP port = 27017

#### Examples

Connection string:

```
mongodb://localhost:27017
```

#### Interview Ready Answer

MongoDB listens on port 27017 by default. This is the standard port used when connecting to a local MongoDB instance unless explicitly configured otherwise.

---

### 8. How does MongoDB provide high availability and disaster recovery?

#### Concepts

Replica Set:

- Primary node
- Secondary nodes
- Automatic failover
- Oplog replication

If primary fails → secondary becomes primary.

#### Examples

3-node replica set:
Primary → writes
Secondaries → replicate

#### Interview Ready Answer

MongoDB provides high availability using replica sets. A replica set consists of one primary node and multiple secondary nodes that replicate data using the oplog. If the primary fails, an automatic election process promotes a secondary to primary, ensuring minimal downtime and data redundancy.

---

### 9. What are indexes in MongoDB, and why are they used?

#### Concepts

Indexes improve query performance.
Without index → full collection scan.
Uses B-tree data structure.

Types:

- Single field
- Compound
- Text
- TTL
- Hashed

#### Examples

```js
db.users.createIndex({ email: 1 });
```

Improves:

```
db.users.find({ email: "test@gmail.com" })
```

#### Interview Ready Answer

Indexes in MongoDB are special data structures that improve query performance by allowing faster data retrieval. Without indexes, MongoDB performs a collection scan. MongoDB uses B-tree indexes and supports various types such as single-field, compound, text, and TTL indexes to optimize different query patterns.

---

### 10. What is the role of the \_id field in MongoDB documents?

#### Concepts

Primary identifier.
Unique per document.
Automatically generated if not provided.
Usually ObjectId.

#### Examples

```json
{
  "_id": ObjectId("65fabc123"),
  "name": "Tanish"
}
```

#### Interview Ready Answer

The `_id` field uniquely identifies each document within a collection. MongoDB automatically generates it as an ObjectId if not provided explicitly. It acts as the primary key and ensures uniqueness and efficient indexing of documents.

## CRUD Operations

---

### 11. How do you create a new MongoDB collection?

#### Concepts

A collection in MongoDB stores documents.
Collections can be created in two ways:

1. Explicit creation using `createCollection()`
2. Implicit creation when inserting the first document.

MongoDB does not require predefined schemas for collections.

#### Examples

Explicit creation:

```js
db.createCollection("users");
```

Implicit creation:

```js
db.users.insertOne({ name: "Tanish", age: 22 });
```

If `users` collection does not exist, MongoDB automatically creates it.

#### Interview Ready Answer

A MongoDB collection can be created explicitly using the `createCollection()` command or implicitly when the first document is inserted. Since MongoDB uses a flexible schema, collections do not require predefined structures before storing data.

---

### 12. What is the syntax to insert a document into a MongoDB collection?

#### Concepts

MongoDB provides multiple methods to insert documents:

- `insertOne()` → insert a single document
- `insertMany()` → insert multiple documents

Each document must be a BSON object.

#### Examples

Insert one document:

```js
db.users.insertOne({
  name: "Tanish",
  age: 22,
  role: "Backend Developer",
});
```

Insert multiple documents:

```js
db.users.insertMany([
  { name: "Rahul", age: 23 },
  { name: "Aman", age: 24 },
]);
```

#### Interview Ready Answer

Documents can be inserted into a MongoDB collection using `insertOne()` for a single document or `insertMany()` for multiple documents. Each inserted document is stored in BSON format and automatically receives an `_id` field if one is not provided.

---

### 13. Describe how to read data from a MongoDB collection.

#### Concepts

Data retrieval in MongoDB is performed using the `find()` method.

Key operations:

- Filtering
- Projection
- Sorting
- Limiting results

#### Examples

Retrieve all documents:

```js
db.users.find();
```

Filter documents:

```js
db.users.find({ age: 22 });
```

Projection:

```js
db.users.find({ age: 22 }, { name: 1 });
```

#### Interview Ready Answer

Data is read from MongoDB collections using the `find()` method. It allows filtering documents using query conditions, selecting specific fields through projections, and controlling output with operations like sorting and limiting results.

---

### 14. Explain how to update documents in MongoDB.

#### Concepts

MongoDB provides several update operations:

- `updateOne()`
- `updateMany()`
- `replaceOne()`

Update operators are used to modify fields without replacing the entire document.

Common operators:

- `$set`
- `$inc`
- `$push`
- `$unset`

#### Examples

Update one document:

```js
db.users.updateOne({ name: "Tanish" }, { $set: { age: 23 } });
```

Update multiple documents:

```js
db.users.updateMany({ role: "Developer" }, { $inc: { experience: 1 } });
```

#### Interview Ready Answer

MongoDB updates documents using operations such as `updateOne()`, `updateMany()`, and `replaceOne()`. Updates are usually performed with update operators like `$set` or `$inc` to modify specific fields without replacing the entire document.

---

### 15. What are the MongoDB commands for deleting documents?

#### Concepts

MongoDB provides two main delete operations:

- `deleteOne()`
- `deleteMany()`

These operations remove documents based on a filter condition.

#### Examples

Delete one document:

```js
db.users.deleteOne({ name: "Tanish" });
```

Delete multiple documents:

```js
db.users.deleteMany({ age: { $lt: 18 } });
```

#### Interview Ready Answer

MongoDB deletes documents using `deleteOne()` to remove a single matching document or `deleteMany()` to remove multiple documents that satisfy a given condition.

---

### 16. Can you join two collections in MongoDB? If so, how?

#### Concepts

MongoDB traditionally avoids joins by embedding related data.

However, joins can be performed using:

- Aggregation pipeline
- `$lookup` operator

`$lookup` performs a left outer join between collections.

#### Examples

```js
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userDetails",
    },
  },
]);
```

#### Interview Ready Answer

Yes, MongoDB supports joining collections using the `$lookup` stage in the aggregation pipeline. It performs a left outer join between two collections by matching fields from both datasets.

---

### 17. How do you limit the number of documents returned by a MongoDB query?

#### Concepts

MongoDB uses the `limit()` method to restrict the number of returned documents.

Often used for:

- Pagination
- Performance optimization

#### Examples

```js
db.users.find().limit(5);
```

Retrieve only 5 documents.

#### Interview Ready Answer

MongoDB allows limiting query results using the `limit()` method. It restricts the number of documents returned by a query, which is useful for pagination and improving query performance.

---

### 18. What is the difference between find() and findOne() in MongoDB?

#### Concepts

`find()`:

- Returns a cursor
- Can return multiple documents

`findOne()`:

- Returns a single document
- No cursor

#### Examples

Find multiple documents:

```js
db.users.find({ age: 22 });
```

Find one document:

```js
db.users.findOne({ age: 22 });
```

#### Interview Ready Answer

`find()` returns a cursor containing all documents matching a query, whereas `findOne()` returns only the first matching document. `find()` is typically used when multiple results are expected, while `findOne()` is used when only a single document is required.

---

### 19. How can you achieve pagination in MongoDB?

#### Concepts

Pagination is implemented using:

- `skip()`
- `limit()`

This allows dividing results into pages.

#### Examples

Page 2 with 10 records per page:

```js
db.users.find().skip(10).limit(10);
```

Formula:

skip = `(page - 1) * limit`

#### Interview Ready Answer

Pagination in MongoDB is achieved using the `skip()` and `limit()` methods. `skip()` ignores a specific number of documents, while `limit()` restricts how many documents are returned. Together they allow retrieving results page by page.

---

### 20. What are the differences between MongoDB's insertOne and insertMany methods?

#### Concepts

`insertOne()`:

- Inserts a single document
- Simpler operation

`insertMany()`:

- Inserts multiple documents
- More efficient for bulk operations

#### Examples

Single insert:

```js
db.users.insertOne({ name: "Tanish" });
```

Bulk insert:

```js
db.users.insertMany([{ name: "Rahul" }, { name: "Aman" }]);
```

#### Interview Ready Answer

`insertOne()` inserts a single document into a collection, while `insertMany()` inserts multiple documents in a single operation. `insertMany()` is more efficient for bulk inserts because it reduces the number of database calls.

## Indexing and Aggregation

---

### 21. Describe a compound index in MongoDB.

#### Concepts

A compound index is an index created on multiple fields within a document.

It helps optimize queries that filter or sort using more than one field.

Order of fields in the index is important because MongoDB follows the **prefix rule**.

Prefix rule means queries can use the index if they match the starting fields.

Example order:

`{ name: 1, age: -1 }`

Valid usages:

- name
- name + age

Invalid usage:

- age only

#### Examples

Create compound index:

```javascript
db.users.createIndex({ name: 1, age: -1 });
```

Query using index:

```javascript
db.users.find({ name: "Tanish", age: { $gt: 20 } });
```

#### Interview Ready Answer

A compound index in MongoDB is an index that includes multiple fields in a specific order. It improves query performance when queries filter or sort using multiple fields. MongoDB uses the prefix rule, meaning the index can support queries that match the leftmost fields of the index definition.

---

### 22. What is the aggregation pipeline in MongoDB?

#### Concepts

Aggregation pipeline is a framework used to process and transform data through multiple stages.

Each stage performs an operation and passes the result to the next stage.

Common stages:

- `$match` → filter documents
- `$group` → group data and perform calculations
- `$sort` → sort results
- `$project` → reshape documents
- `$limit` → restrict number of documents

Data flows through stages like a pipeline.

#### Examples

```javascript
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$userId", totalSpent: { $sum: "$amount" } } },
  { $sort: { totalSpent: -1 } },
]);
```

#### Interview Ready Answer

The aggregation pipeline in MongoDB is a data processing framework that transforms documents through a sequence of stages. Each stage performs an operation such as filtering, grouping, sorting, or reshaping documents, and passes the result to the next stage. It is commonly used for analytics, reporting, and complex data processing.

---

### 23. How can you create an index in MongoDB and when should you do it?

#### Concepts

Indexes are created using `createIndex()`.

They should be created on fields that are frequently used in:

- Query filters
- Sorting
- Joins
- Range queries

Avoid excessive indexes because they increase storage and slow writes.

#### Examples

Single field index:

```javascript
db.users.createIndex({ email: 1 });
```

Compound index:

```javascript
db.orders.createIndex({ userId: 1, createdAt: -1 });
```

#### Interview Ready Answer

Indexes in MongoDB are created using the `createIndex()` method. They should be added on fields frequently used in query filters, sorting operations, or join conditions to improve read performance. However, too many indexes can increase storage usage and slow down write operations.

---

### 24. Explain how MongoDB's $match, $group, and $sort operators work in an aggregation pipeline.

#### Concepts

`$match`
Filters documents similar to a `WHERE` clause.

`$group`
Groups documents by a key and performs aggregation operations such as:

- `$sum`
- `$avg`
- `$count`
- `$max`
- `$min`

`$sort`
Sorts the output documents in ascending or descending order.

#### Examples

```javascript
db.sales.aggregate([
  { $match: { category: "electronics" } },
  {
    $group: {
      _id: "$product",
      totalSales: { $sum: "$amount" },
    },
  },
  { $sort: { totalSales: -1 } },
]);
```

#### Interview Ready Answer

In an aggregation pipeline, `$match` filters documents based on specific conditions, similar to a WHERE clause in SQL. `$group` groups documents by a specified field and performs aggregation operations like sum or average. `$sort` orders the resulting documents based on specified fields. Together they enable powerful data processing and analytics workflows.

---

### 25. What is the purpose of the explain() method?

#### Concepts

`explain()` helps analyze how MongoDB executes a query.

It shows:

- Query plan
- Index usage
- Collection scan
- Execution statistics

Useful for performance optimization.

#### Examples

```javascript
db.users.find({ email: "test@gmail.com" }).explain("executionStats");
```

Possible output insights:

- `IXSCAN` → index scan
- `COLLSCAN` → full collection scan

#### Interview Ready Answer

The `explain()` method is used to analyze how MongoDB executes a query. It provides details about the query plan, index usage, execution stages, and performance statistics. Developers use it to identify slow queries and optimize database performance.

---

## Replication and Sharding

---

### 26. Can you explain MongoDB's replication?

#### Concepts

Replication means copying data across multiple MongoDB servers.

It ensures:

- Data redundancy
- High availability
- Fault tolerance

MongoDB uses **Replica Sets** for replication.

Data replication happens using the **oplog (operations log)**.

#### Examples

Replica set structure:

Primary
↓
Secondary
↓
Secondary

Writes go to primary → replicated to secondaries.

#### Interview Ready Answer

MongoDB replication is the process of maintaining multiple copies of data across different servers using replica sets. One node acts as the primary that handles write operations, while secondary nodes replicate the data from the primary using the oplog. This provides redundancy, high availability, and fault tolerance.

---

### 27. Describe the purpose and components of a replica set.

#### Concepts

A replica set is a group of MongoDB nodes that replicate data.

Components:

Primary node
Handles all writes.

Secondary nodes
Replicate data from primary.

Arbiter (optional)
Participates in elections but does not store data.

Purpose:

- High availability
- Automatic failover
- Data redundancy

#### Examples

3 node replica set:

Primary
Secondary
Secondary

If primary fails → election selects new primary.

#### Interview Ready Answer

A replica set is a group of MongoDB servers that maintain the same dataset for redundancy and high availability. It typically consists of one primary node that handles writes and multiple secondary nodes that replicate the data. If the primary node fails, an automatic election promotes a secondary node to primary.

---

### 28. What is sharding in MongoDB and when would you use it?

#### Concepts

Sharding is a method of distributing data across multiple servers.

It is used when a single server cannot handle large data volume or traffic.

Key components:

- Shards → store data
- Config servers → store cluster metadata
- Mongos → query router

#### Examples

Large dataset:

Users collection distributed across multiple shards based on shard key.

Example shard key:

```javascript
{
  userId: "hashed";
}
```

#### Interview Ready Answer

Sharding in MongoDB is a horizontal scaling technique where data is distributed across multiple servers called shards. It is used when the dataset becomes too large or traffic exceeds the capacity of a single server. MongoDB uses a shard key to determine how documents are distributed across shards.

---

### 29. How does MongoDB perform automatic failover?

#### Concepts

Automatic failover happens in replica sets.

Process:

1. Primary node fails
2. Secondary nodes detect failure
3. Election process begins
4. One secondary becomes new primary

Applications reconnect automatically.

#### Examples

Replica set:

Primary (down)
Secondary → elected new primary

#### Interview Ready Answer

MongoDB performs automatic failover using replica sets. When the primary node becomes unavailable, the secondary nodes detect the failure and initiate an election process. One of the secondary nodes is elected as the new primary, allowing the system to continue handling write operations with minimal downtime.

---

### 30. Describe the difference between horizontal scaling and vertical scaling, and how MongoDB supports them.

#### Concepts

Vertical Scaling
Increasing resources of a single server.

Examples:

- More CPU
- More RAM
- Larger disk

Horizontal Scaling
Adding more servers to distribute data and workload.

#### Examples

Vertical scaling:

Upgrade server from 16GB RAM → 64GB RAM.

Horizontal scaling:

Add multiple shards to distribute database.

#### Interview Ready Answer

Vertical scaling means increasing the hardware resources of a single server such as CPU, RAM, or storage. Horizontal scaling means distributing data across multiple servers to share the workload. MongoDB supports horizontal scaling through sharding and vertical scaling by allowing deployment on more powerful hardware.

## Performance and Optimization

---

### 31. How does MongoDB handle large data volumes?

#### Concepts

MongoDB handles large datasets through **horizontal scaling and distributed architecture**.

Key mechanisms:

**1. Sharding (Horizontal Scaling)**
Data is split across multiple servers using a shard key.

**2. Replica Sets**
Provide data redundancy and distribute read workloads.

**3. Indexing**
Indexes reduce query scan cost.

**4. Aggregation Pipeline Optimization**
Efficient server-side data processing.

**5. WiredTiger Storage Engine**
Uses compression and efficient memory management.

#### Examples

Sharding architecture:

Application
↓
mongos router
↓
Shard 1 | Shard 2 | Shard 3

Each shard stores a portion of the dataset.

Example shard key:

```javascript
sh.shardCollection("app.users", { userId: 1 });
```

#### Interview Ready Answer

MongoDB handles large data volumes using horizontal scaling through sharding, where data is distributed across multiple machines based on a shard key. It also uses replica sets for high availability and load distribution. Efficient indexing, the aggregation framework, and the WiredTiger storage engine help optimize performance when working with large datasets.

---

### 32. What strategies can you use to diagnose and address performance issues in MongoDB?

#### Concepts

Key strategies:

**1. Query Profiling**
MongoDB profiler identifies slow queries.

**2. Explain Plan Analysis**
Check whether queries use indexes.

**3. Index Optimization**
Ensure queries match indexes.

**4. Monitor Metrics**
CPU, memory, disk I/O, and cache usage.

**5. Schema Optimization**
Avoid excessive joins or deep document nesting.

**6. Proper Pagination**
Use indexed fields instead of large skip operations.

#### Examples

Using explain:

```javascript
db.users.find({ email: "abc@test.com" }).explain("executionStats");
```

Slow query profiling:

```javascript
db.setProfilingLevel(1);
```

#### Interview Ready Answer

To diagnose performance issues in MongoDB, I typically analyze query execution using the `explain()` method to verify index usage. I also use the MongoDB profiler to identify slow queries. Performance can be improved by optimizing indexes, restructuring schema design, reducing collection scans, monitoring system resources, and ensuring queries follow efficient access patterns.

---

### 33. How do you ensure that indexes fit into RAM?

#### Concepts

MongoDB performance depends heavily on **indexes fitting in memory**.

Strategies:

- Keep indexes small
- Use selective indexes
- Avoid unnecessary indexes
- Use compound indexes efficiently
- Monitor index size

If indexes exceed RAM → disk reads increase → slower queries.

#### Examples

Check index size:

```javascript
db.users.stats();
```

Output includes:

- indexSize
- storageSize

Monitoring RAM:

```javascript
db.serverStatus().wiredTiger.cache;
```

#### Interview Ready Answer

To ensure indexes fit into RAM, I monitor index sizes using collection statistics and compare them with available memory. I design efficient indexes, avoid unnecessary ones, and prefer compound indexes that match query patterns. Keeping indexes within memory reduces disk I/O and significantly improves query performance.

---

### 34. Can you explain MongoDB's write concern?

#### Concepts

Write concern defines **how MongoDB confirms that a write operation was successfully applied**.

Levels:

**w:1**
Acknowledged by primary.

**w:majority**
Acknowledged by majority of replica set members.

**w:0**
No acknowledgment.

Additional options:

- **j:true** → confirm journaling
- **wtimeout** → timeout for acknowledgment

#### Examples

```javascript
db.users.insertOne(
  { name: "Tanish" },
  { writeConcern: { w: "majority", j: true } },
);
```

#### Interview Ready Answer

Write concern in MongoDB specifies the level of acknowledgment required after a write operation. It determines whether MongoDB waits for confirmation from the primary node or multiple replica set members. For example, `w:1` confirms the write on the primary, while `w:majority` ensures durability by waiting for most replica nodes to acknowledge the operation.

---

### 35. What is a covered query in MongoDB?

#### Concepts

A covered query is a query where:

- All fields in the query are **in the index**
- MongoDB **does not need to read the actual documents**

Result → faster queries.

Requirements:

- Query fields must be indexed
- Returned fields must be indexed
- `_id` must be excluded if not in index

#### Examples

Index:

```javascript
db.users.createIndex({ email: 1, name: 1 });
```

Covered query:

```javascript
db.users.find({ email: "test@gmail.com" }, { name: 1, _id: 0 });
```

#### Interview Ready Answer

A covered query is a query where MongoDB can return results using only the index without accessing the actual documents. This significantly improves performance because disk reads are avoided. For a query to be covered, both the query fields and returned fields must be part of the index.

---

# MongoDB Security

---

### 36. What are the security features available in MongoDB?

#### Concepts

MongoDB provides multiple security layers:

**Authentication**
Verify user identity.

**Authorization**
Role-based access control.

**Encryption at Rest**
Data encrypted on disk.

**Encryption in Transit**
TLS/SSL connections.

**Auditing**
Track database activities.

**IP Whitelisting**
Restrict network access.

#### Examples

User creation:

```javascript
db.createUser({
  user: "admin",
  pwd: "password",
  roles: ["root"],
});
```

#### Interview Ready Answer

MongoDB provides several security features including authentication to verify users, role-based authorization to control access permissions, encryption at rest for stored data, TLS/SSL encryption for secure network communication, auditing for monitoring database activities, and IP access controls to restrict network connectivity.

---

### 37. How do you enable authentication in MongoDB?

#### Concepts

Authentication ensures **only authorized users access the database**.

Steps:

1. Start MongoDB without auth.
2. Create admin user.
3. Restart MongoDB with authentication enabled.

#### Examples

Create admin user:

```javascript
use admin

db.createUser({
 user: "admin",
 pwd: "securePassword",
 roles: ["root"]
})
```

Enable auth in config:

```yaml
security:
  authorization: enabled
```

#### Interview Ready Answer

To enable authentication in MongoDB, an administrator first creates a user in the admin database with appropriate roles. After that, authentication is enabled in the MongoDB configuration file by setting `authorization: enabled`. Once enabled, all clients must authenticate before accessing the database.

---

### 38. Describe role-based access control in MongoDB.

#### Concepts

Role-Based Access Control (RBAC) restricts actions based on user roles.

Roles define:

- Permissions
- Accessible databases
- Allowed operations

Types:

**Built-in roles**

- read
- readWrite
- dbAdmin
- clusterAdmin

**Custom roles**

Developers can define specific privileges.

#### Examples

Create user with readWrite role:

```javascript
db.createUser({
  user: "appUser",
  pwd: "password",
  roles: [{ role: "readWrite", db: "appDB" }],
});
```

#### Interview Ready Answer

MongoDB uses role-based access control to manage permissions. Each user is assigned roles that define the operations they can perform on specific databases or collections. MongoDB provides built-in roles like read, readWrite, and dbAdmin, and also allows administrators to define custom roles for more granular access control.

---

### 39. Explain how to encrypt MongoDB data.

#### Concepts

MongoDB supports encryption in two ways:

**1. Encryption at Rest**
Protects data stored on disk.

**2. Client-Side Field Level Encryption (FLE)**
Encrypts sensitive fields before sending them to the database.

**3. TLS Encryption**
Protects data in transit.

#### Examples

Encrypted field example:

```json
{
  "name": "Tanish",
  "ssn": "<encrypted-value>"
}
```

#### Interview Ready Answer

MongoDB supports data encryption through encryption at rest, which secures data stored on disk, and encryption in transit using TLS/SSL for network communication. Additionally, MongoDB supports client-side field level encryption where sensitive fields are encrypted before being stored in the database, ensuring that even database administrators cannot view the plaintext values.

---

### 40. Can you set up MongoDB to use TLS/SSL for connections?

#### Concepts

TLS/SSL ensures **secure communication between client and server**.

Benefits:

- Prevents data interception
- Encrypts network traffic
- Ensures secure authentication

#### Examples

MongoDB configuration:

```yaml
net:
  tls:
    mode: requireTLS
    certificateKeyFile: /etc/ssl/mongodb.pem
```

Connection:

```bash
mongosh --tls --host localhost
```

#### Interview Ready Answer

Yes, MongoDB can be configured to use TLS/SSL to secure client-server communication. This is done by enabling TLS in the MongoDB configuration file and providing the required certificate files. Once enabled, all connections to the database are encrypted, protecting data from network interception and ensuring secure communication.
