# 200 SQL Interview Questions

## SQL Fundamentals

1. What is SQL and what are its main features?
2. How does SQL differ from NoSQL databases?
3. What are the different types of SQL commands?
4. What is a query in SQL?
5. What is a table in SQL and how is it structured?
6. Describe what a database schema is.
7. What is the default port for common SQL databases (MySQL, PostgreSQL, SQL Server)?
8. How does SQL provide data integrity and consistency?
9. What are indexes in SQL, and why are they used?
10. What is the role of primary keys in SQL tables?

## CRUD Operations

11. How do you create a new table in SQL?
12. What is the syntax to insert data into a SQL table?
13. Describe how to read data from a SQL table using SELECT.
14. Explain how to update records in a SQL table.
15. What are the SQL commands for deleting data?
16. How do you join two tables in SQL? Explain different join types.
17. How do you limit the number of rows returned by a SQL query?
18. What is the difference between SELECT and SELECT DISTINCT?
19. How can you achieve pagination in SQL?
20. What are the differences between INSERT, INSERT INTO, and INSERT ALL?

## Filtering and Sorting

21. Explain the purpose of the WHERE clause.
22. What is the difference between WHERE and HAVING clauses?
23. How do you use the ORDER BY clause?
24. Describe the use of the BETWEEN operator.
25. Explain the purpose of the IN operator.
26. What are wildcard characters and how is the LIKE operator used?
27. How do you handle NULL values in SQL?
28. What does the COALESCE function do?
29. Explain the IS NULL and IS NOT NULL operators.
30. How do you use logical operators (AND, OR, NOT) in SQL?

## SQL Joins and Set Operations

31. Define what a JOIN is in SQL and list its types.
32. Explain the differences between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.
33. What is a self JOIN and when would you use it?
34. Describe a cross JOIN and its use cases.
35. What is the difference between UNION and UNION ALL?
36. Explain the INTERSECT operator.
37. What is the EXCEPT (or MINUS) operator?
38. How do you perform a natural join?
39. What is an anti-join and how do you implement it?
40. Explain the difference between JOIN and subquery.

## Aggregation and Grouping

41. What are aggregate functions in SQL? List common ones.
42. Explain the purpose of the GROUP BY clause.
43. What is the difference between COUNT(\*) and COUNT(column_name)?
44. How does HAVING differ from WHERE?
45. Describe how to use SUM, AVG, MIN, and MAX functions.
46. What happens if you SELECT a column not in the GROUP BY clause?
47. How do you use GROUP BY with multiple columns?
48. Explain the ROLLUP and CUBE extensions.
49. What is the GROUPING SETS clause?
50. How can you filter grouped data?

## Subqueries and Nested Queries

51. What is a subquery and when would you use one?
52. Explain the difference between correlated and non-correlated subqueries.
53. What are EXISTS and NOT EXISTS and how do they differ from IN?
54. Can you nest subqueries multiple levels deep?
55. How do you use a subquery in the SELECT clause?
56. Explain how to use a subquery in the FROM clause.
57. What is the difference between subquery and JOIN?
58. When should you use EXISTS instead of IN?
59. How do you use subqueries with aggregate functions?
60. What is a scalar subquery?

## Advanced SQL Concepts

61. Explain window functions and how they are used.
62. What is the difference between RANK(), DENSE_RANK(), and ROW_NUMBER()?
63. Explain the purpose of LAG and LEAD functions.
64. What does the NTILE() function do?
65. How do you calculate a running total in SQL?
66. Explain Common Table Expressions (CTEs) and recursive CTEs.
67. What is a pivot table and how do you create one in SQL?
68. Describe the CASE statement and its uses.
69. What is the MERGE statement (UPSERT)?
70. Explain how to use the PIVOT and UNPIVOT operators.

## Database Design and Constraints

71. What is a primary key and why is it important?
72. Explain what a foreign key is and how it maintains referential integrity.
73. What are the different types of constraints in SQL?
74. What is the purpose of the UNIQUE constraint?
75. Explain the CHECK constraint with examples.
76. What is a composite primary key?
77. Describe the DEFAULT constraint.
78. What is normalization? Explain the different normal forms (1NF, 2NF, 3NF, BCNF).
79. Explain denormalization and when you would use it.
80. What is the Entity-Relationship Model?

## Indexing and Performance Optimization

81. What are indexes and how do they improve query performance?
82. Explain the difference between clustered and non-clustered indexes.
83. What is a composite index?
84. How does indexing affect performance both positively and negatively?
85. What are the trade-offs of using indexes?
86. How do you identify and optimize slow-running queries?
87. What is a query execution plan?
88. Explain how to use EXPLAIN or EXPLAIN ANALYZE.
89. What is a SARGable query?
90. How do you prevent SQL injection?

## Transactions and Concurrency

91. What is a database transaction?
92. Explain the ACID properties.
93. What are the different transaction isolation levels?
94. What does it mean to commit or roll back a transaction?
95. Explain locking and its types in SQL databases.
96. What is a deadlock and how do you resolve it?
97. What is the difference between blocking and deadlocking?
98. How do you manage concurrent access to data?
99. What are optimistic and pessimistic locking?
100.  Explain the purpose of savepoints in transactions.

## Views, Stored Procedures, and Functions

101. What is a SQL View and what are its advantages?
102. What are materialized views and how do they differ from standard views?
103. What is a stored procedure and how is it beneficial?
104. Explain the difference between a function and a stored procedure.
105. What is a trigger in SQL and when should it be used?
106. Describe scalar-valued and table-valued functions.
107. How do you create and use user-defined functions (UDFs)?
108. What are the advantages of using stored procedures over embedded SQL?
109. Can you create and use stored procedures in all SQL databases?
110. What is a cursor and when would you use one?

## Data Types and Functions

111. List the different data types available in SQL.
112. What are the differences between CHAR, VARCHAR, and TEXT?
113. How does SQL store different types of numerical data?
114. Explain how SQL handles DateTime data types.
115. What is the purpose of the CAST and CONVERT functions?
116. How do you use string functions in SQL (CONCAT, SUBSTRING, LENGTH)?
117. Describe date functions (DATEADD, DATEDIFF, EXTRACT).
118. What are mathematical functions in SQL?
119. How do you use the COALESCE and NULLIF functions?
120. Explain the ISNULL and IFNULL functions.

## Data Manipulation and ETL

121. What is the process of Extract, Transform, Load (ETL)?
122. How do you import data from a flat file into SQL?
123. Explain how to export data from SQL to external formats.
124. How do you handle data cleansing using SQL?
125. What are temporary tables and how are they used?
126. Explain the difference between local and global temporary tables.
127. How do you perform bulk insert operations?
128. What is the TRUNCATE command and how does it differ from DELETE?
129. How do you copy data from one table to another?
130. What are sequences and identity columns?

## Security and Administration

131. How do you implement database security in SQL?
132. What are roles and how do they manage database access?
133. Explain the concept of row-level security.
134. How do you create users and grant privileges?
135. What is the difference between GRANT and REVOKE?
136. How can you protect a web application from SQL injection?
137. Explain database encryption methods.
138. What is authentication and authorization in databases?
139. How do you audit database activity?
140. Describe backup and recovery strategies.

## Advanced Analytical SQL

141. How would you find the Nth highest salary from a table?
142. How do you find duplicate records in a table?
143. Explain how to calculate moving averages in SQL.
144. How would you find the mode (most frequent value) in a column?
145. How do you calculate median in SQL?
146. What are percentile functions?
147. How do you perform cohort analysis in SQL?
148. Explain how to calculate retention rates.
149. How would you find gaps in sequential data?
150. Describe how to handle hierarchical data in SQL.

## SQL in Modern Architectures

151. How can SQL be integrated with big data technologies?
152. Discuss SQL interoperability with cloud-based data stores.
153. What is a data lake and how can SQL interact with it?
154. Explain the interaction between SQL and NoSQL in the same application.
155. How does SQL work within microservices architecture?
156. What are change data capture (CDC) techniques?
157. How do you synchronize data between SQL databases?
158. Explain database sharding and partitioning.
159. What is the difference between horizontal and vertical scaling?
160. How do you handle distributed transactions?

## Troubleshooting and Best Practices

161. What steps do you take to troubleshoot a failed SQL query?
162. How do you decipher and resolve deadlocks?
163. What methods do you employ to ensure data integrity?
164. How can you recover data from a corrupt database?
165. What are common SQL coding best practices?
166. How do you document SQL code effectively?
167. What methods do you use for version controlling SQL scripts?
168. How can you ensure portability of SQL scripts across database systems?
169. What are the benefits of using ORM frameworks with SQL?
170. How do you monitor SQL database performance in production?

## Database-Specific SQL

171. What are the differences between MySQL and PostgreSQL?
172. Explain SQL Server-specific features (T-SQL).
173. What are Oracle-specific SQL features (PL/SQL)?
174. Describe SQLite and its use cases.
175. What is MariaDB and how does it differ from MySQL?
176. Explain PostgreSQL's JSONB data type.
177. What are MySQL storage engines (InnoDB, MyISAM)?
178. Describe SQL Server's Query Store feature.
179. What is Oracle's RAC (Real Application Clusters)?
180. How do you use PostgreSQL's full-text search?

## Use Cases and Scenarios

181. In what scenarios is SQL favored over NoSQL databases?
182. How would you model a many-to-many relationship in SQL?
183. Describe how to design a database for an e-commerce application.
184. How would you approach writing SQL for a reporting application?
185. Explain how to handle time zones in SQL databases.
186. How do you use SQL in financial applications?
187. What are common patterns for logging and audit trails?
188. How would you design a schema for a social media application?
189. Explain how to implement a voting or rating system in SQL.
190. How do you handle soft deletes?

## Data Warehousing and OLAP

191. Explain the difference between OLTP and OLAP systems.
192. What is a star schema?
193. Describe the snowflake schema.
194. What are fact tables and dimension tables?
195. Explain slowly changing dimensions (SCD).
196. What is a data warehouse?
197. How do you design for analytical queries?
198. What are aggregate tables and why are they used?
199. Explain ETL vs ELT.
200. How do you implement data versioning in a data warehouse?
