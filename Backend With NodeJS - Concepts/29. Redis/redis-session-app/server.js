import express from "express";
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
