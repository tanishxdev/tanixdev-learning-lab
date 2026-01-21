# Chapter 1: Redis + Docker - The Complete Learning Journey

## 🎯 Overview

This chapter documents your first experience learning Docker and Redis from absolute scratch. Every step, confusion, and breakthrough is captured here to create a perfect learning roadmap for future reference.

## 📚 What We Learned

### 1. **Why Docker Exists**

- **Problem Solved**: "It works on my machine" syndrome
- **Core Idea**: Package app + environment together in a container
- **Key Benefit**: Same behavior everywhere (Local → Team → Production)

### 2. **Docker Core Concepts**

- **Image** = Blueprint/Recipe (e.g., `redis:latest`)
- **Container** = Running instance of an image
- **Volume** = Persistent data storage outside containers
- **Docker Desktop** = GUI tool to manage everything

### 3. **Why Redis Exists**

- **Problem Solved**: Database is slow (disk-based)
- **Core Idea**: Keep frequently accessed data in RAM
- **Speed Difference**: Microseconds (RAM) vs Milliseconds (Disk)

### 4. **Redis Core Concepts**

- **In-memory key-value store**
- **TTL (Time To Live)** = Automatic expiry
- **Use Cases**: Sessions, OTP, Cache, Rate limiting
- **Redis ≠ Permanent database** (it's a helper)

## 🛠️ Installation Journey

### Docker Setup on Windows

1. **Installed Docker Desktop**
2. **Selected WSL 2** (not Hyper-V)
3. **Faced WSL update requirement** → Fixed via PowerShell
4. **Ubuntu installation** inside WSL
5. **Docker Desktop verification** ✅

### Common Installation Issues & Fixes

```
# WSL Repair Sequence
wsl --update
wsl --shutdown
wsl --unregister docker-desktop
wsl --unregister docker-desktop-data
wsl --install
```

## 🐳 Docker Commands Mastered

### Basic Lifecycle

```bash
# Run Redis in background
docker run -d -p 6379:6379 --name redis redis

# Check running containers
docker ps

# Stop container
docker stop redis

# Start stopped container
docker start redis

# Delete container
docker rm redis

# See all containers (running + stopped)
docker ps -a
```

### Image Management

```bash
# Delete image
docker rmi redis/redisinsight

# Pull specific version
docker run redis/redisinsight:2.50
```

## 🔴 Redis Commands Mastered

### Basic Data Operations

```bash
# Enter Redis CLI
docker exec -it redis redis-cli

# Store data
SET name "Tanish"

# Retrieve data
GET name

# Delete data
DEL name

# TTL (Expiry)
SET otp 123456 EX 10  # Auto-delete in 10 seconds
```

## 🎨 Redis UI (RedisInsight)

### Two Approaches Tried

1. **Browser-based** (localhost:8001) → Failed on Windows + WSL
2. **Desktop App** → Successfully installed and connected

### Connection Details

- **Host**: `127.0.0.1` or `localhost`
- **Port**: `6379`
- **No username/password** for local setup

## 🤔 Major Confusions & Solutions

### 1. **Terminal Context Confusion**

**Problem**: Mixed Docker commands in Redis CLI

```bash
# ❌ WRONG (in redis-cli)
127.0.0.1:6379> docker stop redis

# ✅ RIGHT (in PowerShell)
PS C:\Users\TK> docker stop redis
```

**Solution**: Clear separation:

- **PowerShell** → Docker commands
- **redis-cli** → Redis commands

### 2. **"Unable to find image locally" Message**

**Misunderstanding**: Thought it was an error
**Reality**: Normal behavior - Docker downloads image first time

### 3. **Volume Deletion Error**

**Error**: Couldn't delete volumes because container was using them
**Solution**: Container → Stop → Delete → Volume Delete

### 4. **RedisInsight UI Not Opening**

**Issue**: Browser showed "ERR_EMPTY_RESPONSE"
**Root Cause**: Windows + WSL + RedisInsight web mode compatibility issue
**Fix**: Use RedisInsight Desktop App instead

## 🧠 Mental Models Developed

### Docker Hierarchy

```
Image (redis:latest)
    ↓
Container (redis - running instance)
    ↓
Volume (optional persistent storage)
```

### When to Use Which Tool

| Tool         | Purpose              | Where to Run     |
| ------------ | -------------------- | ---------------- |
| Docker       | Container management | PowerShell       |
| Redis CLI    | Data operations      | redis-cli prompt |
| RedisInsight | Visualization        | Desktop App      |

## 🔄 Daily Workflow Established

### End of Day

```bash
# Stop Redis
docker stop redis

# Verify
docker ps  # Should be empty
```

### Start Next Day

```bash
# Start Redis
docker start redis

# Enter Redis CLI
docker exec -it redis redis-cli
```

## 📈 Learning Progression

### Phase 1: Setup & Basics ✅

- Docker installation
- Redis container running
- Basic commands working

### Phase 2: Understanding ✅

- Image vs Container
- TTL concept
- UI connection

### Phase 3: Common Issues ✅

- Volume management
- Port conflicts
- Windows-specific problems

## 🎯 Key Takeaways

1. **Docker is for isolation**, Redis is for speed
2. **Images are templates**, Containers are running instances
3. **Redis data is temporary** (unless persisted via volumes)
4. **Always know your context** (PowerShell vs redis-cli)
5. **Industry standard** = Redis in Docker containers

## 🚀 Ready for Next Chapter

### Current Status

- ✅ Docker running smoothly
- ✅ Redis operational
- ✅ Basic commands mastered
- ✅ UI connected
- ✅ Daily workflow established

### Next Chapter Preview

- Redis + Node.js integration
- Real-world cache patterns
- Docker Compose for multi-container apps
- Production deployment concepts

---

## 💡 Pro Tips for Future Reference

1. **When stuck**: Check `docker ps` and `docker logs`
2. **Before deleting**: Stop → Remove → Delete
3. **Redis persistence**: Use volumes for important data
4. **Version pinning**: Use specific tags (not just `latest`)
5. **Cleanup regularly**: `docker system prune -a`

This chapter represents a solid foundation. The confusion you experienced is normal and actually beneficial - it means you're grappling with real infrastructure concepts, not just surface-level tutorials.

**Ready for Chapter 2?** Reply with "Chapter 2: Redis + Backend Integration"
