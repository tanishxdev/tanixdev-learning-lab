import crypto from "crypto";
import express from "express";
import redis from "../redis.js";

const router = express.Router();

/*
  POST /auth/login
*/
router.post("/login", async (req, res) => {
  const { username } = req.body;

  // generate random session id
  const sessionId = crypto.randomBytes(16).toString("hex");

  /*
    Store session in Redis
    Key: session:<sessionId>
    Value: username
    TTL: 1 hour
  */
  await redis.set(`session:${sessionId}`, username);
  await redis.expire(`session:${sessionId}`, 3600);

  res.json({
    message: "Logged in",
    sessionId,
  });
});

export default router;
