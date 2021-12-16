import express from "express";
import User from "../users/schema.js";

const authRouter = express.Router();

// Register
authRouter.post("/auth/register", async (req, res) => {
  const user = await new User({
    username: "kristian",
    email: "utsar@gmail.com",
    password: "123456",
  });
  await user.save();
  res.send("ok");
});

export default authRouter;
