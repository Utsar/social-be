import express, { Router } from "express";
import User from "../users/schema.js";

const usersRouter = express.Router();

// Get user

usersRouter.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // !user && res.status(404).json("User not found");
    const { password, updatedAt, isAdmin, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update user
usersRouter.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.user.password, salt);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("User updated");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    return res.status(403).json({ message: "Unauthorized" });
  }
});

// Delete user
usersRouter.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    return res.status(403).json({ message: "Unauthorized" });
  }
});

export default usersRouter;
