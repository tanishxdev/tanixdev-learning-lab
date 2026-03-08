# Backend Architecture

# Topic 16 — Background Jobs Architecture (Deep Dive)

Background Jobs Architecture is used when **a backend must perform tasks that should not block the main request-response cycle**.

Examples:

```text
Sending emails
Processing images/videos
Generating reports
Payment processing
Notifications
Data syncing
```

These tasks can take **seconds or minutes**, so they must run **asynchronously in the background**.

---

# 1. What are Background Jobs?

## Simple Definition

Background Jobs are **tasks executed outside the main request-response flow so that the user does not have to wait for them to complete.**

---

## Basic Idea

Without background jobs:

```text
Client
 ↓
Server
 ↓
Long task
 ↓
Response (slow)
```

User waits for the task.

With background jobs:

```text
Client
 ↓
Server
 ↓
Add task to queue
 ↓
Immediate response
 ↓
Worker processes task later
```

The request finishes quickly.

---

# 2. Mental Model

Think of background jobs like **a restaurant kitchen queue**.

```text
Customer orders food
 ↓
Order added to queue
 ↓
Chef processes order
 ↓
Food delivered
```

Backend mapping:

```text
Client request
 ↓
Job added to queue
 ↓
Worker processes job
 ↓
Task completed
```

---

# 3. Where Background Jobs Fit in Architecture

Typical backend architecture:

```text
Client
 ↓
Controller
 ↓
Service
 ↓
Job Queue
 ↓
Worker
 ↓
External service / database
```

---

# 4. Example Problem

User registers on website.

Actions needed:

```text
Create user
Send welcome email
Send analytics event
Create onboarding tasks
```

If done synchronously:

```text
User waits for everything
```

Bad user experience.

Better solution:

```text
Create user
 ↓
Add background job
 ↓
Return response immediately
```

Email sent later by worker.

---

# 5. Background Job Architecture Components

Background job systems typically contain:

```text
Job Queue
Producer
Worker
Queue storage
```

---

### Producer

Adds jobs to queue.

Example:

```text
API server
```

---

### Queue

Stores pending jobs.

Example:

```text
Redis
RabbitMQ
Kafka
```

---

### Worker

Processes jobs.

Workers run separately from main server.

---

# 6. Popular Node Job Queue Tools

Common tools used in Node.js:

```text
BullMQ
Agenda
RabbitMQ
Kafka
Bee-Queue
```

Most popular:

```text
BullMQ + Redis
```

---

# 7. BullMQ Example

Install:

```bash
npm install bullmq
```

---

### Create Queue

```javascript
const { Queue } = require("bullmq");

const emailQueue = new Queue("emailQueue", {
  connection: {
    host: "localhost",
    port: 6379,
  },
});
```

---

### Add Job to Queue

Example API:

```javascript
app.post("/signup", async (req, res) => {
  const user = await createUser(req.body);

  await emailQueue.add("sendWelcomeEmail", {
    email: user.email,
  });

  res.send("User created");
});
```

Request finishes quickly.

---

# 8. Worker Example

Worker processes queued jobs.

```javascript
const { Worker } = require("bullmq");

const worker = new Worker("emailQueue", async (job) => {
  if (job.name === "sendWelcomeEmail") {
    console.log("Sending email to", job.data.email);

    // send email logic
  }
});
```

Worker runs in background.

---

# 9. Background Job Workflow

Example signup flow:

```text
User signup request
 ↓
API server creates user
 ↓
Job added to queue
 ↓
API response returned
 ↓
Worker picks job
 ↓
Email sent
```

User doesn't wait.

---

# 10. Retry Mechanism

Jobs may fail.

Example:

```text
Email service down
```

Queue systems support **retry policies**.

Example:

```javascript
await emailQueue.add("sendEmail", data, {
  attempts: 3,
});
```

If job fails → retry automatically.

---

# 11. Delayed Jobs

Some jobs run later.

Example:

```text
Send reminder email after 24 hours
```

BullMQ example:

```javascript
await emailQueue.add("reminderEmail", data, {
  delay: 24 * 60 * 60 * 1000,
});
```

---

# 12. Scheduled Jobs (Cron Jobs)

Background jobs can run on schedule.

Examples:

```text
Daily analytics report
Nightly database cleanup
Email digest
```

Example using node-cron:

```bash
npm install node-cron
```

Example:

```javascript
const cron = require("node-cron");

cron.schedule("0 0 * * *", () => {
  console.log("Running daily job");
});
```

Runs every midnight.

---

# 13. Real World Examples

### Email Sending

```text
User signup
 ↓
Add email job
 ↓
Worker sends email
```

---

### Image Processing

```text
User uploads image
 ↓
Job added
 ↓
Worker resizes image
```

---

### Video Processing

```text
Upload video
 ↓
Job queue
 ↓
Worker transcodes video
```

---

### Payment Processing

```text
Order created
 ↓
Payment verification job
 ↓
Update order status
```

---

# 14. Background Jobs vs Synchronous Processing

| Feature          | Synchronous | Background Jobs |
| ---------------- | ----------- | --------------- |
| User wait time   | High        | Low             |
| Performance      | Slow        | Fast            |
| Scalability      | Poor        | High            |
| Failure handling | Hard        | Easy            |

---

# 15. Background Job Architecture Diagram

```text
Client
 ↓
API Server
 ↓
Job Queue
 ↓
Worker
 ↓
External Service
```

Workers can scale independently.

---

# 16. Advantages of Background Jobs

```text
Faster API responses
Better scalability
Reliable task execution
Retry mechanisms
Async processing
```

---

# 17. Disadvantages

```text
More infrastructure
Queue management complexity
Debugging async jobs harder
```

---

# 18. Common Mistakes

### Mistake 1

Running heavy tasks inside API request.

---

### Mistake 2

No retry mechanism.

---

### Mistake 3

No monitoring for failed jobs.

---

# 19. Interview Questions

### Basic

What are background jobs?

---

### Intermediate

Why should long-running tasks run in background?

---

### Advanced

How do job queues work?

Difference between worker and queue?

---

# 20. Interview Answer Template

What are background jobs?

Answer:

Background jobs are tasks that run asynchronously outside the main request-response cycle. They are typically used for long-running operations such as sending emails, processing files, or generating reports so that the main API response remains fast.

---

# Final Mental Model

Always visualize:

```text
Client
 ↓
API Server
 ↓
Job Queue
 ↓
Worker
 ↓
Task executed
```

Background jobs allow backend systems to **process heavy tasks asynchronously without blocking user requests**.

---
