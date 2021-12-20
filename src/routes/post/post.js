import express, { Router } from "express";
import Post from "./schema.js";

const postRouter = express.Router();

// create a post

postRouter.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).send(savedPost);
  } catch (error) {
    res.status(500).send(error);
  }
});
// update a post
postRouter.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).send("Post updated");
    } else {
      req.status(403).send("You are not authorized to update this post");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
// delete a post
postRouter.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne({ $set: req.body });
      res.status(200).send("Post deleted");
    } else {
      req.status(403).send("You are not authorized to delete this post");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// like & dislike a post

postRouter.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).send("Post liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).send("Post unliked");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
// get a post
// get posts of following users

export default postRouter;
