# **Complete Node.js & Express.js Interview Question List**

## **PART 1: NODE.JS INTERVIEW QUESTIONS**

---

## **I. NODE.JS FUNDAMENTALS**

### **1. Core Concepts**

1. What is Node.js and how does it differ from traditional server-side technologies?
2. Explain the V8 JavaScript engine and its role in Node.js.
3. What is the event loop in Node.js? Explain its phases.
4. How does Node.js handle asynchronous operations?
5. What is libuv and what role does it play in Node.js?
6. Why is Node.js single-threaded? How does it handle concurrency?
7. Differentiate between blocking and non-blocking I/O in Node.js.
8. What is REPL in Node.js? How do you use it?

### **2. Node.js Architecture**

9. Explain the Node.js runtime architecture.
10. How does Node.js's single-threaded model handle multiple requests?
11. What is the difference between Node.js and browser JavaScript?
12. How does Node.js communicate with external services?
13. Explain the reactor pattern in Node.js.

---

## **II. MODULES & PACKAGE MANAGEMENT**

### **3. CommonJS Modules**

14. What is a module in Node.js? Explain different types of modules.
15. How does `require()` work? Explain module caching.
16. What is the difference between `exports` and `module.exports`?
17. How does Node.js resolve modules?
18. What is the purpose of `require.resolve()`?
19. Explain the module wrapper function in Node.js.

### **4. ES Modules**

20. How do you use ES Modules in Node.js?
21. What is the difference between CommonJS and ES Modules?
22. How do you enable ES Modules in a Node.js project?
23. What are the challenges of mixing CommonJS and ES Modules?

### **5. NPM & Package Management**

24. What is NPM and what is its purpose?
25. Explain the `package.json` file structure.
26. What is the difference between `dependencies` and `devDependencies`?
27. Explain semantic versioning (semver) in NPM.
28. How do you install, update, and delete dependencies?
29. What is the `node_modules` folder and how does it work?
30. What is `package-lock.json` and why is it important?
31. Differentiate between local and global package installation.
32. What are npm scripts and how do you use them?

---

## **III. CORE MODULES**

### **6. File System (fs) Module**

33. How do you read and write files in Node.js?
34. Differentiate between synchronous and asynchronous file operations.
35. What are streams in Node.js? Explain different types of streams.
36. How do you handle large files efficiently in Node.js?
37. What is piping in Node.js?
38. How do you watch for file changes using the fs module?

### **7. HTTP Module**

39. How do you create an HTTP server in Node.js?
40. Explain the HTTP request and response objects.
41. How do you handle different HTTP methods (GET, POST, PUT, DELETE)?
42. What is the difference between `http` and `https` modules?
43. How do you make HTTP requests from Node.js?

### **8. Path Module**

44. What is the purpose of the `path` module?
45. Differentiate between `path.join()`, `path.resolve()`, and `path.normalize()`.
46. How do you extract filename, extension, or directory from a path?

### **9. OS Module**

47. What information can you get from the `os` module?
48. How do you check system information using the os module?

### **10. Events Module**

49. What is the EventEmitter class?
50. How do you create custom events?
51. Differentiate between `on()`, `once()`, and `emit()` methods.
52. What is event-driven programming in Node.js?

### **11. Process Module**

53. What is the `process` object in Node.js?
54. How do you access environment variables?
55. What is `process.nextTick()` and how does it differ from `setImmediate()`?
56. How do you handle process signals?
57. What is `process.argv` and how do you use it?

### **12. Buffer & Streams**

58. What is a Buffer in Node.js and when would you use it?
59. How do you convert between buffers and strings?
60. Explain the different types of streams: Readable, Writable, Duplex, Transform.
61. How do you handle backpressure in streams?
62. What is object mode in streams?

### **13. Crypto Module**

63. How do you hash passwords using the crypto module?
64. What is encryption and decryption in Node.js?
65. How do you generate secure random numbers?
66. What are HMAC and digital signatures?

### **14. Child Process Module**

67. What is the purpose of the child process module?
68. Differentiate between `spawn()`, `exec()`, `execFile()`, and `fork()`.
69. When would you use worker threads instead of child processes?
70. How do you communicate between parent and child processes?
71. What are the security considerations when using child processes?

### **15. Cluster Module**

72. What is clustering in Node.js and why is it used?
73. How does the cluster module work?
74. Explain master-worker architecture in clustering.
75. How do you handle shared state in a clustered application?

### **16. Other Core Modules**

76. What is the purpose of the `util` module?
77. How do you use the `url` module?
78. What is the `querystring` module used for?
79. Explain the `dns` module.
80. What is the `net` module used for?

---

## **IV. ASYNCHRONOUS PROGRAMMING**

### **17. Callbacks**

81. What are callback functions?
82. What is callback hell and how do you avoid it?
83. What is an error-first callback pattern?

### **18. Promises**

84. What are Promises in Node.js?
85. How do you create and consume promises?
86. Explain Promise chaining.
87. What are `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, and `Promise.any()`?
88. How do you handle errors in promises?

### **19. Async/Await**

89. What is async/await and how does it work?
90. How do you handle errors with async/await?
91. What are the performance considerations of async/await?
92. How do you run async operations in parallel?

### **20. Event Loop Deep Dive**

93. Explain the phases of the event loop: timers, pending callbacks, idle/prepare, poll, check, close callbacks.
94. What is the difference between `setImmediate()` and `setTimeout(fn, 0)`?
95. What is `process.nextTick()` and where does it fit in the event loop?
96. What is the microtask queue vs macrotask queue?

---

## **V. ERROR HANDLING & DEBUGGING**

### **21. Error Handling**

97. How do you handle errors in synchronous code?
98. How do you handle errors in asynchronous code?
99. What are uncaught exceptions and unhandled promise rejections?
100.  How do you create custom error types?
101.  What is domain-based error handling (deprecated)?

### **22. Debugging & Testing**

102. How do you debug a Node.js application?
103. What tools do you use for debugging Node.js?
104. How do you write unit tests for Node.js applications?
105. What is the Test Pyramid?
106. How do you profile and optimize Node.js applications?

---

## **VI. PERFORMANCE & OPTIMIZATION**

### **23. Performance Optimization**

107. How do you optimize Node.js application performance?
108. What are common performance bottlenecks in Node.js?
109. How do you handle CPU-intensive tasks in Node.js?
110. What is memory leak and how do you detect it?
111. How do you use the `--inspect` flag for debugging?

### **24. Caching Strategies**

112. What are different caching strategies in Node.js?
113. How do you implement in-memory caching?
114. When would you use Redis for caching?

### **25. Load Balancing & Scaling**

115. How do you scale Node.js applications?
116. What is load balancing and how do you implement it?
117. How do you handle sessions in a scaled application?

---

## **VII. SECURITY**

### **26. Security Best Practices**

118. What are common security vulnerabilities in Node.js?
119. How do you prevent SQL injection?
120. How do you prevent XSS attacks?
121. What is CSRF and how do you prevent it?
122. How do you secure environment variables?
123. How do you implement rate limiting?

### **27. Authentication & Authorization**

124. How do you implement authentication in Node.js?
125. What is JWT and how do you use it?
126. How do you handle sessions?
127. What is OAuth and how do you implement it?
128. How do you hash and salt passwords?

---

## **VIII. DATABASE INTEGRATION**

### **28. Database Connections**

129. How do you connect Node.js to databases?
130. What is connection pooling and why is it important?
131. How do you handle database migrations?

### **29. MongoDB with Mongoose**

132. How do you use Mongoose with MongoDB?
133. What are schemas and models in Mongoose?
134. How do you handle relationships in MongoDB?
135. What are middleware in Mongoose?

### **30. SQL Databases**

136. How do you connect to SQL databases from Node.js?
137. What are ORMs and how do you use them?
138. How do you prevent SQL injection?

---

## **IX. ADVANCED TOPICS**

### **31. Design Patterns**

139. What are common design patterns used in Node.js?
140. Explain the singleton pattern in Node.js.
141. What is dependency injection in Node.js?
142. How do you implement the repository pattern?

### **32. Microservices**

143. What are microservices and how do you implement them in Node.js?
144. How do you handle inter-service communication?
145. What are the challenges of microservices architecture?

### **33. Real-time Applications**

146. How do you build real-time applications in Node.js?
147. What are WebSockets and how do you use them?
148. What is Socket.io and how does it differ from raw WebSockets?

### **34. Serverless & Cloud**

149. What is serverless architecture?
150. How do you deploy Node.js applications to the cloud?
151. What are AWS Lambda functions with Node.js?

### **35. TypeScript with Node.js**

152. Why use TypeScript with Node.js?
153. How do you set up a TypeScript Node.js project?
154. What are the benefits of TypeScript in backend development?

### **36. Alternative Runtimes**

155. What is Deno and how does it differ from Node.js?
156. What is Bun and how does it differ from Node.js?
157. What are the trade-offs between Node.js, Deno, and Bun?

---

## **X. DEPLOYMENT & DEVOPS**

### **37. Deployment Strategies**

158. How do you deploy Node.js applications?
159. What are different deployment strategies (blue-green, canary)?
160. How do you use Docker with Node.js?

### **38. Monitoring & Logging**

161. How do you monitor Node.js applications in production?
162. What tools do you use for logging?
163. How do you implement structured logging?

### **39. CI/CD Pipeline**

164. How do you set up CI/CD for Node.js applications?
165. What are the best practices for CI/CD pipelines?

---

## **XI. SCENARIO-BASED QUESTIONS**

166. How would you design a high-traffic Node.js application?
167. How would you handle a memory leak in production?
168. How would you debug a slow API endpoint?
169. How would you migrate a callback-based codebase to async/await?
170. How would you implement a file upload feature?
171. How would you design a caching layer?
172. How would you implement background jobs?
173. How would you handle database connection failures?
174. How would you secure an API?
175. How would you implement rate limiting?

---

## **PART 2: EXPRESS.JS INTERVIEW QUESTIONS**

---

## **I. EXPRESS.JS FUNDAMENTALS**

### **1. Core Concepts**

1. What is Express.js and why is it used?
2. Differentiate between Express.js and Node.js HTTP module.
3. What are the main features of Express.js?
4. How do you create a basic Express.js application?
5. What is the default port for Express.js applications?

### **2. Routing**

6. What is routing in Express.js?
7. How do you define routes in Express.js?
8. What are route parameters and how do you use them?
9. How do you handle query parameters in Express.js?
10. What is the difference between `app.get()`, `app.post()`, `app.put()`, and `app.delete()`?
11. What is `app.route()` and when would you use it?
12. What is dynamic routing in Express.js?
13. How do you organize routes in a large application?

### **3. Middleware**

14. What is middleware in Express.js?
15. Explain the middleware execution order.
16. What is the purpose of the `next()` function?
17. How do you create custom middleware?
18. What are error-handling middleware?
19. Differentiate between application-level and router-level middleware.
20. What is the difference between `app.use()` and `app.all()`?

---

## **II. BUILT-IN MIDDLEWARE**

### **4. Body Parsing**

21. How do you parse JSON request bodies?
22. How do you parse URL-encoded data?
23. What is the difference between `express.json()` and `body-parser`?
24. How do you handle multipart/form-data (file uploads)?

### **5. Static Files**

25. How do you serve static files in Express.js?
26. What is `express.static()` middleware?
27. How do you set up a public directory for static files?

### **6. CORS**

28. What is CORS and why is it needed?
29. How do you enable CORS in Express.js?
30. What are preflight requests?

### **7. Compression**

31. How do you enable response compression?
32. What is the `compression` middleware?

### **8. Security Middleware**

33. What is Helmet.js and why should you use it?
34. How do you prevent XSS attacks in Express.js?
35. How do you implement CSRF protection?

---

## **III. THIRD-PARTY MIDDLEWARE**

### **9. Authentication Middleware**

36. How do you implement authentication with Passport.js?
37. What are Passport strategies?
38. How do you use JWT with Express.js?

### **10. Session Management**

39. How do you handle sessions in Express.js?
40. What is `express-session` middleware?
41. How do you store sessions in Redis?
42. Differentiate between session-based and token-based authentication.

### **11. Logging Middleware**

43. How do you implement logging in Express.js?
44. What is Morgan middleware?
45. How do you use Winston for logging?

### **12. Validation Middleware**

46. How do you validate request data?
47. What is `express-validator`?
48. How do you sanitize user input?

### **13. Rate Limiting**

49. How do you implement rate limiting in Express.js?
50. What is `express-rate-limit` middleware?

---

## **IV. ERROR HANDLING**

### **14. Error Handling Patterns**

51. How do you handle errors in Express.js?
52. What is the error-handling middleware signature?
53. How do you create custom error classes?
54. How do you handle async errors in Express.js?
55. How do you handle 404 errors?

### **15. Global Error Handling**

56. How do you implement global error handling?
57. How do you log errors in production?
58. How do you send appropriate error responses to clients?

---

## **V. TEMPLATING & VIEWS**

### **16. Template Engines**

59. What are template engines in Express.js?
60. How do you set up a template engine?
61. What are popular template engines for Express.js?
62. How do you render dynamic views?
63. What is the difference between server-side rendering and client-side rendering?

### **17. EJS/Pug/Handlebars**

64. How do you use EJS with Express.js?
65. How do you use Pug (Jade) with Express.js?
66. How do you use Handlebars with Express.js?
67. How do you pass data to templates?

---

## **VI. DATABASE INTEGRATION**

### **18. Database Setup**

68. How do you connect Express.js to databases?
69. What is connection pooling in Express.js?
70. How do you handle database migrations?

### **19. ORM/ODM Integration**

71. How do you use Mongoose with Express.js?
72. How do you use Sequelize with Express.js?
73. How do you handle database transactions?

### **20. API Design with Databases**

74. How do you design RESTful APIs with Express.js and databases?
75. How do you handle pagination?
76. How do you implement filtering and sorting?
77. How do you handle relationships in API responses?

---

## **VII. API DESIGN & RESTFUL PRINCIPLES**

### **21. REST API Design**

78. What are RESTful principles?
79. How do you design RESTful routes?
80. What are HTTP status codes and when to use them?
81. How do you version APIs in Express.js?
82. What is HATEOAS?

### **22. API Best Practices**

83. How do you structure a large Express.js API?
84. How do you handle API documentation?
85. What is Swagger/OpenAPI and how do you use it with Express.js?
86. How do you implement API rate limiting?

### **23. GraphQL with Express**

87. What is GraphQL and how does it differ from REST?
88. How do you implement GraphQL with Express.js?
89. What is Apollo Server with Express?

---

## **VIII. SECURITY**

### **24. Security Best Practices**

90. How do you secure Express.js applications?
91. What are common security vulnerabilities in Express.js?
92. How do you implement HTTPS in Express.js?
93. How do you use environment variables for sensitive data?

### **25. Input Validation & Sanitization**

94. How do you validate and sanitize user input?
95. What is SQL injection and how do you prevent it?
96. How do you prevent NoSQL injection?

### **26. Authentication & Authorization**

97. How do you implement JWT authentication in Express.js?
98. How do you handle role-based access control (RBAC)?
99. How do you implement OAuth with Express.js?
100.  How do you refresh tokens?

---

## **IX. PERFORMANCE OPTIMIZATION**

### **27. Caching Strategies**

101. How do you implement caching in Express.js?
102. What are different caching strategies?
103. How do you use Redis for caching in Express.js?
104. How do you implement ETags for caching?

### **28. Performance Optimization**

105. How do you optimize Express.js application performance?
106. What are common performance bottlenecks?
107. How do you implement response compression?
108. How do you use clustering with Express.js?

### **29. Load Balancing**

109. How do you load balance Express.js applications?
110. How do you handle sticky sessions?
111. How do you use Nginx with Express.js?

---

## **X. TESTING**

### **30. Testing Strategies**

112. How do you test Express.js applications?
113. What is the difference between unit, integration, and end-to-end tests?
114. How do you mock dependencies in tests?

### **31. Testing Tools**

115. How do you use Jest with Express.js?
116. How do you use Mocha/Chai with Express.js?
117. How do you test API endpoints?
118. How do you test middleware functions?

### **32. Test Coverage**

119. How do you measure test coverage?
120. How do you write tests for error cases?

---

## **XI. DEPLOYMENT & DEVOPS**

### **33. Deployment Strategies**

121. How do you deploy Express.js applications?
122. What are different deployment environments?
123. How do you use PM2 for process management?
124. How do you implement zero-downtime deployments?

### **34. Docker & Containers**

125. How do you Dockerize an Express.js application?
126. What should be in a Dockerfile for Express.js?
127. How do you use Docker Compose with Express.js?

### **35. Monitoring & Logging**

128. How do you monitor Express.js applications in production?
129. What are key metrics to monitor?
130. How do you implement structured logging?
131. How do you use APM tools with Express.js?

---

## **XII. ADVANCED TOPICS**

### **36. WebSockets & Real-time**

132. How do you implement WebSockets in Express.js?
133. What is Socket.io and how do you use it with Express.js?
134. How do you handle real-time features?

### **37. Microservices with Express**

135. How do you build microservices with Express.js?
136. How do you handle inter-service communication?
137. What are API gateways and how do you implement them?

### **38. Serverless Express**

138. How do you use Express.js in serverless environments?
139. What is AWS Lambda with Express.js?
140. What are the limitations of serverless Express?

### **39. GraphQL Integration**

141. How do you integrate GraphQL with Express.js?
142. What are the benefits of GraphQL over REST?
143. How do you handle file uploads with GraphQL?

### **40. TypeScript with Express**

144. Why use TypeScript with Express.js?
145. How do you set up TypeScript with Express.js?
146. What are the benefits of TypeScript in Express.js development?

---

## **XIII. BEST PRACTICES & PATTERNS**

### **41. Application Structure**

147. How do you structure a large Express.js application?
148. What is MVC pattern in Express.js?
149. How do you separate concerns in Express.js?
150. What are service and repository patterns?

### **42. Code Organization**

151. How do you organize routes in a large application?
152. How do you organize middleware?
153. How do you handle configuration management?
154. How do you use environment-specific configurations?

### **43. Development Workflow**

155. What are best practices for Express.js development?
156. How do you use ESLint and Prettier with Express.js?
157. What is hot reloading and how do you set it up?

---

## **XIV. SCENARIO-BASED QUESTIONS**

158. How would you design a RESTful API for an e-commerce application?
159. How would you implement user authentication and authorization?
160. How would you handle file uploads and storage?
161. How would you implement real-time notifications?
162. How would you design a microservices architecture with Express.js?
163. How would you secure an Express.js API?
164. How would you optimize an Express.js application for high traffic?
165. How would you implement rate limiting for an API?
166. How would you handle database transactions across multiple operations?
167. How would you implement search functionality with filters?
168. How would you handle internationalization (i18n) in Express.js?
169. How would you implement background job processing?
170. How would you design a caching strategy for an API?
171. How would you implement WebSockets for a chat application?
172. How would you handle API versioning?
173. How would you implement logging and monitoring in production?
174. How would you deploy an Express.js application with zero downtime?
175. How would you migrate from REST to GraphQL?

---

## **XV. COMPARISON QUESTIONS**

### **Key Differences**

1. **Express.js vs Node.js HTTP module**
2. **Middleware vs Route handlers**
3. **app.use() vs app.get()/app.post()**
4. **Session-based vs Token-based authentication**
5. **REST vs GraphQL**
6. **Express.js vs Koa.js vs Hapi.js**
7. **Monolithic vs Microservices architecture**
8. **Server-side rendering vs Client-side rendering**
9. **SQL vs NoSQL databases with Express.js**
10. **Express.js with TypeScript vs plain JavaScript**

---

## **XVI. PRACTICAL IMPLEMENTATIONS**

### **Algorithms & Patterns to Implement**

1. Implement a custom middleware for authentication
2. Implement error handling middleware
3. Create a RESTful CRUD API
4. Implement JWT authentication
5. Create a file upload endpoint
6. Implement rate limiting middleware
7. Create a caching layer with Redis
8. Implement WebSocket server with Express
9. Create a GraphQL server with Express
10. Implement database transactions

### **System Design Scenarios**

11. Design an e-commerce API
12. Design a social media backend
13. Design a real-time chat application
14. Design a microservices architecture
15. Design a scalable file storage system
16. Design an API gateway
17. Design a notification system
18. Design a search functionality
19. Design a payment processing system
20. Design a monitoring and logging system

---

## **SUMMARY**

### **Total Questions:**

- **Node.js:** 175+ questions
- **Express.js:** 175+ questions
- **Total:** 350+ comprehensive questions

### **Coverage Areas:**

1. **Fundamentals** - Core concepts, architecture
2. **Modules & Packages** - NPM, modules, imports
3. **Asynchronous Programming** - Callbacks, promises, async/await
4. **Core Modules** - fs, http, path, events, streams, etc.
5. **Error Handling & Debugging** - Techniques and tools
6. **Performance & Optimization** - Caching, scaling, monitoring
7. **Security** - Authentication, authorization, vulnerabilities
8. **Database Integration** - SQL, NoSQL, ORMs
9. **Advanced Topics** - Microservices, real-time, serverless
10. **Deployment & DevOps** - Docker, CI/CD, monitoring
11. **Testing** - Strategies, tools, best practices
12. **Scenario-based** - Real-world problems and solutions

This comprehensive list covers everything from basic concepts to advanced topics in both Node.js and Express.js, ensuring thorough preparation for any interview scenario. The questions are organized logically by topic and subtopic, making it easy to study systematically.
