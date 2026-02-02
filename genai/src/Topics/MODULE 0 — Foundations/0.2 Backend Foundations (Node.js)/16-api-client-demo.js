import express from "express";
import { getPost, createPost } from "./api/genericClient.js";

const app = express();
app.use(express.json());

app.get("/post/:id", async (req, res) => {
  const post = await getPost(req.params.id);
  res.json(post);
});

app.post("/post", async (req, res) => {
  const result = await createPost(req.body);
  res.json(result);
});

app.listen(3004, () => {
  console.log("API Client Demo running on port 3004");
});
