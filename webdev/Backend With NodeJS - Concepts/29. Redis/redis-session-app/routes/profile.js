import express from "express";
import redis from "../redis.js";

const router = express.Router();

/*
  Middleware to check session
*/
async function authMiddleware(req, res, next) {
  const sessionId = req.headers["x-session-id"];

  if (!sessionId) {
    return res.status(401).json({ error: "No session" });
  }

  // Check Redis
  const user = await redis.get(`session:${sessionId}`);

  if (!user) {
    return res.status(401).json({ error: "Invalid session" });
  }

  req.user = user;
  next();
}

router.get("/", authMiddleware, (req, res) => {
  res.json({
    username: req.user,
    secretData: "This came from protected route",
  });
});

export default router;
