# 100 Redis Interview Questions

## Redis Fundamentals

1. What is Redis and what are its main features?
2. How does Redis differ from traditional databases?
3. Describe the architecture of Redis.
4. What is an in-memory data store and how does Redis leverage it?
5. What is the default port on which Redis listens?
6. How does Redis provide high performance and low latency?
7. What are the different data types supported in Redis?
8. What is a Redis key and what are the best practices for naming keys?
9. How do you set a time-to-live (TTL) on Redis keys?
10. What is the role of the Redis configuration file (redis.conf)?

## Core Commands and Operations

11. What do the commands SET and GET do in Redis?
12. How do you check if a key exists in Redis?
13. What is the DEL command and how do you use it?
14. Explain the EXPIRE and TTL commands.
15. How do you rename a key in Redis?
16. What are the INCR and DECR commands used for?
17. How do you implement a simple counter in Redis?
18. What is the difference between SETEX and SET with EXPIRE?
19. How do you retrieve multiple keys at once?
20. What are the MSET and MGET commands?

## Redis Data Types

### Strings

21. What are strings in Redis and how are they used?
22. What is the maximum size of a Redis string?
23. How do you append to a string value?
24. What are the bit operations available on Redis strings?
25. How do you get a substring from a Redis string?

### Hashes

26. What are hashes in Redis and when should you use them?
27. How do you set and get fields in a Redis hash?
28. What are HSET, HGET, and HGETALL commands?
29. How do you increment a field value within a hash?
30. What is the advantage of using hashes over multiple string keys?

### Lists

31. What are lists in Redis and how are they implemented?
32. What are the common operations on Redis lists (LPUSH, RPUSH, LPOP, RPOP)?
33. How do you get a range of elements from a list?
34. What is the difference between LPOP and BLPOP?
35. How can you use lists as queues or stacks?

### Sets

36. What are sets in Redis and what makes them unique?
37. How do you add and remove elements from a set?
38. What are the set operations (SADD, SREM, SMEMBERS)?
39. Explain set intersection, union, and difference operations.
40. How do you check if an element exists in a set?

### Sorted Sets

41. What are sorted sets in Redis and how do they differ from regular sets?
42. How do you add elements with scores to a sorted set?
43. What are ZADD, ZRANGE, and ZREVRANGE commands?
44. How do you get elements by score range?
45. What are use cases for leaderboards and ranking systems?

### Bitmaps

46. What is a bitmap in Redis and how is it implemented?
47. How do you set and get bits in a Redis bitmap?
48. What are the BITCOUNT and BITOP commands?
49. What are common use cases for bitmaps?
50. How can you track user behavior using bitmaps?

### HyperLogLogs

51. What are HyperLogLogs in Redis and what problem do they solve?
52. How do you add elements to a HyperLogLog?
53. What is the PFADD, PFCOUNT, and PFMERGE commands?
54. What are the trade-offs of using HyperLogLogs?
55. How accurate is HyperLogLog for cardinality estimation?

### Streams

56. What is a stream in Redis and how is it structured?
57. How do you add entries to a stream (XADD)?
58. What is the XREAD command and how do you read from streams?
59. Explain consumer groups in Redis streams.
60. How do you acknowledge and process messages in a stream?

### Geospatial Data

61. How does Redis support geospatial data?
62. What are the GEOADD, GEOPOS, and GEODIST commands?
63. How do you find nearby locations using GEORADIUS?
64. What are use cases for geospatial indexing?
65. How accurate are Redis geospatial operations?

## Advanced Redis Features

### Pub/Sub

66. What is the Pub/Sub model and how is it implemented in Redis?
67. How do you publish and subscribe to channels?
68. What are the limitations of Redis Pub/Sub?
69. How does Pub/Sub differ from Redis streams?
70. Can you have pattern-based subscriptions?

### Transactions

71. What is a Redis transaction and how do you create one?
72. Explain the MULTI, EXEC, DISCARD, and WATCH commands.
73. What is optimistic locking in Redis transactions?
74. Are Redis transactions atomic? How do they differ from SQL transactions?
75. What happens if a command in a transaction fails?

### Lua Scripting

76. What is Lua scripting in Redis and why would you use it?
77. How do you load and execute Lua scripts (EVAL, EVALSHA)?
78. What are the benefits of using Lua scripts for atomic operations?
79. How do you pass keys and arguments to Lua scripts?
80. What are the best practices for Lua scripting?

### Pipelining

81. What is pipelining in Redis and when would you use it?
82. How does pipelining improve performance?
83. What is the difference between pipelining and transactions?
84. Are pipelined commands executed atomically?
85. How do you implement pipelining with Redis clients?

## Persistence and Durability

86. How does Redis handle data persistence?
87. Explain the difference between RDB and AOF persistence.
88. What are the pros and cons of RDB persistence?
89. What are the pros and cons of AOF persistence?
90. Can you use both RDB and AOF together?
91. How do you configure RDB snapshots (save points)?
92. What is AOF rewrite and why is it important?
93. How do you recover data from persistence files?
94. What is the fsync policy in AOF and how does it affect performance?
95. How do you force a Redis data dump to disk (SAVE vs BGSAVE)?

## Replication and High Availability

96. What is Redis replication and how does it work?
97. How do you set up a Redis replica (slave)?
98. What is master-slave replication in Redis?
99. How does replication handle consistency?
100.  What is replica partial resynchronization?
101.  How do you monitor replication status?
102.  What is Redis Sentinel and what does it provide?
103.  How does Sentinel handle automatic failover?
104.  What are the components of a Sentinel system?
105.  How many Sentinel nodes are recommended for production?

## Redis Cluster

106. What is Redis Cluster and how does it work?
107. How does Redis Cluster shard data across nodes?
108. What is hash slot and how is it used in clustering?
109. How do you create a Redis Cluster?
110. How does Redis Cluster handle failover?
111. What is the role of gossip protocol in Redis Cluster?
112. How do you add or remove nodes in a cluster?
113. What are the limitations of Redis Cluster?
114. How does client redirection work in cluster mode?
115. What is the difference between Redis Sentinel and Redis Cluster?

## Performance and Optimization

116. How do you configure Redis for optimal performance?
117. What are the key performance metrics to monitor?
118. How do you identify and troubleshoot slow commands?
119. What is the slow log and how do you use it?
120. How does Redis handle memory management?
121. What are memory optimization techniques in Redis?
122. Explain Redis memory fragmentation.
123. How do you estimate memory usage for different data types?
124. What is the maxmemory setting and how does it work?
125. What are the different eviction policies in Redis?

## Security

126. What security features does Redis offer?
127. How do you enable authentication in Redis (requirepass)?
128. What is the protected mode in Redis?
129. How do you bind Redis to specific network interfaces?
130. What are ACLs in Redis and how do you configure them?
131. How do you rename dangerous commands for security?
132. Can you encrypt Redis connections with TLS/SSL?
133. What are the security best practices for Redis deployment?
134. How do you isolate Redis in a multi-tenant environment?
135. What are common Redis security vulnerabilities?

## Monitoring and Management

136. What is the INFO command and what information does it provide?
137. How do you monitor Redis performance in production?
138. What are the key Redis metrics to track?
139. How do you use the MONITOR command and its implications?
140. What tools are available for Redis monitoring (RedisInsight, Prometheus, etc.)?
141. How do you capture and analyze Redis slow logs?
142. What is the CLIENT LIST command used for?
143. How do you manage client connections?
144. What is the CONFIG GET and CONFIG SET commands?
145. How do you take and restore Redis backups?

## Redis Modules

146. What are Redis modules and how do they extend functionality?
147. What is RediSearch and what does it provide?
148. Explain RedisJSON and its use cases.
149. What is RedisTimeSeries used for?
150. How do RedisBloom and its probabilistic data structures work?
151. What is RedisGraph and how does it work?
152. How do you load and manage Redis modules?
153. What are the benefits of using modules vs. custom development?
154. Can you create your own Redis modules?
155. What are some popular community Redis modules?

## Use Cases and Application Scenarios

156. How is Redis used for caching?
157. Explain Redis as a session store.
158. How do you implement rate limiting with Redis?
159. What is Redis's role in leaderboards and gaming?
160. How can Redis be used for real-time analytics?
161. Explain Redis as a message broker.
162. How do you implement a job queue with Redis?
163. What is Redis's role in microservices architectures?
164. How can Redis be used for distributed locking?
165. Explain implementing a shopping cart with Redis.
166. How do you use Redis for full-page caching?
167. What is Redis's role in IoT applications?
168. How can Redis be used for fraud detection?
169. Explain Redis in machine learning model serving.
170. How do you implement a real-time notification system?

## Client Libraries and Integration

171. How do you connect to Redis from Python (redis-py)?
172. How do you connect to Redis from Node.js (ioredis, node-redis)?
173. How do you connect to Redis from Java (Jedis, Lettuce)?
174. What is the role of connection pooling in Redis clients?
175. How do you handle connection failures and retries?
176. What are the differences between synchronous and asynchronous Redis clients?
177. How do you implement Redis pipelines with client libraries?
178. How do you use Redis transactions with clients?
179. What is the RESP protocol and how does it work?
180. How do you serialize complex objects for Redis storage?

## Redis in Cloud and Container Environments

181. What are the benefits of using managed Redis services (AWS ElastiCache, Redis Enterprise Cloud, Azure Cache for Redis)?
182. How does AWS ElastiCache differ from self-hosted Redis?
183. What is Redis Enterprise and how does it differ from open-source Redis?
184. How do you deploy Redis in Kubernetes?
185. What are the considerations for Redis in Docker containers?
186. How does cloud networking affect Redis performance?
187. What is the impact of network latency on Redis operations?
188. How do you handle Redis persistence in cloud environments?
189. What are the backup options for cloud-managed Redis?
190. How do you monitor Redis in cloud environments?

## Troubleshooting and Debugging

191. How do you troubleshoot high latency in Redis?
192. What causes Redis to block and how do you identify it?
193. How do you handle "hot keys" in Redis?
194. What is the implications of using the KEYS command in production?
195. How do you identify memory leaks in Redis?
196. How do you recover from a Redis failure?
197. What causes the "MISCONF Redis is configured to save RDB snapshots" error?
198. How do you handle "max number of clients reached" errors?
199. How do you diagnose and fix replication lag?
200. What are the common causes of Redis crashes and how do you debug them?

## Design Patterns and Best Practices

201. What are the best practices for Redis key naming?
202. How do you choose between different Redis data types for a use case?
203. What is the cache-aside pattern and how do you implement it?
204. Explain the write-through and write-behind caching patterns.
205. How do you implement the leaderboard pattern?
206. What is the rate limiter pattern in Redis?
207. Explain the distributed lock pattern with Redis.
208. How do you implement the pub/sub notification pattern?
209. What is the lightweight queue pattern?
210. How do you design for Redis data expiration and eviction?

## Redis vs. Other Technologies

211. How does Redis compare to Memcached?
212. What are the differences between Redis and Hazelcast?
213. How does Redis compare to Apache Ignite?
214. Redis vs. traditional databases for caching?
215. Redis vs. Kafka for messaging?
216. Redis vs. Elasticsearch for search?
217. Redis vs. MongoDB for document storage?
218. What are the trade-offs of using Redis vs. relational databases?
219. When should you choose Redis over other NoSQL databases?
220. How does Redis compare to other in-memory data stores?

## Redis Internals

221. What is the internal architecture of Redis?
222. How does Redis handle event loops and I/O multiplexing?
223. What is the Redis object system?
224. How are Redis data types implemented internally?
225. What is the Redis string encoding (int, embstr, raw)?
226. How are Redis hash tables implemented?
227. What is the Redis skiplist and where is it used?
228. How does Redis handle memory allocation (jemalloc)?
229. What is the Redis protocol (RESP) and how does it work?
230. How does Redis handle threading and concurrency?

## Redis Versions and Evolution

231. What major features were added in Redis 4.0?
232. What are the key improvements in Redis 5.0?
233. What new features came with Redis 6.0?
234. What are the highlights of Redis 7.0?
235. How does Redis handle version upgrades?
236. What is the Redis roadmap and future direction?
237. How does Redis Enterprise differ from open-source Redis?
238. What is the Redis Stack and what does it include?
239. How has the Redis ecosystem evolved over time?
240. What are the licensing changes in Redis and their implications?

## Capacity Planning and Sizing

241. How do you estimate memory requirements for Redis?
242. How many keys can Redis handle efficiently?
243. What is the maximum number of clients Redis can support?
244. How do you calculate the required number of Redis nodes?
245. What factors affect Redis network bandwidth requirements?
246. How do you plan for Redis replication overhead?
247. What is the impact of persistence on performance and capacity?
248. How do you size a Redis Cluster for production?
249. What are the hardware recommendations for Redis?
250. How do you scale Redis as data grows?
