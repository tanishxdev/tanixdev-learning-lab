# **API Design Checklist**

A complete, professional checklist for designing reliable, consistent, secure, scalable APIs.

Use this for **system design**, **backend architecture**, **LLD**, and **real-world microservices**.

---

# **0. Problem Understanding**

Before designing APIs, clarify:

* Who are the consumers? (Frontend? Mobile? Internal services?)
* What workflows must the APIs support?
* What’s the expected traffic?
* Are APIs public or private?
* Are they synchronous or asynchronous?

---

# **1. Endpoint Design**

### ✔ Resource Naming (RESTful)

* Use **nouns**, not verbs
* Plurals preferred

Examples:

```
GET /users
POST /orders
GET /products/{id}
```

### ✔ Consistent URL Structure

```
/users/{id}/orders
/posts/{id}/comments
```

### ✔ Use HTTP methods properly

* GET → fetch
* POST → create
* PUT → replace
* PATCH → partial update
* DELETE → delete

### ✔ Version your APIs

```
/v1/users
/v2/users
```

DON’T break old clients.

---

# **2. Input & Output Format**

### ✔ Choose Content Type (default: JSON)

```
Content-Type: application/json
Accept: application/json
```

### ✔ Response structure

Always return a **consistent envelope**:

```
{
  "data": {...},
  "error": null,
  "meta": {...}
}
```

### ✔ Pagination format

Support offset, cursor, or keyset.

Example:

```
GET /posts?limit=10&cursor=abc123
```

### ✔ Filtering & Sorting

```
GET /products?category=shoes&sort=price&order=asc
```

---

# **3. Status Codes**

### ✔ Success Codes

* 200 OK
* 201 Created
* 204 No Content

### ✔ Client Errors

* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found
* 409 Conflict
* 422 Unprocessable Entity

### ✔ Server Errors

* 500 Internal Server Error
* 503 Service Unavailable

Use correct codes for debugging and monitoring.

---

# **4. Error Handling**

### ✔ Consistent error format

```
{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "User does not exist",
    "details": {...}
  }
}
```

### ✔ Include error identifiers

* helpful for debugging
* log correlation

### ✔ Distinguish retryable errors

Examples:

* 429 (Too Many Requests) → retry later
* 503 (Service Unavailable) → retry with backoff

---

# **5. Authentication & Authorization**

### ✔ Token-based authentication

* JWT
* OAuth2
* API keys
* Session tokens

### ✔ Role-based access control (RBAC)

Example roles:

* admin
* user
* internal-service

### ✔ Principle of least privilege

### ✔ Avoid exposing sensitive fields

---

# **6. Idempotency**

### ✔ Required for:

* Payments
* Order creation
* Resource creation

### ✔ Use Idempotency Keys

```
Idempotency-Key: uuid
```

Prevents duplicate processing.

---

# **7. Rate Limiting**

### ✔ Client-level rate limits

### ✔ IP-based rate limits

### ✔ User-level rate limits

### ✔ Return proper response on throttling

```
HTTP 429 Too Many Requests
Retry-After: 3
```

Rate limits protect backend resources.

---

# **8. Pagination Strategy**

Choose:

* Offset pagination (simple)
* Cursor pagination (reliable for large data)
* Keyset pagination (fastest & stable ordering)

Always include:

```
limit
next_cursor
prev_cursor
total_count (optional)
```

---

# **9. API Performance**

### ✔ Latency Budgets

Set expected:

* p50
* p95
* p99 latency

### ✔ Caching

* client-side cache
* server-side cache (Redis)
* CDN for static assets

### ✔ Compression

Enable gzip/brotli for responses.

---

# **10. Concurrency & Consistency**

### ✔ Use optimistic locking where needed

```
If-Match: <etag>
```

### ✔ Handle duplicate requests gracefully

### ✔ Transaction boundaries

Clearly define atomic operations.

---

# **11. Observability for APIs**

### ✔ Logging

Include:

* trace_id
* user_id
* endpoint
* latency
* status_code

### ✔ Metrics

Track:

* request count
* error count
* latency (p50/p95/p99)
* saturation (threads, CPU, memory)

### ✔ Tracing

Propagate:

```
traceparent
```

headers for distributed tracing.

---

# **12. Security**

### ✔ HTTPS only

### ✔ Input validation

### ✔ SQL injection protection

### ✔ Rate limiting

### ✔ Schema validation (JSON schema)

### ✔ Avoid overexposing internal details

---

# **13. API Stability & Backward Compatibility**

### ✔ Never break existing clients

### ✔ Add new fields → OK

### ✔ Removing fields → version bump

### ✔ Changing structure → version bump

### ✔ Deprecation policy

---

# **14. Bulk APIs**

Support where needed:

```
POST /users/bulk
```

Good for:

* imports
* batch processing

Add:

* partial failure handling
* async job monitoring

---

# **15. Async APIs (Job-Based APIs)**

When long-running tasks exist:

Steps:

1. Client submits job → POST
2. Server returns job_id
3. Client polls → GET /jobs/{job_id}
4. Job completes → success or failure

Good for:

* image processing
* ML tasks
* heavy DB migrations

---

# **16. Webhooks & Events**

Checklist:

* retries with backoff
* idempotency
* signing & verification
* event versioning

---

# **17. GraphQL or gRPC (If Applicable)**

### When to choose GraphQL?

* flexible client queries
* avoid overfetching
* mobile optimization

### When to choose gRPC?

* low latency
* strong contracts
* microservices communication

---

# **18. Testing Checklist**

### ✔ Unit tests for business logic

### ✔ Contract tests

### ✔ Load tests

### ✔ Fuzz tests for inputs

### ✔ Canary testing

---

# **19. Documentation Checklist**

### ✔ OpenAPI/Swagger spec

### ✔ Error codes list

### ✔ Sample requests & responses

### ✔ SDK examples

### ✔ Deprecation policy

---

# **20. Interview Summary (30 seconds)**

Good API design ensures consistent resource naming, proper error handling, correct status codes, idempotency, authentication, validation, and observability.
It supports scalability with pagination, rate limiting, caching, and async processing.
Security, backward compatibility, and clear versioning are essential for long-lived APIs.
