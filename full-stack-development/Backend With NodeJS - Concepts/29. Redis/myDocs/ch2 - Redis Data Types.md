# **Common Docker Challenge: "Container name already in use"**

## 🚨 Problem Faced at Start of Chapter 2

When trying to start Redis with:
```bash
docker run -d -p 6379:6379 --name redis redis
```

You got this error:
```
docker: Error response from daemon: Conflict. 
The container name "/redis" is already in use...
```

## 🤔 Why This Happened

### The Root Cause
You **already created** a Redis container in Chapter 1. Docker containers have **unique names**.

### Docker's Behavior
1. `docker run` → Creates **new** container
2. Container name must be **unique**
3. Old container exists (even if stopped) → Name conflict

### The Confusion Point
```bash
docker ps  # Shows nothing??
```
Why? Because `docker ps` shows **only running containers**, not stopped ones.

## 🔍 Understanding Container States

### Four States of a Docker Container
```
CREATED → RUNNING → STOPPED → REMOVED
```

Your container was in **STOPPED** state from Chapter 1.

## ✅ The Fix (Two Options)

### Option 1: Start Existing Container (Recommended)
```bash
# Check all containers (running + stopped)
docker ps -a

# You'll see:
# CONTAINER ID   IMAGE   STATUS         NAMES
# abc123def456   redis   Exited (0)     redis

# Start the existing container
docker start redis

# Verify it's running
docker ps
```

### Option 2: Fresh Start (Remove & Recreate)
```bash
# If you want fresh data
docker stop redis
docker rm redis
docker run -d -p 6379:6379 --name redis redis
```

## 📊 Container Lifecycle Cheat Sheet

| State | How to Get There | How to Check |
|-------|-----------------|--------------|
| **Running** | `docker run` or `docker start` | `docker ps` |
| **Stopped** | `docker stop` | `docker ps -a` |
| **Removed** | `docker rm` | Gone forever |

## 🎯 Key Takeaways

### 1. **docker ps vs docker ps -a**
```bash
docker ps      # Only RUNNING containers
docker ps -a   # ALL containers (running + stopped)
```

### 2. **Container Names are Unique**
- Think of container name like a username
- Can't have two "redis" containers at same time
- Solution: Use different name or remove old one

### 3. **Daily Workflow Pattern**
```bash
# End of day
docker stop redis

# Next day
docker start redis  # NOT docker run
docker exec -it redis redis-cli
```

### 4. **When to Use docker run**
Only when:
- First time setup
- Want fresh data (after `docker rm`)
- Different name/configuration needed

## 💡 Pro Tip: Container Naming Strategy

```bash
# Versioned names (for different setups)
docker run --name redis-chapter2 ...
docker run --name redis-test ...

# Auto-remove (for testing)
docker run --rm --name temp-redis ...

# Anonymous containers (let Docker assign name)
docker run -d redis  # No --name flag
```

## 🚀 Chapter 2 Ready Checklist

Before starting Chapter 2 exercises, ensure:

1. ✅ Redis container exists: `docker ps -a | grep redis`
2. ✅ Redis is running: `docker ps | grep redis`
3. ✅ Can connect: `docker exec -it redis redis-cli`
4. ✅ Basic commands work: `PING` → `PONG`

**If all checkboxes are green, you're ready for:**  
→ Redis LIST commands  
→ Redis SET operations  
→ User Activity Tracker project

---

## 📝 Quick Reference Card

### Common Docker Redis Commands
```bash
# Check if Redis container exists
docker ps -a | grep redis

# Start existing Redis
docker start redis

# Connect to Redis CLI
docker exec -it redis redis-cli

# Stop Redis
docker stop redis

# Remove Redis container
docker rm redis

# Fresh Redis instance
docker run -d -p 6379:6379 --name redis redis
```

**Remember:** This is a **normal Docker learning moment** - every developer faces this when starting with containers!

Ready to continue? Type "Redis LIST commands start" when your container is running.

# Chapter 2: Redis Data Types - Complete Learning Guide

## 🎯 Overview
Redis isn't just a simple key-value store - it's a **Data Structure Store**. This chapter will transform how you think about Redis and teach you to choose the right data type for each use case.

## 📊 The 5 Core Redis Data Types

### 1. **STRING** (The Most Basic)
**What it is**: Text or binary data up to 512MB
**Use Case**: Simple values, counters, cache

```bash
# Basic operations
SET name "Tanish"
GET name

# Counters (Super useful!)
SET views 0
INCR views        # → 1
INCR views        # → 2
INCRBY views 10   # → 12
DECR views        # → 11
```

**Real Example**: Page views, user status, OTP codes

---

### 2. **LIST** (Ordered Collection)
**What it is**: Ordered list of strings (like an array)
**Key Feature**: Can push/pop from both ends

```bash
# Create a timeline of user activities
LPUSH user:1:activities "Logged in"
LPUSH user:1:activities "Viewed profile"
LPUSH user:1:activities "Posted comment"

# Get last 5 activities
LRANGE user:1:activities 0 4

# Remove from end
RPOP user:1:activities
```

**Operations**:
- `LPUSH` - Add to left (beginning)
- `RPUSH` - Add to right (end)
- `LPOP` - Remove from left
- `RPOP` - Remove from right
- `LRANGE` - Get range of items
- `LLEN` - Get list length

**Real Example**: News feed, chat messages, recent searches

---

### 3. **SET** (Unique Collection)
**What it is**: Unordered collection of unique strings
**Key Feature**: No duplicates, fast membership checks

```bash
# Track unique visitors
SADD article:123:visitors "user1"
SADD article:123:visitors "user2"
SADD article:123:visitors "user1"  # Won't add duplicate

# Check if user visited
SISMEMBER article:123:visitors "user1"  # → 1 (true)

# Get all visitors
SMEMBERS article:123:visitors

# Get count
SCARD article:123:visitors

# Set operations (powerful!)
SADD friends:tanish "alice" "bob" "charlie"
SADD friends:alice "bob" "david"
SINTER friends:tanish friends:alice  # Common friends → ["bob"]
```

**Real Example**: Unique page visitors, tags, friends list

---

### 4. **HASH** (Field-Value Pairs)
**What it is**: Map between string fields and string values
**Key Feature**: Perfect for objects

```bash
# Store user profile
HSET user:1000 name "Tanish" age 25 email "tanish@example.com"

# Get specific field
HGET user:1000 name  # → "Tanish"

# Get all fields
HGETALL user:1000
# Output:
# 1) "name"
# 2) "Tanish"
# 3) "age"
# 4) "25"
# 5) "email"
# 6) "tanish@example.com"

# Update single field
HSET user:1000 age 26

# Increment numeric field
HINCRBY user:1000 age 1  # age becomes 27
```

**Real Example**: User profiles, product details, configuration

---

### 5. **ZSET** (Sorted Set)
**What it is**: Set with score for ordering
**Key Feature**: Automatically sorted by score

```bash
# Leaderboard system
ZADD leaderboard 1500 "player1"
ZADD leaderboard 3200 "player2"
ZADD leaderboard 2800 "player3"

# Get top 3 players
ZREVRANGE leaderboard 0 2 WITHSCORES
# Output:
# 1) "player2"
# 2) "3200"
# 3) "player3"
# 4) "2800"
# 5) "player1"
# 6) "1500"

# Get player's rank (0-based)
ZREVRANK leaderboard "player2"  # → 0 (top rank)

# Get players with score between 2000-3000
ZRANGEBYSCORE leaderboard 2000 3000
```

**Real Example**: Leaderboards, priority queues, time-series data

## 🎮 Mini Project: User Activity Tracker

Let's build a complete user tracking system using all 5 data types!

### Project Setup
```bash
# Make sure Redis is running
docker start redis
docker exec -it redis redis-cli
```

### 1. **User Profile (HASH)**
```bash
# Store complete user profile
HSET user:5001 username "tanish_kumar" 
HSET user:5001 email "tanish@example.com"
HSET user:5001 membership "premium"
HSET user:5001 created_at "2024-01-15"
```

### 2. **Recent Activities (LIST) - Last 10 actions**
```bash
# Track user activities (most recent first)
LPUSH user:5001:activities "Logged in via mobile"
LPUSH user:5001:activities "Viewed product P123"
LPUSH user:5001:activities "Added to cart"
LPUSH user:5001:activities "Made purchase $49.99"

# Get recent 5 activities
LRANGE user:5001:activities 0 4
```

### 3. **Unique Devices (SET)**
```bash
# Track devices user logged in from
SADD user:5001:devices "iPhone-13"
SADD user:5001:devices "MacBook-Pro"
SADD user:5001:devices "iPhone-13"  # Duplicate, won't add
SADD user:5001:devices "Windows-PC"

# Count unique devices
SCARD user:5001:devices  # → 3

# Check if user logged in from MacBook
SISMEMBER user:5001:devices "MacBook-Pro"  # → 1 (true)
```

### 4. **Points Leaderboard (ZSET)**
```bash
# User's score in global leaderboard
ZADD global_leaderboard 15420 "user:5001"
ZADD global_leaderboard 28900 "user:6002"
ZADD global_leaderboard 12300 "user:7003"

# Add points when user performs actions
ZINCRBY global_leaderboard 100 "user:5001"  # Award 100 points

# Get user's rank
ZREVRANK global_leaderboard "user:5001"

# Get top 10 leaderboard
ZREVRANGE global_leaderboard 0 9 WITHSCORES
```

### 5. **Session Data (STRING with TTL)**
```bash
# Store session with 30-minute expiry
SETEX session:abc123xyz 1800 '{"user_id":5001,"last_active":"2024-01-15T10:30:00"}'

# Check remaining TTL
TTL session:abc123xyz

# Get session data
GET session:abc123xyz
```

## 📝 Complete Query Example

Let's query everything about our user:

```bash
# 1. Get basic profile
HGETALL user:5001

# 2. Get recent activities
LRANGE user:5001:activities 0 4

# 3. Get devices
SMEMBERS user:5001:devices

# 4. Get leaderboard position
ZSCORE global_leaderboard "user:5001"
ZREVRANK global_leaderboard "user:5001"

# 5. Total memory used by this user's data
# (Advanced - shows memory optimization)
MEMORY USAGE user:5001
MEMORY USAGE user:5001:activities
MEMORY USAGE user:5001:devices
```

## 🧠 When to Use Which Data Type?

### Decision Flowchart
```
Is it a simple value? → STRING
    ↓
Is it an object with multiple fields? → HASH
    ↓
Need to maintain order? → LIST
    ↓
Need uniqueness? → SET
    ↓
Need scoring/ranking? → ZSET
```

### Quick Reference Guide

| Data Type | Best For | Example | Memory Per Item |
|-----------|----------|---------|-----------------|
| **STRING** | Simple values, counters | `SET page:views 1000` | ~50 bytes |
| **HASH** | Objects, configurations | User profile | ~100 bytes |
| **LIST** | Timelines, queues | News feed, chat | ~80 bytes/item |
| **SET** | Unique items, tags | Friends list, interests | ~80 bytes/item |
| **ZSET** | Rankings, scores | Leaderboards, priority | ~100 bytes/item |

## ⚡ Performance Insights

### O(1) Operations (Super Fast)
- `GET`, `SET` for STRING
- `HGET`, `HSET` for single field in HASH
- `SADD`, `SISMEMBER` for SET
- `ZSCORE` for ZSET

### O(N) Operations (Be Careful with Large N)
- `HGETALL` (returns all fields)
- `SMEMBERS` (returns all members)
- `LRANGE 0 -1` (returns entire list)

### Memory Optimization Tips
1. **Small hashes** (<100 fields) are very memory efficient
2. **Use hashes** instead of separate keys for object properties
3. **Set TTL** for temporary data
4. **Monitor memory** with `INFO memory`

## 🔍 Practical Exercises

### Exercise 1: Build a Shopping Cart
```bash
# Using HASH for cart items
HSET cart:user5001 "item:123" 2  # 2 quantities of item 123
HSET cart:user5001 "item:456" 1
HINCRBY cart:user5001 "item:123" 1  # Add one more

# Get cart total items
HLEN cart:user5001
```

### Exercise 2: Implement News Feed
```bash
# When user posts something
LPUSH newsfeed:user5001 "New post: Learning Redis!"

# When user follows someone
# Merge feeds (simplified)
LPUSH newsfeed:user5001 "Followed user6002's post"
```

### Exercise 3: Tag System
```bash
# Add tags to article
SADD article:789:tags "redis"
SADD article:789:tags "database"
SADD article:789:tags "tutorial"

# Find articles with both redis and database
SINTER tag:redis:articles tag:database:articles
```

## 🎯 Chapter 2 Checklist

### ✅ Concepts Mastered
- [ ] All 5 Redis data types
- [ ] When to use each type
- [ ] Memory considerations
- [ ] Performance implications

### ✅ Commands Learned
- [ ] STRING: SET, GET, INCR, DECR
- [ ] LIST: LPUSH, RPUSH, LPOP, RPOP, LRANGE
- [ ] SET: SADD, SMEMBERS, SISMEMBER, SINTER
- [ ] HASH: HSET, HGET, HGETALL, HINCRBY
- [ ] ZSET: ZADD, ZRANGE, ZREVRANGE, ZSCORE

### ✅ Mini Project Completed
- [ ] User profile (HASH)
- [ ] Activity tracker (LIST)
- [ ] Device management (SET)
- [ ] Leaderboard (ZSET)
- [ ] Session (STRING with TTL)

## 🚀 Next Steps Ready

### What's Working Now
- ✅ Multi-data type understanding
- ✅ Real-world use cases
- ✅ Memory awareness
- ✅ Performance consciousness

### Chapter 3 Preview: Redis in Backend Applications
- Connecting Node.js/Express to Redis
- Cache patterns (Cache-Aside, Write-Through)
- Session management
- Rate limiting implementation
- Real API with Redis caching

---

## 💡 Pro Tips from This Chapter

1. **Hashes are your friend** for objects - more efficient than separate keys
2. **ZSETs are magical** for anything needing sorting/ranking
3. **Always consider TTL** - Redis is for ephemeral data
4. **Monitor `INFO memory`** when scaling
5. **Use pipeline** for multiple operations (we'll learn in next chapter)

**Ready to connect Redis to a real backend?** Reply with "Chapter 3: Redis + Node.js Integration"