# Backend Architecture

# Topic 5 — Dependency Injection (Deep Dive)

Dependency Injection is one of the **most important design principles for scalable backend systems**. It is heavily used in **enterprise systems, large Node backends, NestJS, Java Spring, .NET, etc.**

We will understand it properly.

---

# 1. What is Dependency Injection?

## Simple Definition

Dependency Injection (DI) is a design technique where **dependencies are provided to a component from the outside instead of being created inside the component.**

---

## Key Idea

Instead of doing this:

```javascript
const userRepository = require("./userRepository");
```

We **inject** the dependency:

```javascript
function createUserService(userRepository) {
  return {
    getUsers() {
      return userRepository.findAllUsers();
    },
  };
}
```

Now the dependency comes **from outside**.

---

# 2. What is a Dependency?

A dependency is **any object or module that another module needs to function**.

Example:

```
Controller depends on Service
Service depends on Repository
Repository depends on Database
```

Example:

```javascript
const userRepository = require("../repositories/userRepository");
```

Here:

```
userService depends on userRepository
```

So **userRepository is a dependency**.

---

# 3. Problem Without Dependency Injection

Example service:

```javascript
const userRepository = require("../repositories/userRepository");

exports.getUsers = async () => {
  return userRepository.findAllUsers();
};
```

Problems:

```
Service tightly coupled with repository
```

You **cannot replace repository easily**.

Example:

```
Database change
Mongo → PostgreSQL
```

You must modify service.

---

# 4. Mental Model

Think of dependency injection like **ordering food**.

Bad approach:

```
Chef grows vegetables
Chef cooks food
Chef serves food
```

Chef does everything.

Dependency Injection approach:

```
Supplier → Chef → Customer
```

Chef **receives ingredients**.

Mapping:

```
Repository → Service → Controller
```

Dependencies flow **from outside**.

---

# 5. Architecture with Dependency Injection

```
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
```

But now dependencies are **injected during application startup**.

---

# 6. Example Without Dependency Injection

Service file:

```javascript
const userRepository = require("../repositories/userRepository");

exports.getUsers = async () => {
  return await userRepository.findAllUsers();
};
```

Problem:

```
Service directly imports repository
```

This is **tight coupling**.

---

# 7. Example With Dependency Injection

Service becomes a **factory function**.

services/userService.js

```javascript
function createUserService(userRepository) {
  return {
    getUsers: async () => {
      return await userRepository.findAllUsers();
    },
  };
}

module.exports = createUserService;
```

Now service **does not know where repository came from**.

---

# 8. Inject Dependency in App Setup

app.js

```javascript
const express = require("express");

const createUserService = require("./services/userService");

const userRepository = require("./repositories/userRepository");

const userService = createUserService(userRepository);

const app = express();

app.get("/users", async (req, res) => {
  const users = await userService.getUsers();

  res.json(users);
});

app.listen(3000);
```

Now repository is **injected into service**.

---

# 9. Dependency Injection Flow

```
Application Startup
      ↓
Create Repository
      ↓
Inject into Service
      ↓
Inject Service into Controller
```

Example:

```
userRepository
      ↓
userService(userRepository)
      ↓
userController(userService)
```

---

# 10. Benefits of Dependency Injection

### 1 Loose Coupling

Modules are independent.

```
Service does not depend on specific repository
```

---

### 2 Easier Testing

You can inject **mock repositories**.

Example:

```javascript
const fakeRepository = {
  findAllUsers: () => [{ id: 1, name: "Test" }],
};
```

Now test service without database.

---

### 3 Flexible architecture

You can swap implementations.

Example:

```
MongoRepository
PostgresRepository
RedisRepository
```

---

### 4 Better scalability

Large systems require **dependency management**.

---

# 11. Real World Example

User service dependency chain:

```
UserController
     ↓
UserService
     ↓
UserRepository
     ↓
Database
```

Dependency injection creates the chain **once during app startup**.

---

# 12. Dependency Injection vs Importing

Without DI:

```
Service imports repository
```

With DI:

```
Repository injected into service
```

Diagram:

```
Without DI

Service
  ↓
Repository

With DI

Repository
  ↓
Service
```

---

# 13. Types of Dependency Injection

### 1 Constructor Injection

Dependency passed when object created.

Example:

```javascript
function UserService(userRepository) {
  this.userRepository = userRepository;
}
```

---

### 2 Setter Injection

Dependency passed later.

Example:

```javascript
userService.setRepository(repo);
```

---

### 3 Interface Injection

Rare in JavaScript.

More common in typed languages.

---

# 14. Dependency Injection Containers

Large apps use **DI containers**.

Example tools:

```
InversifyJS
Awilix
NestJS DI system
```

Example with Awilix:

```javascript
container.register({
  userService: asClass(UserService),
  userRepository: asClass(UserRepository),
});
```

Container manages dependencies automatically.

---

# 15. Example Project Structure

```
src
│
├ controllers
├ services
├ repositories
├ container
├ routes
└ app.js
```

Container manages dependency injection.

---

# 16. Common Mistakes

### Mistake 1

Injecting everything everywhere.

DI should be used **only where dependencies exist**.

---

### Mistake 2

Mixing DI and direct imports.

Example:

```
Controller uses DI
Service uses require()
```

This breaks architecture.

---

### Mistake 3

Overengineering small apps.

Small apps may not need DI.

---

# 17. Advantages

```
Loose coupling
Better testing
Flexible architecture
Cleaner dependencies
```

---

# 18. Disadvantages

```
More complex architecture
More setup code
Harder for beginners
```

---

# 19. Interview Questions

### Basic

What is dependency injection?

Why is DI used?

---

### Intermediate

What problems does dependency injection solve?

Difference between tight coupling and loose coupling?

---

### Advanced

How does dependency injection improve testability?

What is a DI container?

---

# 20. Interview Answer Template

What is Dependency Injection?

Answer:

Dependency Injection is a design pattern where dependencies are provided to a class or function from outside rather than being created internally. This promotes loose coupling, improves testability, and makes the system more flexible and maintainable.

---

# Final Mental Model

```
Repository
   ↓
Service
   ↓
Controller
   ↓
Route
```

Dependencies are **injected downward during application startup**.

---
