# 1-HOUR MOCK INTERVIEW STRUCTURE

### Total Duration: 60 Minutes

• DSA – 20 mins
• Web Dev (MERN) – 15 mins
• CS Core – 10 mins
• System Design – 15 mins

---

# SECTION 1 — DSA (20 mins)

### Q1.

Given a string `s`, return the length of the longest substring without repeating characters.

Follow-ups:

- Can you solve it in O(n)?
- What data structure will you use?
- How will your solution behave for very large input?
- What if the character set is not limited to ASCII?
- What is the space complexity?

---

### Q2.

You are given an array of integers and an integer `k`.
Split the array into `k` non-empty subarrays such that the largest sum among them is minimized.

Return that minimized value.

Follow-ups:

- How will you decide whether a given maximum sum is valid?
- What is the search range?
- Why does your approach work?
- What happens when `k = 1`?
- What happens when `k = n`?
- Time and space complexity?

---

### Q3.

You are given `n` courses labeled from `0` to `n-1` and a list of prerequisite pairs.
Return whether it is possible to finish all courses.

Follow-ups:

- How will you represent the data?
- How will you detect a cycle?
- What if the graph is disconnected?
- Compare two different approaches.
- Time and space complexity?

---

# SECTION 2 — WEB DEV (MERN STACK) (15 mins)

### Q4.

Explain how React handles rendering when state changes.

Follow-ups:

- What triggers a re-render?
- What is reconciliation?
- How does React compare previous and new UI?
- When does `useEffect` execute?
- What causes infinite re-renders?
- How can you optimize re-render performance?

---

### Q5.

Explain how Node.js handles multiple concurrent requests.

Follow-ups:

- What does single-threaded mean in Node?
- What is non-blocking I/O?
- What happens if a CPU-intensive task runs?
- Difference between `setTimeout` and `setImmediate`?
- How would you scale a Node.js application in production?

---

### Q6.

Design a database structure for:

- Users
- Posts
- Comments

Follow-ups:

- Would you embed or reference related data?
- How would you design indexes?
- How would you optimize a feed query?
- How would pagination work?
- What is an aggregation pipeline?

---

# SECTION 3 — CS CORE (10 mins)

### Q7.

Explain the difference between a process and a thread.

Follow-ups:

- What is context switching?
- What are the necessary conditions for deadlock?
- How can deadlocks be prevented or avoided?
- What happens internally during a context switch?

---

### Q8.

Explain ACID properties in databases.

Follow-ups:

- What are isolation levels?
- What problems occur at different isolation levels?
- Difference between optimistic and pessimistic locking?
- What is normalization?
- When and why would you denormalize?

---

# SECTION 4 — SYSTEM DESIGN (15 mins)

### Q9.

Design a URL shortening service.

Discuss:

- APIs you would design
- Database schema
- How you will generate short URLs
- How you will avoid collisions
- How you will scale reads
- How you will handle high traffic
- Caching strategy
- Load balancing strategy

Deep follow-ups:

- How would you make it highly available?
- What happens if a database node fails?
- How would you handle data replication?
- What trade-offs would you make?

---

# BONUS RAPID FIRE (If Time Permits)

- Difference between REST and GraphQL?
- What is JWT and how does it work?
- What is rate limiting?
- What is CORS?
- Difference between debounce and throttle?
- How does HTTPS work?
- What is CDN?
- What is horizontal vs vertical scaling?
- What is eventual consistency?
