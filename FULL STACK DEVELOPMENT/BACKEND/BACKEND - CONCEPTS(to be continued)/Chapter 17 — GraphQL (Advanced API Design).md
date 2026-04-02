# Chapter 17 — GraphQL (Advanced API Design)

---

# 1. Problem (Why this chapter exists)

Till now you used REST APIs:

```text
GET /users
GET /users/:id
GET /posts
```

### ❌ Problems with REST

---

## ❌ 1. Over-fetching

```text
GET /users → returns full user object
But you only need name ❌
```

---

## ❌ 2. Under-fetching

```text
GET /user → basic info
GET /posts → posts
GET /friends → friends

→ Multiple API calls ❌
```

---

## ❌ 3. Multiple endpoints

```text
/users
/posts
/comments
```

Hard to manage at scale.

---

# 2. Concept (Core Idea)

---

## 🧠 Definition — GraphQL

> GraphQL is a **query language for APIs** where client decides **what data it wants**

---

## 🧠 Key Idea

```text
Client asks EXACT data → Server returns EXACT data
```

---

## 🧠 REST vs GraphQL

| Feature        | REST           | GraphQL        |
| -------------- | -------------- | -------------- |
| Endpoints      | Multiple       | Single         |
| Data control   | Server decides | Client decides |
| Over-fetching  | Yes            | No             |
| Under-fetching | Yes            | No             |

---

# 3. GraphQL Core Components

---

## 🧠 1. Schema

> Defines structure of API

---

## 🧠 2. Query

> Used to **GET data**

---

## 🧠 3. Mutation

> Used to **CREATE / UPDATE / DELETE**

---

## 🧠 4. Resolver

> Function that handles request

---

# 4. Installing GraphQL

---

## ▶️ Command

```bash
npm install express express-graphql graphql
```

---

# 5. Basic Setup

---

## 📄 `app.js`

```javascript
// ================================
// Chapter 17 - GraphQL Setup
// ================================

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
```

---

# 6. Define Schema

---

## 📄 Code

```javascript
const schema = buildSchema(`

    type Query {
        hello: String
    }

`);
```

---

# 7. Define Resolver

---

```javascript
const root = {
  hello: () => {
    return "Hello GraphQL";
  },
};
```

---

# 8. Connect GraphQL to Express

---

```javascript
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // UI for testing
  }),
);
```

---

# 9. Start Server

---

```javascript
app.listen(3000, () => {
  console.log("GraphQL server running...");
});
```

---

# 10. Test Query

---

## 🌐 Open

```text
http://localhost:3000/graphql
```

---

## Query

```graphql
{
  hello
}
```

---

## Output

```json
{
  "data": {
    "hello": "Hello GraphQL"
  }
}
```

---

# 11. Real Example (Users)

---

## 📄 Schema

```javascript
const schema = buildSchema(`

    type User {
        id: ID
        name: String
    }

    type Query {
        getUser(id: ID): User
    }

`);
```

---

## 📄 Resolver

```javascript
const root = {
  getUser: ({ id }) => {
    return { id, name: "Tanish" };
  },
};
```

---

## Query

```graphql
{
  getUser(id: 1) {
    name
  }
}
```

---

## Output

```json
{
  "data": {
    "getUser": {
      "name": "Tanish"
    }
  }
}
```

---

# 12. Mutation (IMPORTANT)

---

## 📄 Schema

```javascript
type Mutation {
    createUser(name: String): String
}
```

---

## 📄 Resolver

```javascript
createUser: ({ name }) => {
  return "User created: " + name;
};
```

---

## Query

```graphql
mutation {
  createUser(name: "Tanish")
}
```

---

# 13. Real Backend Thinking

---

## 🧠 Flow

```text
Client → GraphQL Query → Resolver → DB → Response
```

---

## 🧠 Single Endpoint

```text
/graphql
```

---

# 14. When to Use GraphQL

---

## ✅ Use when:

```text
- Complex frontend
- Multiple data sources
- Mobile apps
```

---

## ❌ Avoid when:

```text
- Simple CRUD API
- Small projects
```

---

# 15. Mini Practice (DO THIS)

---

## Tasks:

- Create User schema
- Add query: get all users
- Add mutation: create user

---

# 16. Common Mistakes

---

### ❌ Confusing REST with GraphQL

---

### ❌ Overcomplicating small apps

---

### ❌ Not structuring schema properly

---

# 17. Mental Model (VERY IMPORTANT)

```text
REST → Server decides data
GraphQL → Client decides data
```

---

## 🧠 Think Like This

```text
Frontend asks → backend responds exactly
```

---

# 18. Final File (Clean Setup)

---

## 📄 `app.js`

```javascript
// ================================
// Chapter 17 - Final GraphQL Setup
// ================================

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

// Schema
const schema = buildSchema(`

    type User {
        id: ID
        name: String
    }

    type Query {
        getUser(id: ID): User
    }

`);

// Resolver
const root = {
  getUser: ({ id }) => {
    return { id, name: "Tanish" };
  },
};

// GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

// Start server
app.listen(3000, () => {
  console.log("GraphQL server running...");
});
```

---

# 19. Interview Questions

1. What is GraphQL?
2. GraphQL vs REST?
3. What is schema?
4. What is resolver?
5. What is query vs mutation?
6. What is over-fetching?
7. What is under-fetching?
8. Why single endpoint?
9. When to use GraphQL?
10. What is GraphiQL?

---

# ✅ Summary (Clear Thinking)

- REST → multiple endpoints
- GraphQL → single endpoint + flexible

You now can:

- Build advanced APIs
- Optimize frontend data fetching
- Design scalable API systems

---
