# BACKEND DEVELOPER INTERVIEW QUESTIONS – MASTER LIST (100+)

---

## **Topic 1: HTTP, Web & Networking Fundamentals (15 Questions)**

1. What happens internally when you hit a URL in the browser and press Enter? _(Easy)_
2. What is an API endpoint and how is it different from a route? _(Easy)_
3. Explain the complete HTTP request–response lifecycle. _(Easy)_
4. What does “stateless” mean in HTTP, and why was HTTP designed this way? _(Medium)_
5. Difference between HTTP and HTTPS. How does SSL/TLS work at a high level? _(Medium)_
6. What are HTTP methods (GET, POST, PUT, PATCH, DELETE)? When should each be used? _(Easy)_
7. Difference between PUT vs PATCH with real backend use-cases. _(Medium)_
8. What are HTTP status codes? Explain 2xx, 3xx, 4xx, 5xx with examples. _(Easy)_
9. What are request headers and response headers? Why are they important? _(Easy)_
10. What is CORS? Why does it exist and how do you fix CORS issues? _(Medium)_
11. What are cookies? How are they sent in HTTP requests? _(Easy)_
12. Difference between cookies, localStorage, and sessionStorage. _(Medium)_
13. What are webhooks? How do they work internally? _(Medium)_
14. What is polling vs long polling vs WebSockets? _(Medium)_
15. How would you design a backend for real-time communication? _(Hard)_

**Total: 15**

---

## **Topic 2: REST API Design & API Architecture (14 Questions)**

1. What is REST? What are its core principles? _(Easy)_
2. Difference between REST and RPC style APIs. _(Medium)_
3. What makes an API truly RESTful? _(Medium)_
4. What is idempotency in REST APIs? Why is it important? _(Medium)_
5. How do you design clean and consistent API endpoints? _(Easy)_
6. How should errors be handled and returned in REST APIs? _(Easy)_
7. What is API versioning? Why is it required? _(Medium)_
8. Different API versioning strategies (URL, headers, query params). _(Medium)_
9. What is HATEOAS? Is it practically used? _(Hard)_
10. What are pagination strategies in APIs? _(Easy)_
11. Difference between offset-based and cursor-based pagination. _(Medium)_
12. How do you design APIs for backward compatibility? _(Hard)_
13. How do you design rate-limited public APIs? _(Medium)_
14. REST vs GraphQL – when would you choose each? _(Medium)_

**Total: 14 (Cumulative: 29)**

---

## **Topic 3: Authentication, Authorization & Security (16 Questions)**

1. Difference between authentication and authorization. _(Easy)_
2. What is session-based authentication? _(Easy)_
3. What is token-based authentication? _(Easy)_
4. How does JWT authentication work internally? _(Medium)_
5. What are access tokens and refresh tokens? _(Medium)_
6. Where should JWT be stored and why? _(Medium)_
7. What is OAuth 2.0? Explain the flow at high level. _(Medium)_
8. What is Single Sign-On (SSO)? _(Medium)_
9. How do you implement role-based access control (RBAC)? _(Medium)_
10. What is rate limiting? How is it implemented? _(Medium)_
11. What is SQL Injection? How do you prevent it? _(Easy)_
12. What is XSS and CSRF? How do you protect backend APIs? _(Medium)_
13. How do you securely store passwords? _(Easy)_
14. What is hashing vs encryption? _(Easy)_
15. How would you secure a production-ready backend system? _(Hard)_
16. How do you rotate secrets and tokens in production? _(Hard)_

**Total: 16 (Cumulative: 45)**

---

## **Topic 4: Databases – SQL & NoSQL (18 Questions)**

1. Difference between SQL and NoSQL databases. _(Easy)_
2. When would you choose SQL over NoSQL and vice-versa? _(Medium)_
3. What is normalization? Why is it important? _(Easy)_
4. What are indexes? How do they improve performance? _(Easy)_
5. Downsides of over-indexing. _(Medium)_
6. What are transactions? Explain ACID properties. _(Easy)_
7. What is isolation level in databases? _(Medium)_
8. What are joins? Types of joins with use-cases. _(Easy)_
9. What is a foreign key? Why is it important? _(Easy)_
10. What is database replication? _(Medium)_
11. Difference between replication and sharding. _(Medium)_
12. What is sharding? How does it work? _(Hard)_
13. How do you design database schema for scale? _(Hard)_
14. What is eventual consistency? _(Medium)_
15. How do you handle migrations in production databases? _(Medium)_
16. Difference between soft delete and hard delete. _(Easy)_
17. How do you prevent deadlocks in transactions? _(Hard)_
18. How do you design multi-tenant databases? _(Hard)_

**Total: 18 (Cumulative: 63)**

---

## **Topic 5: Performance, Caching & Optimization (12 Questions)**

1. What is caching and why is it needed? _(Easy)_
2. Difference between client-side and server-side caching. _(Easy)_
3. What is Redis and how is it used in backend systems? _(Medium)_
4. What data should not be cached? _(Medium)_
5. Cache invalidation strategies. _(Medium)_
6. What is TTL in caching? _(Easy)_
7. How does CDN work? _(Medium)_
8. How do you reduce API response time? _(Medium)_
9. What is N+1 query problem? _(Medium)_
10. How do you optimize slow database queries? _(Medium)_
11. How would you debug a performance bottleneck in production? _(Hard)_
12. How do you handle traffic spikes? _(Hard)_

**Total: 12 (Cumulative: 75)**

---

## **Topic 6: Backend Architecture & System Design (13 Questions)**

1. What is monolithic architecture? _(Easy)_
2. What are microservices? _(Easy)_
3. Pros and cons of monolith vs microservices. _(Medium)_
4. What is a reverse proxy? _(Medium)_
5. What is load balancing? _(Medium)_
6. Stateless vs stateful backend services. _(Medium)_
7. How do microservices communicate with each other? _(Medium)_
8. What is API Gateway? _(Medium)_
9. What is service discovery? _(Hard)_
10. What is circuit breaker pattern? _(Hard)_
11. How do you design a scalable backend from scratch? _(Hard)_
12. How do you design a backend for millions of users? _(Hard)_
13. How do you handle failures in distributed systems? _(Hard)_

**Total: 13 (Cumulative: 88)**

---

## **Topic 7: Async Processing, Queues & Background Jobs (8 Questions)**

1. What is synchronous vs asynchronous processing? _(Easy)_
2. What are message queues? Why are they used? _(Medium)_
3. Difference between Kafka, RabbitMQ, and SQS. _(Medium)_
4. What is event-driven architecture? _(Medium)_
5. How do you handle long-running tasks in backend systems? _(Medium)_
6. What is retry mechanism? _(Medium)_
7. How do you ensure message processing reliability? _(Hard)_
8. How do you handle duplicate events? _(Hard)_

**Total: 8 (Cumulative: 96)**

---

## **Topic 8: DevOps, Deployment & Monitoring (8 Questions)**

1. What is CI/CD? _(Easy)_
2. What is Docker and why is it used? _(Medium)_
3. Difference between Docker and Virtual Machines. _(Medium)_
4. What is container orchestration? _(Medium)_
5. What is Kubernetes at high level? _(Hard)_
6. What is blue-green deployment? _(Medium)_
7. What is logging vs monitoring? _(Easy)_
8. How do you debug production issues? _(Hard)_

**Total: 8**

---

# ✅ FINAL COUNT

- **Total Questions: 104**
- **Coverage: End-to-End Backend**
- **Difficulty: Easy → Medium → Hard (Logical Progression)**

---
