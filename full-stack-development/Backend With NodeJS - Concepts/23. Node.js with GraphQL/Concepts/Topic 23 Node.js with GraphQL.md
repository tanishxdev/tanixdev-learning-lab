# Topic 23 Node.js with GraphQL (Schema, Queries, Mutations & Express Integration)

---

### **Concept**

**What is GraphQL?**

* **GraphQL** is a **query language and runtime** for APIs, created by Facebook.
* It allows clients to **request exactly the data they need** — no over-fetching or under-fetching.
* Works as an alternative to REST APIs, but with more flexibility and efficiency.

---

### **Why GraphQL?**

| Problem with REST                                          | GraphQL Solution                 |
| ---------------------------------------------------------- | -------------------------------- |
| Multiple endpoints (e.g., `/users`, `/posts`, `/comments`) | One single endpoint (`/graphql`) |
| Over-fetching data (too much info)                         | Request only specific fields     |
| Under-fetching (need multiple API calls)                   | Nested queries in one call       |
| Versioning issues                                          | Schema-based, versionless design |
| Hard to join related data                                  | Built-in relationships in query  |

---

### **How It Works**

1. **Client sends a query** (like asking for name, age only).
2. **Server processes query** using **resolvers**.
3. **Response** returns *exactly* what was asked for.

**Example:**

```graphql
query {
  user(id: "1") {
    name
    email
  }
}
```

**Response:**

```json
{
  "data": {
    "user": {
      "name": "Tanish Kumar",
      "email": "tanish@example.com"
    }
  }
}
```

---

### **GraphQL Core Components**

| Component    | Description                                       |
| ------------ | ------------------------------------------------- |
| **Schema**   | Defines structure of data (types & relationships) |
| **Query**    | For reading/fetching data                         |
| **Mutation** | For creating/updating/deleting data               |
| **Resolver** | Functions that handle queries & mutations         |
| **TypeDefs** | GraphQL type definitions written as strings       |

---

### **Folder Setup**

```
graphql-demo/
│
├── app.js
├── schema/
│   └── schema.js
└── data/
    └── users.js
```

---

### **Step 1: Install Dependencies**

```bash
npm init -y
npm install express express-graphql graphql
```

---

### **Step 2: Create Dummy Data**

**File:** `data/users.js`

```js
module.exports = [
  { id: "1", name: "Tanish", email: "tanish@example.com", age: 22 },
  { id: "2", name: "Ravi", email: "ravi@example.com", age: 25 },
  { id: "3", name: "Aryan", email: "aryan@example.com", age: 19 },
];
```

---

### **Step 3: Create GraphQL Schema**

**File:** `schema/schema.js`

```js
// ===========================
// GraphQL Schema & Resolvers
// ===========================

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');
const users = require('../data/users');

// Define User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

// Root Query (for fetching)
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Fetch single user by ID
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return users.find(u => u.id === args.id);
      }
    },
    // Fetch all users
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return users;
      }
    }
  }
});

// Mutations (Create / Update / Delete)
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const newUser = {
          id: String(users.length + 1),
          name: args.name,
          email: args.email,
          age: args.age,
        };
        users.push(newUser);
        return newUser;
      }
    }
  }
});

// Export schema
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
```

---

### **Step 4: Setup Express Server**

**File:** `app.js`

```js
// ===========================
// GraphQL + Express Server
// ===========================

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true  // Enables GraphiQL UI
}));

const PORT = 4000;
app.listen(PORT, () => console.log(`GraphQL Server running at http://localhost:${PORT}/graphql`));
```

---

### **Step 5: Test in GraphiQL (Browser IDE)**

Visit:
**[http://localhost:4000/graphql](http://localhost:4000/graphql)**

You’ll see the GraphiQL playground.

---

### **Example Queries**

#### 1. Fetch All Users

```graphql
{
  users {
    id
    name
    email
    age
  }
}
```

**Response:**

```json
{
  "data": {
    "users": [
      { "id": "1", "name": "Tanish", "email": "tanish@example.com", "age": 22 },
      { "id": "2", "name": "Ravi", "email": "ravi@example.com", "age": 25 }
    ]
  }
}
```

---

#### 2. Fetch User by ID

```graphql
{
  user(id: "1") {
    name
    email
  }
}
```

**Response:**

```json
{
  "data": {
    "user": {
      "name": "Tanish",
      "email": "tanish@example.com"
    }
  }
}
```

---

#### 3. Add a New User (Mutation)

```graphql
mutation {
  addUser(name: "Karan", email: "karan@example.com", age: 20) {
    id
    name
    email
  }
}
```

**Response:**

```json
{
  "data": {
    "addUser": {
      "id": "4",
      "name": "Karan",
      "email": "karan@example.com"
    }
  }
}
```

---

### **Mini Project: GraphQL + MongoDB Integration**

**Goal:** Convert Book API to GraphQL version.

**Schema Example (bookSchema.js):**

```js
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLID } = require('graphql');
const Book = require('../models/bookModel');

// Book Type
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    price: { type: GraphQLInt },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return Book.find();
      }
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Book.findById(args.id);
      }
    }
  }
});

// Mutation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addBook: {
      type: BookType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: GraphQLString },
        price: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const book = new Book({
          title: args.title,
          author: args.author,
          price: args.price,
        });
        return book.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
```

**Now you can query:**

```graphql
{
  books {
    title
    price
  }
}
```

**Or mutate:**

```graphql
mutation {
  addBook(title: "Learn GraphQL", author: "Tanish", price: 499) {
    title
    price
  }
}
```

---

### **Dependencies**

| Package                 | Purpose                       |
| ----------------------- | ----------------------------- |
| **express**             | Web framework                 |
| **graphql**             | GraphQL schema & types        |
| **express-graphql**     | Connects GraphQL with Express |
| **mongoose (optional)** | For real DB integration       |

---

### **Notes**

* **Queries** → Read data
* **Mutations** → Modify data
* Use **GraphiQL** UI for testing queries easily.
* GraphQL **replaces multiple REST endpoints** with a single `/graphql`.
* You can define **relationships** easily (e.g., books → authors).
* Great for frontend apps (React, Vue) needing **customized data**.

---

### **Quick Summary Table**

| Concept      | Purpose           | Example                     |
| ------------ | ----------------- | --------------------------- |
| **Schema**   | Defines structure | `new GraphQLSchema()`       |
| **Query**    | Fetch data        | `{ user(id:"1"){name} }`    |
| **Mutation** | Modify data       | `mutation { addUser(...) }` |
| **Resolver** | Handles logic     | Returns data for each field |
| **GraphiQL** | Testing UI        | `/graphql` endpoint         |

---
