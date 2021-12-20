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
// delete a post
// like a post
// get a post
// get posts of following users

export default postRouter;
