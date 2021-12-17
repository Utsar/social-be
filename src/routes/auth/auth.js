import express from "express";
import User from "../users/schema.js";

const authRouter = express.Router();

// Register
authRouter.post("/register", async (req, res) => {
  const user = await new User({
    username: "kristianSocial",
    email: "social-app@gmail.com",
    password: "123456",
  });
  await user.save();
  res.send("ok");
});

export default authRouter;
