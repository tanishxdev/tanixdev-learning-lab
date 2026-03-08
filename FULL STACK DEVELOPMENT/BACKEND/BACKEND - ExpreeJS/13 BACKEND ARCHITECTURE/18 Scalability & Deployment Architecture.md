# Backend Architecture

# Topic 18 — Scalability & Deployment Architecture (Deep Dive)

This is the **final topic of Backend Architecture** and one of the most important for real production systems.

It explains:

```text
How backend systems handle millions of users
How applications are deployed to production
```

---

# 1. What is Scalability?

## Simple Definition

Scalability is the ability of a system to **handle increasing traffic, users, and data without performance degradation**.

Example:

```text
100 users → system works
1M users → system still works
```

A scalable backend grows with demand.

---

# 2. Why Scalability Matters

Without scalability:

```text
Traffic spike → server crashes
```

Example:

```text
Black Friday sales
Product launch
Viral application
```

Scalable architecture ensures **system stability under load**.

---

# 3. Mental Model

Think of scalability like **a restaurant expanding seating capacity**.

```text
Small restaurant
 ↓
More customers arrive
 ↓
Add more tables
 ↓
Serve more customers
```

Backend mapping:

```text
Server
 ↓
Traffic increases
 ↓
Add more servers
```

---

# 4. Types of Scaling

There are two primary scaling strategies.

---

# Vertical Scaling (Scale Up)

Increase resources of a single server.

Example:

```text
4 GB RAM → 16 GB RAM
2 CPU → 8 CPU
```

Advantages:

```text
Simple to implement
```

Limitations:

```text
Hardware limits
Expensive
Single point of failure
```

---

# Horizontal Scaling (Scale Out)

Add multiple servers.

Example:

```text
Server 1
Server 2
Server 3
Server 4
```

Requests distributed across servers.

Advantages:

```text
Highly scalable
Fault tolerant
Handles massive traffic
```

Most large systems use **horizontal scaling**.

---

# 5. Load Balancing

Load balancers distribute traffic across multiple servers.

Example architecture:

```text
Client
 ↓
Load Balancer
 ↓
Server 1
Server 2
Server 3
```

Each server handles part of the load.

Popular tools:

```text
NGINX
HAProxy
AWS ELB
```

---

# 6. Stateless Architecture

Scalable systems use **stateless servers**.

Stateless means:

```text
Server does not store session data
```

Instead use:

```text
Database
Redis
JWT tokens
```

Example:

```text
User session stored in Redis
```

Now any server can handle request.

---

# 7. Node.js Scaling with Cluster

Node runs on **single CPU core by default**.

Cluster module allows using multiple CPU cores.

Example:

```javascript
const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  const cpuCount = os.cpus().length;

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    res.send("Running on worker");
  });

  app.listen(3000);
}
```

Each worker handles requests.

---

# 8. Microservices Architecture

Large systems split backend into **multiple services**.

Example:

```text
User Service
Order Service
Payment Service
Notification Service
```

Architecture:

```text
Client
 ↓
API Gateway
 ↓
Microservices
```

Benefits:

```text
Independent scaling
Fault isolation
Independent deployments
```

---

# 9. Deployment Architecture

Deployment refers to **how backend code runs in production servers**.

Typical deployment pipeline:

```text
Developer pushes code
 ↓
CI/CD pipeline
 ↓
Build application
 ↓
Deploy to server
 ↓
Application runs
```

---

# 10. Process Managers

Node servers must stay running.

Process managers help manage server processes.

Popular tools:

```text
PM2
Forever
Docker
```

Example PM2 command:

```bash
pm2 start app.js
```

PM2 features:

```text
Process monitoring
Auto restart
Load balancing
```

---

# 11. Containerization with Docker

Docker packages application with dependencies.

Example Dockerfile:

```dockerfile
FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "app.js"]
```

Benefits:

```text
Consistent environments
Portable deployments
Easy scaling
```

---

# 12. Cloud Deployment

Modern backends run in cloud infrastructure.

Popular cloud providers:

```text
AWS
Google Cloud
Azure
DigitalOcean
```

Deployment targets:

```text
Virtual machines
Containers
Serverless
```

---

# 13. CDN (Content Delivery Network)

CDNs cache static assets globally.

Example:

```text
Images
CSS
JavaScript
```

Architecture:

```text
Client
 ↓
CDN
 ↓
Backend server
```

Popular CDNs:

```text
Cloudflare
AWS CloudFront
Fastly
```

---

# 14. Monitoring & Observability

Scalable systems require monitoring.

Tools:

```text
Prometheus
Grafana
Datadog
New Relic
```

Monitor:

```text
CPU usage
Memory usage
Error rates
Response times
```

---

# 15. Example Production Architecture

Example scalable backend:

```text
Client
 ↓
CDN
 ↓
Load Balancer
 ↓
API Servers
 ↓
Redis Cache
 ↓
Database Cluster
```

This architecture supports **millions of users**.

---

# 16. Deployment Workflow

Typical production workflow:

```text
Developer pushes code
 ↓
CI pipeline runs tests
 ↓
Build Docker image
 ↓
Deploy to Kubernetes / server
 ↓
Application becomes live
```

---

# 17. Scaling Strategies Used by Large Systems

Examples:

Netflix:

```text
Microservices
Global CDN
Auto scaling servers
```

Instagram:

```text
Distributed caching
Database sharding
Horizontal scaling
```

---

# 18. Advantages of Scalable Architecture

```text
Handles large traffic
High availability
Better performance
Fault tolerance
```

---

# 19. Common Scalability Mistakes

### Mistake 1

Storing session in server memory.

---

### Mistake 2

No load balancing.

---

### Mistake 3

Database becomes single bottleneck.

---

### Mistake 4

No caching.

---

# 20. Interview Questions

### Basic

What is scalability?

---

### Intermediate

Difference between vertical and horizontal scaling?

---

### Advanced

How would you scale a Node.js backend?

What is stateless architecture?

---

# 21. Interview Answer Template

What is horizontal scaling?

Answer:

Horizontal scaling is the process of increasing system capacity by adding more servers and distributing the workload among them using a load balancer.

---

# Final Mental Model

Always visualize scalable backend architecture like this:

```text
Client
 ↓
CDN
 ↓
Load Balancer
 ↓
Multiple API Servers
 ↓
Cache Layer
 ↓
Database Cluster
```

This architecture allows systems to **scale from thousands to millions of users**.

---

# Full Backend Architecture

Topics covered:

```text
1 Architecture Fundamentals
2 MVC Pattern
3 Service Layer
4 Repository Pattern
5 Dependency Injection
6 API Design
7 Request Lifecycle
8 Middleware Architecture
9 Validation Architecture
10 Error Handling
11 Configuration Architecture
12 Logging Architecture
13 Security Architecture
14 Data Access Architecture
15 Caching Architecture
16 Background Jobs Architecture
17 Testing Architecture
18 Scalability & Deployment
```
