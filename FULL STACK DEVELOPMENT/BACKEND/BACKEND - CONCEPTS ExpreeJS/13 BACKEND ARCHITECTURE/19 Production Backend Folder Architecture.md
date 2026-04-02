# Production Backend Folder Structure

## (Express / Node.js – Real Company Architecture)

This is a **clean, scalable structure used in production-grade Express backends**.
It aligns with the architecture topics you learned:

```
Controller → Service → Repository → Database
```

and integrates:

```
Middleware
Validation
Logging
Configuration
Security
Jobs
Testing
```

---

# 1. High-Level Production Structure

```
project-root
│
├ package.json
├ package-lock.json
├ .env
├ .gitignore
├ README.md
│
├ src
│
│ ├ app.js
│ ├ server.js
│
│ ├ config
│ │ ├ index.js
│ │ ├ database.js
│ │ ├ redis.js
│ │ └ logger.js
│
│ ├ routes
│ │ ├ index.js
│ │ └ user.routes.js
│
│ ├ controllers
│ │ └ user.controller.js
│
│ ├ services
│ │ └ user.service.js
│
│ ├ repositories
│ │ └ user.repository.js
│
│ ├ models
│ │ └ user.model.js
│
│ ├ middlewares
│ │ ├ auth.middleware.js
│ │ ├ error.middleware.js
│ │ ├ logger.middleware.js
│ │ └ validation.middleware.js
│
│ ├ validators
│ │ └ user.validator.js
│
│ ├ utils
│ │ ├ asyncHandler.js
│ │ ├ responseFormatter.js
│ │ └ AppError.js
│
│ ├ jobs
│ │ ├ email.job.js
│ │ └ worker.js
│
│ ├ cache
│ │ └ redisCache.js
│
│ ├ database
│ │ ├ connection.js
│ │ └ migrations
│
│ ├ tests
│ │ ├ unit
│ │ ├ integration
│ │ └ api
│
│ └ constants
│   └ index.js
```

---

# 2. Root Level Files

```
package.json
.env
.gitignore
README.md
```

Purpose:

| File         | Role                   |
| ------------ | ---------------------- |
| package.json | dependencies + scripts |
| .env         | environment variables  |
| .gitignore   | ignore secrets         |
| README.md    | project documentation  |

---

# 3. src/app.js

Creates Express app and loads middleware.

```javascript
const express = require("express");
const routes = require("./routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

app.use("/api", routes);

app.use(errorMiddleware);

module.exports = app;
```

Purpose:

```
Application configuration
Middleware setup
Route registration
```

---

# 4. src/server.js

Starts the server.

```javascript
const app = require("./app");
const config = require("./config");

app.listen(config.server.port, () => {
  console.log(`Server running on ${config.server.port}`);
});
```

Purpose:

```
Separate app setup from server startup
```

This improves **testability**.

---

# 5. config/

Configuration management.

```
config
 ├ database.js
 ├ redis.js
 ├ logger.js
 └ index.js
```

Example:

### database.js

```javascript
module.exports = {
  url: process.env.DB_URL,
};
```

Centralizes environment config.

---

# 6. routes/

Defines API endpoints.

```
routes
 ├ index.js
 └ user.routes.js
```

Example:

### user.routes.js

```javascript
const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.getUsers);

module.exports = router;
```

---

# 7. controllers/

Controllers handle **HTTP request + response**.

```
controllers
 └ user.controller.js
```

Example:

```javascript
const userService = require("../services/user.service");

exports.getUsers = async (req, res) => {
  const users = await userService.getUsers();

  res.json(users);
};
```

Controllers remain **thin**.

---

# 8. services/

Business logic layer.

```
services
 └ user.service.js
```

Example:

```javascript
const userRepository = require("../repositories/user.repository");

exports.getUsers = async () => {
  return userRepository.findAll();
};
```

Responsibilities:

```
Business rules
Application workflows
External service calls
```

---

# 9. repositories/

Data access layer.

```
repositories
 └ user.repository.js
```

Example:

```javascript
exports.findAll = async () => {
  return db.query("SELECT * FROM users");
};
```

Repositories isolate **database logic**.

---

# 10. models/

Defines database schema.

Examples:

```
models
 └ user.model.js
```

Example:

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema);
```

---

# 11. middlewares/

Reusable middleware functions.

```
middlewares
 ├ auth.middleware.js
 ├ error.middleware.js
 ├ logger.middleware.js
 └ validation.middleware.js
```

Examples:

```
Authentication
Logging
Error handling
Request validation
```

---

# 12. validators/

Request validation schemas.

```
validators
 └ user.validator.js
```

Example with Zod:

```javascript
const { z } = require("zod");

const userSchema = z.object({
  email: z.string().email(),
});

module.exports = userSchema;
```

---

# 13. utils/

Utility helpers.

```
utils
 ├ asyncHandler.js
 ├ AppError.js
 └ responseFormatter.js
```

Example:

### asyncHandler.js

```javascript
module.exports = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
```

Used for **async error handling**.

---

# 14. jobs/

Background job processing.

```
jobs
 ├ email.job.js
 └ worker.js
```

Example:

```
Send emails
Process uploads
Analytics jobs
```

---

# 15. cache/

Caching utilities.

```
cache
 └ redisCache.js
```

Example:

```
Redis connection
Cache helpers
```

---

# 16. database/

Database infrastructure.

```
database
 ├ connection.js
 └ migrations
```

Handles:

```
DB connection
Migrations
Seeds
```

---

# 17. tests/

Testing architecture.

```
tests
 ├ unit
 ├ integration
 └ api
```

Examples:

```
user.service.test.js
user.routes.test.js
```

---

# 18. constants/

Application constants.

```
constants
 └ index.js
```

Example:

```
HTTP status codes
Default pagination
```

---

# 19. Complete Request Flow in This Architecture

Example request:

```
GET /api/users
```

Flow:

```
Client
 ↓
Route
 ↓
Middleware
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
 ↓
Response
```

---

# 20. Why This Structure Is Used

Benefits:

```
Clear separation of concerns
Scalable architecture
Easy testing
Team collaboration
Maintainable codebase
```

---

# 21. Real Company Architecture (Simplified)

Large companies extend this structure:

```
src
 ├ modules
 │ ├ users
 │ │ ├ controller
 │ │ ├ service
 │ │ ├ repository
 │ │ └ routes
 │
 │ ├ orders
 │ ├ payments
 │ └ notifications
```

Feature-based modular architecture.

---

# 22. Final Mental Model

Production backend structure:

```
src
 ├ routes
 ├ controllers
 ├ services
 ├ repositories
 ├ models
 ├ middlewares
 ├ validators
 ├ config
 ├ utils
 ├ jobs
 ├ cache
 ├ database
 └ tests
```

This architecture supports:

```
Scaling
Testing
Security
Maintainability
```

---
