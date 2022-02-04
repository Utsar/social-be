import express from "express";
import Conversation from "./Schema.js";

const conversationRouter = express.Router();

//create new a conversation
conversationRouter.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).send(savedConversation);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default conversationRouter;
