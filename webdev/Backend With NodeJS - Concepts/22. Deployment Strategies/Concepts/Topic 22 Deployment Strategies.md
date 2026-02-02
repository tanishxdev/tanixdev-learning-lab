# Topic 22 Deployment Strategies (Production Setup + PM2 + Env Config + Hosting)

---

### **Concept**

**What is Deployment?**
Deployment means moving your **Node.js application** from a local development setup to a **production server** — so that users can access it publicly.

When deploying, we focus on:

1. **Environment configuration**
2. **Error handling**
3. **Performance & reliability**
4. **Server management**
5. **Security**

---

### **Why Deployment Strategy Matters**

| Problem                   | Solution                                            |
| ------------------------- | --------------------------------------------------- |
| App crashes on error      | Use **PM2** process manager                         |
| Sensitive info in code    | Use **.env files** for secrets                      |
| Manual restarts           | PM2 auto restarts on crash                          |
| Hard to scale             | Use **load balancers or cloud** (AWS, Render, etc.) |
| Inconsistent environments | Separate dev/test/prod `.env` configs               |

---

### **Deployment Pipeline Overview**

1. **Prepare the Project for Production**

   * Set up `.env`
   * Add error handling
   * Configure logs
2. **Use PM2** to manage the Node.js process.
3. **Use Nginx (optional)** for reverse proxy.
4. **Host it** on a cloud platform (Render, Railway, AWS EC2, etc.)
5. **Monitor and restart automatically** on crash.

---

### **Folder Setup**

```
deploy-demo/
│
├── app.js
├── .env
├── package.json
└── ecosystem.config.js
```

---

## **Step 1: Setup Environment Variables**

**Install dotenv**

```bash
npm install dotenv
```

**File:** `.env`

```
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/deployDB
JWT_SECRET=my_super_secret_key
```

**File:** `app.js`

```js
// ===========================
// Example: Env + Express Setup
// ===========================

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('DB Error:', err));

// Simple Route
app.get('/', (req, res) => res.send('Deployment Demo Running Successfully!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

### **Run and Test Locally**

```bash
node app.js
```

Visit:
`http://localhost:4000`
→ Should return: **“Deployment Demo Running Successfully!”**

---

## **Step 2: PM2 Process Manager (Production Running)**

**Install PM2 globally:**

```bash
npm install -g pm2
```

**Start app using PM2:**

```bash
pm2 start app.js --name "deploy-demo"
```

**View all running processes:**

```bash
pm2 list
```

**Monitor logs:**

```bash
pm2 logs
```

**Restart app automatically on crash:**

```bash
pm2 restart deploy-demo
```

**Stop & delete process:**

```bash
pm2 stop deploy-demo
pm2 delete deploy-demo
```

---

### **Optional: Create PM2 Config File**

**File:** `ecosystem.config.js`

```js
module.exports = {
  apps: [
    {
      name: "deploy-demo",
      script: "app.js",
      instances: 1,            // Or use "max" for all CPU cores
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        NODE_ENV: "development",
        PORT: 4000
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 8080
      }
    }
  ]
};
```

**Run using config:**

```bash
pm2 start ecosystem.config.js --env production
```

---

## **Step 3: Reverse Proxy Setup (Using Nginx)**

When hosting on a VPS (like AWS EC2), you can use **Nginx** as a reverse proxy.

**Basic Nginx Config:**

```bash
sudo nano /etc/nginx/sites-available/nodeapp
```

**Add this:**

```
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Enable and restart Nginx:**

```bash
sudo ln -s /etc/nginx/sites-available/nodeapp /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

Now your app runs publicly on **[http://your-domain.com](http://your-domain.com)**

---

## **Step 4: Deployment Options**

| Platform         | Type  | Notes                                          |
| ---------------- | ----- | ---------------------------------------------- |
| **Render**       | Cloud | Easiest for beginners (auto deploy via GitHub) |
| **Railway.app**  | Cloud | Fast deploy, free tier available               |
| **Vercel**       | Cloud | Frontend-only hosting (for APIs use Render)    |
| **AWS EC2**      | VPS   | Full control, best for scaling                 |
| **Heroku**       | Cloud | Deprecated free tier but simple setup          |
| **DigitalOcean** | VPS   | Affordable for small projects                  |

---

### **Render Example Deployment (Free & Simple)**

1. Push your code to GitHub.
2. Go to [https://render.com](https://render.com)
3. Create a new “Web Service”.
4. Connect your GitHub repo.
5. Set:

   * **Start Command:** `npm start`
   * **Environment Variables:**

     ```
     PORT=4000
     MONGO_URI=<your MongoDB Atlas URI>
     JWT_SECRET=<secret>
     ```
6. Click **Deploy** — Render will auto-build and host it.

---

## **Step 5: Use MongoDB Atlas for Cloud DB**

1. Visit [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a free cluster.
3. Get the connection string:

   ```
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDB
   ```
4. Add it to `.env`:

   ```
   MONGO_URI=mongodb+srv://tanish:password@cluster0.mongodb.net/bookStore
   ```

---

### **Mini Project: Deployment-Ready API**

**Goal:** Prepare Book API for production deployment with PM2 and environment variables.

**Steps:**

1. Move all constants (PORT, DB URL, JWT key) to `.env`.
2. Start with `pm2 start ecosystem.config.js`.
3. Connect to **MongoDB Atlas**.
4. Deploy via Render or EC2.

---

### **Production Best Practices**

| Category             | Recommendation                              |
| -------------------- | ------------------------------------------- |
| **Process Manager**  | Use PM2 for uptime and logs                 |
| **Error Handling**   | Use global error middleware                 |
| **Environment Vars** | Store secrets in `.env`                     |
| **Security**         | Use HTTPS + Helmet                          |
| **Logging**          | Use `morgan` or Winston for request logs    |
| **Database**         | Use cloud DB (MongoDB Atlas)                |
| **Scaling**          | Use `pm2 cluster mode` or Docker containers |
| **Restart Policy**   | Auto restart using PM2 or systemd           |

---

### **Quick Summary Table**

| Tool               | Purpose                      | Command                      |
| ------------------ | ---------------------------- | ---------------------------- |
| **dotenv**         | Manage environment variables | `require('dotenv').config()` |
| **PM2**            | Process manager              | `pm2 start app.js`           |
| **MongoDB Atlas**  | Cloud database               | Connect using `.env`         |
| **Nginx**          | Reverse proxy                | Route traffic to Node server |
| **Render/Railway** | Cloud host                   | Automatic deployment         |

---

### **Notes**

* **Never commit `.env` files** — add to `.gitignore`.
* **Use PM2 logs** to debug crashes easily.
* **Cluster mode** improves performance by using all CPU cores:

  ```bash
  pm2 start app.js -i max
  ```
* **Always use HTTPS** in production (via Nginx or provider).
* For long-term uptime, combine **PM2 + Nginx + Cloud DB**.

---
